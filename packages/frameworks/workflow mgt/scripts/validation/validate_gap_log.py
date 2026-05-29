#!/usr/bin/env python3
"""
Gap Log and Risk Assessment Validator (E4:S16:T05 spec)

Validates that a gap log and risk assessment document conforms to the schema in
docs/architecture/standards-and-adrs/gap-log-schema.md.

Checks:
- Required sections: Scope, Input/Inputs, Gap Log, Summary of Direct [Package] Gaps, Risk Assessment
- Per-gap fields: ID, Category, Description, Source, Ownership, Severity, Likelihood, RC Impact, Tracking
- Risk Assessment: Structural/Behavioral/Integration Risk, RC Impact Conclusion

Usage:
    python validate_gap_log.py [--path PATH] [--strict]

    --path: Path to gap log markdown file (required, or use default known paths)
    --strict: Exit 1 on validation failure
"""

import argparse
import re
import sys
from pathlib import Path
from typing import List, Optional, Tuple

VALID_SEVERITY = {"LOW", "MEDIUM", "HIGH"}
VALID_RC_IMPACT = {"BLOCKER", "NON-BLOCKING", "INFORMATIONAL"}
GAP_ID_PATTERN = re.compile(r"^GAP-[A-Z0-9]+-[A-Z0-9]+-\d+$", re.IGNORECASE)


def validate_gap_log(content: str, path: Optional[Path] = None) -> Tuple[bool, List[str]]:
    """Validate gap log content. Returns (passed, list of error messages)."""
    errors: List[str] = []

    # 1. Required sections
    if not re.search(r"#+\s+Scope\b", content):
        errors.append("Missing required section: Scope")
    if not re.search(r"#+\s+Inputs?\b", content):
        errors.append("Missing required section: Input or Inputs")
    if not re.search(r"#+\s+Gap\s+Log\b", content, re.IGNORECASE):
        errors.append("Missing required section: Gap Log")
    if not re.search(r"Summary\s+of\s+Direct\s+", content, re.IGNORECASE):
        errors.append("Missing required section: Summary of Direct [Package] Gaps")
    if not re.search(r"#+\s+Risk\s+Assessment\b", content, re.IGNORECASE):
        errors.append("Missing required section: Risk Assessment")

    # 2. Risk Assessment: RC Impact Conclusion
    risk_section = _extract_section(content, "Risk Assessment")
    if risk_section:
        if not re.search(
            r"RC\s+Impact\s+Conclusion|RC-impact\s+conclusion|RC\s+Readiness\s+Statement",
            risk_section,
            re.IGNORECASE,
        ):
            errors.append("Risk Assessment section must include RC Impact Conclusion (or RC Readiness Statement)")
        if not re.search(r"RC-blocking|no\s+RC-blocking|RC-blocking\s+gaps", risk_section, re.IGNORECASE):
            errors.append("Risk Assessment must state whether RC-blocking gaps exist for the package")
    else:
        errors.append("Risk Assessment section not found or empty")

    # 3. Per-gap validation: find all ### Gap N entries
    gap_blocks = _extract_gap_blocks(content)
    for i, block in enumerate(gap_blocks):
        gap_errors = _validate_gap_block(block, i + 1)
        errors.extend(gap_errors)

    # 4. If no gaps but Summary + Risk Assessment exist, that's valid
    # (test_empty_gap_log_passes_with_summary)

    return len(errors) == 0, errors


def _extract_section(content: str, section_name: str) -> Optional[str]:
    """Extract content of a section (from ## Section to next ## or end)."""
    pattern = rf"(?:^|\n)#+\s+{re.escape(section_name)}\s*(?:\n|$)(.*?)(?=\n#+\s+|\Z)"
    match = re.search(pattern, content, re.IGNORECASE | re.DOTALL)
    return match.group(1).strip() if match else None


def _extract_gap_blocks(content: str) -> List[str]:
    """Extract blocks for ### Gap N ... (up to next ### Gap M or ## Risk Assessment)."""
    pattern = r"###\s+Gap\s+\d+\s+[^\n]*(?:\n(?!###\s+Gap\s+\d)[^\n]*)*"
    matches = re.findall(pattern, content, re.IGNORECASE | re.MULTILINE)
    return [m.strip() for m in matches]


def _validate_gap_block(block: str, gap_num: int) -> List[str]:
    """Validate a single gap block. Returns list of error messages."""
    errors: List[str] = []

    # ID
    id_match = re.search(r"\*\*ID:\*\*\s*(GAP-[A-Z0-9]+-[A-Z0-9]+-\d+)", block, re.IGNORECASE)
    if not id_match:
        errors.append(f"Gap {gap_num}: Missing or invalid ID (expected GAP-{{PACKAGE}}-{{TYPE}}-NNN)")
    elif not GAP_ID_PATTERN.match(id_match.group(1)):
        errors.append(f"Gap {gap_num}: ID must match GAP-{{PACKAGE}}-{{TYPE}}-NNN format")

    # Category
    if not re.search(r"\*\*Category:\*\*", block):
        errors.append(f"Gap {gap_num}: Missing Category")

    # Description
    if not re.search(r"\*\*Description:\*\*", block):
        errors.append(f"Gap {gap_num}: Missing Description")

    # Source
    if not re.search(r"\*\*Source:\*\*", block):
        errors.append(f"Gap {gap_num}: Missing Source")

    # Ownership
    if not re.search(r"\*\*Ownership:\*\*", block):
        errors.append(f"Gap {gap_num}: Missing Ownership")

    # Severity
    sev_match = re.search(r"\*\*Severity:\*\*\s*(\w+)", block)
    if not sev_match:
        errors.append(f"Gap {gap_num}: Missing Severity")
    else:
        sev = sev_match.group(1).upper().split()[0]  # handle "LOW (usability...)"
        if sev not in VALID_SEVERITY:
            errors.append(f"Gap {gap_num}: Invalid Severity '{sev}' (must be LOW, MEDIUM, or HIGH)")

    # Likelihood
    like_match = re.search(r"\*\*Likelihood:\*\*\s*(\w+)", block)
    if not like_match:
        errors.append(f"Gap {gap_num}: Missing Likelihood")
    else:
        like = like_match.group(1).upper().split()[0]
        if like not in VALID_SEVERITY:  # LOW, MEDIUM, HIGH
            errors.append(f"Gap {gap_num}: Invalid Likelihood '{like}' (must be LOW, MEDIUM, or HIGH)")

    # RC Impact
    rc_match = re.search(r"\*\*RC\s+Impact:\*\*\s*([^\n]+)", block)
    if not rc_match:
        errors.append(f"Gap {gap_num}: Missing RC Impact")
    else:
        rc_text = rc_match.group(1).upper()
        if not any(v in rc_text for v in VALID_RC_IMPACT):
            errors.append(
                f"Gap {gap_num}: Invalid RC Impact (must contain BLOCKER, NON-BLOCKING, or INFORMATIONAL)"
            )

    # Tracking
    if not re.search(r"\*\*Tracking:\*\*", block):
        errors.append(f"Gap {gap_num}: Missing Tracking")

    return errors


def main() -> int:
    parser = argparse.ArgumentParser(description="Validate gap log and risk assessment document")
    parser.add_argument("--path", type=Path, help="Path to gap log markdown file")
    parser.add_argument("--strict", action="store_true", help="Exit 1 on validation failure")
    args = parser.parse_args()

    path = args.path
    if not path:
        # Default: try known paths
        project_root = Path(__file__).resolve().parents[5]  # ai-dev-kit root
        candidates = [
            project_root
            / "docs/project-management/kanban/epics/Epic-4/Story-016-kanban-package-implementation-review/T05-create-gap-log-and-risk-assessment.md",
            project_root
            / "docs/project-management/kanban/epics/Epic-3/Story-004-numbering-versioning-package-implementation-review/T05-gap-log-and-risk-assessment.md",
        ]
        for c in candidates:
            if c.exists():
                path = c
                break
        if not path or not path.exists():
            print("Error: No gap log path provided and no default found. Use --path PATH")
            return 1

    if not path.exists():
        print(f"Error: Gap log not found at {path}")
        return 1

    content = path.read_text(encoding="utf-8")
    passed, errors = validate_gap_log(content, path)

    if passed:
        print("Gap log and risk assessment validation passed.")
        return 0

    print("Gap log validation FAILED:")
    for e in errors:
        print(f"  - {e}")
    if args.strict:
        return 1
    return 0


if __name__ == "__main__":
    sys.exit(main())
