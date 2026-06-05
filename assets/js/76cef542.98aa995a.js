"use strict";
(self["webpackChunkportal"] = self["webpackChunkportal"] || []).push([["17678"], {
54137(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_project_management_kanban_fr_br_br_089_rw_install_mode_c_missing_main_changelog_scaffold_md_76c_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-project-management-kanban-fr-br-br-089-rw-install-mode-c-missing-main-changelog-scaffold-md-76c.json
var site_docs_project_management_kanban_fr_br_br_089_rw_install_mode_c_missing_main_changelog_scaffold_md_76c_namespaceObject = JSON.parse('{"id":"project-management/kanban/fr-br/BR-089-rw-install-mode-c-missing-main-changelog-scaffold","title":"Bug Report BR-089: RW Install Mode C — Missing main_changelog Scaffold","description":"Bug ID: BR-089","source":"@site/../docs/project-management/kanban/fr-br/BR-089-rw-install-mode-c-missing-main-changelog-scaffold.md","sourceDirName":"project-management/kanban/fr-br","slug":"/project-management/kanban/fr-br/BR-089-rw-install-mode-c-missing-main-changelog-scaffold","permalink":"/ai-dev-kit/docs/project-management/kanban/fr-br/BR-089-rw-install-mode-c-missing-main-changelog-scaffold","draft":false,"unlisted":false,"editUrl":"https://github.com/RMS-Ltd/ai-dev-kit/tree/main/docs/../docs/project-management/kanban/fr-br/BR-089-rw-install-mode-c-missing-main-changelog-scaffold.md","tags":[],"version":"current","frontMatter":{"lifecycle":"evergreen","ttl_days":null,"created_at":"2026-06-04T21:45:00.000Z","expires_at":null,"housekeeping_policy":"keep"},"sidebar":"docsSidebar","previous":{"title":"Bug Report BR-088: RW Mode C Does Not Scaffold version_file Path (No src/ Directory)","permalink":"/ai-dev-kit/docs/project-management/kanban/fr-br/BR-088-rw-install-mode-c-missing-version-file-scaffold"},"next":{"title":"Bug Report BR-090: Docusaurus 3.10 build fails — missing @docusaurus/faster and package.json / lockfile drift","permalink":"/ai-dev-kit/docs/project-management/kanban/fr-br/BR-090-docusaurus-faster-missing-dependabot-310-lockfile-drift"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ../docs/project-management/kanban/fr-br/BR-089-rw-install-mode-c-missing-main-changelog-scaffold.md


const frontMatter = {
	lifecycle: 'evergreen',
	ttl_days: null,
	created_at: new Date('2026-06-04T21:45:00.000Z'),
	expires_at: null,
	housekeeping_policy: 'keep'
};
const contentTitle = 'Bug Report BR-089: RW Install Mode C — Missing main_changelog Scaffold';

const assets = {

};



const toc = [{
  "value": "Summary",
  "id": "summary",
  "level": 2
}, {
  "value": "Fix",
  "id": "fix",
  "level": 2
}, {
  "value": "Adopter verification",
  "id": "adopter-verification",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    br: "br",
    code: "code",
    h1: "h1",
    h2: "h2",
    header: "header",
    hr: "hr",
    p: "p",
    strong: "strong",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsxs)(_components.h1, {
        id: "bug-report-br-089-rw-install-mode-c--missing-main_changelog-scaffold",
        children: ["Bug Report BR-089: RW Install Mode C — Missing ", (0,jsx_runtime.jsx)(_components.code, {
          children: "main_changelog"
        }), " Scaffold"]
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bug ID:"
      }), " BR-089", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Priority:"
      }), " MEDIUM", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Severity:"
      }), " MEDIUM (", (0,jsx_runtime.jsx)(_components.code, {
        children: "rw-config"
      }), " references ", (0,jsx_runtime.jsx)(_components.code, {
        children: "CHANGELOG.md"
      }), " but file absent until first RW)", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Status:"
      }), " RESOLVED (fix ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "v0.9.1.3+2"
      }), " / ", (0,jsx_runtime.jsx)(_components.code, {
        children: "v0.4.885+2"
      }), "; adopter verified ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "2026-06-04"
      }), ")", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "GitHub Issue:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://github.com/RMS-Ltd/ai-dev-kit/issues/19",
        children: "#19"
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Created:"
      }), " 2026-06-04", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Source:"
      }), " ExpensesTracker setup-spine T03; split from ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://github.com/RMS-Ltd/ai-dev-kit/issues/17",
        children: "#17"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "install_release_workflow.py --mode c"
      }), " wrote ", (0,jsx_runtime.jsx)(_components.code, {
        children: "main_changelog: CHANGELOG.md"
      }), " to ", (0,jsx_runtime.jsx)(_components.code, {
        children: "rw-config.yaml"
      }), " but did not create the file on greenfield repos."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "fix",
      children: "Fix"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "ensure_main_changelog_scaffold()"
      }), " in ", (0,jsx_runtime.jsx)(_components.code, {
        children: "install_release_workflow.py"
      }), " (same release as #19 close). Sign-off contract entry ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "BR-089"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "adopter-verification",
      children: "Adopter verification"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["ExpensesTracker @ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "v0.4.885+2"
        })
      }), ": re-run ", (0,jsx_runtime.jsx)(_components.code, {
        children: "--mode c --config rw-config.yaml"
      }), " → ", (0,jsx_runtime.jsx)(_components.code, {
        children: "CHANGELOG.md"
      }), " created; ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "BR-089 READY"
      }), " in signoff report."]
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