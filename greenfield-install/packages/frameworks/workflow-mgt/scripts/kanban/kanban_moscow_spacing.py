"""
MoSCOW multi-line bullet spacing (UXR-005 / E07:S01:T09).

Rule: adjacent MoSCOW bullets where either is "multi-line" must be separated
by exactly one blank line. Single-line bullets may remain contiguous.
"""

from __future__ import annotations

import re
from dataclasses import dataclass
from pathlib import Path
from typing import List, Sequence, Tuple

MULTILINE_THRESHOLD = 100
MOSCOW_SECTION_RE = re.compile(r"^## MoSCOW", re.IGNORECASE)
MOSCOW_BAND_RE = re.compile(
    r"^### (?:Must Have|Should Have|Could Have|Won't Have|Ongoing)\b",
    re.IGNORECASE,
)
BULLET_RE = re.compile(r"^-\s+\*\*")


@dataclass
class SpacingViolation:
    path: str
    line_after: int
    message: str
    bullet_token: str


def is_moscow_bullet_line(line: str) -> bool:
    return bool(BULLET_RE.match(line.strip()) and line.strip())


def is_multiline_bullet(line: str) -> bool:
    stripped = line.rstrip()
    if len(stripped) <= MULTILINE_THRESHOLD:
        return False
    return True


def bullet_token(line: str) -> str:
    m = re.search(r"\*\*([^*]+)\*\*", line)
    return m.group(1) if m else line.strip()[:40]


def iter_moscow_bullet_lines(lines: Sequence[str]) -> List[Tuple[int, str]]:
    """Return (1-based line number, line) for MoSCOW bullets."""
    result: List[Tuple[int, str]] = []
    in_moscow = False
    for i, line in enumerate(lines, start=1):
        st = line.strip()
        if MOSCOW_SECTION_RE.match(st):
            in_moscow = True
            continue
        if in_moscow and st.startswith("## ") and not MOSCOW_BAND_RE.match(st):
            in_moscow = False
        if in_moscow and is_moscow_bullet_line(line):
            result.append((i, line))
    return result


def check_spacing_lines(
    lines: Sequence[str], path: str = "<text>"
) -> List[SpacingViolation]:
    violations: List[SpacingViolation] = []
    bullets = iter_moscow_bullet_lines(lines)
    for idx in range(len(bullets) - 1):
        line_num_a, line_a = bullets[idx]
        line_num_b, line_b = bullets[idx + 1]
        if not (is_multiline_bullet(line_a) or is_multiline_bullet(line_b)):
            continue
        between = lines[line_num_a: line_num_b - 1]
        non_empty_between = [ln for ln in between if ln.strip()]
        if len(non_empty_between) > 1:
            continue
        if len(non_empty_between) == 1 and non_empty_between[0].strip() == "":
            continue
        blank_count = sum(1 for ln in between if not ln.strip())
        if blank_count >= 1:
            continue
        violations.append(
            SpacingViolation(
                path=path,
                line_after=line_num_a,
                message=(
                    f"missing blank line before multi-line MoSCOW bullet at line {line_num_b}"
                ),
                bullet_token=bullet_token(line_a),
            )
        )
    return violations


def check_spacing_file(path: Path) -> List[SpacingViolation]:
    text = path.read_text(encoding="utf-8", errors="replace")
    return check_spacing_lines(text.splitlines(), str(path))


def fix_spacing_lines(lines: List[str]) -> Tuple[List[str], int]:
    """Insert blank lines between violating adjacent bullets. Returns (new_lines, inserts)."""
    out = list(lines)
    total_inserts = 0
    while True:
        violations = check_spacing_lines(out)
        if not violations:
            break
        bullets = iter_moscow_bullet_lines(out)
        fixed = False
        for idx in range(len(bullets) - 1):
            line_num_a, line_a = bullets[idx]
            line_num_b, _line_b = bullets[idx + 1]
            if violations[0].line_after != line_num_a:
                continue
            insert_at = line_num_b - 1
            out.insert(insert_at, "")
            total_inserts += 1
            fixed = True
            break
        if not fixed:
            break
    return out, total_inserts


def fix_spacing_file(path: Path, dry_run: bool = False) -> int:
    lines = path.read_text(encoding="utf-8", errors="replace").splitlines()
    new_lines, inserts = fix_spacing_lines(lines)
    if inserts and not dry_run:
        path.write_text("\n".join(new_lines) + ("\n" if new_lines else ""), encoding="utf-8")
    return inserts
