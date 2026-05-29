---
lifecycle: evergreen
ttl_days: null
created_at: 2026-03-18T00:00:00Z
expires_at: null
housekeeping_policy: keep
---

# AI Dev Kit Installation Receipt Reference

**Status:** Draft (FR-062)  
**Applies To:** GitHub Release installations performed via `install_package_from_release.py`

---

## Purpose

Installation receipts provide a tamper-evident record of every framework install run. They allow:

- Consumers to prove which frameworks/versions were installed and whether validations passed.
- AI Dev Kit maintainers to reproduce or audit installation issues.
- Automation to ingest telemetry without scraping raw logs.

Receipts complement FR-047 (install logging) by capturing a structured summary that a client AI agent can submit back to the ai-dev-kit team.

### Scope (greenfield vs brownfield)

Canonical **greenfield** installer narrative and ordering live in [`INSTALL_IN_YOUR_PROJECT.md`](https://github.com/earlution/ai-dev-kit/blob/main/INSTALL_IN_YOUR_PROJECT.md) with [ADR-003](../../architecture/standards-and-adrs/ADR-003-greenfield-vs-brownfield-adoption.md), [FR-081](../../project-management/kanban/fr-br/FR-081-brownfield-modular-adopter-integration.md), and [IPW-E6S09T01](../../implementation-cycles/IPW-E6S09T01-greenfield-installation-fr080.md). Receipts may attach to release-based installs; align evidence with that policy boundary.

---

## Receipt Location & Lifecycle

| Item | Value |
|------|-------|
| Directory | `logs/ai-dev-kit/install/` |
| Filename format | `receipt-<timestamp>-<run_id>.json` |
| Producer | `install_package_from_release.py` (CLI) |
| Consumers | Client AI agents, support tooling, telemetry pipeline |
| Retention | Controlled by `install_logging.keep` (same as install logs) |

Receipts are generated only when installs are performed from a consumer repo (project root contains `.ai-dev-kit.yaml`). Framework installers append their own sections via the shared `AI_DEV_KIT_INSTALL_LOG_PATH` env var.

---

## JSON Schema (v1)

```jsonc
{
  "schema_version": "1.0.0",
  "install_run_id": "2026-03-18T12:00:35Z_3f8c2c",
  "project": {
    "name": "xoforge",
    "repo": "git@github.com:example/xoforge.git",
    "branch": "main"
  },
  "frameworks": [
    {
      "name": "workflow-mgmt",
      "requested_version": "2.1.4",
      "source": "https://github.com/earlution/ai-dev-kit/releases/download/workflow-mgmt-v2.1.4/...",
      "hash": "sha256:...",
      "status": "installed"
    },
    {
      "name": "kanban",
      "requested_version": "2.1.0",
      "source": "https://github.com/earlution/ai-dev-kit/releases/download/kanban-v2.1.0/...",
      "hash": "sha256:...",
      "status": "installed"
    }
  ],
  "validation": {
    "workflow_installer": {
      "status": "success",
      "warnings": []
    },
    "kanban_installer": {
      "status": "success",
      "warnings": [
        "Detected existing Kanban docs, switched to migration mode"
      ]
    }
  },
  "log_paths": {
    "combined": "logs/ai-dev-kit/install/install-20260318-1200.log",
    "cli": "logs/ai-dev-kit/install/install-20260318-1200.log",
    "framework": "logs/ai-dev-kit/install/install-20260318-1200.log"
  },
  "nonce": "be9d06c6b7fb4d0b",
  "signature": "hmac-sha256:4b1c…",
  "submitted": false
}
```

Key requirements:

- `install_run_id` is globally unique (timestamp + random suffix).
- `nonce` + `signature` allow the maintainer API to detect tampering.
- `submitted` flips to `true` when the client agent successfully reports the receipt back.

---

## Client Submission Workflow

1. **Install frameworks** via GitHub Release (see installation guide).
2. **Locate receipt** in `logs/ai-dev-kit/install/`.
3. **Validate install telemetry first**:
   - `ai-dev-kit logs validate-install-log --limit 1`
   - This ensures the latest JSON install log has required event-contract and correlation fields before submission.
4. **Create feedback payload from install telemetry**:
   - `ai-dev-kit logs prepare-feedback-payload`
   - Optional: `--install-log <path>` and `--output <path>`
5. **Validate feedback payload**:
   - `ai-dev-kit logs validate-feedback-payload --file logs/ai-dev-kit/feedback/payload-*.json`
6. **Submit payload through deterministic submission path**:
   - `ai-dev-kit logs submit-feedback-payload --file logs/ai-dev-kit/feedback/payload-*.json`
7. **Outcome handling**:
   - `accepted`: local submission receipt written under `logs/ai-dev-kit/feedback/submissions/`
   - `needs-redaction`: payload rejected until sensitive content is removed
   - `needs-more-context`: payload rejected until required troubleshooting context is included
   - `rejected`: schema invalid; fix validation errors then retry

---

## Receipt Signing

- Default signer: HMAC-SHA256 using the `install_logging.receipt_key` value in `.ai-dev-kit.yaml`.
- Projects should rotate keys via standard secret management. Future versions may support asymmetric signatures (Ed25519).
- If no key is configured, receipts are generated but flagged `signature: null` and rejected by the maintainer API.

---

## AI Agent Guidance

When your agent completes an install run:

1. Parse the newest receipt file.
2. Summarize the run in the project log or PR comment.
3. Submit the receipt via `ai-dev-kit receipt submit …`.
4. If submission fails, retry up to 3 times and attach the failure reason to the PR.

Assistants integrating with other orchestration tools should map this to whatever “post-install verification” hook they expose.

---

## References

- FR-062 – GitHub Release Installation Experience.  
- FR-047 – Install Logging for Framework Dependencies.  
- Task: E5:S01:T62 – GitHub Release Installation Experience.
