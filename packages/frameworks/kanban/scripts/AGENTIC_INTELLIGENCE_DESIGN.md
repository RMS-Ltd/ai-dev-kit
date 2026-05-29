---
lifecycle: evergreen
ttl_days: null
created_at: 2025-12-10T17:40:00Z
expires_at: null
housekeeping_policy: keep
---

# Agentic Intelligence Design - Task Mapping

**Status:** DESIGN REQUIRED  
**Epic:** Epic 4 (Kanban Framework)  
**Story:** Story 9 (Bug Fixes and Agentic Intelligence Implementation)  
**Task:** Task 6 (FR-010: Implement Actual Agentic Intelligence for Task Mapping)  
**Related:** BR-008 (Issue #10), FR-010 (Issue #11)

---

## Overview

This document outlines the design requirements for implementing actual agentic intelligence (AI/LLM-based) for intelligent task mapping in canonical adoption mode, replacing the current deterministic word matching approach.

---

## Current State

**Current Implementation:**
- Uses Jaccard similarity (deterministic word matching)
- No threshold-based blocking (removed per BR-008/FR-010)
- Processes all semantic matches
- Maps epics but doesn't intelligently map tasks to canonical stories
- No content understanding or context-aware decisions

**Limitations:**
- No actual understanding of task/epic/story content
- No mapping to canonical stories (just epic renumbering)
- No explanations for decisions
- No context-aware reasoning

---

## Requirements (from FR-010)

### Functional Requirements

- [ ] **FR-1:** Remove arbitrary 80% threshold ✅ COMPLETE (T05)
- [ ] **FR-2:** Use AI/LLM to analyze task content and understand meaning
- [ ] **FR-3:** Make decisions based on context and understanding, not thresholds
- [ ] **FR-4:** Map tasks to appropriate canonical stories (not just renumber epics)
- [ ] **FR-5:** Provide explanations for task placement decisions
- [ ] **FR-6:** Reason about matches at any similarity level if context supports
- [ ] **FR-7:** Analyze epic content to understand purpose and scope
- [ ] **FR-8:** Analyze story content to understand what stories contain
- [ ] **FR-9:** Map tasks based on content understanding, not word matching
- [ ] **FR-10:** Remove all threshold-based logic ✅ COMPLETE (T05)

---

## Design Approach

### Option 1: LLM API Integration (Recommended)

**Approach:**
- Integrate with LLM API (OpenAI, Anthropic, or local model)
- Send task/epic/story content to LLM for analysis
- LLM provides:
  - Content understanding
  - Task-to-story mapping recommendations
  - Reasoning explanations
  - Context-aware decisions

**Pros:**
- Actual intelligence and understanding
- Context-aware decisions
- Explanations for decisions
- Works with any similarity score

**Cons:**
- Requires API key/credentials
- May have latency/cost concerns
- Requires error handling for API failures

**Implementation:**
1. Create `agentic_mapper.py` module
2. Integrate LLM API client
3. Design prompts for content analysis
4. Implement decision-making logic
5. Generate explanations

### Option 2: Local Embedding Model

**Approach:**
- Use local embedding model (sentence-transformers, etc.)
- Generate embeddings for tasks/epics/stories
- Use cosine similarity on embeddings (better than word matching)
- Add simple reasoning layer

**Pros:**
- No API dependencies
- Faster execution
- Lower cost

**Cons:**
- Less intelligent than LLM
- Limited reasoning capabilities
- Still somewhat deterministic

### Option 3: Hybrid Approach

**Approach:**
- Use embeddings for initial matching
- Use LLM for edge cases and explanations
- Fallback to deterministic if LLM unavailable

**Pros:**
- Balanced approach
- Works with or without LLM
- Better than pure deterministic

**Cons:**
- More complex implementation
- Still not fully agentic

---

## Recommended Implementation Plan

### Phase 1: Foundation (Current)
- ✅ Remove threshold (T05)
- ✅ Process all semantic matches
- ⚠️ Basic task mapping (preserves tasks in original locations)

### Phase 2: LLM Integration (T06)
1. **Create Agentic Mapper Module:**
   - `agentic_mapper.py` - Main agentic intelligence module
   - LLM API client integration
   - Content analysis functions
   - Decision-making logic

2. **Design Prompts:**
   - Task content analysis prompt
   - Epic matching prompt
   - Story mapping prompt
   - Explanation generation prompt

3. **Implement Task Mapping:**
   - Analyze task content
   - Understand task purpose
   - Map to appropriate canonical story
   - Generate explanations

4. **Integration:**
   - Integrate into `migrate_structure.py`
   - Replace deterministic mapping with agentic mapping
   - Add explanation output

### Phase 3: Testing & Refinement
- Test with real-world Kanban structures
- Refine prompts based on results
- Add error handling and fallbacks
- Document usage and limitations

---

## Technical Requirements

### Dependencies

**Required:**
- Python 3.7+
- LLM API client library (e.g., `openai`, `anthropic`, or local model)
- Content extraction utilities

**Optional:**
- Caching layer for API responses
- Batch processing for efficiency
- Configuration for API keys/endpoints

### Configuration

```yaml
agentic_intelligence:
  enabled: true
  provider: "openai"  # or "anthropic", "local"
  model: "gpt-4"  # or model name
  api_key: "${AGENTIC_API_KEY}"  # from environment
  temperature: 0.3  # for deterministic but creative responses
  max_tokens: 1000
  cache_enabled: true
  batch_size: 10  # process tasks in batches
```

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

## Next Steps

1. **Design Decision:** Choose implementation approach (LLM API vs Local Model vs Hybrid)
2. **API Selection:** If LLM API, choose provider and model
3. **Prompt Engineering:** Design effective prompts for content analysis
4. **Implementation:** Build agentic_mapper.py module
5. **Integration:** Integrate into migration workflow
6. **Testing:** Test with real-world structures
7. **Documentation:** Update all documentation

---

## References

- **BR-008:** Arbitrary 80% Threshold Contradicts Agentic Intelligence Claims (Issue #10)
- **FR-010:** Implement Actual Agentic Intelligence for Task Mapping (Issue #11)
- **UXR-004:** Kanban Package Installation UAT (Issue #13)
- **Code:** `packages/frameworks/kanban/scripts/migrate_structure.py`
- **Code:** `packages/frameworks/kanban/scripts/semantic_matcher.py`

---

_This design document is part of Epic 4 Story 9 Task 6. See `Story-009-bug-fixes-and-agentic-intelligence.md` for complete story context._

