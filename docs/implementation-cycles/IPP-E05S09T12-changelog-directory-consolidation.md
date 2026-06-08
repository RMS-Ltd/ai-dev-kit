---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-04T14:00:00Z
expires_at: null
housekeeping_policy: keep
---

# E05:S09:T12 — Planning: Spec, Tests, Implementation Plan (IPW)

**Host Task:** [`T12-changelog-directory-consolidation-uxr018.md`](../kanban/epics/epic-05/story-09-docusaurus-documentation-portal/T12-changelog-directory-consolidation-uxr018.md) **(E05:S09:T12)**  
**Planning for:** [UXR-018](../kanban/fr-br/UXR-018-changelog-directory-consolidation.md)  
**Status:** Approved  

**Host:** **E05:S09:T12** only. Orphan release labels **v0.5.1.76+1/+2** retired — see [coordinate remediation](../maintenance/coordinate-remediation-uxr018-e05s09t12.md).

> **IPW:** Consolidated IPP per FR-042 / FR-083. Bidirectional wiring to host task **Input** and **References** is mandatory before implementation.

---

## 1. Requirements (Ascertained Baseline)

### 1.1 Functional requirements (ascertained)

| ID | Requirement | Source |
| -- | ----------- | ------ |
| RF1 | Inventory: SHA256-compare legacy, knowledge mirror, canonical; record manifest | UXR-018; T12 AC2 |
| RF2 | Migrate unique legacy archive into `changelog-archive/` as `CHANGELOG_v0.4.14.4+1.md` | T12; UXR Finding 3 |
| RF3 | Remove knowledge mirror; move mirror-only files to canonical; delete byte-identical copies | UXR R2; T12 AC2 |
| RF4 | Remove empty `docs/changelog/` (no redirect stubs) | T12 AC2 |
| RF5 | Repair active inbound links in `CHANGELOG_ARCHIVE.md`, `GITHUB_RELEASE_v0.4.14.4+1.md` | T12 AC3 |
| RF6 | Portal: remove legacy sidebar + README row; extend canonical README | T12 AC5 |
| RF7 | Pytest regression guard for forbidden paths and portal/config checks | UXR R3 |
| RF8 | Consolidation manifest; FR-039 review item tick | T12; FR-039 |
| RF9 | IPP linked from task; UXR IPW step complete | T12 AC6 |

### 1.2 Non-functional requirements (ascertained)

| ID | Requirement | Source |
| -- | ----------- | ------ |
| RNF1 | No bulk rename of `changelog-archive/CHANGELOG_v*.md` | IPP E7:S01:T11 RNF3 |
| RNF2 | Do not change `rw-config.yaml` `changelog_dir` | T12 |
| RNF3 | No mass-rewrite of historical changelog bodies | UXR |
| RNF4 | Framework adopter `docs/changelog` examples unchanged | UXR Finding 5 |
| RNF5 | Release via **RW E05:S09:T12** (**v0.5.9.12+2**) | Project policy |

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

- **COMPLETE:** AC2–AC7 satisfied with pytest + portal build evidence (shipped **v0.5.9.12+2**).

### 2.5 ADR necessity decision

**Outcome:** `EXEMPT` — governing docs: [`changelog-management-policy.md`](../architecture/standards-and-adrs/changelog-management-policy.md), [`book-repo-docs-scope.md`](../maintenance/book-repo-docs-scope.md), UXR-018.

---

## 3. Test design

| ID | Behavior / layer | Expected check | Covers |
| -- | ---------------- | -------------- | ------ |
| T1 | Layout | `docs/changelog/` absent | AC2 |
| T2 | Layout | `docs/knowledge/changelog-and-release-notes/` absent | AC2 |
| T3 | Links | No `docs/changelog/` in `CHANGELOG_ARCHIVE.md` or `GITHUB_RELEASE_v0.4.14.4+1.md` | AC3 |
| T4 | Config | `changelog_dir` unchanged in `rw-config.yaml` | AC4 |
| T5 | Portal | `portal/sidebars.js` has no `dirName: 'changelog'` | AC5 |

**Implementation:** [`tests/test_changelog_directory_layout.py`](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/tests/test_changelog_directory_layout.py)

---

## 4. Implementation plan

| Step | Action | Deliverable |
| ---- | ------ | ----------- |
| 1 | Inventory manifest | `docs/maintenance/changelog-directory-consolidation-manifest.md` |
| 2–8 | Moves, link repair, portal, pytest | Per manifest |
| 11 | **RW E05:S09:T12** BUILD +1 | Release (**v0.5.9.12+2**) |

---

## 5–6. Documentation deliverables / housing

| Doc ID | Canonical path |
| ------ | -------------- |
| D-C1 | `docs/implementation-cycles/IPP-E5S9T12-changelog-directory-consolidation.md` |
| D-C2 | `docs/maintenance/changelog-directory-consolidation-manifest.md` |
| Host | `docs/kanban/epics/epic-05/story-09-docusaurus-documentation-portal/T12-*.md` |

**Inbound links:** T12 Input/References; UXR-018 Next Steps.

---

## 7. Success / verification criteria

- [x] AC2–AC7 satisfied (**v0.5.9.12+2**)

---

## References

- [UXR-018](../kanban/fr-br/UXR-018-changelog-directory-consolidation.md)
- [T12](../kanban/epics/epic-05/story-09-docusaurus-documentation-portal/T12-changelog-directory-consolidation-uxr018.md)
- [Coordinate remediation](../maintenance/coordinate-remediation-uxr018-e05s09t12.md)
- [changelog-management-policy.md](../architecture/standards-and-adrs/changelog-management-policy.md)
