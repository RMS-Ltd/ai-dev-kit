#!/usr/bin/env python3
"""
Validate package version consistency across all locations.

This script validates that package version is consistent across README, manifest files, and VERSION file.
It is used as a TOOL by the agent, not as a determiner of decisions.

Usage:
    python validate_package_version_consistency.py <package_path>
    
Example:
    python validate_package_version_consistency.py packages/frameworks/workflow\ mgt
"""

import sys
import re
from pathlib import Path
from typing import Dict, Optional, Tuple, List


def extract_version_from_readme(readme_path: Path) -> Optional[str]:
    """Extract version from README.md."""
    if not readme_path.exists():
        return None
    
    content = readme_path.read_text(encoding='utf-8')
    
    # Pattern: **Version:** X.Y.Z or version: "X.Y.Z"
    patterns = [
        r'\*\*Version:\*\*\s*(\d+\.\d+\.\d+)',
        r'version:\s*["\']?(\d+\.\d+\.\d+)["\']?',
        r'"version":\s*["\'](\d+\.\d+\.\d+)["\']',
    ]
    
    for pattern in patterns:
        match = re.search(pattern, content, re.IGNORECASE)
        if match:
            return match.group(1)
    
    return None


def extract_version_from_manifest(manifest_path: Path) -> Optional[str]:
    """Extract version from package manifest file."""
    if not manifest_path.exists():
        return None
    
    content = manifest_path.read_text(encoding='utf-8')
    
    # Pattern depends on file type
    if manifest_path.name == 'package.json':
        # JSON: "version": "X.Y.Z"
        match = re.search(r'"version":\s*["\'](\d+\.\d+\.\d+)["\']', content)
        if match:
            return match.group(1)
    elif manifest_path.name == 'pubspec.yaml':
        # YAML: version: X.Y.Z
        match = re.search(r'version:\s*(\d+\.\d+\.\d+)', content)
        if match:
            return match.group(1)
    elif manifest_path.name == 'pyproject.toml':
        # TOML: version = "X.Y.Z"
        match = re.search(r'version\s*=\s*["\'](\d+\.\d+\.\d+)["\']', content)
        if match:
            return match.group(1)
    elif manifest_path.name == 'Cargo.toml':
        # TOML: version = "X.Y.Z"
        match = re.search(r'version\s*=\s*["\'](\d+\.\d+\.\d+)["\']', content)
        if match:
            return match.group(1)
    
    return None


def extract_version_from_version_file(version_path: Path) -> Optional[str]:
    """Extract version from VERSION file."""
    if not version_path.exists():
        return None
    
    content = version_path.read_text(encoding='utf-8').strip()
    
    # Pattern: X.Y.Z (simple, one line)
    match = re.match(r'^(\d+\.\d+\.\d+)$', content)
    if match:
        return match.group(1)
    
    return None


def find_manifest_files(package_path: Path) -> List[Path]:
    """Find package manifest files."""
    manifests = []
    manifest_names = ['package.json', 'pubspec.yaml', 'pyproject.toml', 'Cargo.toml']
    
    for name in manifest_names:
        manifest_path = package_path / name
        if manifest_path.exists():
            manifests.append(manifest_path)
    
    return manifests


def validate_version_consistency(package_path: Path) -> Tuple[bool, List[str], Optional[str]]:
    """
    Validate version consistency across all locations.
    
    Args:
        package_path: Path to package directory
        
    Returns:
        Tuple of (is_consistent, errors, readme_version)
    """
    errors = []
    
    # Read version from README (source of truth)
    readme_path = package_path / 'README.md'
    readme_version = extract_version_from_readme(readme_path)
    
    if not readme_version:
        return False, ["No version found in README.md"], None
    
    # Check package manifest files
    manifest_files = find_manifest_files(package_path)
    for manifest_path in manifest_files:
        manifest_version = extract_version_from_manifest(manifest_path)
        if manifest_version and manifest_version != readme_version:
            errors.append(
                f"Version mismatch: README={readme_version}, "
                f"{manifest_path.name}={manifest_version}"
            )
    
    # Check VERSION file (if exists)
    version_file_path = package_path / 'VERSION'
    if version_file_path.exists():
        version_file_version = extract_version_from_version_file(version_file_path)
        if version_file_version and version_file_version != readme_version:
            errors.append(
                f"Version mismatch: README={readme_version}, "
                f"VERSION={version_file_version}"
            )
    
    return len(errors) == 0, errors, readme_version


def main():
    """Main validation function."""
    if len(sys.argv) != 2:
        print("Usage: validate_package_version_consistency.py <package_path>", file=sys.stderr)
        sys.exit(1)
    
    package_path = Path(sys.argv[1])
    
    if not package_path.exists():
        print(f"❌ Package path does not exist: {package_path}", file=sys.stderr)
        sys.exit(1)
    
    is_consistent, errors, readme_version = validate_version_consistency(package_path)
    
    if is_consistent:
        print(f"✅ Version consistency validated: {readme_version}")
        sys.exit(0)
    else:
        print(f"❌ Version consistency validation failed:", file=sys.stderr)
        for error in errors:
            print(f"  - {error}", file=sys.stderr)
        sys.exit(1)


if __name__ == "__main__":
    main()

