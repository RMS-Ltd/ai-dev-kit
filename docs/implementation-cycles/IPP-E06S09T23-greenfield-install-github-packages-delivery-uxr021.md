---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-05T12:00:00Z
expires_at: null
housekeeping_policy: keep
---

# E06:S09:T23 — Planning: Spec, Tests, Implementation Plan (IPW)

**Host Task:** [`T23-greenfield-install-github-packages-delivery-uxr021.md`](../project-management/kanban/epics/epic-06/story-09-ai-dev-kit-installation-and-adopter-integration/T23-greenfield-install-github-packages-delivery-uxr021.md) **(E06:S09:T23)**  
**Planning for:** [UXR-021](../project-management/kanban/fr-br/UXR-021-greenfield-install-github-packages-delivery-channel.md)  
**Status:** Approved

---

## 1. Requirements (Ascertained Baseline)

### 1.1 Functional requirements

| ID | Requirement | Source |
| -- | ----------- | ------ |
| RF1 | Publish `greenfield-install/` as OCI image `ghcr.io/rms-ltd/ai-dev-kit-greenfield:{semver}` with tree at `/opt/adk/` | UXR-021-R1, T23 AC1 |
| RF2 | Tag-triggered publish: drift check → build → push; blocked when `sync_greenfield_install.py --check` fails | UXR-021-R3, T23 AC4 |
| RF3 | Image tag = external SemVer core in install docs (task_touch primary tag) | UXR-021 AC3, UXR-016 |
| RF4 | Document registry extract (`docker pull` → `docker cp` → `vendor/ai-dev-kit/`) as **alternate**; submodule/copy primary | UXR-021-R2, T23 AC5 |
| RF5 | CI smoke: extract artifact + `install_greenfield_path.py --dry-run` from host project root | UXR-021-R5, T23 AC2 |
| RF6 | Dual-publish `greenfield-install-v{semver}.tar.gz` + `.sha256` to GitHub Release (FR-110-F5) | UXR-021-R4 |

### 1.2 Non-functional requirements

| ID | Requirement | Source |
| -- | ----------- | ------ |
| RNF1 | Single content pipeline — publish only CI-validated `greenfield-install/` bytes | UXR-021 Finding 4 |
| RNF2 | `GITHUB_TOKEN` with `packages: write`; public package visibility for anonymous pull | T23 Notes |
| RNF3 | PR CI builds image locally (no push) | IPW plan |
| RNF4 | Transport-agnostic: `vendor/ai-dev-kit/` = contents of `greenfield-install/` at pinned version | UXR-021 Finding 1 |

### 1.3 Invariants and boundaries

- **In scope:** Dockerfile, release publish workflow, doc updates, CI smoke, Release tarball
- **Out of scope:** Replacing sparse submodule as default; npm/PyPI wrappers; changing sync manifest semantics

---

## 2. Specification

### 2.1 Goal

Adopters in submodule-blocked or no-git environments acquire the lean ADK bundle via GitHub Packages (`ghcr.io`) with semver-pinned images containing the same bytes validated by drift CI — without changing install orchestration.

### 2.2 Specification mapping

- **Image layout:** `COPY . /opt/adk/` with build context `greenfield-install/`; adopters copy `/opt/adk/*` → `vendor/ai-dev-kit/`
- **Tag source:** RW `task_touch` primary tag (`v{semver_core}`); workflow filters `^v[0-9]+\.[0-9]+\.[0-9]+$`
- **PR safety:** `greenfield-install.yml` `container-smoke` job — build + extract + dry-run, no registry push
- **Release:** `greenfield-release.yml` on SemVer core tags — drift gate, GHCR push, optional tarball upload

### 2.3 Constraints

- Build context is `greenfield-install/` directory only
- Framework slug release tags (`*-v*.*.*`) must not trigger greenfield release workflow

### 2.4 Status transition intent

- **Current:** TODO → IN PROGRESS on first implementation change → COMPLETE when AC1–AC5 evidenced via RW
- **Owner:** Implementation execution

### 2.5 ADR necessity decision

| ID | Y/N | Evidence |
| -- | --- | -------- |
| T1 | Y | UXR-021 chose `ghcr.io` over npm / Release-only |
| T2 | N | Revert = delete workflow + unpublish |
| T3 | Y | Adopter CI, org GHCR visibility, release automation |
| T4 | Y | Canonical registry delivery precedent |
| T5 | Y | Public `ghcr.io` pull vs org visibility; container vs npm |
| T6 | N | No RW/IPW/UKW gate changes |
| T7 | N | Extends FR-110 |

**Outcome:** `REQUIRED` — [ADR-021-greenfield-install-ghcr-delivery-channel.md](../architecture/standards-and-adrs/ADR-021-greenfield-install-ghcr-delivery-channel.md)

---

## 3. Test design

| ID | Layer | Requirement | Expected check |
| -- | ----- | ----------- | -------------- |
| T1 | Unit/layout | RF1, RNF4 | Staged `/opt/adk/` has README, FOOTPRINT, frameworks, orchestrator |
| T2 | Integration | RF5 | `docker build` → `docker cp` → `install_greenfield_path.py --dry-run` exit 0 |
| T3 | CI guard | RF2 | `sync_greenfield_install.py --check` before build in release workflow |
| T4 | Tag alignment | RF3 | Image tagged with SemVer core matching install docs |
| T5 | Docs | RF4 | INSTALL lists registry as alternate; submodule item 1 |
| T6 | Dual-publish | RF6 | Tarball + `.sha256` on GitHub Release; `sha256sum -c` passes |
| T7 | Regression | RNF1 | `test_sync_greenfield_install.py` remains green |

---

## 4. Implementation plan

| Step | Action |
| ---- | ------ |
| **1** | **E06:S09:T23 TODO → IN PROGRESS** |
| 2 | ADR-021 CREATE |
| 3 | `greenfield-install/Dockerfile` |
| 4 | `.github/workflows/greenfield-release.yml` |
| 5 | `greenfield-install.yml` container-smoke job |
| 6 | F5 tarball + sha256 in release workflow |
| 7 | Docs: INSTALL + greenfield README |
| 8 | `scripts/test_greenfield_container.py` |
| 9 | Kanban / UXR / FR-110 sync |
| 10 | **RW E06:S09:T23 --art** |
| 11 | Post-ship verification |
| **N** | Status reconcile → COMPLETE when ACs evidenced |

**RW rule (BR-097):** Post-ship fixes → `RW E06:S09:T23 --art` only.

### 4.1 Files

- **Create:** `greenfield-install/Dockerfile`, `.github/workflows/greenfield-release.yml`, `ADR-021-*.md`, `scripts/test_greenfield_container.py`
- **Modify:** `greenfield-install.yml`, `INSTALL_IN_YOUR_PROJECT.md`, `greenfield-install/README.md`, task/UXR/FR-110 docs

---

## 5. Documentation deliverables

| Doc ID | Path | Action |
| ------ | ---- | ------ |
| D-C1 | `docs/implementation-cycles/IPP-E06S09T23-*.md` | CREATE |
| D-C2 | `docs/architecture/standards-and-adrs/ADR-021-*.md` | CREATE |
| D-U1 | `INSTALL_IN_YOUR_PROJECT.md` | UPDATE |
| D-U2 | `greenfield-install/README.md` | UPDATE |
| D-U3 | Task doc T23 | UPDATE |
| D-U4 | UXR-021 | UPDATE |
| D-U5 | FR-110 | UPDATE |
| D-N1 | `package-management-design.md` | NONE — inbound link from ADR only |

---

## 6. Documentation housing

| Doc ID | Path | Publication | Lifecycle |
| ------ | ---- | ----------- | --------- |
| D-C1 | `docs/implementation-cycles/IPP-E06S09T23-*.md` | PUBLISHED (portal autogen) | evergreen |
| D-C2 | `docs/architecture/standards-and-adrs/ADR-021-*.md` | PUBLISHED | evergreen |
| D-U1 | `INSTALL_IN_YOUR_PROJECT.md` | NOT_APPLICABLE (repo root) | evergreen |
| D-U2 | `greenfield-install/README.md` | NOT_APPLICABLE (vendor tree) | evergreen |

---

## 7. Success / verification criteria

- [x] AC1–AC5 satisfied (UXR-021 / T23) — v0.6.9.23+2
- [x] FR-110-F5 tarball shipped — greenfield-release.yml
- [x] Tests pass; CI container-smoke green
- [x] IPP bidirectional wiring complete
- [x] RW E06:S09:T23 --art complete

---

## References

- [UXR-021](../project-management/kanban/fr-br/UXR-021-greenfield-install-github-packages-delivery-channel.md)
- [FR-110](../project-management/kanban/fr-br/FR-110-lean-adopter-distribution-footprint-and-vendor-bundle.md)
- [ADR-021](../architecture/standards-and-adrs/ADR-021-greenfield-install-ghcr-delivery-channel.md)
- [E06:S09:T21](../project-management/kanban/epics/epic-06/story-09-ai-dev-kit-installation-and-adopter-integration/T21-lean-adopter-distribution-footprint-fr110.md)
