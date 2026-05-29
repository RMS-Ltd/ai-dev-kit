# Implementation Cycle Workflow (ICW)

## Consolidation with IPW (FR-042)

**Canonical planning trigger:** **`IPW`** (Implementation Planning Workflow). **`ICW`** is a **deprecated alias** — same planning behavior and artifact wiring contract. Product requirements and wiring rules live in **FR-042**; agent execution guide: `packages/frameworks/workflow mgt/KB/Documentation/Developer_Docs/vwmp/implementation-planning-workflow-agent-execution.md`. This package keeps `icw-workflow.yaml`, `icw_handler.py`, and templates for backward compatibility; new documentation should say **IPW** first.

---


## Overview

The packaged workflow (historically **ICW**) provides a structured planning approach before coding:

1. **Ascertain Requirements**
2. **Specification Definition**
3. **Test Design**
4. **Implementation Planning**

For TDD and release, use the **Implementation Cycle SoP** and **RW** separately.

## 🎯 Purpose

To provide structured planning, specification, test design, and implementation planning before any coding begins. ICW ensures that every task has a traceable, repo-local planning artifact that teams and agents can discover without opening IDE-only directories.

## 🚨 Prerequisites

### Framework Requirements
- AI Dev Kit workflow management framework installed
- Planning mode capability in your IDE or agent environment
- Access to ICW templates and configuration files

### Setup Requirements
- Set `PLANNING_MODE=true` environment variable
- Verify ICW config file exists in expected location
- Prepare project context and requirements beforehand

## 🚨 Critical Requirement: Planning Mode Only

**ICW MUST be executed in PLANNING MODE for proper operation.**

### Why Planning Mode is Required

ICW is designed as an **intelligent agent-driven workflow** that requires:

- Interactive questioning and guidance
- Adaptive decision-making based on user input
- Context-aware analysis and recommendations
- Real-time validation and quality assurance

### Mode Detection

ICW automatically detects execution mode and will **CANCEL** if not in planning mode:

- **Planning Mode:** ✅ ALLOWED - Required for intelligent agent guidance
- **Implementation Mode:** 🚫 BLOCKED - Bypasses intelligent agent guidance
- **Unknown Mode:** 🚫 BLOCKED - Requires explicit planning mode

### Setting Planning Mode

```bash
# Method 1: Environment variable
export PLANNING_MODE=true

# Method 2: Inline with command
PLANNING_MODE=true python icw_handler.py

# Method 3: Use the intelligent agent interface
# Type "ICW" in the IDE when in planning mode
```


## ⚡ Quick Start

### Basic Usage
```bash
# Ensure planning mode is active
export PLANNING_MODE=true

# Trigger ICW in the IDE
ICW
```

### Expected Outcome
- Guided three-phase planning process
- Generated specification, test design, and implementation plan
- Bidirectional links to kanban task document


## 📋 Usage Examples

### Example 1: Phase-Based Planning
## Planning Workflow Phases

### Phase 0: Ascertain Requirements

- Consolidate **functional requirements** from task, BR/FR context, and acceptance criteria
- Consolidate **non-functional requirements** (constraints/quality attributes) from the same sources
- Confirm invariant expectations and out-of-scope boundaries
- Produce a testable requirement baseline before specification drafting

### Phase 1: Specification Definition

- Problem analysis and requirements gathering
- Stakeholder identification and constraints analysis
- Acceptance criteria and quality gates definition
- Scope and boundaries clarification

### Phase 2: Test Design

- Comprehensive test strategy development
- Unit, integration, and system test design
- Test data and environment requirements
- Quality assurance and validation planning

### Phase 3: Implementation Planning

- Architecture and design documentation
- Development tasks and dependency analysis
- Resource requirements and timeline planning
- Risk management and success metrics


## 🔧 Advanced Usage

### Durable Planning Artifacts

ICW is responsible not only for **thinking** in three phases, but for leaving a **traceable, repo-local package** that teams and agents can find without opening an IDE-only plans directory.

- **Write outputs** to the configured **`output_dir`** (default in `icw-workflow.yaml`: `docs/implementation-cycles/`).
- **Name files predictably** (e.g. `ICW-E{epic}S{story}T{task}-specification.md` and siblings for test design + implementation plan) so inventory is grep-friendly.
- **Link bidirectionally:** Each ICW file should cite the **Kanban task id**; the **task document** should list **Planning artifacts** paths under `docs/implementation-cycles/`.
- **Do not** treat scratch plans under editor-local folders as the system of record once work is task-funded.

**Reference policy (ai-dev-kit):** `docs/architecture/standards-and-adrs/specification-and-planning-artifacts-policy.md`  
**Folder guide:** `docs/implementation-cycles/README.md`

## Configuration

### ICW Configuration (`icw-config.yaml`)

- **Templates:** Location of phase-specific templates
- **Paths:** Output directories and file locations
- **Validation:** Rules and requirements for each phase
- **Integration:** Kanban and workflow system settings

### Template System

Each phase uses structured templates:

- **Specification Template:** Problem definition and requirements
- **Test Design Template:** Comprehensive test planning
- **Implementation Plan Template:** Detailed implementation roadmap


## 🔗 Integration

### Workflow Dependencies
- **Required:** Kanban system with task documents
- **Optional:** Release Workflow (RW) for post-implementation releases
- **Enhanced by:** Testing Workflow (test-driven development)

### Data Flow
```
Task Document → ICW Planning → Artifacts → Implementation → Validation
```


### Generated Documents

ICW generates a complete implementation package:

- **Specification Document:** Detailed requirements and analysis
- **Test Design Document:** Comprehensive test strategy
- **Implementation Plan:** Detailed execution roadmap
- **Package Summary:** Complete package overview and status

### Integration

- **Kanban System:** Automatic task creation and status updates
- **Workflow Registry:** Integration with workflow management
- **Documentation:** Structured output in standard locations

## Error Handling

### Mode Validation Errors

If ICW detects wrong execution mode:

```text
🚫 ERROR: ICW detected IMPLEMENTATION MODE
🚫 ICW requires PLANNING MODE for proper intelligent agent guidance
🚫 Implementation mode bypasses the intelligent agent guidance that ICW provides
🚫 Please switch to planning mode to execute ICW properly

💡 To fix this:
   1. Set PLANNING_MODE=true environment variable
   2. Or run from a planning context
   3. Or use planning-specific execution method
```

### Configuration Errors

- Missing configuration files
- Invalid template paths
- Permission issues
- Resource constraints

## Testing

### Plan Mode Detection Tests

```bash
# Test mode detection and validation
python packages/frameworks/workflow\ mgt/scripts/icw/test_plan_mode_detection.py
```

### ICW Handler Tests

```bash
# Test complete ICW functionality
python packages/frameworks/workflow\ mgt/scripts/icw/test_icw.py
```

## Architecture

### Components

- **ICW Handler:** Main workflow orchestration
- **Template Processor:** Document generation and validation
- **Mode Detector:** Execution mode validation
- **Integration Layer:** Kanban and workflow system integration

### Design Principles

- **Intelligent Agent First:** Designed for AI-guided execution
- **Planning Mode Only:** Requires planning context for proper operation
- **Structured Output:** Consistent, high-quality documentation
- **Quality Assurance:** Built-in validation and error checking


## 📚 Reference

### CLI Commands
```bash
# Intelligent agent interface
ICW

# Direct script interface
python packages/frameworks/workflow\ mgt/scripts/icw/icw_handler.py [command] [options]
```

### Configuration Reference
See `icw-config.yaml` and `icw-workflow.yaml` for complete configuration options.

### Step-by-Step Execution
1. **Ensure planning mode** — Set `PLANNING_MODE=true`
2. **Trigger ICW** — Type `ICW` in the IDE
3. **Answer agent questions** — Provide context and requirements
4. **Review outputs** — Validate specification, test design, and plan
5. **Link artifacts** — Add paths to task document

## Troubleshooting

### Common Issues

1. **ICW cancels immediately**
   - Check: `PLANNING_MODE=true` environment variable
   - Verify: Not running in implementation mode

2. **Configuration not found**
   - Check: ICW config file exists in expected location
   - Verify: Template paths are accessible

3. **Template processing fails**
   - Check: Template files exist and are readable
   - Verify: Template syntax is valid

### Getting Help

1. **Check mode:** Ensure planning mode is active
2. **Verify configuration:** Check ICW config file
3. **Test detection:** Run plan mode detection tests
4. **Review logs:** Check error messages for specific guidance


## ❓ FAQ

### Q: Why does ICW cancel immediately?
**A:** ICW requires planning mode. Set `PLANNING_MODE=true` or trigger from a planning context.

### Q: Can I run ICW in implementation mode?
**A:** No. ICW is designed for planning only; use Implementation Cycle SoP or RW for implementation-phase tasks.

### Q: Where are planning artifacts stored?
**A:** Default is `docs/implementation-cycles/`. Configure via `icw-workflow.yaml`.

## Best Practices

### Planning Mode Setup

- Always set `PLANNING_MODE=true` before starting ICW
- Use intelligent agent interface for best experience
- Prepare project context and requirements beforehand

### Workflow Execution

- Answer all agent questions completely
- Review each phase output before proceeding
- Validate quality and completeness at each step
- Use generated documents for implementation guidance

### Integration Usage

- Let ICW handle kanban integration automatically
- Use structured output for team coordination
- Maintain consistent documentation practices


## 🔄 Version Compatibility

| Workflow Version | Framework Version | Notes |
|------------------|-------------------|-------|
| 1.0.0 | v0.4.14.3+ | Initial release with planning mode support |

## 📞 Support

### Getting Help
- **Documentation**: [IPW Agent Execution Guide](../../KB/Documentation/Developer_Docs/vwmp/implementation-planning-workflow-agent-execution.md)
- **Community**: [AI Dev Kit Discussions](https://github.com/earlution/ai-dev-kit/discussions)
- **Issues**: [File an issue](https://github.com/earlution/ai-dev-kit/issues)

### Contributing
Follow the AI Dev Kit contributing guidelines for workflow documentation updates.

## 📊 Workflow Metadata

- **Type**: planning
- **Abbreviation**: ICW (deprecated alias for IPW)
- **Triggers**: ["IPW", "ICW"]
- **Steps**: 8
- **Dependencies**: Kanban system
- **Configuration**: `icw-config.yaml`, `icw-workflow.yaml`

**Last Updated**: 2026-05-15
**Framework Version**: v0.5.1.35+
**Maintainer**: AI Dev Kit Team
