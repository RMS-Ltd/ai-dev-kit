---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-11T14:00:00Z
expires_at: null
housekeeping_policy: keep
---

# E06:S09:T33 — Planning: ADK package update mechanism (FR-129)

**Host Task:** [`T33-adk-package-update-mechanism-fr129.md`](../kanban/epics/epic-06/story-09-ai-dev-kit-installation-and-adopter-integration/T33-adk-package-update-mechanism-fr129.md) **(E06:S09:T33)**  
**Planning for:** [FR-129 — ADK package update mechanism](../kanban/fr-br/FR-129-adk-package-update-mechanism-fr129.md)  
**Status:** Published (MWF Leg 1 — IPW)

---

## 1. Requirements (Ascertained Baseline)

| ID | Requirement | Source |
| -- | ----------- | ------ |
| RF1 | Install manifest records vendor root, channel, pinned version, packages | FR-129-F1 |
| RF2 | `check` mode reports current vs target without mutating | FR-129-F2 |
| RF3 | `update` with `--dry-run` previews vendor sync | FR-129-F3 |
| RF4 | Git vendor channel: fetch + checkout release tag in vendor root | FR-129-F4 |
| RF5 | Copy-sync channel for tarball/fixture pulls (`--source-vendor`) | FR-129-F5 |
| RF6 | Post-update `verify_vendor_tree` integration | FR-129-F6 |
| RF7 | Host-scaffold drift report (IPW/IDW/MWF, rw-config, rules) | FR-129-F7 |
| RF8 | INSTALL documents update paths; no silent host overwrite | FR-129-F8 |
| RF9 | Idempotent when already at target version | FR-129-NF1 |
| RF10 | Coordinate with FR-030 — ship `update_adk_packages.py` v1, not full CLI | FR-129 scope |

**Out of scope v1:** Full `ai-dev-kit` CLI; automatic host file patching; Kanban re-init on update.

---

## 2. Specification

### 2.1 Goal

Productized **in-place ADK package update** for brownfield adopters: manifest + check/update script + verification + scaffold report — superseding manual `git checkout tags/...` runbooks.

### 2.2 Manifest (`.ai-dev-kit.yaml` v1.1)

Extends existing marker with optional `vendor` block:

```yaml
version: "1.1.0"
default_backend: git-submodule
vendor:
  root: vendor/ai-dev-kit
  channel: git | copy-sync
  pinned_semver: v0.4.1140
  pinned_internal: v0.4.1140+2
  installed_at: 2026-06-11T12:00:00Z
packages:
  workflow-mgt:
    path: packages/frameworks/workflow-mgt
  kanban:
    path: packages/frameworks/kanban
frameworks: {}
```

### 2.3 CLI surface (`update_adk_packages.py`)

| Mode | Flags | Behaviour |
| ---- | ----- | --------- |
| `check` | `--target-tag`, `--project-root` | Compare manifest / git HEAD vs target |
| `update` | `--target-tag`, `--dry-run`, `--source-vendor` | Sync vendor; verify; receipt; scaffold report |
| `init-manifest` | `--vendor-root`, `--channel`, `--target-tag` | Bootstrap manifest from detected state |

Channels: **git** (vendor `.git` present), **copy-sync** (`--source-vendor` required).

### 2.4 Scaffold review paths

`.cursorrules`, `rw-config.yaml`, `CLAUDE.md`, `AGENTS.md`, `.claude/commands/ipw.md`, `idw.md`, `mwf.md` — report only; never auto-overwrite.

### 2.5 Status transition intent

- Step 1: `TODO → IN PROGRESS` on T33
- Final: `COMPLETE` when AC1–AC6 evidenced (SBL fixture via copy-sync in tests; git path documented)

---

## 3. Test design

| ID | Check | Covers |
| -- | ----- | ------ |
| V1 | Manifest load/save round-trip | RF1 |
| V2 | `check` reports behind/at target | RF2, AC4 |
| V3 | Copy-sync update idempotent at target | RF5, RF9, AC1 |
| V4 | Dry-run makes no filesystem changes | RF3 |
| V5 | Post-update `verify_vendor_tree` invoked | RF6 |
| V6 | Scaffold report lists existing host files | RF7, AC2 |
| V7 | `pytest` on `test_update_adk_packages.py` | AC6 |

---

## 4. Implementation plan

| Step | Action |
| ---- | ------ |
| **1** | **[MANDATORY]** T33 `TODO → IN PROGRESS`; link IPP |
| **2** | Add `adk_manifest.py` (load/save/ensure) |
| **3** | Add `update_adk_packages.py` (check/update/init-manifest) |
| **4** | Add `test_update_adk_packages.py` |
| **5** | Update `INSTALL_IN_YOUR_PROJECT.md` § update procedure |
| **6** | `sync_greenfield_install.py` mirror |
| **7** | Reconcile T33/FR-129/kboard status per actual completion |

---

## 5. Documentation deliverables

| Artifact | Path / action |
| -------- | ------------- |
| IPP | This file |
| INSTALL update section | `INSTALL_IN_YOUR_PROJECT.md` |
| Task doc IPP link | T33 |

---

## 6. Verification checklist (§7)

- [ ] AC1: Fixture copy-sync bump passes verify_vendor_tree
- [ ] AC2: Scaffold report emitted when host files exist
- [ ] AC3: Update scope is vendor packages only (no kanban re-init)
- [ ] AC4: Check mode output documents current/target
- [ ] AC5: INSTALL documents git + copy-sync paths
- [ ] AC6: pytest green

---

## 7. Implementation Plan — status reconciliation

**Executor:** Set T33 to `COMPLETE` / `IN PROGRESS` / `BLOCKED` per §6 evidence after IDW.
