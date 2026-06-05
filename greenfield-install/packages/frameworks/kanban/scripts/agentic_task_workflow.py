#!/usr/bin/env python3
"""
Agentic Task Creation Workflow

Main workflow orchestrator that integrates FR/BR intake with agentic task creation.
This workflow analyzes FR/BR documents, maps them to epics/stories, and creates
Kanban tasks automatically.

Part of Epic 4, Story 10, Task 5: Integrate with FR/BR intake workflow.

Usage:
    from agentic_task_workflow import AgenticTaskWorkflow
    
    workflow = AgenticTaskWorkflow(kanban_path, framework_path)
    result = workflow.process_fr_br(fr_br_path)
"""

import json
from pathlib import Path
from typing import Dict, List, Optional, Tuple
from dataclasses import dataclass, asdict

from fr_br_analyzer import FRBRAnalyzer, FRBRAnalysis
from epic_story_mapper import EpicStoryMapper, EpicStoryMapping
from task_creator import TaskCreator, TaskStructure, CreatedTask
from agentic_mapper import AgenticTaskMapper


@dataclass
class WorkflowResult:
    """Result of the agentic task creation workflow."""
    success: bool
    fr_br_analysis: Optional[FRBRAnalysis]
    epic_story_mapping: Optional[EpicStoryMapping]
    created_tasks: List[CreatedTask]
    task_structure: Optional[TaskStructure]
    errors: List[str]
    warnings: List[str]
    explanation: str
    reasoning: Dict[str, str]  # Step-by-step reasoning
    confidence_scores: Dict[str, float]  # Confidence scores for decisions


class AgenticTaskWorkflow:
    """Main workflow for agentic task creation from FR/BR."""
    
    def __init__(self, kanban_path: Path, framework_path: Path):
        """
        Initialize the agentic task workflow.
        
        Args:
            kanban_path: Path to project's Kanban structure
            framework_path: Path to Kanban framework
        """
        self.kanban_path = Path(kanban_path)
        self.framework_path = Path(framework_path)
        
        # Initialize components
        self.analyzer = FRBRAnalyzer()
        self.mapper = EpicStoryMapper(kanban_path, framework_path)
        
        # Initialize task creator with optional agentic support
        use_agentic = os.getenv("USE_AGENTIC_TASK_CREATION", "false").lower() == "true"
        agentic_provider = os.getenv("AGENTIC_PROVIDER", None)
        self.creator = TaskCreator(
            kanban_path,
            framework_path,
            use_agentic=use_agentic,
            agentic_provider=agentic_provider
        )
        self.agentic_mapper = None  # Will be initialized when needed
    
    def process_fr_br(
        self,
        fr_br_path: Path,
        existing_epics: Optional[List[Dict]] = None,
        existing_stories: Optional[List[Dict]] = None,
        auto_create: bool = True
    ) -> WorkflowResult:
        """
        Process an FR/BR document and create tasks.
        
        Args:
            fr_br_path: Path to FR/BR document
            existing_epics: Optional list of existing project epics
            existing_stories: Optional list of existing project stories
            auto_create: If True, automatically create tasks. If False, return plan only.
        
        Returns:
            WorkflowResult with analysis, mapping, and created tasks
        """
        errors = []
        warnings = []
        explanation_parts = []
        reasoning = {}
        confidence_scores = {}
        
        try:
            # Step 1: Analyze FR/BR content
            explanation_parts.append("📋 Step 1: Analyzing FR/BR content...")
            fr_br_analysis = self.analyzer.analyze_fr_br(fr_br_path)
            
            # Agentic reasoning for analysis
            analysis_reasoning = self._explain_analysis(fr_br_analysis)
            reasoning["analysis"] = analysis_reasoning
            confidence_scores["analysis"] = self._calculate_analysis_confidence(fr_br_analysis)
            
            explanation_parts.append(f"✅ Analyzed {fr_br_analysis.document_id}: {fr_br_analysis.title}")
            explanation_parts.append(f"   Reasoning: {analysis_reasoning}")
            
            # Step 2: Map to epic/story
            explanation_parts.append("🗺️  Step 2: Mapping to epic/story...")
            epic_story_mapping = self.mapper.map_fr_br_to_epic_story(
                fr_br_analysis,
                existing_epics,
                existing_stories
            )
            
            # Agentic reasoning for mapping
            mapping_reasoning = self._explain_mapping(epic_story_mapping, fr_br_analysis)
            reasoning["mapping"] = mapping_reasoning
            confidence_scores["mapping"] = epic_story_mapping.primary_epic_confidence / 100.0
            
            explanation_parts.append(
                f"✅ Mapped to Epic {epic_story_mapping.primary_epic} "
                f"({epic_story_mapping.primary_epic_match_type}, "
                f"{epic_story_mapping.primary_epic_confidence:.1f}% confidence)"
            )
            explanation_parts.append(f"   Reasoning: {mapping_reasoning}")
            
            if epic_story_mapping.primary_epic == 0:
                errors.append("No epic match found - cannot create tasks")
                return WorkflowResult(
                    success=False,
                    fr_br_analysis=fr_br_analysis,
                    epic_story_mapping=epic_story_mapping,
                    created_tasks=[],
                    task_structure=None,
                    errors=errors,
                    warnings=warnings,
                    explanation="\n".join(explanation_parts),
                    reasoning=reasoning,
                    confidence_scores=confidence_scores
                )
            
            # Step 3: Determine task structure
            explanation_parts.append("📐 Step 3: Determining task structure...")
            task_structure = self._determine_task_structure(
                fr_br_analysis,
                epic_story_mapping
            )
            
            # Agentic reasoning for task structure
            structure_reasoning = self._explain_task_structure(task_structure, fr_br_analysis)
            reasoning["task_structure"] = structure_reasoning
            confidence_scores["task_structure"] = self._calculate_structure_confidence(
                task_structure,
                fr_br_analysis
            )
            
            explanation_parts.append(
                f"✅ Determined {task_structure.num_tasks} task(s) needed: "
                f"{', '.join(task_structure.task_types)}"
            )
            explanation_parts.append(f"   Reasoning: {structure_reasoning}")
            
            # Step 4: Create tasks (if auto_create)
            created_tasks = []
            if auto_create:
                explanation_parts.append("🔨 Step 4: Creating tasks...")
                try:
                    created_tasks = self.creator.create_tasks_from_fr_br(
                        fr_br_analysis,
                        epic_story_mapping,
                        task_structure
                    )
                    explanation_parts.append(
                        f"✅ Created {len(created_tasks)} task(s): "
                        f"{', '.join([t.task_id for t in created_tasks])}"
                    )
                except Exception as e:
                    errors.append(f"Failed to create tasks: {str(e)}")
                    explanation_parts.append(f"❌ Task creation failed: {str(e)}")
            else:
                explanation_parts.append("⏸️  Step 4: Task creation skipped (auto_create=False)")
            
            # Step 5: Update FR/BR document with task references
            if created_tasks:
                explanation_parts.append("🔗 Step 5: Linking tasks to FR/BR...")
                try:
                    self._update_fr_br_with_tasks(fr_br_path, created_tasks)
                    explanation_parts.append("✅ Linked tasks to FR/BR document")
                except Exception as e:
                    warnings.append(f"Failed to update FR/BR document: {str(e)}")
                    explanation_parts.append(f"⚠️  Could not update FR/BR document: {str(e)}")
            
            success = len(errors) == 0
            
            return WorkflowResult(
                success=success,
                fr_br_analysis=fr_br_analysis,
                epic_story_mapping=epic_story_mapping,
                created_tasks=created_tasks,
                task_structure=task_structure,
                errors=errors,
                warnings=warnings,
                explanation="\n".join(explanation_parts),
                reasoning=reasoning,
                confidence_scores=confidence_scores
            )
            
        except Exception as e:
            errors.append(f"Workflow failed: {str(e)}")
            return WorkflowResult(
                success=False,
                fr_br_analysis=None,
                epic_story_mapping=None,
                created_tasks=[],
                task_structure=None,
                errors=errors,
                warnings=warnings,
                explanation="\n".join(explanation_parts + [f"❌ Workflow failed: {str(e)}"]),
                reasoning=reasoning,
                confidence_scores=confidence_scores
            )
    
    def _determine_task_structure(
        self,
        fr_br_analysis: FRBRAnalysis,
        epic_story_mapping: EpicStoryMapping
    ) -> TaskStructure:
        """Determine task structure from FR/BR analysis."""
        # Analyze requirements to determine task breakdown
        num_tasks = 1
        task_types = ["implementation"]
        task_dependencies = {}
        task_order = [1]
        task_complexity = {1: "medium"}
        
        # If multiple requirements, consider splitting
        if len(fr_br_analysis.requirements) > 3:
            num_tasks = min(3, len(fr_br_analysis.requirements) // 2)
            task_types = ["implementation"] * num_tasks
        
        # Add testing task if needed
        if fr_br_analysis.acceptance_criteria or fr_br_analysis.document_type == "BR":
            num_tasks += 1
            task_types.append("testing")
            task_order.append(num_tasks)
            task_dependencies[num_tasks] = list(range(1, num_tasks))
            task_complexity[num_tasks] = "medium"
        
        # Add documentation task if needed
        if fr_br_analysis.document_type == "FR" and len(fr_br_analysis.requirements) > 2:
            num_tasks += 1
            task_types.append("documentation")
            task_order.append(num_tasks)
            task_dependencies[num_tasks] = [num_tasks - 1]  # Depends on implementation
            task_complexity[num_tasks] = "low"
        
        # Update task order
        task_order = list(range(1, num_tasks + 1))
        
        # Determine complexity
        if fr_br_analysis.complexity_indicators:
            for task_id in task_order:
                task_complexity[task_id] = "high"
        elif len(fr_br_analysis.requirements) > 5:
            for task_id in task_order[:num_tasks//2]:
                task_complexity[task_id] = "high"
        
        return TaskStructure(
            num_tasks=num_tasks,
            task_types=task_types,
            task_dependencies=task_dependencies,
            task_order=task_order,
            task_complexity=task_complexity
        )
    
    def _update_fr_br_with_tasks(
        self,
        fr_br_path: Path,
        created_tasks: List[CreatedTask]
    ) -> None:
        """Update FR/BR document with task references."""
        if not fr_br_path.exists():
            return
        
        content = fr_br_path.read_text(encoding='utf-8')
        
        # Check if task section already exists
        if "## Related Tasks" in content or "## Kanban Tasks" in content:
            # Update existing section
            import re
            pattern = r'(##\s+(?:Related\s+)?Tasks?\s*\n\n)(.*?)(?=\n##|\Z)'
            task_list = "\n".join([
                f"- [{t.task_id}]({t.task_file_path.relative_to(self.kanban_path.parent)}) - {t.task_title}"
                for t in created_tasks
            ])
            replacement = f"\\1{task_list}\n\n"
            content = re.sub(pattern, replacement, content, flags=re.DOTALL)
        else:
            # Add new section before "## Related Work" or at end
            task_section = "\n## Related Tasks\n\n"
            task_section += "\n".join([
                f"- [{t.task_id}]({t.task_file_path.relative_to(self.kanban_path.parent)}) - {t.task_title}"
                for t in created_tasks
            ])
            task_section += "\n\n"
            
            # Insert before "## Related Work" or at end
            if "## Related Work" in content:
                content = content.replace("## Related Work", task_section + "## Related Work")
            else:
                content += task_section
        
        fr_br_path.write_text(content, encoding='utf-8')
    
    def _explain_analysis(self, analysis: FRBRAnalysis) -> str:
        """Provide agentic explanation for FR/BR analysis."""
        parts = []
        
        parts.append(f"Analyzed {analysis.document_type} document with {len(analysis.requirements)} requirement(s)")
        
        if analysis.key_concepts:
            top_concepts = list(analysis.key_concepts)[:3]
            parts.append(f"Key concepts identified: {', '.join(top_concepts)}")
        
        if analysis.complexity_indicators:
            parts.append(f"Complexity indicators: {', '.join(analysis.complexity_indicators[:2])}")
        
        if analysis.acceptance_criteria:
            parts.append(f"Found {len(analysis.acceptance_criteria)} acceptance criteria")
        
        return ". ".join(parts) + "."
    
    def _calculate_analysis_confidence(self, analysis: FRBRAnalysis) -> float:
        """Calculate confidence score for analysis."""
        confidence = 0.5  # Base confidence
        
        # Increase confidence based on content quality
        if analysis.title:
            confidence += 0.1
        if analysis.description:
            confidence += 0.1
        if analysis.requirements:
            confidence += 0.1
        if analysis.acceptance_criteria:
            confidence += 0.1
        if analysis.key_concepts:
            confidence += 0.1
        
        return min(1.0, confidence)
    
    def _explain_mapping(
        self,
        mapping: EpicStoryMapping,
        analysis: FRBRAnalysis
    ) -> str:
        """Provide agentic explanation for epic/story mapping."""
        parts = []
        
        if mapping.primary_epic > 0:
            parts.append(
                f"Mapped to Canonical Epic {mapping.primary_epic} "
                f"with {mapping.primary_epic_match_type} match "
                f"({mapping.primary_epic_confidence:.1f}% similarity)"
            )
            
            # Explain why this epic was chosen
            if mapping.primary_epic_confidence >= 70:
                parts.append("Strong semantic match indicates clear alignment with epic purpose")
            elif mapping.primary_epic_confidence >= 50:
                parts.append("Moderate match suggests related but not perfect alignment")
            else:
                parts.append("Weak match - may need review or new epic creation")
            
            # Story match explanation
            if mapping.story_match:
                parts.append(
                    f"Existing Story {mapping.story_match['story_number']} matches "
                    f"({mapping.story_match['similarity_score']:.1f}% similarity) - "
                    "reusing existing story"
                )
            elif mapping.new_story_recommended:
                parts.append(
                    "No existing story matches - new story recommended based on "
                    f"scope and requirements"
                )
        
        # Secondary epics
        if mapping.secondary_epics:
            parts.append(
                f"Also relevant to {len(mapping.secondary_epics)} other epic(s) - "
                "may require cross-epic coordination"
            )
        
        return ". ".join(parts) + "."
    
    def _explain_task_structure(
        self,
        structure: TaskStructure,
        analysis: FRBRAnalysis
    ) -> str:
        """Provide agentic explanation for task structure."""
        parts = []
        
        parts.append(
            f"Determined {structure.num_tasks} task(s) needed based on "
            f"{len(analysis.requirements)} requirement(s) and complexity analysis"
        )
        
        # Explain task types
        task_type_counts = {}
        for task_type in structure.task_types:
            task_type_counts[task_type] = task_type_counts.get(task_type, 0) + 1
        
        type_explanations = []
        for task_type, count in task_type_counts.items():
            if count == 1:
                type_explanations.append(f"1 {task_type} task")
            else:
                type_explanations.append(f"{count} {task_type} tasks")
        
        parts.append(f"Task breakdown: {', '.join(type_explanations)}")
        
        # Explain dependencies
        if structure.task_dependencies:
            parts.append(
                f"Task dependencies identified: {len(structure.task_dependencies)} "
                "dependency relationship(s)"
            )
        
        # Explain complexity
        high_complexity = sum(1 for c in structure.task_complexity.values() if c == "high")
        if high_complexity > 0:
            parts.append(f"{high_complexity} high-complexity task(s) identified")
        
        return ". ".join(parts) + "."
    
    def _calculate_structure_confidence(
        self,
        structure: TaskStructure,
        analysis: FRBRAnalysis
    ) -> float:
        """Calculate confidence score for task structure."""
        confidence = 0.6  # Base confidence
        
        # Increase confidence if structure makes sense
        if structure.num_tasks > 0:
            confidence += 0.1
        
        # More requirements should lead to more tasks (or at least consideration)
        if len(analysis.requirements) > 3 and structure.num_tasks > 1:
            confidence += 0.1
        elif len(analysis.requirements) <= 2 and structure.num_tasks == 1:
            confidence += 0.1
        
        # Testing task for BRs or complex FRs
        if analysis.document_type == "BR" and "testing" in structure.task_types:
            confidence += 0.1
        elif analysis.complexity_indicators and "testing" in structure.task_types:
            confidence += 0.1
        
        return min(1.0, confidence)
    
    def process_fr_br_from_intake(
        self,
        fr_br_path: Path,
        intake_context: Optional[Dict] = None
    ) -> WorkflowResult:
        """
        Process FR/BR from intake workflow.
        
        This is the integration point with the FR/BR intake workflow (E4:S02).
        
        Args:
            fr_br_path: Path to FR/BR document (created by intake)
            intake_context: Optional context from intake workflow
        
        Returns:
            WorkflowResult with created tasks
        """
        # Load existing epics/stories if available
        existing_epics = None
        existing_stories = None
        
        if intake_context:
            existing_epics = intake_context.get("existing_epics")
            existing_stories = intake_context.get("existing_stories")
        
        # Process FR/BR
        return self.process_fr_br(
            fr_br_path,
            existing_epics=existing_epics,
            existing_stories=existing_stories,
            auto_create=True
        )

