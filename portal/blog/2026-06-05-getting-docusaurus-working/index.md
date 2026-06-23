---
slug: getting-docusaurus-working
title: Getting Docusaurus Working
authors: [adk]
tags: [docusaurus]
---

We spent several weeks getting the AI Dev Kit documentation portal to **`npm run build` exit 0** under strict link checking, then shipped it to GitHub Pages. This post is a practical field guide — not a hello-world tutorial — for teams publishing a **monorepo `docs/` tree** with Docusaurus 3.x.

{/* truncate */}

## What we were building

The site lives in [`portal/`](https://github.com/RMS-Ltd/ai-dev-kit/tree/main/portal) and publishes markdown from the repository [`docs/`](https://github.com/RMS-Ltd/ai-dev-kit/tree/main/docs) tree. That keeps a single source of truth for agents, maintainers, and readers.

Key config choices:

- **Docs plugin root:** `../docs` (monorepo corpus, not `portal/docs`)
- **Strict gates:** `onBrokenLinks`, `onBrokenMarkdownLinks`, and `onBrokenAnchors` all set to **`throw`**
- **Hosting:** GitHub Pages at [rms-ltd.github.io/ai-dev-kit](https://rms-ltd.github.io/ai-dev-kit/)
- **Search:** `@easyops-cn/docusaurus-search-local` (offline index, no Algolia)

If your build passes locally with `warn` but fails in CI with `throw`, you have not finished the job yet.

## Local quick start

```bash
cd portal
npm ci
npm run start    # dev server → http://localhost:3000/ai-dev-kit/
npm run build    # production build (must exit 0 before merge)
```

**Node 20+** matches our CI runner. After any Dependabot lockfile change, always run **`npm ci`** (not `npm install`) before trusting a build.

## Failure class 1 — missing `@docusaurus/faster`

Dependabot bumped `@docusaurus/core` to **3.10.1** while `package.json` still pinned **3.9.2**, and our config had `future: { v4: true }`. Docusaurus 3.10 then required **`@docusaurus/faster`**, which was not installed.

Typical error:

```text
To enable Docusaurus Faster options, your site must add the @docusaurus/faster package
Cannot find package '@docusaurus/faster' ...
```

**Fix:** align **all** `@docusaurus/*` pins in `package.json` and regenerate `package-lock.json`, then add `@docusaurus/faster` at the same version. Re-run `npm ci && npm run build`.

Lesson: treat Docusaurus as a **pinned set**, not independent packages. A lockfile-only bump without matching `package.json` is a time bomb.

## Failure class 2 — links that leave the docs plugin

The docs plugin only ingests files under `docs/`. Markdown links like:

```markdown
[Install](../../../INSTALL_IN_YOUR_PROJECT.md)
[Validator](../../../../packages/frameworks/workflow-mgt/scripts/validation/validate_branch_context.py)
```

look fine in GitHub's file viewer. Docusaurus cannot resolve them as in-corpus doc IDs, and with `onBrokenMarkdownLinks: 'throw'` the build stops.

**Fix (Strategy A — BR-068):** link to canonical GitHub `blob/main/` URLs:

```markdown
[Install in your project](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/INSTALL_IN_YOUR_PROJECT.md)
```

For framework paths, use the full repository path after `/blob/main/`. Percent-encode spaces in directory names.

Optional alternative: add a **short stub page under `docs/`** when the portal must show in-sidebar content, and link the stub to the GitHub source. Do not maintain two full copies of the same document.

## Failure class 3 — broken anchors and MDX surprises

With `onBrokenAnchors: 'throw'`, every `#fragment` must match a generated heading slug. Renamed headings silently break deep links.

We also hit MDX parse issues from:

- Angle brackets in prose (`<N`, `<=`) interpreted as JSX
- Curly-brace placeholders (`{epic}`, `{PROJECT_NAME}`) treated as expressions
- Custom heading syntax `{#id}` causing acorn parse errors in some contexts

**Fixes that worked:**

- Escape or rephrase MDX-sensitive tokens outside fenced code blocks
- Align heading text with the slug Docusaurus actually emits
- Remove stale hash fragments when slug alignment is not worth the churn
- Keep automation (`scripts/escape_mdx_placeholders.py`) for repeatable corpus sweeps

## Failure class 4 — local green, CI red

The nastiest bug: **`npm run build` passed locally** but failed in GitHub Actions on the same commit.

Root cause: a markdown file under `docs/maintenance/logs/` was linked from the publish corpus but **gitignored** by a broad `logs/` rule. The file existed on a maintainer laptop only.

**Fix:**

1. Add a narrow `.gitignore` exception for tracked evidence logs under `docs/maintenance/logs/**`
2. Commit the file
3. Re-run CI

Lesson: **if it is linked, it must be tracked.** Strict builds turn "works on my machine" into a hard gate — which is the point.

## CI and deploy topology

Our workflow builds on pull requests and on pushes to `main`, then deploys to **`gh-pages`** only when the build job succeeds. One production build per commit; deploy never runs on a failed build.

Published URL: **https://rms-ltd.github.io/ai-dev-kit/**

`docusaurus.config.js` must keep `url` and `baseUrl` aligned with that path (`baseUrl: '/ai-dev-kit/'`).

## A sane workflow for maintainers

1. **Edit markdown in `docs/`** (or `portal/blog/` for blog posts like this one).
2. **`cd portal && npm run build`** before opening a PR.
3. **Fix link class, not config** — do not downgrade `throw` to `warn` to unblock a merge.
4. **Dependabot PRs:** merge only when the Docusaurus workflow is green; never merge major `@docusaurus/*` downgrades without a deliberate upgrade task.
5. **Optional gate:** `PORTAL_BUILD_STRICT=1 pytest -m portal_build` for automated regression (out-of-plugin link ban, build smoke).

## What "done" looks like

For us, "Docusaurus working" meant all of the following at once:

- `npm run build` exit **0** locally and in CI
- GitHub Pages deploy green on `main`
- Strict link and anchor checking left enabled
- Monorepo links to `packages/`, `.cursorrules`, scripts, and repo-root files use Strategy A or in-corpus stubs
- Lockfile, `package.json`, and Docusaurus feature flags stay aligned

That work shipped across [BR-090](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/docs/kanban/fbu/BR-090-docusaurus-faster-missing-dependabot-310-lockfile-drift.md) (dependency alignment) and a full corpus link remediation wave (**v0.5.9.13+2** through **+4**).

## Further reading

- [Portal README — publish scope and BR-068](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/portal/README.md)
- [Docusaurus corpus triage (FR-067)](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/docs/maintenance/docusaurus-corpus-triage-fr-067.md)
- [Docusaurus portal index](/docs/documentation/docusaurus-portal-index)

If you are standing up a similar monorepo portal, start with **`npm run build` in strict mode early**. Fixing hundreds of links after the fact is slower than enforcing corpus hygiene from day one.
