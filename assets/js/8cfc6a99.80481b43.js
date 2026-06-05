"use strict";
(self["webpackChunkportal"] = self["webpackChunkportal"] || []).push([["91077"], {
86528(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_project_management_kanban_fr_br_fr_058_markdown_maintenance_workflow_md_8cf_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-project-management-kanban-fr-br-fr-058-markdown-maintenance-workflow-md-8cf.json
var site_docs_project_management_kanban_fr_br_fr_058_markdown_maintenance_workflow_md_8cf_namespaceObject = JSON.parse('{"id":"project-management/kanban/fr-br/FR-058-markdown-maintenance-workflow","title":"Feature Request: Markdown Maintenance Workflow (MMW)","description":"Type: Feature Request (FR)","source":"@site/../docs/project-management/kanban/fr-br/FR-058-markdown-maintenance-workflow.md","sourceDirName":"project-management/kanban/fr-br","slug":"/project-management/kanban/fr-br/FR-058-markdown-maintenance-workflow","permalink":"/ai-dev-kit/docs/project-management/kanban/fr-br/FR-058-markdown-maintenance-workflow","draft":false,"unlisted":false,"editUrl":"https://github.com/RMS-Ltd/ai-dev-kit/tree/main/docs/../docs/project-management/kanban/fr-br/FR-058-markdown-maintenance-workflow.md","tags":[],"version":"current","frontMatter":{"lifecycle":"proposed","ttl_days":null,"created_at":"2026-03-15T17:55:00.000Z","expires_at":null,"housekeeping_policy":"keep"},"sidebar":"docsSidebar","previous":{"title":"Feature Request: Update Changelog Workflow (UCW)","permalink":"/ai-dev-kit/docs/project-management/kanban/fr-br/FR-057-update-changelog-workflow"},"next":{"title":"FR-059: Enhanced Workflow Logging System with Forensic Capabilities and Rollback Hardening","permalink":"/ai-dev-kit/docs/project-management/kanban/fr-br/FR-059-enhanced-workflow-logging-system"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ../docs/project-management/kanban/fr-br/FR-058-markdown-maintenance-workflow.md


const frontMatter = {
	lifecycle: 'proposed',
	ttl_days: null,
	created_at: new Date('2026-03-15T17:55:00.000Z'),
	expires_at: null,
	housekeeping_policy: 'keep'
};
const contentTitle = 'Feature Request: Markdown Maintenance Workflow (MMW)';

const assets = {

};



const toc = [{
  "value": "Summary",
  "id": "summary",
  "level": 2
}, {
  "value": "Problem Statement",
  "id": "problem-statement",
  "level": 2
}, {
  "value": "Goals / Responsibilities",
  "id": "goals--responsibilities",
  "level": 2
}, {
  "value": "Proposed Scope",
  "id": "proposed-scope",
  "level": 2
}, {
  "value": "Acceptance Criteria",
  "id": "acceptance-criteria",
  "level": 2
}, {
  "value": "Dependencies &amp; References",
  "id": "dependencies--references",
  "level": 2
}, {
  "value": "Next Steps",
  "id": "next-steps",
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
        id: "feature-request-markdown-maintenance-workflow-mmw",
        children: "Feature Request: Markdown Maintenance Workflow (MMW)"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Type:"
      }), " Feature Request (FR)", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Submitted:"
      }), " 2026-03-15", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Submitted By:"
      }), " AI Assistant (per user directive)", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Priority:"
      }), " HIGH", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Status:"
      }), " PROPOSED"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Implementing Task:"
      }), " ", (0,jsx_runtime.jsxs)(_components.a, {
        href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-07/story-01-codebase-maintenance-tasks/T05-markdown-maintenance-perpetual-task",
        children: ["E07:S01", ":T05"]
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Historical registry:"
      }), " FR-058 vs perpetual T05"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Establish a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Markdown Maintenance Workflow (MMW)"
      }), " that automatically engages whenever Release Workflow (RW) validations fail due to markdownlint or terminology issues. MMW provides a deterministic path to triage, batch, and resolve documentation lint debt without derailing active releases, while ensuring new regressions are blocked immediately."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "problem-statement",
      children: "Problem Statement"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "RW validators currently scan the entire repository and report ~2,300 legacy markdown/terminology issues, even when the current change set is compliant."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Without a structured maintenance workflow, each release devolves into ad-hoc cleanup attempts, or the validator is disabled entirely—both outcomes erode governance."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["The existing perpetual markdown maintenance task (E07:S01", ":T05", ") lacks an execution framework, making it hard to demonstrate progress or provide auditable evidence."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "RW step owners have no clear decision tree for differentiating “regression introduced now” vs “legacy debt,” so releases stall indefinitely."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "goals--responsibilities",
      children: "Goals / Responsibilities"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "MMW must:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Trigger Reliably"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Automatically start when RW validators flag markdown-related failures (terminology, markdownlint, doc-style)."
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Permit manual invocation when a backlog sweep is scheduled (perpetual maintenance cycles)."
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Classify Debt vs Regression"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Compare validator findings against the git diff for the current release."
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "If new files introduced violations, block RW until fixed."
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "If failures stem from untouched files, hand off to MMW backlog execution while allowing RW to resume (with evidence attached)."
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Produce Auditable Evidence"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Checklist template stored under ", (0,jsx_runtime.jsx)(_components.code, {
              children: "docs/maintenance/logs/mmw/"
            }), "."]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Capture validator output, impacted files, remediation choice (fix now vs defer), owners, and completion timestamps."
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Feed results back into RW step logs and Kanban narrative."
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Coordinate with Perpetual Tasks"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Convert legacy batches into scoped subtasks under E07:S01", ":T05", " (Markdown Maintenance)."]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Provide progress metrics (issues resolved vs remaining) for each cycle."
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Update Documentation Policy references so lifecycle metadata stays consistent."
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Integrate with CI / Tooling"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Extend documentation validator to run in \"scoped\" mode (touched files) and \"baseline\" mode (full tree)."
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "MMW manages baseline failures, ensuring RW only blocks when scoped mode fails or when MMW evidence is missing."
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "proposed-scope",
      children: "Proposed Scope"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Author ICW-style artifacts (spec, test design, implementation plan) for MMW under ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/implementation-cycles/"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Create checklist + log template in ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/maintenance/logs/mmw/"
        }), "."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Enhance validator script to emit separate scoped/baseline sections consumable by RW + MMW."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update Release Runbook to describe when/how MMW is invoked (e.g., RW Step 8 failure path)."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["File Story Task ", (0,jsx_runtime.jsxs)(_components.strong, {
          children: ["E07:S01", ":T07", " – Markdown Maintenance Workflow"]
        }), " covering implementation + integration work."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Provide CI hook (read-only) that verifies MMW evidence for releases that proceed while legacy debt remains."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "acceptance-criteria",
      children: "Acceptance Criteria"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "RW validator distinguishes between scoped regressions and legacy baseline issues."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "When baseline issues exist, RW run logs reference the corresponding MMW checklist entry ID."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "At least one MMW maintenance cycle is documented (log + diff) demonstrating backlog reduction."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Release Runbook and Documentation Policy cite MMW as the escalation path for markdown debt."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Kanban Story E7", ":S01", " includes Task T07 with clear deliverables tied to FR-058."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "CI hook fails RW if scoped violations exist or if baseline violations lack an active MMW log entry."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "dependencies--references",
      children: "Dependencies & References"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "FR-057 / T06 (UCW)"
        }), " – Ensures changelog governance; MMW complements UCW by covering broader markdown hygiene."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsxs)(_components.strong, {
          children: ["E07:S01", ":T05"]
        }), " – Perpetual markdown maintenance task that receives structured cycles via MMW."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Documentation Policy Framework"
        }), " – Defines taxonomy, lifecycle metadata, and lint expectations that MMW enforces."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Release Workflow"
        }), " – Step 8 validators and run logs integrate MMW evidence."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "next-steps",
      children: "Next Steps"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Approve FR-058 and assign to Documentation + RW Agents."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Create Task E07:S01", ":T07", " with ICW artifacts and implementation plan."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update validator tooling + runbook to support scoped/baseline reporting and MMW hooks."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Execute first MMW cycle targeting a manageable subset of backlog files."
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