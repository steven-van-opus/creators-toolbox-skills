# Journalist Pitch

A Creators Toolbox agent skill that matches public coverage with public data you already have, then drafts a short pitch built around a chart or a figure.

It will not invent numbers, and it will not send the email unless you ask it to send a draft you have reviewed.

## Install

```bash
npx skills add steven-van-opus/creators-toolbox-skills --skill journalist-pitch
```

Then ask your agent: "Use the journalist-pitch skill to offer a reporter our public chart of new AI video tools listed this month."

## Example

See [examples/ai-video-listings](./examples/ai-video-listings) for a worked pitch that offers a directory chart, with placeholder figures clearly marked.

## Credit

Inspired by Ryan Doyle's description of a PR skill in [this post](https://x.com/doooyle/status/2118862321170743641). He did not publish that skill. This folder is our own version, written for public directory data and Creators Toolbox examples.

## License

MIT. Part of [creators-toolbox-skills](https://github.com/steven-van-opus/creators-toolbox-skills).
