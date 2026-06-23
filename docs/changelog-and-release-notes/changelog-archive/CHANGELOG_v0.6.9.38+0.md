# Changelog — v0.6.9.38+0

**Release Date:** 2026-06-17 14:29:40 UTC  
**Epic:** 6 | **Story:** 9 | **Task:** 38  
**SemVer:** v0.4.1194+0  
**Task:** E06:S09:T38 — Guided install orchestrator (FR-135)

---

## Summary

**RW -k kanban init (`--art --dpz`):** Atomic intake for **FR-135** / **E06:S09:T38** — guided install orchestrator (zero undocumented manual steps); SBL attempt 11 programme anchor ([#85](https://github.com/RMS-Ltd/ai-dev-kit/issues/85)). Task doc, FR wiring, story checklist, and board row established. Implementation gated on IPW.

**Note:** `--doc-policy-zero` accepted via **art cross-task doc-init** (`art_doc_policy_zero`) after **BR-110** resolver fix — BUILD **+0** on adopted anchor while HEAD was unrelated `E02:S16:T06+19`.

---

## Added

- [FR-135](docs/kanban/fr-br/FR-135-guided-install-orchestrator-zero-manual-steps.md) — guided orchestrator north star + phased requirements (F1–F9)
- [E06:S09:T38](docs/kanban/epics/epic-06/story-09-ai-dev-kit-installation-and-adopter-integration/T38-guided-install-orchestrator-fr135.md) — implementing task (TODO)
- Story checklist + `kboard.md` Should Have row for T38
- [attempt-11 preflight](adk-install-into-sbl/attempt-11-preflight-checklist.md) maintainer index — FR-135 / T38 pointers

---

## Changed

- `resolve_rw_build.py` / `validate_version_bump.py` — **BR-110** remediation: `--art --dpz` on new E:S:T while HEAD is unrelated anchor → BUILD +0 when `...+0` unoccupied
- `test_resolve_rw_build.py` — regression `test_art_cross_task_dpz_doc_init_build_zero`
- greenfield-install mirror sync for resolver/validator changes

---

## Related

- [BR-110](docs/kanban/fr-br/BR-110-rw-k-dpz-rejection-doc-init-build-zero-guard-mismatch.md) · [BR-067](docs/kanban/fr-br/BR-067-rw-first-doc-only-release-defaults-to-build-plus-one-not-plus-zero.md)
- [FR-133](docs/kanban/fr-br/FR-133-kanban-migration-depth-rationalization-adopter-guide.md) · [E06:S09:T37](docs/kanban/epics/epic-06/story-09-ai-dev-kit-installation-and-adopter-integration/T37-kanban-migration-depth-rationalization-fr133.md)
