"use strict";
(self["webpackChunkportal"] = self["webpackChunkportal"] || []).push([["31725"], {
26246(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_implementation_cycles_icw_e_2_s_15_t_05_test_design_md_75d_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-implementation-cycles-icw-e-2-s-15-t-05-test-design-md-75d.json
var site_docs_implementation_cycles_icw_e_2_s_15_t_05_test_design_md_75d_namespaceObject = JSON.parse('{"id":"implementation-cycles/ICW-E2S15T05-test-design","title":"ICW E2:S15:T05 Test Design","description":"Test Strategy","source":"@site/../docs/implementation-cycles/ICW-E2S15T05-test-design.md","sourceDirName":"implementation-cycles","slug":"/implementation-cycles/ICW-E2S15T05-test-design","permalink":"/ai-dev-kit/docs/implementation-cycles/ICW-E2S15T05-test-design","draft":false,"unlisted":false,"editUrl":"https://github.com/RMS-Ltd/ai-dev-kit/tree/main/docs/../docs/implementation-cycles/ICW-E2S15T05-test-design.md","tags":[],"version":"current","frontMatter":{"lifecycle":"evergreen","ttl_days":null,"created_at":"2026-04-22T00:00:00.000Z","expires_at":null,"housekeeping_policy":"keep"},"sidebar":"docsSidebar","previous":{"title":"ICW E2:S15:T05 Specification","permalink":"/ai-dev-kit/docs/implementation-cycles/ICW-E2S15T05-specification"},"next":{"title":"ICW-E4S8T7-Implementation-Plan: FR-011 Multi-Epic Task Splitting","permalink":"/ai-dev-kit/docs/implementation-cycles/ICW-E4S08T07-implementation-plan"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ../docs/implementation-cycles/ICW-E2S15T05-test-design.md


const frontMatter = {
	lifecycle: 'evergreen',
	ttl_days: null,
	created_at: new Date('2026-04-22T00:00:00.000Z'),
	expires_at: null,
	housekeeping_policy: 'keep'
};
const contentTitle = 'ICW E2:S15 Test Design';

const assets = {

};



const toc = [{
  "value": "Test Strategy",
  "id": "test-strategy",
  "level": 2
}, {
  "value": "Coverage Matrix",
  "id": "coverage-matrix",
  "level": 2
}, {
  "value": "Test Additions / Updates",
  "id": "test-additions--updates",
  "level": 2
}, {
  "value": "Verification Commands",
  "id": "verification-commands",
  "level": 2
}, {
  "value": "Pass Criteria",
  "id": "pass-criteria",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
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
        id: "icw-e2s15-test-design",
        children: ["ICW E2:S15", ":T05", " Test Design"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "test-strategy",
      children: "Test Strategy"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Use fixture-first tests around canonical MoSCOW row tails, then run both RW and UKW transform entrypoints over the same fixtures to prove parity. Preserve forensic divergence behavior where required, while proving duplication and synthetic-footer regressions are blocked."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "coverage-matrix",
      children: "Coverage Matrix"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Pipeline Parity (AC1, AC5):"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Same fixture through RW path and UKW path yields identical canonical row output."
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Include cases with pre-existing duplicated footer/task/FBU segments."
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "fbuboard Ordering Contract (AC2):"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "fbuboard"
            }), " rows always render ", (0,jsx_runtime.jsx)(_components.code, {
              children: "FBU -> Task -> IPP -> Last modified"
            }), "."]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Contract holds across repeated runs and after corrupted-input repair."
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Timestamp Safety (AC3):"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Existing valid row timestamp does not cause synthetic second ", (0,jsx_runtime.jsx)(_components.code, {
              children: "Last modified"
            }), " append."]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Non-terminal legacy timestamp is normalized into canonical terminal representation."
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Idempotency and Deduplication (AC4):"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Running pipeline repeatedly does not add new task/FBU/IPP/footer segments."
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Byte-identical output after second run for stable fixtures."
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Divergence Policy (AC5):"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Footer divergence is surfaced with diagnostics."
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Divergence path remains non-destructive and forensic-safe."
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Traceability Closure Readiness (AC6):"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Tests map directly to FR-090 functional/non-functional requirements and BR-069 residual ACs."
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "test-additions--updates",
      children: "Test Additions / Updates"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Extend or refactor tests in:", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "packages/frameworks/workflow-mgt/scripts/test_update_kanban_docs.py"
            })
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Preserve and evolve documentary regressions:", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "test_4_13_br069_pipeline_order_divergence_and_non_terminal_footer_append"
            })
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Add explicit parity fixtures for RW/UKW shared pipeline assertions."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Add fixture set covering corrupted rows with multiplied task/FBU/IPP/footer segments."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "verification-commands",
      children: "Verification Commands"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "pytest \"packages/frameworks/workflow-mgt/scripts/test_update_kanban_docs.py\""
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "python \"packages/frameworks/workflow-mgt/scripts/update_kanban_docs.py\" --mode full --dry-run"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "python \"packages/frameworks/workflow-mgt/scripts/update_kanban_docs.py\" --mode kanban_init --dry-run"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "pass-criteria",
      children: "Pass Criteria"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "All new/updated tests pass."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "No parity drift between RW/UKW transform outputs on shared fixtures."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "No synthetic second footer or segment multiplication regressions remain in covered paths."
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