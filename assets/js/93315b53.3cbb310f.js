"use strict";
(self["webpackChunkportal"] = self["webpackChunkportal"] || []).push([["89131"], {
94884(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_project_management_kanban_fr_br_br_056_rw_ambiguous_task_identifier_typo_risk_md_933_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-project-management-kanban-fr-br-br-056-rw-ambiguous-task-identifier-typo-risk-md-933.json
var site_docs_project_management_kanban_fr_br_br_056_rw_ambiguous_task_identifier_typo_risk_md_933_namespaceObject = JSON.parse('{"id":"project-management/kanban/fr-br/BR-056-rw-ambiguous-task-identifier-typo-risk","title":"Bug Report BR-056: RW Accepts Ambiguous Task Identifier Without Validation (Typo Risk)","description":"Bug ID: BR-056","source":"@site/../docs/project-management/kanban/fr-br/BR-056-rw-ambiguous-task-identifier-typo-risk.md","sourceDirName":"project-management/kanban/fr-br","slug":"/project-management/kanban/fr-br/BR-056-rw-ambiguous-task-identifier-typo-risk","permalink":"/ai-dev-kit/docs/project-management/kanban/fr-br/BR-056-rw-ambiguous-task-identifier-typo-risk","draft":false,"unlisted":false,"editUrl":"https://github.com/RMS-Ltd/ai-dev-kit/tree/main/docs/../docs/project-management/kanban/fr-br/BR-056-rw-ambiguous-task-identifier-typo-risk.md","tags":[],"version":"current","frontMatter":{"lifecycle":"evergreen","ttl_days":null,"created_at":"2026-03-18T00:00:00.000Z","expires_at":null,"housekeeping_policy":"keep"},"sidebar":"docsSidebar","previous":{"title":"Bug Report: Missing Implementation Cycle Workflow (ICW)","permalink":"/ai-dev-kit/docs/project-management/kanban/fr-br/BR-055-missing-implementation-cycle-workflow-icw"},"next":{"title":"BR-057: fr-br-intake.yml invalid workflow YAML (block scalar indentation)","permalink":"/ai-dev-kit/docs/project-management/kanban/fr-br/BR-057-fr-br-intake-workflow-yaml-block-scalar-indentation"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ../docs/project-management/kanban/fr-br/BR-056-rw-ambiguous-task-identifier-typo-risk.md


const frontMatter = {
	lifecycle: 'evergreen',
	ttl_days: null,
	created_at: new Date('2026-03-18T00:00:00.000Z'),
	expires_at: null,
	housekeeping_policy: 'keep'
};
const contentTitle = 'Bug Report BR-056: RW Accepts Ambiguous Task Identifier Without Validation (Typo Risk)';

const assets = {

};



const toc = [{
  "value": "Bug Summary",
  "id": "bug-summary",
  "level": 2
}, {
  "value": "Problem Description",
  "id": "problem-description",
  "level": 2
}, {
  "value": "Observed Behavior",
  "id": "observed-behavior",
  "level": 3
}, {
  "value": "Risk",
  "id": "risk",
  "level": 3
}, {
  "value": "Root Cause",
  "id": "root-cause",
  "level": 3
}, {
  "value": "Proposed Solutions",
  "id": "proposed-solutions",
  "level": 2
}, {
  "value": "Option A: Context-Aware Validation (Bug Fix)",
  "id": "option-a-context-aware-validation-bug-fix",
  "level": 3
}, {
  "value": "Option B: Canonical Format Enforcement (UX)",
  "id": "option-b-canonical-format-enforcement-ux",
  "level": 3
}, {
  "value": "Option C: Pre-Commit Summary (UX)",
  "id": "option-c-pre-commit-summary-ux",
  "level": 3
}, {
  "value": "Recommendation",
  "id": "recommendation",
  "level": 3
}, {
  "value": "Acceptance Criteria",
  "id": "acceptance-criteria",
  "level": 2
}, {
  "value": "Fixed (verified)",
  "id": "fixed-verified",
  "level": 3
}, {
  "value": "Attempted resolution (implementation complete; verify manually)",
  "id": "attempted-resolution-implementation-complete-verify-manually",
  "level": 3
}, {
  "value": "References",
  "id": "references",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    br: "br",
    code: "code",
    h1: "h1",
    h2: "h2",
    h3: "h3",
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
        id: "bug-report-br-056-rw-accepts-ambiguous-task-identifier-without-validation-typo-risk",
        children: "Bug Report BR-056: RW Accepts Ambiguous Task Identifier Without Validation (Typo Risk)"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bug ID:"
      }), " BR-056\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Task ID:"
      }), " E06:S06", ":T56", "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Priority:"
      }), " HIGH\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Severity:"
      }), " MEDIUM (wrong attribution, requires manual rollback)\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Status:"
      }), " VERIFIED_FIXED"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Implementing Task:"
      }), " ", (0,jsx_runtime.jsxs)(_components.a, {
        href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-06/story-06-feature-requests/T56-rw-ambiguous-task-identifier-typo-risk",
        children: ["E06:S06", ":T56"]
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Historical registry:"
      }), " E2", ":S01", " intent guard\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Created:"
      }), " 2026-03-18\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Classification:"
      }), " Bug + UX gap"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "bug-summary",
      children: "Bug Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsxs)(_components.strong, {
        children: ["RW executes with user-supplied task identifiers (e.g. ", (0,jsx_runtime.jsx)(_components.code, {
          children: "RW E07S05T01"
        }), ") without validating or confirming them."]
      }), " A single-digit typo (e.g. ", (0,jsx_runtime.jsx)(_components.code, {
        children: "E07S05T01"
      }), " instead of ", (0,jsx_runtime.jsx)(_components.code, {
        children: "E07S06T01"
      }), ") causes attribution to the wrong task (E07:S05", ":T01", " instead of E07:S06", ":T01", "), producing an incorrect version bump, changelog, kanban update, and commit. RW should have detected the mismatch or prompted for confirmation."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "problem-description",
      children: "Problem Description"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "observed-behavior",
      children: "Observed Behavior"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["User typed ", (0,jsx_runtime.jsx)(_components.code, {
          children: "RW E07S05T01"
        }), " (intended: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "RW E07S06T01"
        }), " – Story 6, Task 1)"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "RW executed without validation or confirmation"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["RW attributed release to E07:S05", ":T01", " (UXR-001) instead of E07:S06", ":T01", " (Windsurf artifact cleanup)"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Version bumped to 0.7.5.1+1; Story 5 updated; wrong changelog entry"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Required manual ", (0,jsx_runtime.jsx)(_components.code, {
          children: "git reset --hard HEAD~1"
        }), " to rollback"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "risk",
      children: "Risk"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Single-digit typos"
        }), " (S5 vs S6, T1 vs T2) are easy to make and hard to spot"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "No context check:"
        }), " Current version was 0.7.6.1+1 (Story 6); user intent was likely Story 6. RW did not flag that the requested task (E07:S05", ":T01", ") differed from current version context (E07:S06", ":T01", ")"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Silent wrong attribution:"
        }), " Commits and changelog are polluted; rollback loses other work if not caught immediately"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "root-cause",
      children: "Root Cause"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "No validation of user-supplied task identifiers against current version/branch context"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "No confirmation step when identifier differs from \"most likely\" (e.g. current story)"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Short formats (", (0,jsx_runtime.jsx)(_components.code, {
          children: "E07S05T01"
        }), ") are ambiguous – S5 vs S6 is one character"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "proposed-solutions",
      children: "Proposed Solutions"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "option-a-context-aware-validation-bug-fix",
      children: "Option A: Context-Aware Validation (Bug Fix)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["When user supplies ", (0,jsx_runtime.jsx)(_components.code, {
          children: "RW E07S05T01"
        }), " (or similar), parse to E07:S05", ":T01"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Compare to current ", (0,jsx_runtime.jsx)(_components.code, {
          children: "VERSION_EPIC.STORY.TASK"
        }), " from version.py"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["If mismatch (e.g. requested S05, current S06): ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "warn and ask for confirmation"
        }), " before proceeding"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Example: \"You requested E07:S05", ":T01", ". Current version is E07:S06", ":T01", ". Did you mean E07:S06", ":T01", "? (yes/no)\""]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "option-b-canonical-format-enforcement-ux",
      children: "Option B: Canonical Format Enforcement (UX)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Require explicit format: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "RW E07:S06:T01"
        }), " (with colons) to reduce parsing ambiguity"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Reject or prompt on shorthand that could parse multiple ways"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "option-c-pre-commit-summary-ux",
      children: "Option C: Pre-Commit Summary (UX)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Before Step 10 (commit), display: \"About to commit as E07:S05", ":T01", ". Confirm? (yes/no)\""]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Gives user one last chance to catch typo"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "recommendation",
      children: "Recommendation"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Implement ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Option A"
      }), " as primary fix; consider ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Option C"
      }), " as defense-in-depth."]
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
        }), " ", "RW detects when user-supplied task identifier differs from current version's Epic/Story/Task (", (0,jsx_runtime.jsx)(_components.code, {
          children: "validate_rw_task_intent.py"
        }), "; story/epic mismatch blocks)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "RW prompts for confirmation path: agent ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "RW ABORTED"
        }), " on validator exit 1; resume with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "--confirmed-override"
        }), " after explicit user confirm (", (0,jsx_runtime.jsx)(_components.code, {
          children: ".cursorrules"
        }), " Step 1b)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "Documentation updated: ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".cursorrules"
        }), ", packaged RW trigger template, ", (0,jsx_runtime.jsx)(_components.code, {
          children: "release-workflow-agent-execution.md"
        }), " Step 1.5"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "Regression scenarios: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "run_validate_rw_task_intent_scenarios.sh"
        }), " (story typo, new-task T999 vs T998, ", (0,jsx_runtime.jsx)(_components.code, {
          children: "RW -k"
        }), " exemption)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "User verification (2026-03-25):"
      }), " On ", (0,jsx_runtime.jsx)(_components.code, {
        children: "epic/7-codebase-maintenance"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "RW E07S05T01"
      }), " with ", (0,jsx_runtime.jsx)(_components.code, {
        children: "version.py"
      }), " at E07:S06", ":T17", " — Step 1b abort (story mismatch / BR-056). On same branch, ", (0,jsx_runtime.jsx)(_components.code, {
        children: "RW E06S06T56"
      }), " — Step 1b abort (epic mismatch). Guard behaves as designed."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "fixed-verified",
      children: "Fixed (verified)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "BR-056:"
        }), " RW task-intent validation blocks wrong story and wrong epic before Step 2 file edits; ", (0,jsx_runtime.jsx)(_components.code, {
          children: "RW -k"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "--confirmed-override"
        }), " paths documented."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "attempted-resolution-implementation-complete-verify-manually",
      children: "Attempted resolution (implementation complete; verify manually)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Script:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "packages/frameworks/workflow-mgt/scripts/validation/validate_rw_task_intent.py"
        }), " — compares parsed ", (0,jsx_runtime.jsx)(_components.code, {
          children: "--requested"
        }), " id to ", (0,jsx_runtime.jsx)(_components.code, {
          children: "version.py"
        }), "; ", (0,jsx_runtime.jsx)(_components.code, {
          children: "--mode rw-k"
        }), "; ", (0,jsx_runtime.jsx)(_components.code, {
          children: "--confirmed-override"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Rules:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".cursorrules"
        }), " Step 1b; exception to continuous execution when guard fails."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Template:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "packages/frameworks/workflow-mgt/cursorrules-rw-trigger-section.md"
        }), " (adopters)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Guide:"
        }), " Step 1.5 in ", (0,jsx_runtime.jsx)(_components.code, {
          children: "release-workflow-agent-execution.md"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "UKW parser fix:"
        }), " removed duplicate empty ", (0,jsx_runtime.jsx)(_components.code, {
          children: "normalize_task_id"
        }), " stub in ", (0,jsx_runtime.jsx)(_components.code, {
          children: "ukw_syntax_parser.py"
        }), " (blocked imports)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "references",
      children: "References"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Incident:"
        }), " 2026-03-18 – User typo ", (0,jsx_runtime.jsx)(_components.code, {
          children: "E07S05T01"
        }), " for ", (0,jsx_runtime.jsx)(_components.code, {
          children: "E07S06T01"
        }), "; rollback via ", (0,jsx_runtime.jsx)(_components.code, {
          children: "git reset --hard HEAD~1"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Related:"
        }), " FR-060 (RW task argument requirement), FR-048 (RW trigger extensions)"]
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