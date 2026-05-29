"""
Status command for ai-dev-kit CLI tool.

Shows status of installed frameworks.
"""

import argparse
from pathlib import Path
from typing import Optional

from cli.commands import BaseCommand
from cli.config import Config
from cli.utils import print_success, print_error, print_info, print_warning, get_project_root


class StatusCommand(BaseCommand):
    """Command to show framework status."""
    
    @staticmethod
    def get_description() -> str:
        """Get command description."""
        return "Show status of installed frameworks"
    
    @staticmethod
    def add_arguments(parser: argparse.ArgumentParser) -> None:
        """Add status command arguments."""
        parser.add_argument(
            "framework",
            nargs="?",
            help="Framework to show status for (omit to show all frameworks)",
        )
        parser.add_argument(
            "--json",
            action="store_true",
            help="Output results in JSON format",
        )
    
    def execute(self) -> int:
        """Execute the status command."""
        project_root = get_project_root()
        if project_root is None:
            print_error("No project root detected. Run 'ai-dev-kit init' first.")
            return 1
        
        config = Config(project_root / ".ai-dev-kit.yaml")
        installed_frameworks = config.get_frameworks()
        
        if not installed_frameworks:
            if self.args.json:
                print("{}")
            else:
                print_warning("No frameworks installed. Use 'ai-dev-kit install' first.")
            return 0
        
        # Determine which frameworks to show
        frameworks_to_show = []
        if self.args.framework:
            if self.args.framework not in installed_frameworks:
                print_error(f"Framework '{self.args.framework}' is not installed.")
                print_info(f"Installed frameworks: {', '.join(installed_frameworks.keys())}")
                return 1
            frameworks_to_show = [self.args.framework]
        else:
            frameworks_to_show = list(installed_frameworks.keys())
        
        if self.args.json:
            # TODO: Implement JSON output
            import json
            result = {}
            for framework_name in frameworks_to_show:
                framework_info = installed_frameworks[framework_name]
                result[framework_name] = {
                    "version": framework_info.get("version", "unknown"),
                    "backend": framework_info.get("backend", "unknown"),
                    "path": framework_info.get("path", "unknown"),
                }
            print(json.dumps(result, indent=2))
            return 0
        
        # Show status in human-readable format
        print_info("Installed Frameworks:")
        print_info("")  # Blank line for readability
        
        for framework_name in frameworks_to_show:
            framework_info = installed_frameworks[framework_name]
            version = framework_info.get("version", "unknown")
            backend = framework_info.get("backend", "unknown")
            path = framework_info.get("path", "unknown")
            
            # Format output similar to design doc
            print_info(f"  {framework_name}: {version} ({backend})")
            if path != "unknown":
                print_info(f"    Path: {path}")
        
        return 0

