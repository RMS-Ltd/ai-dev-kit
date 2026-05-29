---
lifecycle: evergreen
ttl_days: null
created_at: 2026-03-07T00:00:00Z
expires_at: null
housekeeping_policy: keep
---

# ADR-002: Task-Touch Derived Mapping (Kanban → SemVer)

**Status:** Implemented  
**Date:** 2026-03-07  
**Related:** FR-045, SemVer tag collision incident (2026-03-07)

---

## Context

The AI Dev Kit uses dual-versioning with internal `RC.EPIC.STORY.TASK+BUILD` versions for Kanban traceability and external SemVer `MAJOR.MINOR.PATCH+BUILD` for package managers.

The original registry-based mapping (Mode A) causes SemVer tag collisions because it doesn't encode the TASK component, leading to multiple internal versions mapping to the same SemVer.

---

## Decision

Implement **Task-Touch Derived Mapping** (Mode B) that provides strictly monotonic, 1:1 traceable SemVer sequences.

### Mapping Formula

```
MAJOR = RC (Release Candidate)
MINOR = count of epics signed off (per RC)
PATCH = global task-touch counter (increments once per RW release)
BUILD = preserved from internal version
```

### Algorithm

1. **MAJOR**: Direct mapping from RC (0 → 0, 1 → 1, etc.)
2. **MINOR**: Count of epics that have been signed off for the given RC
3. **PATCH**: Global counter that increments each time a task is "touched" by a release
4. **BUILD**: Preserved from internal version for traceability

---

## Implementation

### Configuration

Add to `rw-config.yaml`:

```yaml
# SemVer mapping strategy: "registry" (default) or "task_touch"
semver_mapping_strategy: registry
```

### Registry Structure

Extended `semver-registry.yaml` format:

```yaml
rc_0:
  epic_to_minor: {...}      # Legacy registry mode (backward compatible)
  story_to_patch: {...}     # Legacy registry mode (backward compatible)
  task_touch_mode:
    epic_count: 7            # Number of epics signed off
    task_touch_counter: 156  # Global counter
    mapping_history: []      # Optional: audit trail
```

### API Functions

```python
# Main converter
convert_internal_to_semver_task_touch(rc, epic, story, task, build)

# Counter management
get_epic_count(rc) / set_epic_count(rc, count)
get_task_touch_counter(rc) / increment_task_touch_counter(rc)

# Strategy-aware conversion
convert_version_string(internal_version, strategy="task_touch")
```

---

## Examples

### Collision Resolution

**Before (Registry Mode):**
```
0.6.7.101+5 → 0.6.52+5
0.6.7.102+5 → 0.6.52+5  ← Collision!
0.6.7.103+5 → 0.6.52+5  ← Collision!
```

**After (Task-Touch Mode):**
```
0.6.7.101+5 → 0.4.2+5
0.6.7.102+5 → 0.4.3+5  ← No collision
0.6.7.103+5 → 0.4.4+5  ← No collision
```

### Monotonic Sequences

```
Internal versions:     → Task-Touch SemVer:
0.3.2.12+1             → 0.4.1+1
0.6.7.103+6            → 0.4.2+6
0.2.13.7+1             → 0.4.3+1
0.6.7.18+1             → 0.4.4+1
```

- **MAJOR** stays constant (RC=0)
- **MINOR** stays constant (6 epics signed off)
- **PATCH** always increases (task-touch counter)

---

## Migration

### For New Projects

1. Set `semver_mapping_strategy: task_touch` in `rw-config.yaml`
2. Initialize epic count based on project state
3. Start using task-touch mapping

### For Existing Projects

1. Analyze existing tag history to compute initial counters
2. Use migration utility to backfill task-touch SemVer
3. Switch configuration to `task_touch` mode
4. Verify no collisions in test environment

### Backward Compatibility

- Registry mode remains the default
- Existing `semver-registry.yaml` files are automatically extended
- Both modes can coexist during transition

---

## Consequences

### Benefits

- **Zero Collisions**: Each internal version maps to unique SemVer
- **Strict Monotonicity**: PATCH always increases, package-manager friendly
- **1:1 Traceability**: Direct mapping between internal and external versions
- **Configuration Driven**: Projects can choose mapping strategy

### Trade-offs

- **Global State**: Task-touch counter requires synchronization
- **Migration Effort**: Existing projects need to initialize counters
- **Different SemVer**: Task-touch mode produces different SemVer than registry mode

### Risks

- **Counter Synchronization**: Must ensure atomic updates in concurrent environments
- **Migration Complexity**: Large projects may need careful backfill planning

---

## Status

**✅ Implemented** - Available in `semver_converter.py` with configuration support

**✅ Tested** - Comprehensive test suite covering collision scenarios and monotonicity

**✅ Documented** - This ADR and updated versioning policy

**🔄 Rollout** - Default remains registry mode; task_touch available for opt-in

---

## References

- FR-045: ADR-002 Task-Touch Derived Mapping
- SemVer tag collision incident (2026-03-07)
- Dev Kit Versioning Policy
- Implementation: `packages/frameworks/workflow mgt/scripts/version/semver_converter.py`
