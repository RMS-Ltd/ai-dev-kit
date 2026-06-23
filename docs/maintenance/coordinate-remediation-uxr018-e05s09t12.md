---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-04T16:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Coordinate remediation: UXR-018 → E05:S09:T12 (T76 retired)

**Date:** 2026-06-04  
**Trigger:** UXR-018 was mis-filed as **E05:S01:T76** on the deprecated FR historical registry (**FR-072** cutover 2026-06-01).

---

## Canonical coordinates (only)

| Surface | ID |
| ------- | -- |
| **Primary task** | **E05:S09:T12** — [task doc](../kanban/epics/epic-05/story-09-docusaurus-documentation-portal/T12-changelog-directory-consolidation-uxr018.md) |
| **UXR** | [UXR-018](../kanban/fbu/UXR-018-changelog-directory-consolidation.md) |
| **IPP** | [IPP-E5S9T12](../implementation-cycles/IPP-E05S09T12-changelog-directory-consolidation.md) |
| **Semantic version anchor** | **v0.5.9.12+2** (portal story) |

**E05:S01:T76 does not exist** — task doc deleted; no redirect stub. **E05:S01** story is **CLOSED** (historical registry; no new intake).

---

## Orphan internal version labels

Git tags and archive filenames may still show **v0.5.1.76+1** / **v0.5.1.76+2** from releases filed before remediation. Those strings are **orphan labels** (wrong E/S/T in the version number). Traceability maps them to **E05:S09:T12** / **UXR-018** in updated archive changelogs and `semver-registry.yaml`.

---

## Why mis-housing happened

1. Legacy FR-repo intake habit (next Tnn on E05:S01).
2. Epic 5 conflated with Story 1.
3. No validator blocking new `story-01-fr-repo/T*.md` after FR-072.
4. Intake skill guardrails not enforced at runtime.

---

## E05:S01 intake since deprecation (2026-06-01)

| Category | Count | Notes |
| -------- | ----- | ----- |
| Net-new primary tasks on S01 after cutover | **1** | UXR-018 (was T76; **removed**) |
| Releases on orphan **0.5.1.76+*** labels | **2** | Remapped to **E05:S09:T12** in registry/docs |

---

## Remediation checklist

- [x] **E05:S09:T12** primary task doc
- [x] Delete **E05:S01:T76** (no stub)
- [x] Remove S01 checklist row for T76
- [x] Rewire UXR, IPP, boards, ledgers, changelogs, JSON reports, `version.py`, `semver-registry.yaml`
- [x] Intake skill hard-block on new E05:S01 tasks
