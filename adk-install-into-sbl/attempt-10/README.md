# Starborn Legacy — ADK install attempt 10 (preflight)

**Status:** **PENDING** — run after ai-dev-kit Phase 0 lands (T36 AC5–AC6)  
**Predecessor:** [attempt 09](../attempt-09/README.md) · **GitHub:** [ai-dev-kit #52](https://github.com/RMS-Ltd/ai-dev-kit/issues/52)  
**Arm:** **B** — shell + selective migration (KMA)  
**Maintainer task:** [E06:S09:T26](../../docs/kanban/epics/epic-06/story-09-ai-dev-kit-installation-and-adopter-integration/T26-starborn-legacy-adk-install-program.md) · [E06:S09:T36](../../docs/kanban/epics/epic-06/story-09-ai-dev-kit-installation-and-adopter-integration/T36-adopter-path-selector-install-rc-uxr029.md)

---

## Phase 0 kit prerequisites (ai-dev-kit)

Before starting attempt 10, confirm the pinned ADK release includes:

| Gate | Artifact |
| ---- | -------- |
| Install RC checklist | `validate_install_rc.py` + `install-rc-checklist.yaml` |
| Docs schema | [DOCUMENTATION_SCHEMA.md](../../docs/governance/standards/DOCUMENTATION_SCHEMA.md) |
| Layered orchestrator | `install_greenfield_path.py --adoption-path arm-b --init-sqlite --run-install-rc` |
| SQLite before RW | `init_release_state_db.py` or `import_legacy.py` |
| KMA kit-owned | **0** ad-hoc scripts under `scripts/` / `tools/` |

**Operator freeze (from attempt 09):** No domain RW on SBL until Install RC **PASS**.

---

## Attempt 10 success criteria

| Metric | Attempt 09 | Attempt 10 target |
| ------ | ---------- | ----------------- |
| Install RC | ~50% FAIL | **PASS** (`--profile arm-b --strict`) |
| Ad-hoc KMA scripts | 6 | **0** |
| Release state | Legacy YAML (4 RWs) | **SQLite** before first RW |
| Sign-off vs RC | 7 READY / RC FAIL | Both aligned |

---

## Recommended command sequence

```bash
# 1. Pin ADK (record tag in this README when started)
# 2. Archive legacy (if not already): docs-pre-ai-dev-kit/

# 3. Orchestrator (from vendor tree or packages/frameworks)
python packages/frameworks/workflow-mgt/scripts/install_greenfield_path.py \
  --project-root . \
  --vendor-root vendor/ai-dev-kit \
  --non-interactive \
  --adoption-path arm-b \
  --init-sqlite \
  --catalog v4 \
  --run-install-rc \
  --install-rc-strict

# 4. KMA (kit workflow — no ad-hoc scripts)
#    Operator tree required before agent writes — see DUPLICATE_EPIC_POLICY.md

# 5. COMPREHENSION.md — state kanban root, docs authority, restore ≠ migrate

# 6. Re-run Install RC until PASS, then first domain RW
python packages/frameworks/workflow-mgt/scripts/validation/validate_install_rc.py \
  --project-root . --profile arm-b --strict
```

---

## FR-079 package layout (SBL repo)

Mirror attempt 09 under `starborn_legacy/logs/attempt-10/`:

- `feedback-package/feedback-payload.json`
- `greenfield-install-diary.md`
- `TARGET-ES-TREE-*.md` (operator-authored before KMA)
- `install-rc-report.json` (from `--report-json`)

---

## References

- [adopter-install-attempt-preflight.md](../../docs/guides/adopter-install-attempt-preflight.md)
- [greenfield-brownfield synthesis](../../docs/knowledge/articles/greenfield-brownfield-selective-adoption-sbl-attempt-09.md)
- [UXR-029](../../docs/kanban/fr-br/UXR-029-adk-install-path-experiment.md)
