"""
List command for ai-dev-kit CLI tool.

Lists available frameworks.
"""

import argparse
from pathlib import Path

from cli.commands import BaseCommand
from cli.utils import print_success, print_error, print_info, print_warning


class ListCommand(BaseCommand):
    """Command to list available frameworks."""
    
    @staticmethod
    def get_description() -> str:
        """Get command description."""
        return "List available frameworks"
    
    @staticmethod
    def add_arguments(parser: argparse.ArgumentParser) -> None:
        """Add list command arguments."""
        parser.add_argument(
            "--versions",
            action="store_true",
            help="Show available versions for each framework",
        )
        parser.add_argument(
            "--json",
            action="store_true",
            help="Output results in JSON format",
        )
    
    def execute(self) -> int:
        """Execute the list command."""
        # TODO: Implement actual framework listing when framework registry is available
        # For now, show placeholder with known frameworks from design doc
        
        known_frameworks = {
            "numbering-versioning": ["2.0.0", "2.1.0"],
            "workflow-mgt": ["2.0.0"],
            "kanban": ["1.0.0"],
            "debug-path": ["1.0.0"],
            "doc-lifecycle": ["1.0.0"],
        }
        
        if self.args.json:
            import json
            result = {}
            for framework, versions in known_frameworks.items():
                if self.args.versions:
                    result[framework] = versions
                else:
                    result[framework] = versions[0] if versions else "unknown"
            print(json.dumps(result, indent=2))
            return 0
        
        # Show frameworks in human-readable format
        print_info("Available Frameworks:")
        print_info("")  # Blank line for readability
        
        for framework_name, versions in known_frameworks.items():
            if self.args.versions:
                versions_str = ", ".join(versions)
                print_info(f"  {framework_name} ({versions_str})")
            else:
                latest_version = versions[0] if versions else "unknown"
                print_info(f"  {framework_name} ({latest_version})")
        
        print_warning("Note: Framework listing is currently static. Full registry integration pending.")
        
        return 0

