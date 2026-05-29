# Validation Patterns Library

**Epic:** 8 - Tooling & Automation  
**Story:** E8:S02 - Additional Validators  
**Task:** E8:S02:T03 - Establish validation patterns  
**Version:** 1.0.0

---

## Overview

This document catalogs reusable patterns extracted from the Validator Framework implementations. These patterns provide guidance for creating new validators and ensure consistency across the codebase.

---

## Pattern Categories

1. **Base Patterns** - Core validator patterns
2. **Input Validation Patterns** - Input parameter validation patterns
3. **File Structure Patterns** - File and directory structure validation patterns
4. **Content Validation Patterns** - Content and format validation patterns
5. **Cross-Reference Patterns** - Cross-reference and consistency validation patterns
6. **Configuration Patterns** - Configuration loading and path resolution patterns
7. **Error Reporting Patterns** - Error and issue reporting patterns

---

## 1. Base Patterns

### Pattern 1.1: Simple Validator

**When to Use:** Creating a validator that validates a single file or simple structure

**Structure:**
```python
class SimpleValidator(BaseValidator):
    def get_name(self) -> str:
        return "SimpleValidator"
    
    def get_description(self) -> str:
        return "Validates simple structure"
    
    def validate(self, **kwargs) -> ValidationResult:
        result = ValidationResult(status=ValidationStatus.PASS)
        
        # Perform validation
        if some_condition_fails:
            result.issues.append(ValidationIssue(
                message="Something is wrong",
                severity=ValidationSeverity.ERROR,
                file_path=Path("some/file.py")
            ))
        
        return result
```

**Key Characteristics:**
- Extends `BaseValidator`
- Implements required abstract methods
- Direct validation logic (no complex structure traversal)
- Simple error reporting

**Examples:**
- `VersionValidator` (validates single version file)

---

### Pattern 1.2: Hierarchical Validator

**When to Use:** Validating hierarchical structures (directories, nested documents)

**Structure:**
```python
class HierarchicalValidator(BaseValidator):
    def validate(self, **kwargs) -> ValidationResult:
        result = ValidationResult(status=ValidationStatus.PASS)
        
        # Validate top-level structure
        top_level_issues = self._validate_top_level()
        result.issues.extend(top_level_issues)
        
        # Validate nested structures
        nested_issues = self._validate_nested()
        result.issues.extend(nested_issues)
        
        # Validate consistency
        consistency_issues = self._validate_consistency()
        result.issues.extend(consistency_issues)
        
        return result
    
    def _validate_top_level(self) -> List[ValidationIssue]:
        # Validate top-level items
        pass
    
    def _validate_nested(self) -> List[ValidationIssue]:
        # Validate nested items
        pass
    
    def _validate_consistency(self) -> List[ValidationIssue]:
        # Validate cross-references and consistency
        pass
```

**Key Characteristics:**
- Validates structure at multiple levels
- Separate methods for each validation level
- Consistency validation across levels

**Examples:**
- `KanbanValidator` (validates Epic → Story → Task hierarchy)

---

## 2. Input Validation Patterns

### Pattern 2.1: Required Parameter Validation

**When to Use:** Validating required input parameters

**Structure:**
```python
def validate_input(self, **kwargs) -> Tuple[bool, List[str]]:
    errors = []
    
    # Check required parameters
    if 'param1' not in kwargs:
        errors.append("Missing required parameter: param1")
    
    if 'param2' not in kwargs:
        errors.append("Missing required parameter: param2")
    
    return len(errors) == 0, errors
```

**Best Practices:**
- Collect all errors before returning
- Use clear, descriptive error messages
- Return tuple: `(is_valid, error_messages)`

**Examples:**
- All framework validators use this pattern

---

### Pattern 2.2: Path Existence Validation

**When to Use:** Validating that paths exist before validation

**Structure:**
```python
def validate_input(self, **kwargs) -> Tuple[bool, List[str]]:
    errors = []
    
    path = kwargs.get('path')
    if path and not Path(path).exists():
        errors.append(f"Path does not exist: {path}")
    
    return len(errors) == 0, errors
```

**Examples:**
- `KanbanValidator`, `WorkflowValidator`, `VersionValidator`

---

### Pattern 2.3: Conditional Required Parameters

**When to Use:** Parameters required based on other parameters

**Structure:**
```python
def validate_input(self, **kwargs) -> Tuple[bool, List[str]]:
    errors = []
    
    doc_type = kwargs.get('doc_type')
    if doc_type == 'epic':
        if 'epic_number' not in kwargs:
            errors.append("Missing required parameter: epic_number for epic validation")
    elif doc_type == 'story':
        if 'story_number' not in kwargs:
            errors.append("Missing required parameter: story_number for story validation")
    
    return len(errors) == 0, errors
```

**Examples:**
- `KanbanValidator` (different requirements for Epic/Story/Task)

---

## 3. File Structure Patterns

### Pattern 3.1: Directory Traversal Validation

**When to Use:** Validating files in a directory structure

**Structure:**
```python
def _validate_directory_structure(self) -> List[ValidationIssue]:
    issues = []
    root_dir = self.config.project_root / "some/directory"
    
    if not root_dir.exists():
        issues.append(ValidationIssue(
            message=f"Directory not found: {root_dir}",
            severity=ValidationSeverity.ERROR
        ))
        return issues
    
    # Traverse directory
    for item in root_dir.iterdir():
        if item.is_dir():
            # Validate subdirectory
            sub_issues = self._validate_subdirectory(item)
            issues.extend(sub_issues)
        elif item.is_file():
            # Validate file
            file_issues = self._validate_file(item)
            issues.extend(file_issues)
    
    return issues
```

**Examples:**
- `KanbanValidator._validate_epics()` (traverses Epic directories)

---

### Pattern 3.2: Naming Convention Validation

**When to Use:** Validating file/directory naming conventions

**Structure:**
```python
def _validate_naming(self, name: str, pattern: str, expected_format: str) -> Optional[ValidationIssue]:
    import re
    
    match = re.match(pattern, name)
    if not match:
        return ValidationIssue(
            message=f"Invalid name: {name} (expected {expected_format})",
            severity=ValidationSeverity.ERROR
        )
    return None
```

**Examples:**
- `KanbanValidator` (validates `Epic-{N}`, `Story-{NNN}-{description}` patterns)

---

### Pattern 3.3: Required File Validation

**When to Use:** Validating that required files exist

**Structure:**
```python
def _validate_required_file(self, file_path: Path, file_type: str) -> Optional[ValidationIssue]:
    if not file_path.exists():
        return ValidationIssue(
            message=f"{file_type} file not found: {file_path.name}",
            severity=ValidationSeverity.ERROR,
            file_path=file_path.parent
        )
    return None
```

**Examples:**
- `KanbanValidator._validate_epic_document()` (validates Epic-{N}.md exists)

---

## 4. Content Validation Patterns

### Pattern 4.1: Required Field Validation

**When to Use:** Validating that required fields exist in content

**Structure:**
```python
def _validate_required_fields(self, content: str, required_fields: List[str], file_path: Path) -> List[ValidationIssue]:
    issues = []
    import re
    
    for field in required_fields:
        pattern = rf'\*\*{re.escape(field)}:\*\*'
        if not re.search(pattern, content, re.IGNORECASE):
            issues.append(ValidationIssue(
                message=f"Document missing required field: {field}",
                severity=ValidationSeverity.ERROR,
                file_path=file_path
            ))
    
    return issues
```

**Examples:**
- `KanbanValidator._validate_epic_document()` (validates Status, Last updated, Version fields)

---

### Pattern 4.2: Format Validation

**When to Use:** Validating content format (dates, versions, etc.)

**Structure:**
```python
def _validate_format(self, value: str, pattern: str, field_name: str, file_path: Path) -> Optional[ValidationIssue]:
    import re
    
    if not re.match(pattern, value):
        return ValidationIssue(
            message=f"Invalid {field_name} format: {value}",
            severity=ValidationSeverity.ERROR,
            file_path=file_path
        )
    return None
```

**Examples:**
- `VersionValidator._validate_version_string()` (validates RC.EPIC.STORY.TASK+BUILD format)
- `DocumentLifecycleValidator` (validates ISO 8601 datetime format)

---

### Pattern 4.3: Value Range Validation

**When to Use:** Validating numeric values are within acceptable ranges

**Structure:**
```python
def _validate_range(self, value: int, min_value: int, max_value: Optional[int], field_name: str, file_path: Path) -> Optional[ValidationIssue]:
    if value < min_value:
        return ValidationIssue(
            message=f"{field_name} must be >= {min_value}, found: {value}",
            severity=ValidationSeverity.ERROR,
            file_path=file_path
        )
    if max_value is not None and value > max_value:
        return ValidationIssue(
            message=f"{field_name} must be <= {max_value}, found: {value}",
            severity=ValidationSeverity.ERROR,
            file_path=file_path
        )
    return None
```

**Examples:**
- `VersionValidator._validate_components()` (validates version component ranges)

---

### Pattern 4.4: Enum Value Validation

**When to Use:** Validating that values match allowed enum values

**Structure:**
```python
def _validate_enum(self, value: str, allowed_values: List[str], field_name: str, file_path: Path) -> Optional[ValidationIssue]:
    if value not in allowed_values:
        return ValidationIssue(
            message=f"Invalid {field_name} value: {value} (expected one of: {', '.join(allowed_values)})",
            severity=ValidationSeverity.ERROR,
            file_path=file_path
        )
    return None
```

**Examples:**
- `DocumentLifecycleValidator` (validates lifecycle values: evergreen, timeboxed, transient)

---

## 5. Cross-Reference Patterns

### Pattern 5.1: Reference Existence Validation

**When to Use:** Validating that referenced items exist

**Structure:**
```python
def _validate_references(self, references: List[str], reference_type: str) -> List[ValidationIssue]:
    issues = []
    
    for ref in references:
        if not self._reference_exists(ref):
            issues.append(ValidationIssue(
                message=f"{reference_type} references non-existent item: {ref}",
                severity=ValidationSeverity.ERROR
            ))
    
    return issues
```

**Examples:**
- `WorkflowValidator._validate_dependencies()` (validates step dependencies exist)

---

### Pattern 5.2: Checklist Consistency Validation

**When to Use:** Validating that checklist items have corresponding documents

**Structure:**
```python
def _validate_checklist_consistency(self, content: str, pattern: str, doc_type: str) -> List[ValidationIssue]:
    issues = []
    import re
    
    # Extract references from checklist
    references = re.findall(pattern, content)
    
    for ref in references:
        # Check if document exists
        if not self._document_exists(ref):
            issues.append(ValidationIssue(
                message=f"{doc_type} {ref} referenced in checklist but no document found",
                severity=ValidationSeverity.ERROR
            ))
    
    return issues
```

**Examples:**
- `KanbanValidator._validate_story_document()` (validates Task documents exist for Task checklist items)

---

## 6. Configuration Patterns

### Pattern 6.1: Config File Loading

**When to Use:** Loading configuration from config files (e.g., rw-config.yaml)

**Structure:**
```python
def pre_validate(self, **kwargs) -> bool:
    # Load config file
    self.config_dict = self.load_config_file()
    
    # Determine paths from config or defaults
    if self.config_dict and 'some_path' in self.config_dict:
        self.some_path = self.config.project_root / self.config_dict['some_path']
    else:
        self.some_path = self.config.project_root / "default/path"
    
    if not self.some_path.exists():
        self.result.issues.append(ValidationIssue(
            message=f"Path not found: {self.some_path}",
            severity=ValidationSeverity.ERROR
        ))
        return False
    
    return True
```

**Examples:**
- All framework validators use this pattern

---

### Pattern 6.2: Path Resolution with Fallbacks

**When to Use:** Resolving paths with multiple fallback options

**Structure:**
```python
def _resolve_path(self, config_key: str, default_path: str) -> Path:
    # Try from kwargs
    if config_key in self.kwargs:
        return Path(self.kwargs[config_key])
    
    # Try from config file
    if self.config_dict and config_key in self.config_dict:
        return self.config.project_root / self.config_dict[config_key]
    
    # Use default
    return self.config.project_root / default_path
```

**Examples:**
- `KanbanValidator`, `WorkflowValidator`, `VersionValidator` (all use path resolution with fallbacks)

---

## 7. Error Reporting Patterns

### Pattern 7.1: Structured Issue Reporting

**When to Use:** Reporting validation issues with full context

**Structure:**
```python
result.issues.append(ValidationIssue(
    message="Clear description of the issue",
    severity=ValidationSeverity.ERROR,  # or WARNING, INFO
    file_path=Path("path/to/file.py"),
    line_number=42,  # optional
    column_number=10,  # optional
    context={'additional': 'context'}  # optional
))
```

**Best Practices:**
- Use appropriate severity levels
- Include file path when available
- Include line/column numbers when relevant
- Add context for complex issues

**Examples:**
- All validators use this pattern

---

### Pattern 7.2: Severity-Based Result Determination

**When to Use:** Determining final validation status based on issue severities

**Structure:**
```python
# In BaseValidator.run() - automatically handled
if self.result.has_errors():
    self.result.status = ValidationStatus.FAIL
elif self.result.has_warnings() and self.config.fail_on_warnings:
    self.result.status = ValidationStatus.FAIL
elif self.result.has_warnings():
    self.result.status = ValidationStatus.WARN
else:
    self.result.status = ValidationStatus.PASS
```

**Examples:**
- BaseValidator automatically handles this

---

## Pattern Examples

### Example 1: Simple File Validator

See: `packages/frameworks/tooling & automation/validators/framework/version_validator.py`

**Patterns Used:**
- Pattern 1.1: Simple Validator
- Pattern 2.1: Required Parameter Validation
- Pattern 4.1: Required Field Validation
- Pattern 4.2: Format Validation
- Pattern 4.3: Value Range Validation

### Example 2: Hierarchical Structure Validator

See: `packages/frameworks/tooling & automation/validators/framework/kanban_validator.py`

**Patterns Used:**
- Pattern 1.2: Hierarchical Validator
- Pattern 3.1: Directory Traversal Validation
- Pattern 3.2: Naming Convention Validation
- Pattern 3.3: Required File Validation
- Pattern 4.1: Required Field Validation
- Pattern 5.2: Checklist Consistency Validation
- Pattern 6.1: Config File Loading

### Example 3: YAML Structure Validator

See: `packages/frameworks/tooling & automation/validators/framework/workflow_validator.py`

**Patterns Used:**
- Pattern 1.1: Simple Validator
- Pattern 4.1: Required Field Validation
- Pattern 5.1: Reference Existence Validation
- Pattern 6.1: Config File Loading

---

## Best Practices

### 1. Use BaseValidator

- Always extend `BaseValidator`
- Implement required abstract methods
- Use the workflow orchestration (validate_input → pre_validate → validate → post_validate)

### 2. Validate Input Early

- Use `validate_input()` to catch parameter errors early
- Return clear error messages
- Collect all errors before returning

### 3. Load Configuration Properly

- Use `load_config_file()` to load configuration
- Provide sensible defaults
- Validate paths exist before using them

### 4. Report Issues Clearly

- Use appropriate severity levels (ERROR, WARNING, INFO)
- Include file paths and line numbers when available
- Provide actionable error messages

### 5. Separate Validation Concerns

- Use separate methods for different validation aspects
- Keep validation logic focused and testable
- Reuse validation patterns across validators

### 6. Handle Errors Gracefully

- Use `ValidationResult` for status reporting
- Include detailed error messages
- Track warnings separately from errors

### 7. Register Validators

- Register all validators in the registry
- Use descriptive names
- Provide helpful aliases

---

## Future Patterns

Potential patterns to extract as more validators are created:

1. **Incremental Validation Pattern** - Validating only changed files
2. **Parallel Validation Pattern** - Validating multiple files in parallel
3. **Caching Pattern** - Caching validation results
4. **Rule-Based Validation Pattern** - Configurable validation rules
5. **Composite Validation Pattern** - Combining multiple validators

---

**Status:** Active  
**Version:** 1.0.0  
**Last Updated:** 2026-01-06

