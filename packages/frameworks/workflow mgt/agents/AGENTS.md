# Workflow Agent Registry

This directory contains focused, single-purpose agent definitions. Each sub-directory contains an AGENTS.md that scopes Claude Code to **one workflow only**.

## How to Use

Invoke Claude Code from the relevant sub-directory to load only that workflow's agent context:

```
cd "packages/frameworks/workflow mgt/agents/rw"
claude
```

When invoked this way, the agent will:
- Accept only its designated trigger
- Refuse unrelated requests with a redirect message
- Execute its workflow steps with full fidelity to the canonical definition

## Workflow Agents

| Directory | Trigger | Workflow | Type |
|-----------|---------|----------|------|
| `rw/` | `RW`, `RW -d`, `RW -k` | Release Workflow | Agentic |
| `ukw/` | `UKW` | Update Kanban Workflow | Agentic |
| `cmw/` | `CMW` | Changelog Management Workflow | Deterministic |
| `ipw/` | `IPW`, `ICW` | Implementation Planning Workflow | Agentic |
| `pir/` | `PIR` | Post-Implementation Review | Agentic |
| `intake/` | `INTAKE` | FR/BR/UXR Intake Workflow | Agentic |
| `migration/` | `MIGRATION` | Migration Workflow | Agentic |
| `refactor/` | `REFACTOR` | Refactor Workflow | Agentic |
| `testing/` | `TESTING` | Testing Workflow | Agentic |
| `pkg-version/` | `PKG-VERSION` | Package Version Workflow | Agentic |
| `fhm/` | `FHM` | Framework Health Monitoring | Deterministic |

## Sub-Invocation Map

Some agents sub-invoke others. These invocations happen automatically within workflow execution:

```
RW Step 2.5  → PKG-VERSION   (monorepo sub-package bumps)
RW Step 9.5  → CMW           (changelog exceeds 1000 lines)
RW Step 16   → PIR           (Epic/Story completion criteria met)
RW Step 7    → (scoped UKW)  (not a full UKW — scoped kanban sync only)
```

## Note on Hierarchy

Claude Code loads AGENTS.md files from the working directory up to the project root. The root-level `AGENTS.md` (which contains the IPW gate and multi-agent definitions) will still be loaded alongside a workflow-specific agent. The sub-directory agent takes precedence for scope enforcement via its explicit refusal directive.

For maximum isolation, invoke from the sub-directory rather than the project root.
