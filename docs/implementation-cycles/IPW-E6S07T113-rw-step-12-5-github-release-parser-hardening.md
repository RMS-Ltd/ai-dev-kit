---
lifecycle: evergreen
ttl_days: null
created_at: 2026-04-13T00:00:00Z
expires_at: null
housekeeping_policy: keep
---

# E6:S07:T113 - Planning: Spec, Tests, Implementation Plan (IPW)

**Host Task:** [`T113-rw-step-12-5-github-release-parser-hardening-br065.md`](../project-management/kanban/epics/Epic-6/Story-007-adk-implementation-analysis-and-package-management/T113-rw-step-12-5-github-release-parser-hardening-br065.md) **(E6:S07:T113)**  
**Planning for:** [BR-065](../project-management/kanban/fr-br/BR-065-rw-step-12-5-github-release-parser-fails-on-v-prefixed-version.md)  
**Status:** Draft

---

## 1. Specification

### 1.1 Goal

Harden RW Step 12.5 GitHub release creation so `create_github_release.py` accepts canonical `v`-prefixed version/tag arguments and produces deterministic, actionable diagnostics for malformed inputs, without changing non-blocking orchestration policy.

### 1.2 Functional requirements

- **F1:** Accept both `v`-prefixed and non-prefixed forms for version-like inputs handled by this script (`--semver-tag`, `--internal-version` where parsing is required by helper calls).
- **F2:** Normalize input once at parser boundary (single canonical helper), then use normalized values for numeric/structural parsing only.
- **F3:** Preserve outward-facing canonical tag formatting (`v...`) for release tag/name/body output.
- **F4:** Ensure malformed input fails with deterministic diagnostics containing: argument name, raw value, and expected format examples.
- **F5:** Prevent opaque Python conversion errors (e.g., `invalid literal for int()`) from surfacing as primary operator feedback.
- **F6:** Keep Step 12.5 behavior non-blocking at RW workflow level (script can fail, RW continues with clear warning path).

### 1.3 Non-functional requirements

- **N1:** Minimal surface-area change (parser utility + call-site wiring) to avoid release-script regressions.
- **N2:** Backward compatibility with current successful invocation patterns.
- **N3:** Deterministic messaging for logs and CI output (stable wording for test assertions).
- **N4:** Traceable mapping from BR-065 AC1-AC4 to tests and implementation notes.

### 1.4 Out of scope

- Changing RW orchestration semantics for Step 12.5 (remains non-blocking).
- Broader refactor of semver strategy selection logic beyond input hardening.
- Changes to GitHub API behavior, token handling, or release payload policy.

### 1.5 Constraints and notes

- Current script path: `packages/frameworks/workflow mgt/scripts/create_github_release.py`.
- `get_rw_tag_info(...)` may parse internal version numerically; passing `v0...` can trigger the observed failure path.
- Helper must be reusable for both explicit and auto-detected tag modes.

---

## 2. Test design

- **T1 - Prefixed internal version acceptance:** `--internal-version v0.7.6.18+3` no parse exception; tag decision path resolves normally.
- **T2 - Non-prefixed internal version acceptance:** `--internal-version 0.7.6.18+3` continues to work.
- **T3 - Prefixed semver tag acceptance:** `--semver-tag v0.4.733+3` continues to work in explicit and auto modes.
- **T4 - Malformed input diagnostics:** examples such as `v0`, `v0.a.1+2`, `0.7+3` fail with deterministic argument-specific error messages.
- **T5 - No opaque parse leaks:** output must not expose raw `int()` conversion traces as primary error for user input failures.
- **T6 - Release payload regression check:** release name/body still use canonical `v...` formatting and include internal version traceability text.
- **T7 - Non-blocking compatibility evidence:** failure mode remains script-level error (exit non-zero), with RW expected to continue per policy.

---

## 3. Implementation plan

1. **Action:** Add an input-normalization helper for version-like values (`strip optional leading 'v'`, validate expected token structure).  
   **Deliverable:** Local utility function(s) in `create_github_release.py`.
2. **Action:** Route all parse-relevant inputs through helper before calling semver/tag strategy functions that expect numeric-leading strings.  
   **Deliverable:** Updated call paths in `get_release_tag_info(...)` and/or invocation boundary in `main()`.
3. **Action:** Add explicit user-input validation errors with argument context.  
   **Deliverable:** Deterministic error messages for malformed values.
4. **Action:** Guard top-level exception handling to avoid leaking raw conversion internals for known validation failures.  
   **Deliverable:** Actionable error surface compatible with RW logs.
5. **Action:** Add or extend tests for acceptance, malformed input handling, and output formatting invariants.  
   **Deliverable:** Regression coverage aligned to BR-065 ACs.
6. **Action:** Update task/BR traceability after implementation and verification.  
   **Deliverable:** Linked evidence in T113 and BR-065.

### 3.1 Files to create or modify

- `packages/frameworks/workflow mgt/scripts/create_github_release.py`
- `packages/frameworks/workflow mgt/scripts/test_create_github_release.py` (or nearest existing test module for this script)
- `docs/project-management/kanban/fr-br/BR-065-rw-step-12-5-github-release-parser-fails-on-v-prefixed-version.md` (implementation outcome)
- `docs/project-management/kanban/epics/Epic-6/Story-007-adk-implementation-analysis-and-package-management/T113-rw-step-12-5-github-release-parser-hardening-br065.md` (status/evidence updates)

### 3.2 Dependency order

1. Lock helper contract + validation messages.
2. Wire helper into parse paths.
3. Add malformed-input guardrails.
4. Add tests.
5. Run targeted verification command(s).
6. Update docs/traceability.

---

## 4. Success / verification criteria

- [ ] `--semver-tag "v0.4.733+3" --internal-version "v0.7.6.18+3"` no longer triggers parser exception.
- [ ] Malformed values produce deterministic, argument-specific diagnostics.
- [ ] Existing valid non-prefixed forms remain valid.
- [ ] Release payload formatting remains unchanged for canonical outputs.
- [ ] Evidence added to BR-065 and T113 for AC1-AC4 mapping.

---

## References

- [Host Task E6:S07:T113](../project-management/kanban/epics/Epic-6/Story-007-adk-implementation-analysis-and-package-management/T113-rw-step-12-5-github-release-parser-hardening-br065.md)
- [BR-065](../project-management/kanban/fr-br/BR-065-rw-step-12-5-github-release-parser-fails-on-v-prefixed-version.md)
- [FR-041](../project-management/kanban/fr-br/FR-041-perpetual-task-for-release-workflow-maintenance.md)
