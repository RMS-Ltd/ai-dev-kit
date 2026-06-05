"use strict";
(self["webpackChunkportal"] = self["webpackChunkportal"] || []).push([["28634"], {
69840(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_project_management_kanban_fr_br_br_062_rw_k_kanban_init_does_not_prune_completed_tasks_from_kboard_md_eea_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-project-management-kanban-fr-br-br-062-rw-k-kanban-init-does-not-prune-completed-tasks-from-kboard-md-eea.json
var site_docs_project_management_kanban_fr_br_br_062_rw_k_kanban_init_does_not_prune_completed_tasks_from_kboard_md_eea_namespaceObject = JSON.parse('{"id":"project-management/kanban/fr-br/BR-062-rw-k-kanban-init-does-not-prune-completed-tasks-from-kboard","title":"Bug Report BR-062 - RW Step 7 leaves completed tasks on in-progress kboard","description":"Status: COMPLETE — wired as Bucket-D5 predecessor of FR-092","source":"@site/../docs/project-management/kanban/fr-br/BR-062-rw-k-kanban-init-does-not-prune-completed-tasks-from-kboard.md","sourceDirName":"project-management/kanban/fr-br","slug":"/project-management/kanban/fr-br/BR-062-rw-k-kanban-init-does-not-prune-completed-tasks-from-kboard","permalink":"/ai-dev-kit/docs/project-management/kanban/fr-br/BR-062-rw-k-kanban-init-does-not-prune-completed-tasks-from-kboard","draft":false,"unlisted":false,"editUrl":"https://github.com/RMS-Ltd/ai-dev-kit/tree/main/docs/../docs/project-management/kanban/fr-br/BR-062-rw-k-kanban-init-does-not-prune-completed-tasks-from-kboard.md","tags":[],"version":"current","frontMatter":{"lifecycle":"evergreen","ttl_days":null,"created_at":"2026-04-07T00:00:00.000Z","expires_at":null,"housekeeping_policy":"keep"},"sidebar":"docsSidebar","previous":{"title":"Bug Report BR-061 — Task-touch SemVer PATCH bumps on every converter run","permalink":"/ai-dev-kit/docs/project-management/kanban/fr-br/BR-061-semver-task-touch-counter-increments-too-often"},"next":{"title":"Bug Report BR-063 — RW -k task attribution drift (requested task vs version anchor)","permalink":"/ai-dev-kit/docs/project-management/kanban/fr-br/BR-063-rw-k-task-attribution-drift-between-requested-task-and-version-anchor"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ../docs/project-management/kanban/fr-br/BR-062-rw-k-kanban-init-does-not-prune-completed-tasks-from-kboard.md


const frontMatter = {
	lifecycle: 'evergreen',
	ttl_days: null,
	created_at: new Date('2026-04-07T00:00:00.000Z'),
	expires_at: null,
	housekeeping_policy: 'keep'
};
const contentTitle = 'Bug Report BR-062 - RW Step 7 leaves completed tasks on in-progress kboard';

const assets = {

};



const toc = [{
  "value": "Problem Statement",
  "id": "problem-statement",
  "level": 2
}, {
  "value": "Observed Behavior",
  "id": "observed-behavior",
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
  "value": "Suspected Root Cause",
  "id": "suspected-root-cause",
  "level": 2
}, {
  "value": "Proposed Resolution",
  "id": "proposed-resolution",
  "level": 2
}, {
  "value": "Related",
  "id": "related",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    blockquote: "blockquote",
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
        id: "bug-report-br-062---rw-step-7-leaves-completed-tasks-on-in-progress-kboard",
        children: "Bug Report BR-062 - RW Step 7 leaves completed tasks on in-progress kboard"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Status:"
      }), " COMPLETE — wired as Bucket-D5 predecessor of ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/project-management/kanban/fr-br/FR-092-canonical-rw-ukw-kanban-consistency-program",
        children: "FR-092"
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Priority:"
      }), " CRITICAL", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Severity:"
      }), " HIGH", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Created:"
      }), " 2026-04-07", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Last updated:"
      }), " 2026-04-27 — wired as Bucket-D5 predecessor of FR-092 (active row hygiene consolidation). Original closure: 2026-04-10 — scope expanded and fixed via ", (0,jsx_runtime.jsx)(_components.code, {
        children: "E02:S01:T11"
      }), ": active kboard MoSCOW cleanup now applies to both ", (0,jsx_runtime.jsx)(_components.code, {
        children: "kanban_init"
      }), " and full RW Step 7 mode; category 4 edge tests include full-mode regression.", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Version:"
      }), " v0.2.1.11+2", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Code:"
      }), " BR-062", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Implementing Task:"
      }), " ", (0,jsx_runtime.jsxs)(_components.a, {
        href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-02/story-01-rw-agent-execution-and-docs/T11-rw-k-kanban-init-board-hygiene-for-completed-tasks-br062",
        children: ["E02:S01", ":T11"]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Predecessor of FR-092 (2026-04-27):"
        }), " BR-062 fixed completed-row leak in RW Step 7 board hygiene. FR-092 consolidates active-row hygiene under one sub-program (BR-042 / BR-062 / FR-040 / FR-076). BR-062 remains valid as historical predecessor; the consolidation supersedes BR-042 (closed as duplicate of FR-090)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "problem-statement",
      children: "Problem Statement"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["RW Step 7 Kanban updates did not consistently enforce in-progress board hygiene for completed tasks. Originally observed in ", (0,jsx_runtime.jsx)(_components.code, {
        children: "RW -k"
      }), " (", (0,jsx_runtime.jsx)(_components.code, {
        children: "kanban_init"
      }), " mode), the same failure pattern was later observed in normal full RW Step 7 runs: completed tasks remained listed under \"MoSCOW Prioritized In-Progress Tasks\" in ", (0,jsx_runtime.jsx)(_components.code, {
        children: "kboard.md"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "observed-behavior",
      children: "Observed Behavior"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["After ", (0,jsx_runtime.jsx)(_components.code, {
          children: "RW -k E02:S01:T09"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "E02:S01:T09"
        }), " remained in ", (0,jsx_runtime.jsx)(_components.code, {
          children: "kboard.md"
        }), " under \"MoSCOW Prioritized In-Progress Tasks\"."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["After full RW runs (non-", (0,jsx_runtime.jsx)(_components.code, {
          children: "-k"
        }), "), completed tasks (for example ", (0,jsx_runtime.jsx)(_components.code, {
          children: "E02:S01:T12"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "E06:S07:T111"
        }), ") also remained on active in-progress MoSCOW sections."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The row still carried stale phrasing and formatting artifacts while the canonical docs were already closed out."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "This creates contradictory project state across Kanban docs."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "expected-behavior",
      children: "Expected Behavior"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "When a task is completed, the in-progress MoSCoW board should be cleaned accordingly (remove or transition entry) during any RW Step 7 invocation."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Neither ", (0,jsx_runtime.jsx)(_components.code, {
          children: "kanban_init"
        }), " nor full RW mode should leave stale completed rows on the active in-progress board."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "impact",
      children: "Impact"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Misleading work-in-progress visibility for planning and triage."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Reduced trust in RW/kanban automation due to cross-document inconsistency."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Extra manual cleanup burden after release operations."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "reproduction",
      children: "Reproduction"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Ensure a task is closed out in task/story/BR docs."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Run ", (0,jsx_runtime.jsx)(_components.code, {
          children: "RW -k <task-id>"
        }), " and allow Step 7 Kanban update (", (0,jsx_runtime.jsx)(_components.code, {
          children: "kanban_init"
        }), " mode)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Inspect ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/project-management/kanban/kboard.md"
        }), "."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Observe completed task row still present in in-progress MoSCoW list."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "suspected-root-cause",
      children: "Suspected Root Cause"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "update_kanban_docs.py"
        }), " only pruned stale completed rows in ", (0,jsx_runtime.jsx)(_components.code, {
          children: "kanban_init"
        }), " mode and did not enforce active-list cleanup in full RW mode."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "This allowed COMPLETE rows to persist in active MoSCoW sections despite task/FR/BR closure."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "proposed-resolution",
      children: "Proposed Resolution"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Enforce active-list cleanup in Step 7 for all modes (", (0,jsx_runtime.jsx)(_components.code, {
          children: "kanban_init"
        }), " and full): prune COMPLETE rows from active kboard MoSCoW sections."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Keep existing metadata and timestamp normalization behavior intact."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Add regression tests for full-mode cleanup in addition to existing ", (0,jsx_runtime.jsx)(_components.code, {
          children: "kanban_init"
        }), " coverage."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "related",
      children: "Related"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/project-management/kanban/kboard.md"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "packages/frameworks/workflow-mgt/scripts/update_kanban_docs.py"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "packages/frameworks/workflow-mgt/scripts/test_update_kanban_docs.py"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "BR-060"
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