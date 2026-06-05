---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-03T00:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Bug Report BR-077: Documented Python 3.8+ Contradicts Repo Scripts Requiring 3.10+

**Bug ID:** BR-077  
**Task ID:** E08:S03:T05 (with FR-104)  
**Priority:** HIGH (Must Have — MoSCOW **M**)  
**Severity:** LOW (misleading docs/metadata; runtime failure only when running affected scripts on 3.8/3.9)  
**Status:** RESOLVED (**v0.8.3.5+2** — **E08:S03:T05**, `python_requires>=3.11`)   (kanban init **v0.8.3.5+1** — **E08:S03:T05**)  

**Implementing Task:** [E08:S03:T05](../epics/epic-08/story-03-automation-scripts/T05-python-minimum-version-fr104-br077.md)  
**Feature Request:** [FR-104](FR-104-python-minimum-version-policy-alignment.md)  
**Created:** 2026-06-03  
**Classification:** Documentation + packaging metadata

---

## Bug Summary

The repository advertises **Python 3.8+** (`setup.py` `python_requires`, README badge, install guides) while multiple **first-party scripts** use **PEP 604** union syntax (`X | Y`) without postponed annotations, which requires **Python 3.10+**. Contributors on 3.8/3.9 hit `SyntaxError` when running KB/migration scripts even though the **CLI package** itself would run.

---

## Problem Description

### Expected Behavior

Declared minimum Python version should match what the repo actually runs for validators, workflow scripts, and documented contributor workflows.

### Observed Behavior

| Source | States |
|--------|--------|
| [`setup.py`](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/setup.py) | `python_requires=">=3.8"` |
| [`README.md`](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/README.md) | Python 3.8+ |
| Scripts (examples) | `Path \| None`, `dict \| None` without `from __future__ import annotations` |

**CI reference:** [`framework-release.yml`](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/.github/workflows/framework-release.yml) uses Python **3.11** — further drift from “3.8+” messaging.

### Impact

- Wasted time debugging `SyntaxError` on older interpreters.
- False confidence for adopters copying README prerequisites.
- Packaged CLI may install on 3.8 while adjacent scripts in the same clone do not run.

---

## Steps to Reproduce

1. Use Python **3.9** (or 3.8).
2. Run: `python3 scripts/kb_stub_sweep.py` (or `scripts/kb_push_to_notion.py`).
3. Observe: `SyntaxError` on union type annotations.

---

## Proposed Resolution

Delivered via **FR-104** / **E08:S03:T05** (raise floor to 3.10+ and update docs, **or** retrofit scripts + split CLI vs full-repo docs).

---

## Related Work

- [E07:S06:T08](../epics/epic-07/story-06-post-windsurf-project-review/T08-dependency-and-tooling-audit.md) — dependency audit (2026-03-25)
- [FR-104](FR-104-python-minimum-version-policy-alignment.md)
