#!/usr/bin/env python3
"""
Validate package version format (SemVer).

This script validates that a version string follows Semantic Versioning format (MAJOR.MINOR.PATCH).
It is used as a TOOL by the agent, not as a determiner of decisions.

Usage:
    python validate_package_version_format.py <version>
    
Example:
    python validate_package_version_format.py 2.1.0
"""

import sys
import re
from typing import Tuple, Optional


def validate_semver_format(version: str) -> Tuple[bool, Optional[str]]:
    """
    Validate SemVer format (MAJOR.MINOR.PATCH).
    
    Args:
        version: Version string to validate
        
    Returns:
        Tuple of (is_valid, error_message)
    """
    if not version:
        return False, "Version string is empty"
    
    # SemVer pattern: MAJOR.MINOR.PATCH (no pre-release or build metadata for stable packages)
    pattern = r'^\d+\.\d+\.\d+$'
    
    if not re.match(pattern, version):
        return False, f"Version '{version}' does not match SemVer format (MAJOR.MINOR.PATCH)"
    
    # Validate numeric components
    parts = version.split('.')
    for i, part in enumerate(parts):
        if not part.isdigit():
            return False, f"Version component '{part}' is not numeric"
        num = int(part)
        if num < 0:
            return False, f"Version component '{part}' is negative"
    
    return True, None


def main():
    """Main validation function."""
    if len(sys.argv) != 2:
        print("Usage: validate_package_version_format.py <version>", file=sys.stderr)
        sys.exit(1)
    
    version = sys.argv[1]
    is_valid, error = validate_semver_format(version)
    
    if is_valid:
        print(f"✅ Version '{version}' is valid SemVer format")
        sys.exit(0)
    else:
        print(f"❌ Validation failed: {error}", file=sys.stderr)
        sys.exit(1)


if __name__ == "__main__":
    main()

