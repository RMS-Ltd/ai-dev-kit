"use strict";
(self["webpackChunkportal"] = self["webpackChunkportal"] || []).push([["69760"], {
39069(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_architecture_standards_and_adrs_ipw_adr_necessity_checklist_md_901_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-architecture-standards-and-adrs-ipw-adr-necessity-checklist-md-901.json
var site_docs_architecture_standards_and_adrs_ipw_adr_necessity_checklist_md_901_namespaceObject = JSON.parse('{"id":"architecture/standards-and-adrs/ipw-adr-necessity-checklist","title":"IPW ADR necessity checklist","description":"Purpose: Measurable criteria for deciding whether an Architecture Decision Record (ADR) is required, exempt (with evidence), or already covered by an existing ADR/policy during IPW Phase 5.0.","source":"@site/../docs/architecture/standards-and-adrs/ipw-adr-necessity-checklist.md","sourceDirName":"architecture/standards-and-adrs","slug":"/architecture/standards-and-adrs/ipw-adr-necessity-checklist","permalink":"/ai-dev-kit/docs/architecture/standards-and-adrs/ipw-adr-necessity-checklist","draft":false,"unlisted":false,"editUrl":"https://github.com/RMS-Ltd/ai-dev-kit/tree/main/docs/../docs/architecture/standards-and-adrs/ipw-adr-necessity-checklist.md","tags":[],"version":"current","frontMatter":{"lifecycle":"evergreen","ttl_days":null,"created_at":"2026-05-26T18:30:00.000Z","expires_at":null,"housekeeping_policy":"keep","policy_salience":{"policy_id":"ipw-adr-necessity-checklist","type":"standard","domain":{"primary":"documentation","secondary":["planning","ipw","architecture"]},"audience":["agents","developers","story-owners"],"applies_to":{"activities":["ipw","task-planning"]}}},"sidebar":"docsSidebar","previous":{"title":"Generator Framework Design","permalink":"/ai-dev-kit/docs/architecture/standards-and-adrs/generator-framework-design"},"next":{"title":"KB Structure Overview","permalink":"/ai-dev-kit/docs/architecture/standards-and-adrs/kb-structure-overview"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ../docs/architecture/standards-and-adrs/ipw-adr-necessity-checklist.md


const frontMatter = {
	lifecycle: 'evergreen',
	ttl_days: null,
	created_at: new Date('2026-05-26T18:30:00.000Z'),
	expires_at: null,
	housekeeping_policy: 'keep',
	policy_salience: {
		policy_id: 'ipw-adr-necessity-checklist',
		type: 'standard',
		domain: {
			primary: 'documentation',
			secondary: [
				'planning',
				'ipw',
				'architecture'
			]
		},
		audience: [
			'agents',
			'developers',
			'story-owners'
		],
		applies_to: {
			activities: [
				'ipw',
				'task-planning'
			]
		}
	}
};
const contentTitle = 'IPW ADR necessity checklist';

const assets = {

};



const toc = [{
  "value": "Default rule",
  "id": "default-rule",
  "level": 2
}, {
  "value": "Artifact type ladder",
  "id": "artifact-type-ladder",
  "level": 2
}, {
  "value": "Positive triggers (T1–T7)",
  "id": "positive-triggers-t1t7",
  "level": 2
}, {
  "value": "Exemption rules (E1–E5)",
  "id": "exemption-rules-e1e5",
  "level": 2
}, {
  "value": "Outcomes",
  "id": "outcomes",
  "level": 2
}, {
  "value": "Phase 9 consistency (IPW validation)",
  "id": "phase-9-consistency-ipw-validation",
  "level": 2
}, {
  "value": "References",
  "id": "references",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    h2: "h2",
    header: "header",
    hr: "hr",
    li: "li",
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
        id: "ipw-adr-necessity-checklist",
        children: "IPW ADR necessity checklist"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Purpose:"
      }), " Measurable criteria for deciding whether an ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Architecture Decision Record (ADR)"
      }), " is ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "required"
      }), ", ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "exempt"
      }), " (with evidence), or ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "already covered"
      }), " by an existing ADR/policy during ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "IPW Phase 5.0"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Authority:"
      }), " This document is the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "single source of truth"
      }), " for trigger and exemption rules. Other docs (", (0,jsx_runtime.jsx)(_components.code, {
        children: ".claude/commands/ipw.md"
      }), ", IPP §2.5, code-review checklists) ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "link here"
      }), " — do not duplicate full criteria tables elsewhere."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Related:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/project-management/kanban/fr-br/FR-100-ipw-adr-necessity-checklist-and-decision-gate",
        children: "FR-100"
      }), ", ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/project-management/kanban/fr-br/FR-042-implementation-planning-workflow-ipw",
        children: "FR-042"
      }), ", ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/architecture/standards-and-adrs/specification-and-planning-artifacts-policy",
        children: "specification-and-planning-artifacts-policy.md"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "default-rule",
      children: "Default rule"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "No new ADR"
      }), " until the checklist is scored. Record the outcome in the IPP as ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "§2.5 ADR decision"
      }), " before Phase 5 documentation inventory."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "artifact-type-ladder",
      children: "Artifact type ladder"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Outcome"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Canonical home"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "When to use"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Task-scoped behavior"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IPP §2 Specification + task acceptance criteria"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "One task, one delivery slice"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Repeatable multi-task rule"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Policy or update to existing policy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Applies across tasks/epics without choosing between irreversible options"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Choice among options with lasting cost"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "ADR"
            }), " (new or update existing)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Any positive trigger (T1–T7) below is ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Y"
            })]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "positive-triggers-t1t7",
      children: "Positive triggers (T1–T7)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsxs)(_components.strong, {
        children: ["If any trigger is Y → outcome ", (0,jsx_runtime.jsx)(_components.code, {
          children: "REQUIRED"
        }), "."]
      }), " IPP §5 must include an ADR row (", (0,jsx_runtime.jsx)(_components.code, {
        children: "CREATE"
      }), " or ", (0,jsx_runtime.jsx)(_components.code, {
        children: "UPDATE"
      }), ") before Phase 5 completes."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "ID"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Trigger"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Measurable test (answer Y or N)"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "T1"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Alternatives"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "≥2 viable approaches exist; this task selects one"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "T2"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Reversibility"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Undoing the choice touches multiple modules, packages, adopters, or data/API contracts"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "T3"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Blast radius"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Impact extends beyond the §4.1 file list (framework package, multi-epic, adopter integration surface)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "T4"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Precedent"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Future work will cite this choice as canonical “how we do X here”"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "T5"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Constraint trade-off"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Explicit trade among security, performance, operability, agent ergonomics, or versioning semantics"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "T6"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Governance contract"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Changes RW, IPW, UKW, validators, or global implementation gates"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "T7"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Supersedes"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Narrows or contradicts an existing ADR/policy without a supersession note"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exemption-rules-e1e5",
      children: "Exemption rules (E1–E5)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Use only when every T1–T7 is N."
      }), " All five exemptions must pass → outcome ", (0,jsx_runtime.jsx)(_components.code, {
        children: "EXEMPT"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "ID"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Exemption rule"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Measurable test (must pass)"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "E1"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Single locus"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Decision confined to files listed in IPP §4.1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "E2"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "No new options"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Implements existing ADR, policy, FR, or IPP §2 only"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "E3"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Reversible in one task"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Rollback is a normal revert/PR without migration or adopter notice"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "E4"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Spec elsewhere"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IPP §2 + task AC (or one policy section) is the authoritative spec"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "E5"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Documented NONE"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["IPP §5.3 cites governing doc; §2.5 records ", (0,jsx_runtime.jsx)(_components.code, {
              children: "ADR decision: EXEMPT"
            })]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "If any exemption fails while all triggers are N → re-score triggers or widen scope; do not mark EXEMPT without justification."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "outcomes",
      children: "Outcomes"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Outcome"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "IPP requirements"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "REQUIRED"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["§2.5 matrix shows ≥1 Y; §5 includes ADR ", (0,jsx_runtime.jsx)(_components.code, {
              children: "CREATE"
            }), " or ", (0,jsx_runtime.jsx)(_components.code, {
              children: "UPDATE"
            }), " with path under ", (0,jsx_runtime.jsx)(_components.code, {
              children: "docs/architecture/standards-and-adrs/"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "EXEMPT"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All T1–T7 = N; all E1–E5 pass; §2.5 states EXEMPT; §5.3 cites policy/ADR/IPP section that governs the decision"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Already covered"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["No new ADR; §5 ADR row is ", (0,jsx_runtime.jsx)(_components.code, {
              children: "UPDATE"
            }), " to existing ADR or ", (0,jsx_runtime.jsx)(_components.code, {
              children: "NONE"
            }), " with link to existing ADR-00N"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "phase-9-consistency-ipw-validation",
      children: "Phase 9 consistency (IPW validation)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["If any T1–T7 is ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Y"
        }), " in §2.5, §5 must list an ADR deliverable (not silent NONE)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["If outcome is ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "EXEMPT"
        }), ", §5.3 must cite the governing document; §2.5 must show E1–E5 pass."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["“ADR if needed” without a scored matrix is ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "not"
        }), " acceptable for new IPW runs."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "references",
      children: "References"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/architecture/standards-and-adrs/ADR-004-ipp-state-transition-contract",
          children: "ADR-004"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/fr-br/FR-100-ipw-adr-necessity-checklist-and-decision-gate",
          children: "FR-100"
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: ".claude/commands/ipw.md"
        }), " — Phase 5.0 operational gate"]
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