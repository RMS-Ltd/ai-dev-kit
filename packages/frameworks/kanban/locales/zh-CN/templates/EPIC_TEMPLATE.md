---
lifecycle: evergreen
ttl_days: null
created_at: 2025-12-04T12:01:57Z
expires_at: null
housekeeping_policy: keep
---

# Epic X: [Title]

**Status:** [TODO/IN PROGRESS/COMPLETE]
**Priority:** [HIGH/MEDIUM/LOW]
**Estimated Effort:** [X-Y hours]
**Created:** [YYYY-MM-DD]
**Last updated:** [YYYY-MM-DD] (vX.Y.Z.T+B – [summary])
**Branch:** `epic/X-slug`
**Version Schema:** `0.X.S.T+B`
**Production URL:** [Optional]

---

## Story Checklist

- [ ] **EXX:S01 – [Story Title]** - [Status]
- [ ] **EXX:S02 – [Story Title]** - [Status]
- [ ] **EXX:S03 – [Story Title]** - [Status]

> **关键：** 本 Story Checklist 是 story 状态与版本标记的**唯一事实来源**。  
> **Forensic Marker Format:** `✅ COMPLETE (vRC.E.S.T+B)` (e.g., `✅ COMPLETE (v0.4.1.3+1)`)  
> **Release Workflow Requirement:** 当 Release Workflow (RW) Step 4 更新本 Epic 文档时，**必须**更新**所有**章节：
> - Epic 页眉 `Last updated` 字段
> - Story Checklist（状态与版本标记）
> - Story 详细章节（Status、Last updated、task 复选框）
> - 任何其他指向所发布 story/task 的引用
> 
> **Consistency Check:** 每次 RW 后，验证 Epic 页眉、Story Checklist 与详细章节一致。

---

## 概述

[一段话。Epic 的目的、范围与动机。]

---

## 目标

1. 目标标题及简要说明
2. 目标标题及简要说明
3. 目标标题及简要说明

---

## Stories

> **关键：层级委派原则**
> 
> **Epic 文档必须将 Story 细节委派给 Story 文档。** 本 Epic 模板**不得**重复 Story 级信息（Status、Priority、Goals、Tasks、Acceptance Criteria 等）。Epic 文档应：
> - 通过上方 Story Checklist 引用 story
> - 提供简要 story 摘要或链接至 Story 文档
> - 将所有 Story 详细信息委派给 Story 文档
> 
> **Epic 应包含：**
> - ✅ Story Checklist（仅引用，含状态/版本标记）
> - ✅ 简要 story 摘要（每个 story 1–2 句）
> - ✅ 链接至 Story 文档
> - ✅ Epic 级依赖与协调
> 
> **Epic 不应包含：**
> - ❌ 详细 story 描述
> - ❌ Story 级目标、task、验收标准
> - ❌ Task 级细节
> - ❌ Story 实现细节

### Story Y: [Story Title]

**Brief Summary:** [一句话说明本 story 要完成什么]

**Story Document:** [`Story-YYY-story-title.md`](Story-YYY-story-title.md) or [`epics/Epic-X/Story-YYY-story-title.md`](epics/Epic-X/Story-YYY-story-title.md)

> **Note:** 详细 Story 信息（Status、Priority、Goals、Tasks、Acceptance Criteria、Dependencies 等）见上方链接的 Story 文档。本 Epic 文档仅提供高层引用。

---

## 依赖

**Blocks:**
- [本 epic 阻塞的内容]

**Blocked By:**
- [阻塞本 epic 的内容]

**Coordinates With:**
- [Epic/Story 协调点]

---

## 风险与缓解

- 风险描述 — 缓解措施
- 风险描述 — 缓解措施

---

## 参考

- [相关文档、规格、图示]

---

## Maintenance Cadence

_仅适用于维护类 epic。_

- **Weekly:** [schedule items]
- **Monthly:** [schedule items]
- **Quarterly:** [schedule items]
- **As Needed:** [schedule items]

---

**本地化 (zh-CN)：** 指导性正文使用简体技术中文。
