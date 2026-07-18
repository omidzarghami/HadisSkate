---
name: Hadis Skate Design System
colors:
  surface: '#fef7ff'
  surface-dim: '#dfd7e7'
  surface-bright: '#fef7ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f9f1ff'
  surface-container: '#f3ebfb'
  surface-container-high: '#ede5f5'
  surface-container-highest: '#e8dfef'
  on-surface: '#1d1a25'
  on-surface-variant: '#4a4456'
  inverse-surface: '#332e3a'
  inverse-on-surface: '#f6eefe'
  outline: '#7b7488'
  outline-variant: '#ccc3d9'
  surface-tint: '#731df7'
  primary: '#6100da'
  on-primary: '#ffffff'
  primary-container: '#7b2cff'
  on-primary-container: '#ecdfff'
  inverse-primary: '#d1bcff'
  secondary: '#b5005f'
  on-secondary: '#ffffff'
  secondary-container: '#e20378'
  on-secondary-container: '#fffbff'
  tertiary: '#833800'
  on-tertiary: '#ffffff'
  tertiary-container: '#a84a00'
  on-tertiary-container: '#ffdece'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#eaddff'
  primary-fixed-dim: '#d1bcff'
  on-primary-fixed: '#24005b'
  on-primary-fixed-variant: '#5800c8'
  secondary-fixed: '#ffd9e2'
  secondary-fixed-dim: '#ffb1c7'
  on-secondary-fixed: '#3e001d'
  on-secondary-fixed-variant: '#8e0049'
  tertiary-fixed: '#ffdbca'
  tertiary-fixed-dim: '#ffb68f'
  on-tertiary-fixed: '#331100'
  on-tertiary-fixed-variant: '#773200'
  background: '#fef7ff'
  on-background: '#1d1a25'
  surface-variant: '#e8dfef'
typography:
  display-lg:
    fontFamily: Rubik
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Rubik
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
  headline-md:
    fontFamily: Rubik
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
  headline-sm:
    fontFamily: Rubik
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-bold:
    fontFamily: Rubik
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
  sticker-text:
    fontFamily: Rubik
    fontSize: 12px
    fontWeight: '800'
    lineHeight: 16px
    letterSpacing: 0.05em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  xs: 4px
  sm: 12px
  md: 24px
  lg: 40px
  xl: 64px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 80px
---

## Brand & Style
The brand personality is energetic, inclusive, and street-inspired, capturing the kinetic motion of skating. It balances the rebellious spirit of skate culture with the safety and professionalism expected by parents. The design system leverages a **Modern Sports Retail** aesthetic—merging high-contrast color pops with clean, accessible layouts.

The visual direction follows a **Modern-Playful** approach:
- **Kinetic Energy:** Use of slanted lines, overlapping elements, and sticker-style badges to imply movement.
- **Inclusivity:** A vibrant, multi-color palette that transcends traditional gender binaries, appealing to all young skaters.
- **Trustworthy Innovation:** Clean execution and high-quality photography ensure the platform feels like a premium retail destination rather than just a toy store.

## Colors
This design system utilizes a high-octane palette designed to stand out in the competitive sports retail market. 

- **Primary & Secondary (Purple & Pink):** These are the core brand drivers, used for primary actions and brand-heavy components.
- **Accents (Yellow & Cyan):** Used for "New In" tags, "Sale" banners, and interactive highlights to draw the eye to specific product features.
- **Neutral Foundation:** A base of White and Soft Lavender ensures the interface remains readable and professional, preventing "visual fatigue" from the bright primary colors.
- **Gradients:** Use linear gradients from Purple to Pink (135°) for hero sections and primary call-to-actions to enhance the "fast" and "exciting" mood.

## Typography
The typography is centered around **Rubik**, chosen for its friendly, rounded terminals that mirror the shape of skateboard wheels and safety gear. It offers excellent legibility in Persian (RTL) contexts.

- **Headlines:** Set in Rubik with heavy weights (600-700). For hero sections, use slightly negative letter spacing to create a compact, "impactful" look.
- **Body Text:** Plus Jakarta Sans is used for product descriptions and long-form text. Its open counters and modern structure provide a clean contrast to the bold headlines.
- **RTL Optimization:** Ensure line heights for Persian text are 10-15% taller than standard English counterparts to accommodate the ascending and descending characters of the Vazirmatn/Rubik script.

## Layout & Spacing
The layout follows a **Fluid Grid** model with a focus on generous white space to allow product photography to breathe.

- **Desktop:** 12-column grid with 24px gutters. Content is centered with wide 80px margins.
- **Mobile:** 4-column grid with 16px margins. 
- **Spacing Logic:** Use an 8px base unit. Component internal padding should default to `md` (24px) for cards to maintain the "playful" and "unconfined" feeling.
- **Reflow:** On mobile, product grids transition from 3 or 4 columns to a 2-column "staggered" layout to maintain visual interest.

## Elevation & Depth
Depth is created through **Ambient Shadows** and **Tonal Layering** rather than harsh outlines.

- **Soft Glows:** Instead of neutral gray shadows, use low-opacity tinted shadows (e.g., a soft purple shadow `#7B2CFF` at 15% opacity) for primary buttons and featured product cards.
- **Sticker Layers:** Elements like "Sale" or "New" badges should have a subtle 1px white stroke and a crisp, slightly offset shadow to mimic physical stickers applied to a skateboard deck.
- **Floating Surfaces:** Navigation bars and "Add to Cart" sticky footers use a backdrop blur (12px) with a semi-transparent white fill (80%) to maintain a sense of lightness.

## Shapes
The shape language is dominated by **large, friendly radii**. This communicates "safety" (no sharp edges) and aligns with the youthful target audience.

- **Standard Elements:** Buttons, input fields, and small chips use a `0.5rem` (8px) radius.
- **Featured Containers:** Product cards and promotional banners use a `1.5rem` (24px) radius.
- **Interactive States:** On hover, cards may increase their elevation, but their corner radius remains constant to maintain the "solid" feel of quality gear.

## Components
- **Buttons:** Primary buttons are pill-shaped or highly rounded with a gradient fill. They should feature a "bounce" micro-interaction on press.
- **Product Cards:** Cards feature a soft Lavender background. The image should slightly "break" the container (overflow) for a dynamic, 3D effect. Include a "sticker" badge in the top-right corner.
- **Chips:** Used for sizing and categories. Use a thick 2px border with high-contrast background colors when selected.
- **Input Fields:** Search bars should be oversized with a 50% roundedness (pill) and a Cyan focus ring.
- **Progress Bars:** For "Safe Delivery" or "Stock Level," use thick, rounded bars with a dual-tone gradient.
- **Sticker Accents:** Small, decorative SVG shapes (stars, lightning bolts, skate wheels) can be placed programmatically around hero images to reinforce the skate culture vibe.