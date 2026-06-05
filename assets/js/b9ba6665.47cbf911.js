"use strict";
(self["webpackChunkportal"] = self["webpackChunkportal"] || []).push([["68825"], {
56317(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_project_management_kanban_epics_epic_03_story_02_versioning_cookbook_and_examples_t_08_package_versioning_agentic_approach_md_b9b_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-project-management-kanban-epics-epic-03-story-02-versioning-cookbook-and-examples-t-08-package-versioning-agentic-approach-md-b9b.json
var site_docs_project_management_kanban_epics_epic_03_story_02_versioning_cookbook_and_examples_t_08_package_versioning_agentic_approach_md_b9b_namespaceObject = JSON.parse('{"id":"project-management/kanban/epics/epic-03/story-02-versioning-cookbook-and-examples/T08-package-versioning-agentic-approach","title":"Package Versioning: Agentic Approach (Revised)","description":"Task IDS02:T08","source":"@site/../docs/project-management/kanban/epics/epic-03/story-02-versioning-cookbook-and-examples/T08-package-versioning-agentic-approach.md","sourceDirName":"project-management/kanban/epics/epic-03/story-02-versioning-cookbook-and-examples","slug":"/project-management/kanban/epics/epic-03/story-02-versioning-cookbook-and-examples/T08-package-versioning-agentic-approach","permalink":"/ai-dev-kit/docs/project-management/kanban/epics/epic-03/story-02-versioning-cookbook-and-examples/T08-package-versioning-agentic-approach","draft":false,"unlisted":false,"editUrl":"https://github.com/RMS-Ltd/ai-dev-kit/tree/main/docs/../docs/project-management/kanban/epics/epic-03/story-02-versioning-cookbook-and-examples/T08-package-versioning-agentic-approach.md","tags":[],"version":"current","frontMatter":{},"sidebar":"docsSidebar","previous":{"title":"Epic 3, Story 2, Task 7: Create dual-versioning guide for package manager compatibility","permalink":"/ai-dev-kit/docs/project-management/kanban/epics/epic-03/story-02-versioning-cookbook-and-examples/T07-create-dual-versioning-guide-for-package-manager-compatibili"},"next":{"title":"Epic 3, Story 2, Task 9: Implement Package Version Workflow (PVW) with agentic execution","permalink":"/ai-dev-kit/docs/project-management/kanban/epics/epic-03/story-02-versioning-cookbook-and-examples/T09-implement-package-version-workflow-pvw-with-agentic-executio"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ../docs/project-management/kanban/epics/epic-03/story-02-versioning-cookbook-and-examples/T08-package-versioning-agentic-approach.md


const frontMatter = {};
const contentTitle = 'Package Versioning: Agentic Approach (Revised)';

const assets = {

};



const toc = [{
  "value": "Executive Summary",
  "id": "executive-summary",
  "level": 2
}, {
  "value": "1. Workflow Name &amp; Integration",
  "id": "1-workflow-name--integration",
  "level": 2
}, {
  "value": "1.1 Proposed Name",
  "id": "11-proposed-name",
  "level": 3
}, {
  "value": "1.2 Integration with Release Workflow",
  "id": "12-integration-with-release-workflow",
  "level": 3
}, {
  "value": "2. Agentic Execution Pattern",
  "id": "2-agentic-execution-pattern",
  "level": 2
}, {
  "value": "2.1 Core Principle",
  "id": "21-core-principle",
  "level": 3
}, {
  "value": "2.2 Agent Execution Cycle",
  "id": "22-agent-execution-cycle",
  "level": 3
}, {
  "value": "2.3 Example: Agent Analysis for Package Version Bump",
  "id": "23-example-agent-analysis-for-package-version-bump",
  "level": 3
}, {
  "value": "3. Version Bump Criteria (Guidance, Not Rules)",
  "id": "3-version-bump-criteria-guidance-not-rules",
  "level": 2
}, {
  "value": "3.1 Criteria as Guidance",
  "id": "31-criteria-as-guidance",
  "level": 3
}, {
  "value": "3.2 MAJOR Version Bump (X.0.0) - Guidance",
  "id": "32-major-version-bump-x00---guidance",
  "level": 3
}, {
  "value": "3.3 MINOR Version Bump (x.Y.0) - Guidance",
  "id": "33-minor-version-bump-xy0---guidance",
  "level": 3
}, {
  "value": "3.4 PATCH Version Bump (x.y.Z) - Guidance",
  "id": "34-patch-version-bump-xyz---guidance",
  "level": 3
}, {
  "value": "4. Validation Scripts as Tools",
  "id": "4-validation-scripts-as-tools",
  "level": 2
}, {
  "value": "4.1 Script Purpose",
  "id": "41-script-purpose",
  "level": 3
}, {
  "value": "4.2 Script Usage Pattern",
  "id": "42-script-usage-pattern",
  "level": 3
}, {
  "value": "4.3 Proposed Validation Scripts",
  "id": "43-proposed-validation-scripts",
  "level": 3
}, {
  "value": "5. PVW Workflow Definition",
  "id": "5-pvw-workflow-definition",
  "level": 2
}, {
  "value": "5.1 Workflow Structure",
  "id": "51-workflow-structure",
  "level": 3
}, {
  "value": "5.2 PVW Execution Steps",
  "id": "52-pvw-execution-steps",
  "level": 3
}, {
  "value": "6. Integration with Release Workflow",
  "id": "6-integration-with-release-workflow",
  "level": 2
}, {
  "value": "6.1 RW Step Integration",
  "id": "61-rw-step-integration",
  "level": 3
}, {
  "value": "6.2 Trigger Pattern",
  "id": "62-trigger-pattern",
  "level": 3
}, {
  "value": "6.3 Cursor Rules Integration",
  "id": "63-cursor-rules-integration",
  "level": 3
}, {
  "value": "7. Benefits of Agentic Approach",
  "id": "7-benefits-of-agentic-approach",
  "level": 2
}, {
  "value": "7.1 Intelligence Over Determinism",
  "id": "71-intelligence-over-determinism",
  "level": 3
}, {
  "value": "7.2 Proven Success Pattern",
  "id": "72-proven-success-pattern",
  "level": 3
}, {
  "value": "8. Implementation Plan",
  "id": "8-implementation-plan",
  "level": 2
}, {
  "value": "8.1 Phase 1: Define PVW Workflow",
  "id": "81-phase-1-define-pvw-workflow",
  "level": 3
}, {
  "value": "8.2 Phase 2: Create Validation Scripts (Tools)",
  "id": "82-phase-2-create-validation-scripts-tools",
  "level": 3
}, {
  "value": "8.3 Phase 3: Integrate with RW",
  "id": "83-phase-3-integrate-with-rw",
  "level": 3
}, {
  "value": "8.4 Phase 4: Document &amp; Test",
  "id": "84-phase-4-document--test",
  "level": 3
}, {
  "value": "9. Open Questions",
  "id": "9-open-questions",
  "level": 2
}, {
  "value": "9.1 PVW Execution Frequency",
  "id": "91-pvw-execution-frequency",
  "level": 3
}, {
  "value": "9.2 Package Change Detection",
  "id": "92-package-change-detection",
  "level": 3
}, {
  "value": "9.3 Version Bump Authority",
  "id": "93-version-bump-authority",
  "level": 3
}, {
  "value": "10. Next Steps",
  "id": "10-next-steps",
  "level": 2
}, {
  "value": "10.1 Immediate Actions",
  "id": "101-immediate-actions",
  "level": 3
}, {
  "value": "10.2 Future Enhancements",
  "id": "102-future-enhancements",
  "level": 3
}, {
  "value": "11. References",
  "id": "11-references",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    br: "br",
    code: "code",
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
        id: "package-versioning-agentic-approach-revised",
        children: "Package Versioning: Agentic Approach (Revised)"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Task ID:"
      }), " E03:S02", ":T08", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Task:"
      }), " E03:S02", ":T08", " – Audit dual-versioning application across packages and propose strategy", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Date:"
      }), " 2025-12-08", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Status:"
      }), " PROPOSAL", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Related:"
      }), " T08-dual-versioning-package-audit-report.md, T08-package-versioning-guardrails-discussion.md"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "executive-summary",
      children: "Executive Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["This document revises the package versioning approach to use ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "intelligent agentic execution"
      }), " (following the Release Workflow pattern) rather than deterministic scripts. The Package Version Workflow (PVW) will be ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "triggered by RW"
      }), " and use intelligent analysis to determine appropriate version bumps."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Key Principles:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["✅ ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Agent-Driven:"
        }), " Intelligent analysis and decision-making, not deterministic scripts"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["✅ ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "RW-Triggered:"
        }), " PVW executes as part of RW workflow"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["✅ ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Context-Aware:"
        }), " Analyzes actual changes to determine bump type"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["✅ ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Validation as Tools:"
        }), " Scripts provide checks, agent makes decisions"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["✅ ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Criteria as Guidance:"
        }), " Clear criteria inform decisions, not hard rules"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1-workflow-name--integration",
      children: "1. Workflow Name & Integration"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "11-proposed-name",
      children: "1.1 Proposed Name"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Package Version Workflow (PVW)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Rationale:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Follows RW naming pattern (Release Workflow → RW)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Clear and descriptive"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Easy to reference (\"PVW\" trigger)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "12-integration-with-release-workflow",
      children: "1.2 Integration with Release Workflow"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Trigger Point:"
      }), " PVW executes as part of RW, specifically:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Option A: RW Step Integration (Recommended)"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Add PVW as a step within RW (e.g., Step 2.5: Package Version Bump)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Executes after project version bump (Step 2)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Before changelog creation (Step 3)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Option B: Post-RW Hook"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "PVW executes after RW completes successfully"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Separate workflow triggered by RW completion"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Allows independent execution if needed"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Recommendation:"
      }), " Option A - Integrated as RW step"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "RW Integration Pattern:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "# In release-workflow.yaml\nsteps:\n  - id: step-2\n    name: Bump Project Version\n    # ... existing step 2 ...\n  \n  - id: step-2.5\n    name: Package Version Workflow (PVW)\n    type: package_version\n    handler: package.version_bump\n    required: false  # Optional - only if packages changed\n    enabled: true\n    dependencies:\n      - step-2\n    config:\n      packages_dir: packages/frameworks\n      validation_scripts: scripts/validation/package\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "2-agentic-execution-pattern",
      children: "2. Agentic Execution Pattern"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "21-core-principle",
      children: "2.1 Core Principle"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "PVW uses intelligent agentic execution, not deterministic scripts."
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Agent-Driven Pattern:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Agent analyzes changes to each package"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Agent determines appropriate bump type based on actual changes"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Agent makes intelligent decisions using criteria as guidance"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Agent validates decisions using scripts as tools"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Agent documents reasoning and justification"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "NOT Deterministic:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "❌ Scripts that automatically determine bump type"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "❌ Hard rules that don't account for context"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "❌ Blind execution without analysis"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "22-agent-execution-cycle",
      children: "2.2 Agent Execution Cycle"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "For each package, the agent follows this pattern:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "1. ANALYZE\n   ├─ Read package files and structure\n   ├─ Identify what changed (files, content, structure)\n   ├─ Understand package type (documentation, scripts, templates)\n   ├─ Review current package version\n   └─ Gather context (project version, related changes)\n\n2. DETERMINE\n   ├─ Analyze changes against bump criteria\n   ├─ Consider package-specific context\n   ├─ Determine appropriate bump type (MAJOR/MINOR/PATCH)\n   ├─ Document reasoning and justification\n   └─ Plan version update approach\n\n3. EXECUTE\n   ├─ Update package version in README\n   ├─ Update package manifest files (if published)\n   ├─ Create/update package changelog entry\n   ├─ Document justification\n   └─ Update package metadata\n\n4. VALIDATE\n   ├─ Run validation scripts as tools (not determiners)\n   ├─ Verify version format is correct\n   ├─ Check version consistency across locations\n   ├─ Validate changelog entry exists\n   └─ Confirm justification aligns with changes\n\n5. PROCEED\n   ├─ Document what was done\n   ├─ Pass package version info to next RW steps\n   └─ Move to next package or next RW step\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "23-example-agent-analysis-for-package-version-bump",
      children: "2.3 Example: Agent Analysis for Package Version Bump"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Scenario:"
      }), " Workflow Management package - Added new integration guide"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Agent Analysis:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "ANALYZE:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Read ", (0,jsx_runtime.jsx)(_components.code, {
              children: "packages/frameworks/workflow-mgt/README.md"
            }), " → Current version: 2.0.0"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Identify changes: Added ", (0,jsx_runtime.jsx)(_components.code, {
              children: "integration/kanban-integration.md"
            })]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Understand package type: Documentation + Scripts"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Review project version: 0.3.2.8+1 (Epic 3, Story 2, Task 8)"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "DETERMINE:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Analyze changes:", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["✅ New file added: ", (0,jsx_runtime.jsx)(_components.code, {
                  children: "integration/kanban-integration.md"
                })]
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "✅ New feature: Integration guide"
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "✅ Backward compatible: No breaking changes"
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "✅ No structure changes: Package structure unchanged"
              }), "\n"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Apply criteria (Section 3):", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "MINOR criteria: \"New features, enhancements, additions (backward compatible)\""
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "✅ Matches: New integration guide is a new feature"
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "✅ Backward compatible: No breaking changes"
              }), "\n"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Decision: ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "MINOR bump"
            }), " (2.0.0 → 2.1.0)"]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Reasoning: \"Added new integration guide - new feature, backward compatible\""
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "EXECUTE:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Update README: ", (0,jsx_runtime.jsx)(_components.code, {
              children: "**Version:** 2.1.0"
            })]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Update ", (0,jsx_runtime.jsx)(_components.code, {
              children: "**Last Updated:** 2025-12-08"
            })]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Create changelog entry:", "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                className: "language-markdown",
                children: "## [2.1.0] - 2025-12-08\n\n**Package Version:** 2.1.0\n**Project Version:** 0.3.2.8+1\n**Bump Type:** MINOR\n\n### Justification\nAdded new integration guide for Kanban package. This is a new feature that is backward compatible.\n\n### Added\n- `integration/kanban-integration.md` - Integration guide for Kanban package\n"
              })
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "VALIDATE:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Run ", (0,jsx_runtime.jsx)(_components.code, {
              children: "validate_package_version.py"
            }), " → ✅ Format valid (2.1.0)"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Run ", (0,jsx_runtime.jsx)(_components.code, {
              children: "validate_version_increment.py"
            }), " → ✅ Increment valid (2.0.0 → 2.1.0)"]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Check changelog entry → ✅ Exists and complete"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Verify justification → ✅ Aligns with changes"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "PROCEED:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Document: \"Workflow Management package bumped to 2.1.0 (MINOR) - new integration guide\""
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Pass to RW Step 3: Include package version in changelog"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Move to next package or continue RW"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "3-version-bump-criteria-guidance-not-rules",
      children: "3. Version Bump Criteria (Guidance, Not Rules)"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "31-criteria-as-guidance",
      children: "3.1 Criteria as Guidance"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Key Principle:"
      }), " Criteria provide guidance for intelligent decision-making, not hard rules."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Agent Uses Criteria To:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Understand what typically constitutes MAJOR/MINOR/PATCH"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Analyze changes against common patterns"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Make informed decisions based on context"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Document reasoning clearly"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Agent Does NOT:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Blindly follow criteria without considering context"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Apply criteria mechanically without analysis"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Ignore edge cases or special circumstances"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "32-major-version-bump-x00---guidance",
      children: "3.2 MAJOR Version Bump (X.0.0) - Guidance"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Typical Indicators:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Breaking structure changes (removing/renaming core files)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Breaking policy changes (changing mandatory requirements)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Breaking API changes (removing/renaming public interfaces)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Removing features or capabilities"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Agent Analysis:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Analyze actual changes: What files changed? What was removed?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Consider impact: Will this break existing implementations?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Evaluate context: Is this truly breaking, or can it be handled gracefully?"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example Decision Process:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Change: Removed `EPIC_TEMPLATE.md`\nAnalysis:\n  - File removed: ✅ Breaking change indicator\n  - Impact: Consumers may depend on this template\n  - Context: No migration path provided\nDecision: MAJOR bump (breaking change)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "33-minor-version-bump-xy0---guidance",
      children: "3.3 MINOR Version Bump (x.Y.0) - Guidance"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Typical Indicators:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "New features or additions"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "New templates or guides"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "New integration patterns"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Enhancements to existing features"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Agent Analysis:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Analyze actual changes: What was added? Is it new functionality?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Consider compatibility: Is this backward compatible?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Evaluate significance: Is this substantial enough for MINOR?"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example Decision Process:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Change: Added `integration/kanban-integration.md`\nAnalysis:\n  - New file added: ✅ New feature indicator\n  - Compatibility: No breaking changes\n  - Significance: Substantial new documentation\nDecision: MINOR bump (new feature, backward compatible)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "34-patch-version-bump-xyz---guidance",
      children: "3.4 PATCH Version Bump (x.y.Z) - Guidance"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Typical Indicators:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Bug fixes or corrections"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Clarifications or improvements"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Minor formatting or structure improvements"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Fixing broken links or references"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Agent Analysis:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Analyze actual changes: What was fixed? What was corrected?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Consider impact: Does this add functionality or just fix issues?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Evaluate scope: Is this a minor change or substantial?"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example Decision Process:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Change: Fixed broken link in README\nAnalysis:\n  - Link fixed: ✅ Bug fix indicator\n  - Impact: No new functionality\n  - Scope: Minor correction\nDecision: PATCH bump (bug fix, no new functionality)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "4-validation-scripts-as-tools",
      children: "4. Validation Scripts as Tools"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "41-script-purpose",
      children: "4.1 Script Purpose"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Validation scripts are tools for the agent, not determiners of decisions."
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Scripts Provide:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Format validation (SemVer format check)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Increment validation (version progression check)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Consistency checks (version location consistency)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Data for agent analysis"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Scripts Do NOT:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "❌ Determine bump type automatically"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "❌ Make decisions about what version to use"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "❌ Replace agent analysis and reasoning"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "42-script-usage-pattern",
      children: "4.2 Script Usage Pattern"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Agent Uses Scripts To:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Validate Format:"
        }), " After determining bump type, verify version format is correct"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Check Consistency:"
        }), " Verify version matches across all locations"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Validate Increment:"
        }), " Confirm version increment is valid (not backwards, not skipping)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Gather Data:"
        }), " Get current versions, check for existing changelogs, etc."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "# Agent determines: MINOR bump (2.0.0 → 2.1.0)\n# Agent executes: Update README, create changelog\n# Agent validates: Run scripts as tools\n\n# Run validation script (tool, not determiner)\nresult = run_script(\"validate_package_version.py\", version=\"2.1.0\")\nif not result.success:\n    # Agent analyzes error and determines fix\n    # Script provides data, agent makes decision\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "43-proposed-validation-scripts",
      children: "4.3 Proposed Validation Scripts"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsxs)(_components.strong, {
        children: ["Script 1: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "validate_package_version_format.py"
        })]
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Purpose:"
        }), " Validate SemVer format"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Input:"
        }), " Version string"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Output:"
        }), " Valid/invalid + error details"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Agent Use:"
        }), " Verify format after determining version"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsxs)(_components.strong, {
        children: ["Script 2: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "validate_package_version_increment.py"
        })]
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Purpose:"
        }), " Validate version increment is valid"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Input:"
        }), " Old version, new version"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Output:"
        }), " Valid/invalid + error details"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Agent Use:"
        }), " Verify increment after determining bump"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsxs)(_components.strong, {
        children: ["Script 3: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "validate_package_version_consistency.py"
        })]
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Purpose:"
        }), " Check version consistency across locations"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Input:"
        }), " Package path"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Output:"
        }), " Consistent/inconsistent + mismatches"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Agent Use:"
        }), " Verify consistency after updating version"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsxs)(_components.strong, {
        children: ["Script 4: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "get_package_changes.py"
        })]
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Purpose:"
        }), " Analyze what changed in package"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Input:"
        }), " Package path, git diff"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Output:"
        }), " List of changes (files, types, impact)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Agent Use:"
        }), " Gather data for analysis (not determine bump type)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "5-pvw-workflow-definition",
      children: "5. PVW Workflow Definition"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "51-workflow-structure",
      children: "5.1 Workflow Structure"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "PVW as RW Step:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "# In release-workflow.yaml\nsteps:\n  - id: step-2.5\n    name: Package Version Workflow (PVW)\n    type: package_version\n    handler: package.version_bump\n    required: false\n    enabled: true\n    dependencies:\n      - step-2\n    config:\n      packages_dir: packages/frameworks\n      auto_detect_changes: true\n      validation_scripts: scripts/validation/package\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "52-pvw-execution-steps",
      children: "5.2 PVW Execution Steps"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 1: Detect Changed Packages"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Agent analyzes git diff to identify changed packages"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Agent determines which packages need version bumps"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Agent skips packages with no significant changes"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 2: Analyze Package Changes"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["For each changed package:", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Agent reads package files and structure"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Agent identifies what changed (files, content, structure)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Agent understands package type and context"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Agent gathers data using scripts as tools"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 3: Determine Version Bumps"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["For each changed package:", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Agent analyzes changes against criteria (guidance)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Agent determines appropriate bump type (MAJOR/MINOR/PATCH)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Agent documents reasoning and justification"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Agent plans version update approach"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 4: Execute Version Updates"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["For each package:", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Agent updates version in README"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Agent updates package manifest files (if published)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Agent creates/updates package changelog entry"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Agent documents justification"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 5: Validate Updates"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["For each package:", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Agent runs validation scripts as tools"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Agent verifies version format is correct"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Agent checks version consistency"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Agent validates changelog entry"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 6: Document & Proceed"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Agent documents all package version changes"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Agent passes package version info to next RW steps"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Agent continues to RW Step 3 (changelog creation)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "6-integration-with-release-workflow",
      children: "6. Integration with Release Workflow"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "61-rw-step-integration",
      children: "6.1 RW Step Integration"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "PVW as RW Step 2.5:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "RW Step 1: Branch Safety Check\nRW Step 2: Bump Project Version\nRW Step 2.5: Package Version Workflow (PVW) ← NEW\n  ├─ Detect changed packages\n  ├─ Analyze changes\n  ├─ Determine version bumps\n  ├─ Execute updates\n  ├─ Validate updates\n  └─ Document changes\nRW Step 3: Create Detailed Changelog (includes package versions)\nRW Step 4: Update Main Changelog\n...\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "62-trigger-pattern",
      children: "6.2 Trigger Pattern"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "PVW Triggered By:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "RW execution (automatic, if packages changed)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Manual trigger: \"PVW\" command (for testing/debugging)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "PVW Execution Context:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Project version already bumped (RW Step 2 complete)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Git changes staged or committed"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Package changes detected or specified"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "63-cursor-rules-integration",
      children: "6.3 Cursor Rules Integration"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsxs)(_components.strong, {
        children: ["Add to ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".cursorrules"
        }), ":"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-markdown",
        children: "### 📦 PACKAGE VERSION WORKFLOW (PVW) TRIGGER\n\n**When the user types \"PVW\" or \"pvw\" (case-insensitive), or when RW Step 2.5 executes:**\n\n1. **DO NOT** run deterministic scripts to determine bump types\n2. **DO** execute PVW using intelligent agent-driven execution\n3. **Follow** the agent execution pattern (ANALYZE → DETERMINE → EXECUTE → VALIDATE → PROCEED)\n4. **Use** validation scripts as tools, not determiners\n5. **Apply** version bump criteria as guidance, not hard rules\n6. **Document** reasoning and justification for each bump\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "7-benefits-of-agentic-approach",
      children: "7. Benefits of Agentic Approach"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "71-intelligence-over-determinism",
      children: "7.1 Intelligence Over Determinism"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Agentic Benefits:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["✅ ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Context-Aware:"
        }), " Understands actual changes and impact"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["✅ ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Adaptive:"
        }), " Handles edge cases and special circumstances"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["✅ ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Reasoning:"
        }), " Can explain decisions and justify choices"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["✅ ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Learning:"
        }), " Can improve decisions based on feedback"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Deterministic Limitations:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["❌ ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Rigid:"
        }), " Can't handle edge cases well"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["❌ ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Blind:"
        }), " Doesn't understand context or impact"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["❌ ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Brittle:"
        }), " Breaks when encountering unexpected situations"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["❌ ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Opaque:"
        }), " Can't explain why decisions were made"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "72-proven-success-pattern",
      children: "7.2 Proven Success Pattern"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "RW Success:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Orders of magnitude better than deterministic approach"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Handles edge cases intelligently"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Adapts to project-specific context"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Provides clear reasoning and documentation"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "PVW Following Same Pattern:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Uses proven agentic execution methodology"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Leverages intelligent analysis and decision-making"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Provides validation scripts as tools"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Documents reasoning clearly"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "8-implementation-plan",
      children: "8. Implementation Plan"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "81-phase-1-define-pvw-workflow",
      children: "8.1 Phase 1: Define PVW Workflow"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Deliverables:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ PVW workflow definition (YAML)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Agent execution guide (similar to RW guide)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Version bump criteria (as guidance)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Cursor rules section"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Timeline:"
      }), " 1 week"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "82-phase-2-create-validation-scripts-tools",
      children: "8.2 Phase 2: Create Validation Scripts (Tools)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Deliverables:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "validate_package_version_format.py"
        }), " - Format validation"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "validate_package_version_increment.py"
        }), " - Increment validation"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "validate_package_version_consistency.py"
        }), " - Consistency validation"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "get_package_changes.py"
        }), " - Change analysis (data gathering)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Timeline:"
      }), " 1-2 weeks"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "83-phase-3-integrate-with-rw",
      children: "8.3 Phase 3: Integrate with RW"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Deliverables:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Add PVW as RW Step 2.5"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update RW workflow definition"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update RW agent execution guide"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Test integration"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Timeline:"
      }), " 1 week"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "84-phase-4-document--test",
      children: "8.4 Phase 4: Document & Test"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Deliverables:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "PVW agent execution guide"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Examples and case studies"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Testing and validation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Documentation updates"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Timeline:"
      }), " 1 week"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "9-open-questions",
      children: "9. Open Questions"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "91-pvw-execution-frequency",
      children: "9.1 PVW Execution Frequency"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Question:"
      }), " Should PVW run for every RW, or only when packages change?"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Options:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "A:"
        }), " Always run (detect changes, skip if none)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "B:"
        }), " Only run when packages explicitly changed"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "C:"
        }), " Configurable per project"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Recommendation:"
      }), " Option A - Always run, skip if no changes detected"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "92-package-change-detection",
      children: "9.2 Package Change Detection"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Question:"
      }), " How should PVW detect package changes?"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Options:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "A:"
        }), " Git diff analysis (automatic)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "B:"
        }), " Manual specification (user specifies packages)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "C:"
        }), " Both (auto-detect with manual override)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Recommendation:"
      }), " Option C - Auto-detect with manual override capability"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "93-version-bump-authority",
      children: "9.3 Version Bump Authority"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Question:"
      }), " Can agent make version bump decisions autonomously, or require approval?"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Options:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "A:"
        }), " Agent makes decisions autonomously (with validation)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "B:"
        }), " Agent proposes, requires approval for MAJOR"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "C:"
        }), " Agent proposes, requires approval for all bumps"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Recommendation:"
      }), " Option A - Agent makes decisions autonomously, with clear documentation and validation"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "10-next-steps",
      children: "10. Next Steps"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "101-immediate-actions",
      children: "10.1 Immediate Actions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Review & Approve Approach:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Review agentic execution pattern"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Approve PVW workflow structure"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Finalize integration with RW"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Create PVW Workflow Definition:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Define workflow YAML structure"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Create agent execution guide"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Document version bump criteria as guidance"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Create Validation Scripts (Tools):"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Implement format validation script"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Implement increment validation script"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Implement consistency validation script"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Implement change analysis script"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "102-future-enhancements",
      children: "10.2 Future Enhancements"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "RW Integration:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Add PVW as RW Step 2.5"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Update RW workflow definition"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Test end-to-end integration"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Documentation:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "PVW agent execution guide"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Examples and case studies"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Integration documentation"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "11-references",
      children: "11. References"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Release Workflow:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "packages/frameworks/workflow-mgt/docs/documentation/Developer_Docs/vwmp/release-workflow-agent-execution.md"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Agent-Driven Execution:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "packages/frameworks/workflow-mgt/docs/documentation/Developer_Docs/vwmp/agent-driven-workflow-execution.md"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Audit Report:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "T08-dual-versioning-package-audit-report.md"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Guardrails Discussion:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "T08-package-versioning-guardrails-discussion.md"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Status:"
      }), " PROPOSAL", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Next Review:"
      }), " After discussion and approval of agentic approach"]
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