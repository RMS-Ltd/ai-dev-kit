#!/usr/bin/env python3
"""
ai-dev-kit CLI Tool Entry Point

Main entry point for the ai-dev-kit command-line interface.
"""

import sys
import argparse
from typing import Dict, Type

from cli.commands import BaseCommand
from cli.utils import print_error, handle_error

# Import commands
from cli.commands.init import InitCommand
from cli.commands.install import InstallCommand
from cli.commands.update import UpdateCommand
from cli.commands.check import CheckCommand
from cli.commands.status import StatusCommand
from cli.commands.list import ListCommand
from cli.commands.config import ConfigCommand
from cli.commands.migrate import MigrateCommand
from cli.commands.remove import RemoveCommand
from cli.commands.logs import LogsCommand


# Command registry
_COMMANDS: Dict[str, Type[BaseCommand]] = {
    "init": InitCommand,
    "install": InstallCommand,
    "update": UpdateCommand,
    "check": CheckCommand,
    "status": StatusCommand,
    "list": ListCommand,
    "config": ConfigCommand,
    "migrate": MigrateCommand,
    "remove": RemoveCommand,
    "uninstall": RemoveCommand,
    "logs": LogsCommand,
}


def register_command(name: str, command_class: Type[BaseCommand]) -> None:
    """
    Register a command with the CLI.
    
    Args:
        name: Command name (e.g., 'install', 'update')
        command_class: Command class that implements BaseCommand
    """
    _COMMANDS[name] = command_class


def create_parser() -> argparse.ArgumentParser:
    """
    Create the main argument parser.
    
    Returns:
        Configured argument parser
    """
    parser = argparse.ArgumentParser(
        prog="ai-dev-kit",
        description="Unified CLI tool for managing AI Dev Kit framework dependencies",
        formatter_class=argparse.RawDescriptionHelpFormatter,
    )
    
    parser.add_argument(
        "--version",
        action="version",
        version="%(prog)s 0.1.0",
        help="Show version and exit",
    )
    
    # Create subparsers for commands
    subparsers = parser.add_subparsers(
        dest="command",
        help="Command to execute",
        metavar="COMMAND",
    )
    
    # Register commands
    for name, command_class in _COMMANDS.items():
        subparser = subparsers.add_parser(
            name,
            help=command_class.get_description(),
            description=command_class.get_description(),
        )
        command_class.add_arguments(subparser)
    
    return parser


def main() -> int:
    """
    Main entry point for the CLI tool.
    
    Returns:
        Exit code (0 for success, non-zero for failure)
    """
    parser = create_parser()
    args = parser.parse_args()
    
    # If no command specified, show help
    if not args.command:
        parser.print_help()
        return 1
    
    # Get command class
    command_class = _COMMANDS.get(args.command)
    
    if not command_class:
        print_error(f"Unknown command: {args.command}")
        print_error(f"Available commands: {', '.join(_COMMANDS.keys())}")
        return 1
    
    # Create and execute command
    try:
        command = command_class(args)
        return command.execute()
    except Exception as e:
        debug = getattr(args, 'debug', False)
        return handle_error(e, debug)


if __name__ == "__main__":
    sys.exit(main())

