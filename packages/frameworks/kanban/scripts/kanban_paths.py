"""
Canonical kanban filesystem path segments (UXR-017 / ADR-015).

Write-default: lowercase epic-* / story-* / T* path segments with 2-digit IDs (<100), 3-digit when >=100.
Read-tolerance: legacy Epic-/Story-/unpadded forms accepted by resolvers until migration completes.
"""

from __future__ import annotations

import re
from pathlib import Path
from typing import List, Optional, Tuple

# --- Segment number formatting (paths; aligns with UXR-014 inline E:S:T) ---


def segment_number(n: int) -> str:
    """Two-digit zero-pad when n <= 99; three-digit when n > 99."""
    if n > 99:
        return f"{n:03d}"
    return f"{n:02d}"


def task_segment_number(n: int) -> str:
    """Task filename prefix: T01–T99 (2-digit); T100+ uses 3+ digits (perpetual T101+ policy)."""
    if n > 99:
        return f"{n:03d}"
    return f"{n:02d}"


# --- Write-default rw-config patterns (relative to kanban_root) ---

EPIC_DOC_PATTERN = "epics/epic-{epic:02d}/epic-{epic:02d}.md"
STORY_DOC_PATTERN = "epics/epic-{epic:02d}/story-{story:02d}-*.md"
TASK_DOC_PATTERN = "epics/epic-{epic:02d}/story-{story:02d}-*/T{task:02d}-*.md"
# rw-config format() uses unpadded {epic}/{story}/{task}; installers must pass int and use :02d in pattern strings above

# Legacy lowercase unpadded / 3-digit story (transition)
LEGACY_EPIC_UNPADDED_PATTERN = "epics/epic-{epic}/epic-{epic}.md"
LEGACY_STORY_3DIGIT_PATTERN = "epics/epic-{epic:02d}/story-{story:03d}-*.md"
LEGACY_TASK_3DIGIT_STORY_PATTERN = "epics/epic-{epic:02d}/story-{story:03d}-*/T{task:02d}-*.md"

# Book T03 Step 4.1 target (unpadded epic + 03d story segment + lowercase task file)
BOOK_STORY_PATTERN = "epics/epic-{epic}/story-{story:03d}-*.md"
BOOK_TASK_PATTERN = "epics/epic-{epic}/story-{story:03d}/t{task:02d}-*.md"

# Legacy capitalised (pre-UXR-017)
LEGACY_EPIC_DOC_PATTERN = "epics/Epic-{epic}/Epic-{epic}.md"
LEGACY_STORY_DOC_PATTERN = "epics/Epic-{epic}/Story-{story:03d}-*.md"
LEGACY_TASK_DOC_PATTERN = "epics/Epic-{epic}/Story-{story:03d}-*/T{task}-*.md"
LEGACY_EPIC_FLAT_PATTERN = "epics/Epic-{epic}.md"
LEGACY_STORY_NESTED_PATTERN = "epics/Epic-{epic}/stories/Story-{story}-*.md"

FRESH_EPIC_PATTERNS: Tuple[str, ...] = (
    EPIC_DOC_PATTERN,
    LEGACY_EPIC_UNPADDED_PATTERN,
    LEGACY_EPIC_DOC_PATTERN,
    LEGACY_EPIC_FLAT_PATTERN,
)

FRESH_STORY_PATTERNS: Tuple[str, ...] = (
    BOOK_STORY_PATTERN,
    STORY_DOC_PATTERN,
    LEGACY_STORY_3DIGIT_PATTERN,
    LEGACY_STORY_DOC_PATTERN,
    LEGACY_STORY_NESTED_PATTERN,
)

FRESH_TASK_PATTERNS: Tuple[str, ...] = (
    BOOK_TASK_PATTERN,
    TASK_DOC_PATTERN,
    LEGACY_TASK_3DIGIT_STORY_PATTERN,
    LEGACY_TASK_DOC_PATTERN,
)

# Re-export pattern tuples for install_release_workflow (FRESH_* imports).
__all__ = [
    "FRESH_EPIC_PATTERNS",
    "FRESH_STORY_PATTERNS",
    "FRESH_TASK_PATTERNS",
    "DEFAULT_FBU_SUBDIR",
    "LEGACY_FR_BR_SUBDIR",
    "resolve_fbu_root_path",
    "resolve_fbu_root_config_relative",
    "config_fbu_root_key",
    "config_fbu_root_relative",
]

# --- FBU intake directory (UXR-032 / ADR-032) ---

DEFAULT_FBU_SUBDIR = "fbu"
LEGACY_FR_BR_SUBDIR = "fr-br"

# Deprecated alias for transition callers
DEFAULT_FR_BR_SUBDIR = LEGACY_FR_BR_SUBDIR


def _normalize_kanban_root(kanban_root: str) -> str:
    return kanban_root.replace("\\", "/").strip("/")


def _fbu_dir_exists(project_root: Path, kanban_root: str, subdir: str) -> bool:
    return (project_root / kanban_root / subdir).resolve().is_dir()


def resolve_fbu_root_config_relative(project_root: Path, kanban_root: str) -> Optional[str]:
    """
    Detect project-root-relative FBU intake path for rw-config emit.

    Write-default: ``{kanban_root}/fbu``. Read-tolerance: legacy ``fr-br``.
    """
    kn = _normalize_kanban_root(kanban_root)
    if _fbu_dir_exists(project_root, kn, DEFAULT_FBU_SUBDIR):
        return f"{kn}/{DEFAULT_FBU_SUBDIR}"
    if _fbu_dir_exists(project_root, kn, LEGACY_FR_BR_SUBDIR):
        return f"{kn}/{LEGACY_FR_BR_SUBDIR}"
    return None


def config_fbu_root_key(config: Optional[dict]) -> Optional[str]:
    """Return rw-config value for FBU root (``fbu_root`` preferred, ``fbu_root`` legacy)."""
    if not config:
        return None
    for key in ("fbu_root", "fbu_root"):
        val = config.get(key)
        if val:
            return str(val).replace("\\", "/")
    return None


def resolve_fbu_root_path(
    project_root: Path,
    kanban_root: str,
    config: Optional[dict] = None,
) -> Optional[Path]:
    """
    Resolve absolute path to FBU intake directory.

    Order: config ``fbu_root`` / ``fbu_root`` (if dir exists) → on-disk ``fbu/`` → ``fbu/``.
    """
    kn = _normalize_kanban_root(kanban_root)
    configured = config_fbu_root_key(config)
    if configured:
        candidate = (project_root / configured).resolve()
        if candidate.is_dir():
            return candidate
    if _fbu_dir_exists(project_root, kn, DEFAULT_FBU_SUBDIR):
        return (project_root / kn / DEFAULT_FBU_SUBDIR).resolve()
    if _fbu_dir_exists(project_root, kn, LEGACY_FR_BR_SUBDIR):
        return (project_root / kn / LEGACY_FR_BR_SUBDIR).resolve()
    return None


def config_fbu_root_relative(
    project_root: Path,
    kanban_root: str,
    config: Optional[dict] = None,
) -> Optional[str]:
    """Project-root-relative FBU path string from config or on-disk detection."""
    configured = config_fbu_root_key(config)
    if configured:
        candidate = (project_root / configured).resolve()
        if candidate.is_dir():
            return configured
    return resolve_fbu_root_config_relative(project_root, kanban_root)

EPIC_DIR_PREFIX = "epic-"
EPIC_FILE_PREFIX = "epic-"
STORY_DIR_PREFIX = "story-"
STORY_FILE_PREFIX = "story-"
TASK_FILE_PREFIX = "T"
LEGACY_EPIC_DIR_PREFIX = "Epic-"
LEGACY_EPIC_FILE_PREFIX = "Epic-"
LEGACY_STORY_DIR_PREFIX = "Story-"
LEGACY_STORY_FILE_PREFIX = "Story-"

_RE_EPIC_SEG = re.compile(r"^(?:epic|Epic)-(\d+)$", re.I)
_RE_STORY_SEG = re.compile(r"^(?:story|Story)-(\d+)", re.I)
_RE_TASK_FILE = re.compile(r"^T(\d+)-", re.I)


def epic_dir_name(epic_num: int, *, legacy: bool = False) -> str:
    prefix = LEGACY_EPIC_DIR_PREFIX if legacy else EPIC_DIR_PREFIX
    return f"{prefix}{segment_number(epic_num)}"


def epic_doc_basename(epic_num: int, *, legacy: bool = False) -> str:
    prefix = LEGACY_EPIC_FILE_PREFIX if legacy else EPIC_FILE_PREFIX
    return f"{prefix}{segment_number(epic_num)}.md"


def story_dir_or_file_prefix(story_num: int, *, legacy: bool = False, three_digit_story: bool = False) -> str:
    """Prefix for story-NN- slug (no trailing hyphen beyond padding)."""
    prefix = LEGACY_STORY_FILE_PREFIX if legacy else STORY_FILE_PREFIX
    if three_digit_story and story_num <= 999:
        num = f"{story_num:03d}"
    else:
        num = segment_number(story_num)
    return f"{prefix}{num}"


def task_file_prefix(task_num: int) -> str:
    return f"{TASK_FILE_PREFIX}{task_segment_number(task_num)}-"


def epic_dir_candidates(epic_num: int) -> List[str]:
    names = [
        epic_dir_name(epic_num),
        f"{EPIC_DIR_PREFIX}{epic_num}",  # unpadded legacy
        epic_dir_name(epic_num, legacy=True),
    ]
    seen = set()
    out: List[str] = []
    for n in names:
        if n not in seen:
            seen.add(n)
            out.append(n)
    return out


def epic_paths_under_kanban(kanban_root: Path, epic_num: int) -> List[Path]:
    epics_root = kanban_root / "epics"
    found: List[Path] = []
    for name in epic_dir_candidates(epic_num):
        p = epics_root / name
        if p.is_dir():
            found.append(p)
    return found


def resolve_epic_dir(kanban_root: Path, epic_num: int) -> Optional[Path]:
    candidates = epic_paths_under_kanban(kanban_root, epic_num)
    if not candidates:
        return None
    preferred = epic_dir_name(epic_num)
    for p in candidates:
        if p.name == preferred:
            return p
    for p in candidates:
        if p.name.startswith(EPIC_DIR_PREFIX):
            return p
    return candidates[0]


def story_glob_patterns_in_epic(epic_dir: Path, story_num: int) -> List[str]:
    sn = segment_number(story_num)
    sn3 = f"{story_num:03d}"
    return [
        f"{STORY_FILE_PREFIX}{sn}-*.md",
        f"{STORY_FILE_PREFIX}{sn3}-*.md",
        f"{STORY_FILE_PREFIX}{story_num}-*.md",
        f"{LEGACY_STORY_FILE_PREFIX}{sn3}-*.md",
        f"{LEGACY_STORY_FILE_PREFIX}{story_num}-*.md",
    ]


def parse_epic_dir_name(name: str) -> Optional[int]:
    m = _RE_EPIC_SEG.match(name)
    return int(m.group(1)) if m else None


def parse_story_segment(name: str) -> Optional[int]:
    m = _RE_STORY_SEG.match(name)
    return int(m.group(1)) if m else None


def parse_task_file_number(name: str) -> Optional[int]:
    m = _RE_TASK_FILE.match(name)
    return int(m.group(1)) if m else None


def canonical_epic_dir_name(epic_num: int) -> str:
    return epic_dir_name(epic_num)


def canonical_story_segment(story_num: int) -> str:
    return story_dir_or_file_prefix(story_num)


def canonical_task_filename_prefix(task_num: int) -> str:
    return task_file_prefix(task_num)


def template_task_story_dir_candidates(output_dir: Path, epic_num: int, story_num: int) -> List[Path]:
    """Existing story directories under templates/tasks for path resolution (read tolerance)."""
    dirs: List[Path] = []
    seen: set[str] = set()
    epic_names = [
        epic_dir_name(epic_num),
        f"{EPIC_DIR_PREFIX}{epic_num}",
        epic_dir_name(epic_num, legacy=True),
        f"{LEGACY_EPIC_DIR_PREFIX}{epic_num}",
    ]
    story_names = [
        story_dir_or_file_prefix(story_num),
        f"{STORY_DIR_PREFIX}{story_num}",
        story_dir_or_file_prefix(story_num, legacy=True),
        f"{LEGACY_STORY_DIR_PREFIX}{story_num:03d}",
        f"{LEGACY_STORY_DIR_PREFIX}{story_num}",
    ]
    for epic_name in epic_names:
        for story_name in story_names:
            candidate = output_dir / epic_name / story_name
            key = str(candidate)
            if key in seen:
                continue
            seen.add(key)
            if candidate.is_dir():
                dirs.append(candidate)
    return dirs


def canonical_template_task_path(
    output_dir: Path,
    epic_num: int,
    story_num: int,
    task_num: int,
    filename: str,
) -> Path:
    """Write-default path for generated task templates (lowercase epic/story segments)."""
    return output_dir / epic_dir_name(epic_num) / story_dir_or_file_prefix(story_num) / filename


def resolve_template_task_file(
    output_dir: Path,
    epic_num: int,
    story_num: int,
    task_num: int,
    *,
    expected_basename: Optional[str] = None,
) -> Optional[Path]:
    """Resolve an on-disk task template; prefers canonical path then legacy layouts."""
    if expected_basename:
        canonical = canonical_template_task_path(
            output_dir, epic_num, story_num, task_num, expected_basename
        )
        if canonical.is_file():
            return canonical
    prefix = task_file_prefix(task_num)
    for story_dir in template_task_story_dir_candidates(output_dir, epic_num, story_num):
        if expected_basename:
            candidate = story_dir / expected_basename
            if candidate.is_file():
                return candidate
        matches = sorted(story_dir.glob(f"{prefix}*.md"))
        if matches:
            return matches[0]
    return None


def is_capitalised_epic_story_segment(name: str) -> bool:
    return name.startswith(LEGACY_EPIC_DIR_PREFIX) or name.startswith(LEGACY_STORY_DIR_PREFIX)


def is_noncanonical_segment_padding(name: str, kind: str) -> bool:
    """
    True if epic/story dir or file uses wrong padding (e.g. epic-04, story-019, T01-).
    kind: 'epic_dir' | 'epic_file' | 'story_file' | 'story_dir' | 'task_file'
    """
    if kind in ("epic_dir", "epic_file"):
        m = _RE_EPIC_SEG.match(name.replace(".md", ""))
        if not m:
            return False
        digits = m.group(1)
        return digits != segment_number(int(digits))
    if kind in ("story_file", "story_dir"):
        m = _RE_STORY_SEG.match(name)
        if not m:
            return False
        digits = m.group(1)
        return digits != segment_number(int(digits))
    if kind == "task_file":
        m = _RE_TASK_FILE.match(name)
        if not m:
            return False
        digits = m.group(1)
        return digits != task_segment_number(int(digits))
    return False


def padding_violations(epics_root: Path) -> List[str]:
    """Paths under epics/ with non-canonical epic/story/task segment padding or capitalised prefixes."""
    violations: List[str] = []
    if not epics_root.is_dir():
        return violations
    base = epics_root.parent.parent

    for epic_dir in epics_root.iterdir():
        if not epic_dir.is_dir():
            continue
        if is_capitalised_epic_story_segment(epic_dir.name):
            violations.append(str(epic_dir.relative_to(base)))
        elif is_noncanonical_segment_padding(epic_dir.name, "epic_dir"):
            violations.append(str(epic_dir.relative_to(base)))

        for child in epic_dir.iterdir():
            rel = str(child.relative_to(base))
            if child.is_file() and child.suffix == ".md":
                if child.name.startswith(LEGACY_EPIC_FILE_PREFIX) or (
                    child.name.startswith(EPIC_FILE_PREFIX)
                    and is_noncanonical_segment_padding(child.name, "epic_file")
                ):
                    if child.name.startswith(LEGACY_EPIC_FILE_PREFIX):
                        violations.append(rel)
                    elif is_noncanonical_segment_padding(child.name, "epic_file"):
                        violations.append(rel)
                elif child.name.startswith(LEGACY_STORY_FILE_PREFIX) or (
                    child.name.startswith(STORY_FILE_PREFIX)
                    and is_noncanonical_segment_padding(child.name, "story_file")
                ):
                    violations.append(rel)
                elif _RE_TASK_FILE.match(child.name) and is_noncanonical_segment_padding(
                    child.name, "task_file"
                ):
                    violations.append(rel)
            elif child.is_dir():
                if child.name.startswith(LEGACY_STORY_DIR_PREFIX) or (
                    child.name.startswith(STORY_DIR_PREFIX)
                    and is_noncanonical_segment_padding(child.name, "story_dir")
                ):
                    violations.append(rel)
                for task in child.iterdir():
                    if task.is_file() and _RE_TASK_FILE.match(task.name):
                        if is_noncanonical_segment_padding(task.name, "task_file"):
                            violations.append(str(task.relative_to(base)))

    return sorted(set(violations))


def capitalised_segment_violations(epics_root: Path) -> List[str]:
    """Deprecated alias — use padding_violations (includes casing + padding)."""
    return [v for v in padding_violations(epics_root) if "Epic-" in v or "Story-" in v]
