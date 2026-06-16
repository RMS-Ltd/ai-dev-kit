---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-08T18:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Epic 21, Story 9, Task 3: PR merge CI parity and adopter-public doc gates

**Task ID:** E21:S09:T03  
**Status:** COMPLETE  
**Priority:** HIGH  
**Last updated:** 2026-06-08 (RW **v0.21.9.3+1** — PR merge CI + adopter-public doc gates)  
**Version Anchor:** v0.21.9.3+1  
**Code:** E21S09T03

---

## Input

- [PR #47](https://github.com/RMS-Ltd/ai-dev-kit/pull/47) — merge `epic/21-internationalisation-localisation` → `dev`
- Post-merge commits: `791d85e6` (merge), `01ecf205` (CI fixes), `338d3b14` (portal/greenfield gates)
- [BR-068](../../fr-br/BR-068-docusaurus-monorepo-markdown-links-break-strict-production-build.md) · [FR-114](../../fr-br/FR-114-split-documentation-surfaces-docusaurus-public-notion-maintainer-kb.md) · [FR-110](../../fr-br/FR-110-lean-adopter-distribution-footprint-and-vendor-bundle.md)

---

## Scope

1. Resolve PR #47 merge conflicts (`docs/kanban/` path promotion + Epic 21 story renumber).
2. Fix CI failures: Docusaurus link guard, greenfield-install drift, RW installer dry-run locale prompt.
3. Harden prevention: [adopter-public-documentation-authoring.md](../../../../governance/standards/adopter-public-documentation-authoring.md), pre-commit hooks, IPW/IPP template ACs, agent binding rules (P-PORTAL-LINKS, P-GREENFIELD-SYNC).

---

## Deliverables

- [x] Merge `origin/dev` into epic branch with kanban at `docs/kanban/`
- [x] Portal-safe GitHub blob links in Epic 21 user-docs
- [x] `greenfield-install/` locale mirror synced and committed
- [x] `localisation_config.py` — non-interactive on `--dry-run`
- [x] Governance standard + pre-commit + `validate_actions_ci_parity` portal pytest gate
- [x] RW release attributing this task @ **v0.21.9.3+1**

---

## Acceptance criteria

- [x] `pytest tests/test_portal_br068_monorepo_links.py tests/test_portal_fr114_allowlist.py` green
- [x] `python scripts/sync_greenfield_install.py --check` green
- [x] `pytest -m fr006` green (109 tests)
- [x] RW complete with forensic version anchor on this task @ **v0.21.9.3+1**
- [x] PR #47 CI green after push (operator verify post-RW) — ✅ verified 2026-06-16 (merged 2026-06-08; Docusaurus + greenfield-install SUCCESS)

---

## References

- [Story 09](../story-09-epic-housekeeping.md)
- [adopter-public-documentation-authoring.md](../../../../governance/standards/adopter-public-documentation-authoring.md)
- [Epic 21](../Epic-21.md)
