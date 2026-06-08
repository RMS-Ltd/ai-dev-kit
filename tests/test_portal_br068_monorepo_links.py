"""
BR-068 / E05:S09:T11: publish-scope guard against out-of-plugin relative Markdown links.

Executable spec T1–T2 from IPP-E05S09T11 Wave 5.

A violation is a relative markdown link whose resolved path leaves the `docs/` tree
(the Docusaurus docs-plugin root). Internal `../` links within `docs/` are allowed.

See: docs/kanban/fr-br/BR-068-docusaurus-monorepo-markdown-links-break-strict-production-build.md
"""

from __future__ import annotations

import re
from pathlib import Path

import pytest

from tests.portal_allowlist import (
    DOCS_ROOT,
    GITHUB_BLOB_PREFIX,
    allowlisted_markdown_files,
    in_publish_scope,
)

REPO_ROOT = Path(__file__).resolve().parent.parent
CHEATSHEET_PATH = DOCS_ROOT / "guides" / "workflow-initiation-cheatsheet.md"

MARKDOWN_LINK_RE = re.compile(r"\[[^\]]*\]\(([^)]+)\)")


def _get_publish_scope_markdown_files() -> list[Path]:
    return allowlisted_markdown_files()


def _resolve_relative_link(source_file: Path, target: str) -> Path | None:
    target = target.strip()
    if not target or target.startswith(("http://", "https://", "mailto:", "#", "/")):
        return None
    path_part = target.split("#", 1)[0].strip()
    if not path_part:
        return None
    return (source_file.parent / path_part).resolve()


def _leaves_docs_plugin(resolved: Path) -> bool:
    try:
        resolved.relative_to(DOCS_ROOT.resolve())
    except ValueError:
        return True
    return not in_publish_scope(resolved)


def _find_out_of_plugin_links(source_file: Path, text: str) -> list[str]:
    violations: list[str] = []
    for match in MARKDOWN_LINK_RE.finditer(text):
        target = match.group(1).strip()
        resolved = _resolve_relative_link(source_file, target)
        if resolved is None:
            continue
        if _leaves_docs_plugin(resolved):
            violations.append(target)
    return violations


@pytest.fixture
def publish_scope_files() -> list[Path]:
    files = _get_publish_scope_markdown_files()
    assert files, f"No markdown files under publish scope in {DOCS_ROOT}"
    return files


def test_br068_t1_publish_scope_no_out_of_plugin_relative_links(publish_scope_files: list[Path]):
    """T1 — relative links in publish scope must resolve inside docs/ (BR-068)."""
    all_violations: list[str] = []
    for path in publish_scope_files:
        text = path.read_text(encoding="utf-8")
        hits = _find_out_of_plugin_links(path, text)
        for hit in hits:
            rel = path.relative_to(REPO_ROOT)
            all_violations.append(f"{rel}: {hit}")
    assert not all_violations, (
        f"Found {len(all_violations)} links leaving docs/ plugin root "
        f"(showing first 50):\n" + "\n".join(all_violations[:50])
    )


def test_br068_t2_cheatsheet_strategy_a_blob_links():
    """T2 — cheatsheet uses GitHub blob URLs for agent/command deep links."""
    assert CHEATSHEET_PATH.is_file(), f"Missing {CHEATSHEET_PATH}"
    text = CHEATSHEET_PATH.read_text(encoding="utf-8")
    assert GITHUB_BLOB_PREFIX in text
    assert f"{GITHUB_BLOB_PREFIX}.cursorrules" in text
    assert f"{GITHUB_BLOB_PREFIX}.claude/commands/rw.md" in text
