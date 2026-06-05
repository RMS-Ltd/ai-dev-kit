"use strict";
(self["webpackChunkportal"] = self["webpackChunkportal"] || []).push([["51106"], {
25675(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_implementation_cycles_ipp_e_6_s_01_t_38_ukw_completed_task_removal_defect_md_999_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-implementation-cycles-ipp-e-6-s-01-t-38-ukw-completed-task-removal-defect-md-999.json
var site_docs_implementation_cycles_ipp_e_6_s_01_t_38_ukw_completed_task_removal_defect_md_999_namespaceObject = JSON.parse('{"id":"implementation-cycles/IPP-E6S01T38-ukw-completed-task-removal-defect","title":"E6:S01:T38 — IPP: UKW Completed Task Removal Defect (BR-072)","description":"Host TaskS01:T38","source":"@site/../docs/implementation-cycles/IPP-E6S01T38-ukw-completed-task-removal-defect.md","sourceDirName":"implementation-cycles","slug":"/implementation-cycles/IPP-E6S01T38-ukw-completed-task-removal-defect","permalink":"/ai-dev-kit/docs/implementation-cycles/IPP-E6S01T38-ukw-completed-task-removal-defect","draft":false,"unlisted":false,"editUrl":"https://github.com/RMS-Ltd/ai-dev-kit/tree/main/docs/../docs/implementation-cycles/IPP-E6S01T38-ukw-completed-task-removal-defect.md","tags":[],"version":"current","frontMatter":{"lifecycle":"evergreen","ttl_days":null,"created_at":"2026-05-12T00:00:00.000Z","expires_at":null,"housekeeping_policy":"keep"},"sidebar":"docsSidebar","previous":{"title":"E5:S01:T62 — Planning: FR-062 GitHub release installation (IPP)","permalink":"/ai-dev-kit/docs/implementation-cycles/IPP-E5S01T62-github-release-install-fr062"},"next":{"title":"E6:S09:T02 — Planning: Spec, Tests, Implementation Plan (IPW)","permalink":"/ai-dev-kit/docs/implementation-cycles/IPP-E6S09T02-brownfield-modular-adopter-integration-fr081"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ../docs/implementation-cycles/IPP-E6S01T38-ukw-completed-task-removal-defect.md


const frontMatter = {
	lifecycle: 'evergreen',
	ttl_days: null,
	created_at: new Date('2026-05-12T00:00:00.000Z'),
	expires_at: null,
	housekeeping_policy: 'keep'
};
const contentTitle = 'E6:S01 — IPP: UKW Completed Task Removal Defect (BR-072)';

const assets = {

};



const toc = [{
  "value": "Section 1: Specification",
  "id": "section-1-specification",
  "level": 2
}, {
  "value": "1.1 Problem Statement",
  "id": "11-problem-statement",
  "level": 3
}, {
  "value": "1.2 Objectives",
  "id": "12-objectives",
  "level": 3
}, {
  "value": "1.3 Functional Requirements",
  "id": "13-functional-requirements",
  "level": 3
}, {
  "value": "1.4 Non-Functional Requirements",
  "id": "14-non-functional-requirements",
  "level": 3
}, {
  "value": "1.5 Out of Scope",
  "id": "15-out-of-scope",
  "level": 3
}, {
  "value": "1.6 Acceptance Criteria",
  "id": "16-acceptance-criteria",
  "level": 3
}, {
  "value": "Section 2: Test Design",
  "id": "section-2-test-design",
  "level": 2
}, {
  "value": "2.1 Test Approach",
  "id": "21-test-approach",
  "level": 3
}, {
  "value": "2.2 Test Scenarios",
  "id": "22-test-scenarios",
  "level": 3
}, {
  "value": "2.3 Test Fixtures",
  "id": "23-test-fixtures",
  "level": 3
}, {
  "value": "2.4 Coverage Map",
  "id": "24-coverage-map",
  "level": 3
}, {
  "value": "2.5 Post-Run Verification Checklist",
  "id": "25-post-run-verification-checklist",
  "level": 3
}, {
  "value": "Section 3: Implementation Plan",
  "id": "section-3-implementation-plan",
  "level": 2
}, {
  "value": "3.1 Files to Modify",
  "id": "31-files-to-modify",
  "level": 3
}, {
  "value": "3.2 Change: cursorrules-ukw-trigger-section.md",
  "id": "32-change-cursorrules-ukw-trigger-sectionmd",
  "level": 3
}, {
  "value": "3.3 kanban-completed.md Entry Format",
  "id": "33-kanban-completedmd-entry-format",
  "level": 3
}, {
  "value": "3.4 Change: update-kanban-workflow.yaml",
  "id": "34-change-update-kanban-workflowyaml",
  "level": 3
}, {
  "value": "3.5 Change: agents/ukw/AGENTS.md",
  "id": "35-change-agentsukwagentsmd",
  "level": 3
}, {
  "value": "3.6 Sequencing",
  "id": "36-sequencing",
  "level": 3
}, {
  "value": "Section 4: Verification Gates",
  "id": "section-4-verification-gates",
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
        id: "e6s01--ipp-ukw-completed-task-removal-defect-br-072",
        children: ["E6:S01", ":T38", " — IPP: UKW Completed Task Removal Defect (BR-072)"]
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Host Task:"
      }), " ", (0,jsx_runtime.jsxs)(_components.a, {
        href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-06/story-01-br-repo/T38-ukw-completed-tasks-not-removed-from-kboard-br072",
        children: ["E6:S01", ":T38"]
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Planning for:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/project-management/kanban/fr-br/BR-072-ukw-completed-tasks-not-removed-from-kboard",
        children: "BR-072"
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Status:"
      }), " Published", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Created:"
      }), " 2026-05-12", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Version context:"
      }), " v0.6.1.38+0"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "section-1-specification",
      children: "Section 1: Specification"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "11-problem-statement",
      children: "1.1 Problem Statement"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["When UKW runs, completed tasks are not removed from ", (0,jsx_runtime.jsx)(_components.code, {
        children: "kboard.md"
      }), ". The MoSCOW sections accumulate COMPLETE-status entries across multiple UKW runs. A secondary symptom allows the same task to appear in more than one MoSCOW section simultaneously."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Three root causes:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "#"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Root Cause"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Location"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RC1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The removal instruction is buried as a sub-bullet within the EXECUTE phase of the MoSCOW classification step — not a standalone action"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "cursorrules-ukw-trigger-section.md"
            }), " Step 6"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RC2"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["No write path to ", (0,jsx_runtime.jsx)(_components.code, {
              children: "kanban-completed.md"
            }), " exists anywhere in the UKW definition — removed tasks have nowhere to go"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All three UKW definition files"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RC3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No deduplication guard exists — a task can accumulate in multiple MoSCOW sections across separate UKW runs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All three UKW definition files"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Known test fixtures currently on board (retained for verification):"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "E2:S16:T01"
        }), " — COMPLETE, present in Should Have ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "and"
        }), " Ongoing (duplicated)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "E2:S15:T07"
        }), " — COMPLETE, present in Should Have"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "12-objectives",
      children: "1.2 Objectives"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "ID"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Objective"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "O1"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Elevate completed task removal to a discrete, named action that executes ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "before"
            }), " MoSCOW classification — not as a subordinate clause within it"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "O2"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Add a write path so every task removed from ", (0,jsx_runtime.jsx)(_components.code, {
              children: "kboard.md"
            }), " is immediately archived to ", (0,jsx_runtime.jsx)(_components.code, {
              children: "kanban-completed.md"
            }), " in the same UKW run"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "O3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Add a cross-section deduplication guard preventing any task ID from appearing in more than one MoSCOW section at any time"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "O4"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Propagate all definition changes to ", (0,jsx_runtime.jsx)(_components.code, {
              children: "agents/ukw/AGENTS.md"
            }), " so the focused agent reflects the corrected behaviour"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "13-functional-requirements",
      children: "1.3 Functional Requirements"
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
            children: "FR1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "UKW Step 6 EXECUTE must scan all MoSCOW sections for COMPLETE or DONE tasks before any classification work begins"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BR-072 AC2"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FR2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Each completed task found must be removed from all sections it appears in"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BR-072 AC2"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FR3"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Each removed task must be written to ", (0,jsx_runtime.jsx)(_components.code, {
              children: "kanban-completed.md"
            }), " using the standard entry format (task link, FR/BR ref, description, timestamp, version, agent)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BR-072 AC4"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FR4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "After removal, a deduplication pass must verify no task ID appears in more than one MoSCOW section; duplicate retained is the most-recently-updated entry"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BR-072 AC3"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FR5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Active (non-complete) tasks must not be affected by the removal or deduplication steps"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T38 AC4"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FR6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The bottom-up execution order (Tasks → Stories → Epics → Board) must be preserved"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Existing UKW invariant"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FR7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All three UKW definition files must be consistent with each other after the change"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T38 AC6"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "14-non-functional-requirements",
      children: "1.4 Non-Functional Requirements"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "ID"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Requirement"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NFR1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The fix is definition-level only — no code or script changes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NFR2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The change must not add ambiguity to the MoSCOW classification step; classification reasoning must remain agentic"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NFR3"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "kanban-completed.md"
            }), " entry format must match existing entries exactly (see Section 3.3)"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "15-out-of-scope",
      children: "1.5 Out of Scope"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Direct manual edits to ", (0,jsx_runtime.jsx)(_components.code, {
          children: "kboard.md"
        }), " or ", (0,jsx_runtime.jsx)(_components.code, {
          children: "kanban-completed.md"
        }), " (those are runtime outputs of the fixed UKW)"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Changes to any other workflow definition (RW, CMW, IPW, etc.)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Automated/scripted tests for workflow agent definitions"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Retroactive audit of historical UKW runs"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "16-acceptance-criteria",
      children: "1.6 Acceptance Criteria"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Directly from BR-072 and T38:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      className: "contains-task-list",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "AC1:"
        }), " Root cause identified and documented ", (0,jsx_runtime.jsx)(_components.em, {
          children: "(done — see Section 1.1)"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "AC2:"
        }), " UKW definition updated so completed task removal is a discrete, unambiguous step"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "AC3:"
        }), " Explicit deduplication check added — no task appears in more than one MoSCOW section"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "AC4:"
        }), " Completed tasks removed from ", (0,jsx_runtime.jsx)(_components.code, {
          children: "kboard.md"
        }), " are written to ", (0,jsx_runtime.jsx)(_components.code, {
          children: "kanban-completed.md"
        }), " in the same UKW run"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "AC5:"
        }), " Known test fixtures (", (0,jsx_runtime.jsx)(_components.code, {
          children: "E2:S16:T01"
        }), " × 2, ", (0,jsx_runtime.jsx)(_components.code, {
          children: "E2:S15:T07"
        }), ") confirmed removed by the fixed UKW"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "AC6:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "agents/ukw/AGENTS.md"
        }), " reflects definition changes"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "AC7:"
        }), " BR-072, T38, Story 001 checklist, ", (0,jsx_runtime.jsx)(_components.code, {
          children: "kboard.md"
        }), ", and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "kboard.md"
        }), " are bidirectionally wired ", (0,jsx_runtime.jsx)(_components.em, {
          children: "(done at intake)"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "section-2-test-design",
      children: "Section 2: Test Design"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "21-test-approach",
      children: "2.1 Test Approach"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Manual execution of UKW after definition changes are applied. Workflow agent definitions have no automated test harness — verification is by direct inspection of ", (0,jsx_runtime.jsx)(_components.code, {
        children: "kboard.md"
      }), " and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "kanban-completed.md"
      }), " output."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "22-test-scenarios",
      children: "2.2 Test Scenarios"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "ID"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Scenario"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Pre-condition"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Expected Outcome"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Completed task removed from single section"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "E2:S15:T07"
            }), " (COMPLETE) in Should Have"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Removed from kboard.md; entry written to kanban-completed.md"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Duplicate completed task fully removed"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "E2:S16:T01"
            }), " (COMPLETE) in Should Have AND Ongoing"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Both instances removed from kboard.md; single entry in kanban-completed.md"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Deduplication guard — active task"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A task legitimately in Ongoing that UKW re-classifies as Should Have"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Appears in Should Have only; Ongoing entry removed"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Active tasks preserved"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Board has mix of active and completed tasks"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Only completed tasks removed; active tasks remain with correct MoSCOW classification"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "kanban-completed.md entry format"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Any completed task removed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Entry matches standard format: task link, FR/BR ref, description, timestamp, version, Agent: UKW"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "23-test-fixtures",
      children: "2.3 Test Fixtures"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Pre-existing on ", (0,jsx_runtime.jsx)(_components.code, {
        children: "kboard.md"
      }), " (do not remove before running fixed UKW):"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Should Have section:\n  - E2:S16:T01 — COMPLETE\n  - E2:S15:T07 — COMPLETE\n\nOngoing section:\n  - E2:S16:T01 — COMPLETE (duplicate of above)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "24-coverage-map",
      children: "2.4 Coverage Map"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "AC"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Test Scenarios"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AC2 (discrete removal step)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T1, T2"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AC3 (deduplication guard)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T2, T3"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AC4 (write to kanban-completed.md)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T1, T2, T5"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AC5 (known fixtures cleared)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T1, T2"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Active task preservation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T4"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "25-post-run-verification-checklist",
      children: "2.5 Post-Run Verification Checklist"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "After running the fixed UKW:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      className: "contains-task-list",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "kboard.md"
        }), " contains zero entries with status COMPLETE or DONE"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "kboard.md"
        }), " contains no task ID appearing in more than one MoSCOW section"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "kanban-completed.md"
        }), " has new entries for ", (0,jsx_runtime.jsx)(_components.code, {
          children: "E2:S16:T01"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "E2:S15:T07"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Each new entry in ", (0,jsx_runtime.jsx)(_components.code, {
          children: "kanban-completed.md"
        }), " includes: task link, description, timestamp, version, ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Agent: UKW"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Active tasks are present and correctly classified"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "section-3-implementation-plan",
      children: "Section 3: Implementation Plan"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "31-files-to-modify",
      children: "3.1 Files to Modify"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "File"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Change Type"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "packages/frameworks/workflow-mgt/cursorrules-ukw-trigger-section.md"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Restructure Step 6 EXECUTE — split into Part A (removal) and Part B (classification)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "packages/frameworks/workflow-mgt/workflows/update-kanban-workflow/update-kanban-workflow.yaml"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Add explicit sub-steps for removal, archive write, and deduplication under Step 6"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "packages/frameworks/workflow-mgt/agents/ukw/AGENTS.md"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Update Step 6 to reflect two-part EXECUTE structure; add archive target and deduplication guard"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "32-change-cursorrules-ukw-trigger-sectionmd",
      children: "3.2 Change: cursorrules-ukw-trigger-section.md"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Target:"
      }), " Step 6 EXECUTE phase."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Current structure (problematic):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "EXECUTE:\n  - LAST: Update MoSCOW priority list (🧠 REQUIRES INTELLIGENT PRIORITIZATION):\n    - Remove completed tasks from \"In Progress\" sections    ← buried sub-bullet\n    - Classify tasks intelligently: ...\n    - Add new in-progress tasks to appropriate MoSCOW sections\n    - Order tasks within each section chronologically\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Replacement structure:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "EXECUTE — Part A: Remove and archive completed tasks (MANDATORY — runs before classification)\n\n  1. Scan every MoSCOW section in kboard.md for tasks whose status is COMPLETE or DONE.\n  2. For each completed task found (process all instances across all sections):\n     a. Remove its entry line from kboard.md.\n     b. Write one archive entry to kanban-completed.md using the standard format (see below).\n        Do not write duplicate archive entries if the same task ID appeared in multiple sections.\n  3. Deduplication pass: scan all remaining MoSCOW sections for any task ID that still appears\n     more than once. For each duplicate set, retain the entry in the highest-priority section\n     (Must Have > Should Have > Could Have > Ongoing > Won't Have) and remove the others.\n\nEXECUTE — Part B: Update MoSCOW priority list (🧠 REQUIRES INTELLIGENT PRIORITIZATION)\n  - Classify remaining in-progress tasks intelligently: ...\n  - Add new in-progress tasks to appropriate MoSCOW sections\n  - Order tasks within each section (most recently updated first)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "VALIDATE addition:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "  - kboard.md contains no COMPLETE or DONE status task entries\n  - No task ID appears in more than one MoSCOW section\n  - kanban-completed.md has been updated with entries for all removed tasks\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "33-kanban-completedmd-entry-format",
      children: "3.3 kanban-completed.md Entry Format"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Match exactly to existing entries:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-markdown",
        children: "- **[E#:S##:T##](epics/Epic-#/Story-###-.../T##-....md)** — [FR/BR-###] [one-line description]; **[FR/BR link](fr-br/...)** IMPLEMENTED.  \n  **Completed:** `YYYY-MM-DDTHH:MM:SSZ` | **Version:** `vX.X.X.X+N` | **Agent:** `UKW`\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The \"Last Updated\" header of ", (0,jsx_runtime.jsx)(_components.code, {
        children: "kanban-completed.md"
      }), " must also be updated to reflect the UKW run timestamp and the task(s) completed."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "34-change-update-kanban-workflowyaml",
      children: "3.4 Change: update-kanban-workflow.yaml"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Under Step 6, add explicit sub-steps:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "step_6_board_update:\n  execute:\n    part_a_remove_and_archive:\n      description: \"Remove completed tasks before classification\"\n      actions:\n        - scan_all_moscow_sections_for_complete_status\n        - remove_completed_entries_from_kboard\n        - write_archive_entries_to_kanban_completed\n        - deduplication_pass_remove_duplicate_task_ids\n      write_targets:\n        - kboard.md\n        - kanban-completed.md\n    part_b_classify:\n      description: \"MoSCOW classification of remaining active tasks\"\n      requires: part_a_complete\n      actions:\n        - intelligent_moscow_classification\n        - add_new_in_progress_tasks\n        - order_within_sections\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "35-change-agentsukwagentsmd",
      children: "3.5 Change: agents/ukw/AGENTS.md"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Target:"
      }), " Step 6. Replace the current Step 6 body with a two-part structure that matches the cursorrules restructuring:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "**Step 6 — Update Kanban Board**\n\nPart A — Remove and archive completed tasks (executes before classification):\n- Scan all MoSCOW sections for tasks with status COMPLETE or DONE\n- For each completed task:\n  - Remove its entry from kboard.md (all sections it appears in)\n  - Write one archive entry to kanban-completed.md (standard format — see below)\n- Deduplication pass: verify no task ID remains in more than one section after removal\n\nArchive entry format (kanban-completed.md):\n  **[E#:S#:T##](path)** — [FR/BR ref] [description]; **[FR/BR link]** STATUS.\n  **Completed:** `TIMESTAMP` | **Version:** `vX.X.X.X+N` | **Agent:** `UKW`\n\nUpdate kanban-completed.md \"Last Updated\" header after writing entries.\n\nPart B — MoSCOW classification (executes after Part A):\n- Apply MoSCOW prioritisation across remaining active work items: ...\n- [existing classification content unchanged]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "36-sequencing",
      children: "3.6 Sequencing"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Apply changes in this order to keep definitions consistent at each step:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "cursorrules-ukw-trigger-section.md"
        }), " — primary definition; drives the other two"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "update-kanban-workflow.yaml"
        }), " — mirrors the cursorrules restructuring"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "agents/ukw/AGENTS.md"
        }), " — aligns the focused agent with the corrected definition"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "section-4-verification-gates",
      children: "Section 4: Verification Gates"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Gate"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Condition"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Pass Criteria"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "G1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Post-definition review"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All three files consistently describe Part A (removal) before Part B (classification)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "G2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Post-UKW run"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "kboard.md"
            }), " has zero COMPLETE/DONE entries"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "G3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Post-UKW run"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No task ID duplicated across MoSCOW sections"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "G4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Post-UKW run"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "kanban-completed.md"
            }), " has new entries for ", (0,jsx_runtime.jsx)(_components.code, {
              children: "E2:S16:T01"
            }), " and ", (0,jsx_runtime.jsx)(_components.code, {
              children: "E2:S15:T07"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "G5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Post-UKW run"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Entry format in kanban-completed.md matches existing entries exactly"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "G6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Post-RW"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Changes committed; ", (0,jsx_runtime.jsx)(_components.code, {
              children: "kboard.md"
            }), " and ", (0,jsx_runtime.jsx)(_components.code, {
              children: "kanban-completed.md"
            }), " clean state persisted"]
          })]
        })]
      })]
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