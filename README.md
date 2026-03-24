# AI for Public Policy Directory

A community-curated, searchable directory of AI tools, dashboards, and projects built for public policy.

**Website:** [pranaykotas.github.io/IndianPublicPolicy](https://pranaykotas.github.io/IndianPublicPolicy/)

## Why this exists

Many individuals and organisations are building AI-powered tools for public policy — parliamentary trackers, budget visualisers, regulation monitors, citizen tools, and more. But there is no single place to discover all of them.

This directory aims to be that place: a simple, searchable catalog where anyone working in public policy can find tools that already exist, learn from them, or build on them.

## How it works

- All projects are listed in a single YAML file ([`_data/projects.yml`](_data/projects.yml))
- The website is built with [Quarto](https://quarto.org) and deployed to GitHub Pages
- Search and tag-based filtering work entirely in the browser — no backend, no database
- Anyone can add a project by editing the YAML file and submitting a pull request

## Add your project

If you've built or know of an AI tool for public policy, we'd love to include it.

1. Fork this repo
2. Add your project to `_data/projects.yml`:
   ```yaml
   - name: "Your Project Name"
     category: "Analytical Tools"
     description: "What it does and who it helps"
     url: "https://github.com/your-org/your-project"
     tags: ["tag1", "tag2", "tag3"]
   ```
3. Submit a pull request

See [CONTRIBUTING.md](CONTRIBUTING.md) for detailed guidelines on descriptions, tags, and formatting.

## Run locally

You need [Quarto](https://quarto.org/docs/get-started/) and [R](https://cran.r-project.org/) installed.

```bash
# Install the yaml R package (one time)
Rscript -e 'install.packages("yaml")'

# Preview the site
quarto preview
```

## Project structure

```
_data/projects.yml     # All project entries live here
index.qmd              # Homepage with search and card grid
about.qmd              # About page
search.js              # Client-side search and filtering
styles.css             # Card grid and UI styling
CONTRIBUTING.md        # Guide for contributors
.github/workflows/     # Auto-deploy to GitHub Pages
```

## Maintained by

[Takshashila Institution](https://takshashila.org.in)

## License

This directory is open source. The listing of a project here does not imply endorsement.
