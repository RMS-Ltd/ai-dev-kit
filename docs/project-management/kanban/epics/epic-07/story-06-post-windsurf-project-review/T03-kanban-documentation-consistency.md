---
lifecycle: evergreen
ttl_days: null
created_at: 2026-03-18T00:00:00Z
expires_at: null
housekeeping_policy: keep
---

# E07:S06:T03 – Kanban Documentation Consistency

**Task ID:** E07:S06:T03
**Status:** ✅ COMPLETE
**Priority:** HIGH
**Last updated:** 2026-03-25
**Version:** v0.7.6.3+1

---

## Source of truth (live ADK kanban)

For **this repository**, epic identity and story lists are authoritative in:

- [`kanban-structure.md`](../../../kanban-structure.md) — narrative index of epics and story links
- **`docs/project-management/kanban/epics/Epic-*/`** — epic headers, story docs, task docs on disk

Board view: [`kboard.md`](../../../kboard.md).

## Renumbering note (historical vs live)

Some **historical** and **adopter-template** material describes an epic swap (Documentation ↔ User Management, E9/E18). That narrative does **not** describe the **current** ai-dev-kit kanban tree: **Epic 9** here is **Release Candidate Readiness** (see [`epic-09.md`](../../epic-09/epic-09.md)); there is **no** `epics/epic-18/` directory in this kanban. T03 audits **live** `docs/project-management/kanban/**` for stale wording, broken links, and drift from the SoT above—without assuming the old swap applies to ADK.

## Scope

Audit and fix **`docs/project-management/kanban/**`** for: post-renumbering stale epic references, broken relative cross-references, and drift between board, `kanban-structure.md`, and epic/story/task files. Out-of-tree contradictions (e.g. `docs/architecture/`) are logged for **E07:S06:T07** unless a kanban file links to a broken target and the minimal fix is in kanban.

## Input

Kanban docs under `docs/project-management/kanban/`, [`kanban-governance-policy.md` (framework package)](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/packages/frameworks/kanban/policies/kanban-governance-policy.md).

## Deliverable

- Consistent live kanban documentation with valid cross-references to existing paths
- Where template/FR text retains alternate numbering, minimal one-line disambiguation when it prevents confusion
- This task doc: **Findings / changes** (below) and acceptance criteria checked with evidence

## Acceptance Criteria

- [x] Live kanban E9/E18 (and related) narrative disambiguated or corrected per SoT; historical docs not misread as ADK live map — **Renumbering note** in this doc; callouts in [story-06-comprehensive-canonical-est-template-system.md](../../epic-04/story-06-comprehensive-canonical-est-template-system.md) and [BR-005](../../../fr-br/BR-005-kanban-framework-epic-structure-gap-uat-finding.md); board + story-006 + epic-07 wording updated.
- [x] Cross-references validated under `docs/project-management/kanban/**` — Fixed **kanban-structure** epic-01 story link (`story-01-vibe-dev-kit-…`); **kanban-board** FR-060/061 paths (`fr-br/…`); **epic-01.md** full-story path; added missing **epic-09 `story-05-canonical-est-review-and-refinement.md`** stub linked from epic-09 and structure. Full-tree link scan still reports many legacy breaks (esp. `kanban-completed.md`, FR placeholder links); logged for **E07:S06:T07**.
- [x] Structure aligned with governance — Task remains under story-006 with discrete task doc; epic-09 story checklist now resolves to on-disk story file; policy link verified to `packages/frameworks/kanban/policies/kanban-governance-policy.md`.

## Findings / changes

| Area | Change |
|------|--------|
| SoT | Documented: `kanban-structure.md` + `epics/Epic-*` = live ADK map; Epic 9 = RC Readiness; no live `epics/epic-18/`. |
| E9:S05 | Created [story-05-canonical-est-review-and-refinement.md](../../epic-09/story-05-canonical-est-review-and-refinement.md) (stub) so epic-09 and kanban-structure links resolve. |
| epic-01 | `kanban-structure` + `epic-01.md` pointed at wrong story-001 filename; corrected to `story-01-vibe-dev-kit-kanban-and-versioning.md`. |
| kanban-board | FR-060/061 links corrected to `fr-br/…`; T03 MoSCOW blurb aligned with SoT narrative. |
| Templates / BR | epic-04 story-006: **ADK live vs templates** subsection; BR-005: top callout to live `kanban-structure.md`. |
| Branch sync | Merged `origin/main` into `epic/7-documentation-maintenance` so `CHANGELOG.md` matches `latest_only` policy before RW. |
| Out of scope | ~200+ broken relative links remain in historical `kanban-completed.md` and example paths in FR docs — **E07:S06:T07**. |

## Dependencies

None

## Blocker

None

---

## Version Anchor

**Released as:** `v0.7.6.3+1` (internal); SemVer `v0.4.623+1`.
