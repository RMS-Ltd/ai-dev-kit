"use strict";
(self["webpackChunkportal"] = self["webpackChunkportal"] || []).push([["36699"], {
71540(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_project_management_kanban_epics_epic_06_story_08_ai_dev_kit_cli_tool_md_247_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-project-management-kanban-epics-epic-06-story-08-ai-dev-kit-cli-tool-md-247.json
var site_docs_project_management_kanban_epics_epic_06_story_08_ai_dev_kit_cli_tool_md_247_namespaceObject = JSON.parse('{"id":"project-management/kanban/epics/epic-06/story-08-ai-dev-kit-cli-tool","title":"Story 008 – ai-dev-kit CLI Tool","description":"Status: COMPLETE ✅","source":"@site/../docs/project-management/kanban/epics/epic-06/story-08-ai-dev-kit-cli-tool.md","sourceDirName":"project-management/kanban/epics/epic-06","slug":"/project-management/kanban/epics/epic-06/story-08-ai-dev-kit-cli-tool","permalink":"/ai-dev-kit/docs/project-management/kanban/epics/epic-06/story-08-ai-dev-kit-cli-tool","draft":false,"unlisted":false,"editUrl":"https://github.com/RMS-Ltd/ai-dev-kit/tree/main/docs/../docs/project-management/kanban/epics/epic-06/story-08-ai-dev-kit-cli-tool.md","tags":[],"version":"current","frontMatter":{"lifecycle":"evergreen","ttl_days":null,"created_at":"2025-12-22T14:50:00.000Z","expires_at":null,"housekeeping_policy":"keep"},"sidebar":"docsSidebar","previous":{"title":"Epic 6, Story 8, Task 13: Testing, validation, and PyPI packaging","permalink":"/ai-dev-kit/docs/project-management/kanban/epics/epic-06/story-08-ai-dev-kit-cli-tool/T13-testing-validation-and-pypi-packaging"},"next":{"title":"Epic 6, Story 9, Task 1: Greenfield installation process (FR-080)","permalink":"/ai-dev-kit/docs/project-management/kanban/epics/epic-06/story-09-ai-dev-kit-installation-and-adopter-integration/T01-greenfield-installation-process-fr080"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ../docs/project-management/kanban/epics/epic-06/story-08-ai-dev-kit-cli-tool.md


const frontMatter = {
	lifecycle: 'evergreen',
	ttl_days: null,
	created_at: new Date('2025-12-22T14:50:00.000Z'),
	expires_at: null,
	housekeeping_policy: 'keep'
};
const contentTitle = 'Story 008 – ai-dev-kit CLI Tool';

const assets = {

};



const toc = [{
  "value": "Task Checklist",
  "id": "task-checklist",
  "level": 2
}, {
  "value": "Overview",
  "id": "overview",
  "level": 2
}, {
  "value": "Goal",
  "id": "goal",
  "level": 2
}, {
  "value": "Dependencies",
  "id": "dependencies",
  "level": 2
}, {
  "value": "References",
  "id": "references",
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
    header: "header",
    hr: "hr",
    input: "input",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "story-008--ai-dev-kit-cli-tool",
        children: "Story 008 – ai-dev-kit CLI Tool"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Status:"
      }), " COMPLETE ✅", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Priority:"
      }), " HIGH", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Estimated Effort:"
      }), " Large", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Created:"
      }), " 2025-12-22", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Last updated:"
      }), " 2026-01-16 (v0.6.8.13+1, migrated from v0.6.8.13+1 – Story renumbered from S07 to S08 as part of repository story migration)", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Version:"
      }), " v0.6.8.13+1", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Code:"
      }), " E6S08"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Note:"
      }), " This story was renumbered from S07 to S08 as part of the repository story abstract space resolution (E09:S01", ":T08", ")."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "task-checklist",
      children: "Task Checklist"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      className: "contains-task-list",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", (0,jsx_runtime.jsxs)(_components.strong, {
          children: ["E06:S08", ":T00", " – Story creation and FR-030 intake"]
        }), " ✅ COMPLETE (v0.6.8.0+1)", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Task: ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-06/story-08-ai-dev-kit-cli-tool/T00-story-creation-and-fr-030-intake",
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "T00-story-creation-and-fr-030-intake"
              })
            })]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", (0,jsx_runtime.jsxs)(_components.strong, {
          children: ["E06:S08", ":T01", " – CLI tool architecture and base structure"]
        }), " ✅ COMPLETE (v0.6.8.1+1)", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Task: ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-06/story-08-ai-dev-kit-cli-tool/T01-cli-tool-architecture-and-base-structure",
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "T01-cli-tool-architecture-and-base-structure"
              })
            })]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", (0,jsx_runtime.jsxs)(_components.strong, {
          children: ["E06:S08", ":T02", " – Core commands (init, install, update)"]
        }), " ✅ COMPLETE (v0.6.8.2+1)", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Task: ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-06/story-08-ai-dev-kit-cli-tool/T02-core-commands-init-install-update",
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "T02-core-commands-init-install-update"
              })
            })]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", (0,jsx_runtime.jsxs)(_components.strong, {
          children: ["E06:S08", ":T03", " – Status and checking commands (check, status, list)"]
        }), " ✅ COMPLETE (v0.6.8.3+1)", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Task: ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-06/story-08-ai-dev-kit-cli-tool/T03-status-and-checking-commands-check-status-list",
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "T03-status-and-checking-commands-check-status-list"
              })
            })]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", (0,jsx_runtime.jsxs)(_components.strong, {
          children: ["E06:S08", ":T04", " – Backend abstraction layer design"]
        }), " ✅ COMPLETE (v0.6.8.4+1)", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Task: ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-06/story-08-ai-dev-kit-cli-tool/T04-backend-abstraction-layer-design",
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "T04-backend-abstraction-layer-design"
              })
            })]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", (0,jsx_runtime.jsxs)(_components.strong, {
          children: ["E06:S08", ":T05", " – Git submodule backend implementation"]
        }), " ✅ COMPLETE (v0.6.8.5+1)", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Task: ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-06/story-08-ai-dev-kit-cli-tool/T05-git-submodule-backend-implementation",
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "T05-git-submodule-backend-implementation"
              })
            })]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", (0,jsx_runtime.jsxs)(_components.strong, {
          children: ["E06:S08", ":T06", " – Git subtree backend implementation"]
        }), " ✅ COMPLETE (v0.6.8.6+1)", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Task: ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-06/story-08-ai-dev-kit-cli-tool/T06-git-subtree-backend-implementation",
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "T06-git-subtree-backend-implementation"
              })
            })]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", (0,jsx_runtime.jsxs)(_components.strong, {
          children: ["E06:S08", ":T07", " – Package manager backend implementation (npm, pip)"]
        }), " ✅ COMPLETE (v0.6.8.7+1)", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Task: ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-06/story-08-ai-dev-kit-cli-tool/T07-package-manager-backend-implementation-npm-pip",
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "T07-package-manager-backend-implementation-npm-pip"
              })
            })]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", (0,jsx_runtime.jsxs)(_components.strong, {
          children: ["E06:S08", ":T08", " – Configuration management (.ai-dev-kit.yaml)"]
        }), " ✅ COMPLETE (v0.6.8.8+1)", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Task: ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-06/story-08-ai-dev-kit-cli-tool/T08-configuration-management-ai-dev-kityaml",
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "T08-configuration-management-ai-dev-kityaml"
              })
            })]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", (0,jsx_runtime.jsxs)(_components.strong, {
          children: ["E06:S08", ":T09", " – Error handling and validation"]
        }), " ✅ COMPLETE (v0.6.8.9+1)", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Task: ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-06/story-08-ai-dev-kit-cli-tool/T09-error-handling-and-validation",
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "T09-error-handling-and-validation"
              })
            })]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", (0,jsx_runtime.jsxs)(_components.strong, {
          children: ["E06:S08", ":T10", " – Migration utilities (copy-paste → dependencies)"]
        }), " ✅ COMPLETE (v0.6.8.10+1)", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Task: ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-06/story-08-ai-dev-kit-cli-tool/T10-migration-utilities-copy-paste-dependencies",
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "T10-migration-utilities-copy-paste-dependencies"
              })
            })]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", (0,jsx_runtime.jsxs)(_components.strong, {
          children: ["E06:S08", ":T11", " – Remove command (complements FR-008)"]
        }), " ✅ COMPLETE (v0.6.8.11+1)", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Task: ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-06/story-08-ai-dev-kit-cli-tool/T11-remove-command-complements-fr-008",
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "T11-remove-command-complements-fr-008"
              })
            })]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", (0,jsx_runtime.jsxs)(_components.strong, {
          children: ["E06:S08", ":T12", " – Documentation and usage examples"]
        }), " ✅ COMPLETE (v0.6.8.12+1)", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Task: ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-06/story-08-ai-dev-kit-cli-tool/T12-documentation-and-usage-examples",
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "T12-documentation-and-usage-examples"
              })
            })]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", (0,jsx_runtime.jsxs)(_components.strong, {
          children: ["E06:S08", ":T13", " – Testing, validation, and PyPI packaging"]
        }), " ✅ COMPLETE (v0.6.8.13+1)", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Task: ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-06/story-08-ai-dev-kit-cli-tool/T13-testing-validation-and-pypi-packaging",
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "T13-testing-validation-and-pypi-packaging"
              })
            })]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "overview",
      children: "Overview"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Build a unified command-line interface (CLI) tool (", (0,jsx_runtime.jsx)(_components.code, {
        children: "ai-dev-kit"
      }), ") for managing framework dependencies across projects. The CLI provides a single interface for installing, updating, and managing frameworks regardless of the underlying dependency backend (Git submodules, Git subtrees, npm, pip, etc.)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Related Work:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Feature Request:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/fr-br/FR-030-ai-dev-kit-cli-tool",
          children: "FR-030"
        }), " - ai-dev-kit CLI Tool"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Architecture:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/architecture/standards-and-adrs/framework-dependency-architecture.md"
        }), " (Phase 2: CLI Tool)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Design:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/architecture/standards-and-adrs/framework-update-cli-design.md"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "CLI Reference:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/documentation/user-docs/framework-dependency-cli-reference.md"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "goal",
      children: "Goal"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Build a comprehensive CLI tool that:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Provides unified interface for all framework management operations"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Abstracts dependency backend (Git submodules, subtrees, package managers)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Enables automated framework updates"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Supports version management and pinning"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Facilitates migration from copy-paste to dependency model"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Success Criteria:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["CLI tool installable via ", (0,jsx_runtime.jsx)(_components.code, {
          children: "pip install ai-dev-kit"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "All core commands functional (init, install, update, check, status, list, remove, config)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Multiple backend support (Git submodule, Git subtree, npm, pip)"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Configuration management via ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".ai-dev-kit.yaml"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Comprehensive documentation and examples"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Published to PyPI"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "dependencies",
      children: "Dependencies"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Blocks:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Framework dependency management (Phase 2 of framework architecture)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Automated framework updates"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Migration from copy-paste to dependency model"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "FR-008 (Package Uninstall Capabilities) - T11 complements FR-008"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Blocked By:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["E6", ":S01", " (Framework Version Management) - Must establish versioning strategy first"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["E06:S02", ":T01", " (Framework Update Procedures) - Must define update procedures first"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["E06:S08", ":T07", " blocked by E6", ":S01", " (frameworks must be published to npm/pip first)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Coordinates With:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Epic 5 (Documentation Management) - Documentation requirements"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Epic 2 (Workflow Management Framework) - May integrate with RW"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "FR-008 (Package Uninstall Capabilities) - T11 implements remove command"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "references",
      children: "References"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Feature Request:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/fr-br/FR-030-ai-dev-kit-cli-tool",
          children: "FR-030"
        }), " - ai-dev-kit CLI Tool"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Epic 6:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/project-management/kanban/epics/epic-06/epic-06.md"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Architecture:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/architecture/standards-and-adrs/framework-dependency-architecture.md"
        }), " (Phase 2: CLI Tool)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Design:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/architecture/standards-and-adrs/framework-update-cli-design.md"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "CLI Reference:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/documentation/user-docs/framework-dependency-cli-reference.md"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "FR-008:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "FR-008-package-uninstall-capabilities.md"
        }), " (complements T11)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.em, {
        children: "Last updated: 2025-12-22 (v0.6.8.0+0 – Story created and FR-030 intake complete)"
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