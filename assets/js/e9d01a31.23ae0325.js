"use strict";
(self["webpackChunkportal"] = self["webpackChunkportal"] || []).push([["64668"], {
45972(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_project_management_kanban_fr_br_br_007_multiple_bugs_kanban_package_installation_md_e9d_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-project-management-kanban-fr-br-br-007-multiple-bugs-kanban-package-installation-md-e9d.json
var site_docs_project_management_kanban_fr_br_br_007_multiple_bugs_kanban_package_installation_md_e9d_namespaceObject = JSON.parse('{"id":"project-management/kanban/fr-br/BR-007-multiple-bugs-kanban-package-installation","title":"Bug Report: Multiple Bugs in Kanban Package Installation Process","description":"Type: Bug Report (BR)","source":"@site/../docs/project-management/kanban/fr-br/BR-007-multiple-bugs-kanban-package-installation.md","sourceDirName":"project-management/kanban/fr-br","slug":"/project-management/kanban/fr-br/BR-007-multiple-bugs-kanban-package-installation","permalink":"/ai-dev-kit/docs/project-management/kanban/fr-br/BR-007-multiple-bugs-kanban-package-installation","draft":false,"unlisted":false,"editUrl":"https://github.com/RMS-Ltd/ai-dev-kit/tree/main/docs/../docs/project-management/kanban/fr-br/BR-007-multiple-bugs-kanban-package-installation.md","tags":[],"version":"current","frontMatter":{"lifecycle":"evergreen","ttl_days":null,"created_at":"2025-12-10T17:30:00.000Z","expires_at":null,"housekeeping_policy":"keep"},"sidebar":"docsSidebar","previous":{"title":"Bug Report: Missing Migration Support for Pre-Existing Kanban Structures","permalink":"/ai-dev-kit/docs/project-management/kanban/fr-br/BR-006-missing-migration-support-pre-existing-kanban"},"next":{"title":"Bug Report: Arbitrary 80% Threshold Contradicts Agentic Intelligence Claims","permalink":"/ai-dev-kit/docs/project-management/kanban/fr-br/BR-008-arbitrary-80-threshold-contradicts-agentic-intelligence"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ../docs/project-management/kanban/fr-br/BR-007-multiple-bugs-kanban-package-installation.md


const frontMatter = {
	lifecycle: 'evergreen',
	ttl_days: null,
	created_at: new Date('2025-12-10T17:30:00.000Z'),
	expires_at: null,
	housekeeping_policy: 'keep'
};
const contentTitle = 'Bug Report: Multiple Bugs in Kanban Package Installation Process';

const assets = {

};



const toc = [{
  "value": "Summary",
  "id": "summary",
  "level": 2
}, {
  "value": "Description",
  "id": "description",
  "level": 2
}, {
  "value": "What is the bug?",
  "id": "what-is-the-bug",
  "level": 3
}, {
  "value": "What should happen vs. what actually happens?",
  "id": "what-should-happen-vs-what-actually-happens",
  "level": 3
}, {
  "value": "When does it occur?",
  "id": "when-does-it-occur",
  "level": 3
}, {
  "value": "Who is affected?",
  "id": "who-is-affected",
  "level": 3
}, {
  "value": "Affected Component",
  "id": "affected-component",
  "level": 2
}, {
  "value": "Steps to Reproduce",
  "id": "steps-to-reproduce",
  "level": 2
}, {
  "value": "Bug 1: Missing Tuple Import",
  "id": "bug-1-missing-tuple-import",
  "level": 3
}, {
  "value": "Bug 2: Semantic Matcher Regex Error",
  "id": "bug-2-semantic-matcher-regex-error",
  "level": 3
}, {
  "value": "Bug 3: Mode Mismatch",
  "id": "bug-3-mode-mismatch",
  "level": 3
}, {
  "value": "Bug 4: Incorrect Analysis Recommendations",
  "id": "bug-4-incorrect-analysis-recommendations",
  "level": 3
}, {
  "value": "Environment",
  "id": "environment",
  "level": 2
}, {
  "value": "Impact",
  "id": "impact",
  "level": 2
}, {
  "value": "Acceptance Criteria (Fix Requirements)",
  "id": "acceptance-criteria-fix-requirements",
  "level": 2
}, {
  "value": "Fix Attempt History",
  "id": "fix-attempt-history",
  "level": 2
}, {
  "value": "Fix Attempts",
  "id": "fix-attempts",
  "level": 3
}, {
  "value": "Fix Attempt 1 (2025-12-10 — Story T01–T04)",
  "id": "fix-attempt-1-2025-12-10--story-t01t04",
  "level": 4
}, {
  "value": "Fix Attempt 2 (2026-06-05 — E04:S09 verification wave)",
  "id": "fix-attempt-2-2026-06-05--e04s09-verification-wave",
  "level": 4
}, {
  "value": "Dependencies",
  "id": "dependencies",
  "level": 2
}, {
  "value": "Intake Decision",
  "id": "intake-decision",
  "level": 2
}, {
  "value": "Notes",
  "id": "notes",
  "level": 2
}, {
  "value": "References",
  "id": "references",
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
    h4: "h4",
    header: "header",
    hr: "hr",
    input: "input",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "bug-report-multiple-bugs-in-kanban-package-installation-process",
        children: "Bug Report: Multiple Bugs in Kanban Package Installation Process"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Type:"
      }), " Bug Report (BR)", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Submitted:"
      }), " 2025-12-10", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Submitted By:"
      }), " AI Agent (Cursor) acting as user/client for dev-toolkit", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Priority:"
      }), " HIGH", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Severity:"
      }), " HIGH", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Status:"
      }), " FIXED"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Implementing Task:"
      }), " ", (0,jsx_runtime.jsxs)(_components.a, {
        href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-04/story-09-bug-fixes-and-agentic-intelligence/T01-br007-kanban-package-installation-verification",
        children: ["E04:S09", ":T01"]
      }), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "GitHub Issue:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://github.com/RMS-Ltd/ai-dev-kit/issues/9",
        children: "#9"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Multiple bugs in the Kanban package installation process prevent proper execution of canonical_adoption mode and intelligent task mapping. Bugs include missing imports, regex errors, mode mismatches, and incorrect analysis recommendations."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "description",
      children: "Description"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "what-is-the-bug",
      children: "What is the bug?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "During UAT of the Kanban package installation process, multiple bugs were discovered that prevent the canonical_adoption mode from functioning correctly:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Missing Tuple Import"
        }), " - ", (0,jsx_runtime.jsx)(_components.code, {
          children: "analyze_structure.py"
        }), " uses ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Optional[Tuple]"
        }), " but ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Tuple"
        }), " is not imported"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Semantic Matcher Regex Error"
        }), " - Optional group handling causes \"no such group\" error"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Mode Mismatch"
        }), " - ", (0,jsx_runtime.jsx)(_components.code, {
          children: "canonical_adoption"
        }), " mode supported by install script but not migrate script"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Incorrect Analysis Recommendations"
        }), " - Analysis recommends \"fresh\" mode despite detecting existing structure"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "what-should-happen-vs-what-actually-happens",
      children: "What should happen vs. what actually happens?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Expected Behavior:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Installation script runs without errors"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Semantic matching loads canonical epic definitions successfully"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Canonical adoption mode executes end-to-end"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Analysis provides accurate recommendations based on detected structure"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Actual Behavior:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Installation fails at analysis step due to missing Tuple import"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Semantic matching fails silently with \"no such group\" error"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Canonical adoption mode fails because migrate script doesn't support it"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Analysis incorrectly recommends \"fresh\" mode despite detecting 9 epics, 40 stories, 291 tasks"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "when-does-it-occur",
      children: "When does it occur?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "These bugs occur when:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Running ", (0,jsx_runtime.jsx)(_components.code, {
          children: "install_kanban_framework.py"
        }), " with existing Kanban structure"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Attempting to use canonical_adoption mode"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Running analysis step with semantic matching enabled"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Migrating structure with canonical_adoption mode"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "who-is-affected",
      children: "Who is affected?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Projects with existing Kanban structures attempting to adopt canonical structure"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Users trying to use canonical_adoption mode"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "AI agents automating Kanban framework installation"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "affected-component",
      children: "Affected Component"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Primary Component:"
      }), " Kanban Framework - Installation Process", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Affected Areas:"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      className: "contains-task-list",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "Installation Process"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "Migration Utilities"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "Analysis Utilities"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "Semantic Matching"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Backend/API"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Frontend/UI"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Database/Schema"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Integration/External Service"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Root Cause:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Missing type imports (Tuple)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Incorrect regex pattern handling for optional groups"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Inconsistent mode support across scripts"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Flawed analysis recommendation logic"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "steps-to-reproduce",
      children: "Steps to Reproduce"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "bug-1-missing-tuple-import",
      children: "Bug 1: Missing Tuple Import"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Install Kanban package from ai-dev-kit"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Run ", (0,jsx_runtime.jsx)(_components.code, {
          children: "python3 packages/frameworks/kanban/scripts/install_kanban_framework.py --mode canonical_adoption"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Installation reaches analysis step"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Error:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "NameError: name 'Tuple' is not defined"
        }), " at line 192 in ", (0,jsx_runtime.jsx)(_components.code, {
          children: "analyze_structure.py"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "bug-2-semantic-matcher-regex-error",
      children: "Bug 2: Semantic Matcher Regex Error"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Run installation with existing Kanban structure"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Analysis step attempts to load canonical epic definitions"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Error:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Error loading canonical epic definitions: no such group"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Semantic matching fails silently, returns 0 matches"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "bug-3-mode-mismatch",
      children: "Bug 3: Mode Mismatch"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Run ", (0,jsx_runtime.jsx)(_components.code, {
          children: "install_kanban_framework.py --mode canonical_adoption"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Installation completes analysis successfully"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Migration step calls ", (0,jsx_runtime.jsx)(_components.code, {
          children: "migrate_structure.py --mode canonical_adoption"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Error:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "error: argument --mode: invalid choice: 'canonical_adoption'"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "bug-4-incorrect-analysis-recommendations",
      children: "Bug 4: Incorrect Analysis Recommendations"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Run installation with existing Kanban structure (9 epics, 40 stories, 291 tasks)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Analysis detects structure successfully"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Result:"
        }), " Analysis recommends \"fresh\" mode with rationale \"No existing Kanban structure detected\""]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Rationale contradicts detection results"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "environment",
      children: "Environment"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Environment:"
      }), " Development", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Version:"
      }), " Kanban Framework v2.1.0", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Repository:"
      }), " earlution/dev-toolkit (consuming ai-dev-kit framework)", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Framework Source:"
      }), " RMS-Ltd/ai-dev-kit", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Framework Path:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "packages/frameworks/kanban/"
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Python Version:"
      }), " 3.x"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "impact",
      children: "Impact"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "User Impact:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      className: "contains-task-list",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "Critical - System unusable (for canonical adoption mode)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "High - Major functionality broken"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Medium - Some functionality affected"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Low - Minor issue, workaround available"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Business Impact:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Canonical adoption mode is non-functional"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Users cannot leverage intelligent task mapping feature"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Framework credibility affected by multiple blocking bugs"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Workaround:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Bug 1: Add ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Tuple"
        }), " to imports manually (fixed locally during UAT)"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Bug 2: Fix regex optional group handling (fixed locally during UAT)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Bug 3: Use hybrid mode instead (defeats purpose of canonical adoption)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Bug 4: Ignore recommendation and manually select mode"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "acceptance-criteria-fix-requirements",
      children: "Acceptance Criteria (Fix Requirements)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      className: "contains-task-list",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Criterion 1:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "analyze_structure.py"
        }), " imports ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Tuple"
        }), " from ", (0,jsx_runtime.jsx)(_components.code, {
          children: "typing"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Criterion 2:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "semantic_matcher.py"
        }), " handles optional regex groups correctly"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Criterion 3:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "migrate_structure.py"
        }), " supports ", (0,jsx_runtime.jsx)(_components.code, {
          children: "canonical_adoption"
        }), " mode in argparse"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Criterion 4:"
        }), " Analysis recommendation logic correctly considers detected structure"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Criterion 5:"
        }), " All bugs fixed and tested with real-world Kanban structures"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Criterion 6:"
        }), " Installation completes successfully in canonical_adoption mode"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Verification Method:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      className: "contains-task-list",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "Manual testing (UAT scenario reproduction)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Test suite execution"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Both"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "fix-attempt-history",
      children: "Fix Attempt History"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Purpose:"
      }), " This section documents all fix attempts for this bug."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "fix-attempts",
      children: "Fix Attempts"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "fix-attempt-1-2025-12-10--story-t01t04",
      children: "Fix Attempt 1 (2025-12-10 — Story T01–T04)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Version:"
        }), " v0.4.9.1+1 (implementation wave)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Changes:"
        }), " Tuple import; semantic regex try/except; ", (0,jsx_runtime.jsx)(_components.code, {
          children: "canonical_adoption"
        }), " in migrate argparse; ", (0,jsx_runtime.jsx)(_components.code, {
          children: "structure_detected"
        }), " guard in recommendation logic."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Verification Status:"
        }), " Verified via static/runtime checks (IPP E04:S09", ":T01", ")."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h4, {
      id: "fix-attempt-2-2026-06-05--e04s09-verification-wave",
      children: ["Fix Attempt 2 (2026-06-05 — E04:S09", ":T01", " verification wave)"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Version:"
        }), " v0.4.9.1+1"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Changes:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "analyze_structure.py"
        }), " — ", (0,jsx_runtime.jsx)(_components.code, {
          children: "_generate_migration_plan"
        }), " uses ", (0,jsx_runtime.jsx)(_components.code, {
          children: "len(self.semantic_matches)"
        }), " (RF9 NameError gap)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Verification Status:"
        }), " V1–V5 PASS; 23 canonical epics load; BR-007 closed."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "dependencies",
      children: "Dependencies"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Blocks:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Canonical adoption mode functionality"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Intelligent task mapping feature"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Framework adoption for projects with existing structures"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Blocked By:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "None"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Related Work:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "UXR-004:"
        }), " Kanban Package Installation UAT (comprehensive findings)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "BR-008:"
        }), " Arbitrary 80% Threshold / No Agentic Intelligence"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "FR-010:"
        }), " Implement Actual Agentic Intelligence for Task Mapping"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "intake-decision",
      children: "Intake Decision"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Intake Status:"
      }), " COMPLETE", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Intake Date:"
      }), " 2025-12-10", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Intake By:"
      }), " AI Agent (ai-dev-kit)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Decision Flow Results:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      className: "contains-task-list",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Story Match Found: [TBD]"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Assigned To:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Epic: [TBD]"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Story: [TBD]"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Task: [TBD]"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Version: [TBD]"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Kanban Links:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Epic: [TBD]"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Story: [TBD]"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Task: [TBD]"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "notes",
      children: "Notes"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This bug report documents multiple bugs discovered during comprehensive UAT of the Kanban package installation process. All bugs were encountered when attempting to use canonical_adoption mode with an existing Kanban structure (9 epics, 40 stories, 291 tasks)."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "UAT Context:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Real-world installation scenario"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Following package instructions exactly"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Comprehensive documentation of all issues encountered"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "references",
      children: "References"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "UXR-004:"
        }), " Kanban Package Installation UAT (", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/project-management/kanban/fr-br/UXR-004-kanban-package-installation-uat.md"
        }), ")"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Framework README:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "packages/frameworks/kanban/README.md"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Installation Script:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "packages/frameworks/kanban/scripts/install_kanban_framework.py"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Analysis Script:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "packages/frameworks/kanban/scripts/analyze_structure.py"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Migration Script:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "packages/frameworks/kanban/scripts/migrate_structure.py"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Semantic Matcher:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "packages/frameworks/kanban/scripts/semantic_matcher.py"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Template Usage:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "This BR follows the Kanban Framework BR template"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Comprehensive bug documentation with reproduction steps"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Clear acceptance criteria provided"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Related work referenced"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsxs)(_components.em, {
        children: ["This bug report is part of the Kanban Framework. See ", (0,jsx_runtime.jsx)(_components.code, {
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