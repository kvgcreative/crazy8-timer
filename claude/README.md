# Crazy 8s Timer — User Guide

## What is Crazy 8s?

Crazy 8s is a design sprint exercise where you rapidly sketch **8 different ideas in 8 minutes** — one minute per sketch. The time pressure keeps you from overthinking and forces creative output. This timer is built to run that session automatically, keeping you in the flow.

Created with AI using Claude

---

## Getting Started

1. No installation or internet connection required — it runs entirely offline.
2. Press **▶ Start** to begin your first sketch immediately.

---

## The Timer Screen

When you open the app, you'll see the main timer screen:

- **Large countdown display** — shows the time remaining for the current sketch in `M:SS` format.
- **Sketch indicator** — shows which sketch you're on (e.g. "Sketch 3 of 8") and a row of dots tracking your progress.
- **Sketch grid** — a visual grid of all sketch slots. The active slot is highlighted in red, and completed slots are marked with a checkmark.
- **Session progress bar** — a thin bar below the countdown that fills up as the entire session progresses.
- **Red sweep bar** — a bar across the top of the timer card that fills in real time during each sketch.

### Warning State

When **15 seconds** remain in a sketch (customizable), the countdown turns red and a soft tick sound plays for the final 10 seconds to alert you.

---

## Controls

| Button | What it does |
|--------|-------------|
| **▶ Start** | Begins the timer from the current state |
| **⏸ Pause** | Freezes the timer without losing progress |
| **▶ Resume** | Continues from where you paused |
| **↺ Reset** | Cancels the session and returns to the beginning |
| **Skip →** | Immediately ends the current sketch and moves to the next |

---

## Notifications

### "Move to next sketch!" (between sketches)
At the end of each sketch, a full-screen overlay appears with the message **"Move to next sketch!"** The overlay:
- Plays a two-tone audio alert
- Displays automatically for **5 seconds**, then closes on its own
- Can be dismissed early by clicking the dark background
- Shows which sketch comes next

The timer for the next sketch begins automatically after the 5-second notification closes.

### "Pencils down!" (end of session)
When all sketches are complete, a final overlay appears with **"Pencils down!"** This overlay:
- Plays a 4-note ascending chime
- Stays on screen until dismissed by clicking the background
- Confirms how many sketches you completed

---

## Settings

Click the **⚙ gear icon** in the top-right corner to open the Settings panel.

| Setting | Default | Range | Description |
|---------|---------|-------|-------------|
| Number of sketches | 8 | 2 – 16 | Total sketches in the session |
| Minutes per sketch | 1 | 1 – 10 | How long each sketch slot lasts |
| Warning at (seconds left) | 15 | 5 – 60 | When the countdown turns red |

Use the **− / +** buttons to adjust each value, then press **Apply Settings** to save. Applying settings resets the current session.

> **Tip:** For longer ideation sessions, try 2 minutes per sketch with 6 sketches. For a real speed challenge, keep 1 minute but increase to 12 sketches.

---

## Light & Dark Mode

Click the **☀ / ☾ icon** in the top-right corner to toggle between light and dark themes. Your preference applies immediately with no reload required.

---

## Audio

The timer uses your browser's built-in Web Audio API to generate sounds — no audio files are needed.

- **Tick sounds** play in the final 10 seconds of each sketch
- **Two-tone alert** plays when a sketch ends and it's time to move on
- **Victory chime** plays at the end of the full session

> **Note:** Some browsers require a user interaction (like clicking Start) before audio can play. If you don't hear sounds, make sure your device volume is on and that you've pressed Start to begin the session.

---

## Tips for Running a Crazy 8s Session

- **Have your materials ready** before pressing Start — paper, pens, and a reference prompt or problem statement.
- **Don't stop to erase** — rough sketches are the goal, not polished drawings.
- **One idea per box** — use the sketch grid as a visual guide for how many boxes you have left.
- **Use the Pause button** sparingly — the time pressure is part of the exercise.
- **After the session**, lay all 8 sketches out and look for patterns or standout ideas to develop further.

---

## Browser Compatibility

| Browser | Supported |
|---------|-----------|
| Chrome / Edge (v90+) | ✓ Yes |
| Firefox (v88+) | ✓ Yes |
| Safari (v14+) | ✓ Yes |
| Internet Explorer | ✗ No |

---

*Crazy 8s Timer — a single-file offline tool. No data is collected or transmitted.*
