#!/usr/bin/env python3
"""
Tests for DocumentLifecycleValidator

Part of: Epic 8, Story 2 - Additional Validators
Task: E8:S02:T02 - Build framework-specific validators
"""

import sys
import tempfile
from pathlib import Path

import pytest

# Add validators directory to path for imports
validators_path = Path(__file__).parent.parent
if str(validators_path) not in sys.path:
    sys.path.insert(0, str(validators_path))

# Import from modules (validators_path is in sys.path)
try:
    from base import ValidatorConfig
    from framework.document_lifecycle_validator import DocumentLifecycleValidator
except ImportError:
    # Fallback: try package import
    from validators.base import ValidatorConfig
    from validators.framework.document_lifecycle_validator import (
        DocumentLifecycleValidator,
    )


VALID_FIVE_FIELD_FRONTMATTER = """---
lifecycle: evergreen
ttl_days: null
created_at: 2026-01-06T12:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Test Document

Content here.
"""

REQUIRED_FIELDS = [
    'lifecycle',
    'ttl_days',
    'created_at',
    'expires_at',
    'housekeeping_policy',
]


def _run_validator_on_doc(tmpdir: str, doc_content: str):
    docs_dir = Path(tmpdir) / "docs"
    docs_dir.mkdir(parents=True)
    doc_file = docs_dir / "test.md"
    doc_file.write_text(doc_content)
    config = ValidatorConfig(project_root=Path(tmpdir))
    validator = DocumentLifecycleValidator(config)
    return validator.run(docs_root=str(docs_dir))


def test_document_lifecycle_validator_valid_metadata():
    """TC1: Valid five-field evergreen metadata passes."""
    with tempfile.TemporaryDirectory() as tmpdir:
        result = _run_validator_on_doc(tmpdir, VALID_FIVE_FIELD_FRONTMATTER)
        assert result.is_pass(), (
            f"Validation should pass, but got: {[i.message for i in result.issues]}"
        )


@pytest.mark.parametrize("missing_field", REQUIRED_FIELDS)
def test_document_lifecycle_validator_missing_required_field(missing_field):
    """TC2: Each missing required field fails with expected message."""
    lines = [
        "lifecycle: evergreen",
        "ttl_days: null",
        "created_at: 2026-01-06T12:00:00Z",
        "expires_at: null",
        "housekeeping_policy: keep",
    ]
    field_prefix = f"{missing_field}:"
    lines = [line for line in lines if not line.startswith(field_prefix)]
    frontmatter = "---\n" + "\n".join(lines) + "\n---\n\n# Test\n"
    with tempfile.TemporaryDirectory() as tmpdir:
        result = _run_validator_on_doc(tmpdir, frontmatter)
        assert result.is_fail(), f"Validation should fail when {missing_field} is missing"
        assert any(
            f"missing required lifecycle field: {missing_field}" in issue.message
            for issue in result.issues
        )


def test_document_lifecycle_validator_invalid_lifecycle():
    """TC3: Invalid lifecycle enum fails."""
    content = VALID_FIVE_FIELD_FRONTMATTER.replace(
        "lifecycle: evergreen", "lifecycle: invalid_value"
    )
    with tempfile.TemporaryDirectory() as tmpdir:
        result = _run_validator_on_doc(tmpdir, content)
        assert result.is_fail(), "Validation should fail for invalid lifecycle value"
        assert any("Invalid lifecycle value" in issue.message for issue in result.issues)


def test_document_lifecycle_validator_invalid_housekeeping_policy():
    """TC4: Invalid housekeeping_policy enum fails."""
    content = VALID_FIVE_FIELD_FRONTMATTER.replace(
        "housekeeping_policy: keep", "housekeeping_policy: purge"
    )
    with tempfile.TemporaryDirectory() as tmpdir:
        result = _run_validator_on_doc(tmpdir, content)
        assert result.is_fail(), "Validation should fail for invalid housekeeping_policy"
        assert any(
            "Invalid housekeeping_policy value" in issue.message for issue in result.issues
        )


@pytest.mark.parametrize(
    "ttl_value",
    ["-1", "not_an_integer"],
)
def test_document_lifecycle_validator_invalid_ttl_days(ttl_value):
    """TC5: Invalid ttl_days fails."""
    content = VALID_FIVE_FIELD_FRONTMATTER.replace("ttl_days: null", f"ttl_days: {ttl_value}")
    with tempfile.TemporaryDirectory() as tmpdir:
        result = _run_validator_on_doc(tmpdir, content)
        assert result.is_fail(), "Validation should fail for invalid ttl_days"
        assert any("Invalid ttl_days value" in issue.message for issue in result.issues)


def test_document_lifecycle_validator_no_frontmatter():
    """TC6: Document without frontmatter passes."""
    content = "# Test Document\n\nNo frontmatter here.\n"
    with tempfile.TemporaryDirectory() as tmpdir:
        result = _run_validator_on_doc(tmpdir, content)
        assert result.is_pass(), "Documents without frontmatter should pass"


def test_document_lifecycle_validator_malformed_frontmatter():
    """TC7: Unclosed frontmatter fails."""
    content = """---
lifecycle: evergreen
created_at: 2026-01-06T12:00:00Z

# Test Document (missing closing delimiter)
"""
    with tempfile.TemporaryDirectory() as tmpdir:
        result = _run_validator_on_doc(tmpdir, content)
        assert result.is_fail(), "Validation should fail for malformed frontmatter"
        assert any(
            "Frontmatter not properly closed" in issue.message for issue in result.issues
        )


def test_document_lifecycle_validator_run_without_nameerror():
    """TC8: Validator run() completes without NameError."""
    with tempfile.TemporaryDirectory() as tmpdir:
        result = _run_validator_on_doc(tmpdir, VALID_FIVE_FIELD_FRONTMATTER)
        assert result is not None
        assert hasattr(result, "is_pass")


if __name__ == "__main__":
    pytest.main([__file__, "-v"])
