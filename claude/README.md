# Crazy 8s Timer — User Guide

## What is Crazy 8s?

Crazy 8s is a design sprint exercise where you rapidly sketch **8 different ideas in 8 minutes** — one minute per sketch. The time pressure keeps you from overthinking and forces creative output. This timer runs the session automatically, keeping you in the flow.

---

## Getting Started

1. No installation or internet connection required — it runs entirely offline.
2. Have your materials ready: paper divided into 8 boxes, plus pens or markers.
3. Press **Start** to begin your first sketch immediately.

---

## The Timer Screen

The main card shows a large circular countdown ring that depletes in real time as each sketch progresses. Inside the ring is the time remaining in `M:SS` format.

- **Circular ring timer** — a thick red arc counts down each sketch. The number turns red and a tick sound plays in the final 10 seconds.
- **Sketch indicator** — shows which sketch you're on (e.g. "Sketch 3 of 8") and a dot row tracking all sketches.
- **Sketch grid** — a grid of numbered slots below the card. The active slot is highlighted in red; completed slots show a checkmark.

### Warning State

When **15 seconds** remain (customizable in Settings), the countdown number turns red and soft tick sounds count down the final 10 seconds.

---

## Controls

| Button | What it does |
|--------|-------------|
| **Start** | Begins the countdown for the first sketch |
| **Pause** | Freezes the timer without losing progress |
| **Resume** | Continues from where you paused |
| **Reset** | Cancels the session and returns to the beginning |
| **Skip** | Ends the current sketch early and moves to the next |

---

## Header Buttons

Four icon buttons sit in the top-right corner of the header:

| Icon | Action | Mobile |
|------|--------|--------|
| Info | Opens the About & Instructions modal | ✓ |
| Light / Dark | Toggles between light and dark mode | ✓ |
| Fullscreen | Expands the timer to fill the entire screen | Desktop only |
| Settings | Flips the timer card to reveal Settings | ✓ |

---

## Fullscreen Mode

Click the **Fullscreen** button in the header to expand the timer into a large, distraction-free view ideal for projecting in a room or displaying on a shared screen. In fullscreen mode:

- The circular ring timer scales to fill the available screen
- The "Sketch X of Y" label is displayed in large text, readable from across the room
- All timer controls (Start, Pause, Reset, Skip) remain accessible
- The sketch progress dots are shown below the ring

**Exiting fullscreen:** click the exit button in the top-right corner of the fullscreen view, or press **Esc** on your keyboard. If the browser enters native fullscreen, dismissing it with Esc will also close the fullscreen view.

> **Note:** The Fullscreen button is hidden on mobile devices, where native fullscreen is handled by the browser itself.

---

## Settings (Card Flip)

Click the **Settings** icon in the header to animate the main card with a 3D flip, revealing the Settings panel on the back. Click **Settings** again to flip back to the timer.

| Setting | Default | Range | Description |
|---------|---------|-------|-------------|
| Number of sketches | 8 | 2 – 16 | Total sketches in the session |
| Minutes per sketch | 1 | 1 – 10 | How long each sketch slot lasts |
| Warning at (seconds left) | 15 | 5 – 60 | When the countdown turns red |
| Volume | Medium | Muted → Extra Loud (5 levels) | Audio level for all alerts and ticks |

Use the **−** and **+** buttons to adjust sketch count, minutes, and warning. For volume, click one of the five icon buttons — a short preview tone plays immediately at the selected level so you can hear the difference before the session starts. Applying settings resets the current session and flips the card back to the timer.

> **Tip:** For longer ideation sessions, try 2 minutes per sketch with 6 sketches. For a real speed challenge, keep 1 minute but increase to 12 sketches.

---

## About & Instructions Modal

Click the **Info** icon in the header to open a scrollable modal covering:

- What Crazy 8s is and why it works
- How to use every timer control, with matching icons
- Step-by-step facilitation guide for before, during, and after a team session
- Tips for running great sessions (silence, labeling sketches, remote teams, warm-ups, and more)

Dismiss the modal by clicking the **✕** close button or clicking the dark backdrop.

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

Click the **Light / Dark** icon in the header to toggle themes instantly. No page reload is required.

---

## Audio

The timer uses the browser's built-in Web Audio API — no audio files or downloads are needed.

| Sound | When it plays |
|-------|--------------|
| Tick | Once per second during the final 10 seconds of each sketch |
| Two-tone alert | When a sketch ends and the move notification appears |
| Victory chime | Four ascending notes when the full session is complete |

> **Note:** On mobile, audio requires a user interaction (such as pressing Start) before it will play. If you don't hear sounds, make sure your device volume is on and that you have pressed Start first.

---

## Tips for Running a Session

- **Prepare in advance** — have paper, pens, and a clear problem statement ready before pressing Start.
- **Don't erase** — rough sketches are the goal; keep moving and don't refine mid-sketch.
- **One idea per box** — use the sketch grid as a visual cue for how many slots remain.
- **Limit pausing** — the time pressure is intentional.
- **Use fullscreen** — if running a group session, put the timer in fullscreen on a projector or shared display so everyone can see the countdown and sketch label clearly.
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

---

*Made with AI*