---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-05T16:30:00Z
expires_at: null
housekeeping_policy: keep
---

# E02:S16:T19 — Planning: RW `--dpz` short flag (UXR-022)

**Host Task:** [`T19-rw-dpz-short-flag-doc-policy-zero-uxr022.md`](../kanban/epics/epic-02/story-16-perpetual-ongoing-workflow-operations/T19-rw-dpz-short-flag-doc-policy-zero-uxr022.md) **(E02:S16:T19)**  
**Planning for:** [UXR-022 — RW `--doc-policy-zero` short flag (`--dpz`)](../kanban/fr-br/UXR-022-rw-doc-policy-zero-short-flag-dpz.md)  
**Status:** Published

> **IPW (Implementation Planning Workflow):** Produced by IPW for E02:S16:T19. Bidirectional wiring to the host task `Input` and `References` is confirmed.

---

## 1. Requirements (Ascertained Baseline)

### 1.1 Functional requirements

| ID | Requirement | Source |
| -- | ----------- | ------ |
| RF1 | Parsers accept `--dpz` and `--doc-policy-zero` with identical semantics | UXR-022 R1/R2, T19 AC1 |
| RF2 | `resolve_rw_build.py` and `validate_version_bump.py` propagate flag in RW Step 2 / Step 9 | T19 scope |
| RF3 | Unit tests cover both flag forms (pass + blocked paths) | T19 AC2 |
| RF4 | Cheatsheet updated per UXR-022 proposed diff | T19 AC3 |
| RF5 | Agent SoT: `.cursorrules`, `rw.md`, release-workflow guide — `--dpz` primary | T19 AC4 |
| RF6 | Dual-source parity excerpt + checklist | UXR-022 R5 |
| RF7 | `greenfield-install/` mirrors; `sync_greenfield_install.py --check` | T19 deliverable |

### 1.2 Non-functional requirements

| ID | Requirement |
| -- | ----------- |
| RNF1 | BR-067 / BR-097 policy unchanged |
| RNF2 | Agents must not infer `--dpz` from docs-only alone |
| RNF3 | `--doc-policy-zero` remains valid alias in v1 |

### 1.3 Out of scope

Removing long form; changing BUILD +0 rules; `docs/guides/README.md` structural changes; new ADR.

---

## 2. Specification

### 2.1 Goal

Introduce **`--dpz`** as the preferred RW BUILD +0 override token; keep **`--doc-policy-zero`** as backward-compatible alias.

### 2.2 Parser design

```python
parser.add_argument(
    "--dpz",
    "--doc-policy-zero",
    dest="doc_policy_zero",
    action="store_true",
    help="Explicit BUILD +0 override; user must type in RW trigger (--doc-policy-zero alias)",
)
```

### 2.4 Status transition intent

- **Current:** IN PROGRESS (intake **v0.2.16.19+1**)
- **Complete when:** AC1–AC5 satisfied → `COMPLETE` + forensic marker

### 2.5 ADR necessity — EXEMPT

Governing docs: BR-067, BR-097, UXR-022. No new architectural choice.

---

## 3. Test design

| ID | Test | Covers |
| -- | ---- | ------ |
| T1 | `resolve_rw_build` BUILD=0 + `--art` + `--dpz` → `next_build=0` | AC1 |
| T2 | `resolve_rw_build` tagged HEAD + `--dpz` → fail | AC1, BR-097 |
| T3 | `validate_version_bump` docs-only + `--art` + `--dpz` on T103 → pass | AC1, BR-067 |
| T4 | `validate_version_bump` `--dpz` when BUILD≥1 → blocked | AC2, BR-097 |
| T5 | CLI `--dpz` accepted by both scripts | AC2 |

**Run:** `pytest packages/frameworks/workflow-mgt/scripts/version/test_resolve_rw_build.py packages/frameworks/workflow-mgt/scripts/validation/test_validate_version_bump.py -q`

---

## 4. Implementation plan

| Step | Action |
| ---- | ------ |
| **1** | Confirm T19 IN PROGRESS; update `Last updated` |
| 2 | Write this IPP; wire task ↔ IPP |
| 3 | Dual argparse in `resolve_rw_build.py`, `validate_version_bump.py` |
| 4 | Extend pytest (T1–T5) |
| 5 | Update cheatsheet per UXR-022 |
| 6 | Update agent SoT + dual-source parity |
| 7 | Mirror `greenfield-install/`; `sync_greenfield_install.py --check` |
| 8 | `RW E02:S16:T19 --art` (BUILD +2) |
| **9** | Reconcile T19 → COMPLETE; UXR-022 R1–R5; kboard |

---

## 5. Documentation deliverables

| Doc ID | Path | Action |
| ------ | ---- | ------ |
| D-C1 | `docs/implementation-cycles/IPP-E02S16T19-rw-dpz-short-flag-uxr022.md` | CREATE |
| D-U1 | `docs/guides/workflow-initiation-cheatsheet.md` | UPDATE |
| D-U2 | `.cursorrules`, `.claude/commands/rw.md` | UPDATE |
| D-U3 | `release-workflow-agent-execution.md`, dual-source files | UPDATE |
| D-U4 | `greenfield-install/packages/frameworks/workflow-mgt/**` | UPDATE |

---

## 6. Success / verification criteria

- [x] AC1–AC5 on T19 satisfied
- [x] Pytest green for `--dpz` parity
- [x] `sync_greenfield_install.py --check` passes
- [x] RW `v0.2.16.19+2` ships implementation

---

## References

- [UXR-022](../kanban/fr-br/UXR-022-rw-doc-policy-zero-short-flag-dpz.md)
- [T19 task doc](../kanban/epics/epic-02/story-16-perpetual-ongoing-workflow-operations/T19-rw-dpz-short-flag-doc-policy-zero-uxr022.md)
- [BR-067](../kanban/fr-br/BR-067-rw-first-doc-only-release-defaults-to-build-plus-one-not-plus-zero.md)
- [BR-097](../kanban/fr-br/BR-097-rw-agent-reuses-tagged-build-and-force-moves-release-tags.md)
