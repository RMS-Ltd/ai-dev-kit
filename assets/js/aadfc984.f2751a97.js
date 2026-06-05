"use strict";
(self["webpackChunkportal"] = self["webpackChunkportal"] || []).push([["86052"], {
93707(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_architecture_standards_and_adrs_dev_kit_versioning_cookbook_md_aad_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-architecture-standards-and-adrs-dev-kit-versioning-cookbook-md-aad.json
var site_docs_architecture_standards_and_adrs_dev_kit_versioning_cookbook_md_aad_namespaceObject = JSON.parse('{"id":"architecture/standards-and-adrs/dev-kit-versioning-cookbook","title":"Versioning Cookbook","description":"TaskS02:T02 – Create versioning cookbook document with worked examples","source":"@site/../docs/architecture/standards-and-adrs/dev-kit-versioning-cookbook.md","sourceDirName":"architecture/standards-and-adrs","slug":"/architecture/standards-and-adrs/dev-kit-versioning-cookbook","permalink":"/ai-dev-kit/docs/architecture/standards-and-adrs/dev-kit-versioning-cookbook","draft":false,"unlisted":false,"editUrl":"https://github.com/RMS-Ltd/ai-dev-kit/tree/main/docs/../docs/architecture/standards-and-adrs/dev-kit-versioning-cookbook.md","tags":[],"version":"current","frontMatter":{"lifecycle":"evergreen","ttl_days":null,"created_at":"2025-12-04T12:01:47.000Z","expires_at":null,"housekeeping_policy":"keep"},"sidebar":"docsSidebar","previous":{"title":"Dev-Kit: Kanban + Versioning + Release Workflow Integration Guide","permalink":"/ai-dev-kit/docs/architecture/standards-and-adrs/dev-kit-kanban-versioning-rw-integration"},"next":{"title":"dev-kit-versioning-policy","permalink":"/ai-dev-kit/docs/architecture/standards-and-adrs/dev-kit-versioning-policy"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ../docs/architecture/standards-and-adrs/dev-kit-versioning-cookbook.md


const frontMatter = {
	lifecycle: 'evergreen',
	ttl_days: null,
	created_at: new Date('2025-12-04T12:01:47.000Z'),
	expires_at: null,
	housekeeping_policy: 'keep'
};
const contentTitle = 'Versioning Cookbook';

const assets = {

};



const toc = [{
  "value": "Executive Summary",
  "id": "executive-summary",
  "level": 2
}, {
  "value": "How to Read Versions in This Cookbook",
  "id": "how-to-read-versions-in-this-cookbook",
  "level": 3
}, {
  "value": "Table of Contents",
  "id": "table-of-contents",
  "level": 2
}, {
  "value": "1. New Epic",
  "id": "1-new-epic",
  "level": 2
}, {
  "value": "Scenario",
  "id": "scenario",
  "level": 3
}, {
  "value": "Worked Example",
  "id": "worked-example",
  "level": 3
}, {
  "value": "Version File Update",
  "id": "version-file-update",
  "level": 3
}, {
  "value": "Kanban Context",
  "id": "kanban-context",
  "level": 3
}, {
  "value": "RW Perspective",
  "id": "rw-perspective",
  "level": 3
}, {
  "value": "Real Dev-Kit Example",
  "id": "real-dev-kit-example",
  "level": 3
}, {
  "value": "2. New Story Under Existing Epic",
  "id": "2-new-story-under-existing-epic",
  "level": 2
}, {
  "value": "Scenario",
  "id": "scenario-1",
  "level": 3
}, {
  "value": "Worked Example",
  "id": "worked-example-1",
  "level": 3
}, {
  "value": "Version File Update",
  "id": "version-file-update-1",
  "level": 3
}, {
  "value": "Kanban Context",
  "id": "kanban-context-1",
  "level": 3
}, {
  "value": "RW Perspective",
  "id": "rw-perspective-1",
  "level": 3
}, {
  "value": "Real Dev-Kit Example",
  "id": "real-dev-kit-example-1",
  "level": 3
}, {
  "value": "3. New Task Under Existing Story",
  "id": "3-new-task-under-existing-story",
  "level": 2
}, {
  "value": "Scenario",
  "id": "scenario-2",
  "level": 3
}, {
  "value": "Worked Example",
  "id": "worked-example-2",
  "level": 3
}, {
  "value": "Version File Update",
  "id": "version-file-update-2",
  "level": 3
}, {
  "value": "Kanban Context",
  "id": "kanban-context-2",
  "level": 3
}, {
  "value": "RW Perspective",
  "id": "rw-perspective-2",
  "level": 3
}, {
  "value": "Real Dev-Kit Example",
  "id": "real-dev-kit-example-2",
  "level": 3
}, {
  "value": "4. Bugfix/Hotfix on Existing Task",
  "id": "4-bugfixhotfix-on-existing-task",
  "level": 2
}, {
  "value": "Scenario",
  "id": "scenario-3",
  "level": 3
}, {
  "value": "Worked Example: In-Progress Task Bugfix",
  "id": "worked-example-in-progress-task-bugfix",
  "level": 3
}, {
  "value": "Version File Update",
  "id": "version-file-update-3",
  "level": 3
}, {
  "value": "Worked Example: Completed Task Hotfix",
  "id": "worked-example-completed-task-hotfix",
  "level": 3
}, {
  "value": "Kanban Context",
  "id": "kanban-context-3",
  "level": 3
}, {
  "value": "RW Perspective",
  "id": "rw-perspective-3",
  "level": 3
}, {
  "value": "Real Dev-Kit Example",
  "id": "real-dev-kit-example-3",
  "level": 3
}, {
  "value": "5. Parallel Epics and Stories",
  "id": "5-parallel-epics-and-stories",
  "level": 2
}, {
  "value": "Scenario",
  "id": "scenario-4",
  "level": 3
}, {
  "value": "Worked Example",
  "id": "worked-example-3",
  "level": 3
}, {
  "value": "Version File Update",
  "id": "version-file-update-4",
  "level": 3
}, {
  "value": "Kanban Context",
  "id": "kanban-context-4",
  "level": 3
}, {
  "value": "RW Perspective",
  "id": "rw-perspective-4",
  "level": 3
}, {
  "value": "Real Dev-Kit Example",
  "id": "real-dev-kit-example-4",
  "level": 3
}, {
  "value": "6. Task Transitions",
  "id": "6-task-transitions",
  "level": 2
}, {
  "value": "Scenario",
  "id": "scenario-5",
  "level": 3
}, {
  "value": "Worked Example",
  "id": "worked-example-4",
  "level": 3
}, {
  "value": "Version File Update",
  "id": "version-file-update-5",
  "level": 3
}, {
  "value": "Kanban Context",
  "id": "kanban-context-5",
  "level": 3
}, {
  "value": "RW Perspective",
  "id": "rw-perspective-5",
  "level": 3
}, {
  "value": "Common Mistakes to Avoid",
  "id": "common-mistakes-to-avoid",
  "level": 3
}, {
  "value": "Real Dev-Kit Example",
  "id": "real-dev-kit-example-5",
  "level": 3
}, {
  "value": "7. Story Completion",
  "id": "7-story-completion",
  "level": 2
}, {
  "value": "Scenario",
  "id": "scenario-6",
  "level": 3
}, {
  "value": "Worked Example",
  "id": "worked-example-5",
  "level": 3
}, {
  "value": "Version File Update",
  "id": "version-file-update-6",
  "level": 3
}, {
  "value": "Kanban Context",
  "id": "kanban-context-6",
  "level": 3
}, {
  "value": "RW Perspective",
  "id": "rw-perspective-6",
  "level": 3
}, {
  "value": "Real Dev-Kit Example",
  "id": "real-dev-kit-example-6",
  "level": 3
}, {
  "value": "8. Epic Completion",
  "id": "8-epic-completion",
  "level": 2
}, {
  "value": "Scenario",
  "id": "scenario-7",
  "level": 3
}, {
  "value": "Worked Example",
  "id": "worked-example-6",
  "level": 3
}, {
  "value": "Version File Update",
  "id": "version-file-update-7",
  "level": 3
}, {
  "value": "Kanban Context",
  "id": "kanban-context-7",
  "level": 3
}, {
  "value": "RW Perspective",
  "id": "rw-perspective-7",
  "level": 3
}, {
  "value": "Real Dev-Kit Example",
  "id": "real-dev-kit-example-7",
  "level": 3
}, {
  "value": "9. Cross-Framework Examples",
  "id": "9-cross-framework-examples",
  "level": 2
}, {
  "value": "Example 1: FR → Task → Version → RW → Kanban Update",
  "id": "example-1-fr--task--version--rw--kanban-update",
  "level": 3
}, {
  "value": "Step 1: Receive Feature Request",
  "id": "step-1-receive-feature-request",
  "level": 4
}, {
  "value": "Step 2: Intake Decision (FR → Task)",
  "id": "step-2-intake-decision-fr--task",
  "level": 4
}, {
  "value": "Step 3: Assign Version Number",
  "id": "step-3-assign-version-number",
  "level": 4
}, {
  "value": "Step 4: Complete Work",
  "id": "step-4-complete-work",
  "level": 4
}, {
  "value": "Step 5: Trigger Release Workflow",
  "id": "step-5-trigger-release-workflow",
  "level": 4
}, {
  "value": "Result",
  "id": "result",
  "level": 4
}, {
  "value": "Example 2: Bugfix with Verification Requirement",
  "id": "example-2-bugfix-with-verification-requirement",
  "level": 3
}, {
  "value": "Step 1: Discover Bug",
  "id": "step-1-discover-bug",
  "level": 4
}, {
  "value": "Step 2: Create Bugfix Task",
  "id": "step-2-create-bugfix-task",
  "level": 4
}, {
  "value": "Step 3: Implement Fix",
  "id": "step-3-implement-fix",
  "level": 4
}, {
  "value": "Step 4: Trigger Release Workflow",
  "id": "step-4-trigger-release-workflow",
  "level": 4
}, {
  "value": "Step 5: Verify Fix",
  "id": "step-5-verify-fix",
  "level": 4
}, {
  "value": "Step 6: Update Changelog (Post-Verification)",
  "id": "step-6-update-changelog-post-verification",
  "level": 4
}, {
  "value": "Result",
  "id": "result-1",
  "level": 4
}, {
  "value": "Example 3: Parallel Epic/Story Work",
  "id": "example-3-parallel-epicstory-work",
  "level": 3
}, {
  "value": "Context",
  "id": "context",
  "level": 4
}, {
  "value": "Kanban State",
  "id": "kanban-state",
  "level": 4
}, {
  "value": "Version File States",
  "id": "version-file-states",
  "level": 4
}, {
  "value": "RW Execution (Parallel)",
  "id": "rw-execution-parallel",
  "level": 4
}, {
  "value": "Changelog Ordering (Canonical)",
  "id": "changelog-ordering-canonical",
  "level": 4
}, {
  "value": "Result",
  "id": "result-2",
  "level": 4
}, {
  "value": "10. Edge Cases and Anti-Patterns",
  "id": "10-edge-cases-and-anti-patterns",
  "level": 2
}, {
  "value": "10.1 Anti-Pattern: BUILD Incremented Instead of TASK",
  "id": "101-anti-pattern-build-incremented-instead-of-task",
  "level": 3
}, {
  "value": "10.2 Edge Case: Task Renumbering",
  "id": "102-edge-case-task-renumbering",
  "level": 3
}, {
  "value": "10.3 Edge Case: Story Re-Parenting Between Epics",
  "id": "103-edge-case-story-re-parenting-between-epics",
  "level": 3
}, {
  "value": "10.4 Edge Case: Version Conflicts When Branches Diverge",
  "id": "104-edge-case-version-conflicts-when-branches-diverge",
  "level": 3
}, {
  "value": "10.5 Edge Case: Incorrect TASK Mapping in Version File",
  "id": "105-edge-case-incorrect-task-mapping-in-version-file",
  "level": 3
}, {
  "value": "10.6 Anti-Pattern: Using Standalone Task References",
  "id": "106-anti-pattern-using-standalone-task-references",
  "level": 3
}, {
  "value": "10.7 Edge Case: BUILD Number Overflow",
  "id": "107-edge-case-build-number-overflow",
  "level": 3
}, {
  "value": "10.8 Edge Case: Missing Version in Changelog",
  "id": "108-edge-case-missing-version-in-changelog",
  "level": 3
}, {
  "value": "10.9 Anti-Pattern: Version Number in Commit Message Doesn&#39;t Match Tag",
  "id": "109-anti-pattern-version-number-in-commit-message-doesnt-match-tag",
  "level": 3
}, {
  "value": "10.10 Edge Case: Parallel Epic Development Version Ordering",
  "id": "1010-edge-case-parallel-epic-development-version-ordering",
  "level": 3
}, {
  "value": "10.11 Edge Case: Out-of-Order Task Completion",
  "id": "1011-edge-case-out-of-order-task-completion",
  "level": 3
}, {
  "value": "Quick Reference: Version Component Rules",
  "id": "quick-reference-version-component-rules",
  "level": 2
}, {
  "value": "Quick Reference: Version Progression Patterns",
  "id": "quick-reference-version-progression-patterns",
  "level": 2
}, {
  "value": "References",
  "id": "references",
  "level": 2
}, {
  "value": "Copying This Cookbook",
  "id": "copying-this-cookbook",
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
        id: "versioning-cookbook",
        children: "Versioning Cookbook"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Task:"
      }), " E3:S02", ":T02", " – Create versioning cookbook document with worked examples", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Date:"
      }), " 2025-12-03", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Status:"
      }), " ✅ COMPLETE", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Version:"
      }), " v0.3.2.3+1"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Based on Framework:"
      }), " This cookbook is a dev-kit specialisation providing worked examples for the versioning schema defined in the Numbering & Versioning framework. For the canonical schema definition and strategy, see:"]
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
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "executive-summary",
      children: "Executive Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["This cookbook provides ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "practical, worked examples"
      }), " for using the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "RC.EPIC.STORY.TASK+BUILD"
      }), " versioning schema. Each example shows:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Before/after version"
        }), " transitions"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Kanban context"
        }), " (Epic/Story/Task)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "RW perspective"
        }), " (how Release Workflow interprets and handles the version)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Real dev-kit examples"
        }), " where available"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Target Audience:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Developers adopting the versioning framework"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "AI agents executing Release Workflow"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Project maintainers managing version progression"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Safe to Copy:"
      }), " All examples are ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "project-agnostic"
      }), " and safe to copy into other projects."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "how-to-read-versions-in-this-cookbook",
      children: "How to Read Versions in This Cookbook"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The examples focus on the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "internal version"
      }), " (", (0,jsx_runtime.jsx)(_components.code, {
        children: "RC.EPIC.STORY.TASK+BUILD"
      }), ") because it drives Kanban, RW, and traceability. When presenting versions:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["For ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "external audiences"
        }), " (README, GitHub releases, package managers), prefer the ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "SemVer release version first"
        }), ", optionally followed by the internal version, for example:", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "v0.3.19+2 (internal: v0.6.7.101+2)"
            }), "."]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["For ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "internal reasoning"
        }), " (Kanban docs, workflow behaviour, forensic questions), use the internal version directly."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Where helpful, you can imagine each worked example also having a matching SemVer tag derived via the mapping in the framework and dev-kit policies, and optionally including metadata like ", (0,jsx_runtime.jsx)(_components.code, {
        children: "+rc.<RC>.e<EPIC>.s<STORY>.t<TASK>.b<BUILD>"
      }), " when you need machine-parseable coordinates."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "table-of-contents",
      children: "Table of Contents"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.a, {
            href: "/ai-dev-kit/docs/architecture/standards-and-adrs/versioning-quick-reference",
            children: "Quick Reference"
          })
        }), " - 1-2 page summary for quick lookup ⚡"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "#1-new-epic",
          children: "New Epic"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "#2-new-story-under-existing-epic",
          children: "New Story Under Existing Epic"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "#3-new-task-under-existing-story",
          children: "New Task Under Existing Story"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "#4-bugfixhotfix-on-existing-task",
          children: "Bugfix/Hotfix on Existing Task"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "#5-parallel-epics-and-stories",
          children: "Parallel Epics and Stories"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "#6-task-transitions",
          children: "Task Transitions"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "#7-story-completion",
          children: "Story Completion"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "#8-epic-completion",
          children: "Epic Completion"
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "#9-cross-framework-examples",
          children: "Cross-Framework Examples"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#example-1-fr--task--version--rw--kanban-update",
              children: "Example 1: FR → Task → Version → RW → Kanban Update"
            })
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#example-2-bugfix-with-verification-requirement",
              children: "Example 2: Bugfix with Verification Requirement"
            })
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#example-3-parallel-epicstory-work",
              children: "Example 3: Parallel Epic/Story Work"
            })
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "#10-edge-cases-and-anti-patterns",
          children: "Edge Cases and Anti-Patterns"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "#101-anti-pattern-build-incremented-instead-of-task",
          children: "10.1 Anti-Pattern: BUILD Incremented Instead of TASK"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "#102-edge-case-task-renumbering",
          children: "10.2 Edge Case: Task Renumbering"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "#103-edge-case-story-re-parenting-between-epics",
          children: "10.3 Edge Case: Story Re-Parenting Between Epics"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "#104-edge-case-version-conflicts-when-branches-diverge",
          children: "10.4 Edge Case: Version Conflicts When Branches Diverge"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "#105-edge-case-incorrect-task-mapping-in-version-file",
          children: "10.5 Edge Case: Incorrect TASK Mapping in Version File"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "#106-anti-pattern-using-standalone-task-references",
          children: "10.6 Anti-Pattern: Using Standalone Task References"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "#107-edge-case-build-number-overflow",
          children: "10.7 Edge Case: BUILD Number Overflow"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "#108-edge-case-missing-version-in-changelog",
          children: "10.8 Edge Case: Missing Version in Changelog"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "#109-anti-pattern-version-number-in-commit-message-doesnt-match-tag",
          children: "10.9 Anti-Pattern: Version Number in Commit Message Doesn't Match Tag"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "#1010-edge-case-parallel-epic-development-version-ordering",
          children: "10.10 Edge Case: Parallel Epic Development Version Ordering"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1-new-epic",
      children: "1. New Epic"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "scenario",
      children: "Scenario"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Starting a completely new epic that has no prior work in the repository."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Example:"
      }), " Creating Epic 5 for \"Documentation Framework\" when Epics 1-4 already exist."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "worked-example",
      children: "Worked Example"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Before:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Last version: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "0.4.3.7+1"
        }), " (Epic 4, Story 3, Task 7, Build 1)"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "No Epic 5 exists yet"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "After:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["New version: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "0.5.1.1+1"
        }), " (Epic 5, Story 1, Task 1, Build 1)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "version-file-update",
      children: "Version File Update"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsxs)(_components.strong, {
        children: ["Before (", (0,jsx_runtime.jsx)(_components.code, {
          children: "version.py"
        }), "):"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "VERSION_RC = 0\nVERSION_EPIC = 4      # Previous epic\nVERSION_STORY = 3\nVERSION_TASK = 7\nVERSION_BUILD = 1\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsxs)(_components.strong, {
        children: ["After (", (0,jsx_runtime.jsx)(_components.code, {
          children: "version.py"
        }), "):"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "VERSION_RC = 0\nVERSION_EPIC = 5      # NEW: Increment to new epic\nVERSION_STORY = 1      # NEW: Reset to first story\nVERSION_TASK = 1       # NEW: Reset to first task\nVERSION_BUILD = 1      # NEW: Reset to first build\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "kanban-context",
      children: "Kanban Context"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Epic Document:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "docs/project-management/kanban/epics/epic-05/epic-05.md"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-markdown",
        children: "# Epic 5: Documentation Framework\n\n**Status:** IN PROGRESS\n**Version Schema:** `0.5.S.T+B`\n\n## Story Checklist\n- [ ] **E5:S01 – Framework Documentation Structure** - TODO\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Story Document:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "docs/project-management/kanban/epics/epic-05/story-01-*.md"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-markdown",
        children: "# Story 001 – Framework Documentation Structure\n\n**Status:** IN PROGRESS\n**Epic:** Epic 5\n**Story:** Story 1\n\n## Task Checklist\n- [ ] **E5:S01:T01 – Define documentation structure** - TODO\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "rw-perspective",
      children: "RW Perspective"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "RW Step 1: Branch Safety Check"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Validates branch: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "epic/5-documentation-framework"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Validates version matches: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "0.5.1.1+1"
        }), " matches Epic 5"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "RW Step 2: Bump Version"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Detects new epic (EPIC changed from 4 to 5)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Confirms STORY=1, TASK=1, BUILD=1 (all reset)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "RW Step 3: Create Detailed Changelog"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Creates: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "CHANGELOG_v0.5.1.1+1.md"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Includes Epic 5 context"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "RW Step 6: Auto-update Kanban Docs"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Updates epic-05.md with version marker"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Updates story-01-*.md with version marker"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "real-dev-kit-example",
      children: "Real Dev-Kit Example"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Epic 1 Start:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["First version: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "0.1.1.1+1"
        }), " (Epic 1, Story 1, Task 1)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["See: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/changelog-and-release-notes/changelog-archive/CHANGELOG_v0.1.1.1+1.md"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "2-new-story-under-existing-epic",
      children: "2. New Story Under Existing Epic"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "scenario-1",
      children: "Scenario"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Adding a new story to an existing epic that already has one or more stories."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Example:"
      }), " Adding Story 2 to Epic 3 when Story 1 already exists and is complete."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "worked-example-1",
      children: "Worked Example"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Before:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Last version: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "0.3.1.6+1"
        }), " (Epic 3, Story 1, Task 6, Build 1)"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Story 1 is COMPLETE"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "After:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["New version: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "0.3.2.1+1"
        }), " (Epic 3, Story 2, Task 1, Build 1)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "version-file-update-1",
      children: "Version File Update"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsxs)(_components.strong, {
        children: ["Before (", (0,jsx_runtime.jsx)(_components.code, {
          children: "version.py"
        }), "):"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "VERSION_RC = 0\nVERSION_EPIC = 3\nVERSION_STORY = 1      # Previous story\nVERSION_TASK = 6\nVERSION_BUILD = 1\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsxs)(_components.strong, {
        children: ["After (", (0,jsx_runtime.jsx)(_components.code, {
          children: "version.py"
        }), "):"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "VERSION_RC = 0\nVERSION_EPIC = 3       # Unchanged\nVERSION_STORY = 2      # NEW: Increment to next story\nVERSION_TASK = 1       # NEW: Reset to first task\nVERSION_BUILD = 1      # NEW: Reset to first build\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "kanban-context-1",
      children: "Kanban Context"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Epic Document:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "docs/project-management/kanban/epics/epic-03/epic-03.md"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-markdown",
        children: "## Story Checklist\n- [x] **E3:S01 – Dev Kit Alignment with Versioning Framework** - COMPLETE ✅ (v0.3.1.6+1)\n- [ ] **E3:S02 – Versioning Cookbook & Examples** - IN PROGRESS\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Story Document:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "docs/project-management/kanban/epics/epic-03/story-02-*.md"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-markdown",
        children: "# Story 002 – Versioning Cookbook & Examples\n\n**Status:** COMPLETE ✅\n**Epic:** Epic 3\n**Story:** Story 2\n\n## Task Checklist\n- [x] **E3:S02:T01 – Define core versioning scenarios** - COMPLETE ✅ (v0.3.2.1+1)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "rw-perspective-1",
      children: "RW Perspective"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "RW Step 1: Branch Safety Check"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Validates branch: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "epic/3-numbering-and-versioning-framework"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Validates version matches: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "0.3.2.1+1"
        }), " matches Epic 3"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "RW Step 2: Bump Version"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Detects story progression (STORY changed from 1 to 2)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Confirms TASK=1, BUILD=1 (both reset)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "RW Step 3: Create Detailed Changelog"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Creates: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "CHANGELOG_v0.3.2.1+1.md"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Includes Epic 3, Story 2 context"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "RW Step 6: Auto-update Kanban Docs"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Updates epic-03.md with Story 2 reference"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Updates story-02-*.md with version marker"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "real-dev-kit-example-1",
      children: "Real Dev-Kit Example"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Epic 1 Story Progression:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Story 1: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "0.1.1.1+1"
        }), " → ", (0,jsx_runtime.jsx)(_components.code, {
          children: "0.1.1.1+2"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Story 2: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "0.1.2.1+1"
        }), " → ", (0,jsx_runtime.jsx)(_components.code, {
          children: "0.1.2.5+1"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Story 3: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "0.1.3.1+1"
        }), " → ", (0,jsx_runtime.jsx)(_components.code, {
          children: "0.1.3.6+1"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["See: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/changelog-and-release-notes/changelog-archive/CHANGELOG_v0.1.2.1+1.md"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "3-new-task-under-existing-story",
      children: "3. New Task Under Existing Story"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "scenario-2",
      children: "Scenario"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Adding a new task to an existing story that already has one or more tasks."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Example:"
      }), " Completing Task 1 (", (0,jsx_runtime.jsx)(_components.code, {
        children: "0.3.1.1+3"
      }), ") and starting Task 2 (", (0,jsx_runtime.jsx)(_components.code, {
        children: "0.3.1.2+1"
      }), ")."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "worked-example-2",
      children: "Worked Example"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Before:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Last version: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "0.3.1.1+3"
        }), " (Epic 3, Story 1, Task 1, Build 3)"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Task 1 is COMPLETE"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "After:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["New version: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "0.3.1.2+1"
        }), " (Epic 3, Story 1, Task 2, Build 1)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "version-file-update-2",
      children: "Version File Update"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsxs)(_components.strong, {
        children: ["Before (", (0,jsx_runtime.jsx)(_components.code, {
          children: "version.py"
        }), "):"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "VERSION_RC = 0\nVERSION_EPIC = 3\nVERSION_STORY = 1\nVERSION_TASK = 1       # Previous task\nVERSION_BUILD = 3      # Previous build\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsxs)(_components.strong, {
        children: ["After (", (0,jsx_runtime.jsx)(_components.code, {
          children: "version.py"
        }), "):"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "VERSION_RC = 0\nVERSION_EPIC = 3       # Unchanged\nVERSION_STORY = 1      # Unchanged\nVERSION_TASK = 2       # NEW: Increment to next task\nVERSION_BUILD = 1      # NEW: Reset to 1 for new task\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "kanban-context-2",
      children: "Kanban Context"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Story Document:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "docs/project-management/kanban/epics/epic-03/story-01-*.md"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-markdown",
        children: "## Task Checklist\n- [x] **E3:S01:T01 – Review dev-kit versioning policy vs framework policy** ✅ COMPLETE (v0.3.1.1+2)\n- [x] **E3:S01:T02 – Ingest versioning findings from fynd.deals Epic 15 work** ✅ COMPLETE (v0.3.1.2+1)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "rw-perspective-2",
      children: "RW Perspective"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "RW Step 1: Branch Safety Check"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Validates branch: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "epic/3-numbering-and-versioning-framework"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Validates version matches: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "0.3.1.2+1"
        }), " matches Epic 3, Story 1"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "RW Step 2: Bump Version"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "CRITICAL:"
        }), " Detects task transition"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Compares ", (0,jsx_runtime.jsx)(_components.code, {
          children: "VERSION_TASK"
        }), " in ", (0,jsx_runtime.jsx)(_components.code, {
          children: "version.py"
        }), " (currently 1) with active Task in Story document (Task 2)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Automatically updates"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "VERSION_TASK"
        }), " to 2"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Automatically resets"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "VERSION_BUILD"
        }), " to 1"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["This is the ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "automatic task transition handling"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "RW Step 3: Create Detailed Changelog"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Creates: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "CHANGELOG_v0.3.1.2+1.md"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Includes Epic 3, Story 1, Task 2 context"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "RW Step 6: Auto-update Kanban Docs"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Updates Story document with Task 1 completion marker: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "✅ COMPLETE (v0.3.1.1+3)"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Updates Story document with Task 2 start marker"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "real-dev-kit-example-2",
      children: "Real Dev-Kit Example"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Epic 1 Story 2 Task Progression:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Task 1: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "0.1.2.1+1"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Task 2: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "0.1.2.2+1"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Task 3: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "0.1.2.3+1"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Task 4: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "0.1.2.4+1"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Task 5: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "0.1.2.5+1"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["See: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/changelog-and-release-notes/changelog-archive/CHANGELOG_v0.1.2.2+1.md"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "4-bugfixhotfix-on-existing-task",
      children: "4. Bugfix/Hotfix on Existing Task"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "scenario-3",
      children: "Scenario"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Fixing a bug or issue in a task that is either in progress or completed."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Example:"
      }), " Fixing a bug discovered in Task 3 after it was completed and released as ", (0,jsx_runtime.jsx)(_components.code, {
        children: "v0.3.1.3+1"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "worked-example-in-progress-task-bugfix",
      children: "Worked Example: In-Progress Task Bugfix"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Before:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Current version: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "0.3.1.3+1"
        }), " (Epic 3, Story 1, Task 3, Build 1)"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Bug discovered while Task 3 is still in progress"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "After:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Fixed version: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "0.3.1.3+2"
        }), " (Epic 3, Story 1, Task 3, Build 2)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "version-file-update-3",
      children: "Version File Update"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsxs)(_components.strong, {
        children: ["Before (", (0,jsx_runtime.jsx)(_components.code, {
          children: "version.py"
        }), "):"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "VERSION_RC = 0\nVERSION_EPIC = 3\nVERSION_STORY = 1\nVERSION_TASK = 3\nVERSION_BUILD = 1      # Previous build\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsxs)(_components.strong, {
        children: ["After (", (0,jsx_runtime.jsx)(_components.code, {
          children: "version.py"
        }), "):"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "VERSION_RC = 0\nVERSION_EPIC = 3       # Unchanged\nVERSION_STORY = 1      # Unchanged\nVERSION_TASK = 3       # Unchanged (same task)\nVERSION_BUILD = 2      # Increment build number\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "worked-example-completed-task-hotfix",
      children: "Worked Example: Completed Task Hotfix"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Before:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Completed version: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "0.3.1.3+1"
        }), " (Epic 3, Story 1, Task 3, Build 1)"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Task 3 marked COMPLETE"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Bug discovered later"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "After:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Hotfix version: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "0.3.1.3+2"
        }), " (Epic 3, Story 1, Task 3, Build 2)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Version File Update:"
      }), " Same as in-progress bugfix (BUILD increments)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "kanban-context-3",
      children: "Kanban Context"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Story Document:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-markdown",
        children: "## Task Checklist\n- [x] **E3:S01:T03 – Update dev-kit versioning policy as canonical SoT** ✅ COMPLETE (v0.3.1.3+1)\n  - Bugfix: Fixed policy reference issue ✅ COMPLETE (v0.3.1.3+2)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "rw-perspective-3",
      children: "RW Perspective"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "RW Step 1: Branch Safety Check"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Validates branch: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "epic/3-numbering-and-versioning-framework"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Validates version matches: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "0.3.1.3+2"
        }), " matches Epic 3, Story 1, Task 3"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "RW Step 2: Bump Version"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Detects same task (TASK unchanged)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Increments BUILD from 1 to 2"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "RW Step 3: Create Detailed Changelog"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "CRITICAL:"
        }), " RW Step 3 requires fix verification"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["If fix is ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "verified"
        }), " (tested):", "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-markdown",
            children: "### Fixed\n- Fixed policy reference issue in versioning policy\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["If fix is ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "unverified"
        }), " (not yet tested):", "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-markdown",
            children: "### Attempted Fixes\n- Attempted fix: Policy reference issue (verification pending)\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["RW ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "stops"
        }), " if unverified fixes are marked as \"Fixed\""]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "RW Step 6: Auto-update Kanban Docs"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Updates Story document with bugfix marker"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Includes verification status"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "real-dev-kit-example-3",
      children: "Real Dev-Kit Example"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Epic 4 Story 3 Task 2 Bugfix:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Original: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "0.4.3.2+1"
        }), " (Task 2 complete)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Bugfix: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "0.4.3.2+2"
        }), " (Critical issue resolution)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["See: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/changelog-and-release-notes/changelog-archive/CHANGELOG_v0.4.3.2+2.md"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "5-parallel-epics-and-stories",
      children: "5. Parallel Epics and Stories"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "scenario-4",
      children: "Scenario"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Working on multiple epics or stories simultaneously, where work happens in parallel branches and may be merged out of chronological order."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Epic 3 work on ", (0,jsx_runtime.jsx)(_components.code, {
          children: "epic/3-*"
        }), " branch"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Epic 4 work on ", (0,jsx_runtime.jsx)(_components.code, {
          children: "epic/4-*"
        }), " branch"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Both branches merged to ", (0,jsx_runtime.jsx)(_components.code, {
          children: "main"
        }), " at different times"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "worked-example-3",
      children: "Worked Example"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Epic 3 Branch:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Work: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "0.3.1.1+1"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "0.3.1.2+1"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "0.3.2.1+1"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Merged to ", (0,jsx_runtime.jsx)(_components.code, {
          children: "main"
        }), " on 2025-12-03"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Epic 4 Branch:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Work: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "0.4.1.1+1"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "0.4.2.1+1"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "0.4.3.1+1"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Merged to ", (0,jsx_runtime.jsx)(_components.code, {
          children: "main"
        }), " on 2025-12-02 (earlier than Epic 3)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "version-file-update-4",
      children: "Version File Update"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsxs)(_components.strong, {
        children: ["On Epic 3 Branch (", (0,jsx_runtime.jsx)(_components.code, {
          children: "epic/3-*"
        }), "):"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "VERSION_RC = 0\nVERSION_EPIC = 3       # Epic 3 context\nVERSION_STORY = 2\nVERSION_TASK = 1\nVERSION_BUILD = 1\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsxs)(_components.strong, {
        children: ["On Epic 4 Branch (", (0,jsx_runtime.jsx)(_components.code, {
          children: "epic/4-*"
        }), "):"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "VERSION_RC = 0\nVERSION_EPIC = 4       # Epic 4 context\nVERSION_STORY = 3\nVERSION_TASK = 1\nVERSION_BUILD = 1\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "kanban-context-4",
      children: "Kanban Context"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Kanban Board:"
      }), " Shows both epics in parallel"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-markdown",
        children: "### Epic 3: Numbering & Versioning Framework\n**Status:** IN PROGRESS\n- Story 1: COMPLETE ✅\n- Story 2: IN PROGRESS\n\n### Epic 4: Kanban Framework\n**Status:** COMPLETE ✅\n- Story 1: COMPLETE ✅\n- Story 2: COMPLETE ✅\n- Story 3: COMPLETE ✅\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "rw-perspective-4",
      children: "RW Perspective"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "RW Step 1: Branch Safety Check"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Epic 3 branch: Validates ", (0,jsx_runtime.jsx)(_components.code, {
          children: "0.3.2.1+1"
        }), " matches ", (0,jsx_runtime.jsx)(_components.code, {
          children: "epic/3-*"
        }), " branch"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Epic 4 branch: Validates ", (0,jsx_runtime.jsx)(_components.code, {
          children: "0.4.3.1+1"
        }), " matches ", (0,jsx_runtime.jsx)(_components.code, {
          children: "epic/4-*"
        }), " branch"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "No conflicts"
        }), " between parallel epic versions"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "RW Step 3: Create Detailed Changelog"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Each epic creates its own changelog entries"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Changelogs ordered ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "canonically by version number"
        }), ", not by commit time"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Changelog Ordering (Canonical):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-markdown",
        children: "## [0.3.1.1+1] - 03-12-25    # Epic 3, Story 1, Task 1\n## [0.3.1.2+1] - 03-12-25    # Epic 3, Story 1, Task 2\n## [0.4.1.1+1] - 02-12-25    # Epic 4, Story 1, Task 1 (merged earlier, but ordered correctly)\n## [0.4.2.1+1] - 02-12-25    # Epic 4, Story 2, Task 1\n## [0.4.3.1+1] - 02-12-25    # Epic 4, Story 3, Task 1\n## [0.3.2.1+1] - 03-12-25    # Epic 3, Story 2, Task 1 (merged later, but ordered correctly)\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Key Point:"
      }), " Version numbers determine order, not timestamps."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "real-dev-kit-example-4",
      children: "Real Dev-Kit Example"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Parallel Epic Development:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Epic 1: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "0.1.1.1+1"
        }), " → ", (0,jsx_runtime.jsx)(_components.code, {
          children: "0.1.3.6+1"
        }), " (completed)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Epic 2: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "0.2.1.1+2"
        }), " → ", (0,jsx_runtime.jsx)(_components.code, {
          children: "0.2.1.1+5"
        }), " (completed)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Epic 3: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "0.3.1.1+1"
        }), " → ", (0,jsx_runtime.jsx)(_components.code, {
          children: "0.3.2.1+1"
        }), " (in progress)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Epic 4: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "0.4.1.1+1"
        }), " → ", (0,jsx_runtime.jsx)(_components.code, {
          children: "0.4.3.7+1"
        }), " (completed)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["See: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "CHANGELOG.md"
        }), " for canonical ordering"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "6-task-transitions",
      children: "6. Task Transitions"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "scenario-5",
      children: "Scenario"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Moving from one task to another within the same story, where the previous task is complete and a new task is starting."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Example:"
      }), " Completing Task 1 (", (0,jsx_runtime.jsx)(_components.code, {
        children: "0.3.1.1+3"
      }), ") and starting Task 2 (", (0,jsx_runtime.jsx)(_components.code, {
        children: "0.3.1.2+1"
      }), ")."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "worked-example-4",
      children: "Worked Example"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Before:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Last version: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "0.3.1.1+3"
        }), " (Epic 3, Story 1, Task 1, Build 3)"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Task 1 marked COMPLETE"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "After:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["New version: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "0.3.1.2+1"
        }), " (Epic 3, Story 1, Task 2, Build 1)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "version-file-update-5",
      children: "Version File Update"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsxs)(_components.strong, {
        children: ["Before (", (0,jsx_runtime.jsx)(_components.code, {
          children: "version.py"
        }), "):"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "VERSION_RC = 0\nVERSION_EPIC = 3\nVERSION_STORY = 1\nVERSION_TASK = 1       # Previous task\nVERSION_BUILD = 3      # Previous build\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsxs)(_components.strong, {
        children: ["After (", (0,jsx_runtime.jsx)(_components.code, {
          children: "version.py"
        }), "):"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "VERSION_RC = 0\nVERSION_EPIC = 3       # Unchanged\nVERSION_STORY = 1      # Unchanged\nVERSION_TASK = 2       # Increment to next task\nVERSION_BUILD = 1      # Reset to 1 for new task\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "kanban-context-5",
      children: "Kanban Context"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Story Document:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-markdown",
        children: "## Task Checklist\n- [x] **E3:S01:T01 – Review dev-kit versioning policy vs framework policy** ✅ COMPLETE (v0.3.1.1+2)\n- [ ] **E3:S01:T02 – Ingest versioning findings from fynd.deals Epic 15 work** - TODO\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "rw-perspective-5",
      children: "RW Perspective"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "RW Step 1: Branch Safety Check"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Validates branch: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "epic/3-numbering-and-versioning-framework"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "CRITICAL:"
        }), " Validates ", (0,jsx_runtime.jsx)(_components.code, {
          children: "VERSION_TASK"
        }), " in ", (0,jsx_runtime.jsx)(_components.code, {
          children: "version.py"
        }), " matches active Task in Story document"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If mismatch detected: RW stops with clear error message"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "RW Step 2: Bump Version"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "CRITICAL:"
        }), " RW Step 2 detects task transition automatically"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Compares ", (0,jsx_runtime.jsx)(_components.code, {
          children: "VERSION_TASK"
        }), " in ", (0,jsx_runtime.jsx)(_components.code, {
          children: "version.py"
        }), " (currently 1) with active Task in Story document (Task 2)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Automatically updates"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "VERSION_TASK"
        }), " to 2"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Automatically resets"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "VERSION_BUILD"
        }), " to 1"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "This ensures correct version progression"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "RW Step 3: Create Detailed Changelog"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Creates: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "CHANGELOG_v0.3.1.2+1.md"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Includes Task 1 completion context"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Includes Task 2 start context"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "RW Step 6: Auto-update Kanban Docs"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Updates Story document with Task 1 completion marker: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "✅ COMPLETE (v0.3.1.1+3)"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Updates Story document with Task 2 start marker"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "common-mistakes-to-avoid",
      children: "Common Mistakes to Avoid"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["❌ ", (0,jsx_runtime.jsxs)(_components.strong, {
        children: ["Manually updating ", (0,jsx_runtime.jsx)(_components.code, {
          children: "VERSION_TASK"
        }), " without RW detection"]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Let RW handle task transitions automatically"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["❌ ", (0,jsx_runtime.jsxs)(_components.strong, {
        children: ["Forgetting to reset ", (0,jsx_runtime.jsx)(_components.code, {
          children: "VERSION_BUILD"
        }), " to 1"]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "RW automatically resets BUILD when TASK changes"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["❌ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Starting new task with same BUILD number"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "BUILD must reset to 1 for new task"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "real-dev-kit-example-5",
      children: "Real Dev-Kit Example"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Epic 1 Story 3 Task Transitions:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Task 1: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "0.1.3.1+1"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Task 2: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "0.1.3.2+1"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Task 3: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "0.1.3.3+1"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Task 4: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "0.1.3.4+1"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Task 5: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "0.1.3.5+1"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Task 6: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "0.1.3.6+1"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["See: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/changelog-and-release-notes/changelog-archive/CHANGELOG_v0.1.3.2+1.md"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "7-story-completion",
      children: "7. Story Completion"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "scenario-6",
      children: "Scenario"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Completing all tasks in a story, marking the story as complete."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Example:"
      }), " Completing Story 1 in Epic 3 after Tasks 1-6 are all complete."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "worked-example-5",
      children: "Worked Example"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Before:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Last version: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "0.3.1.6+1"
        }), " (Epic 3, Story 1, Task 6, Build 1)"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "All tasks in Story 1 are COMPLETE"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "After:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Story 1 marked COMPLETE"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Next story (if exists): ", (0,jsx_runtime.jsx)(_components.code, {
          children: "0.3.2.1+1"
        }), " (Epic 3, Story 2, Task 1, Build 1)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "version-file-update-6",
      children: "Version File Update"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "For Story Completion:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["No version change needed (last task version remains: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "0.3.1.6+1"
        }), ")"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "For Next Story:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "VERSION_RC = 0\nVERSION_EPIC = 3       # Unchanged\nVERSION_STORY = 2      # Increment to next story\nVERSION_TASK = 1       # Reset to first task\nVERSION_BUILD = 1      # Reset to first build\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "kanban-context-6",
      children: "Kanban Context"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Epic Document:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "docs/project-management/kanban/epics/epic-03/epic-03.md"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-markdown",
        children: "## Story Checklist\n- [x] **E3:S01 – Dev Kit Alignment with Versioning Framework** - COMPLETE ✅ (v0.3.1.6+1)\n- [x] **E3:S02 – Versioning Cookbook & Examples** - COMPLETE ✅ (v0.3.2.5+3)\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Story Document:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "docs/project-management/kanban/epics/epic-03/story-01-*.md"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-markdown",
        children: "**Status:** COMPLETE ✅\n**Completed:** 2025-12-02 (v0.3.1.6+1)\n\n## Task Checklist\n- [x] **E3:S01:T01** ✅ COMPLETE (v0.3.1.1+2)\n- [x] **E3:S01:T02** ✅ COMPLETE (v0.3.1.2+1)\n- [x] **E3:S01:T03** ✅ COMPLETE (v0.3.1.3+1)\n- [x] **E3:S01:T04** ✅ COMPLETE (v0.3.1.4+1)\n- [x] **E3:S01:T05** ✅ COMPLETE (v0.3.1.5+1)\n- [x] **E3:S01:T06** ✅ COMPLETE (v0.3.1.6+1)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "rw-perspective-6",
      children: "RW Perspective"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "RW Step 6: Auto-update Kanban Docs"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Updates Story document with COMPLETE status"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Updates Epic document with story completion marker: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "✅ COMPLETE (v0.3.1.6+1)"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Updates Kanban board"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "When Starting Next Story:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "RW handles story transition (see Scenario 2)"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Version updates to ", (0,jsx_runtime.jsx)(_components.code, {
          children: "0.3.2.1+1"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "real-dev-kit-example-6",
      children: "Real Dev-Kit Example"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Epic 1 Story Completion:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Story 1: Completed at ", (0,jsx_runtime.jsx)(_components.code, {
          children: "v0.1.1.1+2"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Story 2: Completed at ", (0,jsx_runtime.jsx)(_components.code, {
          children: "v0.1.2.5+1"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Story 3: Completed at ", (0,jsx_runtime.jsx)(_components.code, {
          children: "v0.1.3.6+1"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["See: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/project-management/kanban/epics/epic-01/epic-01.md"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "8-epic-completion",
      children: "8. Epic Completion"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "scenario-7",
      children: "Scenario"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Completing all stories in an epic, marking the epic as complete."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Example:"
      }), " Completing Epic 4 after Stories 1-3 are all complete."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "worked-example-6",
      children: "Worked Example"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Before:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Last version: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "0.4.3.7+1"
        }), " (Epic 4, Story 3, Task 7, Build 1)"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "All stories in Epic 4 are COMPLETE"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "After:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Epic 4 marked COMPLETE"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Next epic (if exists): ", (0,jsx_runtime.jsx)(_components.code, {
          children: "0.5.1.1+1"
        }), " (Epic 5, Story 1, Task 1, Build 1)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "version-file-update-7",
      children: "Version File Update"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "For Epic Completion:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["No version change needed (last story version remains: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "0.4.3.7+1"
        }), ")"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "For Next Epic:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "VERSION_RC = 0\nVERSION_EPIC = 5      # Increment to next epic\nVERSION_STORY = 1     # Reset to first story\nVERSION_TASK = 1      # Reset to first task\nVERSION_BUILD = 1     # Reset to first build\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "kanban-context-7",
      children: "Kanban Context"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Epic Document:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "docs/project-management/kanban/epics/epic-04/epic-04.md"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-markdown",
        children: "**Status:** COMPLETE ✅\n**Completed:** 2025-12-02 (v0.4.3.7+1)\n\n## Story Checklist\n- [x] **E4:S01 – Dev Kit Kanban Implementation** - COMPLETE ✅ (v0.4.1.1+6)\n- [x] **E4:S02 – FR/BR Intake to Tasks** - COMPLETE ✅ (v0.4.2.5+1)\n- [x] **E4:S03 – Kanban + Versioning + RW Integration** - COMPLETE ✅ (v0.4.3.7+1)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Kanban Board:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-markdown",
        children: "### Epic 4: Kanban Framework\n**Status:** COMPLETE ✅\n**Last Updated:** v0.4.3.7+1\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "rw-perspective-7",
      children: "RW Perspective"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "RW Step 6: Auto-update Kanban Docs"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Updates Epic document with COMPLETE status"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Updates Kanban board with epic completion marker"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "All stories remain marked COMPLETE"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "When Starting Next Epic:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "RW handles epic transition (see Scenario 1)"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Version updates to ", (0,jsx_runtime.jsx)(_components.code, {
          children: "0.5.1.1+1"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "real-dev-kit-example-7",
      children: "Real Dev-Kit Example"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Epic 4 Completion:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Epic 4: Completed at ", (0,jsx_runtime.jsx)(_components.code, {
          children: "v0.4.3.7+1"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "All 3 stories completed"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["See: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/project-management/kanban/epics/epic-04/epic-04.md"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "9-cross-framework-examples",
      children: "9. Cross-Framework Examples"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["This section demonstrates ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "end-to-end flows"
      }), " that tie together Kanban, Versioning, and Release Workflow. These examples show how the three frameworks work together in practice."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-1-fr--task--version--rw--kanban-update",
      children: "Example 1: FR → Task → Version → RW → Kanban Update"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Scenario:"
      }), " A Feature Request arrives and flows through the complete system from intake to release."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "step-1-receive-feature-request",
      children: "Step 1: Receive Feature Request"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "FR Document:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "docs/project-management/kanban/fr-br/FR-001-add-validation-script.md"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-markdown",
        children: "# Feature Request: Add Kanban Consistency Validation Script\n\n**Summary:** Add validation script to check Kanban document consistency\n**Priority:** HIGH\n**Scope:** Epic 4 (Kanban Framework)\n**Status:** Received\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "step-2-intake-decision-fr--task",
      children: "Step 2: Intake Decision (FR → Task)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Process:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Search Epic 4 stories for matching scope"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Found: Story 3 (Kanban + Versioning + RW Integration) - matches scope"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Decision: Create Task under Story 3"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Task Created:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Task: E4:S03", ":T08", " – Add Kanban consistency validation script"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Added to ", (0,jsx_runtime.jsx)(_components.code, {
          children: "story-03-kanban-versioning-rw-integration.md"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Task status: TODO"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "step-3-assign-version-number",
      children: "Step 3: Assign Version Number"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Current Version:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "0.4.3.5+1"
      }), " (Task 5)\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "New Task:"
      }), " Task 8"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsxs)(_components.strong, {
        children: ["Version File Update (", (0,jsx_runtime.jsx)(_components.code, {
          children: "version.py"
        }), "):"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "VERSION_RC = 0\nVERSION_EPIC = 4       # Unchanged (Epic 4)\nVERSION_STORY = 3      # Unchanged (Story 3)\nVERSION_TASK = 8      # NEW: Task 8\nVERSION_BUILD = 1     # Reset to 1 for new Task\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Expected Version:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "0.4.3.8+1"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "step-4-complete-work",
      children: "Step 4: Complete Work"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Work Completed:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Created validation script: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "scripts/validation/validate_kanban_consistency.py"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Tested script"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Work ready for release"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "step-5-trigger-release-workflow",
      children: "Step 5: Trigger Release Workflow"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Developer types:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "RW"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "RW Step 1: Branch Safety Check"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["✅ Branch: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "epic/4-kanban-framework"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["✅ Version ", (0,jsx_runtime.jsx)(_components.code, {
          children: "0.4.3.8+1"
        }), " matches Epic 4"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["✅ ", (0,jsx_runtime.jsx)(_components.code, {
          children: "VERSION_TASK"
        }), " (8) matches active Task in Story document"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "RW Step 2: Bump Version"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Detects task transition (Task 5 → Task 8)"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["✅ Confirms ", (0,jsx_runtime.jsx)(_components.code, {
          children: "VERSION_TASK"
        }), " updated to 8"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["✅ Confirms ", (0,jsx_runtime.jsx)(_components.code, {
          children: "VERSION_BUILD"
        }), " reset to 1"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["✅ Version: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "0.4.3.8+1"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "RW Step 3: Create Detailed Changelog"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["✅ Creates: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/changelog-and-release-notes/changelog-archive/CHANGELOG_v0.4.3.8+1.md"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Includes Epic 4, Story 3, Task 8 context"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["✅ Includes full timestamp: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "2025-12-02 18:00:00 UTC"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "RW Step 4: Update Main Changelog"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["✅ Adds entry: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "## [0.4.3.8+1] - 02-12-25"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Includes summary and link to detailed changelog"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "RW Step 5: Update README"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Updates version badge (if applicable)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Updates latest release callout"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "RW Step 6: Auto-update Kanban Docs"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["✅ Updates ", (0,jsx_runtime.jsx)(_components.code, {
          children: "epic-04.md"
        }), ":", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "**Last updated:** 2025-12-02 (v0.4.3.8+1 – Task 8 complete: Add Kanban consistency validation script)"
            })
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Story Checklist: ", (0,jsx_runtime.jsx)(_components.code, {
              children: "- [x] **E4:S03 – ...** - COMPLETE ✅ (v0.4.3.7+1)"
            })]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["✅ Updates ", (0,jsx_runtime.jsx)(_components.code, {
          children: "story-03-kanban-versioning-rw-integration.md"
        }), ":", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "**Last updated:** 2025-12-02 (v0.4.3.8+1)"
            })
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "**Version:** v0.4.3.8+1"
            })
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Task Checklist: ", (0,jsx_runtime.jsx)(_components.code, {
              children: "- [x] **E4:S03:T08 – Add Kanban consistency validation script** ✅ COMPLETE (v0.4.3.8+1)"
            })]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Task section: ", (0,jsx_runtime.jsx)(_components.code, {
              children: "**Status:** ✅ **COMPLETE** (v0.4.3.8+1)"
            })]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "RW Steps 7-11: Git Operations"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Stage files"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Run validators"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["✅ Commit: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Release v0.4.3.8+1: Task 8 complete - Add Kanban consistency validation script"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["✅ Tag: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "v0.4.3.8+1"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Push to remote"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "result",
      children: "Result"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Complete Traceability:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["FR → Task (E4:S03", ":T08", ")"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Task → Version (", (0,jsx_runtime.jsx)(_components.code, {
          children: "0.4.3.8+1"
        }), ")"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Version → Changelog (", (0,jsx_runtime.jsx)(_components.code, {
          children: "CHANGELOG_v0.4.3.8+1.md"
        }), ")"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Version → Kanban markers (", (0,jsx_runtime.jsx)(_components.code, {
          children: "✅ COMPLETE (v0.4.3.8+1)"
        }), ")"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Version → Git tag (", (0,jsx_runtime.jsx)(_components.code, {
          children: "v0.4.3.8+1"
        }), ")"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "All Systems Updated:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Kanban: Task marked complete with forensic marker"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Versioning: Version file updated, changelog created"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ RW: All 11 steps executed successfully"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Git: Committed and tagged"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-2-bugfix-with-verification-requirement",
      children: "Example 2: Bugfix with Verification Requirement"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Scenario:"
      }), " A bug is discovered in a completed task, requiring fix verification before marking as \"Fixed\"."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "step-1-discover-bug",
      children: "Step 1: Discover Bug"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Bug Context:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Task: E4:S03", ":T02", " – Validate Kanban → Versioning integration"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Completed version: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "v0.4.3.2+1"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Bug: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "VERSION_TASK"
        }), " not correctly updated during task transitions"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "step-2-create-bugfix-task",
      children: "Step 2: Create Bugfix Task"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Task Created:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Task: E4:S03", ":T02", " (bugfix) – Fix Task → version TASK component mapping"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Same task number (bugfix on existing task)"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Version: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "0.4.3.2+2"
        }), " (BUILD increments)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "step-3-implement-fix",
      children: "Step 3: Implement Fix"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Fix Implemented:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Updated RW Step 2 to detect task transitions"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Updated RW Step 2 to automatically update ", (0,jsx_runtime.jsx)(_components.code, {
          children: "VERSION_TASK"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Updated RW Step 2 to reset ", (0,jsx_runtime.jsx)(_components.code, {
          children: "VERSION_BUILD"
        }), " to 1"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Fix NOT yet verified"
        }), " (no tests run yet)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "step-4-trigger-release-workflow",
      children: "Step 4: Trigger Release Workflow"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Developer types:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "RW"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "RW Step 1: Branch Safety Check"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["✅ Branch: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "epic/4-kanban-framework"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["✅ Version ", (0,jsx_runtime.jsx)(_components.code, {
          children: "0.4.3.2+2"
        }), " matches Epic 4, Story 3, Task 2"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "RW Step 2: Bump Version"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Same task (TASK=2 unchanged)"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["✅ Increments BUILD: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "0.4.3.2+1"
        }), " → ", (0,jsx_runtime.jsx)(_components.code, {
          children: "0.4.3.2+2"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "RW Step 3: Create Detailed Changelog"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["✅ Creates: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "CHANGELOG_v0.4.3.2+2.md"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["✅ ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "CRITICAL:"
        }), " RW Step 3 checks fix verification status"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["✅ Fix is ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "unverified"
        }), " (no tests run)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["✅ Changelog format:", "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-markdown",
            children: "### Attempted Fixes\n- Attempted fix: Task → version TASK component mapping (verification pending)\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["✅ RW ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "does not"
        }), " mark as \"Fixed\" (verification required)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "RW Step 4: Update Main Changelog"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Adds entry with \"Attempted Fixes\" section"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Does not add to \"Fixed\" section"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "RW Step 6: Auto-update Kanban Docs"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Updates Story document with bugfix context"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Includes verification status: \"verification pending\""
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "step-5-verify-fix",
      children: "Step 5: Verify Fix"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Verification Process:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Run test suite: ✅ PASS"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Manual verification: ✅ PASS"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Fix verified"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "step-6-update-changelog-post-verification",
      children: "Step 6: Update Changelog (Post-Verification)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Option A: Create New Release"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["New version: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "0.4.3.2+3"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Changelog: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "### Fixed"
        }), " section with verified fix"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Option B: Update Existing Release"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Update ", (0,jsx_runtime.jsx)(_components.code, {
          children: "CHANGELOG_v0.4.3.2+2.md"
        }), ":", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Move from \"Attempted Fixes\" to \"Fixed\""
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Add verification timestamp"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Note: This requires manual update (RW doesn't retroactively update)"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "result-1",
      children: "Result"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Verification Workflow:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Unverified fixes logged as \"Attempted Fixes\""
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Verified fixes logged as \"Fixed\""
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Clear distinction between attempted and verified fixes"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Prevents false \"Fixed\" claims"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Real Dev-Kit Example:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["See: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/changelog-and-release-notes/changelog-archive/CHANGELOG_v0.4.3.2+2.md"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Bugfix: Task → version TASK component mapping"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Verification: Root cause analysis and documentation updates completed"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-3-parallel-epicstory-work",
      children: "Example 3: Parallel Epic/Story Work"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Scenario:"
      }), " Working on multiple epics simultaneously, with work merged out of chronological order."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "context",
      children: "Context"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsxs)(_components.strong, {
        children: ["Epic 3 Branch (", (0,jsx_runtime.jsx)(_components.code, {
          children: "epic/3-*"
        }), "):"]
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Work: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "0.3.1.1+1"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "0.3.1.2+1"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "0.3.2.1+1"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Merged to ", (0,jsx_runtime.jsx)(_components.code, {
          children: "main"
        }), " on 2025-12-03"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsxs)(_components.strong, {
        children: ["Epic 4 Branch (", (0,jsx_runtime.jsx)(_components.code, {
          children: "epic/4-*"
        }), "):"]
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Work: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "0.4.1.1+1"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "0.4.2.1+1"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "0.4.3.1+1"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Merged to ", (0,jsx_runtime.jsx)(_components.code, {
          children: "main"
        }), " on 2025-12-02 (earlier than Epic 3)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "kanban-state",
      children: "Kanban State"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Epic 3:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Story 1: IN PROGRESS (Tasks 1-2 complete)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Story 2: IN PROGRESS (Task 1 complete)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Epic 4:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Story 1: COMPLETE ✅"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Story 2: COMPLETE ✅"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Story 3: IN PROGRESS (Task 1 complete)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "version-file-states",
      children: "Version File States"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "On Epic 3 Branch:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "VERSION_RC = 0\nVERSION_EPIC = 3\nVERSION_STORY = 2\nVERSION_TASK = 1\nVERSION_BUILD = 1\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "On Epic 4 Branch:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "VERSION_RC = 0\nVERSION_EPIC = 4\nVERSION_STORY = 3\nVERSION_TASK = 1\nVERSION_BUILD = 1\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "rw-execution-parallel",
      children: "RW Execution (Parallel)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsxs)(_components.strong, {
        children: ["Epic 3 RW (on ", (0,jsx_runtime.jsx)(_components.code, {
          children: "epic/3-*"
        }), " branch):"]
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["✅ Step 1: Validates branch ", (0,jsx_runtime.jsx)(_components.code, {
          children: "epic/3-*"
        }), " matches version ", (0,jsx_runtime.jsx)(_components.code, {
          children: "0.3.2.1+1"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Step 2: Bumps version (if needed)"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["✅ Step 3: Creates ", (0,jsx_runtime.jsx)(_components.code, {
          children: "CHANGELOG_v0.3.2.1+1.md"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Step 6: Updates epic-03.md and story-02-*.md"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsxs)(_components.strong, {
        children: ["Epic 4 RW (on ", (0,jsx_runtime.jsx)(_components.code, {
          children: "epic/4-*"
        }), " branch):"]
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["✅ Step 1: Validates branch ", (0,jsx_runtime.jsx)(_components.code, {
          children: "epic/4-*"
        }), " matches version ", (0,jsx_runtime.jsx)(_components.code, {
          children: "0.4.3.1+1"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Step 2: Bumps version (if needed)"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["✅ Step 3: Creates ", (0,jsx_runtime.jsx)(_components.code, {
          children: "CHANGELOG_v0.4.3.1+1.md"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Step 6: Updates epic-04.md and story-03-*.md"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "No Conflicts:"
      }), " Each epic maintains independent version stream"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "changelog-ordering-canonical",
      children: "Changelog Ordering (Canonical)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsxs)(_components.strong, {
        children: ["Main Changelog (", (0,jsx_runtime.jsx)(_components.code, {
          children: "CHANGELOG.md"
        }), "):"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-markdown",
        children: "## [0.3.1.1+1] - 03-12-25    # Epic 3, Story 1, Task 1\n## [0.3.1.2+1] - 03-12-25    # Epic 3, Story 1, Task 2\n## [0.4.1.1+1] - 02-12-25    # Epic 4, Story 1, Task 1 (merged earlier, but ordered correctly)\n## [0.4.2.1+1] - 02-12-25    # Epic 4, Story 2, Task 1\n## [0.4.3.1+1] - 02-12-25    # Epic 4, Story 3, Task 1\n## [0.3.2.1+1] - 03-12-25    # Epic 3, Story 2, Task 1 (merged later, but ordered correctly)\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Key Point:"
      }), " Versions ordered ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "canonically by version number"
      }), ", not by commit timestamp."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "result-2",
      children: "Result"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Parallel Development Supported:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Each epic maintains independent version stream"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ No version conflicts between epics"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Changelog ordering is canonical (by version number)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Git history reflects actual commit order"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Kanban board shows all epics in parallel"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Real Dev-Kit Example:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Epic 1: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "0.1.1.1+1"
        }), " → ", (0,jsx_runtime.jsx)(_components.code, {
          children: "0.1.3.6+1"
        }), " (completed)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Epic 2: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "0.2.1.1+2"
        }), " → ", (0,jsx_runtime.jsx)(_components.code, {
          children: "0.2.1.1+5"
        }), " (completed)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Epic 3: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "0.3.1.1+1"
        }), " → ", (0,jsx_runtime.jsx)(_components.code, {
          children: "0.3.2.2+1"
        }), " (in progress)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Epic 4: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "0.4.1.1+1"
        }), " → ", (0,jsx_runtime.jsx)(_components.code, {
          children: "0.4.3.7+1"
        }), " (completed)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["See: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "CHANGELOG.md"
        }), " for canonical ordering"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "10-edge-cases-and-anti-patterns",
      children: "10. Edge Cases and Anti-Patterns"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["This section documents known edge cases, common mistakes, and anti-patterns when using the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "RC.EPIC.STORY.TASK+BUILD"
      }), " versioning schema. Each entry includes symptoms, root causes, corrective patterns, and preventive guidance."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "101-anti-pattern-build-incremented-instead-of-task",
      children: "10.1 Anti-Pattern: BUILD Incremented Instead of TASK"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Symptom:"
      }), " When completing a new Task, BUILD is incremented instead of TASK, resulting in multiple Tasks sharing the same TASK number."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["❌ ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Wrong:"
        }), " E2:S01", ":T02", " completed → ", (0,jsx_runtime.jsx)(_components.code, {
          children: "0.2.1.1+2"
        }), " (BUILD incremented, TASK unchanged)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["✅ ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Correct:"
        }), " E2:S01", ":T02", " completed → ", (0,jsx_runtime.jsx)(_components.code, {
          children: "0.2.1.2+1"
        }), " (TASK incremented to 2, BUILD reset to 1)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Root Cause:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "RW Step 2 doesn't explicitly detect Task transitions"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "No mandatory check to read Story file and identify completed Task number"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Default behavior increments BUILD without checking if Task changed"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["No validation that ", (0,jsx_runtime.jsx)(_components.code, {
          children: "VERSION_TASK"
        }), " matches completed Task"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Corrective Pattern:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Read Story file to identify completed Task number"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Extract Task number from task identifier (", (0,jsx_runtime.jsx)(_components.code, {
          children: "E\\{epic\\}:S\\{story\\}:T\\{task\\}"
        }), ")"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Compare completed Task number to current ", (0,jsx_runtime.jsx)(_components.code, {
          children: "VERSION_TASK"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["If Task number > current ", (0,jsx_runtime.jsx)(_components.code, {
          children: "VERSION_TASK"
        }), ": Update ", (0,jsx_runtime.jsx)(_components.code, {
          children: "VERSION_TASK"
        }), " and reset ", (0,jsx_runtime.jsx)(_components.code, {
          children: "VERSION_BUILD"
        }), " to 1"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["If Task number == current ", (0,jsx_runtime.jsx)(_components.code, {
          children: "VERSION_TASK"
        }), ": Increment ", (0,jsx_runtime.jsx)(_components.code, {
          children: "VERSION_BUILD"
        }), " only"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Validate before and after updating"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Preventive Guidance:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["✅ ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "MANDATORY:"
        }), " RW Step 2 MUST read Story file to identify completed Task"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["✅ ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "MANDATORY:"
        }), " RW Step 2 MUST compare Task numbers before updating"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["✅ ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "MANDATORY:"
        }), " RW Step 2 MUST validate ", (0,jsx_runtime.jsx)(_components.code, {
          children: "VERSION_TASK"
        }), " matches completed Task"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["❌ ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "NEVER:"
        }), " Skip Task identification step"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["❌ ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "NEVER:"
        }), " Assume same Task without checking"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Reference:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "docs/architecture/standards-and-adrs/versioning-error-reference-guide.md"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "102-edge-case-task-renumbering",
      children: "10.2 Edge Case: Task Renumbering"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Symptom:"
      }), " Tasks are renumbered after work has been completed and released, creating version conflicts."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Original: E3:S02", ":T01", ", T02, T03 released as ", (0,jsx_runtime.jsx)(_components.code, {
          children: "0.3.2.1+1"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "0.3.2.2+1"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "0.3.2.3+1"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Renumbered: T02 becomes T01, T03 becomes T02"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Problem: New T01 conflicts with old T01 version"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Root Cause:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Story structure reorganized after work completed"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Tasks merged or split"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Manual renumbering without version migration"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Corrective Pattern:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Option A: Keep Original Versions (Recommended)"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Don't renumber completed Tasks"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Create new Tasks with new numbers"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Document mapping: \"Original T02 is now T05\""
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Option B: Version Migration (Complex)"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Create migration document mapping old → new versions"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Update all references (changelogs, commits, tags)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Update Kanban docs with version mappings"
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Warning:"
            }), " This is complex and error-prone"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Preventive Guidance:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["✅ ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "BEST PRACTICE:"
        }), " Finalize Task numbering before starting work"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["✅ ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "BEST PRACTICE:"
        }), " If renumbering needed, do it before first release"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["✅ ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "BEST PRACTICE:"
        }), " Document any renumbering in Story notes"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["❌ ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "AVOID:"
        }), " Renumbering Tasks after releases"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["❌ ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "AVOID:"
        }), " Merging/splitting Tasks after work started"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "103-edge-case-story-re-parenting-between-epics",
      children: "10.3 Edge Case: Story Re-Parenting Between Epics"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Symptom:"
      }), " A Story is moved from one Epic to another after work has been completed, creating version conflicts."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Original: Story 5 in Epic 3, released as ", (0,jsx_runtime.jsx)(_components.code, {
          children: "0.3.5.1+1"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Re-parented: Story 5 moved to Epic 4, becomes Story 1 in Epic 4"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Problem: Version ", (0,jsx_runtime.jsx)(_components.code, {
          children: "0.3.5.1+1"
        }), " exists but Story is now in Epic 4"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Root Cause:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Epic structure reorganized"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Story scope changed"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Manual re-parenting without version migration"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Corrective Pattern:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Option A: Keep Original Versions (Recommended)"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Don't re-parent Stories after releases"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Create new Story in target Epic"
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Document mapping: \"Original E3", ":S05", " is now E4", ":S01", "\""]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Option B: Version Migration (Complex)"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Create migration document mapping old → new versions"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Update all references (changelogs, commits, tags)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Update Kanban docs with version mappings"
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Warning:"
            }), " This is complex and error-prone"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Preventive Guidance:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["✅ ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "BEST PRACTICE:"
        }), " Finalize Epic/Story structure before starting work"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["✅ ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "BEST PRACTICE:"
        }), " If re-parenting needed, do it before first release"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["✅ ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "BEST PRACTICE:"
        }), " Document any re-parenting in Epic notes"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["❌ ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "AVOID:"
        }), " Re-parenting Stories after releases"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["❌ ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "AVOID:"
        }), " Moving Stories between Epics after work started"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "104-edge-case-version-conflicts-when-branches-diverge",
      children: "10.4 Edge Case: Version Conflicts When Branches Diverge"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Symptom:"
      }), " Parallel development on different branches results in same version number being used for different work."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Branch A: Epic 3, Story 2, Task 1 → ", (0,jsx_runtime.jsx)(_components.code, {
          children: "0.3.2.1+1"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Branch B: Epic 3, Story 2, Task 1 → ", (0,jsx_runtime.jsx)(_components.code, {
          children: "0.3.2.1+1"
        }), " (conflict!)"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Problem: Both branches use same version number"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Root Cause:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Parallel work on same Epic/Story/Task"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "No coordination between branches"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Version assigned before branch merge"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Corrective Pattern:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Option A: Sequential Task Numbers (Recommended)"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Coordinate Task numbering across branches"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Use different Task numbers for parallel work"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Example: Branch A uses T01, Branch B uses T02"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Option B: Merge Before Release"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Merge branches before releasing"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Assign versions after merge"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Resolve conflicts before version assignment"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Option C: Branch-Specific Versions (Not Recommended)"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Use branch identifier in version (e.g., ", (0,jsx_runtime.jsx)(_components.code, {
              children: "0.3.2.1+1-branch-a"
            }), ")"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Warning:"
            }), " This breaks version schema and traceability"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Preventive Guidance:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["✅ ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "BEST PRACTICE:"
        }), " Coordinate Task numbering before starting parallel work"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["✅ ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "BEST PRACTICE:"
        }), " Use different Task numbers for parallel work on same Story"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["✅ ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "BEST PRACTICE:"
        }), " Merge branches before releasing"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["❌ ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "AVOID:"
        }), " Parallel work on same Task number"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["❌ ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "AVOID:"
        }), " Assigning versions before branch merge"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "105-edge-case-incorrect-task-mapping-in-version-file",
      children: "10.5 Edge Case: Incorrect TASK Mapping in Version File"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Symptom:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "VERSION_TASK"
      }), " in ", (0,jsx_runtime.jsx)(_components.code, {
        children: "version.py"
      }), " doesn't match the active Task number from Kanban."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Kanban: Active Task is E2:S04", ":T09"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Version File: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "VERSION_TASK = 1"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Problem: Version file shows wrong Task number"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Root Cause:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "VERSION_TASK"
        }), " not updated when starting new Task"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Manual update forgotten"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "No validation to catch mismatch"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Corrective Pattern:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Read Story file to identify active Task number"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Compare active Task number to ", (0,jsx_runtime.jsx)(_components.code, {
          children: "VERSION_TASK"
        }), " in ", (0,jsx_runtime.jsx)(_components.code, {
          children: "version.py"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["If mismatch: Update ", (0,jsx_runtime.jsx)(_components.code, {
          children: "VERSION_TASK"
        }), " to match active Task"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Update ", (0,jsx_runtime.jsx)(_components.code, {
          children: "VERSION_BUILD"
        }), " to 1 (new Task)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Validate: Re-read ", (0,jsx_runtime.jsx)(_components.code, {
          children: "version.py"
        }), " to confirm update"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Preventive Guidance:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["✅ ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "MANDATORY:"
        }), " RW Step 1 MUST validate ", (0,jsx_runtime.jsx)(_components.code, {
          children: "VERSION_TASK"
        }), " matches active Task"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["✅ ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "MANDATORY:"
        }), " RW Step 2 MUST update ", (0,jsx_runtime.jsx)(_components.code, {
          children: "VERSION_TASK"
        }), " when Task transition detected"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["✅ ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "BEST PRACTICE:"
        }), " Update ", (0,jsx_runtime.jsx)(_components.code, {
          children: "version.py"
        }), " when creating new Task (intake process)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["❌ ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "NEVER:"
        }), " Skip Task/version validation"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["❌ ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "NEVER:"
        }), " Assume ", (0,jsx_runtime.jsx)(_components.code, {
          children: "VERSION_TASK"
        }), " is correct without checking"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Reference:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "docs/project-management/kanban/epics/epic-04/story-03-kanban-versioning-rw-integration/T02-root-cause-analysis.md"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "106-anti-pattern-using-standalone-task-references",
      children: "10.6 Anti-Pattern: Using Standalone Task References"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Symptom:"
      }), " Task references use standalone format (", (0,jsx_runtime.jsx)(_components.code, {
        children: "T01"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "T001"
      }), ") instead of full format (", (0,jsx_runtime.jsx)(_components.code, {
        children: "E1:S01:T01"
      }), ")."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["❌ ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Wrong:"
        }), " \"Completed T01\" or \"Task T001\""]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["✅ ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Correct:"
        }), " \"Completed E1:S01", ":T01", "\" or \"Task E1:S01", ":T01", "\""]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Root Cause:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Legacy format from 3-digit task numbering"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Templates not updated"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Documentation examples use old format"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Corrective Pattern:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Always use full ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Exx:Sxx:Txx"
        }), " format"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update all references in documentation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update templates to use full format"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update examples to show full format"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Preventive Guidance:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["✅ ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "MANDATORY:"
        }), " Always use full ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Exx:Sxx:Txx"
        }), " format"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["✅ ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "MANDATORY:"
        }), " Templates must use full format"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["✅ ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "BEST PRACTICE:"
        }), " Examples must show full format"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["❌ ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "NEVER:"
        }), " Use standalone ", (0,jsx_runtime.jsx)(_components.code, {
          children: "T01"
        }), " or ", (0,jsx_runtime.jsx)(_components.code, {
          children: "T001"
        }), " format"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["❌ ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "NEVER:"
        }), " Assume context from surrounding text"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Reference:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "docs/architecture/standards-and-adrs/task-naming-migration-guide.md"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "107-edge-case-build-number-overflow",
      children: "10.7 Edge Case: BUILD Number Overflow"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Symptom:"
      }), " BUILD number exceeds reasonable range (e.g., ", (0,jsx_runtime.jsx)(_components.code, {
        children: "0.2.4.9+99"
      }), ") due to many releases within same Task."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Task E2:S04", ":T09", " has 99 builds: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "0.2.4.9+1"
        }), " through ", (0,jsx_runtime.jsx)(_components.code, {
          children: "0.2.4.9+99"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Next build would be ", (0,jsx_runtime.jsx)(_components.code, {
          children: "0.2.4.9+100"
        }), " (still valid but unusual)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Root Cause:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Many bugfixes/iterations within same Task"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Task scope too large"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "No Task completion criteria"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Corrective Pattern:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Option A: Split Task (Recommended)"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Break large Task into smaller Tasks"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Create new Task for remaining work"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Example: T09 → T09 (completed), T10 (new work)"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Option B: Complete Task and Create New"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Mark current Task as complete"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Create new Task for additional work"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Example: T09 complete, T10 for follow-up work"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Preventive Guidance:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["✅ ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "BEST PRACTICE:"
        }), " Keep Tasks small (1-3 days of work)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["✅ ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "BEST PRACTICE:"
        }), " Complete Tasks frequently"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["✅ ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "BEST PRACTICE:"
        }), " Split large Tasks before starting"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["❌ ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "AVOID:"
        }), " Tasks with 10+ builds"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["❌ ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "AVOID:"
        }), " Keeping Tasks open indefinitely"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "108-edge-case-missing-version-in-changelog",
      children: "10.8 Edge Case: Missing Version in Changelog"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Symptom:"
      }), " Changelog entry created but version number missing or incorrect."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Changelog shows: \"## [Unreleased] - Task completed\""
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Missing: Version number ", (0,jsx_runtime.jsx)(_components.code, {
          children: "0.2.4.9+3"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Root Cause:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Manual changelog update forgotten"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "RW Step 3/4 not executed"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Version number not extracted from ", (0,jsx_runtime.jsx)(_components.code, {
          children: "version.py"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Corrective Pattern:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Read ", (0,jsx_runtime.jsx)(_components.code, {
          children: "version.py"
        }), " to get current version"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update changelog with correct version number"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Verify version format: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "RC.EPIC.STORY.TASK+BUILD"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Validate changelog format matches policy"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Preventive Guidance:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["✅ ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "MANDATORY:"
        }), " RW Step 3 MUST create changelog with version number"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["✅ ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "MANDATORY:"
        }), " RW Step 4 MUST update main changelog with version number"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["✅ ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "BEST PRACTICE:"
        }), " Always read ", (0,jsx_runtime.jsx)(_components.code, {
          children: "version.py"
        }), " for version number"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["❌ ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "NEVER:"
        }), " Manually write version numbers without reading ", (0,jsx_runtime.jsx)(_components.code, {
          children: "version.py"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["❌ ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "NEVER:"
        }), " Skip changelog updates"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "109-anti-pattern-version-number-in-commit-message-doesnt-match-tag",
      children: "10.9 Anti-Pattern: Version Number in Commit Message Doesn't Match Tag"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Symptom:"
      }), " Commit message shows different version than Git tag."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Commit: \"Release v0.2.4.9+2: ...\""
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Tag: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "v0.2.4.9+3"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Problem: Mismatch between commit message and tag"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Root Cause:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Version bumped after commit"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Tag created with different version"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Manual tag creation error"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Corrective Pattern:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Read ", (0,jsx_runtime.jsx)(_components.code, {
          children: "version.py"
        }), " to get current version"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use same version in commit message and tag"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Verify: Commit message version == Tag version == ", (0,jsx_runtime.jsx)(_components.code, {
          children: "version.py"
        }), " version"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If mismatch: Create new commit or update tag"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Preventive Guidance:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["✅ ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "MANDATORY:"
        }), " RW Step 9 MUST use version from ", (0,jsx_runtime.jsx)(_components.code, {
          children: "version.py"
        }), " in commit message"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["✅ ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "MANDATORY:"
        }), " RW Step 10 MUST use same version for tag"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["✅ ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "BEST PRACTICE:"
        }), " Always read ", (0,jsx_runtime.jsx)(_components.code, {
          children: "version.py"
        }), " for version number"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["❌ ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "NEVER:"
        }), " Use different versions in commit and tag"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["❌ ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "NEVER:"
        }), " Manually create tags without reading ", (0,jsx_runtime.jsx)(_components.code, {
          children: "version.py"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1010-edge-case-parallel-epic-development-version-ordering",
      children: "10.10 Edge Case: Parallel Epic Development Version Ordering"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Symptom:"
      }), " Changelog entries appear out of chronological order due to parallel epic development."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Epic 3: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "0.3.1.1+1"
        }), " (released 2025-12-03)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Epic 4: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "0.4.1.1+1"
        }), " (released 2025-12-02, merged earlier)"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Changelog shows Epic 4 before Epic 3 (canonical ordering)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Root Cause:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Parallel epic development"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Different merge times"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Canonical ordering by version number, not timestamp"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Corrective Pattern:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "This is Expected Behavior (Not an Error)"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Changelog uses canonical ordering (by version number)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Git history shows chronological order"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Both are correct for different purposes"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "If Chronological Order Needed:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Use Git log: ", (0,jsx_runtime.jsx)(_components.code, {
              children: "git log --oneline --date-order"
            })]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Use detailed changelog archive (includes timestamps)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Don't change main changelog ordering"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Preventive Guidance:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["✅ ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "UNDERSTAND:"
        }), " Changelog uses canonical ordering (by version number)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["✅ ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "UNDERSTAND:"
        }), " Git history shows chronological order"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["✅ ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "BEST PRACTICE:"
        }), " Use detailed changelog archive for timestamps"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["❌ ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "DON'T:"
        }), " Change main changelog to chronological order"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["❌ ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "DON'T:"
        }), " Expect changelog to match Git commit order"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1011-edge-case-out-of-order-task-completion",
      children: "10.11 Edge Case: Out-of-Order Task Completion"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Symptom:"
      }), " A task with a lower number is completed after a task with a higher number has already been released."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Task 6 completed first: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "0.3.2.6+1"
        }), " (released 2025-12-04)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Task 5 completed later: Should be ", (0,jsx_runtime.jsx)(_components.code, {
          children: "0.3.2.5+1"
        }), " (not ", (0,jsx_runtime.jsx)(_components.code, {
          children: "0.3.2.6+2"
        }), ")"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Version file shows ", (0,jsx_runtime.jsx)(_components.code, {
          children: "VERSION_TASK = 6"
        }), " when Task 5 is completed"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Root Cause:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Tasks completed out of sequential order"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "RW Step 2 logic treats \"completed task < current VERSION_TASK\" as an ERROR"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Agent incorrectly treats this as BUILD increment instead of new task"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Corrective Pattern:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Use Task Number from Completed Task"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Version should reflect the completed task, not the current VERSION_TASK"
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["If Task 5 is completed, use ", (0,jsx_runtime.jsx)(_components.code, {
              children: "0.3.2.5+1"
            }), " regardless of current VERSION_TASK"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Update ", (0,jsx_runtime.jsx)(_components.code, {
              children: "VERSION_TASK = 5"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "VERSION_BUILD = 1"
            })]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Changelog Ordering"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Insert ", (0,jsx_runtime.jsx)(_components.code, {
              children: "0.3.2.5+1"
            }), " before ", (0,jsx_runtime.jsx)(_components.code, {
              children: "0.3.2.6+1"
            }), " in changelog (canonical ordering)"]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Changelog uses version number ordering, not completion time"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Version File Update"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Update ", (0,jsx_runtime.jsx)(_components.code, {
              children: "VERSION_TASK"
            }), " to match completed task number"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Reset ", (0,jsx_runtime.jsx)(_components.code, {
              children: "VERSION_BUILD"
            }), " to 1 for the completed task"]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Version file should reflect the most recently completed task"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Preventive Guidance:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["✅ ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "UNDERSTAND:"
        }), " Version reflects completed task, not \"current\" task in version file"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["✅ ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "UNDERSTAND:"
        }), " Tasks can be completed out of order"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["✅ ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "MANDATORY:"
        }), " Always use completed task number for version, regardless of current VERSION_TASK"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["✅ ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "MANDATORY:"
        }), " Changelog entries ordered by version number (Task 5 before Task 6)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["❌ ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "DON'T:"
        }), " Treat out-of-order completion as BUILD increment"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["❌ ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "DON'T:"
        }), " Use current VERSION_TASK when it's higher than completed task"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Real Dev-Kit Example:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Task 6 completed: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "0.3.2.6+1"
        }), " (E3:S02", ":T06", " - Changelog ordering process hardened)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Task 5 completed later: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "0.3.2.5+1"
        }), " (E3:S02", ":T05", " - Quick reference summary)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Changelog order: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "0.3.2.5+1"
        }), " before ", (0,jsx_runtime.jsx)(_components.code, {
          children: "0.3.2.6+1"
        }), " (canonical ordering)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "quick-reference-version-component-rules",
      children: "Quick Reference: Version Component Rules"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Component"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "When It Changes"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "When It Resets"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Example"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "RC"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Entering RC phase"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N/A"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "0"
            }), " → ", (0,jsx_runtime.jsx)(_components.code, {
              children: "1"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "EPIC"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Starting new epic"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Never"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "3"
            }), " → ", (0,jsx_runtime.jsx)(_components.code, {
              children: "4"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "STORY"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Starting new story"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "When EPIC changes"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "1"
            }), " → ", (0,jsx_runtime.jsx)(_components.code, {
              children: "2"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "TASK"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Starting new task"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "When STORY changes"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "1"
            }), " → ", (0,jsx_runtime.jsx)(_components.code, {
              children: "2"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "BUILD"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Every release"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "When TASK changes"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "1"
            }), " → ", (0,jsx_runtime.jsx)(_components.code, {
              children: "2"
            }), " → ", (0,jsx_runtime.jsx)(_components.code, {
              children: "3"
            })]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "quick-reference-version-progression-patterns",
      children: "Quick Reference: Version Progression Patterns"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Scenario"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "EPIC"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "STORY"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "TASK"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "BUILD"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Example"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "New Epic"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Increment"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "0.5.1.1+1"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "New Story"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Same"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Increment"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "0.3.2.1+1"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "New Task"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Same"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Same"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Increment"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "0.3.1.2+1"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Bugfix"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Same"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Same"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Same"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Increment"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "0.3.1.3+2"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Task Transition"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Same"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Same"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Increment"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "0.3.1.2+1"
            })
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "references",
      children: "References"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Scenario Definitions:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/project-management/kanban/epics/epic-03/story-02-versioning-cookbook-and-examples/T01-core-versioning-scenarios.md"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Versioning Policy:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/architecture/standards-and-adrs/dev-kit-versioning-policy.md"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Framework Policy:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "packages/frameworks/numbering-versioning/versioning-policy.md"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Integration Guide:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/architecture/standards-and-adrs/dev-kit-kanban-versioning-rw-integration.md"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Integration Examples:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/project-management/kanban/epics/epic-04/story-03-kanban-versioning-rw-integration/T06-integration-examples.md"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "RW Execution Guide:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "packages/frameworks/workflow-mgt/docs/documentation/Developer_Docs/vwmp/release-workflow-agent-execution.md"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "copying-this-cookbook",
      children: "Copying This Cookbook"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Safe to Copy:"
      }), " This cookbook is ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "project-agnostic"
      }), " and safe to copy into other projects."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Customization:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Replace dev-kit examples with your project's examples"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update file paths to match your project structure"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Adjust epic ranges if your project uses different ranges"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Maintain Links:"
      }), " Keep references to framework policies and guides."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.em, {
        children: "End of Versioning Cookbook"
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