---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-06T23:30:00Z
expires_at: null
housekeeping_policy: keep
---

# Document Lifecycle: dual SoT parity (maintainers)

**Purpose:** Keep the **framework package SoT** (`packages/frameworks/doc-lifecycle/policies/`) and **dev-kit architecture mirrors** (`docs/architecture/standards-and-adrs/`) aligned so adopters and repo agents do not drift.

**Decision record:** [ADR-023](../../../docs/architecture/standards-and-adrs/ADR-023-doc-lifecycle-package-architecture-dual-sot.md)  
**Precedent:** [rw-trigger-dual-source-parity.md](../../workflow-mgt/docs/rw-trigger-dual-source-parity.md)

---

## Source-of-truth order (maintainers)

1. **Edit package `policies/` first** when changing metadata spec, lifecycle policy, or policy salience schema.
2. **Sync architecture mirrors** in `docs/architecture/standards-and-adrs/` — add/update mirror banner; normalize links to bare sibling form within that directory.
3. **Update package salience cross-links** (`docs/policy-salience-*.md`, `templates/POLICY_SALIENCE_TEMPLATE.md`) if schema paths change.
4. **Sync greenfield-install** (FR-110): copy canonical tree to `greenfield-install/packages/frameworks/doc-lifecycle/`.
5. **Run parity checks** below; append a line to [Delta log](#delta-log) when you complete a pass.

---

## SoT / mirror inventory

| Topic | Edit first (SoT) | Mirror (sync after SoT) |
| ----- | ---------------- | ----------------------- |
| Metadata spec | `policies/doc-lifecycle-metadata-spec.md` | `docs/architecture/standards-and-adrs/doc-lifecycle-metadata-spec.md` |
| Lifecycle policy | `policies/doc-lifecycle-policy.md` | `docs/architecture/standards-and-adrs/doc-lifecycle-policy.md` |
| Policy salience schema | `policies/policy-salience-schema.md` | `docs/architecture/standards-and-adrs/policy-salience-schema.md` |

---

## Parity checklist (copy before merging policy doc changes)

- [ ] Package SoT edited first; architecture mirror banner present on all three mirror files.
- [ ] Metadata spec + lifecycle policy: body equivalent except banner and path-normalized links (`diff` clean modulo banner/links).
- [ ] `policy-salience-schema.md` exists in package `policies/` and architecture mirror.
- [ ] Package salience docs link to `../policies/policy-salience-schema.md` (no dangling `kb-structure-overview.md`).
- [ ] `diff -rq packages/frameworks/doc-lifecycle greenfield-install/packages/frameworks/doc-lifecycle` — exit 0.
- [ ] README §Package Structure lists all three policy files + link to this doc and ADR-023.

---

## Verification commands

```bash
# Body parity (expect differences: banner + link paths only)
diff -u packages/frameworks/doc-lifecycle/policies/doc-lifecycle-metadata-spec.md \
  docs/architecture/standards-and-adrs/doc-lifecycle-metadata-spec.md

diff -u packages/frameworks/doc-lifecycle/policies/doc-lifecycle-policy.md \
  docs/architecture/standards-and-adrs/doc-lifecycle-policy.md

# Salience schema packaged
test -f packages/frameworks/doc-lifecycle/policies/policy-salience-schema.md

# FR-110 greenfield parity
diff -rq packages/frameworks/doc-lifecycle \
  greenfield-install/packages/frameworks/doc-lifecycle
```

---

## greenfield sync step

From repository root after canonical package is stable:

```bash
rsync -a --delete packages/frameworks/doc-lifecycle/ \
  greenfield-install/packages/frameworks/doc-lifecycle/
```

Or use project `scripts/sync_greenfield_install.py` when running a full greenfield pass.

---

## Delta log

### 2026-06-06 — E10:S01:T09 initial parity pass

| Area | Before | After |
| ---- | ------ | ----- |
| SoT assignment | Undeclared dual surfaces; salience schema architecture-only | Package `policies/` = SoT; architecture = mirrors per ADR-023 |
| `policy-salience-schema.md` | Architecture only | Packaged under `policies/`; mirror banner on architecture copy |
| `kb-structure-overview.md` | Broken link in package policies | Removed; optional dev-kit pointer to `ultimate-canonical-kb-structure.md` |
| Salience doc links | Architecture-only absolute paths | Primary link → `../policies/policy-salience-schema.md` |
| greenfield-install | Aligned pre-T09 | Re-synced post-policy edits |

**Forensic release:** v0.10.1.9+1 (expected).

**Substantive policy mismatch remaining:** None identified after this pass.
