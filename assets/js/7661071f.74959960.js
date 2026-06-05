"use strict";
(self["webpackChunkportal"] = self["webpackChunkportal"] || []).push([["18522"], {
24137(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  assets: () => (assets),
  contentTitle: () => (contentTitle),
  "default": () => (MDXContent),
  frontMatter: () => (frontMatter),
  metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_blog_default_site_blog_2021_08_26_welcome_index_md_d9f_json__rspack_import_0),
  toc: () => (toc)
});
/* import */ var _site_docusaurus_docusaurus_plugin_content_blog_default_site_blog_2021_08_26_welcome_index_md_d9f_json__rspack_import_0 = __webpack_require__(48811);
/* import */ var react_jsx_runtime__rspack_import_1 = __webpack_require__(74848);
/* import */ var _mdx_js_react__rspack_import_2 = __webpack_require__(28453);


const frontMatter = {
	slug: 'welcome',
	title: 'Welcome',
	authors: [
		'slorber',
		'yangshun'
	],
	tags: [
		'facebook',
		'hello',
		'docusaurus'
	]
};
const contentTitle = undefined;

const assets = {
"authorsImageUrls": [undefined, undefined],
};



const toc = [];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    p: "p",
    ...(0,_mdx_js_react__rspack_import_2/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__rspack_import_1.jsxs)(react_jsx_runtime__rspack_import_1.Fragment, {
    children: [(0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
        href: "https://docusaurus.io/docs/blog",
        children: "Docusaurus blogging features"
      }), " are powered by the ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
        href: "https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-content-blog",
        children: "blog plugin"
      }), "."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Here are a few tips you might find useful."
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
48811(module) {
module.exports = JSON.parse('{"permalink":"/ai-dev-kit/blog/welcome","editUrl":"https://github.com/RMS-Ltd/ai-dev-kit/tree/main/portal/blog/blog/2021-08-26-welcome/index.md","source":"@site/blog/2021-08-26-welcome/index.md","title":"Welcome","description":"Docusaurus blogging features are powered by the blog plugin.","date":"2021-08-26T00:00:00.000Z","tags":[{"inline":false,"label":"Facebook","permalink":"/ai-dev-kit/blog/tags/facebook","description":"Facebook tag description"},{"inline":false,"label":"Hello","permalink":"/ai-dev-kit/blog/tags/hello","description":"Hello tag description"},{"inline":false,"label":"Docusaurus","permalink":"/ai-dev-kit/blog/tags/docusaurus","description":"Docusaurus tag description"}],"readingTime":0.56,"hasTruncateMarker":true,"authors":[{"name":"Sébastien Lorber","title":"Docusaurus maintainer","url":"https://sebastienlorber.com","page":{"permalink":"/ai-dev-kit/blog/authors/all-sebastien-lorber-articles"},"socials":{"x":"https://x.com/sebastienlorber","linkedin":"https://www.linkedin.com/in/sebastienlorber/","github":"https://github.com/slorber","newsletter":"https://thisweekinreact.com"},"imageURL":"https://github.com/slorber.png","key":"slorber"},{"name":"Yangshun Tay","title":"Ex-Meta Staff Engineer, Co-founder GreatFrontEnd","url":"https://linkedin.com/in/yangshun","page":{"permalink":"/ai-dev-kit/blog/authors/yangshun"},"socials":{"x":"https://x.com/yangshunz","linkedin":"https://www.linkedin.com/in/yangshun/","github":"https://github.com/yangshun","newsletter":"https://www.greatfrontend.com"},"imageURL":"https://github.com/yangshun.png","key":"yangshun"}],"frontMatter":{"slug":"welcome","title":"Welcome","authors":["slorber","yangshun"],"tags":["facebook","hello","docusaurus"]},"unlisted":false,"prevItem":{"title":"Getting Docusaurus Working","permalink":"/ai-dev-kit/blog/getting-docusaurus-working"},"nextItem":{"title":"MDX Blog Post","permalink":"/ai-dev-kit/blog/mdx-blog-post"}}')

},

}]);