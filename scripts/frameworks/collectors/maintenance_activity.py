"""Collect maintenance activity metrics."""

from datetime import datetime, timedelta
from pathlib import Path
from typing import Dict

from scripts.frameworks.utils import count_changelog_entries, get_git_commits


def collect_maintenance_activity_metrics(
    framework_path: Path,
    days_back: int = 90
) -> Dict:
    """
    Collect maintenance activity metrics for a framework.
    """
    # Get git commits
    commits = get_git_commits(framework_path, days_back)
    update_frequency = len(commits)
    
    # Calculate last update recency
    last_update_days = 999
    if commits:
        try:
            last_commit_date = datetime.fromisoformat(commits[0]["date"].replace(" ", "T").split("+")[0])
            last_update_days = (datetime.now() - last_commit_date).days
        except Exception:
            pass
    
    # Count changelog entries
    changelog_entries = count_changelog_entries(framework_path, days_back)
    
    # Version progression (count version bumps in commits)
    version_bumps = sum(
        1 for commit in commits
        if any(keyword in commit["message"].lower() for keyword in ["version", "bump", "release", "v0.", "v1.", "v2."])
    )
    
    return {
        "update_frequency": update_frequency,
        "last_update_days": last_update_days,
        "changelog_entries": changelog_entries,
        "issue_resolution_rate": 0,  # Requires issue tracking system
        "version_bumps": version_bumps,
    }

