-- Release-state SQLite schema (E02:S17:T04)
-- See: docs/kanban/epics/epic-02/story-17-rw-semver-characterization-and-release-state-sqlite/sqlite-schema-design.md

CREATE TABLE IF NOT EXISTS schema_version (
  id INTEGER PRIMARY KEY CHECK (id = 1),
  version INTEGER NOT NULL,
  applied_at TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS semver_rc (
  rc INTEGER PRIMARY KEY,
  epic_count INTEGER,
  updated_at TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS epic_to_minor (
  rc INTEGER NOT NULL REFERENCES semver_rc(rc),
  epic INTEGER NOT NULL,
  minor INTEGER NOT NULL,
  PRIMARY KEY (rc, epic)
);

CREATE TABLE IF NOT EXISTS story_to_patch (
  rc INTEGER NOT NULL REFERENCES semver_rc(rc),
  epic INTEGER NOT NULL,
  story INTEGER NOT NULL,
  patch INTEGER NOT NULL,
  PRIMARY KEY (rc, epic, story)
);

CREATE TABLE IF NOT EXISTS task_touch_state (
  rc INTEGER PRIMARY KEY REFERENCES semver_rc(rc),
  epic_count INTEGER NOT NULL,
  task_touch_counter INTEGER NOT NULL,
  max_patch INTEGER NOT NULL,
  updated_at TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS task_touch_mapping (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  rc INTEGER NOT NULL REFERENCES semver_rc(rc),
  internal_version TEXT NOT NULL,
  semver_full TEXT NOT NULL,
  patch INTEGER NOT NULL,
  epic INTEGER NOT NULL,
  story INTEGER NOT NULL,
  task INTEGER NOT NULL,
  build INTEGER NOT NULL,
  finalized_at TEXT,
  git_tag_primary TEXT,
  git_tag_internal TEXT,
  UNIQUE (rc, internal_version),
  UNIQUE (rc, patch)
);

CREATE INDEX IF NOT EXISTS idx_ttm_internal ON task_touch_mapping(rc, internal_version);
CREATE INDEX IF NOT EXISTS idx_ttm_patch ON task_touch_mapping(rc, patch);

CREATE TABLE IF NOT EXISTS changelog_entry (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  internal_version TEXT NOT NULL UNIQUE,
  semver_full TEXT NOT NULL,
  release_date TEXT NOT NULL,
  short_date TEXT NOT NULL,
  epic INTEGER NOT NULL,
  story INTEGER NOT NULL,
  task INTEGER NOT NULL,
  summary TEXT NOT NULL,
  detailed_path TEXT,
  body_markdown TEXT,
  created_at TEXT NOT NULL
);

CREATE INDEX IF NOT EXISTS idx_changelog_version ON changelog_entry(internal_version);

CREATE TABLE IF NOT EXISTS release_metadata (
  internal_version TEXT PRIMARY KEY,
  branch TEXT,
  commit_sha TEXT,
  rw_task_token TEXT,
  semver_strategy TEXT NOT NULL DEFAULT 'task_touch',
  exported_registry_hash TEXT,
  created_at TEXT NOT NULL
);
