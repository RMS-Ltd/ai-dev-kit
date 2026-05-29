"""Collect documentation quality metrics."""

import re
from datetime import datetime, timedelta
from pathlib import Path
from typing import Dict


def collect_documentation_quality_metrics(
    framework_path: Path,
    days_back: int = 90
) -> Dict:
    """
    Collect documentation quality metrics for a framework.
    """
    # Required documentation files
    required_docs = [
        "README.md",
        "CHANGELOG.md",
    ]
    
    # Optional but recommended
    recommended_docs = [
        "PACKAGE_OVERVIEW.md",
        "IMPLEMENTATION_GUIDE.md",
    ]
    
    # Check for required docs
    present_required = sum(1 for doc in required_docs if (framework_path / doc).exists())
    completeness_required = (present_required / len(required_docs)) * 100 if required_docs else 100
    
    # Check for recommended docs
    present_recommended = sum(1 for doc in recommended_docs if (framework_path / doc).exists())
    completeness_recommended = (present_recommended / len(recommended_docs)) * 100 if recommended_docs else 100
    
    # Overall completeness (weighted: required 70%, recommended 30%)
    completeness = (completeness_required * 0.7) + (completeness_recommended * 0.3)
    
    # Check documentation currency (updated in last N days)
    cutoff_date = datetime.now() - timedelta(days=days_back)
    updated_docs = 0
    total_docs = 0
    
    for doc_file in required_docs + recommended_docs:
        doc_path = framework_path / doc_file
        if doc_path.exists():
            total_docs += 1
            try:
                # Check git modification date
                import subprocess
                result = subprocess.run(
                    ["git", "log", "-1", "--format=%ai", "--", str(doc_path)],
                    cwd=framework_path.parent.parent.parent,
                    capture_output=True,
                    text=True,
                    timeout=10,
                )
                if result.returncode == 0 and result.stdout.strip():
                    mod_date_str = result.stdout.strip()
                    try:
                        mod_date = datetime.fromisoformat(mod_date_str.replace(" ", "T").split("+")[0])
                        if mod_date >= cutoff_date:
                            updated_docs += 1
                    except Exception:
                        pass
            except Exception:
                pass
    
    currency = (updated_docs / total_docs * 100) if total_docs > 0 else 0
    
    # Link health (simplified - count markdown links)
    link_count = 0
    valid_links = 0
    
    for doc_file in required_docs:
        doc_path = framework_path / doc_file
        if doc_path.exists():
            try:
                content = doc_path.read_text(encoding="utf-8")
                # Count markdown links
                links = re.findall(r'\[([^\]]+)\]\(([^\)]+)\)', content)
                link_count += len(links)
                # Simple validation: check if link starts with http or is relative
                for _, url in links:
                    if url.startswith("http") or url.startswith("/") or url.startswith("./"):
                        valid_links += 1
            except Exception:
                pass
    
    link_health = (valid_links / link_count * 100) if link_count > 0 else 100
    
    # Examples quality (count example files)
    examples_dir = framework_path / "examples"
    example_count = len(list(examples_dir.glob("*.md"))) if examples_dir.exists() else 0
    
    return {
        "documentation_completeness_percentage": round(completeness, 2),
        "documentation_currency_percentage": round(currency, 2),
        "link_health_percentage": round(link_health, 2),
        "examples_count": example_count,
        "documentation_review_status": 0,  # Requires review workflow
    }

