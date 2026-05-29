"""Collect stability and reliability metrics."""

import re
from pathlib import Path
from typing import Dict

from scripts.frameworks.utils import get_git_commits


def collect_stability_reliability_metrics(
    framework_path: Path,
    days_back: int = 90
) -> Dict:
    """
    Collect stability and reliability metrics for a framework.
    """
    commits = get_git_commits(framework_path, days_back)
    
    # Analyze version stability (PATCH/MINOR vs MAJOR bumps)
    patch_minor_bumps = 0
    major_bumps = 0
    
    for commit in commits:
        message = commit["message"].lower()
        # Look for version bump indicators
        if any(keyword in message for keyword in ["major", "breaking", "v2.", "v3.", "v4."]):
            major_bumps += 1
        elif any(keyword in message for keyword in ["version", "bump", "release", "v0.", "v1."]):
            patch_minor_bumps += 1
    
    total_bumps = patch_minor_bumps + major_bumps
    version_stability = (patch_minor_bumps / total_bumps * 100) if total_bumps > 0 else 100
    
    # Regression and issue counts (simplified - from commit messages)
    regressions = sum(
        1 for commit in commits
        if "regression" in commit["message"].lower() or "regress" in commit["message"].lower()
    )
    
    issues = sum(
        1 for commit in commits
        if any(keyword in commit["message"].lower() for keyword in ["bug", "fix", "issue", "error"])
    )
    
    # Backward compatibility adherence (simplified)
    # Check if commits mention breaking changes without proper versioning
    breaking_without_major = sum(
        1 for commit in commits
        if "breaking" in commit["message"].lower() and "major" not in commit["message"].lower()
    )
    backward_compatibility = 100 if breaking_without_major == 0 else max(0, 100 - (breaking_without_major * 20))
    
    return {
        "version_stability_percentage": round(version_stability, 2),
        "regression_count": regressions,
        "issue_count": issues,
        "test_coverage_percentage": 0,  # Placeholder - requires test coverage tools
        "backward_compatibility_adherence": backward_compatibility,
    }

