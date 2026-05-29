#!/usr/bin/env python3
"""
Framework Health Monitoring Tool

Collects and aggregates health metrics for AI Dev Kit framework packages.
Implements the framework health metrics defined in framework-health-metrics.md.

Usage:
    python3 scripts/frameworks/framework-health-monitor.py [--framework FRAMEWORK] [--output OUTPUT] [--report REPORT] [--json]

Options:
    --framework FRAMEWORK    Monitor specific framework (default: all)
    --output OUTPUT         Output JSON metrics to file
    --report REPORT         Output human-readable report to file
    --json                  Output JSON to stdout
    --path PATH             Custom frameworks directory path (default: packages/frameworks)
"""

import argparse
import json
import sys
from datetime import datetime, timedelta
from pathlib import Path
from typing import Dict, List, Optional

# Add project root to path for imports
project_root = Path(__file__).parent.parent.parent
sys.path.insert(0, str(project_root))

from scripts.frameworks.collectors.usage_adoption import collect_usage_adoption_metrics
from scripts.frameworks.collectors.maintenance_activity import collect_maintenance_activity_metrics
from scripts.frameworks.collectors.documentation_quality import collect_documentation_quality_metrics
from scripts.frameworks.collectors.dependency_health import collect_dependency_health_metrics
from scripts.frameworks.collectors.compatibility_status import collect_compatibility_status_metrics
from scripts.frameworks.collectors.stability_reliability import collect_stability_reliability_metrics
from scripts.frameworks.utils import (
    calculate_dimension_score,
    calculate_overall_health_score,
    get_framework_type,
    get_health_status,
    load_framework_metadata,
)


def collect_framework_health(
    framework_path: Path,
    frameworks_root: Path,
    days_back: int = 90
) -> Dict:
    """
    Collect health metrics for a single framework.
    
    Args:
        framework_path: Path to framework directory
        frameworks_root: Root directory containing all frameworks
        days_back: Number of days to look back for activity metrics
        
    Returns:
        Dictionary containing all health metrics
    """
    framework_name = framework_path.name
    framework_type = get_framework_type(framework_path)
    metadata = load_framework_metadata(framework_path)
    
    # Collect metrics for each dimension
    usage_adoption = collect_usage_adoption_metrics(framework_path, frameworks_root, days_back)
    maintenance_activity = collect_maintenance_activity_metrics(framework_path, days_back)
    documentation_quality = collect_documentation_quality_metrics(framework_path, days_back)
    dependency_health = collect_dependency_health_metrics(framework_path, framework_type)
    compatibility_status = collect_compatibility_status_metrics(framework_path, frameworks_root)
    stability_reliability = collect_stability_reliability_metrics(framework_path, days_back)
    
    # Calculate dimension scores
    usage_score = calculate_dimension_score(usage_adoption, "usage_adoption")
    maintenance_score = calculate_dimension_score(maintenance_activity, "maintenance_activity")
    documentation_score = calculate_dimension_score(documentation_quality, "documentation_quality")
    dependency_score = calculate_dimension_score(dependency_health, "dependency_health")
    compatibility_score = calculate_dimension_score(compatibility_status, "compatibility_status")
    stability_score = calculate_dimension_score(stability_reliability, "stability_reliability")
    
    # Calculate overall health score
    overall_score = calculate_overall_health_score({
        "usage_adoption": usage_score,
        "maintenance_activity": maintenance_score,
        "documentation_quality": documentation_score,
        "dependency_health": dependency_score,
        "compatibility_status": compatibility_score,
        "stability_reliability": stability_score,
    })
    
    # Get health status
    health_status = get_health_status(overall_score)
    
    return {
        "framework": framework_name,
        "framework_type": framework_type,
        "version": metadata.get("version", "unknown"),
        "last_updated": metadata.get("last_updated", "unknown"),
        "timestamp": datetime.utcnow().isoformat(),
        "days_back": days_back,
        "dimensions": {
            "usage_adoption": {
                "metrics": usage_adoption,
                "score": usage_score,
            },
            "maintenance_activity": {
                "metrics": maintenance_activity,
                "score": maintenance_score,
            },
            "documentation_quality": {
                "metrics": documentation_quality,
                "score": documentation_score,
            },
            "dependency_health": {
                "metrics": dependency_health,
                "score": dependency_score,
            },
            "compatibility_status": {
                "metrics": compatibility_status,
                "score": compatibility_score,
            },
            "stability_reliability": {
                "metrics": stability_reliability,
                "score": stability_score,
            },
        },
        "overall": {
            "score": overall_score,
            "status": health_status,
        },
    }


def collect_all_frameworks_health(
    frameworks_root: Path,
    days_back: int = 90
) -> Dict[str, Dict]:
    """
    Collect health metrics for all frameworks.
    
    Args:
        frameworks_root: Root directory containing all frameworks
        days_back: Number of days to look back for activity metrics
        
    Returns:
        Dictionary mapping framework names to health metrics
    """
    results = {}
    
    # Find all framework directories
    for framework_path in frameworks_root.iterdir():
        if not framework_path.is_dir():
            continue
        
        # Skip non-framework directories
        if framework_path.name.startswith(".") or framework_path.name in ["__pycache__"]:
            continue
        
        # Check if it's a framework (has README.md)
        if not (framework_path / "README.md").exists():
            continue
        
        try:
            health = collect_framework_health(framework_path, frameworks_root, days_back)
            results[framework_path.name] = health
        except Exception as e:
            print(f"Error collecting health for {framework_path.name}: {e}", file=sys.stderr)
            continue
    
    return results


def generate_report(health_data: Dict, framework_name: Optional[str] = None) -> str:
    """
    Generate human-readable health report.
    
    Args:
        health_data: Health metrics data (single framework or all frameworks)
        framework_name: Optional framework name for single framework report
        
    Returns:
        Human-readable report string
    """
    lines = []
    
    if framework_name:
        # Single framework report
        framework = health_data
        lines.append(f"Framework Health Report: {framework['framework']}")
        lines.append("=" * 60)
        lines.append(f"Framework Type: {framework['framework_type']}")
        lines.append(f"Version: {framework['version']}")
        lines.append(f"Last Updated: {framework['last_updated']}")
        lines.append(f"Analysis Period: Last {framework['days_back']} days")
        lines.append("")
        
        # Overall health
        overall = framework['overall']
        status_emoji = {
            "Excellent": "🟢",
            "Good": "🟡",
            "Fair": "🟠",
            "Poor": "🔴",
            "Critical": "⚫",
        }.get(overall['status'], "❓")
        
        lines.append(f"Overall Health: {status_emoji} {overall['status']} ({overall['score']:.1f}%)")
        lines.append("")
        
        # Dimension breakdown
        lines.append("Dimension Scores:")
        lines.append("-" * 60)
        for dim_name, dim_data in framework['dimensions'].items():
            dim_display = dim_name.replace("_", " ").title()
            score = dim_data['score']
            lines.append(f"  {dim_display}: {score:.1f}%")
        lines.append("")
        
        # Detailed metrics (abbreviated)
        lines.append("Key Metrics:")
        lines.append("-" * 60)
        for dim_name, dim_data in framework['dimensions'].items():
            dim_display = dim_name.replace("_", " ").title()
            metrics = dim_data['metrics']
            lines.append(f"\n{dim_display}:")
            for metric_name, metric_value in list(metrics.items())[:3]:  # Show first 3 metrics
                metric_display = metric_name.replace("_", " ").title()
                lines.append(f"  - {metric_display}: {metric_value}")
    else:
        # All frameworks report
        lines.append("Framework Health Report: All Frameworks")
        lines.append("=" * 60)
        lines.append(f"Analysis Period: Last {list(health_data.values())[0]['days_back']} days")
        lines.append("")
        
        # Summary table
        lines.append("Framework Health Summary:")
        lines.append("-" * 60)
        lines.append(f"{'Framework':<25} {'Type':<15} {'Score':<8} {'Status':<12}")
        lines.append("-" * 60)
        
        for framework_name, framework in sorted(health_data.items(), key=lambda x: x[1]['overall']['score'], reverse=True):
            overall = framework['overall']
            status_emoji = {
                "Excellent": "🟢",
                "Good": "🟡",
                "Fair": "🟠",
                "Poor": "🔴",
                "Critical": "⚫",
            }.get(overall['status'], "❓")
            
            lines.append(
                f"{framework_name:<25} "
                f"{framework['framework_type']:<15} "
                f"{overall['score']:>6.1f}%  "
                f"{status_emoji} {overall['status']:<10}"
            )
    
    return "\n".join(lines)


def main():
    parser = argparse.ArgumentParser(
        description="Framework Health Monitoring Tool",
        formatter_class=argparse.RawDescriptionHelpFormatter,
        epilog=__doc__
    )
    parser.add_argument(
        "--framework",
        type=str,
        help="Monitor specific framework (default: all)"
    )
    parser.add_argument(
        "--output",
        type=str,
        help="Output JSON metrics to file"
    )
    parser.add_argument(
        "--report",
        type=str,
        help="Output human-readable report to file"
    )
    parser.add_argument(
        "--json",
        action="store_true",
        help="Output JSON to stdout"
    )
    parser.add_argument(
        "--path",
        type=str,
        default="packages/frameworks",
        help="Custom frameworks directory path (default: packages/frameworks)"
    )
    parser.add_argument(
        "--days-back",
        type=int,
        default=90,
        help="Number of days to look back for activity metrics (default: 90)"
    )
    
    args = parser.parse_args()
    
    # Resolve paths
    project_root = Path(__file__).parent.parent.parent
    frameworks_root = project_root / args.path
    
    if not frameworks_root.exists():
        print(f"Error: Frameworks directory not found: {frameworks_root}", file=sys.stderr)
        sys.exit(1)
    
    # Collect health metrics
    if args.framework:
        # Single framework
        framework_path = frameworks_root / args.framework
        if not framework_path.exists():
            print(f"Error: Framework not found: {framework_path}", file=sys.stderr)
            sys.exit(1)
        
        health_data = collect_framework_health(framework_path, frameworks_root, args.days_back)
        health_data_dict = {args.framework: health_data}
    else:
        # All frameworks
        health_data_dict = collect_all_frameworks_health(frameworks_root, args.days_back)
    
    # Output JSON
    json_output = json.dumps(health_data_dict, indent=2)
    
    if args.json:
        print(json_output)
    
    if args.output:
        with open(args.output, "w") as f:
            f.write(json_output)
        print(f"JSON metrics written to: {args.output}", file=sys.stderr)
    
    # Generate and output report
    if args.framework:
        report = generate_report(health_data, args.framework)
    else:
        report = generate_report(health_data_dict)
    
    if args.report:
        with open(args.report, "w") as f:
            f.write(report)
        print(f"Report written to: {args.report}", file=sys.stderr)
    else:
        print(report)
    
    # Exit code based on health
    if args.framework:
        overall_score = health_data['overall']['score']
    else:
        # Average score for all frameworks
        overall_score = sum(f['overall']['score'] for f in health_data_dict.values()) / len(health_data_dict)
    
    # Exit with non-zero if health is poor or critical
    if overall_score < 40:
        sys.exit(2)  # Critical
    elif overall_score < 55:
        sys.exit(1)  # Poor
    else:
        sys.exit(0)  # Fair or better


if __name__ == "__main__":
    main()

