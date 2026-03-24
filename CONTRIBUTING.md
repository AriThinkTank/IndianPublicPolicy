# Contributing to the AI for Public Policy Directory

We want this directory to be comprehensive and useful. If you've built, discovered, or use an AI tool for public policy — please add it here.

## What belongs in this directory?

Any tool, dashboard, visualisation, dataset, or project that uses AI/ML techniques to support public policy work. This includes:

- Parliamentary or legislative trackers
- Budget analysis and visualisation tools
- Regulation and compliance monitors
- Citizen-facing tools (RTI helpers, grievance assistants, etc.)
- Policy brief generators or research aids
- Government data dashboards with AI-powered insights
- NLP tools for analysing government documents
- Open datasets curated for policy research

The project can be open-source or not, finished or in-progress, India-focused or global. If it helps someone working in public policy, it belongs here.

## How to add a project

### Step 1: Fork this repository

Click the **Fork** button at the top right of the [GitHub repo page](https://github.com/pranaykotas/IndianPublicPolicy).

### Step 2: Add your project entry

Open `_data/projects.yml` and add your project **at the end** of the file. Use this exact format:

```yaml
- name: "Your Project Name"
  category: "Analytical Tools"
  description: "A clear, one-to-two sentence description of what the tool does and who it helps"
  url: "https://github.com/your-org/your-project"
  tags: ["tag1", "tag2", "tag3"]
```

### Step 3: Choose a category

Every project must have exactly one category. Pick the one that best fits:

| Category | What belongs here | Examples |
|----------|-------------------|----------|
| **Visualisations** | Trackers and live dashboards that display data in real time or near-real time | Live parliamentary trackers, budget dashboards, election result maps |
| **Analytical Tools** | Tools that others can deploy and use for their own analysis | ParliamentWatch, regulation classifiers, text analysis pipelines |
| **AI Reports** | Data presented in better, more accessible ways — but not updated live | AI-generated policy briefs, one-time data summaries, curated report collections |
| **Admin Tools** | Tools useful for running think tanks and research organisations | Grant management tools, publication workflows, event dashboards |
| **Other** | Projects that don't fit neatly into the above | Datasets, experimental prototypes, multi-purpose platforms |

If you're unsure, pick the closest fit — we can always recategorise during review.

### Step 4: Follow these field guidelines

| Field | Rules |
|-------|-------|
| `name` | The official project or tool name. No need to add "AI" or "Tool" as a suffix. |
| `category` | One of: `Visualisations`, `Analytical Tools`, `AI Reports`, `Admin Tools`, `Other`. Case-sensitive. |
| `description` | One or two sentences, max 200 characters. Focus on **what it does and for whom**, not the tech stack. Good: *"Tracks new regulations across Indian ministries and classifies them by sector."* Bad: *"A Python-based NLP pipeline using BERT for text classification."* |
| `url` | Link to the project's GitHub repo, documentation site, or homepage. Must be a working link. |
| `tags` | 2–5 lowercase tags. Use hyphens for multi-word tags. Reuse existing tags (see below) before inventing new ones. |

### Step 5: Choose your tags

Browse the existing tags on the [directory homepage](https://pranaykotas.github.io/IndianPublicPolicy/) to see what's already in use. Here are the common categories:

**By domain:**
`parliament` `budget` `regulation` `public-finance` `education` `health` `climate` `defence` `trade` `urban` `agriculture` `judiciary`

**By function:**
`tracking` `visualisation` `analytics` `dashboard` `writing` `citizen-tools` `summarisation` `search` `alerts`

**By technology:**
`nlp` `llm` `classification` `computer-vision` `open-data` `geospatial`

**By region:**
`india` `usa` `uk` `eu` `africa` `southeast-asia` `global`

If none of the existing tags fit, create a new one — but keep it short and descriptive.

### Step 6: Validate your YAML

Before submitting, make sure your YAML is valid:

- Strings with special characters (colons, quotes) must be wrapped in double quotes
- Tags must be a YAML list: `["tag1", "tag2"]`
- Indentation must use spaces, not tabs
- Each entry starts with `- name:` (note the leading hyphen and space)

You can paste your YAML into [yamllint.com](https://www.yamllint.com/) to check for errors.

### Step 7: Submit a pull request

1. Commit your change with a message like: `Add [Project Name] to directory`
2. Open a pull request against the `main` branch
3. In the PR description, briefly mention what the project does

We'll review and merge it promptly.

## Updating an existing entry

If a project's URL, description, or tags have changed, you're welcome to submit a PR updating them. Just edit the relevant entry in `_data/projects.yml`.

## Removing a project

If a project has been taken down, archived, or is no longer relevant, open an issue or PR to remove it. Please explain why.

## Code of conduct

- Only add projects that genuinely exist and work (or are clearly marked as work-in-progress)
- Do not add spam, promotional links, or unrelated tools
- Keep descriptions accurate and neutral

## Questions?

Open an [issue](https://github.com/pranaykotas/IndianPublicPolicy/issues) if you have questions, suggestions, or want to discuss what belongs in this directory.
