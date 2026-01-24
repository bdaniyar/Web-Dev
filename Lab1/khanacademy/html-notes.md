# HTML Notes (Cheat Sheet)

> **HTML (HyperText Markup Language)** describes the **structure** and **meaning** of content on a web page.

---

## 1) How the web works (very short)
- A **server** stores the website files (HTML/CSS/JS/images).
- A **client** (your browser) requests those files and renders the page.

---

## 2) Basic HTML document template

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>My page</title>
  </head>
  <body>
    <!-- Visible page content goes here -->
  </body>
</html>
```

### Key parts
- `<!doctype html>`: enables modern standards mode.
- `<head>`: metadata, title, links to CSS, etc.
- `<body>`: everything visible on the page.

---

## 3) Common HTML tags

### Headings
- `<h1>`: main page heading (usually one per page)
- `<h2>`–`<h6>`: section headings

### Text
- `<p>` paragraph
- `<br />` line break (use sparingly)
- `<strong>` importance (often bold)
- `<em>` emphasis (often italic)

### Lists
- Unordered list:

```html
<ul>
  <li>Item</li>
  <li>Item</li>
</ul>
```

- Ordered list:

```html
<ol>
  <li>First</li>
  <li>Second</li>
</ol>
```

### Links and images

```html
<a href="https://example.com">Visit example</a>
<img src="cat.jpg" alt="A cat" />
```

### Containers
- `<div>`: block container
- `<span>`: inline container

---

## 4) Attributes: `class` and `id`

```html
<p class="note">This is a note.</p>
<h2 id="winter">Winter</h2>
```

- `class`: reusable label (many elements can share it)
- `id`: usually unique on the page

---

## 5) Mini practice: a “poem” in HTML

```html
<h1>My Short Poem</h1>

<p>
  The sky is bright,<br />
  The air is clear.
</p>

<p>
  A winter night,<br />
  With stars so near.
</p>
```

Tip: use `<p>` for paragraphs. Use `<br />` only when you really need a line break inside a paragraph.

---

## 6) Semantic HTML (recommended)
Use tags that describe meaning:
- `<header>`, `<main>`, `<section>`, `<article>`, `<footer>`
- `<nav>` for navigation

Semantic markup improves accessibility and SEO.

---

## 7) Minimal example page (HTML + CSS link)

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>HTML + CSS Demo</title>
    <link rel="stylesheet" href="styles.css" />
  </head>
  <body>
    <main class="container">
      <h1>Hello, web!</h1>
      <p class="note">This paragraph is styled using a CSS class.</p>
      <h2 id="winter">Winter</h2>
      <h2 id="summer">Summer</h2>
    </main>
  </body>
</html>
```
