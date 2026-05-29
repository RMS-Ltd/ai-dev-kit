"""
Install command for ai-dev-kit CLI tool.

Installs frameworks as dependencies using the specified backend.
"""

import argparse
import os
import re
from datetime import datetime
from pathlib import Path
from typing import Any, Dict, List, Tuple, Optional, Callable

from cli.commands import BaseCommand
from cli.config import Config
from cli.exceptions import AIDevKitError, InvalidInputError, BackendNotAvailableError, InstallationError, AppleSDKLicenseError
from cli.validation import validate_framework_spec, validate_backend, validate_path
from cli.backends import BackendRegistry, select_backend, get_backend
from cli.logging import create_install_logger, close_install_logger
from cli.utils import (
    print_success,
    print_error,
    print_info,
    print_warning,
    get_project_root,
    handle_error,
)


def parse_framework_spec(spec: str) -> Tuple[str, Optional[str]]:
    """
    Parse framework specification (framework[@version]).
    
    Args:
        spec: Framework specification string
    
    Returns:
        Tuple of (framework_name, version)
    """
    match = re.match(r"^([^@]+)(?:@(.+))?$", spec)
    if not match:
        raise ValueError(f"Invalid framework specification: {spec}")
    
    framework = match.group(1)
    version = match.group(2) if match.group(2) else None
    
    return framework, version


class InstallCommand(BaseCommand):
    """Command to install frameworks."""
    
    @staticmethod
    def get_description() -> str:
        """Get command description."""
        return "Install frameworks as dependencies"
    
    @staticmethod
    def add_arguments(parser: argparse.ArgumentParser) -> None:
        """Add install command arguments."""
        parser.add_argument(
            "frameworks",
            nargs="+",
            help="Framework(s) to install (format: framework[@version])",
        )
        parser.add_argument(
            "--backend",
            type=str,
            choices=["git-submodule", "git-subtree", "npm", "pip"],
            help="Dependency backend to use (overrides default)",
        )
        parser.add_argument(
            "--path",
            type=str,
            help="Custom installation path",
        )
        parser.add_argument(
            "--dry-run",
            action="store_true",
            help="Preview changes without applying",
        )
        parser.add_argument(
            "--log-path",
            type=str,
            help="Custom directory for install logs (overrides install_logging.path in config)",
        )
        parser.add_argument(
            "--no-install-log",
            action="store_true",
            help="Disable per-run install logging (overrides install_logging.enabled in config)",
        )
    
    def execute(self) -> int:
        """Execute the install command."""
        try:
            step_counter = 0

            def next_step_id() -> str:
                nonlocal step_counter
                step_counter += 1
                return f"cli-step-{step_counter:04d}"

            def make_event(intent: str, action: str, status: str, details: str, **extra: Any) -> Dict[str, Any]:
                payload: Dict[str, Any] = {
                    "intent": {"summary": intent},
                    "action": {"summary": action},
                    "result": {"status": status, "details": details},
                }
                payload.update(extra)
                return payload

            project_root = get_project_root()
            if project_root is None:
                project_root = Path.cwd()
                print_warning("No project root detected, using current directory")
            
            # Load or create configuration
            config = Config(project_root / ".ai-dev-kit.yaml")
            
            # Install logging setup (FR-047 – Phase 1 + Phase 2 JSON support)
            log, log_dir, log_file, fh = create_install_logger(
                project_root=project_root,
                config=config,
                args=self.args,
            )
            
            # Parse and validate framework specifications
            frameworks_to_install: List[Tuple[str, Optional[str]]] = []
            for spec in self.args.frameworks:
                try:
                    framework, version = validate_framework_spec(spec)
                    frameworks_to_install.append((framework, version))
                except InvalidInputError as e:
                    print_error(str(e))
                    log(
                        "ERROR",
                        "install.spec",
                        f"Invalid framework spec '{spec}': {e}",
                        step_id=next_step_id(),
                        event=make_event(
                            "Validate framework specification",
                            f"Parse and validate framework spec '{spec}'",
                            "error",
                            str(e),
                        ),
                    )
                    return 1
            
            # Determine and validate backend
            backend_name = self.args.backend or config.get("default_backend", "git-submodule")
            try:
                backend_name = validate_backend(backend_name)
            except InvalidInputError as e:
                print_error(str(e))
                log(
                    "ERROR",
                    "install.backend",
                    f"Invalid backend '{backend_name}': {e}",
                    step_id=next_step_id(),
                    event=make_event(
                        "Validate selected install backend",
                        f"Validate backend '{backend_name}'",
                        "error",
                        str(e),
                    ),
                )
                return 1
            
            # Select backend
            selected_backend_name = select_backend(
                preferred=backend_name,
                project_root=project_root,
                auto_detect=True,
            )
            
            if selected_backend_name is None:
                available = BackendRegistry.list_available_backends()
                log(
                    "ERROR",
                    "install.backend",
                    f"Backend '{backend_name}' not available. Available: {available}",
                    step_id=next_step_id(),
                    event=make_event(
                        "Resolve available backend",
                        f"Select backend '{backend_name}' with auto-detect",
                        "error",
                        f"Backend unavailable. Available: {available}",
                    ),
                )
                raise BackendNotAvailableError(backend_name, available)
            
            backend_class = get_backend(selected_backend_name)
            if backend_class is None:
                available = BackendRegistry.get_registry().get_available_backends()
                log(
                    "ERROR",
                    "install.backend",
                    f"Backend '{selected_backend_name}' not registered. Available: {available}",
                    step_id=next_step_id(),
                    event=make_event(
                        "Load backend implementation",
                        f"Resolve backend class for '{selected_backend_name}'",
                        "error",
                        f"Backend not registered. Available: {available}",
                    ),
                )
                raise BackendNotAvailableError(selected_backend_name, available)
            backend = backend_class()
            
            # Validate and determine installation path
            install_path_str = self.args.path or "frameworks"
            try:
                install_path = validate_path(install_path_str, must_exist=False, must_be_directory=True)
            except InvalidInputError as e:
                print_error(str(e))
                log(
                    "ERROR",
                    "install.path",
                    f"Invalid install path '{install_path_str}': {e}",
                    step_id=next_step_id(),
                    event=make_event(
                        "Validate install path",
                        f"Validate path '{install_path_str}'",
                        "error",
                        str(e),
                    ),
                )
                return 1
            
            if self.args.dry_run:
                print_info("DRY RUN MODE - No changes will be made")
                print_info(f"Project root: {project_root}")
                print_info(f"Backend: {backend_name}")
                print_info(f"Installation path: {install_path}")
                print_info("Frameworks to install:")
                for framework, version in frameworks_to_install:
                    version_str = f"@{version}" if version else " (latest)"
                    print_info(f"  - {framework}{version_str}")
                log(
                    "INFO",
                    "install.main",
                    "Dry run only - no changes will be made",
                    step_id=next_step_id(),
                    event=make_event(
                        "Preview install execution",
                        "Run dry-run path without mutating filesystem",
                        "ok",
                        "Dry run completed",
                    ),
                )
                close_install_logger(fh, log_dir, config)
                return 0
            
            # Perform installation
            failed_installations = []
            for framework, version in frameworks_to_install:
                try:
                    framework_path = install_path / framework
                    version_str = version or "latest"
                    
                    print_info(f"Installing {framework}@{version_str}...")
                    framework_step = next_step_id()
                    log(
                        "INFO",
                        "install.framework",
                        f"Installing {framework}@{version_str} to {framework_path}",
                        step_id=framework_step,
                        event=make_event(
                            "Install selected framework",
                            f"Start backend installation for {framework}@{version_str}",
                            "ok",
                            f"Installation started for {framework}@{version_str}",
                            framework=framework,
                            version=version_str,
                            install_path=str(framework_path),
                        ),
                    )
                    
                    # Get source URL from config or use default
                    source = config.get(f"frameworks.{framework}.source")
                    if not source:
                        # Default source (can be enhanced later)
                        source = f"https://github.com/earlution/ai-dev-kit.git"
                    source_step = next_step_id()
                    log(
                        "INFO",
                        "install.framework",
                        f"Using source {source} via backend {backend_name}",
                        step_id=source_step,
                        parent_step_id=framework_step,
                        event=make_event(
                            "Resolve source and backend",
                            f"Use backend '{backend_name}' with source '{source}'",
                            "ok",
                            "Source and backend resolved",
                            framework=framework,
                            backend=backend_name,
                            source=source,
                        ),
                    )
                    
                    success = backend.install(
                        framework_name=framework,
                        version=version,
                        path=framework_path,
                        source=source
                    )
                    
                    if success:
                        print_success(f"Installed {framework}@{version_str}")
                        log(
                            "INFO",
                            "install.framework",
                            f"Installed {framework}@{version_str} successfully",
                            step_id=next_step_id(),
                            parent_step_id=framework_step,
                            event=make_event(
                                "Finalize framework installation",
                                f"Persist installation result for {framework}@{version_str}",
                                "ok",
                                "Framework installed successfully",
                                framework=framework,
                                backend=backend_name,
                            ),
                        )
                        # Update configuration
                        config.add_framework(
                            name=framework,
                            version=version_str,
                            backend=backend_name,
                            path=str(framework_path),
                            source=source
                        )
                        config.save()
                    else:
                        log(
                            "ERROR",
                            "install.framework",
                            f"Backend install reported failure for {framework}@{version_str}",
                            step_id=next_step_id(),
                            parent_step_id=framework_step,
                            event=make_event(
                                "Run backend install operation",
                                f"Execute backend install for {framework}@{version_str}",
                                "error",
                                "Backend returned unsuccessful result",
                                framework=framework,
                                backend=backend_name,
                            ),
                        )
                        raise InstallationError(
                            framework,
                            "Installation failed (see error messages above)",
                            backend_name
                        )
                except Exception as e:
                    if isinstance(e, (AIDevKitError, InstallationError, AppleSDKLicenseError)):
                        print_error(str(e))
                    else:
                        print_error(f"Failed to install {framework}: {str(e)}")
                    log(
                        "ERROR",
                        "install.framework",
                        f"Failed to install {framework}: {e}",
                        step_id=next_step_id(),
                        event=make_event(
                            "Handle framework installation failure",
                            f"Capture failure for framework '{framework}'",
                            "error",
                            str(e),
                            framework=framework,
                        ),
                    )
                    failed_installations.append(framework)
            
            if failed_installations:
                print_error(f"Failed to install: {', '.join(failed_installations)}")
                log(
                    "ERROR",
                    "install.main",
                    f"Failed installations: {', '.join(failed_installations)}",
                    step_id=next_step_id(),
                    event=make_event(
                        "Complete install run with failures",
                        "Aggregate failed frameworks for run summary",
                        "error",
                        f"Failed installations: {', '.join(failed_installations)}",
                        failed_frameworks=failed_installations,
                    ),
                )
                close_install_logger(fh, log_dir, config)
                return 1
            
            print_success(f"Successfully installed {len(frameworks_to_install)} framework(s)")
            log(
                "INFO",
                "install.main",
                f"Successfully installed {len(frameworks_to_install)} framework(s)",
                step_id=next_step_id(),
                event=make_event(
                    "Complete install run successfully",
                    "Summarize successful framework installation run",
                    "ok",
                    f"Installed {len(frameworks_to_install)} framework(s)",
                    total_frameworks=len(frameworks_to_install),
                ),
            )

            close_install_logger(fh, log_dir, config)
            return 0
            
        except AIDevKitError as e:
            return handle_error(e, getattr(self.args, 'debug', False))
        except Exception as e:
            return handle_error(e, getattr(self.args, 'debug', False))  # Return error until backends are implemented

