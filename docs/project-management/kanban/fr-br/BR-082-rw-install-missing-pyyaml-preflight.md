---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-03T17:40:00Z
expires_at: null
housekeeping_policy: keep
---

# Bug Report BR-082: RW Install Fails Without Venv PyYAML — No Preflight Hint

**Bug ID:** BR-082  
**Priority:** HIGH  
**Severity:** HIGH (hard stop on first RW install after submodule-only setup)  
**Status:** OPEN (INTAKE)  
**GitHub Issue:** [#14](https://github.com/RMS-Ltd/ai-dev-kit/issues/14)  
**Implementing Task:** [E06:S09:T11](../epics/Epic-6/Story-009-ai-dev-kit-installation-and-adopter-integration/T11-rw-install-pyyaml-preflight-br082.md)  
**Created:** 2026-06-03  
**Source:** Book dry-run (ExpensesTracker T03 Step 3); ADK `vendor/ai-dev-kit` @ `84efa7b`

---

## Summary

`install_release_workflow.py --mode c` fails with `ERROR: PyYAML is required` when consumer venv lacks `pyyaml`, with no preflight listing minimal deps.

---

## Steps to Reproduce

1. Submodule + kit `.venv` without `pip install`.
2. Run `install_release_workflow.py --mode c`.

## Actual

```
ERROR: PyYAML is required. Install with: pip install pyyaml
```

## Expected

- Document required venv deps before first run, **or**
- Preflight with actionable message (`pyyaml>=6.0` from `setup.py`), **or**
- Optional `--bootstrap-venv` / link to `pip install -e ./vendor/ai-dev-kit`

## Workaround

```bash
source .venv/bin/activate
pip install 'pyyaml>=6.0'
```

## Related

- `INSTALL_IN_YOUR_PROJECT.md` mentions PyYAML failure but not wired into submodule-only T03 path.

## Acceptance Criteria

- [ ] Installer preflight or docs cover PyYAML before interactive RW install.
- [ ] Greenfield/book spine Step 3 does not dead-end without deps list.
- [ ] Error message cites `setup.py` / minimal install one-liner.
