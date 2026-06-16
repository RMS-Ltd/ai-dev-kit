"use strict";
(self["webpackChunkportal"] = self["webpackChunkportal"] || []).push([["7476"], {
661(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_guides_readme_md_77f_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-guides-readme-md-77f.json
var site_docs_guides_readme_md_77f_namespaceObject = JSON.parse('{"id":"guides/README","title":"Guides","description":"This section contains user-facing documentation and how-to guides for the ai-dev-kit repository.","source":"@site/../docs/guides/README.md","sourceDirName":"guides","slug":"/guides/","permalink":"/ai-dev-kit/docs/guides/","draft":false,"unlisted":false,"editUrl":"https://github.com/RMS-Ltd/ai-dev-kit/tree/main/docs/../docs/guides/README.md","tags":[],"version":"current","frontMatter":{"lifecycle":"evergreen","ttl_days":"null","created_at":"2025-12-04T12:01:54Z","expires_at":"null","housekeeping_policy":"keep"},"sidebar":"docsSidebar","next":{"title":"ADK install — Expenses Tracker (fresh repository)","permalink":"/ai-dev-kit/docs/guides/adk-install-expenses-tracker-fresh-repo"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(4848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(8453);
;// CONCATENATED MODULE: ../docs/guides/README.md


const frontMatter = {
	lifecycle: 'evergreen',
	ttl_days: 'null',
	created_at: '2025-12-04T12:01:54Z',
	expires_at: 'null',
	housekeeping_policy: 'keep'
};
const contentTitle = 'Guides';

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
        id: "guides",
        children: "Guides"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["This section contains ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "user-facing documentation"
      }), " and ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "how-to guides"
      }), " for the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ai-dev-kit"
      }), " repository."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "structure",
      children: "Structure"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "getting-started/"
        }), " – Quick start guides, onboarding materials"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "framework-consumption/"
        }), " – Guides for adopting dev-kit frameworks"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "key-documents",
      children: "Key Documents"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Workflow initiation:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/guides/workflow-initiation-cheatsheet",
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "workflow-initiation-cheatsheet.md"
          })
        }), " — RW, UKW, IPW, CMW, PVW triggers and flags (human quick-reference)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Dependabot / portal npm triage:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/portal/README.md#dependency-updates-dependabot--fr-105--e08s03t06",
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "portal/README.md"
          })
        }), " (FR-105)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Agent cold start:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/guides/agent-cold-start-checklist",
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "agent-cold-start-checklist.md"
          })
        }), " — bootstrap simulations (ADR-012); see also ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/docs/project-agent-index.md",
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "docs/project-agent-index.md"
          })
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Getting Started:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "getting-started/README.md"
        }), " (coming soon)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Framework Consumption:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "framework-consumption/README.md"
        }), " (coming soon)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "navigation",
      children: "Navigation"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Architecture:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "../Architecture/"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Project Management:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "../project-management/"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Changelog:"
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
8453(__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  R: () => (useMDXComponents),
  x: () => (MDXProvider)
});
/* import */ var react__rspack_import_0 = __webpack_require__(6540);
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