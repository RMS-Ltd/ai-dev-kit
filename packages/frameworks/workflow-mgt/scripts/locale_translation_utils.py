"""Shared helpers for locale translation management tools (E21:S03:T05)."""

from __future__ import annotations

import re
from dataclasses import dataclass
from enum import Enum
from pathlib import Path
from typing import Any, Dict, Iterable, Iterator, List, Optional, Tuple

import yaml

SOURCE_LOCALE = "en-GB"
ENGLISH_LOCALES = frozenset({"en-GB", "en-US"})

PACKAGES: Dict[str, str] = {
    "kanban": "packages/frameworks/kanban/locales",
    "workflow-mgt": "packages/frameworks/workflow-mgt/locales",
}

MANIFEST_CATEGORIES = ("templates", "docs", "scaffolds", "keys")

PLACEHOLDER_RE = re.compile(r"\{\{([^}]+)\}\}")


class Severity(str, Enum):
    ERROR = "error"
    WARNING = "warning"


@dataclass(frozen=True)
class LocaleIssue:
    severity: Severity
    code: str
    package: str
    locale: str
    message: str
    path: Optional[str] = None

    def format_line(self) -> str:
        loc = f" [{self.path}]" if self.path else ""
        return f"{self.severity.value.upper()} {self.package}/{self.locale}: {self.message}{loc}"


def repo_root_from_script(script_path: Path) -> Path:
    return script_path.resolve().parents[4]


def load_yaml(path: Path) -> Dict[str, Any]:
    with open(path, encoding="utf-8") as handle:
        data = yaml.safe_load(handle)
    if data is None:
        return {}
    if not isinstance(data, dict):
        raise ValueError(f"Expected mapping in {path}")
    return data


def dump_yaml(path: Path, data: Dict[str, Any]) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    with open(path, "w", encoding="utf-8") as handle:
        yaml.dump(data, handle, default_flow_style=False, sort_keys=False, allow_unicode=True)


def extract_placeholders(value: str) -> frozenset[str]:
    return frozenset(PLACEHOLDER_RE.findall(value))


def iter_package_keys(
    project_root: Path, packages: Iterable[str]
) -> Iterator[Tuple[str, Path]]:
    for package in packages:
        yield package, project_root / PACKAGES[package]


def locales_on_disk(locales_root: Path, manifest: Dict[str, Any]) -> List[str]:
    registered = list((manifest.get("locales") or {}).keys())
    present = [p.name for p in locales_root.iterdir() if p.is_dir() and not p.name.startswith(".")]
    return sorted(set(registered) & set(present))


def manifest_asset_paths(
    manifest: Dict[str, Any], locale: str
) -> List[Tuple[str, str, str]]:
    """Return (category, stable_key, relative_path) for a locale block."""
    block = (manifest.get("locales") or {}).get(locale) or {}
    rows: List[Tuple[str, str, str]] = []
    for category in MANIFEST_CATEGORIES:
        mapping = block.get(category) or {}
        if not isinstance(mapping, dict):
            continue
        for stable_key, rel in mapping.items():
            if isinstance(rel, str):
                rows.append((category, stable_key, rel))
    return rows


def key_catalog_paths(locales_root: Path, locale: str) -> List[Path]:
    keys_dir = locales_root / locale / "keys"
    if not keys_dir.is_dir():
        return []
    return sorted(keys_dir.glob("*.yaml")) + sorted(keys_dir.glob("*.yml"))


def read_key_catalog(path: Path) -> Tuple[Dict[str, str], Optional[str]]:
    """Return (keys map, parse error message)."""
    try:
        data = load_yaml(path)
    except (yaml.YAMLError, OSError, ValueError) as exc:
        return {}, str(exc)
    keys_block = data.get("keys") or {}
    if not isinstance(keys_block, dict):
        return {}, f"keys block is not a mapping in {path}"
    catalog: Dict[str, str] = {}
    for key, value in keys_block.items():
        if not isinstance(key, str):
            continue
        catalog[key] = "" if value is None else str(value)
    return catalog, None


def compare_key_catalogs(
    *,
    package: str,
    locale: str,
    rel_path: str,
    source: Dict[str, str],
    target: Dict[str, str],
) -> List[LocaleIssue]:
    issues: List[LocaleIssue] = []
    path_hint = rel_path

    for key in sorted(set(source) - set(target)):
        issues.append(
            LocaleIssue(
                Severity.ERROR,
                "missing_key",
                package,
                locale,
                f"missing key '{key}' (present in {SOURCE_LOCALE})",
                path_hint,
            )
        )

    for key in sorted(set(target) - set(source)):
        issues.append(
            LocaleIssue(
                Severity.WARNING,
                "extra_key",
                package,
                locale,
                f"extra key '{key}' (not in {SOURCE_LOCALE})",
                path_hint,
            )
        )

    for key in sorted(set(source) & set(target)):
        src_val = source[key]
        tgt_val = target[key]
        src_ph = extract_placeholders(src_val)
        tgt_ph = extract_placeholders(tgt_val)
        if src_ph != tgt_ph:
            issues.append(
                LocaleIssue(
                    Severity.ERROR,
                    "placeholder_mismatch",
                    package,
                    locale,
                    f"key '{key}' placeholder mismatch: {SOURCE_LOCALE} {sorted(src_ph)} vs {sorted(tgt_ph)}",
                    path_hint,
                )
            )
        elif (
            locale not in ENGLISH_LOCALES
            and tgt_val == src_val
            and src_val.strip()
        ):
            issues.append(
                LocaleIssue(
                    Severity.WARNING,
                    "interim_copy",
                    package,
                    locale,
                    f"key '{key}' still identical to {SOURCE_LOCALE} (linguistic pending)",
                    path_hint,
                )
            )

    return issues


def validate_package_locales(
    project_root: Path,
    package: str,
    *,
    locale_filter: Optional[Iterable[str]] = None,
) -> List[LocaleIssue]:
    locales_root = project_root / PACKAGES[package]
    manifest_path = locales_root / "manifest.yaml"
    issues: List[LocaleIssue] = []

    if not manifest_path.is_file():
        issues.append(
            LocaleIssue(
                Severity.ERROR,
                "missing_manifest",
                package,
                "-",
                f"manifest missing: {manifest_path}",
                str(manifest_path.relative_to(project_root)),
            )
        )
        return issues

    try:
        manifest = load_yaml(manifest_path)
    except (yaml.YAMLError, OSError, ValueError) as exc:
        issues.append(
            LocaleIssue(
                Severity.ERROR,
                "manifest_parse",
                package,
                "-",
                f"manifest parse failed: {exc}",
                str(manifest_path.relative_to(project_root)),
            )
        )
        return issues

    source_root = locales_root / SOURCE_LOCALE
    if not source_root.is_dir():
        issues.append(
            LocaleIssue(
                Severity.ERROR,
                "missing_source_locale",
                package,
                SOURCE_LOCALE,
                f"source locale directory missing: {source_root}",
            )
        )
        return issues

    allowed = set(locale_filter) if locale_filter else None
    for locale in locales_on_disk(locales_root, manifest):
        if allowed is not None and locale not in allowed:
            continue
        if locale == SOURCE_LOCALE:
            continue

        for category, stable_key, rel in manifest_asset_paths(manifest, locale):
            asset_path = locales_root / locale / rel
            rel_repo = str(asset_path.relative_to(project_root))
            if not asset_path.is_file():
                issues.append(
                    LocaleIssue(
                        Severity.ERROR,
                        "missing_manifest_asset",
                        package,
                        locale,
                        f"{category}.{stable_key} path missing: {rel}",
                        rel_repo,
                    )
                )

        source_key_files = {p.name: p for p in key_catalog_paths(locales_root, SOURCE_LOCALE)}
        target_key_files = {p.name: p for p in key_catalog_paths(locales_root, locale)}

        for name, source_path in sorted(source_key_files.items()):
            rel_path = str(source_path.relative_to(project_root))
            target_path = target_key_files.get(name)
            if target_path is None:
                issues.append(
                    LocaleIssue(
                        Severity.ERROR,
                        "missing_key_file",
                        package,
                        locale,
                        f"missing keys file '{name}' (present in {SOURCE_LOCALE})",
                        rel_path,
                    )
                )
                continue

            source_keys, src_err = read_key_catalog(source_path)
            if src_err:
                issues.append(
                    LocaleIssue(
                        Severity.ERROR,
                        "yaml_parse",
                        package,
                        SOURCE_LOCALE,
                        f"{name}: {src_err}",
                        rel_path,
                    )
                )
                continue

            target_keys, tgt_err = read_key_catalog(target_path)
            tgt_rel = str(target_path.relative_to(project_root))
            if tgt_err:
                issues.append(
                    LocaleIssue(
                        Severity.ERROR,
                        "yaml_parse",
                        package,
                        locale,
                        f"{name}: {tgt_err}",
                        tgt_rel,
                    )
                )
                continue

            issues.extend(
                compare_key_catalogs(
                    package=package,
                    locale=locale,
                    rel_path=tgt_rel,
                    source=source_keys,
                    target=target_keys,
                )
            )

    return issues


STRICT_CODES = frozenset({"missing_key", "placeholder_mismatch"})
HARD_EXIT_CODES = frozenset(
    {
        "missing_manifest",
        "manifest_parse",
        "missing_source_locale",
        "missing_manifest_asset",
        "missing_key_file",
        "yaml_parse",
    }
)


def should_exit_nonzero(issues: List[LocaleIssue], *, strict: bool) -> bool:
    for issue in issues:
        if issue.code in HARD_EXIT_CODES:
            return True
        if strict and issue.code in STRICT_CODES and issue.severity == Severity.ERROR:
            return True
    return False


def sync_locale_keys_for_package(
    project_root: Path,
    package: str,
    target_locale: str,
    *,
    dry_run: bool,
) -> Dict[str, Any]:
    if target_locale == SOURCE_LOCALE:
        raise ValueError(f"target locale cannot be {SOURCE_LOCALE}")

    locales_root = project_root / PACKAGES[package]
    source_root = locales_root / SOURCE_LOCALE
    target_root = locales_root / target_locale
    stats: Dict[str, Any] = {
        "package": package,
        "target": target_locale,
        "files_updated": 0,
        "keys_added": 0,
        "dry_run": dry_run,
    }

    if not source_root.is_dir():
        raise FileNotFoundError(f"Source locale missing: {source_root}")
    if not target_root.is_dir():
        raise FileNotFoundError(f"Target locale missing: {target_root}")

    for source_path in key_catalog_paths(locales_root, SOURCE_LOCALE):
        name = source_path.name
        target_path = target_root / "keys" / name
        if not target_path.is_file():
            continue

        source_data = load_yaml(source_path)
        target_data = load_yaml(target_path)
        source_keys = source_data.get("keys") or {}
        target_keys = target_data.setdefault("keys", {})
        if not isinstance(source_keys, dict) or not isinstance(target_keys, dict):
            continue

        added = 0
        for key, value in source_keys.items():
            if key not in target_keys:
                target_keys[key] = value
                added += 1

        if isinstance(target_data.get("_meta"), dict):
            target_data["_meta"]["locale"] = target_locale

        if added:
            stats["keys_added"] += added
            stats["files_updated"] += 1
            if not dry_run:
                dump_yaml(target_path, target_data)

    return stats
