"use strict";
(self["webpackChunkportal"] = self["webpackChunkportal"] || []).push([["66636"], {
47097(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_architecture_standards_and_adrs_workflow_flaws_reference_guide_md_32d_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-architecture-standards-and-adrs-workflow-flaws-reference-guide-md-32d.json
var site_docs_architecture_standards_and_adrs_workflow_flaws_reference_guide_md_32d_namespaceObject = JSON.parse('{"id":"architecture/standards-and-adrs/workflow-flaws-reference-guide","title":"Release Workflow Flaws Reference Guide","description":"Status: ACTIVE REFERENCE","source":"@site/../docs/architecture/standards-and-adrs/workflow-flaws-reference-guide.md","sourceDirName":"architecture/standards-and-adrs","slug":"/architecture/standards-and-adrs/workflow-flaws-reference-guide","permalink":"/ai-dev-kit/docs/architecture/standards-and-adrs/workflow-flaws-reference-guide","draft":false,"unlisted":false,"editUrl":"https://github.com/RMS-Ltd/ai-dev-kit/tree/main/docs/../docs/architecture/standards-and-adrs/workflow-flaws-reference-guide.md","tags":[],"version":"current","frontMatter":{"lifecycle":"evergreen","ttl_days":null,"created_at":"2025-12-04T21:00:00.000Z","expires_at":null,"housekeeping_policy":"keep"},"sidebar":"docsSidebar","previous":{"title":"Versioning Quick Reference","permalink":"/ai-dev-kit/docs/architecture/standards-and-adrs/versioning-quick-reference"},"next":{"title":"Workflow Hardening Guide for Agent‑Driven Release Processes","permalink":"/ai-dev-kit/docs/architecture/standards-and-adrs/workflow-hardening-guide"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ../docs/architecture/standards-and-adrs/workflow-flaws-reference-guide.md


const frontMatter = {
	lifecycle: 'evergreen',
	ttl_days: null,
	created_at: new Date('2025-12-04T21:00:00.000Z'),
	expires_at: null,
	housekeeping_policy: 'keep'
};
const contentTitle = 'Release Workflow Flaws Reference Guide';

const assets = {

};



const toc = [{
  "value": "Purpose",
  "id": "purpose",
  "level": 2
}, {
  "value": "Quick Reference: All Known Flaws",
  "id": "quick-reference-all-known-flaws",
  "level": 2
}, {
  "value": "WF-001: Story File Not Updated First (Step 7)",
  "id": "wf-001-story-file-not-updated-first-step-7",
  "level": 2
}, {
  "value": "Quick Reference: The Flaw",
  "id": "quick-reference-the-flaw",
  "level": 3
}, {
  "value": "Root Cause Analysis",
  "id": "root-cause-analysis",
  "level": 3
}, {
  "value": "The Fix",
  "id": "the-fix",
  "level": 3
}, {
  "value": "Prevention",
  "id": "prevention",
  "level": 3
}, {
  "value": "WF-002: Version Bump Logic Error (Step 2)",
  "id": "wf-002-version-bump-logic-error-step-2",
  "level": 2
}, {
  "value": "Quick Reference: The Flaw",
  "id": "quick-reference-the-flaw-1",
  "level": 3
}, {
  "value": "Root Cause Analysis",
  "id": "root-cause-analysis-1",
  "level": 3
}, {
  "value": "The Fix",
  "id": "the-fix-1",
  "level": 3
}, {
  "value": "Prevention",
  "id": "prevention-1",
  "level": 3
}, {
  "value": "How to Use This Document",
  "id": "how-to-use-this-document",
  "level": 2
}, {
  "value": "When a New Flaw is Discovered",
  "id": "when-a-new-flaw-is-discovered",
  "level": 3
}, {
  "value": "When Reviewing Workflow Procedures",
  "id": "when-reviewing-workflow-procedures",
  "level": 3
}, {
  "value": "When Onboarding New Team Members",
  "id": "when-onboarding-new-team-members",
  "level": 3
}, {
  "value": "Related Documentation",
  "id": "related-documentation",
  "level": 2
}, {
  "value": "Core Workflow Documents",
  "id": "core-workflow-documents",
  "level": 3
}, {
  "value": "Versioning Documents",
  "id": "versioning-documents",
  "level": 3
}, {
  "value": "Integration Documents",
  "id": "integration-documents",
  "level": 3
}, {
  "value": "Key Takeaways",
  "id": "key-takeaways",
  "level": 2
}, {
  "value": "Common Patterns in Flaws",
  "id": "common-patterns-in-flaws",
  "level": 3
}, {
  "value": "How Flaws Are Fixed",
  "id": "how-flaws-are-fixed",
  "level": 3
}, {
  "value": "How to Prevent Future Flaws",
  "id": "how-to-prevent-future-flaws",
  "level": 3
}, {
  "value": "WF-003: BR/FR Fix Attempts Not Documented",
  "id": "wf-003-brfr-fix-attempts-not-documented",
  "level": 2
}, {
  "value": "Quick Reference: The Flaw",
  "id": "quick-reference-the-flaw-2",
  "level": 3
}, {
  "value": "Root Cause Analysis",
  "id": "root-cause-analysis-2",
  "level": 3
}, {
  "value": "The Fix",
  "id": "the-fix-2",
  "level": 3
}, {
  "value": "WF-004: Story File Missing During RW Update (Step 7)",
  "id": "wf-004-story-file-missing-during-rw-update-step-7",
  "level": 2
}, {
  "value": "Quick Reference: The Flaw",
  "id": "quick-reference-the-flaw-3",
  "level": 3
}, {
  "value": "Root Cause Analysis",
  "id": "root-cause-analysis-3",
  "level": 3
}, {
  "value": "The Fix",
  "id": "the-fix-3",
  "level": 3
}, {
  "value": "Prevention",
  "id": "prevention-2",
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
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "release-workflow-flaws-reference-guide",
        children: "Release Workflow Flaws Reference Guide"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Status:"
      }), " ACTIVE REFERENCE", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Owner:"
      }), " Engineering", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Last Updated:"
      }), " 2025-12-04", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Related Work:"
      }), " Epic 3, Story 3 (Versioning Integration with Kanban & RW)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "purpose",
      children: "Purpose"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["This document serves as a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "comprehensive reference"
      }), " for all discovered flaws, anti-patterns, and workflow issues in the Release Workflow (RW). Each flaw is documented with symptoms, root causes, solutions, and pointers to where fixes are implemented."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Use this document when:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A workflow flaw is discovered"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Reviewing workflow procedures"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Onboarding new team members"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Debugging workflow issues"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Strengthening RW procedures"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "This document references:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Root cause analysis for each flaw"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Step-by-step solutions"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Policy documents"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Fix implementations"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "quick-reference-all-known-flaws",
      children: "Quick Reference: All Known Flaws"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Flaw ID"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Symptom"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Status"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Solution Location"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#wf-001-story-file-not-updated-first-step-7",
              children: "WF-001"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Step 7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Story file lacks forensic markers, Epic matches incomplete state"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅ FIXED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#wf-001-story-file-not-updated-first-step-7",
              children: "Solution"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#wf-002-version-bump-logic-error-step-2",
              children: "WF-002"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Step 2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BUILD incremented instead of TASK for new tasks"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅ FIXED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#wf-002-version-bump-logic-error-step-2",
              children: "Solution"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#wf-003-brfr-fix-attempts-not-documented",
              children: "WF-003"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N/A (New Step 6)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fix attempts not documented in BR/FR docs, preventing knowledge transfer between builds"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅ FIXED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#wf-003-brfr-fix-attempts-not-documented",
              children: "Solution"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#wf-004-story-file-missing-during-rw-update-step-7",
              children: "WF-004"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Step 7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RW fails when Story file referenced in Epic doesn't exist"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "🔧 TO FIX"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#wf-004-story-file-missing-during-rw-update-step-7",
              children: "Solution"
            })
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "wf-001-story-file-not-updated-first-step-7",
      children: "WF-001: Story File Not Updated First (Step 7)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Status:"
      }), " ✅ FIXED", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Date Discovered:"
      }), " 2025-12-04", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Date Fixed:"
      }), " 2025-12-04", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Related Work:"
      }), " Epic 3, Story 3, Task 5"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "quick-reference-the-flaw",
      children: "Quick Reference: The Flaw"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Anti-Pattern:"
      }), " Story file (authoritative source) wasn't being updated with forensic markers before Epic file was updated to match it."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Symptom:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Story file task checklist lacks forensic markers"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Epic file matches Story file (correct behavior)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "But Epic file also lacks forensic markers (because Story file lacked them)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Result: Both files in incomplete state"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["❌ ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Wrong:"
        }), " Epic file updated to match Story file, but Story file never updated with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "✅ COMPLETE (v0.11.5.2+1)"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["✅ ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Correct:"
        }), " Story file updated FIRST with forensic markers, then Epic file updated to match"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Impact:"
      }), " Forensic markers missing from both Story and Epic documents, breaking traceability."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "root-cause-analysis",
      children: "Root Cause Analysis"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Primary Root Cause:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Location:"
        }), " RW Step 7 (Auto-update Kanban Docs) instructions"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Problem:"
        }), " Step 6 treated Story file as authoritative source but didn't update it"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Workflow Gap:"
        }), " One-way sync where Epic matched Story, but Story wasn't updated during RW"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "What Happened:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Step 7 read Story file to get \"correct state\""
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Step 7 updated Epic file to match Story file"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "But Step 7 never updated Story file with forensic markers"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Result: Story file (authoritative) lacked markers, Epic matched that incomplete state"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Why It Happened:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Step 7 documentation said \"read Story file to get correct state\" and \"update Epic to match Story\""
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "But it didn't say \"update Story file FIRST, then update Epic to match\""
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The order of operations wasn't explicit"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Story file was treated as read-only authoritative source, not as something to update"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "the-fix",
      children: "The Fix"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution:"
      }), " Explicit order requirement in RW Step 7:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "FIRST:"
        }), " Update Story file (", (0,jsx_runtime.jsx)(_components.code, {
          children: "Story-\\{N\\}-\\{Name\\}.md"
        }), ") task checklist with forensic markers"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "THEN:"
        }), " Update Epic-{epic}.md to match the updated Story file"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Implementation:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Updated ", (0,jsx_runtime.jsx)(_components.code, {
          children: "release-workflow-agent-execution.md"
        }), " Step 6 EXECUTE phase"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Updated ", (0,jsx_runtime.jsx)(_components.code, {
          children: "cursorrules-rw-trigger-section.md"
        }), " Step 6 instructions"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Made order explicit: Story file FIRST, then Epic file"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "See:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "packages/frameworks/workflow-mgt/docs/documentation/Developer_Docs/vwmp/release-workflow-agent-execution.md"
        }), " Step 6"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "packages/frameworks/workflow-mgt/cursorrules-rw-trigger-section.md"
        }), " Step 6"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "prevention",
      children: "Prevention"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "How to Prevent:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Always update Story file FIRST with forensic markers"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Then update Epic file to match the updated Story file"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Follow explicit order: Story → Epic"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Validate both files have forensic markers after update"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Key Principle:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Story file is authoritative source, but it must be updated during RW"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Epic file matches Story file, so Story must be updated first"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "wf-002-version-bump-logic-error-step-2",
      children: "WF-002: Version Bump Logic Error (Step 2)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Status:"
      }), " ✅ FIXED", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Date Discovered:"
      }), " 2025-12-03", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Date Fixed:"
      }), " 2025-12-03", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Related Work:"
      }), " Epic 2, Story 2 (PDCA Integration)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "quick-reference-the-flaw-1",
      children: "Quick Reference: The Flaw"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Anti-Pattern:"
      }), " BUILD was incremented instead of TASK when completing new tasks."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Symptom:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Version shows wrong TASK component (e.g., ", (0,jsx_runtime.jsx)(_components.code, {
          children: "0.1.1.1+2"
        }), " for Task 2)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["BUILD increments when it should reset (e.g., ", (0,jsx_runtime.jsx)(_components.code, {
          children: "0.1.1.1+3"
        }), " for Task 3)"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Version doesn't match completed task number"
      }), "\n"]
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
      id: "root-cause-analysis-1",
      children: "Root Cause Analysis"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Primary Root Cause:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Location:"
        }), " RW Step 2 (Bump Version) instructions"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Problem:"
        }), " Vague instruction didn't specify how to determine if task is new or same"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Missing:"
        }), " No mandatory Story file read, no task number extraction, no validation"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Why It Happened:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Instruction said \"increment BUILD for same task, or set new TASK+BUILD=1\""
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "But didn't specify HOW to determine which case"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "No source of truth specified (where to find completed task)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Agent defaulted to \"increment BUILD\" without checking"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "the-fix-1",
      children: "The Fix"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution:"
      }), " Explicit, mandatory step-by-step procedure in RW Step 2:"]
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
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "See:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "packages/frameworks/workflow-mgt/docs/documentation/Developer_Docs/vwmp/release-workflow-agent-execution.md"
        }), " Step 2"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "packages/frameworks/workflow-mgt/cursorrules-rw-trigger-section.md"
        }), " Step 2"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "docs/architecture/standards-and-adrs/versioning-error-reference-guide.md"
        }), " (detailed analysis)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "prevention-1",
      children: "Prevention"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "How to Prevent:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Always read Story file first (source of truth)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Always extract task number from task identifier"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Always compare completed task vs. current VERSION_TASK"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Always validate before and after updating"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "how-to-use-this-document",
      children: "How to Use This Document"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "when-a-new-flaw-is-discovered",
      children: "When a New Flaw is Discovered"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 1: Document the Flaw"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Add new entry to \"Quick Reference: All Known Flaws\" table"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Create detailed section following the template:", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Quick Reference (symptom, example, impact)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Root Cause Analysis"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "The Fix (solution, implementation, pointers)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Prevention"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 2: Implement the Fix"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update relevant workflow documentation"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Update ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".cursorrules"
        }), " if needed"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update agent execution guides if needed"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 3: Update This Document"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Mark flaw as FIXED"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Add date fixed"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Add pointers to fix implementation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update prevention section"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "when-reviewing-workflow-procedures",
      children: "When Reviewing Workflow Procedures"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Checklist:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      className: "contains-task-list",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Review all known flaws in this document"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Verify fixes are still in place"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Check if any new flaws have emerged"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Update prevention strategies if needed"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "when-onboarding-new-team-members",
      children: "When Onboarding New Team Members"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Process:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Share this document as context"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Explain each flaw and why it matters"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Walk through the fixes"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Show examples of correct vs. incorrect behavior"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Emphasize prevention strategies"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "related-documentation",
      children: "Related Documentation"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "core-workflow-documents",
      children: "Core Workflow Documents"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.a, {
            href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/packages/frameworks/workflow-mgt/KB/Documentation/Developer_Docs/vwmp/release-workflow-agent-execution.md",
            children: "Release Workflow Agent Execution (source)"
          })
        }), " - Complete step-by-step guide"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.a, {
            href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/packages/frameworks/workflow-mgt/cursorrules-rw-trigger-section.md",
            children: "Cursor Rules RW Trigger Section (source)"
          })
        }), " - RW trigger instructions"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.a, {
            href: "/ai-dev-kit/docs/architecture/standards-and-adrs/workflow-hardening-guide",
            children: "Workflow Hardening Guide"
          })
        }), " - Core principles for workflow design"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "versioning-documents",
      children: "Versioning Documents"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.a, {
            href: "/ai-dev-kit/docs/architecture/standards-and-adrs/versioning-error-reference-guide",
            children: "Versioning Error Reference Guide"
          })
        }), " - Versioning-specific errors (WF-002 detailed here)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.a, {
            href: "/ai-dev-kit/docs/architecture/standards-and-adrs/dev-kit-versioning-policy",
            children: "Versioning Policy"
          })
        }), " - Versioning schema definition"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "integration-documents",
      children: "Integration Documents"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.a, {
            href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/packages/frameworks/numbering%20%26%20versioning/integration/integration-troubleshooting-guide.md",
            children: "Integration Troubleshooting Guide (source)"
          })
        }), " - Integration issues and solutions"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "key-takeaways",
      children: "Key Takeaways"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "common-patterns-in-flaws",
      children: "Common Patterns in Flaws"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Missing Explicit Order:"
        }), " Steps don't specify order of operations"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Missing Mandatory Checks:"
        }), " Steps don't require reading source of truth"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Missing Validation:"
        }), " Steps don't validate before/after state"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Vague Instructions:"
        }), " Steps use ambiguous language instead of explicit procedures"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "how-flaws-are-fixed",
      children: "How Flaws Are Fixed"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Make Order Explicit:"
        }), " Specify FIRST/THEN order of operations"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Add Mandatory Checks:"
        }), " Require reading source of truth"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Add Validation:"
        }), " Require before/after validation"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Clarify Instructions:"
        }), " Replace vague language with explicit step-by-step procedures"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "how-to-prevent-future-flaws",
      children: "How to Prevent Future Flaws"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Follow Explicit Procedures:"
        }), " Don't skip steps, follow order"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Read Source of Truth First:"
        }), " Always read authoritative sources"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Validate Everything:"
        }), " Check before and after state"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Document Decisions:"
        }), " Show your work, explain choices"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "wf-003-brfr-fix-attempts-not-documented",
      children: "WF-003: BR/FR Fix Attempts Not Documented"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Status:"
      }), " ✅ FIXED", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Date Discovered:"
      }), " 2025-12-05", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Date Fixed:"
      }), " 2025-12-05", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Related Work:"
      }), " Epic 3, Story 3 (Versioning Integration with Kanban & RW)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "quick-reference-the-flaw-2",
      children: "Quick Reference: The Flaw"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Anti-Pattern:"
      }), " Fix attempts for bugs weren't being documented in Bug Report (BR) or Feature Request (FR) documents, preventing knowledge transfer between builds."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Symptom:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Bug fix attempted in release v0.X.Y.Z+N"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Bug still present in subsequent releases"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "No record of what was attempted, what worked, what didn't"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Next build starts from scratch without learning from previous attempts"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Result: Repeated fix attempts, wasted effort, no knowledge accumulation"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["❌ ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Wrong:"
        }), " Bug fixed in v0.2.1.1+3, bug still present, no documentation of fix attempt"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["✅ ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Correct:"
        }), " Bug fix attempted in v0.2.1.1+3, documented in BR \"Fix Attempt History\" section with what was tried, what worked, what didn't, and lessons learned"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Impact:"
      }), " Knowledge loss between builds, repeated fix attempts, inability to learn from previous attempts."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "root-cause-analysis-2",
      children: "Root Cause Analysis"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Primary Root Cause:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Location:"
        }), " Release Workflow (RW) lacked a step to update BR/FR documents"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Problem:"
        }), " RW updated Kanban docs, changelogs, version files, but not BR/FR docs"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Workflow Gap:"
        }), " No mechanism to document fix attempts in BR/FR documents during release"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "What Happened:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Bug fix attempted in release"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Changelog updated with fix description"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Kanban docs updated with version markers"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "But BR/FR document never updated with fix attempt information"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Result: No record of fix attempt in BR/FR document"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Why It Happened:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "RW focused on versioning, changelogs, and Kanban updates"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "BR/FR documents were treated as intake artifacts, not living documents"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "No step existed to update BR/FR docs during release"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Fix attempt information existed in changelog but not in BR/FR document"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "the-fix-2",
      children: "The Fix"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution:"
      }), " Added new RW Step 6: \"Update BR/FR Docs\" before \"Auto-update Kanban Docs\" (now Step 7)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Implementation:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Updated BR Template:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Added \"Fix Attempt History\" section to ", (0,jsx_runtime.jsx)(_components.code, {
              children: "BR_TEMPLATE.md"
            })]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Template includes fields for:", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "Fix Description"
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "Changes Made"
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "Verification Status"
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "Result (Fixed/Partially Fixed/Not Fixed)"
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "Lessons Learned"
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "Next Steps"
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Created RW Step 6:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Purpose:"
            }), " Document flaws, attempted fixes, and verification status in BR/FR docs"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "For Bug Reports:"
            }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "Search for BR files linked to completed task"
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "Add new entry to \"Fix Attempt History\" section"
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "Document flaw description, attempted fix, verification status, lessons learned"
              }), "\n"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "For Feature Requests:"
            }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "Search for FR files linked to completed task"
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "Update \"Intake Decision\" section with implementation status"
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "Document implementation details and verification status"
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Updated RW Documentation:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Updated ", (0,jsx_runtime.jsx)(_components.code, {
              children: "release-workflow-agent-execution.md"
            }), " with new Step 6"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Updated ", (0,jsx_runtime.jsx)(_components.code, {
              children: "cursorrules-rw-trigger-section.md"
            }), " with new Step 6"]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Renumbered all subsequent steps (Step 7-14)"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Benefits:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Knowledge transfer between builds"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Learning from previous fix attempts"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Reduced repeated fix attempts"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Complete fix attempt history in BR documents"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "See:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.a, {
            href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/packages/frameworks/workflow-mgt/KB/Documentation/Developer_Docs/vwmp/release-workflow-agent-execution.md",
            children: "Release Workflow Agent Execution Guide (source)"
          })
        }), " - Step 6 for the complete procedure"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.a, {
            href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/packages/frameworks/workflow-mgt/cursorrules-rw-trigger-section.md",
            children: "Cursor Rules RW Trigger Section (source)"
          })
        }), " - Step 6 for the updated agent execution rules"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.a, {
            href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/packages/frameworks/kanban/templates/BR_TEMPLATE.md",
            children: "BR Template (source)"
          })
        }), " - \"Fix Attempt History\" section"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "wf-004-story-file-missing-during-rw-update-step-7",
      children: "WF-004: Story File Missing During RW Update (Step 7)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Status:"
      }), " 🔧 TO FIX", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Date Discovered:"
      }), " 2025-12-05", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Date Fixed:"
      }), " TBD", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Related Work:"
      }), " Epic 5, Story 1 (Documentation Maintenance Framework)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "quick-reference-the-flaw-3",
      children: "Quick Reference: The Flaw"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Anti-Pattern:"
      }), " RW Step 7 assumes Story file exists and fails when it doesn't, even if the Story is referenced in the Epic file."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Symptom:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Epic file references Story in Story Checklist (e.g., ", (0,jsx_runtime.jsx)(_components.code, {
          children: "story-04-*.md"
        }), ")"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Story file doesn't exist in filesystem"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "RW Step 7 fails with \"Story file not found\" error"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "RW workflow stops, blocking release"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Result: Release blocked due to missing Story file"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["❌ ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Wrong:"
        }), " epic-05.md references ", (0,jsx_runtime.jsx)(_components.code, {
          children: "story-04-*.md"
        }), " in Story Checklist, but file doesn't exist → RW Step 7 fails"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["✅ ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Correct:"
        }), " epic-05.md references ", (0,jsx_runtime.jsx)(_components.code, {
          children: "story-04-*.md"
        }), ", file doesn't exist → RW Step 7 checks existence, creates from template, then updates"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Impact:"
      }), " RW workflow fails when Story files are referenced but not yet created, blocking releases unnecessarily."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "root-cause-analysis-3",
      children: "Root Cause Analysis"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Primary Root Cause:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Location:"
        }), " RW Step 7 (Auto-update Kanban Docs) ANALYZE phase"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Problem:"
        }), " Step 7 doesn't check if Story file exists before trying to read/update it"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Workflow Gap:"
        }), " No pre-existence check, no template-based creation fallback"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "What Happens:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "RW Step 7 extracts Story number from version (e.g., Story 4)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "RW Step 7 tries to find Story file using pattern matching"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Story file doesn't exist (not yet created)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "RW Step 7 fails with file not found error"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "RW workflow stops, blocking release"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Why It Happens:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Step 7 documentation assumes Story file exists"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "No pre-existence check in ANALYZE phase"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "No fallback to create from template"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "No guidance on handling missing Story files"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "the-fix-3",
      children: "The Fix"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution:"
      }), " Add pre-existence check and template-based creation to RW Step 7:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "ANALYZE Phase Enhancement:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Check if Story file exists before proceeding"
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["If Story file doesn't exist:", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "Check if Story is referenced in Epic file Story Checklist"
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "If referenced, create Story file from template"
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "Extract Story name from Epic file reference"
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "Generate Story file with proper naming and structure"
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "Then proceed with normal update flow"
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Template-Based Creation:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Use Story template: ", (0,jsx_runtime.jsx)(_components.code, {
              children: "packages/frameworks/kanban/templates/STORY_TEMPLATE.md"
            })]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Populate template with:", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "Epic number and Story number from version"
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "Story name from Epic file reference"
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "Default status (TODO)"
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "Default priority (from Epic or MEDIUM)"
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["Proper file naming: ", (0,jsx_runtime.jsx)(_components.code, {
                  children: "Story-\\{N\\}-\\{Name\\}.md"
                })]
              }), "\n"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Create file in correct location (from config or fallback pattern)"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Substep Generation:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Generate substep on-the-fly: \"Create Story file from template\""
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Document creation in RW execution log"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Proceed with normal Story file update flow"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Implementation:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Update ", (0,jsx_runtime.jsx)(_components.code, {
          children: "release-workflow-agent-execution.md"
        }), " Step 7 ANALYZE phase"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Add pre-existence check logic"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Add template-based creation procedure"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Update ", (0,jsx_runtime.jsx)(_components.code, {
          children: "cursorrules-rw-trigger-section.md"
        }), " Step 7 instructions"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Document template path and creation procedure"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "See:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "packages/frameworks/workflow-mgt/docs/documentation/Developer_Docs/vwmp/release-workflow-agent-execution.md"
        }), " Step 7"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "packages/frameworks/workflow-mgt/cursorrules-rw-trigger-section.md"
        }), " Step 7"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "packages/frameworks/kanban/templates/STORY_TEMPLATE.md"
        }), " (template to use)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "prevention-2",
      children: "Prevention"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "How to Prevent:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Always check Story file existence before reading/updating"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If Story referenced in Epic but file missing, create from template"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use template-based creation to ensure consistency"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Document creation in RW execution log"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Key Principle:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "RW should be resilient to missing Story files"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If Story is referenced in Epic, it should exist (create if missing)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Template-based creation ensures consistency and proper structure"
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
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2025-12-04"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1.0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Initial document created with WF-001 (Story file not updated first) and WF-002 (Version bump logic error)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2025-12-05"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1.1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Added WF-003 (BR/FR fix attempts not documented) - New RW Step 6 added to document fix attempts"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2025-12-05"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1.2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Added WF-004 (Story file missing during RW update) - RW Step 7 needs pre-existence check and template-based creation"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "contact-and-escalation",
      children: "Contact and Escalation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "If a new flaw is discovered:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Document it in this guide following the template"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement the fix"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update this document with fix details"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update related documentation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Escalate if fix needs further refinement"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Questions or issues:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Review related documentation (see \"Related Documentation\" section)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Check workflow execution guides for current procedures"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Verify fixes are still in place"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.em, {
        children: "Last updated: 2025-12-05"
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.em, {
        children: "This document should be updated whenever a new workflow flaw is discovered or fixed."
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