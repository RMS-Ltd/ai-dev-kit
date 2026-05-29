# Changelog: v0.2.8.1+1

**Release Date:** 2025-12-15  
**Epic:** Epic 2 (Workflow Management Framework)  
**Story:** Story 8 (Harden Release Workflow Reliability)  
**Task:** Task 1 (Analyze atomic steps for deterministic vs agentic approach)  
**Version:** v0.2.8.1+1

---

## Summary

Created comprehensive analysis document decomposing RW Step 7 (Auto-update Kanban Docs) into atomic sub-steps and classifying each as deterministic (targeting ≈100% reliability) or agentic (requiring LLM/agent judgement). This analysis provides the blueprint for implementing FR-015 across E2:S08:T02–T07.

---

## PLAN

**Objective:**  
Produce a concrete, testable blueprint for hardening RW Step 7 by identifying which sub-steps can be deterministic (high reliability) vs which require agentic intelligence.

**Scope:**  
- Story docs under `docs/project-management/kanban/epics/Epic-{N}/Story-*.md`
- Epic overview docs under `docs/project-management/epics/overview/Epic {N}/Epic-{N}.md`
- Kanban board/summary docs

**Approach:**  
1. Decompose Step 7 into atomic sub-steps (18 steps identified)
2. Classify each step as deterministic or agentic with rationale
3. Document reliability confidence estimates for deterministic steps
4. Identify edge cases requiring agentic handling
5. Map analysis to implementation tasks (T02–T07)

---

## Changes

### New Files

- **`packages/frameworks/workflow mgt/docs/Analysis/T01-kanban-docs-update-deterministic-vs-agentic-analysis.md`**
  - Comprehensive analysis document identifying 18 atomic sub-steps for RW Step 7
  - Classification of each step as deterministic vs agentic with detailed rationale
  - Reliability confidence estimates for deterministic steps (targeting ≈100%)
  - Clear boundary definition between deterministic and agentic responsibilities
  - Implications and blueprint for E2:S08:T02–T07 implementation

### Analysis Highlights

**Deterministic Steps (≈100% reliability target):**
- Version + E/S/T resolution from config/version file
- Parsing canonical Story/Epic headers and checklists
- Deriving target status/version markers from canonical rules
- Applying regex/template-driven updates to canonical sections
- Post-update consistency checks and cross-checks vs version/changelog
- Detecting hard structural errors

**Agentic Responsibilities:**
- Fallback path resolution when config/doc structure is non-canonical
- Deciding how to safely update non-canonical prose or bespoke board layouts
- Determining auto-repair vs RW BLOCKED, and composing recovery guidance
- Explaining/justifying overrides and complex decisions

**Key Findings:**
- 18 atomic sub-steps identified across 6 phases (locate context, extract state, plan updates, apply updates, validate, error handling)
- Strong deterministic candidates identified for core pipeline (Steps 1–7, 9–10, 12–15)
- Agentic hooks clearly delimited for non-canonical cases and recovery guidance
- Clear separation enables hybrid implementation: deterministic core + agentic fallbacks

---

## Related Work

- **FR-015:** Harden Kanban Docs Update in Release Workflow
- **E2:S08:** Harden Release Workflow Reliability
- **E2:S08:T02:** Create framework-agnostic Kanban update script (next task, uses this analysis)
- **E2:S08:T03:** Make Step 7 mandatory and blocking (uses this analysis)
- **E2:S08:T04:** Add validation step for Kanban updates (uses this analysis)
- **E2:S08:T05:** Implement error handling and recovery guidance (uses this analysis)
- **E2:S08:T06:** Update RW documentation and agent execution guide (uses this analysis)
- **E2:S08:T07:** Testing and validation (uses this analysis)

---

## Impact

**For Framework Users:**
- Provides clear blueprint for implementing reliable Kanban docs updates
- Establishes deterministic/agentic boundary for Step 7 hardening
- Enables predictable, high-reliability updates for canonical doc structures

**For Implementation:**
- Directly informs E2:S08:T02–T07 implementation approach
- Defines test matrix requirements (canonical flows, non-canonical flows, hard-fail flows)
- Establishes validation criteria and error handling patterns

---

## Next Steps

1. **E2:S08:T02:** Implement framework-agnostic Kanban update script based on this analysis
2. **E2:S08:T03:** Make Step 7 mandatory and blocking using deterministic pipeline
3. **E2:S08:T04:** Add validation step based on consistency checks identified
4. **E2:S08:T05:** Implement error handling using recovery playbooks
5. **E2:S08:T06:** Update RW documentation with deterministic/agentic split
6. **E2:S08:T07:** Test implementation against analysis-defined test matrix

---

**Version:** v0.2.8.1+1  
**Completed:** 2025-12-15
