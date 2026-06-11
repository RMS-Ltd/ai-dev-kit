---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-10T19:45:00Z
expires_at: null
housekeeping_policy: keep
---

# SBL Attempt 06 — Preflight Checklist

> **Status: COMPLETE (2026-06-11)** — FR-079 **accepted**; adopter sign-off **final**; AC13–AC16. Maintainer index: [attempt-06/README.md](attempt-06/README.md). SBL package: `starborn_legacy/logs/ai-dev-kit/install/attempt-06/`.

**Purpose:** Adopter-side confirmation of attempt-05 fixes ([E06:S09:T26](../docs/kanban/epics/epic-06/story-09-ai-dev-kit-installation-and-adopter-integration/T26-starborn-legacy-adk-install-program.md) **AC13**). This is a **verification replay**, not new product delivery.

**Program task:** [E06:S09:T26](../docs/kanban/epics/epic-06/story-09-ai-dev-kit-installation-and-adopter-integration/T26-starborn-legacy-adk-install-program.md)  
**Triage matrix:** [starborn-legacy-install-triage-matrix.md](../docs/knowledge/analysis/projects/starborn-legacy-install-triage-matrix.md)  
**Maintainer index:** [README.md](README.md)

**SBL artifact root:** `starborn_legacy/logs/ai-dev-kit/install/attempt-06/`

---

## 1. Pin & preflight

- [ ] **ADK pin:** **`v0.4.1140+2`** minimum (includes T28–T30 fixes). Latest `main` @ `256259fb2` (`v0.4.1142+3`) is doc-only after 1140 — no additional installer delta.
- [ ] Verify vendor tree (`verify_vendor_tree` or attempt-05 equivalent preflight).
- [ ] Disk space OK (attempt 03 lesson: need headroom for tarball extract).
- [ ] Clean working tree before submodule/vendor steps.
- [ ] Create `attempt-06/` folder with same layout as attempt 05:
  - `feedback-package/`
  - `transcripts/`
  - `greenfield-install-diary.md`
  - `session.log`
  - `run-logged.sh`

---

## 2. Workarounds (still required)

- [ ] **F10 — dual-tree sequence:** Use the **manual 4-step sequence**; do not rely on orchestrator `--skip-kanban`:
  1. Phase 3a — RW-only bootstrap (defer Kanban)
  2. Restore legacy `KB/PM_and_Portfolio/`
  3. Phase 3b — Kanban `--mode fresh` (explicit)
  4. Phase 3c — RW mode C with kanban-aware config
- [ ] **F20 — version file:** Pre-create `version_file` and pass `--config` for RW bootstrap (do not rely on default `src/myproject/version.py`).
- [ ] **F19 — non-interactive:** Run RW install with **`--non-interactive`**. No pre-created `CHANGELOG.md` workaround needed when pin ≥ `v0.4.1139+2`.

**Reference transcripts (attempt 05):**

| Phase | SBL path |
|-------|----------|
| RW bootstrap | `…/attempt-05/transcripts/20260610T183451Z-phase3a-rw-bootstrap.txt` |
| Kanban v3.2 | `…/attempt-05/transcripts/20260610T183509Z-phase3c-kanban-v3dot2.txt` |
| Sign-off | `…/attempt-05/transcripts/20260610T183541Z-phase4-signoff.txt` |

---

## 3. Phase execution

| Phase | Action | Log to |
|-------|--------|--------|
| Preflight | Download/extract pin; venv; verify | `transcripts/*preflight*` |
| 3a | RW bootstrap `--non-interactive` + `--config` | `*phase3a-rw-bootstrap*` |
| Restore | Legacy kanban restore | `*restore-legacy-kanban*` |
| 3b/3c | Kanban fresh + RW mode C | `*phase3c-kanban*` |
| 4 | Sign-off validator | `*phase4-signoff*` + `signoff-report.json` |

- [ ] All phases captured in timestamped transcripts.
- [ ] `session.log` records pin, commit SHA, and phase outcomes.

---

## 4. Pass criteria (AC13)

| Check | Attempt 05 | Attempt 06 target |
|-------|------------|-------------------|
| **F17** v3.2 catalog | PASS | **PASS** — Epic 5 = Project Architecture, not "FR Implementation" |
| **F18** sign-off | 7 READY / 1 SKIP / 1 NOT READY | **ALL READY** (BR-086) |
| **F19** non-interactive RW | EOF on CHANGELOG (workaround used) | **No EOF** — completes cleanly |
| **F21** kanban logs | `epic-1/` in stdout, `epic-01/` on disk | **Logs match disk** (`epic-01/`) |
| Dual-tree | PASS | **PASS** — `KB/PM_and_Portfolio/` + `docs/kanban/` coexist |

- [ ] `signoff-report.json` → all checks **READY** (no NOT READY).
- [ ] Kanban install stdout shows **padded** paths (`epic-01`, not `epic-1`).
- [ ] RW `--non-interactive` finished without stdin prompts.
- [ ] Legacy E/S/T PM untouched in `KB/PM_and_Portfolio/`.

---

## 5. Evidence package (FR-079)

- [ ] `feedback-package/SUBMISSION.md` — cover note (pin, outcome, delta vs attempt 05).
- [ ] `feedback-package/feedback-payload.json` — structured findings (empty if clean pass).
- [ ] `greenfield-install-diary.md` — narrative walkthrough.
- [ ] Triage addendum if any new findings; otherwise note **clean replay — AC13 satisfied**.

---

## 6. Post-run (maintainer)

- [ ] Submit FR-079 package to ai-dev-kit maintainer (SBL path only — do not copy into `ai-dev-kit` repo).
- [ ] If **all pass:** T26 AC13 complete; program moves to F10/F20 ergonomics + optional migration exercise.
- [ ] If **regression:** file finding ID + BR; update [triage matrix](../docs/knowledge/analysis/projects/starborn-legacy-install-triage-matrix.md).

---

## Quick pin commands

```bash
# Minimum tag (T28–T30 fixes)
git fetch origin tag v0.4.1140

# Or main at current merge point
git fetch origin main && git checkout 256259fb2
```

---

## Upstream closure reference (attempt 05 → 06)

| Finding | Task | Release | Fix |
|---------|------|---------|-----|
| F18 | [T28](../docs/kanban/epics/epic-06/story-09-ai-dev-kit-installation-and-adopter-integration/T28-v32-fresh-install-signoff-story-padding-br105.md) | `v0.4.1138+2` | Sign-off contract `{story:02d}` / `T{task}` |
| F19 | [T29](../docs/kanban/epics/epic-06/story-09-ai-dev-kit-installation-and-adopter-integration/T29-rw-install-non-interactive-changelog-prompt-br106.md) | `v0.4.1139+2` | Non-interactive CHANGELOG scaffold |
| F21 | [T30](../docs/kanban/epics/epic-06/story-09-ai-dev-kit-installation-and-adopter-integration/T30-kanban-installer-log-epic-path-padding-br107.md) | `v0.4.1140+2` | Padded epic paths in install logs |

**Expected duration:** Replay of attempt 05 with updated pin — confirmation, not exploration. Sign-off **ALL READY** on first run = success.
