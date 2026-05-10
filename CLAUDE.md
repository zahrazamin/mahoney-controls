# Mahoney Controls — Complete Design System & Build Rules
> Paste this file in full at the start of every Claude Code session. It is the single source of truth for all UI decisions. Never override these rules with inline guesses.

---

## 1. Project Overview

**What this is:** A premium B2B e-commerce site for Mahoney Controls — a 60+ year old industrial electrical components wholesaler. Target $1M in online sales.

**Who uses it:** Professional engineers, panel builders, and procurement managers. They are busy, technical, and trust precision over decoration. They need to find parts fast, confirm stock, and request quotes without friction.

**Brand positioning:** "Luxury Industrial." The site must feel like a precision tool — authoritative, fast, and premium — not a generic retail shop. Think Grainger meets a Swiss watch company's website. Every component should feel like it belongs in the same family.

**Tone:** Confident, technical, efficient. No fluff. No decorative elements that don't serve a purpose.

---

## 2. Design Token Values

These are the EXACT values from `src/styles/tokens.css`. Use CSS variable names everywhere — never hardcode hex or px values for these properties.

### 2.1 Colors

```css
/* Brand Greens */
--color-primary:       #0E832A   /* Main brand green — buttons, links, active states */
--color-primary-dark:  #0B6A22   /* Hover state for primary green */
--color-primary-light: #12A034   /* Lighter green for secondary accents */
--color-primary-tint:  #E8F5EC   /* Very light green tint — badge backgrounds, hover bg */

/* Accent (Yellow/Gold) */
--color-accent:        #F4BA31   /* Used for bestseller badges, sale tags, warnings */
--color-accent-tint:   #FDF3D7   /* Light yellow background for accent chips */

/* Text */
--color-text:          #0F0F0F   /* Primary body text — near black */
--color-text-muted:    #6B6B65   /* Secondary text — descriptions, specs */
--color-text-subtle:   #A0A09A   /* Tertiary text — SKU labels, placeholder text */

/* Backgrounds */
--color-bg-page:       #F1F4F9   /* Page background — cool blue-grey, not pure white */
--color-bg-surface:    #FFFFFF   /* Card backgrounds, panels, modals */
/* NOTE: No --color-bg-raised in tokens. Use #F1F4F9 (bg-page) or a Tailwind gray as fallback */

/* Borders */
--color-border:        #E0E0DA   /* Default border — dividers, card outlines */
--color-border-strong: #C8C8C0   /* Stronger border — active inputs, focused states */

/* Status — not in tokens.css, define inline or add to tokens */
--color-success:       #0E832A   /* In-stock — use primary green */
--color-warning:       #F4BA31   /* Lead time — use accent yellow */
--color-error:         #DC2626   /* Out of stock, errors */
```

### 2.2 Typography

```css
/* Font Families */
--font-sans: 'IBM Plex Sans', sans-serif   /* ALL UI text — the only font used */
--font-mono: 'IBM Plex Mono', monospace    /* SKU codes, part numbers, technical specs */

/* Font Sizes */
--text-xs:   0.75rem    /* 12px — badges, SKUs, meta labels */
--text-sm:   0.875rem   /* 14px — captions, helper text, specs */
--text-base: 1rem       /* 16px — body text, card descriptions */
--text-xl:   1.25rem    /* 20px — subheadings, card titles */
--text-2xl:  1.5rem     /* 24px — card headings, section sub-headings */
--text-3xl:  2.25rem    /* 36px — section titles */
--text-4xl:  3rem       /* 48px — hero headings */

/* NOTE: There is NO --text-sm between xs and base, NO --text-lg or --text-md.
   Jump from --text-xs (12px) → --text-sm (14px) → --text-base (16px) → --text-xl (20px) */

/* Font Weights */
--weight-regular:   400
--weight-medium:    500
--weight-semibold:  600
--weight-bold:      700
--weight-extrabold: 800
--weight-black:     900

/* Line Heights */
--leading-tight: 1.1    /* Display headings only */
--leading-snug:  1.4    /* Subheadings, card titles */
--leading-body:  1.65   /* Body text, descriptions */

/* Letter Spacing — not in tokens.css, use these Tailwind classes instead */
/* tracking-tight (-0.025em) for large headings */
/* tracking-widest (0.1em) for uppercase eyebrow labels */
/* tracking-normal (0) for everything else */
```

### 2.3 Spacing Scale

```css
--space-1:   0.25rem   /* 4px */
--space-2:   0.5rem    /* 8px */
--space-3:   0.75rem   /* 12px */
--space-4:   1rem      /* 16px */
--space-6:   1.5rem    /* 24px */
--space-8:   2rem      /* 32px */
--space-10:  2.5rem    /* 40px */
--space-12:  3rem      /* 48px */
--space-16:  4rem      /* 64px */
--space-20:  5rem      /* 80px */
--space-24:  6rem      /* 96px */

/* NOTE: There is NO --space-5. Skip from --space-4 (16px) to --space-6 (24px). */
```

### 2.4 Border Radius

```css
--radius-sm:   4px    /* Chips, badges, tiny elements */
--radius-md:   8px    /* Inputs, small buttons */
--radius-lg:   12px   /* Cards, panels, dropdowns */
--radius-xl:   16px   /* Large cards, modals */
--radius-full: 9999px /* Pills, circular elements */
```

### 2.5 Shadows

```css
--shadow-sm: 0 1px 3px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.04)
--shadow-md: 0 4px 12px rgba(0,0,0,0.08), 0 2px 4px rgba(0,0,0,0.04)
--shadow-lg: 0 8px 24px rgba(0,0,0,0.10), 0 4px 8px rgba(0,0,0,0.04)
/* NOTE: No --shadow-xl in tokens. Use --shadow-lg for the largest shadow needed. */
```

### 2.6 Transitions

```css
--transition-fast: 150ms ease
--transition-base: 250ms ease    /* NOTE: 250ms, not 200ms */
--transition-slow: 400ms ease
/* NOTE: No --transition-spring in tokens. Use --transition-base for all interactive elements. */
```

---

## 3. Layout System

### 3.1 Page Structure

```
Max content width:  1280px   (use mx-auto px-6 on outer containers)
Narrow content:     768px    (text-heavy sections, forms)
Section padding:    80px top/bottom on desktop (--space-20)
                    48px top/bottom on mobile  (--space-12)
Column gutter:      24px     (--space-6)
```

### 3.2 Grid Rules

- **Product grids:** 5 columns desktop → 4 columns lg → 3 columns md → 2 columns sm → 1 mobile
- **Category cards:** 3 columns desktop → 2 tablet → 1 mobile
- **Promo banners:** 2 columns (50/50) desktop → stacked mobile
- **Mega menu:** 3 equal columns + 1 featured right panel (see Section 5)

### 3.3 Spacing Rhythm

Every section follows this rhythm. Do not deviate:
- Section top padding: `--space-20` (80px)
- Section bottom padding: `--space-20` (80px)
- Between section label and heading: `--space-2` (8px)
- Between heading and body text: `--space-4` (16px)
- Between body text and CTA: `--space-8` (32px)
- Between cards in a grid: `--space-6` (24px) gap

---

## 4. Component Anatomy

### 4.1 Product Card

This is the most important component. Follow this EXACTLY.

```
┌─────────────────────────────┐
│  [SKU chip]    [copy icon]  │  ← top row: SKU left, icon right. 11px, --color-text-subtle, --tracking-widest
│                             │
│     ┌─────────────────┐     │
│     │                 │     │  ← image container: bg --color-bg-raised, aspect-square, padding 16px
│     │   [product img] │     │     image: object-contain, no border
│     │                 │     │
│     └─────────────────┘     │
│                             │
│  [brand logo img]           │  ← brand logo: max-height 20px, left-aligned, margin-bottom 6px
│                             │
│  Product Name Here          │  ← --text-base, --weight-semibold, --color-text, 2 lines max, line-clamp-2
│                             │
│  $23.00                     │  ← --text-lg, --weight-bold, --color-text
│                             │
│  22mm | 10A | Green LED     │  ← --text-xs, --color-text-muted, single line, truncate
│                             │
│  ● 40 in Stock              │  ← green dot + text: --text-xs, --color-success, --weight-medium
│    OR                       │
│  ○ Lead Time: 10 Days       │  ← amber dot: --color-warning
│                             │
│  [Buy Now]  [+ Quote]       │  ← two buttons: primary (green fill) + ghost (border only)
└─────────────────────────────┘

Card styles:
- background: var(--color-bg-surface)
- border: 1px solid var(--color-border)
- border-radius: var(--radius-lg)
- padding: var(--space-4)
- box-shadow: none at rest → var(--shadow-md) on hover
- transition: var(--transition-base)
- cursor: pointer
- On hover: border-color changes to var(--color-border-strong)
```

**DO NOT:**
- Add colored card backgrounds
- Make the product name bold AND large — pick one
- Show more than 2 action buttons
- Add star ratings (this is B2B, not consumer)
- Use rounded image corners inside the card

### 4.2 Section Label / Eyebrow

Every section that has a heading also has a small label above it.

```
BROWSE OUR CATALOG          ← all caps, --text-xs, --weight-semibold, --color-primary, --tracking-wide
Shop by Category            ← --text-2xl or --text-3xl, --weight-bold, --color-text, --leading-tight
Subtitle text here          ← --text-base, --color-text-muted, --leading-body, max-width 560px
```

### 4.3 Primary Button

```
background:    var(--color-primary)
color:         #FFFFFF
font-size:     var(--text-sm)
font-weight:   var(--weight-semibold)
padding:       10px 20px
border-radius: var(--radius-md)
border:        none
letter-spacing: var(--tracking-wide)
text-transform: uppercase

Hover:
  background: var(--color-primary-dark)
  transform: translateY(-1px)
  box-shadow: var(--shadow-md)
  transition: var(--transition-base)
```

### 4.4 Ghost / Outline Button

```
background:    transparent
color:         var(--color-text)
border:        1.5px solid var(--color-border-strong)
font-size:     var(--text-sm)
font-weight:   var(--weight-medium)
padding:       9px 20px
border-radius: var(--radius-md)

Hover:
  border-color: var(--color-text-muted)
  background: var(--color-bg-raised)
```

### 4.5 Chips / Tags / Badges

**Stock badge (in-stock):**
```
background: rgba(22, 163, 74, 0.1)
color: var(--color-success)
border-radius: var(--radius-full)
padding: 2px 8px
font-size: var(--text-xs)
font-weight: var(--weight-medium)
```

**SKU chip:**
```
background: var(--color-bg-raised)
color: var(--color-text-subtle)
border-radius: var(--radius-sm)
padding: 2px 6px
font-size: var(--text-xs)
letter-spacing: var(--tracking-widest)
font-weight: var(--weight-medium)
```

**Category tag / filter chip:**
```
background: var(--color-bg-raised)
color: var(--color-text-muted)
border: 1px solid var(--color-border)
border-radius: var(--radius-full)
padding: 4px 12px
font-size: var(--text-sm)
Active state: background var(--color-primary), color white, border-color transparent
```

### 4.6 Input / Search Bar

```
background: var(--color-bg-surface)
border: 1.5px solid var(--color-border)
border-radius: var(--radius-md)
padding: 10px 16px
font-size: var(--text-base)
color: var(--color-text)
height: 44px

Focus:
  border-color: var(--color-primary)
  outline: none
  box-shadow: 0 0 0 3px rgba(14, 131, 42, 0.12)

Placeholder: var(--color-text-subtle)
```

### 4.7 Section Dividers

- Between major page sections: no visible line — use spacing only
- Between items in a list (e.g. mega menu rows): `1px solid var(--color-border)` 
- Between header and page content: `1px solid var(--color-border)`

---

## 5. Mega Menu (REFERENCE — DO NOT CHANGE THIS COMPONENT)

The mega menu is complete and approved. When touching it:
- 3 category columns + 1 right panel
- Each column: category name bold, green subtitle label below, numbered list items with `→` chevron
- Bottom row: "TOP MANUFACTURERS" label + brand logos
- Right panel: featured image + "Bulk RFQ & Project Quotes" CTA card + brand carousel
- Trigger: green pill button "Categories ▼" in navbar
- Backdrop: blurred dark overlay behind the panel

---

## 6. Navigation / Header

```
Header height:     64px
Background:        var(--color-bg-surface)
Border-bottom:     1px solid var(--color-border)
Position:          sticky top-0, z-index 50

Left side:
  [Categories pill button] [hamburger icon]   ← green pill, white text

Center:
  [Mahoney Controls logo]

Right side:
  [Account icon] [divider] [Cart icon with count badge]
```

**Secondary nav links** (Home, About Us, Contact Us) sit inline left of the logo on desktop.

---

## 7. Page-Specific Rules

### 7.1 Homepage Hero

- Full viewport height (100vh) or min 600px
- Background: dark industrial photo/video with dark overlay (opacity 0.55)
- Text: white on dark — heading is white, subtext is rgba(255,255,255,0.8)
- Heading: --text-4xl, --weight-black, --leading-tight, --tracking-tight
- Two CTAs: primary green button + ghost white button
- Right side: floating "Bestseller this week" product card (white card, shadow-lg)

### 7.2 Stats / Trust Bar

- Full-width section, background: var(--color-primary)
- 4 columns: large number in --text-4xl --weight-black white, label below in white opacity 0.8
- No border, no shadow — just the solid green band

### 7.3 Search Section

- Background: var(--color-bg-page)
- Centered, max-width 640px
- Heading: --text-2xl --weight-bold centered
- Search bar: full width, height 52px, search button inside right side (green)
- Below: "Popular:" label + clickable keyword chips
- Below chips: two filter dropdowns (Category, Brand) — subtle, small

### 7.4 Product Grid (Bestsellers / Featured)

- 5-column scrollable row on homepage (horizontal scroll on mobile)
- Section label + heading + "View All →" link right-aligned on same row as heading
- Cards: use the exact product card anatomy from Section 4.1

### 7.5 Promo Banners (2-up)

- Side by side, 50/50 split, rounded corners --radius-xl
- Left banner: dark background (photo), white text, green CTA
- Right banner: light background (photo), dark text, green CTA
- Height: 280px on desktop

### 7.6 Category Cards (3-up)

- 3 equal columns, white cards, border, --radius-lg
- Left: text (category name bold, component count muted, "Browse All →" green link)
- Right: product image thumbnail, right-aligned, ~120x120px
- Height: ~100px — compact, not tall

---

## 8. Typography Usage Rules

| Use case | Size token | Weight token | Color token |
|---|---|---|---|
| Hero heading | --text-4xl (48px) | --weight-black | white |
| Page/section heading | --text-3xl (36px) | --weight-bold | --color-text |
| Card heading | --text-2xl (24px) | --weight-bold | --color-text |
| Card title | --text-xl (20px) | --weight-semibold | --color-text |
| Body paragraph | --text-base (16px) | --weight-regular | --color-text-muted |
| Price | --text-xl (20px) | --weight-bold | --color-text |
| Spec line | --text-sm (14px) | --weight-regular | --color-text-muted |
| SKU | --text-xs (12px) | --weight-medium | --color-text-subtle, font-mono |
| Section eyebrow | --text-xs (12px) | --weight-semibold | --color-primary, uppercase |
| Button text | --text-sm (14px) | --weight-semibold | white or --color-text |
| Nav link | --text-sm (14px) | --weight-medium | --color-text |
| Badge/chip | --text-xs (12px) | --weight-medium | varies |

---

## 9. Aesthetic Principles (Non-Negotiable)

1. **Whitespace is a feature.** If it feels tight, add more space. Sections breathe.
2. **One green, used with intention.** `--color-primary` is for interactive elements and emphasis only — not decorative fills.
3. **Cards are light, not heavy.** White background, thin border, subtle hover shadow. Never colored card backgrounds.
4. **Typography hierarchy through size, not decoration.** No underlines, no all-caps headings (except eyebrows/labels), no text shadows.
5. **Stock status is always visible on product cards.** It's the #1 thing the user needs.
6. **Images are contained, never cropped awkwardly.** Product images use `object-contain` on a light gray background.
7. **No border-radius on images themselves** — the card's radius clips them if needed.
8. **Hover states are subtle.** translateY(-1px) on buttons, border-color shift on cards, opacity shift on links. Never dramatic.
9. **The accent color (yellow/gold) is for urgency only** — bestseller badges, limited-time offers. Use sparingly.
10. **Mobile is full-width stacked** — no horizontal scroll except intentional carousels.

---

## 10. What This Site Is NOT

Do not produce:
- Colorful multi-tone card backgrounds (this is not a consumer toy store)
- Large decorative icons or illustrations (this is precision industrial)
- Rounded pill-shaped cards (cards use --radius-lg, not --radius-full)
- Star ratings or review counts (B2B buyers don't use these)
- Confetti, gradients on cards, or rainbow accents
- Font sizes below --text-xs or above --text-4xl
- More than 2 CTAs on any single card
- Centered body text (only headings and hero text center — body always left-aligns)
- Generic "Learn More" buttons — every CTA is specific ("Browse All", "Request Quote", "Buy Now")

---

## 11. File Structure Reference

```
src/
  app/
    globals.css          ← base resets, imports tokens
    layout.tsx           ← root layout, font imports
    page.tsx             ← homepage
  styles/
    tokens.css           ← ALL design tokens (this file is the truth)
  components/
    layout/
      Header.tsx         ← sticky header + mega menu trigger
      MegaMenu.tsx       ← approved mega menu (do not redesign)
      Footer.tsx
    ui/
      ProductCard.tsx    ← use anatomy from Section 4.1
      Button.tsx         ← primary + ghost variants
      Badge.tsx          ← stock, SKU, category chips
      SearchBar.tsx
    sections/
      Hero.tsx
      StatsBar.tsx
      SearchSection.tsx
      PromobannerDuo.tsx
      CategoryCards.tsx
      ProductGrid.tsx
```

---

## 12. Session Startup Checklist

Before writing any code in a new session:
1. Read this entire file
2. Identify which component/section you are building
3. Look up the exact token values from Section 2
4. Look up the component anatomy from Section 4 (if applicable)
5. Follow the layout rules from Section 3
6. Never guess a color, size, or spacing — find it in this document first

---

## 13. Quick Reference Card

```
Primary green:    #0E832A  →  var(--color-primary)
Primary dark:     #0B6A22  →  var(--color-primary-dark)
Primary tint:     #E8F5EC  →  var(--color-primary-tint)
Accent yellow:    #F4BA31  →  var(--color-accent)
Accent tint:      #FDF3D7  →  var(--color-accent-tint)
Page bg:          #F1F4F9  →  var(--color-bg-page)
Card bg:          #FFFFFF  →  var(--color-bg-surface)
Border:           #E0E0DA  →  var(--color-border)
Border strong:    #C8C8C0  →  var(--color-border-strong)
Text primary:     #0F0F0F  →  var(--color-text)
Text muted:       #6B6B65  →  var(--color-text-muted)
Text subtle:      #A0A09A  →  var(--color-text-subtle)

Font body:        IBM Plex Sans   →  var(--font-sans)
Font code/SKU:    IBM Plex Mono   →  var(--font-mono)

Sizes:  12px=--text-xs | 14px=--text-sm | 16px=--text-base | 20px=--text-xl | 24px=--text-2xl | 36px=--text-3xl | 48px=--text-4xl

Card radius:      12px  →  var(--radius-lg)
Button radius:    8px   →  var(--radius-md)
Card shadow:      var(--shadow-md) on hover only
Transition:       250ms ease  →  var(--transition-base)

Max page width:   1280px
Section padding:  80px top/bottom  →  var(--space-20)
Card gap:         24px             →  var(--space-6)
```
