---
lifecycle: evergreen
ttl_days: null
created_at: 2026-03-11T15:24:00Z
expires_at: null
housekeeping_policy: keep
---

# FR-041: Windsurf: Investigate how to leverage AGENTS.md and SKILL.md for workflows

**Status:** CLOSED (migration complete)  
**Priority:** HIGH  
**Migration:** E7:S06:T01 completed Windsurf artifact cleanup. Skills migrated to `.cursor/skills/`; `.windsurf/` removed. Cursor is primary; AGENTS.md/SKILL.md patterns applied via .cursor/skills/.  
**Created:** 2026-03-11  
**Last updated:** 2026-03-11 (v0.6.6.3+2 - FR created)  
**Started:** [TBD]  
**Completed:** [TBD]  
**Version:** v0.6.6.3+2  
**Code:** FR-041

---

## Problem Statement

**Current Issues with Workflow Execution:**
- Cascade doesn't understand specialized workflows (RW, UKW, etc.)
- Agent behavior is inconsistent across workflow types
- No clear agent specialization for different task types
- Manual intervention required for complex multi-step workflows
- Terminal interaction problems with agent execution
- Lack of agent capability definitions for specific workflow steps

**Root Cause:**
- No AGENTS.md to define specialized workflow agents
- No SKILL.md to define agent capabilities
- Cascade uses generic agent behavior instead of workflow-specific intelligence
- Missing agent configuration for ai-dev-kit's complex workflow patterns

---

## Solution Overview

**Investigate and implement AGENTS.md and SKILL.md to:**
1. Define specialized agents for each workflow type (RW, UKW, MW, etc.)
2. Define skills/capabilities for each workflow step
3. Enable Cascade to understand and execute workflows autonomously
4. Improve agent specialization and task distribution
5. Reduce manual intervention in complex workflows

---

## Investigation Scope

### Phase 1: Research and Analysis
- **Research Windsurf AGENTS.md specification and capabilities**
- **Research SKILL.md format and skill definition patterns**
- **Analyze current ai-dev-kit workflows for agent specialization opportunities**
- **Identify workflow steps that can benefit from agent specialization**
- **Document current pain points and agent behavior issues**

### Phase 2: Agent Architecture Design
- **Design agent definitions for each workflow type:**
  - RW Agent (Release Workflow specialist)
  - UKW Agent (Universal Kanban Workflow specialist)  
  - MW Agent (Migration Workflow specialist)
  - FR/BR Agent (Feature Request/Bug Report processing specialist)
  - Validation Agent (Branch safety, changelog format validation)
  - Documentation Agent (README, changelog, kanban docs updates)


- **Design skill definitions for workflow capabilities:**
  - Version bumping skills
  - Changelog generation skills
  - Git operation skills (with proper terminal interaction)
  - Kanban board update skills
  - Validation and verification skills
  - Documentation update skills


### Phase 3: Implementation and Testing
- **Create AGENTS.md with specialized agent definitions**
- **Create .windsurf/skills/SKILL.md with capability definitions**
- **Test agent behavior with RW -d workflow execution**
- **Test agent behavior with UKW workflow execution**
- **Validate improved terminal interaction and command execution**
- **Measure reduction in manual intervention requirements**

### Phase 4: Integration and Documentation
- **Integrate agent definitions with existing workflow infrastructure**
- **Update workflow documentation to reference agent capabilities**
- **Create agent configuration guides for workflow maintainers**
- **Document best practices for agent specialization**

---

## Expected Outcomes

### Primary Benefits
- **Autonomous Workflow Execution:** Cascade understands and executes workflows without manual guidance
- **Agent Specialization:** Each workflow step handled by appropriately skilled agent
- **Improved Terminal Interaction:** Agents properly execute git commands and validation scripts
- **Reduced Manual Intervention:** Complex workflows run end-to-end without user assistance
- **Consistent Agent Behavior:** Predictable agent performance across workflow types

### Secondary Benefits
- **Better Error Handling:** Specialized agents provide more targeted error messages
- **Workflow Scalability:** Ability to run multiple concurrent workflows with different agents
- **Maintainability:** Clear separation of concerns between agent types and skills
- **Extensibility:** Easy to add new workflow types and agent capabilities

---

## Success Criteria

### Technical Success
- [ ] AGENTS.md successfully defines specialized workflow agents
- [ ] SKILL.md successfully defines workflow step capabilities
- [ ] Cascade executes RW -d workflow autonomously without manual intervention
- [ ] Terminal commands execute properly through agent definitions
- [ ] Validation scripts run correctly through specialized agents
- [ ] Multi-step workflows complete end-to-end without user guidance

### User Experience Success
- [ ] Reduced frustration with workflow execution
- [ ] Fewer "script monkey" behavior incidents
- [ ] Clear agent behavior and predictable responses
- [ ] Improved workflow reliability and consistency
- [ ] Better error messages and recovery suggestions

### Workflow Success
- [ ] RW workflows execute with proper agent specialization
- [ ] UKW workflows benefit from kanban-specialized agents
- [ ] FR/BR processing uses intake-specialized agents
- [ ] Documentation updates handled by documentation-specialized agents
- [ ] Validation steps handled by validation-specialized agents

---

## Implementation Considerations

### Technical Considerations
- **AGENTS.md Format Compliance:** Follow Windsurf AGENTS.md specification exactly
- **Skill Definition Standards:** Use proper SKILL.md format and syntax
- **Backward Compatibility:** Ensure existing workflows continue to function
- **Error Handling:** Define fallback behavior when agent definitions fail
- **Performance:** Monitor agent execution overhead and optimize accordingly

### Integration Considerations
- **Workflow Infrastructure:** Integrate with existing rw-config.yaml and workflow scripts
- **Kanban Integration:** Ensure agents can properly update kanban boards
- **Git Integration:** Verify agents can execute git operations correctly
- **Documentation Integration:** Maintain consistency with existing workflow documentation

### Maintenance Considerations
- **Agent Evolution:** Plan for agent capability updates and improvements
- **Skill Management:** Define process for updating skill definitions
- **Testing Strategy:** Create test cases for agent behavior validation
- **Documentation Maintenance:** Keep agent documentation current with capabilities

---

## Related Work

### Current ai-dev-kit Agent Infrastructure
- **RW Agent Execution:** Current issues with Release Workflow agent behavior
- **UKW Agent Execution:** Problems with Universal Kanban Workflow automation
- **FR/BR Agent Processing:** Intake workflow agent capabilities
- **Validation Agent Issues:** Branch safety and changelog format validation problems

### Related Features and Bug Reports
- **BR-008:** Arbitrary 80% threshold contradicts agentic intelligence
- **FR-010:** Implement actual agentic intelligence task mapping
- **FR-012:** Agentic kanban task creation from FR/BR
- **E5:S01:T31:** Multi-agent coordination feasibility investigation

### Windsurf Integration
- **Cascade Agent System:** Current Cascade agent behavior and limitations
- **MCP Integration:** Model Context Protocol for agent communication
- **Enterprise Features:** System-level skill definitions for team environments

---

## Risk Assessment

### High Risks
- **AGENTS.md/SKILL.md Format Changes:** Windsurf specification changes could break implementation
- **Agent Behavior Inconsistency:** New agent definitions might introduce unexpected behaviors
- **Terminal Interaction Issues:** Agent-based command execution might have different limitations

### Medium Risks
- **Performance Overhead:** Agent specialization might slow down workflow execution
- **Maintenance Complexity:** Additional agent configuration increases maintenance burden
- **Learning Curve:** Team needs to learn new agent configuration patterns

### Low Risks
- **Backward Compatibility:** Existing workflows might behave differently with new agents
- **Documentation Overhead:** Need to maintain additional agent documentation
- **Testing Complexity:** More agent combinations to test and validate

---

## Next Steps

### Immediate Actions (Week 1)
1. **Research Windsurf Documentation:** Study AGENTS.md and SKILL.md specifications
2. **Analyze Current Workflows:** Document agent behavior issues and improvement opportunities
3. **Create Investigation Plan:** Define detailed research methodology and success metrics

### Short-term Actions (Weeks 2-3)
1. **Prototype Agent Definitions:** Create initial AGENTS.md and SKILL.md files
2. **Test Basic Agent Behavior:** Validate agent definitions with simple workflows
3. **Refine Agent Specifications:** Iterate based on testing results

### Medium-term Actions (Weeks 4-6)
1. **Implement Full Agent Suite:** Complete agent definitions for all workflow types
2. **Integration Testing:** Test agents with complete workflow execution
3. **Documentation and Training:** Create guides and train team on new agent system

### Long-term Actions (Weeks 7-8)
1. **Production Deployment:** Roll out agent definitions to production workflows
2. **Monitoring and Optimization:** Track agent performance and optimize accordingly
3. **Continuous Improvement:** Establish process for ongoing agent capability updates

---

**Impact Assessment:** HIGH - This investigation could fundamentally improve workflow execution reliability and reduce manual intervention requirements across all ai-dev-kit workflows.

**Dependencies:** Windsurf AGENTS.md/SKILL.md documentation, Cascade agent system stability, existing workflow infrastructure.

**Success Probability:** HIGH - Clear problem definition, recent Windsurf feature support, and direct alignment with current pain points.

---

*End of FR-041*
