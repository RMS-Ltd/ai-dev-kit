"use strict";
(self["webpackChunkportal"] = self["webpackChunkportal"] || []).push([["958"], {
33377(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_project_management_kanban_epics_epic_01_story_02_package_and_repo_architecture_md_e61_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-project-management-kanban-epics-epic-01-story-02-package-and-repo-architecture-md-e61.json
var site_docs_project_management_kanban_epics_epic_01_story_02_package_and_repo_architecture_md_e61_namespaceObject = JSON.parse('{"id":"project-management/kanban/epics/epic-01/story-02-package-and-repo-architecture","title":"Story 002 – Package & Repo Architecture","description":"Status: COMPLETE ✅","source":"@site/../docs/project-management/kanban/epics/epic-01/story-02-package-and-repo-architecture.md","sourceDirName":"project-management/kanban/epics/epic-01","slug":"/project-management/kanban/epics/epic-01/story-02-package-and-repo-architecture","permalink":"/ai-dev-kit/docs/project-management/kanban/epics/epic-01/story-02-package-and-repo-architecture","draft":false,"unlisted":false,"editUrl":"https://github.com/RMS-Ltd/ai-dev-kit/tree/main/docs/../docs/project-management/kanban/epics/epic-01/story-02-package-and-repo-architecture.md","tags":[],"version":"current","frontMatter":{"lifecycle":"evergreen","ttl_days":null,"created_at":"2025-12-04T12:01:50.000Z","expires_at":null,"housekeeping_policy":"keep"},"sidebar":"docsSidebar","previous":{"title":"Epic 1, Story 2, Task 14: Dependency tracking in adopting projects (FR-003)","permalink":"/ai-dev-kit/docs/project-management/kanban/epics/epic-01/story-02-package-and-repo-architecture/T14-dependency-tracking-adopters-fr003"},"next":{"title":"KB Structure Analysis and Target Definition","permalink":"/ai-dev-kit/docs/project-management/kanban/epics/epic-01/story-03-core-kb-structure-for-dev-kit/T01-kb-structure-analysis"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ../docs/project-management/kanban/epics/epic-01/story-02-package-and-repo-architecture.md


const frontMatter = {
	lifecycle: 'evergreen',
	ttl_days: null,
	created_at: new Date('2025-12-04T12:01:50.000Z'),
	expires_at: null,
	housekeeping_policy: 'keep'
};
const contentTitle = 'Story 002 – Package & Repo Architecture';

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
}, {
  "value": "Next Actions",
  "id": "next-actions",
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
        id: "story-002--package--repo-architecture",
        children: "Story 002 – Package & Repo Architecture"
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
      }), " 2025-12-02", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Last updated:"
      }), " 2026-06-05 (v0.1.2.13+1 – E01:S02", ":T13", " README hygiene complete)\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Version:"
      }), " v0.1.2.13+1\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Code:"
      }), " E1S02"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "overview",
      children: "Overview"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["This story clarifies the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "modular architecture"
      }), " of the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ai-dev-kit"
      }), " repository, ensuring that users can easily consume individual frameworks (workflow mgt, versioning, kanban) without pulling in the entire repository. It establishes clear boundaries, dependencies, and consumption patterns for each package."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "goal",
      children: "Goal"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Make it easy for users to consume ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "individual frameworks"
      }), " (workflow mgt, versioning, kanban) without pulling in the whole repo. Establish clear modularity principles, dependency documentation, and consumption patterns."]
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
            children: ["E01:S02", ":T13", " – README / been-there template (FR-002)"]
          }), " - ✅ COMPLETE (v0.1.2.13+1) — ", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-01/story-02-package-and-repo-architecture/T13-readme-template-best-readme-fr002",
            children: "Task doc"
          }), " | ", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ai-dev-kit/docs/project-management/kanban/fr-br/FR-002-update-been-there-readme",
            children: "FR-002"
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.input, {
            type: "checkbox",
            checked: true,
            disabled: true
          }), " ", (0,jsx_runtime.jsxs)(_components.strong, {
            children: ["E01:S02", ":T14", " – Dependency tracking for adopters (FR-003)"]
          }), " - ✅ COMPLETE (v0.1.2.14+1) — ", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-01/story-02-package-and-repo-architecture/T14-dependency-tracking-adopters-fr003",
            children: "Task doc"
          }), " | ", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ai-dev-kit/docs/project-management/kanban/fr-br/FR-003-dependency-tracking-in-adopting-projects",
            children: "FR-003"
          }), " | ", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ai-dev-kit/docs/documentation/user-docs/adopter-external-resource-dependency-tracking",
            children: "Guide"
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.input, {
            type: "checkbox",
            checked: true,
            disabled: true
          }), " ", (0,jsx_runtime.jsxs)(_components.strong, {
            children: ["E01:S02", ":T01", " – Analyze current package structure and dependencies"]
          }), " ✅ COMPLETE (v0.1.2.1+1)"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Task: ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-01/story-02-package-and-repo-architecture/T01-package-structure-analysis",
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "T01-package-structure-analysis"
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
            children: ["E01:S02", ":T02", " – Document modularity principles and boundaries"]
          }), " ✅ COMPLETE (v0.1.2.2+1)"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Task: ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-01/story-02-package-and-repo-architecture/T02-modularity-principles",
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "T02-modularity-principles"
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
            children: ["E01:S02", ":T03", " – Create package dependency matrix"]
          }), " ✅ COMPLETE (v0.1.2.3+1)"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Task: ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-01/story-02-package-and-repo-architecture/T03-package-dependency-matrix",
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "T03-package-dependency-matrix"
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
            children: ["E01:S02", ":T04", " – Document consumption patterns for each framework"]
          }), " ✅ COMPLETE (v0.1.2.4+1)"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Task: ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-01/story-02-package-and-repo-architecture/T04-consumption-patterns",
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "T04-consumption-patterns"
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
            children: ["E01:S02", ":T05", " – Update package READMEs with modularity information"]
          }), " ✅ COMPLETE"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Task: ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-01/story-02-package-and-repo-architecture/T05-update-package-readmes-with-modularity-information",
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "T05-update-package-readmes-with-modularity-information"
              })
            })]
          }), "\n"]
        }), "\n"]
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
        }), " ", "Package structure analyzed and documented"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Modularity principles established"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Dependency matrix created"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Consumption patterns documented for all frameworks"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "All package READMEs updated with modularity information"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Users can easily understand how to use individual packages independently"]
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
        children: "Clear understanding of how to consume individual frameworks"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Confidence in package independence"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Blocked By:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "None (can proceed independently)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Coordinates With:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Epic 2: Workflow Management Framework"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Epic 3: Numbering & Versioning Framework"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Epic 4: Kanban Framework"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "references",
      children: "References"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "packages/frameworks/workflow-mgt/README.md"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "packages/frameworks/numbering-versioning/README.md"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "packages/frameworks/kanban/README.md"
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "README.md"
        }), " (root)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "next-actions",
      children: "Next Actions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      className: "contains-task-list",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Start Task 1: Analyze current package structure and dependencies"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.em, {
        children: "Last updated: 2025-12-02 (v0.1.2.5+1 – Task 5 complete: Package READMEs updated with modularity information)"
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