---
lifecycle: evergreen
ttl_days: null
created_at: 2026-01-03T00:00:00Z
expires_at: null
housekeeping_policy: keep
---

# ai-dev-kit CLI Publishing Guide

**Status:** Active  
**Version:** 1.0.0  
**Last Updated:** 2026-01-03  
**Epic:** Epic 6 - Framework Management and Maintenance  
**Story:** Story 7 - ai-dev-kit CLI Tool  
**Task:** E6:S07:T13 - Testing, validation, and PyPI packaging

---

## Overview

This guide explains how to build, test, and publish the `ai-dev-kit` CLI tool to PyPI.

### Scope (greenfield vs brownfield)

For **adopters** installing frameworks into a project (distinct from CLI maintainer publishing), see [`INSTALL_IN_YOUR_PROJECT.md`](https://github.com/earlution/ai-dev-kit/blob/main/INSTALL_IN_YOUR_PROJECT.md), [IPW-E6S09T01](../../implementation-cycles/IPW-E6S09T01-greenfield-installation-fr080.md), [ADR-003](../../architecture/standards-and-adrs/ADR-003-greenfield-vs-brownfield-adoption.md), [FR-081](../../project-management/kanban/fr-br/FR-081-brownfield-modular-adopter-integration.md).

---

## Prerequisites

### Required Tools

- Python 3.8+
- pip
- twine (for uploading to PyPI)
- build (for building packages)

### PyPI Accounts

- **Test PyPI:** https://test.pypi.org/ (for testing)
- **Production PyPI:** https://pypi.org/ (for releases)

---

## Building the Package

### 1. Install Build Tools

```bash
pip install build twine
```

### 2. Update Version

Update version in `cli/__init__.py`:

```python
__version__ = "0.1.0"
```

### 3. Build Distribution

```bash
# Build source distribution and wheel
python -m build
```

This creates:
- `dist/ai-dev-kit-0.1.0.tar.gz` (source distribution)
- `dist/ai_dev_kit-0.1.0-py3-none-any.whl` (wheel)

---

## Testing the Package

### 1. Test Installation

```bash
# Install from local build
pip install dist/ai_dev_kit-0.1.0-py3-none-any.whl

# Or from source distribution
pip install dist/ai-dev-kit-0.1.0.tar.gz

# Verify installation
ai-dev-kit --version
ai-dev-kit --help
```

### 2. Test on Test PyPI

```bash
# Upload to Test PyPI
twine upload --repository testpypi dist/*

# Install from Test PyPI
pip install --index-url https://test.pypi.org/simple/ ai-dev-kit
```

### 3. Run Test Suite

```bash
# Run all tests
pytest

# Run with coverage
pytest --cov=cli --cov-report=html
```

---

## Publishing to PyPI

### 1. Prepare for Release

- [ ] Update version number
- [ ] Update CHANGELOG.md
- [ ] Run full test suite
- [ ] Verify all tests pass
- [ ] Check code quality (black, flake8, mypy)
- [ ] Build package
- [ ] Test installation locally

### 2. Upload to PyPI

```bash
# Upload to production PyPI
twine upload dist/*

# You'll be prompted for PyPI credentials
```

### 3. Verify Publication

```bash
# Install from PyPI
pip install ai-dev-kit

# Verify installation
ai-dev-kit --version
```

---

## Package Configuration

### setup.py

The `setup.py` file contains package metadata:

- **name:** `ai-dev-kit`
- **version:** Read from `cli/__init__.py`
- **description:** Package description
- **long_description:** README.md content
- **entry_points:** CLI command registration
- **classifiers:** PyPI classifiers

### MANIFEST.in

Controls which files are included in the package:

```
include README.md
include LICENSE
include CHANGELOG.md
recursive-include cli *.py
recursive-exclude * __pycache__
```

---

## Version Management

### Version Format

Use semantic versioning: `MAJOR.MINOR.PATCH`

- **MAJOR:** Breaking changes
- **MINOR:** New features (backward compatible)
- **PATCH:** Bug fixes

### Updating Version

1. Update `cli/__init__.py`:
   ```python
   __version__ = "0.2.0"
   ```

2. Update `setup.py` (if using hardcoded version)

3. Update CHANGELOG.md

4. Commit and tag:
   ```bash
   git commit -m "Bump version to 0.2.0"
   git tag v0.2.0
   ```

---

## Release Checklist

### Pre-Release

- [ ] All tests passing
- [ ] Code quality checks passing
- [ ] Documentation updated
- [ ] CHANGELOG.md updated
- [ ] Version number updated
- [ ] Package builds successfully
- [ ] Local installation tested

### Release

- [ ] Build package (`python -m build`)
- [ ] Test on Test PyPI
- [ ] Upload to production PyPI
- [ ] Verify installation from PyPI
- [ ] Create GitHub release
- [ ] Announce release

### Post-Release

- [ ] Monitor for issues
- [ ] Update documentation if needed
- [ ] Plan next release

---

## Troubleshooting

### Build Errors

**Error: "No module named 'build'"**
```bash
pip install build
```

**Error: "No files found matching..."**
- Check `MANIFEST.in` includes required files
- Verify file paths are correct

### Upload Errors

**Error: "HTTPError: 400 Client Error"**
- Check package name is available
- Verify version number is unique
- Check package metadata is valid

**Error: "HTTPError: 401 Client Error"**
- Verify PyPI credentials
- Check API token is valid

### Installation Errors

**Error: "No module named 'cli'"**
- Check package structure
- Verify `__init__.py` files exist
- Check `setup.py` package configuration

---

## Best Practices

### 1. Semantic Versioning

Follow semantic versioning strictly:
- `0.1.0` → `0.1.1` (patch: bug fix)
- `0.1.1` → `0.2.0` (minor: new feature)
- `0.2.0` → `1.0.0` (major: breaking change)

### 2. Test Before Publishing

Always test on Test PyPI first:
```bash
twine upload --repository testpypi dist/*
pip install --index-url https://test.pypi.org/simple/ ai-dev-kit
```

### 3. Changelog

Keep CHANGELOG.md up to date:
- Document all changes
- Group by type (Added, Changed, Fixed, Removed)
- Include version and date

### 4. Documentation

Ensure documentation is complete:
- README.md
- CLI reference
- Usage examples
- Installation guide

### 5. Code Quality

Run quality checks before release:
```bash
black cli/
flake8 cli/
mypy cli/
pytest
```

---

## References

- [PyPI Documentation](https://packaging.python.org/)
- [Twine Documentation](https://twine.readthedocs.io/)
- [Python Packaging Guide](https://packaging.python.org/guides/)
- [Semantic Versioning](https://semver.org/)

---

## Support

For issues with publishing:
- Check [PyPI Help](https://pypi.org/help/)
- Review [Python Packaging Troubleshooting](https://packaging.python.org/tutorials/packaging-projects/#troubleshooting)
- Open an issue on [GitHub](https://github.com/earlution/ai-dev-kit/issues)

