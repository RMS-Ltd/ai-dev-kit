#!/usr/bin/env python3
"""
Validate workflow documentation structure and compliance.
"""

import os
import re
import sys
from pathlib import Path
from typing import List, Dict, Any

class WorkflowDocValidator:
    def __init__(self, workflow_dir: Path):
        self.workflow_dir = workflow_dir
        self.required_sections = [
            "overview",
            "purpose", 
            "prerequisites",
            "quick start",
            "configuration",
            "usage examples",
            "advanced usage",
            "troubleshooting",
            "faq",
            "integration",
            "reference",
            "best practices",
            "version compatibility",
            "support",
            "workflow metadata"
        ]
    
    def validate_readme(self, readme_path: Path) -> Dict[str, Any]:
        """Validate README.md structure and content."""
        results = {
            "file": readme_path.name,
            "errors": [],
            "warnings": [],
            "missing_sections": [],
            "invalid_links": []
        }
        
        if not readme_path.exists():
            results["errors"].append("README.md not found")
            return results
        
        with open(readme_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Check required sections
        sections = self.extract_sections(content)
        for section in self.required_sections:
            if section not in sections:
                results["missing_sections"].append(section)
        
        # Validate links
        invalid_links = self.validate_links(content, readme_path.parent)
        results["invalid_links"] = invalid_links
        
        # Check code blocks
        code_blocks = self.extract_code_blocks(content)
        for block in code_blocks:
            if not block.get("language"):
                results["warnings"].append(f"Code block without language: {block['content'][:50]}...")
        
        return results
    
    def extract_sections(self, content: str) -> List[str]:
        """Extract section headings from content."""
        sections = []
        for line in content.split('\n'):
            if re.match(r'^##\s', line):
                # Strip ## prefix first
                section = re.sub(r'^##\s+', '', line)
                # Strip optional emoji (with optional U+FE0F variation selector)
                section = re.sub(r'^[🎯🚨⚡⚙📋🔧🐛❓🔗📚🔄📞📊]️?\s*', '', section)
                section = section.lower().strip()
                sections.append(section)
        return sections
    
    def validate_links(self, content: str, base_path: Path) -> List[str]:
        """Validate internal and external links."""
        invalid_links = []
        
        # Extract markdown links
        link_pattern = r'\[([^\]]+)\]\(([^)]+)\)'
        for match in re.finditer(link_pattern, content):
            text, url = match.groups()
            
            if url.startswith('http'):
                # Skip external links for now (could add HTTP validation)
                continue
            elif url.startswith('#'):
                # Skip anchor links for now
                continue
            else:
                # Validate internal links
                link_path = base_path / url
                if not link_path.exists():
                    invalid_links.append(f"Broken link: [{text}]({url})")
        
        return invalid_links
    
    def extract_code_blocks(self, content: str) -> List[Dict[str, str]]:
        """Extract code blocks with language info."""
        blocks = []
        pattern = r'```(\w+)?\n(.*?)```'
        for match in re.finditer(pattern, content, re.DOTALL):
            language = match.group(1) or "text"
            content_block = match.group(2).strip()
            blocks.append({
                "language": language,
                "content": content_block
            })
        return blocks

def main():
    """Main validation function."""
    workflow_dir = Path("packages/frameworks/workflow mgt/workflows")
    validator = WorkflowDocValidator(workflow_dir)
    
    all_results = []
    for workflow_path in workflow_dir.iterdir():
        if workflow_path.is_dir():
            readme_path = workflow_path / "README.md"
            results = validator.validate_readme(readme_path)
            all_results.append(results)
    
    # Print results
    print("Workflow Documentation Validation Results")
    print("=" * 50)
    
    total_errors = 0
    total_warnings = 0
    
    for result in all_results:
        print(f"\n📁 {result['file']}")
        
        if result["errors"]:
            print("  ❌ Errors:")
            for error in result["errors"]:
                print(f"    - {error}")
            total_errors += len(result["errors"])
        
        if result["missing_sections"]:
            print("  ⚠️  Missing Sections:")
            for section in result["missing_sections"]:
                print(f"    - {section}")
            total_warnings += len(result["missing_sections"])
        
        if result["invalid_links"]:
            print("  🔗 Invalid Links:")
            for link in result["invalid_links"]:
                print(f"    - {link}")
            total_errors += len(result["invalid_links"])
        
        if result["warnings"]:
            print("  ⚠️  Warnings:")
            for warning in result["warnings"]:
                print(f"    - {warning}")
            total_warnings += len(result["warnings"])
        
        if not result["errors"] and not result["missing_sections"] and not result["invalid_links"]:
            print("  ✅ Valid")
    
    print(f"\n📊 Summary:")
    print(f"  Errors: {total_errors}")
    print(f"  Warnings: {total_warnings}")
    
    if total_errors > 0:
        print("❌ Validation failed!")
        sys.exit(1)
    else:
        print("✅ All documentation validated!")
        sys.exit(0)

if __name__ == "__main__":
    main()
