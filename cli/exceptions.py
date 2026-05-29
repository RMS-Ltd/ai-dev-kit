"""
Custom exceptions for the ai-dev-kit CLI tool.

Provides structured error handling with recovery suggestions.
"""

from typing import Optional, List


class AIDevKitError(Exception):
    """Base exception for all ai-dev-kit errors."""
    
    def __init__(self, message: str, recovery_suggestions: Optional[List[str]] = None):
        """
        Initialize error.
        
        Args:
            message: Error message
            recovery_suggestions: Optional list of recovery suggestions
        """
        self.message = message
        self.recovery_suggestions = recovery_suggestions or []
        super().__init__(self.message)
    
    def __str__(self) -> str:
        """Return formatted error message."""
        if self.recovery_suggestions:
            suggestions = "\n".join(f"  • {s}" for s in self.recovery_suggestions)
            return f"{self.message}\n\nSuggestions:\n{suggestions}"
        return self.message


class FrameworkNotFoundError(AIDevKitError):
    """Raised when a framework is not found."""
    
    def __init__(self, framework_name: str, available_frameworks: Optional[List[str]] = None):
        """
        Initialize framework not found error.
        
        Args:
            framework_name: Name of the framework that was not found
            available_frameworks: Optional list of available framework names
        """
        message = f"Framework '{framework_name}' not found"
        suggestions = []
        
        if available_frameworks:
            suggestions.append(f"Available frameworks: {', '.join(available_frameworks)}")
            suggestions.append(f"Use 'ai-dev-kit list' to see all available frameworks")
        else:
            suggestions.append("Use 'ai-dev-kit list' to see available frameworks")
            suggestions.append("Check the framework name spelling")
        
        super().__init__(message, suggestions)
        self.framework_name = framework_name
        self.available_frameworks = available_frameworks


class VersionNotFoundError(AIDevKitError):
    """Raised when a framework version is not found."""
    
    def __init__(self, framework_name: str, version: str, available_versions: Optional[List[str]] = None):
        """
        Initialize version not found error.
        
        Args:
            framework_name: Name of the framework
            version: Version that was not found
            available_versions: Optional list of available versions
        """
        message = f"Version '{version}' not found for framework '{framework_name}'"
        suggestions = []
        
        if available_versions:
            suggestions.append(f"Available versions: {', '.join(available_versions[:10])}")
            if len(available_versions) > 10:
                suggestions.append(f"... and {len(available_versions) - 10} more")
            suggestions.append(f"Use 'ai-dev-kit list {framework_name}' to see all versions")
        else:
            suggestions.append(f"Use 'ai-dev-kit list {framework_name}' to see available versions")
            suggestions.append("Use 'latest' or omit version to use the latest version")
        
        super().__init__(message, suggestions)
        self.framework_name = framework_name
        self.version = version
        self.available_versions = available_versions


class BackendNotAvailableError(AIDevKitError):
    """Raised when a backend is not available."""
    
    def __init__(self, backend_name: str, available_backends: Optional[List[str]] = None):
        """
        Initialize backend not available error.
        
        Args:
            backend_name: Name of the backend that is not available
            available_backends: Optional list of available backends
        """
        message = f"Backend '{backend_name}' is not available"
        suggestions = []
        
        if available_backends:
            suggestions.append(f"Available backends: {', '.join(available_backends)}")
            suggestions.append(f"Use '--backend {available_backends[0]}' to use an available backend")
        else:
            suggestions.append("Install the required tools (Git, npm, or pip)")
            suggestions.append("Use 'ai-dev-kit status' to check backend availability")
        
        if backend_name == "git-submodule" or backend_name == "git-subtree":
            suggestions.append("Ensure Git is installed and in your PATH")
        elif backend_name == "npm":
            suggestions.append("Install Node.js and npm: https://nodejs.org/")
        elif backend_name == "pip":
            suggestions.append("Install Python and pip: https://www.python.org/")
        
        super().__init__(message, suggestions)
        self.backend_name = backend_name
        self.available_backends = available_backends


class InvalidInputError(AIDevKitError):
    """Raised when user input is invalid."""
    
    def __init__(self, field_name: str, value: str, expected_format: Optional[str] = None):
        """
        Initialize invalid input error.
        
        Args:
            field_name: Name of the field with invalid input
            value: Invalid value provided
            expected_format: Optional description of expected format
        """
        message = f"Invalid {field_name}: '{value}'"
        suggestions = []
        
        if expected_format:
            suggestions.append(f"Expected format: {expected_format}")
        
        if field_name == "framework specification":
            suggestions.append("Format: 'framework-name' or 'framework-name@version'")
            suggestions.append("Example: 'workflow-mgt' or 'workflow-mgt@2.0.0'")
        elif field_name == "version":
            suggestions.append("Use semantic versioning (e.g., '1.0.0') or 'latest'")
        elif field_name == "backend":
            suggestions.append("Valid backends: git-submodule, git-subtree, npm, pip")
        
        super().__init__(message, suggestions)
        self.field_name = field_name
        self.value = value
        self.expected_format = expected_format


class ConfigurationError(AIDevKitError):
    """Raised when there is a configuration error."""
    
    def __init__(self, message: str, config_key: Optional[str] = None):
        """
        Initialize configuration error.
        
        Args:
            message: Error message
            config_key: Optional configuration key that caused the error
        """
        suggestions = [
            "Run 'ai-dev-kit config validate' to check configuration",
            "Run 'ai-dev-kit config validate --fix' to attempt automatic fixes",
            "Check the .ai-dev-kit.yaml file for errors",
        ]
        
        if config_key:
            suggestions.append(f"Check the '{config_key}' configuration value")
        
        super().__init__(message, suggestions)
        self.config_key = config_key


class InstallationError(AIDevKitError):
    """Raised when installation fails."""
    
    def __init__(self, framework_name: str, reason: str, backend: Optional[str] = None):
        """
        Initialize installation error.
        
        Args:
            framework_name: Name of the framework that failed to install
            reason: Reason for installation failure
            backend: Optional backend that was used
        """
        message = f"Failed to install '{framework_name}': {reason}"
        suggestions = [
            f"Check network connectivity",
            f"Verify the framework source is accessible",
        ]
        
        if backend:
            suggestions.append(f"Try a different backend: 'ai-dev-kit install {framework_name} --backend <backend>'")
            if backend in ["npm", "pip"]:
                suggestions.append("The framework may not be published yet. Try using git-submodule or git-subtree backend")
        
        suggestions.append("Check error logs for more details")
        
        super().__init__(message, suggestions)
        self.framework_name = framework_name
        self.reason = reason
        self.backend = backend


class AppleSDKLicenseError(AIDevKitError):
    """Raised when Apple SDK license issues are detected."""
    
    def __init__(self, operation: str, error_details: Optional[str] = None):
        """
        Initialize Apple SDK license error.
        
        Args:
            operation: Operation that failed (e.g., 'git submodule add')
            error_details: Optional error details from subprocess
        """
        message = f"Apple SDK license issue detected during {operation}"
        suggestions = [
            "Install Xcode Command Line Tools: xcode-select --install",
            "Accept Xcode license: sudo xcodebuild -license accept",
            "Set up Xcode path: sudo xcode-select --switch /Applications/Xcode.app/Contents/Developer",
            "Try using package manager backend: --backend pip or --backend npm",
            "See Apple platform setup guide: https://github.com/earlution/ai-dev-kit/docs/apple-platform-setup.md"
        ]
        
        # Add specific suggestions based on error details
        if error_details:
            error_lower = error_details.lower()
            if "xcode-select" in error_lower:
                suggestions.insert(0, "Install Xcode Command Line Tools: xcode-select --install")
            elif "license" in error_lower:
                suggestions.insert(0, "Accept Xcode license: sudo xcodebuild -license accept")
            elif "command line tools" in error_lower:
                suggestions.insert(0, "Install Command Line Tools from System Preferences > Software Update")
        
        super().__init__(message, suggestions)
        self.operation = operation
        self.error_details = error_details


class UpdateError(AIDevKitError):
    """Raised when update fails."""
    
    def __init__(self, framework_name: str, reason: str):
        """
        Initialize update error.
        
        Args:
            framework_name: Name of the framework that failed to update
            reason: Reason for update failure
        """
        message = f"Failed to update '{framework_name}': {reason}"
        suggestions = [
            f"Check if '{framework_name}' is installed: 'ai-dev-kit status'",
            f"Check network connectivity",
            f"Try reinstalling: 'ai-dev-kit install {framework_name}'",
        ]
        
        super().__init__(message, suggestions)
        self.framework_name = framework_name
        self.reason = reason

