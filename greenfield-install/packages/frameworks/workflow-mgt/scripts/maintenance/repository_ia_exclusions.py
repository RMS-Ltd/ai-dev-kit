"""Shared exclusion patterns for repository IA manifest generator and validators (FR-140 / T13 §0)."""

from __future__ import annotations

from dataclasses import dataclass
from pathlib import Path


@dataclass(frozen=True)
class ExclusionRule:
    pattern: str
    rationale: str


# Canonical list — sourced from REPOSITORY-DIRECTORY-AUDIT.md §0 (T13).
EXCLUSION_RULES: tuple[ExclusionRule, ...] = (
    ExclusionRule(".git/**", "VCS metadata"),
    ExclusionRule("node_modules/**", "NPM vendor"),
    ExclusionRule("**/__pycache__/**", "Python bytecode cache"),
    ExclusionRule(".pytest_cache/**", "Pytest cache"),
    ExclusionRule(".ruff_cache/**", "Ruff cache"),
    ExclusionRule(".mypy_cache/**", "Mypy cache"),
    ExclusionRule(".venv/**", "Local Python virtualenv"),
    ExclusionRule(".venv-*/**", "Local Python virtualenv variant"),
    ExclusionRule("venv/**", "Local Python virtualenv"),
    ExclusionRule("env/**", "Local Python virtualenv"),
    ExclusionRule("portal/build/**", "Docusaurus production build output"),
    ExclusionRule("portal/.docusaurus/**", "Docusaurus cache"),
    ExclusionRule("htmlcov/**", "Coverage HTML output"),
    ExclusionRule(".cqg/**", "CodeQL local cache"),
    ExclusionRule("**/*.egg-info/**", "Python package metadata build artifact"),
)

# Directory names pruned during tree walk (any depth).
PRUNE_DIR_NAMES: frozenset[str] = frozenset(
    {
        ".git",
        "node_modules",
        "__pycache__",
        ".pytest_cache",
        ".ruff_cache",
        ".mypy_cache",
        ".venv",
        "venv",
        "env",
        "htmlcov",
        ".cqg",
    }
)


def path_is_excluded(rel_posix: str) -> bool:
    """Return True when a repo-relative POSIX path matches an exclusion rule."""
    normalized = rel_posix.strip("/")
    if not normalized:
        return False
    parts = normalized.split("/")
    if any(p.endswith(".egg-info") for p in parts):
        return True
    if any(p.startswith(".venv-") for p in parts):
        return True
    if parts[0] == "portal" and len(parts) >= 2 and parts[1] in {"build", ".docusaurus"}:
        return True
    if parts[0] in PRUNE_DIR_NAMES:
        return True
    for part in parts:
        if part in PRUNE_DIR_NAMES:
            return True
    return False


def should_prune_dir(name: str) -> bool:
    return name in PRUNE_DIR_NAMES or name.endswith(".egg-info") or name.startswith(".venv-")


def exclusions_as_dicts() -> list[dict[str, str]]:
    return [{"pattern": r.pattern, "rationale": r.rationale} for r in EXCLUSION_RULES]


def repo_relative_posix(path: Path, root: Path) -> str:
    rel = path.relative_to(root).as_posix()
    return "." if rel == "." else rel
