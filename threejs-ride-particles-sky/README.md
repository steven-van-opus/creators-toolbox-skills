# Three.js Ride Particles and Sky

Give a ride a bounded field of windborne particles, a slower-moving cloud layer, and shared lighting controls.

```bash
npx skills add steven-van-opus/creators-toolbox-skills --skill threejs-ride-particles-sky
```

Serve the cloned repository with `python3 -m http.server --bind 127.0.0.1 8000` and open [the Wind over the Breakwater example](examples/wind-over-the-breakwater.html) from this folder. It loads a pinned Three.js module over HTTPS and uses WebGL 2. Pause the sea spray or move the daylight slider to inspect fog, cloud tint, and particle visibility.

Read the [Creators Toolbox guide](https://creatorstoolbox.com/@steven/post/g_endless-3d-scroll-ride-with-threejs) for a workflow that connects the three techniques.

Inspired by [Cloud Pass by Meng To and ThreeUI](https://threeui.com/cloud-pass) and Meng To's [reference skill](https://github.com/MengTo/Skills/tree/main/agent-skills/3d/ride-particles-and-clouds). The instructions and example here are original and [MIT-licensed](../LICENSE).
