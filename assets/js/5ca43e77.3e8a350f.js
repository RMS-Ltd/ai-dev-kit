"use strict";
(self["webpackChunkportal"] = self["webpackChunkportal"] || []).push([["40623"], {
20017(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_implementation_cycles_ipp_e_5_s_01_t_62_github_release_install_fr_062_md_5ca_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-implementation-cycles-ipp-e-5-s-01-t-62-github-release-install-fr-062-md-5ca.json
var site_docs_implementation_cycles_ipp_e_5_s_01_t_62_github_release_install_fr_062_md_5ca_namespaceObject = JSON.parse('{"id":"implementation-cycles/IPP-E5S01T62-github-release-install-fr062","title":"E5:S01:T62 — Planning: FR-062 GitHub release installation (IPP)","description":"Host TaskS01:T62)","source":"@site/../docs/implementation-cycles/IPP-E5S01T62-github-release-install-fr062.md","sourceDirName":"implementation-cycles","slug":"/implementation-cycles/IPP-E5S01T62-github-release-install-fr062","permalink":"/ai-dev-kit/docs/implementation-cycles/IPP-E5S01T62-github-release-install-fr062","draft":false,"unlisted":false,"editUrl":"https://github.com/RMS-Ltd/ai-dev-kit/tree/main/docs/../docs/implementation-cycles/IPP-E5S01T62-github-release-install-fr062.md","tags":[],"version":"current","frontMatter":{"lifecycle":"evergreen","created_at":"2026-05-29T12:00:00.000Z","housekeeping_policy":"keep"},"sidebar":"docsSidebar","previous":{"title":"E5:S01:T56 — Planning: Standardize Packaged Workflow Documentation and Instructions","permalink":"/ai-dev-kit/docs/implementation-cycles/IPP-E5S01T56-package-workflow-docs"},"next":{"title":"E6:S01:T38 — IPP: UKW Completed Task Removal Defect (BR-072)","permalink":"/ai-dev-kit/docs/implementation-cycles/IPP-E6S01T38-ukw-completed-task-removal-defect"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ../docs/implementation-cycles/IPP-E5S01T62-github-release-install-fr062.md


const frontMatter = {
	lifecycle: 'evergreen',
	created_at: new Date('2026-05-29T12:00:00.000Z'),
	housekeeping_policy: 'keep'
};
const contentTitle = 'E5:S01 — Planning: FR-062 GitHub release installation (IPP)';

const assets = {

};



const toc = [{
  "value": "1. Requirements",
  "id": "1-requirements",
  "level": 2
}, {
  "value": "4. Implementation plan",
  "id": "4-implementation-plan",
  "level": 2
}, {
  "value": "7. Success criteria",
  "id": "7-success-criteria",
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
    li: "li",
    p: "p",
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
        id: "e5s01--planning-fr-062-github-release-installation-ipp",
        children: ["E5:S01", ":T62", " — Planning: FR-062 GitHub release installation (IPP)"]
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Host Task:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-05/story-01-fr-repo/T62-github-release-installation-experience",
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "T62-github-release-installation-experience.md"
        })
      }), " ", (0,jsx_runtime.jsxs)(_components.strong, {
        children: ["(E5:S01", ":T62", ")"]
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Planning for:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/project-management/kanban/fr-br/FR-062-github-release-installation-experience",
        children: "FR-062"
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Status:"
      }), " Published"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1-requirements",
      children: "1. Requirements"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Wave"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "RF"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "W1"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Package build script + ", (0,jsx_runtime.jsx)(_components.code, {
              children: ".github/workflows/framework-release.yml"
            }), " upload tarballs+sha256"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "W2"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Harden ", (0,jsx_runtime.jsx)(_components.code, {
              children: "install_package_from_release.py"
            }), "; receipt JSON under ", (0,jsx_runtime.jsx)(_components.code, {
              children: "logs/ai-dev-kit/install/"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "W3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "INSTALL + install-receipt-reference docs"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "W4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Smoke test script + evidence in task doc"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "4-implementation-plan",
      children: "4. Implementation plan"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "RW"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Milestone"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RW #1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Installer + receipt module + unit tests"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["RW #2 (optional ", (0,jsx_runtime.jsx)(_components.code, {
              children: "-d"
            }), ")"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Docs-only"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RW #3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CI workflow + smoke; FR-062 IMPLEMENTED"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "7-success-criteria",
      children: "7. Success criteria"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Artifacts documented; local smoke install from ", (0,jsx_runtime.jsx)(_components.code, {
          children: "dist/"
        }), " or release; AC on task doc"]
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