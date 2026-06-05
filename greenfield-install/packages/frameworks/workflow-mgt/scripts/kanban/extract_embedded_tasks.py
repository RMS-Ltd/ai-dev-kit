"""Extract embedded E:S:T task sections from Story markdown documents (FR-016 / E04:S11:T07)."""

from __future__ import annotations

import argparse
import json
import re
import sys
from dataclasses import asdict, dataclass, field
from pathlib import Path
from typing import List, Optional, Sequence

# Allow running as script from this directory
_SCRIPT_DIR = Path(__file__).resolve().parent
if str(_SCRIPT_DIR) not in sys.path:
    sys.path.insert(0, str(_SCRIPT_DIR))

from est_format import format_est_reference  # noqa: E402

# Header line containing E:S:T at h2–h4 depth
_TASK_HEADER_RE = re.compile(
    r"^(#{2,4})\s+"
    r"(?:\*\*)?"
    r"E(\d{1,2}):S(\d{1,2}):T(\d{1,3})"
    r"(?:\*\*)?"
    r"(?:\s*[–—-]\s*(.+))?$",
    re.IGNORECASE,
)

_H2_SECTION_RE = re.compile(r"^## [^#]")

_LABELED_SECTION_RE = re.compile(
    r"\*\*(Scope|Input|Deliverable|Acceptance Criteria|Status|Approach|Dependencies)"
    r"(?:\s*\([^)]*\))?:\*\*"
    r"\s*"
    r"(.*?)"
    r"(?=\s*\*\*(?:Scope|Input|Deliverable|Acceptance Criteria|Status|Approach|Dependencies)"
    r"(?:\s*\([^)]*\))?:\*\*|\Z)",
    re.DOTALL | re.IGNORECASE,
)


def _parse_labeled_sections(body: str) -> dict[str, str]:
    sections: dict[str, str] = {}
    for m in _LABELED_SECTION_RE.finditer(body):
        key = m.group(1).strip().lower()
        value = m.group(2).strip()
        if value:
            sections[key] = value
    return sections

_PLACEHOLDER = "[To be filled during migration]"


@dataclass
class EmbeddedTask:
    """One embedded task section parsed from a Story document."""

    epic: int
    story: int
    task: int
    title: str
    body: str
    header_line: int
    end_line: int
    header_level: int
    source_path: Optional[str] = None
    scope: str = field(default=_PLACEHOLDER)
    input_text: str = field(default=_PLACEHOLDER)
    deliverable: str = field(default=_PLACEHOLDER)
    acceptance_criteria: str = field(default="- [ ] Criterion to be defined during migration")
    status: str = field(default="TODO")
    version_anchor: str = field(default="")

    @property
    def task_id(self) -> str:
        return format_est_reference(self.epic, self.story, self.task)

    def to_dict(self) -> dict:
        return asdict(self)


def _parse_title_from_header(line: str, fallback: str) -> str:
    m = re.search(r"[–—-]\s*(.+?)\s*$", line)
    if m:
        return m.group(1).strip()
    return fallback or "Untitled task"


_VERSION_ANCHOR_RE = re.compile(r"(v0\.\d+\.\d+\.\d+\+\d+)")

def _extract_version_anchor(*texts: str) -> str:
    for text in texts:
        m = _VERSION_ANCHOR_RE.search(text or "")
        if m: return m.group(1)
    return ""

def _enrich_task_fields(task: EmbeddedTask) -> EmbeddedTask:
    sections = _parse_labeled_sections(task.body)
    if "scope" in sections:
        task.scope = sections["scope"]
    if "input" in sections:
        task.input_text = sections["input"]
    if "deliverable" in sections:
        task.deliverable = sections["deliverable"]
    if "acceptance criteria" in sections:
        task.acceptance_criteria = sections["acceptance criteria"]
    if "status" in sections:
        status_line = sections["status"].splitlines()[0].strip()
        if status_line:
            task.status = status_line.upper()
    if not task.title or task.title == "Untitled task":
        first_line = next((ln.strip() for ln in task.body.splitlines() if ln.strip()), "")
        if first_line:
            task.title = first_line[:120]
    task.version_anchor = _extract_version_anchor(sections.get("status", ""), task.body, task.status)
    return task


def _task_boundary_end(lines: Sequence[str], header_line: int, header_level: int) -> int:
    """Return exclusive end line index for embedded task content."""
    for j in range(header_line + 1, len(lines)):
        line = lines[j].rstrip("\n")
        h_task = _TASK_HEADER_RE.match(line)
        if h_task:
            return j
        if _H2_SECTION_RE.match(line) and header_level >= 2:
            return j
        if header_level >= 3:
            m = re.match(r"^(#{2,3})\s", line)
            if m and len(m.group(1)) <= 3:
                # New h2/h3 section ends h3/h4 task body
                if not _TASK_HEADER_RE.match(line):
                    if len(m.group(1)) == 2:
                        return j
                    if len(m.group(1)) == 3 and header_level >= 4:
                        return j
    return len(lines)


def extract_embedded_tasks(
    text: str,
    source_path: Optional[Path | str] = None,
    *,
    enrich_fields: bool = True,
) -> List[EmbeddedTask]:
    """Parse *text* and return embedded tasks in document order."""
    lines = text.splitlines(keepends=True)
    tasks: List[EmbeddedTask] = []

    for i, raw in enumerate(lines):
        line = raw.rstrip("\n")
        m = _TASK_HEADER_RE.match(line)
        if not m:
            continue
        level = len(m.group(1))
        epic, story, task_num = int(m.group(2)), int(m.group(3)), int(m.group(4))
        title = _parse_title_from_header(line, (m.group(5) or "").strip())
        end = _task_boundary_end(lines, i, level)
        body = "".join(lines[i + 1 : end])
        et = EmbeddedTask(
            epic=epic,
            story=story,
            task=task_num,
            title=title,
            body=body,
            header_line=i,
            end_line=end,
            header_level=level,
            source_path=str(source_path) if source_path else None,
        )
        if enrich_fields:
            et = _enrich_task_fields(et)
        tasks.append(et)

    return tasks


def extract_embedded_tasks_from_file(path: Path, *, enrich_fields: bool = True) -> List[EmbeddedTask]:
    text = path.read_text(encoding="utf-8")
    return extract_embedded_tasks(text, source_path=path, enrich_fields=enrich_fields)


def slugify_title(title: str, *, max_len: int = 60) -> str:
    """Produce filesystem-safe slug from task title."""
    s = title.lower()
    s = re.sub(r"[^\w\s-]", "", s)
    s = re.sub(r"[\s_]+", "-", s).strip("-")
    if not s:
        s = "task"
    return s[:max_len].rstrip("-")


def task_doc_filename(task_num: int, title: str) -> str:
    """Return canonical `T{nn}-{slug}.md` name (FR-016 / RF7)."""
    slug = slugify_title(title)
    return f"T{task_num:02d}-{slug}.md"


def main(argv: Optional[Sequence[str]] = None) -> int:
    parser = argparse.ArgumentParser(description="Extract embedded tasks from a Story markdown file.")
    parser.add_argument("story", type=Path, help="Path to Story markdown file")
    parser.add_argument("--json", action="store_true", help="Emit JSON array")
    args = parser.parse_args(argv)

    if not args.story.is_file():
        print(f"ERROR: not a file: {args.story}", file=sys.stderr)
        return 1

    tasks = extract_embedded_tasks_from_file(args.story)
    if args.json:
        print(json.dumps([t.to_dict() for t in tasks], indent=2))
    else:
        for t in tasks:
            print(f"{t.task_id}  L{t.header_line + 1}-{t.end_line}  {t.title}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
