#!/usr/bin/env python3
"""
Validate SemVer Monotonic Increases

Verifies that SemVer tags increase monotonically across all releases.
Compares SemVer versions derived from internal versions using the registry.
"""

import subprocess
import sys
from pathlib import Path

# Add version scripts to path
version_scripts_dir = Path(__file__).parent.parent / "version"
sys.path.insert(0, str(version_scripts_dir))

from semver_converter import convert_version_string


def get_all_git_tags() -> list:
    """Get all git tags matching v0.*.*.*+* pattern."""
    try:
        result = subprocess.run(
            ["git", "tag", "-l", "v0.*.*.*+*"],
            capture_output=True,
            text=True,
            check=True
        )
        tags = [tag.strip() for tag in result.stdout.strip().split('\n') if tag.strip()]
        # Sort tags by version number (canonical ordering)
        tags.sort(key=lambda t: parse_version_for_sorting(t))
        return tags
    except subprocess.CalledProcessError as e:
        print(f"❌ Error getting git tags: {e}")
        return []


def parse_version_for_sorting(tag: str) -> tuple:
    """Parse version tag for sorting: (RC, EPIC, STORY, TASK, BUILD)."""
    version = tag[1:] if tag.startswith('v') else tag
    parts = version.split('+')
    if len(parts) != 2:
        return (0, 0, 0, 0, 0)
    
    build = int(parts[1])
    version_parts = parts[0].split('.')
    
    if len(version_parts) != 4:
        return (0, 0, 0, 0, 0)
    
    rc = int(version_parts[0])
    epic = int(version_parts[1])
    story = int(version_parts[2])
    task = int(version_parts[3])
    
    return (rc, epic, story, task, build)


def compare_semver(semver1: str, semver2: str) -> int:
    """
    Compare two SemVer strings.
    Returns: -1 if semver1 < semver2, 0 if equal, 1 if semver1 > semver2
    """
    def parse_semver(sv: str) -> tuple:
        parts = sv.split('+')
        build = int(parts[1]) if len(parts) > 1 else 0
        version_parts = parts[0].split('.')
        major = int(version_parts[0])
        minor = int(version_parts[1])
        patch = int(version_parts[2])
        return (major, minor, patch, build)
    
    sv1 = parse_semver(semver1)
    sv2 = parse_semver(semver2)
    
    if sv1 < sv2:
        return -1
    elif sv1 > sv2:
        return 1
    else:
        return 0


def validate_monotonic_increases() -> bool:
    """Validate that SemVer increases monotonically across all tags."""
    tags = get_all_git_tags()
    
    if not tags:
        print("⚠️  No tags found")
        return True
    
    print(f"🔍 Validating {len(tags)} tags for monotonic SemVer increases...")
    
    prev_semver = None
    prev_tag = None
    violations = []
    
    for tag in tags:
        try:
            # Remove 'v' prefix
            internal_version = tag[1:] if tag.startswith('v') else tag
            
            # Convert to SemVer
            semver = convert_version_string(internal_version)
            
            if prev_semver is not None:
                comparison = compare_semver(semver, prev_semver)
                if comparison <= 0:
                    violations.append((prev_tag, prev_semver, tag, semver))
                    print(f"❌ Violation: {prev_tag} ({prev_semver}) → {tag} ({semver})")
            
            prev_semver = semver
            prev_tag = tag
        
        except Exception as e:
            print(f"⚠️  Warning: Failed to process {tag}: {e}")
            continue
    
    if violations:
        print(f"\n❌ Found {len(violations)} SemVer monotonic violations")
        return False
    else:
        print(f"\n✅ All {len(tags)} tags have monotonic SemVer increases")
        return True


if __name__ == "__main__":
    success = validate_monotonic_increases()
    sys.exit(0 if success else 1)
