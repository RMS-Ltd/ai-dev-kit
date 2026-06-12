---
lifecycle: evergreen
created_at: 2026-06-12T19:00:00Z
housekeeping_policy: keep
notion_sot: true
---

# v3.4 Catalog Delta — Testing under E01:S03

**Purpose:** Retire standalone **E07 Testing & Quality Assurance**; rename to avoid clash with Code Quality; renumber **E08–E09 → E07–E08**.  
**Status:** IMPLEMENTED (2026-06-12)  
**Extends:** [v3.3.0](10-v33-catalog-delta-versioning-under-e01s02.md)

---

## Decision

| Item | v3.3 | v3.4 |
|------|------|------|
| Testing home | **E07** epic (Testing & QA) | **E01:S03** story (finite bootstrap) |
| E07 title | Testing & Quality Assurance | **Retired** on fresh install |
| E08 Security | E08 | **E07** |
| E09 Code Quality | E09 | **E08** |
| Small tier | E01–E09 | **E01–E08** |

**Naming:** Drop **& Quality Assurance** from Testing — **Code Quality** (E08) owns review/upkeep/refactors; **Testing** is harness + gates only.

---

## E01:S03 — Test harness & gates

| Task | Name |
|------|------|
| T01 | Test runner & project layout |
| T02 | CI test job wiring (coordinates with E06) |
| T03 | Coverage / quality gates |
| T04 | Document test conventions |

**Version pattern:** `0.1.3.{TASK}+{BUILD}`

---

## Epic renumber (v3.3 → v3.4)

| v3.3 | v3.4 |
|------|------|
| E07 Testing & QA | → E01:S03 |
| E08 Security | **E07** |
| E09 Code Quality | **E08** |

---

## Optional (Ambitious tier)

Standalone **Testing** epic template retained under `templates/deprecated/` for teams with a full QA programme — not fresh-installed.
