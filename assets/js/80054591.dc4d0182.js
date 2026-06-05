"use strict";
(self["webpackChunkportal"] = self["webpackChunkportal"] || []).push([["84122"], {
30572(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_project_management_kanban_epics_epic_04_story_11_kanban_granularity_discrete_task_docs_migration_completion_report_md_800_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-project-management-kanban-epics-epic-04-story-11-kanban-granularity-discrete-task-docs-migration-completion-report-md-800.json
var site_docs_project_management_kanban_epics_epic_04_story_11_kanban_granularity_discrete_task_docs_migration_completion_report_md_800_namespaceObject = JSON.parse('{"id":"project-management/kanban/epics/epic-04/story-11-kanban-granularity-discrete-task-docs/migration-completion-report","title":"FR-016 Migration Completion Report (Wave 4)","description":"TaskS11:T07 — Migrate Embedded Tasks to Discrete Task Documents","source":"@site/../docs/project-management/kanban/epics/epic-04/story-11-kanban-granularity-discrete-task-docs/migration-completion-report.md","sourceDirName":"project-management/kanban/epics/epic-04/story-11-kanban-granularity-discrete-task-docs","slug":"/project-management/kanban/epics/epic-04/story-11-kanban-granularity-discrete-task-docs/migration-completion-report","permalink":"/ai-dev-kit/docs/project-management/kanban/epics/epic-04/story-11-kanban-granularity-discrete-task-docs/migration-completion-report","draft":false,"unlisted":false,"editUrl":"https://github.com/RMS-Ltd/ai-dev-kit/tree/main/docs/../docs/project-management/kanban/epics/epic-04/story-11-kanban-granularity-discrete-task-docs/migration-completion-report.md","tags":[],"version":"current","frontMatter":{"lifecycle":"evergreen","ttl_days":null,"created_at":"2026-06-05T05:15:00.000Z","expires_at":null,"housekeeping_policy":"keep"},"sidebar":"docsSidebar","previous":{"title":"E04:S11:T07 – Planning: Spec, Tests, Implementation Plan","permalink":"/ai-dev-kit/docs/project-management/kanban/epics/epic-04/story-11-kanban-granularity-discrete-task-docs/T07-planning-spec-tests-impl"},"next":{"title":"FR-016 Migration Guide — Embedded Tasks to Discrete Task Documents","permalink":"/ai-dev-kit/docs/project-management/kanban/epics/epic-04/story-11-kanban-granularity-discrete-task-docs/migration-guide"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ../docs/project-management/kanban/epics/epic-04/story-11-kanban-granularity-discrete-task-docs/migration-completion-report.md


const frontMatter = {
	lifecycle: 'evergreen',
	ttl_days: null,
	created_at: new Date('2026-06-05T05:15:00.000Z'),
	expires_at: null,
	housekeeping_policy: 'keep'
};
const contentTitle = 'FR-016 Migration Completion Report (Wave 4)';

const assets = {

};



const toc = [{
  "value": "1. Executive summary",
  "id": "1-executive-summary",
  "level": 2
}, {
  "value": "2. Full-repo validation (<code>validate_migration.py</code>)",
  "id": "2-full-repo-validation-validate_migrationpy",
  "level": 2
}, {
  "value": "3. RW Step 1 spot-check (task doc discovery)",
  "id": "3-rw-step-1-spot-check-task-doc-discovery",
  "level": 2
}, {
  "value": "3.1 Discovery by <code>**Task ID:**</code> header (11-sample panel)",
  "id": "31-discovery-by-task-id-header-11-sample-panel",
  "level": 3
}, {
  "value": "3.2 <code>validate_rw_task_complete.py</code> (releasability guard)",
  "id": "32-validate_rw_task_completepy-releasability-guard",
  "level": 3
}, {
  "value": "4. Documented exceptions",
  "id": "4-documented-exceptions",
  "level": 2
}, {
  "value": "4.1 Legacy Task header format (<code>**Task:**</code> vs <code>**Task ID:**</code>) — <strong>RESOLVED 2026-06-05</strong>",
  "id": "41-legacy-task-header-format-task-vs-task-id--resolved-2026-06-05",
  "level": 3
}, {
  "value": "4.2 Epic 1 Story 1 — checklist-only tasks — <strong>RESOLVED 2026-06-05</strong>",
  "id": "42-epic-1-story-1--checklist-only-tasks--resolved-2026-06-05",
  "level": 3
}, {
  "value": "4.3 Scope placeholders in generated docs",
  "id": "43-scope-placeholders-in-generated-docs",
  "level": 3
}, {
  "value": "5. Tooling validation",
  "id": "5-tooling-validation",
  "level": 2
}, {
  "value": "6. Discrete task inventory by epic",
  "id": "6-discrete-task-inventory-by-epic",
  "level": 2
}, {
  "value": "7. Wave 3 release trail (internal builds)",
  "id": "7-wave-3-release-trail-internal-builds",
  "level": 2
}, {
  "value": "8. Remaining work (closure)",
  "id": "8-remaining-work-closure",
  "level": 2
}, {
  "value": "9. References",
  "id": "9-references",
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
    p: "p",
    pre: "pre",
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
        id: "fr-016-migration-completion-report-wave-4",
        children: "FR-016 Migration Completion Report (Wave 4)"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Task:"
      }), " E04:S11", ":T07", " — Migrate Embedded Tasks to Discrete Task Documents", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Wave:"
      }), " 4 — Final validation", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Report date:"
      }), " 2026-06-05", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Version anchor at closure:"
      }), " v0.4.11.7+16 (E04:S11", ":T07", " COMPLETE)", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Validator:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "packages/frameworks/workflow-mgt/scripts/kanban/validate_migration.py"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1-executive-summary",
      children: "1. Executive summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Wave 3 phased rollout is ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "complete"
      }), ". Full-repo validation reports ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "0 embedded task sections"
      }), ", ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "0 broken task links"
      }), ", across ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "92"
      }), " Story files. Discrete Task document inventory: ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "636"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "T*.md"
      }), " files under ", (0,jsx_runtime.jsx)(_components.code, {
        children: "docs/project-management/kanban/epics/"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Metric"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Wave 0 catalog (2026-06-05)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Post–Wave 3 (2026-06-05)"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Embedded sections"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "417"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "0"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["Discrete ", (0,jsx_runtime.jsx)(_components.code, {
              children: "T*.md"
            }), " files"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "301"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "636"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Stories with ≥1 embedded"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "69"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "0"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Broken task links"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(not scanned)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "0"
            })
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Outcome:"
      }), " Migration completeness criterion met (§7.1). Integration spot-checks pass for host task and representative migrated tasks (§3). Documented exceptions remain for legacy Task doc header formats and pre-discrete Epic 1 Story 1 tasks (§4)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.h2, {
      id: "2-full-repo-validation-validate_migrationpy",
      children: ["2. Full-repo validation (", (0,jsx_runtime.jsx)(_components.code, {
        children: "validate_migration.py"
      }), ")"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Command:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "python packages/frameworks/workflow-mgt/scripts/kanban/validate_migration.py docs/project-management/kanban\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Result (2026-06-05):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Stories scanned: 92\nEmbedded task sections: 0\nStories with embedded tasks: 0\nBroken task links: 0\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Exit code:"
      }), " 0 (PASS)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "3-rw-step-1-spot-check-task-doc-discovery",
      children: "3. RW Step 1 spot-check (task doc discovery)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Purpose:"
      }), " Confirm RW Step 1 can locate Task documents for migrated work (FR-016 RF5), not releasability under FR-060."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "31-discovery-by-task-id-header-11-sample-panel",
      children: ["3.1 Discovery by ", (0,jsx_runtime.jsx)(_components.code, {
        children: "**Task ID:**"
      }), " header (11-sample panel)"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Task ID"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Discrete doc"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Notes"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["E04:S11", ":T07"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "story-11-…/T07-planning-spec-tests-impl.md"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Host task — PASS"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["E04:S11", ":T01"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "story-11-…/T01-update-kanban-governance-policy-….md"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PASS"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["E02:S05", ":T01"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "story-05-…/T01-plan-pir-workflow-structure-….md"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PASS"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["E06:S07", ":T01"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "story-07-…/T01-comprehensive-adk-implementation-….md"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PASS"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["E07:S01", ":T02"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "story-01-…/T02-create-maintenance-task-prioritization-….md"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PASS"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["E08:S01", ":T01"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "story-01-…/T01-create-generator-framework.md"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PASS"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["E10:S01", ":T01"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "story-01-…/T01-establish-expectations-baseline-….md"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PASS"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["E11:S01", ":T01"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "story-01-…/T01-establish-expectations-baseline-….md"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PASS"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["E21:S00", ":T01"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "story-00-…/T01-add-language-selection-prompt-….md"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PASS"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["E05:S06", ":T01"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "story-06-…/T01-review-and-validate-legacy-repository-….md"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PASS"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["E03:S02", ":T01"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "story-02-…/T01-core-versioning-scenarios.md"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Legacy ", (0,jsx_runtime.jsx)(_components.code, {
              children: "**Task:**"
            }), " header (see §4.1)"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["E01:S01", ":T01"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No discrete file; checklist-only legacy story (see §4.2)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Discovery panel:"
      }), " ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "12/12"
      }), " samples resolvable after grandfathered hygiene (2026-06-05)."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "32-validate_rw_task_completepy-releasability-guard",
      children: ["3.2 ", (0,jsx_runtime.jsx)(_components.code, {
        children: "validate_rw_task_complete.py"
      }), " (releasability guard)"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Sample run on the same panel: ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "4/11"
      }), " exit 0. Non-zero results are ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "expected"
      }), " for migrated tasks in ", (0,jsx_runtime.jsx)(_components.code, {
        children: "TODO"
      }), " / legacy ", (0,jsx_runtime.jsx)(_components.code, {
        children: "COMPLETE"
      }), " marker status — validator enforces FR-060 releasability, not doc presence. Host task ", (0,jsx_runtime.jsxs)(_components.strong, {
        children: ["E04:S11", ":T07"]
      }), " passes releasability (", (0,jsx_runtime.jsx)(_components.code, {
        children: "IN PROGRESS"
      }), ")."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "4-documented-exceptions",
      children: "4. Documented exceptions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "41-legacy-task-header-format-task-vs-task-id--resolved-2026-06-05",
      children: ["4.1 Legacy Task header format (", (0,jsx_runtime.jsx)(_components.code, {
        children: "**Task:**"
      }), " vs ", (0,jsx_runtime.jsx)(_components.code, {
        children: "**Task ID:**"
      }), ") — ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "RESOLVED 2026-06-05"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["40 pre-migration discrete docs received ", (0,jsx_runtime.jsx)(_components.code, {
        children: "**Task ID:**"
      }), " lines (retaining existing ", (0,jsx_runtime.jsx)(_components.code, {
        children: "**Task:**"
      }), " title lines). RW Step 1c discovery now resolves all legacy task-doc paths in the kanban tree."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "42-epic-1-story-1--checklist-only-tasks--resolved-2026-06-05",
      children: ["4.2 Epic 1 Story 1 — checklist-only tasks — ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "RESOLVED 2026-06-05"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Backfilled discrete docs for ", (0,jsx_runtime.jsxs)(_components.strong, {
        children: ["E01:S01", ":T01", "–T03"]
      }), " under ", (0,jsx_runtime.jsx)(_components.code, {
        children: "story-01-vibe-dev-kit-kanban-and-versioning/"
      }), "; story and epic checklists wired with links. ", (0,jsx_runtime.jsx)(_components.code, {
        children: "validate_rw_task_complete.py"
      }), " locates E01:S01", ":T01", "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "43-scope-placeholders-in-generated-docs",
      children: "4.3 Scope placeholders in generated docs"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Wave 2+ ", (0,jsx_runtime.jsx)(_components.code, {
        children: "generate_task_doc.py"
      }), " output may retain ", (0,jsx_runtime.jsx)(_components.code, {
        children: "[To be filled during migration]"
      }), " in Scope for tasks migrated without rich embedded bodies. ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Non-blocking"
      }), " for structural migration; content backfill is adopters/maintainer hygiene."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "5-tooling-validation",
      children: "5. Tooling validation"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Check"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Result"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "test_migrate_embedded_tasks.py"
            }), " (T1–T12)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "14/14 PASS"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["Idempotent ", (0,jsx_runtime.jsx)(_components.code, {
              children: "migrate_story.py"
            }), " re-run (E04", ":S11", ", E07", ":S01", ", E21", ":S00", ")"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "0"
            }), " new migrations; ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "0"
            }), " embedded reintroduced"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "validate_migration.py"
            }), " per-epic (E01–E11, E21)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "0"
            }), " embedded per epic post–Wave 3"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "6-discrete-task-inventory-by-epic",
      children: "6. Discrete task inventory by epic"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Epic"
          }), (0,jsx_runtime.jsxs)(_components.th, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "T*.md"
            }), " count (approx.)"]
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "E02"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "139"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "E04"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "106"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "E06"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "97"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "E05"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "93"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "E07"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "50"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "E03"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "35"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "E01"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "29"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "E08"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "28"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "E21"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "28"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "E10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "12"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "E11"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "12"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "E09"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Total"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "636"
            })
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "7-wave-3-release-trail-internal-builds",
      children: "7. Wave 3 release trail (internal builds)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Build"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Scope"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "+7"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Wave 2 pilot (E04", ":S11", ", E06", ":S07", " subset)"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "+8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Epic 2"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "+9"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Epic 4"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "+10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Epics 1 & 3"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "+11"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Epics 5 & 6"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "+12"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Epics 7 & 8"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "+13"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Epics 10 & 11"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "+14"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Epic 21 — ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Wave 3 complete"
            })]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "8-remaining-work-closure",
      children: "8. Remaining work (closure)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      className: "contains-task-list",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Wave 5:"
        }), " Migration plan APPROVED v1.1.0; script path links §3.0; ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-04/story-11-kanban-granularity-discrete-task-docs/migration-guide",
          children: "migration-guide.md"
        }), "; FR-016 implementation notes synced"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Grandfathered hygiene (2026-06-05):"
        }), " 40 legacy ", (0,jsx_runtime.jsx)(_components.code, {
          children: "**Task ID:**"
        }), " headers added; E01:S01", ":T01", "–T03 backfilled"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Closure RW:"
        }), " v0.4.11.7+16 — E04:S11", ":T07", " ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "COMPLETE"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "9-references",
      children: "9. References"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsxs)(_components.a, {
          href: "/ai-dev-kit/docs/implementation-cycles/IPP-E04S11T07-fr016-discrete-task-docs-migration",
          children: ["IPP E04:S11", ":T07"]
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-04/story-11-kanban-granularity-discrete-task-docs/migration-plan-embedded-to-discrete-tasks",
          children: "Migration plan"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/fr-br/FR-016-kanban-granularity-discrete-task-docs",
          children: "FR-016"
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Tooling: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "packages/frameworks/workflow-mgt/scripts/kanban/{validate_migration,migrate_story,extract_embedded_tasks}.py"
        })]
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