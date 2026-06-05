"use strict";
(self["webpackChunkportal"] = self["webpackChunkportal"] || []).push([["99198"], {
11980(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_project_management_kanban_epics_epic_03_story_01_dev_kit_alignment_with_versioning_framework_md_484_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-project-management-kanban-epics-epic-03-story-01-dev-kit-alignment-with-versioning-framework-md-484.json
var site_docs_project_management_kanban_epics_epic_03_story_01_dev_kit_alignment_with_versioning_framework_md_484_namespaceObject = JSON.parse('{"id":"project-management/kanban/epics/epic-03/story-01-dev-kit-alignment-with-versioning-framework","title":"Story 001 – Dev Kit Alignment with Versioning Framework","description":"Status: COMPLETE","source":"@site/../docs/project-management/kanban/epics/epic-03/story-01-dev-kit-alignment-with-versioning-framework.md","sourceDirName":"project-management/kanban/epics/epic-03","slug":"/project-management/kanban/epics/epic-03/story-01-dev-kit-alignment-with-versioning-framework","permalink":"/ai-dev-kit/docs/project-management/kanban/epics/epic-03/story-01-dev-kit-alignment-with-versioning-framework","draft":false,"unlisted":false,"editUrl":"https://github.com/RMS-Ltd/ai-dev-kit/tree/main/docs/../docs/project-management/kanban/epics/epic-03/story-01-dev-kit-alignment-with-versioning-framework.md","tags":[],"version":"current","frontMatter":{"lifecycle":"evergreen","ttl_days":null,"created_at":"2025-12-04T12:01:50.000Z","expires_at":null,"housekeeping_policy":"keep"},"sidebar":"docsSidebar","previous":{"title":"Epic 3, Story 1, Task 6: Make .cursorrules abstract (remove hardcoded version numbers) ✅ COMPLETE","permalink":"/ai-dev-kit/docs/project-management/kanban/epics/epic-03/story-01-dev-kit-alignment-with-versioning-framework/T06-make-cursorrules-abstract-remove-hardcoded-version-numbers-c"},"next":{"title":"Core Versioning Scenarios","permalink":"/ai-dev-kit/docs/project-management/kanban/epics/epic-03/story-02-versioning-cookbook-and-examples/T01-core-versioning-scenarios"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ../docs/project-management/kanban/epics/epic-03/story-01-dev-kit-alignment-with-versioning-framework.md


const frontMatter = {
	lifecycle: 'evergreen',
	ttl_days: null,
	created_at: new Date('2025-12-04T12:01:50.000Z'),
	expires_at: null,
	housekeeping_policy: 'keep'
};
const contentTitle = 'Story 001 – Dev Kit Alignment with Versioning Framework';

const assets = {

};



const toc = [{
  "value": "Overview",
  "id": "overview",
  "level": 2
}, {
  "value": "Goal",
  "id": "goal",
  "level": 2
}, {
  "value": "Task Checklist",
  "id": "task-checklist",
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
  "value": "References",
  "id": "references",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
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
        id: "story-001--dev-kit-alignment-with-versioning-framework",
        children: "Story 001 – Dev Kit Alignment with Versioning Framework"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Status:"
      }), " COMPLETE\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Priority:"
      }), " HIGH\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Estimated Effort:"
      }), " [TBD]\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Created:"
      }), " 2025-12-02\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Last updated:"
      }), " 2025-12-02 (v0.3.1.6+1 – Task 6 complete: Cursorrules abstracted (removed hardcoded version numbers))\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Version:"
      }), " v0.3.1.6+1\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Code:"
      }), " E3S01"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "overview",
      children: "Overview"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Ensure the dev kit's own versioning policy, version file, and docs align cleanly with the generic versioning framework. This story ensures that ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ai-dev-kit"
      }), " serves as the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "single point of truth (SoT)"
      }), " for versioning policies and strategies, which other projects can copy and adapt."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "goal",
      children: "Goal"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Make sure the dev kit's versioning implementation demonstrates best practices and serves as the canonical reference for how to adopt the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "RC.EPIC.STORY.TASK+BUILD"
      }), " schema in new projects."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "task-checklist",
      children: "Task Checklist"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      className: "contains-task-list",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", (0,jsx_runtime.jsxs)(_components.strong, {
          children: ["E03:S01", ":T01", " – Review dev-kit versioning policy vs framework policy"]
        }), " ✅ COMPLETE (v0.3.1.1+2)", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Task: ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-03/story-01-dev-kit-alignment-with-versioning-framework/T01-gap-analysis-report",
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "T01-gap-analysis-report"
              })
            })]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", (0,jsx_runtime.jsxs)(_components.strong, {
          children: ["E03:S01", ":T02", " – Ingest versioning findings from fynd.deals Epic 15 work"]
        }), " ✅ COMPLETE (v0.3.1.2+1)", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Task: ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-03/story-01-dev-kit-alignment-with-versioning-framework/T02-fynd-deals-epic15-findings",
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "T02-fynd-deals-epic15-findings"
              })
            })]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", (0,jsx_runtime.jsxs)(_components.strong, {
          children: ["E03:S01", ":T03", " – Update dev-kit versioning policy as canonical SoT"]
        }), " ✅ COMPLETE (v0.3.1.3+1)", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Task: ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-03/story-01-dev-kit-alignment-with-versioning-framework/T03-update-dev-kit-versioning-policy-as-canonical-sot-complete",
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "T03-update-dev-kit-versioning-policy-as-canonical-sot-complete"
              })
            })]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", (0,jsx_runtime.jsxs)(_components.strong, {
          children: ["E03:S01", ":T04", " – Align dev-kit version.py and CHANGELOG with framework"]
        }), " ✅ COMPLETE (v0.3.1.4+1)", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Task: ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-03/story-01-dev-kit-alignment-with-versioning-framework/T04-align-dev-kit-versionpy-and-changelog-with-framework",
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "T04-align-dev-kit-versionpy-and-changelog-with-framework"
              })
            })]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", (0,jsx_runtime.jsxs)(_components.strong, {
          children: ["E03:S01", ":T05", " – Document consumption pattern for other projects"]
        }), " ✅ COMPLETE (v0.3.1.5+1)", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Task: ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-03/story-01-dev-kit-alignment-with-versioning-framework/T05-document-consumption-pattern-for-other-projects-complete",
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "T05-document-consumption-pattern-for-other-projects-complete"
              })
            })]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", (0,jsx_runtime.jsxs)(_components.strong, {
          children: ["E03:S01", ":T06", " – Make .cursorrules abstract (remove hardcoded version numbers)"]
        }), " ✅ COMPLETE (v0.3.1.6+1)", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Task: ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-03/story-01-dev-kit-alignment-with-versioning-framework/T06-make-cursorrules-abstract-remove-hardcoded-version-numbers-c",
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "T06-make-cursorrules-abstract-remove-hardcoded-version-numbers-c"
              })
            })]
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
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "Dev-kit versioning policy is the canonical SoT ✅"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "Policies capture complete version schema and validation rules ✅"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "Dev-kit version.py and CHANGELOG align with framework ✅"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "Consumption pattern is clearly documented ✅"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "Framework and project implementations are clearly distinguished ✅"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "dependencies",
      children: "Dependencies"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Coordinates With:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Epic 4: Kanban Framework (for Kanban + versioning integration)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Epic 2: Workflow Management Framework (for RW + versioning integration)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Epic 1: AI Dev Kit Core (for dev-kit versioning decisions)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "references",
      children: "References"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "packages/frameworks/numbering-versioning/README.md"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "packages/frameworks/numbering-versioning/versioning-policy.md"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "packages/frameworks/numbering-versioning/versioning-strategy.md"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/architecture/standards-and-adrs/dev-kit-versioning-policy.md"
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "T001 Gap Analysis:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-03/story-01-dev-kit-alignment-with-versioning-framework/T01-gap-analysis-report",
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "T01-gap-analysis-report.md"
          })
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "T002 Findings:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-03/story-01-dev-kit-alignment-with-versioning-framework/T02-fynd-deals-epic15-findings",
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "T02-fynd-deals-epic15-findings.md"
          })
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Source: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "fynd.deals/docs/fynd_deals/_design/versioning/versioning-*.md"
        }), " (findings already ingested into framework package)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.em, {
        children: "Last updated: 2025-12-02 (v0.3.1.2+1 – Task 2 complete)"
      })
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