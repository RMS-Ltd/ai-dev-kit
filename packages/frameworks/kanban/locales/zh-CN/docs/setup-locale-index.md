---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-07T12:00:00Z
expires_at: null
housekeeping_policy: keep
---

# 配置本地化索引 (zh-CN)

**本地化：** 简体中文 (`zh-CN` / `CN`)

## 流程

1. **Step 0** — 在[模板后配置指南](../../../../../../docs/documentation/user-docs/framework-dependency-post-template-setup-guide.md#step-0-select-language-variant-uk--us-english)中选择语言，或通过 `ai-dev-kit init` / `install_release_workflow.py`。
2. **持久化** — 项目根目录 `ai-dev-kit-config.yaml`（`localisation.language: zh-CN`）。
3. **内容** — Phase 1 模板位于 [`../templates/`](../templates/)（清单：[`../../manifest.yaml`](../../manifest.yaml)）。
4. **T06** — 安装程序将从配置解析清单键（尚未接入）。

## Phase 1 种子模板

FR、BR、UXR、FB、TASK、STORY、EPIC、PLAN_DOC — 指导性正文使用简体技术中文。
