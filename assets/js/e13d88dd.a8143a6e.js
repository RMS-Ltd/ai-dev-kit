"use strict";
(self["webpackChunkportal"] = self["webpackChunkportal"] || []).push([["3885"], {
9656(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_guides_framework_consumption_readme_md_e13_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-guides-framework-consumption-readme-md-e13.json
var site_docs_guides_framework_consumption_readme_md_e13_namespaceObject = JSON.parse('{"id":"guides/framework-consumption/README","title":"Framework Consumption","description":"This directory contains guides for adopting the ai-dev-kit frameworks in your projects.","source":"@site/../docs/guides/framework-consumption/README.md","sourceDirName":"guides/framework-consumption","slug":"/guides/framework-consumption/","permalink":"/ai-dev-kit/docs/guides/framework-consumption/","draft":false,"unlisted":false,"editUrl":"https://github.com/RMS-Ltd/ai-dev-kit/tree/main/docs/../docs/guides/framework-consumption/README.md","tags":[],"version":"current","frontMatter":{"lifecycle":"evergreen","ttl_days":"null","created_at":"2025-12-04T12:01:54Z","expires_at":"null","housekeeping_policy":"keep"},"sidebar":"docsSidebar","previous":{"title":"Agent cold-start checklist","permalink":"/ai-dev-kit/docs/guides/agent-cold-start-checklist"},"next":{"title":"AI Dev Kit Feedback Guide","permalink":"/ai-dev-kit/docs/guides/framework-consumption/adk-feedback-guide"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(4848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(8453);
;// CONCATENATED MODULE: ../docs/guides/framework-consumption/README.md


const frontMatter = {
	lifecycle: 'evergreen',
	ttl_days: 'null',
	created_at: '2025-12-04T12:01:54Z',
	expires_at: 'null',
	housekeeping_policy: 'keep'
};
const contentTitle = 'Framework Consumption';

const assets = {

};



const toc = [{
  "value": "Contents",
  "id": "contents",
  "level": 2
}, {
  "value": "Available Frameworks",
  "id": "available-frameworks",
  "level": 2
}, {
  "value": "Navigation",
  "id": "navigation",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    code: "code",
    em: "em",
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
        id: "framework-consumption",
        children: "Framework Consumption"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["This directory contains ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "guides for adopting"
      }), " the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ai-dev-kit"
      }), " frameworks in your projects."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "contents",
      children: "Contents"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.em, {
        children: "Coming soon"
      }), " – Framework consumption guides will be added here."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "available-frameworks",
      children: "Available Frameworks"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Workflow Management:"
        }), " See ", (0,jsx_runtime.jsx)(_components.code, {
          children: "packages/frameworks/workflow-mgt/README.md"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Numbering & Versioning:"
        }), " See ", (0,jsx_runtime.jsx)(_components.code, {
          children: "packages/frameworks/numbering-versioning/README.md"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Kanban:"
        }), " See ", (0,jsx_runtime.jsx)(_components.code, {
          children: "packages/frameworks/kanban/README.md"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "navigation",
      children: "Navigation"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Return to ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Guides Overview:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "../README.md"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Return to ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "KB Root:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "../../README.md"
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