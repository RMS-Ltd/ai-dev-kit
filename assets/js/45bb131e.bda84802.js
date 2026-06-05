"use strict";
(self["webpackChunkportal"] = self["webpackChunkportal"] || []).push([["73437"], {
72826(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_implementation_cycles_ipp_e_07_s_01_t_09_kanban_template_governance_uxr_005_md_45b_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-implementation-cycles-ipp-e-07-s-01-t-09-kanban-template-governance-uxr-005-md-45b.json
var site_docs_implementation_cycles_ipp_e_07_s_01_t_09_kanban_template_governance_uxr_005_md_45b_namespaceObject = JSON.parse('{"id":"implementation-cycles/IPP-E07S01T09-kanban-template-governance-uxr005","title":"E07:S01:T09 — Planning: Spec, Tests, Implementation Plan (IPW)","description":"Host TaskS01:T09)","source":"@site/../docs/implementation-cycles/IPP-E07S01T09-kanban-template-governance-uxr005.md","sourceDirName":"implementation-cycles","slug":"/implementation-cycles/IPP-E07S01T09-kanban-template-governance-uxr005","permalink":"/ai-dev-kit/docs/implementation-cycles/IPP-E07S01T09-kanban-template-governance-uxr005","draft":false,"unlisted":false,"editUrl":"https://github.com/RMS-Ltd/ai-dev-kit/tree/main/docs/../docs/implementation-cycles/IPP-E07S01T09-kanban-template-governance-uxr005.md","tags":[],"version":"current","frontMatter":{"lifecycle":"evergreen","ttl_days":null,"created_at":"2026-06-01T18:00:00.000Z","expires_at":null,"housekeeping_policy":"keep"},"sidebar":"docsSidebar","previous":{"title":"E06:S09:T23 — Planning: Spec, Tests, Implementation Plan (IPW)","permalink":"/ai-dev-kit/docs/implementation-cycles/IPP-E06S09T23-greenfield-install-github-packages-delivery-uxr021"},"next":{"title":"E07:S07:T01 — Planning: Comprehensive Workflow Machinery Code Review (IPW)","permalink":"/ai-dev-kit/docs/implementation-cycles/IPP-E07S07T01-workflow-machinery-code-review"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ../docs/implementation-cycles/IPP-E07S01T09-kanban-template-governance-uxr005.md


const frontMatter = {
	lifecycle: 'evergreen',
	ttl_days: null,
	created_at: new Date('2026-06-01T18:00:00.000Z'),
	expires_at: null,
	housekeeping_policy: 'keep'
};
const contentTitle = 'E07:S01 — Planning: Spec, Tests, Implementation Plan (IPW)';

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
  "value": "2.2 Specification mapping",
  "id": "22-specification-mapping",
  "level": 3
}, {
  "value": "2.3 Constraints",
  "id": "23-constraints",
  "level": 3
}, {
  "value": "2.4 Status transition intent",
  "id": "24-status-transition-intent",
  "level": 3
}, {
  "value": "2.5 ADR necessity decision",
  "id": "25-adr-necessity-decision",
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
        id: "e07s01--planning-spec-tests-implementation-plan-ipw",
        children: ["E07:S01", ":T09", " — Planning: Spec, Tests, Implementation Plan (IPW)"]
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Host Task:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-07/story-01-codebase-maintenance-tasks/E07S01T09-kanban-template-governance",
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "E07S01T09-kanban-template-governance.md"
        })
      }), " ", (0,jsx_runtime.jsxs)(_components.strong, {
        children: ["(E07:S01", ":T09", ")"]
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Planning for:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/project-management/kanban/fr-br/UXR-005-kanban-board-formatting-and-governance",
        children: "UXR-005"
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Status:"
      }), " Approved"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "IPW (Implementation Planning Workflow):"
        }), " Consolidated IPP for UXR-005 — MoSCOW spacing rule, validator, RW/UKW hooks."]
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
            children: "Source"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RF1"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["One blank line between adjacent ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "multi-line"
            }), " MoSCOW bullets on in-scope boards/docs"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "UXR-005, task scope"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RF2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Guide/templates document rule + UXR ownership"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "UXR AC-2, AC-3"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RF3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Programmatic validator; resolve TODO in doc-consistency script"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Task §2, UXR AC-4"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RF4"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["RW docs reference E07:S01", ":T09", " + validator command"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Task §3"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RF5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "UKW/MMW escalation guidance for formatting drift"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Task §3"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RF6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Evidence package (diff + validator log + runbook)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Task §4"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RF7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Task ↔ kboard status sync (FR-077)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FR-077"
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
            children: "Source"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RNF1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FR-097: no batch row stamp rewrites"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FR-097"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RNF2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Idempotent validate/fix"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Task"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RNF3"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Violations report file", ":line", " + bullet token"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Task"
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
        }), " MoSCOW state icons (UXR-012) unchanged unless status changes."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "In scope:"
        }), " kboard, fbuboard, guide, structure, index, framework kanban templates, validator, policy, RW/UKW guides."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Out of scope:"
        }), " UKW ", (0,jsx_runtime.jsx)(_components.code, {
          children: "--rp"
        }), " / ", (0,jsx_runtime.jsx)(_components.code, {
          children: "-c"
        }), "; new E07", ":S00", " intake; blocking RW gate in v1."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Spec decisions (user-gate defaults):"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Multi-line bullet:"
        }), " Source line length ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "> 100"
        }), " characters after ", (0,jsx_runtime.jsx)(_components.code, {
          children: "- "
        }), " (same as ", (0,jsx_runtime.jsx)(_components.code, {
          children: "MULTILINE_THRESHOLD"
        }), " in validator), OR explicit continuation line (indented, not a new bullet/header)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Validator home:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "packages/frameworks/workflow-mgt/scripts/validation/validate_kanban_moscow_spacing.py"
        }), " + delegate from ", (0,jsx_runtime.jsx)(_components.code, {
          children: "scripts/documentation/validate-documentation-consistency.py"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "RW integration:"
        }), " ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Non-blocking"
        }), " advisory in Step 9 (report-only); promotion to blocking gate deferred."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "2-specification",
      children: "2. Specification"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "21-goal",
      children: "2.1 Goal"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Make UXR-005’s MoSCOW spacing rule durable: documented, machine-checked, and referenced by RW/UKW so Kanban boards stay scannable without ad-hoc fixes."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "22-specification-mapping",
      children: "2.2 Specification mapping"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "RF1 → spacing module + corpus pass. RF2–RF5 → policy and agent guides. RF3 → pytest + CLI. RF6 → task doc evidence section. RF7 → status transitions with kboard row."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "23-constraints",
      children: "2.3 Constraints"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Validator runs on MoSCOW sections only (", (0,jsx_runtime.jsx)(_components.code, {
          children: "## MoSCOW"
        }), " … next ", (0,jsx_runtime.jsx)(_components.code, {
          children: "##"
        }), " not a band header)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "--fix"
        }), " inserts at most one blank line per gap (idempotent)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "24-status-transition-intent",
      children: "2.4 Status transition intent"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Current task status:"
        }), " TODO"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Transition to IN PROGRESS:"
        }), " Step 1 of §4 (first implementation commit)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Transition to COMPLETE:"
        }), " All task + UXR ACs evidenced; FR-077 kboard sync"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Atomic propagation:"
        }), " Task doc + kboard in same session on status change"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "25-adr-necessity-decision",
      children: "2.5 ADR necessity decision"
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
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Single approach: length heuristic + optional fix"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reversibility"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Revert validator + doc edits in one PR"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Blast radius"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Kanban docs + one validator; no package API"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Precedent"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Extends existing guide § Formatting Governance"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Constraint trade-off"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No security/perf trade-off"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Governance contract"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "v1 non-blocking only; no new Gate"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Supersedes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Aligns with UXR-005"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Outcome:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "EXEMPT"
      }), " — governing docs: ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/project-management/kanban/kanban-board-guide",
        children: "kanban-board-guide.md"
      }), " § Formatting Governance, ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/project-management/kanban/fr-br/UXR-005-kanban-board-formatting-and-governance",
        children: "UXR-005"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "ID"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Exemption"
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
            children: "Y"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "§4.1 file list"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "E2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No new options"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Y"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Implements UXR-005"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "E3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reversible"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Y"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Git revert"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "E4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Spec elsewhere"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Y"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IPP §2 + UXR-005"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "E5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Documented NONE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Y"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "§5.3 — no new ADR"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "3-test-design",
      children: "3. Test design"
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
            children: "Valid pair (short bullets, no blank)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PASS"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Two long bullets without blank"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FAIL with line refs"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Long bullets with blank"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PASS"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T4"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "--fix"
            }), " idempotency"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Second run unchanged"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T5"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["CLI ", (0,jsx_runtime.jsx)(_components.code, {
              children: "--strict"
            }), " exit codes"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0 pass / 1 fail"
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
              children: ["[MANDATORY] Transition E07:S01", ":T09", " ", (0,jsx_runtime.jsx)(_components.code, {
                children: "TODO → IN PROGRESS"
              })]
            }), "; sync kboard row (FR-077)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Task + kboard"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Implement ", (0,jsx_runtime.jsx)(_components.code, {
              children: "kanban_moscow_spacing.py"
            }), " + CLI validator"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RF3"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pytest suite"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "§3"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Delegate from ", (0,jsx_runtime.jsx)(_components.code, {
              children: "validate-documentation-consistency.py"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RF3"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Corpus validate/fix in-scope markdown"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RF1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Evidence log + task doc links"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RF6"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Policy + RW/UKW guides + README"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RF2, RF4, RF5"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Wire non-blocking Step 9 hook in release readiness"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RF4"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "9"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reconcile kanban-completed stale T09 row"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Data hygiene"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Check UXR-005 + task ACs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RF7"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "N"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "[MANDATORY] Reconcile status → COMPLETE"
            }), " with version marker if ACs met; kboard"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Task closure"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "41-files-to-create-or-modify",
      children: "4.1 Files to create or modify"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "packages/frameworks/workflow-mgt/scripts/kanban/kanban_moscow_spacing.py"
        }), " (CREATE)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "packages/frameworks/workflow-mgt/scripts/validation/validate_kanban_moscow_spacing.py"
        }), " (CREATE)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "packages/frameworks/workflow-mgt/scripts/test_kanban_moscow_spacing.py"
        }), " (CREATE)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "scripts/documentation/validate-documentation-consistency.py"
        }), " (UPDATE)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "packages/frameworks/kanban/policies/kanban-governance-policy.md"
        }), " (UPDATE)"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "RW/UKW agent execution guides (UPDATE)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Kanban boards/docs per RF1 (UPDATE as needed)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Host task, UXR-005, fbuboard IPP segment (UPDATE)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "42-dependency-order",
      children: "4.2 Dependency order"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Validator module → tests → corpus fix → docs → AC closure"
      }), "\n"]
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
            children: "Scope"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Tied to"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "D-U1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Host task"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IPP wire, evidence, status"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Step 1, N"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "D-U2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "UXR-005"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AC checkboxes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Step 10"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "D-U3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "kanban-board-guide.md"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Example if needed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RF2"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "D-U4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "kanban-governance-policy.md"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Spacing subsection"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RF2"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "D-U5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RW/UKW agent guides"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Validator command"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RF4, RF5"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "D-U6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "kanban README"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cross-link"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RF2"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "D-U7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "kboard.md, kboard.md"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IPP segment; spacing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RF1, RF7"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "D-U8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "validate-documentation-consistency.py"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Delegate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RF3"
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
            children: "Path"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Purpose"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "D-C1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "This IPP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IPW package"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "D-C2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "docs/maintenance/logs/uxr-005-spacing-20260601.md"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Evidence log"
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
            children: "Topic"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Resolution"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "New ADR"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NONE — EXEMPT per §2.5"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: ".cursorrules"
            }), " Step 9 table"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NONE in v1 — agent guide sufficient"
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
            children: "Publication"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Lifecycle"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "D-C1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "docs/implementation-cycles/IPP-E7S1T9-*.md"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NOT_APPLICABLE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "evergreen"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "D-C2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "docs/maintenance/logs/"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NOT_APPLICABLE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "transient"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Validator"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "packages/frameworks/workflow-mgt/scripts/validation/"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N/A"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
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
          checked: true,
          disabled: true
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "pytest"
        }), " spacing tests pass"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "validate_kanban_moscow_spacing.py --strict"
        }), " PASS on repo"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "UXR-005 AC-1–AC-4 and task AC-1–AC-5 checked"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "validate_ipw_publication_wiring.py --requested E07:S01:T09"
        }), " PASS"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "FR-097: board edits limited to spacing blanks + UXR-005 prune (fbuboard/kboard row removal); no batch stamp rewrites"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "references",
      children: "References"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/fr-br/UXR-005-kanban-board-formatting-and-governance",
          children: "UXR-005"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsxs)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-07/story-01-codebase-maintenance-tasks/E07S01T09-kanban-template-governance",
          children: ["E07:S01", ":T09", " task"]
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/fr-br/BR-076-e7-s00-must-not-host-concrete-tasks",
          children: "BR-076"
        }), " (detasking context)"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/architecture/standards-and-adrs/ipw-adr-necessity-checklist",
          children: "ipw-adr-necessity-checklist.md"
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/kanban-board-guide",
          children: "kanban-board-guide.md"
        }), " § Formatting Governance"]
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