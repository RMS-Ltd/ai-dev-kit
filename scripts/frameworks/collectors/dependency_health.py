"""Collect dependency health metrics."""

import json
from pathlib import Path
from typing import Dict


def collect_dependency_health_metrics(
    framework_path: Path,
    framework_type: str
) -> Dict:
    """
    Collect dependency health metrics for a framework.
    
    Note: For documentation-only frameworks, many metrics are N/A.
    """
    if framework_type == "documentation-only":
        return {
            "dependency_count": 0,
            "dependency_currency_percentage": 100,  # N/A
            "security_vulnerabilities": 0,
            "compatibility_issues": 0,
            "dependency_maintenance_percentage": 100,  # N/A
        }
    
    # Check for package.json (npm) or requirements.txt (pip)
    dependency_count = 0
    dependencies = []
    
    package_json = framework_path / "package.json"
    if package_json.exists():
        try:
            data = json.loads(package_json.read_text(encoding="utf-8"))
            deps = data.get("dependencies", {})
            dev_deps = data.get("devDependencies", {})
            dependencies.extend(list(deps.keys()) + list(dev_deps.keys()))
        except Exception:
            pass
    
    requirements_txt = framework_path / "requirements.txt"
    if requirements_txt.exists():
        try:
            content = requirements_txt.read_text(encoding="utf-8")
            for line in content.split("\n"):
                line = line.strip()
                if line and not line.startswith("#"):
                    # Parse package name (before == or @)
                    pkg_name = line.split("==")[0].split("@")[0].split(">=")[0].split("<=")[0].strip()
                    if pkg_name:
                        dependencies.append(pkg_name)
        except Exception:
            pass
    
    dependency_count = len(dependencies)
    
    # TODO: Check dependency currency, security, compatibility
    # These require external tools or APIs
    
    return {
        "dependency_count": dependency_count,
        "dependency_currency_percentage": 100,  # Placeholder - requires dependency scanning
        "security_vulnerabilities": 0,  # Placeholder - requires security scanning
        "compatibility_issues": 0,  # Placeholder - requires compatibility checking
        "dependency_maintenance_percentage": 100,  # Placeholder - requires maintenance status checking
    }

