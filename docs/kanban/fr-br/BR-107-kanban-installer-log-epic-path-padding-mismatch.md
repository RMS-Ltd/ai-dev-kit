---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-10T20:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Bug Report BR-107: Kanban Fresh Install Logs Unpadded Epic Paths but Writes `{epic:02d}` Directories

**Bug ID:** BR-107  
**Priority:** LOW  
**Severity:** LOW (cosmetic / operator confusion; install succeeds)  
**Status:** FIXED  
**Fixed in:** v0.6.9.30+2 (E06:S09:T30)  
**Source finding:** **F21** (Starborn Legacy install attempt 05)  
**Related:** [UXR-017](UXR-017-kanban-epic-story-path-lowercase-naming.md) · [E06:S09:T27](../epics/epic-06/story-09-ai-dev-kit-installation-and-adopter-integration/T27-kanban-v32-package-rewrite-installer-f9-f17.md)  
**Implementing Task:** [E06:S09:T30](../epics/epic-06/story-09-ai-dev-kit-installation-and-adopter-integration/T30-kanban-installer-log-epic-path-padding-br107.md)  
**SBL evidence:** `starborn_legacy/logs/ai-dev-kit/install/attempt-05/transcripts/20260610T183509Z-phase3c-kanban-v3dot2.txt`

---

## Summary

Kanban v3.2 fresh install success lines log destinations like `epics/epic-1/epic-1.md` while the installer actually writes `epics/epic-01/epic-01.md` (zero-padded epic segments per UXR-017).

---

## Observed (phase3c transcript)

```
✅ Epic 1 installed from template: … → epics/epic-1/epic-1.md
✅ Epic 5 installed from template: … → epics/epic-5/epic-5.md
```

On disk after install: `docs/kanban/epics/epic-01/` … `epic-10/` (padded).

---

## Expected

Install stdout/log lines reflect **actual** written paths (`epic-{epic:02d}/epic-{epic:02d}.md`) or a single canonical formatter shared with `migrate_structure` path builder.

---

## Acceptance criteria

- [x] Fresh v3.2 install log lines match on-disk epic directory names.
- [x] No change to valid on-disk layout (padding remains UXR-017 compliant).
