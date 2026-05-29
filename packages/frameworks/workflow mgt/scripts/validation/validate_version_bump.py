#!/usr/bin/env python3
"""
Version Bump Validator

This script validates that version bumping follows the correct logic:
1. Reads current version from version file
2. Reads Story file to identify completed task
3. Validates that version bump follows RW Step 2 logic:
   - **Abstract Space Awareness (FR-020):** Recognizes `+0` as valid BUILD for doc-init builds (first-time E/S/T doc creation)
   - If completed task > current VERSION_TASK: Should be new task
     - Doc-init: VERSION_TASK = completed, BUILD = 0 (abstract space)
     - Normal: VERSION_TASK = completed, BUILD = 1
   - If completed task == current VERSION_TASK: Should be same task (VERSION_TASK unchanged, BUILD incremented)
     - Doc-init: Not valid (doc-init is for first-time creation only)
     - Normal: BUILD >= 1 (incremented)
   - If completed task < current VERSION_TASK: Should be out-of-order
     - Doc-init: VERSION_TASK = completed, BUILD = 0 (abstract space)
     - Normal: VERSION_TASK = completed, BUILD = 1
4. Validates doc-init builds (`+0`) are docs-only (no code changes)

This script is called by RW Step 8 to validate version bumping logic.

Usage:
    python packages/frameworks/workflow mgt/scripts/validation/validate_version_bump.py [--strict] [--story-file PATH] [--version-file PATH]
    python packages/frameworks/workflow mgt/scripts/validation/validate_version_bump.py --requested E6:S06:T58 --art [--strict]
    python .../validate_version_bump.py --strict --requested E2:S16:T03 --art --doc-policy-zero
      (explicit policy: docs-only BUILD +0 for an existing E/S/T anchor; see BR-067)

    --strict: Exit with error code if validation fails
    --story-file: Path to Story file (auto-detected if not provided)
    --version-file: Path to version file (auto-detected if not provided)
"""

import argparse
import re
import subprocess
import sys
from pathlib import Path
from typing import Optional, Dict, Tuple, List
def parse_requested_est(requested: str) -> Optional[Tuple[int, int, int]]:
    """Parse E:S:T token formats like E6:S06:T58 or E6S6T58."""
    if not requested:
        return None
    m = re.match(r"^E(\d+):S(\d+):T(\d+)$", requested.strip(), re.IGNORECASE)
    if m:
        return (int(m.group(1)), int(m.group(2)), int(m.group(3)))
    m = re.match(r"^E(\d+)S(\d+)T(\d+)$", requested.strip(), re.IGNORECASE)
    if m:
        return (int(m.group(1)), int(m.group(2)), int(m.group(3)))
    return None


def parse_requested_task_id(requested: str) -> Optional[Tuple[int, int, int]]:
    """Backward-compatible alias for unit tests (`parse_requested_est`)."""
    return parse_requested_est(requested)


try:
    import yaml
except ImportError:
    yaml = None


def is_perpetual_task(task_number: int, task_content: Optional[str] = None) -> bool:
    """
    Detect if a task is a perpetual maintenance task.

    A task is perpetual if:
    - VERSION_TASK >= 100 (T101+)
    - Or task doc contains perpetual_task: true or Task Type: Perpetual Maintenance

    Returns:
        True if perpetual, False otherwise.
    """
    if task_number >= 100:
        return True
    if task_content and (
        "perpetual_task: true" in task_content
        or "Perpetual Maintenance" in task_content
    ):
        return True
    return False


def validate_perpetual_guardrails(
    epic: int,
    story: int,
    task: int,
    task_content: str,
) -> Tuple[List[str], List[str]]:
    """
    Enforce perpetual-task placement and numbering guardrails.

    Guardrails:
    1) Tasks explicitly marked perpetual must live under E2:S16 unless they declare
       `Perpetual Override Rationale:`.
    2) New 3-digit task IDs (T1xx) are rejected unless documented as a historical
       alias via `Historical Anchor:`.
    3) For Story 016 perpetual lanes T03/T04/T05, warn if marker is missing.
    """
    errors: List[str] = []
    warnings: List[str] = []

    has_perpetual_marker = (
        re.search(r"Task\s+Type.*Perpetual\s+Maintenance", task_content, re.IGNORECASE) is not None
        or "perpetual_task: true" in task_content.lower()
    )
    has_override_rationale = "Perpetual Override Rationale:" in task_content
    has_historical_anchor = "Historical Anchor:" in task_content

    if has_perpetual_marker and (epic, story) != (2, 16) and not has_override_rationale:
        errors.append(
            "Perpetual placement guardrail: task is marked perpetual but not housed in E2:S16 "
            "and no `Perpetual Override Rationale:` was found."
        )

    if task >= 100 and not has_historical_anchor:
        errors.append(
            "Perpetual numbering guardrail: T1xx task IDs are legacy/historical-only. "
            "Add `Historical Anchor:` or migrate to canonical Story 016 `Txx` numbering."
        )

    if (epic, story, task) in {(2, 16, 3), (2, 16, 4), (2, 16, 5)} and not has_perpetual_marker:
        warnings.append(
            f"Story 016 lane E{epic}:S{story}:T{task} is expected to carry "
            "`Task Type: Perpetual Maintenance`."
        )

    return errors, warnings


def extract_task_id_canonical(content: str) -> Optional[Tuple[int, int, int]]:
    """
    Extract Task ID from canonical section, preferring **Value:** or **Full Task ID:**.

    Prevents wrong extraction when content has other E#:S#:T# references (e.g. in Progress).
    Returns (epic, story, task) or None if not found.
    """
    task_id_pattern = re.compile(r'E(\d+):S(\d+):T(\d+)', re.IGNORECASE)

    # Prefer **Value:** `E{epic}:S{story}:T{task}`
    value_match = re.search(
        r'\*\*Value:\*\*\s*[`]?E(\d+):S(\d+):T(\d+)[`]?',
        content,
        re.IGNORECASE,
    )
    if value_match:
        return (int(value_match.group(1)), int(value_match.group(2)), int(value_match.group(3)))

    # Or **Full Task ID:** `E{epic}:S{story}:T{task}`
    full_match = re.search(
        r'\*\*Full\s+Task\s+ID:\*\*\s*[`]?E(\d+):S(\d+):T(\d+)[`]?',
        content,
        re.IGNORECASE,
    )
    if full_match:
        return (int(full_match.group(1)), int(full_match.group(2)), int(full_match.group(3)))

    # Or section after ## Task ID with E#:S#:T#
    task_id_section = re.search(
        r'##\s+Task\s+ID\s*\n(.*?)(?=\n##|\n---|\Z)',
        content,
        re.DOTALL | re.IGNORECASE,
    )
    if task_id_section:
        section = task_id_section.group(1)
        match = task_id_pattern.search(section)
        if match:
            return (int(match.group(1)), int(match.group(2)), int(match.group(3)))

    return None


def load_rw_config(project_root: Path = None) -> Optional[Dict]:
    """Load rw-config.yaml if it exists."""
    if project_root is None:
        project_root = Path.cwd()
    
    config_path = project_root / "rw-config.yaml"
    if not config_path.exists() or yaml is None:
        return None
    
    try:
        with open(config_path, 'r', encoding='utf-8') as f:
            return yaml.safe_load(f)
    except Exception:
        return None


def get_version_file_path(config: Optional[Dict] = None) -> Path:
    """Get version file path from config or use default."""
    if config and 'version_file' in config:
        return Path(config['version_file'])
    # Default fallback
    return Path("src/fynd_deals/version.py")


def get_version_components(version_file: Path) -> Optional[Tuple[int, int, int, int, int]]:
    """
    Extract version components from version file.
    
    Returns:
        (RC, EPIC, STORY, TASK, BUILD) or None if not found
    """
    if not version_file.exists():
        return None
    
    content = version_file.read_text()
    
    rc_match = re.search(r'VERSION_RC\s*=\s*(\d+)', content)
    epic_match = re.search(r'VERSION_EPIC\s*=\s*(\d+)', content)
    story_match = re.search(r'VERSION_STORY\s*=\s*(\d+)', content)
    task_match = re.search(r'VERSION_TASK\s*=\s*(\d+)', content)
    build_match = re.search(r'VERSION_BUILD\s*=\s*(\d+)', content)
    
    if all([rc_match, epic_match, story_match, task_match, build_match]):
        return (
            int(rc_match.group(1)),
            int(epic_match.group(1)),
            int(story_match.group(1)),
            int(task_match.group(1)),
            int(build_match.group(1))
        )
    return None


def extract_epic_story_from_path(story_file: Path) -> Optional[Tuple[int, int]]:
    """
    Extract Epic and Story numbers from file path.
    
    Examples:
    - Epic-3/stories/Story-003-*.md → (3, 3)
    - Epic-2/stories/Story-001-*.md → (2, 1)
    """
    path_str = str(story_file)
    
    # Pattern 1: Epic-{N}/stories/Story-{NNN}
    pattern1 = re.search(r'Epic-(\d+)/stories/Story-(\d+)', path_str)
    if pattern1:
        return (int(pattern1.group(1)), int(pattern1.group(2)))
    
    # Pattern 2: Epic-{N}/Story-{NNN}
    pattern2 = re.search(r'Epic-(\d+)/Story-(\d+)', path_str)
    if pattern2:
        return (int(pattern2.group(1)), int(pattern2.group(2)))
    
    return None


def extract_epic_story_from_code_field(content: str) -> Optional[Tuple[int, int]]:
    """
    Extract Epic and Story numbers from Code field.
    
    Pattern: **Code:** E{epic}S{story}
    Example: **Code:** E3S03 → (3, 3)
    """
    code_match = re.search(r'\*\*Code:\*\*\s*E(\d+)S(\d+)', content, re.IGNORECASE)
    if code_match:
        return (int(code_match.group(1)), int(code_match.group(2)))
    return None


def find_story_file(config: Optional[Dict] = None, epic: int = None, story: int = None) -> Optional[Path]:
    """
    Find Story file based on config or fallback patterns.
    
    Detection priority:
    1. File path extraction (Epic-{N}/stories/Story-{NNN})
    2. Code field extraction (**Code:** E{epic}S{story})
    3. Content-based regex (last resort, more specific patterns)
    
    If epic and story are provided, tries to find matching Story file.
    """
    project_root = Path.cwd()
    candidate_files = []
    
    # Collect candidate Story files
    if config and config.get('use_kanban') and 'kanban_root' in config:
        kanban_root = Path(config['kanban_root'])
        story_pattern = config.get('story_doc_pattern', '**/Story-*.md')
        candidate_files.extend(project_root.glob(str(kanban_root / story_pattern)))
    
    # Fallback: Search for Story files
    fallback_patterns = [
        "docs/project-management/kanban/epics/Epic-*/Story-*.md",
        "docs/project-management/kanban/epics/Epic-*/stories/Story-*.md",  # Legacy support
    ]
    
    for pattern in fallback_patterns:
        candidate_files.extend(project_root.glob(pattern))
    
    # Use explicit None check: story 0 (e.g. E7:S00) is valid; `not story` would wrongly skip.
    if epic is None or story is None:
        # Return first match if no epic/story specified
        if candidate_files:
            return candidate_files[0]
        return None
    
    # Method 1: Extract from file path (most reliable)
    path_matches = []
    for story_file in candidate_files:
        path_epic_story = extract_epic_story_from_path(story_file)
        if path_epic_story and path_epic_story == (epic, story):
            path_matches.append(story_file)
    if len(path_matches) == 1:
        return path_matches[0]
    if len(path_matches) > 1:
        fr_repo = [p for p in path_matches if "fr-repo" in p.stem.lower()]
        if len(fr_repo) == 1:
            return fr_repo[0]
        if len(fr_repo) > 1:
            return sorted(fr_repo, key=lambda p: p.name)[0]
        return sorted(path_matches, key=lambda p: p.name)[0]
    
    # Method 2: Extract from Code field
    for story_file in candidate_files:
        try:
            content = story_file.read_text()
            code_epic_story = extract_epic_story_from_code_field(content)
            if code_epic_story and code_epic_story == (epic, story):
                return story_file
        except Exception:
            continue
    
    # Method 3: Content-based regex (last resort, but more specific)
    # Look for patterns in header/metadata sections, not References
    for story_file in candidate_files:
        try:
            content = story_file.read_text()
            # Look for "Story {NNN}" in title/header (first 50 lines)
            header_content = '\n'.join(content.split('\n')[:50])
            story_match = re.search(r'#\s*Story\s+(\d+)', header_content, re.IGNORECASE)
            if story_match:
                file_story = int(story_match.group(1))
                # Extract epic from path (more reliable than content)
                path_epic_story = extract_epic_story_from_path(story_file)
                if path_epic_story:
                    file_epic = path_epic_story[0]
                    if file_epic == epic and file_story == story:
                        return story_file
        except Exception:
            continue
    
    return None


def get_completed_task(story_file: Path, version_task: Optional[int] = None) -> Optional[int]:
    """
    Extract completed task number from Story file.
    
    If version_task is provided, returns that task if it's marked complete.
    Otherwise, finds the most recently completed task (highest task number).
    
    Looks for patterns like:
    - [x] **E3:S02:T05 – Task description** ✅ COMPLETE (v0.3.2.5+1)
    - [x] **E3:S02:T05** ✅ COMPLETE
    """
    if not story_file.exists():
        return None
    
    content = story_file.read_text()
    
    # Pattern 1–2: allow optional " - " before ✅ (matches FR Repo checklist style)
    done = r"(?:-\s*)?✅\s+COMPLETE(?:D)?"
    pattern1 = re.compile(rf"\[x\]\s+\*\*E\d+:S\d+:T(\d+)[^\*]*\*\*\s+{done}", re.IGNORECASE)
    pattern2 = re.compile(rf"\[x\]\s+\*\*E\d+:S\d+:T(\d+)\*\*\s+{done}", re.IGNORECASE)
    
    # Find all completed tasks
    completed_tasks = []
    for match in pattern1.finditer(content):
        completed_tasks.append(int(match.group(1)))
    for match in pattern2.finditer(content):
        task_num = int(match.group(1))
        if task_num not in completed_tasks:
            completed_tasks.append(task_num)
    
    if not completed_tasks:
        # No checklist row matches [x] … ✅ COMPLETE — use version hint (in-progress work,
        # RW -k kanban init, or perpetual T101+ that is never marked COMPLETE in Story).
        if version_task is not None:
            return version_task
        return None
    
    # If version_task provided, check if it's completed
    if version_task is not None:
        if version_task in completed_tasks:
            return version_task
        # If version_task not in completed, still return it for validation
        # (might be in progress)
        return version_task
    
    # Return the highest completed task (most recent)
    return max(completed_tasks)


def locate_task_doc(
    story_file: Path,
    epic: int,
    story: int,
    task: int,
    config: Optional[Dict] = None
) -> Tuple[Optional[Path], Optional[str], str]:
    """
    Locate Task document in one of two formats:
    1. Separate file: {kanban_root}/epics/Epic-{epic}/Story-{story}/Task-{task}-*.md or T{task}-*.md
    2. Delimited section: Within Story file, header matching ### E{epic}:S{story}:T{task} –
    
    Returns:
        (task_doc_path, task_doc_content, format_type)
        - task_doc_path: Path to separate file, or None if delimited section
        - task_doc_content: Content of Task doc (from file or section)
        - format_type: "separate_file" or "delimited_section" or "not_found"
    """
    project_root = Path.cwd()
    
    # Format 1: Separate file
    if config and config.get('use_kanban') and 'kanban_root' in config:
        kanban_root = Path(config['kanban_root'])
        story_dir = kanban_root / f"epics/Epic-{epic}/Story-{story:03d}"
        if not story_dir.exists():
            story_dir = kanban_root / f"epics/Epic-{epic}/Story-{story}"
        if not story_dir.exists() and story_file.exists():
            # Fallback: story dir may match story file stem (e.g. Story-001-fr-repo/)
            story_dir = story_file.parent / story_file.stem
    else:
        # Fallback patterns
        story_dir = project_root / f"docs/project-management/kanban/epics/Epic-{epic}/Story-{story:03d}"
        if not story_dir.exists():
            story_dir = project_root / f"docs/project-management/kanban/epics/Epic-{epic}/Story-{story}"
        if not story_dir.exists() and story_file.exists():
            story_dir = story_file.parent / story_file.stem
    
    if story_dir.exists():
        # Try Task-{task}-*.md pattern
        task_files = list(story_dir.glob(f"Task-{task:03d}-*.md"))
        if not task_files:
            # Try T{task}-*.md pattern (zero-padded 3)
            task_files = list(story_dir.glob(f"T{task:03d}-*.md"))
        if not task_files:
            # Try T{task}-*.md pattern (zero-padded 2, e.g. T02-*.md)
            task_files = list(story_dir.glob(f"T{task:02d}-*.md"))
        if not task_files:
            # Try T{task}-*.md pattern (no padding, e.g. T37-*.md)
            task_files = list(story_dir.glob(f"T{task}-*.md"))
        if not task_files:
            # E07S01T09-*.md style (E/S/T two-digit — canonical task-doc naming on some epics)
            task_files = list(story_dir.glob(f"E{epic:02d}S{story:02d}T{task:02d}-*.md"))
        if task_files:
            task_file = task_files[0]
            return (task_file, task_file.read_text(), "separate_file")
    
    # Format 2: Delimited section in Story file
    if story_file.exists():
        content = story_file.read_text()
        # Look for section header: ### E{epic}:S{story}:T{task} – or ### E{epic}:S{story}:T{task} –
        # Also handle zero-padded task numbers (e.g., T01, T02)
        patterns = [
            re.compile(
                rf'^###\s+E{epic}:S{story}:T{task:02d}\s+–\s+.*$',
                re.MULTILINE | re.IGNORECASE
            ),
            re.compile(
                rf'^###\s+E{epic}:S{story}:T{task}\s+–\s+.*$',
                re.MULTILINE | re.IGNORECASE
            ),
            # Also check for ### E2:S09:T02 – pattern (with zero padding)
            re.compile(
                rf'^###\s+E{epic}:S{story:02d}:T{task:02d}\s+–\s+.*$',
                re.MULTILINE | re.IGNORECASE
            ),
        ]
        
        for pattern in patterns:
            match = pattern.search(content)
            if match:
                # Extract section content (from header to next ### or --- separator or end of file)
                start_pos = match.start()
                # Find next ### header, --- separator, or end of file
                remaining = content[start_pos:]
                # Look for next ### header (not the current one)
                next_header = re.search(r'^###\s+', remaining[len(match.group(0)):], re.MULTILINE)
                # Also look for --- separator (often used to separate tasks)
                next_separator = re.search(r'^---\s*$', remaining[len(match.group(0)):], re.MULTILINE)
                
                # Take the earliest of next header, separator, or end
                end_pos = len(remaining)
                if next_header:
                    end_pos = min(end_pos, next_header.start() + len(match.group(0)))
                if next_separator:
                    end_pos = min(end_pos, next_separator.start() + len(match.group(0)))
                
                section_content = remaining[:end_pos]
                return (None, section_content, "delimited_section")
    
    # Format 3: Global fallback by canonical Task ID match (handles duplicate Story-XXX names)
    task_id_regex = re.compile(
        rf'^\*\*Task ID:\*\*\s*E0*{epic}:S0*{story}:T0*{task}\b',
        re.MULTILINE | re.IGNORECASE,
    )
    search_roots: List[Path] = []
    if config and config.get("use_kanban") and "kanban_root" in config:
        kr = Path(config["kanban_root"])
        search_roots.append(project_root / kr if not kr.is_absolute() else kr)
    search_roots.append(project_root / "docs/project-management/kanban")

    seen: set = set()
    for root in search_roots:
        try:
            root = root.resolve()
        except Exception:
            pass
        if root in seen or not root.exists():
            continue
        seen.add(root)
        for candidate in (root / "epics").rglob("*.md") if (root / "epics").exists() else []:
            if candidate.name.startswith("_"):
                continue
            try:
                head = candidate.read_text(encoding="utf-8", errors="replace")[:12000]
            except OSError:
                continue
            if task_id_regex.search(head):
                return (candidate, candidate.read_text(encoding="utf-8", errors="replace"), "separate_file")

    return (None, None, "not_found")


def locate_task_doc_from_requested(epic: int, story: int, task: int, config: Optional[Dict] = None) -> Tuple[Optional[Path], Optional[Path]]:
    """
    Locate task doc directly from requested E/S/T, returning (task_doc_path, story_file_path).
    """
    project_root = Path.cwd()
    if config and config.get('use_kanban') and 'kanban_root' in config:
        kanban_root = Path(config['kanban_root'])
        if not kanban_root.is_absolute():
            kanban_root = project_root / kanban_root
    else:
        kanban_root = project_root / "docs/project-management/kanban"

    epic_dir = kanban_root / f"epics/Epic-{epic}"
    if not epic_dir.exists():
        return (None, None)

    patterns = [
        f"Story-{story:03d}-*/T{task:03d}-*.md",
        f"Story-{story:03d}-*/T{task:02d}-*.md",
        f"Story-{story:03d}-*/T{task}-*.md",
        f"Story-{story:03d}-*/Task-{task:03d}-*.md",
    ]
    for pat in patterns:
        hits = sorted(epic_dir.glob(pat))
        if hits:
            task_doc = hits[0]
            story_dir = task_doc.parent
            story_file = epic_dir / f"{story_dir.name}.md"
            return (task_doc, story_file if story_file.exists() else None)
    return (None, None)


def validate_task_doc_fields(
    task_content: str, epic: int, story: int, task: int,
    relax_for_perpetual: bool = False
) -> Tuple[bool, list]:
    """
    Validate Task document contains required fields.
    
    Required fields (per Kanban Governance Policy):
    - Task ID (must match E{epic}:S{story}:T{task})
    - Scope
    - Acceptance Criteria
    - Status
    - Version Anchor (when complete)
    - Input
    - Deliverable
    
    When relax_for_perpetual=True (for perpetual tasks): Input and Deliverable
    are optional; Version Anchor check skipped for IN PROGRESS tasks.
    
    Returns:
        (is_valid, list_of_errors)
    """
    errors = []
    
    # Check Task ID (flexible - can be in header or anywhere in content)
    # Handle both zero-padded and non-zero-padded formats
    task_id_patterns = [
        re.compile(rf'E{epic}:S{story:02d}:T{task:02d}', re.IGNORECASE),  # E2:S09:T02
        re.compile(rf'E{epic}:S{story}:T{task:02d}', re.IGNORECASE),      # E2:S9:T02
        re.compile(rf'E{epic}:S{story:02d}:T{task}', re.IGNORECASE),      # E2:S09:T2
        re.compile(rf'E{epic}:S{story}:T{task}', re.IGNORECASE),          # E2:S9:T2
    ]
    
    task_id_found = False
    for pattern in task_id_patterns:
        if pattern.search(task_content):
            task_id_found = True
            break
    
    if not task_id_found:
        errors.append(f"Task ID not found or incorrect. Expected: E{epic}:S{story}:T{task} (or with zero-padding: E{epic}:S{story:02d}:T{task:02d})")
    
    # Check required fields (case-insensitive, flexible patterns)
    # Note: For delimited sections, fields may use **Field:** format
    # Scope can be implicit in task title/description, so make it optional if other fields present
    # Perpetual tasks: Input and Deliverable are optional
    required_fields = {
        'acceptance criteria': r'(?i)(?:^##\s+Acceptance\s+Criteria|^\*\*Acceptance\s+Criteria\*\*|^Acceptance\s+Criteria:|Acceptance\s+Criteria:)',
        'status': r'(?i)(?:^\*\*Status\*\*|^Status:|Status.*COMPLETE|Status.*TODO|Status.*IN PROGRESS|\*\*Status\*\*.*COMPLETE)',
    }
    if not relax_for_perpetual:
        required_fields['input'] = r'(?i)(?:^##\s+Input|^\*\*Input\*\*|^Input:|Input:)'
        required_fields['deliverable'] = r'(?i)(?:^##\s+Deliverable|^\*\*Deliverable\*\*|^Deliverable:|Deliverable:)'
    
    # Optional fields (warn if missing but don't fail)
    optional_fields = {
        'scope': r'(?i)(?:^##\s+Scope|^\*\*Scope\*\*|^Scope:|Scope\s+description|Scope:)',
    }
    
    for field_name, pattern in required_fields.items():
        # Search in entire content (not just line-start patterns)
        if not re.search(pattern, task_content, re.MULTILINE | re.DOTALL):
            errors.append(f"Required field missing: {field_name}")
    
    # Check optional fields (warn but don't fail)
    for field_name, pattern in optional_fields.items():
        if not re.search(pattern, task_content, re.MULTILINE | re.DOTALL):
            # Scope can be implicit in task title, so only warn if no task description present
            if not re.search(r'(?i)(?:task|description|title)', task_content[:200], re.IGNORECASE):
                errors.append(f"Optional field missing (recommended): {field_name}")
    
    # Check Version Anchor (if task is complete); skip for perpetual (IN PROGRESS)
    if not relax_for_perpetual and re.search(r'(?i)✅\s+COMPLETE|Status.*COMPLETE', task_content):
        if not re.search(r'(?i)✅\s+COMPLETE\s+\(v\d+\.\d+\.\d+\.\d+\+\d+\)|Version\s+Anchor', task_content):
            errors.append("Version Anchor missing (task marked COMPLETE but no version marker found)")
    
    is_valid = len(errors) == 0
    return is_valid, errors


def is_documentation_file(file_path: Path) -> bool:
    """
    Check if a file is considered documentation-only.
    
    Documentation files include:
    - Markdown files (.md)
    - README files (README.md, README.txt, etc.)
    - CHANGELOG files (CHANGELOG.md, CHANGELOG.txt, etc.)
    - Files in docs/ directory
    - Files in packages/frameworks/*/ directories (framework docs)
    - Files in docs/ directory
    - Kanban documentation (Epic, Story, Task docs)
    - YAML config files (rw-config.yaml, etc.) - considered docs
    - Text files (.txt)
    
    Non-documentation files include:
    - Python files (.py) - except if in docs/ or docs/
    - JavaScript/TypeScript files (.js, .ts, .jsx, .tsx)
    - Other code files (.java, .go, .rs, etc.)
    - Binary files
    """
    file_str = str(file_path)
    
    # Always documentation: markdown files
    if file_path.suffix.lower() == '.md':
        return True

    # Root agent / workspace policy (text, not product code) — allow in doc-init (+0) releases
    if file_path.name == ".cursorrules":
        return True
    
    # Always documentation: README and CHANGELOG files
    file_name_lower = file_path.name.lower()
    if file_name_lower.startswith('readme') or file_name_lower.startswith('changelog'):
        return True
    
    # Always documentation: docs/ directory
    if 'docs/' in file_str or file_str.startswith('docs/'):
        return True
    
    # Always documentation: packages/frameworks/*/ directories (framework docs)
    if 'packages/frameworks/' in file_str:
        return True
    
    # Always documentation: docs/ directory
    if 'docs/' in file_str or file_str.startswith('docs/'):
        return True
    
    # Always documentation: YAML config files (rw-config.yaml, etc.)
    if file_path.suffix.lower() in ['.yaml', '.yml']:
        return True
    
    # Always documentation: text files
    if file_path.suffix.lower() == '.txt':
        return True
    
    # Python files in docs/ or docs/ are documentation
    if file_path.suffix.lower() == '.py':
        if 'docs/' in file_str or 'docs/' in file_str or file_str.startswith('docs/') or file_str.startswith('docs/'):
            return True
        # Python files elsewhere are code
        return False
    
    # Other code file extensions are not documentation
    code_extensions = {'.js', '.ts', '.jsx', '.tsx', '.java', '.go', '.rs', '.cpp', '.c', '.h', '.hpp', '.cs', '.rb', '.php', '.swift', '.kt', '.scala', '.clj', '.sh', '.bash', '.zsh'}
    if file_path.suffix.lower() in code_extensions:
        return False
    
    # Binary or unknown files - default to not documentation
    # (conservative: if unsure, treat as non-doc)
    return False


def get_changed_files(project_root: Path = None) -> List[Path]:
    """
    Get list of changed files from git (staged + unstaged).
    
    Returns:
        List of Path objects for changed files
    """
    if project_root is None:
        project_root = Path.cwd()
    
    changed_files = []
    
    # Get staged files
    try:
        result = subprocess.run(
            ["git", "diff", "--cached", "--name-only"],
            cwd=project_root,
            capture_output=True,
            text=True,
            check=False
        )
        if result.returncode == 0:
            for line in result.stdout.strip().split('\n'):
                if line.strip():
                    changed_files.append(project_root / line.strip())
    except Exception:
        pass
    
    # Get unstaged files
    try:
        result = subprocess.run(
            ["git", "diff", "--name-only"],
            cwd=project_root,
            capture_output=True,
            text=True,
            check=False
        )
        if result.returncode == 0:
            for line in result.stdout.strip().split('\n'):
                if line.strip():
                    file_path = project_root / line.strip()
                    if file_path not in changed_files:
                        changed_files.append(file_path)
    except Exception:
        pass
    
    # Also check for untracked files (new files)
    try:
        result = subprocess.run(
            ["git", "ls-files", "--others", "--exclude-standard"],
            cwd=project_root,
            capture_output=True,
            text=True,
            check=False
        )
        if result.returncode == 0:
            for line in result.stdout.strip().split('\n'):
                if line.strip():
                    file_path = project_root / line.strip()
                    if file_path not in changed_files:
                        changed_files.append(file_path)
    except Exception:
        pass
    
    return changed_files


def detect_first_time_est_doc(
    epic: int,
    story: int,
    task: int,
    project_root: Path = None,
    config: Optional[Dict] = None
) -> Tuple[bool, list]:
    """
    Detect if this is a first-time E/S/T document commit (abstract space).
    
    Checks:
    1. New E/S/T doc file created (via git diff)
    2. No prior version exists in git history/changelog
    
    Args:
        epic: Epic number
        story: Story number
        task: Task number
        project_root: Project root directory
        config: Optional config dict
    
    Returns:
        (is_first_time, list_of_warnings)
    """
    if project_root is None:
        project_root = Path.cwd()
    
    warnings = []
    is_first_time = False
    
    # Check 1: Detect new E/S/T doc files in git diff
    changed_files = get_changed_files(project_root)
    
    # Patterns for E/S/T doc files (handle both zero-padded and non-zero-padded formats)
    epic_pattern = re.compile(rf'.*Epic-{epic}(?:/Epic-{epic}\.md|\.md)$')
    story_patterns = [
        re.compile(rf'.*Epic-{epic}/Story-{story:03d}.*\.md$'),  # Zero-padded: Story-010
        re.compile(rf'.*Epic-{epic}/Story-{story}.*\.md$'),      # Non-zero-padded: Story-10
    ]
    task_patterns = [
        re.compile(rf'.*Epic-{epic}/Story-{story:03d}/Task-{task:03d}.*\.md$'),  # Zero-padded
        re.compile(rf'.*Epic-{epic}/Story-{story}/Task-{task:03d}.*\.md$'),      # Mixed
        re.compile(rf'.*Epic-{epic}/Story-{story:03d}/Task-{task}.*\.md$'),     # Mixed
        re.compile(rf'.*Epic-{epic}/Story-{story}/Task-{task}.*\.md$'),          # Non-zero-padded
        # T-prefix format (e.g. T01-*.md in Story-006-post-windsurf-project-review/)
        re.compile(rf'.*Epic-{epic}/Story-{story:03d}[^/]*/T{task:02d}-.*\.md$'),
        re.compile(rf'.*Epic-{epic}/Story-{story}[^/]*/T{task}-.*\.md$'),
    ]
    
    new_est_doc_found = False
    for file_path in changed_files:
        file_str = str(file_path)
        # Check if this is a new E/S/T doc file
        is_est_doc = False
        if epic_pattern.search(file_str):
            is_est_doc = True
        else:
            for pattern in story_patterns:
                if pattern.search(file_str):
                    is_est_doc = True
                    break
            if not is_est_doc:
                for pattern in task_patterns:
                    if pattern.search(file_str):
                        is_est_doc = True
                        break
        
        if is_est_doc:
            # Check if it's a new file (Added in staged changes)
            try:
                result = subprocess.run(
                    ["git", "diff", "--cached", "--name-status", "--", str(file_path)],
                    cwd=project_root,
                    capture_output=True,
                    text=True,
                    check=False
                )
                if result.returncode == 0 and result.stdout.strip().startswith('A'):
                    # New file (Added)
                    new_est_doc_found = True
                    break
            except Exception:
                pass
    
    # Check 2: Check for delimited section in Story file (for Task docs)
    # Look for new Task section header being added to Story file
    delimited_section_found = False
    if task > 0:  # Task-level detection
        # Find Story file
        story_file = find_story_file(config, epic, story)
        if story_file and story_file.exists():
            # Check git diff for new Task section header
            try:
                result = subprocess.run(
                    ["git", "diff", "--", str(story_file)],
                    cwd=project_root,
                    capture_output=True,
                    text=True,
                    check=False
                )
                if result.returncode == 0:
                    # Look for new Task section header being added
                    task_header_pattern = re.compile(
                        rf'^\+\s*###\s+E{epic}:S{story}:T{task:02d}\s+–',
                        re.MULTILINE
                    )
                    if task_header_pattern.search(result.stdout):
                        delimited_section_found = True
            except Exception:
                pass
    
    # Check 3: Check if prior version exists in git history
    # Look for version pattern RC.EPIC.STORY.TASK+* in git log or changelog
    version_pattern = rf'{epic}\.{story}\.{task}\+'
    prior_version_exists = False
    
    # Check git log for version mentions
    try:
        result = subprocess.run(
            ["git", "log", "--all", "--grep", version_pattern, "--oneline"],
            cwd=project_root,
            capture_output=True,
            text=True,
            check=False
        )
        if result.returncode == 0 and result.stdout.strip():
            prior_version_exists = True
    except Exception:
        pass
    
    # Check changelog for prior version - use HEAD (committed) only to avoid false positive
    # during RW when CHANGELOG has already been updated with the version we're committing
    if not prior_version_exists:
        try:
            result = subprocess.run(
                ["git", "show", "HEAD:CHANGELOG.md"],
                cwd=project_root,
                capture_output=True,
                text=True,
                check=False
            )
            if result.returncode == 0 and re.search(version_pattern, result.stdout or ""):
                prior_version_exists = True
        except Exception:
            pass
    
    # CRITICAL FIX: Check if task document already exists (even if not created in this commit)
    # If task doc exists, it's NOT doc-init, regardless of prior version history
    # This fixes the bug where story + all task docs created together in story's abstract space
    # causes first implementation work to incorrectly get BUILD=0 instead of BUILD=1
    task_doc_exists = False
    if task > 0:  # Task-level detection
        story_file = find_story_file(config, epic, story)
        if story_file:
            task_doc_path, task_doc_content, format_type = locate_task_doc(
                story_file, epic, story, task, config
            )
            if format_type != "not_found":
                task_doc_exists = True
    
    # Determine if this is first-time
    est_doc_created = new_est_doc_found or delimited_section_found
    
    # CRITICAL: If task document already exists, it's NOT doc-init
    # This handles the case where story + task docs created together in story's abstract space
    # When first implementation work is done, task doc exists but wasn't created in this commit
    # Without this check, function incorrectly returns is_first_time=True, causing BUILD=0
    if task_doc_exists and not est_doc_created:
        # Task doc exists but wasn't created in this commit → NOT doc-init
        is_first_time = False
        warnings.append(
            f"⚠️  Task document already exists (not created in this commit). "
            f"This is NOT a doc-init build. Task doc exists, so BUILD should be >= 1."
        )
    elif est_doc_created and not prior_version_exists:
        is_first_time = True
    elif est_doc_created and prior_version_exists:
        warnings.append(
            f"⚠️  New E/S/T doc detected, but prior version exists. "
            f"This may not be a first-time commit (doc-init)."
        )
    elif not est_doc_created and not prior_version_exists:
        # No E/S/T doc detected, but no prior version exists
        # This could be a delimited section or edge case - be lenient but warn
        # BUT: Only if task doc doesn't exist (if it exists, we already handled it above)
        if not task_doc_exists:
            is_first_time = True
            warnings.append(
                f"⚠️  No new E/S/T doc file or section detected, but no prior version exists. "
                f"Assuming first-time commit (doc-init). If this is incorrect, validation will fail on docs-only check."
            )
        else:
            # Task doc exists but wasn't detected as created in this commit
            # This shouldn't happen, but handle it gracefully
            is_first_time = False
            warnings.append(
                f"⚠️  Task document exists but wasn't detected as created in this commit. "
                f"This is NOT a doc-init build. BUILD should be >= 1."
            )
    
    return is_first_time, warnings


def validate_doc_init_build(
    version_components: Tuple[int, int, int, int, int],
    project_root: Path = None,
    config: Optional[Dict] = None
) -> Tuple[bool, list]:
    """
    Validate that a doc-init build (+0) only contains documentation changes.
    
    Args:
        version_components: (RC, EPIC, STORY, TASK, BUILD) tuple
        project_root: Project root directory
    
    Returns:
        (is_valid, list_of_errors)
    """
    errors = []
    rc, epic, story, task, build = version_components
    
    # Check if this is a doc-init build (BUILD = 0)
    if build != 0:
        # Not a doc-init build, skip validation
        return True, []
    
    print(f"🔍 Doc-init build detected (BUILD=0) - validating docs-only changes...")
    
    # Get project root
    project_root = project_root or Path.cwd()
    
    # Allow version file updates in doc-init builds
    allowed_non_doc_relpaths = set()
    if config and 'version_file' in config:
        version_file_path = Path(config['version_file'])
    else:
        version_file_path = Path("src/fynd_deals/version.py")
    try:
        # Resolve relative to project_root so relative_to works
        resolved_vf = (project_root / version_file_path).resolve()
        allowed_non_doc_relpaths.add(str(resolved_vf.relative_to(project_root.resolve())))
    except Exception:
        pass
    
    # Get changed files
    changed_files = get_changed_files(project_root)
    
    if not changed_files:
        # No changed files - this might be a validation run before changes are staged
        print("⚠️  No changed files detected. This may be normal if validation runs before staging.")
        return True, []
    
    # Check each changed file
    non_doc_files = []
    for file_path in changed_files:
        # Skip if file doesn't exist (might be deleted)
        if not file_path.exists():
            continue
        
        try:
            rel_path = str(file_path.relative_to(project_root))
        except ValueError:
            rel_path = str(file_path)
        
        if rel_path in allowed_non_doc_relpaths:
            continue
        
        if not is_documentation_file(file_path):
            non_doc_files.append(file_path)
    
    if non_doc_files:
        errors.append(
            f"❌ DOC-INIT VALIDATION FAILED: Doc-init build (BUILD=0) contains non-documentation changes:\n"
        )
        for non_doc_file in non_doc_files:
            rel_path = str(non_doc_file.relative_to(project_root or Path.cwd()))
            errors.append(f"   - {rel_path}")
        errors.append(
            f"\n   Doc-init builds (+0) must only contain documentation changes.\n"
            f"   Documentation files include: .md files, README, CHANGELOG, docs/, packages/frameworks/, docs/, .yaml, .txt\n"
            f"   Code files (.py, .js, .ts, etc.) are not allowed in doc-init builds."
        )
        return False, errors
    
    print(f"✅ Doc-init validation passed: All {len(changed_files)} changed files are documentation-only.")
    return True, []


def validate_task_doc_alignment(
    task_content: str,
    epic: int,
    story: int,
    task: int
) -> Tuple[bool, list]:
    """
    Validate Task ID alignment with version components.

    Prefers canonical Task ID section (**Value:**, **Full Task ID:**, ## Task ID)
    to avoid wrong extraction when content references other tasks (e.g. in Progress).

    Returns:
        (is_valid, list_of_errors)
    """
    errors = []

    # Prefer canonical section over first regex match
    canonical = extract_task_id_canonical(task_content)
    if canonical:
        found_epic, found_story, found_task = canonical
    else:
        # Fallback: first E#:S#:T# match
        task_id_pattern = re.compile(r'E(\d+):S(\d+):T(\d+)', re.IGNORECASE)
        matches = task_id_pattern.findall(task_content)
        if not matches:
            errors.append(f"Task ID not found in Task document. Expected: E{epic}:S{story}:T{task}")
            return False, errors
        found_epic = int(matches[0][0])
        found_story = int(matches[0][1])
        found_task = int(matches[0][2])
    
    if found_epic != epic:
        errors.append(f"Task ID Epic mismatch: Found E{found_epic}, Expected E{epic}")
    if found_story != story:
        errors.append(f"Task ID Story mismatch: Found S{found_story}, Expected S{story}")
    if found_task != task:
        errors.append(f"Task ID Task mismatch: Found T{found_task}, Expected T{task}")
    
    is_valid = len(errors) == 0
    return is_valid, errors


def validate_version_bump(
    version_file: Path,
    story_file: Optional[Path] = None,
    config: Optional[Dict] = None,
    requested: Optional[str] = None,
    art: bool = False,
    doc_policy_zero: bool = False,
) -> Tuple[bool, list]:
    """
    Validate that version bump follows correct logic.
    
    Returns:
        (is_valid, list_of_errors)
    """
    errors = []
    policy_zero_ok = False
    
    # Get current version components
    version_components = get_version_components(version_file)
    if not version_components:
        errors.append(f"Could not extract version components from {version_file}")
        return False, errors
    
    rc, epic, story, current_task, current_build = version_components
    requested_est = parse_requested_est(requested) if requested else None
    if art and requested_est is not None:
        epic, story, current_task = requested_est
        print(
            f"--art adoption enabled: validating against requested E{epic}:S{story}:T{current_task} "
            f"(version file: {rc}.{version_components[1]}.{version_components[2]}.{version_components[3]}+{current_build})"
        )
    print(f"Current version: {rc}.{epic}.{story}.{current_task}+{current_build}")

    if doc_policy_zero and not art:
        errors.append(
            "--doc-policy-zero requires --art (canonical adoption) so the intended E/S/T anchor is explicit."
        )
    if doc_policy_zero and not requested:
        errors.append("--doc-policy-zero requires --requested <E#:S#:T#>.")
    
    # NEW: Validate doc-init build (if BUILD = 0, must be docs-only and first-time E/S/T doc)
    # Project root: script runs from repo root (where rw-config.yaml, CHANGELOG live)
    project_root = Path.cwd()
    
    # If BUILD = 0, validate abstract space conditions
    is_first_time = False
    if current_build == 0:
        # Check if this is a first-time E/S/T doc commit
        is_first_time, first_time_warnings = detect_first_time_est_doc(
            epic, story, current_task, project_root, config
        )
        # Docs-only requirement (must run before policy_zero_ok)
        doc_init_valid, doc_init_errors = validate_doc_init_build(
            version_components, project_root, config
        )
        policy_zero_ok = bool(
            doc_policy_zero
            and art
            and requested_est is not None
            and doc_init_valid
        )
        if policy_zero_ok:
            print(
                "✅ --doc-policy-zero: BUILD +0 accepted for existing E/S/T (docs-only; explicit policy). "
                "See BR-067 / perpetual RW doc-only releases."
            )

        if not is_first_time and not policy_zero_ok:
            errors.append(
                f"❌ ABSTRACT SPACE VALIDATION FAILED: BUILD=0 (abstract space) detected, but this is not a first-time E/S/T document commit.\n"
                f"   Abstract space builds (`+0`) are only valid for first-time E/S/T document creation (docs-only).\n"
                f"   Conditions for valid abstract space (`+0`):\n"
                f"   1. New E/S/T document file created OR new delimited section added to Story file\n"
                f"   2. No prior version exists for this E/S/T (check git history and changelog)\n"
                f"   3. All changes are docs-only (no code changes)\n"
                f"   If the E/S/T document already exists, use BUILD >= 1 for functional changes, or pass --doc-policy-zero with --requested/--art when policy requires +0.\n"
                f"   See: FR-017 (Doc-Init Build), FR-018 (Abstract Space), FR-020 (Abstract Space Awareness)"
            )
        if first_time_warnings:
            for warning in first_time_warnings:
                print(f"⚠️  {warning}")
        
        if not doc_init_valid:
            errors.extend(doc_init_errors)
    else:
        # Normal build (BUILD >= 1) - validate that it's not incorrectly using doc-init
        # This is handled in version bump logic validation below
        pass
    
    # Don't return early - continue with other validations to show all errors
    
    # Find story file if not provided
    requested_task_doc: Optional[Path] = None
    if story_file is None:
        if art and requested_est is not None:
            requested_task_doc, requested_story_file = locate_task_doc_from_requested(
                epic, story, current_task, config
            )
            if requested_story_file is not None:
                story_file = requested_story_file
        if story_file is None:
            story_file = find_story_file(config, epic, story)
    
    if story_file is None:
        errors.append(f"Could not find Story file for Epic {epic}, Story {story}")
        return False, errors
    
    print(f"Story file: {story_file}")
    
    # Get completed task - use current_task as hint (the task we're validating)
    # Doc-init (BUILD=0, first-time E/S/T): use current_task (we're creating the doc, not completing it)
    completed_task = current_task if (current_build == 0 and is_first_time) else None
    if completed_task is None:
        completed_task = get_completed_task(story_file, version_task=current_task)
    if completed_task is None:
        errors.append(f"Could not identify completed task from {story_file}")
        return False, errors
    
    print(f"Completed task: T{completed_task:02d}")
    print(f"Current VERSION_TASK: {current_task}")
    
    # NEW: Validate Task document presence and alignment
    if requested_task_doc is not None and requested_task_doc.exists():
        task_doc_path = requested_task_doc
        task_doc_content = requested_task_doc.read_text()
        format_type = "separate_file"
    else:
        task_doc_path, task_doc_content, format_type = locate_task_doc(
            story_file, epic, story, completed_task, config
        )
    
    if format_type == "not_found":
        errors.append(
            f"❌ TASK DOCUMENT NOT FOUND: Task E{epic}:S{story}:T{completed_task} does not have a Task document.\n"
            f"   Create Task document at: {story_file.parent}/Task-{completed_task:03d}-description.md\n"
            f"   OR add delimited section to Story file with header: ### E{epic}:S{story}:T{completed_task} – Task Title"
        )
    else:
        print(f"Task document found: {format_type}")
        if task_doc_path:
            print(f"  Location: {task_doc_path}")
        else:
            print(f"  Location: Delimited section in {story_file}")
        
        # Validate Task doc fields (relax for perpetual tasks)
        relax = is_perpetual_task(completed_task, task_doc_content)
        fields_valid, field_errors = validate_task_doc_fields(
            task_doc_content, epic, story, completed_task, relax_for_perpetual=relax
        )
        if not fields_valid:
            errors.append(f"❌ TASK DOCUMENT INCOMPLETE: Task E{epic}:S{story}:T{completed_task} document is missing required fields:")
            for field_error in field_errors:
                errors.append(f"   - {field_error}")
            errors.append(
                f"   Required fields: Task ID, Scope, Acceptance Criteria, Status, Version Anchor, Input, Deliverable.\n"
                f"   See: packages/frameworks/kanban/templates/TASK_TEMPLATE.md"
            )
        
        # Validate Task ID alignment
        alignment_valid, alignment_errors = validate_task_doc_alignment(
            task_doc_content, epic, story, completed_task
        )
        if not alignment_valid:
            errors.append(f"❌ TASK ID MISMATCH: Task document Task ID does not match version components:")
            for alignment_error in alignment_errors:
                errors.append(f"   - {alignment_error}")
            errors.append(f"   Expected: E{epic}:S{story}:T{completed_task}")

        # Perpetual placement/numbering guardrails and marker consistency warnings
        perpetual_errors, perpetual_warnings = validate_perpetual_guardrails(
            epic, story, completed_task, task_doc_content
        )
        for warning in perpetual_warnings:
            print(f"⚠️  {warning}")
        for guardrail_error in perpetual_errors:
            errors.append(f"❌ PERPETUAL GUARDRAIL: {guardrail_error}")
    
    # Validate version bump logic (with abstract space awareness)
    # Check if this is a doc-init build (BUILD = 0)
    is_doc_init = (current_build == 0)
    
    if completed_task > current_task:
        # New task
        if current_task != completed_task:
            errors.append(
                f"Version bump error: Completed task T{completed_task:02d} > current VERSION_TASK {current_task}, "
                f"but VERSION_TASK is {current_task} (should be {completed_task})"
            )
        # Abstract space awareness: BUILD = 0 is valid for doc-init, BUILD = 1 for normal new task
        if is_doc_init:
            # Doc-init build: BUILD = 0 is valid (abstract space)
            if current_build != 0:
                errors.append(
                    f"❌ ABSTRACT SPACE VALIDATION ERROR: Doc-init build detected for new task T{completed_task:02d}, "
                    f"but BUILD is {current_build} (should be 0 for doc-init/abstract space).\n"
                    f"   Abstract space builds (`+0`) are only valid for first-time E/S/T document creation (docs-only).\n"
                    f"   See: FR-017 (Doc-Init Build), FR-018 (Abstract Space), FR-020 (Abstract Space Awareness)"
                )
        else:
            # Normal new task: BUILD = 1 is required
            if current_build != 1:
                if current_build == 0:
                    errors.append(
                        f"❌ ABSTRACT SPACE VALIDATION ERROR: New task T{completed_task:02d} detected, but BUILD is 0.\n"
                        f"   BUILD=0 (abstract space) is only valid for doc-init builds (first-time E/S/T document creation, docs-only).\n"
                        f"   For functional changes on a new task, use BUILD=1.\n"
                        f"   If this is a doc-init build, ensure:\n"
                        f"   1. This is the first-time commit of the E/S/T document\n"
                        f"   2. All changes are docs-only (no code changes)\n"
                        f"   3. Doc-init validation passes (see validate_doc_init_build output above)\n"
                        f"   See: FR-017 (Doc-Init Build), FR-018 (Abstract Space), FR-020 (Abstract Space Awareness)"
                    )
                else:
                    errors.append(
                        f"Version bump error: New task detected, but BUILD is {current_build} (should be 1 for normal builds, or 0 for doc-init)"
                    )
    
    elif completed_task == current_task:
        # Same task
        if is_doc_init:
            # Doc-init on same task: Valid when is_first_time (we're creating the doc), or explicit --doc-policy-zero
            if not is_first_time and not policy_zero_ok:
                errors.append(
                    f"❌ ABSTRACT SPACE VALIDATION ERROR: Doc-init build (BUILD=0) detected for existing task T{completed_task:02d}.\n"
                    f"   Abstract space builds (`+0`) are only valid for first-time E/S/T document creation (docs-only).\n"
                    f"   Since this task already exists, use BUILD >= 1 for subsequent changes.\n"
                    f"   Doc-init builds establish the canonical version anchor before functional work begins.\n"
                    f"   Once the E/S/T document exists, all subsequent changes require BUILD >= 1.\n"
                    f"   See: FR-017 (Doc-Init Build), FR-018 (Abstract Space), FR-020 (Abstract Space Awareness)"
                )
        else:
            # Same task, normal build - BUILD should be incremented (can't validate exact increment without previous version)
            if current_build < 1:
                errors.append(
                    f"Version bump error: Same task detected, but BUILD is {current_build} (should be >= 1 for normal builds). "
                    f"BUILD=0 is only valid for doc-init builds (first-time E/S/T document creation)."
                )
            print(f"Same task detected - BUILD should be incremented (current BUILD: {current_build})")
            # Note: We can't validate exact BUILD increment without knowing previous BUILD
    
    elif completed_task < current_task:
        # Out-of-order completion
        if current_task != completed_task:
            errors.append(
                f"Version bump error: Out-of-order completion detected (completed T{completed_task:02d} < current T{current_task}), "
                f"but VERSION_TASK is {current_task} (should be {completed_task})"
            )
        # Abstract space awareness: BUILD = 0 is valid for doc-init, BUILD = 1 for normal out-of-order
        if is_doc_init:
            # Doc-init build: BUILD = 0 is valid (abstract space)
            if current_build != 0:
                errors.append(
                    f"❌ ABSTRACT SPACE VALIDATION ERROR: Doc-init build detected for out-of-order task T{completed_task:02d}, "
                    f"but BUILD is {current_build} (should be 0 for doc-init/abstract space).\n"
                    f"   Abstract space builds (`+0`) are only valid for first-time E/S/T document creation (docs-only).\n"
                    f"   See: FR-017 (Doc-Init Build), FR-018 (Abstract Space), FR-020 (Abstract Space Awareness)"
                )
        else:
            # Normal out-of-order: BUILD = 1 is required
            if current_build != 1:
                if current_build == 0:
                    errors.append(
                        f"❌ ABSTRACT SPACE VALIDATION ERROR: Out-of-order task T{completed_task:02d} detected, but BUILD is 0.\n"
                        f"   BUILD=0 (abstract space) is only valid for doc-init builds (first-time E/S/T document creation, docs-only).\n"
                        f"   For functional changes on an out-of-order task, use BUILD=1.\n"
                        f"   If this is a doc-init build, ensure:\n"
                        f"   1. This is the first-time commit of the E/S/T document\n"
                        f"   2. All changes are docs-only (no code changes)\n"
                        f"   3. Doc-init validation passes (see validate_doc_init_build output above)\n"
                        f"   See: FR-017 (Doc-Init Build), FR-018 (Abstract Space), FR-020 (Abstract Space Awareness)"
                    )
                else:
                    errors.append(
                        f"Version bump error: Out-of-order completion, but BUILD is {current_build} (should be 1 for normal builds, or 0 for doc-init)"
                    )
    
    if errors:
        return False, errors
    
    print("✅ Version bump logic validated!")
    return True, []


def main():
    parser = argparse.ArgumentParser(description="Validate version bump logic")
    parser.add_argument(
        "--strict",
        action="store_true",
        help="Exit with error code on validation failure",
    )
    parser.add_argument(
        "--story-file",
        type=Path,
        help="Path to Story file (auto-detected if not provided)",
    )
    parser.add_argument(
        "--version-file",
        type=Path,
        help="Path to version file (auto-detected if not provided)",
    )
    parser.add_argument(
        "--requested",
        required=False,
        default=None,
        help="Requested E:S:T token for RW context (e.g., E6:S06:T58).",
    )
    parser.add_argument(
        "--art",
        action="store_true",
        help="Adopt requested token as canonical anchor for this validation run.",
    )
    parser.add_argument(
        "--doc-policy-zero",
        action="store_true",
        dest="doc_policy_zero",
        help=(
            "Allow BUILD +0 for an existing task when changes are docs-only (explicit policy; use with --requested and --art). "
            "See BR-067."
        ),
    )
    args = parser.parse_args()
    
    # Load config
    config = load_rw_config()
    
    # Get version file
    if args.version_file:
        version_file = args.version_file
    else:
        version_file = get_version_file_path(config)
    
    if not version_file.exists():
        print(f"❌ Version file not found: {version_file}")
        sys.exit(1)
    
    # Validate
    is_valid, errors = validate_version_bump(
        version_file,
        story_file=args.story_file,
        config=config,
        requested=args.requested,
        art=args.art,
        doc_policy_zero=args.doc_policy_zero,
    )
    
    if not is_valid:
        print("\n❌ VALIDATION FAILED:")
        for error in errors:
            print(f"  - {error}")
        print("\n🚨 Version bump does not follow RW Step 2 logic!")
        if args.strict:
            sys.exit(1)
        return 1
    
    return 0


if __name__ == "__main__":
    sys.exit(main())

