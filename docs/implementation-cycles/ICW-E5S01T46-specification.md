# ICW Specification: E5:S01:T46 - RW SemVer Tag task_touch Mode

**ICW Instance:** ICW-E5S01T46  
**Task:** E5:S01:T46 - Release Workflow Uses SemVer Tag When task_touch Enabled  
**Phase:** Specification  
**Timestamp:** 2026-03-12T10:40:00Z  
**Agent:** ICW_Executor_E5S01T46  

---

## Executive Summary

This specification defines the implementation requirements for enabling Release Workflow (RW) to use SemVer tags when the `task_touch` SemVer mapping strategy is enabled. The implementation will modify RW Step 11 and related tooling to support dual tagging: internal version tags and SemVer tags based on the task_touch mapping defined in ADR-002.

---

## Requirements Analysis

### Functional Requirements

**FR-1: SemVer Tag Generation**
- RW Step 11 must generate SemVer tags when `semver_mapping_strategy: task_touch` is configured
- SemVer tags follow the format `v\{MAJOR\}.\{MINOR\}.\{PATCH\}` derived from internal version
- Internal version tags `v{RC.EPIC.STORY.TASK+BUILD}` must also be created for traceability

**FR-2: Configuration Integration**
- Read `semver_mapping_strategy` from `rw-config.yaml`
- Validate task_touch configuration against ADR-002 mapping rules
- Support both registry and task_touch modes in the same RW execution

**FR-3: Tag Coherence**
- Ensure SemVer and internal tags reference the same commit
- Maintain bidirectional traceability between tag types
- Support tag discovery and linking in documentation

### Non-Functional Requirements

**NFR-1: Backward Compatibility**
- Existing RW functionality must remain unchanged
- Default behavior preserved when task_touch not configured
- No breaking changes to existing tag formats

**NFR-2: Performance**
- Tag generation must not significantly impact RW execution time
- Support for bulk tag operations in large repositories
- Efficient tag lookup and validation

**NFR-3: Error Handling**
- Graceful degradation when SemVer mapping fails
- Clear error messages for configuration issues
- Rollback capability for tag creation failures

---

## Technical Specification

### Architecture Overview

```
RW Step 11 (Tag Creation)
├── Configuration Reader
│   ├── Load rw-config.yaml
│   ├── Validate semver_mapping_strategy
│   └── Parse task_touch mapping rules
├── Tag Generator
│   ├── Internal Tag Generator (existing)
│   ├── SemVer Tag Generator (new)
│   └── Tag Coherence Validator
└── Tag Manager
    ├── Create Internal Tag
    ├── Create SemVer Tag (if task_touch)
    └── Link Tags in Documentation
```

### Component Specifications

#### Configuration Reader Component

**Purpose:** Load and validate SemVer mapping configuration

**Interface:**
```python
class SemVerConfigReader:
    def load_config(self, config_path: str) -> Dict:
        """Load and parse rw-config.yaml"""
        
    def validate_task_touch_config(self, config: Dict) -> bool:
        """Validate task_touch mapping against ADR-002"""
        
    def get_mapping_strategy(self) -> str:
        """Return current semver_mapping_strategy"""
```

**Key Functions:**
- Parse `semver_mapping_strategy` from configuration
- Validate task_touch mapping rules (EPIC → MAJOR, STORY → MINOR, TASK → PATCH)
- Handle configuration errors gracefully

#### SemVer Tag Generator Component

**Purpose:** Generate SemVer tags based on task_touch mapping

**Interface:**
```python
class SemVerTagGenerator:
    def derive_semver(self, internal_version: str, mapping_config: Dict) -> str:
        """Derive SemVer from internal version using task_touch mapping"""
        
    def validate_semver_format(self, semver: str) -> bool:
        """Validate SemVer format compliance"""
        
    def create_semver_tag(self, semver: str, commit_hash: str, message: str) -> bool:
        """Create annotated SemVer tag"""
```

**Mapping Logic:**
- EPIC number → MAJOR version
- STORY number → MINOR version  
- TASK number → PATCH version
- BUILD number ignored for SemVer (uses latest task completion)

#### Tag Coherence Validator

**Purpose:** Ensure consistency between internal and SemVer tags

**Interface:**
```python
class TagCoherenceValidator:
    def validate_tag_consistency(self, internal_tag: str, semver_tag: str) -> bool:
        """Validate that both tags reference same semantic content"""
        
    def create_tag_link(self, internal_tag: str, semver_tag: str) -> str:
        """Create bidirectional link between tags"""
        
    def update_documentation(self, tag_links: List[str]) -> bool:
        """Update documentation with tag references"""
```

### Data Structures

#### Configuration Schema
```yaml
# rw-config.yaml
semver_mapping_strategy: "task_touch"  # or "registry"
task_touch_mapping:
  epic_to_major: true
  story_to_minor: true
  task_to_patch: true
  build_handling: "ignore"  # or "increment_patch"
```

#### Tag Metadata
```python
TagMetadata = {
    "internal_tag": "v0.5.1.46+2",
    "semver_tag": "v5.1.46",
    "commit_hash": "abc123",
    "mapping_strategy": "task_touch",
    "created_at": "2026-03-12T10:40:00Z",
    "links": {
        "internal_to_semver": "v0.5.1.46+2 -> v5.1.46",
        "semver_to_internal": "v5.1.46 -> v0.5.1.46+2"
    }
}
```

---

## Implementation Plan

### Phase 1: Configuration Integration (Week 1)

**Tasks:**
1. Extend `rw-config.yaml` schema to support task_touch mapping
2. Implement `SemVerConfigReader` component
3. Add configuration validation logic
4. Create unit tests for configuration handling

**Deliverables:**
- Updated configuration schema
- Configuration reader implementation
- Validation test suite

### Phase 2: Tag Generation (Week 2)

**Tasks:**
1. Implement `SemVerTagGenerator` component
2. Create ADR-002 mapping logic
3. Add tag generation to RW Step 11
4. Implement error handling for tag failures

**Deliverables:**
- SemVer tag generator
- Updated RW Step 11 logic
- Error handling procedures

### Phase 3: Coherence and Documentation (Week 3)

**Tasks:**
1. Implement `TagCoherenceValidator` component
2. Create bidirectional tag linking
3. Update documentation generation
4. Add integration tests

**Deliverables:**
- Tag coherence validator
- Documentation updates
- Integration test suite

---

## Integration Points

### RW Workflow Integration

**Step 11 Modifications:**
```python
def create_git_tag(self, version_info):
    # Existing internal tag creation
    internal_tag = f"v{version_info['internal']}"
    self.create_annotated_tag(internal_tag, message)
    
    # New SemVer tag creation (if task_touch enabled)
    if self.config.get('semver_mapping_strategy') == 'task_touch':
        semver_tag = self.derive_semver(version_info['internal'])
        self.create_annotated_tag(semver_tag, message)
        self.create_tag_link(internal_tag, semver_tag)
```

### Documentation Integration

**README Updates:**
- Version badge updates to support SemVer display
- Tag reference documentation
- Migration guide for task_touch configuration

**Changelog Integration:**
- Dual version references in changelog entries
- Tag cross-references in detailed changelogs

---

## Risk Assessment

### High-Risk Areas

**Configuration Complexity**
- Risk: Complex task_touch mapping configuration errors
- Mitigation: Comprehensive validation and clear error messages
- Rollback: Fallback to registry mode on configuration errors

**Tag Coherence**
- Risk: Inconsistent tagging between internal and SemVer
- Mitigation: Validation checks and atomic tag creation
- Rollback: Delete both tags if coherence fails

**Performance Impact**
- Risk: Additional tag creation slows RW execution
- Mitigation: Optimized tag generation and parallel operations
- Rollback: Disable SemVer tagging if performance degraded

### Mitigation Strategies

**Configuration Validation**
- Pre-execution configuration validation
- Clear error messages for invalid mappings
- Default fallback to registry mode

**Atomic Operations**
- Create both tags atomically or fail together
- Rollback procedures for partial failures
- Validation checks before tag creation

**Performance Optimization**
- Cache configuration parsing
- Parallel tag operations where possible
- Minimal overhead for registry mode

---

## Success Criteria

### Functional Success

- [ ] RW creates SemVer tags when task_touch enabled
- [ ] Internal tags continue to work as before
- [ ] Tag coherence maintained between tag types
- [ ] Configuration validation prevents errors

### Quality Success

- [ ] Zero regression in existing RW functionality
- [ ] Comprehensive test coverage (>90%)
- [ ] Clear documentation and examples
- [ ] Performance impact &lt;5% increase in RW time

### Integration Success

- [ ] Seamless integration with existing RW workflow
- [ ] Documentation automatically updated
- [ ] Error handling graceful and informative
- [ ] Rollback procedures tested and validated

---

## Dependencies

### Internal Dependencies

- **RW Workflow Engine:** Step 11 modifications
- **Configuration System:** rw-config.yaml parsing
- **Documentation System:** Changelog and README updates
- **Validation System:** Tag format validation

### External Dependencies

- **Git:** Tag creation and management
- **YAML Parser:** Configuration file parsing
- **SemVer Library:** Version format validation

---

## Testing Strategy

### Unit Testing

**Configuration Tests:**
- Valid task_touch configuration parsing
- Invalid configuration error handling
- Default behavior preservation

**Tag Generation Tests:**
- Correct SemVer derivation from internal versions
- Edge cases in mapping logic
- Error conditions handling

### Integration Testing

**RW Workflow Tests:**
- End-to-end RW execution with task_touch
- Backward compatibility with registry mode
- Error recovery and rollback procedures

**Documentation Tests:**
- README updates with dual versions
- Changelog cross-references
- Tag link validation

### Performance Testing

**Benchmark Tests:**
- RW execution time comparison
- Tag creation performance
- Memory usage validation

---

## Rollback Procedures

### Immediate Rollback (&lt;5 minutes)

**Trigger:** Configuration errors or tag creation failures

**Actions:**
1. Disable SemVer tag creation
2. Continue with internal tags only
3. Log error for investigation
4. Notify user of fallback behavior

### Phase Rollback (15-30 minutes)

**Trigger:** Integration issues or coherence failures

**Actions:**
1. Delete created SemVer tags
2. Restore previous RW Step 11 implementation
3. Validate internal tag functionality
4. Document rollback reasons

### Full Rollback (30-45 minutes)

**Trigger:** Critical system failures or data corruption

**Actions:**
1. Restore entire RW implementation from backup
2. Validate all RW functionality
3. Test configuration loading
4. Document complete rollback

---

## Documentation Requirements

### User Documentation

**Configuration Guide:**
- rw-config.yaml schema documentation
- Task_touch mapping examples
- Migration guide from registry mode

**Troubleshooting Guide:**
- Common configuration errors
- Tag creation failures
- Performance issues

### Developer Documentation

**API Documentation:**
- Component interfaces and methods
- Configuration schema definitions
- Error handling procedures

**Integration Guide:**
- RW Step 11 modifications
- Testing procedures
- Rollback documentation

---

## Timeline

### Week 1: Configuration Integration
- Days 1-2: Configuration schema and reader
- Days 3-4: Validation and error handling
- Day 5: Unit testing and documentation

### Week 2: Tag Generation
- Days 6-7: SemVer tag generator implementation
- Days 8-9: RW Step 11 integration
- Day 10: Error handling and testing

### Week 3: Coherence and Integration
- Days 11-12: Tag coherence validator
- Days 13: Documentation integration
- Days 14-15: Integration testing and validation

---

## Acceptance Testing

### Functional Tests

1. **Configuration Test**
   - Load valid task_touch configuration
   - Validate mapping rules
   - Test error conditions

2. **Tag Generation Test**
   - Generate SemVer tags from internal versions
   - Validate tag formats
   - Test edge cases

3. **Integration Test**
   - Execute RW with task_touch enabled
   - Verify both tags created
   - Validate tag coherence

### Performance Tests

1. **Benchmark Test**
   - Compare RW execution times
   - Measure tag creation overhead
   - Validate memory usage

2. **Load Test**
   - Test with large repositories
   - Validate performance under load
   - Test concurrent operations

---

## Final Validation

### Pre-Release Checklist

- [ ] All unit tests passing
- [ ] Integration tests successful
- [ ] Performance benchmarks met
- [ ] Documentation complete
- [ ] Rollback procedures tested
- [ ] Security review completed

### Release Criteria

- Zero critical bugs
- Performance impact &lt;5%
- 100% backward compatibility
- Complete documentation coverage
- Successful rollback testing

---

**Specification Status:** COMPLETE  
**Next Phase:** Test Design  
**Agent:** ICW_Executor_E5S01T46  
**Timestamp:** 2026-03-12T11:00:00Z
