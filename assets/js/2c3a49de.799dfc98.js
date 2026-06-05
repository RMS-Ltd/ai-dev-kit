"use strict";
(self["webpackChunkportal"] = self["webpackChunkportal"] || []).push([["72083"], {
2566(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_implementation_cycles_ipp_e_03_s_02_t_12_task_touch_semver_collision_hardening_md_2c3_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-implementation-cycles-ipp-e-03-s-02-t-12-task-touch-semver-collision-hardening-md-2c3.json
var site_docs_implementation_cycles_ipp_e_03_s_02_t_12_task_touch_semver_collision_hardening_md_2c3_namespaceObject = JSON.parse('{"id":"implementation-cycles/IPP-E03S02T12-task-touch-semver-collision-hardening","title":"E03:S02:T12 — Planning: Task-touch SemVer collision remediation (IPW)","description":"Host TaskS02:T12)","source":"@site/../docs/implementation-cycles/IPP-E03S02T12-task-touch-semver-collision-hardening.md","sourceDirName":"implementation-cycles","slug":"/implementation-cycles/IPP-E03S02T12-task-touch-semver-collision-hardening","permalink":"/ai-dev-kit/docs/implementation-cycles/IPP-E03S02T12-task-touch-semver-collision-hardening","draft":false,"unlisted":false,"editUrl":"https://github.com/RMS-Ltd/ai-dev-kit/tree/main/docs/../docs/implementation-cycles/IPP-E03S02T12-task-touch-semver-collision-hardening.md","tags":[],"version":"current","frontMatter":{"lifecycle":"evergreen","ttl_days":null,"created_at":"2026-06-04T22:00:00.000Z","expires_at":null,"housekeeping_policy":"keep"},"sidebar":"docsSidebar","previous":{"title":"E02:S16:T17 — Planning: Spec, Tests, Implementation Plan (IPW)","permalink":"/ai-dev-kit/docs/implementation-cycles/IPP-E02S16T17-agent-bootstrap-and-task-routing-fr103"},"next":{"title":"E04:S06:T06 — Planning: BR-005 canonical epics structure gap verification (IPW)","permalink":"/ai-dev-kit/docs/implementation-cycles/IPP-E04S06T06-br005-canonical-epics-structure-gap"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ../docs/implementation-cycles/IPP-E03S02T12-task-touch-semver-collision-hardening.md


const frontMatter = {
	lifecycle: 'evergreen',
	ttl_days: null,
	created_at: new Date('2026-06-04T22:00:00.000Z'),
	expires_at: null,
	housekeeping_policy: 'keep'
};
const contentTitle = 'E03:S02 — Planning: Task-touch SemVer collision remediation (IPW)';

const assets = {

};



const toc = [{
  "value": "1. Requirements (Ascertained Baseline)",
  "id": "1-requirements-ascertained-baseline",
  "level": 2
}, {
  "value": "1.1 Functional requirements (ascertained)",
  "id": "11-functional-requirements-ascertained",
  "level": 3
}, {
  "value": "1.2 Non-functional requirements (ascertained)",
  "id": "12-non-functional-requirements-ascertained",
  "level": 3
}, {
  "value": "1.3 Invariants and boundaries",
  "id": "13-invariants-and-boundaries",
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
  "value": "2.2 Specification mapping",
  "id": "22-specification-mapping",
  "level": 3
}, {
  "value": "2.3 Constraints",
  "id": "23-constraints",
  "level": 3
}, {
  "value": "2.4 Status transition intent",
  "id": "24-status-transition-intent",
  "level": 3
}, {
  "value": "2.5 ADR necessity decision",
  "id": "25-adr-necessity-decision",
  "level": 3
}, {
  "value": "3. Test design",
  "id": "3-test-design",
  "level": 2
}, {
  "value": "3.1 Wave 2 (shipped — satisfied)",
  "id": "31-wave-2-shipped--satisfied",
  "level": 3
}, {
  "value": "3.2 Wave 3 — verification matrix",
  "id": "32-wave-3--verification-matrix",
  "level": 3
}, {
  "value": "4. Implementation plan",
  "id": "4-implementation-plan",
  "level": 2
}, {
  "value": "4.0 Wave ledger",
  "id": "40-wave-ledger",
  "level": 3
}, {
  "value": "4.1 Wave 2 steps (complete)",
  "id": "41-wave-2-steps-complete",
  "level": 3
}, {
  "value": "4.2 Wave 3 steps (verification path)",
  "id": "42-wave-3-steps-verification-path",
  "level": 3
}, {
  "value": "4.3 Wave 3b steps (conditional — V1–V5 fail only)",
  "id": "43-wave-3b-steps-conditional--v1v5-fail-only",
  "level": 3
}, {
  "value": "4.4 Files (wave 2 — shipped)",
  "id": "44-files-wave-2--shipped",
  "level": 3
}, {
  "value": "4.5 Files (wave 3 — on execution)",
  "id": "45-files-wave-3--on-execution",
  "level": 3
}, {
  "value": "4.6 Dependency order (wave 3)",
  "id": "46-dependency-order-wave-3",
  "level": 3
}, {
  "value": "5. Documentation deliverables",
  "id": "5-documentation-deliverables",
  "level": 2
}, {
  "value": "5.1 Existing documents to update",
  "id": "51-existing-documents-to-update",
  "level": 3
}, {
  "value": "5.2 New documents to create",
  "id": "52-new-documents-to-create",
  "level": 3
}, {
  "value": "5.3 Documentation gaps and explicit non-changes",
  "id": "53-documentation-gaps-and-explicit-non-changes",
  "level": 3
}, {
  "value": "6. Documentation housing",
  "id": "6-documentation-housing",
  "level": 2
}, {
  "value": "7. Success / verification criteria",
  "id": "7-success--verification-criteria",
  "level": 2
}, {
  "value": "7.1 Wave 2 (shipped)",
  "id": "71-wave-2-shipped",
  "level": 3
}, {
  "value": "7.2 Wave 3 (complete)",
  "id": "72-wave-3-complete",
  "level": 3
}, {
  "value": "8. Rolling backlog / wave ledger",
  "id": "8-rolling-backlog--wave-ledger",
  "level": 2
}, {
  "value": "8.1 Shipped waves",
  "id": "81-shipped-waves",
  "level": 3
}, {
  "value": "8.2 Wave 3 verification checklist",
  "id": "82-wave-3-verification-checklist",
  "level": 3
}, {
  "value": "8.3 Wave 3b triggers",
  "id": "83-wave-3b-triggers",
  "level": 3
}, {
  "value": "8.4 Open decision: tag alignment",
  "id": "84-open-decision-tag-alignment",
  "level": 3
}, {
  "value": "References",
  "id": "references",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    blockquote: "blockquote",
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
        id: "e03s02--planning-task-touch-semver-collision-remediation-ipw",
        children: ["E03:S02", ":T12", " — Planning: Task-touch SemVer collision remediation (IPW)"]
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Host Task:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-03/story-02-versioning-cookbook-and-examples/T12-implement-task-touch-semver-mapping-mode",
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "T12-implement-task-touch-semver-mapping-mode.md"
        })
      }), " ", (0,jsx_runtime.jsxs)(_components.strong, {
        children: ["(E03:S02", ":T12", ")"]
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Planning for:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/project-management/kanban/fr-br/FR-045-adr-002-task-touch-derived-mapping",
        children: "FR-045"
      }), " · ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/project-management/kanban/fr-br/FR-046-rw-semver-tag-task-touch-mode",
        children: "FR-046"
      }), " · ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/project-management/kanban/fr-br/BR-061-semver-task-touch-counter-increments-too-often",
        children: "BR-061"
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Status:"
      }), " COMPLETE (wave 3 closed ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "v0.3.2.12+5"
      }), " — 2026-06-05)"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "IPW revision:"
        }), " Follow-on wave per rolling-backlog pattern. Task ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "COMPLETE"
        }), "; linked FBUs ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "REOPENED"
        }), " pending user verification. Implementation gated on explicit authorization per FR-083."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1-requirements-ascertained-baseline",
      children: "1. Requirements (Ascertained Baseline)"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "11-functional-requirements-ascertained",
      children: "1.1 Functional requirements (ascertained)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "ID"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Requirement"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Source"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Wave"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RF1"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Injective PATCH: each finalized internal maps to a unique PATCH under ", (0,jsx_runtime.jsx)(_components.code, {
              children: "rc_0"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FR-045 NF02, BR-061"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2 ✅"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RF2"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Injective SemVer core: no two distinct internals share ", (0,jsx_runtime.jsx)(_components.code, {
              children: "MAJOR.MINOR.PATCH"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FR-046, FR-045 recurrence"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2 ✅"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RF3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Finalize-time hard-fail with deterministic diagnostics"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BR-061"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2 ✅"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RF4"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Read-only convert idempotent; mutate only on ", (0,jsx_runtime.jsx)(_components.code, {
              children: "finalize=True"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BR-061"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2 ✅"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RF5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Registry audit + repair for ai-dev-kit (manifest-driven)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FR-045, T12 AC backfill"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2 ✅"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RF6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RW boundary: fail before silent SemVer tag collision"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FR-046"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2 ✅"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RF7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No remote tag rewrite; document tag↔internal mismatches"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "User decision"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2 ✅"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RF8"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "User verification gate:"
            }), " Maintainer confirms injective registry + converter behaviour on live ", (0,jsx_runtime.jsx)(_components.code, {
              children: "dev"
            }), " history before FBU closure"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FR-045/046 recurrence"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RF9"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Evidence pack:"
            }), " Document verification commands, outputs, residual tag/registry mismatches"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Repair doc RF7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RF10"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "FBU closure:"
            }), " On verified pass → terminal FR-045/FR-046 (and BR-061 if applicable); prune V-band row; ledger ", (0,jsx_runtime.jsx)(_components.code, {
              children: "intake-completed.md"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ADR-018 V-band, KG-R2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RF11"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Conditional follow-on:"
            }), " If verification fails or new collision post-repair → scoped implementation (converter, RW Step 11/12.5, registry repair)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "User wave3_plus"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3b"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RF12"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Tag-alignment decision (optional):"
            }), " If misalignment unacceptable, documented remediation (manifest addendum / advisory) — ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "no force-moving remote tags"
            }), " unless separately authorized"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FR-045 RF7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3b"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "12-non-functional-requirements-ascertained",
      children: "1.2 Non-functional requirements (ascertained)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "ID"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Requirement"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Source"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Wave"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RNF1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "pytest coverage + RW Step 9 validator"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Project convention"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2 ✅ / 3"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RNF2"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Backward-compatible ", (0,jsx_runtime.jsx)(_components.code, {
              children: "mapping_history"
            }), " shape"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "semver-registry.yaml"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2 ✅"
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
        }), " 1 internal ↔ 1 PATCH ↔ 1 SemVer core (for task_touch primary tags)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "In scope (wave 2 — shipped):"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "semver_converter.py"
        }), ", audit/repair/validate scripts, registry repair, policy/incident docs."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "In scope (wave 3):"
        }), " Verification evidence, FBU/kboard reconciliation, optional docs-only RW closure."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "In scope (wave 3b — conditional):"
        }), " Converter/RW boundary patches, registry re-repair, advisory tag-alignment doc."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Out of scope:"
        }), " Force-moving published Git tags; new FR-repo intake tasks under E05", ":S01", "."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "2-specification",
      children: "2. Specification"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "21-goal",
      children: "2.1 Goal"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Wave 2 (shipped):"
      }), " Restore trustworthy 1:1 task-touch mapping, block new collisions at finalize, and repair live ", (0,jsx_runtime.jsx)(_components.code, {
        children: "semver-registry.yaml"
      }), " without rewriting remote tags. Released through ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "v0.3.2.12+4"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Wave 3 (pending):"
      }), " Verify wave-2 remediation on live history; obtain user sign-off; close ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "REOPENED"
      }), " FBUs and V-band row when evidence satisfies RF8–RF10."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Wave 3b (conditional):"
      }), " If V1–V5 fail or new collisions appear, implement scoped fixes per RF11–RF12 before FBU closure."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "22-specification-mapping",
      children: "2.2 Specification mapping"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Wave 2:"
      }), " Converter gains PATCH- and core-level injective guards; counter syncs to ", (0,jsx_runtime.jsx)(_components.code, {
        children: "max(patch)"
      }), " after finalize. Audit/repair tooling fixed four known collision groups. ", (0,jsx_runtime.jsx)(_components.code, {
        children: "validate_semver_registry_injective.py"
      }), " blocks RW when registry is non-injective."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Wave 3:"
      }), " Manual/automated verification matrix (V1–V5) produces evidence pack. No code changes required on pass path."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Wave 3b:"
      }), " Re-audit registry; patch finalize/RW boundary if gap found; extend repair manifest; optional advisory for ", (0,jsx_runtime.jsx)(_components.code, {
        children: "v0.4.870"
      }), " tag misalignment (documented in ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/maintenance/semver-registry-collision-repair-2026-06-04",
        children: "repair doc"
      }), ")."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "23-constraints",
      children: "2.3 Constraints"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Primary RW tag uses SemVer core without ", (0,jsx_runtime.jsx)(_components.code, {
          children: "+BUILD"
        }), "."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Repair keeps canonical internals per manifest; orphans may be removed when duplicate of canonical row."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Changelog language: use ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Attempted fix"
        }), " / ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Change implemented"
        }), " until user verifies; ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Fixed"
        }), " only after confirmation."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "24-status-transition-intent",
      children: "2.4 Status transition intent"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Current task status:"
        }), " ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "COMPLETE"
        }), " (", (0,jsx_runtime.jsx)(_components.code, {
          children: "v0.3.2.12+4"
        }), ")."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Wave 3 Step 1:"
        }), " Confirm task remains ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "COMPLETE"
        }), "; update IPP §8 and task doc ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Last updated"
        }), " (planning-only — no status downgrade)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Wave 3b trigger:"
        }), " If RF11 implementation lands → task may return to ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "IN PROGRESS"
        }), " for that scoped sub-wave only (not full reopen)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "FBU status:"
        }), " FR-045 / FR-046 / BR-061 remain ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "REOPENED"
        }), " until RF8 evidence + user sign-off → terminal (IMPLEMENTED/FIXED/RESOLVED per doc type)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "V-band row (kboard):"
        }), " Prune only in same session as FBU closure (FR-077 atomicity)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Transition owner:"
        }), " Implementation execution / RW Step 7 on closure build."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "25-adr-necessity-decision",
      children: "2.5 ADR necessity decision"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "ID"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Trigger"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Y/N"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Evidence"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Alternatives"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ADR-002 task-touch already chosen"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reversibility"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Registry repair via git"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Blast radius"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Y"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All RW SemVer tags — wave 2 refinement only (shipped)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Precedent"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Incident + policy docs exist"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Constraint trade-off"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No new trade-off in wave 3"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Governance contract"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RW validators already codified"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Supersedes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No supersession"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Outcome:"
      }), " ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "ALREADY_COVERED"
      }), " — ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/governance/standards/dev-kit-versioning-policy",
        children: "dev-kit-versioning-policy.md"
      }), " and ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/architecture/standards-and-adrs/semver-tag-collision-incident-2026-03-07",
        children: "semver-tag-collision-incident-2026-03-07.md"
      }), ". Re-score only if wave 3b introduces tag-rewrite policy (RF12 separate authorization)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "3-test-design",
      children: "3. Test design"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "31-wave-2-shipped--satisfied",
      children: "3.1 Wave 2 (shipped — satisfied)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "ID"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Behavior / layer"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Expected check"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Evidence"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Finalize duplicate PATCH"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ValueError"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "test_task_touch_mapping.py"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Finalize duplicate core, different BUILD"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ValueError"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "test_task_touch_mapping.py"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Audit on fixture with collisions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Non-zero report"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "audit_semver_registry_collisions.py"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Repair manifest on temp registry"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Zero collisions after"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "repair_semver_registry_collisions.py"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "validate_semver_registry_injective.py"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Exit 0 on repaired registry"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "tests/test_semver_registry_injective.py"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Read-only / idempotent finalize"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tests pass"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "test_task_touch_mapping.py"
            })
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "32-wave-3--verification-matrix",
      children: "3.2 Wave 3 — verification matrix"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "ID"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Behavior"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Check"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Command / artefact"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "V1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Live registry injective"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Exit 0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "python packages/frameworks/workflow-mgt/scripts/validation/validate_semver_registry_injective.py"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "V2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Collision audit clean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Exit 0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "python packages/frameworks/workflow-mgt/scripts/version/audit_semver_registry_collisions.py"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "V3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Read-only convert does not bump counter"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Counter unchanged after read-only ", (0,jsx_runtime.jsx)(_components.code, {
              children: "semver_converter"
            }), " call for fixed internal version"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Manual or scripted compare of ", (0,jsx_runtime.jsx)(_components.code, {
              children: "task_touch_counter"
            }), " in ", (0,jsx_runtime.jsx)(_components.code, {
              children: "semver-registry.yaml"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "V4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RW tag boundary hard-fail"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Step 11 rejects conflicting primary tag lineage"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Unit tests in ", (0,jsx_runtime.jsx)(_components.code, {
              children: "test_task_touch_mapping.py"
            }), " + documented ", (0,jsx_runtime.jsx)(_components.code, {
              children: "v0.4.870"
            }), " residual"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "V5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Regression suite"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All green"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "pytest packages/frameworks/workflow-mgt/scripts/version/test_task_touch_mapping.py tests/test_semver_registry_injective.py"
            })
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "4-implementation-plan",
      children: "4. Implementation plan"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "40-wave-ledger",
      children: "4.0 Wave ledger"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Wave"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Status"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Release anchor"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Scope"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Shipped"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "v0.3.2.12+2"
            }), " … ", (0,jsx_runtime.jsx)(_components.code, {
              children: "+3"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BR-061 read-only/finalize split; collision guards"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Shipped"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "v0.3.2.12+4"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Registry repair; injective validator; maintenance manifest"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "COMPLETE"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "v0.3.2.12+5"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "V1–V5 + FBU closure via RW --art"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3b"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Conditional"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TBD"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RF11 fixes only if V1–V5 fail"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "41-wave-2-steps-complete",
      children: "4.1 Wave 2 steps (complete)"
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
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Task IN PROGRESS → COMPLETE after wave 2 RW"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Task doc ", (0,jsx_runtime.jsx)(_components.code, {
              children: "v0.3.2.12+4"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Injective guards + counter sync in ", (0,jsx_runtime.jsx)(_components.code, {
              children: "semver_converter.py"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Code"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "audit_semver_registry_collisions.py"
            }), " + ", (0,jsx_runtime.jsx)(_components.code, {
              children: "repair_semver_registry_collisions.py"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Scripts"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Apply repair manifest to ", (0,jsx_runtime.jsx)(_components.code, {
              children: "semver-registry.yaml"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Clean registry (counter ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "873"
            }), " post-repair; live ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "903"
            }), " as of 2026-06-05)"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "validate_semver_registry_injective.py"
            }), " + RW Step 9 hook"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Validator"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "pytest extensions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tests green"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Policy, incident, maintenance manifest docs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Docs"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "42-wave-3-steps-verification-path",
      children: "4.2 Wave 3 steps (verification path)"
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
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "1"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "[MANDATORY]"
            }), " Confirm E03:S02", ":T12", " ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "COMPLETE"
            }), "; add IPP §8 wave-3 header; update task doc ", (0,jsx_runtime.jsx)(_components.code, {
              children: "Last updated"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Task doc + IPP"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Run V1–V5; capture outputs"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["D-C3 ", (0,jsx_runtime.jsx)(_components.code, {
              children: "docs/maintenance/semver-verification-evidence-E03S02T12-wave3.md"
            }), " (CREATE) or task verification section"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "User sign-off on FR-045/046 recurrence resolution"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Recorded in evidence doc"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Update FR-045, FR-046, BR-061 with verification notes (not \"Fixed\" until user confirms)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FBU docs"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["RW Step 7: prune V-band row; append ", (0,jsx_runtime.jsx)(_components.code, {
              children: "intake-completed.md"
            }), " on FBU closure"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Kanban four-surface"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Optional ", (0,jsx_runtime.jsx)(_components.code, {
              children: "RW -d E03:S02:T12"
            }), " or BUILD+1 closure release"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Version/changelog"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "N"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "[MANDATORY]"
            }), " Reconcile statuses: task ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "COMPLETE"
            }), " (or ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "IN PROGRESS"
            }), " only if wave 3b code lands); FBUs terminal if verified; V-band pruned"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Kanban"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "43-wave-3b-steps-conditional--v1v5-fail-only",
      children: "4.3 Wave 3b steps (conditional — V1–V5 fail only)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Re-audit ", (0,jsx_runtime.jsx)(_components.code, {
          children: "semver-registry.yaml"
        }), " for new collision groups since 2026-06-04 repair."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Patch ", (0,jsx_runtime.jsx)(_components.code, {
          children: "semver_converter.py"
        }), " and/or RW Step 11–12.5 if boundary gap found."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Extend ", (0,jsx_runtime.jsx)(_components.a, {
          target: "_blank",
          "data-noBrokenLinkCheck": true,
          href: (__webpack_require__(74639)/* ["default"] */.A) + "",
          children: "repair manifest"
        }), "; re-run repair + injective validator."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Update ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/maintenance/semver-registry-collision-repair-2026-06-04",
          children: "repair doc"
        }), " with wave 3b addendum."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Optional tag-alignment advisory (RF12) — still no remote retag unless separately authorized."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Re-run V1–V5; return to wave 3 closure steps."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "44-files-wave-2--shipped",
      children: "4.4 Files (wave 2 — shipped)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "packages/frameworks/workflow-mgt/scripts/version/semver_converter.py"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "packages/frameworks/workflow-mgt/scripts/version/audit_semver_registry_collisions.py"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "packages/frameworks/workflow-mgt/scripts/version/repair_semver_registry_collisions.py"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "packages/frameworks/workflow-mgt/scripts/version/task_touch_registry_audit.py"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "packages/frameworks/workflow-mgt/scripts/validation/validate_semver_registry_injective.py"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "packages/frameworks/workflow-mgt/scripts/version/test_task_touch_mapping.py"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "tests/test_semver_registry_injective.py"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "semver-registry.yaml"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/maintenance/semver-registry-collision-repair-2026-06-04.md"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/maintenance/semver-registry-collision-repair-manifest.yaml"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "45-files-wave-3--on-execution",
      children: "4.5 Files (wave 3 — on execution)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "docs/maintenance/semver-verification-evidence-E03S02T12-wave3.md"
        }), " (CREATE on verification run)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["T12 task doc, FR-045, FR-046, BR-061, ", (0,jsx_runtime.jsx)(_components.code, {
          children: "kboard.md"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "intake-completed.md"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "46-dependency-order-wave-3",
      children: "4.6 Dependency order (wave 3)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "V1–V5 evidence before FBU status change."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "FBU doc updates before V-band prune."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "RW only after kanban reconciliation evidence."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "5-documentation-deliverables",
      children: "5. Documentation deliverables"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "51-existing-documents-to-update",
      children: "5.1 Existing documents to update"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Doc ID"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Path"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Action"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Scope"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Wave"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "D-U1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ai-dev-kit/docs/implementation-cycles/IPP-E03S02T12-task-touch-semver-collision-hardening",
              children: "IPP-E3S2T12"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "UPDATE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Wave ledger, §7–§8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3 ✅ (this revision)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "D-U2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T12 task doc"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DONE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Wave 3 pointer, verification section"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3 ✅"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "D-U3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FR-045, FR-046, BR-061"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DONE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Verification outcome / fix attempted"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3 ✅"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "D-U4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ai-dev-kit/docs/maintenance/semver-registry-collision-repair-2026-06-04",
              children: "semver-registry-collision-repair-2026-06-04.md"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DONE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Wave 3 verification addendum"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3 ✅"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "D-U5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/packages/frameworks/workflow-mgt/KB/Documentation/Developer_Docs/vwmp/release-workflow-agent-execution.md",
              children: "release-workflow-agent-execution.md"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NONE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Unless wave 3b changes Step 11"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "D-U6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T12 task doc (wave 2)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DONE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IPP link, AC notes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2 ✅"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "D-U7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "dev-kit-versioning-policy.md"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DONE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PATCH + core injectivity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2 ✅"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "D-U8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "semver-tag-collision-incident"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DONE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Wave-2 addendum"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2 ✅"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "52-new-documents-to-create",
      children: "5.2 New documents to create"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Doc ID"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Path"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Action"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Purpose"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Wave"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "D-C1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "docs/maintenance/semver-registry-collision-repair-2026-06-04.md"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DONE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Repair report"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2 ✅"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "D-C2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "docs/maintenance/semver-registry-collision-repair-manifest.yaml"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DONE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Canonical choices"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2 ✅"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "D-C3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "docs/maintenance/semver-verification-evidence-E03S02T12-wave3.md"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DONE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Evidence pack for user sign-off"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3 ✅"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "53-documentation-gaps-and-explicit-non-changes",
      children: "5.3 Documentation gaps and explicit non-changes"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Gap / topic"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Resolution"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["Tag misalignment (", (0,jsx_runtime.jsx)(_components.code, {
              children: "v0.4.870"
            }), " vs ", (0,jsx_runtime.jsx)(_components.code, {
              children: "0.6.9.17+1"
            }), ")"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Documented in repair doc RF7; advisory-only unless user authorizes separate retag task"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "New ADR for wave 3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NONE — ALREADY_COVERED per §2.5"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Docusaurus portal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NONE — maintenance docs not in portal nav unless later BR-066 filing task"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "6-documentation-housing",
      children: "6. Documentation housing"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Doc ID"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Canonical path"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Publication status"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Lifecycle"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Inbound links"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IPP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "docs/implementation-cycles/IPP-E3S2T12-task-touch-semver-collision-hardening.md"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PUBLISHED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "evergreen"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T12 Input, References"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "D-C1, D-C2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "docs/maintenance/"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PUBLISHED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "evergreen"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IPP §4, FR-045/046"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "D-C3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "docs/maintenance/semver-verification-evidence-E03S02T12-wave3.md"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PUBLISHED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "evergreen"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T12 verification section, IPP §8"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "7-success--verification-criteria",
      children: "7. Success / verification criteria"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "71-wave-2-shipped",
      children: "7.1 Wave 2 (shipped)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      className: "contains-task-list",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "Audit reports zero PATCH/core collisions on repaired registry (", (0,jsx_runtime.jsx)(_components.code, {
          children: "audit_semver_registry_collisions.py"
        }), " exit 0 post-repair)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "pytest"
        }), " task-touch + registry injective tests pass"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "validate_semver_registry_injective.py"
        }), " exits 0 (confirmed at RW ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "v0.4.19.12+5"
        }), " — counter ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "903"
        }), ")"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "Finalize rejects duplicate PATCH/core in unit tests"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "Maintenance doc records ", (0,jsx_runtime.jsx)(_components.code, {
          children: "v0.4.870"
        }), " tag misalignment (no retag)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "72-wave-3-complete",
      children: "7.2 Wave 3 (complete)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      className: "contains-task-list",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "V1–V5 verification completed with captured outputs — ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/maintenance/semver-verification-evidence-E03S02T12-wave3",
          children: "D-C3 evidence"
        }), " (2026-06-05, ", (0,jsx_runtime.jsx)(_components.code, {
          children: "dev"
        }), " @ ", (0,jsx_runtime.jsx)(_components.code, {
          children: "70b7242"
        }), ")"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "User sign-off recorded for FR-045/046 recurrence resolution (", (0,jsx_runtime.jsx)(_components.code, {
          children: "RW E03:S02:T12 --art"
        }), ")"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "FR-045, FR-046, BR-061 terminal; verification notes in source docs"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "V-band row pruned; ", (0,jsx_runtime.jsx)(_components.code, {
          children: "intake-completed.md"
        }), " ledger entries on FBU closure (", (0,jsx_runtime.jsx)(_components.strong, {
          children: "v0.3.2.12+5"
        }), ")"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "All §5 wave-3 UPDATE/CREATE items implemented"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "8-rolling-backlog--wave-ledger",
      children: "8. Rolling backlog / wave ledger"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "81-shipped-waves",
      children: "8.1 Shipped waves"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Build"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "SemVer (approx)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Summary"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "v0.3.2.12+2"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BR-061 read-only/finalize split"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "v0.3.2.12+3"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "v0.4.733+3"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Injective finalize; RW Step 11 hard-fail"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "v0.3.2.12+4"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Registry repair manifest; injective validator"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "82-wave-3-verification-checklist",
      children: "8.2 Wave 3 verification checklist"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Run from repo root on ", (0,jsx_runtime.jsx)(_components.code, {
        children: "dev"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "python packages/frameworks/workflow-mgt/scripts/validation/validate_semver_registry_injective.py\npython packages/frameworks/workflow-mgt/scripts/version/audit_semver_registry_collisions.py\npytest packages/frameworks/workflow-mgt/scripts/version/test_task_touch_mapping.py tests/test_semver_registry_injective.py -q\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Record stdout, exit codes, and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "task_touch_counter"
      }), " value in D-C3. Obtain user confirmation before marking FBUs terminal."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "83-wave-3b-triggers",
      children: "8.3 Wave 3b triggers"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Activate wave 3b if any of:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["V1 or V2 exits non-zero on current ", (0,jsx_runtime.jsx)(_components.code, {
          children: "dev"
        }), " HEAD"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "V5 pytest failures"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["New collision group discovered in ", (0,jsx_runtime.jsx)(_components.code, {
          children: "mapping_history"
        }), " after 2026-06-04 repair"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "RW Step 11 allows silent tag collision on live boundary test"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "84-open-decision-tag-alignment",
      children: "8.4 Open decision: tag alignment"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Option"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Action"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Accept documented misalignment"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Keep ", (0,jsx_runtime.jsx)(_components.code, {
              children: "v0.4.870"
            }), " on historical commit; canonical mapping in registry is SoT"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Advisory remediation"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Extend repair doc + evidence pack; no ", (0,jsx_runtime.jsx)(_components.code, {
              children: "git push --force"
            }), " tags"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Separate authorized task"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Only if user explicitly requests remote tag moves"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "references",
      children: "References"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/packages/frameworks/workflow-mgt/scripts/version/semver_converter.py",
          children: "semver_converter.py"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/architecture/standards-and-adrs/ipw-adr-necessity-checklist",
          children: "IPW ADR checklist"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/architecture/standards-and-adrs/semver-tag-collision-incident-2026-03-07",
          children: "Incident log"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/maintenance/semver-registry-collision-repair-2026-06-04",
          children: "Repair report"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/fr-br/FR-077-ipw-built-task-status-transition-and-kboard-sync",
          children: "FR-077 — IPW status transition and kboard sync"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/architecture/standards-and-adrs/ADR-018-single-kanban-board-consolidation",
          children: "ADR-018 — V-band verification rows"
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
74639(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/files/semver-registry-collision-repair-manifest-2593271c38365215d5664f4d516f73f7.yaml");

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