---
lifecycle: evergreen
ttl_days: null
created_at: 2025-12-04T12:02:07Z
expires_at: null
housekeeping_policy: keep
---

# Debug Path Framework + Kanban Integration

**Version:** 1.0.0  
**Last Updated:** 2025-12-04

---

## 📋 Overview

This guide explains how to integrate Debug Path Framework (DPF) with the Kanban package for full traceability between debugging investigations and project management.

**Integration Pattern:** Debug Paths document investigation, Kanban Stories track resolution.

---

## 🔗 Integration Pattern

### Basic Pattern

1. **Debug Path opened** for test failure/regression/bug
2. **Linked to Kanban Story** (e.g., "E2:S04:T05 – Fix test failures")
3. **Debug Path documents investigation** (DRW phases, root cause analysis)
4. **Story tracks resolution** (task completion, version markers)
5. **Debug Path archived** when Story complete

---

## 📝 Implementation

### Step 1: Create Debug Path

When a test failure or bug is discovered:

1. Create debug path using templates:
   ```
   docs/debug-paths/DP-001-test-failure/DP-001.md
   docs/debug-paths/DP-001-test-failure/DP-001-process.md
   docs/debug-paths/DP-001-test-failure/DP-001-analysis.md
   docs/debug-paths/DP-001-test-failure/DP-001-strategy.md
   docs/debug-paths/DP-001-test-failure/DP-001-tests.md
   docs/debug-paths/DP-001-test-failure/DP-001-history.md
   docs/debug-paths/DP-001-test-failure/DP-001-index.md
   ```

2. Fill in context snapshot (problem statement, expected vs actual)

3. Define testing scope (test files, source files, test command)

---

### Step 2: Link to Kanban Story

In the debug path main document, add:

```markdown
## References
- Kanban Story: `docs/project-management/kanban/epics/Epic-2/Story-004-*.md`
- Epic: Epic 2 - Workflow Management Framework
- Story: Story 4 - RW Installer & Plug-and-Play Adoption
- Task: T05 - Fix test failures
```

In the Kanban Story document, add:

```markdown
## Related Debug Paths
- **DP-001:** Test failure investigation
  - Index: `docs/debug-paths/DP-001-test-failure/DP-001-index.md`
  - Status: In Progress
```

---

### Step 3: Follow DRW Workflow

Execute DRW phases in the debug path:

1. **Phase 1:** Execute tests, document in `DP-001-tests.md`
2. **Phase 2:** Analyze failures, document in `DP-001-analysis.md`
3. **Phase 3:** Update strategy in `DP-001-strategy.md`
4. **Phase 4:** Create plan in `DP-001-process.md`
5. **Phase 5:** Execute changes, document in `DP-001-process.md`
6. **Phase 6:** Verify, archive round in `DP-001-history.md`

---

### Step 4: Track Resolution in Story

As debug path progresses, update Story:

```markdown
## Task Checklist
- [x] **E2:S04:T05 – Fix test failures** ✅ COMPLETE (v0.2.4.5+3)
  - Root cause: [Summary from debug path]
  - Solution: [Summary from debug path]
  - Debug Path: `docs/debug-paths/DP-001-test-failure/DP-001-index.md`
```

---

### Step 5: Archive Debug Path

When Story is complete:

1. Mark debug path as archived in `DP-001-index.md`
2. Update Story to reference archived debug path
3. Extract lessons learned to central patterns resource (if applicable)

---

## 🎯 Use Cases

### Use Case 1: Test Failure Investigation

**Scenario:** Test suite fails, needs investigation

**Process:**
1. Open debug path (DP-001)
2. Link to Story (E2:S04:T05)
3. Follow DRW workflow
4. Document root cause and solution
5. Mark Story complete when resolved
6. Archive debug path

---

### Use Case 2: Production Bug

**Scenario:** Production bug reported, needs investigation

**Process:**
1. Open debug path (DP-002)
2. Create Story for bug fix (E2:S05:T01)
3. Link debug path to Story
4. Follow DRW workflow
5. Document investigation and fix
6. Mark Story complete
7. Archive debug path

---

### Use Case 3: Regression Investigation

**Scenario:** Feature regressed, needs investigation

**Process:**
1. Open debug path (DP-003)
2. Link to existing Story or create new one
3. Follow DRW workflow
4. Document regression cause
5. Track fix in Story
6. Archive debug path

---

## 📊 Benefits

### Traceability
- ✅ Debug investigation linked to Story resolution
- ✅ Full audit trail from problem to solution
- ✅ Lessons learned preserved in debug path

### Project Management
- ✅ Stories track resolution status
- ✅ Version markers show when fix was released
- ✅ Changelog entries reference debug paths

### Knowledge Preservation
- ✅ Debug paths document investigation process
- ✅ Patterns and anti-patterns extracted
- ✅ Onboarding materials available

---

## 🔄 Workflow Integration

### With Release Workflow (RW)

When Story is complete:

1. **RW Step 6:** Auto-update Kanban Docs
   - Story marked complete
   - Version marker added
   - Debug path reference preserved

2. **RW Step 3:** Create Detailed Changelog
   - Reference debug path in changelog
   - Document root cause and solution

---

## 📝 Best Practices

1. **Always link debug paths to Stories** — Provides traceability
2. **Update Story as debug path progresses** — Keep status in sync
3. **Reference debug path in changelog** — Document investigation
4. **Archive debug path when Story complete** — Preserve knowledge
5. **Extract lessons learned** — Build institutional memory

---

## 🚫 Anti-Patterns to Avoid

1. **Creating debug path without Story** — Loses traceability
2. **Not updating Story status** — Status becomes stale
3. **Not archiving debug path** — Knowledge not preserved
4. **Not extracting lessons** — Patterns not captured

---

## 📚 Related Documents

- **Debug Path Framework:** `../README.md`
- **DRW Methodology:** `../DRW-METHODOLOGY.md`
- **Kanban Package:** `../../kanban/README.md`

---

**Last Updated:** 2025-12-04  
**Version:** 1.0.0

