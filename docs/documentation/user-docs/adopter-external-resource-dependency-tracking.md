---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-04T18:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Adopter External Resource Dependency Tracking

**Purpose:** Explain how **your project** tracks upstream documentation and style resources after copying material from ai-dev-kit—without expecting ai-dev-kit to poll upstream repos on your behalf.

**Implementing work:** [E01:S02:T14](../../../project-management/kanban/epics/epic-01/story-02-package-and-repo-architecture/T14-dependency-tracking-adopters-fr003.md) · [FR-003](../../../project-management/kanban/fr-br/FR-003-dependency-tracking-in-adopting-projects.md)

---

## Scope (greenfield vs brownfield)

| Context | Guidance |
| ------- | -------- |
| **Greenfield** | After install or template setup, add a register when you copy README/changelog/badge patterns from ai-dev-kit examples. |
| **Brownfield** | Only track resources you **actually use**. Existing README/changelog may already follow another convention—do not duplicate tracking for unused templates. |

Policy: [ADR-003](../../../architecture/standards-and-adrs/ADR-003-greenfield-vs-brownfield-adoption.md). Install hub: [INSTALL_IN_YOUR_PROJECT.md](../../../INSTALL_IN_YOUR_PROJECT.md).

---

## Two kinds of “dependencies” (do not mix them)

| Kind | What it is | Where to read |
| ---- | ---------- | ------------- |
| **Framework packages** | ai-dev-kit workflow/kanban/versioning copies or CLI-managed packages | [`framework-dependency-installation-guide.md`](framework-dependency-installation-guide.md), [`framework-dependency-update-guide.md`](framework-dependency-update-guide.md) |
| **External doc/style resources** | Third-party templates and conventions you copied into **your** README, changelog, or badges | **This guide** |

ai-dev-kit follows **copy, don't reference** for frameworks ([numbering-versioning README](../../../packages/frameworks/numbering-versioning/README.md)). The same principle applies here: once you copy a README structure or changelog format, **your repo** owns staying aware of upstream changes.

---

## Standard trio (when you use README template patterns)

If your project adopted README or presentation patterns influenced by ai-dev-kit guidance (see [FR-002 / E01:S02:T13](../../../project-management/kanban/fr-br/FR-002-update-been-there-readme.md) when the template ships), you typically acknowledge:

| Resource | URL | What you copied |
| -------- | --- | ---------------- |
| Best-README-Template | https://github.com/othneildrew/Best-README-Template | README section structure and layout patterns |
| Keep a Changelog | https://keepachangelog.com/ | `CHANGELOG.md` format and heading conventions |
| Shields.io | https://shields.io/ | Badge URLs and badge sections in README |

You may add rows for other resources (license badges, other style guides). The register is **your** source of truth.

---

## Who tracks what

| Party | Responsibility |
| ----- | ---------------- |
| **ai-dev-kit** | Ship adoption guides, optional copy-paste templates under `docs/documentation/user-docs/examples/`, and (separately) framework packages. **Does not** monitor Best-README / Keep a Changelog / Shields on your behalf. |
| **Your project** | Maintain an upstream register, review cadence, and decide when to merge upstream ideas into your README/changelog/badges. |

This avoids a middleman: ai-dev-kit → adopter → upstream. You connect **directly** to the resources you use.

---

## Recommended practice

1. **Create a register** — Copy [`examples/adopter-upstream-register.md`](examples/adopter-upstream-register.md) to your repo root as `DEPENDENCIES.md` (or `docs/upstream-register.md`). Fill one row per resource.
2. **Acknowledge in README** — Keep an Acknowledgments section listing the trio (and ai-dev-kit if you use its frameworks).
3. **Review cadence** — At least quarterly, or whenever you overhaul README/changelog/badges. Record `Last reviewed` in the register.
4. **Optional automation** — Copy [`examples/adopter-upstream-check.yml`](examples/adopter-upstream-check.yml) and/or [`examples/adopter-upstream-check.sh`](examples/adopter-upstream-check.sh) into **your** repo and customize URLs. These are reminders and link checks only—not auto-merges.

---

## When you adopt the README template (FR-002 / T13)

When [E01:S02:T13](../../../project-management/kanban/epics/epic-01/story-02-package-and-repo-architecture/T13-readme-template-best-readme-fr002.md) delivers a project README template:

1. Copy the template into your repo and customize placeholders.
2. Initialize or update your upstream register with the trio rows above.
3. Do **not** wait for an ai-dev-kit release to pick up Best-README or Keep a Changelog changes—check upstream when **you** choose.

---

## Copy-paste templates (host repo)

All files under [`examples/`](examples/) are **examples to copy**, not scripts ai-dev-kit runs in this repository.

| File | Use in your project |
| ---- | ------------------- |
| `adopter-upstream-register.md` | Table template for `DEPENDENCIES.md` |
| `adopter-upstream-check.yml` | Optional `.github/workflows/upstream-doc-reminder.yml` |
| `adopter-upstream-check.sh` | Optional `scripts/check-upstream-docs.sh` |

---

## Related documentation

- [Repository structure for adopters](repo-structure-for-adopters.md) — optional `DEPENDENCIES.md` at project root
- [Post-template setup guide](framework-dependency-post-template-setup-guide.md) — README customization step
- [IPP-E01S02T14](../../../implementation-cycles/IPP-E01S02T14-adopter-external-dependency-tracking.md) — implementation plan
