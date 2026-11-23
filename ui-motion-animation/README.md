# UI Motion Animation

An original Creators Toolbox skill for making one interface state change clear, with attention to rapid input, keyboard use and reduced motion.

Inspired by [Meng To's motion-tool roundup](https://x.com/MengTo/status/2124195058408980677). The workflow and fictional newsletter example are ours. This folder does not contain upstream skills or copied animated components.

## Install

```sh
npx skills add steven-van-opus/creators-toolbox-skills --skill ui-motion-animation
```

Or copy this folder into `.agents/skills/` or `.claude/skills/` in your project.

## Try it

> Use ui-motion-animation on our newsletter archive's Save issue button. Keep the current stack. Update the saved state immediately, make a second click reverse the action even during the animation, keep keyboard focus stable, and support reduced motion. Check the real browser behavior before reporting success.

[examples/bookmark.html](examples/bookmark.html) is a standalone fictional newsletter archive card. Open it in a current browser, or serve the repo locally. It uses plain CSS transitions for the button's color and the decorative bookmark's movement. The semantic `aria-pressed` value and visible status update synchronously with the click. No account, server, package or asset download is needed. It stores the state in memory only and resets on reload.

The [brief](examples/brief.md) explains the decisions and manual checks. The example demonstrates live interface motion, not a rendered video or a real newsletter integration. The system reduced-motion preference removes the icon's travel and scale; the latest state is still visible.

## Reference tools

- [Emil Kowalski's skills](https://aiforui.dev/skills) for targeted interface and animation work.
- [DesignBookmark Motion](https://designbookmark.com/motion) for live component references.
- [Motion](https://motion.dev) for JavaScript, React and Vue animation.
- [HyperFrames](https://creatorstoolbox.com/products/hyperframes) for HTML-to-video projects.
- [Remotion agent skills](https://www.remotion.dev/docs/ai/skills) for React video work.
- [Motion Canvas](https://motioncanvas.io) for code-driven explainers.
- [Blender Agent Skills](https://github.com/EL4CTEO/blender-skills) for a separate Blender workflow.

These tools have their own setup, license and service terms. This skill does not install them or grant access to paid services.

MIT. See the repository [LICENSE](../LICENSE).
