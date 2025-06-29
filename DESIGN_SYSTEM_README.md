# Design System: Color System

This document outlines our approach for defining and using color tokens, leveraging the Oklch color space and modern CSS features.

## 1. Color Token Naming

Our system uses a hybrid approach to naming color tokens to provide both flexibility and maintainability.

*   **Palette Tokens**: A wide range of base colors with literal names (e.g., `--blue-500`, `--grey-100`).
*   **Semantic Tokens**: Tokens named for their UI function (e.g., `--primary`, `--background-body`, `--text-error`). These reference palette tokens, making the codebase readable and theming much easier.

## 2. The Oklch Color Space

We use the Oklch color space for its perceptual uniformity, which makes creating consistent and accessible color variations intuitive.

## 3. Creating Color Variations

We use CSS relative color syntax to create variations like hover or active states directly from a base semantic token. This is achieved using the `from` keyword within the `oklch()` function, which lets you modify the lightness, chroma, or hue of an existing color.

### Example Implementation

This example shows how to define a semantic token and then derive variations from it.

```css
:root {
  /* 1. Define a semantic token by referencing the palette */
  --primary: var(--blue-500); /* --blue-500 is oklch(0.5 0.15 265) */

  /* 2. Derive variations from the semantic token using relative color syntax */
  --primary-accent: oklch(from var(--primary) calc(l + 0.05) c h);
  --primary-muted: oklch(from var(--primary) calc(l - 0.05) c h);

  /* 4. Define explicit content colors for contrast */
  --primary-content: white;
}
```

By adjusting the base `--primary` token (e.g., pointing it to `--red-500`), all related colors (`--primary-accent`, etc.) will update automatically while maintaining their perceptual relationship. This makes the system incredibly robust and easy to theme.

## 4. Common Semantic Token Names

Here are some common semantic token names, grouped by their function, to guide the naming of new tokens.

### Core & Brand
*   `--primary`: The main brand color for primary actions.
*   `--secondary`: An accent color for secondary actions.

### Status & Feedback
*   `--success`: For successful operations.
*   `--error`: For failed operations.
*   `--warning`: To warn about potential issues.
*   `--info`: For informational messages.

### UI & Surface
*   `--surface`: For layered surfaces like cards or modals.
*   `--border`: For borders and dividers.
*   `--disabled`: For disabled or inactive elements.

### Content & Text
*   `--content`: The primary color for text and icons.
*   `--content-muted`: For secondary or less important text.

### Color Variations
Semantic colors can have variations for different states or purposes. These are created by appending a suffix to a base semantic token.
*   `--primary-accent`: A more vibrant version for highlighting.
*   `--primary-muted`: A more subtle or desaturated version.
*   `--primary-content`: For text or icons placed on a `--primary` background.
