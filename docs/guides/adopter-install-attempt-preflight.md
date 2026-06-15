---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-15T14:30:00Z
expires_at: null
housekeeping_policy: keep
---

# Adopter install attempt preflight

**Purpose:** Shared checklist before **SBL attempt 10**, **fynd.deals attempt 1**, or **Confidentia attempt 1**.  
**Programme:** [UXR-029](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/docs/kanban/fr-br/UXR-029-adk-install-path-experiment.md) · [T36](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/docs/kanban/epics/epic-06/story-09-ai-dev-kit-installation-and-adopter-integration/T36-adopter-path-selector-install-rc-uxr029.md) · [#52](https://github.com/RMS-Ltd/ai-dev-kit/issues/52)

---

## 1. Choose adoption path (ADR-030)

| Repo | Expected path | Profile |
| ---- | ------------- | ------- |
| Starborn Legacy | Shell + KMA (messy mature + git) | `arm-b` |
| fynd.deals | In-place brownfield | `arm-a` |
| Confidentia | In-place brownfield (governance-heavy) | `arm-a` |
| Empty / template | Greenfield FR-080 | `greenfield` |

Full selector: [INSTALL_IN_YOUR_PROJECT.md — Adopter Path Selector](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/INSTALL_IN_YOUR_PROJECT.md#adopter-path-selector-mature-repositories).

---

## 2. Pin ADK version

Record in attempt README:

- ADK git tag (e.g. `v0.4.1166+1`)
- Vendor SHA or lean bundle receipt
- Host repo branch + HEAD at install start

---

## 3. Phase 0 kit gates (all paths)

- [ ] `DOCUMENTATION_SCHEMA.md` published and linked
- [ ] `release_state_backend: sqlite` → DB exists **before** first RW
- [ ] Install RC validator available (`validate_install_rc.py`)
- [ ] Comprehension doc planned (`COMPREHENSION.md` or install receipt)

---

## 4. Path-specific prep

### Arm B (SBL attempt 10)

- [ ] Legacy PM archived (`docs-pre-ai-dev-kit/` or equivalent)
- [ ] Kit KMA **first pass blind** — no operator on proposal/synthesise; no `KMA-REFERENCE-EST-TREE` in agent context ([#52](https://github.com/RMS-Ltd/ai-dev-kit/issues/52))
- [ ] Post-KMA: score kit tree vs held-out reference (maintainer/operator only); minimal tweaks → SBL `FB-ADK-KMA-KANBAN-MIGRATION.md` §4
- [ ] Target: **0** ad-hoc KMA scripts
- [ ] Preflight index: [adk-install-into-sbl/attempt-10/README.md](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/adk-install-into-sbl/attempt-10/README.md)

### Arm A (fynd.deals / Confidentia attempt 1)

**Recon only** before full install:

- [ ] Map existing `docs/` vs proposed `kanban_root`
- [ ] Inventory production tags / version truth
- [ ] Decide: incremental KMA vs aligned topology (in-place RW+Kanban)
- [ ] Document continuity risks in task doc (no forced archive)

---

## 5. Orchestrator invocation

```bash
python packages/frameworks/workflow-mgt/scripts/install_greenfield_path.py \
  --project-root /path/to/adopter \
  --vendor-root /path/to/vendor/ai-dev-kit \
  --non-interactive \
  --adoption-path arm-b \
  --init-sqlite \
  --catalog v4 \
  --run-install-rc \
  --install-rc-strict
```

Replace `--adoption-path` with `arm-a` or `greenfield` as appropriate.

---

## 6. Install RC (install-complete gate)

```bash
python packages/frameworks/workflow-mgt/scripts/validation/validate_install_rc.py \
  --project-root /path/to/adopter \
  --profile arm-b \
  --strict \
  --report-json /tmp/install-rc-report.json
```

**Do not run first domain RW** until RC passes (unless documented waiver).

Human-readable rows: [install-rc-checklist.md](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/docs/governance/standards/install-rc-checklist.md).

---

## 7. FR-079 feedback package

Per attempt, submit to ai-dev-kit:

- GitHub issue (programme tracker)
- `feedback-payload.json` + diary
- Install RC JSON report
- Link to maintainer index (`adk-install-into-sbl/attempt-NN/`)

---

## 8. Synthesis timeline

```text
Phase 0 — Kit fixes (this repo)
Phase 1 — SBL attempt 10 (Arm B validation)
Phase 2 — fynd.deals + Confidentia recon
Phase 3 — Arm A full attempts
Phase 4 — Programme synthesis → Install RC at release candidate
```
