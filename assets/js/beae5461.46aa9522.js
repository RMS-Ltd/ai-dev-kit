"use strict";
(self["webpackChunkportal"] = self["webpackChunkportal"] || []).push([["52259"], {
16153(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_project_management_kanban_fr_br_fr_097_board_stamp_authority_and_forensic_timestamp_recovery_md_bea_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-project-management-kanban-fr-br-fr-097-board-stamp-authority-and-forensic-timestamp-recovery-md-bea.json
var site_docs_project_management_kanban_fr_br_fr_097_board_stamp_authority_and_forensic_timestamp_recovery_md_bea_namespaceObject = JSON.parse('{"id":"project-management/kanban/fr-br/FR-097-board-stamp-authority-and-forensic-timestamp-recovery","title":"FR-097: Board stamp authority, blocking validation, and forensic timestamp recovery","description":"Type: Feature Request (FR)","source":"@site/../docs/project-management/kanban/fr-br/FR-097-board-stamp-authority-and-forensic-timestamp-recovery.md","sourceDirName":"project-management/kanban/fr-br","slug":"/project-management/kanban/fr-br/FR-097-board-stamp-authority-and-forensic-timestamp-recovery","permalink":"/ai-dev-kit/docs/project-management/kanban/fr-br/FR-097-board-stamp-authority-and-forensic-timestamp-recovery","draft":false,"unlisted":false,"editUrl":"https://github.com/RMS-Ltd/ai-dev-kit/tree/main/docs/../docs/project-management/kanban/fr-br/FR-097-board-stamp-authority-and-forensic-timestamp-recovery.md","tags":[],"version":"current","frontMatter":{"lifecycle":"evergreen","ttl_days":null,"created_at":"2026-05-20T16:00:00.000Z","expires_at":null,"housekeeping_policy":"keep"},"sidebar":"docsSidebar","previous":{"title":"FR-096: IPW mandatory documentation phases (update/create + housing)","permalink":"/ai-dev-kit/docs/project-management/kanban/fr-br/FR-096-ipw-documentation-phases-update-create-and-housing"},"next":{"title":"FR-098: Optional ECC harness layer integration for AI Dev Kit adopters","permalink":"/ai-dev-kit/docs/project-management/kanban/fr-br/FR-098-ecc-optional-harness-layer-integration"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ../docs/project-management/kanban/fr-br/FR-097-board-stamp-authority-and-forensic-timestamp-recovery.md


const frontMatter = {
	lifecycle: 'evergreen',
	ttl_days: null,
	created_at: new Date('2026-05-20T16:00:00.000Z'),
	expires_at: null,
	housekeeping_policy: 'keep'
};
const contentTitle = 'FR-097: Board stamp authority, blocking validation, and forensic timestamp recovery';

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
  "value": "User-visible failure",
  "id": "user-visible-failure",
  "level": 3
}, {
  "value": "Why FR-092 closure was insufficient",
  "id": "why-fr-092-closure-was-insufficient",
  "level": 3
}, {
  "value": "Edit-class contract (normative)",
  "id": "edit-class-contract-normative",
  "level": 3
}, {
  "value": "Proposed Solution",
  "id": "proposed-solution",
  "level": 2
}, {
  "value": "Wave 1 — Policy alignment (blocking semantics in docs)",
  "id": "wave-1--policy-alignment-blocking-semantics-in-docs",
  "level": 3
}, {
  "value": "Wave 2 — Validator script (Board Steward v1)",
  "id": "wave-2--validator-script-board-steward-v1",
  "level": 3
}, {
  "value": "Wave 3 — Mutation pipeline hardening",
  "id": "wave-3--mutation-pipeline-hardening",
  "level": 3
}, {
  "value": "Wave 4 — Automatic forensic backfill",
  "id": "wave-4--automatic-forensic-backfill",
  "level": 3
}, {
  "value": "Wave 5 — Optional agent skill (deferred)",
  "id": "wave-5--optional-agent-skill-deferred",
  "level": 3
}, {
  "value": "Wave 6 — Closure",
  "id": "wave-6--closure",
  "level": 3
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
        id: "fr-097-board-stamp-authority-blocking-validation-and-forensic-timestamp-recovery",
        children: "FR-097: Board stamp authority, blocking validation, and forensic timestamp recovery"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Type:"
      }), " Feature Request (FR)", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "ID:"
      }), " FR-097", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Submitted:"
      }), " 2026-05-20", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Submitted By:"
      }), " User — homogenized ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Last modified"
      }), " stamps on ", (0,jsx_runtime.jsx)(_components.code, {
        children: "kboard.md"
      }), " undermine workload and staleness triage", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Priority:"
      }), " CRITICAL", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Severity:"
      }), " HIGH", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Status:"
      }), " RESOLVED — v0.2.15.8+2 (", (0,jsx_runtime.jsx)(_components.code, {
        children: "RW E02:S15:T08 --art"
      }), ")"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Implementing Task:"
      }), " ", (0,jsx_runtime.jsxs)(_components.a, {
        href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-02/story-15-ipw-governance-and-publication-contract/T08-board-stamp-authority-forensic-timestamp-recovery-fr097",
        children: ["E02:S15", ":T08"]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "IPP:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/implementation-cycles/IPP-E2S15T08-board-stamp-authority-forensic-timestamp-recovery",
        children: "IPP-E2S15T8"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Reopens / gates closure of:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/fr-br/BR-069-kboard-fbuboard-earliest-last-modified-timestamps-overwritten",
          children: "BR-069"
        }), " — structural fixes shipped under FR-092; ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "forensic stamp truth"
        }), " and agentic paths remain broken"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/fr-br/UXR-009-last-modified-stamp-forensic-integrity-and-drift-protection",
          children: "UXR-009"
        }), " — Wave 6 evidence modes exist in scripts; ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "UKW agent guidance still mandates row timestamp homogenization"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Predecessor (absorbs residual scope):"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/fr-br/FR-092-canonical-rw-ukw-kanban-consistency-program",
          children: "FR-092"
        }), " — Waves 4/6/8 delivered idempotent corpus sweep and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "non_substantive"
        }), " defaults; did ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "not"
        }), " backfill homogenized history (~61 fbuboard rows at ", (0,jsx_runtime.jsx)(_components.code, {
          children: "2026-04-20 15:52 UTC"
        }), ")"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Establish ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Board Stamp Authority"
      }), ": row ", (0,jsx_runtime.jsx)(_components.code, {
        children: "| Last modified: … UTC"
      }), " may change only when linked FR/BR/UXR/task evidence supports a substantive delta. ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "STRUCTURE"
      }), " passes (prune, sort, dedupe, MoSCOW reorder) must not rewrite row stamps. ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "CONTENT"
      }), " passes require provenance."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Deliver, in order:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Validator-first steward"
        }), " — ", (0,jsx_runtime.jsx)(_components.code, {
          children: "validate_board_stamp_diff.py"
        }), " (proposed path under ", (0,jsx_runtime.jsx)(_components.code, {
          children: "packages/frameworks/workflow-mgt/scripts/validation/"
        }), ") compares before/after board content; ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "blocks"
        }), " RW/UKW when any row stamp changes without evidence."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Script-path hardening"
        }), " — wire ", (0,jsx_runtime.jsx)(_components.code, {
          children: "_cleanup_fbuboard_active_rows"
        }), " and all UKW/RW board paths through evidence modes; remove agent instructions to “unify active row ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Last modified"
        }), " timestamps.”"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Automatic backfill"
        }), " — recover homogenized stamps from linked doc ", (0,jsx_runtime.jsx)(_components.code, {
          children: "**Last updated:**"
        }), " and git history (no manual curation required for the bulk corpus)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Optional phase-2"
        }), " — Cursor/agent ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "skill"
        }), " only if the validator proves insufficient for agentic manual edits."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "User decisions (locked):"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Decision"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Choice"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Backfill"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Automatic"
            }), " (linked doc + git)"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Un evidenced stamp mutation"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Abort"
            }), " UKW/RW (blocking)"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Steward shape"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Validator script first"
            }), "; agent skill optional later"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "problem-statement",
      children: "Problem Statement"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "user-visible-failure",
      children: "User-visible failure"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Active ", (0,jsx_runtime.jsx)(_components.code, {
        children: "kboard.md"
      }), " (and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "kboard.md"
      }), ") rows still share a single synthetic timestamp (e.g. ", (0,jsx_runtime.jsx)(_components.code, {
        children: "2026-04-20 15:52 UTC"
      }), " on ~61 lines). That pattern implies a board-hygiene run touched every row without substantive work on most linked FBUs — making stamps ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "misleading"
      }), " for staleness, workload, and drift analysis."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "why-fr-092-closure-was-insufficient",
      children: "Why FR-092 closure was insufficient"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Layer"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "FR-092 outcome"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Residual gap"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["Script (", (0,jsx_runtime.jsx)(_components.code, {
              children: "enforce_moscow_row_timestamps_with_stats"
            }), ")"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "non_substantive"
            }), " preserves existing stamps; corpus sweep idempotent"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "_cleanup_fbuboard_active_rows"
            }), " still appends ", (0,jsx_runtime.jsx)(_components.code, {
              children: "timestamp_value"
            }), " without evidence gate"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Agentic UKW/RW"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Not fully governed"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: ".cursorrules"
            }), " / ", (0,jsx_runtime.jsx)(_components.code, {
              children: "ukw.md"
            }), " still require ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "temporal-drift normalization"
            }), " (unify row stamps) — contradicts UXR-009 policy"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Corpus"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "stamps_preserved_existing=109"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Preserved ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "wrong"
            }), " homogenized history; no backfill"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Enforcement"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Gate 6 counters on hygiene mode"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["No ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "blocking"
            }), " gate on “stamp delta without evidence” at write boundary"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "edit-class-contract-normative",
      children: "Edit-class contract (normative)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Class"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Examples"
          }), (0,jsx_runtime.jsxs)(_components.th, {
            children: ["Row ", (0,jsx_runtime.jsx)(_components.code, {
              children: "Last modified"
            })]
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "STRUCTURE"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Prune terminal rows, sort MoSCOW, dedupe footers, alias migration, board ", (0,jsx_runtime.jsx)(_components.code, {
              children: "Last Updated"
            }), " metadata"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Must not change"
            }), " (preserve or derive from source, never ", (0,jsx_runtime.jsx)(_components.code, {
              children: "now()"
            }), ")"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "CONTENT"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Linked FR/BR/UXR/task status or body change; version anchor; new task/IPP link on row"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "May change"
            }), " only with positive evidence"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "proposed-solution",
      children: "Proposed Solution"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "wave-1--policy-alignment-blocking-semantics-in-docs",
      children: "Wave 1 — Policy alignment (blocking semantics in docs)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Deprecate ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "row-level"
        }), " “temporal-drift normalization” / “unify active row ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Last modified"
        }), "” in ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".cursorrules"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".claude/commands/ukw.md"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "update-kanban-workflow-agent-execution.md"
        }), ", and narrow ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/fr-br/FR-076-ukw-fbuboard-scope-and-drift-concurrency-controls",
          children: "FR-076"
        }), " to ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "board-header"
        }), " drift only."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Extend ", (0,jsx_runtime.jsx)(_components.code, {
          children: "kanban-governance-policy.md"
        }), " with ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Board Stamp Authority"
        }), " section referencing validator + abort rule."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "wave-2--validator-script-board-steward-v1",
      children: "Wave 2 — Validator script (Board Steward v1)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["New ", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "validate_board_stamp_diff.py"
        })
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Inputs: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "--before"
        }), " / ", (0,jsx_runtime.jsx)(_components.code, {
          children: "--after"
        }), " file paths (or stdin patch), optional ", (0,jsx_runtime.jsx)(_components.code, {
          children: "--evidence-manifest"
        }), " JSON from pipeline."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Detect per-row stamp deltas on ", (0,jsx_runtime.jsx)(_components.code, {
          children: "kboard.md"
        }), "."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "For each delta, require evidence: linked source doc field change, git log touch on linked path since last stamp, or explicit release-scope manifest from RW Step 7."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Exit ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "non-zero"
        }), " (blocking) if any row stamp changed without evidence — message lists row id + denial reason."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Integrate into RW Step 9 and UKW Step 7 validation (same severity as ", (0,jsx_runtime.jsx)(_components.code, {
          children: "validate_release_readiness.py"
        }), " stamp gate)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "wave-3--mutation-pipeline-hardening",
      children: "Wave 3 — Mutation pipeline hardening"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Refactor ", (0,jsx_runtime.jsx)(_components.code, {
          children: "_cleanup_fbuboard_active_rows"
        }), " to use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "enforce_moscow_row_timestamps_with_stats(..., evidence_mode=non_substantive)"
        }), " or ", (0,jsx_runtime.jsx)(_components.code, {
          children: "gated"
        }), " with provider; never blind ", (0,jsx_runtime.jsx)(_components.code, {
          children: "timestamp_value"
        }), " append."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Ensure ", (0,jsx_runtime.jsx)(_components.code, {
          children: "enforce_terminal_timestamps_on_boards"
        }), " fbuboard path passes evidence mode consistently."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Add regression tests: hygiene pass → 0 stamp deltas on fixture with homogenized stamps."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "wave-4--automatic-forensic-backfill",
      children: "Wave 4 — Automatic forensic backfill"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["New ", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "backfill_board_row_stamps.py"
        })
      }), " (or subcommand):"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["For each active MoSCOW row with stamp in a homogeneity cluster (configurable: same timestamp ≥ N rows), compute candidate stamp from:", "\n", (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Linked FR/BR/UXR ", (0,jsx_runtime.jsx)(_components.code, {
              children: "**Last updated:**"
            }), " (preferred)"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Git last-commit date touching linked ", (0,jsx_runtime.jsx)(_components.code, {
              children: "fr-br/*.md"
            }), " or task doc path"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Preserve row if evidence ambiguous (do not invent ", (0,jsx_runtime.jsx)(_components.code, {
              children: "now()"
            }), ")"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Emit diff report + idempotency check; run once under controlled RW."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "wave-5--optional-agent-skill-deferred",
      children: "Wave 5 — Optional agent skill (deferred)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Document extension point: ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".cursor/skills/board-stamp-authority/SKILL.md"
        }), " invoked when validator flags agentic edit paths — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "only if"
        }), " Wave 2–4 leave residual manual-edit bypasses."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "wave-6--closure",
      children: "Wave 6 — Closure"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Re-close ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/fr-br/BR-069-kboard-fbuboard-earliest-last-modified-timestamps-overwritten",
          children: "BR-069"
        }), " and ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/fr-br/UXR-009-last-modified-stamp-forensic-integrity-and-drift-protection",
          children: "UXR-009"
        }), " with live proof: homogeneity cluster eliminated or below threshold; blocking validator green on UKW dry-run + RW dry-run."]
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
        }), " ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "AC1:"
        }), " Row-level “unify ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Last modified"
        }), "” removed from UKW/RW agent guides; governance policy documents STRUCTURE vs CONTENT."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "AC2:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "validate_board_stamp_diff.py"
        }), " exits non-zero when ≥1 row stamp changes without evidence; integrated as ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "blocking"
        }), " in RW Step 9 and UKW validation."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "AC3:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "_cleanup_fbuboard_active_rows"
        }), " and fbuboard terminal pipeline cannot append synthetic stamps on hygiene (", (0,jsx_runtime.jsx)(_components.code, {
          children: "non_substantive"
        }), " / ", (0,jsx_runtime.jsx)(_components.code, {
          children: "gated"
        }), " only)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "AC4:"
        }), " Automatic backfill reduces homogenized-cluster rows (e.g. ", (0,jsx_runtime.jsx)(_components.code, {
          children: "2026-04-20 15:52 UTC"
        }), ") using linked-doc/git derivation; report lists per-row provenance."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "AC5:"
        }), " Post-backfill Gate 8 homogeneity PASS; stamp-diff validator green with evidence manifest."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "AC6:"
        }), " BR-069 and UXR-009 marked CLOSED with release evidence (", (0,jsx_runtime.jsx)(_components.strong, {
          children: "v0.2.15.8+1"
        }), ")."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "AC7 (optional):"
        }), " Agent skill NONE — validator + snapshot sufficient (IPP §4.2)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "references",
      children: "References"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/packages/frameworks/kanban/policies/kanban-governance-policy.md",
          children: "kanban-governance-policy.md"
        }), " — Timestamp governance / evidence modes"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/packages/frameworks/workflow-mgt/scripts/update_kanban_docs.py",
          children: "update_kanban_docs.py"
        }), " — ", (0,jsx_runtime.jsx)(_components.code, {
          children: "_cleanup_fbuboard_active_rows"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "EVIDENCE_MODE_*"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/packages/frameworks/workflow-mgt/scripts/test_stamp_evidence_gate.py",
          children: "test_stamp_evidence_gate.py"
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/packages/frameworks/workflow-mgt/scripts/validate_release_readiness.py",
          children: "validate_release_readiness.py"
        }), " — Gate 6 (extend, do not replace row-diff gate)"]
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