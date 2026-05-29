# E7:S06:T10 – RW Workflow Windsurf Impact Review

**Task:** E7:S06:T10
**Workflow:** Release Workflow (RW)
**Review Date:** 2026-03-18
**Status:** Complete

---

## Windsurf Impact

### Extent of Windsurf-Specific Logic

The .windsurf skills for RW (`version-bump`, `rw-execute`, `readme-update`) encode procedural, step-by-step instructions. They mirror the RW step structure but frame execution as "invoke skill X, invoke skill Y" rather than agent-driven reasoning.

### Divergence from .cursorrules

.cursorrules explicitly requires:
- **DO NOT** run deterministic scripts (e.g., `scripts/release_workflow.py`)
- **DO** execute using intelligent agent-driven execution
- THINK FIRST, ACT SECOND; BE ADAPTIVE
- Handle failures with workarounds, not rigid sequences

The .windsurf `rw-execute` skill lists 18 steps in fixed order with "Invoke X Agent", "Use Y skill" – a deterministic orchestration pattern. .cursorrules contrasts "DELEGATE TO SCRIPTS (Deterministic)" vs "HANDLE WITH INTELLIGENCE (Adaptive)" and assigns version parsing, git ops to scripts, while pattern-matching failures, missing files, script errors to agent intelligence.

### Risk to Cursor-Native Execution

**Medium risk.** Skills that prescribe "Step 1, Step 2, ..." can steer Cursor models toward rigid execution. The agentic intelligence (synthesis, adaptive fallbacks, manual workarounds) is not captured in the skills. Migration should preserve .cursorrules as the source of truth for RW behavior; any migrated content must reinforce agent-driven execution, not script-orchestration.

---

## Skill Mappings

| .windsurf Skill | Purpose | .cursorrules Equivalent | Target Path |
|-----------------|---------|--------------------------|-------------|
| version-bump | Update version.py per RC.EPIC.STORY.TASK+BUILD | RW Step 2 (version bump logic); DELEGATE TO SCRIPTS for parsing | .cursor/skills/ or keep in .cursorrules |
| rw-execute | Execute RW steps (18-step sequence) | Full RW section in .cursorrules; agent-driven, not scripted | Do NOT migrate as deterministic script – .cursorrules is authoritative |
| readme-update | Update README version info | RW Step 5; Documentation Agent | .cursor/skills/readme-update or inline in .cursorrules |

**Migration recommendation:** Migrate `version-bump` and `readme-update` as reference skills if Cursor supports them; ensure they document "use agent reasoning, not rigid scripts." Do not migrate `rw-execute` as a step-by-step orchestrator – it conflicts with .cursorrules agentic model.

---

## Migration Plan

For T01 (Windsurf artifact cleanup):

1. **Copy skills to .cursor/skills/:** `version-bump`, `readme-update` – adapt SKILL.md to emphasize agent-driven use; schema and integration points are useful.
2. **Do NOT migrate rw-execute as-is:** The 18-step rigid sequence would reinforce the anti-pattern. Either (a) redraft to "RW execution principles" (agentic) or (b) omit and rely on .cursorrules.
3. **Update .cursorrules:** No structural changes; ensure RW section remains the single source of truth. Add pointer to .cursor/skills/ for version-bump and readme-update if migrated.
4. **Remove .windsurf/skills/:** After migration, delete .windsurf/skills/version-bump, rw-execute, readme-update (or move to archive).
5. **Validate:** Run RW in Cursor; confirm agent executes intelligently, not as script-orchestration.

---

## Anti-Pattern Findings

**Finding:** `rw-execute` presents a deterministic, 18-step sequence ("Step 1... Step 18") with "Invoke X Agent", "Use Y skill." This matches the anti-pattern: over-reliance on rigid scripts, "run X then Y" without reasoning or adaptive fallbacks.

**Expected (per .cursorrules):** Agent-driven execution: analyze context, make decisions, handle failures with workarounds, synthesize narrative updates. RW explicitly forbids running `release_workflow.py` and requires intelligent execution.

**Recommendation:** Do not migrate rw-execute as a procedural checklist. Preserve .cursorrules RW section as the canonical agentic specification. If migrating version-bump and readme-update, add a header: "Use with agent reasoning; do not treat as deterministic script."

**Status:** Anti-pattern observed in rw-execute; version-bump and readme-update are more declarative (schema, steps) but should be framed as guidance, not rigid sequences.
