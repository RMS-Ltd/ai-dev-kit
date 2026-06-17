---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-17T16:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Cursor Rules: IPW / IDW / MWF delivery stubs (FR-135)

**Purpose:** Append after RW and UKW trigger sections when `trigger_bundle: rw_ukw_delivery`.

**Source:** ai-dev-kit `packages/frameworks/workflow-mgt/cursorrules-delivery-trigger-section.md`

---

### 🔄 IMPLEMENTATION PLANNING (IPW) — stub

When the user types **`IPW`** or **`IPW E:S:T`** in **plan mode**, run Implementation Planning Workflow per project IPW command guide. Produce **`IPP-E…S…T…-*.md`** under `docs/implementation-cycles/` and wire to the host task.

### 🔄 IMPLEMENTATION DELIVERY (IDW) — stub

When the user types **`IDW E:S:T`** in **implementation mode**, execute linked IPP/ICW per project IDW command guide. **`IDW E:S:T --rw`** chains local-complete Release Workflow after success.

### 🔄 META-WORKFLOW (MWF) — stub

When the user types **`MWF E:S:T delivery`**, orchestrate **IPW → IDW --rw** per project MWF command guide (FR-124). Forward `--push` / `--art` to the IDW leg when present.
