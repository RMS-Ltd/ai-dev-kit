---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-05T16:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Epic 2, Story 16, Task 19: RW `--dpz` short flag for doc-policy-zero (UXR-022)

**Task ID:** E02:S16:T19  
**Status:** COMPLETE  
**Priority:** MEDIUM  
**Estimated Effort:** Small  
**Created:** 2026-06-05  
**Last updated:** 2026-06-05 (RW **v0.2.16.19+2** — UXR-022 implementation complete)  
**Version Anchor:** v0.2.16.19+2

✅ COMPLETE (v0.2.16.19+2)  
**Code:** E02S16T19  

**Planning package:** [`IPP-E02S16T19-rw-dpz-short-flag-uxr022.md`](../../../../../implementation-cycles/IPP-E02S16T19-rw-dpz-short-flag-uxr022.md)

**Upstream:** [UXR-022 — RW `--doc-policy-zero` short flag (`--dpz`)](../../../fr-br/UXR-022-rw-doc-policy-zero-short-flag-dpz.md)

---

## Input

- [IPP-E02S16T19-rw-dpz-short-flag-uxr022.md](../../../../../implementation-cycles/IPP-E02S16T19-rw-dpz-short-flag-uxr022.md) — IPW planning package.
- [UXR-022](../../../fr-br/UXR-022-rw-doc-policy-zero-short-flag-dpz.md) findings and recommendations (R1–R5).
- [BR-067](../../../fr-br/BR-067-rw-first-doc-only-release-defaults-to-build-plus-one-not-plus-zero.md) — BUILD +0 policy semantics (unchanged).
- [BR-097](../../../fr-br/BR-097-rw-agent-reuses-tagged-build-and-force-moves-release-tags.md) — tagged BUILD / inference guards.
- [workflow-initiation-cheatsheet.md](../../../../../guides/workflow-initiation-cheatsheet.md) — RW §2 flag matrix.
- Parsers: `resolve_rw_build.py`, `validate_version_bump.py`.

---

## Problem statement

The RW explicit BUILD +0 override flag `--doc-policy-zero` is semantically correct but too long for reliable day-to-day invocation and cheatsheet scanability. A short canonical form `--dpz` is needed without changing BR-067 / BR-097 policy.

---

## Deliverable

1. **`--dpz`** accepted as preferred RW trigger token; **`--doc-policy-zero`** remains a backward-compatible alias.
2. Script + test updates in `packages/frameworks/workflow-mgt/` (and `greenfield-install/` mirrors).
3. **`docs/guides/workflow-initiation-cheatsheet.md`** — mandatory §2 RW matrix + header updates per UXR-022 **Proposed cheatsheet updates** (`--dpz` primary; long form alias; UXR-022 / T19 provenance).
4. Agent SoT write-default: `.cursorrules`, `.claude/commands/rw.md`, RW execution guide — `--dpz` first, long form in parentheses.
5. Dual-source parity: `cursorrules-rw-trigger-section.md` + parity checklist.

---

## Scope

1. Add argparse alias / normalization in `resolve_rw_build.py` and `validate_version_bump.py`.
2. Extend existing BR-067 / BR-097 tests to cover `--dpz` alongside `--doc-policy-zero`.
3. Update **`docs/guides/workflow-initiation-cheatsheet.md`** — §2 flag matrix, header “last verified”, task/UXR footer (see UXR-022 proposed diff table).
4. Update agent SoT (`.cursorrules`, `rw.md`) with alias note.
5. **Out of scope:** Changing when BUILD +0 applies; removing `--doc-policy-zero`; RW agent auto-inference of `--dpz`; `docs/guides/README.md` structural changes.

---

## Acceptance criteria

- [x] **AC1:** Both scripts accept `--dpz` and `--doc-policy-zero` with identical behavior.
- [x] **AC2:** Unit tests cover both flag forms (positive + blocked paths).
- [x] **AC3:** `docs/guides/workflow-initiation-cheatsheet.md` matches UXR-022 **Proposed cheatsheet updates** (§2 matrix, header, UXR-022/T19 footer).
- [x] **AC4:** `.cursorrules` and `rw.md` updated; dual-source parity doc/checklist aligned.
- [x] **AC5:** UXR-022 ↔ E02:S16:T19 bidirectional links and story checklist entry present.

---

## References

- [IPP-E02S16T19-rw-dpz-short-flag-uxr022.md](../../../../../implementation-cycles/IPP-E02S16T19-rw-dpz-short-flag-uxr022.md)
- [UXR-022](../../../fr-br/UXR-022-rw-doc-policy-zero-short-flag-dpz.md)
- [BR-067](../../../fr-br/BR-067-rw-first-doc-only-release-defaults-to-build-plus-one-not-plus-zero.md)
- [UXR-015](../../../fr-br/UXR-015-workflow-initiation-cheatsheet.md)
- [Story 016](../story-16-perpetual-ongoing-workflow-operations.md)
- [Release Workflow agent execution guide](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/packages/frameworks/workflow-mgt/KB/Documentation/Developer_Docs/vwmp/release-workflow-agent-execution.md)
