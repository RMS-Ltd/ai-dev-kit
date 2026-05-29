#!/usr/bin/env python3
"""
Generator Registry

Registry for discovering and managing code generators.

Part of: Epic 8, Story 1 - Code Generators
Task: E8:S01:T01 - Create generator framework
"""

from typing import Dict, List, Optional, Type
from .base import BaseGenerator


class GeneratorRegistry:
    """
    Registry for code generators.
    
    Allows registration and discovery of generators by name or type.
    """
    
    def __init__(self):
        """Initialize the registry."""
        self._generators: Dict[str, Type[BaseGenerator]] = {}
        self._aliases: Dict[str, str] = {}
    
    def register(
        self,
        generator_class: Type[BaseGenerator],
        name: Optional[str] = None,
        aliases: Optional[List[str]] = None
    ) -> None:
        """
        Register a generator class.
        
        Args:
            generator_class: Generator class (must inherit from BaseGenerator)
            name: Optional custom name (defaults to class name)
            aliases: Optional list of aliases for the generator
        """
        if not issubclass(generator_class, BaseGenerator):
            raise TypeError(f"Generator must inherit from BaseGenerator: {generator_class}")
        
        generator_name = name or generator_class.__name__
        self._generators[generator_name] = generator_class
        
        if aliases:
            for alias in aliases:
                self._aliases[alias.lower()] = generator_name
    
    def get(self, name: str) -> Optional[Type[BaseGenerator]]:
        """
        Get a generator class by name or alias.
        
        Args:
            name: Generator name or alias
        
        Returns:
            Generator class or None if not found
        """
        # Check direct name
        if name in self._generators:
            return self._generators[name]
        
        # Check aliases
        alias_key = name.lower()
        if alias_key in self._aliases:
            actual_name = self._aliases[alias_key]
            return self._generators.get(actual_name)
        
        return None
    
    def list_generators(self) -> List[str]:
        """
        List all registered generator names.
        
        Returns:
            List of generator names
        """
        return list(self._generators.keys())
    
    def list_with_aliases(self) -> Dict[str, List[str]]:
        """
        List all generators with their aliases.
        
        Returns:
            Dictionary mapping generator names to lists of aliases
        """
        result = {}
        for name in self._generators.keys():
            aliases = [
                alias for alias, actual_name in self._aliases.items()
                if actual_name == name
            ]
            result[name] = aliases
        return result
    
    def unregister(self, name: str) -> bool:
        """
        Unregister a generator.
        
        Args:
            name: Generator name
        
        Returns:
            True if unregistered, False if not found
        """
        if name in self._generators:
            del self._generators[name]
            # Remove aliases
            self._aliases = {
                alias: actual_name
                for alias, actual_name in self._aliases.items()
                if actual_name != name
            }
            return True
        return False
    
    def clear(self) -> None:
        """Clear all registered generators."""
        self._generators.clear()
        self._aliases.clear()


# Global registry instance
_default_registry = GeneratorRegistry()


def get_registry() -> GeneratorRegistry:
    """
    Get the default generator registry.
    
    Returns:
        Default GeneratorRegistry instance
    """
    return _default_registry


def register_generator(
    generator_class: Type[BaseGenerator],
    name: Optional[str] = None,
    aliases: Optional[List[str]] = None
) -> None:
    """
    Register a generator in the default registry.
    
    Args:
        generator_class: Generator class
        name: Optional custom name
        aliases: Optional list of aliases
    """
    _default_registry.register(generator_class, name, aliases)

