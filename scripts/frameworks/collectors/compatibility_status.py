"""Collect compatibility status metrics."""

from pathlib import Path
from typing import Dict


def collect_compatibility_status_metrics(
    framework_path: Path,
    frameworks_root: Path
) -> Dict:
    """
    Collect compatibility status metrics for a framework.
    """
    # Check for integration directory (indicates compatibility awareness)
    integration_dir = framework_path / "integration"
    has_integration = integration_dir.exists()
    
    # Count integration files
    integration_files = []
    if has_integration:
        integration_files = list(integration_dir.glob("*.md"))
    
    # Check for compatibility declarations in README
    compatibility_declared = False
    readme_path = framework_path / "README.md"
    if readme_path.exists():
        try:
            content = readme_path.read_text(encoding="utf-8")
            compatibility_declared = any(
                keyword in content.lower()
                for keyword in ["compatibility", "compatible", "integration", "dependency"]
            )
        except Exception:
            pass
    
    # Simplified: If has integration files, assume compatibility is verified
    compatibility_verified = 100 if has_integration else 0
    
    # Integration health (simplified)
    integration_health = 100 if has_integration and len(integration_files) > 0 else 50
    
    return {
        "compatibility_verified_percentage": compatibility_verified,
        "version_compatibility_coverage": 100,  # Placeholder - requires version matrix analysis
        "integration_health_percentage": integration_health,
        "breaking_changes_count": 0,  # Placeholder - requires changelog analysis
    }

