---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-10T18:00:00Z
expires_at: null
housekeeping_policy: keep
---

# User Experience Research: GitHub Actions Run Titles Show External SemVer

**Type:** User Experience Research (UXR)  
**ID:** UXR-027  
**Submitted:** 2026-06-10  
**Submitted By:** User  
**Priority:** MEDIUM (Could Have — MoSCOW **C**)  
**Status:** COMPLETE (**v0.2.1.31+1**)  
**Implementing Task:** [E02:S01:T31](../epics/epic-02/story-01-rw-agent-execution-and-docs/T31-github-actions-run-title-external-semver-uxr027.md)  
**Planning package:** [IPP-E02S01T31](../../implementation-cycles/IPP-E02S01T31-github-actions-run-title-external-semver.md)

**Related:** [UXR-016](UXR-016-install-setup-interactive-feedback-external-semver-version.md) (install/setup outward SemVer) · [E02:S16:T05](../epics/epic-02/story-16-perpetual-ongoing-workflow-operations/T05-github-actions-ci-health-perpetual.md) (CI health perpetual)

---

## Summary

GitHub Actions workflow run list titles show the **internal** `RC.EPIC.STORY.TASK+BUILD` version from RW commit subjects (e.g. `Release v0.6.9.27+2: …`) instead of the **external SemVer** adopters and maintainers use elsewhere (README, GitHub Releases, install banners).

---

## Research Objective

Determine whether GitHub Actions run titles can and should display external SemVer, and what change surface achieves that without losing internal forensic traceability.

---

## Methodology

**Research Method:** Maintainer UX observation + GitHub Actions behaviour review  
**Context:** [RMS-Ltd/ai-dev-kit/actions](https://github.com/RMS-Ltd/ai-dev-kit/actions) after RW release pushes  
**Evidence:** Release `v0.6.9.27+2` (SemVer `v0.4.1133+2` in task_touch mode) — workflow runs titled `Release v0.6.9.27+2: v3.2 fingerprint validator path fix` across Tests, Greenfield install, and Workflow scripts pytest.

---

## Key Findings

1. **Run title source:** On `push` triggers, GitHub Actions uses the **commit message subject** as the bold run title when workflows do not set top-level `run-name`.
2. **No `run-name` today:** Repo workflows (`.github/workflows/tests.yml`, `greenfield-install.yml`, `workflow-scripts-pytest.yml`, etc.) define `name:` only — not `run-name:`.
3. **RW commit subject uses internal version:** RW Step 10 template is `Release v{version}: {summary}` where `{version}` is internal (`version.py`), per `.cursorrules`, `.claude/commands/rw.md`, and commit-message guidelines.
4. **`run-name` cannot compute SemVer at queue time:** Expressions are static; `semver_converter.py` / registry lookup cannot run before the workflow is queued. Changing the **commit subject** (or a deterministic parse of it) is the practical path.
5. **Internal traceability already exists elsewhere:** Internal version remains in `version.py`, changelog archive filenames, internal git tag `v{internal}`, and RW commit body (`Epic: … | Story: … | Task: …`).

---

## User Pain Points

- Scanning Actions after a release requires mentally mapping internal `0.6.9.27+2` to SemVer `0.4.1133+2`.
- Inconsistent with UXR-016 outward SemVer on install/setup, README SemVer badge, and GitHub Release tag (`vX.Y.Z` in task_touch mode).
- Commit summary text (e.g. `v3.2 fingerprint…`) can be mistaken for the release version when internal prefix dominates the title.

---

## Recommendations

- [x] **UXR-027-R1 (primary):** RW Step 10 commit **subject** uses **external SemVer**: `Release v{semver}: {summary}`; commit **body** retains internal traceability (`Internal: v{internal}` + E/S/T footer).
- [x] **UXR-027-R2:** Update portable RW docs, commit-message guidelines, and dual-source parity targets (`.cursorrules`, `cursorrules-rw-trigger-section.md`, `.claude/commands/rw.md`, `release-workflow-reference.md`).
- [ ] **UXR-027-R3 (optional):** Add shared `run-name:` to push-triggered workflows that echoes first line of commit subject — deferred (redundant after R1).
- [x] **UXR-027-R4:** Document maintainer expectation: internal version is in commit body / tags / changelog archive — not the Actions list title.

**Priority order:** R1 → R2 → R4 → R3

---

## Affected Areas

- RW Step 10 commit message template (agent + docs)
- GitHub Actions run list UX (all push-triggered workflows on release commits)
- Commit-message language guidelines
- Optional: `.github/workflows/*.yml` `run-name` (low value after R1)

---

## Acceptance Criteria (intake)

- [x] **AC1:** After RW with `--push` (or batch push), a representative workflow run title begins with `Release v{semver}` matching README / GitHub Release SemVer for that build.
- [x] **AC2:** Same commit body or footer still exposes internal `v{internal}` for forensic lookup.
- [x] **AC3:** RW portable docs and dual-source excerpt updated; no validator regression on version bump / tag authority.
- [x] **AC4:** Non-release commits unaffected (no forced SemVer in subjects).

---

## Out of Scope

- Renaming workflow `name:` fields (subtitle under run — e.g. "Tests #224")
- GitHub Release title/body (already SemVer-oriented)
- Rewriting historical commit messages

---

## References

- [GitHub Actions dynamic `run-name`](https://github.blog/changelog/2022-09-26-github-actions-dynamic-names-for-workflow-runs/)
- [UXR-016 — Install/setup external SemVer](UXR-016-install-setup-interactive-feedback-external-semver-version.md)
- `packages/frameworks/workflow-mgt/scripts/version/semver_converter.py`
- `rw-config.yaml` → `semver_mapping_strategy: task_touch`
