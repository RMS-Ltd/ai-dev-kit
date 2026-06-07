"""
Language/localisation helpers for workflow-mgt installers (FR-006).

Write path: E21:S01:T02/T03 (ai-dev-kit-config.yaml).
Read/resolve: E21:S01:T05 (manifest asset paths).
Consumption: E21:S01:T06 (RW scaffolds + kanban intake templates).
Detection: E21:S02:T03 (system/browser/env precedence in resolve_language).
Switching: E21:S02:T04 (`switch_locale`, `--locale`, `adk config locale`).
Keys: E21:S02:T06 (`resolve_locale_key`, YAML key catalogs).
Fallback: E21:S02:T07 (`_language_fallback_chain`: selected → default → en-GB → en-US).

Precedence (resolve_language): override → config file → ADK_LOCALE → system
locale → accept_language → default_locale (en-GB).

Vendored with install_release_workflow.py for adopter projects.
"""

from __future__ import annotations

import locale
import os
from pathlib import Path
from typing import Any, Dict, List, Mapping, Optional, Sequence, Tuple

import yaml

LOCALISATION_CONFIG_FILENAME = "ai-dev-kit-config.yaml"

LOCALE_VARIANTS: Dict[str, Dict[str, str]] = {
    "en-GB": {"language": "en-GB", "variant": "UK"},
    "en-US": {"language": "en-US", "variant": "US"},
}

DEFAULT_LANGUAGE = "en-GB"
SECONDARY_ENGLISH_LOCALE = "en-US"

ADK_LOCALE_ENV = "ADK_LOCALE"
ADK_ACCEPT_LANGUAGE_ENV = "ADK_ACCEPT_LANGUAGE"

FR006_SUPPORTED_LOCALES: Tuple[str, ...] = (
    "en-GB",
    "en-US",
    "es",
    "fr",
    "de",
    "zh-CN",
    "zh-TW",
    "ja",
    "pt",
    "ru",
    "ar",
)


def parse_locale_tag(raw: Optional[str]) -> Optional[str]:
    """Normalize a locale identifier to a BCP 47-style tag (e.g. en_GB.UTF-8 → en-GB)."""
    if raw is None:
        return None
    text = str(raw).strip()
    if not text:
        return None
    if "." in text:
        text = text.split(".", 1)[0]
    if "@" in text:
        text = text.split("@", 1)[0]
    text = text.replace("_", "-")
    parts = [part for part in text.split("-") if part]
    if not parts:
        return None
    language = parts[0].lower()
    if len(parts) == 1:
        return language
    if len(parts[1]) == 4:
        return f"{language}-{parts[1].title()}"
    return f"{language}-{parts[1].upper()}"


def map_to_supported_locale(
    tag: Optional[str],
    supported_locales: Optional[Sequence[str]] = None,
) -> str:
    """Map a locale tag to the nearest FR-006 supported locale or DEFAULT_LANGUAGE."""
    registry = tuple(supported_locales) if supported_locales else FR006_SUPPORTED_LOCALES
    registry_set = set(registry)
    parsed = parse_locale_tag(tag)
    if parsed is None:
        return DEFAULT_LANGUAGE
    if parsed in registry_set:
        return parsed
    parts = parsed.split("-", 1)
    language = parts[0]
    region = parts[1] if len(parts) > 1 else None
    if language == "en":
        if region in ("US",):
            return "en-US" if "en-US" in registry_set else DEFAULT_LANGUAGE
        if region in ("GB", "UK"):
            return "en-GB" if "en-GB" in registry_set else DEFAULT_LANGUAGE
        return DEFAULT_LANGUAGE
    if language == "zh":
        if region in ("TW", "HANT"):
            return "zh-TW" if "zh-TW" in registry_set else DEFAULT_LANGUAGE
        return "zh-CN" if "zh-CN" in registry_set else DEFAULT_LANGUAGE
    for candidate in registry:
        if candidate.split("-", 1)[0] == language:
            return candidate
    return DEFAULT_LANGUAGE


def detect_env_locale(environ: Optional[Mapping[str, str]] = None) -> Optional[str]:
    """Read ADK_LOCALE from the environment."""
    env = dict(os.environ if environ is None else environ)
    raw = env.get(ADK_LOCALE_ENV)
    if not raw or not str(raw).strip():
        return None
    return parse_locale_tag(raw)


def detect_system_locale(environ: Optional[Mapping[str, str]] = None) -> Optional[str]:
    """Detect locale from LC_ALL, LANG, or locale.getlocale()."""
    env = dict(os.environ if environ is None else environ)
    for key in ("LC_ALL", "LANG"):
        raw = env.get(key)
        if raw and str(raw).strip() and str(raw).lower() != "c":
            parsed = parse_locale_tag(raw)
            if parsed:
                return parsed
    try:
        current = locale.getlocale()[0]
    except (ValueError, TypeError):
        current = None
    if current:
        return parse_locale_tag(current)
    return None


def parse_accept_language(header: str) -> List[Tuple[str, float]]:
    """Parse an RFC 7231 Accept-Language header into (tag, q) pairs, highest q first."""
    entries: List[Tuple[str, float]] = []
    for part in header.split(","):
        segment = part.strip()
        if not segment:
            continue
        if ";q=" in segment.lower():
            tag_part, _, q_part = segment.partition(";")
            tag = tag_part.strip()
            q_text = q_part.strip()
            if q_text.lower().startswith("q="):
                try:
                    q_value = float(q_text[2:].strip())
                except ValueError:
                    q_value = 0.0
            else:
                q_value = 1.0
        else:
            tag = segment
            q_value = 1.0
        parsed = parse_locale_tag(tag)
        if parsed:
            entries.append((parsed, q_value))
    entries.sort(key=lambda item: item[1], reverse=True)
    return entries


def detect_browser_locale(
    accept_language: Optional[str] = None,
    *,
    environ: Optional[Mapping[str, str]] = None,
    supported_locales: Optional[Sequence[str]] = None,
) -> Optional[str]:
    """
    Pick the best locale from an Accept-Language header (or ADK_ACCEPT_LANGUAGE env).

    Returns the highest-weight tag from the header without mapping to supported locales.
    """
    header = accept_language
    if header is None:
        env = dict(os.environ if environ is None else environ)
        header = env.get(ADK_ACCEPT_LANGUAGE_ENV)
    if not header or not str(header).strip():
        return None
    registry = tuple(supported_locales) if supported_locales else FR006_SUPPORTED_LOCALES
    registry_set = set(registry)
    for tag, _q in parse_accept_language(str(header)):
        if tag in registry_set:
            return tag
        language = tag.split("-", 1)[0]
        for candidate in registry:
            if candidate.split("-", 1)[0] == language:
                return candidate
    parsed = parse_accept_language(str(header))
    return parsed[0][0] if parsed else None


def _config_file_language(project_root: Path) -> Optional[str]:
    """Return language from ai-dev-kit-config.yaml when file exists with valid localisation."""
    config_path = project_root / LOCALISATION_CONFIG_FILENAME
    if not config_path.is_file():
        return None
    try:
        with open(config_path, encoding="utf-8") as handle:
            payload = yaml.safe_load(handle) or {}
    except (OSError, yaml.YAMLError):
        return None
    localisation = payload.get("localisation")
    if not isinstance(localisation, dict):
        return None
    raw_language = localisation.get("language")
    if not isinstance(raw_language, str) or not raw_language.strip():
        return None
    return map_to_supported_locale(raw_language)


def _apply_locale_substitutions(
    text: str,
    substitutions: Optional[Dict[str, str]] = None,
) -> str:
    """Replace {{placeholder}} tokens in a locale string."""
    for name, value in (substitutions or {}).items():
        text = text.replace(f"{{{{{name}}}}}", value)
    return text


_KEY_CATALOG_CACHE: Dict[Tuple[str, float], Dict[str, str]] = {}


def _parse_locale_key(key: str) -> str:
    """Return domain segment from a domain.section.name locale key."""
    parts = key.split(".")
    if len(parts) < 3:
        raise ValueError(
            f"Locale key must use domain.section.name format (at least 3 segments): {key!r}"
        )
    domain = parts[0]
    if not domain:
        raise ValueError(f"Locale key domain must be non-empty: {key!r}")
    return domain


def _load_key_catalog(catalog_path: Path) -> Dict[str, str]:
    """Load and cache the flat keys map from a keys/*.yaml catalog file."""
    if not catalog_path.is_file():
        return {}
    mtime = catalog_path.stat().st_mtime
    cache_key = (str(catalog_path.resolve()), mtime)
    cached = _KEY_CATALOG_CACHE.get(cache_key)
    if cached is not None:
        return cached

    with open(catalog_path, encoding="utf-8") as handle:
        data = yaml.safe_load(handle) or {}
    keys_block = data.get("keys", {})
    if not isinstance(keys_block, dict):
        raise ValueError(f"Invalid keys catalog (missing 'keys' mapping): {catalog_path}")

    domain = data.get("_meta", {}).get("domain") if isinstance(data.get("_meta"), dict) else None
    result: Dict[str, str] = {}
    for raw_key, raw_value in keys_block.items():
        key_text = str(raw_key)
        if domain and not key_text.startswith(f"{domain}."):
            raise ValueError(
                f"Key {key_text!r} must start with domain prefix {domain!r} in {catalog_path}"
            )
        result[key_text] = str(raw_value)

    _KEY_CATALOG_CACHE[cache_key] = result
    return result


def _locales_root_for_package(
    package: str,
    frameworks_root: Optional[Path] = None,
) -> Path:
    if package == "workflow-mgt":
        return workflow_locales_root(frameworks_root)
    if package == "kanban":
        return kanban_locales_root(frameworks_root)
    raise ValueError(f"Unknown locale package: {package!r}; expected 'workflow-mgt' or 'kanban'")


def resolve_locale_key(
    project_root: Path,
    key: str,
    *,
    package: str = "workflow-mgt",
    substitutions: Optional[Dict[str, str]] = None,
    language: Optional[str] = None,
    frameworks_root: Optional[Path] = None,
) -> str:
    """
    Resolve a dotted locale key (domain.section.name) to a translated string.

    Uses manifest v2 keys category and ADR-024 fallback chain
    (selected → default_locale → en-GB → en-US) with in-process catalog cache.
    """
    domain = _parse_locale_key(key)
    if not key.startswith(f"{domain}."):
        raise ValueError(f"Locale key must start with domain prefix {domain!r}: {key!r}")

    locales_root = _locales_root_for_package(package, frameworks_root)
    manifest_path = locales_root / "manifest.yaml"
    manifest = load_locale_manifest(manifest_path)

    if language is None:
        language = resolve_language(project_root)

    languages_tried: List[str] = []
    for lang in _language_fallback_chain(manifest, language):
        languages_tried.append(lang)
        rel = _manifest_relative_path(manifest, language=lang, category="keys", key=domain)
        if rel is None:
            continue
        catalog_path = (locales_root / lang / rel).resolve()
        catalog = _load_key_catalog(catalog_path)
        if key in catalog:
            return _apply_locale_substitutions(catalog[key], substitutions)

    raise KeyError(
        f"Locale key not found: package={package!r} key={key!r} "
        f"languages_tried={languages_tried}"
    )


def _resolve_locale_key_or_none(
    project_root: Optional[Path],
    key: str,
    *,
    substitutions: Optional[Dict[str, str]] = None,
) -> Optional[str]:
    if project_root is None:
        return None
    try:
        return resolve_locale_key(project_root, key, substitutions=substitutions)
    except (KeyError, ValueError, FileNotFoundError):
        return None


def prompt_language_choice(project_root: Optional[Path] = None) -> Dict[str, str]:
    """Interactive prompt for UK/US English variant (FR-006 numbered format)."""
    print()
    print(
        _resolve_locale_key_or_none(project_root, "cli.prompt.language_choice")
        or "Select your preferred English variant:"
    )
    print(
        _resolve_locale_key_or_none(project_root, "cli.prompt.language_uk")
        or "  [1] UK English (en-GB) — colour, organise, realise  [default]"
    )
    print(
        _resolve_locale_key_or_none(project_root, "cli.prompt.language_us")
        or "  [2] US English (en-US) — color, organize, realize"
    )
    invalid_msg = (
        _resolve_locale_key_or_none(project_root, "errors.cli.invalid_language_choice")
        or "  Invalid choice. Enter 1 or 2."
    )
    prompt = (
        _resolve_locale_key_or_none(project_root, "cli.prompt.enter_choice")
        or "Enter choice [1-2]:"
    )
    while True:
        answer = input(f"{prompt} ").strip()
        if answer in ("", "1"):
            return LOCALE_VARIANTS[DEFAULT_LANGUAGE].copy()
        if answer == "2":
            return LOCALE_VARIANTS["en-US"].copy()
        print(invalid_msg)


def locale_payload_from_tag(tag: Optional[str]) -> Dict[str, str]:
    """Build localisation dict for ai-dev-kit-config.yaml from a locale tag."""
    language = map_to_supported_locale(tag)
    if language in LOCALE_VARIANTS:
        return LOCALE_VARIANTS[language].copy()
    return {"language": language, "variant": language}


def resolve_language_from_args(
    language: Optional[str],
    non_interactive: bool,
    *,
    locale: Optional[str] = None,
) -> Dict[str, str]:
    """Resolve locale from CLI flags or interactive prompt."""
    tag = locale if locale is not None else language
    if tag is not None:
        return locale_payload_from_tag(tag)
    if non_interactive:
        return LOCALE_VARIANTS[DEFAULT_LANGUAGE].copy()
    return prompt_language_choice()


def switch_locale(
    project_root: Path,
    locale_tag: Optional[str] = None,
    *,
    interactive: bool = False,
    dry_run: bool = False,
) -> Dict[str, Any]:
    """
    Switch persisted project locale by rewriting ai-dev-kit-config.yaml.

    Returns dict with previous, current, and path (or dry_run flag).
    """
    previous = read_localisation_config(project_root)
    if interactive:
        current = prompt_language_choice(project_root)
    else:
        current = locale_payload_from_tag(locale_tag)
    config_path = project_root / LOCALISATION_CONFIG_FILENAME
    if dry_run:
        return {
            "previous": previous,
            "current": current,
            "path": None,
            "dry_run": True,
        }
    written = write_localisation_config(project_root, current)
    print(f"✅ Language preference saved: {current['language']} ({current['variant']})")
    print(f"   Localisation config: {written}")
    return {
        "previous": previous,
        "current": current,
        "path": written,
        "dry_run": False,
    }


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
    locale: Optional[str] = None,
    non_interactive: bool = False,
    force: bool = False,
    dry_run: bool = False,
) -> Optional[Path]:
    """
    Ensure ai-dev-kit-config.yaml exists at project root.

    If the file exists and force is False, skip write and return None.
    When force is True, overwrites via switch_locale semantics.
    """
    config_path = project_root / LOCALISATION_CONFIG_FILENAME
    if config_path.exists() and not force:
        print(f"ℹ️  Using existing localisation config: {config_path}")
        return None

    tag = locale if locale is not None else language
    interactive = tag is None and not non_interactive

    if force and config_path.exists():
        result = switch_locale(
            project_root,
            tag,
            interactive=interactive,
            dry_run=dry_run,
        )
        if dry_run:
            return None
        return result.get("path")

    locale_dict = resolve_language_from_args(
        language,
        non_interactive,
        locale=locale,
    )
    if dry_run:
        print(f"🔍 [DRY RUN] Would write {config_path}:")
        print(f"   localisation: {locale_dict}")
        return None

    written = write_localisation_config(project_root, locale_dict)
    print(f"✅ Language preference saved: {locale_dict['language']} ({locale_dict['variant']})")
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

    raw_language = localisation.get("language")
    if not isinstance(raw_language, str) or not raw_language.strip():
        return _default_locale_dict()

    mapped = map_to_supported_locale(raw_language)
    if mapped not in FR006_SUPPORTED_LOCALES:
        return _default_locale_dict()

    result = locale_payload_from_tag(mapped)
    stored_variant = localisation.get("variant")
    if mapped in LOCALE_VARIANTS and stored_variant in ("UK", "US"):
        result["variant"] = stored_variant
    return result


def resolve_language(
    project_root: Path,
    *,
    override: Optional[str] = None,
    accept_language: Optional[str] = None,
) -> str:
    """
    Effective language with ADR-024 detection precedence.

    override → config file → ADK_LOCALE → system locale → accept_language → default.
    """
    if override is not None:
        return map_to_supported_locale(override)

    config_language = _config_file_language(project_root)
    if config_language is not None:
        return config_language

    env_language = detect_env_locale()
    if env_language is not None:
        return map_to_supported_locale(env_language)

    system_language = detect_system_locale()
    if system_language is not None:
        return map_to_supported_locale(system_language)

    if accept_language is not None:
        browser_language = detect_browser_locale(accept_language)
        if browser_language is not None:
            return map_to_supported_locale(browser_language)

    return DEFAULT_LANGUAGE


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
    """
    Ordered locale tags for asset/key resolution (ADR-024 T07).

    selected → default_locale → en-GB → en-US (deduplicated).
    """
    default_locale = map_to_supported_locale(manifest.get("default_locale", DEFAULT_LANGUAGE))
    mapped_preferred = map_to_supported_locale(preferred)
    chain: List[str] = []
    for candidate in (
        mapped_preferred,
        default_locale,
        DEFAULT_LANGUAGE,
        SECONDARY_ENGLISH_LOCALE,
    ):
        mapped = map_to_supported_locale(candidate)
        if mapped not in chain:
            chain.append(mapped)
    return chain


def language_fallback_chain(
    locales_root: Path,
    preferred: str,
) -> List[str]:
    """Return ordered locale fallback chain for a package locales root."""
    manifest_path = locales_root / "manifest.yaml"
    manifest = load_locale_manifest(manifest_path)
    return _language_fallback_chain(manifest, preferred)


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

    Fallback order: selected → default_locale → en-GB → en-US → optional fallback_path.
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
    return _apply_locale_substitutions(text, substitutions)


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
