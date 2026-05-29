"""Utility functions for framework health monitoring."""

import re
from datetime import datetime, timedelta
from pathlib import Path
from typing import Dict, Optional

import subprocess
import sys


def get_framework_type(framework_path: Path) -> str:
    """
    Determine framework type based on contents.
    
    Returns:
        "documentation-only", "code-based", or "integration"
    """
    # Check for code files
    has_code = any(
        framework_path.rglob("*.py") or
        framework_path.rglob("*.js") or
        framework_path.rglob("*.ts")
    )
    
    # Check for integration files
    has_integration = (framework_path / "integration").exists()
    
    if has_integration and has_code:
        return "integration"
    elif has_code:
        return "code-based"
    else:
        return "documentation-only"


def load_framework_metadata(framework_path: Path) -> Dict:
    """
    Load framework metadata from README.md.
    
    Returns:
        Dictionary with version, last_updated, etc.
    """
    metadata = {
        "version": "unknown",
        "last_updated": "unknown",
    }
    
    readme_path = framework_path / "README.md"
    if not readme_path.exists():
        return metadata
    
    try:
        content = readme_path.read_text(encoding="utf-8")
        
        # Extract version
        version_match = re.search(r'\*\*Version:\*\*\s*([^\s\n]+)', content)
        if version_match:
            metadata["version"] = version_match.group(1)
        
        # Extract last updated
        last_updated_match = re.search(r'\*\*Last Updated:\*\*\s*([^\n]+)', content)
        if last_updated_match:
            metadata["last_updated"] = last_updated_match.group(1).strip()
    except Exception:
        pass
    
    return metadata


def get_git_commits(framework_path: Path, days_back: int = 90) -> list:
    """
    Get git commits for framework in last N days.
    
    Returns:
        List of commit dictionaries with date, message, etc.
    """
    try:
        # Get commits in last N days
        since_date = (datetime.now() - timedelta(days=days_back)).strftime("%Y-%m-%d")
        
        result = subprocess.run(
            ["git", "log", f"--since={since_date}", "--format=%H|%ai|%s", "--", str(framework_path)],
            cwd=framework_path.parent.parent.parent,  # Project root
            capture_output=True,
            text=True,
            timeout=30,
        )
        
        if result.returncode != 0:
            return []
        
        commits = []
        for line in result.stdout.strip().split("\n"):
            if not line:
                continue
            parts = line.split("|", 2)
            if len(parts) == 3:
                commits.append({
                    "hash": parts[0],
                    "date": parts[1],
                    "message": parts[2],
                })
        
        return commits
    except Exception:
        return []


def count_changelog_entries(framework_path: Path, days_back: int = 90) -> int:
    """
    Count changelog entries in last N days.
    
    Returns:
        Number of changelog entries
    """
    changelog_paths = [
        framework_path / "CHANGELOG.md",
        framework_path / "changelog.md",
        framework_path / "CHANGELOG",
    ]
    
    for changelog_path in changelog_paths:
        if changelog_path.exists():
            try:
                content = changelog_path.read_text(encoding="utf-8")
                
                # Count version entries (## [version] or ## version)
                version_entries = re.findall(r'^##\s+\[?([^\]]+)\]?', content, re.MULTILINE)
                
                # Filter by date if possible (simplified - just count all entries)
                return len(version_entries)
            except Exception:
                pass
    
    return 0


def calculate_dimension_score(metrics: Dict, dimension: str) -> float:
    """
    Calculate health score for a dimension based on metrics.
    
    Args:
        metrics: Dictionary of metric values
        dimension: Dimension name
        
    Returns:
        Score from 0-100
    """
    # Dimension-specific scoring logic
    # This is a simplified version - can be enhanced with more sophisticated scoring
    
    if dimension == "usage_adoption":
        # Simplified: Based on installation count and active usage
        installation_count = metrics.get("installation_count", 0)
        active_usage = metrics.get("active_usage_percentage", 0)
        
        # Score: installation (0-50) + active usage (0-50)
        score = min(50, installation_count * 10) + (active_usage * 0.5)
        return min(100, score)
    
    elif dimension == "maintenance_activity":
        # Based on update frequency and recency
        update_frequency = metrics.get("update_frequency", 0)
        last_update_days = metrics.get("last_update_days", 999)
        changelog_activity = metrics.get("changelog_entries", 0)
        
        # Score: frequency (0-40) + recency (0-40) + changelog (0-20)
        freq_score = min(40, update_frequency * 10)
        recency_score = max(0, 40 - (last_update_days / 90 * 40))
        changelog_score = min(20, changelog_activity * 5)
        
        return min(100, freq_score + recency_score + changelog_score)
    
    elif dimension == "documentation_quality":
        # Based on completeness, currency, link health
        completeness = metrics.get("documentation_completeness_percentage", 0)
        currency = metrics.get("documentation_currency_percentage", 0)
        link_health = metrics.get("link_health_percentage", 0)
        
        # Weighted average
        score = (completeness * 0.35) + (currency * 0.35) + (link_health * 0.30)
        return min(100, score)
    
    elif dimension == "dependency_health":
        # Based on currency, security, compatibility
        currency = metrics.get("dependency_currency_percentage", 100)
        security_issues = metrics.get("security_vulnerabilities", 0)
        compatibility = 100 if metrics.get("compatibility_issues", 0) == 0 else 50
        
        # Score: currency (0-50) + security (0-30) + compatibility (0-20)
        currency_score = currency * 0.5
        security_score = max(0, 30 - (security_issues * 10))
        compat_score = compatibility * 0.2
        
        return min(100, currency_score + security_score + compat_score)
    
    elif dimension == "compatibility_status":
        # Based on compatibility matrix and integration health
        compatibility_verified = metrics.get("compatibility_verified_percentage", 0)
        integration_health = metrics.get("integration_health_percentage", 100)
        
        # Weighted average
        score = (compatibility_verified * 0.6) + (integration_health * 0.4)
        return min(100, score)
    
    elif dimension == "stability_reliability":
        # Based on version stability, regression rate, issue rate
        version_stability = metrics.get("version_stability_percentage", 100)
        regressions = metrics.get("regression_count", 0)
        issues = metrics.get("issue_count", 0)
        
        # Score: stability (0-50) - regressions (0-25) - issues (0-25)
        stability_score = version_stability * 0.5
        regression_penalty = min(25, regressions * 5)
        issue_penalty = min(25, issues * 2)
        
        return max(0, min(100, stability_score - regression_penalty - issue_penalty))
    
    else:
        return 50.0  # Default score


def calculate_overall_health_score(dimension_scores: Dict[str, float]) -> float:
    """
    Calculate overall health score from dimension scores.
    
    Args:
        dimension_scores: Dictionary mapping dimension names to scores
        
    Returns:
        Overall health score (0-100)
    """
    # Weights from framework-health-metrics.md
    weights = {
        "usage_adoption": 0.20,
        "maintenance_activity": 0.25,
        "documentation_quality": 0.20,
        "dependency_health": 0.15,
        "compatibility_status": 0.10,
        "stability_reliability": 0.10,
    }
    
    weighted_sum = sum(
        dimension_scores.get(dim, 0) * weight
        for dim, weight in weights.items()
    )
    
    return round(weighted_sum, 2)


def get_health_status(score: float) -> str:
    """
    Get health status label from score.
    
    Args:
        score: Health score (0-100)
        
    Returns:
        Status label: "Excellent", "Good", "Fair", "Poor", or "Critical"
    """
    if score >= 85:
        return "Excellent"
    elif score >= 70:
        return "Good"
    elif score >= 55:
        return "Fair"
    elif score >= 40:
        return "Poor"
    else:
        return "Critical"

