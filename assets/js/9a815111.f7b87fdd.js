"use strict";
(self["webpackChunkportal"] = self["webpackChunkportal"] || []).push([["84141"], {
32198(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_project_management_kanban_epics_epic_01_story_01_vibe_dev_kit_kanban_and_versioning_md_9a8_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-project-management-kanban-epics-epic-01-story-01-vibe-dev-kit-kanban-and-versioning-md-9a8.json
var site_docs_project_management_kanban_epics_epic_01_story_01_vibe_dev_kit_kanban_and_versioning_md_9a8_namespaceObject = JSON.parse('{"id":"project-management/kanban/epics/epic-01/story-01-vibe-dev-kit-kanban-and-versioning","title":"Story 001 – Set Up Kanban and Versioning for AI Dev Kit","description":"Status: COMPLETE","source":"@site/../docs/project-management/kanban/epics/epic-01/story-01-vibe-dev-kit-kanban-and-versioning.md","sourceDirName":"project-management/kanban/epics/epic-01","slug":"/project-management/kanban/epics/epic-01/story-01-vibe-dev-kit-kanban-and-versioning","permalink":"/ai-dev-kit/docs/project-management/kanban/epics/epic-01/story-01-vibe-dev-kit-kanban-and-versioning","draft":false,"unlisted":false,"editUrl":"https://github.com/RMS-Ltd/ai-dev-kit/tree/main/docs/../docs/project-management/kanban/epics/epic-01/story-01-vibe-dev-kit-kanban-and-versioning.md","tags":[],"version":"current","frontMatter":{"lifecycle":"evergreen","ttl_days":null,"created_at":"2025-12-04T12:01:50.000Z","expires_at":null,"housekeeping_policy":"keep"},"sidebar":"docsSidebar","previous":{"title":"E01:S01:T03 – Update RW docs to distinguish dev-kit vs external examples","permalink":"/ai-dev-kit/docs/project-management/kanban/epics/epic-01/story-01-vibe-dev-kit-kanban-and-versioning/T03-update-rw-docs-dev-kit-vs-external"},"next":{"title":"Package Structure Analysis Report","permalink":"/ai-dev-kit/docs/project-management/kanban/epics/epic-01/story-02-package-and-repo-architecture/T01-package-structure-analysis"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ../docs/project-management/kanban/epics/epic-01/story-01-vibe-dev-kit-kanban-and-versioning.md


const frontMatter = {
	lifecycle: 'evergreen',
	ttl_days: null,
	created_at: new Date('2025-12-04T12:01:50.000Z'),
	expires_at: null,
	housekeeping_policy: 'keep'
};
const contentTitle = 'Story 001 – Set Up Kanban and Versioning for AI Dev Kit';

const assets = {

};



const toc = [{
  "value": "Task Checklist",
  "id": "task-checklist",
  "level": 2
}, {
  "value": "1. Story Overview",
  "id": "1-story-overview",
  "level": 2
}, {
  "value": "2. Kanban Structure for This Repo",
  "id": "2-kanban-structure-for-this-repo",
  "level": 2
}, {
  "value": "3. Tasks",
  "id": "3-tasks",
  "level": 2
}, {
  "value": "Task 1 – Create Kanban Board File",
  "id": "task-1--create-kanban-board-file",
  "level": 3
}, {
  "value": "Task 2 – Create Story 001 File",
  "id": "task-2--create-story-001-file",
  "level": 3
}, {
  "value": "Task 3 – Decide Versioning Approach for This Repo ✅ COMPLETE",
  "id": "task-3--decide-versioning-approach-for-this-repo--complete",
  "level": 3
}, {
  "value": "Task 4 – Align RW with Dev-Kit Versioning ✅ COMPLETE",
  "id": "task-4--align-rw-with-dev-kit-versioning--complete",
  "level": 3
}, {
  "value": "4. Notes &amp; Open Questions",
  "id": "4-notes--open-questions",
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
    pre: "pre",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "story-001--set-up-kanban-and-versioning-for-ai-dev-kit",
        children: "Story 001 – Set Up Kanban and Versioning for AI Dev Kit"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Status:"
      }), " COMPLETE", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Owner:"
      }), " RMS", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Repo:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ai-dev-kit"
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Version:"
      }), " v0.1.1.1+1", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Last updated:"
      }), " 2026-06-05 (E01", ":S01", " discrete task doc backfill)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "task-checklist",
      children: "Task Checklist"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      className: "contains-task-list",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", (0,jsx_runtime.jsxs)(_components.strong, {
          children: ["E01:S01", ":T01", " – Create ", (0,jsx_runtime.jsx)(_components.code, {
            children: "dev-kit-versioning-policy.md"
          })]
        }), " — ✅ COMPLETE (v0.1.1.1+1) — ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-01/story-01-vibe-dev-kit-kanban-and-versioning/T01-create-dev-kit-versioning-policy",
          children: "Task"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", (0,jsx_runtime.jsxs)(_components.strong, {
          children: ["E01:S01", ":T02", " – Align ", (0,jsx_runtime.jsx)(_components.code, {
            children: "version.py"
          }), " and CHANGELOG with dev-kit policy"]
        }), " — ✅ COMPLETE (v0.1.1.1+1) — ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-01/story-01-vibe-dev-kit-kanban-and-versioning/T02-align-version-py-and-changelog",
          children: "Task"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", (0,jsx_runtime.jsxs)(_components.strong, {
          children: ["E01:S01", ":T03", " – Update RW docs to distinguish dev-kit vs external examples"]
        }), " — ✅ COMPLETE — ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-01/story-01-vibe-dev-kit-kanban-and-versioning/T03-update-rw-docs-dev-kit-vs-external",
          children: "Task"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1-story-overview",
      children: "1. Story Overview"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["This story creates a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "local Kanban structure"
      }), " and ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "versioning entry point"
      }), " for the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ai-dev-kit"
      }), " repo itself, separate from any application project (like fynd.deals or Confidentia)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Goals:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Provide a simple, repo-local Kanban structure under ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/project-management/kanban/"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Avoid importing external Kanban structures (e.g., ", (0,jsx_runtime.jsx)(_components.code, {
          children: "knowledge/fynd_deals/Kanban"
        }), ")."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Prepare ground for a ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "dev-kit-specific versioning strategy"
        }), " that does not claim to be working on any external Epic (such as Epic 9)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "2-kanban-structure-for-this-repo",
      children: "2. Kanban Structure for This Repo"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Target structure:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-text",
        children: "docs/\n  project-management/\n    kanban/\n      _index.md                  # Kanban board for this repo\n      stories/\n        story-01-ai-dev-kit-kanban-and-versioning.md\n        Story-XXX-...            # Future stories\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This structure is:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Local:"
        }), " It belongs only to ", (0,jsx_runtime.jsx)(_components.code, {
          children: "ai-dev-kit"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Epic-centric:"
        }), " Stories live in ", (0,jsx_runtime.jsx)(_components.code, {
          children: "kanban/epics/Epic-X/stories/"
        }), " with simple numeric IDs."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Flexible:"
        }), " You can introduce epics or other groupings later without changing the base layout."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "3-tasks",
      children: "3. Tasks"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "task-1--create-kanban-board-file",
      children: "Task 1 – Create Kanban Board File"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      className: "contains-task-list",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "Create ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/project-management/kanban/_index.md"
        }), " with:", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A short description of the board."
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A minimal stories table."
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A reference to this story file."
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "task-2--create-story-001-file",
      children: "Task 2 – Create Story 001 File"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      className: "contains-task-list",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "Create ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/project-management/kanban/story-01-ai-dev-kit-kanban-and-versioning.md"
        }), " (this file)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "Include:", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Status, Owner, Repo, and placeholder Version."
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Overview of the Kanban and versioning goals."
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Task list (this section)."
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "task-3--decide-versioning-approach-for-this-repo--complete",
      children: "Task 3 – Decide Versioning Approach for This Repo ✅ COMPLETE"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      className: "contains-task-list",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.input, {
            type: "checkbox",
            checked: true,
            disabled: true
          }), " ", "Decide whether this repo:"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["✅ Uses the same ", (0,jsx_runtime.jsx)(_components.code, {
              children: "RC.EPIC.STORY.TASK+BUILD"
            }), " schema as the Numbering & Versioning package, ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "but with its own epic range"
            }), " (Epic 1-4+)"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.input, {
            type: "checkbox",
            checked: true,
            disabled: true
          }), " ", "Document the decision in a local versioning policy under:"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["✅ ", (0,jsx_runtime.jsx)(_components.code, {
              children: "docs/architecture/standards-and-adrs/dev-kit-versioning-policy.md"
            }), " (created and active)"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.input, {
            type: "checkbox",
            checked: true,
            disabled: true
          }), " ", "Align ", (0,jsx_runtime.jsx)(_components.code, {
            children: "src/fynd_deals/version.py"
          }), " (or a renamed version file) with the chosen schema."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["✅ ", (0,jsx_runtime.jsx)(_components.code, {
              children: "src/fynd_deals/version.py"
            }), " aligned with RC.EPIC.STORY.TASK+BUILD schema"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Status:"
      }), " ✅ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "COMPLETE"
      }), " - Versioning approach decided and documented. Dev-kit uses ", (0,jsx_runtime.jsx)(_components.code, {
        children: "RC.EPIC.STORY.TASK+BUILD"
      }), " with Epic 1-4+ range (no legacy range). Policy documented in ", (0,jsx_runtime.jsx)(_components.code, {
        children: "dev-kit-versioning-policy.md"
      }), ". Version file aligned."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "task-4--align-rw-with-dev-kit-versioning--complete",
      children: "Task 4 – Align RW with Dev-Kit Versioning ✅ COMPLETE"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      className: "contains-task-list",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.input, {
            type: "checkbox",
            checked: true,
            disabled: true
          }), " ", "Update ", (0,jsx_runtime.jsx)(_components.code, {
            children: "release-workflow-agent-execution.md"
          }), " to:"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["✅ Clarify that examples using ", (0,jsx_runtime.jsx)(_components.code, {
              children: "0.9.21.3+2"
            }), " are ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Confidentia/fynd.deals examples"
            }), ", not dev-kit releases (completed in E02:S01", ":T02", ")"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["✅ Add a short note about how RW should be interpreted when running directly in the ", (0,jsx_runtime.jsx)(_components.code, {
              children: "ai-dev-kit"
            }), " repo (completed in E02:S01", ":T02", ")"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.input, {
            type: "checkbox",
            checked: true,
            disabled: true
          }), " ", "Ensure ", (0,jsx_runtime.jsx)(_components.code, {
            children: ".cursorrules"
          }), " (when added for this repo) uses the correct dev-kit version schema."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["✅ ", (0,jsx_runtime.jsx)(_components.code, {
              children: ".cursorrules"
            }), " RW trigger section aligned with dev-kit policy (completed in E02:S01", ":T03", ")"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Status:"
      }), " ✅ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "COMPLETE"
      }), " - RW docs updated to distinguish dev-kit vs external examples. All examples tagged with ", (0,jsx_runtime.jsx)(_components.code, {
        children: "[Example: Confidentia/fynd.deals]"
      }), " or ", (0,jsx_runtime.jsx)(_components.code, {
        children: "[Example: ai-dev-kit]"
      }), " labels. Cursorrules section aligned with dev-kit versioning policy."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "4-notes--open-questions",
      children: "4. Notes & Open Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Epic mapping:"
          }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", "For this repo, we haven’t yet defined any canonical ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Epic IDs"
          }), ". Until that’s done, we should avoid publishing tags that encode an Epic number (e.g., ", (0,jsx_runtime.jsx)(_components.code, {
            children: "0.9.21.3+2"
          }), ") as if it were authoritative for this repo."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scope separation:"
          }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", "This repo models ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "portable frameworks"
          }), " (workflow mgt, numbering & versioning, etc.). Its versioning should reflect ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "framework/package evolution"
          }), ", not application-level epics from other projects."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["When these questions are resolved and the tasks above are completed, this story can be marked as ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Done"
      }), " and new stories can reference the resulting policies and structures."]
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