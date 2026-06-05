"use strict";
(self["webpackChunkportal"] = self["webpackChunkportal"] || []).push([["23921"], {
98994(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_maintenance_logs_uxr_005_spacing_20260601_md_1ea_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-maintenance-logs-uxr-005-spacing-20260601-md-1ea.json
var site_docs_maintenance_logs_uxr_005_spacing_20260601_md_1ea_namespaceObject = JSON.parse('{"id":"maintenance/logs/uxr-005-spacing-20260601","title":"UXR-005 MoSCOW spacing enforcement log","description":"Date: 2026-06-01","source":"@site/../docs/maintenance/logs/uxr-005-spacing-20260601.md","sourceDirName":"maintenance/logs","slug":"/maintenance/logs/uxr-005-spacing-20260601","permalink":"/ai-dev-kit/docs/maintenance/logs/uxr-005-spacing-20260601","draft":false,"unlisted":false,"editUrl":"https://github.com/RMS-Ltd/ai-dev-kit/tree/main/docs/../docs/maintenance/logs/uxr-005-spacing-20260601.md","tags":[],"version":"current","frontMatter":{},"sidebar":"docsSidebar","previous":{"title":"Markdown Maintenance Workflow Log – 2026-03-16","permalink":"/ai-dev-kit/docs/maintenance/logs/mmw/MMW-2026-03-16"},"next":{"title":"Release Checklist Templates","permalink":"/ai-dev-kit/docs/maintenance/release-checklist-templates"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ../docs/maintenance/logs/uxr-005-spacing-20260601.md


const frontMatter = {};
const contentTitle = 'UXR-005 MoSCOW spacing enforcement log';

const assets = {

};



const toc = [{
  "value": "Summary",
  "id": "summary",
  "level": 2
}, {
  "value": "Runbook (RW / UKW)",
  "id": "runbook-rw--ukw",
  "level": 2
}, {
  "value": "Escalation",
  "id": "escalation",
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
    li: "li",
    p: "p",
    pre: "pre",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "uxr-005-moscow-spacing-enforcement-log",
        children: "UXR-005 MoSCOW spacing enforcement log"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Date:"
      }), " 2026-06-01", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Task:"
      }), " E07:S01", ":T09", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Validator:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "validate_kanban_moscow_spacing.py"
      }), " (threshold: 100 chars)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "kboard.md:"
        }), " 71 blank lines inserted (initial + fix passes)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "fbuboard.md:"
        }), " 57 blank lines inserted"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "kanban-board-guide.md:"
        }), " 3 blank lines inserted"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Final validate:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "validate_kanban_moscow_spacing.py --strict"
        }), " → ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "PASS"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "runbook-rw--ukw",
      children: "Runbook (RW / UKW)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "python \"packages/frameworks/workflow-mgt/scripts/validation/validate_kanban_moscow_spacing.py\" --project-root . --strict\npython \"packages/frameworks/workflow-mgt/scripts/validation/validate_kanban_moscow_spacing.py\" --project-root . --fix\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Release Readiness ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Gate 10"
      }), " (non-blocking / warn) reports spacing drift."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "escalation",
      children: "Escalation"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Formatting drift on MoSCOW boards → file or extend ", (0,jsx_runtime.jsxs)(_components.strong, {
        children: ["E07:S01", ":T09"]
      }), "; UXR owns template policy per ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/project-management/kanban/kanban-board-guide",
        children: "kanban-board-guide.md"
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