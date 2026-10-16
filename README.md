# gslindenmeyer.github.io

Personal website of Guilherme Lindenmeyer, built with Jekyll and served by GitHub Pages from `master`.

## Where things live

- `index.md`: the bio on the home page
- `_data/research.yml`: papers (shown on the home page and on `/research/`)
- `teaching.md`: teaching materials; PDFs go in `files/teaching/`
- `files/CV.pdf`: the CV linked from the menu
- `_config.yml`: name, email, links under the bio, and the menu
- `_layouts/`, `_includes/`, `assets/css/site.css`, `assets/js/site.js`: the design

## Preview locally

```sh
docker compose up --build
```

Then open http://localhost:4000.
