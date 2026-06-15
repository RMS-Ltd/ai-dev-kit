# Changelog v0.2.16.6+14

**Release Date:** 2026-06-16 01:10:00 UTC  
**Epic:** 2 | **Story:** 16 | **Task:** 6  
**SemVer:** v0.4.1183+14

---

## Summary

E02:S16:T06 Wave 8b — Complete Dependabot **js-yaml** remediation: force `gray-matter` onto **4.2.0**, postinstall patch for `safeLoad`/`safeDump` removal, regenerated lockfile. Closes open alert [#8](https://github.com/RMS-Ltd/ai-dev-kit/security/dependabot/8).

---

## Change implemented

### Portal / npm

- Added nested override `"gray-matter": { "js-yaml": "4.2.0" }` in [`portal/package.json`](../../../portal/package.json).
- Added [`portal/scripts/patch-gray-matter-js-yaml.cjs`](../../../portal/scripts/patch-gray-matter-js-yaml.cjs) + `postinstall` hook — `gray-matter@4.0.3` uses `yaml.load`/`yaml.dump` (js-yaml 4 API).
- Regenerated [`portal/package-lock.json`](../../../portal/package-lock.json) — **no** nested `gray-matter/node_modules/js-yaml@3.14.2`.

### Verification (local)

| Check | Result |
| ----- | ------ |
| `npm ls js-yaml` | all **4.2.0** deduped |
| `npm audit` | **0** vulnerabilities |
| `npm run build` | **SUCCESS** |

**Context:** Wave 8 (+13) added top-level `js-yaml@4.2.0` but left `gray-matter` on **3.14.2** (T01 precedent). Semver range `<=4.1.1` still flagged **3.14.2**; this wave completes the bump.

---

## Related

- [E02:S16:T06 — GitHub Security & Code Quality health (Perpetual)](../../../kanban/epics/epic-02/story-16-perpetual-ongoing-workflow-operations/T06-github-security-code-quality-health-perpetual.md)
- [Dependabot alert #8](https://github.com/RMS-Ltd/ai-dev-kit/security/dependabot/8)
- [CHANGELOG v0.2.16.6+13](CHANGELOG_v0.2.16.6+13.md) (Wave 8 partial)
