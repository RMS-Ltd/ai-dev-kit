---
lifecycle: evergreen
ttl_days: null
created_at: 2025-12-04T12:02:07Z
expires_at: null
housekeeping_policy: keep
---

# Debug Path Framework Package Overview

**Version:** 1.0.0  
**Last Updated:** 2025-12-04  
**Purpose:** Portable framework package for structured debugging of test failures, regressions, and production bugs

---

## Package Contents

This directory contains a complete, portable Debug Path Framework (DPF) with Debug Round Workflow (DRW) methodology for structured debugging.

### Core Documents

1. **`README.md`** - Overview and quick reference
2. **`PACKAGE_OVERVIEW.md`** - This file - package structure and usage
3. **`DRW-METHODOLOGY.md`** - Debug Round Workflow methodology guide

### Templates

4. **`templates/debug-path-main-template.md`** - Main debug path document
5. **`templates/debug-path-process-template.md`** - Process tracking with checklist
6. **`templates/debug-path-analysis-template.md`** - Analysis and validation
7. **`templates/debug-path-strategy-template.md`** - Strategy evolution
8. **`templates/debug-path-history-template.md`** - Narrative history
9. **`templates/debug-path-tests-template.md`** - Test execution results
10. **`templates/debug-path-index-template.md`** - Index entry point

### Integration Guides

11. **`integration/kanban-integration.md`** - How to integrate with Kanban
12. **`integration/workflow-mgt-integration.md`** - How to integrate with Workflow Management

---

## 🧩 Modularity & Dependencies

This package is designed to be **fully modular** with maximum independence. You can:

- Use **only this package** in your project, without copying any other part of `ai-dev-kit`
- Combine it with other packages (Kanban, Workflow Management) when you want integration

**Package dependencies:**

- **Standalone:** ✅ Yes — this package can be used on its own as a pure methodology + templates module
- **Hard runtime dependencies:** ✅ None — it does not require any scripts or workflows to be useful
- **Soft / optional companions:**
  - `packages/frameworks/kanban/` — link debug paths to Stories for traceability
  - `packages/frameworks/workflow mgt/` — automate DRW phases via Debug Path Workflow (future)

---

## Usage Scenarios

### Scenario 1: Standalone Debugging

**Use case:** Simple project needs structured debugging without full Kanban overhead.

**Setup:**
1. Copy `packages/frameworks/debug-path/` to your project
2. Create `debug-paths/` directory in your KB
3. Use templates to create debug paths for test failures/bugs

**Benefits:**
- Structured debugging methodology
- Checklist-driven workflow
- Knowledge preservation
- No project management overhead

---

### Scenario 2: Debug Paths + Kanban

**Use case:** Complex project wants structured debugging integrated with project management.

**Setup:**
1. Copy both `debug-path/` and `kanban/` packages
2. Create debug paths for investigations
3. Link debug paths to Kanban Stories
4. Track resolution in Stories

**Benefits:**
- Structured debugging (DPF)
- Project management (Kanban)
- Full traceability (DP → Story → Release)

---

### Scenario 3: Debug Paths + Workflow Management (Future)

**Use case:** Agent-driven debugging workflows with automation.

**Setup:**
1. Copy `debug-path/` and `workflow mgt/` packages
2. Use Debug Path Workflow to automate DRW phases
3. Agent executes checklist-driven debugging automatically

**Benefits:**
- Automated debugging workflow
- Agent-driven DRW execution
- Full audit trail

---

## Key Concepts

### Debug Path (DP)

A **Debug Path** is a structured investigation of a test failure, regression, or production bug. Each debug path contains:

- **Main document** — Overview, context snapshot, solution space
- **Process document** — Checklist, implementation updates
- **Analysis document** — Test results, validation, patterns
- **Strategy document** — Strategy evolution, lessons learned
- **Tests document** — Test execution results
- **History document** — Narrative history, archived rounds
- **Index document** — Canonical entry point

### Debug Round Workflow (DRW)

The **DRW** is a 6-phase checklist-driven workflow:

1. **Phase 1: Testing** — Execute tests, document results
2. **Phase 2: Analysis** — Analyze failures, root causes
3. **Phase 3: Strategy** — Update plan, hypotheses, approach
4. **Phase 4: Planning** — Implementation steps, success criteria
5. **Phase 5: Implementation** — Code/test changes, rationale
6. **Phase 6: Verification & Archival** — Archive, extract lessons

### Round-Based Iteration

Debug paths can have **multiple rounds** if the first round doesn't resolve the issue. Each round:
- Has its own checklist in the process file
- Archives completed checklist to history file
- Includes divergence check (prevents repeating failed approaches)

---

## Template Structure

Each debug path uses 7 documents:

1. **`DP-XXX-index.md`** — Canonical entry point (problem, root cause, solution, outcome)
2. **`DP-XXX.md`** — Main document (overview, context snapshot, solution space)
3. **`DP-XXX-process.md`** — Process tracking (checklist, implementation updates)
4. **`DP-XXX-analysis.md`** — Analysis and validation results
5. **`DP-XXX-tests.md`** — Test execution results
6. **`DP-XXX-strategy.md`** — Strategy evolution, lessons learned
7. **`DP-XXX-history.md`** — Narrative history (problem → journey → solution)

---

## Best Practices

1. **Always use templates** — Start from templates, don't create from scratch
2. **Follow DRW phases** — Complete phases in order, don't skip steps
3. **Update checklist** — Check off items as completed in process file
4. **Archive rounds** — Copy completed checklist to history file at round end
5. **Extract lessons** — Document patterns, anti-patterns, lessons learned
6. **Link to Kanban** — If using Kanban, link debug paths to Stories

---

## Customization

### File Paths

Customize templates with your project's:
- Debug paths directory (e.g., `docs/debug-paths/`)
- Test command (e.g., `pytest`, `npm test`, `flutter test`)
- Source file paths
- Test file paths

### Numbering Scheme

Choose your numbering scheme:
- Sequential: `DP-001`, `DP-002`, `DP-003`
- Date-based: `DP-2025-12-04-001`
- Component-based: `DP-auth-001`, `DP-api-001`

### Document Structure

Templates are flexible — customize sections as needed while maintaining:
- DRW 6-phase structure
- Checklist-driven workflow
- Core patterns (assumption validation, solution space mapping)

---

## See Also

- **README.md** — Package overview and quick start
- **DRW-METHODOLOGY.md** — Detailed methodology guide
- **integration/** — Integration guides for other packages

---

**Last Updated:** 2025-12-04  
**Version:** 1.0.0

