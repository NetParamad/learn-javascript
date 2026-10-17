[English](README.md) | [ไทย](README.th.md)

# Learn JavaScript / เรียน JavaScript

A hands-on JavaScript review repo: one numbered folder per topic, each with short runnable examples and its own `README.md`.

## Overview

This repository is a structured path through JavaScript fundamentals and browser APIs. Every topic lives in its own folder (`01-` to `17-`), and each folder contains a small, self-contained example you can run immediately — no build step, no bundler, no dependencies.

The first nine lessons are plain Node.js scripts (`example.js`) focused on language basics. Lessons 10–17 move into the browser (`index.html` + `app.js`), covering the DOM, events, `fetch`, and four small real-world apps that talk to public APIs or persist data in `localStorage`.

The goal of the second half is one thing in particular: **fetch data and render it to the page** — practiced from a minimal example (`13-mini-project-fetch-display`) up to full mini-projects.

## What you'll learn

### Part 1 — Language basics (run with Node)

| # | Folder | Topic | Key concepts |
|---|--------|-------|--------------|
| 01 | `01-variables` | Variables | `let` (mutable) vs `const` (no reassignment), avoid `var` |
| 02 | `02-data-types` | Data types | primitives vs objects, `typeof null === "object"`, `Array.isArray` |
| 03 | `03-operators` | Operators | strict equality `===`, nullish coalescing `??`, optional chaining `?.` |
| 04 | `04-conditions` | Conditions | `if/else`, ternary `? :`, `switch` for fixed values |
| 05 | `05-loops` | Loops | `for...of` over values, `for...in` over keys |
| 06 | `06-functions` | Functions | `function` vs arrow `=>`, default params, arrows have no own `this` |
| 07 | `07-arrays` | Arrays | `push`, `.length`, `.at(-1)`, copying with `[...arr]` |
| 08 | `08-objects` | Objects | property access, destructuring `{ }`, spread `{...}`, `Object.keys/values` |
| 09 | `09-array-methods` | Array methods | `map` (transform), `filter` (select), `find` (first match), `reduce` (aggregate) |

### Part 2 — Browser & APIs (open in a browser)

| # | Folder | Topic | Key concepts |
|---|--------|-------|--------------|
| 10 | `10-dom-basics` | DOM basics | `getElementById`, `textContent`, `createElement` + `appendChild` |
| 11 | `11-events` | Events | `addEventListener("click")`, `input` event, `e.target.value` |
| 12 | `12-fetch-api` | Fetch API | check `res.ok`, `await res.json()`, wrap in `try/catch` (runs with Node 18+) |
| 13 | `13-mini-project-fetch-display` | Fetch + display | `fetch` + `res.ok` + `map` + `createElement` + `addEventListener` |
| 14 | `14-todo-app` | Todo app | CRUD + `localStorage`, `JSON.parse/stringify`, All/Active/Done filters |
| 15 | `15-product-search` | Product search | search + category filter on a real API, `filter` + `includes`, dedupe with `Set` |
| 16 | `16-weather-app` | Weather app | chained `fetch`, geocoding, `encodeURIComponent`, `?.`, `async/await` + `try/catch` |
| 17 | `17-github-profile-viewer` | GitHub profile viewer | chained `fetch`, `res.ok` + 404 handling, `map` before render |

## Tech stack

- **JavaScript (ES2020+)** — no frameworks, no TypeScript.
- **Node.js 18+** — required only for the "run with Node" lessons, because native `fetch` is used in `12-fetch-api`.
- **Browser (vanilla DOM)** — lessons 10–17 use plain HTML (`index.html`) and a script (`app.js`); no libraries, no CDN.
- **Public APIs** — JSONPlaceholder, FakeStore API, Open-Meteo (geocoding + forecast), and the GitHub REST API.
- **`localStorage`** — used by the Todo app for persistence.

There is no `package.json`, no dependencies, and no build step.

## Project structure

```
learn-javascript/
├── 01-variables/                  # example.js + README.md
├── 02-data-types/
├── 03-operators/
├── 04-conditions/
├── 05-loops/
├── 06-functions/
├── 07-arrays/
├── 08-objects/
├── 09-array-methods/
├── 10-dom-basics/                 # index.html + app.js + README.md
├── 11-events/
├── 12-fetch-api/                  # example.js + README.md (Node)
├── 13-mini-project-fetch-display/ # index.html + app.js + README.md
├── 14-todo-app/
├── 15-product-search/
├── 16-weather-app/
├── 17-github-profile-viewer/
├── .gitattributes
├── .gitignore
└── README.md
```

Convention used throughout the repo:

- **`example.js`** → run with Node (`node example.js`).
- **`app.js` + `index.html`** → open `index.html` in a browser.

## Getting started

### Prerequisites

- **Node.js 18 or newer** (for the `example.js` lessons; `12-fetch-api` needs native `fetch`).
- A **modern browser** (for lessons 10, 11, and 13–17).
- An **internet connection** for the API-based lessons (13, 15, 16, 17).

### Install

There is nothing to install — no dependencies and no build step. Just clone the repo:

```bash
git clone https://github.com/NetParamad/learn-javascript.git
cd learn-javascript
```

## Usage

### Run a language-basics lesson (Node)

```bash
cd 01-variables
node example.js
```

This applies to folders `01` through `09`, and also `12-fetch-api`.

### Run a browser lesson

Open the folder's `index.html` in a browser (simply double-click the file), or serve it locally if you prefer:

```bash
cd 14-todo-app
open index.html        # macOS; or double-click the file
```

This applies to `10-dom-basics`, `11-events`, and `13` through `17`.

For the API-based apps, just open the page and use the UI:

- `13-mini-project-fetch-display` — click **Reload** to fetch and list posts.
- `14-todo-app` — add, toggle, delete, and filter todos; data persists in `localStorage`.
- `15-product-search` — type in the search box and pick a category to filter products.
- `16-weather-app` — type a city name to see current weather.
- `17-github-profile-viewer` — type a GitHub username to see followers, repo count, and recent repos.

## Notes

- Each lesson folder has its own `README.md` with a short bilingual note and the run command.
- `15-product-search` uses the FakeStore API, which is flaky — if loading fails, retry later (the app shows errors via a status line).
- `16-weather-app` uses Open-Meteo and needs no API key.
- The API lessons are subject to the public APIs' rate limits and availability.
- No secrets or environment variables are used in this project.
