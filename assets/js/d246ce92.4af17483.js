"use strict";
(self["webpackChunkportal"] = self["webpackChunkportal"] || []).push([["84551"], {
40675(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_implementation_cycles_icw_e_2_s_15_t_01_specification_md_d24_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-implementation-cycles-icw-e-2-s-15-t-01-specification-md-d24.json
var site_docs_implementation_cycles_icw_e_2_s_15_t_01_specification_md_d24_namespaceObject = JSON.parse('{"id":"implementation-cycles/ICW-E2S15T01-specification","title":"ICW E2:S15:T01 Specification","description":"Problem","source":"@site/../docs/implementation-cycles/ICW-E2S15T01-specification.md","sourceDirName":"implementation-cycles","slug":"/implementation-cycles/ICW-E2S15T01-specification","permalink":"/ai-dev-kit/docs/implementation-cycles/ICW-E2S15T01-specification","draft":false,"unlisted":false,"editUrl":"https://github.com/RMS-Ltd/ai-dev-kit/tree/main/docs/../docs/implementation-cycles/ICW-E2S15T01-specification.md","tags":[],"version":"current","frontMatter":{"lifecycle":"evergreen","ttl_days":null,"created_at":"2026-04-14T00:00:00.000Z","expires_at":null,"housekeeping_policy":"keep"},"sidebar":"docsSidebar","previous":{"title":"ICW E2:S15:T01 Implementation Plan","permalink":"/ai-dev-kit/docs/implementation-cycles/ICW-E2S15T01-implementation-plan"},"next":{"title":"ICW E2:S15:T01 Test Design","permalink":"/ai-dev-kit/docs/implementation-cycles/ICW-E2S15T01-test-design"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ../docs/implementation-cycles/ICW-E2S15T01-specification.md


const frontMatter = {
	lifecycle: 'evergreen',
	ttl_days: null,
	created_at: new Date('2026-04-14T00:00:00.000Z'),
	expires_at: null,
	housekeeping_policy: 'keep'
};
const contentTitle = 'ICW E2:S15 Specification';

const assets = {

};



const toc = [{
  "value": "Problem",
  "id": "problem",
  "level": 2
}, {
  "value": "Objectives",
  "id": "objectives",
  "level": 2
}, {
  "value": "Requirements",
  "id": "requirements",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h1: "h1",
    h2: "h2",
    header: "header",
    li: "li",
    ol: "ol",
    p: "p",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsxs)(_components.h1, {
        id: "icw-e2s15-specification",
        children: ["ICW E2:S15", ":T01", " Specification"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "problem",
      children: "Problem"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "IPW artifacts can exist durably in-repo but remain undiscoverable from project documentation surfaces unless publication wiring is explicit and validated."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "objectives",
      children: "Objectives"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Define deterministic publication contract ownership/timing."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Require task-level publication state (", (0,jsx_runtime.jsx)(_components.code, {
          children: "published"
        }), " or ", (0,jsx_runtime.jsx)(_components.code, {
          children: "NOT_APPLICABLE"
        }), " with reason)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Ensure host task docs link to planning artifacts under ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/implementation-cycles/"
        }), "."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "requirements",
      children: "Requirements"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Add validator for requested ", (0,jsx_runtime.jsx)(_components.code, {
          children: "E:S:T"
        }), " publication wiring."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Add tests for pass/fail and not-applicable paths."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update workflow docs to make publication responsibility explicit."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Produce inventory + phased backfill plan for historical gaps."
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