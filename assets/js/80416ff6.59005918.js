"use strict";
(self["webpackChunkportal"] = self["webpackChunkportal"] || []).push([["95847"], {
45332(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_project_management_kanban_fr_br_fr_041_perpetual_task_for_release_workflow_maintenance_md_804_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-project-management-kanban-fr-br-fr-041-perpetual-task-for-release-workflow-maintenance-md-804.json
var site_docs_project_management_kanban_fr_br_fr_041_perpetual_task_for_release_workflow_maintenance_md_804_namespaceObject = JSON.parse('{"id":"project-management/kanban/fr-br/FR-041-perpetual-task-for-release-workflow-maintenance","title":"Feature Request: Perpetual Task for Release Workflow Maintenance","description":"Type: Feature Request (FR)","source":"@site/../docs/project-management/kanban/fr-br/FR-041-perpetual-task-for-release-workflow-maintenance.md","sourceDirName":"project-management/kanban/fr-br","slug":"/project-management/kanban/fr-br/FR-041-perpetual-task-for-release-workflow-maintenance","permalink":"/ai-dev-kit/docs/project-management/kanban/fr-br/FR-041-perpetual-task-for-release-workflow-maintenance","draft":false,"unlisted":false,"editUrl":"https://github.com/RMS-Ltd/ai-dev-kit/tree/main/docs/../docs/project-management/kanban/fr-br/FR-041-perpetual-task-for-release-workflow-maintenance.md","tags":[],"version":"current","frontMatter":{"lifecycle":"evergreen","ttl_days":null,"created_at":"2026-02-22T00:00:00.000Z","expires_at":null,"housekeeping_policy":"keep"},"sidebar":"docsSidebar","previous":{"title":"Feature Request: RW Update Kanban Board on Task Completion","permalink":"/ai-dev-kit/docs/project-management/kanban/fr-br/FR-040-rw-update-kanban-board-on-task-completion"},"next":{"title":"FR-041: Windsurf: Investigate how to leverage AGENTS.md and SKILL.md for workflows","permalink":"/ai-dev-kit/docs/project-management/kanban/fr-br/FR-041-windsurf-investigate-agents-skills-for-workflows"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ../docs/project-management/kanban/fr-br/FR-041-perpetual-task-for-release-workflow-maintenance.md


const frontMatter = {
	lifecycle: 'evergreen',
	ttl_days: null,
	created_at: new Date('2026-02-22T00:00:00.000Z'),
	expires_at: null,
	housekeeping_policy: 'keep'
};
const contentTitle = 'Feature Request: Perpetual Task for Release Workflow Maintenance';

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
  "value": "Proposed Solution",
  "id": "proposed-solution",
  "level": 2
}, {
  "value": "1. Create Perpetual Task for RW/Workflow Maintenance",
  "id": "1-create-perpetual-task-for-rwworkflow-maintenance",
  "level": 3
}, {
  "value": "2. Include in Packaged Kanban Framework",
  "id": "2-include-in-packaged-kanban-framework",
  "level": 3
}, {
  "value": "3. ai-dev-kit Implementation",
  "id": "3-ai-dev-kit-implementation",
  "level": 3
}, {
  "value": "Use Cases",
  "id": "use-cases",
  "level": 2
}, {
  "value": "Acceptance Criteria",
  "id": "acceptance-criteria",
  "level": 2
}, {
  "value": "Related Work",
  "id": "related-work",
  "level": 2
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
        id: "feature-request-perpetual-task-for-release-workflow-maintenance",
        children: "Feature Request: Perpetual Task for Release Workflow Maintenance"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Type:"
      }), " Feature Request (FR)", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Submitted:"
      }), " 2026-02-22", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Submitted By:"
      }), " User", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Priority:"
      }), " HIGH", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Severity:"
      }), " N/A", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Status:"
      }), " IMPLEMENTED ✅ (E02:S16", ":T03", " v0.6.7.103+1)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Create a canonical perpetual task for Release Workflow (RW) and workflow framework maintenance work, analogous to T101 (UKW) and T102 (CMW). Include this task in the packaged Kanban framework so adopting projects receive it."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "problem-statement",
      children: "Problem Statement"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Current Situation:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["UKW has perpetual task T101 (E02:S16", ":T03", ") – UKW-triggered RWs attribute there"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["CMW has perpetual task T102 (E02:S16", ":T03", ") – CMW-triggered RWs attribute there"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "No perpetual task exists for RW/workflow framework maintenance"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Issue:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "RW maintenance work (Step 7 fixes, validator updates, doc corrections, framework hardening) is either:"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Attributed to arbitrary feature tasks (wrong semantics), or"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Requires creating one-off tasks for each fix (overhead)"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "BUILD number semantics break when RW maintenance is attributed to feature tasks"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Projects adopting the framework have no standard pattern for workflow maintenance attribution"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "proposed-solution",
      children: "Proposed Solution"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1-create-perpetual-task-for-rwworkflow-maintenance",
      children: "1. Create Perpetual Task for RW/Workflow Maintenance"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Create a perpetual maintenance task (e.g., T103 in E6", ":S07", ", or in Epic 2) for RW and workflow framework maintenance:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Task Type:"
        }), " Perpetual Maintenance"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Status:"
        }), " IN PROGRESS (never changes to COMPLETE)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Build Warning Suppression:"
        }), " Enabled"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Version Pattern:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "v0.\\{EPIC\\}.\\{STORY\\}.\\{TASK\\}+\\{N\\}"
        }), " where N = RW maintenance release count"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Attribution:"
        }), " RW maintenance releases (framework fixes, Step 7 improvements, validator updates, doc corrections) attribute here when not tied to a specific feature task"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "2-include-in-packaged-kanban-framework",
      children: "2. Include in Packaged Kanban Framework"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Add this perpetual task to the packaged Kanban framework:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Framework Templates:"
        }), " Include perpetual RW maintenance task template in ", (0,jsx_runtime.jsx)(_components.code, {
          children: "packages/frameworks/kanban/templates/"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Documentation:"
        }), " Document the pattern in framework docs and versioning policy"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Task Document:"
        }), " Template follows same structure as T101 (UKW) and T102 (CMW)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "3-ai-dev-kit-implementation",
      children: "3. ai-dev-kit Implementation"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Create the perpetual task in ai-dev-kit (source repo)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Wire RW logic if context detection is needed (e.g., \"RW maintenance\" vs \"task completion\" – or rely on manual attribution when appropriate)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "use-cases",
      children: "Use Cases"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "RW Step 7 MoSCOW Fix:"
        }), " Fix completed-task removal from MoSCOW section → attribute to perpetual RW maintenance task"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Validator Update:"
        }), " Fix or extend ", (0,jsx_runtime.jsx)(_components.code, {
          children: "validate_version_bump.py"
        }), " → attribute to perpetual task"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Workflow Doc Correction:"
        }), " Update RW execution guide, cursor rules → attribute to perpetual task"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Framework Hardening:"
        }), " Non-feature framework improvements → attribute to perpetual task"]
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
        }), " ", "Perpetual task created for RW/workflow maintenance (ai-dev-kit) ✅"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "Task document follows perpetual task pattern (T101, T102) ✅"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "Packaged Kanban framework includes template for this perpetual task ✅ (T06)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "Framework documentation updated with RW maintenance perpetual task pattern ✅"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Pattern documented for adoption across projects"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "related-work",
      children: "Related Work"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsxs)(_components.strong, {
          children: ["E02:S16", ":T03"]
        }), " – Release Workflow Maintenance Perpetual Task (this task)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsxs)(_components.strong, {
          children: ["E02:S16", ":T03"]
        }), " – UKW Perpetual Task (pattern reference)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsxs)(_components.strong, {
          children: ["E02:S16", ":T03"]
        }), " – CMW Perpetual Task (pattern reference)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "FR-026"
        }), " – Canonical Perpetual Task for Changelog Maintenance (similar pattern)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Epic 2"
        }), " – Workflow Management Framework (RW package owner)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Epic 6"
        }), " – Framework Management and Maintenance (UKW/CMW perpetual tasks)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsxs)(_components.strong, {
          children: ["FR-067 ", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ai-dev-kit/docs/project-management/kanban/fr-br/FR-067-docusaurus-production-build-corpus-triage",
            children: "FU-2"
          })]
        }), " – Docusaurus/corpus work is still released via ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "RW"
        }), "; ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "GitHub Releases"
        }), " for SemVer tags (", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Step 12.5"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "create_github_release.py"
        }), ") are traced to ", (0,jsx_runtime.jsxs)(_components.strong, {
          children: ["E02:S16", ":T03"]
        }), " (this FR), not as a standalone portal task."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "references",
      children: "References"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "UKW Perpetual Task:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/project-management/kanban/epics/epic-02/story-16-perpetual-ongoing-workflow-operations/T03-rehouse-workflow-perpetual-tasks-and-harden-guardrails.md"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "CMW Perpetual Task:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/project-management/kanban/epics/epic-02/story-16-perpetual-ongoing-workflow-operations/T03-rehouse-workflow-perpetual-tasks-and-harden-guardrails.md"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Kanban Templates:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "packages/frameworks/kanban/templates/"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "RW Execution Guide:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "packages/frameworks/workflow-mgt/KB/Documentation/Developer_Docs/vwmp/release-workflow-agent-execution.md"
        })]
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