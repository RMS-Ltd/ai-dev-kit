---
lifecycle: evergreen
ttl_days: null
created_at: 2025-12-10T22:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Trigger Detection System Design

**Epic:** Epic 2 (Workflow Management Framework)  
**Story:** Story 7 (Trigger-Aware Release Workflow)  
**Task:** Task 1 (Design trigger detection system)  
**Version:** v0.2.7.1+0

---

## Overview

This document designs the trigger detection system for the Release Workflow (RW), enabling RW to react to specified triggers and dynamically execute sub-workflows. The design follows a hybrid approach: pattern registry for fast, reliable detection of common patterns, with agentic analysis as a fallback for complex or ambiguous cases.

---

## Design Principles

1. **Reliability First:** Use deterministic pattern matching for known triggers
2. **Intelligence Where Needed:** Use agentic analysis for complex/ambiguous cases
3. **Extensibility:** Allow new triggers to be registered easily
4. **Transparency:** Provide explanations for trigger detection decisions
5. **Performance:** Fast path for common scenarios, intelligent path for edge cases

---

## Architecture

### Hybrid Trigger Detection System

```
┌─────────────────────────────────────────────────────────┐
│              Trigger Detection Request                   │
│         (commit message, files, context)                 │
└────────────────────┬────────────────────────────────────┘
                     │
                     ▼
         ┌───────────────────────┐
         │  Pattern Registry     │
         │  (Fast Path)          │
         └───────────┬───────────┘
                     │
         ┌───────────▼───────────┐
         │  Pattern Matching    │
         │  (Regex/File Paths)  │
         └───────────┬───────────┘
                     │
         ┌───────────▼───────────┐
         │  Match Found?         │
         └───────┬───────────┬───┘
                 │           │
            YES  │           │  NO
                 │           │
                 ▼           ▼
    ┌──────────────────┐  ┌──────────────────┐
    │  Return Trigger  │  │ Agentic Analysis │
    │  (High Confidence)│  │  (Intelligent)   │
    └──────────────────┘  └────────┬─────────┘
                                    │
                                    ▼
                          ┌──────────────────┐
                          │  Return Trigger  │
                          │  (Validated)     │
                          └──────────────────┘
```

---

## Trigger Types

### 1. Commit Message Patterns

**Pattern Format:** Regex patterns that match commit messages

**Examples:**
- `FR\d+` - Matches Feature Requests (FR012, FR-012, FR123)
- `BR\d+` - Matches Bug Reports (BR007, BR-007, BR456)
- `UXR\d+` - Matches User Experience Research (UXR001, UXR-001, UXR789)

**Note:** Patterns use `\d+` to match digits, which naturally handles both `FR012` and `FR-012` formats (the dash is optional in the pattern).

### 2. File Path Patterns

**Pattern Format:** File path patterns (glob or regex)

**Examples:**
- `fr-br/FR-*.md` - Matches FR files in fr-br directory
- `fr-br/BR-*.md` - Matches BR files in fr-br directory
- `fr-br/UXR-*.md` - Matches UXR files in fr-br directory

### 3. Manual Triggers

**Pattern Format:** Explicit trigger flags or tags

**Examples:**
- Git tags: `trigger:task-creation`
- Commit flags: `[TRIGGER:task-creation]`
- Manual activation via RW parameter

---

## Trigger Registry Structure

```python
TRIGGER_REGISTRY = {
    'fr_commit': {
        'name': 'Feature Request Commit',
        'description': 'Detects Feature Request commits',
        'type': 'commit_message',
        'patterns': [
            r'FR\d+',           # Matches FR012, FR-012, FR123
            r'\[FR\d+\]',       # Matches [FR012], [FR-012]
            r'FR-\d+',          # Explicit dash format
        ],
        'file_patterns': [
            'fr-br/FR-*.md',
            'docs/project-management/kanban/fr-br/FR-*.md',
        ],
        'workflow': 'agentic_task_creation',
        'confidence': 'high',
        'priority': 1,
    },
    'br_commit': {
        'name': 'Bug Report Commit',
        'description': 'Detects Bug Report commits',
        'type': 'commit_message',
        'patterns': [
            r'BR\d+',           # Matches BR007, BR-007, BR456
            r'\[BR\d+\]',       # Matches [BR007], [BR-007]
            r'BR-\d+',          # Explicit dash format
        ],
        'file_patterns': [
            'fr-br/BR-*.md',
            'docs/project-management/kanban/fr-br/BR-*.md',
        ],
        'workflow': 'agentic_task_creation',
        'confidence': 'high',
        'priority': 1,
    },
    'uxr_commit': {
        'name': 'User Experience Research Commit',
        'description': 'Detects UXR commits',
        'type': 'commit_message',
        'patterns': [
            r'UXR\d+',          # Matches UXR001, UXR-001, UXR789
            r'\[UXR\d+\]',      # Matches [UXR001], [UXR-001]
            r'UXR-\d+',          # Explicit dash format
        ],
        'file_patterns': [
            'fr-br/UXR-*.md',
            'docs/project-management/kanban/fr-br/UXR-*.md',
        ],
        'workflow': 'agentic_task_creation',
        'confidence': 'high',
        'priority': 1,
    },
}
```

---

## Detection Flow

### Step 1: Pattern Matching (Fast Path)

1. **Extract Context:**
   - Commit message (from git log or current commit)
   - Changed files (from git diff or staged files)
   - Current branch context

2. **Pattern Matching:**
   - Iterate through trigger registry
   - For each trigger, test patterns against commit message
   - Test file patterns against changed files
   - If match found, return trigger with high confidence

3. **Multiple Matches:**
   - If multiple triggers match, prioritize by:
     - Priority (lower number = higher priority)
     - Confidence (high > medium > low)
     - Pattern specificity (more specific patterns preferred)

### Step 2: Agentic Analysis (Intelligent Path)

1. **Trigger Conditions:**
   - No pattern match found
   - Ambiguous match (multiple triggers with same priority)
   - Complex context requiring intelligence

2. **Agentic Analysis:**
   - Analyze commit message content
   - Analyze file changes
   - Understand context and intent
   - Determine appropriate trigger

3. **Validation:**
   - Validate agentic decision against registry
   - Provide explanation for decision
   - Return trigger with confidence level

---

## Implementation Details

### Trigger Detection Function

```python
def detect_triggers(commit_message: str, changed_files: List[str], context: Dict) -> List[Trigger]:
    """
    Detect triggers from commit message, changed files, and context.
    
    Returns list of detected triggers with confidence levels.
    """
    triggers = []
    
    # Fast path: Pattern matching
    for trigger_id, trigger_def in TRIGGER_REGISTRY.items():
        matches = []
        
        # Test commit message patterns
        for pattern in trigger_def['patterns']:
            if re.search(pattern, commit_message, re.IGNORECASE):
                matches.append(('commit_message', pattern))
        
        # Test file patterns
        for file_pattern in trigger_def.get('file_patterns', []):
            for file_path in changed_files:
                if fnmatch.fnmatch(file_path, file_pattern):
                    matches.append(('file_path', file_pattern))
        
        if matches:
            triggers.append(Trigger(
                id=trigger_id,
                definition=trigger_def,
                matches=matches,
                confidence='high',
                source='pattern_registry'
            ))
    
    # If no pattern matches, use agentic analysis
    if not triggers:
        triggers = agentic_analyze_triggers(commit_message, changed_files, context)
    
    # Sort by priority and confidence
    triggers.sort(key=lambda t: (t.definition['priority'], t.confidence))
    
    return triggers
```

### Agentic Analysis Function

```python
def agentic_analyze_triggers(commit_message: str, changed_files: List[str], context: Dict) -> List[Trigger]:
    """
    Use agentic intelligence to detect triggers when pattern matching fails.
    """
    # Analyze commit message for FR/BR/UXR indicators
    # Analyze file changes for FR/BR/UXR files
    # Determine appropriate trigger based on context
    
    # This would use LLM/agentic intelligence to:
    # 1. Understand commit intent
    # 2. Identify trigger type
    # 3. Validate against registry
    # 4. Provide explanation
    
    # Placeholder for agentic implementation
    pass
```

---

## Integration Points

### Release Workflow Integration

The trigger detection system integrates with RW at the following points:

1. **Step 0 (Pre-Step 1):** Trigger Detection
   - Before Step 1 (Branch Safety Check), detect triggers
   - If triggers detected, plan sub-workflow execution
   - Continue with normal RW flow

2. **Sub-Workflow Execution:**
   - Execute sub-workflows based on detected triggers
   - Process deliverables from sub-workflows
   - Integrate deliverables into RW

3. **Deliverable Processing:**
   - Process deliverables (e.g., Kanban tasks) from sub-workflows
   - Update versioning, changelog, Kanban board
   - Continue with normal RW steps

---

## Error Handling

1. **No Triggers Detected:**
   - Continue with normal RW flow
   - No sub-workflows executed

2. **Ambiguous Triggers:**
   - Use agentic analysis to disambiguate
   - Provide explanation for decision
   - Log decision for review

3. **Invalid Triggers:**
   - Validate trigger against registry
   - Reject invalid triggers
   - Log rejection reason

---

## Testing Strategy

1. **Unit Tests:**
   - Test pattern matching for each trigger type
   - Test file pattern matching
   - Test priority and confidence sorting

2. **Integration Tests:**
   - Test trigger detection in RW context
   - Test sub-workflow execution
   - Test deliverable processing

3. **End-to-End Tests:**
   - Test complete FR/BR/UXR commit → trigger → task creation flow
   - Test multiple triggers in single commit
   - Test agentic fallback scenarios

---

## Future Enhancements

1. **Custom Trigger Registration:**
   - Allow projects to register custom triggers
   - Support trigger configuration files

2. **Trigger History:**
   - Track trigger detection history
   - Learn from past triggers

3. **Trigger Validation:**
   - Validate triggers before execution
   - Prevent invalid trigger execution

---

## References

- FR-013: Trigger-Aware Release Workflow
- FR-014: New RW Trigger for FR/BR/UXR Commits
- Epic 2 Story 7: Trigger-Aware Release Workflow
- Design Discussion: Hybrid approach (pattern registry + agentic fallback)

