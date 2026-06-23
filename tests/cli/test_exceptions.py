from cli.exceptions import (
    AIDevKitError,
    AppleSDKLicenseError,
    BackendNotAvailableError,
    ConfigurationError,
    FrameworkNotFoundError,
    InstallationError,
    InvalidInputError,
    UpdateError,
    VersionNotFoundError,
)


def test_aidevkit_error_str_with_suggestions():
    err = AIDevKitError("broken", ["do x", "do y"])
    text = str(err)
    assert "Suggestions:" in text
    assert "do x" in text


def test_framework_not_found_error_includes_available_frameworks():
    err = FrameworkNotFoundError("abc", ["kanban", "workflow-mgt"])
    assert "Framework 'abc' not found" in str(err)
    assert "kanban" in str(err)


def test_version_not_found_error_and_subclass_relationships():
    err = VersionNotFoundError("kanban", "9.9.9", ["1.0.0"])
    assert isinstance(err, AIDevKitError)
    assert "Version '9.9.9' not found" in str(err)


def test_other_exception_types_are_aidevkit_errors():
    errors = [
        BackendNotAvailableError("npm", ["git-submodule"]),
        InvalidInputError("backend", "bad"),
        ConfigurationError("config issue", "default_backend"),
        InstallationError("kanban", "network", backend="git-submodule"),
        AppleSDKLicenseError("git submodule add", "xcode-select issue"),
        UpdateError("kanban", "bad revision"),
    ]
    assert all(isinstance(err, AIDevKitError) for err in errors)
