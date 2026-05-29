---
lifecycle: evergreen
ttl_days: null
created_at: 2026-04-19T00:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Epic 6, Story 9, Task 3: Installation canonical repository alignment (FR-082)

**Task ID:** E6:S09:T03  
**Status:** IN PROGRESS  
**Priority:** MEDIUM  
**Estimated Effort:** Small  
**Created:** 2026-04-19  
**Last updated:** 2026-04-19 (RW **v0.6.9.3+1** — **E6:S09:T03** `--art`)  
**Code:** E6S09T03

**Upstream:** [FR-082 - Installation distribution canonical repository alignment](../../../fr-br/FR-082-installation-distribution-canonical-repo-alignment.md)

---

## Task ID

**Full Task ID:** `E6:S09:T03`

---

## Input

- **FR-082** requirements (canonical `earlution/ai-dev-kit` defaults and guide URLs).
- Current `install_package_from_release.py`, **PACKAGE_INSTALLATION_GUIDE**, **INSTALL_IN_YOUR_PROJECT.md**.
- Coordination with **FR-080** examples once **T01** defines greenfield command lines.

---

## Problem statement

Installation tooling and guides must use **canonical** GitHub coordinates for this monorepo (`earlution/ai-dev-kit`). Placeholder or incorrect defaults risk **silent** wrong-target downloads.

---

## Deliverable

- **Corrected defaults and examples** per FR-082 across `install_package_from_release.py`, package installation guide, and `INSTALL_IN_YOUR_PROJECT.md` as needed.
- **Recorded decision** if unsafe defaults are removed in favor of required explicit `--repo`.

---

## Scope

1. Audit `install_package_from_release.py` default `--repo` and align with FR-082-F1.
2. Fix **PACKAGE_INSTALLATION_GUIDE** URLs and examples that reference non-canonical org/repo.
3. Align **INSTALL_IN_YOUR_PROJECT** examples with working `--repo` or documented defaults.
4. Verify fork override path remains clear for enterprise mirrors.

---

## Acceptance criteria

- [ ] **AC1:** Documented install commands resolve to the intended public repository or fail fast with a clear error.
- [ ] **AC2:** No known-bad placeholder org/repo strings remain in primary install paths.
- [ ] **AC3:** FR-082 acceptance criteria satisfied; notes captured for backward compatibility if behavior changes.

---

## References

- [FR-082](../../../fr-br/FR-082-installation-distribution-canonical-repo-alignment.md)
- [FR-080](../../../fr-br/FR-080-greenfield-installation-process.md) (consumer of correct install defaults)
