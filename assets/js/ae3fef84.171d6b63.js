"use strict";
(self["webpackChunkportal"] = self["webpackChunkportal"] || []).push([["31804"], {
50450(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_governance_standards_specification_and_planning_artifacts_policy_md_ae3_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-governance-standards-specification-and-planning-artifacts-policy-md-ae3.json
var site_docs_governance_standards_specification_and_planning_artifacts_policy_md_ae3_namespaceObject = JSON.parse('{"id":"governance/standards/specification-and-planning-artifacts-policy","title":"Specification and planning artifacts policy","description":"Purpose: Avoid treating IDE-local plan directories as the system of record. Make specifications and test/planning intent discoverable in repository documentation with a clear hierarchy and promotion workflow.","source":"@site/../docs/governance/standards/specification-and-planning-artifacts-policy.md","sourceDirName":"governance/standards","slug":"/governance/standards/specification-and-planning-artifacts-policy","permalink":"/ai-dev-kit/docs/governance/standards/specification-and-planning-artifacts-policy","draft":false,"unlisted":false,"editUrl":"https://github.com/RMS-Ltd/ai-dev-kit/tree/main/docs/../docs/governance/standards/specification-and-planning-artifacts-policy.md","tags":[],"version":"current","frontMatter":{"lifecycle":"evergreen","ttl_days":null,"created_at":"2026-04-01T16:00:00.000Z","expires_at":null,"housekeeping_policy":"keep","policy_salience":{"policy_id":"specification-and-planning-artifacts-policy","type":"standard","domain":{"primary":"documentation","secondary":["planning","icw","kanban"]},"audience":["agents","developers","story-owners"],"applies_to":{"activities":["icw","task-planning","cursor-planning"]}}}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ../docs/governance/standards/specification-and-planning-artifacts-policy.md


const frontMatter = {
	lifecycle: 'evergreen',
	ttl_days: null,
	created_at: new Date('2026-04-01T16:00:00.000Z'),
	expires_at: null,
	housekeeping_policy: 'keep',
	policy_salience: {
		policy_id: 'specification-and-planning-artifacts-policy',
		type: 'standard',
		domain: {
			primary: 'documentation',
			secondary: [
				'planning',
				'icw',
				'kanban'
			]
		},
		audience: [
			'agents',
			'developers',
			'story-owners'
		],
		applies_to: {
			activities: [
				'icw',
				'task-planning',
				'cursor-planning'
			]
		}
	}
};
const contentTitle = 'Specification and planning artifacts policy';

const assets = {

};



const toc = [{
  "value": "1. Source-of-truth ladder (highest wins on conflict)",
  "id": "1-source-of-truth-ladder-highest-wins-on-conflict",
  "level": 2
}, {
  "value": "2. Artifact classes",
  "id": "2-artifact-classes",
  "level": 2
}, {
  "value": "Durable (repository)",
  "id": "durable-repository",
  "level": 3
}, {
  "value": "Transient (IDE-only)",
  "id": "transient-ide-only",
  "level": 3
}, {
  "value": "3. Workflow: planning → implementation handoff",
  "id": "3-workflow-planning--implementation-handoff",
  "level": 2
}, {
  "value": "4. Discovery and inventory (what we’ve got)",
  "id": "4-discovery-and-inventory-what-weve-got",
  "level": 2
}, {
  "value": "5. Non-goals",
  "id": "5-non-goals",
  "level": 2
}, {
  "value": "6. References",
  "id": "6-references",
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
        id: "specification-and-planning-artifacts-policy",
        children: "Specification and planning artifacts policy"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Purpose:"
      }), " Avoid treating ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "IDE-local plan directories"
      }), " as the system of record. Make ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "specifications and test/planning intent"
      }), " discoverable in ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "repository"
      }), " documentation with a clear hierarchy and promotion workflow."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem:"
      }), " Cursor (and similar) may store plans under a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "single user-local folder"
      }), " (e.g. ", (0,jsx_runtime.jsx)(_components.code, {
        children: "~/.cursor/plans/"
      }), "). That is ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "not"
      }), " in git, ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "not"
      }), " indexed with the repo, and ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "does not scale"
      }), " for architecture visibility or audit."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1-source-of-truth-ladder-highest-wins-on-conflict",
      children: "1. Source-of-truth ladder (highest wins on conflict)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Priority"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Artifact"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Role"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Kanban task document"
            }), " (", (0,jsx_runtime.jsx)(_components.code, {
              children: "docs/project-management/kanban/.../T*.md"
            }), " or embedded task section)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Authoritative"
            }), " for task scope, acceptance criteria, deliverables, status, and ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "version anchor"
            }), " when complete."]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Linked FR / BR / UXR"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Authoritative for ", (0,jsx_runtime.jsx)(_components.em, {
              children: "intake intent"
            }), ", acceptance at feature level, and explicit follow-up rows (e.g. FU-1..n)."]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsxs)(_components.strong, {
              children: ["Planning package under ", (0,jsx_runtime.jsx)(_components.code, {
                children: "docs/implementation-cycles/"
              })]
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Durable ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "specification"
            }), ", ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "test design"
            }), ", and ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "implementation plan"
            }), " intent. Acceptable forms: (a) ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "ICW trio"
            }), " — ", (0,jsx_runtime.jsx)(_components.code, {
              children: "ICW-E\\{epic\\}S\\{story\\}T\\{task\\}-{specification,test-design,implementation-plan}.md"
            }), "; or (b) ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "IPP (consolidated IPW)"
            }), " — single ", (0,jsx_runtime.jsx)(_components.code, {
              children: "IPP-E\\{epic\\}S\\{story\\}T\\{task\\}-*.md"
            }), " whose numbered sections map to those three concerns (per ", (0,jsx_runtime.jsx)(_components.code, {
              children: ".claude/commands/ipw.md"
            }), "). Must be ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "linked from the task"
            }), ". See ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ai-dev-kit/docs/governance/standards/dev-kit-ipw-ipp-vs-icw-artifacts",
              children: "dev-kit-ipw-ipp-vs-icw-artifacts.md"
            }), "."]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Architecture / ADR / policy docs"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Cross-cutting rules and decisions (not a substitute for task-level acceptance). IPW ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Phase 5.0"
            }), " uses ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ai-dev-kit/docs/architecture/standards-and-adrs/ipw-adr-necessity-checklist",
              children: "ipw-adr-necessity-checklist.md"
            }), " (FR-100) to decide ADR REQUIRED vs EXEMPT before documentation inventory."]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Automated tests"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Executable"
            }), " spec: failing/passing behavior. Names and docstrings ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "should"
            }), " reference task or FR where practical."]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Rule:"
      }), " If a Cursor plan and a task doc disagree, ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "update the task doc"
      }), " (and FR if needed), then adjust code/tests. The plan is ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "not"
      }), " the owner of truth."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "2-artifact-classes",
      children: "2. Artifact classes"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "durable-repository",
      children: "Durable (repository)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Must live under ", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "docs/"
            })
          }), " (or other committed paths defined by project policy)."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "ICW"
          }), " canonical output directory is ", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "docs/implementation-cycles/"
            })
          }), " (see ", (0,jsx_runtime.jsx)(_components.code, {
            children: "packages/frameworks/workflow-mgt/workflows/implementation-cycle-workflow/icw-workflow.yaml"
          }), " → ", (0,jsx_runtime.jsx)(_components.code, {
            children: "output_dir"
          }), ")."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "IPW / IPP (consolidated):"
          }), " A single markdown file ", (0,jsx_runtime.jsx)(_components.code, {
            children: "IPP-E\\{epic\\}S\\{story\\}T\\{task\\}-\\{slug\\}.md"
          }), " in the same directory is ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "equivalent"
          }), " to the ICW trio when it contains the required sections (requirements/spec, test design, implementation plan, ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "documentation deliverables"
          }), ", ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "documentation housing"
          }), ", success criteria) per ", (0,jsx_runtime.jsx)(_components.code, {
            children: "packages/frameworks/kanban/templates/PLAN_DOC_TEMPLATE.md"
          }), " and is bidirectionally wired to the host task. IPW ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Phase 5–6"
          }), " (", (0,jsx_runtime.jsx)(_components.code, {
            children: ".claude/commands/ipw.md"
          }), ") produce §5–§6 before the IPP is written. See ", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ai-dev-kit/docs/governance/standards/dev-kit-ipw-ipp-vs-icw-artifacts",
            children: "dev-kit-ipw-ipp-vs-icw-artifacts.md"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Naming ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "convention"
          }), " for ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "ICW"
          }), " split packages (recommended when using three files):"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.code, {
            children: "ICW-E\\{epic\\}S\\{story\\}T\\{task\\}-specification.md"
          }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.code, {
            children: "ICW-E\\{epic\\}S\\{story\\}T\\{task\\}-test-design.md"
          }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.code, {
            children: "ICW-E\\{epic\\}S\\{story\\}T\\{task\\}-implementation-plan.md"
          })]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Multi-task batches may use a ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "range suffix"
          }), " already in use in this repo (e.g. ", (0,jsx_runtime.jsx)(_components.code, {
            children: "ICW-E7S06-T10-T16-*"
          }), ") when one planning package intentionally covers several tasks."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "transient-ide-only",
      children: "Transient (IDE-only)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Files created only in ", (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "~/.cursor/plans/"
          })
        }), " (or other editor-local stores)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Use for:"
        }), " scratchpad, intermediate brainstorming, UI-generated plans."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Do not use for:"
        }), " the only copy of acceptance criteria, test design, or implementation steps ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "after"
        }), " work is funded by a task."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "3-workflow-planning--implementation-handoff",
      children: "3. Workflow: planning → implementation handoff"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Ensure a task exists"
        }), " (Kanban governance: substantive work is task-driven). Note the task id placeholder ", (0,jsx_runtime.jsx)(_components.code, {
          children: "E\\{epic\\}:S\\{story\\}:T\\{task\\}"
        }), " in the plan title or body."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Draft in Cursor Plan (optional):"
        }), " acceptable for speed."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Promote before or as implementation starts:"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Copy ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "executable spec"
            }), " statements (IDs, acceptance bullets) into the ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "task doc"
            }), " sections ", (0,jsx_runtime.jsx)(_components.em, {
              children: "Scope"
            }), ", ", (0,jsx_runtime.jsx)(_components.em, {
              children: "Acceptance Criteria"
            }), ", ", (0,jsx_runtime.jsx)(_components.em, {
              children: "Deliverable"
            }), " as appropriate; and/or"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Create or update the ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "ICW trio"
            }), " ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "or"
            }), " a single ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "IPP"
            }), " file under ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "docs/implementation-cycles/"
              })
            }), " using the conventions above."]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Link bidirectionally:"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["In the ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "task doc"
            }), ", add a ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Planning artifacts"
            }), " (or ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "References"
            }), ") subsection listing paths to the ICW files, ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "IPP"
            }), " file, or other ", (0,jsx_runtime.jsx)(_components.code, {
              children: "docs/"
            }), " plans."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["In each ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "ICW"
            }), " file (or the ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "IPP"
            }), " header), put the ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "task id"
            }), " and link to the task markdown at the top."]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Discard or ignore"
        }), " the IDE-only plan for governance after promotion (do not cite it as SoT in FR/task text)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Agents:"
      }), " When the user says “implement the plan,” ", (0,jsx_runtime.jsxs)(_components.strong, {
        children: ["read the task doc and linked ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/"
        }), " files first"]
      }), "; treat ", (0,jsx_runtime.jsx)(_components.code, {
        children: "~/.cursor/plans/"
      }), " as optional context if the user attaches it."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "4-discovery-and-inventory-what-weve-got",
      children: "4. Discovery and inventory (what we’ve got)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Do not"
        }), " rely on listing a monolithic local plans directory."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Do"
        }), " discover specs by:", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Opening the ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "task"
            }), " from the Story checklist / FR ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Implementing Task"
            }), " link."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Listing or searching ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "docs/implementation-cycles/ICW-*.md"
              })
            }), " or ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "IPP-*.md"
              })
            }), " (by task id in the filename)."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Reading ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "FR-067-style"
            }), " triage tables and ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "maintenance"
            }), " notes where applicable."]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Optional hygiene (UKW / maintainers):"
      }), " If a story marks ICW/IPW as required and tasks lack ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Planning artifacts"
      }), " links while ", (0,jsx_runtime.jsx)(_components.code, {
        children: "docs/implementation-cycles/"
      }), " contains matching ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ICW-*"
      }), " or ", (0,jsx_runtime.jsx)(_components.code, {
        children: "IPP-*"
      }), " files, add the links (same session as other kanban updates; release via ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "RW"
      }), " per project rules)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "5-non-goals",
      children: "5. Non-goals"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["This policy does ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "not"
        }), " require every small fix to have a full ICW trio ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "or"
        }), " a full IPP; minimum is ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "task doc + tests"
        }), " where that is the team norm."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Replacing Cursor Plans UI is ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "not"
        }), " required; controlling ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "where truth lives"
        }), " is."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "6-references",
      children: "6. References"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "IPP vs ICW packaging (ai-dev-kit):"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/governance/standards/dev-kit-ipw-ipp-vs-icw-artifacts",
          children: "dev-kit-ipw-ipp-vs-icw-artifacts.md"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Intake / traceability:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/fr-br/FR-075-icw-durable-planning-artifacts-documentation-system",
          children: "FR-075"
        }), "; implementing task ", (0,jsx_runtime.jsxs)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-05/story-01-fr-repo/T75-icw-durable-planning-artifacts-documentation-system",
          children: ["E5:S01", ":T75"]
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Kanban task template: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "packages/frameworks/kanban/templates/TASK_TEMPLATE.md"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["ICW workflow config: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "packages/frameworks/workflow-mgt/workflows/implementation-cycle-workflow/icw-workflow.yaml"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["ICW responsibilities (durable artifacts): ", (0,jsx_runtime.jsx)(_components.code, {
          children: "packages/frameworks/workflow-mgt/workflows/implementation-cycle-workflow/README.md"
        }), " (section ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Durable planning artifacts"
        }), ")"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Implementation cycles folder guide: ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/implementation-cycles/",
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "docs/implementation-cycles/README.md"
          })
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Kanban governance: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "packages/frameworks/kanban/policies/kanban-governance-policy.md"
        }), " (task-driven work)"]
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