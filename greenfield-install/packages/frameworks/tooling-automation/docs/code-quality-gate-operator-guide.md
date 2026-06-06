---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-06T15:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Code Quality Gate (CQG) — Operator guide

**Task:** E08:S03:T17 · **FR:** [FR-113](../../../../docs/project-management/kanban/fr-br/FR-113-local-code-quality-gate-cqg.md) · **ADR:** [ADR-022](../../../../docs/architecture/standards-and-adrs/ADR-022-local-code-quality-gate-architecture.md)

---

## Trust model

| Source | Role |
| ------ | ---- |
| **GitHub Code Quality dashboard (T16)** | Cloud SoT until operator accepts local parity |
| **Local CQG** | Pre-push / cron snapshot; mirrors CodeQL `security-and-quality` Standard findings |

CQG does **not** replace T16 perpetual health lanes or FHM workflow checks.

---

## Prerequisites

1. **CodeQL CLI** on `PATH` as `codeql` (or set `code_quality_gate.codeql_command` in `rw-config.yaml`).
2. **`rw-config.yaml`** with `code_quality_gate:` block — see [rw-config-schema.md](../../workflow-mgt/config/rw-config-schema.md).
3. Clean git checkout on `target_branch` (default `dev`) for monitor runs.

Install CodeQL: [GitHub CodeQL CLI](https://github.com/github/codeql-cli-binaries/releases) or `brew install codeql`. Pin bundle version in your runbook after first successful analyze.

The config value `query_suite: security-and-quality` (GitHub Code Quality name) resolves to the CodeQL suite file `python-security-and-quality.qls` automatically.

**Offline / CI without CodeQL:** pass `--sarif path/to/results.sarif` to `run_cqg.py` or `validate_code_quality_gate.py`.

---

## Entrypoints

### Manual CLI

```bash
python packages/frameworks/tooling-automation/scripts/run_cqg.py
python packages/frameworks/tooling-automation/scripts/run_cqg.py --sarif /path/to/results.sarif
python packages/frameworks/tooling-automation/scripts/run_cqg.py --strict --threshold errors
```

### RW Step 9 (advisory default)

```bash
python packages/frameworks/workflow-mgt/scripts/validation/validate_code_quality_gate.py
python packages/frameworks/workflow-mgt/scripts/validation/validate_code_quality_gate.py --strict
```

When CodeQL is missing, validator **exits 0** with `ADVISORY SKIP` unless `--sarif` is supplied.

### 6-hour monitor

Cron: `0 */6 * * *`

```bash
python packages/frameworks/workflow-mgt/scripts/cqg_monitor.py
```

**Skip:** HEAD unchanged and `.cqg/last-run.json` age **< 12 h**  
**Force:** age **≥ 12 h** even if HEAD unchanged  
**Run:** HEAD changed

Use a **clean checkout** of `dev` (no uncommitted changes) for comparable snapshots.

---

## Artifacts

| Path | Purpose |
| ---- | ------- |
| `.cqg/reports/summary-latest.json` | Machine-readable summary |
| `.cqg/reports/summary-latest.md` | Human-readable summary |
| `.cqg/reports/latest.sarif` | Optional SARIF (gitignored) |
| `.cqg/last-run.json` | `head_sha`, `completed_at` for monitor |

All under `.cqg/` are **gitignored**.

---

## Thresholds

| Mode | Fails when |
| ---- | ---------- |
| `errors` | Any Error finding |
| `warnings` | Error or Warning |
| `notes` | Error, Warning, or Note |
| `all` | Any finding |

Configure default via `code_quality_gate.rw_threshold`. RW uses `rw_advisory: true` unless `--strict`.

---

## Parity with GitHub

Follow [cqg-parity-template.md](./cqg-parity-template.md) at a pinned SHA. Target ≥95% count match per FR-113:NF1; document deltas.

---

## Layer map

| Component | Path |
| --------- | ---- |
| Engine | `validators/code_quality/` |
| CLI | `scripts/run_cqg.py` |
| RW validator | `workflow-mgt/scripts/validation/validate_code_quality_gate.py` |
| Monitor | `workflow-mgt/scripts/cqg_monitor.py` |
