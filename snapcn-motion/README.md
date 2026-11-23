# snapcn Motion Brief

An original Creators Toolbox skill for planning a short product clip with Claude and Remotion. It turns one product action into an explicit timeline, then selects snapcn components from their current documentation instead of guessing their names or props.

Inspired by [snapcn](https://creatorstoolbox.com/products/snapcn), its [official site](https://snapcn.dev) and the [November 23 motion-library demo](https://x.com/shadcnlabs/status/2124852831673020771). This is independent of Shadcn Labs. No upstream skill text, component implementation or Pro asset is bundled here.

## Install

```sh
npx skills add steven-van-opus/creators-toolbox-skills --skill snapcn-motion
```

Or copy this folder into `.claude/skills/` or `.agents/skills/` in your project.

## Try the brief

Ask your coding agent:

> Use snapcn-motion to plan a 12-second, 30 fps clip for a fictional gardening app. Show a watering reminder moving from a draft into today's list. Label it as an illustrative concept. Keep one readable hold after the action. Use the existing Remotion project, verify any snapcn component before installing it, and report which checks you actually run.

The original [brief](examples/brief.md), [composition](examples/SeedlingMotion.tsx) and [timing module](examples/timing.ts) show the idea without a snapcn dependency. To run the example, copy both source files into an existing Remotion project's `src/` folder, import `SeedlingRoot` from that folder in its entry file, then call `registerRoot(SeedlingRoot)`. React and Remotion must already be installed in that project.

```sh
npx remotion render src/index.ts SeedlingReminder out/seedling-reminder.mp4
```

Adjust the entry path to match your project. The example is 1280 x 720, 30 fps and 360 frames. It shows a fictional interface, not a recording of a released app. The optional `calm` prop removes the card's travel while preserving the reading holds. A rendered MP4 cannot respond to the viewer's system motion preference, so choose the version before exporting.

## Verification and limits

The verification script checks every frame of the example for scene coverage, valid progress values and a stationary result hold. Run it on Node 22.18 or newer:

```sh
node examples/verify.ts
```

Syntax and timing were checked during authoring. A full Remotion render remains a project-level check; no dependencies were installed for this publication. The skill links to snapcn's current documentation for library setup and licenses. It does not claim that Pro components or commercial rendering are free.

MIT. See the repository [LICENSE](../LICENSE).
