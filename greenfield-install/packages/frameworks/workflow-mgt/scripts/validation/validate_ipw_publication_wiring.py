#!/usr/bin/env python3
"""Validate IPW publication wiring for a requested E:S:T task.

Checks that planning artifacts are durable + discoverable via project docs tree
and linked from the host task doc, or that the task explicitly declares
NOT_APPLICABLE publication status with a reason.

Bulk inventory audit (--audit-inventory) scans docs/implementation-cycles/ for
ICW/IPW/IPP artifacts and reports basenames not referenced from any kanban task doc.
"""

from __future__ import annotations

import argparse
import re
import sys
from dataclasses import dataclass
from pathlib import Path
from typing import Dict, Iterable, List, Optional, Set, Tuple

try:
    import yaml
except ImportError:
    yaml = None

_SCRIPT_DIR = Path(__file__).resolve().parent
_KANBAN_DIR = _SCRIPT_DIR.parent / "kanban"
if str(_KANBAN_DIR) not in sys.path:
    sys.path.insert(0, str(_KANBAN_DIR))

from ukw_syntax_parser import parse_single_task_id  # noqa: E402

TASK_ID_RE = re.compile(r"\*\*Task ID:\*\*\s*E(\d+):S(\d+):T(\d+)\b", re.IGNORECASE)
MD_LINK_RE = re.compile(r"\[[^\]]+\]\(([^)]+)\)")
NOT_APPLICABLE_RE = re.compile(r"Publication Status:\s*NOT[_ -]?APPLICABLE", re.IGNORECASE)
NA_REASON_RE = re.compile(r"Publication N/A Reason:\s*.+", re.IGNORECASE)

IMPL_CYCLES_DIR = "docs/implementation-cycles"
ARTIFACT_BASENAME_RE = re.compile(
    r"^(?P<prefix>ICW|IPW|IPP)-E(?P<epic>\d+)S(?P<story>\d+)T(?P<task>\d+)-(?P<suffix>.+)\.md$",
    re.IGNORECASE,
)
KIND_SUFFIXES = {
    "specification": ("specification",),
    "test-design": ("test-design",),
    "implementation-plan": ("implementation-plan",),
}


@dataclass(frozen=True)
class ParsedArtifact:
    path: Path
    basename: str
    epic: int
    story: int
    task: int
    kind: Optional[str]
    prefix: str


_SCRIPTS_DIR = Path(__file__).resolve().parent.parent
if str(_SCRIPTS_DIR) not in sys.path:
    sys.path.insert(0, str(_SCRIPTS_DIR))

from rw_config_loader import load_rw_config  # noqa: E402


def implementation_cycles_dir(project_root: Path) -> Path:
    return project_root / IMPL_CYCLES_DIR


def kanban_epics_glob(project_root: Path, config: Optional[Dict]) -> List[Path]:
    roots: List[Path] = []
    if config and config.get("use_kanban") and config.get("kanban_root"):
        kr = Path(config["kanban_root"])
        roots.append(project_root / kr if not kr.is_absolute() else kr)
    roots.append(project_root / "docs/project-management/kanban")
    out: List[Path] = []
    seen = set()
    for r in roots:
        rp = r.resolve()
        if rp in seen or not rp.is_dir():
            continue
        seen.add(rp)
        epics = rp / "epics"
        if epics.is_dir():
            out.append(epics)
    return out


def task_id_header_matches(head: str, epic: int, story: int, task: int) -> bool:
    for m in TASK_ID_RE.finditer(head):
        if int(m.group(1)) == epic and int(m.group(2)) == story and int(m.group(3)) == task:
            return True
    return False


def find_task_markdown(project_root: Path, epic: int, story: int, task: int, config: Optional[Dict]) -> Optional[Path]:
    for epics in kanban_epics_glob(project_root, config):
        for path in sorted(epics.rglob("*.md")):
            if path.name.startswith("_"):
                continue
            head = path.read_text(encoding="utf-8", errors="replace")[:14000]
            if task_id_header_matches(head, epic, story, task):
                return path
    return None


def est_tokens(epic: int, story: int, task: int) -> Set[str]:
    patterns = {
        f"E{epic}S{story}T{task}",
        f"E{epic:02d}S{story}T{task}",
        f"E{epic}S{story:02d}T{task}",
        f"E{epic}S{story}T{task:02d}",
        f"E{epic:02d}S{story:02d}T{task:02d}",
        f"E{epic}S{story:02d}T{task:02d}",
        f"E{epic:02d}S{story:02d}T{task}",
    }
    return patterns


def classify_artifact_suffix(suffix: str, prefix: str) -> Optional[str]:
    lower = suffix.lower()
    for kind, endings in KIND_SUFFIXES.items():
        if any(lower == e or lower.endswith(f"-{e}") for e in endings):
            return kind
    if prefix.upper() == "IPP":
        return "implementation-plan"
    if lower == "package-summary":
        return None
    return None


def parse_artifact_path(path: Path) -> Optional[ParsedArtifact]:
    m = ARTIFACT_BASENAME_RE.match(path.name)
    if not m:
        return None
    prefix = m.group("prefix").upper()
    epic, story, task = int(m.group("epic")), int(m.group("story")), int(m.group("task"))
    kind = classify_artifact_suffix(m.group("suffix"), prefix)
    return ParsedArtifact(
        path=path,
        basename=path.name,
        epic=epic,
        story=story,
        task=task,
        kind=kind,
        prefix=prefix,
    )


def iter_planning_artifacts(impl_dir: Path) -> Iterable[ParsedArtifact]:
    if not impl_dir.is_dir():
        return
    for path in sorted(impl_dir.glob("*.md")):
        parsed = parse_artifact_path(path)
        if parsed is not None:
            yield parsed


def expected_artifact_basenames(epic: int, story: int, task: int) -> Dict[str, List[str]]:
    patterns = est_tokens(epic, story, task)
    return {
        "specification": [n for p in patterns for n in (f"ICW-{p}-specification.md", f"IPW-{p}-specification.md")],
        "test-design": [n for p in patterns for n in (f"ICW-{p}-test-design.md", f"IPW-{p}-test-design.md")],
        "implementation-plan": [
            n
            for p in patterns
            for n in (
                f"ICW-{p}-implementation-plan.md",
                f"IPW-{p}-implementation-plan.md",
            )
        ]
        + [f"IPP-{p}" for p in patterns],
    }


def artifacts_on_disk_for_task(impl_dir: Path, epic: int, story: int, task: int) -> Dict[str, List[Path]]:
    by_kind: Dict[str, List[Path]] = {k: [] for k in KIND_SUFFIXES}
    extra: List[Path] = []
    for art in iter_planning_artifacts(impl_dir):
        if art.epic != epic or art.story != story or art.task != task:
            continue
        if art.kind:
            by_kind[art.kind].append(art.path)
        else:
            extra.append(art.path)
    if extra:
        by_kind.setdefault("extra", []).extend(extra)
    return by_kind


def extract_task_links(content: str) -> List[str]:
    return [m.group(1).strip() for m in MD_LINK_RE.finditer(content)]


def normalize_to_project_path(task_doc: Path, link_target: str, project_root: Path) -> Optional[Path]:
    if link_target.startswith("http://") or link_target.startswith("https://"):
        return None
    p = (task_doc.parent / link_target).resolve()
    try:
        p.relative_to(project_root)
    except Exception:
        return None
    return p


def _ipp_matches_implementation_plan(name: str, epic: int, story: int, task: int) -> bool:
    if not name.upper().startswith("IPP-"):
        return False
    tokens = est_tokens(epic, story, task)
    upper = name.upper()
    return any(f"IPP-{t.upper()}" in upper or upper.startswith(f"IPP-{t.upper()}-") for t in tokens)


def validate_publication(
    project_root: Path,
    task_doc: Path,
    epic: int,
    story: int,
    task: int,
    impl_dir: Optional[Path] = None,
) -> Tuple[bool, List[str]]:
    errors: List[str] = []
    content = task_doc.read_text(encoding="utf-8", errors="replace")
    impl_dir = impl_dir or implementation_cycles_dir(project_root)

    if NOT_APPLICABLE_RE.search(content):
        if not NA_REASON_RE.search(content):
            errors.append("Publication Status is NOT_APPLICABLE but missing 'Publication N/A Reason:'")
            return False, errors
        return True, []

    links = extract_task_links(content)
    resolved = []
    for lt in links:
        p = normalize_to_project_path(task_doc, lt, project_root)
        if p is not None:
            resolved.append((lt, p))

    on_disk = artifacts_on_disk_for_task(impl_dir, epic, story, task)
    required_kinds = [k for k in KIND_SUFFIXES if on_disk.get(k)]
    if not required_kinds:
        # Legacy: expect canonical trio names even if files not yet created
        required_kinds = list(KIND_SUFFIXES.keys())

    expected = expected_artifact_basenames(epic, story, task)
    found_by_kind = {k: None for k in required_kinds}

    for _lt, p in resolved:
        if IMPL_CYCLES_DIR not in str(p).replace("\\", "/"):
            continue
        for kind in required_kinds:
            names = expected.get(kind, [])
            if kind == "implementation-plan" and _ipp_matches_implementation_plan(p.name, epic, story, task):
                found_by_kind[kind] = p
                continue
            if p.name in names:
                found_by_kind[kind] = p

    for kind in required_kinds:
        p = found_by_kind.get(kind)
        if p is None:
            on_disk_names = [x.name for x in on_disk.get(kind, [])]
            hint = f" (on disk: {', '.join(on_disk_names)})" if on_disk_names else ""
            errors.append(
                f"Missing task-doc link to {kind} artifact for E{epic}:S{story}:T{task} "
                f"under {IMPL_CYCLES_DIR}{hint}"
            )
            continue
        if not p.exists():
            errors.append(f"Linked {kind} artifact does not exist: {p}")

    return len(errors) == 0, errors


def collect_referenced_basenames(project_root: Path, config: Optional[Dict]) -> Set[str]:
    referenced: Set[str] = set()
    for epics in kanban_epics_glob(project_root, config):
        for path in epics.rglob("*.md"):
            if path.name.startswith("_"):
                continue
            content = path.read_text(encoding="utf-8", errors="replace")
            for lt in extract_task_links(content):
                p = normalize_to_project_path(path, lt, project_root)
                if p is None:
                    continue
                if IMPL_CYCLES_DIR in str(p).replace("\\", "/"):
                    referenced.add(p.name)
    return referenced


def _est_kind_keys(art: ParsedArtifact) -> Set[Tuple[int, int, int, str]]:
    if art.kind is None:
        return set()
    return {(art.epic, art.story, art.task, art.kind)}


def collect_referenced_est_kind_keys(project_root: Path, config: Optional[Dict]) -> Set[Tuple[int, int, int, str]]:
    keys: Set[Tuple[int, int, int, str]] = set()
    for epics in kanban_epics_glob(project_root, config):
        for path in epics.rglob("*.md"):
            if path.name.startswith("_"):
                continue
            content = path.read_text(encoding="utf-8", errors="replace")
            for lt in extract_task_links(content):
                p = normalize_to_project_path(path, lt, project_root)
                if p is None:
                    continue
                if IMPL_CYCLES_DIR not in str(p).replace("\\", "/"):
                    continue
                parsed = parse_artifact_path(p)
                if parsed is None:
                    continue
                keys.update(_est_kind_keys(parsed))
    return keys


def audit_inventory(project_root: Path, config: Optional[Dict]) -> Tuple[List[str], int]:
    impl_dir = implementation_cycles_dir(project_root)
    referenced_basenames = collect_referenced_basenames(project_root, config)
    referenced_keys = collect_referenced_est_kind_keys(project_root, config)
    unwired: List[str] = []
    scanned = 0
    for art in iter_planning_artifacts(impl_dir):
        scanned += 1
        if art.basename in referenced_basenames:
            continue
        keys = _est_kind_keys(art)
        if keys and keys.intersection(referenced_keys):
            continue
        unwired.append(art.basename)
    return unwired, scanned


def main() -> int:
    parser = argparse.ArgumentParser(description="Validate IPW publication wiring for requested E:S:T")
    parser.add_argument("--requested", help="Task id, e.g. E2:S15:T01 or E2S15T01")
    parser.add_argument(
        "--audit-inventory",
        action="store_true",
        help="Scan implementation-cycles artifacts vs task-doc link references (bulk mode)",
    )
    parser.add_argument("--project-root", type=Path, default=None, help="Repo root (default: cwd)")
    args = parser.parse_args()

    project_root = (args.project_root or Path.cwd()).resolve()
    config = load_rw_config(project_root)

    if args.audit_inventory:
        unwired, scanned = audit_inventory(project_root, config)
        print(f"Inventory audit: scanned {scanned} task-addressed planning artifact(s)")
        print(f"Missing task-doc wiring references: {len(unwired)}")
        for name in unwired[:50]:
            print(f"  - {name}")
        if len(unwired) > 50:
            print(f"  ... and {len(unwired) - 50} more")
        return 0 if not unwired else 1

    if not args.requested:
        print("ERROR: provide --requested E:S:T or use --audit-inventory")
        return 2

    parsed = parse_single_task_id(args.requested.strip())
    if parsed is None:
        print(f"ERROR: could not parse task id: {args.requested!r}")
        return 2
    e, s, t = parsed

    task_doc = find_task_markdown(project_root, e, s, t, config)
    if task_doc is None:
        print(f"ERROR: task document not found for E{e}:S{s}:T{t}")
        return 1

    ok, errors = validate_publication(project_root, task_doc, e, s, t)
    if ok:
        print(f"PASS: publication wiring OK for E{e}:S{s}:T{t}")
        print(f"  Task doc: {task_doc}")
        return 0

    print(f"FAIL: publication wiring invalid for E{e}:S{s}:T{t}")
    print(f"  Task doc: {task_doc}")
    for err in errors:
        print(f" - {err}")
    print(
        "Remediation: add links in task doc to specification/test-design/implementation-plan "
        f"(or IPP-* plan) in {IMPL_CYCLES_DIR}, or set Publication Status: NOT_APPLICABLE "
        "with Publication N/A Reason."
    )
    return 1


if __name__ == "__main__":
    raise SystemExit(main())
