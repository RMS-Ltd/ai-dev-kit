"use strict";
(self["webpackChunkportal"] = self["webpackChunkportal"] || []).push([["19297"], {
76048(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_project_management_kanban_agents_md_d06_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-project-management-kanban-agents-md-d06.json
var site_docs_project_management_kanban_agents_md_d06_namespaceObject = JSON.parse('{"id":"project-management/kanban/AGENTS","title":"Kanban Workflow Agents","description":"Cold-start bootstrap (all agents): repo-root AGENTS.md and docs/project-agent-manifest.json. This file holds domain role detail for kanban, intake, and documentation coordination.","source":"@site/../docs/project-management/kanban/AGENTS.md","sourceDirName":"project-management/kanban","slug":"/project-management/kanban/AGENTS","permalink":"/ai-dev-kit/docs/project-management/kanban/AGENTS","draft":false,"unlisted":false,"editUrl":"https://github.com/RMS-Ltd/ai-dev-kit/tree/main/docs/../docs/project-management/kanban/AGENTS.md","tags":[],"version":"current","frontMatter":{},"sidebar":"docsSidebar","previous":{"title":"Kanban Directory","permalink":"/ai-dev-kit/docs/project-management/kanban/"},"next":{"title":"AI Dev Kit – Kanban Board (Quick View)","permalink":"/ai-dev-kit/docs/project-management/kanban/_index"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ../docs/project-management/kanban/AGENTS.md


const frontMatter = {};
const contentTitle = 'Kanban Workflow Agents';

const assets = {

};



const toc = [{
  "value": "RW Agent — Release Workflow Specialist",
  "id": "rw-agent--release-workflow-specialist",
  "level": 2
}, {
  "value": "UKW Agent - Update Kanban Workflow Specialist",
  "id": "ukw-agent---update-kanban-workflow-specialist",
  "level": 2
}, {
  "value": "Intake Agent - FR/BR/UXR Intake Specialist",
  "id": "intake-agent---frbruxr-intake-specialist",
  "level": 2
}, {
  "value": "Documentation Agent - Documentation Specialist",
  "id": "documentation-agent---documentation-specialist",
  "level": 2
}, {
  "value": "Standard Update Interface for kanban-completed.md",
  "id": "standard-update-interface-for-kanban-completedmd",
  "level": 3
}, {
  "value": "Standard Update Interface for intake-completed.md",
  "id": "standard-update-interface-for-intake-completedmd",
  "level": 3
}, {
  "value": "Invoking Agents (Examples)",
  "id": "invoking-agents-examples",
  "level": 3
}, {
  "value": "Coordination Protocol",
  "id": "coordination-protocol",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
    hr: "hr",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "kanban-workflow-agents",
        children: "Kanban Workflow Agents"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Cold-start bootstrap (all agents):"
      }), " repo-root ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/AGENTS.md",
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "AGENTS.md"
        })
      }), " and ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/project-agent-manifest.json",
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/project-agent-manifest.json"
        })
      }), ". This file holds ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "domain role"
      }), " detail for kanban, intake, and documentation coordination."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "rw-agent--release-workflow-specialist",
      children: "RW Agent — Release Workflow Specialist"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "When executing Release Workflow (RW, RW -d, RW -k):"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Primary responsibilities:"
      }), " version bump (", (0,jsx_runtime.jsx)(_components.code, {
        children: "RC.EPIC.STORY.TASK+BUILD"
      }), "), changelog, scoped kanban Step 7 (four surfaces), commit, tag, push via RW — never manual ", (0,jsx_runtime.jsx)(_components.code, {
        children: "git commit"
      }), " / ", (0,jsx_runtime.jsx)(_components.code, {
        children: "git push"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Skills:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: ".cursor/skills/version-bump"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "changelog_create"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "readme_update"
      }), ", validation scripts under ", (0,jsx_runtime.jsx)(_components.code, {
        children: "packages/frameworks/workflow-mgt/scripts/validation/"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Coordination:"
      }), " Validation Agent (branch safety); Documentation Agent (changelog, README, completed ledgers)."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Canonical execution:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: ".cursorrules"
      }), " RW section · ", (0,jsx_runtime.jsx)(_components.code, {
        children: ".claude/commands/rw.md"
      }), " · ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/packages/frameworks/workflow-mgt/KB/Documentation/Developer_Docs/vwmp/release-workflow-agent-execution.md",
        children: "release-workflow-agent-execution.md"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Human quick reference:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/guides/workflow-initiation-cheatsheet.md",
        children: "workflow-initiation-cheatsheet.md"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "ukw-agent---update-kanban-workflow-specialist",
      children: "UKW Agent - Update Kanban Workflow Specialist"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "When working with kanban boards:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Primary Responsibilities:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use kanban_sync skill for board synchronization"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use status_inference skill for intelligent status deduction"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use moscow_prioritize skill for MoSCOW prioritization"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use narrative_synthesis skill for coherent progress summaries"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use board_cleanup skill for autonomous board maintenance"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Intelligence Requirements:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Follow bottom-up approach: Tasks → Stories → Epics → Board"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Apply agentic intelligence for synthesis and prioritization"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Transform raw task/story data into coherent narratives"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Infer completion state from evidence (commits, FR/BR/UXRs, file changes)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Classify tasks using MoSCOW methodology based on goals and dependencies"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Key Principle:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Bottom-up approach - Update Tasks → Stories → Epics → Board (in that order)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The MoSCOW priority list is updated LAST"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "intake-agent---frbruxr-intake-specialist",
      children: "Intake Agent - FR/BR/UXR Intake Specialist"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "When processing intake:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Primary Responsibilities:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use intake_process skill for intake processing"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use fr_analysis skill for feature request analysis"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use br_triage skill for bug report triage"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use task_creation skill for task generation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use dependency_wiring skill for dependency management"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Intelligence Requirements:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Follow top-down approach: Epic → Story → Task → Intake"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Apply agentic intelligence for analysis and prioritization"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Analyze multiple data points and create coherent summaries"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Determine MoSCOW priorities based on project goals and impact"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Understand relationships between work items and strategic context"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Integration Points:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Works with UKW Agent for task status updates"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Works with Documentation Agent for task documentation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Supports kanban board maintenance and organization"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "documentation-agent---documentation-specialist",
      children: "Documentation Agent - Documentation Specialist"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "When working with documentation:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Primary Responsibilities:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use readme_update skill for README changes with version references"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use docs_generate skill for documentation generation from templates"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use changelog_manage skill for changelog updates and archival"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use kanban_completed_update skill for kanban-completed.md maintenance"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use fr_br_uxr_completed_update skill for intake-completed.md maintenance"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Ultimate responsibility for kanban-completed.md and intake-completed.md integrity and updates"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Intelligence Requirements:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Follow documentation-first approach for all project changes"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Apply agentic intelligence for consistency and formatting"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Maintain cross-references and link integrity across documentation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Ensure version consistency across all documentation files"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Coordinate with other agents for documentation updates"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Key Principle:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Single source of truth - Documentation Agent owns document integrity"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Standard interface for other agents needing documentation updates"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Validation and consistency checking for all documentation changes"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Ultimate Responsibility:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "kanban-completed.md:"
        }), " Final authority over structure, format, and updates"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "intake-completed.md:"
        }), " Final authority over structure, format, and updates"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "docs/journals/:"
        }), " Workflow forensic run logs and checkpoint manifests (FR-059 / ADR-008); TTL housekeeping per ", (0,jsx_runtime.jsx)(_components.code, {
          children: "journal_ttl_days"
        }), " in ", (0,jsx_runtime.jsx)(_components.code, {
          children: "rw-config.yaml"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Agent Coordination:"
        }), " Primary interface for all agents updating completed tasks and FR/BR/UXR items"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Validation:"
        }), " Ensures consistent timestamp format and recent tasks tracking for both kanban and FR/BR/UXR"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Agent Coordination Patterns:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "standard-update-interface-for-kanban-completedmd",
      children: "Standard Update Interface for kanban-completed.md"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Documentation Agent.update_kanban_completed({\n  task_id: \"E5:S01:T48\",\n  status: \"COMPLETE\",\n  version: \"v0.5.1.48+1\", \n  timestamp: \"2026-03-11T16:20:00Z\",\n  completing_agent: \"RW Agent\"\n})\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "standard-update-interface-for-intake-completedmd",
      children: "Standard Update Interface for intake-completed.md"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Documentation Agent.fr_br_uxr_completed_update({\n  fr_br_uxr_id: \"FR-048\",\n  type: \"FR\",\n  status: \"COMPLETE\", \n  version: \"v0.5.1.48+1\",\n  timestamp: \"2026-03-11T16:20:00Z\",\n  completing_agent: \"Intake Agent\"\n})\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "invoking-agents-examples",
      children: "Invoking Agents (Examples)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "RW Agent:"
        }), " When tasks complete during release workflow"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "UKW Agent:"
        }), " When board cleanup archives completed tasks"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Intake Agent:"
        }), " When new tasks are created and completed"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Any Workflow Agent:"
        }), " When task completion occurs"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "coordination-protocol",
      children: "Coordination Protocol"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Primary Responsibility:"
        }), " Documentation Agent has final authority"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Standard Interface:"
        }), " All agents use documented update patterns"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Validation:"
        }), " Built-in consistency checks and error handling"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Audit Trail:"
        }), " Complete temporal tracking of all updates"]
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