# Unslop UI Rewrite

A Creators Toolbox agent skill that rewrites a generated page or component with a designer-style pass. It chooses one reference, sets type and spacing scales, removes decoration without a purpose, writes specific copy, gives one action priority, adds interaction states, and checks phone width.

Use [anti-slop-ui-review](../anti-slop-ui-review) for scoring first. This skill applies the changes and returns a diff and change log.

## Install

```bash
npx skills add steven-van-opus/creators-toolbox-skills --skill unslop-ui-rewrite
```

Then ask your agent: "Use unslop-ui-rewrite on the Creators Toolbox Get listed pricing section. Keep the supplied terms and show the diff."

## What you get

- A reference product with three traits translated into local design choices
- A type scale and spacing scale applied to the component
- Rewritten source with one primary action and empty, loading, and error states
- A before/after diff, short change log, and verification notes

## Examples

See [Get listed pricing](./examples/get-listed-pricing.md) and [creator newsletter signup](./examples/creator-newsletter.md). Both include original before and after JSX, a focused diff, and state contracts. Their sample terms describe fictional drafts, not Creators Toolbox's live offers. Phone checks are acceptance checks, not claims of browser testing.

## Credit

Inspired by [Unslop UI](https://github.com/felipebasurto/unslop-ui), an agent skill by Felipe Basurto ([@fildotai](https://x.com/fildotai)). Its focus on interfaces that feel designed informed this project. This folder uses an original workflow and Creators Toolbox examples; it does not include the original's prompts, code, or prose.

The original can be installed separately with `npx skills add felipebasurto/unslop-ui -g`. It is not required by this skill.

## License

MIT. See the repository [LICENSE](../../LICENSE). This covers our original work. Unslop UI has its own [MIT license](https://github.com/felipebasurto/unslop-ui/blob/main/LICENSE), copyright 2026 Felipe Basurto. Linked projects retain their own terms.
