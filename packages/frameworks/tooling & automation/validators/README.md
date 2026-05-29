# Validator Framework

**Epic:** 8 - Tooling & Automation  
**Story:** E8:S02 - Additional Validators  
**Task:** E8:S02:T01 - Create validator framework

---

## Overview

The Validator Framework provides a comprehensive foundation for building validators for code, configuration, and documentation. It offers:

- **Base Validator Classes:** Abstract interfaces for all validators
- **Validation Results:** Structured result types with issues, severity levels, and metadata
- **Validator Registry:** Discovery and management of validators
- **Common Utilities:** Config loading, path resolution, and more

---

## Architecture

### Core Components

1. **BaseValidator** (`base.py`)
   - Abstract base class for all validators
   - Provides workflow orchestration (validate_input → pre_validate → validate → post_validate)
   - Handles error tracking and result reporting
   - Supports config file loading

2. **ValidationResult** (`base.py`)
   - Structured result type with status, issues, and metadata
   - Status: PASS, FAIL, WARN, SKIP
   - Issues with severity levels: ERROR, WARNING, INFO
   - Execution time tracking

3. **ValidatorRegistry** (`registry.py`)
   - Registry for discovering and managing validators
   - Supports aliases for validators
   - Enables dynamic validator discovery
   - Target-based validator lookup

---

## Usage

### Creating a Validator

```python
from pathlib import Path
from validators.base import (
    BaseValidator,
    ValidatorConfig,
    ValidationResult,
    ValidationStatus,
    ValidationIssue,
    ValidationSeverity
)

class MyValidator(BaseValidator):
    def get_name(self) -> str:
        return "MyValidator"
    
    def get_description(self) -> str:
        return "Validates something important"
    
    def validate(self, **kwargs) -> ValidationResult:
        result = ValidationResult(status=ValidationStatus.PASS)
        
        # Perform validation
        if some_condition_fails:
            result.issues.append(ValidationIssue(
                message="Something is wrong",
                severity=ValidationSeverity.ERROR,
                file_path=Path("some/file.py"),
                line_number=42
            ))
        
        return result
```

### Running a Validator

```python
from pathlib import Path
from validators.base import ValidatorConfig
from validators.registry import ValidatorRegistry

# Create config
config = ValidatorConfig(
    project_root=Path.cwd(),
    strict_mode=True,
    verbose=True
)

# Create validator instance
validator = MyValidator(config)

# Run validation
result = validator.run()

# Check results
if result.is_pass():
    print("✅ Validation passed")
else:
    print(f"❌ Validation failed: {len(result.get_errors())} errors")
    for issue in result.get_errors():
        print(f"  - {issue.message}")
```

### Registering a Validator

```python
from validators.registry import ValidatorRegistry

# Register validator
ValidatorRegistry.register(
    "my-validator",
    MyValidator,
    aliases=["my-val", "mv"]
)

# Create validator from registry
config = ValidatorConfig()
validator = ValidatorRegistry.create_validator("my-validator", config)
```

---

## Validation Status

- **PASS:** Validation passed with no issues
- **FAIL:** Validation failed (has errors or warnings if `fail_on_warnings=True`)
- **WARN:** Validation passed but has warnings
- **SKIP:** Validation was skipped (e.g., by pre_validate hook)

---

## Validation Severity

- **ERROR:** Critical issue that causes validation to fail
- **WARNING:** Non-critical issue that may need attention
- **INFO:** Informational message (does not affect validation status)

---

## Configuration

### ValidatorConfig

```python
@dataclass
class ValidatorConfig:
    project_root: Path = Path.cwd()
    strict_mode: bool = False
    verbose: bool = False
    fail_on_warnings: bool = False
    config_file: Optional[Path] = None  # e.g., rw-config.yaml
    custom_params: Dict[str, Any] = field(default_factory=dict)
```

### Config File Loading

Validators can load configuration from files (e.g., `rw-config.yaml`):

```python
class MyValidator(BaseValidator):
    def validate(self, **kwargs) -> ValidationResult:
        config = self.load_config_file()
        if config:
            # Use config values
            version_file = config.get('version_file', 'src/version.py')
```

---

## Examples

See `examples/` directory for example validators:
- `simple_validator_example.py` - Basic validator example
- `file_validator_example.py` - File-based validation example

---

## Integration with Existing Validators

The framework is designed to work alongside existing standalone validators:
- `validate_branch_context.py`
- `validate_changelog_format.py`
- `validate_version_bump.py`

Future validators can be built using the framework, while existing validators continue to work as standalone scripts.

---

**Last Updated:** 2026-01-06  
**Version:** 1.0.0

---

## Validation Patterns

A comprehensive library of validation patterns is available in `PATTERNS.md`. These patterns provide guidance for creating new validators and ensure consistency across the codebase.

**Pattern Categories:**
1. **Base Patterns** - Core validator patterns
2. **Input Validation Patterns** - Input parameter validation patterns
3. **File Structure Patterns** - File and directory structure validation patterns
4. **Content Validation Patterns** - Content and format validation patterns
5. **Cross-Reference Patterns** - Cross-reference and consistency validation patterns
6. **Configuration Patterns** - Configuration loading and path resolution patterns
7. **Error Reporting Patterns** - Error and issue reporting patterns

See `PATTERNS.md` for detailed pattern documentation and `examples/pattern_examples.py` for working examples.

---

## Framework-Specific Validators

Framework-specific validators are available in the `framework/` subdirectory:

- **KanbanValidator** - Validates Kanban document structure and consistency
- **WorkflowValidator** - Validates workflow YAML files
- **VersionValidator** - Validates version file format and schema
- **DocumentLifecycleValidator** - Validates document lifecycle metadata

See `framework/README.md` for detailed documentation on framework-specific validators.

