---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-05T12:00:00Z
expires_at: null
housekeeping_policy: keep
---

# ADR-021: Greenfield lean tree delivery via GitHub Container Registry

**Status:** Accepted  
**Date:** 2026-06-05  
**Task:** E06:S09:T23 / UXR-021

---

## Context

The lean adopter tree (`greenfield-install/`, [FR-110](../../kanban/fbu/FR-110-lean-adopter-distribution-footprint-and-vendor-bundle.md)) is validated by `sync_greenfield_install.py --check` and CI smoke. Adopters today acquire it via sparse submodule or manual copy ([INSTALL_IN_YOUR_PROJECT.md](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/INSTALL_IN_YOUR_PROJECT.md)).

[UXR-021](../../kanban/fbu/UXR-021-greenfield-install-github-packages-delivery-channel.md) identified teams that block submodules or lack git in deploy images. GitHub Packages (`ghcr.io`) can surface versioned artifacts without changing the lean layout contract: `vendor/ai-dev-kit/` = contents of `greenfield-install/` at a pinned version.

Alternatives considered:

| Option | Pros | Cons |
| ------ | ---- | ---- |
| **OCI container (`ghcr.io`)** | `docker pull` + `docker cp`; semver tags; Packages tab discoverability | Requires Docker in adopter CI |
| npm static package | Node-native teams | Wrong primary ecosystem; extra wrapper |
| GitHub Release tarball only | No registry account | No Packages tab; overlaps FR-062 per-slug assets |

---

## Decision

### 1. Primary registry channel: `ghcr.io`

Publish **`ghcr.io/rms-ltd/ai-dev-kit-greenfield`** (lowercase org per GHCR rules) containing the CI-validated `greenfield-install/` tree at **`/opt/adk/`**.

Build context is the `greenfield-install/` directory; Dockerfile lives at `greenfield-install/Dockerfile`.

### 2. Tag alignment

Image tags use the **external SemVer core** from RW `task_touch` primary tags (e.g. `v0.4.963` → image tag `v0.4.963`). Internal traceability tags (`v0.6.9.23+*`) do **not** trigger publish workflows.

### 3. Publish integrity (single pipeline)

Release publish runs **only after** `sync_greenfield_install.py --check` passes. No maintainer hand-built images or secondary content pipeline.

Workflow trigger: SemVer core tag push matching `^v[0-9]+\.[0-9]+\.[0-9]+$` (excludes framework slug tags like `workflow-mgt-v2.0.0`).

### 4. Dual-publish (optional FR-110-F5)

From the same validated tree, optionally upload `greenfield-install-v{semver}.tar.gz` + `.sha256` to the GitHub Release for the tag. Submodule/copy remain the **documented default**; registry and tarball are **alternate** acquisition paths.

### 5. Visibility

Package visibility defaults to **public** so anonymous `docker pull` works for open-source adopters. Org admins may override; install docs note visibility requirements.

### 6. Adopter extract flow

```bash
docker pull ghcr.io/rms-ltd/ai-dev-kit-greenfield:v0.4.1063
cid=$(docker create ghcr.io/rms-ltd/ai-dev-kit-greenfield:v0.4.1063)
docker cp "$cid:/opt/adk/." vendor/ai-dev-kit/
docker rm "$cid"
```

Then run `install_greenfield_path.py` from the host project root as today.

---

## Consequences

**Positive:**

- Transport-agnostic lean contract preserved
- Semver-pinned acquisition for constrained CI environments
- Packages tab discoverability
- Drift gate prevents publishing stale trees

**Negative:**

- Maintainers need `packages: write` on tag workflows
- Adopters need Docker for this path
- Additional CI job (container smoke) on PRs touching greenfield paths

---

## References

- [UXR-021](../../kanban/fbu/UXR-021-greenfield-install-github-packages-delivery-channel.md)
- [FR-110](../../kanban/fbu/FR-110-lean-adopter-distribution-footprint-and-vendor-bundle.md)
- [package-management-design.md](package-management-design.md) — Releases primary; registry as complementary layer
- [ADR-003](ADR-003-greenfield-vs-brownfield-adoption.md)
- [IPP-E06S09T23](../../implementation-cycles/IPP-E06S09T23-greenfield-install-github-packages-delivery-uxr021.md)
