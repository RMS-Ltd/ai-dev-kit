#!/usr/bin/env python3
"""
Migration plan presentation helpers for Kanban framework installation.

DEPRECATED (FR-127 / ADR-028): Superseded by KMA migration-proposal.md artifact.

Part of Epic 4, Story 8, Task 5 (FR-009): Migration plan presentation.
"""

from __future__ import annotations

from typing import Any, Dict, List, Tuple

HIGH_MATCH_THRESHOLD = 70.0
MEDIUM_MATCH_THRESHOLD = 40.0
MAX_MATCH_LINES = 10
MAX_MEDIUM_SAMPLE = 3


def categorize_semantic_matches(
    matches: List[Dict[str, Any]],
) -> Tuple[List[Dict[str, Any]], List[Dict[str, Any]], List[Dict[str, Any]]]:
    """Bucket semantic matches into high (≥70%), medium (40–69%), low (<40%)."""
    high: List[Dict[str, Any]] = []
    medium: List[Dict[str, Any]] = []
    low: List[Dict[str, Any]] = []

    for match in matches:
        score = float(match.get("similarity_score", 0) or 0)
        if score >= HIGH_MATCH_THRESHOLD:
            high.append(match)
        elif score >= MEDIUM_MATCH_THRESHOLD:
            medium.append(match)
        else:
            low.append(match)

    return high, medium, low


def _format_match_line(match: Dict[str, Any]) -> str:
    user_epic = match.get("user_epic_number", "?")
    canonical_epic = match.get("canonical_epic_number", "?")
    score = float(match.get("similarity_score", 0) or 0)
    match_type = match.get("match_type", "unknown")
    return (
        f"     Epic {user_epic} → Canonical Epic {canonical_epic} "
        f"({score:.1f}%, {match_type})"
    )


def format_migration_plan_preview(analysis: Dict[str, Any]) -> str:
    """Format migration plan preview text from an analysis report dict."""
    lines: List[str] = []

    plan = analysis.get("migration_plan") or {}
    semantic_matches = analysis.get("semantic_matches") or []
    conflicts = analysis.get("conflicts") or []

    lines.append("")
    lines.append("📋 Migration Plan Preview")
    lines.append("=" * 60)

    if semantic_matches:
        high_matches, medium_matches, low_matches = categorize_semantic_matches(
            semantic_matches
        )
        lines.append("")
        lines.append("🔍 Semantic Matches Found (all matches processed, no threshold):")
        for match in semantic_matches[:MAX_MATCH_LINES]:
            lines.append(_format_match_line(match))
        if len(semantic_matches) > MAX_MATCH_LINES:
            remaining = len(semantic_matches) - MAX_MATCH_LINES
            lines.append(f"     ... and {remaining} more matches")

        lines.append(
            f"  ℹ️  All {len(semantic_matches)} semantic matches will be processed "
            "(threshold removed per BR-008/FR-010)"
        )
        lines.append(
            f"  📊 Bands: {len(high_matches)} high (≥{HIGH_MATCH_THRESHOLD:.0f}%), "
            f"{len(medium_matches)} medium ({MEDIUM_MATCH_THRESHOLD:.0f}–"
            f"{HIGH_MATCH_THRESHOLD - 0.01:.0f}%), "
            f"{len(low_matches)} low (<{MEDIUM_MATCH_THRESHOLD:.0f}%)"
        )

        if medium_matches:
            lines.append("  Partial matches (sample):")
            for match in medium_matches[:MAX_MEDIUM_SAMPLE]:
                lines.append(_format_match_line(match))

    if conflicts:
        high_conflicts = [c for c in conflicts if c.get("severity") == "high"]
        if high_conflicts:
            lines.append("")
            lines.append(f"⚠️  {len(high_conflicts)} high-severity conflicts detected")
            for conflict in high_conflicts[:3]:
                message = conflict.get("message", conflict.get("type", "conflict"))
                lines.append(f"     • {message}")

    recommended_mode = plan.get("recommended_mode")
    rationale = plan.get("recommendation_rationale", "")

    if recommended_mode:
        lines.append("")
        lines.append(f"💡 Recommended Mode: {recommended_mode}")
        if rationale:
            lines.append(f"   {rationale}")

    lines.append("")
    lines.append("📊 Mode Comparison:")
    lines.append(
        "  canonical_adoption: Optimal organization, intelligent task mapping, preserves work"
    )
    lines.append("  hybrid:              Preserves project epics, installs framework epics")
    lines.append("  migration:           Converts structure, preserves all work items")
    lines.append("  fresh:               Clean slate, no existing structure")

    steps = plan.get("steps") or []
    if steps:
        lines.append("")
        lines.append("📝 Planned migration steps:")
        for step in steps[:5]:
            action = step.get("action", "step")
            description = step.get("description", "")
            required = "required" if step.get("required") else "optional"
            lines.append(f"     {step.get('step', '?')}. {action} ({required}) — {description}")

    lines.append("")
    lines.append("=" * 60)

    return "\n".join(lines)
