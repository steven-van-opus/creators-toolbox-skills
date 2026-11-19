# Revenue Maxxing

A Creators Toolbox agent skill that audits how a creator actually makes money, then recommends one next move.

It works from a brief the user provides (public stats, pricing pages, recent posts). It does not need a third-party analytics product, and it does not invent private revenue numbers.

## Install

```bash
npx skills add steven-van-opus/creators-toolbox-skills --skill revenue-maxxing
```

Then ask your agent: "Use the revenue-maxxing skill on the example brief in examples/nora-voss."

## What you get

- A map of current income sources, labeled as confirmed or assumed
- A split between recurring and one-off income
- A short list of audience asks that do not yet have an offer
- One recommended next move, with why it comes first
- A markdown report you can keep in the project

## Example

See [examples/nora-voss](./examples/nora-voss) for a complete worked example about a fictional creator, Nora Voss. The numbers in that folder are made up for the skill. Do not treat them as real.

## License

MIT. Part of [creators-toolbox-skills](https://github.com/steven-van-opus/creators-toolbox-skills).
