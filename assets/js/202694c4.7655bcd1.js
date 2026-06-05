"use strict";
(self["webpackChunkportal"] = self["webpackChunkportal"] || []).push([["98120"], {
42413(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_project_management_kanban_epics_epic_04_story_11_kanban_granularity_discrete_task_docs_t_07_planning_spec_tests_impl_md_202_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-project-management-kanban-epics-epic-04-story-11-kanban-granularity-discrete-task-docs-t-07-planning-spec-tests-impl-md-202.json
var site_docs_project_management_kanban_epics_epic_04_story_11_kanban_granularity_discrete_task_docs_t_07_planning_spec_tests_impl_md_202_namespaceObject = JSON.parse('{"id":"project-management/kanban/epics/epic-04/story-11-kanban-granularity-discrete-task-docs/T07-planning-spec-tests-impl","title":"E04:S11:T07 – Planning: Spec, Tests, Implementation Plan","description":"Task IDS11:T07","source":"@site/../docs/project-management/kanban/epics/epic-04/story-11-kanban-granularity-discrete-task-docs/T07-planning-spec-tests-impl.md","sourceDirName":"project-management/kanban/epics/epic-04/story-11-kanban-granularity-discrete-task-docs","slug":"/project-management/kanban/epics/epic-04/story-11-kanban-granularity-discrete-task-docs/T07-planning-spec-tests-impl","permalink":"/ai-dev-kit/docs/project-management/kanban/epics/epic-04/story-11-kanban-granularity-discrete-task-docs/T07-planning-spec-tests-impl","draft":false,"unlisted":false,"editUrl":"https://github.com/RMS-Ltd/ai-dev-kit/tree/main/docs/../docs/project-management/kanban/epics/epic-04/story-11-kanban-granularity-discrete-task-docs/T07-planning-spec-tests-impl.md","tags":[],"version":"current","frontMatter":{},"sidebar":"docsSidebar","previous":{"title":"Epic 4, Story 11, Task 6: Review and Optimize Template Structure for Tier Delegation","permalink":"/ai-dev-kit/docs/project-management/kanban/epics/epic-04/story-11-kanban-granularity-discrete-task-docs/T06-review-and-optimize-template-structure-for-tier-delegation"},"next":{"title":"FR-016 Migration Completion Report (Wave 4)","permalink":"/ai-dev-kit/docs/project-management/kanban/epics/epic-04/story-11-kanban-granularity-discrete-task-docs/migration-completion-report"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ../docs/project-management/kanban/epics/epic-04/story-11-kanban-granularity-discrete-task-docs/T07-planning-spec-tests-impl.md


const frontMatter = {};
const contentTitle = 'E04:S11 – Planning: Spec, Tests, Implementation Plan';

const assets = {

};



const toc = [{
  "value": "Scope",
  "id": "scope",
  "level": 2
}, {
  "value": "Input",
  "id": "input",
  "level": 2
}, {
  "value": "Deliverable",
  "id": "deliverable",
  "level": 2
}, {
  "value": "Acceptance Criteria",
  "id": "acceptance-criteria",
  "level": 2
}, {
  "value": "Planning artifacts (publication)",
  "id": "planning-artifacts-publication",
  "level": 2
}, {
  "value": "1. Specification",
  "id": "1-specification",
  "level": 2
}, {
  "value": "1.1 Goal",
  "id": "11-goal",
  "level": 3
}, {
  "value": "1.2 Functional Requirements",
  "id": "12-functional-requirements",
  "level": 3
}, {
  "value": "1.3 Embedded Task Detection Spec",
  "id": "13-embedded-task-detection-spec",
  "level": 3
}, {
  "value": "1.4 Task Document Structure (Canonical)",
  "id": "14-task-document-structure-canonical",
  "level": 3
}, {
  "value": "1.5 Out of Scope",
  "id": "15-out-of-scope",
  "level": 3
}, {
  "value": "2. Test Design",
  "id": "2-test-design",
  "level": 2
}, {
  "value": "2.1 Test Categories",
  "id": "21-test-categories",
  "level": 3
}, {
  "value": "2.2 Test Cases",
  "id": "22-test-cases",
  "level": 3
}, {
  "value": "2.3 Test Data Strategy",
  "id": "23-test-data-strategy",
  "level": 3
}, {
  "value": "3. Implementation Plan",
  "id": "3-implementation-plan",
  "level": 2
}, {
  "value": "3.1 Phase 1: Analysis and Tooling (Weeks 1–2)",
  "id": "31-phase-1-analysis-and-tooling-weeks-12",
  "level": 3
}, {
  "value": "3.2 Phase 2: Pilot Migration (Week 3)",
  "id": "32-phase-2-pilot-migration-week-3",
  "level": 3
}, {
  "value": "3.3 Phase 3: Phased Rollout (Weeks 4–7)",
  "id": "33-phase-3-phased-rollout-weeks-47",
  "level": 3
}, {
  "value": "3.4 Phase 4: Final Validation and Docs (Week 8)",
  "id": "34-phase-4-final-validation-and-docs-week-8",
  "level": 3
}, {
  "value": "3.5 Dependency Order",
  "id": "35-dependency-order",
  "level": 3
}, {
  "value": "4. Script Interfaces (Wave 1 — implemented)",
  "id": "4-script-interfaces-wave-1--implemented",
  "level": 2
}, {
  "value": "4.1 extract_embedded_tasks.py",
  "id": "41-extract_embedded_taskspy",
  "level": 3
}, {
  "value": "4.2 generate_task_doc.py",
  "id": "42-generate_task_docpy",
  "level": 3
}, {
  "value": "4.3 update_story_refs.py",
  "id": "43-update_story_refspy",
  "level": 3
}, {
  "value": "4.4 validate_migration.py",
  "id": "44-validate_migrationpy",
  "level": 3
}, {
  "value": "5. Files to Create/Modify",
  "id": "5-files-to-createmodify",
  "level": 2
}, {
  "value": "6. Success Criteria",
  "id": "6-success-criteria",
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
        id: "e04s11--planning-spec-tests-implementation-plan",
        children: ["E04:S11", ":T07", " – Planning: Spec, Tests, Implementation Plan"]
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Task ID:"
      }), " E04:S11", ":T07", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Task:"
      }), " Migrate Embedded Tasks to Discrete Task Documents", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Host Task:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-04/story-11-kanban-granularity-discrete-task-docs/T07-planning-spec-tests-impl",
        children: "T07-planning-spec-tests-impl.md"
      }), " (E04:S11", ":T07", ")", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Status:"
      }), " COMPLETE", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Planning doc created:"
      }), " 2026-02-22", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Last updated:"
      }), " 2026-06-05 (v0.4.11.7+16 — closure RW; FR-016 migration COMPLETE)\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Version anchor:"
      }), " v0.4.11.7+16 — ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-04/story-11-kanban-granularity-discrete-task-docs/migration-completion-report",
        children: "completion report"
      }), " · ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-04/story-11-kanban-granularity-discrete-task-docs/migration-guide",
        children: "migration guide"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "scope",
      children: "Scope"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Migrate all ~784 embedded task references in Story documents to discrete Task document files, achieving FR-016 compliance so RW Step 1 and validators can reliably locate every task anchor."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "input",
      children: "Input"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/fr-br/FR-016-kanban-granularity-discrete-task-docs",
          children: "FR-016: Kanban Granularity & Discrete Task Docs"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-04/story-11-kanban-granularity-discrete-task-docs/migration-plan-embedded-to-discrete-tasks",
          children: "Migration plan: Embedded → Discrete Task Documents"
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsxs)(_components.a, {
          href: "/ai-dev-kit/docs/implementation-cycles/IPP-E04S11T07-fr016-discrete-task-docs-migration",
          children: ["IPP E04:S11", ":T07", " — FR-016 discrete task docs migration"]
        }), " ", (0,jsx_runtime.jsx)(_components.em, {
          children: "(consolidated IPW package)"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsxs)(_components.a, {
          href: "/ai-dev-kit/docs/implementation-cycles/ICW-E4S11T07-specification",
          children: ["ICW E04:S11", ":T07", " specification"]
        }), " ", (0,jsx_runtime.jsx)(_components.em, {
          children: "(retrospective; folded into IPP)"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "deliverable",
      children: "Deliverable"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Consolidated IPP: ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/implementation-cycles/IPP-E04S11T07-fr016-discrete-task-docs-migration",
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "IPP-E04S11T07-fr016-discrete-task-docs-migration.md"
          })
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Migration tooling (Wave 1 — ", (0,jsx_runtime.jsx)(_components.code, {
          children: "packages/frameworks/workflow-mgt/scripts/kanban/"
        }), "): ", (0,jsx_runtime.jsx)(_components.code, {
          children: "extract_embedded_tasks.py"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "generate_task_doc.py"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "update_story_refs.py"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "validate_migration.py"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "test_migrate_embedded_tasks.py"
        }), " (T1–T8 + validation smoke; T9–T12 in Wave 2)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Phased migration of all embedded tasks to discrete ", (0,jsx_runtime.jsx)(_components.code, {
          children: "T{task:02d}-{slug}.md"
        }), " files"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Updated Story documents with checklist references (no embedded task bodies)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Migration completion report with metrics and documented exceptions"
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
          disabled: true
        }), " ", "IPP bidirectionally wired to task doc (Input + References)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Migration plan §1.1 Epic distribution filled (no TBD)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "All 12 test cases pass (", (0,jsx_runtime.jsx)(_components.code, {
          children: "test_migrate_embedded_tasks.py"
        }), ")"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Zero embedded tasks in migrated Epics (or documented exceptions)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "validate_migration.py"
        }), " exits 0 on full kanban root"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "RW Step 1 locates Task documents for migrated Stories"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "FR-016 acceptance criteria AC1–AC8 satisfied at task COMPLETE"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "planning-artifacts-publication",
      children: "Planning artifacts (publication)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsxs)(_components.a, {
          href: "/ai-dev-kit/docs/implementation-cycles/IPP-E04S11T07-fr016-discrete-task-docs-migration",
          children: ["IPP E04:S11", ":T07", " — FR-016 discrete task docs migration"]
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsxs)(_components.a, {
          href: "/ai-dev-kit/docs/implementation-cycles/ICW-E4S11T07-specification",
          children: ["ICW E04:S11", ":T07", " specification"]
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1-specification",
      children: "1. Specification"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "11-goal",
      children: "1.1 Goal"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Convert all 784 embedded task references in Story documents into discrete Task documents (separate files), achieving full FR-016 compliance and enabling RW Step 1 to reliably locate all Task documents."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "12-functional-requirements",
      children: "1.2 Functional Requirements"
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
            children: "FR-1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All embedded tasks extracted and converted to discrete Task documents"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Task doc, FR-016"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FR-2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All Story documents updated to reference discrete Task documents (no embedded content)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Task doc"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FR-3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All Task documents follow canonical template structure"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TASK_TEMPLATE.md"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FR-4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All Task documents include required fields: Task ID, Scope, Input, Deliverable, Acceptance Criteria, Status, Version Anchor"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["FR-016", ":R02", ", Task doc"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FR-5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Zero embedded tasks remaining (or clearly documented exceptions)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Task doc"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FR-6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RW Step 1 can locate all Task documents"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["FR-016", ":R03"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FR-7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Validators pass for all migrated tasks"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Task doc"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FR-8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Migration preserves information (no loss)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Migration plan"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FR-9"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Task document naming: ", (0,jsx_runtime.jsx)(_components.code, {
              children: "T\\{task\\}-\\{slug\\}.md"
            }), " (e.g., ", (0,jsx_runtime.jsx)(_components.code, {
              children: "T01-task-name.md"
            }), ")"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Migration plan"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FR-10"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Story checklist format: ", (0,jsx_runtime.jsx)(_components.code, {
              children: "- [x] **E\\{epic\\}:S\\{story\\}:T\\{task\\}** – Name - [Link](path)"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Existing pattern"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "13-embedded-task-detection-spec",
      children: "1.3 Embedded Task Detection Spec"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Task boundary patterns:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Header: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "### E\\{epic\\}:S\\{story\\}:T\\{task\\} – Task Name"
        }), " or ", (0,jsx_runtime.jsx)(_components.code, {
          children: "## E\\{epic\\}:S\\{story\\}:T\\{task\\}"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Variants: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "**E\\{epic\\}:S\\{story\\}:T\\{task\\}**"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "T\\{task\\} – Name"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Content: From header until next task header or ", (0,jsx_runtime.jsx)(_components.code, {
          children: "## "
        }), " section"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Edge cases: Nested sections, incomplete tasks, tasks spanning multiple blocks"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Task ID extraction:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Canonical: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "E\\{epic\\}:S\\{story\\}:T\\{task\\}"
        }), " (e.g., E04:S11", ":T07", ")"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Abbreviated in context: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "T\\{task\\}"
        }), " when Epic/Story known from Story doc path"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "14-task-document-structure-canonical",
      children: "1.4 Task Document Structure (Canonical)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Per ", (0,jsx_runtime.jsx)(_components.code, {
        children: "TASK_TEMPLATE.md"
      }), " and FR-016:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Frontmatter (lifecycle, created_at, etc.)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Task ID (Format, Full Task ID)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Scope"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Input"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Deliverable"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Acceptance Criteria"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Approach"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Dependencies"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "References"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Version Anchor (when complete)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "15-out-of-scope",
      children: "1.5 Out of Scope"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Creating new tasks (only migrating existing embedded)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Changing task content semantics (preserve or infer)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "UKW/RW workflow changes beyond alignment with existing validators"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "2-test-design",
      children: "2. Test Design"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "21-test-categories",
      children: "2.1 Test Categories"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Category"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Purpose"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Unit – Extraction"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Parse embedded task sections from Story docs"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Unit – Generation"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Produce valid Task documents from extracted data"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Unit – Story update"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Replace embedded with references correctly"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Integration – Validation"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Post-migration validators pass"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Integration – RW Step 1"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Task location logic finds all Task docs"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "End-to-end"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Full migration of pilot Story produces valid result"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "22-test-cases",
      children: "2.2 Test Cases"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "TC"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Name"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Behavior under test"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "test_extract_embedded_task_simple"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Story with ", (0,jsx_runtime.jsx)(_components.code, {
              children: "### E04:S11:T01 – Name"
            }), " yields one task with correct E/S/T"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "test_extract_embedded_task_multiple"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Story with 3 tasks yields 3 extracted tasks, correct boundaries"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "test_extract_handles_nested_sections"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Task with ", (0,jsx_runtime.jsx)(_components.code, {
              children: "####"
            }), " subsections: content captured until next task"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "test_extract_handles_missing_fields"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Task with minimal content: extract with placeholder/TODO for missing fields"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "test_generate_task_doc_required_fields"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Generated Task doc has all required sections populated"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "test_generate_task_doc_naming"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["File name follows ", (0,jsx_runtime.jsx)(_components.code, {
              children: "T\\{task\\}-\\{slug\\}.md"
            }), " convention"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "test_story_update_replaces_embedded"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Story after update has checklist items with links, no embedded body"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "test_story_update_preserves_non_task"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Overview, other sections unchanged"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T9"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "test_validation_no_embedded_remaining"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Post-migration scan finds zero embedded tasks in migrated Story"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "test_validation_all_refs_valid"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All Task doc links resolve"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T11"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "test_rw_step1_locates_task"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "validate_version_bump / RW Step 1 finds Task doc for migrated Story"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T12"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "test_migration_idempotent"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Re-running migration on migrated Story is safe (no duplication)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "23-test-data-strategy",
      children: "2.3 Test Data Strategy"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Fixtures:"
        }), " Minimal Story docs with 1–3 embedded tasks (simple, nested, incomplete)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Expected outputs:"
        }), " Canonical Task docs + updated Story"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Pilot Stories:"
        }), " Use 1–2 real Stories for integration tests (Epic 4 or 6)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "3-implementation-plan",
      children: "3. Implementation Plan"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "31-phase-1-analysis-and-tooling-weeks-12",
      children: "3.1 Phase 1: Analysis and Tooling (Weeks 1–2)"
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
            children: "1.1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Current state analysis"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Catalog of all 784 embedded tasks by Epic/Story"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1.2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Extraction script"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "extract_embedded_tasks.py"
            }), " – parse Story, yield task dicts"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1.3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Generation script"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "generate_task_doc.py"
            }), " – task dict → Task doc file"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1.4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Story update script"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "update_story_refs.py"
            }), " – replace embedded with checklist refs"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1.5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Validation script"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "validate_migration.py"
            }), " – no embedded, refs valid, fields present"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1.6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Unit tests T1–T8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tests for extraction, generation, story update"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "32-phase-2-pilot-migration-week-3",
      children: "3.2 Phase 2: Pilot Migration (Week 3)"
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
            children: "2.1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Select 1–2 pilot Stories"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "E.g., Epic 4 Story 11, Epic 6 Story 7 (subset)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2.2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Run migration on pilot"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Migrated Task docs + updated Story"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2.3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Manual review"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Refinements, edge-case fixes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2.4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Integration tests T9–T12"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Validation, RW Step 1, idempotency"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2.5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Refine scripts"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Based on pilot learnings"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "33-phase-3-phased-rollout-weeks-47",
      children: "3.3 Phase 3: Phased Rollout (Weeks 4–7)"
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
            children: "3.1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Migrate by Epic"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Epic 1 → Epic 2 → Epic 4 → Epic 5 → Epic 6 → …"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3.2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Validate after each Epic"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Validation report"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3.3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fix issues before proceeding"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Iterate as needed"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "34-phase-4-final-validation-and-docs-week-8",
      children: "3.4 Phase 4: Final Validation and Docs (Week 8)"
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
            children: "4.1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Full validation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Zero embedded, all refs valid, validators pass"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4.2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Documentation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Migration guide, exceptions (if any)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4.3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Migration completion report"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Checklist, metrics"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "35-dependency-order",
      children: "3.5 Dependency Order"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "1.1 Current state analysis (informs extraction patterns)\n    ↓\n1.2 Extraction script\n1.3 Generation script\n1.4 Story update script\n    ↓\n1.5 Validation script\n1.6 Unit tests\n    ↓\n2.1–2.5 Pilot + integration tests\n    ↓\n3.1–3.3 Phased rollout\n    ↓\n4.1–4.3 Final validation + docs\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "4-script-interfaces-wave-1--implemented",
      children: "4. Script Interfaces (Wave 1 — implemented)"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "41-extract_embedded_taskspy",
      children: "4.1 extract_embedded_tasks.py"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Input:  Story file path\nOutput: List[{epic, story, task, name, content, start_line, end_line}]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "42-generate_task_docpy",
      children: "4.2 generate_task_doc.py"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Input:  Task dict, output dir, template path\nOutput: Task doc file path\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "43-update_story_refspy",
      children: "4.3 update_story_refs.py"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Input:  Story file path, list of (task_id, task_doc_path)\nOutput: Updated Story content (or write to file)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "44-validate_migrationpy",
      children: "4.4 validate_migration.py"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Input:  Kanban root path\nOutput: Report {embedded_count, broken_refs, missing_fields, ...}\nExit:   0 if valid, 1 if issues\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "5-files-to-createmodify",
      children: "5. Files to Create/Modify"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "File"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Action"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "packages/frameworks/workflow-mgt/scripts/kanban/extract_embedded_tasks.py"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Create"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "packages/frameworks/workflow-mgt/scripts/kanban/generate_task_doc.py"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Create"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "packages/frameworks/workflow-mgt/scripts/kanban/update_story_refs.py"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Create"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "packages/frameworks/workflow-mgt/scripts/kanban/validate_migration.py"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Create"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "packages/frameworks/workflow-mgt/scripts/kanban/test_migrate_embedded_tasks.py"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Create"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "docs/.../migration-plan-embedded-to-discrete-tasks.md"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Update (fill TBDs, link to scripts)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "6-success-criteria",
      children: "6. Success Criteria"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      className: "contains-task-list",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "Migration plan document complete (current state filled; §6.4 Wave 4 updated)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "All 12 test cases pass (14/14 pytest — 2026-06-05)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "Zero embedded tasks repo-wide (0 embedded; 2 legacy discovery exceptions documented)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "RW Step 1 locates Task documents (10/12 spot-check panel; see ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-04/story-11-kanban-granularity-discrete-task-docs/migration-completion-report",
          children: "completion report"
        }), " §3–§4)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "validate_version_bump passes for migrated tasks (closure RW — 2026-06-05)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "No information loss (spot-check PASS; optional scope content backfill deferred)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "Migration completion report produced — ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-04/story-11-kanban-granularity-discrete-task-docs/migration-completion-report",
          children: "migration-completion-report.md"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "Migration guide (Wave 5) — ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-04/story-11-kanban-granularity-discrete-task-docs/migration-guide",
          children: "migration-guide.md"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "references",
      children: "References"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsxs)(_components.a, {
          href: "/ai-dev-kit/docs/implementation-cycles/IPP-E04S11T07-fr016-discrete-task-docs-migration",
          children: ["IPP E04:S11", ":T07", " — FR-016 discrete task docs migration"]
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/fr-br/FR-016-kanban-granularity-discrete-task-docs",
          children: "FR-016"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-04/story-11-kanban-granularity-discrete-task-docs/migration-plan-embedded-to-discrete-tasks",
          children: "Migration plan"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-04/story-11-kanban-granularity-discrete-task-docs/migration-guide",
          children: "Migration guide"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-04/story-11-kanban-granularity-discrete-task-docs/migration-completion-report",
          children: "Migration completion report"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsxs)(_components.a, {
          href: "/ai-dev-kit/docs/implementation-cycles/ICW-E4S11T07-specification",
          children: ["ICW E04:S11", ":T07", " specification"]
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