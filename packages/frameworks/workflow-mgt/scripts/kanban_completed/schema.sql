-- Kanban completed-task ledger (FR-134 / E04:S14:T12)

CREATE TABLE IF NOT EXISTS schema_version (
  id INTEGER PRIMARY KEY CHECK (id = 1),
  version INTEGER NOT NULL,
  applied_at TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS completed_task (
  epic INTEGER NOT NULL,
  story INTEGER NOT NULL,
  task INTEGER NOT NULL,
  internal_version TEXT NOT NULL,
  completed_at TEXT NOT NULL,
  completing_agent TEXT NOT NULL DEFAULT '',
  summary TEXT NOT NULL DEFAULT '',
  archived_at TEXT NOT NULL,
  kboard_row_snapshot TEXT,
  PRIMARY KEY (epic, story, task)
);

CREATE INDEX IF NOT EXISTS idx_completed_task_completed_at
  ON completed_task(completed_at DESC);
