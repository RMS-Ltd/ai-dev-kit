---
lifecycle: evergreen
ttl_days: null
created_at: 2025-12-15T00:00:00Z
expires_at: null
housekeeping_policy: keep
related_story: E2:S08
related_fr: FR-015
---

# E2:S08:T01 – Kanban Docs Update (RW Step 7) Deterministic vs Agentic Analysis

**Goal:**
- Decompose RW Step 7 ("Auto-update Kanban Docs") into atomic sub-steps.
- Classify each sub-step as **deterministic** (target ≈100% reliability) or **agentic** (requires LLM/agent judgement).
- Produce a concrete, testable blueprint for E2:S08:T02–T07 (implementation, validation, error-handling, docs, testing).

## 1. Scope

**In-scope artefacts for RW Step 7 hardening (FR-015):**
- **Story docs** under `docs/project-management/kanban/epics/Epic-{N}/Story-*.md`
- **Epic overview docs** under `docs/project-management/epics/overview/Epic {N}/Epic-{N}.md`
- **Kanban board / summary docs** (e.g. `docs/project-management/kanban/kboard.md`)

**In-scope updates:**
- Task checklist state (checkbox, status, version marker) for the completed task.
- Story header metadata (`Status`, `Last updated`, `Version`, `Completed`).
- Epic Story Checklist entry for the story.
- Epic header metadata (`Last updated`, possibly story/epic status if story completes epic slice).
- Optional: Kanban board high-level status/version markers.

## 2. Atomic Steps & Classification

### 2.1 Locate context for the current RW run

1. **Read version components (RC.EPIC.STORY.TASK+BUILD) from version file.**  
   - **Deterministic.** Already implemented & validated in `validate_version_bump.py` / versioning policy.

2. **Resolve Kanban paths for this Epic/Story/Task using configuration (`rw-config.yaml`) plus canonical defaults.**  
   - **Deterministic core, agentic fallback.**
   - Deterministic when paths follow configured patterns (e.g. `kanban_root`, `epic_overview_pattern`, `story_doc_pattern`).
   - Agentic fallback if config is missing/incorrect or multiple candidates exist.

3. **Load Story and Epic docs for the identified E/S.**  
   - **Deterministic.** Straight file I/O once paths are known.

### 2.2 Extract authoritative state from Story (single source)

4. **Parse Story Task Checklist to find the completed task row for `E{epic}:S{story}:T{task}`.**  
   - **Deterministic with robust regex.**
   - Uses explicit patterns from Kanban policy (Task ID, status, version marker).

5. **Parse Story header to read canonical Story-level status, dates, and version.**  
   - **Deterministic.** Header fields are strongly structured in templates; parsing can be strict + validated.

6. **Compute derived Story/Epic state (e.g. whether all tasks are complete, whether story completion implies epic slice completion).**  
   - **Deterministic.** Logic based on checklists and policy rules.

### 2.3 Plan required updates

7. **Derive desired target state for each artefact (Story doc, Epic overview, Kanban board) from the authoritative Story state.**  
   - **Deterministic core.**
   - Given: current RW version, Story header, Task checklist, policy rules.
   - Maps to explicit textual templates:
     - Story header `Status`, `Last updated`, `Completed`, `Version`.
     - Story Task Checklist line for the task.
     - Epic Story Checklist line and Epic header `Last updated`.

8. **Detect whether a Kanban board / summary doc exists and should be updated.**  
   - **Deterministic detection, agentic policy decision.**
   - Deterministic: existence/path detection using config + default paths.
   - Agentic: deciding *how much* to update when board structure is non‑canonical.

### 2.4 Apply updates to all sections ("ALL sections" requirement)

9. **Apply structured text transforms to Story doc:** update header fields and ALL references to the task/story.  
   - **Deterministic for canonical patterns, agentic for non‑canonical leftovers.**
   - Deterministic: regex + template‑driven replacement for:
     - Header metadata block.
     - Task Checklist entries.
     - Clearly marked Story‑level AC / completion sections.
   - Agentic: if doc contains ad‑hoc prose references or legacy sections that don’t match patterns.

10. **Apply structured text transforms to Epic doc:** update Story Checklist entry and header metadata.  
    - **Deterministic.**
    - Epic templates are strongly normalized; Story Checklist entries + header lines can be updated via regex.

11. **Apply structured text transforms to Kanban board / summary doc (if enabled).**  
    - **Mostly agentic.**
    - Board layout is more free‑form; deterministic patterns can exist for some sections, but safe updates in the general case require semantic understanding.

### 2.5 Validate updates

12. **Re-parse updated Story and Epic docs to ensure internal consistency:**  
    - Matching status/version across header, checklists, and completion summaries.  
    - **Deterministic.**

13. **Validate against policy & FRs:**
    - Story Checklist as single source of truth for forensic markers.
    - Required fields present in Task docs (already enforced by `validate_version_bump.py`).
    - **Deterministic with explicit rules.**

14. **Detect drift between Kanban docs and version file / CHANGELOG.**  
    - **Deterministic.**
    - Cross‑check version markers in docs vs version file vs changelog entry.

### 2.6 Error handling and blocked protocol

15. **Detect hard failures (missing files, malformed headers, conflicting markers).**  
    - **Deterministic detection.**

16. **Decide whether RW can auto‑repair or must block with guidance.**  
    - **Agentic.**
    - Requires context: is this a one‑off formatting glitch vs deep structural corruption?

17. **Generate human‑readable recovery guidance (what to fix, where, and how).**  
    - **Agentic.**

18. **Optionally support explicit override flag (e.g. `allow_step7_override`) for extreme edge cases, with strict logging.**  
    - **Deterministic enforcement, agentic explanation.**

## 3. Deterministic vs Agentic Boundary

**Strong deterministic candidates (must target ≈100% reliability):**
- Version + E/S/T resolution from config/version file (Steps 1–3).
- Parsing canonical Story/Epic headers and checklists (Steps 4–6).
- Deriving target status/version markers from canonical rules (Step 7).
- Applying regex/template‑driven updates to **canonical** sections only (Steps 9–10, canonical subset of 11).
- Post‑update consistency checks and cross‑checks vs version/changelog (Steps 12–14).
- Detecting hard structural errors (Step 15).

**Agentic responsibilities (must be clearly delimited and optional where possible):**
- Fallback path resolution when config/doc structure is non‑canonical (Step 2 fallback).
- Deciding how to safely update non‑canonical prose or bespoke board layouts (parts of Steps 9, 11).
- Determining auto‑repair vs RW BLOCKED, and composing recovery guidance (Steps 16–17).
- Explaining/justifying overrides and complex decisions (Step 18 narrative side).

## 4. Implications for E2:S08 Tasks

- **T02 (framework-agnostic script):**
  - Implement deterministic pipeline for Steps 1–7, 9–10, 12–15 as pure Python utilities.
  - Provide explicit extension points/hooks where agentic logic may operate (e.g. "non‑canonical section handler").

- **T03 (mandatory & blocking):**
  - Wire deterministic pipeline into RW Step 7 with `required: true` semantics.
  - If deterministic validation fails or agentic hooks signal uncertainty, RW must enter **"RW BLOCKED at Step 7"** with structured error payload.

- **T04 (validation step):**
  - Formalize Steps 12–14 as a post‑update validation sub‑phase, with clear success/failure criteria.

- **T05 (error handling & recovery):**
  - Encode deterministic detection of error types + a small library of recovery playbooks that agentic logic can reference when generating guidance.

- **T06 (docs & agent guide):**
  - Document the deterministic/agentic split, hooks, and blocked protocol so agents know exactly where judgement is expected vs forbidden.

- **T07 (testing & validation):**
  - Test matrix must separately cover:
    - Purely canonical flows (should succeed with no agentic intervention).
    - Non‑canonical but recoverable flows (agentic guidance, RW BLOCKED).
    - Hard-fail flows (structural corruption → RW BLOCKED with no override by default).

---

This analysis is the working blueprint for implementing FR-015 across E2:S08:T02–T07. It should be kept in sync as we refine the deterministic utilities and agentic hooks during implementation.
