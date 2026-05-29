---
lifecycle: evergreen
ttl_days: null
created_at: 2025-12-04T12:01:50Z
expires_at: null
housekeeping_policy: keep
---

# Story 003 – Additional Workflows & Examples

**Status:** COMPLETE ✅  
**Priority:** MEDIUM  
**Estimated Effort:** [TBD]  
**Created:** 2025-12-03  
**Last updated:** 2025-12-03 (v0.2.3.6+1 – All tasks complete)  
**Version:** v0.2.3.6+1  
**Code:** E2S03

---

## Overview

Create additional workflow examples beyond the Release Workflow that demonstrate the agent-driven workflow execution pattern. These workflows will follow the same ANALYZE → DETERMINE → EXECUTE → VALIDATE → PROCEED pattern and serve as templates for other project workflows.

---

## Goal

Provide additional workflow examples that:
- Follow the agent-driven execution pattern (ANALYZE → DETERMINE → EXECUTE → VALIDATE → PROCEED)
- Demonstrate different workflow types (refactor, migration, testing, etc.)
- Serve as portable templates for other projects
- Include complete documentation and examples

---

## Task Checklist

- [x] **E2:S03:T01 – Analyze workflow types and create workflow taxonomy** ✅ COMPLETE (v0.2.3.1+2)
- [x] **E2:S03:T02 – Create Refactor Workflow example** ✅ COMPLETE (v0.2.3.2+1)
- [x] **E2:S03:T03 – Create Migration Workflow example** ✅ COMPLETE (v0.2.3.3+2)
- [x] **E2:S03:T04 – Create Testing Workflow example** ✅ COMPLETE (v0.2.3.4+1)
- [x] **E2:S03:T05 – Create workflow template generator** ✅ COMPLETE (v0.2.3.5+1)
- [x] **E2:S03:T06 – Document workflow customization patterns** ✅ COMPLETE (v0.2.3.6+1)

---

## Tasks

### E2:S03:T01 – Analyze workflow types and create workflow taxonomy

**Input:**  
- Release Workflow as reference pattern
- Common project workflow needs
- Agent-driven execution methodology

**Deliverable:**  
- Workflow taxonomy document
- Workflow type definitions
- Use case analysis

**Approach:**
1. Analyze Release Workflow pattern
2. Identify common workflow types
3. Create taxonomy of workflow categories
4. Document use cases for each type

**Dependencies:** None

---

### E2:S03:T02 – Create Refactor Workflow example

**Input:**  
- Workflow taxonomy from T01
- Agent-driven execution pattern
- Release Workflow as template

**Deliverable:**  
- Refactor Workflow YAML
- Refactor Workflow execution guide
- Refactor Workflow examples

**Approach:**
1. Define refactor workflow steps
2. Create workflow YAML
3. Create execution guide
4. Add examples

**Dependencies:** T01

---

### E2:S03:T03 – Create Migration Workflow example

**Input:**  
- Workflow taxonomy from T01
- Agent-driven execution pattern
- Release Workflow as template

**Deliverable:**  
- Migration Workflow YAML
- Migration Workflow execution guide
- Migration Workflow examples

**Approach:**
1. Define migration workflow steps
2. Create workflow YAML
3. Create execution guide
4. Add examples

**Dependencies:** T01

---

### E2:S03:T04 – Create Testing Workflow example

**Input:**  
- Workflow taxonomy from T01
- Agent-driven execution pattern
- Release Workflow as template

**Deliverable:**  
- Testing Workflow YAML
- Testing Workflow execution guide
- Testing Workflow examples

**Approach:**
1. Define testing workflow steps
2. Create workflow YAML
3. Create execution guide
4. Add examples

**Dependencies:** T01

---

### E2:S03:T05 – Create workflow template generator

**Input:**  
- All workflow examples (T02-T04)
- Workflow taxonomy (T01)
- Agent-driven execution pattern

**Deliverable:**  
- Workflow template generator tool/script
- Template documentation
- Usage examples

**Approach:**
1. Analyze common workflow patterns
2. Create template generator
3. Document usage
4. Add examples

**Dependencies:** T01, T02, T03, T04

---

### E2:S03:T06 – Document workflow customization patterns

**Input:**  
- All workflow examples (T02-T04)
- Workflow template generator (T05)
- Customization requirements

**Deliverable:**  
- Workflow customization guide
- Pattern documentation
- Best practices

**Approach:**
1. Document customization patterns
2. Create customization guide
3. Add best practices
4. Include examples

**Dependencies:** T01, T02, T03, T04, T05

---

## Success Criteria

- [ ] Workflow taxonomy created and documented
- [ ] At least 3 workflow examples created (Refactor, Migration, Testing)
- [ ] All workflows follow agent-driven execution pattern
- [ ] All workflows are project-agnostic and portable
- [ ] Workflow template generator available
- [ ] Customization patterns documented

---

## References

- **Agent-Driven Execution:** `packages/frameworks/workflow mgt/docs/documentation/Developer_Docs/vwmp/agent-driven-workflow-execution.md`
- **Release Workflow:** `packages/frameworks/workflow mgt/docs/documentation/Developer_Docs/vwmp/release-workflow-agent-execution.md`
- **Workflow YAML:** `packages/frameworks/workflow mgt/workflows/release-workflow.yaml`

---

_End of Story 003_

