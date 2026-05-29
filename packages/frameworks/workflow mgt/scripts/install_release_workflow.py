#!/usr/bin/env python3
"""
RW Installer CLI

Installs the Release Workflow (RW) into a target project by:
1. Generating rw-config.yaml based on user answers
2. Generating/updating .cursorrules RW trigger section
3. Patching workflows/release-workflow.yaml to use config values

Usage:
    python install_release_workflow.py [--dry-run] [--config CONFIG_FILE] [--mode MODE]

    --dry-run: Print intended changes without writing files
    --config: Path to existing rw-config.yaml (skips questions)
    --mode: Preset mode (a=Simple RW, b=RW+Versioning, c=Full Stack)
"""

import argparse
import os
import re
import sys
from datetime import datetime
from pathlib import Path
from typing import Dict, Optional

try:
    import yaml
except ImportError:
    print("ERROR: PyYAML is required. Install with: pip install pyyaml")
    sys.exit(1)


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


def validate_required_placeholders(value: str, required_placeholders: list[str]) -> list[str]:
    """Return missing placeholders from a pattern value."""
    return [placeholder for placeholder in required_placeholders if placeholder not in value]


def pattern_to_preview_glob(pattern: str) -> str:
    """Convert placeholder pattern into a glob for match preview."""
    return re.sub(r"\{[^}]+\}", "*", pattern)


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


def prompt_pattern_with_validation(
    prompt: str,
    default: str,
    project_root: Path,
    kanban_root: str,
    required_placeholders: list[str],
    suggestion_examples: list[str]
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
            if prompt_yes_no("Use this pattern anyway?", default=False):
                return value
            continue

        print(f"  ✅ Matched {count} file(s). Sample:")
        for sample in samples:
            print(f"    - {sample}")
        return value


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
    
    print("\n📋 RW Configuration Setup")
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

        config['epic_doc_pattern'] = prompt_pattern_with_validation(
            prompt="Epic document pattern (relative to Kanban root, must include {epic})",
            default="epics/Epic-{epic}.md",
            project_root=project_root,
            kanban_root=kanban_root,
            required_placeholders=["{epic}"],
            suggestion_examples=[
                "epics/Epic-{epic}.md",
                "Epic-{epic}/Epic-{epic}.md",
            ],
        )

        config['story_doc_pattern'] = prompt_pattern_with_validation(
            prompt="Story document pattern (relative to Kanban root, include {epic} and {story})",
            default="epics/Epic-{epic}/stories/Story-{story}-*.md",
            project_root=project_root,
            kanban_root=kanban_root,
            required_placeholders=["{epic}", "{story}"],
            suggestion_examples=[
                "epics/Epic-{epic}/stories/Story-{story}-*.md",
                "Epic-{epic}/stories/E{epic}-S{story}.md",
            ],
        )
        
        config['kanban_board'] = prompt_question(
            "Main Kanban board file",
            default="_index.md"
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
            f"epic_doc_pattern: {config['epic_doc_pattern']}",
            f"story_doc_pattern: {config['story_doc_pattern']}",
            f"kanban_board: {config['kanban_board']}",
            "",
        ])
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
    
    args = parser.parse_args()
    
    project_root = Path(args.project_root).resolve()
    
    if not project_root.exists():
        print(f"❌ ERROR: Project root not found: {project_root}")
        sys.exit(1)
    
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

