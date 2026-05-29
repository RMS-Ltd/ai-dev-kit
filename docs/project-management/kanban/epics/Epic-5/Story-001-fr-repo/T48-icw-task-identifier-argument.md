s---
lifecycle: evergreen
ttl_days: null
created_at: 2026-03-10T12:26:00Z
expires_at: null
housekeeping_policy: keep
---

# Epic 5, Story 1, Task 48: ICW Task Identifier Argument

**Task ID:** E5:S01:T48  
**Status:** COMPLETE  
**Priority:** HIGH  
**Estimated Effort:** Small  
**Created:** 2026-03-10  
**Completed:** 2026-03-11  
**Last updated:** 2026-03-11 (v0.5.1.48+1 – Implementation complete and validated)  
**Version:** v0.5.1.48+1  
**Code:** E5S01T48

**Repository Pattern:** FR-048 = E5:S01:T48 (first build: v0.5.1.48+0, implementation: v0.5.1.48+1)

---

## Implementation Status

### ✅ COMPLETED IMPLEMENTATION

**Implementation Date:** 2026-03-10  
**Build Version:** v0.5.1.48+1  
**Implementation Status:** ✅ COMPLETE

### 🎯 Implemented Features

#### **Core Functionality**
- **✅ Task Identifier Parsing:** Support for E5:S01:T47, E5S01T47, T47 formats
- **✅ Task Validation:** Kanban task existence checking and validation
- **✅ CLI Enhancement:** Required --task argument with argparse integration
- **✅ Planning Mode Integration:** Extended validation to require task identifier
- **✅ Error Handling:** Clear, helpful error messages with examples

#### **Technical Implementation**
- **✅ ICW Handler:** Enhanced `icw_handler.py` with task identifier support
- **✅ Configuration:** Updated `icw-config.yaml` with task validation settings
- **✅ Test Suite:** Comprehensive tests in `test_icw_new.py`
- **✅ Validation Script:** Simple validation in `validate_task_identifier.py`

#### **FR-048 Requirements**
- **✅ FR-048:R01:** ICW requires task identifier argument when invoked
- **✅ FR-048:R02:** Task identifier includes clear E/S/T numbering
- **✅ FR-048:R03:** Flexible formatting support for various identifier formats
- **✅ FR-048:R04:** Validation that task identifier references existing Kanban task
- **✅ FR-048:R05:** Integration with existing planning mode requirement
- **✅ FR-048:R06:** Clear error messages when task identifier is missing or invalid

### 🔧 Usage Examples

```bash
# Full format
icw_handler.py --task E5:S01:T47 initialize

# Compact format
icw_handler.py --task E5S01T47 initialize

# Task-only format (requires context)
icw_handler.py --task T47 initialize
```

### 📋 Files Modified

#### **Primary Implementation**
- `packages/frameworks/workflow mgt/scripts/icw/icw_handler.py` - Core functionality
- `packages/frameworks/workflow mgt/workflows/implementation-cycle-workflow/icw-config.yaml` - Configuration

#### **Testing and Validation**
- `packages/frameworks/workflow mgt/scripts/icw/test_icw_new.py` - Comprehensive test suite
- `packages/frameworks/workflow mgt/scripts/icw/validate_task_identifier.py` - Simple validation

### 🚀 Next Steps

1. **Integration Testing:** Test with real Kanban tasks
2. **Documentation Updates:** Update **IPW** usage docs (**FR-042**); `icw_handler` remains backward-compatible; **ICW** = deprecated alias
3. **User Training:** Provide examples and guidance for new functionality
4. **Performance Testing:** Validate minimal impact on ICW startup time

---

## Scope

Repository anchor task for **FR-048: ICW Task Identifier Argument**.

This task:

- Anchors FR-048 in the FR repository story (`E5:S01`).
- Describes the requirement to extend ICW to require a task identifier argument.
- Defers actual implementation changes to dedicated implementation tasks under the appropriate ICW framework story.

---

## Input

- **FR-048:** [`FR-048-icw-task-identifier-argument.md`](../../../fr-br/FR-048-icw-task-identifier-argument.md)
- **ICW Documentation:** Current ICW implementation and configuration
- **Kanban Framework:** Task identifier patterns and validation

---

## Deliverable

1. This task document as the canonical repository anchor for FR-048 (`E5:S01:T48`).
2. FR-048 linked from the FR repository story checklist and from this task.
3. A clear description of the ICW task identifier argument requirement sufficient for implementation tasks to:
   - Implement task identifier argument parsing
   - Add task validation against Kanban
   - Integrate with existing planning mode requirement
   - Provide clear error messaging

---

## Acceptance Criteria

- [x] Task document exists and is linked from the FR Repo story checklist as **E5:S01:T48**.
- [x] FR-048 is created and explicitly assigned to E5:S01:T48.
- [x] The ICW task identifier argument requirement is described clearly enough here and in FR-048 to support separate implementation tasks.
- [x] Implementation is complete with task identifier parsing, validation, and CLI enhancement.
- [x] ICW requires task identifier argument when invoked in planning mode.
- [x] Task identifier includes clear E/S/T numbering with flexible format support.

---

## Version Anchor

- **First Build:** v0.5.1.48+0 (this release) anchors FR-048 to E5:S01:T48 with documentation-only changes.
- Subsequent functional work for ICW task identifier should use `BUILD > 0` (e.g. `v0.5.1.48+1`, `+2`, …).

---

## Related Work

- **FR-048:** ICW Task Identifier Argument.
- **E5:S01:T40:** Implementation Cycle Workflow (ICW) - Base ICW implementation.
- **FR-040:** Implementation Cycle Workflow (ICW) - Original ICW feature request.

---

## References

- **FR Repo Story:** [`Story-001-fr-repo.md`](../Story-001-fr-repo.md)
- **FR-048:** [`docs/project-management/kanban/fr-br/FR-048-icw-task-identifier-argument.md`](../../../fr-br/FR-048-icw-task-identifier-argument.md)
- **ICW Handler:** `packages/frameworks/workflow mgt/scripts/icw/icw_handler.py`
- **ICW Configuration:** `packages/frameworks/workflow mgt/workflows/implementation-cycle-workflow/`

---
