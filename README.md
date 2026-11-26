# Creators Toolbox Skills

Original agent skills from [Creators Toolbox](https://creatorstoolbox.com). Each folder is a skill you can install and run in Claude Code, Cursor, Codex, and other agents that read Agent Skills.

These are not copies of other people's skills. Each one covers a problem we saw in the wild, rewritten with our own steps and examples. Individual skill READMEs credit the original post or repo that inspired them.

## Skills

| Skill | What it does |
| --- | --- |
| [draw-icons](./draw-icons) | Draws a family of SVG interface icons and checks legibility at the sizes used in the product. |
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
| [click-to-edit-site](./click-to-edit-site) | Turns an element selection into a scoped local site edit with screenshot verification. |
| [wave-distortion-effects](./wave-distortion-effects) | Builds sine, ripple, and flag wave effects with a static fallback and motion controls. |
| [shader-sketches](./shader-sketches) | Writes small GLSL creator visuals with a fixed HTML scaffold and export notes. |
| [anti-slop-ui-review](./anti-slop-ui-review) | Scores UI defaults and missing behavior, then recommends concrete fixes and two or three skills. |
| [unslop-ui-rewrite](./unslop-ui-rewrite) | Rewrites a generated UI with a reference, consistent scales, specific copy, working states, and a before/after diff. |
| [seo-audit-checklist](./seo-audit-checklist) | Audits one public site section and delivers a Markdown report and CSV with evidence, prioritized fixes, and exact replacement copy. |
| [doomscroll-brief](./doomscroll-brief) | Turns recent social posts into a linked creator brief with a spend cap, evidence ledger and coverage gaps. |
| [browser-game-maker](./browser-game-maker) | Turns one sentence into a small, playable single-file HTML5 canvas game, then plays it in a browser to check it works. |
| [snapcn-motion](./snapcn-motion) | Plans one product action as a Remotion timeline, verifies snapcn component contracts, and checks readable holds with an original example. |
| [ui-motion-animation](./ui-motion-animation) | Builds one clear interface state change with interruptible input, semantic feedback and reduced-motion behavior. |
| [reframe-brief](./reframe-brief) | Turns a vague request into a scoped brief with concrete interpretations, visible assumptions and observable acceptance criteria. |
| [article-to-seo-and-shorts](./article-to-seo-and-shorts) | Repurposes a published article into a search-informed site draft and one to three split-screen shorts that point readers to it. |
| [software-product-shots](./software-product-shots) | Turns a clean app capture into an angled device mockup and checks screen legibility at delivery size. |
| [pixel-art-character-builder](./pixel-art-character-builder) | Builds a shared voxel model, a pixel-art turnaround, and action frames for an original character. |
| [layered-reveal-motion](./layered-reveal-motion) | Explains a product assembly with aligned parts, a readable exploded view, and a reveal motion. |

## Install

From the repo root, after you clone it:

```bash
npx skills add steven-van-opus/creators-toolbox-skills --skill draw-icons
npx skills add steven-van-opus/creators-toolbox-skills --skill make-logo
npx skills add steven-van-opus/creators-toolbox-skills --skill revenue-maxxing
npx skills add steven-van-opus/creators-toolbox-skills --skill md3-ui
npx skills add steven-van-opus/creators-toolbox-skills --skill click-to-edit-site
npx skills add steven-van-opus/creators-toolbox-skills --skill unslop-ui-rewrite
npx skills add steven-van-opus/creators-toolbox-skills --skill seo-audit-checklist
npx skills add steven-van-opus/creators-toolbox-skills --skill browser-game-maker
npx skills add steven-van-opus/creators-toolbox-skills --skill snapcn-motion
npx skills add steven-van-opus/creators-toolbox-skills --skill ui-motion-animation
npx skills add steven-van-opus/creators-toolbox-skills --skill reframe-brief
npx skills add steven-van-opus/creators-toolbox-skills --skill article-to-seo-and-shorts
npx skills add steven-van-opus/creators-toolbox-skills --skill software-product-shots
npx skills add steven-van-opus/creators-toolbox-skills --skill pixel-art-character-builder
npx skills add steven-van-opus/creators-toolbox-skills --skill layered-reveal-motion
```

Or copy a skill folder into your project's `.agents/skills/` or `.claude/skills/` directory.

## License

MIT. See [LICENSE](./LICENSE).
