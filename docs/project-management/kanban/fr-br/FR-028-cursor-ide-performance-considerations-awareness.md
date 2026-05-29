---
lifecycle: evergreen
ttl_days: null
created_at: 2025-12-21T19:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Feature Request: Cursor IDE Performance Considerations Awareness

**Type:** Feature Request (FR)  
**Submitted:** 2025-12-21  
**Submitted By:** User  
**Priority:** MEDIUM  
**Status:** IMPLEMENTED (v0.6.6.15+1 - T15 implementation complete)

---

## Summary

Create awareness documentation and update framework guidance for Cursor IDE performance considerations based on real-world investigation of IDE crashes in large projects. Ensure adopting projects are aware of potential performance issues and best practices to prevent IDE crashes.

---

## Problem Statement

**Current Situation:**
- Large projects can experience Cursor IDE crashes during bulk operations (Release Workflow, pre-commit hooks, file updates)
- Investigation in Confidentia project identified root causes:
  - Pre-commit hooks processing too many files (`pass_filenames: false` processing all files)
  - Large file counts causing file watching/indexing overhead
  - Bulk file operations triggering many file watcher events
  - File watching/indexing overhead overwhelming IDE resources

- ai-dev-kit currently has 1,021 markdown files (growing), 266 changelog archive files, 181 Kanban files
- Framework documentation shows `pass_filenames: false` as example (problematic pattern)
- No awareness documentation exists for IDE performance considerations

**Impact:**
- Projects adopting the framework may encounter IDE crashes without guidance
- Framework documentation promotes performance-inefficient patterns
- No best practices documented for large file count projects
- Developer experience degrades in large projects

---

## Proposed Solution

### 1. Create Awareness Documentation

Create `docs/architecture/standards-and-adrs/cursor-ide-performance-considerations.md` documenting:

- **Root Causes:** Pre-commit hooks, large file counts, bulk operations, file watching overhead
- **Best Practices:** Pre-commit hook configuration, file operations, IDE configuration
- **Monitoring:** Warning signs, measurement commands, thresholds
- **Framework Guidance:** Recommendations for adopting projects
- **Action Items:** For ai-dev-kit and adopting projects

### 2. Update Framework Documentation

Update framework documentation to promote best practices:

- **Pre-commit Hook Examples:** Change from `pass_filenames: false` to `pass_filenames: true`
- **Performance Notes:** Add warnings about performance implications
- **Best Practices:** Document file operation batching, `.cursorignore` usage

### 3. Reference External Investigation

Link to Confidentia project investigation (Epic 20, Story 5, Task 16) as source of findings.

---

## Use Cases

1. **Project Adopting Framework:**
   - Reads awareness documentation
   - Understands potential performance issues
   - Configures pre-commit hooks correctly (`pass_filenames: true`)
   - Sets up `.cursorignore` for large directories
   - Avoids IDE crashes and performance issues

2. **ai-dev-kit Maintenance:**
   - Monitors file count growth
   - Applies best practices proactively
   - Prevents performance issues before they occur
   - Documents lessons learned for framework adoption

3. **Framework Documentation:**
   - Examples promote best practices
   - Performance considerations highlighted
   - Adopting projects have guidance from the start

---

## Acceptance Criteria

- [ ] Awareness document created: `docs/architecture/standards-and-adrs/cursor-ide-performance-considerations.md`
- [ ] Framework implementation guide updated with `pass_filenames: true` examples
- [ ] Performance notes added to framework documentation
- [ ] Best practices documented (pre-commit hooks, file operations, IDE configuration)
- [ ] Monitoring guidelines included
- [ ] Action items documented for ai-dev-kit and adopting projects
- [ ] External investigation referenced (Confidentia project)

---

## Related Work

- **External Investigation:** Confidentia project - Epic 20, Story 5, Task 16
  - Bug Report: `KB/PM_and_Portfolio/kanban/Epic 20/Story-5-BR-Cursor-IDE-Crashes.md`
  - Investigation Report: `KB/Documentation/Developer_Docs/cursor-crash-investigation.md`
  - Article: `KB/Documentation/Developer_Docs/cursor-crash-investigation-article.md`

- **Epic:** 6 - Framework Management and Maintenance
- **Story:** 6 - ADK Implementation Analysis and Package Management

---

## Priority Justification

**MEDIUM Priority** because:
- ai-dev-kit currently has manageable file counts (not yet critical)
- Framework documentation needs correction (preventive)
- Awareness documentation helps adopting projects avoid issues
- Based on real-world investigation (proven need)
- Proactive documentation prevents future problems

---

## Implementation Considerations

- Follow existing ADR/documentation structure
- Reference external investigation appropriately
- Update framework documentation examples consistently
- Maintain backward compatibility (show both patterns if needed, with recommendations)
- Link to related framework documentation

---

## References

- **External Investigation:** Confidentia project (Epic 20, Story 5, Task 16)
- **Framework Documentation:** `packages/frameworks/numbering & versioning/IMPLEMENTATION_GUIDE.md`
- **Current File Counts:** ai-dev-kit statistics (1,021 markdown files, 266 changelog archive files, 181 Kanban files)

---

**Feature Request ID:** FR-028  
**Created:** 2025-12-21  
**Last Updated:** 2025-12-21

