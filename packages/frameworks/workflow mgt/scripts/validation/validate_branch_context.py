#!/usr/bin/env python3
"""
Branch Context Validator

This script validates that:
1. Current branch matches the work being done
2. Version number matches branch schema
3. CHANGELOG entries match the branch
4. No cross-epic contamination

Run this BEFORE every commit to prevent branch mix-ups.

Usage:
    python scripts/validation/validate_branch_context.py [--strict]
    python scripts/validation/validate_branch_context.py --requested E6:S06:T58 --art [--strict]

    --strict: Exit with error code if validation fails (for pre-commit hooks)
"""

import argparse
import re
import subprocess
import sys
from pathlib import Path
from typing import Optional, Dict, Tuple, List

try:
    import yaml
except ImportError:
    yaml = None

def load_rw_config(project_root: Path = None) -> Optional[Dict]:
    """Load rw-config.yaml if it exists."""
    if project_root is None:
        project_root = Path.cwd()
    
    config_path = project_root / "rw-config.yaml"
    if not config_path.exists() or yaml is None:
        return None
    
    try:
        with open(config_path, 'r', encoding='utf-8') as f:
            return yaml.safe_load(f)
    except Exception:
        return None


def get_version_file_path(config: Optional[Dict] = None) -> Path:
    """Get version file path from config or use default."""
    if config and 'version_file' in config:
        return Path(config['version_file'])
    # Default fallback
    return Path("src/fynd_deals/version.py")


def normalize_versioning_mode(config: Optional[Dict]) -> str:
    """
    Normalize versioning_mode from rw-config.

    Returns one of:
    - dual
    - semver_only
    - kanban_only
    - legacy (missing/unknown for backward compatibility)
    """
    if not config:
        return "legacy"
    raw_mode = str(config.get("versioning_mode", "")).strip().lower()
    if raw_mode in {"dual", "semver_only", "kanban_only"}:
        return raw_mode
    return "legacy"


def validate_dual_mode_task_touch_invariant(config: Optional[Dict]) -> Tuple[bool, List[str], List[str]]:
    """
    Enforce FR-046 policy invariant:
    dual versioning mode requires semver_mapping_strategy=task_touch.
    """
    errors: List[str] = []
    warnings: List[str] = []
    mode = normalize_versioning_mode(config)
    strategy = None
    if config:
        strategy = str(config.get("semver_mapping_strategy", "registry")).strip().lower()

    if mode == "dual" and strategy != "task_touch":
        errors.append(
            "FR-046 policy violation: rw-config.yaml sets versioning_mode=dual "
            f"but semver_mapping_strategy={strategy!r}. Dual mode requires 'task_touch'."
        )
    elif mode == "legacy":
        warnings.append(
            "rw-config.yaml does not declare an explicit versioning_mode. "
            "Backward-compatible legacy mode applied (no dual-mode invariant enforcement)."
        )
    return (len(errors) == 0, errors, warnings)


def get_current_branch():
    """Get current git branch."""
    result = subprocess.run(
        ["git", "branch", "--show-current"], capture_output=True, text=True, check=True
    )
    return result.stdout.strip()


def get_version(config: Optional[Dict] = None):
    """Get version from version.py."""
    version_file = get_version_file_path(config)
    if not version_file.exists():
        return None
    # Try to import and get the actual version value
    try:
        import sys
        import importlib.util
        spec = importlib.util.spec_from_file_location("version", version_file)
        version_module = importlib.util.module_from_spec(spec)
        spec.loader.exec_module(version_module)
        return version_module.VERSION_STRING
    except (ImportError, AttributeError, Exception):
        # Fallback: Parse from file content
        content = version_file.read_text()
        # Match VERSION_STRING = f"0.9.21.17" or "0.9.21.3+1" or __version__ = "..."
        # Handle both f-strings and regular strings
        match = re.search(r'(?:VERSION_STRING|__version__)\s*=\s*(?:f?"|")([^"]+)', content)
        if match:
            version_str = match.group(1)
            # If it's an f-string template, try to evaluate it
            if '{' in version_str and '}' in version_str:
                # It's an f-string, we need to evaluate it
                # Extract the components and build the version
                rc_match = re.search(r'VERSION_RC\s*=\s*(\d+)', content)
                epic_match = re.search(r'VERSION_EPIC\s*=\s*(\d+)', content)
                story_match = re.search(r'VERSION_STORY\s*=\s*(\d+)', content)
                task_match = re.search(r'VERSION_TASK\s*=\s*(\d+)', content)
                build_match = re.search(r'VERSION_BUILD\s*=\s*(\d+)', content)
                if all([rc_match, epic_match, story_match, task_match, build_match]):
                    return f"{rc_match.group(1)}.{epic_match.group(1)}.{story_match.group(1)}.{task_match.group(1)}+{build_match.group(1)}"
            return version_str
        return None


def parse_branch_epic(branch: str, config: Optional[Dict] = None) -> Optional[int]:
    """Extract epic number from branch name (e.g., epic/10-fastapi-migration -> 10)."""
    # Match patterns like: epic/10, epic/10-fastapi-migration, epic/11-architecture-refactoring
    match = re.match(r"^epic/(\d+)", branch)
    if match:
        return int(match.group(1))
    # dev is an intentionally shared integration branch and does not carry
    # a strict epic lock; return None to skip epic/version enforcement.
    if branch == "dev":
        return None
    return None


def parse_requested_est(requested: str) -> Optional[Tuple[int, int, int]]:
    """Parse E:S:T token formats like E6:S06:T58 or E6S6T58."""
    if not requested:
        return None
    m = re.match(r"^E(\d+):S(\d+):T(\d+)$", requested.strip(), re.IGNORECASE)
    if m:
        return (int(m.group(1)), int(m.group(2)), int(m.group(3)))
    m = re.match(r"^E(\d+)S(\d+)T(\d+)$", requested.strip(), re.IGNORECASE)
    if m:
        return (int(m.group(1)), int(m.group(2)), int(m.group(3)))
    return None


def is_maintenance_branch(branch: str) -> bool:
    """
    Detect maintenance/update branches that should skip epic/version validation.

    Examples:
    - update/ai-dev-kit
    - maintenance/workflow-mgt
    - upgrade/deps
    """
    return re.match(r"^(update|maintenance|upgrade)/", branch) is not None


def parse_version_epic(version: str) -> Optional[int]:
    """Extract epic number from version string (RC.EPIC.STORY.PATCH or RC.EPIC.STORY.TASK+BUILD)."""
    # Format: RC.EPIC.STORY.PATCH (old) or RC.EPIC.STORY.TASK+BUILD (new)
    # Try new format first
    match = re.match(r"^(\d+)\.(\d+)\.(\d+)\.(\d+)\+(\d+)$", version)
    if match:
        return int(match.group(2))  # EPIC is the second component
    # Try old format
    match = re.match(r"^(\d+)\.(\d+)\.(\d+)\.(\d+)$", version)
    if match:
        return int(match.group(2))  # EPIC is the second component
    return None


def parse_version_story(version: str) -> Optional[int]:
    """Extract STORY number from version string (RC.EPIC.STORY.PATCH or RC.EPIC.STORY.TASK+BUILD)."""
    # Format: RC.EPIC.STORY.PATCH (old) or RC.EPIC.STORY.TASK+BUILD (new)
    # Try new format first
    match = re.match(r"^(\d+)\.(\d+)\.(\d+)\.(\d+)\+(\d+)$", version)
    if match:
        return int(match.group(3))  # STORY is the third component
    # Try old format
    match = re.match(r"^(\d+)\.(\d+)\.(\d+)\.(\d+)$", version)
    if match:
        return int(match.group(3))  # STORY is the third component
    return None


def parse_version_patch(version: str) -> Optional[int]:
    """Extract PATCH number from version string (RC.EPIC.STORY.PATCH)."""
    # Format: RC.EPIC.STORY.PATCH
    match = re.match(r"^(\d+)\.(\d+)\.(\d+)\.(\d+)$", version)
    if match:
        return int(match.group(4))  # PATCH is the fourth component
    return None


def parse_version_task(version: str) -> Optional[int]:
    """Extract TASK number from RC.EPIC.STORY.TASK+BUILD."""
    match = re.match(r"^(\d+)\.(\d+)\.(\d+)\.(\d+)\+(\d+)$", version)
    if match:
        return int(match.group(4))
    return None


def is_perpetual_task_content(content: str) -> bool:
    """True if task document text indicates perpetual maintenance (UKW/CMW-style)."""
    low = content.lower()
    return (
        "task type:** perpetual maintenance" in low
        or "perpetual_task: true" in low
        or "status:** in progress (perpetual)" in low
    )


def version_anchors_perpetual_task(version: str, config: Optional[Dict]) -> bool:
    """Whether version.py E/S/T resolves to a perpetual task doc (if found)."""
    ve = parse_version_epic(version)
    vs = parse_version_story(version)
    vt = parse_version_task(version)
    if ve is None or vs is None or vt is None:
        return False
    _path, content, fmt = locate_task_doc_for_version(ve, vs, vt, config)
    if not content or fmt == "not_found":
        return False
    return is_perpetual_task_content(content)


def locate_task_doc_for_version(
    epic: int,
    story: int,
    task: int,
    config: Optional[Dict] = None
) -> Tuple[Optional[Path], Optional[str], str]:
    """
    Locate Task document for given epic/story/task.
    
    Returns:
        (task_doc_path, task_doc_content, format_type)
    """
    project_root = Path.cwd()
    
    if config and config.get('use_kanban') and 'kanban_root' in config:
        kanban_root = Path(config['kanban_root'])
        if not kanban_root.is_absolute():
            kanban_root = project_root / kanban_root
    else:
        kanban_root = project_root / "docs/project-management/kanban"
    
    epic_dir = kanban_root / f"epics/Epic-{epic}"
    
    # Format 1: Separate file under canonical or numeric Story-* dir
    story_dir = epic_dir / f"Story-{story:03d}"
    if not story_dir.exists():
        story_dir = epic_dir / f"Story-{story}"
    if story_dir.exists():
        task_files = list(story_dir.glob(f"Task-{task:03d}-*.md"))
        if not task_files:
            task_files = list(story_dir.glob(f"T{task:03d}-*.md"))
        if not task_files:
            task_files = list(story_dir.glob(f"T{task:02d}-*.md"))
        if not task_files:
            task_files = list(story_dir.glob(f"T{task}-*.md"))
        if not task_files:
            task_files = list(story_dir.glob(f"E{epic:02d}S{story:02d}T{task:02d}-*.md"))
        if task_files:
            task_file = task_files[0]
            return (task_file, task_file.read_text(), "separate_file")
    
    # Format 1b: Task file under descriptive Story-* folder (e.g. Story-001-codebase-maintenance-tasks/)
    if epic_dir.is_dir():
        patterns = [
            f"Task-{task:03d}-*.md",
            f"T{task:03d}-*.md",
            f"T{task:02d}-*.md",
            f"T{task}-*.md",
            f"E{epic:02d}S{story:02d}T{task:02d}-*.md",
        ]
        for pat in patterns:
            hits = sorted(epic_dir.rglob(pat))
            if hits:
                task_file = hits[0]
                return (task_file, task_file.read_text(), "separate_file")
    
    # Format 2: Delimited section (would need Story file, skip for now in branch context)
    return (None, None, "not_found")


def is_documentation_file(file_path: Path) -> bool:
    """
    Check if a file is considered documentation-only.
    
    Documentation files include:
    - Markdown files (.md)
    - README files (README.md, README.txt, etc.)
    - CHANGELOG files (CHANGELOG.md, CHANGELOG.txt, etc.)
    - Files in docs/ directory
    - Files in packages/frameworks/*/ directories (framework docs)
    - Files in docs/ directory
    - Kanban documentation (Epic, Story, Task docs)
    - YAML config files (rw-config.yaml, etc.) - considered docs
    - Text files (.txt)
    
    Non-documentation files include:
    - Python files (.py) - except if in docs/ or docs/
    - JavaScript/TypeScript files (.js, .ts, .jsx, .tsx)
    - Other code files (.java, .go, .rs, etc.)
    - Binary files
    """
    file_str = str(file_path)
    
    # Always documentation: markdown files
    if file_path.suffix.lower() == '.md':
        return True

    # Root agent / workspace policy (text, not product code) — allow in doc-init (+0) releases
    if file_path.name == ".cursorrules":
        return True
    
    # Always documentation: README and CHANGELOG files
    file_name_lower = file_path.name.lower()
    if file_name_lower.startswith('readme') or file_name_lower.startswith('changelog'):
        return True
    
    # Always documentation: docs/ directory
    if 'docs/' in file_str or file_str.startswith('docs/'):
        return True
    
    # Always documentation: packages/frameworks/*/ directories (framework docs)
    if 'packages/frameworks/' in file_str:
        return True
    
    # Always documentation: docs/ directory
    if 'docs/' in file_str or file_str.startswith('docs/'):
        return True
    
    # Always documentation: YAML config files (rw-config.yaml, etc.)
    if file_path.suffix.lower() in ['.yaml', '.yml']:
        return True
    
    # Always documentation: text files
    if file_path.suffix.lower() == '.txt':
        return True
    
    # Python files in docs/ or docs/ are documentation
    if file_path.suffix.lower() == '.py':
        if 'docs/' in file_str or 'docs/' in file_str or file_str.startswith('docs/') or file_str.startswith('docs/'):
            return True
        # Python files elsewhere are code
        return False
    
    # Other code file extensions are not documentation
    code_extensions = {'.js', '.ts', '.jsx', '.tsx', '.java', '.go', '.rs', '.cpp', '.c', '.h', '.hpp', '.cs', '.rb', '.php', '.swift', '.kt', '.scala', '.clj', '.sh', '.bash', '.zsh'}
    if file_path.suffix.lower() in code_extensions:
        return False
    
    # Binary or unknown files - default to not documentation
    # (conservative: if unsure, treat as non-doc)
    return False


def get_changed_files(project_root: Path = None) -> List[Path]:
    """
    Get list of changed files from git (staged + unstaged).
    
    Returns:
        List of Path objects for changed files
    """
    if project_root is None:
        project_root = Path.cwd()
    
    changed_files = []
    
    # Get staged files
    try:
        result = subprocess.run(
            ["git", "diff", "--cached", "--name-only"],
            cwd=project_root,
            capture_output=True,
            text=True,
            check=False
        )
        if result.returncode == 0:
            for line in result.stdout.strip().split('\n'):
                if line.strip():
                    changed_files.append(project_root / line.strip())
    except Exception:
        pass
    
    # Get unstaged files
    try:
        result = subprocess.run(
            ["git", "diff", "--name-only"],
            cwd=project_root,
            capture_output=True,
            text=True,
            check=False
        )
        if result.returncode == 0:
            for line in result.stdout.strip().split('\n'):
                if line.strip():
                    file_path = project_root / line.strip()
                    if file_path not in changed_files:
                        changed_files.append(file_path)
    except Exception:
        pass
    
    # Also check for untracked files (new files)
    try:
        result = subprocess.run(
            ["git", "ls-files", "--others", "--exclude-standard"],
            cwd=project_root,
            capture_output=True,
            text=True,
            check=False
        )
        if result.returncode == 0:
            for line in result.stdout.strip().split('\n'):
                if line.strip():
                    file_path = project_root / line.strip()
                    if file_path not in changed_files:
                        changed_files.append(file_path)
    except Exception:
        pass
    
    return changed_files


def validate_doc_init_build(version: str, config: Optional[Dict] = None) -> Tuple[bool, list]:
    """
    Validate that a doc-init build (+0) only contains documentation changes.
    
    Args:
        version: Version string (RC.EPIC.STORY.TASK+BUILD)
        config: Optional config dict
    
    Returns:
        (is_valid, list_of_errors)
    """
    errors = []
    
    # Parse version to check BUILD component
    match = re.match(r"^(\d+)\.(\d+)\.(\d+)\.(\d+)\+(\d+)$", version)
    if not match:
        # Old format or invalid, skip doc-init validation
        return True, []
    
    build = int(match.group(5))
    
    # Check if this is a doc-init build (BUILD = 0)
    if build != 0:
        # Not a doc-init build, skip validation
        return True, []
    
    print(f"🔍 Doc-init build detected (BUILD=0) - validating docs-only changes...")
    
    # Get project root
    project_root = Path.cwd()

    allowed_non_doc_relpaths = set()
    version_file_path = get_version_file_path(config)
    try:
        vp = (project_root / version_file_path).resolve().relative_to(project_root.resolve())
        allowed_non_doc_relpaths.add(str(vp))
    except Exception:
        pass

    # Get changed files
    changed_files = get_changed_files(project_root)
    
    if not changed_files:
        # No changed files - this might be a validation run before changes are staged
        print("⚠️  No changed files detected. This may be normal if validation runs before staging.")
        return True, []
    
    # Check each changed file
    non_doc_files = []
    for file_path in changed_files:
        # Skip if file doesn't exist (might be deleted)
        if not file_path.exists():
            continue

        try:
            rel_path = str(file_path.relative_to(project_root))
        except ValueError:
            rel_path = str(file_path)

        if rel_path in allowed_non_doc_relpaths:
            continue
        
        if not is_documentation_file(file_path):
            non_doc_files.append(file_path)
    
    if non_doc_files:
        errors.append(
            f"❌ DOC-INIT VALIDATION FAILED: Doc-init build (BUILD=0) contains non-documentation changes:\n"
        )
        for non_doc_file in non_doc_files:
            rel_path = str(non_doc_file.relative_to(project_root))
            errors.append(f"   - {rel_path}")
        errors.append(
            f"\n   Doc-init builds (+0) must only contain documentation changes.\n"
            f"   Documentation files include: .md files, README, CHANGELOG, docs/, packages/frameworks/, docs/, .yaml, .txt\n"
            f"   Code files (.py, .js, .ts, etc.) are not allowed in doc-init builds."
        )
        return False, errors
    
    print(f"✅ Doc-init validation passed: All {len(changed_files)} changed files are documentation-only.")
    return True, []


def check_task_doc_presence(version: str, config: Optional[Dict] = None) -> Tuple[bool, list]:
    """
    Check if Task document exists for current version.
    
    Returns:
        (is_valid, list_of_warnings)
    """
    warnings = []
    
    # Parse version components
    version_epic = parse_version_epic(version)
    version_story = parse_version_story(version)
    
    # Extract task from version (new format: RC.EPIC.STORY.TASK+BUILD)
    match = re.match(r"^(\d+)\.(\d+)\.(\d+)\.(\d+)\+(\d+)$", version)
    if not match:
        return True, []  # Old format or invalid, skip Task doc check
    
    version_task = int(match.group(4))
    
    if version_epic and version_story:
        task_doc_path, task_doc_content, format_type = locate_task_doc_for_version(
            version_epic, version_story, version_task, config
        )
        
        if format_type == "not_found":
            warnings.append(
                f"⚠️  Task document not found for version {version} (E{version_epic}:S{version_story}:T{version_task}). "
                f"This may indicate the Task document hasn't been created yet."
            )
    
    return len(warnings) == 0, warnings


def check_changelog(branch, config: Optional[Dict] = None, current_version: Optional[str] = None, expected_epic_override: Optional[int] = None):
    """Check CHANGELOG.md for cross-epic contamination (supports both old and new format).
    
    When current_version is provided, only validates that entry (avoids false positives
    when reordering causes many lines to appear as 'added' in diff).
    """
    if config and 'main_changelog' in config:
        changelog_file = Path(config['main_changelog'])
    else:
        changelog_file = Path("CHANGELOG.md")
    
    if not changelog_file.exists():
        return True, []

    issues = []

    # Get expected epic number for this branch
    expected_epic = (
        expected_epic_override
        if expected_epic_override is not None
        else parse_branch_epic(branch, config)
    )

    if expected_epic is not None:
        # Check staged changes to CHANGELOG.md
        try:
            result = subprocess.run(
                ["git", "diff", "--cached", "--unified=0", "--", "CHANGELOG.md"],
                capture_output=True,
                text=True,
                check=False,
                cwd=Path.cwd(),
            )
            
            # Extract version from staged additions
            for line in result.stdout.splitlines():
                if line.startswith("+## ["):
                    # Match RC.EPIC.STORY.PATCH (old) or RC.EPIC.STORY.TASK+BUILD (new) format
                    match = re.match(r"\+## \[([0-9]+\.[0-9]+\.[0-9]+\.[0-9]+(?:\+\d+)?)\]", line)
                    if match:
                        staged_version = match.group(1)
                        # When reordering, many entries show as +; only validate current version
                        if current_version and staged_version != current_version:
                            continue
                        version_epic = parse_version_epic(staged_version)
                        if version_epic is None:
                            issues.append(
                                f"Staged CHANGELOG entry '{staged_version}' has invalid format "
                                f"(expected RC.EPIC.STORY.PATCH or RC.EPIC.STORY.TASK+BUILD)"
                            )
                        elif version_epic != expected_epic:
                            if (
                                branch == "dev"
                                and version_anchors_perpetual_task(staged_version, config)
                            ):
                                continue
                            issues.append(
                                f"Staged CHANGELOG entry '{staged_version}' has Epic {version_epic} "
                                f"but branch '{branch}' expects Epic {expected_epic}"
                            )
        except subprocess.CalledProcessError:
            pass  # No staged changes

    return len(issues) == 0, issues


def validate_branch_context(requested: Optional[str] = None, art: bool = False):
    """Main validation function."""
    print("🔍 Validating branch context...")
    print()

    # Load config if available
    config = load_rw_config()
    mode = normalize_versioning_mode(config)
    if mode != "legacy":
        print(f"Versioning mode: {mode}")

    # Get current branch
    branch = get_current_branch()
    print(f"Current branch: {branch}")

    # Get version
    version = get_version(config)
    print(f"Current version: {version}")

    # Check branch-epic mapping
    maintenance_branch = is_maintenance_branch(branch)
    requested_est = parse_requested_est(requested) if requested else None
    requested_epic = requested_est[0] if requested_est else None
    branch_epic = parse_branch_epic(branch, config)
    explicit_requested_reconciliation = False
    if branch in {"main", "dev"}:
        expected_epic = None  # main/dev branches can have any epic
    elif maintenance_branch:
        expected_epic = None  # maintenance/update branches intentionally skip epic validation
        print("Detected maintenance/update branch pattern; skipping epic/version enforcement.")
    elif requested_epic is not None:
        # Explicit requested E:S:T should be authoritative for RW intent, but must
        # still align with the active epic branch to prevent cross-epic contamination.
        if branch_epic is not None and branch_epic != requested_epic:
            expected_epic = branch_epic
        else:
            expected_epic = requested_epic
            explicit_requested_reconciliation = True
            if art:
                print(
                    f"--art adoption enabled: requested epic E{requested_epic} accepted for "
                    "explicit-task reconciliation in this validation run."
                )
            else:
                print(
                    f"Explicit requested token detected: using requested epic E{requested_epic} "
                    "for pre-Step-2 reconciliation checks."
                )
    else:
        # Parse epic number from branch name (e.g., epic/10-fastapi-migration -> 10)
        expected_epic = branch_epic

    errors = []
    warnings = []

    # Enforce dual-mode task-touch invariant before any branch/version checks
    dual_ok, dual_errors, dual_warnings = validate_dual_mode_task_touch_invariant(config)
    if not dual_ok:
        errors.extend(dual_errors)
    warnings.extend(dual_warnings)

    if expected_epic is not None:
        print(f"Expected epic number: {expected_epic}")
        if (
            requested_epic is not None
            and branch_epic is not None
            and branch_epic != requested_epic
        ):
            errors.append(
                f"Requested task epic E{requested_epic} does not match active branch epic E{branch_epic} "
                f"on '{branch}' (cross-epic request blocked)."
            )
        if version:
            version_epic = parse_version_epic(version)
            if version_epic is None:
                errors.append(
                    f"Invalid version format: '{version}' "
                    f"(expected RC.EPIC.STORY.PATCH or RC.EPIC.STORY.TASK+BUILD)"
                )
            elif version_epic != expected_epic:
                if explicit_requested_reconciliation:
                    print(
                        "ℹ️  Explicit-task reconciliation: version epic differs from requested epic "
                        f"(version E{version_epic} vs requested E{expected_epic}) — allowing pre-Step-2 "
                        "proceed so Step 2 can deterministically realign version.py."
                    )
                elif branch == "dev" and version_anchors_perpetual_task(version, config):
                    print(
                        "ℹ️  dev branch: version epic differs from dev_branch_epic, but version "
                        "anchors a perpetual maintenance task — allowed."
                    )
                else:
                    errors.append(
                        f"Version mismatch: Branch '{branch}' expects Epic {expected_epic} "
                        f"but version '{version}' has Epic {version_epic}"
                    )
    elif branch not in {"main", "dev"} and not maintenance_branch:
        warnings.append(f"Branch '{branch}' not in known mapping - cannot validate version")

    # Check CHANGELOG (only validate current version to avoid false positives on reorder)
    current_version = get_version(config)
    changelog_ok, changelog_issues = check_changelog(
        branch,
        config,
        current_version=current_version,
        expected_epic_override=expected_epic
    )
    if not changelog_ok:
        errors.extend(changelog_issues)
    
    # NEW: Check Task doc presence (warning only, not blocking)
    if version:
        task_doc_ok, task_doc_warnings = check_task_doc_presence(version, config)
        if not task_doc_ok:
            warnings.extend(task_doc_warnings)
    
    # NEW: Validate doc-init build (if BUILD = 0, must be docs-only)
    if version:
        doc_init_valid, doc_init_errors = validate_doc_init_build(version, config)
        if not doc_init_valid:
            errors.extend(doc_init_errors)

    print()
    if errors:
        print("❌ VALIDATION FAILED:")
        for error in errors:
            print(f"  - {error}")
        print()
        print("🚨 DO NOT COMMIT - Fix issues first!")
        return 1

    if warnings:
        print("⚠️  WARNINGS:")
        for warning in warnings:
            print(f"  - {warning}")
        print()

    print("✅ Branch context validation passed!")
    return 0


if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="Validate branch context before commit")
    parser.add_argument(
        "--strict",
        action="store_true",
        help="Exit with error code on validation failure (for pre-commit hooks)",
    )
    parser.add_argument(
        "--requested",
        required=False,
        default=None,
        help="Requested E:S:T token for RW context (e.g., E6:S06:T58).",
    )
    parser.add_argument(
        "--art",
        action="store_true",
        help="Adopt requested token as canonical anchor for this validation run.",
    )
    args = parser.parse_args()

    exit_code = validate_branch_context(requested=args.requested, art=args.art)

    # In strict mode, always exit with the validation result
    sys.exit(exit_code)
