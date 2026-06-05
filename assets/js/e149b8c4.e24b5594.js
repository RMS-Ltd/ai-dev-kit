"use strict";
(self["webpackChunkportal"] = self["webpackChunkportal"] || []).push([["44456"], {
1076(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_architecture_readme_md_e14_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-architecture-readme-md-e14.json
var site_docs_architecture_readme_md_e14_namespaceObject = JSON.parse('{"id":"architecture/README","title":"Architecture Documentation","description":"This section contains technical standards, ADRs, and integration documentation for the ai-dev-kit.","source":"@site/../docs/architecture/README.md","sourceDirName":"architecture","slug":"/architecture/","permalink":"/ai-dev-kit/docs/architecture/","draft":false,"unlisted":false,"editUrl":"https://github.com/RMS-Ltd/ai-dev-kit/tree/main/docs/../docs/architecture/README.md","tags":[],"version":"current","frontMatter":{"lifecycle":"evergreen","ttl_days":null,"created_at":"2025-12-04T12:01:54.000Z","expires_at":null,"housekeeping_policy":"keep"},"sidebar":"docsSidebar","next":{"title":"ADR-002: Task-Touch Derived Mapping (Kanban → SemVer)","permalink":"/ai-dev-kit/docs/architecture/standards-and-adrs/ADR-002-task-touch-derived-mapping"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ../docs/architecture/README.md


const frontMatter = {
	lifecycle: 'evergreen',
	ttl_days: null,
	created_at: new Date('2025-12-04T12:01:54.000Z'),
	expires_at: null,
	housekeeping_policy: 'keep'
};
const contentTitle = 'Architecture Documentation';

const assets = {

};



const toc = [{
  "value": "Structure",
  "id": "structure",
  "level": 2
}, {
  "value": "Key Documents",
  "id": "key-documents",
  "level": 2
}, {
  "value": "Navigation",
  "id": "navigation",
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
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "architecture-documentation",
        children: "Architecture Documentation"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["This section contains ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "technical standards"
      }), ", ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "ADRs"
      }), ", and ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "integration documentation"
      }), " for the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ai-dev-kit"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "structure",
      children: "Structure"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "standards-and-adrs/"
        }), " – Architecture Decision Records and standards", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "dev-kit-versioning-policy.md"
            })
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "dev-kit-kanban-versioning-rw-integration.md"
            })
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "key-documents",
      children: "Key Documents"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "KB Structure Overview:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "standards-and-adrs/kb-structure-overview.md"
        }), " – Comprehensive KB structure reference"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Dev-Kit Versioning Policy (book SoT):"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/governance/standards/dev-kit-versioning-policy",
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "../governance/standards/dev-kit-versioning-policy.md"
          })
        }), " — stub at ", (0,jsx_runtime.jsx)(_components.code, {
          children: "standards-and-adrs/dev-kit-versioning-policy.md"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Governance hub:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/governance/",
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "../governance/README.md"
          })
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Versioning Cookbook:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "standards-and-adrs/dev-kit-versioning-cookbook.md"
        }), " – Practical worked examples for versioning scenarios"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Kanban–Versioning–RW Integration:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "standards-and-adrs/dev-kit-kanban-versioning-rw-integration.md"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "navigation",
      children: "Navigation"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Project Management:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "../project-management/"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Changelogs:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "../changelog-and-release-notes/"
        })]
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