"use strict";
(self["webpackChunkportal"] = self["webpackChunkportal"] || []).push([["88147"], {
82371(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_maintenance_br_087_framework_release_republish_checklist_md_b9e_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-maintenance-br-087-framework-release-republish-checklist-md-b9e.json
var site_docs_maintenance_br_087_framework_release_republish_checklist_md_b9e_namespaceObject = JSON.parse('{"id":"maintenance/br087-framework-release-republish-checklist","title":"BR-087 — Framework release republish checklist (E06:S09:T18)","description":"After maintainer rename to slug directories, republish GitHub release assets so download installs receive \\\\{slug\\\\}/ archive roots.","source":"@site/../docs/maintenance/br087-framework-release-republish-checklist.md","sourceDirName":"maintenance","slug":"/maintenance/br087-framework-release-republish-checklist","permalink":"/ai-dev-kit/docs/maintenance/br087-framework-release-republish-checklist","draft":false,"unlisted":false,"editUrl":"https://github.com/RMS-Ltd/ai-dev-kit/tree/main/docs/../docs/maintenance/br087-framework-release-republish-checklist.md","tags":[],"version":"current","frontMatter":{"lifecycle":"evergreen","created_at":"2026-06-05T14:00:00.000Z","housekeeping_policy":"keep"},"sidebar":"docsSidebar","previous":{"title":"Book repository documentation scope","permalink":"/ai-dev-kit/docs/maintenance/book-repo-docs-scope"},"next":{"title":"Changelog directory consolidation manifest (UXR-018 / E05:S09:T12)","permalink":"/ai-dev-kit/docs/maintenance/changelog-directory-consolidation-manifest"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ../docs/maintenance/br087-framework-release-republish-checklist.md


const frontMatter = {
	lifecycle: 'evergreen',
	created_at: new Date('2026-06-05T14:00:00.000Z'),
	housekeeping_policy: 'keep'
};
const contentTitle = 'BR-087 — Framework release republish checklist (E06:S09)';

const assets = {

};



const toc = [{
  "value": "Build (local)",
  "id": "build-local",
  "level": 2
}, {
  "value": "Verify archive root (required)",
  "id": "verify-archive-root-required",
  "level": 2
}, {
  "value": "Upload (maintainer)",
  "id": "upload-maintainer",
  "level": 2
}, {
  "value": "Adopter verification",
  "id": "adopter-verification",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    h2: "h2",
    header: "header",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsxs)(_components.h1, {
        id: "br-087--framework-release-republish-checklist-e06s09",
        children: ["BR-087 — Framework release republish checklist (E06:S09", ":T18", ")"]
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["After maintainer rename to slug directories, republish GitHub release assets so download installs receive ", (0,jsx_runtime.jsx)(_components.code, {
        children: "\\{slug\\}/"
      }), " archive roots."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "build-local",
      children: "Build (local)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "cd packages/frameworks\npython3 build_packages.py\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Output: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "packages/dist/packages/*.tar.gz"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "verify-archive-root-required",
      children: "Verify archive root (required)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "tar -tzf packages/dist/packages/workflow-mgt-*.tar.gz | head -5\n# Expect: workflow-mgt/README.md (not workflow mgt/...)\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Repeat for ", (0,jsx_runtime.jsx)(_components.code, {
        children: "numbering-versioning-*.tar.gz"
      }), " if published."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "upload-maintainer",
      children: "Upload (maintainer)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Open GitHub Releases for ", (0,jsx_runtime.jsx)(_components.code, {
          children: "RMS-Ltd/ai-dev-kit"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Attach rebuilt ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".tar.gz"
        }), " + ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".sha256"
        }), " for affected frameworks."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Note in release body: BR-087 slug archive roots (E06:S09", ":T18", ")."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "adopter-verification",
      children: "Adopter verification"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Submodule checkout of ", (0,jsx_runtime.jsx)(_components.code, {
          children: "main"
        }), " → ", (0,jsx_runtime.jsx)(_components.code, {
          children: "ls packages/frameworks/"
        }), " shows slug names only."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Expenses Tracker replay documented in ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/fr-br/BR-087-framework-install-directory-slug-mismatch",
          children: "BR-087"
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