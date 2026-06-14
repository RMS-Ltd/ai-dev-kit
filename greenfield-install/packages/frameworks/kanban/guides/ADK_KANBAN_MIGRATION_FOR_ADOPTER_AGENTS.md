---
lifecycle: evergreen
created_at: 2026-06-14T12:00:00Z
housekeeping_policy: keep
---

# ADK Kanban migration — adopter agent playbook

**Audience:** IDE agents assisting brownfield adopters  
**Mode:** Agentic intelligence required — **not** scripted migration  
**Canonical execution:** [kanban-migration-agent-execution.md](../KB/Documentation/Developer_Docs/kanban-migration-agent-execution.md)  
**Guardrails:** [kma-agent-guardrails.yaml](../manifests/kma-agent-guardrails.yaml)  
**Policy:** [FR-127](../../../docs/kanban/fr-br/FR-127-agentic-kanban-migration-agent-replace-tool-pipeline.md) · [ADR-028](../../../docs/architecture/standards-and-adrs/ADR-028-agentic-kanban-migration-brownfield-fr127.md)

---

## Agentic-first contract

KMA is an **agent workflow**, not a Python migration script. The agent owns reasoning; scripts are **optional helpers** only.

| Phase | Agent responsibility | Optional helper |
| ----- | -------------------- | --------------- |
| **Read** | Recursively read legacy corpus content (epic docs, `stories/` files, inline `E:S:T` tokens, board state) | `kma_ingest.py --legacy-root PATH --json` for inventory counts |
| **Reason** | Map concerns to v4 homes via [DUPLICATE_EPIC_POLICY.md](DUPLICATE_EPIC_POLICY.md); decide keep / drop / merge; synthesise domain epics (E24+) | — |
| **Propose** | Draft `migration-proposal.md` from [MIGRATION_PROPOSAL_TEMPLATE.md](../templates/MIGRATION_PROPOSAL_TEMPLATE.md) | `validate_migration_map.py` (advisory — dual-mapping lint) |
| **Sign-off** | **BLOCKING** — present proposal; await operator confirmation | — |
| **Synthesise** | Write target tree under `kanban_root`; synthesise epic overviews; rename to v3.2/v4 paths | `validate_installation.py`, `validate_v4_template_completeness.py` |

**Evidence:** Starborn Legacy attempt 06 — automated `detect→analyze` pipeline detected **0** stories; agentic KMA migrated **72** stories. Minimal fixture benchmark: `tests/kanban/test_kma_agentic_vs_automated.py`.

---

## Five-step loop (read → reason → propose → sign-off → synthesise)

### 1. Read (ingest)

1. Load `rw-config.yaml` when present; resolve `kanban_root` for target writes only.
2. Walk the **legacy root read-only** — do not rename, move, or edit legacy files.
3. Record: epic count, story count, inline task tokens, naming patterns (`E{n}-S{m}.md`, `Story-{n}-*.md`, inline `E:S:T`).
4. Optionally run `kma_ingest.py` to cross-check counts against your manual inventory.

### 2. Reason (domain mapping)

1. Emit [DUPLICATE_EPIC_POLICY.md](DUPLICATE_EPIC_POLICY.md) matrix **before** the epic map table.
2. Classify each legacy epic:
   - **Repo / workflow / intake / CI** → Core E01–E08 (or specific story homes).
   - **Cross-adopter capability** (auth, API, compliance) → Ancillary E11–E20.
   - **Vertical product work** (game loop, scrapers, domain features) → **E24+ DOMAIN**.
3. Document keep / drop / merge with explicit rationale (zombie epics, duplicates, synthesis notes).

### 3. Propose (artifact)

1. Fill `migration-proposal.md` with ingest summary, epic map, keep/drop/merge, domain rationale.
2. Leave operator sign-off **unchecked**.
3. State clearly: **no file writes until sign-off**.

### 4. Sign-off (blocking gate)

- **DO NOT** create epic directories, rename stories, or touch `kboard.md` before operator approval.
- Refine proposal via dialogue; re-present until signed off.

### 5. Synthesise (execute + validate)

After sign-off only:

1. Write approved target tree under `kanban_root`.
2. Synthesise epic overviews (tactical/strategic — not verbatim copy).
3. Rename stories to `epic-{nn}/story-{nn}-*.md` paths.
4. Run post-migration validators; confirm legacy mtime unchanged.

---

## Optional helpers (advisory only)

| Script | Role | Blocking? |
| ------ | ---- | --------- |
| `kma_ingest.py` | Read-only inventory counts | No |
| `validate_migration_map.py` | Dual-mapping / mega-story lint on proposal | Advisory |
| `validate_installation.py` | Post-migration layout check | Yes (Step 5) |
| `validate_v4_template_completeness.py` | v4 template depth | Yes (Step 5) |

**Deprecated — do not use for brownfield legacy:**

- `detect_existing_structure.py`
- `analyze_structure.py`
- `migrate_structure.py` (migration modes)
- `install_kanban_framework.py --mode migration|hybrid|canonical_adoption`

See [migration-tool-pipeline-deprecation.md](migration-tool-pipeline-deprecation.md).

---

## Anti-patterns

| Anti-pattern | Why it fails | Correct approach |
| ------------ | ------------ | ---------------- |
| Directory listing only | Misses `stories/E{n}-S{m}.md` and inline tasks | Read file **content** recursively |
| Running `detect→analyze→migrate` | Assumes canonical `epics/Epic-N/` + `Story-N` layout | Use KMA agentic loop |
| Verbatim epic copy | Loses synthesis opportunity; duplicates concerns | Merge/split per DUPLICATE_EPIC_POLICY |
| Writing before sign-off | Violates FR-127-F3 operator gate | Propose → block → execute |
| Modifying legacy root | Breaks dual-tree / FR-081 contract | Writes to `kanban_root` only |
| Second Security/Testing epic | v4 mutual exclusivity (Issue #51) | One home per concern |
| Treating `validate_migration_map.py` as migration engine | Lint only — does not ingest or write | Agent proposes; script advises |

---

## Reference fixture and benchmark

**Fixture:** `tests/fixtures/sbl-legacy-kanban-minimal/` — 3 epics, 8 stories, 9 inline tasks (anonymized SBL-style).

**Ground truth:** `tests/fixtures/sbl-legacy-kanban-minimal/benchmark-ground-truth.yaml`

**Example proposal (unsigned):** `tests/fixtures/sbl-legacy-kanban-minimal/migration-proposal-example.md` — E24+ domain merge for fixture.

**Benchmark module:** `tests/kanban/kma_migration_benchmark.py`

**Regression test:**

```bash
pytest tests/kanban/test_kma_agentic_vs_automated.py -v
```

Expected on fixture: automated pipeline recall **~0**; agentic ingest recall **1.0**.

**Full SBL replay (optional integration):** set `SBL_LEGACY_KANBAN_ROOT` to full legacy corpus; see `test_kma_sbl_fixture_replay.py`.

---

## Trigger

- **Cursor / Claude Code:** `KMA` or `/kma [legacy-root]`
- **Brownfield INSTALL:** [INSTALL_IN_YOUR_PROJECT.md](../../../INSTALL_IN_YOUR_PROJECT.md#agentic-legacy-migration-kma)
- **v4 paths playbook:** [LEGACY_KANBAN_MIGRATION.md](LEGACY_KANBAN_MIGRATION.md)
