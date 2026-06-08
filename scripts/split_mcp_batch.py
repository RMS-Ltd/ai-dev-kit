#!/usr/bin/env python3
"""Split MCP batch JSON into chunks of N pages."""

from __future__ import annotations

import argparse
import json
from pathlib import Path


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument("mcp_json")
    parser.add_argument("--chunk-size", type=int, default=25)
    parser.add_argument("--out-dir", type=Path, required=True)
    args = parser.parse_args()
    payload = json.loads(Path(args.mcp_json).read_text(encoding="utf-8"))
    pages = payload["pages"]
    parent = payload["parent"]
    batch_stem = Path(args.mcp_json).stem.replace("-mcp", "")
    orig_batch = Path(args.mcp_json).parent / f"{batch_stem}.json"
    orig = json.loads(orig_batch.read_text(encoding="utf-8"))
    orig_pages = orig["pages"]
    args.out_dir.mkdir(parents=True, exist_ok=True)
    chunks = []
    for i in range(0, len(pages), args.chunk_size):
        chunk_pages = pages[i : i + args.chunk_size]
        chunk_orig = orig_pages[i : i + args.chunk_size]
        idx = i // args.chunk_size
        chunk_path = args.out_dir / f"{batch_stem}-chunk{idx}-mcp.json"
        sidecar_path = args.out_dir / f"{batch_stem}-chunk{idx}.sidecar.json"
        chunk_path.write_text(
            json.dumps({"parent": parent, "pages": chunk_pages}, indent=2),
            encoding="utf-8",
        )
        sidecar_path.write_text(
            json.dumps(
                [{"source_path": p["manifest_source_path"]} for p in chunk_orig],
                indent=2,
            ),
            encoding="utf-8",
        )
        chunks.append((chunk_path, sidecar_path, len(chunk_pages)))
    print(json.dumps(chunks, default=str))
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
