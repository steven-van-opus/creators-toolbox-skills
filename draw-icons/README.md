# Draw Icons

An original Creators Toolbox skill for drawing a small family of interface icons. Give the agent the controls, their labels, and a screen or existing icon file. The skill turns those inputs into editable SVGs and checks whether the shapes still read at the sizes used in the interface.

## Install

```bash
npx skills add steven-van-opus/creators-toolbox-skills --skill draw-icons
```

Or copy this folder into your project's `.agents/skills/` or `.claude/skills/` directory.

Try asking, “Use draw-icons to make four SVG icons for our field log toolbar. Match the rounded outline icons next to it and check the set at 16 px and 24 px.”

## Example

The [Tidepool field log brief](examples/tidepool-field-log.md) includes four original SVGs for a fictional field notebook and explains how each symbol maps to a control.

![Add sighting](examples/add-sighting.svg) ![Route log](examples/route-log.svg) ![Samples](examples/sample-jar.svg) ![Export notebook](examples/export-notebook.svg)

Read the [Creators Toolbox draw-icons guide](https://creatorstoolbox.com/@steven/post/g_draw-icons).

## Credit and license

Inspired by [@ronykax](https://x.com/ronykax/status/2125323198816481416) and the [draw-icons skill](https://skills.ronykax.com/draw-icons). The instructions, brief, and artwork in this folder were created for Creators Toolbox.

MIT licensed under the repository [LICENSE](../LICENSE).
