# Student Dashboard Activity using React and Tailwind CSS

## What You're Building

Today you are building the complete frontend of your project using React and Tailwind. Next week, we will provide the login page and class sign up page, but your job is just to create the **dashboard**.

The dashboard has a sidebar for navigation, a class info card, a form to upload notes, and a list of recent notes. The app is broken into components and each component lives in its own file and is responsible for one piece of the UI. Your job is to build each one out and wire them all together in `App.jsx`.

This activity is designed to help you practice:
- Creating and using React components
- Passing data between components using **props**
- Structuring a multi-file React project
- Styling with **Tailwind CSS** utility classes

---

## Step 1 — Fork the Repo

Forking creates your own personal copy of the project on GitHub so you can make changes without affecting the original.

1. Click the **Fork** button in the top-right corner
2. GitHub will create a copy under your own account

---

## Step 2 — Clone Your Fork

Cloning downloads your forked repo to your computer so you can edit it in VS Code.

1. On your forked repo page, click the green **Code** button
2. Copy the URL shown (it should have your GitHub username in it)
3. Open a terminal and run:

```bash
git clone YOUR_URL_HERE
```

4. Navigate into the project folder:

```bash
cd inoted-dashboard
```

---

## Step 3 — Install Dependencies

Before you can run the project, you need to install the packages it depends on. This only needs to be done once.

```bash
npm install
```

---

## Step 4 — Run the Project

```bash
npm run dev
```

Then open your browser and go to **http://localhost:5173**

You'll see a mostly blank page at first which is expected! As you build out your components the page will start coming together.

> Keep this terminal running while you work. The page will auto-refresh every time you save a file.

---

## Step 5 — Understand the File Structure

```
src/
├── App.jsx                  ← root component, ties everything together
└── components/
    ├── Sidebar.jsx          ← left navigation panel
    ├── Topbar.jsx           ← header bar at the top
    ├── ClassCard.jsx        ← card showing class info and stats
    ├── UploadForm.jsx       ← form for uploading a note
    └── NoteItem.jsx         ← single row in the recent notes list
```

Each file has comments explaining what to build inside it. Read them carefully before writing any code.

---

## Step 6 — Build Order (Recommended)

Work through the files in this order: it goes from simplest to most complex:

1. **`Topbar.jsx`** — short and straightforward, good warm-up
2. **`ClassCard.jsx`** — practice laying out a card with multiple sections
3. **`Sidebar.jsx`** — a bit longer, practice nav links and flexbox layout
4. **`UploadForm.jsx`** — practice labels, inputs, and the file upload trick
5. **`NoteItem.jsx`** — introduces **props**, the most important concept here
6. **`App.jsx`** — import everything, create your data array, loop with `.map()`

---

## React Tips & Hints

**Components are just functions that return JSX**
```jsx
export default function MyComponent() {
  return <div>Hello!</div>;
}
```

**Use `className` instead of `class`**
```jsx
// HTML way
<div class="flex">

// React/JSX way
<div className="flex">
```

**Import a component before you use it**
```jsx
import Sidebar from "./components/Sidebar";

// now you can use it like a tag
<Sidebar />
```

**Props let you pass data into a component**
```jsx
// parent passes data in
<NoteItem title="Week 1 Notes" date="Mar 10, 2025" />

// child receives and uses it
function NoteItem({ title, date }) {
  return <span>{title}</span>;
}
```

**Use `.map()` to render a list of components**
```jsx
const NOTES = [
  { id: 1, title: "Week 1", date: "Mar 10" },
  { id: 2, title: "Week 2", date: "Mar 14" },
];

{NOTES.map((note) => (
  <NoteItem key={note.id} title={note.title} date={note.date} />
))}
```
> 💡 Always add a `key` prop when using `.map()` — use a unique value like an `id`

**`htmlFor` instead of `for` on labels**
```jsx
// HTML way
<label for="my-input">Title</label>

// React/JSX way
<label htmlFor="my-input">Title</label>
<input id="my-input" type="text" />
```

---

## Tailwind Tips & Hints

Tailwind works by adding utility classes directly to your elements so no separate CSS file needed.

| What you want | Tailwind class |
|---|---|
| `display: flex` | `flex` |
| `flex-direction: column` | `flex-col` |
| `align-items: center` | `items-center` |
| `justify-content: space-between` | `justify-between` |
| `gap: 12px` | `gap-3` |
| `padding: 16px 24px` | `py-4 px-6` |
| `margin-top: auto` | `mt-auto` |
| `border-radius: 16px` | `rounded-2xl` |
| `font-weight: 500` | `font-medium` |
| `display: none` | `hidden` |
| `width: 100%` | `w-full` |
| `cursor: pointer` | `cursor-pointer` |
| hover effect | `hover:bg-blue-100` |
| custom color | `bg-[#0f1f3d]` |
| custom size | `w-[220px]` |

> Any time you want a custom value (a specific hex color or pixel size) wrap it in square brackets: `text-[0.85rem]` or `bg-[#1a3358]`

---

## Submitting Your Work

Once you've finished building:

1. Save all your files
2. In your terminal, push your changes to GitHub:

```bash
git add .
git commit -m "completed iNoted dashboard"
git push
```
