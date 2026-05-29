# FR-046 Implementation Guide: RW Uses SemVer Tag When Task-Touch Enabled

This guide documents the implementation of FR-046, which updates Release Workflow (RW) tagging behavior to support ADR-002 task-touch derived mapping.

## Overview

FR-046 enables RW to create SemVer tags (e.g., `v0.9.5`) as the primary external tag when task-touch mapping is enabled, while maintaining backward compatibility with the existing registry mode.

## Configuration

### Enable Task-Touch Tagging

Add to `rw-config.yaml`:

```yaml
# SemVer mapping strategy: "registry" (default) or "task_touch"
semver_mapping_strategy: task_touch
```

### Default Behavior (Registry Mode)

If not specified, defaults to registry mode:

```yaml
# This is the default - no changes needed for existing projects
semver_mapping_strategy: registry
```

## Tagging Behavior

### Registry Mode (Default)

```text
Internal version: 0.6.7.18+2
Primary tag: v0.6.7.18+2
Internal tag: None
Tag message: "Release 0.6.7.18+2"
```

### Task-Touch Mode

```text
Internal version: 0.6.7.18+2
Primary tag: v0.9.5
Internal tag: v0.6.7.18+2 (optional, for traceability)
Tag message: "Release 0.9.5 (Internal: 0.6.7.18+2)"
```

## RW Step 11 Behavior

### Before (Always Internal Tags)

```bash
# Step 11 always created internal version tags
git tag -a v0.6.7.18+2 -m "Release 0.6.7.18+2"
```

### After (Strategy-Aware Tagging)

```bash
# Registry mode (unchanged)
git tag -a v0.6.7.18+2 -m "Release 0.6.7.18+2"

# Task-touch mode
git tag -a v0.9.5 -m "Release 0.9.5 (Internal: 0.6.7.18+2)"
git tag -a v0.6.7.18+2 -m "Internal version for v0.9.5"  # Optional
```

## GitHub Release Integration

### Auto-Detection Mode

The GitHub release script now supports automatic tag detection:

```bash
# Auto-detect based on strategy
python create_github_release.py \
  --internal-version "0.6.7.18+2" \
  --summary "Implement FR-046" \
  --epic "E2" --story "S13" --task "T07"
```

### Explicit Tag Mode

```bash
# Explicit tag (backward compatible)
python create_github_release.py \
  --semver-tag "v0.9.5" \
  --internal-version "0.6.7.18+2" \
  --summary "Implement FR-046" \
  --epic "E2" --story "S13" --task "T07"
```

## API Functions

### Core Tagging Functions

```python
from semver_converter import get_rw_tag_info, create_rw_tags

# Get tagging information
tag_info = get_rw_tag_info("0.6.7.18+2")
print(tag_info['primary_tag'])  # v0.6.7.18+2 or v0.9.5

# Create tags (safe - handles existing tags)
result = create_rw_tags("0.6.7.18+2", create_internal_tag=True)
print(result['created_tags'])
```

### GitHub Release Functions

```python
from create_github_release import create_or_update_release_auto

# Auto-detect tag and create/update release
release = create_or_update_release_auto(
    github_token="token",
    repo="owner/repo",
    internal_version="0.6.7.18+2",
    summary="Release summary",
    epic="E2", story="S13", task="T07",
    verbose=True
)
```

## Migration Guide

### For New Projects

1. Configure task-touch mode in `rw-config.yaml`
2. RW will automatically create SemVer tags
3. GitHub releases will use SemVer tags

### For Existing Projects

1. **Analyze current tags**:

   ```bash
   git tag -l | head -10
   ```

2. **Test task-touch mode** (dry run):

   ```bash
   # Temporarily change config
   sed -i.bak 's/registry/task_touch/' rw-config.yaml

   # Test tagging
   python -c "from semver_converter import get_rw_tag_info; print(get_rw_tag_info('0.6.7.18+2'))"

   # Restore config
   mv rw-config.yaml.bak rw-config.yaml
   ```

3. **Switch to task-touch mode**:

   ```bash
   # Update configuration
   sed -i 's/registry/task_touch/' rw-config.yaml
   git add rw-config.yaml
   git commit -m "Enable task-touch SemVer mapping"
   ```

4. **Verify next RW run**:
   - Run RW and check created tags
   - Verify GitHub release uses SemVer tag

## Collision Prevention

### Problem Solved

Before (Registry Mode):

```text
0.6.7.101+5 → v0.6.52+5
0.6.7.102+5 → v0.6.52+5  ← Collision!
0.6.7.103+5 → v0.6.52+5  ← Collision!
```

After (Task-Touch Mode):

```text
0.6.7.101+5 → v0.9.1
0.6.7.102+5 → v0.9.2  ← No collision
0.6.7.103+5 → v0.9.3  ← No collision
```

### Benefits

- **Zero Collisions**: Each internal version maps to unique SemVer
- **Package Alignment**: Git tags match package versions
- **Automation Friendly**: CI/CD can rely on consistent tag patterns
- **Traceability**: Internal versions preserved in tags and releases

## Troubleshooting

### Issue: Wrong Tag Created

**Symptom**: RW creates internal tag instead of SemVer tag

**Solution**: Check configuration:

```bash
grep semver_mapping_strategy rw-config.yaml
```

### Issue: Tag Already Exists

**Symptom**: `git tag` fails with "already exists" error

**Solution**: This is expected - the function handles existing tags gracefully

### Issue: GitHub Release Uses Wrong Tag

**Symptom**: GitHub release uses internal version instead of SemVer

**Solution**: Use auto-detection mode:

```bash
python create_github_release.py --internal-version "0.6.7.18+2" ...
```

## Testing

### Unit Tests

```bash
# Run FR-046 specific tests
python packages/frameworks/workflow\ mgt/scripts/version/test_fr046_rw_tagging.py

# Run comprehensive tests
python packages/frameworks/workflow\ mgt/scripts/version/test_fr046_comprehensive.py
```

### Integration Tests

```bash
# Test configuration detection
python -c "from semver_converter import get_semver_mapping_strategy; print(get_semver_mapping_strategy())"

# Test tag creation (dry run)
python -c "from semver_converter import get_rw_tag_info; print(get_rw_tag_info('0.6.7.18+2'))"
```

## Backward Compatibility

- **Default behavior unchanged**: Registry mode remains default
- **Existing projects unaffected**: No action required
- **Gradual adoption**: Projects can opt-in when ready
- **Rollback possible**: Switch back to registry mode anytime

## Performance Impact

- **Tag creation**: < 1 second additional overhead
- **Configuration loading**: Negligible impact
- **GitHub releases**: No performance change
- **Storage**: Optional internal tags add minimal storage

## Security Considerations

- **No new permissions required**: Uses existing git/GitHub access
- **Configuration validation**: Invalid strategies fall back to registry mode
- **Tag safety**: Existing tag checks prevent accidental overwrites

## Future Enhancements

### Potential Improvements

1. **Automatic migration**: Utility to convert existing tags
2. **Tag cleanup**: Tool to remove redundant internal tags
3. **Enhanced validation**: Pre-RW checks for tag alignment
4. **Dashboard integration**: Visual tag strategy management

### Related Work

- FR-045: ADR-002 Task-Touch Derived Mapping (dependency)
- ADR-002: Task-Touch SemVer specification
- Release Workflow automation enhancements

---

**Implementation Status**: ✅ Complete
**Test Coverage**: ✅ Comprehensive
**Documentation**: ✅ Complete
**Backward Compatibility**: ✅ Maintained

Ready for production deployment!
