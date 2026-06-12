# CHANGELOG v0.2.16.6+9 — Dependabot joi CVE remediation (E02:S16:T06)

**Release Date:** 2026-06-12 11:10:58 UTC  
**Epic:** 2 | **Story:** 16 | **Task:** 6  
**SemVer (task_touch):** v0.4.1158+9

---

## Summary

Change implemented for perpetual T06 Wave 6: remediate [Dependabot alert #5](https://github.com/RMS-Ltd/ai-dev-kit/security/dependabot/5) (**GHSA-q7cg-457f-vx79** / **CVE-2026-48038**) by pinning transitive `joi@18.2.1` via `portal/package.json` npm override.

---

## Change implemented

- **`portal/package.json`:** Added `"joi": "18.2.1"` to `overrides` (same pattern as `uuid` / `serialize-javascript`).
- **`portal/package-lock.json`:** Regenerated; sole resolved `joi@18.2.1` via `@docusaurus/core@3.10.1` / `@docusaurus/types@3.10.1`.
- **`portal/README.md`:** Documented npm override triage for transitive Dependabot advisories.
- **IPP / T06 task doc:** Wave 6 manifest + AC17; IPP §8 Wave 6 revision.

---

## Verification

| Check | Result |
| ----- | ------ |
| `npm ls joi` | single **18.2.1** |
| `npm ci && npm run build` | green |
| `validate_actions_ci_parity.py --strict` | Docusaurus lane green |
| Portal pytest (BR-068 / FR-114) | 9 passed |
| `npm audit` | joi / GHSA-q7cg-457f-vx79 absent |

Operator: confirm Dependabot alert #5 **fixed** post-merge (TC34).

---

## References

- [Dependabot alert #5](https://github.com/RMS-Ltd/ai-dev-kit/security/dependabot/5)
- [E02:S16:T06](../../kanban/epics/epic-02/story-16-perpetual-ongoing-workflow-operations/T06-github-security-code-quality-health-perpetual.md)
- [IPP-E02S16T06](../../implementation-cycles/IPP-E02S16T06-github-security-code-quality-health-perpetual-fr112.md)
- [FR-112](../../kanban/fr-br/FR-112-perpetual-github-ci-and-security-health-lanes.md)
