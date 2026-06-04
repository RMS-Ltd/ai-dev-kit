---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-03T21:00:00Z
expires_at: null
housekeeping_policy: keep
---

# E02:S13:T08 — Planning: Sync Packaged Workflows With Live Repo (IPW)

**Host Task:** [`T08-sync-packaged-workflows-with-live-repo-implementation.md`](../project-management/kanban/epics/epic-02/story-13-workflow-management-package-implementation-review/T08-sync-packaged-workflows-with-live-repo-implementation.md) **(E02:S13:T08)**  
**Planning for:** [FR-049](../project-management/kanban/fr-br/FR-049-canonical-rw-step-list-single-source-of-truth.md) · extends [E05:S01:T66](../project-management/kanban/epics/epic-05/story-01-fr-repo/T66-cursorrules-vs-packaged-rw-trigger-parity.md)  
**Status:** Implemented (2026-06-03 — validators PASS; release via `RW E02:S13:T08`)

---

## 1. Requirements (Ascertained Baseline)

### 1.1 Functional requirements

| ID | Requirement | Source |
| -- | ----------- | ------ |
| RF1 | Portable RW excerpt Step 9 validator set matches root `.cursorrules` | T08 AC1 |
| RF2 | `.claude/commands/rw.md` Step 9 matches same set + `--art` / `--doc-policy-zero` | T08 AC2 |
| RF3 | `canonical-rw-steps.yaml` reflects live 12-step model + 9.5/9.6/12.5; validator clean or documented | T08 AC3 |
| RF4 | Authoritative `release-workflow/release-workflow.yaml`; flat copy deprecated; no `confidentia` paths | T08 AC4 |
| RF5 | `workflow-registry.yaml` RW/UKW/PKG-VERSION counts/descriptions aligned | T08 AC5 |
| RF6 | `rw-trigger-dual-source-parity.md` checklist + delta for FR-097/FR-092 Step 9 | T08 AC6 |
| RF7 | `validate-workflow-docs.py` passes | T08 AC7 |

### 1.2 Non-functional requirements

| ID | Requirement |
| -- | ----------- |
| RNF1 | Edit `.cursorrules` first on future RW changes; port to package excerpt |
| RNF2 | Adopter paths use `{project}` / `rw-config` patterns in packaged YAML |
| RNF3 | Sync report in T08 task doc with validator output |

### 1.3 Invariants and boundaries

- **In scope:** Packaged YAML, canonical steps, portable excerpts, `rw.md`, parity doc, registry, minimal UKW excerpt gaps.
- **Out of scope:** E02:S13:T02–T06 RC review; FR-050 full reorg; validator behavior changes except matcher false positives.

---

## 2. Specification

### 2.1 Goal

Adopters copying `packages/frameworks/workflow mgt/` receive RW/UKW artefacts aligned with ai-dev-kit live agent execution (Step 9 FR-097/FR-092 validators, FR-092 Step 7 kanban, 12-step tracker model).

### 2.4 Status transition intent

- **Current:** TODO → **IN PROGRESS** on first implementation edit.
- **COMPLETE:** When AC1–AC7 evidenced; forensic marker via RW.

### 2.5 ADR necessity decision

**Outcome:** `EXEMPT` — implements FR-049/FR-056 and [rw-trigger-dual-source-parity.md](../../packages/frameworks/workflow%20mgt/docs/rw-trigger-dual-source-parity.md); no new architectural choice.

---

## 3. Test design

| ID | Check |
| -- | ----- |
| T1 | `validate_canonical_steps.py` — zero errors |
| T2 | `validate-workflow-docs.py` — exit 0 |
| T3 | Grep Step 9 scripts: `.cursorrules` = portable excerpt = `rw.md` |
| T4 | No `confidentia` in authoritative release-workflow YAML |
| T5 | Flat `workflows/release-workflow.yaml` points to subdirectory SoT |

---

## 4. Implementation plan

| Step | Action |
| ---- | ------ |
| **1** | T08 TODO → IN PROGRESS |
| 2 | Baseline diff matrix → T08 Sync report |
| 3–10 | Dual-source, canonical YAML, release YAML, registry, UKW excerpt, parity doc |
| 11 | Run T1/T2; reconcile T08 COMPLETE pending RW |
| **N** | COMPLETE + `RW E02:S13:T08` |

### 4.1 Files to create or modify

See §5.

---

## 5. Documentation deliverables

| Doc ID | Path | Action |
| ------ | ---- | ------ |
| D1 | `docs/implementation-cycles/IPP-E02S13T08-sync-packaged-workflows-live-spec.md` | CREATE |
| D3 | `cursorrules-rw-trigger-section.md` | UPDATE |
| D4 | `.claude/commands/rw.md` | UPDATE |
| D5 | `canonical-rw-steps.yaml` | UPDATE |
| D6 | `workflows/release-workflow/release-workflow.yaml` | UPDATE |
| D7 | `workflows/release-workflow.yaml` | DEPRECATE |
| D8 | `workflow-registry.yaml` | UPDATE |
| D9 | `rw-trigger-dual-source-parity.md` | UPDATE |
| D10 | `cursorrules-ukw-trigger-section.md` | UPDATE |
| D11 | `workflows/release-workflow/README.md` | UPDATE |
| D2 | T08 task doc | UPDATE |

---

## 6. Documentation housing

| Doc ID | Path | Publication |
| ------ | ---- | ----------- |
| D1 | `docs/implementation-cycles/IPP-E02S13T08-*.md` | NOT_APPLICABLE (repo SoT) |
| D3–D11 | Under `packages/frameworks/workflow mgt/` | NOT_APPLICABLE (framework package) |

---

## 7. Success / verification criteria

- [x] AC1–AC7 per T08 Sync report
- [x] T1/T2 validators pass
- [x] Bidirectional T08 ↔ IPP links
- [ ] `RW E02:S13:T08` for forensic version marker

---

## Appendix A — Baseline diff matrix (pre-sync)

| Live step | canonical-rw-steps (before) | release-workflow.yaml (subdir, before) |
| --------- | --------------------------- | -------------------------------------- |
| 7 Kanban scoped | 6 Auto-update Kanban | step-7 kanban |
| 8 Stage | 7 Stage | step-8 |
| 9 Validators (8 scripts) | 9 partial (4 scripts) | step-10 validators (4 scripts) |
| 9.5 CMW | 9.5 present | step-10.5 |
| 9.6 IDE | 8 IDE misplaced | step-9 IDE |
| 13 Housekeeping | 13 Post-commit verify | step-17 housekeeping |

---

## References

- [T08 task doc](../project-management/kanban/epics/epic-02/story-13-workflow-management-package-implementation-review/T08-sync-packaged-workflows-with-live-repo-implementation.md)
- [FR-049](../project-management/kanban/fr-br/FR-049-canonical-rw-step-list-single-source-of-truth.md)
- [rw-trigger-dual-source-parity.md](../../packages/frameworks/workflow%20mgt/docs/rw-trigger-dual-source-parity.md)
