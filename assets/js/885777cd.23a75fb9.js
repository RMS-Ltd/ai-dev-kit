"use strict";
(self["webpackChunkportal"] = self["webpackChunkportal"] || []).push([["98061"], {
13706(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_project_management_kanban_epics_epic_02_story_04_rw_installer_and_plug_and_play_adoption_t_03_implement_rw_installer_cli_md_885_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-project-management-kanban-epics-epic-02-story-04-rw-installer-and-plug-and-play-adoption-t-03-implement-rw-installer-cli-md-885.json
var site_docs_project_management_kanban_epics_epic_02_story_04_rw_installer_and_plug_and_play_adoption_t_03_implement_rw_installer_cli_md_885_namespaceObject = JSON.parse('{"id":"project-management/kanban/epics/epic-02/story-04-rw-installer-and-plug-and-play-adoption/T03-implement-rw-installer-cli","title":"Epic 2, Story 4, Task 3: Implement RW installer CLI","description":"Task IDS04:T03","source":"@site/../docs/project-management/kanban/epics/epic-02/story-04-rw-installer-and-plug-and-play-adoption/T03-implement-rw-installer-cli.md","sourceDirName":"project-management/kanban/epics/epic-02/story-04-rw-installer-and-plug-and-play-adoption","slug":"/project-management/kanban/epics/epic-02/story-04-rw-installer-and-plug-and-play-adoption/T03-implement-rw-installer-cli","permalink":"/ai-dev-kit/docs/project-management/kanban/epics/epic-02/story-04-rw-installer-and-plug-and-play-adoption/T03-implement-rw-installer-cli","draft":false,"unlisted":false,"editUrl":"https://github.com/RMS-Ltd/ai-dev-kit/tree/main/docs/../docs/project-management/kanban/epics/epic-02/story-04-rw-installer-and-plug-and-play-adoption/T03-implement-rw-installer-cli.md","tags":[],"version":"current","frontMatter":{"lifecycle":"evergreen","ttl_days":null,"created_at":"2026-06-05T04:49:59.000Z","expires_at":null,"housekeeping_policy":"keep"},"sidebar":"docsSidebar","previous":{"title":"Epic 2, Story 4, Task 2: Design RW config schema (rw-config.yaml) and modes","permalink":"/ai-dev-kit/docs/project-management/kanban/epics/epic-02/story-04-rw-installer-and-plug-and-play-adoption/T02-design-rw-config-schema-rw-configyaml-and-modes"},"next":{"title":"Epic 2, Story 4, Task 4: Create quickstart docs and template usage examples","permalink":"/ai-dev-kit/docs/project-management/kanban/epics/epic-02/story-04-rw-installer-and-plug-and-play-adoption/T04-create-quickstart-docs-and-template-usage-examples"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ../docs/project-management/kanban/epics/epic-02/story-04-rw-installer-and-plug-and-play-adoption/T03-implement-rw-installer-cli.md


const frontMatter = {
	lifecycle: 'evergreen',
	ttl_days: null,
	created_at: new Date('2026-06-05T04:49:59.000Z'),
	expires_at: null,
	housekeeping_policy: 'keep'
};
const contentTitle = 'Epic 2, Story 4, Task 3: Implement RW installer CLI';

const assets = {

};



const toc = [{
  "value": "Task ID",
  "id": "task-id",
  "level": 2
}, {
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
  "value": "Version Anchor",
  "id": "version-anchor",
  "level": 2
}, {
  "value": "Migration Notes",
  "id": "migration-notes",
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
        id: "epic-2-story-4-task-3-implement-rw-installer-cli",
        children: "Epic 2, Story 4, Task 3: Implement RW installer CLI"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Task ID:"
      }), " E02:S04", ":T03", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Status:"
      }), " TODO", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Priority:"
      }), " MEDIUM", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Last updated:"
      }), " 2026-06-05 (v0.0.0.0+0 – migrated from embedded Story section)", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Version:"
      }), " v0.0.0.0+0", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Code:"
      }), " E02S04T03"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "task-id",
      children: "Task ID"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Format:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "E{epic}:S{story}:T{task}"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Full Task ID:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "E02:S04:T03"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "scope",
      children: "Scope"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "[To be filled during migration]"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "input",
      children: "Input"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Config schema from T02"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Existing workflow mgt package files"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "deliverable",
      children: "Deliverable"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["✅ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "DELIVERED"
      }), " - See ", (0,jsx_runtime.jsx)(_components.code, {
        children: "packages/frameworks/workflow-mgt/scripts/install_release_workflow.py"
      }), " for installer CLI and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "packages/frameworks/workflow-mgt/scripts/README-rw-installer.md"
      }), " for documentation. Validation scripts updated to read from ", (0,jsx_runtime.jsx)(_components.code, {
        children: "rw-config.yaml"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
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
        }), " ", "Running the installer in a clean sample project produces a usable RW setup ✅"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".cursorrules"
        }), ", RW YAML, and validation scripts all read from ", (0,jsx_runtime.jsx)(_components.code, {
          children: "rw-config.yaml"
        }), " ✅"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "--dry-run"
        }), " mode works and shows intended changes clearly ✅"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "version-anchor",
      children: "Version Anchor"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Forensic Marker Format:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "✅ COMPLETE (vRC.E.S.T+B)"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "migration-notes",
      children: "Migration Notes"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Migrated from embedded Story section via ", (0,jsx_runtime.jsx)(_components.code, {
        children: "generate_task_doc.py"
      }), " (FR-016 Wave 1 tooling)."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Source Story:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "docs/project-management/kanban/epics/epic-02/story-04-rw-installer-and-plug-and-play-adoption.md"
      })]
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