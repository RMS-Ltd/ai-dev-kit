"""
Language/localisation helpers for workflow-mgt installers (E21:S01:T03 / FR-006 Phase 1).

Persists UK/US English preference to ai-dev-kit-config.yaml (separate from rw-config.yaml).
Vendored with install_release_workflow.py for adopter projects.
"""

from __future__ import annotations

from pathlib import Path
from typing import Dict, Optional

import yaml

LOCALISATION_CONFIG_FILENAME = "ai-dev-kit-config.yaml"

LOCALE_VARIANTS: Dict[str, Dict[str, str]] = {
    "en-GB": {"language": "en-GB", "variant": "UK"},
    "en-US": {"language": "en-US", "variant": "US"},
}

DEFAULT_LANGUAGE = "en-GB"


def prompt_language_choice() -> Dict[str, str]:
    """Interactive prompt for UK/US English variant (FR-006 numbered format)."""
    print()
    print("Select your preferred English variant:")
    print("  [1] UK English (en-GB) — colour, organise, realise  [default]")
    print("  [2] US English (en-US) — color, organize, realize")
    while True:
        answer = input("Enter choice [1-2]: ").strip()
        if answer in ("", "1"):
            return LOCALE_VARIANTS[DEFAULT_LANGUAGE].copy()
        if answer == "2":
            return LOCALE_VARIANTS["en-US"].copy()
        print("  Invalid choice. Enter 1 or 2.")


def resolve_language_from_args(
    language: Optional[str],
    non_interactive: bool,
) -> Dict[str, str]:
    """Resolve locale from CLI flags or interactive prompt."""
    if language is not None:
        return LOCALE_VARIANTS[language].copy()
    if non_interactive:
        return LOCALE_VARIANTS[DEFAULT_LANGUAGE].copy()
    return prompt_language_choice()


def write_localisation_config(project_root: Path, locale: Dict[str, str]) -> Path:
    """Write ai-dev-kit-config.yaml at project root."""
    config_path = project_root / LOCALISATION_CONFIG_FILENAME
    config_path.parent.mkdir(parents=True, exist_ok=True)
    payload = {"localisation": locale}
    with open(config_path, "w", encoding="utf-8") as handle:
        yaml.dump(payload, handle, default_flow_style=False, sort_keys=False)
    return config_path


def ensure_localisation_config(
    project_root: Path,
    *,
    language: Optional[str] = None,
    non_interactive: bool = False,
    force: bool = False,
    dry_run: bool = False,
) -> Optional[Path]:
    """
    Ensure ai-dev-kit-config.yaml exists at project root.

    If the file exists and force is False, skip write and return None.
    """
    config_path = project_root / LOCALISATION_CONFIG_FILENAME
    if config_path.exists() and not force:
        print(f"ℹ️  Using existing localisation config: {config_path}")
        return None

    locale = resolve_language_from_args(language, non_interactive)
    if dry_run:
        print(f"🔍 [DRY RUN] Would write {config_path}:")
        print(f"   localisation: {locale}")
        return None

    written = write_localisation_config(project_root, locale)
    print(f"✅ Language preference saved: {locale['language']} ({locale['variant']})")
    print(f"   Localisation config: {written}")
    return written
