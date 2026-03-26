# Workshop 4 — Team Dashboard Activity

> This is a **code-along activity**. You should be following along in class with us!!!

---

## 📁 What You're Working With

| File | What it is |
|------|-----------|
| `index.html` | The page structure: don't edit this |
| `styles.css` | The styling: don't edit this |
| `script.js` | ✅ **This is where you write all your code** |

All the buttons and elements are already on the page. Your job is to make them do things using JavaScript.

---

## How the Activity Works

1. Pick a task card from the bucket
2. Find the matching number below to get your hint (if needed) (you can also ask an instructor)
3. Write your code in `script.js` below the starter examples
4. Test it in the browser
5. Follow the PR workflow to submit

---

## 💡 Task Hints

### DOM Tasks

<details>
<summary><strong>#1 — Change the title text when Change Title is clicked</strong></summary>

You need an event listener on `changeTitleBtn`. Inside the callback, use `.textContent` to overwrite what `title` says.

</details>

<details>
<summary><strong>#2 — Change the subtitle text when Change Title is clicked</strong></summary>

Same idea as #1 but target the `subtitle` variable instead. `.textContent` works on any element, not just headings.

</details>

<details>
<summary><strong>#3 — Make the Greet User button purple on page load</strong></summary>

No event listener needed for this one — code that runs outside a listener executes immediately when the page loads. Use `.style.background` on `greetBtn`.

</details>

<details>
<summary><strong>#4 — Show character count when Count Characters is clicked</strong></summary>

Add a listener to `countBtn`. The number of characters in any string is `string.length`. The value typed in an input is `nameInput.value`.

</details>

<details>
<summary><strong>#5 — Display the input in ALL CAPS when Uppercase is clicked</strong></summary>

Add a listener to `uppercaseBtn`. JavaScript strings have a built-in method called `.toUpperCase()` — call it on `nameInput.value` and put the result in `output.textContent`.

</details>

---

### Event Tasks

<details>
<summary><strong>#6 — Greet button turns purple on hover, back to blue on mouse leave</strong></summary>

You need two event listeners on `greetBtn` — one for `"mouseover"` and one for `"mouseout"`. Each one sets `greetBtn.style.background` to a different color.

</details>

<details>
<summary><strong>#7 — Double-click the title to change it</strong></summary>

Attach a `"dblclick"` event listener directly to the `title` element — any element can have a listener, not just buttons. Set `.textContent` to `Web Dev Dashboard`.

</details>

<details>
<summary><strong>#8 — Live character count updates as you type</strong></summary>

Instead of a `"click"` event, listen for the `"input"` event on `nameInput`. This fires on every single keystroke. Show `nameInput.value.length` in `output.textContent`.

</details>

<details>
<summary><strong>#9 — Update Status button only works once</strong></summary>

Add a listener to `statusBtn`. After updating the status text, set `statusBtn.disabled = true`. A disabled button stops firing click events.

</details>

<details>
<summary><strong>#10 — Count how many times Update Status is clicked</strong></summary>

Declare a variable `let count = 0` outside the listener. Inside the listener, do `count = count + 1` each time it fires, then update `clickCounter.textContent` to show the new count.

</details>

---

### Function Tasks

<details>
<summary><strong>#11 — Arrow function <code>add</code>, wired to the Add button</strong></summary>

Write `const add = (a, b) => a + b;` near the top of your code. In the `addBtn` listener, call `add(Number(num1.value), Number(num2.value))` and show the result in `calcResult.textContent`. Wrap inputs in `Number()` so they're treated as numbers, not text.

</details>

<details>
<summary><strong>#12 — Arrow function <code>subtract</code>, wired to the Subtract button</strong></summary>

Same pattern as #11. Write `const subtract = (a, b) => a - b;` and wire it to `subtractBtn`.

</details>

<details>
<summary><strong>#13 — Arrow function <code>multiply</code>, wired to the Multiply button</strong></summary>

Same pattern as #11 and #12. Write `const multiply = (a, b) => a * b;` and wire it to `multiplyBtn`.

</details>

<details>
<summary><strong>#14 — Arrow function <code>reverseText</code>, wired to the Reverse Text button</strong></summary>

Write `const reverseText = (text) => text.split("").reverse().join("");` — this splits the string into individual characters, reverses the array, then joins it back into a string. Wire it to `reverseBtn` using `nameInput.value`.

</details>

<details>
<summary><strong>#15 — Arrow function <code>greetUser</code>, wired to the Greet User button</strong></summary>

Write `const greetUser = (name) => \`Hey, ${name}! Welcome to the dashboard.\`;` using a template literal. Wire it to `greetBtn` and pass in `nameInput.value.trim()`.

</details>

---

### UI Tasks

<details>
<summary><strong>#16 — Toggle dark/light mode</strong></summary>

Add a listener to `toggleThemeBtn`. Use `document.body.classList.toggle("dark")` — this adds the class if it's missing and removes it if it's there. The dark mode CSS is already written in `styles.css`.

</details>

<details>
<summary><strong>#17 — Color swatches change the title color</strong></summary>

Add a `"click"` listener to each swatch button (`swatchRed`, `swatchBlue`, etc.). Inside each one, set `title.style.color` to the matching color value like `"crimson"` or `"#7c3aed"`.

</details>

<details>
<summary><strong>#18 — Clear Input button clears the field and resets output</strong></summary>

Add a listener to `clearInputBtn`. To clear a text input you set `nameInput.value = ""` — not `.textContent`. Then reset `output.textContent` back to its default text.

</details>

<details>
<summary><strong>#19 — Reset Status button sets the status and disables the button</strong></summary>

Add a listener to `resetBtn`. Set `statusText.textContent` back to `"Status: Reset!!"` and set `statusBtn.disabled = true` to make it unclickable.

</details>

<details>
<summary><strong>#20 — Greet button shows an error in red if input is empty</strong></summary>

Inside the `greetBtn` listener, use an `if` statement to check `!nameInput.value.trim()`. If it's empty, set `output.textContent` to the error message and `output.style.color = "crimson"`. In the `else` block, show the normal greeting and reset `output.style.color = ""`.

</details>

---
# Pull Request Template

## What did you change?
Describe what you added or modified. Be specific and mention the button, function, or element you worked on.

Example:
> I added an event listener to the `statusBtn` that disables the button after it is clicked once.

---

## Task number
<!-- Which card did you pick from the bucket? -->

Task #

---

## How to test it
Tell the reviewer exactly what to do to see your change working in the browser.

Example:
> 1. Open `index.html` in the browser
> 2. Go to the Status Panel
> 3. Click the Update Status button
> 4. The button should grey out and stop responding to clicks

---

## Screenshot (optional but encouraged)

---

## Checklist
- [ ] My code is in `script.js` below the starter examples
- [ ] I tested it in the browser and it works
- [ ] I created a branch and I did **not** push directly to `main`
- [ ] My commit message describes what I did
- [ ] My PR base is set to **my fork**, not the original repo

---

## Submitting Your Work

Once your task is working in the browser, follow the PR workflow:
```bash
git add .
git commit -m "Task #X — description of what you did"
git push origin your-branch-name
```

Then open a Pull Request on GitHub.
> ⚠️ Make sure the **base repository is set to your fork**, not the original repo.

Your reviewer will leave a comment. Respond to it and make at least one change before merging.
