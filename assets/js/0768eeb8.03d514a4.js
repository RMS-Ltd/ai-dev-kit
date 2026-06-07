"use strict";
(self["webpackChunkportal"] = self["webpackChunkportal"] || []).push([["7799"], {
6494(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  assets: () => (assets),
  contentTitle: () => (contentTitle),
  "default": () => (MDXContent),
  frontMatter: () => (frontMatter),
  metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_blog_default_site_blog_2026_06_05_getting_docusaurus_working_index_md_228_json__rspack_import_0),
  toc: () => (toc)
});
/* import */ var _site_docusaurus_docusaurus_plugin_content_blog_default_site_blog_2026_06_05_getting_docusaurus_working_index_md_228_json__rspack_import_0 = __webpack_require__(9777);
/* import */ var react_jsx_runtime__rspack_import_1 = __webpack_require__(4848);
/* import */ var _mdx_js_react__rspack_import_2 = __webpack_require__(8453);


const frontMatter = {
	slug: 'getting-docusaurus-working',
	title: 'Getting Docusaurus Working',
	authors: [
		'adk'
	],
	tags: [
		'docusaurus'
	]
};
const contentTitle = undefined;

const assets = {
"authorsImageUrls": [undefined],
};



const toc = [];
function _createMdxContent(props) {
  const _components = {
    code: "code",
    p: "p",
    strong: "strong",
    ...(0,_mdx_js_react__rspack_import_2/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
    children: ["We spent several weeks getting the AI Dev Kit documentation portal to ", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.strong, {
      children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "npm run build"
      }), " exit 0"]
    }), " under strict link checking, then shipped it to GitHub Pages. This post is a practical field guide — not a hello-world tutorial — for teams publishing a ", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.strong, {
      children: ["monorepo ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "docs/"
      }), " tree"]
    }), " with Docusaurus 3.x."]
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
9777(module) {
module.exports = JSON.parse('{"permalink":"/ai-dev-kit/blog/getting-docusaurus-working","editUrl":"https://github.com/RMS-Ltd/ai-dev-kit/tree/main/portal/blog/blog/2026-06-05-getting-docusaurus-working/index.md","source":"@site/blog/2026-06-05-getting-docusaurus-working/index.md","title":"Getting Docusaurus Working","description":"We spent several weeks getting the AI Dev Kit documentation portal to npm run build exit 0 under strict link checking, then shipped it to GitHub Pages. This post is a practical field guide — not a hello-world tutorial — for teams publishing a monorepo docs/ tree with Docusaurus 3.x.","date":"2026-06-05T00:00:00.000Z","tags":[{"inline":false,"label":"Docusaurus","permalink":"/ai-dev-kit/blog/tags/docusaurus","description":"Docusaurus tag description"}],"readingTime":4.93,"hasTruncateMarker":true,"authors":[{"name":"AI Dev Kit maintainers","title":"Documentation portal team","url":"https://github.com/RMS-Ltd/ai-dev-kit","socials":{"github":"https://github.com/RMS-Ltd"},"imageURL":"https://github.com/RMS-Ltd.png","key":"adk","page":null}],"frontMatter":{"slug":"getting-docusaurus-working","title":"Getting Docusaurus Working","authors":["adk"],"tags":["docusaurus"]},"unlisted":false,"prevItem":{"title":"Significant release notes policy (RC ≥ 1)","permalink":"/ai-dev-kit/blog/RELEASE-NOTES-POLICY"},"nextItem":{"title":"Welcome","permalink":"/ai-dev-kit/blog/welcome"}}')

},

}]);