"use strict";
(self["webpackChunkportal"] = self["webpackChunkportal"] || []).push([["94389"], {
96123(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_project_management_kanban_fr_br_br_003_rw_branch_validation_update_branches_md_e22_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-project-management-kanban-fr-br-br-003-rw-branch-validation-update-branches-md-e22.json
var site_docs_project_management_kanban_fr_br_br_003_rw_branch_validation_update_branches_md_e22_namespaceObject = JSON.parse('{"id":"project-management/kanban/fr-br/BR-003-rw-branch-validation-update-branches","title":"Bug Report: RW Branch Validation Missing Support for Update/Maintenance Branches","description":"Type: Bug Report (BR)","source":"@site/../docs/project-management/kanban/fr-br/BR-003-rw-branch-validation-update-branches.md","sourceDirName":"project-management/kanban/fr-br","slug":"/project-management/kanban/fr-br/BR-003-rw-branch-validation-update-branches","permalink":"/ai-dev-kit/docs/project-management/kanban/fr-br/BR-003-rw-branch-validation-update-branches","draft":false,"unlisted":false,"editUrl":"https://github.com/RMS-Ltd/ai-dev-kit/tree/main/docs/../docs/project-management/kanban/fr-br/BR-003-rw-branch-validation-update-branches.md","tags":[],"version":"current","frontMatter":{"lifecycle":"evergreen","ttl_days":null,"created_at":"2025-12-09T01:45:00.000Z","expires_at":null,"housekeeping_policy":"keep"},"sidebar":"docsSidebar","previous":{"title":"Bug Report: Changelog Validator Ordering Bug","permalink":"/ai-dev-kit/docs/project-management/kanban/fr-br/BR-002-changelog-validator-ordering-bug"},"next":{"title":"Bug Report: Kanban Installation Includes Project-Specific Epics from Template","permalink":"/ai-dev-kit/docs/project-management/kanban/fr-br/BR-004-kanban-installation-includes-project-specific-epics"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ../docs/project-management/kanban/fr-br/BR-003-rw-branch-validation-update-branches.md


const frontMatter = {
	lifecycle: 'evergreen',
	ttl_days: null,
	created_at: new Date('2025-12-09T01:45:00.000Z'),
	expires_at: null,
	housekeeping_policy: 'keep'
};
const contentTitle = 'Bug Report: RW Branch Validation Missing Support for Update/Maintenance Branches';

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
  "value": "Affected Component",
  "id": "affected-component",
  "level": 2
}, {
  "value": "Steps to Reproduce",
  "id": "steps-to-reproduce",
  "level": 2
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
  "value": "Attempt 1: v0.2.1.7+1 - 2025-12-09",
  "id": "attempt-1-v02171---2025-12-09",
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
    blockquote: "blockquote",
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
    pre: "pre",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "bug-report-rw-branch-validation-missing-support-for-updatemaintenance-branches",
        children: "Bug Report: RW Branch Validation Missing Support for Update/Maintenance Branches"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Type:"
      }), " Bug Report (BR)", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Submitted:"
      }), " 2025-12-09", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Submitted By:"
      }), " User", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Priority:"
      }), " MEDIUM", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Severity:"
      }), " MEDIUM", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Status:"
      }), " ACCEPTED"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Implementing Task:"
      }), " ", (0,jsx_runtime.jsxs)(_components.a, {
        href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-02/story-01-rw-agent-execution-and-docs/T10-dev-branch-support-in-rw-validators",
        children: ["E02:S01", ":T10"]
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Historical registry:"
      }), " E06:S01", ":T03"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The Release Workflow (RW) branch validation script (", (0,jsx_runtime.jsx)(_components.code, {
        children: "validate_branch_context.py"
      }), ") does not recognize ", (0,jsx_runtime.jsx)(_components.code, {
        children: "update/*"
      }), " branch patterns (e.g., ", (0,jsx_runtime.jsx)(_components.code, {
        children: "update/ai-dev-kit"
      }), "), causing warnings when running RW on branches used for framework updates. The validator should support update/maintenance branch patterns to properly validate version context."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "description",
      children: "Description"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "What is the bug?"
      }), "\nThe ", (0,jsx_runtime.jsx)(_components.code, {
        children: "validate_branch_context.py"
      }), " script only recognizes ", (0,jsx_runtime.jsx)(_components.code, {
        children: "main"
      }), " branch and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "epic/\\{n\\}"
      }), " pattern branches. When running RW on an ", (0,jsx_runtime.jsx)(_components.code, {
        children: "update/ai-dev-kit"
      }), " branch (or similar update/maintenance branches), the validator issues a warning: \"Branch 'update/ai-dev-kit' not in known mapping - cannot validate version\"."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "What should happen vs. what actually happens?"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Expected:"
          }), " The validator should recognize ", (0,jsx_runtime.jsx)(_components.code, {
            children: "update/*"
          }), " branch patterns and either:"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Skip version validation (similar to ", (0,jsx_runtime.jsx)(_components.code, {
              children: "main"
            }), " branch behavior), OR"]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Extract version context from the branch name or configuration, OR"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Provide a configurable mapping for update branches"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Actual:"
          }), " The validator issues a warning and cannot validate version context for update branches, even though these branches are valid for framework update work."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "When does it occur?"
      }), "\nThis occurs whenever RW Step 1 (Branch Safety Check) runs on a branch that matches the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "update/*"
      }), " pattern (e.g., ", (0,jsx_runtime.jsx)(_components.code, {
        children: "update/ai-dev-kit"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "update/workflow-mgt"
      }), ", etc.)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Who is affected?"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Projects using ai-dev-kit frameworks that create ", (0,jsx_runtime.jsx)(_components.code, {
          children: "update/*"
        }), " branches for framework updates"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Users running RW on update/maintenance branches"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Projects that follow the pattern of using ", (0,jsx_runtime.jsx)(_components.code, {
          children: "update/*"
        }), " branches for incorporating framework updates"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "affected-component",
      children: "Affected Component"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Primary Component:"
      }), " Release Workflow (RW) - Branch Validation", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Affected Areas:"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      className: "contains-task-list",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
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
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "Documentation"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "Other: Workflow validation scripts"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Root Cause (if known):"
      }), "\nThe ", (0,jsx_runtime.jsx)(_components.code, {
        children: "parse_branch_epic()"
      }), " function in ", (0,jsx_runtime.jsx)(_components.code, {
        children: "validate_branch_context.py"
      }), " only matches ", (0,jsx_runtime.jsx)(_components.code, {
        children: "epic/\\{n\\}"
      }), " patterns. The validation logic at line 242-243 only handles ", (0,jsx_runtime.jsx)(_components.code, {
        children: "main"
      }), " branch as a special case, and all other non-", (0,jsx_runtime.jsx)(_components.code, {
        children: "epic/*"
      }), " branches trigger the warning."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "steps-to-reproduce",
      children: "Steps to Reproduce"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Create or checkout a branch named ", (0,jsx_runtime.jsx)(_components.code, {
          children: "update/ai-dev-kit"
        }), " (or any ", (0,jsx_runtime.jsx)(_components.code, {
          children: "update/*"
        }), " pattern)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Run Release Workflow (RW) or execute Step 1 manually:", "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-bash",
            children: "python packages/frameworks/workflow\\ mgt/scripts/validation/validate_branch_context.py --strict\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Observe the warning:", "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "⚠️  WARNINGS:\n  - Branch 'update/ai-dev-kit' not in known mapping - cannot validate version\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Expected result:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "No warning, or"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Warning with clear guidance on how update branches should be handled"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Actual result:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Warning is issued, but validation still passes (non-blocking)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "No clear guidance on whether update branches are valid or how they should be configured"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "environment",
      children: "Environment"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Environment:"
      }), " Development", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Version:"
      }), " v0.2.1.6+2 (ai-dev-kit), latest (been-there project)", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Browser/Platform:"
      }), " N/A (CLI tool)", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "OS:"
      }), " macOS (darwin 24.6.0)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Context:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["This was discovered when updating the ", (0,jsx_runtime.jsx)(_components.code, {
          children: "been-there"
        }), " project to the latest ai-dev-kit release"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["The ", (0,jsx_runtime.jsx)(_components.code, {
          children: "update/ai-dev-kit"
        }), " branch pattern is a good practice for incorporating framework updates"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The RW should recognize and support this pattern"
      }), "\n"]
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
          disabled: true
        }), " ", "Critical - System unusable"]
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
          checked: true,
          disabled: true
        }), " ", "Medium - Some functionality affected (validation warning, but workflow continues)"]
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
        children: "Creates confusion about whether update branches are valid"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["May discourage use of ", (0,jsx_runtime.jsx)(_components.code, {
          children: "update/*"
        }), " branch pattern for framework updates"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Reduces confidence in RW validation when working on update branches"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Workaround:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Ignore the warning (validation still passes)"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "main"
        }), " branch for framework updates (not recommended)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "epic/\\{n\\}"
        }), " pattern with a dummy epic number (not recommended)"]
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
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "validate_branch_context.py"
        }), " recognizes ", (0,jsx_runtime.jsx)(_components.code, {
          children: "update/*"
        }), " branch patterns"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "Update branches are handled appropriately (skip validation similar to ", (0,jsx_runtime.jsx)(_components.code, {
          children: "main"
        }), " branch)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Documentation updated to explain update branch handling (pending)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "No warnings issued for valid ", (0,jsx_runtime.jsx)(_components.code, {
          children: "update/*"
        }), " branches"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "Support for other maintenance branch patterns (e.g., ", (0,jsx_runtime.jsx)(_components.code, {
          children: "maintenance/*"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "upgrade/*"
        }), ") considered and implemented"]
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
        }), " ", "Test suite execution"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "Manual testing"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Both"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Fix Verification Status:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      className: "contains-task-list",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "Verified (test suite passed / manual test passed)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Attempted Fix (pending verification)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "fix-attempt-history",
      children: "Fix Attempt History"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Purpose:"
      }), " This section documents all fix attempts for this bug, ensuring that if a bug isn't squashed, the next build can be informed by previous attempts."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "fix-attempts",
      children: "Fix Attempts"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "attempt-1-v02171---2025-12-09",
      children: "Attempt 1: v0.2.1.7+1 - 2025-12-09"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Fix Description:"
      }), "\nAdded support for ", (0,jsx_runtime.jsx)(_components.code, {
        children: "update/*"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "maintenance/*"
      }), ", and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "upgrade/*"
      }), " branch patterns in ", (0,jsx_runtime.jsx)(_components.code, {
        children: "validate_branch_context.py"
      }), ". Implemented ", (0,jsx_runtime.jsx)(_components.code, {
        children: "is_maintenance_branch()"
      }), " function to detect maintenance branch patterns and updated validation logic to skip epic/version enforcement for these branches (similar to ", (0,jsx_runtime.jsx)(_components.code, {
        children: "main"
      }), " branch behavior)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Changes Made:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Added ", (0,jsx_runtime.jsx)(_components.code, {
          children: "is_maintenance_branch()"
        }), " function with regex pattern matching for ", (0,jsx_runtime.jsx)(_components.code, {
          children: "update/*"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "maintenance/*"
        }), ", and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "upgrade/*"
        }), " patterns"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Updated ", (0,jsx_runtime.jsx)(_components.code, {
          children: "validate_branch_context()"
        }), " to detect and handle maintenance branches"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Maintenance branches now skip epic/version validation (no warnings, no enforcement)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Added informational message when maintenance branch is detected: \"Detected maintenance/update branch pattern; skipping epic/version enforcement.\""
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Updated condition to exclude maintenance branches from \"Branch not in known mapping\" warnings"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Verification Status:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      className: "contains-task-list",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "Verified (test suite passed / manual test passed)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Attempted Fix (pending verification)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Fix Failed (bug still present)"]
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
        }), " ", "Test suite execution"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "Manual testing"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Both"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Verification Evidence:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Code changes implemented and tested"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Maintenance branch patterns (", (0,jsx_runtime.jsx)(_components.code, {
          children: "update/*"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "maintenance/*"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "upgrade/*"
        }), ") now recognized"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "No warnings issued for maintenance branches"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Validation logic correctly skips epic/version enforcement for maintenance branches"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Result:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      className: "contains-task-list",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "Bug Fixed"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Bug Partially Fixed (describe partial fix)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Bug Not Fixed (describe why fix didn't work)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Lessons Learned:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Maintenance/update branches are a valid pattern for framework updates"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Similar to ", (0,jsx_runtime.jsx)(_components.code, {
          children: "main"
        }), " branch, these branches should skip epic/version enforcement"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Regex pattern matching is effective for detecting branch patterns"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Next Steps:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Test with actual ", (0,jsx_runtime.jsx)(_components.code, {
          children: "update/ai-dev-kit"
        }), " branch in been-there project"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Consider adding configuration support for custom branch patterns (future enhancement)"
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
        children: "None"
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
          children: "Epic 2 Story 1:"
        }), " RW Agent Execution & Docs (RW validation improvements)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "BR-002:"
        }), " Changelog validator ordering bug (related validation issue)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "intake-decision",
      children: "Intake Decision"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Intake Status:"
      }), " ACCEPTED", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Intake Date:"
      }), " 2025-12-09", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Intake By:"
      }), " AI Assistant"]
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
          checked: true,
          disabled: true
        }), " ", "Story Match Found: Epic 2, Story 1 → Task 7 (new task)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Assigned To:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Epic: Epic 2 - Workflow Management Framework"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Story: Story 1 - RW Agent Execution & Docs"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Task: E02:S01", ":T07", " - Add support for update/maintenance branch patterns in branch validation"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Version: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "0.2.1.7+1"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Kanban Links:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Epic: ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-02/",
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "docs/project-management/kanban/epics/epic-02/epic-02.md"
          })
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Story: ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-02/story-01-rw-agent-execution-and-docs",
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "docs/project-management/kanban/epics/epic-02/story-01-rw-agent-execution-and-docs.md"
          })
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Task: E02:S01", ":T07", " (to be added to Story 1)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "notes",
      children: "Notes"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "User Feedback:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "\"I think incorporating branches is a good way to impl ai-dev-kit updates. However, the RW (from us) really should know about the update/ai-dev-kit branch.\""
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Design Considerations:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Option 1:"
        }), " Treat ", (0,jsx_runtime.jsx)(_components.code, {
          children: "update/*"
        }), " branches like ", (0,jsx_runtime.jsx)(_components.code, {
          children: "main"
        }), " (skip version validation)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Option 2:"
        }), " Add configurable branch mapping in ", (0,jsx_runtime.jsx)(_components.code, {
          children: "rw-config.yaml"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Option 3:"
        }), " Support multiple branch patterns (e.g., ", (0,jsx_runtime.jsx)(_components.code, {
          children: "update/*"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "maintenance/*"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "upgrade/*"
        }), ")"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Option 4:"
        }), " Extract version context from branch name or allow explicit configuration"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Recommended Approach:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Support ", (0,jsx_runtime.jsx)(_components.code, {
          children: "update/*"
        }), " pattern branches"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Allow configuration via ", (0,jsx_runtime.jsx)(_components.code, {
          children: "rw-config.yaml"
        }), " for custom branch patterns"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Document update branch usage in RW documentation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Consider supporting other common maintenance branch patterns"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "references",
      children: "References"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "packages/frameworks/workflow-mgt/scripts/validation/validate_branch_context.py"
        }), " - Branch validation script"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "packages/frameworks/workflow-mgt/docs/documentation/Developer_Docs/vwmp/release-workflow-agent-execution.md"
        }), " - RW agent execution guide"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "packages/frameworks/workflow-mgt/config/rw-config-schema.md"
        }), " - RW configuration schema (may need extension)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Template Usage:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "This BR follows the Kanban Framework BR template"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Intake decision links to Epic 2, Story 1, Task 7"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Fix will be tracked through the RW workflow"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsxs)(_components.em, {
        children: ["This template is part of the Kanban Framework. See ", (0,jsx_runtime.jsx)(_components.code, {
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