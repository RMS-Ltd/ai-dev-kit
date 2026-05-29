"""
Init command for ai-dev-kit CLI tool.

Initializes ai-dev-kit in the current project by creating .ai-dev-kit.yaml configuration file.
"""

import argparse
from pathlib import Path
from typing import Optional

from cli.commands import BaseCommand
from cli.config import Config
from cli.utils import print_success, print_error, print_info, get_project_root


class InitCommand(BaseCommand):
    """Command to initialize ai-dev-kit in a project."""
    
    @staticmethod
    def get_description() -> str:
        """Get command description."""
        return "Initialize ai-dev-kit in the current project"
    
    @staticmethod
    def add_arguments(parser: argparse.ArgumentParser) -> None:
        """Add init command arguments."""
        parser.add_argument(
            "--force",
            action="store_true",
            help="Overwrite existing .ai-dev-kit.yaml if it exists",
        )
        parser.add_argument(
            "--backend",
            type=str,
            default="git-submodule",
            choices=["git-submodule", "git-subtree", "npm", "pip"],
            help="Default dependency backend (default: git-submodule)",
        )
    
    def execute(self) -> int:
        """Execute the init command."""
        project_root = get_project_root()
        if project_root is None:
            project_root = Path.cwd()
            print_info(f"No project root detected, using current directory: {project_root}")
        else:
            print_info(f"Project root detected: {project_root}")
        
        config_path = project_root / ".ai-dev-kit.yaml"
        
        # Check if config already exists
        if config_path.exists() and not self.args.force:
            print_error(f"Configuration file already exists: {config_path}")
            print_error("Use --force to overwrite existing configuration")
            return 1
        
        # Create configuration
        try:
            config = Config(config_path)
            config.set("default_backend", self.args.backend)
            config.save()
            
            print_success(f"Initialized ai-dev-kit in {project_root}")
            print_info(f"Configuration file: {config_path}")
            print_info(f"Default backend: {self.args.backend}")
            return 0
        except Exception as e:
            print_error(f"Failed to initialize ai-dev-kit: {e}")
            return 1

