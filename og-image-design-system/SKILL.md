---
name: og-image-design-system
description: Design reusable 1200 × 630 Open Graph images from an existing brand kit. Use when a site needs consistent link previews for product, changelog, or article pages.
---

# OG Image Design System

## Define one family of cards

Inspect the project metadata and brand files before changing an image. Identify which routes need a page-specific card and what the default card should say when the page has no art. Collect a short accurate headline, a logo or wordmark, and a legal-to-use screenshot or illustration if it helps the reader identify the page.

Choose a small set of locked decisions such as background, type family, brand placement, safe inset, and contrast. Name the slots a page can vary such as headline, cropped art, and an optional page label when it conveys useful context. Keep a text-only mode for pages whose art slot is empty. Render a short title, a long title, and a missing-image case before declaring the layout reusable. Allow sensible wrapping and keep user-visible words intact.

## Render in the project's existing pipeline

Start from 1200 × 630 unless the destination calls for a different size. Reuse an existing social-image route or asset build when possible. For a static page, capture the HTML card at the exact export viewport and keep the rendered PNG or WebP available to crawlers. Keep text in each placement clear of common center and corner crops, including interface overlays. Design essential text to survive a thumbnail near 400 px wide.

Give each page one effective absolute `og:image` URL and meaningful `og:image:alt`. Use image dimensions in metadata where the existing framework supports them. Preserve the site's social card conventions, including the large-image setting when it applies. Give changed images new URLs when a platform may cache the old preview.

## Verify the fetched image

Check the generated image's intrinsic size, the 400 px preview, and the real page metadata. Fetch the final source URL as a signed-out visitor when it is deployed and check that it returns an image matching the URL in the page. Include the dimensions, alt and route in the handoff.

[Pinboard Hour](examples/pinboard-hour.html) is a self-contained HTML card with local color and type tokens and an original CSS illustration. See [README.md](README.md) for the exact capture command.
