# Click to Edit Site

A Creators Toolbox agent skill that turns an element selection into a small, reviewable change to a local website. It finds the owning component, reads the relevant styles, shows a scoped diff, and checks the result in a screenshot.

## Install

```bash
npx skills add steven-van-opus/creators-toolbox-skills --skill click-to-edit-site
```

Then ask your agent: "Use the click-to-edit-site skill to rename the Profile button in the Creators Toolbox product hero."

## What you get

- A selector and source ownership note
- A proposed diff limited to the selected component
- Before and after screenshot checks at the same viewport
- A small local picker that logs a selector and can be removed

## Example

See [examples/product-hero.md](./examples/product-hero.md) and [examples/scout-card.md](./examples/scout-card.md). The optional [picker](./examples/picker.js) is under 80 lines. These are worked samples for creatorstoolbox.com, not audits or changes to the production site.

## Credit

Inspired by [Uberdesigner Studio](https://github.com/bogdan239/uberdesigner-studio), from the Uberdesigner team, shared by [@seanaiux](https://x.com/seanaiux). Its repository is AGPL-3.0. We link to it and reuse no implementation. Its README reports lower token use for scoped editing; this skill makes no measured savings claim. This folder is our own rewrite with our examples and original code, not a copy of the source.

## License

MIT. Part of [creators-toolbox-skills](https://github.com/steven-van-opus/creators-toolbox-skills). The MIT license covers this folder's original work only; linked projects retain their own terms.
