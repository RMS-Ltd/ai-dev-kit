---
lifecycle: evergreen
ttl_days: null
created_at: 2026-03-07T00:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Epic 6, Story 7, Task 107: IDE Command Whitelist Optimization

**Status:** ✅ COMPLETE (v0.6.7.107+3)  
**Priority:** HIGH  
**Estimated Effort:** 2-4 hours  
**Created:** 2026-03-07  
**Started:** 2026-05-30  
**Completed:** 2026-05-30  
**Version:** v0.6.7.107+3

**Task Type:** Enhancement  
**Code:** E06S07T107

**Historical Anchor:** Canonical `E06:S07:T107` under Story 007 (ADK implementation analysis). Three-digit task id is story-local sequencing, not an E02:S16 perpetual-lane alias.

---

## Task ID

**Task ID:** E06:S07:T107

**Format:** `E\{epic\}:S\{story\}:T\{task\}`
**Value:** `E06:S07:T107`

---

## Problem Statement

Users experiencing high friction with IDE command approval workflow due to:

1. **Concrete Command Storage**: Whitelist stores exact command strings with specific parameters
2. **Version Variations**: Commands with version numbers (e.g., `v0.6.7.101+33`) create unique entries
3. **Path Variations**: Different file paths create separate whitelist entries  
4. **Parameter Variations**: Slight parameter differences trigger new approval requests
5. **Repeated Approvals**: Same command patterns require re-approval for minor variations

---

## Goal

Optimize IDE command whitelist to reduce approval friction by implementing pattern-based command approval instead of concrete command storage.

---

## Scope

### In Scope

- Analyze current whitelist behavior and friction points
- Create generalized command patterns for common operations
- Implement pattern-based whitelist configuration
- Document approved command patterns for team use
- Test and validate pattern-based approval workflow

### Out of Scope

- IDE-level security policy changes
- Whitelist implementation at IDE code level
- Cross-IDE compatibility (focus on current environment)

---

## Acceptance Criteria

- [x] **AC1**: Friction taxonomy — [ide-whitelist-guide.md § Friction analysis](../../../../../developer-tools/ide-whitelist-guide.md#friction-analysis-ac1)
- [x] **AC2**: Pattern catalog v1.1 — [`.cursor/whitelist-patterns.yaml`](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/.cursor/whitelist-patterns.yaml); validator PASS
- [x] **AC3**: Python/git/gh/find/rg/pytest patterns — catalog `patterns` map
- [x] **AC4**: Configuration file + [ADR-013](../../../../architecture/standards-and-adrs/ADR-013-ide-command-allowlist-catalog-and-enforcement.md)
- [x] **AC5**: `validate_whitelist_patterns.py` + pytest; [UAT log entry 001](../../../../../developer-tools/ide-whitelist-uat-log.md)
- [x] **AC6**: [ide-whitelist-guide.md](../../../../../developer-tools/ide-whitelist-guide.md) v1.1
- [x] **AC7**: Catalog enables reduction when applied in Cursor ([UAT entry 002](../../../../../developer-tools/ide-whitelist-uat-log.md) — live prompt counts pending maintainer session)

---

## Implementation Plan

**Canonical plan:** [IPP-E6S7T107 §4](../../../../implementation-cycles/IPP-E06S07T107-ide-command-whitelist-optimization.md#4-implementation-plan) (IPW). The phased outline below is **superseded** by the IPP for execution order, ADR-013, validator, and UAT evidence.

---

## Command Patterns Identified

### High-Frequency Patterns

- **Python Validation Scripts**:

```bash
python "packages/frameworks/workflow-mgt/scripts/validation/validate_*.py"
```

- **Git Operations**:

```bash
git (add|status|commit|push|tag|checkout|branch|log|diff|restore|show)
```

- **File Search Operations**:

```bash
find /Users/rms/Documents/projects/ai-dev-kit [options]
```

- **File Operations**:

```bash
read_file, edit, multi_edit, list_dir, find_by_name
```

---

## Deliverables

1. **Analysis Report**: Current whitelist friction documentation
2. **Configuration File**: `.cursor/whitelist-patterns.yaml`
3. **Pattern Documentation**: Team guide for whitelist management
4. **Test Results**: Validation of pattern-based approval workflow

---

## Dependencies

- None (self-contained optimization task)

---

## Risks and Mitigations

| Risk | Impact | Mitigation |
|------|--------|------------|
| Pattern too broad | Medium | Start with specific patterns, gradually broaden |
| IDE doesn't support patterns | High | Document alternative approaches |
| Security concerns | Medium | Review patterns for safety implications |

---

## Success Metrics

- **Primary**: Reduce approval requests by 80% for common command patterns
- **Secondary**: Zero repeated approvals for slight command variations
- **Tertiary**: Team adoption of pattern-based whitelist management

---

## Notes

- This task addresses developer experience friction in workflow automation
- Pattern-based approach should scale with project complexity
- Configuration should be version controlled for team consistency
- Consider creating separate patterns for different security contexts

---

---

## Input

- [IPP-E6S7T107](../../../../implementation-cycles/IPP-E06S07T107-ide-command-whitelist-optimization.md)
- [ADR-013](../../../../architecture/standards-and-adrs/ADR-013-ide-command-allowlist-catalog-and-enforcement.md)
- [`.cursor/whitelist-patterns.yaml`](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/.cursor/whitelist-patterns.yaml)
- [ide-whitelist-guide.md](../../../../../developer-tools/ide-whitelist-guide.md)
- [ide-whitelist-uat-log.md](../../../../../developer-tools/ide-whitelist-uat-log.md)

---

## References

- [IPP-E6S7T107](../../../../implementation-cycles/IPP-E06S07T107-ide-command-whitelist-optimization.md)
- [ADR-013](../../../../architecture/standards-and-adrs/ADR-013-ide-command-allowlist-catalog-and-enforcement.md)
- [validate_whitelist_patterns.py](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/packages/frameworks/workflow-mgt/scripts/validation/validate_whitelist_patterns.py)
- [ide-whitelist-guide.md](../../../../../developer-tools/ide-whitelist-guide.md) · [ide-whitelist-uat-log.md](../../../../../developer-tools/ide-whitelist-uat-log.md)
- [BR-039 — Cascade whitelist (vendor; out of scope for T107 closure)](../../../fr-br/BR-039-cascade-whitelist-security-prompt-usability-blocker.md)
- [E06:S06:T57 — BR-039 repo track](../story-06-feature-requests/T57-br039-cascade-whitelist-security-prompt-blocker.md)
- [IPW-E6S6T57](../../../../implementation-cycles/IPW-E6S06T57-br039-vendor-blocker-planning.md)
- [story-007 — In scope / charter freeze](../story-07-adk-implementation-analysis-and-package-management.md) (T107 pre-existing; in scope for ADK agent friction)

---

**Related Tasks**: [E06:S06:T57](../story-06-feature-requests/T57-br039-cascade-whitelist-security-prompt-blocker.md) (BR-039 — complementary, not duplicate)

**Feature Requests**: None (developer experience improvement). **Note:** [FR-050](../../../fr-br/FR-050-workflows-directory-structure-reorganization.md) was incorrectly linked to T107 — correct on implementation per IPP RF8.

**Epic Context**: E6:S07 - Framework Management and Maintenance
