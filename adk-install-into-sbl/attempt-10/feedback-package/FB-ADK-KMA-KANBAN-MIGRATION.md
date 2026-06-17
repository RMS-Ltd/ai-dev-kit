# FB-ADK — Kanban migration (attempt 10)

**Arm:** B (greenfield shell + blind kit KMA)  
**Kit pin:** `v0.4.1171`  
**Reference tree (maintainer scoring only):** [`KMA-REFERENCE-EST-TREE-ATTEMPT-09.md`](../attempt-09/KMA-REFERENCE-EST-TREE-ATTEMPT-09.md) — not used during blind first pass

---

## 1. Run mode

| Step | Operator? | Notes |
|------|-----------|-------|
| Greenfield wipe + install | No | Arm B orchestrator `v0.4.1171` |
| Kit KMA (first pass) | **No** | Policy-only `migration-proposal.md`; agentic copy; **0** ad-hoc `scripts/*kma*.py` |
| Structural diff vs reference | Maintainer phase 2 | Not run in adopter blind pass |
| Operator tweaks (if any) | **Yes** | §4 — pass 2 agentic fixes (4 tweaks) |

---

## 2. Kit KMA output summary

| Metric | Reference (09) | Kit output (10 blind) | Δ |
|--------|----------------|-------------------------|---|
| Epics | 19 domain+ops | **22** (8 core + 14 domain) | +3 core shells |
| Stories | 105 | **84** files | Lower — inline tasks not re-counted |
| Tasks (E:S:T) | 473 | 564 inline in legacy ingest | Preserved in story bodies |
| `validate_installation.py` | PASS | **PASS** | |
| `validate_v4_template_completeness` | — | Not invoked cleanly (RC path bug) | |
| Operator edits (first pass) | 0 target | **0** ad-hoc scripts | ✅ |

**Output path:** `docs/kanban/`  
**Proposal:** `logs/attempt-10/migration-proposal.md`  
**Pre-KMA backup:** `logs/attempt-10/docs-kanban-pre-kma-backup/`  
**Transcript:** `transcripts/20260615T161629Z-kma-blind-synthesise.txt`

---

## 3. Structural diff (first pass, pre-tweak)

| Kind | Detail |
|------|--------|
| Core retained | Fresh E01–E08 templates from greenfield install |
| Domain added | E30–E45 from legacy game epics (policy map) |
| Core story merge | E03/E11/E15/E17 stories copied into E02–E07 — **collides** with template story filenames in E02/E03 |
| Sign-off | BR-083 / UXR-017 NOT READY — duplicate `story-01-*` patterns in epic-02, epic-03 |

---

## 4. Operator tweaks log

| # | Tweak | Rationale (kit gap) | Reference impact |
|---|-------|---------------------|------------------|
| 1 | E15 stories routed E01/E02/E03/E05/E06/E33 (not all E02) | Pass 1 ignored proposal split | Policy-aligned homes |
| 2 | `story-NN-legacy-*` naming for imports | Template + legacy collision | UXR-017 PASS |
| 3 | E31 epic synthesised from E02+E05 merge | Pass 1 had wrong E05-only body on E31 | Domain band correctness |
| 4 | Domain epic titles renumbered E30+ | Pass 1 left legacy "Epic N:" headers | Board readability |

---

## 5. Post-tweak score

| Check | Result |
|-------|--------|
| `validate_installation.py` | **PASS** |
| UXR-017 sign-off | **READY** |
| Install RC strict | **PASS** (10/11, 1 skip) |
| Ad-hoc KMA scripts | **0** |
| Distributed task files | **37** (core CATL only; legacy inline tokens **not** fan-out) |

Maintainer structural diff vs attempt-09 reference: **phase 2** (not adopter scope).

---

## 6. Kit feedback hooks

- `validate_install_rc.py`: `KANBAN_SCRIPTS` resolves to `workflow-mgt/kanban/scripts` (wrong); should be `frameworks/kanban/scripts`
- `validate_install_rc.py`: passes `--project-root` to `validate_v4_template_completeness.py` which does not accept it
- Sign-off BR-082: subprocess uses bare `python` without venv PyYAML (PEP 668 blocks system pip install)
- KMA core merge: need kit guidance when fresh template stories already exist in E02–E08 (avoid filename collision)
- `rw-config.yaml` installer default `src/myproject/version.py` — adopter must pass `--config` for `src/starborn_legacy/version.py`
