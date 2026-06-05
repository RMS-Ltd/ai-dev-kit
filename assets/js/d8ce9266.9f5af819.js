"use strict";
(self["webpackChunkportal"] = self["webpackChunkportal"] || []).push([["9483"], {
7363(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_project_management_kanban_epics_epic_01_story_02_package_and_repo_architecture_t_02_modularity_principles_md_d8c_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-project-management-kanban-epics-epic-01-story-02-package-and-repo-architecture-t-02-modularity-principles-md-d8c.json
var site_docs_project_management_kanban_epics_epic_01_story_02_package_and_repo_architecture_t_02_modularity_principles_md_d8c_namespaceObject = JSON.parse('{"id":"project-management/kanban/epics/epic-01/story-02-package-and-repo-architecture/T02-modularity-principles","title":"Modularity Principles and Boundaries","description":"Task IDS02:T02","source":"@site/../docs/project-management/kanban/epics/epic-01/story-02-package-and-repo-architecture/T02-modularity-principles.md","sourceDirName":"project-management/kanban/epics/epic-01/story-02-package-and-repo-architecture","slug":"/project-management/kanban/epics/epic-01/story-02-package-and-repo-architecture/T02-modularity-principles","permalink":"/ai-dev-kit/docs/project-management/kanban/epics/epic-01/story-02-package-and-repo-architecture/T02-modularity-principles","draft":false,"unlisted":false,"editUrl":"https://github.com/RMS-Ltd/ai-dev-kit/tree/main/docs/../docs/project-management/kanban/epics/epic-01/story-02-package-and-repo-architecture/T02-modularity-principles.md","tags":[],"version":"current","frontMatter":{"lifecycle":"evergreen","ttl_days":null,"created_at":"2025-12-04T12:01:50.000Z","expires_at":null,"housekeeping_policy":"keep"},"sidebar":"docsSidebar","previous":{"title":"Package Structure Analysis Report","permalink":"/ai-dev-kit/docs/project-management/kanban/epics/epic-01/story-02-package-and-repo-architecture/T01-package-structure-analysis"},"next":{"title":"Package Dependency Matrix","permalink":"/ai-dev-kit/docs/project-management/kanban/epics/epic-01/story-02-package-and-repo-architecture/T03-package-dependency-matrix"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ../docs/project-management/kanban/epics/epic-01/story-02-package-and-repo-architecture/T02-modularity-principles.md


const frontMatter = {
	lifecycle: 'evergreen',
	ttl_days: null,
	created_at: new Date('2025-12-04T12:01:50.000Z'),
	expires_at: null,
	housekeeping_policy: 'keep'
};
const contentTitle = 'Modularity Principles and Boundaries';

const assets = {

};



const toc = [{
  "value": "Executive Summary",
  "id": "executive-summary",
  "level": 2
}, {
  "value": "1. What &quot;Modular&quot; Means for ai-dev-kit",
  "id": "1-what-modular-means-for-ai-dev-kit",
  "level": 2
}, {
  "value": "1.1 Core Definition",
  "id": "11-core-definition",
  "level": 3
}, {
  "value": "1.2 Modularity Goals",
  "id": "12-modularity-goals",
  "level": 3
}, {
  "value": "1.3 Independence Metrics",
  "id": "13-independence-metrics",
  "level": 3
}, {
  "value": "2. Package Boundaries",
  "id": "2-package-boundaries",
  "level": 2
}, {
  "value": "2.1 Workflow Management Package",
  "id": "21-workflow-management-package",
  "level": 3
}, {
  "value": "2.2 Numbering &amp; Versioning Package",
  "id": "22-numbering--versioning-package",
  "level": 3
}, {
  "value": "2.3 Kanban Package",
  "id": "23-kanban-package",
  "level": 3
}, {
  "value": "3. Copy vs Reference Patterns",
  "id": "3-copy-vs-reference-patterns",
  "level": 2
}, {
  "value": "3.1 Copy, Don&#39;t Reference",
  "id": "31-copy-dont-reference",
  "level": 3
}, {
  "value": "3.2 Customization Boundaries",
  "id": "32-customization-boundaries",
  "level": 3
}, {
  "value": "3.3 Reference Patterns (When Appropriate)",
  "id": "33-reference-patterns-when-appropriate",
  "level": 3
}, {
  "value": "4. Dependency Rules",
  "id": "4-dependency-rules",
  "level": 2
}, {
  "value": "4.1 Hard Dependencies (Not Allowed)",
  "id": "41-hard-dependencies-not-allowed",
  "level": 3
}, {
  "value": "4.2 Soft/Optional Dependencies",
  "id": "42-softoptional-dependencies",
  "level": 3
}, {
  "value": "4.3 Integration Dependencies",
  "id": "43-integration-dependencies",
  "level": 3
}, {
  "value": "5. Package Independence Rules",
  "id": "5-package-independence-rules",
  "level": 2
}, {
  "value": "5.1 Self-Containment",
  "id": "51-self-containment",
  "level": 3
}, {
  "value": "5.2 Documentation Completeness",
  "id": "52-documentation-completeness",
  "level": 3
}, {
  "value": "5.3 Version Schema Independence",
  "id": "53-version-schema-independence",
  "level": 3
}, {
  "value": "6. Consumption Patterns",
  "id": "6-consumption-patterns",
  "level": 2
}, {
  "value": "6.1 Standalone Consumption",
  "id": "61-standalone-consumption",
  "level": 3
}, {
  "value": "6.2 Combined Consumption",
  "id": "62-combined-consumption",
  "level": 3
}, {
  "value": "6.3 Incremental Adoption",
  "id": "63-incremental-adoption",
  "level": 3
}, {
  "value": "7. Customization Boundaries",
  "id": "7-customization-boundaries",
  "level": 2
}, {
  "value": "7.1 What Can Be Customized",
  "id": "71-what-can-be-customized",
  "level": 3
}, {
  "value": "7.2 What Should Be Preserved",
  "id": "72-what-should-be-preserved",
  "level": 3
}, {
  "value": "7.3 Customization Documentation",
  "id": "73-customization-documentation",
  "level": 3
}, {
  "value": "8. Integration Patterns",
  "id": "8-integration-patterns",
  "level": 2
}, {
  "value": "8.1 Workflow Management ↔ Numbering &amp; Versioning",
  "id": "81-workflow-management--numbering--versioning",
  "level": 3
}, {
  "value": "8.2 Kanban ↔ Numbering &amp; Versioning",
  "id": "82-kanban--numbering--versioning",
  "level": 3
}, {
  "value": "8.3 Kanban ↔ Workflow Management",
  "id": "83-kanban--workflow-management",
  "level": 3
}, {
  "value": "8.4 All Three Packages",
  "id": "84-all-three-packages",
  "level": 3
}, {
  "value": "9. Best Practices",
  "id": "9-best-practices",
  "level": 2
}, {
  "value": "9.1 Package Design",
  "id": "91-package-design",
  "level": 3
}, {
  "value": "9.2 Consumption",
  "id": "92-consumption",
  "level": 3
}, {
  "value": "9.3 Maintenance",
  "id": "93-maintenance",
  "level": 3
}, {
  "value": "10. Summary",
  "id": "10-summary",
  "level": 2
}, {
  "value": "10.1 Core Principles",
  "id": "101-core-principles",
  "level": 3
}, {
  "value": "10.2 Package Boundaries",
  "id": "102-package-boundaries",
  "level": 3
}, {
  "value": "10.3 Dependency Rules",
  "id": "103-dependency-rules",
  "level": 3
}, {
  "value": "10.4 Consumption Patterns",
  "id": "104-consumption-patterns",
  "level": 3
}, {
  "value": "11. Next Steps",
  "id": "11-next-steps",
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
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "modularity-principles-and-boundaries",
        children: "Modularity Principles and Boundaries"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Task ID:"
      }), " E01:S02", ":T02", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Task:"
      }), " E01:S02", ":T02", " – Document modularity principles and boundaries", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Date:"
      }), " 2025-12-02", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Status:"
      }), " ✅ COMPLETE"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "executive-summary",
      children: "Executive Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["This document establishes the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "modularity principles and boundaries"
      }), " for the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ai-dev-kit"
      }), " repository's framework packages. It defines what \"modular\" means for this dev-kit, establishes clear boundaries between packages, documents copy vs reference patterns, and defines dependency rules."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Key Principles:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Standalone First:"
        }), " Each package must be usable independently"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Copy, Don't Reference:"
        }), " Packages are copied into projects, not referenced"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Soft Dependencies:"
        }), " Dependencies between packages are optional, not required"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Clear Boundaries:"
        }), " Each package has a well-defined scope and responsibility"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1-what-modular-means-for-ai-dev-kit",
      children: "1. What \"Modular\" Means for ai-dev-kit"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "11-core-definition",
      children: "1.1 Core Definition"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Modularity"
      }), " in the context of ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ai-dev-kit"
      }), " means:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Standalone Capability:"
        }), " Each framework package can be used independently without requiring other packages from the dev-kit"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Self-Contained:"
        }), " Each package includes all necessary documentation, policies, templates, and tools to function independently"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Flexible Consumption:"
        }), " Users can choose to use one, two, or all three packages based on their needs"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Clear Boundaries:"
        }), " Each package has a well-defined scope and responsibility with minimal overlap"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "12-modularity-goals",
      children: "1.2 Modularity Goals"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The dev-kit's modularity design aims to:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Maximize User Flexibility:"
        }), " Allow users to adopt only what they need"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Minimize Adoption Friction:"
        }), " Make it easy to start with a single package"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Enable Incremental Adoption:"
        }), " Allow users to add more packages over time"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Maintain Package Independence:"
        }), " Ensure packages don't break when used alone"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "13-independence-metrics",
      children: "1.3 Independence Metrics"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A package is considered \"modular\" if it:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Can be copied and used without other dev-kit packages"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Has no hard runtime dependencies on other dev-kit packages"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Includes all necessary documentation and examples"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Has clear customization boundaries"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Documents optional integration points"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Independence Score:"
      }), " Based on analysis (T001), all three packages score 9-10/10 for independence."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "2-package-boundaries",
      children: "2. Package Boundaries"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "21-workflow-management-package",
      children: "2.1 Workflow Management Package"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Scope:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Release Workflow (RW) trigger and execution"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Agent-driven workflow execution methodology"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Workflow validation scripts"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Cursor rules integration"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Boundaries:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Includes:"
        }), " Versioning policy documents (for RW to work)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Excludes:"
        }), " Kanban-specific features (handled by Kanban package)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Optional Integration:"
        }), " Can integrate with Kanban for automatic updates"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Responsibility:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Owns workflow execution patterns"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Owns RW trigger mechanism"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Owns validation scripts for workflows"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "What It Doesn't Own:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Kanban board structure (Kanban package)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Versioning strategy details (Numbering & Versioning package)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "FR/BR intake flow (Kanban package)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "22-numbering--versioning-package",
      children: "2.2 Numbering & Versioning Package"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Scope:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Versioning policy and strategy"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Version schema definition (", (0,jsx_runtime.jsx)(_components.code, {
          children: "RC.EPIC.STORY.TASK+BUILD"
        }), ")"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implementation guides"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Templates (Epic, Story)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Boundaries:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Includes:"
        }), " Complete versioning documentation"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Excludes:"
        }), " Workflow execution (Workflow Management package)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Excludes:"
        }), " Kanban governance (Kanban package, though includes versioning aspects)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Responsibility:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Owns versioning schema definition"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Owns versioning strategy and policies"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Owns versioning implementation guides"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "What It Doesn't Own:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Workflow execution (Workflow Management package)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Kanban board structure (Kanban package)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "FR/BR intake (Kanban package)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "23-kanban-package",
      children: "2.3 Kanban Package"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Scope:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Kanban governance policy"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Epic/Story/Task templates"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "FR/BR intake flow"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Integration with versioning and workflows"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Boundaries:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Includes:"
        }), " Complete Kanban system documentation"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Includes:"
        }), " Integration guides (for optional integration with other packages)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Excludes:"
        }), " Workflow execution details (Workflow Management package)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Excludes:"
        }), " Versioning schema definition (Numbering & Versioning package)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Responsibility:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Owns Kanban governance and structure"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Owns FR/BR → Task → Story → Epic flow"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Owns Kanban templates"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Owns integration documentation"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "What It Doesn't Own:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Workflow execution (Workflow Management package)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Versioning schema (Numbering & Versioning package)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "3-copy-vs-reference-patterns",
      children: "3. Copy vs Reference Patterns"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "31-copy-dont-reference",
      children: "3.1 Copy, Don't Reference"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Core Principle:"
      }), " Packages are ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "copied"
      }), " into projects, not referenced as external dependencies."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Why Copy?"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Customization:"
        }), " Each project needs to customize paths, schemas, and examples"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Independence:"
        }), " Projects shouldn't depend on external repositories"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Version Control:"
        }), " Projects need to version their own copies"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Flexibility:"
        }), " Projects can adapt packages to their specific needs"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "What Gets Copied:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "All package files (documentation, templates, scripts)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Directory structure (adapted to project structure)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Policy documents (customized for project)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "What Doesn't Get Copied:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Dev-kit specific examples (replaced with project examples)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Dev-kit specific paths (updated to project paths)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Dev-kit version numbers (replaced with project versions)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "32-customization-boundaries",
      children: "3.2 Customization Boundaries"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "What Can Be Customized:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ File paths and directory structures"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Version schema (if needed)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Branch naming conventions"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Project-specific examples"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Policy details (within reason)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "What Should Be Preserved:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "⚠️ Core methodology (e.g., RW 11-step process)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "⚠️ Version schema structure (unless explicitly changing)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "⚠️ Integration patterns (if using multiple packages)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "⚠️ Validation logic (unless fixing bugs)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Customization Guidelines:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Document all customizations"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Maintain compatibility with integration points"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update examples to reflect customizations"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Test customizations thoroughly"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "33-reference-patterns-when-appropriate",
      children: "3.3 Reference Patterns (When Appropriate)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "When to Reference:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Integration guides can reference other packages (optional)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Examples can reference other packages (optional)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Documentation can mention other packages (optional)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Reference Format:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use relative paths when packages are in same repo"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Use clear labels: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "[Optional: Requires Numbering & Versioning package]"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Document what happens if referenced package is not used"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-markdown",
        children: "## Optional Integration\n\nThis feature integrates with the **Numbering & Versioning** package\n(see `../numbering-versioning/README.md`).\n\nIf you're not using the Numbering & Versioning package, you can:\n- Use your own versioning policy\n- Skip this integration step\n- Use the feature independently\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "4-dependency-rules",
      children: "4. Dependency Rules"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "41-hard-dependencies-not-allowed",
      children: "4.1 Hard Dependencies (Not Allowed)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Rule:"
      }), " No package can have a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "hard dependency"
      }), " on another dev-kit package."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "What This Means:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Packages cannot require other packages to function"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Packages cannot break if other packages are missing"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Packages must work standalone"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Exception:"
      }), " Standard tools (Git, Python, etc.) are allowed as dependencies."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "42-softoptional-dependencies",
      children: "4.2 Soft/Optional Dependencies"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Rule:"
      }), " Packages can have ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "soft/optional dependencies"
      }), " on other packages."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "What This Means:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Packages can integrate with other packages (optional)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Packages can recommend other packages (optional)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Packages can provide better functionality with other packages (optional)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Documentation Requirements:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Must clearly label dependencies as \"optional\""
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Must document what happens if dependency is not used"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Must provide alternatives if dependency is not available"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-markdown",
        children: "## Dependencies\n\n**Standalone:** ✅ Yes — this package can be used on its own\n\n**Soft / optional companions:**\n- `packages/frameworks/numbering-versioning/` — provides a portable policy set for the version schema that this package uses\n\nIf you prefer a different versioning strategy, you can:\n- Keep this package and swap in your own versioning policy docs, or\n- Use this package only for the workflow pattern and ignore the included policy documents\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "43-integration-dependencies",
      children: "4.3 Integration Dependencies"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Rule:"
      }), " Integration between packages is ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "optional"
      }), " and must be ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "well-documented"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "What This Means:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Packages can integrate with each other (optional)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Integration must be clearly documented"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Integration must not break standalone usage"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Integration Patterns:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Workflow Management ↔ Numbering & Versioning:"
        }), " RW uses version schema"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Kanban ↔ Numbering & Versioning:"
        }), " Kanban uses version markers"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Kanban ↔ Workflow Management:"
        }), " RW updates Kanban docs"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Documentation Requirements:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Integration guides must exist (e.g., ", (0,jsx_runtime.jsx)(_components.code, {
          children: "kanban/integration/"
        }), ")"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Integration must be clearly marked as optional"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Standalone usage must be documented"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "5-package-independence-rules",
      children: "5. Package Independence Rules"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "51-self-containment",
      children: "5.1 Self-Containment"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Rule:"
      }), " Each package must be ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "self-contained"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "What This Means:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Package includes all necessary documentation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Package includes all necessary examples"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Package includes all necessary tools/scripts"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Package doesn't require external dev-kit resources"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Exception:"
      }), " Standard tools (Git, Python, etc.) are allowed."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "52-documentation-completeness",
      children: "5.2 Documentation Completeness"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Rule:"
      }), " Each package must have ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "complete documentation"
      }), " for standalone usage."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "What This Means:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "README explains what the package does"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "README explains how to use it standalone"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "README explains optional integrations"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Examples show standalone usage"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Documentation Checklist:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Package overview"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Quick start guide"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Standalone usage examples"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Optional integration documentation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Customization guide"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Troubleshooting"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "53-version-schema-independence",
      children: "5.3 Version Schema Independence"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Rule:"
      }), " Each package can include its own versioning policy, but should document compatibility."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "What This Means:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Workflow Management includes versioning policy (for RW to work)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Numbering & Versioning includes versioning policy (canonical)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Kanban references versioning (for integration)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Compatibility:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Packages should use compatible version schemas"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Packages should document schema compatibility"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Packages should provide migration guides if schemas differ"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "6-consumption-patterns",
      children: "6. Consumption Patterns"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "61-standalone-consumption",
      children: "6.1 Standalone Consumption"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Pattern:"
      }), " Use a single package independently."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "When to Use:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Starting with one framework"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Only need one capability"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Want to minimize adoption complexity"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Use only ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Workflow Management"
        }), " for RW trigger"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Use only ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Numbering & Versioning"
        }), " for versioning policy"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Use only ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Kanban"
        }), " for Kanban board structure"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Requirements:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Package must work without other packages"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Package must document standalone usage"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Package must provide standalone examples"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "62-combined-consumption",
      children: "6.2 Combined Consumption"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Pattern:"
      }), " Use multiple packages together."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "When to Use:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Need multiple capabilities"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Want integrated workflows"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Want comprehensive framework coverage"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Use ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Workflow Management + Numbering & Versioning"
        }), " for RW with versioning"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Use ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Kanban + Numbering & Versioning"
        }), " for Kanban with version markers"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Use ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "All Three"
        }), " for complete integrated system"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Requirements:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Packages must integrate cleanly"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Integration must be well-documented"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Integration must not break standalone usage"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "63-incremental-adoption",
      children: "6.3 Incremental Adoption"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Pattern:"
      }), " Start with one package, add more over time."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "When to Use:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Gradual adoption strategy"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Learning curve management"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Phased implementation"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Start with ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Numbering & Versioning"
        }), " (versioning policy)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Add ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Workflow Management"
        }), " (RW trigger)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Add ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Kanban"
        }), " (Kanban board)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Requirements:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Packages must support incremental adoption"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Integration must work at each stage"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Migration guides must exist"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "7-customization-boundaries",
      children: "7. Customization Boundaries"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "71-what-can-be-customized",
      children: "7.1 What Can Be Customized"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "File Paths:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ All file paths can be customized"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Directory structures can be adapted"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Documentation locations can be changed"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Version Schema:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Version schema can be customized (if needed)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "⚠️ Must maintain compatibility if using multiple packages"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "⚠️ Must update validation scripts if schema changes"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Branch Naming:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Branch naming conventions can be customized"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "⚠️ Must update validation scripts if conventions change"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "⚠️ Must update documentation if conventions change"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Project-Specific Content:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Examples can be project-specific"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Policy details can be project-specific"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Templates can be customized"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "72-what-should-be-preserved",
      children: "7.2 What Should Be Preserved"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Core Methodology:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "⚠️ RW 11-step process (unless explicitly changing)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "⚠️ Version schema structure (unless explicitly changing)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "⚠️ Kanban hierarchy (Epic → Story → Task)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "⚠️ Integration patterns (if using multiple packages)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Validation Logic:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "⚠️ Validation scripts should be preserved (unless fixing bugs)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "⚠️ Validation rules should be preserved (unless explicitly changing)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "⚠️ Error handling should be preserved"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Documentation Structure:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "⚠️ Documentation structure should be preserved (for consistency)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "⚠️ Policy document structure should be preserved"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "⚠️ Template structure should be preserved"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "73-customization-documentation",
      children: "7.3 Customization Documentation"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Rule:"
      }), " All customizations must be ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "documented"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "What to Document:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What was customized"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Why it was customized"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "How it differs from original"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Impact on other packages (if using multiple)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Documentation Format:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Customization notes in README"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Customization log in project docs"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Migration notes if upgrading"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "8-integration-patterns",
      children: "8. Integration Patterns"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "81-workflow-management--numbering--versioning",
      children: "8.1 Workflow Management ↔ Numbering & Versioning"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Integration Type:"
      }), " Soft/Optional"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "How It Works:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Workflow Management uses version schema from Numbering & Versioning"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["RW reads version from ", (0,jsx_runtime.jsx)(_components.code, {
          children: "version.py"
        }), " (uses schema)"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "RW validates version format (uses schema)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Standalone Usage:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Workflow Management includes its own versioning policy"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Can use Workflow Management without Numbering & Versioning"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Can swap in custom versioning policy"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Integration Benefits:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Consistent versioning across projects"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Shared versioning policy"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Easier maintenance"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "82-kanban--numbering--versioning",
      children: "8.2 Kanban ↔ Numbering & Versioning"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Integration Type:"
      }), " Integration (Optional)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "How It Works:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Kanban uses version markers (e.g., ", (0,jsx_runtime.jsx)(_components.code, {
          children: "✅ COMPLETE (v0.1.2.1+1)"
        }), ")"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Kanban references version schema"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Kanban validates version format"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Standalone Usage:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Kanban can work without versioning"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Can use custom versioning"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Can skip version markers"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Integration Benefits:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Forensic traceability"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Version-based ordering"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Automatic version updates via RW"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "83-kanban--workflow-management",
      children: "8.3 Kanban ↔ Workflow Management"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Integration Type:"
      }), " Integration (Optional)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "How It Works:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "RW (Workflow Management) updates Kanban docs"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "RW adds version markers to Kanban"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "RW validates Kanban structure"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Standalone Usage:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Kanban can work without RW"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Can use custom workflow"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Can manually update Kanban"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Integration Benefits:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Automatic Kanban updates"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Consistent version markers"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Reduced manual work"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "84-all-three-packages",
      children: "8.4 All Three Packages"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Integration Type:"
      }), " Full Integration (Optional)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "How It Works:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Workflow Management uses Numbering & Versioning schema"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Workflow Management updates Kanban docs"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Kanban uses Numbering & Versioning version markers"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "All three work together seamlessly"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Standalone Usage:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Each package can be used independently"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Can mix and match packages"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Can use custom integrations"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Integration Benefits:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Complete integrated system"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "End-to-end traceability"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Automated workflows"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Consistent versioning"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "9-best-practices",
      children: "9. Best Practices"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "91-package-design",
      children: "9.1 Package Design"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Design for Standalone First:"
        }), "** Ensure packages work independently before adding integrations"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Document Dependencies Clearly:"
        }), " Label all dependencies as optional or required"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Provide Integration Guides:"
        }), " Document how packages integrate (optional)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Maintain Boundaries:"
        }), " Keep package scopes clear and well-defined"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "92-consumption",
      children: "9.2 Consumption"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Start Small:"
        }), " Begin with one package, add more as needed"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Read Documentation:"
        }), " Understand package boundaries before customizing"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Document Customizations:"
        }), " Keep track of what you change"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Test Integrations:"
        }), " Verify integrations work before relying on them"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "93-maintenance",
      children: "9.3 Maintenance"
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
        }), " Contribute improvements back to dev-kit (if appropriate)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "10-summary",
      children: "10. Summary"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "101-core-principles",
      children: "10.1 Core Principles"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Standalone First:"
        }), " Each package must work independently"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Copy, Don't Reference:"
        }), " Packages are copied, not referenced"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Soft Dependencies:"
        }), " Dependencies are optional, not required"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Clear Boundaries:"
        }), " Each package has well-defined scope"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "102-package-boundaries",
      children: "10.2 Package Boundaries"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Workflow Management:"
        }), " Owns workflow execution, RW trigger, validation"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Numbering & Versioning:"
        }), " Owns versioning schema, policy, strategy"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Kanban:"
        }), " Owns Kanban governance, templates, FR/BR intake"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "103-dependency-rules",
      children: "10.3 Dependency Rules"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "No Hard Dependencies:"
        }), " Packages cannot require other packages"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Soft Dependencies Allowed:"
        }), " Optional integrations are encouraged"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Integration Documentation Required:"
        }), " All integrations must be documented"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "104-consumption-patterns",
      children: "10.4 Consumption Patterns"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Standalone:"
        }), " Use one package independently"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Combined:"
        }), " Use multiple packages together"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Incremental:"
        }), " Start with one, add more over time"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "11-next-steps",
      children: "11. Next Steps"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This document establishes the foundation for:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Task 3:"
        }), " Create package dependency matrix (visual representation)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Task 4:"
        }), " Document consumption patterns for each framework (detailed examples)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Task 5:"
        }), " Update package READMEs with modularity information (implementation)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.em, {
        children: "Document completed: 2025-12-02"
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.em, {
        children: "Task: E1:S02:T002"
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsxs)(_components.em, {
        children: ["Next: E01:S02", ":T03", " – Create package dependency matrix"]
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