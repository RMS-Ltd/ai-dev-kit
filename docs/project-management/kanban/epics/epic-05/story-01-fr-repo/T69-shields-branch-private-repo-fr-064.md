---
lifecycle: evergreen
ttl_days: null
created_at: 2026-03-30T12:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Epic 5, Story 1, Task 69: Retire `shields` branch (FR-064 — private repo badges)

**Task ID:** E05:S01:T69  
**Status:** ✅ COMPLETE (v0.5.1.69+1)  
**Priority:** MEDIUM  
**Estimated Effort:** Small  
**Created:** 2026-03-30  
**Last updated:** 2026-03-30  
**Version:** v0.5.1.69+1  
**Code:** E05S01T69

**Feature Request:** [FR-064 – Shields branch / private repo](../../../fr-br/FR-064-shields-branch-private-repo-badges.md)

---

## Task ID

**Full Task ID:** `E05:S01:T69`

---

## Summary

Implement FR-064: **private-repo-safe** badges on `main` (static Shields.io), remove **BYOB** workflow that maintained orphan **`shields`** / `shields.json`, and **delete `origin/shields`**.

---

## Input

- [FR-064](../../../fr-br/FR-064-shields-branch-private-repo-badges.md)  
- Maintainer permission to delete remote branch  
- `git` / `gh` access to `RMS-Ltd/ai-dev-kit`

---

## Scope

1. Inventory (see below) recorded in this task.  
2. Remove `.github/workflows/update-badges.yml` (BYOB / same-repo `shields` pattern).  
3. README + knowledge guide callouts for static-badge policy.  
4. After `main` ships: `git push origin --delete shields`.  
5. Close FR-064 ACs and kanban.

---

## Deliverable

- No runnable `update-badges.yml` on `main`.  
- README + [badge-setup-for-private-repos.md](../../../../../knowledge/guides/badge-setup-for-private-repos.md) aligned with decision.  
- **`origin/shields`** deleted (see Evidence).  
- FR-064 and boards updated.

---

## Inventory (Phase 1 — 2026-03-30)

| Source | Finding |
|--------|---------|
| **Root README** | Static `img.shields.io/badge/...` only; no `byob.yarr.is` URLs. |
| **`.github/workflows`** | Only BYOB consumer was **`update-badges.yml`** (6× `RubbaBoy/BYOB@v1.3.0`); **`workflow_run: Tests`** never fires (no workflow named `Tests`) — BR-058. |
| **Docs** | `docs/knowledge/guides/badge-setup-for-private-repos.md`, Epic 1 T01 historical notes, framework **templates** still describe BYOB for **adopters** — not runtime deps of this repo. |
| **`shields` branch** | Orphan line; tip = `shields.json` automation (“Updating tag \"version\"") — no merge base with `main` per FR-064. |

**Conclusion:** No README or install path **requires** `shields`; removing BYOB workflow removes same-repo pushes to `shields`.

---

## Acceptance Criteria

- [x] FR-064 inventory + target state documented.  
- [x] `main` reflects **static** badge policy; BYOB workflow **removed** from this repo.  
- [x] External automation to `shields` from this repo **stopped** (workflow deleted).  
- [x] **`origin/shields`** removed after release push (Evidence).  
- [x] RW **E05:S01:T69** with version anchor.

---

## Evidence

- **Workflow removal:** File `.github/workflows/update-badges.yml` deleted in release commit.  
- **Remote branch:** After `main` push for **v0.5.1.69+1**, maintainer ran `git push origin --delete shields` — confirm in session output or `gh api repos/{owner}/{repo}/branches/shields` → 404.  
- **Secrets (manual):** If `BADGES_REPO_TOKEN` existed only for BYOB → this repo, consider revoking in GitHub **Settings → Secrets** (out of band).

---

## Related

_Story:_ [`story-01-fr-repo.md`](../story-01-fr-repo.md)
