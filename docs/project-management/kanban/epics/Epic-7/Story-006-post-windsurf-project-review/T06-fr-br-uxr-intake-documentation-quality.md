---
lifecycle: evergreen
ttl_days: null
created_at: 2026-03-18T00:00:00Z
expires_at: null
housekeeping_policy: keep
---

# E7:S06:T06 – FR/BR/UXR Intake Documentation Quality

**Task ID:** E7:S06:T06
**Status:** COMPLETE
**Priority:** HIGH
**Last updated:** 2026-03-25
**Version:** v0.7.6.6+1

---

## Scope

Audit FR/BR/UXR intake and aggregate documentation for consistency, wiring, and clear separation from Kanban **task** completion tracking.

## Input

[`fbu-structure.md`](../../../fbu-structure.md), [`fbuboard.md`](../../../fbuboard.md), [`fbu-completed.md`](../../../fbu-completed.md), [`kanban-completed.md`](../../../kanban-completed.md), sample FR/BR docs (e.g. [`FR-073`](../../../fr-br/FR-073-fr-br-uxr-board-open-taskless-intake-execution-plan.md)), [`intake-process` skill (source)](https://github.com/earlution/ai-dev-kit/blob/main/.cursor/skills/intake-process/SKILL.md), [`FR_BR_INTAKE_GUIDE.md` (source)](https://github.com/earlution/ai-dev-kit/blob/main/packages/frameworks/kanban/FR_BR_INTAKE_GUIDE.md).

**Note on “Batch 3” (story blurb):** No other repo reference. This review used a **representative sample** of FR/BR/UXR files plus aggregate index docs—not a named historical batch.

## Deliverable

This document (**Review sample**, **Findings**, **Summary**); minimal link and header fixes; cross-links between `kanban-completed` and `fr-br-uxr-completed`.

## Acceptance Criteria

- [x] **Batch / sample intake docs reviewed** — see **Review sample**.
- [x] **Consistency assessed** — see **Findings** (aggregate headers, link patterns, frontmatter variance).
- [x] **Gaps documented** — see **Findings** (deferred items to T07 / future FR).

## Dependencies

None

## Blocker

None

---

## Review sample

| Category | Paths |
|----------|--------|
| Aggregate | [`fbu-structure.md`](../../../fbu-structure.md), [`fbuboard.md`](../../../fbuboard.md), [`fbu-completed.md`](../../../fbu-completed.md), [`kanban-completed.md`](../../../kanban-completed.md) |
| FR/BR/UXR (spot-check) | `FR-060`, `FR-063`, `FR-051`, `FR-002`, `FR-031`, `FR-003`, `BR-056`, `BR-057`, `BR-053`, `BR-001`, `UXR-001` |
| Intake guidance | skill + guide via GitHub: [`intake-process`](https://github.com/earlution/ai-dev-kit/blob/main/.cursor/skills/intake-process/SKILL.md), [`FR_BR_INTAKE_GUIDE.md`](https://github.com/earlution/ai-dev-kit/blob/main/packages/frameworks/kanban/FR_BR_INTAKE_GUIDE.md) (header / path conventions) |

---

## Findings

| Area | Issue | Severity | Action |
|------|--------|----------|--------|
| **`fr-br/*.md` → Epic links** | Nine files used markdown targets `(epics/Epic-…/…)` which resolve under `fr-br/epics/` (broken). | High | Replaced with `(../epics/Epic-…/…)` in: FR-002, FR-003, FR-031, FR-034, FR-035, FR-051, BR-001, BR-005, BR-033. |
| **`fbu-structure.md` header** | **Last Updated** / **Version** lagged `fbuboard.md` and live project line. | Medium | Bumped to 2026-03-25 and `v0.7.6.6+1` (aligned with this RW). |
| **`fbuboard.md` / `fbu-completed.md` Version** | Displayed older epic/task versions; inconsistent with structure doc. | Low | Set **Version** to `v0.7.6.6+1` for trio consistency. |
| **kanban-completed vs fr-br-uxr-completed** | Both track “completed” work; readers could confuse **tasks** vs **FR/BR/UXR** lifecycle. | Medium | Added reciprocal cross-links in the blockquotes of both files. |
| **Frontmatter styles** | Some BRs use `title`/`description` YAML (e.g. BR-053, BR-057); most FRs use `lifecycle` frontmatter. | Low | Documented only; standardize under T07 or a dedicated FR if desired. |
| **Packaged `FR_BR_INTAKE_GUIDE.md`** | Last updated 2025-12; examples reference packaged template paths, not always `docs/project-management/kanban/fr-br/`. | Low | Expected drift for adopters; no change in T06. |
| **Sample wiring** | FR-063 → E5 task, BR-057 → T17, UXR-001 structure OK; FR-060 has no epic links in header (acceptable). | — | No change. |

---

## Summary

- **Overall risk:** **Low** after correcting broken `epics/` relative links from `fr-br/` and aligning aggregate doc versions.
- **Follow-ups:** Optional frontmatter normalization and deeper link crawl → **E7:S06:T07** or a small FR.

---

## BR / FR

**None filed** — defects found were corrected in-repo during T06.

---

## Version Anchor

**Released as:** `v0.7.6.6+1` (internal); SemVer `v0.4.627+1` (task_touch via `semver_converter.py`).
