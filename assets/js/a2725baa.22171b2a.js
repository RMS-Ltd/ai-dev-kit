"use strict";
(self["webpackChunkportal"] = self["webpackChunkportal"] || []).push([["88771"], {
32257(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_project_management_kanban_epics_epic_03_story_02_versioning_cookbook_and_examples_t_12_implement_task_touch_semver_mapping_mode_md_a27_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-project-management-kanban-epics-epic-03-story-02-versioning-cookbook-and-examples-t-12-implement-task-touch-semver-mapping-mode-md-a27.json
var site_docs_project_management_kanban_epics_epic_03_story_02_versioning_cookbook_and_examples_t_12_implement_task_touch_semver_mapping_mode_md_a27_namespaceObject = JSON.parse('{"id":"project-management/kanban/epics/epic-03/story-02-versioning-cookbook-and-examples/T12-implement-task-touch-semver-mapping-mode","title":"T12 – Implement ADR-002 Task-Touch SemVer Mapping Mode","description":"Task IDS02:T12","source":"@site/../docs/project-management/kanban/epics/epic-03/story-02-versioning-cookbook-and-examples/T12-implement-task-touch-semver-mapping-mode.md","sourceDirName":"project-management/kanban/epics/epic-03/story-02-versioning-cookbook-and-examples","slug":"/project-management/kanban/epics/epic-03/story-02-versioning-cookbook-and-examples/T12-implement-task-touch-semver-mapping-mode","permalink":"/ai-dev-kit/docs/project-management/kanban/epics/epic-03/story-02-versioning-cookbook-and-examples/T12-implement-task-touch-semver-mapping-mode","draft":false,"unlisted":false,"editUrl":"https://github.com/RMS-Ltd/ai-dev-kit/tree/main/docs/../docs/project-management/kanban/epics/epic-03/story-02-versioning-cookbook-and-examples/T12-implement-task-touch-semver-mapping-mode.md","tags":[],"version":"current","frontMatter":{"lifecycle":"evergreen","ttl_days":null,"created_at":"2026-03-07T00:00:00.000Z","expires_at":null,"housekeeping_policy":"keep"},"sidebar":"docsSidebar","previous":{"title":"T11 – Implement SemVer Mapping for Release Workflow","permalink":"/ai-dev-kit/docs/project-management/kanban/epics/epic-03/story-02-versioning-cookbook-and-examples/T11-implement-semver-mapping-for-rw"},"next":{"title":"Story 002 – Versioning Cookbook & Examples","permalink":"/ai-dev-kit/docs/project-management/kanban/epics/epic-03/story-02-versioning-cookbook-and-examples"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ../docs/project-management/kanban/epics/epic-03/story-02-versioning-cookbook-and-examples/T12-implement-task-touch-semver-mapping-mode.md


const frontMatter = {
	lifecycle: 'evergreen',
	ttl_days: null,
	created_at: new Date('2026-03-07T00:00:00.000Z'),
	expires_at: null,
	housekeeping_policy: 'keep'
};
const contentTitle = 'T12 – Implement ADR-002 Task-Touch SemVer Mapping Mode';

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
  "value": "Acceptance Criteria",
  "id": "acceptance-criteria",
  "level": 2
}, {
  "value": "Related Work",
  "id": "related-work",
  "level": 2
}, {
  "value": "Implementation note",
  "id": "implementation-note",
  "level": 2
}, {
  "value": "Regression reopening note (2026-06-04)",
  "id": "regression-reopening-note-2026-06-04",
  "level": 2
}, {
  "value": "Wave 3 verification (2026-06-05)",
  "id": "wave-3-verification-2026-06-05",
  "level": 2
}, {
  "value": "Regression reopening note (2026-04-13)",
  "id": "regression-reopening-note-2026-04-13",
  "level": 2
}, {
  "value": "Planning artifacts (publication)",
  "id": "planning-artifacts-publication",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    br: "br",
    code: "code",
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
        id: "t12--implement-adr-002-task-touch-semver-mapping-mode",
        children: "T12 – Implement ADR-002 Task-Touch SemVer Mapping Mode"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Task ID:"
      }), " E03:S02", ":T12", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Status:"
      }), " COMPLETE", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Priority:"
      }), " HIGH", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Estimated Effort:"
      }), " Medium", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Created:"
      }), " 2026-03-07", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Last updated:"
      }), " 2026-06-05 (wave 3 FBU closure — ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "v0.3.2.12+5"
      }), "; task ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "COMPLETE"
      }), ")\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Version Anchor:"
      }), " v0.3.2.12+5"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Associated FR/BR:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/project-management/kanban/fr-br/FR-045-adr-002-task-touch-derived-mapping",
        children: "FR-045"
      }), " · ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/project-management/kanban/fr-br/FR-046-rw-semver-tag-task-touch-mode",
        children: "FR-046"
      }), " · ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/project-management/kanban/fr-br/BR-061-semver-task-touch-counter-increments-too-often",
        children: "BR-061"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "scope",
      children: "Scope"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Implement ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "ADR-002 / task-touch derived SemVer mapping"
      }), " so external-facing SemVer is ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "strictly monotonic and 1:1"
      }), " with internal ", (0,jsx_runtime.jsx)(_components.code, {
        children: "RC.EPIC.STORY.TASK+BUILD"
      }), " releases."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This task is prompted by a real SemVer tag collision incident (see incident log), demonstrating that the current registry epic/story mapping mode cannot guarantee unique SemVer across tasks within the same Epic/Story."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "inputs",
      children: "Inputs"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "BR-061:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/fr-br/BR-061-semver-task-touch-counter-increments-too-often",
          children: "BR-061"
        }), " — registry counter / PATCH over-increment + tag pressure (", (0,jsx_runtime.jsx)(_components.strong, {
          children: "implementation bug"
        }), ", not intake)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["FR-045: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/project-management/kanban/fr-br/FR-045-adr-002-task-touch-derived-mapping.md"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["FR repo anchor task: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/project-management/kanban/epics/epic-05/story-01-fr-repo/T45-adr-002-task-touch-derived-mapping.md"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["FR-046 anchor interaction target: ", (0,jsx_runtime.jsxs)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-05/story-01-fr-repo/T46-rw-semver-tag-task-touch-mode",
          children: ["E05:S01", ":T46"]
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Incident log: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/architecture/standards-and-adrs/semver-tag-collision-incident-2026-03-07.md"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Existing converter (Mode A): ", (0,jsx_runtime.jsx)(_components.code, {
          children: "packages/frameworks/workflow-mgt/scripts/version/semver_converter.py"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Existing registry: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "semver-registry.yaml"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Existing config: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "rw-config.yaml"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Planning artifact (IPP): ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/implementation-cycles/IPP-E03S02T12-task-touch-semver-collision-hardening",
          children: "IPP-E3S2T12-task-touch-semver-collision-hardening"
        }), " — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "wave 3 verification plan"
        }), " (§8; revised 2026-06-05)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Repair report: ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/maintenance/semver-registry-collision-repair-2026-06-04",
          children: "semver-registry-collision-repair-2026-06-04.md"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Wave 3 evidence: ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/maintenance/semver-verification-evidence-E03S02T12-wave3",
          children: "semver-verification-evidence-E03S02T12-wave3.md"
        }), " (V1–V5 PASS, 2026-06-05)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "deliverable",
      children: "Deliverable"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["A new mapping mode selectable via configuration (e.g. ", (0,jsx_runtime.jsx)(_components.code, {
            children: "semver_mapping_strategy: task_touch"
          }), " or equivalent) that:"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "MAJOR = RC"
            })
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "MINOR = count of epics signed off (per RC)"
            }), " (as per ADR-002)"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "PATCH = global task-touch counter"
            }), " (increments ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "once per finalized release"
            }), ", not on every read/convert — see ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "BR-061"
            }), ")"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Optional ", (0,jsx_runtime.jsx)(_components.code, {
              children: "+BUILD"
            }), " mirroring internal BUILD for traceability"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Canonical storage for task-touch counter and mapping history (file-based, version controlled)"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Converter implementation and tests demonstrating:"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Strictly monotonic external SemVer"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "No collisions across tasks or perpetual tasks"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Deterministic mapping for a given repository history"
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
        }), " ", "Task-touch SemVer mapping mode is implemented and documented."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "Mapping is configurable via ", (0,jsx_runtime.jsx)(_components.code, {
          children: "rw-config.yaml"
        }), " (or documented equivalent)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "Mapping is monotonic and collision-free for real dev-kit sequences (including perpetual tasks)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "BR-061:"
        }), " PATCH / ", (0,jsx_runtime.jsx)(_components.code, {
          children: "task_touch_counter"
        }), " does ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "not"
        }), " advance on repeated ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "read-only"
        }), " SemVer derivation for the same release; behaviour covered by tests (idempotent convert or single explicit increment site)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "Converter tests include scenarios that previously collide under registry epic/story mapping."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "Backfill/migration guidance exists for initializing counters from existing tag history (audit/repair scripts + maintenance doc, 2026-06-04 wave 2)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "related-work",
      children: "Related Work"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/fr-br/FR-045-adr-002-task-touch-derived-mapping",
          children: "FR-045"
        }), " (", (0,jsx_runtime.jsx)(_components.strong, {
          children: "IMPLEMENTED"
        }), " — wave 3 closure ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "v0.3.2.12+5"
        }), ")"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/fr-br/FR-046-rw-semver-tag-task-touch-mode",
          children: "FR-046"
        }), " (", (0,jsx_runtime.jsx)(_components.strong, {
          children: "IMPLEMENTED"
        }), " — wave 3 closure ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "v0.3.2.12+5"
        }), ")"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/fr-br/BR-061-semver-task-touch-counter-increments-too-often",
          children: "BR-061"
        }), " (", (0,jsx_runtime.jsx)(_components.strong, {
          children: "FIXED"
        }), " — wave 3 closure ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "v0.3.2.12+5"
        }), ")"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/architecture/standards-and-adrs/semver-implementation-followup-spec.md"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/implementation-cycles/IPP-E03S02T12-task-touch-semver-collision-hardening",
          children: "IPP-E3S2T12-task-touch-semver-collision-hardening"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "implementation-note",
      children: "Implementation note"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Implemented converter hardening for BR-061 by splitting task-touch behavior into read-only derivation and explicit finalization, with idempotent mapping history per internal version. Regression tests now cover read-only non-mutation, finalize idempotency, and FR-046 collision scenarios."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "regression-reopening-note-2026-06-04",
      children: "Regression reopening note (2026-06-04)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "FR-045"
      }), " and ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "FR-046"
      }), " reopened after live ", (0,jsx_runtime.jsx)(_components.code, {
        children: "semver-registry.yaml"
      }), " audit: PATCH ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "870"
      }), " / ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "869"
      }), " / ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "806"
      }), " / ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "789"
      }), " each map multiple internal versions to one SemVer core. Wave 2 remediation shipped (", (0,jsx_runtime.jsx)(_components.strong, {
        children: "v0.3.2.12+4"
      }), "); ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "wave 3 verification"
      }), " per ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/implementation-cycles/IPP-E03S02T12-task-touch-semver-collision-hardening#82-wave-3-verification-checklist",
        children: "IPP §8"
      }), " before FBU closure."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "wave-3-verification-2026-06-05",
      children: "Wave 3 verification (2026-06-05)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "V1–V5 PASS"
      }), " — closed via ", (0,jsx_runtime.jsx)(_components.code, {
        children: "RW E03:S02:T12 --art"
      }), " ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "v0.3.2.12+5"
      }), ". Evidence: ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/maintenance/semver-verification-evidence-E03S02T12-wave3",
        children: "semver-verification-evidence-E03S02T12-wave3.md"
      }), ". FR-045/FR-046/BR-061 terminal; V-band row pruned."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "regression-reopening-note-2026-04-13",
      children: "Regression reopening note (2026-04-13)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Task reopened to enforce collision-invariant SemVer mapping at release boundaries:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["add explicit injective guard (", (0,jsx_runtime.jsx)(_components.code, {
          children: "semver -> internal_version"
        }), ") during finalize;"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "hard-fail RW tag creation when SemVer primary tag already exists but does not match the current internal release lineage;"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "add deterministic diagnostics + regression tests for boundary collision paths."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "planning-artifacts-publication",
      children: "Planning artifacts (publication)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Publication Status:"
      }), " PUBLISHED"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/implementation-cycles/IPP-E03S02T12-task-touch-semver-collision-hardening",
          children: "IPP-E3S2T12-task-touch-semver-collision-hardening.md"
        }), " — wave 2 shipped + wave 3/3b plan (IPW revised 2026-06-05)"]
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