"use strict";
(self["webpackChunkportal"] = self["webpackChunkportal"] || []).push([["92552"], {
87197(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_project_management_kanban_readme_md_ae0_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-project-management-kanban-readme-md-ae0.json
var site_docs_project_management_kanban_readme_md_ae0_namespaceObject = JSON.parse('{"id":"project-management/kanban/README","title":"Kanban Directory","description":"All Kanban documentation for ai-dev-kit: task management, FR/BR/UXR intake, and epic/story/task hierarchy.","source":"@site/../docs/project-management/kanban/README.md","sourceDirName":"project-management/kanban","slug":"/project-management/kanban/","permalink":"/ai-dev-kit/docs/project-management/kanban/","draft":false,"unlisted":false,"editUrl":"https://github.com/RMS-Ltd/ai-dev-kit/tree/main/docs/../docs/project-management/kanban/README.md","tags":[],"version":"current","frontMatter":{"lifecycle":"evergreen","ttl_days":null,"created_at":"2025-12-04T12:01:54.000Z","expires_at":null,"housekeeping_policy":"keep"},"sidebar":"docsSidebar","previous":{"title":"Project Management","permalink":"/ai-dev-kit/docs/project-management/"},"next":{"title":"Kanban Workflow Agents","permalink":"/ai-dev-kit/docs/project-management/kanban/AGENTS"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ../docs/project-management/kanban/README.md


const frontMatter = {
	lifecycle: 'evergreen',
	ttl_days: null,
	created_at: new Date('2025-12-04T12:01:54.000Z'),
	expires_at: null,
	housekeeping_policy: 'keep'
};
const contentTitle = 'Kanban Directory';

const assets = {

};



const toc = [{
  "value": "Structure",
  "id": "structure",
  "level": 2
}, {
  "value": "Active surfaces",
  "id": "active-surfaces",
  "level": 2
}, {
  "value": "Workflow (summary)",
  "id": "workflow-summary",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    h2: "h2",
    header: "header",
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
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "kanban-directory",
        children: "Kanban Directory"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["All Kanban documentation for ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ai-dev-kit"
      }), ": task management, FR/BR/UXR intake, and epic/story/task hierarchy."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "structure",
      children: "Structure"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-text",
        children: "kanban/\n├── _index.md                      # Quick board view (obligatory)\n├── README.md                      # This file (obligatory)\n├── kboard.md                      # Sole active MoSCOW board (ADR-018)\n├── kanban-structure.md            # Epic/Story/Task structure\n├── kanban-board-guide.md          # Rules and explanations\n├── kanban-completed.md            # Completed tasks ledger\n├── intake-structure.md            # FR/BR/UXR inventory by type\n├── intake-completed.md            # Completed FR/BR/UXR ledger\n├── intake-open-taskless-queue.md  # Open ∧ taskless intake working queue\n├── fr-br/                         # Individual FR/BR/UXR documents\n└── epics/                         # Epic → Story → Task docs\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Removed (intake rename wave):"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "fbuboard.md"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "kanban-board.md"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "fr-br-uxr-*"
      }), " root aliases, and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "fbu-*"
      }), " filenames (→ ", (0,jsx_runtime.jsx)(_components.code, {
        children: "intake-*"
      }), ")."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "active-surfaces",
      children: "Active surfaces"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Surface"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Role"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "kboard.md"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sole MoSCOW board (tasks + wired FBUs + Verification band)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "intake-structure.md"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Full FR/BR/UXR inventory"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "intake-open-taskless-queue.md"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Open ∧ taskless intake queue"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "intake-completed.md"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Terminal FBU ledger"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "kanban-completed.md"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Terminal task ledger"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "fr-br/*.md"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Per-report SoT"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "workflow-summary",
      children: "Workflow (summary)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["File FR/BR/UXR under ", (0,jsx_runtime.jsx)(_components.code, {
          children: "fr-br/"
        }), " and create implementing task same session (KG-R2)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Add MoSCOW row on ", (0,jsx_runtime.jsx)(_components.code, {
          children: "kboard.md"
        }), "; update ", (0,jsx_runtime.jsx)(_components.code, {
          children: "intake-structure.md"
        }), " / queue as needed."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["On completion, move to ", (0,jsx_runtime.jsx)(_components.code, {
          children: "intake-completed.md"
        }), " / ", (0,jsx_runtime.jsx)(_components.code, {
          children: "kanban-completed.md"
        }), " and prune active rows."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["See ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/project-management/kanban/kanban-board-guide",
        children: "kanban-board-guide.md"
      }), " and ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/architecture/standards-and-adrs/ADR-018-single-kanban-board-consolidation",
        children: "ADR-018"
      }), "."]
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