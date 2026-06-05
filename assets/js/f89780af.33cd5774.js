"use strict";
(self["webpackChunkportal"] = self["webpackChunkportal"] || []).push([["87105"], {
19974(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_architecture_standards_and_adrs_ai_dev_kit_project_review_md_f89_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-architecture-standards-and-adrs-ai-dev-kit-project-review-md-f89.json
var site_docs_architecture_standards_and_adrs_ai_dev_kit_project_review_md_f89_namespaceObject = JSON.parse('{"id":"architecture/standards-and-adrs/ai-dev-kit-project-review","title":"AI Dev Kit Project Review (Repository Hygiene & Legacy Clean-Up)","description":"Status: Review complete (planning phase only)","source":"@site/../docs/architecture/standards-and-adrs/ai-dev-kit-project-review.md","sourceDirName":"architecture/standards-and-adrs","slug":"/architecture/standards-and-adrs/ai-dev-kit-project-review","permalink":"/ai-dev-kit/docs/architecture/standards-and-adrs/ai-dev-kit-project-review","draft":false,"unlisted":false,"editUrl":"https://github.com/RMS-Ltd/ai-dev-kit/tree/main/docs/../docs/architecture/standards-and-adrs/ai-dev-kit-project-review.md","tags":[],"version":"current","frontMatter":{"lifecycle":"evergreen","ttl_days":null,"created_at":"2026-02-19T00:00:00.000Z","expires_at":null,"housekeeping_policy":"keep"},"sidebar":"docsSidebar","previous":{"title":"Agentic Template Generator Design","permalink":"/ai-dev-kit/docs/architecture/standards-and-adrs/agentic-template-generator-design"},"next":{"title":"changelog-archival-policy","permalink":"/ai-dev-kit/docs/architecture/standards-and-adrs/changelog-archival-policy"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ../docs/architecture/standards-and-adrs/ai-dev-kit-project-review.md


const frontMatter = {
	lifecycle: 'evergreen',
	ttl_days: null,
	created_at: new Date('2026-02-19T00:00:00.000Z'),
	expires_at: null,
	housekeeping_policy: 'keep'
};
const contentTitle = 'AI Dev Kit Project Review (Repository Hygiene & Legacy Clean-Up)';

const assets = {

};



const toc = [{
  "value": "1. Top-Level Inventory &amp; Classification",
  "id": "1-top-level-inventory--classification",
  "level": 2
}, {
  "value": "2. Framework Package Sanity Pass (Conceptual)",
  "id": "2-framework-package-sanity-pass-conceptual",
  "level": 2
}, {
  "value": "2.1 Numbering &amp; Versioning (<code>packages/frameworks/numbering-versioning</code>)",
  "id": "21-numbering--versioning-packagesframeworksnumbering-versioning",
  "level": 3
}, {
  "value": "2.2 Workflow Management (<code>packages/frameworks/workflow-mgt</code>)",
  "id": "22-workflow-management-packagesframeworksworkflow-mgt",
  "level": 3
}, {
  "value": "2.3 Kanban Framework (<code>packages/frameworks/kanban</code>)",
  "id": "23-kanban-framework-packagesframeworkskanban",
  "level": 3
}, {
  "value": "3. Dev-Kit vs Framework Duplication (High-Level)",
  "id": "3-dev-kit-vs-framework-duplication-high-level",
  "level": 2
}, {
  "value": "3.1 Policy/Doc Duplication",
  "id": "31-policydoc-duplication",
  "level": 3
}, {
  "value": "3.2 Scripts",
  "id": "32-scripts",
  "level": 3
}, {
  "value": "4. Kanban &amp; Workflow Documentation Review (High-Level)",
  "id": "4-kanban--workflow-documentation-review-high-level",
  "level": 2
}, {
  "value": "4.1 Kanban (<code>docs/project-management/kanban</code>)",
  "id": "41-kanban-docsproject-managementkanban",
  "level": 3
}, {
  "value": "4.2 RW/UKW/CMW Docs",
  "id": "42-rwukwcmw-docs",
  "level": 3
}, {
  "value": "5. Versioning &amp; Changelog Hygiene (High-Level)",
  "id": "5-versioning--changelog-hygiene-high-level",
  "level": 2
}, {
  "value": "6. Scripts &amp; Miscellaneous Fat (High-Level)",
  "id": "6-scripts--miscellaneous-fat-high-level",
  "level": 2
}, {
  "value": "7. Proposed Clean-Up Checklist (For Follow-Up Implementation Task)",
  "id": "7-proposed-clean-up-checklist-for-follow-up-implementation-task",
  "level": 2
}, {
  "value": "8. Status &amp; Next Steps",
  "id": "8-status--next-steps",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
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
    strong: "strong",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "ai-dev-kit-project-review-repository-hygiene--legacy-clean-up",
        children: "AI Dev Kit Project Review (Repository Hygiene & Legacy Clean-Up)"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Status:"
      }), " Review complete (planning phase only)", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Scope:"
      }), " Read-only survey of ai-dev-kit structure, identifying legacy/duplicated/confusing artefacts and proposing a follow-up clean-up plan.", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Related:"
      }), " FR-039 (AI Dev Kit Project Review and Legacy Clean-Up), E5:S01", ":T39", "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1-top-level-inventory--classification",
      children: "1. Top-Level Inventory & Classification"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Top-level entries (repo root):"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "packages/"
        }), " – ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Frameworks SoT"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "packages/frameworks/numbering-versioning"
            }), " – Numbering & Versioning framework (canonical versioning docs)."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "packages/frameworks/workflow-mgt"
            }), " – Workflow Management framework (RW/UKW/CMW, validators, scripts)."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "packages/frameworks/kanban"
            }), " – Kanban framework (governance, templates, examples)."]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Other framework packages (e.g. document lifecycle, debug path) – framework-specific SoT."
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "docs/"
        }), " – ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Dev-kit-local specialisation + book material"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "docs/architecture/standards-and-adrs/"
            }), " – Dev-kit-local policies/ADRs and book-adjacent docs."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "docs/changelog-and-release-notes/"
            }), " – Dev-kit’s own changelog archive (implementation of framework pattern)."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "docs/project-management/kanban/"
            }), " – Dev-kit’s Kanban instance (epics/stories/tasks/board)."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Additional book/authoring files (e.g. “for-dummies-…” markdown) – ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "book project content"
            }), ", not framework."]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "src/"
        }), " – ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Dev-kit-local code"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "src/fynd_deals/version.py"
            }), " – Dev-kit version file (legacy path but now canonical for dev-kit)."]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "scripts/"
        }), " – ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Scripts/misc tooling"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "scripts/documentation"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "scripts/frameworks"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "scan_tasks_for_moscow.py"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "validate_cli.py"
            }), ", etc."]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Other:", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "rw-config.yaml"
            }), " – RW configuration (paths, schema)."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "CHANGELOG.md"
            }), " + ", (0,jsx_runtime.jsx)(_components.code, {
              children: "docs/changelog-and-release-notes/changelog-archive"
            }), " – Dev-kit changelog system."]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "High-level classification:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Framework SoT:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "packages/frameworks/*"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Dev-kit specialisation:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/architecture/standards-and-adrs/*"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/project-management/kanban/*"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "rw-config.yaml"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "src/fynd_deals/version.py"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Book/authoring content:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/documentation/*"
        }), ", author checklists, outlines."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Potential legacy/overlap hotspots:"
        }), " older copies of policies under ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/architecture/standards-and-adrs"
        }), ", older RW/UKW docs, scripts under ", (0,jsx_runtime.jsx)(_components.code, {
          children: "scripts/"
        }), " that predate the framework versions."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "2-framework-package-sanity-pass-conceptual",
      children: "2. Framework Package Sanity Pass (Conceptual)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "21-numbering--versioning-packagesframeworksnumbering-versioning",
      children: ["2.1 Numbering & Versioning (", (0,jsx_runtime.jsx)(_components.code, {
        children: "packages/frameworks/numbering-versioning"
      }), ")"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Canonical:"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "versioning-policy.md"
            }), " – primary schema definition."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "versioning-strategy.md"
            }), " – canonical strategy (ordering, timestamps, traceability)."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "README.md"
            }), " – package-level overview."]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Observations:"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Dev-kit-local policy (", (0,jsx_runtime.jsx)(_components.code, {
              children: "docs/architecture/standards-and-adrs/dev-kit-versioning-policy.md"
            }), ") correctly positions itself as a ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "specialisation"
            }), " of this framework."]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "There is some repeated explanation (e.g., dual-version model, SemVer mapping) now present in both framework and dev-kit docs by design."
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Potential legacy:"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Any older references in dev-kit ADRs that predate the refined framework docs should be treated as ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "historic examples"
            }), ", not canonical."]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "22-workflow-management-packagesframeworksworkflow-mgt",
      children: ["2.2 Workflow Management (", (0,jsx_runtime.jsx)(_components.code, {
        children: "packages/frameworks/workflow-mgt"
      }), ")"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Canonical:"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "KB/Documentation/Developer_Docs/vwmp/release-workflow-agent-execution.md"
            }), " – RW agent execution guide."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "KB/Documentation/Developer_Docs/vwmp/update-kanban-workflow-agent-execution.md"
            }), " – UKW agent execution guide."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "scripts/validation/*"
            }), " – branch context, changelog, semver validators."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "scripts/version/semver_converter.py"
            }), " – SemVer mapping logic."]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Potential legacy:"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Older “reference” RW docs (if any) outside the ", (0,jsx_runtime.jsx)(_components.code, {
              children: "KB/Documentation/Developer_Docs/vwmp"
            }), " path should be treated as ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "background material"
            }), " and cross-linked or archived to avoid confusion."]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "23-kanban-framework-packagesframeworkskanban",
      children: ["2.3 Kanban Framework (", (0,jsx_runtime.jsx)(_components.code, {
        children: "packages/frameworks/kanban"
      }), ")"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Canonical:"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "policies/kanban-governance-policy.md"
            }), " – framework-level governance."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "templates/*"
            }), " – epic/story/task and board guide templates."]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Example docs referenced from governance."
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Potential legacy:"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Any older examples/templates that predate discrete Task docs, S00/S01 repository stories, or perpetual tasks may be considered ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "legacy examples"
            }), " and either:", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "Wrapped in a “historic patterns” section, or"
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "Archived into a clearly-marked “legacy” area if they are no longer recommended."
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "3-dev-kit-vs-framework-duplication-high-level",
      children: "3. Dev-Kit vs Framework Duplication (High-Level)"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "31-policydoc-duplication",
      children: "3.1 Policy/Doc Duplication"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Versioning:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Framework: ", (0,jsx_runtime.jsx)(_components.code, {
              children: "packages/frameworks/numbering-versioning/versioning-policy.md"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "versioning-strategy.md"
            }), "."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Dev-kit: ", (0,jsx_runtime.jsx)(_components.code, {
              children: "docs/architecture/standards-and-adrs/dev-kit-versioning-policy.md"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "dev-kit-versioning-cookbook.md"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "dual-versioning-package-managers.md"
            }), "."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Pattern:"
            }), " correct “SoT + specialisation” split, but overlapping explanations can be confusing if readers don’t see the relationship clearly."]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "RW workflow:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Framework: RW agent execution guide under ", (0,jsx_runtime.jsx)(_components.code, {
              children: "packages/frameworks/workflow-mgt/KB/Documentation/Developer_Docs/vwmp/"
            }), "."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Dev-kit: ", (0,jsx_runtime.jsx)(_components.code, {
              children: ".cursorrules"
            }), " and ADRs reference RW behaviour and constraints."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Pattern:"
            }), " dev-kit adds project-level rules (e.g. “RW only for commits/pushes”) on top of framework behaviour."]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Kanban governance:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Framework: ", (0,jsx_runtime.jsx)(_components.code, {
              children: "packages/frameworks/kanban/policies/kanban-governance-policy.md"
            }), "."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Dev-kit: ", (0,jsx_runtime.jsx)(_components.code, {
              children: "docs/project-management/kanban/kboard.md"
            }), " + any dev-kit-local governance ADRs."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Pattern:"
            }), " governance SoT in framework, dev-kit board/docs as an instance."]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "32-scripts",
      children: "3.2 Scripts"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["There is an expected overlap between:", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "packages/frameworks/workflow-mgt/scripts/*"
            }), " – framework-level scripts (validators, converters, kanban update)."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "scripts/*"
            }), " – dev-kit project-level scripts (document installers, package build/publish, utility scanners)."]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Potential legacy/fat:"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Older one-off scripts under ", (0,jsx_runtime.jsx)(_components.code, {
              children: "scripts/"
            }), " that replicate behaviour now encapsulated in the framework scripts."]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "These should be explicitly tagged as “legacy/one-shot” in the clean-up phase or removed if truly obsolete."
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "4-kanban--workflow-documentation-review-high-level",
      children: "4. Kanban & Workflow Documentation Review (High-Level)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "41-kanban-docsproject-managementkanban",
      children: ["4.1 Kanban (", (0,jsx_runtime.jsx)(_components.code, {
        children: "docs/project-management/kanban"
      }), ")"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Current state:"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "kboard.md"
            }), " implemented with MoSCOW sections and explicit board/guide split via ", (0,jsx_runtime.jsx)(_components.code, {
              children: "kanban-board-guide.md"
            }), "."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Epic/Story/Task docs under ", (0,jsx_runtime.jsx)(_components.code, {
              children: "epics/Epic-N/..."
            }), " using discrete task docs for newer work (e.g. FR Repo in Epic 5)."]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Legacy risks:"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Older epics/stories may still:", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "Use embedded tasks instead of discrete Task docs."
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "Lack version anchors or abstract spaces."
              }), "\n"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Any earlier versions of the board/guide (if present) should be marked as ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "historic"
            }), "."]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "42-rwukwcmw-docs",
      children: "4.2 RW/UKW/CMW Docs"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Canonical RW/UKW docs"
        }), " live under workflow mgt’s ", (0,jsx_runtime.jsx)(_components.code, {
          children: "KB/Documentation/Developer_Docs/vwmp/"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Dev-kit’s ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".cursorrules"
        }), " and local ADRs correctly reference those, but:", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Any old RW how-to documents elsewhere should be:", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "Linked to the canonical guides, or"
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "Archived as historical design notes."
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "5-versioning--changelog-hygiene-high-level",
      children: "5. Versioning & Changelog Hygiene (High-Level)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Version file & config:"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "src/fynd_deals/version.py"
            }), " – single source for internal version (", (0,jsx_runtime.jsx)(_components.code, {
              children: "RC.EPIC.STORY.TASK+BUILD"
            }), ")."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "rw-config.yaml"
            }), " – correctly points to version file, changelog locations, and Kanban root."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "semver-registry.yaml"
            }), " – registry for SemVer mapping (registry-based mode)."]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Changelog:"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "CHANGELOG.md"
            }), " + ", (0,jsx_runtime.jsx)(_components.code, {
              children: "docs/changelog-and-release-notes/changelog-archive/CHANGELOG_v*.md"
            }), " implement the two-layer pattern and respect immutability of ", (0,jsx_runtime.jsx)(_components.code, {
              children: "Release Date"
            }), "."]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Legacy risk:"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Any early changelog files or alternative logs (if present) that predate this pattern should be clearly marked as legacy and excluded from new releases."
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "6-scripts--miscellaneous-fat-high-level",
      children: "6. Scripts & Miscellaneous Fat (High-Level)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Core tooling:"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Workflow validators and version converters under ", (0,jsx_runtime.jsx)(_components.code, {
              children: "packages/frameworks/workflow-mgt/scripts"
            }), "."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["RW/UKW integration scripts (e.g. ", (0,jsx_runtime.jsx)(_components.code, {
              children: "update_kanban_docs.py"
            }), ")."]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Project utilities:"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Scripts in ", (0,jsx_runtime.jsx)(_components.code, {
              children: "scripts/documentation"
            }), " and ", (0,jsx_runtime.jsx)(_components.code, {
              children: "scripts/frameworks"
            }), " for building/uploading packages, installing frameworks into adopters, etc."]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "These are useful but should be clearly documented as project utilities rather than framework core."
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Potential legacy/experimental:"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Standalone helpers like ", (0,jsx_runtime.jsx)(_components.code, {
              children: "scan_tasks_for_moscow.py"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "validate_cli.py"
            }), ":", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["Useful, but may be better grouped under an ", (0,jsx_runtime.jsx)(_components.code, {
                  children: "internal-tools/"
                }), " or ", (0,jsx_runtime.jsx)(_components.code, {
                  children: "examples/"
                }), " area, or flagged as experimental."]
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "7-proposed-clean-up-checklist-for-follow-up-implementation-task",
      children: "7. Proposed Clean-Up Checklist (For Follow-Up Implementation Task)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The following items are ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "not executed yet"
      }), "; they define the next task’s scope."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Clarify SoT vs specialisation in docs:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["In dev-kit-local policies under ", (0,jsx_runtime.jsx)(_components.code, {
              children: "docs/architecture/standards-and-adrs/"
            }), ", add brief “Based on framework X” notes where missing and link directly to the corresponding framework files."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Where dev-kit docs fully duplicate framework content, collapse them into:", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "A short “dev-kit application” section, plus"
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "Pointers back to framework docs for full detail."
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Mark legacy/historic docs:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Identify older RW/UKW/CMW guides outside ", (0,jsx_runtime.jsx)(_components.code, {
              children: "packages/frameworks/workflow-mgt/KB/Documentation/Developer_Docs/vwmp/"
            }), " and:", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "Add a “Historic / superseded by …” banner, or"
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["Move them into a ", (0,jsx_runtime.jsx)(_components.code, {
                  children: "legacy/"
                }), " or ", (0,jsx_runtime.jsx)(_components.code, {
                  children: "archive/"
                }), " subfolder with a README explaining their status."]
              }), "\n"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Do the same for any early Kanban board/guide variants or outdated governance texts."
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Align Kanban docs to discrete Task doc pattern:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["For older epics/stories still using embedded tasks:", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "Create discrete Task docs using the current templates."
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "Update checklists to reference these docs."
              }), "\n"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Ensure each Task has a version anchor and forensic marker where practical."
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Normalize versioning/changelog references:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Ensure all documentation that discusses versioning points to:", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "Framework versioning policy/strategy as SoT."
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "Dev-kit versioning policy as “application of framework”."
              }), "\n"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Mark any ad-hoc or partial changelog files as historical and stop adding new entries to them."
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsxs)(_components.strong, {
              children: ["Done (2026-06-04, UXR-018 / E05:S09", ":T12", "):"]
            }), " Retired ", (0,jsx_runtime.jsx)(_components.code, {
              children: "docs/changelog/"
            }), " and ", (0,jsx_runtime.jsx)(_components.code, {
              children: "docs/knowledge/changelog-and-release-notes/"
            }), "; single pillar ", (0,jsx_runtime.jsx)(_components.code, {
              children: "docs/changelog-and-release-notes/"
            }), " — see ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ai-dev-kit/docs/maintenance/changelog-directory-consolidation-manifest",
              children: "manifest"
            }), "."]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Rationalise scripts:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Tag or move:", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "Core RW/UKW scripts under the workflow mgt package (no change)."
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["Dev-kit-specific scripts to a clearly-named ", (0,jsx_runtime.jsx)(_components.code, {
                  children: "scripts/internal/"
                }), " or similar."]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["Legacy/one-shot scripts into a ", (0,jsx_runtime.jsx)(_components.code, {
                  children: "scripts/legacy/"
                }), " folder (or remove after confirming no longer used)."]
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Prepare adopter-facing documentation:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Create or update a concise “Repo Structure for Adopters” doc explaining:", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "Where frameworks live."
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "Which dev-kit docs are examples vs canonical policies."
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "Which scripts adopters are expected to use or copy."
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Define implementation task:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Create a new implementation Task and FR (under appropriate epic/story) to execute this clean-up checklist, referencing:", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "FR-039."
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "This review document."
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "8-status--next-steps",
      children: "8. Status & Next Steps"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "This review:"
        }), " complete at a high level; it intentionally favours structure and clarity over exhaustive enumeration of every file."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Next:"
        }), " create an implementation-focused FR/Task that executes the clean-up checklist above (moving/removing/tagging files and updating docs to reflect SoT vs specialisation explicitly)."]
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