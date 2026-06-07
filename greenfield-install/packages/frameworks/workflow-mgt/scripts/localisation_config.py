"""
Language/localisation helpers for workflow-mgt installers (FR-006 Phase 1).

Write path: E21:S01:T02/T03 (ai-dev-kit-config.yaml).
Read/resolve: E21:S01:T05 (manifest asset paths).
Consumption: E21:S01:T06 (RW scaffolds + kanban intake templates).

Vendored with install_release_workflow.py for adopter projects.
"""

from __future__ import annotations

from pathlib import Path
from typing import Any, Dict, List, Optional

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


def _default_locale_dict() -> Dict[str, str]:
    return LOCALE_VARIANTS[DEFAULT_LANGUAGE].copy()


def normalize_language(language: Optional[str]) -> str:
    """Return supported language code or DEFAULT_LANGUAGE."""
    if language in LOCALE_VARIANTS:
        return language
    return DEFAULT_LANGUAGE


def read_localisation_config(project_root: Path) -> Dict[str, str]:
    """
    Read localisation dict from ai-dev-kit-config.yaml.

    Returns default en-GB/UK when file is missing, empty, or invalid.
    """
    config_path = project_root / LOCALISATION_CONFIG_FILENAME
    if not config_path.is_file():
        return _default_locale_dict()

    try:
        with open(config_path, encoding="utf-8") as handle:
            payload = yaml.safe_load(handle) or {}
    except (OSError, yaml.YAMLError):
        return _default_locale_dict()

    localisation = payload.get("localisation")
    if not isinstance(localisation, dict):
        return _default_locale_dict()

    language = normalize_language(localisation.get("language"))
    variant = LOCALE_VARIANTS[language]["variant"]
    return {"language": language, "variant": variant}


def resolve_language(
    project_root: Path,
    *,
    override: Optional[str] = None,
) -> str:
    """Effective language: override > config file > DEFAULT_LANGUAGE."""
    if override is not None:
        return normalize_language(override)
    return read_localisation_config(project_root)["language"]


def load_locale_manifest(manifest_path: Path) -> Dict[str, Any]:
    """Load and validate locale manifest.yaml."""
    if not manifest_path.is_file():
        raise FileNotFoundError(f"Locale manifest not found: {manifest_path}")

    with open(manifest_path, encoding="utf-8") as handle:
        manifest = yaml.safe_load(handle) or {}

    if not isinstance(manifest, dict):
        raise ValueError(f"Invalid manifest (not a mapping): {manifest_path}")
    if "locales" not in manifest or not isinstance(manifest["locales"], dict):
        raise ValueError(f"Manifest missing 'locales' mapping: {manifest_path}")
    return manifest


def _manifest_relative_path(
    manifest: Dict[str, Any],
    *,
    language: str,
    category: str,
    key: str,
) -> Optional[str]:
    locale_block = manifest.get("locales", {}).get(language)
    if not isinstance(locale_block, dict):
        return None
    category_block = locale_block.get(category)
    if not isinstance(category_block, dict):
        return None
    rel = category_block.get(key)
    return rel if isinstance(rel, str) and rel.strip() else None


def _language_fallback_chain(
    manifest: Dict[str, Any],
    preferred: str,
) -> List[str]:
    default_locale = manifest.get("default_locale", DEFAULT_LANGUAGE)
    chain: List[str] = []
    for candidate in (preferred, default_locale, DEFAULT_LANGUAGE):
        normalized = normalize_language(candidate)
        if normalized not in chain:
            chain.append(normalized)
    return chain


def resolve_locale_asset(
    locales_root: Path,
    *,
    category: str,
    key: str,
    language: Optional[str] = None,
    project_root: Optional[Path] = None,
    fallback_path: Optional[Path] = None,
) -> Path:
    """
    Resolve a manifest entry to an existing locale file path.

    Fallback order: language chain from manifest -> optional fallback_path.
    """
    manifest_path = locales_root / "manifest.yaml"
    manifest = load_locale_manifest(manifest_path)

    if language is None:
        if project_root is None:
            language = manifest.get("default_locale", DEFAULT_LANGUAGE)
        else:
            language = resolve_language(project_root)

    for lang in _language_fallback_chain(manifest, language):
        rel = _manifest_relative_path(manifest, language=lang, category=category, key=key)
        if rel is None:
            continue
        candidate = (locales_root / lang / rel).resolve()
        if candidate.is_file():
            return candidate

    if fallback_path is not None and fallback_path.is_file():
        return fallback_path.resolve()

    raise FileNotFoundError(
        f"Locale asset not found: {locales_root} category={category!r} key={key!r} "
        f"language={language!r}"
    )


def default_frameworks_root() -> Path:
    """Discover packages/frameworks relative to this script (vendored layout)."""
    # .../packages/frameworks/workflow-mgt/scripts/localisation_config.py
    return Path(__file__).resolve().parent.parent.parent


def kanban_locales_root(frameworks_root: Optional[Path] = None) -> Path:
    root = frameworks_root or default_frameworks_root()
    return root / "kanban" / "locales"


def workflow_locales_root(frameworks_root: Optional[Path] = None) -> Path:
    root = frameworks_root or default_frameworks_root()
    return root / "workflow-mgt" / "locales"


KANBAN_INTAKE_TEMPLATE_KEYS: Dict[str, str] = {
    "fr": "FR_TEMPLATE.md",
    "br": "BR_TEMPLATE.md",
    "uxr": "UXR_TEMPLATE.md",
    "fb": "FB_TEMPLATE.md",
    "task": "TASK_TEMPLATE.md",
    "story": "STORY_TEMPLATE.md",
    "epic": "EPIC_TEMPLATE.md",
    "plan_doc": "PLAN_DOC_TEMPLATE.md",
}


def render_locale_text(
    locales_root: Path,
    *,
    category: str,
    key: str,
    project_root: Path,
    substitutions: Optional[Dict[str, str]] = None,
    fallback_path: Optional[Path] = None,
) -> str:
    """Load a locale fragment and substitute {{placeholder}} tokens."""
    path = resolve_locale_asset(
        locales_root,
        category=category,
        key=key,
        project_root=project_root,
        fallback_path=fallback_path,
    )
    text = path.read_text(encoding="utf-8")
    for name, value in (substitutions or {}).items():
        text = text.replace(f"{{{{{name}}}}}", value)
    return text


def resolve_kanban_intake_template(
    project_root: Path,
    template_key: str,
    *,
    frameworks_root: Optional[Path] = None,
) -> Path:
    """Resolve kanban intake template path for configured project language."""
    if template_key not in KANBAN_INTAKE_TEMPLATE_KEYS:
        raise KeyError(
            f"Unknown kanban intake template key {template_key!r}; "
            f"expected one of {sorted(KANBAN_INTAKE_TEMPLATE_KEYS)}"
        )
    fw_root = frameworks_root or default_frameworks_root()
    canonical = fw_root / "kanban" / "templates"
    fallback = canonical / KANBAN_INTAKE_TEMPLATE_KEYS[template_key]
    return resolve_locale_asset(
        kanban_locales_root(fw_root),
        category="templates",
        key=template_key,
        project_root=project_root,
        fallback_path=fallback,
    )
