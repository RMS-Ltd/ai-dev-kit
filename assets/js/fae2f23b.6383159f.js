"use strict";
(self["webpackChunkportal"] = self["webpackChunkportal"] || []).push([["6903"], {
61418(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_project_management_kanban_epics_epic_03_story_02_versioning_cookbook_and_examples_t_11_implement_semver_mapping_for_rw_md_fae_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-project-management-kanban-epics-epic-03-story-02-versioning-cookbook-and-examples-t-11-implement-semver-mapping-for-rw-md-fae.json
var site_docs_project_management_kanban_epics_epic_03_story_02_versioning_cookbook_and_examples_t_11_implement_semver_mapping_for_rw_md_fae_namespaceObject = JSON.parse('{"id":"project-management/kanban/epics/epic-03/story-02-versioning-cookbook-and-examples/T11-implement-semver-mapping-for-rw","title":"T11 – Implement SemVer Mapping for Release Workflow","description":"Task IDS02:T11","source":"@site/../docs/project-management/kanban/epics/epic-03/story-02-versioning-cookbook-and-examples/T11-implement-semver-mapping-for-rw.md","sourceDirName":"project-management/kanban/epics/epic-03/story-02-versioning-cookbook-and-examples","slug":"/project-management/kanban/epics/epic-03/story-02-versioning-cookbook-and-examples/T11-implement-semver-mapping-for-rw","permalink":"/ai-dev-kit/docs/project-management/kanban/epics/epic-03/story-02-versioning-cookbook-and-examples/T11-implement-semver-mapping-for-rw","draft":false,"unlisted":false,"editUrl":"https://github.com/RMS-Ltd/ai-dev-kit/tree/main/docs/../docs/project-management/kanban/epics/epic-03/story-02-versioning-cookbook-and-examples/T11-implement-semver-mapping-for-rw.md","tags":[],"version":"current","frontMatter":{"lifecycle":"evergreen","ttl_days":null,"created_at":"2026-01-19T15:15:00.000Z","expires_at":null,"housekeeping_policy":"keep"},"sidebar":"docsSidebar","previous":{"title":"Epic 3, Story 2, Task 10: Integrate PVW into Release Workflow agent execution guide","permalink":"/ai-dev-kit/docs/project-management/kanban/epics/epic-03/story-02-versioning-cookbook-and-examples/T10-integrate-pvw-into-release-workflow-agent-execution-guide"},"next":{"title":"T12 – Implement ADR-002 Task-Touch SemVer Mapping Mode","permalink":"/ai-dev-kit/docs/project-management/kanban/epics/epic-03/story-02-versioning-cookbook-and-examples/T12-implement-task-touch-semver-mapping-mode"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ../docs/project-management/kanban/epics/epic-03/story-02-versioning-cookbook-and-examples/T11-implement-semver-mapping-for-rw.md


const frontMatter = {
	lifecycle: 'evergreen',
	ttl_days: null,
	created_at: new Date('2026-01-19T15:15:00.000Z'),
	expires_at: null,
	housekeeping_policy: 'keep'
};
const contentTitle = 'T11 – Implement SemVer Mapping for Release Workflow';

const assets = {

};



const toc = [{
  "value": "Scope",
  "id": "scope",
  "level": 2
}, {
  "value": "Inputs",
  "id": "inputs",
  "level": 2
}, {
  "value": "Deliverable",
  "id": "deliverable",
  "level": 2
}, {
  "value": "Approach",
  "id": "approach",
  "level": 2
}, {
  "value": "Phase 1: Core Implementation",
  "id": "phase-1-core-implementation",
  "level": 3
}, {
  "value": "Phase 2: RW Integration",
  "id": "phase-2-rw-integration",
  "level": 3
}, {
  "value": "Phase 3: Testing &amp; Validation",
  "id": "phase-3-testing--validation",
  "level": 3
}, {
  "value": "Phase 4: Documentation",
  "id": "phase-4-documentation",
  "level": 3
}, {
  "value": "Acceptance Criteria",
  "id": "acceptance-criteria",
  "level": 2
}, {
  "value": "Technical Details",
  "id": "technical-details",
  "level": 2
}, {
  "value": "Hybrid Approach Algorithm",
  "id": "hybrid-approach-algorithm",
  "level": 3
}, {
  "value": "Edge Cases",
  "id": "edge-cases",
  "level": 3
}, {
  "value": "Dependencies",
  "id": "dependencies",
  "level": 2
}, {
  "value": "Related Work",
  "id": "related-work",
  "level": 2
}, {
  "value": "Notes",
  "id": "notes",
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
    input: "input",
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
        id: "t11--implement-semver-mapping-for-release-workflow",
        children: "T11 – Implement SemVer Mapping for Release Workflow"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Task ID:"
      }), " E03:S02", ":T11", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Status:"
      }), " COMPLETE", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Priority:"
      }), " HIGH", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Estimated Effort:"
      }), " Medium", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Created:"
      }), " 2026-01-19", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Last updated:"
      }), " 2026-01-19 (v0.3.2.11+4 – GitHub release creation with SemVer)", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Version:"
      }), " v0.3.2.11+4"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "scope",
      children: "Scope"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Implement the SemVer mapping system (proposed in ", (0,jsx_runtime.jsx)(_components.code, {
        children: "semver-mapping-proposal.md"
      }), ") to generate external-facing SemVer tags (", (0,jsx_runtime.jsx)(_components.code, {
        children: "MAJOR.MINOR.PATCH+BUILD"
      }), ") alongside internal Kanban-based version tags (", (0,jsx_runtime.jsx)(_components.code, {
        children: "RC.EPIC.STORY.TASK+BUILD"
      }), ") in Release Workflow Step 11."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem:"
      }), " Internal versioning (", (0,jsx_runtime.jsx)(_components.code, {
        children: "RC.EPIC.STORY.TASK+BUILD"
      }), ") can appear to regress when switching between epics/stories (e.g., ", (0,jsx_runtime.jsx)(_components.code, {
        children: "0.6.7.12+3"
      }), " → ", (0,jsx_runtime.jsx)(_components.code, {
        children: "0.4.6.9+1"
      }), "), which is problematic for GitHub releases and user perception. External SemVer must only increase monotonically."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution:"
      }), " Implement registry-based SemVer mapping that converts internal versions to monotonic SemVer using the Hybrid Approach (first-seen Epic/Story → sequential MINOR/PATCH assignment)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "inputs",
      children: "Inputs"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Proposal:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/architecture/standards-and-adrs/semver-mapping-proposal.md"
        }), " (Hybrid Approach recommended)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Implementation Impact:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/architecture/standards-and-adrs/semver-mapping-implementation-impact.md"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Current RW Step 11:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".cursorrules"
        }), " (RW trigger section, Step 11)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Version File:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "src/fynd_deals/version.py"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Historical Git Tags:"
        }), " All existing ", (0,jsx_runtime.jsx)(_components.code, {
          children: "v0.*.*.*+*"
        }), " tags for registry initialization"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "deliverable",
      children: "Deliverable"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Core Implementation:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "SemVer Registry File:"
          }), " ", (0,jsx_runtime.jsx)(_components.code, {
            children: "semver-registry.yaml"
          }), " (project root)"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Tracks Epic→MINOR and (Epic,Story)→PATCH mappings per RC"
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["YAML structure: ", (0,jsx_runtime.jsx)(_components.code, {
              children: "rc_0: { epic_to_minor: {...}, story_to_patch: {...} }"
            })]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "SemVer Converter Script:"
          }), " ", (0,jsx_runtime.jsx)(_components.code, {
            children: "packages/frameworks/workflow-mgt/scripts/version/semver_converter.py"
          })]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Function: ", (0,jsx_runtime.jsx)(_components.code, {
              children: "convert_internal_to_semver(rc, epic, story, task, build) -> (major, minor, patch, build)"
            })]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Function: ", (0,jsx_runtime.jsx)(_components.code, {
              children: "load_semver_registry() -> dict"
            })]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Function: ", (0,jsx_runtime.jsx)(_components.code, {
              children: "update_semver_registry(rc, epic, story, minor, patch) -> dict"
            })]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Function: ", (0,jsx_runtime.jsx)(_components.code, {
              children: "save_semver_registry(registry) -> None"
            })]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Implements Hybrid Approach algorithm"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Registry Migration Script:"
          }), " ", (0,jsx_runtime.jsx)(_components.code, {
            children: "packages/frameworks/workflow-mgt/scripts/version/build_semver_registry.py"
          })]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "One-time script to build initial registry from existing git tags"
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Parses all ", (0,jsx_runtime.jsx)(_components.code, {
              children: "v0.*.*.*+*"
            }), " tags"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Generates ", (0,jsx_runtime.jsx)(_components.code, {
              children: "semver-registry.yaml"
            }), " with first-seen mappings"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "RW Step 11 Enhancement:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Calculate SemVer from internal version using registry"
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Create dual tags:", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["Internal: ", (0,jsx_runtime.jsx)(_components.code, {
                  children: "v0.6.7.101+24"
                }), " (backward compatibility)"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["SemVer: ", (0,jsx_runtime.jsx)(_components.code, {
                  children: "v0.X.X+X"
                }), " (for GitHub releases)"]
              }), "\n"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Update registry with new mappings"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Save registry to version control"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Documentation Updates:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Update ", (0,jsx_runtime.jsx)(_components.code, {
              children: ".cursorrules"
            }), " RW Step 11 with SemVer generation instructions"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Update ", (0,jsx_runtime.jsx)(_components.code, {
              children: "packages/frameworks/workflow-mgt/cursorrules-rw-trigger-section.md"
            }), " template"]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Update RW execution guide (if exists)"
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Update ", (0,jsx_runtime.jsx)(_components.code, {
              children: "rw-config.yaml"
            }), " schema to include ", (0,jsx_runtime.jsx)(_components.code, {
              children: "semver_registry_file"
            }), " path"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Validation Script:"
          }), " ", (0,jsx_runtime.jsx)(_components.code, {
            children: "packages/frameworks/workflow-mgt/scripts/validation/validate_semver_monotonic.py"
          })]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Verifies SemVer increases across all releases"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Validates registry consistency"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Can be run periodically or in CI/CD"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "approach",
      children: "Approach"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "phase-1-core-implementation",
      children: "Phase 1: Core Implementation"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Create Registry Structure:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Design ", (0,jsx_runtime.jsx)(_components.code, {
              children: "semver-registry.yaml"
            }), " format (per RC scope)"]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Create empty registry file template"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Implement Converter:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Implement Hybrid Approach algorithm:", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "MAJOR = RC (direct mapping)"
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "MINOR = First-seen Epic number (sequential, per RC)"
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "PATCH = First-seen Story number (sequential, per RC)"
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "BUILD = Preserved from internal version"
              }), "\n"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Registry lookup/assignment logic"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Registry update/save functions"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Build Migration Script:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Parse all existing git tags"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Track first appearance of each (RC, Epic) and (RC, Epic, Story)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Generate initial registry"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Validate monotonic increases"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "phase-2-rw-integration",
      children: "Phase 2: RW Integration"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Update RW Step 11:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Load registry before tag creation"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Convert internal version to SemVer"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Create dual tags (internal + SemVer)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Update registry with new mappings"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Save registry"
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Update ", (0,jsx_runtime.jsx)(_components.code, {
              children: ".cursorrules"
            }), " instructions"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Update RW Step 12:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Push both tags to remote"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Verify both tags pushed successfully"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "phase-3-testing--validation",
      children: "Phase 3: Testing & Validation"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Test Converter:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Test with sample internal versions"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Verify registry assignment logic"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Test RC transitions (registry reset)"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Validate Historical Releases:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Run migration script on existing tags"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Verify SemVer increases monotonically"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Check for edge cases (Epic switching, out-of-order)"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Integration Testing:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Test RW Step 11 with SemVer generation"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Verify dual tagging works"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Verify registry persistence"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "phase-4-documentation",
      children: "Phase 4: Documentation"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Update Policy Documents:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Update ", (0,jsx_runtime.jsx)(_components.code, {
              children: "dev-kit-versioning-policy.md"
            }), " with SemVer mapping section"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Update framework ", (0,jsx_runtime.jsx)(_components.code, {
              children: "versioning-policy.md"
            }), " (CRITICAL - framework package)"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Update framework ", (0,jsx_runtime.jsx)(_components.code, {
              children: "versioning-strategy.md"
            }), " (CRITICAL - framework package)"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Update framework ", (0,jsx_runtime.jsx)(_components.code, {
              children: "IMPLEMENTATION_GUIDE.md"
            }), " (CRITICAL - framework package)"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Update RW Documentation:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Document dual tagging in RW execution guide"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Update examples to show both tags"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Document registry management"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "acceptance-criteria",
      children: "Acceptance Criteria"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      className: "contains-task-list",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "semver-registry.yaml"
        }), " structure created and documented"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "semver_converter.py"
        }), " implemented with Hybrid Approach algorithm"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "build_semver_registry.py"
        }), " migration script created and tested"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Initial registry built from historical git tags"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "SemVer increases monotonically across all historical releases (validated)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "RW Step 11 enhanced to generate SemVer tag alongside internal tag"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Dual tagging tested and working (internal + SemVer tags created)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Registry updates correctly during RW execution"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Registry persists across releases (version controlled)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".cursorrules"
        }), " RW Step 11 updated with SemVer generation instructions"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "rw-config.yaml"
        }), " schema updated with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "semver_registry_file"
        }), " path"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Validation script created (", (0,jsx_runtime.jsx)(_components.code, {
          children: "validate_semver_monotonic.py"
        }), ")"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Versioning policy documents updated (dev-kit + framework package)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Framework package documentation updated (CRITICAL - portable package)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "RW documentation updated with dual tagging"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "All tests passing"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Edge cases handled (RC transitions, Epic switching, out-of-order)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "technical-details",
      children: "Technical Details"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hybrid-approach-algorithm",
      children: "Hybrid Approach Algorithm"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Mapping Formula:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "MAJOR = RC                          (direct mapping: 0 → 0, 1 → 1, etc.)\nMINOR = First-seen Epic number      (Epic 6 first → MINOR=1, Epic 9 next → MINOR=2)\nPATCH = First-seen Story number     (Story 7 in Epic 6 → PATCH=1, Story 8 next → PATCH=2)\nBUILD = Internal BUILD number        (preserved from internal version)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Registry Structure:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "rc_0:\n  epic_to_minor:\n    6: 1    # Epic 6 → MINOR 1 (first appearance)\n    9: 2    # Epic 9 → MINOR 2 (second appearance)\n    4: 3    # Epic 4 → MINOR 3 (third appearance)\n  story_to_patch:\n    (6, 7): 1    # Epic 6, Story 7 → PATCH 1\n    (9, 1): 2    # Epic 9, Story 1 → PATCH 2\n    (4, 6): 3    # Epic 4, Story 6 → PATCH 3\n\nrc_1:\n  epic_to_minor: {}    # Empty until RC=1 releases start\n  story_to_patch: {}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example Conversion:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Internal: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "0.6.7.101+24"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Registry lookup: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "(0,6)"
        }), " → MINOR=1, ", (0,jsx_runtime.jsx)(_components.code, {
          children: "(0,6,7)"
        }), " → PATCH=1"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["SemVer: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "0.1.1+24"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "edge-cases",
      children: "Edge Cases"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "RC Transitions:"
        }), " Registry resets when RC increments (RC=0 → RC=1)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Epic Switching:"
        }), " Returning to previous Epic reuses MINOR (maintains semantic continuity)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Out-of-Order Releases:"
        }), " Registry assigns based on first appearance, not internal order"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Tag Conflicts:"
        }), " Check existing tags before creating SemVer tag"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "dependencies",
      children: "Dependencies"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Proposal Document:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "semver-mapping-proposal.md"
        }), " (approved)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Implementation Impact:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "semver-mapping-implementation-impact.md"
        }), " (analysis complete)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "RW Step 11:"
        }), " Currently working (needs enhancement)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Git Tags:"
        }), " Historical tags needed for registry initialization"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "related-work",
      children: "Related Work"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Proposal:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/architecture/standards-and-adrs/semver-mapping-proposal.md"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Impact Analysis:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/architecture/standards-and-adrs/semver-mapping-implementation-impact.md"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Dual Versioning Guide:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/architecture/standards-and-adrs/dual-versioning-package-managers.md"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "RW Step 11:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".cursorrules"
        }), " (RW trigger section)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Versioning Policy:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/architecture/standards-and-adrs/dev-kit-versioning-policy.md"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "notes",
      children: "Notes"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Critical Framework Package Updates:"
      }), "\nThe ", (0,jsx_runtime.jsx)(_components.code, {
        children: "packages/frameworks/numbering-versioning/"
      }), " package is a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "portable framework"
      }), " used by other projects. It ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "must"
      }), " include SemVer mapping documentation:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "versioning-policy.md"
        }), " - Add SemVer mapping section"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "versioning-strategy.md"
        }), " - Add dual versioning strategy"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "IMPLEMENTATION_GUIDE.md"
        }), " - Add SemVer mapping implementation steps"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Why Critical:"
      }), " Framework consumers need this to implement SemVer mapping in their projects."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Backward Compatibility:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Internal tags remain (backward compatible)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "SemVer tags are additive (new functionality)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "No breaking changes to existing workflow"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Version Anchor:"
      }), " v0.3.2.11+0 (Task creation)"]
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