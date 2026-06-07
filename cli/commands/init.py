"""
Init command for ai-dev-kit CLI tool.

Initializes ai-dev-kit in the current project by creating .ai-dev-kit.yaml configuration file.
"""

import argparse
from pathlib import Path

from cli.adk_version_display import print_session_banner
from cli.commands import BaseCommand
from cli.config import Config
from cli.localisation import (
    FR006_SUPPORTED_LOCALES,
    LOCALISATION_CONFIG_FILENAME,
    resolve_language_from_args,
    write_localisation_config,
)
from cli.utils import get_project_root, print_error, print_info, print_success


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
            help=(
                "Overwrite existing .ai-dev-kit.yaml and ai-dev-kit-config.yaml if they exist"
            ),
        )
        parser.add_argument(
            "--backend",
            type=str,
            default="git-submodule",
            choices=["git-submodule", "git-subtree", "npm", "pip"],
            help="Default dependency backend (default: git-submodule)",
        )
        parser.add_argument(
            "--locale",
            type=str,
            choices=list(FR006_SUPPORTED_LOCALES),
            default=None,
            help="Locale tag (skips interactive prompt; canonical per ADR-024)",
        )
        parser.add_argument(
            "--language",
            type=str,
            choices=["en-GB", "en-US"],
            default=None,
            help="English variant alias for --locale (backward compatible)",
        )
        parser.add_argument(
            "--non-interactive",
            action="store_true",
            help="Skip language prompt; default to UK English (en-GB)",
        )
    
    def execute(self) -> int:
        """Execute the init command."""
        project_root = get_project_root()
        if project_root is None:
            project_root = Path.cwd()
            print_info(f"No project root detected, using current directory: {project_root}")
        else:
            print_info(f"Project root detected: {project_root}")

        print_session_banner(project_root)

        localisation_path = project_root / LOCALISATION_CONFIG_FILENAME
        if localisation_path.exists() and not self.args.force:
            print_error(f"Configuration file already exists: {localisation_path}")
            print_error("Use --force to overwrite existing configuration")
            return 1

        try:
            locale_tag = getattr(self.args, "locale", None)
            locale = resolve_language_from_args(
                self.args.language,
                self.args.non_interactive or locale_tag is not None,
                locale=locale_tag,
            )
            write_localisation_config(project_root, locale)
            print_success(f"Language preference saved: {locale['language']} ({locale['variant']})")
            print_info(f"Localisation config: {localisation_path}")
        except Exception as e:
            print_error(f"Failed to write language configuration: {e}")
            return 1

        config_path = project_root / ".ai-dev-kit.yaml"
        
        if config_path.exists() and not self.args.force:
            print_error(f"Configuration file already exists: {config_path}")
            print_error("Use --force to overwrite existing configuration")
            return 1
        
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
