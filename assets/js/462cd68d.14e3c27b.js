"use strict";
(self["webpackChunkportal"] = self["webpackChunkportal"] || []).push([["815"], {
68891(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_implementation_cycles_icw_e_4_s_19_t_05_test_design_md_462_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-implementation-cycles-icw-e-4-s-19-t-05-test-design-md-462.json
var site_docs_implementation_cycles_icw_e_4_s_19_t_05_test_design_md_462_namespaceObject = JSON.parse('{"id":"implementation-cycles/ICW-E4S19T05-test-design","title":"ICW Test Design — E4:S19:T05 kanban and FR/BR/UXR filename normalization","description":"Test Objectives","source":"@site/../docs/implementation-cycles/ICW-E4S19T05-test-design.md","sourceDirName":"implementation-cycles","slug":"/implementation-cycles/ICW-E4S19T05-test-design","permalink":"/ai-dev-kit/docs/implementation-cycles/ICW-E4S19T05-test-design","draft":false,"unlisted":false,"editUrl":"https://github.com/RMS-Ltd/ai-dev-kit/tree/main/docs/../docs/implementation-cycles/ICW-E4S19T05-test-design.md","tags":[],"version":"current","frontMatter":{"lifecycle":"draft","ttl_days":null,"created_at":"2026-04-25T00:00:00.000Z","expires_at":null,"housekeeping_policy":"keep"},"sidebar":"docsSidebar","previous":{"title":"ICW Specification — E4:S19:T05 kanban and FR/BR/UXR filename normalization","permalink":"/ai-dev-kit/docs/implementation-cycles/ICW-E4S19T05-specification"},"next":{"title":"ICW Implementation Plan: Task Template Cross-Wiring Section","permalink":"/ai-dev-kit/docs/implementation-cycles/ICW-E5S01T35-implementation-plan"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ../docs/implementation-cycles/ICW-E4S19T05-test-design.md


const frontMatter = {
	lifecycle: 'draft',
	ttl_days: null,
	created_at: new Date('2026-04-25T00:00:00.000Z'),
	expires_at: null,
	housekeeping_policy: 'keep'
};
const contentTitle = 'ICW Test Design — E4:S19 kanban and FR/BR/UXR filename normalization';

const assets = {

};



const toc = [{
  "value": "Test Objectives",
  "id": "test-objectives",
  "level": 2
}, {
  "value": "Test Matrix",
  "id": "test-matrix",
  "level": 2
}, {
  "value": "Evidence Capture",
  "id": "evidence-capture",
  "level": 2
}, {
  "value": "References",
  "id": "references",
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
    strong: "strong",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsxs)(_components.h1, {
        id: "icw-test-design--e4s19-kanban-and-frbruxr-filename-normalization",
        children: ["ICW Test Design — E4:S19", ":T05", " kanban and FR/BR/UXR filename normalization"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "test-objectives",
      children: "Test Objectives"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Verify mapping completeness, link integrity, and workflow compatibility after filename normalization."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "test-matrix",
      children: "Test Matrix"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Policy/mapping completeness"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Scenario: review migration manifest against in-scope inventory."
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Expected: each targeted file is mapped once; no ambiguous collisions."
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Internal link integrity"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Scenario: scan markdown references before/after migration."
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Expected: no dangling links to renamed files."
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Board/story/task/UXR cross-wiring"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Scenario: inspect primary governance docs (", (0,jsx_runtime.jsx)(_components.code, {
              children: "fbuboard"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "fr-br-uxr-structure"
            }), ", UXR/task/story docs)."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Expected: references are canonical and point to rehoused ", (0,jsx_runtime.jsx)(_components.code, {
              children: "E4:S19:T05"
            }), "."]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Workflow path compatibility"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Scenario: run kanban update dry-run/tests."
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Expected: scripts resolve canonical paths and complete successfully."
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Migration safety messaging"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Scenario: inspect migration docs for legacy reference handling."
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Expected: explicit guidance for adopters with legacy names."
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "evidence-capture",
      children: "Evidence Capture"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Migration mapping table committed in docs."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "rg"
        }), " checks for stale file references."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Dry-run and test outputs for workflow scripts."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "references",
      children: "References"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/implementation-cycles/ICW-E4S19T05-specification",
          children: "ICW Specification"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsxs)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-04/story-19-fr-br-uxr-abstract-governance-and-intake/T05-kanban-and-fr-br-uxr-filename-normalization-uxr008",
          children: ["Task E4:S19", ":T05"]
        })
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