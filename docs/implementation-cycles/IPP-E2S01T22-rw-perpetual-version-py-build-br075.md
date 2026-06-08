---
lifecycle: evergreen
created_at: 2026-05-29T12:00:00Z
housekeeping_policy: keep
---

# E2:S01:T22 — Planning: BR-075 perpetual RW `version.py` BUILD (IPP)

**Host Task:** [`T22-rw-perpetual-task-version-py-build-increment-br075.md`](../kanban/epics/epic-02/story-01-rw-agent-execution-and-docs/T22-rw-perpetual-task-version-py-build-increment-br075.md) **(E2:S01:T22)**  
**Planning for:** [BR-075](../kanban/fr-br/BR-075-rw-perpetual-task-build-not-reflected-in-version-py.md)  
**Status:** Published

## 1. Requirements

| ID | Requirement | Source |
|----|-------------|--------|
| RF1 | Fail closed when same-task perpetual RW leaves `VERSION_BUILD` unchanged in `version_file` | BR-075, AC1 |
| RF2 | `kanban_init` / Step 7 reads version from `version_file` after Step 2 | AC2 |
| RF3 | RW guide + `.cursorrules` document Step 2 before Step 7 for perpetual / `RW -k` | AC2 |
| RF4 | `version-bump` skill uses `rw-config.yaml` `version_file` | AC3 |
| RNF1 | Pytest regression for perpetual BUILD increment | AC4 |

**Out of scope:** Changing perpetual placement guardrails (E2:S16:T01).

## 2. Specification

Add `validate_perpetual_build_increment()` in `validate_version_bump.py`: when `--requested` task is perpetual and version E/S/T unchanged, require staged `version_file` BUILD > baseline (unless `--doc-policy-zero`). Wire into main() before exit 0.

Update `update_kanban_docs.py` to load version via shared helper reading `rw-config.yaml` when stamping kanban.

### 2.4 Status transition intent

- **IN PROGRESS** at IPP publish; **COMPLETE** after RW ships fix and BR-075 RESOLVED.

## 3. Test design

| ID | Check |
|----|-------|
| T1 | pytest: perpetual same-task, BUILD unchanged → validator non-zero |
| T2 | pytest: perpetual same-task, BUILD +1 → pass |
| T3 | `validate_version_bump.py --strict --requested E2:S01:T22 --art` PASS after impl |

## 4. Implementation plan

| Step | Action |
|------|--------|
| 1 | Host task `TODO → IN PROGRESS`; link IPP |
| 2 | Implement validator + kanban version read helper |
| 3 | Update skill + RW agent doc + `.cursorrules` note |
| 4 | Add tests in `test_validate_version_bump.py` |
| 5 | `RW E2:S01:T22 --art`; BR-075 RESOLVED; reconcile status COMPLETE |

## 5. Documentation deliverables

- RW agent execution Step 2/9 perpetual BUILD note
- BR-075 status + fix version

## 6. Documentation housing

- IPP: `docs/implementation-cycles/`
- Policy cross-ref: `dev-kit-versioning-policy.md` § perpetual

## 7. Success criteria

- [ ] AC1–AC5 on host task
- [ ] `validate_ipw_publication_wiring.py --requested E2:S01:T22` PASS
