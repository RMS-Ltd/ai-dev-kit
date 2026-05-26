---
lifecycle: evergreen
ttl_days: null
created_at: 2026-05-26T16:00:00Z
expires_at: null
housekeeping_policy: keep
---

# FR-099 Phase 3 — Public `earlution/ai-dev-kit` bootstrap

**Task:** E1:S04:T06  
**ADR:** [ADR-006](../architecture/standards-and-adrs/ADR-006-book-project-private-repository-spin-off.md)  
**Script:** [`scripts/fr099_bootstrap_public_ai_dev_kit.sh`](../../scripts/fr099_bootstrap_public_ai_dev_kit.sh)

## Bootstrap decision (ADR-006 open question)

| Option | Choice | Rationale |
|--------|--------|-----------|
| Orphan root vs genesis-SHA replay | **Orphan root + cherry-pick replay** | Public remote receives only objects on `public-bootstrap`; history starts at genesis tree; post-genesis commits replayed without pre-genesis parents |
| Default branch | **`main`** | Framework consumers and GitHub Pages expect `main`; **`dev`** mirrored for maintainer parity with private line |
| Changelog archive on public | **Full replay** (Phase 3) | Post-genesis changelog entries ship with replayed commits; pre-genesis book-era entries are not reachable on public remote |

## Genesis commit

| Field | Value |
|-------|-------|
| SHA | `f21bac102` |
| Tag / release | `v0.1.4.3+1` — FR-099 Phase 2 book extraction |
| Verification | No `docs/book-proj/`, no `docs/project-management/kanban/epics/Epic-24/` on tree |

## Repository roles after Phase 3

| Remote | URL | Visibility | Role |
|--------|-----|------------|------|
| Private (maintainer) | `https://github.com/RMS-Ltd/hf-ai-dev-kit.git` | Private | Full history + `book/epic-24` |
| Public (adopters) | `https://github.com/earlution/ai-dev-kit.git` | Public | Framework-only from genesis forward |

## GitHub rename redirect (critical)

After Phase 1, pushes to `https://github.com/earlution/ai-dev-kit.git` may **redirect to `RMS-Ltd/hf-ai-dev-kit`** until a **new** public repository is created under `earlution/ai-dev-kit`. The bootstrap script verifies `private=false` on `repos/earlution/ai-dev-kit` before pushing. If a mistaken force-push occurs, restore the private remote from the local full-history `dev` tip (e.g. `git push origin <local-dev-sha>:dev --force`).

## Run bootstrap

```bash
# From private clone on dev, with gh auth for earlution org
chmod +x scripts/fr099_bootstrap_public_ai_dev_kit.sh
./scripts/fr099_bootstrap_public_ai_dev_kit.sh

# Dry-run (local replay only)
DRY_RUN=1 ./scripts/fr099_bootstrap_public_ai_dev_kit.sh
```

## Post-bootstrap (Phase 4 — E1:S04:T07) ✅

See [`fr099-phase4-rewire-and-verify.md`](fr099-phase4-rewire-and-verify.md).

- Rewire `origin` for public contributors vs private maintainers (document dual-remote)
- Update badges, `INSTALL_IN_YOUR_PROJECT.md`, hardcoded `earlution/ai-dev-kit` URLs
- Install smoke (FR-080) and optional [IPP Wave E](../implementation-cycles/IPP-E6S09T06-ecc-harness-phases-2-5-fr098.md) on public clone

## Clone policy

- **Adopters:** `git clone https://github.com/earlution/ai-dev-kit.git`
- **Maintainers (book + frameworks):** `git clone https://github.com/RMS-Ltd/hf-ai-dev-kit.git` — do not publish book paths to public remote
