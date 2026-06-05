"use strict";
(self["webpackChunkportal"] = self["webpackChunkportal"] || []).push([["15443"], {
96229(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_project_management_kanban_epics_epic_02_story_15_ipw_governance_and_publication_contract_md_648_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-project-management-kanban-epics-epic-02-story-15-ipw-governance-and-publication-contract-md-648.json
var site_docs_project_management_kanban_epics_epic_02_story_15_ipw_governance_and_publication_contract_md_648_namespaceObject = JSON.parse('{"id":"project-management/kanban/epics/epic-02/story-15-ipw-governance-and-publication-contract","title":"Story 015 – IPW Governance and Publication Contract","description":"Status: ✅ COMPLETE","source":"@site/../docs/project-management/kanban/epics/epic-02/story-15-ipw-governance-and-publication-contract.md","sourceDirName":"project-management/kanban/epics/epic-02","slug":"/project-management/kanban/epics/epic-02/story-15-ipw-governance-and-publication-contract","permalink":"/ai-dev-kit/docs/project-management/kanban/epics/epic-02/story-15-ipw-governance-and-publication-contract","draft":false,"unlisted":false,"editUrl":"https://github.com/RMS-Ltd/ai-dev-kit/tree/main/docs/../docs/project-management/kanban/epics/epic-02/story-15-ipw-governance-and-publication-contract.md","tags":[],"version":"current","frontMatter":{"lifecycle":"evergreen","ttl_days":null,"created_at":"2026-04-14T00:00:00.000Z","expires_at":null,"housekeeping_policy":"keep"},"sidebar":"docsSidebar","previous":{"title":"Epic 2, Story 15, Task 8: Board stamp authority and forensic timestamp recovery (FR-097)","permalink":"/ai-dev-kit/docs/project-management/kanban/epics/epic-02/story-15-ipw-governance-and-publication-contract/T08-board-stamp-authority-forensic-timestamp-recovery-fr097"},"next":{"title":"Epic 2, Story 16, Task 1: Establish canonical perpetual ongoing tasks story (FR-088)","permalink":"/ai-dev-kit/docs/project-management/kanban/epics/epic-02/story-16-perpetual-ongoing-workflow-operations/T01-establish-canonical-perpetual-ongoing-tasks-story-fr088"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ../docs/project-management/kanban/epics/epic-02/story-15-ipw-governance-and-publication-contract.md


const frontMatter = {
	lifecycle: 'evergreen',
	ttl_days: null,
	created_at: new Date('2026-04-14T00:00:00.000Z'),
	expires_at: null,
	housekeeping_policy: 'keep'
};
const contentTitle = 'Story 015 – IPW Governance and Publication Contract';

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
        id: "story-015--ipw-governance-and-publication-contract",
        children: "Story 015 – IPW Governance and Publication Contract"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Status:"
      }), " ✅ COMPLETE", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Priority:"
      }), " HIGH", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Estimated Effort:"
      }), " [TBD]", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Created:"
      }), " 2026-04-14", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Completed:"
      }), " 2026-06-03 (T08 FR-097 shipped ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "v0.2.15.8+3"
      }), "; FR-092 program complete)", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Last updated:"
      }), " 2026-06-05 (story closure — all active tasks T01/T03/T04/T07/T08 COMPLETE; T02/T05/T06 superseded by T07)\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Version:"
      }), " v0.2.15.8+3\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Code:"
      }), " E2S15"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "overview",
      children: "Overview"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Define and harden IPW governance for planning artifact publication so durable spec/test/plan outputs are either deterministically filed into Docusaurus surfaces or explicitly marked as not applicable."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "goal",
      children: "Goal"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Eliminate IPW documentation publication drift by making ownership, filing targets, validation behavior, and backfill expectations explicit and enforceable."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "task-checklist",
      children: "Task Checklist"
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
            children: ["E02:S15", ":T01", " – BR-066: IPW Docusaurus filing contract and backfill"]
          }), " - COMPLETE (v0.2.15.1+3) (HIGH, Phases 1–3; ", (0,jsx_runtime.jsx)(_components.code, {
            children: "--audit-inventory"
          }), " ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "0"
          }), " unwired; BR-066 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "RESOLVED"
          }), ") — ", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-02/story-15-ipw-governance-and-publication-contract/T01-ipw-docusaurus-filing-contract-and-backfill-br066",
            children: "Task doc"
          }), " | ", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ai-dev-kit/docs/project-management/kanban/fr-br/BR-066-ipw-missing-docusaurus-filing-for-planning-artifacts",
            children: "BR-066"
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["[~] ", (0,jsx_runtime.jsxs)(_components.strong, {
            children: ["E02:S15", ":T02", " – IPP post-run governance reconciliation ownership (FR-084)"]
          }), " - SUPERSEDED -> ", (0,jsx_runtime.jsxs)(_components.strong, {
            children: ["E02:S15", ":T07"]
          }), " (FR-084 four-surface contract absorbed into FR-092 Bucket A4 + Wave 3) — ", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-02/story-15-ipw-governance-and-publication-contract/T02-ipp-post-run-governance-reconciliation-ownership-fr084",
            children: "Task doc"
          }), " | ", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ai-dev-kit/docs/project-management/kanban/fr-br/FR-084-ipp-post-run-governance-reconciliation-ownership",
            children: "FR-084 (superseded)"
          }), " | ", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ai-dev-kit/docs/implementation-cycles/IPP-E2S15T02-ipp-post-run-governance-reconciliation-ownership",
            children: "IPP (historical)"
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.input, {
            type: "checkbox",
            checked: true,
            disabled: true
          }), " ", (0,jsx_runtime.jsxs)(_components.strong, {
            children: ["E02:S15", ":T03", " – IPW board-row traceability-churn hardening (FR-089)"]
          }), " - COMPLETE (v0.2.15.3+2, duplicate-footer dual-agreement + traceability churn governance; FR-089 IMPLEMENTED) | ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "NOTE:"
          }), " FR-089 is wired as Bucket-D8 predecessor of FR-092 with B2 outcome drift owned by Wave 4 — ", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-02/story-15-ipw-governance-and-publication-contract/T03-ipw-board-row-footer-duplication-validation-hardening-fr089",
            children: "Task doc"
          }), " | ", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ai-dev-kit/docs/project-management/kanban/fr-br/FR-089-ipw-board-row-footer-duplication-validation-hardening",
            children: "FR-089"
          }), " | ", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ai-dev-kit/docs/implementation-cycles/IPP-E2S15T03-duplicate-footer-validation-hardening-and-timestamp-divergence-guardrails",
            children: "IPP"
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.input, {
            type: "checkbox",
            checked: true,
            disabled: true
          }), " ", (0,jsx_runtime.jsxs)(_components.strong, {
            children: ["E02:S15", ":T04", " – Investigate earliest ", (0,jsx_runtime.jsx)(_components.code, {
              children: "Last modified"
            }), " timestamp overwrite regression (BR-069)"]
          }), " - COMPLETE (", (0,jsx_runtime.jsx)(_components.code, {
            children: "v0.2.15.4+4"
          }), ", Phase A-D delivered: harness + remediation + diagnostics + governance sign-off; BR narrowed with residual corpus-level canonicalization tracked via FR-090) | ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "NOTE:"
          }), " BR-069 final closure is now gated on FR-092 Wave 4 corpus sweep — ", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-02/story-15-ipw-governance-and-publication-contract/T04-investigate-earliest-last-modified-timestamp-overwrite-regression-br069",
            children: "Task doc"
          }), " | ", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ai-dev-kit/docs/project-management/kanban/fr-br/BR-069-kboard-fbuboard-earliest-last-modified-timestamps-overwritten",
            children: "BR-069 (gated)"
          }), " | ", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ai-dev-kit/docs/implementation-cycles/IPP-E2S15T04-br069-row-tail-normalization-and-terminal-timestamp-interaction",
            children: "IPP"
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["[~] ", (0,jsx_runtime.jsxs)(_components.strong, {
            children: ["E02:S15", ":T05", " – Implement UKW/RW canonical row transform engine (FR-090)"]
          }), " - SUPERSEDED -> ", (0,jsx_runtime.jsxs)(_components.strong, {
            children: ["E02:S15", ":T07"]
          }), " (Phase 1-4 evidence retained as predecessor; B1 outcome drift owned by FR-092 Wave 4) — ", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-02/story-15-ipw-governance-and-publication-contract/T05-implement-ukw-rw-canonical-row-transform-engine-fr090",
            children: "Task doc"
          }), " | ", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ai-dev-kit/docs/project-management/kanban/fr-br/FR-090-ukw-canonical-row-transform-engine-and-board-specific-rendering-contracts",
            children: "FR-090 (superseded)"
          }), " | ", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ai-dev-kit/docs/implementation-cycles/IPP-E2S15T05-ukw-rw-canonical-row-transform-engine-fr090",
            children: "IPP (historical)"
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["[~] ", (0,jsx_runtime.jsxs)(_components.strong, {
            children: ["E02:S15", ":T06", " – RW Step 7 self-sufficient scoped kanban reconciliation (FR-091)"]
          }), " - SUPERSEDED -> ", (0,jsx_runtime.jsxs)(_components.strong, {
            children: ["E02:S15", ":T07"]
          }), " (FR-091 contract absorbed into FR-092 Bucket A1-A5 + Wave 2) — ", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-02/story-15-ipw-governance-and-publication-contract/T06-rw-step-7-self-sufficient-scoped-kanban-reconciliation-fr091",
            children: "Task doc"
          }), " | ", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ai-dev-kit/docs/project-management/kanban/fr-br/FR-091-rw-step-7-self-sufficient-scoped-kanban-reconciliation-without-ukw-dependency",
            children: "FR-091 (superseded)"
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.input, {
            type: "checkbox",
            checked: true,
            disabled: true
          }), " ", (0,jsx_runtime.jsxs)(_components.strong, {
            children: ["E02:S15", ":T07", " – Canonical RW/UKW kanban consistency program (FR-092 META)"]
          }), " - ✅ COMPLETE (v0.2.15.7+1, CRITICAL, supersedes T02/T05/T06; gates BR-069/BR-070/UXR-009 closure; consolidates 16 atomic issues across 4 buckets; corpus-level retroactive sweep + preventive release-readiness gate delivered) — ", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-02/story-15-ipw-governance-and-publication-contract/T07-canonical-rw-ukw-kanban-consistency-program-fr092",
            children: "Task doc"
          }), " | ", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ai-dev-kit/docs/project-management/kanban/fr-br/FR-092-canonical-rw-ukw-kanban-consistency-program",
            children: "FR-092"
          }), " | ", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ai-dev-kit/docs/implementation-cycles/IPP-E2S15T07-canonical-rw-ukw-kanban-consistency-program",
            children: "IPP"
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.input, {
            type: "checkbox",
            checked: true,
            disabled: true
          }), " ", (0,jsx_runtime.jsxs)(_components.strong, {
            children: ["E02:S15", ":T08", " – Board stamp authority and forensic timestamp recovery (FR-097)"]
          }), " - ✅ COMPLETE (v0.2.15.8+3 — pre-commit, threshold 3, backfill, git-exempt Gate 8) — ", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-02/story-15-ipw-governance-and-publication-contract/T08-board-stamp-authority-forensic-timestamp-recovery-fr097",
            children: "Task doc"
          }), " | ", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ai-dev-kit/docs/project-management/kanban/fr-br/FR-097-board-stamp-authority-and-forensic-timestamp-recovery",
            children: "FR-097"
          }), " | ", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ai-dev-kit/docs/implementation-cycles/IPP-E2S15T08-board-stamp-authority-forensic-timestamp-recovery",
            children: "IPP"
          })]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {})]
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