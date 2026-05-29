"""
Migrate command for ai-dev-kit CLI tool.

Converts copy-paste frameworks to dependency-based installations.
"""

import argparse
from pathlib import Path
from typing import Optional

from cli.commands import BaseCommand
from cli.config import Config
from cli.migration import detect_frameworks, convert_framework_to_dependency, validate_migration
from cli.utils import print_success, print_error, print_info, print_warning, get_project_root, handle_error
from cli.exceptions import AIDevKitError


class MigrateCommand(BaseCommand):
    """Command to migrate copy-paste frameworks to dependencies."""
    
    @staticmethod
    def get_description() -> str:
        """Get command description."""
        return "Migrate copy-paste frameworks to dependency-based installations"
    
    @staticmethod
    def add_arguments(parser: argparse.ArgumentParser) -> None:
        """Add migrate command arguments."""
        parser.add_argument(
            "--detect",
            action="store_true",
            help="Detect copy-paste frameworks in the project",
        )
        parser.add_argument(
            "--convert",
            action="store_true",
            help="Convert detected frameworks to dependencies",
        )
        parser.add_argument(
            "--framework",
            type=str,
            help="Specific framework to convert (by name or path)",
        )
        parser.add_argument(
            "--backend",
            type=str,
            choices=["git-submodule", "git-subtree", "npm", "pip"],
            default="git-submodule",
            help="Backend to use for dependency installation (default: git-submodule)",
        )
        parser.add_argument(
            "--dry-run",
            action="store_true",
            help="Preview migration without applying changes",
        )
        parser.add_argument(
            "--validate",
            action="store_true",
            help="Validate that migration was successful",
        )
    
    def execute(self) -> int:
        """Execute the migrate command."""
        try:
            project_root = get_project_root()
            if project_root is None:
                project_root = Path.cwd()
                print_warning("No project root detected, using current directory")
            
            # Handle detect
            if self.args.detect:
                return self._handle_detect(project_root)
            
            # Handle convert
            if self.args.convert:
                return self._handle_convert(project_root)
            
            # Handle validate
            if self.args.validate:
                return self._handle_validate(project_root)
            
            # Default: show help
            print_error("No action specified. Use --detect, --convert, or --validate")
            print_info("Examples:")
            print_info("  ai-dev-kit migrate --detect")
            print_info("  ai-dev-kit migrate --convert")
            print_info("  ai-dev-kit migrate --convert --framework workflow-mgmt")
            print_info("  ai-dev-kit migrate --validate")
            return 1
            
        except AIDevKitError as e:
            return handle_error(e, getattr(self.args, 'debug', False))
        except Exception as e:
            return handle_error(e, getattr(self.args, 'debug', False))
    
    def _handle_detect(self, project_root: Path) -> int:
        """Handle detect subcommand."""
        print_info("Detecting copy-paste frameworks...")
        print_info("")
        
        detected = detect_frameworks(project_root)
        
        if not detected:
            print_info("No copy-paste frameworks detected.")
            print_info("")
            print_info("If you have frameworks installed, they may already be dependencies,")
            print_info("or they may be in a location not searched.")
            return 0
        
        print_success(f"Found {len(detected)} framework(s):")
        print_info("")
        
        for framework in detected:
            confidence_pct = int(framework.confidence * 100)
            version_str = f" (version: {framework.detected_version})" if framework.detected_version else ""
            print_info(f"  • {framework.name}")
            print_info(f"    Path: {framework.path}")
            print_info(f"    Type: {framework.framework_type}")
            print_info(f"    Confidence: {confidence_pct}%{version_str}")
            print_info("")
        
        print_info("To convert these frameworks to dependencies, run:")
        print_info("  ai-dev-kit migrate --convert")
        print_info("")
        print_info("Or convert a specific framework:")
        print_info(f"  ai-dev-kit migrate --convert --framework {detected[0].name}")
        
        return 0
    
    def _handle_convert(self, project_root: Path) -> int:
        """Handle convert subcommand."""
        if self.args.dry_run:
            print_info("DRY RUN MODE - No changes will be made")
            print_info("")
        
        # Detect frameworks
        detected = detect_frameworks(project_root)
        
        if not detected:
            print_error("No copy-paste frameworks detected to convert.")
            print_info("Run 'ai-dev-kit migrate --detect' to see available frameworks.")
            return 1
        
        # Filter by specific framework if requested
        frameworks_to_convert = detected
        if self.args.framework:
            frameworks_to_convert = [
                f for f in detected
                if self.args.framework.lower() in f.name.lower() or
                   self.args.framework.lower() in str(f.path).lower()
            ]
            
            if not frameworks_to_convert:
                print_error(f"Framework '{self.args.framework}' not found in detected frameworks.")
                print_info("Detected frameworks:")
                for f in detected:
                    print_info(f"  - {f.name} ({f.path})")
                return 1
        
        # Convert each framework
        print_info(f"Converting {len(frameworks_to_convert)} framework(s) to {self.args.backend} dependencies...")
        print_info("")
        
        failed_conversions = []
        for framework in frameworks_to_convert:
            print_info(f"Converting {framework.name}...")
            
            success, message = convert_framework_to_dependency(
                framework=framework,
                backend=self.args.backend,
                project_root=project_root,
                dry_run=self.args.dry_run
            )
            
            if success:
                if self.args.dry_run:
                    print_info(f"  ✓ {message}")
                else:
                    print_success(f"  ✓ {message}")
            else:
                print_error(f"  ✗ {message}")
                failed_conversions.append(framework.name)
            print_info("")
        
        if failed_conversions:
            print_error(f"Failed to convert: {', '.join(failed_conversions)}")
            return 1
        
        if self.args.dry_run:
            print_info("DRY RUN complete. Run without --dry-run to apply changes.")
        else:
            print_success(f"Successfully converted {len(frameworks_to_convert)} framework(s)")
            print_info("")
            print_info("Next steps:")
            print_info("  1. Review .ai-dev-kit.yaml configuration")
            print_info("  2. Run 'ai-dev-kit install <framework>' to complete installation")
            print_info("  3. Run 'ai-dev-kit migrate --validate' to verify migration")
        
        return 0
    
    def _handle_validate(self, project_root: Path) -> int:
        """Handle validate subcommand."""
        print_info("Validating migration...")
        print_info("")
        
        is_valid, issues = validate_migration(project_root)
        
        if is_valid:
            print_success("Migration validation passed!")
            print_info("")
            print_info("All migrated frameworks are properly configured.")
            return 0
        else:
            print_error(f"Migration validation failed ({len(issues)} issue(s)):")
            print_info("")
            for issue in issues:
                print_error(f"  • {issue}")
            print_info("")
            print_info("Please fix these issues and run validation again.")
            return 1

