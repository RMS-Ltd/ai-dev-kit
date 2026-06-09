# Project Manager Coordination Skill (Archived)

**Archived:** 2026-03-18 – From `.windsurf/skills/project-manager-coordination/`. No workflow (T10-T16) claimed this skill; T14 and T16 marked it out of scope. Preserved for future multi-agent coordination work.

---

# Project Manager Coordination Skill

**Purpose:** Multi-agent coordination and oversight for parallel ICW workflows with comprehensive decision logging and rollback capabilities.

**Agent Role:** Project Manager Agent - Central coordination authority for multi-agent workflows

---

## Primary Responsibilities

### 1. Multi-Agent Coordination
- Coordinate parallel ICW instances across multiple tasks
- Manage agent communication protocols
- Resolve inter-agent conflicts
- Optimize resource allocation

### 2. Decision Management
- Capture all decisions in structured decision trees
- Document rationale and alternatives considered
- Maintain decision audit trails
- Enable rollback procedures

### 3. Workflow Oversight
- Monitor ICW execution progress
- Validate checkpoint completion
- Trigger rollback procedures when needed
- Ensure quality standards

### 4. Risk Management
- Identify and assess execution risks
- Implement mitigation strategies
- Monitor for rollback triggers
- Execute contingency procedures

---

## Core Capabilities

### Dependency Analysis
```python
def analyze_task_dependencies(tasks):
    """
    Analyze dependencies between tasks and identify potential conflicts.
    
    Args:
        tasks: List of task IDs to analyze
        
    Returns:
        Dependency graph with conflict identification
    """
    # Implementation for dependency analysis
    pass
```

### Resource Allocation
```python
def allocate_resources(task_requirements, available_resources):
    """
    Allocate computational and project resources to parallel ICW instances.
    
    Args:
        task_requirements: Resource needs per task
        available_resources: Total available resources
        
    Returns:
        Resource allocation plan with conflict resolution
    """
    # Implementation for resource allocation
    pass
```

### Decision Logging
```python
def log_decision(decision_data):
    """
    Log decision with complete context and rationale.
    
    Args:
        decision_data: Decision context, options, rationale, impact
        
    Returns:
        Decision ID and rollback implications
    """
    # Implementation for decision logging
    pass
```

### Rollback Management
```python
def execute_rollback(rollback_point, scope):
    """
    Execute rollback procedures with data restoration.
    
    Args:
        rollback_point: Identified rollback point from decision log
        scope: Task-level, phase-level, or full rollback
        
    Returns:
        Rollback success status and validation results
    """
    # Implementation for rollback execution
    pass
```

---

## Decision Tree Structure

### Decision Log Format
```yaml
decision_id: "PM-DEC-{timestamp}-{sequence}"
timestamp: "2026-03-12T10:30:00Z"
agent_role: "Project_Manager"
task_context: "E5:S01:T46-Specification"
decision_type: "resource_allocation"
decision_data:
  options_evaluated:
    - "sequential_execution"
    - "parallel_execution"
    - "hybrid_approach"
  selected_option: "parallel_execution"
  rationale: "Optimizes total execution time while managing resource conflicts"
  impact_assessment:
    positive: ["reduced_timeline", "resource_optimization"]
    negative: ["increased_coordination_complexity"]
    risks: ["resource_conflicts", "communication_overhead"]
  alternatives_considered:
    - option: "sequential_execution"
      reason_rejected: "excessive_total_execution_time"
    - option: "hybrid_approach"
      reason_rejected: "implementation_complexity"
rollback_implications:
  rollback_points: ["pre_parallel_execution", "post_specification_phase"]
  rollback_procedures: ["resource_reallocation", "sequential_fallback"]
  data_backup_locations: ["decision_logs", "resource_snapshots"]
```

---

## Communication Protocols

### Agent Message Format
```python
{
    "message_id": "MSG-{timestamp}-{agent}-{sequence}",
    "sender": "Project_Manager",
    "recipient": "ICW_E5S01T46",
    "message_type": "coordination_request",
    "priority": "high",
    "content": {
        "action": "resource_allocation_update",
        "parameters": {...},
        "deadline": "2026-03-12T11:00:00Z"
    },
    "requires_response": true,
    "response_deadline": "2026-03-12T10:45:00Z"
}
```

### Coordination Checkpoints
1. **Pre-Execution Checkpoint**: Agent readiness validation
2. **Specification Checkpoint**: Cross-task conflict review
3. **Test Design Checkpoint**: Integration test coordination
4. **Implementation Checkpoint**: Final conflict resolution
5. **Completion Checkpoint**: Success validation and cleanup

---

## Rollback Infrastructure

### Rollback Triggers
```python
rollback_triggers = {
    "automatic": [
        "critical_validation_failure",
        "resource_conflict_unresolved",
        "agent_communication_breakdown",
        "integration_test_failure"
    ],
    "manual": [
        "project_manager_decision",
        "user_intervention",
        "external_dependency_failure"
    ]
}
```

### Rollback Procedures
```python
rollback_procedures = {
    "task_level": {
        "scope": "single_ICW_instance",
        "actions": ["restore_task_state", "reallocate_resources"],
        "estimated_time": "5-10 minutes"
    },
    "phase_level": {
        "scope": "all_tasks_to_phase",
        "actions": ["phase_state_restore", "resource_reallocation"],
        "estimated_time": "15-30 minutes"
    },
    "full_rollback": {
        "scope": "complete_workflow_reset",
        "actions": ["full_state_restore", "resource_cleanup"],
        "estimated_time": "30-45 minutes"
    }
}
```

---

## Integration Points

### ICW Workflow Integration
- **Specification Phase**: Resource allocation and conflict monitoring
- **Test Design Phase**: Integration test coordination
- **Implementation Phase**: Real-time conflict resolution

### Agent Communication Integration
- **Message Passing**: Structured agent communication
- **State Synchronization**: Real-time status updates
- **Decision Broadcasting**: Decision distribution to all agents

### Kanban Integration
- **Status Updates**: Real-time kanban board updates
- **Progress Tracking**: Task completion monitoring
- **Completion Validation**: Final status verification
