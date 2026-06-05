"use strict";
(self["webpackChunkportal"] = self["webpackChunkportal"] || []).push([["71518"], {
42645(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_project_management_kanban_fr_br_fr_042_implementation_planning_workflow_ipw_md_3b5_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-project-management-kanban-fr-br-fr-042-implementation-planning-workflow-ipw-md-3b5.json
var site_docs_project_management_kanban_fr_br_fr_042_implementation_planning_workflow_ipw_md_3b5_namespaceObject = JSON.parse('{"id":"project-management/kanban/fr-br/FR-042-implementation-planning-workflow-ipw","title":"Feature Request: Implementation Planning Workflow (IPW)","description":"Type: Feature Request (FR)","source":"@site/../docs/project-management/kanban/fr-br/FR-042-implementation-planning-workflow-ipw.md","sourceDirName":"project-management/kanban/fr-br","slug":"/project-management/kanban/fr-br/FR-042-implementation-planning-workflow-ipw","permalink":"/ai-dev-kit/docs/project-management/kanban/fr-br/FR-042-implementation-planning-workflow-ipw","draft":false,"unlisted":false,"editUrl":"https://github.com/RMS-Ltd/ai-dev-kit/tree/main/docs/../docs/project-management/kanban/fr-br/FR-042-implementation-planning-workflow-ipw.md","tags":[],"version":"current","frontMatter":{"lifecycle":"evergreen","ttl_days":null,"created_at":"2026-02-22T00:00:00.000Z","expires_at":null,"housekeeping_policy":"keep"},"sidebar":"docsSidebar","previous":{"title":"FR-041: Windsurf: Investigate how to leverage AGENTS.md and SKILL.md for workflows","permalink":"/ai-dev-kit/docs/project-management/kanban/fr-br/FR-041-windsurf-investigate-agents-skills-for-workflows"},"next":{"title":"Feature Request: UKW Gap Discovery – TODO Tasks and Unfiled FR/BR","permalink":"/ai-dev-kit/docs/project-management/kanban/fr-br/FR-043-ukw-gap-discovery-todo-tasks-and-unfiled-fr-br"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ../docs/project-management/kanban/fr-br/FR-042-implementation-planning-workflow-ipw.md


const frontMatter = {
	lifecycle: 'evergreen',
	ttl_days: null,
	created_at: new Date('2026-02-22T00:00:00.000Z'),
	expires_at: null,
	housekeeping_policy: 'keep'
};
const contentTitle = 'Feature Request: Implementation Planning Workflow (IPW)';

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
  "value": "Proposed Solution: Implementation Planning Workflow (IPW)",
  "id": "proposed-solution-implementation-planning-workflow-ipw",
  "level": 2
}, {
  "value": "1. IPW Definition",
  "id": "1-ipw-definition",
  "level": 3
}, {
  "value": "2. Formalized IPW Steps (Ordered)",
  "id": "2-formalized-ipw-steps-ordered",
  "level": 3
}, {
  "value": "Mandatory Bidirectional Wiring",
  "id": "mandatory-bidirectional-wiring",
  "level": 4
}, {
  "value": "3. Plan Doc Template (Proposed)",
  "id": "3-plan-doc-template-proposed",
  "level": 3
}, {
  "value": "4. Analysis of Past Planning Docs",
  "id": "4-analysis-of-past-planning-docs",
  "level": 3
}, {
  "value": "5. IPW Integration with Implementation Cycle",
  "id": "5-ipw-integration-with-implementation-cycle",
  "level": 3
}, {
  "value": "6. IPW Deliverables",
  "id": "6-ipw-deliverables",
  "level": 3
}, {
  "value": "7. Consolidation with ICW (Implementation Cycle Workflow)",
  "id": "7-consolidation-with-icw-implementation-cycle-workflow",
  "level": 3
}, {
  "value": "8. Artifact packaging: ICW trio vs consolidated IPP",
  "id": "8-artifact-packaging-icw-trio-vs-consolidated-ipp",
  "level": 3
}, {
  "value": "Use Cases",
  "id": "use-cases",
  "level": 2
}, {
  "value": "Requirements",
  "id": "requirements",
  "level": 2
}, {
  "value": "Functional Requirements",
  "id": "functional-requirements",
  "level": 3
}, {
  "value": "Non-Functional Requirements",
  "id": "non-functional-requirements",
  "level": 3
}, {
  "value": "Acceptance Criteria",
  "id": "acceptance-criteria",
  "level": 2
}, {
  "value": "Scope Analysis",
  "id": "scope-analysis",
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
    blockquote: "blockquote",
    br: "br",
    code: "code",
    em: "em",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    h4: "h4",
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
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "feature-request-implementation-planning-workflow-ipw",
        children: "Feature Request: Implementation Planning Workflow (IPW)"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Type:"
      }), " Feature Request (FR)", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Identifier:"
      }), " IPW (Implementation Planning Workflow)", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Submitted:"
      }), " 2026-02-22", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Submitted By:"
      }), " User", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Priority:"
      }), " HIGH", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Severity:"
      }), " HIGH", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Status:"
      }), " COMPLETE", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Last updated:"
      }), " 2026-05-20 — §8 ICW trio vs consolidated IPP; ", (0,jsx_runtime.jsx)(_components.code, {
        children: "dev-kit-ipw-ipp-vs-icw-artifacts.md"
      }), "; RW ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "v0.2.16.3+6"
      }), " traceability.", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Implementation Task:"
      }), " ", (0,jsx_runtime.jsxs)(_components.a, {
        href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-05/story-01-fr-repo/T42-implementation-planning-workflow-ipw",
        children: ["E05:S01", ":T42"]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Define and implement an ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Implementation Planning Workflow (IPW)"
      }), " – a formal workflow for creating planning documents (spec, test design, implementation plan) before task implementation. IPW ensures planning artifacts are produced consistently and integrate with the Implementation Cycle (spec + TDD). ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Critical:"
      }), " The task doc and plan doc ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "must be bidirectionally wired"
      }), " – the task doc must reference the plan doc (Input, References), and the plan doc must reference the task doc (Host Task). Both links are mandatory; a plan doc is not complete without them. Planning must not be ad hoc; it must be a repeatable, traceable workflow."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Strategic consolidation:"
      }), " The former ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Implementation Cycle Workflow (ICW)"
      }), "—three-phase specification / test design / implementation planning under the ICW name—is ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "merged into IPW"
      }), ". ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "IPW"
      }), " (", (0,jsx_runtime.jsx)(_components.code, {
        children: "IPW"
      }), " or ", (0,jsx_runtime.jsx)(_components.code, {
        children: "IPW E:S:T"
      }), ") is the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "canonical"
      }), " user-facing planning workflow. ICW-specific packaging (e.g. ", (0,jsx_runtime.jsx)(_components.code, {
        children: "implementation-cycle-workflow"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "icw_handler.py"
      }), ", Cursor ", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "ICW"
        })
      }), " trigger) must be ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "deprecated, aliased to IPW, or documented as legacy"
      }), " so there is only one planning workflow to learn and maintain. ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "RW"
      }), " remains canonical for release; ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "implementation"
      }), " follows the Implementation Cycle (TDD, etc.) guided by IPW artifacts, not by a second parallel “planning” workflow brand."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "problem-statement",
      children: "Problem Statement"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Current Situation:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Two overlapping concepts exist for the same intent: ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "ICW"
        }), " (FR-040, framework workflow + handler + ", (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "ICW"
          })
        }), " trigger) and ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "IPW"
        }), " (this FR)—both target structured planning before implementation, which splits documentation and cognitive load"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Planning documents (spec/test/impl plans) are created informally and inconsistently"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["No defined workflow for ", (0,jsx_runtime.jsx)(_components.em, {
          children: "when"
        }), " or ", (0,jsx_runtime.jsx)(_components.em, {
          children: "how"
        }), " to create a plan doc"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Plan docs are often created without being wired to their host task doc"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Fundamental failure:"
        }), " Plan docs exist with no cross-reference in the task doc, and no link back – breaks traceability and discoverability"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implementation Cycle (Step 3: Spec & Test Creation) exists but lacks a formal planning workflow that produces a durable plan document"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Root Causes:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "No workflow or SoP for implementation planning"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "No enforcement of mandatory wiring at creation time"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Planning is treated as optional or implicit rather than a first-class workflow"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Gap between \"ascertain spec, create tests\" (Implementation Cycle) and producing a reusable plan document"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Impact:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Orphaned plan docs (exist but not discoverable from task)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Inconsistent planning quality and completeness"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Violates bidirectional wiring principle"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Weakens traceability between planning and implementation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implementation Cycle Step 3 lacks a clear planning artifact"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "proposed-solution-implementation-planning-workflow-ipw",
      children: "Proposed Solution: Implementation Planning Workflow (IPW)"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1-ipw-definition",
      children: "1. IPW Definition"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "IPW"
      }), " is the workflow for creating an ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "implementation plan document"
      }), " before implementation begins. It sits between Task Creation (Implementation Cycle Step 2) and Specification & Test Creation (Step 3), and produces the planning artifact that guides Step 3 and Step 4."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "IPW Trigger:"
      }), " User invokes ", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "IPW"
        })
      }), " (or ", (0,jsx_runtime.jsx)(_components.code, {
        children: "IPW ExxSxxTxx"
      }), "). This replaces the previous ad hoc instruction:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "\"Plan ExxSxxTxx: Ascertain requirements, define spec, design tests, plan impl\""
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["It also ", (0,jsx_runtime.jsxs)(_components.strong, {
        children: ["replaces the ", (0,jsx_runtime.jsx)(_components.code, {
          children: "ICW"
        }), " trigger for planning"]
      }), ": users and docs should prefer ", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "IPW"
        })
      }), "; ", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "ICW"
        })
      }), " may remain temporarily as an alias but must not define a divergent planning process."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "IPW Output:"
      }), " A plan document containing:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Specification"
        }), " – Functional and non-functional requirements, scope, boundaries"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Test Design"
        }), " – Test categories, test cases, test data strategy"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Implementation Plan"
        }), " – Phases, steps, dependency order, files to create/modify"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "2-formalized-ipw-steps-ordered",
      children: "2. Formalized IPW Steps (Ordered)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Name"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "0"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Identify Host Task"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Resolve E:S", ":T", " from user input or context; confirm task doc exists"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "1"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ascertain Requirements"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Consolidate and confirm ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "functional"
            }), " and ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "non-functional"
            }), " requirement statements/invariants from task, FR/BR context, and acceptance criteria before drafting specification"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "2"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Define Spec"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Populate Spec section: Goal, Functional Requirements, Non-Functional (if applicable), Out of Scope"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "3"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Design Tests"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Populate Test Design: categories, test cases (TC/Name/Behavior), test data strategy"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "4"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Plan Implementation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Populate Impl Plan: phases, steps, dependency order, files to create/modify"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "4.5"
            }), " (Phase ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "5.0"
            }), ")"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ADR Necessity Decision"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Score T1–T7 / E1–E5 per ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ai-dev-kit/docs/architecture/standards-and-adrs/ipw-adr-necessity-checklist",
              children: "ipw-adr-necessity-checklist.md"
            }), " (FR-100); record outcome in IPP §2.5; if REQUIRED, ADR row in §5 before doc inventory completes"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "5"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Documentation Update and Creation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Inventory existing docs; classify UPDATE / CREATE / NONE; gap analysis; deliverables table from requirements, spec, tests, and impl plan"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "6"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "House Documentation"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Map each deliverable to canonical path in the documentation system; set publication status (", (0,jsx_runtime.jsx)(_components.code, {
              children: "PUBLISHED"
            }), " | ", (0,jsx_runtime.jsx)(_components.code, {
              children: "NOT_APPLICABLE"
            }), "); resolve housing conflicts"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "7"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Create Plan Doc"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Write IPP using template (§1–§7); include header with Task ID, Host Task link"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "8"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Wire to Host Task"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Add plan doc to task doc Input and References; add Host Task in plan doc header; publication fields when applicable (BR-066)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "9"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Validate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Confirm bidirectional wiring; confirm required sections present (including §5–§6)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "mandatory-bidirectional-wiring",
      children: "Mandatory Bidirectional Wiring"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Both directions MUST be wired – neither is optional."
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Direction"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Where"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "What to add"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Task doc → Plan doc"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Task doc ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Input"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Link to plan doc (e.g. ", (0,jsx_runtime.jsx)(_components.code, {
              children: "[T07-planning-spec-tests-impl.md](../epics/epic-04/story-11-kanban-granularity-discrete-task-docs/T07-planning-spec-tests-impl.md)"
            }), ")"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Task doc → Plan doc"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Task doc ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "References"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Same link"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Plan doc → Task doc"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Plan doc header"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "**Host Task:** [T07-planning-spec-tests-impl.md](../epics/epic-04/story-11-kanban-granularity-discrete-task-docs/T07-planning-spec-tests-impl.md) (E04:S11:T07)"
            })
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Task doc must link to plan doc"
        }), " – Otherwise the plan is orphaned; developers cannot discover it from the task."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Plan doc must link to task doc"
        }), " – Otherwise the plan lacks context; the host task cannot be identified."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Wiring is ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "atomic"
        }), ": both directions are completed in the same session. A plan doc is ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "not complete"
        }), " until both links exist."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "3-plan-doc-template-proposed",
      children: "3. Plan Doc Template (Proposed)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Header (required):"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Task title (", (0,jsx_runtime.jsx)(_components.code, {
          children: "E\\{epic\\}:S\\{story\\}:T\\{task\\}"
        }), " – Planning: Spec, Tests, Implementation Plan)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Host Task:"
        }), " relative path to the host task doc (", (0,jsx_runtime.jsx)(_components.code, {
          children: "E\\{epic\\}:S\\{story\\}:T\\{task\\}"
        }), ") — link to the task markdown file (bidirectional wiring)"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Status"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Planning doc created date"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Sections (required):"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Requirements (Ascertained Baseline)"
        }), " – Functional and non-functional requirements, invariants, scope"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Specification"
        }), " – Goal, mapping from requirements, constraints, status transition intent"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Test Design"
        }), " – Test cases (or ", (0,jsx_runtime.jsx)(_components.code, {
          children: "--skip-tests"
        }), " justification)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Implementation Plan"
        }), " – Phases (table: Step/Action/Deliverable), dependency order, files to create/modify"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Documentation Deliverables"
        }), " – UPDATE / CREATE / NONE inventory and gap analysis (IPW Phase 5)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Documentation Housing"
        }), " – Canonical paths, publication status, lifecycle, inbound links (IPW Phase 6)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Success/Verification Criteria"
        }), " – Includes doc deliverable verification where applicable"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "4-analysis-of-past-planning-docs",
      children: "4. Analysis of Past Planning Docs"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Examples analyzed:"
      }), " T07-planning-spec-tests-impl.md, T01-planning-spec-tests-impl.md, PIR-workflow-planning.md, migration-plan-embedded-to-discrete-tasks.md"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Good practice (T07, T01):"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Consistent 3-section structure (Spec, Test Design, Impl Plan)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Functional requirements table with IDs and sources"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Test cases table with TC, Name, Behavior"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implementation phases with step/action/deliverable"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Dependency order diagram"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Out of scope explicitly stated"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Script interfaces (T07), Files to create/modify"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Bad practice / gaps:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "T01 initially lacked Host Task link (unwired)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "PIR-workflow-planning uses different structure (Executive Summary, Workflow Scope) – more design doc than spec/test/impl"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Migration-plan has TBD placeholders; analysis sections not aligned with spec/test/impl pattern"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "No standard template enforced; structure varies"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Proposed canonical structure:"
      }), " Adopt T07/T01 pattern as baseline; add mandatory Host Task in header; require Verification/Success Criteria section."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "5-ipw-integration-with-implementation-cycle",
      children: "5. IPW Integration with Implementation Cycle"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Implementation Cycle Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "IPW Relationship"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Step 2: Task Creation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Host task must exist before IPW"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Step 3a: Ascertain Requirements"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Plan doc requirement baseline captures functional and non-functional requirements"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Step 3b: Ascertain Specification"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Plan doc Spec section formalizes the ascertained requirement baseline"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Step 3c: Create Tests"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Plan doc Test Design guides this"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Step 4: Implementation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Plan doc Impl Plan (including documentation deliverables) guides this"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Step 5: RW"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Unchanged"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "IPW produces the plan document that formalizes and persists the output of requirement ascertainment (functional + non-functional), specification ascertainment, and then guides test creation and implementation."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "6-ipw-deliverables",
      children: "6. IPW Deliverables"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "IPW SoP or Workflow Doc"
        }), " – Step-by-step workflow with checklist"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Plan Doc Template"
        }), " – Required structure (Spec, Test Design, Impl Plan, Host Task)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Wiring Rules"
        }), " – Mandatory bidirectional wiring, validation"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Integration"
        }), " – Reference from Implementation Cycle SoP, .cursorrules, create-rule/create-skill"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "ICW deprecation / alias package"
        }), " – See §7"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "7-consolidation-with-icw-implementation-cycle-workflow",
      children: "7. Consolidation with ICW (Implementation Cycle Workflow)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Before"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "After (target state)"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Canonical planning brand"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ICW + IPW (overlapping)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "IPW only"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "User / agent trigger"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "ICW"
            }), " and informal “plan task X”"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsxs)(_components.strong, {
              children: [(0,jsx_runtime.jsx)(_components.code, {
                children: "IPW"
              }), " / ", (0,jsx_runtime.jsx)(_components.code, {
                children: "IPW E:S:T"
              })]
            }), " (required); ", (0,jsx_runtime.jsx)(_components.code, {
              children: "ICW"
            }), " = deprecated or thin alias"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Artifacts"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["ICW templates / ", (0,jsx_runtime.jsx)(_components.code, {
              children: "docs/implementation-cycles/*"
            }), " ad hoc + IPW plan doc"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "One durable plan doc"
            }), " per host task, bidirectionally wired (IPW); legacy ICW paths may redirect or merge"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Task binding"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["FR-048 / ", (0,jsx_runtime.jsx)(_components.code, {
              children: "icw_handler"
            }), " task-id rules"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Same ", (0,jsx_runtime.jsxs)(_components.strong, {
              children: ["mandatory E:S", ":T", " binding"]
            }), " applies to ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "IPW"
            }), " sessions"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Framework package"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "implementation-cycle-workflow"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "icw_handler.py"
            }), ", registry ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "ICW"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Document as ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "legacy or adapter"
            }), "; eventually fold useful mechanics into IPW tooling ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "or"
            }), " stub with “use IPW” guidance"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Release / implementation"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RW + Implementation Cycle"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Unchanged"
            }), " — IPW does not replace RW or TDD"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Rationale:"
      }), " One planning workflow reduces cognitive load and duplicate docs. ICW’s ", (0,jsx_runtime.jsx)(_components.em, {
        children: "planning"
      }), " responsibilities (spec → test design → impl plan, planning-mode agent guidance) are the same scope as IPW; ICW as a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "separate"
      }), " product is redundant."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "8-artifact-packaging-icw-trio-vs-consolidated-ipp",
      children: "8. Artifact packaging: ICW trio vs consolidated IPP"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Durable planning output may appear in either form under ", (0,jsx_runtime.jsx)(_components.code, {
        children: "docs/implementation-cycles/"
      }), ", provided the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "host task"
      }), " links to it and the artifact links back (", (0,jsx_runtime.jsxs)(_components.strong, {
        children: ["FR-042", ":R04", "–R05"]
      }), "):"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Form"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Files"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Notes"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "IPP"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Single ", (0,jsx_runtime.jsx)(_components.code, {
              children: "IPP-E\\{epic\\}S\\{story\\}T\\{task\\}-\\{slug\\}.md"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Canonical for ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "ai-dev-kit"
            }), " runs that follow ", (0,jsx_runtime.jsx)(_components.code, {
              children: ".claude/commands/ipw.md"
            }), " Phase 7 (", (0,jsx_runtime.jsx)(_components.code, {
              children: "PLAN_DOC_TEMPLATE.md"
            }), "). Sections 1–7 carry requirements, specification, test design, implementation plan, documentation deliverables, documentation housing, and success criteria (optional §8 for perpetual rolling backlog)."]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "ICW trio"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "ICW-*-specification.md"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "-test-design.md"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "-implementation-plan.md"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Valid for retrospective splits, multi-file review, or legacy packages. May be ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "superseded"
            }), " by a later IPP that consolidates content (cite superseded paths in the IPP)."]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Global Implementation Gate"
      }), " (", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/AGENTS.md",
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "AGENTS.md"
        })
      }), ") treats ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "either"
      }), " form as satisfying precondition “IPW package” when linked from the task. Full matrix: ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/architecture/standards-and-adrs/dev-kit-ipw-ipp-vs-icw-artifacts.md",
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "dev-kit-ipw-ipp-vs-icw-artifacts.md"
        })
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "use-cases",
      children: "Use Cases"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Planning for E04:S11:T07:"
        }), " User requests plan → Agent runs IPW → Creates ", (0,jsx_runtime.jsx)(_components.code, {
          children: "T07-planning-spec-tests-impl.md"
        }), " with spec, tests, impl → Wires to T07 task doc (Input, References) and adds Host Task in plan → Plan discoverable from task and vice versa"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Starting implementation:"
        }), " Developer opens task doc → Sees plan doc in Input/References → Navigates to spec, test design, impl plan → Follows plan for Step 3 and 4"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Validating planning completeness:"
        }), " Automated or manual check ensures no plan doc exists without task doc reference, and wiring is bidirectional"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Cursor/Agent trigger:"
        }), " User types ", (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "IPW"
          })
        }), " or ", (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "IPW E:S:T"
          })
        }), " → Agent executes IPW workflow (replaces \"Plan ExxSxxTxx: Define spec, design tests, plan impl\" and supersedes ", (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "ICW"
          })
        }), " for that purpose)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Migrating from ICW:"
        }), " Maintainer renames or aliases ", (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "ICW"
          })
        }), " in ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".cursorrules"
        }), " to IPW, updates workflow-registry/README lines for ICW to point at IPW consolidation, and aligns FR-040 / FR-048 text to “planning via IPW” where appropriate"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "requirements",
      children: "Requirements"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "functional-requirements",
      children: "Functional Requirements"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      className: "contains-task-list",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", (0,jsx_runtime.jsxs)(_components.strong, {
          children: ["FR-042", ":R01"]
        }), " - IPW workflow documented (SoP, workflow doc, or equivalent)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", (0,jsx_runtime.jsxs)(_components.strong, {
          children: ["FR-042", ":R02"]
        }), " - Plan doc template defined with required sections (Spec, Test Design, Impl Plan, Host Task)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", (0,jsx_runtime.jsxs)(_components.strong, {
          children: ["FR-042", ":R03"]
        }), " - Plan docs MUST include \"Host Task\" link to host task document in header"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", (0,jsx_runtime.jsxs)(_components.strong, {
          children: ["FR-042", ":R04"]
        }), " - Host task doc MUST reference plan doc in Input and References upon plan doc creation"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", (0,jsx_runtime.jsxs)(_components.strong, {
          children: ["FR-042", ":R05"]
        }), " - Plan doc MUST reference host task doc in header (Host Task link) – ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "bidirectional wiring is mandatory; both directions required"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", (0,jsx_runtime.jsxs)(_components.strong, {
          children: ["FR-042", ":R05a"]
        }), " - Wiring is atomic: plan doc creation and task doc update happen in same IPW session"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", (0,jsx_runtime.jsxs)(_components.strong, {
          children: ["FR-042", ":R06"]
        }), " - IPW integrated with Implementation Cycle (reference from implementation-cycle-sop, .cursorrules)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", (0,jsx_runtime.jsxs)(_components.strong, {
          children: ["FR-042", ":R07"]
        }), " - Validation mechanism or checklist to detect unwired plan docs"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", (0,jsx_runtime.jsxs)(_components.strong, {
          children: ["FR-042", ":R08"]
        }), " - Cursor rules/skills or documentation reference IPW for plan doc creation"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", (0,jsx_runtime.jsxs)(_components.strong, {
          children: ["FR-042", ":R14"]
        }), " - Canonical IPW planning sequence includes an explicit ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Ascertain Requirements"
        }), " step before ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Define Spec"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", (0,jsx_runtime.jsxs)(_components.strong, {
          children: ["FR-042", ":R09"]
        }), " - Instruction ", (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "IPW"
          })
        }), " (or ", (0,jsx_runtime.jsx)(_components.code, {
          children: "IPW ExxSxxTxx"
        }), ") replaces \"Plan ExxSxxTxx: Ascertain requirements, define spec, design tests, plan impl\" as the canonical trigger"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", (0,jsx_runtime.jsxs)(_components.strong, {
          children: ["FR-042", ":R10"]
        }), " - ", (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "ICW"
          })
        }), " is ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "not"
        }), " a parallel planning workflow: ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".cursorrules"
        }), " (and adopter equivalents) state ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "IPW canonical"
        }), "; ", (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "ICW"
          })
        }), " is removed, folded into IPW wording, or documented as ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "deprecated alias"
        }), " only (same steps as IPW)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", (0,jsx_runtime.jsxs)(_components.strong, {
          children: ["FR-042", ":R11"]
        }), " - Packaged workflow docs (", (0,jsx_runtime.jsx)(_components.code, {
          children: "workflow-registry.yaml"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "implementation-cycle-workflow/README.md"
        }), " or successor) explain ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "ICW → IPW"
        }), " consolidation and point maintainers to IPW"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", (0,jsx_runtime.jsxs)(_components.strong, {
          children: ["FR-042", ":R12"]
        }), " - ", (0,jsx_runtime.jsxs)(_components.strong, {
          children: ["FR-040 / E05:S01", ":T40"]
        }), " and ", (0,jsx_runtime.jsxs)(_components.strong, {
          children: ["FR-048 / E05:S01", ":T48"]
        }), " cross-reference IPW: task-ID and artifact expectations for planning apply to ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "IPW"
        }), "; ICW-specific phrasing updated where it implied a second planning pipeline"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", (0,jsx_runtime.jsxs)(_components.strong, {
          children: ["FR-042", ":R13"]
        }), " - Optional: ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "technical follow-up"
        }), " — repoint or retire ", (0,jsx_runtime.jsx)(_components.code, {
          children: "icw_handler.py"
        }), " / ICW YAML ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "or"
        }), " wrap as thin IPW helper (config-driven output dir, no duplicate user-facing workflow brand)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "non-functional-requirements",
      children: "Non-Functional Requirements"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      className: "contains-task-list",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", (0,jsx_runtime.jsxs)(_components.strong, {
          children: ["FR-042", ":NF01"]
        }), " - ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Traceability:"
        }), " Plan doc always discoverable from task doc and vice versa"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", (0,jsx_runtime.jsxs)(_components.strong, {
          children: ["FR-042", ":NF02"]
        }), " - ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Consistency:"
        }), " Aligns with bidirectional wiring principle"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", (0,jsx_runtime.jsxs)(_components.strong, {
          children: ["FR-042", ":NF03"]
        }), " - ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Repeatability:"
        }), " IPW is a clear, actionable, repeatable workflow"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", (0,jsx_runtime.jsxs)(_components.strong, {
          children: ["FR-042", ":NF04"]
        }), " - ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Single planning mental model:"
        }), " Adopters can rely on one named workflow (", (0,jsx_runtime.jsx)(_components.strong, {
          children: "IPW"
        }), ") for pre-implementation artifacts"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "acceptance-criteria",
      children: "Acceptance Criteria"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      className: "contains-task-list",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "AC1:"
        }), " IPW workflow documented (SoP or workflow doc with steps and checklist)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "AC2:"
        }), " Plan doc template includes required sections (Spec, Test Design, Impl Plan) and mandatory Host Task link"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "AC3:"
        }), " Task doc template or guidance updated to include plan doc in Input/References when plan exists"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "AC3a:"
        }), " Bidirectional wiring requirement (task↔plan) documented clearly in IPW SoP and plan doc template"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "AC4:"
        }), " Implementation Cycle SoP references IPW for plan doc creation"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "AC5:"
        }), " Existing unwired plan docs (e.g., T07-planning-spec-tests-impl.md) retroactively wired"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "AC6:"
        }), " Cursor rules, create-rule skill, or equivalent references IPW"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "AC7:"
        }), " Validation checklist or script detects unwired plan docs"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "AC8:"
        }), " Plan doc template created at ", (0,jsx_runtime.jsx)(_components.code, {
          children: "packages/frameworks/kanban/templates/PLAN_DOC_TEMPLATE.md"
        }), " (or equivalent) following proposed structure"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "AC9:"
        }), " IPW instruction ", (0,jsx_runtime.jsx)(_components.code, {
          children: "IPW"
        }), " documented as canonical trigger in .cursorrules or create-rule skill"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "AC10:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".cursorrules"
        }), " (ICW section) updated: ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "IPW"
        }), " canonical for planning; ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "ICW"
        }), " deprecated or alias-only, consistent with §7"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "AC11:"
        }), " Framework workflow registry / ICW package README state consolidation; no contradictory “use ICW for planning” without IPW equivalence"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "AC12:"
        }), " ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "FR-040"
        }), " header or notes reference IPW as successor scope for ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "planning"
        }), " (implementation delivery history of T40 may remain historical)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "AC13:"
        }), " IPW docs/SOP language explicitly encode ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Ascertain Requirements"
        }), " as the first planning step before specification"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "scope-analysis",
      children: "Scope Analysis"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem Domain:"
      }), " Implementation Planning, Task Documentation, Workflow Design, Bidirectional Wiring", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Affected Areas:"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      className: "contains-task-list",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "Documentation (IPW workflow, plan doc template)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "Implementation Cycle SoP (integration)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "Task Template (References/Input guidance)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "Plan Doc Template (new or enhanced)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "Validation (optional script)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "Other: Cursor rules, create-rule/create-skill"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Estimated Complexity:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      className: "contains-task-list",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Simple (1-3 days)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "Medium (1 week)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Complex (2+ weeks)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "dependencies",
      children: "Dependencies"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Blocks:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Reliable plan doc discoverability"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Formal planning before implementation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Bidirectional wiring for planning artifacts"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Blocked By:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "None"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Related Work:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Implementation Cycle SoP:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "packages/frameworks/workflow-mgt/KB/Documentation/Developer_Docs/vwmp/implementation-cycle-sop.md"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "FR-035:"
        }), " Task Template Cross-Wiring Section (bidirectional wiring)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "FR-016:"
        }), " Kanban Granularity & Discrete Task Docs (3-tier structure)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "E04:S11:T07:"
        }), " Incident that triggered this FR (plan doc created without wiring)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "create-rule / create-skill:"
        }), " May extend to include IPW"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "FR-040 / E05:S01:T40:"
        }), " Implementation Cycle Workflow (ICW) — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "planning scope merged into IPW"
        }), "; legacy implementation remains historical"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "FR-048 / E05:S01:T48:"
        }), " ICW task identifier — binding applies to ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "IPW"
        }), " planning sessions"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "BR-055 / E04:S14:T03:"
        }), " ICW presence in framework package (historical); consolidation docs should not reintroduce “two planning workflows”"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "E05:S01:T42:"
        }), " Repository anchor task for this FR (implementation + doc alignment)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "references",
      children: "References"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "packages/frameworks/workflow-mgt/KB/Documentation/Developer_Docs/vwmp/implementation-planning-workflow-agent-execution.md"
        }), " – IPW agent execution"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "packages/frameworks/kanban/templates/PLAN_DOC_TEMPLATE.md"
        }), " – Plan doc template"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/architecture/standards-and-adrs/dev-kit-ipw-ipp-vs-icw-artifacts",
          children: "dev-kit-ipw-ipp-vs-icw-artifacts.md"
        }), " – ICW trio vs consolidated IPP (artifact packaging)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "packages/frameworks/workflow-mgt/scripts/validation/validate_plan_wiring.py"
        }), " – AC7 validator"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "packages/frameworks/workflow-mgt/KB/Documentation/Developer_Docs/vwmp/implementation-cycle-sop.md"
        }), " – Implementation Cycle"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "docs/project-management/kanban/epics/epic-04/story-11-kanban-granularity-discrete-task-docs/T07-planning-spec-tests-impl.md"
        }), " – Example plan doc (unwired)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "docs/project-management/kanban/epics/epic-04/story-11-kanban-granularity-discrete-task-docs/T07-planning-spec-tests-impl.md"
        }), " – Host task for T07"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "docs/project-management/kanban/epics/epic-04/story-14-kanban-framework-maintenance/T01-planning-spec-tests-impl.md"
        }), " – Example plan doc"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "packages/frameworks/kanban/templates/TASK_TEMPLATE.md"
        }), " – Task template"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "FR-035: Task Template Cross-Wiring Section"
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