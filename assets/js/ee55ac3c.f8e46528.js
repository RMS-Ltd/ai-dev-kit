"use strict";
(self["webpackChunkportal"] = self["webpackChunkportal"] || []).push([["50982"], {
66036(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_project_management_kanban_fr_br_br_069_kboard_fbuboard_earliest_last_modified_timestamps_overwritten_md_ee5_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-project-management-kanban-fr-br-br-069-kboard-fbuboard-earliest-last-modified-timestamps-overwritten-md-ee5.json
var site_docs_project_management_kanban_fr_br_br_069_kboard_fbuboard_earliest_last_modified_timestamps_overwritten_md_ee5_namespaceObject = JSON.parse('{"id":"project-management/kanban/fr-br/BR-069-kboard-fbuboard-earliest-last-modified-timestamps-overwritten","title":"Bug Report BR-069: kboard row-footer timestamp overwrite and task-ID multiplication regression","description":"StatusS15 fr097-backfill-report.json; formal version on RW E02T08)","source":"@site/../docs/project-management/kanban/fr-br/BR-069-kboard-fbuboard-earliest-last-modified-timestamps-overwritten.md","sourceDirName":"project-management/kanban/fr-br","slug":"/project-management/kanban/fr-br/BR-069-kboard-fbuboard-earliest-last-modified-timestamps-overwritten","permalink":"/ai-dev-kit/docs/project-management/kanban/fr-br/BR-069-kboard-fbuboard-earliest-last-modified-timestamps-overwritten","draft":false,"unlisted":false,"editUrl":"https://github.com/RMS-Ltd/ai-dev-kit/tree/main/docs/../docs/project-management/kanban/fr-br/BR-069-kboard-fbuboard-earliest-last-modified-timestamps-overwritten.md","tags":[],"version":"current","frontMatter":{"lifecycle":"evergreen","ttl_days":null,"created_at":"2026-04-21T00:00:00.000Z","expires_at":null,"housekeeping_policy":"keep"},"sidebar":"docsSidebar","previous":{"title":"Bug Report BR-068: Docusaurus strict MDX cannot resolve monorepo markdown links — production build fails","permalink":"/ai-dev-kit/docs/project-management/kanban/fr-br/BR-068-docusaurus-monorepo-markdown-links-break-strict-production-build"},"next":{"title":"Bug Report BR-070: RW-k Stage Files completeness gap allows partial Kanban commit","permalink":"/ai-dev-kit/docs/project-management/kanban/fr-br/BR-070-rw-k-stage-files-completeness-gap-allows-partial-kanban-commit"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ../docs/project-management/kanban/fr-br/BR-069-kboard-fbuboard-earliest-last-modified-timestamps-overwritten.md


const frontMatter = {
	lifecycle: 'evergreen',
	ttl_days: null,
	created_at: new Date('2026-04-21T00:00:00.000Z'),
	expires_at: null,
	housekeeping_policy: 'keep'
};
const contentTitle = 'Bug Report BR-069: kboard row-footer timestamp overwrite and task-ID multiplication regression';

const assets = {

};



const toc = [{
  "value": "Problem Statement",
  "id": "problem-statement",
  "level": 2
}, {
  "value": "UKW / deterministic board sync limitation (confirmed)",
  "id": "ukw--deterministic-board-sync-limitation-confirmed",
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
  "value": "Scope / Affected Areas",
  "id": "scope--affected-areas",
  "level": 2
}, {
  "value": "Acceptance Criteria",
  "id": "acceptance-criteria",
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
        id: "bug-report-br-069-kboard-row-footer-timestamp-overwrite-and-task-id-multiplication-regression",
        children: "Bug Report BR-069: kboard row-footer timestamp overwrite and task-ID multiplication regression"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Status:"
      }), " CLOSED (FR-097 / E02:S15", ":T08", " — ", (0,jsx_runtime.jsx)(_components.code, {
        children: "validate_board_stamp_diff.py"
      }), " blocking gate, pipeline ", (0,jsx_runtime.jsx)(_components.code, {
        children: "non_substantive"
      }), ", automatic backfill 71 rows, Gate 8 homogeneity PASS; evidence: ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/docs/docs/changelog-and-release-notes/changelog-archive/four-surface-reports/fr097-backfill-report.json",
        children: "fr097-backfill-report.json"
      }), "; formal version on ", (0,jsx_runtime.jsx)(_components.code, {
        children: "RW E02:S15:T08"
      }), ")", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Priority:"
      }), " CRITICAL", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Severity:"
      }), " HIGH", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Created:"
      }), " 2026-04-21", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Last updated:"
      }), " 2026-04-27 (closure gated on FR-092 meta-program Wave 4 corpus sweep; T04 sign-off remains valid for narrowed scope)", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Version:"
      }), " N/A", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Code:"
      }), " BR-069"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Implementing Task:"
      }), " ", (0,jsx_runtime.jsxs)(_components.a, {
        href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-02/story-15-ipw-governance-and-publication-contract/T04-investigate-earliest-last-modified-timestamp-overwrite-regression-br069",
        children: ["E02:S15", ":T04"]
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Closure gated on:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/project-management/kanban/fr-br/FR-097-board-stamp-authority-and-forensic-timestamp-recovery",
        children: "FR-097 — Board stamp authority and forensic timestamp recovery"
      }), " / ", (0,jsx_runtime.jsxs)(_components.a, {
        href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-02/story-15-ipw-governance-and-publication-contract/T08-board-stamp-authority-forensic-timestamp-recovery-fr097",
        children: ["E02:S15", ":T08"]
      }), " (supersedes FR-092-only closure for forensic stamp truth)"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Gating note (2026-04-27):"
        }), " T04 Phases A-D delivered narrowed-scope guardrails and remain valid as historical sign-off, but live ", (0,jsx_runtime.jsx)(_components.code, {
          children: "kboard.md"
        }), " continue to exhibit BR-069-class symptoms (duplicate tail tokens, residual stamp churn). Final BR closure is gated on FR-092 Wave 4 corpus sweep producing zero duplicate tail tokens and zero synthetic stamp churn on live boards (FR-092 AC-M5 + AC-M7)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Wave 4 + Wave 6 + Wave 8 sign-off (2026-04-27):"
        }), " B1 root cause identified and fixed (regex flaw in ", (0,jsx_runtime.jsx)(_components.code, {
          children: "_normalize_traceability_segments_for_row"
        }), " — separator class broadened from ", (0,jsx_runtime.jsx)(_components.code, {
          children: "[|]"
        }), " to ", (0,jsx_runtime.jsx)(_components.code, {
          children: "[-|]"
        }), " so hyphen-preceded inline FBU/Task drift is removed). Corpus-canonical sweep evidence in ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/docs/changelog-and-release-notes/changelog-archive/four-surface-reports/fr092-wave4-corpus-sweep-evidence.md",
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "fr092-wave4-corpus-sweep-evidence.md"
          })
        }), ". Wave 6 forensic stamp evidence gate (UXR-009 absorbed) prevents future synthetic stamp churn on board-hygiene paths. Wave 8 live re-sweep across all 4 active boards: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "rows_changed=0"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "rows_with_duplicate_footers=0"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "stamps_appended_with_evidence=0"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "stamps_preserved_existing=109"
        }), ". The systemic regression is structurally eliminated. ", (0,jsx_runtime.jsxs)(_components.strong, {
          children: ["All ACs proved satisfied; final BR-069 closure remains scoped to the live RW E02:S15", ":T07", " --art that publishes the meta-program (Wave 8 terminal)."]
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "problem-statement",
      children: "Problem Statement"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["On ", (0,jsx_runtime.jsx)(_components.code, {
        children: "kboard.md"
      }), ", the earliest/older per-row ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Last modified"
      }), " values are expected to remain stable unless substantive underlying work occurs. A regression is suspected where these historically accurate row timestamps are being overwritten during maintenance or reconciliation flows, degrading forensic timeline integrity."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "In the same row-tail mutation area, task identifiers are also being multiplied (repeated appended task-link segments on a single row), creating structural churn that obscures canonical traceability."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "ukw--deterministic-board-sync-limitation-confirmed",
      children: "UKW / deterministic board sync limitation (confirmed)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Running the typical deterministic ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "UKW"
      }), " board pass (", (0,jsx_runtime.jsx)(_components.code, {
        children: "enforce_terminal_timestamps_on_boards"
      }), " in ", (0,jsx_runtime.jsx)(_components.code, {
        children: "update_kanban_docs.py"
      }), "—duplicate-footer reconciliation, traceability segment normalization, timestamp enforcement, fbuboard active-row cleanup) ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "does not"
      }), " reliably restore fully canonical MoSCOW rows on live ", (0,jsx_runtime.jsx)(_components.code, {
        children: "kboard.md"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Rows still exhibit ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "repeating pipe-delimited fields"
        }), ": the same ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "FBU"
        }), ", ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "task"
        }), ", and/or ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "IPP"
        }), " link segments appear many times on one line; ", (0,jsx_runtime.jsxs)(_components.strong, {
          children: ["multiple ", (0,jsx_runtime.jsx)(_components.code, {
            children: "Last modified"
          }), " tails"]
        }), " may remain where dual-agreement recovery does not normalize (e.g. divergence preserved) or where churn is dominated by ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "task-ID / link duplication"
        }), " ahead of footer logic."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Post-pass audits still report ", (0,jsx_runtime.jsxs)(_components.strong, {
          children: ["large ", (0,jsx_runtime.jsx)(_components.code, {
            children: "rows_with_duplicate_footers"
          }), " counts"]
        }), " on both boards—evidence that ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "structural churn is not cleared"
        }), " by a sync pass alone."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsxs)(_components.strong, {
          children: ["FR-089 / E02:S15", ":T03"]
        }), " added validation/guardrails and reconciliation helpers for duplicate footer chunks under a strict policy; that work ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "does not close"
        }), " this BR—it prevents some classes of silent corruption but ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "does not constitute a full one-shot repair"
        }), " of existing multiplied segments across the corpus."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Implication:"
      }), " cleanup of repeating fields and forensic restoration remains in scope for ", (0,jsx_runtime.jsxs)(_components.strong, {
        children: ["E02:S15", ":T04"]
      }), " (root cause, deterministic row grammar repair, and regression coverage)—not assumed fixed by invoking UKW alone."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "expected-behavior",
      children: "Expected Behavior"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Existing per-row ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Last modified"
        }), " values remain unchanged when no substantive source record change occurred."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Earliest historical row timestamps remain preserved and visible for drift triage."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Each row contains at most one canonical task-ID link segment (no duplicated repeated task-ID append operations)."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "observed-behavior",
      children: "Observed Behavior"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Earliest/older timestamps that appear historically accurate are reported as overwritten."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Board rows lose reliable historical timing signal."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Task-ID segments are duplicated on rows (same ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Exx:Sxx:Txx"
        }), " link appended multiple times)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["After a ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "UKW"
        }), " / ", (0,jsx_runtime.jsx)(_components.code, {
          children: "enforce_terminal_timestamps_on_boards"
        }), " run, ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "repeating row-tail segments remain visible"
        }), " on many MoSCOW lines (stacked links and/or footers); the boards are not brought back to a single canonical ", (0,jsx_runtime.jsx)(_components.code, {
          children: "… | FBU | Task | IPP | Last modified"
        }), " tail per row without further remediation."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "scope--affected-areas",
      children: "Scope / Affected Areas"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/project-management/kanban/kboard.md"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/project-management/kanban/kboard.md"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "packages/frameworks/workflow-mgt/scripts/update_kanban_docs.py"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "UKW/RW board update paths that touch row metadata"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Row-tail traceability segment normalization paths (", (0,jsx_runtime.jsx)(_components.code, {
          children: "FBU | Task | IPP | Last modified"
        }), ")"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Gap between ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "partial"
        }), " automated reconciliation (footer-focused, divergence-preserving) and ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "full"
        }), " row canonicalization required to eliminate repeated fields"]
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
        }), " ", "Reproduction is captured with before/after evidence showing earliest timestamp overwrite."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "Reproduction is captured with before/after evidence showing task-ID multiplication on affected rows."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "Root cause is identified (specific code path + mutation condition)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "Guardrail is defined so non-substantive updates cannot overwrite preserved historical row timestamps."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "Guardrail is defined so row normalization cannot append duplicate task-ID segments."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "Documentary regression: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "test_4_13"
        }), " in ", (0,jsx_runtime.jsx)(_components.code, {
          children: "packages/frameworks/workflow-mgt/scripts/test_update_kanban_docs.py"
        }), " encodes UKW vs ", (0,jsx_runtime.jsx)(_components.code, {
          children: "update_kanban_board"
        }), " ordering divergence and the non-terminal footer + second ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Last modified"
        }), " append (see ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/implementation-cycles/IPP-E2S15T04-br069-row-tail-normalization-and-terminal-timestamp-interaction",
          children: "IPP-E2S15T4"
        }), " §5.3)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "After code remediation, automated tests assert ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "preservation"
        }), " of earliest historical ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Last modified"
        }), " and ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "no"
        }), " spurious second footer on touch-only / UKW runs."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "Regression tests cover single-instance task-ID segment invariants under repeated runs."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "BR-069, implementing task, and board/story wiring are bidirectionally consistent."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "FR-090 architectural redesign is implemented (or narrowed) and provides a canonical row-transform path that eliminates repeat-segment churn class across UKW/RW."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "Documented path ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "beyond UKW"
        }), " scopes machine canonicalization vs residual corpus cleanup; BR now tracks FR-090 completion for full closure."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "related",
      children: "Related"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/implementation-cycles/IPP-E2S15T04-br069-row-tail-normalization-and-terminal-timestamp-interaction",
          children: "IPP-E2S15T4 — BR-069 row-tail normalization and terminal timestamp interaction"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/fr-br/FR-090-ukw-canonical-row-transform-engine-and-board-specific-rendering-contracts",
          children: "FR-090"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/fr-br/UXR-009-last-modified-stamp-forensic-integrity-and-drift-protection",
          children: "UXR-009"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsxs)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-02/story-15-ipw-governance-and-publication-contract/T08-board-stamp-authority-forensic-timestamp-recovery-fr097",
          children: ["E06:S07", ":T115"]
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsxs)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-02/story-15-ipw-governance-and-publication-contract/T04-investigate-earliest-last-modified-timestamp-overwrite-regression-br069",
          children: ["E02:S15", ":T04"]
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/fr-br/FR-089-ipw-board-row-footer-duplication-validation-hardening",
          children: "FR-089"
        }), " (IMPLEMENTED — validation/reconciliation contract; ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "not"
        }), " a substitute for full corpus row repair under this BR)"]
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