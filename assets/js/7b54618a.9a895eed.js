"use strict";
(self["webpackChunkportal"] = self["webpackChunkportal"] || []).push([["12330"], {
33863(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_project_management_kanban_epics_epic_01_story_02_package_and_repo_architecture_t_04_consumption_patterns_md_7b5_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-project-management-kanban-epics-epic-01-story-02-package-and-repo-architecture-t-04-consumption-patterns-md-7b5.json
var site_docs_project_management_kanban_epics_epic_01_story_02_package_and_repo_architecture_t_04_consumption_patterns_md_7b5_namespaceObject = JSON.parse('{"id":"project-management/kanban/epics/epic-01/story-02-package-and-repo-architecture/T04-consumption-patterns","title":"Consumption Patterns for Framework Packages","description":"Task IDS02:T04","source":"@site/../docs/project-management/kanban/epics/epic-01/story-02-package-and-repo-architecture/T04-consumption-patterns.md","sourceDirName":"project-management/kanban/epics/epic-01/story-02-package-and-repo-architecture","slug":"/project-management/kanban/epics/epic-01/story-02-package-and-repo-architecture/T04-consumption-patterns","permalink":"/ai-dev-kit/docs/project-management/kanban/epics/epic-01/story-02-package-and-repo-architecture/T04-consumption-patterns","draft":false,"unlisted":false,"editUrl":"https://github.com/RMS-Ltd/ai-dev-kit/tree/main/docs/../docs/project-management/kanban/epics/epic-01/story-02-package-and-repo-architecture/T04-consumption-patterns.md","tags":[],"version":"current","frontMatter":{"lifecycle":"evergreen","ttl_days":null,"created_at":"2025-12-04T12:01:50.000Z","expires_at":null,"housekeeping_policy":"keep"},"sidebar":"docsSidebar","previous":{"title":"Package Dependency Matrix","permalink":"/ai-dev-kit/docs/project-management/kanban/epics/epic-01/story-02-package-and-repo-architecture/T03-package-dependency-matrix"},"next":{"title":"Epic 1, Story 2, Task 5: Update package READMEs with modularity information","permalink":"/ai-dev-kit/docs/project-management/kanban/epics/epic-01/story-02-package-and-repo-architecture/T05-update-package-readmes-with-modularity-information"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ../docs/project-management/kanban/epics/epic-01/story-02-package-and-repo-architecture/T04-consumption-patterns.md


const frontMatter = {
	lifecycle: 'evergreen',
	ttl_days: null,
	created_at: new Date('2025-12-04T12:01:50.000Z'),
	expires_at: null,
	housekeeping_policy: 'keep'
};
const contentTitle = 'Consumption Patterns for Framework Packages';

const assets = {

};



const toc = [{
  "value": "Executive Summary",
  "id": "executive-summary",
  "level": 2
}, {
  "value": "1. Decision Tree: Which Packages Do I Need?",
  "id": "1-decision-tree-which-packages-do-i-need",
  "level": 2
}, {
  "value": "1.1 Quick Decision Guide",
  "id": "11-quick-decision-guide",
  "level": 3
}, {
  "value": "1.2 Package Selection Matrix",
  "id": "12-package-selection-matrix",
  "level": 3
}, {
  "value": "2. Standalone Usage Patterns",
  "id": "2-standalone-usage-patterns",
  "level": 2
}, {
  "value": "2.1 Workflow Management Package (Standalone)",
  "id": "21-workflow-management-package-standalone",
  "level": 3
}, {
  "value": "2.2 Numbering &amp; Versioning Package (Standalone)",
  "id": "22-numbering--versioning-package-standalone",
  "level": 3
}, {
  "value": "2.3 Kanban Package (Standalone)",
  "id": "23-kanban-package-standalone",
  "level": 3
}, {
  "value": "3. Combined Usage Patterns",
  "id": "3-combined-usage-patterns",
  "level": 2
}, {
  "value": "3.1 Workflow Management + Numbering &amp; Versioning",
  "id": "31-workflow-management--numbering--versioning",
  "level": 3
}, {
  "value": "3.2 Kanban + Numbering &amp; Versioning",
  "id": "32-kanban--numbering--versioning",
  "level": 3
}, {
  "value": "3.3 Kanban + Workflow Management",
  "id": "33-kanban--workflow-management",
  "level": 3
}, {
  "value": "3.4 All Three Packages (Complete Integration)",
  "id": "34-all-three-packages-complete-integration",
  "level": 3
}, {
  "value": "4. Incremental Adoption Patterns",
  "id": "4-incremental-adoption-patterns",
  "level": 2
}, {
  "value": "4.1 Pattern: Start with Versioning, Add Workflow",
  "id": "41-pattern-start-with-versioning-add-workflow",
  "level": 3
}, {
  "value": "4.2 Pattern: Start with Workflow, Add Versioning",
  "id": "42-pattern-start-with-workflow-add-versioning",
  "level": 3
}, {
  "value": "4.3 Pattern: Start with Kanban, Add Integration",
  "id": "43-pattern-start-with-kanban-add-integration",
  "level": 3
}, {
  "value": "4.4 Pattern: Complete System from Start",
  "id": "44-pattern-complete-system-from-start",
  "level": 3
}, {
  "value": "5. Customization Examples",
  "id": "5-customization-examples",
  "level": 2
}, {
  "value": "5.1 Custom Version Schema",
  "id": "51-custom-version-schema",
  "level": 3
}, {
  "value": "5.2 Custom Branch Naming",
  "id": "52-custom-branch-naming",
  "level": 3
}, {
  "value": "5.3 Custom Kanban Structure",
  "id": "53-custom-kanban-structure",
  "level": 3
}, {
  "value": "6. Migration Patterns",
  "id": "6-migration-patterns",
  "level": 2
}, {
  "value": "6.1 Migrating from Manual Versioning to RW",
  "id": "61-migrating-from-manual-versioning-to-rw",
  "level": 3
}, {
  "value": "6.2 Migrating from Simple Kanban to Integrated Kanban",
  "id": "62-migrating-from-simple-kanban-to-integrated-kanban",
  "level": 3
}, {
  "value": "7. Best Practices",
  "id": "7-best-practices",
  "level": 2
}, {
  "value": "7.1 Package Selection",
  "id": "71-package-selection",
  "level": 3
}, {
  "value": "7.2 Implementation",
  "id": "72-implementation",
  "level": 3
}, {
  "value": "7.3 Maintenance",
  "id": "73-maintenance",
  "level": 3
}, {
  "value": "8. Troubleshooting",
  "id": "8-troubleshooting",
  "level": 2
}, {
  "value": "8.1 RW Not Updating Kanban",
  "id": "81-rw-not-updating-kanban",
  "level": 3
}, {
  "value": "8.2 Version Schema Mismatch",
  "id": "82-version-schema-mismatch",
  "level": 3
}, {
  "value": "8.3 Kanban Version Markers Not Working",
  "id": "83-kanban-version-markers-not-working",
  "level": 3
}, {
  "value": "9. Summary",
  "id": "9-summary",
  "level": 2
}, {
  "value": "9.1 Standalone Usage",
  "id": "91-standalone-usage",
  "level": 3
}, {
  "value": "9.2 Combined Usage",
  "id": "92-combined-usage",
  "level": 3
}, {
  "value": "9.3 Incremental Adoption",
  "id": "93-incremental-adoption",
  "level": 3
}, {
  "value": "10. Next Steps",
  "id": "10-next-steps",
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
        id: "consumption-patterns-for-framework-packages",
        children: "Consumption Patterns for Framework Packages"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Task ID:"
      }), " E01:S02", ":T04", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Task:"
      }), " E01:S02", ":T04", " – Document consumption patterns for each framework", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Date:"
      }), " 2025-12-02", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Status:"
      }), " ✅ COMPLETE"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "executive-summary",
      children: "Executive Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["This document provides ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "detailed consumption patterns"
      }), " for each framework package in ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ai-dev-kit"
      }), ". It includes step-by-step guides for standalone usage, combined usage, and incremental adoption, with practical examples for each scenario."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Key Patterns:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Standalone Usage:"
        }), " Use one package independently"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Combined Usage:"
        }), " Use multiple packages together"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Incremental Adoption:"
        }), " Start with one package, add more over time"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1-decision-tree-which-packages-do-i-need",
      children: "1. Decision Tree: Which Packages Do I Need?"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "11-quick-decision-guide",
      children: "1.1 Quick Decision Guide"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Do you need versioning/version management?\n├─ YES → Consider Numbering & Versioning package\n│\nDo you need automated release workflows?\n├─ YES → Consider Workflow Management package\n│   └─ (Optionally integrates with Numbering & Versioning)\n│\nDo you need work item tracking (Epic/Story/Task)?\n├─ YES → Consider Kanban package\n│   └─ (Optionally integrates with both other packages)\n│\nDo you need all three?\n└─ YES → Use all packages for complete integrated system\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "12-package-selection-matrix",
      children: "1.2 Package Selection Matrix"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Need"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Recommended Package(s)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Standalone?"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Integration Benefits"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Versioning policy only"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Numbering & Versioning"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅ Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None needed"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Release workflow only"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Workflow Management"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅ Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Optional: Numbering & Versioning"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Kanban board only"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Kanban"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅ Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Optional: Both other packages"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Versioning + Workflow"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Numbering & Versioning + Workflow Management"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅ Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RW uses version schema"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Versioning + Kanban"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Numbering & Versioning + Kanban"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅ Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Kanban uses version markers"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Workflow + Kanban"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Workflow Management + Kanban"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅ Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RW updates Kanban docs"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Complete system"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All three packages"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅ Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Full three-way integration"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "2-standalone-usage-patterns",
      children: "2. Standalone Usage Patterns"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "21-workflow-management-package-standalone",
      children: "2.1 Workflow Management Package (Standalone)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Use Case:"
      }), " You need automated release workflows but don't need Kanban or a separate versioning policy."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step-by-Step Guide:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Copy Package Files:"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-bash",
            children: "# Copy Workflow Management package\ncp -r ai-dev-kit/packages/frameworks/workflow\\ mgt/* /path/to/your/project/\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Update File Paths:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Search and replace ", (0,jsx_runtime.jsx)(_components.code, {
              children: "src/fynd_deals/version.py"
            }), " → ", (0,jsx_runtime.jsx)(_components.code, {
              children: "src/yourproject/version.py"
            })]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Search and replace ", (0,jsx_runtime.jsx)(_components.code, {
              children: "CHANGELOG_ARCHIVE/"
            }), " → Your changelog archive path"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Search and replace ", (0,jsx_runtime.jsx)(_components.code, {
              children: "docs/documentation/"
            }), " → Your documentation path"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Customize Version Schema (if needed):"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Update ", (0,jsx_runtime.jsx)(_components.code, {
              children: "docs/architecture/standards-and-adrs/versioning-policy.md"
            })]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Update validation scripts if schema differs"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsxs)(_components.strong, {
            children: ["Add RW Trigger to ", (0,jsx_runtime.jsx)(_components.code, {
              children: ".cursorrules"
            }), ":"]
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Copy ", (0,jsx_runtime.jsx)(_components.code, {
              children: "cursorrules-rw-trigger-section.md"
            }), " content"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Paste into your ", (0,jsx_runtime.jsx)(_components.code, {
              children: ".cursorrules"
            }), " file"]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Update all file paths"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Test the Workflow:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Create a version file: ", (0,jsx_runtime.jsx)(_components.code, {
              children: "src/yourproject/version.py"
            })]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Create an epic branch: ", (0,jsx_runtime.jsx)(_components.code, {
              children: "git checkout -b epic/1-first-epic"
            })]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Send e.g. ", (0,jsx_runtime.jsx)(_components.code, {
              children: "RW E01S01T01"
            }), " or ", (0,jsx_runtime.jsx)(_components.code, {
              children: "RW E01:S01:T01"
            }), " in your AI assistant (", (0,jsx_runtime.jsx)(_components.strong, {
              children: "FR-060"
            }), ")"]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Verify the workflow steps execute per your configuration"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "What You Get:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Automated 11-step Release Workflow"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Version bumping and changelog generation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Git operations (commit, tag, push)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Validation scripts"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Included versioning policy (can swap if needed)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "What You Don't Need:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "❌ Kanban package (not required)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "❌ Numbering & Versioning package (included versioning policy is sufficient)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example Project Structure:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "your-project/\n├── src/\n│   └── yourproject/\n│       └── version.py          # Version file\n├── docs/\n│   └── Documentation/\n│       └── Developer_Docs/\n│           └── vwmp/\n│               └── release-workflow-agent-execution.md\n├── workflows/\n│   └── release-workflow.yaml\n├── scripts/\n│   └── validation/\n│       ├── validate_branch_context.py\n│       └── validate_changelog_format.py\n├── CHANGELOG.md\n├── CHANGELOG_ARCHIVE/\n└── .cursorrules                 # With RW trigger section\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "22-numbering--versioning-package-standalone",
      children: "2.2 Numbering & Versioning Package (Standalone)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Use Case:"
      }), " You need a versioning policy and strategy but don't need workflows or Kanban."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step-by-Step Guide:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Copy Package Files:"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-bash",
            children: "# Copy Numbering & Versioning package\ncp -r ai-dev-kit/packages/frameworks/numbering\\ \\&\\ versioning/* /path/to/your/project/docs/versioning/\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Customize Policy Documents:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Review ", (0,jsx_runtime.jsx)(_components.code, {
              children: "versioning-policy.md"
            }), " and adapt to your project"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Review ", (0,jsx_runtime.jsx)(_components.code, {
              children: "versioning-strategy.md"
            }), " and adapt to your project"]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Update examples to match your project structure"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Create Version File:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Create ", (0,jsx_runtime.jsx)(_components.code, {
              children: "src/yourproject/version.py"
            }), " following the schema"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Use ", (0,jsx_runtime.jsx)(_components.code, {
              children: "RC.EPIC.STORY.TASK+BUILD"
            }), " format (or customize)"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Implement Versioning:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Follow ", (0,jsx_runtime.jsx)(_components.code, {
              children: "IMPLEMENTATION_GUIDE.md"
            })]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Set up version file location"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Create CHANGELOG structure"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Define your epic/story/task numbering"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Use Templates (if needed):"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Use ", (0,jsx_runtime.jsx)(_components.code, {
              children: "EPIC_TEMPLATE.md"
            }), " for epic documents"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Use ", (0,jsx_runtime.jsx)(_components.code, {
              children: "STORY_TEMPLATE.md"
            }), " for story documents"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "What You Get:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Complete versioning policy and strategy"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Implementation guide"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Templates for Epic and Story documents"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Versioning best practices"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "What You Don't Need:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "❌ Workflow Management package (not required)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "❌ Kanban package (not required)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example Project Structure:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "your-project/\n├── src/\n│   └── yourproject/\n│       └── version.py          # Version file\n├── docs/\n│   └── versioning/\n│       ├── versioning-policy.md\n│       ├── versioning-strategy.md\n│       ├── IMPLEMENTATION_GUIDE.md\n│       ├── EPIC_TEMPLATE.md\n│       └── STORY_TEMPLATE.md\n└── CHANGELOG.md\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "23-kanban-package-standalone",
      children: "2.3 Kanban Package (Standalone)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Use Case:"
      }), " You need work item tracking (Epic/Story/Task) but don't need workflows or versioning integration."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step-by-Step Guide:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Copy Package Files:"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-bash",
            children: "# Copy Kanban package\ncp -r ai-dev-kit/packages/frameworks/kanban/* /path/to/your/project/docs/kanban/\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Set Up Kanban Structure:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Create ", (0,jsx_runtime.jsx)(_components.code, {
              children: "docs/project-management/kanban/"
            }), " directory"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Create ", (0,jsx_runtime.jsx)(_components.code, {
              children: "_index.md"
            }), " (Kanban board)"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Create ", (0,jsx_runtime.jsx)(_components.code, {
              children: "epics/"
            }), " directory structure"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Customize Templates:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Review ", (0,jsx_runtime.jsx)(_components.code, {
              children: "templates/EPIC_TEMPLATE.md"
            })]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Review ", (0,jsx_runtime.jsx)(_components.code, {
              children: "templates/STORY_TEMPLATE.md"
            })]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Review ", (0,jsx_runtime.jsx)(_components.code, {
              children: "templates/FR_TEMPLATE.md"
            }), " and ", (0,jsx_runtime.jsx)(_components.code, {
              children: "BR_TEMPLATE.md"
            })]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Adapt to your project structure"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Set Up Governance:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Review ", (0,jsx_runtime.jsx)(_components.code, {
              children: "policies/kanban-governance-policy.md"
            })]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Adapt to your project needs"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Create local policy if needed"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Start Using Kanban:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Create your first Epic using the template"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Create Stories under the Epic"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Create Tasks under Stories"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Track work items"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "What You Get:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Complete Kanban governance policy"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Epic/Story/Task templates"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ FR/BR intake templates and guides"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Kanban best practices"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "What You Don't Need:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "❌ Workflow Management package (not required, update Kanban manually)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "❌ Numbering & Versioning package (not required, skip version markers)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example Project Structure:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "your-project/\n├── docs/\n│   └── project-management/\n│       └── kanban/\n│           ├── _index.md\n│           ├── epics/\n│           │   └── epic-01.md\n│           │       └── stories/\n│           │           └── story-001.md\n│           └── README.md\n└── docs/\n    └── kanban/\n        ├── policies/\n        │   └── kanban-governance-policy.md\n        ├── templates/\n        │   ├── EPIC_TEMPLATE.md\n        │   ├── STORY_TEMPLATE.md\n        │   ├── FR_TEMPLATE.md\n        │   └── BR_TEMPLATE.md\n        └── FR_BR_INTAKE_GUIDE.md\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "3-combined-usage-patterns",
      children: "3. Combined Usage Patterns"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "31-workflow-management--numbering--versioning",
      children: "3.1 Workflow Management + Numbering & Versioning"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Use Case:"
      }), " You need automated release workflows with a consistent versioning policy."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step-by-Step Guide:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Copy Both Packages:"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-bash",
            children: "# Copy Workflow Management\ncp -r ai-dev-kit/packages/frameworks/workflow\\ mgt/* /path/to/your/project/\n\n# Copy Numbering & Versioning\ncp -r ai-dev-kit/packages/frameworks/numbering\\ \\&\\ versioning/* /path/to/your/project/docs/versioning/\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Use Numbering & Versioning as Canonical:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Use ", (0,jsx_runtime.jsx)(_components.code, {
              children: "numbering-versioning/versioning-policy.md"
            }), " as the authoritative versioning policy"]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Remove or archive Workflow Management's included versioning policy"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Update Workflow Management docs to reference Numbering & Versioning policy"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Configure Integration:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Ensure both packages use the same version schema"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Update Workflow Management validation scripts to match Numbering & Versioning schema"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Update RW trigger section to reference Numbering & Versioning policy"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Test Integration:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Verify RW reads version from ", (0,jsx_runtime.jsx)(_components.code, {
              children: "version.py"
            })]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Verify RW validates version format using Numbering & Versioning schema"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Verify RW generates changelogs using Numbering & Versioning format"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Integration Benefits:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Consistent versioning policy across projects"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Shared versioning strategy"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Easier maintenance (single source of truth)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ RW automatically uses Numbering & Versioning schema"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example Configuration:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "# src/yourproject/version.py\n# Uses schema from docs/versioning/versioning-policy.md\n\nVERSION_RC = 0\nVERSION_EPIC = 1\nVERSION_STORY = 1\nVERSION_TASK = 1\nVERSION_BUILD = 1\nVERSION_STRING = f\"{VERSION_RC}.{VERSION_EPIC}.{VERSION_STORY}.{VERSION_TASK}+{VERSION_BUILD}\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "32-kanban--numbering--versioning",
      children: "3.2 Kanban + Numbering & Versioning"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Use Case:"
      }), " You need work item tracking with version-based traceability."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step-by-Step Guide:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Copy Both Packages:"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-bash",
            children: "# Copy Kanban\ncp -r ai-dev-kit/packages/frameworks/kanban/* /path/to/your/project/docs/kanban/\n\n# Copy Numbering & Versioning\ncp -r ai-dev-kit/packages/frameworks/numbering\\ \\&\\ versioning/* /path/to/your/project/docs/versioning/\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Configure Version Markers:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Review ", (0,jsx_runtime.jsx)(_components.code, {
              children: "kanban/integration/numbering-versioning-integration.md"
            })]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Set up version markers in Kanban docs (e.g., ", (0,jsx_runtime.jsx)(_components.code, {
              children: "✅ COMPLETE (v0.1.2.1+1)"
            }), ")"]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Ensure Kanban uses same version schema as Numbering & Versioning"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Update Kanban Templates:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Add version marker fields to Epic template"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Add version marker fields to Story template"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Add version marker fields to Task checklists"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Use Version Markers:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "When completing tasks, add version markers"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "When completing stories, add version markers"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Link Kanban work items to version numbers"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Integration Benefits:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Forensic traceability (work items → versions)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Version-based ordering"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Clear version history per work item"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example Kanban Entry:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-markdown",
        children: "## Tasks\n\n- [x] **T001 – Create feature** ✅ COMPLETE (v0.1.2.1+1)\n- [x] **T002 – Test feature** ✅ COMPLETE (v0.1.2.2+1)\n- [ ] **T003 – Document feature** - TODO\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "33-kanban--workflow-management",
      children: "3.3 Kanban + Workflow Management"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Use Case:"
      }), " You need work item tracking with automated updates via Release Workflow."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step-by-Step Guide:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Copy Both Packages:"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-bash",
            children: "# Copy Kanban\ncp -r ai-dev-kit/packages/frameworks/kanban/* /path/to/your/project/docs/kanban/\n\n# Copy Workflow Management\ncp -r ai-dev-kit/packages/frameworks/workflow\\ mgt/* /path/to/your/project/\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Configure RW → Kanban Integration:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Review ", (0,jsx_runtime.jsx)(_components.code, {
              children: "kanban/integration/workflow-management-integration.md"
            })]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Update RW Step 6 to update Kanban docs"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Configure Kanban doc paths in RW trigger section"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Set Up Kanban Structure:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Create Kanban board structure"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Create Epic/Story documents"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Ensure RW can find and update Kanban docs"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Test Integration:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Run RW on a task"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Verify RW updates Kanban docs automatically"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Verify version markers are added correctly"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Integration Benefits:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Automatic Kanban updates via RW"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Consistent version markers"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Reduced manual work"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Always up-to-date Kanban docs"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example RW Step 6 Update:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-markdown",
        children: "## Tasks\n\n- [x] **T001 – Create feature** ✅ COMPLETE (v0.1.2.1+1)\n- [x] **T002 – Test feature** ✅ COMPLETE (v0.1.2.2+1)  # ← Auto-updated by RW\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "34-all-three-packages-complete-integration",
      children: "3.4 All Three Packages (Complete Integration)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Use Case:"
      }), " You need a complete integrated system with end-to-end traceability."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step-by-Step Guide:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Copy All Packages:"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-bash",
            children: "# Copy all three packages\ncp -r ai-dev-kit/packages/frameworks/workflow\\ mgt/* /path/to/your/project/\ncp -r ai-dev-kit/packages/frameworks/numbering\\ \\&\\ versioning/* /path/to/your/project/docs/versioning/\ncp -r ai-dev-kit/packages/frameworks/kanban/* /path/to/your/project/docs/kanban/\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Configure Three-Way Integration:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Use Numbering & Versioning as canonical versioning policy"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Configure RW to use Numbering & Versioning schema"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Configure RW to update Kanban docs"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Configure Kanban to use version markers"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Set Up Complete System:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Create version file using Numbering & Versioning schema"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Create Kanban board structure"
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Add RW trigger to ", (0,jsx_runtime.jsx)(_components.code, {
              children: ".cursorrules"
            })]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Review integration guides for all three packages"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Test Complete Integration:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Create a task in Kanban"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Work on the task"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Run RW"
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Verify:", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "Version bumped correctly"
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "Changelog generated"
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "Kanban docs updated with version marker"
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "All three systems stay in sync"
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Integration Benefits:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Complete end-to-end traceability"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Automated workflows"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Consistent versioning"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Always synchronized systems"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example Complete Flow:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Create Task in Kanban:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "E01:S01:T01 – Implement feature"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Work on Task:"
        }), " Make code changes"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Run RW:"
        }), " e.g. ", (0,jsx_runtime.jsx)(_components.code, {
          children: "RW E01S01T01"
        }), " or ", (0,jsx_runtime.jsx)(_components.code, {
          children: "RW E01:S01:T01"
        }), " in AI assistant (", (0,jsx_runtime.jsx)(_components.strong, {
          children: "FR-060"
        }), ")"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "RW Executes:"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Bumps version: ", (0,jsx_runtime.jsx)(_components.code, {
              children: "0.1.1.1+1"
            }), " → ", (0,jsx_runtime.jsx)(_components.code, {
              children: "0.1.1.1+2"
            })]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Generates changelog"
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Updates Kanban: ", (0,jsx_runtime.jsx)(_components.code, {
              children: "✅ COMPLETE (v0.1.1.1+2)"
            })]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Commits and tags"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Result:"
        }), " Task complete, versioned, and traceable"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "4-incremental-adoption-patterns",
      children: "4. Incremental Adoption Patterns"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "41-pattern-start-with-versioning-add-workflow",
      children: "4.1 Pattern: Start with Versioning, Add Workflow"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Phase 1: Numbering & Versioning Only"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Copy Numbering & Versioning package"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Set up versioning policy"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Create version file"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Start versioning releases manually"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Phase 2: Add Workflow Management"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Copy Workflow Management package"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Configure RW to use Numbering & Versioning schema"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Replace manual versioning with automated RW"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Keep using Numbering & Versioning as canonical policy"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Benefits:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Learn versioning first"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Add automation when ready"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Smooth transition"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "42-pattern-start-with-workflow-add-versioning",
      children: "4.2 Pattern: Start with Workflow, Add Versioning"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Phase 1: Workflow Management Only"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Copy Workflow Management package"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use included versioning policy"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Set up RW trigger"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Start using automated workflows"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Phase 2: Add Numbering & Versioning"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Copy Numbering & Versioning package"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Replace Workflow Management's versioning policy with Numbering & Versioning"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update RW to reference Numbering & Versioning policy"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use Numbering & Versioning as canonical"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Benefits:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Get automation quickly"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Add better versioning policy later"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Easy to swap policies"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "43-pattern-start-with-kanban-add-integration",
      children: "4.3 Pattern: Start with Kanban, Add Integration"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Phase 1: Kanban Only"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Copy Kanban package"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Set up Kanban board"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Track work items manually"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Skip version markers"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Phase 2: Add Versioning Integration"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Copy Numbering & Versioning package"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Add version markers to Kanban docs"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Link work items to versions"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Phase 3: Add Workflow Integration"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Copy Workflow Management package"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Configure RW to update Kanban docs"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Automate Kanban updates"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Benefits:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Start simple with Kanban"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Add versioning when needed"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Add automation when ready"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Gradual complexity increase"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "44-pattern-complete-system-from-start",
      children: "4.4 Pattern: Complete System from Start"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "All Packages at Once:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Copy all three packages"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Set up complete integration"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use all features from day one"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Benefits:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Full feature set immediately"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Best practices from start"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "No migration needed"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Considerations:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Higher initial complexity"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "More to learn at once"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "More customization needed"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "5-customization-examples",
      children: "5. Customization Examples"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "51-custom-version-schema",
      children: "5.1 Custom Version Schema"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Scenario:"
      }), " You want to use a different version schema (e.g., ", (0,jsx_runtime.jsx)(_components.code, {
        children: "MAJOR.MINOR.PATCH"
      }), ")."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Steps:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Copy Workflow Management package"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Update ", (0,jsx_runtime.jsx)(_components.code, {
          children: "versioning-policy.md"
        }), " with your schema"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update validation scripts to parse your schema"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update RW Step 1 to handle your schema"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Update ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".cursorrules"
        }), " version schema section"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "# src/yourproject/version.py\nVERSION_MAJOR = 1\nVERSION_MINOR = 2\nVERSION_PATCH = 3\nVERSION_STRING = f\"{VERSION_MAJOR}.{VERSION_MINOR}.{VERSION_PATCH}\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "52-custom-branch-naming",
      children: "5.2 Custom Branch Naming"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Scenario:"
      }), " You use ", (0,jsx_runtime.jsx)(_components.code, {
        children: "feature/epic-\\{n\\}"
      }), " instead of ", (0,jsx_runtime.jsx)(_components.code, {
        children: "epic/\\{n\\}"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Steps:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Copy Workflow Management package"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Update ", (0,jsx_runtime.jsx)(_components.code, {
          children: "validate_branch_context.py"
        }), ":", "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-python",
            children: "def parse_branch_epic(branch: str) -> Optional[int]:\n    match = re.match(r\"^feature/epic-(\\d+)\", branch)\n    if match:\n        return int(match.group(1))\n    return None\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Update ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".cursorrules"
        }), " branch mapping section"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update documentation examples"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "53-custom-kanban-structure",
      children: "5.3 Custom Kanban Structure"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Scenario:"
      }), " You want a different Kanban directory structure."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Steps:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Copy Kanban package"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Adapt directory structure to your needs"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update all path references in Kanban docs"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update RW Step 6 to use your structure"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update templates to match your structure"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "your-project/\n└── docs/\n    └── project-management/\n        └── kanban/\n            ├── board.md\n            └── epics/\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "6-migration-patterns",
      children: "6. Migration Patterns"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "61-migrating-from-manual-versioning-to-rw",
      children: "6.1 Migrating from Manual Versioning to RW"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Before:"
      }), " Manual versioning, manual changelogs, manual Git operations"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "After:"
      }), " Automated RW with versioning and changelog generation"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Migration Steps:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Copy Workflow Management package"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Create version file matching current version"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Convert existing changelog to new format"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Set up RW trigger"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Test RW on a feature branch"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Gradually adopt RW for all releases"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "62-migrating-from-simple-kanban-to-integrated-kanban",
      children: "6.2 Migrating from Simple Kanban to Integrated Kanban"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Before:"
      }), " Simple Kanban board, no versioning, manual updates"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "After:"
      }), " Integrated Kanban with version markers and automated updates"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Migration Steps:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Copy Numbering & Versioning package"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Copy Workflow Management package"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Add version markers to existing Kanban docs"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Configure RW to update Kanban docs"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Test integration"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Gradually adopt integrated system"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "7-best-practices",
      children: "7. Best Practices"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "71-package-selection",
      children: "7.1 Package Selection"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Start Small:"
        }), " Begin with one package, add more as needed"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Understand Dependencies:"
        }), " Read dependency documentation before adopting"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Test Integrations:"
        }), " Verify integrations work before relying on them"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Customize Carefully:"
        }), " Understand impact of breaking dependencies"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "72-implementation",
      children: "7.2 Implementation"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Follow Guides:"
        }), " Use provided implementation guides"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Update Paths:"
        }), " Always update file paths to match your project"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Test Thoroughly:"
        }), " Test workflows before using in production"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Document Customizations:"
        }), " Keep track of what you change"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "73-maintenance",
      children: "7.3 Maintenance"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Preserve Core Methodology:"
        }), " Don't break core functionality when customizing"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Update Documentation:"
        }), " Keep customization notes current"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Test After Updates:"
        }), " Verify packages still work after updates"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Share Improvements:"
        }), " Contribute improvements back (if appropriate)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "8-troubleshooting",
      children: "8. Troubleshooting"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "81-rw-not-updating-kanban",
      children: "8.1 RW Not Updating Kanban"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem:"
      }), " RW runs but doesn't update Kanban docs."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Solutions:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Check Kanban doc paths in RW trigger section"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Verify Kanban structure matches expected format"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Check RW Step 6 configuration"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Review ", (0,jsx_runtime.jsx)(_components.code, {
          children: "kanban/integration/workflow-management-integration.md"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "82-version-schema-mismatch",
      children: "8.2 Version Schema Mismatch"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem:"
      }), " RW and Numbering & Versioning use different schemas."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Solutions:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use Numbering & Versioning as canonical"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update RW to reference Numbering & Versioning schema"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Ensure both packages use same schema"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update validation scripts"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "83-kanban-version-markers-not-working",
      children: "8.3 Kanban Version Markers Not Working"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem:"
      }), " Version markers not appearing in Kanban docs."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Solutions:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Check Kanban template format"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Verify RW Step 6 updates Kanban docs"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Review version marker format: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "✅ COMPLETE (v{version})"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Check Kanban doc structure"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "9-summary",
      children: "9. Summary"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "91-standalone-usage",
      children: "9.1 Standalone Usage"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Workflow Management:"
        }), " Automated release workflows"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Numbering & Versioning:"
        }), " Versioning policy and strategy"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Kanban:"
        }), " Work item tracking"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "92-combined-usage",
      children: "9.2 Combined Usage"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Workflow + Versioning:"
        }), " Automated workflows with consistent versioning"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Kanban + Versioning:"
        }), " Work tracking with version markers"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Kanban + Workflow:"
        }), " Work tracking with automated updates"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "All Three:"
        }), " Complete integrated system"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "93-incremental-adoption",
      children: "9.3 Incremental Adoption"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Start with one package"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Add more packages over time"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Gradual complexity increase"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Smooth migration path"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "10-next-steps",
      children: "10. Next Steps"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This consumption patterns document provides the foundation for:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Task 5:"
        }), " Update package READMEs with modularity information (implementation)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.em, {
        children: "Document completed: 2025-12-02"
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.em, {
        children: "Task: E1:S02:T004"
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsxs)(_components.em, {
        children: ["Next: E01:S02", ":T05", " – Update package READMEs with modularity information"]
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