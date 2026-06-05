"use strict";
(self["webpackChunkportal"] = self["webpackChunkportal"] || []).push([["42272"], {
39961(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_architecture_standards_and_adrs_dev_kit_kanban_versioning_rw_integration_md_ffb_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-architecture-standards-and-adrs-dev-kit-kanban-versioning-rw-integration-md-ffb.json
var site_docs_architecture_standards_and_adrs_dev_kit_kanban_versioning_rw_integration_md_ffb_namespaceObject = JSON.parse('{"id":"architecture/standards-and-adrs/dev-kit-kanban-versioning-rw-integration","title":"Dev-Kit: Kanban + Versioning + Release Workflow Integration Guide","description":"Status: Active","source":"@site/../docs/architecture/standards-and-adrs/dev-kit-kanban-versioning-rw-integration.md","sourceDirName":"architecture/standards-and-adrs","slug":"/architecture/standards-and-adrs/dev-kit-kanban-versioning-rw-integration","permalink":"/ai-dev-kit/docs/architecture/standards-and-adrs/dev-kit-kanban-versioning-rw-integration","draft":false,"unlisted":false,"editUrl":"https://github.com/RMS-Ltd/ai-dev-kit/tree/main/docs/../docs/architecture/standards-and-adrs/dev-kit-kanban-versioning-rw-integration.md","tags":[],"version":"current","frontMatter":{"lifecycle":"evergreen","ttl_days":null,"created_at":"2025-12-04T12:01:47.000Z","expires_at":null,"housekeeping_policy":"keep"},"sidebar":"docsSidebar","previous":{"title":"dev-kit-ipw-ipp-vs-icw-artifacts","permalink":"/ai-dev-kit/docs/architecture/standards-and-adrs/dev-kit-ipw-ipp-vs-icw-artifacts"},"next":{"title":"Versioning Cookbook","permalink":"/ai-dev-kit/docs/architecture/standards-and-adrs/dev-kit-versioning-cookbook"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ../docs/architecture/standards-and-adrs/dev-kit-kanban-versioning-rw-integration.md


const frontMatter = {
	lifecycle: 'evergreen',
	ttl_days: null,
	created_at: new Date('2025-12-04T12:01:47.000Z'),
	expires_at: null,
	housekeeping_policy: 'keep'
};
const contentTitle = 'Dev-Kit: Kanban + Versioning + Release Workflow Integration Guide';

const assets = {

};



const toc = [{
  "value": "Overview",
  "id": "overview",
  "level": 2
}, {
  "value": "Prerequisites",
  "id": "prerequisites",
  "level": 2
}, {
  "value": "Integration Architecture",
  "id": "integration-architecture",
  "level": 2
}, {
  "value": "Three-Way Relationship",
  "id": "three-way-relationship",
  "level": 3
}, {
  "value": "Integration Flow",
  "id": "integration-flow",
  "level": 3
}, {
  "value": "Integration Points",
  "id": "integration-points",
  "level": 2
}, {
  "value": "1. Kanban → Versioning Integration",
  "id": "1-kanban--versioning-integration",
  "level": 3
}, {
  "value": "2. Versioning → Release Workflow Integration",
  "id": "2-versioning--release-workflow-integration",
  "level": 3
}, {
  "value": "3. Release Workflow → Kanban Integration",
  "id": "3-release-workflow--kanban-integration",
  "level": 3
}, {
  "value": "4. <code>RW -k</code> — Kanban / documentation commit (low-friction path)",
  "id": "4-rw--k--kanban--documentation-commit-low-friction-path",
  "level": 3
}, {
  "value": "End-to-End Integration Flow",
  "id": "end-to-end-integration-flow",
  "level": 2
}, {
  "value": "Complete Workflow Example",
  "id": "complete-workflow-example",
  "level": 3
}, {
  "value": "Dev-Kit Specific Configuration",
  "id": "dev-kit-specific-configuration",
  "level": 2
}, {
  "value": "File Locations",
  "id": "file-locations",
  "level": 3
}, {
  "value": "Version Schema",
  "id": "version-schema",
  "level": 3
}, {
  "value": "Forensic Marker Format",
  "id": "forensic-marker-format",
  "level": 3
}, {
  "value": "Validation Results",
  "id": "validation-results",
  "level": 2
}, {
  "value": "Integration Validation Summary",
  "id": "integration-validation-summary",
  "level": 3
}, {
  "value": "Troubleshooting",
  "id": "troubleshooting",
  "level": 2
}, {
  "value": "Common Issues",
  "id": "common-issues",
  "level": 3
}, {
  "value": "Best Practices",
  "id": "best-practices",
  "level": 2
}, {
  "value": "1. Always Use RW for Releases",
  "id": "1-always-use-rw-for-releases",
  "level": 3
}, {
  "value": "2. Maintain Consistency",
  "id": "2-maintain-consistency",
  "level": 3
}, {
  "value": "3. Validate Before Committing",
  "id": "3-validate-before-committing",
  "level": 3
}, {
  "value": "4. Document Work Properly",
  "id": "4-document-work-properly",
  "level": 3
}, {
  "value": "Related Documentation",
  "id": "related-documentation",
  "level": 2
}, {
  "value": "Framework Integration Guides",
  "id": "framework-integration-guides",
  "level": 3
}, {
  "value": "Dev-Kit Policies",
  "id": "dev-kit-policies",
  "level": 3
}, {
  "value": "Release Workflow Documentation",
  "id": "release-workflow-documentation",
  "level": 3
}, {
  "value": "Validation Reports",
  "id": "validation-reports",
  "level": 3
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
        id: "dev-kit-kanban--versioning--release-workflow-integration-guide",
        children: "Dev-Kit: Kanban + Versioning + Release Workflow Integration Guide"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Status:"
      }), " Active", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Version:"
      }), " 1.0.1", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Last Updated:"
      }), " 2026-04-02", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Related:"
      }), " Epic 4, Story 3, Task 5"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "overview",
      children: "Overview"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["This guide documents how the three core frameworks—", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Kanban"
      }), ", ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Versioning"
      }), ", and ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Release Workflow (RW)"
      }), "—integrate within the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ai-dev-kit"
      }), " repository. It provides dev-kit specific examples, end-to-end flows, troubleshooting, and validation results."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Integration Type:"
      }), " Three-way complementary integration"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Kanban"
        }), " tracks work items (Epics, Stories, Tasks)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Versioning"
        }), " tracks code releases (", (0,jsx_runtime.jsx)(_components.code, {
          children: "RC.EPIC.STORY.TASK+BUILD"
        }), ")"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Release Workflow"
        }), " automates versioning and Kanban updates"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "prerequisites",
      children: "Prerequisites"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "required:\n  - Kanban System package installed (`packages/frameworks/kanban/`)\n  - Numbering & Versioning package installed (`packages/frameworks/numbering-versioning/`)\n  - Workflow Management package installed (`packages/frameworks/workflow-mgt/`)\n  - .cursorrules configured with RW trigger\n  - Epic and Story documents following templates\n  - Version file: `src/fynd_deals/version.py`\n  - Kanban structure: `docs/project-management/kanban/`\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "integration-architecture",
      children: "Integration Architecture"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "three-way-relationship",
      children: "Three-Way Relationship"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "kanban:\n  tracks: \"Work items (Epics, Stories, Tasks)\"\n  provides: \"Work item structure and traceability\"\n  location: \"docs/project-management/kanban/\"\n\nversioning:\n  tracks: \"Code releases (versions)\"\n  provides: \"Forensic traceability via RC.EPIC.STORY.TASK+BUILD schema\"\n  location: \"src/fynd_deals/version.py\"\n\nrelease_workflow:\n  automates: \"Version bumping and Kanban documentation updates\"\n  provides: \"Intelligent agent-driven workflow execution\"\n  location: \"packages/frameworks/workflow-mgt/\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "integration-flow",
      children: "Integration Flow"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "end_to_end_flow:\n  1: \"Developer completes Task (code changes)\"\n  2: \"Developer types 'RW' in AI assistant\"\n  3: \"RW Step 1: Branch Safety Check\"\n  4: \"RW Step 2: Bump Version (reads from version.py, updates TASK/BUILD)\"\n  5: \"RW Step 3: Create Detailed Changelog\"\n  6: \"RW Step 4: Update Main Changelog\"\n  7: \"RW Step 5: Update README (optional)\"\n  8: \"RW Step 6: Auto-update Kanban Docs (adds forensic markers)\"\n  9: \"RW Step 7: Stage Files\"\n  10: \"RW Step 8: Run Validators\"\n  11: \"RW Step 9: Commit Changes\"\n  12: \"RW Step 10: Create Git Tag\"\n  13: \"RW Step 11: Push to Remote\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "integration-points",
      children: "Integration Points"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1-kanban--versioning-integration",
      children: "1. Kanban → Versioning Integration"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "How They Connect:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Kanban Tasks map to version ", (0,jsx_runtime.jsx)(_components.code, {
          children: "TASK"
        }), " component"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Kanban Stories map to version ", (0,jsx_runtime.jsx)(_components.code, {
          children: "STORY"
        }), " component"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Kanban Epics map to version ", (0,jsx_runtime.jsx)(_components.code, {
          children: "EPIC"
        }), " component"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Forensic markers link completed work items to versions"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Dev-Kit Example:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "kanban_task: \"E4:S03:T01\"\nversion: \"0.4.3.1+1\"\nforensic_marker: \"✅ COMPLETE (v0.4.3.1+1)\"\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Validation Status:"
      }), " ✅ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "VALIDATED"
      }), " (E4:S03", ":T02", ")"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Epic/Story mapping: ✅ PASS"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Task mapping: ✅ PASS (fixed in E4:S03", ":T02", ")"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Version assignment: ✅ PASS"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Reference:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "docs/project-management/kanban/epics/epic-04/story-03-kanban-versioning-rw-integration/T02-kanban-versioning-validation.md"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "2-versioning--release-workflow-integration",
      children: "2. Versioning → Release Workflow Integration"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "How They Connect:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["RW Step 2 reads version from ", (0,jsx_runtime.jsx)(_components.code, {
          children: "src/fynd_deals/version.py"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["RW Step 2 updates ", (0,jsx_runtime.jsx)(_components.code, {
          children: "VERSION_TASK"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "VERSION_BUILD"
        }), " based on active Task"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "RW Step 2 detects Task transitions and resets BUILD to 1"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Validation scripts verify version format and branch alignment"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Dev-Kit Example:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "# src/fynd_deals/version.py\nVERSION_RC = 0\nVERSION_EPIC = 4      # Epic 4: Kanban Framework\nVERSION_STORY = 3     # Story 3: Kanban + Versioning + RW Integration\nVERSION_TASK = 7      # Task 7: Address RW → Kanban integration gaps\nVERSION_BUILD = 1     # Build 1 (increments per release within task)\nVERSION_STRING = f\"{VERSION_RC}.{VERSION_EPIC}.{VERSION_STORY}.{VERSION_TASK}+{VERSION_BUILD}\"\n# Result: \"0.4.3.7+1\"\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Validation Status:"
      }), " ✅ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "VALIDATED"
      }), " (E4:S03", ":T03", ")"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Version file reading: ✅ PASS"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "BUILD increment: ✅ PASS"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Task transition handling: ✅ PASS"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "EPIC/STORY progression: ⚠️ PARTIAL (not explicitly documented)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Reference:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "docs/project-management/kanban/epics/epic-04/story-03-kanban-versioning-rw-integration/T03-versioning-rw-validation.md"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "3-release-workflow--kanban-integration",
      children: "3. Release Workflow → Kanban Integration"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "How They Connect:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "RW Step 6 automatically updates Kanban documentation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "RW Step 6 adds forensic markers to Task/Story checklists"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "RW Step 6 updates Epic header with version and summary"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "RW Step 6 updates ALL sections (header, checklist, detailed sections)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Dev-Kit Example:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-markdown",
        children: "# epic-04.md\n**Last updated:** 2025-12-02 (v0.4.3.7+1 – Task 7 complete: Address RW → Kanban integration gaps)\n\n## Story Checklist\n- [x] **E4:S03 – Kanban + Versioning + RW Integration** - COMPLETE ✅ (v0.4.3.7+1)\n  - Tasks: T001 ✅ (v0.4.3.1+1), T002 ✅ (v0.4.3.2+2), T003 ✅ (v0.4.3.3+1), T004 ✅ (v0.4.3.4+1), T007 ✅ (v0.4.3.7+1)\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Validation Status:"
      }), " ✅ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "VALIDATED"
      }), " (E4:S03", ":T04", ", gaps fixed in E4:S03", ":T07", ")"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Epic document updates: ✅ PASS (after fixes)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Story document updates: ✅ PASS"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "\"ALL sections\" requirement: ✅ PASS (after fixes)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Forensic marker format: ✅ PASS (after fixes)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Reference:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/project-management/kanban/epics/epic-04/story-03-kanban-versioning-rw-integration/T04-rw-kanban-validation.md"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/project-management/kanban/epics/epic-04/story-03-kanban-versioning-rw-integration/T07-gap-resolution-summary.md"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "4-rw--k--kanban--documentation-commit-low-friction-path",
      children: ["4. ", (0,jsx_runtime.jsx)(_components.code, {
        children: "RW -k"
      }), " — Kanban / documentation commit (low-friction path)"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Purpose:"
      }), " Reduce friction when the main intent is to ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "ship Kanban and documentation updates"
      }), " (board rows, story/epic markers, task doc alignment, FR/BR pointers) without fighting ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "full RW"
      }), " guardrails that assume ", (0,jsx_runtime.jsx)(_components.code, {
        children: "version.py"
      }), " already matches the task you are attributing."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Trigger:"
      }), " Same message pattern as full ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "RW"
      }), " (mandatory ", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "E…S…T…"
        })
      }), " token per ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "FR-060"
      }), "), e.g. ", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "RW -k E6:S06:T57"
        })
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "How it connects:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Step 1c"
        }), " — ", (0,jsx_runtime.jsx)(_components.code, {
          children: "validate_rw_task_complete.py --requested \"<token>\" --mode rw-k"
        }), ": task file must ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "exist"
        }), "; ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "COMPLETE"
        }), " / releasability checks are ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "skipped"
        }), " so ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "IN PROGRESS"
        }), " or doc-hygiene targets do not false-block."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Step 1d"
        }), " — ", (0,jsx_runtime.jsx)(_components.code, {
          children: "validate_rw_task_intent.py --requested \"<token>\" --mode rw-k"
        }), ": comparison against ", (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "version.py"
          })
        }), " is ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "skipped"
        }), " so an explicit Kanban/doc target does not false-block when the repo version line is still on a different task (e.g. you already released ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "T61"
        }), " but need a ", (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "T57"
          })
        }), " doc pass)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "What it is not:"
      }), " ", (0,jsx_runtime.jsxs)(_components.strong, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "RW -k"
        }), " does not mean “no commit”"]
      }), " — you still run the release workflow (version bump, changelog, staging, validators, commit, tags) per project rules; ", (0,jsx_runtime.jsxs)(_components.strong, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "-k"
        }), " relaxes the task/intent gates"]
      }), ", not Git hygiene."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Canonical procedure:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "packages/frameworks/workflow-mgt/KB/Documentation/Developer_Docs/vwmp/release-workflow-agent-execution.md"
      }), " (Steps ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "1.4"
      }), " and ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "1.5"
      }), "); portable trigger text: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "packages/frameworks/workflow-mgt/cursorrules-rw-trigger-section.md"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "end-to-end-integration-flow",
      children: "End-to-End Integration Flow"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "complete-workflow-example",
      children: "Complete Workflow Example"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Scenario:"
      }), " Complete Task E4:S03", ":T05", " (Create dev-kit integration guide)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 1: Work Completion"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Developer completes Task 5 work (creates integration guide)"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Files modified: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/architecture/standards-and-adrs/dev-kit-kanban-versioning-rw-integration.md"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 2: Trigger Release Workflow"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Developer types ", (0,jsx_runtime.jsx)(_components.code, {
          children: "RW"
        }), " in AI assistant"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "AI agent starts Release Workflow execution"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 3: RW Step 1 - Branch Safety Check"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Validates work aligns with current branch (", (0,jsx_runtime.jsx)(_components.code, {
          children: "main"
        }), ")"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Validates ", (0,jsx_runtime.jsx)(_components.code, {
          children: "VERSION_TASK"
        }), " matches active Task (Task 5)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["✅ PASS: On ", (0,jsx_runtime.jsx)(_components.code, {
          children: "main"
        }), ", Task 5 is active"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 4: RW Step 2 - Bump Version"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Reads current version: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "0.4.3.7+1"
        }), " (Task 7, Build 1)"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Detects Task transition: Task 7 → Task 5"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Updates ", (0,jsx_runtime.jsx)(_components.code, {
          children: "VERSION_TASK"
        }), " to 5"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Resets ", (0,jsx_runtime.jsx)(_components.code, {
          children: "VERSION_BUILD"
        }), " to 1"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["New version: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "0.4.3.5+1"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 5: RW Step 3 - Create Detailed Changelog"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Creates ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/changelog-and-release-notes/changelog-archive/CHANGELOG_v0.4.3.5+1.md"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Includes full timestamp, Epic/Story/Task info, summary, changes"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 6: RW Step 4 - Update Main Changelog"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Adds summary entry to ", (0,jsx_runtime.jsx)(_components.code, {
          children: "CHANGELOG.md"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Format: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "## [0.4.3.5+1] - 02-12-25"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Includes link to detailed changelog"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 7: RW Step 5 - Update README"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Updates version badge (if present)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Updates latest release callout (if present)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 8: RW Step 6 - Auto-update Kanban Docs"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Updates epic-04.md header: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "**Last updated:** 2025-12-02 (v0.4.3.5+1 – Task 5 complete: Create dev-kit integration guide)"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Updates epic-04.md Story Checklist: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "- [x] **E4:S03 – ...** - COMPLETE ✅ (v0.4.3.7+1)"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Updates epic-04.md detailed Story section: Task 5 marked complete"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Updates story-003.md header: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "**Last updated:** ..."
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "**Version:** v0.4.3.5+1"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Updates story-003.md Task Checklist: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "- [x] **E4:S03:T05 – ...** ✅ COMPLETE (v0.4.3.5+1)"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Updates story-003.md detailed Task section: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "**Status:** ✅ **COMPLETE** (v0.4.3.5+1) - ..."
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Updates story-003.md footer: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "_Last updated: ..._"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 9: RW Step 7 - Stage Files"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Runs ", (0,jsx_runtime.jsx)(_components.code, {
          children: "git add -A"
        }), " to stage all modified files"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 10: RW Step 8 - Run Validators"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Runs ", (0,jsx_runtime.jsx)(_components.code, {
          children: "validate_branch_context.py"
        }), ": ✅ PASS"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Runs ", (0,jsx_runtime.jsx)(_components.code, {
          children: "validate_changelog_format.py"
        }), ": ✅ PASS"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 11: RW Step 9 - Commit Changes"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Creates commit: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Release v0.4.3.5+1: Task 5 complete: Create dev-kit integration guide\\n\\nEpic: 4 | Story: 3 | Task: 5"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 12: RW Step 10 - Create Git Tag"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Creates annotated tag: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "v0.4.3.5+1"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Tag message includes Epic/Story/Task info"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 13: RW Step 11 - Push to Remote"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Pushes ", (0,jsx_runtime.jsx)(_components.code, {
          children: "main"
        }), " branch to origin"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Pushes tag ", (0,jsx_runtime.jsx)(_components.code, {
          children: "v0.4.3.5+1"
        }), " to origin"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Result:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Version ", (0,jsx_runtime.jsx)(_components.code, {
          children: "v0.4.3.5+1"
        }), " released"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Task 5 marked complete with forensic marker"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "All Kanban docs updated"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Full traceability: Version ↔ Epic/Story/Task ↔ Changelog ↔ Kanban ↔ Git"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "dev-kit-specific-configuration",
      children: "Dev-Kit Specific Configuration"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "file-locations",
      children: "File Locations"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "version_file:\n  path: \"src/fynd_deals/version.py\"\n  schema: \"RC.EPIC.STORY.TASK+BUILD\"\n  example: \"0.4.3.7+1\"\n\nkanban_structure:\n  root: \"docs/project-management/kanban/\"\n  epics: \"docs/project-management/kanban/epics/Epic-{epic}.md\"\n  stories: \"docs/project-management/kanban/epics/Epic-{epic}/stories/Story-{story}-*.md\"\n  board: \"docs/project-management/kanban/kboard.md\"\n  index: \"docs/project-management/kanban/_index.md\"\n\nchangelog:\n  main: \"CHANGELOG.md\"\n  archive: \"docs/changelog-and-release-notes/changelog-archive/CHANGELOG_v{version}.md\"\n\nrelease_workflow:\n  docs: \"packages/frameworks/workflow-mgt/docs/documentation/Developer_Docs/vwmp/release-workflow-agent-execution.md\"\n  trigger: \".cursorrules RW trigger section\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "version-schema",
      children: "Version Schema"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "schema: \"RC.EPIC.STORY.TASK+BUILD\"\ncomponents:\n  RC: \"0 (development) or 1+ (release candidate)\"\n  EPIC: \"Dev-kit Epic number (1-4+)\"\n  STORY: \"Story number within epic\"\n  TASK: \"Task number within story\"\n  BUILD: \"Build number (increments per release within task)\"\n\ndev_kit_epics:\n  1: \"AI Dev Kit Core\"\n  2: \"Workflow Management Framework\"\n  3: \"Numbering & Versioning Framework\"\n  4: \"Kanban Framework\"\n\nexamples:\n  - version: \"0.4.3.7+1\"\n    epic: \"Epic 4 (Kanban Framework)\"\n    story: \"Story 3 (Kanban + Versioning + RW Integration)\"\n    task: \"Task 7 (Address RW → Kanban integration gaps)\"\n    build: \"Build 1\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "forensic-marker-format",
      children: "Forensic Marker Format"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "canonical_format: \"✅ COMPLETE (vRC.E.S.T+B)\"\nexamples:\n  - task: \"✅ COMPLETE (v0.4.3.7+1)\"\n  - story: \"✅ COMPLETE (v0.4.3.7+1)\"\n  - epic: \"✅ COMPLETE (v0.4.1.6+1)\"\n\nlocations:\n  - Story Task Checklist\n  - Story detailed Task sections\n  - Epic Story Checklist (with Task list)\n  - Epic detailed Story sections\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "validation-results",
      children: "Validation Results"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "integration-validation-summary",
      children: "Integration Validation Summary"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "All three integration points have been validated in dev-kit:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsxs)(_components.strong, {
        children: ["✅ Kanban → Versioning (E4:S03", ":T02", ")"]
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Status: ✅ VALIDATED"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Epic/Story mapping: ✅ PASS"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Task mapping: ✅ PASS (fixed critical issue)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Version assignment: ✅ PASS"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsxs)(_components.strong, {
        children: ["✅ Versioning → RW (E4:S03", ":T03", ")"]
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Status: ✅ VALIDATED"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Version file reading: ✅ PASS"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "BUILD increment: ✅ PASS"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Task transition handling: ✅ PASS"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "EPIC/STORY progression: ⚠️ PARTIAL (not explicitly documented)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsxs)(_components.strong, {
        children: ["✅ RW → Kanban (E4:S03", ":T04", ", E4:S03", ":T07", ")"]
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Status: ✅ VALIDATED (gaps fixed)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Epic document updates: ✅ PASS"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Story document updates: ✅ PASS"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "\"ALL sections\" requirement: ✅ PASS"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Forensic marker format: ✅ PASS"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Reference Documents:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["T002: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/project-management/kanban/epics/epic-04/story-03-kanban-versioning-rw-integration/T02-kanban-versioning-validation.md"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["T003: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/project-management/kanban/epics/epic-04/story-03-kanban-versioning-rw-integration/T03-versioning-rw-validation.md"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["T004: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/project-management/kanban/epics/epic-04/story-03-kanban-versioning-rw-integration/T04-rw-kanban-validation.md"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["T007: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/project-management/kanban/epics/epic-04/story-03-kanban-versioning-rw-integration/T07-gap-resolution-summary.md"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "troubleshooting",
      children: "Troubleshooting"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "common-issues",
      children: "Common Issues"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Issue 1: Version TASK Component Not Updating"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Symptoms:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["All Tasks in a Story use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "TASK=1"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "BUILD increments across Tasks instead of resetting"
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
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Issue 2: Epic Story Checklist Not Updated"
      })
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
        children: "Verify systematic process is followed (read full file, find all references, update all)"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Check forensic marker format is canonical: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "✅ COMPLETE (v{version})"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Reference:"
      }), " T004 validation report, T007 gap resolution"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Issue 3: Forensic Marker Format Inconsistency"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Symptoms:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Some sections use correct format, others missing version markers"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Inconsistent traceability"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Use canonical format: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "✅ COMPLETE (v{version})"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Ensure all Task status fields include version markers"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Verify RW Step 6 validation checks format"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Reference:"
      }), " T007 gap resolution"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Issue 4: Branch Context Validation Fails"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Symptoms:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "validate_branch_context.py"
        }), " fails"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Version doesn't match branch context"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Verify branch name matches Epic number"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Check version EPIC component matches branch Epic"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Ensure version file is correctly formatted"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Reference:"
      }), " RW Step 1 documentation"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Issue 5: Changelog Format Validation Fails"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Symptoms:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "validate_changelog_format.py"
        }), " fails"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Date format incorrect"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Use date format: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "DD-MM-YY"
        }), " for main changelog"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Use full timestamp: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "YYYY-MM-DD HH:MM:SS UTC"
        }), " for detailed changelog"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Verify changelog follows Keep a Changelog format"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Reference:"
      }), " RW Step 3, Step 4 documentation"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "best-practices",
      children: "Best Practices"
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
      id: "2-maintain-consistency",
      children: "2. Maintain Consistency"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "DO:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Ensure Epic header, Story Checklist, and detailed sections all match"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use canonical forensic marker format"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update ALL sections when releasing"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "DON'T:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update only some sections"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use inconsistent forensic marker formats"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Leave sections out of sync"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "3-validate-before-committing",
      children: "3. Validate Before Committing"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "DO:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Run validators before committing"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Fix validation errors before proceeding"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Verify branch context alignment"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "DON'T:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Skip validation steps"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Commit with validation errors"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Ignore branch context warnings"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "4-document-work-properly",
      children: "4. Document Work Properly"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "DO:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Create detailed changelog entries"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Include Epic/Story/Task info in commit messages"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Link to related work items"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "DON'T:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use generic commit messages"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Skip changelog updates"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Forget to link related work"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "related-documentation",
      children: "Related Documentation"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "framework-integration-guides",
      children: "Framework Integration Guides"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Kanban + Versioning:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "packages/frameworks/kanban/integration/numbering-versioning-integration.md"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Kanban + Workflow Management:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "packages/frameworks/kanban/integration/workflow-management-integration.md"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "dev-kit-policies",
      children: "Dev-Kit Policies"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Versioning Policy:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/architecture/standards-and-adrs/dev-kit-versioning-policy.md"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Kanban Governance:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/project-management/rituals/policy/kanban-governance-policy.md"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "release-workflow-documentation",
      children: "Release Workflow Documentation"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "RW Agent Execution:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "packages/frameworks/workflow-mgt/docs/documentation/Developer_Docs/vwmp/release-workflow-agent-execution.md"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "RW Trigger Section:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "packages/frameworks/workflow-mgt/cursorrules-rw-trigger-section.md"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "validation-reports",
      children: "Validation Reports"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "T002:"
        }), " Kanban → Versioning validation"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "T003:"
        }), " Versioning → RW validation"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "T004:"
        }), " RW → Kanban validation"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "T007:"
        }), " Gap resolution summary"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "version-history",
      children: "Version History"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "v1.0.1"
        }), " (2026-04-02): Added ", (0,jsx_runtime.jsxs)(_components.strong, {
          children: ["§ Integration point 4 — ", (0,jsx_runtime.jsx)(_components.code, {
            children: "RW -k"
          })]
        }), " (Kanban/doc low-friction path, validator ", (0,jsx_runtime.jsx)(_components.code, {
          children: "--mode rw-k"
        }), ", links to RW execution guide)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "v1.0.0"
        }), " (2025-12-02): Initial version created (E4:S03", ":T05", ")"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.em, {
        children: "End of Dev-Kit Integration Guide"
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