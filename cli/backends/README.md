# Backend Abstraction Layer

This package provides the abstraction layer for framework dependency management backends.

## Architecture

### Base Interface

All backends must inherit from `BackendBase` and implement the following methods:

- `install()` - Install a framework
- `update()` - Update a framework to a new version
- `check()` - Check for available updates
- `status()` - Get framework status information
- `remove()` - Remove a framework dependency
- `is_available()` - Check if backend is available on the system

### Backend Registry

The `BackendRegistry` manages registration and retrieval of backend implementations:

```python
from cli.backends import register_backend, get_backend

# Register a backend
register_backend("git-submodule", GitSubmoduleBackend)

# Get a backend class
backend_class = get_backend("git-submodule")
```

### Backend Selection

The `select_backend()` function provides intelligent backend selection:

- Checks if preferred backend is available
- Auto-detects project type (npm, pip, Git)
- Falls back to default backend if needed

```python
from cli.backends import select_backend
from pathlib import Path

backend = select_backend(
    preferred="git-submodule",
    project_root=Path.cwd(),
    auto_detect=True,
)
```

## Backend Implementations

Backend implementations will be added in subsequent tasks:

- **T05:** Git submodule backend
- **T06:** Git subtree backend
- **T07:** Package manager backends (npm, pip)

## Usage Example

```python
from cli.backends import get_backend, select_backend
from pathlib import Path

# Select backend
backend_name = select_backend(project_root=Path.cwd())
backend_class = get_backend(backend_name)
backend = backend_class()

# Install framework
success = backend.install(
    framework="numbering-versioning",
    version="2.0.0",
    path=Path("frameworks/numbering-versioning"),
)
```

## Interface Contract

All backends must:

1. Inherit from `BackendBase`
2. Implement all abstract methods
3. Return appropriate types (bool, Optional[str], Dict[str, Any])
4. Handle errors gracefully
5. Provide clear error messages via exceptions or return values
6. Check availability via `is_available()`

## References

- **Design:** `docs/architecture/standards-and-adrs/framework-update-cli-design.md`
- **Architecture:** `docs/architecture/standards-and-adrs/framework-dependency-architecture.md`
- **Story:** `docs/project-management/kanban/epics/Epic-6/Story-007-ai-dev-kit-cli-tool.md`

