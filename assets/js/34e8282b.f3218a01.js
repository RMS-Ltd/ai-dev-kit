"use strict";
(self["webpackChunkportal"] = self["webpackChunkportal"] || []).push([["55492"], {
17392(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_project_management_kanban_epics_epic_04_story_02_fr_br_intake_to_tasks_t_02_decision_flow_design_md_34e_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-project-management-kanban-epics-epic-04-story-02-fr-br-intake-to-tasks-t-02-decision-flow-design-md-34e.json
var site_docs_project_management_kanban_epics_epic_04_story_02_fr_br_intake_to_tasks_t_02_decision_flow_design_md_34e_namespaceObject = JSON.parse('{"id":"project-management/kanban/epics/epic-04/story-02-fr-br-intake-to-tasks/T02-decision-flow-design","title":"FR/BR → Task → Story → Epic Decision Flow Design","description":"Task IDS02:T02","source":"@site/../docs/project-management/kanban/epics/epic-04/story-02-fr-br-intake-to-tasks/T02-decision-flow-design.md","sourceDirName":"project-management/kanban/epics/epic-04/story-02-fr-br-intake-to-tasks","slug":"/project-management/kanban/epics/epic-04/story-02-fr-br-intake-to-tasks/T02-decision-flow-design","permalink":"/ai-dev-kit/docs/project-management/kanban/epics/epic-04/story-02-fr-br-intake-to-tasks/T02-decision-flow-design","draft":false,"unlisted":false,"editUrl":"https://github.com/RMS-Ltd/ai-dev-kit/tree/main/docs/../docs/project-management/kanban/epics/epic-04/story-02-fr-br-intake-to-tasks/T02-decision-flow-design.md","tags":[],"version":"current","frontMatter":{"lifecycle":"evergreen","ttl_days":null,"created_at":"2025-12-04T12:01:50.000Z","expires_at":null,"housekeeping_policy":"keep"},"sidebar":"docsSidebar","previous":{"title":"FR/BR Intake Process Analysis Report","permalink":"/ai-dev-kit/docs/project-management/kanban/epics/epic-04/story-02-fr-br-intake-to-tasks/T01-intake-analysis-report"},"next":{"title":"Epic 4, Story 2, Task 3: Create FR/BR intake templates and forms ✅ COMPLETE","permalink":"/ai-dev-kit/docs/project-management/kanban/epics/epic-04/story-02-fr-br-intake-to-tasks/T03-create-frbr-intake-templates-and-forms-complete"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ../docs/project-management/kanban/epics/epic-04/story-02-fr-br-intake-to-tasks/T02-decision-flow-design.md


const frontMatter = {
	lifecycle: 'evergreen',
	ttl_days: null,
	created_at: new Date('2025-12-04T12:01:50.000Z'),
	expires_at: null,
	housekeeping_policy: 'keep'
};
const contentTitle = 'FR/BR → Task → Story → Epic Decision Flow Design';

const assets = {

};



const toc = [{
  "value": "Executive Summary",
  "id": "executive-summary",
  "level": 2
}, {
  "value": "1. Decision Flow Overview",
  "id": "1-decision-flow-overview",
  "level": 2
}, {
  "value": "1.1 High-Level Flow",
  "id": "11-high-level-flow",
  "level": 3
}, {
  "value": "2. Detailed Decision Flow",
  "id": "2-detailed-decision-flow",
  "level": 2
}, {
  "value": "2.1 Step-by-Step Process",
  "id": "21-step-by-step-process",
  "level": 3
}, {
  "value": "Step 1: Receive FR/BR",
  "id": "step-1-receive-frbr",
  "level": 4
}, {
  "value": "Step 2: Search for Existing Story",
  "id": "step-2-search-for-existing-story",
  "level": 4
}, {
  "value": "Step 3A: Create Task Under Existing Story",
  "id": "step-3a-create-task-under-existing-story",
  "level": 4
}, {
  "value": "Step 3B: Search for Existing Epic",
  "id": "step-3b-search-for-existing-epic",
  "level": 4
}, {
  "value": "Step 4A: Create Story Under Existing Epic",
  "id": "step-4a-create-story-under-existing-epic",
  "level": 4
}, {
  "value": "Step 4B: Create New Epic",
  "id": "step-4b-create-new-epic",
  "level": 4
}, {
  "value": "3. Decision Criteria",
  "id": "3-decision-criteria",
  "level": 2
}, {
  "value": "3.1 Story Matching Criteria",
  "id": "31-story-matching-criteria",
  "level": 3
}, {
  "value": "3.2 Epic Matching Criteria",
  "id": "32-epic-matching-criteria",
  "level": 3
}, {
  "value": "3.3 Epic Creation Guidelines",
  "id": "33-epic-creation-guidelines",
  "level": 3
}, {
  "value": "4. Edge Cases and Exceptions",
  "id": "4-edge-cases-and-exceptions",
  "level": 2
}, {
  "value": "4.1 Complex FR Requiring Multiple Tasks",
  "id": "41-complex-fr-requiring-multiple-tasks",
  "level": 3
}, {
  "value": "4.2 Ambiguous Scope",
  "id": "42-ambiguous-scope",
  "level": 3
}, {
  "value": "4.3 BR Affecting Multiple Components",
  "id": "43-br-affecting-multiple-components",
  "level": 3
}, {
  "value": "4.4 FR/BR That Spans Multiple Epics",
  "id": "44-frbr-that-spans-multiple-epics",
  "level": 3
}, {
  "value": "4.5 Duplicate FR/BR",
  "id": "45-duplicate-frbr",
  "level": 3
}, {
  "value": "5. Versioning Integration",
  "id": "5-versioning-integration",
  "level": 2
}, {
  "value": "5.1 Version Assignment Rules",
  "id": "51-version-assignment-rules",
  "level": 3
}, {
  "value": "5.2 Version Validation",
  "id": "52-version-validation",
  "level": 3
}, {
  "value": "6. Kanban Board Integration",
  "id": "6-kanban-board-integration",
  "level": 2
}, {
  "value": "6.1 Board Update Rules",
  "id": "61-board-update-rules",
  "level": 3
}, {
  "value": "7. Visual Decision Flow Diagram",
  "id": "7-visual-decision-flow-diagram",
  "level": 2
}, {
  "value": "7.1 Text-Based Flowchart",
  "id": "71-text-based-flowchart",
  "level": 3
}, {
  "value": "8. Decision Criteria Summary Table",
  "id": "8-decision-criteria-summary-table",
  "level": 2
}, {
  "value": "9. Examples",
  "id": "9-examples",
  "level": 2
}, {
  "value": "Example 1: Simple FR → Existing Story",
  "id": "example-1-simple-fr--existing-story",
  "level": 3
}, {
  "value": "Example 2: FR → New Story (Existing Epic)",
  "id": "example-2-fr--new-story-existing-epic",
  "level": 3
}, {
  "value": "Example 3: FR → New Epic",
  "id": "example-3-fr--new-epic",
  "level": 3
}, {
  "value": "Example 4: Complex FR → Multiple Tasks",
  "id": "example-4-complex-fr--multiple-tasks",
  "level": 3
}, {
  "value": "10. Integration Points",
  "id": "10-integration-points",
  "level": 2
}, {
  "value": "10.1 Kanban Integration",
  "id": "101-kanban-integration",
  "level": 3
}, {
  "value": "10.2 Versioning Integration",
  "id": "102-versioning-integration",
  "level": 3
}, {
  "value": "10.3 Release Workflow Integration",
  "id": "103-release-workflow-integration",
  "level": 3
}, {
  "value": "11. Next Steps",
  "id": "11-next-steps",
  "level": 2
}, {
  "value": "12. References",
  "id": "12-references",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    br: "br",
    code: "code",
    em: "em",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    header: "header",
    hr: "hr",
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
        id: "frbr--task--story--epic-decision-flow-design",
        children: "FR/BR → Task → Story → Epic Decision Flow Design"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Task ID:"
      }), " E04:S02", ":T02", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Task:"
      }), " E04:S02", ":T02", " – Design FR/BR → Task → Story → Epic decision flow", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Date:"
      }), " 2025-12-02", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Author:"
      }), " AI Agent (Auto)", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Status:"
      }), " ✅ COMPLETE"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "executive-summary",
      children: "Executive Summary"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This document designs a clear, actionable decision flow for converting Feature Requests (FRs) and Bug Reports (BRs) into Kanban Tasks, Stories, and Epics. The flow operationalizes the canonical rule from the Kanban governance policy and provides decision criteria, visual flowcharts, and edge case handling."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Key Deliverables:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Text-based decision flow diagram"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Story matching criteria"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Epic matching/creation criteria"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Edge case handling"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Versioning integration rules"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1-decision-flow-overview",
      children: "1. Decision Flow Overview"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "11-high-level-flow",
      children: "1.1 High-Level Flow"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "FR/BR Arrives\n    ↓\nIs it a Feature Request (FR) or Bug Report (BR)?\n    ↓\n[BR Path] → Identify affected area/component\n[FR Path] → Analyze scope and requirements\n    ↓\nSearch for existing Story that matches scope\n    ↓\n┌─────────────────────────────────────┐\n│ Story Found?                        │\n└─────────────────────────────────────┘\n    │                    │\n   YES                  NO\n    │                    │\n    ↓                    ↓\nCreate Task      Search for existing Epic\nunder Story      that matches problem domain\n    │                    │\n    │            ┌───────────────────────┐\n    │            │ Epic Found?           │\n    │            └───────────────────────┘\n    │                    │\n    │                   YES\n    │                    │\n    │                    ↓\n    │            Create Story under Epic\n    │            Create Task under Story\n    │                    │\n    │                   NO\n    │                    │\n    │                    ↓\n    │            Create new Epic\n    │            Create Story under Epic\n    │            Create Task under Story\n    │                    │\n    └────────────────────┘\n            ↓\n    Assign Version (RC.EPIC.STORY.TASK+BUILD)\n    Update Kanban Board\n    Link FR/BR to Task\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "2-detailed-decision-flow",
      children: "2. Detailed Decision Flow"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "21-step-by-step-process",
      children: "2.1 Step-by-Step Process"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "step-1-receive-frbr",
      children: "Step 1: Receive FR/BR"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Input:"
      }), " Feature Request or Bug Report", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Actions:"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Capture FR/BR details (title, description, priority, etc.)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Classify as FR or BR"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Extract key information:", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "For FR:"
            }), " Desired functionality, use case, scope"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "For BR:"
            }), " Affected component, symptoms, severity"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      }), " Classified FR/BR with extracted information"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "step-2-search-for-existing-story",
      children: "Step 2: Search for Existing Story"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Criteria for Story Matching:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A Story matches if ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "ALL"
      }), " of the following are true:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Scope Alignment:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Story's goal/scope encompasses the FR/BR's requirements"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Story addresses the same problem domain or feature area"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Story is not marked as COMPLETE or DEFERRED"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Epic Alignment:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Story belongs to an Epic that conceptually fits the FR/BR"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Epic's domain matches the FR/BR's problem space"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Timing Alignment:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Story is not blocked by dependencies that would prevent new Tasks"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Story's status allows new Tasks (TODO, IN PROGRESS, not COMPLETE)"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Search Process:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Review Epic documents for domain matches"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Within matching Epics, review Story documents"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Check Story goals, scope, and acceptance criteria"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Verify Story status allows new Tasks"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Decision Point:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Story Found:"
        }), " Proceed to Step 3A (Create Task)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "No Story Found:"
        }), " Proceed to Step 3B (Create Story)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "step-3a-create-task-under-existing-story",
      children: "Step 3A: Create Task Under Existing Story"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "When:"
      }), " Story found that matches FR/BR scope"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Actions:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Determine next Task number for the Story"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Create Task document using Story's task structure"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Add Task to Story's task checklist"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Link FR/BR to Task (reference in Task document)"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Determine version: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "RC.EPIC.STORY.{NEXT_TASK}+1"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update Story status if needed (TODO → IN PROGRESS)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update Kanban board"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Version Calculation:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use existing Epic number (from Story)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use existing Story number"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use next available Task number"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Set BUILD to 1 (first build for this Task)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Story: Epic 4, Story 2, currently has Tasks 1-3"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "New Task: Task 4"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Version: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "0.4.2.4+1"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      }), " Task created, version assigned, Kanban updated"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "step-3b-search-for-existing-epic",
      children: "Step 3B: Search for Existing Epic"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "When:"
      }), " No matching Story found"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Criteria for Epic Matching:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["An Epic matches if ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "ALL"
      }), " of the following are true:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Domain Alignment:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Epic's problem domain matches the FR/BR's problem space"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Epic's goals encompass the FR/BR's requirements"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Epic is not marked as COMPLETE or DEFERRED"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Conceptual Fit:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "FR/BR fits within Epic's conceptual boundaries"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Epic's scope is broad enough to include this work"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Epic's purpose aligns with FR/BR's intent"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Search Process:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Review all Epic documents"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Check Epic goals, overview, and problem domain"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Verify Epic status allows new Stories"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Consider Epic's current Stories for context"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Decision Point:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Epic Found:"
        }), " Proceed to Step 4A (Create Story under Epic)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "No Epic Found:"
        }), " Proceed to Step 4B (Create Epic)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "step-4a-create-story-under-existing-epic",
      children: "Step 4A: Create Story Under Existing Epic"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "When:"
      }), " Epic found that matches problem domain, but no Story exists"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Actions:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Determine next Story number for the Epic"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Create Story document using Epic's Story template"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Add Story to Epic's story checklist"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Create Story directory: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "epics/Epic-X/stories/Story-XXX-*.md"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Create initial Task under new Story (Step 3A process)"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Determine version: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "RC.EPIC.{NEXT_STORY}.1+1"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update Epic status if needed"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update Kanban board"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Version Calculation:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use existing Epic number"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use next available Story number"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Set TASK to 1 (first task in new Story)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Set BUILD to 1 (first build for this Task)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Epic: Epic 4, currently has Stories 1-2"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "New Story: Story 3"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "New Task: Task 1"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Version: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "0.4.3.1+1"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      }), " Story and Task created, version assigned, Kanban updated"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "step-4b-create-new-epic",
      children: "Step 4B: Create New Epic"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "When:"
      }), " No matching Epic found"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Actions:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Determine next Epic number (check existing Epics)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Create Epic document using Epic template"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Create Epic directory: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "epics/Epic-X/"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Create ", (0,jsx_runtime.jsx)(_components.code, {
          children: "stories/"
        }), " subdirectory"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Create Story under new Epic (Step 4A process)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Create Task under new Story (Step 3A process)"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Determine version: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "RC.{NEXT_EPIC}.1.1+1"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update Kanban board"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Epic Creation Guidelines:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Broad and Abstract:"
        }), " Epic should be conceptually broad enough to host multiple Stories"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Problem Domain:"
        }), " Epic should represent a coherent problem domain or feature area"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Future-Proof:"
        }), " Epic should be able to accommodate future related work"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Naming:"
        }), " Use descriptive, domain-focused names (e.g., \"User Authentication\", \"Data Processing\", \"API Integration\")"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Version Calculation:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use next available Epic number"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Set STORY to 1 (first story in new Epic)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Set TASK to 1 (first task in new Story)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Set BUILD to 1 (first build for this Task)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Existing Epics: 1, 2, 3, 4"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "New Epic: Epic 5"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "New Story: Story 1"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "New Task: Task 1"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Version: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "0.5.1.1+1"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      }), " Epic, Story, and Task created, version assigned, Kanban updated"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "3-decision-criteria",
      children: "3. Decision Criteria"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "31-story-matching-criteria",
      children: "3.1 Story Matching Criteria"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Primary Criteria (ALL must match):"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Scope Match:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Story's goal encompasses FR/BR requirements"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Story addresses same problem/feature area"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Story's acceptance criteria align with FR/BR"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Epic Alignment:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Story belongs to Epic that fits FR/BR domain"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Epic's purpose aligns with FR/BR intent"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Status Compatibility:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Story is not COMPLETE"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Story is not DEFERRED"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Story can accept new Tasks"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Secondary Criteria (Consider):"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Story's current Tasks (are they related?)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Story's timeline (does it fit?)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Story's dependencies (are they blocking?)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Decision Rule:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["If ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "ALL"
        }), " primary criteria match → Use existing Story"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["If ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "ANY"
        }), " primary criteria don't match → Create new Story"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "32-epic-matching-criteria",
      children: "3.2 Epic Matching Criteria"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Primary Criteria (ALL must match):"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Domain Match:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Epic's problem domain matches FR/BR problem space"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Epic's goals encompass FR/BR requirements"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Epic's conceptual boundaries include FR/BR scope"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Status Compatibility:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Epic is not COMPLETE"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Epic is not DEFERRED"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Epic can accept new Stories"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Secondary Criteria (Consider):"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Epic's current Stories (are they related?)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Epic's scope (is it too narrow or too broad?)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Epic's purpose (does it align?)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Decision Rule:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["If ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "ALL"
        }), " primary criteria match → Use existing Epic"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["If ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "ANY"
        }), " primary criteria don't match → Create new Epic"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "33-epic-creation-guidelines",
      children: "3.3 Epic Creation Guidelines"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "When Creating a New Epic:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Broad and Abstract:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Epic should represent a coherent problem domain"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Epic should be broad enough for multiple Stories"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Epic should be conceptually abstract (not too specific)"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Examples of Good Epic Concepts:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "\"User Authentication & Authorization\""
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "\"Data Processing & Analytics\""
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "\"API Integration & External Services\""
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "\"UI/UX Framework & Components\""
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "\"Testing Infrastructure & Tools\""
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Examples of Poor Epic Concepts:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "\"Add login button\" (too specific, should be a Task)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "\"Fix bug in payment\" (too specific, should be a Task)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "\"Everything\" (too broad, no clear domain)"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Naming Convention:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Use descriptive, domain-focused names"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Use title case"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Be specific enough to distinguish from other Epics"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Be abstract enough to host multiple Stories"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "4-edge-cases-and-exceptions",
      children: "4. Edge Cases and Exceptions"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "41-complex-fr-requiring-multiple-tasks",
      children: "4.1 Complex FR Requiring Multiple Tasks"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Scenario:"
      }), " FR requires work across multiple Stories or Epics"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Handling:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Analyze FR scope:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Break down FR into logical components"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Identify which components belong to which Stories/Epics"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Create Tasks:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Create one Task per Story/Epic component"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Link all Tasks to the original FR"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Ensure each Task has clear scope"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Versioning:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Each Task gets its own version"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Versions may span multiple Stories/Epics"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Document cross-Task dependencies"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "FR: \"Add user authentication with OAuth\""
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Components:"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Backend API (Epic 2, Story 1) → Task 5"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Frontend UI (Epic 3, Story 2) → Task 3"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Documentation (Epic 1, Story 3) → Task 2"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Versions: ", (0,jsx_runtime.jsx)(_components.code, {
            children: "0.2.1.5+1"
          }), ", ", (0,jsx_runtime.jsx)(_components.code, {
            children: "0.3.2.3+1"
          }), ", ", (0,jsx_runtime.jsx)(_components.code, {
            children: "0.1.3.2+1"
          })]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "42-ambiguous-scope",
      children: "4.2 Ambiguous Scope"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Scenario:"
      }), " FR/BR scope is unclear or could fit multiple Stories/Epics"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Handling:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Clarify scope:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Ask for clarification from FR/BR submitter"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Review related Stories/Epics for context"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Consider FR/BR's intent and use case"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Decision:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "If scope can be clarified → Proceed with matching"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "If scope remains ambiguous → Create new Story (can be refined later)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Document ambiguity in Story/Task notes"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Best Practice:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "When in doubt, create new Story (can be merged/refined later)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Document decision rationale"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Review during Story grooming"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "43-br-affecting-multiple-components",
      children: "4.3 BR Affecting Multiple Components"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Scenario:"
      }), " Bug affects multiple components/areas"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Handling:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Identify root cause:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Determine primary affected component"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Identify secondary affected components"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Create Tasks:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Primary fix: Create Task in primary component's Story"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Secondary fixes: Create Tasks in affected components' Stories"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Link all Tasks to the original BR"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Versioning:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Each fix gets its own version"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Document dependencies between fixes"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "BR: \"Payment fails when user has special characters in name\""
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Root cause: Backend validation (Epic 2, Story 1) → Task 6"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Secondary: Frontend validation (Epic 3, Story 2) → Task 4"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Versions: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "0.2.1.6+1"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "0.3.2.4+1"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "44-frbr-that-spans-multiple-epics",
      children: "4.4 FR/BR That Spans Multiple Epics"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Scenario:"
      }), " FR/BR requires work across multiple Epics"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Handling:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Analyze requirements:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Break down FR/BR into Epic-specific components"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Identify which components belong to which Epics"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Create Tasks:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Create one Task per Epic component"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Link all Tasks to the original FR/BR"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Document cross-Epic dependencies"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Coordination:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Document dependencies in each Task"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Consider Epic coordination during planning"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "May require Epic owners to coordinate"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "FR: \"Add analytics dashboard\""
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Components:"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Data processing (Epic 5) → Task 1"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "UI components (Epic 6) → Task 1"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "API endpoints (Epic 2) → Task 8"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Versions: ", (0,jsx_runtime.jsx)(_components.code, {
            children: "0.5.1.1+1"
          }), ", ", (0,jsx_runtime.jsx)(_components.code, {
            children: "0.6.1.1+1"
          }), ", ", (0,jsx_runtime.jsx)(_components.code, {
            children: "0.2.1.8+1"
          })]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "45-duplicate-frbr",
      children: "4.5 Duplicate FR/BR"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Scenario:"
      }), " FR/BR is duplicate of existing work"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Handling:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Check for existing Tasks:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Search Kanban board for similar Tasks"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Review Story documents for related work"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Check if work is already in progress"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Decision:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "If duplicate found → Link FR/BR to existing Task"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "If similar but different → Create new Task, document relationship"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "If unclear → Create new Task, review during grooming"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Documentation:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Document duplicate status in Task notes"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Link related Tasks/FRs/BRs"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Close duplicate FR/BR with reference to original"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "5-versioning-integration",
      children: "5. Versioning Integration"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "51-version-assignment-rules",
      children: "5.1 Version Assignment Rules"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Rule 1: Task Under Existing Story"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Version: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "RC.EPIC.STORY.{NEXT_TASK}+1"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Example: Story has Tasks 1-3 → New Task 4 → ", (0,jsx_runtime.jsx)(_components.code, {
          children: "0.4.2.4+1"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Rule 2: Task Under New Story (Existing Epic)"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Version: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "RC.EPIC.{NEXT_STORY}.1+1"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Example: Epic has Stories 1-2 → New Story 3, Task 1 → ", (0,jsx_runtime.jsx)(_components.code, {
          children: "0.4.3.1+1"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Rule 3: Task Under New Story (New Epic)"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Version: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "RC.{NEXT_EPIC}.1.1+1"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Example: New Epic 5, Story 1, Task 1 → ", (0,jsx_runtime.jsx)(_components.code, {
          children: "0.5.1.1+1"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Rule 4: Multiple Tasks from Single FR/BR"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Each Task gets its own version"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Versions may span multiple Stories/Epics"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Document relationship in Task notes"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "52-version-validation",
      children: "5.2 Version Validation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Before Assigning Version:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Verify Epic number exists and is valid"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Verify Story number is next in sequence for Epic"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Verify Task number is next in sequence for Story"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Verify BUILD starts at 1 for new Task"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Check for version conflicts (parallel development)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Version Format:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Must follow ", (0,jsx_runtime.jsx)(_components.code, {
          children: "RC.EPIC.STORY.TASK+BUILD"
        }), " schema"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "RC: 0 for development, 1+ for release candidates"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "EPIC: Must match existing Epic or be next in sequence"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "STORY: Must match existing Story or be next in sequence"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "TASK: Must be next in sequence for Story"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "BUILD: Always starts at 1 for new Task"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "6-kanban-board-integration",
      children: "6. Kanban Board Integration"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "61-board-update-rules",
      children: "6.1 Board Update Rules"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "When Creating Task:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update Story's task checklist"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update Story status if needed (TODO → IN PROGRESS)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update Epic's story checklist if new Story"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update Epic status if needed"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Update Kanban board (", (0,jsx_runtime.jsx)(_components.code, {
          children: "_index.md"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "kboard.md"
        }), ")"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "When Creating Story:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Add Story to Epic's story checklist"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Create Story document in ", (0,jsx_runtime.jsx)(_components.code, {
          children: "epics/Epic-X/stories/"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update Epic status if needed"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update Kanban board"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "When Creating Epic:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Create Epic document in ", (0,jsx_runtime.jsx)(_components.code, {
          children: "epics/Epic-X.md"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Create Epic directory structure"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Add Epic to Kanban board"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update board summary"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "7-visual-decision-flow-diagram",
      children: "7. Visual Decision Flow Diagram"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "71-text-based-flowchart",
      children: "7.1 Text-Based Flowchart"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "START: FR/BR Arrives\n│\n├─→ Classify: FR or BR?\n│   │\n│   ├─→ [FR] Extract: Functionality, use case, scope\n│   └─→ [BR] Extract: Affected component, symptoms, severity\n│\n├─→ Search for existing Story matching scope\n│   │\n│   ├─→ [Story Found]\n│   │   │\n│   │   ├─→ Verify Story status allows new Tasks\n│   │   │   │\n│   │   ├─→ [Status OK]\n│   │   │   │\n│   │   │   ├─→ Determine next Task number\n│   │   │   ├─→ Create Task under Story\n│   │   │   ├─→ Assign version: RC.EPIC.STORY.{NEXT_TASK}+1\n│   │   │   ├─→ Update Story task checklist\n│   │   │   ├─→ Update Kanban board\n│   │   │   └─→ END: Task created\n│   │   │\n│   │   └─→ [Status Blocked]\n│   │       │\n│   │       └─→ Create new Story (proceed to Story creation)\n│   │\n│   └─→ [No Story Found]\n│       │\n│       ├─→ Search for existing Epic matching problem domain\n│       │   │\n│       │   ├─→ [Epic Found]\n│       │   │   │\n│       │   │   ├─→ Verify Epic status allows new Stories\n│       │   │   │   │\n│       │   │   ├─→ [Status OK]\n│       │   │   │   │\n│       │   │   │   ├─→ Determine next Story number\n│       │   │   │   ├─→ Create Story under Epic\n│       │   │   │   ├─→ Create Task under Story (Task 1)\n│       │   │   │   ├─→ Assign version: RC.EPIC.{NEXT_STORY}.1+1\n│       │   │   │   ├─→ Update Epic story checklist\n│       │   │   │   ├─→ Update Kanban board\n│       │   │   │   └─→ END: Story and Task created\n│       │   │   │\n│       │   │   └─→ [Status Blocked]\n│       │   │       │\n│       │   │       └─→ Create new Epic (proceed to Epic creation)\n│       │   │\n│       │   └─→ [No Epic Found]\n│       │       │\n│       │       ├─→ Determine next Epic number\n│       │       ├─→ Create new Epic (broad, abstract concept)\n│       │       ├─→ Create Story under Epic (Story 1)\n│       │       ├─→ Create Task under Story (Task 1)\n│       │       ├─→ Assign version: RC.{NEXT_EPIC}.1.1+1\n│       │       ├─→ Update Kanban board\n│       │       └─→ END: Epic, Story, and Task created\n│\n└─→ END: FR/BR converted to Task(s)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "8-decision-criteria-summary-table",
      children: "8. Decision Criteria Summary Table"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Decision Point"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Criteria"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Action if Match"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Action if No Match"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Story Match"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Scope aligns, Epic aligns, Status allows"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Create Task under Story"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Search for Epic"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Epic Match"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Domain aligns, Status allows"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Create Story under Epic"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Create new Epic"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Status Check"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Story/Epic not COMPLETE/DEFERRED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Proceed with creation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Create new (Story/Epic)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "9-examples",
      children: "9. Examples"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-1-simple-fr--existing-story",
      children: "Example 1: Simple FR → Existing Story"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "FR:"
      }), " \"Add dark mode toggle to settings page\"", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Existing Story:"
      }), " Epic 3, Story 2 - \"UI Theme & Styling\"", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Decision:"
      }), " Story matches (scope: UI theming)", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Action:"
      }), " Create Task 4 under Story 2", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Version:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "0.3.2.4+1"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-2-fr--new-story-existing-epic",
      children: "Example 2: FR → New Story (Existing Epic)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "FR:"
      }), " \"Add user profile picture upload\"", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Existing Epic:"
      }), " Epic 2 - \"User Management\"", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Existing Stories:"
      }), " Story 1 (Login), Story 2 (Registration)", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Decision:"
      }), " No matching Story, but Epic matches (user management)", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Action:"
      }), " Create Story 3 \"User Profile\" under Epic 2, Task 1", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Version:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "0.2.3.1+1"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-3-fr--new-epic",
      children: "Example 3: FR → New Epic"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "FR:"
      }), " \"Add real-time collaboration features\"", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Existing Epics:"
      }), " 1-4 (Core, Workflow, Versioning, Kanban)", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Decision:"
      }), " No matching Epic (new problem domain)", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Action:"
      }), " Create Epic 5 \"Real-Time Collaboration\", Story 1, Task 1", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Version:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "0.5.1.1+1"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-4-complex-fr--multiple-tasks",
      children: "Example 4: Complex FR → Multiple Tasks"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "FR:"
      }), " \"Add OAuth authentication with Google and GitHub\"", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Analysis:"
      }), " Requires backend (Epic 2), frontend (Epic 3), docs (Epic 1)", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Decision:"
      }), " Create Tasks in multiple Stories", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Actions:"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Epic 2, Story 1, Task 5: Backend OAuth implementation → ", (0,jsx_runtime.jsx)(_components.code, {
          children: "0.2.1.5+1"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Epic 3, Story 2, Task 3: Frontend OAuth UI → ", (0,jsx_runtime.jsx)(_components.code, {
          children: "0.3.2.3+1"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Epic 1, Story 3, Task 2: OAuth documentation → ", (0,jsx_runtime.jsx)(_components.code, {
          children: "0.1.3.2+1"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "10-integration-points",
      children: "10. Integration Points"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "101-kanban-integration",
      children: "10.1 Kanban Integration"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Tasks created using Kanban Task structure"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Stories created using Kanban Story template"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Epics created using Kanban Epic template"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Board updated with new items"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Status fields synchronized"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "102-versioning-integration",
      children: "10.2 Versioning Integration"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Versions follow ", (0,jsx_runtime.jsx)(_components.code, {
          children: "RC.EPIC.STORY.TASK+BUILD"
        }), " schema"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Version numbers assigned at Task creation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Version file updated when Task is active"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Changelog entries reference version"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "103-release-workflow-integration",
      children: "10.3 Release Workflow Integration"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Tasks are compatible with RW"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Version numbers align with RW expectations"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Kanban docs updated by RW Step 6"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Forensic markers added by RW"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "11-next-steps",
      children: "11. Next Steps"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This decision flow design provides the foundation for:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Task 3:"
        }), " Creating FR/BR intake templates"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Task 4:"
        }), " Documenting the intake process with examples"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Task 5:"
        }), " Creating agent/user guides"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "12-references",
      children: "12. References"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "packages/frameworks/kanban/policies/kanban-governance-policy.md"
        }), " (FR/BR rules)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "docs/project-management/rituals/policy/kanban-governance-policy.md"
        }), " (dev-kit implementation)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "docs/project-management/kanban/story-02-fr-br-intake-to-tasks/T01-intake-analysis-report.md"
        }), " (analysis)"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "packages/frameworks/kanban/templates/EPIC_TEMPLATE.md"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "packages/frameworks/kanban/templates/STORY_TEMPLATE.md"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.em, {
        children: "End of Decision Flow Design Document"
      })
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