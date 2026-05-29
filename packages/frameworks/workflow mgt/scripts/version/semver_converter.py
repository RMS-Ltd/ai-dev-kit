#!/usr/bin/env python3
"""
SemVer Converter: Convert internal RC.EPIC.STORY.TASK+BUILD to SemVer MAJOR.MINOR.PATCH+BUILD

Uses Hybrid Approach:
- MAJOR = RC (direct mapping)
- MINOR = First-seen Epic number (sequential, per RC)
- PATCH = First-seen Story number (sequential, per RC)
- BUILD = Preserved from internal version

Registry-based mapping ensures monotonic SemVer increases while preserving semantic meaning.

1:1 Mapping (design invariant):
- Each internal version string maps to exactly one SemVer string (deterministic given the
  current registry). The converter is the single source of truth for this mapping.
- Each SemVer string produced by the converter corresponds to exactly one (RC, EPIC, STORY, BUILD)
  coordinate; TASK is not encoded in SemVer, so multiple tasks in the same story share the same
  MINOR.PATCH and are distinguished only by BUILD. For a given SemVer, reverse lookup returns
  (RC, EPIC, STORY, 0, BUILD) with TASK set to 0 (cannot be recovered from SemVer).
- Git tags must align: the SemVer tag and the internal tag for a release must point to the
  same commit. See dev-kit versioning policy Section 2.1 (1:1 mapping and tag alignment).
"""

import argparse
import yaml
import os
from pathlib import Path
from typing import Tuple, Dict, Any, Optional


def load_rw_config() -> Dict[str, Any]:
    """Load RW configuration from YAML file."""
    # Start from script location and walk up to find project root
    current = Path(__file__).parent
    while current != current.parent:
        config_file = current / "rw-config.yaml"
        if config_file.exists():
            break
        # Also check one level up (common project root location)
        parent_config = current.parent / "rw-config.yaml"
        if parent_config.exists():
            config_file = parent_config
            break
        current = current.parent
    
    # Default: assume project root is 4 levels up from scripts/version/
    if not 'config_file' in locals():
        config_file = Path(__file__).parent.parent.parent.parent.parent / "rw-config.yaml"
    
    if not config_file.exists():
        return {}
    
    try:
        with open(config_file, 'r', encoding='utf-8') as f:
            return yaml.safe_load(f) or {}
    except Exception as e:
        print(f"⚠️  Warning: Failed to load RW config: {e}")
        return {}


def get_semver_mapping_strategy() -> str:
    """
    Get the configured SemVer mapping strategy.
    
    Returns:
        "registry" (default) or "task_touch"
    """
    config = load_rw_config()
    strategy = config.get("semver_mapping_strategy", "registry")
    
    if strategy not in ["registry", "task_touch"]:
        print(f"⚠️  Warning: Invalid semver_mapping_strategy '{strategy}', using 'registry'")
        return "registry"
    
    return strategy


def get_rw_tag_info(internal_version: str, finalize: bool = False) -> Dict[str, str]:
    """
    Get tagging information for Release Workflow based on mapping strategy.
    
    Args:
        internal_version: Internal version string (e.g., "0.6.7.18+2")
    
    Returns:
        Dictionary with tagging information:
        - strategy: "registry" or "task_touch"
        - primary_tag: Main tag to create (e.g., "v0.6.7.18+2" or "v0.9.5")
        - internal_tag: Internal version tag (optional, for traceability)
        - semver_full: Full SemVer with BUILD (e.g., "0.9.5+2")
        - tag_message: Tag message content
    """
    strategy = get_semver_mapping_strategy()
    
    if strategy == "task_touch":
        # Task-touch mode: use SemVer as primary tag
        semver_full = convert_version_string(internal_version, strategy="task_touch", finalize=finalize)
        semver_tag = semver_full.split('+')[0]  # Remove BUILD for tag name
        
        return {
            "strategy": "task_touch",
            "primary_tag": f"v{semver_tag}",
            "internal_tag": f"v{internal_version}",
            "semver_full": semver_full,
            "tag_message": f"Release {semver_tag} (Internal: {internal_version})"
        }
    else:
        # Registry mode: use internal version as tag
        return {
            "strategy": "registry", 
            "primary_tag": f"v{internal_version}",
            "internal_tag": None,
            "semver_full": None,
            "tag_message": f"Release {internal_version}"
        }


def create_rw_tags(internal_version: str, create_internal_tag: bool = True) -> Dict[str, str]:
    """
    Create appropriate tags for Release Workflow based on mapping strategy.
    
    Args:
        internal_version: Internal version string (e.g., "0.6.7.18+2")
        create_internal_tag: Whether to create internal tag in task-touch mode
    
    Returns:
        Dictionary with created tags information
    """
    # Tag creation is the release-finalization boundary for task_touch mode.
    tag_info = get_rw_tag_info(internal_version, finalize=True)
    created_tags = []
    
    # Create primary tag
    primary_tag = tag_info["primary_tag"]
    tag_message = tag_info["tag_message"]
    
    try:
        import subprocess
        result = subprocess.run(
            ["git", "tag", "-a", primary_tag, "-m", tag_message],
            capture_output=True,
            text=True,
            check=True
        )
        created_tags.append(primary_tag)
        print(f"✅ Created primary tag: {primary_tag}")
    except subprocess.CalledProcessError as e:
        if "already exists" in e.stderr:
            if tag_info["strategy"] == "task_touch":
                internal_tag = tag_info.get("internal_tag")
                has_internal_tag = False
                if internal_tag:
                    check_internal = subprocess.run(
                        ["git", "rev-parse", "-q", "--verify", f"refs/tags/{internal_tag}"],
                        capture_output=True,
                        text=True,
                    )
                    has_internal_tag = check_internal.returncode == 0
                if has_internal_tag:
                    print(f"⚠️  Tag {primary_tag} already exists (idempotent replay with {internal_tag})")
                else:
                    raise RuntimeError(
                        "SemVer tag collision at RW boundary: "
                        f"{primary_tag} already exists without matching internal tag "
                        f"{internal_tag or '<none>'}. Resolve tag ownership/mapping before retrying."
                    )
            else:
                print(f"⚠️  Tag {primary_tag} already exists")
        else:
            raise e
    
    # Create internal tag for task-touch mode (optional)
    if tag_info["strategy"] == "task_touch" and create_internal_tag and tag_info["internal_tag"]:
        internal_tag = tag_info["internal_tag"]
        internal_message = f"Internal version for {tag_info['primary_tag']}"
        
        try:
            result = subprocess.run(
                ["git", "tag", "-a", internal_tag, "-m", internal_message],
                capture_output=True,
                text=True,
                check=True
            )
            created_tags.append(internal_tag)
            print(f"✅ Created internal tag: {internal_tag}")
        except subprocess.CalledProcessError as e:
            if "already exists" in e.stderr:
                print(f"⚠️  Internal tag {internal_tag} already exists")
            else:
                raise e
    
    return {
        "strategy": tag_info["strategy"],
        "primary_tag": primary_tag,
        "internal_tag": tag_info["internal_tag"] if tag_info["internal_tag"] else None,
        "created_tags": created_tags,
        "semver_full": tag_info["semver_full"]
    }


def find_registry_file() -> Path:
    """Find semver-registry.yaml in project root."""
    # Start from script location and walk up to find project root
    current = Path(__file__).parent
    while current != current.parent:
        registry_file = current / "semver-registry.yaml"
        if registry_file.exists():
            return registry_file
        # Also check one level up (common project root location)
        parent_registry = current.parent / "semver-registry.yaml"
        if parent_registry.exists():
            return parent_registry
        current = current.parent
    # Default: assume project root is 4 levels up from scripts/version/
    return Path(__file__).parent.parent.parent.parent.parent / "semver-registry.yaml"


def load_semver_registry() -> Dict[str, Any]:
    """Load SemVer registry from YAML file."""
    registry_file = find_registry_file()
    
    if not registry_file.exists():
        # Create empty registry structure with task-touch support
        return {
            "rc_0": {
                "epic_to_minor": {}, 
                "story_to_patch": {},
                "task_touch_mode": {
                    "epic_count": 0,
                    "task_touch_counter": 0,
                    "mapping_history": []
                }
            },
            "rc_1": {
                "epic_to_minor": {}, 
                "story_to_patch": {},
                "task_touch_mode": {
                    "epic_count": 0,
                    "task_touch_counter": 0,
                    "mapping_history": []
                }
            }
        }
    
    try:
        with open(registry_file, 'r', encoding='utf-8') as f:
            registry = yaml.safe_load(f) or {}
        
        # Ensure rc_0 and rc_1 exist with full structure
        for rc_key in ["rc_0", "rc_1"]:
            if rc_key not in registry:
                registry[rc_key] = {"epic_to_minor": {}, "story_to_patch": {}}
            
            rc_scope = registry[rc_key]
            
            # Add task_touch_mode section if missing
            if "task_touch_mode" not in rc_scope:
                rc_scope["task_touch_mode"] = {
                    "epic_count": 0,
                    "task_touch_counter": 0,
                    "mapping_history": []
                }
            
            # Ensure backward compatibility
            if "epic_to_minor" not in rc_scope:
                rc_scope["epic_to_minor"] = {}
            if "story_to_patch" not in rc_scope:
                rc_scope["story_to_patch"] = {}
        
        return registry
    except Exception as e:
        print(f"⚠️  Warning: Failed to load registry: {e}")
        return {
            "rc_0": {
                "epic_to_minor": {}, 
                "story_to_patch": {},
                "task_touch_mode": {
                    "epic_count": 0,
                    "task_touch_counter": 0,
                    "mapping_history": []
                }
            },
            "rc_1": {
                "epic_to_minor": {}, 
                "story_to_patch": {},
                "task_touch_mode": {
                    "epic_count": 0,
                    "task_touch_counter": 0,
                    "mapping_history": []
                }
            }
        }


def save_semver_registry(registry: Dict[str, Any]) -> None:
    """Save SemVer registry to YAML file."""
    registry_file = find_registry_file()
    
    # Ensure directory exists
    registry_file.parent.mkdir(parents=True, exist_ok=True)
    
    with open(registry_file, 'w', encoding='utf-8') as f:
        yaml.dump(registry, f, default_flow_style=False, sort_keys=False, allow_unicode=True)


def convert_internal_to_semver(rc: int, epic: int, story: int, task: int, build: int) -> Tuple[int, int, int, int]:
    """
    Convert internal RC.EPIC.STORY.TASK+BUILD to SemVer MAJOR.MINOR.PATCH+BUILD.

    One internal version always yields exactly one SemVer (1:1 forward mapping).
    
    Uses Hybrid Approach:
    - MAJOR = RC (direct mapping)
    - MINOR = First-seen Epic number (sequential, per RC)
    - PATCH = First-seen Story number (sequential, per RC)
    - BUILD = Preserved from internal version
    
    Args:
        rc: Release Candidate (0 = development, 1+ = release candidate)
        epic: Epic number
        story: Story number within epic
        task: Task number within story (not used in mapping, but preserved for reference)
        build: Build number (preserved in SemVer)
    
    Returns:
        Tuple of (major, minor, patch, build) for SemVer
    """
    registry = load_semver_registry()
    
    # Get RC scope
    rc_key = f"rc_{rc}"
    if rc_key not in registry:
        registry[rc_key] = {"epic_to_minor": {}, "story_to_patch": {}}
    
    rc_scope = registry[rc_key]
    epic_to_minor = rc_scope.get("epic_to_minor", {})
    story_to_patch = rc_scope.get("story_to_patch", {})
    
    # MAJOR = RC (direct mapping)
    major = rc
    
    # MINOR = First-seen Epic number (sequential, per RC)
    epic_key = epic
    if epic_key not in epic_to_minor:
        # New epic - assign next MINOR number
        existing_minors = list(epic_to_minor.values())
        minor = max(existing_minors) + 1 if existing_minors else 1
        epic_to_minor[epic_key] = minor
        rc_scope["epic_to_minor"] = epic_to_minor
    else:
        minor = epic_to_minor[epic_key]
    
    # PATCH = First-seen Story number (sequential, per RC)
    story_key = f"({epic},{story})"  # String key for (Epic, Story) combination
    if story_key not in story_to_patch:
        # New story - assign next PATCH number within this RC
        existing_patches = list(story_to_patch.values())
        patch = max(existing_patches) + 1 if existing_patches else 1
        story_to_patch[story_key] = patch
        rc_scope["story_to_patch"] = story_to_patch
    else:
        patch = story_to_patch[story_key]
    
    # BUILD = Preserved from internal version
    build_semver = build
    
    # Save updated registry
    save_semver_registry(registry)
    
    return (major, minor, patch, build_semver)


def get_epic_count(rc: int) -> int:
    """
    Get the count of epics signed off for a given RC.
    
    Args:
        rc: Release Candidate number
        
    Returns:
        Number of epics signed off for this RC
    """
    registry = load_semver_registry()
    rc_key = f"rc_{rc}"
    
    if rc_key not in registry:
        return 0
    
    rc_scope = registry[rc_key]
    task_touch_mode = rc_scope.get("task_touch_mode", {})
    
    return task_touch_mode.get("epic_count", 0)


def set_epic_count(rc: int, count: int) -> None:
    """
    Set the epic count for a given RC.
    
    Args:
        rc: Release Candidate number
        count: Number of epics signed off
    """
    registry = load_semver_registry()
    rc_key = f"rc_{rc}"
    
    if rc_key not in registry:
        registry[rc_key] = {"epic_to_minor": {}, "story_to_patch": {}, "task_touch_mode": {}}
    
    if "task_touch_mode" not in registry[rc_key]:
        registry[rc_key]["task_touch_mode"] = {}
    
    registry[rc_key]["task_touch_mode"]["epic_count"] = count
    save_semver_registry(registry)


def get_task_touch_counter(rc: int) -> int:
    """
    Get the current task-touch counter for a given RC.
    
    Args:
        rc: Release Candidate number
        
    Returns:
        Current task-touch counter value
    """
    registry = load_semver_registry()
    rc_key = f"rc_{rc}"
    
    if rc_key not in registry:
        return 0
    
    rc_scope = registry[rc_key]
    task_touch_mode = rc_scope.get("task_touch_mode", {})
    
    return task_touch_mode.get("task_touch_counter", 0)


def increment_task_touch_counter(rc: int) -> int:
    """
    Increment the task-touch counter and return the new value.
    
    Args:
        rc: Release Candidate number
        
    Returns:
        New task-touch counter value after increment
    """
    registry = load_semver_registry()
    rc_key = f"rc_{rc}"
    
    if rc_key not in registry:
        registry[rc_key] = {"epic_to_minor": {}, "story_to_patch": {}, "task_touch_mode": {}}
    
    if "task_touch_mode" not in registry[rc_key]:
        registry[rc_key]["task_touch_mode"] = {"epic_count": 0, "task_touch_counter": 0, "mapping_history": []}
    
    task_touch_mode = registry[rc_key]["task_touch_mode"]
    current_counter = task_touch_mode.get("task_touch_counter", 0)
    new_counter = current_counter + 1
    task_touch_mode["task_touch_counter"] = new_counter
    
    save_semver_registry(registry)
    return new_counter


def _ensure_task_touch_mode(registry: Dict[str, Any], rc: int) -> Dict[str, Any]:
    rc_key = f"rc_{rc}"
    if rc_key not in registry:
        registry[rc_key] = {"epic_to_minor": {}, "story_to_patch": {}, "task_touch_mode": {}}
    if "task_touch_mode" not in registry[rc_key]:
        registry[rc_key]["task_touch_mode"] = {"epic_count": 0, "task_touch_counter": 0, "mapping_history": []}
    ttm = registry[rc_key]["task_touch_mode"]
    if "epic_count" not in ttm:
        ttm["epic_count"] = 0
    if "task_touch_counter" not in ttm:
        ttm["task_touch_counter"] = 0
    if "mapping_history" not in ttm or not isinstance(ttm["mapping_history"], list):
        ttm["mapping_history"] = []
    return ttm


def _find_mapping_entry(task_touch_mode: Dict[str, Any], internal_version: str) -> Optional[Dict[str, Any]]:
    history = task_touch_mode.get("mapping_history", [])
    for entry in history:
        if isinstance(entry, dict) and entry.get("internal_version") == internal_version:
            return entry
    return None


def _find_mapping_entry_by_semver(task_touch_mode: Dict[str, Any], semver: str) -> Optional[Dict[str, Any]]:
    history = task_touch_mode.get("mapping_history", [])
    for entry in history:
        if isinstance(entry, dict) and entry.get("semver") == semver:
            return entry
    return None


def _record_mapping_entry(
    task_touch_mode: Dict[str, Any],
    *,
    internal_version: str,
    semver: str,
    patch: int,
    rc: int,
    epic: int,
    story: int,
    task: int,
    build: int,
) -> None:
    history = task_touch_mode.get("mapping_history", [])
    history.append(
        {
            "internal_version": internal_version,
            "semver": semver,
            "patch": patch,
            "rc": rc,
            "epic": epic,
            "story": story,
            "task": task,
            "build": build,
        }
    )
    task_touch_mode["mapping_history"] = history


def convert_internal_to_semver_task_touch(
    rc: int,
    epic: int,
    story: int,
    task: int,
    build: int,
    *,
    finalize: bool = False,
) -> Tuple[int, int, int, int]:
    """
    Convert internal RC.EPIC.STORY.TASK+BUILD to SemVer using task-touch derived mapping.
    
    Uses Task-Touch Derived Mapping (ADR-002):
    - MAJOR = RC (direct mapping)
    - MINOR = count of epics signed off (per RC)
    - PATCH = global task-touch counter (increments once per RW release)
    - BUILD = preserved from internal version
    
    This provides strictly monotonic SemVer sequences suitable for package managers.
    
    Args:
        rc: Release Candidate (0 = development, 1+ = release candidate)
        epic: Epic number (not used in mapping, but preserved for reference)
        story: Story number (not used in mapping, but preserved for reference)
        task: Task number (not used in mapping, but preserved for reference)
        build: Build number (preserved in SemVer)
    
    Returns:
        Tuple of (major, minor, patch, build) for SemVer
    """
    registry = load_semver_registry()
    task_touch_mode = _ensure_task_touch_mode(registry, rc)
    internal_version = f"{rc}.{epic}.{story}.{task}+{build}"

    major = rc
    minor = task_touch_mode.get("epic_count", 0)
    build_semver = build

    existing = _find_mapping_entry(task_touch_mode, internal_version)
    if existing:
        patch = int(existing["patch"])
        return (major, minor, patch, build_semver)

    current_counter = int(task_touch_mode.get("task_touch_counter", 0))
    patch = current_counter + 1

    if finalize:
        semver = format_semver(major, minor, patch, build_semver)
        existing_semver_owner = _find_mapping_entry_by_semver(task_touch_mode, semver)
        if existing_semver_owner and existing_semver_owner.get("internal_version") != internal_version:
            raise ValueError(
                "SemVer collision detected during finalize: "
                f"{semver} already mapped to {existing_semver_owner.get('internal_version')}, "
                f"cannot assign to {internal_version}."
            )
        task_touch_mode["task_touch_counter"] = patch
        _record_mapping_entry(
            task_touch_mode,
            internal_version=internal_version,
            semver=semver,
            patch=patch,
            rc=rc,
            epic=epic,
            story=story,
            task=task,
            build=build,
        )
        save_semver_registry(registry)

    return (major, minor, patch, build_semver)


def format_semver(major: int, minor: int, patch: int, build: int) -> str:
    """Format SemVer as MAJOR.MINOR.PATCH+BUILD string."""
    return f"{major}.{minor}.{patch}+{build}"


def semver_to_internal(semver: str) -> Optional[Tuple[int, int, int, int, int]]:
    """
    Reverse conversion: SemVer string to internal (RC, EPIC, STORY, TASK, BUILD).

    Given the current registry, returns the unique internal coordinate that would produce
    this SemVer. TASK is not encoded in SemVer, so it is returned as 0 (cannot be recovered).
    Returns None if the SemVer cannot be produced by the current registry (e.g. unknown
    MINOR or PATCH).

    Args:
        semver: SemVer string (e.g. "0.5.39+2")

    Returns:
        (rc, epic, story, task, build) with task=0, or None if not in registry.
    """
    parts = semver.split("+")
    if len(parts) != 2:
        return None
    try:
        build = int(parts[1])
    except ValueError:
        return None
    version_parts = parts[0].split(".")
    if len(version_parts) != 3:
        return None
    try:
        major, minor, patch = int(version_parts[0]), int(version_parts[1]), int(version_parts[2])
    except ValueError:
        return None
    rc = major
    registry = load_semver_registry()
    rc_key = f"rc_{rc}"
    if rc_key not in registry:
        return None
    rc_scope = registry[rc_key]
    epic_to_minor = rc_scope.get("epic_to_minor", {})
    story_to_patch = rc_scope.get("story_to_patch", {})
    minor_to_epic = {v: k for k, v in epic_to_minor.items()}
    patch_to_story = {v: k for k, v in story_to_patch.items()}
    if minor not in minor_to_epic or patch not in patch_to_story:
        return None
    epic = minor_to_epic[minor]
    story_key = patch_to_story[patch]
    if not isinstance(story_key, str) or not story_key.startswith("(") or not story_key.endswith(")"):
        return None
    inner = story_key[1:-1].split(",")
    if len(inner) != 2:
        return None
    try:
        story_epic, story = int(inner[0]), int(inner[1])
    except ValueError:
        return None
    if story_epic != epic:
        return None
    return (rc, epic, story, 0, build)


def convert_version_string(
    internal_version: str,
    strategy: Optional[str] = None,
    finalize: bool = False,
) -> str:
    """
    Convert internal version string to SemVer string.
    
    Args:
        internal_version: Internal version string (e.g., "0.6.7.101+24")
        strategy: Mapping strategy ("registry", "task_touch", or None to use config)
    
    Returns:
        SemVer string (e.g., "0.1.1+24")
    """
    # Parse internal version: RC.EPIC.STORY.TASK+BUILD
    parts = internal_version.split('+')
    if len(parts) != 2:
        raise ValueError(f"Invalid internal version format: {internal_version}")
    
    build = int(parts[1])
    version_parts = parts[0].split('.')
    
    if len(version_parts) != 4:
        raise ValueError(f"Invalid internal version format: {internal_version}")
    
    rc = int(version_parts[0])
    epic = int(version_parts[1])
    story = int(version_parts[2])
    task = int(version_parts[3])
    
    # Determine strategy
    if strategy is None:
        strategy = get_semver_mapping_strategy()
    
    # Convert based on strategy
    if strategy == "task_touch":
        major, minor, patch, build_semver = convert_internal_to_semver_task_touch(
            rc, epic, story, task, build, finalize=finalize
        )
    else:  # registry (default)
        major, minor, patch, build_semver = convert_internal_to_semver(rc, epic, story, task, build)
    
    return format_semver(major, minor, patch, build_semver)


if __name__ == "__main__":
    import sys

    parser = argparse.ArgumentParser(description="Convert internal version to SemVer.")
    parser.add_argument("internal_version", help="Internal version string, e.g. 0.6.7.101+24")
    parser.add_argument(
        "--strategy",
        choices=["registry", "task_touch"],
        default=None,
        help="Override mapping strategy (defaults to rw-config.yaml)",
    )
    parser.add_argument(
        "--finalize",
        action="store_true",
        help="Finalize task_touch mapping (mutates registry once for this internal version).",
    )
    args = parser.parse_args()

    try:
        semver = convert_version_string(
            args.internal_version,
            strategy=args.strategy,
            finalize=args.finalize,
        )
        print(semver)
    except Exception as e:
        print(f"❌ Error: {e}", file=sys.stderr)
        sys.exit(1)
