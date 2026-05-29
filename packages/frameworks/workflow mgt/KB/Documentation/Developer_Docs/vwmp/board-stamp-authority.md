---
lifecycle: evergreen
created_at: 2026-05-20T18:00:00Z
housekeeping_policy: keep
---

# Board Stamp Authority (FR-097)

Row `| Last modified: YYYY-MM-DD HH:MM UTC` on `kboard.md` and `fbuboard.md` is **forensic evidence** of underlying FR/BR/UXR/task activity—not board-hygiene clock time.

## Edit classes

| Class | May change row stamp? | Examples |
| ----- | --------------------- | -------- |
| STRUCTURE | No | Prune, sort, dedupe footers, header `Last Updated` |
| CONTENT | Yes (with evidence) | Linked doc delta, RW release-scope manifest |

**Related — MoSCOW state icons (UXR-012):** Icon-only or status-driven icon updates are **CONTENT** when tied to a substantive status change; STRUCTURE-only hygiene must not swap icons arbitrarily. See [`state-icons.md`](state-icons.md) and `validate_kanban_state_icons.py` (Release Readiness Gate 9).

## UKW / RW workflow

1. **Snapshot** at start:
   ```bash
   python "packages/frameworks/workflow mgt/scripts/kanban/snapshot_kanban_boards.py"
   ```
2. Perform board edits (preserve row stamps on hygiene).
3. **Validate** before stage/commit:
   ```bash
   python "packages/frameworks/workflow mgt/scripts/validation/validate_board_stamp_diff.py" \
     --before .kanban-snapshots/<ts>/kboard.md \
     --after docs/project-management/kanban/kboard.md \
     --strict
   ```
   Repeat for `fbuboard.md`. **Abort** on non-zero exit.

Optional release-scope manifest (`--evidence-manifest`) JSON:
```json
{
  "FR-097": { "allowed": true, "reason": "rw step 7 content" }
}
```

## Backfill homogenized stamps

```bash
python "packages/frameworks/workflow mgt/scripts/kanban/backfill_board_row_stamps.py" \
  --cluster-stamp "2026-04-20 15:52 UTC" \
  --homogeneity-threshold 10 \
  --report docs/changelog-and-release-notes/changelog-archive/four-surface-reports/fr097-backfill-report.json
```

Omit `--dry-run` to apply. Derivation order: linked doc `**Last updated:**` → git last touch → skip if ambiguous.

## Release-readiness Gate 8

`validate_release_readiness.py` Gate 8 fails when ≥10 MoSCOW rows share the same stamp (homogeneity cluster).

## Scripts

| Script | Role |
| ------ | ---- |
| `kanban/stamp_authority.py` | Shared parse/evidence |
| `validation/validate_board_stamp_diff.py` | Blocking write boundary |
| `kanban/backfill_board_row_stamps.py` | Corpus recovery |
| `kanban/snapshot_kanban_boards.py` | Before snapshots |

## References

- [kanban-governance-policy.md](../../../../kanban/policies/kanban-governance-policy.md)
- [FR-097](../../../../../../docs/project-management/kanban/fr-br/FR-097-board-stamp-authority-and-forensic-timestamp-recovery.md)
- [IPP-E2S15T08](../../../../../../docs/implementation-cycles/IPP-E2S15T08-board-stamp-authority-forensic-timestamp-recovery.md)
