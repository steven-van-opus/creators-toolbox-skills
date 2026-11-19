# Make Logo

A Creators Toolbox agent skill that designs a simple logo kit from a short brief you write, not from a famous brand you point at.

It proposes three original directions, helps you pick one, then exports SVG, PNG, and a favicon. It will not trace an existing logo, and it will not tell you the mark is cleared for trademark use.

## Install

```bash
npx skills add steven-van-opus/creators-toolbox-skills --skill make-logo
```

Then ask your agent: "Use the make-logo skill to design a logo for Harborline, a weekly newsletter for independent coffee roasters."

## What you get

- A one-page brief restated in the skill's format
- Three written directions (wordmark, monogram, or simple symbol)
- The chosen direction as SVG plus PNG and a favicon
- Light and dark versions when the mark needs both

## Example

See [examples/harborline](./examples/harborline) for a complete worked example: a fictional newsletter called Harborline. That folder is the skill's sample, not a real brand.

## License

MIT. Part of [creators-toolbox-skills](https://github.com/steven-van-opus/creators-toolbox-skills).
