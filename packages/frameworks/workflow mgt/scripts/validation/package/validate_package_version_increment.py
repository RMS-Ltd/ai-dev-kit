#!/usr/bin/env python3
"""
Validate package version increment is valid.

This script validates that a version increment is valid (not backwards, not skipping versions).
It is used as a TOOL by the agent, not as a determiner of decisions.

Usage:
    python validate_package_version_increment.py <old_version> <new_version>
    
Example:
    python validate_package_version_increment.py 2.0.0 2.1.0
"""

import sys
from typing import Tuple, Optional, List


def parse_version(version: str) -> Tuple[int, int, int]:
    """Parse version string into (MAJOR, MINOR, PATCH) tuple."""
    parts = version.split('.')
    if len(parts) != 3:
        raise ValueError(f"Invalid version format: {version}")
    return (int(parts[0]), int(parts[1]), int(parts[2]))


def validate_version_increment(old_version: str, new_version: str) -> Tuple[bool, Optional[str]]:
    """
    Validate version increment is valid.
    
    Rules:
    - New version must be greater than old version
    - Only one component can increment at a time (MAJOR, MINOR, or PATCH)
    - Cannot skip versions (e.g., 1.0.0 → 1.2.0 without 1.1.0)
    
    Args:
        old_version: Previous version string
        new_version: New version string
        
    Returns:
        Tuple of (is_valid, error_message)
    """
    try:
        old_parts = parse_version(old_version)
        new_parts = parse_version(new_version)
    except ValueError as e:
        return False, str(e)
    
    # Check if new version is greater
    if new_parts <= old_parts:
        return False, f"New version '{new_version}' is not greater than old version '{old_version}'"
    
    # Check only one component incremented
    increments = sum(1 for i in range(3) if new_parts[i] > old_parts[i])
    if increments != 1:
        return False, f"Multiple components incremented: {old_version} → {new_version} (only one component should increment)"
    
    # Check no skipping (e.g., 1.0.0 -> 1.2.0 without 1.1.0)
    if new_parts[0] > old_parts[0]:  # MAJOR bump
        if new_parts[1] != 0 or new_parts[2] != 0:
            return False, f"MAJOR bump must reset MINOR and PATCH to 0: {old_version} → {new_version}"
    elif new_parts[1] > old_parts[1]:  # MINOR bump
        if new_parts[2] != 0:
            return False, f"MINOR bump must reset PATCH to 0: {old_version} → {new_version}"
    # PATCH bump is always valid (no reset required)
    
    return True, None


def main():
    """Main validation function."""
    if len(sys.argv) != 3:
        print("Usage: validate_package_version_increment.py <old_version> <new_version>", file=sys.stderr)
        sys.exit(1)
    
    old_version = sys.argv[1]
    new_version = sys.argv[2]
    
    is_valid, error = validate_version_increment(old_version, new_version)
    
    if is_valid:
        print(f"✅ Version increment is valid: {old_version} → {new_version}")
        sys.exit(0)
    else:
        print(f"❌ Validation failed: {error}", file=sys.stderr)
        sys.exit(1)


if __name__ == "__main__":
    main()

