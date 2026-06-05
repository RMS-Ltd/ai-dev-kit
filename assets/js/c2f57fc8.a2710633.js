"use strict";
(self["webpackChunkportal"] = self["webpackChunkportal"] || []).push([["21938"], {
49131(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_project_management_kanban_fr_br_fr_100_ipw_adr_necessity_checklist_and_decision_gate_md_c2f_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-project-management-kanban-fr-br-fr-100-ipw-adr-necessity-checklist-and-decision-gate-md-c2f.json
var site_docs_project_management_kanban_fr_br_fr_100_ipw_adr_necessity_checklist_and_decision_gate_md_c2f_namespaceObject = JSON.parse('{"id":"project-management/kanban/fr-br/FR-100-ipw-adr-necessity-checklist-and-decision-gate","title":"FR-100: IPW ADR necessity checklist and measurable decision gate","description":"Type: Feature Request (FR)","source":"@site/../docs/project-management/kanban/fr-br/FR-100-ipw-adr-necessity-checklist-and-decision-gate.md","sourceDirName":"project-management/kanban/fr-br","slug":"/project-management/kanban/fr-br/FR-100-ipw-adr-necessity-checklist-and-decision-gate","permalink":"/ai-dev-kit/docs/project-management/kanban/fr-br/FR-100-ipw-adr-necessity-checklist-and-decision-gate","draft":false,"unlisted":false,"editUrl":"https://github.com/RMS-Ltd/ai-dev-kit/tree/main/docs/../docs/project-management/kanban/fr-br/FR-100-ipw-adr-necessity-checklist-and-decision-gate.md","tags":[],"version":"current","frontMatter":{"lifecycle":"evergreen","ttl_days":null,"created_at":"2026-05-26T18:00:00.000Z","expires_at":null,"housekeeping_policy":"keep"},"sidebar":"docsSidebar","previous":{"title":"FR-099: Spin off book epic to a private repository","permalink":"/ai-dev-kit/docs/project-management/kanban/fr-br/FR-099-spin-off-book-epic-to-private-repository"},"next":{"title":"FR-101: Consolidate governance under docs/governance/","permalink":"/ai-dev-kit/docs/project-management/kanban/fr-br/FR-101-consolidate-governance-under-docs-governance"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ../docs/project-management/kanban/fr-br/FR-100-ipw-adr-necessity-checklist-and-decision-gate.md


const frontMatter = {
	lifecycle: 'evergreen',
	ttl_days: null,
	created_at: new Date('2026-05-26T18:00:00.000Z'),
	expires_at: null,
	housekeeping_policy: 'keep'
};
const contentTitle = 'FR-100: IPW ADR necessity checklist and measurable decision gate';

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
  "value": "Proposed Solution",
  "id": "proposed-solution",
  "level": 2
}, {
  "value": "Decision model (hybrid — primary positive triggers, narrow exemption)",
  "id": "decision-model-hybrid--primary-positive-triggers-narrow-exemption",
  "level": 3
}, {
  "value": "Artifact type ladder (decision aid — include in policy doc)",
  "id": "artifact-type-ladder-decision-aid--include-in-policy-doc",
  "level": 3
}, {
  "value": "IPW integration",
  "id": "ipw-integration",
  "level": 3
}, {
  "value": "Deliverables (implementation — owned by E02:S16)",
  "id": "deliverables-implementation--owned-by-e02s16",
  "level": 3
}, {
  "value": "Acceptance Criteria",
  "id": "acceptance-criteria",
  "level": 2
}, {
  "value": "Dependencies",
  "id": "dependencies",
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
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
    hr: "hr",
    input: "input",
    li: "li",
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
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "fr-100-ipw-adr-necessity-checklist-and-measurable-decision-gate",
        children: "FR-100: IPW ADR necessity checklist and measurable decision gate"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Type:"
      }), " Feature Request (FR)", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "ID:"
      }), " FR-100", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Submitted:"
      }), " 2026-05-26", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Submitted By:"
      }), " User (planning session — IPW documentation and architecture capture)", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Priority:"
      }), " HIGH", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Severity:"
      }), " MEDIUM", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Status:"
      }), " RESOLVED (v0.2.16.12+2 — E02:S16", ":T12", ")"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Implementing Task:"
      }), " ", (0,jsx_runtime.jsxs)(_components.a, {
        href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-02/story-16-perpetual-ongoing-workflow-operations/T12-ipw-adr-necessity-checklist-fr100",
        children: ["E02:S16", ":T12"]
      }), " (v0.2.16.12+2)"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Related:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/project-management/kanban/fr-br/FR-042-implementation-planning-workflow-ipw",
        children: "FR-042"
      }), ", ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/project-management/kanban/fr-br/FR-096-ipw-documentation-phases-update-create-and-housing",
        children: "FR-096"
      }), ", ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/project-management/kanban/fr-br/FR-094-ipw-slash-command-and-task-state-transition-mandate",
        children: "FR-094"
      }), ", ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/architecture/standards-and-adrs/ADR-004-ipp-state-transition-contract",
        children: "ADR-004"
      }), " (example of IPW-adjacent decision warranting ADR)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Add a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "measurable, hybrid ADR decision gate"
      }), " to IPW so every planning run explicitly decides whether an Architecture Decision Record is ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "required"
      }), ", ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "exempt"
      }), " (with evidence), or ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "already covered"
      }), " by an existing ADR/policy—instead of vague “ADR if needed” guidance."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "problem-statement",
      children: "Problem Statement"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["FR-096 operationalized IPW ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "documentation inventory and housing"
      }), " (Phases 5–6, IPP §5–§6). Phase 5 can list ", (0,jsx_runtime.jsx)(_components.code, {
        children: "CREATE"
      }), " rows for ADRs, but there is ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "no binary, auditable criteria"
      }), " for when an ADR is mandatory vs when IPP §2 specification alone is sufficient."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Failure modes observed in practice:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Cross-cutting workflow decisions (e.g. IPP state transitions) ship as IPP/policy only until retroactively elevated to ADR-004."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Agents and reviewers use subjective “ADR if needed” (see ", (0,jsx_runtime.jsx)(_components.code, {
          children: "code-review-checklist-templates.md"
        }), ") with no Phase 9 validation hook."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Exemption-only mental models encourage skipping ADRs for decisions that set precedent or affect multiple surfaces."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "proposed-solution",
      children: "Proposed Solution"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "decision-model-hybrid--primary-positive-triggers-narrow-exemption",
      children: "Decision model (hybrid — primary positive triggers, narrow exemption)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Default:"
      }), " No new ADR until the checklist is scored."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Primary gate — positive triggers (any YES → ADR required in §5 as CREATE or UPDATE):"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "ID"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Trigger"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Measurable test"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Alternatives"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "≥2 viable approaches; task selects one"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Reversibility"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Undo touches multiple modules, packages, adopters, or data/API contracts"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Blast radius"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Beyond single task file list in §4.1 (framework package, multi-epic, adopter surface)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Precedent"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Future work will cite this as canonical “how we do X”"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Constraint trade-off"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Explicit trade among security, performance, operability, agent ergonomics, versioning"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Governance contract"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Changes RW, IPW, UKW, validators, or global implementation gates"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Supersedes"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Narrows or contradicts existing ADR/policy without supersession note"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsxs)(_components.strong, {
        children: ["Secondary gate — exemption (all positive triggers NO ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "and"
        }), " all pass):"]
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "ID"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Exemption rule"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Measurable test"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "E1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Single locus"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Decision confined to §4.1 file list"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "E2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "No new options"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Implements existing ADR/policy/FR/IPP §2 only"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "E3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Reversible in one task"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Rollback = normal revert without migration/adopter notice"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "E4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Spec elsewhere"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IPP §2 + task AC (or one policy section) is authoritative"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "E5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Documented NONE"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["§5.3 cites governing doc; ", (0,jsx_runtime.jsx)(_components.code, {
              children: "ADR decision: EXEMPT"
            }), " recorded"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "artifact-type-ladder-decision-aid--include-in-policy-doc",
      children: "Artifact type ladder (decision aid — include in policy doc)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Outcome"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Home"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Task-scoped behavior"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IPP §2 + task AC"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Repeatable multi-task rule"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Policy update or new policy"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Choice among options with lasting cost"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ADR (new or update)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "ipw-integration",
      children: "IPW integration"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["New ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Phase 5.0 — ADR necessity decision"
        }), " (after Phase 4, before or merged with Phase 5 documentation inventory)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Persist scores in IPP ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "§2.5 ADR decision"
        }), " (or dedicated subsection) and mirror outcome in ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "§5"
        }), " (ADR row mandatory when REQUIRED)."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Phase 9 validation: if any T1–T7 is YES, §5 must include ADR CREATE/UPDATE; if EXEMPT, §5.3 + exemption checklist present."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "deliverables-implementation--owned-by-e02s16",
      children: ["Deliverables (implementation — owned by E02:S16", ":T12", ")"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Artifact"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Action"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "docs/architecture/standards-and-adrs/ipw-adr-necessity-checklist.md"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CREATE — canonical measurable criteria"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: ".claude/commands/ipw.md"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "UPDATE — Phase 5.0 + gates"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "implementation-planning-workflow-agent-execution.md"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "UPDATE — phase table + ADR section"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "PLAN_DOC_TEMPLATE.md"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "UPDATE — §2.5 + §5 cross-reference"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "FR-042-implementation-planning-workflow-ipw.md"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "UPDATE — formal step"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "specification-and-planning-artifacts-policy.md"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "UPDATE — ADR gate reference"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "code-review-checklist-templates.md"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "UPDATE — replace “ADR if needed” with checklist link"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Optional (non-blocking): lightweight validator script or IPW Phase 9 checklist extension in a follow-on task."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "acceptance-criteria",
      children: "Acceptance Criteria"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      className: "contains-task-list",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "AC1:"
        }), " Evergreen policy ", (0,jsx_runtime.jsx)(_components.code, {
          children: "ipw-adr-necessity-checklist.md"
        }), " documents T1–T7, E1–E5, artifact ladder, and REQUIRED vs EXEMPT outcomes."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "AC2:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "/ipw"
        }), " defines Phase 5.0 (or equivalent) with mandatory gate before Phase 5 documentation inventory completes."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "AC3:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "PLAN_DOC_TEMPLATE.md"
        }), " includes ADR decision section wired to §5 ADR deliverable rows."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "AC4:"
        }), " Phase 9 validation bullets cover trigger/evidence consistency."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "AC5:"
        }), " FR-042 step table aligned with operational IPW phases."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "AC6:"
        }), " FR-100 ↔ E02:S16", ":T12", " bidirectionally linked; story checklist updated."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "AC7:"
        }), " Delivered via RW with version forensic marker on task (when implementation completes)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "dependencies",
      children: "Dependencies"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Blocked By:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/project-management/kanban/fr-br/FR-096-ipw-documentation-phases-update-create-and-housing",
        children: "FR-096"
      }), " (COMPLETE — Phases 5–6 baseline)", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Blocks:"
      }), " None", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Related:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/project-management/kanban/fr-br/FR-042-implementation-planning-workflow-ipw",
        children: "FR-042"
      }), ", ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/architecture/standards-and-adrs/ADR-004-ipp-state-transition-contract",
        children: "ADR-004"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "references",
      children: "References"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/fr-br/FR-042-implementation-planning-workflow-ipw",
          children: "FR-042"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/fr-br/FR-096-ipw-documentation-phases-update-create-and-housing",
          children: "FR-096"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/architecture/standards-and-adrs/specification-and-planning-artifacts-policy",
          children: "specification-and-planning-artifacts-policy.md"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: ".claude/commands/ipw.md"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "packages/frameworks/kanban/templates/PLAN_DOC_TEMPLATE.md"
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