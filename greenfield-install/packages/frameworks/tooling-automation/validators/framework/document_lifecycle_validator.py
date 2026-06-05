#!/usr/bin/env python3
"""
Document Lifecycle Framework Validator

Validates document lifecycle metadata and policy compliance.

Part of: Epic 8, Story 2 - Additional Validators
Task: E8:S02:T02 - Build framework-specific validators
"""

import re
import sys
from datetime import datetime
from pathlib import Path
from typing import Dict, List, Optional, Tuple

# Add validators directory to path for imports
validators_path = Path(__file__).parent.parent
if str(validators_path) not in sys.path:
    sys.path.insert(0, str(validators_path))

# Import from base module (validators_path is in sys.path, so base is directly importable)
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

try:
    import yaml
except ImportError:
    yaml = None


class DocumentLifecycleValidator(BaseValidator):
    """Validator for Document Lifecycle framework metadata."""
    
    def __init__(self, config: ValidatorConfig):
        super().__init__(config)
        self.docs_root: Optional[Path] = None
        self.config_dict: Optional[Dict] = None
    
    def get_name(self) -> str:
        return "DocumentLifecycleValidator"
    
    def get_description(self) -> str:
        return "Validates document lifecycle metadata and policy compliance"
    
    def get_supported_targets(self) -> List[str]:
        return ['document', 'lifecycle', 'metadata']
    
    def validate_input(self, **kwargs) -> Tuple[bool, List[str]]:
        """Validate input parameters."""
        errors = []
        
        docs_root = kwargs.get('docs_root')
        if docs_root and not Path(docs_root).exists():
            errors.append(f"Docs root directory does not exist: {docs_root}")
        
        return len(errors) == 0, errors
    
    def pre_validate(self, **kwargs) -> bool:
        """Load configuration and determine docs root."""
        # Load config file
        self.config_dict = self.load_config_file()
        
        # Determine docs root
        docs_root = kwargs.get('docs_root')
        if docs_root:
            self.docs_root = Path(docs_root)
        else:
            # Default fallback
            self.docs_root = self.config.project_root / "docs"
        
        if not self.docs_root.exists():
            self.result.issues.append(ValidationIssue(
                message=f"Docs root directory not found: {self.docs_root}",
                severity=ValidationSeverity.ERROR
            ))
            return False
        
        return True
    
    def validate(self, **kwargs) -> ValidationResult:
        """Validate document lifecycle metadata."""
        result = ValidationResult(status=ValidationStatus.PASS)
        
        if not self.docs_root:
            result.status = ValidationStatus.FAIL
            result.issues.append(ValidationIssue(
                message="Docs root not determined",
                severity=ValidationSeverity.ERROR
            ))
            return result
        
        # Find all markdown files
        doc_files = list(self.docs_root.rglob("*.md"))
        
        for doc_file in doc_files:
            doc_issues = self._validate_document_metadata(doc_file)
            result.issues.extend(doc_issues)
        
        return result
    
    def _validate_document_metadata(self, doc_path: Path) -> List[ValidationIssue]:
        """Validate a single document's lifecycle metadata."""
        issues = []
        
        try:
            content = doc_path.read_text(encoding='utf-8')
        except Exception as e:
            issues.append(ValidationIssue(
                message=f"Failed to read document: {e}",
                severity=ValidationSeverity.ERROR,
                file_path=doc_path
            ))
            return issues
        
        # Check for frontmatter
        if not content.startswith('---'):
            # No frontmatter - this is acceptable for some documents
            return issues
        
        # Parse frontmatter
        frontmatter_end = content.find('---', 3)
        if frontmatter_end == -1:
            issues.append(ValidationIssue(
                message="Frontmatter not properly closed",
                severity=ValidationSeverity.ERROR,
                file_path=doc_path
            ))
            return issues
        
        frontmatter_text = content[3:frontmatter_end].strip()
        
        if not yaml:
            # Can't validate YAML without PyYAML
            return issues
        
        try:
            frontmatter = yaml.safe_load(frontmatter_text)
        except Exception as e:
            issues.append(ValidationIssue(
                message=f"Failed to parse frontmatter YAML: {e}",
                severity=ValidationSeverity.ERROR,
                file_path=doc_path
            ))
            return issues
        
        if not frontmatter:
            return issues
        
        # Validate required fields
        required_fields = ['lifecycle', 'created_at']
        for field in required_fields:
            if field not in frontmatter:
                issues.append(ValidationIssue(
                    message=f"Document missing required lifecycle field: {field}",
                    severity=ValidationSeverity.ERROR,
                    file_path=doc_path
                ))
        
        # Validate lifecycle value
        if 'lifecycle' in frontmatter:
            lifecycle = frontmatter['lifecycle']
            valid_lifecycles = ['evergreen', 'timeboxed', 'transient']
            if lifecycle not in valid_lifecycles:
                issues.append(ValidationIssue(
                    message=f"Invalid lifecycle value: {lifecycle} (expected one of: {', '.join(valid_lifecycles)})",
                    severity=ValidationSeverity.ERROR,
                    file_path=doc_path
                ))
        
        # Validate created_at format
        if 'created_at' in frontmatter:
            created_at = frontmatter['created_at']
            try:
                datetime.fromisoformat(created_at.replace('Z', '+00:00'))
            except (ValueError, AttributeError):
                issues.append(ValidationIssue(
                    message=f"Invalid created_at format: {created_at} (expected ISO 8601 datetime)",
                    severity=ValidationSeverity.ERROR,
                    file_path=doc_path
                ))
        
        # Validate ttl_days if present
        if 'ttl_days' in frontmatter:
            ttl_days = frontmatter['ttl_days']
            if ttl_days is not None and (not isinstance(ttl_days, int) or ttl_days < 0):
                issues.append(ValidationIssue(
                    message=f"Invalid ttl_days value: {ttl_days} (expected positive integer or null)",
                    severity=ValidationSeverity.ERROR,
                    file_path=doc_path
                ))
        
        # Validate expires_at if present
        if 'expires_at' in frontmatter:
            expires_at = frontmatter['expires_at']
            if expires_at is not None:
                try:
                    datetime.fromisoformat(expires_at.replace('Z', '+00:00'))
                except (ValueError, AttributeError):
                    issues.append(ValidationIssue(
                        message=f"Invalid expires_at format: {expires_at} (expected ISO 8601 datetime or null)",
                        severity=ValidationSeverity.ERROR,
                        file_path=doc_path
                    ))
        
        # Validate housekeeping_policy if present
        if 'housekeeping_policy' in frontmatter:
            policy = frontmatter['housekeeping_policy']
            valid_policies = ['keep', 'archive', 'delete']
            if policy not in valid_policies:
                issues.append(ValidationIssue(
                    message=f"Invalid housekeeping_policy value: {policy} (expected one of: {', '.join(valid_policies)})",
                    severity=ValidationSeverity.ERROR,
                    file_path=doc_path
                ))
        
        return issues

