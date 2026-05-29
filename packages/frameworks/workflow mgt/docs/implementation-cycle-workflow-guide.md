---
lifecycle: evergreen
ttl_days: null
created_at: 2026-03-12T15:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Implementation Cycle Workflow (ICW) Guide

**Version:** 1.0.0  
**Last Updated:** 2026-03-12  
**Purpose:** Comprehensive guide for executing the Implementation Cycle Workflow (ICW) using the agent-driven execution pattern  
**Type:** Implementation Workflow  

---

## 🎯 Overview

The Implementation Cycle Workflow (ICW) provides a systematic approach to implementation work following the agent-driven execution pattern: **ANALYZE → DETERMINE → EXECUTE → VALIDATE → PROCEED**. This workflow is designed for disciplined implementation tasks that require comprehensive analysis, planning, execution, and validation.

### Durable artifacts (ICW responsibility)

ICW outputs must be **committed under `docs/`** (by default `docs/implementation-cycles/`, per `icw-workflow.yaml` `output_dir`), **linked from the Kanban task**, and **not left only** in IDE-local plan directories. See **[Specification and planning artifacts policy](../../../../docs/architecture/standards-and-adrs/specification-and-planning-artifacts-policy.md)** and **[implementation-cycles README](../../../../docs/implementation-cycles/README.md)**.

---

## 🔄 Agent-Driven Execution Pattern

The ICW follows a structured five-phase approach:

### Phase 1: ANALYZE

- **Objective:** Deep analysis of requirements and context
- **Activities:** Requirements gathering, impact analysis, dependency identification
- **Output:** Comprehensive analysis report and implementation scope

### Phase 2: DETERMINE  

- **Objective:** Strategic planning and approach determination
- **Activities:** Solution design, implementation strategy, resource planning
- **Output:** Detailed implementation plan and execution roadmap

### Phase 3: EXECUTE

- **Objective:** Systematic implementation of the solution
- **Activities:** Code implementation, configuration changes, documentation updates
- **Output:** Complete implementation with supporting artifacts

### Phase 4: VALIDATE

- **Objective:** Comprehensive validation of implementation quality
- **Activities:** Testing, quality assurance, performance validation
- **Output:** Validation report and quality metrics

### Phase 5: PROCEED

- **Objective:** Final documentation and next steps determination
- **Activities:** Documentation completion, knowledge transfer, future planning
- **Output:** Complete documentation and implementation closure

---

## 🚀 Getting Started

### Using the Workflow Generator

Generate a new ICW workflow:

```bash
python packages/frameworks/workflow\ mgt/scripts/generate_workflow.py \
  --type implementation-cycle \
  --name "My Implementation Task" \
  --description "Implementation of specific feature or fix" \
  --output my-implementation-workflow.yaml
```

### Using the Existing ICW Workflow

The framework includes a pre-configured ICW workflow at:

```text
packages/frameworks/workflow mgt/workflows/implementation-cycle-workflow/icw-workflow.yaml
```

---

## 📋 Workflow Structure

### Standard ICW Steps

1. **Initialize Implementation Cycle**
   - Set up implementation environment
   - Create output directories and state tracking
   - Validate prerequisites and dependencies

2. **Phase 1 - Ascertain Requirements**
   - Consolidate functional requirements from task, FR/BR context, and acceptance criteria
   - Consolidate non-functional requirements (constraints and quality attributes)
   - Confirm scope boundaries and invariants
   - Establish a testable requirement baseline

3. **Phase 2 - Specification Definition**
   - Define problem statement and objectives
   - Identify acceptance criteria and constraints
   - Document requirements and scope

4. **Phase 3 - Test Design**
   - Design comprehensive test strategy
   - Define test cases and validation criteria
   - Plan testing infrastructure and tools

5. **Phase 4 - Implementation Planning**
   - Create detailed implementation roadmap
   - Define milestones and deliverables
   - Plan resource allocation and timeline

6. **Phase 5 - Implementation Execution**
   - Execute implementation according to plan
   - Monitor progress and quality metrics
   - Handle issues and adjustments

7. **Phase 6 - Validation and Documentation**
   - Validate implementation against requirements
   - Complete documentation and knowledge transfer
   - Determine next steps and closure

---

## ⚙️ Configuration Options

### ICW Configuration Parameters

```yaml
config:
  implementation_branch_prefix: implement/
  analysis_depth: full
  planning_required: true
  validation_strict: true
  documentation_comprehensive: true
  agent_driven: true
  phases:
    - specification
    - test_design
    - implementation_planning
```

### Customization Options

- **Branch Prefix:** Customize implementation branch naming
- **Analysis Depth:** Control thoroughness of analysis phase
- **Validation Strictness:** Adjust validation requirements
- **Documentation Level:** Set documentation comprehensiveness

---

## 🔧 Usage Examples

### Example 1: Feature Implementation

```bash
# Generate workflow for new feature implementation
python packages/frameworks/workflow\ mgt/scripts/generate_workflow.py \
  --type implementation-cycle \
  --name "User Authentication Feature" \
  --description "Implement user authentication system with OAuth2" \
  --output auth-implementation-workflow.yaml
```

### Example 2: Bug Fix Implementation

```bash
# Generate workflow for critical bug fix
python packages/frameworks/workflow\ mgt/scripts/generate_workflow.py \
  --type implementation-cycle \
  --name "Memory Leak Fix" \
  --description "Fix memory leak in data processing module" \
  --output bugfix-implementation-workflow.yaml
```

### Example 3: System Refactoring

```bash
# Generate workflow for system refactoring
python packages/frameworks/workflow\ mgt/scripts/generate_workflow.py \
  --type implementation-cycle \
  --name "Database Layer Refactor" \
  --description "Refactor database layer for performance optimization" \
  --output refactor-implementation-workflow.yaml
```

---

## 📊 Integration with Other Workflows

### Complementary Workflows

- **Release Workflow (RW):** Use after ICW for releasing implementation
- **Testing Workflow:** Can be integrated into ICW validation phase
- **Migration Workflow:** Use for data migration within ICW
- **Refactor Workflow:** Alternative for refactoring-focused tasks

### Workflow Sequencing

```text
ICW → Testing Workflow → Release Workflow
ICW → Migration Workflow → Release Workflow
ICW → Documentation Workflow → Release Workflow
```

---

## 🎯 Best Practices

### Analysis Phase

- **Comprehensive Requirements:** Thoroughly understand all requirements
- **Impact Assessment:** Identify all affected components and systems
- **Risk Analysis:** Identify potential risks and mitigation strategies

### Planning Phase

- **Detailed Roadmap:** Create step-by-step implementation plan
- **Resource Planning:** Ensure adequate resources and time allocation
- **Quality Gates:** Define clear quality checkpoints and criteria

### Execution Phase

- **Incremental Implementation:** Implement in manageable increments
- **Continuous Validation:** Validate each increment before proceeding
- **Progress Monitoring:** Track progress against plan and adjust as needed

### Validation Phase

- **Comprehensive Testing:** Test all aspects of implementation
- **Quality Assurance:** Ensure quality standards are met
- **Performance Validation:** Validate performance requirements

### Documentation Phase

- **Complete Documentation:** Document all aspects of implementation
- **Knowledge Transfer:** Ensure knowledge is transferred to team
- **Future Planning:** Plan for future maintenance and enhancements

---

## 🔍 Troubleshooting

### Common Issues

**Issue:** Workflow fails during analysis phase
**Solution:** Verify requirements are complete and well-defined

**Issue:** Implementation exceeds timeline
**Solution:** Review planning phase and adjust scope or resources

**Issue:** Validation failures
**Solution:** Review implementation against acceptance criteria

**Issue:** Documentation incomplete
**Solution:** Ensure all implementation aspects are documented

### Error Handling

The ICW includes comprehensive error handling:

- **Phase Validation:** Each phase validates completion before proceeding
- **Rollback Capability:** Ability to rollback failed implementations
- **Recovery Procedures:** Clear procedures for recovering from failures

---

## 📈 Metrics and Success Criteria

### Quality Metrics

- **Requirements Coverage:** 100% of requirements addressed
- **Test Coverage:** >90% test coverage for new code
- **Documentation Completeness:** 100% documentation coverage
- **Performance Standards:** All performance requirements met

### Success Criteria

- **Functional Requirements:** All functional requirements implemented
- **Non-Functional Requirements:** All non-functional requirements met
- **Quality Standards:** All quality standards achieved
- **Timeline Adherence:** Implementation completed within planned timeline

---

## 🔄 Continuous Improvement

### Feedback Loop

- **Post-Implementation Review:** Conduct thorough review after completion
- **Lessons Learned:** Document lessons learned for future improvements
- **Process Refinement:** Refine ICW process based on experience

### Workflow Evolution

- **Template Updates:** Update workflow templates based on usage patterns
- **Tool Integration:** Integrate new tools and technologies
- **Best Practices:** Continuously update best practices and guidelines

---

## 📚 Additional Resources

### Related Documentation

- [Agent-Driven Workflow Execution Guide](docs/documentation/Developer_Docs/vwmp/agent-driven-workflow-execution.md)
- [Workflow Generator Documentation](scripts/README-workflow-generator.md)
- [Quality Assurance Guidelines](docs/documentation/Developer_Docs/vwmp/quality-assurance.md)

### Support and Training

- **Workflow Examples:** Review example workflows for different scenarios
- **Training Materials:** Access training materials for ICW execution
- **Community Support:** Engage with community for best practices and support

---

**Workflow Status:** ✅ PRODUCTION READY  
**Documentation Version:** 1.0.0  
**Last Updated:** 2026-03-12  
**Maintainer:** Workflow Management Team
