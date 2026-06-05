"use strict";
(self["webpackChunkportal"] = self["webpackChunkportal"] || []).push([["76990"], {
35673(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_project_management_kanban_fr_br_fr_102_ukw_archive_completed_board_rows_md_a7b_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-project-management-kanban-fr-br-fr-102-ukw-archive-completed-board-rows-md-a7b.json
var site_docs_project_management_kanban_fr_br_fr_102_ukw_archive_completed_board_rows_md_a7b_namespaceObject = JSON.parse('{"id":"project-management/kanban/fr-br/FR-102-ukw-archive-completed-board-rows","title":"FR-102: UKW archive-completed use case (-c) — kboard + fbuboard → completed ledgers","description":"Type: Feature Request (FR)","source":"@site/../docs/project-management/kanban/fr-br/FR-102-ukw-archive-completed-board-rows.md","sourceDirName":"project-management/kanban/fr-br","slug":"/project-management/kanban/fr-br/FR-102-ukw-archive-completed-board-rows","permalink":"/ai-dev-kit/docs/project-management/kanban/fr-br/FR-102-ukw-archive-completed-board-rows","draft":false,"unlisted":false,"editUrl":"https://github.com/RMS-Ltd/ai-dev-kit/tree/main/docs/../docs/project-management/kanban/fr-br/FR-102-ukw-archive-completed-board-rows.md","tags":[],"version":"current","frontMatter":{"lifecycle":"evergreen","ttl_days":null,"created_at":"2026-05-30T22:00:00.000Z","expires_at":null,"housekeeping_policy":"keep"},"sidebar":"docsSidebar","previous":{"title":"FR-101: Consolidate governance under docs/governance/","permalink":"/ai-dev-kit/docs/project-management/kanban/fr-br/FR-101-consolidate-governance-under-docs-governance"},"next":{"title":"FR-103: Agent bootstrap and task routing (three-layer context model)","permalink":"/ai-dev-kit/docs/project-management/kanban/fr-br/FR-103-agent-bootstrap-and-task-routing"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ../docs/project-management/kanban/fr-br/FR-102-ukw-archive-completed-board-rows.md


const frontMatter = {
	lifecycle: 'evergreen',
	ttl_days: null,
	created_at: new Date('2026-05-30T22:00:00.000Z'),
	expires_at: null,
	housekeeping_policy: 'keep'
};
const contentTitle = 'FR-102: UKW archive-completed use case (-c) — kboard + fbuboard → completed ledgers';

const assets = {

};



const toc = [{
  "value": "Summary",
  "id": "summary",
  "level": 2
}, {
  "value": "Problem statement",
  "id": "problem-statement",
  "level": 2
}, {
  "value": "Proposed solution",
  "id": "proposed-solution",
  "level": 2
}, {
  "value": "Invocation",
  "id": "invocation",
  "level": 3
}, {
  "value": "kboard (<code>kanban-completed.md</code>)",
  "id": "kboard-kanban-completedmd",
  "level": 3
}, {
  "value": "fbuboard (<code>intake-completed.md</code>)",
  "id": "fbuboard-intake-completedmd",
  "level": 3
}, {
  "value": "Agent / package deliverables",
  "id": "agent--package-deliverables",
  "level": 3
}, {
  "value": "Requirements",
  "id": "requirements",
  "level": 2
}, {
  "value": "Functional",
  "id": "functional",
  "level": 3
}, {
  "value": "Non-functional",
  "id": "non-functional",
  "level": 3
}, {
  "value": "Exceptions (keep on active board)",
  "id": "exceptions-keep-on-active-board",
  "level": 3
}, {
  "value": "Acceptance criteria",
  "id": "acceptance-criteria",
  "level": 2
}, {
  "value": "Scope analysis",
  "id": "scope-analysis",
  "level": 2
}, {
  "value": "Related work",
  "id": "related-work",
  "level": 2
}, {
  "value": "Out of scope",
  "id": "out-of-scope",
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
      children: (0,jsx_runtime.jsxs)(_components.h1, {
        id: "fr-102-ukw-archive-completed-use-case--c--kboard--fbuboard--completed-ledgers",
        children: ["FR-102: UKW archive-completed use case (", (0,jsx_runtime.jsx)(_components.code, {
          children: "-c"
        }), ") — kboard + fbuboard → completed ledgers"]
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Type:"
      }), " Feature Request (FR)", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "ID:"
      }), " FR-102", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Submitted:"
      }), " 2026-05-30", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Submitted By:"
      }), " User (FR intake)", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Priority:"
      }), " HIGH", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Status:"
      }), " IMPLEMENTED", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Version:"
      }), " v0.2.16.16+2 (Internal functional) | v0.2.16.16+3 (UKW ", (0,jsx_runtime.jsx)(_components.code, {
        children: "-c"
      }), " hygiene) | v0.4.840+3 (SemVer)\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "GitHub Issue:"
      }), " [TBD]"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Implementing Task:"
      }), " ", (0,jsx_runtime.jsxs)(_components.a, {
        href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-02/story-16-perpetual-ongoing-workflow-operations/T16-ukw-archive-completed-board-rows-fr102",
        children: ["E02:S16", ":T16"]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Add a dedicated ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "UKW"
      }), " sub-workflow, invoked as ", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "UKW -c"
        })
      }), " (archive completed), that removes ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "COMPLETE"
      }), " (and equivalent terminal) rows from active ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "MoSCOW"
      }), " sections on ", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "kboard.md"
        })
      }), " and ", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "kboard.md"
        })
      }), " only ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "after"
      }), " appending canonical entries to ", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "kanban-completed.md"
        })
      }), " and ", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "intake-completed.md"
        })
      }), " respectively — without running full bookkeeping, gap discovery, or reprioritization."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "problem-statement",
      children: "Problem statement"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Active boards still carry rows whose ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "source-of-truth"
      }), " status is terminal (for example task docs marked ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "COMPLETE"
      }), ", or FR/BR/UXR docs ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "COMPLETE"
      }), " / ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "IMPLEMENTED"
      }), " / ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "RESOLVED"
      }), "), while the same items already have closure evidence in version anchors or release notes. Examples on ", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "kboard.md"
        })
      }), " today include ", (0,jsx_runtime.jsxs)(_components.strong, {
        children: ["E02:S16", ":T15"]
      }), " and ", (0,jsx_runtime.jsxs)(_components.strong, {
        children: ["E02:S16", ":T06"]
      }), " in ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Should Have"
      }), " despite ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "COMPLETE"
      }), " task status."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Current gaps:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Area"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Today"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Gap"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "kboard"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Comprehensive UKW and RW Step 7 may reconcile status text on rows"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["No ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "lightweight, explicit"
            }), " operator command whose ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "only"
            }), " job is “archive completes → remove from active MoSCOW”"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "fbuboard"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ai-dev-kit/docs/project-management/kanban/fr-br/FR-076-ukw-fbuboard-scope-and-drift-concurrency-controls",
              children: "FR-076"
            }), " stale-row ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "prune"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Prune can drop active rows without a mandated ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "intake-completed.md"
              })
            }), " append + recent-dashboard update in the same run"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Completed ledgers"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
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
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Archival must use ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Documentation Agent"
            }), " skills (", (0,jsx_runtime.jsx)(_components.code, {
              children: "kanban_completed_update"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "fr_br_uxr_completed_update"
            }), ") — not delete-only hygiene"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Historical fix"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsxs)(_components.a, {
              href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-06/story-06-feature-requests/T42-fix-ukw-agent-board-cleanup-failure",
              children: ["E06:S06", ":T42"]
            }), " (BR-042)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Addressed general cleanup; did not define a ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "standalone UKW flag"
            }), " or dual-board contract"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Operators need a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "fast, safe, repeatable"
      }), " UKW use case: “clean the boards” means ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "move"
      }), " completed work to the completed ledgers, not silent deletion."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "proposed-solution",
      children: "Proposed solution"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "invocation",
      children: "Invocation"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Command"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Meaning"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "UKW -c"
              })
            }), " / ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "ukw -c"
              })
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Archive completed"
            }), " — dual-board archival sub-workflow only"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsxs)(_components.strong, {
        children: ["Constraints (align with ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/fr-br/FR-085-ukw-optional-reprioritization-rp-flag",
          children: "FR-085"
        }), " / ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/architecture/standards-and-adrs/ADR-009-ukw-deep-reprioritization-rp-flag",
          children: "ADR-009"
        }), " pattern):"]
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Standalone only"
        }), " — do not combine ", (0,jsx_runtime.jsx)(_components.code, {
          children: "-c"
        }), " with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "-u"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "-p"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "-a"
        }), ", or ", (0,jsx_runtime.jsx)(_components.code, {
          children: "--rp"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Does not"
        }), " run UKW Step 2.5 (gap discovery), MoSCOW reprioritization, or story/epic narrative synthesis unless a row’s removal exposes a blocking inconsistency (document in run summary)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Typical handoff: ", (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "UKW -c"
          })
        }), " then ", (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "RW"
          })
        }), " on perpetual UKW task (", (0,jsx_runtime.jsxs)(_components.strong, {
          children: ["E02:S16", ":T04"]
        }), ") or the last task touched by archival evidence."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "kboard-kanban-completedmd",
      children: ["kboard (", (0,jsx_runtime.jsx)(_components.code, {
        children: "kanban-completed.md"
      }), ")"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["For each active MoSCOW row on ", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "kboard.md"
        })
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Resolve linked ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "task document"
        }), " (or infer from row token)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["If task status is ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "COMPLETE"
        }), " (and not perpetual / not explicitly “keep on board” — see exceptions):", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Append or update via ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "kanban_completed_update"
              })
            }), " with ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "version anchor"
            }), ", ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "ISO 8601"
            }), " completion timestamp (from task doc / last RW — not fabricated batch UTC per ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ai-dev-kit/docs/project-management/kanban/fr-br/FR-097-board-stamp-authority-and-forensic-timestamp-recovery",
              children: "FR-097"
            }), ")."]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Remove row from active MoSCOW (preserve sort order for remaining rows)."
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Emit audit lines: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "archived"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "skipped (reason)"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "already in ledger"
        }), "."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "fbuboard-intake-completedmd",
      children: ["fbuboard (", (0,jsx_runtime.jsx)(_components.code, {
        children: "intake-completed.md"
      }), ")"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["For each active MoSCOW row on ", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "kboard.md"
        })
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Resolve linked ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "FR / BR / UXR"
        }), " doc."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["If source status is terminal (", (0,jsx_runtime.jsx)(_components.strong, {
          children: "COMPLETE"
        }), ", ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "COMPLETED"
        }), ", ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "IMPLEMENTED"
        }), ", ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "FIXED"
        }), ", ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "RESOLVED"
        }), ") with same ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "unresolved-verification"
        }), " exceptions as FR-076:", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Append or update via ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "fr_br_uxr_completed_update"
              })
            }), "."]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Remove from active MoSCOW."
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Keep ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "bidirectional wiring"
        }), ": if kboard row removed for a task linked to an FBU, ensure fbuboard row is handled in the same run (and vice versa)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "agent--package-deliverables",
      children: "Agent / package deliverables"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: ".cursorrules"
          })
        }), " / ", (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "update-kanban-workflow-agent-execution.md"
          })
        }), " — step matrix row for ", (0,jsx_runtime.jsx)(_components.code, {
          children: "-c"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "docs/guides/workflow-initiation-cheatsheet.md"
          })
        }), " — flag table + decision tree row (“I want to clear completed rows from the boards”)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "UKW YAML"
        }), " (if applicable) — optional sub-workflow id ", (0,jsx_runtime.jsx)(_components.code, {
          children: "archive_completed"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Skills:"
        }), " extend or document ", (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "ukw-sync"
          })
        }), " / ", (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "board_cleanup"
          })
        }), " coordination with completed-update skills (no duplicate ledger formats)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "requirements",
      children: "Requirements"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "functional",
      children: "Functional"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      className: "contains-task-list",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "FR-102-F1:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "UKW -c"
        }), " runs archive-completed sub-workflow only when ", (0,jsx_runtime.jsx)(_components.code, {
          children: "-c"
        }), " is present."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "FR-102-F2:"
        }), " Every archived ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "task"
        }), " row produces a ", (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "kanban-completed.md"
          })
        }), " entry before removal from ", (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "kboard.md"
          })
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "FR-102-F3:"
        }), " Every archived ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "FBU"
        }), " row produces a ", (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "intake-completed.md"
          })
        }), " entry before removal from ", (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "kboard.md"
          })
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "FR-102-F4:"
        }), " Run output lists archived / skipped / already-present counts per board and ledger."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "FR-102-F5:"
        }), " Idempotent re-run: rows already in completed ledgers are not duplicated; active rows already absent are no-ops."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "FR-102-F6:"
        }), " Document flag in cheatsheet + Claude ", (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "/ukw"
          })
        }), " command mirror when ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/fr-br/FR-093-ukw-slash-command-claude-code",
          children: "FR-093"
        }), " is updated for new flags."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "non-functional",
      children: "Non-functional"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      className: "contains-task-list",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "FR-102-NF1:"
        }), " ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "FR-097"
        }), " stamp rules — no batch fake ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Last modified"
        }), " on unrelated rows; board metadata ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Last Updated"
        }), " may change with evidence."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "FR-102-NF2:"
        }), " Pre-write snapshot + ", (0,jsx_runtime.jsx)(_components.code, {
          children: "validate_board_stamp_diff.py"
        }), " where UKW policy requires (STRUCTURE vs EVIDENCE manifest documented in run log)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "FR-102-NF3:"
        }), " Default UKW / ", (0,jsx_runtime.jsx)(_components.code, {
          children: "UKW -u"
        }), " behavior unchanged when ", (0,jsx_runtime.jsx)(_components.code, {
          children: "-c"
        }), " absent."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "exceptions-keep-on-active-board",
      children: "Exceptions (keep on active board)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Perpetual"
        }), " tasks (", (0,jsx_runtime.jsx)(_components.code, {
          children: "perpetual_task: true"
        }), " / ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Perpetual Maintenance"
        }), ") — never archived by ", (0,jsx_runtime.jsx)(_components.code, {
          children: "-c"
        }), " unless explicit future flag (out of scope)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "COMPLETE"
        }), " row with explicit “keep on board until verification” banner on task or FBU doc (same class as FR-076 unresolved-verification keep)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Row with ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "no resolvable"
        }), " task/FBU doc — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "skip"
        }), " and report; do not delete."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "acceptance-criteria",
      children: "Acceptance criteria"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      className: "contains-task-list",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Operator can run ", (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "UKW -c"
          })
        }), " and active MoSCOW on ", (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "kboard.md"
          })
        }), " contains no tasks whose task docs are ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "COMPLETE"
        }), " (except documented exceptions)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Same run clears matching terminal ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "FBU"
        }), " rows on ", (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "kboard.md"
          })
        }), " into ", (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "intake-completed.md"
          })
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "kanban-completed.md"
          })
        }), " / ", (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "intake-completed.md"
          })
        }), " gain entries with consistent timestamps and version/traceability fields."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Cheatsheet and agent SoT document ", (0,jsx_runtime.jsx)(_components.code, {
          children: "-c"
        }), " and forbid flag combinations that conflict with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "--rp"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "At least one recorded UKW run summary (task doc or IPP) demonstrates dual-board archival stats."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "scope-analysis",
      children: "Scope analysis"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem domain:"
      }), " UKW operator ergonomics and board hygiene", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Affected areas:"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      className: "contains-task-list",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "UKW flags and agent execution guide"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "kboard.md"
        }), " / ", (0,jsx_runtime.jsx)(_components.code, {
          children: "kanban-completed.md"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "kboard.md"
        }), " / ", (0,jsx_runtime.jsx)(_components.code, {
          children: "intake-completed.md"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "Cursor skills (", (0,jsx_runtime.jsx)(_components.code, {
          children: "kanban-completed-update"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "fr-br-uxr-completed-update"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "ukw-sync"
        }), ")"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "RW Step 7 (out of scope unless explicitly requested — RW already does scoped reconciliation on release)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Estimated complexity:"
      }), " Medium (1 week)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "related-work",
      children: "Related work"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/architecture/standards-and-adrs/ADR-010-ukw-archive-completed-c-flag",
          children: "ADR-010"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/implementation-cycles/IPP-E02S16T16-ukw-archive-completed-fr102",
          children: "IPP-E2S16T16"
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/fr-br/FR-034-ukw-granular-control-and-use-case-flags",
          children: "FR-034"
        }), " — UKW flag pattern (", (0,jsx_runtime.jsx)(_components.code, {
          children: "-u"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "-p"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "-a"
        }), ")"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/fr-br/FR-076-ukw-fbuboard-scope-and-drift-concurrency-controls",
          children: "FR-076"
        }), " — fbuboard terminal prune (predecessor; ", (0,jsx_runtime.jsx)(_components.code, {
          children: "-c"
        }), " adds ledger append mandate)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/fr-br/FR-049-enhanced-kanban-completed-with-timestamps-and-recent-tasks",
          children: "FR-049"
        }), " — completed ledger format"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/fr-br/FR-050-ukw-extension-for-fr-br-uxr-temporal-tracking-and-synchronization",
          children: "FR-050"
        }), " — FBU temporal sync"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/fr-br/FR-086-canonical-supporting-kanban-fbu-doc-naming-and-fbu-collective-terminology",
          children: "FR-086"
        }), " — canonical ", (0,jsx_runtime.jsx)(_components.code, {
          children: "kanban-completed"
        }), " / ", (0,jsx_runtime.jsx)(_components.code, {
          children: "intake-completed"
        }), " naming"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/fr-br/BR-042-ukw-agent-board-cleanup-failure",
          children: "BR-042"
        }), " / ", (0,jsx_runtime.jsxs)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-06/story-06-feature-requests/T42-fix-ukw-agent-board-cleanup-failure",
          children: ["E06:S06", ":T42"]
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsxs)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-02/story-16-perpetual-ongoing-workflow-operations/T04-ad-hoc-kanban-synchronization-and-hygiene-perpetual",
          children: ["E02:S16", ":T04"]
        }), " — UKW perpetual attribution"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/guides/workflow-initiation-cheatsheet",
          children: "Workflow initiation cheatsheet"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "out-of-scope",
      children: "Out of scope"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Reprioritization (", (0,jsx_runtime.jsx)(_components.code, {
          children: "--rp"
        }), "), gap discovery (Step 2.5), or full comprehensive UKW in the same invocation as ", (0,jsx_runtime.jsx)(_components.code, {
          children: "-c"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Changing RW Step 7 scoped reconciliation semantics (", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/fr-br/FR-091-rw-step-7-self-sufficient-scoped-kanban-reconciliation-without-ukw-dependency",
          children: "FR-091"
        }), ")."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Automated scheduling / CI — manual agent invocation only unless a follow-up FR requests it."
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