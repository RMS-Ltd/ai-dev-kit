---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-05T17:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Bug Report BR-088: RW Mode C Does Not Scaffold version_file Path (No src/ Directory)

**Bug ID:** BR-088  
**Priority:** MEDIUM  
**Severity:** MEDIUM (adopter manual step; RW blocked until version file exists)  
**Status:** FIXED ([#18](https://github.com/RMS-Ltd/ai-dev-kit/issues/18) closed; RW **v0.2.16.4+30** / E02:S16:T04)  
**GitHub Issue:** [#18](https://github.com/RMS-Ltd/ai-dev-kit/issues/18)  
**Implementing Task:** [E06:S09:T19](../epics/epic-06/story-09-ai-dev-kit-installation-and-adopter-integration/T19-rw-install-version-file-scaffold-br088.md) — ✅ COMPLETE (**v0.6.9.19+1**)  
**Created:** 2026-06-05  
**Last updated:** 2026-06-05  
**Source:** ExpensesTracker setup-spine T03 book dry-run (2026-06-04); split from [#17](https://github.com/RMS-Ltd/ai-dev-kit/issues/17#issuecomment-4624289778)

**Related:** [#17](https://github.com/RMS-Ltd/ai-dev-kit/issues/17) / [BR-086](BR-086-rw-install-lowercase-fresh-kanban-patterns-signoff.md) · [#14](https://github.com/RMS-Ltd/ai-dev-kit/issues/14) / [BR-082](BR-082-rw-install-missing-pyyaml-preflight.md)

---

## Summary

`install_release_workflow.py --mode c` writes `version_file:` in `rw-config.yaml` but does **not** create parent directories or a minimal `version.py` stub when the consumer repo has no `src/` tree (common on greenfield / TypeScript-first adopters).

---

## Steps to Reproduce

1. Fresh consumer repo after T01–T02 (no `src/` directory).
2. Run `python …/install_release_workflow.py --mode c`.
3. At prompt, set `version_file` to e.g. `src/expenses_tracker/version.py`.
4. Complete install → `rw-config.yaml` written; `INSTALLATION PARTIAL` if workflow YAML missing (expected for submodule-only).

## Expected

- Installer creates parent dirs and a minimal version stub at the configured path, **or**
- Fails with an explicit mandatory next-step message before sign-off completes.

## Actual

- No `src/` directory on disk.
- Only `version_file:` key in `rw-config.yaml`.
- Adopter must run manual scaffold (book packet Step 3.2).

## Workaround (book)

```bash
mkdir -p src/expenses_tracker
# Create minimal VERSION_* stub — see ai-dev-kit-book T03 Step 3.2
```

---

## Acceptance Criteria

- [x] Mode C creates `version_file` path (dirs + stub) when missing, **or** blocks with clear mandatory next step
- [x] Install docs / sign-off mention version scaffold when `src/` absent
- [x] Book T03 path does not require undocumented manual mkdir for greenfield adopters

---

## Verification

- [x] ExpensesTracker or book replay: greenfield repo without `src/` → mode C leaves runnable `version_file` or explicit blocker (operator confirmed 2026-06-05; #18 closed)
