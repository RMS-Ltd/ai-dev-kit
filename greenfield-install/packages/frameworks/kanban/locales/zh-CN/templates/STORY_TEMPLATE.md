---
lifecycle: evergreen
ttl_days: null
created_at: 2025-12-04T12:01:57Z
expires_at: null
housekeeping_policy: keep
---

# Epic X, Story Y: [Title]

**Status:** [TODO/IN PROGRESS/COMPLETE/DEFERRED]
**Priority:** [HIGH/MEDIUM/LOW]
**Last updated:** [YYYY-MM-DD] (vX.Y.Z.T+B – [summary])
**Estimated Effort:** [X hours]
**Actual Effort:** [X hours]
**Started:** [YYYY-MM-DD]
**Completed:** [YYYY-MM-DD]
**Version:** vX.Y.Z.T+B
**Code:** EXXSYY

---

## Task Checklist

- [ ] **EXX:SYY:T01 – [Task Title]** ✅ COMPLETE (vX.Y.Z.T+B)
- [ ] **EXX:SYY:T02 – [Task Title]**
- [ ] **EXX:SYY:T03 – [Task Title]**

> **Format:** `Exx:Sxx:Txx` (Epic、Story、Task，2 位零填充，例如 `E01:S01:T01`、`E02:S04:T05`)  
> **Forensic Marker Format:** `✅ COMPLETE (vRC.E.S.T+B)` (e.g., `✅ COMPLETE (v0.4.1.3+1)`)  
> **Release Workflow Requirement:** 当 Release Workflow (RW) Step 4 更新 Epic 文档时，**必须**更新**所有**章节：
> - Epic 页眉 `Last updated` 字段
> - Epic Story Checklist（状态与版本标记）
> - Epic story 详细章节（Status、Last updated、task 复选框）
> - 任何其他指向本 story/task 的引用
> 
> **Consistency Check:** 每次 RW 后，验证 Story 文件、Epic 页眉、Epic Story Checklist 与 Epic 详细章节一致。

---

## 概述

[一句话。本 story 要完成什么。]

---

## 目标

- [ ] Goal one
- [ ] Goal two
- [ ] Goal three

---

## Tasks

> **关键：层级委派原则**
> 
> **Story 文档必须将 Task 细节委派给 Task 文档。** 本 Story 模板**不得**重复 Task 级实现细节（Approach 步骤、详细验收标准等）。Story 文档应：
> - 通过上方 Task Checklist 引用 task
> - 提供简要 task 摘要或链接至 Task 文档
> - 将所有 Task 详细信息委派给 Task 文档
> 
> **Story 应包含：**
> - ✅ Task Checklist（仅引用，含状态/版本标记）
> - ✅ 简要 task 摘要（每个 task 一句）
> - ✅ 链接至 Task 文档（独立文件格式时）
> - ✅ Story 级验收标准（非 task 级）
> - ✅ Story 级目标与概述
> 
> **Story 不应包含：**
> - ❌ 详细 task 描述
> - ❌ Task 实现细节（Approach 步骤）
> - ❌ Task 级验收标准（属于 Task 文档）
> - ❌ Task 输入/交付物细节（除非简要摘要）

**关键：Task 文档要求**

每个 Task **必须**有独立的 Task 文档。可采用以下两种格式之一：

### Format 1: Separate Task File (Recommended)

**Location:** `kanban/epics/epic-XX/story-YY/TYY-description.md` or `kanban/epics/epic-XX/story-YY/TYY-description.md`

**Example:** `kanban/epics/epic-04/story-11/T01-update-kanban-policy.md` (epic/story/task ≤99 时用 2 位；>99 时用 3 位)

**When to Use:**
- 复杂度较高或多阶段的 task
- 可能有附属文件（图示、笔记等）的 task
- 适合独立文档的 task
- 需要最大可追溯性的项目

**Task Checklist Reference:**
- [ ] **EXX:SYY:T01 – [Task Title]** ✅ COMPLETE (vX.Y.Z.T+B)
  - Task Doc: [`Task-001-task-title.md`](Task-001-task-title.md)

### Format 2: Delimited Section Within Story (Alternative)

**Location:** 在本 Story 文档内，以 Task ID 为清晰标题

**Format:** `### E{epic}:S{story}:T{task} – Task Name` 后接 task 内容

**When to Use:**
- 简单、直接的 task
- 文档需求较少的 task
- 文档要求紧凑的项目
- 与 Story 紧密耦合的 task

**Example Structure:**
```markdown
### EXX:SYY:T01 – [Task Title]

> **Format:** Always use full `Exx:Sxx:Txx` format (e.g., `E1:S01:T01`, not `T01` alone)

**Input:** [What this task requires]
**Deliverable:** [What this task produces]
**Dependencies:** [Epic, Story, Task, or external]
**Blocker:** [None, or specific dependency]
**Parallel Development Candidacy:** [Safe / Blocked] because [reason]

**Approach:**
1. Step one
2. Step two
3. Step three
```

---

### Task Documentation Requirements

无论采用何种格式，每个 Task **必须**包含：

- **Task ID:** `E{epic}:S{story}:T{task}` (e.g., `E04:S11:T01`)
- **Scope:** 清晰描述 task 要完成什么
- **Acceptance Criteria:** 可衡量的完成标准
- **Status:** 当前状态 (TODO, IN PROGRESS, COMPLETE)
- **Version Anchor:** task 完成时的版本标记 (e.g., `✅ COMPLETE (v0.4.11.1+1)`)
- **Input:** 启动本 task 所需内容
- **Deliverable:** 本 task 产出物
- **Dependencies:** 本 task 依赖的其他 task 或工作项
- **Blocker:** 阻塞本 task 的 task 或工作项
- **Related BR/FR Links:** 相关 Bug Report 或 Feature Request 链接

**Template:** 独立 Task 文件请使用 `packages/frameworks/kanban/templates/TASK_TEMPLATE.md`。

**Examples:**
- **Separate File Format:** See `packages/frameworks/kanban/examples/Task-001-Example-Separate-File.md`
- **Delimited Section Format:** See `packages/frameworks/kanban/examples/Story-Example-With-Delimited-Tasks.md`

---

### Example Tasks

#### Example: Separate Task File Format

**Task Checklist Entry:**
- [ ] **EXX:SYY:T01 – [Task Title]** ✅ COMPLETE (vX.Y.Z.T+B)
  - Task Doc: [`Task-001-task-title.md`](Task-001-task-title.md)

#### Example: Delimited Section Format

> **Note:** 即使在 Story 文档内使用分隔章节，Task 内容也应自包含且完整。Story 文档作为容器，Task 章节应包含所有 Task 级细节（Input、Deliverable、Approach、Acceptance Criteria 等）。

### EXX:SYY:T01 – [Task Title]

> **Format:** Always use full `Exx:Sxx:Txx` format (e.g., `E01:S01:T01`, not `T01` alone)

**Brief Summary:** [一句话说明本 task 要完成什么]

**Task Document:** 本 task 以 Story 文档内的分隔章节记录。详细 Task 信息（Input、Deliverable、Approach、Acceptance Criteria、Dependencies 等）见下方 Task 章节。

**Input:** [What this task requires]  
**Deliverable:** [What this task produces]  
**Dependencies:** [Epic, Story, Task, or external]  
**Blocker:** [None, or specific dependency]  
**Parallel Development Candidacy:** [Safe / Blocked] because [reason]

**Approach:**
1. Step one
2. Step two
3. Step three

**Acceptance Criteria:**
- [ ] Criterion one (measurable, testable)
- [ ] Criterion two (measurable, testable)

> **Note:** 使用分隔章节时，所有 Task 级细节位于 Task 章节内。Story 文档提供容器，不在其他位置重复 Task 信息。

---

## Acceptance Criteria

- [ ] Criterion one
- [ ] Criterion two
- [ ] Criterion three

---

## 依赖

**Blocks:**
- [本 story 阻塞的内容]

**Blocked By:**
- [阻塞本 story 的内容]

**Coordinates With:**
- [Epic/Story 协调点]

---

## Completion Summary

[交付内容。经验教训。达成的指标。]

---

## 参考

- [相关文档、PR、commit、图示]

---

## Next Actions

- [ ] Action one
- [ ] Action two

---

**本地化 (zh-CN)：** 指导性正文使用简体技术中文。
