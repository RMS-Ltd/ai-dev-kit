#!/usr/bin/env python3
"""
Documentation Health Dashboard

Aggregates metrics from documentation validators and review workflows to generate
a comprehensive documentation health dashboard.

Usage:
    python3 documentation-health-dashboard.py [--path <path>] [--output <output>]
    python3 documentation-health-dashboard.py --path docs/ --output dashboard.json
"""

import os
import sys
import json
import argparse
import subprocess
from pathlib import Path
from datetime import datetime, timedelta
from typing import Dict, List, Optional
from collections import defaultdict

# Import validators (assuming they're in the same directory)
SCRIPT_DIR = Path(__file__).parent
VALIDATE_LINKS_SCRIPT = SCRIPT_DIR / 'validate-documentation-links.py'
VALIDATE_CONSISTENCY_SCRIPT = SCRIPT_DIR / 'validate-documentation-consistency.py'
REVIEW_WORKFLOW_SCRIPT = SCRIPT_DIR / 'documentation-review-workflow.py'


def run_validator(script_path: Path, args: List[str], repo_root: Path) -> Optional[Dict]:
    """Run a validator script and return JSON output."""
    if not script_path.exists():
        return None
    
    try:
        cmd = [sys.executable, str(script_path)] + args
        result = subprocess.run(
            cmd,
            cwd=str(repo_root),
            capture_output=True,
            text=True,
            timeout=300  # 5 minute timeout
        )
        
        if result.returncode == 0 or result.stdout:
            # Try to parse JSON from stdout
            try:
                return json.loads(result.stdout)
            except json.JSONDecodeError:
                # If not JSON, return None
                return None
    except Exception as e:
        print(f"Warning: Failed to run {script_path.name}: {e}", file=sys.stderr)
        return None
    
    return None


def collect_link_metrics(repo_root: Path, doc_path: Path) -> Dict:
    """Collect link validation metrics."""
    temp_output = repo_root / '.tmp_link_validation.json'
    args = [
        '--path', str(doc_path.relative_to(repo_root)),
        '--output', str(temp_output.relative_to(repo_root))
    ]
    
    result = run_validator(VALIDATE_LINKS_SCRIPT, args, repo_root)
    
    # Clean up temp file
    if temp_output.exists():
        temp_output.unlink()
    
    if not result:
        return {
            'total_files': 0,
            'total_links': 0,
            'valid_links': 0,
            'broken_links': 0,
            'broken_internal': 0,
            'broken_external': 0,
            'link_health_percentage': 0.0,
        }
    
    summary = result.get('summary', {})
    total_links = summary.get('total_links', 0)
    valid_links = summary.get('valid_links', 0)
    
    link_health = (valid_links / total_links * 100) if total_links > 0 else 100.0
    
    return {
        'total_files': summary.get('total_files', 0),
        'total_links': total_links,
        'valid_links': valid_links,
        'broken_links': summary.get('broken_links', 0),
        'broken_internal': summary.get('broken_internal', 0),
        'broken_external': summary.get('broken_external', 0),
        'link_health_percentage': round(link_health, 2),
        'files_with_broken_links': len([f for f in result.get('files', []) if f.get('broken_links', 0) > 0]),
    }


def collect_consistency_metrics(repo_root: Path, doc_path: Path) -> Dict:
    """Collect consistency validation metrics."""
    temp_output = repo_root / '.tmp_consistency_validation.json'
    args = [
        '--path', str(doc_path.relative_to(repo_root)),
        '--check', 'all',
        '--output', str(temp_output.relative_to(repo_root))
    ]
    
    result = run_validator(VALIDATE_CONSISTENCY_SCRIPT, args, repo_root)
    
    # Clean up temp file
    if temp_output.exists():
        temp_output.unlink()
    
    if not result:
        return {
            'total_files': 0,
            'total_inconsistencies': 0,
            'version_inconsistencies': 0,
            'cross_reference_inconsistencies': 0,
            'terminology_inconsistencies': 0,
            'consistency_score': 100.0,
        }
    
    summary = result.get('summary', {})
    total_files = summary.get('total_files', 0)
    total_inconsistencies = summary.get('total_inconsistencies', 0)
    
    # Count inconsistencies by type
    version_inconsistencies = 0
    cross_ref_inconsistencies = 0
    terminology_inconsistencies = 0
    
    for check in result.get('checks', []):
        check_type = check.get('check', '')
        inconsistencies = check.get('inconsistencies', [])
        
        if check_type == 'version_consistency':
            version_inconsistencies = len(inconsistencies)
        elif check_type == 'cross_reference_consistency':
            cross_ref_inconsistencies = len(inconsistencies)
        elif check_type == 'terminology_consistency':
            terminology_inconsistencies = len(inconsistencies)
    
    # Calculate consistency score (100% - percentage of files with inconsistencies)
    consistency_score = 100.0
    if total_files > 0:
        files_with_issues = len([f for f in result.get('files', {}).keys()])
        consistency_score = max(0.0, 100.0 - (files_with_issues / total_files * 100))
    
    return {
        'total_files': total_files,
        'total_inconsistencies': total_inconsistencies,
        'version_inconsistencies': version_inconsistencies,
        'cross_reference_inconsistencies': cross_ref_inconsistencies,
        'terminology_inconsistencies': terminology_inconsistencies,
        'consistency_score': round(consistency_score, 2),
    }


def collect_review_metrics(repo_root: Path, doc_path: Path) -> Dict:
    """Collect review workflow metrics."""
    temp_output = repo_root / '.tmp_review_workflow.json'
    
    metrics = {
        'total_files': 0,
        'files_needing_review': 0,
        'files_current': 0,
        'review_coverage_percentage': 0.0,
        'average_days_since_review': 0.0,
        'critical_docs_needing_review': 0,
        'high_priority_docs_needing_review': 0,
        'standard_docs_needing_review': 0,
        'low_priority_docs_needing_review': 0,
    }
    
    # Check all cadences
    for cadence in ['weekly', 'monthly', 'quarterly', 'annual']:
        args = [
            '--path', str(doc_path.relative_to(repo_root)),
            '--cadence', cadence,
            '--track',
            '--output', str(temp_output.relative_to(repo_root))
        ]
        
        result = run_validator(REVIEW_WORKFLOW_SCRIPT, args, repo_root)
        
        if result:
            files_needing = result.get('files_needing_review', [])
            files_current = result.get('files_current', [])
            
            metrics['total_files'] = len(files_needing) + len(files_current)
            metrics['files_needing_review'] += len(files_needing)
            metrics['files_current'] += len(files_current)
            
            # Count by priority
            for file_status in files_needing:
                doc_type = file_status.get('type', 'standard')
                if doc_type == 'critical':
                    metrics['critical_docs_needing_review'] += 1
                elif doc_type == 'high_priority':
                    metrics['high_priority_docs_needing_review'] += 1
                elif doc_type == 'standard':
                    metrics['standard_docs_needing_review'] += 1
                elif doc_type == 'low_priority':
                    metrics['low_priority_docs_needing_review'] += 1
    
    # Clean up temp file
    if temp_output.exists():
        temp_output.unlink()
    
    # Calculate review coverage
    total = metrics['total_files']
    if total > 0:
        metrics['review_coverage_percentage'] = round(
            (metrics['files_current'] / total * 100), 2
        )
    
    return metrics


def calculate_documentation_health(metrics: Dict) -> Dict:
    """Calculate overall documentation health score."""
    link_health = metrics.get('link_metrics', {}).get('link_health_percentage', 100.0)
    consistency_score = metrics.get('consistency_metrics', {}).get('consistency_score', 100.0)
    review_coverage = metrics.get('review_metrics', {}).get('review_coverage_percentage', 100.0)
    
    # Weighted health score
    # Links: 40%, Consistency: 40%, Review Coverage: 20%
    health_score = (
        link_health * 0.4 +
        consistency_score * 0.4 +
        review_coverage * 0.2
    )
    
    # Determine health status
    if health_score >= 90:
        status = 'excellent'
    elif health_score >= 75:
        status = 'good'
    elif health_score >= 60:
        status = 'fair'
    elif health_score >= 40:
        status = 'poor'
    else:
        status = 'critical'
    
    return {
        'overall_health_score': round(health_score, 2),
        'health_status': status,
        'link_health': link_health,
        'consistency_score': consistency_score,
        'review_coverage': review_coverage,
    }


def generate_dashboard_report(metrics: Dict, health: Dict) -> str:
    """Generate a human-readable dashboard report."""
    report = []
    report.append("=" * 80)
    report.append("DOCUMENTATION HEALTH DASHBOARD")
    report.append("=" * 80)
    report.append(f"Generated: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}")
    report.append("")
    
    # Overall Health
    report.append("OVERALL HEALTH")
    report.append("-" * 80)
    status_emoji = {
        'excellent': '🟢',
        'good': '🟡',
        'fair': '🟠',
        'poor': '🔴',
        'critical': '⚫',
    }
    emoji = status_emoji.get(health['health_status'], '⚪')
    report.append(f"Health Score: {health['overall_health_score']}% {emoji} ({health['health_status'].upper()})")
    report.append("")
    
    # Link Metrics
    link_metrics = metrics.get('link_metrics', {})
    report.append("LINK HEALTH")
    report.append("-" * 80)
    report.append(f"Total Files Scanned: {link_metrics.get('total_files', 0)}")
    report.append(f"Total Links: {link_metrics.get('total_links', 0)}")
    report.append(f"Valid Links: {link_metrics.get('valid_links', 0)}")
    report.append(f"Broken Links: {link_metrics.get('broken_links', 0)}")
    report.append(f"  - Internal: {link_metrics.get('broken_internal', 0)}")
    report.append(f"  - External: {link_metrics.get('broken_external', 0)}")
    report.append(f"Link Health: {link_metrics.get('link_health_percentage', 0)}%")
    report.append(f"Files with Broken Links: {link_metrics.get('files_with_broken_links', 0)}")
    report.append("")
    
    # Consistency Metrics
    consistency_metrics = metrics.get('consistency_metrics', {})
    report.append("CONSISTENCY HEALTH")
    report.append("-" * 80)
    report.append(f"Total Files Scanned: {consistency_metrics.get('total_files', 0)}")
    report.append(f"Total Inconsistencies: {consistency_metrics.get('total_inconsistencies', 0)}")
    report.append(f"  - Version Mismatches: {consistency_metrics.get('version_inconsistencies', 0)}")
    report.append(f"  - Cross-Reference Issues: {consistency_metrics.get('cross_reference_inconsistencies', 0)}")
    report.append(f"  - Terminology Issues: {consistency_metrics.get('terminology_inconsistencies', 0)}")
    report.append(f"Consistency Score: {consistency_metrics.get('consistency_score', 0)}%")
    report.append("")
    
    # Review Metrics
    review_metrics = metrics.get('review_metrics', {})
    report.append("REVIEW COVERAGE")
    report.append("-" * 80)
    report.append(f"Total Files: {review_metrics.get('total_files', 0)}")
    report.append(f"Files Current: {review_metrics.get('files_current', 0)}")
    report.append(f"Files Needing Review: {review_metrics.get('files_needing_review', 0)}")
    report.append(f"Review Coverage: {review_metrics.get('review_coverage_percentage', 0)}%")
    report.append("")
    report.append("Files Needing Review by Priority:")
    report.append(f"  - Critical: {review_metrics.get('critical_docs_needing_review', 0)}")
    report.append(f"  - High Priority: {review_metrics.get('high_priority_docs_needing_review', 0)}")
    report.append(f"  - Standard: {review_metrics.get('standard_docs_needing_review', 0)}")
    report.append(f"  - Low Priority: {review_metrics.get('low_priority_docs_needing_review', 0)}")
    report.append("")
    
    # Recommendations
    report.append("RECOMMENDATIONS")
    report.append("-" * 80)
    recommendations = []
    
    if link_metrics.get('broken_links', 0) > 0:
        recommendations.append(f"Fix {link_metrics.get('broken_links', 0)} broken links")
    
    if consistency_metrics.get('total_inconsistencies', 0) > 0:
        recommendations.append(f"Resolve {consistency_metrics.get('total_inconsistencies', 0)} consistency issues")
    
    if review_metrics.get('files_needing_review', 0) > 0:
        recommendations.append(f"Review {review_metrics.get('files_needing_review', 0)} files that need review")
    
    if health['overall_health_score'] < 75:
        recommendations.append("Overall health score is below 75% - prioritize documentation improvements")
    
    if not recommendations:
        recommendations.append("Documentation health is excellent! Keep up the good work.")
    
    for i, rec in enumerate(recommendations, 1):
        report.append(f"{i}. {rec}")
    
    report.append("")
    report.append("=" * 80)
    
    return "\n".join(report)


def main():
    """Main entry point."""
    parser = argparse.ArgumentParser(description='Documentation health dashboard')
    parser.add_argument(
        '--path',
        type=str,
        default='docs/',
        help='Path to documentation directory (default: docs/)'
    )
    parser.add_argument(
        '--output',
        type=str,
        help='Output JSON file path'
    )
    parser.add_argument(
        '--report',
        type=str,
        help='Output human-readable report file path'
    )
    parser.add_argument(
        '--repo-root',
        type=str,
        default='.',
        help='Repository root directory (default: current directory)'
    )
    parser.add_argument(
        '--quiet',
        action='store_true',
        help='Suppress console output'
    )
    
    args = parser.parse_args()
    
    repo_root = Path(args.repo_root).resolve()
    doc_path = Path(args.path)
    
    if not doc_path.is_absolute():
        doc_path = repo_root / doc_path
    
    if not doc_path.exists():
        print(f"Error: Path does not exist: {doc_path}", file=sys.stderr)
        sys.exit(1)
    
    # Collect metrics
    if not args.quiet:
        print("Collecting link metrics...", file=sys.stderr)
    link_metrics = collect_link_metrics(repo_root, doc_path)
    
    if not args.quiet:
        print("Collecting consistency metrics...", file=sys.stderr)
    consistency_metrics = collect_consistency_metrics(repo_root, doc_path)
    
    if not args.quiet:
        print("Collecting review metrics...", file=sys.stderr)
    review_metrics = collect_review_metrics(repo_root, doc_path)
    
    # Combine metrics
    all_metrics = {
        'timestamp': datetime.now().isoformat(),
        'path': str(doc_path.relative_to(repo_root)),
        'link_metrics': link_metrics,
        'consistency_metrics': consistency_metrics,
        'review_metrics': review_metrics,
    }
    
    # Calculate health
    health = calculate_documentation_health(all_metrics)
    all_metrics['health'] = health
    
    # Generate report
    report_text = generate_dashboard_report(all_metrics, health)
    
    # Output JSON
    if args.output:
        with open(args.output, 'w') as f:
            json.dump(all_metrics, f, indent=2)
        if not args.quiet:
            print(f"Metrics written to {args.output}", file=sys.stderr)
    else:
        if not args.quiet:
            print(json.dumps(all_metrics, indent=2))
    
    # Output report
    if args.report:
        with open(args.report, 'w') as f:
            f.write(report_text)
        if not args.quiet:
            print(f"Report written to {args.report}", file=sys.stderr)
    else:
        if not args.quiet:
            print("\n" + report_text)
    
    # Exit with error code if health is poor
    if health['overall_health_score'] < 60:
        sys.exit(1)


if __name__ == '__main__':
    main()

