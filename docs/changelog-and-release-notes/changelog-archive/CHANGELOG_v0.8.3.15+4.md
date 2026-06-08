# Changelog v0.8.3.15+4

**Release Date:** 2026-06-08 10:53:36 UTC  
**Epic:** 8 | **Story:** 3 | **Task:** 15 | **Build:** 4  
**SemVer:** v0.4.1056+4  
**Summary:** T15 Wave 3 — RW Step 9.7 Actions CI parity gate + no-red-ship policy

---

## Release scope

E08:S03:T15 — **Change implemented:** Perpetual Actions CI Wave 3 — operator requirements for Failed job usage burn-down (~501 min baseline), no-red-ship on `dev`/`main`, RW **never pushes** by default (UXR-024 R7), blocking **Step 9.7** `validate_actions_ci_parity.py` before commit (`--strict --all` before push). SemVer **v0.4.1056+4**.

---

## Changes

### RW / CI governance

- **Step 9.7** — New blocking gate `validate_actions_ci_parity.py` mirrors required GitHub Actions workflows (Tests, Docusaurus build, Greenfield drift, workflow-scripts pytest) for touched paths.
- **UXR-024 R7** — Push deferred by default; batch push / `RW --push` requires Step 9.7 `--all` pass first.
- **CQG boundary** — Local CodeQL gate (T17) explicitly does not substitute for Actions CI parity.

### Kanban / policy docs

- **T15** — OR-T15-1…7 operator requirements; performance metrics baseline; open AC5/AC6.
- **T16** — OR-T16 cross-lane merge gate (docs from prior session).
- **FR-112** — NF3–NF6 (Failed job usage KPI, no-red-ship, RW Step 9.7).
- Agent SoT: `.cursorrules`, `rw.md`, `canonical-rw-steps.yaml`, cheatsheet §2.

### Config

- `rw-config.yaml` → `actions_ci_parity.enabled: true`

---

## Notes

- **`--art` adoption:** Release anchor `E08:S03:T15` BUILD+4 (`art_tagged_follow_on`).
- **Verification:** Operator should confirm [Actions](https://github.com/RMS-Ltd/ai-dev-kit/actions) green on `dev` after batch push; AC5/AC6 remain open until sustained green + Failed job usage near zero.
