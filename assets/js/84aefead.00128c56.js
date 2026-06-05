"use strict";
(self["webpackChunkportal"] = self["webpackChunkportal"] || []).push([["58294"], {
44612(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_project_management_kanban_fr_br_br_059_ukw_moscow_incomplete_story_task_coverage_md_84a_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-project-management-kanban-fr-br-br-059-ukw-moscow-incomplete-story-task-coverage-md-84a.json
var site_docs_project_management_kanban_fr_br_br_059_ukw_moscow_incomplete_story_task_coverage_md_84a_namespaceObject = JSON.parse('{"id":"project-management/kanban/fr-br/BR-059-ukw-moscow-incomplete-story-task-coverage","title":"Bug Report BR-059: UKW MoSCOW Update Omits In-Progress Story Tasks (Incomplete Coverage)","description":"Bug ID: BR-059","source":"@site/../docs/project-management/kanban/fr-br/BR-059-ukw-moscow-incomplete-story-task-coverage.md","sourceDirName":"project-management/kanban/fr-br","slug":"/project-management/kanban/fr-br/BR-059-ukw-moscow-incomplete-story-task-coverage","permalink":"/ai-dev-kit/docs/project-management/kanban/fr-br/BR-059-ukw-moscow-incomplete-story-task-coverage","draft":false,"unlisted":false,"editUrl":"https://github.com/RMS-Ltd/ai-dev-kit/tree/main/docs/../docs/project-management/kanban/fr-br/BR-059-ukw-moscow-incomplete-story-task-coverage.md","tags":[],"version":"current","frontMatter":{"lifecycle":"evergreen","ttl_days":null,"created_at":"2026-03-30T20:00:00.000Z","expires_at":null,"housekeeping_policy":"keep"},"sidebar":"docsSidebar","previous":{"title":"Bug Report BR-058: Missing Tests CI Workflow and Stale Pytest Failures","permalink":"/ai-dev-kit/docs/project-management/kanban/fr-br/BR-058-ci-test-workflow-missing-and-pytest-failures"},"next":{"title":"Bug Report BR-060: RW --art Flag Not Fully Applied Through Step 9","permalink":"/ai-dev-kit/docs/project-management/kanban/fr-br/BR-060-rw-art-flag-should-work-in-all-rw-modes"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ../docs/project-management/kanban/fr-br/BR-059-ukw-moscow-incomplete-story-task-coverage.md


const frontMatter = {
	lifecycle: 'evergreen',
	ttl_days: null,
	created_at: new Date('2026-03-30T20:00:00.000Z'),
	expires_at: null,
	housekeeping_policy: 'keep'
};
const contentTitle = 'Bug Report BR-059: UKW MoSCOW Update Omits In-Progress Story Tasks (Incomplete Coverage)';

const assets = {

};



const toc = [{
  "value": "Bug Summary",
  "id": "bug-summary",
  "level": 2
}, {
  "value": "Problem Description",
  "id": "problem-description",
  "level": 2
}, {
  "value": "Observed behavior",
  "id": "observed-behavior",
  "level": 3
}, {
  "value": "Expected behavior",
  "id": "expected-behavior",
  "level": 3
}, {
  "value": "Concrete example",
  "id": "concrete-example",
  "level": 3
}, {
  "value": "Impact",
  "id": "impact",
  "level": 2
}, {
  "value": "Proposed direction (investigation)",
  "id": "proposed-direction-investigation",
  "level": 2
}, {
  "value": "Related work",
  "id": "related-work",
  "level": 2
}, {
  "value": "Resolution / current status",
  "id": "resolution--current-status",
  "level": 2
}, {
  "value": "Shipped fix (E02:S16, v0.2.16.13+1)",
  "id": "shipped-fix-e02s16-v0216131",
  "level": 3
}, {
  "value": "Remediation evidence",
  "id": "remediation-evidence",
  "level": 3
}, {
  "value": "Corpus sweep (out of scope for this BR)",
  "id": "corpus-sweep-out-of-scope-for-this-br",
  "level": 3
}, {
  "value": "SitRep / closure",
  "id": "sitrep--closure",
  "level": 3
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
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "bug-report-br-059-ukw-moscow-update-omits-in-progress-story-tasks-incomplete-coverage",
        children: "Bug Report BR-059: UKW MoSCOW Update Omits In-Progress Story Tasks (Incomplete Coverage)"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bug ID:"
      }), " BR-059", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Task ID:"
      }), " ", (0,jsx_runtime.jsxs)(_components.a, {
        href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-02/story-16-perpetual-ongoing-workflow-operations/T13-br059-ukw-moscow-full-story-task-coverage",
        children: ["E02:S16", ":T13"]
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Historical implementing task:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "E06:S07:T109"
      }), " (superseded 2026-05-29, FR-087 Wave 4)", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Priority:"
      }), " HIGH", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Severity:"
      }), " MEDIUM (board SoT diverges from story checklist; planners lose visibility)", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Status:"
      }), " RESOLVED", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Created:"
      }), " 2026-03-30", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Last updated:"
      }), " 2026-06-03 — Process fix + regression target remediated; scoped corpus sweep documented (", (0,jsx_runtime.jsx)(_components.strong, {
        children: "v0.2.16.3+6"
      }), ")", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Classification:"
      }), " UKW + Kanban board accuracy"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "bug-summary",
      children: "Bug Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "comprehensive UKW"
      }), " run promoted ", (0,jsx_runtime.jsxs)(_components.strong, {
        children: ["E05:S09", ":T01"]
      }), " to the MoSCOW ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Should"
      }), " section but ", (0,jsx_runtime.jsxs)(_components.strong, {
        children: ["did not add E05:S09", ":T02", "–T07"]
      }), ", even though ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Story 009"
      }), " lists all seven tasks as ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "TODO / IN PROGRESS"
      }), " in its task checklist. Treating “one representative task per story” as sufficient is a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "workflow failure"
      }), ": the kanban board is expected to reflect ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "all active tasks"
      }), " for an in-progress story unless explicitly deferred."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "problem-description",
      children: "Problem Description"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "observed-behavior",
      children: "Observed behavior"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Story: ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-05/story-09-docusaurus-documentation-portal",
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "story-09-docusaurus-documentation-portal.md"
          })
        }), " — checklist shows ", (0,jsx_runtime.jsxs)(_components.strong, {
          children: ["E05:S09", ":T01", "–T07"]
        }), " (FR-065–FR-071), all still open."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["After UKW (2026-03-30), ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/kboard",
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "kboard.md"
          })
        }), " ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Should"
        }), " listed ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "only T01"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Stakeholder expectation: ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "every"
        }), " E5", ":S09", " task that is not complete should appear on the board (or be explicitly moved to ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Won’t"
        }), " / documented deferral with rationale)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "expected-behavior",
      children: "Expected behavior"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["UKW Step 6 (MoSCOW) should either:", "\n", (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Enumerate all non-complete tasks"
            }), " from the story’s task checklist for stories marked IN PROGRESS, ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "or"
            })]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Fail loudly"
            }), " (agent summary + optional validator) when a story has N>1 open tasks but the board lists fewer than N without a documented exception."]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "concrete-example",
      children: "Concrete example"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Task"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "FR"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "On board after UKW (before fix)"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["E05:S09", ":T01"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FR-065"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["E05:S09", ":T02"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FR-066"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["E05:S09", ":T03"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FR-067"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["E05:S09", ":T04"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FR-068"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["E05:S09", ":T05"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FR-069"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["E05:S09", ":T06"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FR-070"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["E05:S09", ":T07"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FR-071"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "impact",
      children: "Impact"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Planning:"
        }), " Teams assume the MoSCOW board is complete; missing rows hide parallelizable work (e.g. docs path, CI, deploy)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "UKW trust:"
        }), " Partial updates read as “success” while coverage is incomplete (related pattern: ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/fr-br/BR-042-ukw-agent-board-cleanup-failure",
          children: "BR-042"
        }), ")."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Forensics:"
        }), " Harder to correlate FR chain ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "FR-065–071"
        }), " with visible board work."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "proposed-direction-investigation",
      children: "Proposed direction (investigation)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Cursor rules / UKW guide:"
        }), " State explicitly that for IN PROGRESS stories, ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "all open tasks"
        }), " from the story checklist must appear in MoSCOW (or ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Won’t"
        }), " with reason), not a single “lead” task."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Agent procedure:"
        }), " UKW Step 6: diff story task checklist ↔ board rows for current epic/story scope; add missing rows in order ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "T01…T07"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Optional:"
        }), " Lightweight script or checklist item: “Story S09 open task count == board Should rows for E5", ":S09", " (± deferrals).”"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Regression:"
        }), " Re-run UKW after fix on a story with multiple open tasks and confirm full enumeration."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "related-work",
      children: "Related work"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Implementing task:"
        }), " ", (0,jsx_runtime.jsxs)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-02/story-16-perpetual-ongoing-workflow-operations/T13-br059-ukw-moscow-full-story-task-coverage",
          children: ["E02:S16", ":T13"]
        }), " (historical: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "E06:S07:T109"
        }), ")"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Story:"
        }), " ", (0,jsx_runtime.jsxs)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-05/story-09-docusaurus-documentation-portal",
          children: ["E5", ":S09", " – Docusaurus Documentation Portal"]
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Related BR:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/fr-br/BR-042-ukw-agent-board-cleanup-failure",
          children: "BR-042"
        }), " (completed tasks left on board — opposite failure mode)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Related BR:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/fr-br/BR-034-ukw-moscow-prioritization-missing",
          children: "BR-034"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Perpetual UKW task:"
        }), " ", (0,jsx_runtime.jsxs)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-02/story-16-perpetual-ongoing-workflow-operations/T04-ad-hoc-kanban-synchronization-and-hygiene-perpetual",
          children: ["E02:S16", ":T03"]
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "resolution--current-status",
      children: "Resolution / current status"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "RESOLVED (2026-06-03)"
      }), " — Original UKW failure mode (single “lead” task per story) is fixed; regression tooling and remediation evidence are in place."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "shipped-fix-e02s16-v0216131",
      children: ["Shipped fix (E02:S16", ":T13", ", v0.2.16.13+1)"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "UKW Step 6 Part B.1"
        }), " in ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".cursorrules"
        }), ", ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/packages/frameworks/workflow-mgt/cursorrules-ukw-trigger-section.md",
          children: "cursorrules-ukw-trigger-section.md"
        }), ", ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/packages/frameworks/workflow-mgt/KB/Documentation/Developer_Docs/vwmp/update-kanban-workflow-agent-execution.md",
          children: "update-kanban-workflow-agent-execution.md"
        }), ", ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/packages/frameworks/workflow-mgt/agents/ukw/AGENTS.md",
          children: "ukw/AGENTS.md"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Advisory ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/packages/frameworks/workflow-mgt/scripts/kanban/validate_story_moscow_coverage.py",
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "validate_story_moscow_coverage.py"
          })
        }), " (", (0,jsx_runtime.jsx)(_components.code, {
          children: "--story"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "--scan-all"
        }), ")."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "IPP:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/implementation-cycles/IPP-E02S16T13-br059-ukw-moscow-full-story-coverage",
          children: "IPP-E2S16T13-br059-ukw-moscow-full-story-coverage.md"
        }), "."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "remediation-evidence",
      children: "Remediation evidence"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Target"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Result"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsxs)(_components.strong, {
              children: ["E05", ":S09"]
            }), " (original report)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Manual board fix 2026-03-30"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsxs)(_components.strong, {
              children: ["E10", ":S01"]
            }), " (regression dry-run)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "PASS"
            }), " after ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "T01–T06"
            }), " added to ", (0,jsx_runtime.jsx)(_components.code, {
              children: "kboard.md"
            }), " (", (0,jsx_runtime.jsx)(_components.code, {
              children: "v0.2.16.3+5"
            }), ")"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsxs)(_components.strong, {
              children: ["E02:S11", ":T13", "–T14"]
            }), " (active open tasks)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Added to ", (0,jsx_runtime.jsx)(_components.code, {
              children: "kboard.md"
            }), " Could Have (", (0,jsx_runtime.jsx)(_components.code, {
              children: "v0.2.16.3+6"
            }), ")"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "corpus-sweep-out-of-scope-for-this-br",
      children: "Corpus sweep (out of scope for this BR)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "validate_story_moscow_coverage.py --scan-all"
      }), " (2026-06-03): ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "37"
      }), " stories with open checklist tasks still lack full MoSCOW rows — mostly TODO/backlog epics intentionally absent from the active board per MoSCOW value audit. ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "UKW Part B.1"
      }), " applies on the next comprehensive UKW for ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "IN PROGRESS"
      }), " stories; backlog enumeration is a separate hygiene program (not BR-059)."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Report: ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/docs/project-management/changelog-and-release-notes/changelog-archive/four-surface-reports/br059-corpus-scan-2026-06-03.json",
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "br059-corpus-scan-2026-06-03.json"
        })
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "sitrep--closure",
      children: "SitRep / closure"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/implementation-cycles/IPP-E02S16T13-br059-ukw-moscow-full-story-coverage",
          children: "IPP-E2S16T13 §7.1–§7.2"
        }), " — Option ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "D"
        }), " (scoped RESOLVED): process + regression fixed; full backlog board fill deferred."]
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