"use strict";
(self["webpackChunkportal"] = self["webpackChunkportal"] || []).push([["40099"], {
32619(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_project_management_kanban_epics_epic_04_story_15_procedural_task_template_generation_and_hybrid_strategy_t_03_implement_generator_and_validate_against_concrete_templates_md_18c_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-project-management-kanban-epics-epic-04-story-15-procedural-task-template-generation-and-hybrid-strategy-t-03-implement-generator-and-validate-against-concrete-templates-md-18c.json
var site_docs_project_management_kanban_epics_epic_04_story_15_procedural_task_template_generation_and_hybrid_strategy_t_03_implement_generator_and_validate_against_concrete_templates_md_18c_namespaceObject = JSON.parse('{"id":"project-management/kanban/epics/epic-04/story-15-procedural-task-template-generation-and-hybrid-strategy/T03-implement-generator-and-validate-against-concrete-templates","title":"Epic 4, Story 15, Task 3: Implement generator and validate against concrete templates","description":"Task IDS15:T03","source":"@site/../docs/project-management/kanban/epics/epic-04/story-15-procedural-task-template-generation-and-hybrid-strategy/T03-implement-generator-and-validate-against-concrete-templates.md","sourceDirName":"project-management/kanban/epics/epic-04/story-15-procedural-task-template-generation-and-hybrid-strategy","slug":"/project-management/kanban/epics/epic-04/story-15-procedural-task-template-generation-and-hybrid-strategy/T03-implement-generator-and-validate-against-concrete-templates","permalink":"/ai-dev-kit/docs/project-management/kanban/epics/epic-04/story-15-procedural-task-template-generation-and-hybrid-strategy/T03-implement-generator-and-validate-against-concrete-templates","draft":false,"unlisted":false,"editUrl":"https://github.com/RMS-Ltd/ai-dev-kit/tree/main/docs/../docs/project-management/kanban/epics/epic-04/story-15-procedural-task-template-generation-and-hybrid-strategy/T03-implement-generator-and-validate-against-concrete-templates.md","tags":[],"version":"current","frontMatter":{"lifecycle":"evergreen","ttl_days":null,"created_at":"2026-06-05T04:53:30.000Z","expires_at":null,"housekeeping_policy":"keep"},"sidebar":"docsSidebar","previous":{"title":"Epic 4, Story 15, Task 2: Design procedural task template generator","permalink":"/ai-dev-kit/docs/project-management/kanban/epics/epic-04/story-15-procedural-task-template-generation-and-hybrid-strategy/T02-design-procedural-task-template-generator"},"next":{"title":"Epic 4, Story 15, Task 4: Integrate generator into Kanban framework package","permalink":"/ai-dev-kit/docs/project-management/kanban/epics/epic-04/story-15-procedural-task-template-generation-and-hybrid-strategy/T04-integrate-generator-into-kanban-framework-package"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ../docs/project-management/kanban/epics/epic-04/story-15-procedural-task-template-generation-and-hybrid-strategy/T03-implement-generator-and-validate-against-concrete-templates.md


const frontMatter = {
	lifecycle: 'evergreen',
	ttl_days: null,
	created_at: new Date('2026-06-05T04:53:30.000Z'),
	expires_at: null,
	housekeeping_policy: 'keep'
};
const contentTitle = 'Epic 4, Story 15, Task 3: Implement generator and validate against concrete templates';

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
        id: "epic-4-story-15-task-3-implement-generator-and-validate-against-concrete-templates",
        children: "Epic 4, Story 15, Task 3: Implement generator and validate against concrete templates"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Task ID:"
      }), " E04:S15", ":T03", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Status:"
      }), " ✅ COMPLETE", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Priority:"
      }), " MEDIUM", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Last updated:"
      }), " 2026-06-05 (v0.4.15.3+1 – migrated from embedded Story section)", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Version:"
      }), " v0.4.15.3+1", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Code:"
      }), " E04S15T03"]
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
        children: "E04:S15:T03"
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
        children: "Generator design from T02"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Existing concrete task templates (reference set)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "deliverable",
      children: "Deliverable"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Implementation of a generator script (e.g., ", (0,jsx_runtime.jsx)(_components.code, {
          children: "generate_task_templates.py"
        }), ") under the Kanban framework package."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Validation routine that:", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Compares generator output to existing templates."
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Reports discrepancies in:", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "Task coverage."
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "File paths."
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "Core structural sections (frontmatter, main headings)."
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "acceptance-criteria",
      children: "Acceptance Criteria"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      className: "contains-task-list",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.input, {
            type: "checkbox",
            checked: true,
            disabled: true
          }), " ", "Generator can create all canonical task templates in a clean environment. ✅"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.input, {
            type: "checkbox",
            checked: true,
            disabled: true
          }), " ", "Generator output matches the existing concrete templates for:"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          className: "contains-task-list",
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            className: "task-list-item",
            children: [(0,jsx_runtime.jsx)(_components.input, {
              type: "checkbox",
              checked: true,
              disabled: true
            }), " ", "Task coverage. ✅"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            className: "task-list-item",
            children: [(0,jsx_runtime.jsx)(_components.input, {
              type: "checkbox",
              checked: true,
              disabled: true
            }), " ", "File paths and names. ✅"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            className: "task-list-item",
            children: [(0,jsx_runtime.jsx)(_components.input, {
              type: "checkbox",
              checked: true,
              disabled: true
            }), " ", "Core structural sections. ✅"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.input, {
            type: "checkbox",
            checked: true,
            disabled: true
          }), " ", "Validation routine exists and can be run as part of maintenance checks. ✅"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
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
        children: "docs/project-management/kanban/epics/epic-04/story-15-procedural-task-template-generation-and-hybrid-strategy.md"
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