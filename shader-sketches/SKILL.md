---
name: shader-sketches
description: Write small GLSL fragment shaders for creator visuals such as gradients, noise backgrounds, grain, text glow, and transitions. Use a standalone HTML scaffold with u_time, u_resolution, and u_mouse, then debug and prepare still or video exports.
---

# Shader Sketches

Start with the deliverable: a background, an overlay, or a transition. Keep the first sketch to one fragment pass and one visual idea. Use [examples/scaffold.html](./examples/scaffold.html), which contains original code and needs no packages.

## Brief and contract

Record output dimensions, duration, palette, text-safe region, reference traits, and alpha needs. References describe qualities, not code to reproduce. For text glow, use accessible DOM text with a CSS glow unless an authorized text mask is actually needed in the shader. Keep long copy and links in HTML.

Uniforms are identical in every sketch:

| Uniform | Type | Meaning |
| --- | --- | --- |
| `u_time` | float | Elapsed animation seconds, excluding paused time. Static reduced-motion frame uses 0. |
| `u_resolution` | vec2 | Drawing-buffer width and height in physical pixels. |
| `u_mouse` | vec2 | Pointer position normalized to 0 through 1, bottom-left origin; starts at 0.5, 0.5. |

Use `gl_FragCoord.xy / u_resolution` for UVs. Correct horizontal distances by the aspect ratio before computing circles. The scaffold uses WebGL 1 and GLSL ES 1.00: `gl_FragColor`, `attribute`, and no `#version 300 es`. Do not paste WebGL 2 syntax into it.

## Build

1. Restate the visual reference in terms of shapes, contrast, edge softness, and movement. Choose two palette endpoints and a text-safe region.
2. Run the unchanged scaffold. Change only the fragment block first. For noise, use a small original hash or value interpolation with bounded octaves. Use at most three octaves until a device check justifies more.
3. Add grain after the base color, at a measured opacity. For transitions, add a declared `u_progress` uniform in both shader and JavaScript rather than overloading time; clamp progress and test both endpoints.
4. Render at the real aspect ratio and one smaller viewport. Check the title region with the actual title in place, not an empty canvas.

## Debugging checklist

- If blank: inspect compile and link logs, canvas size, and context availability. Fall back to the visible CSS background on failure.
- If stretched: compare CSS size, drawing-buffer size, viewport, and aspect correction.
- If pointer tracking is wrong: normalize against the canvas bounds and flip Y once.
- If flickering: freeze `u_time`; isolate noise from color, then lower temporal changes. Avoid abrupt per-frame random seeds for subtle grain.
- If too expensive: reduce resolution before removing accessibility behavior. Cap device pixel ratio at 1.5, avoid dynamic loops, and measure frame time on the target device.
- If unreadable: reduce contrast behind the copy or move the effect. Never compensate with a heavy glow around every letter.
- Pause animation when hidden or offscreen. Reduced motion must show one static frame and schedule no recurring draws. Provide a visible pause control for continuous decoration.

## Export

For a still, set a deterministic time and draw, then call `canvas.toBlob` immediately after that draw. Keep text in the export with a composed capture if it lives in HTML. Use licensed local assets to avoid cross-origin canvas tainting.

For video, record `canvas.captureStream(30)` with a supported `MediaRecorder` MIME type; test `MediaRecorder.isTypeSupported` first. Record a fixed duration while holding dimensions constant. WebM is a common browser result, not MP4. If FFmpeg is already installed, convert with `ffmpeg -i sketch.webm -c:v libx264 -pix_fmt yuv420p sketch.mp4`. For GIF, use a palette pass: `ffmpeg -i sketch.webm -filter_complex "fps=15,scale=640:-1:flags=lanczos,split[a][b];[a]palettegen[p];[b][p]paletteuse" sketch.gif`. GIF loses smooth alpha and color detail. Do not install capture tools without an explicit need.

For a seamless loop, drive all motion with integer cycles of `6.2831853 * u_time / duration`; verify the first and last frame rather than assuming a loop is seamless. A screenshot is not evidence of animation performance.

## When you are done

Deliver HTML, parameter notes, dimensions, fallback behavior, and export instructions. Distinguish observed browser checks from expected results. Examples: [YouTube gradient](./examples/youtube-gradient.md), [Scout grain](./examples/scout-grain.md).
