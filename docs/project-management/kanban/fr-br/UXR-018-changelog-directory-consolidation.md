---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-04T15:00:00Z
expires_at: null
housekeeping_policy: keep
---

# User Experience Research: Changelog Directory Consolidation (`docs/changelog` vs `docs/changelog-and-release-notes`)

**Type:** User Experience Research (UXR)  
**Submitted:** 2026-06-04  
**Submitted By:** User (maintainer)  
**Priority:** MEDIUM  
**Status:** INTAKE  
**Code:** UXR-018  
**Last updated:** 2026-06-04  
**Version:** v0.5.1.76+1 (kanban init — E05:S01:T76)

**Implementing Task:** [E05:S01:T76](../epics/epic-05/story-01-fr-repo/T76-changelog-directory-consolidation-uxr018.md)

**Related:** [UXR-013](UXR-013-project-root-hygiene-and-legacy-docs-rationalization.md), [FR-039](FR-039-ai-dev-kit-project-review-and-legacy-clean-up.md), [E05:S01:T39](../epics/epic-05/story-01-fr-repo/T39-ai-dev-kit-project-review-and-legacy-cleanup.md), [FR-066](FR-066-docusaurus-canonical-docs-path.md), [portal/README.md](../../../portal/README.md) (Docusaurus pillar map), [IPP-E7S01T11](../../../implementation-cycles/IPP-E7S01T11-consolidate-governance-under-docs-governance.md) (RNF3: no bulk archive path rewrites)

---

## Summary

Maintainers and adopters encounter **two changelog trees** under `docs/`: a **legacy stub** at `docs/changelog/` (one archived file) and the **canonical** pillar at `docs/changelog-and-release-notes/` (~1,100+ RW archive files). A third stray mirror exists under `docs/knowledge/changelog-and-release-notes/`. This creates portal duplication, stale inbound links, and confusion about which path is SoT despite `rw-config.yaml` already pointing at the canonical archive.

---

## Research Objective

**Primary question:** Why do `docs/changelog/` and `docs/changelog-and-release-notes/` coexist, and what is the **low-risk methodology** to merge legacy content into the canonical pillar without breaking RW/CMW forensics?

**Secondary questions:**

1. Which inbound references still target `docs/changelog/`?
2. Does `docs/knowledge/changelog-and-release-notes/` duplicate canonical archive bytes?
3. How does consolidation interact with **FR-039** / **UXR-013** and **IPP E7:S01:T11 RNF3** (retain historical archive paths)?

---

## Methodology

**Research Method:** Repository-structure audit + config/policy traceability + link reference scan.  
**Participants:** Maintainer-directed intake (2026-06-04).  
**Duration:** Single investigation session (pre-intake analysis).  
**Tools/Platforms:** `find`, `rg`, `rw-config.yaml`, `portal/README.md`, git history (`ae548f2` public ADK genesis).

**Artifacts reviewed:**

- `rw-config.yaml` → `changelog_dir: docs/changelog-and-release-notes/changelog-archive`
- `docs/changelog/archive/0.4.14.4+1_epic-renumbering.md` (sole legacy file)
- `CHANGELOG_ARCHIVE.md` / `GITHUB_RELEASE_v0.4.14.4+1.md` (stale `docs/changelog/archive/` links)
- `docs/knowledge/changelog-and-release-notes/changelog-archive/` (11 files)
- Framework adopter examples using generic `docs/changelog` / `docs/changelogs` (installer placeholders)

---

## Key Findings

### Finding 1: Canonical SoT is already `docs/changelog-and-release-notes/` (Severity: High — clarity)

| Surface | Path | Role |
| ------- | ---- | ---- |
| RW / CMW / validators | `docs/changelog-and-release-notes/changelog-archive/` | **Active** — all new detailed changelogs |
| Root | `CHANGELOG.md` | Main summary changelog |
| Legacy | `docs/changelog/archive/` | **Orphan** — 1 pre-genesis file |
| Stray mirror | `docs/knowledge/changelog-and-release-notes/` | **Accidental** — 11 files from KB migration |

Public ADK genesis (**FR-099 Phase 3**, `ae548f2`) introduced the canonical tree; legacy folder was not fully retired.

### Finding 2: Portal documents both trees (Severity: Medium — UX)

Docusaurus maps **Changelog & release notes** (canonical) and **Changelog (legacy root)** (`docs/changelog/`) as an extension pillar. Users browsing the docs site see duplicate navigation for the same concern.

### Finding 3: Stale inbound links remain (Severity: Medium — broken navigation)

At least **CHANGELOG_ARCHIVE.md** and **GITHUB_RELEASE_v0.4.14.4+1.md** link to `docs/changelog/archive/0.4.14.4+1_epic-renumbering.md`. Repo-wide `docs/changelog/` references are few (~3) and repairable in one pass.

### Finding 4: Bulk rename of 1,100+ archive files is out of scope (Severity: Low — constraint)

**RNF3** (IPP E7:S01:T11) and changelog forensic policy favor **retaining** `docs/changelog-and-release-notes/changelog-archive/` as-is. Consolidation means **absorbing legacy stubs**, not renaming the canonical archive root.

### Finding 5: Adopter doc examples add noise (Severity: Low)

Framework integration examples use `docs/changelog` as a **generic adopter path**; distinct from ai-dev-kit’s canonical layout but contributes to “which changelog folder?” confusion when reading framework docs in-repo.

---

## User Pain Points

- **Dual sidebar / pillar entries** in the documentation portal for one conceptual area.
- **Ambiguous SoT** when searching the repo for “changelog” paths.
- **Stale links** from archive index to the legacy tree.
- **Stray duplicates** under `docs/knowledge/` that look like a second archive.

---

## Recommendations

- [ ] **R1:** Execute phased consolidation under **E05:S01:T76** (inventory → move unique legacy files → fix inbound links → remove empty legacy dirs → portal de-extension).
- [ ] **R2:** Hash-compare and remove `docs/knowledge/changelog-and-release-notes/` duplicates after confirming identity with canonical archive.
- [ ] **R3:** Add a guard (pytest or validator) preventing re-creation of `docs/changelog/` or knowledge mirror paths.
- [ ] **R4:** Cross-link finding into **FR-039** / **E05:S01:T39** review checklist (changelog pillar hygiene item).
- [ ] **R5:** Clarify in `docs/changelog-and-release-notes/README.md` that this pillar is the sole detailed-archive home (root `CHANGELOG.md` remains summary).

**Priority Order:**

1. R1 (scoped file moves + link repair — no bulk archive rename)
2. R2 (knowledge mirror cleanup)
3. R3 (regression guard)
4. R4–R5 (documentation alignment)

---

## Affected Areas

**Affected Components:**

- [x] Documentation
- [x] User Flows (onboarding / docs portal navigation)
- [ ] UI Components
- [ ] Features

**Specific Areas:**

- `docs/changelog/`, `docs/changelog-and-release-notes/`, `docs/knowledge/changelog-and-release-notes/`
- `portal/README.md` and Docusaurus sidebar config
- `CHANGELOG_ARCHIVE.md`, selected GitHub release notes
- `rw-config.yaml` (verify only — **no change required**)

---

## Supporting Evidence

**Research Artifacts:**

- Investigation summary (2026-06-04 agent session): canonical ~1,111 archive files vs legacy 1 file vs knowledge mirror 11 files
- `rw-config.yaml` `changelog_dir` binding
- `portal/README.md` legacy extension row

**Quotes or Examples:**

- User intent: merge duplicate changelog directory trees after noticing both `docs/changelog/` and `docs/changelog-and-release-notes/`.

---

## Next Steps

- [x] Atomic intake: UXR-018 + **E05:S01:T76** + board wiring (2026-06-04). **AC1** bidirectional links satisfied.
- [ ] Run **IPW** for **E05:S01:T76** before implementation edits.
- [ ] Implement consolidation only after explicit user authorization (`implement` or `RW E05:S01:T76`).

---

## Dependencies

**Blocks:**

- Single clear changelog pillar for adopters and portal readers.
- Completion criteria for changelog slice of **FR-039** legacy hygiene.

**Blocked By:**

- **IPW gate** (FR-083) for file moves and validator work.

**Related Work:**

- **E05:S01:T39** / **FR-039** — broader legacy review (changelog is one checklist item).
- **E07:S01:T10** / **UXR-013** — root/docs hygiene (complementary scope).
- **E05:S09** / **FR-066** — Docusaurus canonical docs paths.

---

## Intake Decision

**Intake Status:** INTAKE  
**Intake Date:** 2026-06-04  
**Intake By:** Agent (atomic intake session)

**Decision Flow Results:**

- [x] Story Match Found: Epic 5, Story 1 (FR Repo — maintainer-directed anchor) → Task **T76**
- [ ] New Story Created
- [ ] New Epic Created

**Assigned To:**

- Epic: 5 — Documentation Management
- Story: 1 — FR Repo (historical registry; user-requested anchor)
- Task: 76 — Changelog directory consolidation (UXR-018)
- Version: `v0.5.1.76+0` (abstract space on first `RW -k` or implementation release)

**Kanban Links:**

- Epic: [`epic-05.md`](../epics/epic-05/epic-05.md)
- Story: [`story-01-fr-repo.md`](../epics/epic-05/story-01-fr-repo.md)
- Task: [`T76-changelog-directory-consolidation-uxr018.md`](../epics/epic-05/story-01-fr-repo/T76-changelog-directory-consolidation-uxr018.md)

---

## Notes

- User message referenced `docs/changlog/` — no such path; investigation target is **`docs/changelog/`**.
- Consolidation **does not** change `changelog_dir` in `rw-config.yaml`.
- Symmetric id **UXR-018 → T76** is optional convenience, not a governance requirement (KG-R6).

---

## References

- [Changelog management policy](../../../architecture/standards-and-adrs/changelog-management-policy.md)
- [Book repo docs scope](../../../maintenance/book-repo-docs-scope.md) — KEEP `docs/changelog-and-release-notes/`

---

_This UXR follows the Kanban Framework UXR template. Implementation is gated by IPW + explicit execution authorization._
