"use strict";
(self["webpackChunkportal"] = self["webpackChunkportal"] || []).push([["81926"], {
67386(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_project_management_kanban_fr_br_br_060_rw_in_progress_task_gate_blocks_build_releases_md_186_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-project-management-kanban-fr-br-br-060-rw-in-progress-task-gate-blocks-build-releases-md-186.json
var site_docs_project_management_kanban_fr_br_br_060_rw_in_progress_task_gate_blocks_build_releases_md_186_namespaceObject = JSON.parse('{"id":"project-management/kanban/fr-br/BR-060-rw-in-progress-task-gate-blocks-build-releases","title":"Bug Report BR-060 - RW incorrectly blocks IN PROGRESS tasks","description":"Status: COMPLETE","source":"@site/../docs/project-management/kanban/fr-br/BR-060-rw-in-progress-task-gate-blocks-build-releases.md","sourceDirName":"project-management/kanban/fr-br","slug":"/project-management/kanban/fr-br/BR-060-rw-in-progress-task-gate-blocks-build-releases","permalink":"/ai-dev-kit/docs/project-management/kanban/fr-br/BR-060-rw-in-progress-task-gate-blocks-build-releases","draft":false,"unlisted":false,"editUrl":"https://github.com/RMS-Ltd/ai-dev-kit/tree/main/docs/../docs/project-management/kanban/fr-br/BR-060-rw-in-progress-task-gate-blocks-build-releases.md","tags":[],"version":"current","frontMatter":{"lifecycle":"evergreen","ttl_days":null,"created_at":"2026-04-02T00:00:00.000Z","expires_at":null,"housekeeping_policy":"keep"},"sidebar":"docsSidebar","previous":{"title":"Bug Report BR-060: RW --art Flag Not Fully Applied Through Step 9","permalink":"/ai-dev-kit/docs/project-management/kanban/fr-br/BR-060-rw-art-flag-should-work-in-all-rw-modes"},"next":{"title":"Bug Report BR-061 — RW explicit E:S:T still fails Step 1 when version.py epic ≠ branch epic","permalink":"/ai-dev-kit/docs/project-management/kanban/fr-br/BR-061-rw-explicit-task-id-requires-manual-version-alignment"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ../docs/project-management/kanban/fr-br/BR-060-rw-in-progress-task-gate-blocks-build-releases.md


const frontMatter = {
	lifecycle: 'evergreen',
	ttl_days: null,
	created_at: new Date('2026-04-02T00:00:00.000Z'),
	expires_at: null,
	housekeeping_policy: 'keep'
};
const contentTitle = 'Bug Report BR-060 - RW incorrectly blocks IN PROGRESS tasks';

const assets = {

};



const toc = [{
  "value": "Problem Statement",
  "id": "problem-statement",
  "level": 2
}, {
  "value": "Current Fault",
  "id": "current-fault",
  "level": 2
}, {
  "value": "Expected Behavior",
  "id": "expected-behavior",
  "level": 2
}, {
  "value": "Impact",
  "id": "impact",
  "level": 2
}, {
  "value": "Reproduction",
  "id": "reproduction",
  "level": 2
}, {
  "value": "Root Cause Hypothesis",
  "id": "root-cause-hypothesis",
  "level": 2
}, {
  "value": "Proposed Resolution",
  "id": "proposed-resolution",
  "level": 2
}, {
  "value": "Implementation Notes",
  "id": "implementation-notes",
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
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "bug-report-br-060---rw-incorrectly-blocks-in-progress-tasks",
        children: "Bug Report BR-060 - RW incorrectly blocks IN PROGRESS tasks"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Status:"
      }), " COMPLETE", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Priority:"
      }), " CRITICAL", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Severity:"
      }), " HIGH", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Created:"
      }), " 2026-04-02", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Last updated:"
      }), " 2026-04-07 — closeout: behavior verified in audit and aligned docs/task wiring for canonical home ", (0,jsx_runtime.jsxs)(_components.strong, {
        children: ["E02:S01", ":T09"]
      }), " (implementation forensic: ", (0,jsx_runtime.jsxs)(_components.strong, {
        children: ["RW E06:S06", ":T60"]
      }), " ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "v0.6.6.60+1"
      }), ", SemVer ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "v0.4.698+1"
      }), ").", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Version:"
      }), " v0.6.6.60+1", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Code:"
      }), " BR-060", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Implementing Task:"
      }), " ", (0,jsx_runtime.jsxs)(_components.a, {
        href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-02/story-01-rw-agent-execution-and-docs/T09-rw-allow-in-progress-task-releases-br060",
        children: ["E02:S01", ":T09"]
      }), " (superseded stubs: ", (0,jsx_runtime.jsxs)(_components.a, {
        href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-04/story-19-fr-br-uxr-abstract-governance-and-intake/T01-rw-allow-in-progress-task-releases-br060",
        children: ["E04:S19", ":T01"]
      }), ", ", (0,jsx_runtime.jsxs)(_components.a, {
        href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-06/story-06-feature-requests/T60-rw-allow-in-progress-task-releases",
        children: ["E06:S06", ":T60"]
      }), ")"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "problem-statement",
      children: "Problem Statement"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Release Workflow (RW) currently blocks full releases when the requested task is ", (0,jsx_runtime.jsx)(_components.code, {
        children: "IN PROGRESS"
      }), ", even when the release is intended as an incremental ", (0,jsx_runtime.jsx)(_components.code, {
        children: "+BUILD"
      }), " update within the same task. This prevents valid iterative releases and conflicts with the intended meaning of ", (0,jsx_runtime.jsx)(_components.code, {
        children: "RC.EPIC.STORY.TASK+BUILD"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "current-fault",
      children: "Current Fault"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "validate_rw_task_complete.py"
        }), " in ", (0,jsx_runtime.jsx)(_components.code, {
          children: "full"
        }), " mode rejects non-perpetual ", (0,jsx_runtime.jsx)(_components.code, {
          children: "IN PROGRESS"
        }), " task status."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "RW Step 1c therefore aborts before Step 2+ for active tasks that legitimately need additional builds."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Users are forced toward workaround modes rather than normal RW execution for iterative releases."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "expected-behavior",
      children: "Expected Behavior"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["RW should allow releases against ", (0,jsx_runtime.jsx)(_components.code, {
          children: "IN PROGRESS"
        }), " tasks when task identity is explicit and validated (Step 1b/1d), and version bump logic applies ", (0,jsx_runtime.jsx)(_components.code, {
          children: "+BUILD"
        }), " progression correctly."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Guardrails should still prevent accidental wrong-task releases (intent validation remains mandatory)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Status semantics should support iterative delivery and evidence refresh before final completion."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "impact",
      children: "Impact"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Blocks normal release cadence for active work items."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Creates policy confusion and workflow friction."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Encourages mode-based workarounds over the standard RW path."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "reproduction",
      children: "Reproduction"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Set current branch to an epic branch matching requested task epic."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Ensure requested task doc status is ", (0,jsx_runtime.jsx)(_components.code, {
          children: "IN PROGRESS"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Run ", (0,jsx_runtime.jsx)(_components.code, {
          children: "RW E06:S06:T57"
        }), " (or equivalent valid E:S", ":T", " task)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Observe Step 1c failure from ", (0,jsx_runtime.jsx)(_components.code, {
          children: "validate_rw_task_complete.py"
        }), " with reason similar to \"status still in progress\"."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "root-cause-hypothesis",
      children: "Root Cause Hypothesis"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["FR-060 Step 1c validator currently couples \"releasable\" to completion state in ", (0,jsx_runtime.jsx)(_components.code, {
          children: "full"
        }), " mode."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["This coupling conflicts with internal versioning intent where repeated releases on the same task are represented by ", (0,jsx_runtime.jsx)(_components.code, {
          children: "+BUILD"
        }), "."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "proposed-resolution",
      children: "Proposed Resolution"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Adjust Step 1c criteria to permit ", (0,jsx_runtime.jsx)(_components.code, {
          children: "IN PROGRESS"
        }), " tasks in full RW mode when task intent validation passes."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Keep strong typo/intent protections (", (0,jsx_runtime.jsx)(_components.code, {
          children: "validate_rw_task_intent.py"
        }), ") as the primary safety mechanism."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update FR-060 and RW execution docs to explicitly define status-vs-build behavior."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Add regression tests covering:", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["full RW with ", (0,jsx_runtime.jsx)(_components.code, {
              children: "IN PROGRESS"
            }), " status (should pass),"]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "full RW with TODO status (policy decision required),"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "full RW with task-id mismatch (must fail)."
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "implementation-notes",
      children: "Implementation Notes"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "validate_rw_task_complete.py"
        }), " full mode now treats ", (0,jsx_runtime.jsx)(_components.code, {
          children: "IN PROGRESS"
        }), " as releasable."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "test_validate_rw_task_complete.py"
        }), " now verifies:", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "IN PROGRESS"
            }), " passes in full mode,"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "COMPLETE"
            }), " passes in full mode,"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "TODO"
            }), " fails in full mode,"]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "perpetual in-progress passes,"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "missing task docs fail."
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "related",
      children: "Related"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "validate_rw_task_complete.py"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "validate_rw_task_intent.py"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/architecture/standards-and-adrs/dev-kit-versioning-policy.md"
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "BR-056"
        }), " (task intent guardrail)"]
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