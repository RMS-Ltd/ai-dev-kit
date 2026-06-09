---
lifecycle: evergreen
ttl_days: null
created_at: 2026-05-18T00:00:00Z
expires_at: null
housekeeping_policy: keep
---

# ADR-005: Ollama Model Ecosystem for Multi-Domain AI Workloads

**Status:** Accepted
**Date:** 2026-05-18
**Deciders:** User (Ruari Mears)
**Related:** Cloud-agent orchestration, local on-device inference strategy

---

## Context

The user operates a multi-domain workload spanning software engineering, academic research, podcast production, and book authorship. Available compute:

- **Cloud:** Ollama Pro (3 simultaneous cloud agents)
- **Local:** Apple M1 Pro (16 GB unified RAM, ARM architecture with Apple Silicon ML acceleration)

The problem is not model availability (Ollama hosts dozens), but model *selection* and *assignment* — matching each workload to the model whose architecture, context window, and specialization yield the highest utility per token and per second.

Three constraints drive the decision:

1. **Memory ceiling.** 16 GB unified RAM on M1 Pro implies a practical limit of ~7B–14B dense models at full context, or MoE/quantized models up to ~33B parameters with sparse activation.
2. **Privacy boundary.** Draft academic papers, unpublished book chapters, and early podcast scripts should not leave the device until the author chooses.
3. **Parallel throughput.** Three cloud slots allow concurrent, non-blocking generation (e.g., drafting Chapter 3 while refactoring a module and researching citations).

---

## Decision

Adopt a **dual-tier, role-based ecosystem**: three dedicated cloud agents, each bound to a single model for a primary role, plus a curated set of local models for offline, low-latency, or privacy-sensitive work.

### Cloud Tier (Ollama Pro — 3 Agents)

| Slot | Model | Role | Projects |
|------|-------|------|----------|
| **1** | `kimi-k2.6` | **The Engineer** — long-horizon coding, proactive autonomous execution, swarm-based task orchestration | Vibe-coding framework, Head-First code examples, software architecture |
| **2** | `qwen3.5:122b` or `gemma4:31b` | **The Creator** — multimodal, general utility, creative writing, brainstorming | Podcast scripts, non-fiction prose, mixed-media tasks |
| **3** | `deepseek-r1:32b` (local) | **The Scholar** — deep reasoning, research synthesis, citation chains | Political science paper, book argumentation, long-document review |

**Rationale per slot:**

- **kimi-k2.6** is the current state-of-the-art for agentic coding and proactive execution. Its specialization in “coding-driven design” and autonomous tool use matches the agentic-development workflows this project itself produces.
- **qwen3.5:122b** is the strongest generalist in the Ollama Pro catalog; `gemma4:31b` is the fallback if multimodal (image/audio) understanding is required for podcast or book visual assets.
- **deepseek-r1:32b** (local) offers deep reasoning and chain-of-thought synthesis. DeepSeek models are **not available on Ollama Pro cloud** — they must be run locally. The 32B quantized variant fits the 16 GB M1 Pro ceiling while outperforming similarly-sized dense models on structured reasoning tasks.

### Local Tier (M1 Pro 16 GB)

| Model | Parameters | Best For |
|-------|-----------|----------|
| `deepseek-r1:32b` | 32B (Q4_K_M quantized) | **The Scholar** — deep reasoning, research synthesis, citation chains. Best local choice for long-document analysis |
| `laguna-xs.2` | 33B total (3B active MoE) | **Local coding companion** — fast, agentic, memory-efficient. Ideal for “vibe coding” sessions without cloud latency |
| `granite4.1` (8B) | 8B | **Structured tasks** — JSON output, RAG, tool use, multilingual. Data pipelines, config generation, automation scripts |
| `qwen3.5` (7B–14B) | 7B–14B | **General local fallback** — quick drafting, summarization, lightweight reasoning when cloud slots are busy |
| `lfm2.5-thinking` (1.2B) | 1.2B | **Ambient intelligence** — ultra-fast tagging, categorization, lightweight on-device decisions |

**Rationale per model:**

- **deepseek-r1:32b** is a distilled reasoning model optimized for chain-of-thought tasks. At 32B parameters with Q4_K_M quantization it occupies ~20 GB on disk but loads ~19 GB into RAM on Apple Silicon — feasible on a 16 GB M1 Pro with some system memory pressure. It is the best local substitute for cloud deep-reasoning models.
- **laguna-xs.2** uses a Mixture-of-Experts architecture (33B parameters, 3B active). It delivers quality comparable to much larger dense models while fitting comfortably in 16 GB RAM. The Ollama catalog explicitly positions it for “agentic coding and long-horizon work on a local machine.”
- **granite4.1** is IBM’s enterprise-focused family. The 8B variant is explicitly designed for “structured JSON output, tool use, and retrieval-augmented generation” — ideal for automation and data tasks where format fidelity matters.
- **qwen3.5** small variants are the best local generalists. The 14B variant runs at reduced context (8K–16K) on this hardware; the 7B variant runs at full context with headroom.
- **lfm2.5-thinking** is a hybrid 1.2B model. Its speed makes it suitable for background tasks: auto-tagging, sentiment scoring, routing decisions.

---

### Interim Scholar Models (When DeepSeek is Unavailable)

When `deepseek-r1:32b` is unavailable — whether due to local RAM pressure, model download issues, or API outage — the academic paper and podcast series workloads require temporary fallback assignments for the **Scholar** role.

| Use Case | Primary Interim | Fallback | Notes |
|----------|----------------|----------|-------|
| Academic paper: deep reasoning & argument synthesis | `qwen3.5:122b` (Cloud Slot 2) | `kimi-k2.6` (Cloud Slot 1) | Temporarily reassign a cloud slot. Qwen has the strongest generalist reasoning; Kimi is acceptable if Qwen is busy. |
| Academic paper: citation chains & bibliography | `granite4.1:8b` (Local) | `qwen3.5:14b` (Local) | Granite excels at structured JSON/tool output — ideal for formatted citations and reference metadata. |
| Academic paper: long-document review | `qwen3.5:122b` (Cloud) | `qwen3.5:14b` (Local, reduced context) | Qwen 122B handles the longest context; local 14B works for documents < 16K tokens. |
| Podcast: episode research synthesis | `qwen3.5:122b` (Cloud Slot 2) | `qwen3.5:14b` (Local) | The Creator slot already handles podcast scripting; promote it to research when DeepSeek is down. |
| Podcast: guest background & fact-checking | `granite4.1:8b` (Local) | `lfm2.5-thinking` (Local) | Granite for structured data extraction; LFM for ultra-fast lightweight verification. |

**Operational guidance:**
- **Cloud reassignment:** Slots are not physically locked. If DeepSeek is unavailable, temporarily route Scholar tasks to Slot 2 (`qwen3.5:122b`). The Creator and Scholar roles overlap significantly on creative-academic work.
- **Local RAM pressure:** If `deepseek-r1:32b` fails to load or causes excessive swap, immediately fall back to `qwen3.5:14b`. It loads with > 4 GB of headroom on M1 Pro 16 GB.
- **API bridge:** If local models are unavailable but internet access exists, the DeepSeek API (`deepseek-reasoner`) remains the best cloud-scale Scholar. This is outside Ollama Pro but costs ~$2–5/mo at moderate volume.

---

## Local DeepSeek Hosting Guide

### Prerequisites

- Ollama installed and running locally (`ollama --version` ≥ 0.5.0 recommended)
- ~20 GB free disk space for the 32B model
- 16 GB unified RAM (M1 Pro) — 32B is the practical ceiling; larger variants will swap heavily

### Step 1: Pull the Model

```bash
# Default tag (usually Q4_0 — fastest, slightly lower quality)
ollama pull deepseek-r1:32b

# Higher quality quantization (recommended for research tasks)
ollama pull deepseek-r1:32b-qwen-distill-q4_k_m
```

> **Note:** Ollama Pro cloud does **not** host DeepSeek. These commands pull to your local machine only.

### Step 2: Verify Installation

```bash
# Check the model is available locally
ollama list | grep deepseek

# Quick smoke test
ollama run deepseek-r1:32b “Summarize the concept of epistemic humility in 3 sentences.”
```

### Step 3: Optimizing for M1 Pro 16 GB

The 32B model will use nearly all available RAM. To avoid system swap:

```bash
# Run with reduced context window (default is often 128K; reduce to 32K or 16K)
ollama run deepseek-r1:32b --ctx-size 32768
```

Or create a custom Modelfile:

```dockerfile
FROM deepseek-r1:32b
PARAMETER num_ctx 32768
SYSTEM You are a research assistant. Think step-by-step and cite sources explicitly.
```

Then build and run:

```bash
ollama create deepseek-scholar -f ./Modelfile
ollama run deepseek-scholar
```

### Step 4: Integration with Claude Code Orchestrator

Since Claude Code cannot natively use Ollama models, bridge them via:

1. **Parallel terminal sessions** — run `ollama run deepseek-r1:32b` in one pane, Claude Code in another. Copy research outputs from DeepSeek into Claude Code context as needed.
2. **Scripted piping** — use `ollama generate` in shell scripts that feed DeepSeek output into Claude Code prompts:
   ```bash
   RESEARCH=$(ollama run deepseek-r1:32b “Analyze: $DOCUMENT”)
   claude “Incorporate this research into the codebase: $RESEARCH”
   ```

### Available Local DeepSeek Variants

| Tag | Size | Best For |
|-----|------|----------|
| `deepseek-r1:1.5b` | ~1.1 GB | Ultra-fast testing, mobile/low-RAM |
| `deepseek-r1:7b` | ~4.7 GB | Quick reasoning, moderate quality |
| `deepseek-r1:14b` | ~9.0 GB | Balanced quality/speed for 16 GB systems |
| `deepseek-r1:32b` | ~19 GB | **Recommended** — best reasoning quality that fits 16 GB RAM |
| `deepseek-r1:70b` | ~43 GB | Requires 32+ GB RAM — not feasible on M1 Pro 16 GB |

> **Cloud alternative:** If local 32B quality is insufficient, use the DeepSeek API directly via `api.deepseek.com` or OpenRouter. This requires a separate API key and is outside the Ollama ecosystem.

### Orchestrator Layer

**Claude Code** (the environment in which this ADR was authored) is treated as the *orchestrator*, not a peer agent. It handles:

- Repository-wide refactoring and multi-file edits
- Project scaffolding and workflow automation
- Complex cross-tool operations (git, testing, deployment)

The Ollama ecosystem fills three gaps the orchestrator does not:

1. **Privacy-sensitive drafting** → local models
2. **High-volume parallel generation** → 3 cloud agents working simultaneously
3. **Specialized deep reasoning** (citation chains, legal/ethical analysis) → `deepseek-r1:32b` (local)

---

## Consequences

### Positive

- **Role clarity.** Each model has a single, well-defined responsibility. This reduces prompt-engineering variance and makes it easy to route tasks (“send this to the Engineer, that to the Scholar”).
- **Privacy by default.** Drafts and early iterations never leave the device unless the user explicitly promotes them to a cloud agent.
- **Throughput.** Three concurrent cloud agents eliminate head-of-line blocking — e.g., a podcast script and a code refactor can proceed in parallel.
- **Memory safety.** The local tier respects the 16 GB ceiling; MoE models provide outsized capability without outsized RAM consumption.

### Negative / follow-up

- **Model churn.** The Ollama catalog updates frequently. This ADR should be reviewed monthly, or after any major model release (e.g., Qwen4, DeepSeek-V5) that could displace a slot assignment.
- **Context-window discipline.** Even `deepseek-r1:32b` at reduced context can tempt dumping entire corpora. Users must still chunk and structure prompts to avoid attention dilution.
- **Slot contention.** If two “Engineer” tasks arrive simultaneously, one must wait or fall back to local `laguna-xs.2`. The 3-slot limit is hard.
- **Warm-up latency.** Cloud models may cold-start. For interactive sessions, local models provide predictable first-token latency.

### Subscription Stack & Economics

The user currently maintains **Ollama Pro** and **Cursor Pro**. The question is whether to replace Cursor Pro with **DeepSeek Pro**.

| Subscription | Monthly Cost (approx.) | What it provides | Overlap with ecosystem |
|-------------|------------------------|------------------|-------------------------|
| **Ollama Pro** | ~$20 | 3 cloud inference slots; local model hosting; curated cloud catalog | Cloud Tier (Slot 1–2), Local Tier hosting |
| **Cursor Pro** | ~$20 | Claude/GPT inside IDE; Composer (multi-file agent); tab completion; 500 fast requests/mo | **Redundant with Claude Code orchestrator** for multi-file editing; unique value is IDE-native UX and autocomplete |
| **DeepSeek Pro** | ~$2–5 (pay-as-you-go) | API access to DeepSeek-V3 and DeepSeek-R1 at very low token cost | Fills the "Scholar" role at scale without local RAM limits; no IDE lock-in |

**Why the swap is worth considering:**

1. **Redundancy.** Claude Code (free CLI, API-key billed) already handles repository-wide refactoring, scaffolding, and multi-file edits — the core value of Cursor Composer. Paying for Cursor Pro essentially rents the same capability through a different shell.
2. **Capacity.** The user reports burning through Cursor's 500 fast requests quickly. DeepSeek Pro is pay-as-you-go with per-token pricing significantly below Anthropic/Claude API rates. For heavy reasoning workloads, it is cheaper to run 10× the volume through DeepSeek API than to stay inside Cursor's limits.
3. **Role fit.** Cursor Pro forces all work through Cursor's IDE and its limited model roster. DeepSeek Pro gives unconstrained API access, so the "Scholar" can be called from scripts, aider, Continue.dev, or direct `curl` — matching the headless, tool-chain philosophy of this dev kit.
4. **What you lose.** Tab completion and IDE-native chat disappear if Cursor is cancelled. Replacements:
   - **Tab completion:** Codeium (free tier), GitHub Copilot, or local `qwen3.5`/`granite4.1` via Continue.dev.
   - **IDE chat:** Continue.dev (VS Code / JetBrains) supports Claude, DeepSeek, and Ollama in one sidebar.

**Recommended stack if the swap happens:**

| Role | Tool | Cost |
|------|------|------|
| Orchestrator | Claude Code (CLI) | API usage only (~$5–15/mo typical) |
| Engineer (cloud) | Ollama Pro Slot 1 (`kimi-k2.6`) | Included in Ollama Pro |
| Creator (cloud) | Ollama Pro Slot 2 (`qwen3.5:122b`) | Included in Ollama Pro |
| Scholar (cloud scale) | DeepSeek API (`deepseek-chat` / `deepseek-reasoner`) | ~$2–5/mo at moderate volume |
| Scholar (local) | `deepseek-r1:32b` via Ollama | Free (local compute) |
| Tab completion | Codeium or local `qwen3.5:7b` | Free |

> **Decision:** This ADR does not mandate the swap, but flags it as a high-ROI option. If Cursor fast-request burnout continues, cancelling Cursor Pro and routing the budget to DeepSeek Pro + Continue.dev removes a redundant subscription and adds unconstrained Scholar capacity.

### Migration / Onboarding

```bash
# Pull the local tier
ollama pull deepseek-r1:32b
ollama pull laguna-xs.2
ollama pull granite4.1:8b
ollama pull qwen3.5:14b
ollama pull lfm2.5-thinking

# Quick smoke tests
ollama run deepseek-r1:32b "Explain the prisoner's dilemma in game theory."
ollama run laguna-xs.2 "Write a Python function that recursively flattens a nested list."
```

Cloud models are pulled on-demand via Ollama Pro; no local action required.

---

## Status

**✅ Decided** — Ecosystem design accepted and documented.

**⏳ Rollout** — Local model pulls and cloud slot assignments are manual; optional automation (e.g., `justfile` or shell script) is a future convenience, not a requirement.

---

## References

- [Ollama Search / Model Catalog](https://ollama.com/search) — canonical source of model capabilities and parameter counts
- [FR-089] — Future feature request: automated model-pull script for new dev-kit installations
- [ADR-003: Greenfield vs Brownfield Adoption](ADR-003-greenfield-vs-brownfield-adoption.md) — brownfield adopters may choose a subset of this ecosystem
