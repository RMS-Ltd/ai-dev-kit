"use strict";
(self["webpackChunkportal"] = self["webpackChunkportal"] || []).push([["24180"], {
62570(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_project_management_kanban_fr_br_br_006_missing_migration_support_pre_existing_kanban_md_a67_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-project-management-kanban-fr-br-br-006-missing-migration-support-pre-existing-kanban-md-a67.json
var site_docs_project_management_kanban_fr_br_br_006_missing_migration_support_pre_existing_kanban_md_a67_namespaceObject = JSON.parse('{"id":"project-management/kanban/fr-br/BR-006-missing-migration-support-pre-existing-kanban","title":"Bug Report: Missing Migration Support for Pre-Existing Kanban Structures","description":"Type: Bug Report (BR)","source":"@site/../docs/project-management/kanban/fr-br/BR-006-missing-migration-support-pre-existing-kanban.md","sourceDirName":"project-management/kanban/fr-br","slug":"/project-management/kanban/fr-br/BR-006-missing-migration-support-pre-existing-kanban","permalink":"/ai-dev-kit/docs/project-management/kanban/fr-br/BR-006-missing-migration-support-pre-existing-kanban","draft":false,"unlisted":false,"editUrl":"https://github.com/RMS-Ltd/ai-dev-kit/tree/main/docs/../docs/project-management/kanban/fr-br/BR-006-missing-migration-support-pre-existing-kanban.md","tags":[],"version":"current","frontMatter":{"lifecycle":"evergreen","ttl_days":null,"created_at":"2025-01-27T00:00:00.000Z","expires_at":null,"housekeeping_policy":"keep"},"sidebar":"docsSidebar","previous":{"title":"BR-005-kanban-framework-epic-structure-gap-uat-finding","permalink":"/ai-dev-kit/docs/project-management/kanban/fr-br/BR-005-kanban-framework-epic-structure-gap-uat-finding"},"next":{"title":"Bug Report: Multiple Bugs in Kanban Package Installation Process","permalink":"/ai-dev-kit/docs/project-management/kanban/fr-br/BR-007-multiple-bugs-kanban-package-installation"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ../docs/project-management/kanban/fr-br/BR-006-missing-migration-support-pre-existing-kanban.md


const frontMatter = {
	lifecycle: 'evergreen',
	ttl_days: null,
	created_at: new Date('2025-01-27T00:00:00.000Z'),
	expires_at: null,
	housekeeping_policy: 'keep'
};
const contentTitle = 'Bug Report: Missing Migration Support for Pre-Existing Kanban Structures';

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
  "value": "What is the Bug?",
  "id": "what-is-the-bug",
  "level": 3
}, {
  "value": "What Should Happen vs. What Actually Happens?",
  "id": "what-should-happen-vs-what-actually-happens",
  "level": 3
}, {
  "value": "When Does It Occur?",
  "id": "when-does-it-occur",
  "level": 3
}, {
  "value": "Who is Affected?",
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
  "value": "UAT Scenario: Installing Framework with Pre-Existing Kanban",
  "id": "uat-scenario-installing-framework-with-pre-existing-kanban",
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
  "value": "User Impact",
  "id": "user-impact",
  "level": 3
}, {
  "value": "Business Impact",
  "id": "business-impact",
  "level": 3
}, {
  "value": "Workaround",
  "id": "workaround",
  "level": 3
}, {
  "value": "Acceptance Criteria (Fix Requirements)",
  "id": "acceptance-criteria-fix-requirements",
  "level": 2
}, {
  "value": "Fix 1: Detection Utilities",
  "id": "fix-1-detection-utilities",
  "level": 3
}, {
  "value": "Fix 2: Analysis Utilities",
  "id": "fix-2-analysis-utilities",
  "level": 3
}, {
  "value": "Fix 3: Migration Utilities",
  "id": "fix-3-migration-utilities",
  "level": 3
}, {
  "value": "Fix 4: Installation Modes",
  "id": "fix-4-installation-modes",
  "level": 3
}, {
  "value": "Fix 5: Documentation",
  "id": "fix-5-documentation",
  "level": 3
}, {
  "value": "Fix Attempt History",
  "id": "fix-attempt-history",
  "level": 2
}, {
  "value": "Fix Attempts",
  "id": "fix-attempts",
  "level": 3
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
  "value": "UAT Context",
  "id": "uat-context",
  "level": 3
}, {
  "value": "Related Documents",
  "id": "related-documents",
  "level": 3
}, {
  "value": "Migration Scenarios to Support",
  "id": "migration-scenarios-to-support",
  "level": 3
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
        id: "bug-report-missing-migration-support-for-pre-existing-kanban-structures",
        children: "Bug Report: Missing Migration Support for Pre-Existing Kanban Structures"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Type:"
      }), " Bug Report (BR)", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Submitted:"
      }), " 2025-01-27", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Submitted By:"
      }), " AI Agent (Cursor) acting as user/client for dev-toolkit", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Priority:"
      }), " HIGH", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Severity:"
      }), " HIGH", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Status:"
      }), " FIXED (criteria 1–4 verified v0.4.7.1+1; criteria 5–12 via E04:S07", ":T02", "/T03)"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Implementing Task:"
      }), " ", (0,jsx_runtime.jsxs)(_components.a, {
        href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-04/story-07-migration-support-and-installation-modes/T01-br006-detection-analysis-verification-closure",
        children: ["E04:S07", ":T01"]
      }), " | ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "IPP:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/implementation-cycles/IPP-E04S07T01-br006-migration-support-pre-existing-kanban",
        children: "IPP-E04S07T01"
      }), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "GitHub Issue:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://github.com/RMS-Ltd/ai-dev-kit/issues/2",
        children: "#2"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The Kanban framework installation process assumes a fresh install with no existing Kanban structure. When projects have pre-existing Kanban (or Sprint/Agile) systems, the framework cannot detect, analyze, preserve, or migrate existing work items, creating risk of data loss and adoption barriers."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "description",
      children: "Description"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "what-is-the-bug",
      children: "What is the Bug?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The Kanban framework installation process (", (0,jsx_runtime.jsx)(_components.code, {
        children: "packages/frameworks/kanban/README.md"
      }), ") assumes:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Fresh project with no existing Kanban structure"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Clean slate for Epic/Story/Task setup"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ No migration needed from existing systems"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Reality:"
      }), " Many projects have pre-existing Kanban, Sprint, or Agile structures that need to be preserved and migrated."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "what-should-happen-vs-what-actually-happens",
      children: "What Should Happen vs. What Actually Happens?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Expected Behavior:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "User requests Kanban structure setup: \"I want you to setup our Kanban structure, using the [updated] Kanban pack from ai-dev-kit\""
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Framework detects existing Kanban structure (if present)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Framework analyzes existing work items"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Framework preserves existing work"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Framework migrates existing items to canonical E/S/T structure"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Framework installs/updates structure safely without data loss"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Actual Behavior:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "User requests Kanban structure setup"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Framework assumes fresh install (no detection)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Framework provides templates (assumes clean slate)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Risk of overwriting existing work if installed naively"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "No migration utilities available"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Manual migration required (error-prone)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "when-does-it-occur",
      children: "When Does It Occur?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This bug occurs whenever:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A project has pre-existing Kanban structure"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A project has Sprint-based agile system"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A project has issue tracker integration (GitHub Issues, Jira)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A project is updating from older framework version"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "An agent/user tries to install framework over existing structure"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "who-is-affected",
      children: "Who is Affected?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Primary Affected:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Projects with existing Kanban systems"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Projects migrating from Sprint-based systems"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Projects with issue tracker integration"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Projects updating framework versions"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "AI agents automating Kanban setup"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Secondary Affected:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Framework adoption (barriers to entry)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Framework credibility (appears incomplete)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "User experience (frustration with manual migration)"
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
        }), " ", "Detection Mechanisms"]
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
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Root Cause:"
      }), "\nThe framework installation process was designed for fresh installs only. No consideration was given to projects with pre-existing Kanban structures. The framework lacks:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Detection utilities for existing structures"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Analysis tools for mapping existing work"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Migration utilities for converting existing items"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Installation modes for different scenarios"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "steps-to-reproduce",
      children: "Steps to Reproduce"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "uat-scenario-installing-framework-with-pre-existing-kanban",
      children: "UAT Scenario: Installing Framework with Pre-Existing Kanban"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Context:"
      }), " dev-toolkit project has pre-existing Kanban structure"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Existing State:"
          }), " Project has Epic 1 with 2 complete stories"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Epic 1: Tool Management and Registry System"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Story 1: Tool Management System (COMPLETE)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Story 2: Tool Distribution Strategy (COMPLETE)"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "User Request:"
          }), " \"I want you to setup our Kanban structure, using the [updated] Kanban pack from ai-dev-kit\""]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Agent Action:"
          }), " Agent reads framework documentation"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Reads ", (0,jsx_runtime.jsx)(_components.code, {
              children: "packages/frameworks/kanban/README.md"
            })]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Finds installation steps assume fresh install"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "No detection utilities found"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "No migration utilities found"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Agent Assumption:"
          }), " Agent assumes fresh install"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "No way to detect existing structure"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "No way to preserve existing work"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Risk of overwriting Epic 1"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "User Discovery:"
          }), " User identifies gap"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Framework doesn't handle pre-existing structures"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "No migration path available"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Manual migration required"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Expected Result:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Framework detects existing Epic 1"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Framework preserves existing work"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Framework migrates existing items to canonical structure"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Framework installs/updates safely"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Actual Result:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Framework cannot detect existing structure"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Framework cannot preserve existing work"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Framework cannot migrate existing items"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Risk of data loss if installed naively"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "environment",
      children: "Environment"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Environment:"
      }), " Development (Framework Installation)", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Version:"
      }), " Kanban Framework v2.0.0 (as of 2025-12-10)", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Repository:"
      }), " earlution/dev-toolkit (consuming ai-dev-kit framework)", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Framework Source:"
      }), " RMS-Ltd/ai-dev-kit", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Framework Path:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "packages/frameworks/kanban/"
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Affected Files:"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "packages/frameworks/kanban/README.md"
        }), " (installation process)"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Missing: Detection utilities"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Missing: Migration utilities"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Missing: Installation mode selection"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "impact",
      children: "Impact"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "user-impact",
      children: "User Impact"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Severity:"
      }), " HIGH"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Impact Description:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Critical:"
        }), " Risk of overwriting existing work during installation"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "High:"
        }), " No migration path from existing Kanban systems"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "High:"
        }), " Manual migration required (error-prone, time-consuming)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Medium:"
        }), " Framework adoption barriers for projects with existing structures"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Medium:"
        }), " Confusion about installation process"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "User Experience:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Users with existing Kanban cannot safely adopt framework"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Users must manually migrate (risky, time-consuming)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Framework appears incomplete compared to user needs"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Installation process doesn't match real-world scenarios"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "business-impact",
      children: "Business Impact"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Framework Adoption:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Projects with existing Kanban may abandon framework"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Framework appears incomplete for real-world use"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Framework credibility affected by missing migration support"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Framework Evolution:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Missing critical use case (pre-existing structures)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Framework doesn't address common scenario"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Adoption barriers reduce framework value"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "workaround",
      children: "Workaround"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Current Workaround:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Manually backup existing structure"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Manually analyze existing work items"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Manually migrate existing items to canonical structure"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Manually preserve forensic markers and work history"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Manually install framework around existing structure"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Workaround Limitations:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Time-consuming and error-prone"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Requires deep framework knowledge"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Risk of data loss"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Doesn't solve root cause"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Not scalable across projects"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "acceptance-criteria-fix-requirements",
      children: "Acceptance Criteria (Fix Requirements)"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "fix-1-detection-utilities",
      children: "Fix 1: Detection Utilities"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      className: "contains-task-list",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.input, {
            type: "checkbox",
            checked: true,
            disabled: true
          }), " ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Criterion 1:"
          }), " Framework can detect existing Kanban structures"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Scan for epic directories"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Detect epic documents"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Identify story documents"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Report findings"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.input, {
            type: "checkbox",
            checked: true,
            disabled: true
          }), " ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Criterion 2:"
          }), " Detection utility created: ", (0,jsx_runtime.jsx)(_components.code, {
            children: "detect_existing_structure.py"
          })]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Scans ", (0,jsx_runtime.jsx)(_components.code, {
              children: "docs/project-management/kanban/epics/"
            }), " (or configured path)"]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Detects epic documents"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Detects story documents"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Generates detection report"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "fix-2-analysis-utilities",
      children: "Fix 2: Analysis Utilities"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      className: "contains-task-list",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.input, {
            type: "checkbox",
            checked: true,
            disabled: true
          }), " ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Criterion 3:"
          }), " Framework can analyze existing structure"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Map existing items to E/S/T structure"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Identify conflicts"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Generate migration plan"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.input, {
            type: "checkbox",
            checked: true,
            disabled: true
          }), " ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Criterion 4:"
          }), " Analysis utility created: ", (0,jsx_runtime.jsx)(_components.code, {
            children: "analyze_structure.py"
          })]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Maps existing epics to canonical format"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Maps existing stories to canonical format"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Maps existing tasks to canonical format"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Identifies conflicts and gaps"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "fix-3-migration-utilities",
      children: "Fix 3: Migration Utilities"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      className: "contains-task-list",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.input, {
            type: "checkbox",
            checked: true,
            disabled: true
          }), " ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Criterion 5:"
          }), " Framework can migrate existing work"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Preserve existing content"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Convert to canonical format"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Preserve forensic markers"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Preserve work history"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.input, {
            type: "checkbox",
            checked: true,
            disabled: true
          }), " ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Criterion 6:"
          }), " Migration utility created: ", (0,jsx_runtime.jsx)(_components.code, {
            children: "migrate_structure.py"
          })]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Backs up existing structure"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Migrates epics to canonical format"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Migrates stories to canonical format"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Migrates tasks to canonical format"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Preserves forensic markers"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "fix-4-installation-modes",
      children: "Fix 4: Installation Modes"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      className: "contains-task-list",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.input, {
            type: "checkbox",
            checked: true,
            disabled: true
          }), " ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Criterion 7:"
          }), " Framework supports multiple installation modes"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Fresh Install (current behavior)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Migration Install (detect and migrate)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Update Install (update existing framework)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Hybrid Install (preserve project epics, install framework epics)"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.input, {
            type: "checkbox",
            checked: true,
            disabled: true
          }), " ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Criterion 8:"
          }), " Installation mode selection implemented"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Interactive mode selection"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Automatic mode detection"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Mode-specific installation paths"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "fix-5-documentation",
      children: "Fix 5: Documentation"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      className: "contains-task-list",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Criterion 9:"
        }), " Installation guide updated with migration scenarios"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Criterion 10:"
        }), " Migration utilities documented"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Criterion 11:"
        }), " Installation modes documented"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Criterion 12:"
        }), " Migration examples provided"]
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
        }), " ", "Test suite execution (if applicable)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
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
          checked: true,
          disabled: true
        }), " ", "Documentation review"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "Framework installation test with pre-existing structure"]
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
        }), " ", "Verified (criteria 1–4 — detection/analysis utilities; ", (0,jsx_runtime.jsx)(_components.code, {
          children: "v0.4.7.1+1"
        }), " closure RW 2026-06-05)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "Criteria 5–12 verified via E04:S07", ":T02", " (", (0,jsx_runtime.jsx)(_components.code, {
          children: "v0.4.7.2+1"
        }), ") and E04:S07", ":T03", " (", (0,jsx_runtime.jsx)(_components.code, {
          children: "v0.4.7.3+1"
        }), ")"]
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
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.em, {
        children: "No fix attempts yet. This is the initial bug report."
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "dependencies",
      children: "Dependencies"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Blocks:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Safe framework adoption for projects with existing Kanban"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Migration from Sprint-based systems"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Migration from issue trackers"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Framework updates without data loss"
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
          children: "FR-007:"
        }), " Migration Utilities and Installation Modes (proposed solution) - See ", (0,jsx_runtime.jsx)(_components.code, {
          children: "FR-007-migration-utilities-and-installation-modes.md"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "UXR-001:"
        }), " Migration User Experience Research (validates approach) - See ", (0,jsx_runtime.jsx)(_components.code, {
          children: "UXR-001-migration-user-experience-research.md"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Framework: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "packages/frameworks/kanban/README.md"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Gap Analysis: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/project-management/kanban/_backup-pre-migration/INSTALLATION_GAP_ANALYSIS.md"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "intake-decision",
      children: "Intake Decision"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Intake Status:"
      }), " ACCEPTED", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Intake Date:"
      }), " 2025-12-10", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Intake By:"
      }), " AI Agent (Cursor)"]
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
        }), " ", "Story Match Found: Epic 4, Story 7 → Task 1"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "New Story Created: [Epic X, Story Y] → Task 1"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "New Epic Created: [Epic X, Story 1, Task 1]"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Assigned To:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Epic: Epic 4 (Kanban Framework)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Story: Story 7 (Migration Support and Installation Modes) - TO BE CREATED"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Task: Task 1 (BR-006: Detection utilities for existing Kanban structures)"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Version: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "[TBD]"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Kanban Links:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Epic: ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-04/",
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "epic-04.md"
          })
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Story: ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-04/story-07-migration-support-and-installation-modes",
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "story-07-migration-support-and-installation-modes.md"
          })
        }), " - TO BE CREATED"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Task: [TBD]"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "notes",
      children: "Notes"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "uat-context",
      children: "UAT Context"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["This bug report is the result of ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "User Acceptance Testing (UAT)"
      }), " performed during migration of dev-toolkit's pre-existing Kanban structure to the updated ai-dev-kit framework."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Migration Scenario:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Project:"
        }), " dev-toolkit"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Existing Structure:"
        }), " Epic 1 with 2 complete stories"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "User Action:"
        }), " Requested Kanban structure setup"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Expected:"
        }), " Framework detects and migrates existing structure"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Actual:"
        }), " Framework cannot detect or migrate existing structure"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "related-documents",
      children: "Related Documents"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Gap Analysis:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/project-management/kanban/_backup-pre-migration/INSTALLATION_GAP_ANALYSIS.md"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Migration Plan:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/project-management/kanban/_backup-pre-migration/MIGRATION_PLAN.md"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Task Migration:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/project-management/kanban/_backup-pre-migration/TASK_MIGRATION_MAP.md"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "migration-scenarios-to-support",
      children: "Migration Scenarios to Support"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Simple Kanban Migration:"
        }), " Basic Kanban board → E/S/T structure"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Sprint-Based Migration:"
        }), " Sprint system → E/S/T structure"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Issue Tracker Migration:"
        }), " GitHub Issues/Jira → E/S/T structure"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Mixed Structure Migration:"
        }), " Mix of systems → E/S/T structure"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Framework Update Migration:"
        }), " Older framework version → New structure"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "references",
      children: "References"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Framework README:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "packages/frameworks/kanban/README.md"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Epic Template:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "packages/frameworks/kanban/templates/EPIC_TEMPLATE.md"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Story Template:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "packages/frameworks/kanban/templates/STORY_TEMPLATE.md"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Gap Analysis:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/project-management/kanban/_backup-pre-migration/INSTALLATION_GAP_ANALYSIS.md"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Related FR:"
        }), " Migration Utilities and Installation Modes (FR-007)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Related UXR:"
        }), " Migration User Experience Research (UXR-001)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "GitHub Issue:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://github.com/RMS-Ltd/ai-dev-kit/issues/2",
          children: "#2"
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
        children: "UAT findings documented as bug report"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Comprehensive gap analysis included"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Clear acceptance criteria provided"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Fix requirements specified"
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