"use strict";
(self["webpackChunkportal"] = self["webpackChunkportal"] || []).push([["58680"], {
37823(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_architecture_standards_and_adrs_kb_structure_overview_md_4bc_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-architecture-standards-and-adrs-kb-structure-overview-md-4bc.json
var site_docs_architecture_standards_and_adrs_kb_structure_overview_md_4bc_namespaceObject = JSON.parse('{"id":"architecture/standards-and-adrs/kb-structure-overview","title":"KB Structure Overview","description":"TaskS03:T05 – Create KB structure documentation","source":"@site/../docs/architecture/standards-and-adrs/kb-structure-overview.md","sourceDirName":"architecture/standards-and-adrs","slug":"/architecture/standards-and-adrs/kb-structure-overview","permalink":"/ai-dev-kit/docs/architecture/standards-and-adrs/kb-structure-overview","draft":false,"unlisted":false,"editUrl":"https://github.com/RMS-Ltd/ai-dev-kit/tree/main/docs/../docs/architecture/standards-and-adrs/kb-structure-overview.md","tags":[],"version":"current","frontMatter":{"lifecycle":"evergreen","ttl_days":null,"created_at":"2025-12-04T12:01:47.000Z","expires_at":null,"housekeeping_policy":"keep"},"sidebar":"docsSidebar","previous":{"title":"IPW ADR necessity checklist","permalink":"/ai-dev-kit/docs/architecture/standards-and-adrs/ipw-adr-necessity-checklist"},"next":{"title":"Legacy Repository Analysis: ai-architect-kit & paradigm","permalink":"/ai-dev-kit/docs/architecture/standards-and-adrs/legacy-repo-analysis"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ../docs/architecture/standards-and-adrs/kb-structure-overview.md


const frontMatter = {
	lifecycle: 'evergreen',
	ttl_days: null,
	created_at: new Date('2025-12-04T12:01:47.000Z'),
	expires_at: null,
	housekeeping_policy: 'keep'
};
const contentTitle = 'KB Structure Overview';

const assets = {

};



const toc = [{
  "value": "Executive Summary",
  "id": "executive-summary",
  "level": 2
}, {
  "value": "1. KB Structure Overview",
  "id": "1-kb-structure-overview",
  "level": 2
}, {
  "value": "1.1 Top-Level Structure",
  "id": "11-top-level-structure",
  "level": 3
}, {
  "value": "1.2 Section Purposes",
  "id": "12-section-purposes",
  "level": 3
}, {
  "value": "2. Directory Purposes",
  "id": "2-directory-purposes",
  "level": 2
}, {
  "value": "2.1 Architecture (<code>docs/architecture/</code>)",
  "id": "21-architecture-docsarchitecture",
  "level": 3
}, {
  "value": "2.2 Changelog and Release Notes (<code>docs/changelog-and-release-notes/</code>)",
  "id": "22-changelog-and-release-notes-docschangelog-and-release-notes",
  "level": 3
}, {
  "value": "2.3 Project Management (<code>docs/project-management/</code>)",
  "id": "23-project-management-docsproject-management",
  "level": 3
}, {
  "value": "2.4 Guides (<code>docs/guides/</code>)",
  "id": "24-guides-docsguides",
  "level": 3
}, {
  "value": "2.5 Maintenance (<code>docs/maintenance/</code>)",
  "id": "25-maintenance-docsmaintenance",
  "level": 3
}, {
  "value": "3. Navigation Patterns",
  "id": "3-navigation-patterns",
  "level": 2
}, {
  "value": "3.1 Entry Points",
  "id": "31-entry-points",
  "level": 3
}, {
  "value": "3.2 Navigation Flow",
  "id": "32-navigation-flow",
  "level": 3
}, {
  "value": "3.3 Cross-Referencing",
  "id": "33-cross-referencing",
  "level": 3
}, {
  "value": "4. Maintenance Procedures",
  "id": "4-maintenance-procedures",
  "level": 2
}, {
  "value": "4.1 Adding New Documents",
  "id": "41-adding-new-documents",
  "level": 3
}, {
  "value": "4.2 Updating Existing Documents",
  "id": "42-updating-existing-documents",
  "level": 3
}, {
  "value": "4.3 Moving Documents",
  "id": "43-moving-documents",
  "level": 3
}, {
  "value": "4.4 Maintaining READMEs",
  "id": "44-maintaining-readmes",
  "level": 3
}, {
  "value": "5. Structure Principles",
  "id": "5-structure-principles",
  "level": 2
}, {
  "value": "5.1 Depth Management",
  "id": "51-depth-management",
  "level": 3
}, {
  "value": "5.2 Self-Documenting Names",
  "id": "52-self-documenting-names",
  "level": 3
}, {
  "value": "5.3 Separation of Concerns",
  "id": "53-separation-of-concerns",
  "level": 3
}, {
  "value": "6. Scalability",
  "id": "6-scalability",
  "level": 2
}, {
  "value": "6.1 Canonical Pattern",
  "id": "61-canonical-pattern",
  "level": 3
}, {
  "value": "6.2 Adoption Guidance",
  "id": "62-adoption-guidance",
  "level": 3
}, {
  "value": "7. Related Documents",
  "id": "7-related-documents",
  "level": 2
}, {
  "value": "8. Quick Reference",
  "id": "8-quick-reference",
  "level": 2
}, {
  "value": "Where to Find...",
  "id": "where-to-find",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
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
        id: "kb-structure-overview",
        children: "KB Structure Overview"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Task:"
      }), " E1:S03", ":T05", " – Create KB structure documentation", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Date:"
      }), " 2025-12-03", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Status:"
      }), " ✅ COMPLETE", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Version:"
      }), " v0.1.3.5+1"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "executive-summary",
      children: "Executive Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["This document provides a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "comprehensive overview"
      }), " of the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ai-dev-kit"
      }), " Knowledge Base (KB) structure, including directory purposes, navigation patterns, and maintenance procedures. It serves as the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "primary reference"
      }), " for understanding how the KB is organized and how to navigate it effectively."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Key Points:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "3-level default depth"
        }), " for optimal navigation"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Self-documenting directory names"
        }), " for clarity"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Separation of concerns"
        }), " across four main sections"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Scalable pattern"
        }), " supporting projects from small frameworks to large codebases"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1-kb-structure-overview",
      children: "1. KB Structure Overview"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "11-top-level-structure",
      children: "1.1 Top-Level Structure"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "docs/\n├── README.md                          # Root navigation hub\n├── Architecture/                      # Technical standards, ADRs\n├── changelog-and-release-notes/      # Release documentation\n├── project-management/                 # Project management, Kanban\n└── Guides/                           # User-facing documentation\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "12-section-purposes",
      children: "1.2 Section Purposes"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Section"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Purpose"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Audience"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Depth"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "Architecture/"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Technical standards, ADRs, integration docs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Developers, architects"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3 levels"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "changelog-and-release-notes/"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Release notes, changelogs, version history"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All users"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3 levels"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "project-management/"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Kanban, governance, rituals"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PMs, team leads"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3-4 levels"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "Guides/"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Getting started, framework consumption"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "End users, adopters"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3 levels"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "2-directory-purposes",
      children: "2. Directory Purposes"
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "21-architecture-docsarchitecture",
      children: ["2.1 Architecture (", (0,jsx_runtime.jsx)(_components.code, {
        children: "docs/architecture/"
      }), ")"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Purpose:"
      }), " Technical reference for developers and architects"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Contents:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "standards-and-adrs/"
        }), " – Architecture Decision Records, technical standards", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "dev-kit-versioning-policy.md"
            }), " – Versioning policy"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "dev-kit-kanban-versioning-rw-integration.md"
            }), " – Integration guide"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "kb-structure-overview.md"
            }), " – This document"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Navigation:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Entry point: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/architecture/README.md"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Key documents: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "standards-and-adrs/"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "When to Use:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Looking for technical standards or ADRs"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Understanding versioning or integration patterns"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Reviewing architectural decisions"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "22-changelog-and-release-notes-docschangelog-and-release-notes",
      children: ["2.2 Changelog and Release Notes (", (0,jsx_runtime.jsx)(_components.code, {
        children: "docs/changelog-and-release-notes/"
      }), ")"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Purpose:"
      }), " Release documentation and version history"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Contents:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "changelog-archive/"
        }), " – Detailed per-version changelogs", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "CHANGELOG_v{VERSION}.md"
            }), " – Individual release changelogs"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Navigation:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Entry point: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/changelog-and-release-notes/README.md"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Archive index: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "changelog-archive/README.md"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Main changelog: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "../../CHANGELOG.md"
        }), " (root level)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "When to Use:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Reviewing release history"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Finding detailed changelog for a specific version"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Understanding what changed in a release"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "23-project-management-docsproject-management",
      children: ["2.3 Project Management (", (0,jsx_runtime.jsx)(_components.code, {
        children: "docs/project-management/"
      }), ")"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Purpose:"
      }), " Project management, Kanban, governance"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Contents:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "kanban/"
        }), " – Kanban board, epics, stories", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "_index.md"
            }), " – Board view"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "kboard.md"
            }), " – Detailed board"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "epics/"
            }), " – Epic documentation"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "rituals/"
        }), " – Governance policies, rituals", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "policy/"
            }), " – Policy documents", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: [(0,jsx_runtime.jsx)(_components.code, {
                  children: "kanban-governance-policy.md"
                }), " – Kanban governance"]
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Navigation:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Entry point: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/project-management/README.md"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Kanban board: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "kanban/_index.md"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Epics: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "kanban/epics/"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "When to Use:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Viewing Kanban board"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Finding epic or story documentation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Reviewing governance policies"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "24-guides-docsguides",
      children: ["2.4 Guides (", (0,jsx_runtime.jsx)(_components.code, {
        children: "docs/guides/"
      }), ")"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Purpose:"
      }), " User-facing documentation and how-to guides"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Contents:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "getting-started/"
        }), " – Quick start guides, onboarding"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "framework-consumption/"
        }), " – Guides for adopting frameworks"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Navigation:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Entry point: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/guides/README.md"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Getting started: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "getting-started/"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Framework consumption: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "framework-consumption/"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "When to Use:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "New to the dev-kit"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Adopting frameworks in your project"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Looking for how-to guides"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "25-maintenance-docsmaintenance",
      children: ["2.5 Maintenance (", (0,jsx_runtime.jsx)(_components.code, {
        children: "docs/maintenance/"
      }), ")"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Purpose:"
      }), " Operational runbooks for maintainers (build packages, upload to GitHub Releases). Not for adopters."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Contents:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "README.md"
        }), " – Index of runbooks"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "BUILD_PACKAGES.md"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "BUILD_AND_UPLOAD.md"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "UPLOAD_PACKAGES.md"
        }), ", etc."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "When to Use:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Building or publishing framework packages"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "CI/maintainer workflows"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Convention:"
      }), " These runbooks live under ", (0,jsx_runtime.jsx)(_components.code, {
        children: "docs/maintenance/"
      }), " so the project root stays minimal (README, CHANGELOG, CONTRIBUTING, INSTALL_IN_YOUR_PROJECT, config files only)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "3-navigation-patterns",
      children: "3. Navigation Patterns"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "31-entry-points",
      children: "3.1 Entry Points"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Primary Entry Point:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "docs/README.md"
        }), " – Root navigation hub with links to all sections"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Section Entry Points:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "docs/architecture/README.md"
        }), " – Architecture overview"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "docs/changelog-and-release-notes/README.md"
        }), " – Changelog overview"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "docs/project-management/README.md"
        }), " – Project Management overview"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "docs/guides/README.md"
        }), " – Guides overview"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "32-navigation-flow",
      children: "3.2 Navigation Flow"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "docs/README.md\n  ├─→ Architecture/README.md → standards-and-adrs/\n  ├─→ changelog-and-release-notes/README.md → changelog-archive/\n  ├─→ project-management/README.md → kanban/ → epics/\n  └─→ Guides/README.md → getting-started/ | framework-consumption/\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "33-cross-referencing",
      children: "3.3 Cross-Referencing"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Internal References:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Use relative paths: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "[Architecture Policy](../../governance/standards/dev-kit-versioning-policy.md)"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Test all links to ensure they work"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "External References:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Package references: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "[Workflow Management](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/packages/frameworks/workflow-mgt/README.md)"
        }), " (repository root; outside ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/"
        }), ")"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Root references: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "[Main Changelog](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/CHANGELOG.md)"
        }), " (repo root; outside ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/"
        }), ")"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "4-maintenance-procedures",
      children: "4. Maintenance Procedures"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "41-adding-new-documents",
      children: "4.1 Adding New Documents"
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
        children: "Place in correct category directory"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Follow naming conventions (", (0,jsx_runtime.jsx)(_components.code, {
          children: "kebab-case.md"
        }), ")"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update relevant READMEs with links"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Add cross-references from related documents"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Examples:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["New ADR → ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/architecture/standards-and-adrs/adr-XXX-title.md"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["New guide → ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/guides/getting-started/guide-name.md"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["New epic → ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/project-management/kanban/epics/epic-\\{N\\}.md"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "42-updating-existing-documents",
      children: "4.2 Updating Existing Documents"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Process:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Make content changes"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update metadata (date, version if applicable)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Review and update cross-references"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update README descriptions if purpose changes significantly"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "43-moving-documents",
      children: "4.3 Moving Documents"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Process:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Move file to new location"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Find all references (use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "grep -r \"old/path\" ."
        }), ")"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update all cross-references"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update READMEs (remove from old, add to new)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Test all links"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "44-maintaining-readmes",
      children: "4.4 Maintaining READMEs"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Process:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Every major directory should have a ", (0,jsx_runtime.jsx)(_components.code, {
          children: "README.md"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "READMEs should explain purpose and provide navigation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update READMEs when structure changes"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Keep navigation links current"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "5-structure-principles",
      children: "5. Structure Principles"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "51-depth-management",
      children: "5.1 Depth Management"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Default Rule:"
      }), " 3 levels maximum (", (0,jsx_runtime.jsx)(_components.code, {
        children: "docs/Section/Category/Item.md"
      }), ")"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Exception:"
      }), " 4th level only when clearly justified (e.g., epic-specific assets)"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Anti-Pattern:"
      }), " Avoid 5+ level depths"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "52-self-documenting-names",
      children: "5.2 Self-Documenting Names"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Directories:"
      }), " Use descriptive names that indicate purpose"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["✅ ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Architecture/standards-and-adrs/"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["❌ ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Arch/SA/"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Files:"
      }), " Use ", (0,jsx_runtime.jsx)(_components.code, {
        children: "kebab-case"
      }), " with descriptive names"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["✅ ", (0,jsx_runtime.jsx)(_components.code, {
          children: "dev-kit-versioning-policy.md"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["❌ ", (0,jsx_runtime.jsx)(_components.code, {
          children: "version.md"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "53-separation-of-concerns",
      children: "5.3 Separation of Concerns"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Rule:"
      }), " Each section has a distinct purpose"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Architecture = Technical reference"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Project Management = Project management"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Changelog = Release documentation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Guides = User-facing docs"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Avoid:"
      }), " Mixing concerns (e.g., don't put user guides in Architecture)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "6-scalability",
      children: "6. Scalability"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "61-canonical-pattern",
      children: "6.1 Canonical Pattern"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The dev-kit uses a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "minimal subset"
      }), " of the canonical KB pattern (see ", (0,jsx_runtime.jsx)(_components.code, {
        children: "T06-scalable-kb-pattern.md"
      }), "):"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Core Sections (Always Present):"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Architecture"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Project Management"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Changelog"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Guides"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Optional Sections (For Large Projects):"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "engineering-and-platform"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Operations_and_SRE"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Testing"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Product_and_Experience"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Enablement"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Data_and_Insights"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "62-adoption-guidance",
      children: "6.2 Adoption Guidance"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "For Small Projects (like dev-kit):"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use core sections only"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Keep structure simple"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Focus on essential documentation"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "For Large Projects (100K+ LOC):"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Adopt canonical pattern"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Add optional sections as needed"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Maintain 3-level default depth"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["See ", (0,jsx_runtime.jsx)(_components.code, {
          children: "T06-scalable-kb-pattern.md"
        }), " for full guidance"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "7-related-documents",
      children: "7. Related Documents"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "docs/project-management/kanban/epics/epic-01/story-03-core-kb-structure-for-dev-kit/T01-kb-structure-analysis.md"
        }), " – Structure analysis"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "docs/project-management/kanban/epics/epic-01/story-03-core-kb-structure-for-dev-kit/T02-kb-structure-principles.md"
        }), " – Structure principles"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "docs/project-management/kanban/epics/epic-01/story-03-core-kb-structure-for-dev-kit/T03-kb-structure-migration-guide.md"
        }), " – Migration guide"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "docs/project-management/kanban/epics/epic-01/story-03-core-kb-structure-for-dev-kit/T06-scalable-kb-pattern.md"
        }), " – Scalable pattern"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "8-quick-reference",
      children: "8. Quick Reference"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "where-to-find",
      children: "Where to Find..."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Versioning Policy:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "docs/architecture/standards-and-adrs/dev-kit-versioning-policy.md"
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Kanban Governance:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "docs/project-management/rituals/policy/kanban-governance-policy.md"
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Kanban Board:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "docs/project-management/kanban/_index.md"
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Changelog Archive:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "docs/changelog-and-release-notes/changelog-archive/"
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Getting Started:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "docs/guides/getting-started/"
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Framework Consumption:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "docs/guides/framework-consumption/"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.em, {
        children: "End of KB Structure Overview"
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