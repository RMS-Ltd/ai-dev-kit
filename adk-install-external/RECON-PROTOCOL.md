# Recon-first protocol (external archetypes)

**Task:** E06:S09:T41 · **FR:** FR-142-F3

Use this protocol **before** any full ADK install on an external archetype subject. Recon is **non-blocking** evidence for maintainer decisions; Install RC strict remains authoritative after install.

---

## Steps

### 1. Select subject (matrix-driven)

- Pick archetype from [diversity matrix](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/docs/knowledge/analysis/projects/external-adopter-diversity-matrix.md).
- Prefer permissive licence for subjects intended for full install.
- Record anonymized label (`subject-A1`) in recon README — not the public repo name unless licence allows.

### 2. Local clone only

```bash
# Operator machine — path NOT committed
git clone <url> temp/external-recon/subject-a1-YYYYMMDD
```

- Do **not** commit clone URLs or PII into ai-dev-kit.
- Do **not** push or open PRs on the subject repo.

### 3. Structure map

Document in `structure-map.md` or recon README:

| Field | Example |
| ----- | ------- |
| PM surfaces | `TODO.md`, `.github/ISSUE_TEMPLATE`, none |
| Doc roots | `docs/`, `doc/`, flat `PROJECT.md` |
| Kanban-like paths | absent / partial / legacy flat |
| Version file | absent / non-standard path |
| CI | none / GitHub Actions / other |
| Package layout | single / monorepo hint |

### 4. Install RC pre-score

Estimate **pre-install** checklist outcome for the hypothesized adoption path (`arm-a` brownfield vs `arm-b` greenfield+KMA vs path-1 empty).

Produce **`install-rc-pre-score.json`** in the recon folder:

```json
{
  "schema_version": "1.0.0",
  "archetype_id": "A1",
  "subject_label": "subject-A1",
  "recon_date": "YYYY-MM-DD",
  "adoption_path_hypothesis": "arm-a",
  "blocking_fail_predicted": 0,
  "advisory_fail_predicted": 0,
  "novel_gap_hypothesis": "short-id — one sentence",
  "full_install_recommended": false,
  "notes": "free text"
}
```

**Novel gap classes (examples):** path-selector misfire, structure detection false positive, docs profile mismatch, monorepo root ambiguity, comprehension doc missing.

### 5. Full install decision

| Condition | Action |
| --------- | ------ |
| Pre-score predicts **novel** gap not covered by UXR-029 operator repos | Schedule full install **after G1** (UXR-029 Phase 4) |
| Gap already covered by SBL / fynd.deals / Confidentia synthesis | Fixture + intake only; skip full install |
| Operator waiver in T41 task doc | May proceed before G1 — document waiver id |

Full installs use a **pinned ADK tarball** (same discipline as SBL attempts). Record pin in `install-NN/README.md`.

### 6. Fixture extraction (optional)

When a pattern should persist in CI:

1. Copy **anonymized** mini-tree to `tests/fixtures/adopter-corpora/archetype-{id}/`.
2. Strip secrets, `.env`, keys, real project names.
3. Keep total size **≤ 500 KB**.
4. Add pytest in `tests/fixtures/adopter-corpora/test_archetype_fixture_smoke.py`.

### 7. Intake

Confirmed kit gaps → file FR/BR/UXR or propose Install RC row in a **separate task** — not inline in recon README only.

---

## Synthetic recon (methodology validation)

When live subject selection is pending, recon may run against committed **synthetic fixtures** under `tests/fixtures/adopter-corpora/` to validate protocol artifacts and pre-score format. Mark recon README with **Method: synthetic fixture** and replace with live subject recon when G1 allows.

---

## Checklist (T1 — IPP)

- [ ] Structure map present
- [ ] `install-rc-pre-score.json` present
- [ ] Novel gap hypothesis stated
- [ ] Ethics fields (local-only, no third-party commits) acknowledged
- [ ] Anonymized subject label
- [ ] Fixture size ≤ 500 KB if extracted
