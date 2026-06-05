"use strict";
(self["webpackChunkportal"] = self["webpackChunkportal"] || []).push([["89376"], {
5282(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_project_management_kanban_epics_epic_04_story_14_kanban_framework_maintenance_md_2c0_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-project-management-kanban-epics-epic-04-story-14-kanban-framework-maintenance-md-2c0.json
var site_docs_project_management_kanban_epics_epic_04_story_14_kanban_framework_maintenance_md_2c0_namespaceObject = JSON.parse('{"id":"project-management/kanban/epics/epic-04/story-14-kanban-framework-maintenance","title":"Story 014 – Kanban Framework Maintenance","description":"Status: IN PROGRESS","source":"@site/../docs/project-management/kanban/epics/epic-04/story-14-kanban-framework-maintenance.md","sourceDirName":"project-management/kanban/epics/epic-04","slug":"/project-management/kanban/epics/epic-04/story-14-kanban-framework-maintenance","permalink":"/ai-dev-kit/docs/project-management/kanban/epics/epic-04/story-14-kanban-framework-maintenance","draft":false,"unlisted":false,"editUrl":"https://github.com/RMS-Ltd/ai-dev-kit/tree/main/docs/../docs/project-management/kanban/epics/epic-04/story-14-kanban-framework-maintenance.md","tags":[],"version":"current","frontMatter":{"lifecycle":"evergreen","ttl_days":null,"created_at":"2025-12-18T00:00:00.000Z","expires_at":null,"housekeeping_policy":"keep"},"sidebar":"docsSidebar","previous":{"title":"Epic 4, Story 14, Task 4: Kanban policy task prioritisation queue/stack (FR-037)","permalink":"/ai-dev-kit/docs/project-management/kanban/epics/epic-04/story-14-kanban-framework-maintenance/T04-kanban-policy-task-prioritisation-queue-stack-fr037"},"next":{"title":"Epic 4, Story 15, Task 1: Finalize and validate concrete task template coverage","permalink":"/ai-dev-kit/docs/project-management/kanban/epics/epic-04/story-15-procedural-task-template-generation-and-hybrid-strategy/T01-finalize-and-validate-concrete-task-template-coverage"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ../docs/project-management/kanban/epics/epic-04/story-14-kanban-framework-maintenance.md


const frontMatter = {
	lifecycle: 'evergreen',
	ttl_days: null,
	created_at: new Date('2025-12-18T00:00:00.000Z'),
	expires_at: null,
	housekeeping_policy: 'keep'
};
const contentTitle = 'Story 014 – Kanban Framework Maintenance';

const assets = {

};



const toc = [{
  "value": "Task Checklist",
  "id": "task-checklist",
  "level": 2
}, {
  "value": "Overview",
  "id": "overview",
  "level": 2
}, {
  "value": "Goal",
  "id": "goal",
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
        id: "story-014--kanban-framework-maintenance",
        children: "Story 014 – Kanban Framework Maintenance"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Status:"
      }), " IN PROGRESS", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Priority:"
      }), " HIGH", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Estimated Effort:"
      }), " [TBD]", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Created:"
      }), " 2025-12-18", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Last updated:"
      }), " 2026-02-22 (v0.4.14.1+1 – T01 complete: validate_version_bump perpetual task support)", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Version:"
      }), " v0.4.14.1+1", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Code:"
      }), " E4S14"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "task-checklist",
      children: "Task Checklist"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      className: "contains-task-list",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.input, {
            type: "checkbox",
            checked: true,
            disabled: true
          }), " ", (0,jsx_runtime.jsxs)(_components.strong, {
            children: ["E04:S14", ":T01", " – Update packaged RW to handle UKW context and perpetual tasks"]
          }), " ✅ COMPLETE (v0.4.14.1+1)"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Task: ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-04/story-14-kanban-framework-maintenance/T01-planning-spec-tests-impl",
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "T01-planning-spec-tests-impl"
              })
            })]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Task: ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-04/story-14-kanban-framework-maintenance/T01-planning-spec-tests-impl",
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "T01-planning-spec-tests-impl.md"
              })
            })]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.input, {
            type: "checkbox",
            checked: true,
            disabled: true
          }), " ", (0,jsx_runtime.jsxs)(_components.strong, {
            children: ["E04:S14", ":T02", " – Restore RC review planning artifacts"]
          }), " ✅ COMPLETE (v0.4.14.2+1)"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Task: ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-04/story-14-kanban-framework-maintenance/T02-restore-rc-review-artifacts",
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "T02-restore-rc-review-artifacts"
              })
            })]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Task: ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-04/story-14-kanban-framework-maintenance/T02-restore-rc-review-artifacts",
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "T02-restore-rc-review-artifacts.md"
              })
            })]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.input, {
            type: "checkbox",
            checked: true,
            disabled: true
          }), " ", (0,jsx_runtime.jsxs)(_components.strong, {
            children: ["E04:S14", ":T03", " – Add Missing Implementation Cycle Workflow (ICW)"]
          }), " ✅ COMPLETE (v0.4.14.3+1)"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Task: ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-04/story-14-kanban-framework-maintenance/T03-add-missing-implementation-cycle-workflow-icw",
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "T03-add-missing-implementation-cycle-workflow-icw.md"
              })
            })]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["BR Reference: ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ai-dev-kit/docs/project-management/kanban/fr-br/BR-055-missing-implementation-cycle-workflow-icw",
              children: "BR-055"
            })]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "GitHub Issue: #22"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.input, {
            type: "checkbox",
            checked: true,
            disabled: true
          }), " ", (0,jsx_runtime.jsxs)(_components.strong, {
            children: ["E04:S14", ":T04", " – Kanban policy task prioritisation queue/stack (FR-037)"]
          }), " ✅ COMPLETE (semantic home; delivery ", (0,jsx_runtime.jsxs)(_components.strong, {
            children: ["E05:S01", ":T37"]
          }), ")"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Task: ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-04/story-14-kanban-framework-maintenance/T04-kanban-policy-task-prioritisation-queue-stack-fr037",
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "T04-kanban-policy-task-prioritisation-queue-stack-fr037.md"
              })
            }), " | ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ai-dev-kit/docs/project-management/kanban/fr-br/FR-037-kanban-policy-task-prioritisation-queue-stack",
              children: "FR-037"
            })]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "overview",
      children: "Overview"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This story tracks ongoing maintenance and updates to the Kanban Framework package. Maintenance tasks include framework updates, bug fixes, documentation improvements, and integration with other frameworks (e.g., RW integration with UKW and perpetual task support)."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "goal",
      children: "Goal"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Ensure the Kanban Framework package remains current, well-maintained, and properly integrated with other ADK frameworks. Address maintenance issues, update documentation, and implement framework improvements as needed."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "dependencies",
      children: "Dependencies"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Blocks:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "None"
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
        children: "Coordinates With:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Epic 6, Story 6, Task 8 (UKW perpetual task - source of pattern)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Epic 2 (Workflow Management Framework - RW package owner)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "references",
      children: "References"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "RW Package:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "packages/frameworks/workflow-mgt/"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "RW Execution Guide:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "packages/frameworks/workflow-mgt/KB/Documentation/Developer_Docs/vwmp/release-workflow-agent-execution.md"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "RW Workflow YAML:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "packages/frameworks/workflow-mgt/workflows/release-workflow.yaml"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "UKW Task:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/project-management/kanban/epics/epic-06/story-06-adk-implementation-analysis-and-package-management/T08-update-kanban-workflow-ukw.md"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "UKW Analysis:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/analysis/ukw-versioning-reasoning-analysis.md"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Last Updated:"
      }), " 2026-01-19 (v0.4.14.2+1 – T02 complete: RC review artifacts restored)", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Version:"
      }), " v0.4.14.2+1", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Status:"
      }), " IN PROGRESS"]
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