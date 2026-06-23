---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-08T16:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Adopter-public documentation authoring (BR-068 / FR-114)

**Status:** Active  
**Authority:** [BR-068](../../kanban/fbu/BR-068-docusaurus-monorepo-markdown-links-break-strict-production-build.md) · [FR-114](../../kanban/fbu/FR-114-split-documentation-surfaces-docusaurus-public-notion-maintainer-kb.md) · [ADR-024](../../architecture/standards-and-adrs/ADR-024-documentation-surfaces-three-surface-model-fr114.md) · [portal/README.md BR-068 section](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/portal/README.md#br-068-monorepo-links-outside-the-docs-plugin-e5s09t11)

---

## Scope

Applies to **any CREATE or UPDATE** under:

| Path | Surface |
| ---- | ------- |
| `docs/guides/**` | Docusaurus adopter-public |
| `docs/documentation/**` | Docusaurus adopter-public |
| `docs/developer-tools/ide-whitelist-guide.md` | Docusaurus adopter-public (single page) |

**Not in scope here:** portal **i18n** (locale switching in the published site) — that is a separate Epic 21 follow-on. This standard is **linking and mirror compliance** only.

---

## Rule 1 — No relative links that leave `docs/` publish scope

From allowlisted pages, **do not** use relative markdown links to:

- `../../governance/`, `../../architecture/`, `../../kanban/`, `../../project-management/`
- `../../implementation-cycles/`, `../../../packages/`, repo-root files (`INSTALL_*.md`, `rw-config.yaml`, etc.)

**Use GitHub blob URLs** (default branch `main`):

```markdown
[Translation workflow](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/docs/governance/standards/translation-workflow-and-review.md)
```

For in-scope targets (`docs/guides/`, `docs/documentation/`), normal relative links are allowed.

**Normative detail:** [portal/README.md — BR-068](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/portal/README.md#br-068-monorepo-links-outside-the-docs-plugin-e5s09t11)

---

## Rule 2 — IPP / implementation acceptance criteria

When an IPP lists a deliverable under `docs/documentation/**` or `docs/guides/**`:

| AC | Command |
| -- | ------- |
| Portal link guard (required) | `pytest tests/test_portal_br068_monorepo_links.py tests/test_portal_fr114_allowlist.py -q` |
| Optional full portal build | `cd portal && npm run build` |

Record both in §3 Test design and §7 Success criteria. **Do not** mark "portal i18n" as out-of-scope when the deliverable is adopter-public markdown — use **portal i18n (site locale UI)** if deferring UI translation only.

---

## Rule 3 — Framework package changes → greenfield mirror

When implementation modifies `packages/frameworks/**`:

| AC | Command |
| -- | ------- |
| Sync mirror (required before commit) | `python scripts/sync_greenfield_install.py` |
| Drift check | `python scripts/sync_greenfield_install.py --check` |

Commit `greenfield-install/` in the **same change set** as source package edits.

---

## Enforcement layers

| Layer | When | Mechanism |
| ----- | ---- | --------- |
| **Pre-commit** | Local commit | `.pre-commit-config.yaml` — portal pytest + greenfield `--check` (path-triggered) |
| **RW Step 9.7** | Release commit | `validate_actions_ci_parity.py --strict` (path-aware; includes portal pytest + greenfield + Docusaurus build) |
| **CI** | PR / push | `tests.yml`, `docusaurus-build.yml`, `greenfield-install.yml` |

---

## Agent authoring

When editing adopter-public paths, load this standard and [portal/README.md BR-068](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/portal/README.md#br-068-monorepo-links-outside-the-docs-plugin-e5s09t11) **before** writing links. Binding rule: **P-PORTAL-LINKS** in [`AGENTS.md`](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/AGENTS.md).

---

## References

- [IPP-E05S09T11](../../implementation-cycles/IPP-E05S09T11-docusaurus-monorepo-markdown-link-resolution-br068.md)
- [IPP-E05S09T15](../../implementation-cycles/IPP-E05S09T15-docusaurus-adopter-public-publish-allowlist-fr114.md)
- [tests/portal_allowlist.py](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/tests/portal_allowlist.py)
