"use strict";
(self["webpackChunkportal"] = self["webpackChunkportal"] || []).push([["7066"], {
29631(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_governance_standards_dev_kit_versioning_policy_md_6c2_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-governance-standards-dev-kit-versioning-policy-md-6c2.json
var site_docs_governance_standards_dev_kit_versioning_policy_md_6c2_namespaceObject = JSON.parse('{"id":"governance/standards/dev-kit-versioning-policy","title":"Dev Kit Versioning Policy","description":"Status: Active","source":"@site/../docs/governance/standards/dev-kit-versioning-policy.md","sourceDirName":"governance/standards","slug":"/governance/standards/dev-kit-versioning-policy","permalink":"/ai-dev-kit/docs/governance/standards/dev-kit-versioning-policy","draft":false,"unlisted":false,"editUrl":"https://github.com/RMS-Ltd/ai-dev-kit/tree/main/docs/../docs/governance/standards/dev-kit-versioning-policy.md","tags":[],"version":"current","frontMatter":{"lifecycle":"evergreen","ttl_days":null,"created_at":"2025-12-04T12:01:36.000Z","expires_at":null,"housekeeping_policy":"keep"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ../docs/governance/standards/dev-kit-versioning-policy.md


const frontMatter = {
	lifecycle: 'evergreen',
	ttl_days: null,
	created_at: new Date('2025-12-04T12:01:36.000Z'),
	expires_at: null,
	housekeeping_policy: 'keep'
};
const contentTitle = 'Dev Kit Versioning Policy';

const assets = {

};



const toc = [{
  "value": "1. Purpose",
  "id": "1-purpose",
  "level": 2
}, {
  "value": "1.1 Mental Model: Internal vs Release Versions",
  "id": "11-mental-model-internal-vs-release-versions",
  "level": 3
}, {
  "value": "2. Schema (Adopted)",
  "id": "2-schema-adopted",
  "level": 2
}, {
  "value": "2.1 SemVer Mapping for External Releases",
  "id": "21-semver-mapping-for-external-releases",
  "level": 2
}, {
  "value": "Problem Statement",
  "id": "problem-statement",
  "level": 3
}, {
  "value": "Hybrid Approach Algorithm",
  "id": "hybrid-approach-algorithm",
  "level": 3
}, {
  "value": "Limitations",
  "id": "limitations",
  "level": 3
}, {
  "value": "Task-Touch Derived Mapping (ADR-002)",
  "id": "task-touch-derived-mapping-adr-002",
  "level": 3
}, {
  "value": "Problem Statement",
  "id": "problem-statement-1",
  "level": 4
}, {
  "value": "Solution",
  "id": "solution",
  "level": 4
}, {
  "value": "Task-Touch Algorithm",
  "id": "task-touch-algorithm",
  "level": 4
}, {
  "value": "Example Conversions",
  "id": "example-conversions",
  "level": 4
}, {
  "value": "Benefits",
  "id": "benefits",
  "level": 4
}, {
  "value": "Configuration",
  "id": "configuration",
  "level": 4
}, {
  "value": "Migration",
  "id": "migration",
  "level": 4
}, {
  "value": "Registry Structure",
  "id": "registry-structure",
  "level": 3
}, {
  "value": "Dual Tagging in Release Workflow",
  "id": "dual-tagging-in-release-workflow",
  "level": 3
}, {
  "value": "1:1 mapping and tag alignment",
  "id": "11-mapping-and-tag-alignment",
  "level": 3
}, {
  "value": "README Version Display",
  "id": "readme-version-display",
  "level": 3
}, {
  "value": "Implementation",
  "id": "implementation",
  "level": 3
}, {
  "value": "3. Epic Ranges for AI Dev Kit",
  "id": "3-epic-ranges-for-ai-dev-kit",
  "level": 2
}, {
  "value": "4. Mapping Kanban to Version Components",
  "id": "4-mapping-kanban-to-version-components",
  "level": 2
}, {
  "value": "5. Version File for This Repo",
  "id": "5-version-file-for-this-repo",
  "level": 2
}, {
  "value": "6. Progression Rules (Dev Kit)",
  "id": "6-progression-rules-dev-kit",
  "level": 2
}, {
  "value": "6.1 Task Transitions",
  "id": "61-task-transitions",
  "level": 3
}, {
  "value": "6.1.1 Perpetual Tasks (Maintenance Workflows)",
  "id": "611-perpetual-tasks-maintenance-workflows",
  "level": 3
}, {
  "value": "6.2 Abstract Space Version Schema",
  "id": "62-abstract-space-version-schema",
  "level": 3
}, {
  "value": "Epic-Level Abstract Spaces",
  "id": "epic-level-abstract-spaces",
  "level": 4
}, {
  "value": "Story-Level Abstract Spaces",
  "id": "story-level-abstract-spaces",
  "level": 4
}, {
  "value": "Task-Level Abstract Spaces",
  "id": "task-level-abstract-spaces",
  "level": 4
}, {
  "value": "Relationship Between Abstract Space and Functional Work",
  "id": "relationship-between-abstract-space-and-functional-work",
  "level": 4
}, {
  "value": "S00 Abstract Space and Repository-Anchor Transition (FR-072 Approach D)",
  "id": "s00-abstract-space-and-repository-anchor-transition-fr-072-approach-d",
  "level": 4
}, {
  "value": "6.3 Doc-Init / Abstract Space Cheat Sheet",
  "id": "63-doc-init--abstract-space-cheat-sheet",
  "level": 3
}, {
  "value": "7. CHANGELOG Format",
  "id": "7-changelog-format",
  "level": 2
}, {
  "value": "Main Summary Changelog (<code>CHANGELOG.md</code>)",
  "id": "main-summary-changelog-changelogmd",
  "level": 3
}, {
  "value": "Detailed Changelog Archive (<code>docs/changelog-and-release-notes/changelog-archive/CHANGELOG_v{version}.md</code>)",
  "id": "detailed-changelog-archive-docschangelog-and-release-noteschangelog-archivechangelog_vversionmd",
  "level": 3
}, {
  "value": "8. Canonical Ordering Principle",
  "id": "8-canonical-ordering-principle",
  "level": 2
}, {
  "value": "9. Two-Layer Timestamp System",
  "id": "9-two-layer-timestamp-system",
  "level": 2
}, {
  "value": "Layer 1: Main Summary Changelog (<code>CHANGELOG.md</code>)",
  "id": "layer-1-main-summary-changelog-changelogmd",
  "level": 3
}, {
  "value": "Layer 2: Detailed Changelog Archive (<code>docs/changelog-and-release-notes/changelog-archive/CHANGELOG_v{version}.md</code>)",
  "id": "layer-2-detailed-changelog-archive-docschangelog-and-release-noteschangelog-archivechangelog_vversionmd",
  "level": 3
}, {
  "value": "Why Two Layers?",
  "id": "why-two-layers",
  "level": 3
}, {
  "value": "10. Forensic Traceability Grid",
  "id": "10-forensic-traceability-grid",
  "level": 2
}, {
  "value": "Dimension 1: Version ↔ Epic/Story/Task",
  "id": "dimension-1-version--epicstorytask",
  "level": 3
}, {
  "value": "Dimension 2: Version ↔ Detailed Changelog",
  "id": "dimension-2-version--detailed-changelog",
  "level": 3
}, {
  "value": "Dimension 3: Version ↔ Main Summary Changelog",
  "id": "dimension-3-version--main-summary-changelog",
  "level": 3
}, {
  "value": "Dimension 4: Version ↔ Kanban Forensic Markers",
  "id": "dimension-4-version--kanban-forensic-markers",
  "level": 3
}, {
  "value": "Dimension 5: Version ↔ Git History",
  "id": "dimension-5-version--git-history",
  "level": 3
}, {
  "value": "11. Immutability Rules",
  "id": "11-immutability-rules",
  "level": 2
}, {
  "value": "Rule 1: Detailed Changelog Timestamps Are Immutable",
  "id": "rule-1-detailed-changelog-timestamps-are-immutable",
  "level": 3
}, {
  "value": "Rule 2: Version Ordering Is Immutable",
  "id": "rule-2-version-ordering-is-immutable",
  "level": 3
}, {
  "value": "Rule 3: Historical Files Are Preserved As-Is",
  "id": "rule-3-historical-files-are-preserved-as-is",
  "level": 3
}, {
  "value": "12. Version Validation",
  "id": "12-version-validation",
  "level": 2
}, {
  "value": "Validation Scripts",
  "id": "validation-scripts",
  "level": 3
}, {
  "value": "Validation Behavior",
  "id": "validation-behavior",
  "level": 3
}, {
  "value": "Manual Review Checklist",
  "id": "manual-review-checklist",
  "level": 3
}, {
  "value": "13. Relationship to Framework Policies",
  "id": "13-relationship-to-framework-policies",
  "level": 2
}, {
  "value": "14. Status and Maintenance",
  "id": "14-status-and-maintenance",
  "level": 2
}, {
  "value": "15. References",
  "id": "15-references",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    blockquote: "blockquote",
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
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "dev-kit-versioning-policy",
        children: "Dev Kit Versioning Policy"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Status:"
      }), " Active\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Owner:"
      }), " AI Dev Kit / Book Project Lead\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Last Updated:"
      }), " 2025-12-02\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Related Work:"
      }), " Epic 1 (AI Dev Kit Core)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1-purpose",
      children: "1. Purpose"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["This policy defines how the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "AI Dev Kit"
      }), " repository uses the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "RC.EPIC.STORY.TASK+BUILD"
      }), " versioning schema."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Goals:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Apply the ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "full versioning schema and strategy"
        }), " from the Numbering & Versioning framework to this repo."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Ensure all substantive work is ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Task-driven"
        }), " and that versions reflect ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Tasks"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Keep ", (0,jsx_runtime.jsx)(_components.code, {
          children: "ai-dev-kit"
        }), " logically separate from any external project (e.g., Confidentia, fynd.deals) while reusing the same principles."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "11-mental-model-internal-vs-release-versions",
      children: "1.1 Mental Model: Internal vs Release Versions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The dev-kit follows the framework’s ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "dual-version model"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsxs)(_components.strong, {
            children: ["Internal version (", (0,jsx_runtime.jsx)(_components.code, {
              children: "RC.EPIC.STORY.TASK+BUILD"
            }), ")"]
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Forensic coordinate and Kanban anchor."
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Encodes Epic/Story/Task/Build and is used by RW/UKW/CMW and Kanban docs."
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsxs)(_components.strong, {
            children: ["Release version (SemVer ", (0,jsx_runtime.jsx)(_components.code, {
              children: "MAJOR.MINOR.PATCH+BUILD"
            }), ")"]
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "External-facing version shown in README badges, GitHub releases, and package managers."
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Always derived from the internal version using the mapping defined in Section 2.1."
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "In practice:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["When talking to ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "external consumers"
        }), ", the dev-kit presents ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "SemVer first"
        }), ", optionally followed by the internal version in parentheses, for example:", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "v0.3.19+2 (internal: v0.6.7.101+2)"
            }), "."]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["When talking about ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Kanban, tasks, and workflow internals"
        }), ", the dev-kit uses ", (0,jsx_runtime.jsx)(_components.code, {
          children: "RC.EPIC.STORY.TASK+BUILD"
        }), " directly."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "2-schema-adopted",
      children: "2. Schema (Adopted)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This repo fully adopts the RC.EPIC.STORY.TASK+BUILD schema:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Format:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "RC.EPIC.STORY.TASK+BUILD"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Components:"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "RC:"
            }), " Release Candidate (0 = development, 1+ = release candidate)"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "EPIC:"
            }), " Dev-kit Epic number (1, 2, 3, 4, …)"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "STORY:"
            }), " Story number within Epic"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "TASK:"
            }), " Task number within Story"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "BUILD:"
            }), " Build number (increments per release within a Task)"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Examples (dev-kit context):"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "0.1.1.1+1"
        }), " – Dev snapshot for ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Epic 1"
        }), ", Story 1, Task 1, first build"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "0.2.3.2+4"
        }), " – Dev snapshot for ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Epic 2"
        }), ", Story 3, Task 2, 4th build"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "1.4.1.1+1"
        }), " – Release Candidate 1 for ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Epic 4"
        }), ", Story 1, Task 1, first build"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Note:"
        }), " Any references to versions like ", (0,jsx_runtime.jsx)(_components.code, {
          children: "0.9.21.3+1"
        }), " in framework docs are ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "examples from other projects"
        }), ", not dev-kit releases."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "21-semver-mapping-for-external-releases",
      children: "2.1 SemVer Mapping for External Releases"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Status:"
      }), " Implemented (v0.3.2.11+1)\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Purpose:"
      }), " Generate external-facing SemVer tags (", (0,jsx_runtime.jsx)(_components.code, {
        children: "MAJOR.MINOR.PATCH+BUILD"
      }), ") alongside internal Kanban-based version tags for GitHub releases."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "problem-statement",
      children: "Problem Statement"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Internal versioning (", (0,jsx_runtime.jsx)(_components.code, {
        children: "RC.EPIC.STORY.TASK+BUILD"
      }), ") is semantically meaningful internally but can appear to regress when switching between epics/stories (e.g., ", (0,jsx_runtime.jsx)(_components.code, {
        children: "0.6.7.12+3"
      }), " → ", (0,jsx_runtime.jsx)(_components.code, {
        children: "0.4.6.9+1"
      }), "), which is problematic for GitHub releases and user perception."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution:"
      }), " Registry-based SemVer mapping using Hybrid Approach that converts internal versions to monotonic SemVer while preserving semantic meaning."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hybrid-approach-algorithm",
      children: "Hybrid Approach Algorithm"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Mapping Formula:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "MAJOR"
        }), " = RC (direct mapping: 0 → 0, 1 → 1, etc.)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "MINOR"
        }), " = First-seen Epic number (sequential based on first appearance, per RC)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "PATCH"
        }), " = First-seen Story number (sequential based on first appearance, per RC)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "BUILD"
        }), " = Preserved from internal version"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example Conversions:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Internal: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "0.6.7.101+24"
        }), " → SemVer: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "0.3.19+24"
        }), " (Epic 6 first seen → MINOR=3, Story 7 in Epic 6 → PATCH=19)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Internal: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "0.4.14.2+1"
        }), " → SemVer: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "0.4.34+1"
        }), " (Epic 4 first seen → MINOR=4, Story 14 in Epic 4 → PATCH=34)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Internal: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "0.9.1.8+10"
        }), " → SemVer: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "0.9.60+10"
        }), " (Epic 9 first seen → MINOR=9, Story 1 in Epic 9 → PATCH=60)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "limitations",
      children: "Limitations"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["This approach doesn't encode TASK, so multiple tasks in the same story can produce SemVer collisions (e.g., ", (0,jsx_runtime.jsx)(_components.code, {
        children: "0.6.7.101+5"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "0.6.7.102+5"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "0.6.7.103+5"
      }), " all map to ", (0,jsx_runtime.jsx)(_components.code, {
        children: "0.6.52+5"
      }), ")."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "task-touch-derived-mapping-adr-002",
      children: "Task-Touch Derived Mapping (ADR-002)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Status:"
      }), " Implemented (v0.6.7.18+1)\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Purpose:"
      }), " Provide strictly monotonic, collision-free SemVer mapping suitable for package managers."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "problem-statement-1",
      children: "Problem Statement"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Registry-based mapping can cause SemVer tag collisions when multiple tasks within the same epic/story are released with the same BUILD number, violating the \"1 internal → 1 SemVer\" expectation."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "solution",
      children: "Solution"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Task-Touch Derived Mapping uses a global counter that increments each time a task is \"touched\" by a release, ensuring unique SemVer for every internal version."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "task-touch-algorithm",
      children: "Task-Touch Algorithm"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Mapping Formula:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "MAJOR"
        }), " = RC (direct mapping: 0 → 0, 1 → 1, etc.)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "MINOR"
        }), " = count of epics signed off (per RC)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "PATCH"
        }), " = global task-touch counter (increments once per RW release)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "BUILD"
        }), " = Preserved from internal version"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "example-conversions",
      children: "Example Conversions"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Assuming 6 epics signed off for RC 0 and task-touch counter starts at 1:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Internal: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "0.6.7.101+5"
        }), " → SemVer: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "0.6.1+5"
        }), " (first task touch)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Internal: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "0.3.2.12+2"
        }), " → SemVer: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "0.6.2+2"
        }), " (second task touch)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Internal: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "0.2.13.7+1"
        }), " → SemVer: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "0.6.3+1"
        }), " (third task touch)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Internal: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "0.6.7.103+5"
        }), " → SemVer: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "0.6.4+5"
        }), " (fourth task touch)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "benefits",
      children: "Benefits"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Zero Collisions"
        }), ": Each internal version maps to exactly one SemVer ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "PATCH"
        }), " and one ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "SemVer core"
        }), " (", (0,jsx_runtime.jsx)(_components.code, {
          children: "MAJOR.MINOR.PATCH"
        }), ", used for primary Git tags ", (0,jsx_runtime.jsx)(_components.code, {
          children: "vX.Y.Z"
        }), ")"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Strict Monotonicity"
        }), ": PATCH always increases (package-manager friendly)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "1:1 Traceability"
        }), ": Direct mapping between internal and external versions"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Deterministic"
        }), ": Given repository history, mapping is reproducible"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "configuration",
      children: "Configuration"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Task-Touch mapping is configured via ", (0,jsx_runtime.jsx)(_components.code, {
        children: "rw-config.yaml"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "# SemVer mapping strategy: \"registry\" (default) or \"task_touch\"\nsemver_mapping_strategy: registry\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "migration",
      children: "Migration"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Existing projects can migrate by:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Analyzing git history to compute initial task-touch counter"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Running migration utility to backfill counters"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Switching configuration to ", (0,jsx_runtime.jsx)(_components.code, {
          children: "task_touch"
        }), " mode"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Verifying no collisions in test environment"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "registry-structure",
      children: "Registry Structure"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["SemVer mappings are stored in ", (0,jsx_runtime.jsx)(_components.code, {
        children: "semver-registry.yaml"
      }), " (project root):"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "rc_0:\n  epic_to_minor:\n    3: 1    # Epic 3 → MINOR 1 (first appearance)\n    6: 2    # Epic 6 → MINOR 2 (second appearance)\n  story_to_patch:\n    (3, 2): 1    # Epic 3, Story 2 → PATCH 1\n    (6, 7): 19   # Epic 6, Story 7 → PATCH 19\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "dual-tagging-in-release-workflow",
      children: "Dual Tagging in Release Workflow"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "RW Step 11"
      }), " creates dual tags:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Internal Tag:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "v0.6.7.101+24"
        }), " (for internal tracking)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "SemVer Tag:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "v0.3.19+24"
        }), " (for GitHub releases)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Both tags reference the same commit. Internal tag maintains backward compatibility, SemVer tag provides monotonic versioning for external consumers."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "11-mapping-and-tag-alignment",
      children: "1:1 mapping and tag alignment"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One internal version → one SemVer:"
        }), " The registry plus BUILD ensure that each internal version string maps to exactly one SemVer string. The converter (", (0,jsx_runtime.jsx)(_components.code, {
          children: "semver_converter.py"
        }), ") is the single source of truth for this mapping."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One SemVer tag → one commit:"
        }), " For each release, the SemVer tag and the internal tag MUST point to the ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "same commit"
        }), ". No SemVer tag may point to a different commit than the one that contains the corresponding internal version for that release."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Consequence (BR-097 / ADR-019):"
        }), " If a release tag already exists on the remote, the release MUST ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "not"
        }), " be force-moved. ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Forbidden:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "git tag -f"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "git push -f"
        }), ", or ", (0,jsx_runtime.jsx)(_components.code, {
          children: "git push origin +v*"
        }), " on release tags. Recovery: increment ", (0,jsx_runtime.jsx)(_components.code, {
          children: "VERSION_BUILD"
        }), " (+1) and re-run ", (0,jsx_runtime.jsx)(_components.code, {
          children: "RW E:S:T --art"
        }), " so the new tag points at a new commit. See ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/journals/RECOVERY_PROCEDURE.md"
        }), " §4.3."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "readme-version-display",
      children: "README Version Display"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Outward-Facing SemVer:"
      }), " The project README displays the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "SemVer version"
      }), " (not the internal version) as it is the outward-facing version for external consumers."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "RW Step 5"
      }), " automatically:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Generates SemVer from internal version using ", (0,jsx_runtime.jsx)(_components.code, {
          children: "semver_converter.py"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Updates README with SemVer (e.g., ", (0,jsx_runtime.jsx)(_components.code, {
          children: "**Version:** v0.3.19+2"
        }), ")"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Internal version remains in version file (", (0,jsx_runtime.jsx)(_components.code, {
          children: "src/fynd_deals/version.py"
        }), ") for internal tracking"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Rationale:"
      }), " External users and package managers expect monotonically increasing SemVer versions. The internal ", (0,jsx_runtime.jsx)(_components.code, {
        children: "RC.EPIC.STORY.TASK+BUILD"
      }), " format is for internal development traceability only."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "implementation",
      children: "Implementation"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Converter Script:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "packages/frameworks/workflow-mgt/scripts/version/semver_converter.py"
        }), " (forward and reverse conversion; 1:1 documented)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Migration Script:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "packages/frameworks/workflow-mgt/scripts/version/build_semver_registry.py"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Validation Script:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "packages/frameworks/workflow-mgt/scripts/validation/validate_semver_monotonic.py"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Tag-alignment validator (optional):"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "packages/frameworks/workflow-mgt/scripts/validation/validate_semver_tag_alignment.py"
        }), " — checks that the SemVer tag on the remote points to the same commit as the current release (see 1:1 mapping and tag alignment)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Registry File:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "semver-registry.yaml"
        }), " (project root)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Related Documentation:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Proposal:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/architecture/standards-and-adrs/semver-mapping-proposal.md"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Implementation Impact:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/architecture/standards-and-adrs/semver-mapping-implementation-impact.md"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Mapping modes (dev-kit stance):"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["The underlying framework defines multiple ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "SemVer mapping modes"
        }), ". The dev-kit itself adopts the ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "registry-based epic/story mapping mode (Mode A)"
        }), " as its default:", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "MAJOR = RC"
            })
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "MINOR"
            }), " and ", (0,jsx_runtime.jsx)(_components.code, {
              children: "PATCH"
            }), " assigned via the ", (0,jsx_runtime.jsx)(_components.code, {
              children: "semver-registry.yaml"
            }), " registry."]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Other projects copying this policy MAY choose the ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "simple global PATCH mode (Mode B)"
        }), " documented in the framework if they prefer a “SemVer-first, global counter” external story."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Optional metadata pattern:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "When needed, SemVer tags MAY append metadata that embeds the internal version for machine parsing:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Pattern: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "+rc.<RC>.e<EPIC>.s<STORY>.t<TASK>.b<BUILD>"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Example: internal ", (0,jsx_runtime.jsx)(_components.code, {
          children: "0.6.7.101+2"
        }), " → SemVer tag ", (0,jsx_runtime.jsx)(_components.code, {
          children: "v0.3.19+2+rc.0.e6.s7.t101.b2"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["This metadata is optional and does not affect SemVer ordering; public-facing docs SHOULD normally show the clean SemVer (", (0,jsx_runtime.jsx)(_components.code, {
        children: "v0.3.19+2"
      }), ") and reserve metadata for tooling and tag inspection."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "3-epic-ranges-for-ai-dev-kit",
      children: "3. Epic Ranges for AI Dev Kit"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Unlike the legacy/new split in the original policy, this repo starts ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "clean"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Epic 1+:"
        }), " All dev-kit epics use the full ", (0,jsx_runtime.jsx)(_components.code, {
          children: "RC.EPIC.STORY.TASK+BUILD"
        }), " schema."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["There is ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "no legacy range"
        }), " (1–9) in this repo – we start from first principles."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Initial epics:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Epic 1 – AI Dev Kit Core"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Epic 2 – Workflow Management Framework"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Epic 3 – Numbering & Versioning Framework"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Epic 4 – Kanban Framework"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Future epics (5+) can be introduced as needed (for example, “Book Manuscript”, “Examples & Templates”, etc.)."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "4-mapping-kanban-to-version-components",
      children: "4. Mapping Kanban to Version Components"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This repo's Kanban is defined under:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/project-management/kanban/_index.md"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/project-management/kanban/epics/Epic-X/stories/Story-XXX-*.md"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Mapping rules:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Every Story"
        }), " belongs to exactly one Epic (1–4 to start with)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Every Task"
        }), ":", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Lives under a Story."
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Will eventually get a numeric ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Task ID"
            }), " that matches the ", (0,jsx_runtime.jsx)(_components.code, {
              children: "TASK"
            }), " component in the version."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "MUST have a discrete Task document"
            }), " (or clearly delimited section within Story document)."]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Every substantive change"
        }), " that goes through Release Workflow (RW):", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Targets ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "one active Task"
            }), "."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Uses a version where ", (0,jsx_runtime.jsx)(_components.code, {
              children: "EPIC"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "STORY"
            }), ", and ", (0,jsx_runtime.jsx)(_components.code, {
              children: "TASK"
            }), " match that Task's E/S/T coordinates."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Increments ", (0,jsx_runtime.jsx)(_components.code, {
              children: "BUILD"
            }), " for successive releases of the same Task."]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "CRITICAL: Task Document Requirements"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Before any versioning can occur for a Task, the Task MUST have a corresponding Task document:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Task Document Presence:"
          }), " Every Task referenced in a Story checklist MUST have a corresponding Task document (separate file OR clearly delimited section within Story document)."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Task Document → Version Alignment:"
          }), " The Task document's Task ID MUST align with the version's TASK component:"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Task document: ", (0,jsx_runtime.jsx)(_components.code, {
              children: "E4:S11:T01"
            })]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Version: ", (0,jsx_runtime.jsx)(_components.code, {
              children: "0.4.11.1+B"
            }), " (TASK = 1)"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Alignment: Task ID ", (0,jsx_runtime.jsx)(_components.code, {
              children: "T01"
            }), " matches version TASK component ", (0,jsx_runtime.jsx)(_components.code, {
              children: "1"
            })]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Task Document Format:"
          }), " Task documents can be:"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Separate File:"
            }), " ", (0,jsx_runtime.jsx)(_components.code, {
              children: "kanban/epics/Epic-X/Story-XXX/Task-YYY-description.md"
            })]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Delimited Section:"
            }), " Within Story document using Task ID header (", (0,jsx_runtime.jsx)(_components.code, {
              children: "### EXX:SYY:TZZ – Task Name"
            }), ")"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Required Task Document Fields:"
          }), " Task documents MUST include:"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Task ID (", (0,jsx_runtime.jsx)(_components.code, {
              children: "E\\{epic\\}:S\\{story\\}:T\\{task\\}"
            }), ")"]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Scope"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Acceptance Criteria"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Status"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Version Anchor (forensic marker when complete)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Input"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Deliverable"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Dependencies"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Blocker"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Related BR/FR Links"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Validation Requirements:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Release Workflow Step 1 validates Task document presence"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Release Workflow Step 1 validates Task document → Version TASK component alignment"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Validators check Task document presence and alignment before versioning"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "FR/BR rule (summarised):"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["FRs and BRs ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "must"
        }), " create Tasks, which are anchored under Stories, which are anchored under Epics."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Each Task ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "must"
        }), " have a corresponding Task document before versioning."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["See: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "docs/project-management/rituals/policy/kanban-governance-policy.md"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "5-version-file-for-this-repo",
      children: "5. Version File for This Repo"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Dev-kit version information lives in:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "src/fynd_deals/version.py"
        }), " (legacy path from fynd.deals; acceptable for now, may be renamed to ", (0,jsx_runtime.jsx)(_components.code, {
          children: "src/vibe_dev_kit/version.py"
        }), " in future)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The file should expose:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "VERSION_RC = <int>        # Release candidate\nVERSION_EPIC = <int>      # Dev-kit Epic number\nVERSION_STORY = <int>     # Story number within epic\nVERSION_TASK = <int>      # Task number within story\nVERSION_BUILD = <int>     # Build number\n\nVERSION_STRING = f\"{VERSION_RC}.{VERSION_EPIC}.{VERSION_STORY}.{VERSION_TASK}+{VERSION_BUILD}\"\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Current values are ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "temporary placeholders"
      }), " until we assign real Epics/Stories/Tasks for dev-kit work."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "6-progression-rules-dev-kit",
      children: "6. Progression Rules (Dev Kit)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "For a given Epic, Story, Task:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Working on ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Epic 1, Story 1, Task 1"
          }), ":"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "0.1.1.1+1"
            }), " – First dev build"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "0.1.1.1+2"
            }), " – Second dev build"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Moving to ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Task 2"
          }), " within the same Story:"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "0.1.1.2+1"
            }), " – First dev build for Task 2"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Rules:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "TASK is stable per Task"
        }), " – once you start ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Task 1"
        }), ", all its releases share ", (0,jsx_runtime.jsx)(_components.code, {
          children: "TASK = 1"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "BUILD number rules:"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsxs)(_components.strong, {
              children: ["Doc-Init Build (", (0,jsx_runtime.jsx)(_components.code, {
                children: "+0"
              }), "):"]
            }), " For first-time Task/Story/Epic document creation (docs-only)", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "Establishes canonical version anchor before functional work"
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "Must be docs-only changes (no code changes)"
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["Example: ", (0,jsx_runtime.jsx)(_components.code, {
                  children: "0.2.10.1+0"
                }), " = Doc-init build for E2:S10", ":T01", " documentation"]
              }), "\n"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsxs)(_components.strong, {
              children: ["Normal Builds (", (0,jsx_runtime.jsx)(_components.code, {
                children: "+1"
              }), " or higher):"]
            }), " For functional work and subsequent releases", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "Starts at 1 for first functional release (or after doc-init)"
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["Increments with each subsequent release (", (0,jsx_runtime.jsx)(_components.code, {
                  children: "+2"
                }), ", ", (0,jsx_runtime.jsx)(_components.code, {
                  children: "+3"
                }), ", etc.)"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["Example: ", (0,jsx_runtime.jsx)(_components.code, {
                  children: "0.2.10.1+1"
                }), " = First functional build for E2:S10", ":T01", " (after ", (0,jsx_runtime.jsx)(_components.code, {
                  children: "+0"
                }), ")"]
              }), "\n"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Relationship:"
            }), " Doc-init (", (0,jsx_runtime.jsx)(_components.code, {
              children: "+0"
            }), ") → Functional work (", (0,jsx_runtime.jsx)(_components.code, {
              children: "+1"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "+2"
            }), ", ...)"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Moving to a new Task"
        }), ":", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "TASK"
            }), " changes."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "BUILD"
            }), " resets to ", (0,jsx_runtime.jsx)(_components.code, {
              children: "1"
            }), " (or ", (0,jsx_runtime.jsx)(_components.code, {
              children: "0"
            }), " if doc-init for new Task document)."]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "RC increments"
        }), ":", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "When promoting a dev snapshot to a release candidate for a given Task."
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "61-task-transitions",
      children: "6.1 Task Transitions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "CRITICAL:"
      }), " When moving to a new Task, the version file (", (0,jsx_runtime.jsx)(_components.code, {
        children: "src/fynd_deals/version.py"
      }), ") MUST be updated:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Task Document Prerequisite:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "MUST:"
            }), " Create Task document before updating version file"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "MUST:"
            }), " Task document must exist (separate file OR delimited section)"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "MUST:"
            }), " Task document must have correct Task ID format (", (0,jsx_runtime.jsx)(_components.code, {
              children: "E\\{epic\\}:S\\{story\\}:T\\{task\\}"
            }), ")"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "MUST:"
            }), " Task document must include all required fields (see Section 4)"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsxs)(_components.strong, {
            children: ["Update ", (0,jsx_runtime.jsx)(_components.code, {
              children: "VERSION_TASK"
            }), ":"]
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Set ", (0,jsx_runtime.jsx)(_components.code, {
              children: "VERSION_TASK"
            }), " to match the new Task number"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Example: Moving from Task 1 to Task 2 → ", (0,jsx_runtime.jsx)(_components.code, {
              children: "VERSION_TASK = 2"
            })]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "CRITICAL:"
            }), " ", (0,jsx_runtime.jsx)(_components.code, {
              children: "VERSION_TASK"
            }), " MUST match Task ID in Task document"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsxs)(_components.strong, {
            children: ["Set ", (0,jsx_runtime.jsx)(_components.code, {
              children: "VERSION_BUILD"
            }), ":"]
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsxs)(_components.strong, {
              children: ["Doc-Init Path (", (0,jsx_runtime.jsx)(_components.code, {
                children: "+0"
              }), "):"]
            }), " For first-time Task document creation", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["Set ", (0,jsx_runtime.jsx)(_components.code, {
                  children: "VERSION_BUILD = 0"
                }), " (doc-init build)"]
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "Must be docs-only changes (no code changes)"
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "Establishes canonical version anchor"
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["Example: Creating E2:S10", ":T01", " Task document → ", (0,jsx_runtime.jsx)(_components.code, {
                  children: "VERSION_BUILD = 0"
                })]
              }), "\n"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsxs)(_components.strong, {
              children: ["Normal Path (", (0,jsx_runtime.jsx)(_components.code, {
                children: "+1"
              }), "):"]
            }), " For functional work (Task document already exists)", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["Set ", (0,jsx_runtime.jsx)(_components.code, {
                  children: "VERSION_BUILD = 1"
                }), " (first functional build)"]
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "Can include code changes, feature implementations, bug fixes, etc."
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["Example: First functional change for E2:S10", ":T01", " → ", (0,jsx_runtime.jsx)(_components.code, {
                  children: "VERSION_BUILD = 1"
                })]
              }), "\n"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Subsequent Builds:"
            }), " Increment BUILD for each release (", (0,jsx_runtime.jsx)(_components.code, {
              children: "+2"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "+3"
            }), ", etc.)"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Relationship:"
            }), " Doc-init (", (0,jsx_runtime.jsx)(_components.code, {
              children: "+0"
            }), ") → First functional build (", (0,jsx_runtime.jsx)(_components.code, {
              children: "+1"
            }), ") → Subsequent builds (", (0,jsx_runtime.jsx)(_components.code, {
              children: "+2"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "+3"
            }), ", ...)"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "When to Update:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Option 1:"
            }), " Create Task document → Update ", (0,jsx_runtime.jsx)(_components.code, {
              children: "version.py"
            }), " when creating the new Task (recommended)"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Option 2:"
            }), " Create Task document → Update ", (0,jsx_runtime.jsx)(_components.code, {
              children: "version.py"
            }), " during Release Workflow Step 2 (automatic detection)"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "CRITICAL:"
            }), " Task document MUST exist before updating version file"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Validation:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Release Workflow Step 1 validates Task document presence"
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Release Workflow Step 1 validates that ", (0,jsx_runtime.jsx)(_components.code, {
              children: "VERSION_TASK"
            }), " matches the active Task number"]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Release Workflow Step 1 validates Task document → Version TASK component alignment"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "If Task document missing or misaligned, workflow stops with error message"
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Release Workflow Step 2 automatically detects Task transitions and updates ", (0,jsx_runtime.jsx)(_components.code, {
              children: "VERSION_TASK"
            }), " if needed"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example Task Transition:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Before (Completing Task 1):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "VERSION_EPIC = 4\nVERSION_STORY = 3\nVERSION_TASK = 1\nVERSION_BUILD = 2\n# Version: 0.4.3.1+2\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "After (Starting Task 2):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "VERSION_EPIC = 4\nVERSION_STORY = 3\nVERSION_TASK = 2  # ← Updated to match new Task\nVERSION_BUILD = 1  # ← Reset to 1 for new Task\n# Version: 0.4.3.2+1\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Common Mistakes to Avoid:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["❌ ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "DON'T:"
          }), " Keep ", (0,jsx_runtime.jsx)(_components.code, {
            children: "VERSION_TASK = 1"
          }), " and increment ", (0,jsx_runtime.jsx)(_components.code, {
            children: "VERSION_BUILD"
          }), " when moving to Task 2"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Wrong: ", (0,jsx_runtime.jsx)(_components.code, {
              children: "0.4.3.1+3"
            }), " for Task 2"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Correct: ", (0,jsx_runtime.jsx)(_components.code, {
              children: "0.4.3.2+1"
            }), " for Task 2"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["❌ ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "DON'T:"
          }), " Forget to reset ", (0,jsx_runtime.jsx)(_components.code, {
            children: "VERSION_BUILD"
          }), " when moving to a new Task"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Wrong: ", (0,jsx_runtime.jsx)(_components.code, {
              children: "0.4.3.2+3"
            }), " for first release of Task 2"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Correct: ", (0,jsx_runtime.jsx)(_components.code, {
              children: "0.4.3.2+1"
            }), " for first release of Task 2"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "611-perpetual-tasks-maintenance-workflows",
      children: "6.1.1 Perpetual Tasks (Maintenance Workflows)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "CRITICAL:"
      }), " Some tasks represent ongoing maintenance/synchronization work that never \"completes\" (e.g., UKW - Update Kanban Workflow, CMW - Changelog Management Workflow). These are ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "perpetual tasks"
      }), " with special versioning semantics."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Perpetual Task Characteristics:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Status:"
        }), " Always IN PROGRESS (never changes to COMPLETE)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Task Type:"
        }), " Perpetual Maintenance (marked in task document with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Task Type: Perpetual Maintenance"
        }), ")"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Purpose:"
        }), " Ongoing maintenance/synchronization workflows"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Build Number Semantics:"
        }), " BUILD number = workflow run count (not feature iteration)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Build Warning Suppression:"
        }), " High BUILD numbers are expected and valid (no warnings)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Version Pattern (current policy):"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Perpetual tasks use canonical Story 016 2-digit task numbering (", (0,jsx_runtime.jsx)(_components.code, {
          children: "Txx"
        }), ") for active lanes."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Version format remains ", (0,jsx_runtime.jsx)(_components.code, {
          children: "v0.\\{EPIC\\}.\\{STORY\\}.\\{TASK\\}+\\{BUILD\\}"
        }), " with perpetual semantics carried by ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Task Type: Perpetual Maintenance"
        }), "."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "BUILD number accumulates naturally as the workflow runs."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Example: Workflow-maintenance umbrella runs → ", (0,jsx_runtime.jsx)(_components.code, {
          children: "v0.2.16.3+1"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "v0.2.16.3+2"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "v0.2.16.3+3"
        }), ", etc."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Example: Kanban hygiene lane runs → ", (0,jsx_runtime.jsx)(_components.code, {
          children: "v0.2.16.4+1"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "v0.2.16.4+2"
        }), ", etc."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Perpetual Task Examples:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Workflow maintenance umbrella:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "E2:S16:T03"
        }), " - ad-hoc cross-cutting workflow maintenance and hardening"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Kanban synchronization lane:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "E2:S16:T04"
        }), " - kanban-focused operational synchronization/hygiene"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Markdown documentation maintenance lane:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "E2:S16:T05"
        }), " - markdown-only recurring maintenance"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Legacy aliases (historical-only):"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "T101"
        }), "/", (0,jsx_runtime.jsx)(_components.code, {
          children: "T102"
        }), "/", (0,jsx_runtime.jsx)(_components.code, {
          children: "T103"
        }), " references remain valid for traceability but are not used for new active anchors."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Task Number Ranges:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Regular tasks:"
        }), " T01-T99 (2-digit) - Standard feature/bug tasks"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Perpetual tasks (active):"
        }), " canonical Story 016 ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Txx"
        }), " lanes with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Task Type: Perpetual Maintenance"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Legacy perpetual aliases:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "T1xx"
        }), " accepted only as historical anchors (", (0,jsx_runtime.jsx)(_components.code, {
          children: "Historical Anchor:"
        }), ") for prior releases/docs"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Guardrail:"
        }), " new ", (0,jsx_runtime.jsx)(_components.code, {
          children: "T1xx"
        }), " task IDs are disallowed for active work unless explicitly marked historical"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "RW Context Detection:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "RW Step 2 detects perpetual task context (e.g., user ran \"UKW\" then \"RW\", or \"CMW\" then \"RW\")"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["RW automatically attributes releases to the perpetual task (discovered via ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Task Type: Perpetual Maintenance"
        }), " flag)"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "BUILD number increments for each workflow run (same task, increment BUILD)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Build warnings are suppressed (high BUILD numbers are expected and valid)"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Placement guardrail enforcement requires perpetual tasks to be housed under ", (0,jsx_runtime.jsx)(_components.code, {
          children: "E2:S16"
        }), " unless ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Perpetual Override Rationale:"
        }), " is present."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "T103 (RW Maintenance) - Manual Attribution:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "No automatic context detection (unlike UKW/CMW)"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["When releasing RW maintenance work (Step 7 fixes, validator updates, doc corrections), agent/user manually sets version to E2:S16", ":T03", " and increments BUILD"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Historical ", (0,jsx_runtime.jsx)(_components.code, {
          children: "T103"
        }), " labels may still appear in older changelog/release artifacts; this is expected and preserved for traceability."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Task ID Variability:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Each project instance can choose different canonical perpetual anchors, but ai-dev-kit standard is Story 016 (", (0,jsx_runtime.jsx)(_components.code, {
          children: "E2:S16:T03"
        }), "/", (0,jsx_runtime.jsx)(_components.code, {
          children: "T04"
        }), "/", (0,jsx_runtime.jsx)(_components.code, {
          children: "T05"
        }), ")"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Legacy IDs from prior project phases remain as historical aliases and should include ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Historical Anchor:"
        }), " when used in active docs"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Pattern discovery: search for ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Task Type: Perpetual Maintenance"
        }), " plus Story 016 lanes"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Related Documentation:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "UKW Pattern:"
        }), " Epic 4 Story 3 T01 (Update Packaged RW to Handle UKW Context)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "CMW Pattern:"
        }), " Epic 2 Story 1 T05 (CMW Perpetual Task Pattern)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "RW Maintenance Pattern:"
        }), " Epic 2 Story 1 T06 (RW Maintenance Perpetual Task Pattern)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "RW Execution Guide:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "packages/frameworks/workflow-mgt/KB/Documentation/Developer_Docs/vwmp/release-workflow-agent-execution.md"
        }), " (Step 2)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "62-abstract-space-version-schema",
      children: "6.2 Abstract Space Version Schema"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "CRITICAL:"
      }), " Zero-numbered E/S/T documentation uses ", (0,jsx_runtime.jsx)(_components.code, {
        children: "+0"
      }), " build number to establish the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "abstract space"
      }), " for forensic traceability, serving as the canonical version anchor before any functional work is committed."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Purpose:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Establish canonical version anchor for E/S/T documentation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Begin forensic traceability arc at documentation creation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Provide clear versioning schema for abstract spaces"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Link versioning schema to Kanban documentation lifecycle"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "epic-level-abstract-spaces",
      children: "Epic-Level Abstract Spaces"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Format:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "0.\\{EPIC\\}.0.0+0"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Examples:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "0.3.0.0+0"
        }), " = Epic 3's abstract space"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "0.4.0.0+0"
        }), " = Epic 4's abstract space"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "0.10.0.0+0"
        }), " = Epic 10's abstract space"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Purpose:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Establishes forensic traceability anchor for Epic"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Created when Epic document is first committed"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Precedes all functional work for that Epic"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Usage:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Epic document creation → Commit with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "0.\\{EPIC\\}.0.0+0"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Subsequent functional work starts at ", (0,jsx_runtime.jsx)(_components.code, {
          children: "0.\\{EPIC\\}.1.1+1"
        }), " (first Story, first Task, first build)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "story-level-abstract-spaces",
      children: "Story-Level Abstract Spaces"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Format:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "0.\\{EPIC\\}.\\{STORY\\}.0+0"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Examples:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "0.2.5.0+0"
        }), " = Epic 2 Story 5's abstract space"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "0.4.11.0+0"
        }), " = Epic 4 Story 11's abstract space"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "0.10.3.0+0"
        }), " = Epic 10 Story 3's abstract space"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Purpose:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Establishes forensic traceability anchor for Story within Epic"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Created when Story document is first committed"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Precedes all functional work for that Story"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Usage:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Story document creation → Commit with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "0.\\{EPIC\\}.\\{STORY\\}.0+0"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Subsequent functional work starts at ", (0,jsx_runtime.jsx)(_components.code, {
          children: "0.\\{EPIC\\}.\\{STORY\\}.1+1"
        }), " (first Task, first build)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "task-level-abstract-spaces",
      children: "Task-Level Abstract Spaces"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Format:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "0.\\{EPIC\\}.\\{STORY\\}.\\{TASK\\}+0"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Examples:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "0.10.4.6+0"
        }), " = Epic 10 Story 4 Task 6's abstract space"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "0.4.11.1+0"
        }), " = Epic 4 Story 11 Task 1's abstract space"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "0.2.9.3+0"
        }), " = Epic 2 Story 9 Task 3's abstract space"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Purpose:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Establishes forensic traceability anchor for Task within Story within Epic"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Created when Task document is first committed"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Precedes all functional work for that Task"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Usage:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Task document creation → Commit with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "0.\\{EPIC\\}.\\{STORY\\}.\\{TASK\\}+0"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Subsequent functional work starts at ", (0,jsx_runtime.jsx)(_components.code, {
          children: "0.\\{EPIC\\}.\\{STORY\\}.\\{TASK\\}+1"
        }), " (first build)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "relationship-between-abstract-space-and-functional-work",
      children: "Relationship Between Abstract Space and Functional Work"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsxs)(_components.strong, {
        children: ["Abstract Space (", (0,jsx_runtime.jsx)(_components.code, {
          children: "+0"
        }), "):"]
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Documentation-only anchor"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Establishes forensic traceability"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "No functional changes"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Created via doc-init path (see FR-017)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsxs)(_components.strong, {
        children: ["Functional Work (", (0,jsx_runtime.jsx)(_components.code, {
          children: "+1"
        }), " and beyond):"]
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Actual implementation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Builds on abstract space anchor"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Increments BUILD for each release"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Example progression:", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "0.4.11.1+0"
            }), " = Task document created (abstract space)"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "0.4.11.1+1"
            }), " = First functional change for Task 1"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "0.4.11.1+2"
            }), " = Second functional change for Task 1"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Validation:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "+0"
        }), " is only valid for docs-only changes (E/S/T document creation)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "+1"
        }), " and beyond require functional changes"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Abstract space must precede functional work"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Release Workflow validates abstract space usage"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "s00-abstract-space-and-repository-anchor-transition-fr-072-approach-d",
      children: "S00 Abstract Space and Repository-Anchor Transition (FR-072 Approach D)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Format:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "0.\\{EPIC\\}.0.0+0"
      }), " (epic/story abstract-space anchor)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Examples:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "0.5.0.0+0"
        }), " = Epic 5 Story 0 abstract space"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "0.6.0.0+0"
        }), " = Epic 6 Story 0 abstract space"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "0.7.0.0+0"
        }), " = Epic 7 Story 0 abstract space"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Purpose:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Establish forensic traceability for abstract-space documentation."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Preserve compatibility with historical repository anchors where they already exist."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Support phased migration to semantic intake placement for new FR/BR/UXR tasks."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Transition rule (canonical):"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["New FR/BR/UXR intake should version under the selected ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "delivery story/task"
        }), " (semantic placement), not by creating new default repository-story anchors."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Historical repository-story IDs (for example old ", (0,jsx_runtime.jsx)(_components.code, {
          children: "E5:S01:*"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "E6:S01:*"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "E7:S00:*"
        }), ") remain valid forensic coordinates and must remain linkable."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Validator/workflow expectation:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Validators and workflow docs must accept legacy repository coordinates as historical-valid."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Validators and workflow docs must not require new intake to use repository stories as default homes."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Usage guidance:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "+0"
        }), " abstract-space builds for documentation initialization."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use semantic host story/task versions for new intake and implementation work."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Keep historical repository-anchor links for traceability instead of rewriting IDs."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Related:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "FR-072:"
        }), " Uniform Repository vs Abstract-Space Kanban Rules (Approach D migration)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "FR-074:"
        }), " Atomic intake + semantic placement"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "FR-021:"
        }), " Historical repository-story baseline (superseded for new intake behavior)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "FR-018:"
        }), " Abstract space concept"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "SOP for Committing Initial E/S/T Docs:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Create E/S/T document"
        }), " with required structure and fields"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Set version to abstract space"
        }), " (", (0,jsx_runtime.jsx)(_components.code, {
          children: "+0"
        }), " build):", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Epic: ", (0,jsx_runtime.jsx)(_components.code, {
              children: "0.\\{EPIC\\}.0.0+0"
            })]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Story: ", (0,jsx_runtime.jsx)(_components.code, {
              children: "0.\\{EPIC\\}.\\{STORY\\}.0+0"
            })]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Task: ", (0,jsx_runtime.jsx)(_components.code, {
              children: "0.\\{EPIC\\}.\\{STORY\\}.\\{TASK\\}+0"
            })]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Commit via Release Workflow (RW)"
        }), " with doc-init path (see FR-017)", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "RW Step 1 detects docs-only change"
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["RW Step 2 sets version to ", (0,jsx_runtime.jsx)(_components.code, {
              children: "+0"
            }), " (abstract space)"]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "RW Step 3 creates changelog entry with \"Doc Init\" type"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Alternative:"
        }), " Manual commit with explicit version annotation", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Commit message: ", (0,jsx_runtime.jsx)(_components.code, {
              children: "📋 Doc Init (Abstract Space): E\\{epic\\}:S\\{story\\}:T\\{task\\} - [Description]"
            })]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Version: Explicitly set to abstract space (", (0,jsx_runtime.jsx)(_components.code, {
              children: "+0"
            }), ")"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Related:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Kanban Governance Policy:"
        }), " Abstract Spaces for Forensic Traceability (complementary section)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "FR-017:"
        }), " Versioning Policy Hardening — Doc-Init Build (+0) for New E/S/T (implementation)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "FR-018:"
        }), " Abstract Space for Zero-Numbered E/S/T Docs (this feature)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "63-doc-init--abstract-space-cheat-sheet",
      children: "6.3 Doc-Init / Abstract Space Cheat Sheet"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["This section summarizes how to use ", (0,jsx_runtime.jsxs)(_components.strong, {
        children: ["doc-init / abstract space builds (", (0,jsx_runtime.jsx)(_components.code, {
          children: "+0"
        }), ")"]
      }), " in day-to-day work."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsxs)(_components.strong, {
        children: ["When to use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "+0"
        }), " (abstract space):"]
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Creating a ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "new Epic / Story / Task document"
        }), " with no functional work yet."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Typical examples:", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Onboarding a new ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "FR/BR"
            }), " and creating its associated Task doc (wiring + documentation only)."]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Creating initial Epic/Story docs before any implementation starts."
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Patterns:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Epic doc creation:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "0.\\{EPIC\\}.0.0+0"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Story doc creation:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "0.\\{EPIC\\}.\\{STORY\\}.0+0"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Task doc creation:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "0.\\{EPIC\\}.\\{STORY\\}.\\{TASK\\}+0"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsxs)(_components.strong, {
        children: ["What ", (0,jsx_runtime.jsx)(_components.code, {
          children: "+0"
        }), " means:"]
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Documentation-only anchor (no code / behavior changes)."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Establishes the ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "forensic traceability starting point"
        }), " for that E/S/T."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Must be created via the ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "doc-init path"
        }), " (FR-017)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsxs)(_components.strong, {
        children: ["After ", (0,jsx_runtime.jsx)(_components.code, {
          children: "+0"
        }), " (functional work):"]
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["First functional release for that E/S/T uses ", (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "+1"
          })
        }), ":", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Example progression for a Task:", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: [(0,jsx_runtime.jsx)(_components.code, {
                  children: "0.4.11.1+0"
                }), " – Task document created (abstract space)"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: [(0,jsx_runtime.jsx)(_components.code, {
                  children: "0.4.11.1+1"
                }), " – First functional change for that Task"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: [(0,jsx_runtime.jsx)(_components.code, {
                  children: "0.4.11.1+2"
                }), " – Second functional change, etc."]
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Moving to a ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "new Task"
        }), ":", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Optionally create a ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Task-level abstract space"
            }), " first (", (0,jsx_runtime.jsx)(_components.code, {
              children: "+0"
            }), ") for the new Task doc."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Then use ", (0,jsx_runtime.jsx)(_components.code, {
              children: "+1"
            }), " for the first functional release on that Task."]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Practical cheat sheet:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Onboard FR/BR + Task doc only:"
        }), " use ", (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "+0"
          })
        }), " (abstract space)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Start actual implementation for that Task:"
        }), " bump to ", (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "+1"
          })
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Continue work on the same Task:"
        }), " increment BUILD (", (0,jsx_runtime.jsxs)(_components.strong, {
          children: [(0,jsx_runtime.jsx)(_components.code, {
            children: "+2"
          }), ", ", (0,jsx_runtime.jsx)(_components.code, {
            children: "+3"
          }), ", …`"]
        }), ")."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "7-changelog-format",
      children: "7. CHANGELOG Format"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["This repo uses a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "two-layer changelog system"
      }), " aligned with the framework pattern:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "main-summary-changelog-changelogmd",
      children: ["Main Summary Changelog (", (0,jsx_runtime.jsx)(_components.code, {
        children: "CHANGELOG.md"
      }), ")"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Format:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-markdown",
        children: "## [0.3.1.1+2] - 02-12-25\n\n📚 Documentation: Task 1 complete - Gap analysis comparing dev-kit versioning policy with framework\n\n### Added\n- Created gap analysis report...\n\n### Notes\n- See `docs/changelog-and-release-notes/changelog-archive/CHANGELOG_v0.3.1.1+2.md` for full details\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsxs)(_components.strong, {
        children: ["Doc-Init Build Format (", (0,jsx_runtime.jsx)(_components.code, {
          children: "+0"
        }), " builds):"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-markdown",
        children: "## [0.2.10.1+0] - 12-12-25\n\n📋 Doc Init: E2:S10:T01 - RW Step 2 Doc-Init Support\n\n### Summary\n**Doc-Init Build (`+0`):** [Description of documentation-only changes]\n\n### Doc Init\n**New E/S/T Documentation:**\n- ✅ [List of documentation changes]\n\n### Notes\n- See `docs/changelog-and-release-notes/changelog-archive/CHANGELOG_v0.2.10.1+0.md` for full details\n- **This is a doc-init build (`+0`).** No functional changes are included.\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Key Characteristics:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Version: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "[RC.EPIC.STORY.TASK+BUILD]"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Date: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "DD-MM-YY"
        }), " (short date format for merge-to-main)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsxs)(_components.strong, {
          children: ["Doc-Init builds (", (0,jsx_runtime.jsx)(_components.code, {
            children: "+0"
          }), "):"]
        }), " Use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "📋 Doc Init: E\\{epic\\}:S\\{story\\}:T\\{task\\} - [Description]"
        }), " format"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsxs)(_components.strong, {
          children: ["Normal builds (", (0,jsx_runtime.jsx)(_components.code, {
            children: "+1"
          }), " or higher):"]
        }), " Use standard emoji prefixes (🚀 Feature, 🐞 Fix, 📚 Documentation, etc.)"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Link to detailed changelog archive"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Can be updated if merge date changes"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "detailed-changelog-archive-docschangelog-and-release-noteschangelog-archivechangelog_vversionmd",
      children: ["Detailed Changelog Archive (", (0,jsx_runtime.jsx)(_components.code, {
        children: "docs/changelog-and-release-notes/changelog-archive/CHANGELOG_v{version}.md"
      }), ")"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Format (Normal Builds):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-markdown",
        children: "# Changelog: v0.3.1.1+2\n\n**Release Date:** 2025-12-02 00:00:00 UTC\n**Epic:** Epic 3 - [Epic Name]\n**Story:** Story 1 - [Story Name]\n**Task:** Task 1 - [Task Name]\n**Type:** 📚 Documentation\n\n## Summary\n📚 Documentation: [Brief description of changes]\n\n## Changes\n- [Detailed change 1]\n- [Detailed change 2]\n\n## Related Work\n- **Story:** E3:S01 - [Story Name]\n- **Epic:** Epic 3 - [Epic Name]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsxs)(_components.strong, {
        children: ["Format (Doc-Init Builds - ", (0,jsx_runtime.jsx)(_components.code, {
          children: "+0"
        }), "):"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-markdown",
        children: "# Changelog: v0.2.10.1+0\n\n**Release Date:** 2025-12-12 14:00:00 UTC\n**Epic:** Epic 2 - Workflow Management\n**Story:** Story 10 - Versioning Policy Hardening — Doc-Init Build (+0) for New E/S/T\n**Task:** Task 1 - Update RW Step 2 to Support Doc-Init Path\n**Build Type:** Doc-Init (`+0`)\n**Type:** 📋 Doc Init\n\n## Summary\n\n**Doc-Init Build:** [Description of documentation-only changes]\n\n## Doc Init\n\n**New E/S/T Documentation:**\n- ✅ [List of documentation changes]\n\n**Changes (Docs-Only):**\n- [Detailed documentation changes]\n\n## Related Work\n- **Story:** E2:S10 - Versioning Policy Hardening — Doc-Init Build (+0) for New E/S/T\n- **Epic:** Epic 2 - Workflow Management\n- **Feature Request:** FR-017 - Versioning Policy Hardening — Doc-Init Build (+0) for New E/S/T\n\n## Notes\n\n**Doc-Init Build Characteristics:**\n- Build number: `+0` (not `+1`)\n- Changes: Docs-only (no code changes)\n- Purpose: Establish canonical version anchor before functional changes\n- Subsequent builds: Start at `+1` for functional work\n\n**This is a doc-init build (`+0`).** No functional changes are included. The next build for this task will be `+1` when functional work begins.\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Key Characteristics:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Full timestamp: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "YYYY-MM-DD HH:MM:SS UTC"
        }), " (immutable)"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Epic/Story/Task information"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Doc-Init builds:"
        }), " Include ", (0,jsx_runtime.jsx)(_components.code, {
          children: "**Build Type:** Doc-Init ("
        }), "+0", (0,jsx_runtime.jsx)(_components.code, {
          children: ")"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "**Type:** 📋 Doc Init"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Normal builds:"
        }), " Include standard ", (0,jsx_runtime.jsx)(_components.code, {
          children: "**Type:**"
        }), " field (🚀 Feature, 🐞 Fix, 📚 Documentation, etc.)"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Detailed change descriptions"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "IMMUTABLE"
        }), " once written (never edit ", (0,jsx_runtime.jsx)(_components.code, {
          children: "**Release Date:**"
        }), ")"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Reference:"
        }), " See ", (0,jsx_runtime.jsx)(_components.code, {
          children: "packages/frameworks/numbering-versioning/versioning-strategy.md"
        }), " for complete two-layer timestamp system documentation."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "8-canonical-ordering-principle",
      children: "8. Canonical Ordering Principle"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsxs)(_components.strong, {
        children: ["Release version numbers (SemVer ", (0,jsx_runtime.jsx)(_components.code, {
          children: "MAJOR.MINOR.PATCH"
        }), ") are the canonical ordering metric for all releases and changelog entries."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This means:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Release ordering is independent of wall-clock time"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["If ", (0,jsx_runtime.jsx)(_components.code, {
              children: "0.3.1.2+1"
            }), " was committed on 2025-12-02 at 10:00:00 UTC"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["And ", (0,jsx_runtime.jsx)(_components.code, {
              children: "0.3.1.1+2"
            }), " was committed on 2025-12-02 at 15:30:00 UTC"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["The changelog still orders them as: ", (0,jsx_runtime.jsx)(_components.code, {
              children: "0.3.1.1+2"
            }), " first, then ", (0,jsx_runtime.jsx)(_components.code, {
              children: "0.3.1.2+1"
            })]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "The release version number determines order, not the actual commit timestamp"
            })
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Parallel epic development remains fully supported"
      }), ": multiple epics can work simultaneously and each epic maintains its own internal version stream, while releases are ordered by SemVer in the changelog."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "The internal version continues to encode the work hierarchy (Epic → Story → Task → Build)."
      }), " The release version provides the canonical ordering for external consumers; the internal version provides the canonical forensic coordinate for tracing work through Kanban, changelogs, and Git history."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Reference:"
        }), " See ", (0,jsx_runtime.jsx)(_components.code, {
          children: "packages/frameworks/numbering-versioning/versioning-strategy.md"
        }), " (Section: Core Principle: Version Numbers Are Canonical) for complete documentation."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "9-two-layer-timestamp-system",
      children: "9. Two-Layer Timestamp System"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The versioning strategy uses ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "two distinct timestamp layers"
      }), " with ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "different purposes"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "layer-1-main-summary-changelog-changelogmd",
      children: ["Layer 1: Main Summary Changelog (", (0,jsx_runtime.jsx)(_components.code, {
        children: "CHANGELOG.md"
      }), ")"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Format:"
      }), " Short date in ", (0,jsx_runtime.jsx)(_components.code, {
        children: "DD-MM-YY"
      }), " format\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "## [0.3.1.1+2] - 02-12-25"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Purpose:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Shows ", (0,jsx_runtime.jsxs)(_components.strong, {
          children: ["when this version was merged into ", (0,jsx_runtime.jsx)(_components.code, {
            children: "main"
          })]
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Provides a quick reference for \"when did this hit production\""
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Uses short format for readability in the summary view"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Key Characteristics:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Not used for ordering"
        }), " (version number is canonical)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Reflects merge-to-main date"
        }), ", not commit date"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Can be updated"
        }), " if a version is merged on a different day than initially recorded"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Format:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "DD-MM-YY"
        }), " (e.g., ", (0,jsx_runtime.jsx)(_components.code, {
          children: "02-12-25"
        }), " for December 2, 2025)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "layer-2-detailed-changelog-archive-docschangelog-and-release-noteschangelog-archivechangelog_vversionmd",
      children: ["Layer 2: Detailed Changelog Archive (", (0,jsx_runtime.jsx)(_components.code, {
        children: "docs/changelog-and-release-notes/changelog-archive/CHANGELOG_v{version}.md"
      }), ")"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Format:"
      }), " Full timestamp in ", (0,jsx_runtime.jsx)(_components.code, {
        children: "YYYY-MM-DD HH:MM:SS UTC"
      }), " format\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "**Release Date:** 2025-12-02 00:00:00 UTC"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Purpose:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Captures ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "when this detailed changelog entry was authored/recorded"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Provides forensic-level precision for accountability"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Enables exact traceability to the moment of release documentation"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Key Characteristics:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "IMMUTABLE once written"
        }), " - ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "NEVER edit this timestamp retroactively"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Reflects the actual time the changelog was created"
        }), ", not when code was committed"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Full precision"
        }), " (date + time + timezone) for complete accountability"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Format:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "YYYY-MM-DD HH:MM:SS UTC"
        }), " (e.g., ", (0,jsx_runtime.jsx)(_components.code, {
          children: "2025-12-02 00:00:00 UTC"
        }), ")"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "why-two-layers",
      children: "Why Two Layers?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Different purposes:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Main changelog: Quick reference for \"when did this merge to main\""
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Detailed changelog: Forensic record of \"when was this release documented\""
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Different audiences:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Main changelog: Developers scanning recent releases"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Detailed changelog: Forensic analysis, audit trails, accountability"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Different update rules:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Main changelog: Can be updated if merge date changes"
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Detailed changelog: ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "IMMUTABLE"
            }), " - historical record must be preserved"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Enables parallel development:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Versions are ordered by number, not by timestamp"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Timestamps provide context, not ordering"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Reference:"
        }), " See ", (0,jsx_runtime.jsx)(_components.code, {
          children: "packages/frameworks/numbering-versioning/versioning-strategy.md"
        }), " (Section: Two-Layer Timestamp System) for complete documentation."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "10-forensic-traceability-grid",
      children: "10. Forensic Traceability Grid"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The versioning strategy provides ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "complete traceability"
      }), " through a multi-dimensional grid:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "dimension-1-version--epicstorytask",
      children: "Dimension 1: Version ↔ Epic/Story/Task"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Encoding:"
      }), " The version number itself (", (0,jsx_runtime.jsx)(_components.code, {
        children: "RC.EPIC.STORY.TASK+BUILD"
      }), ")"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Traceability Path:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "0.3.1.1+2"
        }), " → Epic 3, Story 1, Task 1, Build 2"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Direct mapping from version to work hierarchy"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "No lookup required - the version number IS the identifier"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "dimension-2-version--detailed-changelog",
      children: "Dimension 2: Version ↔ Detailed Changelog"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Mapping:"
      }), " One detailed changelog file per version"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "File Location:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "docs/changelog-and-release-notes/changelog-archive/CHANGELOG_v{version}.md"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Traceability Path:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Version number → File path (deterministic)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "File contains: Full timestamp, epic/story/task info, detailed changes"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Full timestamp provides forensic-level accountability"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "dimension-3-version--main-summary-changelog",
      children: "Dimension 3: Version ↔ Main Summary Changelog"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Mapping:"
      }), " One summary entry per version in ", (0,jsx_runtime.jsx)(_components.code, {
        children: "CHANGELOG.md"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Traceability Path:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Version number → Summary entry (ordered by version, not time)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Entry contains: Short date (merge-to-main), summary, link to detailed changelog"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Short date shows when version merged to main"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "dimension-4-version--kanban-forensic-markers",
      children: "Dimension 4: Version ↔ Kanban Forensic Markers"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Mapping:"
      }), " Epic/Story documents and Kanban rituals include explicit version references"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Traceability Path:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Version number → Epic/Story/Task documents"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Documents contain: Version references, commit hashes, workflow run IDs"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Kanban markers provide work context and decision history"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Version: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "0.3.1.1+2"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Epic 3 document: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/project-management/kanban/epics/epic-03/epic-03.md"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Story 1 markers: Version references, commit hashes, workflow runs"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "dimension-5-version--git-history",
      children: "Dimension 5: Version ↔ Git History"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Mapping:"
      }), " Version number in commit messages and tags"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Traceability Path:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Version number → Git commits (via commit messages)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Git commits → Commit hashes, author, timestamp"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Git history provides code-level traceability"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Version: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "0.3.1.1+2"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Commit message: \"Release v0.3.1.1+2: Task 1 complete...\""
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Git commit: Contains code changes, author, commit timestamp"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "This grid provides complete accountability and efficient traceability."
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Reference:"
        }), " See ", (0,jsx_runtime.jsx)(_components.code, {
          children: "packages/frameworks/numbering-versioning/versioning-strategy.md"
        }), " (Section: Forensic Traceability Grid) for complete documentation."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "11-immutability-rules",
      children: "11. Immutability Rules"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "rule-1-detailed-changelog-timestamps-are-immutable",
      children: "Rule 1: Detailed Changelog Timestamps Are Immutable"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsxs)(_components.strong, {
        children: ["Once a detailed changelog file is created with a ", (0,jsx_runtime.jsx)(_components.code, {
          children: "**Release Date:**"
        }), " timestamp, that timestamp MUST NEVER be edited."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Rationale:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["The timestamp captures ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "when the changelog entry was authored"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Editing it would corrupt the forensic record"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Historical accuracy requires preserving original timestamps"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "What This Means:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["❌ ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "NEVER"
        }), " edit ", (0,jsx_runtime.jsx)(_components.code, {
          children: "**Release Date:**"
        }), " in existing changelog files"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["❌ ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "NEVER"
        }), " \"fix\" old timestamps to satisfy new validation rules"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["❌ ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "NEVER"
        }), " update timestamps for cosmetic reasons"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["✅ ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "ONLY"
        }), " create new changelog files with correct timestamps going forward"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "rule-2-version-ordering-is-immutable",
      children: "Rule 2: Version Ordering Is Immutable"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Once a version is assigned and documented, its position in the changelog ordering is fixed by the version number."
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Rationale:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Version numbers encode the work hierarchy"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Ordering by version number ensures consistent, logical progression"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Changing order would break traceability"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "What This Means:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Versions are ordered by ", (0,jsx_runtime.jsx)(_components.code, {
          children: "RC.EPIC.STORY.TASK+BUILD"
        }), " structure"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "0.3.1.1+2"
        }), " always comes before ", (0,jsx_runtime.jsx)(_components.code, {
          children: "0.3.1.2+1"
        }), " in changelogs"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Even if ", (0,jsx_runtime.jsx)(_components.code, {
          children: "0.3.1.2+1"
        }), " was committed first"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "rule-3-historical-files-are-preserved-as-is",
      children: "Rule 3: Historical Files Are Preserved As-Is"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Changelog files created before the full-timestamp policy are preserved exactly as they were created."
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Rationale:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Historical files are artifacts of their time"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "They reflect the practices and tools available when they were created"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Preserving them maintains the complete historical record"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Reference:"
        }), " See ", (0,jsx_runtime.jsx)(_components.code, {
          children: "packages/frameworks/numbering-versioning/versioning-strategy.md"
        }), " (Section: Immutability Rules) for complete documentation."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "12-version-validation",
      children: "12. Version Validation"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "validation-scripts",
      children: "Validation Scripts"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The dev-kit uses validation scripts from the workflow management framework:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "packages/frameworks/workflow-mgt/scripts/validation/validate_branch_context.py"
            })
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Validates version matches branch/epic"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Checks version format (old vs new)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Validates CHANGELOG entries match branch"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "packages/frameworks/workflow-mgt/scripts/validation/validate_changelog_format.py"
            })
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Validates version format in CHANGELOG.md"
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Checks date format (old: ", (0,jsx_runtime.jsx)(_components.code, {
              children: "YYYY-MM-DD"
            }), ", new: ", (0,jsx_runtime.jsx)(_components.code, {
              children: "DD-MM-YY"
            }), ")"]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Validates build number >= 1"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Grandfathers old format (warnings only)"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "packages/frameworks/workflow-mgt/scripts/validation/validate_rw_task_intent.py"
            })
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Validates requested RW task intent before Step 2 file edits"
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Supports ", (0,jsx_runtime.jsx)(_components.code, {
              children: "--mode rw-k"
            }), " for RW -k comparison behavior"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Supports ", (0,jsx_runtime.jsx)(_components.code, {
              children: "--art"
            }), " in all RW modes (", (0,jsx_runtime.jsx)(_components.code, {
              children: "RW"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "RW -d"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "RW -k"
            }), ") for explicit canonical anchor adoption"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "validation-behavior",
      children: "Validation Behavior"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "New files (TASK+BUILD format):"
        }), " Require strict enforcement"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Pre-commit hooks:"
        }), " Enforce format before commit (when configured)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Release Workflow:"
        }), " Validators run automatically before commit"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "CI/CD:"
        }), " Can validate in continuous integration (when configured)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "manual-review-checklist",
      children: "Manual Review Checklist"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Before committing:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Verify version number matches branch/epic/story/task"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Verify detailed changelog has full timestamp (new format)"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Verify main changelog has short date (", (0,jsx_runtime.jsx)(_components.code, {
          children: "DD-MM-YY"
        }), ")"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Verify version in commit message"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Verify Kanban markers updated"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "After merging:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Verify changelog ordering (by version, not time)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Verify traceability grid is complete"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Verify historical files preserved"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Reference:"
        }), " See ", (0,jsx_runtime.jsx)(_components.code, {
          children: "packages/frameworks/workflow-mgt/scripts/validation/"
        }), " for validation script implementations."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "13-relationship-to-framework-policies",
      children: "13. Relationship to Framework Policies"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["This policy is a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "specialisation"
      }), " of the general framework policies:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Base schema & strategy:"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "packages/frameworks/numbering-versioning/versioning-policy.md"
            }), " (primary SoT)"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "packages/frameworks/numbering-versioning/versioning-strategy.md"
            }), " (comprehensive strategy)"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Kanban integration:"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "packages/frameworks/kanban/policies/kanban-governance-policy.md"
            })
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "docs/project-management/rituals/policy/kanban-governance-policy.md"
            }), " (dev-kit local)"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The dev-kit policy:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Fixes the EPIC space (1–4+) for this repo"
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Clarifies that all work in this repo"
        }), " using the version file is speaking about dev-kit Epics/Stories/Tasks, not any external project"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "References framework policies"
        }), " as the canonical source of truth for detailed patterns and strategies"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Documents dev-kit-specific adaptations"
        }), " while maintaining alignment with framework principles"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Key Principle:"
      }), " The framework policies (", (0,jsx_runtime.jsx)(_components.code, {
        children: "packages/frameworks/numbering-versioning/"
      }), ") serve as the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "canonical source of truth"
      }), ". This dev-kit policy documents how the framework is applied in the dev-kit context, referencing the framework for detailed explanations."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "14-status-and-maintenance",
      children: "14. Status and Maintenance"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Status:"
      }), " Active\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Owner:"
      }), " AI Dev Kit Lead\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Last Updated:"
      }), " 2025-12-02\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Related Work:"
      }), " Epic 3, Story 1 (Dev Kit Alignment with Versioning Framework)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Maintenance:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "This policy should be reviewed when framework policies are updated"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Gaps identified in gap analysis (T001) have been addressed"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Policy aligns with framework patterns while maintaining dev-kit-specific context"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "15-references",
      children: "15. References"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Framework Policies (Canonical SoT):"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "packages/frameworks/numbering-versioning/versioning-policy.md"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "packages/frameworks/numbering-versioning/versioning-strategy.md"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "packages/frameworks/numbering-versioning/README.md"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Dev-Kit Implementation:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "src/fynd_deals/version.py"
        }), " (version file - to be renamed to dev-kit-specific path)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "CHANGELOG.md"
        }), " (main summary changelog)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "docs/changelog-and-release-notes/changelog-archive/"
        }), " (detailed changelog archive)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "docs/project-management/kanban/"
        }), " (Kanban board and Epic/Story docs)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Validation Scripts:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "packages/frameworks/workflow-mgt/scripts/validation/validate_branch_context.py"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "packages/frameworks/workflow-mgt/scripts/validation/validate_changelog_format.py"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Related Documentation:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.a, {
            href: "/ai-dev-kit/docs/architecture/standards-and-adrs/versioning-quick-reference",
            children: "Versioning Quick Reference"
          })
        }), " - 1-2 page summary for quick lookup ⚡"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.a, {
            href: "/ai-dev-kit/docs/architecture/standards-and-adrs/dual-versioning-package-managers",
            children: "Dual-Versioning Guide"
          })
        }), " - Managing ", (0,jsx_runtime.jsx)(_components.code, {
          children: "RC.EPIC.STORY.TASK+BUILD"
        }), " + SemVer for package managers ⚠️"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "docs/architecture/standards-and-adrs/dev-kit-versioning-cookbook.md"
        }), " - Practical worked examples"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "docs/project-management/kanban/epics/epic-03/story-01-dev-kit-alignment-with-versioning-framework/T01-gap-analysis-report.md"
        }), " (gap analysis)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "docs/project-management/kanban/epics/epic-03/story-01-dev-kit-alignment-with-versioning-framework/T02-fynd-deals-epic15-findings.md"
        }), " (findings)"]
      }), "\n"]
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