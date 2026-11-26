# Three.js Fisheye Dolly Zoom

Keep a subject framed while changing the camera distance and field of view. Add edge curvature as a separate render pass.

```bash
npx skills add steven-van-opus/creators-toolbox-skills --skill threejs-fisheye-dolly-zoom
```

Serve the cloned repository with `python3 -m http.server --bind 127.0.0.1 8000` and open [the Observatory Lens example](examples/observatory-lens.html) from this folder. It loads a pinned Three.js module over HTTPS and uses WebGL 2. Widen the lens by scrolling or moving its native slider. The brass detector stays near the same size while straight edges begin to curve.

Read the [Creators Toolbox guide](https://creatorstoolbox.com/@steven/post/g_endless-3d-scroll-ride-with-threejs) for a workflow that connects the three techniques.

Inspired by [Cloud Pass by Meng To and ThreeUI](https://threeui.com/cloud-pass) and Meng To's [reference skill](https://github.com/MengTo/Skills/tree/main/agent-skills/3d/scroll-fisheye-dolly-zoom). The instructions and example here are original and [MIT-licensed](../LICENSE).
