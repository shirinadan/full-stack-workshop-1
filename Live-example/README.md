# WebDev2026 – HTML & CSS Live Coding Demo

This repository contains the **HTML and CSS files we live‑coded in class** to practice basic tags, semantic layout, and external stylesheets using VS Code’s **Go Live** feature.[web:29]

---

## Project Structure

- `index.html` – Main HTML file with:
  - Heading examples (`<h1>`–`<h6>`)
  - Paragraphs, line breaks, and horizontal rules
  - Links and an image
  - Text formatting tags (`<b>, <i>, <strong>, <em>`)
  - Unordered, ordered, and nested lists
  - An `address` block
  - Semantic layout: `<header>`, `<nav>`, `<main>`, `<section>`, `<aside>`, `<footer>`
  - A simple contact `<form>` with inputs, select, textarea, and submit button[web:29]
- `example.css` – External stylesheet linked in `<head>` of `index.html`:
  - Base page styles (fonts, colors, background)
  - Heading and paragraph styling
  - List styling
  - Card‑style sections and aside
  - Navigation bar styling
  - Form and button styling
  - Responsive tweaks for tablet and mobile screens[web:29]

Make sure the `>` line in `index.html` matches the CSS filename in your repo.

---

## Prerequisites

- [Visual Studio Code](https://code.visualstudio.com/) installed[web:21]
- **Live Server** extension (by Ritwick Dey) installed in VS Code  
  - Install from the Extensions panel by searching for “Live Server”.[web:25][web:27]

---

## How to Run with “Go Live”

1. **Open the project folder** in VS Code  
   - `File → Open Folder…` and select the folder containing `index.html` and `example.css`.[web:25]
2. **Open `index.html`** in the editor.
3. Look at the **bottom‑right corner** of VS Code and click the **“Go Live”** button (from Live Server).[web:25][web:27]
4. Your default browser will open at `http://127.0.0.1:5500` (or similar) showing the page.
5. Make changes in `index.html` or `example.css` and **save** – the browser will auto‑reload with your changes.[web:27]

If you don’t see “Go Live,” you can also **right‑click `index.html` → “Open with Live Server”**.[web:25]

---

## What You Can Experiment With

- Change heading text and see how each level (`h1`–`h6`) is styled differently.
- Modify colors, padding, or fonts in `example.css` and watch styles update live.
- Add new list items, links, or sections in the HTML.
- Adjust the form (add inputs, change placeholders) and restyle them in CSS.

This project is meant as a **practice sandbox** for core HTML and CSS concepts plus using VS Code’s Live Server / “Go Live” workflow.[web:21][web:27]
 