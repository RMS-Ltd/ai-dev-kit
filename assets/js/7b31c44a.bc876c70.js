"use strict";
(self["webpackChunkportal"] = self["webpackChunkportal"] || []).push([["47717"], {
87800(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_project_management_kanban_fr_br_fr_045_adr_002_task_touch_derived_mapping_md_7b3_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-project-management-kanban-fr-br-fr-045-adr-002-task-touch-derived-mapping-md-7b3.json
var site_docs_project_management_kanban_fr_br_fr_045_adr_002_task_touch_derived_mapping_md_7b3_namespaceObject = JSON.parse('{"id":"project-management/kanban/fr-br/FR-045-adr-002-task-touch-derived-mapping","title":"Feature Request: ADR-002 – Task-Touch Derived Mapping (Kanban → SemVer)","description":"Type: Feature Request (FR)","source":"@site/../docs/project-management/kanban/fr-br/FR-045-adr-002-task-touch-derived-mapping.md","sourceDirName":"project-management/kanban/fr-br","slug":"/project-management/kanban/fr-br/FR-045-adr-002-task-touch-derived-mapping","permalink":"/ai-dev-kit/docs/project-management/kanban/fr-br/FR-045-adr-002-task-touch-derived-mapping","draft":false,"unlisted":false,"editUrl":"https://github.com/RMS-Ltd/ai-dev-kit/tree/main/docs/../docs/project-management/kanban/fr-br/FR-045-adr-002-task-touch-derived-mapping.md","tags":[],"version":"current","frontMatter":{"lifecycle":"evergreen","ttl_days":null,"created_at":"2026-02-26T00:00:00.000Z","expires_at":null,"housekeeping_policy":"keep"},"sidebar":"docsSidebar","previous":{"title":"Feature Request: RW Temporary Execution Log for Recovery and Forensics","permalink":"/ai-dev-kit/docs/project-management/kanban/fr-br/FR-044-rw-temporary-execution-log-for-recovery-and-forensics"},"next":{"title":"Feature Request: Dual-Version Mode Requires Task-Touch SemVer in RW","permalink":"/ai-dev-kit/docs/project-management/kanban/fr-br/FR-046-rw-semver-tag-task-touch-mode"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ../docs/project-management/kanban/fr-br/FR-045-adr-002-task-touch-derived-mapping.md


const frontMatter = {
	lifecycle: 'evergreen',
	ttl_days: null,
	created_at: new Date('2026-02-26T00:00:00.000Z'),
	expires_at: null,
	housekeeping_policy: 'keep'
};
const contentTitle = 'Feature Request: ADR-002 – Task-Touch Derived Mapping (Kanban → SemVer)';

const assets = {

};



const toc = [{
  "value": "Recurrence (2026-06-04)",
  "id": "recurrence-2026-06-04",
  "level": 2
}, {
  "value": "Summary",
  "id": "summary",
  "level": 2
}, {
  "value": "Description",
  "id": "description",
  "level": 2
}, {
  "value": "What functionality is desired?",
  "id": "what-functionality-is-desired",
  "level": 3
}, {
  "value": "What problem does this solve?",
  "id": "what-problem-does-this-solve",
  "level": 3
}, {
  "value": "What is the use case?",
  "id": "what-is-the-use-case",
  "level": 3
}, {
  "value": "Who would benefit from this feature?",
  "id": "who-would-benefit-from-this-feature",
  "level": 3
}, {
  "value": "Requirements",
  "id": "requirements",
  "level": 2
}, {
  "value": "Functional Requirements",
  "id": "functional-requirements",
  "level": 3
}, {
  "value": "Non-Functional Requirements",
  "id": "non-functional-requirements",
  "level": 3
}, {
  "value": "Scope Analysis",
  "id": "scope-analysis",
  "level": 2
}, {
  "value": "Use Cases",
  "id": "use-cases",
  "level": 2
}, {
  "value": "Primary Use Case",
  "id": "primary-use-case",
  "level": 3
}, {
  "value": "Additional Use Cases",
  "id": "additional-use-cases",
  "level": 3
}, {
  "value": "Acceptance Criteria",
  "id": "acceptance-criteria",
  "level": 2
}, {
  "value": "Dependencies",
  "id": "dependencies",
  "level": 2
}, {
  "value": "Intake Decision",
  "id": "intake-decision",
  "level": 2
}, {
  "value": "Notes",
  "id": "notes",
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
    h3: "h3",
    header: "header",
    hr: "hr",
    input: "input",
    li: "li",
    ol: "ol",
    p: "p",
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
        id: "feature-request-adr-002--task-touch-derived-mapping-kanban--semver",
        children: "Feature Request: ADR-002 – Task-Touch Derived Mapping (Kanban → SemVer)"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Type:"
      }), " Feature Request (FR)", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Status:"
      }), " IMPLEMENTED ✅", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Priority:"
      }), " HIGH", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Created:"
      }), " 2026-02-26", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Last updated:"
      }), " 2026-06-05 (wave 3 closure — ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "v0.3.2.12+5"
      }), "; verification signed off via RW)\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Version:"
      }), " v0.3.2.12+5", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Code:"
      }), " FR-045", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Implementation Task (delivery):"
      }), " ", (0,jsx_runtime.jsxs)(_components.a, {
        href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-03/story-02-versioning-cookbook-and-examples/T12-implement-task-touch-semver-mapping-mode",
        children: ["E03:S02", ":T12"]
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Historical anchor:"
      }), " ", (0,jsx_runtime.jsxs)(_components.a, {
        href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-05/story-01-fr-repo/T45-adr-002-task-touch-derived-mapping",
        children: ["E05:S01", ":T45"]
      }), " (FR repository registry)", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Related:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/project-management/kanban/fr-br/BR-061-semver-task-touch-counter-increments-too-often",
        children: "BR-061"
      }), " · ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/project-management/kanban/fr-br/BR-073-semver-task-touch-collision-retrospective-fix",
        children: "BR-073"
      }), " · ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/project-management/kanban/fr-br/FR-046-rw-semver-tag-task-touch-mode",
        children: "FR-046"
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "GitHub Issue:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://github.com/RMS-Ltd/ai-dev-kit/issues/18",
        children: "#18"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "recurrence-2026-06-04",
      children: "Recurrence (2026-06-04)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Prior closure:"
      }), " IMPLEMENTED (converter + tests shipped under ", (0,jsx_runtime.jsxs)(_components.strong, {
        children: ["E05:S01", ":T45"]
      }), " / ", (0,jsx_runtime.jsxs)(_components.strong, {
        children: ["E03:S02", ":T12"]
      }), " hardening)."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Why reopened:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "semver-registry.yaml"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "task_touch_mode.mapping_history"
      }), " again violates the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "1:1"
      }), " invariant (", (0,jsx_runtime.jsxs)(_components.strong, {
        children: ["FR-045", ":NF02"]
      }), "): multiple distinct internal versions share the same SemVer ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "PATCH"
      }), " and ", (0,jsx_runtime.jsxs)(_components.strong, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "MAJOR.MINOR.PATCH"
        }), " core"]
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "PATCH"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Internal versions"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "SemVer cores"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "870"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "0.5.9.12+3"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "0.6.9.17+1"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["both ", (0,jsx_runtime.jsx)(_components.code, {
              children: "0.4.870"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "869"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "0.5.1.76+2"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "0.5.9.12+2"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["both ", (0,jsx_runtime.jsx)(_components.code, {
              children: "0.4.869"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "806"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "0.6.9.5+4"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "0.6.9.6+1"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["both ", (0,jsx_runtime.jsx)(_components.code, {
              children: "0.4.806"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "789"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "0.2.16.4+8"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "0.2.16.10+1"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["both ", (0,jsx_runtime.jsx)(_components.code, {
              children: "0.4.789"
            })]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Observed symptom:"
      }), " Git primary tag ", (0,jsx_runtime.jsx)(_components.code, {
        children: "v0.4.870"
      }), " on ", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "d6053e5"
        })
      }), " while latest install release ", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "0.6.9.17+1"
        })
      }), " maps to ", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "0.4.870+1"
        })
      }), " at ", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "a492597"
        })
      }), " — external consumers cannot rely on monotonic unique SemVer per internal release."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Delivery track:"
      }), " ", (0,jsx_runtime.jsxs)(_components.a, {
        href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-03/story-02-versioning-cookbook-and-examples/T12-implement-task-touch-semver-mapping-mode",
        children: ["E03:S02", ":T12"]
      }), " + ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/implementation-cycles/IPP-E03S02T12-task-touch-semver-collision-hardening",
        children: "IPP-E3S2T12"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsxs)(_components.strong, {
        children: ["Fix attempted (2026-06-04, E03:S02", ":T12", " wave 2):"]
      }), " PATCH + SemVer-core injective finalize; registry repaired per ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/maintenance/semver-registry-collision-repair-2026-06-04",
        children: "semver-registry-collision-repair-2026-06-04.md"
      }), ". Git tags not moved."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Verification (2026-06-05, wave 3):"
      }), " V1–V5 PASS on ", (0,jsx_runtime.jsx)(_components.code, {
        children: "dev"
      }), " @ ", (0,jsx_runtime.jsx)(_components.code, {
        children: "70b7242"
      }), " — injective registry (counter ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "903"
      }), ", 173 entries, zero collisions). Evidence: ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/maintenance/semver-verification-evidence-E03S02T12-wave3",
        children: "semver-verification-evidence-E03S02T12-wave3.md"
      }), ". ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Closed"
      }), " via ", (0,jsx_runtime.jsx)(_components.code, {
        children: "RW E03:S02:T12 --art"
      }), " ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "v0.3.2.12+5"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Define and implement ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "ADR-002: Task-Touch Derived Mapping"
      }), " that derives Semantic Versioning (SemVer) from the internal ", (0,jsx_runtime.jsx)(_components.code, {
        children: "RC.EPIC.STORY.TASK+BUILD"
      }), " version using a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "global task-touch counter"
      }), ", providing a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "strictly incrementing, 1:1 traceable SemVer"
      }), " sequence suitable for package managers."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "description",
      children: "Description"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "what-functionality-is-desired",
      children: "What functionality is desired?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A new dual-versioning strategy where:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "MAJOR"
        }), " = ", (0,jsx_runtime.jsx)(_components.code, {
          children: "RC"
        }), " (release candidate)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "MINOR"
        }), " = number of epics signed off (per RC)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "PATCH"
        }), " = ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "task-touch counter"
        }), ": increments whenever a task is “touched” by a release (new task or return to an existing task)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Optional ", (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "+BUILD"
          })
        }), " metadata mirrors the internal BUILD component for traceability."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["This is the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Task-Touch Derived Mapping"
      }), " described in ADR-002 and should be available as a first-class mapping mode in the Numbering & Versioning framework and Release Workflow."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "what-problem-does-this-solve",
      children: "What problem does this solve?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Existing mapping strategies either:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Produce ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "non-monotonic"
        }), " SemVer sequences when work jumps between epics/stories (confusing for npm/PyPI and release ordering), or"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Require ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "independent SemVer"
        }), " detached from Kanban, sacrificing direct traceability."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Task-touch mapping delivers:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Strictly increasing SemVer (", (0,jsx_runtime.jsx)(_components.code, {
          children: "PATCH"
        }), " always increases)."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A deterministic, 1:1 mapping between internal version and external SemVer."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["A clear mental model: ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "“each task touch → one PATCH bump”"
        }), "."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "what-is-the-use-case",
      children: "What is the use case?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Frameworks and adopter projects (like XOforge) using AI Dev Kit’s dual-versioning want:", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Kanban-aligned internal versions for forensic traceability."
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Package-manager-friendly SemVer for public distribution (npm, pub.dev, PyPI, etc.) that ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "never goes backwards"
            }), "."]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Automatic mapping, not manual SemVer decisions per release."
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "who-would-benefit-from-this-feature",
      children: "Who would benefit from this feature?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "AI Dev Kit itself (canonical SemVer story for frameworks)."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Any consumer project that:", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Uses the ", (0,jsx_runtime.jsx)(_components.code, {
              children: "RC.EPIC.STORY.TASK+BUILD"
            }), " schema internally."]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Publishes packages to SemVer-enforcing registries."
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "requirements",
      children: "Requirements"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "functional-requirements",
      children: "Functional Requirements"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      className: "contains-task-list",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.input, {
            type: "checkbox",
            checked: true,
            disabled: true
          }), " ", (0,jsx_runtime.jsxs)(_components.strong, {
            children: ["FR-045", ":R01"]
          }), " – Implement a ", (0,jsx_runtime.jsx)(_components.code, {
            children: "task_touch"
          }), " SemVer mapping mode in the Numbering & Versioning framework:"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "MAJOR = RC."
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "MINOR = count of epics signed off (per RC)."
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "PATCH = global task-touch counter."
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Optional ", (0,jsx_runtime.jsx)(_components.code, {
              children: "+BUILD"
            }), " = internal BUILD for the current version."]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.input, {
            type: "checkbox",
            checked: true,
            disabled: true
          }), " ", (0,jsx_runtime.jsxs)(_components.strong, {
            children: ["FR-045", ":R02"]
          }), " – Persist task-touch counter in a canonical location (e.g. version file and/or ", (0,jsx_runtime.jsx)(_components.code, {
            children: "semver-registry.yaml"
          }), ") and ensure it increments exactly once per RW release."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.input, {
            type: "checkbox",
            checked: true,
            disabled: true
          }), " ", (0,jsx_runtime.jsxs)(_components.strong, {
            children: ["FR-045", ":R03"]
          }), " – Provide a converter function (e.g. ", (0,jsx_runtime.jsx)(_components.code, {
            children: "get_semver_task_touch(...)"
          }), ") that returns SemVer (with or without ", (0,jsx_runtime.jsx)(_components.code, {
            children: "+BUILD"
          }), ") from an internal version string."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.input, {
            type: "checkbox",
            checked: true,
            disabled: true
          }), " ", (0,jsx_runtime.jsxs)(_components.strong, {
            children: ["FR-045", ":R04"]
          }), " – Document the mapping in dual-versioning docs (Numbering & Versioning framework) and ADR-002."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.input, {
            type: "checkbox",
            checked: true,
            disabled: true
          }), " ", (0,jsx_runtime.jsxs)(_components.strong, {
            children: ["FR-045", ":R05"]
          }), " – Expose mapping mode via configuration (e.g. ", (0,jsx_runtime.jsx)(_components.code, {
            children: "semver_mapping_strategy: task_touch"
          }), " in ", (0,jsx_runtime.jsx)(_components.code, {
            children: "rw-config.yaml"
          }), ")."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "non-functional-requirements",
      children: "Non-Functional Requirements"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      className: "contains-task-list",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", (0,jsx_runtime.jsxs)(_components.strong, {
          children: ["FR-045", ":NF01"]
        }), " – ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Monotonicity:"
        }), " SemVer must be strictly incrementing (no backwards PATCH values)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", (0,jsx_runtime.jsxs)(_components.strong, {
          children: ["FR-045", ":NF02"]
        }), " – ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Traceability:"
        }), " Mapping must be 1:1 between internal and SemVer values."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", (0,jsx_runtime.jsxs)(_components.strong, {
          children: ["FR-045", ":NF03"]
        }), " – ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Compatibility:"
        }), " Mapping must be compatible with SemVer expectations in package managers."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "scope-analysis",
      children: "Scope Analysis"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem Domain:"
      }), " Numbering & Versioning Framework, Dual-Versioning for Package Managers", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Affected Areas:"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      className: "contains-task-list",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "Documentation"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "Testing"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "Versioning utilities / converters"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "Backend/API"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Frontend/UI"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Database/Schema"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "Other: Configuration and registry management"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Estimated Complexity:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      className: "contains-task-list",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Simple (1-3 days)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "Medium (1 week)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Complex (2+ weeks)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Very Complex (1+ month)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "use-cases",
      children: "Use Cases"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "primary-use-case",
      children: "Primary Use Case"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Internal version advances across multiple epics/stories/tasks (e.g. ", (0,jsx_runtime.jsx)(_components.code, {
          children: "0.7.3.25+4"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "0.3.2.12+2"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "0.7.3.25+6"
        }), ")."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Each Release Workflow run increments the ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "task-touch counter"
        }), " and derives SemVer:", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "0.7.3.25+4"
            }), " → ", (0,jsx_runtime.jsx)(_components.code, {
              children: "0.1.84+4"
            })]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "0.3.2.12+2"
            }), " → ", (0,jsx_runtime.jsx)(_components.code, {
              children: "0.1.85+2"
            })]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "0.7.3.25+6"
            }), " → ", (0,jsx_runtime.jsx)(_components.code, {
              children: "0.1.86+2"
            })]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "SemVer sequences are strictly increasing and consistent across all epics/stories."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Package managers see a clean SemVer stream, while internal versions still encode Kanban E/S/T/BUILD."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "additional-use-cases",
      children: "Additional Use Cases"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["XOforge and other adopters configure ", (0,jsx_runtime.jsx)(_components.code, {
          children: "semver_mapping_strategy: task_touch"
        }), " to:", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Get monotonic SemVer tags."
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Keep internal versions Kanban-aligned."
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
          checked: true,
          disabled: true
        }), " ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "AC1:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "task_touch"
        }), " mapping is implemented and configurable for projects via ", (0,jsx_runtime.jsx)(_components.code, {
          children: "rw-config.yaml"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "AC2:"
        }), " Converters (", (0,jsx_runtime.jsx)(_components.code, {
          children: "get_semver_task_touch(...)"
        }), ") are available and tested, producing strictly increasing SemVer for real-world sequences."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "AC3:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "semver-registry.yaml"
        }), " (or equivalent) supports task-touch metadata as needed."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "AC4:"
        }), " Dual-versioning documentation is updated with Task-Touch Derived Mapping (ADR-002), including worked examples."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "AC5:"
        }), " At least one adopter project (e.g. XOforge) can switch to ", (0,jsx_runtime.jsx)(_components.code, {
          children: "task_touch"
        }), " SemVer mapping without breaking CW/RW or package publishing."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "dependencies",
      children: "Dependencies"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Blocks:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Clean RW support for SemVer tagging in ", (0,jsx_runtime.jsx)(_components.code, {
          children: "task_touch"
        }), " mode (FR-046)."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Package Version Workflow (PVW) alignment when using SemVer derived from task-touch mapping."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Blocked By:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "None (this FR defines ADR-002 itself)."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Related Work:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "ADR-002: Task-Touch Derived Mapping — Kanban to SemVer (GitHub issue #18)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Dual-versioning docs in the Numbering & Versioning framework."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "intake-decision",
      children: "Intake Decision"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Intake Status:"
      }), " REOPENED (2026-06-04 — collision recurrence)", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Intake Date:"
      }), " 2026-02-26", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Intake By:"
      }), " AI Agent (ai-dev-kit)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Decision Flow Results:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      className: "contains-task-list",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "Story Match Found: Epic 5, Story 1 → Task 45"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "New Story Created: Epic 5, Story 1 → Task 45"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "New Epic Created: Epic 5, Story 1, Task 45"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Assigned To:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Epic: Epic 5 (Documentation Management and Maintenance)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Story: Story 1 (FR Repository)"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Task: Task 45 (E05:S01", ":T45", ")"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Version: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "v0.5.1.45+2"
        }), " (IMPLEMENTED)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Kanban Links:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Epic: ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-05/",
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "docs/project-management/kanban/epics/epic-05/epic-05.md"
          })
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Story: ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-05/story-01-fr-repo",
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "docs/project-management/kanban/epics/epic-05/story-01-fr-repo.md"
          })
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Task: ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-05/story-01-fr-repo/T45-adr-002-task-touch-derived-mapping",
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "docs/project-management/kanban/epics/epic-05/story-01-fr-repo/T45-adr-002-task-touch-derived-mapping.md"
          })
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "notes",
      children: "Notes"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "REOPENED 2026-06-04:"
        }), " Collision recurrence in live registry; delivery continues under ", (0,jsx_runtime.jsxs)(_components.strong, {
          children: ["E03:S02", ":T12"]
        }), " (not new intake under closed ", (0,jsx_runtime.jsxs)(_components.strong, {
          children: ["E05", ":S01"]
        }), ")."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["✅ Original implementation remains the canonical ADR-002 anchor (", (0,jsx_runtime.jsxs)(_components.strong, {
          children: ["E05:S01", ":T45"]
        }), "); reopen scopes ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "injective mapping enforcement"
        }), ", registry repair, and RW finalize guards."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["✅ Implementation is complete in ", (0,jsx_runtime.jsx)(_components.code, {
          children: "packages/frameworks/workflow-mgt/scripts/version/semver_converter.py"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["✅ Configuration available via ", (0,jsx_runtime.jsx)(_components.code, {
          children: "semver_mapping_strategy: task_touch"
        }), " in ", (0,jsx_runtime.jsx)(_components.code, {
          children: "rw-config.yaml"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["✅ Comprehensive test suite in ", (0,jsx_runtime.jsx)(_components.code, {
          children: "test_task_touch_mapping.py"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["✅ Migration utility available in ", (0,jsx_runtime.jsx)(_components.code, {
          children: "migrate_to_task_touch.py"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ ADR-002 fully documented with examples and migration guidance"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "references",
      children: "References"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["GitHub Issue ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://github.com/RMS-Ltd/ai-dev-kit/issues/18",
          children: "#18"
        }), "."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Dev Kit Versioning Policy and dual-versioning docs (Numbering & Versioning framework)."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsxs)(_components.em, {
        children: ["This feature request follows the Kanban Framework FR template and is anchored as FR-045 in the FR repository story (E05:S01", ":T45", ")."]
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