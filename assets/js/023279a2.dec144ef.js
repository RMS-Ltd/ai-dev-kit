"use strict";
(self["webpackChunkportal"] = self["webpackChunkportal"] || []).push([["86440"], {
31165(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_project_management_kanban_kboard_md_023_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-project-management-kanban-kboard-md-023.json
var site_docs_project_management_kanban_kboard_md_023_namespaceObject = JSON.parse('{"id":"project-management/kanban/kboard","title":"AI Dev Kit – Kanban Board","description":"Last Updated E06T23 +8)","source":"@site/../docs/project-management/kanban/kboard.md","sourceDirName":"project-management/kanban","slug":"/project-management/kanban/kboard","permalink":"/ai-dev-kit/docs/project-management/kanban/kboard","draft":false,"unlisted":false,"editUrl":"https://github.com/RMS-Ltd/ai-dev-kit/tree/main/docs/../docs/project-management/kanban/kboard.md","tags":[],"version":"current","frontMatter":{"lifecycle":"evergreen","ttl_days":null,"created_at":"2025-12-04T12:02:50.000Z","expires_at":null,"housekeeping_policy":"keep"},"sidebar":"docsSidebar","previous":{"title":"AI Dev Kit – Kanban Structure","permalink":"/ai-dev-kit/docs/project-management/kanban/kanban-structure"},"next":{"title":"Rituals","permalink":"/ai-dev-kit/docs/project-management/rituals/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ../docs/project-management/kanban/kboard.md


const frontMatter = {
	lifecycle: 'evergreen',
	ttl_days: null,
	created_at: new Date('2025-12-04T12:02:50.000Z'),
	expires_at: null,
	housekeeping_policy: 'keep'
};
const contentTitle = 'AI Dev Kit – Kanban Board';

const assets = {

};



const toc = [{
  "value": "MoSCOW Prioritized In-Progress Tasks",
  "id": "moscow-prioritized-in-progress-tasks",
  "level": 2
}, {
  "value": "Must Have (M) - Critical Tasks",
  "id": "must-have-m---critical-tasks",
  "level": 3
}, {
  "value": "Should Have (S) - Important Tasks",
  "id": "should-have-s---important-tasks",
  "level": 3
}, {
  "value": "Verification (V) - Task Shipped, FBU Verification Pending",
  "id": "verification-v---task-shipped-fbu-verification-pending",
  "level": 3
}, {
  "value": "Could Have (C) - Nice-to-Have Tasks",
  "id": "could-have-c---nice-to-have-tasks",
  "level": 3
}, {
  "value": "Ongoing (O) - Perpetual Tasks",
  "id": "ongoing-o---perpetual-tasks",
  "level": 3
}, {
  "value": "Won&#39;t Have (W) - Deferred Tasks",
  "id": "wont-have-w---deferred-tasks",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    blockquote: "blockquote",
    code: "code",
    em: "em",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
    hr: "hr",
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
        id: "ai-dev-kit--kanban-board",
        children: "AI Dev Kit – Kanban Board"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Last Updated:"
      }), " 2026-06-05 (RW -d: E06:S09", ":T23", " +8)\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Version:"
      }), " v0.6.9.23+8"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Active board contract:"
      }), " ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Sole active MoSCOW board"
      }), " (", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/architecture/standards-and-adrs/ADR-018-single-kanban-board-consolidation.md",
        children: "ADR-018"
      }), "). Rows are ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "live work"
      }), " (TODO / IN PROGRESS / OPEN / WAITING / PERPETUAL) plus filed ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Could Have"
      }), " backlog. ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Verification (V)"
      }), " band holds task-shipped / FBU-open items (", (0,jsx_runtime.jsx)(_components.code, {
        children: "⏳ WAITING"
      }), "). Remove ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "terminal"
      }), " rows and archive prose (use ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/project-management/kanban/kanban-completed",
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "kanban-completed.md"
        })
      }), " / ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/project-management/kanban/intake-completed",
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "intake-completed.md"
        })
      }), ")."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Note:"
      }), " Epics 1, 3, 7, 8, 10, 11 are COMPLETE. Epics 2, 4, 5, 6 are IN PROGRESS. Epic 21 is TODO."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Wiring:"
      }), " Every wired row includes FBU link(s) where applicable (UXR-010). Legacy ", (0,jsx_runtime.jsx)(_components.code, {
        children: "fbuboard.md"
      }), " / ", (0,jsx_runtime.jsx)(_components.code, {
        children: "kanban-board.md"
      }), " aliases ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "removed"
      }), " (intake rename wave)."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Structure:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/kanban-structure",
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "kanban-structure.md"
          })
        }), " · ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Guide:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/kanban-board-guide",
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "kanban-board-guide.md"
          })
        }), " · ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Completed:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/kanban-completed",
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "kanban-completed.md"
          })
        }), " · ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "FBU inventory:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/intake-structure",
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "intake-structure.md"
          })
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "moscow-prioritized-in-progress-tasks",
      children: "MoSCOW Prioritized In-Progress Tasks"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "must-have-m---critical-tasks",
      children: "Must Have (M) - Critical Tasks"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "should-have-s---important-tasks",
      children: "Should Have (S) - Important Tasks"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "verification-v---task-shipped-fbu-verification-pending",
      children: "Verification (V) - Task Shipped, FBU Verification Pending"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.em, {
        children: "(None.)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "could-have-c---nice-to-have-tasks",
      children: "Could Have (C) - Nice-to-Have Tasks"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsxs)(_components.strong, {
            children: ["E02:S14", ":T02"]
          }), " – Validate fresh install steps for each path - 📋 TODO (HIGH, Epic 2 workflow-mgt install evaluation) | ", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-02/story-14-workflow-management-package-installation-evaluation/T02-validate-fresh-install-steps-for-each-path",
            children: "Task"
          }), " | ", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-02/story-14-workflow-management-package-installation-evaluation",
            children: "Story"
          }), " | Last modified: 2026-06-05 13:08 UTC"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsxs)(_components.strong, {
            children: ["E02:S14", ":T03"]
          }), " – Validate migration/update paths (if supported) - 📋 TODO (HIGH, Epic 2 workflow-mgt install evaluation) | ", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-02/story-14-workflow-management-package-installation-evaluation/T03-validate-migrationupdate-paths-if-supported",
            children: "Task"
          }), " | ", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-02/story-14-workflow-management-package-installation-evaluation",
            children: "Story"
          }), " | Last modified: 2026-06-05 13:09 UTC"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsxs)(_components.strong, {
            children: ["E02:S14", ":T04"]
          }), " – Verify post-install configuration and validation steps - 📋 TODO (HIGH, Epic 2 workflow-mgt install evaluation) | ", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-02/story-14-workflow-management-package-installation-evaluation/T04-verify-post-install-configuration-and-validation-steps",
            children: "Task"
          }), " | ", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-02/story-14-workflow-management-package-installation-evaluation",
            children: "Story"
          }), " | Last modified: 2026-06-05 13:10 UTC"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsxs)(_components.strong, {
            children: ["E02:S14", ":T05"]
          }), " – Document failure modes and rollback guidance - 📋 TODO (HIGH, Epic 2 workflow-mgt install evaluation) | ", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-02/story-14-workflow-management-package-installation-evaluation/T05-document-failure-modes-and-rollback-guidance",
            children: "Task"
          }), " | ", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-02/story-14-workflow-management-package-installation-evaluation",
            children: "Story"
          }), " | Last modified: 2026-06-05 13:11 UTC"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsxs)(_components.strong, {
            children: ["E02:S14", ":T06"]
          }), " – Capture documentation gaps and improvements - 🔄 IN PROGRESS (HIGH, Epic 2 workflow-mgt install evaluation) | ", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-02/story-14-workflow-management-package-installation-evaluation/T06-capture-documentation-gaps-and-improvements",
            children: "Task"
          }), " | ", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-02/story-14-workflow-management-package-installation-evaluation",
            children: "Story"
          }), " | Last modified: 2026-06-05 13:12 UTC"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsxs)(_components.strong, {
            children: ["E05:S07", ":T01"]
          }), " – FR-022: Policy Docs Machine-Readable Salience - 📋 TODO (LOW, Machine-readable policy documentation) | ", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-05/story-07-policy-documentation-structure",
            children: "Task"
          }), " | ", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ai-dev-kit/docs/project-management/kanban/fr-br/FR-022-policy-docs-machine-readable-salience",
            children: "FR-022"
          }), " | Last modified: 2026-01-16 00:00 UTC"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsxs)(_components.strong, {
            children: ["E10:S01", ":T01"]
          }), " – Establish expectations baseline for Document Lifecycle package - 📋 TODO (HIGH, Epic 10 doc-lifecycle RC review) | ", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-10/story-01-document-lifecycle-package-implementation-review",
            children: "Task"
          }), " | ", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-10/story-01-document-lifecycle-package-implementation-review",
            children: "Story"
          }), " | Last modified: 2026-01-18 16:44 UTC"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsxs)(_components.strong, {
            children: ["E10:S01", ":T02"]
          }), " – Inventory package components and map to expectations - 📋 TODO (HIGH, Epic 10 doc-lifecycle RC review) | ", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-10/story-01-document-lifecycle-package-implementation-review",
            children: "Task"
          }), " | ", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-10/story-01-document-lifecycle-package-implementation-review",
            children: "Story"
          }), " | Last modified: 2026-01-18 16:45 UTC"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsxs)(_components.strong, {
            children: ["E10:S01", ":T03"]
          }), " – Validate lifecycle behavior against documented guidance - 📋 TODO (HIGH, Epic 10 doc-lifecycle RC review) | ", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-10/story-01-document-lifecycle-package-implementation-review",
            children: "Task"
          }), " | ", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-10/story-01-document-lifecycle-package-implementation-review",
            children: "Story"
          }), " | Last modified: 2026-01-18 16:46 UTC"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsxs)(_components.strong, {
            children: ["E10:S01", ":T04"]
          }), " – Review integrations and dependency alignment - 📋 TODO (HIGH, Epic 10 doc-lifecycle RC review) | ", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-10/story-01-document-lifecycle-package-implementation-review",
            children: "Task"
          }), " | ", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-10/story-01-document-lifecycle-package-implementation-review",
            children: "Story"
          }), " | Last modified: 2026-01-18 16:47 UTC"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsxs)(_components.strong, {
            children: ["E10:S01", ":T05"]
          }), " – Create gap log and risk assessment - 📋 TODO (HIGH, Epic 10 doc-lifecycle RC review) | ", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-10/story-01-document-lifecycle-package-implementation-review",
            children: "Task"
          }), " | ", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-10/story-01-document-lifecycle-package-implementation-review",
            children: "Story"
          }), " | Last modified: 2026-01-18 16:48 UTC"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsxs)(_components.strong, {
            children: ["E10:S01", ":T06"]
          }), " – Define RC sign-off criteria and remediation tasks - 📋 TODO (HIGH, Epic 10 doc-lifecycle RC review) | ", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-10/story-01-document-lifecycle-package-implementation-review",
            children: "Task"
          }), " | ", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-10/story-01-document-lifecycle-package-implementation-review",
            children: "Story"
          }), " | Last modified: 2026-01-18 16:49 UTC"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsxs)(_components.strong, {
            children: ["E07:S01", ":T10"]
          }), " – FR-039: AI Dev Kit Project Review and Legacy Clean-up - 📋 TODO (LOW, Review and clean up legacy project elements) | ", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-07/story-01-codebase-maintenance-tasks/T10-project-root-hygiene-and-legacy-docs-rationalization",
            children: "Task"
          }), " | ", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ai-dev-kit/docs/project-management/kanban/fr-br/FR-039-ai-dev-kit-project-review-and-legacy-clean-up",
            children: "FR-039"
          }), " | Last modified: 2026-06-04 12:15 UTC"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsxs)(_components.strong, {
            children: ["E21:S00", ":T01"]
          }), " – FR-006: Localization Language Selection UK/US English - 📋 TODO (LOW, Language selection for UK/US English) | ", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-21/story-00-language-selection-at-setup",
            children: "Task"
          }), " | ", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ai-dev-kit/docs/project-management/kanban/fr-br/FR-006-localization-language-selection-uk-us-english",
            children: "FR-006"
          }), " | Last modified: 2025-12-09 00:00 UTC"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "ongoing-o---perpetual-tasks",
      children: "Ongoing (O) - Perpetual Tasks"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsxs)(_components.strong, {
            children: ["E02:S16", ":T03"]
          }), " – Workflow maintenance (Perpetual) - 🔄 PERPETUAL (BR-059 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "RESOLVED"
          }), " ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "v0.2.16.3+6"
          }), ") - ", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-02/story-16-perpetual-ongoing-workflow-operations/T03-rehouse-workflow-perpetual-tasks-and-harden-guardrails",
            children: "Task"
          }), " | ", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-02/story-16-perpetual-ongoing-workflow-operations",
            children: "Story"
          }), " | ", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ai-dev-kit/docs/project-management/kanban/fr-br/BR-059-ukw-moscow-incomplete-story-task-coverage",
            children: "BR-059"
          }), " | Last modified: 2026-06-03 12:29 UTC"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsxs)(_components.strong, {
            children: ["E02:S16", ":T04"]
          }), " – Ad-hoc Kanban synchronization and hygiene (Perpetual) - 🔄 PERPETUAL (", (0,jsx_runtime.jsx)(_components.strong, {
            children: "v0.2.16.4+33"
          }), " — UKW -c E02", ":S13", " story closure ledger backfill) - ", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-02/story-16-perpetual-ongoing-workflow-operations/T04-ad-hoc-kanban-synchronization-and-hygiene-perpetual",
            children: "Task"
          }), " | ", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-02/story-16-perpetual-ongoing-workflow-operations",
            children: "Story"
          }), " | ", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ai-dev-kit/docs/project-management/kanban/fr-br/FR-023-update-kanban-workflow-ukw",
            children: "FR-023"
          }), " | Last modified: 2026-06-05 04:03 UTC"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsxs)(_components.strong, {
            children: ["E02:S16", ":T05"]
          }), " – Markdown Documentation Maintenance (Perpetual) - 🔄 PERPETUAL (", (0,jsx_runtime.jsx)(_components.strong, {
            children: "v0.2.16.5+6"
          }), " — Wave 2: 36-file link-depth hygiene; BR-068 guard green) - ", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-02/story-16-perpetual-ongoing-workflow-operations/T05-markdown-documentation-maintenance-perpetual",
            children: "Task"
          }), " | ", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-02/story-16-perpetual-ongoing-workflow-operations",
            children: "Story"
          }), " | ", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ai-dev-kit/docs/project-management/kanban/fr-br/FR-088-dedicated-story-for-perpetual-ongoing-tasks",
            children: "FR-088"
          }), " | Last modified: 2026-06-05 10:38 UTC"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsxs)(_components.strong, {
            children: ["E02:S16", ":T10"]
          }), " – Ad-hoc Repository Infrastructure Maintenance (Perpetual) - 🔄 PERPETUAL (last RW ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "v0.2.16.10+5"
          }), ") - ", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-02/story-16-perpetual-ongoing-workflow-operations/T10-ad-hoc-repository-infrastructure-maintenance-perpetual",
            children: "Task"
          }), " | ", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-02/story-16-perpetual-ongoing-workflow-operations",
            children: "Story"
          }), " | Last modified: 2026-06-04 22:55 UTC"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsxs)(_components.strong, {
            children: ["E02:S16", ":T14"]
          }), " – UKW gap discovery: TODO tasks and unfiled FR/BR (", (0,jsx_runtime.jsx)(_components.strong, {
            children: "FR-043"
          }), ") - 📋 TODO (HIGH, perpetual UKW intake hygiene) - ", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-02/story-16-perpetual-ongoing-workflow-operations/T14-ukw-gap-discovery-unfiled-fr-br-fr043",
            children: "Task"
          }), " | ", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ai-dev-kit/docs/project-management/kanban/fr-br/FR-043-ukw-gap-discovery-todo-tasks-and-unfiled-fr-br",
            children: "FR-043"
          }), " | Last modified: 2026-05-30 13:36 UTC"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsxs)(_components.strong, {
            children: ["E07:S01", ":T05"]
          }), " – Markdown Maintenance (Perpetual Task) - 🔄 PERPETUAL (v0.7.1.5+2; ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "FR-058"
          }), " proposed workflow) - ", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-07/story-01-codebase-maintenance-tasks/T05-markdown-maintenance-perpetual-task",
            children: "Task"
          }), " | ", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-07/story-01-codebase-maintenance-tasks",
            children: "Story"
          }), " | ", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ai-dev-kit/docs/project-management/kanban/fr-br/FR-058-markdown-maintenance-workflow",
            children: "FR-058"
          }), " | Last modified: 2026-03-07 00:00 UTC"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "wont-have-w---deferred-tasks",
      children: "Won't Have (W) - Deferred Tasks"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsxs)(_components.em, {
        children: ["(Deferred and shipped items: see ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/kanban-completed",
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "kanban-completed.md"
          })
        }), " and story checklists — not listed on the active board.)"]
      })
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