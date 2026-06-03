# Changelog v0.8.3.5+2

**Release Date:** 2026-06-03 15:57:13 UTC  
**Epic | Story | Task:** E08:S03:T05 (`RW`, `--art`)  
**SemVer:** v0.4.851+2  

## Summary

Change implemented: **Python 3.11+** minimum policy aligned across `setup.py`, README, install guides, maintenance docs, and `.python-version`. Closes **BR-077** metadata drift.

## Changes

### Packaging

- `setup.py`: `python_requires=">=3.11"`; classifiers 3.11–3.12.

### Documentation

- README badge and prerequisites **3.11+**.
- Install guide **Python version support** subsection; FAQ, CLI guides, maintenance runbooks updated.
- `package-management-design.md` JSON example `>=3.11`.
- **E08:S03:T04** note: Tests workflow should use `python-version: "3.11"`.
- **FR-030** NFR-1 footnote (superseded by FR-104).

### Tests

- `tests/test_python_version_policy.py` — asserts `python_requires` and README badge.

### Planning

- [IPP-E08S03T05](IPP-E08S03T05-python-minimum-version-fr104-br077.md) (IPW).

## Verification

- `pytest tests/test_python_version_policy.py` — passed.
- User verification of adopters on 3.10 and below pending.
