"use strict";
(self["webpackChunkportal"] = self["webpackChunkportal"] || []).push([["29807"], {
48640(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_project_management_kanban_epics_epic_03_story_02_versioning_cookbook_and_examples_t_01_core_versioning_scenarios_md_04b_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-project-management-kanban-epics-epic-03-story-02-versioning-cookbook-and-examples-t-01-core-versioning-scenarios-md-04b.json
var site_docs_project_management_kanban_epics_epic_03_story_02_versioning_cookbook_and_examples_t_01_core_versioning_scenarios_md_04b_namespaceObject = JSON.parse('{"id":"project-management/kanban/epics/epic-03/story-02-versioning-cookbook-and-examples/T01-core-versioning-scenarios","title":"Core Versioning Scenarios","description":"Task IDS02:T01","source":"@site/../docs/project-management/kanban/epics/epic-03/story-02-versioning-cookbook-and-examples/T01-core-versioning-scenarios.md","sourceDirName":"project-management/kanban/epics/epic-03/story-02-versioning-cookbook-and-examples","slug":"/project-management/kanban/epics/epic-03/story-02-versioning-cookbook-and-examples/T01-core-versioning-scenarios","permalink":"/ai-dev-kit/docs/project-management/kanban/epics/epic-03/story-02-versioning-cookbook-and-examples/T01-core-versioning-scenarios","draft":false,"unlisted":false,"editUrl":"https://github.com/RMS-Ltd/ai-dev-kit/tree/main/docs/../docs/project-management/kanban/epics/epic-03/story-02-versioning-cookbook-and-examples/T01-core-versioning-scenarios.md","tags":[],"version":"current","frontMatter":{"lifecycle":"evergreen","ttl_days":null,"created_at":"2025-12-04T12:01:50.000Z","expires_at":null,"housekeeping_policy":"keep"},"sidebar":"docsSidebar","previous":{"title":"Story 001 – Dev Kit Alignment with Versioning Framework","permalink":"/ai-dev-kit/docs/project-management/kanban/epics/epic-03/story-01-dev-kit-alignment-with-versioning-framework"},"next":{"title":"Epic 3, Story 2, Task 2: Create versioning cookbook document with worked examples","permalink":"/ai-dev-kit/docs/project-management/kanban/epics/epic-03/story-02-versioning-cookbook-and-examples/T02-create-versioning-cookbook-document-with-worked-examples"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ../docs/project-management/kanban/epics/epic-03/story-02-versioning-cookbook-and-examples/T01-core-versioning-scenarios.md


const frontMatter = {
	lifecycle: 'evergreen',
	ttl_days: null,
	created_at: new Date('2025-12-04T12:01:50.000Z'),
	expires_at: null,
	housekeeping_policy: 'keep'
};
const contentTitle = 'Core Versioning Scenarios';

const assets = {

};



const toc = [{
  "value": "Executive Summary",
  "id": "executive-summary",
  "level": 2
}, {
  "value": "1. New Epic",
  "id": "1-new-epic",
  "level": 2
}, {
  "value": "Context",
  "id": "context",
  "level": 3
}, {
  "value": "Expected Version Behaviour",
  "id": "expected-version-behaviour",
  "level": 3
}, {
  "value": "Kanban/RW Interactions",
  "id": "kanbanrw-interactions",
  "level": 3
}, {
  "value": "2. New Story Under Existing Epic",
  "id": "2-new-story-under-existing-epic",
  "level": 2
}, {
  "value": "Context",
  "id": "context-1",
  "level": 3
}, {
  "value": "Expected Version Behaviour",
  "id": "expected-version-behaviour-1",
  "level": 3
}, {
  "value": "Kanban/RW Interactions",
  "id": "kanbanrw-interactions-1",
  "level": 3
}, {
  "value": "3. New Task Under Existing Story",
  "id": "3-new-task-under-existing-story",
  "level": 2
}, {
  "value": "Context",
  "id": "context-2",
  "level": 3
}, {
  "value": "Expected Version Behaviour",
  "id": "expected-version-behaviour-2",
  "level": 3
}, {
  "value": "Kanban/RW Interactions",
  "id": "kanbanrw-interactions-2",
  "level": 3
}, {
  "value": "4. Bugfix/Hotfix on Existing Task",
  "id": "4-bugfixhotfix-on-existing-task",
  "level": 2
}, {
  "value": "Context",
  "id": "context-3",
  "level": 3
}, {
  "value": "Expected Version Behaviour",
  "id": "expected-version-behaviour-3",
  "level": 3
}, {
  "value": "Kanban/RW Interactions",
  "id": "kanbanrw-interactions-3",
  "level": 3
}, {
  "value": "5. Parallel Epics and Stories",
  "id": "5-parallel-epics-and-stories",
  "level": 2
}, {
  "value": "Context",
  "id": "context-4",
  "level": 3
}, {
  "value": "Expected Version Behaviour",
  "id": "expected-version-behaviour-4",
  "level": 3
}, {
  "value": "Kanban/RW Interactions",
  "id": "kanbanrw-interactions-4",
  "level": 3
}, {
  "value": "6. Task Transitions",
  "id": "6-task-transitions",
  "level": 2
}, {
  "value": "Context",
  "id": "context-5",
  "level": 3
}, {
  "value": "Expected Version Behaviour",
  "id": "expected-version-behaviour-5",
  "level": 3
}, {
  "value": "Kanban/RW Interactions",
  "id": "kanbanrw-interactions-5",
  "level": 3
}, {
  "value": "7. Story Completion",
  "id": "7-story-completion",
  "level": 2
}, {
  "value": "Context",
  "id": "context-6",
  "level": 3
}, {
  "value": "Expected Version Behaviour",
  "id": "expected-version-behaviour-6",
  "level": 3
}, {
  "value": "Kanban/RW Interactions",
  "id": "kanbanrw-interactions-6",
  "level": 3
}, {
  "value": "8. Epic Completion",
  "id": "8-epic-completion",
  "level": 2
}, {
  "value": "Context",
  "id": "context-7",
  "level": 3
}, {
  "value": "Expected Version Behaviour",
  "id": "expected-version-behaviour-7",
  "level": 3
}, {
  "value": "Kanban/RW Interactions",
  "id": "kanbanrw-interactions-7",
  "level": 3
}, {
  "value": "9. Scenario Summary Table",
  "id": "9-scenario-summary-table",
  "level": 2
}, {
  "value": "10. Validation Against Policies",
  "id": "10-validation-against-policies",
  "level": 2
}, {
  "value": "Framework Policy Alignment",
  "id": "framework-policy-alignment",
  "level": 3
}, {
  "value": "Dev-Kit Policy Alignment",
  "id": "dev-kit-policy-alignment",
  "level": 3
}, {
  "value": "Integration Alignment",
  "id": "integration-alignment",
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
        id: "core-versioning-scenarios",
        children: "Core Versioning Scenarios"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Task ID:"
      }), " E03:S02", ":T01", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Task:"
      }), " E03:S02", ":T01", " – Define core versioning scenarios for the cookbook", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Date:"
      }), " 2025-12-03", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Status:"
      }), " ✅ COMPLETE", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Version:"
      }), " v0.3.2.1+1"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "executive-summary",
      children: "Executive Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["This document defines the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "core versioning scenarios"
      }), " that will be covered in the versioning cookbook. Each scenario describes the context, expected version behaviour, and interactions with Kanban and Release Workflow (RW)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Scenarios Identified:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "New Epic"
        }), " – Starting a new epic from scratch"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "New Story Under Existing Epic"
        }), " – Adding a story to an existing epic"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "New Task Under Existing Story"
        }), " – Adding a task to an existing story"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Bugfix/Hotfix on Existing Task"
        }), " – Fixing issues in completed or in-progress tasks"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Parallel Epics and Stories"
        }), " – Working on multiple epics/stories simultaneously"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Task Transitions"
        }), " – Moving from one task to another within a story"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Story Completion"
        }), " – Completing all tasks in a story"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Epic Completion"
        }), " – Completing all stories in an epic"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1-new-epic",
      children: "1. New Epic"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "context",
      children: "Context"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Starting a completely new epic that has no prior work in the repository."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Example:"
      }), " Creating Epic 5 for \"Documentation Framework\" when Epics 1-4 already exist."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "expected-version-behaviour",
      children: "Expected Version Behaviour"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Initial Version:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "RC"
        }), ": ", (0,jsx_runtime.jsx)(_components.code, {
          children: "0"
        }), " (development)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "EPIC"
        }), ": New epic number (e.g., ", (0,jsx_runtime.jsx)(_components.code, {
          children: "5"
        }), ")"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "STORY"
        }), ": ", (0,jsx_runtime.jsx)(_components.code, {
          children: "1"
        }), " (first story in epic)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "TASK"
        }), ": ", (0,jsx_runtime.jsx)(_components.code, {
          children: "1"
        }), " (first task in first story)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "BUILD"
        }), ": ", (0,jsx_runtime.jsx)(_components.code, {
          children: "1"
        }), " (first build)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Version Example:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "0.5.1.1+1"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Version File Update:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "VERSION_RC = 0\nVERSION_EPIC = 5      # New epic number\nVERSION_STORY = 1      # First story\nVERSION_TASK = 1       # First task\nVERSION_BUILD = 1      # First build\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "kanbanrw-interactions",
      children: "Kanban/RW Interactions"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Kanban:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Create new Epic document (", (0,jsx_runtime.jsx)(_components.code, {
          children: "epic-05.md"
        }), ")"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Create first Story document (", (0,jsx_runtime.jsx)(_components.code, {
          children: "story-01-*.md"
        }), ")"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Create first Task in story checklist"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update Kanban board to include new epic"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "RW:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "RW detects new epic (EPIC component changed)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Creates new changelog entry with epic context"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Updates Kanban Epic document with version marker"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Updates Kanban Story document with version marker"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Branch Strategy:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Create branch: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "epic/5-{epic-title}"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "All work for Epic 5 happens on this branch"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "2-new-story-under-existing-epic",
      children: "2. New Story Under Existing Epic"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "context-1",
      children: "Context"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Adding a new story to an existing epic that already has one or more stories."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Example:"
      }), " Adding Story 2 to Epic 3 when Story 1 already exists and may be complete."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "expected-version-behaviour-1",
      children: "Expected Version Behaviour"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Initial Version:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "RC"
        }), ": ", (0,jsx_runtime.jsx)(_components.code, {
          children: "0"
        }), " (development, unless epic is in RC phase)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "EPIC"
        }), ": Existing epic number (unchanged)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "STORY"
        }), ": Next story number (e.g., if Story 1 exists, Story 2)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "TASK"
        }), ": ", (0,jsx_runtime.jsx)(_components.code, {
          children: "1"
        }), " (first task in new story)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "BUILD"
        }), ": ", (0,jsx_runtime.jsx)(_components.code, {
          children: "1"
        }), " (first build)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Version Example:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "0.3.2.1+1"
      }), " (Epic 3, Story 2, Task 1, Build 1)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Previous Version Context:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["If last work was ", (0,jsx_runtime.jsx)(_components.code, {
          children: "0.3.1.6+3"
        }), " (Epic 3, Story 1, Task 6, Build 3)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["New story starts at ", (0,jsx_runtime.jsx)(_components.code, {
          children: "0.3.2.1+1"
        }), " (STORY increments, TASK resets to 1, BUILD resets to 1)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Version File Update:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "VERSION_RC = 0\nVERSION_EPIC = 3      # Existing epic (unchanged)\nVERSION_STORY = 2     # New story number\nVERSION_TASK = 1      # First task in new story\nVERSION_BUILD = 1     # First build\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "kanbanrw-interactions-1",
      children: "Kanban/RW Interactions"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Kanban:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Create new Story document (", (0,jsx_runtime.jsx)(_components.code, {
          children: "story-02-*.md"
        }), ") under existing epic"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Create first Task in story checklist"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update Epic document to include new story"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update Kanban board"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "RW:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "RW detects story progression (STORY component changed)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Creates changelog entry with story context"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Updates Epic document with story reference"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Updates Story document with version marker"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Branch Strategy:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Continue on epic branch: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "epic/3-{epic-title}"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Story work happens sequentially or in parallel (see Scenario 5)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "3-new-task-under-existing-story",
      children: "3. New Task Under Existing Story"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "context-2",
      children: "Context"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Adding a new task to an existing story that already has one or more tasks."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Example:"
      }), " Adding Task 2 to Story 1 when Task 1 is complete."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "expected-version-behaviour-2",
      children: "Expected Version Behaviour"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Initial Version:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "RC"
        }), ": ", (0,jsx_runtime.jsx)(_components.code, {
          children: "0"
        }), " (development, unless story/epic is in RC phase)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "EPIC"
        }), ": Existing epic number (unchanged)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "STORY"
        }), ": Existing story number (unchanged)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "TASK"
        }), ": Next task number (e.g., if Task 1 exists, Task 2)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "BUILD"
        }), ": ", (0,jsx_runtime.jsx)(_components.code, {
          children: "1"
        }), " (resets to 1 for new task)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Version Example:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "0.3.1.2+1"
      }), " (Epic 3, Story 1, Task 2, Build 1)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Previous Version Context:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["If last work was ", (0,jsx_runtime.jsx)(_components.code, {
          children: "0.3.1.1+5"
        }), " (Epic 3, Story 1, Task 1, Build 5)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["New task starts at ", (0,jsx_runtime.jsx)(_components.code, {
          children: "0.3.1.2+1"
        }), " (TASK increments, BUILD resets to 1)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Version File Update:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "VERSION_RC = 0\nVERSION_EPIC = 3      # Existing epic (unchanged)\nVERSION_STORY = 1     # Existing story (unchanged)\nVERSION_TASK = 2      # New task number\nVERSION_BUILD = 1     # Reset to 1 for new task\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "kanbanrw-interactions-2",
      children: "Kanban/RW Interactions"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Kanban:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Add new Task to story checklist"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update Story document with new task"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Task may be created from FR/BR intake (see Epic 4 Story 2)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "RW:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "CRITICAL:"
        }), " RW Step 2 detects task transition when ", (0,jsx_runtime.jsx)(_components.code, {
          children: "VERSION_TASK"
        }), " in ", (0,jsx_runtime.jsx)(_components.code, {
          children: "version.py"
        }), " differs from active Task in Story document"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["RW automatically updates ", (0,jsx_runtime.jsx)(_components.code, {
          children: "VERSION_TASK"
        }), " to new task number"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["RW resets ", (0,jsx_runtime.jsx)(_components.code, {
          children: "VERSION_BUILD"
        }), " to 1"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Creates changelog entry with task context"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Updates Story document with task completion marker"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Branch Strategy:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Continue on epic branch: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "epic/3-{epic-title}"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Task work happens sequentially within story"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "4-bugfixhotfix-on-existing-task",
      children: "4. Bugfix/Hotfix on Existing Task"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "context-3",
      children: "Context"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Fixing a bug or issue in a task that is either:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "In Progress:"
        }), " Task is currently being worked on"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Completed:"
        }), " Task was marked complete but bug discovered later"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Example:"
      }), " Fixing a bug discovered in Task 3 after it was completed and released as ", (0,jsx_runtime.jsx)(_components.code, {
        children: "v0.3.1.3+1"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "expected-version-behaviour-3",
      children: "Expected Version Behaviour"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "For In-Progress Task:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "RC"
        }), ": ", (0,jsx_runtime.jsx)(_components.code, {
          children: "0"
        }), " (development)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "EPIC"
        }), ": Existing epic number (unchanged)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "STORY"
        }), ": Existing story number (unchanged)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "TASK"
        }), ": Existing task number (unchanged)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "BUILD"
        }), ": Increment from previous build"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Version Example:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "0.3.1.3+2"
      }), " (Epic 3, Story 1, Task 3, Build 2)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "For Completed Task (Hotfix):"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Same version components as original task"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "BUILD"
        }), ": Increment from last build of that task"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Version Example:"
      }), " If Task 3 was completed at ", (0,jsx_runtime.jsx)(_components.code, {
        children: "0.3.1.3+1"
      }), ", hotfix is ", (0,jsx_runtime.jsx)(_components.code, {
        children: "0.3.1.3+2"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Version File Update:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "VERSION_RC = 0\nVERSION_EPIC = 3      # Existing epic (unchanged)\nVERSION_STORY = 1     # Existing story (unchanged)\nVERSION_TASK = 3      # Existing task (unchanged)\nVERSION_BUILD = 2     # Increment from previous build\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "kanbanrw-interactions-3",
      children: "Kanban/RW Interactions"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Kanban:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If task is in progress: No Kanban changes needed"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If task is completed: Reopen task or create new \"Bugfix\" task under same story"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update Story document with bugfix context"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "RW:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "CRITICAL:"
        }), " RW Step 3 requires fix verification before marking as \"Fixed\""]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Unverified fixes must be logged as \"Attempted fix\" in changelog"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Only verified fixes can be marked as \"Fixed\""
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "RW creates changelog entry with fix context"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Updates Story document with fix verification status"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Verification Requirements:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Fix must be verified through testing (test suite or manual test)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Verification method must be documented"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Changelog format distinguishes \"Fixed\" vs \"Attempted fix\""
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Branch Strategy:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Continue on epic branch: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "epic/3-{epic-title}"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Hotfixes may use dedicated hotfix branch if needed"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "5-parallel-epics-and-stories",
      children: "5. Parallel Epics and Stories"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "context-4",
      children: "Context"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Working on multiple epics or stories simultaneously, where work happens in parallel branches and may be merged out of chronological order."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Epic 3 work happening on ", (0,jsx_runtime.jsx)(_components.code, {
          children: "epic/3-*"
        }), " branch"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Epic 4 work happening on ", (0,jsx_runtime.jsx)(_components.code, {
          children: "epic/4-*"
        }), " branch"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Both branches merged to ", (0,jsx_runtime.jsx)(_components.code, {
          children: "main"
        }), " at different times"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "expected-version-behaviour-4",
      children: "Expected Version Behaviour"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Each Epic Maintains Independent Version Stream:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Epic 3: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "0.3.S.T+B"
        }), " (e.g., ", (0,jsx_runtime.jsx)(_components.code, {
          children: "0.3.1.1+1"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "0.3.1.2+1"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "0.3.2.1+1"
        }), ")"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Epic 4: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "0.4.S.T+B"
        }), " (e.g., ", (0,jsx_runtime.jsx)(_components.code, {
          children: "0.4.1.1+1"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "0.4.2.1+1"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "0.4.2.2+1"
        }), ")"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Version Ordering:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Versions are ordered ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "canonically by version number"
        }), ", not by commit timestamp"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "0.3.1.2+1"
        }), " comes before ", (0,jsx_runtime.jsx)(_components.code, {
          children: "0.4.1.1+1"
        }), " in changelog, regardless of when they were committed"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "0.4.2.1+1"
        }), " comes after ", (0,jsx_runtime.jsx)(_components.code, {
          children: "0.3.1.2+1"
        }), " but before ", (0,jsx_runtime.jsx)(_components.code, {
          children: "0.4.2.2+1"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Version File Update:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Each epic branch maintains its own version context"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["When switching between epics, ", (0,jsx_runtime.jsx)(_components.code, {
          children: "version.py"
        }), " reflects the active epic's context"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "kanbanrw-interactions-4",
      children: "Kanban/RW Interactions"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Kanban:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Each epic has its own Epic document and stories"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Kanban board shows all epics in parallel"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Stories within epics can progress independently"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "RW:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["RW validates version matches branch context (Epic 3 work on ", (0,jsx_runtime.jsx)(_components.code, {
          children: "epic/3-*"
        }), " branch)"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "RW creates changelog entries ordered by version number (canonical ordering)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "RW updates appropriate Epic/Story documents based on version components"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "No conflicts between parallel epic versions"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Branch Strategy:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Each epic uses its own branch: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "epic/\\{N\\}-{epic-title}"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Branches merge to ", (0,jsx_runtime.jsx)(_components.code, {
          children: "main"
        }), " independently"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Version ordering in changelog is independent of merge order"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "6-task-transitions",
      children: "6. Task Transitions"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "context-5",
      children: "Context"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Moving from one task to another within the same story, where the previous task is complete and a new task is starting."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Example:"
      }), " Completing Task 1 (", (0,jsx_runtime.jsx)(_components.code, {
        children: "0.3.1.1+3"
      }), ") and starting Task 2 (", (0,jsx_runtime.jsx)(_components.code, {
        children: "0.3.1.2+1"
      }), ")."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "expected-version-behaviour-5",
      children: "Expected Version Behaviour"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Transition Rules:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "EPIC"
        }), ": Unchanged"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "STORY"
        }), ": Unchanged"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "TASK"
        }), ": Increment to next task number"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "BUILD"
        }), ": Reset to 1"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Version Example:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Previous: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "0.3.1.1+3"
        }), " (Epic 3, Story 1, Task 1, Build 3)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Next: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "0.3.1.2+1"
        }), " (Epic 3, Story 1, Task 2, Build 1)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Version File Update:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "VERSION_RC = 0\nVERSION_EPIC = 3      # Unchanged\nVERSION_STORY = 1     # Unchanged\nVERSION_TASK = 2      # Increment to next task\nVERSION_BUILD = 1     # Reset to 1\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "kanbanrw-interactions-5",
      children: "Kanban/RW Interactions"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Kanban:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Mark previous task as complete in Story checklist"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Add new task to Story checklist"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update Story document with task completion marker"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "RW:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "CRITICAL:"
        }), " RW Step 2 detects task transition automatically"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["RW compares ", (0,jsx_runtime.jsx)(_components.code, {
          children: "VERSION_TASK"
        }), " in ", (0,jsx_runtime.jsx)(_components.code, {
          children: "version.py"
        }), " with active Task in Story document"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["If mismatch detected, RW updates ", (0,jsx_runtime.jsx)(_components.code, {
          children: "VERSION_TASK"
        }), " to new task number"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["RW resets ", (0,jsx_runtime.jsx)(_components.code, {
          children: "VERSION_BUILD"
        }), " to 1"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "RW creates changelog entry for task transition"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "RW updates Story document with both task completion and new task start markers"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Common Mistakes to Avoid:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["❌ Forgetting to update ", (0,jsx_runtime.jsx)(_components.code, {
          children: "VERSION_TASK"
        }), " when moving to new task"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["❌ Forgetting to reset ", (0,jsx_runtime.jsx)(_components.code, {
          children: "VERSION_BUILD"
        }), " to 1"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["❌ Manually updating ", (0,jsx_runtime.jsx)(_components.code, {
          children: "VERSION_TASK"
        }), " without RW detection (RW should handle this)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "7-story-completion",
      children: "7. Story Completion"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "context-6",
      children: "Context"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Completing all tasks in a story, marking the story as complete."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Example:"
      }), " Completing Story 1 in Epic 3 after Tasks 1-5 are all complete."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "expected-version-behaviour-6",
      children: "Expected Version Behaviour"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Final Task in Story:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Complete last task (e.g., ", (0,jsx_runtime.jsx)(_components.code, {
          children: "0.3.1.5+2"
        }), ")"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Story marked as COMPLETE"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Next Story (if exists):"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Start Story 2: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "0.3.2.1+1"
        }), " (STORY increments, TASK resets to 1, BUILD resets to 1)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Version File Update:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "When starting next story:"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "VERSION_RC = 0\nVERSION_EPIC = 3      # Unchanged\nVERSION_STORY = 2     # Increment to next story\nVERSION_TASK = 1      # Reset to 1 (first task)\nVERSION_BUILD = 1     # Reset to 1\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "kanbanrw-interactions-6",
      children: "Kanban/RW Interactions"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Kanban:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Mark all tasks as complete in Story checklist"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Mark Story as COMPLETE in Story document"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update Epic document to mark story as complete"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update Kanban board"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "RW:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "RW creates final changelog entry for last task"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "RW updates Story document with COMPLETE status"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "RW updates Epic document with story completion marker"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "When starting next story, RW handles story transition (see Scenario 2)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Forensic Markers:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Story completion marked with: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "✅ COMPLETE (v0.3.1.5+2)"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Epic document updated with story completion reference"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "8-epic-completion",
      children: "8. Epic Completion"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "context-7",
      children: "Context"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Completing all stories in an epic, marking the epic as complete."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Example:"
      }), " Completing Epic 3 after Stories 1-3 are all complete."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "expected-version-behaviour-7",
      children: "Expected Version Behaviour"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Final Story in Epic:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Complete last story (e.g., Story 3, Task 5: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "0.3.3.5+1"
        }), ")"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Epic marked as COMPLETE"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Next Epic (if exists):"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Start Epic 5: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "0.5.1.1+1"
        }), " (EPIC increments, STORY resets to 1, TASK resets to 1, BUILD resets to 1)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Version File Update:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "When starting next epic:"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "VERSION_RC = 0\nVERSION_EPIC = 5      # Increment to next epic\nVERSION_STORY = 1     # Reset to 1 (first story)\nVERSION_TASK = 1      # Reset to 1 (first task)\nVERSION_BUILD = 1     # Reset to 1\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "kanbanrw-interactions-7",
      children: "Kanban/RW Interactions"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Kanban:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Mark all stories as complete in Epic document"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Mark Epic as COMPLETE"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update Kanban board to show epic completion"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "RW:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "RW creates final changelog entry for last task of last story"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "RW updates Epic document with COMPLETE status"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "RW updates Kanban board"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "When starting next epic, RW handles epic transition (see Scenario 1)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Forensic Markers:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Epic completion marked with: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "✅ COMPLETE (v0.3.3.5+1)"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Kanban board updated with epic completion status"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "9-scenario-summary-table",
      children: "9. Scenario Summary Table"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Scenario"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "EPIC"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "STORY"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "TASK"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "BUILD"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Example Version"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "New Epic"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "New"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "0.5.1.1+1"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "New Story"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Same"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Increment"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "0.3.2.1+1"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "New Task"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Same"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Same"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Increment"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "0.3.1.2+1"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Bugfix (In-Progress)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Same"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Same"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Same"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Increment"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "0.3.1.3+2"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Bugfix (Completed)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Same"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Same"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Same"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Increment"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "0.3.1.3+2"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Task Transition"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Same"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Same"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Increment"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "0.3.1.2+1"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Story Completion"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Same"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Increment (next)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "0.3.2.1+1"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Epic Completion"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Increment (next)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "0.5.1.1+1"
            })
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "10-validation-against-policies",
      children: "10. Validation Against Policies"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "framework-policy-alignment",
      children: "Framework Policy Alignment"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["✅ ", (0,jsx_runtime.jsxs)(_components.strong, {
        children: ["All scenarios align with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "packages/frameworks/numbering-versioning/versioning-policy.md"
        }), ":"]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "RC.EPIC.STORY.TASK+BUILD schema followed"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "BUILD increments within task"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "TASK/STORY/EPIC progression rules followed"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Parallel development supported"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "dev-kit-policy-alignment",
      children: "Dev-Kit Policy Alignment"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["✅ ", (0,jsx_runtime.jsxs)(_components.strong, {
        children: ["All scenarios align with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/architecture/standards-and-adrs/dev-kit-versioning-policy.md"
        }), ":"]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Dev-kit epic ranges (1-4+) respected"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Task-driven versioning enforced"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Kanban → Version mapping followed"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "RW integration requirements met"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "integration-alignment",
      children: "Integration Alignment"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["✅ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "All scenarios align with integration docs:"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Kanban → Versioning integration (Epic 4 Story 3)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Versioning → RW integration (Epic 4 Story 3)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "RW → Kanban integration (Epic 4 Story 3)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "11-next-steps",
      children: "11. Next Steps"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["These scenarios will be used in ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "T002"
      }), " to create worked examples in the versioning cookbook:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "T002:"
        }), " Create versioning cookbook document with worked examples for each scenario"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "T003:"
        }), " Add cross-framework examples (Kanban + Versioning + RW)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "T004:"
        }), " Document edge cases and anti-patterns"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "T005:"
        }), " Create quick reference summary"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "12-references",
      children: "12. References"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "packages/frameworks/numbering-versioning/versioning-policy.md"
        }), " – Framework versioning policy"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "packages/frameworks/numbering-versioning/versioning-strategy.md"
        }), " – Versioning strategy"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "docs/architecture/standards-and-adrs/dev-kit-versioning-policy.md"
        }), " – Dev-kit versioning policy"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "docs/architecture/standards-and-adrs/dev-kit-kanban-versioning-rw-integration.md"
        }), " – Integration guide"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "docs/project-management/kanban/story-03-kanban-versioning-rw-integration.md"
        }), " – Integration validation"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.em, {
        children: "End of Core Versioning Scenarios Document"
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