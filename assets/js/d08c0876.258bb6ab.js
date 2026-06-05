"use strict";
(self["webpackChunkportal"] = self["webpackChunkportal"] || []).push([["22816"], {
5978(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_architecture_standards_and_adrs_task_naming_migration_guide_md_d08_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-architecture-standards-and-adrs-task-naming-migration-guide-md-d08.json
var site_docs_architecture_standards_and_adrs_task_naming_migration_guide_md_d08_namespaceObject = JSON.parse('{"id":"architecture/standards-and-adrs/task-naming-migration-guide","title":"Task Naming Migration Guide","description":"Date: 2025-12-04","source":"@site/../docs/architecture/standards-and-adrs/task-naming-migration-guide.md","sourceDirName":"architecture/standards-and-adrs","slug":"/architecture/standards-and-adrs/task-naming-migration-guide","permalink":"/ai-dev-kit/docs/architecture/standards-and-adrs/task-naming-migration-guide","draft":false,"unlisted":false,"editUrl":"https://github.com/RMS-Ltd/ai-dev-kit/tree/main/docs/../docs/architecture/standards-and-adrs/task-naming-migration-guide.md","tags":[],"version":"current","frontMatter":{"lifecycle":"evergreen","ttl_days":null,"created_at":"2025-12-04T12:01:47.000Z","expires_at":null,"housekeeping_policy":"keep"},"sidebar":"docsSidebar","previous":{"title":"specification-and-planning-artifacts-policy","permalink":"/ai-dev-kit/docs/architecture/standards-and-adrs/specification-and-planning-artifacts-policy"},"next":{"title":"Standard Operating Procedure: Task Template Cross-Wiring","permalink":"/ai-dev-kit/docs/architecture/standards-and-adrs/task-template-cross-wiring-sop"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ../docs/architecture/standards-and-adrs/task-naming-migration-guide.md


const frontMatter = {
	lifecycle: 'evergreen',
	ttl_days: null,
	created_at: new Date('2025-12-04T12:01:47.000Z'),
	expires_at: null,
	housekeeping_policy: 'keep'
};
const contentTitle = 'Task Naming Migration Guide';

const assets = {

};



const toc = [{
  "value": "Summary",
  "id": "summary",
  "level": 2
}, {
  "value": "Format Change",
  "id": "format-change",
  "level": 2
}, {
  "value": "Migration Strategy",
  "id": "migration-strategy",
  "level": 2
}, {
  "value": "Backward Compatibility",
  "id": "backward-compatibility",
  "level": 3
}, {
  "value": "Transition Period",
  "id": "transition-period",
  "level": 3
}, {
  "value": "What Was Updated",
  "id": "what-was-updated",
  "level": 2
}, {
  "value": "Policy Documents",
  "id": "policy-documents",
  "level": 3
}, {
  "value": "Templates",
  "id": "templates",
  "level": 3
}, {
  "value": "Examples",
  "id": "examples",
  "level": 3
}, {
  "value": "Code/Scripts",
  "id": "codescripts",
  "level": 3
}, {
  "value": "Examples",
  "id": "examples-1",
  "level": 2
}, {
  "value": "Task Checklist Format",
  "id": "task-checklist-format",
  "level": 3
}, {
  "value": "Task File Naming",
  "id": "task-file-naming",
  "level": 3
}, {
  "value": "Commit Message References",
  "id": "commit-message-references",
  "level": 3
}, {
  "value": "Impact on Version Numbers",
  "id": "impact-on-version-numbers",
  "level": 2
}, {
  "value": "Best Practices",
  "id": "best-practices",
  "level": 2
}, {
  "value": "References",
  "id": "references",
  "level": 2
}, {
  "value": "Questions?",
  "id": "questions",
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
        id: "task-naming-migration-guide",
        children: "Task Naming Migration Guide"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Date:"
      }), " 2025-12-04", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Change:"
      }), " Task naming format changed from ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Exx:Sxx:Txxx"
      }), " (3-digit task) to ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Exx:Sxx:Txx"
      }), " (2-digit task)", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Policy:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "packages/frameworks/kanban/policies/kanban-governance-policy.md"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The Kanban Task naming policy has been updated to always use the full ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Exx:Sxx:Txx"
      }), " format with ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "two-digit zero-padding for Epic, Story, and Task"
      }), " when values are ", (0,jsx_runtime.jsx)(_components.code, {
        children: "<10"
      }), " (UXR-014). Tasks are NEVER referenced as standalone ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Txxx"
      }), " or ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Txx"
      }), " - they must always include the Epic and Story context: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "E\\{epic\\}:S\\{story\\}:T\\{task\\}"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Write-default examples:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "E01:S01:T01"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "E02:S16:T04"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "E21:S16:T57"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "E02:S16:T101"
      }), " (perpetual)."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Read tolerance:"
      }), " Legacy unpadded forms (e.g. ", (0,jsx_runtime.jsx)(_components.code, {
        children: "E2:S16:T4"
      }), ") remain parseable; new documentation MUST use padded form."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "format-change",
      children: "Format Change"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Old Format:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "Exx:Sxx:Txxx"
        }), " (Epic, Story, Task with 3-digit zero padding)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Example: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "E20:S07:T10"
        }), " = Epic 20, Story 7, Task 10"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "New Format:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "Exx:Sxx:Txx"
        }), " (Epic, Story, Task with 2-digit zero padding)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Example: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "E20:S07:T10"
        }), " = Epic 20, Story 7, Task 10"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "migration-strategy",
      children: "Migration Strategy"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "backward-compatibility",
      children: "Backward Compatibility"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Existing Tasks:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Existing tasks can keep their current format (backward compatible)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "No requirement to rename existing task files"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "No requirement to update existing task references in completed work"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "New Tasks:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["All new tasks MUST use full ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Exx:Sxx:Txx"
        }), " format (2-digit task number)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Task files should be named ", (0,jsx_runtime.jsx)(_components.code, {
          children: "T01-*.md"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "T02-*.md"
        }), ", etc. (for file naming only)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Task IDs in commits and references MUST use full ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Exx:Sxx:Txx"
        }), " format (e.g., ", (0,jsx_runtime.jsx)(_components.code, {
          children: "E01:S01:T01"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "E02:S04:T05"
        }), ")"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["NEVER use standalone ", (0,jsx_runtime.jsx)(_components.code, {
          children: "T01"
        }), " or ", (0,jsx_runtime.jsx)(_components.code, {
          children: "T001"
        }), " - always include Epic and Story context"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "transition-period",
      children: "Transition Period"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "During Transition:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Both formats are acceptable for existing tasks"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["New tasks MUST use full ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Exx:Sxx:Txx"
        }), " format (2-digit task)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Documentation should be updated to show ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Exx:Sxx:Txx"
        }), " format"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Examples should use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Exx:Sxx:Txx"
        }), " format"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "After Transition:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["All new work uses full ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Exx:Sxx:Txx"
        }), " format (2-digit task)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Documentation consistently uses ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Exx:Sxx:Txx"
        }), " format"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Examples use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Exx:Sxx:Txx"
        }), " format"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["No standalone ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Txx"
        }), " or ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Txxx"
        }), " references - always include Epic and Story"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "what-was-updated",
      children: "What Was Updated"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "policy-documents",
      children: "Policy Documents"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["✅ ", (0,jsx_runtime.jsx)(_components.code, {
          children: "packages/frameworks/kanban/policies/kanban-governance-policy.md"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["✅ ", (0,jsx_runtime.jsx)(_components.code, {
          children: "packages/frameworks/numbering-versioning/kanban-governance-policy.md"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["✅ ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/project-management/rituals/policy/kanban-governance-policy.md"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "templates",
      children: "Templates"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["✅ ", (0,jsx_runtime.jsx)(_components.code, {
          children: "packages/frameworks/kanban/templates/STORY_TEMPLATE.md"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["✅ ", (0,jsx_runtime.jsx)(_components.code, {
          children: "packages/frameworks/kanban/templates/EPIC_TEMPLATE.md"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "examples",
      children: "Examples"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["✅ ", (0,jsx_runtime.jsx)(_components.code, {
          children: "packages/frameworks/kanban/examples/story-33-Example.md"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["✅ ", (0,jsx_runtime.jsx)(_components.code, {
          children: "packages/frameworks/kanban/examples/epic-04-Example.md"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["✅ ", (0,jsx_runtime.jsx)(_components.code, {
          children: "packages/frameworks/kanban/integration/numbering-versioning-integration.md"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["✅ ", (0,jsx_runtime.jsx)(_components.code, {
          children: "packages/frameworks/kanban/README.md"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["✅ ", (0,jsx_runtime.jsx)(_components.code, {
          children: "packages/frameworks/workflow-mgt/docs/documentation/Developer_Docs/vwmp/release-workflow-agent-execution.md"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["✅ ", (0,jsx_runtime.jsx)(_components.code, {
          children: "packages/frameworks/workflow-mgt/docs/documentation/templates/action-workflow-template.md"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["✅ ", (0,jsx_runtime.jsx)(_components.code, {
          children: "packages/frameworks/workflow-mgt/docs/documentation/Developer_Docs/vwmp/release-workflow-reference.md"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["✅ ", (0,jsx_runtime.jsx)(_components.code, {
          children: "packages/frameworks/workflow-mgt/docs/architecture/standards-and-adrs/versioning-strategy.md"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["✅ ", (0,jsx_runtime.jsx)(_components.code, {
          children: "packages/frameworks/kanban/guides/portfolio-kanban-alignment-playbook.md"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["✅ ", (0,jsx_runtime.jsx)(_components.code, {
          children: "packages/frameworks/kanban/FR_BR_INTAKE_AGENT_GUIDE.md"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["✅ ", (0,jsx_runtime.jsx)(_components.code, {
          children: "packages/frameworks/kanban/FR_BR_INTAKE_GUIDE.md"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "codescripts",
      children: "Code/Scripts"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ No scripts found that parse Task IDs with Txxx format"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ No validators found that check Task format specifically"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "examples-1",
      children: "Examples"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "task-checklist-format",
      children: "Task Checklist Format"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Old:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-markdown",
        children: "- [x] **E2:S02:T01 – Add CHECK Phase** ✅ COMPLETE (v0.2.2.1+1)\n- [ ] **E2:S02:T02 – Add ACT Phase**\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "New:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-markdown",
        children: "- [x] **E2:S02:T01 – Add CHECK Phase** ✅ COMPLETE (v0.2.2.1+1)\n- [ ] **E2:S02:T02 – Add ACT Phase**\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "task-file-naming",
      children: "Task File Naming"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Old:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "T01-add-check-phase.md\nT02-add-act-phase.md\nT10-some-task.md\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "New:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "T01-add-check-phase.md\nT02-add-act-phase.md\nT10-some-task.md\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "commit-message-references",
      children: "Commit Message References"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Old:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Release v0.2.2.1+1: E2:S02:T01: Add CHECK Phase\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "New:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Release v0.2.2.1+1: E2:S02:T01: Add CHECK Phase\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "impact-on-version-numbers",
      children: "Impact on Version Numbers"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "No Impact:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Version numbers use numeric Task component: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "RC.EPIC.STORY.TASK+BUILD"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Task component in version is numeric (e.g., ", (0,jsx_runtime.jsx)(_components.code, {
          children: "0.2.2.1+1"
        }), " = Task 1)"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Task naming format (Txx vs Txxx) does not affect version numbers"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Version numbers remain unchanged"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Task T01 (new format) = Version ", (0,jsx_runtime.jsx)(_components.code, {
          children: "0.2.2.1+1"
        }), " (Task component = 1)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Task T001 (old format) = Version ", (0,jsx_runtime.jsx)(_components.code, {
          children: "0.2.2.1+1"
        }), " (Task component = 1)"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Both refer to the same Task number, just different display format"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "best-practices",
      children: "Best Practices"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsxs)(_components.strong, {
            children: ["Use Full Exx:Sxx", ":Txx", " Format for All Task References:"]
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["All task references MUST use full ", (0,jsx_runtime.jsx)(_components.code, {
              children: "Exx:Sxx:Txx"
            }), " format (2-digit task number)"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Task files: ", (0,jsx_runtime.jsx)(_components.code, {
              children: "T01-*.md"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "T02-*.md"
            }), ", etc. (file naming only - still use full format in content)"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Task IDs in documentation: ", (0,jsx_runtime.jsx)(_components.code, {
              children: "E2:S02:T01"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "E2:S02:T02"
            }), ", etc."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["NEVER use standalone ", (0,jsx_runtime.jsx)(_components.code, {
              children: "T01"
            }), " or ", (0,jsx_runtime.jsx)(_components.code, {
              children: "T001"
            }), " - always include Epic and Story context"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Maintain Existing Tasks:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Existing tasks can keep their format"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "No need to rename existing files"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "No need to update historical references"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Update Documentation:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "New documentation should use Txx format"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Examples should use Txx format"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Templates should use Txx format"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Consistency:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Use consistent format within a story"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Use consistent format in documentation"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Use consistent format in examples"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "references",
      children: "References"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Kanban Policy:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "packages/frameworks/kanban/policies/kanban-governance-policy.md"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Versioning Policy:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "packages/frameworks/numbering-versioning/kanban-governance-policy.md"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Dev-Kit Policy:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/project-management/rituals/policy/kanban-governance-policy.md"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Task T07:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/project-management/kanban/epics/epic-02/story-02-pdca-integration-into-release-workflow/T07-implement-task-naming-change.md"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Task T08:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/project-management/kanban/epics/epic-02/story-02-pdca-integration-into-release-workflow/T08-update-kanban-docs-to-txx-standard.md"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "questions",
      children: "Questions?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "If you have questions about the migration or need clarification, refer to:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Task T07: Implementation details"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Task T08: Documentation updates"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Kanban policy documents: Current standards"
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