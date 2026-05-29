"""
Base backend interface for framework dependency management.

This module defines the abstract base class that all backend implementations must follow.
"""

from abc import ABC, abstractmethod
from pathlib import Path
from typing import Optional, Dict, Any


class BackendBase(ABC):
    """
    Abstract base class for all backend implementations.
    
    All backends must inherit from this class and implement all abstract methods.
    """
    
    def __init__(self, name: str, description: str = ""):
        """
        Initialize the backend.
        
        Args:
            name: Backend name (e.g., 'git-submodule', 'npm')
            description: Human-readable description of the backend
        """
        self.name = name
        self.description = description
    
    @abstractmethod
    def install(self, framework: str, version: str, path: Path, **kwargs) -> bool:
        """
        Install a framework using this backend.
        
        Args:
            framework: Framework name
            version: Framework version to install
            path: Installation path
            **kwargs: Additional backend-specific options
        
        Returns:
            True if installation succeeded, False otherwise
        """
        pass
    
    @abstractmethod
    def update(self, framework: str, version: str, path: Path, **kwargs) -> bool:
        """
        Update a framework to a new version.
        
        Args:
            framework: Framework name
            version: Target version
            path: Installation path
            **kwargs: Additional backend-specific options
        
        Returns:
            True if update succeeded, False otherwise
        """
        pass
    
    @abstractmethod
    def check(self, framework: str, path: Path, **kwargs) -> Optional[str]:
        """
        Check for available updates.
        
        Args:
            framework: Framework name
            path: Installation path
            **kwargs: Additional backend-specific options
        
        Returns:
            Latest available version, or None if up to date or error
        """
        pass
    
    @abstractmethod
    def status(self, framework: str, path: Path, **kwargs) -> Dict[str, Any]:
        """
        Get status information for a framework.
        
        Args:
            framework: Framework name
            path: Installation path
            **kwargs: Additional backend-specific options
        
        Returns:
            Dictionary with status information:
            - version: Current version
            - backend: Backend name
            - path: Installation path
            - status: Status string (e.g., 'installed', 'outdated', 'error')
            - additional backend-specific fields
        """
        pass
    
    @abstractmethod
    def remove(self, framework: str, path: Path, keep_files: bool = False, **kwargs) -> bool:
        """
        Remove a framework dependency.
        
        Args:
            framework: Framework name
            path: Installation path
            keep_files: If True, keep framework files but remove dependency tracking
            **kwargs: Additional backend-specific options
        
        Returns:
            True if removal succeeded, False otherwise
        """
        pass
    
    @abstractmethod
    def is_available(self) -> bool:
        """
        Check if this backend is available on the current system.
        
        Returns:
            True if backend is available, False otherwise
        """
        pass
    
    def get_info(self) -> Dict[str, str]:
        """
        Get backend information.
        
        Returns:
            Dictionary with backend information (name, description, availability)
        """
        return {
            "name": self.name,
            "description": self.description,
            "available": str(self.is_available()),
        }

