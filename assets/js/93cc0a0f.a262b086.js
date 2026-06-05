"use strict";
(self["webpackChunkportal"] = self["webpackChunkportal"] || []).push([["89587"], {
95011(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_governance_standards_dev_kit_ipw_ipp_vs_icw_artifacts_md_93c_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-governance-standards-dev-kit-ipw-ipp-vs-icw-artifacts-md-93c.json
var site_docs_governance_standards_dev_kit_ipw_ipp_vs_icw_artifacts_md_93c_namespaceObject = JSON.parse('{"id":"governance/standards/dev-kit-ipw-ipp-vs-icw-artifacts","title":"IPW consolidated IPP vs ICW three-file packages","description":"Purpose: Single discoverable reference for how Implementation Planning Workflow (IPW) durable artifacts may appear in docs/implementation-cycles/ in this repository and in adopters.","source":"@site/../docs/governance/standards/dev-kit-ipw-ipp-vs-icw-artifacts.md","sourceDirName":"governance/standards","slug":"/governance/standards/dev-kit-ipw-ipp-vs-icw-artifacts","permalink":"/ai-dev-kit/docs/governance/standards/dev-kit-ipw-ipp-vs-icw-artifacts","draft":false,"unlisted":false,"editUrl":"https://github.com/RMS-Ltd/ai-dev-kit/tree/main/docs/../docs/governance/standards/dev-kit-ipw-ipp-vs-icw-artifacts.md","tags":[],"version":"current","frontMatter":{"lifecycle":"evergreen","ttl_days":null,"created_at":"2026-05-20T12:00:00.000Z","expires_at":null,"housekeeping_policy":"keep"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ../docs/governance/standards/dev-kit-ipw-ipp-vs-icw-artifacts.md


const frontMatter = {
	lifecycle: 'evergreen',
	ttl_days: null,
	created_at: new Date('2026-05-20T12:00:00.000Z'),
	expires_at: null,
	housekeeping_policy: 'keep'
};
const contentTitle = 'IPW consolidated IPP vs ICW three-file packages';

const assets = {

};



const toc = [{
  "value": "Two durable patterns",
  "id": "two-durable-patterns",
  "level": 2
}, {
  "value": "Decision matrix (informal)",
  "id": "decision-matrix-informal",
  "level": 2
}, {
  "value": "Template and validation",
  "id": "template-and-validation",
  "level": 2
}, {
  "value": "Adopter note",
  "id": "adopter-note",
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
    h1: "h1",
    h2: "h2",
    header: "header",
    hr: "hr",
    li: "li",
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
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "ipw-consolidated-ipp-vs-icw-three-file-packages",
        children: "IPW consolidated IPP vs ICW three-file packages"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Purpose:"
      }), " Single discoverable reference for how ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Implementation Planning Workflow (IPW)"
      }), " durable artifacts may appear in ", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/implementation-cycles/"
        })
      }), " in this repository and in adopters."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Canonical command:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: ".claude/commands/ipw.md"
      }), " (slash ", (0,jsx_runtime.jsx)(_components.code, {
        children: "/ipw"
      }), " or plain-text ", (0,jsx_runtime.jsx)(_components.code, {
        children: "IPW E:S:T"
      }), ")."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Related policy:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/governance/standards/specification-and-planning-artifacts-policy",
        children: "specification-and-planning-artifacts-policy.md"
      }), ". ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "FR:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/project-management/kanban/fr-br/FR-042-implementation-planning-workflow-ipw",
        children: "FR-042"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "two-durable-patterns",
      children: "Two durable patterns"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Pattern"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Files"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "When to use (ai-dev-kit)"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "IPP (consolidated)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["One ", (0,jsx_runtime.jsx)(_components.code, {
              children: "IPP-E\\{epic\\}S\\{story\\}T\\{task\\}-\\{slug\\}.md"
            }), " with Sections 1–Requirements, 2–Specification (incl. ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "§2.5 ADR necessity"
            }), "), 3–Test design, 4–Implementation plan, 5–Documentation deliverables, 6–Documentation housing, 7–Success/verification; optional ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "§8"
            }), " rolling backlog for perpetual tasks"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Default"
            }), " for IPW runs that follow ", (0,jsx_runtime.jsx)(_components.code, {
              children: "ipw.md"
            }), " Phase 7 (", (0,jsx_runtime.jsx)(_components.code, {
              children: "PLAN_DOC_TEMPLATE.md"
            }), "). IPW ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Phase 5.0"
            }), " (ADR gate per ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ai-dev-kit/docs/architecture/standards-and-adrs/ipw-adr-necessity-checklist",
              children: "ipw-adr-necessity-checklist.md"
            }), "), then Phases 5–6, run before the IPP is written. Example: ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ai-dev-kit/docs/implementation-cycles/IPP-E2S16T03-rehouse-workflow-perpetual-tasks",
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "IPP-E2S16T3-rehouse-workflow-perpetual-tasks.md"
              })
            }), "."]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "ICW trio (split)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "ICW-E\\{epic\\}S\\{story\\}T\\{task\\}-specification.md"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "-test-design.md"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "-implementation-plan.md"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Retrospective publication, multi-audience splits, or historical packages already authored as three files. Example: ", (0,jsx_runtime.jsx)(_components.code, {
              children: "ICW-E7S6T18-*"
            }), " (see changelog for E7:S06", ":T18", ")."]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Both patterns satisfy the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Global Implementation Gate"
      }), " in root ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/AGENTS.md",
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "AGENTS.md"
        })
      }), " when the host ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "task document"
      }), " links to them under ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Input"
      }), " / ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "References"
      }), " (bidirectional wiring per FR-042)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "decision-matrix-informal",
      children: "Decision matrix (informal)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "New IPW session in ai-dev-kit:"
        }), " Prefer ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "IPP"
        }), " unless a task explicitly requires split files for governance or tooling."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Perpetual / umbrella maintenance tasks:"
        }), " Prefer ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "IPP"
        }), " with ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "§8 Rolling backlog"
        }), " for follow-on waves without rewriting §1–§6."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Retrospective alignment or external review packages:"
        }), " ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "ICW trio"
        }), " is acceptable; may later be consolidated into one IPP (see ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/implementation-cycles/IPP-E4S19T06-fbu-meta-normalization-and-intake-governance",
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "IPP-E4S19T6-fbu-meta-normalization-and-intake-governance.md"
          })
        }), ") — cite superseded ICW files inside the IPP if folded."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "template-and-validation",
      children: "Template and validation"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "IPP template:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "packages/frameworks/kanban/templates/PLAN_DOC_TEMPLATE.md"
        }), " (§2.5 ADR decision — FR-100)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "ADR necessity checklist:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/architecture/standards-and-adrs/ipw-adr-necessity-checklist",
          children: "ipw-adr-necessity-checklist.md"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Plan wiring:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "packages/frameworks/workflow-mgt/scripts/validation/validate_plan_wiring.py"
        }), " (where enabled)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "adopter-note",
      children: "Adopter note"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The framework agent stub at ", (0,jsx_runtime.jsx)(_components.code, {
        children: "packages/frameworks/workflow-mgt/agents/ipw/AGENTS.md"
      }), " may still describe a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "folder per task"
      }), " (", (0,jsx_runtime.jsx)(_components.code, {
        children: "docs/implementation-cycles/E#-S#-T#/specification.md"
      }), ", etc.). That layout is ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "optional"
      }), " for downstream repos; ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "ai-dev-kit"
      }), " uses ", (0,jsx_runtime.jsxs)(_components.strong, {
        children: ["flat ", (0,jsx_runtime.jsx)(_components.code, {
          children: "IPP-E…S…T…-*.md"
        })]
      }), " files under ", (0,jsx_runtime.jsx)(_components.code, {
        children: "docs/implementation-cycles/"
      }), " per ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ipw.md"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "references",
      children: "References"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: ".claude/commands/ipw.md"
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/fr-br/FR-042-implementation-planning-workflow-ipw",
          children: "FR-042"
        }), " — §8 artifact packaging"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/governance/standards/specification-and-planning-artifacts-policy",
          children: "specification-and-planning-artifacts-policy.md"
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