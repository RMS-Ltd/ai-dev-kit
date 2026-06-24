# BR-112 verification replay (T40 / E06:S09:T40)

**Verified:** 2026-06-24  
**Kit pin:** `v0.4.1224` (`greenfield-install-v0.4.1224.tar.gz`)  
**Fix release:** v0.6.9.40+1 (SemVer v0.4.1224+1)  
**Verification release:** v0.6.9.40+2 (this document)  
**SBL base:** `pre-adk-install` @ `aa9ff624b0fec25a61e0b602d8e29c30c494e7c7`  
**Replay workspace:** `/Users/ruari/Projects/sbl-attempt-11` (local; not committed on SBL)

---

## Scope

Confirm [BR-112](../../docs/kanban/fbu/BR-112-greenfield-orchestrator-install-rc-gaps.md) fix: greenfield orchestrator Arm B + `--run-install-rc --install-rc-strict` exits **0** without adopter edits under `vendor/ai-dev-kit/`.

**Out of scope for this replay:** guided KMA / TSP carry (attempt-11 programme on SBL `dev`); operator-rework archive; SemVer BUILD leak (BR-111).

---

## Command

```bash
source .venv/bin/activate

.venv/bin/python vendor/ai-dev-kit/packages/frameworks/workflow-mgt/scripts/install_greenfield_path.py \
  --project-root . \
  --vendor-root vendor/ai-dev-kit \
  --non-interactive \
  --adoption-path arm-b \
  --init-sqlite \
  --catalog v4 \
  --run-install-rc \
  --install-rc-strict
```

No `--config` (legacy arm-b path). No vendor patches.

---

## Results

| Check | Result |
|-------|--------|
| Orchestrator exit | **0** |
| Install RC strict (orchestrator) | **PASS** — 11/14 passed, 3 skipped, 0 failed |
| Install RC strict (standalone re-run) | **PASS** — same summary |
| Sign-off (post-kanban) | **7 READY / 0 NOT READY / 1 SKIP** (BR-080 kit-only) |
| SQLite | `.adk/release-state.db` present |
| `release_state_backend` | `sqlite` in `rw-config.yaml` |
| `COMPREHENSION.md` | scaffolded |
| Vendor patches | **none** |

---

## Evidence artifacts

| Artifact | Path |
|----------|------|
| Orchestrator transcript | [feedback-package/20260624T200937Z-orchestrator-arm-b.txt](feedback-package/20260624T200937Z-orchestrator-arm-b.txt) |
| Install RC report (standalone) | [feedback-package/install-rc-report-br112.txt](feedback-package/install-rc-report-br112.txt) |
| Sign-off (replay) | [feedback-package/signoff-report-br112-replay.json](feedback-package/signoff-report-br112-replay.json) |
| Original FB (pin v0.4.1171 failure) | [feedback-package/FB-ADK-greenfield-orchestrator-install-rc-gaps.md](feedback-package/FB-ADK-greenfield-orchestrator-install-rc-gaps.md) |

---

## Known non-blocking nits

- `version_file` remains mode-C default `src/myproject/version.py` on legacy arm-b (SBL `config/greenfield-rw-install-input.yaml` targets `src/starborn_legacy/version.py`). Install RC passes because the scaffolded file exists; wiring install input YAML on legacy path is follow-up (not BR-112 blocker).

---

## T40 acceptance mapping

| AC | Status | Evidence |
|----|--------|----------|
| **AC1** | **PASS** | Orchestrator `EXIT=0`; Install RC strict PASS without vendor edits |
| **AC2** | **PASS** | Arm B non-interactive replay: sqlite + sign-off contract satisfied; unblocks [T38](../../docs/kanban/epics/epic-06/story-09-ai-dev-kit-installation-and-adopter-integration/T38-guided-install-orchestrator-fr135.md) AC2/AC3 for orchestrator path |
| **AC3** | **PASS** | Failure classes documented in BR-112 / FB (`ADK-I01.S03`, `ADK-I03.E90`, `ADK-I04.E01`) |

---

## References

- [T40 task](../../docs/kanban/epics/epic-06/story-09-ai-dev-kit-installation-and-adopter-integration/T40-greenfield-orchestrator-install-rc-gaps-br112.md)
- [BR-112](../../docs/kanban/fbu/BR-112-greenfield-orchestrator-install-rc-gaps.md)
- [IPP-E06S09T40](../../docs/implementation-cycles/IPP-E06S09T40-greenfield-orchestrator-install-rc-gaps-br112.md)
