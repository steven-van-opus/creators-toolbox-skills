# MD3 UI

A Creators Toolbox agent skill that reviews or specifies a product screen using Material Design 3. It starts from the job the user is trying to finish, then chooses components, states, and a compact plus wide layout.

It will not copy another app's look, and it will not invent official Material token names. Check https://m3.material.io/ for current guidance.

## Install

```bash
npx skills add steven-van-opus/creators-toolbox-skills --skill md3-ui
```

Then ask your agent: "Use the md3-ui skill to review the Get Listed form on Creators Toolbox."

## Example

See [examples/get-listed-form](./examples/get-listed-form) for a worked review of a tool submission form, written as if it lived on Creators Toolbox. The notes are a sample, not a live audit of the production page.

## Credit

Inspired by the open [material-design-3-ui skill](https://github.com/skydashnet/material-design-3-ui-skill) (MIT) shared in [this post](https://x.com/CY160909/status/2122513805506965729). This folder is our own rewrite with our examples, not a copy of that skill.

## License

MIT. Part of [creators-toolbox-skills](https://github.com/steven-van-opus/creators-toolbox-skills).
