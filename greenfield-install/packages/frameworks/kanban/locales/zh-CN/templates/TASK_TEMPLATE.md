---
lifecycle: evergreen
ttl_days: null
created_at: YYYY-MM-DDTHH:MM:SSZ
expires_at: null
housekeeping_policy: keep
---

# Epic X, Story Y, Task Z: [Task Title]

> **Example:** See `packages/frameworks/kanban/examples/Task-001-Example-Separate-File.md` for a complete example of this template in use.

**Status:** [TODO/IN PROGRESS/COMPLETE]  
**Priority:** [HIGH/MEDIUM/LOW]  
**Last updated:** [YYYY-MM-DD] (vX.Y.Z.T+B – [summary])  
**Started:** [YYYY-MM-DD]  
**Completed:** [YYYY-MM-DD]  
**Version:** vX.Y.Z.T+B  
**Code:** EXXSYYTZZ

---

## Task ID

**Format:** `E{epic}:S{story}:T{task}` (e.g., `E04:S11:T01`)

**Full Task ID:** `EXX:SYY:TZZ`

---

## Scope

[清晰描述本 task 要完成什么。解决什么问题？交付什么价值？]

---

## Input

[启动本 task 需要什么？依赖、前置条件、来自其他 task 或外部的输入。]

**IPW planning artifact (when used):** 若为本 task 运行了 **IPW** / **IPW E:S:T**，在此（及 **References** 下）用**相同相对路径**链接计划文档。计划文档须在其 **Host Task** 页眉回链至本 task（**FR-042**）。

---

## Deliverable

[本 task 产出什么？具体制品、文档、代码或结果。]

---

## Acceptance Criteria

- [ ] Criterion one (measurable, testable)
- [ ] Criterion two (measurable, testable)
- [ ] Criterion three (measurable, testable)

---

## Approach

1. Step one
2. Step two
3. Step three

---

## Dependencies

**Depends On:**
- [Epic, Story, Task, or external dependency]
- [Another dependency]

**Blocks:**
- [What this task blocks]

**Blocked By:**
- [What blocks this task]

**Parallel Development Candidacy:** [Safe / Blocked] because [reason]

---

## Cross-Wiring

> **Bidirectional Wiring Required:** 每条交叉连线必须双向。若 Task A 链接 Task B，Task B 必须回链 Task A。完整指引见 [`BIDIRECTIONAL_WIRING_PRINCIPLE.md`](../../../docs/governance/principles/bidirectional-wiring-principle.md)。
>
> **Context Required:** 每条交叉连线必须说明*为何*相关。禁止泛化链接（例如「相关 task」）。
>
> **See:** 标准作业程序见 [`task-template-cross-wiring-sop.md`](../../../docs/architecture/standards-and-adrs/task-template-cross-wiring-sop.md)。

**Relationship Types:**

- **Complements** — 协同达成目标的 task
- **Coordinates With** — 需要同步的 task
- **Informs** — 提供上下文或信息的 task
- **Follows** — 逻辑上在后的 task（非阻塞）
- **Precedes** — 逻辑上在前的 task（非阻塞）
- **Related To** — 一般关系（无更合适类型时使用）

**Related Tasks:**

- **[EXX:SYY:TZZ: Task Title](path/to/task.md)** - **Relationship Type:** [Complements/Coordinates With/Informs/Follows/Precedes/Related To] - **Context:** [Why tasks are related]

**Related BR/FR Documents:**

- **[BR-XXX: Bug Report Title](path/to/BR-XXX.md)** - **Relationship Type:** [Relationship Type] - **Context:** [Why related]
- **[FR-XXX: Feature Request Title](path/to/FR-XXX.md)** - **Relationship Type:** [Relationship Type] - **Context:** [Why related]

**Cross-Wiring Notes:**

[关于交叉连线、协调要求或关系上下文的补充说明]

### Dependencies vs Cross-Wiring

| Aspect | Dependencies | Cross-Wiring |
|--------|-------------|--------------|
| **Nature** | Blocking / sequential | Contextual / informational |
| **Direction** | `Depends On` / `Blocks` | Bidirectional (always both ways) |
| **Usage** | 依赖未解决前 task 不能启动 | task 可独立推进但共享上下文 |
| **Examples** | "Blocked by: E02:S01:T01" | "Informs: E02:S01:T03 — provides analysis for design" |

### Cross-Wiring Examples

**Example 1: Complements**
```markdown
- **[E9:S01:T01: Current State Inventory](../../epic-09/story-001/T01-current-state-inventory.md)** - **Relationship Type:** Complements - **Context:** Both tasks analyze RC readiness gaps from different perspectives; inventory provides input for gap analysis
```

**Example 2: Coordinates With**
```markdown
- **[E9:S01:T07: Roadmap Planning](../../epic-09/story-001/T07-roadmap-planning.md)** - **Relationship Type:** Coordinates With - **Context:** Both tasks modify the same versioning policy document; changes must be synchronized
```

**Example 3: Informs**
```markdown
- **[E2:S01:T02: RC=1 Criteria Definition](../../epic-02/story-001/T02-rc1-criteria-definition.md)** - **Relationship Type:** Informs - **Context:** Criteria definition provides context and constraints for this task's design decisions
```

---

## Related Work

> **Bidirectional Wiring Reminder:** 本节每条链接必须双向。若链接 BR/FR、task 或 story，对方必须回链本 task。指引见 [`BIDIRECTIONAL_WIRING_PRINCIPLE.md`](../../../docs/governance/principles/bidirectional-wiring-principle.md)。带关系类型的 task 间关系请使用上方 **Cross-Wiring** 章节。

**Related BR/FR Links:**
- [BR-XXX: Bug Report Title](path/to/BR-XXX.md) — *Bidirectional: BR must link back to this task in its Kanban Links section*
- [FR-XXX: Feature Request Title](path/to/FR-XXX.md) — *Bidirectional: FR must link back to this task in its Kanban Links section*

**Related Tasks:**
- [EXX:SYY:TZZ: Related Task Title](path/to/task.md) — *Bidirectional: task must link back to this task*

**Related Stories:**
- [EXX:SYY: Related Story Title](path/to/story.md) — *Bidirectional: story must reference this task*

---

## Version Anchor

**Forensic Marker Format:** `✅ COMPLETE (vRC.E.S.T+B)` (e.g., `✅ COMPLETE (v0.4.11.1+1)`)

**When Task is Complete:**
- 在 Task 文档添加 forensic marker
- 在 Story checklist 添加 forensic marker
- 更新 version 文件中的 task 完成信息
- 在 changelog 中记录 task 完成

---

## 备注

[本 task 的补充说明、上下文或考量。]

---

## Completion Summary

[task 完成时填写。交付了什么？经验教训？达成了哪些指标？]

---

## 参考

- [相关文档、PR、commit、图示]
- [外部资源、文档、标准]

---

## Next Actions

- [ ] Action one (if task is blocked or requires follow-up)
- [ ] Action two

---

**本地化 (zh-CN)：** 指导性正文使用简体技术中文。
