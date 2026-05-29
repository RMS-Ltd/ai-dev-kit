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

### Run Specific Test Files

```bash
pytest tests/test_commands.py
pytest tests/test_config.py
pytest tests/test_backends.py
```

### Run with Coverage

```bash
pytest --cov=cli --cov-report=html
```

Coverage report will be generated in `htmlcov/index.html`.

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

Tests should be run in CI/CD pipelines:

```yaml
# Example GitHub Actions workflow
- name: Run tests
  run: |
    pip install -e ".[dev]"
    pytest --cov=cli --cov-report=xml
```

## Coverage Goals

- **Target Coverage:** 80%+
- **Critical Paths:** 100% coverage for core commands and backends
- **Documentation:** All public APIs should have tests

