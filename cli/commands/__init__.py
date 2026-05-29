"""
Command modules for the ai-dev-kit CLI tool.

This package contains all command implementations.
"""

from typing import Type
from abc import ABC, abstractmethod
import argparse


class BaseCommand(ABC):
    """
    Base class for all CLI commands.
    
    All commands should inherit from this class and implement the required methods.
    """
    
    def __init__(self, args: argparse.Namespace):
        """
        Initialize the command with parsed arguments.
        
        Args:
            args: Parsed command-line arguments
        """
        self.args = args
    
    @abstractmethod
    def execute(self) -> int:
        """
        Execute the command.
        
        Returns:
            Exit code (0 for success, non-zero for failure)
        """
        pass
    
    @staticmethod
    @abstractmethod
    def add_arguments(parser: argparse.ArgumentParser) -> None:
        """
        Add command-specific arguments to the argument parser.
        
        Args:
            parser: Argument parser to add arguments to
        """
        pass
    
    @staticmethod
    @abstractmethod
    def get_description() -> str:
        """
        Get a short description of the command.
        
        Returns:
            Command description
        """
        pass

