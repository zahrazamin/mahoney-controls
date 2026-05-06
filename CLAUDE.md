# Mahoney Controls — Project Rules

## Design System

All UI work must use tokens from `src/styles/tokens.css`. No exceptions.

### Colors
- Use `var(--color-text)`, `var(--color-text-muted)`, `var(--color-text-subtle)` for text
- Use `var(--color-primary)`, `var(--color-primary-dark)`, `var(--color-primary-light)`, `var(--color-primary-tint)` for greens
- Use `var(--color-accent)`, `var(--color-accent-tint)` for yellows
- Use `var(--color-bg-page)`, `var(--color-bg-surface)` for backgrounds
- Use `var(--color-border)`, `var(--color-border-strong)` for borders
- **Never** hardcode hex colors for text, backgrounds, or brand colors

### Typography
- Font sizes: `text-[length:var(--text-xs)]` through `text-[length:var(--text-4xl)]`
- Font weights: `font-[var(--weight-regular)]`, `font-[var(--weight-medium)]`, `font-[var(--weight-semibold)]`, `font-[var(--weight-bold)]`, `font-[var(--weight-extrabold)]`, `font-[var(--weight-black)]`
- Line heights: `var(--leading-tight)`, `var(--leading-snug)`, `var(--leading-body)`
- Font family: `var(--font-sans)`
- **Never** use raw px font sizes (e.g. `text-[13px]`) or numeric font weights (e.g. `font-[700]`)

### Spacing
- Use `var(--space-1)` through `var(--space-24)` for spacing
- Tailwind spacing utilities are fine for layout gaps and padding

### Border Radius
- Use `var(--radius-sm)`, `var(--radius-md)`, `var(--radius-lg)`, `var(--radius-xl)`, `var(--radius-full)`

### Shadows
- Use `var(--shadow-sm)`, `var(--shadow-md)`, `var(--shadow-lg)`

### Transitions
- Use `var(--transition-fast)`, `var(--transition-base)`, `var(--transition-slow)`

### Inline Styles
When using React inline styles (e.g. in `style={{}}`), CSS variables still work:
- `fontSize: 'var(--text-sm)'`
- `fontWeight: 'var(--weight-bold)'`
- `color: 'var(--color-primary)'`
