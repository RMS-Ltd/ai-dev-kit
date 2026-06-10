---
lifecycle: evergreen
ttl_days: null
created_at: 2025-12-04T12:01:57Z
expires_at: null
housekeeping_policy: keep
---

# Bug Report: [Title]

**Type:** Bug Report (BR)  
**Submitted:** [YYYY-MM-DD]  
**Submitted By:** [Name/Username]  
**Priority:** [CRITICAL/HIGH/MEDIUM/LOW]  
**Severity:** [CRITICAL/HIGH/MEDIUM/LOW]  
**Status:** [PENDING/INTAKE/ACCEPTED/REJECTED/DEFERRED]

---

## 摘要

[用一句话描述该缺陷。]

---

## 描述

[详细描述该缺陷。请包含：]
- 缺陷是什么？
- 预期行为与实际行为的差异？
- 何时发生？
- 影响哪些用户？

---

## 受影响组件

**Primary Component:** [例如：用户认证、支付处理、UI 组件]  
**Affected Areas:**
- [ ] Backend/API
- [ ] Frontend/UI
- [ ] Database/Schema
- [ ] Integration/External Service
- [ ] Documentation
- [ ] Other: [specify]

**Root Cause (if known):**
[若已识别，描述根本原因]

---

## 复现步骤

1. 步骤 1
2. 步骤 2
3. 步骤 3
4. [预期结果]
5. [实际结果]

---

## 环境

**Environment:** [Production/Staging/Development]  
**Version:** [Version number or commit hash]  
**Browser/Platform:** [If applicable]  
**OS:** [If applicable]

---

## 影响

**User Impact:**
- [ ] Critical - System unusable
- [ ] High - Major functionality broken
- [ ] Medium - Some functionality affected
- [ ] Low - Minor issue, workaround available

**Business Impact:**
[若适用，描述业务影响]

**Workaround:**
[若存在变通方案，在此描述]

---

## Acceptance Criteria (Fix Requirements)

- [ ] Criterion 1: [可验证、可测试的修复标准]
- [ ] Criterion 2: [可验证、可测试的修复标准]
- [ ] Criterion 3: [可验证、可测试的修复标准]

**Verification Method:**
- [ ] Test suite execution
- [ ] Manual testing
- [ ] Both

**Fix Verification Status:**
- [ ] Verified (test suite passed / manual test passed)
- [ ] Attempted Fix (pending verification)

---

## Fix Attempt History

**Purpose:** 本节记录针对该缺陷的所有修复尝试，以便若缺陷未消除，后续版本可参考既往尝试。

**How to Use:**
- 每次尝试修复该缺陷的 release 应在本节新增一条记录
- 记录尝试内容、有效部分、无效部分及验证状态
- 为后续修复尝试积累知识库

### Fix Attempts

#### Attempt 1: [Version] - [Date]

**Fix Description:**
[描述针对该缺陷的修复尝试]

**Changes Made:**
- [列出具体变更、修改文件、代码改动等]

**Verification Status:**
- [ ] Verified (test suite passed / manual test passed)
- [ ] Attempted Fix (pending verification)
- [ ] Fix Failed (bug still present)

**Verification Method:**
- [ ] Test suite execution
- [ ] Manual testing
- [ ] Both

**Verification Evidence:**
[链接至测试结果、CI/CD 输出或文档]

**Result:**
- [ ] Bug Fixed
- [ ] Bug Partially Fixed (describe partial fix)
- [ ] Bug Not Fixed (describe why fix didn't work)

**Lessons Learned:**
[本次尝试的教训？下次应如何调整？]

**Next Steps:**
[下次修复尝试应做什么？]

---

## 依赖

**Blocks:**
- [本 BR 阻塞的内容]

**Blocked By:**
- [阻塞本 BR 的内容]

**Related Work:**
- [相关 BR、Story、Task 或 Epic]

---

## Intake Decision

**Intake Status:** [PENDING/INTAKE/ACCEPTED/REJECTED/DEFERRED]  
**Intake Date:** [YYYY-MM-DD]  
**Intake By:** [Name/Username]

**Decision Flow Results:**
- [ ] Story Match Found: [Epic X, Story Y] → Task [T]
- [ ] New Story Created: [Epic X, Story Y] → Task 1
- [ ] New Epic Created: [Epic X, Story 1, Task 1]

**Assigned To:**
- Epic: [Epic number and name]
- Story: [Story number and name]
- Task: [Task number and name]
- Version: `[RC.EPIC.STORY.TASK+BUILD]`

**Kanban Links:**
- Epic: [`docs/project-management/kanban/epics/Epic-X/Epic-X.md`](path/to/Epic-X.md)
- Story: [`docs/project-management/kanban/epics/Epic-X/Story-XXX-*.md`](path/to/Story.md)
- Task: [Link to Task in Story document]

---

## 备注

[补充说明、上下文或考量]

---

## 参考

- [相关文档、规格、图示或外部资源]
- [相关缺陷报告或 issue]

---

**Template Usage:**
**本地化 (zh-CN)：** 指导性正文使用简体技术中文。

- 创建新 Bug Report 时复制本模板
- 填写所有相关章节
- 使用「Intake Decision」章节跟踪 FR/BR → Task → Story → Epic 转换
- 链接已创建的 Task/Story/Epic 以保持可追溯性
- **关键：** 修复须经测试验证后，方可在 changelog 中标记为「Fixed」

---

_This template is part of the Kanban Framework. See `packages/frameworks/kanban/` for complete framework documentation._
