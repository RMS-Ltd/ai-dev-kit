"use strict";
(self["webpackChunkportal"] = self["webpackChunkportal"] || []).push([["19467"], {
8803(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_implementation_cycles_ipp_e_07_s_07_t_02_ci_pytest_gate_for_workflow_scripts_md_762_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-implementation-cycles-ipp-e-07-s-07-t-02-ci-pytest-gate-for-workflow-scripts-md-762.json
var site_docs_implementation_cycles_ipp_e_07_s_07_t_02_ci_pytest_gate_for_workflow_scripts_md_762_namespaceObject = JSON.parse('{"id":"implementation-cycles/IPP-E07S07T02-ci-pytest-gate-for-workflow-scripts","title":"IPP — E07:S07:T02: CI pytest gate for workflow scripts (H1)","description":"TaskS07:T02","source":"@site/../docs/implementation-cycles/IPP-E07S07T02-ci-pytest-gate-for-workflow-scripts.md","sourceDirName":"implementation-cycles","slug":"/implementation-cycles/IPP-E07S07T02-ci-pytest-gate-for-workflow-scripts","permalink":"/ai-dev-kit/docs/implementation-cycles/IPP-E07S07T02-ci-pytest-gate-for-workflow-scripts","draft":false,"unlisted":false,"editUrl":"https://github.com/RMS-Ltd/ai-dev-kit/tree/main/docs/../docs/implementation-cycles/IPP-E07S07T02-ci-pytest-gate-for-workflow-scripts.md","tags":[],"version":"current","frontMatter":{"lifecycle":"timeboxed","ttl_days":90,"created_at":"2026-06-03T21:40:00.000Z","expires_at":null,"housekeeping_policy":"archive"},"sidebar":"docsSidebar","previous":{"title":"E07:S07:T01 — Planning: Comprehensive Workflow Machinery Code Review (IPW)","permalink":"/ai-dev-kit/docs/implementation-cycles/IPP-E07S07T01-workflow-machinery-code-review"},"next":{"title":"E07:S07:T03 — Planning: Workflow validator slug path resolution (BR-091) (IPW)","permalink":"/ai-dev-kit/docs/implementation-cycles/IPP-E07S07T03-workflow-validator-slug-path-resolution-br091"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ../docs/implementation-cycles/IPP-E07S07T02-ci-pytest-gate-for-workflow-scripts.md


const frontMatter = {
	lifecycle: 'timeboxed',
	ttl_days: 90,
	created_at: new Date('2026-06-03T21:40:00.000Z'),
	expires_at: null,
	housekeeping_policy: 'archive'
};
const contentTitle = 'IPP — E07:S07:T02: CI pytest gate for workflow scripts (H1)';

const assets = {

};



const toc = [{
  "value": "1. Problem",
  "id": "1-problem",
  "level": 2
}, {
  "value": "2. Objectives",
  "id": "2-objectives",
  "level": 2
}, {
  "value": "3. Specification",
  "id": "3-specification",
  "level": 2
}, {
  "value": "4. Test design",
  "id": "4-test-design",
  "level": 2
}, {
  "value": "5. Implementation plan",
  "id": "5-implementation-plan",
  "level": 2
}, {
  "value": "6. Documentation deliverables",
  "id": "6-documentation-deliverables",
  "level": 2
}, {
  "value": "7. Verification checklist",
  "id": "7-verification-checklist",
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
    ol: "ol",
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
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "ipp--e07s07t02-ci-pytest-gate-for-workflow-scripts-h1",
        children: "IPP — E07:S07:T02: CI pytest gate for workflow scripts (H1)"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Task:"
      }), " E07:S07", ":T02", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Host:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-07/story-07-code-reviews/T02-ci-pytest-gate-for-workflow-scripts",
        children: "T02-ci-pytest-gate-for-workflow-scripts.md"
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Source finding:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-07/story-07-code-reviews/T01-workflow-machinery-code-review-report",
        children: "T01 report H1"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1-problem",
      children: "1. Problem"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Workflow Management has ~36 co-located pytest modules but CI only runs ", (0,jsx_runtime.jsx)(_components.code, {
        children: "build_all_packages.sh"
      }), " (", (0,jsx_runtime.jsx)(_components.code, {
        children: "framework-release.yml"
      }), "). Regressions in validators/scripts can ship undetected."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "2-objectives",
      children: "2. Objectives"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Blocking GitHub Actions gate for workflow mgt changes."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Reuse isolated pytest config (", (0,jsx_runtime.jsx)(_components.code, {
          children: "validation/pytest.ini"
        }), ") to avoid root ", (0,jsx_runtime.jsx)(_components.code, {
          children: "pytest.ini"
        }), " / pytest-django pollution."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Curated stable subset first; expand in follow-on (M5)."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "3-specification",
      children: "3. Specification"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "ID"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Requirement"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "R1"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["New script ", (0,jsx_runtime.jsx)(_components.code, {
              children: "run_workflow_scripts_ci_pytest.sh"
            }), " runs ", (0,jsx_runtime.jsx)(_components.code, {
              children: "validation/"
            }), " + curated co-located tests"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "R2"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Workflow triggers on ", (0,jsx_runtime.jsx)(_components.code, {
              children: "packages/frameworks/workflow-mgt/**"
            }), " path filter"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "R3"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Python 3.11, deps: ", (0,jsx_runtime.jsx)(_components.code, {
              children: "pytest"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "pyyaml"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "R4"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "run_isolated_pytest.sh"
            }), " delegates to CI script for backward compatibility"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "R5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Document CI entrypoint in validation README"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "4-test-design",
      children: "4. Test design"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "ID"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Test"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Type"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Script exits 0 locally with curated suite"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Manual / CI"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Workflow YAML valid (path filters, python 3.11)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Review"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T3"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Change under ", (0,jsx_runtime.jsx)(_components.code, {
              children: "validation/"
            }), " fails CI if test broken"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CI regression"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "5-implementation-plan",
      children: "5. Implementation plan"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      className: "contains-task-list",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "Transition E07:S07", ":T02", " → ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "IN PROGRESS"
        }), " (kanban + task doc)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "Add ", (0,jsx_runtime.jsx)(_components.code, {
          children: "run_workflow_scripts_ci_pytest.sh"
        }), " + update ", (0,jsx_runtime.jsx)(_components.code, {
          children: "run_isolated_pytest.sh"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "Add ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".github/workflows/workflow-scripts-pytest.yml"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "Document in ", (0,jsx_runtime.jsx)(_components.code, {
          children: "scripts/validation/README.md"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "Mark AC1–AC3 complete; reconcile task status post-verification."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", (0,jsx_runtime.jsxs)(_components.strong, {
          children: ["RW E07:S07", ":T02"]
        }), " for release attribution (", (0,jsx_runtime.jsx)(_components.strong, {
          children: "v0.7.7.2+1"
        }), ")."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "6-documentation-deliverables",
      children: "6. Documentation deliverables"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Validation README CI section"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Task doc AC checkboxes"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "story-007 checklist entry"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "7-verification-checklist",
      children: "7. Verification checklist"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      className: "contains-task-list",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "Local: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "bash run_workflow_scripts_ci_pytest.sh"
        }), " → exit 0 (103 passed)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "AC1–AC3 satisfied on task doc"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "RW attributes E07:S07", ":T02", " (", (0,jsx_runtime.jsx)(_components.strong, {
          children: "v0.7.7.2+1"
        }), ")"]
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