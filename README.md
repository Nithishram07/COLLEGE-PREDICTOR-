# TNEA College Predictor

A lightweight, browser-based tool that helps engineering aspirants estimate which colleges they may qualify for during TNEA counselling, based on their cutoff mark, category, and branch preference.

## Live Demo
_Add your GitHub Pages / hosting link here once deployed._

## How It Works
This is a **fully client-side application** — no server, database, or backend required. All college and cutoff data is embedded directly in the page as JSON, and predictions are computed instantly in the browser using JavaScript.

1. Student enters their cutoff mark, category, and preferred branch/location.
2. The app matches this input against the embedded historical cutoff dataset.
3. A ranked list of colleges the student is likely to qualify for is displayed instantly — no page reload, no server round-trip.

> **Note:** This project was originally prototyped as a Flask (Python) web app with a MySQL backend. It was later rebuilt as a self-contained static HTML file so it can run entirely in the browser with zero setup or hosting cost — ideal for sharing as a portfolio piece or a quick local tool.

## Tech Stack
- HTML, CSS, JavaScript
- Embedded JSON dataset (no external database)

## Getting Started
No installation needed.
1. Clone or download this repository.
2. Open `index.html` directly in any modern web browser.
3. Enter your details and view your predicted college list.

## Project Files
- `index.html` — the complete application (UI + logic + embedded data)
- `docs/College_Predictor_Diagrams.docx` — ER diagram covering the original design (Student, ExamScore, Prediction, College, Branch, CutoffHistory, SavedList)

## Design Notes
An ER diagram was created during the design phase to model the full system (including the originally planned login/database layer). The shipped version simplifies this into a single static dataset, but the diagram is kept in `/docs` for reference and to document the original scope.

## Future Enhancements
- Expand the embedded dataset to cover more colleges/branches
- Add sorting/filtering of results (by fee, location, branch cutoff trend)
- Optional: reintroduce a backend (Flask/Django + MySQL) if user accounts or saved lists are needed

## Disclaimer
Predictions are based on historical cutoff data and are indicative only. Actual counselling outcomes may vary by year and seat availability.
