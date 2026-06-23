# ai-dev-kit CLI Tool

Unified command-line interface for managing AI Dev Kit framework dependencies.

## Installation

### From Source

```bash
cd /path/to/ai-dev-kit
pip install -e .
```

### From PyPI (when published)

```bash
pip install ai-dev-kit
```

## Usage

```bash
ai-dev-kit [--no-color] [COMMAND] [OPTIONS]
```

Use `--no-color` or set `NO_COLOR` in the environment for text-only status output (accessibility).

## Commands

Commands will be implemented in subsequent tasks:
- `init` - Initialize ai-dev-kit in project
- `install` - Install frameworks
- `update` - Update frameworks
- `check` - Check for updates
- `status` - Show framework status
- `list` - List available frameworks
- `remove` - Remove frameworks
- `config` - Manage configuration

## Project Structure

```
cli/
├── __init__.py          # Package initialization
├── main.py              # CLI entry point
├── config.py            # Configuration management
├── utils.py             # Utility functions
├── commands/            # Command implementations
│   └── __init__.py      # Base command class
└── backends/            # Backend implementations
    └── __init__.py      # Backend protocol
```

## Development

### Setup Development Environment

```bash
# Install in development mode
pip install -e ".[dev]"

# Or install test dependencies separately
pip install -r tests/requirements.txt
```

### Running Tests

```bash
# Run all tests (no CLI coverage noise on non-CLI runs)
pytest

# CLI coverage (dedicated target)
bash scripts/run_cli_pytest_coverage.sh

# Run specific test file
pytest tests/test_commands.py

# Run specific test category
pytest -m unit
pytest -m integration
```

The dedicated coverage lane is intentionally isolated from default pytest runs:

- `pytest-cli-cov.ini` is the only config that enables `--cov=cli`
- `pytest-cli-cov.ini` enforces `--cov-fail-under=70`
- default `pytest.ini` does not enable CLI coverage (avoids misleading 0% output in non-CLI runs)

### CLI Coverage Waves (FR-138)

- **Wave 1:** backend and migration modules
- **Wave 2:** check/status/update commands and install error bridge
- **Wave 3:** remaining command/config/logging/utils branch gaps

### Code Quality

```bash
# Format code
black cli/

# Lint code
flake8 cli/

# Type checking
mypy cli/
```

### Validation

```bash
# Run comprehensive validation
python scripts/validate_cli.py
```

### Building Package

```bash
# Build distribution
python -m build

# Test installation
pip install dist/ai_dev_kit-*.whl
```

## Documentation

- **CLI Reference:** `docs/documentation/user-docs/framework-dependency-cli-reference.md` - Complete command reference
- **Usage Examples:** `docs/documentation/user-docs/cli-usage-examples.md` - Common usage scenarios and workflows
- **Installation Guide:** `docs/documentation/user-docs/framework-dependency-installation-guide.md` - Installation instructions
- **Configuration Guide:** `docs/documentation/user-docs/cli-configuration-guide.md` - Configuration file format and management
- **Troubleshooting Guide:** `docs/documentation/user-docs/cli-troubleshooting-guide.md` - Troubleshooting help

## References

- **Design Document:** `docs/architecture/standards-and-adrs/framework-update-cli-design.md`
- **Architecture:** `docs/architecture/standards-and-adrs/framework-dependency-architecture.md`
- **Feature Request:** `docs/kanban/fr-br/FR-030-ai-dev-kit-cli-tool.md`

