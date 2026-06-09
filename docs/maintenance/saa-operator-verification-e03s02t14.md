---
lifecycle: timeboxed
ttl_days: 90
created_at: 2026-06-09T12:00:00Z
expires_at: null
housekeeping_policy: archive
---

# SAA Operator Verification — E03:S02:T14 (AC7)

**Task:** E03:S02:T14 · **FR:** FR-120 · **IPP:** [IPP-E03S02T14](../implementation-cycles/IPP-E03S02T14-semver-allocation-authority.md)

Maintainer checklist before closing BR-073-class FBUs.

## Commands

```bash
# Unit + integration
pytest tests/release_state/ -q

# Injectivity on live worktree DB (if present)
python packages/frameworks/workflow-mgt/scripts/validation/validate_semver_registry_injective.py

# Release contract (after a test finalize)
python packages/frameworks/workflow-mgt/scripts/version/finalize_rw_semver_registry.py \
  --internal-version "<internal>"
python packages/frameworks/workflow-mgt/scripts/validation/validate_task_touch_release_contract.py --strict
```

## Allocator bootstrap (mandatory before RW in sqlite mode)

```bash
python packages/frameworks/workflow-mgt/scripts/release_state/import_legacy.py \
  --yaml docs/changelog-and-release-notes/changelog-archive/semver-registry-legacy-final.yaml \
  --db .adk/release-state.db --validate
```

Expect `counter=1095` (or current HEAD max) and `mappings=359`. **Never** ship RW with `max_patch < 1000` unless greenfield-only.

**2026-06-09 repair:** Truncated DB (patch 13) caused erroneous `v0.4.12+1`; legacy re-import + `v0.3.2.14+2` RW restored line at `v0.4.1096+1` for `v0.3.2.14+1`.

## Manual checks

- [ ] Two releases with decreasing internal `E.S.T` show increasing SemVer cores in `.adk/release-state.db`
- [ ] `.adk/semver-registry-export.yaml` updates after each RW finalize
- [ ] No `finalize=False` PATCH assignment in production RW path (grep audit)
- [ ] Parallel RW attempts do not duplicate PATCH (stress test optional)

## Sign-off

| Field | Value |
| ----- | ----- |
| Verified by | _pending_ |
| Date | _pending_ |
| Release | _pending `RW E03:S02:T14 --art`_ |
