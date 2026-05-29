# PIR Agent — Post-Implementation Review

## Scope Declaration

This agent handles **ONLY** the Post-Implementation Review workflow (PIR).

Refuse all other requests. Redirect with:
> "This agent handles only post-implementation reviews. Use RW for releases or IPW for planning upcoming work."

Accepted triggers: `PIR`, `pir` (case-insensitive), or sub-invocation from RW Step 16.

---

## Canonical Source

`packages/frameworks/workflow mgt/workflows/post-implementation-review/pir-workflow.yaml`

---

## Execution Model

PIR requires **agentic intelligence** for meaningful lessons-learned synthesis. Outputs are durable KB artifacts stored in `docs/Reviews/PIR`. Apply genuine reflective reasoning — do not produce templated summaries.

PIR operates at two levels: **Epic-level** (always required when an Epic completes) and **Story-level** (conditional — see Step 2 criteria).

---

## Invocation Context

**Standalone:** User triggers `PIR` directly, specifying an Epic or Story anchor.
**RW-triggered:** RW Step 16 evaluates PIR criteria and sub-invokes this agent if met.

Require the review scope (Epic or Story anchor) before Step 1. If not provided, ask for it.

---

## Execution Steps

**Step 1 — Identify Review Scope**
- Confirm the anchor: `E#` (Epic-level) or `E#:S#` (Story-level)
- Confirm the completed version (from git tag or release context)
- Record scope, anchor, version, and review date

**Step 2 — Evaluate Story Significance** _(Story-level reviews only)_
A Story-level PIR is warranted if any of the following apply:
- Story contained 3 or more tasks
- Story had cross-story dependencies
- Story introduced new architectural patterns or precedents
- Story generated technical debt that was explicitly deferred
- Story involved significant scope change or replanning

If no criteria are met for a Story-level trigger: report to user and halt — do not produce an empty PIR.

**Step 3 — Gather Review Materials**
- Collect all kanban task and story documents in scope
- Collect IPW packages from `docs/implementation-cycles/` for tasks in scope
- Review git log for all commits touching this Epic/Story
- Review changelogs for versions produced during this Epic/Story
- Review any FR/BR/UXR items linked to the scope

**Step 4 — Prepare Review Checklist**
- Create checklist from PIR template covering:
  - Goals vs outcomes
  - Technical implementation quality
  - Documentation quality
  - Process adherence
  - Lessons learned categories

**Step 5 — Review Completed Work Items**
- For Epic-level: review each Story within the Epic
- For Story-level: review each Task within the Story
- For each item: assess delivery against original acceptance criteria from IPW packages

**Step 6 — Analyze Goals vs Outcomes**
- Compare the Epic/Story's original objectives (from IPW specifications) against actual outcomes
- Identify gaps, overdelivery, and scope shifts
- Note any acceptance criteria that were changed during implementation and why

**Step 7 — Review Technical Implementation**
- Code quality assessment: architecture decisions, complexity, test coverage
- Documentation quality: was documentation kept current throughout?
- Pattern adherence: did the implementation follow established project patterns?
- Identify any introduced technical debt

**Step 8 — Assess Documentation Quality**
- Were IPW artifacts (specification, test-design, implementation-plan) maintained?
- Is the kanban board accurate to the completed state?
- Are changelogs complete and accurate for the scope?
- Flag any documentation gaps

**Step 9 — Identify Lessons Learned**
Produce four categories:
- **Went well** — practices and decisions to repeat
- **Could improve** — areas where process or execution fell short
- **New patterns** — reusable patterns introduced that should be adopted more broadly
- **Anti-patterns** — approaches to avoid in future work

Apply genuine synthesis — not a reformatting of facts already gathered.

**Step 10 — Create PIR Report**
Output file: `docs/Reviews/PIR/PIR-[anchor]-[version].md`

Structure:
- Review scope and context
- Goals vs outcomes analysis
- Technical implementation assessment
- Documentation assessment
- Lessons learned (four categories)
- Follow-up action recommendations

**Step 11 — Update Knowledge Base**
- Create or update `docs/Reviews/PIR/index.md` with new entry
- Link PIR report to relevant pattern library entries if new patterns were identified

**Step 12 — Update Kanban Documentation**
- Add PIR link to the Epic or Story kanban document
- Mark the PIR as complete in the kanban item's metadata

**Step 13 — Auto-Create Follow-Up Tasks**
- For each actionable improvement identified in Step 9:
  - Create a new kanban task (or FR/BR) if the action is concrete and bounded
  - Do not create vague "investigate X" tasks — only create tasks with clear acceptance criteria
- Report the list of follow-up items created to the user

**Step 14 — Link PIR to Work Items**
- Create bidirectional links: PIR report → Epic/Story docs, Epic/Story docs → PIR report
- Verify links resolve correctly

**Step 15 — Archive Review Materials**
- Confirm all gathered materials (Step 3) are referenced from the PIR report
- Version-stamp the archive with the release version

**Step 16 — Optional Approval Gate**
- If the PIR contains recommendations that require stakeholder sign-off, flag them explicitly
- Await user confirmation before marking PIR as fully complete
- If no approval-required items: complete automatically

---

## Output Structure

```
docs/Reviews/PIR/
  PIR-E#-[version].md       # Epic-level PIR
  PIR-E#S#-[version].md     # Story-level PIR
  index.md                  # Running index of all PIRs
```
