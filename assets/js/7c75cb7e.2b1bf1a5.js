"use strict";
(self["webpackChunkportal"] = self["webpackChunkportal"] || []).push([["77375"], {
44498(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_project_management_kanban_fr_br_reopening_br_and_tasks_guide_md_7c7_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-project-management-kanban-fr-br-reopening-br-and-tasks-guide-md-7c7.json
var site_docs_project_management_kanban_fr_br_reopening_br_and_tasks_guide_md_7c7_namespaceObject = JSON.parse('{"id":"project-management/kanban/fr-br/REOPENING_BR_AND_TASKS_GUIDE","title":"Guide: Re-opening Bug Reports and Tasks","description":"Purpose: This guide documents the process for re-opening Bug Reports (BRs) and Tasks when bugs persist despite previous fix attempts. This approach minimizes administrative overhead and keeps the knowledge base clean.","source":"@site/../docs/project-management/kanban/fr-br/REOPENING_BR_AND_TASKS_GUIDE.md","sourceDirName":"project-management/kanban/fr-br","slug":"/project-management/kanban/fr-br/REOPENING_BR_AND_TASKS_GUIDE","permalink":"/ai-dev-kit/docs/project-management/kanban/fr-br/REOPENING_BR_AND_TASKS_GUIDE","draft":false,"unlisted":false,"editUrl":"https://github.com/RMS-Ltd/ai-dev-kit/tree/main/docs/../docs/project-management/kanban/fr-br/REOPENING_BR_AND_TASKS_GUIDE.md","tags":[],"version":"current","frontMatter":{"lifecycle":"evergreen","ttl_days":null,"created_at":"2025-12-16T13:45:00.000Z","expires_at":null,"housekeeping_policy":"keep"},"sidebar":"docsSidebar","previous":{"title":"FR-110: Lean adopter distribution footprint and vendor bundle","permalink":"/ai-dev-kit/docs/project-management/kanban/fr-br/FR-110-lean-adopter-distribution-footprint-and-vendor-bundle"},"next":{"title":"User Experience Research: Migration from Pre-Existing Kanban Structures","permalink":"/ai-dev-kit/docs/project-management/kanban/fr-br/UXR-001-migration-user-experience-research"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ../docs/project-management/kanban/fr-br/REOPENING_BR_AND_TASKS_GUIDE.md


const frontMatter = {
	lifecycle: 'evergreen',
	ttl_days: null,
	created_at: new Date('2025-12-16T13:45:00.000Z'),
	expires_at: null,
	housekeeping_policy: 'keep'
};
const contentTitle = 'Guide: Re-opening Bug Reports and Tasks';

const assets = {

};



const toc = [{
  "value": "Overview",
  "id": "overview",
  "level": 2
}, {
  "value": "When to Re-open vs. Create New",
  "id": "when-to-re-open-vs-create-new",
  "level": 2
}, {
  "value": "Re-open Existing BR/Task When:",
  "id": "re-open-existing-brtask-when",
  "level": 3
}, {
  "value": "Create New BR/Task When:",
  "id": "create-new-brtask-when",
  "level": 3
}, {
  "value": "Process: Re-opening a Bug Report",
  "id": "process-re-opening-a-bug-report",
  "level": 2
}, {
  "value": "Step 1: Update BR Status",
  "id": "step-1-update-br-status",
  "level": 3
}, {
  "value": "Step 2: Add Re-opening Context",
  "id": "step-2-add-re-opening-context",
  "level": 3
}, {
  "value": "Step 3: Update Fix Attempt History",
  "id": "step-3-update-fix-attempt-history",
  "level": 3
}, {
  "value": "Step 4: Update Affected Projects/Examples",
  "id": "step-4-update-affected-projectsexamples",
  "level": 3
}, {
  "value": "Process: Re-opening a Task",
  "id": "process-re-opening-a-task",
  "level": 2
}, {
  "value": "Step 1: Update Task Status in Story Checklist",
  "id": "step-1-update-task-status-in-story-checklist",
  "level": 3
}, {
  "value": "Step 2: Update Task Section",
  "id": "step-2-update-task-section",
  "level": 3
}, {
  "value": "Step 3: Update Version",
  "id": "step-3-update-version",
  "level": 3
}, {
  "value": "Step 4: Add Current Evidence",
  "id": "step-4-add-current-evidence",
  "level": 3
}, {
  "value": "Version Numbering for Re-opened Tasks",
  "id": "version-numbering-for-re-opened-tasks",
  "level": 2
}, {
  "value": "Documentation Updates",
  "id": "documentation-updates",
  "level": 2
}, {
  "value": "Update Story Document",
  "id": "update-story-document",
  "level": 3
}, {
  "value": "Update Epic Document",
  "id": "update-epic-document",
  "level": 3
}, {
  "value": "Update Version File",
  "id": "update-version-file",
  "level": 3
}, {
  "value": "Best Practices",
  "id": "best-practices",
  "level": 2
}, {
  "value": "Anti-Patterns to Avoid",
  "id": "anti-patterns-to-avoid",
  "level": 2
}, {
  "value": "Example: BR-002 Re-opening",
  "id": "example-br-002-re-opening",
  "level": 2
}, {
  "value": "Example: Task Re-opening",
  "id": "example-task-re-opening",
  "level": 2
}, {
  "value": "Related Documentation",
  "id": "related-documentation",
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
        id: "guide-re-opening-bug-reports-and-tasks",
        children: "Guide: Re-opening Bug Reports and Tasks"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Purpose:"
      }), " This guide documents the process for re-opening Bug Reports (BRs) and Tasks when bugs persist despite previous fix attempts. This approach minimizes administrative overhead and keeps the knowledge base clean."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Audience:"
      }), " Project maintainers, developers, and agents handling bug fixes"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "overview",
      children: "Overview"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["When a bug persists despite a previous fix attempt, ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "re-open the existing BR and task"
      }), " rather than creating new ones. This approach:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Reduces noise in the knowledge base"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Maintains continuity of bug history"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Keeps administrative overhead minimal"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Preserves context and lessons learned"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Avoids duplicate BR/task proliferation"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "when-to-re-open-vs-create-new",
      children: "When to Re-open vs. Create New"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "re-open-existing-brtask-when",
      children: "Re-open Existing BR/Task When:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Bug persists despite previous fix attempt"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Previous fix was incomplete or incorrect"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Bug was marked \"Fixed\" but verification shows it's still present"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Same root cause, same component, same issue"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "create-new-brtask-when",
      children: "Create New BR/Task When:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Different root cause"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Different component affected"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Different manifestation of bug"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Related but distinct issue"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "process-re-opening-a-bug-report",
      children: "Process: Re-opening a Bug Report"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "step-1-update-br-status",
      children: "Step 1: Update BR Status"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Change the BR status from ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ACCEPTED"
      }), " or ", (0,jsx_runtime.jsx)(_components.code, {
        children: "FIXED"
      }), " to ", (0,jsx_runtime.jsx)(_components.code, {
        children: "REOPENED"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-markdown",
        children: "**Status:** REOPENED\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "step-2-add-re-opening-context",
      children: "Step 2: Add Re-opening Context"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Add a new section or update existing sections with:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Date of re-opening"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Why it was re-opened (bug still present)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Current validation evidence"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Reference to previous fix attempt"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-markdown",
        children: "**REOPENED (2025-12-16):** Bug confirmed still present despite E2:S01:T06 being marked complete. \nTask needs to be re-opened and properly fixed.\n\n**Current Validation Errors (2025-12-16):**\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "❌ VALIDATION FAILED:\nChangelog ordering violation: 0.4.6.4+1 appears before 0.4.6.3+1..."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {})
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "step-3-update-fix-attempt-history",
      children: "Step 3: Update Fix Attempt History"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Add a new entry to the \"Fix Attempt History\" section documenting:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Previous attempt (version, date)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Why it didn't work"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Lessons learned"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What needs to be done differently"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-markdown",
        children: "#### Attempt 2: E2:S01:T06 (v0.2.1.6+2) - 2025-12-09 → REOPENED 2025-12-16\n\n**Fix Description:**\nPrevious attempt marked complete but bug persists.\n\n**Result:**\n- [x] Bug Not Fixed (task marked complete but bug still present)\n\n**Lessons Learned:**\n- Task was marked complete but bug persists\n- Need to verify fix actually works before marking complete\n- Need to test against actual Keep a Changelog format\n\n**Next Steps:**\n- Review what was actually implemented\n- Implement proper fix\n- Verify fix works before marking complete\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "step-4-update-affected-projectsexamples",
      children: "Step 4: Update Affected Projects/Examples"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Add current examples showing the bug is still present:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-markdown",
        children: "**Affected Projects:**\n- `been-there` (identified the issue)\n- `ai-dev-kit` (bug confirmed still present 2025-12-16)\n- Any project using Keep a Changelog format...\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "process-re-opening-a-task",
      children: "Process: Re-opening a Task"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "step-1-update-task-status-in-story-checklist",
      children: "Step 1: Update Task Status in Story Checklist"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Change task status from ", (0,jsx_runtime.jsx)(_components.code, {
        children: "✅ COMPLETE"
      }), " to ", (0,jsx_runtime.jsx)(_components.code, {
        children: "🔄 REOPENED"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-markdown",
        children: "- [ ] **E2:S01:T06 – Fix changelog validator ordering bug** 🔄 REOPENED (v0.2.1.6+2 → v0.2.1.8+1 – Bug persists, re-opening with new context)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "step-2-update-task-section",
      children: "Step 2: Update Task Section"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Add reopening context to the task section:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-markdown",
        children: "**Status:** 🔄 **REOPENED** (2025-12-16) - Previous attempt (v0.2.1.6+2) marked complete but bug persists\n\n**Previous Attempt (v0.2.1.6+2):**\n- Task was marked complete but bug still present\n- Validator still only accepts canonical ordering\n- Need to review what was actually implemented and fix properly\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "step-3-update-version",
      children: "Step 3: Update Version"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Increment the task version to reflect reopening:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Previous: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "v0.2.1.6+2"
        }), " (last complete attempt)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["New: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "v0.2.1.8+1"
        }), " (reopened with new context)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Update version file:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "VERSION_TASK = 8      # Task number (Task 8: Re-open T06 - Fix changelog validator ordering bug properly)\nVERSION_BUILD = 1     # Build number (E2:S01:T08 - Task 6 reopened: Changelog validator ordering bug persists)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "step-4-add-current-evidence",
      children: "Step 4: Add Current Evidence"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Document current validation errors or evidence showing bug persists:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-markdown",
        children: "**Current Validation Errors (2025-12-16):**\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "❌ VALIDATION FAILED:\nChangelog ordering violation: 0.4.6.4+1 appears before 0.4.6.3+1..."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {})
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "version-numbering-for-re-opened-tasks",
      children: "Version Numbering for Re-opened Tasks"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "When re-opening a task:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Keep the same Task number"
        }), " (don't create T08 if T06 exists)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Increment to next available Task number"
        }), " only if creating a new task"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Use new BUILD number"
        }), " to track the reopening"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Original: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "E02:S01:T06"
        }), " (v0.2.1.6+2) - marked complete"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Reopened: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "E02:S01:T06"
        }), " → becomes ", (0,jsx_runtime.jsx)(_components.code, {
          children: "E02:S01:T08"
        }), " (v0.2.1.8+1) - reopened"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "OR"
      }), " (if keeping same task number):"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Original: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "E02:S01:T06"
        }), " (v0.2.1.6+2) - marked complete"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Reopened: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "E02:S01:T06"
        }), " (v0.2.1.6+3) - reopened"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Decision:"
      }), " Use next available task number to clearly distinguish reopening, but document the relationship."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "documentation-updates",
      children: "Documentation Updates"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "update-story-document",
      children: "Update Story Document"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update task checklist with reopening status"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update \"Last updated\" field"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Add reopening context to task section"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "update-epic-document",
      children: "Update Epic Document"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update story status if needed"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update \"Last updated\" field"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Note task reopening in story checklist"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "update-version-file",
      children: "Update Version File"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update version to reflect new task/build"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Add comment explaining reopening"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "best-practices",
      children: "Best Practices"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Always document why:"
        }), " Explain why the bug persists despite previous fix"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Reference previous attempts:"
        }), " Link to previous fix attempts in BR"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Add current evidence:"
        }), " Include validation errors, test results, etc."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Update all related docs:"
        }), " BR, Task, Story, Epic, Version file"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Preserve history:"
        }), " Don't delete previous attempts, add to history"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Verify before closing:"
        }), " Ensure fix actually works before marking complete again"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "anti-patterns-to-avoid",
      children: "Anti-Patterns to Avoid"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["❌ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Don't create duplicate BRs"
      }), " for the same bug", (0,jsx_runtime.jsx)(_components.br, {}), "\n", "❌ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Don't delete previous fix attempts"
      }), " - preserve history", (0,jsx_runtime.jsx)(_components.br, {}), "\n", "❌ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Don't skip verification"
      }), " - verify fix works before marking complete", (0,jsx_runtime.jsx)(_components.br, {}), "\n", "❌ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Don't ignore lessons learned"
      }), " - document what went wrong", (0,jsx_runtime.jsx)(_components.br, {}), "\n", "❌ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Don't create new task numbers"
      }), " unnecessarily - reuse when appropriate"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "example-br-002-re-opening",
      children: "Example: BR-002 Re-opening"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["See ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/project-management/kanban/fr-br/BR-002-changelog-validator-ordering-bug",
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "BR-002-changelog-validator-ordering-bug.md"
        })
      }), " for a complete example of:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Status change to REOPENED"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Updated context and evidence"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Fix attempt history with reopening"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Updated affected projects"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Bidirectional linking:"
        }), " BR links to Task, Task links back to BR"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "example-task-re-opening",
      children: "Example: Task Re-opening"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["See ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-02/story-01-rw-agent-execution-and-docs",
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/project-management/kanban/epics/epic-02/story-01-rw-agent-execution-and-docs.md"
        })
      }), " Task T06 for an example of:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Task checklist update with reopening status"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Task section with reopening context"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Previous attempt documentation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Current validation errors"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Bidirectional linking:"
        }), " Task links to BR, BR links back to Task"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "related-documentation",
      children: "Related Documentation"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/fr-br/BIDIRECTIONAL_WIRING_PRINCIPLE",
          children: "BIDIRECTIONAL_WIRING_PRINCIPLE.md"
        }), " - Principle for bidirectional linking between BR/FR, Tasks, and documentation"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/knowledge/USE_CASE_METHODOLOGY",
          children: "USE_CASE_METHODOLOGY.md"
        }), " - Use case methodology (includes discovered use cases)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/knowledge/use-cases/discovered/UC-D-001-reopening-br-tasks",
          children: "UC-D-001: Re-opening BRs/Tasks"
        }), " - Discovered use case for this pattern"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "BR_TEMPLATE.md"
        }), " - Bug Report template"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "docs/project-management/kanban/fr-br/BR-002-changelog-validator-ordering-bug.md"
        }), " - Example reopened BR"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "docs/project-management/kanban/epics/epic-02/story-01-rw-agent-execution-and-docs.md"
        }), " - Example reopened task"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Template Usage:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "This guide is part of the Kanban Framework"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use this process when bugs persist despite fix attempts"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Keep the knowledge base clean and maintainable"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsxs)(_components.em, {
        children: ["This guide is part of the Kanban Framework. See ", (0,jsx_runtime.jsx)(_components.code, {
          children: "packages/frameworks/kanban/"
        }), " for complete framework documentation."]
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