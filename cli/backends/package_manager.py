"""
Package manager backend implementation for framework dependency management.

Supports npm and pip package managers for installing frameworks from registries.
"""

import subprocess
import json
from pathlib import Path
from typing import Optional, Dict, Any, List

from cli.backends.base import BackendBase
from cli.utils import print_error, print_success, print_info, print_warning


class PackageManagerBackend(BackendBase):
    """
    Base class for package manager backends (npm, pip).
    
    Provides common functionality for package manager operations.
    """
    
    def __init__(self, name: str, description: str, package_prefix: str):
        """
        Initialize package manager backend.
        
        Args:
            name: Backend name (e.g., 'npm', 'pip')
            description: Human-readable description
            package_prefix: Package name prefix (e.g., '@ai-dev-kit/' for npm, 'ai-dev-kit-' for pip)
        """
        super().__init__(name=name, description=description)
        self.package_prefix = package_prefix
    
    def _get_package_name(self, framework: str) -> str:
        """
        Get full package name for a framework.
        
        Args:
            framework: Framework name
        
        Returns:
            Full package name (e.g., '@ai-dev-kit/numbering-versioning' for npm)
        """
        # Normalize framework name (replace spaces with hyphens, lowercase)
        normalized = framework.lower().replace(" ", "-").replace("&", "").replace("_", "-")
        return f"{self.package_prefix}{normalized}"
    
    def _check_package_exists(self, package_name: str, version: Optional[str] = None) -> bool:
        """
        Check if a package exists in the registry.
        
        Args:
            package_name: Full package name
            version: Optional version to check
        
        Returns:
            True if package exists, False otherwise
        """
        # This is a placeholder - will be implemented by subclasses
        return False
    
    def is_available(self) -> bool:
        """Check if package manager is available on the system."""
        # This is a placeholder - will be implemented by subclasses
        return False


class NpmBackend(PackageManagerBackend):
    """
    npm backend implementation for framework dependency management.
    """
    
    def __init__(self):
        """Initialize npm backend."""
        super().__init__(
            name="npm",
            description="npm backend for framework dependencies",
            package_prefix="@ai-dev-kit/",
        )
    
    def is_available(self) -> bool:
        """Check if npm is available on the system."""
        try:
            result = subprocess.run(
                ["npm", "--version"],
                capture_output=True,
                text=True,
                timeout=5,
            )
            return result.returncode == 0
        except (subprocess.TimeoutExpired, FileNotFoundError):
            return False
    
    def _check_package_exists(self, package_name: str, version: Optional[str] = None) -> bool:
        """
        Check if a package exists in npm registry.
        
        Args:
            package_name: Full package name
            version: Optional version to check
        
        Returns:
            True if package exists, False otherwise
        """
        try:
            if version:
                cmd = ["npm", "view", f"{package_name}@{version}", "version"]
            else:
                cmd = ["npm", "view", package_name, "version"]
            
            result = subprocess.run(
                cmd,
                capture_output=True,
                text=True,
                timeout=10,
            )
            return result.returncode == 0
        except Exception:
            return False
    
    def install(self, framework: str, version: str, path: Path, **kwargs) -> bool:
        """
        Install a framework using npm.
        
        Args:
            framework: Framework name
            version: Framework version
            path: Installation path (for npm, this is typically node_modules)
            **kwargs: Additional options
        
        Returns:
            True if installation succeeded, False otherwise
        """
        package_name = self._get_package_name(framework)
        
        # Check if package exists
        if not self._check_package_exists(package_name, version):
            print_error(f"Package {package_name}@{version} not found in npm registry.")
            print_info("Frameworks may not be published to npm yet.")
            print_info("Consider using Git submodule or Git subtree backends instead.")
            return False
        
        try:
            # Install package
            cmd = ["npm", "install", f"{package_name}@{version}"]
            
            result = subprocess.run(
                cmd,
                capture_output=True,
                text=True,
                timeout=120,
            )
            
            if result.returncode != 0:
                print_error(f"Failed to install package: {result.stderr}")
                return False
            
            print_success(f"Installed {framework}@{version} via npm")
            return True
            
        except subprocess.TimeoutExpired:
            print_error("npm installation timed out")
            return False
        except Exception as e:
            print_error(f"Failed to install package: {e}")
            return False
    
    def update(self, framework: str, version: str, path: Path, **kwargs) -> bool:
        """
        Update a framework to a new version using npm.
        
        Args:
            framework: Framework name
            version: Target version
            path: Installation path
            **kwargs: Additional options
        
        Returns:
            True if update succeeded, False otherwise
        """
        package_name = self._get_package_name(framework)
        
        # Check if package exists
        if not self._check_package_exists(package_name, version):
            print_error(f"Package {package_name}@{version} not found in npm registry.")
            return False
        
        try:
            # Update package
            cmd = ["npm", "update", f"{package_name}@{version}"]
            
            result = subprocess.run(
                cmd,
                capture_output=True,
                text=True,
                timeout=120,
            )
            
            if result.returncode != 0:
                print_error(f"Failed to update package: {result.stderr}")
                return False
            
            print_success(f"Updated {framework} to version {version}")
            return True
            
        except Exception as e:
            print_error(f"Failed to update package: {e}")
            return False
    
    def check(self, framework: str, path: Path, **kwargs) -> Optional[str]:
        """
        Check for available updates in npm registry.
        
        Args:
            framework: Framework name
            path: Installation path
            **kwargs: Additional options
        
        Returns:
            Latest available version, or None if up to date or error
        """
        package_name = self._get_package_name(framework)
        
        try:
            # Get latest version
            cmd = ["npm", "view", package_name, "version"]
            result = subprocess.run(
                cmd,
                capture_output=True,
                text=True,
                timeout=10,
            )
            
            if result.returncode != 0:
                return None
            
            latest_version = result.stdout.strip()
            return latest_version if latest_version else None
            
        except Exception:
            return None
    
    def status(self, framework: str, path: Path, **kwargs) -> Dict[str, Any]:
        """
        Get status information for a framework installed via npm.
        
        Args:
            framework: Framework name
            path: Installation path
            **kwargs: Additional options
        
        Returns:
            Dictionary with status information
        """
        package_name = self._get_package_name(framework)
        status_info = {
            "version": "unknown",
            "backend": self.name,
            "path": str(path),
            "status": "unknown",
        }
        
        try:
            # Check package.json for installed version
            package_json_path = Path("package.json")
            if package_json_path.exists():
                with open(package_json_path, 'r') as f:
                    package_json = json.load(f)
                    deps = package_json.get("dependencies", {})
                    if package_name in deps:
                        version = deps[package_name]
                        status_info["version"] = version.lstrip("^~")
                        status_info["status"] = "installed"
            
        except Exception as e:
            print_warning(f"Failed to get npm package status: {e}")
            status_info["status"] = "error"
        
        return status_info
    
    def remove(self, framework: str, path: Path, keep_files: bool = False, **kwargs) -> bool:
        """
        Remove a framework installed via npm.
        
        Args:
            framework: Framework name
            path: Installation path
            keep_files: If True, keep framework files (not applicable for npm)
            **kwargs: Additional options
        
        Returns:
            True if removal succeeded, False otherwise
        """
        package_name = self._get_package_name(framework)
        
        try:
            # Uninstall package
            cmd = ["npm", "uninstall", package_name]
            result = subprocess.run(
                cmd,
                capture_output=True,
                text=True,
                timeout=30,
            )
            
            if result.returncode != 0:
                print_error(f"Failed to remove package: {result.stderr}")
                return False
            
            print_success(f"Removed {framework} package")
            return True
            
        except Exception as e:
            print_error(f"Failed to remove package: {e}")
            return False


class PipBackend(PackageManagerBackend):
    """
    pip backend implementation for framework dependency management.
    """
    
    def __init__(self):
        """Initialize pip backend."""
        super().__init__(
            name="pip",
            description="pip backend for framework dependencies",
            package_prefix="ai-dev-kit-",
        )
    
    def is_available(self) -> bool:
        """Check if pip is available on the system."""
        try:
            result = subprocess.run(
                ["pip", "--version"],
                capture_output=True,
                text=True,
                timeout=5,
            )
            if result.returncode != 0:
                # Try pip3
                result = subprocess.run(
                    ["pip3", "--version"],
                    capture_output=True,
                    text=True,
                    timeout=5,
                )
            return result.returncode == 0
        except (subprocess.TimeoutExpired, FileNotFoundError):
            return False
    
    def _get_pip_command(self) -> str:
        """Get the pip command to use (pip or pip3)."""
        try:
            subprocess.run(["pip", "--version"], capture_output=True, timeout=2)
            return "pip"
        except:
            return "pip3"
    
    def _check_package_exists(self, package_name: str, version: Optional[str] = None) -> bool:
        """
        Check if a package exists in PyPI.
        
        Args:
            package_name: Full package name
            version: Optional version to check
        
        Returns:
            True if package exists, False otherwise
        """
        try:
            pip_cmd = self._get_pip_command()
            if version:
                cmd = [pip_cmd, "index", "versions", package_name]
            else:
                cmd = [pip_cmd, "index", "versions", package_name]
            
            result = subprocess.run(
                cmd,
                capture_output=True,
                text=True,
                timeout=10,
            )
            return result.returncode == 0
        except Exception:
            return False
    
    def install(self, framework: str, version: str, path: Path, **kwargs) -> bool:
        """
        Install a framework using pip.
        
        Args:
            framework: Framework name
            version: Framework version
            path: Installation path (for pip, packages are installed globally or in venv)
            **kwargs: Additional options:
                - user: Install to user site-packages
                - target: Custom installation target
        
        Returns:
            True if installation succeeded, False otherwise
        """
        package_name = self._get_package_name(framework)
        pip_cmd = self._get_pip_command()
        
        # Check if package exists
        if not self._check_package_exists(package_name, version):
            print_error(f"Package {package_name}=={version} not found in PyPI.")
            print_info("Frameworks may not be published to PyPI yet.")
            print_info("Consider using Git submodule or Git subtree backends instead.")
            return False
        
        try:
            # Build install command
            cmd = [pip_cmd, "install", f"{package_name}=={version}"]
            
            if kwargs.get("user"):
                cmd.append("--user")
            if kwargs.get("target"):
                cmd.extend(["--target", str(kwargs["target"])])
            
            result = subprocess.run(
                cmd,
                capture_output=True,
                text=True,
                timeout=120,
            )
            
            if result.returncode != 0:
                print_error(f"Failed to install package: {result.stderr}")
                return False
            
            print_success(f"Installed {framework}=={version} via pip")
            return True
            
        except subprocess.TimeoutExpired:
            print_error("pip installation timed out")
            return False
        except Exception as e:
            print_error(f"Failed to install package: {e}")
            return False
    
    def update(self, framework: str, version: str, path: Path, **kwargs) -> bool:
        """
        Update a framework to a new version using pip.
        
        Args:
            framework: Framework name
            version: Target version
            path: Installation path
            **kwargs: Additional options
        
        Returns:
            True if update succeeded, False otherwise
        """
        package_name = self._get_package_name(framework)
        pip_cmd = self._get_pip_command()
        
        # Check if package exists
        if not self._check_package_exists(package_name, version):
            print_error(f"Package {package_name}=={version} not found in PyPI.")
            return False
        
        try:
            # Update package (pip install --upgrade)
            cmd = [pip_cmd, "install", "--upgrade", f"{package_name}=={version}"]
            
            result = subprocess.run(
                cmd,
                capture_output=True,
                text=True,
                timeout=120,
            )
            
            if result.returncode != 0:
                print_error(f"Failed to update package: {result.stderr}")
                return False
            
            print_success(f"Updated {framework} to version {version}")
            return True
            
        except Exception as e:
            print_error(f"Failed to update package: {e}")
            return False
    
    def check(self, framework: str, path: Path, **kwargs) -> Optional[str]:
        """
        Check for available updates in PyPI.
        
        Args:
            framework: Framework name
            path: Installation path
            **kwargs: Additional options
        
        Returns:
            Latest available version, or None if up to date or error
        """
        package_name = self._get_package_name(framework)
        pip_cmd = self._get_pip_command()
        
        try:
            # Get latest version
            cmd = [pip_cmd, "index", "versions", package_name]
            result = subprocess.run(
                cmd,
                capture_output=True,
                text=True,
                timeout=10,
            )
            
            if result.returncode != 0:
                return None
            
            # Parse output to get latest version
            output = result.stdout.strip()
            if output:
                # Extract version from output (format may vary)
                lines = output.splitlines()
                if lines:
                    # Try to extract version number
                    for line in lines:
                        if "Available versions:" in line or "versions:" in line.lower():
                            # Extract first version (usually latest)
                            parts = line.split()
                            for part in parts:
                                if part and part[0].isdigit():
                                    return part
            return None
            
        except Exception:
            return None
    
    def status(self, framework: str, path: Path, **kwargs) -> Dict[str, Any]:
        """
        Get status information for a framework installed via pip.
        
        Args:
            framework: Framework name
            path: Installation path
            **kwargs: Additional options
        
        Returns:
            Dictionary with status information
        """
        package_name = self._get_package_name(framework)
        pip_cmd = self._get_pip_command()
        status_info = {
            "version": "unknown",
            "backend": self.name,
            "path": str(path),
            "status": "unknown",
        }
        
        try:
            # Check installed version
            cmd = [pip_cmd, "show", package_name]
            result = subprocess.run(
                cmd,
                capture_output=True,
                text=True,
                timeout=10,
            )
            
            if result.returncode == 0:
                # Parse output
                for line in result.stdout.splitlines():
                    if line.startswith("Version:"):
                        version = line.split(":", 1)[1].strip()
                        status_info["version"] = version
                        status_info["status"] = "installed"
                        break
            else:
                status_info["status"] = "not_installed"
            
        except Exception as e:
            print_warning(f"Failed to get pip package status: {e}")
            status_info["status"] = "error"
        
        return status_info
    
    def remove(self, framework: str, path: Path, keep_files: bool = False, **kwargs) -> bool:
        """
        Remove a framework installed via pip.
        
        Args:
            framework: Framework name
            path: Installation path
            keep_files: If True, keep framework files (not applicable for pip)
            **kwargs: Additional options
        
        Returns:
            True if removal succeeded, False otherwise
        """
        package_name = self._get_package_name(framework)
        pip_cmd = self._get_pip_command()
        
        try:
            # Uninstall package
            cmd = [pip_cmd, "uninstall", "-y", package_name]
            result = subprocess.run(
                cmd,
                capture_output=True,
                text=True,
                timeout=30,
            )
            
            if result.returncode != 0:
                print_error(f"Failed to remove package: {result.stderr}")
                return False
            
            print_success(f"Removed {framework} package")
            return True
            
        except Exception as e:
            print_error(f"Failed to remove package: {e}")
            return False

