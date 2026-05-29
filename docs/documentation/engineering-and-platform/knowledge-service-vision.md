---
lifecycle: evergreen
ttl_days: null
created_at: 2025-12-11T00:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Problem-Solution KB Service — Vision & Plan

**Context:** There is no open, dual-mode (web UI + API) service that accepts abstract problem statements and returns curated solution patterns with concrete examples and provenance. Existing sources (Stack Overflow, “awesome” lists, pattern catalogs) are fragmented, noisy, or static.

## Objectives
- Curated knowledge base with structured entries:
  - Problem (abstract, with context/constraints)
  - Solution patterns (trade-offs, applicability, anti-patterns)
  - Concrete examples (code/doc snippets) with provenance and license
- Two access modes:
  - Web UI for humans (search/browse, filters, detail pages)
  - API for agents (REST/GraphQL + embeddings for semantic retrieval)
- Submission + review workflow to maintain quality.

## Functional requirements
- Submit abstract problems (UI + API) with required metadata: context, constraints, expected outcome, provenance, license.
- Retrieve ranked solution patterns (semantic + metadata filters).
- Show concrete examples with provenance and license.
- Moderation/review queue; quality states (draft/verified/deprecated).
- Versioned entries with change history.
- Export via REST/GraphQL; embeddings endpoint for agent retrieval.

## Non-functional requirements
- High signal-to-noise: moderation gates, provenance, license clarity.
- Low-latency retrieval; offline/edge-friendly embeddings store.
- Auditability: trace every recommendation back to sources.
- Privacy-respecting; avoid PII by default.

## Architecture sketch
- Ingestion layer (UI/API) enforcing schema and license/provenance checks.
- Curation pipeline: human review + automated checks (dedupe, license, completeness).
- Storage:
  - Document store for canonical records (problem, solutions, examples, metadata).
  - Vector index for semantic retrieval.
  - Relational/graph edges for tags, provenance, related patterns.
- APIs: REST/GraphQL + embeddings endpoint; rate limiting and auth.
- UI: Search/browse, filters, detail pages with examples, submission forms.
- Governance: roles (submitter, reviewer, steward), quality states, versioning of entries.

## Data model (high level)
- Problem: id, title, abstract, context (domain, scale, constraints), tags.
- SolutionPattern: id, summary, applicability, trade-offs, pros/cons, anti-patterns.
- Example: snippet/link, provenance, license.
- Relations: problem↔solutions, solutions↔examples, related problems, duplicates.

## Quality & moderation
- Required fields on submission (context, constraints, expected outcome, provenance, license).
- Automated checks: dedupe (semantic + exact), license validation, minimal completeness.
- Human review/steward approval before “verified”.
- Changelog per entry; deprecation flow for outdated solutions.

## Contribution & quality bar
- Submission must include:
  - Problem: title, abstract, context (domain, scale, constraints), expected outcome.
  - Solutions: at least one pattern with applicability and trade-offs.
  - Examples: at least one code/doc example with source and license.
  - Provenance: URLs and license identifiers for all examples.
- Review checklist:
  - Problem is abstract and de-personalized; clear constraints.
  - At least one solution pattern with pros/cons and applicability.
  - At least one example with explicit license and source.
  - No PII; no unlicensed code.
  - Status set to “verified” only after steward review.

## API shape (draft)
- Submission (POST `/api/v1/problems`):
  ```json
  {
    "title": "...",
    "abstract": "...",
    "context": { "domain": "...", "scale": "...", "constraints": ["..."] },
    "expected_outcome": "...",
    "solutions": [
      {
        "summary": "...",
        "applicability": ["..."],
        "tradeoffs": ["pros", "cons"],
        "examples": [
          { "type": "code", "content": "...", "source_url": "...", "license": "MIT" }
        ]
      }
    ],
    "tags": ["..."],
    "provenance": [{ "url": "...", "license": "..." }]
  }
  ```
- Search (GET `/api/v1/search?q=...&tags=...`):
  - Returns ranked problems/solutions with excerpts and IDs; supports embeddings endpoint for semantic queries.

## Why this should work
- Addresses a clear gap: no unified, curated problem→solution pattern service with UI+API.
- Balances semantic retrieval with curation and provenance to keep signal high.
- Dual-mode access fits human workflows and agent automation.
- Governance/versioning prevents the usual “noisy Q&A” failure mode.

## Risks & mitigations
- Noise/low quality → strict schema, moderation gates, steward program.
- License/provenance → mandatory source/license fields; automated checks; avoid unlicensed code.
- Adoption → seed with high-quality entries; provide API/embeddings; document examples well.
- Sustainability → steward/reputation model; incremental publishing.

## References & inspiration
- Q&A/search: Stack Overflow API (needs curation), pattern catalogs (GoF, EIP), cloud-native patterns (CNCF), SRE/postmortems (“awesome-sre”, “awesome-postmortems”).
- Our concrete incident: task-ordering/version drift (E4:S06 T09/T10) highlighted the need for structured, policy-aligned guidance and curated examples.

