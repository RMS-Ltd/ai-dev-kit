---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-14T18:00:00Z
expires_at: null
housekeeping_policy: keep
---

# E06:S09:T35 — Kanban v4 three-tier catalogue (FR-132)

**Task ID:** E06:S09:T35  
**Status:** COMPLETE  
**Priority:** HIGH  
**Created:** 2026-06-14  
**Last updated:** 2026-06-14 (**v0.6.9.35+1** — v4 catalogue shipped; RW E06:S09:T35)  
**Code:** E06S09T35  
**Version anchor:** **v0.6.9.35+1** (SemVer **v0.4.1163+1**)

**Parent program:** [E06:S09:T26](T26-starborn-legacy-adk-install-program.md) · [Issue #51](https://github.com/RMS-Ltd/ai-dev-kit/issues/51)

**Source FR:** [FR-132](../../../fr-br/FR-132-kanban-v4-three-tier-catalogue.md) · [FR-131](../../../fr-br/FR-131-canonical-abstract-task-library-catl.md) (CATL)

**Predecessor:** [E06:S09:T34](T34-kanban-v35-packaged-catalog-small-tier.md) (v3.5 Small tier) · [E06:S09:T27](T27-kanban-v32-package-rewrite-installer-f9-f17.md) (v3.2 baseline)

**Analysis / spec:**
- [13-v4-three-tier-catalogue.md](../../../../knowledge/analysis/kanban-v2/13-v4-three-tier-catalogue.md)
- [V35_TO_V4_RENUMBER_MAP.md](../../../../../../packages/frameworks/kanban/guides/V35_TO_V4_RENUMBER_MAP.md)

**Package SoT:** `packages/frameworks/kanban/scripts/kanban_v4_catalog.py`

---

## Scope

Ship **Kanban v4** — explicit **Core (E01–E08) / Ancillary (E11–E20) / Domain (E24+)** catalogue, duplicate-epic policy, fully populated E/S templates, CATL bootstrap tasks, v4 fresh install (default `--catalog v4`), migration validators, and KMA playbook updates.

Extends v3.5 (T34) per operator v4 plan; addresses [Issue #51](https://github.com/RMS-Ltd/ai-dev-kit/issues/51) (SBL migration / duplicate epic numbering).

**Out of scope:** ai-dev-kit live `docs/kanban/` renumber (maintainer dogfood); SBL attempt 09 operator replay (FR-132-F6).

---

## Input

- [FR-132](../../../fr-br/FR-132-kanban-v4-three-tier-catalogue.md)
- [FR-131](../../../fr-br/FR-131-canonical-abstract-task-library-catl.md)
- [E06:S09:T31](T31-agentic-kanban-migration-agent-fr127.md) (KMA baseline)
- [sbl-attempt-09-kanban-v4-replay.md](../../../../knowledge/analysis/projects/sbl-attempt-09-kanban-v4-replay.md)

---

## Deliverable

1. **`kanban_v4_catalog.py`** — unified `EpicRecord` / `StoryRecord`; E01–E24 placeholder; `assert_v4_fingerprint`.
2. **`templates/v4/tiers/**`** — abstract epic/story files per Template Content Contract.
3. **CATL** — `templates/v4/tasks/catl_manifest.yaml`; E02:S02 bootstrap tasks; `generate_task_templates.py --catl-manifest`.
4. **Guides** — `DUPLICATE_EPIC_POLICY.md`, `TEMPLATE_CONTENT_CONTRACT.md`, `LEGACY_KANBAN_MIGRATION.md`, `KANBAN_V4_ADOPTION.md`.
5. **Installer** — `install_kanban_framework.py --catalog v4` (default); `install_v4_catalog.py`; migration map validator.
6. **KMA** — duplicate-epic matrix gate in migration agent execution guide.
7. **Validators** — `validate_v4_template_completeness.py`, `validate_migration_map.py`.
8. **Greenfield mirror** — sync per P-GREENFIELD-SYNC (operator).

---

## Acceptance criteria

- [x] **AC1:** `validate_v4_template_completeness.py --strict` passes on packaged v4 templates.
- [x] **AC2:** Fresh install defaults to v4 catalog; agent resolves `SEC` → E07 and `COMPLY` → E15.
- [x] **AC3:** KMA Step 2 requires duplicate-epic matrix before writes.
- [x] **AC4:** FR-132-F1–F5 implemented; FR-131 CATL manifest + bootstrap tasks wired.
- [x] **AC5:** RW release @ **E06:S09:T35** (version, changelog, kanban Step 7, commit, tag).
- [ ] **AC6:** FR-132-F6 SBL attempt 09 replay (operator verification).

---

## RW trigger

```
RW E06:S09:T35
```

---

## Verification

```bash
python3 packages/frameworks/kanban/scripts/validation/validate_v4_template_completeness.py --strict
python3 packages/frameworks/kanban/scripts/validation/validate_migration_map.py --strict
```
