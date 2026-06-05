"use strict";
(self["webpackChunkportal"] = self["webpackChunkportal"] || []).push([["62966"], {
42850(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_architecture_standards_and_adrs_adr_020_kanban_transform_entrypoint_contract_and_rw_config_loader_unification_md_34c_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-architecture-standards-and-adrs-adr-020-kanban-transform-entrypoint-contract-and-rw-config-loader-unification-md-34c.json
var site_docs_architecture_standards_and_adrs_adr_020_kanban_transform_entrypoint_contract_and_rw_config_loader_unification_md_34c_namespaceObject = JSON.parse('{"id":"architecture/standards-and-adrs/ADR-020-kanban-transform-entrypoint-contract-and-rw-config-loader-unification","title":"ADR-020: Kanban row-transform entrypoint contract + rw_config_loader unification","description":"Status: Accepted","source":"@site/../docs/architecture/standards-and-adrs/ADR-020-kanban-transform-entrypoint-contract-and-rw-config-loader-unification.md","sourceDirName":"architecture/standards-and-adrs","slug":"/architecture/standards-and-adrs/ADR-020-kanban-transform-entrypoint-contract-and-rw-config-loader-unification","permalink":"/ai-dev-kit/docs/architecture/standards-and-adrs/ADR-020-kanban-transform-entrypoint-contract-and-rw-config-loader-unification","draft":false,"unlisted":false,"editUrl":"https://github.com/RMS-Ltd/ai-dev-kit/tree/main/docs/../docs/architecture/standards-and-adrs/ADR-020-kanban-transform-entrypoint-contract-and-rw-config-loader-unification.md","tags":[],"version":"current","frontMatter":{"lifecycle":"evergreen","ttl_days":null,"created_at":"2026-06-05T07:30:00.000Z","expires_at":null,"housekeeping_policy":"keep"},"sidebar":"docsSidebar","previous":{"title":"ADR-019 — RW BUILD increment and release-tag immutability","permalink":"/ai-dev-kit/docs/architecture/standards-and-adrs/ADR-019-rw-build-increment-and-tag-immutability"},"next":{"title":"ADR: OpenClaw process sentinel skill (agent orphan detection)","permalink":"/ai-dev-kit/docs/architecture/standards-and-adrs/ADR-openclaw-process-sentinel-skill"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ../docs/architecture/standards-and-adrs/ADR-020-kanban-transform-entrypoint-contract-and-rw-config-loader-unification.md


const frontMatter = {
	lifecycle: 'evergreen',
	ttl_days: null,
	created_at: new Date('2026-06-05T07:30:00.000Z'),
	expires_at: null,
	housekeeping_policy: 'keep'
};
const contentTitle = 'ADR-020: Kanban row-transform entrypoint contract + rw_config_loader unification';

const assets = {

};



const toc = [{
  "value": "Context",
  "id": "context",
  "level": 2
}, {
  "value": "Decision",
  "id": "decision",
  "level": 2
}, {
  "value": "1) Canonical kanban row-transform entrypoint contract",
  "id": "1-canonical-kanban-row-transform-entrypoint-contract",
  "level": 3
}, {
  "value": "2) Canonical <code>rw_config_loader</code> for <code>rw-config.yaml</code>",
  "id": "2-canonical-rw_config_loader-for-rw-configyaml",
  "level": 3
}, {
  "value": "Consequences",
  "id": "consequences",
  "level": 2
}, {
  "value": "Alternatives considered",
  "id": "alternatives-considered",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    br: "br",
    code: "code",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
    hr: "hr",
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
        id: "adr-020-kanban-row-transform-entrypoint-contract--rw_config_loader-unification",
        children: ["ADR-020: Kanban row-transform entrypoint contract + ", (0,jsx_runtime.jsx)(_components.code, {
          children: "rw_config_loader"
        }), " unification"]
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Status:"
      }), " Accepted", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Date:"
      }), " 2026-06-05", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Deciders:"
      }), " Maintainer (via E02:S13", ":T10", " / IPP)", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Related:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/project-management/kanban/fr-br/FR-092-canonical-rw-ukw-kanban-consistency-program",
        children: "RF-092"
      }), ", ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/project-management/kanban/fr-br/FR-097-board-stamp-authority-and-forensic-timestamp-recovery",
        children: "FR-097"
      }), ", ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/implementation-cycles/IPP-E02S13T10-kanban-transform-consolidation-and-config-loader-unification",
        children: "IPP-E02S13T10"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "context",
      children: "Context"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "RW release correctness requires that MoSCOW row “tail” transforms be applied with:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "a consistent contract (traceability normalization, duplicate-footer reconciliation, timestamp enforcement, and cosmetic state icon injection), and"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["consistent config discovery behavior from ", (0,jsx_runtime.jsx)(_components.code, {
          children: "rw-config.yaml"
        }), " across scripts/validators."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Historically, this project had fragmentation risks in both areas:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Row tail transforms could be routed through different pipelines or contract/evidence defaults."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Multiple scripts/validators implemented independent ", (0,jsx_runtime.jsx)(_components.code, {
          children: "load_rw_config"
        }), " functions, creating the risk of drift in path resolution or return-shape semantics."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "decision",
      children: "Decision"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1-canonical-kanban-row-transform-entrypoint-contract",
      children: "1) Canonical kanban row-transform entrypoint contract"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Use ", (0,jsx_runtime.jsx)(_components.code, {
        children: "packages/frameworks/workflow-mgt/scripts/update_kanban_docs.py"
      }), " as the canonical implementation of the shared row-transform entrypoint:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "apply_canonical_row_transform_pipeline(...)"
        }), " is the single “parse-normalize-render” entrypoint."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "ROW_TRANSFORM_CONTRACT_RW_STEP7"
        }), " is used for RW Step 7 (", (0,jsx_runtime.jsx)(_components.code, {
          children: "invocation_context: rw_step_7"
        }), ")."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "ROW_TRANSFORM_CONTRACT_STANDALONE"
        }), " is used for deterministic/standalone contexts (e.g. explicit corpus-canonical sweeps and standalone invocations)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Evidence-mode semantics:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["RW Step 7 uses ", (0,jsx_runtime.jsx)(_components.code, {
          children: "evidence_mode = work_authoritative"
        }), " (caller asserts the invocation is substantive work)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Standalone/board-hygiene contexts use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "evidence_mode = non_substantive"
        }), " (must not mint synthetic stamps)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Both contracts preserve existing ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Last modified"
        }), " timestamps; touch-only updates are stamp-neutral."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Diagnostics contract detail:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Diagnostics ", (0,jsx_runtime.jsx)(_components.code, {
          children: "executed_steps"
        }), " intentionally reports only the canonical non-cosmetic steps (traceability, duplicate-footer reconciliation, timestamp enforcement). Cosmetic state-icon injection may change in-order but is not part of the executed-step contract surface."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "2-canonical-rw_config_loader-for-rw-configyaml",
      children: ["2) Canonical ", (0,jsx_runtime.jsx)(_components.code, {
        children: "rw_config_loader"
      }), " for ", (0,jsx_runtime.jsx)(_components.code, {
        children: "rw-config.yaml"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Introduce and standardize on:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "packages/frameworks/workflow-mgt/scripts/rw_config_loader.py"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Call sites must use the shared loader behavior rather than per-file ", (0,jsx_runtime.jsx)(_components.code, {
        children: "load_rw_config"
      }), " implementations."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Shared loader return-shape conventions:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "load_rw_config(project_root=...)"
        }), " returns ", (0,jsx_runtime.jsx)(_components.code, {
          children: "dict"
        }), " on success; returns ", (0,jsx_runtime.jsx)(_components.code, {
          children: "None"
        }), " on missing/unreadable/invalid-YAML."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "load_rw_config_from_path(config_path=...)"
        }), " loads from an explicit file path; returns ", (0,jsx_runtime.jsx)(_components.code, {
          children: "None"
        }), " on missing/unreadable/invalid-YAML."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "load_rw_config_or_empty(...)"
        }), " never returns ", (0,jsx_runtime.jsx)(_components.code, {
          children: "None"
        }), " (missing => ", (0,jsx_runtime.jsx)(_components.code, {
          children: "{}"
        }), ")."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This consolidation prevents schema/return-shape drift and keeps all downstream validators operating on identical config-derived inputs."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "consequences",
      children: "Consequences"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Pros", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Contract and evidence-mode semantics become consistent between RW agentic execution and deterministic script execution paths."
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Config discovery becomes stable and parity-testable; validators no longer risk subtle config-return-shape differences."
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Trade-offs", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Some scripts keep backward-compatible wrappers for legacy imports, but the YAML parsing and missing-file conventions are centralized."
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "alternatives-considered",
      children: "Alternatives considered"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Option"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Rejected because"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["Keep independent per-script ", (0,jsx_runtime.jsx)(_components.code, {
              children: "load_rw_config"
            }), " implementations"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Drift risk: return-shape/path-resolution inconsistencies and untestable parity"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Route row tail transforms through multiple ad-hoc pipelines"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Drift risk: contract/evidence-mode differences cause repeated segments or ordering divergence"
          })]
        })]
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