# Package Version Workflow (PVW) — Slash Command

**Invocation:** `/pvw`  
**Arguments:** `$ARGUMENTS` (optional)  
**Plain-text alias:** `PVW` / `pvw` (case-insensitive)

---

## Environment Check (AC3)

- If Bash tool calls are **NOT** available: **`PVW BLOCKED: tool execution is unavailable in this session.`**
- If available: proceed.

---

## Execution contract (FR-126 encapsulation)

| Property | Value |
| -------- | ----- |
| **Mode** | implementation |
| **Terminal states** | `PVW COMPLETE`, `PVW ABORTED`, `PVW SKIPPED` (no package changes) |
| **Delegation SoT** | This file + [package-version-workflow-agent-execution.md](packages/frameworks/workflow-mgt/KB/Documentation/Developer_Docs/vwmp/package-version-workflow-agent-execution.md) |
| **Dual-source** | `.cursorrules` PVW section — keep aligned |

---

## Triggers

| Invocation | Meaning |
| ---------- | ------- |
| `PVW` / `/pvw` | Manual package version analysis and bumps |
| RW Step 2.5 | Automatic after project version bump (before changelog) |

---

## Steps (6)

1. Detect changed packages  
2. Analyze package changes  
3. Determine version bumps (intelligent — criteria as guidance)  
4. Execute version updates (README, package changelogs)  
5. Validate  
6. Document → **`PVW COMPLETE`**

Use Workflow Step Tracker: `pvw-step-1` … `pvw-step-6`.

---

## Abort protocol

Failures → **`PVW ABORTED`**. When RW Step 2.5 and no packages changed → **`PVW SKIPPED`** (document; cancel tracker steps).

---

## References

- [package-version-workflow-agent-execution.md](packages/frameworks/workflow-mgt/KB/Documentation/Developer_Docs/vwmp/package-version-workflow-agent-execution.md)
- [workflow-encapsulation-contract.md](packages/frameworks/workflow-mgt/KB/Documentation/Developer_Docs/vwmp/workflow-encapsulation-contract.md)
