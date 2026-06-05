"use strict";
(self["webpackChunkportal"] = self["webpackChunkportal"] || []).push([["53728"], {
48038(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_project_management_kanban_fr_br_br_072_ukw_completed_tasks_not_removed_from_kboard_md_011_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-project-management-kanban-fr-br-br-072-ukw-completed-tasks-not-removed-from-kboard-md-011.json
var site_docs_project_management_kanban_fr_br_br_072_ukw_completed_tasks_not_removed_from_kboard_md_011_namespaceObject = JSON.parse('{"id":"project-management/kanban/fr-br/BR-072-ukw-completed-tasks-not-removed-from-kboard","title":"Bug Report BR-072: UKW not removing completed tasks from kboard","description":"Status: REOPENED","source":"@site/../docs/project-management/kanban/fr-br/BR-072-ukw-completed-tasks-not-removed-from-kboard.md","sourceDirName":"project-management/kanban/fr-br","slug":"/project-management/kanban/fr-br/BR-072-ukw-completed-tasks-not-removed-from-kboard","permalink":"/ai-dev-kit/docs/project-management/kanban/fr-br/BR-072-ukw-completed-tasks-not-removed-from-kboard","draft":false,"unlisted":false,"editUrl":"https://github.com/RMS-Ltd/ai-dev-kit/tree/main/docs/../docs/project-management/kanban/fr-br/BR-072-ukw-completed-tasks-not-removed-from-kboard.md","tags":[],"version":"current","frontMatter":{"lifecycle":"evergreen","ttl_days":null,"created_at":"2026-05-12T00:00:00.000Z","expires_at":null,"housekeeping_policy":"keep"},"sidebar":"docsSidebar","previous":{"title":"Bug Report BR-071: RW trigger routing not executing from chat session","permalink":"/ai-dev-kit/docs/project-management/kanban/fr-br/BR-071-rw-trigger-routing-not-executing-from-chat-session"},"next":{"title":"Bug Report BR-073: SemVer task-touch collision — two internal versions mapped to identical SemVer","permalink":"/ai-dev-kit/docs/project-management/kanban/fr-br/BR-073-semver-task-touch-collision-retrospective-fix"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ../docs/project-management/kanban/fr-br/BR-072-ukw-completed-tasks-not-removed-from-kboard.md


const frontMatter = {
	lifecycle: 'evergreen',
	ttl_days: null,
	created_at: new Date('2026-05-12T00:00:00.000Z'),
	expires_at: null,
	housekeeping_policy: 'keep'
};
const contentTitle = 'Bug Report BR-072: UKW not removing completed tasks from kboard';

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
  "value": "Observed Behavior",
  "id": "observed-behavior",
  "level": 2
}, {
  "value": "Reproduction",
  "id": "reproduction",
  "level": 2
}, {
  "value": "Impact",
  "id": "impact",
  "level": 2
}, {
  "value": "Scope / Suspected Areas",
  "id": "scope--suspected-areas",
  "level": 2
}, {
  "value": "Acceptance Criteria",
  "id": "acceptance-criteria",
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
    input: "input",
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
        id: "bug-report-br-072-ukw-not-removing-completed-tasks-from-kboard",
        children: "Bug Report BR-072: UKW not removing completed tasks from kboard"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Status:"
      }), " REOPENED", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Priority:"
      }), " HIGH", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Severity:"
      }), " HIGH", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Created:"
      }), " 2026-05-12", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Last updated:"
      }), " 2026-05-16 (REOPENED — drift recurrence detected: E02:S07", ":T01", ", E02:S07", ":T05", " showing as TODO on kboard despite COMPLETE status in story docs; UKW not catching inline status drift)", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Version:"
      }), " v0.6.1.38+3", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Code:"
      }), " BR-072"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Implementing Task:"
      }), " ", (0,jsx_runtime.jsxs)(_components.a, {
        href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-06/story-01-br-repo/T38-ukw-completed-tasks-not-removed-from-kboard-br072",
        children: ["E06:S01", ":T38"]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "problem-statement",
      children: "Problem Statement"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["When the UKW runs, completed tasks are not removed from the MoSCOW priority sections of ", (0,jsx_runtime.jsx)(_components.code, {
        children: "kboard.md"
      }), ". Instead, they remain in place with their status label updated to ", (0,jsx_runtime.jsx)(_components.code, {
        children: "COMPLETE"
      }), ". The board accumulates completed tasks over time rather than maintaining an active-only view."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A secondary symptom is task duplication: a task can appear in multiple MoSCOW sections simultaneously (e.g. both \"Should Have\" and \"Ongoing\") if UKW adds it to a new section without checking whether it already exists elsewhere on the board."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "expected-behavior",
      children: "Expected Behavior"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Completed tasks are removed from all MoSCOW sections of ", (0,jsx_runtime.jsx)(_components.code, {
          children: "kboard.md"
        }), " when UKW runs."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Removed tasks are moved to ", (0,jsx_runtime.jsx)(_components.code, {
          children: "kanban-completed.md"
        }), " as part of the same UKW execution."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "No task appears in more than one MoSCOW section at any time."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "observed-behavior",
      children: "Observed Behavior"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "E02:S16:T01"
        }), " (COMPLETE) remains in the \"Should Have\" section."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "E02:S15:T07"
        }), " (COMPLETE) remains in the \"Should Have\" section."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "E02:S16:T01"
        }), " additionally appears in the \"Ongoing\" section — the same task in two sections simultaneously."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "UKW has run multiple times since these tasks completed without removing them."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "reproduction",
      children: "Reproduction"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Mark a task as COMPLETE in its task document."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Run UKW."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Observe that the task remains in its MoSCOW section in ", (0,jsx_runtime.jsx)(_components.code, {
          children: "kboard.md"
        }), " with status label updated to ", (0,jsx_runtime.jsx)(_components.code, {
          children: "COMPLETE"
        }), " rather than being removed."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Run UKW again on a subsequent session."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Observe the completed task still present."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Known test fixtures currently on the board: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "E02:S16:T01"
      }), " and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "E02:S15:T07"
      }), " (intentionally retained for reproduction purposes)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Recurrence (2026-05-16):"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "E02:S07:T01"
        }), " (COMPLETE v0.2.7.1+0) showing as ", (0,jsx_runtime.jsx)(_components.code, {
          children: "TODO"
        }), " on ", (0,jsx_runtime.jsx)(_components.code, {
          children: "kboard.md"
        }), " in Could Have section."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "E02:S07:T05"
        }), " (COMPLETE v0.2.7.5+1) showing as ", (0,jsx_runtime.jsx)(_components.code, {
          children: "TODO"
        }), " on ", (0,jsx_runtime.jsx)(_components.code, {
          children: "kboard.md"
        }), " in Could Have section."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Both tasks confirmed COMPLETE in story doc (", (0,jsx_runtime.jsx)(_components.code, {
          children: "story-07-trigger-aware-release-workflow.md"
        }), ") with inline status corrected from TODO → COMPLETE during drift audit."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Root cause: UKW Step 6 reads task status from ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "task documents"
        }), ", but ", (0,jsx_runtime.jsx)(_components.code, {
          children: "E02:S07:T01"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "E02:S07:T05"
        }), " are ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "embedded inline in story doc"
        }), " (no standalone task docs). UKW does not scan story docs for inline task status."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "This reveals a broader gap:"
        }), " UKW does not reconcile inline/embedded task statuses in story docs against kboard rows."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "impact",
      children: "Impact"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Board accuracy degrades over time — the MoSCOW list no longer reflects only active work."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Completed tasks occupy prioritization attention and obscure genuinely in-progress items."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Board duplication undermines trust in the UKW as a reliable synchronisation mechanism."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["The ", (0,jsx_runtime.jsx)(_components.code, {
          children: "kanban-completed.md"
        }), " archive is not being kept current."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "scope--suspected-areas",
      children: "Scope / Suspected Areas"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "UKW Step 6 (board MoSCOW update) — the removal instruction exists in the cursorrules definition (\"Remove completed tasks from 'In Progress' sections\") but is not being executed."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The instruction is buried within the MoSCOW classification step and may be insufficiently prominent relative to the classification work, causing the agent to focus on reclassification rather than removal."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "No explicit cross-section deduplication check exists in the UKW definition, allowing a task to accumulate in multiple sections across separate UKW runs."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "kanban-completed.md"
        }), " write step may be missing entirely from the UKW board update path."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "UKW does not scan story docs for inline task statuses"
        }), " — tasks embedded in story docs (e.g., E02:S07", ":T01-T08", ") have no standalone task doc, so UKW Step 3 (Update Task Documents) skips them entirely. This leaves kboard rows for inline tasks permanently stale unless manually corrected."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
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
        }), " ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "AC1:"
        }), " Root cause identified — whether the removal instruction is being ignored, skipped, or absent from the effective UKW execution path."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "AC2:"
        }), " UKW definition updated so that completed task removal from ", (0,jsx_runtime.jsx)(_components.code, {
          children: "kboard.md"
        }), " is a discrete, unambiguous step — not a subordinate clause within the MoSCOW update step."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "AC3:"
        }), " UKW definition includes an explicit deduplication check — a task must not appear in more than one MoSCOW section."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "AC4:"
        }), " Completed tasks removed from ", (0,jsx_runtime.jsx)(_components.code, {
          children: "kboard.md"
        }), " are written to ", (0,jsx_runtime.jsx)(_components.code, {
          children: "kanban-completed.md"
        }), " in the same UKW run."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "AC5:"
        }), " The known test fixtures (", (0,jsx_runtime.jsx)(_components.code, {
          children: "E02:S16:T01"
        }), " in Should Have, ", (0,jsx_runtime.jsx)(_components.code, {
          children: "E02:S15:T07"
        }), " in Should Have, duplicate ", (0,jsx_runtime.jsx)(_components.code, {
          children: "E02:S16:T01"
        }), " in Ongoing) are confirmed removed by the fixed UKW before BR-072 is closed."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "AC6:"
        }), " BR-072, E06:S01", ":T38", ", Story 001 checklist, ", (0,jsx_runtime.jsx)(_components.code, {
          children: "kboard.md"
        }), ", and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "kboard.md"
        }), " are bidirectionally wired."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "AC7:"
        }), " UKW detects and reconciles inline/embedded task statuses within story docs (not just standalone task docs) against kboard rows — or an explicit policy documents that inline tasks are out of scope for UKW with alternative governance."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "related",
      children: "Related"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-06/story-01-br-repo",
          children: "Story 001 – BR Repo"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/packages%2Fframeworks%2Fworkflow-mgt%2Fcursorrules-ukw-trigger-section.md",
          children: "UKW cursorrules trigger definition"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/packages/frameworks/workflow-mgt/workflows/update-kanban-workflow/update-kanban-workflow.yaml",
          children: "UKW workflow definition"
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/fr-br/BR-069-kboard-fbuboard-earliest-last-modified-timestamps-overwritten",
          children: "BR-069"
        }), " — prior kboard accuracy defect"]
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