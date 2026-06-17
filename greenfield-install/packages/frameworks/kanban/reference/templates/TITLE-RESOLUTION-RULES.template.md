# Title resolution rules

- **Named:** Non-empty title not matching `unresolved`, `TBD`, `placeholder`.
- **Unresolved:** Empty or marker-only titles — penalized in `title_coverage` dimension.
- **Conflict:** Longest named title wins when duplicate `E:S:T` rows exist in source.
