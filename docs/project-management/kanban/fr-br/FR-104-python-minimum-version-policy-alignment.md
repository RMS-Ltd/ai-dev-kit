---
lifecycle: proposed
ttl_days: null
created_at: 2026-06-03T00:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Feature Request: Python Minimum Version Policy Alignment

**Type:** Feature Request (FR)  
**ID:** FR-104  
**Submitted:** 2026-06-03  
**Submitted By:** User (via agent — dependency audit follow-up)  
**Priority:** HIGH (Must Have — MoSCOW **M**)  
**Status:** OPEN (kanban init **v0.8.3.5+1** — **E08:S03:T05**)  
**Assigned Task:** E08:S03:T05 — [`T05-python-minimum-version-fr104-br077.md`](../epics/Epic-8/Story-003-automation-scripts/T05-python-minimum-version-fr104-br077.md)

---

## Summary

Align the **declared** Python floor (`setup.py`, README, user docs, CI examples) with the **effective** floor needed to run validators, workflow scripts, and the full pytest suite (**3.10+**), and document a **recommended** CI/dev version (**3.11**, matching `framework-release.yml`).

---

## Problem Statement

- [`setup.py`](../../../../setup.py) and [`README.md`](../../../../README.md) state **`python_requires>=3.8`** and “Python 3.8+”.
- Several repo scripts use **PEP 604** union syntax (`str | None`, `dict | None`) **without** `from __future__ import annotations`, e.g. [`scripts/kb_stub_sweep.py`](../../../../scripts/kb_stub_sweep.py), [`scripts/kb_push_to_notion.py`](../../../../scripts/kb_push_to_notion.py), [`scripts/kb_migrate_full_content.py`](../../../../scripts/kb_migrate_full_content.py) — these **fail on Python 3.8/3.9**.
- The published **CLI** (`cli/`) remains stdlib + PyYAML only and could stay on a lower floor if documented separately.
- Audit context: [E07:S06:T08](../epics/Epic-7/Story-006-post-windsurf-project-review/T08-dependency-and-tooling-audit.md); inconsistency tracked in [BR-077](BR-077-documented-python-38-contradicts-repo-310-requirement.md).

---

## Scope (Atomic)

**In scope**

- Policy decision (document in FR/task, implement in task):
  - **Option A (recommended):** Raise repo-wide declared floor to **`>=3.10`**; recommend **3.11** for contributors and CI.
  - **Option B:** Keep **`>=3.8`** for published package only; add `from __future__ import annotations` or quoted unions in all scripts using `X | Y`; split “CLI install” vs “full dev kit” in docs.
- Update **`setup.py`** `python_requires` and PyPI classifiers (drop 3.8/3.9 if Option A).
- Update **README** badge and prerequisites, [`docs/documentation/user-docs/framework-dependency-installation-guide.md`](../../../../docs/documentation/user-docs/framework-dependency-installation-guide.md), and other canonical “3.8+” callouts found by grep.
- Align **example** CI snippets in `docs/maintenance/release-integration-guides.md` with active workflows (**3.11** where Python is shown).
- Optional: add **`.python-version`** or **`requires-python`** note in contributor section (`3.11`).

**Out of scope**

- Rewriting all scripts to support 3.8 (unless Option B is chosen).
- Adding a `pyproject.toml` migration (separate FR if desired).
- Fixing pytest failures ([BR-058](BR-058-ci-test-workflow-missing-and-pytest-failures.md) / E08:S03:T04) — coordinate only (Tests workflow should use chosen floor).

---

## Functional Requirements

- [ ] **FR-104:R01** – Single authoritative statement: **minimum** and **recommended** Python versions for (1) CLI-only install, (2) full repo development.
- [ ] **FR-104:R02** – `setup.py` `python_requires` matches the chosen policy.
- [ ] **FR-104:R03** – README and primary install docs updated; no remaining “3.8+” for full-repo work unless explicitly scoped to CLI-only.

---

## Non-Functional Requirements

- [ ] **FR-104:NF01** – Adopters on 3.8/3.9 see a clear error or doc warning before hitting obscure `SyntaxError` on union types.
- [ ] **FR-104:NF02** – CI version in docs matches `.github/workflows/framework-release.yml` (3.11).

---

## Acceptance Criteria

- [ ] **AC1:** Policy documented in task deliverable or short ADR/governance note (one paragraph acceptable).
- [ ] **AC2:** `python_requires` and README prerequisites consistent with policy.
- [ ] **AC3:** Grep for stale “3.8+” in canonical install paths resolved or scoped (CLI-only footnote).
- [ ] **AC4:** **BR-077** marked resolved when metadata matches effective floor.
- [ ] **AC5:** Bidirectional links: FR-104 ↔ E08:S03:T05; BR-077 ↔ T05.

---

## Dependencies / Ordering

- **BR-077** — metadata inaccuracy; closed by this FR’s delivery.
- **E08:S03:T04** — future Tests workflow should pin the same Python version as this policy.
- **FR-105** — independent (Dependabot); may share Story 003 delivery lane.

---

## Related

- [BR-077](BR-077-documented-python-38-contradicts-repo-310-requirement.md)
- [T08 dependency audit](../epics/Epic-7/Story-006-post-windsurf-project-review/T08-dependency-and-tooling-audit.md)
- [FR-030](FR-030-ai-dev-kit-cli-tool.md) (original CLI NFR: Python 3.8+ — revisit if floor rises)
