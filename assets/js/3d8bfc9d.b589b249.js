"use strict";
(self["webpackChunkportal"] = self["webpackChunkportal"] || []).push([["97131"], {
43192(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_project_management_kanban_epics_epic_04_story_14_kanban_framework_maintenance_t_01_planning_spec_tests_impl_md_3d8_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-project-management-kanban-epics-epic-04-story-14-kanban-framework-maintenance-t-01-planning-spec-tests-impl-md-3d8.json
var site_docs_project_management_kanban_epics_epic_04_story_14_kanban_framework_maintenance_t_01_planning_spec_tests_impl_md_3d8_namespaceObject = JSON.parse('{"id":"project-management/kanban/epics/epic-04/story-14-kanban-framework-maintenance/T01-planning-spec-tests-impl","title":"E04:S14:T01 – Planning: Spec, Tests, Implementation Plan","description":"Task: Update Packaged RW to Handle UKW Context and Perpetual Tasks","source":"@site/../docs/project-management/kanban/epics/epic-04/story-14-kanban-framework-maintenance/T01-planning-spec-tests-impl.md","sourceDirName":"project-management/kanban/epics/epic-04/story-14-kanban-framework-maintenance","slug":"/project-management/kanban/epics/epic-04/story-14-kanban-framework-maintenance/T01-planning-spec-tests-impl","permalink":"/ai-dev-kit/docs/project-management/kanban/epics/epic-04/story-14-kanban-framework-maintenance/T01-planning-spec-tests-impl","draft":false,"unlisted":false,"editUrl":"https://github.com/RMS-Ltd/ai-dev-kit/tree/main/docs/../docs/project-management/kanban/epics/epic-04/story-14-kanban-framework-maintenance/T01-planning-spec-tests-impl.md","tags":[],"version":"current","frontMatter":{},"sidebar":"docsSidebar","previous":{"title":"Epic 4, Story 13: Kanban Board Enhancement - MoSCOW Prioritized Task View","permalink":"/ai-dev-kit/docs/project-management/kanban/epics/epic-04/story-13-kanban-board-moscow-prioritized-task-view"},"next":{"title":"T02 – Restore RC Review Planning Artifacts","permalink":"/ai-dev-kit/docs/project-management/kanban/epics/epic-04/story-14-kanban-framework-maintenance/T02-restore-rc-review-artifacts"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ../docs/project-management/kanban/epics/epic-04/story-14-kanban-framework-maintenance/T01-planning-spec-tests-impl.md


const frontMatter = {};
const contentTitle = 'E04:S14 – Planning: Spec, Tests, Implementation Plan';

const assets = {

};



const toc = [{
  "value": "1. Specification",
  "id": "1-specification",
  "level": 2
}, {
  "value": "1.1 Goal",
  "id": "11-goal",
  "level": 3
}, {
  "value": "1.2 Functional Requirements",
  "id": "12-functional-requirements",
  "level": 3
}, {
  "value": "1.3 Non-Functional Requirements",
  "id": "13-non-functional-requirements",
  "level": 3
}, {
  "value": "1.4 Out of Scope",
  "id": "14-out-of-scope",
  "level": 3
}, {
  "value": "2. Test Design",
  "id": "2-test-design",
  "level": 2
}, {
  "value": "2.1 Test Categories",
  "id": "21-test-categories",
  "level": 3
}, {
  "value": "2.2 Test Cases",
  "id": "22-test-cases",
  "level": 3
}, {
  "value": "2.3 Test Data Strategy",
  "id": "23-test-data-strategy",
  "level": 3
}, {
  "value": "3. Implementation Plan",
  "id": "3-implementation-plan",
  "level": 2
}, {
  "value": "3.1 Phase 1: Validator Core (validate_version_bump.py)",
  "id": "31-phase-1-validator-core-validate_version_bumppy",
  "level": 3
}, {
  "value": "3.2 Phase 2: Tests",
  "id": "32-phase-2-tests",
  "level": 3
}, {
  "value": "3.3 Phase 3: Documentation",
  "id": "33-phase-3-documentation",
  "level": 3
}, {
  "value": "3.4 Dependency Order",
  "id": "34-dependency-order",
  "level": 3
}, {
  "value": "4. Files Modified (As-Implemented)",
  "id": "4-files-modified-as-implemented",
  "level": 2
}, {
  "value": "5. Verification Checklist",
  "id": "5-verification-checklist",
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
    input: "input",
    li: "li",
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
      children: (0,jsx_runtime.jsxs)(_components.h1, {
        id: "e04s14--planning-spec-tests-implementation-plan",
        children: ["E04:S14", ":T01", " – Planning: Spec, Tests, Implementation Plan"]
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Task:"
      }), " Update Packaged RW to Handle UKW Context and Perpetual Tasks", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Host Task:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-04/story-14-kanban-framework-maintenance/T01-planning-spec-tests-impl",
        children: "T01-planning-spec-tests-impl.md"
      }), " (E04:S14", ":T01", ")", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Status:"
      }), " COMPLETE (v0.4.14.1+1)", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Planning doc created:"
      }), " 2026-02-22"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1-specification",
      children: "1. Specification"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "11-goal",
      children: "1.1 Goal"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Packaged RW framework must handle UKW context detection and perpetual task attribution so that UKW-triggered releases are attributed to perpetual tasks (e.g. E02:S16", ":T03", ") instead of arbitrary feature tasks, and build-number warnings are suppressed for perpetual tasks."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "12-functional-requirements",
      children: "1.2 Functional Requirements"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "ID"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Requirement"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Source"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FR-1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RW Step 2 detects UKW context (user ran \"UKW\" then \"RW\")"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Task doc"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FR-2"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["UKW releases auto-attributed to perpetual task (discover task via ", (0,jsx_runtime.jsx)(_components.code, {
              children: "perpetual_task: true"
            }), " / ", (0,jsx_runtime.jsx)(_components.code, {
              children: "Task Type: Perpetual Maintenance"
            }), ", use its E:S", ":T", ", increment BUILD)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Task doc"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FR-3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Perpetual task flag checked in RW Step 2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Task doc"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FR-4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Build warning suppression for perpetual tasks (high BUILD allowed)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Task doc"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FR-5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Validator accepts version for perpetual tasks (T101+, or doc flag)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Task doc"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FR-6"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Task ID extraction prefers canonical ", (0,jsx_runtime.jsx)(_components.code, {
              children: "**Value:**"
            }), " section over other E:S", ":T", " mentions (e.g. Progress)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Derived"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FR-7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Perpetual task docs relaxed for Input/Deliverable (optional)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Derived"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "13-non-functional-requirements",
      children: "1.3 Non-Functional Requirements"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Backward compatible: normal (non-UKW, non-perpetual) releases unchanged"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Framework users can implement perpetual tasks from documented pattern"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Validation scripts work with both packaged and adopter projects (via ", (0,jsx_runtime.jsx)(_components.code, {
          children: "rw-config.yaml"
        }), ")"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "14-out-of-scope",
      children: "1.4 Out of Scope"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "UKW workflow implementation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "New perpetual task creation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Non-RW workflows"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "2-test-design",
      children: "2. Test Design"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "21-test-categories",
      children: "2.1 Test Categories"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Category"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Purpose"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Unit – Task ID extraction"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Canonical section wins over Progress/other text"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Unit – Perpetual task detection"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "By task number (≥100) and by doc content"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Unit – Field validation"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Relaxed for perpetual tasks"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Integration – validate_version_bump"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "End-to-end validation for perpetual tasks"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "22-test-cases",
      children: "2.2 Test Cases"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "TC"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Name"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Behavior under test"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "test_task_id_extraction_prefers_canonical_section"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "extract_task_id_canonical()"
            }), " returns E02:S16", ":T03", " from ", (0,jsx_runtime.jsx)(_components.code, {
              children: "**Value:**"
            }), " when Progress mentions E04:S16", ":T05"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "test_perpetual_task_detection_by_task_number"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "`is_perpetual_task(101"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "test_perpetual_task_detection_by_doc_content"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Doc with ", (0,jsx_runtime.jsx)(_components.code, {
              children: "Task Type: Perpetual Maintenance"
            }), " or ", (0,jsx_runtime.jsx)(_components.code, {
              children: "perpetual_task: true"
            }), " → perpetual even for T05/T37"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "test_validate_version_bump_passes_for_perpetual_task"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Version 0.6.7.101+31 + T101 task doc + story → validation passes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "test_perpetual_task_relaxed_field_validation"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["T101 doc without Input/Deliverable → no field errors when ", (0,jsx_runtime.jsx)(_components.code, {
              children: "relax_for_perpetual=True"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "test_validate_version_bump_build_increment_perpetual"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Same task, BUILD 32 (incremented) → pass"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "test_validate_version_bump_passes_for_t103"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Version 0.6.7.103+1 + T103 (RW Maintenance) task doc → validation passes"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "23-test-data-strategy",
      children: "2.3 Test Data Strategy"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Temp layout:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "tmpdir"
        }), " with version file, ", (0,jsx_runtime.jsx)(_components.code, {
          children: "rw-config.yaml"
        }), ", kanban layout (", (0,jsx_runtime.jsx)(_components.code, {
          children: "Epic-N/Story-M-.../Txxx-..."
        }), ")"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Story/task docs:"
        }), " Minimal content with required fields (Status, Task ID canonical section, optional flags)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Version file:"
        }), " Realistic ", (0,jsx_runtime.jsx)(_components.code, {
          children: "VERSION_*"
        }), " values for 0.6.7.101+31, 0.6.7.101+32, 0.6.7.103+1"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "3-implementation-plan",
      children: "3. Implementation Plan"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "31-phase-1-validator-core-validate_version_bumppy",
      children: "3.1 Phase 1: Validator Core (validate_version_bump.py)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Action"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Deliverable"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1.1"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Add ", (0,jsx_runtime.jsx)(_components.code, {
              children: "is_perpetual_task(task_number, task_content?)"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T2, T3"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1.2"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Add ", (0,jsx_runtime.jsx)(_components.code, {
              children: "extract_task_id_canonical(content)"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1.3"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Update ", (0,jsx_runtime.jsx)(_components.code, {
              children: "validate_task_doc_fields()"
            }), " with ", (0,jsx_runtime.jsx)(_components.code, {
              children: "relax_for_perpetual"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T5"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1.4"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Integrate perpetual detection into ", (0,jsx_runtime.jsx)(_components.code, {
              children: "validate_version_bump()"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T4, T6, T7"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1.5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ensure BUILD increment logic allows high BUILD for perpetual tasks"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T6"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "32-phase-2-tests",
      children: "3.2 Phase 2: Tests"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Action"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Deliverable"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2.1"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Add ", (0,jsx_runtime.jsx)(_components.code, {
              children: "test_validate_version_bump.py"
            }), " with T1–T7"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All tests passing"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "33-phase-3-documentation",
      children: "3.3 Phase 3: Documentation"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Action"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Deliverable"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3.1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Update RW execution guide (UKW context, perpetual handling)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "release-workflow-agent-execution.md"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3.2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Update .cursorrules (if packaged) with UKW attribution rules"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".cursorrules"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3.3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Update task doc and changelog"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T01 doc, CHANGELOG"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "34-dependency-order",
      children: "3.4 Dependency Order"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "1.1 is_perpetual_task\n1.2 extract_task_id_canonical\n    ↓\n1.3 validate_task_doc_fields (relax)\n1.4 validate_version_bump integration\n1.5 BUILD increment behavior\n    ↓\n2.1 Tests\n    ↓\n3.1–3.3 Docs\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "4-files-modified-as-implemented",
      children: "4. Files Modified (As-Implemented)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "packages/frameworks/workflow-mgt/scripts/validation/validate_version_bump.py"
        }), " – core logic"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "packages/frameworks/workflow-mgt/scripts/validation/test_validate_version_bump.py"
        }), " – tests"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "RW execution guide, .cursorrules, T01 task doc (per task deliverables)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "5-verification-checklist",
      children: "5. Verification Checklist"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      className: "contains-task-list",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "All 7 tests pass"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "validate_version_bump.py"
        }), " runs on ai-dev-kit with T101 (UKW) and T103 (RW) versions"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "RW Step 2 (in .cursorrules) documents UKW context and perpetual attribution"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "No regressions for normal (non-perpetual) releases"]
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