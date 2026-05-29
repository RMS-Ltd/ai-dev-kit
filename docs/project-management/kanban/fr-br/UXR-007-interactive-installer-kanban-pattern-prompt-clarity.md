---
lifecycle: evergreen
ttl_days: null
created_at: 2026-04-10T00:00:00Z
expires_at: null
housekeeping_policy: keep
---

# User Experience Research: Interactive Installer Kanban Pattern Prompt Clarity

**Type:** User Experience Research (UXR)  
**Submitted:** 2026-04-10  
**Submitted By:** User (Startborn Legacy install session)  
**Priority:** HIGH  
**Status:** COMPLETE  
**Repository Task:** [E7:S06:T18](../epics/Epic-7/Story-006-post-windsurf-project-review/T18-interactive-installer-kanban-pattern-prompt-clarity.md) — **COMPLETE** (**v0.7.6.18+3**)

**Planning package (ICW / retrospective publication):** [Specification](../../../implementation-cycles/ICW-E7S06T18-specification.md) · [Test design](../../../implementation-cycles/ICW-E7S06T18-test-design.md) · [Implementation plan](../../../implementation-cycles/ICW-E7S06T18-implementation-plan.md)

---

## Summary

A user installing AI Dev Kit in interactive mode reported confusion at the Kanban integration prompt asking for an epic document pattern with `{epic}` placeholder. The user had already provided a custom Kanban root path but could not confidently answer the next pattern question, indicating that current prompt wording is not self-explanatory for real project layouts.

---

## Research Context

**Install mode:** Interactive  
**Project context:** Startborn Legacy (adopter project)  
**Prompt sequence observed:**

1. `Kanban root directory [docs/project-management/kanban]: KB/PM_and_Portfolio/epics/overview`
2. `Epic document pattern (use {epic} placeholder) [epics/Epic-{epic}.md]:`

**User-reported friction:**

- "I do not understand it."
- User requested both immediate explanation and feedback into installer UX.

---

## Subsequent Session Evidence (Full Interactive Run)

Follow-up execution confirmed that prompt ambiguity leads to concrete misconfiguration and downstream validation failures:

1. **Literal epic path accepted as pattern without guardrails**
   - User entered `Epic-01/Epic-01.md` at `epic_doc_pattern`.
   - Installer accepted it and wrote:
     - `epic_doc_pattern: Epic-01/Epic-01.md`
   - This value is over-specific and non-templated, so it cannot generalize across epics.

2. **Story pattern worked only after external coaching**
   - User eventually provided `Epic-{epic}/stories/E{epic}-S{story}.md`, matching actual project layout.
   - Confirms usability issue: correct value was discoverable, but not from installer guidance alone.

3. **Kanban framework installer validated a different root**
   - RW config captured custom root: `KB/PM_and_Portfolio/epics/overview`.
   - `install_kanban_framework.py --mode fresh` validated default path `docs/project-management/kanban` and failed with:
     - `Required directory missing: epics`
     - board file warning for default location
   - This indicates installer path-context mismatch between steps/tools.

4. **Additional workflow YAML parse warning surfaced**
   - Installer reported:
     - `Error reading ... release-workflow.yaml: mapping values are not allowed here`
   - The run still ended with "INSTALLATION COMPLETE", increasing ambiguity about actual readiness.

5. **Session ended cancelled despite earlier success banner**
   - After RW installer reported completion, kanban framework validation failed and user selected `no` at:
     - `Proceed despite errors? (yes/no): no`
     - `Installation cancelled.`
   - Final user outcome was a non-complete install flow.

6. **Existing RW trigger handling required manual follow-up**
   - Installer emitted:
     - `.cursorrules already contains RW trigger section. Skipping update. Please manually review and update if needed.`
   - This adds another decision point without guided diff/reconciliation.

7. **Non-interactive execution crashed with raw EOF traceback**
   - Running `python3 scripts/install_release_workflow.py --mode c` without interactive stdin produced:
     - `EOFError: EOF when reading a line`
   - Failure occurred at first prompt (`Project name`) via `input(...)`, with no friendly remediation guidance.
   - Indicates missing pre-flight TTY/interactive guard and no graceful fallback path (`--config` suggestion).

---

## Key Findings

1. **Prompt intent is implicit, not explicit**
   - Users are not told the pattern is relative to the entered root and must match real filenames.

2. **Placeholder instruction is too abstract**
   - "use `{epic}` placeholder" is insufficient without concrete examples tied to typical structures.

3. **No inline validation guidance**
   - User is not shown candidate matches or "no files matched" feedback while answering.

4. **High risk for first-time adopters**
   - If a project owner cannot answer confidently, non-maintainers are likely to fail or misconfigure setup.

5. **No placeholder validation on pattern inputs**
   - Installer does not enforce `{epic}` in epic patterns or `{epic}`/`{story}` in story patterns.
   - Invalid literal values are accepted and persisted into `rw-config.yaml`.

6. **Cross-installer path context is inconsistent**
   - RW installer accepts a custom kanban root, but kanban framework installer still validates default structure unless separately configured.

7. **Overall run-state messaging is contradictory**
   - One stage reports "INSTALLATION COMPLETE" while a subsequent stage in the same interactive command chain cancels.
   - Users do not receive a single canonical final status for the end-to-end install.

8. **Non-interactive mode lacks graceful failure UX**
   - EOF in prompt collection currently surfaces as Python traceback rather than a user-oriented message.
   - Users are not told to rerun with interactive TTY or provide `--config`.

---

## Recommendations

1. **Prompt rewrite (high priority)**
   - Replace current question with language that explicitly states:
     - pattern is relative to selected Kanban root
     - it must match actual Epic files
     - include 2-3 examples

2. **Real-time match preview (high priority)**
   - After input, show:
     - resolved glob/pattern
     - number of matched files
     - first 1-3 matched paths
   - If zero matches, show likely alternatives.

3. **Guided fallback mode (high priority)**
   - Offer "auto-detect from existing files" before asking manual pattern.

4. **Context-aware helper text (medium priority)**
   - If root path already includes `epics/overview`, suggest likely patterns such as:
     - `Epic-{epic}.md`
     - `Epic-{epic}/Epic-{epic}.md`

5. **Error copy hardening (medium priority)**
   - On invalid pattern, provide exact remediation text and examples instead of generic retry.

6. **Placeholder enforcement + semantic validation (high priority)**
   - Reject epic patterns missing `{epic}`.
   - Reject story patterns missing either `{epic}` or `{story}`.
   - Show "why rejected" and nearest valid examples based on detected filenames.

7. **Cross-tool path propagation (high priority)**
   - Ensure `install_kanban_framework.py` receives/uses the same kanban root gathered during RW config setup.
   - Validate against the configured root, not hardcoded defaults.

8. **Completion gating clarity (high priority)**
   - If blocking YAML/config errors occur, installation summary must not imply success.
   - Emit explicit "PARTIAL / FAILED" state with actionable next steps.

9. **RW trigger reconciliation helper (medium priority)**
   - When `.cursorrules` already has RW section, show a compact diff and provide "apply update now?" prompt.
   - Avoid manual blind review burden.

10. **Canonical final status banner (high priority)**  
Add one end-of-run status that aggregates all sub-installers (RW + Kanban framework).  
Example states: `SUCCESS`, `PARTIAL`, `FAILED`, `CANCELLED` with next actions.

11. **Interactive pre-flight and EOF handling (high priority)**  
Before prompting, detect non-interactive stdin/TTY and fail fast with clear guidance.  
Catch `EOFError` in prompt loop and emit concise remediation: rerun in interactive terminal or use `--config rw-config.yaml` for non-interactive mode.

---

## Acceptance Signals

- [ ] Users can answer pattern prompts without external help in first-run interactive installs.
- [ ] Installer detects and displays at least one matching Epic file before proceeding.
- [ ] Prompt completion success rate improves in adopter projects with custom Kanban structures.
- [ ] Installer rejects literal non-templated epic/story patterns with targeted remediation.
- [ ] Kanban framework validation runs against user-configured kanban root in the same session.
- [ ] End-of-run output reflects a single canonical status for the complete interactive chain.
- [ ] Non-interactive runs fail gracefully without raw traceback and include actionable rerun guidance.

---

## Resolution (implementation closure)

**Closed:** 2026-04-18  
**Evidence:** Implementing task **E7:S06:T18** delivered installer prompt/path validation improvements and publication-aligned ICW artifacts (**v0.7.6.18+3**). Acceptance signals below remain available for broader adoption UAT; intake research objectives are addressed in shipped behavior and docs.

---

## Intake Decision

**Intake Status:** ACCEPTED *(historical)*  
**Intake Date:** 2026-04-10  
**Intake By:** User + AI agent triage

**Assigned To:**

- Epic: Epic 7
- Story: Story 6 (Post-Windsurf Project Review)
- Task: E7:S06:T18
- Version: `v0.7.6.18+1` (released)

---

## References

- Installer session prompt context (user report, 2026-04-10).
- `rw-config.yaml` pattern keys (`kanban_root`, `epic_doc_pattern`, `story_doc_pattern`).
