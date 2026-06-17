---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-10T22:00:00Z
expires_at: null
housekeeping_policy: keep
---

# E06:S09:T30 — Planning: Spec, Tests, Implementation Plan (IPW)

**Host Task:** [`T30-kanban-installer-log-epic-path-padding-br107.md`](../kanban/epics/epic-06/story-09-ai-dev-kit-installation-and-adopter-integration/T30-kanban-installer-log-epic-path-padding-br107.md) **(E06:S09:T30)**  
**Planning for:** [BR-107](../kanban/fr-br/BR-107-kanban-installer-log-epic-path-padding-mismatch.md) · triage **F21**  
**Status:** Approved (2026-06-10 — ready for implementation)

---

## 1. Requirements (Ascertained Baseline)

### 1.1 Functional requirements (ascertained)

| ID | Requirement | Source (FR/BR/Task) |
| -- | ----------- | ------------------- |
| RF1 | Fresh Kanban v3.2 install success stdout must show **padded** epic destination paths (`epics/epic-01/epic-01.md`) matching on-disk writes | BR-107, T30 AC, F21 |
| RF2 | Success log lines must use the same path formatter as the installer write path (`kp.epic_dir_name` / `kp.epic_doc_basename` or equivalent relative path built from them) | BR-107 Expected, root-cause analysis |
| RF3 | Dry-run install messages that reference **destination** epic paths must use padded segments (audit lines 370–377) | T30 implementation hints, BR-107 |
| RF4 | On-disk kanban tree layout remains UXR-017 compliant (`epic-{NN}`); no installer behaviour change to paths written | T30 AC, BR-107 AC |
| RF5 | Triage matrix **F21** marked resolved with evidence path after verification | T30 upstream (SBL attempt 05) |

### 1.2 Non-functional requirements (ascertained)

| ID | Requirement | Source |
| -- | ----------- | ------ |
| RNF1 | Minimal diff — log/stdout strings only; no migration or layout refactor | BR-107 severity LOW |
| RNF2 | Greenfield install mirror synced per FR-110 when `packages/frameworks/**` changes | FR-110 |
| RNF3 | Regression-safe: existing v3.2 fresh-install fingerprint and epic template tests remain green | T27/T08 test suite |

### 1.3 Invariants and boundaries

- **Invariants:** `kanban_paths.py` is the write-default SoT (UXR-017 / ADR-015); `migration_log[].path` already records padded relative paths — only human-facing `print` strings are wrong.
- **In scope:** `migrate_structure.py` epic-install stdout/dry-run destination hints; pytest coverage; BR-107 status; optional triage matrix F21 disposition.
- **Out of scope:** Changing on-disk directory naming; story/task install log padding (unless identical unpadded bug found — none reported); template **search** glob hints inside placeholder files (lines 408–409 reference template pack layout, not install destination); reopening UXR-017.

---

## 2. Specification

### 2.1 Goal

Operators running Kanban v3.2 `--mode fresh` see install success lines that match the epic directories and files actually created (`epic-01` … `epic-10`), eliminating cosmetic mismatch (`epic-1`) that caused confusion during Starborn Legacy install attempt 05 (F21).

### 2.2 Specification mapping from ascertained requirements

| RF | Behaviour |
| -- | --------- |
| RF1–RF2 | Replace hard-coded `epics/epic-{epic_num}/epic-{epic_num}.md` in the success `print` (currently ~L399–401) with `epics/{kp.epic_dir_name(epic_num)}/{kp.epic_doc_basename(epic_num)}` — same helpers used at L339 and L387. |
| RF3 | Dry-run branch (~L364–377): when messaging implies install destination, use padded helpers; template-only hints may keep `kp.segment_number(epic_num)` where they describe template pack filenames. |
| RF4 | No changes to `epic_dir.mkdir`, `epic_doc.write_text`, or `migration_log` path recording. |
| RF5 | Post-verify doc updates only. |

### 2.3 Constraints

- Single source of truth: `packages/frameworks/kanban/scripts/kanban_paths.py` segment formatters.
- Do not introduce unpadded epic segments in new log output.
- Avoid substring false positives in tests (`epic-1` vs `epic-10`): assert `\d{2}` padded segments or negative match for single-digit epic dir segments.

### 2.4 Status transition intent (mandatory for IPW-derived implementation tasks)

- **Current task status:** TODO
- **Transition trigger to IN PROGRESS:** First non-planning implementation change lands (IPP §4 Step 1).
- **Transition trigger to COMPLETE:** Pytest evidence + fresh-install stdout shows padded paths; BR-107 AC checked; forensic marker on task doc.
- **Atomic propagation requirement:** Task doc status and `kboard.md` row update in same RW Step 7 change set.
- **Owner:** IDW / implementation execution (not this IPW run).

### 2.5 ADR necessity decision (mandatory — IPW Phase 5.0)

| ID | Trigger | Y/N | Evidence |
| -- | ------- | --- | -------- |
| T1 | Alternatives | N | Single fix: reuse existing `kanban_paths` helpers |
| T2 | Reversibility | N | Log-string revert in one PR |
| T3 | Blast radius | N | Confined to `migrate_structure.py` + tests |
| T4 | Precedent | N | Implements existing UXR-017 policy; no new pattern |
| T5 | Constraint trade-off | N | No security/perf/versioning trade-off |
| T6 | Governance contract | N | No RW/IPW/validator gate changes |
| T7 | Supersedes | N | Aligns with UXR-017; does not contradict ADR-015 |

**Outcome:** `EXEMPT`

| ID | Exemption | Pass? | Evidence |
| -- | --------- | ----- | -------- |
| E1 | Single locus | Y | `migrate_structure.py` + tests only |
| E2 | No new options | Y | Implements UXR-017 / `kanban_paths.py` SoT |
| E3 | Reversible in one task | Y | Normal git revert |
| E4 | Spec elsewhere | Y | UXR-017 + BR-107 + this IPP §2 |
| E5 | Documented NONE | Y | §5.3 cites governing docs |

**Governing docs:** [UXR-017](../kanban/fr-br/UXR-017-kanban-epic-story-path-lowercase-naming.md), [ADR-015](../architecture/standards-and-adrs/ADR-015-kanban-filesystem-path-naming.md), `kanban_paths.py`.

---

## 3. Test design

| ID | Behavior / layer | Expected check | Maps to |
| -- | ---------------- | -------------- | ------- |
| T1 | Fresh install stdout — epic 1 destination | Combined stdout/stderr contains `epics/epic-01/epic-01.md` on success line | RF1, RF2 |
| T2 | Fresh install stdout — no unpadded epic-1 destination | No match for unpadded destination pattern `epics/epic-1/epic-1.md` (regex: single-digit segment after `epic-`) | RF1 |
| T3 | Fresh install stdout — epic 5 (two-digit padding) | Contains `epics/epic-05/epic-05.md` | RF1 |
| T4 | Dry-run fresh install | Dry-run output does not advertise unpadded destination `epics/epic-7/` when E07 is installed (use padded `epic-07` if destination shown) | RF3 |
| T5 | On-disk layout regression | Existing `test_fresh_install_v32_e07_not_placeholder` / v32 fingerprint tests still pass | RF4, RNF3 |
| T6 | Unit-level (optional fast path) | `KanbanStructureMigrator` epic install with `capsys` asserts padded arrow suffix | RF2 |

**Implementation note:** Prefer extending `tests/kanban/test_install_epic_22_23_templates.py` (already asserts padded on-disk paths and parses install stdout) or add `tests/kanban/test_migrate_structure_log_epic_padding.py` with subprocess against `install_kanban_framework.py --mode fresh`.

---

## 4. Implementation plan

| Step | Action | Deliverable |
| ---- | ------ | ----------- |
| **1** | **[MANDATORY] Transition task `E06:S09:T30` status `TODO → IN PROGRESS`** in task doc. Update `Last updated` date. | Task doc `Status` = `IN PROGRESS` |
| 2 | In `migrate_structure.py` `_install_v32_core_epics` (or equivalent epic-install method), replace unpadded success log at ~L399–401 with `epics/{kp.epic_dir_name(epic_num)}/{kp.epic_doc_basename(epic_num)}`. | Padded success lines |
| 3 | Audit dry-run branch ~L364–377; align any **destination** path text with `kp` helpers; keep template-search hints accurate for pack layout. | Consistent dry-run messaging |
| 4 | Add/update pytest (T1–T4): subprocess fresh install and/or `capsys` on migrator; include negative assertion for unpadded `epic-N` destination segments. | Green tests |
| 5 | Run targeted pytest: `tests/kanban/test_install_epic_22_23_templates.py`, `tests/kanban/test_kanban_v32_fresh_install.py`, new/updated log-padding tests. | Pytest evidence |
| 6 | `python scripts/sync_greenfield_install.py` — mirror `migrate_structure.py` to `greenfield-install/` (FR-110). | Greenfield parity |
| 7 | Update [BR-107](../kanban/fr-br/BR-107-kanban-installer-log-epic-path-padding-mismatch.md) status/AC when verified; update triage matrix F21 disposition if present. | Intake closure |
| 8 | **`RW E06:S09:T30 --art`** — version, changelog, RW Step 7 (task, BR, `kboard.md`), commit, local tag. | Local release |
| **N** | **[MANDATORY] Reconcile task `E06:S09:T30` status** to actual implementation state: if all ACs satisfied with evidence → `COMPLETE` + `✅ COMPLETE (v{version})`; if ongoing → `IN PROGRESS`; if blocked → `BLOCKED` + reason. Update `Last updated`. | Task doc reflects actual state |

**RW verification / FBU wave rule (BR-097):** Step 8 uses **`RW E06:S09:T30 --art`** only (BUILD +1). Do not prescribe `--doc-policy-zero` for follow-on releases.

### 4.1 Files to create or modify

| File | Action |
| ---- | ------ |
| `packages/frameworks/kanban/scripts/migrate_structure.py` | UPDATE — log strings ~L370–377, ~L399–401 |
| `tests/kanban/test_install_epic_22_23_templates.py` or `tests/kanban/test_migrate_structure_log_epic_padding.py` | UPDATE or CREATE — T1–T4 |
| `greenfield-install/packages/frameworks/kanban/scripts/migrate_structure.py` | UPDATE — FR-110 mirror |
| `docs/kanban/fr-br/BR-107-*.md` | UPDATE — status on fix |
| `docs/knowledge/analysis/projects/starborn-legacy-install-triage-matrix.md` | UPDATE (if F21 row exists) — resolved |
| `docs/kanban/epics/epic-06/story-09-ai-dev-kit-installation-and-adopter-integration/T30-*.md` | UPDATE — Step 1 / final reconciliation |

### 4.2 Dependency order

1. Code fix (`migrate_structure.py`) before tests that assert new behaviour.
2. Tests green before greenfield sync.
3. Greenfield sync before RW commit.
4. RW Step 7 updates kanban surfaces atomically with release.

### 4.3 Documentation implementation steps

1. BR-107 status + AC checkboxes after verification (Step 7).
2. Triage matrix F21 note with transcript path evidence (Step 7).

---

## 5. Documentation deliverables

### 5.1 Existing documents to update

| Doc ID | Path | Action | Scope of change | Tied to |
| ------ | ---- | ------ | --------------- | ------- |
| D-U1 | `packages/frameworks/kanban/scripts/migrate_structure.py` | UPDATE | Padded log strings | RF1–RF3, Step 2–3 |
| D-U2 | `greenfield-install/packages/frameworks/kanban/scripts/migrate_structure.py` | UPDATE | FR-110 mirror | Step 6 |
| D-U3 | `tests/kanban/test_install_epic_22_23_templates.py` (or new test module) | UPDATE/CREATE | T1–T4 | Step 4 |
| D-U4 | `docs/kanban/fr-br/BR-107-kanban-installer-log-epic-path-padding-mismatch.md` | UPDATE | Status, AC, fix version | Step 7, RF5 |
| D-U5 | `docs/kanban/epics/epic-06/story-09-ai-dev-kit-installation-and-adopter-integration/T30-kanban-installer-log-epic-path-padding-br107.md` | UPDATE | Status, AC, IPP link (done), version marker | Steps 1, N, 8 |
| D-U6 | `docs/knowledge/analysis/projects/starborn-legacy-install-triage-matrix.md` | UPDATE | F21 resolved (if row present) | RF5 |

### 5.2 New documents to create

| Doc ID | Proposed path | Purpose | Tied to |
| ------ | ------------- | ------- | ------- |
| D-C1 | `docs/implementation-cycles/IPP-E06S09T30-kanban-installer-log-epic-path-padding-br107.md` | This IPP | IPW |

### 5.3 Documentation gaps and explicit non-changes

| Gap / topic | Resolution |
| ----------- | ---------- |
| Adopter-facing install guide | **NONE** — behavioural fix is log accuracy only; no user-doc procedure change |
| New ADR | **NONE** — EXEMPT per §2.5; governed by UXR-017 / ADR-015 |
| Portal / Docusaurus | **NONE** — no `docs/guides/` or `docs/documentation/` deliverables |
| Placeholder epic file template-not-found text (~L408–409) | **NONE** — describes template pack search paths, not install destination; out of BR-107 scope |

---

## 6. Documentation housing

| Doc ID | Canonical path | Publication status | Publication N/A reason | Lifecycle | Inbound links to add |
| ------ | -------------- | ------------------ | ---------------------- | --------- | -------------------- |
| D-C1 | `docs/implementation-cycles/IPP-E06S09T30-kanban-installer-log-epic-path-padding-br107.md` | NOT_APPLICABLE | Maintainer planning artifact | evergreen | T30 Input + References (wired) |
| D-U1 | `packages/frameworks/kanban/scripts/migrate_structure.py` | NOT_APPLICABLE | Framework source | — | — |
| D-U2 | `greenfield-install/packages/frameworks/kanban/scripts/migrate_structure.py` | NOT_APPLICABLE | FR-110 mirror | — | — |
| D-U3 | `tests/kanban/` | NOT_APPLICABLE | Test harness | — | — |
| D-U4 | `docs/kanban/fr-br/BR-107-*.md` | NOT_APPLICABLE | Intake doc | evergreen | T30, RW Step 7 |
| D-U5 | `docs/kanban/epics/epic-06/story-09/.../T30-*.md` | NOT_APPLICABLE | Task SoT | evergreen | IPP bidirectional link |
| D-U6 | `docs/knowledge/analysis/projects/starborn-legacy-install-triage-matrix.md` | NOT_APPLICABLE | Maintainer KB (ADR-026) | evergreen | F21 evidence note |

---

## 7. Success / verification criteria

- [ ] Fresh v3.2 install stdout shows `epics/epic-01/epic-01.md` (and `epic-05`, etc.) on success lines
- [ ] Fresh v3.2 install stdout does **not** show unpadded `epics/epic-1/epic-1.md` destination pattern
- [ ] On-disk layout unchanged: `docs/kanban/epics/epic-NN/` with two-digit padding for epics 1–9
- [ ] Targeted pytest green (new log-padding tests + existing v3.2 install tests)
- [ ] `python scripts/sync_greenfield_install.py --check` green; mirror committed with framework change
- [ ] BR-107 AC checked; F21 triage updated if applicable
- [ ] IPP linked bidirectionally from T30 task doc
- [ ] All §5 UPDATE items implemented or explicitly deferred with reason
- [ ] **Greenfield (§6 `packages/frameworks/`):** `python scripts/sync_greenfield_install.py --check` green; `greenfield-install/` mirror in same change set

---

## References

- [BR-107](../kanban/fr-br/BR-107-kanban-installer-log-epic-path-padding-mismatch.md)
- [UXR-017](../kanban/fr-br/UXR-017-kanban-epic-story-path-lowercase-naming.md)
- [ADR-015](../architecture/standards-and-adrs/ADR-015-kanban-filesystem-path-naming.md)
- [E06:S09:T30](../kanban/epics/epic-06/story-09-ai-dev-kit-installation-and-adopter-integration/T30-kanban-installer-log-epic-path-padding-br107.md)
- [E06:S09:T27](IPP-E06S09T27-kanban-v32-package-rewrite-installer-f9-f17.md) — v3.2 installer context
- [`migrate_structure.py`](../../packages/frameworks/kanban/scripts/migrate_structure.py) — root cause ~L399–401
- [`kanban_paths.py`](../../packages/frameworks/kanban/scripts/kanban_paths.py) — `epic_dir_name`, `epic_doc_basename`
- SBL evidence: `adk-install-into-sbl/attempt-05/transcripts/20260610T183509Z-phase3c-kanban-v3dot2.txt`
