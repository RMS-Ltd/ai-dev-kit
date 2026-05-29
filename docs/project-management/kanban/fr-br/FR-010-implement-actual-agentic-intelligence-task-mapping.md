---
lifecycle: evergreen
ttl_days: null
created_at: 2025-12-10T17:30:00Z
expires_at: null
housekeeping_policy: keep
---

# Feature Request: Implement Actual Agentic Intelligence for Task Mapping

**Type:** Feature Request (FR)  
**Submitted:** 2025-12-10  
**Submitted By:** AI Agent (Cursor) acting as user/client for dev-toolkit  
**Priority:** HIGH  
**Status:** PENDING  

**Implementing Task:** [E4:S09:T06](../epics/Epic-4/Story-009-bug-fixes-and-agentic-intelligence.md)
**GitHub Issue:** [#11](https://github.com/earlution/ai-dev-kit/issues/11)

---

## Summary

**RECOMMENDED:** Remove the arbitrary 80% threshold wholesale and commit to implementing actual agentic intelligence (AI/LLM-based) for intelligent task mapping in canonical_adoption mode. Replace the current deterministic word matching approach with an agent that analyzes task content, understands meaning, makes context-based decisions, and maps tasks to appropriate canonical stories.

---

## Description

### What functionality is desired?

Replace the current "intelligent task mapping" (which is actually deterministic Jaccard similarity word matching) with actual agentic intelligence that:

1. **Analyzes Task Content:** Uses AI/LLM to understand what tasks actually mean, not just word overlap
2. **Makes Context-Based Decisions:** Reasons about task placement based on content understanding, not arbitrary thresholds
3. **Maps to Canonical Stories:** Intelligently maps tasks to appropriate canonical stories within matched epics
4. **Explains Reasoning:** Provides explanations for task placement decisions
5. **Handles Edge Cases:** Can reason about matches even when similarity scores are below arbitrary thresholds

### What problem does this solve?

**Current Problem:**
- "Intelligent task mapping" is just deterministic word matching (Jaccard similarity)
- Arbitrary 80% threshold prevents feature from executing (real-world matches are 40-55%)
- No actual understanding of task content or meaning
- No mapping to canonical stories (just renumbers epics)
- Feature is non-functional for real-world use cases
- Misleading claims damage framework credibility

**This Feature Solves:**
- Provides actual intelligent analysis of task content
- Makes context-aware decisions, not binary threshold checks
- Maps tasks to appropriate canonical stories based on understanding
- Works with real-world similarity scores (doesn't require arbitrary thresholds)
- Delivers on "intelligent" and "agentic" claims
- Enables true canonical adoption with intelligent migration

### What is the use case?

**Primary Use Case:** Alice has an existing Kanban structure with Epic 1: "Tool Management" containing tasks about tool registry, distribution, and maintenance. She wants to adopt ai-dev-kit's canonical structure. The agent should:

1. Analyze her Epic 1 and understand it matches Canonical Epic 8: "Codebase Maintenance" (even if similarity is 53%)
2. Analyze each task's content to understand what it means
3. Intelligently map tasks to appropriate canonical stories within Epic 8
4. Explain why each task was placed in each canonical story
5. Handle edge cases where tasks don't fit perfectly

**Additional Use Cases:**
- User has tasks that semantically match canonical stories but word similarity is low
- User has tasks that need to be split across multiple canonical stories
- User has tasks that don't match any canonical story (agent explains why and suggests placement)

### Who would benefit from this feature?

- **Users with existing Kanban structures** wanting to adopt canonical structure
- **Projects with real-world epic content** (not just high word overlap)
- **AI agents** automating Kanban framework adoption
- **The ai-dev-kit project itself** by delivering on advertised capabilities

---

## Requirements

### Functional Requirements

- [ ] **FR-1:** System SHALL remove arbitrary 80% threshold completely (no threshold-based decisions)
- [ ] **FR-2:** System SHALL use AI/LLM to analyze task content and understand meaning
- [ ] **FR-3:** System SHALL make decisions based on context and understanding, not thresholds
- [ ] **FR-4:** System SHALL map tasks to appropriate canonical stories (not just renumber epics)
- [ ] **FR-5:** System SHALL provide explanations for task placement decisions
- [ ] **FR-6:** System SHALL reason about matches at any similarity level if context supports
- [ ] **FR-7:** System SHALL analyze epic content to understand purpose and scope
- [ ] **FR-8:** System SHALL analyze story content to understand what stories contain
- [ ] **FR-9:** System SHALL map tasks based on content understanding, not word matching
- [ ] **FR-10:** System SHALL remove all threshold-based logic from codebase

### Non-Functional Requirements

- [ ] **Performance:** Agentic analysis should be efficient (consider caching, batch processing)
- [ ] **Reliability:** Agentic decisions should be consistent and explainable
- [ ] **Usability:** Explanations should be clear and actionable
- [ ] **Intelligence:** Agent should demonstrate actual understanding, not just pattern matching
- [ ] **Transparency:** All decisions must include reasoning and explanation

---

## Scope Analysis

**Problem Domain:** Kanban Framework - Intelligent Task Mapping  
**Affected Areas:**
- [x] Migration Utilities
- [x] Semantic Matching
- [x] Task Mapping Logic
- [x] Documentation
- [ ] Backend/API
- [ ] Frontend/UI
- [ ] Database/Schema
- [ ] Integration/External Service

**Estimated Complexity:** Very Complex (Requires AI/LLM integration, content analysis, decision-making logic, explanation generation)

---

## Use Cases

**Primary Use Case:**
As a project maintainer, I want my existing tasks to be intelligently mapped to canonical stories based on content understanding, so that I can adopt the canonical structure without losing organizational context.

**Additional Use Cases:**
- As an AI agent, I want to use actual intelligence to map tasks, so that I can provide accurate and context-aware migrations
- As a user, I want explanations for task placement, so that I can understand and verify the mapping decisions
- As a developer, I want the system to work with real-world content, so that it's functional for actual projects

---

## Acceptance Criteria

- [ ] **AC-1:** System uses AI/LLM to analyze task content (not just word matching)
- [ ] **AC-2:** System makes context-based decisions (no arbitrary thresholds)
- [ ] **AC-3:** System maps tasks to appropriate canonical stories (not just epic renumbering)
- [ ] **AC-4:** System provides explanations for all task placement decisions
- [ ] **AC-5:** System works with real-world similarity scores (40-55% range)
- [ ] **AC-6:** System demonstrates actual understanding of task/epic/story content
- [ ] **AC-7:** System handles edge cases intelligently (tasks that don't fit perfectly)
- [ ] **AC-8:** All documentation updated to reflect actual agentic intelligence

---

## Dependencies

**Blocks:**
- Actual intelligent task mapping functionality
- Canonical adoption mode working as advertised
- Framework credibility and user trust

**Blocked By:**
- None

**Related Work:**
- **BR-007:** Multiple Bugs in Kanban Package Installation Process
- **BR-008:** Arbitrary 80% Threshold / No Agentic Intelligence
- **UXR-004:** Kanban Package Installation UAT (comprehensive findings)

---

## Intake Decision

**Intake Status:** PENDING  
**Intake Date:** 2025-12-10  
**Intake By:** AI Agent (ai-dev-kit)

**Decision Flow Results:**
- [ ] Story Match Found: [TBD]

**Assigned To:**
- Epic: [TBD]
- Story: [TBD]
- Task: [TBD]
- Version: [TBD]

**Kanban Links:**
- Epic: [TBD]
- Story: [TBD]
- Task: [TBD]

---

## Notes

This feature request addresses the critical gap between advertised "intelligent task mapping" and actual implementation (deterministic word matching). The current implementation:

- Uses Jaccard similarity (word overlap)
- Has arbitrary 80% threshold (should be removed)
- Doesn't analyze task content
- Doesn't map to canonical stories
- Doesn't provide explanations

**RECOMMENDATION:** Remove the threshold wholesale and commit to agentic intelligence. This FR proposes implementing actual agentic intelligence to deliver on the advertised capabilities.

**Key Design Decision:**
- **Remove threshold entirely** - Agentic intelligence should reason contextually, not use binary cutoffs
- **Commit to AI/LLM-based analysis** - Actual understanding of content, not word matching
- **Context-based decisions** - Agent reasons about matches at any similarity level if context supports
- **No fallback to deterministic approach** - Fully commit to agentic intelligence

**Alternative (NOT RECOMMENDED):** If agentic intelligence is not feasible, rename feature to "Deterministic Epic Matching" and remove "intelligent" claims from documentation. However, this reduces framework value and doesn't deliver on advertised capabilities.

---

## References

- **BR-008:** Arbitrary 80% Threshold / No Agentic Intelligence
- **UXR-004:** Kanban Package Installation UAT
- **Code:** `packages/frameworks/kanban/scripts/migrate_structure.py`
- **Code:** `packages/frameworks/kanban/scripts/semantic_matcher.py`

---

**Template Usage:**
- This FR follows the Kanban Framework FR template
- Comprehensive requirements and scope analysis
- Clear acceptance criteria provided
- Use cases documented

---

_This feature request is part of the Kanban Framework. See `packages/frameworks/kanban/` for complete framework documentation._

