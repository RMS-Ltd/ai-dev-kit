"use strict";
(self["webpackChunkportal"] = self["webpackChunkportal"] || []).push([["7427"], {
22737(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_project_management_kanban_fr_br_fr_075_icw_durable_planning_artifacts_documentation_system_md_c24_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-project-management-kanban-fr-br-fr-075-icw-durable-planning-artifacts-documentation-system-md-c24.json
var site_docs_project_management_kanban_fr_br_fr_075_icw_durable_planning_artifacts_documentation_system_md_c24_namespaceObject = JSON.parse('{"id":"project-management/kanban/fr-br/FR-075-icw-durable-planning-artifacts-documentation-system","title":"Feature Request: ICW — Durable planning artifacts in the documentation system","description":"Type: Feature Request (FR)","source":"@site/../docs/project-management/kanban/fr-br/FR-075-icw-durable-planning-artifacts-documentation-system.md","sourceDirName":"project-management/kanban/fr-br","slug":"/project-management/kanban/fr-br/FR-075-icw-durable-planning-artifacts-documentation-system","permalink":"/ai-dev-kit/docs/project-management/kanban/fr-br/FR-075-icw-durable-planning-artifacts-documentation-system","draft":false,"unlisted":false,"editUrl":"https://github.com/RMS-Ltd/ai-dev-kit/tree/main/docs/../docs/project-management/kanban/fr-br/FR-075-icw-durable-planning-artifacts-documentation-system.md","tags":[],"version":"current","frontMatter":{"lifecycle":"evergreen","ttl_days":null,"created_at":"2026-04-01T18:00:00.000Z","expires_at":null,"housekeeping_policy":"keep"},"sidebar":"docsSidebar","previous":{"title":"Feature Request: Kanban Intake — Atomic Filing (KG-R2) & Semantic Task Placement (KG-R6)","permalink":"/ai-dev-kit/docs/project-management/kanban/fr-br/FR-074-kanban-intake-atomic-kg-r2-kg-r6-governance"},"next":{"title":"Feature Request: UKW scope expansion to fbuboard with concurrency and temporal-drift controls","permalink":"/ai-dev-kit/docs/project-management/kanban/fr-br/FR-076-ukw-fbuboard-scope-and-drift-concurrency-controls"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ../docs/project-management/kanban/fr-br/FR-075-icw-durable-planning-artifacts-documentation-system.md


const frontMatter = {
	lifecycle: 'evergreen',
	ttl_days: null,
	created_at: new Date('2026-04-01T18:00:00.000Z'),
	expires_at: null,
	housekeeping_policy: 'keep'
};
const contentTitle = 'Feature Request: ICW — Durable planning artifacts in the documentation system';

const assets = {

};



const toc = [{
  "value": "Summary",
  "id": "summary",
  "level": 2
}, {
  "value": "Problem",
  "id": "problem",
  "level": 2
}, {
  "value": "Proposed solution",
  "id": "proposed-solution",
  "level": 2
}, {
  "value": "Requirements",
  "id": "requirements",
  "level": 2
}, {
  "value": "Acceptance criteria",
  "id": "acceptance-criteria",
  "level": 2
}, {
  "value": "Out of scope",
  "id": "out-of-scope",
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
        id: "feature-request-icw--durable-planning-artifacts-in-the-documentation-system",
        children: "Feature Request: ICW — Durable planning artifacts in the documentation system"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Type:"
      }), " Feature Request (FR)", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "ID:"
      }), " FR-075", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Submitted:"
      }), " 2026-04-01", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Submitted By:"
      }), " RMS (AI Dev Kit)", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Priority:"
      }), " MEDIUM", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Status:"
      }), " COMPLETE (", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "v0.5.1.75+1"
        })
      }), " — ", (0,jsx_runtime.jsxs)(_components.strong, {
        children: ["RW E05:S01", ":T75"]
      }), ")"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Implementing Task:"
      }), " ", (0,jsx_runtime.jsxs)(_components.a, {
        href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-05/story-01-fr-repo/T75-icw-durable-planning-artifacts-documentation-system",
        children: ["E05:S01", ":T75"]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Related:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/project-management/kanban/fr-br/FR-040-implementation-cycle-workflow-icw",
        children: "FR-040 – Implementation Cycle Workflow (ICW)"
      }), "; ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/project-management/kanban/fr-br/FR-048-icw-task-identifier-argument",
        children: "FR-048 – ICW task identifier argument"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Make ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "ICW explicitly responsible"
      }), " for persisting specifications, test design, and implementation plans in the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "repository documentation tree"
      }), " (not only in IDE-local plan directories), with a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "policy"
      }), ", ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "framework docs"
      }), ", and ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "agent rules"
      }), " so specs are discoverable and traceable from ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Kanban tasks"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "problem",
      children: "Problem"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Implementation planning often produces structured specs in ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "editor-local"
      }), " folders (e.g. Cursor ", (0,jsx_runtime.jsx)(_components.code, {
        children: "~/.cursor/plans/"
      }), "). Those paths are ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "outside git"
      }), ", ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "not inventoried"
      }), ", and ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "not architected"
      }), " with the rest of the KB. Teams cannot rely on them for audit, onboarding, or cross-session continuity."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "proposed-solution",
      children: "Proposed solution"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Policy:"
        }), " Define source-of-truth ordering (task doc → FR → ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/implementation-cycles/"
        }), " → ADRs → tests) and a ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "promotion workflow"
        }), " from transient plans to durable ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "ICW package:"
        }), " Document in ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "ICW README"
        }), ", ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "ICW guide"
        }), ", and ", (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "icw-workflow.yaml"
          })
        }), " that ", (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "output_dir"
          })
        }), " (", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/implementation-cycles/"
        }), ") is mandatory persistence; require ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "bidirectional links"
        }), " with the Kanban task."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Agent execution:"
        }), " Update ", (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: ".cursorrules"
          })
        }), " ICW trigger so agents ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "persist"
        }), " the three-phase package and ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "link"
        }), " it from the task."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Entry point:"
        }), " Add ", (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "docs/implementation-cycles/README.md"
          })
        }), " pointing maintainers at the policy."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "requirements",
      children: "Requirements"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsxs)(_components.strong, {
          children: ["FR-075", ":R01"]
        }), " — Architecture policy: ", (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "specification-and-planning-artifacts-policy.md"
          })
        }), " under ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/architecture/standards-and-adrs/"
        }), " (source-of-truth ladder, transient vs durable, promotion workflow, discovery)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsxs)(_components.strong, {
          children: ["FR-075", ":R02"]
        }), " — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "docs/implementation-cycles/README.md"
          })
        }), " explains naming, ", (0,jsx_runtime.jsx)(_components.code, {
          children: "output_dir"
        }), ", and links to the policy."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsxs)(_components.strong, {
          children: ["FR-075", ":R03"]
        }), " — Framework ", (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "implementation-cycle-workflow/README.md"
          })
        }), ": section ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Durable planning artifacts (ICW responsibility)"
        }), " with links to policy and implementation-cycles README."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsxs)(_components.strong, {
          children: ["FR-075", ":R04"]
        }), " — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "implementation-cycle-workflow-guide.md"
          })
        }), ": same responsibility called out under Overview with links."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsxs)(_components.strong, {
          children: ["FR-075", ":R05"]
        }), " — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "icw-workflow.yaml"
          })
        }), ": comment on ", (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "output_dir"
          })
        }), " referencing the policy."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsxs)(_components.strong, {
          children: ["FR-075", ":R06"]
        }), " — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: ".cursorrules"
          })
        }), ": ICW steps require persisting outputs under ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/implementation-cycles/"
        }), " (or configured ", (0,jsx_runtime.jsx)(_components.code, {
          children: "output_dir"
        }), "), linking from the ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "task doc"
        }), ", and citing the policy; Kanban integration step requires ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Planning artifact"
        }), " links."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "acceptance-criteria",
      children: "Acceptance criteria"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      className: "contains-task-list",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "All ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "R01–R06"
        }), " artifacts exist in the repo and cross-reference each other consistently."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", (0,jsx_runtime.jsxs)(_components.strong, {
          children: ["E05:S01", ":T75"]
        }), " marked ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "COMPLETE"
        }), " with version anchor ", (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "v0.5.1.75+1"
          })
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "FR-075"
        }), " status updated to reflect completion and links to the release / task."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "out-of-scope",
      children: "Out of scope"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Changing ICW ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "handler"
        }), " code or templates beyond documentation and YAML comments (separate FR if automation must enforce writes)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Migrating historical ", (0,jsx_runtime.jsx)(_components.code, {
          children: "~/.cursor/plans/"
        }), " files (manual hygiene if desired)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "references",
      children: "References"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Policy: ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/architecture/standards-and-adrs/specification-and-planning-artifacts-policy",
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "specification-and-planning-artifacts-policy.md"
          })
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["ICW config: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "packages/frameworks/workflow-mgt/workflows/implementation-cycle-workflow/icw-workflow.yaml"
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