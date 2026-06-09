---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-09T20:00:00Z
expires_at: null
housekeeping_policy: keep
---

# RW Contract Gap Matrix

**Program:** [FR-122](../../kanban/fr-br/FR-122-release-workflow-architectural-contract-release-transaction.md) · [E02:S01:T30](../../kanban/epics/epic-02/story-01-rw-agent-execution-and-docs/T30-rw-architectural-contract-release-transaction-fr122.md)  
**Contract:** [rw-architectural-contract.md](../../../packages/frameworks/workflow-mgt/docs/rw-architectural-contract.md) · [ADR-027](../../architecture/standards-and-adrs/ADR-027-rw-release-transaction-contract.md)  
**Last updated:** 2026-06-09 (Wave 0 — baseline)

**Legend:** MET · PARTIAL · MISSING · VIOLATED · PLANNED

---

## Summary (Wave 0 baseline)

| Status | Share | Notes |
| ------ | ----- | ----- |
| MET | ~40% | Task gates, branch safety, FR-092 Step 7, UXR-024, CI parity |
| PARTIAL | ~35% | SAA path, release readiness scope, execution log |
| MISSING / VIOLATED | ~25% | Allocator preflight, tag occupancy, coherence, tag authority |

---

## Clause matrix

| Clause | Requirement | Implementation | Test | Status | Wave |
| ------ | ----------- | -------------- | ---- | ------ | ---- |
| C-F1 | Release identity `E:S:T` | `validate_rw_task_complete.py`, `validate_rw_task_intent.py` | RW scenario tests | MET | — |
| C-F2 | Version coherence | `version.py`, changelogs, README, SAA | T4 coherence (planned) | PARTIAL | 2 |
| C-F3 | Transaction abort | Step 1/1b–1d blocking in `.cursorrules` | Agent contract | PARTIAL | 3 |
| C-F4 | Kanban atomicity | FR-092 Step 7, `update_kanban_docs.py` | `validate_release_readiness.py` | MOSTLY MET | — |
| C-F5 | Forensic traceability | Immutable changelog timestamp, four-surface report | BR-074 guards | MET | — |
| C-F6 | Local-complete default | UXR-024 Step 12 default off | Policy review | MET | — |
| C-F7 | Allocator preflight | `validate_allocator_health.py` + rw-config | T1 | MET | 1 |
| C-F8 | Git-tag occupancy | `validate_git_tag_occupancy.py` Step 1f | T2 | MET | 1 |
| C-F9 | Single tag authority | `create_rw_tags()` exists; agent bypass observed | T3, T6 (planned) | VIOLATED | 3 |
| C-F10 | Split-brain detection | None cross-surface | T4 (planned) | MISSING | 2 |
| C-NF1 | Spec single source | Contract doc (this wave) + `canonical-rw-steps.yaml` | Structural | PARTIAL | 0/4 |
| C-NF2 | Agent/script split | ADR-027 + contract | ADR review | PLANNED | 0 |
| C-NF3 | Idempotency | `resolve_rw_build.py` | `test_resolve_rw_build.py` | MET | — |
| C-NF4 | Config portability | `rw_config_loader.py` | Validator config tests | PARTIAL | 1 |
| C-NF5 | Observability | FR-044 logger, release readiness | Partial adoption | PARTIAL | — |

---

## Incident traceability (`0.6.9.26+2`)

| Failure mode | Clauses failed | Root cause |
| ------------ | -------------- | ---------- |
| README `v0.4.11+2` vs DB `v0.4.1096+2` | C-F2, C-F10 | Truncated SAA DB; no coherence gate |
| SemVer tag `v0.4.11` collision | C-F7, C-F8 | No preflight; no git-tag floor |
| Raw `git tag` attempt | C-F9 | No Step 11 hard gate |

---

## Wave completion checklist

| Wave | Deliverable | Matrix update |
| ---- | ----------- | ------------- |
| 0 | Contract + ADR-027 + this matrix | Baseline ✅ |
| 1 | Step 1e/1f validators | C-F7, C-F8 → MET ✅ |
| 2 | `validate_release_coherence.py` | C-F2, C-F10 → target MET |
| 3 | Step 11 tag authority | C-F9 → target MET |
| 4 | `rw-contract.yaml` | C-NF1 → target MET |
| 8 | 10-run streak | C-F2–F10 sustained |

---

## References

- [IPP-E02S01T30](../../implementation-cycles/IPP-E02S01T30-rw-architectural-contract-release-transaction.md) §3 Test design
- [workflow-flaws-reference-guide.md](../../architecture/standards-and-adrs/workflow-flaws-reference-guide.md) — WF-005
