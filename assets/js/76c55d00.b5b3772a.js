"use strict";
(self["webpackChunkportal"] = self["webpackChunkportal"] || []).push([["72876"], {
76231(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_project_management_kanban_epics_epic_01_story_03_core_kb_structure_for_dev_kit_t_02_kb_structure_principles_md_76c_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-project-management-kanban-epics-epic-01-story-03-core-kb-structure-for-dev-kit-t-02-kb-structure-principles-md-76c.json
var site_docs_project_management_kanban_epics_epic_01_story_03_core_kb_structure_for_dev_kit_t_02_kb_structure_principles_md_76c_namespaceObject = JSON.parse('{"id":"project-management/kanban/epics/epic-01/story-03-core-kb-structure-for-dev-kit/T02-kb-structure-principles","title":"KB Structure Principles and Conventions","description":"Task IDS03:T02","source":"@site/../docs/project-management/kanban/epics/epic-01/story-03-core-kb-structure-for-dev-kit/T02-kb-structure-principles.md","sourceDirName":"project-management/kanban/epics/epic-01/story-03-core-kb-structure-for-dev-kit","slug":"/project-management/kanban/epics/epic-01/story-03-core-kb-structure-for-dev-kit/T02-kb-structure-principles","permalink":"/ai-dev-kit/docs/project-management/kanban/epics/epic-01/story-03-core-kb-structure-for-dev-kit/T02-kb-structure-principles","draft":false,"unlisted":false,"editUrl":"https://github.com/RMS-Ltd/ai-dev-kit/tree/main/docs/../docs/project-management/kanban/epics/epic-01/story-03-core-kb-structure-for-dev-kit/T02-kb-structure-principles.md","tags":[],"version":"current","frontMatter":{"lifecycle":"evergreen","ttl_days":null,"created_at":"2025-12-04T12:01:50.000Z","expires_at":null,"housekeeping_policy":"keep"},"sidebar":"docsSidebar","previous":{"title":"KB Structure Analysis and Target Definition","permalink":"/ai-dev-kit/docs/project-management/kanban/epics/epic-01/story-03-core-kb-structure-for-dev-kit/T01-kb-structure-analysis"},"next":{"title":"KB Structure Migration Guide","permalink":"/ai-dev-kit/docs/project-management/kanban/epics/epic-01/story-03-core-kb-structure-for-dev-kit/T03-kb-structure-migration-guide"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ../docs/project-management/kanban/epics/epic-01/story-03-core-kb-structure-for-dev-kit/T02-kb-structure-principles.md


const frontMatter = {
	lifecycle: 'evergreen',
	ttl_days: null,
	created_at: new Date('2025-12-04T12:01:50.000Z'),
	expires_at: null,
	housekeeping_policy: 'keep'
};
const contentTitle = 'KB Structure Principles and Conventions';

const assets = {

};



const toc = [{
  "value": "Executive Summary",
  "id": "executive-summary",
  "level": 2
}, {
  "value": "1. Core Principles",
  "id": "1-core-principles",
  "level": 2
}, {
  "value": "1.1 Separation of Concerns",
  "id": "11-separation-of-concerns",
  "level": 3
}, {
  "value": "Architecture (<code>docs/architecture/</code>)",
  "id": "architecture-docsarchitecture",
  "level": 4
}, {
  "value": "Project Management (<code>docs/project-management/</code>)",
  "id": "project-management-docsproject-management",
  "level": 4
}, {
  "value": "Changelog (<code>docs/changelog-and-release-notes/</code>)",
  "id": "changelog-docschangelog-and-release-notes",
  "level": 4
}, {
  "value": "Guides (<code>docs/guides/</code>)",
  "id": "guides-docsguides",
  "level": 4
}, {
  "value": "1.2 Documentation Hierarchy",
  "id": "12-documentation-hierarchy",
  "level": 3
}, {
  "value": "1.3 User-Centric Organization",
  "id": "13-user-centric-organization",
  "level": 3
}, {
  "value": "2. Naming Conventions",
  "id": "2-naming-conventions",
  "level": 2
}, {
  "value": "2.1 Directory Naming",
  "id": "21-directory-naming",
  "level": 3
}, {
  "value": "2.2 File Naming",
  "id": "22-file-naming",
  "level": 3
}, {
  "value": "2.3 Special File Names",
  "id": "23-special-file-names",
  "level": 3
}, {
  "value": "3. File Organization Rules",
  "id": "3-file-organization-rules",
  "level": 2
}, {
  "value": "3.1 Directory Structure Rules",
  "id": "31-directory-structure-rules",
  "level": 3
}, {
  "value": "3.2 File Placement Rules",
  "id": "32-file-placement-rules",
  "level": 3
}, {
  "value": "3.3 Content Organization Rules",
  "id": "33-content-organization-rules",
  "level": 3
}, {
  "value": "4. Cross-Referencing Patterns",
  "id": "4-cross-referencing-patterns",
  "level": 2
}, {
  "value": "4.1 Internal References",
  "id": "41-internal-references",
  "level": 3
}, {
  "value": "4.2 External References",
  "id": "42-external-references",
  "level": 3
}, {
  "value": "4.3 Reference Format",
  "id": "43-reference-format",
  "level": 3
}, {
  "value": "5. README Structure",
  "id": "5-readme-structure",
  "level": 2
}, {
  "value": "5.1 Root README (<code>docs/README.md</code>)",
  "id": "51-root-readme-docsreadmemd",
  "level": 3
}, {
  "value": "5.2 Section READMEs (e.g., <code>Architecture/README.md</code>)",
  "id": "52-section-readmes-eg-architecturereadmemd",
  "level": 3
}, {
  "value": "5.3 Directory READMEs (e.g., <code>changelog-archive/README.md</code>)",
  "id": "53-directory-readmes-eg-changelog-archivereadmemd",
  "level": 3
}, {
  "value": "6. Maintenance Procedures",
  "id": "6-maintenance-procedures",
  "level": 2
}, {
  "value": "6.1 Adding New Documents",
  "id": "61-adding-new-documents",
  "level": 3
}, {
  "value": "6.2 Updating Existing Documents",
  "id": "62-updating-existing-documents",
  "level": 3
}, {
  "value": "6.3 Moving Documents",
  "id": "63-moving-documents",
  "level": 3
}, {
  "value": "6.4 Archiving Documents",
  "id": "64-archiving-documents",
  "level": 3
}, {
  "value": "7. Consistency Checklist",
  "id": "7-consistency-checklist",
  "level": 2
}, {
  "value": "8. Examples",
  "id": "8-examples",
  "level": 2
}, {
  "value": "8.1 Good Structure Example",
  "id": "81-good-structure-example",
  "level": 3
}, {
  "value": "8.2 Good Cross-Reference Example",
  "id": "82-good-cross-reference-example",
  "level": 3
}, {
  "value": "8.3 Good README Example",
  "id": "83-good-readme-example",
  "level": 3
}, {
  "value": "9. Acceptance Criteria",
  "id": "9-acceptance-criteria",
  "level": 2
}, {
  "value": "10. Related Documentation",
  "id": "10-related-documentation",
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
    pre: "pre",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "kb-structure-principles-and-conventions",
        children: "KB Structure Principles and Conventions"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Task ID:"
      }), " E01:S03", ":T02", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Task:"
      }), " E01:S03", ":T02", " – Document KB structure principles and conventions", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Date:"
      }), " 2025-12-02", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Status:"
      }), " ✅ COMPLETE"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "executive-summary",
      children: "Executive Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["This document establishes the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "principles and conventions"
      }), " for organizing the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ai-dev-kit"
      }), " Knowledge Base (KB). It defines separation of concerns, naming conventions, file organization rules, and cross-referencing patterns to ensure consistency, maintainability, and ease of navigation."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Key Principles:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Separation of Concerns:"
        }), " Clear boundaries between Architecture, Project Management, Changelog, and Guides"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Consistent Naming:"
        }), " Standardized naming conventions for directories and files"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Documentation Hierarchy:"
        }), " Clear hierarchy from root README to detailed documents"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Cross-Referencing:"
        }), " Standardized patterns for linking between documents"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1-core-principles",
      children: "1. Core Principles"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "11-separation-of-concerns",
      children: "1.1 Separation of Concerns"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The KB is organized into four main areas, each with a distinct purpose:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.h4, {
      id: "architecture-docsarchitecture",
      children: ["Architecture (", (0,jsx_runtime.jsx)(_components.code, {
        children: "docs/architecture/"
      }), ")"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Purpose:"
      }), " Technical reference for developers"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Contains:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Technical standards and ADRs (Architecture Decision Records)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Design decisions and rationale"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Framework integration documentation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Versioning policies and strategies"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Audience:"
      }), " Developers, architects, technical contributors"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Examples:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "dev-kit-versioning-policy.md"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "dev-kit-kanban-versioning-rw-integration.md"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Future ADRs for technical decisions"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h4, {
      id: "project-management-docsproject-management",
      children: ["Project Management (", (0,jsx_runtime.jsx)(_components.code, {
        children: "docs/project-management/"
      }), ")"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Purpose:"
      }), " Project management and governance"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Contains:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Kanban board and work tracking"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Project management rituals"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Governance policies"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Epic and Story documentation"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Audience:"
      }), " Project managers, team leads, contributors"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Examples:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "kanban/epics/epic-01/epic-01.md"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "rituals/policy/kanban-governance-policy.md"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Kanban board views"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h4, {
      id: "changelog-docschangelog-and-release-notes",
      children: ["Changelog (", (0,jsx_runtime.jsx)(_components.code, {
        children: "docs/changelog-and-release-notes/"
      }), ")"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Purpose:"
      }), " Release documentation and history"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Contains:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Main changelog summary (", (0,jsx_runtime.jsx)(_components.code, {
          children: "CHANGELOG.md"
        }), ")"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Detailed changelog archive"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Release notes"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Version history"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Audience:"
      }), " All users, maintainers, contributors"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Examples:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "CHANGELOG.md"
        }), " (main summary)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "changelog-archive/CHANGELOG_v0.1.3.1+1.md"
        }), " (detailed)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h4, {
      id: "guides-docsguides",
      children: ["Guides (", (0,jsx_runtime.jsx)(_components.code, {
        children: "docs/guides/"
      }), ")"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Purpose:"
      }), " User-facing documentation"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Contains:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Getting started guides"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Framework consumption guides"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "How-to guides"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Best practices"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Audience:"
      }), " End users, adopters, new contributors"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Examples:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "getting-started/quick-start.md"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "framework-consumption/workflow-management-guide.md"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "12-documentation-hierarchy",
      children: "1.2 Documentation Hierarchy"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The KB follows a clear hierarchy:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "1. Root README (docs/README.md)\n   └─ Overview and navigation to all sections\n   \n2. Section READMEs (e.g., Architecture/README.md)\n   └─ Section-specific overview and navigation\n   \n3. Document Files (e.g., dev-kit-versioning-policy.md)\n   └─ Detailed documentation\n   \n4. Archive Directories (e.g., changelog-archive/)\n   └─ Historical documentation with indexes\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Principle:"
      }), " Each level provides navigation to the next level, ensuring users can always find what they need."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "13-user-centric-organization",
      children: "1.3 User-Centric Organization"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Principle:"
      }), " Organize for user needs, not internal convenience."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Application:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "User-facing guides are separate from internal governance"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Clear entry points (READMEs) at every level"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Logical grouping by purpose, not by technical structure"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Easy discovery through navigation aids"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "2-naming-conventions",
      children: "2. Naming Conventions"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "21-directory-naming",
      children: "2.1 Directory Naming"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Top-Level Directories:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "kebab-case"
        }), " (lowercase with hyphens) for all directories"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Examples: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "architecture/"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "project-management/"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "changelog-and-release-notes/"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "guides/"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use descriptive names that indicate purpose"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Avoid abbreviations unless universally understood"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Subdirectories:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "kebab-case"
        }), " (lowercase with hyphens) for all subdirectories"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Examples: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "standards-and-adrs/"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "changelog-archive/"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "getting-started/"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use descriptive names that indicate purpose"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Maintain consistency within each section"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Special Directories:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "epics/"
        }), " - Lowercase, plural (Kanban epics directory)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "stories/"
        }), " - Lowercase, plural (Story documents directory)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "policy/"
        }), " - Lowercase, singular (Policy documents directory)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "22-file-naming",
      children: "2.2 File Naming"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Markdown Files:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "kebab-case"
        }), " for markdown files"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Examples: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "dev-kit-versioning-policy.md"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "kb-structure-principles.md"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use descriptive names that indicate content"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Avoid generic names like ", (0,jsx_runtime.jsx)(_components.code, {
          children: "document.md"
        }), " or ", (0,jsx_runtime.jsx)(_components.code, {
          children: "notes.md"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "README Files:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Always use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "README.md"
        }), " (uppercase, no extension variation)"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "One README per directory (optional but recommended)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Provides overview and navigation for that directory"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Changelog Files:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "CHANGELOG_v{VERSION}.md"
        }), " format"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Version format: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "RC.EPIC.STORY.TASK+BUILD"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Examples: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "CHANGELOG_v0.1.3.1+1.md"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "CHANGELOG_v0.4.3.7+1.md"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Always use uppercase ", (0,jsx_runtime.jsx)(_components.code, {
          children: "CHANGELOG"
        }), " prefix"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Task Deliverable Files:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "T\\{NN\\}-{descriptive-name}.md"
        }), " format (2-digit zero padding)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Examples: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "T01-kb-structure-analysis.md"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "T02-kb-structure-principles.md"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use zero-padded task numbers (T01, T02, etc.)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use descriptive kebab-case names"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Note:"
        }), " Existing task files may use 3-digit format (T001, T002) for backward compatibility"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Story Files:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Story-{NNN}-{descriptive-name}.md"
        }), " format"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Examples: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "story-01-ai-dev-kit-kanban-and-versioning.md"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "story-03-core-kb-structure-for-dev-kit.md"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use zero-padded story numbers (story-001, story-002, etc.)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use descriptive kebab-case names"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Epic Files:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Epic-\\{N\\}.md"
        }), " format (or ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Epic-\\{N\\}-\\{name\\}.md"
        }), " if needed)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Examples: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "epic-01.md"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "epic-04.md"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use numeric epic numbers without zero-padding"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "23-special-file-names",
      children: "2.3 Special File Names"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Index Files:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "_index.md"
        }), " - Kanban board view (obligatory in Kanban structure)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "kboard.md"
        }), " - Detailed Kanban board view"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "README.md"
        }), " - Directory overview (recommended for all directories)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Template Files:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "{TYPE}_TEMPLATE.md"
        }), " format"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Examples: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "EPIC_TEMPLATE.md"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "STORY_TEMPLATE.md"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "FR_TEMPLATE.md"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use uppercase for template type"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "3-file-organization-rules",
      children: "3. File Organization Rules"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "31-directory-structure-rules",
      children: "3.1 Directory Structure Rules"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Rule 1: One Purpose Per Directory"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Each directory should have a single, clear purpose"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Avoid mixing concerns (e.g., don't mix policies with guides)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Rule 2: Maximum Depth"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Default rule:"
        }), " Limit directory nesting to ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "3 levels"
        }), ": ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/Section/Category/Item"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Preferred pattern:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/architecture/standards-and-adrs/dev-kit-versioning-policy.md"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/changelog-and-release-notes/changelog-archive/CHANGELOG_v0.1.3.1+1.md"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Exception rule:"
        }), " A 4th level is allowed ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "only when there is a clear need"
        }), " (e.g., epic-specific assets), and MUST be documented."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Hard limit:"
        }), " Avoid structures deeper than 4 levels; anything deeper requires explicit justification and should be treated as technical debt."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Rule 3: README in Every Directory"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Every directory should have a ", (0,jsx_runtime.jsx)(_components.code, {
          children: "README.md"
        }), " (optional but recommended)"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "README explains the directory's purpose and contents"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Provides navigation to key documents"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Rule 4: Consistent Structure"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Similar content types should follow similar structures"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Example: All Epic directories follow the same pattern"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "32-file-placement-rules",
      children: "3.2 File Placement Rules"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Rule 1: Place Files by Purpose"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Place files in directories that match their purpose"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Architecture docs → ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Architecture/"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["PM docs → ", (0,jsx_runtime.jsx)(_components.code, {
          children: "project-management/"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["User guides → ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Guides/"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Rule 2: Group Related Files"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Related files should be grouped together"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Example: Task deliverables go in ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Story-XXX/T{NNN}-*.md"
        }), " directory"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Example: Changelogs go in ", (0,jsx_runtime.jsx)(_components.code, {
          children: "changelog-archive/"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Rule 3: Avoid Duplication"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Don't duplicate files in multiple locations"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use cross-references instead"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Exception: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "CHANGELOG.md"
        }), " may exist at root and in ", (0,jsx_runtime.jsx)(_components.code, {
          children: "changelog-and-release-notes/"
        }), " (symlink or copy)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Rule 4: Archive Old Content"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Move outdated content to archive directories"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Keep archives organized with indexes"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Don't delete historical documentation"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "33-content-organization-rules",
      children: "3.3 Content Organization Rules"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Rule 1: One Document Per Concept"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Each document should cover one concept or topic"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Avoid creating monolithic documents"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Split large documents into logical sections"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Rule 2: Clear Document Structure"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use consistent markdown structure"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Include: Title, Summary, Sections, References"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use proper heading hierarchy (H1 → H2 → H3)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Rule 3: Metadata in Headers"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Include metadata in document headers (YAML frontmatter or markdown)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Include: Task/Story/Epic, Date, Status, Version"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Example: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "**Task:** E01:S03:T02"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "**Date:** 2025-12-02"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "**Status:** ✅ COMPLETE"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "4-cross-referencing-patterns",
      children: "4. Cross-Referencing Patterns"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "41-internal-references",
      children: "4.1 Internal References"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Relative Paths:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use relative paths for internal references"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Example: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "[Epic 1](../epic-01.md)"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Example: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "[Task 1 Analysis](T01-kb-structure-analysis.md)"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Absolute Paths (from KB root):"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Use absolute paths from ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/"
        }), " root when referencing across sections"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Example: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "[Versioning Policy](../../../../../governance/standards/dev-kit-versioning-policy.md)"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Example: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "[Kanban Governance](../../../../../governance/kanban/kanban-governance-policy.md)"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Cross-Section References:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Always use relative paths from current file location"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Calculate relative path: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "../../Section/Subsection/file.md"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Test links to ensure they work"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "42-external-references",
      children: "4.2 External References"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Package References:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Reference packages using relative paths from KB root"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Example: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "[Workflow Management README](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/packages/frameworks/workflow-mgt/README.md)"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use descriptive link text, not raw paths"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Root-Level References:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Reference root-level files using relative paths"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Example: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "[Main Changelog](../../CHANGELOG.md)"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Example: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "[Root README](../../../../../guides/README.md)"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "43-reference-format",
      children: "4.3 Reference Format"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Link Format:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-markdown",
        children: "[Descriptive Link Text](relative/path/to/file.md)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Best Practices:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use descriptive link text (not \"click here\" or \"this file\")"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Include file extension in links (", (0,jsx_runtime.jsx)(_components.code, {
          children: ".md"
        }), ")"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Test all links to ensure they work"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use consistent link text for same target"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Version References:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Reference versions using format: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "v{RC}.\\{EPIC\\}.\\{STORY\\}.\\{TASK\\}+\\{BUILD\\}"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Example: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "v0.1.3.1+1"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Link to changelog: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "[v0.1.3.1+1](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/docs/project-management/kanban/epics/epic-01/changelog-and-release-notes/changelog-archive/CHANGELOG_v0.1.3.1%2B1.md)"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "5-readme-structure",
      children: "5. README Structure"
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "51-root-readme-docsreadmemd",
      children: ["5.1 Root README (", (0,jsx_runtime.jsx)(_components.code, {
        children: "docs/README.md"
      }), ")"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Required Sections:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Overview"
        }), " - What is the KB and its purpose"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Structure"
        }), " - High-level directory structure"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Navigation"
        }), " - Quick links to major sections"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Getting Started"
        }), " - Where to start for different user types"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Optional Sections:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Contributing guidelines"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Maintenance procedures"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Related resources"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "52-section-readmes-eg-architecturereadmemd",
      children: ["5.2 Section READMEs (e.g., ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Architecture/README.md"
      }), ")"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Required Sections:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Overview"
        }), " - What this section contains"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Structure"
        }), " - Directory structure within section"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Key Documents"
        }), " - Links to important documents"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Navigation"
        }), " - Links to subsections"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Optional Sections:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Purpose and audience"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Related sections"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Maintenance notes"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "53-directory-readmes-eg-changelog-archivereadmemd",
      children: ["5.3 Directory READMEs (e.g., ", (0,jsx_runtime.jsx)(_components.code, {
        children: "changelog-archive/README.md"
      }), ")"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Required Sections:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Overview"
        }), " - What this directory contains"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Contents"
        }), " - List or index of files"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Navigation"
        }), " - Links to key files or indexes"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Optional Sections:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Organization principles"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "How to find specific content"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Related directories"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "6-maintenance-procedures",
      children: "6. Maintenance Procedures"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "61-adding-new-documents",
      children: "6.1 Adding New Documents"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Process:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Determine document purpose and audience"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Choose appropriate section (Architecture, Project Management, Changelog, Guides)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Follow naming conventions"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Place in appropriate directory"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update relevant READMEs with links"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Add cross-references from related documents"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "62-updating-existing-documents",
      children: "6.2 Updating Existing Documents"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Process:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update document content"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update \"Last updated\" date in header"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update version marker if applicable"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update cross-references if document moved or renamed"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update relevant READMEs if document purpose changed"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "63-moving-documents",
      children: "6.3 Moving Documents"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Process:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Move file to new location"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update all cross-references to file"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update relevant READMEs"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Test all links"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Document move in changelog if significant"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "64-archiving-documents",
      children: "6.4 Archiving Documents"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Process:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Move to appropriate archive directory"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update archive index/README"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update cross-references to point to archive location"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Add note in original location if needed"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Document archive in changelog"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "7-consistency-checklist",
      children: "7. Consistency Checklist"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "When creating or updating KB documentation, verify:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      className: "contains-task-list",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "File follows naming conventions"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "File is in appropriate directory (matches purpose)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Directory has README.md (or plan to add one)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Document has proper header metadata"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Cross-references use relative paths"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "All links are tested and working"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Document follows structure principles"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Related READMEs are updated with links"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "8-examples",
      children: "8. Examples"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "81-good-structure-example",
      children: "8.1 Good Structure Example"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "docs/\n├── README.md                          ✅ Root navigation\n├── Architecture/\n│   ├── README.md                      ✅ Section overview\n│   └── standards-and-adrs/\n│       ├── README.md                  ✅ Subsection overview\n│       └── dev-kit-versioning-policy.md  ✅ Follows naming convention\n└── Guides/\n    ├── README.md                      ✅ Section overview\n    └── getting-started/\n        ├── README.md                  ✅ Directory overview\n        └── quick-start.md             ✅ Follows naming convention\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "82-good-cross-reference-example",
      children: "8.2 Good Cross-Reference Example"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-markdown",
        children: "## Related Documentation\n\n- [Versioning Policy](../../../../../governance/standards/dev-kit-versioning-policy.md)\n- [Kanban Governance](../../../../../governance/kanban/kanban-governance-policy.md)\n- [Changelog Archive](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/docs/project-management/kanban/epics/epic-01/changelog-and-release-notes/changelog-archive/README.md)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "83-good-readme-example",
      children: "8.3 Good README Example"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-markdown",
        children: "# Architecture Documentation\n\n## Overview\n\nThis section contains technical standards, ADRs, and framework integration documentation.\n\n## Structure\n\n- `standards-and-adrs/` - Architecture Decision Records and standards\n- `Integration/` - Framework integration documentation\n\n## Key Documents\n\n- [Versioning Policy](../../../../../governance/standards/dev-kit-versioning-policy.md)\n- [Kanban-Versioning-RW Integration](../../../../../architecture/standards-and-adrs/dev-kit-kanban-versioning-rw-integration.md)\n\n## Navigation\n\n- [Project Management](../../../../../guides/README.md)\n- [Changelog](../../../../../guides/README.md)\n- [Guides](../../../../../guides/README.md)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "9-acceptance-criteria",
      children: "9. Acceptance Criteria"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      className: "contains-task-list",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "KB structure principles documented"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "Naming conventions defined"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "File organization rules established"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "Cross-referencing patterns documented"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "README structure guidelines provided"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "Maintenance procedures documented"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "Consistency checklist provided"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "Examples provided"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "10-related-documentation",
      children: "10. Related Documentation"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-01/story-03-core-kb-structure-for-dev-kit/T01-kb-structure-analysis",
          children: "KB Structure Analysis"
        }), " - Current and target structure analysis"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-01/story-03-core-kb-structure-for-dev-kit/T03-kb-structure-migration-guide",
          children: "KB Structure Migration Guide"
        }), " - Step-by-step migration (TBD)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["KB Structure Documentation (TBD — no ", (0,jsx_runtime.jsx)(_components.code, {
          children: "T005"
        }), " task doc filed; see ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-01/story-03-core-kb-structure-for-dev-kit/T06-scalable-kb-pattern",
          children: "T006 scalable KB pattern"
        }), ")"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.em, {
        children: "End of Principles Document"
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