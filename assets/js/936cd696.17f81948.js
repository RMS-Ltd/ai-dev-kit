"use strict";
(self["webpackChunkportal"] = self["webpackChunkportal"] || []).push([["16638"], {
67(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_project_management_kanban_epics_epic_04_story_10_agentic_kanban_task_creation_from_fr_br_md_936_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-project-management-kanban-epics-epic-04-story-10-agentic-kanban-task-creation-from-fr-br-md-936.json
var site_docs_project_management_kanban_epics_epic_04_story_10_agentic_kanban_task_creation_from_fr_br_md_936_namespaceObject = JSON.parse('{"id":"project-management/kanban/epics/epic-04/story-10-agentic-kanban-task-creation-from-fr-br","title":"Story 010 – Agentic Kanban Task Creation from FR/BR","description":"Status: COMPLETE ✅","source":"@site/../docs/project-management/kanban/epics/epic-04/story-10-agentic-kanban-task-creation-from-fr-br.md","sourceDirName":"project-management/kanban/epics/epic-04","slug":"/project-management/kanban/epics/epic-04/story-10-agentic-kanban-task-creation-from-fr-br","permalink":"/ai-dev-kit/docs/project-management/kanban/epics/epic-04/story-10-agentic-kanban-task-creation-from-fr-br","draft":false,"unlisted":false,"editUrl":"https://github.com/RMS-Ltd/ai-dev-kit/tree/main/docs/../docs/project-management/kanban/epics/epic-04/story-10-agentic-kanban-task-creation-from-fr-br.md","tags":[],"version":"current","frontMatter":{"lifecycle":"evergreen","ttl_days":null,"created_at":"2025-12-10T21:20:00.000Z","expires_at":null,"housekeeping_policy":"keep"},"sidebar":"docsSidebar","previous":{"title":"Epic 4, Story 10, Task 7: Documentation and testing","permalink":"/ai-dev-kit/docs/project-management/kanban/epics/epic-04/story-10-agentic-kanban-task-creation-from-fr-br/T07-documentation-and-testing"},"next":{"title":"Epic 4, Story 11, Task 0: Story Creation and Task Decomposition","permalink":"/ai-dev-kit/docs/project-management/kanban/epics/epic-04/story-11-kanban-granularity-discrete-task-docs/T00-story-creation-and-task-decomposition"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ../docs/project-management/kanban/epics/epic-04/story-10-agentic-kanban-task-creation-from-fr-br.md


const frontMatter = {
	lifecycle: 'evergreen',
	ttl_days: null,
	created_at: new Date('2025-12-10T21:20:00.000Z'),
	expires_at: null,
	housekeeping_policy: 'keep'
};
const contentTitle = 'Story 010 – Agentic Kanban Task Creation from FR/BR';

const assets = {

};



const toc = [{
  "value": "Overview",
  "id": "overview",
  "level": 2
}, {
  "value": "Goal",
  "id": "goal",
  "level": 2
}, {
  "value": "Task Checklist",
  "id": "task-checklist",
  "level": 2
}, {
  "value": "Related Work",
  "id": "related-work",
  "level": 2
}, {
  "value": "Dependencies",
  "id": "dependencies",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    br: "br",
    code: "code",
    h1: "h1",
    h2: "h2",
    header: "header",
    hr: "hr",
    input: "input",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "story-010--agentic-kanban-task-creation-from-frbr",
        children: "Story 010 – Agentic Kanban Task Creation from FR/BR"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Status:"
      }), " COMPLETE ✅", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Priority:"
      }), " HIGH", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Estimated Effort:"
      }), " [TBD]", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Created:"
      }), " 2025-12-10", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Last updated:"
      }), " 2026-01-05 (v0.6.6.8+12 – Task checklist updated to mark all tasks as COMPLETE)", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Version:"
      }), " v0.4.10.7+0", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Code:"
      }), " E4S10"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "overview",
      children: "Overview"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Implement an intelligent, agentic workflow that automatically creates Kanban tasks from Feature Requests (FRs) and Bug Reports (BRs) using templates. The workflow must be intelligent enough to analyze FR/BR content, determine appropriate Epic/Story/Task structure, and create tasks with proper contextualization."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "goal",
      children: "Goal"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Create an agentic workflow that:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Automatically analyzes FR/BR content"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Intelligently maps FR/BR to appropriate canonical epics/stories"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Creates Kanban tasks from templates with proper contextualization"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Links tasks back to original FR/BR"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Provides explanations for decisions made"
      }), "\n"]
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
          children: ["E04:S10", ":T00", " – Story creation and FR-012 intake"]
        }), " ✅ COMPLETE (v0.4.10.0+0)", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Task: ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-04/story-10-agentic-kanban-task-creation-from-fr-br/T00-story-creation-and-fr-012-intake",
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "T00-story-creation-and-fr-012-intake"
              })
            })]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", (0,jsx_runtime.jsxs)(_components.strong, {
          children: ["E04:S10", ":T01", " – Design agentic FR/BR analysis workflow"]
        }), " - ✅ COMPLETE (v0.4.10.1+0 – Design document created: agentic-fr-br-analysis-workflow-design.md)", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Task: ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-04/story-10-agentic-kanban-task-creation-from-fr-br/T01-design-agentic-frbr-analysis-workflow",
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "T01-design-agentic-frbr-analysis-workflow"
              })
            })]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", (0,jsx_runtime.jsxs)(_components.strong, {
          children: ["E04:S10", ":T02", " – Implement intelligent epic/story mapping"]
        }), " - ✅ COMPLETE (v0.4.10.2+0 – FR/BR Content Analyzer and Epic/Story Mapper implemented)", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Task: ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-04/story-10-agentic-kanban-task-creation-from-fr-br/T02-implement-intelligent-epicstory-mapping",
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "T02-implement-intelligent-epicstory-mapping"
              })
            })]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", (0,jsx_runtime.jsxs)(_components.strong, {
          children: ["E04:S10", ":T03", " – Implement template-based task creation"]
        }), " - ✅ COMPLETE (v0.4.10.3+0 – Template-Based Task Creator implemented)", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Task: ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-04/story-10-agentic-kanban-task-creation-from-fr-br/T03-implement-template-based-task-creation",
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "T03-implement-template-based-task-creation"
              })
            })]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", (0,jsx_runtime.jsxs)(_components.strong, {
          children: ["E04:S10", ":T04", " – Implement task contextualization"]
        }), " - ✅ COMPLETE (v0.4.10.4+0 – Enhanced task contextualization implemented)", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Task: ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-04/story-10-agentic-kanban-task-creation-from-fr-br/T04-implement-task-contextualization",
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "T04-implement-task-contextualization"
              })
            })]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", (0,jsx_runtime.jsxs)(_components.strong, {
          children: ["E04:S10", ":T05", " – Integrate with FR/BR intake workflow"]
        }), " - ✅ COMPLETE (v0.4.10.5+0 – Agentic Task Workflow integrated with FR/BR intake)", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Task: ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-04/story-10-agentic-kanban-task-creation-from-fr-br/T05-integrate-with-frbr-intake-workflow",
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "T05-integrate-with-frbr-intake-workflow"
              })
            })]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", (0,jsx_runtime.jsxs)(_components.strong, {
          children: ["E04:S10", ":T06", " – Add agentic intelligence and explanations"]
        }), " - ✅ COMPLETE (v0.4.10.6+0 – Agentic intelligence and explanations added)", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Task: ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-04/story-10-agentic-kanban-task-creation-from-fr-br/T06-add-agentic-intelligence-and-explanations",
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "T06-add-agentic-intelligence-and-explanations"
              })
            })]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", (0,jsx_runtime.jsxs)(_components.strong, {
          children: ["E04:S10", ":T07", " – Documentation and testing"]
        }), " - ✅ COMPLETE (v0.4.10.7+0 – Comprehensive documentation and test suite complete)", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Task: ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-04/story-10-agentic-kanban-task-creation-from-fr-br/T07-documentation-and-testing",
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "T07-documentation-and-testing"
              })
            })]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "related-work",
      children: "Related Work"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "FR-012:"
        }), " Agentic Kanban Task Creation from FR/BR"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "FR-019:"
        }), " Intake Workflow Automation (orchestrates this workflow for full intake process)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "E2:S11:"
        }), " Intake Workflow Automation (uses this workflow for task creation)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Epic 4 Story 2:"
        }), " FR/BR Intake to Tasks (intake foundation)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Epic 4 Story 6:"
        }), " Comprehensive Canonical E/S/T Template System (template foundation)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Epic 4 Story 8:"
        }), " Intelligent Epic Matching and Canonical Structure Adoption (semantic matching)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Epic 4 Story 9:"
        }), " Bug Fixes and Agentic Intelligence Implementation (agentic intelligence foundation)"]
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
        children: "Automated task creation from FRs/BRs"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Intelligent workflow automation"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Blocked By:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Epic 4 Story 2: FR/BR Intake to Tasks (intake foundation)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Epic 4 Story 6: Comprehensive Canonical E/S/T Template System (template foundation)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Epic 4 Story 8: Intelligent Epic Matching (semantic matching foundation)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Coordinates With:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Epic 2: Workflow Management Framework (workflow execution)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "FR-013: Trigger-Aware Release Workflow (workflow integration)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "FR-014: New RW Trigger for FR/BR Commits (trigger integration)"
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