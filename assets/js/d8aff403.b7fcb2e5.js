"use strict";
(self["webpackChunkportal"] = self["webpackChunkportal"] || []).push([["24704"], {
99652(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_implementation_cycles_ipp_e_4_s_19_t_03_e_6_s_07_default_housing_drift_investigation_md_d8a_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-implementation-cycles-ipp-e-4-s-19-t-03-e-6-s-07-default-housing-drift-investigation-md-d8a.json
var site_docs_implementation_cycles_ipp_e_4_s_19_t_03_e_6_s_07_default_housing_drift_investigation_md_d8a_namespaceObject = JSON.parse('{"id":"implementation-cycles/IPP-E4S19T03-e6s07-default-housing-drift-investigation","title":"E4:S19:T03 - Planning: Spec, Tests, Implementation Plan (IPP)","description":"Host TaskS19:T03)","source":"@site/../docs/implementation-cycles/IPP-E4S19T03-e6s07-default-housing-drift-investigation.md","sourceDirName":"implementation-cycles","slug":"/implementation-cycles/IPP-E4S19T03-e6s07-default-housing-drift-investigation","permalink":"/ai-dev-kit/docs/implementation-cycles/IPP-E4S19T03-e6s07-default-housing-drift-investigation","draft":false,"unlisted":false,"editUrl":"https://github.com/RMS-Ltd/ai-dev-kit/tree/main/docs/../docs/implementation-cycles/IPP-E4S19T03-e6s07-default-housing-drift-investigation.md","tags":[],"version":"current","frontMatter":{"lifecycle":"evergreen","ttl_days":null,"created_at":"2026-04-27T00:00:00.000Z","expires_at":null,"housekeeping_policy":"keep"},"sidebar":"docsSidebar","previous":{"title":"E4:S19:T02 - Planning: Spec, Tests, Implementation Plan (IPP)","permalink":"/ai-dev-kit/docs/implementation-cycles/IPP-E4S19T02-canonical-supporting-kanban-fbu-doc-naming-and-terminology"},"next":{"title":"E4:S19:T04 — Planning: Spec, Tests, Implementation Plan (IPP)","permalink":"/ai-dev-kit/docs/implementation-cycles/IPP-E4S19T04-kboard-fbuboard-ipp-segment-after-fbu-task-links"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ../docs/implementation-cycles/IPP-E4S19T03-e6s07-default-housing-drift-investigation.md


const frontMatter = {
	lifecycle: 'evergreen',
	ttl_days: null,
	created_at: new Date('2026-04-27T00:00:00.000Z'),
	expires_at: null,
	housekeeping_policy: 'keep'
};
const contentTitle = 'E4:S19 - Planning: Spec, Tests, Implementation Plan (IPP)';

const assets = {

};



const toc = [{
  "value": "1. Requirements (ascertained baseline)",
  "id": "1-requirements-ascertained-baseline",
  "level": 2
}, {
  "value": "1.1 Functional requirements",
  "id": "11-functional-requirements",
  "level": 3
}, {
  "value": "1.2 Non-functional requirements",
  "id": "12-non-functional-requirements",
  "level": 3
}, {
  "value": "1.3 Invariants and boundaries",
  "id": "13-invariants-and-boundaries",
  "level": 3
}, {
  "value": "1.4 Referenced sources",
  "id": "14-referenced-sources",
  "level": 3
}, {
  "value": "2. Specification",
  "id": "2-specification",
  "level": 2
}, {
  "value": "2.1 Goal",
  "id": "21-goal",
  "level": 3
}, {
  "value": "2.2 Specification mapping from ascertained requirements",
  "id": "22-specification-mapping-from-ascertained-requirements",
  "level": 3
}, {
  "value": "2.3 Forensic-investigation method contract",
  "id": "23-forensic-investigation-method-contract",
  "level": 3
}, {
  "value": "2.4 Codification surface inventory contract",
  "id": "24-codification-surface-inventory-contract",
  "level": 3
}, {
  "value": "2.5 Semantic-fit triage rubric",
  "id": "25-semantic-fit-triage-rubric",
  "level": 3
}, {
  "value": "2.6 Disposition decision framework",
  "id": "26-disposition-decision-framework",
  "level": 3
}, {
  "value": "2.7 Re-housing protocol (codified from the <code>BR-069</code> precedent)",
  "id": "27-re-housing-protocol-codified-from-the-br-069-precedent",
  "level": 3
}, {
  "value": "2.8 Guardrail follow-on identification (candidate set)",
  "id": "28-guardrail-follow-on-identification-candidate-set",
  "level": 3
}, {
  "value": "2.9 Status transition intent (mandatory)",
  "id": "29-status-transition-intent-mandatory",
  "level": 3
}, {
  "value": "2.10 Constraints",
  "id": "210-constraints",
  "level": 3
}, {
  "value": "3. Test design",
  "id": "3-test-design",
  "level": 2
}, {
  "value": "3.1 Verification method",
  "id": "31-verification-method",
  "level": 3
}, {
  "value": "4. Implementation plan",
  "id": "4-implementation-plan",
  "level": 2
}, {
  "value": "4.1 Wave 1 - IPP publication and T03 wiring (this run)",
  "id": "41-wave-1---ipp-publication-and-t03-wiring-this-run",
  "level": 3
}, {
  "value": "4.2 Wave 2 - Forensic investigation execution (deferred, owned by T03)",
  "id": "42-wave-2---forensic-investigation-execution-deferred-owned-by-t03",
  "level": 3
}, {
  "value": "4.3 Wave 3 - Disposition recommendation and guardrail follow-on filing (deferred, owned by T03)",
  "id": "43-wave-3---disposition-recommendation-and-guardrail-follow-on-filing-deferred-owned-by-t03",
  "level": 3
}, {
  "value": "4.4 Wave 4 - Re-housing or freezing of <code>S07</code> (deferred, downstream)",
  "id": "44-wave-4---re-housing-or-freezing-of-s07-deferred-downstream",
  "level": 3
}, {
  "value": "4.5 AC traceability matrix (T03 ACs and FR-087 ACs vs IPP RFs and waves)",
  "id": "45-ac-traceability-matrix-t03-acs-and-fr-087-acs-vs-ipp-rfs-and-waves",
  "level": 3
}, {
  "value": "4.6 Files touched by Wave 1",
  "id": "46-files-touched-by-wave-1",
  "level": 3
}, {
  "value": "5. Success / verification criteria",
  "id": "5-success--verification-criteria",
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
      children: (0,jsx_runtime.jsxs)(_components.h1, {
        id: "e4s19---planning-spec-tests-implementation-plan-ipp",
        children: ["E4:S19", ":T03", " - Planning: Spec, Tests, Implementation Plan (IPP)"]
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Host Task:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-04/story-19-fr-br-uxr-abstract-governance-and-intake/T03-e6s07-default-housing-drift-investigation-and-closure-decision-fr087",
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "T03-e6s07-default-housing-drift-investigation-and-closure-decision-fr087.md"
        })
      }), " ", (0,jsx_runtime.jsxs)(_components.strong, {
        children: ["(E4:S19", ":T03", ")"]
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Planning for:"
      }), " ", (0,jsx_runtime.jsxs)(_components.a, {
        href: "/ai-dev-kit/docs/project-management/kanban/fr-br/FR-087-e6s07-default-housing-root-cause-and-closure-decision",
        children: ["FR-087 - Investigate ", (0,jsx_runtime.jsx)(_components.code, {
          children: "E6:S07"
        }), " default-housing drift, codification points, and closure decision"]
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Status:"
      }), " Published (Wave 1 IPP); Wave 2–3 investigation report delivered — see ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/implementation-cycles/E4S19T03-e6s07-default-housing-investigation-report",
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "E4S19T03-e6s07-default-housing-investigation-report.md"
        })
      }), "; Wave 4 migrations and guardrail filing remain open"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1-requirements-ascertained-baseline",
      children: "1. Requirements (ascertained baseline)"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "11-functional-requirements",
      children: "1.1 Functional requirements"
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
            children: "RF1"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Reconstruct the forensic origin and lifecycle of ", (0,jsx_runtime.jsx)(_components.code, {
              children: "E6:S07"
            }), " (initial charter, expansion inflection points, current usage shape) from primary repository evidence."]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T03 AC1, FR-087-F1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RF2"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Inventory all codification surfaces that route or bias task placement toward ", (0,jsx_runtime.jsx)(_components.code, {
              children: "E6:S07"
            }), ", distinguishing hard-coded behavior (validators, scripts, templates, policies) from operator habit."]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T03 AC2, FR-087-F2"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RF3"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Provide a deterministic semantic-fit triage rubric for the current ", (0,jsx_runtime.jsx)(_components.code, {
              children: "S07"
            }), " task list (", (0,jsx_runtime.jsx)(_components.code, {
              children: "in-scope"
            }), " / ", (0,jsx_runtime.jsx)(_components.code, {
              children: "borderline"
            }), " / ", (0,jsx_runtime.jsx)(_components.code, {
              children: "out-of-scope"
            }), ") with anchor questions, evidence requirements, and a drift-quantification method."]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T03 AC3, FR-087-F3"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RF4"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Define a disposition decision framework for ", (0,jsx_runtime.jsx)(_components.code, {
              children: "S07"
            }), " (", (0,jsx_runtime.jsx)(_components.code, {
              children: "close"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "keep-open-narrowed"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "split/re-house"
            }), ") with criteria, transition mechanics, evidence requirements, and required follow-on tasks per option."]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T03 AC4, FR-087-F4"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RF5"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Identify candidate guardrail follow-on tasks (validator hooks, ", (0,jsx_runtime.jsx)(_components.code, {
              children: ".cursorrules"
            }), " placement guidance, template fields, intake-guide language) with brief rationale, without filing them in this IPP."]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T03 AC5, FR-087-F5"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RF6"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Codify the re-housing protocol used for the ", (0,jsx_runtime.jsx)(_components.code, {
              children: "BR-069"
            }), " precedent (atomic checklist preserving traceability) so it is reusable for any future mis-housed task."]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T03 AC6, FR-087-F6"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RF7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Keep all task / story / FR / board surfaces bidirectionally wired to T03 and this IPP."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FR-087 wiring requirement; consolidated IPP model"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "12-non-functional-requirements",
      children: "1.2 Non-functional requirements"
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
            children: "RNF1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All findings must cite primary repository evidence (concrete file paths, git history pointers, validator regexes) rather than interpretation."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FR-087-NF1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RNF2"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Recommendations must preserve backward traceability and avoid breaking existing links/history (no rewriting historical tags, release titles, or perpetual ", (0,jsx_runtime.jsx)(_components.code, {
              children: "T101+"
            }), " references)."]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FR-087-NF2"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RNF3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Governance outputs must be actionable and testable in workflow validation."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FR-087-NF3"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RNF4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Scope is documentation/governance only; no runtime workflow behavior changes in this planning package."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FR-087 scope"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "13-invariants-and-boundaries",
      children: "1.3 Invariants and boundaries"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Invariants:"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["No retroactive changes to historical perpetual ", (0,jsx_runtime.jsx)(_components.code, {
              children: "T101+"
            }), " tags, changelog entries, or release titles. ", (0,jsx_runtime.jsx)(_components.code, {
              children: "T101+"
            }), " references remain valid for traceability."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["When re-housing a task, both the source-task supersede note and the target-task creation must land in the same logical change set, with all FBU ", (0,jsx_runtime.jsx)(_components.code, {
              children: "Implementing Task"
            }), " rewires, kboard rewires, and story checklist updates atomic to that change set."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Codification evidence must cite primary repo paths (", (0,jsx_runtime.jsx)(_components.code, {
              children: "packages/frameworks/..."
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: ".cursorrules"
            }), ", intake skill files, template files)."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Perpetual-task placement enforcement under ", (0,jsx_runtime.jsx)(_components.code, {
              children: "E2:S16"
            }), " is delegated to ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ai-dev-kit/docs/implementation-cycles/IPP-E2S16T01-canonical-perpetual-ongoing-tasks-story",
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "IPP-E2S16T1"
              })
            }), "; this IPP does not duplicate that scope."]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "In scope:"
        }), " Forensic-investigation method contract for ", (0,jsx_runtime.jsx)(_components.code, {
          children: "S07"
        }), "; codification surface inventory contract; semantic-fit triage rubric; disposition decision framework; re-housing protocol codification; guardrail follow-on identification (not filing)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Out of scope:"
        }), " Performing the migration of ", (0,jsx_runtime.jsx)(_components.code, {
          children: "S07"
        }), " tasks (that is ", (0,jsx_runtime.jsx)(_components.code, {
          children: "T03"
        }), " execution work or downstream tasks); perpetual-task placement scope owned by ", (0,jsx_runtime.jsx)(_components.code, {
          children: "IPP-E2S16T1"
        }), "; runtime validator/script/template changes (downstream guardrail follow-on tasks own those edits); the actual disposition recommendation content (Wave 2 of ", (0,jsx_runtime.jsx)(_components.code, {
          children: "T03"
        }), " execution)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "14-referenced-sources",
      children: "1.4 Referenced sources"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Host task: ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-04/story-19-fr-br-uxr-abstract-governance-and-intake/T03-e6s07-default-housing-drift-investigation-and-closure-decision-fr087",
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "T03-e6s07-default-housing-drift-investigation-and-closure-decision-fr087.md"
          })
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Upstream FR: ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/fr-br/FR-087-e6s07-default-housing-root-cause-and-closure-decision",
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "FR-087"
          })
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Story container: ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-04/story-19-fr-br-uxr-abstract-governance-and-intake",
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "story-19-fr-br-uxr-abstract-governance-and-intake.md"
          })
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Subject under investigation: ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-06/story-07-adk-implementation-analysis-and-package-management",
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "story-07-adk-implementation-analysis-and-package-management.md"
          })
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["AC6 evidence (re-housing precedent): ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/fr-br/BR-069-kboard-fbuboard-earliest-last-modified-timestamps-overwritten",
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "BR-069"
          })
        }), " -> ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-02/story-15-ipw-governance-and-publication-contract/T04-investigate-earliest-last-modified-timestamp-overwrite-regression-br069",
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "E2:S15:T04"
          })
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Adjacent governance contract (perpetual-task placement, deliberately not duplicated here): ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/implementation-cycles/IPP-E2S16T01-canonical-perpetual-ongoing-tasks-story",
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "IPP-E2S16T1"
          })
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Adjacent governance contract (FBU meta governance shape reference): ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/implementation-cycles/IPP-E4S19T06-fbu-meta-normalization-and-intake-governance",
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "IPP-E4S19T6"
          })
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["IPW execution guide: ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/packages/frameworks/workflow-mgt/KB/Documentation/Developer_Docs/vwmp/implementation-planning-workflow-agent-execution.md",
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "implementation-planning-workflow-agent-execution.md"
          })
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "2-specification",
      children: "2. Specification"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "21-goal",
      children: "2.1 Goal"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Turn the six T03 acceptance criteria (AC6 already satisfied historically by the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "BR-069"
      }), " re-housing) into a deterministic forensic-investigation + governance contract that the investigator can execute against, producing an evidence-backed disposition recommendation for ", (0,jsx_runtime.jsx)(_components.code, {
        children: "S07"
      }), " and a reusable re-housing protocol, without prejudging which disposition is correct."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "22-specification-mapping-from-ascertained-requirements",
      children: "2.2 Specification mapping from ascertained requirements"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Forensic origin (RF1):"
        }), " A method contract for what counts as primary evidence and how the investigator must cite it (see §2.3)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Codification inventory (RF2):"
        }), " A category-level inventory contract with concrete ", (0,jsx_runtime.jsx)(_components.code, {
          children: "rg"
        }), "/", (0,jsx_runtime.jsx)(_components.code, {
          children: "Glob"
        }), " patterns and a sufficiency rule (see §2.4)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Semantic-fit triage (RF3):"
        }), " A triage rubric with anchor questions, evidence requirements, and quantification (see §2.5)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Disposition framework (RF4):"
        }), " A framework that defines criteria, transition mechanics, and required follow-on tasks for each option (", (0,jsx_runtime.jsx)(_components.code, {
          children: "close"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "narrow"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "split/re-house"
        }), "); does not select an option (see §2.6)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Guardrail follow-on identification (RF5):"
        }), " A candidate set of guardrail follow-on tasks with brief rationale (see §2.8); filing is downstream."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Re-housing protocol (RF6):"
        }), " A codified atomic checklist derived from the ", (0,jsx_runtime.jsx)(_components.code, {
          children: "BR-069"
        }), " precedent (see §2.7)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Bidirectional wiring (RF7):"
        }), " Wave 1 of the implementation plan (§4.1) covers IPP / T03 / FR-087 / Story 019 / kboard / fbuboard wiring under the consolidated ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Publication Status: NOT_APPLICABLE"
        }), " model."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "23-forensic-investigation-method-contract",
      children: "2.3 Forensic-investigation method contract"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Each forensic finding produced under T03 execution must satisfy the following contract:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Primary evidence requirement."
        }), " A finding cites at least one primary repository artifact (file path + line range, or git commit ref + file). Synthesized analysis is allowed as commentary on top of primary evidence, never as a substitute for it."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Charter origin."
        }), " The investigation must establish the original ", (0,jsx_runtime.jsx)(_components.code, {
          children: "S07"
        }), " charter from at least two independent sources (e.g. ", (0,jsx_runtime.jsx)(_components.code, {
          children: "story-07-adk-implementation-analysis-and-package-management.md"
        }), " overview/goal sections + earliest related FR/BR/UXR documents + earliest related changelog archive entry)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Expansion inflection points."
        }), " The investigation must identify the discrete points at which ", (0,jsx_runtime.jsx)(_components.code, {
          children: "S07"
        }), " accreted scope outside its charter, citing the FR/BR/UXR or task that introduced the new scope, the date, and the placement rationale (or the absence thereof)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Current usage shape."
        }), " The investigation must enumerate the current ", (0,jsx_runtime.jsx)(_components.code, {
          children: "S07"
        }), " task list (", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/project-management/kanban/epics/epic-06/story-07-.../T*.md"
        }), ") at the time of the report and describe the shape (count, task type mix, status mix, FBU linkage mix). The current count is ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "23 task documents"
        }), " as of 2026-04-27 (recorded for baseline comparison; expected to drift as re-housings land)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Citation form."
        }), " Findings cite ", (0,jsx_runtime.jsx)(_components.code, {
          children: "path/to/file.md:line-range"
        }), " style references, plus a one-line quotation or paraphrase. No bare links without context."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Quantification."
        }), " Drift is quantified (see §2.5 for the metric); narrative-only claims are insufficient."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "24-codification-surface-inventory-contract",
      children: "2.4 Codification surface inventory contract"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The investigator must inspect each of the following categories. For each category, at least one concrete instance must be cited as evidence, and the inspection method (the exact ", (0,jsx_runtime.jsx)(_components.code, {
        children: "rg"
      }), "/", (0,jsx_runtime.jsx)(_components.code, {
        children: "Glob"
      }), " pattern) must be recorded so the inventory is reproducible. Sufficiency rule: one citation per category satisfies coverage; exhaustiveness within a category is not required and is explicitly out of scope for the IPP."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Category"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Sample instances"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Suggested inspection patterns"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Workflow validators"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/packages/frameworks/workflow-mgt/scripts/validation/validate_version_bump.py",
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "packages/frameworks/workflow-mgt/scripts/validation/validate_version_bump.py"
              })
            }), ", ", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/packages/frameworks/workflow-mgt/scripts/validation/validate_ipw_publication_wiring.py",
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "validate_ipw_publication_wiring.py"
              })
            }), ", ", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/packages/frameworks/workflow-mgt/scripts/validation/validate_plan_wiring.py",
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "validate_plan_wiring.py"
              })
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "rg -n \"S07|S007|Story.{0,10}007|E6:S07\" \"packages/frameworks/workflow-mgt/scripts/validation/\""
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Intake/IPW workflow YAML and runners"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/packages/frameworks/workflow-mgt/workflows/intake-workflow",
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "packages/frameworks/workflow-mgt/workflows/intake-workflow/"
              })
            }), ", ", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/packages/frameworks/workflow-mgt/workflows/ipw-workflow",
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "packages/frameworks/workflow-mgt/workflows/ipw-workflow/"
              })
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "rg -n \"S07|S007|Story.{0,10}007|E6:S07|default.{0,30}housing\" \"packages/frameworks/workflow-mgt/workflows/\""
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Cursor rules"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/.cursorrules",
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "/.cursorrules"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "rg -n \"S07|S006|S007|E6:S07|catch.?all|default.{0,30}housing\" .cursorrules"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Intake skill"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/.cursor/skills/intake-process/SKILL.md",
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "/.cursor/skills/intake-process/SKILL.md"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "rg -n \"Epic|story|placement|default\" .cursor/skills/intake-process/SKILL.md"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Kanban templates"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/packages/frameworks/kanban/templates",
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "packages/frameworks/kanban/templates/"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "rg -n \"S07|S006|S007|default\" \"packages/frameworks/kanban/templates/\" --type md"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Kanban governance policy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/packages/frameworks/kanban/policies/kanban-governance-policy.md",
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "packages/frameworks/kanban/policies/kanban-governance-policy.md"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "rg -n \"S07|S006|S007|default.{0,30}housing|catch.?all|placement\" \"packages/frameworks/kanban/policies/kanban-governance-policy.md\""
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Intake guide"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/packages/frameworks/kanban/FR_BR_INTAKE_GUIDE.md",
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "packages/frameworks/kanban/FR_BR_INTAKE_GUIDE.md"
              })
            }), ", ", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/packages/frameworks/kanban/FR_BR_INTAKE_AGENT_GUIDE.md",
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "packages/frameworks/kanban/FR_BR_INTAKE_AGENT_GUIDE.md"
              })
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "rg -n \"Epic|Story|placement|default\" \"packages/frameworks/kanban/FR_BR_INTAKE_GUIDE.md\" \"packages/frameworks/kanban/FR_BR_INTAKE_AGENT_GUIDE.md\""
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Story 007 charter document"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-06/story-07-adk-implementation-analysis-and-package-management",
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "story-07-adk-implementation-analysis-and-package-management.md"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Read header (Overview, Problem Statement, Goal, Success Criteria sections) plus task-checklist diff from earliest commit."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Agent prompts and prior IPPs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: ".",
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "docs/implementation-cycles/"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "rg -n \"S07|S006|S007|E6:S07|default.{0,30}housing\" \"docs/implementation-cycles/\""
            })
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "For each cited surface, the investigator must classify the routing as one of:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Hard-coded routing:"
        }), " The surface programmatically (or via deterministic policy text) directs new placement to ", (0,jsx_runtime.jsx)(_components.code, {
          children: "E6:S07"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Permissive default:"
        }), " The surface allows ", (0,jsx_runtime.jsx)(_components.code, {
          children: "E6:S07"
        }), " placement without active steering elsewhere (e.g. silence in the intake guide on default housing)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Operator habit / no codification:"
        }), " The surface contains no relevant routing language; ", (0,jsx_runtime.jsx)(_components.code, {
          children: "E6:S07"
        }), " placement is purely social/process behavior."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Findings under T03 execution must record the classification for each cited surface; this distinction drives which guardrail follow-on tasks (§2.8) are required."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "25-semantic-fit-triage-rubric",
      children: "2.5 Semantic-fit triage rubric"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Each task currently filed under ", (0,jsx_runtime.jsx)(_components.code, {
        children: "E6:S07"
      }), " is triaged as one of three buckets using the anchor questions below. The rubric is designed so the same investigator (or a reviewer) reaches the same classification given the same evidence."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Bucket"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Anchor question"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Evidence requirement"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "in-scope"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Does the task directly serve the original ", (0,jsx_runtime.jsx)(_components.code, {
              children: "S07"
            }), " charter (ADK implementation analysis, package management investigation, ADK installation hardening synthesis) per the charter sources cited in §2.3?"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Quote from task description + match to charter goal/success-criteria."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "borderline"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Does the task touch ADK adoption surfaces (install, package, distribution, framework hardening derived from analysis findings) but extend the charter rather than execute it?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Quote from task description + cited departure from charter scope."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "out-of-scope"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Is the task primarily about something else (workflow operations, governance/intake, board/FBU hygiene, validator runtime, perpetual operations, doc-naming policy) that has a more semantic home elsewhere?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Quote from task description + identification of the more semantic story (with epic/story candidate cited)."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Drift quantification metric:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "drift_ratio = out_of_scope_count / total_active_S07_tasks"
      }), " where active means non-COMPLETE and non-SUPERSEDED. The investigator records the metric in the report. A ", (0,jsx_runtime.jsx)(_components.code, {
        children: "drift_ratio >= 0.5"
      }), " is a strong signal supporting ", (0,jsx_runtime.jsx)(_components.code, {
        children: "split/re-house"
      }), "; ", (0,jsx_runtime.jsx)(_components.code, {
        children: "drift_ratio < 0.2"
      }), " is a strong signal supporting ", (0,jsx_runtime.jsx)(_components.code, {
        children: "keep-open-narrowed"
      }), "; intermediate values require the disposition framework (§2.6) to weigh additional criteria. This is a heuristic input to the disposition framework, not a replacement for it."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Borderline task handling:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "borderline"
      }), " tasks are not counted toward ", (0,jsx_runtime.jsx)(_components.code, {
        children: "drift_ratio"
      }), ", but each one must carry a rationale recorded in the investigation report explaining why it is borderline rather than ", (0,jsx_runtime.jsx)(_components.code, {
        children: "in-scope"
      }), " or ", (0,jsx_runtime.jsx)(_components.code, {
        children: "out-of-scope"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "26-disposition-decision-framework",
      children: "2.6 Disposition decision framework"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["This IPP does not select a disposition. It defines the framework that the T03 investigator must apply to recommend one of ", (0,jsx_runtime.jsx)(_components.code, {
        children: "close"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "keep-open-narrowed"
      }), ", or ", (0,jsx_runtime.jsx)(_components.code, {
        children: "split/re-house"
      }), ". The recommendation is produced as a deliverable under T03 execution, not in this IPP."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Option"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Criteria for selection"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Transition mechanics"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Required follow-on tasks"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "close"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["All ", (0,jsx_runtime.jsx)(_components.code, {
              children: "in-scope"
            }), " work has terminal acceptance criteria that are met or are owned elsewhere; charter is fulfilled; ", (0,jsx_runtime.jsx)(_components.code, {
              children: "drift_ratio"
            }), " is irrelevant because no active in-scope work remains."]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Mark Story 007 status ", (0,jsx_runtime.jsx)(_components.code, {
              children: "COMPLETE"
            }), " (or ", (0,jsx_runtime.jsx)(_components.code, {
              children: "RETIRED"
            }), "), update Epic 6 overview, freeze new task creation under ", (0,jsx_runtime.jsx)(_components.code, {
              children: "S07"
            }), ", redirect any incoming intake to a new home."]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Filing of redirection guardrails (validator hard-fail on new ", (0,jsx_runtime.jsx)(_components.code, {
              children: "E6:S07:T*"
            }), " creation unless ", (0,jsx_runtime.jsx)(_components.code, {
              children: "Historical Anchor:"
            }), " declared); Epic 6 charter amendment task."]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "keep-open-narrowed"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "drift_ratio < 0.2"
            }), "; charter still has open in-scope work; codification inventory shows the issue is mostly operator habit (§2.4 classification) rather than hard-coded routing."]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Re-state the ", (0,jsx_runtime.jsx)(_components.code, {
              children: "S07"
            }), " charter explicitly in the story document; add ", (0,jsx_runtime.jsx)(_components.code, {
              children: "Out of Scope"
            }), " enumeration; route ", (0,jsx_runtime.jsx)(_components.code, {
              children: "out-of-scope"
            }), " tasks individually using §2.7; do not change story status."]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Filing of guardrail follow-on tasks per §2.8 (validator placement check, ", (0,jsx_runtime.jsx)(_components.code, {
              children: ".cursorrules"
            }), " placement guidance, template ", (0,jsx_runtime.jsx)(_components.code, {
              children: "Default Housing Override Rationale:"
            }), " field, intake-guide language)."]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "split/re-house"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "drift_ratio >= 0.5"
            }), ", or codification inventory shows hard-coded routing toward ", (0,jsx_runtime.jsx)(_components.code, {
              children: "S07"
            }), ", or the ", (0,jsx_runtime.jsx)(_components.code, {
              children: "out-of-scope"
            }), " cluster has a coherent shape that justifies a new story."]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Identify target stories (existing or new); apply §2.7 re-housing protocol per task; freeze new ", (0,jsx_runtime.jsx)(_components.code, {
              children: "S07"
            }), " task creation during the migration window; close ", (0,jsx_runtime.jsx)(_components.code, {
              children: "S07"
            }), " once all ", (0,jsx_runtime.jsx)(_components.code, {
              children: "out-of-scope"
            }), " tasks are migrated and ", (0,jsx_runtime.jsx)(_components.code, {
              children: "in-scope"
            }), " tasks are complete or owned elsewhere."]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["All re-housing tasks (one per migrated task or one per target story); guardrail follow-on tasks per §2.8; final ", (0,jsx_runtime.jsx)(_components.code, {
              children: "close"
            }), " follow-on once migration completes."]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Risk profile per option:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "close"
        }), " risks losing in-flight context if ", (0,jsx_runtime.jsx)(_components.code, {
          children: "in-scope"
        }), " work is not fully accounted for; mitigated by the criteria gate above."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "keep-open-narrowed"
        }), " risks recurrence of drift if guardrails are not implemented; mitigated by §2.8 follow-on identification being a precondition to selecting this option."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "split/re-house"
        }), " is the most operationally expensive option; mitigated by the §2.7 re-housing protocol being deterministic and atomic."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "27-re-housing-protocol-codified-from-the-br-069-precedent",
      children: ["2.7 Re-housing protocol (codified from the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "BR-069"
      }), " precedent)"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The protocol below is the atomic checklist the investigator (or any future operator) must follow when re-housing a single task from a source story to a target story. It is derived from the precedent already executed for ", (0,jsx_runtime.jsx)(_components.code, {
        children: "BR-069"
      }), " (", (0,jsx_runtime.jsx)(_components.code, {
        children: "E6:S07:T117"
      }), " -> ", (0,jsx_runtime.jsx)(_components.code, {
        children: "E2:S15:T04"
      }), ") and reinforced by the more recent ", (0,jsx_runtime.jsx)(_components.code, {
        children: "FR-085"
      }), " re-housing (", (0,jsx_runtime.jsx)(_components.code, {
        children: "E6:S07:T116"
      }), " -> ", (0,jsx_runtime.jsx)(_components.code, {
        children: "E2:S16:T06"
      }), ")."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Action"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Validation"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Identify target story per disposition framework (§2.6) and confirm it has capacity for the task."
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Target story document exists and is not ", (0,jsx_runtime.jsx)(_components.code, {
              children: "COMPLETE"
            }), " / ", (0,jsx_runtime.jsx)(_components.code, {
              children: "RETIRED"
            }), "."]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Create the new task document under the target story using the canonical task template; copy substantive content from the source task; update task ID; preserve historical anchor reference."
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["New ", (0,jsx_runtime.jsx)(_components.code, {
              children: "T\\{n\\}-...md"
            }), " file exists; ", (0,jsx_runtime.jsx)(_components.code, {
              children: "Historical Anchor:"
            }), " line cites the source ", (0,jsx_runtime.jsx)(_components.code, {
              children: "E{e}:S{s}:T{t}"
            }), " ID."]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Mark the source task ", (0,jsx_runtime.jsx)(_components.code, {
              children: "SUPERSEDED"
            }), "; add ", (0,jsx_runtime.jsx)(_components.code, {
              children: "Last updated:"
            }), " note; add ", (0,jsx_runtime.jsx)(_components.code, {
              children: "Superseded by:"
            }), " link to the target task; preserve content for historical traceability."]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Source task status reads ", (0,jsx_runtime.jsx)(_components.code, {
              children: "SUPERSEDED"
            }), "; superseded-by link resolves."]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Rewire the upstream FR/BR/UXR ", (0,jsx_runtime.jsx)(_components.code, {
              children: "Implementing Task:"
            }), " line to the target task path; record the historical implementing task as plain text or an explicit ", (0,jsx_runtime.jsx)(_components.code, {
              children: "Historical implementing task:"
            }), " line."]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["FBU file shows new task path under ", (0,jsx_runtime.jsx)(_components.code, {
              children: "Implementing Task:"
            }), "."]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Update ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ai-dev-kit/docs/project-management/kanban/kboard",
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "kboard.md"
              })
            }), " row(s) to reference the target task path, IPP path (if any), and updated ", (0,jsx_runtime.jsx)(_components.code, {
              children: "Last modified"
            }), " timestamp."]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "kboard row resolves to the new task path."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Update ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ai-dev-kit/docs/project-management/kanban/kboard",
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "kboard.md"
              })
            }), " FBU row to reference the target task and updated ", (0,jsx_runtime.jsx)(_components.code, {
              children: "Last modified"
            }), " timestamp."]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "fbuboard row resolves to the new task path."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Update the source story checklist row (annotate as ", (0,jsx_runtime.jsx)(_components.code, {
              children: "SUPERSEDED"
            }), " with successor link)."]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Source story checklist line carries a successor pointer."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Update the target story checklist row (add new entry per template)."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Target story checklist line exists."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "9"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Run ", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/packages/frameworks/workflow-mgt/scripts/validation/validate_ipw_publication_wiring.py",
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "validate_ipw_publication_wiring.py"
              })
            }), " against the new task ID. If the task uses the consolidated IPP model, declare ", (0,jsx_runtime.jsx)(_components.code, {
              children: "Publication Status: NOT_APPLICABLE"
            }), " with reason."]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Validator returns PASS for the new task."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Optionally delete the source task document only after RW publication of the re-housing has landed and the source story / FBU / boards no longer link to the source task path."
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["No dangling links remain (verified by ", (0,jsx_runtime.jsx)(_components.code, {
              children: "rg"
            }), ")."]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Validator-driven publication declaration."
      }), " Steps 4-9 must land in the same logical change set so that no intermediate validator run sees a half-rewired graph. The consolidated IPP model (single ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Publication Status: NOT_APPLICABLE"
      }), " line + bolded human-readable variant) is the established pattern for tasks that do not generate three separate ICW artifacts; this pattern was used successfully for ", (0,jsx_runtime.jsx)(_components.code, {
        children: "E4:S19:T06"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "E2:S16:T06"
      }), ", and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "E2:S16:T01"
      }), ", and should be reused for any future re-housing target."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "28-guardrail-follow-on-identification-candidate-set",
      children: "2.8 Guardrail follow-on identification (candidate set)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The IPP identifies the following candidate guardrail tasks that the disposition recommendation (under T03 execution) may file. None are filed by this IPP; filing happens downstream once the disposition is selected."
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Candidate"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Surface"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Brief rationale"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Linked to disposition"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Validator extension: placement check"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/packages/frameworks/workflow-mgt/scripts/validation",
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "packages/frameworks/workflow-mgt/scripts/validation/"
              })
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Reject new task creation under a frozen story (e.g. ", (0,jsx_runtime.jsx)(_components.code, {
              children: "E6:S07"
            }), ") unless task carries an explicit override rationale; reject placement that contradicts the story charter when codification can encode the charter."]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "keep-open-narrowed"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "split/re-house"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "close"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: ".cursorrules"
            }), " placement guidance"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/.cursorrules",
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "/.cursorrules"
              })
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Add explicit \"do not default new tasks under ", (0,jsx_runtime.jsx)(_components.code, {
              children: "E6:S07"
            }), "\" guidance with a positive routing table (delivery story examples per problem domain)."]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "keep-open-narrowed"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "split/re-house"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Intake skill update"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/.cursor/skills/intake-process/SKILL.md",
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "/.cursor/skills/intake-process/SKILL.md"
              })
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Strengthen Step 2 placement language (\"delivery story not repository story\") with explicit anti-", (0,jsx_runtime.jsx)(_components.code, {
              children: "E6:S07"
            }), "-default note and a worked example."]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "keep-open-narrowed"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "split/re-house"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Intake guide update"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/packages/frameworks/kanban/FR_BR_INTAKE_GUIDE.md",
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "packages/frameworks/kanban/FR_BR_INTAKE_GUIDE.md"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Mirror intake skill change in the human-readable guide; add a worked example showing correct placement when no obvious story exists."
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "keep-open-narrowed"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "split/re-house"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Task template field"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/packages/frameworks/kanban/templates",
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "packages/frameworks/kanban/templates/"
              })
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Add an optional ", (0,jsx_runtime.jsx)(_components.code, {
              children: "Default Housing Override Rationale:"
            }), " field on task templates that the placement validator can detect when routing diverges from the canonical recommendation."]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "keep-open-narrowed"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "split/re-house"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Story-level routing matrix"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-06/story-07-adk-implementation-analysis-and-package-management",
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "story-07-adk-implementation-analysis-and-package-management.md"
              })
            }), " (or successor doc)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Add an explicit ", (0,jsx_runtime.jsx)(_components.code, {
              children: "In Scope"
            }), " / ", (0,jsx_runtime.jsx)(_components.code, {
              children: "Out of Scope"
            }), " enumeration to the story document so future intake operators have a deterministic check."]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "keep-open-narrowed"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "split/re-house"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Historical-anchor declaration policy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/packages/frameworks/kanban/policies/kanban-governance-policy.md",
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "packages/frameworks/kanban/policies/kanban-governance-policy.md"
              })
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Codify the ", (0,jsx_runtime.jsx)(_components.code, {
              children: "Historical Anchor:"
            }), " line convention used in re-housing (steps 2-3 of §2.7) so legacy task IDs survive as aliases without polluting active work."]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All options"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Story-charter freeze policy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/packages/frameworks/kanban/policies/kanban-governance-policy.md",
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "packages/frameworks/kanban/policies/kanban-governance-policy.md"
              })
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Define the ", (0,jsx_runtime.jsx)(_components.code, {
              children: "RETIRED"
            }), " story status and rules for redirecting new intake when a story is retired."]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "close"
            })
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The investigator must record, per recommended candidate, the surface to edit, the disposition that motivates it, and a one-line rationale."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "29-status-transition-intent-mandatory",
      children: "2.9 Status transition intent (mandatory)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Current task status:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "IN PROGRESS"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsxs)(_components.strong, {
          children: ["Transition trigger to ", (0,jsx_runtime.jsx)(_components.code, {
            children: "IN PROGRESS"
          }), ":"]
        }), " Already satisfied at task creation (", (0,jsx_runtime.jsx)(_components.code, {
          children: "AC6"
        }), " historically ", (0,jsx_runtime.jsx)(_components.code, {
          children: "[x]"
        }), ")."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsxs)(_components.strong, {
          children: ["Transition trigger to ", (0,jsx_runtime.jsx)(_components.code, {
            children: "COMPLETE"
          }), ":"]
        }), " All of the following land:", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Forensic origin report (RF1) with primary evidence per §2.3."
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Codification inventory (RF2) with at least one citation per category in §2.4 and routing classification per surface."
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Triage rubric (RF3) applied with ", (0,jsx_runtime.jsx)(_components.code, {
              children: "drift_ratio"
            }), " recorded."]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Disposition recommendation (RF4) chosen with criteria evidence and required follow-on tasks identified per §2.6."
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Guardrail follow-on candidate set (RF5) finalized per §2.8 (filing happens downstream)."
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Re-housing protocol (RF6) cited and applied at least once (already satisfied by ", (0,jsx_runtime.jsx)(_components.code, {
              children: "BR-069"
            }), "; re-citation in the report suffices)."]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Atomic propagation requirement:"
        }), " When T03 closes, the host task status, Story 019 row status, and any kboard rows must update in the same release/session."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsxs)(_components.strong, {
          children: ["Owner of write to ", (0,jsx_runtime.jsx)(_components.code, {
            children: "COMPLETE"
          }), ":"]
        }), " RW Step 7 / standalone UKW after the host task is updated under user-triggered RW execution."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Decoupling clarification:"
        }), " This IPP does not transition T03 to ", (0,jsx_runtime.jsx)(_components.code, {
          children: "COMPLETE"
        }), " and does not require Wave 2 (forensic execution) or Wave 3 (disposition recommendation) to land for the IPP itself to be considered published."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "210-constraints",
      children: "2.10 Constraints"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Must align with FR-042 IPW/IPP conventions (single durable IPP; ", (0,jsx_runtime.jsx)(_components.code, {
          children: "IPP-"
        }), " prefix; bidirectional wiring; ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Publication Status"
        }), " declared on host task)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Must align with the dev-kit versioning policy without retroactively rewriting historical perpetual ", (0,jsx_runtime.jsx)(_components.code, {
          children: "T101+"
        }), " references."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Must not duplicate ", (0,jsx_runtime.jsx)(_components.code, {
          children: "IPP-E2S16T1"
        }), " (perpetual-task placement scope); cite and defer."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Must not introduce churn on validator or workflow runtime behavior - that is the lane of whichever guardrail follow-on tasks get filed downstream."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Must not file the disposition recommendation; that lands under T03 execution as a deliverable."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "3-test-design",
      children: "3. Test design"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This is a doc-only verification set; no runtime code is changed by this IPP."
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "ID"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Behavior / layer"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Expected check"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IPP publication"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "IPP-E4S19T3-e6s07-default-housing-drift-investigation.md"
            }), " exists in ", (0,jsx_runtime.jsx)(_components.code, {
              children: "docs/implementation-cycles/"
            }), " and conforms to FR-042 IPP shape."]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Host task wiring"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["T03 task doc links the IPP under both Input and References, and declares ", (0,jsx_runtime.jsx)(_components.code, {
              children: "Publication Status: NOT_APPLICABLE"
            }), " with a reason consistent with the consolidated IPP model."]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Upstream FR wiring"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FR-087 lists T03 as Implementing Task and the IPP as a planning backlink."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Story checklist annotation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Story 019's T03 checklist row references the IPP path for discoverability."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Board wiring"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["kboard and fbuboard rows for ", (0,jsx_runtime.jsx)(_components.code, {
              children: "E4:S19:T03"
            }), " / ", (0,jsx_runtime.jsx)(_components.code, {
              children: "FR-087"
            }), " reference the IPP path (replacing the ", (0,jsx_runtime.jsx)(_components.code, {
              children: "--No IPP--"
            }), " token)."]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Forensic method coverage"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "§2.3 specifies primary-evidence, charter-origin, expansion-inflection, current-usage-shape, citation-form, and quantification requirements."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Codification inventory coverage"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "§2.4 lists at least eight categories with sample instances and concrete inspection patterns; classification taxonomy (hard-coded / permissive / operator-habit) defined."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Triage rubric coverage"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "§2.5 defines three buckets, anchor questions, evidence requirements, and a quantitative drift metric."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T9"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Disposition framework completeness"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["§2.6 enumerates ", (0,jsx_runtime.jsx)(_components.code, {
              children: "close"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "keep-open-narrowed"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "split/re-house"
            }), " with criteria, transition mechanics, follow-on tasks, and risk profile per option."]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Re-housing protocol completeness"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "§2.7 specifies a 10-step atomic checklist with validation per step and a validator-driven publication declaration."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T11"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Guardrail candidate identification"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "§2.8 lists candidate guardrail follow-on tasks with surface, rationale, and linked disposition."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T12"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AC traceability"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "§4.4 maps T03 AC1-AC6 and FR-087 F1-F6/NF1-NF3 onto IPP RFs and waves."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T13"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Validator pass"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "validate_ipw_publication_wiring.py --requested E4:S19:T03"
            }), " returns PASS."]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T14"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Link integrity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All markdown links in this IPP and in touched docs resolve to existing files on disk (no dead links)."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "31-verification-method",
      children: "3.1 Verification method"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Manual document inspection of the IPP, T03, FR-087, Story 019, kboard, and fbuboard."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Run ", (0,jsx_runtime.jsx)(_components.code, {
          children: "validate_ipw_publication_wiring.py --requested E4:S19:T03"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Run ", (0,jsx_runtime.jsx)(_components.code, {
          children: "validate_plan_wiring.py"
        }), " and capture status (pre-existing unrelated failures stay out of scope)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "4-implementation-plan",
      children: "4. Implementation plan"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The plan is structured as four waves so each can be released or deferred atomically. Wave 1 is the planning publication that this IPW run produces. Waves 2-4 are owned by ", (0,jsx_runtime.jsx)(_components.code, {
        children: "T03"
      }), " (or downstream guardrail tasks) and are not required for this IPP to be considered published."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "41-wave-1---ipp-publication-and-t03-wiring-this-run",
      children: "4.1 Wave 1 - IPP publication and T03 wiring (this run)"
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
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Publish this IPP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "IPP-E4S19T3-e6s07-default-housing-drift-investigation.md"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1.2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Wire host task T03 (Input, References, Publication Status block)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Task doc linked to IPP and validator-clean"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1.3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Wire FR-087 (IPP backlink under Implementing Task)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FR doc bidirectionally discoverable"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1.4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Annotate Story 019 checklist row for T03 with IPP path"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Story-level discoverability"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1.5"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Replace ", (0,jsx_runtime.jsx)(_components.code, {
              children: "--No IPP--"
            }), " token on E4:S19", ":T03", " / FR-087 rows in kboard.md with link to this IPP"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Boards reflect planning artifact"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1.6"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Run ", (0,jsx_runtime.jsx)(_components.code, {
              children: "validate_ipw_publication_wiring.py --requested E4:S19:T03"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Validator PASS recorded in §5"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "42-wave-2---forensic-investigation-execution-deferred-owned-by-t03",
      children: "4.2 Wave 2 - Forensic investigation execution (deferred, owned by T03)"
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
            children: "2.1"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Reconstruct ", (0,jsx_runtime.jsx)(_components.code, {
              children: "S07"
            }), " charter origin per §2.3"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Investigation report section: charter origin (cites at least two independent primary sources)."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2.2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Identify expansion inflection points per §2.3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Investigation report section: expansion inflection points (cited per inflection)."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2.3"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Enumerate current ", (0,jsx_runtime.jsx)(_components.code, {
              children: "S07"
            }), " task list and shape (count, type mix, status mix, FBU mix)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Investigation report section: current usage shape table."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2.4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Walk codification inventory per §2.4; classify each surface (hard-coded / permissive / operator-habit)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Investigation report section: codification inventory with classifications."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2.5"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Apply triage rubric per §2.5 to current ", (0,jsx_runtime.jsx)(_components.code, {
              children: "S07"
            }), " task list and record ", (0,jsx_runtime.jsx)(_components.code, {
              children: "drift_ratio"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Investigation report section: triage table with ", (0,jsx_runtime.jsx)(_components.code, {
              children: "drift_ratio"
            }), "."]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Wave 2 is the substantive forensic content of T03 and is owned entirely by the T03 execution session."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "43-wave-3---disposition-recommendation-and-guardrail-follow-on-filing-deferred-owned-by-t03",
      children: "4.3 Wave 3 - Disposition recommendation and guardrail follow-on filing (deferred, owned by T03)"
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
            children: "Apply §2.6 disposition framework to Wave 2 evidence"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Investigation report section: disposition recommendation with criteria evidence."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3.2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "For the recommended option, finalize the guardrail follow-on candidate set per §2.8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Investigation report section: guardrail follow-on task list (surface, rationale, disposition link)."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3.3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "File the recommended guardrail follow-on tasks under their owning stories using the atomic intake protocol"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "New task documents wired to existing FRs/BRs/UXRs (or new ones if needed)."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3.4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Update T03 status transition per §2.9 once Waves 2-3 deliverables land"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["T03 status ", (0,jsx_runtime.jsx)(_components.code, {
              children: "IN PROGRESS -> COMPLETE"
            }), " under RW."]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "44-wave-4---re-housing-or-freezing-of-s07-deferred-downstream",
      children: ["4.4 Wave 4 - Re-housing or freezing of ", (0,jsx_runtime.jsx)(_components.code, {
        children: "S07"
      }), " (deferred, downstream)"]
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
            children: "4.1"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["If disposition is ", (0,jsx_runtime.jsx)(_components.code, {
              children: "split/re-house"
            }), ", apply §2.7 re-housing protocol to each ", (0,jsx_runtime.jsx)(_components.code, {
              children: "out-of-scope"
            }), " task identified in Wave 2.5"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "One re-housed task per migration; each landing as its own atomic change set."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4.2"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["If disposition is ", (0,jsx_runtime.jsx)(_components.code, {
              children: "keep-open-narrowed"
            }), ", restate ", (0,jsx_runtime.jsx)(_components.code, {
              children: "S07"
            }), " charter and add explicit ", (0,jsx_runtime.jsx)(_components.code, {
              children: "In Scope"
            }), " / ", (0,jsx_runtime.jsx)(_components.code, {
              children: "Out of Scope"
            }), " enumerations to the story document"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Story 007 charter amendment commit."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4.3"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["If disposition is ", (0,jsx_runtime.jsx)(_components.code, {
              children: "close"
            }), ", mark Story 007 ", (0,jsx_runtime.jsx)(_components.code, {
              children: "RETIRED"
            }), " (or equivalent) and freeze new task creation; update Epic 6 overview"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Story 007 status flipped; Epic 6 charter amendment commit."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Wave 4 is the operational consequence of the disposition decision and lives entirely outside this IPP's planning lane. It is recorded here to make the full lifecycle of ", (0,jsx_runtime.jsx)(_components.code, {
        children: "S07"
      }), " resolution visible."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "45-ac-traceability-matrix-t03-acs-and-fr-087-acs-vs-ipp-rfs-and-waves",
      children: "4.5 AC traceability matrix (T03 ACs and FR-087 ACs vs IPP RFs and waves)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "AC source"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "AC"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Mapped IPP RF"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Mapped IPP section"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Resolved by Wave"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T03 AC1"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Forensic timeline of ", (0,jsx_runtime.jsx)(_components.code, {
              children: "S07"
            }), " intent and expansion documented"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RF1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "§2.3 (method)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1 (contract) + 2 (execution)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T03 AC2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Codification inventory distinguishes hard-coded routing from operator habit"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RF2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "§2.4 (contract + classification taxonomy)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1 (contract) + 2 (execution)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T03 AC3"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["All current ", (0,jsx_runtime.jsx)(_components.code, {
              children: "S07"
            }), " tasks triaged by semantic fit with rationale"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RF3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "§2.5 (rubric)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1 (contract) + 2 (execution)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T03 AC4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Recommended disposition includes migration and compatibility plan"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RF4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "§2.6 (framework)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1 (framework) + 3 (recommendation)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T03 AC5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Follow-on guardrail changes specified as concrete implementation tasks"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RF5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "§2.8 (candidate set)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1 (candidates) + 3 (filing)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T03 AC6"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Re-housing protocol proven on a real case (", (0,jsx_runtime.jsx)(_components.code, {
              children: "BR-069 -> E2:S15:T04"
            }), ")"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RF6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "§2.7 (codification of precedent)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "already satisfied historically"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FR-087-F1"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Forensic origin analysis of ", (0,jsx_runtime.jsx)(_components.code, {
              children: "E6:S07"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RF1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "§2.3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1 + 2"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FR-087-F2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Codification points identified"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RF2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "§2.4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1 + 2"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FR-087-F3"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Existing ", (0,jsx_runtime.jsx)(_components.code, {
              children: "S07"
            }), " tasks classified by semantic fit; drift quantified"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RF3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "§2.5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1 + 2"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FR-087-F4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Closure decision options with impact/risk analysis"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RF4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "§2.6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1 + 3"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FR-087-F5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Enforceable placement guardrails"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RF5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "§2.8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1 (contract) + 3 (filing) + 4 (operational change)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FR-087-F6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Explicit re-housing protocol with traceability preservation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RF6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "§2.7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1 (codification) + already satisfied historically"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FR-087-NF1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Findings cite primary repository evidence"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RNF1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "§2.3 (citation form)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1 (contract) + 2 (execution)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FR-087-NF2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Recommendations preserve backward traceability"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RNF2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "§1.3 (invariants), §2.7 (atomic re-housing)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1 (constraints) + 4 (execution)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FR-087-NF3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Governance outputs actionable and testable"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RNF3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "§2.4 (classification), §2.5 (metric), §2.6 (criteria), §2.8 (candidates)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1 (contracts) + 3 (filing)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "46-files-touched-by-wave-1",
      children: "4.6 Files touched by Wave 1"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "docs/implementation-cycles/IPP-E4S19T3-e6s07-default-housing-drift-investigation.md"
        }), " (new - this file)"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/project-management/kanban/epics/epic-04/story-19-fr-br-uxr-abstract-governance-and-intake/T03-e6s07-default-housing-drift-investigation-and-closure-decision-fr087.md"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/project-management/kanban/fr-br/FR-087-e6s07-default-housing-root-cause-and-closure-decision.md"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/project-management/kanban/epics/epic-04/story-19-fr-br-uxr-abstract-governance-and-intake.md"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/project-management/kanban/kboard.md"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/project-management/kanban/kboard.md"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "5-success--verification-criteria",
      children: "5. Success / verification criteria"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Runnable validators (from ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/packages/frameworks/workflow-mgt/scripts/validation",
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "packages/frameworks/workflow-mgt/scripts/validation/"
        })
      }), "):"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      className: "contains-task-list",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "python3 \"packages/frameworks/workflow-mgt/scripts/validation/validate_ipw_publication_wiring.py\" --requested E4:S19:T03"
        }), " — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "PASS"
        }), " (2026-04-27). Output: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "PASS: publication wiring OK for E4:S19:T3"
        }), ". Host task carries ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Publication Status: NOT_APPLICABLE"
        }), " plus ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Publication N/A Reason:"
        }), " per the consolidated IPP model."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "python3 \"packages/frameworks/workflow-mgt/scripts/validation/validate_plan_wiring.py\""
        }), " — only the pre-existing unrelated ", (0,jsx_runtime.jsx)(_components.code, {
          children: "E5:S01:T75: missing Host Task link"
        }), " failure observed; tracked separately and out of scope for this IPP. No new wiring regressions introduced by E4:S19", ":T03", "."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Deliverable checks:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      className: "contains-task-list",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "IPP-E4S19T3-e6s07-default-housing-drift-investigation.md"
        }), " exists and follows FR-042 IPP shape."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "T03 task doc links this IPP under Input and References and declares ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Publication Status: NOT_APPLICABLE"
        }), " with a reason."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "FR-087 lists T03 as Implementing Task with an IPP backlink."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "Story 019 checklist row for T03 references the IPP path."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "kboard and fbuboard rows for ", (0,jsx_runtime.jsx)(_components.code, {
          children: "E4:S19:T03"
        }), " / ", (0,jsx_runtime.jsx)(_components.code, {
          children: "FR-087"
        }), " reference the IPP path (legacy ", (0,jsx_runtime.jsx)(_components.code, {
          children: "--No IPP--"
        }), " token replaced)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "Forensic method, codification inventory contract, triage rubric, disposition framework, re-housing protocol, and guardrail candidate set are present in §2.3-§2.8."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "6-references",
      children: "6. References"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsxs)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-04/story-19-fr-br-uxr-abstract-governance-and-intake/T03-e6s07-default-housing-drift-investigation-and-closure-decision-fr087",
          children: ["Host task E4:S19", ":T03"]
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/implementation-cycles/E4S19T03-e6s07-default-housing-investigation-report",
          children: "Investigation report (Wave 2–3)"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsxs)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/fr-br/FR-087-e6s07-default-housing-root-cause-and-closure-decision",
          children: ["FR-087 - Investigate ", (0,jsx_runtime.jsx)(_components.code, {
            children: "E6:S07"
          }), " default-housing drift, codification points, and closure decision"]
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-04/story-19-fr-br-uxr-abstract-governance-and-intake",
          children: "Story 019 - FR/BR/UXR abstract governance and intake"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-06/story-07-adk-implementation-analysis-and-package-management",
          children: "Story 007 - ADK implementation analysis and package management (subject under investigation)"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/fr-br/BR-069-kboard-fbuboard-earliest-last-modified-timestamps-overwritten",
          children: "BR-069 - Last-modified timestamp overwrite (re-housing precedent)"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsxs)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-02/story-15-ipw-governance-and-publication-contract/T04-investigate-earliest-last-modified-timestamp-overwrite-regression-br069",
          children: ["E2:S15", ":T04", " - BR-069 investigation (re-housing target)"]
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/implementation-cycles/IPP-E2S16T01-canonical-perpetual-ongoing-tasks-story",
          children: "IPP-E2S16T1 - Canonical perpetual ongoing tasks story (delegated perpetual scope)"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/implementation-cycles/IPP-E4S19T06-fbu-meta-normalization-and-intake-governance",
          children: "IPP-E4S19T6 - FBU meta normalization and intake governance (governance shape reference)"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/packages/frameworks/kanban/policies/kanban-governance-policy.md",
          children: "Kanban governance policy"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/packages/frameworks/kanban/FR_BR_INTAKE_GUIDE.md",
          children: "FR/BR intake guide"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/.cursor/skills/intake-process/SKILL.md",
          children: "Intake skill"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/packages/frameworks/workflow-mgt/KB/Documentation/Developer_Docs/vwmp/implementation-planning-workflow-agent-execution.md",
          children: "IPW execution guide"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/fr-br/FR-042-implementation-planning-workflow-ipw",
          children: "FR-042 - IPW canonical workflow"
        })
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