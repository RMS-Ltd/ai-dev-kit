---
lifecycle: evergreen
ttl_days: null
created_at: 2026-07-01T21:00:00Z
expires_at: null
housekeeping_policy: keep
---

# E06:S09:T45 — Planning: Board timestamp carry-forward (FR-144)

**Host Task:** [T45](../kanban/epics/epic-06/story-09-ai-dev-kit-installation-and-adopter-integration/T45-board-timestamp-carry-forward-fr144.md) **(E06:S09:T45)**  
**Planning for:** [FR-144](../kanban/fbu/FR-144-board-timestamp-carry-forward-ukw-kma.md)  
**Status:** Published (MWF Leg 1 — IPW)

---

## 1. Requirements

| ID | Requirement | Source |
| -- | ----------- | ------ |
| RF1 | UKW Step 6 — no bulk session stamp when legacy index exists | FR-144-F1 |
| RF2 | KMA Step 4 timestamp restoration gate | FR-144-F2 |
| RF3 | `discover_board_gaps.py` Part (c) homogeneity advisory | FR-144-F3 |
| RF4 | KMA ingest emits `timestamp-index.json` | FR-144-F4 |
| RF5 | Post-UKW flat-date validator when legacy index available | FR-144-F5 |
| RF6 | Semantic lineage bootstrap template (adopter-supplied) | FR-144-NF2 |

---

## 2. Specification

### 2.1 `timestamp_index.py`

Harvest forensic timestamps from legacy corpus: story `**Last updated:**`, task doc headers, completed-row inline dates on legacy `kboard.md`. Optional `SEMANTIC-LINEAGE-BOOTSTRAP.yaml` maps bootstrap `E:S:T` → legacy predecessor.

### 2.2 `restore_board_timestamps.py`

Kit port of SBL `restore_board_timestamps.py` pattern:

- `index` — write `timestamp-index.json`
- `report` — homogeneity / flat-date analysis
- `apply-board` — restore row stamps from index (`--dry-run`)

### 2.3 UKW / KMA docs

- UKW Step 6: run restoration **report** before assigning session UTC to new rows; forbid bulk flatten when index non-empty.
- KMA Step 4: checklist row — invoke restoration before `kboard.md` rebuild.

### 2.4 `discover_board_gaps.py` Part (c)

Emit `stamp_homogeneity_advisory` when ≥3 rows share one `Last modified:` stamp.

### 2.5 `validate_flat_date_board.py`

`--strict` fails when legacy index non-empty and board shows blocking homogeneity cluster.

---

## 3. Test design

Fixture: synthetic legacy tree + board with uniform session stamp; index build, apply-board dry-run, gap Part (c), validator strict.

---

## 4. Implementation plan

1. `TODO → IN PROGRESS` on T45.
2. Add `timestamp_index.py`, `restore_board_timestamps.py`, extend `kma_ingest.py`, `discover_board_gaps.py`.
3. Add `validate_flat_date_board.py` + `SEMANTIC-LINEAGE-BOOTSTRAP.template.yaml`.
4. Update UKW + KMA execution guides.
5. Pytest + greenfield sync + `RW E06:S09:T45 --art`.

---

## 5. Status reconciliation

Final step: T45 + FR-144 to actual state after RW.
