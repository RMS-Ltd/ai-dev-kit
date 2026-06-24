---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-24T12:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Repository IA mover-wave checklist

**Program:** [FR-140](../kanban/fbu/FR-140-repository-information-architecture-steady-state-governance.md) · [IA policy](../governance/standards/repository-information-architecture-policy.md)  
**Use:** Before any structural mover wave (`git mv`, archive, delete) scoped under [FR-039](../kanban/fbu/FR-039-ai-dev-kit-project-review-and-legacy-clean-up.md).

---

## Preconditions (all required)

- [ ] Applicable **cartography sign-off** recorded:
  - [ ] Directory wave: [`REPOSITORY-DIRECTORY-AUDIT.md`](REPOSITORY-DIRECTORY-AUDIT.md) §4
  - [ ] File wave (if in scope): [`REPOSITORY-FILE-AUDIT.md`](REPOSITORY-FILE-AUDIT.md) §4
- [ ] **Scoped IPW/IDW** task filed with linked IPP — mover not inferred from audit alone (FR-140-F12)
- [ ] **Link sweep** plan for path renames (coordinate UXR-032 / `fbu/` if applicable)
- [ ] **Greenfield sync** planned if `packages/frameworks/**` touched ([P-GREENFIELD-SYNC](../../AGENTS.md))
- [ ] **Manifest regen** scheduled: `python packages/frameworks/workflow-mgt/scripts/maintenance/generate_repository_path_manifest.py --write`

---

## Wave execution

| Step | Action | Owner |
| ---- | ------ | ----- |
| 1 | IDW implements scoped movers only | Execution task |
| 2 | Run validators: `validate_repository_top_level_directories.py --strict`, `validate_repository_path_manifest.py` | CI / pre-commit |
| 3 | Regenerate manifest and commit in same change set | Execution task |
| 4 | `RW E…:S…:T… --art` on execution task | RW |

---

## Post-wave

- [ ] Update cartography report status if wave completes a directory/file bucket
- [ ] Update FR-039 wave tracker
- [ ] RW Step 7 four-surface reconciliation on releasing task

---

## References

- [ADR-033](../architecture/standards-and-adrs/ADR-033-repository-information-architecture-layered-governance.md)
- [IPP-E07S01T15](../implementation-cycles/IPP-E07S01T15-repository-information-architecture-steady-state-governance.md)
