#!/usr/bin/env python3
"""
RW Installer CLI

Installs the Release Workflow (RW) into a target project by:
1. Generating rw-config.yaml based on user answers
2. Generating/updating .cursorrules RW trigger section
3. Patching workflows/release-workflow.yaml to use config values

Usage:
    python install_release_workflow.py [--dry-run] [--config CONFIG_FILE] [--mode MODE]
    python install_release_workflow.py --check-deps

    --dry-run: Print intended changes without writing files
    --config: Path to existing rw-config.yaml (skips questions)
    --mode: Preset mode (a=Simple RW, b=RW+Versioning, c=Full Stack)
    --check-deps: Verify installer dependencies and exit (0=OK, 1=missing)
"""

import argparse
import importlib.util
import os
import re
import sys
from datetime import datetime
from pathlib import Path
from typing import Dict, List, Optional, Tuple

# Install UX version display (FR-108)
try:
    from install_ux_version import print_section_header, print_session_banner
except ImportError:
    _install_ux_path = Path(__file__).resolve().parent / "install_ux_version.py"
    if _install_ux_path.exists():
        import importlib.util as _importlib_util

        _spec = _importlib_util.spec_from_file_location("install_ux_version", _install_ux_path)
        _mod = _importlib_util.module_from_spec(_spec)
        assert _spec.loader is not None
        _spec.loader.exec_module(_mod)
        print_section_header = _mod.print_section_header
        print_session_banner = _mod.print_session_banner
    else:
        def print_session_banner(project_root=None, *, verbose=False, file=None):  # type: ignore[misc]
            return None

        def print_section_header(title, project_root=None, *, verbose=False, file=None):  # type: ignore[misc]
            print(title)

# Minimal RW installer runtime dependencies (see repo setup.py).
INSTALLER_DEPENDENCIES: Tuple[Tuple[str, str, str], ...] = (
    ("yaml", "pyyaml", "pyyaml>=6.0"),
)


def check_dependencies() -> Tuple[bool, List[str]]:
    """Return (ok, missing_pip_names) for installer runtime deps."""
    missing: List[str] = []
    for import_name, pip_name, _spec in INSTALLER_DEPENDENCIES:
        if importlib.util.find_spec(import_name) is None:
            missing.append(pip_name)
    return (len(missing) == 0, missing)


def format_dependency_help(missing: List[str]) -> str:
    """Actionable stderr/stdout message before interactive install (BR-082)."""
    lines = [
        "ERROR: RW installer dependencies are missing.",
        "",
        "Required Python packages:",
    ]
    for import_name, pip_name, spec in INSTALLER_DEPENDENCIES:
        marker = " (MISSING)" if pip_name in missing else ""
        lines.append(f"  - {pip_name} ({spec}){marker}")
    lines.extend(
        [
            "",
            "Install in your project venv before running this installer:",
            "  pip install 'pyyaml>=6.0'",
            "",
            "Or install ai-dev-kit with dependencies from the kit checkout:",
            "  pip install -e ./vendor/ai-dev-kit",
            "  # or: pip install -e /path/to/ai-dev-kit",
            "",
            "Greenfield / book path: see INSTALL_IN_YOUR_PROJECT.md",
            "  \"Installer venv dependencies\" — install deps before Step 3 (RW install).",
            "",
            "Preflight only: python install_release_workflow.py --check-deps",
        ]
    )
    return "\n".join(lines)


def require_dependencies() -> None:
    """Exit 1 with BR-082 message when dependencies are missing."""
    ok, missing = check_dependencies()
    if ok:
        return
    print(format_dependency_help(missing), file=sys.stderr)
    sys.exit(1)


def get_yaml():
    """Import PyYAML after dependency check."""
    require_dependencies()
    import yaml  # noqa: WPS433 — lazy import by design

    return yaml


# Template paths (relative to this script)
SCRIPT_DIR = Path(__file__).parent
PACKAGE_ROOT = SCRIPT_DIR.parent.parent
FRAMEWORK_ROOT = SCRIPT_DIR.parent  # workflow mgt directory
TEMPLATES_DIR = PACKAGE_ROOT / "templates"
CURSORRULES_TEMPLATE = FRAMEWORK_ROOT / "cursorrules-rw-trigger-section.md"
SCHEMA_DOC = FRAMEWORK_ROOT / "config" / "rw-config-schema.md"

_ENV_LOG_FH = None
_ENV_LOG_PATH_ENV_VAR = "AI_DEV_KIT_INSTALL_LOG_PATH"


def _log(level: str, message: str) -> None:
    """
    Best-effort logging helper for this installer.

    If AI_DEV_KIT_INSTALL_LOG_PATH is set (by the CLI), append structured
    lines into the shared install log so that workflow-mgt installs can be
    correlated with CLI runs. Logging failures must never break behaviour.
    """
    global _ENV_LOG_FH

    log_path = os.getenv(_ENV_LOG_PATH_ENV_VAR)
    if not log_path:
        return

    try:
        if _ENV_LOG_FH is None:
            _ENV_LOG_FH = open(log_path, "a", encoding="utf-8")
        ts = datetime.utcnow().isoformat(timespec="seconds") + "Z"
        _ENV_LOG_FH.write(f"[{ts}] [{level}] workflow_mgt.install {message}\n")
        _ENV_LOG_FH.flush()
    except Exception:
        # Logging must not interfere with installation
        pass


def load_template(template_path: Path) -> str:
    """Load a template file."""
    if not template_path.exists():
        raise FileNotFoundError(f"Template not found: {template_path}")
    return template_path.read_text(encoding='utf-8')


def prompt_question(prompt: str, default: Optional[str] = None, required: bool = True) -> str:
    """Prompt user for input."""
    if default:
        full_prompt = f"{prompt} [{default}]: "
    else:
        full_prompt = f"{prompt}: "
    
    while True:
        answer = input(full_prompt).strip()
        if answer:
            return answer
        if default:
            return default
        if not required:
            return ""
        print("  ⚠️  This field is required. Please provide a value.")


def prompt_yes_no(prompt: str, default: bool = False) -> bool:
    """Prompt for yes/no answer."""
    default_str = "Y/n" if default else "y/N"
    answer = input(f"{prompt} [{default_str}]: ").strip().lower()
    if not answer:
        return default
    return answer in ('y', 'yes')


def placeholder_names_in_pattern(value: str) -> set[str]:
    """Extract placeholder base names from a pattern (e.g. {story:03d} -> story)."""
    return {match.group(1) for match in re.finditer(r"\{([^}:]+)(?::[^}]*)?\}", value)}


def validate_required_placeholders(value: str, required_placeholders: list[str]) -> list[str]:
    """Return missing placeholders from a pattern value."""
    names = placeholder_names_in_pattern(value)
    missing: list[str] = []
    for placeholder in required_placeholders:
        base = placeholder.strip("{}").split(":")[0]
        if base not in names:
            missing.append(placeholder)
    return missing


def pattern_to_preview_glob(pattern: str) -> str:
    """Convert placeholder pattern into a glob for match preview."""
    return re.sub(r"\{[^}]+\}", "*", pattern)


# Kanban installer (fresh) layout — matches install_kanban_framework.py output (BR-083).
FRESH_KANBAN_EPIC_PATTERN = "epics/Epic-{epic}/Epic-{epic}.md"
FRESH_KANBAN_STORY_PATTERN = "epics/Epic-{epic}/Story-{story:03d}-*.md"
FRESH_KANBAN_TASK_PATTERN = "epics/Epic-{epic}/Story-{story}/T{task}-*.md"
SLUG_KANBAN_TASK_PATTERN = "epics/Epic-{epic}/Story-{story:03d}-*/T{task}-*.md"
LEGACY_KANBAN_EPIC_PATTERN = "epics/Epic-{epic}.md"
LEGACY_KANBAN_STORY_PATTERN = "epics/Epic-{epic}/stories/Story-{story}-*.md"
DEFAULT_FR_BR_SUBDIR = "fr-br"


def preview_pattern_matches(
    project_root: Path,
    kanban_root: str,
    pattern: str,
    sample_limit: int = 3
) -> tuple[int, list[str], Optional[str]]:
    """
    Preview candidate file matches for a placeholder pattern.

    Returns: (total_matches, sample_relative_paths, error_message)
    """
    root_path = (project_root / kanban_root).resolve()
    if not root_path.exists():
        return 0, [], f"Kanban root does not exist yet: {root_path}"

    glob_pattern = pattern_to_preview_glob(pattern)
    all_matches = [p for p in root_path.glob(glob_pattern) if p.is_file()]
    samples = [str(match.relative_to(root_path)) for match in all_matches[:sample_limit]]
    return len(all_matches), samples, None


def kanban_root_exists(project_root: Path, kanban_root: str) -> bool:
    """True when the configured kanban root directory is already on disk."""
    return (project_root / kanban_root).resolve().is_dir()


def prompt_pattern_with_validation(
    prompt: str,
    default: str,
    project_root: Path,
    kanban_root: str,
    required_placeholders: list[str],
    suggestion_examples: list[str],
    *,
    strict_zero_match: bool = False,
) -> str:
    """Prompt for pattern with required placeholder and preview validation."""
    while True:
        value = prompt_question(prompt, default=default)
        missing = validate_required_placeholders(value, required_placeholders)
        if missing:
            placeholders = ", ".join(missing)
            print(f"  ❌ Pattern must include placeholder(s): {placeholders}")
            continue

        count, samples, preview_error = preview_pattern_matches(project_root, kanban_root, value)
        if preview_error:
            print(f"  ⚠️  Preview unavailable: {preview_error}")
            return value

        if count == 0:
            print("  ⚠️  No files matched this pattern under selected kanban root.")
            if suggestion_examples:
                print("  Suggested examples:")
                for suggestion in suggestion_examples:
                    print(f"    - {suggestion}")
            if strict_zero_match and kanban_root_exists(project_root, kanban_root):
                # Fresh kanban install creates epics before any Story-*.md files exist.
                if value == default and not missing:
                    print(
                        "  ℹ️  No matching files yet (normal after fresh kanban). "
                        "Accepting installer-aligned default."
                    )
                    return value
                print(
                    "  ❌ Cannot persist a zero-match pattern while kanban files exist. "
                    "Choose a suggested pattern or enter one that matches files on disk."
                )
                continue
            if prompt_yes_no("Use this pattern anyway?", default=False):
                return value
            continue

        print(f"  ✅ Matched {count} file(s). Sample:")
        for sample in samples:
            print(f"    - {sample}")
        return value


def _pattern_match_score(
    project_root: Path,
    kanban_root: str,
    pattern: str,
) -> int:
    count, _, preview_error = preview_pattern_matches(project_root, kanban_root, pattern)
    return count if preview_error is None else 0


def detect_kanban_doc_patterns(
    project_root: Path,
    kanban_root: str,
) -> Tuple[str, str, bool]:
    """
    Pick epic/story rw-config patterns from on-disk kanban layout.

    Prefers fresh-install layout when it has the highest (or tied) match count.
    Returns (epic_pattern, story_pattern, fresh_layout_detected).
    """
    epic_candidates = [
        (FRESH_KANBAN_EPIC_PATTERN, True),
        (LEGACY_KANBAN_EPIC_PATTERN, False),
    ]
    story_candidates = [
        (FRESH_KANBAN_STORY_PATTERN, True),
        (LEGACY_KANBAN_STORY_PATTERN, False),
    ]

    def _best(candidates: List[Tuple[str, bool]]) -> Tuple[str, bool]:
        scored = [
            (_pattern_match_score(project_root, kanban_root, pattern), pattern, is_fresh)
            for pattern, is_fresh in candidates
        ]
        scored.sort(key=lambda item: (item[0], item[2]), reverse=True)
        best_count, best_pattern, best_fresh = scored[0]
        if best_count == 0:
            return candidates[0][0], False
        return best_pattern, best_fresh

    epic_pattern, epic_fresh = _best(epic_candidates)
    story_pattern, story_fresh = _best(story_candidates)
    return epic_pattern, story_pattern, epic_fresh and story_fresh


def detect_kanban_board_default(project_root: Path, kanban_root: str) -> str:
    """Default main board file from existing kanban root (fresh install uses kboard.md)."""
    root_path = (project_root / kanban_root).resolve()
    for name in ("kboard.md", "_index.md", "kanban-board.md"):
        if (root_path / name).is_file():
            return name
    return "kboard.md"


def detect_fr_br_root(project_root: Path, kanban_root: str) -> Optional[str]:
    """
    Project-root-relative path to FR/BR directory when present under kanban root.

    Returns None when fr-br/ does not exist yet (greenfield before intake).
    """
    fr_br_dir = (project_root / kanban_root / DEFAULT_FR_BR_SUBDIR).resolve()
    if not fr_br_dir.is_dir():
        return None
    return str(Path(kanban_root) / DEFAULT_FR_BR_SUBDIR).replace("\\", "/")


def detect_kanban_supplementary_defaults(
    project_root: Path,
    kanban_root: str,
) -> Tuple[str, Optional[str]]:
    """
    Task doc pattern and fr_br_root for mode C rw-config generation (BR-084).

    Returns (task_doc_pattern, fr_br_root_or_none).
    """
    task_candidates = [
        (FRESH_KANBAN_TASK_PATTERN, True),
        (SLUG_KANBAN_TASK_PATTERN, True),
    ]

    def _best_task() -> str:
        scored = [
            (_pattern_match_score(project_root, kanban_root, pattern), pattern)
            for pattern, _is_fresh in task_candidates
        ]
        scored.sort(key=lambda item: item[0], reverse=True)
        if scored[0][0] > 0:
            return scored[0][1]
        return FRESH_KANBAN_TASK_PATTERN

    return _best_task(), detect_fr_br_root(project_root, kanban_root)


def detect_project_name(project_root: Path) -> str:
    """Try to detect project name from common files."""
    # Check for common indicators
    if (project_root / "setup.py").exists():
        # Could parse setup.py, but keep it simple
        return project_root.name
    if (project_root / "pyproject.toml").exists():
        return project_root.name
    if (project_root / "package.json").exists():
        return project_root.name
    return project_root.name


def find_version_file(project_root: Path) -> Optional[str]:
    """Try to find version file."""
    common_patterns = [
        "src/*/version.py",
        "*/version.py",
        "version.py",
        "src/version.py",
    ]
    
    for pattern in common_patterns:
        matches = list(project_root.glob(pattern))
        if matches:
            rel_path = matches[0].relative_to(project_root)
            return str(rel_path)
    return None


def collect_config_interactive(project_root: Path, mode: Optional[str] = None) -> Dict:
    """Collect configuration via interactive prompts."""
    config = {}
    
    print_section_header("📋 RW Configuration Setup", project_root)
    print("=" * 60)
    
    # Detect project name
    detected_name = detect_project_name(project_root)
    project_name = prompt_question("Project name", default=detected_name, required=False)
    config['project_name'] = project_name or detected_name
    
    # Version file
    detected_version = find_version_file(project_root)
    version_file = prompt_question(
        "Path to version file (relative to project root)",
        default=detected_version or "src/myproject/version.py"
    )
    config['version_file'] = version_file
    
    # Main changelog
    main_changelog = prompt_question(
        "Path to main CHANGELOG.md",
        default="CHANGELOG.md"
    )
    config['main_changelog'] = main_changelog
    
    # Changelog directory
    changelog_dir = prompt_question(
        "Directory for detailed changelog archives",
        default="docs/changelogs"
    )
    config['changelog_dir'] = changelog_dir
    
    # Scripts path
    scripts_path = prompt_question(
        "Path to validation scripts directory",
        default="tools/workflow_mgt/scripts"
    )
    config['scripts_path'] = scripts_path
    
    # README file
    readme_file = prompt_question(
        "Path to README.md",
        default="README.md"
    )
    config['readme_file'] = readme_file
    
    # Mode selection
    if not mode:
        print("\n📦 Installation Mode:")
        print("  A) Simple RW (no Kanban, any versioning)")
        print("  B) RW + Dev-Kit Versioning")
        print("  C) Full Stack (RW + Versioning + Kanban)")
        mode_choice = prompt_question("Select mode", default="B").upper()
    else:
        mode_choice = mode.upper()
    
    # Versioning schema
    if mode_choice in ('B', 'C'):
        config['versioning_schema'] = 'RC.EPIC.STORY.TASK+BUILD'
        # FR-046 policy: dual internal+external versioning requires task-touch.
        config['versioning_mode'] = 'dual'
        config['semver_mapping_strategy'] = 'task_touch'
    else:
        use_devkit_versioning = prompt_yes_no("Use dev-kit versioning schema (RC.EPIC.STORY.TASK+BUILD)?", default=False)
        if use_devkit_versioning:
            config['versioning_schema'] = 'RC.EPIC.STORY.TASK+BUILD'
            # Mode A with dev-kit schema defaults to dual mode for new installs.
            config['versioning_mode'] = 'dual'
            config['semver_mapping_strategy'] = 'task_touch'
    
    # Kanban integration
    if mode_choice == 'C':
        config['use_kanban'] = True
        print("\n📊 Kanban Integration:")
        kanban_root = prompt_question(
            "Kanban root directory",
            default="docs/project-management/kanban"
        )
        config['kanban_root'] = kanban_root
        strict_patterns = kanban_root_exists(project_root, kanban_root)

        epic_default, story_default, fresh_layout = detect_kanban_doc_patterns(
            project_root, kanban_root
        )
        task_default, fr_br_default = detect_kanban_supplementary_defaults(
            project_root, kanban_root
        )
        if fresh_layout:
            print(
                "  ℹ️  Detected fresh kanban install layout "
                "(epics/Epic-{n}/Epic-{n}.md, Story-{story:03d}-*.md)."
            )
        elif _pattern_match_score(project_root, kanban_root, epic_default) > 0:
            print("  ℹ️  Detected existing kanban files; using best-matching pattern defaults.")

        task_count, task_samples, _ = preview_pattern_matches(
            project_root, kanban_root, task_default
        )
        if task_count:
            print(f"  ℹ️  Task pattern default matches {task_count} file(s). Sample:")
            for sample in task_samples:
                print(f"    - {sample}")
        else:
            print(
                "  ℹ️  Task pattern default (for future task docs): "
                f"{task_default}"
            )
        if fr_br_default:
            print(f"  ℹ️  FR/BR root detected: {fr_br_default}")

        config['epic_doc_pattern'] = prompt_pattern_with_validation(
            prompt="Epic document pattern (relative to Kanban root, must include {epic})",
            default=epic_default,
            project_root=project_root,
            kanban_root=kanban_root,
            required_placeholders=["{epic}"],
            suggestion_examples=[
                FRESH_KANBAN_EPIC_PATTERN,
                LEGACY_KANBAN_EPIC_PATTERN,
                "Epic-{epic}/Epic-{epic}.md",
            ],
            strict_zero_match=strict_patterns,
        )

        config['story_doc_pattern'] = prompt_pattern_with_validation(
            prompt="Story document pattern (relative to Kanban root, include {epic} and {story})",
            default=story_default,
            project_root=project_root,
            kanban_root=kanban_root,
            required_placeholders=["{epic}", "{story}"],
            suggestion_examples=[
                FRESH_KANBAN_STORY_PATTERN,
                LEGACY_KANBAN_STORY_PATTERN,
                "Epic-{epic}/stories/E{epic}-S{story}.md",
            ],
            strict_zero_match=strict_patterns,
        )

        config['task_doc_pattern'] = task_default
        if fr_br_default:
            config['fr_br_root'] = fr_br_default

        config['kanban_board'] = prompt_question(
            "Main Kanban board file",
            default=detect_kanban_board_default(project_root, kanban_root),
        )
    else:
        config['use_kanban'] = False
    
    return config


def generate_rw_config_yaml(config: Dict) -> str:
    """Generate rw-config.yaml content."""
    lines = [
        "# RW Config - Generated by install_release_workflow.py",
        f"# Project: {config.get('project_name', 'myproject')}",
        "",
        "# Required keys (all modes)",
        f"version_file: {config['version_file']}",
        f"main_changelog: {config['main_changelog']}",
        f"changelog_dir: {config['changelog_dir']}",
        f"scripts_path: {config['scripts_path']}",
        f"readme_file: {config['readme_file']}",
        "",
    ]
    
    # Optional keys
    if config.get('use_kanban'):
        lines.extend([
            "# Kanban integration",
            "use_kanban: true",
            f"kanban_root: {config['kanban_root']}",
        ])
        pattern_warnings = config.get("_pattern_warnings") or []
        warn_by_key = {w["key"]: w["message"] for w in pattern_warnings if isinstance(w, dict)}

        for key, yaml_key in (
            ("epic_doc_pattern", "epic_doc_pattern"),
            ("story_doc_pattern", "story_doc_pattern"),
        ):
            if key in warn_by_key:
                lines.append(f"# WARNING: {warn_by_key[key]}")
            lines.append(f"{yaml_key}: {config[yaml_key]}")

        lines.append(f"kanban_board: {config['kanban_board']}")
        if config.get("task_doc_pattern"):
            lines.append(f"task_doc_pattern: {config['task_doc_pattern']}")
        if config.get("fr_br_root"):
            lines.append(f"fr_br_root: {config['fr_br_root']}")
        lines.append("")
    else:
        lines.append("use_kanban: false\n")
    
    if config.get('versioning_schema'):
        lines.append(f"versioning_schema: {config['versioning_schema']}\n")
    if config.get('versioning_mode'):
        lines.append(f"versioning_mode: {config['versioning_mode']}")
    if config.get('semver_mapping_strategy'):
        lines.append(f"semver_mapping_strategy: {config['semver_mapping_strategy']}\n")
    
    if config.get('project_name'):
        lines.append(f"project_name: {config['project_name']}\n")
    
    return "\n".join(lines)


def generate_cursorrules_section(config: Dict) -> str:
    """Generate .cursorrules RW trigger section with config values substituted."""
    template = load_template(CURSORRULES_TEMPLATE)
    
    # Extract project name from version_file path
    # e.g., "src/myproject/version.py" -> "myproject"
    version_file = config['version_file']
    project_name = config.get('project_name', 'myproject')
    
    # Try to extract from version_file path
    if '/' in version_file:
        parts = version_file.split('/')
        if len(parts) >= 2 and parts[0] == 'src':
            project_name = parts[1].replace('.py', '').replace('version', '')
    
    # Substitute placeholders
    replacements = {
        'src/{project}/version.py': version_file,
        'src/fynd_deals/version.py': version_file,
        '{project}': project_name,
        '{kanban_path}': config.get('kanban_root', 'docs/project-management/kanban'),
        '{changelog_archive_path}': config['changelog_dir'],
        '{scripts_path}': config['scripts_path'],
        'docs/project-management/kanban': config.get('kanban_root', 'docs/project-management/kanban'),
        'docs/changelog-and-release-notes/changelog-archive': config['changelog_dir'],
    }
    
    result = template
    for old, new in replacements.items():
        result = result.replace(old, new)
    
    return result


def patch_workflow_yaml(workflow_path: Path, config: Dict, dry_run: bool = False) -> str:
    """Patch release-workflow.yaml to use config values."""
    yaml = get_yaml()
    if not workflow_path.exists():
        return f"⚠️  Workflow file not found: {workflow_path}"
    
    try:
        with open(workflow_path, 'r', encoding='utf-8') as f:
            workflow = yaml.safe_load(f)
    except Exception as e:
        return f"⚠️  Error reading workflow YAML: {e}"
    
    # Update config section
    if 'config' not in workflow:
        workflow['config'] = {}
    
    workflow['config']['version_file'] = config['version_file']
    workflow['config']['changelog_dir'] = config['changelog_dir']
    workflow['config']['main_changelog'] = config['main_changelog']
    
    # Update step configs that reference paths
    for step in workflow.get('steps', []):
        step_config = step.get('config', {})
        if 'readme_file' in step_config:
            step_config['readme_file'] = config['readme_file']
        if 'validators' in step_config:
            scripts_path = config['scripts_path']
            step_config['validators'] = [
                f"{scripts_path}/validation/validate_branch_context.py",
                f"{scripts_path}/validation/validate_changelog_format.py",
            ]
        if 'kanban_update_script' in step_config:
            scripts_path = config['scripts_path']
            step_config['kanban_update_script'] = f"{scripts_path}/automation/update_kanban_docs.py"
        if 'epic_doc_pattern' in step_config and config.get('use_kanban'):
            step_config['epic_doc_pattern'] = config.get('epic_doc_pattern', '')
        if 'kanban_board' in step_config and config.get('use_kanban'):
            step_config['kanban_board'] = config.get('kanban_board', '')
    
    if dry_run:
        return yaml.dump(workflow, default_flow_style=False, sort_keys=False)
    
    try:
        with open(workflow_path, 'w', encoding='utf-8') as f:
            yaml.dump(workflow, f, default_flow_style=False, sort_keys=False)
        return f"✅ Updated workflow YAML: {workflow_path}"
    except Exception as e:
        return f"⚠️  Error writing workflow YAML: {e}"


def main():
    parser = argparse.ArgumentParser(
        description="Install Release Workflow (RW) into a target project",
        formatter_class=argparse.RawDescriptionHelpFormatter,
        epilog="""
Examples:
  # Interactive installation
  python install_release_workflow.py

  # Dry run (preview changes)
  python install_release_workflow.py --dry-run

  # Use existing config file
  python install_release_workflow.py --config rw-config.yaml

  # Preset mode (a=Simple, b=RW+Versioning, c=Full Stack)
  python install_release_workflow.py --mode c

Brownfield (existing repo):
  Map paths to YOUR project tree; see INSTALL_IN_YOUR_PROJECT.md
  "Brownfield adoption" — use --mode a for RW-only (use_kanban: false).
  Contract-first: docs/rw-validators-consumer-layout.md
        """
    )
    parser.add_argument('--dry-run', action='store_true',
                       help='Print intended changes without writing files')
    parser.add_argument('--config', type=str,
                       help='Path to existing rw-config.yaml (skips questions)')
    parser.add_argument('--mode', choices=['a', 'b', 'c', 'A', 'B', 'C'],
                       help='Preset mode: a=Simple RW, b=RW+Versioning, c=Full Stack')
    parser.add_argument('--project-root', type=str, default='.',
                       help='Project root directory (default: current directory)')
    parser.add_argument(
        '--check-deps',
        action='store_true',
        help='Verify installer dependencies (pyyaml) and exit (0=OK, 1=missing)',
    )
    
    args = parser.parse_args()

    if args.check_deps:
        ok, missing = check_dependencies()
        if ok:
            print("OK: RW installer dependencies satisfied.")
            for _import_name, pip_name, spec in INSTALLER_DEPENDENCIES:
                print(f"  - {pip_name} ({spec})")
            sys.exit(0)
        print(format_dependency_help(missing), file=sys.stderr)
        sys.exit(1)

    yaml = get_yaml()
    
    project_root = Path(args.project_root).resolve()
    
    if not project_root.exists():
        print(f"❌ ERROR: Project root not found: {project_root}")
        sys.exit(1)

    print_session_banner(project_root)
    
    print(f"📁 Project root: {project_root}")
    
    # Load or collect config
    install_warnings: list[str] = []

    if args.config:
        config_path = Path(args.config)
        if not config_path.exists():
            print(f"❌ ERROR: Config file not found: {config_path}")
            sys.exit(1)
        try:
            with open(config_path, 'r', encoding='utf-8') as f:
                config = yaml.safe_load(f)
        except Exception as e:
            print(f"❌ ERROR: Failed to load config: {e}")
            sys.exit(1)
        print(f"✅ Loaded config from: {config_path}")
    else:
        config = collect_config_interactive(project_root, args.mode)
    
    # Generate rw-config.yaml
    config_yaml = generate_rw_config_yaml(config)
    config_path = project_root / "rw-config.yaml"
    
    print("\n" + "=" * 60)
    print("📝 Generated rw-config.yaml:")
    print("=" * 60)
    print(config_yaml)
    
    if not args.dry_run:
        config_path.write_text(config_yaml, encoding='utf-8')
        print(f"\n✅ Written: {config_path}")
    else:
        print(f"\n🔍 [DRY RUN] Would write: {config_path}")
    
    # Generate .cursorrules section
    cursorrules_section = generate_cursorrules_section(config)
    cursorrules_path = project_root / ".cursorrules"
    
    print("\n" + "=" * 60)
    print("📝 Generated .cursorrules RW trigger section:")
    print("=" * 60)
    print(cursorrules_section[:500] + "..." if len(cursorrules_section) > 500 else cursorrules_section)
    
    if not args.dry_run:
        # Append or create .cursorrules
        if cursorrules_path.exists():
            existing = cursorrules_path.read_text(encoding='utf-8')
            if "RELEASE WORKFLOW (RW) TRIGGER" in existing:
                print(f"\n⚠️  .cursorrules already contains RW trigger section. Skipping update.")
                print("   Please manually review and update if needed.")
                install_warnings.append(".cursorrules already had RW trigger section; manual reconciliation required")
            else:
                cursorrules_path.write_text(existing + "\n\n" + cursorrules_section, encoding='utf-8')
                print(f"\n✅ Appended to: {cursorrules_path}")
        else:
            cursorrules_path.write_text(cursorrules_section, encoding='utf-8')
            print(f"\n✅ Created: {cursorrules_path}")
    else:
        print(f"\n🔍 [DRY RUN] Would update: {cursorrules_path}")
    
    # Patch workflow YAML
    workflow_path = project_root / "workflows" / "release-workflow" / "release-workflow.yaml"
    if workflow_path.exists():
        result = patch_workflow_yaml(workflow_path, config, dry_run=args.dry_run)
        print(f"\n{result}")
        if result.startswith("⚠️"):
            install_warnings.append(result)
    else:
        print(f"\n⚠️  Workflow file not found: {workflow_path}")
        print("   You may need to copy workflows/release-workflow.yaml to your project.")
        install_warnings.append("Workflow file not found for patching")
    
    print("\n" + "=" * 60)
    if args.dry_run:
        print("🔍 DRY RUN COMPLETE - No files were modified")
    else:
        if install_warnings:
            print("⚠️  INSTALLATION PARTIAL")
            print("\nIssues requiring follow-up:")
            for idx, warning in enumerate(install_warnings, start=1):
                print(f"{idx}. {warning}")
            print("\nFinal status: PARTIAL")
        else:
            print("✅ INSTALLATION COMPLETE")
            print("\nFinal status: SUCCESS")
        print("\nNext steps:")
        print("1. Review rw-config.yaml and adjust paths if needed")
        print("2. Review .cursorrules RW trigger section")
        print("3. Copy validation scripts to your scripts_path if not already present")
        print("4. Test RW by typing 'RW' in your AI assistant")
    print("=" * 60)


if __name__ == "__main__":
    main()

