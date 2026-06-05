"use strict";
(self["webpackChunkportal"] = self["webpackChunkportal"] || []).push([["34304"], {
18449(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_implementation_cycles_icw_e_2_s_15_t_01_test_design_md_f27_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-implementation-cycles-icw-e-2-s-15-t-01-test-design-md-f27.json
var site_docs_implementation_cycles_icw_e_2_s_15_t_01_test_design_md_f27_namespaceObject = JSON.parse('{"id":"implementation-cycles/ICW-E2S15T01-test-design","title":"ICW E2:S15:T01 Test Design","description":"Validation Cases","source":"@site/../docs/implementation-cycles/ICW-E2S15T01-test-design.md","sourceDirName":"implementation-cycles","slug":"/implementation-cycles/ICW-E2S15T01-test-design","permalink":"/ai-dev-kit/docs/implementation-cycles/ICW-E2S15T01-test-design","draft":false,"unlisted":false,"editUrl":"https://github.com/RMS-Ltd/ai-dev-kit/tree/main/docs/../docs/implementation-cycles/ICW-E2S15T01-test-design.md","tags":[],"version":"current","frontMatter":{"lifecycle":"evergreen","ttl_days":null,"created_at":"2026-04-14T00:00:00.000Z","expires_at":null,"housekeeping_policy":"keep"},"sidebar":"docsSidebar","previous":{"title":"ICW E2:S15:T01 Specification","permalink":"/ai-dev-kit/docs/implementation-cycles/ICW-E2S15T01-specification"},"next":{"title":"ICW E2:S15:T05 Implementation Plan","permalink":"/ai-dev-kit/docs/implementation-cycles/ICW-E2S15T05-implementation-plan"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ../docs/implementation-cycles/ICW-E2S15T01-test-design.md


const frontMatter = {
	lifecycle: 'evergreen',
	ttl_days: null,
	created_at: new Date('2026-04-14T00:00:00.000Z'),
	expires_at: null,
	housekeeping_policy: 'keep'
};
const contentTitle = 'ICW E2:S15 Test Design';

const assets = {

};



const toc = [{
  "value": "Validation Cases",
  "id": "validation-cases",
  "level": 2
}, {
  "value": "Verification Commands",
  "id": "verification-commands",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h1: "h1",
    h2: "h2",
    header: "header",
    li: "li",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsxs)(_components.h1, {
        id: "icw-e2s15-test-design",
        children: ["ICW E2:S15", ":T01", " Test Design"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "validation-cases",
      children: "Validation Cases"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["PASS when task links all required artifacts (spec/test/implementation-plan) in ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/implementation-cycles/"
        }), " and files exist."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "FAIL when an artifact link is missing."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["PASS when ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Publication Status: NOT_APPLICABLE"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Publication N/A Reason:"
        }), " is present."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["FAIL when ", (0,jsx_runtime.jsx)(_components.code, {
          children: "NOT_APPLICABLE"
        }), " is present without justification."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "verification-commands",
      children: "Verification Commands"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "pytest \"packages/frameworks/workflow-mgt/scripts/validation/test_validate_ipw_publication_wiring.py\""
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "python \"packages/frameworks/workflow-mgt/scripts/validation/validate_ipw_publication_wiring.py\" --requested E2:S15:T01"
        })
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