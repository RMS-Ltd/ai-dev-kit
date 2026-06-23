---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-06T23:30:00Z
expires_at: null
housekeeping_policy: keep
---

# ADR-023: Document Lifecycle package ↔ architecture dual SoT

**Status:** Accepted  
**Date:** 2026-06-06  
**Task:** E10:S01:T09 / GAP-DOCLIFE-INTG-001

---

## Context

The Document Lifecycle framework package (`packages/frameworks/doc-lifecycle/`) and dev-kit architecture tree (`docs/architecture/standards-and-adrs/`) both carried copies of `doc-lifecycle-metadata-spec.md` and `doc-lifecycle-policy.md`. `policy-salience-schema.md` existed only under architecture. Relative-link conventions differed (`./file.md` vs bare `file.md`), and `kb-structure-overview.md` was referenced from package policies but not packaged.

[T04 integration alignment](../../kanban/epics/epic-10/story-01-document-lifecycle-package-implementation-review/integration-alignment-report.md) scored Domain 5 **PARTIAL** (link drift) and Domain 7 **GAP** (salience schema not packaged). [FR-110](../../kanban/fbu/FR-110-lean-adopter-distribution-footprint-and-vendor-bundle.md) requires the canonical package tree to byte-sync to `greenfield-install/packages/frameworks/doc-lifecycle/`.

Alternatives considered:

| Option | Pros | Cons |
| ------ | ---- | ---- |
| **Package `policies/` = SoT; architecture = mirror** | Portable adoption; matches numbering-versioning / kanban pattern | Maintainers must sync two surfaces |
| Architecture-only SoT with package stubs | Single repo navigation surface | Breaks FR-110 portable adoption |
| Independent dual SoT with manual sync only | No upfront decision | Preserves drift risk (status quo) |

---

## Decision

### 1. Framework SoT locus

**Canonical SoT** for all Document Lifecycle policy artefacts is:

`packages/frameworks/doc-lifecycle/policies/`

### 2. Architecture mirrors

**Maintained mirrors** for dev-kit repo navigation live at:

`docs/architecture/standards-and-adrs/`

Each mirror file carries a top-of-file **architecture mirror banner** citing the package SoT path. Body content is synchronized from the package copy; only link conventions and the banner may differ.

### 3. Per-file SoT / mirror table

| Policy topic | Framework SoT (edit first) | Architecture mirror |
| ------------ | ------------------------ | ------------------- |
| Metadata spec | `packages/frameworks/doc-lifecycle/policies/doc-lifecycle-metadata-spec.md` | `docs/architecture/standards-and-adrs/doc-lifecycle-metadata-spec.md` |
| Lifecycle policy | `packages/frameworks/doc-lifecycle/policies/doc-lifecycle-policy.md` | `docs/architecture/standards-and-adrs/doc-lifecycle-policy.md` |
| Policy salience schema | `packages/frameworks/doc-lifecycle/policies/policy-salience-schema.md` | `docs/architecture/standards-and-adrs/policy-salience-schema.md` |

### 4. Link conventions

- **Package policies:** sibling links use `./`-prefixed paths (e.g. `./doc-lifecycle-policy.md`).
- **Architecture mirrors:** sibling links use bare filenames within `standards-and-adrs/` (e.g. `doc-lifecycle-policy.md`).
- **Package salience docs** link primarily to `../policies/policy-salience-schema.md`; optional dev-kit instance notes may cite the architecture mirror.

### 5. greenfield-install parity (FR-110)

After any canonical package policy change, sync:

`greenfield-install/packages/frameworks/doc-lifecycle/` ← `packages/frameworks/doc-lifecycle/`

Verify with `diff -rq` (exit 0).

### 6. Maintainer checklist

Dual-source parity procedure: [`packages/frameworks/doc-lifecycle/docs/adr-dual-sot-parity.md`](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/packages/frameworks/doc-lifecycle/docs/adr-dual-sot-parity.md) (precedent: [`rw-trigger-dual-source-parity.md`](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/packages/frameworks/workflow-mgt/docs/rw-trigger-dual-source-parity.md)).

---

## Consequences

- Adopters copy `packages/frameworks/doc-lifecycle/` without requiring `docs/architecture/`.
- Dev-kit maintainers edit package SoT first, then sync architecture mirrors and greenfield-install.
- GAP-DOCLIFE-INTG-001 closes when surfaces are synchronized and T04 domains 5–6 re-score **ALIGNED**.
- Automated drift validator is deferred; manual `diff` commands live in the parity checklist.

---

## References

- [IPP-E10S01T09](../../implementation-cycles/IPP-E10S01T09-sync-architecture-adr-dual-sot.md)
- [T09 task doc](../../kanban/epics/epic-10/story-01-document-lifecycle-package-implementation-review/T09-sync-architecture-adr-dual-sot.md)
- [repo-structure-for-adopters.md](../../documentation/user-docs/repo-structure-for-adopters.md)
- [FR-110](../../kanban/fbu/FR-110-lean-adopter-distribution-footprint-and-vendor-bundle.md)
