# Creators Toolbox Skills

Original agent skills from [Creators Toolbox](https://creatorstoolbox.com). Each folder is a skill you can install and run in Claude Code, Cursor, Codex, and other agents that read Agent Skills.

These are not copies of other people's skills. Each one covers a problem we saw in the wild, rewritten with our own steps and examples. Individual skill READMEs credit the original post or repo that inspired them.

## Skills

| Skill | What it does |
| --- | --- |
| [make-logo](./make-logo) | Turns a short brand brief into a simple logo kit (SVG, PNG, favicon) with three original directions. |
| [revenue-maxxing](./revenue-maxxing) | Audits how a creator actually makes money and recommends one next move, using a public brief you provide. |
| [md3-ui](./md3-ui) | Reviews or specifies a product screen using Material Design 3, starting from the user's task. |
| [stick-explainer](./stick-explainer) | Storyboards a small stick-figure scene that shows one product action. |
| [launch-greeting-card](./launch-greeting-card) | Plans a simple interactive card from a picture and a short message, for listings and thank-yous. |
| [journalist-pitch](./journalist-pitch) | Matches public coverage with public data you already have, then drafts a short pitch around a chart. |
| [data-story-graphics](./data-story-graphics) | Turns a checkable public dataset into one feed-ready graphic. |
| [niche-outlier-watchlist](./niche-outlier-watchlist) | Builds a short watchlist of creators whose recent posts beat their own usual results. |
| [claude-video-edit](./claude-video-edit) | Plans a beginner-friendly edit: one clip, one style reference, a beat list, then plain-language notes. |
| [grok-bot-video-studio](./grok-bot-video-studio) | Designs a small, realistic Grok Bot week for a video creator. |
| [weekly-creator-news-show](./weekly-creator-news-show) | Plans a short weekly news show from Scout posts and official sources. |

## Install

From the repo root, after you clone it:

```bash
npx skills add steven-van-opus/creators-toolbox-skills --skill make-logo
npx skills add steven-van-opus/creators-toolbox-skills --skill revenue-maxxing
npx skills add steven-van-opus/creators-toolbox-skills --skill md3-ui
```

Or copy a skill folder into your project's `.agents/skills/` or `.claude/skills/` directory.

## License

MIT. See [LICENSE](./LICENSE).
