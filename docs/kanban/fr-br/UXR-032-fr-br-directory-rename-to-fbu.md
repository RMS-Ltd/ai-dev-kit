---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-23T12:00:00Z
expires_at: null
housekeeping_policy: keep
---

# User Experience Research: Rename intake directory `fr-br/` → `fbu/`

**Type:** User Experience Research (UXR)  
**Submitted:** 2026-06-23  
**Submitted By:** User (operator)  
**Priority:** MEDIUM  
**Status:** INTAKE  
**Code:** UXR-032  
**Last updated:** 2026-06-23  
**Implementing Task:** [E04:S19:T14](../epics/epic-04/story-19-fr-br-uxr-abstract-governance-and-intake/T14-fr-br-directory-rename-to-fbu-uxr032.md)

---

## Summary

Rename the kanban intake corpus directory from `docs/kanban/fr-br/` to `docs/kanban/fbu/` so on-disk structure matches the canonical **FBU** collective terminology already adopted for boards, ledgers, and governance docs ([FR-086](FR-086-canonical-supporting-kanban-fbu-doc-naming-and-fbu-collective-terminology.md), [UXR-008](UXR-008-kboard-fbuboard-default-naming-adoption.md)).

---

## Research Objective

Does aligning the intake **directory** name with the **FBU** collective term reduce operator confusion, shorten paths in agent context, and complete the naming normalization started in E04:S19:T06 — without breaking adopters, installers, or the thousands of existing `fr-br/` cross-links?

---

## Methodology

**Research Method:** Operator experience review + repository impact scan  
**Participants:** Maintainer / primary operator  
**Duration:** Single session (2026-06-23)  
**Tools/Platforms:** Repo grep, `rw-config.yaml`, framework install scripts, greenfield-install mirror inventory

**Research Details:**

- Compared terminology in `intake-structure.md`, `intake-completed.md`, and `kboard.md` (already **FBU**-labelled) against the persistent `fr-br/` path segment.
- Scanned framework defaults (`fr_br_root`, `detect_fr_br_root`, UKW workflow YAML) and install output contracts.
- Confirmed individual issue filenames (`FR-*.md`, `BR-*.md`, `UXR-*.md`) remain correct per FR-086 — only the **parent directory** is misaligned.

---

## Key Findings

1. **Terminology drift:** Docs and boards say **FBU**; the directory and config key still say **`fr-br`** / **`fr_br_root`** — a daily mismatch for operators and agents.
2. **Small surface, large ripple:** One directory rename (~254 markdown files) fans out to `rw-config.yaml`, RW/UKW/intake scripts, packaged `greenfield-install/`, validator defaults, skills, templates, and corpus-wide relative links (`../../fr-br/…`).
3. **Install contract:** Fresh installs via `install_release_workflow.py` mode C **detect and emit** `fr_br_root`; adopters and brownfield repos will need read-compat or migration guidance ([BR-083](BR-083-rw-install-default-patterns-mismatch-fresh-kanban-layout.md) precedent).
4. **FR-086 boundary holds:** Individual report prefixes must **not** change — only the containing folder and config key naming.
5. **Prior art:** E04:S19:T11 (UXR-017) lowercase path migration demonstrates the expected pattern: policy → framework defaults → corpus sweep → greenfield sync → phased read-tolerance.

---

## User Pain Points

- Typing / remembering `fr-br` when every other intake surface uses **FBU** or **intake-*** naming.
- Agent cold-start and intake skills reference `fr-br/` while governance policy says **FBU**.
- New adopters see `fr_br_root` in generated `rw-config.yaml` — inconsistent with shipped terminology.

---

## Recommendations

- [ ] **R1:** Adopt canonical path `docs/kanban/fbu/` (relative to `kanban_root`: `fbu/`).
- [ ] **R2:** Rename config key `fr_br_root` → `fbu_root` in schema, `rw-config.yaml`, and install detection (`detect_fbu_root` with `fr_br_root` read-compat for one transition window).
- [ ] **R3:** Physical `git mv` of `docs/kanban/fr-br/` → `docs/kanban/fbu/`; update all in-repo relative links (exclude immutable changelog archive unless policy allows).
- [ ] **R4:** Update `packages/frameworks/**` + `greenfield-install/**` mirrors; run `sync_greenfield_install.py`.
- [ ] **R5:** Document adopter migration note (brownfield: optional symlink `fr-br` → `fbu` or one-time link sweep; fresh install gets `fbu/` only).
- [ ] **R6:** Add validator or CI grep guard preventing reintroduction of `docs/kanban/fr-br` in new writes (phased: warn → error).

**Priority Order:**

1. R1 + R2 (canonical path + config — framework SoT)
2. R3 + R4 (corpus + package install output)
3. R5 + R6 (adopter migration + drift guard)

---

## Affected Areas

**Affected Components:**

- [x] Documentation
- [x] Features (install / RW / UKW / intake workflows)
- [ ] UI Components
- [ ] User Flows
- [x] Other: `rw-config.yaml`, validators, agent skills, KMA brownfield paths

**Specific Areas (non-exhaustive ripple inventory):**

| Surface | Current | Proposed |
| -------- | -------- | -------- |
| Intake directory | `docs/kanban/fr-br/` | `docs/kanban/fbu/` |
| `rw-config.yaml` key | `fr_br_root` | `fbu_root` (+ read-compat alias) |
| Install detection | `detect_fr_br_root()` | `detect_fbu_root()` |
| UKW workflow YAML | `fr_br_root: fr-br` | `fbu_root: fbu` |
| Intake guides / skills | `fr-br/*.md` paths | `fbu/*.md` |
| `intake-structure.md` links | `fr-br/FR-…` | `fbu/FR-…` |
| Greenfield mirror | same as packages | synced |
| Historical changelogs | frozen references | optional redirect note only |

**Estimated corpus touch (2026-06-23 scan):** 250+ files under `fr-br/`; 100+ framework/config references to `fr_br_root` / `fr-br` path strings across active (non-archive) trees.

---

## Supporting Evidence

**Research Artifacts:**

- [FR-086](FR-086-canonical-supporting-kanban-fbu-doc-naming-and-fbu-collective-terminology.md) — FBU collective term; individual prefixes unchanged
- [UXR-008](UXR-008-kboard-fbuboard-default-naming-adoption.md) / [E04:S19:T06](../epics/epic-04/story-19-fr-br-uxr-abstract-governance-and-intake/T06-fbu-meta-normalization-and-intake-governance-uxr008-fr086-fr073.md) — prior normalization scope (boards + supporting docs; directory deferred)
- [intake-structure.md](../intake-structure.md) — already titled **FBU Structure** but links into `fr-br/`
- `rw-config.yaml` (repo root) — `fr_br_root: docs/kanban/fr-br`

---

## Next Steps

- [x] Atomic intake: UXR-032 + E04:S19:T14 + story checklist wiring
- [ ] **IPW** on E04:S19:T14 — migration mapping, compat window, test matrix
- [ ] **IDW** execution — directory move + framework sweep + greenfield sync
- [ ] **RW** release on epic-4 branch

---

## Dependencies

**Blocks:**

- Clean completion of FBU naming normalization (FR-086 residual directory gap)

**Blocked By:**

- None (orthogonal to in-flight E08/E06 delivery tasks)

**Related Work:**

- [FR-086](FR-086-canonical-supporting-kanban-fbu-doc-naming-and-fbu-collective-terminology.md)
- [UXR-008](UXR-008-kboard-fbuboard-default-naming-adoption.md)
- [UXR-017](../epics/epic-04/story-19-fr-br-uxr-abstract-governance-and-intake/T11-kanban-epic-story-path-lowercase-naming-uxr017.md) — cross-cutting path migration pattern
- [FR-118](FR-118-promote-kanban-to-docs-kanban-retire-project-management-shell.md) — mentions `fr_br_root` in config phase (coordinate if both land)

---

## Intake Decision

**Intake Status:** INTAKE  
**Intake Date:** 2026-06-23  
**Intake By:** Agent (atomic intake session)

**Decision Flow Results:**

- [x] Story Match Found: Epic 4, Story 19 → Task T14

**Assigned To:**

- Epic: 4 — Kanban Framework
- Story: 19 — FR/BR/UXR abstract governance and intake
- Task: T14 — `fr-br/` directory rename to `fbu/` (UXR-032)
- Version: *(pending RW)*

**Kanban Links:**

- Epic: [`docs/kanban/epics/epic-04/epic-04.md`](../epics/epic-04/epic-04.md)
- Story: [`docs/kanban/epics/epic-04/story-19-fr-br-uxr-abstract-governance-and-intake.md`](../epics/epic-04/story-19-fr-br-uxr-abstract-governance-and-intake.md)
- Task: [E04:S19:T14](../epics/epic-04/story-19-fr-br-uxr-abstract-governance-and-intake/T14-fr-br-directory-rename-to-fbu-uxr032.md)

---

## Notes

- **Scope discipline:** Directory + config key + link sweep only. Do **not** rename `FR-*.md` / `BR-*.md` / `UXR-*.md` files themselves.
- **Archive policy:** Changelog archive and four-surface reports may retain historical `fr-br` strings (immutable); active docs and framework SoT must converge on `fbu/`.
- **Config compat:** Recommend read-tolerance for `fr_br_root` in validators/installers for ≥1 release cycle (mirror UXR-017 phased migration).

---

## References

- [Kanban governance policy](../../../packages/frameworks/kanban/policies/kanban-governance-policy.md)
- [FR_BR_INTAKE_GUIDE](../../../packages/frameworks/kanban/FR_BR_INTAKE_GUIDE.md)
- [rw-config schema](../../../packages/frameworks/workflow-mgt/config/rw-config-schema.md)
