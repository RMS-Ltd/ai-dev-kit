"use strict";
(self["webpackChunkportal"] = self["webpackChunkportal"] || []).push([["52681"], {
76621(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_project_management_kanban_fr_br_br_070_rw_k_stage_files_completeness_gap_allows_partial_kanban_commit_md_d4c_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-project-management-kanban-fr-br-br-070-rw-k-stage-files-completeness-gap-allows-partial-kanban-commit-md-d4c.json
var site_docs_project_management_kanban_fr_br_br_070_rw_k_stage_files_completeness_gap_allows_partial_kanban_commit_md_d4c_namespaceObject = JSON.parse('{"id":"project-management/kanban/fr-br/BR-070-rw-k-stage-files-completeness-gap-allows-partial-kanban-commit","title":"Bug Report BR-070: RW-k Stage Files completeness gap allows partial Kanban commit","description":"Status: CLOSED (all ACs complete as of 2026-05-15)","source":"@site/../docs/project-management/kanban/fr-br/BR-070-rw-k-stage-files-completeness-gap-allows-partial-kanban-commit.md","sourceDirName":"project-management/kanban/fr-br","slug":"/project-management/kanban/fr-br/BR-070-rw-k-stage-files-completeness-gap-allows-partial-kanban-commit","permalink":"/ai-dev-kit/docs/project-management/kanban/fr-br/BR-070-rw-k-stage-files-completeness-gap-allows-partial-kanban-commit","draft":false,"unlisted":false,"editUrl":"https://github.com/RMS-Ltd/ai-dev-kit/tree/main/docs/../docs/project-management/kanban/fr-br/BR-070-rw-k-stage-files-completeness-gap-allows-partial-kanban-commit.md","tags":[],"version":"current","frontMatter":{"lifecycle":"evergreen","ttl_days":null,"created_at":"2026-04-22T00:00:00.000Z","expires_at":null,"housekeeping_policy":"keep"},"sidebar":"docsSidebar","previous":{"title":"Bug Report BR-069: kboard row-footer timestamp overwrite and task-ID multiplication regression","permalink":"/ai-dev-kit/docs/project-management/kanban/fr-br/BR-069-kboard-fbuboard-earliest-last-modified-timestamps-overwritten"},"next":{"title":"Bug Report BR-071: RW trigger routing not executing from chat session","permalink":"/ai-dev-kit/docs/project-management/kanban/fr-br/BR-071-rw-trigger-routing-not-executing-from-chat-session"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ../docs/project-management/kanban/fr-br/BR-070-rw-k-stage-files-completeness-gap-allows-partial-kanban-commit.md


const frontMatter = {
	lifecycle: 'evergreen',
	ttl_days: null,
	created_at: new Date('2026-04-22T00:00:00.000Z'),
	expires_at: null,
	housekeeping_policy: 'keep'
};
const contentTitle = 'Bug Report BR-070: RW-k Stage Files completeness gap allows partial Kanban commit';

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
  "value": "Scope / Affected Areas",
  "id": "scope--affected-areas",
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
    blockquote: "blockquote",
    br: "br",
    code: "code",
    em: "em",
    h1: "h1",
    h2: "h2",
    header: "header",
    hr: "hr",
    input: "input",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "bug-report-br-070-rw-k-stage-files-completeness-gap-allows-partial-kanban-commit",
        children: "Bug Report BR-070: RW-k Stage Files completeness gap allows partial Kanban commit"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Status:"
      }), " CLOSED (all ACs complete as of 2026-05-15)", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Priority:"
      }), " HIGH", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Severity:"
      }), " HIGH", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Created:"
      }), " 2026-04-22", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Last updated:"
      }), " 2026-05-15 (AC4 closed by E02:S01", ":T18", ")", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Version:"
      }), " N/A", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Code:"
      }), " BR-070"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Implementing Task:"
      }), " ", (0,jsx_runtime.jsxs)(_components.a, {
        href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-02/story-01-rw-agent-execution-and-docs/T18-rw-step-8-stage-completeness-guardrails-br070",
        children: ["E02:S01", ":T18"]
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Closure gated on:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/project-management/kanban/fr-br/FR-092-canonical-rw-ukw-kanban-consistency-program",
        children: "FR-092 — Canonical RW/UKW kanban consistency program (meta)"
      }), " / ", (0,jsx_runtime.jsxs)(_components.a, {
        href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-02/story-15-ipw-governance-and-publication-contract/T07-canonical-rw-ukw-kanban-consistency-program-fr092",
        children: ["E02:S15", ":T07"]
      }), " Wave 5 + Wave 8"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Gating note (2026-04-27):"
        }), " Stage completeness invariant (Step-8 stage-set parity) is owned end-to-end by FR-092 Bucket C2 + Wave 5. The ", (0,jsx_runtime.jsx)(_components.code, {
          children: "validate_rw_step7_completeness.py"
        }), " validator and Step-8 enforcement are deliverables of FR-092 Wave 5; final BR-070 closure is gated on those artifacts shipping under FR-092 sign-off."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Wave 5 progress (2026-04-27):"
        }), " Validator implemented at ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/packages/frameworks/workflow-mgt/scripts/validate_rw_step7_completeness.py",
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "validate_rw_step7_completeness.py"
          })
        }), " with 9 unit tests (all green) at ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/packages/frameworks/workflow-mgt/scripts/test_validate_rw_step7_completeness.py",
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "test_validate_rw_step7_completeness.py"
          })
        }), "; Step 8 in ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/packages/frameworks/workflow-mgt/KB/Documentation/Developer_Docs/vwmp/release-workflow-agent-execution.md",
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "release-workflow-agent-execution.md"
          })
        }), " extended with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "stage_set_completeness"
        }), " enforcement block. AC1–AC5 drafted satisfied below; final closure still gated on Wave 8 RW dry-run."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Wave 7 + Wave 8 sign-off (2026-04-27):"
        }), " Stage-set completeness is composed into the FR-092 Wave 7 release-readiness gate as Gate 5 in ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/packages/frameworks/workflow-mgt/scripts/validate_release_readiness.py",
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "validate_release_readiness.py"
          })
        }), "; wired into RW Step 10 (Run Validators) via ", (0,jsx_runtime.jsx)(_components.code, {
          children: "release_readiness_gate.blocking: true"
        }), ". Wave 8 live demonstration: against the in-progress repo state with 12 unstaged FR-092 Wave 0-7 artefacts, Gate 5 returned exit 1 with per-path diagnostics naming every modified-unstaged and untracked Step-7 output, blocking RW commit — exactly the contracted behavior. ", (0,jsx_runtime.jsxs)(_components.strong, {
          children: ["AC1, AC2, AC3, AC5 closed; AC4 (post-commit verification) deferred to live RW E02:S15", ":T07", " --art (Wave 8 terminal)."]
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "AC4 closure (2026-05-15):"
        }), " Post-commit verification validator ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/packages/frameworks/workflow-mgt/scripts/validate_rw_step7_post_commit.py",
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "validate_rw_step7_post_commit.py"
          })
        }), " implemented under ", (0,jsx_runtime.jsxs)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-02/story-01-rw-agent-execution-and-docs/T18-rw-step-8-stage-completeness-guardrails-br070",
          children: ["E02:S01", ":T18"]
        }), " with 8 unit tests (all green). Validator runs after ", (0,jsx_runtime.jsx)(_components.code, {
          children: "git commit"
        }), " (RW Step 11) and before ", (0,jsx_runtime.jsx)(_components.code, {
          children: "git tag"
        }), " (Step 12), proving the release commit contains every Step-7 output. RW execution guide updated with Step 11.5 documentation; ", (0,jsx_runtime.jsx)(_components.code, {
          children: "release-workflow.yaml"
        }), " updated with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "step-10.5"
        }), ". ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "All BR-070 ACs now closed."
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "problem-statement",
      children: "Problem Statement"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "RW -k"
      }), " intends scoped Kanban release behavior for the requested task slice, and Step 8 policy requires staging all modified files (", (0,jsx_runtime.jsx)(_components.code, {
        children: "git add -A"
      }), " / ", (0,jsx_runtime.jsx)(_components.code, {
        children: "git.stage_all"
      }), "). In practice, a partial manual staging path can still pass validators and create a release commit that omits Step 7 outputs."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Observed failure mode: Step 7 (", (0,jsx_runtime.jsx)(_components.code, {
        children: "update_kanban_docs.py --mode kanban_init"
      }), ") modified task-adjacent Kanban files (including ", (0,jsx_runtime.jsx)(_components.code, {
        children: "kboard.md"
      }), " and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "epic-02.md"
      }), "), but those files were not staged into the release commit while other release files were committed and pushed."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "expected-behavior",
      children: "Expected Behavior"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["If Step 7 modifies files, Step 8 must stage ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "all Step-7 outputs"
        }), " before commit."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "RW -k"
        }), " must fail fast if task-scoped Kanban artifacts touched by Step 7 remain unstaged."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Post-commit verification must prove no Step-7 output file was omitted."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "observed-behavior",
      children: "Observed Behavior"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Release commit succeeded with a subset of modified files."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Two Step-7 output files remained as local unstaged drift after push."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Existing validators did not block this partial commit scenario."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "scope--affected-areas",
      children: "Scope / Affected Areas"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "packages/frameworks/workflow-mgt/KB/Documentation/Developer_Docs/vwmp/release-workflow-agent-execution.md"
        }), " (Step 8 enforcement clarity + Step 11.5 post-commit verification)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "packages/frameworks/workflow-mgt/workflows/release-workflow/release-workflow.yaml"
        }), " (step contract / handlers)"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Step-8 staging behavior and validator gates around staged-vs-modified set parity"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "RW -k"
        }), " scoped Kanban release reliability for task-associated docs (", (0,jsx_runtime.jsx)(_components.code, {
          children: "Story"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Epic"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "kboard"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "fbuboard"
        }), ")"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Post-commit verification validator (", (0,jsx_runtime.jsx)(_components.code, {
          children: "validate_rw_step7_post_commit.py"
        }), ")"]
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
        }), " ", "Step 8 enforces stage completeness invariant: no modified Step-7 output remains unstaged at commit boundary. ", (0,jsx_runtime.jsx)(_components.em, {
          children: "(Wave 5: validator + Step 8 doc enforcement)"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "RW -k"
        }), " has task-slice must-include checks for touched Kanban artifacts produced by Step 7. ", (0,jsx_runtime.jsx)(_components.em, {
          children: "(Wave 5: four-surface report drives the must-include set)"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "Run aborts with explicit missing-file diagnostics if staging set is incomplete. ", (0,jsx_runtime.jsx)(_components.em, {
          children: "(Wave 5: validator returns exit 1 with per-path diagnostics + recovery guidance)"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "Post-commit verification asserts staged/committed files cover Step-7 output set. ", (0,jsx_runtime.jsxs)(_components.em, {
          children: ["(Closed 2026-05-15: ", (0,jsx_runtime.jsx)(_components.code, {
            children: "validate_rw_step7_post_commit.py"
          }), " with 8 tests; RW Step 11.5; ", (0,jsx_runtime.jsx)(_components.code, {
            children: "release-workflow.yaml"
          }), " step-10.5)"]
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "Regression tests reproduce and block partial-stage omission for ", (0,jsx_runtime.jsx)(_components.code, {
          children: "RW -k"
        }), ". ", (0,jsx_runtime.jsxs)(_components.em, {
          children: ["(Wave 5: 9-case suite in ", (0,jsx_runtime.jsx)(_components.code, {
            children: "test_validate_rw_step7_completeness.py"
          }), ", including the original partial-stage failure mode; plus 8-case post-commit suite in ", (0,jsx_runtime.jsx)(_components.code, {
            children: "test_validate_rw_step7_post_commit.py"
          }), ")"]
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "related",
      children: "Related"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/fr-br/BR-069-kboard-fbuboard-earliest-last-modified-timestamps-overwritten",
          children: "BR-069"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/fr-br/FR-090-ukw-canonical-row-transform-engine-and-board-specific-rendering-contracts",
          children: "FR-090"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsxs)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-02/story-01-rw-agent-execution-and-docs",
          children: ["Story E2", ":S01"]
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