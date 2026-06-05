"use strict";
(self["webpackChunkportal"] = self["webpackChunkportal"] || []).push([["80804"], {
14183(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_project_management_kanban_fr_br_br_066_ipw_missing_docusaurus_filing_for_planning_artifacts_md_abe_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-project-management-kanban-fr-br-br-066-ipw-missing-docusaurus-filing-for-planning-artifacts-md-abe.json
var site_docs_project_management_kanban_fr_br_br_066_ipw_missing_docusaurus_filing_for_planning_artifacts_md_abe_namespaceObject = JSON.parse('{"id":"project-management/kanban/fr-br/BR-066-ipw-missing-docusaurus-filing-for-planning-artifacts","title":"Bug Report BR-066 - IPW missing Docusaurus filing for planning artifacts","description":"Status: RESOLVED","source":"@site/../docs/project-management/kanban/fr-br/BR-066-ipw-missing-docusaurus-filing-for-planning-artifacts.md","sourceDirName":"project-management/kanban/fr-br","slug":"/project-management/kanban/fr-br/BR-066-ipw-missing-docusaurus-filing-for-planning-artifacts","permalink":"/ai-dev-kit/docs/project-management/kanban/fr-br/BR-066-ipw-missing-docusaurus-filing-for-planning-artifacts","draft":false,"unlisted":false,"editUrl":"https://github.com/RMS-Ltd/ai-dev-kit/tree/main/docs/../docs/project-management/kanban/fr-br/BR-066-ipw-missing-docusaurus-filing-for-planning-artifacts.md","tags":[],"version":"current","frontMatter":{"lifecycle":"evergreen","ttl_days":null,"created_at":"2026-04-14T00:00:00.000Z","expires_at":null,"housekeeping_policy":"keep"},"sidebar":"docsSidebar","previous":{"title":"Bug Report BR-065 - RW Step 12.5 GitHub release parser fails on v-prefixed version","permalink":"/ai-dev-kit/docs/project-management/kanban/fr-br/BR-065-rw-step-12-5-github-release-parser-fails-on-v-prefixed-version"},"next":{"title":"Bug Report BR-067: RW first doc-only release defaults to BUILD+1 instead of BUILD+0 (doc-init policy)","permalink":"/ai-dev-kit/docs/project-management/kanban/fr-br/BR-067-rw-first-doc-only-release-defaults-to-build-plus-one-not-plus-zero"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ../docs/project-management/kanban/fr-br/BR-066-ipw-missing-docusaurus-filing-for-planning-artifacts.md


const frontMatter = {
	lifecycle: 'evergreen',
	ttl_days: null,
	created_at: new Date('2026-04-14T00:00:00.000Z'),
	expires_at: null,
	housekeeping_policy: 'keep'
};
const contentTitle = 'Bug Report BR-066 - IPW missing Docusaurus filing for planning artifacts';

const assets = {

};



const toc = [{
  "value": "Problem Statement",
  "id": "problem-statement",
  "level": 2
}, {
  "value": "Confirmed Example",
  "id": "confirmed-example",
  "level": 2
}, {
  "value": "Expected Behavior",
  "id": "expected-behavior",
  "level": 2
}, {
  "value": "Observed Behavior",
  "id": "observed-behavior",
  "level": 2
}, {
  "value": "Impact",
  "id": "impact",
  "level": 2
}, {
  "value": "Investigation Scope",
  "id": "investigation-scope",
  "level": 2
}, {
  "value": "Hardening Goals",
  "id": "hardening-goals",
  "level": 2
}, {
  "value": "Proposed Resolution",
  "id": "proposed-resolution",
  "level": 2
}, {
  "value": "Related",
  "id": "related",
  "level": 2
}, {
  "value": "Backfill Inventory and Phasing",
  "id": "backfill-inventory-and-phasing",
  "level": 2
}, {
  "value": "Release Evidence",
  "id": "release-evidence",
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
        id: "bug-report-br-066---ipw-missing-docusaurus-filing-for-planning-artifacts",
        children: "Bug Report BR-066 - IPW missing Docusaurus filing for planning artifacts"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Status:"
      }), " RESOLVED", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Priority:"
      }), " HIGH", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Severity:"
      }), " HIGH - planning/spec artifacts are assumed published but are not discoverable in the Docusaurus documentation system.", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Created:"
      }), " 2026-04-14", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Last updated:"
      }), " 2026-06-03 (E02:S15", ":T01", " Phase 3 — ", (0,jsx_runtime.jsx)(_components.code, {
        children: "--audit-inventory"
      }), " ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "0"
      }), " unwired; see ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/implementation-cycles/IPP-E02S15T01-br066-corpus-tail-phase3",
        children: "IPP-E2S15T1-br066-corpus-tail-phase3.md"
      }), ")", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Version:"
      }), " v0.2.15.1+3", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Code:"
      }), " BR-066", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Implementing Task:"
      }), " ", (0,jsx_runtime.jsxs)(_components.a, {
        href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-02/story-15-ipw-governance-and-publication-contract/T01-ipw-docusaurus-filing-contract-and-backfill-br066",
        children: ["E02:S15", ":T01"]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "problem-statement",
      children: "Problem Statement"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["IPW execution produced durable planning artifacts in repository docs (for example under ", (0,jsx_runtime.jsx)(_components.code, {
        children: "docs/implementation-cycles/"
      }), ") but did not file or wire those artifacts into the Docusaurus documentation system (", (0,jsx_runtime.jsx)(_components.code, {
        children: "portal/"
      }), " navigation/content surfaces)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This creates a false-positive expectation that specifications are published/discoverable when they are only stored in repo-local markdown."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "confirmed-example",
      children: "Confirmed Example"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["IPW target: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "E02:S01:T17"
        }), " (FR-077)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Plan file: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "~/.cursor/plans/ipw_e2s01t17_0af57720.plan.md"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Durable artifacts exist:", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "docs/implementation-cycles/ICW-E2S1T17-specification.md"
            })
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "docs/implementation-cycles/ICW-E2S1T17-test-design.md"
            })
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "docs/implementation-cycles/ICW-E2S1T17-implementation-plan.md"
            })
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "No corresponding Docusaurus filing/wiring was present for this IPW item at verification time."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "expected-behavior",
      children: "Expected Behavior"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "When IPW indicates documentation filing responsibilities (especially spec artifacts), workflow completion must include:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "durable artifact persistence in repo docs, and"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "deterministic filing/wiring into Docusaurus documentation surfaces (or explicit, validated \"not applicable\" path)."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "observed-behavior",
      children: "Observed Behavior"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "IPW/T17 implementation and release completed successfully."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Artifacts were stored in ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/implementation-cycles/"
        }), "."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Docusaurus filing was not performed, despite expectation that it was part of IPW responsibilities."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "impact",
      children: "Impact"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Readers and maintainers cannot reliably find planning/spec artifacts in published docs."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Operational decisions may be made under incorrect assumptions about what has been documented publicly."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Documentation traceability is weakened across plan -> implementation -> published docs."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "investigation-scope",
      children: "Investigation Scope"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Define exact ownership for \"Docusaurus filing\" in IPW lifecycle:", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "IPW itself"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "implementation execution"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "RW Step 7 or another release step"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Inventory prior IPW runs and identify artifacts not filed into Docusaurus."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Determine intended Docusaurus targets (pages, category index, sidebar wiring)."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Define failure semantics:", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "blocking vs non-blocking when filing is missing"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "required remediation output"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Design deterministic validation checks for future enforcement."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "hardening-goals",
      children: "Hardening Goals"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Add explicit IPW contract language for documentation filing obligations."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Add validator/audit check(s) that detect \"durable artifact exists but Docusaurus filing missing\" for applicable tasks."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Add release-time guard or warning path so filing gaps are surfaced before closure."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Add regression tests and a migration checklist for legacy IPW artifacts."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "proposed-resolution",
      children: "Proposed Resolution"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Create implementing task(s) to:", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "codify the filing contract,"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "implement deterministic checks,"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "backfill missing Docusaurus entries for identified historical IPWs."
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update IPW/RW/Documentation guides to remove ambiguity on filing ownership."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Add evidence checklist item in host task docs requiring Docusaurus filing verification (or justified N/A)."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "related",
      children: "Related"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/fr-br/FR-042-implementation-planning-workflow-ipw",
          children: "FR-042"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/fr-br/FR-077-ipw-built-task-status-transition-and-kboard-sync",
          children: "FR-077"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsxs)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-02/story-01-rw-agent-execution-and-docs/T17-ipw-built-task-status-transition-and-kboard-sync-fr077",
          children: ["E02:S01", ":T17"]
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/implementation-cycles/ICW-E2S1T17-*"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "backfill-inventory-and-phasing",
      children: "Backfill Inventory and Phasing"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Inventory report: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/implementation-cycles/IPW-PUBLICATION-BACKFILL-INVENTORY.md"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Phase 1: wire known high-impact missing links (starting with E02:S01", ":T17", ")."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Phase 2: complete historical backlog using deterministic validator-driven sweeps."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "release-evidence",
      children: "Release Evidence"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Phase 3 closure (2026-06-03): ", (0,jsx_runtime.jsx)(_components.code, {
          children: "python \".../validate_ipw_publication_wiring.py\" --audit-inventory"
        }), " → ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "0"
        }), " unwired (scanned 114)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Phase 2: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "v0.2.15.1+2"
        }), " — bulk audit mode, targeted backfill (", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/implementation-cycles/IPP-E02S15T01-br066-corpus-tail-phase3",
          children: "IPP-E2S15T1-br066-publication-backfill-phase2.md"
        }), ")."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Phase 1: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "v0.2.15.1+1"
        }), " (", (0,jsx_runtime.jsx)(_components.code, {
          children: "v0.4.739+1"
        }), " SemVer)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Deterministic validator: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "validate_ipw_publication_wiring.py"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Backfill inventory: ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/implementation-cycles/IPW-PUBLICATION-BACKFILL-INVENTORY",
          children: "IPW-PUBLICATION-BACKFILL-INVENTORY.md"
        }), "."]
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