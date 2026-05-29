# AI Dev Kit — documentation site

This directory (`portal/`) is the **[Docusaurus](https://docusaurus.io/)** site for **AI Dev Kit**. The monorepo overview, installation, and workflows live in the repository root [README.md](../README.md).

## Publish scope (FR-066)

**Source of truth** for site content is the repository **[`docs/`](../docs/)** tree, aligned with [Ultimate Canonical KB Structure](../docs/architecture/standards-and-adrs/ultimate-canonical-kb-structure.md) (**pillars**: architecture, changelog-and-release-notes, project-management, guides, developer paths under `docs/`, knowledge, etc.).

### Included

- All markdown under `docs/` **except** paths listed under **Excluded** below.
- Entry page: [`docs/documentation/docusaurus-portal-index.md`](../docs/documentation/docusaurus-portal-index.md) (sidebar position `0`).

### Excluded (Docusaurus `exclude` globs)

- **`changelog-and-release-notes/changelog-archive/**`** — mass per-release changelog files (1000+); not intended for v1 static publish; summaries remain under `changelog-and-release-notes/` where present.
- **`knowledge/changelog-and-release-notes/changelog-archive/**`** — duplicate archive mirror under `knowledge/`.

### Broken links and anchors (FR-067 / E5:S09:T08 / E5:S09:T10)

- **`docusaurus.config.js`:** `onBrokenLinks: 'throw'` and `onBrokenMarkdownLinks: 'throw'` — a **broken in-scope link fails `npm run build`** (strict mode; **FR-067 FU-1** complete).
- **`onBrokenAnchors: 'throw'`** (**E5:S09:T10** / **FR-067 FU-3**): a **broken in-page or cross-doc `#fragment`** also **fails `npm run build`** (same strict posture as links).
- **Corpus hygiene:** Markdown path and heading/fragment discipline stays aligned with [FR-058](../docs/project-management/kanban/fr-br/FR-058-markdown-maintenance-workflow.md); out-of-tree targets should use repository or GitHub URLs, not bogus relative paths. Prefer explicit `{#stable-id}` on headings when deep links must survive title edits.
- **Detail / history:** [Docusaurus corpus triage (FR-067)](../docs/maintenance/docusaurus-corpus-triage-fr-067.md); tasks **[E5:S09:T08](../docs/project-management/kanban/epics/Epic-5/Story-009-docusaurus-documentation-portal/T08-docusaurus-strict-broken-links-post-fr067.md)** (links), **[E5:S09:T10](../docs/project-management/kanban/epics/Epic-5/Story-009-docusaurus-documentation-portal/T10-docusaurus-strict-broken-anchors-post-t08.md)** (anchors).

### BR-068: Monorepo links outside the docs plugin (E5:S09:T11)

The docs plugin only ingests **[`docs/`](../docs/)**. Markdown links that use **relative paths** to leave `docs/`—for example `../../../INSTALL_IN_YOUR_PROJECT.md` or `../../../../packages/frameworks/...`—**fail MDX resolution** and break **`npm run build`** because Docusaurus cannot treat those targets as in-corpus doc IDs (**[BR-068](../docs/project-management/kanban/fr-br/BR-068-docusaurus-monorepo-markdown-links-break-strict-production-build.md)**). GitHub’s web UI resolves the same prose differently; the **published portal** does not.

**Do this when linking from `docs/**/*.md` to the repo root, `packages/`, or any path outside `docs/`:**

1. **Prefer canonical GitHub links** (this repo, default branch **`main`**):

   ```markdown
   [Install in your project](https://github.com/earlution/ai-dev-kit/blob/main/INSTALL_IN_YOUR_PROJECT.md)
   ```

   For framework paths, include the full path from the repository root after `/blob/main/` (e.g. `packages/frameworks/kanban/...`). If a directory name contains **spaces**, **percent-encode** them in the URL (e.g. `workflow%20mgt`).

2. **Optional:** Add a **short page under `docs/`** (stub) if the portal must show an in-sidebar summary; link from that stub to the GitHub source. Avoid maintaining two long copies of the same document.

3. **Do not** rely on **`warn`** for `onBrokenMarkdownLinks` to “paper over” bad relatives—the site ships with **`throw`** (**FR-067** / **E5:S09:T08**).

**Planning:** [IPW-E5S09T11](../docs/implementation-cycles/IPW-E5S09T11-docusaurus-monorepo-markdown-links-br068.md). **Host task:** [E5:S09:T11](../docs/project-management/kanban/epics/Epic-5/Story-009-docusaurus-documentation-portal/T11-docusaurus-monorepo-markdown-link-resolution-br068.md).

**FR-068 (sidebar IA)** is separate: navigation and sidebar information architecture (implemented in `sidebars.js` and the site homepage).

### Sidebar ↔ `docs/` mapping (FR-068)

| Sidebar label (nav) | `docs/` folder | Notes |
| ------------------- | -------------- | ----- |
| Architecture | `architecture/` | Canonical pillar |
| Changelog & release notes | `changelog-and-release-notes/` | Canonical pillar; archive globs still excluded per FR-066 |
| Project management | `project-management/` | Canonical pillar (Kanban, FR/BR, rituals) |
| Guides | `guides/` | Canonical pillar |
| Documentation (developer & user) | `documentation/` | Canonical pillar |
| Knowledge base | `knowledge/` | Canonical pillar |
| Maintenance (portal triage) | `maintenance/` | **Extension** (e.g. FR-067 triage notes) |
| Analysis | `analysis/` | **Extension** |
| Implementation cycles | `implementation-cycles/` | **Extension** |
| Developer tools | `developer-tools/` | **Extension** |
| Changelog (legacy root) | `changelog/` | **Extension** (legacy alongside `changelog-and-release-notes/`) |

Canonical structure reference: [Ultimate Canonical KB Structure](../docs/architecture/standards-and-adrs/ultimate-canonical-kb-structure.md).

**CI (FR-069):** GitHub Actions runs `npm ci` and `npm run build` in this directory when `portal/`, `docs/`, or [`.github/workflows/docusaurus-build.yml`](../.github/workflows/docusaurus-build.yml) change on pull requests and on pushes to `main`.

## Production hosting (FR-070)

**Provider:** **GitHub Pages** (project site).

- **Canonical URL:** https://earlution.github.io/ai-dev-kit/
- **`docusaurus.config.js`:** `url` = `https://earlution.github.io`, `baseUrl` = `/ai-dev-kit/` (must stay aligned with this path).
- **Published artifact:** static files from `npm run build` are pushed to the **`gh-pages`** branch by [`.github/workflows/docusaurus-deploy.yml`](../.github/workflows/docusaurus-deploy.yml) (`peaceiris/actions-gh-pages`, `publish_dir: ./portal/build`).
- **Triggers:** push to `main` when `portal/`, `docs/`, or the deploy workflow changes; **`workflow_dispatch`** for a manual redeploy.
- **Repo visibility:** Repository is **public** — matches **GitHub Free** expectations for this **project** Pages URL (no paid-tier workaround for “private repo + Pages”).
- **Repo settings:** GitHub → **Settings → Pages**: source **Deploy from a branch**, branch **`gh-pages`**, folder **`/ (root)`**. First run may require admin enablement; until then the URL can 404.
- **Secrets / permissions (NF01):** Deploy uses only the default **`GITHUB_TOKEN`** (`github_token: ${{ secrets.GITHUB_TOKEN }}` in the workflow) — **no PAT in the repo**. Workflow sets `permissions: contents: write` so the action can push to `gh-pages`. If your org restricts token permissions, add an org-approved alternative (e.g. fine-grained PAT in **`GH_PAGES_TOKEN`** only if documented here — not committed).

### Rollback (NF02)

- **Redeploy prior `main`:** revert or reset `main` to the last known-good commit, push (or run **Docusaurus deploy to GitHub Pages** via `workflow_dispatch` after checking out that commit in a branch — preferred: fix `main` and push to trigger deploy).
- **Or** restore `gh-pages` to a previous tree via git (maintainer) and force-push that branch — use only if you understand impact on live site.

### Go-live and troubleshooting (E5:S09:T09)

If **`gh-pages`** is updating but **https://earlution.github.io/ai-dev-kit/** still returns **404**, the repo likely has **no Pages site** published yet:

1. **UI:** GitHub → **Settings → Pages** → **Build and deployment** → **Deploy from a branch** → branch **`gh-pages`**, folder **`/ (root)`** → Save. Wait a few minutes and hard-refresh.
2. **API (repo admin, `repo` scope):** One-time create legacy Pages from `gh-pages` / root, e.g. with [GitHub CLI](https://cli.github.com/):  
   `gh api --method POST repos/<owner>/<repo>/pages -f build_type=legacy -f 'source[branch]=gh-pages' -f 'source[path]=/'`  
   Then confirm: `curl -sI https://earlution.github.io/ai-dev-kit/` → **200**.

**Verify deploy:** **Actions** → workflow **Docusaurus deploy to GitHub Pages** should be green after pushes to **`main`** that touch `portal/`, `docs/`, or the deploy workflow (or run **`workflow_dispatch`**).

## Site search (FR-071)

**Provider:** **Local / offline** — [`@easyops-cn/docusaurus-search-local`](https://github.com/easyops-cn/docusaurus-search-local) is registered as a **theme** in [`docusaurus.config.js`](docusaurus.config.js). The search index is generated during **`npm run build`** and shipped with the static site; each **deploy** refreshes the index. **No Algolia / DocSearch** application and **no CI secrets** for search.

### Privacy

Queries run **only in the browser** against the downloaded index. **No third-party search API** receives query text. (Contrast: Algolia DocSearch would send queries to Algolia’s servers — not used here.)

### Build time (NF02)

Local indexing adds work to the build. On a reference run (developer machine, full `docs/` corpus as of FR-071), **`npm run build`** completed in **~2 minutes**; CI duration may vary. If builds approach workflow timeouts, narrow `docs/` scope (FR-066 excludes) or split CI concerns in a future task.

### Smoke-test queries

On the **deployed** site ([canonical URL](https://earlution.github.io/ai-dev-kit/) — FR-070), open the **search** control (navbar), run:

- `release workflow` → expect hits mentioning **Release Workflow** / RW docs.
- `kanban` → expect **Kanban** / project-management content.
- `versioning policy` → expect **versioning** / ADK policy docs.

## Installation

```bash
yarn
```

(or `npm install` in `portal/`.)

## Local Development

```bash
yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

## Build

```bash
yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

**Minification (FR-068):** `npm run build` runs `docusaurus build --no-minify`. On this stack (Docusaurus 3.9.x + current client bundle), the default Terser pass can fail with `Unexpected token: operator (<)` while the server bundle succeeds. **Attempted workaround:** skip JS minify until the pipeline is fixed or upgraded; the site is still a fully linked production build.

## Deployment

Using SSH:

```bash
USE_SSH=true yarn deploy
```

Not using SSH:

```bash
GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub Pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
