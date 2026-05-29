---
lifecycle: evergreen
ttl_days: null
created_at: 2025-12-10T17:30:00Z
expires_at: null
housekeeping_policy: keep
---

# Bug Report: Arbitrary 80% Threshold Contradicts Agentic Intelligence Claims

**Type:** Bug Report (BR)  
**Submitted:** 2025-12-10  
**Submitted By:** AI Agent (Cursor) acting as user/client for dev-toolkit  
**Priority:** CRITICAL  
**Severity:** HIGH  
**Status:** PENDING  

**Implementing Task:** [E4:S09:T05](../epics/Epic-4/Story-009-bug-fixes-and-agentic-intelligence.md)
**GitHub Issue:** [#10](https://github.com/earlution/ai-dev-kit/issues/10)

---

## Summary

The "intelligent task mapping" feature uses an arbitrary 80% similarity threshold with no documented rationale, contradicting claims of agentic intelligence. The threshold prevents the feature from executing and reveals the system is deterministic word matching, not actual agentic intelligence.

---

## Description

### What is the bug?

The canonical_adoption mode claims to provide "intelligent task mapping" with "agentic intelligence," but:

1. **Arbitrary Threshold:** 80% similarity threshold is hardcoded with no documented rationale
2. **No Agentic Intelligence:** System uses deterministic Jaccard similarity (word matching), not AI/agentic analysis
3. **Feature Non-Functional:** Threshold prevents feature from executing (real-world matches are 40-55%)
4. **Misleading Claims:** Documentation and code comments claim "intelligent" and "agentic" capabilities that don't exist

### What should happen vs. what actually happens?

**Expected Behavior (if agentic intelligence):**
- AI agent analyzes task content and understands meaning
- Agent makes decisions based on context, not arbitrary thresholds
- Agent can reason about 53% matches if context supports it
- Agent explains its reasoning for task placement decisions
- Agent maps tasks to appropriate canonical stories based on content understanding

**Actual Behavior:**
- Deterministic Jaccard similarity calculation (word overlap percentage)
- Binary pass/fail decision based on 80% threshold
- No reasoning or explanation provided
- No context consideration
- No actual task content analysis
- Feature doesn't execute because real-world matches are below threshold

### When does it occur?

This occurs when:
- Using canonical_adoption mode
- Semantic matching finds matches below 80% (which is all real-world matches)
- Attempting to leverage "intelligent task mapping"
- Reviewing code and documentation claiming agentic intelligence

### Who is affected?

- Users expecting agentic intelligence for task mapping
- Projects with existing Kanban structures (all similarity scores below 80%)
- Framework credibility (misleading feature claims)
- AI agents attempting to use intelligent mapping features

---

## Affected Component

**Primary Component:** Kanban Framework - Intelligent Task Mapping / Canonical Adoption  
**Affected Areas:**
- [x] Installation Process
- [x] Migration Utilities
- [x] Semantic Matching
- [x] Documentation
- [x] Feature Claims
- [ ] Backend/API
- [ ] Frontend/UI
- [ ] Database/Schema
- [ ] Integration/External Service

**Root Cause:**
- Feature is misnamed - it's deterministic word matching, not agentic intelligence
- Arbitrary threshold has no documented rationale or evidence
- No actual AI/agentic intelligence implementation
- Documentation and code comments make false claims

---

## Steps to Reproduce

1. Install Kanban package with existing Kanban structure
2. Run installation in canonical_adoption mode
3. Observe semantic matching finds matches (e.g., 52.6%, 53.3%)
4. **Result:** All matches below 80% threshold, intelligent mapping never executes
5. Review code: `if match["similarity_score"] >= 80:` - arbitrary threshold with no rationale
6. Review semantic_matcher.py: Uses Jaccard similarity (deterministic word matching)
7. **Finding:** No agentic intelligence present, just word matching with threshold

**Evidence:**
- Code: `packages/frameworks/kanban/scripts/migrate_structure.py` line 274
- Code: `packages/frameworks/kanban/scripts/semantic_matcher.py` - Jaccard similarity only
- Documentation: Claims "intelligent task mapping" and "agentic intelligence"
- Reality: Deterministic word matching with arbitrary cutoff

---

## Environment

**Environment:** Development  
**Version:** Kanban Framework v2.1.0  
**Repository:** earlution/dev-toolkit (consuming ai-dev-kit framework)  
**Framework Source:** earlution/ai-dev-kit  
**Framework Path:** `packages/frameworks/kanban/`  
**Python Version:** 3.x

---

## Impact

**User Impact:**
- [x] Critical - Feature claims don't match reality
- [x] High - Feature is non-functional for real-world use cases
- [x] Medium - Misleading documentation and claims
- [ ] Low - Minor issue, workaround available

**Business Impact:**
- Framework credibility damaged by false claims
- Users cannot use advertised "intelligent" features
- Real-world similarity scores (40-55%) are below arbitrary threshold
- Feature is effectively non-functional

**Workaround:**
- None - feature doesn't work for real-world scenarios
- Must manually map tasks (defeats purpose of "intelligent" feature)

---

## Acceptance Criteria (Fix Requirements)

### ✅ RECOMMENDED: Remove Threshold Wholesale and Commit to Agentic Intelligence

**Recommendation:** Remove the arbitrary 80% threshold entirely and commit to implementing actual agentic intelligence. This aligns with the advertised "intelligent task mapping" capabilities and delivers on user expectations.

- [ ] **Criterion 1:** Remove arbitrary 80% threshold completely (no threshold-based decisions)
- [ ] **Criterion 2:** Implement actual AI/LLM-based agentic intelligence
- [ ] **Criterion 3:** Agent analyzes task content and understands meaning
- [ ] **Criterion 4:** Agent makes decisions based on context and understanding, not thresholds
- [ ] **Criterion 5:** Agent explains reasoning for task placement decisions
- [ ] **Criterion 6:** Agent maps tasks to appropriate canonical stories based on content understanding
- [ ] **Criterion 7:** Agent can reason about matches at any similarity level if context supports
- [ ] **Criterion 8:** All threshold-based logic removed from codebase

**Rationale:**
- Threshold contradicts agentic intelligence principles
- Real-world matches are below threshold (40-55%), making feature non-functional
- Agentic intelligence should reason contextually, not use binary cutoffs
- Delivers on advertised "intelligent" and "agentic" claims
- Provides actual value to users with existing Kanban structures

### Option 2: Rename and Document Deterministic Approach (NOT RECOMMENDED)

- [ ] **Criterion 1:** Rename feature to "Deterministic Epic Matching" (remove "intelligent" claims)
- [ ] **Criterion 2:** Document rationale for 80% threshold (if keeping deterministic approach)
- [ ] **Criterion 3:** Provide evidence/supporting data for threshold choice
- [ ] **Criterion 4:** Update all documentation to reflect deterministic nature
- [ ] **Criterion 5:** Adjust threshold based on real-world data (or remove threshold)

**Note:** This option is NOT RECOMMENDED as it doesn't deliver on advertised capabilities and reduces framework value.

**Verification Method:**
- [x] Manual testing (UAT scenario)
- [ ] Code review
- [ ] Documentation review
- [ ] Both

---

## Fix Attempt History

**Purpose:** This section documents all fix attempts for this bug.

### Fix Attempts

*No fix attempts yet - design flaw discovered during UAT*

---

## Dependencies

**Blocks:**
- Actual agentic intelligence implementation
- Functional intelligent task mapping
- Framework credibility and user trust

**Blocked By:**
- None

**Related Work:**
- **UXR-004:** Kanban Package Installation UAT (comprehensive findings)
- **BR-007:** Multiple Bugs in Kanban Package Installation Process
- **FR-010:** Implement Actual Agentic Intelligence for Task Mapping

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

### Critical Questions Raised

**User Question:** "If we're attempting to leverage agentic intelligence, please justify the inclusion of an arbitrary 80% threshold. What was the purpose of measuring against that? Value?"

**Answer:** There is NO justification - and that's the problem. The threshold:
- Is hardcoded with no documentation
- Has no rationale or evidence
- Contradicts agentic intelligence principles
- Proves this is deterministic, not intelligent

### Design Flaw Analysis

**If Agentic Intelligence:**
- Agent would analyze content and understand meaning
- Agent would make decisions based on context, not thresholds
- Agent could reason about 53% matches if context supports it
- Agent would explain its reasoning

**With Deterministic Threshold:**
- Arbitrary cutoff (why 80%? why not 75% or 85%?)
- No reasoning or explanation
- Binary decision (pass/fail)
- No context consideration

**Conclusion:** The threshold itself is evidence this is NOT agentic intelligence.

---

## References

- **UXR-004:** Kanban Package Installation UAT (`docs/project-management/kanban/fr-br/UXR-004-kanban-package-installation-uat.md`)
- **Code:** `packages/frameworks/kanban/scripts/migrate_structure.py` line 274
- **Code:** `packages/frameworks/kanban/scripts/semantic_matcher.py` (Jaccard similarity implementation)
- **Documentation:** `packages/frameworks/kanban/scripts/README.md` (claims "intelligent task mapping")

---

**Template Usage:**
- This BR follows the Kanban Framework BR template
- Documents design flaw, not just code bug
- Raises critical questions about feature claims
- Provides options for resolution

---

_This bug report is part of the Kanban Framework. See `packages/frameworks/kanban/` for complete framework documentation._

