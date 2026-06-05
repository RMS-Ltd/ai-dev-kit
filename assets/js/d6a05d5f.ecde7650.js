"use strict";
(self["webpackChunkportal"] = self["webpackChunkportal"] || []).push([["16737"], {
11223(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_project_management_kanban_fr_br_uxr_009_last_modified_stamp_forensic_integrity_and_drift_protection_md_d6a_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-project-management-kanban-fr-br-uxr-009-last-modified-stamp-forensic-integrity-and-drift-protection-md-d6a.json
var site_docs_project_management_kanban_fr_br_uxr_009_last_modified_stamp_forensic_integrity_and_drift_protection_md_d6a_namespaceObject = JSON.parse('{"id":"project-management/kanban/fr-br/UXR-009-last-modified-stamp-forensic-integrity-and-drift-protection","title":"User Experience Research: Last-modified stamp forensic integrity and drift protection","description":"Type: User Experience Research (UXR)","source":"@site/../docs/project-management/kanban/fr-br/UXR-009-last-modified-stamp-forensic-integrity-and-drift-protection.md","sourceDirName":"project-management/kanban/fr-br","slug":"/project-management/kanban/fr-br/UXR-009-last-modified-stamp-forensic-integrity-and-drift-protection","permalink":"/ai-dev-kit/docs/project-management/kanban/fr-br/UXR-009-last-modified-stamp-forensic-integrity-and-drift-protection","draft":false,"unlisted":false,"editUrl":"https://github.com/RMS-Ltd/ai-dev-kit/tree/main/docs/../docs/project-management/kanban/fr-br/UXR-009-last-modified-stamp-forensic-integrity-and-drift-protection.md","tags":[],"version":"current","frontMatter":{"lifecycle":"evergreen","ttl_days":null,"created_at":"2026-04-20T13:18:00.000Z","expires_at":null,"housekeeping_policy":"keep"},"sidebar":"docsSidebar","previous":{"title":"User Experience Research: Canonical Kanban Filename Normalization (kboard.md pattern)","permalink":"/ai-dev-kit/docs/project-management/kanban/fr-br/UXR-008-kboard-fbuboard-default-naming-adoption"},"next":{"title":"User Experience Research: kboard IPP column after FBU and task links","permalink":"/ai-dev-kit/docs/project-management/kanban/fr-br/UXR-010-kboard-fbuboard-add-ipp-column-after-fbu-and-task-links"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ../docs/project-management/kanban/fr-br/UXR-009-last-modified-stamp-forensic-integrity-and-drift-protection.md


const frontMatter = {
	lifecycle: 'evergreen',
	ttl_days: null,
	created_at: new Date('2026-04-20T13:18:00.000Z'),
	expires_at: null,
	housekeeping_policy: 'keep'
};
const contentTitle = 'User Experience Research: Last-modified stamp forensic integrity and drift protection';

const assets = {

};



const toc = [{
  "value": "Summary",
  "id": "summary",
  "level": 2
}, {
  "value": "Research Question",
  "id": "research-question",
  "level": 2
}, {
  "value": "Findings So Far",
  "id": "findings-so-far",
  "level": 2
}, {
  "value": "Scope",
  "id": "scope",
  "level": 2
}, {
  "value": "Proposed Guardrails (Analysis)",
  "id": "proposed-guardrails-analysis",
  "level": 2
}, {
  "value": "Acceptance Criteria",
  "id": "acceptance-criteria",
  "level": 2
}, {
  "value": "References",
  "id": "references",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    blockquote: "blockquote",
    br: "br",
    code: "code",
    em: "em",
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
        id: "user-experience-research-last-modified-stamp-forensic-integrity-and-drift-protection",
        children: "User Experience Research: Last-modified stamp forensic integrity and drift protection"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Type:"
      }), " User Experience Research (UXR)", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Submitted:"
      }), " 2026-04-20", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Submitted By:"
      }), " User", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Priority:"
      }), " CRITICAL", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Status:"
      }), " CLOSED (FR-097 / E02:S15", ":T08", " — agent guides corrected; ", (0,jsx_runtime.jsx)(_components.code, {
        children: "validate_board_stamp_diff.py"
      }), " aborts un evidenced deltas; UKW/RW snapshot + Gate 8 homogeneity; backfill restored per-row provenance; formal version on ", (0,jsx_runtime.jsx)(_components.code, {
        children: "RW E02:S15:T08"
      }), ")", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Code:"
      }), " UXR-009", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Last updated:"
      }), " 2026-04-27 (closure gated on FR-092 meta-program Wave 6)", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Implementing Task:"
      }), " E06:S07", ":T115", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Repository Task:"
      }), " ", (0,jsx_runtime.jsxs)(_components.a, {
        href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-02/story-15-ipw-governance-and-publication-contract/T08-board-stamp-authority-forensic-timestamp-recovery-fr097",
        children: ["E06:S07", ":T115"]
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Planning package (ICW):"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/implementation-cycles/ICW-E6S07T115-implementation-plan",
        children: "Specification"
      }), " · ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/implementation-cycles/ICW-E6S07T115-implementation-plan",
        children: "Test design"
      }), " · ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/implementation-cycles/ICW-E6S07T115-implementation-plan",
        children: "Implementation plan"
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Closure gated on:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/project-management/kanban/fr-br/FR-097-board-stamp-authority-and-forensic-timestamp-recovery",
        children: "FR-097 — Board stamp authority and forensic timestamp recovery"
      }), " / ", (0,jsx_runtime.jsxs)(_components.a, {
        href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-02/story-15-ipw-governance-and-publication-contract/T08-board-stamp-authority-forensic-timestamp-recovery-fr097",
        children: ["E02:S15", ":T08"]
      }), " (primary); ", (0,jsx_runtime.jsxs)(_components.a, {
        href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-02/story-15-ipw-governance-and-publication-contract/T08-board-stamp-authority-forensic-timestamp-recovery-fr097",
        children: ["E06:S07", ":T115"]
      }), " remains historical script delivery owner"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Gating note (2026-04-27):"
        }), " Forensic stamp work-evidence gate integration into row mutation paths in ", (0,jsx_runtime.jsx)(_components.code, {
          children: "update_kanban_docs.py"
        }), " is owned by FR-092 Bucket C4 + Wave 6. The ", (0,jsx_runtime.jsx)(_components.code, {
          children: "stamps_appended_with_evidence"
        }), " / ", (0,jsx_runtime.jsx)(_components.code, {
          children: "stamps_skipped_no_evidence"
        }), " audit counters are FR-092 deliverables; final UXR-009 closure is gated on those shipping under FR-092 sign-off."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Wave 6 progress (2026-04-27):"
        }), " Work-evidence gate implemented in ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/packages/frameworks/workflow-mgt/scripts/update_kanban_docs.py",
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "update_kanban_docs.py"
          })
        }), " as the ", (0,jsx_runtime.jsx)(_components.code, {
          children: "EVIDENCE_MODE_*"
        }), " family (", (0,jsx_runtime.jsx)(_components.code, {
          children: "work_authoritative"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "non_substantive"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "gated"
        }), ") plumbed through ", (0,jsx_runtime.jsx)(_components.code, {
          children: "enforce_moscow_row_timestamps_with_stats"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "apply_canonical_row_transform_pipeline"
        }), ". ", (0,jsx_runtime.jsx)(_components.code, {
          children: "run_corpus_canonical_sweep"
        }), " now defaults to ", (0,jsx_runtime.jsx)(_components.code, {
          children: "non_substantive"
        }), ", eliminating synthetic stamp churn from board-hygiene passes. Counters ", (0,jsx_runtime.jsx)(_components.code, {
          children: "stamps_appended_with_evidence"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "stamps_skipped_no_evidence"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "stamps_preserved_existing"
        }), " exposed on the corpus-sweep report and on ", (0,jsx_runtime.jsx)(_components.code, {
          children: "FourSurfaceReport.summary"
        }), ". Test coverage at ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/packages/frameworks/workflow-mgt/scripts/test_stamp_evidence_gate.py",
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "test_stamp_evidence_gate.py"
          })
        }), " (7/7 green) confirms: never-rewrite for existing stamps, ", (0,jsx_runtime.jsx)(_components.code, {
          children: "non_substantive"
        }), " skips append even when row is stampless, ", (0,jsx_runtime.jsx)(_components.code, {
          children: "gated"
        }), " requires positive ", (0,jsx_runtime.jsx)(_components.code, {
          children: "evidence_provider"
        }), " response, default-deny when provider absent, corpus sweep defaults to ", (0,jsx_runtime.jsx)(_components.code, {
          children: "non_substantive"
        }), ". Live corpus dry-run reports 0 synthetic stamps and 109 preserved. AC1–AC5 drafted satisfied; final closure remains gated on Wave 8 RW dry-run."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Wave 7 + Wave 8 sign-off (2026-04-27):"
        }), " Forensic stamp evidence is composed into the FR-092 Wave 7 release-readiness gate as Gate 6 in ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/packages/frameworks/workflow-mgt/scripts/validate_release_readiness.py",
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "validate_release_readiness.py"
          })
        }), "; wired into RW Step 10 with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "blocking: true"
        }), ". Wave 8 live demonstration: against the live repo + a fixture four-surface report describing FR-092 Wave 0-7 release scope (", (0,jsx_runtime.jsx)(_components.code, {
          children: "evidence_mode=non_substantive"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "appended=0"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "skipped=0"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "preserved=109"
        }), "), Gate 6 returned PASS — confirming forensic stamp counters are internally consistent and synthetic stamp churn is structurally impossible in non-substantive mode. The Wave 6 gate is now exercised on every RW release. ", (0,jsx_runtime.jsxs)(_components.strong, {
          children: ["All ACs proved satisfied; final UXR-009 closure remains scoped to the live RW E02:S15", ":T07", " --art that publishes the meta-program (Wave 8 terminal)."]
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "Last modified"
      }), " row stamps are being rewritten during board-level maintenance passes (for example UKW reconciliation), causing many rows to share the same timestamp and destroying the signal needed to detect true temporal drift. This UXR defines guardrails so stamps update only when the underlying task/FR/BR/UXR record has real work evidence."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "research-question",
      children: "Research Question"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["How should board update workflows preserve forensic integrity so ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Last modified"
      }), " reflects substantive work on the underlying record, not incidental board rewrites?"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "findings-so-far",
      children: "Findings So Far"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "kboard.md"
        }), " currently shows broad timestamp homogenization (many rows with the same minute), indicating rewrite-driven updates rather than work-driven updates."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "This behavior makes at-a-glance drift inspection unreliable and undermines temporal triage."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Current logic appears to conflate \"row touched by workflow\" with \"underlying work occurred.\""
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "scope",
      children: "Scope"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Define authoritative semantics for ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Last modified"
        }), " in MoSCOW rows."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Define positive evidence rules for stamp mutation (what qualifies as \"work done\")."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Define guardrails for UKW/RW/normalization scripts so board rewrites do not mutate stamps."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Define validation and audit outputs that detect and block synthetic timestamp churn."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "proposed-guardrails-analysis",
      children: "Proposed Guardrails (Analysis)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Work-evidence gate:"
        }), " update row timestamp only when linked canonical source changed materially (task/FR/BR/UXR doc content delta, status transition, checklist/AC progression, version anchor update, or new evidence/reference commit)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "No-op board rewrite immunity:"
        }), " sorting, formatting, reconciliation, alias migration, and metadata refresh must not mutate per-row stamps."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Source-of-truth derivation:"
        }), " derive candidate timestamp from linked record evidence (git/file metadata plus semantic diff checks), not from board write time."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Change classification:"
        }), " every row update path must classify as ", (0,jsx_runtime.jsx)(_components.code, {
          children: "substantive"
        }), " or ", (0,jsx_runtime.jsx)(_components.code, {
          children: "non_substantive"
        }), "; only ", (0,jsx_runtime.jsx)(_components.code, {
          children: "substantive"
        }), " can mutate stamp."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Drift anomaly validator:"
        }), " fail or warn when a run proposes mass stamp updates without corresponding substantive-source deltas."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Audit logging:"
        }), " UKW/RW output must report counters (", (0,jsx_runtime.jsx)(_components.code, {
          children: "rows_audited"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "substantive_updates"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "suppressed_non_substantive_updates"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "anomaly_flag"
        }), ") for forensic review."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Backfill policy:"
        }), " preserve historical stamps unless linked evidence justifies correction; avoid blanket normalization rewrites."]
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
        }), " ", "A normative ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Last modified"
        }), " policy is documented in board governance/docs with explicit substantive/non-substantive definitions. ", (0,jsx_runtime.jsxs)(_components.em, {
          children: ["(Wave 2 + Wave 6: codified in ", (0,jsx_runtime.jsx)(_components.code, {
            children: "kanban-governance-policy.md"
          }), " \"RW preventive vs UKW corrective separation\" + Wave 6 forensic semantics block)"]
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "UKW/RW board update paths enforce \"no substantive evidence, no stamp update.\" ", (0,jsx_runtime.jsxs)(_components.em, {
          children: ["(Wave 6: ", (0,jsx_runtime.jsx)(_components.code, {
            children: "EVIDENCE_MODE_NON_SUBSTANTIVE"
          }), " for board-hygiene paths; ", (0,jsx_runtime.jsx)(_components.code, {
            children: "EVIDENCE_MODE_GATED"
          }), " for evidence-driven paths; ", (0,jsx_runtime.jsx)(_components.code, {
            children: "_row_has_substantive_evidence"
          }), " per-row gate)"]
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "Validator/analyzer exists (or is specified for implementation) to detect synthetic mass stamp churn. ", (0,jsx_runtime.jsx)(_components.em, {
          children: "(Wave 6: corpus-sweep stamp_evidence_aggregate + FourSurfaceReport stamp_evidence summary; Wave 7 release-readiness gate consumes these counters)"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "UKW/RW execution output includes stamp-integrity audit counters and anomaly detection status. ", (0,jsx_runtime.jsx)(_components.em, {
          children: "(Wave 6: counters surfaced via corpus sweep report and FourSurfaceReport)"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "Current timestamp homogenization issue is reproducibly prevented in regression scenarios. ", (0,jsx_runtime.jsxs)(_components.em, {
          children: ["(Wave 6: ", (0,jsx_runtime.jsx)(_components.code, {
            children: "test_stamp_evidence_gate.py"
          }), " 7/7 green incl. corpus-default test)"]
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "references",
      children: "References"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/kboard",
          children: "fbuboard"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/kboard",
          children: "kboard"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-02/story-16-perpetual-ongoing-workflow-operations/T03-rehouse-workflow-perpetual-tasks-and-harden-guardrails",
          children: "T110"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-02/story-15-ipw-governance-and-publication-contract/T08-board-stamp-authority-forensic-timestamp-recovery-fr097",
          children: "T115"
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