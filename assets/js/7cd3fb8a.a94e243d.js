"use strict";
(self["webpackChunkportal"] = self["webpackChunkportal"] || []).push([["11200"], {
45262(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_project_management_kanban_epics_epic_04_story_11_kanban_granularity_discrete_task_docs_migration_plan_embedded_to_discrete_tasks_md_7cd_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-project-management-kanban-epics-epic-04-story-11-kanban-granularity-discrete-task-docs-migration-plan-embedded-to-discrete-tasks-md-7cd.json
var site_docs_project_management_kanban_epics_epic_04_story_11_kanban_granularity_discrete_task_docs_migration_plan_embedded_to_discrete_tasks_md_7cd_namespaceObject = JSON.parse('{"id":"project-management/kanban/epics/epic-04/story-11-kanban-granularity-discrete-task-docs/migration-plan-embedded-to-discrete-tasks","title":"Migration Plan: Embedded Tasks to Discrete Task Documents","description":"Purpose: Comprehensive migration plan to convert all embedded tasks (delimited sections in Story documents) to discrete Task documents (separate files)","source":"@site/../docs/project-management/kanban/epics/epic-04/story-11-kanban-granularity-discrete-task-docs/migration-plan-embedded-to-discrete-tasks.md","sourceDirName":"project-management/kanban/epics/epic-04/story-11-kanban-granularity-discrete-task-docs","slug":"/project-management/kanban/epics/epic-04/story-11-kanban-granularity-discrete-task-docs/migration-plan-embedded-to-discrete-tasks","permalink":"/ai-dev-kit/docs/project-management/kanban/epics/epic-04/story-11-kanban-granularity-discrete-task-docs/migration-plan-embedded-to-discrete-tasks","draft":false,"unlisted":false,"editUrl":"https://github.com/RMS-Ltd/ai-dev-kit/tree/main/docs/../docs/project-management/kanban/epics/epic-04/story-11-kanban-granularity-discrete-task-docs/migration-plan-embedded-to-discrete-tasks.md","tags":[],"version":"current","frontMatter":{"lifecycle":"evergreen","ttl_days":null,"created_at":"2025-12-18T00:00:00.000Z","expires_at":null,"housekeeping_policy":"keep"},"sidebar":"docsSidebar","previous":{"title":"FR-016 Migration Guide — Embedded Tasks to Discrete Task Documents","permalink":"/ai-dev-kit/docs/project-management/kanban/epics/epic-04/story-11-kanban-granularity-discrete-task-docs/migration-guide"},"next":{"title":"Epic 4, Story 11: Kanban Granularity & Discrete Task Docs (Kanban Framework)","permalink":"/ai-dev-kit/docs/project-management/kanban/epics/epic-04/story-11-kanban-granularity-discrete-task-docs"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ../docs/project-management/kanban/epics/epic-04/story-11-kanban-granularity-discrete-task-docs/migration-plan-embedded-to-discrete-tasks.md


const frontMatter = {
	lifecycle: 'evergreen',
	ttl_days: null,
	created_at: new Date('2025-12-18T00:00:00.000Z'),
	expires_at: null,
	housekeeping_policy: 'keep'
};
const contentTitle = 'Migration Plan: Embedded Tasks to Discrete Task Documents';

const assets = {

};



const toc = [{
  "value": "Executive Summary",
  "id": "executive-summary",
  "level": 2
}, {
  "value": "1. Current State Analysis",
  "id": "1-current-state-analysis",
  "level": 2
}, {
  "value": "1.1 Task Distribution",
  "id": "11-task-distribution",
  "level": 3
}, {
  "value": "1.2 Task Patterns",
  "id": "12-task-patterns",
  "level": 3
}, {
  "value": "1.3 Completeness Analysis",
  "id": "13-completeness-analysis",
  "level": 3
}, {
  "value": "2. Migration Strategy",
  "id": "2-migration-strategy",
  "level": 2
}, {
  "value": "2.1 Approach Selection",
  "id": "21-approach-selection",
  "level": 3
}, {
  "value": "2.2 Phased Rollout Strategy",
  "id": "22-phased-rollout-strategy",
  "level": 3
}, {
  "value": "2.3 Task Document Naming Convention",
  "id": "23-task-document-naming-convention",
  "level": 3
}, {
  "value": "2.4 Story Document Update Pattern",
  "id": "24-story-document-update-pattern",
  "level": 3
}, {
  "value": "3. Migration Script Design",
  "id": "3-migration-script-design",
  "level": 2
}, {
  "value": "3.0 Implemented scripts (canonical paths)",
  "id": "30-implemented-scripts-canonical-paths",
  "level": 3
}, {
  "value": "3.1 Task Extraction",
  "id": "31-task-extraction",
  "level": 3
}, {
  "value": "3.2 Task Document Generation",
  "id": "32-task-document-generation",
  "level": 3
}, {
  "value": "3.3 Story Document Update",
  "id": "33-story-document-update",
  "level": 3
}, {
  "value": "4. Validation Strategy",
  "id": "4-validation-strategy",
  "level": 2
}, {
  "value": "4.1 Pre-Migration Validation",
  "id": "41-pre-migration-validation",
  "level": 3
}, {
  "value": "4.2 Post-Migration Validation",
  "id": "42-post-migration-validation",
  "level": 3
}, {
  "value": "4.3 Validation Script",
  "id": "43-validation-script",
  "level": 3
}, {
  "value": "5. Risk Assessment and Mitigation",
  "id": "5-risk-assessment-and-mitigation",
  "level": 2
}, {
  "value": "5.1 Risks",
  "id": "51-risks",
  "level": 3
}, {
  "value": "5.2 Rollback Strategy",
  "id": "52-rollback-strategy",
  "level": 3
}, {
  "value": "6. Implementation Plan",
  "id": "6-implementation-plan",
  "level": 2
}, {
  "value": "6.1 Phase 1: Preparation (Week 1)",
  "id": "61-phase-1-preparation-week-1",
  "level": 3
}, {
  "value": "6.2 Phase 2: Pilot Migration (Week 2)",
  "id": "62-phase-2-pilot-migration-week-2",
  "level": 3
}, {
  "value": "6.3 Phase 3: Phased Rollout (Weeks 3-6)",
  "id": "63-phase-3-phased-rollout-weeks-3-6",
  "level": 3
}, {
  "value": "6.4 Phase 4: Final Validation and Cleanup (Week 7)",
  "id": "64-phase-4-final-validation-and-cleanup-week-7",
  "level": 3
}, {
  "value": "6.5 Phase 5: Documentation Finalization (Wave 5)",
  "id": "65-phase-5-documentation-finalization-wave-5",
  "level": 3
}, {
  "value": "7. Success Criteria",
  "id": "7-success-criteria",
  "level": 2
}, {
  "value": "7.1 Migration Completeness",
  "id": "71-migration-completeness",
  "level": 3
}, {
  "value": "7.2 Quality Criteria",
  "id": "72-quality-criteria",
  "level": 3
}, {
  "value": "7.3 Integration Criteria",
  "id": "73-integration-criteria",
  "level": 3
}, {
  "value": "8. Timeline Estimate",
  "id": "8-timeline-estimate",
  "level": 2
}, {
  "value": "9. Next Steps",
  "id": "9-next-steps",
  "level": 2
}, {
  "value": "10. References",
  "id": "10-references",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    br: "br",
    code: "code",
    del: "del",
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
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "migration-plan-embedded-tasks-to-discrete-task-documents",
        children: "Migration Plan: Embedded Tasks to Discrete Task Documents"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Purpose:"
      }), " Comprehensive migration plan to convert all embedded tasks (delimited sections in Story documents) to discrete Task documents (separate files)", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Status:"
      }), " APPROVED — migration executed (Wave 5 docs final 2026-06-05)", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Version:"
      }), " 1.1.0", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Part of:"
      }), " E04:S11", ":T07", " – Migrate Embedded Tasks to Discrete Task Documents", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Related:"
      }), " FR-016: Kanban Granularity & Discrete Task Docs (3-Tier Structure)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "executive-summary",
      children: "Executive Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["This document provides a comprehensive migration plan to convert ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "784 embedded task references"
      }), " in Story documents to ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "discrete Task documents"
      }), " (separate files), fully implementing the 3-tier Kanban structure as mandated by FR-016."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Current State (catalog scan 2026-06-05, Wave 0):"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "417"
        }), " embedded task sections (", (0,jsx_runtime.jsx)(_components.code, {
          children: "##"
        }), "/", (0,jsx_runtime.jsx)(_components.code, {
          children: "###"
        }), " headers with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "E:S:T"
        }), " tokens) across ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "69"
        }), " Story files"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "301"
        }), " discrete Task documents (", (0,jsx_runtime.jsx)(_components.code, {
          children: "T{nn}-*.md"
        }), ") already on disk"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Legacy estimate ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "784"
        }), " (pre-scan) — superseded; recount used header-boundary detection only"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Policy mandates discrete Task documents (recommended format)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Target State (achieved 2026-06-05):"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "636"
        }), " discrete Task documents (", (0,jsx_runtime.jsx)(_components.code, {
          children: "T*.md"
        }), ") across all migrated epics"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "0"
        }), " embedded task sections in 92 Story files (", (0,jsx_runtime.jsx)(_components.code, {
          children: "validate_migration.py"
        }), ")"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Story documents reference discrete Task documents via checklist links"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["RW Step 1 locates Task documents (2 grandfathered exceptions — see ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-04/story-11-kanban-granularity-discrete-task-docs/migration-completion-report",
          children: "completion report"
        }), ")"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Migration Approach:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Hybrid:"
        }), " Automated extraction with manual review and refinement"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Phased:"
        }), " Rollout by Epic priority"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Validated:"
        }), " Comprehensive validation at each phase"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1-current-state-analysis",
      children: "1. Current State Analysis"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "11-task-distribution",
      children: "1.1 Task Distribution"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Embedded task sections by Epic (2026-06-05 scan):"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Epic"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Embedded sections"
          }), (0,jsx_runtime.jsxs)(_components.th, {
            children: ["Discrete ", (0,jsx_runtime.jsx)(_components.code, {
              children: "T*.md"
            }), " files"]
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Notes"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "E01"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "21"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "17"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Core framework"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "E02"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "93"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "61"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Largest embedded count"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "E03"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "34"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "12"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Versioning framework"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "E04"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "86"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "54"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Host epic (FR-016)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "E05"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "47"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "47"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Parity embedded/discrete"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "E06"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "38"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "63"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "More discrete than embedded"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "E07"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "30"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "33"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Maintenance / reviews"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "E08"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "21"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tooling & automation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "E09"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Discrete-only stories"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "E10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "12"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Embedded-only (doc-lifecycle RC)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "E11"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "12"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Embedded-only (debug-path RC)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "E21"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "28"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Project-specific"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Total (Wave 0):"
      }), " ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "417"
      }), " embedded sections · ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "301"
      }), " discrete files · ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "69"
      }), " stories with ≥1 embedded section"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Post-migration (Wave 4 validation):"
      }), " ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "0"
      }), " embedded · ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "636"
      }), " discrete · ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "92"
      }), " stories scanned · ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "0"
      }), " broken task links"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Highest-density stories (pilot candidates):"
      }), " E05", ":S06", " (25), E02", ":S05", " (15), E06", ":S08", " (14), E03", ":S02", " (11), E04", ":S12", " (11), E07", ":S06", " (11)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Discrete Task Documents:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["301 files under ", (0,jsx_runtime.jsx)(_components.code, {
          children: "epics/epic-*/story-*/T*.md"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Mix of fully migrated stories (E05", ":S06", ", E06", ":S09", ") and partial migration (E04", ":S19", ")"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Follow canonical template structure where created via intake/RW"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "12-task-patterns",
      children: "1.2 Task Patterns"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Naming Patterns:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Full context: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "E\\{epic\\}:S\\{story\\}:T\\{task\\}"
        }), " (e.g., ", (0,jsx_runtime.jsx)(_components.code, {
          children: "E04:S11:T01"
        }), ")"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Abbreviated: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "T\\{task\\}"
        }), " (e.g., ", (0,jsx_runtime.jsx)(_components.code, {
          children: "T01"
        }), ")"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Variants: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Task \\{task\\}"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "T\\{task\\}-\\{description\\}"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Structure Patterns:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Well-structured: Full task details (Input, Deliverable, Acceptance Criteria, etc.)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Minimal: Task ID and brief description only"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Incomplete: Missing required fields"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Location Patterns:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Embedded in Story document as delimited sections"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Format: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "### E\\{epic\\}:S\\{story\\}:T\\{task\\} – Task Name"
        }), " followed by task content"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Some tasks have associated files in Story directory"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "13-completeness-analysis",
      children: "1.3 Completeness Analysis"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Tasks with Full Details:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Include: Task ID, Scope, Input, Deliverable, Acceptance Criteria, Approach, Dependencies"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Estimated: [TBD - to be analyzed]"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Tasks with Minimal Details:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Include: Task ID, brief description, status"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Estimated: [TBD - to be analyzed]"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Tasks with Missing Required Fields:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Missing: Required fields per FR-016 (Task ID, Scope, Acceptance Criteria, Status, Version Anchor)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Estimated: [TBD - to be analyzed]"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "2-migration-strategy",
      children: "2. Migration Strategy"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "21-approach-selection",
      children: "2.1 Approach Selection"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Option 1: Fully Automated"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Pros:"
        }), " Fast, consistent, scalable"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Cons:"
        }), " Requires robust parsing, may miss edge cases, less control"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Risk:"
        }), " High (parsing errors, information loss)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Option 2: Fully Manual"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Pros:"
        }), " Complete control, high quality, handles edge cases"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Cons:"
        }), " Time-consuming (784 tasks), inconsistent, error-prone"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Risk:"
        }), " Medium (human error, inconsistency)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Option 3: Hybrid (Recommended)"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Pros:"
        }), " Balance of speed and quality, automated extraction with manual review"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Cons:"
        }), " Requires both script development and manual work"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Risk:"
        }), " Low (validation at each step)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Decision: Hybrid Approach"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Automated script for extraction and initial generation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Manual review and refinement for complex tasks"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Automated validation and verification"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "22-phased-rollout-strategy",
      children: "2.2 Phased Rollout Strategy"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Phase 1: Pilot (1-2 Stories)"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Select representative Stories (different complexities)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Execute migration"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Validate results"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Refine approach"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Phase 2: High-Priority Epics"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Epic 1 (Project Foundation)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Epic 2 (Workflow Management)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Epic 4 (Kanban Framework)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Validate after each Epic"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Phase 3: Remaining Core Epics"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Epic 3 (FR/BR/UXR Management)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Epic 5 (Data Management)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Epic 6 (Testing)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Epic 7 (Implementation)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Epic 8 (Documentation)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Epic 9 (CI/CD)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Epic 10 (Security)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Phase 4: Ancillary Epics"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Epic 11+ (Project-specific epics)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Final validation"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "23-task-document-naming-convention",
      children: "2.3 Task Document Naming Convention"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Canonical Format:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "T\\{task\\}-\\{description\\}.md"
        }), " (e.g., ", (0,jsx_runtime.jsx)(_components.code, {
          children: "T01-update-kanban-policy.md"
        }), ")"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Location: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/project-management/kanban/epics/Epic-\\{N\\}/Story-{NNN}-\\{description\\}/T\\{task\\}-\\{description\\}.md"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Naming Rules:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Use 2-digit padding for task number (", (0,jsx_runtime.jsx)(_components.code, {
          children: "T01"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "T02"
        }), ", not ", (0,jsx_runtime.jsx)(_components.code, {
          children: "T1"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "T2"
        }), ")"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use kebab-case for description"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Keep description concise but descriptive"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Match Story document naming pattern"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Examples:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "T01-update-kanban-policy.md"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "T02-create-task-template.md"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "T06-cross-project-meta-analysis.md"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "24-story-document-update-pattern",
      children: "2.4 Story Document Update Pattern"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Before (Embedded):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-markdown",
        children: "## Tasks\n\n### E4:S11:T01 – Update Kanban Governance Policy\n\n**Input:** Current Kanban governance policy\n**Deliverable:** Updated policy\n...\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "After (Reference):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-markdown",
        children: "## Task Checklist\n\n- [x] **E4:S11:T01 – Update Kanban Governance Policy** ✅ COMPLETE (v0.4.11.1+0)\n  - Task: [`T01-update-kanban-policy.md`](T01-update-kanban-policy.md)\n\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Update Rules:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Replace embedded task section with checklist item"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Add link to discrete Task document"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Preserve status and version marker"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Maintain Story document structure"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "3-migration-script-design",
      children: "3. Migration Script Design"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "30-implemented-scripts-canonical-paths",
      children: "3.0 Implemented scripts (canonical paths)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Script"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Repository path"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Role"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "extract_embedded_tasks.py"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/packages/frameworks/workflow-mgt/scripts/kanban/extract_embedded_tasks.py",
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "packages/frameworks/workflow-mgt/scripts/kanban/extract_embedded_tasks.py"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Parse embedded task sections"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "generate_task_doc.py"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/packages/frameworks/workflow-mgt/scripts/kanban/generate_task_doc.py",
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "packages/frameworks/workflow-mgt/scripts/kanban/generate_task_doc.py"
              })
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Generate discrete ", (0,jsx_runtime.jsx)(_components.code, {
              children: "T*.md"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "update_story_refs.py"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/packages/frameworks/workflow-mgt/scripts/kanban/update_story_refs.py",
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "packages/frameworks/workflow-mgt/scripts/kanban/update_story_refs.py"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Checklist links + strip embedded bodies"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "migrate_story.py"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/packages/frameworks/workflow-mgt/scripts/kanban/migrate_story.py",
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "packages/frameworks/workflow-mgt/scripts/kanban/migrate_story.py"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Orchestrator (Wave 2–3 rollout)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "validate_migration.py"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/packages/frameworks/workflow-mgt/scripts/kanban/validate_migration.py",
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "packages/frameworks/workflow-mgt/scripts/kanban/validate_migration.py"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Post-migration validation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "test_migrate_embedded_tasks.py"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/packages/frameworks/workflow-mgt/scripts/kanban/test_migrate_embedded_tasks.py",
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "packages/frameworks/workflow-mgt/scripts/kanban/test_migrate_embedded_tasks.py"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tests T1–T12"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Operator guide:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-04/story-11-kanban-granularity-discrete-task-docs/migration-guide",
        children: "migration-guide.md"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "31-task-extraction",
      children: "3.1 Task Extraction"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Input:"
      }), " Story document with embedded tasks", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      }), " Extracted task data structure"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Extraction Logic:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Find task section markers: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "### E\\{epic\\}:S\\{story\\}:T\\{task\\}"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Extract task header (Task ID, name)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Extract task content (until next task or section)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Parse task fields (Input, Deliverable, Acceptance Criteria, etc.)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Handle edge cases (nested sections, incomplete tasks)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Edge Cases:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Tasks without clear boundaries"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Tasks with nested markdown"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Tasks with incomplete information"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Tasks spanning multiple sections"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "32-task-document-generation",
      children: "3.2 Task Document Generation"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Input:"
      }), " Extracted task data", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      }), " Task document following canonical template"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Generation Logic:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Apply Task document template"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Populate required fields from extracted data"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Generate file name following naming convention"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Handle missing fields (mark as TODO or infer from context)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Preserve original formatting where possible"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Required Fields:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Task ID (", (0,jsx_runtime.jsx)(_components.code, {
          children: "E\\{epic\\}:S\\{story\\}:T\\{task\\}"
        }), ")"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Scope"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Input"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Deliverable"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Acceptance Criteria"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Status"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Version Anchor (if task is complete)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Related BR/FR Links"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "33-story-document-update",
      children: "3.3 Story Document Update"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Input:"
      }), " Story document, generated Task documents", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      }), " Updated Story document with references"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Update Logic:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Replace embedded task sections with checklist items"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Add links to discrete Task documents"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Preserve task status and version markers"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Maintain Story document structure"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update task checklist format"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "4-validation-strategy",
      children: "4. Validation Strategy"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "41-pre-migration-validation",
      children: "4.1 Pre-Migration Validation"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Verify Story document structure"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Verify task extraction accuracy"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Verify task completeness"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Identify high-risk tasks"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "42-post-migration-validation",
      children: "4.2 Post-Migration Validation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Task Document Validation:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Required fields present"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Task ID format correct"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "File naming convention followed"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Template structure followed"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Content completeness"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Story Document Validation:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "References to Task documents correct"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Checklist format correct"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "No broken links"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Structure maintained"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Integration Validation:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "RW Step 1 can locate Task documents"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Validators pass"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Cross-references updated"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "No information loss"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "43-validation-script",
      children: "4.3 Validation Script"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Checks:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "All embedded tasks extracted"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "All Task documents created"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "All Story documents updated"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "All required fields present"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "All references valid"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Naming conventions followed"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "RW Step 1 compatibility"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Validator compatibility"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "5-risk-assessment-and-mitigation",
      children: "5. Risk Assessment and Mitigation"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "51-risks",
      children: "5.1 Risks"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Risk 1: Information Loss"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Probability:"
        }), " Medium"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Impact:"
        }), " High"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Mitigation:"
        }), " Comprehensive extraction, manual review, validation"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Risk 2: Parsing Errors"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Probability:"
        }), " Medium"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Impact:"
        }), " Medium"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Mitigation:"
        }), " Robust parsing logic, edge case handling, manual review"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Risk 3: Incomplete Migration"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Probability:"
        }), " Low"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Impact:"
        }), " High"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Mitigation:"
        }), " Comprehensive validation, phased rollout, checkpoints"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Risk 4: Broken References"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Probability:"
        }), " Low"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Impact:"
        }), " Medium"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Mitigation:"
        }), " Automated reference validation, link checking"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Risk 5: Inconsistent Structure"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Probability:"
        }), " Medium"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Impact:"
        }), " Low"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Mitigation:"
        }), " Template enforcement, validation, review"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "52-rollback-strategy",
      children: "5.2 Rollback Strategy"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "If Migration Fails:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Preserve original Story documents (backup)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Document migration state"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Rollback to original state"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Analyze failures"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Refine approach"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Retry migration"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Partial Rollback:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If specific Epic/Story migration fails"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Rollback that Epic/Story only"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Continue with other Epics/Stories"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Fix and retry failed Epic/Story"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "6-implementation-plan",
      children: "6. Implementation Plan"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "61-phase-1-preparation-week-1",
      children: "6.1 Phase 1: Preparation (Week 1)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Tasks:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      className: "contains-task-list",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Complete current state analysis (catalog all embedded tasks)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Design migration script"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Create task extraction logic"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Create task document generator"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Create story document updater"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Create validation script"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Test scripts on sample Story documents"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Deliverables:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Current state analysis report"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Migration scripts (extraction, generation, update, validation)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Test results"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "62-phase-2-pilot-migration-week-2",
      children: "6.2 Phase 2: Pilot Migration (Week 2)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Tasks:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      className: "contains-task-list",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Select 1-2 representative Stories"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Execute migration on pilot Stories"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Manual review and refinement"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Validate results"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Document learnings"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Refine scripts based on learnings"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Deliverables:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Migrated pilot Stories"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Migration learnings document"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Refined scripts"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "63-phase-3-phased-rollout-weeks-3-6",
      children: "6.3 Phase 3: Phased Rollout (Weeks 3-6)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Tasks:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      className: "contains-task-list",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "Migrate Epic 1 (Project Foundation) — Wave 3 ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "2026-06-05"
        }), ": 6 stories processed, ~15 new task docs, 0 embedded remaining"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "Validate Epic 1 migration — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "2026-06-05"
        }), ": 14/14 pytest; 0 broken links"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "Migrate Epic 2 (Workflow Management) — Wave 3 ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "2026-06-05"
        }), ": 13 stories, ~90 new task docs, 0 embedded remaining per ", (0,jsx_runtime.jsx)(_components.code, {
          children: "validate_migration.py --story"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "Validate Epic 2 migration — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "2026-06-05"
        }), ": 14/14 ", (0,jsx_runtime.jsx)(_components.code, {
          children: "test_migrate_embedded_tasks.py"
        }), "; 0 broken links; idempotent re-run"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "Migrate Epic 4 (Kanban Framework) — Wave 3 ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "2026-06-05"
        }), ": 19 stories processed, ~40 new task docs, 0 embedded remaining per ", (0,jsx_runtime.jsx)(_components.code, {
          children: "validate_migration.py"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "Validate Epic 4 migration — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "2026-06-05"
        }), ": 14/14 ", (0,jsx_runtime.jsx)(_components.code, {
          children: "test_migrate_embedded_tasks.py"
        }), "; 0 broken links; idempotent re-run"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "Migrate Epic 3 (Numbering & Versioning) — Wave 3 ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "2026-06-05"
        }), ": 5 stories processed, ~20 new task docs, 0 embedded remaining"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "Validate Epic 3 migration — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "2026-06-05"
        }), ": 14/14 pytest; 0 broken links"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "Migrate Epic 5 (Documentation) — Wave 3 ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "2026-06-05"
        }), ": 9 stories processed, ~47 new task docs, 0 embedded remaining"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "Validate Epic 5 migration — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "2026-06-05"
        }), ": 14/14 pytest; 0 broken links"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "Migrate Epic 6 (Framework Management) — Wave 3 ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "2026-06-05"
        }), ": 9 stories processed, ~34 new task docs, 0 embedded remaining"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "Validate Epic 6 migration — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "2026-06-05"
        }), ": 14/14 pytest; 0 broken links"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "Migrate Epic 7 (Codebase Maintenance) — Wave 3 ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "2026-06-05"
        }), ": 5 stories with embedded tasks (S01–S04, S06); 17 new task docs, 13 reused; 0 embedded remaining"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "Validate Epic 7 migration — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "2026-06-05"
        }), ": 14/14 pytest; 0 broken links; idempotent re-run"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "Migrate Epic 8 (Tooling & Automation) — Wave 3 ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "2026-06-05"
        }), ": 5 stories processed; 21 new task docs; 0 embedded remaining"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "Validate Epic 8 migration — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "2026-06-05"
        }), ": 14/14 pytest; 0 broken links"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "Migrate Epic 10 (Document Lifecycle RC) — Wave 3 ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "2026-06-05"
        }), ": 2 stories processed; 12 new task docs; 0 embedded remaining"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "Validate Epic 10 migration — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "2026-06-05"
        }), ": 14/14 pytest; 0 broken links"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "Migrate Epic 11 (Debug Path RC) — Wave 3 ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "2026-06-05"
        }), ": 2 stories processed; 12 new task docs; 0 embedded remaining"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "Validate Epic 11 migration — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "2026-06-05"
        }), ": 14/14 pytest; 0 broken links"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "Migrate Epic 21 (Internationalization) — Wave 3 ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "2026-06-05"
        }), ": 4 stories processed; 28 new task docs; 0 embedded remaining"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "Validate Epic 21 migration — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "2026-06-05"
        }), ": 14/14 pytest; 0 broken links; ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "repo-wide 0 embedded"
        }), " per ", (0,jsx_runtime.jsx)(_components.code, {
          children: "validate_migration.py"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Wave 3 phased rollout complete"
        }), " — all canonical + project-specific epics migrated"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Deliverables:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Migrated Epics"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Validation reports"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Progress tracking"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "64-phase-4-final-validation-and-cleanup-week-7",
      children: "6.4 Phase 4: Final Validation and Cleanup (Week 7)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Tasks:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      className: "contains-task-list",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "Comprehensive validation — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "2026-06-05"
        }), ": ", (0,jsx_runtime.jsx)(_components.code, {
          children: "validate_migration.py"
        }), " — 92 stories, 0 embedded, 0 broken links"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "RW Step 1 spot-check — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "2026-06-05"
        }), ": 10/12 discovery panel PASS; 2 documented exceptions (legacy headers, E01", ":S01", ")"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "Tooling regression — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "2026-06-05"
        }), ": 14/14 pytest; idempotent re-run PASS"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "Fix any issues — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "grandfathered"
        }), " 2 discovery exceptions documented (no bulk header rewrite)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "Update documentation (Wave 5) — ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-04/story-11-kanban-granularity-discrete-task-docs/migration-guide",
          children: "migration-guide.md"
        }), "; script links §3.0"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "Update examples — migration guide §3–§4 command examples"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "Archive migration artifacts — completion report + four-surface reports under ", (0,jsx_runtime.jsx)(_components.code, {
          children: "changelog-archive/four-surface-reports/"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "Final report — ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-04/story-11-kanban-granularity-discrete-task-docs/migration-completion-report",
          children: "migration-completion-report.md"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Deliverables:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      className: "contains-task-list",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "Migration completion report"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "Updated documentation (Wave 5)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "Validation report (§2–§5 of completion report)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "65-phase-5-documentation-finalization-wave-5",
      children: "6.5 Phase 5: Documentation Finalization (Wave 5)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Tasks:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      className: "contains-task-list",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "Migration plan status → APPROVED (executed); §3.0 script path links"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "Publish ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-04/story-11-kanban-granularity-discrete-task-docs/migration-guide",
          children: "migration-guide.md"
        }), " for operators and adopters"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "FR-016 implementation notes sync (structural migration complete; closure RW pending)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "T07 success criteria — migration guide + plan finalization"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Deliverables:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      className: "contains-task-list",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "Migration guide"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "Migration plan v1.1.0"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "Closure RW — v0.4.11.7+16 — E04:S11", ":T07", " ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "COMPLETE"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "7-success-criteria",
      children: "7. Success Criteria"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "71-migration-completeness",
      children: "7.1 Migration Completeness"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ All embedded tasks extracted"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ All Task documents created"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ All Story documents updated"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Zero embedded tasks remaining (or clearly documented exceptions)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "72-quality-criteria",
      children: "7.2 Quality Criteria"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ All Task documents follow canonical template"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ All required fields present"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ All references valid"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ No information loss"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Consistent structure"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "73-integration-criteria",
      children: "7.3 Integration Criteria"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ RW Step 1 can locate all Task documents"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Validators pass for all tasks"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Cross-references updated"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Documentation updated"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "8-timeline-estimate",
      children: "8. Timeline Estimate"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Total Duration:"
      }), " 6-8 weeks"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Week 1:"
        }), " Preparation and script development"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Week 2:"
        }), " Pilot migration and refinement"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Weeks 3-6:"
        }), " Phased rollout (1-2 Epics per week)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Week 7:"
        }), " Final validation and cleanup"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Week 8:"
        }), " Buffer for issues and refinements"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Effort Estimate:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Script development: 1-2 weeks"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Pilot migration: 1 week"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Phased rollout: 3-4 weeks (depending on automation level)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Validation and cleanup: 1 week"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "9-next-steps",
      children: "9. Next Steps"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.del, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Approve Migration Plan"
          })
        }), " — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "DONE"
        }), " (APPROVED 2026-06-05)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.del, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Preparation + tooling"
          })
        }), " — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "DONE"
        }), " (Waves 0–1)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.del, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Pilot migration"
          })
        }), " — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "DONE"
        }), " (Wave 2, v0.4.11.7+7)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.del, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Phased rollout"
          })
        }), " — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "DONE"
        }), " (Wave 3, v0.4.11.7+8–+14)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.del, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Final validation"
          })
        }), " — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "DONE"
        }), " (Wave 4, v0.4.11.7+15)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.del, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Documentation finalization"
          })
        }), " — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "DONE"
        }), " (Wave 5 — this guide)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.del, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Closure RW"
          })
        }), " — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "DONE"
        }), " (v0.4.11.7+16 — E04:S11", ":T07", " COMPLETE)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "10-references",
      children: "10. References"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "docs/project-management/kanban/fr-br/FR-016-kanban-granularity-discrete-task-docs.md"
        }), " - FR-016 requirements"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "packages/frameworks/kanban/templates/TASK_TEMPLATE.md"
        }), " - Task document template"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "docs/project-management/rituals/policy/kanban-governance-policy.md"
        }), " - Kanban governance policy"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "docs/project-management/kanban/epics/epic-04/story-11-kanban-granularity-discrete-task-docs.md"
        }), " - Parent story"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-04/story-11-kanban-granularity-discrete-task-docs/migration-guide",
          children: "migration-guide.md"
        }), " - Operator guide (Wave 5)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-04/story-11-kanban-granularity-discrete-task-docs/migration-completion-report",
          children: "migration-completion-report.md"
        }), " - Final metrics (Wave 4)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "docs/project-management/kanban/epics/epic-06/story-06-adk-implementation-analysis-and-package-management/T06-cross-project-meta-analysis-and-canonical-framework-design.md"
        }), " - Example discrete Task document"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Last Updated:"
      }), " 2026-06-05 (Wave 5)", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Version:"
      }), " 1.1.0", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Status:"
      }), " APPROVED — migration executed; E04:S11", ":T07", " COMPLETE (v0.4.11.7+16)"]
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