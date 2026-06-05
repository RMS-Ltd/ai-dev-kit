"use strict";
(self["webpackChunkportal"] = self["webpackChunkportal"] || []).push([["7108"], {
79993(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_project_management_kanban_kanban_board_guide_md_276_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-project-management-kanban-kanban-board-guide-md-276.json
var site_docs_project_management_kanban_kanban_board_guide_md_276_namespaceObject = JSON.parse('{"id":"project-management/kanban/kanban-board-guide","title":"AI Dev Kit – Kanban Board Guide","description":"Last Updated E04T01+2)","source":"@site/../docs/project-management/kanban/kanban-board-guide.md","sourceDirName":"project-management/kanban","slug":"/project-management/kanban/kanban-board-guide","permalink":"/ai-dev-kit/docs/project-management/kanban/kanban-board-guide","draft":false,"unlisted":false,"editUrl":"https://github.com/RMS-Ltd/ai-dev-kit/tree/main/docs/../docs/project-management/kanban/kanban-board-guide.md","tags":[],"version":"current","frontMatter":{"lifecycle":"evergreen","ttl_days":null,"created_at":"2026-01-20T00:00:00.000Z","expires_at":null,"housekeeping_policy":"keep"},"sidebar":"docsSidebar","previous":{"title":"AI Dev Kit – FBU Structure","permalink":"/ai-dev-kit/docs/project-management/kanban/intake-structure"},"next":{"title":"AI Dev Kit – Kanban Completed Tasks","permalink":"/ai-dev-kit/docs/project-management/kanban/kanban-completed"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ../docs/project-management/kanban/kanban-board-guide.md


const frontMatter = {
	lifecycle: 'evergreen',
	ttl_days: null,
	created_at: new Date('2026-01-20T00:00:00.000Z'),
	expires_at: null,
	housekeeping_policy: 'keep'
};
const contentTitle = 'AI Dev Kit – Kanban Board Guide';

const assets = {

};



const toc = [{
  "value": "Overview",
  "id": "overview",
  "level": 2
}, {
  "value": "Parent-Child Relationship",
  "id": "parent-child-relationship",
  "level": 2
}, {
  "value": "Task-Level Display (Not Story-Level)",
  "id": "task-level-display-not-story-level",
  "level": 2
}, {
  "value": "Active board vs completed ledger (lean MoSCOW)",
  "id": "active-board-vs-completed-ledger-lean-moscow",
  "level": 3
}, {
  "value": "Status transition ownership (FR-077)",
  "id": "status-transition-ownership-fr-077",
  "level": 3
}, {
  "value": "Planning artifact publication contract (BR-066)",
  "id": "planning-artifact-publication-contract-br-066",
  "level": 3
}, {
  "value": "MoSCOW row <code>Last modified</code> (UTC)",
  "id": "moscow-row-last-modified-utc",
  "level": 3
}, {
  "value": "MoSCOW Prioritized In-Progress Tasks",
  "id": "moscow-prioritized-in-progress-tasks",
  "level": 2
}, {
  "value": "MoSCOW Categories",
  "id": "moscow-categories",
  "level": 3
}, {
  "value": "Task Ordering",
  "id": "task-ordering",
  "level": 3
}, {
  "value": "Required Row Timestamp",
  "id": "required-row-timestamp",
  "level": 3
}, {
  "value": "MoSCOW state icons (UXR-012 / E04:S13; UXR-019 / E04:S13)",
  "id": "moscow-state-icons-uxr-012--e04s13-uxr-019--e04s13",
  "level": 3
}, {
  "value": "E/S/T inline notation (UXR-014 / E04:S19)",
  "id": "est-inline-notation-uxr-014--e04s19",
  "level": 3
}, {
  "value": "Task-Level Display (not story-level)",
  "id": "task-level-display-not-story-level-1",
  "level": 3
}, {
  "value": "How to Add Work",
  "id": "how-to-add-work",
  "level": 2
}, {
  "value": "Formatting Governance (E07:S01 / UXR-005)",
  "id": "formatting-governance-e07s01--uxr-005",
  "level": 2
}, {
  "value": "Quick Reference",
  "id": "quick-reference",
  "level": 2
}, {
  "value": "Board Structure",
  "id": "board-structure",
  "level": 2
}, {
  "value": "FR/BR/UXR Prioritization Board",
  "id": "frbruxr-prioritization-board",
  "level": 2
}, {
  "value": "Board Sections",
  "id": "board-sections",
  "level": 3
}, {
  "value": "Usage",
  "id": "usage",
  "level": 3
}, {
  "value": "Integration",
  "id": "integration",
  "level": 3
}, {
  "value": "Notes",
  "id": "notes",
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
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "ai-dev-kit--kanban-board-guide",
        children: "AI Dev Kit – Kanban Board Guide"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Last Updated:"
      }), " 2026-03-09 (RW: E04:S18", ":T01", "+2)", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Version:"
      }), " v0.4.18.1+2"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "For structured information only, see:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/kboard",
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "kboard.md"
          })
        }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
          children: "For Epic/Story/Task structure, see:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/kanban-structure",
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "kanban-structure.md"
          })
        }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
          children: "For completed tasks, see:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/kanban-completed",
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "kanban-completed.md"
          })
        }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
          children: "For FR/BR/UXR inventory, see:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/intake-structure",
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "intake-structure.md"
          })
        }), " and ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/intake-open-taskless-queue",
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "intake-open-taskless-queue.md"
          })
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "overview",
      children: "Overview"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["This guide explains how to use and understand the Kanban board. The board tracks framework and infrastructure work on the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "AI Dev Kit"
      }), " reference repository (public genesis tree). Book-project Kanban (formerly Epic 24) lives in the private companion repo — see ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/architecture/standards-and-adrs/ADR-006-book-project-private-repository-spin-off",
        children: "ADR-006"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Structure:"
      }), " All Kanban documentation lives under ", (0,jsx_runtime.jsx)(_components.code, {
        children: "docs/project-management/kanban/"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Epic overviews: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "epics/Epic-X/Epic-X.md"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Story documents: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "epics/Epic-X/Story-XXX-*.md"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Board views: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "_index.md"
        }), " (quick view), ", (0,jsx_runtime.jsx)(_components.code, {
          children: "kboard.md"
        }), " (tasks), ", (0,jsx_runtime.jsx)(_components.code, {
          children: "kanban-structure.md"
        }), " (epics), and this file (guide)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "parent-child-relationship",
      children: "Parent-Child Relationship"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["This Kanban board serves as the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "parent document"
      }), " to Story documents, similar to how Story documents are parents of Task documents:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Board → Story:"
        }), " This board links to and tracks all Story documents"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Story → Task:"
        }), " Story documents link to and track all Task documents"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "This creates a clear hierarchy: Board (parent) → Story (child) → Task (grandchild)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "task-level-display-not-story-level",
      children: "Task-Level Display (Not Story-Level)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "The board MUST show tasks, not stories."
      }), " Story-level reporting obfuscates the actual state—you cannot see which tasks are complete vs TODO vs in progress. Each board entry should link to a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Task document"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Exception:"
      }), " Show a story only when its tasks have not yet been filed (e.g. epics with placeholder T01–T07 but no discrete task documents). Once tasks are filed, replace the story entry with the individual task entries."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "UKW and RW agents must follow this when updating the board."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "active-board-vs-completed-ledger-lean-moscow",
      children: "Active board vs completed ledger (lean MoSCOW)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsxs)(_components.strong, {
          children: [(0,jsx_runtime.jsx)(_components.code, {
            children: "kboard.md"
          }), ":"]
        }), " sole ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "active"
        }), " MoSCOW board — live work only (", (0,jsx_runtime.jsx)(_components.code, {
          children: "TODO"
        }), " / ", (0,jsx_runtime.jsx)(_components.code, {
          children: "IN PROGRESS"
        }), " / ", (0,jsx_runtime.jsx)(_components.code, {
          children: "IN REVIEW"
        }), " / ", (0,jsx_runtime.jsx)(_components.code, {
          children: "WAITING"
        }), " / ", (0,jsx_runtime.jsx)(_components.code, {
          children: "OPEN"
        }), " / ", (0,jsx_runtime.jsx)(_components.code, {
          children: "PERPETUAL"
        }), "), plus ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Verification (V)"
        }), " band rows where the task is shipped but the FBU is still OPEN (", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/architecture/standards-and-adrs/ADR-018-single-kanban-board-consolidation",
          children: "ADR-018"
        }), ")."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsxs)(_components.strong, {
          children: [(0,jsx_runtime.jsx)(_components.code, {
            children: "intake-structure.md"
          }), " / ", (0,jsx_runtime.jsx)(_components.code, {
            children: "intake-open-taskless-queue.md"
          }), ":"]
        }), " FR/BR/UXR inventory and open ∧ taskless queue (not MoSCOW)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsxs)(_components.strong, {
          children: [(0,jsx_runtime.jsx)(_components.code, {
            children: "kanban-completed.md"
          }), " / ", (0,jsx_runtime.jsx)(_components.code, {
            children: "intake-completed.md"
          }), ":"]
        }), " terminal tasks and FBUs — append here ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "before"
        }), " removing rows from the active board (", (0,jsx_runtime.jsx)(_components.code, {
          children: "UKW -c"
        }), " or UKW Step 6.5–6.6)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Do not"
        }), " use the active board as an archive log: no multi-line “archived …” footnotes, no ", (0,jsx_runtime.jsx)(_components.code, {
          children: "**date:**"
        }), " release journals between bullets, no ", (0,jsx_runtime.jsx)(_components.code, {
          children: "✅ COMPLETE"
        }), " rows left in MoSCOW after hygiene."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "BR-059:"
        }), " story-checklist gaps do not justify mirroring the entire TODO backlog onto the board; promote or add only in-flight work. See Kanban governance policy § MoSCOW — active board vs completed ledger."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "RW Step 7 vs UKW (FR-038):"
      }), " During a release, ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "RW Step 7 — Scoped Kanban Sync (UKW Mode)"
      }), " updates the board and docs for the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "release task"
      }), " only (scoped). ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Standalone UKW"
      }), " is for ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "board-wide"
      }), " MoSCOW and housekeeping. See Kanban governance policy §1.1."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "status-transition-ownership-fr-077",
      children: "Status transition ownership (FR-077)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Authoritative source:"
        }), " Task document status is authoritative."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Decision/write owner:"
        }), " Implementation execution owns lifecycle transitions in task docs:", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "TODO -> IN PROGRESS"
            }), " at first non-planning implementation change."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "IN PROGRESS -> COMPLETE"
            }), " only after acceptance evidence is recorded."]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Propagation owner:"
        }), " RW Step 7 (scoped) or standalone UKW propagates authoritative task-doc status to board rows."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Atomicity rule:"
        }), " Task-doc status update and board-row update must occur in the same change set/session."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Safety rule:"
        }), " Board rows must not be advanced independently of task-doc status."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "planning-artifact-publication-contract-br-066",
      children: "Planning artifact publication contract (BR-066)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["IPW/ICW-derived task docs must expose publication state explicitly:", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "Publication Status: PUBLISHED"
            }), ", or"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "Publication Status: NOT_APPLICABLE"
            }), " with ", (0,jsx_runtime.jsx)(_components.code, {
              children: "Publication N/A Reason:"
            }), "."]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["For ", (0,jsx_runtime.jsx)(_components.code, {
          children: "PUBLISHED"
        }), ", link the task planning package artifacts in ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/implementation-cycles/"
        }), " from the host task doc (", (0,jsx_runtime.jsx)(_components.code, {
          children: "specification"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "test-design"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "implementation-plan"
        }), ")."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Validate deterministically before release closure with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "validate_ipw_publication_wiring.py --requested E:S:T"
        }), "."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "moscow-row-last-modified-utc",
      children: ["MoSCOW row ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Last modified"
      }), " (UTC)"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Each line in ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "MoSCOW Prioritized In-Progress Tasks"
      }), " (", (0,jsx_runtime.jsx)(_components.code, {
        children: "kboard.md"
      }), ") and ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "MoSCOW Prioritized FR/BR/UXR Items"
      }), " (", (0,jsx_runtime.jsx)(_components.code, {
        children: "kboard.md"
      }), ") must end with a pipe-delimited field:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "| Last modified: YYYY-MM-DD HH:MM UTC"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Derivation (required for new stamps):"
        }), " UTC from linked task/FR/BR/UXR doc ", (0,jsx_runtime.jsx)(_components.code, {
          children: "**Last updated:**"
        }), ", else latest ", (0,jsx_runtime.jsx)(_components.code, {
          children: "git"
        }), " commit on that doc — use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "backfill_board_row_stamps.py"
        }), " or RW Step 7 gated evidence. ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Never"
        }), " batch-assign one session time across rows."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "STRUCTURE hygiene (UKW prune/sort/wiring):"
        }), " ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Do not"
        }), " change row ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Last modified"
        }), ". Board header ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Last Updated"
        }), " may change."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "CONTENT (status/version/substantive row delta):"
        }), " May update stamp only with linked-source evidence or release-scope manifest (", (0,jsx_runtime.jsx)(_components.code, {
          children: "validate_board_stamp_diff.py"
        }), ")."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Forbidden:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "normalize_board_row_timestamps.py"
        }), " (removed), manual “set all rows to current UTC”, or hour-bucket homogenization (", (0,jsx_runtime.jsx)(_components.code, {
          children: "17:00"
        }), " / ", (0,jsx_runtime.jsx)(_components.code, {
          children: "18:00"
        }), " / ", (0,jsx_runtime.jsx)(_components.code, {
          children: "19:00"
        }), " on dozens of rows)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Same convention"
        }), " on both boards; wired kboard pairs should match when derived from the same source doc."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "moscow-prioritized-in-progress-tasks",
      children: "MoSCOW Prioritized In-Progress Tasks"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The board includes a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "MoSCOW Prioritized In-Progress Tasks"
      }), " section that shows active tasks (status: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "TODO"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "IN PROGRESS"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "IN REVIEW"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "WAITING"
      }), ", or perpetual variants) organized by MoSCOW priority and ordered chronologically (most recently updated first)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "moscow-categories",
      children: "MoSCOW Categories"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "M (Must Have):"
          }), " Critical tasks that must be completed"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Highest priority items requiring immediate attention"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Tasks that block other work or are on critical path"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "S (Should Have):"
          }), " Important tasks that should be completed"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "High-value items that contribute significantly to goals"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Tasks that are important but not blocking"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "C (Could Have):"
          }), " Nice-to-have tasks that could be completed"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Lower priority items that add value but are not essential"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Tasks that can be deferred if needed"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "O (Ongoing):"
          }), " Perpetual maintenance tasks that never complete"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Perpetual tasks that are tracked but don't block other work"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Tasks that require continuous attention (e.g., workflow maintenance, changelog management)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "These tasks are visible but don't interfere with prioritization of completable work"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "W (Won't Have):"
          }), " Tasks deferred or not being done at this time"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Tasks explicitly marked as deferred"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Tasks not being actively worked on"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "task-ordering",
      children: "Task Ordering"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Tasks within each MoSCOW section are ordered chronologically, with most recently updated tasks at the top."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "required-row-timestamp",
      children: "Required Row Timestamp"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Every active MoSCOW row in ", (0,jsx_runtime.jsx)(_components.code, {
        children: "kboard.md"
      }), " must end with a terminal pipe-delimited timestamp field:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "| Last modified: YYYY-MM-DD HH:MM UTC"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["This is mandatory for human scanability and forensic traceability. RW/UKW must ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "preserve"
      }), " existing row stamps on STRUCTURE-only edits. New stamps only via linked-doc derivation or evidenced CONTENT passes — see ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/packages/frameworks/workflow-mgt/KB/Documentation/Developer_Docs/vwmp/board-stamp-authority.md",
        children: "board-stamp-authority.md"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "moscow-state-icons-uxr-012--e04s13-uxr-019--e04s13",
      children: ["MoSCOW state icons (UXR-012 / E04:S13", ":T07", "; UXR-019 / E04:S13", ":T08", ")"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Every active MoSCOW bullet on ", (0,jsx_runtime.jsx)(_components.code, {
        children: "kboard.md"
      }), " must place ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "exactly one Set A (emoji) icon"
      }), " immediately before the status token, after the title segment:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-text",
        children: "- **{E:S:T or FR/BR/UXR-id}** – {title} - {emoji} {STATUS} (notes…) | … | Last modified: … UTC\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Primary (boards):"
          }), " Use the mapping in ", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ai-dev-kit/docs/project-management/kanban/fr-br/UXR-012-kanban-fbu-state-icons-for-moscow-rows",
            children: "UXR-012"
          }), " (Set A) plus task extensions in ", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ai-dev-kit/docs/project-management/kanban/fr-br/UXR-019-kanban-task-waiting-in-review-state-icons",
            children: "UXR-019"
          }), ". ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Fallback (Set B)"
          }), " is for plain-text exports only — do not mix Set B into repo board rows by default."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Task lifecycle nuance (UXR-019):"
          }), " Use ", (0,jsx_runtime.jsx)(_components.code, {
            children: "IN REVIEW"
          }), " when implementation is done and peer/maintainer review is in flight. Use ", (0,jsx_runtime.jsx)(_components.code, {
            children: "WAITING"
          }), " when blocked on an ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "external gate"
          }), " (GitHub install sign-off, adopter replay, PO acceptance) — not for active coding (", (0,jsx_runtime.jsx)(_components.code, {
            children: "IN PROGRESS"
          }), ") or hard blockers (", (0,jsx_runtime.jsx)(_components.code, {
            children: "BLOCKED"
          }), ")."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Hygiene / UKW bookkeeping:"
          }), " Do not change icons on STRUCTURE-only passes (same class as FR-097 stamp preservation). Update icons only when the ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "status word"
          }), " changes substantively."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Automation:"
          }), " ", (0,jsx_runtime.jsx)(_components.code, {
            children: "state_icons.py"
          }), ", ", (0,jsx_runtime.jsx)(_components.code, {
            children: "backfill_board_state_icons.py"
          }), ", and ", (0,jsx_runtime.jsx)(_components.code, {
            children: "validate_kanban_state_icons.py"
          }), " (Gate 9 in ", (0,jsx_runtime.jsx)(_components.code, {
            children: "validate_release_readiness.py"
          }), "). Operator notes: ", (0,jsx_runtime.jsx)(_components.a, {
            href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/packages/frameworks/workflow-mgt/KB/Documentation/Developer_Docs/vwmp/state-icons.md",
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "state-icons.md"
            })
          }), "."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "est-inline-notation-uxr-014--e04s19",
      children: ["E/S/T inline notation (UXR-014 / E04:S19", ":T09", ")"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Write-default:"
      }), " Use two-digit zero-padding for Epic, Story, and Task when the numeric value is ", (0,jsx_runtime.jsx)(_components.code, {
        children: "<10"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Canonical colon form: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "E02:S01:T04"
        }), " (not ", (0,jsx_runtime.jsx)(_components.code, {
          children: "E02:S01:T04"
        }), ")"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Natural width when ", (0,jsx_runtime.jsx)(_components.code, {
          children: "≥10"
        }), ": ", (0,jsx_runtime.jsx)(_components.code, {
          children: "E21:S16:T57"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Perpetual tasks (", (0,jsx_runtime.jsx)(_components.code, {
          children: "T101+"
        }), "): three-digit task segment, e.g. ", (0,jsx_runtime.jsx)(_components.code, {
          children: "E02:S16:T101"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Compact triggers (RW/UKW/IPW): ", (0,jsx_runtime.jsx)(_components.code, {
          children: "E02S16T04"
        }), " with the same padding rules"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Read tolerance:"
      }), " Validators and parsers continue to accept legacy unpadded forms; do not break RW/UKW on historical docs. ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "New writes"
      }), " (boards, intake, agents, ", (0,jsx_runtime.jsx)(_components.code, {
        children: "update_kanban_docs.py"
      }), ") MUST emit the padded write-default."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Formatter:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "packages/frameworks/workflow-mgt/scripts/kanban/est_format.py"
      }), " — shared canonicalization for scripts and corpus hygiene."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "task-level-display-not-story-level-1",
      children: "Task-Level Display (not story-level)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "MoSCOW rows must reference tasks"
      }), " (", (0,jsx_runtime.jsx)(_components.code, {
        children: "E07:S06:T03"
      }), ", etc.), not whole stories (", (0,jsx_runtime.jsx)(_components.code, {
        children: "E7:S06"
      }), "). Story-level lines collapse many tasks into one line and ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "obfuscate actual state"
      }), " (e.g. T02 complete while the story still reads TODO). Use ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/project-management/kanban/kanban-structure",
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "kanban-structure.md"
        })
      }), " for epic/story hierarchy; use ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/project-management/kanban/kboard",
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "kboard.md"
        })
      }), " for actionable, task-granular work."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "how-to-add-work",
      children: "How to Add Work"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Create Epic"
          }), " (if needed):"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Create ", (0,jsx_runtime.jsx)(_components.code, {
              children: "epics/Epic-X/"
            }), " directory"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Add ", (0,jsx_runtime.jsx)(_components.code, {
              children: "epics/Epic-X/Epic-X.md"
            }), " (Epic overview)"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Update ", (0,jsx_runtime.jsx)(_components.code, {
              children: "kboard.md"
            }), " and ", (0,jsx_runtime.jsx)(_components.code, {
              children: "_index.md"
            })]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Create Story"
          }), ":"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Add ", (0,jsx_runtime.jsx)(_components.code, {
              children: "epics/Epic-X/Story-XXX-short-slug.md"
            })]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Update Epic doc (", (0,jsx_runtime.jsx)(_components.code, {
              children: "epics/Epic-X/Epic-X.md"
            }), ") with Story reference"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Update ", (0,jsx_runtime.jsx)(_components.code, {
              children: "kboard.md"
            }), " and ", (0,jsx_runtime.jsx)(_components.code, {
              children: "_index.md"
            })]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Create Task"
          }), ":"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Add ", (0,jsx_runtime.jsx)(_components.code, {
              children: "epics/Epic-X/Story-XXX/T\\{task\\}-description.md"
            }), " (separate file format) OR"]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Add delimited section in Story document using Task ID as header"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Update Story document with Task reference"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Track Progress"
          }), ":"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Update Task status in Task doc"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Update Story status in Story doc"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Update Epic doc with version markers as work completes"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Update board views as needed"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["See ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/project-management/kanban/",
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "README.md"
        })
      }), " for full structure details and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "docs/governance/kanban/kanban-governance-policy.md"
      }), " for governance."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.h2, {
      id: "formatting-governance-e07s01--uxr-005",
      children: ["Formatting Governance (E07:S01", ":T09", " / UXR-005)"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The UXR workflow owns all Kanban template/document maintenance. As of ", (0,jsx_runtime.jsxs)(_components.strong, {
        children: ["E07:S01", ":T09", " / UXR-005"]
      }), ", every multi-line MoSCOW bullet must have ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "exactly one blank line"
      }), " separating it from adjacent entries (single-line bullets stay contiguous). When updating ", (0,jsx_runtime.jsx)(_components.code, {
        children: "kanban-board*.md"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "kboard.md"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "kanban-structure.md"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "_index.md"
      }), ", or related templates:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Insert a blank line between bullets whose description spans more than one visual line."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Leave single-line bullets directly adjacent to minimize vertical noise."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If a release reveals formatting drift, escalate through T09 (Kanban Template Governance) before touching other boards."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "RW/UKW/MMW agents should log evidence (MMW log + validator output) showing the rule was checked or restored."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Validator:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "packages/frameworks/workflow-mgt/scripts/validation/validate_kanban_moscow_spacing.py"
      }), " (also delegated from ", (0,jsx_runtime.jsx)(_components.code, {
        children: "scripts/documentation/validate-documentation-consistency.py"
      }), " with ", (0,jsx_runtime.jsx)(_components.code, {
        children: "--check moscow_spacing"
      }), "). Release Readiness ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Gate 10"
      }), " (warn, non-blocking)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example (before — invalid):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-markdown",
        children: "- **E02:S01:T01** – First long MoSCOW row … | [Task](…) | Last modified: …\n- **E02:S01:T02** – Second long MoSCOW row … | [Task](…) | Last modified: …\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example (after — valid):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-markdown",
        children: "- **E02:S01:T01** – First long MoSCOW row … | [Task](…) | Last modified: …\n\n- **E02:S01:T02** – Second long MoSCOW row … | [Task](…) | Last modified: …\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "quick-reference",
      children: "Quick Reference"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Board Quick View:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/_index",
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "_index.md"
          })
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Board (MoSCOW Tasks):"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/kboard",
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "kboard.md"
          })
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Board (Epic Structure):"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/kanban-structure",
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "kanban-structure.md"
          })
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Board (FR/BR/UXR Prioritization):"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/kboard",
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "kboard.md"
          })
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Kanban Policy:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/governance/kanban/kanban-governance-policy.md"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Versioning Policy:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/governance/standards/dev-kit-versioning-policy.md"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "board-structure",
      children: "Board Structure"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The board is organized into five separate documents:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "MoSCOW Prioritized Tasks"
        }), " (", (0,jsx_runtime.jsx)(_components.code, {
          children: "kboard.md"
        }), ") - Sole active board: M/S/", (0,jsx_runtime.jsx)(_components.strong, {
          children: "V"
        }), "/C/O/W (includes wired FBUs and ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Verification"
        }), " band per ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/architecture/standards-and-adrs/ADR-018-single-kanban-board-consolidation.md",
          children: "ADR-018"
        }), ")"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Epic/Story/Task Structure"
        }), " (", (0,jsx_runtime.jsx)(_components.code, {
          children: "kanban-structure.md"
        }), ") - Shows all epics with their status, priority, stories, and links"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "FR/BR/UXR Structure"
        }), " (", (0,jsx_runtime.jsx)(_components.code, {
          children: "intake-structure.md"
        }), ") - Complete listings of all FRs, BRs, and UXRs by type"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Rules and Explanations"
        }), " (", (0,jsx_runtime.jsx)(_components.code, {
          children: "kanban-board-guide.md"
        }), ") - This document with how-to content and policies"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "kboard.md"
          })
        }), " - Deprecated redirect stub (no active MoSCOW)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The board serves as the parent document to Story documents, providing a comprehensive view of all work items in the project."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "frbruxr-prioritization-board",
      children: "FR/BR/UXR Prioritization Board"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "FR/BR/UXR Prioritization Board"
      }), " (", (0,jsx_runtime.jsx)(_components.code, {
        children: "kboard.md"
      }), ") provides centralized visibility and prioritization for all open Feature Requests, Bug Reports, and User Experience Research items."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "board-sections",
      children: "Board Sections"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Critical Priority"
        }), " - Urgent items requiring immediate attention"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "High Priority"
        }), " - Important items for near-term work"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Medium Priority"
        }), " - Standard priority items"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Low Priority"
        }), " - Nice-to-have items"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Under Review"
        }), " - Items being evaluated or worked on"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Awaiting Information"
        }), " - Items blocked by missing information"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "usage",
      children: "Usage"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "For Stakeholders"
        }), " - Review priorities and provide input on FR/BR/UXR documents"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "For Developers"
        }), " - Pick highest priority items and convert to tasks when appropriate"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "For Product Management"
        }), " - Adjust priorities and plan based on board content"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "integration",
      children: "Integration"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Links to individual FR/BR/UXR documents in ", (0,jsx_runtime.jsx)(_components.code, {
          children: "/fr-br/"
        }), " directory"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Cross-references to associated Kanban tasks when created"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Completed items move to ", (0,jsx_runtime.jsx)(_components.code, {
          children: "intake-completed.md"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "notes",
      children: "Notes"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The MoSCOW board is optimized for quick scanning - structured information only"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "For Epic/Story/Task structure, see kanban-structure.md"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "For rules, explanations, and how-to content, see this guide document"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The board is updated by UKW (Update Kanban Workflow) and RW (Release Workflow)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Board views are synchronized with Epic/Story/Task documents"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Install logs and remediation:"
      }), " For debugging Kanban installation or migration issues, see per-run logs under ", (0,jsx_runtime.jsx)(_components.code, {
        children: "logs/ai-dev-kit/install/"
      }), " (when install logging is enabled). Logs include phase markers such as ", (0,jsx_runtime.jsx)(_components.code, {
        children: "[KANBAN_FRESH_INSTALL]"
      }), " and validation output. If a consumer project’s board appears to be contaminated with ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ai-dev-kit"
      }), "’s own backlog (e.g. ", (0,jsx_runtime.jsx)(_components.code, {
        children: "AI Dev Kit – Kanban Board"
      }), " title or dev-kit epics like Epic 24), run the Kanban contamination detector and remediation tooling in that project’s repo to identify and archive/delete dev-kit artefacts before continuing."]
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