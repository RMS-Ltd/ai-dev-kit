"use strict";
(self["webpackChunkportal"] = self["webpackChunkportal"] || []).push([["9265"], {
92589(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_architecture_standards_and_adrs_versioning_error_reference_guide_md_1b3_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-architecture-standards-and-adrs-versioning-error-reference-guide-md-1b3.json
var site_docs_architecture_standards_and_adrs_versioning_error_reference_guide_md_1b3_namespaceObject = JSON.parse('{"id":"architecture/standards-and-adrs/versioning-error-reference-guide","title":"Versioning Error Reference Guide","description":"Status: ACTIVE REFERENCE","source":"@site/../docs/architecture/standards-and-adrs/versioning-error-reference-guide.md","sourceDirName":"architecture/standards-and-adrs","slug":"/architecture/standards-and-adrs/versioning-error-reference-guide","permalink":"/ai-dev-kit/docs/architecture/standards-and-adrs/versioning-error-reference-guide","draft":false,"unlisted":false,"editUrl":"https://github.com/RMS-Ltd/ai-dev-kit/tree/main/docs/../docs/architecture/standards-and-adrs/versioning-error-reference-guide.md","tags":[],"version":"current","frontMatter":{"lifecycle":"evergreen","ttl_days":null,"created_at":"2025-12-04T12:01:47.000Z","expires_at":null,"housekeeping_policy":"keep"},"sidebar":"docsSidebar","previous":{"title":"Ultimate Canonical Workflow Structure","permalink":"/ai-dev-kit/docs/architecture/standards-and-adrs/ultimate-canonical-workflow-structure"},"next":{"title":"Versioning Quick Reference","permalink":"/ai-dev-kit/docs/architecture/standards-and-adrs/versioning-quick-reference"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ../docs/architecture/standards-and-adrs/versioning-error-reference-guide.md


const frontMatter = {
	lifecycle: 'evergreen',
	ttl_days: null,
	created_at: new Date('2025-12-04T12:01:47.000Z'),
	expires_at: null,
	housekeeping_policy: 'keep'
};
const contentTitle = 'Versioning Error Reference Guide';

const assets = {

};



const toc = [{
  "value": "Purpose",
  "id": "purpose",
  "level": 2
}, {
  "value": "Quick Reference: The Error",
  "id": "quick-reference-the-error",
  "level": 2
}, {
  "value": "What Happened (Anti-Pattern)",
  "id": "what-happened-anti-pattern",
  "level": 3
}, {
  "value": "The Fix",
  "id": "the-fix",
  "level": 3
}, {
  "value": "Root Cause Analysis",
  "id": "root-cause-analysis",
  "level": 2
}, {
  "value": "Primary Root Cause",
  "id": "primary-root-cause",
  "level": 3
}, {
  "value": "Secondary Root Causes",
  "id": "secondary-root-causes",
  "level": 3
}, {
  "value": "Why Previous Fixes Didn&#39;t Work",
  "id": "why-previous-fixes-didnt-work",
  "level": 3
}, {
  "value": "The Fix: What Was Changed",
  "id": "the-fix-what-was-changed",
  "level": 2
}, {
  "value": "1. Updated RW Step 2 in cursorrules-rw-trigger-section.md",
  "id": "1-updated-rw-step-2-in-cursorrules-rw-trigger-sectionmd",
  "level": 3
}, {
  "value": "2. Updated release-workflow-agent-execution.md Step 2",
  "id": "2-updated-release-workflow-agent-executionmd-step-2",
  "level": 3
}, {
  "value": "3. Updated Key Principles",
  "id": "3-updated-key-principles",
  "level": 3
}, {
  "value": "How to Use This Document",
  "id": "how-to-use-this-document",
  "level": 2
}, {
  "value": "If the Error Happens Again",
  "id": "if-the-error-happens-again",
  "level": 3
}, {
  "value": "For Review and Onboarding",
  "id": "for-review-and-onboarding",
  "level": 3
}, {
  "value": "Related Documentation",
  "id": "related-documentation",
  "level": 2
}, {
  "value": "Core Policy Documents",
  "id": "core-policy-documents",
  "level": 3
}, {
  "value": "Procedure Documents",
  "id": "procedure-documents",
  "level": 3
}, {
  "value": "Workflow Flaws Documentation",
  "id": "workflow-flaws-documentation",
  "level": 3
}, {
  "value": "Implementation Documents",
  "id": "implementation-documents",
  "level": 3
}, {
  "value": "Key Takeaways",
  "id": "key-takeaways",
  "level": 2
}, {
  "value": "What Went Wrong",
  "id": "what-went-wrong",
  "level": 3
}, {
  "value": "What Was Fixed",
  "id": "what-was-fixed",
  "level": 3
}, {
  "value": "How to Prevent",
  "id": "how-to-prevent",
  "level": 3
}, {
  "value": "Version History",
  "id": "version-history",
  "level": 2
}, {
  "value": "Contact and Escalation",
  "id": "contact-and-escalation",
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
        id: "versioning-error-reference-guide",
        children: "Versioning Error Reference Guide"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Status:"
      }), " ACTIVE REFERENCE", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Owner:"
      }), " Engineering", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Last Updated:"
      }), " 2025-12-03", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Related Work:"
      }), " Epic 2, Story 2 (PDCA Integration), inspired by fynd.deals Epic 11, Story 1 error analysis"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "purpose",
      children: "Purpose"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["This document serves as a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "comprehensive reference"
      }), " for the versioning error anti-pattern where BUILD is incorrectly incremented instead of TASK when completing new tasks."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Use this document when:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The same error occurs again (BUILD incremented instead of TASK)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Reviewing versioning procedures"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Onboarding new team members"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Debugging versioning issues"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Strengthening RW Step 2 (Bump Version) procedures"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "This document references:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Root cause analysis"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Step-by-step procedure"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Policy documents"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Fix implementation"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "quick-reference-the-error",
      children: "Quick Reference: The Error"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "what-happened-anti-pattern",
      children: "What Happened (Anti-Pattern)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Error:"
      }), " BUILD was incremented instead of TASK when completing new tasks."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["❌ ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Wrong:"
        }), " T003 completed → ", (0,jsx_runtime.jsx)(_components.code, {
          children: "0.11.1.1+2"
        }), " (BUILD incremented, TASK unchanged)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["✅ ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Correct:"
        }), " T003 completed → ", (0,jsx_runtime.jsx)(_components.code, {
          children: "0.11.1.3+1"
        }), " (TASK incremented to 3, BUILD reset to 1)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Impact:"
      }), " Multiple tasks can be released with TASK=1, only BUILD incremented (1-9), breaking version traceability."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "the-fix",
      children: "The Fix"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution:"
      }), " Explicit, mandatory step-by-step procedure in RW Step 2 that:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "MUST"
        }), " read Story file to identify completed task"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "MUST"
        }), " extract task number from task identifier"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "MUST"
        }), " compare task number to current VERSION_TASK"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "MUST"
        }), " validate before and after updating"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "See:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "packages/frameworks/workflow-mgt/docs/documentation/Developer_Docs/vwmp/release-workflow-agent-execution.md"
      }), " Step 2 for complete procedure."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "root-cause-analysis",
      children: "Root Cause Analysis"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "primary-root-cause",
      children: "Primary Root Cause"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Location:"
      }), " RW Step 2 (Bump Version) instructions"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Original Problem (from other project):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "1. **Bump Version** - Read version file, determine next version (increment BUILD for same task, or set new TASK+BUILD=1), update file.\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Problems:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "No method to determine which case:"
        }), " \"increment BUILD for same task, or set new TASK+BUILD=1\" - but HOW do I know which one?"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "No source of truth:"
        }), " Doesn't tell WHERE to find which task was completed"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "No validation:"
        }), " Doesn't require checking that TASK matches completed work"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Assumes knowledge:"
        }), " Implies agent already knows if it's the same task or new task"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "secondary-root-causes",
      children: "Secondary Root Causes"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "No mandatory Story file check:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Instruction doesn't require reading Story file"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Story file is the source of truth for completed tasks"
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Task numbers are clearly visible in Story file: ", (0,jsx_runtime.jsx)(_components.code, {
              children: "E\\{epic\\}:S\\{story\\}:T\\{task\\}"
            })]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "No task number extraction step:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "No instruction to extract task number from completed task identifier"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "No instruction to compare task number to current VERSION_TASK"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "No validation step:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "No requirement to validate TASK number matches completed task"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "No requirement to verify before/after updating"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Default behavior:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Agent defaulted to \"increment BUILD\" without checking"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "No explicit check forced agent to verify task context"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "why-previous-fixes-didnt-work",
      children: "Why Previous Fixes Didn't Work"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Previous attempts:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Added versioning policy references"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Added examples"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Added warnings"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "What was missing:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Explicit, step-by-step procedure"
        }), " that cannot be skipped"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Mandatory checks"
        }), " that force reading Story file"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Validation steps"
        }), " that catch errors before updating"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Clear decision logic"
        }), " with examples"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "the-fix-what-was-changed",
      children: "The Fix: What Was Changed"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1-updated-rw-step-2-in-cursorrules-rw-trigger-sectionmd",
      children: "1. Updated RW Step 2 in cursorrules-rw-trigger-section.md"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Changed from:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "2. **Bump Version** - Read version file, determine next version using schema calculation:\n   - **Same Task:** Increment BUILD (e.g., `0.E.S.T+B` → `0.E.S.T+{B+1}`)\n   - **New Task:** Set new TASK and BUILD=1 (e.g., `0.E.S.T+B` → `0.E.S.{T+1}+1`)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Changed to:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "2. **Bump Version** - **MANDATORY STEP-BY-STEP PROCESS (DO NOT SKIP ANY STEP):**\n\n   **A. READ CURRENT VERSION:**\n   - Read `src/{project}/version.py` to get current `VERSION_EPIC`, `VERSION_STORY`, `VERSION_TASK`, `VERSION_BUILD`\n   - Document current version: `RC.EPIC.STORY.TASK+BUILD`\n\n   **B. IDENTIFY COMPLETED TASK (MANDATORY):**\n   - Read the Story file: `docs/project-management/kanban/epics/Epic-{epic}/stories/Story-{story}-*.md`\n   - Find the MOST RECENTLY COMPLETED task in the Task Checklist (marked `✅ COMPLETE`)\n   - Extract the task number from the task identifier: `E{epic}:S{story}:T{task}` (e.g., `E2:S02:T08` → task number is `8`)\n   - **CRITICAL:** If no task is marked complete, or you cannot identify which task was just completed, **STOP** and ask the user which task was completed\n\n   **C. DETERMINE VERSION BUMP (MANDATORY LOGIC):**\n   - Compare completed task number to current `VERSION_TASK`:\n     - **IF completed task number > current VERSION_TASK:** This is a NEW TASK\n       - Set `VERSION_TASK` = completed task number\n       - Set `VERSION_BUILD` = 1 (reset to 1 for new task)\n       - Example: Current `0.2.2.3+5`, completed T008 → New version: `0.2.2.8+1`\n     - **IF completed task number == current VERSION_TASK:** This is SAME TASK, new build\n       - Keep `VERSION_TASK` unchanged\n       - Increment `VERSION_BUILD` by 1\n       - Example: Current `0.2.2.3+1`, completed T003 → New version: `0.2.2.3+2`\n     - **IF completed task number < current VERSION_TASK:** This is OUT-OF-ORDER TASK COMPLETION\n       - **This is VALID** - Tasks can be completed out of sequential order\n       - Set `VERSION_TASK` = completed task number (use completed task, not current)\n       - Set `VERSION_BUILD` = 1 (reset to 1 for the completed task)\n       - Example: Current `0.3.2.6+1`, completed T005 → New version: `0.3.2.5+1`\n       - **CRITICAL:** Version reflects completed task, not current VERSION_TASK\n       - **CRITICAL:** Changelog entry will appear before higher task numbers (canonical ordering)\n       - **See:** Edge Case 10.11 in versioning cookbook for complete documentation\n\n   **D. VALIDATE BEFORE UPDATING:**\n   - Verify: New `VERSION_TASK` matches completed task number\n   - Verify: If new task, `VERSION_BUILD` = 1; if same task, `VERSION_BUILD` = current + 1\n   - Document decision: \"Task {completed_task} completed. Current TASK={current_task}, BUILD={current_build}. Decision: {new_task/new_build} → TASK={new_task}, BUILD={new_build}\"\n\n   **E. UPDATE VERSION FILE:**\n   - Update `VERSION_TASK` and `VERSION_BUILD` in `src/{project}/version.py`\n   - Update `VERSION_STRING` to reflect new version\n   - Update `VERSION_INFO[\"description\"]` if present\n\n   **F. VALIDATE AFTER UPDATING:**\n   - Re-read `version.py` and verify the new version matches your decision\n   - Confirm: `VERSION_TASK` = completed task number\n   - Confirm: `VERSION_BUILD` = 1 (if new task) or current+1 (if same task)\n\n   Use format: `RC.EPIC.STORY.TASK+BUILD`\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Key Changes:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Replaced vague instruction with explicit 6-step procedure (A-F)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Added mandatory Story file read (Step B)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Added mandatory task number extraction (Step B)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Added mandatory comparison logic (Step C)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Added validation before updating (Step D)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Added validation after updating (Step F)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Added error handling for invalid cases"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "2-updated-release-workflow-agent-executionmd-step-2",
      children: "2. Updated release-workflow-agent-execution.md Step 2"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Enhanced ANALYZE phase:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Made Story file read ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "MANDATORY"
        }), " and explicit"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Added task number extraction requirement"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Added comparison requirement"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Enhanced DETERMINE phase:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Made task transition detection explicit"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Added clear decision logic with examples"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Added validation requirements"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Enhanced VALIDATE phase:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Added mandatory verification that ", (0,jsx_runtime.jsx)(_components.code, {
          children: "VERSION_TASK"
        }), " matches completed task"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Added verification that ", (0,jsx_runtime.jsx)(_components.code, {
          children: "VERSION_BUILD"
        }), " is correct (1 for new task, incremented for same task)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "3-updated-key-principles",
      children: "3. Updated Key Principles"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Added to cursorrules-rw-trigger-section.md:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["✅ ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Mandatory Task Identification:"
        }), " Step 2 MUST read Story file to identify completed task number"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["✅ ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Version Validation:"
        }), " Step 2 MUST validate TASK number matches completed task before and after updating"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["❌ ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Never Skip Task Identification:"
        }), " Always read Story file to find completed task number"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["❌ ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Never Assume Same Task:"
        }), " Always compare completed task number to current VERSION_TASK"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "how-to-use-this-document",
      children: "How to Use This Document"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "if-the-error-happens-again",
      children: "If the Error Happens Again"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 1: Identify the Error"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Check if BUILD was incremented instead of TASK"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Verify by comparing version numbers to completed tasks in Story file"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Example: T005 completed but version shows ", (0,jsx_runtime.jsx)(_components.code, {
          children: "0.2.2.1+5"
        }), " instead of ", (0,jsx_runtime.jsx)(_components.code, {
          children: "0.2.2.5+1"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 2: Review This Document"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Read \"Root Cause Analysis\" section"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Read \"The Fix: What Was Changed\" section"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Understand why it happened and what was supposed to prevent it"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 3: Check Current State"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Read ", (0,jsx_runtime.jsx)(_components.code, {
          children: "cursorrules-rw-trigger-section.md"
        }), " Step 2 - Is the explicit procedure still there?"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Read ", (0,jsx_runtime.jsx)(_components.code, {
          children: "release-workflow-agent-execution.md"
        }), " Step 2 - Is it still accurate?"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Check if agent followed the procedure (check logs/conversation)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 4: Determine Cause"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "If procedure is missing:"
        }), " Restore from this document"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "If procedure exists but wasn't followed:"
        }), " Review why agent skipped steps"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "If procedure is unclear:"
        }), " Clarify based on examples in this document"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 5: Fix and Document"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Update ", (0,jsx_runtime.jsx)(_components.code, {
          children: "cursorrules-rw-trigger-section.md"
        }), " if needed"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Update ", (0,jsx_runtime.jsx)(_components.code, {
          children: "release-workflow-agent-execution.md"
        }), " if needed"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Document what went wrong and how it was fixed"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update this reference guide with new findings"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "for-review-and-onboarding",
      children: "For Review and Onboarding"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "When reviewing versioning procedures:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Read this document to understand the error"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Read ", (0,jsx_runtime.jsx)(_components.code, {
          children: "release-workflow-agent-execution.md"
        }), " Step 2 to understand the correct procedure"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Verify ", (0,jsx_runtime.jsx)(_components.code, {
          children: "cursorrules-rw-trigger-section.md"
        }), " Step 2 matches the procedure"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "When onboarding new team members:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Share this document as context"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Explain the error and why it matters"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Walk through the correct procedure"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Show examples of correct vs. incorrect versioning"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "related-documentation",
      children: "Related Documentation"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "core-policy-documents",
      children: "Core Policy Documents"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.a, {
            href: "/ai-dev-kit/docs/architecture/standards-and-adrs/dev-kit-versioning-policy",
            children: "Versioning Policy"
          })
        }), " - Complete versioning schema definition"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.a, {
            href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/packages/frameworks/numbering%20%26%20versioning/versioning-strategy.md",
            children: "Versioning Strategy (source)"
          })
        }), " - Complete strategy with forensic traceability"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "procedure-documents",
      children: "Procedure Documents"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.a, {
            href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/packages/frameworks/workflow-mgt/KB/Documentation/Developer_Docs/vwmp/release-workflow-agent-execution.md",
            children: "Release Workflow Agent Execution (source)"
          })
        }), " - ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "MANDATORY"
        }), " step-by-step procedure for RW Step 2"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.a, {
            href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/packages/frameworks/workflow-mgt/cursorrules-rw-trigger-section.md",
            children: "Cursor Rules RW Trigger Section (source)"
          })
        }), " - Updated RW Step 2 with explicit procedure"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "workflow-flaws-documentation",
      children: "Workflow Flaws Documentation"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.a, {
            href: "/ai-dev-kit/docs/architecture/standards-and-adrs/workflow-flaws-reference-guide",
            children: "Workflow Flaws Reference Guide"
          })
        }), " - Comprehensive reference for all RW flaws (this error is documented as WF-002)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "implementation-documents",
      children: "Implementation Documents"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.a, {
            href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/src/fynd_deals/version.py",
            children: "Version File (source)"
          })
        }), " - Current version implementation"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "key-takeaways",
      children: "Key Takeaways"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "what-went-wrong",
      children: "What Went Wrong"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Vague instruction"
        }), " in RW Step 2"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "No mandatory checks"
        }), " to read Story file"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "No validation"
        }), " that TASK matches completed work"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Default behavior"
        }), " to increment BUILD without checking"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "what-was-fixed",
      children: "What Was Fixed"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Explicit procedure"
        }), " with 6 mandatory steps (A-F)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Mandatory Story file read"
        }), " to identify completed task"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Mandatory comparison"
        }), " of task numbers"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Validation before and after"
        }), " updating version file"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Error handling"
        }), " for invalid cases"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "how-to-prevent",
      children: "How to Prevent"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Follow the procedure exactly"
        }), " - Do not skip any step"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Read Story file first"
        }), " - It's the source of truth"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Compare task numbers"
        }), " - Don't assume same task"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Validate everything"
        }), " - Before and after updating"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Document decisions"
        }), " - Show your work"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "version-history",
      children: "Version History"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Date"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Version"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Changes"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2025-12-03"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1.0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Initial document created after reviewing fynd.deals Epic 11, Story 1 error analysis"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "contact-and-escalation",
      children: "Contact and Escalation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "If this error occurs again:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Review this document"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Check if procedure is still in place"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Verify agent followed procedure"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Document what went wrong"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update this document with findings"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Escalate if procedure needs further refinement"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Questions or issues:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Review related documentation (see \"Related Documentation\" section)"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Check ", (0,jsx_runtime.jsx)(_components.code, {
          children: "cursorrules-rw-trigger-section.md"
        }), " for current procedure"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Verify ", (0,jsx_runtime.jsx)(_components.code, {
          children: "release-workflow-agent-execution.md"
        }), " Step 2 is accurate"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.em, {
        children: "Last updated: 2025-12-03"
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.em, {
        children: "This document should be updated whenever the versioning procedure changes or if the error occurs again."
      })]
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