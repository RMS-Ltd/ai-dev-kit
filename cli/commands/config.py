"""
Config command for ai-dev-kit CLI tool.

Manages .ai-dev-kit.yaml configuration file.
"""

import argparse
import json
from pathlib import Path
from typing import Dict

from cli.commands import BaseCommand
from cli.config import Config
from cli.utils import print_success, print_error, print_info, print_warning, get_project_root


class ConfigCommand(BaseCommand):
    """Command to manage ai-dev-kit configuration."""
    
    @staticmethod
    def get_description() -> str:
        """Get command description."""
        return "Manage ai-dev-kit configuration"
    
    @staticmethod
    def add_arguments(parser: argparse.ArgumentParser) -> None:
        """Add config command arguments."""
        config_subparsers = parser.add_subparsers(
            dest="config_action",
            help="Configuration action",
            metavar="ACTION",
        )
        
        # get subcommand
        get_parser = config_subparsers.add_parser(
            "get",
            help="Get a configuration value",
            description="Get a configuration value by key (supports dot notation)",
        )
        get_parser.add_argument(
            "key",
            type=str,
            help="Configuration key (e.g., 'default_backend' or 'frameworks.workflow-mgt.version')",
        )
        get_parser.add_argument(
            "--json",
            action="store_true",
            help="Output value in JSON format",
        )
        
        # set subcommand
        set_parser = config_subparsers.add_parser(
            "set",
            help="Set a configuration value",
            description="Set a configuration value by key (supports dot notation)",
        )
        set_parser.add_argument(
            "key",
            type=str,
            help="Configuration key (e.g., 'default_backend' or 'frameworks.workflow-mgt.version')",
        )
        set_parser.add_argument(
            "value",
            type=str,
            help="Value to set (will be parsed as YAML)",
        )
        
        # list subcommand
        list_parser = config_subparsers.add_parser(
            "list",
            help="List all configuration",
            description="Show all configuration values",
        )
        list_parser.add_argument(
            "--json",
            action="store_true",
            help="Output configuration in JSON format",
        )
        
        # reset subcommand
        reset_parser = config_subparsers.add_parser(
            "reset",
            help="Reset configuration to defaults",
            description="Reset configuration file to default values",
        )
        reset_parser.add_argument(
            "--force",
            action="store_true",
            help="Reset without confirmation",
        )
        
        # validate subcommand
        validate_parser = config_subparsers.add_parser(
            "validate",
            help="Validate configuration",
            description="Validate configuration file against schema",
        )
        validate_parser.add_argument(
            "--fix",
            action="store_true",
            help="Automatically fix validation errors where possible",
        )
    
    def execute(self) -> int:
        """Execute the config command."""
        project_root = get_project_root()
        if project_root is None:
            project_root = Path.cwd()
            print_warning("No project root detected, using current directory")
        
        config = Config(project_root / ".ai-dev-kit.yaml")
        action = self.args.config_action
        
        if action == "get":
            return self._handle_get(config)
        elif action == "set":
            return self._handle_set(config)
        elif action == "list":
            return self._handle_list(config)
        elif action == "reset":
            return self._handle_reset(config)
        elif action == "validate":
            return self._handle_validate(config)
        else:
            print_error("No action specified. Use 'get', 'set', 'list', 'reset', or 'validate'")
            return 1
    
    def _handle_get(self, config: Config) -> int:
        """Handle get subcommand."""
        value = config.get(self.args.key)
        
        if value is None:
            print_error(f"Configuration key '{self.args.key}' not found")
            return 1
        
        if self.args.json:
            print(json.dumps(value, indent=2))
        else:
            if isinstance(value, (dict, list)):
                print(json.dumps(value, indent=2))
            else:
                print(value)
        
        return 0
    
    def _handle_set(self, config: Config) -> int:
        """Handle set subcommand."""
        try:
            # Try to parse value as YAML (handles strings, numbers, booleans, lists, dicts)
            import yaml
            try:
                parsed_value = yaml.safe_load(self.args.value)
            except Exception:
                # If YAML parsing fails, treat as string
                parsed_value = self.args.value
            
            config.set(self.args.key, parsed_value)
            config.save()
            
            print_success(f"Set {self.args.key} = {parsed_value}")
            return 0
        except Exception as e:
            print_error(f"Failed to set configuration: {e}")
            return 1
    
    def _handle_list(self, config: Config) -> int:
        """Handle list subcommand."""
        all_config = config.list_all()
        
        if self.args.json:
            print(json.dumps(all_config, indent=2))
        else:
            self._print_config_human_readable(all_config)
        
        return 0
    
    def _print_config_human_readable(self, config: Dict) -> None:
        """Print configuration in human-readable format."""
        print_info("Configuration (.ai-dev-kit.yaml):")
        print()
        
        # Print top-level settings
        if "version" in config:
            print(f"  version: {config['version']}")
        if "default_backend" in config:
            print(f"  default_backend: {config['default_backend']}")
        if "auto_check" in config:
            print(f"  auto_check: {config['auto_check']}")
        if "check_interval" in config:
            print(f"  check_interval: {config['check_interval']}")
        if "notification_channel" in config:
            print(f"  notification_channel: {config['notification_channel']}")
        
        # Print update policy
        if "update_policy" in config:
            print(f"  update_policy:")
            policy = config["update_policy"]
            for level, action in policy.items():
                print(f"    {level}: {action}")
        
        # Print frameworks
        if "frameworks" in config and config["frameworks"]:
            print(f"  frameworks:")
            for name, info in config["frameworks"].items():
                print(f"    {name}:")
                for key, value in info.items():
                    print(f"      {key}: {value}")
        else:
            print(f"  frameworks: {{}}")
    
    def _handle_reset(self, config: Config) -> int:
        """Handle reset subcommand."""
        if not self.args.force:
            print_warning("This will reset all configuration to defaults.")
            print_warning("Use --force to proceed without confirmation.")
            return 1
        
        try:
            config.reset_to_defaults()
            config.save()
            print_success("Configuration reset to defaults")
            return 0
        except Exception as e:
            print_error(f"Failed to reset configuration: {e}")
            return 1
    
    def _handle_validate(self, config: Config) -> int:
        """Handle validate subcommand."""
        errors = config.validate()
        
        if not errors:
            print_success("Configuration is valid")
            return 0
        
        print_error(f"Configuration validation failed ({len(errors)} error(s)):")
        for error in errors:
            print_error(f"  - {error}")
        
        if self.args.fix:
            print_info("Attempting to fix validation errors...")
            # Try to fix common issues
            fixed = False
            
            # Fix missing required fields
            if "version" not in config._config:
                config._config["version"] = "1.0.0"
                fixed = True
            if "default_backend" not in config._config:
                config._config["default_backend"] = "git-submodule"
                fixed = True
            if "frameworks" not in config._config:
                config._config["frameworks"] = {}
                fixed = True
            
            # Fix invalid backend
            if "default_backend" in config._config:
                backend = config._config["default_backend"]
                if backend not in ["git-submodule", "git-subtree", "npm", "pip"]:
                    config._config["default_backend"] = "git-submodule"
                    fixed = True
            
            if fixed:
                config.save()
                print_success("Fixed some validation errors. Please review and validate again.")
            else:
                print_warning("Could not automatically fix validation errors. Please fix manually.")
        
        return 1

