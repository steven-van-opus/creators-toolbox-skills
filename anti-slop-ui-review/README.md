# Anti Slop UI Review

A Creators Toolbox agent skill that reviews a UI for generic visual choices and unfinished behavior. It scores observable problems, proposes concrete fixes, and helps choose two or three complementary skills for the next pass.

## Install

```bash
npx skills add steven-van-opus/creators-toolbox-skills --skill anti-slop-ui-review
```

Then ask your agent: "Use the anti-slop-ui-review skill to review a Creators Toolbox Get listed pricing draft."

## What you get

- A scored checklist with evidence and unknowns
- Three prioritized fixes with acceptance checks
- A decision table for two or three complementary skills
- A [source list](./references/skill-options.md) crediting all ten roundup entries

## Example

See [examples/get-listed-pricing.md](./examples/get-listed-pricing.md) and [examples/creator-newsletter.md](./examples/creator-newsletter.md). These are worked samples for creatorstoolbox.com, not audits or changes to the production site.

## Credit

Inspired by the [10-skill roundup by @achxvi](https://x.com/achxvi/status/2123016367125540918). The post could not be retrieved during source review; its list was supplied in the task. We verified the linked projects independently. No reuse license was verified for the post. Each project and its license status is credited in [skill options](./references/skill-options.md); this skill links to them without incorporating their instructions. This folder is our own rewrite with our examples and original code, not a copy of the source.

## License

MIT. Part of [creators-toolbox-skills](https://github.com/steven-van-opus/creators-toolbox-skills). The MIT license covers this folder's original work only; linked projects retain their own terms.
