---
lifecycle: evergreen
ttl_days: null
created_at: 2025-12-11T00:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Open KB Starter Map for Engineering Teams

Curated, high-signal public resources you can lean on for delivery, release, reliability, security, and process. Use this as a jump-off index; each item is well-maintained and widely referenced.

## Core delivery & release
- **Trunk-based development** — trunkbaseddevelopment.com  
  When: Branching/release patterns, short-lived branches, fast flow.
- **Versioning & change semantics** — semver.org; keepachangelog.com; conventionalcommits.org  
  When: Consistent versioning, changelog structure, commit semantics.
- **GitOps & cloud-native delivery** — CNCF TAG App Delivery; ArgoCD/Flux docs  
  When: Declarative delivery, progressive rollout, ops-as-code in cloud-native.

## Engineering handbooks
- **GitLab Handbook (engineering/product/devops)**  
  When: Opinionated playbooks for release, deploy, incidents, observability, product.
- **Microsoft Engineering Fundamentals / Playbook (GitHub)**  
  When: Practical checklists for design, testing, CI/CD, reliability.
- **Google Engineering Practices / Testing docs**  
  When: Code review guidance, testing philosophy, lightweight process patterns.

## Reliability, incidents, and postmortems
- **Google SRE books (public PDFs)**  
  When: SLOs/SLIs, incident response, error budgets, reliability culture.
- **awesome-sre (GitHub)**  
  When: Curated SRE resources and tooling references.
- **awesome-postmortems (GitHub)**  
  When: Real-world RCA/postmortem examples to model your own practice.

## Security & supply chain
- **OpenSSF Best Practices**  
  When: Baseline secure software practices and checklists.
- **SLSA.dev**  
  When: Supply-chain levels, build/release integrity controls (provenance, isolation).

## Architecture & patterns
- **ThoughtWorks Tech Radar**  
  When: Staying current on tools/techniques; adopt/assess/hold language.
- **CNCF whitepapers (TAG App Delivery, SIG Security)**  
  When: Modern cloud-native delivery and security patterns.

## How to use this map
1) Pick the relevant slice for your need (release, reliability, security, etc.).  
2) Apply the smallest coherent pattern (e.g., trunk-based + conventional commits + semver).  
3) For incidents/postmortems, model from awesome-postmortems + SRE books.  
4) For supply chain, start with OpenSSF basics, then layer SLSA where needed.  
5) Revisit the Tech Radar quarterly to avoid tech drift and adjust bets.  

