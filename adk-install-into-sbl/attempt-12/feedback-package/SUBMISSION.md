# Starborn Legacy — ADK attempt 12 (guided KMA / issue #3 TSP)

**Session:** `20260630-attempt-12`  
**SBL repo:** [RMS-Ltd/starborn_legacy](https://github.com/RMS-Ltd/starborn_legacy)  
**TSP authority:** [starborn-legacy#3](https://github.com/RMS-Ltd/starborn-legacy/issues/3) (pass 3 · **342 tasks**)  
**ADK pin:** `v0.4.1237`  
**Arm:** **B** — greenfield shell + guided KMA  
**Package status:** **`draft`** — KMA Step 3 sign-off pending · feedback items K-01–K-04 filed  
**Last sync:** 2026-07-01

---

## Outcomes (to date)

| Gate | Result |
|------|--------|
| Greenfield install RC strict | ✅ PASS (after adopter fixes — 21 install issues) |
| KMA ingest + proposal | ✅ Complete |
| TSP authority | ✅ Issue #3 adopted (replaces attempt-11 377-task tree) |
| KMA Step 4 synthesise | ⏸ Blocked on operator sign-off |
| Structural score (pre-synthesise) | **51.59%** — expected (E01–E08 only on disk) |
| RW releases on `dev` | ✅ Through `v0.1.1.2+5` / `v0.9.609` |

---

## Primary feedback (K-01 – K-04)

| ID | Severity | Topic | Evidence |
|----|----------|-------|----------|
| **K-01** | major | Issue #3 E02 RW-only vs 13 workflow-registry entries | [FB-ADK-K01-issue3-e02-workflow-story-collapse.md](FB-ADK-K01-issue3-e02-workflow-story-collapse.md) |
| **K-02** | medium | UKW bulk-stamped board `Last modified:` dates | [FB-ADK-K02-board-timestamp-loss.md](FB-ADK-K02-board-timestamp-loss.md) |
| **K-03** | medium | Task-touch SemVer `+BUILD` on public vernum | [FB-ADK-K03-semver-build-suffix-redundant.md](FB-ADK-K03-semver-build-suffix-redundant.md) |
| **K-04** | high | Actions CI parity defaults leak Docusaurus / monorepo checks | [FB-ADK-K04-actions-ci-parity-docusaurus-defaults.md](FB-ADK-K04-actions-ci-parity-docusaurus-defaults.md) |

**Payload:** [feedback-payload.json](feedback-payload.json)  
**Install RC:** [install-rc-report-final.json](install-rc-report-final.json)  
**SBL programme report:** [KMA-ATTEMPT-12.md](https://github.com/RMS-Ltd/starborn-legacy/blob/dev/docs/kanban/KMA-ATTEMPT-12.md) (tracked on `dev`)

---

## Maintainer routing (draft)

| FB | Suggested kit lane |
|----|-------------------|
| K-01 | KMA / TSP / workflow-registry parity |
| K-02 | UKW Step 6 + KMA Step 4 timestamp carry-forward |
| K-03 | Versioning / task-touch public SemVer surface ([BR-111](https://github.com/RMS-Ltd/ai-dev-kit/blob/dev/docs/kanban/fbu/BR-111-semver-public-surface-build-metadata-leak.md) carry-forward) |
| K-04 | `validate_actions_ci_parity` + [FR-141](https://github.com/RMS-Ltd/ai-dev-kit/blob/dev/docs/kanban/fbu/FR-141-adopter-documentation-profile-greenfield-default.md) — **no Docusaurus on git-native adopters** |

**Adopter reference implementations (SBL `dev`):**

- `docs/kanban/reference/E02-WORKFLOW-STORY-MAP.md` (K-01)
- `tools/kanban/restore_board_timestamps.py` (K-02)
- `docs/kanban/reference/ADR-SBL-001-semver-lineage.md` (K-03)
- `rw-config.yaml` → `actions_ci_parity` Flutter block (K-04)

---

## vs attempt 11

| Metric | 11 | 12 |
|--------|----|----|
| ADK pin | v0.4.1171 | **v0.4.1237** |
| TSP tasks | 377 | **342** (issue #3 pass 3) |
| KMA synthesise | Complete | **Pending sign-off** |
| Branch lineage | In-place `dev` | Fresh `dev` from `pre-adk-install` |
