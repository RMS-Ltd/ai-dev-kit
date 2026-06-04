"""Canonical E/S/T inline identifier formatting (UXR-014 / E4:S19:T09)."""

from __future__ import annotations

import re
from typing import Callable, Tuple

PERPETUAL_TASK_MIN = 101

# Colon form: E2:S16:T4 or E02:S16:T04
_COLON_EST_RE = re.compile(
    r"\bE(\d{1,2}):S(\d{1,2}):T(\d{1,3})\b",
    re.IGNORECASE,
)

# Compact form: E2S16T4 or E02S16T04 (used in RW/UKW triggers)
_COMPACT_EST_RE = re.compile(
    r"\bE(\d{1,2})S(\d{1,2})T(\d{1,3})\b",
    re.IGNORECASE,
)


def _task_token(task: int) -> str:
    if task >= PERPETUAL_TASK_MIN:
        return f"T{task:03d}"
    return f"T{task:02d}"


def format_est_reference(epic: int, story: int, task: int) -> str:
    """Return canonical colon notation, e.g. E02:S01:T04 or E02:S16:T101."""
    return f"E{epic:02d}:S{story:02d}:{_task_token(task)}"


def format_est_compact(epic: int, story: int, task: int) -> str:
    """Return canonical compact notation, e.g. E02S01T04."""
    if task >= PERPETUAL_TASK_MIN:
        return f"E{epic:02d}S{story:02d}T{task:03d}"
    return f"E{epic:02d}S{story:02d}T{task:02d}"


def _needs_padding(epic: int, story: int, task: int) -> bool:
    """True if any component is unpadded in typical legacy form."""
    if epic < 10 or story < 10:
        return True
    if task < PERPETUAL_TASK_MIN and task < 10:
        return True
    if task >= PERPETUAL_TASK_MIN and task < 100:
        return True
    return False


def _normalize_colon_match(match: re.Match[str]) -> str:
    epic, story, task = int(match.group(1)), int(match.group(2)), int(match.group(3))
    canonical = format_est_reference(epic, story, task)
    if match.group(0) == canonical:
        return match.group(0)
    return canonical


def _normalize_compact_match(match: re.Match[str]) -> str:
    epic, story, task = int(match.group(1)), int(match.group(2)), int(match.group(3))
    canonical = format_est_compact(epic, story, task)
    if match.group(0).upper() == canonical.upper():
        return canonical
    return canonical


_IPP_IPW_FILENAME_RE = re.compile(
    r"(?:IPP|IPW)-E\d+S\d+T\d+",
    re.IGNORECASE,
)


def _protect_ipp_ipw_filenames(text: str) -> tuple[str, list[str]]:
    """Replace IPP/IPW filename tokens with placeholders during normalization."""
    tokens: list[str] = []

    def _stash(m: re.Match[str]) -> str:
        tokens.append(m.group(0))
        return f"__IPP_FN_{len(tokens) - 1}__"

    return _IPP_IPW_FILENAME_RE.sub(_stash, text), tokens


def _restore_ipp_ipw_filenames(text: str, tokens: list[str]) -> str:
    for i, tok in enumerate(tokens):
        text = text.replace(f"__IPP_FN_{i}__", tok)
    return text


def _split_code_fences(text: str) -> list[tuple[str, bool]]:
    """Split text into (segment, is_code_fence) pairs."""
    parts: list[tuple[str, bool]] = []
    fence_re = re.compile(r"^(```+|~~~+).*$", re.MULTILINE)
    pos = 0
    in_fence = False
    for m in fence_re.finditer(text):
        if m.start() > pos:
            parts.append((text[pos : m.start()], in_fence))
        parts.append((m.group(0) + "\n", in_fence))
        pos = m.end() + 1
        in_fence = not in_fence
    if pos < len(text):
        parts.append((text[pos:], in_fence))
    if not parts:
        parts.append((text, False))
    return parts


def normalize_est_inline_in_text(text: str) -> Tuple[str, int]:
    """
    Normalize E/S/T tokens in prose (outside code fences).
    Returns (new_text, change_count).
    """
    segments = _split_code_fences(text)
    changes = 0
    out: list[str] = []

    for segment, in_fence in segments:
        if in_fence:
            out.append(segment)
            continue

        segment_protected, ipp_tokens = _protect_ipp_ipw_filenames(segment)

        def repl_colon(m: re.Match[str]) -> str:
            nonlocal changes
            new = _normalize_colon_match(m)
            if new != m.group(0):
                changes += 1
            return new

        def repl_compact(m: re.Match[str]) -> str:
            nonlocal changes
            new = _normalize_compact_match(m)
            if new != m.group(0):
                changes += 1
            return new

        updated = _COLON_EST_RE.sub(repl_colon, segment_protected)
        updated = _COMPACT_EST_RE.sub(repl_compact, updated)
        updated = _restore_ipp_ipw_filenames(updated, ipp_tokens)
        out.append(updated)

    return "".join(out), changes


def find_unpadded_est_violations(text: str) -> list[str]:
    """Return colon-form tokens that are not canonically padded."""
    violations: list[str] = []
    segments = _split_code_fences(text)
    for segment, in_fence in segments:
        if in_fence:
            continue
        for m in _COLON_EST_RE.finditer(segment):
            epic, story, task = int(m.group(1)), int(m.group(2)), int(m.group(3))
            canonical = format_est_reference(epic, story, task)
            if m.group(0) != canonical:
                violations.append(m.group(0))
    return violations
