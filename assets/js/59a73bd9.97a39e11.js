"use strict";
(self["webpackChunkportal"] = self["webpackChunkportal"] || []).push([["67988"], {
21296(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_implementation_cycles_ipp_e_02_s_11_t_13_github_actions_workflow_spam_emails_md_59a_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-implementation-cycles-ipp-e-02-s-11-t-13-github-actions-workflow-spam-emails-md-59a.json
var site_docs_implementation_cycles_ipp_e_02_s_11_t_13_github_actions_workflow_spam_emails_md_59a_namespaceObject = JSON.parse('{"id":"implementation-cycles/IPP-E02S11T13-github-actions-workflow-spam-emails","title":"E02:S11:T13 — IPW Plan (BR-051)","description":"Host Task: T13","source":"@site/../docs/implementation-cycles/IPP-E02S11T13-github-actions-workflow-spam-emails.md","sourceDirName":"implementation-cycles","slug":"/implementation-cycles/IPP-E02S11T13-github-actions-workflow-spam-emails","permalink":"/ai-dev-kit/docs/implementation-cycles/IPP-E02S11T13-github-actions-workflow-spam-emails","draft":false,"unlisted":false,"editUrl":"https://github.com/RMS-Ltd/ai-dev-kit/tree/main/docs/../docs/implementation-cycles/IPP-E02S11T13-github-actions-workflow-spam-emails.md","tags":[],"version":"current","frontMatter":{"lifecycle":"evergreen","created_at":"2026-06-05T12:00:00.000Z","housekeeping_policy":"keep"},"sidebar":"docsSidebar","previous":{"title":"E02:S01:T24 — Planning: RW BUILD increment enforcement and tag immutability (IPW)","permalink":"/ai-dev-kit/docs/implementation-cycles/IPP-E02S01T24-rw-build-increment-tag-immutability"},"next":{"title":"E02:S11:T14 — Planning: Spec, Tests, Implementation Plan (IPW)","permalink":"/ai-dev-kit/docs/implementation-cycles/IPP-E02S11T14-github-actions-workflow-optimization"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ../docs/implementation-cycles/IPP-E02S11T13-github-actions-workflow-spam-emails.md


const frontMatter = {
	lifecycle: 'evergreen',
	created_at: new Date('2026-06-05T12:00:00.000Z'),
	housekeeping_policy: 'keep'
};
const contentTitle = 'E02:S11 — IPW Plan (BR-051)';

const assets = {

};



const toc = [];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    header: "header",
    p: "p",
    strong: "strong",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsxs)(_components.h1, {
        id: "e02s11--ipw-plan-br-051",
        children: ["E02:S11", ":T13", " — IPW Plan (BR-051)"]
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Host Task:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-02/story-11-intake-workflow-automation/T13-github-actions-workflow-spam-emails-br051",
        children: "T13"
      }), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Status:"
      }), " Approved\nRoot cause: broad issue triggers + job-level ", (0,jsx_runtime.jsx)(_components.code, {
        children: "if:"
      }), " → \"No jobs were run\" emails (BR-051); BR-053 push-trigger workaround.\nDelivery: dispatch-only ", (0,jsx_runtime.jsx)(_components.code, {
        children: "fr-br-intake.yml"
      }), ", archive ", (0,jsx_runtime.jsx)(_components.code, {
        children: ".DISABLED*"
      }), ", CI concurrency blocks."]
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