"use strict";
(self["webpackChunkportal"] = self["webpackChunkportal"] || []).push([["4586"], {
20248(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_implementation_cycles_ipp_e_7_s_01_t_11_consolidate_governance_under_docs_governance_md_9e8_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-implementation-cycles-ipp-e-7-s-01-t-11-consolidate-governance-under-docs-governance-md-9e8.json
var site_docs_implementation_cycles_ipp_e_7_s_01_t_11_consolidate_governance_under_docs_governance_md_9e8_namespaceObject = JSON.parse('{"id":"implementation-cycles/IPP-E7S01T11-consolidate-governance-under-docs-governance","title":"E7:S01:T11 — Planning: Spec, Tests, Implementation Plan (IPW)","description":"Host TaskS01:T11)","source":"@site/../docs/implementation-cycles/IPP-E7S01T11-consolidate-governance-under-docs-governance.md","sourceDirName":"implementation-cycles","slug":"/implementation-cycles/IPP-E7S01T11-consolidate-governance-under-docs-governance","permalink":"/ai-dev-kit/docs/implementation-cycles/IPP-E7S01T11-consolidate-governance-under-docs-governance","draft":false,"unlisted":false,"editUrl":"https://github.com/RMS-Ltd/ai-dev-kit/tree/main/docs/../docs/implementation-cycles/IPP-E7S01T11-consolidate-governance-under-docs-governance.md","tags":[],"version":"current","frontMatter":{"lifecycle":"evergreen","ttl_days":null,"created_at":"2026-05-29T20:00:00.000Z","expires_at":null,"housekeeping_policy":"keep"},"sidebar":"docsSidebar","previous":{"title":"E6:S09:T06 — Planning: ECC harness phases 2–5 (FR-098)","permalink":"/ai-dev-kit/docs/implementation-cycles/IPP-E6S09T06-ecc-harness-phases-2-5-fr098"},"next":{"title":"E9:S05:T04 — Planning: Kanban Naming Hygiene and Directory Systematic Cleanup (UXR-011)","permalink":"/ai-dev-kit/docs/implementation-cycles/IPP-E9S05T04-kanban-naming-hygiene"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ../docs/implementation-cycles/IPP-E7S01T11-consolidate-governance-under-docs-governance.md


const frontMatter = {
	lifecycle: 'evergreen',
	ttl_days: null,
	created_at: new Date('2026-05-29T20:00:00.000Z'),
	expires_at: null,
	housekeeping_policy: 'keep'
};
const contentTitle = 'E7:S01 — Planning: Spec, Tests, Implementation Plan (IPW)';

const assets = {

};



const toc = [{
  "value": "1. Requirements (Ascertained Baseline)",
  "id": "1-requirements-ascertained-baseline",
  "level": 2
}, {
  "value": "1.1 Functional requirements (ascertained)",
  "id": "11-functional-requirements-ascertained",
  "level": 3
}, {
  "value": "1.2 Non-functional requirements (ascertained)",
  "id": "12-non-functional-requirements-ascertained",
  "level": 3
}, {
  "value": "1.3 Invariants and boundaries",
  "id": "13-invariants-and-boundaries",
  "level": 3
}, {
  "value": "2. Specification",
  "id": "2-specification",
  "level": 2
}, {
  "value": "2.1 Goal",
  "id": "21-goal",
  "level": 3
}, {
  "value": "2.2 Specification mapping from ascertained requirements",
  "id": "22-specification-mapping-from-ascertained-requirements",
  "level": 3
}, {
  "value": "2.3 Constraints",
  "id": "23-constraints",
  "level": 3
}, {
  "value": "2.4 Status transition intent (mandatory for IPW-derived implementation tasks)",
  "id": "24-status-transition-intent-mandatory-for-ipw-derived-implementation-tasks",
  "level": 3
}, {
  "value": "2.5 ADR necessity decision (mandatory — IPW Phase 5.0)",
  "id": "25-adr-necessity-decision-mandatory--ipw-phase-50",
  "level": 3
}, {
  "value": "3. Test design",
  "id": "3-test-design",
  "level": 2
}, {
  "value": "4. Implementation plan",
  "id": "4-implementation-plan",
  "level": 2
}, {
  "value": "4.1 Files to create or modify",
  "id": "41-files-to-create-or-modify",
  "level": 3
}, {
  "value": "4.2 Dependency order",
  "id": "42-dependency-order",
  "level": 3
}, {
  "value": "4.3 Documentation implementation steps",
  "id": "43-documentation-implementation-steps",
  "level": 3
}, {
  "value": "5. Documentation deliverables",
  "id": "5-documentation-deliverables",
  "level": 2
}, {
  "value": "5.1 Existing documents to update",
  "id": "51-existing-documents-to-update",
  "level": 3
}, {
  "value": "5.2 New documents to create",
  "id": "52-new-documents-to-create",
  "level": 3
}, {
  "value": "5.3 Documentation gaps and explicit non-changes",
  "id": "53-documentation-gaps-and-explicit-non-changes",
  "level": 3
}, {
  "value": "6. Documentation housing",
  "id": "6-documentation-housing",
  "level": 2
}, {
  "value": "7. Success / verification criteria",
  "id": "7-success--verification-criteria",
  "level": 2
}, {
  "value": "References",
  "id": "references",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    blockquote: "blockquote",
    br: "br",
    code: "code",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
    hr: "hr",
    input: "input",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
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
        id: "e7s01--planning-spec-tests-implementation-plan-ipw",
        children: ["E7:S01", ":T11", " — Planning: Spec, Tests, Implementation Plan (IPW)"]
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Host Task:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-07/story-01-codebase-maintenance-tasks/T11-consolidate-governance-under-docs-governance-fr101",
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "T11-consolidate-governance-under-docs-governance-fr101.md"
        })
      }), " ", (0,jsx_runtime.jsxs)(_components.strong, {
        children: ["(E7:S01", ":T11", ")"]
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Planning for:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/project-management/kanban/fr-br/FR-101-consolidate-governance-under-docs-governance",
        children: "FR-101"
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Status:"
      }), " Approved (planning complete — implementation blocked on AC0 maintainer sign-off)"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "IPW (Implementation Planning Workflow):"
        }), " Consolidated IPP per ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/fr-br/FR-042-implementation-planning-workflow-ipw",
          children: "FR-042"
        }), ". Bidirectional wiring to host task ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Input"
        }), " and ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "References"
        }), " is mandatory before implementation."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1-requirements-ascertained-baseline",
      children: "1. Requirements (Ascertained Baseline)"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "11-functional-requirements-ascertained",
      children: "1.1 Functional requirements (ascertained)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "ID"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Requirement"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Source (FR/BR/Task)"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RF1"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Phase 0 inventory complete and ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "maintainer-approved"
            }), " before any ", (0,jsx_runtime.jsx)(_components.code, {
              children: "git mv"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FR-101-F1, AC0, T11 AC0"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RF2"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["MOVE book-active policies to ", (0,jsx_runtime.jsx)(_components.code, {
              children: "docs/governance/kanban/"
            }), " and ", (0,jsx_runtime.jsx)(_components.code, {
              children: "docs/governance/standards/"
            }), " with stubs at legacy paths"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FR-101-F3, inventory §1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RF3"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["INDEX rows remain under ", (0,jsx_runtime.jsx)(_components.code, {
              children: "docs/architecture/standards-and-adrs/"
            }), "; hub cross-links only"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FR-101-F4"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RF4"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Bidirectional wiring principle"
            }), " relocated to ", (0,jsx_runtime.jsx)(_components.code, {
              children: "docs/governance/principles/bidirectional-wiring-principle.md"
            }), " with stub at ", (0,jsx_runtime.jsx)(_components.code, {
              children: "fr-br/BIDIRECTIONAL_WIRING_PRINCIPLE.md"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FR-101-F5, maintainer decision (IPW)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RF5"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Active surfaces updated: ", (0,jsx_runtime.jsx)(_components.code, {
              children: ".cursorrules"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: ".claude/commands/*"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "kanban-board-guide.md"
            }), ", portable RW excerpt, ", (0,jsx_runtime.jsx)(_components.code, {
              children: "AGENTS.md"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "src/ai_dev_kit/version.py"
            }), " comment if applicable"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FR-101-F6, AC4, inventory §2"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RF6"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Create or update ", (0,jsx_runtime.jsx)(_components.code, {
              children: "docs/maintenance/book-repo-docs-scope.md"
            }), " listing ", (0,jsx_runtime.jsx)(_components.code, {
              children: "docs/governance/"
            }), " as ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "KEEP"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["AC3; coordinate ", (0,jsx_runtime.jsxs)(_components.a, {
              href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-07/story-01-codebase-maintenance-tasks/T10-project-root-hygiene-and-legacy-docs-rationalization",
              children: ["E7:S01", ":T10"]
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RF7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IPP linked from task Input/References"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AC2"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RF8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Populate inventory §4 execution log during Phase 2 execution"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FR-101 deliverable table"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "12-non-functional-requirements-ascertained",
      children: "1.2 Non-functional requirements (ascertained)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "ID"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Requirement"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Source (FR/BR/Task)"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RNF1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Stubs at old paths retain “moved to” banners for ≥ one release cycle"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FR-101-NF1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RNF2"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Book kanban policy stub cites ", (0,jsx_runtime.jsx)(_components.code, {
              children: "packages/frameworks/kanban/policies/kanban-governance-policy.md"
            }), " as adopter SoT"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FR-101-NF2"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RNF3"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Link sweep limited to active surfaces + direct backlinks; do not rewrite changelog archives or ", (0,jsx_runtime.jsx)(_components.code, {
              children: "docs/knowledge/kb-migration-mcp-args/"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IPW blast-radius control"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "13-invariants-and-boundaries",
      children: "1.3 Invariants and boundaries"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Invariants:"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["No ", (0,jsx_runtime.jsx)(_components.code, {
              children: "git mv"
            }), " until ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ai-dev-kit/docs/governance/GOVERNANCE-REHOUSING-INVENTORY",
              children: "GOVERNANCE-REHOUSING-INVENTORY.md"
            }), " sign-off row is checked (AC0)."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Framework package policies under ", (0,jsx_runtime.jsx)(_components.code, {
              children: "packages/frameworks/"
            }), " remain adopter SoT; book tree holds maintainer copies and stubs."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Git history preserved via ", (0,jsx_runtime.jsx)(_components.code, {
              children: "git mv"
            }), " (not copy-delete)."]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "In scope:"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Five MOVE policies (four standards + one kanban), rituals README merge, bidirectional-wiring principle MOVE, ADR-007, hub/inventory updates, active link sweep, docs scope file."
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Out of scope:"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Kanban boards (", (0,jsx_runtime.jsx)(_components.code, {
              children: "kboard.md"
            }), "), epic/story/task trees, ", (0,jsx_runtime.jsx)(_components.code, {
              children: "fr-br/"
            }), " intake queue (except wiring stub), ", (0,jsx_runtime.jsx)(_components.code, {
              children: "vendor/"
            }), ", bulk historical archive edits."]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "2-specification",
      children: "2. Specification"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "21-goal",
      children: "2.1 Goal"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Establish ", (0,jsx_runtime.jsx)(_components.code, {
        children: "docs/governance/"
      }), " as the canonical navigation and housing for ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "book-active"
      }), " governance policies (Kanban, versioning, changelog, IPW/IPP packaging, promoted principles), with ADR-documented topology, legacy stubs, and updated agent/workflow entry points—so maintainers and agents discover one hub instead of scattered ", (0,jsx_runtime.jsx)(_components.code, {
        children: "rituals/policy/"
      }), " and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "architecture/standards-and-adrs/"
      }), " paths."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "22-specification-mapping-from-ascertained-requirements",
      children: "2.2 Specification mapping from ascertained requirements"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Requirement"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Specification"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RF1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Wave 0: maintainer signs inventory; implementation waves B–G refuse to start until sign-off"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RF2"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Wave B/C: ", (0,jsx_runtime.jsx)(_components.code, {
              children: "git mv"
            }), " per inventory; stub banners at ", (0,jsx_runtime.jsx)(_components.code, {
              children: "docs/architecture/standards-and-adrs/*"
            }), " and ", (0,jsx_runtime.jsx)(_components.code, {
              children: "docs/project-management/rituals/policy/*"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RF3"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "docs/governance/README.md"
            }), " INDEX section links ADR-006, workflow-flaws, versioning-error guides in place"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RF4"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Wave D: principle file at ", (0,jsx_runtime.jsx)(_components.code, {
              children: "docs/governance/principles/bidirectional-wiring-principle.md"
            }), "; stub at ", (0,jsx_runtime.jsx)(_components.code, {
              children: "fr-br/"
            }), "; update templates and active refs"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RF5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Wave E: sweep inventory §2 surfaces"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RF6"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Wave F: ", (0,jsx_runtime.jsx)(_components.code, {
              children: "book-repo-docs-scope.md"
            }), " CREATE (file does not exist at IPW time)"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RF7"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Task doc links this IPP; ", (0,jsx_runtime.jsx)(_components.code, {
              children: "Publication Status: NOT_APPLICABLE"
            }), " (consolidated IPP)"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RF8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Inventory §4 table filled per moved item"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "23-constraints",
      children: "2.3 Constraints"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Implementation commits land via ", (0,jsx_runtime.jsxs)(_components.strong, {
          children: ["RW E7:S01", ":T11"]
        }), " (project git policy)—not ad-hoc commits during waves."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Coordinate ", (0,jsx_runtime.jsx)(_components.code, {
          children: "book-repo-docs-scope.md"
        }), " with E7:S01", ":T10", " to avoid conflicting edits (T11 owns AC3 row for ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/governance/"
        }), ")."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Update ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".cursorrules"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "packages/frameworks/workflow-mgt/cursorrules-rw-trigger-section.md"
        }), " in the same wave (dual-source parity)."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Changelog language: use “Change implemented” / “Attempted” until user verifies (RW changelog rules)."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "24-status-transition-intent-mandatory-for-ipw-derived-implementation-tasks",
      children: "2.4 Status transition intent (mandatory for IPW-derived implementation tasks)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Current task status:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "IN PROGRESS"
        }), " (intake RW ", (0,jsx_runtime.jsx)(_components.code, {
          children: "v0.7.1.11+1"
        }), ")."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Step 1 (implementation):"
        }), " Confirm task remains ", (0,jsx_runtime.jsx)(_components.code, {
          children: "IN PROGRESS"
        }), "; refresh ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Last updated"
        }), " (not ", (0,jsx_runtime.jsx)(_components.code, {
          children: "TODO → IN PROGRESS"
        }), ")."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Transition trigger to COMPLETE:"
        }), " AC0–AC4 satisfied with verification evidence (T1–T7), user verification, forensic marker ", (0,jsx_runtime.jsx)(_components.code, {
          children: "✅ COMPLETE (v{version})"
        }), ", kboard row aligned per FR-077."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Atomic propagation requirement:"
        }), " Task doc, FR-101 status, kboard, and fbuboard (if applicable) update in same RW Step 7 session."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Owner:"
        }), " Implementation execution (Waves 0–H), not IPW authoring."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "25-adr-necessity-decision-mandatory--ipw-phase-50",
      children: "2.5 ADR necessity decision (mandatory — IPW Phase 5.0)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Criteria: ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/architecture/standards-and-adrs/ipw-adr-necessity-checklist",
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "ipw-adr-necessity-checklist.md"
        })
      }), " (FR-100)."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "ID"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Trigger"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Y/N"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Evidence"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Alternatives"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Phase 0 inventory already selected single topology (", (0,jsx_runtime.jsx)(_components.code, {
              children: "docs/governance/"
            }), ")"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reversibility"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Y"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Mass link revert across ", (0,jsx_runtime.jsx)(_components.code, {
              children: ".cursorrules"
            }), ", templates, framework portable excerpt"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Blast radius"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Y"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Beyond §4.1: agent instructions, ", (0,jsx_runtime.jsx)(_components.code, {
              children: "TASK_TEMPLATE.md"
            }), ", version file comments"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Precedent"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Y"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Post FR-099/ADR-006 book workspace needs canonical governance home"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Constraint trade-off"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Documentation relocation only"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Governance contract"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Y"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Moves policies referenced by RW/IPW/UKW and global implementation gate"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Supersedes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Complements ADR-006; does not narrow or contradict"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Outcome:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "REQUIRED"
      }), " — ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "CREATE"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/architecture/standards-and-adrs/ADR-007-book-governance-document-topology",
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "ADR-007-book-governance-document-topology.md"
        })
      }), " in Wave A before first ", (0,jsx_runtime.jsx)(_components.code, {
        children: "git mv"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "ID"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Exemption (only if all T = N)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Pass?"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Evidence"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "E1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Single locus"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Fail"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T3 Y — not confined to §4.1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "E2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No new options"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Not evaluated (triggers present)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "E3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reversible in one task"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Not evaluated"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "E4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Spec elsewhere"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Not evaluated"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "E5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Documented NONE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Not evaluated"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "3-test-design",
      children: "3. Test design"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Doc-only relocation: structural verification (no new pytest module). Do ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "not"
      }), " use ", (0,jsx_runtime.jsx)(_components.code, {
        children: "--skip-tests"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "ID"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Behavior / layer"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Expected check"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RF2 — kanban policy stub hygiene"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "rg 'rituals/policy/kanban-governance-policy' docs .cursorrules .claude 'packages/frameworks/workflow-mgt/cursorrules-rw-trigger-section.md'"
            }), " → stub-only banners or zero non-stub hits"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RF2 — versioning policy stub hygiene"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "rg 'standards-and-adrs/dev-kit-versioning-policy' docs .cursorrules .claude"
            }), " → stub-only or zero non-stub hits"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RF4 — wiring principle path"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "rg 'fr-br/BIDIRECTIONAL_WIRING_PRINCIPLE' docs packages/frameworks/kanban/templates"
            }), " → stub-only or paths updated to ", (0,jsx_runtime.jsx)(_components.code, {
              children: "governance/principles/"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RF5 — IPW/IPP policy links"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Spot-check ", (0,jsx_runtime.jsx)(_components.code, {
              children: ".cursorrules"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: ".claude/commands/ipw.md"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "AGENTS.md"
            }), " point to ", (0,jsx_runtime.jsx)(_components.code, {
              children: "docs/governance/standards/specification-and-planning-artifacts-policy.md"
            }), " (or stubs that resolve)"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AC3 — docs scope"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "docs/maintenance/book-repo-docs-scope.md"
            }), " exists and contains ", (0,jsx_runtime.jsx)(_components.code, {
              children: "docs/governance/"
            }), " with ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "KEEP"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hub navigation"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "docs/governance/README.md"
            }), " lists ", (0,jsx_runtime.jsx)(_components.code, {
              children: "kanban/"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "standards/"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "principles/"
            }), ", and INDEX links"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Portal (conditional)"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["If ", (0,jsx_runtime.jsx)(_components.code, {
              children: "portal/"
            }), " links touched versioning policy, run ", (0,jsx_runtime.jsx)(_components.code, {
              children: "pytest tests/test_portal_fr068_navigation.py"
            })]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "4-implementation-plan",
      children: "4. Implementation plan"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Action"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Deliverable"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "1"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsxs)(_components.strong, {
              children: ["[MANDATORY] Confirm task ", (0,jsx_runtime.jsx)(_components.code, {
                children: "E7:S01:T11"
              }), " status ", (0,jsx_runtime.jsx)(_components.code, {
                children: "IN PROGRESS"
              })]
            }), " in task doc; update ", (0,jsx_runtime.jsx)(_components.code, {
              children: "Last updated"
            }), "."]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Task doc reflects IN PROGRESS"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "0"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Maintainer signs ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ai-dev-kit/docs/governance/GOVERNANCE-REHOUSING-INVENTORY",
              children: "GOVERNANCE-REHOUSING-INVENTORY.md"
            }), " sign-off table"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AC0 gate cleared"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "A"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "CREATE"
            }), " ADR-007 (topology: book ", (0,jsx_runtime.jsx)(_components.code, {
              children: "docs/governance/"
            }), " vs ", (0,jsx_runtime.jsx)(_components.code, {
              children: "architecture/"
            }), " vs ", (0,jsx_runtime.jsx)(_components.code, {
              children: "packages/frameworks/"
            }), "; stub policy; INDEX vs MOVE)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "ADR-007-book-governance-document-topology.md"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "B"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "git mv"
            }), " four standards policies → ", (0,jsx_runtime.jsx)(_components.code, {
              children: "docs/governance/standards/"
            }), "; stubs in ", (0,jsx_runtime.jsx)(_components.code, {
              children: "docs/architecture/standards-and-adrs/"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Moved files + stubs"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "C"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "git mv"
            }), " kanban policy; merge ", (0,jsx_runtime.jsx)(_components.code, {
              children: "rituals/policy/README.md"
            }), " → ", (0,jsx_runtime.jsx)(_components.code, {
              children: "docs/governance/kanban/README.md"
            }), "; stub under rituals"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Kanban tree + stub"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "D"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "git mv"
            }), " ", (0,jsx_runtime.jsx)(_components.code, {
              children: "BIDIRECTIONAL_WIRING_PRINCIPLE.md"
            }), " → ", (0,jsx_runtime.jsx)(_components.code, {
              children: "docs/governance/principles/bidirectional-wiring-principle.md"
            }), "; stub at ", (0,jsx_runtime.jsx)(_components.code, {
              children: "fr-br/"
            }), "; update active refs"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Principle + stub + link sweep subset"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "E"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Active surface sweep (inventory §2)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Updated agent/workflow docs"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "F"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["CREATE ", (0,jsx_runtime.jsx)(_components.code, {
              children: "docs/maintenance/book-repo-docs-scope.md"
            }), " (or merge with T10)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AC3"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "G"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Run tests T1–T7; populate inventory §4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Verification log"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "H"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsxs)(_components.strong, {
              children: ["RW E7:S01", ":T11"]
            }), " after user verification"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Version, changelog, kanban closure"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "N"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "[MANDATORY] Reconcile task status"
            }), " to ", (0,jsx_runtime.jsx)(_components.code, {
              children: "COMPLETE"
            }), " + ", (0,jsx_runtime.jsx)(_components.code, {
              children: "✅ COMPLETE (v{version})"
            }), " if all ACs satisfied; else ", (0,jsx_runtime.jsx)(_components.code, {
              children: "IN PROGRESS"
            }), " or ", (0,jsx_runtime.jsx)(_components.code, {
              children: "BLOCKED"
            }), " with reason. Sync kboard."]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Forensic closure"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "41-files-to-create-or-modify",
      children: "4.1 Files to create or modify"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "CREATE (Wave A/F):"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/architecture/standards-and-adrs/ADR-007-book-governance-document-topology.md"
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "docs/maintenance/book-repo-docs-scope.md"
        }), " (if T10 has not created it)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "docs/governance/kanban/README.md"
        }), " (merge from rituals README)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "docs/governance/kanban/kanban-governance-policy.md"
        }), " (from rituals)"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/governance/standards/dev-kit-versioning-policy.md"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/governance/standards/changelog-archival-policy.md"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/governance/standards/specification-and-planning-artifacts-policy.md"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/governance/standards/dev-kit-ipw-ipp-vs-icw-artifacts.md"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/governance/principles/bidirectional-wiring-principle.md"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "MOVE + stub (legacy paths retain stub files):"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "docs/project-management/rituals/policy/kanban-governance-policy.md"
        }), " → stub"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "docs/architecture/standards-and-adrs/dev-kit-versioning-policy.md"
        }), " → stub"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "docs/architecture/standards-and-adrs/changelog-archival-policy.md"
        }), " → stub"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "docs/architecture/standards-and-adrs/specification-and-planning-artifacts-policy.md"
        }), " → stub"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "docs/architecture/standards-and-adrs/dev-kit-ipw-ipp-vs-icw-artifacts.md"
        }), " → stub"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "docs/project-management/kanban/fr-br/BIDIRECTIONAL_WIRING_PRINCIPLE.md"
        }), " → stub"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "UPDATE (Wave E — active surfaces):"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: ".cursorrules"
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: ".claude/commands/ipw.md"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "rw.md"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "ukw.md"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "AGENTS.md"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/project-management/kanban/kanban-board-guide.md"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "packages/frameworks/workflow-mgt/cursorrules-rw-trigger-section.md"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/architecture/README.md"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/governance/README.md"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/governance/GOVERNANCE-REHOUSING-INVENTORY.md"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "packages/frameworks/kanban/templates/TASK_TEMPLATE.md"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/architecture/standards-and-adrs/task-template-cross-wiring-sop.md"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/project-management/kanban/intake-open-taskless-queue.md"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Inbound links from moved policy bodies (grep each moved filename)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "42-dependency-order",
      children: "4.2 Dependency order"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Wave 0 (sign-off) → Wave A (ADR-007) → Wave B (standards) → Wave C (kanban) → Wave D (principles) → Wave E (sweep) → Wave F (docs scope) → Wave G (verify) → Wave H (RW)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Do not start B–G without AC0."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Wave E must include dual-source RW excerpt + ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".cursorrules"
        }), " in same commit set."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "43-documentation-implementation-steps",
      children: "4.3 Documentation implementation steps"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Publish ADR-007 before first ", (0,jsx_runtime.jsx)(_components.code, {
          children: "git mv"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Update ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/governance/README.md"
        }), " after each MOVE wave."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Mark inventory §4 rows as moves complete."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Wire FR-101 and task doc on RW closure."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Stub template (each legacy path):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-markdown",
        children: "---\nlifecycle: evergreen\nhousekeeping_policy: keep\n---\n\n> **MOVED:** Canonical location: `docs/governance/...`\n> Framework adopter SoT (if applicable): `packages/frameworks/kanban/policies/kanban-governance-policy.md`\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "5-documentation-deliverables",
      children: "5. Documentation deliverables"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "51-existing-documents-to-update",
      children: "5.1 Existing documents to update"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Doc ID"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Path"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Scope of change"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Tied to (RF/step)"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "D-U1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "docs/governance/GOVERNANCE-REHOUSING-INVENTORY.md"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FIX→MOVE for principles; §4 log"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RF4, G"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "D-U2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "docs/governance/README.md"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Post-move navigation; remove bootstrap-only wording"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RF2–RF4, C–D"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "D-U3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: ".cursorrules"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Governance policy paths"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RF5, E"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "D-U4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "packages/frameworks/workflow-mgt/cursorrules-rw-trigger-section.md"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Parity with D-U3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RF5, E"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "D-U5"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: ".claude/commands/ipw.md"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "rw.md"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "ukw.md"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Policy path refs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RF5, E"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "D-U6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "AGENTS.md"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IPW gate policy paths"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RF5, E"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "D-U7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "docs/project-management/kanban/kanban-board-guide.md"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Kanban governance path"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RF5, E"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "D-U8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "docs/architecture/README.md"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Point to governance hub for moved policies"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RF3, E"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "D-U9"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "packages/frameworks/kanban/templates/TASK_TEMPLATE.md"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bidirectional wiring link"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RF4, D"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "D-U10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "docs/architecture/standards-and-adrs/task-template-cross-wiring-sop.md"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Wiring principle path"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RF4, D"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "D-U11"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "docs/project-management/kanban/intake-open-taskless-queue.md"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Governance link"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RF4, D"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "D-U12"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Host task + FR-101"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Status, IPP link, closure"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RF7, H"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "D-U13"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "src/ai_dev_kit/version.py"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Comment pointer if references versioning policy path"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RF5, E"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "52-new-documents-to-create",
      children: "5.2 New documents to create"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Doc ID"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Proposed path"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Purpose"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Tied to (RF/step)"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "D-C1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "docs/implementation-cycles/IPP-E7S1T11-consolidate-governance-under-docs-governance.md"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "This IPP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RF7"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "D-C2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "docs/architecture/standards-and-adrs/ADR-007-book-governance-document-topology.md"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Topology ADR"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "§2.5, A"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "D-C3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "docs/maintenance/book-repo-docs-scope.md"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AC3 docs scope"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RF6, F"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "D-C4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "docs/governance/principles/bidirectional-wiring-principle.md"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Canonical principle"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RF4, D"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "D-C5–D-C8"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "docs/governance/standards/*"
            }), " (four files)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Moved policies"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RF2, B"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "D-C9"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "docs/governance/kanban/kanban-governance-policy.md"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Moved kanban policy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RF2, C"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "53-documentation-gaps-and-explicit-non-changes",
      children: "5.3 Documentation gaps and explicit non-changes"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Gap / topic"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Resolution"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["Changelog archives (", (0,jsx_runtime.jsx)(_components.code, {
              children: "docs/changelog-and-release-notes/changelog-archive/"
            }), ")"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "NONE"
            }), " — historical paths retained (RNF3)"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "docs/knowledge/kb-migration-mcp-args/"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "NONE"
            }), " — migration snapshots not rewritten"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "packages/frameworks/kanban/policies/kanban-governance-policy.md"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "NONE"
            }), " — framework SoT unchanged"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Epic/story/task kanban trees"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "NONE"
            }), " — out of scope"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ADR-007 governing doc for EXEMPT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N/A — outcome REQUIRED"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "6-documentation-housing",
      children: "6. Documentation housing"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Doc ID"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Canonical path"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Publication status"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Publication N/A reason (if N/A)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Lifecycle"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Inbound links to add"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "D-C1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "docs/implementation-cycles/IPP-E7S1T11-consolidate-governance-under-docs-governance.md"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NOT_APPLICABLE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Internal planning artifact (BR-066); linked from task doc"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "evergreen"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T11 Input, References"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "D-C2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "docs/architecture/standards-and-adrs/ADR-007-book-governance-document-topology.md"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NOT_APPLICABLE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ADR index via architecture README"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "evergreen"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "governance README, FR-101"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "D-C3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "docs/maintenance/book-repo-docs-scope.md"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NOT_APPLICABLE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Maintainer scope doc"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "evergreen"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "governance README, T10/T11"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "D-C4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "docs/governance/principles/bidirectional-wiring-principle.md"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NOT_APPLICABLE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Book workspace governance"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "evergreen"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TASK_TEMPLATE, intake-open-taskless-queue, fr-br stub"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "D-C5–D-C8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "docs/governance/standards/*.md"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NOT_APPLICABLE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Book workspace governance"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "evergreen"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "governance README, stubs, .cursorrules"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "D-C9"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "docs/governance/kanban/kanban-governance-policy.md"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NOT_APPLICABLE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Book workspace governance"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "evergreen"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "governance README, kanban-board-guide"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "D-U2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "docs/governance/README.md"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NOT_APPLICABLE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hub; portal inclusion optional in Wave E"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "evergreen"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FR-101, inventory"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "7-success--verification-criteria",
      children: "7. Success / verification criteria"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      className: "contains-task-list",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "AC0: Inventory sign-off completed before any ", (0,jsx_runtime.jsx)(_components.code, {
          children: "git mv"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "ADR-007 created and accepted before moves"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "All MOVE rows executed with stubs (T1, T2 pass)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Bidirectional wiring principle at ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/governance/principles/"
        }), " (T3 pass)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Active surfaces updated (T4 pass)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "book-repo-docs-scope.md"
        }), " lists ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/governance/"
        }), " ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "KEEP"
        }), " (T5 pass)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/governance/README.md"
        }), " complete (T6 pass)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "All §5 UPDATE/CREATE items implemented or explicitly deferred with reason"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Task doc links this IPP; ", (0,jsx_runtime.jsx)(_components.code, {
          children: "validate_ipw_publication_wiring.py --requested E7:S01:T11"
        }), " passes"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "User verification recorded; ", (0,jsx_runtime.jsxs)(_components.strong, {
          children: ["RW E7:S01", ":T11"]
        }), " closes FR-101 and task"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "references",
      children: "References"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/fr-br/FR-101-consolidate-governance-under-docs-governance",
          children: "FR-101"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsxs)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-07/story-01-codebase-maintenance-tasks/T11-consolidate-governance-under-docs-governance-fr101",
          children: ["E7:S01", ":T11", " task"]
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/governance/GOVERNANCE-REHOUSING-INVENTORY",
          children: "GOVERNANCE-REHOUSING-INVENTORY.md"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/governance/",
          children: "docs/governance/README.md"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/architecture/standards-and-adrs/ipw-adr-necessity-checklist",
          children: "ipw-adr-necessity-checklist.md"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/architecture/standards-and-adrs/ADR-006-book-project-private-repository-spin-off",
          children: "ADR-006"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/fr-br/FR-042-implementation-planning-workflow-ipw",
          children: "FR-042"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/fr-br/FR-094-ipw-slash-command-and-task-state-transition-mandate",
          children: "FR-094"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/fr-br/FR-077-ipw-built-task-status-transition-and-kboard-sync",
          children: "FR-077"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/packages/frameworks/workflow-mgt/docs/rw-trigger-dual-source-parity.md",
          children: "rw-trigger-dual-source-parity.md"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/.claude/commands/ipw.md",
          children: ".claude/commands/ipw.md"
        })
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