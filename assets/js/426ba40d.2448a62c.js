"use strict";
(self["webpackChunkportal"] = self["webpackChunkportal"] || []).push([["82479"], {
53191(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_project_management_kanban_epics_epic_01_story_03_core_kb_structure_for_dev_kit_t_06_scalable_kb_pattern_md_426_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-project-management-kanban-epics-epic-01-story-03-core-kb-structure-for-dev-kit-t-06-scalable-kb-pattern-md-426.json
var site_docs_project_management_kanban_epics_epic_01_story_03_core_kb_structure_for_dev_kit_t_06_scalable_kb_pattern_md_426_namespaceObject = JSON.parse('{"id":"project-management/kanban/epics/epic-01/story-03-core-kb-structure-for-dev-kit/T06-scalable-kb-pattern","title":"Scalable KB Pattern for Large Codebases","description":"Task IDS03:T06","source":"@site/../docs/project-management/kanban/epics/epic-01/story-03-core-kb-structure-for-dev-kit/T06-scalable-kb-pattern.md","sourceDirName":"project-management/kanban/epics/epic-01/story-03-core-kb-structure-for-dev-kit","slug":"/project-management/kanban/epics/epic-01/story-03-core-kb-structure-for-dev-kit/T06-scalable-kb-pattern","permalink":"/ai-dev-kit/docs/project-management/kanban/epics/epic-01/story-03-core-kb-structure-for-dev-kit/T06-scalable-kb-pattern","draft":false,"unlisted":false,"editUrl":"https://github.com/RMS-Ltd/ai-dev-kit/tree/main/docs/../docs/project-management/kanban/epics/epic-01/story-03-core-kb-structure-for-dev-kit/T06-scalable-kb-pattern.md","tags":[],"version":"current","frontMatter":{"lifecycle":"evergreen","ttl_days":null,"created_at":"2025-12-04T12:01:50.000Z","expires_at":null,"housekeeping_policy":"keep"},"sidebar":"docsSidebar","previous":{"title":"Epic 1, Story 3, Task 5: Create KB structure documentation","permalink":"/ai-dev-kit/docs/project-management/kanban/epics/epic-01/story-03-core-kb-structure-for-dev-kit/T05-create-kb-structure-documentation"},"next":{"title":"Story 003 – Core KB Structure for Dev Kit","permalink":"/ai-dev-kit/docs/project-management/kanban/epics/epic-01/story-03-core-kb-structure-for-dev-kit"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ../docs/project-management/kanban/epics/epic-01/story-03-core-kb-structure-for-dev-kit/T06-scalable-kb-pattern.md


const frontMatter = {
	lifecycle: 'evergreen',
	ttl_days: null,
	created_at: new Date('2025-12-04T12:01:50.000Z'),
	expires_at: null,
	housekeeping_policy: 'keep'
};
const contentTitle = 'Scalable KB Pattern for Large Codebases';

const assets = {

};



const toc = [{
  "value": "Executive Summary",
  "id": "executive-summary",
  "level": 2
}, {
  "value": "1. Canonical KB Pattern (Full Menu)",
  "id": "1-canonical-kb-pattern-full-menu",
  "level": 2
}, {
  "value": "1.1 Core Sections (Always Present)",
  "id": "11-core-sections-always-present",
  "level": 3
}, {
  "value": "<code>docs/architecture/</code>",
  "id": "docsarchitecture",
  "level": 4
}, {
  "value": "<code>docs/project-management/</code>",
  "id": "docsproject-management",
  "level": 4
}, {
  "value": "<code>docs/changelog-and-release-notes/</code>",
  "id": "docschangelog-and-release-notes",
  "level": 4
}, {
  "value": "<code>docs/guides/</code>",
  "id": "docsguides",
  "level": 4
}, {
  "value": "1.2 Optional Sections (Scale-Dependent)",
  "id": "12-optional-sections-scale-dependent",
  "level": 3
}, {
  "value": "<code>docs/engineering-and-platform/</code>",
  "id": "docsengineering-and-platform",
  "level": 4
}, {
  "value": "<code>docs/Operations_and_SRE/</code>",
  "id": "docsoperations_and_sre",
  "level": 4
}, {
  "value": "<code>docs/Testing/</code>",
  "id": "docstesting",
  "level": 4
}, {
  "value": "<code>docs/Product_and_Experience/</code>",
  "id": "docsproduct_and_experience",
  "level": 4
}, {
  "value": "<code>docs/Enablement/</code>",
  "id": "docsenablement",
  "level": 4
}, {
  "value": "<code>docs/Data_and_Insights/</code>",
  "id": "docsdata_and_insights",
  "level": 4
}, {
  "value": "2. Dev-Kit Instantiation (Minimal Subset)",
  "id": "2-dev-kit-instantiation-minimal-subset",
  "level": 2
}, {
  "value": "2.1 Current Structure",
  "id": "21-current-structure",
  "level": 3
}, {
  "value": "2.2 Why This Works",
  "id": "22-why-this-works",
  "level": 3
}, {
  "value": "3. Example Project Mapping",
  "id": "3-example-project-mapping",
  "level": 2
}, {
  "value": "3.1 Large Codebase Example (100K+ LOC)",
  "id": "31-large-codebase-example-100k-loc",
  "level": 3
}, {
  "value": "3.2 Mapping to Canonical Pattern",
  "id": "32-mapping-to-canonical-pattern",
  "level": 3
}, {
  "value": "3.3 Recommended Structure (After Mapping)",
  "id": "33-recommended-structure-after-mapping",
  "level": 3
}, {
  "value": "4. Adoption Guidance",
  "id": "4-adoption-guidance",
  "level": 2
}, {
  "value": "4.1 For New Projects",
  "id": "41-for-new-projects",
  "level": 3
}, {
  "value": "4.2 For Existing Projects",
  "id": "42-for-existing-projects",
  "level": 3
}, {
  "value": "5. Depth Management Rules",
  "id": "5-depth-management-rules",
  "level": 2
}, {
  "value": "5.1 Default Rule: 3 Levels Maximum",
  "id": "51-default-rule-3-levels-maximum",
  "level": 3
}, {
  "value": "5.2 Exception Rule: 4th Level Only When Justified",
  "id": "52-exception-rule-4th-level-only-when-justified",
  "level": 3
}, {
  "value": "5.3 Anti-Pattern: Deep Nesting",
  "id": "53-anti-pattern-deep-nesting",
  "level": 3
}, {
  "value": "6. Implementation Plan",
  "id": "6-implementation-plan",
  "level": 2
}, {
  "value": "6.1 Phase 1: Document Canonical Pattern (T006)",
  "id": "61-phase-1-document-canonical-pattern-t006",
  "level": 3
}, {
  "value": "6.2 Phase 2: Update KB Structure Principles (T002 Update)",
  "id": "62-phase-2-update-kb-structure-principles-t002-update",
  "level": 3
}, {
  "value": "6.3 Phase 3: Create Adoption Guide",
  "id": "63-phase-3-create-adoption-guide",
  "level": 3
}, {
  "value": "6.4 Phase 4: Update Framework Documentation",
  "id": "64-phase-4-update-framework-documentation",
  "level": 3
}, {
  "value": "7. References",
  "id": "7-references",
  "level": 2
}, {
  "value": "8. Conclusion",
  "id": "8-conclusion",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    br: "br",
    code: "code",
    em: "em",
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
        id: "scalable-kb-pattern-for-large-codebases",
        children: "Scalable KB Pattern for Large Codebases"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Task ID:"
      }), " E01:S03", ":T06", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Task:"
      }), " E01:S03", ":T06", " – Document scalable KB pattern for large codebases", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Date:"
      }), " 2025-12-02", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Status:"
      }), " IN PROGRESS", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Version:"
      }), " Draft"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "executive-summary",
      children: "Executive Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["This document defines the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "canonical, scalable KB structure pattern"
      }), " that supports projects ranging from small framework repositories (like ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ai-dev-kit"
      }), ") to large codebases with 100K+ lines of code. The pattern maintains a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "3-level default depth"
      }), " while providing a comprehensive \"menu\" of sections that projects can adopt based on their needs."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Key Principles:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Core sections:"
        }), " Always present (Architecture, Project Management, Changelog, Guides)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Optional sections:"
        }), " Scale-dependent (Engineering, Operations, Testing, Enablement, etc.)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "3-level default:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/Section/Category/Item"
        }), " (maximum depth)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Self-documenting:"
        }), " Directory names clearly indicate purpose"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Scalable:"
        }), " Pattern works for small projects (minimal subset) and large projects (full menu)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1-canonical-kb-pattern-full-menu",
      children: "1. Canonical KB Pattern (Full Menu)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The canonical KB pattern defines ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "all possible sections"
      }), " that a project might need. Individual projects adopt a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "subset"
      }), " based on their scope and requirements."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "11-core-sections-always-present",
      children: "1.1 Core Sections (Always Present)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["These sections are ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "fundamental"
      }), " to any Kanban-driven project using the dev-kit frameworks:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "docsarchitecture",
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "docs/architecture/"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Purpose:"
      }), " Technical standards, ADRs, system design, integration documentation", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Audience:"
      }), " Developers, architects, technical leads", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Categories:"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "standards-and-adrs/"
        }), " – Architecture Decision Records, technical standards"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "System_Design/"
        }), " – System architecture, component design (optional, for large projects)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "APIs_and_Contracts/"
        }), " – API documentation, service contracts (optional, for large projects)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "Security_and_Compliance/"
        }), " – Security policies, compliance docs (optional, for large projects)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "Data_and_Storage/"
        }), " – Data models, storage patterns (optional, for large projects)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Depth:"
      }), " 3 levels (", (0,jsx_runtime.jsx)(_components.code, {
        children: "docs/architecture/Category/Item.md"
      }), ")"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "docsproject-management",
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "docs/project-management/"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Purpose:"
      }), " Project management, Kanban, governance, rituals", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Audience:"
      }), " Product owners, project managers, team leads", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Categories:"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "kanban/"
        }), " – Kanban board, epics, stories (required)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "rituals/"
        }), " – Governance policies, cadences, Release Workflow (required)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "risk_and_dependencies/"
        }), " – Risk tracking, dependency management (optional)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Depth:"
      }), " 3-4 levels (", (0,jsx_runtime.jsx)(_components.code, {
        children: "docs/project-management/kanban/epics/epic-\\{N\\}.md"
      }), ")"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "docschangelog-and-release-notes",
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "docs/changelog-and-release-notes/"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Purpose:"
      }), " Release documentation, changelogs, version history", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Audience:"
      }), " All team members, users", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Categories:"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "changelog-archive/"
        }), " – Detailed per-version changelogs (required)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Depth:"
      }), " 3 levels (", (0,jsx_runtime.jsx)(_components.code, {
        children: "docs/changelog-and-release-notes/changelog-archive/CHANGELOG_v{VERSION}.md"
      }), ")"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "docsguides",
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "docs/guides/"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Purpose:"
      }), " User-facing documentation, getting started, how-to guides", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Audience:"
      }), " End users, adopters, new contributors", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Categories:"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "getting-started/"
        }), " – Quick start guides, onboarding (recommended)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "framework-consumption/"
        }), " – How to adopt dev-kit frameworks (for dev-kit)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "How_To/"
        }), " – Step-by-step guides (optional)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Depth:"
      }), " 3 levels (", (0,jsx_runtime.jsx)(_components.code, {
        children: "docs/guides/Category/guide-name.md"
      }), ")"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "12-optional-sections-scale-dependent",
      children: "1.2 Optional Sections (Scale-Dependent)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["These sections are ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "added as needed"
      }), " for larger, more complex projects:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "docsengineering-and-platform",
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "docs/engineering-and-platform/"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Purpose:"
      }), " Code organization, services, components, tooling", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Audience:"
      }), " Engineers, platform teams", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "When to Add:"
      }), " Projects with multiple services, microservices, or complex platform needs", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Categories:"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "Services_and_Components/"
        }), " – Service documentation, component catalogs"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "Code_Conventions/"
        }), " – Coding standards, style guides"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "Tooling_and_Integrations/"
        }), " – Development tools, CI/CD, integrations"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "Infrastructure_as_Code/"
        }), " – IaC documentation, deployment configs"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Depth:"
      }), " 3 levels (", (0,jsx_runtime.jsx)(_components.code, {
        children: "docs/engineering-and-platform/Category/service-name.md"
      }), ")"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "docsoperations_and_sre",
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "docs/Operations_and_SRE/"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Purpose:"
      }), " Runbooks, monitoring, incident management, reliability", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Audience:"
      }), " SREs, operations teams, on-call engineers", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "When to Add:"
      }), " Projects with production systems requiring operational documentation", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Categories:"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "Runbooks/"
        }), " – Operational procedures, troubleshooting guides"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "Monitoring_and_Observability/"
        }), " – Monitoring setup, dashboards, alerts"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "Incident_Management/"
        }), " – Incident response procedures, postmortems"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "Reliability/"
        }), " – SLOs, error budgets, reliability patterns"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Depth:"
      }), " 3 levels (", (0,jsx_runtime.jsx)(_components.code, {
        children: "docs/Operations_and_SRE/Category/runbook-name.md"
      }), ")"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "docstesting",
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "docs/Testing/"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Purpose:"
      }), " Test strategy, test suites, coverage, testing patterns", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Audience:"
      }), " QA engineers, developers", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "When to Add:"
      }), " Projects with comprehensive testing requirements", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Categories:"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "Test_Strategy/"
        }), " – Testing approach, test pyramid, coverage goals"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "Test_Suites_and_Coverage/"
        }), " – Test suite documentation, coverage reports"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "Testing_Patterns/"
        }), " – Testing best practices, patterns"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Depth:"
      }), " 3 levels (", (0,jsx_runtime.jsx)(_components.code, {
        children: "docs/Testing/Category/test-strategy.md"
      }), ")"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "docsproduct_and_experience",
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "docs/Product_and_Experience/"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Purpose:"
      }), " Product vision, roadmap, user stories, UX design", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Audience:"
      }), " Product managers, designers, stakeholders", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "When to Add:"
      }), " Projects with dedicated product management and design teams", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Categories:"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "Product_Vision_and_Roadmap/"
        }), " – Product strategy, roadmaps"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "User_Stories_and_Requirements/"
        }), " – User stories, requirements docs"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "UX_and_Design/"
        }), " – Design system, UX patterns, mockups"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Depth:"
      }), " 3 levels (", (0,jsx_runtime.jsx)(_components.code, {
        children: "docs/Product_and_Experience/Category/product-vision.md"
      }), ")"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "docsenablement",
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "docs/Enablement/"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Purpose:"
      }), " Onboarding, training, enablement materials", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Audience:"
      }), " New team members, customers, partners", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "When to Add:"
      }), " Projects requiring comprehensive onboarding or customer enablement", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Categories:"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "Onboarding_and_Enablement/"
        }), " – New team member onboarding"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "Internal_Enablement_and_People/"
        }), " – Internal training, team enablement"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "Customer_Enablement/"
        }), " – Customer-facing enablement materials"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Depth:"
      }), " 3 levels (", (0,jsx_runtime.jsx)(_components.code, {
        children: "docs/Enablement/Category/onboarding-guide.md"
      }), ")"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "docsdata_and_insights",
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "docs/Data_and_Insights/"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Purpose:"
      }), " Data models, analytics, insights, reporting", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Audience:"
      }), " Data engineers, analysts, product managers", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "When to Add:"
      }), " Projects with significant data requirements or analytics needs", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Categories:"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "Data_Models/"
        }), " – Data schemas, models"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "Analytics_and_Reporting/"
        }), " – Analytics setup, reporting dashboards"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "Data_Pipelines/"
        }), " – ETL pipelines, data processing"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Depth:"
      }), " 3 levels (", (0,jsx_runtime.jsx)(_components.code, {
        children: "docs/Data_and_Insights/Category/data-model.md"
      }), ")"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "2-dev-kit-instantiation-minimal-subset",
      children: "2. Dev-Kit Instantiation (Minimal Subset)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ai-dev-kit"
      }), " repository uses a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "minimal subset"
      }), " of the canonical pattern:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "21-current-structure",
      children: "2.1 Current Structure"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "docs/\n├── Architecture/                    # Core section\n│   └── standards-and-adrs/\n├── changelog-and-release-notes/   # Core section\n│   └── changelog-archive/\n├── project-management/               # Core section\n│   ├── kanban/\n│   └── rituals/\n└── Guides/                         # Core section (planned)\n    └── framework-consumption/\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Rationale:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "No runtime code:"
        }), " No need for Engineering, Operations, Testing sections"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Framework repository:"
        }), " Focus on Architecture (standards), PM (Kanban), and Guides (consumption)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Minimal scope:"
        }), " Only core sections needed for framework documentation"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "22-why-this-works",
      children: "2.2 Why This Works"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Pattern compliance:"
        }), " Follows canonical 3-level structure"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Scalable:"
        }), " Can add optional sections if dev-kit grows"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Self-documenting:"
        }), " Clear purpose for each section"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Example for others:"
        }), " Shows how to adopt minimal subset"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "3-example-project-mapping",
      children: "3. Example Project Mapping"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "31-large-codebase-example-100k-loc",
      children: "3.1 Large Codebase Example (100K+ LOC)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Example:"
      }), " A project with the following KB structure:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "docs/\n├── _index.md\n├── Architecture\n├── changelog-and-release-notes\n├── Data_and_Insights\n├── Documentation\n├── engineering-and-platform\n├── Governance_and_Process\n├── Monitoring_and_Observability\n├── Onboarding_and_Enablement\n├── Operations_and_Runbooks\n├── Operations_and_SRE\n├── project-management\n├── Product_and_Experience\n├── Security_and_Compliance\n├── Testing\n└── Tooling_and_Integrations\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "32-mapping-to-canonical-pattern",
      children: "3.2 Mapping to Canonical Pattern"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Current Section"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Canonical Section"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Category"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Notes"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "Architecture"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "docs/architecture/"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "standards-and-adrs/"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Direct mapping"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "changelog-and-release-notes"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "docs/changelog-and-release-notes/"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "changelog-archive/"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Direct mapping"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "project-management"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "docs/project-management/"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "kanban/"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "rituals/"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Direct mapping"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "Documentation"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "docs/guides/"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "getting-started/"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "How_To/"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Consolidate into Guides"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "Onboarding_and_Enablement"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "docs/Enablement/"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "Onboarding_and_Enablement/"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Direct mapping"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "engineering-and-platform"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "docs/engineering-and-platform/"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "Services_and_Components/"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "Code_Conventions/"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Direct mapping"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "Operations_and_Runbooks"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "docs/Operations_and_SRE/"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "Runbooks/"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Consolidate with Operations_and_SRE"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "Operations_and_SRE"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "docs/Operations_and_SRE/"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "Monitoring_and_Observability/"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "Incident_Management/"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Direct mapping"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "Monitoring_and_Observability"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "docs/Operations_and_SRE/"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "Monitoring_and_Observability/"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Consolidate into Operations_and_SRE"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "Testing"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "docs/Testing/"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "Test_Strategy/"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "Test_Suites_and_Coverage/"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Direct mapping"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "Security_and_Compliance"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "docs/architecture/"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "Security_and_Compliance/"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Move to Architecture"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "Data_and_Insights"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "docs/Data_and_Insights/"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "Data_Models/"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "Analytics_and_Reporting/"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Direct mapping"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "Tooling_and_Integrations"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "docs/engineering-and-platform/"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "Tooling_and_Integrations/"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Move to engineering-and-platform"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "Governance_and_Process"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "docs/project-management/"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "rituals/"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Consolidate into project-management"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "Product_and_Experience"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "docs/Product_and_Experience/"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "Product_Vision_and_Roadmap/"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "UX_and_Design/"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Direct mapping"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "33-recommended-structure-after-mapping",
      children: "3.3 Recommended Structure (After Mapping)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "docs/\n├── README.md\n├── Architecture/\n│   ├── standards-and-adrs/\n│   └── Security_and_Compliance/\n├── changelog-and-release-notes/\n│   └── changelog-archive/\n├── project-management/\n│   ├── kanban/\n│   └── rituals/\n├── Guides/\n│   ├── getting-started/\n│   └── How_To/\n├── engineering-and-platform/\n│   ├── Services_and_Components/\n│   ├── Code_Conventions/\n│   └── Tooling_and_Integrations/\n├── Operations_and_SRE/\n│   ├── Runbooks/\n│   ├── Monitoring_and_Observability/\n│   └── Incident_Management/\n├── Testing/\n│   ├── Test_Strategy/\n│   └── Test_Suites_and_Coverage/\n├── Product_and_Experience/\n│   ├── Product_Vision_and_Roadmap/\n│   └── UX_and_Design/\n├── Enablement/\n│   └── Onboarding_and_Enablement/\n└── Data_and_Insights/\n    ├── Data_Models/\n    └── Analytics_and_Reporting/\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Benefits:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ All sections mapped to canonical pattern"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ 3-level default depth maintained"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Self-documenting structure"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Clear separation of concerns"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Scalable and maintainable"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "4-adoption-guidance",
      children: "4. Adoption Guidance"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "41-for-new-projects",
      children: "4.1 For New Projects"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 1: Start with Core Sections"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Create ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/architecture/"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/project-management/"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/changelog-and-release-notes/"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/guides/"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Use minimal categories (e.g., ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Architecture/standards-and-adrs/"
        }), ")"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 2: Add Optional Sections as Needed"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Add ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/engineering-and-platform/"
        }), " when you have multiple services"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Add ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/Operations_and_SRE/"
        }), " when you have production systems"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Add ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/Testing/"
        }), " when you need comprehensive test documentation"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Add other sections based on project needs"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 3: Maintain 3-Level Default"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Keep structure shallow: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/Section/Category/Item.md"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use 4th level only when clearly justified (e.g., epic-specific assets)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "42-for-existing-projects",
      children: "4.2 For Existing Projects"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 1: Map Current Structure"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "List all current KB top-level directories"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Map each to canonical section (see Section 3.2)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 2: Identify Consolidations"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Merge duplicate sections (e.g., ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Operations_and_Runbooks"
        }), " + ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Operations_and_SRE"
        }), " → ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Operations_and_SRE"
        }), ")"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Move misplaced sections (e.g., ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Security_and_Compliance"
        }), " → ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Architecture/Security_and_Compliance"
        }), ")"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 3: Plan Migration"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Create migration plan (see T003 migration guide)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Move files to target locations"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update cross-references"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Validate structure"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 4: Document Decisions"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Document which canonical sections you're using"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Document any deviations from canonical pattern (with rationale)"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Update ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/README.md"
        }), " with structure overview"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "5-depth-management-rules",
      children: "5. Depth Management Rules"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "51-default-rule-3-levels-maximum",
      children: "5.1 Default Rule: 3 Levels Maximum"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Pattern:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "docs/Section/Category/Item.md"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Examples:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["✅ ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/architecture/standards-and-adrs/dev-kit-versioning-policy.md"
        }), " (3 levels)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["✅ ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/project-management/kanban/epics/epic-01.md"
        }), " (4 levels, acceptable for Kanban)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["❌ ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/project-management/kanban/epics/epic-01/stories/story-1/tasks/task-1.md"
        }), " (7 levels, too deep)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "52-exception-rule-4th-level-only-when-justified",
      children: "5.2 Exception Rule: 4th Level Only When Justified"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "When 4th Level is Acceptable:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Epic-specific assets: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/project-management/kanban/epics/epic-01/assets/"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Service-specific runbooks: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/Operations_and_SRE/Runbooks/service-x/"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Category with many items requiring sub-organization"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "When 4th Level is NOT Acceptable:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "General content organization (use better naming instead)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Avoiding consolidation of related content"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Creating unnecessary nesting"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "53-anti-pattern-deep-nesting",
      children: "5.3 Anti-Pattern: Deep Nesting"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Avoid:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "5+ level depths"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Meandering directory structures"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Unclear purpose at each level"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Instead:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use flat collections with self-documenting names"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Consolidate related content"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Use better naming conventions (e.g., ", (0,jsx_runtime.jsx)(_components.code, {
          children: "epic-01-story-1.md"
        }), " instead of ", (0,jsx_runtime.jsx)(_components.code, {
          children: "epic-01/stories/story-1.md"
        }), ")"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "6-implementation-plan",
      children: "6. Implementation Plan"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "61-phase-1-document-canonical-pattern-t006",
      children: "6.1 Phase 1: Document Canonical Pattern (T006)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Deliverables:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ This document (scalable KB pattern)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Example project mapping"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Adoption guidance"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Status:"
      }), " IN PROGRESS"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "62-phase-2-update-kb-structure-principles-t002-update",
      children: "6.2 Phase 2: Update KB Structure Principles (T002 Update)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Actions:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Update ", (0,jsx_runtime.jsx)(_components.code, {
          children: "T02-kb-structure-principles.md"
        }), " to reference canonical pattern"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Add section on \"Core vs Optional Sections\""
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Document depth management rules"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Dependencies:"
      }), " T006"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "63-phase-3-create-adoption-guide",
      children: "6.3 Phase 3: Create Adoption Guide"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Actions:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Create ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/architecture/standards-and-adrs/canonical-kb-pattern.md"
        }), " (or similar)"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Create quick reference guide for projects adopting the pattern"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Document dev-kit's minimal subset as example"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Dependencies:"
      }), " T006, T002 update"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "64-phase-4-update-framework-documentation",
      children: "6.4 Phase 4: Update Framework Documentation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Actions:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update Kanban framework README to reference canonical KB pattern"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update other framework READMEs as needed"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Ensure consumption guides reference KB structure"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Dependencies:"
      }), " Phase 3"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "7-references",
      children: "7. References"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "T01-kb-structure-analysis.md"
        }), " – Current structure analysis"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "T02-kb-structure-principles.md"
        }), " – KB structure principles"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "T03-canonical-kb-structure-research.md"
        }), " – Research on canonical patterns"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "docs/architecture/standards-and-adrs/dev-kit-versioning-policy.md"
        }), " – Versioning policy"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "8-conclusion",
      children: "8. Conclusion"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The canonical KB pattern provides a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "scalable, maintainable structure"
      }), " that works for:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Small projects:"
        }), " Minimal subset (Architecture, PM, Changelog, Guides)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Large projects:"
        }), " Full menu (all sections as needed)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Any project:"
        }), " 3-level default depth, self-documenting names"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Next Steps:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Complete this document (T006)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update T002 with canonical pattern references"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Create adoption guide"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update framework documentation"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.em, {
        children: "End of Scalable KB Pattern Document"
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