# Detailed Changelog — v0.2.16.4+15

**Release Date:** 2026-05-29 16:51:17 UTC  
**Internal Version:** v0.2.16.4+15  
**SemVer:** v0.4.821+15  
**Epic:** 2 | **Story:** 16 | **Task:** 4 (perpetual UKW / kanban hygiene)

---

## Summary

kboard/fbuboard consolidation: pruned completed/superseded FBUs from active MoSCOW; mirrored open implementing tasks on both boards; reinstated **E7:S01:T09** (UXR-005); wired **UXR-001/002** to **E7:S00** + **E7:S05**; removed duplicate fbuboard orphan block.

---

## Change implemented

- **fbuboard:** Archived **BR-065**, **BR-072**, **UXR-012**, **FR-086**, **UXR-008**, **FR-090/091/084/092**, **FR-040** from active MoSCOW → [`fbu-completed.md`](../../project-management/kanban/fbu-completed.md).
- **kboard Should:** **E2:S16:T06**, **E2:S01:T17**, **E5:S01:T46**, **E7:S01:T09** aligned with fbuboard.
- **kboard Could:** **UXR-001/002** registry + synthesis pointers; footnote for retired **FR-031/024/057**.
- **fbuboard:** **UXR-005** on Should; **UXR-001/002** on Could with task links; **FR-031** Won't Have; merged backlog-sync orphans into Could.
- **BR-067:** Implementing task link corrected to **E2:S16:T03**.

---

## Verification

- `validate_kanban_state_icons.py --strict` PASS. User may verify full `fr-br/` corpus on comprehensive UKW.
