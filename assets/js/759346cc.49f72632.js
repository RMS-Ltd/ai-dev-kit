"use strict";
(self["webpackChunkportal"] = self["webpackChunkportal"] || []).push([["82520"], {
2472(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_project_management_kanban_fr_br_br_063_rw_k_task_attribution_drift_between_requested_task_and_version_anchor_md_759_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-project-management-kanban-fr-br-br-063-rw-k-task-attribution-drift-between-requested-task-and-version-anchor-md-759.json
var site_docs_project_management_kanban_fr_br_br_063_rw_k_task_attribution_drift_between_requested_task_and_version_anchor_md_759_namespaceObject = JSON.parse('{"id":"project-management/kanban/fr-br/BR-063-rw-k-task-attribution-drift-between-requested-task-and-version-anchor","title":"Bug Report BR-063 — RW -k task attribution drift (requested task vs version anchor)","description":"Status: COMPLETE","source":"@site/../docs/project-management/kanban/fr-br/BR-063-rw-k-task-attribution-drift-between-requested-task-and-version-anchor.md","sourceDirName":"project-management/kanban/fr-br","slug":"/project-management/kanban/fr-br/BR-063-rw-k-task-attribution-drift-between-requested-task-and-version-anchor","permalink":"/ai-dev-kit/docs/project-management/kanban/fr-br/BR-063-rw-k-task-attribution-drift-between-requested-task-and-version-anchor","draft":false,"unlisted":false,"editUrl":"https://github.com/RMS-Ltd/ai-dev-kit/tree/main/docs/../docs/project-management/kanban/fr-br/BR-063-rw-k-task-attribution-drift-between-requested-task-and-version-anchor.md","tags":[],"version":"current","frontMatter":{"lifecycle":"evergreen","ttl_days":null,"created_at":"2026-04-07T00:00:00.000Z","expires_at":null,"housekeeping_policy":"keep"},"sidebar":"docsSidebar","previous":{"title":"Bug Report BR-062 - RW Step 7 leaves completed tasks on in-progress kboard","permalink":"/ai-dev-kit/docs/project-management/kanban/fr-br/BR-062-rw-k-kanban-init-does-not-prune-completed-tasks-from-kboard"},"next":{"title":"Bug Report BR-064 - RW dev branch should not enforce epic lock","permalink":"/ai-dev-kit/docs/project-management/kanban/fr-br/BR-064-rw-dev-branch-should-not-enforce-epic-lock"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ../docs/project-management/kanban/fr-br/BR-063-rw-k-task-attribution-drift-between-requested-task-and-version-anchor.md


const frontMatter = {
	lifecycle: 'evergreen',
	ttl_days: null,
	created_at: new Date('2026-04-07T00:00:00.000Z'),
	expires_at: null,
	housekeeping_policy: 'keep'
};
const contentTitle = 'Bug Report BR-063 — RW -k task attribution drift (requested task vs version anchor)';

const assets = {

};



const toc = [{
  "value": "Problem Statement",
  "id": "problem-statement",
  "level": 2
}, {
  "value": "Expected Behavior",
  "id": "expected-behavior",
  "level": 2
}, {
  "value": "Reproduction",
  "id": "reproduction",
  "level": 2
}, {
  "value": "Proposed Resolution",
  "id": "proposed-resolution",
  "level": 2
}, {
  "value": "Implementation Outcome",
  "id": "implementation-outcome",
  "level": 2
}, {
  "value": "Related",
  "id": "related",
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
        id: "bug-report-br-063--rw--k-task-attribution-drift-requested-task-vs-version-anchor",
        children: ["Bug Report BR-063 — RW ", (0,jsx_runtime.jsx)(_components.code, {
          children: "-k"
        }), " task attribution drift (requested task vs version anchor)"]
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Status:"
      }), " COMPLETE", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Priority:"
      }), " CRITICAL", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Severity:"
      }), " CRITICAL — ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "forensic integrity blocker:"
      }), " release records can claim one task while version/tag lineage anchors a different task.", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Created:"
      }), " 2026-04-07", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Last updated:"
      }), " 2026-04-07 — ", (0,jsx_runtime.jsx)(_components.code, {
        children: "E02:S01:T13+2"
      }), " released runtime hardening to ", (0,jsx_runtime.jsx)(_components.code, {
        children: "dev"
      }), " (", (0,jsx_runtime.jsx)(_components.code, {
        children: "RW -k"
      }), " mismatch guard, ", (0,jsx_runtime.jsx)(_components.code, {
        children: "--art"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "validate_version_bump"
      }), " alignment, tests, dual-source docs).", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Version:"
      }), " v0.2.1.13+2", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Code:"
      }), " BR-063", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Implementing Task:"
      }), " ", (0,jsx_runtime.jsxs)(_components.a, {
        href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-02/story-01-rw-agent-execution-and-docs/T13-rw-k-forensic-task-attribution-alignment-br063",
        children: ["E02:S01", ":T13"]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "problem-statement",
      children: "Problem Statement"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "RW -k"
      }), " accepts an explicit requested task id for intent context, but release attribution can still follow the existing ", (0,jsx_runtime.jsx)(_components.code, {
        children: "version.py"
      }), " task lineage. This can produce split accountability:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["commit/changelog narrative references requested task (example: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "T12"
        }), ")"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["internal version/tag lineage remains a different task (example: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "T10+6"
        }), ")"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This breaks forensic traceability and creates ambiguous responsibility for what was actually released."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "expected-behavior",
      children: "Expected Behavior"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "For a single release, task attribution must be single-source and consistent across:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "version.py"
        }), " (", (0,jsx_runtime.jsx)(_components.code, {
          children: "RC.EPIC.STORY.TASK+BUILD"
        }), ")"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["commit footer (", (0,jsx_runtime.jsx)(_components.code, {
          children: "Epic | Story | Task"
        }), ")"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "internal/semver release tags"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "main and detailed changelog entries"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "BR implementing-task linkage where applicable"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "If requested task and computed version task differ, RW must hard-fail unless an explicit reconciliation mode is chosen."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "reproduction",
      children: "Reproduction"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Run ", (0,jsx_runtime.jsx)(_components.code, {
          children: "RW -k E02:S01:T12"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Observe version lineage increments on ", (0,jsx_runtime.jsx)(_components.code, {
          children: "T10"
        }), " (", (0,jsx_runtime.jsx)(_components.code, {
          children: "0.2.1.10+6"
        }), ")."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Observe release/changelog text attributed to ", (0,jsx_runtime.jsx)(_components.code, {
          children: "T12"
        }), "."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Result: release artifacts disagree on accountable task."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "proposed-resolution",
      children: "Proposed Resolution"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Add explicit ", (0,jsx_runtime.jsx)(_components.code, {
          children: "RW -k"
        }), " attribution guard that compares requested task id with computed version task anchor."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["If mismatch, abort by default and require an explicit operator choice:", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "adopt requested task as canonical release anchor, or"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "keep computed anchor and rewrite all release metadata accordingly."
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Add regression coverage for mismatch scenario."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "implementation-outcome",
      children: "Implementation Outcome"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Implemented ", (0,jsx_runtime.jsx)(_components.code, {
          children: "--art"
        }), " on ", (0,jsx_runtime.jsx)(_components.code, {
          children: "validate_rw_task_intent.py"
        }), " for ", (0,jsx_runtime.jsx)(_components.code, {
          children: "rw-k"
        }), " intentional mismatch adoption."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Changed ", (0,jsx_runtime.jsx)(_components.code, {
          children: "rw-k"
        }), " default to forensic-strict mismatch fail (instead of unconditional pass)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Added ", (0,jsx_runtime.jsx)(_components.code, {
          children: "--art"
        }), " alignment enforcement in ", (0,jsx_runtime.jsx)(_components.code, {
          children: "validate_version_bump.py"
        }), " via ", (0,jsx_runtime.jsx)(_components.code, {
          children: "--requested"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Extended tests:", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "test_validate_rw_task_intent.py"
            }), " (new) for mismatch/pass scenarios."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "test_validate_version_bump.py"
            }), " for ART alignment checks."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "test_rw_triggers.py"
            }), " for parsing RW inputs that include task ids/flags."]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Updated RW rules/docs to document ", (0,jsx_runtime.jsx)(_components.code, {
          children: "--art"
        }), " operator guidance and propagation requirements."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "related",
      children: "Related"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/fr-br/BR-061-rw-explicit-task-id-requires-manual-version-alignment",
          children: "BR-061"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "packages/frameworks/workflow-mgt/scripts/validation/validate_rw_task_intent.py"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "packages/frameworks/workflow-mgt/scripts/validation/validate_version_bump.py"
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