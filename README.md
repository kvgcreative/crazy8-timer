# Crazy 8’s Countdown Timer

A clean, modern Crazy 8’s sketch timer.

## Features

- Customizable **sketch count** and **minutes per sketch**
- Plays a **sound every sketch** (default: built-in beep, or upload your own audio file)
- Plays a **final sound** when done (default: built-in beep sequence, or upload your own audio file)
- Large visual overlay notification (“Move to next sketch!”) shown for **5 seconds** at each boundary
- **Light** and **Dark** themes (white/charcoal + red accents)

## Run

From this folder, start any static file server.

Examples:

```bash
python3 -m http.server 5173
```

Then open `http://localhost:5173/` and click into the page once (browsers require a user gesture before audio can play).

