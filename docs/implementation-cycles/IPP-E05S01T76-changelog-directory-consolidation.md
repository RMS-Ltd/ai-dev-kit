---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-04T14:00:00Z
expires_at: null
housekeeping_policy: keep
---

# E05:S01:T76 — Planning: Spec, Tests, Implementation Plan (IPW)

**Host Task:** [`T76-changelog-directory-consolidation-uxr018.md`](../project-management/kanban/epics/epic-05/story-01-fr-repo/T76-changelog-directory-consolidation-uxr018.md) **(E05:S01:T76)**  
**Planning for:** [UXR-018](../project-management/kanban/fr-br/UXR-018-changelog-directory-consolidation.md)  
**Status:** Approved

> **IPW:** Consolidated IPP per FR-042 / FR-083. Bidirectional wiring to host task **Input** and **References** is mandatory before implementation.

---

## 1. Requirements (Ascertained Baseline)

### 1.1 Functional requirements (ascertained)

| ID | Requirement | Source |
| -- | ----------- | ------ |
| RF1 | Inventory: SHA256-compare legacy, knowledge mirror, canonical; record manifest | UXR-018; T76 AC2 |
| RF2 | Migrate unique legacy archive into `changelog-archive/` as `CHANGELOG_v0.4.14.4+1.md` | T76; UXR Finding 3 |
| RF3 | Remove knowledge mirror; move mirror-only files to canonical; delete byte-identical copies | UXR R2; T76 AC2 |
| RF4 | Remove empty `docs/changelog/` (no redirect stubs) | T76 AC2 |
| RF5 | Repair active inbound links in `CHANGELOG_ARCHIVE.md`, `GITHUB_RELEASE_v0.4.14.4+1.md` | T76 AC3 |
| RF6 | Portal: remove legacy sidebar + README row; extend canonical README | T76 AC5 |
| RF7 | Pytest regression guard for forbidden paths and portal/config checks | UXR R3 |
| RF8 | Consolidation manifest; FR-039 review item tick | T76; FR-039 |
| RF9 | IPP linked from task; UXR IPW step complete | T76 AC6 |

### 1.2 Non-functional requirements (ascertained)

| ID | Requirement | Source |
| -- | ----------- | ------ |
| RNF1 | No bulk rename of `changelog-archive/CHANGELOG_v*.md` | IPP E7:S01:T11 RNF3 |
| RNF2 | Do not change `rw-config.yaml` `changelog_dir` | T76 |
| RNF3 | No mass-rewrite of historical changelog bodies | UXR |
| RNF4 | Framework adopter `docs/changelog` examples unchanged | UXR Finding 5 |
| RNF5 | Release via RW E05:S01:T76 | Project policy |

### 1.3 Invariants and boundaries

- **Invariants:** Canonical pillar = `docs/changelog-and-release-notes/` + root `CHANGELOG.md`; RW writes to existing `changelog_dir`.
- **In scope:** Legacy tree, knowledge mirror, active index links, portal IA, pytest guard, manifest.
- **Out of scope:** Bulk archive renames, `rw-config` changes, adopter integration-examples paths.

---

## 2. Specification

### 2.1 Goal

Deliver a single changelog documentation pillar under `docs/changelog-and-release-notes/`, with legacy directories removed, portal navigation deduplicated, and executable guards—without renaming the existing ~1,100-file archive corpus.

### 2.2 Specification mapping

| Requirement | Delivery |
| ----------- | -------- |
| RF1–RF4 | Manifest + file moves/deletes per inventory |
| RF5 | Relative links in archive index files |
| RF6 | `portal/sidebars.js`, `portal/README.md`, changelog README |
| RF7 | `tests/test_changelog_directory_layout.py` |
| RF8–RF9 | Maintenance manifest + task/UXR updates |

### 2.3 Constraints

- Prefer `git mv` for forensic traceability where practical.
- Changelog language: “Change implemented” until user verifies fixes.

### 2.4 Status transition intent

- **Current:** TODO (kanban init at `v0.5.1.76+1`).
- **IN PROGRESS:** First implementation change in this task slice.
- **COMPLETE:** AC2–AC7 satisfied with pytest + portal build evidence.

### 2.5 ADR necessity decision

| ID | Trigger | Y/N | Evidence |
| -- | ------- | --- | -------- |
| T1 | Alternatives | N | UXR phased merge selected |
| T2 | Reversibility | N | Git revert |
| T3 | Blast radius | N | Docs + tests only |
| T4 | Precedent | N | `changelog-management-policy.md` |
| T5 | Trade-off | N | — |
| T6 | Governance | N | Pytest only |
| T7 | Supersedes | N | — |

**Outcome:** `EXEMPT` — governing docs: [`changelog-management-policy.md`](../architecture/standards-and-adrs/changelog-management-policy.md), [`book-repo-docs-scope.md`](../maintenance/book-repo-docs-scope.md), UXR-018.

| ID | Exemption | Pass? |
| -- | --------- | ----- |
| E1 | Single locus | Y |
| E2 | No new options | Y |
| E3 | Reversible | Y |
| E4 | Spec in IPP + UXR | Y |
| E5 | Documented NONE | Y |

---

## 3. Test design

| ID | Behavior / layer | Expected check | Covers |
| -- | ---------------- | -------------- | ------ |
| T1 | Layout | `docs/changelog/` absent | AC2 |
| T2 | Layout | `docs/knowledge/changelog-and-release-notes/` absent | AC2 |
| T3 | Links | No `docs/changelog/` in `CHANGELOG_ARCHIVE.md` or `GITHUB_RELEASE_v0.4.14.4+1.md` | AC3 |
| T4 | Config | `changelog_dir` unchanged in `rw-config.yaml` | AC4 |
| T5 | Portal | `portal/sidebars.js` has no `dirName: 'changelog'` | AC5 |

**Implementation:** [`tests/test_changelog_directory_layout.py`](../../tests/test_changelog_directory_layout.py)

---

## 4. Implementation plan

| Step | Action | Deliverable |
| ---- | ------ | ----------- |
| **1** | **[MANDATORY]** T76 `TODO → IN PROGRESS` | Task doc |
| 2 | Write manifest from inventory | `docs/maintenance/changelog-directory-consolidation-manifest.md` |
| 3 | `git mv` legacy file → `CHANGELOG_v0.4.14.4+1.md` | Canonical archive |
| 4 | Move mirror-only files; delete mirror tree | Clean `docs/knowledge/...` |
| 5 | Remove `docs/changelog/` | AC2 |
| 6 | Fix index links | AC3 |
| 7 | Portal + README updates | AC5 |
| 8 | Add pytest | AC2–AC5 |
| 9 | FR-039 review note | Item 4 tick |
| 10 | `npm run build` in `portal/` | FR-069 |
| **N** | **[MANDATORY]** Reconcile status → `COMPLETE` if ACs met | Task doc |
| 11 | **RW E05:S01:T76** BUILD +1 | Release |

### 4.1 Files to create or modify

See §5–§6.

### 4.2 Dependency order

1. Inventory manifest → 2. Moves → 3. Link repair → 4. Portal → 5. Tests → 6. RW

---

## 5. Documentation deliverables

### 5.1 Existing documents to update

| Doc ID | Path | Scope | Tied to |
| ------ | ---- | ----- | ------- |
| D-U1 | `docs/changelog-and-release-notes/README.md` | Single-pillar SoT | RF6 |
| D-U2 | `portal/README.md` | Remove legacy row | RF6 |
| D-U3 | `portal/sidebars.js` | Remove legacy category | RF6 |
| D-U4 | `CHANGELOG_ARCHIVE.md` | Fix link ~9087 | RF5 |
| D-U5 | `GITHUB_RELEASE_v0.4.14.4+1.md` | Fix link | RF5 |
| D-U6 | T76 + UXR-018 | IPP, AC, status | RF9 |
| D-U7 | `ai-dev-kit-project-review.md` | Item 4 done | RF8 |

### 5.2 New documents to create

| Doc ID | Path | Purpose |
| ------ | ---- | ------- |
| D-C1 | This IPP | Planning package |
| D-C2 | `docs/maintenance/changelog-directory-consolidation-manifest.md` | Inventory + actions |

### 5.3 Documentation gaps and explicit non-changes

| Gap / topic | Resolution |
| ----------- | ---------- |
| Adopter `integration-examples-external-projects.md` | NONE — generic paths |
| Bulk `CHANGELOG_v*.md` bodies | NONE — RNF3 |

---

## 6. Documentation housing

| Doc ID | Canonical path | Publication | Lifecycle |
| ------ | -------------- | ----------- | --------- |
| D-C1 | `docs/implementation-cycles/IPP-E05S01T76-changelog-directory-consolidation.md` | NOT_APPLICABLE | evergreen |
| D-C2 | `docs/maintenance/changelog-directory-consolidation-manifest.md` | NOT_APPLICABLE | evergreen |
| D-U1–D-U3 | portal + changelog README | PUBLISHED | evergreen |

**Inbound links:** T76 Input/References; UXR-018 Next Steps.

---

## 7. Success / verification criteria

- [x] AC2: Forbidden dirs absent (pytest T1–T2)
- [x] AC3: Active index links fixed (pytest T3)
- [x] AC4: `changelog_dir` unchanged (pytest T4)
- [x] AC5: Portal sidebar/README updated (`npm run build` fails on pre-existing broken ICW links in epic-02 tasks; changelog sidebar removal verified)
- [x] AC6: IPP linked from task
- [x] AC7: RW **v0.5.1.76+2** on T76
- [x] Manifest complete
- [x] All §5 rows implemented per manifest

---

## References

- [UXR-018](../project-management/kanban/fr-br/UXR-018-changelog-directory-consolidation.md)
- [T76](../project-management/kanban/epics/epic-05/story-01-fr-repo/T76-changelog-directory-consolidation-uxr018.md)
- [changelog-management-policy.md](../architecture/standards-and-adrs/changelog-management-policy.md)
- [FR-083](../project-management/kanban/fr-br/FR-083-global-ipw-gated-implementation-contract.md)
