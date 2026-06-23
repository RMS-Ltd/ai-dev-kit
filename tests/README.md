# ai-dev-kit CLI Test Suite

Test suite for the ai-dev-kit CLI tool.

## Running Tests

### Install Test Dependencies

```bash
pip install -e ".[dev]"
# Or
pip install -r tests/requirements.txt
```

### Run All Tests

```bash
pytest
```

Default `pytest.ini` does **not** enable CLI coverage (avoids misleading 0% when running portal or other non-CLI tests).

### Run CLI Coverage (dedicated target)

```bash
bash scripts/run_cli_pytest_coverage.sh
# Or:
python -m pytest -c pytest-cli-cov.ini tests/
```

Coverage report: `htmlcov/cli/index.html`.

The dedicated CLI config enforces a hard floor:

- `pytest-cli-cov.ini` includes `--cov-fail-under=70`
- aggregate `cli/` coverage must stay at or above 70% in the `cli-coverage` lane
- default `pytest.ini` remains coverage-free by design (UXR-030 isolation contract)

### FR-138 Wave Plan (CLI coverage closure)

- **Wave 1 (backends + migration):** `cli/backends/*`, `cli/migration.py`, `cli/commands/migrate.py`
- **Wave 2 (core commands + error bridge):** `cli/commands/check.py`, `status.py`, `update.py`, `cli/adk_install_errors_bridge.py`, `cli/exceptions.py`
- **Wave 3 (remaining branch gaps):** `cli/commands/config.py`, install/remove/logs branch gaps, `cli/config.py`, `cli/logging.py`, `cli/utils.py`

### Run Specific Test Files

```bash
pytest tests/test_commands.py
pytest tests/test_config.py
pytest tests/test_backends.py
```

### Run with Coverage

Use the dedicated CLI coverage config (not default `pytest`):

```bash
bash scripts/run_cli_pytest_coverage.sh
```

### Run Specific Test Categories

```bash
# Unit tests only
pytest -m unit

# Integration tests only
pytest -m integration

# Backend tests only
pytest -m backend
```

## Test Structure

```
tests/
├── __init__.py
├── conftest.py              # Pytest fixtures and configuration
├── test_commands.py         # Tests for CLI commands
├── test_config.py           # Tests for configuration management
├── test_utils.py            # Tests for utility functions
├── test_validation.py       # Tests for validation functions
├── test_backends.py         # Tests for backend implementations
└── test_integration.py      # Integration tests
```

## Test Categories

- **Unit Tests:** Test individual functions and classes in isolation
- **Integration Tests:** Test complete workflows and interactions
- **Backend Tests:** Test backend implementations
- **Slow Tests:** Tests that take longer to run (marked with `@pytest.mark.slow`)

## Writing Tests

### Example Unit Test

```python
def test_config_get_set(temp_config_file: Path):
    """Test getting and setting config values."""
    config = Config(temp_config_file)
    config.set("default_backend", "git-subtree")
    config.save()
    
    value = config.get("default_backend")
    assert value == "git-subtree"
```

### Example Integration Test

```python
def test_init_then_install_workflow(temp_project_dir: Path):
    """Test complete init then install workflow."""
    # Initialize
    init_command = InitCommand(args)
    init_result = init_command.execute()
    assert init_result == 0
    
    # Install
    install_command = InstallCommand(args)
    install_result = install_command.execute()
    assert install_result == 0
```

## Fixtures

Available pytest fixtures (defined in `conftest.py`):

- `temp_project_dir`: Temporary project directory with `.git` initialized
- `temp_config_file`: Temporary `.ai-dev-kit.yaml` config file
- `mock_backend`: Mock backend instance for testing

## Continuous Integration

GitHub Actions [`tests.yml`](../../.github/workflows/tests.yml) runs two jobs:

- **pytest** — full `tests/` suite (no coverage in default config)
- **cli-coverage** — same suite via `scripts/run_cli_pytest_coverage.sh` with CLI coverage report

```yaml
- name: Run pytest with CLI coverage
  run: bash scripts/run_cli_pytest_coverage.sh
```

## Coverage Goals

- **Target Coverage:** 80%+
- **Critical Paths:** 100% coverage for core commands and backends
- **Documentation:** All public APIs should have tests

