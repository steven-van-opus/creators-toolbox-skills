# YouTube cover background

## Input

"Make a 1280 by 720 background for Creators Toolbox's YouTube guide: 5 caption tools for short videos. Keep the left 55 percent dark for the title. Use ink, muted teal, and warm white. An eight-second loop is optional; the thumbnail itself must work as a still."

## Expected output

Use `scaffold.html` at 1280 by 720. Its fragment block already implements this direction: a moving teal pool on the right over ink. Set `u_time` to 2 for the cover still. Overlay the real title as HTML while reviewing; exclude it only when delivering the background asset separately.

Parameters: ink `#102529`, teal approximately `#296b67`, radial pool centered around UV `(0.78, 0.55)`, horizontal drift 0.04, period eight seconds. The left title area stays near the ink endpoint. No extra glows or particles.

Expected checks: no stretched pool at 16:9, readable warm-white title at 1280 by 720 and the 320 by 180 thumbnail preview, static frame with reduced motion, pause control works, no recurring frames when offscreen. Export `caption-tools-background.png`; optional `caption-tools-background.mp4` after recording and conversion. These are target artifacts, not files already rendered by this written example.
