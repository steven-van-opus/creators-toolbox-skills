# Products SEO audit

Illustrative example only. All URLs, product names, page content, response details, and measurements below are fixtures. No production pages were fetched. `observed` in the findings means observed in the illustrative fixture.

## Brief and coverage

Request: audit five Creators Toolbox product pages for creators comparing tools before trying one. Focus on clear product purpose and discovery from the product directory.

- Origin: `https://creatorstoolbox.com`
- Section: `/products/`
- Fixture collection time: `2026-11-19T14:00:00Z`, not a live fetch timestamp
- Selection: five supplied URLs, not a random sample
- Simulated request ledger: five content pages, one supporting hub at `/products/`, two discovery documents, and four resources
- Discovery documents: `/robots.txt` and `/sitemap.xml`
- Resources: three shared files at `/assets/site.js`, `/assets/site.css`, and `/assets/site.woff2`, plus `/media/thumbnail-notes-hero.png`
- No browser rendering, search traffic, or field performance data

## Page inventory

All paths use the origin above. Fixture responses are 200 with no redirects. Titles and descriptions are counted after whitespace normalization. Incoming counts are from the five pages plus the hub.

| Path | Title | Title chars | Description chars | Canonical | Noindex | Incoming sources |
| --- | --- | --- | --- | --- | --- | --- |
| `/products/clip-planner` | Clip Planner for YouTube Videos, Shorts and Reels \| Creators Toolbox | 68 | 131 | Self | Absent in HTML and headers | 2 |
| `/products/caption-drafts` | Caption Drafts \| Creators Toolbox | 33 | 126 | Missing in HTML and headers | Absent in HTML and headers | 1 |
| `/products/newsletter-notes` | Newsletter Notes \| Creators Toolbox | 35 | 131 | Self | Absent in HTML and headers | 2 |
| `/products/thumbnail-notes` | Thumbnail Notes \| Creators Toolbox | 34 | 132 | Self | Absent in HTML and headers | 1 |
| `/products/media-kit-builder` | Media Kit Builder \| Creators Toolbox | 36 | 124 | Self | Absent in HTML and headers | 0 |

## Check summary

| Area | Fixture result |
| --- | --- |
| Titles and descriptions | All present and distinct. Clip Planner's title exceeds the 60-character review cue. Newsletter Notes describes publishing even though the fixture only supports drafting. Other descriptions fit their page purpose. |
| Canonical and noindex | Four self-canonicals resolve to the same supplied 200 URLs. Caption Drafts has no canonical. No noindex found in the fetched HTML, bot-specific tags, or headers. Actual indexing remains unknown. |
| Headings and substance | Each page has a product H1 and H2s for workflow and output. Main content ranges from 240 to 410 words and answers what the product does. No heading or thin-content finding. |
| Internal links | Hub links to the first four products. Newsletter Notes links to Clip Planner, and Clip Planner links to Newsletter Notes. All six anchor destinations are among the six fetched pages and return 200. Media Kit Builder appears only in the supplied list and sitemap, making it an orphan candidate within this sample. |
| Images | Meaningful images have descriptive alt. Decorative icons use empty alt. All reserve layout space. The sampled Thumbnail Notes hero is large for its stated layout. Sizes of other images were not checked. |
| Structured data | Each page contains parseable WebPage and BreadcrumbList JSON-LD with fixture names and URLs matching the content. No full schema or rich-result validation performed. Absence of Product markup is not treated as a defect. |
| Robots and sitemap | Fixture robots.txt allows the section for the applicable agent and declares the sitemap. Sitemap XML includes all five preferred URLs. No sampled sitemap/status/directive conflict. No claim about unexamined sitemap URLs. |
| Weight and Core Web Vitals | HTML decoded sizes range from 44,000 to 61,000 bytes and are reported separately from asset transfer sizes. Shared JS, CSS, and font transfer bodies total 310,000 bytes. Thumbnail Notes hero transfers 1,800,000 bytes at 2400 x 1600 pixels for an intended 600 x 400 slot. Sampled external assets for that page total 2,110,000 transferred bytes. Other images, CSS imports, and dynamic requests are excluded. This is a partial sum. LCP, CLS, and INP are not measured. |

## Prioritized fixes

Scores use impact 1 to 3 and effort 1 to 3, with `impact * (4 - effort)`. No unexpected indexing blocker appears in the fixtures. Equal scores are ordered by workflow relevance. IDs also appear in the [CSV](./products-audit.csv).

### P01: Say what Newsletter Notes actually produces

- URL: `https://creatorstoolbox.com/products/newsletter-notes`
- Status: observed; confidence: high within the fixture
- Evidence: `head > meta[name="description"]` says `Publish your newsletter from one place. Write, send, and track each edition with Newsletter Notes, a tool for independent creators.` The fixture workflow only exports a draft; sending and tracking are unsupported.
- Impact 3, effort 1, score 9. The copy changes the visitor's understanding of the product.
- Exact replacement description: `Draft a newsletter outline, collect links, and export your notes with Newsletter Notes. Review the workflow before starting your next issue.`
- Acceptance: fetch again, confirm this description appears once, and check it against the visible export workflow. No sending or analytics claims remain.

### P02: Make Clip Planner's title easier to scan

- URL: `https://creatorstoolbox.com/products/clip-planner`
- Status: observed; confidence: high within the fixture
- Evidence: `head > title` is `Clip Planner for YouTube Videos, Shorts and Reels | Creators Toolbox`, 68 characters. It repeats format names that the fixture already explains in the body.
- Impact 2, effort 1, score 6. Length is an editorial cue; truncation was not measured.
- Exact replacement title: `Clip Planner for Video Creators | Creators Toolbox`, 50 characters.
- Keep the matching 131-character description: `Plan your next video with a shot list, a draft outline, and notes for the edit. See how Clip Planner fits a small creator workflow.`
- Acceptance: fetch the title again, recount it, and confirm the product H1 and workflow still support this purpose.

### P03: Give Media Kit Builder a directory link

- URL: `https://creatorstoolbox.com/products/media-kit-builder`
- Status: observed; confidence: medium because the link graph is small
- Evidence: zero incoming anchors from the six fetched pages; sitemap entry present. This supports a sample orphan candidate only.
- Impact 2, effort 1, score 6.
- Exact insertion in the `/products/` directory's product list: `<a href="/products/media-kit-builder">Build a creator media kit</a>`
- Acceptance: fetch the hub, find the anchor in its HTML, and follow it to the 200 preferred product URL. The sample incoming count should become at least one. Wider orphan status remains unverified.

### P04: Reduce the Thumbnail Notes hero download

- URL: `https://creatorstoolbox.com/products/thumbnail-notes`
- Status: observed; confidence: high for bytes, medium for performance effect
- Evidence: `img[src="/media/thumbnail-notes-hero.png"]` references a 1,800,000-byte transferred PNG at 2400 x 1600. The fixture layout specifies 600 x 400 CSS pixels. Existing alt is `Thumbnail Notes board with three draft covers`.
- Impact 2, effort 2, score 4. Download cost suggests possible LCP risk, not measured LCP failure.
- Proposed asset: create `/media/thumbnail-notes-hero.webp` at 1200 x 800 for a 2x version of the slot, aiming for at most 250,000 transferred bytes after a visual quality check. This is a target, not a result.
- Exact replacement markup once that asset exists: `<img src="/media/thumbnail-notes-hero.webp" width="600" height="400" alt="Thumbnail Notes board with three draft covers">`
- Acceptance: compare text legibility at the displayed size, confirm the new URL returns an image, measure transferred bytes again, and retain reserved dimensions. Browser measurement is needed to evaluate LCP.

### P05: Declare the preferred Caption Drafts URL

- URL: `https://creatorstoolbox.com/products/caption-drafts`
- Status: observed; confidence: high within the fixture
- Evidence: no `link[rel="canonical"]` in the complete HTML and no canonical HTTP Link header. The directory and sitemap both use this exact URL.
- Impact 1, effort 1, score 3. Missing canonical is an advisory here, not an indexing blocker.
- Exact head insertion: `<link rel="canonical" href="https://creatorstoolbox.com/products/caption-drafts">`
- Acceptance: one consistent canonical declaration resolves to this 200 URL with no noindex. Do not claim this forces a search engine's canonical selection.

## Follow-up

After changes, fetch the five targets, the hub, the two discovery documents, and the changed image. Recompute metadata groups and the sample link graph. Check rendered behavior and field performance separately. Rankings, traffic, actual indexing, dynamically added metadata, unsampled media, and links from the rest of the site remain unknown.
