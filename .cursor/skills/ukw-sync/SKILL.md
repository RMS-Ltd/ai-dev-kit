---
name: ukw-sync
description: Update kanban boards with status inference and MoSCOW prioritization
---

## Update Kanban Workflow Execution

### Intelligence Requirements

This workflow requires significant agentic intelligence at every step:

- **Synthesize intelligently:** Transform raw task/story data into coherent narratives
- **Infer status:** Deduce completion state from evidence (commits, FR/BR/UXRs, file changes)
- **Prioritize strategically:** Classify tasks using MoSCOW methodology based on goals and dependencies
- **Understand context:** Grasp relationships, dependencies, and strategic context
- **Write narratives:** Create natural, readable summaries that capture progress
- **Validate consistency:** Detect contradictions and misalignments

### Key Principle

**Bottom-up approach:** Update Tasks → Stories → Epics → Board (in that order)
The MoSCOW priority list is updated LAST.

### Step Sequence

**Step 1: Bookkeeping (Task Status Updates)**
- Analyze all tasks for completion status
- Infer task completion from evidence:
  - Git commits and version changes
  - FR/BR/UXR documents and their status
  - File changes and implementation evidence
  - Acceptance criteria fulfillment
- Update task status (TODO → IN PROGRESS → COMPLETE)
- Write meaningful progress summaries

**Step 2: Story Status Inference**
- Analyze story completion based on task status
- Determine if stories are COMPLETE based on task completion
- Update story status and documentation
- Write coherent story-level summaries
- Ensure consistency between tasks and stories

**Step 3: Epic Status Evaluation**
- Evaluate epic completion based on story status
- Update epic status and documentation
- Write strategic epic-level summaries
- Assess overall project progress

**Step 4: MoSCOW Prioritization**
- Analyze all incomplete tasks/stories/epics
- Apply MoSCOW prioritization based on:
  - Project goals and strategic importance
  - Dependencies and blocking relationships
  - Impact and urgency
  - Resource availability and deadlines
- Update kanban board priority sections
- Ensure consistent prioritization across hierarchy

**Step 5: Board Synchronization**
- Update kanban-board.md with latest status
- Ensure all sections reflect current reality
- Validate consistency across all documents
- Update board version and metadata

**Step 6: Board Cleanup**
- Scan all MoSCOW sections for COMPLETED tasks
- Remove COMPLETED tasks from active MoSCOW sections
- Invoke Documentation Agent for kanban_completed_update skill
- Archive completed tasks with timestamps to kanban-completed.md
- Validate active sections contain only IN PROGRESS/TODO tasks
- Ensure board organization reflects current work priorities

**Step 7: FR/BR/UXR Synchronization**
- Analyze FR/BR/UXR completion status based on task completion
- Update fr-br-uxr-board.md with latest status and metadata
- Remove completed items from active board
- Cross-reference FR/BR/UXR status with associated task completion
- Validate FR/BR/UXR to task relationship integrity
- Treat fbuboard sync as required scope in comprehensive and bookkeeping paths
- Apply deterministic active-row reconciliation:
  - Prune active rows when linked status is terminal (COMPLETE/COMPLETED/IMPLEMENTED/FIXED/RESOLVED)
  - Keep explicit unresolved-verification exceptions active (e.g., status includes IN PROGRESS/UNVERIFIED)
- Enforce temporal-drift normalization:
  - Align board `Last Updated` metadata with terminal row timestamps in same pass
  - Normalize active row suffix to `| Last modified: YYYY-MM-DD HH:MM UTC`
- Apply concurrency guard:
  - Revalidate board content just before write
  - If drift detected (file changed mid-run), re-read latest content and re-apply transforms before final write
- Emit reconciliation summary (audited, removed, kept exceptions, timestamps normalized)

**Step 8: FR/BR/UXR Temporal Tracking**
- Add ISO 8601 completion timestamps to fbu-completed.md
- Create recent completions dashboard (20 most recent)
- Maintain consistent format with kanban-completed.md
- Update historical FR/BR/UXR completions with estimated timestamps
- Invoke Documentation Agent for fr_br_uxr_completed_update skill

**Step 9: FR/BR/UXR Structure Updates**
- Update fbu-structure.md with current inventory
- Ensure cross-reference integrity across all FR/BR/UXR docs
- Validate consistency between board, structure, and completed docs
- Update metadata and version references across FR/BR/UXR docs
- Maintain link validity and document organization

### Integration Points

- Works with Intake Agent for new task processing
- Coordinates with Documentation Agent for kanban-completed.md updates
- Provides status information to RW Agent
- Uses Documentation Agent for completed task archival
- Coordinates with Documentation Agent for fr_br_uxr_completed_update skill
- Integrates with Intake Agent for FR/BR/UXR processing coordination
- Provides FR/BR/UXR synchronization for complete documentation coverage
