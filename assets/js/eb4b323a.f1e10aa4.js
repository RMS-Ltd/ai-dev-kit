"use strict";
(self["webpackChunkportal"] = self["webpackChunkportal"] || []).push([["55664"], {
34147(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_project_management_kanban_epics_epic_04_story_17_kanban_package_installation_evaluation_t_05_document_failure_modes_and_rollback_guidance_md_eb4_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-project-management-kanban-epics-epic-04-story-17-kanban-package-installation-evaluation-t-05-document-failure-modes-and-rollback-guidance-md-eb4.json
var site_docs_project_management_kanban_epics_epic_04_story_17_kanban_package_installation_evaluation_t_05_document_failure_modes_and_rollback_guidance_md_eb4_namespaceObject = JSON.parse('{"id":"project-management/kanban/epics/epic-04/story-17-kanban-package-installation-evaluation/T05-document-failure-modes-and-rollback-guidance","title":"E04:S17:T05 – Document Failure Modes and Rollback Guidance","description":"Task IDS17:T05","source":"@site/../docs/project-management/kanban/epics/epic-04/story-17-kanban-package-installation-evaluation/T05-document-failure-modes-and-rollback-guidance.md","sourceDirName":"project-management/kanban/epics/epic-04/story-17-kanban-package-installation-evaluation","slug":"/project-management/kanban/epics/epic-04/story-17-kanban-package-installation-evaluation/T05-document-failure-modes-and-rollback-guidance","permalink":"/ai-dev-kit/docs/project-management/kanban/epics/epic-04/story-17-kanban-package-installation-evaluation/T05-document-failure-modes-and-rollback-guidance","draft":false,"unlisted":false,"editUrl":"https://github.com/RMS-Ltd/ai-dev-kit/tree/main/docs/../docs/project-management/kanban/epics/epic-04/story-17-kanban-package-installation-evaluation/T05-document-failure-modes-and-rollback-guidance.md","tags":[],"version":"current","frontMatter":{"lifecycle":"evergreen","ttl_days":null,"created_at":"2026-01-20T00:00:00.000Z","expires_at":null,"housekeeping_policy":"keep"},"sidebar":"docsSidebar","previous":{"title":"E04:S17:T04 – Verify Post-Install Configuration and Validation Steps","permalink":"/ai-dev-kit/docs/project-management/kanban/epics/epic-04/story-17-kanban-package-installation-evaluation/T04-verify-post-install-configuration-and-validation-steps"},"next":{"title":"E04:S17:T06 – Capture Documentation Gaps and Improvements","permalink":"/ai-dev-kit/docs/project-management/kanban/epics/epic-04/story-17-kanban-package-installation-evaluation/T06-capture-documentation-gaps-and-improvements"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ../docs/project-management/kanban/epics/epic-04/story-17-kanban-package-installation-evaluation/T05-document-failure-modes-and-rollback-guidance.md


const frontMatter = {
	lifecycle: 'evergreen',
	ttl_days: null,
	created_at: new Date('2026-01-20T00:00:00.000Z'),
	expires_at: null,
	housekeeping_policy: 'keep'
};
const contentTitle = 'E04:S17 – Document Failure Modes and Rollback Guidance';

const assets = {

};



const toc = [{
  "value": "Scope",
  "id": "scope",
  "level": 2
}, {
  "value": "Inputs",
  "id": "inputs",
  "level": 2
}, {
  "value": "Deliverables",
  "id": "deliverables",
  "level": 2
}, {
  "value": "Approach",
  "id": "approach",
  "level": 2
}, {
  "value": "Acceptance Criteria",
  "id": "acceptance-criteria",
  "level": 2
}, {
  "value": "Failure Modes",
  "id": "failure-modes",
  "level": 2
}, {
  "value": "Failure Mode 1: Validation Errors",
  "id": "failure-mode-1-validation-errors",
  "level": 3
}, {
  "value": "Failure Mode 2: Migration Failures",
  "id": "failure-mode-2-migration-failures",
  "level": 3
}, {
  "value": "Failure Mode 3: Backup Creation Failures",
  "id": "failure-mode-3-backup-creation-failures",
  "level": 3
}, {
  "value": "Failure Mode 4: Configuration Failures",
  "id": "failure-mode-4-configuration-failures",
  "level": 3
}, {
  "value": "Failure Mode 5: Partial Installation",
  "id": "failure-mode-5-partial-installation",
  "level": 3
}, {
  "value": "Rollback Procedures",
  "id": "rollback-procedures",
  "level": 2
}, {
  "value": "Procedure 1: Restore from Automatic Backup",
  "id": "procedure-1-restore-from-automatic-backup",
  "level": 3
}, {
  "value": "Procedure 2: Restore from Git",
  "id": "procedure-2-restore-from-git",
  "level": 3
}, {
  "value": "Procedure 3: Manual Cleanup and Reinstall",
  "id": "procedure-3-manual-cleanup-and-reinstall",
  "level": 3
}, {
  "value": "Troubleshooting Guide",
  "id": "troubleshooting-guide",
  "level": 2
}, {
  "value": "Issue: Installation Blocked by Validation Errors",
  "id": "issue-installation-blocked-by-validation-errors",
  "level": 3
}, {
  "value": "Issue: Migration Fails Mid-Process",
  "id": "issue-migration-fails-mid-process",
  "level": 3
}, {
  "value": "Issue: Backup Creation Fails",
  "id": "issue-backup-creation-fails",
  "level": 3
}, {
  "value": "Recovery Best Practices",
  "id": "recovery-best-practices",
  "level": 2
}, {
  "value": "Before Installation",
  "id": "before-installation",
  "level": 3
}, {
  "value": "During Installation",
  "id": "during-installation",
  "level": 3
}, {
  "value": "After Installation",
  "id": "after-installation",
  "level": 3
}, {
  "value": "Summary",
  "id": "summary",
  "level": 2
}, {
  "value": "Failure Modes Documented",
  "id": "failure-modes-documented",
  "level": 3
}, {
  "value": "Rollback Procedures",
  "id": "rollback-procedures-1",
  "level": 3
}, {
  "value": "Recovery Best Practices",
  "id": "recovery-best-practices-1",
  "level": 3
}, {
  "value": "Related Work",
  "id": "related-work",
  "level": 2
}, {
  "value": "Notes",
  "id": "notes",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
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
      children: (0,jsx_runtime.jsxs)(_components.h1, {
        id: "e04s17--document-failure-modes-and-rollback-guidance",
        children: ["E04:S17", ":T05", " – Document Failure Modes and Rollback Guidance"]
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Task ID:"
      }), " E04:S17", ":T05", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Status:"
      }), " ✅ COMPLETE", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Priority:"
      }), " HIGH", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Epic:"
      }), " E4 – Kanban Framework", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Story:"
      }), " E4", ":S17", " – Kanban Package Installation Evaluation", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Version Anchor:"
      }), " ✅ COMPLETE (v0.4.17.5+1)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "scope",
      children: "Scope"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Document failure modes and rollback guidance for the Kanban framework package installation to ensure users can recover from installation failures and rollback problematic installations. This documentation covers common failure scenarios, error messages, troubleshooting steps, and recovery procedures."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Scope includes:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Identify common failure modes during installation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Document error messages and their meanings"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Create troubleshooting guides for each failure mode"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Document rollback procedures"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Provide recovery paths and best practices"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "inputs",
      children: "Inputs"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Installer behavior and error handling:"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "packages/frameworks/kanban/scripts/install_kanban_framework.py"
            })
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "packages/frameworks/kanban/scripts/migrate_structure.py"
            })
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "packages/frameworks/kanban/scripts/validate_installation.py"
            })
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Backup and recovery mechanisms"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Error messages and validation outputs"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Installation validation from T02-T04 (baseline for comparison)"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "deliverables",
      children: "Deliverables"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Failure mode list"
          }), " documenting:"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Common failure scenarios"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Error messages and symptoms"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Root causes"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Impact assessment"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Rollback guidance"
          }), " documenting:"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Rollback procedures for each failure mode"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Backup restoration steps"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Recovery verification procedures"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Best practices for preventing failures"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "approach",
      children: "Approach"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Review installer error handling"
        }), " for failure modes"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Identify Common Failure Modes"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Validation failures"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Migration failures"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Backup failures"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Configuration failures"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Document Error Messages"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Map error messages to failure modes"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Document error meanings and implications"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Create Rollback Procedures"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Document backup restoration"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Document manual recovery steps"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Document verification procedures"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Create Troubleshooting Guides"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Step-by-step troubleshooting for each failure mode"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Recovery paths and best practices"
          }), "\n"]
        }), "\n"]
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
        }), " ", "Common failure modes identified and documented ✅"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "Error messages documented with meanings ✅"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "Rollback procedures created for each failure mode ✅"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "Troubleshooting guides created ✅"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "Recovery paths documented ✅"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "Best practices documented ✅"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "failure-modes",
      children: "Failure Modes"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "failure-mode-1-validation-errors",
      children: "Failure Mode 1: Validation Errors"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Symptoms:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Installation blocked by validation errors"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Error messages about Epic mashup or conflicts"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Validation script reports errors"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Error Messages:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "❌ ERRORS (must be fixed before installation):\n  ❌ CRITICAL: Epic 9 contains 'Book Related Work' but canonical Epic 9 is \n    'User Management and Authentication'. This is the root cause of Epic mashup.\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Root Causes:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Epic mashup (project-specific content in canonical range)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Epic numbering conflicts"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Canonical conflicts detected"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Version file path issues"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Impact:"
      }), " HIGH - Installation blocked until errors resolved"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Recovery Steps:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Review validation errors"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Fix Epic numbering issues (rename project epics to Epic 24+)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Resolve canonical conflicts"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Re-run validation: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "python3 scripts/validate_installation.py --kanban-path docs/project-management/kanban"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Re-run installation once validation passes"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Prevention:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Always use installer (don't manually copy epics)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use canonical templates (not ai-dev-kit's actual Kanban)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Follow Epic numbering (Epic 1-23 canonical, Epic 24+ project-specific)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "failure-mode-2-migration-failures",
      children: "Failure Mode 2: Migration Failures"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Symptoms:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Migration script fails with error"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Migration report shows errors"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Structure not migrated correctly"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Error Messages:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "❌ Migration failed: [error details]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Root Causes:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Analysis report not found or invalid"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Backup creation failed"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "File permission issues"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Disk space issues"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Invalid migration mode"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Impact:"
      }), " HIGH - Migration incomplete, structure may be corrupted"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Recovery Steps:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Check backup:"
        }), " Verify backup was created before migration"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Restore from backup:"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-bash",
            children: "# Locate backup directory (created before migration)\nls -la docs/project-management/_backup-*\n\n# Restore from backup\nrm -rf docs/project-management/kanban\ncp -r docs/project-management/_backup-YYYYMMDD-HHMMSS docs/project-management/kanban\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Review error logs:"
        }), " Check migration report for specific errors"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Fix root cause:"
        }), " Address file permissions, disk space, or analysis report issues"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Re-run migration:"
        }), " Use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "--dry-run"
        }), " first to preview changes"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Prevention:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Always run ", (0,jsx_runtime.jsx)(_components.code, {
          children: "--dry-run"
        }), " before actual migration"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Ensure sufficient disk space"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Verify file permissions before migration"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Review analysis report before proceeding"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "failure-mode-3-backup-creation-failures",
      children: "Failure Mode 3: Backup Creation Failures"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Symptoms:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Backup creation fails or is cancelled"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Migration proceeds without backup"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "No backup directory created"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Error Messages:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "❌ Error: Backup creation failed or was cancelled.\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Root Causes:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Insufficient disk space"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "File permission issues"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Backup directory already exists (user cancelled)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Path issues"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Impact:"
      }), " CRITICAL - No rollback available if migration fails"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Recovery Steps:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Manual backup before proceeding:"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-bash",
            children: "# Create manual backup\ncp -r docs/project-management/kanban docs/project-management/kanban-backup-manual\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Fix backup issues:"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Free up disk space"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Fix file permissions"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Remove existing backup directory if needed"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Re-run installation:"
        }), " Backup will be created automatically"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Prevention:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Ensure sufficient disk space before installation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Verify write permissions on kanban directory"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Review backup directory before installation"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "failure-mode-4-configuration-failures",
      children: "Failure Mode 4: Configuration Failures"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Symptoms:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Configuration files not created correctly"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Path issues with kanban directory"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Version file integration fails"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Error Messages:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "⚠️  Warning: Version file not found at expected path\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Root Causes:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Project structure differs from expected"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Version file path not configured"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Kanban path misconfigured"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Impact:"
      }), " MEDIUM - Installation may succeed but validation fails"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Recovery Steps:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Verify kanban path:"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-bash",
            children: "# Check kanban directory exists\nls -la docs/project-management/kanban\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Configure version file path:"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Update validator configuration if needed"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Verify version file exists at expected path"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Re-run validation:"
        }), " Verify configuration is correct"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Prevention:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use standard project structure"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Configure version file path before installation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Review configuration requirements in T04"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "failure-mode-5-partial-installation",
      children: "Failure Mode 5: Partial Installation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Symptoms:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Installation starts but doesn't complete"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Some files created, others missing"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Inconsistent structure"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Error Messages:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "⚠️  Installation incomplete - some files may be missing\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Root Causes:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Installation interrupted"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Script errors during execution"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Disk space issues during installation"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Impact:"
      }), " HIGH - Incomplete installation, structure may be inconsistent"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Recovery Steps:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Assess damage:"
        }), " Check what was installed vs. what's missing"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Restore from backup:"
        }), " If backup exists, restore and restart"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Manual cleanup:"
        }), " Remove partially installed files"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Re-run installation:"
        }), " Start fresh installation"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Prevention:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Don't interrupt installation process"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Ensure sufficient disk space"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Run installation in stable environment"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "rollback-procedures",
      children: "Rollback Procedures"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "procedure-1-restore-from-automatic-backup",
      children: "Procedure 1: Restore from Automatic Backup"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "When to Use:"
      }), " Migration created automatic backup before proceeding"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Steps:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Locate backup directory:"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-bash",
            children: "# Find backup directory (created before migration)\nls -la docs/project-management/_backup-*\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Verify backup contents:"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-bash",
            children: "# Check backup contains kanban structure\nls -la docs/project-management/_backup-YYYYMMDD-HHMMSS/\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Restore from backup:"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-bash",
            children: "# Remove current (problematic) installation\nrm -rf docs/project-management/kanban\n\n# Restore from backup\ncp -r docs/project-management/_backup-YYYYMMDD-HHMMSS docs/project-management/kanban\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Verify restoration:"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-bash",
            children: "# Run validation to verify restoration\npython3 scripts/validate_installation.py --kanban-path docs/project-management/kanban\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Success Criteria:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Kanban structure restored"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Validation passes"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "No errors reported"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "procedure-2-restore-from-git",
      children: "Procedure 2: Restore from Git"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "When to Use:"
      }), " Changes committed to Git before installation"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Steps:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Check Git status:"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-bash",
            children: "git status\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Restore from Git:"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-bash",
            children: "# Restore kanban directory from Git\ngit checkout HEAD -- docs/project-management/kanban/\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Verify restoration:"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-bash",
            children: "# Run validation\npython3 scripts/validate_installation.py --kanban-path docs/project-management/kanban\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Success Criteria:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Kanban structure restored from Git"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Validation passes"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "No errors reported"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "procedure-3-manual-cleanup-and-reinstall",
      children: "Procedure 3: Manual Cleanup and Reinstall"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "When to Use:"
      }), " No backup available, installation failed"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Steps:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Remove failed installation:"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-bash",
            children: "# Remove kanban directory\nrm -rf docs/project-management/kanban\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Clean up any partial files:"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-bash",
            children: "# Remove any partial installation artifacts\nrm -f detection_report.json analysis_report.json migration_report.json\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Re-run installation:"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-bash",
            children: "# Start fresh installation\npython3 scripts/install_kanban_framework.py --mode fresh\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Success Criteria:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Clean installation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Validation passes"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "No errors reported"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "troubleshooting-guide",
      children: "Troubleshooting Guide"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "issue-installation-blocked-by-validation-errors",
      children: "Issue: Installation Blocked by Validation Errors"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Symptoms:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Validation errors prevent installation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Epic mashup detected"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Canonical conflicts found"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Troubleshooting Steps:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Review validation errors:"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-bash",
            children: "python3 scripts/validate_installation.py --kanban-path docs/project-management/kanban\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Fix Epic numbering:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Rename project epics to Epic 24+ range"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Ensure Epic 1-23 are canonical only"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Resolve conflicts:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Review conflict details in validation output"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Fix epic conflicts before proceeding"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Re-run validation:"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-bash",
            children: "python3 scripts/validate_installation.py --kanban-path docs/project-management/kanban\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Proceed with installation:"
          }), " Once validation passes"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "issue-migration-fails-mid-process",
      children: "Issue: Migration Fails Mid-Process"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Symptoms:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Migration starts but fails partway through"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Partial migration completed"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Error messages during migration"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Troubleshooting Steps:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Check backup:"
        }), " Verify backup was created"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Review migration report:"
        }), " Check ", (0,jsx_runtime.jsx)(_components.code, {
          children: "migration_report.json"
        }), " for errors"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Restore from backup:"
        }), " Use Procedure 1 above"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Fix root cause:"
        }), " Address specific error from migration report"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Re-run migration:"
        }), " Use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "--dry-run"
        }), " first to preview"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "issue-backup-creation-fails",
      children: "Issue: Backup Creation Fails"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Symptoms:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Backup creation fails or is cancelled"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "No backup directory created"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Migration proceeds without backup"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Troubleshooting Steps:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Check disk space:"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-bash",
            children: "df -h docs/project-management/\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Check permissions:"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-bash",
            children: "ls -la docs/project-management/\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Create manual backup:"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-bash",
            children: "cp -r docs/project-management/kanban docs/project-management/kanban-backup-manual\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Fix issues:"
          }), " Free space or fix permissions"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Re-run installation:"
          }), " Backup will be created automatically"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "recovery-best-practices",
      children: "Recovery Best Practices"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "before-installation",
      children: "Before Installation"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Create manual backup:"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-bash",
            children: "cp -r docs/project-management/kanban docs/project-management/kanban-backup-pre-install\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Commit current state to Git:"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-bash",
            children: "git add docs/project-management/kanban/\ngit commit -m \"Backup before Kanban installation\"\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Verify disk space:"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-bash",
            children: "df -h docs/project-management/\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Run dry-run first:"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-bash",
            children: "python3 scripts/install_kanban_framework.py --mode migration --dry-run\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "during-installation",
      children: "During Installation"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Monitor installation progress:"
        }), " Watch for errors"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Don't interrupt:"
        }), " Let installation complete"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Note backup location:"
        }), " Record backup directory path"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Save error messages:"
        }), " Copy any error messages for troubleshooting"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "after-installation",
      children: "After Installation"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Run validation:"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-bash",
            children: "python3 scripts/validate_installation.py --kanban-path docs/project-management/kanban\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Verify structure:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Check epic documents exist"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Verify story documents (if created)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Confirm kanban board exists"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Test functionality:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Create test epic/story"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Verify templates work"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Test integration with versioning (if applicable)"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "failure-modes-documented",
      children: "Failure Modes Documented"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Failure Mode"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Severity"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Recovery Available"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Prevention"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Validation Errors"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HIGH"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Manual fix"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use installer, follow numbering"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Migration Failures"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HIGH"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Backup restore"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Dry-run first, check prerequisites"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Backup Failures"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CRITICAL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Manual backup"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Check disk space, permissions"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Configuration Failures"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MEDIUM"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Manual fix"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Configure paths before install"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Partial Installation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HIGH"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cleanup & reinstall"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Don't interrupt, ensure space"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "rollback-procedures-1",
      children: "Rollback Procedures"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Automatic Backup Restore:"
        }), " Use backup created by installer"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Git Restore:"
        }), " Restore from Git if changes committed"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Manual Cleanup:"
        }), " Remove failed installation and reinstall"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "recovery-best-practices-1",
      children: "Recovery Best Practices"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Always create manual backup before installation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Commit current state to Git before installation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Run dry-run before actual installation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Monitor installation progress"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Run validation after installation"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "related-work",
      children: "Related Work"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "E04:S17:T01:"
        }), " Enumerate supported installation paths (completed)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "E04:S17:T02:"
        }), " Validate fresh install steps (completed)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "E04:S17:T03:"
        }), " Validate migration/update paths (completed)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "E04:S17:T04:"
        }), " Verify post-install configuration and validation steps (completed)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "E04:S17:T06:"
        }), " Capture documentation gaps and improvements (next task)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "notes",
      children: "Notes"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Failure modes identified through code review and error analysis"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Rollback procedures tested through documentation review"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Recovery best practices based on installer behavior and error handling"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "RC readiness confirmed with comprehensive failure mode documentation"
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