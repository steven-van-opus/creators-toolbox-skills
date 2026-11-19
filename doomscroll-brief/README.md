# Doomscroll Brief

An original Creators Toolbox agent skill for turning recent social posts into a short, linked creator research brief. It sets a spend cap, keeps an evidence ledger, separates announcements from reactions and reports coverage gaps. It publishes nothing.

## Install

```bash
npx skills add steven-van-opus/creators-toolbox-skills --skill doomscroll-brief
```

Or copy this folder into your agent's skills directory.

Ask: "Use doomscroll-brief to research new video editing tools over the last 24 hours for solo creators. Use my supplied exports only, and give me three supported content angles."

For live research, connect Treg using its [official setup](https://treg.to/llms.txt), then specify the maximum spend. The skill itself is free; your agent and data providers may have separate costs. No provider endpoint names or prices are hardcoded.

See the [illustrative example](examples/brief.md). Its posts, metrics and product are fictional.

## Credit and license

Inspired by the public [Treg Doomscroll page](https://treg.to/doomscroll) and [upstream skill](https://github.com/superdesigndev/treg/blob/main/skills/doomscroll/SKILL.md), by Superdesign Dev. This folder contains original instructions and examples, with no copied upstream prompts, scripts or registry code. Our work is MIT licensed under the repository [LICENSE](../LICENSE).

The original [Treg repository](https://github.com/superdesigndev/treg) retains its own license: Apache 2.0 with additional terms, including restrictions on providing hosted, managed or embedded services to third parties without prior written authorization. See the [upstream license](https://github.com/superdesigndev/treg/blob/main/LICENSE). Installing or calling Treg does not change those terms.
