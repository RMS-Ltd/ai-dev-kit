"""
Git submodule backend implementation for framework dependency management.
"""

import subprocess
import shutil
import platform
from pathlib import Path
from typing import Optional, Dict, Any

from cli.backends.base import BackendBase
from cli.utils import print_error, print_success, print_info, print_warning
from cli.exceptions import AppleSDKLicenseError


class GitSubmoduleBackend(BackendBase):
    """
    Backend implementation for Git submodules.
    
    Manages framework dependencies using Git submodules.
    """
    
    def __init__(self):
        """Initialize Git submodule backend."""
        super().__init__(
            name="git-submodule",
            description="Git submodule backend for framework dependencies",
        )
    
    def is_available(self) -> bool:
        """Check if Git is available on the system."""
        try:
            result = subprocess.run(
                ["git", "--version"],
                capture_output=True,
                text=True,
                timeout=5,
            )
            return result.returncode == 0
        except (subprocess.TimeoutExpired, FileNotFoundError):
            return False
    
    def _check_apple_sdk_prerequisites(self) -> bool:
        """Check Apple SDK prerequisites on macOS systems."""
        if platform.system() != "Darwin":
            return True
        
        try:
            # Check if xcode-select is available
            result = subprocess.run(
                ["xcode-select", "--print-path"],
                capture_output=True,
                text=True,
                timeout=10
            )
            
            if result.returncode != 0:
                print_warning("Xcode Command Line Tools may not be installed")
                print_info("Install with: xcode-select --install")
                return False
            
            # Check if Git is working properly
            result = subprocess.run(
                ["git", "--version"],
                capture_output=True,
                text=True,
                timeout=10
            )
            
            if result.returncode != 0:
                print_warning("Git may not be properly configured")
                return False
                
            return True
            
        except subprocess.TimeoutExpired:
            print_warning("Apple SDK prerequisite check timed out")
            return False
        except FileNotFoundError:
            print_warning("Xcode Command Line Tools not found")
            return False
    
    def _detect_apple_sdk_error(self, stderr: str) -> bool:
        """Detect if error is related to Apple SDK licensing."""
        apple_sdk_indicators = [
            "xcode-select", "xcodebuild", "command line tools",
            "xcode license", "developer tools", "sdk not found",
            "ios sdk", "macos sdk"
        ]
        
        stderr_lower = stderr.lower()
        return any(indicator in stderr_lower for indicator in apple_sdk_indicators)
    
    def install(self, framework: str, version: str, path: Path, **kwargs) -> bool:
        """
        Install a framework as a Git submodule.
        
        Args:
            framework: Framework name
            version: Framework version (Git tag or branch)
            path: Installation path
            **kwargs: Additional options:
                - source: Git repository URL (required)
                - branch: Git branch (optional, defaults to version)
        
        Returns:
            True if installation succeeded, False otherwise
        """
        source = kwargs.get("source")
        if not source:
            print_error("Git repository URL (source) is required for Git submodule installation")
            return False
        
        try:
            # Check Apple SDK prerequisites on macOS
            if not self._check_apple_sdk_prerequisites():
                raise AppleSDKLicenseError(
                    operation="git submodule prerequisite check",
                    error_details="Xcode Command Line Tools not properly configured"
                )
            
            # Ensure parent directory exists
            path.parent.mkdir(parents=True, exist_ok=True)
            
            # Add submodule
            submodule_path = str(path)
            branch = kwargs.get("branch", version)
            
            cmd = [
                "git",
                "submodule",
                "add",
                "-b", branch,
                "--name", framework,
                source,
                submodule_path,
            ]
            
            result = subprocess.run(
                cmd,
                capture_output=True,
                text=True,
                timeout=60,
            )
            
            if result.returncode != 0:
                # Check for Apple SDK license issues
                if self._detect_apple_sdk_error(result.stderr):
                    raise AppleSDKLicenseError(
                        operation="git submodule add",
                        error_details=result.stderr
                    )
                print_error(f"Failed to add Git submodule: {result.stderr}")
                return False
            
            # Checkout specific version if provided and different from branch
            if version and version != branch:
                cmd = ["git", "-C", submodule_path, "checkout", version]
                result = subprocess.run(
                    cmd,
                    capture_output=True,
                    text=True,
                    timeout=30,
                )
                if result.returncode != 0:
                    print_warning(f"Failed to checkout version {version}: {result.stderr}")
                    # Continue anyway, submodule is added
            
            print_success(f"Installed {framework} as Git submodule at {path}")
            return True
            
        except subprocess.TimeoutExpired:
            print_error("Git submodule operation timed out")
            return False
        except Exception as e:
            print_error(f"Failed to install Git submodule: {e}")
            return False
    
    def update(self, framework: str, version: str, path: Path, **kwargs) -> bool:
        """
        Update a Git submodule to a new version.
        
        Args:
            framework: Framework name
            version: Target version (Git tag or branch)
            path: Installation path
            **kwargs: Additional options
        
        Returns:
            True if update succeeded, False otherwise
        """
        if not path.exists():
            print_error(f"Submodule path does not exist: {path}")
            return False
        
        try:
            # Update submodule to latest from remote
            cmd = ["git", "submodule", "update", "--remote", "--merge", str(path)]
            result = subprocess.run(
                cmd,
                capture_output=True,
                text=True,
                timeout=60,
            )
            
            if result.returncode != 0:
                print_error(f"Failed to update submodule: {result.stderr}")
                return False
            
            # Checkout specific version if provided
            if version:
                cmd = ["git", "-C", str(path), "checkout", version]
                result = subprocess.run(
                    cmd,
                    capture_output=True,
                    text=True,
                    timeout=30,
                )
                if result.returncode != 0:
                    print_error(f"Failed to checkout version {version}: {result.stderr}")
                    return False
            
            print_success(f"Updated {framework} to version {version}")
            return True
            
        except subprocess.TimeoutExpired:
            print_error("Git submodule update timed out")
            return False
        except Exception as e:
            print_error(f"Failed to update Git submodule: {e}")
            return False
    
    def check(self, framework: str, path: Path, **kwargs) -> Optional[str]:
        """
        Check for available updates in a Git submodule.
        
        Args:
            framework: Framework name
            path: Installation path
            **kwargs: Additional options
        
        Returns:
            Latest available version (branch/tag), or None if up to date or error
        """
        if not path.exists():
            return None
        
        try:
            # Fetch latest from remote
            cmd = ["git", "-C", str(path), "fetch", "--tags"]
            subprocess.run(
                cmd,
                capture_output=True,
                text=True,
                timeout=30,
            )
            
            # Get current commit
            cmd = ["git", "-C", str(path), "rev-parse", "HEAD"]
            result = subprocess.run(
                cmd,
                capture_output=True,
                text=True,
                timeout=10,
            )
            if result.returncode != 0:
                return None
            
            current_commit = result.stdout.strip()
            
            # Get latest commit from remote
            cmd = ["git", "-C", str(path), "rev-parse", "origin/HEAD"]
            result = subprocess.run(
                cmd,
                capture_output=True,
                text=True,
                timeout=10,
            )
            if result.returncode != 0:
                return None
            
            latest_commit = result.stdout.strip()
            
            if current_commit != latest_commit:
                # Try to get tag or branch name
                cmd = ["git", "-C", str(path), "describe", "--tags", "--exact-match", latest_commit]
                result = subprocess.run(
                    cmd,
                    capture_output=True,
                    text=True,
                    timeout=10,
                )
                if result.returncode == 0:
                    return result.stdout.strip()
                
                # Fallback to commit hash (short)
                return latest_commit[:8]
            
            return None  # Up to date
            
        except subprocess.TimeoutExpired:
            print_warning("Git submodule check timed out")
            return None
        except Exception as e:
            print_warning(f"Failed to check Git submodule: {e}")
            return None
    
    def status(self, framework: str, path: Path, **kwargs) -> Dict[str, Any]:
        """
        Get status information for a Git submodule.
        
        Args:
            framework: Framework name
            path: Installation path
            **kwargs: Additional options
        
        Returns:
            Dictionary with status information
        """
        status_info = {
            "version": "unknown",
            "backend": self.name,
            "path": str(path),
            "status": "unknown",
        }
        
        if not path.exists():
            status_info["status"] = "not_installed"
            return status_info
        
        try:
            # Get current commit
            cmd = ["git", "-C", str(path), "rev-parse", "HEAD"]
            result = subprocess.run(
                cmd,
                capture_output=True,
                text=True,
                timeout=10,
            )
            if result.returncode == 0:
                commit_hash = result.stdout.strip()
                status_info["version"] = commit_hash[:8]  # Short hash
                
                # Try to get tag
                cmd = ["git", "-C", str(path), "describe", "--tags", "--exact-match", commit_hash]
                result = subprocess.run(
                    cmd,
                    capture_output=True,
                    text=True,
                    timeout=10,
                )
                if result.returncode == 0:
                    status_info["version"] = result.stdout.strip()
            
            # Check if submodule is initialized
            cmd = ["git", "submodule", "status", str(path)]
            result = subprocess.run(
                cmd,
                capture_output=True,
                text=True,
                timeout=10,
            )
            if result.returncode == 0:
                status_line = result.stdout.strip()
                if status_line.startswith("-"):
                    status_info["status"] = "not_initialized"
                elif status_line.startswith("+"):
                    status_info["status"] = "modified"
                else:
                    status_info["status"] = "installed"
            
        except Exception as e:
            print_warning(f"Failed to get Git submodule status: {e}")
            status_info["status"] = "error"
        
        return status_info
    
    def remove(self, framework: str, path: Path, keep_files: bool = False, **kwargs) -> bool:
        """
        Remove a Git submodule.
        
        Args:
            framework: Framework name
            path: Installation path
            keep_files: If True, keep framework files but remove submodule tracking
            **kwargs: Additional options
        
        Returns:
            True if removal succeeded, False otherwise
        """
        try:
            if not keep_files:
                # Remove submodule files
                if path.exists():
                    shutil.rmtree(path)
            
            # Remove submodule entry from .gitmodules
            cmd = ["git", "submodule", "deinit", "-f", str(path)]
            subprocess.run(
                cmd,
                capture_output=True,
                text=True,
                timeout=30,
            )
            
            # Remove from .git/config
            cmd = ["git", "config", "--file", ".gitmodules", "--remove-section", f"submodule.{framework}"]
            subprocess.run(
                cmd,
                capture_output=True,
                text=True,
                timeout=10,
            )
            
            # Remove from .git/modules
            git_modules_path = Path(".git") / "modules" / framework
            if git_modules_path.exists():
                shutil.rmtree(git_modules_path)
            
            print_success(f"Removed Git submodule {framework}")
            return True
            
        except Exception as e:
            print_error(f"Failed to remove Git submodule: {e}")
            return False

