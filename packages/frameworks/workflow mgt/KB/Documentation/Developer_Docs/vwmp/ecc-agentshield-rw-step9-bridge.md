---
lifecycle: evergreen
ttl_days: null
created_at: 2026-05-26T18:00:00Z
expires_at: null
housekeeping_policy: keep
---

# ECC AgentShield — optional RW Step 10 add-on (non-blocking)

**Task:** [E6:S09:T06](../../../../../../docs/project-management/kanban/epics/Epic-6/Story-009-ai-dev-kit-installation-and-adopter-integration/T06-ecc-harness-phases-2-5-fr098.md)  
**FR:** [FR-098](../../../../../../docs/project-management/kanban/fr-br/FR-098-ecc-optional-harness-layer-integration.md)

---

## Purpose

Document how adopters may run **ECC AgentShield-style security scan skills** as **supplementary** signal during Release Workflow — **without** replacing or blocking ADK’s canonical Step 10 validator suite.

---

## Authority model

| Layer | Role |
| ----- | ---- |
| **ADK Step 10** | **Authoritative** — `validate_branch_context.py`, changelog validators, `validate_board_stamp_diff.py`, `validate_release_readiness.py` Gates 1–9, etc. |
| **ECC AgentShield** | **Optional add-on** — extra security heuristics; failures are **non-blocking** unless the project explicitly promotes them to CI policy |

**Invariant:** RW **must not** skip ADK validators when AgentShield reports success, and **must not** treat AgentShield failure alone as RW ABORTED.

---

## Suggested invocation pattern

After ADK Step 9 (IDE lint check) and **before** or **after** ADK Step 10 (project choice), an agent may:

1. Load ECC security scan skill per upstream ECC docs (MIT OSS path only).
2. Run scan on **staged diff** or **release-scope files** from RW Steps 2–7.
3. Append findings to the RW session summary (markdown bullet list).
4. Proceed to Step 10 regardless of AgentShield warnings unless the user has adopted a **stricter local policy**.

---

## Configuration

- Set `hook_profile: minimal` and keep `disabled_hooks` populated per [bridge template](../../../config/ecc-adk-bridge.yaml.template).
- Do **not** wire AgentShield into `git commit` hooks that auto-commit (conflicts with RW-only policy).

---

## References

- [Release Workflow agent execution](./release-workflow-agent-execution.md) — Step 10 validators
- [ECC + ADK cheatsheet](../../../../../../docs/documentation/user-docs/ecc-adk-integration-cheatsheet.md)
- [Integration specification](../../../../../../docs/architecture/standards-and-adrs/ecc-adk-harness-layer-integration-specification.md)
