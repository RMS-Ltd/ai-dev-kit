---
lifecycle: evergreen
ttl_days: null
created_at: 2026-05-30T23:30:00Z
expires_at: null
housekeeping_policy: keep
---

# ADR-013: IDE command allowlist catalog and enforcement

### Version 0.0.1

| Version | Change |
| ------- | ------ |
| 0.0.1 | Initial decision — catalog + validator + Cursor maintainer playbook; BR-039 boundary. |

**Status:** Accepted  
**Date:** 2026-05-30  
**Deciders:** User (Ruari Mears)  
**Implementing task:** [E06:S07:T107](../../project-management/kanban/epics/epic-06/story-07-adk-implementation-analysis-and-package-management/T107-ide-command-whitelist-optimization.md)  
**Planning package:** [IPP-E06S07T107](../../implementation-cycles/IPP-E06S07T107-ide-command-whitelist-optimization.md)  
**Related:** [BR-039](../../project-management/kanban/fr-br/BR-039-cascade-whitelist-security-prompt-usability-blocker.md), [ide-whitelist-guide.md](../../developer-tools/ide-whitelist-guide.md), `.cursor/whitelist-patterns.yaml`

---

## Context

Maintainers run **RW**, **UKW**, and validation scripts through Cursor agents. Cursor stores **concrete** approved commands; small changes (paths, `--requested` values, version strings in tags) trigger repeated approval prompts. A draft pattern catalog existed without product integration or automated proof that patterns were coherent.

[BR-039](../../project-management/kanban/fr-br/BR-039-cascade-whitelist-security-prompt-usability-blocker.md) tracks **vendor** whitelist failures (Cascade/Windsurf). That is **orthogonal** to this ADR.

---

## Decision

Adopt a **three-layer enforcement model** for ai-dev-kit (Cursor-primary):

| Layer | Artifact | Role |
| ----- | -------- | ---- |
| **Catalog** | `.cursor/whitelist-patterns.yaml` | Version-controlled regex SoT with `examples` / `negative_examples` |
| **Proof** | `validate_whitelist_patterns.py` | CI/local check that patterns compile and examples match |
| **Playbook** | `docs/developer-tools/ide-whitelist-guide.md` | How maintainers map patterns into **Cursor Settings → Auto-Run / command allowlist** (manual; product does not load YAML automatically) |

**Alternatives considered:**

1. **Catalog only** — rejected: no regression signal when patterns drift from RW commands.
2. **Hook automation** — deferred: no stable Cursor hook API documented for auto-approval from YAML at implementation time.
3. **Vendor fix only (BR-039)** — insufficient for Cursor maintainer workflows.

### Security rules

- No unbounded `^.*$` patterns in the catalog.
- Destructive operations (`rm`, `git push --force`) are **not** pre-approved via broad git patterns; document explicit review.
- Use `{PROJECT_ROOT}` placeholder instead of maintainer-specific absolute paths in committed YAML.

### Portability

Adopters may copy `.cursor/whitelist-patterns.yaml` and substitute `{PROJECT_ROOT}`; run the validator from repo root.

---

## Consequences

### Positive

- Repeatable RW/UKW command shapes documented and testable.
- Honest boundary with BR-039 (repo vs product).

### Negative

- Maintainers must still configure Cursor allowlist UI manually until product supports pattern import.
- Regex maintenance cost when script paths change.

---

## Compliance

- New terminal-heavy tasks should add patterns + examples to the catalog and run `validate_whitelist_patterns.py` before release.
- Changelog language for IDE behavior: “attempted” / “change implemented” until maintainer confirms prompt reduction.

---

## References

- [IPP-E06S07T107](../../implementation-cycles/IPP-E06S07T107-ide-command-whitelist-optimization.md)
- [T107](../../project-management/kanban/epics/epic-06/story-07-adk-implementation-analysis-and-package-management/T107-ide-command-whitelist-optimization.md)
- [ipw-adr-necessity-checklist.md](ipw-adr-necessity-checklist.md) — §2.5 REQUIRED for T107
