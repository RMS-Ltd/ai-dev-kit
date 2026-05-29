"""
Backend registry for managing available backend implementations.
"""

from typing import Dict, Type, Optional, List
from cli.backends.base import BackendBase
from cli.utils import print_warning


class BackendRegistry:
    """
    Registry for backend implementations.
    
    Manages registration and retrieval of backend implementations.
    """
    
    def __init__(self):
        """Initialize the backend registry."""
        self._backends: Dict[str, Type[BackendBase]] = {}
    
    def register(self, name: str, backend_class: Type[BackendBase]) -> None:
        """
        Register a backend implementation.
        
        Args:
            name: Backend name (e.g., 'git-submodule')
            backend_class: Backend class that inherits from BackendBase
        """
        if name in self._backends:
            print_warning(f"Backend '{name}' is already registered. Overwriting.")
        self._backends[name] = backend_class
    
    def get(self, name: str) -> Optional[Type[BackendBase]]:
        """
        Get a backend class by name.
        
        Args:
            name: Backend name
        
        Returns:
            Backend class, or None if not found
        """
        return self._backends.get(name)
    
    def list_available(self) -> List[str]:
        """
        List all registered backend names.
        
        Returns:
            List of backend names
        """
        return list(self._backends.keys())
    
    def create_instance(self, name: str, **kwargs) -> Optional[BackendBase]:
        """
        Create an instance of a backend.
        
        Args:
            name: Backend name
            **kwargs: Arguments to pass to backend constructor
        
        Returns:
            Backend instance, or None if backend not found
        """
        backend_class = self.get(name)
        if backend_class is None:
            return None
        return backend_class(**kwargs)
    
    def get_available_backends(self) -> List[str]:
        """
        Get list of backends that are available on the current system.
        
        Returns:
            List of backend names that are available
        """
        available = []
        for name, backend_class in self._backends.items():
            instance = backend_class()
            if instance.is_available():
                available.append(name)
        return available


# Global backend registry instance
_registry = BackendRegistry()


def get_registry() -> BackendRegistry:
    """Get the global backend registry."""
    return _registry


def register_backend(name: str, backend_class: Type[BackendBase]) -> None:
    """
    Register a backend with the global registry.
    
    Args:
        name: Backend name
        backend_class: Backend class
    """
    _registry.register(name, backend_class)


def get_backend(name: str) -> Optional[Type[BackendBase]]:
    """
    Get a backend class from the global registry.
    
    Args:
        name: Backend name
    
    Returns:
        Backend class, or None if not found
    """
    return _registry.get(name)

