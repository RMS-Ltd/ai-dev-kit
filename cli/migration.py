"""
Migration utilities for converting copy-paste frameworks to dependencies.

Detects copied frameworks and converts them to dependency-based installations.
"""

import re
from pathlib import Path
from typing import Dict, List, Optional, Tuple
from dataclasses import dataclass

from cli.utils import print_info, print_warning, print_error, get_project_root
from cli.config import Config


@dataclass
class DetectedFramework:
    """Represents a detected copy-paste framework."""
    name: str
    path: Path
    detected_version: Optional[str]
    framework_type: str  # 'workflow-mgmt', 'kanban', 'numbering-versioning', etc.
    confidence: float  # 0.0 to 1.0


# Known framework patterns
FRAMEWORK_PATTERNS = {
    "workflow-mgmt": {
        "name_variants": ["workflow-mgmt", "workflow-mgt", "workflow mgt", "workflow management"],
        "signature_files": ["scripts/validation/validate_branch_context.py", "workflows/release-workflow.yaml"],
        "version_file": "config/rw-config.yaml",
    },
    "kanban": {
        "name_variants": ["kanban"],
        "signature_files": ["templates/EPIC_TEMPLATE.md", "templates/STORY_TEMPLATE.md"],
        "version_file": None,
    },
    "numbering-versioning": {
        "name_variants": ["numbering-versioning", "numbering & versioning", "versioning"],
        "signature_files": ["versioning-policy.md"],
        "version_file": None,
    },
    "doc-lifecycle": {
        "name_variants": ["doc-lifecycle", "document-lifecycle"],
        "signature_files": ["lifecycle-policy.md"],
        "version_file": None,
    },
}


def detect_frameworks(project_root: Optional[Path] = None, search_paths: Optional[List[Path]] = None) -> List[DetectedFramework]:
    """
    Detect copy-paste frameworks in the project.
    
    Args:
        project_root: Project root directory (defaults to detected root)
        search_paths: Optional list of paths to search (defaults to common locations)
    
    Returns:
        List of detected frameworks
    """
    if project_root is None:
        project_root = get_project_root()
        if project_root is None:
            project_root = Path.cwd()
    
    if search_paths is None:
        # Common locations for copied frameworks
        search_paths = [
            project_root / "frameworks",
            project_root / "packages" / "frameworks",
            project_root / "lib" / "frameworks",
            project_root,  # Root level
        ]
    
    detected = []
    
    for search_path in search_paths:
        if not search_path.exists():
            continue
        
        # Search for framework directories
        for framework_type, pattern in FRAMEWORK_PATTERNS.items():
            for name_variant in pattern["name_variants"]:
                # Try exact match
                potential_paths = [
                    search_path / name_variant,
                    search_path / name_variant.replace("-", "_"),
                    search_path / name_variant.replace(" ", "\\ "),
                ]
                
                # Also search for directories containing framework name
                if search_path.is_dir():
                    for item in search_path.iterdir():
                        if item.is_dir() and name_variant.lower() in item.name.lower():
                            potential_paths.append(item)
                
                for path in potential_paths:
                    if not path.exists() or not path.is_dir():
                        continue
                    
                    # Check for signature files
                    confidence = 0.0
                    signature_matches = 0
                    total_signatures = len(pattern["signature_files"])
                    
                    for sig_file in pattern["signature_files"]:
                        if (path / sig_file).exists():
                            signature_matches += 1
                    
                    if signature_matches > 0:
                        confidence = signature_matches / total_signatures
                        
                        # Try to detect version
                        version = None
                        if pattern["version_file"]:
                            version_path = path / pattern["version_file"]
                            if version_path.exists():
                                version = _extract_version_from_config(version_path)
                        
                        # Avoid duplicates
                        if not any(d.path == path for d in detected):
                            detected.append(DetectedFramework(
                                name=name_variant,
                                path=path,
                                detected_version=version,
                                framework_type=framework_type,
                                confidence=confidence
                            ))
    
    return detected


def _extract_version_from_config(config_path: Path) -> Optional[str]:
    """Extract version from config file (e.g., rw-config.yaml)."""
    try:
        import yaml
        with open(config_path, 'r', encoding='utf-8') as f:
            config = yaml.safe_load(f)
            # Try common version fields
            for key in ['version', 'framework_version', 'rw_version']:
                if key in config:
                    return str(config[key])
    except Exception:
        pass
    return None


def convert_framework_to_dependency(
    framework: DetectedFramework,
    backend: str = "git-submodule",
    project_root: Optional[Path] = None,
    dry_run: bool = False
) -> Tuple[bool, str]:
    """
    Convert a copy-paste framework to a dependency.
    
    Args:
        framework: Detected framework to convert
        backend: Backend to use for dependency installation
        project_root: Project root directory
        dry_run: If True, only preview changes without applying
    
    Returns:
        Tuple of (success, message)
    """
    if project_root is None:
        project_root = get_project_root()
        if project_root is None:
            project_root = Path.cwd()
    
    if dry_run:
        return True, f"Would convert {framework.name} at {framework.path} to {backend} dependency"
    
    try:
        # Step 1: Backup framework (optional, but recommended)
        backup_path = project_root / ".ai-dev-kit-migration-backup" / framework.name
        backup_path.parent.mkdir(parents=True, exist_ok=True)
        
        import shutil
        if framework.path.exists():
            if backup_path.exists():
                shutil.rmtree(backup_path)
            shutil.copytree(framework.path, backup_path)
            print_info(f"Backed up {framework.name} to {backup_path}")
        
        # Step 2: Remove copy-paste framework
        if framework.path.exists():
            shutil.rmtree(framework.path)
            print_info(f"Removed copy-paste framework: {framework.path}")
        
        # Step 3: Install as dependency (this would use the backend)
        # For now, we'll just update the config to indicate migration intent
        config = Config(project_root / ".ai-dev-kit.yaml")
        
        # Determine installation path (use same location if possible)
        install_path = framework.path
        
        # Add to config (actual installation would be done via install command)
        config.add_framework(
            name=framework.framework_type,
            version=framework.detected_version or "latest",
            backend=backend,
            path=str(install_path),
            migrated_from=str(framework.path),
            migration_backup=str(backup_path)
        )
        config.save()
        
        return True, f"Converted {framework.name} to {backend} dependency. Run 'ai-dev-kit install {framework.framework_type}' to complete installation."
    
    except Exception as e:
        return False, f"Failed to convert {framework.name}: {str(e)}"


def validate_migration(project_root: Optional[Path] = None) -> Tuple[bool, List[str]]:
    """
    Validate that migration was successful.
    
    Args:
        project_root: Project root directory
    
    Returns:
        Tuple of (is_valid, list_of_issues)
    """
    if project_root is None:
        project_root = get_project_root()
        if project_root is None:
            project_root = Path.cwd()
    
    issues = []
    
    # Check that .ai-dev-kit.yaml exists
    config_path = project_root / ".ai-dev-kit.yaml"
    if not config_path.exists():
        issues.append("Configuration file .ai-dev-kit.yaml not found")
        return False, issues
    
    # Check that frameworks are configured
    config = Config(config_path)
    frameworks = config.get_frameworks()
    
    if not frameworks:
        issues.append("No frameworks configured in .ai-dev-kit.yaml")
        return False, issues
    
    # Check that migrated frameworks have proper backend
    for name, info in frameworks.items():
        if "migrated_from" in info:
            # This is a migrated framework
            if "backend" not in info:
                issues.append(f"Migrated framework '{name}' missing backend configuration")
            if "path" not in info:
                issues.append(f"Migrated framework '{name}' missing path configuration")
    
    return len(issues) == 0, issues

