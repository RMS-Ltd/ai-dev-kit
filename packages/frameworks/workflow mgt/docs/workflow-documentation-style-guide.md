# Workflow Documentation Style Guide

## Overview

This style guide ensures consistent, professional documentation across all AI Dev Kit workflow management framework workflows. It defines standards for formatting, structure, content, and automated validation.

## 📋 Document Structure Standards

### Required Sections (in order)
1. **Title** - `# [Workflow Name]`
2. **Overview** - Brief description and purpose
3. **🎯 Purpose** - Clear statement of what workflow accomplishes
4. **🚨 Prerequisites** - Framework and setup requirements
5. **⚡ Quick Start** - Basic usage and expected outcome
6. **⚙️ Configuration** - YAML and environment variables
7. **📋 Usage Examples** - Comprehensive examples (minimum 3)
8. **🔧 Advanced Usage** - Custom configuration and integrations
9. **🐛 Troubleshooting** - Common issues and solutions
10. **❓ FAQ** - Frequently asked questions (minimum 3)
11. **🔗 Integration** - Workflow dependencies and data flow
12. **📚 Reference** - Complete CLI and configuration reference
13. **🎯 Best Practices** - Do's and don'ts
14. **🔄 Version Compatibility** - Compatibility matrix
15. **📞 Support** - Getting help and contributing
16. **📊 Workflow Metadata** - Technical metadata

### Section Formatting Rules
- **Headings**: Use emoji icons for visual hierarchy (see approved icons)
- **Code Blocks**: Always specify language and surround with blank lines
- **Tables**: Align columns properly and surround with blank lines
- **Lists**: Use consistent indentation and surround with blank lines

## 🎨 Formatting Standards

### Markdown Formatting

#### Headings
```markdown
# H1 - Main Title (workflow name)
## H2 - Main Sections
### H3 - Subsections
#### H4 - Detailed subsections
```

#### Code Blocks
```markdown
# Always specify language
```bash
# Bash commands
```

```yaml
# YAML configuration
```

```python
# Python examples
```
```

#### Tables
```markdown
| Column 1 | Column 2 | Column 3 |
|----------|----------|----------|
| Content  | Content  | Content  |
| More     | Data     | Here     |
```

#### Lists
```markdown
- Bullet point 1
- Bullet point 2

1. Numbered item 1
2. Numbered item 2
```

### Emoji Icons (Approved Set)
- 🎯 Purpose
- 🚨 Prerequisites/Warnings
- ⚡ Quick Start/Speed
- ⚙️ Configuration
- 📋 Examples/Lists
- 🔧 Advanced/Tools
- 🐛 Troubleshooting/Bugs
- ❓ FAQ/Questions
- 🔗 Integration/Links
- 📚 Reference/Documentation
- 🔄 Version/Updates
- 📞 Support/Help
- 📊 Metadata/Analytics

### Content Standards

#### Writing Style
- **Tone**: Professional, helpful, and concise
- **Voice**: Second person ("you", "your")
- **Tense**: Present tense for descriptions, past tense for examples
- **Clarity**: Use simple, direct language
- **Consistency**: Use same terminology throughout

#### Code Examples
- **Syntax**: All examples must be syntactically correct
- **Context**: Provide context for each example
- **Comments**: Add explanatory comments where needed
- **Testing**: All examples must be functional

#### Links and References
- **Internal Links**: Use relative paths for internal references
- **External Links**: Use descriptive link text
- **Validation**: All links must be functional
- **Consistency**: Use consistent link formatting

## 🔧 Automated Validation

### Markdownlint Configuration
Create `.markdownlint.json` in workflow documentation root:

```json
{
  "default": true,
  "MD013": false,
  "MD033": {
    "allowed_elements": ["div", "span"]
  },
  "MD040": {
    "allowed_languages": ["bash", "yaml", "python", "json", "markdown", "text"]
  }
}
```

### Structural Validation Script
Create `scripts/validate-workflow-docs.py`:

```python
#!/usr/bin/env python3
"""
Validate workflow documentation structure and compliance.
"""

import os
import re
import yaml
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
            if line.startswith('##'):
                # Remove emoji and clean section name
                section = re.sub(r'^##\s*[🎯🚨⚡⚙️📋🔧🐛❓🔗📚🔄📞📊]\s*', '', line)
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
        exit(1)
    else:
        print("✅ All documentation validated!")
        exit(0)

if __name__ == "__main__":
    main()
```

### Pre-commit Hook Configuration
Create `.pre-commit-config.yaml`:

```yaml
repos:
  - repo: https://github.com/igorshubovych/markdownlint-cli
    rev: v0.37.0
    hooks:
      - id: markdownlint
        files: packages/frameworks/workflow\ mgt/workflows/.*\.md
        args: [--config, packages/frameworks/workflow\ mgt/.markdownlint.json]
  
  - repo: local
    hooks:
      - id: validate-workflow-docs
        name: Validate workflow documentation
        entry: python packages/frameworks/workflow\ mgt/scripts/validate-workflow-docs.py
        language: system
        files: packages/frameworks/workflow\ mgt/workflows/.*README\.md
```

## 📏 Content Guidelines

### Overview Section
- **Length**: 2-3 sentences maximum
- **Content**: Clear, concise description of workflow purpose
- **Focus**: What the workflow does and when to use it

### Purpose Section
- **Format**: Single clear statement
- **Content**: Specific outcomes and use cases
- **Examples**: Include specific scenarios when helpful

### Prerequisites Section
- **Framework Requirements**: List all framework dependencies
- **Setup Requirements**: Step-by-step setup instructions
- **System Requirements**: Hardware, software, and permission requirements

### Quick Start Section
- **Basic Usage**: Simple command that works out-of-the-box
- **Expected Outcome**: What users should see
- **Success Indicators**: How to know it worked

### Configuration Section
- **YAML Examples**: Complete, copy-pasteable configurations
- **Environment Variables**: All supported environment variables
- **Options Table**: Clear table of all configuration options

### Usage Examples Section
- **Minimum 3 Examples**: Basic, advanced, and integration scenarios
- **Realistic Scenarios**: Practical, useful examples
- **Expected Output**: Show what users should expect

### Troubleshooting Section
- **Common Issues**: Most frequent problems users encounter
- **Clear Solutions**: Step-by-step resolution instructions
- **Debug Mode**: How to enable debugging

### FAQ Section
- **Minimum 3 Questions**: Most common user questions
- **Comprehensive Answers**: Detailed, helpful responses
- **Cross-References**: Link to relevant sections when helpful

## 🔄 Maintenance Procedures

### Documentation Updates
1. **Workflow Changes**: Update documentation when workflow changes
2. **Version Updates**: Update compatibility matrix with new versions
3. **User Feedback**: Incorporate user questions into FAQ
4. **Regular Review**: Quarterly review of all documentation

### Quality Assurance
1. **Automated Validation**: Run validation script on all changes
2. **Link Checking**: Monthly validation of all links
3. **Example Testing**: Quarterly testing of all examples
4. **Peer Review**: Review documentation changes before merging

### Version Control
1. **Branch Strategy**: Use feature branches for documentation updates
2. **Commit Messages**: Clear, descriptive commit messages
3. **Pull Requests**: Require documentation review
4. **Release Notes**: Include documentation changes in release notes

## 📊 Quality Metrics

### Validation Metrics
- **Template Compliance**: 100% of READMEs follow template
- **Link Integrity**: 100% of links functional
- **Example Accuracy**: 100% of examples tested
- **Section Completeness**: 100% of required sections present

### User Experience Metrics
- **Readability Score**: Target reading level 8th grade
- **Completion Rate**: Users successfully complete examples
- **Support Reduction**: Decrease in support tickets
- **User Satisfaction**: Positive feedback on documentation

---

**This style guide ensures consistent, high-quality documentation across all AI Dev Kit workflows, improving user experience and maintainability.**
