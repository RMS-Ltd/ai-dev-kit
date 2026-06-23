---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-10T16:00:00Z
expires_at: null
housekeeping_policy: keep
---

# T10 — Workflow encapsulation inventory matrix (FR-126)

**Task:** E02:S03:T10  
**Contract:** [workflow-encapsulation-contract.md](../Documentation/Developer_Docs/vwmp/workflow-encapsulation-contract.md)  
**Registry SoT:** `workflows/workflow-registry.yaml` v1.3.0 (13 atomic workflows)

**Legend:** **D** = delegatable · **P** = partial · **N** = not-ready

---

## 1. Full inventory matrix

| Registry key | Abbr | Command guide | KB agent-execution | CLAUDE/.cursorrules | Mode | Terminal tokens | Chain flags | Class | Gap summary |
| ------------ | ---- | ------------- | ------------------ | ------------------- | ---- | --------------- | ----------- | ----- | ----------- |
| release-workflow | RW | `rw.md` ✅ | `release-workflow-agent-execution.md` ✅ | `.cursorrules` + `CLAUDE.md` ✅ | implementation | RW COMPLETE / ABORTED / BLOCKED ✅ | — | **P** | Dual-source with `.cursorrules`; large inline block — MWF must delegate to `rw.md` only |
| update-kanban-workflow | UKW | `ukw.md` ✅ | `update-kanban-workflow-agent-execution.md` ✅ | `.cursorrules` ✅ | implementation | UKW complete (implicit); abort paths in guide | `-u/-p/-a/--rp/-c` | **P** | Dual-source; no single `UKW COMPLETE` token standardized |
| implementation-cycle-workflow | IPW | `ipw.md` ✅ | `implementation-planning-workflow-agent-execution.md` ✅ | `.cursorrules` ICW alias ✅ | plan | IPW COMPLETE / ABORTED / BLOCKED ✅ | — | **D** | ICW deprecated alias documented |
| implementation-delivery-workflow | IDW | `idw.md` ✅ | `implementation-delivery-workflow-agent-execution.md` ✅ | `.cursorrules` ✅ | implementation | IDW COMPLETE / ABORTED ✅ | `--rw` `--push` `--art` | **D** | Sub-orchestrator to RW; MWF Leg 2 target |
| meta-workflow | MWF | `mwf.md` ✅ | `meta-workflow-agent-execution.md` ✅ | `.cursorrules` + `CLAUDE.md` ✅ | implementation (orchestrator) | MWF COMPLETE / ABORTED / CHAIN PAUSED | forwards to IDW | **P** | BR-102: CHAIN PAUSED misused for mode; needs sub-agent contract (T11) |
| changelog-management-workflow | CMW | ❌ | ❌ (RW Step 9.5 + `.cursorrules` only) | `.cursorrules` CMW section ✅ | implementation | implicit | RW 9.5 auto | **P** | No `cmw.md`; no `CMW COMPLETE` token |
| package-version-workflow | PVW | ❌ | `package-version-workflow-agent-execution.md` ✅ | `.cursorrules` PVW ✅ | implementation | implicit | RW Step 2.5 | **P** | No `pvw.md` slash command |
| post-implementation-review | PIR | ❌ | `pir-workflow-agent-execution.md` ✅ | ❌ | implementation | not standardized | — | **N** | No trigger routing in CLAUDE.md |
| intake-workflow | INTAKE | ❌ | `intake-workflow-agent-execution.md` ✅ | skill `intake-process` only | implementation | not standardized | — | **N** | No `INTAKE` in CLAUDE routing |
| migration-workflow | MIGRATION | ❌ | `migration-workflow-agent-execution.md` ✅ | ❌ | implementation | not standardized | — | **N** | Example/template workflow |
| refactor-workflow | REFACTOR | ❌ | `refactor-workflow-agent-execution.md` ✅ | ❌ | implementation | not standardized | — | **N** | Example/template workflow |
| testing-workflow | TESTING | ❌ | `testing-workflow-agent-execution.md` ✅ | ❌ | implementation | not standardized | — | **N** | Example/template workflow |
| framework-health-monitoring-workflow | FHM | ❌ | `agents/fhm/AGENTS.md` only | ❌ | implementation | not standardized | — | **N** | Deterministic-lean; no vwmp guide |

**Composite (non-atomic):** `composite_workflows.mwf.delivery` — legs `[ipw, idw_rw]`; extension spec in contract Appendix A.

---

## 2. Gap remediation plan

### P0 — Operator-chained with RW today

| Workflow | Deliverables | Owner wave |
| -------- | ------------ | ---------- |
| **RW** | Document `rw.md` as sole MWF delegation target; parity checklist vs `.cursorrules` | Wave 2 |
| **UKW** | Standardize `UKW COMPLETE` token in `ukw.md`; parity checklist | Wave 2 |
| **CMW** | Create `.claude/commands/cmw.md`; `CMW COMPLETE` token; cross-link RW Step 9.5 | Wave 2 |
| **PVW** | Create `.claude/commands/pvw.md`; link KB guide | Wave 2 |

### P1 — MWF delivery legs

| Workflow | Deliverables | Owner wave |
| -------- | ------------ | ---------- |
| **IPW** | Confirm sub-agent delegation pattern in MWF (no parent plan-mode gate) | Wave 3 (T11) |
| **IDW** | Document as MWF black-box through `IDW COMPLETE` | Wave 3 |
| **MWF** | BR-102 fix: sub-agent legs; narrow CHAIN PAUSED | Wave 3 (**E02:S03:T11**) |

### P2 — KB-only workflows with real use

| Workflow | Deliverables |
| -------- | ------------ |
| **PIR** | `pir.md` command guide OR explicit KB-only exception in registry |
| **INTAKE** | `intake.md` or document skill-based delegation |

### P3 — Example / template workflows

| Workflow | Deliverables |
| -------- | ------------ |
| MIGRATION, REFACTOR, TESTING, FHM | Mark `mwf_composable: false` in registry notes; defer until productized |

---

## 3. MWF `delivery` compliance check (AC4)

| Check | Result |
| ----- | ------ |
| `mwf.md` delegates IPW to `ipw.md` | ✅ |
| `mwf.md` delegates Leg 2 to `idw.md` with `--rw` | ✅ |
| `mwf.md` inlines RW steps | ❌ not present |
| Mode handoff to operator (pre-BR-102 fix) | ⚠️ Leg 1/2 CHAIN PAUSED for mode — **remediation T11** |

---

## 4. Verification (Wave 1)

- [x] V1 — contract doc exists
- [x] V2 — 13 registry rows
- [x] V3 — class + evidence per row
- [x] V4 — P0–P3 table with paths
- [x] V5 — composite extension in contract Appendix A
- [ ] V6–V10 — later waves

---

## References

- [IPP-E02S03T10](../../../../docs/implementation-cycles/IPP-E02S03T10-workflow-encapsulation-integrity-mwf-fr126.md)
- [FR-126](../../../../docs/kanban/fbu/FR-126-workflow-encapsulation-integrity-mwf-leverage.md)
