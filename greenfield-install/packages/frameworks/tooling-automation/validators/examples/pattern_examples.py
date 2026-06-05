#!/usr/bin/env python3
"""
Validation Pattern Examples

Demonstrates common validation patterns from the Validation Patterns Library.

Part of: Epic 8, Story 2 - Additional Validators
Task: E8:S02:T03 - Establish validation patterns
"""

import sys
import re
from pathlib import Path
from typing import List, Optional, Tuple

# Add validators directory to path
validators_path = Path(__file__).parent.parent
if str(validators_path) not in sys.path:
    sys.path.insert(0, str(validators_path))

# Import from modules (validators_path is in sys.path)
try:
    from base import (
        BaseValidator,
        ValidatorConfig,
        ValidationResult,
        ValidationStatus,
        ValidationIssue,
        ValidationSeverity
    )
except ImportError:
    # Fallback: try package import
    from validators.base import (
        BaseValidator,
        ValidatorConfig,
        ValidationResult,
        ValidationStatus,
        ValidationIssue,
        ValidationSeverity
    )


# Pattern 1.1: Simple Validator
class SimpleFileValidator(BaseValidator):
    """Example of Pattern 1.1: Simple Validator"""
    
    def get_name(self) -> str:
        return "SimpleFileValidator"
    
    def get_description(self) -> str:
        return "Validates a single file structure"
    
    def validate(self, **kwargs) -> ValidationResult:
        result = ValidationResult(status=ValidationStatus.PASS)
        
        file_path = kwargs.get('file_path')
        if not file_path:
            result.issues.append(ValidationIssue(
                message="Missing required parameter: file_path",
                severity=ValidationSeverity.ERROR
            ))
            return result
        
        file_path = Path(file_path)
        if not file_path.exists():
            result.issues.append(ValidationIssue(
                message=f"File not found: {file_path}",
                severity=ValidationSeverity.ERROR,
                file_path=file_path
            ))
        
        return result


# Pattern 2.1: Required Parameter Validation
class RequiredParameterValidator(BaseValidator):
    """Example of Pattern 2.1: Required Parameter Validation"""
    
    def get_name(self) -> str:
        return "RequiredParameterValidator"
    
    def get_description(self) -> str:
        return "Validates required parameters"
    
    def validate_input(self, **kwargs) -> Tuple[bool, List[str]]:
        errors = []
        
        if 'name' not in kwargs:
            errors.append("Missing required parameter: name")
        
        if 'version' not in kwargs:
            errors.append("Missing required parameter: version")
        
        return len(errors) == 0, errors
    
    def validate(self, **kwargs) -> ValidationResult:
        return ValidationResult(status=ValidationStatus.PASS)


# Pattern 3.2: Naming Convention Validation
class NamingConventionValidator(BaseValidator):
    """Example of Pattern 3.2: Naming Convention Validation"""
    
    def get_name(self) -> str:
        return "NamingConventionValidator"
    
    def get_description(self) -> str:
        return "Validates naming conventions"
    
    def validate(self, **kwargs) -> ValidationResult:
        result = ValidationResult(status=ValidationStatus.PASS)
        
        name = kwargs.get('name', '')
        pattern = kwargs.get('pattern', r'^[A-Z][a-z]+$')
        expected_format = kwargs.get('expected_format', 'PascalCase')
        
        if not re.match(pattern, name):
            result.issues.append(ValidationIssue(
                message=f"Invalid name: {name} (expected {expected_format})",
                severity=ValidationSeverity.ERROR
            ))
        
        return result


# Pattern 4.1: Required Field Validation
class RequiredFieldValidator(BaseValidator):
    """Example of Pattern 4.1: Required Field Validation"""
    
    def get_name(self) -> str:
        return "RequiredFieldValidator"
    
    def get_description(self) -> str:
        return "Validates required fields in content"
    
    def validate(self, **kwargs) -> ValidationResult:
        result = ValidationResult(status=ValidationStatus.PASS)
        
        content = kwargs.get('content', '')
        required_fields = kwargs.get('required_fields', [])
        file_path = kwargs.get('file_path')
        
        for field in required_fields:
            pattern = rf'\*\*{re.escape(field)}:\*\*'
            if not re.search(pattern, content, re.IGNORECASE):
                result.issues.append(ValidationIssue(
                    message=f"Document missing required field: {field}",
                    severity=ValidationSeverity.ERROR,
                    file_path=Path(file_path) if file_path else None
                ))
        
        return result


# Pattern 4.2: Format Validation
class FormatValidator(BaseValidator):
    """Example of Pattern 4.2: Format Validation"""
    
    def get_name(self) -> str:
        return "FormatValidator"
    
    def get_description(self) -> str:
        return "Validates content format"
    
    def validate(self, **kwargs) -> ValidationResult:
        result = ValidationResult(status=ValidationStatus.PASS)
        
        value = kwargs.get('value', '')
        pattern = kwargs.get('pattern', r'.+')
        field_name = kwargs.get('field_name', 'value')
        file_path = kwargs.get('file_path')
        
        if not re.match(pattern, value):
            result.issues.append(ValidationIssue(
                message=f"Invalid {field_name} format: {value}",
                severity=ValidationSeverity.ERROR,
                file_path=Path(file_path) if file_path else None
            ))
        
        return result


# Pattern 4.3: Value Range Validation
class RangeValidator(BaseValidator):
    """Example of Pattern 4.3: Value Range Validation"""
    
    def get_name(self) -> str:
        return "RangeValidator"
    
    def get_description(self) -> str:
        return "Validates numeric value ranges"
    
    def validate(self, **kwargs) -> ValidationResult:
        result = ValidationResult(status=ValidationStatus.PASS)
        
        value = kwargs.get('value', 0)
        min_value = kwargs.get('min_value', 0)
        max_value = kwargs.get('max_value', None)
        field_name = kwargs.get('field_name', 'value')
        file_path = kwargs.get('file_path')
        
        if value < min_value:
            result.issues.append(ValidationIssue(
                message=f"{field_name} must be >= {min_value}, found: {value}",
                severity=ValidationSeverity.ERROR,
                file_path=Path(file_path) if file_path else None
            ))
        
        if max_value is not None and value > max_value:
            result.issues.append(ValidationIssue(
                message=f"{field_name} must be <= {max_value}, found: {value}",
                severity=ValidationSeverity.ERROR,
                file_path=Path(file_path) if file_path else None
            ))
        
        return result


# Pattern 4.4: Enum Value Validation
class EnumValidator(BaseValidator):
    """Example of Pattern 4.4: Enum Value Validation"""
    
    def get_name(self) -> str:
        return "EnumValidator"
    
    def get_description(self) -> str:
        return "Validates enum values"
    
    def validate(self, **kwargs) -> ValidationResult:
        result = ValidationResult(status=ValidationStatus.PASS)
        
        value = kwargs.get('value', '')
        allowed_values = kwargs.get('allowed_values', [])
        field_name = kwargs.get('field_name', 'value')
        file_path = kwargs.get('file_path')
        
        if value not in allowed_values:
            result.issues.append(ValidationIssue(
                message=f"Invalid {field_name} value: {value} (expected one of: {', '.join(allowed_values)})",
                severity=ValidationSeverity.ERROR,
                file_path=Path(file_path) if file_path else None
            ))
        
        return result


# Pattern 5.1: Reference Existence Validation
class ReferenceValidator(BaseValidator):
    """Example of Pattern 5.1: Reference Existence Validation"""
    
    def get_name(self) -> str:
        return "ReferenceValidator"
    
    def get_description(self) -> str:
        return "Validates that references exist"
    
    def validate(self, **kwargs) -> ValidationResult:
        result = ValidationResult(status=ValidationStatus.PASS)
        
        references = kwargs.get('references', [])
        reference_type = kwargs.get('reference_type', 'reference')
        existing_items = set(kwargs.get('existing_items', []))
        
        for ref in references:
            if ref not in existing_items:
                result.issues.append(ValidationIssue(
                    message=f"{reference_type} references non-existent item: {ref}",
                    severity=ValidationSeverity.ERROR
                ))
        
        return result


if __name__ == "__main__":
    """Example usage of pattern validators"""
    
    config = ValidatorConfig(project_root=Path("."))
    
    # Example 1: Simple File Validator
    print("Example 1: Simple File Validator")
    validator1 = SimpleFileValidator(config)
    result1 = validator1.run(file_path="nonexistent.txt")
    print(f"  Status: {result1.status}")
    for issue in result1.issues:
        print(f"  - {issue.message}")
    print()
    
    # Example 2: Required Parameter Validator
    print("Example 2: Required Parameter Validator")
    validator2 = RequiredParameterValidator(config)
    result2 = validator2.run()  # Missing parameters
    print(f"  Status: {result2.status}")
    for issue in result2.issues:
        print(f"  - {issue.message}")
    print()
    
    # Example 3: Naming Convention Validator
    print("Example 3: Naming Convention Validator")
    validator3 = NamingConventionValidator(config)
    result3 = validator3.run(
        name="invalid-name",
        pattern=r'^[A-Z][a-z]+$',
        expected_format="PascalCase"
    )
    print(f"  Status: {result3.status}")
    for issue in result3.issues:
        print(f"  - {issue.message}")
    print()
    
    # Example 4: Required Field Validator
    print("Example 4: Required Field Validator")
    validator4 = RequiredFieldValidator(config)
    result4 = validator4.run(
        content="Some content without required fields",
        required_fields=["Status", "Version"],
        file_path="test.md"
    )
    print(f"  Status: {result4.status}")
    for issue in result4.issues:
        print(f"  - {issue.message}")
    print()
    
    # Example 5: Format Validator
    print("Example 5: Format Validator")
    validator5 = FormatValidator(config)
    result5 = validator5.run(
        value="invalid-format",
        pattern=r'^\d+\.\d+\.\d+$',
        field_name="version"
    )
    print(f"  Status: {result5.status}")
    for issue in result5.issues:
        print(f"  - {issue.message}")
    print()
    
    # Example 6: Range Validator
    print("Example 6: Range Validator")
    validator6 = RangeValidator(config)
    result6 = validator6.run(
        value=-1,
        min_value=0,
        max_value=100,
        field_name="count"
    )
    print(f"  Status: {result6.status}")
    for issue in result6.issues:
        print(f"  - {issue.message}")
    print()
    
    # Example 7: Enum Validator
    print("Example 7: Enum Validator")
    validator7 = EnumValidator(config)
    result7 = validator7.run(
        value="invalid",
        allowed_values=["valid1", "valid2", "valid3"],
        field_name="status"
    )
    print(f"  Status: {result7.status}")
    for issue in result7.issues:
        print(f"  - {issue.message}")
    print()
    
    # Example 8: Reference Validator
    print("Example 8: Reference Validator")
    validator8 = ReferenceValidator(config)
    result8 = validator8.run(
        references=["ref1", "ref2", "nonexistent"],
        reference_type="Step",
        existing_items=["ref1", "ref2", "ref3"]
    )
    print(f"  Status: {result8.status}")
    for issue in result8.issues:
        print(f"  - {issue.message}")
    print()
    
    print("✅ All pattern examples executed!")

