# Neoglyn Brand Guidelines & Token Rules

## Vision
The Neoglyn aesthetic is clean, premium, and clinical. It must evoke the feeling of high-end medical skincare ("Anti-Gravity").

## Color Tokens

**Primary Colors:**
*   **Midnight Blue (`#001F3F`)**: For luxury and authority. Used in headers, navigation, primary text, and footers.
*   **Bright Mint (`#82D9B9`)**: For high-tech energy. Used for ALL primary action buttons (CTAs) and sale alerts.
*   **Light Silver (`#E0E0E0`)**: The primary background color. Do not use stark white (`#FFFFFF`) as the main background; it must feel clinical and airy.

**Secondary Colors:**
*   **Soft Mint (`#B2EBD5`)**: Used for subtle section backgrounds, hover states on buttons, and subtle highlights.
*   **Metallic Silver (`#C0C0C0`)**: For a clinical feel. Used in borders, subtle dividers, and icons.

## Typography
*   **Font Family**: `Manrope` (Google Font)
*   **Usage**: Bold, modern headings paired with clean, highly readable body text.

## CSS Rules (The "Real Way")
*   **NO Tailwind**: We are building a native Shopify Liquid theme. Do not inject Tailwind classes.
*   **Custom CSS Rules**: All styling must live in standard `.css` files (e.g., `base.css` or specific component files).
*   **Padding & Spacing**: Elements (buttons, cards, banners) must have ample white space. Do not cram elements together. Maintain equal margin/padding proportions.
*   **Rounding**: UI elements (buttons, popups, inputs) should have subtle border-radius (e.g., `6px` or `12px`), avoiding extremely sharp corners unless it's a full-width section.

## Strict Enforcement
**CRITICAL**: Every time Liquid or CSS is modified, these exact hex codes and font rules MUST be used as the absolute source of truth. Do not deviate or guess similar colors.
