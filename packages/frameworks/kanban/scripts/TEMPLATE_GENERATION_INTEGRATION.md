---
lifecycle: evergreen
ttl_days: null
created_at: 2025-12-22T11:30:00Z
expires_at: null
housekeeping_policy: keep
---

# Template Generation Integration Guide

**Status:** IMPLEMENTED  
**Epic:** E4 (Kanban Framework)  
**Story:** S15 (Procedural Task Template Generation and Hybrid Strategy)

---

## Overview

The Kanban framework now supports **agentic template generation** throughout all template-related processes. This document describes how the agentic generator has been integrated into existing workflows.

---

## Integrated Processes

### 1. Task Template Generator (`generate_task_templates.py`)

**Integration:** Optional agentic generation support added

**Usage:**
```bash
# Procedural generation (default)
python3 scripts/generate_task_templates.py --epic 1

# Agentic generation with OpenAI
python3 scripts/generate_task_templates.py --epic 1 --agentic --agentic-provider openai

# Agentic generation with Anthropic
python3 scripts/generate_task_templates.py --epic 1 --agentic --agentic-provider anthropic --agentic-model claude-3-opus
```

**Behavior:**
- If `--agentic` flag is set, attempts to use agentic generator
- Falls back to procedural generation if agentic generator unavailable
- Automatically handles errors and fallback

**New Arguments:**
- `--agentic` - Enable agentic generation
- `--agentic-provider` - LLM provider (openai, anthropic, local, none)
- `--agentic-model` - Model name (default: gpt-4)
- `--agentic-api-key` - API key (or use env vars)

---

### 2. Task Creator (`task_creator.py`)

**Integration:** Optional agentic support for task creation

**Usage:**
```python
from task_creator import TaskCreator

# Procedural task creation (default)
creator = TaskCreator(kanban_path, framework_path)

# Agentic task creation
creator = TaskCreator(
    kanban_path,
    framework_path,
    use_agentic=True,
    agentic_provider="openai"
)
```

**Behavior:**
- If `use_agentic=True`, uses agentic generator for richer task content
- Falls back to procedural if agentic unavailable
- Integrates with FR/BR analysis workflow

---

### 3. Agentic Task Workflow (`agentic_task_workflow.py`)

**Integration:** Environment variable support for agentic task creation

**Usage:**
```bash
# Enable agentic task creation via environment variables
export USE_AGENTIC_TASK_CREATION=true
export AGENTIC_PROVIDER=openai
python3 scripts/agentic_task_workflow.py ...
```

**Behavior:**
- Reads `USE_AGENTIC_TASK_CREATION` env var
- Reads `AGENTIC_PROVIDER` env var
- Automatically configures TaskCreator with agentic support

---

### 4. Standalone Agentic Generator (`agentic_template_generator.py`)

**Integration:** New standalone tool for Epic/Story/Task template generation

**Usage:**
```bash
# Generate Epic template
python3 scripts/agentic_template_generator.py --type epic --epic 1 --provider openai

# Generate Story template
python3 scripts/agentic_template_generator.py --type story --epic 1 --story 1 --provider openai

# Generate Task template
python3 scripts/agentic_template_generator.py --type task --epic 1 --story 1 --task 1 --provider openai

# Generate all templates
python3 scripts/agentic_template_generator.py --type all --provider openai --dry-run
```

**Features:**
- Generates Epic, Story, and Task templates
- Supports multiple LLM providers
- Procedural fallback when LLM unavailable
- Batch generation support

---

## Configuration

### Environment Variables

```bash
# Enable agentic task creation
export USE_AGENTIC_TASK_CREATION=true

# Set LLM provider
export AGENTIC_PROVIDER=openai  # or anthropic

# Set API keys
export OPENAI_API_KEY=your_key_here
export ANTHROPIC_API_KEY=your_key_here
```

### Programmatic Configuration

```python
# Task Creator
creator = TaskCreator(
    kanban_path,
    framework_path,
    use_agentic=True,
    agentic_provider="openai",
    agentic_config={
        "model": "gpt-4",
        "api_key": "your_key"
    }
)

# Template Generator
generator = TaskTemplateGenerator(
    structure_file=structure_file,
    template_file=template_file,
    output_dir=output_dir,
    use_agentic=True,
    agentic_provider="openai",
    agentic_config={"model": "gpt-4"}
)
```

---

## Fallback Behavior

All integrated processes follow a **graceful degradation** pattern:

1. **Try Agentic:** Attempt to use agentic generator if enabled
2. **Handle Errors:** Catch and log any errors
3. **Fallback:** Automatically fall back to procedural generation
4. **Continue:** Process continues without blocking

**Example:**
```python
# If agentic fails, automatically falls back to procedural
try:
    result = agentic_generator.generate_task_template(...)
    if result.success:
        content = result.generated_content
    else:
        # Fallback
        content = procedural_generator.generate_task_content(...)
except Exception as e:
    # Fallback
    content = procedural_generator.generate_task_content(...)
```

---

## Benefits

### For Framework Maintainers

- **Optional Enhancement:** Can use agentic generation when available
- **Backward Compatible:** Existing workflows continue to work
- **Quality Improvement:** Richer templates when LLM available

### For Adopting Projects

- **Flexibility:** Choose procedural or agentic generation
- **No Dependencies:** Works without LLM (procedural fallback)
- **Enhanced Quality:** Optional richer templates with LLM

---

## Migration Guide

### Existing Workflows

**No changes required** - existing workflows continue to work with procedural generation.

### Enabling Agentic Generation

**Option 1: Command-line flags**
```bash
python3 scripts/generate_task_templates.py --agentic --agentic-provider openai
```

**Option 2: Environment variables**
```bash
export USE_AGENTIC_TASK_CREATION=true
export AGENTIC_PROVIDER=openai
```

**Option 3: Programmatic**
```python
creator = TaskCreator(..., use_agentic=True, agentic_provider="openai")
```

---

## Related Documentation

- **Agentic Generator Design:** `docs/architecture/standards-and-adrs/agentic-template-generator-design.md`
- **Hybrid Strategy ADR:** `docs/architecture/standards-and-adrs/task-template-system-hybrid-adr.md`
- **Scripts README:** `packages/frameworks/kanban/scripts/README.md`
- **Kanban README:** `packages/frameworks/kanban/README.md`

---

_This integration guide is part of Epic 4 Story 15. See `Story-015-procedural-task-template-generation-and-hybrid-strategy.md` for complete story context._

