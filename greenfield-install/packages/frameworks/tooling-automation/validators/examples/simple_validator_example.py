#!/usr/bin/env python3
"""
Simple Validator Example

Example implementation of a simple validator using the BaseValidator framework.

Part of: Epic 8, Story 2 - Additional Validators
Task: E8:S02:T01 - Create validator framework
"""

import sys
from pathlib import Path
from typing import Tuple, List

# Add validators directory to path
validators_path = Path(__file__).parent.parent
if str(validators_path) not in sys.path:
    sys.path.insert(0, str(validators_path))

from validators.base import (
    BaseValidator,
    ValidatorConfig,
    ValidationResult,
    ValidationStatus,
    ValidationIssue,
    ValidationSeverity
)


class SimpleValidator(BaseValidator):
    """Example validator that checks if a file exists."""
    
    def get_name(self) -> str:
        return "SimpleValidator"
    
    def get_description(self) -> str:
        return "Validates that a specified file exists"
    
    def validate_input(self, **kwargs) -> Tuple[bool, List[str]]:
        """Validate input parameters."""
        errors = []
        
        if 'file_path' not in kwargs:
            errors.append("Missing required parameter: file_path")
        
        return len(errors) == 0, errors
    
    def validate(self, **kwargs) -> ValidationResult:
        """Validate that the file exists."""
        result = ValidationResult(status=ValidationStatus.PASS)
        
        file_path = Path(kwargs['file_path'])
        
        if not file_path.exists():
            result.issues.append(ValidationIssue(
                message=f"File not found: {file_path}",
                severity=ValidationSeverity.ERROR,
                file_path=file_path
            ))
        elif not file_path.is_file():
            result.issues.append(ValidationIssue(
                message=f"Path exists but is not a file: {file_path}",
                severity=ValidationSeverity.ERROR,
                file_path=file_path
            ))
        else:
            # File exists and is valid
            if self.config.verbose:
                result.issues.append(ValidationIssue(
                    message=f"File exists: {file_path}",
                    severity=ValidationSeverity.INFO,
                    file_path=file_path
                ))
        
        return result
    
    def get_supported_targets(self) -> List[str]:
        """Return supported validation targets."""
        return ['file']


def main():
    """Example usage of SimpleValidator."""
    from pathlib import Path
    
    config = ValidatorConfig(
        project_root=Path.cwd(),
        verbose=True
    )
    
    validator = SimpleValidator(config)
    
    # Test with existing file
    result = validator.run(file_path=Path(__file__))
    
    print(f"Validator: {validator.get_name()}")
    print(f"Status: {result.status.value}")
    
    if result.is_pass():
        print("✅ Validation passed")
    else:
        print(f"❌ Validation failed: {len(result.get_errors())} errors")
        for issue in result.get_errors():
            print(f"  - {issue.message}")
    
    if result.has_warnings():
        print(f"⚠️  Warnings: {len(result.get_warnings())}")
        for issue in result.get_warnings():
            print(f"  - {issue.message}")
    
    if result.has_info():
        print(f"ℹ️  Info: {len(result.get_info())}")
        for issue in result.get_info():
            print(f"  - {issue.message}")
    
    print(f"Execution time: {result.execution_time:.3f}s")


if __name__ == "__main__":
    main()

