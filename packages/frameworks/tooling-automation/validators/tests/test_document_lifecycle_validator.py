#!/usr/bin/env python3
"""
Tests for DocumentLifecycleValidator

Part of: Epic 8, Story 2 - Additional Validators
Task: E8:S02:T02 - Build framework-specific validators
"""

import sys
import tempfile
from pathlib import Path

# Add validators directory to path for imports
validators_path = Path(__file__).parent.parent
if str(validators_path) not in sys.path:
    sys.path.insert(0, str(validators_path))

# Import from modules (validators_path is in sys.path)
try:
    from framework.document_lifecycle_validator import DocumentLifecycleValidator
    from base import ValidatorConfig, ValidationStatus
except ImportError:
    # Fallback: try package import
    from validators.framework.document_lifecycle_validator import DocumentLifecycleValidator
    from validators.base import ValidatorConfig, ValidationStatus


def test_document_lifecycle_validator_valid_metadata():
    """Test DocumentLifecycleValidator with valid metadata."""
    with tempfile.TemporaryDirectory() as tmpdir:
        docs_dir = Path(tmpdir) / "docs"
        docs_dir.mkdir(parents=True)
        
        doc_file = docs_dir / "test.md"
        doc_file.write_text("""---
lifecycle: evergreen
created_at: 2026-01-06T12:00:00Z
---

# Test Document

Content here.
""")
        
        config = ValidatorConfig(project_root=Path(tmpdir))
        validator = DocumentLifecycleValidator(config)
        result = validator.run(docs_root=str(docs_dir))
        
        assert result.is_pass(), f"Validation should pass, but got: {[i.message for i in result.issues]}"


def test_document_lifecycle_validator_missing_field():
    """Test DocumentLifecycleValidator with missing required field."""
    with tempfile.TemporaryDirectory() as tmpdir:
        docs_dir = Path(tmpdir) / "docs"
        docs_dir.mkdir(parents=True)
        
        doc_file = docs_dir / "test.md"
        doc_file.write_text("""---
lifecycle: evergreen
# created_at missing
---

# Test Document

Content here.
""")
        
        config = ValidatorConfig(project_root=Path(tmpdir))
        validator = DocumentLifecycleValidator(config)
        result = validator.run(docs_root=str(docs_dir))
        
        assert result.is_fail(), "Validation should fail for missing required field"
        assert any("missing required lifecycle field: created_at" in issue.message for issue in result.issues)


def test_document_lifecycle_validator_invalid_lifecycle():
    """Test DocumentLifecycleValidator with invalid lifecycle value."""
    with tempfile.TemporaryDirectory() as tmpdir:
        docs_dir = Path(tmpdir) / "docs"
        docs_dir.mkdir(parents=True)
        
        doc_file = docs_dir / "test.md"
        doc_file.write_text("""---
lifecycle: invalid_value
created_at: 2026-01-06T12:00:00Z
---

# Test Document

Content here.
""")
        
        config = ValidatorConfig(project_root=Path(tmpdir))
        validator = DocumentLifecycleValidator(config)
        result = validator.run(docs_root=str(docs_dir))
        
        assert result.is_fail(), "Validation should fail for invalid lifecycle value"
        assert any("Invalid lifecycle value" in issue.message for issue in result.issues)


if __name__ == "__main__":
    test_document_lifecycle_validator_valid_metadata()
    test_document_lifecycle_validator_missing_field()
    test_document_lifecycle_validator_invalid_lifecycle()
    print("✅ All tests passed!")

