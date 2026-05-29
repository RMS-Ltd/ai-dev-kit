---
lifecycle: evergreen
ttl_days: null
created_at: 2026-03-31T12:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Epic 5, Story 9, Task 09: GitHub Pages go-live verification (FR-070 follow-up)

**Status:** COMPLETE  
**Priority:** HIGH  
**Estimated Effort:** Small  
**Created:** 2026-03-31  
**Last updated:** 2026-03-31 — **v0.5.9.9+2** go-live verified (merge `main`, Actions, Pages API, `curl` **200**)  
**Code:** E5S09T09

**Upstream:** [FR-070 – Deployment and hosting](../../../fr-br/FR-070-docusaurus-deployment-and-hosting.md) (automation shipped in **T06**); this task **closes the operational gap** between “`gh-pages` branch updated by Actions” and “canonical URL returns **200** for readers.”

---

## Task ID

**Task ID:** E5:S09:T09  
**Full Task ID:** `E5:S09:T09`

---

## Specification (executable)

| ID | Source | Statement |
| --- | --- | --- |
| **S1** | AC1 | Canonical URL in [portal/README.md](https://github.com/earlution/ai-dev-kit/blob/main/portal/README.md) returns **HTTP 2xx** (verified `curl -sI`). |
| **S2** | Deliverable | [Docusaurus deploy to GitHub Pages](https://github.com/earlution/ai-dev-kit/actions/workflows/docusaurus-deploy.yml) on **`main`** succeeds (run **23796236180**, 2026-03-31). |
| **S3** | AC2 | This **Evidence** lists commands, run id, Pages enablement. |
| **S4** | AC3 | [FR-070](../../../fr-br/FR-070-docusaurus-deployment-and-hosting.md) **R01** validated live (**200**). |

---

## Scope

Make the Docusaurus site **actually served** from GitHub Pages and **prove** it: repo **Settings → Pages**, confirm deploy workflow health, verify **`https://earlution.github.io/ai-dev-kit/`** (and key paths), update docs if discoverability steps are wrong or incomplete.

The **Docusaurus deploy to GitHub Pages** workflow can succeed and **`gh-pages`** can contain a fresh build, while the **project Pages URL still returns 404** if the repository has not enabled **Build and deployment** → **Deploy from a branch** → **`gh-pages`** / **`/(root)`**, or if org policies / naming prevents publishing.

---

## Input

- **E5:S09:T06** / [FR-070](../../../fr-br/FR-070-docusaurus-deployment-and-hosting.md) — deploy workflow and [portal hosting docs](https://github.com/earlution/ai-dev-kit/blob/main/portal/README.md).
- **Public** `earlution/ai-dev-kit` repo; maintainer access to **Settings → Pages** and **Actions**.
- Remote **`gh-pages`** branch present (Actions publish from `main`).

---

## Deliverable

- **Repo configuration** — GitHub Pages source **`gh-pages`** / **`/(root)`** (legacy branch publish; enabled 2026-03-31 via GitHub API).
- **Verification** — Canonical URL **HTTP 200**; docs path returns **301** to trailing-slash URL (expected).
- **Actions** — Green **Docusaurus deploy to GitHub Pages** on `main` after merge from `epic/5-documentation-management`.
- **Documentation** — **Go-live and troubleshooting** under [portal/README.md](https://github.com/earlution/ai-dev-kit/blob/main/portal/README.md) (FR-070).

---

## Acceptance Criteria

- [x] AC1: **`https://earlution.github.io/ai-dev-kit/`** returns success (not 404) after configuration/propagation. *(HTTP 200, 2026-03-31.)*
- [x] AC2: Evidence recorded; **Evidence** lists verification command/date or Actions narrative.
- [x] AC3: [FR-070](../../../fr-br/FR-070-docusaurus-deployment-and-hosting.md) **R01** “reachable” **validated** for the deployed site.

---

## Dependencies

**Depends on:** E5:S09:T06 (complete).

---

## Out of scope

- Switching host off GitHub Pages (separate FR/ADR).
- **FR-071** search behavior beyond quick smoke on prod (already T07).

---

## Version Anchor

**Forensic marker:** `✅ COMPLETE (v0.5.9.9+2)` — **RW E5:S09:T09** (implementation).  
**Kanban init:** `v0.5.9.9+1` — **RW -k E5:S09:T09**.

---

## Evidence

- **Merge:** `epic/5-documentation-management` → **`main`** (fast-forward **`4314cd36`**) pushed 2026-03-31 — brings `v0.5.9.9+1` RW -k + T09 task on default branch.
- **Actions:** [Workflow run 23796236180](https://github.com/earlution/ai-dev-kit/actions/runs/23796236180) — **success** (~3m29s); **Deploy to gh-pages** completed.
- **Pages:** Site created via `gh api POST .../pages` with `build_type=legacy`, `source[branch]=gh-pages`, `source[path]=/`. Response `html_url`: `https://earlution.github.io/ai-dev-kit/`.
- **HTTP:** `curl -sI https://earlution.github.io/ai-dev-kit/` → **200** (2026-03-31 UTC). `curl -sI` docs path → **301** to trailing-slash.
- **Docs:** [portal/README.md](https://github.com/earlution/ai-dev-kit/blob/main/portal/README.md) — **Go-live and troubleshooting (E5:S09:T09)**.
