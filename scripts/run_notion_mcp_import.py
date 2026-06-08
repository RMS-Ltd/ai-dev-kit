#!/usr/bin/env python3
"""
Convert batch JSON to MCP notion-create-pages payload and record results.

Usage:
  python scripts/run_notion_mcp_import.py prepare .migration-batches/records-0.json
  # Agent calls MCP with printed JSON, saves response to /tmp/response.json
  python scripts/run_notion_mcp_import.py record .migration-batches/records-0.json /tmp/response.json
"""

from __future__ import annotations

import argparse
import json
import sys
from pathlib import Path

REPO_ROOT = Path(__file__).resolve().parent.parent


def prepare(batch_path: Path) -> None:
    batch = json.loads(batch_path.read_text(encoding="utf-8"))
    pages = batch["pages"]
    if not pages:
        print("[]", file=sys.stderr)
        return
    parent_id = pages[0]["parent_page_id"]
    payload = {
        "parent": {"page_id": parent_id, "type": "page_id"},
        "pages": [
            {"properties": p["properties"], "content": p["content"]}
            for p in pages
        ],
    }
    # Sidecar for record step
    sidecar = batch_path.with_suffix(".sidecar.json")
    sidecar.write_text(
        json.dumps(
            [{"source_path": p["manifest_source_path"]} for p in pages],
            indent=2,
        ),
        encoding="utf-8",
    )
    print(json.dumps(payload))


def record(batch_path: Path, response_path: Path) -> int:
    from record_notion_import_results import main as record_main  # noqa: PLC0415

    sidecar = json.loads(batch_path.with_suffix(".sidecar.json").read_text(encoding="utf-8"))
    response = json.loads(response_path.read_text(encoding="utf-8"))
    created = response.get("pages", response if isinstance(response, list) else [])
    mapping = []
    for i, item in enumerate(created):
        if i >= len(sidecar):
            break
        mapping.append(
            {
                "source_path": sidecar[i]["source_path"],
                "page_id": item.get("id", ""),
                "url": item.get("url", ""),
            }
        )
    tmp = batch_path.with_suffix(".mapping.json")
    tmp.write_text(json.dumps(mapping, indent=2), encoding="utf-8")
    sys.argv = ["record_notion_import_results.py", "--mapping", str(tmp)]
    return record_main()


def main() -> int:
    parser = argparse.ArgumentParser()
    sub = parser.add_subparsers(dest="cmd", required=True)
    p_prep = sub.add_parser("prepare")
    p_prep.add_argument("batch")
    p_rec = sub.add_parser("record")
    p_rec.add_argument("batch")
    p_rec.add_argument("response")
    args = parser.parse_args()
    batch_path = Path(args.batch)
    if args.cmd == "prepare":
        prepare(batch_path)
        return 0
    return record(batch_path, Path(args.response))


if __name__ == "__main__":
    raise SystemExit(main())
