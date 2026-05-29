# Task-Touch SemVer Mapping Examples

This document provides worked examples of the Task-Touch Derived Mapping (ADR-002) implementation.

## Quick Start

### 1. Configure Task-Touch Mapping

Add to `rw-config.yaml`:

```yaml
# SemVer mapping strategy: "registry" (default) or "task_touch"
semver_mapping_strategy: task_touch
```

### 2. Test the Conversion

```bash
# Test with current version
python packages/frameworks/workflow\ mgt/scripts/version/semver_converter.py 0.6.7.101+5

# Output: 0.9.1+5  (MAJOR=0, MINOR=9 epics, PATCH=1st touch, BUILD=5)
```

## Real-World Examples

### Example 1: Collision Resolution

**Problem:** Registry mode causes collisions
```bash
# Registry mode (default)
semver_mapping_strategy: registry

# These all collide:
0.6.7.101+5 → 0.6.52+5
0.6.7.102+5 → 0.6.52+5  ← Collision!
0.6.7.103+5 → 0.6.52+5  ← Collision!
```

**Solution:** Task-touch mode eliminates collisions
```bash
# Task-touch mode
semver_mapping_strategy: task_touch

# Same versions now produce unique SemVer:
0.6.7.101+5 → 0.9.1+5
0.6.7.102+5 → 0.9.2+5  ← No collision
0.6.7.103+5 → 0.9.3+5  ← No collision
```

### Example 2: Monotonic Sequences

A typical development sequence across different epics:

```bash
# Internal versions (chronological):
0.3.2.12+1  → 0.9.1+1   # E3:S02:T12, 1st task touch
0.6.7.103+6 → 0.9.2+6   # E2:S16:T03, 2nd task touch  
0.2.13.7+1  → 0.9.3+1   # E2:S13:T07, 3rd task touch
0.6.7.18+1  → 0.9.4+1   # E6:S07:T18, 4th task touch
```

**Key observations:**
- MAJOR stays constant (RC=0)
- MINOR stays constant (9 epics signed off)
- PATCH always increases (task-touch counter)
- BUILD preserved from internal version

### Example 3: Perpetual Tasks

Perpetual tasks (T101+) also get unique SemVer:

```bash
# Perpetual task sequence:
0.6.7.101+24 → 0.9.5+24   # CMW T101, 5th touch
0.6.7.102+25 → 0.9.6+25   # CMW T102, 6th touch
0.6.7.103+26 → 0.9.7+26   # RW T103, 7th touch
```

## Migration Example

### Migrating an Existing Project

```bash
# 1. Analyze current state (dry run)
python packages/frameworks/workflow\ mgt/scripts/version/migrate_to_task_touch.py

# Output:
# 🔄 Starting migration to Task-Touch SemVer Mapping...
# 📊 Analyzing git tag history...
# Found 564 internal version tags
# Epics per RC: {0: 9}
# Task touches per RC: {0: 564}
# 🔍 DRY RUN - No changes will be made

# 2. Validate no collisions
python packages/frameworks/workflow\ mgt/scripts/version/migrate_to_task_touch.py --validate

# Output:
# 🔍 Validating migration (checking for collisions)...
# ✅ No collisions found in 564 tags

# 3. Apply migration
python packages/frameworks/workflow\ mgt/scripts/version/migrate_to_task_touch.py --apply

# 4. Update configuration
# Edit rw-config.yaml to set semver_mapping_strategy: task_touch

# 5. Test the new mapping
python packages/frameworks/workflow\ mgt/scripts/version/semver_converter.py 0.6.7.101+5
```

## Configuration Examples

### Default Configuration (Registry Mode)

```yaml
# rw-config.yaml
versioning_schema: RC.EPIC.STORY.TASK+BUILD
semver_mapping_strategy: registry  # Default
```

### Task-Touch Configuration

```yaml
# rw-config.yaml
versioning_schema: RC.EPIC.STORY.TASK+BUILD
semver_mapping_strategy: task_touch  # New ADR-002 mode
```

### Mixed Environment (Testing)

```yaml
# rw-config.yaml
versioning_schema: RC.EPIC.STORY.TASK+BUILD
semver_mapping_strategy: registry  # Keep default for now

# Test task-touch mode explicitly:
python semver_converter.py 0.6.7.101+5 --strategy task_touch
```

## Registry Structure Examples

### Before Migration (Registry Only)

```yaml
# semver-registry.yaml
rc_0:
  epic_to_minor:
    1: 1
    2: 2
    3: 3
    6: 6
    9: 9
  story_to_patch:
    (1,1): 1
    (2,13): 63
    (3,2): 19
    (6,7): 52
```

### After Migration (Task-Touch Added)

```yaml
# semver-registry.yaml
rc_0:
  epic_to_minor:          # Preserved for backward compatibility
    1: 1
    2: 2
    3: 3
    6: 6
    9: 9
  story_to_patch:        # Preserved for backward compatibility
    (1,1): 1
    (2,13): 63
    (3,2): 19
    (6,7): 52
  task_touch_mode:       # New ADR-002 section
    epic_count: 9         # 9 epics signed off
    task_touch_counter: 564  # Current counter value
    mapping_history: []   # Optional audit trail
```

## API Usage Examples

### Direct Function Calls

```python
from semver_converter import (
    convert_version_string,
    convert_internal_to_semver_task_touch,
    get_epic_count,
    set_epic_count
)

# Strategy-aware conversion
semver = convert_version_string("0.6.7.101+5")  # Uses config
semver_tt = convert_version_string("0.6.7.101+5", strategy="task_touch")

# Direct task-touch conversion
major, minor, patch, build = convert_internal_to_semver_task_touch(0, 6, 7, 101, 5)

# Counter management
epic_count = get_epic_count(0)  # Get current epic count
set_epic_count(0, 10)           # Set epic count (for new RC)
```

### Command Line Usage

```bash
# Use configured strategy
python semver_converter.py 0.6.7.101+5

# Override strategy for testing
python semver_converter.py 0.6.7.101+5 --strategy task_touch
python semver_converter.py 0.6.7.101+5 --strategy registry
```

## Troubleshooting

### Issue: Counter Reset After Migration

**Symptom:** Task-touch counter starts from 0 instead of continuing from history.

**Solution:** Ensure migration was applied with `--apply` flag:
```bash
python migrate_to_task_touch.py --apply
```

### Issue: Different SemVer Than Expected

**Symptom:** Conversion produces different MINOR/PATCH than expected.

**Solution:** Check epic count and counter values:
```python
from semver_converter import get_epic_count, get_task_touch_counter
print(f"Epic count: {get_epic_count(0)}")
print(f"Task counter: {get_task_touch_counter(0)}")
```

### Issue: Collisions Still Occur

**Symptom:** Task-touch mode still produces collisions.

**Solution:** Validate migration and check for concurrent access:
```bash
python migrate_to_task_touch.py --validate
```

## Performance Considerations

- **Conversion Speed:** < 1ms per conversion (negligible impact)
- **Registry Size:** Adds ~100 bytes per RC for task-touch metadata
- **Git Operations:** Migration analyzes all tags once (~5 seconds for 500 tags)
- **Memory Usage:** Minimal additional memory footprint

## Best Practices

1. **Test Before Deploying:** Always validate with `--validate` flag
2. **Backup Registry:** Migration automatically backs up existing registry
3. **Gradual Rollout:** Keep registry mode as default during transition
4. **Document Choice:** Record mapping strategy choice in project documentation
5. **Monitor Collisions:** Periodically validate if using task-touch mode

## Comparison Summary

| Feature | Registry Mode | Task-Touch Mode |
|---------|---------------|-----------------|
| Collisions | Possible (same epic/story) | Impossible |
| Monotonic | Within epic/story only | Always |
| SemVer Meaning | Epic/Story based | Task-touch based |
| Migration | N/A (default) | Required |
| Package Manager | Sometimes problematic | Always compatible |
| Traceability | Good (loses TASK) | Perfect (1:1) |
