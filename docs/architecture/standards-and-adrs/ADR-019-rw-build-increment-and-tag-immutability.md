---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-05T22:30:00Z
expires_at: null
housekeeping_policy: keep
---

# ADR-019 — RW BUILD increment and release-tag immutability

**Status:** Accepted  
**Date:** 2026-06-05  
**Task:** [E02:S01:T24](../../kanban/epics/epic-02/story-01-rw-agent-execution-and-docs/T24-rw-build-increment-enforcement-and-tag-immutability-br097.md)  
**FBU:** [BR-097](../../kanban/fbu/BR-097-rw-agent-reuses-tagged-build-and-force-moves-release-tags.md)

---

## Context

RW agents reused tagged BUILD numbers and force-moved release tags when follow-on releases failed validation or push (E05:S09:T14 incident, 2026-06-05). Step 9 guards and changelog immutability caught some cases too late; versioning policy previously suggested force-pushing tags.

## Decision

1. **Step 2 resolver (`resolve_rw_build.py`)** — deterministic BUILD choice before `version.py` write.
2. **Default:** same E:S:T follow-on → `BUILD = HEAD_BUILD + 1`.
3. **`--doc-policy-zero`:** only when user typed it in RW trigger AND HEAD BUILD untagged AND BUILD=0 doc-init path.
4. **Forbidden:** `git tag -f`, `git push -f`, `git push origin +v*` on release tags.
5. **Recovery:** bump BUILD (+1) and re-RW; never force-move tags.
6. **IPW:** verification/FBU waves prescribe `RW E:S:T --art` only.

## Consequences

- Supersedes force-tag guidance in `dev-kit-versioning-policy.md` §1:1 mapping.
- Dual-source parity required across `.cursorrules`, `rw.md`, portable RW excerpt.
- `validate_release_tag_immutability.py` blocks journal-documented force-tag recovery.

## References

- [IPP-E2S1T24](../../implementation-cycles/IPP-E02S01T24-rw-build-increment-tag-immutability.md)
- [RECOVERY_PROCEDURE.md](../../journals/RECOVERY_PROCEDURE.md) §4.3
