---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-07T10:00:00Z
expires_at: null
housekeeping_policy: keep
---

# E05:S09:T15 — Planning: Docusaurus adopter-public publish allowlist (FR-114)

**Host Task:** [`T15-docusaurus-adopter-public-publish-allowlist-fr114.md`](../project-management/kanban/epics/epic-05/story-09-docusaurus-documentation-portal/T15-docusaurus-adopter-public-publish-allowlist-fr114.md) **(E05:S09:T15)**  
**Planning for:** [FR-114](../project-management/kanban/fr-br/FR-114-split-documentation-surfaces-docusaurus-public-notion-maintainer-kb.md) (F1, F2, F6, NF1)  
**Status:** Active — implementation authorized

> **IPW (Implementation Planning Workflow):** Consolidated IPP per FR-042 / FR-094.

---

## 1. Requirements (Ascertained Baseline)

### 1.1 Functional requirements

| ID | Requirement | Source |
| -- | ----------- | ------ |
| RF1 | Final include/exclude allowlist in `portal/README.md` | T15 D1; FR-114-F1/F2 |
| RF2 | `docusaurus.config.js` exclude globs enforce allowlist | T15 D2 |
| RF3 | `sidebars.js` adopter-facing categories only | T15 AC2 |
| RF4 | `npm run build` green on allowlisted corpus | T15 AC1 |
| RF5 | Narrow CI path filters in `docusaurus-build.yml` | T15 D3; FR-114-NF1 |
| RF6 | RC ≥ 1 release notes policy + `portal/blog/` scaffold | T15 D4; FR-114-F6 |
| RF7 | Allowlisted corpus: excluded-tree links → GitHub blob URLs | BR-068; RF4 |
| RF8 | Homepage / HomepageFeatures: no in-portal excluded-tree links | FR-068 successor |
| RF9 | `tests/test_portal_fr114_allowlist.py` + fr069 updates | T15 D5 |
| RF10 | Bidirectional IPP ↔ task wiring | FR-042 |

### 1.2 Non-functional requirements

| ID | Requirement | Source |
| -- | ----------- | ------ |
| RNF1 | Preserve `onBrokenLinks` / `onBrokenMarkdownLinks` / `onBrokenAnchors`: `throw` | FR-067 |
| RNF2 | Allowlisted content remains public on GitHub Pages | FR-114-NF2 |
| RNF3 | Post-ship: `RW E05:S09:T15 --art` only | BR-097 |

### 1.3 Allowlist (user-confirmed)

**Include:** `docs/guides/**`, `docs/documentation/**`, `docs/developer-tools/ide-whitelist-guide.md` only.

**Exclude:** `project-management`, `implementation-cycles`, `maintenance`, `analysis`, `knowledge`, `journals`, `architecture`, `governance`, `changelog-and-release-notes`, `developer-tools/ide-whitelist-uat-log.md`.

---

## 2. Specification

### 2.1 Goal

Rescope Docusaurus to an adopter-public allowlist so maintainer corpora no longer gate production builds.

### 2.4 Status transition intent

- **Current:** TODO → **IN PROGRESS** at implementation Step 1
- **COMPLETE:** When AC1–AC5 evidenced + `RW E05:S09:T15 --art`

### 2.5 ADR necessity decision

**Outcome:** `EXEMPT` — implements [FR-114](../project-management/kanban/fr-br/FR-114-split-documentation-surfaces-docusaurus-public-notion-maintainer-kb.md) §Decision Record. Three-surface ADR is **E05:S08:T04** (F5).

---

## 3. Test design

| ID | Check | Covers |
| -- | ----- | ------ |
| T1 | Config exclude globs present | RF2 |
| T2 | Sidebar dirNames ⊆ allowlist | RF3 |
| T3 | README FR-114 allowlist section | RF1, RF6 |
| T4 | CI explicit allowlist paths | RF5 |
| T5 | Pytest banned-prefix scan on allowlisted corpus | RF7 |
| T6 | `npm run build` | RF4 |
| T7 | No `/docs/architecture/` or `/docs/project-management/` in homepage JSX | RF8 |

---

## 4. Implementation plan

1. **Step 1 (mandatory first):** E05:S09:T15 `TODO` → `IN PROGRESS`.
2. Wave A: `docusaurus.config.js`, `sidebars.js`, `portal/README.md`, homepage UX.
3. Wave B: Link remediation in allowlisted `docs/` (BR-068 Strategy A).
4. Wave C: `docusaurus-build.yml` paths + `portal/blog/` RC scaffold.
5. Wave D: `test_portal_fr114_allowlist.py`; update fr068/fr069; green build.
6. `RW E05:S09:T15 --art`.
7. **Final step:** Reconcile status → `COMPLETE` if AC satisfied.

---

## 5. Documentation deliverables

| Doc ID | Path | Action |
| ------ | ---- | ------ |
| D1 | `docs/implementation-cycles/IPP-E05S09T15-*.md` | CREATE |
| D2 | `portal/README.md` | UPDATE |
| D3 | `portal/docusaurus.config.js` | UPDATE |
| D4 | `portal/sidebars.js` | UPDATE |
| D5 | `.github/workflows/docusaurus-build.yml` | UPDATE |
| D6 | `portal/blog/RELEASE-NOTES-POLICY.md` | CREATE |
| D7 | Allowlisted `docs/guides/**`, `docs/documentation/**`, ide-whitelist-guide | UPDATE |
| D8 | `tests/test_portal_fr114_allowlist.py` | CREATE |

---

## 6. Documentation housing

| Deliverable | Publication | Lifecycle |
| ----------- | ----------- | --------- |
| IPP | NOT_APPLICABLE | evergreen |
| `portal/README.md` | PUBLISHED (meta) | evergreen |
| Allowlisted docs | PUBLISHED | evergreen |

---

## 7. Success / verification criteria

- [ ] `npm run build` passes (strict hooks unchanged)
- [ ] Sidebar adopter-public only
- [ ] README documents allowlist + CI rationale + RC policy
- [ ] CI narrowed path filters + tests green
- [ ] IPP wired; kboard `—IPP—` on release
- [ ] `RW E05:S09:T15 --art` complete

---

## References

- [FR-114](../project-management/kanban/fr-br/FR-114-split-documentation-surfaces-docusaurus-public-notion-maintainer-kb.md)
- [T15 task doc](../project-management/kanban/epics/epic-05/story-09-docusaurus-documentation-portal/T15-docusaurus-adopter-public-publish-allowlist-fr114.md)
- [portal/README.md](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/portal/README.md)
