"use strict";
(self["webpackChunkportal"] = self["webpackChunkportal"] || []).push([["92193"], {
54385(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_changelog_and_release_notes_semver_tag_v_0_5_39_2_correction_md_271_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-changelog-and-release-notes-semver-tag-v-0-5-39-2-correction-md-271.json
var site_docs_changelog_and_release_notes_semver_tag_v_0_5_39_2_correction_md_271_namespaceObject = JSON.parse('{"id":"changelog-and-release-notes/semver-tag-v0.5.39+2-correction","title":"SemVer Tag Correction: v0.5.39+2","description":"Date: 2026-02-19","source":"@site/../docs/changelog-and-release-notes/semver-tag-v0.5.39+2-correction.md","sourceDirName":"changelog-and-release-notes","slug":"/changelog-and-release-notes/semver-tag-v0.5.39+2-correction","permalink":"/ai-dev-kit/docs/changelog-and-release-notes/semver-tag-v0.5.39+2-correction","draft":false,"unlisted":false,"editUrl":"https://github.com/RMS-Ltd/ai-dev-kit/tree/main/docs/../docs/changelog-and-release-notes/semver-tag-v0.5.39+2-correction.md","tags":[],"version":"current","frontMatter":{},"sidebar":"docsSidebar","previous":{"title":"Changelog and Release Notes","permalink":"/ai-dev-kit/docs/changelog-and-release-notes/"},"next":{"title":"Project Management","permalink":"/ai-dev-kit/docs/project-management/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ../docs/changelog-and-release-notes/semver-tag-v0.5.39+2-correction.md


const frontMatter = {};
const contentTitle = 'SemVer Tag Correction: v0.5.39+2';

const assets = {

};



const toc = [{
  "value": "Audit",
  "id": "audit",
  "level": 2
}, {
  "value": "Reason",
  "id": "reason",
  "level": 2
}, {
  "value": "Action Taken",
  "id": "action-taken",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    br: "br",
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
        id: "semver-tag-correction-v05392",
        children: "SemVer Tag Correction: v0.5.39+2"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Date:"
      }), " 2026-02-19", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Purpose:"
      }), " Restore 1:1 mapping between SemVer tags and release commits."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "audit",
      children: "Audit"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Remote tag:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "v0.5.39+2"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Before correction:"
        }), " Remote tag pointed to commit ", (0,jsx_runtime.jsx)(_components.code, {
          children: "168d97c3"
        }), " (internal version ", (0,jsx_runtime.jsx)(_components.code, {
          children: "0.5.1.37+2"
        }), " — E5:S01", ":T37", ", Kanban policy doc-init)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "After correction:"
        }), " Tag points to commit ", (0,jsx_runtime.jsx)(_components.code, {
          children: "4321f107"
        }), " (internal version ", (0,jsx_runtime.jsx)(_components.code, {
          children: "0.5.1.39+2"
        }), " — E5:S01", ":T39", ", Latest-only changelog policy and CMW mode)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "reason",
      children: "Reason"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Under the registry-based mapping, both internal ", (0,jsx_runtime.jsx)(_components.code, {
        children: "0.5.1.37+2"
      }), " and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "0.5.1.39+2"
      }), " convert to SemVer ", (0,jsx_runtime.jsx)(_components.code, {
        children: "0.5.39+2"
      }), " (same Epic 5, Story 1 → PATCH 39; BUILD 2). The SemVer tag may only point to one commit. The canonical release for ", (0,jsx_runtime.jsx)(_components.code, {
        children: "v0.5.39+2"
      }), " is defined as the E5:S01", ":T39", " release (latest-only changelog policy). The tag was updated so that the Git layer satisfies the 1:1 rule: one SemVer tag → one commit (the canonical release for that SemVer)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "action-taken",
      children: "Action Taken"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "git push origin +v0.5.39+2"
        }), " so that ", (0,jsx_runtime.jsx)(_components.code, {
          children: "refs/tags/v0.5.39+2"
        }), " on the remote points to commit ", (0,jsx_runtime.jsx)(_components.code, {
          children: "4321f107"
        }), "."]
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