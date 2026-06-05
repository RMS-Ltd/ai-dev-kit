"use strict";
(self["webpackChunkportal"] = self["webpackChunkportal"] || []).push([["49157"], {
97752(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_implementation_cycles_icw_e_4_s_08_t_07_test_design_md_a0b_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-implementation-cycles-icw-e-4-s-08-t-07-test-design-md-a0b.json
var site_docs_implementation_cycles_icw_e_4_s_08_t_07_test_design_md_a0b_namespaceObject = JSON.parse('{"id":"implementation-cycles/ICW-E4S08T07-test-design","title":"ICW-E4S8T7-Test-Design: FR-011 Multi-Epic Task Splitting","description":"TaskS08:T07","source":"@site/../docs/implementation-cycles/ICW-E4S08T07-test-design.md","sourceDirName":"implementation-cycles","slug":"/implementation-cycles/ICW-E4S08T07-test-design","permalink":"/ai-dev-kit/docs/implementation-cycles/ICW-E4S08T07-test-design","draft":false,"unlisted":false,"editUrl":"https://github.com/RMS-Ltd/ai-dev-kit/tree/main/docs/../docs/implementation-cycles/ICW-E4S08T07-test-design.md","tags":[],"version":"current","frontMatter":{"lifecycle":"evergreen","ttl_days":null,"created_at":"2026-04-09T00:00:00.000Z","expires_at":null,"housekeeping_policy":"keep"},"sidebar":"docsSidebar","previous":{"title":"ICW-E4S8T7-Specification: FR-011 Multi-Epic Task Splitting","permalink":"/ai-dev-kit/docs/implementation-cycles/ICW-E4S08T07-specification"},"next":{"title":"ICW Specification: E4:S11:T07 - Migrate Embedded Tasks to Discrete Task Documents","permalink":"/ai-dev-kit/docs/implementation-cycles/ICW-E4S11T07-specification"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ../docs/implementation-cycles/ICW-E4S08T07-test-design.md


const frontMatter = {
	lifecycle: 'evergreen',
	ttl_days: null,
	created_at: new Date('2026-04-09T00:00:00.000Z'),
	expires_at: null,
	housekeeping_policy: 'keep'
};
const contentTitle = 'ICW-E4S8T7-Test-Design: FR-011 Multi-Epic Task Splitting';

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
  "value": "Failure Modes",
  "id": "failure-modes",
  "level": 2
}, {
  "value": "Red/Green Verification Sequence",
  "id": "redgreen-verification-sequence",
  "level": 2
}, {
  "value": "Regression Guard Checklist",
  "id": "regression-guard-checklist",
  "level": 2
}, {
  "value": "Evidence for Handoff",
  "id": "evidence-for-handoff",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    br: "br",
    h1: "h1",
    h2: "h2",
    header: "header",
    hr: "hr",
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
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "icw-e4s8t7-test-design-fr-011-multi-epic-task-splitting",
        children: "ICW-E4S8T7-Test-Design: FR-011 Multi-Epic Task Splitting"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Task:"
      }), " E4:S08", ":T07", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Related FR:"
      }), " FR-011", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Host Task:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-04/story-08-intelligent-epic-matching-canonical-adoption/T07-task-splitting-across-multiple-canonical-epics-fr-011",
        children: "T07-task-splitting-across-multiple-canonical-epics-fr-011.md"
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Created:"
      }), " 2026-04-09"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "test-strategy",
      children: "Test Strategy"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Validate split-candidate detection, task-level assignment, explainability output, ID remap determinism, and reference rewrite integrity for FR-011."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "coverage-matrix",
      children: "Coverage Matrix"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Multi-epic candidate detection (FR-1 / AC-1)"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Input: source epic with two or more partial canonical matches."
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Expectation: split-candidate classification is emitted."
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Task-content assignment analysis (FR-2 / AC-2)"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Input: mixed task corpus with versioning and workflow tasks."
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Expectation: tasks route to canonical epic targets aligned to content signals."
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Split execution behavior (FR-3 / AC-3)"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Input: eligible split-candidate epic with N tasks."
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Expectation: all tasks assigned, no task omitted or multiply assigned."
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Split-plan explainability output (FR-4 / AC-4)"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Input: generated split plan."
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Expectation: per-task rationale, confidence/tie-break metadata, and mapping table."
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Task ID remap correctness (FR-5 / AC-5)"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Input: split output + target story/task spaces."
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Expectation: IDs remapped deterministically and collision-safe."
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Reference rewrite integrity (FR-6 / AC-6)"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Input: docs containing pre-split IDs."
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Expectation: structured references updated; unresolved ambiguous references reported."
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "failure-modes",
      children: "Failure Modes"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Single-best-match fallback still used despite multi-match eligibility."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Non-deterministic assignment when scores are tied."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Rationale omitted or inconsistent with assignment decisions."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "ID collision or unstable numbering between runs."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Partial reference updates leaving stale IDs in linked docs."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "redgreen-verification-sequence",
      children: "Red/Green Verification Sequence"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Start with failing assertions for FR-1..FR-6 behaviors."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement detection and assignment logic until behavioral tests pass."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement explainability schema checks."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement deterministic remap and replay-idempotence checks."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement reference rewrite checks and unresolved-report checks."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Re-run full regression set on mixed synthetic and realistic fixtures."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "regression-guard-checklist",
      children: "Regression Guard Checklist"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Deterministic replay test: identical input produces identical split mapping."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Tie-break policy test: explicit deterministic order for equal-confidence tasks."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Orphan guard test: no task dropped from split outputs."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Reference guard test: stale IDs absent from structured targets post-rewrite."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Explainability guard test: each assignment has rationale payload."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "evidence-for-handoff",
      children: "Evidence for Handoff"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Test case list mapped to FR-011 FR/AC identifiers."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Fixture set definitions for mixed-responsibility epic scenarios."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Pass/fail checklist for deterministic and integrity guards."
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