# External adopter archetype corpus (Phase 5)

**Programme:** [FR-142](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/docs/kanban/fbu/FR-142-external-adopter-archetype-corpus-install-validation.md) · **Task:** [E06:S09:T41](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/docs/kanban/epics/epic-06/story-09-ai-dev-kit-installation-and-adopter-integration/T41-external-adopter-archetype-corpus-fr142.md) · **Parent:** [E06:S09:T26](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/docs/kanban/epics/epic-06/story-09-ai-dev-kit-installation-and-adopter-integration/T26-starborn-legacy-adk-install-program.md) (Phase 5)

Maintainer-owned index for **typed external repository archetypes** — recon-first Install RC gap discovery, selective full installs, and anonymized fixtures. Mirrors the `adk-install-into-sbl/attempt-NN/` pattern without replacing the controlled [UXR-029](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/docs/kanban/fbu/UXR-029-adk-install-path-experiment.md) three-repo programme.

**Diversity matrix:** [external-adopter-diversity-matrix.md](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/docs/knowledge/analysis/projects/external-adopter-diversity-matrix.md)  
**Recon protocol:** [RECON-PROTOCOL.md](RECON-PROTOCOL.md)

---

## Ethics and operations

- **Local-only clones** — subjects are cloned to operator `temp/` or worktrees; clone URLs are **not** committed to the kit.
- **No third-party commits** — no PRs, issues, or pushes to external repositories.
- **Anonymize published artifacts** — use `subject-A1`, `subject-A2`, etc. in kit write-ups unless a permissive OSS licence explicitly allows naming.
- **Permissive licence preference** for full-install subjects (MIT/Apache-2.0) when selecting live repos.
- **Recon before install** — each full install requires a recon report with an explicit **novel gap hypothesis** ([RECON-PROTOCOL.md](RECON-PROTOCOL.md)).
- **Gate G1** — full external installs wait until UXR-029 Phase 4 unless operator documents a waiver in the task doc.

---

## Index layout

```text
adk-install-external/
  README.md                 ← this file
  RECON-PROTOCOL.md
  archetype-{id}/
    recon-NN/
      README.md             ← structure map + synthesis
      install-rc-pre-score.json
      structure-map.md      ← optional detail
    install-NN/             ← post-G1 full install (optional)
```

**Fixtures (CI):** `tests/fixtures/adopter-corpora/archetype-{id}/` — anonymized mini-trees; no network at test time.

---

## Archetype attempts (v1)

| Archetype | Recon | Full install | Fixture |
| --------- | ----- | ------------ | ------- |
| **A1** issues-only | [recon-01](archetype-a1-issues-only/recon-01/README.md) | BLOCKED (G1) | [fixture](https://github.com/RMS-Ltd/ai-dev-kit/tree/main/tests/fixtures/adopter-corpora/archetype-a1-issues-only) |
| **A2** docs sprawl | [recon-01](archetype-a2-docs-sprawl/recon-01/README.md) | BLOCKED (G1) | [fixture](https://github.com/RMS-Ltd/ai-dev-kit/tree/main/tests/fixtures/adopter-corpora/archetype-a2-docs-sprawl) |
| **A5** minimal non-empty | [recon-01](archetype-a5-minimal-nonempty/recon-01/README.md) | BLOCKED (G1) | [fixture](https://github.com/RMS-Ltd/ai-dev-kit/tree/main/tests/fixtures/adopter-corpora/archetype-a5-minimal-nonempty) |

**Template:** [archetype-a1-issues-only/recon-template/README.md](archetype-a1-issues-only/recon-template/README.md)

---

## Related

- [adopter-install-attempt-preflight](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/docs/guides/adopter-install-attempt-preflight.md) §8
- [starborn-legacy-install-triage-matrix](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/docs/knowledge/analysis/projects/starborn-legacy-install-triage-matrix.md)
- [adk-install-into-sbl](../adk-install-into-sbl/) — operator-owned programme (Phases 0–4)
