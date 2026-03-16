const LS_THEME_KEY = "crazy8.theme";

function clamp(n, min, max) {
  return Math.max(min, Math.min(max, n));
}

function pad2(n) {
  return String(n).padStart(2, "0");
}

function formatMMSS(totalSeconds) {
  const s = Math.max(0, Math.ceil(totalSeconds));
  const mm = Math.floor(s / 60);
  const ss = s % 60;
  return `${pad2(mm)}:${pad2(ss)}`;
}

function nowMs() {
  return performance.now();
}

function getTheme() {
  const saved = localStorage.getItem(LS_THEME_KEY);
  return saved === "dark" ? "dark" : "light";
}

function setTheme(theme) {
  const t = theme === "dark" ? "dark" : "light";
  document.documentElement.setAttribute("data-theme", t);
  localStorage.setItem(LS_THEME_KEY, t);
  syncThemeButtons(t);
}

function syncThemeButtons(theme) {
  const lightBtn = document.getElementById("themeLightBtn");
  const darkBtn = document.getElementById("themeDarkBtn");
  lightBtn.setAttribute("aria-pressed", theme === "light" ? "true" : "false");
  darkBtn.setAttribute("aria-pressed", theme === "dark" ? "true" : "false");
}

function fileToObjectUrl(file) {
  if (!file) return null;
  return URL.createObjectURL(file);
}

class SoundPlayer {
  constructor() {
    this._minuteUrl = null;
    this._finalUrl = null;
    this._minuteAudio = null;
    this._finalAudio = null;
    this._volume = 0.75;

    this._audioCtx = null;
  }

  setVolume(v) {
    this._volume = clamp(v, 0, 1);
    if (this._minuteAudio) this._minuteAudio.volume = this._volume;
    if (this._finalAudio) this._finalAudio.volume = this._volume;
  }

  setMinuteFile(file) {
    if (this._minuteUrl) URL.revokeObjectURL(this._minuteUrl);
    this._minuteUrl = fileToObjectUrl(file);
    this._minuteAudio = this._minuteUrl ? new Audio(this._minuteUrl) : null;
    if (this._minuteAudio) this._minuteAudio.volume = this._volume;
  }

  setFinalFile(file) {
    if (this._finalUrl) URL.revokeObjectURL(this._finalUrl);
    this._finalUrl = fileToObjectUrl(file);
    this._finalAudio = this._finalUrl ? new Audio(this._finalUrl) : null;
    if (this._finalAudio) this._finalAudio.volume = this._volume;
  }

  async _ensureAudioCtx() {
    if (!this._audioCtx) {
      this._audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }
    if (this._audioCtx.state === "suspended") {
      await this._audioCtx.resume();
    }
  }

  async _beep({ freq = 880, durationMs = 220, type = "sine", gain = 0.08 } = {}) {
    await this._ensureAudioCtx();
    const ctx = this._audioCtx;

    const osc = ctx.createOscillator();
    const g = ctx.createGain();

    osc.type = type;
    osc.frequency.value = freq;
    g.gain.value = 0;

    osc.connect(g);
    g.connect(ctx.destination);

    const t0 = ctx.currentTime;
    const t1 = t0 + durationMs / 1000;

    const scaledGain = gain * (0.15 + this._volume * 0.85);
    g.gain.setValueAtTime(0, t0);
    g.gain.linearRampToValueAtTime(scaledGain, t0 + 0.01);
    g.gain.exponentialRampToValueAtTime(0.0001, t1);

    osc.start(t0);
    osc.stop(t1 + 0.01);
  }

  async playMinute() {
    if (this._minuteAudio) {
      this._minuteAudio.currentTime = 0;
      try {
        await this._minuteAudio.play();
        return;
      } catch {
        // fall through to beep
      }
    }
    await this._beep({ freq: 880, durationMs: 200, type: "square", gain: 0.07 });
  }

  async playFinal() {
    if (this._finalAudio) {
      this._finalAudio.currentTime = 0;
      try {
        await this._finalAudio.play();
        return;
      } catch {
        // fall through to beep
      }
    }
    await this._beep({ freq: 660, durationMs: 180, type: "sine", gain: 0.06 });
    await this._beep({ freq: 990, durationMs: 220, type: "sine", gain: 0.06 });
  }
}

class Crazy8Timer {
  constructor({ onTick, onSketchBoundary, onDone }) {
    this.onTick = onTick;
    this.onSketchBoundary = onSketchBoundary;
    this.onDone = onDone;

    this.resetConfig({ sketches: 8, minutesPerSketch: 1 });

    this._running = false;
    this._startMs = 0;
    this._elapsedBeforeMs = 0;
    this._raf = 0;
    this._lastBoundaryIdx = 0;
  }

  resetConfig({ sketches, minutesPerSketch }) {
    this.sketches = clamp(Math.floor(sketches), 1, 99);
    this.minutesPerSketch = clamp(Math.floor(minutesPerSketch), 1, 60);
    this.sketchSeconds = this.minutesPerSketch * 60;
    this.totalSeconds = this.sketches * this.sketchSeconds;
    this.reset();
  }

  get running() {
    return this._running;
  }

  get elapsedSeconds() {
    const elapsedMs = this._running ? (nowMs() - this._startMs) + this._elapsedBeforeMs : this._elapsedBeforeMs;
    return elapsedMs / 1000;
  }

  get remainingSeconds() {
    return Math.max(0, this.totalSeconds - this.elapsedSeconds);
  }

  get currentSketchIndex() {
    const e = this.elapsedSeconds;
    const idx0 = Math.min(this.sketches - 1, Math.floor(e / this.sketchSeconds));
    return idx0;
  }

  get remainingInSketchSeconds() {
    const e = this.elapsedSeconds;
    const inSketch = e % this.sketchSeconds;
    return Math.max(0, this.sketchSeconds - inSketch);
  }

  start() {
    if (this._running) return;
    this._running = true;
    this._startMs = nowMs();
    this._tick();
  }

  pause() {
    if (!this._running) return;
    this._elapsedBeforeMs += nowMs() - this._startMs;
    this._running = false;
    if (this._raf) cancelAnimationFrame(this._raf);
    this._raf = 0;
    this._emitTick();
  }

  reset() {
    this._running = false;
    this._startMs = 0;
    this._elapsedBeforeMs = 0;
    this._lastBoundaryIdx = 0;
    if (this._raf) cancelAnimationFrame(this._raf);
    this._raf = 0;
    this._emitTick();
  }

  _emitTick() {
    if (this.onTick) {
      this.onTick({
        sketches: this.sketches,
        minutesPerSketch: this.minutesPerSketch,
        sketchSeconds: this.sketchSeconds,
        totalSeconds: this.totalSeconds,
        elapsedSeconds: this.elapsedSeconds,
        remainingSeconds: this.remainingSeconds,
        currentSketchIndex: this.currentSketchIndex,
        remainingInSketchSeconds: this.remainingInSketchSeconds,
        running: this._running,
      });
    }
  }

  _tick = () => {
    this._emitTick();

    const elapsed = this.elapsedSeconds;
    const boundaryIdx = Math.floor(elapsed / this.sketchSeconds);

    if (boundaryIdx > this._lastBoundaryIdx) {
      const nextIdx = Math.min(boundaryIdx, this.sketches);
      this._lastBoundaryIdx = boundaryIdx;
      if (nextIdx >= this.sketches) {
        this._running = false;
        this._elapsedBeforeMs = this.totalSeconds * 1000;
        this._emitTick();
        if (this.onDone) this.onDone();
        return;
      }
      if (this.onSketchBoundary) this.onSketchBoundary({ nextSketchIndex: nextIdx });
    }

    if (this.remainingSeconds <= 0) {
      this._running = false;
      this._elapsedBeforeMs = this.totalSeconds * 1000;
      this._emitTick();
      if (this.onDone) this.onDone();
      return;
    }

    if (this._running) this._raf = requestAnimationFrame(this._tick);
  };
}

function main() {
  const totalRemaining = document.getElementById("totalRemaining");
  const sketchCounter = document.getElementById("sketchCounter");
  const sketchRemainingLabel = document.getElementById("sketchRemainingLabel");
  const statusLabel = document.getElementById("statusLabel");
  const totalProgressFill = document.getElementById("totalProgressFill");

  const startPauseBtn = document.getElementById("startPauseBtn");
  const startPauseLabel = document.getElementById("startPauseLabel");
  const resetBtn = document.getElementById("resetBtn");

  const sketchesInput = document.getElementById("sketchesInput");
  const minutesPerSketchInput = document.getElementById("minutesPerSketchInput");
  const volumeInput = document.getElementById("volumeInput");
  const minuteSoundInput = document.getElementById("minuteSoundInput");
  const finalSoundInput = document.getElementById("finalSoundInput");

  const themeToggle = document.getElementById("themeToggle");
  const themeLightBtn = document.getElementById("themeLightBtn");
  const themeDarkBtn = document.getElementById("themeDarkBtn");

  const overlay = document.getElementById("overlay");
  const overlayBadge = document.getElementById("overlayBadge");
  const overlayTitle = document.getElementById("overlayTitle");
  const overlaySubtitle = document.getElementById("overlaySubtitle");

  let overlayTimer = 0;
  const sound = new SoundPlayer();
  sound.setVolume(parseFloat(volumeInput.value));

  const showOverlay = ({ badge, title, subtitle }) => {
    overlayBadge.textContent = badge;
    overlayTitle.textContent = title;
    overlaySubtitle.textContent = subtitle;
    overlay.hidden = false;
    if (overlayTimer) window.clearTimeout(overlayTimer);
    overlayTimer = window.setTimeout(() => {
      overlay.hidden = true;
      overlayTimer = 0;
    }, 5000);
  };

  const timer = new Crazy8Timer({
    onTick: (s) => {
      totalRemaining.textContent = formatMMSS(s.remainingSeconds);
      sketchCounter.textContent = `${s.currentSketchIndex + 1} / ${s.sketches}`;
      sketchRemainingLabel.textContent = `Sketch remaining: ${formatMMSS(s.remainingInSketchSeconds)}`;
      const pct = s.totalSeconds <= 0 ? 0 : (s.elapsedSeconds / s.totalSeconds) * 100;
      totalProgressFill.style.width = `${clamp(pct, 0, 100).toFixed(3)}%`;

      if (!s.running && s.elapsedSeconds <= 0) statusLabel.textContent = "Ready";
      else if (s.running) statusLabel.textContent = "Running";
      else if (!s.running && s.remainingSeconds <= 0) statusLabel.textContent = "Complete";
      else statusLabel.textContent = "Paused";

      startPauseLabel.textContent = s.running ? "Pause" : s.remainingSeconds <= 0 ? "Start" : "Start";
      startPauseBtn.classList.toggle("btn--primary", !s.running);
      startPauseBtn.classList.toggle("btn--secondary", s.running);
    },
    onSketchBoundary: async ({ nextSketchIndex }) => {
      const sketches = timer.sketches;
      showOverlay({
        badge: "Next",
        title: "Move to next sketch!",
        subtitle: `Sketch ${nextSketchIndex + 1} of ${sketches}`,
      });
      await sound.playMinute();
    },
    onDone: async () => {
      showOverlay({
        badge: "Done",
        title: "All sketches complete.",
        subtitle: `${timer.sketches} sketches • ${timer.minutesPerSketch} min each`,
      });
      await sound.playFinal();
    },
  });

  const applyConfigFromInputs = () => {
    const sketches = parseInt(sketchesInput.value, 10);
    const minutesPerSketch = parseInt(minutesPerSketchInput.value, 10);
    timer.resetConfig({
      sketches: Number.isFinite(sketches) ? sketches : 8,
      minutesPerSketch: Number.isFinite(minutesPerSketch) ? minutesPerSketch : 1,
    });
  };

  startPauseBtn.addEventListener("click", async () => {
    if (timer.remainingSeconds <= 0 && !timer.running) {
      applyConfigFromInputs();
    }
    if (!timer.running) {
      timer.start();
      return;
    }
    timer.pause();
  });

  resetBtn.addEventListener("click", () => {
    timer.reset();
    applyConfigFromInputs();
  });

  sketchesInput.addEventListener("change", () => {
    if (!timer.running) applyConfigFromInputs();
  });
  minutesPerSketchInput.addEventListener("change", () => {
    if (!timer.running) applyConfigFromInputs();
  });

  volumeInput.addEventListener("input", () => {
    sound.setVolume(parseFloat(volumeInput.value));
  });

  minuteSoundInput.addEventListener("change", () => {
    const f = minuteSoundInput.files && minuteSoundInput.files[0];
    sound.setMinuteFile(f || null);
  });
  finalSoundInput.addEventListener("change", () => {
    const f = finalSoundInput.files && finalSoundInput.files[0];
    sound.setFinalFile(f || null);
  });

  themeToggle.addEventListener("click", () => {
    setTheme(getTheme() === "dark" ? "light" : "dark");
  });
  themeLightBtn.addEventListener("click", () => setTheme("light"));
  themeDarkBtn.addEventListener("click", () => setTheme("dark"));

  setTheme(getTheme());
  applyConfigFromInputs();
}

window.addEventListener("DOMContentLoaded", main);

