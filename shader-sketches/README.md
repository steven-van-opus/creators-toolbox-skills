# Shader Sketches

A Creators Toolbox agent skill that builds a small GLSL fragment shader for a creator visual, using a fixed HTML scaffold and three shared uniforms. It keeps text readable, makes problems easy to isolate, and explains how to export a still or loop.

## Install

```bash
npx skills add steven-van-opus/creators-toolbox-skills --skill shader-sketches
```

Then ask your agent: "Use the shader-sketches skill to make a gradient background for a Creators Toolbox YouTube cover."

## What you get

- A standalone [HTML scaffold](./examples/scaffold.html) with no dependencies
- A fragment shader with a documented uniforms contract
- A debug pass and static reduced-motion view
- Still and MP4 or GIF export notes

## Example

See [examples/youtube-gradient.md](./examples/youtube-gradient.md) and [examples/scout-grain.md](./examples/scout-grain.md). These are worked samples for creatorstoolbox.com, not audits or changes to the production site.

## Credit

Inspired by [shader-skills](https://github.com/gokayfem/shader-skills) by gokayfem (MIT). Its current skill list contains `shader-art-coding`, with a much wider GLSL library, studies, debugging, and performance tools. Our single small scaffold does not include that library. This folder is our own rewrite with our examples and original code, not a copy of the source.

## License

MIT. Part of [creators-toolbox-skills](https://github.com/steven-van-opus/creators-toolbox-skills). The MIT license covers this folder's original work only; linked projects retain their own terms.
