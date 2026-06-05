---
lifecycle: proposed
ttl_days: null
created_at: 2026-06-05T00:00:00Z
expires_at: null
housekeeping_policy: keep
---

# User Experience Research: Greenfield lean tree delivery via GitHub Packages

**Type:** User Experience Research (UXR)  
**ID:** UXR-021  
**Submitted:** 2026-06-05  
**Submitted By:** User (greenfield distribution design session)  
**Priority:** MEDIUM (Should Have — MoSCOW **S**)  
**Status:** IMPLEMENTED (v0.6.9.23+2)  
**Implementing Task:** [E06:S09:T23](../epics/epic-06/story-09-ai-dev-kit-installation-and-adopter-integration/T23-greenfield-install-github-packages-delivery-uxr021.md)

---

## Summary

Adopters acquiring the **lean greenfield bundle** (`greenfield-install/`) today must use **git sparse-checkout**, **manual copy**, or (when shipped) a **GitHub Release tarball**. Teams that block submodules or prefer **registry semver pins** lack a documented, low-friction delivery path — even though [GitHub Packages](https://github.com/RMS-Ltd/ai-dev-kit/packages) is available on the canonical repo.

---

## Research Objective

**Primary question:** Can GitHub Packages serve as an **alternate delivery channel** for the **same** `greenfield-install/` bytes — without changing the lean layout contract — and improve adopter acquisition UX for constrained environments?

**Secondary questions:**

1. Which registry type (container `ghcr.io` vs npm static bundle vs Release tarball only) best matches a Python-scripts + markdown + templates payload?
2. How should version labels align with external SemVer / release tags adopters already use for support triage ([UXR-016](UXR-016-install-setup-interactive-feedback-external-semver-version.md))?
3. What maintainer publish step preserves **sync discipline** ([FR-110](FR-110-lean-adopter-distribution-footprint-and-vendor-bundle.md)) — publish only CI-validated `greenfield-install/`, never a second content pipeline?

---

## Methodology

**Research Method:** Adopter constraint analysis + maintainer distribution architecture review  
**Context:** Post–FR-110 `greenfield-install/` tree (~11 MiB); existing per-framework GitHub Release tarballs (FR-062)  
**Duration:** Single design session (2026-06-05)  
**Artifacts reviewed:**

- [FR-110](FR-110-lean-adopter-distribution-footprint-and-vendor-bundle.md) — lean vendor tree model
- [INSTALL_IN_YOUR_PROJECT.md](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/INSTALL_IN_YOUR_PROJECT.md) — acquire flows (sparse/copy)
- [`.github/workflows/greenfield-install.yml`](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/.github/workflows/greenfield-install.yml) — drift + dry-run smoke
- [package-management-prioritization-review.md](../../../analysis/package-management-prioritization-review.md) — Releases primary, registry future
- [RMS-Ltd/ai-dev-kit Packages tab](https://github.com/RMS-Ltd/ai-dev-kit/packages) — no published artifacts yet

---

## Key Findings

### Finding 1: Lean contract is transport-agnostic (Severity: High)

The adopter layout contract is **`vendor/ai-dev-kit/` = contents of `greenfield-install/`** at a pinned version. Any delivery mechanism must extract to that shape; `install_greenfield_path.py` and framework installers remain unchanged.

### Finding 2: Submodule/copy UX fails in common enterprise constraints (Severity: High)

| Constraint | Pain with default paths | Registry delivery benefit |
| ---------- | ----------------------- | ------------------------- |
| Submodule blocked in CI | Cannot sparse-checkout `greenfield-install/` | `docker pull` / `npm install` in pipeline |
| No git in deploy image | Copy-from-tag requires manual curl discipline | Semver-pinned one-liner with digest option |
| Discoverability | Install docs buried in repo tree | [Packages tab](https://github.com/RMS-Ltd/ai-dev-kit/packages) surfaces versioned artifacts |

### Finding 3: Container registry is the best GitHub Packages fit (Severity: Medium)

- **`ghcr.io`** — OCI image copying `greenfield-install/` to a fixed path (`/opt/adk/`) maps cleanly to `docker cp` → `vendor/ai-dev-kit/`.
- **npm static package** — viable for Node-heavy teams; secondary to container for this Python-first payload.
- **PyPI / Maven / NuGet** — wrong ecosystems; out of scope for GitHub Packages tab on this repo.

### Finding 4: Dual-publish avoids drift (Severity: High)

Publish workflow should read **only** the CI-validated `greenfield-install/` tree (post `sync_greenfield_install.py --check`). Same bytes can ship to:

1. GitHub Releases (`greenfield-install-v{semver}.tar.gz`) — extends optional [FR-110-F5](FR-110-lean-adopter-distribution-footprint-and-vendor-bundle.md)
2. `ghcr.io/rms-ltd/ai-dev-kit-greenfield:{tag}` — Packages tab discoverability

Submodule/copy remain the **documented default**; registry paths are **alternate acquisition** documented under “Acquire the lean tree.”

---

## User Pain Points

- “We can’t submodule vendor dependencies” — no first-class ADK lean-bundle fetch in CI.
- “Which tarball is the lean tree vs a single framework?” — FR-062 per-slug assets confuse greenfield adopters.
- “I found the Packages page but nothing is published” — missed opportunity for version discovery.
- Manual copy from release tags works but lacks lockfile/digest semantics some teams require.

---

## Recommendations

- [ ] **UXR-021-R1:** Publish `greenfield-install/` as **`ghcr.io` container image** tagged with external SemVer (and internal traceability tag optional).
- [ ] **UXR-021-R2:** Document **container extract** flow in `INSTALL_IN_YOUR_PROJECT.md` and `greenfield-install/README.md` (default paths unchanged).
- [ ] **UXR-021-R3:** RW/tag workflow publishes from **post-drift-check** tree only; no maintainer hand-build.
- [ ] **UXR-021-R4:** Optional dual-publish **`greenfield-install-v{semver}.tar.gz`** to GitHub Releases (FR-110-F5) from the same build step.
- [ ] **UXR-021-R5:** CI smoke — extract image (or tarball) and run `install_greenfield_path.py --dry-run` from extracted root.

**Priority order:** R3 → R1 → R5 → R2 → R4 (publish integrity before docs).

---

## Affected Areas

- `.github/workflows/` — release publish job (extend `greenfield-install.yml` or tag-triggered sibling)
- `INSTALL_IN_YOUR_PROJECT.md` — “Acquire the lean tree” section
- `greenfield-install/README.md` — update / registry pin instructions
- [GitHub Packages](https://github.com/RMS-Ltd/ai-dev-kit/packages) — container visibility

**Out of scope:** Replacing sparse submodule as default; changing lean tree contents; PyPI packaging of full CLI.

---

## Acceptance Criteria (implementation verification)

- [x] **AC1:** Tagged release publishes a `ghcr.io` image whose filesystem contains `greenfield-install/` layout at `/opt/adk/` (or documented equivalent). — **v0.6.9.23+2**
- [x] **AC2:** Documented extract flow places files under `vendor/ai-dev-kit/` and `install_greenfield_path.py --dry-run` succeeds from host project root. — **v0.6.9.23+2**
- [x] **AC3:** Image tag matches external SemVer string shown in install docs ([UXR-016](UXR-016-install-setup-interactive-feedback-external-semver-version.md) alignment). — **v0.6.9.23+2**
- [x] **AC4:** Publish pipeline fails if `sync_greenfield_install.py --check` would fail (no drift). — **v0.6.9.23+2**
- [x] **AC5:** `INSTALL_IN_YOUR_PROJECT.md` lists registry acquisition as **alternate** path; submodule/copy remain primary. — **v0.6.9.23+2**

---

## Intake Decision

**Intake Status:** ACCEPTED  
**Intake Date:** 2026-06-05  
**Intake Version:** v0.6.9.23+1 (RW -k kanban documentation setup)  
**Assigned To:** **E06:S09:T23** under Story 009 (installation and adopter integration)

---

## Related Work

- [FR-110](FR-110-lean-adopter-distribution-footprint-and-vendor-bundle.md) · [E06:S09:T21](../epics/epic-06/story-09-ai-dev-kit-installation-and-adopter-integration/T21-lean-adopter-distribution-footprint-fr110.md)
- [FR-062](FR-062-github-release-installation-experience.md) — per-framework release tarballs (brownfield / partial update)
- [FR-110-F5](FR-110-lean-adopter-distribution-footprint-and-vendor-bundle.md) — optional unified tarball (dual-publish target)
- [UXR-016](UXR-016-install-setup-interactive-feedback-external-semver-version.md) — version label consistency
- [package-management-prioritization-review.md](../../../analysis/package-management-prioritization-review.md) — registry as future layer

---

## References

- [INSTALL_IN_YOUR_PROJECT.md — Lean vendor install](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/INSTALL_IN_YOUR_PROJECT.md#lean-vendor-install-greenfield-install--fr-110)
- [greenfield-install/README.md](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/greenfield-install/README.md)
- [GitHub Packages — RMS-Ltd/ai-dev-kit](https://github.com/RMS-Ltd/ai-dev-kit/packages)
