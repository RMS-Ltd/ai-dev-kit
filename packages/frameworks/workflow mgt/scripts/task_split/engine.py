"""
FR-011 multi-epic task split engine (E4:S08:T07).

Deterministic split-candidate detection, task-level canonical assignment,
ID remap, and structured reference rewrite.
"""

from __future__ import annotations

import re
from typing import Dict, List, Optional, Sequence, Tuple

from .models import SplitPlan, TaskAssignment

# Canonical epic content signals (deterministic keyword scoring).
EPIC_SIGNALS: Dict[int, Tuple[str, ...]] = {
    2: (
        "workflow",
        "release",
        "rw",
        "ukw",
        "cmw",
        "ipw",
        "icw",
        "automation",
        "trigger",
        "intake",
    ),
    3: (
        "version",
        "versioning",
        "semver",
        "bump",
        "build",
        "schema",
        "rc.",
        "tag",
    ),
    4: (
        "kanban",
        "epic",
        "story",
        "task",
        "migration",
        "canonical",
        "board",
        "moscow",
    ),
}

DEFAULT_PARTIAL_THRESHOLD = 30.0
DEFAULT_SECONDARY_RATIO = 0.8
DEFAULT_ASSIGNMENT_MIN_SCORE = 0.05

EST_PATTERN = re.compile(
    r"\bE(\d+):S(\d+):T(\d+)\b",
    re.IGNORECASE,
)
EST_COMPACT_PATTERN = re.compile(
    r"\bE(\d+)S(\d+)T(\d+)\b",
    re.IGNORECASE,
)


def split_candidates(
    primary_epic: int,
    primary_confidence: float,
    primary_match_type: str,
    secondary_epics: Sequence[Tuple[int, float, str]],
    *,
    partial_threshold: float = DEFAULT_PARTIAL_THRESHOLD,
    secondary_ratio: float = DEFAULT_SECONDARY_RATIO,
) -> Tuple[bool, List[Tuple[int, float, str]], str]:
    """
    FR-1 / AC-1: Detect multi-epic partial-match split eligibility.

    Returns:
        (is_candidate, ordered candidate epic list, detection rationale)
    """
    candidates: List[Tuple[int, float, str]] = []
    if primary_epic > 0:
        candidates.append((primary_epic, primary_confidence, primary_match_type))

    threshold = max(partial_threshold, primary_confidence * secondary_ratio)
    for epic_num, score, match_type in secondary_epics:
        if score >= threshold and score >= partial_threshold:
            if not any(e == epic_num for e, _, _ in candidates):
                candidates.append((epic_num, score, match_type))

    candidates.sort(key=lambda x: (-x[1], x[0]))

    is_candidate = (
        len(candidates) >= 2
        and any(m in ("partial", "semantic") for _, _, m in candidates)
        and primary_match_type in ("partial", "semantic")
    )

    if is_candidate:
        epic_list = ", ".join(f"E{e} ({s:.1f}%, {m})" for e, s, m in candidates)
        rationale = (
            f"Split-candidate: source epic partially matches {len(candidates)} "
            f"canonical epics [{epic_list}] (threshold {threshold:.1f}%)."
        )
    else:
        rationale = (
            "Not a split-candidate: fewer than two eligible partial/semantic "
            f"canonical matches (primary={primary_match_type})."
        )

    return is_candidate, candidates, rationale


def _score_task_for_epic(text: str, epic_num: int) -> Tuple[float, List[str]]:
    """Score task text against canonical epic signals."""
    lowered = text.lower()
    signals = EPIC_SIGNALS.get(epic_num, ())
    if not signals:
        return 0.0, []

    hits = [sig for sig in signals if sig in lowered]
    if not hits:
        return 0.0, []

    score = len(hits) / len(signals)
    return min(score, 1.0), hits


def assign_tasks(
    source_tasks: Sequence[Dict],
    candidate_epics: Sequence[Tuple[int, float, str]],
    *,
    source_epic: int,
    default_story: int = 1,
    min_score: float = DEFAULT_ASSIGNMENT_MIN_SCORE,
) -> List[TaskAssignment]:
    """
    FR-2 / FR-3 / AC-2 / AC-3: Assign each source task to exactly one canonical epic.

    Each task dict supports: source_story, source_task, title, description, text.
    """
    if not source_tasks:
        return []

    epic_nums = [e for e, _, _ in candidate_epics]
    if not epic_nums:
        return []

    assignments: List[TaskAssignment] = []

    for task in sorted(source_tasks, key=_task_sort_key):
        src_story = int(task.get("source_story", task.get("story", 1)))
        src_task = int(task.get("source_task", task.get("task", 0)))
        text = " ".join(
            filter(
                None,
                [
                    str(task.get("title", "")),
                    str(task.get("description", "")),
                    str(task.get("text", "")),
                ],
            )
        )

        scores: List[Tuple[int, float, List[str]]] = []
        for epic_num in epic_nums:
            score, hits = _score_task_for_epic(text, epic_num)
            if score > 0:
                scores.append((epic_num, score, hits))

        tie_break: Optional[str] = None
        if not scores:
            target_epic = epic_nums[0]
            confidence = 0.0
            signals: List[str] = []
            rationale = (
                f"No content signals; defaulting to highest-ranked candidate E{target_epic} "
                f"(epic-level partial match)."
            )
            tie_break = "default_highest_ranked_candidate"
        else:
            scores.sort(key=lambda x: (-x[1], x[0]))
            top_score = scores[0][1]
            tied = [s for s in scores if abs(s[1] - top_score) < 1e-9]
            if len(tied) > 1:
                tie_break = "lower_epic_number"
                target_epic = min(t[0] for t in tied)
                signals = next(h for e, _, h in tied if e == target_epic)
            else:
                target_epic = scores[0][0]
                signals = scores[0][2]
            confidence = top_score if scores else 0.0
            rationale = _assignment_rationale(
                target_epic, confidence, signals, tie_break, epic_nums
            )

        if confidence < min_score and not tie_break:
            tie_break = "epic_level_fallback"

        match_type = next(
            (m for e, _, m in candidate_epics if e == target_epic),
            "partial",
        )

        assignments.append(
            TaskAssignment(
                source_epic=source_epic,
                source_story=src_story,
                source_task=src_task,
                target_epic=target_epic,
                target_story=default_story,
                target_task=src_task,
                confidence=confidence,
                rationale=rationale,
                signals=signals,
                tie_break=tie_break,
                match_type=match_type,
            )
        )

    return assignments


def deterministic_id_remap(
    assignments: Sequence[TaskAssignment],
    *,
    story_counters: Optional[Dict[Tuple[int, int], int]] = None,
) -> Dict[str, str]:
    """
    FR-5 / AC-5: Deterministically allocate target task numbers per (epic, story).

    Tasks are processed in stable source order; counters increment per bucket.
    """
    counters: Dict[Tuple[int, int], int] = dict(story_counters or {})
    remap: Dict[str, str] = {}

    ordered = sorted(
        assignments,
        key=lambda a: (a.source_story, a.source_task, a.source_epic),
    )

    for assignment in ordered:
        bucket = (assignment.target_epic, assignment.target_story)
        next_num = counters.get(bucket, 0) + 1
        counters[bucket] = next_num
        assignment.target_task = next_num
        remap[assignment.source_id] = assignment.target_id

    return remap


def rewrite_references(
    texts: Dict[str, str],
    id_remap: Dict[str, str],
) -> Tuple[Dict[str, str], List[str]]:
    """
    FR-6 / AC-6: Rewrite structured E:S:T references; report ambiguous targets.

    Only replaces IDs present in id_remap. Prose-only partial matches are reported
  as unresolved rather than silently mutated.
    """
    updates: Dict[str, str] = {}
    unresolved: List[str] = []

    for path, content in sorted(texts.items()):
        new_content, file_unresolved = _rewrite_content(content, id_remap)
        if new_content != content:
            updates[path] = new_content
        unresolved.extend(f"{path}: {u}" for u in file_unresolved)

    return updates, unresolved


def build_split_plan(
    source_epic: int,
    primary_epic: int,
    primary_confidence: float,
    primary_match_type: str,
    secondary_epics: Sequence[Tuple[int, float, str]],
    source_tasks: Sequence[Dict],
    reference_texts: Optional[Dict[str, str]] = None,
    *,
    partial_threshold: float = DEFAULT_PARTIAL_THRESHOLD,
    secondary_ratio: float = DEFAULT_SECONDARY_RATIO,
) -> SplitPlan:
    """Build a complete split plan (detection → assignment → remap → references)."""
    is_candidate, candidates, detection_rationale = split_candidates(
        primary_epic,
        primary_confidence,
        primary_match_type,
        secondary_epics,
        partial_threshold=partial_threshold,
        secondary_ratio=secondary_ratio,
    )

    plan = SplitPlan(
        source_epic=source_epic,
        is_split_candidate=is_candidate,
        candidate_epics=candidates,
        detection_rationale=detection_rationale,
    )

    if not is_candidate or not source_tasks:
        plan.summary = detection_rationale
        return plan

    plan.assignments = assign_tasks(
        source_tasks,
        candidates,
        source_epic=source_epic,
    )
    plan.id_remap = deterministic_id_remap(plan.assignments)

    if reference_texts:
        plan.reference_updates, plan.unresolved_references = rewrite_references(
            reference_texts,
            plan.id_remap,
        )

    assigned = len(plan.assignments)
    targets = sorted({a.target_epic for a in plan.assignments})
    plan.summary = (
        f"Split plan for source E{source_epic}: {assigned} task(s) across "
        f"canonical epics {targets}."
    )
    return plan


def multi_epic_split_hint(
    primary_epic: int,
    primary_confidence: float,
    primary_match_type: str,
    secondary_epics: Sequence[Tuple[int, float, str]],
) -> Optional[str]:
    """Short operator hint for intake / migration UIs."""
    is_candidate, candidates, rationale = split_candidates(
        primary_epic,
        primary_confidence,
        primary_match_type,
        secondary_epics,
    )
    if not is_candidate:
        return None
    epic_nums = [str(e) for e, _, _ in candidates]
    return (
        f"FR-011 multi-epic split recommended ({rationale}) "
        f"Run task_split_plan.py for candidate epics: {', '.join(epic_nums)}."
    )


def _task_sort_key(task: Dict) -> Tuple[int, int]:
    return (
        int(task.get("source_story", task.get("story", 0))),
        int(task.get("source_task", task.get("task", 0))),
    )


def _assignment_rationale(
    target_epic: int,
    confidence: float,
    signals: List[str],
    tie_break: Optional[str],
    all_epics: List[int],
) -> str:
    signal_str = ", ".join(signals) if signals else "none"
    parts = [
        f"Assigned to canonical E{target_epic} (confidence {confidence:.2f})",
        f"signals=[{signal_str}]",
    ]
    if tie_break:
        parts.append(f"tie_break={tie_break}")
    if len(all_epics) > 1:
        parts.append(f"candidates={all_epics}")
    return "; ".join(parts) + "."


def _rewrite_content(
    content: str,
    id_remap: Dict[str, str],
) -> Tuple[str, List[str]]:
    unresolved: List[str] = []

    def replace_est(match: re.Match) -> str:
        key = (
            f"E{int(match.group(1))}:S{int(match.group(2)):02d}:"
            f"T{int(match.group(3)):02d}"
        )
        if key in id_remap:
            return id_remap[key]
        unresolved.append(key)
        return match.group(0)

    def replace_compact(match: re.Match) -> str:
        key = (
            f"E{int(match.group(1))}:S{int(match.group(2)):02d}:"
            f"T{int(match.group(3)):02d}"
        )
        if key in id_remap:
            new = id_remap[key]
            # Compact form for replacement
            m = EST_PATTERN.match(new)
            if m:
                return f"E{m.group(1)}S{m.group(2)}T{m.group(3)}"
        unresolved.append(match.group(0))
        return match.group(0)

    updated = EST_PATTERN.sub(replace_est, content)
    updated = EST_COMPACT_PATTERN.sub(replace_compact, updated)
    return updated, unresolved
