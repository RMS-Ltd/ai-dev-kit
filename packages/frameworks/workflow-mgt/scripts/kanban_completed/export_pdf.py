"""Minimal PDF export (stdlib only) for completed-task ledger."""

from __future__ import annotations

import textwrap
from pathlib import Path
from typing import Iterable, List

from kanban_completed.db import utc_now_iso
from kanban_completed.ledger import CompletedTaskRow


def _escape_pdf_text(value: str) -> str:
    return value.replace("\\", "\\\\").replace("(", "\\(").replace(")", "\\)")


def _wrap_lines(text: str, width: int = 95) -> List[str]:
    lines: List[str] = []
    for part in text.splitlines() or [""]:
        lines.extend(textwrap.wrap(part, width=width) or [""])
    return lines


def write_completed_ledger_pdf(
    path: Path,
    *,
    recent: Iterable[CompletedTaskRow],
    all_rows: Iterable[CompletedTaskRow],
    generated_at: str | None = None,
) -> None:
    generated = generated_at or utc_now_iso()
    recent_list = list(recent)
    all_list = list(all_rows)
    content_lines: List[str] = [
        "Kanban Completed Tasks",
        f"Generated: {generated}",
        f"Total rows: {len(all_list)}",
        "",
        "20 Most Recently Completed",
        "-------------------------",
    ]
    for row in recent_list:
        content_lines.append(
            f"{row.token} | {row.completed_at} | {row.internal_version} | {row.completing_agent}"
        )
        if row.summary:
            content_lines.extend(_wrap_lines(row.summary, width=90))
        content_lines.append("")
    content_lines.extend(["", "Full Ledger (by E:S:T)", "-------------------"])
    for row in all_list:
        content_lines.append(
            f"{row.token} | {row.completed_at} | {row.internal_version} | {row.summary[:120]}"
        )

    # Paginate ~45 lines per page
    pages: List[List[str]] = []
    chunk: List[str] = []
    for line in content_lines:
        chunk.append(line)
        if len(chunk) >= 45:
            pages.append(chunk)
            chunk = []
    if chunk:
        pages.append(chunk)
    if not pages:
        pages = [["(no completed tasks yet)"]]

    objects: List[bytes] = []
    page_obj_nums: List[int] = []

    def add_obj(data: str | bytes) -> int:
        if isinstance(data, str):
            objects.append(data.encode("latin-1", errors="replace"))
        else:
            objects.append(data)
        return len(objects)

    font_num = add_obj("<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>")
    for page_lines in pages:
        stream_parts = ["BT", "/F1 10 Tf", "50 800 Td"]
        first = True
        for line in page_lines:
            esc = _escape_pdf_text(line)
            if first:
                stream_parts.append(f"({esc}) Tj")
                first = False
            else:
                stream_parts.append("0 -14 Td")
                stream_parts.append(f"({esc}) Tj")
        stream_parts.append("ET")
        stream = "\n".join(stream_parts).encode("latin-1", errors="replace")
        content_num = add_obj(f"<< /Length {len(stream)} >>\nstream\n".encode("latin-1") + stream + b"\nendstream")
        page_num = add_obj(
            f"<< /Type /Page /Parent {{parent}} 0 R /MediaBox [0 0 612 842] "
            f"/Contents {content_num} 0 R /Resources << /Font << /F1 {font_num} 0 R >> >> >>"
        )
        page_obj_nums.append(page_num)

    kids = " ".join(f"{n} 0 R" for n in page_obj_nums)
    pages_num = add_obj(f"<< /Type /Pages /Kids [{kids}] /Count {len(page_obj_nums)} >>")
    for i, page_num in enumerate(page_obj_nums):
        objects[page_num - 1] = objects[page_num - 1].replace(b"{parent}", str(pages_num).encode())

    catalog_num = add_obj(f"<< /Type /Catalog /Pages {pages_num} 0 R >>")

    out = bytearray(b"%PDF-1.4\n")
    offsets = [0]
    for i, obj in enumerate(objects, start=1):
        offsets.append(len(out))
        out.extend(f"{i} 0 obj\n".encode("ascii"))
        out.extend(obj)
        out.extend(b"\nendobj\n")
    xref_start = len(out)
    out.extend(f"xref\n0 {len(objects) + 1}\n".encode("ascii"))
    out.extend(b"0000000000 65535 f \n")
    for off in offsets[1:]:
        out.extend(f"{off:010d} 00000 n \n".encode("ascii"))
    out.extend(
        f"trailer\n<< /Size {len(objects) + 1} /Root {catalog_num} 0 R >>\n"
        f"startxref\n{xref_start}\n%%EOF\n".encode("ascii")
    )

    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_bytes(bytes(out))
