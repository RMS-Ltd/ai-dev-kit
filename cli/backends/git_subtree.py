"""
Git subtree backend implementation for framework dependency management.
"""

import subprocess
import shutil
from pathlib import Path
from typing import Optional, Dict, Any

from cli.backends.base import BackendBase
from cli.utils import print_error, print_success, print_info, print_warning


class GitSubtreeBackend(BackendBase):
    """
    Backend implementation for Git subtrees.
    
    Manages framework dependencies using Git subtrees.
    """
    
    def __init__(self):
        """Initialize Git subtree backend."""
        super().__init__(
            name="git-subtree",
            description="Git subtree backend for framework dependencies",
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
    
    def install(self, framework: str, version: str, path: Path, **kwargs) -> bool:
        """
        Install a framework as a Git subtree.
        
        Args:
            framework: Framework name
            version: Framework version (Git tag or branch)
            path: Installation path
            **kwargs: Additional options:
                - source: Git repository URL (required)
                - prefix: Subtree prefix (optional, defaults to path)
        
        Returns:
            True if installation succeeded, False otherwise
        """
        source = kwargs.get("source")
        if not source:
            print_error("Git repository URL (source) is required for Git subtree installation")
            return False
        
        try:
            # Ensure parent directory exists
            path.parent.mkdir(parents=True, exist_ok=True)
            
            # Use path as prefix for subtree
            prefix = kwargs.get("prefix", str(path))
            
            # Add subtree
            cmd = [
                "git",
                "subtree",
                "add",
                "--prefix", prefix,
                source,
                version,
                "--squash",
            ]
            
            result = subprocess.run(
                cmd,
                capture_output=True,
                text=True,
                timeout=120,
            )
            
            if result.returncode != 0:
                print_error(f"Failed to add Git subtree: {result.stderr}")
                return False
            
            print_success(f"Installed {framework} as Git subtree at {path}")
            return True
            
        except subprocess.TimeoutExpired:
            print_error("Git subtree operation timed out")
            return False
        except Exception as e:
            print_error(f"Failed to install Git subtree: {e}")
            return False
    
    def update(self, framework: str, version: str, path: Path, **kwargs) -> bool:
        """
        Update a Git subtree to a new version.
        
        Args:
            framework: Framework name
            version: Target version (Git tag or branch)
            path: Installation path
            **kwargs: Additional options:
                - source: Git repository URL (required)
                - prefix: Subtree prefix (optional, defaults to path)
        
        Returns:
            True if update succeeded, False otherwise
        """
        source = kwargs.get("source")
        if not source:
            print_error("Git repository URL (source) is required for Git subtree update")
            return False
        
        prefix = kwargs.get("prefix", str(path))
        
        if not Path(prefix).exists():
            print_error(f"Subtree path does not exist: {prefix}")
            return False
        
        try:
            # Pull subtree updates
            cmd = [
                "git",
                "subtree",
                "pull",
                "--prefix", prefix,
                source,
                version,
                "--squash",
            ]
            
            result = subprocess.run(
                cmd,
                capture_output=True,
                text=True,
                timeout=120,
            )
            
            if result.returncode != 0:
                print_error(f"Failed to update subtree: {result.stderr}")
                return False
            
            print_success(f"Updated {framework} to version {version}")
            return True
            
        except subprocess.TimeoutExpired:
            print_error("Git subtree update timed out")
            return False
        except Exception as e:
            print_error(f"Failed to update Git subtree: {e}")
            return False
    
    def check(self, framework: str, path: Path, **kwargs) -> Optional[str]:
        """
        Check for available updates in a Git subtree.
        
        Args:
            framework: Framework name
            path: Installation path
            **kwargs: Additional options:
                - source: Git repository URL (required)
        
        Returns:
            Latest available version (branch/tag), or None if up to date or error
        """
        source = kwargs.get("source")
        if not source:
            return None
        
        prefix = kwargs.get("prefix", str(path))
        
        if not Path(prefix).exists():
            return None
        
        try:
            # Fetch latest from remote
            cmd = ["git", "fetch", source]
            subprocess.run(
                cmd,
                capture_output=True,
                text=True,
                timeout=30,
            )
            
            # Get current subtree commit
            cmd = ["git", "log", "--oneline", "-1", "--grep", f"git-subtree-dir: {prefix}"]
            result = subprocess.run(
                cmd,
                capture_output=True,
                text=True,
                timeout=10,
            )
            if result.returncode != 0 or not result.stdout.strip():
                return None
            
            # Extract commit hash from log
            current_commit = result.stdout.split()[0]
            
            # Get latest commit from remote
            cmd = ["git", "ls-remote", source, "HEAD"]
            result = subprocess.run(
                cmd,
                capture_output=True,
                text=True,
                timeout=10,
            )
            if result.returncode != 0:
                return None
            
            latest_commit = result.stdout.split()[0]
            
            if current_commit != latest_commit:
                # Try to get tag name
                cmd = ["git", "ls-remote", "--tags", source]
                result = subprocess.run(
                    cmd,
                    capture_output=True,
                    text=True,
                    timeout=10,
                )
                if result.returncode == 0:
                    # Find tag pointing to latest commit
                    for line in result.stdout.splitlines():
                        if latest_commit in line:
                            tag = line.split("refs/tags/")[-1]
                            if tag and not tag.endswith("^{}"):
                                return tag
                
                # Fallback to commit hash (short)
                return latest_commit[:8]
            
            return None  # Up to date
            
        except subprocess.TimeoutExpired:
            print_warning("Git subtree check timed out")
            return None
        except Exception as e:
            print_warning(f"Failed to check Git subtree: {e}")
            return None
    
    def status(self, framework: str, path: Path, **kwargs) -> Dict[str, Any]:
        """
        Get status information for a Git subtree.
        
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
        
        prefix = kwargs.get("prefix", str(path))
        
        if not Path(prefix).exists():
            status_info["status"] = "not_installed"
            return status_info
        
        try:
            # Get last subtree commit
            cmd = ["git", "log", "--oneline", "-1", "--grep", f"git-subtree-dir: {prefix}"]
            result = subprocess.run(
                cmd,
                capture_output=True,
                text=True,
                timeout=10,
            )
            
            if result.returncode == 0 and result.stdout.strip():
                commit_line = result.stdout.strip()
                commit_hash = commit_line.split()[0]
                status_info["version"] = commit_hash[:8]  # Short hash
                status_info["status"] = "installed"
                
                # Try to extract version from commit message
                cmd = ["git", "log", "-1", "--format=%s", commit_hash]
                result = subprocess.run(
                    cmd,
                    capture_output=True,
                    text=True,
                    timeout=10,
                )
                if result.returncode == 0:
                    message = result.stdout.strip()
                    # Look for version/tag in commit message
                    if "v" in message.lower():
                        parts = message.split()
                        for part in parts:
                            if part.startswith("v") and any(c.isdigit() for c in part):
                                status_info["version"] = part
                                break
            else:
                status_info["status"] = "not_installed"
            
        except Exception as e:
            print_warning(f"Failed to get Git subtree status: {e}")
            status_info["status"] = "error"
        
        return status_info
    
    def remove(self, framework: str, path: Path, keep_files: bool = False, **kwargs) -> bool:
        """
        Remove a Git subtree.
        
        Args:
            framework: Framework name
            path: Installation path
            keep_files: If True, keep framework files but remove subtree tracking
            **kwargs: Additional options:
                - prefix: Subtree prefix (optional, defaults to path)
        
        Returns:
            True if removal succeeded, False otherwise
        """
        prefix = kwargs.get("prefix", str(path))
        
        try:
            if not keep_files:
                # Remove subtree files
                if Path(prefix).exists():
                    shutil.rmtree(prefix)
                
                # Remove subtree from Git
                cmd = ["git", "rm", "-r", prefix]
                result = subprocess.run(
                    cmd,
                    capture_output=True,
                    text=True,
                    timeout=30,
                )
                if result.returncode != 0:
                    print_warning(f"Failed to remove subtree from Git: {result.stderr}")
                    # Continue anyway
            else:
                # Just remove from Git tracking
                cmd = ["git", "rm", "--cached", "-r", prefix]
                result = subprocess.run(
                    cmd,
                    capture_output=True,
                    text=True,
                    timeout=30,
                )
                if result.returncode != 0:
                    print_warning(f"Failed to remove subtree from Git tracking: {result.stderr}")
            
            print_success(f"Removed Git subtree {framework}")
            return True
            
        except Exception as e:
            print_error(f"Failed to remove Git subtree: {e}")
            return False

