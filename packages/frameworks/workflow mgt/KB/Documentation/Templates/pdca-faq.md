---
lifecycle: evergreen
ttl_days: null
created_at: 2025-12-04T12:01:57Z
expires_at: null
housekeeping_policy: keep
---

# PDCA FAQ

**Purpose:** Frequently asked questions about PDCA in Release Workflow  
**Related:** PDCA Integration, Release Workflow

---

## General Questions

### Q: What is PDCA?

**A:** PDCA (Plan-Do-Check-Act) is a four-step iterative method for continuous improvement. It provides a structured approach to ensuring each release builds upon lessons learned.

### Q: Why use PDCA in Release Workflow?

**A:** PDCA provides:
- Structured approach to continuous improvement
- Explicit verification and reflection phases
- Prevents "Attempted Fixes" from remaining unverified
- Creates learning loop for process improvement
- Aligns with Document-Commit-Reflect pattern

### Q: How does PDCA map to Release Workflow steps?

**A:**
- **PLAN:** Steps 1-3 (Branch Safety, Bump Version, Create Changelog)
- **DO:** Steps 4-11 (Update Docs, Validate, Commit, Tag, Push)
- **CHECK:** Step 12 (Post-Commit Verification & Reflection)
- **ACT:** Step 13 (Act on Verification Results)

---

## PLAN Phase Questions

### Q: What should be in the PLAN section?

**A:** The PLAN section should include:
- **Objectives:** What this release aims to achieve
- **Expected Outcomes:** What success looks like
- **Verification Plan:** How we'll verify success

### Q: How specific should objectives be?

**A:** Objectives should be:
- Specific and clear
- Measurable when possible
- Focused on what will be accomplished
- Use action verbs (Add, Fix, Update, Create, etc.)

### Q: Can I skip the PLAN section?

**A:** The PLAN section is optional for backward compatibility, but it's recommended for:
- Better planning
- Clearer verification
- Improved reflection
- Continuous improvement

---

## DO Phase Questions

### Q: What language should I use in commit messages?

**A:** Use language that matches verification status:
- **Unverified:** "Attempted fix", "Addressed", "Modified"
- **Verified:** "Fixed", "Resolved", "Corrected"
- **Features:** "Added", "Implemented", "Created"

### Q: Can I claim "Fixed" before verification?

**A:** No. Only use "Fixed" after verification is complete. Use "Attempted fix" until verified.

### Q: What if I forget to document execution?

**A:** Document execution in the changelog or commit message. Include:
- What was done
- How it was done
- Verification status

---

## CHECK Phase Questions

### Q: When should I verify?

**A:** Verify as soon as possible after commit and push. Don't defer verification unnecessarily.

### Q: What verification methods should I use?

**A:** Use multiple verification methods when possible:
- Test suite (automated)
- Manual testing (user experience)
- Observation (behavioral)
- Code review (quality)

### Q: What if verification fails?

**A:** If verification fails:
- Document what didn't work
- Create follow-up task
- Don't ignore failures
- Plan fixes in next iteration

### Q: Can I defer verification?

**A:** Yes, but document:
- Why verification is deferred
- When verification will happen
- What verification method will be used

---

## ACT Phase Questions

### Q: What should I do after verification?

**A:** After verification:
- Update changelog based on results
- Standardize successful practices
- Create follow-up tasks if needed
- Document lessons learned

### Q: What if verification failed?

**A:** If verification failed:
- Create follow-up task
- Document what didn't work
- Plan fixes in next iteration
- Don't ignore failures

### Q: What if verification was deferred?

**A:** If verification was deferred:
- Document verification plan
- Schedule verification
- Update changelog after verification
- Don't forget to verify later

---

## Language Questions

### Q: What's the difference between "Attempted fix" and "Fixed"?

**A:**
- **"Attempted fix":** Fix implemented but not yet verified
- **"Fixed":** Fix implemented and verified to work

### Q: Can I use "Fixed" before verification?

**A:** No. Only use "Fixed" after verification confirms the fix works.

### Q: How do I update language after verification?

**A:** Update changelog in next release:
- Change "Attempted fix" to "Fixed" (if verified)
- Update commit message if needed
- Document verification evidence

---

## Process Questions

### Q: Do I have to use PDCA for every release?

**A:** PDCA is recommended for all releases, but:
- PLAN section is optional (backward compatible)
- CHECK and ACT phases are optional but recommended
- Start small and build up PDCA practices

### Q: What if I skip a phase?

**A:** Skipping phases reduces PDCA benefits:
- Skipping PLAN: Less clear objectives
- Skipping CHECK: No verification, unverified fixes
- Skipping ACT: No learning, no improvement

### Q: How do I learn from each cycle?

**A:** Learn from each cycle by:
- Reflecting on what worked
- Reflecting on what didn't work
- Documenting lessons learned
- Applying learnings to next cycle

---

## Template Questions

### Q: Where are the templates?

**A:** Templates are in:
- `packages/frameworks/workflow mgt/docs/documentation/templates/`
- `plan-phase-template.md`
- `do-phase-template.md`
- `check-phase-template.md`
- `action-workflow-template.md`

### Q: Are templates project-agnostic?

**A:** Yes. All templates use generic examples and can be used in any project.

### Q: Can I customize templates?

**A:** Yes. Templates are guidelines. Customize them to fit your project needs while maintaining PDCA principles.

---

## Troubleshooting

### Q: My verification failed. What should I do?

**A:**
1. Document what didn't work
2. Create follow-up task
3. Plan fixes in next iteration
4. Don't ignore failures

### Q: I forgot to verify. Can I verify later?

**A:** Yes. Verify as soon as possible:
1. Run verification
2. Document results
3. Update changelog if needed
4. Act on results

### Q: My commit message says "Fixed" but it's not verified. What should I do?

**A:**
1. Update commit message in next release
2. Update changelog to "Attempted fix"
3. Verify the fix
4. Update to "Fixed" after verification

---

## References

- **PDCA Integration Plan:** `docs/architecture/standards-and-adrs/rw-pdca-integration-plan.md`
- **Templates:** `packages/frameworks/workflow mgt/docs/documentation/templates/`
- **Best Practices:** `pdca-best-practices.md`
- **Tutorial:** `pdca-tutorial.md`
- **Quick Reference:** `pdca-quick-reference.md`

---

_This FAQ is part of the Release Workflow PDCA Integration. See templates and examples for detailed guidance._

