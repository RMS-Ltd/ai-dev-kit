"use strict";
(self["webpackChunkportal"] = self["webpackChunkportal"] || []).push([["68424"], {
25648(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_project_management_kanban_fr_br_fr_090_ukw_canonical_row_transform_engine_and_board_specific_rendering_contracts_md_a3f_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-project-management-kanban-fr-br-fr-090-ukw-canonical-row-transform-engine-and-board-specific-rendering-contracts-md-a3f.json
var site_docs_project_management_kanban_fr_br_fr_090_ukw_canonical_row_transform_engine_and_board_specific_rendering_contracts_md_a3f_namespaceObject = JSON.parse('{"id":"project-management/kanban/fr-br/FR-090-ukw-canonical-row-transform-engine-and-board-specific-rendering-contracts","title":"FR-090: UKW canonical row transform engine and board-specific rendering contracts","description":"Type: Feature Request (FR)","source":"@site/../docs/project-management/kanban/fr-br/FR-090-ukw-canonical-row-transform-engine-and-board-specific-rendering-contracts.md","sourceDirName":"project-management/kanban/fr-br","slug":"/project-management/kanban/fr-br/FR-090-ukw-canonical-row-transform-engine-and-board-specific-rendering-contracts","permalink":"/ai-dev-kit/docs/project-management/kanban/fr-br/FR-090-ukw-canonical-row-transform-engine-and-board-specific-rendering-contracts","draft":false,"unlisted":false,"editUrl":"https://github.com/RMS-Ltd/ai-dev-kit/tree/main/docs/../docs/project-management/kanban/fr-br/FR-090-ukw-canonical-row-transform-engine-and-board-specific-rendering-contracts.md","tags":[],"version":"current","frontMatter":{"lifecycle":"evergreen","ttl_days":null,"created_at":"2026-04-22T00:00:00.000Z","expires_at":null,"housekeeping_policy":"keep"},"sidebar":"docsSidebar","previous":{"title":"FR-089: IPW board-row traceability-churn hardening (footer duplication + task-ID multiplication)","permalink":"/ai-dev-kit/docs/project-management/kanban/fr-br/FR-089-ipw-board-row-footer-duplication-validation-hardening"},"next":{"title":"FR-091: RW Step 7 self-sufficient scoped kanban reconciliation without UKW dependency","permalink":"/ai-dev-kit/docs/project-management/kanban/fr-br/FR-091-rw-step-7-self-sufficient-scoped-kanban-reconciliation-without-ukw-dependency"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ../docs/project-management/kanban/fr-br/FR-090-ukw-canonical-row-transform-engine-and-board-specific-rendering-contracts.md


const frontMatter = {
	lifecycle: 'evergreen',
	ttl_days: null,
	created_at: new Date('2026-04-22T00:00:00.000Z'),
	expires_at: null,
	housekeeping_policy: 'keep'
};
const contentTitle = 'FR-090: UKW canonical row transform engine and board-specific rendering contracts';

const assets = {

};



const toc = [{
  "value": "Summary",
  "id": "summary",
  "level": 2
}, {
  "value": "Problem Statement",
  "id": "problem-statement",
  "level": 2
}, {
  "value": "Goals",
  "id": "goals",
  "level": 2
}, {
  "value": "RW-UKW Coupling Contract",
  "id": "rw-ukw-coupling-contract",
  "level": 2
}, {
  "value": "Responsibility boundaries",
  "id": "responsibility-boundaries",
  "level": 3
}, {
  "value": "Mandatory integration contracts",
  "id": "mandatory-integration-contracts",
  "level": 3
}, {
  "value": "Coupling quality criteria",
  "id": "coupling-quality-criteria",
  "level": 3
}, {
  "value": "Requirements",
  "id": "requirements",
  "level": 2
}, {
  "value": "Functional Requirements",
  "id": "functional-requirements",
  "level": 3
}, {
  "value": "Non-Functional Requirements",
  "id": "non-functional-requirements",
  "level": 3
}, {
  "value": "Acceptance Criteria",
  "id": "acceptance-criteria",
  "level": 2
}, {
  "value": "Scope and Governance Split",
  "id": "scope-and-governance-split",
  "level": 2
}, {
  "value": "Related",
  "id": "related",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    blockquote: "blockquote",
    br: "br",
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
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "fr-090-ukw-canonical-row-transform-engine-and-board-specific-rendering-contracts",
        children: "FR-090: UKW canonical row transform engine and board-specific rendering contracts"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Type:"
      }), " Feature Request (FR)", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "ID:"
      }), " FR-090", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Submitted:"
      }), " 2026-04-22", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Submitted By:"
      }), " User feedback + BR-069/T04 analysis", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Priority:"
      }), " CRITICAL", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Severity:"
      }), " HIGH", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Status:"
      }), " SUPERSEDED by ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/project-management/kanban/fr-br/FR-092-canonical-rw-ukw-kanban-consistency-program",
        children: "FR-092"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Superseded by:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/project-management/kanban/fr-br/FR-092-canonical-rw-ukw-kanban-consistency-program",
        children: "FR-092 — Canonical RW/UKW kanban consistency program (meta)"
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Implementing Task (current):"
      }), " ", (0,jsx_runtime.jsxs)(_components.a, {
        href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-02/story-15-ipw-governance-and-publication-contract/T07-canonical-rw-ukw-kanban-consistency-program-fr092",
        children: ["E02:S15", ":T07"]
      }), " (FR-092 meta)", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Implementing Task (historical):"
      }), " ", (0,jsx_runtime.jsxs)(_components.a, {
        href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-02/story-15-ipw-governance-and-publication-contract/T05-implement-ukw-rw-canonical-row-transform-engine-fr090",
        children: ["E02:S15", ":T05"]
      }), " (SUPERSEDED)"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Primary driver:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/project-management/kanban/fr-br/BR-069-kboard-fbuboard-earliest-last-modified-timestamps-overwritten",
        children: "BR-069"
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Analysis basis:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/implementation-cycles/IPP-E2S15T04-br069-row-tail-normalization-and-terminal-timestamp-interaction",
        children: "IPP-E2S15T4"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Supersede note (2026-04-27):"
        }), " FR-090 architecture (shared canonical row transform pipeline + board-specific rendering contracts) is absorbed into FR-092 Bucket B/Wave 4. T05 Phase-4 evidence asserted AC1-AC6 satisfied, but the user-visible outcome on live ", (0,jsx_runtime.jsx)(_components.code, {
          children: "kboard.md"
        }), " is not produced — duplicate tail tokens persist. The drift (B1-B4 in FR-092) is owned by the meta program; this FR remains authoritative for the architectural target and is closed only when FR-092 sign-off proves the canonical outcome on live boards."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Redesign UKW/RW board-row mutation from append/reconcile string edits to a canonical transform engine:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "parse row into structured components,"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "normalize against explicit board contracts,"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "render deterministic canonical output."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This FR closes the architecture gap exposed by BR-069: repeated FBU/task/IPP/timestamp tail segments, ordering drift between UKW and RW paths, and non-terminal timestamp append churn."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "problem-statement",
      children: "Problem Statement"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Current normalization is path-dependent and line-append oriented. On corrupted rows, repeated runs can preserve or amplify structural corruption:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "duplicate task-id link segments,"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["duplicate or displaced ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Last modified"
        }), " chunks,"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "inconsistent output between RW and standalone UKW ordering,"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["violation of board-specific display semantics (notably ", (0,jsx_runtime.jsx)(_components.code, {
          children: "fbuboard"
        }), " needing FBU-first presentation)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "BR-069 captures the defect evidence. This FR captures the forward architecture needed to eliminate the defect class."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "goals",
      children: "Goals"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Establish one canonical row grammar and transform pipeline shared by RW and UKW."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Enforce board-specific rendering contracts:", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "fbuboard"
            }), ": ", (0,jsx_runtime.jsx)(_components.code, {
              children: "FBU -> Task -> IPP -> Last modified"
            })]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "kboard"
            }), ": task-led contract, deterministic and documented"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Preserve forensic timestamp integrity without appending spurious synthetic timestamps."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Ensure idempotent repeated runs across clean and previously-corrupted rows."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "rw-ukw-coupling-contract",
      children: "RW-UKW Coupling Contract"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "RW and UKW must remain cohesive within their own domains while staying loosely coupled through explicit contracts."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "responsibility-boundaries",
      children: "Responsibility boundaries"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "RW owns release integrity:"
        }), " version lineage, changelog, release slicing, validator gates, and release-safe scoped updates."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "UKW owns kanban coherence:"
        }), " task/story/epic/board synchronization, board hygiene, and priority-state consistency."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "No ownership bleed:"
        }), " UKW must not implicitly perform release concerns; RW must not duplicate UKW intelligence engines."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "mandatory-integration-contracts",
      children: "Mandatory integration contracts"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      className: "contains-task-list",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "FR-090-C1 (Invocation context contract):"
        }), " UKW execution context is explicit (", (0,jsx_runtime.jsx)(_components.code, {
          children: "rw_step_7"
        }), " vs ", (0,jsx_runtime.jsx)(_components.code, {
          children: "standalone"
        }), ") with a documented operation matrix."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "FR-090-C2 (Shared transform contract):"
        }), " both workflows call the same canonical row-transform API and parser/renderer implementation."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "FR-090-C3 (Mutation budget contract):"
        }), " in ", (0,jsx_runtime.jsx)(_components.code, {
          children: "rw_step_7"
        }), ", UKW may mutate only active release slice surfaces unless explicitly escalated."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "FR-090-C4 (Audit contract):"
        }), " UKW and RW emit compatible diagnostics: what changed, why it changed, and the scope touched."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "FR-090-C5 (Failure contract):"
        }), " divergence/uncertainty behavior is identical in both contexts (non-destructive forensic-safe fallback)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "coupling-quality-criteria",
      children: "Coupling quality criteria"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Sympathetic awareness:"
        }), " each workflow understands the other’s purpose and constraints without taking over the other’s responsibilities."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Loose coupling by interface:"
        }), " behavior parity is achieved through shared contracts and APIs, not duplicated logic."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Deterministic cohesion:"
        }), " identical fixtures yield identical canonical outputs regardless of invocation context."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "requirements",
      children: "Requirements"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "functional-requirements",
      children: "Functional Requirements"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      className: "contains-task-list",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "FR-090-F1 (Single pipeline):"
        }), " RW and UKW must both call a shared ", (0,jsx_runtime.jsx)(_components.code, {
          children: "transform_moscow_row_pipeline"
        }), " (or equivalent), removing ordering divergence."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "FR-090-F2 (Parse then render):"
        }), " Replace append-style token rewriting with parse-model-render canonicalization for MoSCOW rows."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "FR-090-F3 (Board contracts):"
        }), " Enforce board-specific token order contracts explicitly; ", (0,jsx_runtime.jsx)(_components.code, {
          children: "fbuboard"
        }), " must always render FBU before task."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "FR-090-F4 (Timestamp semantics):"
        }), " Treat any valid row timestamp as evidence; do not append ", (0,jsx_runtime.jsx)(_components.code, {
          children: "timestamp_now"
        }), " solely because an existing timestamp is non-terminal."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "FR-090-F5 (Duplicate-link control):"
        }), " Guarantee single-instance task-link and FBU-link segments after normalization."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "FR-090-F6 (Divergence policy):"
        }), " Preserve FR-089 dual-agreement/divergence forensic policy with explicit diagnostics."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "FR-090-F7 (Migration mode):"
        }), " Provide deterministic repair behavior for historically corrupted rows, with optional report-only mode."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "non-functional-requirements",
      children: "Non-Functional Requirements"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      className: "contains-task-list",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "FR-090-NF1 (Idempotency):"
        }), " Two consecutive runs on same input produce byte-identical output."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "FR-090-NF2 (Parity):"
        }), " UKW and RW produce identical canonical row output for identical fixtures."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "FR-090-NF3 (Auditability):"
        }), " Emit high-signal metrics for repaired rows, divergence rows, and suppressed timestamp appends."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "FR-090-NF4 (Safety):"
        }), " Maintain non-destructive forensic behavior for unresolved divergence cases."]
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
          disabled: true
        }), " ", "Shared transform path is implemented and used by both ", (0,jsx_runtime.jsx)(_components.code, {
          children: "update_kanban_board"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "enforce_terminal_timestamps_on_boards"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Regression tests verify:", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "fbuboard"
            }), " always renders FBU before Task,"]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "no duplicate task/FBU segments after repeated runs,"
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["no synthetic second ", (0,jsx_runtime.jsx)(_components.code, {
              children: "Last modified"
            }), " append when valid timestamp already exists,"]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "RW/UKW parity on identical fixtures."
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Existing documentary regression (", (0,jsx_runtime.jsx)(_components.code, {
          children: "test_4_13"
        }), ") is either retired or converted into preservation/pass assertions after fix."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "BR-069 residual open ACs are satisfied and bug can be closed or narrowed to residual edge cases only."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "scope-and-governance-split",
      children: "Scope and Governance Split"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "BR-069"
        }), " remains the defect record and closure gate for observed corruption symptoms."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "FR-090"
        }), " owns the architectural redesign and implementation program for UKW/RW row canonicalization."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "related",
      children: "Related"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/fr-br/BR-069-kboard-fbuboard-earliest-last-modified-timestamps-overwritten",
          children: "BR-069"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/fr-br/FR-089-ipw-board-row-footer-duplication-validation-hardening",
          children: "FR-089"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/implementation-cycles/IPP-E2S15T04-br069-row-tail-normalization-and-terminal-timestamp-interaction",
          children: "IPP-E2S15T4"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsxs)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-02/story-15-ipw-governance-and-publication-contract/T04-investigate-earliest-last-modified-timestamp-overwrite-regression-br069",
          children: ["T04 (E02:S15", ":T04", ")"]
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