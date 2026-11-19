# Scout hero grain

## Input

"Add a subtle film grain layer behind the headline of a Creators Toolbox Scout story about FrameKit's caption update. Hero size 1200 by 630. Keep the story and source readable. Use a static texture by default."

## Expected output

Replace only the scaffold's fragment block with this original shader. The dark base represents the sample hero background; compose with an actual image separately if supplied. Grain is baked into the color, so this version needs no alpha blending.

```glsl
precision mediump float;
uniform float u_time;
uniform vec2 u_resolution;
uniform vec2 u_mouse;
float grain(vec2 cell) {
  vec2 p = mod(cell, 251.0);
  return fract(sin(dot(p, vec2(0.73, 1.91))) * 127.13);
}
void main() {
  vec2 cell = floor(gl_FragCoord.xy / 2.0);
  float g = grain(cell) - 0.5;
  vec3 base = vec3(0.08, 0.11, 0.12);
  gl_FragColor = vec4(clamp(base + g * 0.035, 0.0, 1.0), 1.0);
}
```

Set the scaffold's pause state to true and draw once for a static output. The unused time and mouse uniforms may be optimized away, which is valid. To make a transparent overlay instead, output white grain with low alpha, request an alpha-enabled context, and define the compositing method explicitly; do not assume this opaque variant is transparent.

Expected result: 2px grain cells, peak color deviation under 0.018, no animated crawling texture, unchanged source-link focus, and a legible headline at phone width. Export a still `scout-framekit-grain.png` after the draw. Review the actual image before claiming contrast passes.
