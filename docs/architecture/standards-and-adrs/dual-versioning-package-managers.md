---
lifecycle: evergreen
ttl_days: null
created_at: 2025-12-07T16:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Dual-Versioning: RC.EPIC.STORY.TASK+BUILD + Package Manager SemVer

**Status:** Active  
**Version:** 1.0.0  
**Last Updated:** 2025-12-07  
**Epic:** Epic 3 - Numbering & Versioning Framework  
**Story:** Story 2 - Versioning Cookbook and Examples  
**Related:** Implementation Guide, Package Manager Integration

**Based on Framework:** This document is a dev-kit specialisation providing guidance on dual-versioning patterns. For the canonical versioning schema and SemVer mapping modes, see:
- `packages/frameworks/numbering & versioning/versioning-policy.md` (primary SoT)
- `packages/frameworks/numbering & versioning/versioning-strategy.md` (comprehensive strategy)

---

## Executive Summary

Projects using the `RC.EPIC.STORY.TASK+BUILD` versioning schema may also need to maintain **Semantic Versioning (SemVer)** for package managers (npm, pub.dev, PyPI, etc.) that require `MAJOR.MINOR.PATCH` format. This document provides guidance on managing both versioning schemes simultaneously.

**Key Points:**
- **Internal Development:** Use `RC.EPIC.STORY.TASK+BUILD` for forensic traceability
- **Package Managers:** Use `MAJOR.MINOR.PATCH` for compatibility
- **Synchronization:** Maintain both versions and keep them aligned
- **Mapping Strategy:** Define clear rules for converting between schemas

---

## Problem Statement

### The Challenge

Many package managers and registries require **Semantic Versioning (SemVer)** format:
- **npm** (`package.json`): `"version": "1.2.3"`
- **pub.dev** (`pubspec.yaml`): `version: 1.2.3`
- **PyPI** (`setup.py`/`pyproject.toml`): `version = "1.2.3"`
- **Maven** (`pom.xml`): `<version>1.2.3</version>`

However, projects using ai-dev-kit versioning framework use `RC.EPIC.STORY.TASK+BUILD` schema for internal development, which is **incompatible** with SemVer requirements.

### Example Scenario

**Project:** `been-there` (Flutter/Dart project)

**Internal Version File:**
```python
# lib/version.dart or version.py
VERSION_RC = 0
VERSION_EPIC = 1
VERSION_STORY = 1
VERSION_TASK = 1
VERSION_BUILD = 1
VERSION_STRING = "0.1.1.1+1"  # RC.EPIC.STORY.TASK+BUILD
```

**Package Manager File:**
```yaml
# pubspec.yaml
version: 0.1.0  # MAJOR.MINOR.PATCH (required by pub.dev)
```

**Problem:** These two versions must be kept in sync, but they use different schemas.

---

## Solution: Dual-Versioning Strategy

### Core Principle

**Maintain two version representations:**
1. **Internal Version:** `RC.EPIC.STORY.TASK+BUILD` (source of truth for development)
2. **Package Manager Version:** `MAJOR.MINOR.PATCH` (derived from internal version)

**Synchronization:** Package manager version is **derived from** internal version using a mapping strategy.

---

## Choosing a SemVer Mapping Mode

The core framework defines two **conceptual mapping modes** from internal version to SemVer:

- **Mode A – Registry-based epic/story mapping (default for dev-kit/frameworks):**
  - `MAJOR = RC`
  - `MINOR` / `PATCH` assigned via a registry that remaps epics and stories into a monotonic SemVer space.
  - Best for long-lived frameworks and products with many parallel epics/stories.
  - **1:1 intent:** The mapping is designed to be one-to-one: one internal version yields exactly one SemVer, and a given SemVer (from this project’s registry) should identify a unique internal coordinate (RC, EPIC, STORY, BUILD; TASK is not encoded). Git tags must align so that the SemVer tag and the internal tag for a release point to the same commit.

- **Mode B – Simple global PATCH counter (recommended for small/simple projects):**
  - `MAJOR = RC`, `MINOR = EPIC`, `PATCH` = **global build counter** (monotonic per RC).
  - Very simple mental model: “higher PATCH = strictly newer”, independent of epic/story.
  - Epic/story identity is recovered via the internal version and/or optional metadata (`+rc.<RC>.e<EPIC>.s<STORY>.t<TASK>.b<BUILD>`).

**Guidance:**

- If you are building a **framework or complex product** and care about distinguishing epics/stories at the SemVer level, use **Mode A** (registry-based).
- If you are building a **small app or library** and mainly care about a simple, monotonic release line, consider **Mode B** (global PATCH) for your project copy of the framework.

The concrete mapping formulas below can be seen as **implementations** that sit under one of these conceptual modes.

---

## Mapping Strategies

### Strategy 1: Direct Mapping (Recommended for New Projects)

**Mapping Rules:**
- `MAJOR` = `RC` (Release Candidate)
- `MINOR` = `EPIC`
- `PATCH` = `STORY * 100 + TASK` (allows up to 99 tasks per story)

**Example:**
```
Internal: 0.1.1.1+1
SemVer:   0.1.101  (0 = RC, 1 = Epic, 101 = Story 1 * 100 + Task 1)

Internal: 0.1.1.2+1
SemVer:   0.1.102  (0 = RC, 1 = Epic, 102 = Story 1 * 100 + Task 2)

Internal: 0.1.2.1+1
SemVer:   0.1.201  (0 = RC, 1 = Epic, 201 = Story 2 * 100 + Task 1)
```

**Pros:**
- ✅ Simple and deterministic
- ✅ Preserves Epic/Story/Task information in SemVer
- ✅ Easy to implement

**Cons:**
- ❌ PATCH numbers can get large (e.g., Story 5, Task 50 = 550)
- ❌ Doesn't preserve BUILD number

**Use When:**
- New projects starting fresh
- Want simple, deterministic mapping
- Don't need BUILD number in SemVer

---

### Strategy 2: Compact Mapping (Recommended for Established Projects)

**Mapping Rules:**
- `MAJOR` = `RC`
- `MINOR` = `EPIC * 10 + STORY` (allows up to 9 stories per epic)
- `PATCH` = `TASK * 10 + BUILD` (allows up to 9 builds per task, or use BUILD % 10)

**Example:**
```
Internal: 0.1.1.1+1
SemVer:   0.11.11  (0 = RC, 11 = Epic 1 * 10 + Story 1, 11 = Task 1 * 10 + Build 1)

Internal: 0.1.1.1+2
SemVer:   0.11.12  (0 = RC, 11 = Epic 1 * 10 + Story 1, 12 = Task 1 * 10 + Build 2)

Internal: 0.1.2.1+1
SemVer:   0.12.11  (0 = RC, 12 = Epic 1 * 10 + Story 2, 11 = Task 1 * 10 + Build 1)
```

**Pros:**
- ✅ More compact PATCH numbers
- ✅ Preserves BUILD number (if using BUILD % 10)
- ✅ Still deterministic

**Cons:**
- ❌ Limited to 9 stories per epic (or need different formula)
- ❌ Limited to 9 builds per task (if using BUILD directly)
- ❌ More complex mapping logic

**Use When:**
- Established projects with many epics/stories
- Want to preserve BUILD number
- Need more compact version numbers

---

### Strategy 3: Independent SemVer (For Public Releases)

**Mapping Rules:**
- `MAJOR` = Increment for breaking changes
- `MINOR` = Increment for new features
- `PATCH` = Increment for bug fixes
- **Independent** of `RC.EPIC.STORY.TASK+BUILD` schema

**Synchronization:**
- Internal version tracks development work
- SemVer tracks public releases
- Map internal versions to SemVer at release time

**Example:**
```
Development:
- Internal: 0.1.1.1+1, 0.1.1.1+2, 0.1.1.2+1, 0.1.1.3+1
- SemVer:   0.1.0 (unchanged during development)

Release:
- Internal: 0.1.1.3+1 (final development version)
- SemVer:   0.1.0 → 0.2.0 (bumped for release, independent of internal version)
```

**Pros:**
- ✅ SemVer follows standard semantic versioning rules
- ✅ Clear meaning for consumers
- ✅ Independent of internal work structure

**Cons:**
- ❌ Requires manual mapping decisions
- ❌ No automatic synchronization
- ❌ Loses traceability to internal work items

**Use When:**
- Publishing to public package registries
- Need standard SemVer for consumers
- Internal versioning is for development only

---

### Strategy 4: BUILD-Preserving Mapping (Recommended)

**Mapping Rules:**
- `MAJOR` = `RC`
- `MINOR` = `EPIC * 100 + STORY` (allows up to 99 stories per epic, unambiguous)
- `PATCH` = `TASK * 100 + BUILD` (allows up to 99 builds per task, preserves BUILD)

**Example:**
```
Internal: 0.1.2.3+4
SemVer:   0.102.304  (0 = RC, 102 = Epic 1 * 100 + Story 2, 304 = Task 3 * 100 + Build 4)

Internal: 0.5.12.25+7
SemVer:   0.512.2507  (0 = RC, 512 = Epic 5 * 100 + Story 12, 2507 = Task 25 * 100 + Build 7)

Internal: 0.12.3.5+7
SemVer:   0.1203.507  (0 = RC, 1203 = Epic 12 * 100 + Story 3, 507 = Task 5 * 100 + Build 7)
```

**Pros:**
- ✅ Preserves BUILD number in SemVer (unique advantage)
- ✅ Unambiguous mapping (mathematical, not string concatenation)
- ✅ Supports large EPIC/STORY/TASK numbers (up to 99 each)
- ✅ Fully reversible (can extract EPIC/STORY/TASK/BUILD from SemVer)
- ✅ Deterministic and easy to implement

**Cons:**
- ❌ MINOR and PATCH numbers can get large (e.g., Epic 12, Story 3 = MINOR 1203)
- ❌ Less human-readable than standard SemVer
- ❌ Large numbers may look unusual to package manager consumers

**Use When:**
- Want to preserve BUILD number in SemVer
- Need unambiguous, reversible mapping
- Don't mind larger version numbers
- Internal traceability is more important than consumer readability

**Implementation Note:**
- Use mathematical formula: `EPIC * 100 + STORY` (not string concatenation)
- String concatenation would create ambiguity (e.g., EPIC=12, STORY=3 vs EPIC=1, STORY=23 both = "123")
- Mathematical formula ensures unique mapping for all EPIC/STORY combinations

---

### Strategy 5: Hybrid Approach (Recommended for Most Projects)

**Mapping Rules:**
- Use **Strategy 1, 2, or 4** for development/pre-release versions
- Use **Strategy 3** for public releases (when `RC >= 1`)

**Example:**
```
Development (RC = 0):
- Internal: 0.1.1.1+1
- SemVer:   0.1.101 (Strategy 1 mapping)
  OR
- SemVer:   0.101.101 (Strategy 4 mapping - preserves BUILD)

Release Candidate (RC = 1):
- Internal: 1.1.1.1+1
- SemVer:   1.0.0 (Standard SemVer, independent mapping)
```

**Pros:**
- ✅ Best of both worlds
- ✅ Automatic sync during development
- ✅ Standard SemVer for releases
- ✅ Preserves traceability during development
- ✅ Can choose BUILD-preserving strategy during development

**Cons:**
- ❌ More complex to implement
- ❌ Requires decision point (when to switch)

**Use When:**
- Most projects (recommended default)
- Want automatic sync during development
- Need standard SemVer for releases

---

## Implementation Patterns

### Pattern 1: Single Source of Truth (Python)

**Internal version is source of truth:**

```python
# lib/version.py (or src/project/version.py)
VERSION_RC = 0
VERSION_EPIC = 1
VERSION_STORY = 1
VERSION_TASK = 1
VERSION_BUILD = 1

# Internal version (source of truth)
VERSION_STRING = f"{VERSION_RC}.{VERSION_EPIC}.{VERSION_STORY}.{VERSION_TASK}+{VERSION_BUILD}"

# Derived SemVer (Strategy 1: Direct Mapping)
def get_semver_strategy1():
    """Convert internal version to SemVer format (Strategy 1)."""
    major = VERSION_RC
    minor = VERSION_EPIC
    patch = (VERSION_STORY * 100) + VERSION_TASK
    return f"{major}.{minor}.{patch}"

# Derived SemVer (Strategy 4: BUILD-Preserving Mapping - User Recommended)
def get_semver_strategy4():
    """Convert internal version to SemVer format (Strategy 4 - preserves BUILD).
    
    MINOR = EPIC * 100 + STORY (mathematical, not string concatenation)
    PATCH = TASK * 100 + BUILD
    """
    major = VERSION_RC
    minor = (VERSION_EPIC * 100) + VERSION_STORY  # Mathematical formula ensures unambiguous mapping
    patch = (VERSION_TASK * 100) + VERSION_BUILD
    return f"{major}.{minor}.{patch}"

# Choose your strategy:
SEMVER_VERSION = get_semver_strategy4()  # Recommended: preserves BUILD number
```

**Usage in package files:**
```python
# setup.py or pyproject.toml
from lib.version import SEMVER_VERSION

setup(
    name="myproject",
    version=SEMVER_VERSION,  # "0.1.101"
    ...
)
```

---

### Pattern 2: Sync Script (Any Language)

**Create a sync script that updates package manager files:**

```python
#!/usr/bin/env python3
"""
Sync version from internal version file to package manager files.

Usage:
    python scripts/sync-version.py
"""

import re
from pathlib import Path

def read_internal_version():
    """Read internal version from version file."""
    version_file = Path("lib/version.py")
    content = version_file.read_text()
    
    # Extract version components
    rc = int(re.search(r'VERSION_RC = (\d+)', content).group(1))
    epic = int(re.search(r'VERSION_EPIC = (\d+)', content).group(1))
    story = int(re.search(r'VERSION_STORY = (\d+)', content).group(1))
    task = int(re.search(r'VERSION_TASK = (\d+)', content).group(1))
    build = int(re.search(r'VERSION_BUILD = (\d+)', content).group(1))
    
    return rc, epic, story, task, build

def convert_to_semver_strategy4(rc, epic, story, task, build):
    """Convert internal version to SemVer (Strategy 4: BUILD-Preserving Mapping).
    
    MINOR = EPIC * 100 + STORY (mathematical, not string concatenation)
    PATCH = TASK * 100 + BUILD
    """
    major = rc
    minor = (epic * 100) + story  # Mathematical formula ensures unambiguous mapping
    patch = (task * 100) + build
    return f"{major}.{minor}.{patch}"

def update_pubspec(semver):
    """Update pubspec.yaml with SemVer."""
    pubspec = Path("pubspec.yaml")
    content = pubspec.read_text()
    
    # Replace version line
    content = re.sub(
        r'^version:\s*[\d.]+',
        f'version: {semver}',
        content,
        flags=re.MULTILINE
    )
    
    pubspec.write_text(content)
    print(f"✅ Updated pubspec.yaml: version: {semver}")

def update_package_json(semver):
    """Update package.json with SemVer."""
    package_json = Path("package.json")
    content = package_json.read_text()
    
    # Replace version in JSON
    content = re.sub(
        r'"version":\s*"[\d.]+"',
        f'"version": "{semver}"',
        content
    )
    
    package_json.write_text(content)
    print(f"✅ Updated package.json: version: {semver}")

def main():
    """Main sync function."""
    rc, epic, story, task, build = read_internal_version()
    semver = convert_to_semver_strategy4(rc, epic, story, task, build)
    
    print(f"Internal version: {rc}.{epic}.{story}.{task}+{build}")
    print(f"SemVer version: {semver}")
    
    # Update package manager files
    if Path("pubspec.yaml").exists():
        update_pubspec(semver)
    if Path("package.json").exists():
        update_package_json(semver)
    
    print("✅ Version sync complete!")

if __name__ == "__main__":
    main()
```

**Integration with Release Workflow:**
```bash
# In Release Workflow (RW) Step 2: After bumping internal version
python scripts/sync-version.py
git add pubspec.yaml package.json
```

---

### Pattern 3: Build-Time Generation (CI/CD)

**Generate SemVer at build time:**

```yaml
# .github/workflows/release.yml
- name: Generate SemVer
  run: |
    python scripts/generate-semver.py > .semver
    echo "SEMVER=$(cat .semver)" >> $GITHUB_ENV

- name: Update pubspec.yaml
  run: |
    sed -i "s/version: .*/version: $SEMVER/" pubspec.yaml

- name: Build and Publish
  run: |
    flutter pub publish
```

---

## Recommended Approach

### For New Projects

**Use Pattern 1 (Single Source of Truth) + Strategy 1 (Direct Mapping):**

1. **Internal version file** is the source of truth
2. **Derive SemVer** programmatically from internal version
3. **Update package manager files** automatically in Release Workflow

**Benefits:**
- Simple and maintainable
- Automatic synchronization
- Single source of truth
- No manual sync required

### For Existing Projects

**Use Pattern 2 (Sync Script) + Strategy 4 (Hybrid):**

1. **Keep internal version** for development
2. **Use sync script** to update package manager files
3. **Switch to independent SemVer** for public releases

**Benefits:**
- Works with existing projects
- Flexible mapping strategy
- Can adapt to project needs

---

## Documentation Requirements

### What Projects Should Document

1. **Mapping Strategy:**
   - Which strategy you're using (1, 2, 3, or 4)
   - How internal version maps to SemVer
   - Examples of mappings

2. **Synchronization Process:**
   - When versions are synced
   - How sync is automated (script, CI/CD, etc.)
   - Manual steps if any

3. **Package Manager Files:**
   - Which files need version updates
   - How versions are updated
   - Validation requirements

4. **Release Process:**
   - How versions are handled at release time
   - When to switch strategies (if using hybrid)
   - Release versioning decisions

---

## Example: Flutter/Dart Project (pubspec.yaml)

### Setup

**1. Internal Version File:**
```dart
// lib/version.dart
class Version {
  static const int rc = 0;
  static const int epic = 1;
  static const int story = 1;
  static const int task = 1;
  static const int build = 1;
  
  // Internal version (source of truth)
  static String get internal => '$rc.$epic.$story.$task+$build';
  
  // SemVer for pubspec.yaml (Strategy 4: BUILD-Preserving Mapping)
  // MINOR = EPIC * 100 + STORY (mathematical, not string concatenation)
  // PATCH = TASK * 100 + BUILD
  static String get semver {
    final minor = (epic * 100) + story;  // Mathematical formula ensures unambiguous mapping
    final patch = (task * 100) + build;
    return '$rc.$minor.$patch';
  }
}
```

**2. Sync Script:**
```dart
// scripts/sync_version.dart
import 'dart:io';
import 'package:yaml/yaml.dart';

void main() {
  // Read internal version
  final versionFile = File('lib/version.dart');
  final content = versionFile.readAsStringSync();
  
  // Extract version components (simplified - use proper parsing)
  final rc = 0; // Extract from content
  final epic = 1; // Extract from content
  final story = 1; // Extract from content
  final task = 1; // Extract from content
  
  // Convert to SemVer (Strategy 1)
  final semver = '$rc.$epic.${(story * 100) + task}';
  
  // Update pubspec.yaml
  final pubspec = File('pubspec.yaml');
  final pubspecContent = pubspec.readAsStringSync();
  final updated = pubspecContent.replaceAll(
    RegExp(r'^version:\s*[\d.]+', multiLine: true),
    'version: $semver',
  );
  pubspec.writeAsStringSync(updated);
  
  print('✅ Updated pubspec.yaml: version: $semver');
}
```

**3. Integration with Release Workflow:**
```bash
# In Release Workflow Step 2: After bumping internal version
dart run scripts/sync_version.dart
git add pubspec.yaml
```

---

## Validation

### Validation Checklist

- [ ] Internal version file exists and is maintained
- [ ] SemVer derivation logic is documented
- [ ] Sync script/process is automated
- [ ] Package manager files are updated automatically
- [ ] Versions are validated before commit
- [ ] Release process handles version sync correctly

### Validation Script

```python
#!/usr/bin/env python3
"""
Validate that internal version and SemVer are in sync.

Usage:
    python scripts/validate-version-sync.py
"""

def validate_version_sync():
    """Validate internal version and SemVer are synchronized."""
    # Read internal version
    internal_version = read_internal_version()
    
    # Calculate expected SemVer
    expected_semver = convert_to_semver(*internal_version)
    
    # Read actual SemVer from package manager files
    actual_semver = read_package_manager_version()
    
    # Validate
    if expected_semver != actual_semver:
        print(f"❌ Version mismatch!")
        print(f"   Expected SemVer: {expected_semver}")
        print(f"   Actual SemVer: {actual_semver}")
        return False
    
    print(f"✅ Versions are in sync: {expected_semver}")
    return True
```

---

## Common Issues and Solutions

### Issue 1: Versions Get Out of Sync

**Problem:** Internal version updated but package manager file not updated.

**Solution:**
- Automate sync in Release Workflow
- Add validation script to pre-commit hooks
- Add CI/CD validation

### Issue 2: Large PATCH Numbers

**Problem:** Using Strategy 1, PATCH numbers get very large (e.g., 550 for Story 5, Task 50).

**Solution:**
- Switch to Strategy 2 (Compact Mapping)
- Or use Strategy 4 (Hybrid) for releases
- Or accept large numbers (they're still valid SemVer)

### Issue 3: Package Manager Validation Fails

**Problem:** Package manager rejects version format.

**Solution:**
- Ensure SemVer follows `MAJOR.MINOR.PATCH` format exactly
- Validate SemVer before updating package manager files
- Check package manager-specific requirements

### Issue 4: BUILD Number Not Preserved

**Problem:** BUILD number is lost in SemVer conversion.

**Solution:**
- Use Strategy 2 (includes BUILD in PATCH)
- Or accept that BUILD is internal-only
- Or use pre-release identifiers: `0.1.101-build.1`

---

## Best Practices

1. **Single Source of Truth:**
   - Internal version file is always the source of truth
   - SemVer is derived, never manually edited

2. **Automate Synchronization:**
   - Use scripts or CI/CD to sync versions
   - Never manually edit package manager versions

3. **Validate Before Commit:**
   - Run validation script in pre-commit hooks
   - Fail fast if versions are out of sync

4. **Document Your Strategy:**
   - Document which mapping strategy you use
   - Document sync process
   - Include examples

5. **Test Your Mapping:**
   - Test with various internal versions
   - Ensure SemVer is always valid
   - Test edge cases (large numbers, etc.)

---

## Integration with Release Workflow

### Release Workflow Integration

**Step 2: Bump Version**
1. Update internal version file (`version.py` or `version.dart`)
2. Run sync script to update package manager files
3. Validate versions are in sync

**Step 8: Commit Changes**
- Include both internal version file and package manager files
- Commit message should reference both versions

**Example Commit:**
```bash
git commit -m "Release v0.1.1.1+1 (SemVer: 0.1.101): Task description"
```

---

## References

- [Semantic Versioning Specification](https://semver.org/)
- [Implementation Guide (source)](https://github.com/earlution/ai-dev-kit/blob/main/packages/frameworks/numbering%20%26%20versioning/IMPLEMENTATION_GUIDE.md)
- [Versioning Policy (source)](https://github.com/earlution/ai-dev-kit/blob/main/packages/frameworks/numbering%20%26%20versioning/versioning-policy.md)
- [Dev Kit Versioning Policy](./dev-kit-versioning-policy.md)

---

## Related Work

- Epic 3: Numbering & Versioning Framework
- Epic 6: Framework Management (package manager support)

---

**Last Updated:** 2025-12-07  
**Status:** Active  
**Next Review:** When package manager integration is implemented (Epic 6)

