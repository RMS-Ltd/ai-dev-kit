---
lifecycle: evergreen
ttl_days: null
created_at: 2026-03-30T12:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Feature Request: Retire `shields` branch — badge strategy for a private repo

**Type:** Feature Request (FR)  
**ID:** FR-064  
**Submitted:** 2026-03-30  
**Submitted By:** User (via maintainer agent)  
**Priority:** MEDIUM  
**Status:** COMPLETE (2026-03-30 — E5:S01:T69 / v0.5.1.69+1)

**Repository Pattern:** FR-064 = E5:S01:T69  
**Implementing Task:** [E5:S01:T69 – Shields branch retirement (private repo)](../epics/Epic-5/Story-001-fr-repo/T69-shields-branch-private-repo-fr-064.md)

---

## Summary

**AI Dev Kit is a private GitHub repository.** The remote **`shields`** branch carries an **unrelated Git history** whose sole file is **`shields.json`**, maintained by automated commits (e.g. “Updating tag \"version\"") for external badge tooling. That branch **does not merge into `main`**, duplicates no product value, and creates confusion. This FR captures work to **implement a sustainable badge / metadata approach compatible with a private repo** so the **`shields` branch can be deleted** from origin.

---

## Problem Statement

1. **`origin/shields`** has **no merge base** with `main` — it is not feature work; it is a parallel line of hundreds of tiny JSON commits.
2. **Private repo constraints:** Many Shields.io dynamic endpoints assume **public** GitHub data (release count, stars, workflow status). Those often **fail or leak “private” semantics** when the repo is private, so teams fall back to **static** badges or **internal** dashboards.
3. **Operational debt:** Keeping a long-lived orphan branch for `shields.json` is a hygiene and security-discussion smell (who authorizes the bot, what is BYOB/yarr.is, is the branch documented anywhere?).
4. **End state:** We want **no dependency** on `shields` for README or automation, and **permission to delete** the branch after migration.

---

## Goals

1. **Document current state** — What consumes `shields.json` today (if anything besides the historical bot)? What does root **README** use? (Today: **static** Shields.io image URLs for license/status/Python — see README header comment.)
2. **Define target state** — Badges and version visibility on `main` without the `shields` branch:
   - Prefer **static** `img.shields.io/badge/...` labels maintained alongside **RW**-updated README version text, **or**
   - Documented **private-repo-safe** alternatives (e.g. org-internal badge endpoint, GitHub-only viewers, “no network badge” policy).
3. **Decommission `shields`** — Disable or redirect automation that pushes to `shields`; archive any required JSON **on `main`** only if a tool still needs it (otherwise remove).
4. **Delete remote branch** — After validation, delete **`origin/shields`** (and local `shields` if present) with a short runbook note in maintainer docs or Epic 6 tooling notes.

---

## Proposed implementation plan (high level)

| Phase | Action |
|-------|--------|
| **1. Inventory** | Confirm no CI, README, or third-party integration **requires** `shields` / `shields.json`; grep org + docs. |
| **2. README / docs** | Ensure `README.md` badge block explicitly documents **private repo** choice (static badges; link to this FR). |
| **3. Replacement** | If any consumer needed `shields.json`, generate equivalent under `main` (one file, versioned, optional) **or** replace with static badges only. |
| **4. Automation off** | Turn off BYOB / external job pushing to `shields` (org setting, PAT revoke, or branch protection). |
| **5. Delete branch** | `git push origin --delete shields` after maintainer ACK; record in changelog or Epic 6 maintenance note if required. |

---

## Functional requirements

- **FR-064-F1:** No documented install or RW step may **require** the `shields` branch.
- **FR-064-F2:** README (or agreed doc surface) shows **license / status / version** without relying on dynamic GitHub repo stats that break for **private** repos.
- **FR-064-F3:** Automation pushing orphan commits to `shields` is **stopped** before branch deletion.
- **FR-064-F4:** **`origin/shields` deleted** (or explicitly archived per org policy) with evidence linked from the implementing task.

## Non-functional requirements

- **FR-064-NF1:** No secrets in badge URLs or static JSON committed to `main`.
- **FR-064-NF2:** Deletion is **reversible only via GitHub reflog** — document that for safety.

---

## Acceptance criteria

- [x] Inventory complete; gaps documented in the task file.
- [x] Target badge/metadata approach agreed and reflected on **`main`**.
- [x] External automation to `shields` **disabled** or documented as removed.
- [x] **`shields` branch removed** from remote (and locals cleaned up).
- [x] Task **E5:S01:T69** closed with Version Anchor via normal RW.

---

## Related

- **E5:S01:T68** — consumer path / README hygiene (packaging narrative).
- **FR-062** — GitHub releases (public artifact story; orthogonal to private **source** repo badges).

---

## References

- Discussion context: `origin/shields` tip contains only `shields.json` (badge meta: version label, license, status, tests/coverage placeholders); commit history dominated by “Updating tag \"version\"".
