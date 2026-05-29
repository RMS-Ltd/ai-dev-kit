---
name: fr-br-uxr-completed-update
description: Maintain and update fbu-completed.md with FR/BR/UXR completion timestamps
---

## Purpose

Maintain and update `fbu-completed.md` with completion timestamps, recent FR/BR/UXR items dashboard, and consistent formatting. This skill provides the standard interface for all agents to update completed FR/BR/UXR information with temporal tracking.

---

## Primary Responsibilities

### **Document Maintenance**
- Update fbu-completed.md with FR/BR/UXR completion information
- Maintain completion timestamps in ISO 8601 format
- Update "20 Most Recently Completed FR/BR/UXR Items" dashboard
- Ensure consistent formatting across all FR/BR/UXR entries

### **Agent Coordination**
- Provide standard update interface for other agents
- Validate timestamp format and consistency
- Handle recent FR/BR/UXR items dashboard updates
- Maintain document integrity and structure

### **Validation and Quality**
- Validate FR/BR/UXR completion information
- Ensure proper timestamp formatting
- Check for duplicate entries
- Maintain backward compatibility during transition
- Cross-reference integrity with associated tasks

---

## Update Interface

### **Standard Update Method**
```python
Documentation Agent.fr_br_uxr_completed_update({
  fr_br_uxr_id: "FR-048",
  type: "FR",
  status: "COMPLETE", 
  version: "v0.5.1.48+1",
  timestamp: "2026-03-11T16:20:00Z",
  completing_agent: "Intake Agent"
})
```

### **Parameters**
- **fr_br_uxr_id:** Unique identifier (FR-XXX, BR-XXX, UXR-XXX)
- **type:** FR, BR, or UXR
- **status:** COMPLETE, IN PROGRESS, or TODO
- **version:** Version implementing the FR/BR/UXR
- **timestamp:** ISO 8601 completion timestamp
- **completing_agent:** Agent that completed the FR/BR/UXR

---

## Implementation Details

### **Temporal Tracking**
- All FR/BR/UXR completions must include ISO 8601 timestamps
- Format: `YYYY-MM-DDTHH:MM:SSZ`
- Historical completions get estimated timestamps based on creation dates
- New completions get actual completion timestamps

### **Dashboard Management**
- Maintain "20 Most Recently Completed FR/BR/UXR Items" dashboard
- Auto-sort by completion time (most recent first)
- Include: ID, Type, Description, Completed, Version, Agent
- Update dashboard when new completions are added

### **Cross-Reference Validation**
- Validate FR/BR/UXR references to associated tasks
- Ensure version consistency across documentation
- Check link integrity and validity
- Maintain relationship mapping between FR/BR/UXR and tasks

---

## Integration Points

### **UKW Agent Integration**
- Called by UKW Agent during FR/BR/UXR board cleanup
- Provides FR/BR/UXR completion status for board synchronization
- Receives FR/BR/UXR completion data from task analysis

### **Intake Agent Integration**
- Receives FR/BR/UXR completion notifications from Intake Agent
- Updates FR/BR/UXR status when associated tasks complete
- Maintains FR/BR/UXR to task relationship mapping

### **RW Agent Integration**
- Updates FR/BR/UXR completion during release workflows
- Maintains version consistency for FR/BR/UXR implementations
- Provides FR/BR/UXR status for release documentation
