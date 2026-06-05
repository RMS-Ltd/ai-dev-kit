"use strict";
(self["webpackChunkportal"] = self["webpackChunkportal"] || []).push([["97011"], {
50141(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_project_management_kanban_fr_br_fr_101_consolidate_governance_under_docs_governance_md_96e_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-project-management-kanban-fr-br-fr-101-consolidate-governance-under-docs-governance-md-96e.json
var site_docs_project_management_kanban_fr_br_fr_101_consolidate_governance_under_docs_governance_md_96e_namespaceObject = JSON.parse('{"id":"project-management/kanban/fr-br/FR-101-consolidate-governance-under-docs-governance","title":"FR-101: Consolidate governance under docs/governance/","description":"Type: Feature Request (FR)","source":"@site/../docs/project-management/kanban/fr-br/FR-101-consolidate-governance-under-docs-governance.md","sourceDirName":"project-management/kanban/fr-br","slug":"/project-management/kanban/fr-br/FR-101-consolidate-governance-under-docs-governance","permalink":"/ai-dev-kit/docs/project-management/kanban/fr-br/FR-101-consolidate-governance-under-docs-governance","draft":false,"unlisted":false,"editUrl":"https://github.com/RMS-Ltd/ai-dev-kit/tree/main/docs/../docs/project-management/kanban/fr-br/FR-101-consolidate-governance-under-docs-governance.md","tags":[],"version":"current","frontMatter":{"lifecycle":"evergreen","ttl_days":null,"created_at":"2026-05-29T18:00:00.000Z","expires_at":null,"housekeeping_policy":"keep"},"sidebar":"docsSidebar","previous":{"title":"FR-100: IPW ADR necessity checklist and measurable decision gate","permalink":"/ai-dev-kit/docs/project-management/kanban/fr-br/FR-100-ipw-adr-necessity-checklist-and-decision-gate"},"next":{"title":"FR-102: UKW archive-completed use case (-c) — kboard + fbuboard → completed ledgers","permalink":"/ai-dev-kit/docs/project-management/kanban/fr-br/FR-102-ukw-archive-completed-board-rows"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ../docs/project-management/kanban/fr-br/FR-101-consolidate-governance-under-docs-governance.md


const frontMatter = {
	lifecycle: 'evergreen',
	ttl_days: null,
	created_at: new Date('2026-05-29T18:00:00.000Z'),
	expires_at: null,
	housekeeping_policy: 'keep'
};
const contentTitle = 'FR-101: Consolidate governance under docs/governance/';

const assets = {

};



const toc = [{
  "value": "Summary",
  "id": "summary",
  "level": 2
}, {
  "value": "Problem Statement",
  "id": "problem-statement",
  "level": 2
}, {
  "value": "Scope",
  "id": "scope",
  "level": 2
}, {
  "value": "In scope",
  "id": "in-scope",
  "level": 3
}, {
  "value": "Out of scope",
  "id": "out-of-scope",
  "level": 3
}, {
  "value": "Functional Requirements",
  "id": "functional-requirements",
  "level": 2
}, {
  "value": "Non-Functional Requirements",
  "id": "non-functional-requirements",
  "level": 2
}, {
  "value": "Acceptance Criteria (intake / closure)",
  "id": "acceptance-criteria-intake--closure",
  "level": 2
}, {
  "value": "Rehousing summary (detail in inventory)",
  "id": "rehousing-summary-detail-in-inventory",
  "level": 2
}, {
  "value": "Deliverable phases",
  "id": "deliverable-phases",
  "level": 2
}, {
  "value": "References",
  "id": "references",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    br: "br",
    code: "code",
    em: "em",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
    hr: "hr",
    input: "input",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsxs)(_components.h1, {
        id: "fr-101-consolidate-governance-under-docsgovernance",
        children: ["FR-101: Consolidate governance under ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/governance/"
        })]
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Type:"
      }), " Feature Request (FR)", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "ID:"
      }), " FR-101", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Submitted:"
      }), " 2026-05-29", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Submitted By:"
      }), " Maintainer", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Priority:"
      }), " HIGH", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Severity:"
      }), " MEDIUM", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Status:"
      }), " IMPLEMENTED — closure ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "v0.7.1.11+8"
      }), " (", (0,jsx_runtime.jsx)(_components.code, {
        children: "RW E07:S01:T11"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "--art"
      }), "; Waves 0–F)"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Implementing Task:"
      }), " ", (0,jsx_runtime.jsxs)(_components.a, {
        href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-07/story-01-codebase-maintenance-tasks/T11-consolidate-governance-under-docs-governance-fr101",
        children: ["E07:S01", ":T11"]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Related:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/project-management/kanban/fr-br/FR-039-ai-dev-kit-project-review-and-legacy-clean-up",
        children: "FR-039"
      }), ", ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/project-management/kanban/fr-br/UXR-013-project-root-hygiene-and-legacy-docs-rationalization",
        children: "UXR-013"
      }), ", ", (0,jsx_runtime.jsxs)(_components.a, {
        href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-07/story-01-codebase-maintenance-tasks/T10-project-root-hygiene-and-legacy-docs-rationalization",
        children: ["E07:S01", ":T10"]
      }), ", ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/project-management/kanban/fr-br/FR-075-icw-durable-planning-artifacts-documentation-system",
        children: "FR-075"
      }), ", ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/architecture/standards-and-adrs/ADR-006-book-project-private-repository-spin-off",
        children: "ADR-006"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Establish ", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/governance/"
        })
      }), " as the canonical home for ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "book-active"
      }), " governance policies (Kanban, versioning, changelog, IPW/IPP packaging) currently scattered across ", (0,jsx_runtime.jsx)(_components.code, {
        children: "docs/project-management/rituals/policy/"
      }), " and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "docs/architecture/standards-and-adrs/"
      }), ". Phase 0 produces a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "maintainer-approved inventory"
      }), "; execution uses ", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "git mv"
        })
      }), ", stubs, and link sweeps—", (0,jsx_runtime.jsx)(_components.strong, {
        children: "no moves before sign-off"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "problem-statement",
      children: "Problem Statement"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Governance policies for the maintainer book workspace are split across rituals, architecture, and Kanban trees. Adopters and agents lack a single navigation hub; duplicate or stale paths (", (0,jsx_runtime.jsx)(_components.code, {
        children: "rituals/policy/"
      }), " vs packaged framework SoT) increase link rot and onboarding friction after ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/project-management/kanban/fr-br/FR-099-spin-off-book-epic-to-private-repository",
        children: "FR-099"
      }), " repository separation."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "scope",
      children: "Scope"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "in-scope",
      children: "In scope"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Inventory (Phase 0)"
        }), " — Every governance-related document in the book repo with disposition: ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "MOVE"
        }), ", ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "STUB"
        }), ", ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "INDEX"
        }), " (cross-link only), or ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "OUT"
        }), " (explicitly excluded)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Execution (Phase 2, post-IPW)"
        }), " — Populate ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/governance/"
        }), " by relocating book-active policies; merge ", (0,jsx_runtime.jsx)(_components.code, {
          children: "rituals/policy/README.md"
        }), " into ", (0,jsx_runtime.jsx)(_components.code, {
          children: "governance/kanban/README.md"
        }), "; repository-wide link sweep."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Verification (Phase 3)"
        }), " — ", (0,jsx_runtime.jsx)(_components.code, {
          children: "rg"
        }), " hygiene for legacy paths; update docs-scope / layout verifiers where applicable."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "out-of-scope",
      children: "Out of scope"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Kanban boards (", (0,jsx_runtime.jsx)(_components.code, {
          children: "kboard.md"
        }), "), epic/story/task trees, ", (0,jsx_runtime.jsx)(_components.code, {
          children: "fr-br/"
        }), " intake queue (except promoted principles)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Maintenance runbooks under ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/maintenance/"
        }), " (index-only references)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "vendor/"
        }), " and packaged framework ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "canonical SoT"
        }), " under ", (0,jsx_runtime.jsx)(_components.code, {
          children: "packages/frameworks/"
        }), " (book copy may stub → framework)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "functional-requirements",
      children: "Functional Requirements"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      className: "contains-task-list",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "FR-101-F1 (Phase 0):"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/governance/GOVERNANCE-REHOUSING-INVENTORY",
          children: "GOVERNANCE-REHOUSING-INVENTORY.md"
        }), " complete with disposition table and ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "maintainer-approved"
        }), " sign-off row before any ", (0,jsx_runtime.jsx)(_components.code, {
          children: "git mv"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "FR-101-F2 (Phase 1):"
        }), " Optional ", (0,jsx_runtime.jsx)(_components.a, {
          href: "../../../implementation-cycles",
          children: "IPP-E7S1T11"
        }), " when phased moves + validation are needed (IPW before implementation)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "FR-101-F3 (Phase 2):"
        }), " Execute MOVE rows — target layout:", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "docs/governance/kanban/"
            }), " — book Kanban governance policy"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "docs/governance/standards/"
            }), " — versioning, changelog archival, specification/planning, IPW vs ICW matrix"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "docs/governance/README.md"
            }), " — hub + navigation"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "FR-101-F4 (Phase 2):"
        }), " INDEX rows remain in place with prominent cross-links from ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/governance/README.md"
        }), " (e.g. ADR-006, workflow-flaws / versioning-error reference guides)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "FR-101-F5 (Phase 2):"
        }), " Resolve ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "BIDIRECTIONAL_WIRING_PRINCIPLE"
        }), " placement — linked from ", (0,jsx_runtime.jsx)(_components.code, {
          children: "intake-open-taskless-queue.md"
        }), " and templates; inventory decides ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "restore"
        }), ", ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "move to governance/principles/"
        }), ", or ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "repoint"
        }), " (see inventory §1)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "FR-101-F6 (Phase 3):"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "rg 'kanban-board-guide|rituals/policy'"
        }), " on active surfaces returns stub-only or zero false positives; ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".cursorrules"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".claude/commands/*"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "kboard"
        }), " guide, and top-level ", (0,jsx_runtime.jsx)(_components.code, {
          children: "fr-br/"
        }), " links updated."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "non-functional-requirements",
      children: "Non-Functional Requirements"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      className: "contains-task-list",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "FR-101-NF1:"
        }), " Stubs at old paths retain “moved to” banners for ≥ one release cycle (or until layout verifier passes)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "FR-101-NF2:"
        }), " Framework package policies remain authoritative for adopters; book stubs must cite ", (0,jsx_runtime.jsx)(_components.code, {
          children: "packages/frameworks/kanban/policies/"
        }), " where applicable."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "acceptance-criteria-intake--closure",
      children: "Acceptance Criteria (intake / closure)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      className: "contains-task-list",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "AC0:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/governance/GOVERNANCE-REHOUSING-INVENTORY",
          children: "GOVERNANCE-REHOUSING-INVENTORY.md"
        }), " complete and ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "maintainer-approved"
        }), " before any ", (0,jsx_runtime.jsx)(_components.code, {
          children: "git mv"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "AC1:"
        }), " FR-101-F1..F6 satisfied (or explicitly deferred in inventory with rationale)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "AC2:"
        }), " IPW package linked from task when execution proceeds (", (0,jsx_runtime.jsx)(_components.code, {
          children: "IPP-E7S1T11-*.md"
        }), "). ", (0,jsx_runtime.jsxs)(_components.em, {
          children: ["(Filed: ", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ai-dev-kit/docs/implementation-cycles/IPP-E7S01T11-consolidate-governance-under-docs-governance",
            children: "IPP-E7S1T11"
          }), ".)"]
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "AC3:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/maintenance/book-repo-docs-scope.md"
        }), " (create or update) lists ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/governance/"
        }), " as ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "KEEP"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "AC4:"
        }), " No broken governance links from active book surfaces (", (0,jsx_runtime.jsx)(_components.code, {
          children: "fr-br/"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "kanban-board-guide.md"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".cursorrules"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".claude/commands/*"
        }), ")."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "rehousing-summary-detail-in-inventory",
      children: "Rehousing summary (detail in inventory)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Disposition"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Examples"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsxs)(_components.strong, {
              children: ["MOVE → ", (0,jsx_runtime.jsx)(_components.code, {
                children: "docs/governance/"
              })]
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "rituals/policy/kanban-governance-policy.md"
            }), " → ", (0,jsx_runtime.jsx)(_components.code, {
              children: "governance/kanban/"
            }), "; ", (0,jsx_runtime.jsx)(_components.code, {
              children: "dev-kit-versioning-policy.md"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "changelog-archival-policy.md"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "specification-and-planning-artifacts-policy.md"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "dev-kit-ipw-ipp-vs-icw-artifacts.md"
            }), " → ", (0,jsx_runtime.jsx)(_components.code, {
              children: "governance/standards/"
            }), "; merge ", (0,jsx_runtime.jsx)(_components.code, {
              children: "rituals/policy/README.md"
            }), " → ", (0,jsx_runtime.jsx)(_components.code, {
              children: "governance/kanban/README.md"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "INDEX (stay, cross-link)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "ADR-006"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "workflow-flaws-reference-guide.md"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "versioning-error-reference-guide.md"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "FIX"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "BIDIRECTIONAL_WIRING_PRINCIPLE.md"
            }), " — confirm canonical path under ", (0,jsx_runtime.jsx)(_components.code, {
              children: "fr-br/"
            }), " vs governance/principles"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "OUT"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Boards, epics, ", (0,jsx_runtime.jsx)(_components.code, {
              children: "fr-br/"
            }), " intake (except promoted principles), maintenance runbooks, ", (0,jsx_runtime.jsx)(_components.code, {
              children: "vendor/"
            })]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "deliverable-phases",
      children: "Deliverable phases"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Phase"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Output"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "0 — Inventory"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ai-dev-kit/docs/governance/GOVERNANCE-REHOUSING-INVENTORY",
              children: "GOVERNANCE-REHOUSING-INVENTORY.md"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "1 — IPW"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Optional ", (0,jsx_runtime.jsx)(_components.code, {
              children: "IPP-E7S1T11-*.md"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "2 — Execute"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "git mv"
            }), " per inventory; stubs; sign-off table completed"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "3 — Verify"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Link/stub verification; docs scope updated"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "references",
      children: "References"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/governance/",
          children: "docs/governance/README.md"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/governance/GOVERNANCE-REHOUSING-INVENTORY",
          children: "GOVERNANCE-REHOUSING-INVENTORY.md"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/architecture/",
          children: "docs/architecture/README.md"
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/packages/frameworks/kanban/policies/kanban-governance-policy.md",
          children: "packages/frameworks/kanban/policies/kanban-governance-policy.md"
        }), " (framework SoT)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Task: ", (0,jsx_runtime.jsxs)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-07/story-01-codebase-maintenance-tasks/T11-consolidate-governance-under-docs-governance-fr101",
          children: ["E07:S01", ":T11"]
        })]
      }), "\n"]
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return MDXLayout ? (0,jsx_runtime.jsx)(MDXLayout, {
    ...props,
    children: (0,jsx_runtime.jsx)(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}



},
28453(__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  R: () => (useMDXComponents),
  x: () => (MDXProvider)
});
/* import */ var react__rspack_import_0 = __webpack_require__(96540);
/**
 * @import {MDXComponents} from 'mdx/types.js'
 * @import {Component, ReactElement, ReactNode} from 'react'
 */

/**
 * @callback MergeComponents
 *   Custom merge function.
 * @param {Readonly<MDXComponents>} currentComponents
 *   Current components from the context.
 * @returns {MDXComponents}
 *   Additional components.
 *
 * @typedef Props
 *   Configuration for `MDXProvider`.
 * @property {ReactNode | null | undefined} [children]
 *   Children (optional).
 * @property {Readonly<MDXComponents> | MergeComponents | null | undefined} [components]
 *   Additional components to use or a function that creates them (optional).
 * @property {boolean | null | undefined} [disableParentContext=false]
 *   Turn off outer component context (default: `false`).
 */



/** @type {Readonly<MDXComponents>} */
const emptyComponents = {}

const MDXContext = react__rspack_import_0.createContext(emptyComponents)

/**
 * Get current components from the MDX Context.
 *
 * @param {Readonly<MDXComponents> | MergeComponents | null | undefined} [components]
 *   Additional components to use or a function that creates them (optional).
 * @returns {MDXComponents}
 *   Current components.
 */
function useMDXComponents(components) {
  const contextComponents = react__rspack_import_0.useContext(MDXContext)

  // Memoize to avoid unnecessary top-level context changes
  return react__rspack_import_0.useMemo(
    function () {
      // Custom merge via a function prop
      if (typeof components === 'function') {
        return components(contextComponents)
      }

      return {...contextComponents, ...components}
    },
    [contextComponents, components]
  )
}

/**
 * Provider for MDX context.
 *
 * @param {Readonly<Props>} properties
 *   Properties.
 * @returns {ReactElement}
 *   Element.
 * @satisfies {Component}
 */
function MDXProvider(properties) {
  /** @type {Readonly<MDXComponents>} */
  let allComponents

  if (properties.disableParentContext) {
    allComponents =
      typeof properties.components === 'function'
        ? properties.components(emptyComponents)
        : properties.components || emptyComponents
  } else {
    allComponents = useMDXComponents(properties.components)
  }

  return react__rspack_import_0.createElement(
    MDXContext.Provider,
    {value: allComponents},
    properties.children
  )
}


},

}]);