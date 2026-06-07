"""
Shared FR-114 / E05:S09:T15 Docusaurus adopter-public allowlist constants.

Single source for portal pytest modules — keep in sync with ADR-024 and
portal/docusaurus.config.js exclude globs.
"""

from __future__ import annotations

from pathlib import Path

REPO_ROOT = Path(__file__).resolve().parent.parent
DOCS_ROOT = REPO_ROOT / "docs"
PORTAL_DIR = REPO_ROOT / "portal"

GITHUB_BLOB_PREFIX = "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/"

ALLOWLIST_SIDEBAR_DIRS = frozenset({"guides", "documentation"})
ALLOWLIST_DOC_IDS = frozenset({"developer-tools/ide-whitelist-guide"})

CONFIG_EXCLUDE_GLOBS = (
    "project-management/**",
    "implementation-cycles/**",
    "maintenance/**",
    "analysis/**",
    "knowledge/**",
    "journals/**",
    "architecture/**",
    "governance/**",
    "changelog-and-release-notes/**",
    "release-notes/**",
    "book-project/**",
    "project-agent-index.md",
    "project-agent-manifest.json",
    "project-agent-manifest.schema.json",
    "developer-tools/ide-whitelist-uat-log.md",
)

CI_ALLOWLIST_PATHS = (
    "portal/**",
    "docs/guides/**",
    "docs/documentation/**",
    "docs/developer-tools/ide-whitelist-guide.md",
    ".github/workflows/docusaurus-build.yml",
)

BANNED_REL_PREFIXES = (
    "../project-management/",
    "../../project-management/",
    "../architecture/",
    "../../architecture/",
    "../implementation-cycles/",
    "../../implementation-cycles/",
    "../maintenance/",
    "../../maintenance/",
    "../knowledge/",
    "../../knowledge/",
    "../governance/",
    "../../governance/",
)


def allowlisted_markdown_files() -> list[Path]:
    files = list((DOCS_ROOT / "guides").rglob("*.md"))
    files.extend((DOCS_ROOT / "documentation").rglob("*.md"))
    guide = DOCS_ROOT / "developer-tools" / "ide-whitelist-guide.md"
    if guide.is_file():
        files.append(guide)
    return sorted(files)


def in_publish_scope(path: Path) -> bool:
    if path == DOCS_ROOT / "developer-tools" / "ide-whitelist-guide.md":
        return True
    try:
        rel = path.relative_to(DOCS_ROOT)
    except ValueError:
        return False
    return bool(rel.parts) and rel.parts[0] in ALLOWLIST_SIDEBAR_DIRS
