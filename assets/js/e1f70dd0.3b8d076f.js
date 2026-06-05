"use strict";
(self["webpackChunkportal"] = self["webpackChunkportal"] || []).push([["62985"], {
75909(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_architecture_standards_and_adrs_ultimate_canonical_kanban_structure_md_e1f_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-architecture-standards-and-adrs-ultimate-canonical-kanban-structure-md-e1f.json
var site_docs_architecture_standards_and_adrs_ultimate_canonical_kanban_structure_md_e1f_namespaceObject = JSON.parse('{"id":"architecture/standards-and-adrs/ultimate-canonical-kanban-structure","title":"Ultimate Canonical Kanban Structure","description":"Purpose: Definitive specification for the canonical Kanban E/S/T (Epic/Story/Task) structure","source":"@site/../docs/architecture/standards-and-adrs/ultimate-canonical-kanban-structure.md","sourceDirName":"architecture/standards-and-adrs","slug":"/architecture/standards-and-adrs/ultimate-canonical-kanban-structure","permalink":"/ai-dev-kit/docs/architecture/standards-and-adrs/ultimate-canonical-kanban-structure","draft":false,"unlisted":false,"editUrl":"https://github.com/RMS-Ltd/ai-dev-kit/tree/main/docs/../docs/architecture/standards-and-adrs/ultimate-canonical-kanban-structure.md","tags":[],"version":"current","frontMatter":{"lifecycle":"evergreen","ttl_days":null,"created_at":"2025-12-18T01:00:00.000Z","expires_at":null,"housekeeping_policy":"keep"},"sidebar":"docsSidebar","previous":{"title":"Ultimate Canonical Cursorrules Structure","permalink":"/ai-dev-kit/docs/architecture/standards-and-adrs/ultimate-canonical-cursorrules-structure"},"next":{"title":"Ultimate Canonical docs/documentation Structure","permalink":"/ai-dev-kit/docs/architecture/standards-and-adrs/ultimate-canonical-kb-structure"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ../docs/architecture/standards-and-adrs/ultimate-canonical-kanban-structure.md


const frontMatter = {
	lifecycle: 'evergreen',
	ttl_days: null,
	created_at: new Date('2025-12-18T01:00:00.000Z'),
	expires_at: null,
	housekeeping_policy: 'keep'
};
const contentTitle = 'Ultimate Canonical Kanban Structure';

const assets = {

};



const toc = [{
  "value": "Executive Summary",
  "id": "executive-summary",
  "level": 2
}, {
  "value": "Complete Canonical Epic/Story/Task Inventory",
  "id": "complete-canonical-epicstorytask-inventory",
  "level": 2
}, {
  "value": "Pre-Design Phase",
  "id": "pre-design-phase",
  "level": 3
}, {
  "value": "Epic 1: Project Foundation and Setup",
  "id": "epic-1-project-foundation-and-setup",
  "level": 4
}, {
  "value": "Design Phase",
  "id": "design-phase",
  "level": 3
}, {
  "value": "Epic 2: Kanban Framework",
  "id": "epic-2-kanban-framework",
  "level": 4
}, {
  "value": "Epic 3: FR/BR/UXR Management",
  "id": "epic-3-frbruxr-management",
  "level": 4
}, {
  "value": "Epic 4: Architecture Design",
  "id": "epic-4-architecture-design",
  "level": 4
}, {
  "value": "Epic 5: Data Management and Database",
  "id": "epic-5-data-management-and-database",
  "level": 4
}, {
  "value": "Epic 6: Testing and Quality Assurance",
  "id": "epic-6-testing-and-quality-assurance",
  "level": 4
}, {
  "value": "Epic 7: Implementation",
  "id": "epic-7-implementation",
  "level": 4
}, {
  "value": "Epic 8: Documentation",
  "id": "epic-8-documentation",
  "level": 4
}, {
  "value": "Ancillary Epics",
  "id": "ancillary-epics",
  "level": 3
}, {
  "value": "Epic 9: Process Automation and CI/CD",
  "id": "epic-9-process-automation-and-cicd",
  "level": 4
}, {
  "value": "Epic 10: Security",
  "id": "epic-10-security",
  "level": 4
}, {
  "value": "Design Decisions (Based on User Feedback)",
  "id": "design-decisions-based-on-user-feedback",
  "level": 2
}, {
  "value": "Epic Numbering Summary",
  "id": "epic-numbering-summary",
  "level": 2
}, {
  "value": "Directory Structure Specification",
  "id": "directory-structure-specification",
  "level": 2
}, {
  "value": "Canonical Path Structure",
  "id": "canonical-path-structure",
  "level": 3
}, {
  "value": "Naming Conventions",
  "id": "naming-conventions",
  "level": 2
}, {
  "value": "Epic Naming",
  "id": "epic-naming",
  "level": 3
}, {
  "value": "Story Naming",
  "id": "story-naming",
  "level": 3
}, {
  "value": "Task Naming",
  "id": "task-naming",
  "level": 3
}, {
  "value": "Validation Rules",
  "id": "validation-rules",
  "level": 2
}, {
  "value": "Epic Validation",
  "id": "epic-validation",
  "level": 3
}, {
  "value": "Story Validation",
  "id": "story-validation",
  "level": 3
}, {
  "value": "Task Validation",
  "id": "task-validation",
  "level": 3
}, {
  "value": "Critical Requirements",
  "id": "critical-requirements",
  "level": 2
}, {
  "value": "Epic 9 Mismatch Fix",
  "id": "epic-9-mismatch-fix",
  "level": 3
}, {
  "value": "Installer Validation",
  "id": "installer-validation",
  "level": 3
}, {
  "value": "Clear Separation",
  "id": "clear-separation",
  "level": 3
}, {
  "value": "Implementation",
  "id": "implementation",
  "level": 2
}, {
  "value": "Installation",
  "id": "installation",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    br: "br",
    code: "code",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    h4: "h4",
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
        id: "ultimate-canonical-kanban-structure",
        children: "Ultimate Canonical Kanban Structure"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Purpose:"
      }), " Definitive specification for the canonical Kanban E/S/T (Epic/Story/Task) structure", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Status:"
      }), " COMPLETE", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Version:"
      }), " 2.0.0", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Part of:"
      }), " E6:S06", ":T06", " – Cross-project meta-analysis and canonical framework design", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Supersedes:"
      }), " v1.0.0"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Based on:"
      }), " Comprehensive meta-analysis of 10 projects (9 client implementations + ai-dev-kit source) and user feedback"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "executive-summary",
      children: "Executive Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["This document ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "defines the ultimate canonical Kanban structure"
      }), " for ADK framework implementations. This is the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "definitive specification"
      }), " that all projects should adopt."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "The Ultimate Canonical Kanban Structure consists of:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Pre-Design Phase (E1):"
        }), " Project foundation, workflow management, versioning"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Design Phase (E2-E8):"
        }), " Kanban, FR/BR/UXR, Architecture, Data, Testing, Implementation, Documentation"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Ancillary Epics (E9+):"
        }), " CI/CD, Security, and project-specific epics"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Key Structure:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "E1: Project Foundation (Pre-Design) - includes workflow and versioning"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "E2: Kanban Framework (separate epic)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "E3: FR/BR/UXR Management (consolidated)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "E4: Architecture Design (comprehensive design specification)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "E5: Data Management and Database"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "E6: Testing and Quality Assurance (TDD approach)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "E7: Implementation (includes codebase maintenance and refactoring)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "E8: Documentation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "E9: Process Automation and CI/CD"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "E10: Security (enhanced with project security)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "complete-canonical-epicstorytask-inventory",
      children: "Complete Canonical Epic/Story/Task Inventory"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pre-design-phase",
      children: "Pre-Design Phase"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "epic-1-project-foundation-and-setup",
      children: "Epic 1: Project Foundation and Setup"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Purpose:"
      }), " Pre-design phase foundation work.", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Scope:"
      }), " Project setup, workflow management, versioning.", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Status:"
      }), " Core Framework Epic (always installed)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Canonical Stories:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Story 001: Project Foundation and Setup"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "T01: Define project structure and directory layout"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "T02: Set up version control and repository configuration"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "T03: Configure development environment and tooling"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "T04: Create initial project documentation (README, CONTRIBUTING, LICENSE)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "T05: Set up build system and dependency management"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "T06: Configure code quality tools (linters, formatters)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "T07: Establish coding standards and conventions"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Story 002: Workflow Management Framework"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "T01: Document existing workflow patterns"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "T02: Define standard workflow templates"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "T03: Create workflow execution guidelines"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "T04: Document workflow integration points"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "T05: Identify automatable workflows"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "T06: Implement workflow automation scripts"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "T07: Create workflow execution tools"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "T08: Document automation usage"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Story 003: Versioning Framework"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "T01: Define versioning schema (e.g., RC.EPIC.STORY.TASK+BUILD)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "T02: Document versioning policy"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "T03: Create version file structure"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "T04: Set up version tracking tools"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "T05: Integrate versioning with release workflow"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "T06: Create version bump automation"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "T07: Set up changelog generation"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "T08: Document version management process"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "design-phase",
      children: "Design Phase"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "epic-2-kanban-framework",
      children: "Epic 2: Kanban Framework"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Purpose:"
      }), " Kanban system implementation and governance.", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Scope:"
      }), " Kanban policies, templates, intake processes, and Kanban-related tooling.", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Status:"
      }), " Core Framework Epic (always installed)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Canonical Stories:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Story 001: Kanban Board Setup"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "T01: Create Kanban board structure"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "T02: Define epic/story/task hierarchy"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "T03: Set up Kanban policies and governance"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "T04: Configure Kanban tooling"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Story 002: FR/BR Intake Process"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "T01: Design FR/BR intake workflow"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "T02: Create FR/BR templates"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "T03: Implement intake automation"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "T04: Document intake process"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "epic-3-frbruxr-management",
      children: "Epic 3: FR/BR/UXR Management"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Purpose:"
      }), " Feature Request, Bug Report, and User Experience Research management.", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Scope:"
      }), " FR/BR intake, processing, UXR, prioritization.", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Status:"
      }), " Core Framework Epic (always installed)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Canonical Stories:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Story 001: FR Intake and Processing"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "T01: Design FR intake workflow"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "T02: Create FR processing automation"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "T03: Integrate FR intake with Kanban"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "T04: Document FR intake process"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "T05: Design FR prioritization framework"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "T06: Create FR planning templates"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "T07: Integrate prioritization with Kanban board"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "T08: Document prioritization process"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "T09: Document FR implementation patterns"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "T10: Create implementation templates"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "T11: Define testing requirements for FRs"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "T12: Document FR completion criteria"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Story 002: BR Intake and Processing"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "T01: Design BR intake and triage workflow"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "T02: Create BR triage automation"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "T03: Integrate BR intake with Kanban"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "T04: Document BR intake and triage process"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "T05: Design BR prioritization framework"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "T06: Create BR assignment templates"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "T07: Integrate prioritization with Kanban board"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "T08: Document prioritization and assignment process"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "T09: Document bug fix patterns"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "T10: Create bug fix templates"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "T11: Define testing requirements for bug fixes"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "T12: Document bug fix completion criteria"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Story 003: User Experience Research (UXR)"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "T01: Define research objectives and questions"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "T02: Recruit research participants"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "T03: Conduct user interviews"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "T04: Conduct user surveys/questionnaires"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "T05: Analyze research data and synthesize findings"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "T06: Create user personas"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "T07: Document research findings and insights"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "T08: Design usability test scenarios"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "T09: Recruit test participants"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "T10: Conduct usability testing sessions"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "T11: Analyze usability test results"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "T12: Identify usability issues and pain points"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "T13: Create usability test reports"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "T14: Document usability recommendations"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "T15: Design user feedback collection methods"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "T16: Set up feedback collection channels"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "T17: Implement feedback collection tools"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "T18: Create feedback analysis workflow"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "T19: Analyze feedback patterns and trends"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "T20: Convert feedback into actionable insights"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "T21: Document feedback analysis process"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "T22: Create user journey maps"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "T23: Identify touchpoints and interactions"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "T24: Identify pain points and opportunities"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "T25: Design improved user flows"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "T26: Create experience prototypes"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "T27: Validate experience designs with users"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "T28: Document user journey insights"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "T29: Synthesize research findings across studies"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "T30: Create UX insights reports"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "T31: Develop UX recommendations and action items"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "T32: Prioritize UX improvements"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "T33: Communicate insights to product and engineering teams"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "T34: Track implementation of UX recommendations"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "T35: Document UX insights and learnings"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "epic-4-architecture-design",
      children: "Epic 4: Architecture Design"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Purpose:"
      }), " System architecture design and refactoring.", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Scope:"
      }), " Architecture design, patterns, refactoring, technical decisions.", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Status:"
      }), " Core Framework Epic (always installed)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Canonical Stories:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Story 001: Comprehensive Architecture Design and Specification"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "This story forms the backbone and abstract plan for the design phase. The output should enable any competent programmer/vibe-coder to implement a system that satisfies requirements using the deliverables from E4S01. All tasks follow SOLID software engineering principles."
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "T01: Requirements Engineering"
              })
            }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "Elicit and document functional requirements"
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "Elicit and document non-functional requirements"
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "Prioritize requirements (MoSCow: must-have, should-have, could-have)"
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "Create requirements traceability matrix"
              }), "\n"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "T02: Use Case Modelling"
              })
            }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "Identify actors and stakeholders"
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "Define use cases for all major system interactions"
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "Create use case diagrams (UML)"
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "Document use case specifications (preconditions, postconditions, main flow, alternate flows, exceptions)"
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "Validate use cases with stakeholders"
              }), "\n"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "T03: Domain Analysis and Noun-Verb Analysis"
              })
            }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "Perform noun-verb analysis of requirements and ADRs"
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "Identify domain entities (nouns) and operations (verbs)"
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "Create domain model (entity-relationship model)"
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "Identify domain boundaries and bounded contexts"
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "Document domain vocabulary and glossary"
              }), "\n"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "T04: Top-Down High-Level System View"
              })
            }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "Create system context diagram"
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "Define system boundaries and external interfaces"
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "Identify major subsystems and components"
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "Create high-level system architecture diagram"
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "Document system-level responsibilities and interactions"
              }), "\n"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "T05: Data Flow Diagrams (DFDs)"
              })
            }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "Create Level 0 (Context) DFD"
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "Create Level 1 DFD (major processes)"
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "Create Level 2+ DFDs (detailed processes as needed)"
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "Document data flows, data stores, and processes"
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "Validate data flows with stakeholders"
              }), "\n"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "T06: UML Design Models"
              })
            }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "Create class diagrams (domain model, design model)"
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "Create sequence diagrams for key interactions"
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "Create state diagrams for stateful components"
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "Create component diagrams (system structure)"
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "Create deployment diagrams (if applicable)"
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "Create activity diagrams for complex workflows"
              }), "\n"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "T07: Object and Interface Specifications"
              })
            }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["Define object responsibilities using SOLID principles:", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
                  children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                    children: "Single Responsibility Principle (SRP)"
                  }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                    children: "Open/Closed Principle (OCP)"
                  }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                    children: "Liskov Substitution Principle (LSP)"
                  }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                    children: "Interface Segregation Principle (ISP)"
                  }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                    children: "Dependency Inversion Principle (DIP)"
                  }), "\n"]
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "Specify contracts and interfaces for all components"
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "Define preconditions, postconditions, and invariants"
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "Document interface contracts (input/output specifications)"
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "Create interface documentation (API contracts)"
              }), "\n"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "T08: Architecture Patterns and Design Decisions"
              })
            }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "Select and document architecture patterns (e.g., MVC, Repository, Factory, Strategy)"
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "Create architecture decision records (ADRs)"
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "Document design rationale and trade-offs"
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "Define design constraints and assumptions"
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "Document architectural principles and guidelines"
              }), "\n"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "T09: Integration Points and System Boundaries"
              })
            }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "Define integration points between subsystems"
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "Specify external system interfaces"
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "Document integration protocols and data formats"
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "Define system boundaries and responsibilities"
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "Create integration architecture diagrams"
              }), "\n"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "T10: Design Validation and Review"
              })
            }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "Review design against requirements (traceability)"
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "Validate SOLID principles application"
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "Conduct design review with stakeholders"
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "Validate design completeness and consistency"
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "Document design review findings and updates"
              }), "\n"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "T11: Design Documentation and Deliverables"
              })
            }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "Create comprehensive design specification document"
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "Document design assumptions and constraints"
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "Create design glossary and terminology"
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "Generate design artifacts index"
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "Ensure design is implementation-ready (any competent programmer can implement from this)"
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Story 002: Architecture Refactoring"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "T01: Identify architecture improvement opportunities"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "T02: Design refactoring approach"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "T03: Implement architecture refactoring"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "T04: Validate refactored architecture"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "T05: Update architecture documentation"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "T06: Document refactoring learnings"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Note:"
      }), " Architecture refactoring stories are in E4. Implementation refactoring stories are in E7."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "epic-5-data-management-and-database",
      children: "Epic 5: Data Management and Database"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Purpose:"
      }), " Data management, database design, and data operations.", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Scope:"
      }), " Database schema, migrations, data access layer, data validation, data integrity.", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Status:"
      }), " Core Framework Epic (always installed)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Canonical Stories:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Story 001: Database Schema Design"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "T01: Design database schema"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "T02: Create entity-relationship diagrams"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "T03: Implement database migrations"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "T04: Set up database indexes"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "T05: Define database constraints"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "T06: Create seed data scripts"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Story 002: Data Access Layer"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "T01: Design data access architecture"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "T02: Implement repository pattern"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "T03: Create query builders/ORMs"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "T04: Implement data validation"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "T05: Add transaction management"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "T06: Create data access utilities"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Story 003: Data Migration and Seeding"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "T01: Create migration framework"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "T02: Implement migration scripts"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "T03: Create seed data system"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "T04: Add migration rollback capability"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "T05: Document migration process"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "epic-6-testing-and-quality-assurance",
      children: "Epic 6: Testing and Quality Assurance"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Purpose:"
      }), " Testing infrastructure, test coverage, and quality assurance processes (TDD approach).", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Scope:"
      }), " Unit tests, integration tests, E2E tests, test automation, quality metrics.", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Status:"
      }), " Core Framework Epic (always installed)"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Rationale:"
      }), " Once we have architecture (E4), we can design tests using TDD approach."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Canonical Stories:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Story 001: Testing Infrastructure Setup"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "T01: Choose and set up testing framework"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "T02: Configure test runners"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "T03: Set up test data management"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "T04: Create test utilities and helpers"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "T05: Configure test coverage reporting"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Story 002: Test Design and Implementation"
          }), " (TDD approach)"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "T01: Design test scenarios based on architecture"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "T02: Write unit tests for core functionality"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "T03: Write integration tests"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "T04: Write end-to-end tests"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "T05: Add test fixtures and mocks"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "T06: Implement test data factories"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Story 003: Test Automation and CI/CD Integration"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "T01: Set up automated test execution"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "T02: Integrate tests with CI/CD pipeline"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "T03: Add test reporting and notifications"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "T04: Set up test coverage thresholds"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "T05: Document testing process"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "epic-7-implementation",
      children: "Epic 7: Implementation"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Purpose:"
      }), " Feature implementation, codebase maintenance, and refactoring.", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Scope:"
      }), " Feature implementation, code quality, maintenance, implementation refactoring.", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Status:"
      }), " Core Framework Epic (always installed)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Canonical Stories:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Story 001: Feature Implementation"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "T01: Implement features based on architecture (E4) and tests (E6)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "T02: Follow TDD approach (tests first, then implementation)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "T03: Implement business logic"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "T04: Integrate with data layer (E5)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "T05: Implement API endpoints (if applicable)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "T06: Implement UI components (if applicable)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "T07: Add error handling"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "T08: Add logging"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Story 002: Codebase Maintenance"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "T01: Set up IDE issue tracking"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "T02: Create maintenance task workflow"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "T03: Define maintenance priorities"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "T04: Document maintenance process"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "T05: Address IDE-flagged issues (errors, warnings, info)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "T06: Define code review standards"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "T07: Create code review checklist"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "T08: Set up code review automation"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "T09: Document code review process"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "T10: Set up code quality metrics"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "T11: Create quality monitoring dashboards"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "T12: Define quality thresholds"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "T13: Document quality improvement process"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Story 003: Implementation Refactoring"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "T01: Identify implementation improvement opportunities"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "T02: Design refactoring approach"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "T03: Implement code refactoring"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "T04: Validate refactored code"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "T05: Update implementation documentation"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "T06: Document refactoring learnings"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Story 004: Post-Implementation Review (PIR)"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "T01: Conduct post-implementation review"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "T02: Document implementation outcomes"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "T03: Identify lessons learned"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "T04: Document best practices"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "T05: Update implementation patterns"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "T06: Share learnings with team"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Note:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Architecture refactoring is in E4 (Story 002)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implementation refactoring is in E7 (Story 003)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "epic-8-documentation",
      children: "Epic 8: Documentation"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Purpose:"
      }), " Project documentation, user guides, and developer documentation.", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Scope:"
      }), " API documentation, user manuals, developer guides, architecture documentation.", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Status:"
      }), " Core Framework Epic (always installed)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Canonical Stories:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Story 001: Developer Documentation"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "T01: Create architecture documentation"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "T02: Document code structure and patterns"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "T03: Create setup and installation guides"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "T04: Document development workflow"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "T05: Create contribution guidelines"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "T06: Add code examples and tutorials"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Story 002: User Documentation"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "T01: Create user manual/guide"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "T02: Document features and functionality"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "T03: Create FAQ section"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "T04: Add troubleshooting guides"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "T05: Create video tutorials (optional)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "T06: Add in-app help/tooltips"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Story 003: API Documentation"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "T01: Generate API documentation (OpenAPI/Swagger)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "T02: Document API endpoints"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "T03: Add API usage examples"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "T04: Create API integration guides"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "T05: Document API versioning"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "ancillary-epics",
      children: "Ancillary Epics"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "epic-9-process-automation-and-cicd",
      children: "Epic 9: Process Automation and CI/CD"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Purpose:"
      }), " Establish automated, robust development workflows.", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Scope:"
      }), " CI/CD pipelines, pre-commit hooks, automated rule enforcement, testing infrastructure, quality gates.", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Status:"
      }), " Core Framework Epic (always installed)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Canonical Stories:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Story 001: CI/CD Pipeline Setup"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "T01: Configure build/test pipelines"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "T02: Add artifact publishing"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "T03: Add quality gate enforcement"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "T04: Document pipeline operations"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Story 002: Automated Rule Enforcement (Pre-commit Hooks)"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "T01: Add formatters/linters to hooks"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "T02: Add changelog/version checks"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "T03: Add policy checks (commit msg, branch rules)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "T04: Document hook usage"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Story 003: Testing Infrastructure"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "T01: Define coverage thresholds"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "T02: Add test fixtures and factories"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "T03: Parallelize tests"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "T04: Add flaky-test detection"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Story 004: Quality Gates and Branch Protection"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "T01: Define protected files and rules"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "T02: Require status checks and reviews"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "T03: Enforce changelog/version checks"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "T04: Monitor gate effectiveness"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Story 005: Automated Dependency Management"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "T01: Add dependency scanning"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "T02: Automate upgrade PRs"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "T03: Add vulnerability monitoring"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "T04: Document upgrade playbooks"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "epic-10-security",
      children: "Epic 10: Security"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Purpose:"
      }), " Security measures, vulnerability management, and security best practices.", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Scope:"
      }), " Security audits, vulnerability scanning, security policies, encryption, secure coding, project security (Dependabot, etc.).", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Status:"
      }), " Ancillary Epic (project-specific, canonical pattern)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Canonical Stories:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Story 001: Security Infrastructure"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "T01: Conduct security audit"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "T02: Implement encryption (data at rest/transit)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "T03: Set up security headers"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "T04: Configure HTTPS/SSL"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "T05: Implement secure session management"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "T06: Add security middleware"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Story 002: Vulnerability Management"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "T01: Set up vulnerability scanning"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "T02: Implement dependency security checks"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "T03: Set up Dependabot (or equivalent)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "T04: Create security update process"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "T05: Document security incident response"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "T06: Add security testing"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Story 003: Security Best Practices"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "T01: Create security policy document"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "T02: Implement secure coding guidelines"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "T03: Add security code review checklist"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "T04: Conduct security training"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "T05: Document security procedures"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Story 004: Dependabot Management"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "T01: Review Dependabot pull requests"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "T02: Assess dependency update impact"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "T03: Test dependency updates in development environment"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "T04: Merge approved Dependabot updates"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "T05: Address breaking changes from dependency updates"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "T06: Update documentation for dependency changes"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "T07: Monitor and track Dependabot issue resolution"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "T08: Document Dependabot management process"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Note:"
      }), " Enhanced to include project security (Dependabot, etc.) in addition to context-specific security."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "design-decisions-based-on-user-feedback",
      children: "Design Decisions (Based on User Feedback)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "All questions have been answered and decisions incorporated into the canonical structure:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Epic 1 Scope:"
        }), " ✅ Confirmed - Includes both pre-design phase work and initial project setup"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Epic 2 (Kanban):"
        }), " ✅ Confirmed - Kanban is its own separate epic"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Epic 3 (FR/BR/UXR):"
        }), " ✅ Confirmed - Consolidated into single epic"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Epic 4 (Architecture):"
        }), " ✅ Confirmed - Includes both initial design and refactoring. Future refactoring work can create new E4 stories as needed"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Epic 7 (Implementation):"
        }), " ✅ Confirmed - Codebase maintenance stays in E7"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Epic 8 (Documentation):"
        }), " ✅ Confirmed"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Epic 9 (CI/CD):"
        }), " ✅ Confirmed"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Epic 10 (Security):"
        }), " ✅ Confirmed - Combined project security (Dependabot) and context-specific security"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Data Management Placement:"
        }), " ✅ Confirmed - E5 (before Testing). Rationale: Architecture (E4) defines system structure → Data Management (E5) implements persistence → Testing (E6) can be designed based on both architecture and data layer"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Old E18 (Documentation):"
        }), " ✅ Confirmed - Moved to E8"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Old E22 (Architecture Refactoring):"
        }), " ✅ Confirmed - Split between E4 (architecture refactoring) and E7 (implementation refactoring)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Old E23 (CI/CD):"
        }), " ✅ Confirmed - Moved to E9"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Remaining Epics:"
        }), " ✅ Confirmed - Renumbered starting at E11 (User Management, API, Frontend, Deployment, Performance, Integration, Analytics, Mobile, Internationalization)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "epic-numbering-summary",
      children: "Epic Numbering Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Epic"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Name"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Status"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Notes"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "E1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Project Foundation (Pre-Design)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Core"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Includes workflow and versioning"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "E2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Kanban Framework"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Core"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Separate epic"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "E3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FR/BR/UXR Management"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Core"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Consolidated from old E5/E6/E7"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "E4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Architecture Design"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Core"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Comprehensive design specification"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "E5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Data Management and Database"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Core"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "From old E10"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "E6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Testing and Quality Assurance"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Core"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TDD approach, from old E13"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "E7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Implementation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Core"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Includes old E8 + implementation refactoring + PIR"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "E8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Documentation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Core"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "From old E18"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "E9"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Process Automation and CI/CD"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Core"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "From old E23"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "E10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Security"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ancillary"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Enhanced from old E15"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "E11+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Project-Specific Epics"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ancillary"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "User Management, API, Frontend, etc."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "directory-structure-specification",
      children: "Directory Structure Specification"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "canonical-path-structure",
      children: "Canonical Path Structure"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "docs/project-management/kanban/epics/\n├── epic-01/\n│   ├── epic-01.md\n│   ├── story-01-project-foundation-and-setup/\n│   │   └── story-01-project-foundation-and-setup.md\n│   ├── story-02-workflow-management-framework/\n│   │   └── story-02-workflow-management-framework.md\n│   └── story-03-versioning-framework/\n│       └── story-03-versioning-framework.md\n├── epic-02/\n│   ├── epic-02.md\n│   ├── story-01-kanban-board-setup/\n│   │   └── story-01-kanban-board-setup.md\n│   └── story-02-fr-br-intake-process/\n│       └── story-02-fr-br-intake-process.md\n└── ...\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "naming-conventions",
      children: "Naming Conventions"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "epic-naming",
      children: "Epic Naming"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "CANONICAL:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Epic-\\{N\\}"
      }), " (hyphen, e.g., ", (0,jsx_runtime.jsx)(_components.code, {
        children: "epic-01"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "epic-09"
      }), ")"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Epic Numbering:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Core Epics:"
        }), " 1-9 (always installed)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Ancillary Epics:"
        }), " 10+ (selected based on project needs)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Project-Specific:"
        }), " 11+ (not canonical)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "story-naming",
      children: "Story Naming"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "CANONICAL:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Story-{NNN}-\\{description\\}"
      }), " (3-digit padding, kebab-case)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Examples:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "story-01-project-foundation-and-setup.md"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "story-02-workflow-management-framework.md"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "task-naming",
      children: "Task Naming"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "CANONICAL:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "E\\{epic\\}:S\\{story\\}:T\\{task\\}"
      }), " (full context, required, e.g., ", (0,jsx_runtime.jsx)(_components.code, {
        children: "E6:S06:T01"
      }), ")"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Padding:"
      }), " 2-digit (", (0,jsx_runtime.jsx)(_components.code, {
        children: "T01"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "T02"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "T10"
      }), ")"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "validation-rules",
      children: "Validation Rules"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "epic-validation",
      children: "Epic Validation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Required:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Epic naming: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Epic-\\{N\\}"
        }), " format"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Epic numbering: 1-10 (canonical) or 11+ (project-specific)"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Epic directory: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/project-management/kanban/epics/Epic-\\{N\\}/"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Epic document: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Epic-\\{N\\}.md"
        }), " exists"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Story checklist present in Epic document"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "story-validation",
      children: "Story Validation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Required:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Story naming: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Story-{NNN}-\\{description\\}"
        }), " format (3-digit padding)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Story directory: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Story-{NNN}-\\{description\\}/"
        }), " exists"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Story document: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Story-{NNN}-\\{description\\}.md"
        }), " exists"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Task checklist present in Story document"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "task-validation",
      children: "Task Validation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Required:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Task naming: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "E\\{epic\\}:S\\{story\\}:T\\{task\\}"
        }), " format (full context, 2-digit padding)"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Task structure includes required fields (Status, Input, Deliverable, Acceptance Criteria)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "critical-requirements",
      children: "Critical Requirements"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "epic-9-mismatch-fix",
      children: "Epic 9 Mismatch Fix"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "CRITICAL:"
      }), " ai-dev-kit source Epic 9 \"Book Related Work\" must be renamed to Epic 24+ (project-specific range)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Current (WRONG):"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Epic 9: \"Book Related Work\" (project-specific)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Canonical (CORRECT):"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Epic 9: \"Process Automation and CI/CD\" (canonical)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Action Required:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Rename ai-dev-kit's Epic 9 to Epic 24+"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update all Epic 9 references"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Ensure canonical Epic 9 template matches \"Process Automation and CI/CD\""
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "installer-validation",
      children: "Installer Validation"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "CRITICAL:"
      }), " Installer must validate canonical epics installation and prevent Epic mashup"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Validation Rules:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Check for Epic 9 \"Book Related Work\" (should be Epic 24+)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Validate that canonical epics match templates"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Warn if ai-dev-kit's actual Kanban structure detected"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "clear-separation",
      children: "Clear Separation"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "CRITICAL:"
      }), " Clear separation between canonical templates and ai-dev-kit's actual Kanban"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Requirements:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Canonical templates in ", (0,jsx_runtime.jsx)(_components.code, {
          children: "packages/frameworks/kanban/templates/"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["ai-dev-kit's actual Kanban in ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/project-management/kanban/epics/"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Clear documentation of distinction"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "implementation",
      children: "Implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "installation",
      children: "Installation"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "CANONICAL METHOD:"
      }), " Use installer (", (0,jsx_runtime.jsx)(_components.code, {
        children: "install_kanban_framework.py"
      }), ")"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Installation Steps:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Run installer: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "python packages/frameworks/kanban/scripts/install_kanban_framework.py"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Select canonical epics to install"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Installer validates and installs canonical structure"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Installer prevents Epic mashup"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "DO NOT:"
      }), " Manually copy ai-dev-kit's actual Kanban structure (causes Epic mashup)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Last Updated:"
      }), " 2025-12-18", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Version:"
      }), " 2.0.0", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Status:"
      }), " COMPLETE"]
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