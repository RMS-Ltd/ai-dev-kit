"use strict";
(self["webpackChunkportal"] = self["webpackChunkportal"] || []).push([["70477"], {
5019(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_project_management_kanban_epics_epic_02_story_06_package_uninstall_and_recovery_md_022_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-project-management-kanban-epics-epic-02-story-06-package-uninstall-and-recovery-md-022.json
var site_docs_project_management_kanban_epics_epic_02_story_06_package_uninstall_and_recovery_md_022_namespaceObject = JSON.parse('{"id":"project-management/kanban/epics/epic-02/story-06-package-uninstall-and-recovery","title":"Story 6: Package Uninstall and Recovery","description":"Task IDS06:T01","source":"@site/../docs/project-management/kanban/epics/epic-02/story-06-package-uninstall-and-recovery.md","sourceDirName":"project-management/kanban/epics/epic-02","slug":"/project-management/kanban/epics/epic-02/story-06-package-uninstall-and-recovery","permalink":"/ai-dev-kit/docs/project-management/kanban/epics/epic-02/story-06-package-uninstall-and-recovery","draft":false,"unlisted":false,"editUrl":"https://github.com/RMS-Ltd/ai-dev-kit/tree/main/docs/../docs/project-management/kanban/epics/epic-02/story-06-package-uninstall-and-recovery.md","tags":[],"version":"current","frontMatter":{"lifecycle":"evergreen","ttl_days":null,"created_at":"2025-12-10T14:10:00.000Z","expires_at":null,"housekeeping_policy":"keep"},"sidebar":"docsSidebar","previous":{"title":"Story 005 – Post-Implementation Review (PIR) Workflow","permalink":"/ai-dev-kit/docs/project-management/kanban/epics/epic-02/story-05-post-implementation-review-workflow"},"next":{"title":"Epic 2, Story 7, Task 0: Story creation and FR-013/FR-014 intake","permalink":"/ai-dev-kit/docs/project-management/kanban/epics/epic-02/story-07-trigger-aware-release-workflow/T00-story-creation-and-fr-013fr-014-intake"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ../docs/project-management/kanban/epics/epic-02/story-06-package-uninstall-and-recovery.md


const frontMatter = {
	lifecycle: 'evergreen',
	ttl_days: null,
	created_at: new Date('2025-12-10T14:10:00.000Z'),
	expires_at: null,
	housekeeping_policy: 'keep'
};
const contentTitle = 'Story 6: Package Uninstall and Recovery';

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
  "value": "Tasks",
  "id": "tasks",
  "level": 2
}, {
  "value": "References",
  "id": "references",
  "level": 2
}, {
  "value": "Planning artifacts (publication)",
  "id": "planning-artifacts-publication",
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
        id: "story-6-package-uninstall-and-recovery",
        children: "Story 6: Package Uninstall and Recovery"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Task ID:"
      }), " E02:S06", ":T01", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Status:"
      }), " COMPLETE ✅", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Priority:"
      }), " HIGH", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Estimated Effort:"
      }), " [TBD]", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Last updated:"
      }), " 2026-05-15 (v0.2.6.1+2 – T01 re-implemented: CLI remove/uninstall fix, tests, docs)", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Version:"
      }), " v0.2.6.3+1", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Status:"
      }), " COMPLETE ✅", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Code:"
      }), " E2S06"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "scope",
      children: "Scope"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Provide safe uninstall, cleanup, recovery, and rollback capabilities for ai-dev-kit packages/frameworks across supported backends (git submodule, npm, pip, CLI)."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "input",
      children: "Input"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "FR-008 Package Uninstall Capabilities requirements document"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Existing ", (0,jsx_runtime.jsx)(_components.code, {
          children: "uninstall_package.py"
        }), " standalone script"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Existing ", (0,jsx_runtime.jsx)(_components.code, {
          children: "cli/commands/remove.py"
        }), " (broken implementation)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Existing backend ", (0,jsx_runtime.jsx)(_components.code, {
          children: "remove()"
        }), " methods (", (0,jsx_runtime.jsx)(_components.code, {
          children: "cli/backends/git_submodule.py"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "git_subtree.py"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "package_manager.py"
        }), ")"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["IPW planning artifact: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/implementation-cycles/IPP-E2S6T1-package-uninstall-reimplementation.md"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "deliverable",
      children: "Deliverable"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Working CLI ", (0,jsx_runtime.jsx)(_components.code, {
          children: "remove"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "uninstall"
        }), " commands"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Dependency validation (", (0,jsx_runtime.jsx)(_components.code, {
          children: "_check_dependencies"
        }), ")"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Backup creation (", (0,jsx_runtime.jsx)(_components.code, {
          children: "_create_backup"
        }), ")"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "27 automated tests across 3 test files"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Updated kanban board, story doc, and FR-008 checkboxes"
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
        }), " ", "AC-1: Uninstall command (", (0,jsx_runtime.jsx)(_components.code, {
          children: "ai-dev-kit uninstall <package>"
        }), ") removes package files"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "AC-2: Uninstall command removes package configuration entries"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "AC-3: Uninstall command removes package dependencies (Git submodules, npm packages, pip packages)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "AC-4: Uninstall command creates backup before removal"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "AC-5: Uninstall command validates no dependencies before removal (with override option)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "AC-6: Recovery mode (", (0,jsx_runtime.jsx)(_components.code, {
          children: "--recover"
        }), ") fixes failed installations (T02)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "AC-7: Rollback support (", (0,jsx_runtime.jsx)(_components.code, {
          children: "--rollback"
        }), ") restores previous version or removes package (T02)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "AC-8: Backend-specific uninstall works for all backends (T02)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "AC-9: Uninstall utilities documented with examples (T03)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "AC-10: Uninstall process verified with multiple scenarios (T03)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "tasks",
      children: "Tasks"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      className: "contains-task-list",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.input, {
            type: "checkbox",
            checked: true,
            disabled: true
          }), " ", (0,jsx_runtime.jsxs)(_components.strong, {
            children: ["E02:S06", ":T01", " – FR-008 uninstall command and safety rails"]
          }), " ✅ COMPLETE (v0.2.6.1+2 — re-implemented 2026-05-15)"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Implemented uninstall command (", (0,jsx_runtime.jsx)(_components.code, {
              children: "uninstall_package.py"
            }), ") with backup creation, dependency validation, confirmation flows, and backend detection"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Re-implementation (2026-05-15):"
            }), " Fixed broken CLI ", (0,jsx_runtime.jsx)(_components.code, {
              children: "remove"
            }), " command (", (0,jsx_runtime.jsx)(_components.code, {
              children: "select_backend"
            }), " parameter mismatch, backend instantiation bug). Added ", (0,jsx_runtime.jsx)(_components.code, {
              children: "uninstall"
            }), " alias to ", (0,jsx_runtime.jsx)(_components.code, {
              children: "cli/main.py"
            }), ". Implemented ", (0,jsx_runtime.jsx)(_components.code, {
              children: "_check_dependencies()"
            }), " and ", (0,jsx_runtime.jsx)(_components.code, {
              children: "_create_backup()"
            }), " in ", (0,jsx_runtime.jsx)(_components.code, {
              children: "RemoveCommand"
            }), ". Added 27 tests across ", (0,jsx_runtime.jsx)(_components.code, {
              children: "tests/cli/test_remove_command.py"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "tests/test_backends.py"
            }), ", and ", (0,jsx_runtime.jsx)(_components.code, {
              children: "tests/test_uninstall_package.py"
            }), "."]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Supports all backends: Git submodule, npm, pip (auto-detect or manual selection)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Safety features: backup before removal, dependency checking, confirmation prompts, dry-run mode"
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Linked FR:"
            }), " ", (0,jsx_runtime.jsx)(_components.code, {
              children: "FR-008-package-uninstall-capabilities.md"
            }), " (GitHub issue #5)"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Implementation Plan:"
            }), " ", (0,jsx_runtime.jsx)(_components.code, {
              children: "docs/implementation-cycles/IPP-E2S6T1-package-uninstall-reimplementation.md"
            })]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Acceptance:"
            }), " ✅ AC-1..AC-5 of FR-008 verified with tests; backup/validation/confirmation documented."]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.input, {
            type: "checkbox",
            checked: true,
            disabled: true
          }), " ", (0,jsx_runtime.jsxs)(_components.strong, {
            children: ["E02:S06", ":T02", " – Recovery and rollback flows"]
          }), " ✅ COMPLETE (v0.2.6.2+1)"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Implemented recovery mode (", (0,jsx_runtime.jsx)(_components.code, {
              children: "--recover"
            }), ") - detects failed installations, cleans up partial installations, restores project to working state"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Implemented rollback mode (", (0,jsx_runtime.jsx)(_components.code, {
              children: "--rollback"
            }), ") - restores from backup or removes package entirely, supports restoring previous version from timestamped backups"]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Backend-specific uninstall paths supported (Git submodule, npm, pip)"
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Linked FR:"
            }), " FR-008 (AC-6..AC-8)."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Acceptance:"
            }), " ✅ Recovery/rollback implemented and verified; ready for testing across backends."]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.input, {
            type: "checkbox",
            checked: true,
            disabled: true
          }), " ", (0,jsx_runtime.jsxs)(_components.strong, {
            children: ["E02:S06", ":T03", " – Documentation and verification"]
          }), " ✅ COMPLETE (v0.2.6.3+1)"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Updated troubleshooting guide with comprehensive uninstall section (uninstall issues, orphaned files, dependency conflicts)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Updated update guide with uninstall methods, safety features, and backup restoration"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Updated installation guide with uninstall quick reference"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Added examples for standard uninstall, recovery mode, rollback mode, and manual uninstall"
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Linked FR:"
            }), " FR-008 (AC-9..AC-10)."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Acceptance:"
            }), " ✅ Docs updated; uninstall scenarios documented with examples."]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "references",
      children: "References"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["FR-008: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/project-management/kanban/fr-br/FR-008-package-uninstall-capabilities.md"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Implementation Plan: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/implementation-cycles/IPP-E2S6T1-package-uninstall-reimplementation.md"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Framework dependency guides under ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/documentation/user-docs/"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Template Usage:"
      }), " Story follows Kanban framework story template; tasks trace to FR for forensic linkage."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "planning-artifacts-publication",
      children: "Planning artifacts (publication)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/implementation-cycles/IPP-E2S06T01-package-uninstall-reimplementation",
          children: "IPP-E2S6T1-package-uninstall-reimplementation.md"
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