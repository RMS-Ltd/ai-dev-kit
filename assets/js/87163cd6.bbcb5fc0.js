"use strict";
(self["webpackChunkportal"] = self["webpackChunkportal"] || []).push([["91918"], {
49116(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_changelog_and_release_notes_readme_md_871_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-changelog-and-release-notes-readme-md-871.json
var site_docs_changelog_and_release_notes_readme_md_871_namespaceObject = JSON.parse('{"id":"changelog-and-release-notes/README","title":"Changelog and Release Notes","description":"This section is the sole canonical pillar for changelog and release-note documentation in this repository. Legacy paths such as docs/changelog/ and docs/knowledge/changelog-and-release-notes/ were retired (UXR-018 / E05T12 v0.5.9.12+2).","source":"@site/../docs/changelog-and-release-notes/README.md","sourceDirName":"changelog-and-release-notes","slug":"/changelog-and-release-notes/","permalink":"/ai-dev-kit/docs/changelog-and-release-notes/","draft":false,"unlisted":false,"editUrl":"https://github.com/RMS-Ltd/ai-dev-kit/tree/main/docs/../docs/changelog-and-release-notes/README.md","tags":[],"version":"current","frontMatter":{"lifecycle":"evergreen","ttl_days":null,"created_at":"2025-12-04T12:01:54.000Z","expires_at":null,"housekeeping_policy":"keep"},"sidebar":"docsSidebar","previous":{"title":"Canonical Use Cases Index","permalink":"/ai-dev-kit/docs/architecture/use-cases/canonical/"},"next":{"title":"SemVer Tag Correction: v0.5.39+2","permalink":"/ai-dev-kit/docs/changelog-and-release-notes/semver-tag-v0.5.39+2-correction"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ../docs/changelog-and-release-notes/README.md


const frontMatter = {
	lifecycle: 'evergreen',
	ttl_days: null,
	created_at: new Date('2025-12-04T12:01:54.000Z'),
	expires_at: null,
	housekeeping_policy: 'keep'
};
const contentTitle = 'Changelog and Release Notes';

const assets = {

};



const toc = [{
  "value": "Structure",
  "id": "structure",
  "level": 2
}, {
  "value": "Navigation",
  "id": "navigation",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
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
        id: "changelog-and-release-notes",
        children: "Changelog and Release Notes"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["This section is the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "sole canonical pillar"
      }), " for changelog and release-note documentation in this repository. Legacy paths such as ", (0,jsx_runtime.jsx)(_components.code, {
        children: "docs/changelog/"
      }), " and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "docs/knowledge/changelog-and-release-notes/"
      }), " were retired (UXR-018 / ", (0,jsx_runtime.jsxs)(_components.strong, {
        children: ["E05:S09", ":T12"]
      }), " ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "v0.5.9.12+2"
      }), ")."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "structure",
      children: "Structure"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "CHANGELOG.md"
        }), " (project root) – Main summary changelog (Keep a Changelog; ", (0,jsx_runtime.jsx)(_components.code, {
          children: "latest_only"
        }), " archival per ", (0,jsx_runtime.jsx)(_components.code, {
          children: "rw-config.yaml"
        }), ")"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "changelog-archive/"
        }), " – Detailed per-version changelog files (", (0,jsx_runtime.jsx)(_components.code, {
          children: "CHANGELOG_v*.md"
        }), "); RW writes here via ", (0,jsx_runtime.jsx)(_components.code, {
          children: "changelog_dir"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "navigation",
      children: "Navigation"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Main Changelog:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "../../CHANGELOG.md"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Archive Index:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "changelog-archive/README.md"
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