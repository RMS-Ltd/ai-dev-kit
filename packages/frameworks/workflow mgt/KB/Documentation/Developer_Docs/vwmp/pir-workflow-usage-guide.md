---
lifecycle: evergreen
ttl_days: null
created_at: 2025-12-16T23:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Post-Implementation Review (PIR) Workflow: Usage Guide

**Version:** 1.0.0
**Last Updated:** 2025-12-16
**Related:** Epic 2, Story 5 - Post-Implementation Review Workflow

---

## 📖 Overview

This guide provides practical, user-friendly instructions for using the Post-Implementation Review (PIR) workflow. It includes step-by-step examples, common scenarios, best practices, and troubleshooting tips.

**Who This Guide Is For:**
- Developers conducting PIR reviews
- Project managers overseeing reviews
- AI agents executing PIR workflows
- Teams adopting the PIR workflow

**Prerequisites:**
- Familiarity with Kanban system
- Understanding of project versioning schema
- Basic knowledge of workflow execution patterns

---

## 🚀 Quick Start

### When to Use PIR

**Epic-Level PIR:**
- ✅ Always triggered when Epic is marked COMPLETE
- ✅ Comprehensive review of entire Epic
- ✅ Reviews all Stories within Epic

**Story-Level PIR:**
- ✅ Triggered when Story is marked COMPLETE (if significant)
- ✅ Significance evaluated automatically
- ✅ Focused review of individual Story

### How PIR is Triggered

**Automatic Trigger (Recommended):**
- PIR is automatically triggered by RW Step 15 when Epic/Story is marked COMPLETE
- No manual intervention required
- Deterministic check ensures reliable triggering

**Manual Trigger (If Needed):**
- Can be triggered manually if auto-trigger missed
- Follow same workflow steps
- Ensure Epic/Story is COMPLETE before triggering

---

## 📋 Common Scenarios

### Scenario 1: Epic Completion Review

**Situation:** Epic 2 (Workflow Management Framework) is marked COMPLETE

**What Happens:**
1. RW Step 15 detects Epic 2 is COMPLETE
2. PIR workflow automatically triggered
3. All 16 steps execute (Step 2 skipped for Epic-level)
4. PIR report generated: `docs/Reviews/pir/Epic-2/PIR-Epic-2-v0.2.11.9+3.md`
5. Epic document updated with PIR summary
6. Follow-up tasks created if needed

**Result:** Comprehensive Epic review completed, knowledge captured, improvements identified

### Scenario 2: Significant Story Completion Review

**Situation:** Story 5 (Post-Implementation Review Workflow) is marked COMPLETE, evaluated as High Significance

**What Happens:**
1. RW Step 15 detects Story 5 is COMPLETE
2. Significance evaluation: High (introduces new patterns, multiple tasks)
3. PIR workflow triggered
4. All 16 steps execute (including Step 2 significance evaluation)
5. PIR report generated: `docs/Reviews/pir/Story-5/PIR-Story-5-v0.2.5.11+1.md`
6. Story document updated with PIR summary
7. Follow-up tasks created if needed

**Result:** Story review completed, patterns documented, improvements identified

### Scenario 3: Non-Significant Story Completion

**Situation:** Story marked COMPLETE, evaluated as Low Significance

**What Happens:**
1. RW Step 15 detects Story is COMPLETE
2. Significance evaluation: Low (simple bug fix)
3. PIR workflow skipped
4. Skip reason documented in Story document

**Result:** PIR skipped (not significant enough), workflow continues

---

## 📝 Step-by-Step Examples

### Example 1: Manual Epic PIR Execution

**Step 1: Identify Review Scope**
```bash
# Read Epic document
Epic: docs/project-management/kanban/epics/Epic-2/Epic-2.md
Status: COMPLETE ✅
Review Level: Epic
```

**Step 2: Skip (Epic-level)**
- No significance evaluation needed for Epic-level

**Step 3: Gather Review Materials**
```bash
# Gather all materials
Epic document: ✅
Story documents: ✅ (11 Stories)
Changelog entries: ✅ (12 entries)
Related documents: ✅ (3 BR/FR documents)
```

**Step 4: Prepare Review Checklist**
```markdown
# Checklist sections initialized
- [ ] Goals assessment
- [ ] Stories review (11 Stories)
- [ ] Technical assessment
- [ ] Documentation assessment
- [ ] Lessons learned
- [ ] Patterns and anti-patterns
- [ ] Follow-up actions
```

**Step 5: Review Completed Work Items**
```markdown
### Story 1: Release Workflow Agent Execution
- Status: COMPLETE
- Version: v0.2.1.6+4
- Quality: Excellent
- Goals Achieved: Yes

### Story 2: PDCA Integration
- Status: COMPLETE
- Version: v0.2.2.8+1
- Quality: Excellent
- Goals Achieved: Yes
```

**Step 6: Analyze Goals vs Outcomes**
```markdown
- [x] Goal 1: Create comprehensive workflow management framework
  - Status: Achieved
  - Evidence: Multiple Stories completed, comprehensive documentation

- [x] Goal 2: Integrate workflows with Kanban and versioning
  - Status: Achieved
  - Evidence: Integration guides created, bidirectional links established
```

**Step 7: Review Technical Implementation**
```markdown
### Architecture Decisions
- Decision: Agent-driven execution pattern
- Rationale: Follows established RW pattern
- Impact: Enables intelligent workflow execution

### Code Quality
- Overall Assessment: Excellent
- Documentation: Excellent
```

**Step 8: Assess Documentation Quality**
```markdown
- Completeness: Excellent
- Documentation Created: 8 major documents
- Documentation Gaps: None
```

**Step 9: Identify Lessons Learned**
```markdown
### What Went Well
- Agent-driven execution pattern proved highly effective
- Integration approach made implementation clear

### What Could Be Improved
- Automated testing would improve reliability
- Additional validation steps could catch errors earlier
```

**Step 10: Create PIR Report**
```bash
# Report created
Location: docs/Reviews/pir/Epic-2/PIR-Epic-2-v0.2.11.9+3.md
Version Range: v0.2.1.1+1 to v0.2.11.9+3
```

**Step 11: Update Knowledge Base**
```bash
# KB updated
Report stored: ✅
Index updated: ✅
Cross-references created: ✅
```

**Step 12: Update Kanban Documentation**
```markdown
## Post-Implementation Review

**PIR Status:** Complete  
**PIR Date:** 2025-12-16  
**PIR Version:** v0.2.11.9+3  
**PIR Report:** [PIR-Epic-2-v0.2.11.9+3.md](../../Reviews/pir/Epic-2/PIR-Epic-2-v0.2.11.9+3.md)

### Summary
Epic 2 successfully delivered the Workflow Management Framework...

### Key Findings
- All Stories completed successfully
- Comprehensive documentation created
- Strong integration patterns established
```

**Step 13: Auto-Create Follow-Up Tasks**
```markdown
- [ ] **Action 1:** Create automated tests for PIR workflow
  - Priority: Medium
  - PIR Reference: [PIR Report](../../Reviews/pir/Epic-2/PIR-Epic-2-v0.2.11.9+3.md)
```

**Step 14: Link PIR to Work Items**
```markdown
## Related Work

- **Epic:** [Epic 2 Documentation](../../project-management/kanban/epics/Epic-2/Epic-2.md) (v0.2.11.9+3)
- **Stories:** [Links to all stories with versions]
- **Version Range:** v0.2.1.1+1 to v0.2.11.9+3
```

**Step 15: Archive Review Materials** (Optional)
- Materials archived for future reference

**Step 16: Optional Approval Gate** (Optional)
- Approval not required, skipped

### Example 2: Story-Level PIR with Significance Evaluation

**Step 1: Identify Review Scope**
```bash
Story: docs/project-management/kanban/epics/Epic-2/Story-5-*.md
Status: COMPLETE ✅
Review Level: Story
```

**Step 2: Evaluate Story Significance**
```bash
# Significance evaluation
Introduces new patterns: ✅ Yes
Multiple tasks: ✅ Yes (15 tasks)
Significant workflow changes: ✅ Yes
Cross-story dependencies: ❌ No

Result: High Significance
Decision: Proceed with PIR
```

**Step 3-16: Continue with Story-level review**
- Similar to Epic-level but focused on Tasks instead of Stories
- Uses single version instead of version range

---

## 🎯 Best Practices

### 1. Timing

**When to Conduct PIR:**
- ✅ Immediately after Epic/Story marked COMPLETE
- ✅ While context is fresh
- ✅ Before starting next Epic/Story

**When NOT to Conduct PIR:**
- ❌ While Epic/Story still in progress
- ❌ Too long after completion (context lost)
- ❌ For non-significant Stories (automatically skipped)

### 2. Preparation

**Before Starting PIR:**
- ✅ Ensure Epic/Story is marked COMPLETE
- ✅ Verify all work items are complete
- ✅ Gather all relevant materials
- ✅ Review Epic/Story goals

### 3. Execution

**During PIR:**
- ✅ Be thorough in review
- ✅ Document all findings
- ✅ Be honest about issues
- ✅ Identify actionable improvements
- ✅ Capture patterns and anti-patterns

### 4. Documentation

**PIR Report Quality:**
- ✅ Complete all sections
- ✅ Provide evidence for assessments
- ✅ Include specific examples
- ✅ Link to related work items
- ✅ Use version references

### 5. Follow-Up

**After PIR:**
- ✅ Review PIR report
- ✅ Address follow-up tasks
- ✅ Apply lessons learned
- ✅ Update processes if needed
- ✅ Share findings with team

---

## 🔧 Configuration

### Basic Configuration

**Minimal Configuration:**
```yaml
config:
  review_level: both
  auto_trigger: true
  epic_pir_always: true
  knowledge_base_path: docs/Reviews/PIR
  template_path: docs/documentation/Templates
```

### Advanced Configuration

**Custom Significance Criteria:**
```yaml
config:
  story_pir_significance_criteria:
    - has_multiple_tasks: true
    - has_cross_story_dependencies: true
    - introduces_new_patterns: true
    - has_significant_technical_debt: true
    - duration_threshold_days: 14
    - min_tasks_threshold: 5
```

**Custom Paths:**
```yaml
config:
  knowledge_base_path: custom/path/to/PIR
  template_path: custom/path/to/templates
  archive_path: custom/path/to/archive
```

---

## 🚨 Troubleshooting

### Issue 1: PIR Not Triggered

**Symptoms:**
- Epic/Story marked COMPLETE but PIR not triggered
- RW Step 15 not executing

**Solutions:**
1. Check Epic/Story status is "COMPLETE" or "COMPLETE ✅"
2. Verify RW Step 15 is enabled
3. Check workflow configuration
4. Manually trigger PIR if needed

### Issue 2: Significance Evaluation Fails

**Symptoms:**
- Story significance unclear
- Evaluation returns unexpected result

**Solutions:**
1. Review significance criteria configuration
2. Check Story document for required information
3. Use conservative approach (proceed with PIR)
4. Default to Medium Significance if unclear

### Issue 3: PIR Report Not Generated

**Symptoms:**
- Workflow completes but no report found
- Step 10 fails

**Solutions:**
1. Check template exists at configured path
2. Verify KB directory structure exists
3. Check file permissions
4. Review error logs

### Issue 4: Kanban Update Fails

**Symptoms:**
- Step 12 fails to update Epic/Story document
- PIR summary not added

**Solutions:**
1. Verify Epic/Story document exists
2. Check document structure matches expected format
3. Verify insertion point is clear
4. Check file permissions

### Issue 5: Version Extraction Fails

**Symptoms:**
- Step 10 fails to extract version
- Version references incorrect

**Solutions:**
1. Verify Epic/Story document has version in header
2. Check version format matches RC.EPIC.STORY.TASK+BUILD
3. For Epic-level: Verify all Stories have versions
4. Review version extraction logic

---

## 📚 Examples

### Example PIR Report: Epic-Level

See: `docs/Reviews/pir/Epic-2/PIR-Epic-2-TEST-v0.2.5.10+1.md`

**Key Features:**
- Version range (first to last version)
- Stories review section
- Epic-level goals assessment
- Architecture decisions review

### Example PIR Report: Story-Level

See: `docs/Reviews/pir/Story-2/PIR-Story-2-TEST-v0.2.2.8+1.md`

**Key Features:**
- Single version reference
- Tasks review section
- Story-level goals assessment
- Implementation approach review

---

## 🔗 Integration Examples

### Example 1: RW Integration

**RW Step 15 Execution:**
```python
# RW Step 15: Check for PIR Trigger
epic_status = read_epic_status(epic=2)
if epic_status == "COMPLETE":
    trigger_pir(level="epic", epic=2, version="v0.2.11.9+3")
```

### Example 2: Kanban Integration

**Step 12: Update Kanban Documentation:**
```python
# Extract PIR summary
executive_summary = extract_from_pir_report("Executive Summary")
key_findings = extract_from_pir_report("Key Findings")

# Update Epic document
add_pir_section_to_epic(
    epic=2,
    summary=executive_summary,
    findings=key_findings,
    pir_report_path="docs/Reviews/pir/Epic-2/PIR-Epic-2-v0.2.11.9+3.md"
)
```

### Example 3: Versioning Integration

**Step 10: Create PIR Report with Version:**
```python
# Extract version range (Epic-level)
versions = [get_story_version(story) for story in epic_stories]
version_range = f"{min(versions)} to {max(versions)}"
last_version = max(versions)

# Generate report name
report_name = f"PIR-Epic-{epic}-v{last_version}.md"
```

---

## 📖 Related Documentation

- [PIR Workflow Reference](pir-workflow-reference.md) - Complete workflow reference
- [PIR Workflow Agent Execution Guide](pir-workflow-agent-execution.md) - Step-by-step execution guide
- [PIR-Kanban Integration Guide](pir-kanban-integration-guide.md) - Kanban integration patterns
- [PIR-Versioning Integration Guide](pir-versioning-integration-guide.md) - Versioning integration patterns
- [PIR Templates](../../../docs/documentation/templates/) - Epic and Story PIR templates
- [Release Workflow Reference](release-workflow-reference.md) - RW reference (for integration context)

---

## 💡 Tips and Tricks

### Tip 1: Use Templates

Always use PIR templates to ensure consistency:
- Epic template: `docs/documentation/templates/epic-pir-template.md`
- Story template: `docs/documentation/templates/story-pir-template.md`

### Tip 2: Capture Patterns Early

Document patterns and anti-patterns as you identify them during review. This helps future work.

### Tip 3: Be Specific

When documenting findings, be specific:
- ❌ "Code quality was good"
- ✅ "Code quality was excellent: 95% test coverage, comprehensive documentation, minimal technical debt"

### Tip 4: Link Everything

Use bidirectional links for complete traceability:
- Epic/Story document → PIR report
- PIR report → Epic/Story document
- PIR report → Related work items

### Tip 5: Create Actionable Follow-Ups

When creating follow-up tasks:
- Be specific about what needs to be done
- Assign appropriate priority
- Link to related work
- Reference PIR findings

---

## ❓ Frequently Asked Questions

### Q1: Do I need to run PIR manually?

**A:** No, PIR is automatically triggered by RW Step 15 when Epic/Story is marked COMPLETE. Manual execution is only needed if auto-trigger fails.

### Q2: What if a Story is not significant?

**A:** PIR workflow will skip the Story automatically. The skip reason is documented, and the workflow continues normally.

### Q3: Can I customize significance criteria?

**A:** Yes, significance criteria can be configured in workflow YAML. See configuration section for details.

### Q4: How long does a PIR take?

**A:** Depends on Epic/Story size and complexity. Typical Epic PIR: 1-2 hours. Typical Story PIR: 30-60 minutes.

### Q5: What if I find issues during PIR?

**A:** Document issues in the PIR report, create follow-up tasks, and apply lessons learned to future work.

### Q6: Can I skip optional steps?

**A:** Yes, Steps 15 (Archive) and 16 (Approval) are optional and can be skipped if not needed.

### Q7: How do I access PIR reports?

**A:** PIR reports are stored in `docs/Reviews/pir/Epic-{N}/` or `docs/Reviews/pir/Story-{N}/` and linked from Epic/Story documents.

---

## 🎓 Learning Path

**For New Users:**
1. Read this usage guide
2. Review example PIR reports
3. Understand significance evaluation
4. Practice with test Epic/Story

**For Advanced Users:**
1. Review PIR workflow reference
2. Study integration guides
3. Customize configuration
4. Create custom templates

---

_This usage guide is part of the Workflow Management Framework. See `packages/frameworks/workflow mgt/` for complete framework documentation._
