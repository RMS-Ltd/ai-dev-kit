# AI Dev Kit — documentation site

This directory (`portal/`) is the **[Docusaurus](https://docusaurus.io/)** site for **AI Dev Kit**. The monorepo overview, installation, and workflows live in the repository root [README.md](../README.md).

## Publish scope (FR-114 — supersedes FR-066 breadth)

**Adopter-public allowlist** (**E05:S09:T15**). The docs plugin ingests [`docs/`](../docs/) but **excludes maintainer corpora** via `docusaurus.config.js` `exclude` globs. Logical KB pillars (architecture, Kanban, knowledge) remain in git/Notion — not all are published here.

**Planning:** [IPP-E05S09T15](../docs/implementation-cycles/IPP-E05S09T15-docusaurus-adopter-public-publish-allowlist-fr114.md) · [FR-114](../docs/project-management/kanban/fr-br/FR-114-split-documentation-surfaces-docusaurus-public-notion-maintainer-kb.md)

### Included (allowlist)

| Path | Notes |
| ---- | ----- |
| `docs/guides/**` | Workflow cheatsheets, adoption guides |
| `docs/documentation/**` | Adopter user + reference docs |
| `docs/developer-tools/ide-whitelist-guide.md` | Single adopter-facing maintainer tool page |
| Entry | [`docs/documentation/docusaurus-portal-index.md`](../docs/documentation/docusaurus-portal-index.md) (`sidebar_position: 0`) |

### Excluded (Docusaurus `exclude` globs)

| Glob | Rationale |
| ---- | --------- |
| `project-management/**` | Kanban, FR/BR — maintainer |
| `implementation-cycles/**` | IPPs — maintainer |
| `maintenance/**`, `analysis/**`, `knowledge/**`, `journals/**` | Maintainer corpora |
| `architecture/**`, `governance/**` | Internal standards — link via GitHub blob URLs |
| `changelog-and-release-notes/**` | RC=0: GitHub only; RC≥1 uses curated `portal/blog/` release notes |
| `developer-tools/ide-whitelist-uat-log.md` | Maintainer UAT log only |

**Internal standards linking policy:** From published pages, use `https://github.com/RMS-Ltd/ai-dev-kit/blob/main/...` for excluded trees (BR-068 Strategy A).

### RC ≥ 1 significant release notes

From **RC ≥ 1**, publish **curated milestone narratives** under [`portal/blog/`](blog/) — not raw `CHANGELOG.md`. Policy: [`portal/blog/RELEASE-NOTES-POLICY.md`](blog/RELEASE-NOTES-POLICY.md). Scaffold only until first RC public release.

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
   [Install in your project](https://github.com/rms-ltd/ai-dev-kit/blob/main/INSTALL_IN_YOUR_PROJECT.md)
   ```

   For framework paths, include the full path from the repository root after `/blob/main/` (e.g. `packages/frameworks/kanban/...`). If a directory name contains **spaces**, **percent-encode** them in the URL (e.g. `workflow-mgt`).

2. **Optional:** Add a **short page under `docs/`** (stub) if the portal must show an in-sidebar summary; link from that stub to the GitHub source. Avoid maintaining two long copies of the same document.

3. **Do not** rely on **`warn`** for `onBrokenMarkdownLinks` to “paper over” bad relatives—the site ships with **`throw`** (**FR-067** / **E5:S09:T08**).

**Planning:** [IPW-E5S09T11](../docs/implementation-cycles/IPW-E5S09T11-docusaurus-monorepo-markdown-links-br068.md). **Host task:** [E5:S09:T11](../docs/project-management/kanban/epics/Epic-5/Story-009-docusaurus-documentation-portal/T11-docusaurus-monorepo-markdown-link-resolution-br068.md).

### Sidebar ↔ allowlist mapping (FR-114)

| Sidebar label (nav) | `docs/` source | Notes |
| ------------------- | -------------- | ----- |
| Guides | `guides/` | Autogenerated |
| Documentation | `documentation/` | Autogenerated |
| IDE command whitelist | `developer-tools/ide-whitelist-guide.md` | Explicit doc id |

**CI (FR-069 / FR-114-NF1 / ADR-017):** Workflow [**Docusaurus site build**](../.github/workflows/docusaurus-build.yml) runs on changes to `portal/**`, **allowlisted** `docs/guides/**`, `docs/documentation/**`, `docs/developer-tools/ide-whitelist-guide.md`, or the workflow file. Edits to excluded maintainer trees (e.g. `docs/project-management/**`) do **not** trigger the portal build on pull requests.

## Dependency updates (Dependabot) — FR-105 / E08:S03:T06

**Config:** [`.github/dependabot.yml`](../.github/dependabot.yml) — weekly **pip** (repo root) and **npm** (`portal/`), with a **Docusaurus** npm group to reduce PR noise.

**Repo setting:** **Settings → Code security and analysis → Dependabot security updates** must be **enabled** (not only the YAML file). Maintainer evidence: `gh api repos/RMS-Ltd/ai-dev-kit -q '.security_and_analysis.dependabot_security_updates'`.

### Triage for Dependabot PRs

1. **Merge when green:** Dependabot PRs should pass [**Docusaurus site build**](../.github/workflows/docusaurus-build.yml) (`npm ci` + `npm run build` in `portal/`).
2. **npm / Docusaurus pins:** Do **not** merge major downgrades of `@docusaurus/*` or React without a deliberate upgrade task and local `npm run build`.
3. **pip PRs:** Review `requirements.txt` / `setup.py` lower-bound bumps; run targeted pytest if CLI paths change.
4. **Defer with reason:** Transitive dev-only advisories (e.g. `webpack-dev-server` → `sockjs` / `uuid`) may remain until a planned Docusaurus upgrade — record deferral in the PR or linked task.
5. **Ignore rules:** Use GitHub **dependabot ignore** only with a documented rationale in the PR body.

### Local verification after lockfile changes

```bash
cd portal
npm ci
npm run build
```

Optional audit pass (safe first, then selective `--force` only if build stays green): `npm audit` → `npm audit fix` → rebuild → reassess.

## Production hosting (FR-070)

**Provider:** **GitHub Pages** (project site).

- **Canonical URL:** https://rms-ltd.github.io/ai-dev-kit/
- **`docusaurus.config.js`:** `url` = `https://rms-ltd.github.io`, `baseUrl` = `/ai-dev-kit/` (must stay aligned with this path).
- **Published artifact:** static files from `npm run build` are pushed to the **`gh-pages`** branch by the **`deploy`** job in [`.github/workflows/docusaurus-build.yml`](../.github/workflows/docusaurus-build.yml) (`peaceiris/actions-gh-pages`, `publish_dir: ./portal/build`; artifact from the same workflow run per [ADR-017](../docs/architecture/standards-and-adrs/ADR-017-docusaurus-ci-build-deploy-topology.md)).
- **Triggers:** push to `main` when `portal/`, `docs/`, or the build workflow changes; **`workflow_dispatch`** on **Docusaurus site build** for a manual redeploy.
- **Repo visibility:** Repository is **public** — matches **GitHub Free** expectations for this **project** Pages URL (no paid-tier workaround for “private repo + Pages”).
- **Repo settings:** GitHub → **Settings → Pages**: source **Deploy from a branch**, branch **`gh-pages`**, folder **`/ (root)`**. First run may require admin enablement; until then the URL can 404.
- **Secrets / permissions (NF01):** Deploy uses only the default **`GITHUB_TOKEN`** (`github_token: ${{ secrets.GITHUB_TOKEN }}` in the workflow) — **no PAT in the repo**. Workflow sets `permissions: contents: write` so the action can push to `gh-pages`. If your org restricts token permissions, add an org-approved alternative (e.g. fine-grained PAT in **`GH_PAGES_TOKEN`** only if documented here — not committed).

### Rollback (NF02)

- **Redeploy prior `main`:** revert or reset `main` to the last known-good commit, push (or run **Docusaurus site build** via `workflow_dispatch` after checking out that commit in a branch — preferred: fix `main` and push to trigger deploy).
- **Or** restore `gh-pages` to a previous tree via git (maintainer) and force-push that branch — use only if you understand impact on live site.

### Go-live and troubleshooting (E5:S09:T09)

If **`gh-pages`** is updating but **https://rms-ltd.github.io/ai-dev-kit/** still returns **404**, the repo likely has **no Pages site** published yet:

1. **UI:** GitHub → **Settings → Pages** → **Build and deployment** → **Deploy from a branch** → branch **`gh-pages`**, folder **`/ (root)`** → Save. Wait a few minutes and hard-refresh.
2. **API (repo admin, `repo` scope):** One-time create legacy Pages from `gh-pages` / root, e.g. with [GitHub CLI](https://cli.github.com/):  
   `gh api --method POST repos/<owner>/<repo>/pages -f build_type=legacy -f 'source[branch]=gh-pages' -f 'source[path]=/'`  
   Then confirm: `curl -sI https://rms-ltd.github.io/ai-dev-kit/` → **200**.

**Verify deploy:** **Actions** → workflow **Docusaurus site build** — **`deploy`** job should be green after pushes to **`main`** that touch `portal/`, `docs/`, or the workflow (or run **`workflow_dispatch`**).

## Site search (FR-071)

**Provider:** **Local / offline** — [`@easyops-cn/docusaurus-search-local`](https://github.com/easyops-cn/docusaurus-search-local) is registered as a **theme** in [`docusaurus.config.js`](docusaurus.config.js). The search index is generated during **`npm run build`** and shipped with the static site; each **deploy** refreshes the index. **No Algolia / DocSearch** application and **no CI secrets** for search.

### Privacy

Queries run **only in the browser** against the downloaded index. **No third-party search API** receives query text. (Contrast: Algolia DocSearch would send queries to Algolia’s servers — not used here.)

### Build time (NF02)

Local indexing adds work to the build. On a reference run (developer machine, full `docs/` corpus as of FR-071), **`npm run build`** completed in **~2 minutes**; CI duration may vary. If builds approach workflow timeouts, narrow `docs/` scope (FR-066 excludes) or split CI concerns in a future task.

### Smoke-test queries

On the **deployed** site ([canonical URL](https://rms-ltd.github.io/ai-dev-kit/) — FR-070), open the **search** control (navbar), run:

- `release workflow` → expect hits mentioning **Release Workflow** / RW docs.
- `kanban` → expect **Kanban** / project-management content.
- `versioning policy` → expect **versioning** / ADK policy docs.

## Installation

```bash
cd portal
npm ci
```

(or `npm install` in `portal/`.)

**Docusaurus 3.10 + Faster (BR-090 / E5:S09:T13):** [`docusaurus.config.js`](docusaurus.config.js) sets `future.v4: true`, which enables [Docusaurus Faster](https://docusaurus.io/docs/advanced/performance) by default on 3.10.x. You **must** have **`@docusaurus/faster`** in `portal/package.json` (pinned with other `@docusaurus/*` packages at **3.10.1**). Without it, `npm run build` fails immediately with `Cannot find package '@docusaurus/faster'`.

## Local Development

```bash
yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

## Build

```bash
npm run build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

**Minification (FR-068):** `npm run build` runs `docusaurus build --no-minify`. On Docusaurus **3.10.x** with `@docusaurus/faster` and `future.v4: true`, the default Faster pipeline (Rspack/SWC) is used; `--no-minify` remains as a conservative workaround from the 3.9.x era until a maintainer verifies full minification on CI.

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
