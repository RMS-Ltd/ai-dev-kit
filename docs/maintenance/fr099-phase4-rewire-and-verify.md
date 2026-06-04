---
lifecycle: evergreen
ttl_days: null
created_at: 2026-05-26T16:10:00Z
expires_at: null
housekeeping_policy: keep
---

# FR-099 Phase 4 — Rewire & verify (E1:S04:T07)

**Task:** E1:S04:T07  
**Depends on:** [Phase 3 bootstrap](fr099-phase3-public-repo-bootstrap.md)  
**Config SoT:** [`rw-config.yaml`](../../rw-config.yaml) (`canonical_public_repo`, `maintainer_private_repo`)

## Rewire checklist (AC7)

| Surface | Action | Status |
|---------|--------|--------|
| `rw-config.yaml` | Public/private repo URLs | ✅ |
| `install_package_from_release.py` | Default `--repo RMS-Ltd/ai-dev-kit` | ✅ |
| `PACKAGE_INSTALLATION_GUIDE.md` | Release URLs → `RMS-Ltd/ai-dev-kit` | ✅ |
| `INSTALL_IN_YOUR_PROJECT.md` | Canonical repository table | ✅ |
| `repo-structure-for-adopters.md` | Adopter INSTALL links | ✅ |
| `README.md` | Adopter vs maintainer callout | ✅ |
| `portal/docusaurus.config.js` | `RMS-Ltd` / `rms-ltd.github.io` base | ✅ |
| GitHub Pages | `https://rms-ltd.github.io/ai-dev-kit/` | Deploy from **public** `main` after sync |

## Verify (AC6)

```bash
chmod +x scripts/fr099_install_smoke_test.sh scripts/fr099_sync_public_from_private.sh
./scripts/fr099_install_smoke_test.sh
```

Smoke test shallow-clones **public** `main` and asserts:

- No `docs/book-proj/`
- No `docs/project-management/kanban/epics/epic-24/`
- No `epic-24` on `kboard.md`

## Sync private → public (post-rewire)

Public `RMS-Ltd/ai-dev-kit` uses **replay history** (Phase 3 bootstrap), not the private repo’s full object graph. A direct `git push` of private `dev` to public **will fail**; use **bootstrap replay** instead:

```bash
./scripts/fr099_bootstrap_public_ai_dev_kit.sh
# or (falls back to bootstrap on push failure):
./scripts/fr099_sync_public_from_private.sh
```

Run after `RW E1:S04:T07` commits rewire changes on private `dev` so public `main`/`dev` include `install_package_from_release.py` default `RMS-Ltd/ai-dev-kit`.

## Dual-remote maintainer setup

```bash
git remote rename origin private   # optional naming
git remote add public https://github.com/RMS-Ltd/ai-dev-kit.git
git remote add private https://github.com/RMS-Ltd/ai-dev-kit-book.git
# Work on private; push public after FR-099 sync / release
```

## Wave E (optional)

Run [IPP-E6S09T06 §8](../implementation-cycles/IPP-E6S09T06-ecc-harness-phases-2-5-fr098.md) ECC validation on a **fresh clone** of public `RMS-Ltd/ai-dev-kit` after sync.

## FR-099 closure

When AC6 and AC7 pass and this doc is linked from T07, mark **FR-099** IMPLEMENTED via `RW E1:S04:T07`.
