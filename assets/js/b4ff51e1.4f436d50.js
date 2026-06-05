"use strict";
(self["webpackChunkportal"] = self["webpackChunkportal"] || []).push([["950"], {
79727(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_project_management_kanban_epics_epic_04_story_11_kanban_granularity_discrete_task_docs_migration_guide_md_b4f_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-project-management-kanban-epics-epic-04-story-11-kanban-granularity-discrete-task-docs-migration-guide-md-b4f.json
var site_docs_project_management_kanban_epics_epic_04_story_11_kanban_granularity_discrete_task_docs_migration_guide_md_b4f_namespaceObject = JSON.parse('{"id":"project-management/kanban/epics/epic-04/story-11-kanban-granularity-discrete-task-docs/migration-guide","title":"FR-016 Migration Guide — Embedded Tasks to Discrete Task Documents","description":"TaskS11:T07","source":"@site/../docs/project-management/kanban/epics/epic-04/story-11-kanban-granularity-discrete-task-docs/migration-guide.md","sourceDirName":"project-management/kanban/epics/epic-04/story-11-kanban-granularity-discrete-task-docs","slug":"/project-management/kanban/epics/epic-04/story-11-kanban-granularity-discrete-task-docs/migration-guide","permalink":"/ai-dev-kit/docs/project-management/kanban/epics/epic-04/story-11-kanban-granularity-discrete-task-docs/migration-guide","draft":false,"unlisted":false,"editUrl":"https://github.com/RMS-Ltd/ai-dev-kit/tree/main/docs/../docs/project-management/kanban/epics/epic-04/story-11-kanban-granularity-discrete-task-docs/migration-guide.md","tags":[],"version":"current","frontMatter":{"lifecycle":"evergreen","ttl_days":null,"created_at":"2026-06-05T05:30:00.000Z","expires_at":null,"housekeeping_policy":"keep"},"sidebar":"docsSidebar","previous":{"title":"FR-016 Migration Completion Report (Wave 4)","permalink":"/ai-dev-kit/docs/project-management/kanban/epics/epic-04/story-11-kanban-granularity-discrete-task-docs/migration-completion-report"},"next":{"title":"Migration Plan: Embedded Tasks to Discrete Task Documents","permalink":"/ai-dev-kit/docs/project-management/kanban/epics/epic-04/story-11-kanban-granularity-discrete-task-docs/migration-plan-embedded-to-discrete-tasks"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ../docs/project-management/kanban/epics/epic-04/story-11-kanban-granularity-discrete-task-docs/migration-guide.md


const frontMatter = {
	lifecycle: 'evergreen',
	ttl_days: null,
	created_at: new Date('2026-06-05T05:30:00.000Z'),
	expires_at: null,
	housekeeping_policy: 'keep'
};
const contentTitle = 'FR-016 Migration Guide — Embedded Tasks to Discrete Task Documents';

const assets = {

};



const toc = [{
  "value": "1. When to use this guide",
  "id": "1-when-to-use-this-guide",
  "level": 2
}, {
  "value": "2. Canonical tooling",
  "id": "2-canonical-tooling",
  "level": 2
}, {
  "value": "3. Migrate a single Story",
  "id": "3-migrate-a-single-story",
  "level": 2
}, {
  "value": "4. Validate after migration",
  "id": "4-validate-after-migration",
  "level": 2
}, {
  "value": "5. Grandfathered hygiene (completed 2026-06-05)",
  "id": "5-grandfathered-hygiene-completed-2026-06-05",
  "level": 2
}, {
  "value": "6. Release workflow integration",
  "id": "6-release-workflow-integration",
  "level": 2
}, {
  "value": "7. New tasks (post-migration policy)",
  "id": "7-new-tasks-post-migration-policy",
  "level": 2
}, {
  "value": "8. References",
  "id": "8-references",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    br: "br",
    code: "code",
    h1: "h1",
    h2: "h2",
    header: "header",
    hr: "hr",
    li: "li",
    ol: "ol",
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
        id: "fr-016-migration-guide--embedded-tasks-to-discrete-task-documents",
        children: "FR-016 Migration Guide — Embedded Tasks to Discrete Task Documents"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Task:"
      }), " E04:S11", ":T07", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Audience:"
      }), " Maintainers and adopters running or verifying FR-016 migration", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Status:"
      }), " Published (Wave 5 — 2026-06-05)", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Related:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-04/story-11-kanban-granularity-discrete-task-docs/migration-plan-embedded-to-discrete-tasks",
        children: "Migration plan"
      }), " · ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-04/story-11-kanban-granularity-discrete-task-docs/migration-completion-report",
        children: "Completion report"
      }), " · ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/implementation-cycles/IPP-E04S11T07-fr016-discrete-task-docs-migration",
        children: "IPP"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1-when-to-use-this-guide",
      children: "1. When to use this guide"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Verify"
        }), " an ai-dev-kit (or adopter) kanban tree is FR-016 structurally compliant (no embedded task bodies in Story files)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Migrate"
        }), " remaining embedded tasks in a Story after adding new inline task sections (should not happen under current policy — use discrete docs + doc-init per FR-017)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Onboard"
        }), " contributors to the canonical script paths under ", (0,jsx_runtime.jsx)(_components.code, {
          children: "packages/frameworks/workflow-mgt/scripts/kanban/"
        }), "."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "ai-dev-kit repo (2026-06-05):"
      }), " Migration ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "complete"
      }), " — 92 stories, ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "0"
      }), " embedded sections, ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "636"
      }), " discrete ", (0,jsx_runtime.jsx)(_components.code, {
        children: "T*.md"
      }), " files. See ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-04/story-11-kanban-granularity-discrete-task-docs/migration-completion-report",
        children: "completion report"
      }), " for metrics and exceptions."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "2-canonical-tooling",
      children: "2. Canonical tooling"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Script"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Path"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Purpose"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "extract_embedded_tasks.py"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "packages/frameworks/workflow-mgt/scripts/kanban/extract_embedded_tasks.py"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Parse embedded ", (0,jsx_runtime.jsx)(_components.code, {
              children: "### E:S:T"
            }), " sections from a Story file"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "generate_task_doc.py"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "packages/frameworks/workflow-mgt/scripts/kanban/generate_task_doc.py"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Emit discrete ", (0,jsx_runtime.jsx)(_components.code, {
              children: "T{nn}-{slug}.md"
            }), " from extracted task dict"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "update_story_refs.py"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "packages/frameworks/workflow-mgt/scripts/kanban/update_story_refs.py"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Wire checklist links; remove embedded bodies"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "migrate_story.py"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "packages/frameworks/workflow-mgt/scripts/kanban/migrate_story.py"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Orchestrator"
            }), " — extract → generate → update Story"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "validate_migration.py"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "packages/frameworks/workflow-mgt/scripts/kanban/validate_migration.py"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Full-repo or per-story post-migration validation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "test_migrate_embedded_tasks.py"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "packages/frameworks/workflow-mgt/scripts/kanban/test_migrate_embedded_tasks.py"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Unit/integration tests (T1–T12)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Template:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "packages/frameworks/kanban/templates/TASK_TEMPLATE.md"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "3-migrate-a-single-story",
      children: "3. Migrate a single Story"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "From repository root:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Dry-run (no writes)\npython packages/frameworks/workflow-mgt/scripts/kanban/migrate_story.py \\\n  --story docs/project-management/kanban/epics/epic-04/story-11-kanban-granularity-discrete-task-docs.md \\\n  --dry-run\n\n# Execute migration (writes T*.md + updates Story)\npython packages/frameworks/workflow-mgt/scripts/kanban/migrate_story.py \\\n  --story docs/project-management/kanban/epics/epic-04/story-11-kanban-granularity-discrete-task-docs.md\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Output layout:"
      }), " Discrete docs land in ", (0,jsx_runtime.jsx)(_components.code, {
        children: "epics/epic-{NN}/story-{NN}-{slug}/T{task:02d}-{slug}.md"
      }), " alongside the Story file."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Idempotency:"
      }), " Re-running on an already-migrated Story skips existing ", (0,jsx_runtime.jsx)(_components.code, {
        children: "T*.md"
      }), " files and leaves embedded count at 0."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "4-validate-after-migration",
      children: "4. Validate after migration"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Full kanban tree\npython packages/frameworks/workflow-mgt/scripts/kanban/validate_migration.py \\\n  docs/project-management/kanban\n\n# Regression tests\npython -m pytest packages/frameworks/workflow-mgt/scripts/kanban/test_migrate_embedded_tasks.py -q\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "PASS criteria:"
      }), " exit code 0; ", (0,jsx_runtime.jsx)(_components.code, {
        children: "embedded_task_count: 0"
      }), "; ", (0,jsx_runtime.jsx)(_components.code, {
        children: "broken_task_links: 0"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "RW Step 1 spot-check"
      }), " (sample tasks):"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "python packages/frameworks/workflow-mgt/scripts/validation/validate_rw_task_complete.py \\\n  --requested \"E04:S11:T07\"\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Releasability failures on ", (0,jsx_runtime.jsx)(_components.code, {
        children: "TODO"
      }), " tasks are expected; discovery failures (no task doc) are not."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "5-grandfathered-hygiene-completed-2026-06-05",
      children: "5. Grandfathered hygiene (completed 2026-06-05)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Item"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Resolution"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["Legacy ", (0,jsx_runtime.jsx)(_components.code, {
              children: "**Task:**"
            }), " without ", (0,jsx_runtime.jsx)(_components.code, {
              children: "**Task ID:**"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "40 docs"
            }), " normalized with ", (0,jsx_runtime.jsx)(_components.code, {
              children: "**Task ID:**"
            }), " lines (RW Step 1c discovery)"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["E01", ":S01", " checklist-only"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "T01–T03"
            }), " backfilled under ", (0,jsx_runtime.jsx)(_components.code, {
              children: "epic-01/story-01-vibe-dev-kit-kanban-and-versioning/"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Scope placeholders"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Remaining ", (0,jsx_runtime.jsx)(_components.code, {
              children: "[To be filled during migration]"
            }), " — fill during task implementation"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Full history: ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-04/story-11-kanban-granularity-discrete-task-docs/migration-completion-report#4-documented-exceptions",
        children: "completion report §4"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "6-release-workflow-integration",
      children: "6. Release workflow integration"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Ship migration waves via ", (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "RW E04:S11:T07 --art"
          })
        }), " (or host-project equivalent task)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Use normal BUILD +1 on same E:S", ":T", "; never ", (0,jsx_runtime.jsx)(_components.code, {
          children: "--doc-policy-zero"
        }), " for post-ship verification waves (", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/fr-br/BR-097-rw-agent-reuses-tagged-build-and-force-moves-release-tags",
          children: "BR-097"
        }), ")."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["RW Step 7 four-surface reconciliation: task doc, story, FR-016, ", (0,jsx_runtime.jsx)(_components.code, {
          children: "kboard.md"
        }), "."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "7-new-tasks-post-migration-policy",
      children: "7. New tasks (post-migration policy)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Create discrete ", (0,jsx_runtime.jsx)(_components.code, {
          children: "T{nn}-{slug}.md"
        }), " ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "before"
        }), " implementation (", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/fr-br/FR-017-versioning-policy-hardening-doc-init-build",
          children: "FR-017"
        }), " doc-init)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "**Task ID:**"
        }), " header (required for RW Step 1c discovery)."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Add checklist entry on Story with link to discrete doc."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Do ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "not"
        }), " embed task bodies in Story files."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "8-references",
      children: "8. References"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/fr-br/FR-016-kanban-granularity-discrete-task-docs",
          children: "FR-016"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-04/story-11-kanban-granularity-discrete-task-docs/migration-plan-embedded-to-discrete-tasks",
          children: "Migration plan"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-04/story-11-kanban-granularity-discrete-task-docs/migration-completion-report",
          children: "Migration completion report"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/rituals/policy/kanban-governance-policy",
          children: "Kanban governance policy"
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