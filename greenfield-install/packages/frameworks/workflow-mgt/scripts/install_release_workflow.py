#!/usr/bin/env python3
"""
RW Installer CLI

Installs the Release Workflow (RW) into a target project by:
1. Generating rw-config.yaml based on user answers
2. Generating/updating .cursorrules RW trigger section
3. Patching workflows/release-workflow/release-workflow.yaml to use config values

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
from contextlib import suppress
from dataclasses import dataclass
from datetime import datetime
from pathlib import Path
from typing import Dict, List, Optional, Tuple

DEVKIT_VERSIONING_SCHEMA = "RC.EPIC.STORY.TASK+BUILD"
GREENFIELD_VERSION_EPIC = 1
GREENFIELD_VERSION_STORY = 1
GREENFIELD_VERSION_TASK = 1
GREENFIELD_VERSION_BUILD = 1

# Install UX version display (UXR-016)
try:
    from install_ux_version import print_section_header, print_session_banner
except ImportError:
    _install_ux_path = Path(__file__).resolve().parent / "install_ux_version.py"
    if _install_ux_path.exists():
        import importlib.util as _importlib_util

        _spec = _importlib_util.spec_from_file_location("install_ux_version", _install_ux_path)
        _mod = _importlib_util.module_from_spec(_spec)
        assert _spec.loader is not None
        sys.modules["install_ux_version"] = _mod
        _spec.loader.exec_module(_mod)
        print_section_header = _mod.print_section_header
        print_session_banner = _mod.print_session_banner
    else:
        def print_session_banner(project_root=None, *, verbose=False, file=None):  # type: ignore[misc]
            return None

        def print_section_header(title, project_root=None, *, verbose=False, file=None):  # type: ignore[misc]
            print(title)

try:
    from adk_install_errors import emit_install_error
except ImportError:
    _adk_err_path = Path(__file__).resolve().parent / "adk_install_errors.py"
    if _adk_err_path.is_file():
        import importlib.util as _iu

        _spec_err = _iu.spec_from_file_location("adk_install_errors", _adk_err_path)
        _mod_err = _iu.module_from_spec(_spec_err)
        assert _spec_err.loader is not None
        sys.modules["adk_install_errors"] = _mod_err
        _spec_err.loader.exec_module(_mod_err)
        emit_install_error = _mod_err.emit_install_error
    else:
        def emit_install_error(code, *, detail=None, file=None):  # type: ignore[misc]
            print(f"ERROR [{code}]", file=file or sys.stderr)

try:
    from localisation_config import (
        ensure_localisation_config,
        render_locale_text,
        workflow_locales_root,
    )
except ImportError:
    _loc_path = Path(__file__).resolve().parent / "localisation_config.py"
    if _loc_path.is_file():
        import importlib.util as _iu_loc

        _spec_loc = _iu_loc.spec_from_file_location("localisation_config", _loc_path)
        _mod_loc = _iu_loc.module_from_spec(_spec_loc)
        assert _spec_loc.loader is not None
        sys.modules["localisation_config"] = _mod_loc
        _spec_loc.loader.exec_module(_mod_loc)
        ensure_localisation_config = _mod_loc.ensure_localisation_config
        render_locale_text = _mod_loc.render_locale_text
        workflow_locales_root = _mod_loc.workflow_locales_root
    else:
        def ensure_localisation_config(*args, **kwargs):  # type: ignore[misc]
            return None

        def render_locale_text(*args, **kwargs):  # type: ignore[misc]
            raise RuntimeError("localisation_config not available")

        def workflow_locales_root(*args, **kwargs):  # type: ignore[misc]
            raise RuntimeError("localisation_config not available")

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
    emit_install_error("ADK-I03.E04", file=sys.stderr)
    print(format_dependency_help(missing), file=sys.stderr)
    sys.exit(1)


def get_yaml():
    """Import PyYAML after dependency check."""
    require_dependencies()
    import yaml  # noqa: WPS433 — lazy import by design

    return yaml


# Template paths (relative to this script)
SCRIPT_DIR = Path(__file__).parent
FRAMEWORK_ROOT = SCRIPT_DIR.parent  # workflow mgt directory
CURSORRULES_TEMPLATE = FRAMEWORK_ROOT / "cursorrules-rw-trigger-section.md"

_ENV_LOG_PATH_ENV_VAR = "AI_DEV_KIT_INSTALL_LOG_PATH"


def _log(level: str, message: str) -> None:
    """
    Best-effort logging helper for this installer.

    If AI_DEV_KIT_INSTALL_LOG_PATH is set (by the CLI), append structured
    lines into the shared install log so that workflow-mgt installs can be
    correlated with CLI runs. Logging failures must never break behaviour.
    """
    
    log_path = os.getenv(_ENV_LOG_PATH_ENV_VAR)
    if not log_path:
        return

    ts = datetime.utcnow().isoformat(timespec="seconds") + "Z"
    with suppress(OSError):
        with open(log_path, "a", encoding="utf-8") as _log_fh:
            _log_fh.write(f"[{ts}] [{level}] workflow_mgt.install {message}\n")


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


@dataclass
class ScaffoldResult:
    """Outcome of installer file scaffold steps (BR-088 / #19)."""

    status: str
    version_file_missing: bool = False
    main_changelog_missing: bool = False
    rel_path: str = ""
    message: str = ""


def render_version_py_stub(
    *,
    rc: int = 0,
    epic: int = GREENFIELD_VERSION_EPIC,
    story: int = GREENFIELD_VERSION_STORY,
    task: int = GREENFIELD_VERSION_TASK,
    build: int = GREENFIELD_VERSION_BUILD,
    devkit_schema: bool = True,
) -> str:
    """Minimal version.py for greenfield adopters (BR-088)."""
    if devkit_schema:
        return f'''"""
Project version file (generated by install_release_workflow.py).

Schema: {DEVKIT_VERSIONING_SCHEMA}
See: docs/governance/standards/dev-kit-versioning-policy.md (or your kit copy).
"""

VERSION_RC = {rc}        # Release Candidate
VERSION_EPIC = {epic}     # Epic
VERSION_STORY = {story}     # Story
VERSION_TASK = {task}      # Task
VERSION_BUILD = {build}     # Build

VERSION_STRING = f"{{VERSION_RC}}.{{VERSION_EPIC}}.{{VERSION_STORY}}.{{VERSION_TASK}}+{{VERSION_BUILD}}"
'''
    return '''"""
Version file placeholder (generated by install_release_workflow.py).

Configure VERSION_* constants per your project versioning policy.
"""

# TODO: set project version constants before first RW release
'''


def format_version_scaffold_decline_help(project_root: Path, version_rel: str) -> str:
    """Copy-paste guidance when user declines scaffold (BR-088)."""
    parent = str(Path(version_rel).parent)
    return render_locale_text(
        workflow_locales_root(),
        category="scaffolds",
        key="version_scaffold_decline",
        project_root=project_root,
        substitutions={"version_rel": version_rel, "parent": parent},
    )


def ensure_version_file_scaffold(
    project_root: Path,
    config: Dict,
    *,
    dry_run: bool = False,
    interactive: bool = True,
    create_if_missing: Optional[bool] = None,
) -> ScaffoldResult:
    """
    Create version_file path when missing (BR-088).

    interactive=False requires create_if_missing True/False (for tests).
    """
    version_rel = str(config.get("version_file") or "").strip()
    if not version_rel:
        return ScaffoldResult(status="skipped_no_path")

    version_path = (project_root / version_rel).resolve()
    try:
        version_rel_display = version_path.relative_to(project_root.resolve())
    except ValueError:
        version_rel_display = Path(version_rel)

    if version_path.is_file():
        return ScaffoldResult(
            status="skipped_exists",
            rel_path=str(version_rel_display),
            message=f"✅ version_file already exists: {version_rel_display}",
        )

    use_devkit = config.get("versioning_schema") == DEVKIT_VERSIONING_SCHEMA
    initial = (
        f"0.{GREENFIELD_VERSION_EPIC}.{GREENFIELD_VERSION_STORY}."
        f"{GREENFIELD_VERSION_TASK}+{GREENFIELD_VERSION_BUILD}"
    )

    if dry_run:
        print(
            f"\n🔍 [DRY RUN] Would offer to create version file at: {version_rel_display}"
        )
        print(f"   Initial version (dev-kit schema): {initial}")
        return ScaffoldResult(
            status="dry_run_would_create",
            rel_path=str(version_rel_display),
        )

    if interactive:
        if create_if_missing is not None:
            raise ValueError("create_if_missing is only valid when interactive=False")
        create = prompt_yes_no(
            f"Create minimal version file at {version_rel_display} (initial {initial})?",
            default=True,
        )
    else:
        if create_if_missing is None:
            create = True
        else:
            create = create_if_missing

    if not create:
        help_text = format_version_scaffold_decline_help(
            project_root, str(version_rel_display)
        )
        print(f"\n⚠️  {help_text}")
        return ScaffoldResult(
            status="declined",
            version_file_missing=True,
            rel_path=str(version_rel_display),
            message=help_text,
        )

    body = render_version_py_stub(devkit_schema=use_devkit)
    version_path.parent.mkdir(parents=True, exist_ok=True)
    version_path.write_text(body, encoding="utf-8")
    msg = (
        f"✅ Created version file: {version_rel_display} "
        f"(initial internal version {initial})"
    )
    print(f"\n{msg}")
    return ScaffoldResult(
        status="created",
        rel_path=str(version_rel_display),
        message=msg,
    )


def render_changelog_stub(project_root: Path, project_name: str) -> str:
    """Minimal Keep a Changelog root file for greenfield adopters (#19)."""
    title = project_name or "Project"
    return render_locale_text(
        workflow_locales_root(),
        category="scaffolds",
        key="changelog_stub",
        project_root=project_root,
        substitutions={"project_name": title},
    )


def format_changelog_scaffold_decline_help(
    project_root: Path, changelog_rel: str
) -> str:
    return render_locale_text(
        workflow_locales_root(),
        category="scaffolds",
        key="changelog_scaffold_decline",
        project_root=project_root,
        substitutions={"changelog_rel": changelog_rel},
    )


def ensure_main_changelog_scaffold(
    project_root: Path,
    config: Dict,
    *,
    dry_run: bool = False,
    interactive: bool = True,
    create_if_missing: Optional[bool] = None,
) -> ScaffoldResult:
    """Create main_changelog path when missing (GitHub #19)."""
    changelog_rel = str(config.get("main_changelog") or "").strip()
    if not changelog_rel:
        return ScaffoldResult(status="skipped_no_path")

    changelog_path = (project_root / changelog_rel).resolve()
    try:
        changelog_rel_display = changelog_path.relative_to(project_root.resolve())
    except ValueError:
        changelog_rel_display = Path(changelog_rel)

    if changelog_path.is_file():
        return ScaffoldResult(
            status="skipped_exists",
            rel_path=str(changelog_rel_display),
            message=f"✅ main_changelog already exists: {changelog_rel_display}",
        )

    project_name = str(config.get("project_name") or project_root.name)

    if dry_run:
        print(
            f"\n🔍 [DRY RUN] Would offer to create changelog at: {changelog_rel_display}"
        )
        return ScaffoldResult(
            status="dry_run_would_create",
            rel_path=str(changelog_rel_display),
        )

    if interactive:
        if create_if_missing is not None:
            raise ValueError("create_if_missing is only valid when interactive=False")
        create = prompt_yes_no(
            f"Create minimal CHANGELOG at {changelog_rel_display}?",
            default=True,
        )
    else:
        create = True if create_if_missing is None else create_if_missing

    if not create:
        help_text = format_changelog_scaffold_decline_help(
            project_root, str(changelog_rel_display)
        )
        print(f"\n⚠️  {help_text}")
        return ScaffoldResult(
            status="declined",
            main_changelog_missing=True,
            rel_path=str(changelog_rel_display),
            message=help_text,
        )

    changelog_path.write_text(
        render_changelog_stub(project_root, project_name), encoding="utf-8"
    )
    msg = f"✅ Created main changelog: {changelog_rel_display}"
    print(f"\n{msg}")
    return ScaffoldResult(
        status="created",
        rel_path=str(changelog_rel_display),
        message=msg,
    )


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


# Kanban path patterns (ADR-015 / UXR-017) — write-default lowercase; legacy capitalised read-tolerance.
_KANBAN_SCRIPTS = Path(__file__).resolve().parent.parent.parent / "kanban" / "scripts"
if str(_KANBAN_SCRIPTS) not in sys.path:
    sys.path.insert(0, str(_KANBAN_SCRIPTS))
import kanban_paths as _kp  # noqa: E402

FRESH_KANBAN_EPIC_PATTERN = _kp.EPIC_DOC_PATTERN
FRESH_KANBAN_STORY_PATTERN = _kp.STORY_DOC_PATTERN
FRESH_KANBAN_TASK_PATTERN = _kp.TASK_DOC_PATTERN
BOOK_KANBAN_STORY_PATTERN = _kp.BOOK_STORY_PATTERN
BOOK_KANBAN_TASK_PATTERN = _kp.BOOK_TASK_PATTERN
LEGACY_EPIC_UNPADDED_PATTERN = _kp.LEGACY_EPIC_UNPADDED_PATTERN
LEGACY_STORY_3DIGIT_PATTERN = _kp.LEGACY_STORY_3DIGIT_PATTERN
LEGACY_FRESH_KANBAN_EPIC_PATTERN = _kp.LEGACY_EPIC_DOC_PATTERN
LEGACY_FRESH_KANBAN_STORY_PATTERN = _kp.LEGACY_STORY_DOC_PATTERN
LEGACY_KANBAN_EPIC_PATTERN = _kp.LEGACY_EPIC_FLAT_PATTERN
LEGACY_KANBAN_STORY_PATTERN = _kp.LEGACY_STORY_NESTED_PATTERN
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
    forward_looking_accept: Optional[frozenset[str]] = None,
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
                if forward_looking_accept and value in forward_looking_accept and not missing:
                    print(
                        "  ℹ️  Forward-looking pattern (book/adopter convention). "
                        "Accepting before story files exist."
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


def uses_unpadded_lowercase_epic_layout(project_root: Path, kanban_root: str) -> bool:
    """
    True when epics/ contains lowercase epic-N dirs without zero-padded segment (epic-1, not epic-01).

    Glob preview cannot distinguish {epic} vs {epic:02d} placeholders — inspect directory names.
    """
    epics_root = (project_root / kanban_root / "epics").resolve()
    if not epics_root.is_dir():
        return False
    for entry in epics_root.iterdir():
        if not entry.is_dir():
            continue
        match = re.fullmatch(r"epic-(\d+)", entry.name)
        if not match:
            continue
        epic_num = int(match.group(1))
        if entry.name != f"epic-{epic_num}":
            continue
        epic_file = entry / f"{entry.name}.md"
        if epic_file.is_file():
            return True
    return False


def detect_kanban_doc_patterns(
    project_root: Path,
    kanban_root: str,
) -> Tuple[str, str, bool]:
    """
    Pick epic/story rw-config patterns from on-disk kanban layout.

    Prefers highest match count across ADR-015 / book / legacy capital layouts.
    Returns (epic_pattern, story_pattern, fresh_layout_detected).
    """
    epic_candidates = [(pattern, True) for pattern in _kp.FRESH_EPIC_PATTERNS]
    epic_candidates.append((LEGACY_KANBAN_EPIC_PATTERN, False))
    story_candidates = [(pattern, True) for pattern in _kp.FRESH_STORY_PATTERNS]
    story_candidates.append((LEGACY_FRESH_KANBAN_STORY_PATTERN, True))
    story_candidates.append((LEGACY_KANBAN_STORY_PATTERN, False))

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

    if uses_unpadded_lowercase_epic_layout(project_root, kanban_root):
        epic_pattern, epic_fresh = LEGACY_EPIC_UNPADDED_PATTERN, True
    else:
        epic_pattern, epic_fresh = _best(epic_candidates)
    story_pattern, story_fresh = _best(story_candidates)
    if _pattern_match_score(project_root, kanban_root, story_pattern) == 0:
        if uses_unpadded_lowercase_epic_layout(project_root, kanban_root):
            story_pattern = BOOK_KANBAN_STORY_PATTERN
            story_fresh = True
        elif epic_pattern == LEGACY_FRESH_KANBAN_EPIC_PATTERN:
            story_pattern = LEGACY_FRESH_KANBAN_STORY_PATTERN
            story_fresh = True
    return epic_pattern, story_pattern, epic_fresh and story_fresh


def detect_kanban_board_default(project_root: Path, kanban_root: str) -> str:
    """Default main board file from existing kanban root (fresh install uses kboard.md)."""
    root_path = (project_root / kanban_root).resolve()
    for name in ("kboard.md", "_index.md", "kboard.md"):
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
    task_candidates = [(pattern, True) for pattern in _kp.FRESH_TASK_PATTERNS]

    def _best_task() -> str:
        scored = [
            (_pattern_match_score(project_root, kanban_root, pattern), pattern)
            for pattern, _is_fresh in task_candidates
        ]
        scored.sort(key=lambda item: item[0], reverse=True)
        if scored[0][0] > 0:
            return scored[0][1]
        if uses_unpadded_lowercase_epic_layout(project_root, kanban_root):
            return BOOK_KANBAN_TASK_PATTERN
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
            if uses_unpadded_lowercase_epic_layout(project_root, kanban_root):
                print(
                    "  ℹ️  Detected lowercase fresh kanban layout "
                    "(epics/epic-{n}/epic-{n}.md; book story-{story:03d}-*.md)."
                )
            elif epic_default == LEGACY_FRESH_KANBAN_EPIC_PATTERN:
                print(
                    "  ℹ️  Detected fresh kanban install layout "
                    "(epics/Epic-{n}/Epic-{n}.md, Story-{story:03d}-*.md)."
                )
            else:
                print(
                    "  ℹ️  Detected fresh kanban install layout "
                    "(lowercase epic/story patterns)."
                )
        elif _pattern_match_score(project_root, kanban_root, epic_default) > 0:
            print("  ℹ️  Detected existing kanban files; using best-matching pattern defaults.")

        print(
            "  ℹ️  Padding: {story:03d} = three-digit story files (book T03); "
            "{story:02d} / {epic:02d} = ADR-015 two-digit segments."
        )

        forward_story = frozenset(
            {
                story_default,
                BOOK_KANBAN_STORY_PATTERN,
                LEGACY_STORY_3DIGIT_PATTERN,
                LEGACY_FRESH_KANBAN_STORY_PATTERN,
            }
        )

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
                LEGACY_EPIC_UNPADDED_PATTERN,
                FRESH_KANBAN_EPIC_PATTERN,
                LEGACY_FRESH_KANBAN_EPIC_PATTERN,
                LEGACY_KANBAN_EPIC_PATTERN,
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
                BOOK_KANBAN_STORY_PATTERN,
                FRESH_KANBAN_STORY_PATTERN,
                LEGACY_STORY_3DIGIT_PATTERN,
                LEGACY_FRESH_KANBAN_STORY_PATTERN,
                LEGACY_KANBAN_STORY_PATTERN,
            ],
            strict_zero_match=strict_patterns,
            forward_looking_accept=forward_story,
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

  # Non-interactive UK English (writes ai-dev-kit-config.yaml first)
  python install_release_workflow.py --non-interactive --language en-GB

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
    parser.add_argument(
        '--skip-github-signoff',
        action='store_true',
        help='Do not run install_github_issue_signoff after install',
    )
    parser.add_argument(
        '--close-github-issues',
        action='store_true',
        help='Close ai-dev-kit issues whose install sign-off checks passed (requires gh auth)',
    )
    parser.add_argument(
        '--language',
        type=str,
        choices=['en-GB', 'en-US'],
        default=None,
        help='English variant for ai-dev-kit-config.yaml (skips interactive language prompt)',
    )
    parser.add_argument(
        '--non-interactive',
        action='store_true',
        help='Skip language prompt; default to UK English (en-GB) when creating localisation config',
    )
    parser.add_argument(
        '--force',
        action='store_true',
        help='Overwrite existing ai-dev-kit-config.yaml when setting language preference',
    )

    args = parser.parse_args()

    if args.check_deps:
        ok, missing = check_dependencies()
        if ok:
            print("OK: RW installer dependencies satisfied.")
            for _import_name, pip_name, spec in INSTALLER_DEPENDENCIES:
                print(f"  - {pip_name} ({spec})")
            sys.exit(0)
        emit_install_error("ADK-I03.E04", file=sys.stderr)
        print(format_dependency_help(missing), file=sys.stderr)
        sys.exit(1)

    yaml = get_yaml()
    
    project_root = Path(args.project_root).resolve()
    
    if not project_root.exists():
        print(f"❌ ERROR: Project root not found: {project_root}")
        sys.exit(1)

    print_session_banner(project_root)
    
    print(f"📁 Project root: {project_root}")

    print_section_header("🌐 Language / Localisation", project_root)
    ensure_localisation_config(
        project_root,
        language=args.language,
        non_interactive=args.non_interactive or args.language is not None,
        force=args.force,
        dry_run=args.dry_run,
    )
    
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
    
    version_file_blocking = False
    changelog_warnings: List[str] = []

    if not args.dry_run:
        config_path.write_text(config_yaml, encoding='utf-8')
        print(f"\n✅ Written: {config_path}")
        scaffold_result = ensure_version_file_scaffold(
            project_root,
            config,
            dry_run=False,
            interactive=not bool(args.config),
        )
        if scaffold_result.version_file_missing:
            version_file_blocking = True
            install_warnings.append(scaffold_result.message)
        changelog_result = ensure_main_changelog_scaffold(
            project_root,
            config,
            dry_run=False,
            interactive=not bool(args.config),
        )
        if changelog_result.main_changelog_missing:
            changelog_warnings.append(changelog_result.message)
        elif changelog_result.message and changelog_result.status == "created":
            print(changelog_result.message)
    else:
        print(f"\n🔍 [DRY RUN] Would write: {config_path}")
        ensure_version_file_scaffold(
            project_root,
            config,
            dry_run=True,
            interactive=not bool(args.config),
        )
        ensure_main_changelog_scaffold(
            project_root,
            config,
            dry_run=True,
            interactive=not bool(args.config),
        )
    
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
                print("\n⚠️  .cursorrules already contains RW trigger section. Skipping update.")
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
        print("   You may need to copy workflows/release-workflow/release-workflow.yaml to your project.")
        install_warnings.append("Workflow file not found for patching")
    
    print("\n" + "=" * 60)
    if args.dry_run:
        print("🔍 DRY RUN COMPLETE - No files were modified")
    else:
        combined_warnings = install_warnings + changelog_warnings
        if combined_warnings or version_file_blocking:
            if version_file_blocking:
                emit_install_error("ADK-I03.E12", file=sys.stderr)
            elif any(
                "pattern" in w.lower() or "kanban" in w.lower() or "sign-off" in w.lower()
                for w in combined_warnings
            ):
                emit_install_error("ADK-I03.E21", file=sys.stderr)
            else:
                emit_install_error("ADK-I03.E90", file=sys.stderr)
            print("⚠️  INSTALLATION PARTIAL")
            print("\nIssues requiring follow-up:")
            for idx, warning in enumerate(combined_warnings, start=1):
                print(f"{idx}. {warning}")
            print("\nFinal status: PARTIAL")
        else:
            print("✅ INSTALLATION COMPLETE")
            print("\nFinal status: SUCCESS")
        print("\nNext steps:")
        print("1. Review rw-config.yaml and adjust paths if needed")
        if version_file_blocking:
            print("2. Create version_file at the path in rw-config.yaml (or re-run installer and accept scaffold)")
            print("3. Review .cursorrules RW trigger section")
            print("4. Copy validation scripts to your scripts_path if not already present")
            print("5. Test RW by typing 'RW' in your AI assistant")
        else:
            print("2. Review .cursorrules RW trigger section")
            print("3. Copy validation scripts to your scripts_path if not already present")
            print("4. Test RW by typing 'RW' in your AI assistant")
    print("=" * 60)

    if not args.skip_github_signoff:
        try:
            from install_github_issue_signoff import post_install_signoff

            post_install_signoff(
                project_root,
                install_dry_run=args.dry_run,
                close_github_issues=args.close_github_issues,
            )
        except ImportError:
            _signoff = SCRIPT_DIR / "install_github_issue_signoff.py"
            if _signoff.is_file() and not args.dry_run:
                subprocess.run(
                    [
                        sys.executable,
                        str(_signoff),
                        "--project-root",
                        str(project_root),
                        "--list-open-awaiting",
                        *(
                            ["--close-github-issues"]
                            if args.close_github_issues
                            else []
                        ),
                    ],
                    cwd=project_root,
                    check=False,
                )


if __name__ == "__main__":
    main()

