# SEO Audit Checklist

A Creators Toolbox agent skill that audits one public site section and turns the evidence into a short fix list. It uses a small crawl, public fetches, and existing tools. No paid SEO API or account access is required.

## Install

```bash
npx skills add steven-van-opus/creators-toolbox-skills --skill seo-audit-checklist
```

Then ask: "Use seo-audit-checklist to audit five pages in creatorstoolbox.com/products/. Save a Markdown report and CSV with exact copy changes."

## What you get

- A page inventory with titles, descriptions, canonicals, noindex, headings, and internal link coverage
- Checks for orphan candidates, image alt and size, structured data, sitemap, and robots.txt
- Page weight observations with possible Core Web Vitals risks clearly separated from measurements
- Fixes ranked by impact and effort, with replacement copy and verification steps
- Matching Markdown and CSV files

The default scope is up to ten content pages plus a bounded set of supporting requests. Unknowns stay visible. A small crawl cannot establish sitewide orphan status, actual search indexing, or Core Web Vitals results.

## Examples

- [Five product pages](./examples/products-audit.md), with a [findings CSV](./examples/products-audit.csv): a long title, missing canonical, link gap, and heavy image.
- [Scout news posts](./examples/scout-audit.md), with a [findings CSV](./examples/scout-audit.csv): duplicate descriptions, an incomplete post, and missing media alt.

All example URLs, content, findings, and measurements are illustrative. They do not describe the production site.

For a separate visual and interaction review, see [anti-slop-ui-review](../anti-slop-ui-review).

## Credit

Inspired by [SEOmator SEO Audit](https://github.com/seo-skills/seo-audit-skill), an open source SEO audit tool and Claude Code skill. Its README informed the scope review. This folder contains original Creators Toolbox instructions and examples, with no copied prompts, rule lists, code, or prose.

## License

This folder's original work is MIT licensed under the repository [LICENSE](../LICENSE). The original SEOmator project has its own [MIT license](https://github.com/seo-skills/seo-audit-skill/blob/main/LICENSE), copyright 2024-present SEOmator. Linked projects retain their own terms.
