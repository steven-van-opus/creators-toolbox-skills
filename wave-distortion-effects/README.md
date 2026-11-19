# Wave Distortion Effects

A Creators Toolbox agent skill that builds a small distortion study in one HTML file. It starts from a visual reference, sets explicit wave parameters, and provides a static CSS and SVG fallback.

## Install

```bash
npx skills add steven-van-opus/creators-toolbox-skills --skill wave-distortion-effects
```

Then ask your agent: "Use the wave-distortion-effects skill to ripple the artwork behind a Creators Toolbox newsletter header."

## What you get

- Original WebGL sine, pointer ripple, and flag wave modes
- A single [HTML study](./examples/wave-study.html) with embedded artwork
- CSS and SVG feTurbulence fallback
- Motion, readability, and frame-budget checks

## Example

See [examples/newsletter-header.md](./examples/newsletter-header.md) and [examples/product-logo-grid.md](./examples/product-logo-grid.md). These are worked samples for creatorstoolbox.com, not audits or changes to the production site.

## Credit

Inspired by [Waves at Home](https://jamescamarota.com/skills/waves-at-home) by [James Camarota](https://x.com/JamesC_Alpha). The public page offers a free download but exposes no license for the skill that we could verify. We read the public description and link to it only; no downloaded skill, prompt, code, video, or artwork is included. This folder is our own rewrite with our examples and original code, not a copy of the source.

## License

MIT. Part of [creators-toolbox-skills](https://github.com/steven-van-opus/creators-toolbox-skills). The MIT license covers this folder's original work only; linked projects retain their own terms.
