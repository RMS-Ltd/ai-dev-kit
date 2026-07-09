# Structure map — subject-A5-live

**Recon:** A5 recon-02 · **Date:** 2026-07-01

## Top-level inventory

| Path | Notes |
| ---- | ----- |
| `readme.md` | Lowercase — case sensitivity stress for doc discovery |
| `license` | MIT |
| `package.json` | npm package metadata |
| `index.js`, `index.d.ts`, `test.js` | Minimal implementation |
| `.github/workflows/` | Single CI workflow |
| `docs/kanban/` | **Absent** |

## FR-080 control signal

- Not an empty repo (has code + tests)
- Not a brownfield PM repo (no kanban, no epic docs)
- Hypothesis: installer should offer **path-1 greenfield** without KMA migration prompts
