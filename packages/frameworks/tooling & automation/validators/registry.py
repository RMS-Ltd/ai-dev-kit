#!/usr/bin/env python3
"""
Validator Registry

A registry for discovering and managing validator implementations.

Part of: Epic 8, Story 2 - Additional Validators
Task: E8:S02:T01 - Create validator framework
"""

from typing import Dict, Type, Optional, List
from .base import BaseValidator, ValidatorConfig


class ValidatorRegistry:
    """
    A registry for discovering and managing validator implementations.
    """
    _validators: Dict[str, Type[BaseValidator]] = {}
    _aliases: Dict[str, str] = {}  # alias -> name mapping
    
    @classmethod
    def register(cls, name: str, validator_class: Type[BaseValidator], aliases: Optional[List[str]] = None):
        """
        Register a validator class with a given name.
        
        Args:
            name: Primary name for the validator
            validator_class: Validator class to register
            aliases: Optional list of aliases for the validator
        """
        if name in cls._validators:
            raise ValueError(f"Validator with name '{name}' already registered.")
        cls._validators[name] = validator_class
        
        # Register aliases
        if aliases:
            for alias in aliases:
                if alias in cls._aliases:
                    raise ValueError(f"Alias '{alias}' already registered for another validator.")
                cls._aliases[alias] = name
    
    @classmethod
    def get_validator_class(cls, name: str) -> Optional[Type[BaseValidator]]:
        """
        Retrieve a registered validator class by name or alias.
        
        Args:
            name: Validator name or alias
        
        Returns:
            Validator class or None if not found
        """
        # Check if it's an alias
        actual_name = cls._aliases.get(name, name)
        return cls._validators.get(actual_name)
    
    @classmethod
    def list_validators(cls) -> Dict[str, str]:
        """
        List all registered validators by name and description.
        
        Returns:
            Dictionary mapping validator names to descriptions
        """
        result = {}
        for name, validator_class in cls._validators.items():
            # Create a temporary instance to get description
            try:
                config = ValidatorConfig()
                instance = validator_class(config)
                result[name] = instance.get_description()
            except Exception:
                result[name] = f"Validator: {name}"
        return result
    
    @classmethod
    def create_validator(cls, name: str, config: ValidatorConfig) -> Optional[BaseValidator]:
        """
        Create an instance of a registered validator.
        
        Args:
            name: Validator name or alias
            config: Validator configuration
        
        Returns:
            Validator instance or None if not found
        """
        validator_class = cls.get_validator_class(name)
        if validator_class:
            return validator_class(config)
        return None
    
    @classmethod
    def get_validator_by_target(cls, target: str) -> List[str]:
        """
        Get validators that support a specific target.
        
        Args:
            target: Target type (e.g., 'changelog', 'version', 'branch')
        
        Returns:
            List of validator names that support the target
        """
        result = []
        for name, validator_class in cls._validators.items():
            try:
                config = ValidatorConfig()
                instance = validator_class(config)
                if target in instance.get_supported_targets():
                    result.append(name)
            except Exception:
                pass
        return result

