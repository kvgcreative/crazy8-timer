## Crazy 8's Sketch Timer

This is a single‑page web app for running a **Crazy 8's** style sketching exercise. It gives you fast, visual feedback and gentle audio prompts so you can stay focused on sketching instead of watching the clock.

### Features

- **Per‑sketch countdown**: A circular visual timer counts down for each sketch.
- **Configurable session**:
  - Set **number of sketches**.
  - Set **minutes per sketch** (supports quarter‑minute increments, e.g. 0.25, 0.5).
- **Per‑sketch alert**:
  - Plays a short audio blip.
  - Shows a large, full‑screen overlay that says **“Move to next sketch!”** for 5 seconds, then auto‑hides.
- **Final alert**:
  - Plays a two‑tone chime.
  - Shows a full‑screen message **“Pencils down!”** for 5 seconds.
- **Session overview**:
  - Chips showing current sketch (e.g. “Sketch 3 of 8”) and run state (Idle / Running / Paused / Done).
  - Dot row showing all sketch slots with current and completed states.
- **Controls**:
  - **Start Session**, **Pause / Resume**, **Reset**.
- **Theming**:
  - **Light and dark themes** with a modern, minimal interface.
  - Color palette uses **white, charcoal gray, and red accents**.
  - Theme is remembered in `localStorage`.

### Getting Started

1. **Configure your session**
   - On the right side, in **Session Settings**:
     - Set **Number of sketches** (default: `8`).
     - Set **Minutes per sketch** (default: `1`).
   - The summary area shows **total focus time** and a compact `X sketches × Y min` line.

2. **Run the timer**
   - Click **Start Session**.
   - When each sketch ends:
     - You’ll hear a brief audio blip.
     - A full‑screen overlay will show **“Move to next sketch!”** for 5 seconds and close automatically.
   - When the final sketch ends:
     - You’ll hear a two‑tone chime.
     - The overlay will show **“Pencils down!”** for 5 seconds.

3. **Controls during a session**
   - **Pause**: Click **Pause** to temporarily stop the timer; click **Resume** to continue.
   - **Reset**: Click **Reset** to return to the beginning of the session with your current settings.

### Theme Switching

- Use the **Theme** toggle in the top‑right of the main panel to switch between:
  - **Light**: Bright background with charcoal text and red accents.
  - **Dark**: Charcoal background with soft highlights and red accents.
- Your last selected theme is stored in `localStorage` and restored on next load.

### Audio Notes

- The timer uses the browser’s **Web Audio API** to generate simple tones:
  - Short square‑wave blip for per‑sketch transitions.
  - Two‑tone chime (sine + triangle) for the final **“Pencils down!”** alert.
- Many browsers require **user interaction** before audio can play:
  - The timer initializes the audio context when you press **Start Session**.
  - If you don’t hear sound at first, click inside the page and start the session again.

### Customization Ideas

- Adjust the default values in the script (e.g., default number of sketches or duration).
- Tweak the colors to match your team or brand while keeping:
  - Light and dark theme structure.
  - Red as a primary accent for urgency cues.
- Replace the generated tones with your own audio files by swapping the Web Audio logic for `<audio>` elements or custom samples.

### Requirements

- Any modern desktop browser:
  - Chrome, Edge, Firefox, Safari (recent versions).
  - JavaScript must be enabled.

