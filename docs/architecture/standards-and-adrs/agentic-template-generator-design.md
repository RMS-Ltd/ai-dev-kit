---
lifecycle: evergreen
ttl_days: null
created_at: 2025-12-22T11:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Agentic Template Generator Design

**Status:** IMPLEMENTED  
**Epic:** E4 (Kanban Framework)  
**Story:** S15 (Procedural Task Template Generation and Hybrid Strategy)  
**Task:** Agentic Generation Enhancement  
**Related:** E4:S15, FR-029

---

## Overview

The agentic template generator enhances the procedural template generator with AI/LLM capabilities to generate rich, contextual templates for Epics, Stories, and Tasks. It uses AI to understand context and generate high-quality content while maintaining a procedural fallback for reliability.

---

## Design Goals

1. **Rich Content Generation:** Use AI to generate contextual, high-quality template content
2. **Reliability:** Maintain procedural fallback for when LLM is unavailable
3. **Flexibility:** Support multiple LLM providers (OpenAI, Anthropic, local)
4. **Completeness:** Generate Epic, Story, and Task templates
5. **Context-Aware:** Use Epic/Story/Task hierarchy for better content

---

## Architecture

### Components

**1. LLMClient**
- Abstraction layer for different LLM providers
- Supports OpenAI, Anthropic, and local models
- Handles API calls, error handling, and fallback

**2. AgenticTemplateGenerator**
- Main generator class
- Orchestrates template generation
- Integrates LLM and procedural generation

**3. Template Generation Methods**
- `generate_epic_template()` - Epic template generation
- `generate_story_template()` - Story template generation
- `generate_task_template()` - Task template generation

**4. Content Generation Strategies**
- **Agentic:** Uses LLM to generate rich content
- **Procedural:** Fallback with basic template filling

---

## Generation Flow

```
┌─────────────────────────────────────┐
│  Parse Structure Document           │
│  (COMPREHENSIVE_CANONICAL_EST...)   │
└──────────────┬──────────────────────┘
               │
               ▼
┌─────────────────────────────────────┐
│  Load Template Structure             │
│  (EPIC_TEMPLATE.md, etc.)           │
└──────────────┬──────────────────────┘
               │
               ▼
┌─────────────────────────────────────┐
│  Build Context                       │
│  (Epic/Story/Task data)              │
└──────────────┬──────────────────────┘
               │
               ▼
┌─────────────────────────────────────┐
│  Try LLM Generation                  │
│  (if LLM available)                  │
└──────────────┬──────────────────────┘
               │
        ┌──────┴──────┐
        │             │
        ▼             ▼
   Success?      Failed/None?
        │             │
        │             ▼
        │    ┌────────────────────┐
        │    │ Procedural         │
        │    │ Fallback           │
        │    └────────────────────┘
        │             │
        └──────┬───────┘
               │
               ▼
┌─────────────────────────────────────┐
│  Post-Process Template               │
│  (Replace placeholders, format)      │
└──────────────┬──────────────────────┘
               │
               ▼
┌─────────────────────────────────────┐
│  Write Template File                 │
│  (or dry-run output)                │
└─────────────────────────────────────┘
```

---

## LLM Integration

### Provider Support

**OpenAI:**
- Package: `openai`
- API Key: `OPENAI_API_KEY` env var
- Models: `gpt-4`, `gpt-3.5-turbo`, etc.

**Anthropic:**
- Package: `anthropic`
- API Key: `ANTHROPIC_API_KEY` env var
- Models: `claude-3-opus`, `claude-3-sonnet`, etc.

**Local:**
- Placeholder for local model integration
- Future enhancement

**None:**
- Procedural fallback only
- No LLM required

### Prompt Design

**Epic Template Prompt:**
```
Generate a comprehensive Epic template for:
Epic {N}: {Name}

Stories in this Epic:
- Story 1: {Name}
- Story 2: {Name}
...

Generate:
1. Overview: One paragraph describing the epic's purpose, scope, and motivation
2. Goals: 3-5 high-level goals for this epic
3. Story summaries: Brief 1-2 sentence summaries for each story
```

**Story Template Prompt:**
```
Generate a comprehensive Story template for:
Epic {N}: {Epic Name}
Story {N}: {Story Name}

Tasks in this Story:
- Task 1: {Description}
- Task 2: {Description}
...

Generate:
1. Overview: One sentence describing what this story accomplishes
2. Goals: 3-5 goals for this story
3. Task summaries: Brief summaries for each task
```

**Task Template Prompt:**
```
Generate a comprehensive Task template for:
Epic {N}: {Epic Name}
Story {N}: {Story Name}
Task {N}: {Task Description}

Generate:
1. Scope: Clear description of what this task accomplishes
2. Input: What is required to start this task
3. Deliverable: What is produced by this task
4. Acceptance Criteria: 3-5 measurable, testable criteria
5. Approach: Step-by-step approach (5-7 steps)
```

---

## Post-Processing

After LLM generation, templates are post-processed to:

1. **Replace Placeholders:** Ensure `\{PROJECT_NAME\}`, `\{PROJECT_TYPE\}` are preserved
2. **Format Task IDs:** Ensure proper `E\{epic\}:S\{story\}:T\{task\}` format
3. **Add Frontmatter:** Ensure proper YAML frontmatter
4. **Validate Structure:** Ensure template structure matches expected format

---

## Error Handling

**LLM Failures:**
- Gracefully fall back to procedural generation
- Log warnings but continue execution
- No blocking errors

**Template Generation Failures:**
- Report errors in result object
- Continue with other templates
- Provide detailed error messages

**File System Errors:**
- Handle missing directories
- Handle permission errors
- Provide clear error messages

---

## Usage Patterns

### With LLM (Recommended)

```bash
# Generate Epic template with OpenAI
python3 agentic_template_generator.py \
  --type epic \
  --epic 1 \
  --provider openai \
  --model gpt-4

# Generate all templates with Anthropic
python3 agentic_template_generator.py \
  --type all \
  --provider anthropic \
  --model claude-3-opus \
  --dry-run
```

### Without LLM (Fallback)

```bash
# Procedural generation (no LLM)
python3 agentic_template_generator.py \
  --type task \
  --epic 1 \
  --story 1 \
  --task 1
```

---

## Comparison: Procedural vs Agentic

| Aspect | Procedural | Agentic |
|--------|-----------|---------|
| **Content Quality** | Basic, generic | Rich, contextual |
| **Context Awareness** | Limited | High |
| **Dependencies** | None | LLM API required |
| **Cost** | Free | API costs |
| **Speed** | Fast | Slower (API calls) |
| **Reliability** | High | Medium (API dependent) |
| **Fallback** | N/A | Procedural |

---

## Future Enhancements

1. **Local Model Support:** Integrate local LLM models (Ollama, etc.)
2. **Caching:** Cache LLM responses for repeated generations
3. **Batch Processing:** Optimize API calls with batching
4. **Template Refinement:** Use concrete templates as examples for few-shot learning
5. **Quality Validation:** Compare agentic vs procedural output quality
6. **Cost Optimization:** Track and optimize API usage

---

## Related Documentation

- **Procedural Generator:** `generate_task_templates.py`
- **Hybrid Strategy ADR:** `task-template-system-hybrid-adr.md`
- **Generator Design:** `task-template-generator-design.md`
- **FR-029:** Procedural Task Template Generation (Hybrid Strategy)
- **E4:S15:** Procedural Task Template Generation and Hybrid Strategy

---

_This design document is part of Epic 4 Story 15. See `Story-015-procedural-task-template-generation-and-hybrid-strategy.md` for complete story context._

