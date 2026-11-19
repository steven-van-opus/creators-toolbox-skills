# Scout news SEO audit

Illustrative example only. All post URLs, announcements, copy, media, responses, and measurements are fixtures. These are not reports about real launches or production pages. `observed` means observed in the illustrative fixture. Replacement news copy must be verified against real sources before publication.

## Brief and coverage

Request: audit a small Scout news sample for readers deciding whether a tool update matters to their workflow.

- Origin: `https://creatorstoolbox.com`
- Section: `/@scout/post/`
- Fixture collection time: `2026-11-19T14:30:00Z`, not a live fetch timestamp
- Selection: three supplied posts covering different update types
- Simulated request ledger: three content pages, one supporting hub at `/@scout`, two discovery documents, and four resources
- Discovery documents: `/robots.txt` and `/sitemap.xml`
- Resources: `/assets/site.js`, `/assets/site.css`, `/assets/site.woff2`, and `/media/scout-speaker-labels.webp`
- Raw HTML and headers available in the fixtures; no rendered page, search data, or field performance data

## Page inventory

All three final URLs equal their requested URLs and return 200. Each has a self-canonical, with no noindex in HTML or headers. Each has one incoming link from the fetched Scout hub.

| Path | Title | Title chars | Description chars | Main words | Question left unanswered |
| --- | --- | --- | --- | --- | --- |
| `/@scout/post/clip-planner-shot-lists` | Clip Planner adds reusable shot lists \| Scout | 45 | 60 | 210 | None found in the fixture |
| `/@scout/post/caption-drafts-speaker-labels` | Caption Drafts adds speaker labels \| Scout | 42 | 60 | 185 | None found in the fixture |
| `/@scout/post/newsletter-notes-text-export` | Newsletter Notes adds text export \| Scout | 41 | 60 | 25 | Where is export, what file appears, and what should the reader check? |

## Check summary

| Area | Fixture result |
| --- | --- |
| Titles and descriptions | Titles identify distinct updates. All three descriptions repeat the same generic 60-character sentence and fail to summarize the event. The duplication matters more than the length cue. |
| Canonical and noindex | Three self-canonicals agree with sitemap URLs and fetched 200 responses. No observed exclusion directives. Actual indexing unknown. |
| Headings and substance | Each H1 names its update. The first two posts have useful H2s for workflow and limits. The 25-word export post stops at an announcement and leaves practical questions unanswered. Word count supports review but is not the reason for the finding. |
| Internal links | Hub links to all three posts. Each post links back to `/@scout`, so these four fetched destinations cover all sample internal anchors. No broken targets or zero-incoming candidates within this sample. Wider graph unknown. |
| Images and media | Caption Drafts screenshot lacks alt entirely. It has width and height attributes. The fixture image shows two named speakers beside transcript blocks. Other post images have descriptive alt; decorative hub icons have empty alt. |
| Structured data | All three have parseable NewsArticle JSON-LD. Headlines, dates, and author match their fixture content. Rich-result eligibility and complete schema validity not tested. No extra markup is proposed simply to increase type counts. |
| Robots and sitemap | Applicable robots rules allow these paths and declare `/sitemap.xml`. The parsed fixture sitemap includes all three self-canonical post URLs. No conflict in the sampled entries. |
| Weight and Core Web Vitals | HTML decoded sizes range from 30,000 to 46,000 bytes. The three shared assets total 310,000 transferred bytes; the selected screenshot transfers 96,000 bytes at 1200 x 675. Caption Drafts sampled external assets total 406,000 transferred bytes. Other images and dynamic requests are omitted. This partial sum gives no measured LCP, CLS, or INP result. No performance defect is asserted from this evidence. |

## Prioritized fixes

No unexpected indexing blockers. Scores use `impact * (4 - effort)` with impact and effort each from 1 to 3. All status values below are `observed`. IDs match the [CSV](./scout-audit.csv).

### S01, S02, S03: Give each post its own summary

Evidence on all three URLs: `head > meta[name="description"]` contains `Scout follows the latest creator tools and platform updates.`, 60 characters. A reader cannot tell these stories apart from that text.

Each row has impact 2, effort 1, score 6, and high confidence within the fixture. These are separate CSV rows because the replacements differ.

| ID | URL | Exact replacement description | Chars |
| --- | --- | --- | --- |
| S01 | `https://creatorstoolbox.com/@scout/post/clip-planner-shot-lists` | Clip Planner adds reusable shot lists so creators can carry a recording plan into their next project. Scout explains where the option appears. | 142 |
| S02 | `https://creatorstoolbox.com/@scout/post/caption-drafts-speaker-labels` | Caption Drafts adds speaker labels for transcript review. Scout shows where labels appear and what to check before sharing a caption draft. | 139 |
| S03 | `https://creatorstoolbox.com/@scout/post/newsletter-notes-text-export` | Newsletter Notes adds a plain text export for draft notes. Scout explains where to find the export and what to check after saving the file. | 139 |

Fixture support: the first two bodies describe those workflows. The third summary depends on applying S05's supported body expansion before or with the metadata edit.

Acceptance for each: fetch the updated HTML, confirm one description, recount it, compare it with the actual body, and rerun duplicate grouping across the three posts. Distinct descriptions do not guarantee that search results will display them.

### S04: Describe the speaker-label screenshot

- URL: `https://creatorstoolbox.com/@scout/post/caption-drafts-speaker-labels`
- Confidence: high within the fixture
- Evidence: `img[src="/media/scout-speaker-labels.webp"]` has no alt attribute. The inspected fixture shows Maya and Leo beside their respective transcript blocks.
- Impact 2, effort 1, score 6.
- Exact replacement attribute: `alt="Caption Drafts transcript with Maya and Leo labeled beside their lines"`
- Acceptance: the image has that descriptive alt and retains its existing width and height. Confirm the names and visible content against the actual screenshot before publication. Do not replace it with empty alt because the screenshot carries the story's explanation.

### S05: Answer the export question in the post

- URL: `https://creatorstoolbox.com/@scout/post/newsletter-notes-text-export`
- Confidence: high for the fixture gap; real facts need source verification
- Evidence: the entire `article .post-body` says `Newsletter Notes now supports text export. Creators can save a draft outside the app. The update is available from the editor for existing notes today.` This is 25 words and gives no steps or output details.
- Fixture source note supplied with the example: editor menu labels are `Export` then `Plain text`; the file uses `.txt`; it includes note text and links but not board layout. No other release claims are supported.
- Impact 2, effort 2, score 4. More effort than a metadata field because the workflow needs checking.
- Exact replacement body:

> Newsletter Notes adds a plain text export for draft notes. Open a note in the editor, choose Export, then Plain text to save a .txt file. The file keeps the note text and links, but leaves out the board layout. Open the saved file and check the links before moving the draft into your newsletter editor.

- Acceptance: verify the menu, file type, and output against a real public release note or documented workflow. Replace the body only after that check, then publish S03's description with it. If those facts cannot be verified, leave the proposed copy as a draft and record the missing source. Do not add filler to hit a word target.

## Follow-up

Fetch the three posts after changes. Check unique summaries, the screenshot alt, the export body, and unchanged canonicals/directives. Recheck the hub links. Rendered metadata, links from outside the sample, actual indexing, news freshness, and Core Web Vitals remain unverified.
