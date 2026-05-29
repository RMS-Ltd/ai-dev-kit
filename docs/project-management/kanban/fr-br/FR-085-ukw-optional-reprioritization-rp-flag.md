---
lifecycle: evergreen
ttl_days: null
created_at: 2026-04-20T16:20:00Z
expires_at: null
housekeeping_policy: keep
---

# FR-085: UKW optional reprioritization (`--rp`) with deep intent/dependency analysis

**Type:** Feature Request (FR)  
**ID:** FR-085  
**Submitted:** 2026-04-20  
**Submitted By:** User feedback / UKW capability hardening  
**Priority:** HIGH  
**Severity:** HIGH  
**Status:** OPEN

**Implementing Task:** [E2:S16:T06](../epics/Epic-2/Story-016-perpetual-ongoing-workflow-operations/T06-ukw-optional-reprioritization-rp-flag-fr085.md)
**Historical implementing task:** E6:S07:T116 (legacy task doc removed after re-housing publication)

---

## Summary

Add an optional UKW responsibility, enabled by `--rp` (`RePrioritise`), that performs deep analysis of open tasks and FR/BR/UXR items to reprioritize based on inferred intent, dependencies, blockers, and real delivery importance.

---

## Problem Statement

Current UKW synchronization focuses on structural reconciliation and board hygiene. It does not provide an explicit, optional deep-prioritization mode that can reassess priority from current evidence and cross-item relationships. This leaves high-value dependency chains and blocker-driven urgency under-modeled unless manually curated.

---

## Requirements

### Functional Requirements

- [ ] **FR-085-F1:** Add optional UKW flag `--rp` that enables reprioritization behavior.
- [ ] **FR-085-F2:** In `--rp` mode, analyze open tasks and FR/BR/UXR records to infer current intent and delivery criticality.
- [ ] **FR-085-F3:** In `--rp` mode, identify dependency chains and blocker relationships and use them in prioritization decisions.
- [ ] **FR-085-F4:** Produce deterministic reprioritization updates for `kboard.md` and `fbuboard.md` without duplicate or unstable ordering churn.
- [ ] **FR-085-F5:** Emit an audit summary of why priority changes were made (intent/dependency/blocker evidence per moved item).

### Non-Functional Requirements

- [ ] **FR-085-NF1:** Reprioritization must be idempotent when inputs are unchanged.
- [ ] **FR-085-NF2:** `--rp` must remain optional and must not alter behavior of default UKW runs.
- [ ] **FR-085-NF3:** Runtime cost and analysis depth must be bounded and observable in logs.

---

## Acceptance Criteria

- [ ] UKW accepts `--rp` and executes reprioritization only when the flag is present.
- [ ] Reprioritization uses explicit evidence categories: intent, dependencies, blockers, and impact.
- [ ] `kboard.md` and `fbuboard.md` show consistent priority updates after `--rp` runs.
- [ ] UKW output includes a concise "reprioritization rationale" section for changed rows.
- [ ] Repeat `--rp` run on unchanged data yields no additional priority movement.

---

## Scope Analysis

**Problem Domain:** UKW prioritization intelligence and governance quality  
**Affected Areas:**

- [x] UKW behavior/flags and prioritization logic
- [x] `kboard.md` / `fbuboard.md` MoSCOW ordering
- [x] FR/BR/UXR + task dependency interpretation
- [ ] RW behavior (out of scope unless explicitly requested)

**Estimated Complexity:**

- [ ] Simple (1-3 days)
- [ ] Medium (1 week)
- [x] Complex (2+ weeks)
- [ ] Very Complex (1+ month)

---

## Related

- [FR-023](./FR-023-update-kanban-workflow-ukw.md)
- [FR-050](./FR-050-ukw-extension-for-fr-br-uxr-temporal-tracking-and-synchronization.md)
- [FR-076](./FR-076-ukw-fbuboard-scope-and-drift-concurrency-controls.md)
- [BR-059](./BR-059-ukw-moscow-incomplete-story-task-coverage.md)
