# Release Configuration Examples

**Purpose:** Sample rw-config.yaml files for different release scenarios  
**Version:** 1.0.0  
**Last Updated:** 2026-03-10  

---

## 🚨 Critical Policy Reminder
**NEVER use manual git commit/push commands!** Always use Release Workflow (RW) automation.

---

## Registry Mode Configuration

### Basic Registry Mode Setup
```yaml
# rw-config.yaml - Registry Mode
version_file: src/fynd_deals/version.py
main_changelog: CHANGELOG.md
changelog_dir: docs/changelog-and-release-notes/changelog-archive
scripts_path: packages/frameworks/workflow mgt/scripts
readme_file: README.md
semver_mapping_strategy: registry
use_kanban: true
kanban_root: docs/project-management/kanban
epic_doc_pattern: "epics/Epic-{epic}/Epic-{epic}.md"
story_doc_pattern: "epics/Epic-{epic}/Story-{story}-*.md"
```

### Registry Mode with Custom Paths
```yaml
# rw-config.yaml - Registry Mode (Custom Paths)
version_file: src/myproject/version.py
main_changelog: CHANGELOG.md
changelog_dir: docs/changelog-archive
scripts_path: scripts/validation
readme_file: README.md
semver_mapping_strategy: registry
use_kanban: true
kanban_root: docs/kanban
epic_doc_pattern: "epics/Epic-{epic}/Epic-{epic}.md"
story_doc_pattern: "epics/Epic-{epic}/Story-{story}-*.md"
```

### Registry Mode without Kanban
```yaml
# rw-config.yaml - Registry Mode (No Kanban)
version_file: src/fynd_deals/version.py
main_changelog: CHANGELOG.md
changelog_dir: docs/changelog-and-release-notes/changelog-archive
scripts_path: packages/frameworks/workflow mgt/scripts
readme_file: README.md
semver_mapping_strategy: registry
use_kanban: false
```

---

## Task-Touch Mode Configuration

### Basic Task-Touch Mode Setup
```yaml
# rw-config.yaml - Task-Touch Mode
version_file: src/fynd_deals/version.py
main_changelog: CHANGELOG.md
changelog_dir: docs/changelog-and-release-notes/changelog-archive
scripts_path: packages/frameworks/workflow mgt/scripts
readme_file: README.md
semver_mapping_strategy: task_touch
use_kanban: true
kanban_root: docs/project-management/kanban
epic_doc_pattern: "epics/Epic-{epic}/Epic-{epic}.md"
story_doc_pattern: "epics/Epic-{epic}/Story-{story}-*.md"
```

### Task-Touch Mode with Internal Tags
```yaml
# rw-config.yaml - Task-Touch Mode (with Internal Tags)
version_file: src/fynd_deals/version.py
main_changelog: CHANGELOG.md
changelog_dir: docs/changelog-and-release-notes/changelog-archive
scripts_path: packages/frameworks/workflow mgt/scripts
readme_file: README.md
semver_mapping_strategy: task_touch
use_kanban: true
kanban_root: docs/project-management/kanban
epic_doc_pattern: "epics/Epic-{epic}/Epic-{epic}.md"
story_doc_pattern: "epics/Epic-{epic}/Story-{story}-*.md"

# Additional settings for task-touch mode
create_internal_tag: true  # Also create internal version tag for traceability
```

### Task-Touch Mode with Custom Paths
```yaml
# rw-config.yaml - Task-Touch Mode (Custom Paths)
version_file: src/myproject/version.py
main_changelog: CHANGELOG.md
changelog_dir: docs/changelog-archive
scripts_path: scripts/validation
readme_file: README.md
semver_mapping_strategy: task_touch
use_kanban: true
kanban_root: docs/kanban
epic_doc_pattern: "epics/Epic-{epic}/Epic-{epic}.md"
story_doc_pattern: "epics/Epic-{epic}/Story-{story}-*.md"
```

---

## Advanced Configuration Examples

### Development Environment Configuration
```yaml
# rw-config.yaml - Development Environment
version_file: src/fynd_deals/version.py
main_changelog: CHANGELOG.md
changelog_dir: docs/changelog-and-release-notes/changelog-archive
scripts_path: packages/frameworks/workflow mgt/scripts
readme_file: README.md
semver_mapping_strategy: registry  # Use registry for development
use_kanban: true
kanban_root: docs/project-management/kanban
epic_doc_pattern: "epics/Epic-{epic}/Epic-{epic}.md"
story_doc_pattern: "epics/Epic-{epic}/Story-{story}-*.md"

# Development-specific settings
debug_mode: true
skip_github_release: true  # Skip GitHub release in development
```

### Production Environment Configuration
```yaml
# rw-config.yaml - Production Environment
version_file: src/fynd_deals/version.py
main_changelog: CHANGELOG.md
changelog_dir: docs/changelog-and-release-notes/changelog-archive
scripts_path: packages/frameworks/workflow mgt/scripts
readme_file: README.md
semver_mapping_strategy: task_touch  # Use task-touch for production
use_kanban: true
kanban_root: docs/project-management/kanban
epic_doc_pattern: "epics/Epic-{epic}/Epic-{epic}.md"
story_doc_pattern: "epics/Epic-{epic}/Story-{story}-*.md"

# Production-specific settings
create_internal_tag: true  # Maintain traceability
require_github_release: true  # Require GitHub release
skip_validation: false  # Run all validations in production
```

### Minimal Configuration
```yaml
# rw-config.yaml - Minimal Setup
version_file: src/fynd_deals/version.py
main_changelog: CHANGELOG.md
changelog_dir: docs/changelog-and-release-notes/changelog-archive
scripts_path: packages/frameworks/workflow mgt/scripts
readme_file: README.md
semver_mapping_strategy: registry
```

---

## Configuration Field Reference

### Required Fields

| Field | Description | Example |
|-------|-------------|---------|
| `version_file` | Path to version file | `src/fynd_deals/version.py` |
| `main_changelog` | Path to main changelog | `CHANGELOG.md` |
| `changelog_dir` | Directory for changelog archives | `docs/changelog-and-release-notes/changelog-archive` |
| `scripts_path` | Path to validation scripts | `packages/frameworks/workflow mgt/scripts` |
| `readme_file` | Path to README file | `README.md` |
| `semver_mapping_strategy` | SemVer mapping strategy | `registry` or `task_touch` |

### Optional Fields

| Field | Description | Default | Example |
|-------|-------------|---------|---------|
| `use_kanban` | Enable Kanban integration | `false` | `true` |
| `kanban_root` | Root directory for Kanban docs | `docs/project-management/kanban` | `docs/kanban` |
| `epic_doc_pattern` | Pattern for Epic documents | `epics/Epic-\{epic\}/Epic-\{epic\}.md` | `epics/Epic-\{epic\}.md` |
| `story_doc_pattern` | Pattern for Story documents | `epics/Epic-\{epic\}/Story-\{story\}-*.md` | `stories/Story-\{story\}.md` |
| `create_internal_tag` | Create internal tags in task-touch mode | `false` | `true` |
| `debug_mode` | Enable debug output | `false` | `true` |
| `skip_github_release` | Skip GitHub release creation | `false` | `true` |
| `require_github_release` | Require successful GitHub release | `false` | `true` |
| `skip_validation` | Skip validation steps | `false` | `true` |

---

## Configuration Validation

### Basic Validation Script
```bash
#!/bin/bash
# validate-config.sh - Basic configuration validation

CONFIG_FILE="rw-config.yaml"

echo "🔍 Validating $CONFIG_FILE..."

# Check if file exists
if [ ! -f "$CONFIG_FILE" ]; then
    echo "❌ Configuration file not found: $CONFIG_FILE"
    exit 1
fi

# Check YAML syntax
if ! python3 -c "import yaml; yaml.safe_load(open('$CONFIG_FILE'))" 2>/dev/null; then
    echo "❌ Invalid YAML syntax in $CONFIG_FILE"
    exit 1
fi

# Check required fields
REQUIRED_FIELDS=("version_file" "main_changelog" "changelog_dir" "scripts_path" "readme_file" "semver_mapping_strategy")

for field in "${REQUIRED_FIELDS[@]}"; do
    if ! grep -q "^$field:" "$CONFIG_FILE"; then
        echo "❌ Missing required field: $field"
        exit 1
    fi
done

# Check SemVer strategy
STRATEGY=$(grep "semver_mapping_strategy:" "$CONFIG_FILE" | cut -d: -f2 | tr -d ' ')
if [ "$STRATEGY" != "registry" ] && [ "$STRATEGY" != "task_touch" ]; then
    echo "❌ Invalid semver_mapping_strategy: $STRATEGY (must be 'registry' or 'task_touch')"
    exit 1
fi

echo "✅ Configuration validation passed"
echo "📋 Strategy: $STRATEGY"
echo "📁 Version file: $(grep version_file: "$CONFIG_FILE" | cut -d: -f2 | tr -d ' ')"
```

### Advanced Validation Script
```python
#!/usr/bin/env python3
# validate-config-advanced.py - Advanced configuration validation

import yaml
import os
from pathlib import Path

def validate_config(config_path="rw-config.yaml"):
    """Validate rw-config.yaml with advanced checks"""
    
    print(f"🔍 Advanced validation of {config_path}...")
    
    # Load configuration
    try:
        with open(config_path, 'r') as f:
            config = yaml.safe_load(f)
    except FileNotFoundError:
        print(f"❌ Configuration file not found: {config_path}")
        return False
    except yaml.YAMLError as e:
        print(f"❌ YAML syntax error: {e}")
        return False
    
    # Validate required fields
    required_fields = [
        'version_file', 'main_changelog', 'changelog_dir', 
        'scripts_path', 'readme_file', 'semver_mapping_strategy'
    ]
    
    for field in required_fields:
        if field not in config:
            print(f"❌ Missing required field: {field}")
            return False
    
    # Validate SemVer strategy
    strategy = config['semver_mapping_strategy']
    if strategy not in ['registry', 'task_touch']:
        print(f"❌ Invalid semver_mapping_strategy: {strategy}")
        return False
    
    # Validate file paths
    paths_to_check = [
        config['version_file'],
        config['main_changelog'],
        config['readme_file']
    ]
    
    for path in paths_to_check:
        if not Path(path).exists():
            print(f"⚠️  Warning: File does not exist: {path}")
    
    # Validate directory paths
    dirs_to_check = [
        config['changelog_dir'],
        config['scripts_path']
    ]
    
    for path in dirs_to_check:
        if not Path(path).exists():
            print(f"⚠️  Warning: Directory does not exist: {path}")
    
    # Validate Kanban configuration if enabled
    if config.get('use_kanban', False):
        kanban_root = config.get('kanban_root')
        if kanban_root and not Path(kanban_root).exists():
            print(f"⚠️  Warning: Kanban root directory does not exist: {kanban_root}")
    
    # Print configuration summary
    print(f"✅ Configuration validation passed")
    print(f"📋 Strategy: {strategy}")
    print(f"📁 Version file: {config['version_file']}")
    print(f"📝 Main changelog: {config['main_changelog']}")
    print(f"📂 Changelog dir: {config['changelog_dir']}")
    print(f"🔧 Scripts path: {config['scripts_path']}")
    print(f"📖 README: {config['readme_file']}")
    print(f"🎯 Kanban enabled: {config.get('use_kanban', False)}")
    
    return True

if __name__ == "__main__":
    validate_config()
```

---

## Configuration Migration

### Switch from Registry to Task-Touch
```bash
#!/bin/bash
# migrate-to-task-touch.sh - Migrate configuration to task-touch mode

CONFIG_FILE="rw-config.yaml"

echo "🔄 Migrating to task-touch mode..."

# Backup current configuration
cp "$CONFIG_FILE" "$CONFIG_FILE.backup.$(date +%Y%m%d-%H%M%S)"

# Update SemVer strategy
sed -i.bak 's/semver_mapping_strategy: registry/semver_mapping_strategy: task_touch/' "$CONFIG_FILE"

# Add task-touch specific settings if not present
if ! grep -q "create_internal_tag:" "$CONFIG_FILE"; then
    echo "create_internal_tag: true  # Also create internal version tag for traceability" >> "$CONFIG_FILE"
fi

echo "✅ Migration complete"
echo "📋 Configuration updated to task-touch mode"
echo "💾 Backup saved: $CONFIG_FILE.backup.$(date +%Y%m%d-%H%M%S)"
```

### Switch from Task-Touch to Registry
```bash
#!/bin/bash
# migrate-to-registry.sh - Migrate configuration to registry mode

CONFIG_FILE="rw-config.yaml"

echo "🔄 Migrating to registry mode..."

# Backup current configuration
cp "$CONFIG_FILE" "$CONFIG_FILE.backup.$(date +%Y%m%d-%H%M%S)"

# Update SemVer strategy
sed -i.bak 's/semver_mapping_strategy: task_touch/semver_mapping_strategy: registry/' "$CONFIG_FILE"

# Remove task-touch specific settings
sed -i.bak '/create_internal_tag:/d' "$CONFIG_FILE"

echo "✅ Migration complete"
echo "📋 Configuration updated to registry mode"
echo "💾 Backup saved: $CONFIG_FILE.backup.$(date +%Y%m%d-%H%M%S)"
```

---

## Testing Configuration

### Test Registry Mode
```bash
#!/bin/bash
# test-registry-mode.sh - Test registry mode configuration

echo "🧪 Testing registry mode configuration..."

# Set up test configuration
cat > test-rw-config.yaml << EOF
version_file: src/fynd_deals/version.py
main_changelog: CHANGELOG.md
changelog_dir: docs/changelog-and-release-notes/changelog-archive
scripts_path: packages/frameworks/workflow mgt/scripts
readme_file: README.md
semver_mapping_strategy: registry
EOF

# Test SemVer conversion
python3 -c "
import sys
sys.path.insert(0, 'packages/frameworks/workflow mgt/scripts/version')
from semver_converter import convert_version_string
result = convert_version_string('0.5.1.48+1', 'registry')
print(f'Registry mode conversion: 0.5.1.48+1 → {result}')
"

# Clean up
rm test-rw-config.yaml

echo "✅ Registry mode test complete"
```

### Test Task-Touch Mode
```bash
#!/bin/bash
# test-task-touch-mode.sh - Test task-touch mode configuration

echo "🧪 Testing task-touch mode configuration..."

# Set up test configuration
cat > test-rw-config.yaml << EOF
version_file: src/fynd_deals/version.py
main_changelog: CHANGELOG.md
changelog_dir: docs/changelog-and-release-notes/changelog-archive
scripts_path: packages/frameworks/workflow mgt/scripts
readme_file: README.md
semver_mapping_strategy: task_touch
EOF

# Test SemVer conversion
python3 -c "
import sys
sys.path.insert(0, 'packages/frameworks/workflow mgt/scripts/version')
from semver_converter import convert_version_string
result = convert_version_string('0.5.1.48+1', 'task_touch')
print(f'Task-touch mode conversion: 0.5.1.48+1 → {result}')
"

# Clean up
rm test-rw-config.yaml

echo "✅ Task-touch mode test complete"
```

---

## Troubleshooting Configuration Issues

### Common Issues and Solutions

#### Issue: Missing Configuration File
```bash
# Solution: Create default configuration
cat > rw-config.yaml << EOF
version_file: src/fynd_deals/version.py
main_changelog: CHANGELOG.md
changelog_dir: docs/changelog-and-release-notes/changelog-archive
scripts_path: packages/frameworks/workflow mgt/scripts
readme_file: README.md
semver_mapping_strategy: registry
EOF
```

#### Issue: Invalid YAML Syntax
```bash
# Solution: Validate and fix YAML
python3 -c "
import yaml
try:
    with open('rw-config.yaml', 'r') as f:
        yaml.safe_load(f)
    print('✅ YAML syntax is valid')
except yaml.YAMLError as e:
    print(f'❌ YAML syntax error: {e}')
    print('💡 Check for indentation, colons, and quotes')
"
```

#### Issue: Invalid SemVer Strategy
```bash
# Solution: Check and fix strategy
STRATEGY=$(grep "semver_mapping_strategy:" rw-config.yaml | cut -d: -f2 | tr -d ' ')
echo "Current strategy: $STRATEGY"

if [ "$STRATEGY" != "registry" ] && [ "$STRATEGY" != "task_touch" ]; then
    echo "❌ Invalid strategy. Fixing to registry..."
    sed -i.bak "s/semver_mapping_strategy: .*/semver_mapping_strategy: registry/" rw-config.yaml
fi
```

---

**Remember:** Always test configuration changes in a development environment before applying to production!
