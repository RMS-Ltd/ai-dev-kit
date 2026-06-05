"use strict";
(self["webpackChunkportal"] = self["webpackChunkportal"] || []).push([["49713"], {
132(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_project_management_kanban_fr_br_uxr_020_fbuboard_necessity_after_task_fbu_wiring_md_b30_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-project-management-kanban-fr-br-uxr-020-fbuboard-necessity-after-task-fbu-wiring-md-b30.json
var site_docs_project_management_kanban_fr_br_uxr_020_fbuboard_necessity_after_task_fbu_wiring_md_b30_namespaceObject = JSON.parse('{"id":"project-management/kanban/fr-br/UXR-020-fbuboard-necessity-after-task-fbu-wiring","title":"User Experience Research: Is kboard.md Still Necessary After Task–FBU Wiring?","description":"Type: User Experience Research (UXR)","source":"@site/../docs/project-management/kanban/fr-br/UXR-020-fbuboard-necessity-after-task-fbu-wiring.md","sourceDirName":"project-management/kanban/fr-br","slug":"/project-management/kanban/fr-br/UXR-020-fbuboard-necessity-after-task-fbu-wiring","permalink":"/ai-dev-kit/docs/project-management/kanban/fr-br/UXR-020-fbuboard-necessity-after-task-fbu-wiring","draft":false,"unlisted":false,"editUrl":"https://github.com/RMS-Ltd/ai-dev-kit/tree/main/docs/../docs/project-management/kanban/fr-br/UXR-020-fbuboard-necessity-after-task-fbu-wiring.md","tags":[],"version":"current","frontMatter":{"lifecycle":"evergreen","ttl_days":null,"created_at":"2026-06-05T20:00:00.000Z","expires_at":null,"housekeeping_policy":"keep"},"sidebar":"docsSidebar","previous":{"title":"User Experience Research: Kanban task IN REVIEW and WAITING state icons (UXR-012 extension)","permalink":"/ai-dev-kit/docs/project-management/kanban/fr-br/UXR-019-kanban-task-waiting-in-review-state-icons"},"next":{"title":"User Experience Research: Greenfield lean tree delivery via GitHub Packages","permalink":"/ai-dev-kit/docs/project-management/kanban/fr-br/UXR-021-greenfield-install-github-packages-delivery-channel"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ../docs/project-management/kanban/fr-br/UXR-020-fbuboard-necessity-after-task-fbu-wiring.md


const frontMatter = {
	lifecycle: 'evergreen',
	ttl_days: null,
	created_at: new Date('2026-06-05T20:00:00.000Z'),
	expires_at: null,
	housekeeping_policy: 'keep'
};
const contentTitle = 'User Experience Research: Is kboard.md Still Necessary After Task–FBU Wiring?';

const assets = {

};



const toc = [{
  "value": "Summary",
  "id": "summary",
  "level": 2
}, {
  "value": "Research Objective",
  "id": "research-objective",
  "level": 2
}, {
  "value": "Methodology",
  "id": "methodology",
  "level": 2
}, {
  "value": "Key Findings",
  "id": "key-findings",
  "level": 2
}, {
  "value": "F1 — C-band is near-duplicate (admin burden confirmed)",
  "id": "f1--c-band-is-near-duplicate-admin-burden-confirmed",
  "level": 3
}, {
  "value": "F2 — M/S bands are <strong>not</strong> mirrors (fbuboard-only rows exist)",
  "id": "f2--ms-bands-are-not-mirrors-fbuboard-only-rows-exist",
  "level": 3
}, {
  "value": "F3 — kboard-only rows also exist (task-without-active-FBU-band)",
  "id": "f3--kboard-only-rows-also-exist-task-without-active-fbu-band",
  "level": 3
}, {
  "value": "F4 — Infrastructure cost of dual boards is real",
  "id": "f4--infrastructure-cost-of-dual-boards-is-real",
  "level": 3
}, {
  "value": "F5 — Original fbuboard intent (FR-051) is partially obsolete, partially still valid",
  "id": "f5--original-fbuboard-intent-fr-051-is-partially-obsolete-partially-still-valid",
  "level": 3
}, {
  "value": "F6 — Recent history: blind mirroring was reverted",
  "id": "f6--recent-history-blind-mirroring-was-reverted",
  "level": 3
}, {
  "value": "User Pain Points",
  "id": "user-pain-points",
  "level": 2
}, {
  "value": "Recommendations",
  "id": "recommendations",
  "level": 2
}, {
  "value": "R1 — Do <strong>not</strong> fully retire <code>fbuboard</code> yet (HIGH)",
  "id": "r1--do-not-fully-retire-fbuboard-yet-high",
  "level": 3
}, {
  "value": "R2 — <strong>Scoped consolidation</strong> (preferred, HIGH)",
  "id": "r2--scoped-consolidation-preferred-high",
  "level": 3
}, {
  "value": "R3 — If full single-board is desired later (MEDIUM, needs IPW)",
  "id": "r3--if-full-single-board-is-desired-later-medium-needs-ipw",
  "level": 3
}, {
  "value": "R4 — Policy/workflow follow-ups (tracked on implementing task)",
  "id": "r4--policyworkflow-follow-ups-tracked-on-implementing-task",
  "level": 3
}, {
  "value": "Affected Areas",
  "id": "affected-areas",
  "level": 2
}, {
  "value": "Acceptance Criteria (research closure)",
  "id": "acceptance-criteria-research-closure",
  "level": 2
}, {
  "value": "Decision record",
  "id": "decision-record",
  "level": 2
}, {
  "value": "Closure (2026-06-05)",
  "id": "closure-2026-06-05",
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
      children: (0,jsx_runtime.jsxs)(_components.h1, {
        id: "user-experience-research-is-kboardmd-still-necessary-after-taskfbu-wiring",
        children: ["User Experience Research: Is ", (0,jsx_runtime.jsx)(_components.code, {
          children: "kboard.md"
        }), " Still Necessary After Task–FBU Wiring?"]
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Type:"
      }), " User Experience Research (UXR)", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Submitted:"
      }), " 2026-06-05", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Submitted By:"
      }), " User", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Priority:"
      }), " HIGH", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Status:"
      }), " RESOLVED ✅", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Code:"
      }), " UXR-020", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Last updated:"
      }), " 2026-06-05 (intake rename wave ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "v0.4.19.12+5"
      }), " — ", (0,jsx_runtime.jsx)(_components.code, {
        children: "fbuboard"
      }), "/", (0,jsx_runtime.jsx)(_components.code, {
        children: "kanban-board"
      }), " removed, ", (0,jsx_runtime.jsx)(_components.code, {
        children: "intake-*"
      }), " naming)", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Version:"
      }), " v0.4.19.12+5", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Resolved in:"
      }), " v0.4.19.12+1 through v0.4.19.12+5 (ADR-018 R3 + intake rename)"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Implementing Task:"
      }), " ", (0,jsx_runtime.jsxs)(_components.a, {
        href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-04/story-19-fr-br-uxr-abstract-governance-and-intake/T12-fbuboard-necessity-investigation-uxr020",
        children: ["E04:S19", ":T12"]
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Planning package:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/implementation-cycles/IPP-E04S19T12-single-board-consolidation-uxr020",
        children: "IPP-E4S19T12"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["With bidirectional ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "task ↔ FBU"
      }), " wiring now standard, ", (0,jsx_runtime.jsxs)(_components.strong, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "kboard.md"
        }), " largely mirror each other"]
      }), " in the Could Have backlog and create ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "duplicate UKW/RW maintenance"
      }), ". Investigation found ", (0,jsx_runtime.jsxs)(_components.strong, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "fbuboard"
        }), " M/S bands"]
      }), " still hold verification-pending rows today, but the user selected ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "R3"
      }), ": enrich ", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "kboard"
        })
      }), " with a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Verification (V)"
      }), " band and ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "dual-status rows"
      }), ", then ", (0,jsx_runtime.jsxs)(_components.strong, {
        children: ["retire active ", (0,jsx_runtime.jsx)(_components.code, {
          children: "fbuboard"
        })]
      }), ". Implementation plan: ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/implementation-cycles/IPP-E04S19T12-single-board-consolidation-uxr020",
        children: "IPP-E4S19T12"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "research-objective",
      children: "Research Objective"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Question:"
      }), " Now that every filed FBU has an implementing task and boards cross-link, do we still need a separate ", (0,jsx_runtime.jsx)(_components.code, {
        children: "kboard.md"
      }), ", or does it only create unnecessary sync admin?"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Success criteria for this research:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Quantify overlap vs divergence between active boards (2026-06-05 snapshot)."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Identify any behaviour ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "only"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "kboard.md"
        }), " supports today."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Map workflow/validator/policy dependencies that assume two boards."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Recommend retain / consolidate / retire with trade-offs."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "methodology",
      children: "Methodology"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Research method:"
      }), " Corpus audit of live boards, completion ledgers, governance policy (FR-092 four-surface contract, FR-109 lean board), and changelog evidence of recent mirror/revert cycles."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Sources (2026-06-05):"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/kboard",
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "kboard.md"
          })
        }), "(../kboard.md)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/kanban-completed",
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "kanban-completed.md"
          })
        }), ", ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/intake-completed",
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "intake-completed.md"
          })
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/packages/frameworks/kanban/policies/kanban-governance-policy.md",
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "kanban-governance-policy.md"
          })
        }), " (active vs completed surfaces, RW Step 7)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/fr-br/FR-051-fr-br-uxr-prioritization-board",
          children: "FR-051"
        }), " (original rationale for fbuboard)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/fr-br/FR-092-canonical-rw-ukw-kanban-consistency-program",
          children: "FR-092"
        }), " (four-surface RW contract)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["UKW/RW changelog entries for consolidation passes and ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "2026-06-05 lean-board revert"
        }), " on ", (0,jsx_runtime.jsx)(_components.code, {
          children: "kboard.md"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "key-findings",
      children: "Key Findings"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "f1--c-band-is-near-duplicate-admin-burden-confirmed",
      children: "F1 — C-band is near-duplicate (admin burden confirmed)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Roughly ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "28 Could Have rows"
      }), " appear on ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "both"
      }), " boards with the same underlying work: same ", (0,jsx_runtime.jsx)(_components.code, {
        children: "E:S:T"
      }), ", same FBU link, same priority band. Row primary key differs only by surface (", (0,jsx_runtime.jsx)(_components.code, {
        children: "E04:S09:T01"
      }), " vs ", (0,jsx_runtime.jsx)(_components.code, {
        children: "BR-007"
      }), "). Maintaining MoSCOW order, stamps, and IPP segments on ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "two files"
      }), " for the same backlog is the main ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "unnecessary admin"
      }), " the user reported."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "f2--ms-bands-are-not-mirrors-fbuboard-only-rows-exist",
      children: ["F2 — M/S bands are ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "not"
      }), " mirrors (fbuboard-only rows exist)"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsxs)(_components.strong, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "kboard.md"
        }), " Must/Should (9 rows, 2026-06-05)"]
      }), " includes items ", (0,jsx_runtime.jsxs)(_components.strong, {
        children: ["absent from ", (0,jsx_runtime.jsx)(_components.code, {
          children: "kboard.md"
        }), " M/S"]
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "FBU"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Task"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why kboard omits it"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FR-045, FR-046, BR-061"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["E03:S02", ":T12"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Task ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "COMPLETE"
            }), " (", (0,jsx_runtime.jsx)(_components.code, {
              children: "kanban-completed.md"
            }), "); FBUs ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "OPEN"
            }), " (verification pending)"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "BR-093, BR-090, BR-091"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["E05:S09", ":T14", ", E05:S09", ":T13", ", E07:S07", ":T03"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Tasks ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "COMPLETE"
            }), "; FBUs ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "OPEN"
            }), " (CI/adopter verification pending)"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FR-106, BR-088, BR-082"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["E02:S13", ":T08", ", E06:S09", ":T19", ", E06:S09", ":T11"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Same pattern"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["This is ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "by design"
      }), " per both board headers:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Rows whose ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "task is COMPLETE"
        }), " but FBU remains ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "OPEN"
        }), " are ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "fbuboard-only"
        }), " — sync must ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "not"
        }), " re-add them to ", (0,jsx_runtime.jsx)(_components.code, {
          children: "kboard.md"
        }), "."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["So the boards are ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "not"
      }), " simple reflections; they encode ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "different lifecycle semantics"
      }), " (task execution vs FBU closure/verification)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "f3--kboard-only-rows-also-exist-task-without-active-fbu-band",
      children: "F3 — kboard-only rows also exist (task-without-active-FBU-band)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Six Epic 10 review tasks"
      }), " (", (0,jsx_runtime.jsx)(_components.code, {
        children: "E10:S01:T01"
      }), "–", (0,jsx_runtime.jsx)(_components.code, {
        children: "T06"
      }), ") sit on ", (0,jsx_runtime.jsx)(_components.code, {
        children: "kboard.md"
      }), " Could Have with ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "no FBU"
      }), " — legitimate task-only work. Perpetual lanes differ too: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "kboard"
      }), " lists perpetual ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "tasks"
      }), "; ", (0,jsx_runtime.jsx)(_components.code, {
        children: "fbuboard"
      }), " lists linked ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "FR-023 / FR-043 / FR-058"
      }), " in Ongoing."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "f4--infrastructure-cost-of-dual-boards-is-real",
      children: "F4 — Infrastructure cost of dual boards is real"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Dual surfaces are embedded in:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "RW Step 7"
        }), " four-surface contract (task doc, FBU doc, ", (0,jsx_runtime.jsx)(_components.code, {
          children: "kboard"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "fbuboard"
        }), ") — ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/fr-br/FR-092-canonical-rw-ukw-kanban-consistency-program",
          children: "FR-092"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "UKW"
        }), " comprehensive scope (both boards, stamp diff, icon/spacing validators)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Validators:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "validate_active_kanban_board.py"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "validate_board_stamp_diff.py"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "validate_kanban_state_icons.py"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "validate_kanban_moscow_spacing.py"
        }), ", pre-commit stamp homogeneity — all run on ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "both"
        }), " files"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "update_kanban_docs.py"
          })
        }), " and extensive test fixtures (~100+ ", (0,jsx_runtime.jsx)(_components.code, {
          children: "fbuboard"
        }), " references in workflow-mgt scripts/tests)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Retiring ", (0,jsx_runtime.jsx)(_components.code, {
        children: "fbuboard"
      }), " is a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "framework migration"
      }), ", not a doc delete."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "f5--original-fbuboard-intent-fr-051-is-partially-obsolete-partially-still-valid",
      children: "F5 — Original fbuboard intent (FR-051) is partially obsolete, partially still valid"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/project-management/kanban/fr-br/FR-051-fr-br-uxr-prioritization-board",
        children: "FR-051"
      }), " sought centralized FBU prioritisation ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "before"
      }), " tasks existed. ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "KG-R2 atomic intake"
      }), " and bidirectional wiring now mean ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "every substantive FBU has a task"
      }), ". The ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "stakeholder-facing FBU queue"
      }), " role is largely satisfied by:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["FBU docs in ", (0,jsx_runtime.jsx)(_components.code, {
          children: "fr-br/"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/intake-structure",
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "intake-structure.md"
          })
        }), " inventory"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/intake-completed",
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "intake-completed.md"
          })
        }), " terminal ledger"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["What FR-051 did ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "not"
      }), " anticipate: the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "verification-pending"
      }), " split (task shipped, FBU not closed) — that gap is what today's ", (0,jsx_runtime.jsx)(_components.code, {
        children: "fbuboard"
      }), " M/S bands actually hold."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "f6--recent-history-blind-mirroring-was-reverted",
      children: "F6 — Recent history: blind mirroring was reverted"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "kboard.md"
      }), " header (2026-06-05): ", (0,jsx_runtime.jsx)(_components.em, {
        children: "\"reverted erroneous fbuboard→kboard mirror; lean board restored\""
      }), ". Prior consolidation passes that mirrored fbuboard onto kboard ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "violated"
      }), " the lean active-board contract (", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/project-management/kanban/fr-br/FR-109-ukw-lean-active-board-contract",
        children: "FR-109"
      }), ") by re-adding verification-pending tasks to the task board."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "user-pain-points",
      children: "User Pain Points"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Double edits"
        }), " — UKW/RW must touch two MoSCOW files for the same C-band backlog."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Drift anxiety"
        }), " — Stamps, IPP segments, and band placement can diverge between mirrors."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Cognitive load"
        }), " — Operators must remember which board is authoritative for which lifecycle state."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Validator noise"
        }), " — Twice the stamp/icon/spacing enforcement surface area."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "recommendations",
      children: "Recommendations"
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "r1--do-not-fully-retire-fbuboard-yet-high",
      children: ["R1 — Do ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "not"
      }), " fully retire ", (0,jsx_runtime.jsx)(_components.code, {
        children: "fbuboard"
      }), " yet (HIGH)"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The verification-pending lane has ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "no equivalent"
      }), " on ", (0,jsx_runtime.jsx)(_components.code, {
        children: "kboard"
      }), " without a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "row-model change"
      }), ". Removing ", (0,jsx_runtime.jsx)(_components.code, {
        children: "fbuboard"
      }), " without a replacement would hide ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "9+ active verification items"
      }), " from MoSCOW visibility."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "r2--scoped-consolidation-preferred-high",
      children: ["R2 — ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Scoped consolidation"
      }), " (preferred, HIGH)"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Drop C-band duplication:"
        }), " Maintain backlog ", (0,jsx_runtime.jsxs)(_components.strong, {
          children: ["only on ", (0,jsx_runtime.jsx)(_components.code, {
            children: "kboard.md"
          })]
        }), " for wired task+FBU items in TODO state."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsxs)(_components.strong, {
          children: ["Keep ", (0,jsx_runtime.jsx)(_components.code, {
            children: "fbuboard"
          }), " M/S (and taskless queue)"]
        }), " for: (a) FBU OPEN + task COMPLETE, (b) open ∧ taskless intake (", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/intake-open-taskless-queue",
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "intake-open-taskless-queue.md"
          })
        }), ")."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Single pointer"
        }), " from ", (0,jsx_runtime.jsx)(_components.code, {
          children: "fbuboard"
        }), " header: ", (0,jsx_runtime.jsx)(_components.em, {
          children: "\"C-band backlog → see kboard.\""
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Estimated admin reduction:"
      }), " ~70% of duplicate row maintenance without losing verification visibility."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "r3--if-full-single-board-is-desired-later-medium-needs-ipw",
      children: "R3 — If full single-board is desired later (MEDIUM, needs IPW)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Enrich ", (0,jsx_runtime.jsxs)(_components.strong, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "kboard"
        }), " row contract"]
      }), " with explicit ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "dual status"
      }), " tokens, e.g. ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Task: COMPLETE | FBU: OPEN (verification)"
      }), " and a dedicated ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Verification"
      }), " MoSCOW subsection — then deprecate ", (0,jsx_runtime.jsx)(_components.code, {
        children: "fbuboard"
      }), " with FR-092 Wave migration, validator updates, and adopters install path."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "r4--policyworkflow-follow-ups-tracked-on-implementing-task",
      children: "R4 — Policy/workflow follow-ups (tracked on implementing task)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Amend ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "FR-092 four-surface"
        }), " contract if consolidation proceeds (surface 4 may become optional or ledger-only)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Update ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "UKW step matrix"
        }), " to conditional fbuboard scope."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Extend ", (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "validate_active_kanban_board.py"
          })
        }), " with anti-duplication rule (same ", (0,jsx_runtime.jsx)(_components.code, {
          children: "E:S:T"
        }), " in both C-bands → warn/fail)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "affected-areas",
      children: "Affected Areas"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Kanban boards: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "kboard.md"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "intake-completed.md"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "UKW / RW Step 7 agent execution guides"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "packages/frameworks/workflow-mgt/scripts/update_kanban_docs.py"
        }), " and validation suite"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Kanban governance policy (active board contract)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Adopter install templates (if fbuboard retired)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "acceptance-criteria-research-closure",
      children: "Acceptance Criteria (research closure)"
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
        }), " Overlap and divergence quantified with live-board evidence."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "AC2:"
        }), " Non-redundant fbuboard behaviours documented (verification-pending, taskless intake)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "AC3:"
        }), " Workflow/validator dependency inventory captured at high level."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "AC4:"
        }), " Actionable recommendation set (retain / partial consolidate / full retire) with trade-offs."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "AC5:"
        }), " User sign-off — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "R3 (full single-board)"
        }), " recorded 2026-06-05; ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/implementation-cycles/IPP-E04S19T12-single-board-consolidation-uxr020",
          children: "IPP-E4S19T12"
        }), " approved."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "decision-record",
      children: "Decision record"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Date"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Choice"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Notes"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2026-06-05"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "R3"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Single ", (0,jsx_runtime.jsx)(_components.code, {
              children: "kboard"
            }), " with Verification band + dual-status rows; deprecate active ", (0,jsx_runtime.jsx)(_components.code, {
              children: "fbuboard"
            })]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "closure-2026-06-05",
      children: "Closure (2026-06-05)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Waves 1–4 shipped:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "v0.4.19.12+1"
        }), " (boards + ADR-018), ", (0,jsx_runtime.jsx)(_components.code, {
          children: "+2"
        }), " (tooling), ", (0,jsx_runtime.jsx)(_components.code, {
          children: "+3"
        }), " (framework pack), ", (0,jsx_runtime.jsx)(_components.code, {
          children: "+4"
        }), " (kanban-root ", (0,jsx_runtime.jsx)(_components.code, {
          children: "fr-br-uxr-*"
        }), " alias removal + T12 COMPLETE)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "User verification:"
        }), " Single active ", (0,jsx_runtime.jsx)(_components.code, {
          children: "kboard"
        }), " with V-band accepted as leaner operator workflow."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Forensic closure:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "RW E04:S19:T12 --art"
        }), " ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "v0.4.19.12+4"
        }), " — task ledger, story checklist, corpus scripts updated."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "related",
      children: "Related"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/fr-br/FR-051-fr-br-uxr-prioritization-board",
          children: "FR-051"
        }), " — created fbuboard"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/fr-br/FR-092-canonical-rw-ukw-kanban-consistency-program",
          children: "FR-092"
        }), " — four-surface contract"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/fr-br/FR-109-ukw-lean-active-board-contract",
          children: "FR-109"
        }), " — lean active board"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/fr-br/UXR-008-kboard-fbuboard-default-naming-adoption",
          children: "UXR-008"
        }), " — naming normalization"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/fr-br/UXR-010-kboard-fbuboard-add-ipp-column-after-fbu-and-task-links",
          children: "UXR-010"
        }), " — row link contract"]
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