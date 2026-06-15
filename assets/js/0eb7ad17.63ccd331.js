"use strict";
(self["webpackChunkportal"] = self["webpackChunkportal"] || []).push([["9793"], {
9274(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  assets: () => (assets),
  contentTitle: () => (contentTitle),
  "default": () => (MDXContent),
  frontMatter: () => (frontMatter),
  metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_blog_default_site_blog_release_notes_policy_md_0eb_json__rspack_import_0),
  toc: () => (toc)
});
/* import */ var _site_docusaurus_docusaurus_plugin_content_blog_default_site_blog_release_notes_policy_md_0eb_json__rspack_import_0 = __webpack_require__(1010);
/* import */ var react_jsx_runtime__rspack_import_1 = __webpack_require__(4848);
/* import */ var _mdx_js_react__rspack_import_2 = __webpack_require__(8453);


const frontMatter = {};
const contentTitle = 'Significant release notes policy (RC ≥ 1)';

const assets = {
"authorsImageUrls": [],
};

/*truncate*/


const toc = [{
  "value": "Rules",
  "id": "rules",
  "level": 2
}, {
  "value": "Template (when authoring)",
  "id": "template-when-authoring",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    br: "br",
    code: "code",
    h2: "h2",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,_mdx_js_react__rspack_import_2/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__rspack_import_1.jsxs)(react_jsx_runtime__rspack_import_1.Fragment, {
    children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
        children: "Status:"
      }), " Scaffold — no curated posts until first RC public milestone.", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.br, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
        children: "Authority:"
      }), " ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
        href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/docs/kanban/fr-br/FR-114-split-documentation-surfaces-docusaurus-public-notion-maintainer-kb.md",
        children: "FR-114"
      }), " (F6) · ", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.a, {
        href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/docs/kanban/epics/epic-05/story-09-docusaurus-documentation-portal/T15-docusaurus-adopter-public-publish-allowlist-fr114.md",
        children: ["E05:S09", ":T15"]
      })]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "rules",
      children: "Rules"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "RC = 0 (development):"
        }), " Release history stays on GitHub (", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "CHANGELOG.md"
        }), ", archive) only."]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "RC ≥ 1:"
        }), " Publish ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "narrative milestone"
        }), " posts here (", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "portal/blog/"
        }), ") for ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "significant public releases"
        }), " — not raw Keep-a-Changelog dumps."]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "Each post: SemVer tag, adopter-facing summary, breaking changes, migration pointers."
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "template-when-authoring",
      children: "Template (when authoring)"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["Create ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "portal/blog/YYYY-MM-DD-<slug>/index.md"
      }), " with frontmatter (", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "slug"
      }), ", ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "title"
      }), ", ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "authors"
      }), ", ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "tags"
      }), ") per existing blog posts."]
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,_mdx_js_react__rspack_import_2/* .useMDXComponents */.R)(),
    ...props.components
  };
  return MDXLayout ? (0,react_jsx_runtime__rspack_import_1.jsx)(MDXLayout, {
    ...props,
    children: (0,react_jsx_runtime__rspack_import_1.jsx)(_createMdxContent, {
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
1010(module) {
module.exports = JSON.parse('{"permalink":"/ai-dev-kit/blog/RELEASE-NOTES-POLICY","editUrl":"https://github.com/RMS-Ltd/ai-dev-kit/tree/main/portal/blog/blog/RELEASE-NOTES-POLICY.md","source":"@site/blog/RELEASE-NOTES-POLICY.md","title":"Significant release notes policy (RC ≥ 1)","description":"{/ truncate /}","date":"2026-06-15T14:00:20.000Z","tags":[],"readingTime":0.66,"hasTruncateMarker":true,"authors":[],"frontMatter":{},"unlisted":false,"nextItem":{"title":"Getting Docusaurus Working","permalink":"/ai-dev-kit/blog/getting-docusaurus-working"}}')

},

}]);