"use strict";
(self["webpackChunkportal"] = self["webpackChunkportal"] || []).push([["82641"], {
95067(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_project_management_kanban_epics_epic_07_story_01_codebase_maintenance_tasks_e_07_s_01_t_08_task_doc_naming_standardization_md_864_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-project-management-kanban-epics-epic-07-story-01-codebase-maintenance-tasks-e-07-s-01-t-08-task-doc-naming-standardization-md-864.json
var site_docs_project_management_kanban_epics_epic_07_story_01_codebase_maintenance_tasks_e_07_s_01_t_08_task_doc_naming_standardization_md_864_namespaceObject = JSON.parse('{"id":"project-management/kanban/epics/epic-07/story-01-codebase-maintenance-tasks/E07S01T08-task-doc-naming-standardization","title":"Task: Task Doc Naming Standardization","description":"Epic: E7 – Codebase Maintenance and Review","source":"@site/../docs/project-management/kanban/epics/epic-07/story-01-codebase-maintenance-tasks/E07S01T08-task-doc-naming-standardization.md","sourceDirName":"project-management/kanban/epics/epic-07/story-01-codebase-maintenance-tasks","slug":"/project-management/kanban/epics/epic-07/story-01-codebase-maintenance-tasks/E07S01T08-task-doc-naming-standardization","permalink":"/ai-dev-kit/docs/project-management/kanban/epics/epic-07/story-01-codebase-maintenance-tasks/E07S01T08-task-doc-naming-standardization","draft":false,"unlisted":false,"editUrl":"https://github.com/RMS-Ltd/ai-dev-kit/tree/main/docs/../docs/project-management/kanban/epics/epic-07/story-01-codebase-maintenance-tasks/E07S01T08-task-doc-naming-standardization.md","tags":[],"version":"current","frontMatter":{},"sidebar":"docsSidebar","previous":{"title":"Epic 7, Story 0: Abstract Space (Epic-Level)","permalink":"/ai-dev-kit/docs/project-management/kanban/epics/epic-07/story-00-uxr-repo"},"next":{"title":"Task E07:S01:T09 – Kanban Template Governance & UXR Ownership","permalink":"/ai-dev-kit/docs/project-management/kanban/epics/epic-07/story-01-codebase-maintenance-tasks/E07S01T09-kanban-template-governance"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ../docs/project-management/kanban/epics/epic-07/story-01-codebase-maintenance-tasks/E07S01T08-task-doc-naming-standardization.md


const frontMatter = {};
const contentTitle = 'Task: Task Doc Naming Standardization';

const assets = {

};



const toc = [{
  "value": "Summary",
  "id": "summary",
  "level": 2
}, {
  "value": "Objectives",
  "id": "objectives",
  "level": 2
}, {
  "value": "Deliverables",
  "id": "deliverables",
  "level": 2
}, {
  "value": "Acceptance Criteria",
  "id": "acceptance-criteria",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
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
        id: "task-task-doc-naming-standardization",
        children: "Task: Task Doc Naming Standardization"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Epic:"
      }), " E7 – Codebase Maintenance and Review", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Story:"
      }), " S01 – Codebase Maintenance Tasks", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Task ID:"
      }), " T08", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Related FR:"
      }), " User directive (2026-03-16)", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Priority:"
      }), " HIGH"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Implement a repository-wide naming policy for task documents using the format ", (0,jsx_runtime.jsx)(_components.code, {
        children: "EddSddTdd-[Task Title].md"
      }), " (with a permitted Tddd extension for triple-digit tasks). Deliver a migration plan, rename backlog, and guardrails so Release Workflow, Kanban, and documentation tooling remain consistent."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "objectives",
      children: "Objectives"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update governance docs (Documentation Policy Framework, Kanban board guide, release runbook) to describe the new naming convention and exceptions."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Inventory all existing task files, mapping legacy ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Tdd-*"
        }), " names to the new canonical format."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Execute the rename/migration with automated link updates and audit logging."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Add validation (lint/CI) to prevent regressions."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Communicate the change to workflow agents and ensure RW Step 4 references are updated accordingly."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "deliverables",
      children: "Deliverables"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Updated policy documentation referencing ", (0,jsx_runtime.jsx)(_components.code, {
          children: "EddSddTdd-[Task Title].md"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Rename inventory + execution log in ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/maintenance/logs/mmw/"
        }), "."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Scripts or documented steps for atomic renames + reference updates."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Validator enhancements checking task filenames."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Release notes / Kanban updates showing migration completion."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "acceptance-criteria",
      children: "Acceptance Criteria"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["All task docs under ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/project-management/kanban/epics/**"
        }), " follow the new naming scheme (or are listed in an active migration log)."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Kanban board, Story/Epic files, and RW documentation link to the renamed files without broken references."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Governance docs explicitly call out the naming requirement and exception clause."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "CI/lint tooling fails if a new task doc violates the naming rule."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Migration log captures before/after filenames, timestamps, and responsible agent."
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