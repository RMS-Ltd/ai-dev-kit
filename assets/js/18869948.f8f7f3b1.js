"use strict";
(self["webpackChunkportal"] = self["webpackChunkportal"] || []).push([["55985"], {
98979(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_implementation_cycles_icw_e_7_s_06_t_10_t_16_specification_md_188_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-implementation-cycles-icw-e-7-s-06-t-10-t-16-specification-md-188.json
var site_docs_implementation_cycles_icw_e_7_s_06_t_10_t_16_specification_md_188_namespaceObject = JSON.parse('{"id":"implementation-cycles/ICW-E7S06-T10-T16-specification","title":"ICW Specification: E7:S06:T10-T16 – Workflow Windsurf Impact Reviews","description":"ICW Instance: ICW-E7S06-T10-T16","source":"@site/../docs/implementation-cycles/ICW-E7S06-T10-T16-specification.md","sourceDirName":"implementation-cycles","slug":"/implementation-cycles/ICW-E7S06-T10-T16-specification","permalink":"/ai-dev-kit/docs/implementation-cycles/ICW-E7S06-T10-T16-specification","draft":false,"unlisted":false,"editUrl":"https://github.com/RMS-Ltd/ai-dev-kit/tree/main/docs/../docs/implementation-cycles/ICW-E7S06-T10-T16-specification.md","tags":[],"version":"current","frontMatter":{},"sidebar":"docsSidebar","previous":{"title":"ICW Implementation Plan: E7:S06:T10-T16 – Workflow Windsurf Impact Reviews","permalink":"/ai-dev-kit/docs/implementation-cycles/ICW-E7S06-T10-T16-implementation-plan"},"next":{"title":"ICW Test Design: E7:S06:T10-T16 – Workflow Windsurf Impact Reviews","permalink":"/ai-dev-kit/docs/implementation-cycles/ICW-E7S06-T10-T16-test-design"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ../docs/implementation-cycles/ICW-E7S06-T10-T16-specification.md


const frontMatter = {};
const contentTitle = 'ICW Specification: E7:S06 – Workflow Windsurf Impact Reviews';

const assets = {

};



const toc = [{
  "value": "Executive Summary",
  "id": "executive-summary",
  "level": 2
}, {
  "value": "Requirements",
  "id": "requirements",
  "level": 2
}, {
  "value": "FR-1: Windsurf Impact Assessment",
  "id": "fr-1-windsurf-impact-assessment",
  "level": 3
}, {
  "value": "FR-2: Skill Mappings",
  "id": "fr-2-skill-mappings",
  "level": 3
}, {
  "value": "FR-3: Migration Plan",
  "id": "fr-3-migration-plan",
  "level": 3
}, {
  "value": "FR-4: Anti-Pattern Vigilance",
  "id": "fr-4-anti-pattern-vigilance",
  "level": 3
}, {
  "value": "Inputs (Per Task)",
  "id": "inputs-per-task",
  "level": 2
}, {
  "value": "Deliverable Format",
  "id": "deliverable-format",
  "level": 2
}, {
  "value": "Workflow-Specific Mapping",
  "id": "workflow-specific-mapping",
  "level": 2
}, {
  "value": "Quality Gates",
  "id": "quality-gates",
  "level": 2
}, {
  "value": "Related Documentation",
  "id": "related-documentation",
  "level": 2
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
    input: "input",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsxs)(_components.h1, {
        id: "icw-specification-e7s06--workflow-windsurf-impact-reviews",
        children: ["ICW Specification: E7:S06", ":T10-T16", " – Workflow Windsurf Impact Reviews"]
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "ICW Instance:"
      }), " ICW-E7S06-T10-T16\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Host Tasks:"
      }), " E7:S06", ":T10", " through E7:S06", ":T16", "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Phase:"
      }), " Specification\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Created:"
      }), " 2026-03-18\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Status:"
      }), " Complete"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "executive-summary",
      children: "Executive Summary"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Unified review specification for T10-T16 workflow Windsurf impact assessments. All seven tasks share the same abstract structure: each reviews one workflow (RW, UKW, CMW, PVW, ICW, Intake, PIR) for Windsurf impact, documents .windsurf skill mappings, and produces a migration plan for T01 (Windsurf artifact cleanup)."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "requirements",
      children: "Requirements"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "fr-1-windsurf-impact-assessment",
      children: "FR-1: Windsurf Impact Assessment"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Review document MUST contain a Windsurf impact assessment section covering:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Extent of Windsurf-specific logic in skills and workflows"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Divergence from .cursorrules intent"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Risk to Cursor-native execution"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "fr-2-skill-mappings",
      children: "FR-2: Skill Mappings"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Review document MUST list all .windsurf skills relevant to the workflow, with mapping to:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: ".cursorrules equivalent, or"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: ".cursor/skills/ target path"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Tasks with no direct .windsurf skills MUST explicitly state \"no relevant skills.\""
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "fr-3-migration-plan",
      children: "FR-3: Migration Plan"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Review document MUST include migration steps for T01:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Which skills to migrate"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Target paths (.cursor/skills/ or .cursorrules)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Any .cursorrules section updates"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "fr-4-anti-pattern-vigilance",
      children: "FR-4: Anti-Pattern Vigilance"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Review document MUST document findings (or \"none observed\") for the deterministic-vs-agentic anti-pattern:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Over-reliance on rigid scripts"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Hardcoded paths"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "\"Run X then Y\" sequences without reasoning, synthesis, or adaptive fallbacks"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Lack of agentic reasoning where the workflow requires it"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "inputs-per-task",
      children: "Inputs (Per Task)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: ".cursorrules workflow section"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: ".windsurf/skills/ relevant entries (from mapping table)"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "packages/frameworks/workflow-mgt/workflows/{workflow}/"
        }), " YAML and config"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "deliverable-format",
      children: "Deliverable Format"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Single markdown document per task with sections:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Windsurf Impact"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Skill Mappings"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Migration Plan"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Anti-Pattern Findings"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "workflow-specific-mapping",
      children: "Workflow-Specific Mapping"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Task"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Workflow"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: ".windsurf skills"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Workflow path"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RW"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "version-bump, rw-execute, readme-update"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "release-workflow/"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T11"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "UKW"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ukw-sync, kanban_completed_update"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "update-kanban-workflow/"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T12"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CMW"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "cmw-maintain"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "changelog-management-workflow/"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T13"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PVW"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(none direct; check rw-execute, version-bump)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "package-version-workflow/"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T14"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ICW"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(none direct)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "implementation-cycle-workflow/"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T15"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Intake"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "intake-process, fr_br_uxr_completed_update"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "intake-workflow/"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T16"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PIR"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(none direct; check project-manager-coordination)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "post-implementation-review/"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "quality-gates",
      children: "Quality Gates"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      className: "contains-task-list",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "All requirements clearly defined"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Inputs and deliverable format specified"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Workflow mapping table complete"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Ready for Test Design phase"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "related-documentation",
      children: "Related Documentation"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/implementation-cycles/ICW-E7S06-T10-T16-test-design",
          children: "Test Design"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/implementation-cycles/ICW-E7S06-T10-T16-implementation-plan",
          children: "Implementation Plan"
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Task docs: T10, T11, T12, T13, T14, T15, T16 in ", (0,jsx_runtime.jsx)(_components.code, {
          children: "story-06-post-windsurf-project-review/"
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