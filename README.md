[EN](README.md) | [TH](README.th.md)

<h1 align="center">Learn JavaScript</h1>

<p align="center">
  A hands-on JavaScript review repo: 17 numbered lessons with runnable examples and no build step.
</p>

<p align="center">
  <a href="#overview">Overview</a> ·
  <a href="#features">Features</a> ·
  <a href="#tech-stack">Tech stack</a> ·
  <a href="#project-structure">Structure</a> ·
  <a href="#lessons">Lessons</a> ·
  <a href="#getting-started">Getting started</a> ·
  <a href="#environment-variables">Environment</a> ·
  <a href="#usage">Usage</a> ·
  <a href="#notes">Notes</a>
</p>

---

## Overview

This repository is a structured path through JavaScript fundamentals and browser APIs. Every topic lives in its own folder (`01-` to `17-`), and each folder contains a small, self-contained example you can run immediately — no build step, no bundler, no dependencies.

The first nine lessons are plain Node.js scripts (`example.js`) focused on language basics. Lessons 10, 11, and 13–17 move into the browser (`index.html` + `app.js`), covering the DOM, events, `fetch`, and four small apps. Lesson `12-fetch-api` is still a Node script, because it teaches `fetch` outside the DOM.

The goal of the second half is one thing in particular: **fetch data and render it to the page** — practised from a minimal example (`13-mini-project-fetch-display`) up to full mini-projects.

## Features

- **17 numbered lessons** — one folder per topic, from variables and types to the GitHub API.
- **Two ways to run** — Node scripts (`example.js`) for language basics; browser pages (`index.html` + `app.js`) for DOM and API work.
- **Fetch-and-render focus** — lesson 13 is the minimal example; lessons 14–17 are complete mini apps built on the same pattern.
- **Four mini apps** — a todo list with `localStorage`, a product search, a weather lookup, and a GitHub profile viewer.
- **No dependencies at all** — no `package.json`, framework, library, CDN, or bundler; just run the file.
- **Bilingual lesson notes** — every folder has its own `README.md` with a short Thai/English note and the command to run it.
- **Public, keyless APIs** — JSONPlaceholder, FakeStore API, Open-Meteo, and the GitHub REST API.
- **Visible error handling** — each API example checks `res.ok` and reports failures in a status line.

## Tech stack

| Area | Choice |
| --- | --- |
| Language | JavaScript (ES2020+), no frameworks and no TypeScript |
| Node runtime | Node.js 18+ — for the `example.js` lessons; `12-fetch-api` needs native `fetch` |
| Browser | Vanilla DOM — plain `index.html` + `app.js`, no libraries or CDN |
| Data sources | JSONPlaceholder, FakeStore API, Open-Meteo (geocoding + forecast), GitHub REST API |
| Persistence | `localStorage` — the Todo app stores its list under the `todos` key |
| Tooling | None — no package manager, dependencies, tests, or build step |

## Project structure

```
learn-javascript/
├── 01-variables/                   # example.js + README.md
├── 02-data-types/
├── 03-operators/
├── 04-conditions/
├── 05-loops/
├── 06-functions/
├── 07-arrays/
├── 08-objects/
├── 09-array-methods/
├── 10-dom-basics/                  # index.html + app.js + README.md
├── 11-events/
├── 12-fetch-api/                   # example.js + README.md (Node)
├── 13-mini-project-fetch-display/  # index.html + app.js + README.md
├── 14-todo-app/
├── 15-product-search/
├── 16-weather-app/
├── 17-github-profile-viewer/
├── .gitattributes
├── .gitignore
├── README.md                       # English documentation (this file)
└── README.th.md                    # Thai documentation
```

Convention used throughout the repo:

- **`example.js`** → run with Node (`node example.js`).
- **`app.js` + `index.html`** → open `index.html` in a browser.

## Lessons

### Part 1 — Language basics (run with Node)

| # | Folder | Topic | Key concepts |
|---|--------|-------|--------------|
| 01 | `01-variables` | Variables | `let` (mutable) vs `const` (no reassignment), avoid `var` |
| 02 | `02-data-types` | Data types | primitives vs objects, `typeof null === "object"`, `Array.isArray` |
| 03 | `03-operators` | Operators | strict equality `===`, nullish coalescing `??`, optional chaining `?.` |
| 04 | `04-conditions` | Conditions | `if/else`, ternary `? :`, `switch` for fixed values |
| 05 | `05-loops` | Loops | `for...of` over values, `for...in` over keys, `while` |
| 06 | `06-functions` | Functions | `function` vs arrow `=>`, default params, arrows have no own `this` |
| 07 | `07-arrays` | Arrays | `push`, `.length`, `.at(-1)`, copying with `[...arr]` |
| 08 | `08-objects` | Objects | property access, destructuring `{ }`, spread `{...}`, `Object.keys/values` |
| 09 | `09-array-methods` | Array methods | `map` (transform), `filter` (select), `find` (first match), `reduce` (aggregate) |

### Part 2 — Browser & APIs

| # | Folder | Topic | Key concepts |
|---|--------|-------|--------------|
| 10 | `10-dom-basics` | DOM basics | `getElementById`, `textContent`, `createElement` + `appendChild` |
| 11 | `11-events` | Events | `addEventListener("click")`, `input` event, `e.target.value` |
| 12 | `12-fetch-api` | Fetch API | check `res.ok`, `await res.json()`, wrap in `try/catch` (Node 18+) |
| 13 | `13-mini-project-fetch-display` | Fetch + display | `fetch` + `res.ok` + `map` + `createElement` (loads 5 posts) |
| 14 | `14-todo-app` | Todo app | CRUD + `localStorage`, `JSON.parse/stringify`, All/Active/Done filters |
| 15 | `15-product-search` | Product search | FakeStore API, search + category filter, `filter` + `includes`, `Set` |
| 16 | `16-weather-app` | Weather app | chained `fetch`, Open-Meteo geocoding, `encodeURIComponent`, `?.` |
| 17 | `17-github-profile-viewer` | GitHub profile viewer | chained `fetch`, `res.ok` + 404 handling, 5 latest repos |

## Getting started

Requirements:

- **Node.js 18 or newer** — for the `example.js` lessons; `12-fetch-api` uses native `fetch`.
- A **modern browser** — for lessons 10, 11, and 13–17.
- An **internet connection** — for the API-based lessons (12, 13, 15, 16, 17).

There is nothing to install — no dependencies and no build step. Just clone the repo:

```bash
git clone https://github.com/NetParamad/learn-javascript.git
cd learn-javascript
```

## Environment variables

None. This project uses no `.env` file, API keys, secrets, or environment variables — every API it calls is public and keyless.

## Usage

### Run a language-basics lesson (Node)

```bash
cd 01-variables
node example.js
```

This applies to folders `01` through `09`, and also `12-fetch-api`.

### Run a browser lesson

Open the folder's `index.html` in a browser (simply double-click the file):

```bash
cd 14-todo-app
open index.html        # macOS; or double-click the file
```

This applies to `10-dom-basics`, `11-events`, and `13` through `17`. For the API apps, just open the page and use the UI:

- `13-mini-project-fetch-display` — loads 5 posts on open; click **Reload** to fetch them again.
- `14-todo-app` — add with the input or Enter, toggle done, delete with **x**, and filter All/Active/Done. Data persists in `localStorage`.
- `15-product-search` — type in the search box and pick a category to filter products.
- `16-weather-app` — type a city (defaults to Bangkok) and press **Check** to see current temperature and weather code.
- `17-github-profile-viewer` — type a GitHub username (defaults to `NetParamad`) to see followers, public repo count, and the 5 most recently updated repos.

## Notes

- Each lesson folder has its own `README.md` with a short bilingual note and the run command.
- `15-product-search` uses the FakeStore API, which is flaky — if loading fails, retry later (the app shows errors in its status line).
- `16-weather-app` uses Open-Meteo and needs no API key.
- The API lessons are subject to the public APIs' rate limits and availability.
- **License** — MIT (see [LICENSE](LICENSE)).
