"use strict";
(self["webpackChunkportal"] = self["webpackChunkportal"] || []).push([["38495"], {
62077(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_project_management_kanban_epics_epic_04_story_03_kanban_versioning_rw_integration_t_06_integration_examples_md_df0_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-project-management-kanban-epics-epic-04-story-03-kanban-versioning-rw-integration-t-06-integration-examples-md-df0.json
var site_docs_project_management_kanban_epics_epic_04_story_03_kanban_versioning_rw_integration_t_06_integration_examples_md_df0_namespaceObject = JSON.parse('{"id":"project-management/kanban/epics/epic-04/story-03-kanban-versioning-rw-integration/T06-integration-examples","title":"Integration Examples and Edge Cases","description":"Task IDS03:T06","source":"@site/../docs/project-management/kanban/epics/epic-04/story-03-kanban-versioning-rw-integration/T06-integration-examples.md","sourceDirName":"project-management/kanban/epics/epic-04/story-03-kanban-versioning-rw-integration","slug":"/project-management/kanban/epics/epic-04/story-03-kanban-versioning-rw-integration/T06-integration-examples","permalink":"/ai-dev-kit/docs/project-management/kanban/epics/epic-04/story-03-kanban-versioning-rw-integration/T06-integration-examples","draft":false,"unlisted":false,"editUrl":"https://github.com/RMS-Ltd/ai-dev-kit/tree/main/docs/../docs/project-management/kanban/epics/epic-04/story-03-kanban-versioning-rw-integration/T06-integration-examples.md","tags":[],"version":"current","frontMatter":{"lifecycle":"evergreen","ttl_days":null,"created_at":"2025-12-04T12:01:50.000Z","expires_at":null,"housekeeping_policy":"keep"},"sidebar":"docsSidebar","previous":{"title":"Epic 4, Story 3, Task 5: Create dev-kit integration guide","permalink":"/ai-dev-kit/docs/project-management/kanban/epics/epic-04/story-03-kanban-versioning-rw-integration/T05-create-dev-kit-integration-guide"},"next":{"title":"RW → Kanban Integration Gap Resolution Summary","permalink":"/ai-dev-kit/docs/project-management/kanban/epics/epic-04/story-03-kanban-versioning-rw-integration/T07-gap-resolution-summary"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ../docs/project-management/kanban/epics/epic-04/story-03-kanban-versioning-rw-integration/T06-integration-examples.md


const frontMatter = {
	lifecycle: 'evergreen',
	ttl_days: null,
	created_at: new Date('2025-12-04T12:01:50.000Z'),
	expires_at: null,
	housekeeping_policy: 'keep'
};
const contentTitle = 'Integration Examples and Edge Cases';

const assets = {

};



const toc = [{
  "value": "Overview",
  "id": "overview",
  "level": 2
}, {
  "value": "Worked Examples",
  "id": "worked-examples",
  "level": 2
}, {
  "value": "Example 1: FR → Task → Version → RW → Kanban Update",
  "id": "example-1-fr--task--version--rw--kanban-update",
  "level": 3
}, {
  "value": "Example 2: Multiple Tasks in Same Story",
  "id": "example-2-multiple-tasks-in-same-story",
  "level": 3
}, {
  "value": "Example 3: Story Completion Across Multiple Tasks",
  "id": "example-3-story-completion-across-multiple-tasks",
  "level": 3
}, {
  "value": "Example 4: Epic Progression",
  "id": "example-4-epic-progression",
  "level": 3
}, {
  "value": "Edge Cases",
  "id": "edge-cases",
  "level": 2
}, {
  "value": "Edge Case 1: Parallel Epic Development",
  "id": "edge-case-1-parallel-epic-development",
  "level": 3
}, {
  "value": "Edge Case 2: Task Renumbering",
  "id": "edge-case-2-task-renumbering",
  "level": 3
}, {
  "value": "Edge Case 3: Story Renumbering",
  "id": "edge-case-3-story-renumbering",
  "level": 3
}, {
  "value": "Edge Case 4: Version Conflicts",
  "id": "edge-case-4-version-conflicts",
  "level": 3
}, {
  "value": "Edge Case 5: Skipped Task Numbers",
  "id": "edge-case-5-skipped-task-numbers",
  "level": 3
}, {
  "value": "Edge Case 6: Multiple Builds for Same Task",
  "id": "edge-case-6-multiple-builds-for-same-task",
  "level": 3
}, {
  "value": "Troubleshooting Common Issues",
  "id": "troubleshooting-common-issues",
  "level": 2
}, {
  "value": "Issue 1: Version TASK Component Not Updating",
  "id": "issue-1-version-task-component-not-updating",
  "level": 3
}, {
  "value": "Issue 2: Epic Story Checklist Not Updated",
  "id": "issue-2-epic-story-checklist-not-updated",
  "level": 3
}, {
  "value": "Issue 3: Version Conflicts During Merge",
  "id": "issue-3-version-conflicts-during-merge",
  "level": 3
}, {
  "value": "Issue 4: Task Renumbering Breaks Version Traceability",
  "id": "issue-4-task-renumbering-breaks-version-traceability",
  "level": 3
}, {
  "value": "Best Practices Summary",
  "id": "best-practices-summary",
  "level": 2
}, {
  "value": "1. Always Use RW for Releases",
  "id": "1-always-use-rw-for-releases",
  "level": 3
}, {
  "value": "2. Maintain Version Immutability",
  "id": "2-maintain-version-immutability",
  "level": 3
}, {
  "value": "3. Handle Parallel Development Correctly",
  "id": "3-handle-parallel-development-correctly",
  "level": 3
}, {
  "value": "4. Document Edge Cases",
  "id": "4-document-edge-cases",
  "level": 3
}, {
  "value": "Related Documentation",
  "id": "related-documentation",
  "level": 2
}, {
  "value": "Version History",
  "id": "version-history",
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
        id: "integration-examples-and-edge-cases",
        children: "Integration Examples and Edge Cases"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Task ID:"
      }), " E04:S03", ":T06", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Task:"
      }), " E04:S03", ":T06", " – Document integration examples and edge cases", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Date:"
      }), " 2025-12-02", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Author:"
      }), " AI Agent (Auto)", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Status:"
      }), " ✅ COMPLETE"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "overview",
      children: "Overview"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This document provides worked examples and edge case documentation for the three-way integration between Kanban, Versioning, and Release Workflow in the dev-kit. It demonstrates real-world scenarios and how to handle edge cases that may arise during development."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Related Documentation:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Integration Guide: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/architecture/standards-and-adrs/dev-kit-kanban-versioning-rw-integration.md"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["FR/BR Intake Guide: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "packages/frameworks/kanban/FR_BR_INTAKE_GUIDE.md"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Release Workflow Guide: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "packages/frameworks/workflow-mgt/docs/documentation/Developer_Docs/vwmp/release-workflow-agent-execution.md"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "worked-examples",
      children: "Worked Examples"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-1-fr--task--version--rw--kanban-update",
      children: "Example 1: FR → Task → Version → RW → Kanban Update"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Scenario:"
      }), " A new Feature Request arrives for adding a validation script to check Kanban document consistency."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 1: Receive FR"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["FR created: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/project-management/kanban/fr-br/FR-001-kanban-consistency-validation.md"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Summary: \"Add validation script to check Kanban document consistency\""
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Priority: HIGH"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Scope: Epic 4 (Kanban Framework)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 2: Search for Existing Story"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Search Epic 4 stories for \"validation\" or \"consistency\""
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Found: Story 3 (Kanban + Versioning + RW Integration) - matches scope"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Decision: Create Task under Story 3"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 3: Create Task"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Task created: E04:S03", ":T08", " – Add Kanban consistency validation script"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Added to story-03-kanban-versioning-rw-integration.md"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Task status: TODO"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 4: Assign Version Number"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Current version: ", (0,jsx_runtime.jsx)(_components.code, {
            children: "0.4.3.5+1"
          }), " (Task 5)"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "New Task: Task 8"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Update ", (0,jsx_runtime.jsx)(_components.code, {
            children: "src/fynd_deals/version.py"
          }), ":"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-python",
            children: "VERSION_TASK = 8      # Task number (Task 8: Add Kanban consistency validation script)\nVERSION_BUILD = 1     # Build number (reset to 1 for new Task)\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Expected version for Task 8: ", (0,jsx_runtime.jsx)(_components.code, {
            children: "0.4.3.8+1"
          })]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 5: Complete Work"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Developer creates validation script: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "scripts/validation/validate_kanban_consistency.py"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Developer tests script"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Work complete"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 6: Trigger Release Workflow"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Developer types ", (0,jsx_runtime.jsx)(_components.code, {
          children: "RW"
        }), " in AI assistant"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["RW executes 11 steps:", "\n", (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Branch Safety Check ✅"
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Bump Version: ", (0,jsx_runtime.jsx)(_components.code, {
              children: "0.4.3.5+1"
            }), " → ", (0,jsx_runtime.jsx)(_components.code, {
              children: "0.4.3.8+1"
            }), " (Task transition detected, TASK updated to 8, BUILD reset to 1)"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Create Detailed Changelog: ", (0,jsx_runtime.jsx)(_components.code, {
              children: "CHANGELOG_v0.4.3.8+1.md"
            })]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Update Main Changelog: ", (0,jsx_runtime.jsx)(_components.code, {
              children: "CHANGELOG.md"
            })]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Update README (if applicable)"
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Auto-update Kanban Docs:", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["epic-04.md: ", (0,jsx_runtime.jsx)(_components.code, {
                  children: "**Last updated:** 2025-12-02 (v0.4.3.8+1 – Task 8 complete: Add Kanban consistency validation script)"
                })]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["epic-04.md Story Checklist: ", (0,jsx_runtime.jsx)(_components.code, {
                  children: "- [ ] **E4:S03 – ...** - IN PROGRESS (v0.4.3.8+1)"
                })]
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "epic-04.md detailed Story section: Task 8 marked complete"
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["story-003.md: ", (0,jsx_runtime.jsx)(_components.code, {
                  children: "**Last updated:** ..."
                }), ", ", (0,jsx_runtime.jsx)(_components.code, {
                  children: "**Version:** v0.4.3.8+1"
                })]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["story-003.md Task Checklist: ", (0,jsx_runtime.jsx)(_components.code, {
                  children: "- [x] **E04:S03:T08 – ...** ✅ COMPLETE (v0.4.3.8+1)"
                })]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["story-003.md detailed Task section: ", (0,jsx_runtime.jsx)(_components.code, {
                  children: "**Status:** ✅ **COMPLETE** (v0.4.3.8+1) - ..."
                })]
              }), "\n"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Stage Files ✅"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Run Validators ✅"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Commit Changes ✅"
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Create Git Tag: ", (0,jsx_runtime.jsx)(_components.code, {
              children: "v0.4.3.8+1"
            }), " ✅"]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Push to Remote ✅"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Result:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Version ", (0,jsx_runtime.jsx)(_components.code, {
          children: "v0.4.3.8+1"
        }), " released"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Task 8 marked complete with forensic marker"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "All Kanban docs updated"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Full traceability: FR → Task → Version → Changelog → Kanban → Git"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-2-multiple-tasks-in-same-story",
      children: "Example 2: Multiple Tasks in Same Story"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Scenario:"
      }), " Story 3 has multiple Tasks (T001, T002, T003, T004, T005, T007, T008) completed sequentially."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Task Sequence:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["T001 → ", (0,jsx_runtime.jsx)(_components.code, {
          children: "v0.4.3.1+1"
        }), " ✅"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["T002 → ", (0,jsx_runtime.jsx)(_components.code, {
          children: "v0.4.3.2+1"
        }), " ✅ (Task transition: TASK=2, BUILD=1)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["T003 → ", (0,jsx_runtime.jsx)(_components.code, {
          children: "v0.4.3.3+1"
        }), " ✅ (Task transition: TASK=3, BUILD=1)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["T004 → ", (0,jsx_runtime.jsx)(_components.code, {
          children: "v0.4.3.4+1"
        }), " ✅ (Task transition: TASK=4, BUILD=1)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["T005 → ", (0,jsx_runtime.jsx)(_components.code, {
          children: "v0.4.3.5+1"
        }), " ✅ (Task transition: TASK=5, BUILD=1)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["T007 → ", (0,jsx_runtime.jsx)(_components.code, {
          children: "v0.4.3.7+1"
        }), " ✅ (Task transition: TASK=7, BUILD=1)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["T008 → ", (0,jsx_runtime.jsx)(_components.code, {
          children: "v0.4.3.8+1"
        }), " ✅ (Task transition: TASK=8, BUILD=1)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Key Points:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Each Task gets its own ", (0,jsx_runtime.jsx)(_components.code, {
          children: "TASK"
        }), " component in version"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "BUILD"
        }), " resets to 1 for each new Task"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["RW Step 2 detects Task transitions and updates ", (0,jsx_runtime.jsx)(_components.code, {
          children: "VERSION_TASK"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["RW Step 2 resets ", (0,jsx_runtime.jsx)(_components.code, {
          children: "VERSION_BUILD"
        }), " to 1 for new Tasks"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "All Tasks tracked in Epic Story Checklist with version markers"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Epic Story Checklist Format:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-markdown",
        children: "- [ ] **E4:S03 – Kanban + Versioning + RW Integration** - IN PROGRESS (v0.4.3.8+1)\n  - Tasks: T01 ✅ (v0.4.3.1+1), T02 ✅ (v0.4.3.2+1), T03 ✅ (v0.4.3.3+1), T04 ✅ (v0.4.3.4+1), T05 ✅ (v0.4.3.5+1), T07 ✅ (v0.4.3.7+1), T08 ✅ (v0.4.3.8+1)\n\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-3-story-completion-across-multiple-tasks",
      children: "Example 3: Story Completion Across Multiple Tasks"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Scenario:"
      }), " Story 3 completes after Task 8, with all Tasks (T01-T08) completed."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Before Story Completion:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Story status: IN PROGRESS"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Tasks: T01-T08 all complete"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Latest version: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "v0.4.3.8+1"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Story Completion Process:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "All Tasks in Story are complete"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Story owner reviews Story completion criteria"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Story marked as COMPLETE in Story document"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Next RW execution updates:", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Story status: COMPLETE"
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Epic Story Checklist: ", (0,jsx_runtime.jsx)(_components.code, {
              children: "- [x] **E4:S03 – ...** - COMPLETE ✅ (v0.4.3.8+1)"
            })]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Epic detailed Story section: Story marked complete"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "After Story Completion:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Story status: COMPLETE ✅"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Story version: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "v0.4.3.8+1"
        }), " (last Task version)"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "All Tasks have forensic markers"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Story has forensic marker in Epic Story Checklist"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Note:"
      }), " Story completion doesn't create a new version. The last Task version (", (0,jsx_runtime.jsx)(_components.code, {
        children: "v0.4.3.8+1"
      }), ") represents the Story completion."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-4-epic-progression",
      children: "Example 4: Epic Progression"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Scenario:"
      }), " Epic 4 progresses through multiple Stories (S01, S02, S03)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Story Sequence:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Story 1: Dev Kit Kanban Implementation"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Tasks: T01-T05"
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Versions: ", (0,jsx_runtime.jsx)(_components.code, {
              children: "v0.4.1.1+1"
            }), " through ", (0,jsx_runtime.jsx)(_components.code, {
              children: "v0.4.1.5+1"
            })]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Status: COMPLETE ✅ (v0.4.1.5+1)"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Story 2: FR/BR Intake to Tasks"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Tasks: T01-T05"
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Versions: ", (0,jsx_runtime.jsx)(_components.code, {
              children: "v0.4.2.1+1"
            }), " through ", (0,jsx_runtime.jsx)(_components.code, {
              children: "v0.4.2.5+1"
            })]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Status: COMPLETE ✅ (v0.4.2.5+1)"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Story 3: Kanban + Versioning + RW Integration"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Tasks: T01-T08 (in progress)"
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Versions: ", (0,jsx_runtime.jsx)(_components.code, {
              children: "v0.4.3.1+1"
            }), " through ", (0,jsx_runtime.jsx)(_components.code, {
              children: "v0.4.3.8+1"
            })]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Status: IN PROGRESS (v0.4.3.8+1)"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Epic Progression:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Epic version schema: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "0.4.S.T+B"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Each Story increments ", (0,jsx_runtime.jsx)(_components.code, {
          children: "STORY"
        }), " component"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "TASK"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "BUILD"
        }), " reset for each new Story"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Epic status: IN PROGRESS (not all Stories complete)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Epic Completion:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "When all Stories are COMPLETE, Epic status changes to COMPLETE"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Epic version: Last Story version (e.g., ", (0,jsx_runtime.jsx)(_components.code, {
          children: "v0.4.3.8+1"
        }), " if Story 3 is last)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "edge-cases",
      children: "Edge Cases"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "edge-case-1-parallel-epic-development",
      children: "Edge Case 1: Parallel Epic Development"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Scenario:"
      }), " Multiple Epics (Epic 2, Epic 3, Epic 4) are developed in parallel."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem:"
      }), " How to handle version conflicts when Epics are merged?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution:"
      }), " Version schema enables parallel development:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Epic 2: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "0.2.S.T+B"
        }), " (e.g., ", (0,jsx_runtime.jsx)(_components.code, {
          children: "v0.2.1.1+1"
        }), ")"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Epic 3: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "0.3.S.T+B"
        }), " (e.g., ", (0,jsx_runtime.jsx)(_components.code, {
          children: "v0.3.1.1+1"
        }), ")"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Epic 4: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "0.4.S.T+B"
        }), " (e.g., ", (0,jsx_runtime.jsx)(_components.code, {
          children: "v0.4.3.8+1"
        }), ")"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "How It Works:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Each Epic has its own version stream (different ", (0,jsx_runtime.jsx)(_components.code, {
          children: "EPIC"
        }), " component)"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Versions are ordered by semantic structure, not commit time"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Changelog orders by version number (canonical ordering)"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["No version conflicts because ", (0,jsx_runtime.jsx)(_components.code, {
          children: "EPIC"
        }), " component differs"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Epic 2: v0.2.1.1+1 (committed 2025-12-01)\nEpic 3: v0.3.1.1+1 (committed 2025-12-02)\nEpic 4: v0.4.3.8+1 (committed 2025-12-02)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Changelog Order (by version, not time):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-markdown",
        children: "## [0.2.1.1+1] - 01-12-25\n## [0.3.1.1+1] - 02-12-25\n## [0.4.3.8+1] - 02-12-25\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Best Practice:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Work on epic branches (", (0,jsx_runtime.jsx)(_components.code, {
          children: "epic/2-*"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "epic/3-*"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "epic/4-*"
        }), ")"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Merge to ", (0,jsx_runtime.jsx)(_components.code, {
          children: "main"
        }), " when ready"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Changelog automatically orders by version number"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "edge-case-2-task-renumbering",
      children: "Edge Case 2: Task Renumbering"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Scenario:"
      }), " Task numbers need to be renumbered (e.g., Task 2 deleted, Tasks 3-5 need to become 2-4)."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem:"
      }), " How to handle version numbers when Tasks are renumbered?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution:"
      }), " Version numbers are immutable. Do not change existing version numbers."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Process:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Do NOT change existing versions:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Task 2 (v0.4.3.2+1) - keep as is"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Task 3 (v0.4.3.3+1) - keep as is"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Task 4 (v0.4.3.4+1) - keep as is"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Update Kanban documents:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Renumber Tasks in Story document (T003 → T002, T004 → T003, T005 → T004)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Update Task references in Epic document"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Update Task Checklist"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Future Tasks:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Continue with next available Task number"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "If Task 2 was deleted, next Task can be T002 (reusing number) or T006 (skipping)"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Documentation:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Add note in Story document about Task renumbering"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Explain why version numbers weren't changed (immutability)"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Original: T001 (v0.4.3.1+1), T002 (v0.4.3.2+1), T003 (v0.4.3.3+1), T004 (v0.4.3.4+1)\nAfter renumbering: T001 (v0.4.3.1+1), T002 (v0.4.3.3+1), T003 (v0.4.3.4+1)\nNote: T002 version is v0.4.3.3+1 (was T003), T003 version is v0.4.3.4+1 (was T004)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Best Practice:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Avoid Task renumbering if possible"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If necessary, document the renumbering and preserve version immutability"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update Kanban docs to reflect new Task numbers"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "edge-case-3-story-renumbering",
      children: "Edge Case 3: Story Renumbering"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Scenario:"
      }), " Story numbers need to be renumbered (e.g., Story 2 deleted, Story 3 becomes Story 2)."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem:"
      }), " How to handle version numbers when Stories are renumbered?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution:"
      }), " Version numbers are immutable. Do not change existing version numbers."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Process:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Do NOT change existing versions:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Story 2 (v0.4.2.x+x) - keep as is"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Story 3 (v0.4.3.x+x) - keep as is"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Update Kanban documents:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Renumber Stories in Epic document (S03 → S02)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Update Story references"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Update Story Checklist"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Future Stories:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Continue with next available Story number"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "If Story 2 was deleted, next Story can be S002 (reusing number) or S004 (skipping)"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Documentation:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Add note in Epic document about Story renumbering"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Explain why version numbers weren't changed (immutability)"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Original: S01 (v0.4.1.x+x), S02 (v0.4.2.x+x), S03 (v0.4.3.x+x)\nAfter renumbering: S01 (v0.4.1.x+x), S02 (v0.4.3.x+x)\nNote: S02 version is v0.4.3.x+x (was S03)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Best Practice:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Avoid Story renumbering if possible"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If necessary, document the renumbering and preserve version immutability"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update Kanban docs to reflect new Story numbers"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "edge-case-4-version-conflicts",
      children: "Edge Case 4: Version Conflicts"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Scenario:"
      }), " Two developers work on the same Task simultaneously, both create releases."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem:"
      }), " How to handle version conflicts when both create ", (0,jsx_runtime.jsx)(_components.code, {
        children: "v0.4.3.8+1"
      }), "?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution:"
      }), " Version conflicts are prevented by workflow design and Git merge process."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Prevention:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Single Active Task:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Only one Task should be active at a time"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Kanban enforces single active Task per Story"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "RW Step 1 Validation:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "RW Step 1 validates branch context"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Ensures work aligns with current branch"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Prevents cross-Task contamination"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Git Merge Process:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "If two developers work on same Task, Git merge handles conflicts"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Version file conflicts are resolved manually"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Only one version number is used (the one that merges to main)"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "If Conflict Occurs:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Detect Conflict:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Git merge conflict in ", (0,jsx_runtime.jsx)(_components.code, {
              children: "version.py"
            })]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Both branches have same version number"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Resolve Conflict:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Choose one version number (usually the one that merges to main first)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Update other branch to use next BUILD number"
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Example: Branch A has ", (0,jsx_runtime.jsx)(_components.code, {
              children: "v0.4.3.8+1"
            }), ", Branch B should use ", (0,jsx_runtime.jsx)(_components.code, {
              children: "v0.4.3.8+2"
            })]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Document Resolution:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Add note in changelog about conflict resolution"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Explain why specific version was chosen"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Best Practice:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Coordinate work to avoid parallel work on same Task"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use Kanban to track active Tasks"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If parallel work is necessary, use different BUILD numbers"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "edge-case-5-skipped-task-numbers",
      children: "Edge Case 5: Skipped Task Numbers"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Scenario:"
      }), " Task numbers are skipped (e.g., T001, T002, T004, T005 - T003 was deleted or never created)."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem:"
      }), " How to handle version numbers when Task numbers are skipped?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution:"
      }), " Version numbers follow Task numbers, even if some are skipped."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Process:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Version Numbers Match Task Numbers:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["T001 → ", (0,jsx_runtime.jsx)(_components.code, {
              children: "v0.4.3.1+1"
            })]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["T002 → ", (0,jsx_runtime.jsx)(_components.code, {
              children: "v0.4.3.2+1"
            })]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "T003 → (skipped, no version)"
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["T004 → ", (0,jsx_runtime.jsx)(_components.code, {
              children: "v0.4.3.4+1"
            })]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["T005 → ", (0,jsx_runtime.jsx)(_components.code, {
              children: "v0.4.3.5+1"
            })]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "No Special Handling Required:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Version numbers don't need to be sequential"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Gaps in Task numbers are reflected in version numbers"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "This is expected and acceptable"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Epic 4, Story 3:\n- T001 (v0.4.3.1+1) ✅\n- T002 (v0.4.3.2+1) ✅\n- T003 (skipped)\n- T004 (v0.4.3.4+1) ✅\n- T005 (v0.4.3.5+1) ✅\n- T007 (v0.4.3.7+1) ✅ (T006 skipped)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Best Practice:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Document why Task numbers were skipped"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Version numbers will reflect the gaps"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "No need to \"fill in\" missing version numbers"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "edge-case-6-multiple-builds-for-same-task",
      children: "Edge Case 6: Multiple Builds for Same Task"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Scenario:"
      }), " Same Task requires multiple releases (e.g., bug fixes, iterations)."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem:"
      }), " How to handle multiple releases for the same Task?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "BUILD"
      }), " component increments for each release within the same Task."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Process:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "First Release:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Task: E04:S03", ":T08"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Version: ", (0,jsx_runtime.jsx)(_components.code, {
              children: "v0.4.3.8+1"
            }), " (Task 8, Build 1)"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Second Release (same Task):"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Task: E04:S03", ":T08", " (still active)"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Version: ", (0,jsx_runtime.jsx)(_components.code, {
              children: "v0.4.3.8+2"
            }), " (Task 8, Build 2)"]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "RW Step 2 detects same Task, increments BUILD"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Third Release (same Task):"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Task: E04:S03", ":T08", " (still active)"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Version: ", (0,jsx_runtime.jsx)(_components.code, {
              children: "v0.4.3.8+3"
            }), " (Task 8, Build 3)"]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "RW Step 2 detects same Task, increments BUILD"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Task 8: Add Kanban consistency validation script\n- v0.4.3.8+1: Initial implementation\n- v0.4.3.8+2: Bug fix (script error handling)\n- v0.4.3.8+3: Enhancement (additional validation checks)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Best Practice:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use BUILD increments for iterations within same Task"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "When Task is complete, move to next Task (TASK increments, BUILD resets)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "troubleshooting-common-issues",
      children: "Troubleshooting Common Issues"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "issue-1-version-task-component-not-updating",
      children: "Issue 1: Version TASK Component Not Updating"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Symptoms:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["All Tasks in Story use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "TASK=1"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "BUILD increments across Tasks"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Ensure RW Step 2 detects Task transitions"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Verify ", (0,jsx_runtime.jsx)(_components.code, {
          children: "VERSION_TASK"
        }), " in ", (0,jsx_runtime.jsx)(_components.code, {
          children: "version.py"
        }), " matches active Task"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Check RW Step 1 validation passes"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Reference:"
      }), " T002 validation report (critical issue fixed)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "issue-2-epic-story-checklist-not-updated",
      children: "Issue 2: Epic Story Checklist Not Updated"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Symptoms:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Epic Story Checklist missing version markers"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Inconsistency between Story Checklist and detailed sections"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Ensure RW Step 6 updates ALL sections"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Verify systematic process is followed"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Check forensic marker format is canonical"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Reference:"
      }), " T004 validation report, T007 gap resolution"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "issue-3-version-conflicts-during-merge",
      children: "Issue 3: Version Conflicts During Merge"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Symptoms:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Git merge conflict in ", (0,jsx_runtime.jsx)(_components.code, {
          children: "version.py"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Two branches have same version number"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Choose one version number (usually the one merging to main first)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update other branch to use next BUILD number"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Document conflict resolution"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Reference:"
      }), " Edge Case 4 above"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "issue-4-task-renumbering-breaks-version-traceability",
      children: "Issue 4: Task Renumbering Breaks Version Traceability"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Symptoms:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Task numbers renumbered, but versions don't match"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Confusion about which version belongs to which Task"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Do NOT change existing version numbers (immutability)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update Kanban docs to reflect new Task numbers"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Document renumbering and version mapping"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Reference:"
      }), " Edge Case 2 above"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "best-practices-summary",
      children: "Best Practices Summary"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1-always-use-rw-for-releases",
      children: "1. Always Use RW for Releases"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "DO:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Type ", (0,jsx_runtime.jsx)(_components.code, {
          children: "RW"
        }), " in AI assistant after completing work"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Let RW handle version bumping and Kanban updates"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Verify all steps complete successfully"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "DON'T:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Manually update version file"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Manually update Kanban docs"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Skip validation steps"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "2-maintain-version-immutability",
      children: "2. Maintain Version Immutability"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "DO:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Preserve existing version numbers"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Document any renumbering"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Explain version mapping if Tasks/Stories are renumbered"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "DON'T:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Change existing version numbers"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Renumber versions to match new Task/Story numbers"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Create duplicate version numbers"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "3-handle-parallel-development-correctly",
      children: "3. Handle Parallel Development Correctly"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "DO:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use epic branches for parallel work"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Let version schema handle ordering (canonical ordering)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Merge to main when ready"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "DON'T:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Worry about version conflicts (EPIC component differs)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Try to synchronize version numbers across Epics"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Force sequential version numbers"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "4-document-edge-cases",
      children: "4. Document Edge Cases"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "DO:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Document Task/Story renumbering"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Explain version mapping if gaps exist"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Note any special circumstances"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "DON'T:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Hide edge cases"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Assume version numbers are always sequential"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Skip documentation for special cases"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "related-documentation",
      children: "Related Documentation"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Integration Guide:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/architecture/standards-and-adrs/dev-kit-kanban-versioning-rw-integration.md"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "FR/BR Intake Guide:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "packages/frameworks/kanban/FR_BR_INTAKE_GUIDE.md"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Release Workflow Guide:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "packages/frameworks/workflow-mgt/docs/documentation/Developer_Docs/vwmp/release-workflow-agent-execution.md"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Validation Reports:"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "T002: Kanban → Versioning validation"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "T003: Versioning → RW validation"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "T004: RW → Kanban validation"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "T007: Gap resolution summary"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "version-history",
      children: "Version History"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "v1.0.0"
        }), " (2025-12-02): Initial version created (E04:S03", ":T06", ")"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.em, {
        children: "End of Integration Examples and Edge Cases"
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