#!/usr/bin/env python3
"""
Task Inference Engine for RW

Analyzes recent context to infer the most likely task for RW execution when no explicit
task argument is provided.

Note: Not wired into validators or RW today. FR-060 / project policy prefer explicit task
ids (e.g. E7S06T05) for RW; keep this module for experiments or future opt-in tooling only.
"""

import subprocess
import json
from pathlib import Path
from typing import Optional, Dict, List, Any
from datetime import datetime, timedelta
import logging

from kanban_parser import KanbanBoardParser


class TaskInferenceEngine:
    """Engine for inferring RW tasks from context."""

    def __init__(self, project_root: Path):
        """
        Initialize the task inference engine.

        Args:
            project_root: Root directory of the project
        """
        self.project_root = project_root
        self.logger = logging.getLogger(__name__)
        self.kanban_parser = KanbanBoardParser(project_root)

    def infer_task_from_context(self, user_request: Optional[str] = None) -> Optional[str]:
        """
        Infer the most likely task from current context.

        Args:
            user_request: Optional user request context

        Returns:
            Task ID string (e.g., 'E5:S01:T64') or None if no clear inference
        """
        self.logger.info("Analyzing context for task inference...")

        # Get context sources
        git_context = self._analyze_git_history()
        kanban_context = self._analyze_kanban_state()
        file_context = self._analyze_recent_files()

        # Combine context analysis
        candidates = self._combine_context_analysis(
            git_context, kanban_context, file_context, user_request
        )

        # Select most likely task
        if candidates:
            best_candidate = max(candidates, key=lambda x: x['confidence'])
            if best_candidate['confidence'] > 0.6:  # Minimum confidence threshold
                self.logger.info(f"Inferred task: {best_candidate['task_id']} (confidence: {best_candidate['confidence']:.2f})")
                return best_candidate['task_id']

        self.logger.info("No clear task inference possible")
        return None

    def _analyze_git_history(self) -> Dict[str, Any]:
        """Analyze recent git history for task clues."""
        context = {
            'recent_commits': [],
            'modified_files': [],
            'task_mentions': []
        }

        try:
            # Get recent commits (last 10)
            result = subprocess.run(
                ['git', 'log', '--oneline', '-10', '--no-merges'],
                cwd=self.project_root,
                capture_output=True,
                text=True,
                timeout=30
            )

            if result.returncode == 0:
                commits = result.stdout.strip().split('\n')
                context['recent_commits'] = [line.strip() for line in commits if line.strip()]

            # Get recently modified files
            result = subprocess.run(
                ['git', 'diff', '--name-only', 'HEAD~1', 'HEAD'],
                cwd=self.project_root,
                capture_output=True,
                text=True,
                timeout=30
            )

            if result.returncode == 0:
                files = result.stdout.strip().split('\n')
                context['modified_files'] = [f for f in files if f.strip()]

        except (subprocess.TimeoutExpired, FileNotFoundError):
            self.logger.warning("Git analysis failed")

        return context

    def _analyze_kanban_state(self) -> Dict[str, Any]:
        """Analyze kanban board state for active tasks."""
        context = {
            'active_tasks': [],
            'should_have_tasks': [],
            'must_have_tasks': []
        }

        try:
            kanban_data = self.kanban_parser.parse_board()

            # Extract tasks from different sections
            for section, tasks in kanban_data.items():
                if section.lower() == 'must have':
                    context['must_have_tasks'] = tasks
                elif section.lower() == 'should have':
                    context['should_have_tasks'] = tasks
                elif section.lower() == 'could have':
                    context['active_tasks'].extend(tasks)

            # Combine for active tasks analysis
            context['active_tasks'] = (
                context['must_have_tasks'] +
                context['should_have_tasks'] +
                context['active_tasks']
            )

        except Exception as e:
            self.logger.warning(f"Kanban analysis failed: {e}")

        return context

    def _analyze_recent_files(self) -> Dict[str, Any]:
        """Analyze recently modified files for task clues."""
        context = {
            'recently_modified': [],
            'task_files': []
        }

        try:
            # Find recently modified files (last 24 hours)
            cutoff = datetime.now() - timedelta(hours=24)

            for file_path in self.project_root.rglob('*'):
                if file_path.is_file():
                    try:
                        mtime = datetime.fromtimestamp(file_path.stat().st_mtime)
                        if mtime > cutoff:
                            context['recently_modified'].append(str(file_path.relative_to(self.project_root)))

                            # Check if it's a task file
                            if 'epics' in str(file_path) and file_path.suffix == '.md':
                                context['task_files'].append(str(file_path.relative_to(self.project_root)))
                    except OSError:
                        continue

        except Exception as e:
            self.logger.warning(f"File analysis failed: {e}")

        return context

    def _combine_context_analysis(
        self,
        git_context: Dict[str, Any],
        kanban_context: Dict[str, Any],
        file_context: Dict[str, Any],
        user_request: Optional[str] = None
    ) -> List[Dict[str, Any]]:
        """
        Combine all context sources to score task candidates.

        Returns:
            List of task candidates with confidence scores
        """
        candidates = []

        # Score tasks based on different signals
        for task_id in kanban_context.get('active_tasks', []):
            if not task_id or not isinstance(task_id, str):
                continue

            score = 0.0
            signals = []

            # Kanban board priority signal
            if task_id in kanban_context.get('must_have_tasks', []):
                score += 0.4
                signals.append('must_have_priority')
            elif task_id in kanban_context.get('should_have_tasks', []):
                score += 0.3
                signals.append('should_have_priority')

            # Git history signal (recent commits mentioning task)
            for commit in git_context.get('recent_commits', []):
                if task_id.lower() in commit.lower():
                    score += 0.2
                    signals.append('git_history')
                    break

            # File modification signal
            task_file_pattern = f"epics/{task_id.split(':')[0]}/Story-{task_id.split(':')[1].replace('S', '')}/T{task_id.split(':')[2].replace('T', '')}"
            for mod_file in file_context.get('recently_modified', []):
                if task_file_pattern.lower() in mod_file.lower():
                    score += 0.3
                    signals.append('file_modification')
                    break

            # User request signal
            if user_request and task_id.lower() in user_request.lower():
                score += 0.5
                signals.append('user_request')

            if score > 0:
                candidates.append({
                    'task_id': task_id,
                    'confidence': min(score, 1.0),  # Cap at 1.0
                    'signals': signals
                })

        # Sort by confidence
        candidates.sort(key=lambda x: x['confidence'], reverse=True)

        self.logger.info(f"Task candidates: {candidates}")
        return candidates
