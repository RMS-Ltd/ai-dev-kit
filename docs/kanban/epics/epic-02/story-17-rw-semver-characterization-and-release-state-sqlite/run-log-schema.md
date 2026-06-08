# Run Log Schema (E02:S17:T01)

**Companion:** [scenario-matrix.md](scenario-matrix.md)  
**Baseline log (T02):** [baseline-run-log.md](baseline-run-log.md) *(create on first run)*  
**Parity log (T05):** [parity-run-log.md](../T05-parity-replay-scenario-matrix-on-sqlite.md) *(T05 deliverable)*

---

## Purpose

Single table schema for recording scenario outcomes on **legacy** (MD/YAML) and **sqlite** backends. Enables side-by-side parity proof in T05 and friction synthesis in T06.

---

## Row schema (one row per scenario × backend run)

| Column | Type | Required | Description |
| ------ | ---- | -------- | ----------- |
| `run_id` | string | yes | Unique run id: `{scenario_id}-{backend}-{YYYYMMDD-HHMM}` e.g. `RW-B01-legacy-20260607-1718` |
| `scenario_id` | string | yes | From scenario matrix (e.g. `RW-B01`, `IPW-P01`) |
| `backend` | enum | yes | `legacy` \| `sqlite` |
| `layer` | enum | yes | `DET` \| `AGT` |
| `git_ref` | string | yes | Branch + commit SHA at run start |
| `worktree_path` | string | rec | Absolute path if isolated worktree used |
| `trigger` | string | yes | Exact operator/agent command (e.g. `RW E02:S17:T01 --art`) |
| `outcome` | enum | yes | `PASS` \| `ABORT` \| `SKIP` \| `FAIL` |
| `abort_step` | string | if ABORT | RW step or gate (e.g. `1d`, `2`, `9`, `11`) |
| `abort_validator` | string | if ABORT | Script name (e.g. `validate_rw_task_intent.py`) |
| `version_before` | string | yes | Internal version before run |
| `version_after` | string | if PASS | Internal version after run |
| `semver_after` | string | if PASS | SemVer display (task_touch) |
| `registry_counter_before` | int | rec | `task_touch_counter` before |
| `registry_counter_after` | int | if PASS | Counter after finalize |
| `tags_created` | string | rec | Comma-separated tag names |
| `validator_exit_codes` | string | rec | JSON map `{script: exit_code}` |
| `duration_sec` | float | rec | Wall time |
| `artifacts_dir` | string | rec | Relative path under `baseline-artifacts/{scenario_id}/` |
| `friction_notes` | text | rec | Agent decisions, workarounds, surprises (AGT especially) |
| `parity_match` | enum | T05 | `match` \| `mismatch` \| `n/a` — vs baseline row |
| `parity_diff` | text | T05 | If mismatch: invariant violated + diff summary |
| `operator` | string | rec | Human or agent session id |
| `recorded_at` | ISO8601 | yes | UTC timestamp |

---

## Markdown table template (copy for logs)

```markdown
| run_id | scenario_id | backend | layer | outcome | version_before | version_after | semver_after | abort_step | friction_notes |
| ------ | ----------- | ------- | ----- | ------- | -------------- | ------------- | ------------ | ---------- | -------------- |
| | | legacy | DET | | | | | | |
```

Expand wide rows into linked artifact manifests when the table grows (T02+).

---

## Artifact manifest (per scenario folder)

Store under `baseline-artifacts/{scenario_id}/`:

| File | Contents |
| ---- | -------- |
| `manifest.json` | `run_id`, `scenario_id`, file list + SHA256 |
| `version-before.py` | Copy of `version.py` |
| `version-after.py` | Copy after run |
| `registry-before.yaml` | Snapshot (legacy) or `registry-before.db` (sqlite) |
| `registry-after.*` | Post-run snapshot |
| `tags.txt` | `git tag -l` filtered |
| `validators.json` | Exit codes + stderr excerpts |
| `agent-transcript.md` | AGT runs only — key decisions |

**Gitignore:** add `baseline-artifacts/` to local `.gitignore` if blobs are large; keep `baseline-run-log.md` in repo.

---

## Deterministic runner contract (pytest / script)

For `layer=DET` scenarios:

1. Create worktree from pinned ref  
2. Apply fixture patches (task doc status, version seed)  
3. Run trigger command or validator only  
4. Assert expected outcome programmatically  
5. Emit one JSON row matching schema → append to run log  

Suggested location: `tests/rw_scenarios/test_scenario_deterministic.py` (T02).

---

## SKIP policy

Document `SKIP` only when:

- Scenario blocked by infrastructure (not product bug)  
- Explicit dependency not yet implemented (e.g. sqlite backend for T05 IDs)

Every SKIP must include `friction_notes` rationale and retest target milestone.

---

## Example row (this release)

| run_id | scenario_id | backend | layer | outcome | version_before | version_after | semver_after | abort_step | friction_notes |
| ------ | ----------- | ------- | ----- | ------- | -------------- | ------------- | ------------ | ---------- | -------------- |
| RW-G03-legacy-20260607-1717 | RW-G03 | legacy | DET | ABORT | 0.2.16.10+6 | — | — | 1d | Intent mismatch E16 vs E17; expected without `--art` |
| RW-G04-legacy-20260607-1717 | RW-G04 | legacy | DET | PASS | 0.2.16.10+6 | 0.2.17.1+1 | 0.4.1037+1 | — | `--art` adoption for new story filing |

---

## Changelog

| Date | Change |
| ---- | ------ |
| 2026-06-07 | v1.0 — schema + template + example rows from E02:S17:T01 release |
