# Creators Toolbox Skills

Original agent skills from [Creators Toolbox](https://creatorstoolbox.com). Each folder is a skill you can install and run in Claude Code, Cursor, Codex, and other agents that read Agent Skills.

These are not copies of other people's skills. Each one covers a problem we saw in the wild, rewritten with our own steps and examples.

## Skills

| Skill | What it does |
| --- | --- |
| [make-logo](./make-logo) | Turns a short brand brief into a simple logo kit (SVG, PNG, favicon) with three original directions. |
| [revenue-maxxing](./revenue-maxxing) | Audits how a creator actually makes money and recommends one next move, using a public brief you provide. |

## Install

From the repo root, after you clone it:

```bash
npx skills add steven-van-opus/creators-toolbox-skills --skill make-logo
npx skills add steven-van-opus/creators-toolbox-skills --skill revenue-maxxing
```

Or copy a skill folder into your project's `.agents/skills/` or `.claude/skills/` directory.

## License

MIT. See [LICENSE](./LICENSE).
