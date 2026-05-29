---
lifecycle: evergreen
ttl_days: null
created_at: 2025-12-12T00:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Policy Salience Agent Parser Guide

**Version:** 1.0.0  
**Last Updated:** 2025-12-12  
**Status:** Active  
**Epic:** Epic 5 - Documentation Management and Maintenance  
**Story:** Story 6 - Policy Documentation Structure

---

## Overview

This guide explains how AI agents should parse and use Policy Salience sections from policy documents. It provides parsing patterns, usage examples, and best practices for agent implementation.

---

## Parsing Policy Salience

### Step 1: Extract Front-Matter

Parse YAML front-matter from policy document:

```python
import yaml
import re

def extract_front_matter(file_path):
    """Extract YAML front-matter from markdown file."""
    with open(file_path, 'r') as f:
        content = f.read()
    
    # Match YAML front-matter (between --- markers)
    match = re.match(r'^---\n(.*?)\n---\n', content, re.DOTALL)
    if not match:
        return None
    
    front_matter = match.group(1)
    return yaml.safe_load(front_matter)
```

### Step 2: Extract Policy Salience

Extract `policy_salience` section:

```python
def extract_policy_salience(file_path):
    """Extract policy_salience section from policy document."""
    front_matter = extract_front_matter(file_path)
    if not front_matter:
        return None
    
    return front_matter.get('policy_salience')
```

### Step 3: Validate Schema

Validate that salience section follows schema:

```python
def validate_policy_salience(salience):
    """Validate policy salience against schema."""
    required_fields = ['policy_id', 'type', 'domain', 'audience', 'applies_to', 'key_rules']
    
    for field in required_fields:
        if field not in salience:
            return False, f"Missing required field: {field}"
    
    # Validate domain.primary exists
    if 'primary' not in salience.get('domain', {}):
        return False, "Missing domain.primary"
    
    # Validate at least one key rule
    if not salience.get('key_rules'):
        return False, "Must have at least one key rule"
    
    return True, "Valid"
```

---

## Usage Patterns

### Pattern 1: Quick Policy Lookup

**Use Case:** Agent needs to quickly understand what a policy governs.

```python
def get_policy_scope(salience):
    """Get what the policy applies to."""
    return {
        'documents': salience.get('applies_to', {}).get('documents', []),
        'activities': salience.get('applies_to', {}).get('activities', []),
        'components': salience.get('applies_to', {}).get('components', [])
    }

def is_policy_relevant(salience, context):
    """Check if policy is relevant to current context."""
    scope = get_policy_scope(salience)
    
    # Check if context matches documents, activities, or components
    if context.get('document'):
        for pattern in scope['documents']:
            if matches_pattern(context['document'], pattern):
                return True
    
    if context.get('activity') in scope['activities']:
        return True
    
    if context.get('component') in scope['components']:
        return True
    
    return False
```

### Pattern 2: Rule Validation

**Use Case:** Agent needs to validate actions against policy rules.

```python
def validate_against_rules(salience, action, context):
    """Validate action against policy key rules."""
    violations = []
    
    for rule in salience.get('key_rules', []):
        # Check if rule applies to this context
        if rule_applies(rule, context):
            # Validate action against rule
            if violates_rule(rule, action):
                violations.append({
                    'rule_id': rule['id'],
                    'rule_summary': rule['summary'],
                    'must_level': rule['must_level'],
                    'validation_hints': rule.get('validation_hints', [])
                })
    
    return violations

def rule_applies(rule, context):
    """Check if rule applies to current context."""
    when_applies = rule.get('when_applies', [])
    if not when_applies:
        return True  # Rule always applies
    
    # Check if any trigger matches context
    for trigger in when_applies:
        if trigger in context.get('triggers', []):
            return True
    
    return False
```

### Pattern 3: Decision Making

**Use Case:** Agent needs to make policy-driven decisions.

```python
def get_decision_criteria(salience):
    """Get decision criteria for policy-driven choices."""
    return salience.get('decision_criteria', [])

def evaluate_decision(salience, question, answer):
    """Get action based on decision criteria."""
    criteria = get_decision_criteria(salience)
    
    for criterion in criteria:
        if criterion['question'] == question:
            if answer:
                return criterion['yes_action']
            else:
                return criterion.get('no_action', 'No action required')
    
    return None
```

### Pattern 4: Integration Points

**Use Case:** Agent needs to understand how policy integrates with workflows.

```python
def get_integration_points(salience, component=None):
    """Get integration points for policy."""
    points = salience.get('integration_points', [])
    
    if component:
        return [p for p in points if p['component'] == component]
    
    return points

def get_workflow_behavior(salience, workflow, step=None):
    """Get expected behavior for workflow integration."""
    points = get_integration_points(salience, component=workflow)
    
    if step:
        points = [p for p in points if p.get('step') == step]
    
    return [p['behavior'] for p in points]
```

---

## Example: Complete Parser

```python
import yaml
import re
from pathlib import Path
from typing import Dict, List, Optional

class PolicySalienceParser:
    """Parser for Policy Salience sections."""
    
    def __init__(self, policy_file: Path):
        self.policy_file = policy_file
        self.salience = self._load_salience()
    
    def _load_salience(self) -> Optional[Dict]:
        """Load policy salience from file."""
        try:
            content = self.policy_file.read_text()
            match = re.match(r'^---\n(.*?)\n---\n', content, re.DOTALL)
            if not match:
                return None
            
            front_matter = yaml.safe_load(match.group(1))
            return front_matter.get('policy_salience')
        except Exception as e:
            print(f"Error loading salience: {e}")
            return None
    
    def get_policy_id(self) -> Optional[str]:
        """Get policy ID."""
        return self.salience.get('policy_id') if self.salience else None
    
    def get_key_rules(self) -> List[Dict]:
        """Get key rules."""
        return self.salience.get('key_rules', []) if self.salience else []
    
    def get_scope(self) -> Dict:
        """Get policy scope."""
        if not self.salience:
            return {}
        
        applies_to = self.salience.get('applies_to', {})
        return {
            'documents': applies_to.get('documents', []),
            'activities': applies_to.get('activities', []),
            'components': applies_to.get('components', [])
        }
    
    def is_relevant(self, context: Dict) -> bool:
        """Check if policy is relevant to context."""
        scope = self.get_scope()
        
        # Check document patterns
        if context.get('document'):
            doc_path = context['document']
            for pattern in scope['documents']:
                if self._matches_pattern(doc_path, pattern):
                    return True
        
        # Check activities
        if context.get('activity') in scope['activities']:
            return True
        
        # Check components
        if context.get('component') in scope['components']:
            return True
        
        return False
    
    def validate_action(self, action: Dict, context: Dict) -> List[Dict]:
        """Validate action against policy rules."""
        violations = []
        
        for rule in self.get_key_rules():
            if self._rule_applies(rule, context):
                if self._violates_rule(rule, action):
                    violations.append({
                        'rule_id': rule['id'],
                        'summary': rule['summary'],
                        'must_level': rule['must_level'],
                        'hints': rule.get('validation_hints', [])
                    })
        
        return violations
    
    def _rule_applies(self, rule: Dict, context: Dict) -> bool:
        """Check if rule applies to context."""
        when_applies = rule.get('when_applies', [])
        if not when_applies:
            return True
        
        triggers = context.get('triggers', [])
        return any(trigger in triggers for trigger in when_applies)
    
    def _violates_rule(self, rule: Dict, action: Dict) -> bool:
        """Check if action violates rule."""
        # Implementation depends on rule type and action
        # This is a placeholder - actual implementation would be rule-specific
        return False
    
    def _matches_pattern(self, path: str, pattern: str) -> bool:
        """Check if path matches glob pattern."""
        # Simple implementation - use fnmatch or pathlib for full glob support
        import fnmatch
        return fnmatch.fnmatch(path, pattern)

# Usage example
if __name__ == '__main__':
    policy_file = Path('docs/architecture/standards-and-adrs/documentation-maintenance-policy.md')
    parser = PolicySalienceParser(policy_file)
    
    # Get policy info
    print(f"Policy ID: {parser.get_policy_id()}")
    print(f"Key Rules: {len(parser.get_key_rules())}")
    
    # Check relevance
    context = {
        'document': 'docs/project-management/kanban/epics/Epic-5/Story-006.md',
        'activity': 'story-completion'
    }
    print(f"Relevant: {parser.is_relevant(context)}")
    
    # Validate action
    action = {'type': 'update-docs', 'document': 'docs/some-doc.md'}
    violations = parser.validate_action(action, context)
    print(f"Violations: {len(violations)}")
```

---

## Best Practices for Agents

### 1. Cache Policy Salience

**Why:** Policy documents don't change frequently, so cache parsed salience.

```python
# Cache parsed salience by policy_id
policy_cache = {}

def get_policy_salience(policy_id: str) -> Dict:
    if policy_id not in policy_cache:
        # Load and parse policy
        policy_cache[policy_id] = parse_policy(policy_id)
    return policy_cache[policy_id]
```

### 2. Validate Before Using

**Why:** Ensure salience follows schema before relying on it.

```python
def safe_get_salience(policy_file: Path) -> Optional[Dict]:
    salience = extract_policy_salience(policy_file)
    if not salience:
        return None
    
    is_valid, error = validate_policy_salience(salience)
    if not is_valid:
        print(f"Warning: Invalid salience in {policy_file}: {error}")
        return None
    
    return salience
```

### 3. Use Validation Hints

**Why:** Hints provide actionable checks agents can perform.

```python
def perform_validation_checks(rule: Dict, context: Dict):
    """Perform validation checks from rule hints."""
    hints = rule.get('validation_hints', [])
    results = []
    
    for hint in hints:
        # Parse hint and perform check
        result = execute_check(hint, context)
        results.append({
            'hint': hint,
            'result': result,
            'passed': result['status'] == 'pass'
        })
    
    return results
```

### 4. Check Integration Points

**Why:** Understand how policy integrates with workflows before enforcing.

```python
def check_integration(policy_salience: Dict, workflow: str, step: str) -> List[str]:
    """Get expected behaviors for workflow integration."""
    points = policy_salience.get('integration_points', [])
    behaviors = []
    
    for point in points:
        if point['component'] == workflow:
            if not step or point.get('step') == step:
                behaviors.append(point['behavior'])
    
    return behaviors
```

---

## Error Handling

### Missing Salience Section

**When:** Policy document doesn't have salience section.

**Action:** Fall back to reading full policy document or skip policy.

### Invalid Schema

**When:** Salience section doesn't follow schema.

**Action:** Log warning, skip salience, fall back to full document.

### Missing Required Fields

**When:** Required fields are missing from salience.

**Action:** Log error, use available fields, mark as incomplete.

---

## References

- **Schema Specification:** `docs/architecture/standards-and-adrs/policy-salience-schema.md`
- **Template:** `packages/frameworks/doc-lifecycle/templates/POLICY_SALIENCE_TEMPLATE.md`
- **Author Guide:** `packages/frameworks/doc-lifecycle/docs/policy-salience-guide.md`
- **FR-022:** Policy Documents Machine-Readable Salience Section

---

## Support

For questions or issues:
- **Epic:** Epic 5 - Documentation Management and Maintenance
- **Story:** Story 6 - Policy Documentation Structure
- **Task:** E5:S06:T01 - Implement Policy Documents Machine-Readable Salience Section
