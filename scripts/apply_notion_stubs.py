#!/usr/bin/env python3
"""
Apply FR-114 git stubs from migration manifest (E05:S08:T03).
"""

from __future__ import annotations

import argparse
import json
import re
from datetime import datetime, timezone
from pathlib import Path

REPO_ROOT = Path(__file__).resolve().parent.parent
DOCS = REPO_ROOT / "docs"
MANIFEST_PATH = DOCS / "knowledge" / "fr114-notion-migration-manifest.json"
FR114_LINK = (
    "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/"
    "docs/kanban/fr-br/"
    "FR-114-split-documentation-surfaces-docusaurus-public-notion-maintainer-kb.md"
)


def title_from_path(rel: str) -> str:
    stem = Path(rel).stem
    stem = re.sub(r"^T\d+-", "", stem)
    return stem.replace("-", " ").title()


def stub_content(rel: str, notion_url: str, migrated_at: str) -> str:
    title = title_from_path(rel)
    return f"""---
lifecycle: evergreen
created_at: {migrated_at}
housekeeping_policy: keep
notion_sot: true
---

# {title}

**SoT:** Notion Engineering KB — [{title}]({notion_url})

> Migrated from `docs/{rel}` per [FR-114]({FR114_LINK}). Full content lives in Notion.
"""


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument("--dry-run", action="store_true")
    parser.add_argument("--require-url", action="store_true", default=True)
    args = parser.parse_args()

    manifest = json.loads(MANIFEST_PATH.read_text(encoding="utf-8"))
    now = datetime.now(timezone.utc).strftime("%Y-%m-%dT%H:%M:%SZ")
    applied = 0
    skipped = 0

    for entry in manifest.get("entries", []):
        url = entry.get("notion_url")
        if not url:
            skipped += 1
            continue
        rel = entry["source_path"]
        path = DOCS / rel
        if not path.exists():
            skipped += 1
            continue
        content = stub_content(rel, url, entry.get("migrated_at") or now)
        if args.dry_run:
            print(f"would stub: {rel}")
        else:
            path.write_text(content, encoding="utf-8")
            entry["stub_applied"] = True
            entry["migrated_at"] = entry.get("migrated_at") or now
        applied += 1

    if not args.dry_run:
        manifest["updated_at"] = now
        MANIFEST_PATH.write_text(json.dumps(manifest, indent=2) + "\n", encoding="utf-8")

    print(f"applied={applied} skipped={skipped}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
