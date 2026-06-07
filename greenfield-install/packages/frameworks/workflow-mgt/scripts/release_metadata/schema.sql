-- Release metadata read model (v1) — FR-115 / FR-116 umbrella IPP

CREATE TABLE IF NOT EXISTS release (
  internal_version TEXT PRIMARY KEY,
  epic INTEGER,
  story INTEGER,
  task INTEGER,
  build INTEGER,
  rc INTEGER DEFAULT 0,
  release_date_utc TEXT,
  ingested_at TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS semver_state (
  singleton_id INTEGER PRIMARY KEY CHECK (singleton_id = 1),
  epic_count INTEGER NOT NULL,
  task_touch_counter INTEGER NOT NULL,
  source_file_hash TEXT NOT NULL,
  ingested_at TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS semver_epic_to_minor (
  epic INTEGER PRIMARY KEY,
  minor INTEGER NOT NULL
);

CREATE TABLE IF NOT EXISTS semver_story_to_patch (
  epic INTEGER NOT NULL,
  story INTEGER NOT NULL,
  patch INTEGER NOT NULL,
  PRIMARY KEY (epic, story)
);

CREATE TABLE IF NOT EXISTS semver_mapping (
  internal_version TEXT PRIMARY KEY REFERENCES release(internal_version),
  semver TEXT NOT NULL,
  semver_core TEXT NOT NULL,
  patch INTEGER NOT NULL,
  rc INTEGER,
  epic INTEGER,
  story INTEGER,
  task INTEGER,
  build INTEGER,
  source_line INTEGER,
  row_hash TEXT NOT NULL,
  ingested_at TEXT NOT NULL
);

CREATE INDEX IF NOT EXISTS idx_semver_mapping_patch ON semver_mapping(patch);
CREATE INDEX IF NOT EXISTS idx_semver_mapping_core ON semver_mapping(semver_core);
CREATE INDEX IF NOT EXISTS idx_semver_mapping_est ON semver_mapping(epic, story, task);

CREATE TABLE IF NOT EXISTS changelog_release (
  internal_version TEXT PRIMARY KEY REFERENCES release(internal_version),
  source_path TEXT NOT NULL,
  summary TEXT,
  release_date_utc TEXT,
  row_hash TEXT NOT NULL,
  ingested_at TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS changelog_section (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  internal_version TEXT NOT NULL REFERENCES changelog_release(internal_version),
  section_name TEXT NOT NULL,
  sort_order INTEGER NOT NULL
);

CREATE TABLE IF NOT EXISTS changelog_item (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  section_id INTEGER NOT NULL REFERENCES changelog_section(id),
  body_md TEXT NOT NULL,
  sort_order INTEGER NOT NULL,
  verification_status TEXT,
  linked_est TEXT,
  linked_fr_br TEXT
);

CREATE INDEX IF NOT EXISTS idx_changelog_release_date ON changelog_release(release_date_utc);

CREATE TABLE IF NOT EXISTS ingest_cursor (
  domain TEXT PRIMARY KEY,
  last_git_sha TEXT,
  last_manifest_hash TEXT,
  last_run_at TEXT NOT NULL,
  rows_upserted INTEGER DEFAULT 0
);

CREATE TABLE IF NOT EXISTS ingest_run_log (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  started_at TEXT NOT NULL,
  finished_at TEXT,
  mode TEXT NOT NULL,
  status TEXT NOT NULL,
  message TEXT
);
