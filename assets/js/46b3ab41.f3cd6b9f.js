"use strict";
(self["webpackChunkportal"] = self["webpackChunkportal"] || []).push([["9657"], {
3621(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_documentation_docusaurus_portal_index_md_46b_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-documentation-docusaurus-portal-index-md-46b.json
var site_docs_documentation_docusaurus_portal_index_md_46b_namespaceObject = JSON.parse('{"id":"documentation/docusaurus-portal-index","title":"Documentation portal index","description":"This file is the default entry for the Docusaurus docs plugin (FR-114 / E05T15 adopter-public allowlist).","source":"@site/../docs/documentation/docusaurus-portal-index.md","sourceDirName":"documentation","slug":"/documentation/docusaurus-portal-index","permalink":"/ai-dev-kit/docs/documentation/docusaurus-portal-index","draft":false,"unlisted":false,"editUrl":"https://github.com/RMS-Ltd/ai-dev-kit/tree/main/docs/../docs/documentation/docusaurus-portal-index.md","tags":[],"version":"current","sidebarPosition":0,"frontMatter":{"lifecycle":"evergreen","ttl_days":null,"created_at":"2026-03-30T00:00:00.000Z","expires_at":null,"housekeeping_policy":"keep","sidebar_position":0},"sidebar":"docsSidebar","previous":{"title":"Workflow initiation cheatsheet","permalink":"/ai-dev-kit/docs/guides/workflow-initiation-cheatsheet"},"next":{"title":"AI Dev Kit: Vision and Purpose","permalink":"/ai-dev-kit/docs/documentation/ai-dev-kit-vision-and-purpose"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(4848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(8453);
;// CONCATENATED MODULE: ../docs/documentation/docusaurus-portal-index.md


const frontMatter = {
	lifecycle: 'evergreen',
	ttl_days: null,
	created_at: new Date('2026-03-30T00:00:00.000Z'),
	expires_at: null,
	housekeeping_policy: 'keep',
	sidebar_position: 0
};
const contentTitle = 'Documentation portal index';

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
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "documentation-portal-index",
        children: "Documentation portal index"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["This file is the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "default entry"
      }), " for the Docusaurus docs plugin (", (0,jsx_runtime.jsx)(_components.strong, {
        children: "FR-114"
      }), " / ", (0,jsx_runtime.jsxs)(_components.strong, {
        children: ["E05:S09", ":T15"]
      }), " adopter-public allowlist)."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Published on this site:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://github.com/RMS-Ltd/ai-dev-kit/tree/main/docs/guides",
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/guides/"
        })
      }), ", ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://github.com/RMS-Ltd/ai-dev-kit/tree/main/docs/documentation",
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/documentation/"
        })
      }), ", and the ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/docs/developer-tools/ide-whitelist-guide.md",
        children: "IDE whitelist guide"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Maintainer corpora"
      }), " (Kanban, IPPs, knowledge, internal ADRs, changelogs) remain on ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "GitHub"
      }), " and ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Notion"
      }), " — not mirrored here. See ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/docs/kanban/fbu/FR-114-split-documentation-surfaces-docusaurus-public-notion-maintainer-kb.md",
        children: "FR-114"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Use the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "sidebar"
      }), " (", (0,jsx_runtime.jsx)(_components.code, {
        children: "portal/sidebars.js"
      }), ") to browse adopter-facing categories. ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Broken links and MDX issues"
      }), " are triaged under ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "FR-067"
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