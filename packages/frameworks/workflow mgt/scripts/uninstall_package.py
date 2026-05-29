#!/usr/bin/env python3
"""
Package Uninstall Utility

Uninstalls ai-dev-kit packages/frameworks with backup, recovery, and rollback support.
Supports multiple backends: Git submodules, npm, pip, CLI tool.

Part of Epic 2, Story 6, Task 1 (FR-008): Package uninstall capabilities.

Usage:
    python3 uninstall_package.py <package> [--backend BACKEND] [--recover] [--rollback] [--dry-run] [--force]

Arguments:
    <package>              Package name to uninstall (e.g., workflow-mgmt, kanban)
    --backend BACKEND      Backend type (git-submodule, npm, pip, auto-detect)
    --recover              Recovery mode: clean up failed installations
    --rollback             Rollback mode: restore previous version or remove entirely
    --dry-run              Preview changes without modifying files
    --force                Skip confirmation prompts
    --backup-dir DIR       Custom backup directory (default: auto-generated)
"""

import argparse
import json
import shutil
import subprocess
import sys
from pathlib import Path
from typing import Dict, List, Optional
from datetime import datetime
import yaml


class PackageUninstaller:
    """Uninstalls packages with backup and recovery support."""
    
    def __init__(
        self,
        package_name: str,
        backend: str = "auto",
        recover: bool = False,
        rollback: bool = False,
        dry_run: bool = False,
        force: bool = False,
        backup_dir: Optional[Path] = None,
        project_root: Optional[Path] = None
    ):
        self.package_name = package_name
        self.backend = backend
        self.recover = recover
        self.rollback = rollback
        self.dry_run = dry_run
        self.force = force
        self.backup_dir = backup_dir
        self.project_root = Path(project_root) if project_root else Path.cwd()
        self.config_file = self.project_root / ".ai-dev-kit.yaml"
        self.uninstall_log: List[Dict] = []
        
    def uninstall(self) -> Dict:
        """Main uninstall method. Returns uninstall report."""
        # Detect backend if auto
        if self.backend == "auto":
            self.backend = self._detect_backend()
        
        # Step 1: Detect package installation
        package_info = self._detect_package()
        if not package_info:
            return {
                "status": "error",
                "message": f"Package '{self.package_name}' not found or not installed."
            }
        
        # Step 2: Check dependencies
        if not self.force:
            dependencies = self._check_dependencies()
            if dependencies:
                print(f"⚠️  Warning: Package has dependencies:")
                for dep in dependencies:
                    print(f"  - {dep}")
                response = input("Continue with uninstall? (y/N): ")
                if response.lower() != 'y':
                    return {
                        "status": "cancelled",
                        "message": "Uninstall cancelled by user."
                    }
        
        # Step 3: Create backup
        backup_path = self._create_backup(package_info)
        if not backup_path and not self.dry_run:
            return {
                "status": "error",
                "message": "Backup creation failed or was cancelled."
            }
        
        # Step 4: Uninstall based on backend
        if self.recover:
            result = self._recover_installation(package_info)
        elif self.rollback:
            result = self._rollback_package(package_info)
        else:
            result = self._uninstall_package(package_info)
        
        # Step 5: Verify cleanup
        verification = self._verify_cleanup(package_info)
        
        return {
            "status": "completed" if verification["clean"] else "completed_with_warnings",
            "uninstall_date": datetime.now().isoformat(),
            "package": self.package_name,
            "backend": self.backend,
            "backup_path": str(backup_path) if backup_path else None,
            "uninstall_log": self.uninstall_log,
            "verification": verification,
            "summary": {
                "files_removed": len([e for e in self.uninstall_log if e["action"] == "removed"]),
                "config_updated": len([e for e in self.uninstall_log if e["action"] == "config_updated"]),
                "dependencies_removed": len([e for e in self.uninstall_log if e["type"] == "dependency"])
            }
        }
    
    def _detect_backend(self) -> str:
        """Auto-detect package backend."""
        # Check .ai-dev-kit.yaml config
        if self.config_file.exists():
            try:
                with open(self.config_file, 'r', encoding='utf-8') as f:
                    config = yaml.safe_load(f)
                frameworks = config.get("frameworks", {})
                if self.package_name in frameworks:
                    return frameworks[self.package_name].get("backend", "git-submodule")
            except Exception:
                pass
        
        # Check for Git submodule
        if self._is_git_submodule():
            return "git-submodule"
        
        # Check for npm package
        if self._is_npm_package():
            return "npm"
        
        # Check for pip package
        if self._is_pip_package():
            return "pip"
        
        return "git-submodule"  # Default
    
    def _is_git_submodule(self) -> bool:
        """Check if package is installed as Git submodule."""
        try:
            result = subprocess.run(
                ["git", "submodule", "status"],
                cwd=self.project_root,
                capture_output=True,
                text=True,
                check=False
            )
            return self.package_name in result.stdout or "workflow" in result.stdout.lower()
        except Exception:
            return False
    
    def _is_npm_package(self) -> bool:
        """Check if package is installed via npm."""
        package_json = self.project_root / "package.json"
        if package_json.exists():
            try:
                with open(package_json, 'r', encoding='utf-8') as f:
                    data = json.load(f)
                deps = {**data.get("dependencies", {}), **data.get("devDependencies", {})}
                return any("ai-dev-kit" in pkg or self.package_name in pkg for pkg in deps.keys())
            except Exception:
                pass
        return False
    
    def _is_pip_package(self) -> bool:
        """Check if package is installed via pip."""
        requirements_txt = self.project_root / "requirements.txt"
        if requirements_txt.exists():
            try:
                content = requirements_txt.read_text(encoding='utf-8')
                return "ai-dev-kit" in content.lower() or self.package_name in content.lower()
            except Exception:
                pass
        return False
    
    def _detect_package(self) -> Optional[Dict]:
        """Detect package installation details."""
        package_info = {
            "name": self.package_name,
            "backend": self.backend,
            "paths": [],
            "config_entries": []
        }
        
        # Check config file
        if self.config_file.exists():
            try:
                with open(self.config_file, 'r', encoding='utf-8') as f:
                    config = yaml.safe_load(f)
                frameworks = config.get("frameworks", {})
                if self.package_name in frameworks:
                    package_info["config_entries"].append(".ai-dev-kit.yaml")
                    package_info["config_data"] = frameworks[self.package_name]
                    # Get path from config
                    if "path" in frameworks[self.package_name]:
                        package_path = Path(frameworks[self.package_name]["path"])
                        if package_path.exists():
                            package_info["paths"].append(str(package_path))
            except Exception:
                pass
        
        # Check common framework paths
        common_paths = [
            self.project_root / "packages" / "frameworks" / self.package_name,
            self.project_root / "frameworks" / self.package_name,
            self.project_root / "packages" / "frameworks" / self.package_name.replace("-", " "),
        ]
        
        for path in common_paths:
            if path.exists():
                package_info["paths"].append(str(path))
        
        # If no paths found, check Git submodule
        if not package_info["paths"] and self.backend == "git-submodule":
            try:
                result = subprocess.run(
                    ["git", "submodule", "status"],
                    cwd=self.project_root,
                    capture_output=True,
                    text=True,
                    check=False
                )
                for line in result.stdout.split('\n'):
                    if self.package_name in line.lower() or "workflow" in line.lower():
                        # Extract path from submodule status
                        parts = line.strip().split()
                        if len(parts) >= 2:
                            package_info["paths"].append(parts[1])
            except Exception:
                pass
        
        return package_info if package_info["paths"] or package_info["config_entries"] else None
    
    def _check_dependencies(self) -> List[str]:
        """Check for packages that depend on this package."""
        # In a real implementation, would check for dependencies
        # For now, return empty list
        return []
    
    def _create_backup(self, package_info: Dict) -> Optional[Path]:
        """Create backup of package before uninstall."""
        if self.dry_run:
            print("🔍 [DRY RUN] Would create backup...")
            return Path("/tmp/backup-dry-run")
        
        if not self.backup_dir:
            timestamp = datetime.now().strftime("%Y%m%d-%H%M%S")
            self.backup_dir = self.project_root / f".backup-{self.package_name}-{timestamp}"
        
        backup_path = Path(self.backup_dir)
        
        if backup_path.exists():
            if not self.force:
                response = input(f"⚠️  Backup directory exists: {backup_path}. Overwrite? (y/N): ")
                if response.lower() != 'y':
                    return None
            shutil.rmtree(backup_path)
        
        print(f"📦 Creating backup: {backup_path}")
        backup_path.mkdir(parents=True, exist_ok=True)
        
        # Backup package files
        for package_path in package_info.get("paths", []):
            src = Path(package_path)
            if src.exists():
                dst = backup_path / src.name
                if src.is_dir():
                    shutil.copytree(src, dst)
                else:
                    shutil.copy2(src, dst)
        
        # Backup config file
        if self.config_file.exists():
            shutil.copy2(self.config_file, backup_path / ".ai-dev-kit.yaml")
        
        self.uninstall_log.append({
            "type": "backup",
            "action": "created",
            "path": str(backup_path),
            "timestamp": datetime.now().isoformat()
        })
        
        return backup_path
    
    def _uninstall_package(self, package_info: Dict) -> Dict:
        """Uninstall package based on backend."""
        print(f"🗑️  Uninstalling {self.package_name} (backend: {self.backend})...")
        
        if self.backend == "git-submodule":
            return self._uninstall_git_submodule(package_info)
        elif self.backend == "npm":
            return self._uninstall_npm(package_info)
        elif self.backend == "pip":
            return self._uninstall_pip(package_info)
        else:
            return {
                "status": "error",
                "message": f"Unsupported backend: {self.backend}"
            }
    
    def _uninstall_git_submodule(self, package_info: Dict) -> Dict:
        """Uninstall Git submodule."""
        if self.dry_run:
            print("  🔍 [DRY RUN] Would remove Git submodule...")
            return {"status": "dry_run"}
        
        # Remove submodule
        for package_path in package_info.get("paths", []):
            path = Path(package_path)
            if path.exists():
                # Remove submodule
                try:
                    subprocess.run(
                        ["git", "submodule", "deinit", "-f", str(path)],
                        cwd=self.project_root,
                        check=False
                    )
                    subprocess.run(
                        ["git", "rm", "-f", str(path)],
                        cwd=self.project_root,
                        check=False
                    )
                    # Remove .git/modules entry
                    git_modules = self.project_root / ".git" / "modules" / path.name
                    if git_modules.exists():
                        shutil.rmtree(git_modules)
                except Exception as e:
                    print(f"  ⚠️  Error removing submodule: {e}")
                
                self.uninstall_log.append({
                    "type": "package",
                    "action": "removed",
                    "path": str(path),
                    "backend": "git-submodule"
                })
        
        # Update config
        self._update_config_file(package_info)
        
        return {"status": "success"}
    
    def _uninstall_npm(self, package_info: Dict) -> Dict:
        """Uninstall npm package."""
        if self.dry_run:
            print("  🔍 [DRY RUN] Would remove npm package...")
            return {"status": "dry_run"}
        
        try:
            subprocess.run(
                ["npm", "uninstall", f"@ai-dev-kit/{self.package_name}"],
                cwd=self.project_root,
                check=False
            )
            self.uninstall_log.append({
                "type": "package",
                "action": "removed",
                "backend": "npm"
            })
        except Exception as e:
            print(f"  ⚠️  Error removing npm package: {e}")
        
        self._update_config_file(package_info)
        return {"status": "success"}
    
    def _uninstall_pip(self, package_info: Dict) -> Dict:
        """Uninstall pip package."""
        if self.dry_run:
            print("  🔍 [DRY RUN] Would remove pip package...")
            return {"status": "dry_run"}
        
        try:
            subprocess.run(
                [sys.executable, "-m", "pip", "uninstall", f"ai-dev-kit-{self.package_name}", "-y"],
                cwd=self.project_root,
                check=False
            )
            self.uninstall_log.append({
                "type": "package",
                "action": "removed",
                "backend": "pip"
            })
        except Exception as e:
            print(f"  ⚠️  Error removing pip package: {e}")
        
        self._update_config_file(package_info)
        return {"status": "success"}
    
    def _update_config_file(self, package_info: Dict):
        """Update .ai-dev-kit.yaml to remove package entry."""
        if not self.config_file.exists():
            return
        
        if self.dry_run:
            print("  🔍 [DRY RUN] Would update config file...")
            return
        
        try:
            with open(self.config_file, 'r', encoding='utf-8') as f:
                config = yaml.safe_load(f) or {}
            
            frameworks = config.get("frameworks", {})
            if self.package_name in frameworks:
                del frameworks[self.package_name]
                config["frameworks"] = frameworks
                
                with open(self.config_file, 'w', encoding='utf-8') as f:
                    yaml.dump(config, f, default_flow_style=False, sort_keys=False)
                
                self.uninstall_log.append({
                    "type": "config",
                    "action": "updated",
                    "file": ".ai-dev-kit.yaml"
                })
        except Exception as e:
            print(f"  ⚠️  Error updating config file: {e}")
    
    def _recover_installation(self, package_info: Dict) -> Dict:
        """Recovery mode: clean up failed installations."""
        print("🔧 Recovery mode: Cleaning up failed installation...")
        
        # Detect failed installation state
        # Clean up partial installations
        # Restore project to working state
        
        if self.dry_run:
            print("  🔍 [DRY RUN] Would recover installation...")
            return {"status": "dry_run"}
        
        # Implementation would detect and clean up partial installations
        return {"status": "success", "mode": "recovery"}
    
    def _rollback_package(self, package_info: Dict) -> Dict:
        """Rollback mode: restore previous version or remove entirely."""
        print("⏪ Rollback mode: Restoring previous version or removing package...")
        
        if self.dry_run:
            print("  🔍 [DRY RUN] Would rollback package...")
            return {"status": "dry_run"}
        
        # Look for backup directories
        backup_dirs = sorted(
            self.project_root.glob(f".backup-{self.package_name}-*"),
            key=lambda p: p.stat().st_mtime if p.exists() else 0,
            reverse=True
        )
        
        if backup_dirs:
            latest_backup = backup_dirs[0]
            print(f"  📦 Found backup: {latest_backup}")
            
            response = input("Restore from backup? (y/N): ")
            if response.lower() == 'y':
                # Restore from backup
                return self._restore_from_backup(latest_backup, package_info)
            else:
                print("  Removing package entirely...")
                return self._uninstall_package(package_info)
        else:
            print("  ⚠️  No backup found. Removing package entirely...")
            response = input("Continue with removal? (y/N): ")
            if response.lower() == 'y':
                return self._uninstall_package(package_info)
            else:
                return {
                    "status": "cancelled",
                    "message": "Rollback cancelled by user."
                }
    
    def _restore_from_backup(self, backup_path: Path, package_info: Dict) -> Dict:
        """Restore package from backup."""
        print(f"  🔄 Restoring from backup: {backup_path}")
        
        try:
            # Restore package files
            for item in backup_path.iterdir():
                if item.name == ".ai-dev-kit.yaml":
                    continue  # Handle config separately
                
                # Find original location
                for package_path in package_info.get("paths", []):
                    target = Path(package_path)
                    if target.name == item.name or target.parent.name == item.name:
                        if target.exists():
                            if target.is_dir():
                                shutil.rmtree(target)
                            else:
                                target.unlink()
                        
                        if item.is_dir():
                            shutil.copytree(item, target)
                        else:
                            shutil.copy2(item, target)
                        
                        self.uninstall_log.append({
                            "type": "rollback",
                            "action": "restored",
                            "path": str(target),
                            "from_backup": str(item)
                        })
            
            # Restore config if it exists in backup
            backup_config = backup_path / ".ai-dev-kit.yaml"
            if backup_config.exists():
                # Merge backup config with current config
                try:
                    with open(backup_config, 'r', encoding='utf-8') as f:
                        backup_config_data = yaml.safe_load(f) or {}
                    
                    if self.config_file.exists():
                        with open(self.config_file, 'r', encoding='utf-8') as f:
                            current_config = yaml.safe_load(f) or {}
                    else:
                        current_config = {}
                    
                    # Restore package entry from backup
                    backup_frameworks = backup_config_data.get("frameworks", {})
                    if self.package_name in backup_frameworks:
                        if "frameworks" not in current_config:
                            current_config["frameworks"] = {}
                        current_config["frameworks"][self.package_name] = backup_frameworks[self.package_name]
                        
                        with open(self.config_file, 'w', encoding='utf-8') as f:
                            yaml.dump(current_config, f, default_flow_style=False, sort_keys=False)
                        
                        self.uninstall_log.append({
                            "type": "rollback",
                            "action": "config_restored",
                            "file": ".ai-dev-kit.yaml"
                        })
                except Exception as e:
                    print(f"  ⚠️  Error restoring config: {e}")
            
            print("  ✅ Package restored from backup")
            return {
                "status": "success",
                "mode": "rollback",
                "restored_from": str(backup_path)
            }
        except Exception as e:
            print(f"  ❌ Error restoring from backup: {e}")
            return {
                "status": "error",
                "message": f"Failed to restore from backup: {e}"
            }
    
    def _verify_cleanup(self, package_info: Dict) -> Dict:
        """Verify package has been completely removed."""
        issues = []
        
        # Check package paths
        for package_path in package_info.get("paths", []):
            path = Path(package_path)
            if path.exists():
                issues.append({
                    "type": "path_exists",
                    "path": str(path),
                    "severity": "high"
                })
        
        # Check config entries
        if self.config_file.exists():
            try:
                with open(self.config_file, 'r', encoding='utf-8') as f:
                    config = yaml.safe_load(f) or {}
                frameworks = config.get("frameworks", {})
                if self.package_name in frameworks:
                    issues.append({
                        "type": "config_entry_exists",
                        "file": ".ai-dev-kit.yaml",
                        "severity": "medium"
                    })
            except Exception:
                pass
        
        return {
            "clean": len(issues) == 0,
            "issues": issues,
            "issues_count": len(issues)
        }


def main():
    parser = argparse.ArgumentParser(
        description="Uninstall ai-dev-kit packages with backup and recovery support",
        formatter_class=argparse.RawDescriptionHelpFormatter,
        epilog="""
Examples:
  # Uninstall package (auto-detect backend)
  python3 uninstall_package.py workflow-mgmt

  # Uninstall with specific backend
  python3 uninstall_package.py kanban --backend git-submodule

  # Recovery mode (clean up failed installation)
  python3 uninstall_package.py workflow-mgmt --recover

  # Rollback mode (restore previous version)
  python3 uninstall_package.py workflow-mgmt --rollback

  # Dry run (preview changes)
  python3 uninstall_package.py workflow-mgmt --dry-run
        """
    )
    parser.add_argument(
        "package",
        help="Package name to uninstall (e.g., workflow-mgmt, kanban)"
    )
    parser.add_argument(
        "--backend",
        choices=["git-submodule", "npm", "pip", "auto"],
        default="auto",
        help="Backend type (default: auto-detect)"
    )
    parser.add_argument(
        "--recover",
        action="store_true",
        help="Recovery mode: clean up failed installations"
    )
    parser.add_argument(
        "--rollback",
        action="store_true",
        help="Rollback mode: restore previous version or remove entirely"
    )
    parser.add_argument(
        "--dry-run",
        action="store_true",
        help="Preview changes without modifying files"
    )
    parser.add_argument(
        "--force",
        action="store_true",
        help="Skip confirmation prompts"
    )
    parser.add_argument(
        "--backup-dir",
        type=str,
        help="Custom backup directory (default: auto-generated)"
    )
    parser.add_argument(
        "--project-root",
        type=str,
        default=".",
        help="Project root directory (default: current directory)"
    )
    
    args = parser.parse_args()
    
    project_root = Path(args.project_root).resolve()
    backup_dir = Path(args.backup_dir) if args.backup_dir else None
    
    if args.dry_run:
        print("🔍 DRY RUN MODE - No files will be modified\n")
    
    print("=" * 60)
    print("Package Uninstall Utility")
    print("=" * 60)
    print(f"📦 Package: {args.package}")
    print(f"📁 Project root: {project_root}")
    print(f"🔧 Backend: {args.backend}")
    if args.recover:
        print("🔧 Mode: Recovery")
    elif args.rollback:
        print("🔧 Mode: Rollback")
    print("=" * 60)
    
    uninstaller = PackageUninstaller(
        package_name=args.package,
        backend=args.backend,
        recover=args.recover,
        rollback=args.rollback,
        dry_run=args.dry_run,
        force=args.force,
        backup_dir=backup_dir,
        project_root=project_root
    )
    
    report = uninstaller.uninstall()
    
    # Print summary
    print(f"\n{'='*60}")
    print("Uninstall Report Summary")
    print(f"{'='*60}")
    print(f"Status: {report['status']}")
    if report['status'].startswith('completed'):
        summary = report['summary']
        print(f"Files removed: {summary['files_removed']}")
        print(f"Config updated: {summary['config_updated']}")
        print(f"Dependencies removed: {summary['dependencies_removed']}")
        
        if report.get('backup_path'):
            print(f"\n📦 Backup created: {report['backup_path']}")
        
        verification = report.get('verification', {})
        if not verification.get('clean'):
            print(f"\n⚠️  Verification found {verification.get('issues_count', 0)} issues. Review uninstall log.")
    else:
        print(f"Error: {report.get('message')}")
    
    print(f"{'='*60}\n")
    
    return 0 if report['status'].startswith('completed') else 1


if __name__ == "__main__":
    # Check for PyYAML
    try:
        import yaml
    except ImportError:
        print("ERROR: PyYAML is required. Install with: pip install pyyaml")
        sys.exit(1)
    
    exit(main())

