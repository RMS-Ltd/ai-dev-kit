---
lifecycle: evergreen
ttl_days: null
created_at: YYYY-MM-DDTHH:MM:SSZ
expires_at: null
housekeeping_policy: keep
---

# E{epic}:S{story}:T{task} — Planning: Spec, Tests, Implementation Plan (IPW)

**Host Task:** [`T{task}-[slug].md`](T{task}-[slug].md) **(E{epic}:S{story}:T{task})**  
**Planning for:** [FR-XXX](../../../fbu/FR-XXX-*.md) *(if applicable)*  
**Status:** Draft | Review | Approved

> **IPW (Implementation Planning Workflow):** 运行 **IPW** / **IPW E:S:T** 时使用本模板。**Host Task** 链接及与 task 文档 **Input**、**References** 的双向连线在计划完成前为**强制**（见项目 **FR-042** — *Implementation Planning Workflow*，位于 `docs/project-management/kanban/fbu/`）。

---

## 1. Requirements (Ascertained Baseline)

### 1.1 Functional requirements (ascertained)

| ID | Requirement | Source (FR/BR/Task) |
| -- | ----------- | ------------------- |
| RF1 | … | … |

### 1.2 Non-functional requirements (ascertained)

| ID | Requirement | Source (FR/BR/Task) |
| -- | ----------- | ------------------- |
| RNF1 | … | … |

### 1.3 Invariants and boundaries

- **Invariants:** …
- **In scope:** …
- **Out of scope:** …

---

## 2. Specification

### 2.1 Goal

[一段话：本计划要达成的结果。]

### 2.2 Specification mapping from ascertained requirements

说明规格如何将上述需求基线形式化。

### 2.3 Constraints

- …

### 2.4 Status transition intent (mandatory for IPW-derived implementation tasks)

- **Current task status:** TODO | IN PROGRESS | COMPLETE
- **Transition trigger to IN PROGRESS:** 首个非规划类实现变更落地。
- **Transition trigger to COMPLETE:** 已记录验收证据（链接测试/验证说明）。
- **Atomic propagation requirement:** task 文档状态与 kboard 行状态须在同一变更集/会话中更新。
- **Owner:** 实现执行步骤（非仅规划类 IPW 创建）。

### 2.5 ADR necessity decision (mandatory — IPW Phase 5.0)

为每个触发项打 **Y** 或 **N** 并附一行证据。准则：[`ipw-adr-necessity-checklist.md`](../../../docs/architecture/standards-and-adrs/ipw-adr-necessity-checklist.md) (FR-100)。

| ID | Trigger | Y/N | Evidence |
| -- | ------- | --- | -------- |
| T1 | Alternatives | | |
| T2 | Reversibility | | |
| T3 | Blast radius | | |
| T4 | Precedent | | |
| T5 | Constraint trade-off | | |
| T6 | Governance contract | | |
| T7 | Supersedes | | |

**Outcome:** `REQUIRED` | `EXEMPT` | `ALREADY_COVERED` (link existing ADR)

若 **REQUIRED：** §5 须在 Phase 5 文档清单完成前包含 ADR `CREATE` 或 `UPDATE`。

若 **EXEMPT：** 全部 T1–T7 = N 且 E1–E5 通过（见 checklist 策略）；在 §5.3 记录治理文档引用。

| ID | Exemption (only if all T = N) | Pass? | Evidence |
| -- | --------------------------- | ----- | -------- |
| E1 | Single locus | | |
| E2 | No new options | | |
| E3 | Reversible in one task | | |
| E4 | Spec elsewhere | | |
| E5 | Documented NONE | | |

---

## 3. Test design

| ID | Behavior / layer | Expected check |
| -- | ---------------- | -------------- |
| T1 | … | … |

---

## 4. Implementation plan

| Step | Action | Deliverable |
| ---- | ------ | ----------- |
| **1** | **[MANDATORY] 将 task `E{epic}:S{story}:T{task}` 状态由 `TODO → IN PROGRESS`**（在 task 文档中）。更新 `Last updated` 日期。 | Task 文档 `Status` = `IN PROGRESS` |
| … | … | … |
| **N** | **[MANDATORY] 将 task `E{epic}:S{story}:T{task}` 状态**与实现实际状态对齐：`COMPLETE` + `✅ COMPLETE (v{version})`（若全部 AC 满足）；`IN PROGRESS`（若进行中）；`BLOCKED` + 原因（若阻塞）。更新 `Last updated`。 | Task 文档状态反映实际状态 |

**RW verification / FBU wave rule (BR-097):** §4 中任何发布后验证或 FBU 关闭步骤**仅**应规定 **`RW E{epic}:S{story}:T{task} --art`**。已打 tag 的 BUILD 之后**不得**规定 `--doc-policy-zero` 用于后续 release。

### 4.1 Files to create or modify

- …

### 4.2 Dependency order

1. …

### 4.3 Documentation implementation steps (optional)

实现期间的有序文档工作（源自 §5–§6），例如先更新 KB 指南再更新用户文档。

---

## 5. Documentation deliverables

*在 IPW Phase 5 填写 — 实现规划之后、housing 之前。*

### 5.1 Existing documents to update

| Doc ID | Path | Scope of change | Tied to (RF/T/impl step) |
| ------ | ---- | --------------- | ------------------------ |
| D-U1 | … | … | … |

### 5.2 New documents to create

| Doc ID | Proposed path (draft) | Purpose | Tied to (RF/T/impl step) |
| ------ | --------------------- | ------- | ------------------------ |
| D-C1 | … | … | … |

### 5.3 Documentation gaps and explicit non-changes

| Gap / topic | Resolution (CREATE row above, or NONE + reason) |
| ----------- | ----------------------------------------------- |
| … | … |

---

## 6. Documentation housing

*在 IPW Phase 6 填写 — 规范路径与发布意图。*

| Doc ID | Canonical path | Publication status | Publication N/A reason (if N/A) | Lifecycle | Inbound links to add |
| ------ | -------------- | ------------------ | ------------------------------- | --------- | -------------------- |
| D-U1 | … | PUBLISHED \| NOT_APPLICABLE | … | evergreen \| … | … |

**Housing rules:** 每个主题一份权威文档；优先更新既有文档而非新建重复；IPP 位于 `docs/implementation-cycles/`；Docusaurus 展示按 BR-066。

---

## 7. Success / verification criteria

- [ ] …
- [ ] 所有 §5 UPDATE/CREATE 项已实现或已明确延期并说明原因
- [ ] 所有 §6 `PUBLISHED` 路径存在且已从 task 文档链接（或 validator 通过）

---

## References

- …

---

**本地化 (zh-CN)：** 指导性正文使用简体技术中文。
