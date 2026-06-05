"use strict";
(self["webpackChunkportal"] = self["webpackChunkportal"] || []).push([["44787"], {
35084(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_project_management_kanban_fr_br_br_061_rw_explicit_task_id_requires_manual_version_alignment_md_c8c_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-project-management-kanban-fr-br-br-061-rw-explicit-task-id-requires-manual-version-alignment-md-c8c.json
var site_docs_project_management_kanban_fr_br_br_061_rw_explicit_task_id_requires_manual_version_alignment_md_c8c_namespaceObject = JSON.parse('{"id":"project-management/kanban/fr-br/BR-061-rw-explicit-task-id-requires-manual-version-alignment","title":"Bug Report BR-061 — RW explicit E:S:T still fails Step 1 when version.py epic ≠ branch epic","description":"Status: COMPLETE","source":"@site/../docs/project-management/kanban/fr-br/BR-061-rw-explicit-task-id-requires-manual-version-alignment.md","sourceDirName":"project-management/kanban/fr-br","slug":"/project-management/kanban/fr-br/BR-061-rw-explicit-task-id-requires-manual-version-alignment","permalink":"/ai-dev-kit/docs/project-management/kanban/fr-br/BR-061-rw-explicit-task-id-requires-manual-version-alignment","draft":false,"unlisted":false,"editUrl":"https://github.com/RMS-Ltd/ai-dev-kit/tree/main/docs/../docs/project-management/kanban/fr-br/BR-061-rw-explicit-task-id-requires-manual-version-alignment.md","tags":[],"version":"current","frontMatter":{"lifecycle":"evergreen","ttl_days":null,"created_at":"2026-04-02T00:00:00.000Z","expires_at":null,"housekeeping_policy":"keep"},"sidebar":"docsSidebar","previous":{"title":"Bug Report BR-060 - RW incorrectly blocks IN PROGRESS tasks","permalink":"/ai-dev-kit/docs/project-management/kanban/fr-br/BR-060-rw-in-progress-task-gate-blocks-build-releases"},"next":{"title":"Bug Report BR-061 — Task-touch SemVer PATCH bumps on every converter run","permalink":"/ai-dev-kit/docs/project-management/kanban/fr-br/BR-061-semver-task-touch-counter-increments-too-often"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ../docs/project-management/kanban/fr-br/BR-061-rw-explicit-task-id-requires-manual-version-alignment.md


const frontMatter = {
	lifecycle: 'evergreen',
	ttl_days: null,
	created_at: new Date('2026-04-02T00:00:00.000Z'),
	expires_at: null,
	housekeeping_policy: 'keep'
};
const contentTitle = 'Bug Report BR-061 — RW explicit E:S:T still fails Step 1 when version.py epic ≠ branch epic';

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
  "value": "Proposed Resolution (direction)",
  "id": "proposed-resolution-direction",
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
        id: "bug-report-br-061--rw-explicit-est-still-fails-step-1-when-versionpy-epic--branch-epic",
        children: ["Bug Report BR-061 — RW explicit ", (0,jsx_runtime.jsx)(_components.code, {
          children: "E:S:T"
        }), " still fails Step 1 when ", (0,jsx_runtime.jsx)(_components.code, {
          children: "version.py"
        }), " epic ≠ branch epic"]
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Status:"
      }), " COMPLETE", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Priority:"
      }), " CRITICAL", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Severity:"
      }), " CRITICAL — ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "resolved:"
      }), " explicit requested ", (0,jsx_runtime.jsx)(_components.code, {
        children: "E:S:T"
      }), " now supports pre-Step-2 reconciliation without manual ", (0,jsx_runtime.jsx)(_components.code, {
        children: "version.py"
      }), " alignment, while cross-epic and intent guardrails remain blocking.", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Created:"
      }), " 2026-04-02", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Last updated:"
      }), " 2026-04-10 — ", (0,jsx_runtime.jsxs)(_components.strong, {
        children: ["RW E02:S01", ":T12"]
      }), " ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "v0.2.1.12+3"
      }), " (SemVer ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "v0.4.723+3"
      }), "): release-anchor refresh and traceability synchronization after explicit-task ", (0,jsx_runtime.jsx)(_components.code, {
        children: "--art"
      }), " run.", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Version:"
      }), " v0.2.1.12+3", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Code:"
      }), " BR-061", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Implementing Task:"
      }), " ", (0,jsx_runtime.jsxs)(_components.a, {
        href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-02/story-01-rw-agent-execution-and-docs/T12-rw-explicit-task-id-version-alignment-br061",
        children: ["E02:S01", ":T12"]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "problem-statement",
      children: "Problem Statement"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A user running Release Workflow with an ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "explicit task identifier"
      }), " (e.g. ", (0,jsx_runtime.jsx)(_components.code, {
        children: "RW E02:S01:T09"
      }), ") reasonably expects that to be ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "sufficient intent"
      }), " to proceed: the workflow should release work for that Epic/Story/Task on the current epic branch."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Instead, ", (0,jsx_runtime.jsxs)(_components.strong, {
        children: ["Step 1 (", (0,jsx_runtime.jsx)(_components.code, {
          children: "validate_branch_context.py --strict"
        }), ")"]
      }), " can fail when ", (0,jsx_runtime.jsx)(_components.code, {
        children: "src/fynd_deals/version.py"
      }), " still reflects a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "different epic"
      }), " (e.g. ", (0,jsx_runtime.jsx)(_components.code, {
        children: "0.7.x.x+…"
      }), " while on ", (0,jsx_runtime.jsx)(_components.code, {
        children: "epic/2-…"
      }), "). The user must ", (0,jsx_runtime.jsxs)(_components.strong, {
        children: ["manually edit ", (0,jsx_runtime.jsx)(_components.code, {
          children: "version.py"
        })]
      }), " (or switch branches and reconcile state) before RW can run—extra steps that ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "duplicate"
      }), " what Step 2 (version bump) is supposed to do."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["This turns a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "standardized, agent-driven RW"
      }), " into ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "manual prerequisite work"
      }), ", increasing friction versus doing steps by hand."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "current-fault",
      children: "Current Fault"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Branch safety validation compares ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "branch epic"
        }), " to ", (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "VERSION_EPIC"
          })
        }), " in ", (0,jsx_runtime.jsx)(_components.code, {
          children: "version.py"
        }), " ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "before"
        }), " RW has applied the user’s explicit ", (0,jsx_runtime.jsx)(_components.code, {
          children: "E:S:T"
        }), " intent to the version file."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["There is ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "no first-class path"
        }), " where explicit ", (0,jsx_runtime.jsx)(_components.code, {
          children: "RW E02:S01:T09"
        }), " ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "authoritatively reconciles"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "version.py"
        }), " to Epic 2 (or prompts for a ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "single"
        }), " confirmable auto-fix) ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "before"
        }), " Step 1 fails."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "SemVer monotonicity"
        }), " is already handled separately (registry / ", (0,jsx_runtime.jsx)(_components.code, {
          children: "task_touch"
        }), "); internal coordinate changes when switching epics are ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "expected"
        }), " and should not force users to become “version mechanics” before Step 1."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "expected-behavior",
      children: "Expected Behavior"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["When the user supplies ", (0,jsx_runtime.jsxs)(_components.strong, {
        children: ["explicit ", (0,jsx_runtime.jsx)(_components.code, {
          children: "E:S:T"
        })]
      }), " in the RW trigger:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Either"
        }), " RW ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "aligns"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "version.py"
        }), " to match ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "requested"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "E:S:T"
        }), " (and branch epic) as part of the workflow ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "before"
        }), " Step 1 validation, with clear logging, ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "or"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Step 1 ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "does not hard-fail"
        }), " on epic mismatch in this mode; instead RW performs a ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "single"
        }), " safe reconciliation step (with confirmation only when ambiguous)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Non-negotiable: ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "wrong-branch / cross-epic contamination"
      }), " protections must remain; the fix should reduce ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "false friction"
      }), ", not safety."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "impact",
      children: "Impact"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Blocked RW runs"
        }), " despite valid user intent and correct branch choice after switching epic work."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Trust erosion"
        }), " in standardized workflows: if ", (0,jsx_runtime.jsx)(_components.code, {
          children: "RW E:S:T"
        }), " is not “one instruction,” adoption drops."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Repeated support burden"
        }), " (“why did Step 1 fail?”) for a normal epic switch (", (0,jsx_runtime.jsx)(_components.code, {
          children: "0.7…"
        }), " → ", (0,jsx_runtime.jsx)(_components.code, {
          children: "0.2…"
        }), ")."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "reproduction",
      children: "Reproduction"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Be on an epic branch (e.g. ", (0,jsx_runtime.jsx)(_components.code, {
          children: "epic/2-harden-rw-reliability"
        }), ")."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Leave ", (0,jsx_runtime.jsx)(_components.code, {
          children: "version.py"
        }), " at a ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "different"
        }), " epic (e.g. ", (0,jsx_runtime.jsx)(_components.code, {
          children: "0.7.6.17+1"
        }), ")."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Run: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "RW E02:S01:T09"
        }), " (explicit task)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Observe ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Step 1"
        }), " failure: version epic does not match branch epic."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "proposed-resolution-direction",
      children: "Proposed Resolution (direction)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Extend RW agent execution / ordering so ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "explicit task id"
        }), " is treated as ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "authoritative input"
        }), " for version coordinate selection ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "before"
        }), " strict branch/version consistency checks, ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "or"
        }), " introduce a ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "single"
        }), " “apply alignment” gate."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Document the behavior in ", (0,jsx_runtime.jsx)(_components.code, {
          children: "release-workflow-agent-execution.md"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".cursorrules"
        }), " RW trigger section."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Add regression coverage for “epic switch + explicit E:S", ":T", "” so this does not regress."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "related",
      children: "Related"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "packages/frameworks/workflow-mgt/scripts/validation/validate_branch_context.py"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "RW Step 2 (version bump) ordering vs Step 1"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "docs/architecture/standards-and-adrs/dev-kit-versioning-policy.md"
        }), " (internal vs SemVer)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "BR-038"
        }), " (RW micromanagement / friction umbrella)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "BR-056"
        }), " (task intent guardrails — must compose safely with any fix)"]
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