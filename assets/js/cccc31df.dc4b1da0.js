"use strict";
(self["webpackChunkportal"] = self["webpackChunkportal"] || []).push([["470"], {
77750(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_project_management_kanban_intake_open_taskless_queue_md_ccc_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-project-management-kanban-intake-open-taskless-queue-md-ccc.json
var site_docs_project_management_kanban_intake_open_taskless_queue_md_ccc_namespaceObject = JSON.parse('{"id":"project-management/kanban/intake-open-taskless-queue","title":"Open ∧ taskless FBU — intake queue","description":"Purpose: Working queue for filings under the open taskless FBU intake plan (agentic task creation, one RW -k per epic-aligned filing). Do not batch-generate task bodies; each row is processed with deliberate reasoning.","source":"@site/../docs/project-management/kanban/intake-open-taskless-queue.md","sourceDirName":"project-management/kanban","slug":"/project-management/kanban/intake-open-taskless-queue","permalink":"/ai-dev-kit/docs/project-management/kanban/intake-open-taskless-queue","draft":false,"unlisted":false,"editUrl":"https://github.com/RMS-Ltd/ai-dev-kit/tree/main/docs/../docs/project-management/kanban/intake-open-taskless-queue.md","tags":[],"version":"current","frontMatter":{"lifecycle":"evergreen","ttl_days":null,"created_at":"2026-03-31T12:00:00.000Z","expires_at":null,"housekeeping_policy":"keep"},"sidebar":"docsSidebar","previous":{"title":"AI Dev Kit – Intake Completed Items (FR/BR/UXR)","permalink":"/ai-dev-kit/docs/project-management/kanban/intake-completed"},"next":{"title":"AI Dev Kit – FBU Structure","permalink":"/ai-dev-kit/docs/project-management/kanban/intake-structure"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ../docs/project-management/kanban/intake-open-taskless-queue.md


const frontMatter = {
	lifecycle: 'evergreen',
	ttl_days: null,
	created_at: new Date('2026-03-31T12:00:00.000Z'),
	expires_at: null,
	housekeeping_policy: 'keep'
};
const contentTitle = 'Open ∧ taskless FBU — intake queue';

const assets = {

};



const toc = [{
  "value": "Phase A — Inventory rules (read-only tooling allowed)",
  "id": "phase-a--inventory-rules-read-only-tooling-allowed",
  "level": 2
}, {
  "value": "Per-item agentic checklist (Phase B)",
  "id": "per-item-agentic-checklist-phase-b",
  "level": 2
}, {
  "value": "Multi-epic and stale status (edge cases)",
  "id": "multi-epic-and-stale-status-edge-cases",
  "level": 2
}, {
  "value": "Queue table (snapshot 2026-05-29 — batch semantic intake pass)",
  "id": "queue-table-snapshot-2026-05-29--batch-semantic-intake-pass",
  "level": 2
}, {
  "value": "Queue table (snapshot 2026-04-26, scoped pass under E04:S19)",
  "id": "queue-table-snapshot-2026-04-26-scoped-pass-under-e04s19",
  "level": 2
}, {
  "value": "Should / Could / unbanded (abbreviated)",
  "id": "should--could--unbanded-abbreviated",
  "level": 3
}, {
  "value": "Completion criteria (from plan)",
  "id": "completion-criteria-from-plan",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    br: "br",
    code: "code",
    em: "em",
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
        id: "open--taskless-fbu--intake-queue",
        children: "Open ∧ taskless FBU — intake queue"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Purpose:"
      }), " Working queue for filings under the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "open taskless FBU"
      }), " intake plan (agentic task creation, one ", (0,jsx_runtime.jsx)(_components.code, {
        children: "RW -k"
      }), " per epic-aligned filing). ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Do not"
      }), " batch-generate task bodies; each row is processed with deliberate reasoning."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "MoSCOW source:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/project-management/kanban/kboard",
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "kboard.md"
        })
      }), " (sole active board per ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/architecture/standards-and-adrs/ADR-018-single-kanban-board-consolidation.md",
        children: "ADR-018"
      }), "; ", (0,jsx_runtime.jsx)(_components.code, {
        children: "kboard.md"
      }), " deprecated)", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Governance:"
      }), " KG-R2 (FR/BR), UXR pattern Epic 7 story-000; ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/governance/principles/bidirectional-wiring-principle.md",
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "bidirectional-wiring-principle.md"
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "phase-a--inventory-rules-read-only-tooling-allowed",
      children: "Phase A — Inventory rules (read-only tooling allowed)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["An item appears here when ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "open"
      }), " (not COMPLETE/CLOSED/RESOLVED/REJECTED/VERIFIED_FIXED, etc.) ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "and"
      }), " one of:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["No ", (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "**Implementing Task:**"
          })
        }), " with a working relative link to a task file under ", (0,jsx_runtime.jsx)(_components.code, {
          children: "epics/"
        }), ", or"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Only a ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Story"
        }), " link on the board without ", (0,jsx_runtime.jsx)(_components.code, {
          children: "E#:S##:T##"
        }), ", or"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Claimed ", (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "E#:S##:T##"
          })
        }), " but the task file is missing, or"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Task lives under a ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "non-standard"
        }), " task id (e.g. BR-059 → ", (0,jsx_runtime.jsxs)(_components.strong, {
          children: ["E02:S16", ":T13"]
        }), ", re-housed from ", (0,jsx_runtime.jsx)(_components.code, {
          children: "E06:S07:T109"
        }), ") — treat as ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "filed"
        }), " once BR doc links to that task; do not add a duplicate ", (0,jsx_runtime.jsx)(_components.code, {
          children: "T59"
        }), "."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Reconcile board vs doc: ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "source markdown + on-disk task file"
      }), " wins."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "per-item-agentic-checklist-phase-b",
      children: "Per-item agentic checklist (Phase B)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Before ", (0,jsx_runtime.jsx)(_components.code, {
        children: "RW -k"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Read the full FBU item doc (FR/BR/UXR); note dependencies and collisions (duplicate FR numbers, legacy ", (0,jsx_runtime.jsx)(_components.code, {
          children: "T"
        }), " use)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Epic/Story (KG-R4):"
        }), " default homes — FR → Epic 5 ", (0,jsx_runtime.jsx)(_components.code, {
          children: "story-01-fr-repo"
        }), "; BR → Epic 6 ", (0,jsx_runtime.jsx)(_components.code, {
          children: "story-01-br-repo"
        }), "; UXR registry → Epic 7 ", (0,jsx_runtime.jsx)(_components.code, {
          children: "story-00-uxr-repo"
        }), "; exceptions when board or content already assigns another story/task."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Task id:"
        }), " Prefer repository pattern ", (0,jsx_runtime.jsx)(_components.code, {
          children: "FR-NNN"
        }), "→", (0,jsx_runtime.jsx)(_components.code, {
          children: "E5:S01:TNNN"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "BR-NNN"
        }), "→", (0,jsx_runtime.jsx)(_components.code, {
          children: "E6:S01:TNNN"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "UXR-NNN"
        }), "→", (0,jsx_runtime.jsx)(_components.code, {
          children: "E7:S00:TNNN"
        }), " (story 0 uses ", (0,jsx_runtime.jsx)(_components.code, {
          children: "T03"
        }), "-style slugs) unless a collision forces another ", (0,jsx_runtime.jsx)(_components.code, {
          children: "T"
        }), " (document rationale in the task doc)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Author ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "task doc:"
        }), " scope, deliverables, acceptance criteria tailored to the source — not a generic stub."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Story checklist"
        }), " row + ", (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "**Implementing Task:**"
          })
        }), " on the FBU item doc + task doc links back."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "fbuboard"
        }), " / ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "intake-structure"
        }), " line for that id shows ", (0,jsx_runtime.jsx)(_components.code, {
          children: "E#:S##:T##"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "git checkout epic/\\{N\\}-…"
        }), " matching epic; run ", (0,jsx_runtime.jsx)(_components.code, {
          children: "validate_branch_context.py --strict"
        }), "; then ", (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "RW -k E\\{N\\}:S{SS}:T{TT}"
          })
        }), " (Step 1b: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "--mode rw-k"
        }), ")."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "multi-epic-and-stale-status-edge-cases",
      children: "Multi-epic and stale status (edge cases)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Multi-epic FR (FR-011):"
        }), " One FR may need ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "multiple tasks"
        }), " on different epics — separate filings, separate branches, separate ", (0,jsx_runtime.jsx)(_components.code, {
          children: "RW -k"
        }), " runs."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Duplicate FR ids"
        }), " (two ", (0,jsx_runtime.jsx)(_components.code, {
          children: "FR-010"
        }), " / ", (0,jsx_runtime.jsx)(_components.code, {
          children: "FR-050"
        }), " files): one canonical task per ", (0,jsx_runtime.jsx)(_components.em, {
          children: "file"
        }), "; second task gets a ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "non-matching"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "T"
        }), " only with explicit rationale in the task doc."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Stale board:"
        }), " FR body may say IMPLEMENTED while board says TODO — fix board when wiring."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Non-standard Status headers"
        }), " (some BRs): infer open vs done from body if header is missing."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "queue-table-snapshot-2026-05-29--batch-semantic-intake-pass",
      children: "Queue table (snapshot 2026-05-29 — batch semantic intake pass)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Status:"
      }), " Active ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "fbuboard"
      }), " rows wired with ", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "E:S:T"
        })
      }), " task links (2026-05-29 bidirectional pass). All open MoSCOW rows on ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/project-management/kanban/kboard",
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "kboard.md"
        })
      }), " now include task links from FBU ", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "Implementing Task:"
        })
      }), " fields; M/S bands mirrored on ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/project-management/kanban/kboard",
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "kboard.md"
        })
      }), ". ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "FR-044"
      }), " implementing task corrected to ", (0,jsx_runtime.jsxs)(_components.strong, {
        children: ["E05:S01", ":T44"]
      }), ". Remaining corpus: run gap script on full ", (0,jsx_runtime.jsx)(_components.code, {
        children: "fr-br/"
      }), " for non-board open items."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h2, {
      id: "queue-table-snapshot-2026-04-26-scoped-pass-under-e04s19",
      children: ["Queue table (snapshot 2026-04-26, scoped pass under E04:S19", ":T06", ")"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Epic branches (examples):"
      }), " Epic 5 → ", (0,jsx_runtime.jsx)(_components.code, {
        children: "epic/5-*"
      }), "; Epic 6 → ", (0,jsx_runtime.jsx)(_components.code, {
        children: "epic/6-framework-management"
      }), "; Epic 7 → ", (0,jsx_runtime.jsx)(_components.code, {
        children: "epic/7-documentation-maintenance"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "MoSCOW"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Item"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Needs task file"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Needs Implementing Task"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Suggested epic branch (default)"
          }), (0,jsx_runtime.jsxs)(_components.th, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "RW -k"
            }), " (after filing)"]
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "M"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BR-038"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No (task exists)"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["No (linked to E06:S06", ":T63", ")"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "epic/6-framework-management"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "n/a — already wired"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "M"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BR-039"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "epic/6-framework-management"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "RW -k E06:S01:T39"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "M"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BR-059"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["No (E02:S16", ":T13", " exists)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Wired 2026-05-29"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "main"
            }), " / E2"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Re-housed from E06:S07", ":T109"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsxs)(_components.em, {
        children: ["Remaining open items: process in MoSCOW order; this table was reconciled in Wave 4 for FR-073 AC3 closure evidence under E04:S19", ":T06", ". Continue one item per ", (0,jsx_runtime.jsx)(_components.code, {
          children: "RW -k"
        }), " pass where filing is required."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "should--could--unbanded-abbreviated",
      children: "Should / Could / unbanded (abbreviated)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsxs)(_components.strong, {
          children: ["WIRE only (task exists, add ", (0,jsx_runtime.jsx)(_components.code, {
            children: "**Implementing Task:**"
          }), "):"]
        }), " FR-031, FR-035, FR-036, FR-037, FR-038, FR-039, FR-040, FR-043, FR-044, FR-046, FR-047, FR-048, FR-049, FR-056, FR-062, UXR-005 (verify T05 link), etc."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "CREATE + WIRE:"
        }), " Legacy BR-001–008 backlog, many FR-002+ without ", (0,jsx_runtime.jsx)(_components.code, {
          children: "TNN"
        }), " under ", (0,jsx_runtime.jsx)(_components.code, {
          children: "story-01-fr-repo"
        }), ", UXR-003 registry, FR-050 pair, FR-057–061, BR-040/042/051–053/055/057, etc."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.em, {
        children: "Agents: for each item, re-verify on disk before duplicating a task."
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "completion-criteria-from-plan",
      children: "Completion criteria (from plan)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      className: "contains-task-list",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Every open item in scope has ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Implementing Task"
        }), " + task file (or explicit non-standard id like T109)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Board/structure lines match."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Each ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "new"
        }), " filing has a ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "git"
        }), " trace via ", (0,jsx_runtime.jsx)(_components.code, {
          children: "RW -k"
        }), " on the matching ", (0,jsx_runtime.jsx)(_components.code, {
          children: "epic/\\{N\\}-…"
        }), " branch."]
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