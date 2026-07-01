---
lifecycle: evergreen
ttl_days: null
created_at: 2026-07-01T14:00:00Z
expires_at: null
housekeeping_policy: keep
---

# FB-ADK-K02 — Board timestamp loss on UKW / pre-synthesise KMA

**Package:** attempt-12 feedback (`K-02`)  
**Project:** starborn_legacy  
**Severity:** Medium (forensic / ordering degradation; not functional blocker)  
**Status:** Mitigated in-repo (tooling + partial restoration)  
**Related:** [KMA-TIMESTAMP-RESTORATION.md](../reference/KMA-TIMESTAMP-RESTORATION.md) · [SEMANTIC-LINEAGE-BOOTSTRAP.yaml](../reference/SEMANTIC-LINEAGE-BOOTSTRAP.yaml)

---

## Summary

After ADK attempt-12 greenfield install, standalone **UKW** populated `kboard.md` with real MoSCOW rows but stamped **`Last modified: 2026-06-30 UTC`** on every row. **RW -k** updated only the UKW perpetual lane (T02 → `2026-07-01`). Temporal ordering on the active board was flattened before KMA Step 4 synthesise ran.

This is **not** KMA Step 4 data loss — synthesise had not started. It is a **workflow gap**: UKW/RW agents bulk-stamped session date instead of consulting legacy corpus or changelog forensic grid.

---

## Observed behaviour

| Symptom | Evidence |
| ------- | -------- |
| Uniform `2026-06-30` on 19/20 board rows | `docs/kanban/kboard.md` post-UKW |
| Legacy open rows never had `Last modified:` | `docs-pre-ai-dev-kit/.../kboard.md` uses inline dates on **completed** rows only |
| Direct `E:S:T` lookup fails for bootstrap IDs | v4 CATL `E02:S02:T01` ≠ legacy game `E02:S02:T01` |
| ~739 legacy timestamp signals unused | Story headers, forensic markers, changelog archive |

---

## Impact

- MoSCOW **chronological ordering** within S/C/O sections is meaningless until restored.
- Operator cannot distinguish install scaffolding (2026-06-30) from prior ADK greenfield work (e.g. 2026-06-05 `E15:S13` lane).
- Post–Step 4 synthesise risks repeating the pattern for **342** domain tasks unless automated.

---

## Root cause

1. **UKW Step 6** agent execution used session date as default `Last modified:` without legacy ingest.
2. **KMA Step 4** execution guide does not mandate timestamp carry-forward (FR candidate).
3. **`discover_board_gaps.py`** scans task presence only — not temporal metadata.
4. **ID namespace remap** (legacy E15 → v4 E01/E02) requires semantic lineage, not token equality.

---

## Adopter mitigation (starborn_legacy)

| Artefact | Role |
| -------- | ---- |
| [`tools/kanban/restore_board_timestamps.py`](../../tools/kanban/restore_board_timestamps.py) | Index legacy corpus; report/apply board dates |
| [`SEMANTIC-LINEAGE-BOOTSTRAP.yaml`](../reference/SEMANTIC-LINEAGE-BOOTSTRAP.yaml) | Bootstrap `E:S:T` → legacy predecessor map |
| [`KMA-TIMESTAMP-RESTORATION.md`](../reference/KMA-TIMESTAMP-RESTORATION.md) | Restoration analysis + per-row evidence table |

**Commands:**

```bash
# Report (dry analysis)
python3 tools/kanban/restore_board_timestamps.py report

# Apply to kboard.md
python3 tools/kanban/restore_board_timestamps.py apply-board --dry-run
python3 tools/kanban/restore_board_timestamps.py apply-board

# Export legacy index for Step 4 pipeline
python3 tools/kanban/restore_board_timestamps.py index --json-out logs/attempt-12/timestamp-index.json
```

**Restoration priority chain (implemented in tool):**

1. Legacy kboard completed-row inline date  
2. Legacy story forensic `COMPLETE (v…)` → changelog `Release Date`  
3. Legacy story `**Last updated:**` header  
4. `SEMANTIC-LINEAGE-BOOTSTRAP.yaml` mapping  
5. Git last-commit on current task doc (CATL install date)

---

## Kit recommendations (ai-dev-kit)

| ID | Recommendation |
| -- | -------------- |
| K-02a | **UKW Step 6:** forbid bulk `Last modified:` = session date when legacy root exists; run timestamp restoration report first |
| K-02b | **KMA Step 4:** invoke `restore_board_timestamps.py` (or kit equivalent) during `kboard.md` rebuild |
| K-02c | **`discover_board_gaps.py`:** optional Part (c) — flag rows where all dates are identical |
| K-02d | **KMA ingest:** emit `timestamp-index.json` alongside `kma-ingest.json` |
| K-02e | **FR candidate:** timestamp carry-forward as blocking Step 4 validation gate |

---

## Acceptance criteria (adopter)

- [x] Feedback documented (this file + tracked mirror)  
- [x] Restoration tool committed under `tools/kanban/`  
- [x] Bootstrap semantic lineage map committed  
- [ ] Step 4 synthesise runs tool before board write  
- [ ] `score_kma_structure.py` or new validator flags flat-date boards  

---

## Related feedback

| ID | Topic |
| -- | ----- |
| K-01 | E02 workflow story collapse vs issue #3 TSP |
| K-03 | Task-touch SemVer `+BUILD` suffix on public vernum |
| K-04 | Actions CI parity defaults leak Docusaurus / monorepo checks |

---

**Tracked mirror:** this file is committed under `docs/kanban/reference/` for git traceability. Operator copy also belongs in `logs/attempt-12/feedback-package/` (gitignored local bundle).
