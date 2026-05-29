#!/usr/bin/env python3
"""
Framework Health Dashboard Generator

Generates a markdown dashboard from framework health metrics.

Usage:
    python3 scripts/frameworks/generate-dashboard.py [--input INPUT] [--output OUTPUT] [--template TEMPLATE]

Options:
    --input INPUT         Input JSON file from framework-health-monitor.py (default: read from stdin)
    --output OUTPUT       Output dashboard markdown file (default: docs/framework-health/dashboard.md)
    --template TEMPLATE   Custom dashboard template (optional)
"""

import argparse
import json
import sys
from datetime import datetime
from pathlib import Path
from typing import Dict, List, Optional


def generate_dashboard_markdown(health_data: Dict[str, Dict], output_path: Path) -> str:
    """
    Generate markdown dashboard from health metrics.
    
    Args:
        health_data: Dictionary mapping framework names to health metrics
        output_path: Path to output dashboard file
        
    Returns:
        Markdown dashboard content
    """
    lines = []
    
    # Header
    lines.append("---")
    lines.append("lifecycle: evergreen")
    lines.append("ttl_days: null")
    lines.append(f"created_at: {datetime.utcnow().isoformat()}Z")
    lines.append("expires_at: null")
    lines.append("housekeeping_policy: keep")
    lines.append("---")
    lines.append("")
    lines.append("# Framework Health Dashboard")
    lines.append("")
    lines.append(f"**Last Updated:** {datetime.utcnow().strftime('%Y-%m-%d %H:%M:%S UTC')}")
    lines.append(f"**Analysis Period:** Last {list(health_data.values())[0]['days_back']} days")
    lines.append("")
    lines.append("---")
    lines.append("")
    
    # Executive Summary
    lines.append("## Executive Summary")
    lines.append("")
    
    # Calculate summary statistics
    total_frameworks = len(health_data)
    excellent = sum(1 for f in health_data.values() if f['overall']['status'] == 'Excellent')
    good = sum(1 for f in health_data.values() if f['overall']['status'] == 'Good')
    fair = sum(1 for f in health_data.values() if f['overall']['status'] == 'Fair')
    poor = sum(1 for f in health_data.values() if f['overall']['status'] == 'Poor')
    critical = sum(1 for f in health_data.values() if f['overall']['status'] == 'Critical')
    
    avg_score = sum(f['overall']['score'] for f in health_data.values()) / total_frameworks if total_frameworks > 0 else 0
    
    lines.append(f"**Total Frameworks:** {total_frameworks}")
    lines.append(f"**Average Health Score:** {avg_score:.1f}%")
    lines.append("")
    lines.append("**Health Status Distribution:**")
    lines.append(f"- 🟢 Excellent: {excellent}")
    lines.append(f"- 🟡 Good: {good}")
    lines.append(f"- 🟠 Fair: {fair}")
    lines.append(f"- 🔴 Poor: {poor}")
    lines.append(f"- ⚫ Critical: {critical}")
    lines.append("")
    lines.append("---")
    lines.append("")
    
    # Framework Health Table
    lines.append("## Framework Health Overview")
    lines.append("")
    lines.append("| Framework | Type | Health Score | Status | Usage & Adoption | Maintenance | Documentation | Dependencies | Compatibility | Stability |")
    lines.append("|-----------|------|--------------|--------|------------------|-------------|----------------|--------------|---------------|-----------|")
    
    # Sort frameworks by health score (descending)
    sorted_frameworks = sorted(
        health_data.items(),
        key=lambda x: x[1]['overall']['score'],
        reverse=True
    )
    
    status_emoji = {
        "Excellent": "🟢",
        "Good": "🟡",
        "Fair": "🟠",
        "Poor": "🔴",
        "Critical": "⚫",
    }
    
    for framework_name, framework in sorted_frameworks:
        overall = framework['overall']
        dims = framework['dimensions']
        
        emoji = status_emoji.get(overall['status'], "⚪")
        
        lines.append(
            f"| **{framework_name}** | {framework['framework_type']} | "
            f"{overall['score']:.1f}% | {emoji} {overall['status']} | "
            f"{dims['usage_adoption']['score']:.0f}% | "
            f"{dims['maintenance_activity']['score']:.0f}% | "
            f"{dims['documentation_quality']['score']:.0f}% | "
            f"{dims['dependency_health']['score']:.0f}% | "
            f"{dims['compatibility_status']['score']:.0f}% | "
            f"{dims['stability_reliability']['score']:.0f}% |"
        )
    
    lines.append("")
    lines.append("---")
    lines.append("")
    
    # Detailed Framework Reports
    lines.append("## Detailed Framework Reports")
    lines.append("")
    
    for framework_name, framework in sorted_frameworks:
        overall = framework['overall']
        dims = framework['dimensions']
        
        lines.append(f"### {framework_name}")
        lines.append("")
        lines.append(f"**Framework Type:** {framework['framework_type']}  ")
        lines.append(f"**Version:** {framework['version']}  ")
        lines.append(f"**Last Updated:** {framework['last_updated']}  ")
        lines.append("")
        
        emoji = status_emoji.get(overall['status'], "⚪")
        lines.append(f"**Overall Health:** {emoji} **{overall['status']}** ({overall['score']:.1f}%)")
        lines.append("")
        
        # Dimension breakdown
        lines.append("**Dimension Scores:**")
        lines.append("")
        lines.append("| Dimension | Score | Status |")
        lines.append("|-----------|-------|--------|")
        
        for dim_name, dim_data in dims.items():
            dim_display = dim_name.replace("_", " ").title()
            score = dim_data['score']
            
            # Determine status
            if score >= 85:
                dim_status = "🟢 Excellent"
            elif score >= 70:
                dim_status = "🟡 Good"
            elif score >= 55:
                dim_status = "🟠 Fair"
            elif score >= 40:
                dim_status = "🔴 Poor"
            else:
                dim_status = "⚫ Critical"
            
            lines.append(f"| {dim_display} | {score:.1f}% | {dim_status} |")
        
        lines.append("")
        
        # Key metrics (top 3 per dimension)
        lines.append("**Key Metrics:**")
        lines.append("")
        for dim_name, dim_data in dims.items():
            dim_display = dim_name.replace("_", " ").title()
            metrics = dim_data['metrics']
            
            # Show top 3 metrics
            shown = 0
            for metric_name, metric_value in metrics.items():
                if shown >= 3:
                    break
                metric_display = metric_name.replace("_", " ").title()
                lines.append(f"- **{dim_display} - {metric_display}:** {metric_value}")
                shown += 1
        
        lines.append("")
        lines.append("---")
        lines.append("")
    
    # Recommendations
    lines.append("## Recommendations")
    lines.append("")
    
    # Identify frameworks needing attention
    needs_attention = [
        (name, f) for name, f in health_data.items()
        if f['overall']['score'] < 70
    ]
    
    if needs_attention:
        lines.append("### Frameworks Needing Attention")
        lines.append("")
        for name, framework in sorted(needs_attention, key=lambda x: x[1]['overall']['score']):
            score = framework['overall']['score']
            status = framework['overall']['status']
            
            # Identify lowest dimension
            dims = framework['dimensions']
            lowest_dim = min(dims.items(), key=lambda x: x[1]['score'])
            lowest_dim_name = lowest_dim[0].replace("_", " ").title()
            lowest_dim_score = lowest_dim[1]['score']
            
            lines.append(f"- **{name}** ({status}, {score:.1f}%): Focus on improving **{lowest_dim_name}** (currently {lowest_dim_score:.1f}%)")
    else:
        lines.append("All frameworks are in good health! 🎉")
    
    lines.append("")
    lines.append("---")
    lines.append("")
    
    # Footer
    lines.append("## Dashboard Information")
    lines.append("")
    lines.append("**Generated By:** Framework Health Monitoring Tool")
    lines.append(f"**Generated At:** {datetime.utcnow().strftime('%Y-%m-%d %H:%M:%S UTC')}")
    lines.append("")
    lines.append("**How to Update:**")
    lines.append("```bash")
    lines.append("# Generate latest health metrics")
    lines.append("python3 scripts/frameworks/framework-health-monitor.py --output health.json")
    lines.append("")
    lines.append("# Generate dashboard from metrics")
    lines.append("python3 scripts/frameworks/generate-dashboard.py --input health.json --output docs/framework-health/dashboard.md")
    lines.append("```")
    lines.append("")
    lines.append("**Related Documentation:**")
    lines.append("- [Framework Health Metrics](../../architecture/standards-and-adrs/framework-health-metrics.md)")
    lines.append("- [Framework Health Monitoring Procedures](../../architecture/standards-and-adrs/framework-health-monitoring-procedures.md)")
    lines.append("")
    
    return "\n".join(lines)


def main():
    parser = argparse.ArgumentParser(
        description="Framework Health Dashboard Generator",
        formatter_class=argparse.RawDescriptionHelpFormatter,
        epilog=__doc__
    )
    parser.add_argument(
        "--input",
        type=str,
        help="Input JSON file from framework-health-monitor.py (default: read from stdin)"
    )
    parser.add_argument(
        "--output",
        type=str,
        default="docs/framework-health/dashboard.md",
        help="Output dashboard markdown file (default: docs/framework-health/dashboard.md)"
    )
    
    args = parser.parse_args()
    
    # Resolve paths
    project_root = Path(__file__).parent.parent.parent
    output_path = project_root / args.output
    
    # Ensure output directory exists
    output_path.parent.mkdir(parents=True, exist_ok=True)
    
    # Read input
    if args.input:
        input_path = project_root / args.input
        if not input_path.exists():
            print(f"Error: Input file not found: {input_path}", file=sys.stderr)
            sys.exit(1)
        with open(input_path, "r") as f:
            health_data = json.load(f)
    else:
        # Read from stdin
        health_data = json.load(sys.stdin)
    
    # Generate dashboard
    dashboard_content = generate_dashboard_markdown(health_data, output_path)
    
    # Write dashboard
    with open(output_path, "w", encoding="utf-8") as f:
        f.write(dashboard_content)
    
    print(f"Dashboard generated: {output_path}", file=sys.stderr)
    print(f"Frameworks analyzed: {len(health_data)}", file=sys.stderr)


if __name__ == "__main__":
    main()

