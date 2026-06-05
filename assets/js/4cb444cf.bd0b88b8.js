"use strict";
(self["webpackChunkportal"] = self["webpackChunkportal"] || []).push([["73274"], {
40235(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_project_management_kanban_epics_epic_07_story_06_post_windsurf_project_review_t_01_windsurf_artifact_cleanup_md_4cb_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-project-management-kanban-epics-epic-07-story-06-post-windsurf-project-review-t-01-windsurf-artifact-cleanup-md-4cb.json
var site_docs_project_management_kanban_epics_epic_07_story_06_post_windsurf_project_review_t_01_windsurf_artifact_cleanup_md_4cb_namespaceObject = JSON.parse('{"id":"project-management/kanban/epics/epic-07/story-06-post-windsurf-project-review/T01-windsurf-artifact-cleanup","title":"E07:S06:T01 – Windsurf Artifact Cleanup","description":"Task IDS06:T01","source":"@site/../docs/project-management/kanban/epics/epic-07/story-06-post-windsurf-project-review/T01-windsurf-artifact-cleanup.md","sourceDirName":"project-management/kanban/epics/epic-07/story-06-post-windsurf-project-review","slug":"/project-management/kanban/epics/epic-07/story-06-post-windsurf-project-review/T01-windsurf-artifact-cleanup","permalink":"/ai-dev-kit/docs/project-management/kanban/epics/epic-07/story-06-post-windsurf-project-review/T01-windsurf-artifact-cleanup","draft":false,"unlisted":false,"editUrl":"https://github.com/RMS-Ltd/ai-dev-kit/tree/main/docs/../docs/project-management/kanban/epics/epic-07/story-06-post-windsurf-project-review/T01-windsurf-artifact-cleanup.md","tags":[],"version":"current","frontMatter":{"lifecycle":"evergreen","ttl_days":null,"created_at":"2026-03-18T00:00:00.000Z","expires_at":null,"housekeeping_policy":"keep"},"sidebar":"docsSidebar","previous":{"title":"E07:S06:T16 – PIR Workflow Windsurf Impact Review","permalink":"/ai-dev-kit/docs/project-management/kanban/epics/epic-07/story-06-post-windsurf-project-review/E7S06-T16-PIR-windsurf-impact-review"},"next":{"title":"E07:S06:T02 – Version and Changelog Alignment","permalink":"/ai-dev-kit/docs/project-management/kanban/epics/epic-07/story-06-post-windsurf-project-review/T02-version-and-changelog-alignment"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ../docs/project-management/kanban/epics/epic-07/story-06-post-windsurf-project-review/T01-windsurf-artifact-cleanup.md


const frontMatter = {
	lifecycle: 'evergreen',
	ttl_days: null,
	created_at: new Date('2026-03-18T00:00:00.000Z'),
	expires_at: null,
	housekeeping_policy: 'keep'
};
const contentTitle = 'E07:S06 – Windsurf Artifact Cleanup';

const assets = {

};



const toc = [{
  "value": "Scope",
  "id": "scope",
  "level": 2
}, {
  "value": "Input",
  "id": "input",
  "level": 2
}, {
  "value": "Deliverable",
  "id": "deliverable",
  "level": 2
}, {
  "value": "Acceptance Criteria",
  "id": "acceptance-criteria",
  "level": 2
}, {
  "value": "Dependencies",
  "id": "dependencies",
  "level": 2
}, {
  "value": "Blocker",
  "id": "blocker",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    code: "code",
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
      children: (0,jsx_runtime.jsxs)(_components.h1, {
        id: "e07s06--windsurf-artifact-cleanup",
        children: ["E07:S06", ":T01", " – Windsurf Artifact Cleanup"]
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Task ID:"
      }), " E07:S06", ":T01", "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Status:"
      }), " COMPLETE\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Priority:"
      }), " HIGH\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Last updated:"
      }), " 2026-03-18\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Version:"
      }), " v0.7.6.1+2\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Version Anchor:"
      }), " ✅ COMPLETE (v0.7.6.1+2)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "scope",
      children: "Scope"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Remove ", (0,jsx_runtime.jsx)(_components.code, {
        children: ".windsurf/"
      }), " directory and any Windsurf-specific config or references from the repo. Migrate skills to ", (0,jsx_runtime.jsx)(_components.code, {
        children: ".cursor/skills/"
      }), " per T10–T16 review outputs before removal."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "input",
      children: "Input"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Repo filesystem, git status; review outputs from E07:S06", ":T10", "–T16"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "deliverable",
      children: "Deliverable"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Skills migrated to ", (0,jsx_runtime.jsx)(_components.code, {
        children: ".cursor/skills/"
      }), "; ", (0,jsx_runtime.jsx)(_components.code, {
        children: ".windsurf/"
      }), " removed; no Windsurf-specific references in tracked files; docs updated (FR-041, BR-042, T42, T106, T108, ICW spec)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
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
        }), " ", "Skills migrated from .windsurf/skills/ to .cursor/skills/ per T10–T16 migration plans"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", ".windsurf/ directory removed from repo"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "No Windsurf-specific references in tracked files (code/config clean; historical docs OK)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "Docs updated (FR-041, BR-042, T42, T106, T108, ICW spec); .windsurf/ added to .gitignore"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "dependencies",
      children: "Dependencies"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "T10, T11, T12, T13, T14, T15, T16"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "blocker",
      children: "Blocker"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Blocked until T10–T16 complete"
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