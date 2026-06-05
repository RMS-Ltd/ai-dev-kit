"use strict";
(self["webpackChunkportal"] = self["webpackChunkportal"] || []).push([["71906"], {
48362(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_project_management_kanban_fr_br_br_081_kanban_install_datetime_utcnow_deprecated_md_aad_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-project-management-kanban-fr-br-br-081-kanban-install-datetime-utcnow-deprecated-md-aad.json
var site_docs_project_management_kanban_fr_br_br_081_kanban_install_datetime_utcnow_deprecated_md_aad_namespaceObject = JSON.parse('{"id":"project-management/kanban/fr-br/BR-081-kanban-install-datetime-utcnow-deprecated","title":"Bug Report BR-081: install_kanban_framework.py Uses Deprecated datetime.utcnow()","description":"Bug ID: BR-081","source":"@site/../docs/project-management/kanban/fr-br/BR-081-kanban-install-datetime-utcnow-deprecated.md","sourceDirName":"project-management/kanban/fr-br","slug":"/project-management/kanban/fr-br/BR-081-kanban-install-datetime-utcnow-deprecated","permalink":"/ai-dev-kit/docs/project-management/kanban/fr-br/BR-081-kanban-install-datetime-utcnow-deprecated","draft":false,"unlisted":false,"editUrl":"https://github.com/RMS-Ltd/ai-dev-kit/tree/main/docs/../docs/project-management/kanban/fr-br/BR-081-kanban-install-datetime-utcnow-deprecated.md","tags":[],"version":"current","frontMatter":{"lifecycle":"evergreen","ttl_days":null,"created_at":"2026-06-03T17:40:00.000Z","expires_at":null,"housekeeping_policy":"keep"},"sidebar":"docsSidebar","previous":{"title":"Bug Report BR-080: Kanban Fresh Mode Pre-Install Validation Fails Without --force","permalink":"/ai-dev-kit/docs/project-management/kanban/fr-br/BR-080-kanban-fresh-mode-validation-requires-force-on-empty-repo"},"next":{"title":"Bug Report BR-082: RW Install Fails Without Venv PyYAML — No Preflight Hint","permalink":"/ai-dev-kit/docs/project-management/kanban/fr-br/BR-082-rw-install-missing-pyyaml-preflight"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ../docs/project-management/kanban/fr-br/BR-081-kanban-install-datetime-utcnow-deprecated.md


const frontMatter = {
	lifecycle: 'evergreen',
	ttl_days: null,
	created_at: new Date('2026-06-03T17:40:00.000Z'),
	expires_at: null,
	housekeeping_policy: 'keep'
};
const contentTitle = 'Bug Report BR-081: install_kanban_framework.py Uses Deprecated datetime.utcnow()';

const assets = {

};



const toc = [{
  "value": "Summary",
  "id": "summary",
  "level": 2
}, {
  "value": "Expected",
  "id": "expected",
  "level": 2
}, {
  "value": "Acceptance Criteria",
  "id": "acceptance-criteria",
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
    input: "input",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsxs)(_components.h1, {
        id: "bug-report-br-081-install_kanban_frameworkpy-uses-deprecated-datetimeutcnow",
        children: ["Bug Report BR-081: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "install_kanban_framework.py"
        }), " Uses Deprecated ", (0,jsx_runtime.jsx)(_components.code, {
          children: "datetime.utcnow()"
        })]
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bug ID:"
      }), " BR-081", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Priority:"
      }), " LOW", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Severity:"
      }), " LOW (DeprecationWarning noise; future Python risk)", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Status:"
      }), " RESOLVED (verified ExpensesTracker replay ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "2026-06-04"
      }), " @ ", (0,jsx_runtime.jsx)(_components.code, {
        children: "v0.4.885+2"
      }), ")", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "GitHub Issue:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://github.com/RMS-Ltd/ai-dev-kit/issues/13",
        children: "#13"
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Implementing Task:"
      }), " ", (0,jsx_runtime.jsxs)(_components.a, {
        href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-06/story-09-ai-dev-kit-installation-and-adopter-integration/T10-kanban-install-datetime-utcnow-br081",
        children: ["E06:S09", ":T10"]
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Fix version:"
      }), " v0.6.9.10+2 (RW E06:S09", ":T10", ")", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Created:"
      }), " 2026-06-03", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Source:"
      }), " Book dry-run; Python 3.14.5; ADK ", (0,jsx_runtime.jsx)(_components.code, {
        children: "dev"
      }), " @ ", (0,jsx_runtime.jsx)(_components.code, {
        children: "84efa7b"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Kanban installer emits ", (0,jsx_runtime.jsx)(_components.code, {
        children: "DeprecationWarning"
      }), " for ", (0,jsx_runtime.jsx)(_components.code, {
        children: "datetime.datetime.utcnow()"
      }), " (~lines 93, 185)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "expected",
      children: "Expected"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Timezone-aware UTC, e.g. ", (0,jsx_runtime.jsx)(_components.code, {
        children: "datetime.now(datetime.UTC)"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "acceptance-criteria",
      children: "Acceptance Criteria"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      className: "contains-task-list",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "No ", (0,jsx_runtime.jsx)(_components.code, {
          children: "utcnow()"
        }), " in ", (0,jsx_runtime.jsx)(_components.code, {
          children: "install_kanban_framework.py"
        }), " on supported Python versions."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "Regression test (", (0,jsx_runtime.jsx)(_components.code, {
          children: "tests/kanban/test_install_kanban_logging.py::TestInstallNoUtcnowDeprecation"
        }), ")."]
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