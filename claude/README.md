# Crazy 8s Timer — User Guide

## What is Crazy 8s?

Crazy 8s is a design sprint exercise where you rapidly sketch **8 different ideas in 8 minutes** — one minute per sketch. The time pressure keeps you from overthinking and forces creative output. This timer runs the session automatically, keeping you in the flow.

---

## Getting Started

1. No installation or internet connection required — it runs entirely offline.
2. Have your materials ready: paper divided into 8 boxes, plus pens or markers.
3. Press **▶ Start** to begin your first sketch immediately.

---

## The Timer Screen

The main card shows a large circular countdown ring that depletes in real time as each sketch progresses. Inside the ring is the time remaining in `M:SS` format.

- **Circular ring timer** — a thick red arc counts down each sketch. The ring turns a glowing red and a tick sound plays in the final 10 seconds.
- **Sketch indicator** — shows which sketch you're on (e.g. "Sketch 3 of 8") and a dot row tracking all sketches.
- **Sketch grid** — a grid of all sketch slots below the card. The active slot is highlighted in red; completed slots show a checkmark below the "Sketch" label.

### Warning State

When **15 seconds** remain (customizable in Settings), the countdown number turns red and soft tick sounds count down the final 10 seconds.

---

## Controls

| Button | What it does |
|--------|-------------|
| **▶ Start** | Begins the countdown for the first sketch |
| **⏸ Pause** | Freezes the timer without losing progress |
| **▶ Resume** | Continues from where you paused |
| **↺ Reset** | Cancels the session and returns to the beginning |
| **Skip →** | Ends the current sketch early and moves to the next |

---

## Header Buttons

Three icon buttons sit in the top-right corner:

| Icon | Action |
|------|--------|
| **?** | Opens the About & Instructions modal |
| **☀ / ☾** | Toggles between light and dark mode |
| **⚙** | Flips the timer card to reveal Settings |

---

## Settings (Card Flip)

Clicking **⚙** animates the main card with a 3D flip to reveal the Settings panel on the back. Clicking **⚙** again flips it back to the timer.

| Setting | Default | Range | Description |
|---------|---------|-------|-------------|
| Number of sketches | 8 | 2 – 16 | Total sketches in the session |
| Minutes per sketch | 1 | 1 – 10 | How long each sketch slot lasts |
| Warning at (seconds left) | 15 | 5 – 60 | When the countdown turns red |

Use the **− / +** buttons to adjust each value, then press **Apply Settings** to save. Applying settings resets the current session and flips the card back to the timer.

> **Tip:** For longer ideation sessions, try 2 minutes per sketch with 6 sketches. For a real speed challenge, keep 1 minute but increase to 12 sketches.

---

## About & Instructions Modal

Clicking **?** opens a scrollable modal covering:

- What Crazy 8s is and why it works
- How to use all the timer controls
- Step-by-step facilitation guide for before, during, and after a team session
- Tips for running great sessions (silence, labeling sketches, remote teams, warm-ups, and more)

Dismiss the modal by clicking **✕** or clicking the dark backdrop.

---

## Notifications

### "Move to next sketch!" — between sketches
At the end of each sketch a full-screen overlay appears automatically. It:
- Plays a two-tone audio alert
- Displays for **5 seconds**, then closes on its own
- Can be dismissed early by clicking the dark background
- Shows which sketch comes next

The next sketch's timer starts automatically after the notification closes.

### "Pencils down!" — end of session
When all sketches are complete, a final overlay appears. It:
- Plays a 4-note ascending victory chime
- Stays on screen until dismissed by clicking the background
- Confirms how many sketches you completed

---

## Light & Dark Mode

Click **☀** or **☾** in the top-right corner to toggle themes. The change applies instantly with no reload required.

---

## Audio

The timer uses the browser's built-in Web Audio API — no audio files or downloads needed.

- **Tick** — once per second during the final 10 seconds of each sketch
- **Two-tone alert** — when a sketch ends and the move notification appears
- **Victory chime** — four ascending notes when the full session is complete

> **Note:** Some browsers require a user interaction before audio plays. If you don't hear sounds, make sure your device volume is on and that you've pressed Start first.

---

## Tips for Running a Session

- **Prepare in advance** — have paper, pens, and a clear problem statement ready before pressing Start.
- **Don't erase** — rough sketches are the goal; keep moving and don't refine mid-sketch.
- **One idea per box** — use the sketch grid as a visual cue for how many ideas you have left to fill.
- **Limit pausing** — the time pressure is intentional.
- **Review after** — lay all sketches out side-by-side and look for patterns or standout concepts to develop.

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