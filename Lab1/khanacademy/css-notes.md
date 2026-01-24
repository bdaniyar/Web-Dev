# CSS Notes (Cheat Sheet)

> **CSS (Cascading Style Sheets)** controls the **visual presentation** of HTML: colors, spacing, layout, typography.

---

## 1) How to add CSS

### Option A — external file (recommended)
In HTML:

```html
<link rel="stylesheet" href="styles.css" />
```

### Option B — internal CSS

```html
<style>
  body { font-family: system-ui, Arial, sans-serif; }
</style>
```

### Option C — inline styles (avoid for learning best practice)

```html
<p style="color: red;">Red text</p>
```

---

## 2) CSS rule syntax

```css
selector {
  property: value;
  property: value;
}
```

Example:

```css
p {
  color: rgb(255, 0, 0);
}
```

---

## 3) Selectors (what you target)

### Element selector
Targets tag names:

```css
p { line-height: 1.6; }
h1 { color: #111827; }
```

### Class selector
Reusable:

```css
.note {
  background: #fff7ed;
  border-left: 4px solid #fb923c;
  padding: 12px;
}
```

### ID selector
Usually unique:

```css
#winter { color: #2563eb; }
#summer { color: #f97316; }
```

### Multiple selectors

```css
h1, h2 { margin-bottom: 12px; }
```

---

## 4) Cascade & specificity (important)
- If rules conflict, the browser chooses the one with **higher specificity**.
- Typical order: `#id` > `.class` > `tag`.
- Use `!important` only as a last resort.

---

## 5) The box model
Every element is a box:
- `content` → `padding` → `border` → `margin`

Example:

```css
.card {
  padding: 16px;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  margin: 16px 0;
}
```

---

## 6) Common properties (daily use)

### Typography
```css
body {
  font-family: system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif;
  font-size: 16px;
  line-height: 1.6;
}
```

### Colors
```css
h1 { color: #111827; }
body { background: #f8fafc; }
```

### Spacing
```css
p { margin: 0 0 10px; }
```

---

## 7) Layout basics

### Centered container
```css
.container {
  max-width: 760px;
  margin: 40px auto;
  padding: 24px;
  background: #ffffff;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
}
```

### Flexbox (quick intro)
```css
.row {
  display: flex;
  gap: 12px;
  align-items: center;
}
```

---

## 8) Small task (like your exercise)
You have two headings:

```html
<h2 id="winter">Winter</h2>
<h2 id="summer">Summer</h2>
```

Add two rules:

```css
#winter { color: #2563eb; }
#summer { color: #f97316; }
```
