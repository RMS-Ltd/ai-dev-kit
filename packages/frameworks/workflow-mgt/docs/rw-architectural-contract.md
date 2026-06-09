---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-09T20:00:00Z
expires_at: null
housekeeping_policy: keep
---

# RW Architectural Contract

**Authority:** [ADR-027](../../../docs/architecture/standards-and-adrs/ADR-027-rw-release-transaction-contract.md) · [FR-122](../../../docs/kanban/fr-br/FR-122-release-workflow-architectural-contract-release-transaction.md) · [IPP-E02S01T30](../../../docs/implementation-cycles/IPP-E02S01T30-rw-architectural-contract-release-transaction.md)  
**Gap matrix:** [rw-contract-gap-matrix.md](../../../docs/knowledge/analysis/rw-contract-gap-matrix.md)  
**Machine manifest (Wave 4):** [`rw-contract.yaml`](../rw-contract.yaml)

---

## What is a release?

A **release** is an atomic transaction that publishes one forensic version anchor (`RC.EPIC.STORY.TASK+BUILD`) with mutually consistent outward surfaces. A release **succeeds** only when all blocking gates pass; otherwise RW ends in **RW ABORTED** with no commit (or no tag if commit already made — recovery = new BUILD + re-RW per [BR-097](../../../docs/kanban/fr-br/BR-097-rw-agent-reuses-tagged-build-and-force-moves-release-tags.md)).

### Release tuple (invariant I1)

On success, all fields must be present:

| Field | Source |
| ----- | ------ |
| `internal_version` | `version.py` (or `rw-config.yaml` `version_file`) |
| `semver_full` | SAA allocator + `semver_converter.py` |
| `commit_sha` | Git commit from Step 10 |
| `tags[]` | `create_rw_tags()` output (internal + SemVer core per strategy) |
| `four_surface_report` | RW Step 7 reconciliation report ([FR-092](../../../docs/kanban/fr-br/FR-092-canonical-rw-ukw-kanban-consistency-program.md)) |

---

## Transaction phases

```
┌─────────────────────────────────────────────────────────────┐
│                    RW RELEASE TRANSACTION                    │
├─────────────────────────────────────────────────────────────┤
│  PREFLIGHT (deterministic, blocking)                         │
│    1   branch safety                                         │
│    1b  task token (FR-060)                                   │
│    1c  task releasable                                       │
│    1d  task intent (BR-056)                                  │
│    1e  allocator health (FR-122 F7) — Wave 1                 │
│    1f  git-tag namespace preview (FR-122 F8) — Wave 1        │
├─────────────────────────────────────────────────────────────┤
│  PLAN (scripts + agent)                                      │
│    resolve_rw_build (BR-097)                                 │
│    semver preview / finalize plan                            │
│    four-surface reconciliation plan                          │
├─────────────────────────────────────────────────────────────┤
│  MUTATE (intelligent agent, config-driven)                   │
│    2 version   3–4 changelogs   5 README   6 FR/BR   7 kanban│
├─────────────────────────────────────────────────────────────┤
│  VALIDATE (deterministic, blocking)                          │
│    8 stage   9 validators   9.7 CI parity                    │
│    + release coherence (FR-122 F10) — Wave 2                 │
├─────────────────────────────────────────────────────────────┤
│  PUBLISH (deterministic)                                     │
│    10 commit   11 create_rw_tags ONLY   12 push (opt-in)     │
├─────────────────────────────────────────────────────────────┤
│  ABORT: any blocking gate non-zero → stop; no silent partial │
└─────────────────────────────────────────────────────────────┘
```

---

## Agent vs script boundary (invariant I5)

| Surface | Owner | Agent may improvise? |
| ------- | ----- | -------------------- |
| Kanban narrative / MoSCOW hygiene | Agent | Yes (within FR-092 scope) |
| Version bump / BUILD | `resolve_rw_build.py` | **No** |
| SemVer allocation | SAA + `finalize_rw_semver_registry.py` | **No** |
| Git tags | `create_rw_tags()` | **No** — raw `git tag` forbidden |
| Validator invocation order | Contract + `.cursorrules` | **No** |
| Staged file set | Step 8 completeness guards | **No** |

---

## Gate reference (contract clause IDs)

| Clause | Requirement | RW step | Status (Wave 0) |
| ------ | ----------- | ------- | ----------------- |
| C-F1 | Release identity `E:S:T` | 1b–1d | MET |
| C-F2 | Version coherence | 2–5, 9, 11 | MET — Wave 2 |
| C-F3 | Transaction abort | all blocking | PARTIAL |
| C-F4 | Kanban atomicity | 7 | MOSTLY MET (FR-092) |
| C-F5 | Forensic traceability | 3, 7 | MET |
| C-F6 | Local-complete default | 12 | MET (UXR-024) |
| C-F7 | Allocator preflight | 1e | MET — Wave 1 |
| C-F8 | Git-tag occupancy | 1f | MET — Wave 1 |
| C-F9 | Single tag authority | 11 | MET — Wave 3 |
| C-F10 | Split-brain detection | 9 | MET — Wave 2 |
| C-NF1 | Spec single source | manifest | MET — Wave 4 |

See [gap matrix](../../../docs/knowledge/analysis/rw-contract-gap-matrix.md) for implementation and test mapping. Machine gates: [`rw-contract.yaml`](../rw-contract.yaml).

---

## Abort protocol

1. **PREFLIGHT failure:** No file modifications. Report step number and validator output.
2. **MUTATE partial failure:** Do not stage; do not commit. Working tree may be dirty — operator restores or continues fix.
3. **VALIDATE failure:** Do not commit (Step 9 before Step 10). If commit already made in error: new BUILD + re-RW; never force-move tags.
4. **PUBLISH failure:** Commit may exist; tags must not be force-moved. Bump BUILD and re-RW.

---

## Adopter integration

- All paths from `rw-config.yaml` at project root.
- Validators under `scripts_path` from config.
- Contract applies to intelligent agent RW; not dependent on ai-dev-kit epic numbering.

---

## Thin orchestrator (Wave 5)

Deterministic phases may be invoked via [`scripts/rw_orchestrator.py`](../scripts/rw_orchestrator.py), which reads gate definitions from [`rw-contract.yaml`](../rw-contract.yaml):

```bash
python packages/frameworks/workflow-mgt/scripts/rw_orchestrator.py preflight --requested E02:S01:T30 [--art]
python packages/frameworks/workflow-mgt/scripts/rw_orchestrator.py validate --internal-version 0.2.1.30+5
python packages/frameworks/workflow-mgt/scripts/rw_orchestrator.py publish --internal-version 0.2.1.30+5
```

**Agent-owned (not run by orchestrator):** MUTATE Steps 2–7, Step 8 stage, Step 10 commit. Full Step 9 validator suite beyond contract gates remains agent-scheduled per `.cursorrules`.

---

## Related

- [release-workflow-agent-execution.md](../KB/Documentation/Developer_Docs/vwmp/release-workflow-agent-execution.md)
- [canonical-rw-steps.yaml](../canonical-rw-steps.yaml)
- [rw-trigger-dual-source-parity.md](rw-trigger-dual-source-parity.md)
