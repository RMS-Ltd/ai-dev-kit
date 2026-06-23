---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-07T18:55:00Z
expires_at: null
housekeeping_policy: keep
---

# Epic 1, Story 6, Task 2: MIT LICENSE file and repository legal metadata (FR-117)

**Status:** ✅ COMPLETE  
**Priority:** HIGH  
**Last updated:** 2026-06-07 (v0.1.6.2+1 — RW E01:S06:T02 --art)  
**Started:** 2026-06-07  
**Completed:** 2026-06-07  
**Version:** v0.1.6.2+1  
**Code:** E01S06T02

---

## Task ID

**Task ID:** E01:S06:T02  
**Format:** `E{epic}:S{story}:T{task}`  
**Full Task ID:** `E01:S06:T02`

---

## Associated Feature Request

- [FR-117: MIT LICENSE file and repository legal metadata](../../../fbu/FR-117-mit-license-file-and-repository-legal-metadata.md)

---

## Scope

Close the open-source licensing gap: README claimed MIT but no `LICENSE` file existed. Add canonical MIT license at repo root and align contributor-facing docs.

---

## Input

- Maintainer decision: MIT (permissive; adoption-friendly; matches README badge)
- Existing README MIT badge and License section
- [FR-117](../../../fbu/FR-117-mit-license-file-and-repository-legal-metadata.md) acceptance criteria

**IPW planning artifact:** Not required (docs-only; no behaviour change).

---

## Deliverable

| Artifact | Action | Status |
| -------- | ------ | ------ |
| [`LICENSE`](../../../../../../LICENSE) | Add MIT text; copyright RMS-Ltd 2025–2026 | ✅ Done |
| [`README.md`](../../../../../../README.md) | License section links to `LICENSE` | ✅ Done |
| [`CONTRIBUTING.md`](../../../../../../CONTRIBUTING.md) | Contribution licensing clause | ✅ Done |

---

## Acceptance Criteria

- [x] Root `LICENSE` file exists with MIT terms.
- [x] README License section references `LICENSE`.
- [x] CONTRIBUTING.md states contributions are MIT-licensed.
- [x] RW version anchor on **E01:S06:T02** (**v0.1.6.2+1**).

---

## Approach

1. Add standard MIT `LICENSE` at repository root (RMS-Ltd copyright).
2. Update README License section to link `LICENSE` instead of badge-only reference.
3. Add one-line contribution licensing note to `CONTRIBUTING.md`.
4. Release via RW with `--art` when on `dev` or matching epic branch.

---

## Dependencies

**Depends On:** None  

**Blocks:** None  

**Related:**

- [E01:S06:T01](T01-setup-byob-badges-for-private-repository.md) — static MIT license badge in README

---

## Verification

```bash
test -f LICENSE && head -3 LICENSE
grep -F '[LICENSE](LICENSE)' README.md
grep -F 'MIT License' CONTRIBUTING.md
```

---

## RW Notes

- **Suggested trigger:** `RW E01:S06:T02 --art`
- **Branch:** `dev` or `epic/1-ai-dev-kit-core`
- **Summary line:** Add MIT LICENSE file; align README and CONTRIBUTING legal metadata
