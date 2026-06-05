"use strict";
(self["webpackChunkportal"] = self["webpackChunkportal"] || []).push([["64495"], {
92790(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_implementation_cycles_icw_e_7_s_06_t_18_test_design_md_a8b_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-implementation-cycles-icw-e-7-s-06-t-18-test-design-md-a8b.json
var site_docs_implementation_cycles_icw_e_7_s_06_t_18_test_design_md_a8b_namespaceObject = JSON.parse('{"id":"implementation-cycles/ICW-E7S06T18-test-design","title":"ICW E7:S06:T18 — Test design (UXR-007)","description":"Host taskS06:T18","source":"@site/../docs/implementation-cycles/ICW-E7S06T18-test-design.md","sourceDirName":"implementation-cycles","slug":"/implementation-cycles/ICW-E7S06T18-test-design","permalink":"/ai-dev-kit/docs/implementation-cycles/ICW-E7S06T18-test-design","draft":false,"unlisted":false,"editUrl":"https://github.com/RMS-Ltd/ai-dev-kit/tree/main/docs/../docs/implementation-cycles/ICW-E7S06T18-test-design.md","tags":[],"version":"current","frontMatter":{"lifecycle":"evergreen","ttl_days":null,"created_at":"2026-04-10T00:00:00.000Z","expires_at":null,"housekeeping_policy":"keep"},"sidebar":"docsSidebar","previous":{"title":"ICW E7:S06:T18 — Specification (UXR-007)","permalink":"/ai-dev-kit/docs/implementation-cycles/ICW-E7S06T18-specification"},"next":{"title":"ICW Specification: E8:S04:T01 - Tooling & Automation expectations baseline","permalink":"/ai-dev-kit/docs/implementation-cycles/ICW-E8S04T01-specification"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ../docs/implementation-cycles/ICW-E7S06T18-test-design.md


const frontMatter = {
	lifecycle: 'evergreen',
	ttl_days: null,
	created_at: new Date('2026-04-10T00:00:00.000Z'),
	expires_at: null,
	housekeeping_policy: 'keep'
};
const contentTitle = 'ICW E7:S06 — Test design (UXR-007)';

const assets = {

};



const toc = [{
  "value": "Test cases (T1–T9)",
  "id": "test-cases-t1t9",
  "level": 2
}, {
  "value": "Likely test touchpoints",
  "id": "likely-test-touchpoints",
  "level": 2
}, {
  "value": "Implemented automated coverage (as-delivered)",
  "id": "implemented-automated-coverage-as-delivered",
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
    li: "li",
    p: "p",
    strong: "strong",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsxs)(_components.h1, {
        id: "icw-e7s06--test-design-uxr-007",
        children: ["ICW E7:S06", ":T18", " — Test design (UXR-007)"]
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Host task:"
      }), " E7:S06", ":T18", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Specification:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/implementation-cycles/ICW-E7S06T18-implementation-plan",
        children: "ICW-E7S6T18-specification.md"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "test-cases-t1t9",
      children: "Test cases (T1–T9)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "T1 — Epic placeholder enforcement:"
        }), " Reject epic pattern when ", (0,jsx_runtime.jsx)(_components.code, {
          children: "\\{epic\\}"
        }), " token is absent; verify remediation text."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "T2 — Story placeholder enforcement:"
        }), " Reject story pattern missing ", (0,jsx_runtime.jsx)(_components.code, {
          children: "\\{epic\\}"
        }), " or ", (0,jsx_runtime.jsx)(_components.code, {
          children: "\\{story\\}"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "T3 — Relative path guidance clarity:"
        }), " Prompt/help text explicitly references ", (0,jsx_runtime.jsx)(_components.code, {
          children: "kanban_root"
        }), " with examples."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "T4 — Match preview positive path:"
        }), " Valid pattern shows non-zero match count and first N sample paths."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "T5 — Match preview zero path:"
        }), " Zero-match result shows actionable alternatives and no silent acceptance."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "T6 — Cross-tool root propagation:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "install_kanban_framework.py"
        }), " validates the same root captured by RW config in chained usage."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "T7 — Existing rules reconciliation path:"
        }), " Existing RW trigger in ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".cursorrules"
        }), " produces clear reconciliation guidance and optional diff hook."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "T8 — Canonical final state banner:"
        }), " Chained run ending with cancellation reports canonical final status (", (0,jsx_runtime.jsx)(_components.code, {
          children: "CANCELLED"
        }), ") without conflicting success banner."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "T9 — Regression compatibility:"
        }), " Modes without Kanban integration behave unchanged."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "likely-test-touchpoints",
      children: "Likely test touchpoints"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/packages/frameworks/workflow-mgt/scripts/install_release_workflow.py",
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "packages/frameworks/workflow-mgt/scripts/install_release_workflow.py"
          })
        }), " — interactive config, ", (0,jsx_runtime.jsx)(_components.code, {
          children: "validate_required_placeholders"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "preview_pattern_matches"
        }), ", final status messaging."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/packages/frameworks/kanban/scripts/install_kanban_framework.py",
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "packages/frameworks/kanban/scripts/install_kanban_framework.py"
          })
        }), " — root propagation and final status output."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/packages/frameworks/kanban/scripts/validate_installation.py",
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "packages/frameworks/kanban/scripts/validate_installation.py"
          })
        }), " — validation helpers where referenced."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Automated tests: ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/tests/test_install_release_workflow_patterns.py",
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "tests/test_install_release_workflow_patterns.py"
          })
        }), " — placeholder detection and preview glob matching."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "implemented-automated-coverage-as-delivered",
      children: "Implemented automated coverage (as-delivered)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Case"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Coverage"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T1 / placeholder gaps"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "test_validate_required_placeholders_detects_missing_tokens"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T4 / preview positive"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "test_preview_pattern_matches_finds_files_under_kanban_root"
            })
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Remaining cases (T2–T3, T5–T9) rely primarily on interactive CLI behaviour and manual/UAT verification unless extended pytest modules are added later."
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