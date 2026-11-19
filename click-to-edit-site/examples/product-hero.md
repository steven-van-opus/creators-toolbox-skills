# Product hero label

## Input

Local page: `http://localhost:3000/tools/framekit`. Creators Toolbox lists FrameKit, a fictional caption editor. At 1440 by 900, select `[data-ct-edit="product-profile"]`. Request: "Change Profile to Visit website. Keep the link destination."

Fixture source in `src/components/ProductHero.tsx`:

```tsx
<a data-ct-edit="product-profile" href={product.website}>Profile</a>
```

## Expected output

Ownership: `ProductHero.tsx` owns the anchor; `product.website` comes from the current product. The selector matches once. There is no separate accessible label. Read that component and its `.productHero a` rule, not the entire tools route tree.

Proposed diff:

```diff
-<a data-ct-edit="product-profile" href={product.website}>Profile</a>
+<a data-ct-edit="product-profile" href={product.website}>Visit website</a>
```

Verification target: same 1440 by 900 hero crop before and after, plus 390 by 844 to check the longer label. Tab to the anchor and confirm its focus ring. Inspect `href` before following any external link. Expected result: label reads Visit website, destination is unchanged, and the button does not overlap Save tool on mobile.

This is an expected review result, not a claim that screenshots were captured from a real app. A live run returns actual screenshot paths and observed checks.
