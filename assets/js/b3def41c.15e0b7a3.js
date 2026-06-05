"use strict";
(self["webpackChunkportal"] = self["webpackChunkportal"] || []).push([["38146"], {
39564(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_project_management_kanban_fr_br_br_076_e_7_s_00_must_not_host_concrete_tasks_md_b3d_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-project-management-kanban-fr-br-br-076-e-7-s-00-must-not-host-concrete-tasks-md-b3d.json
var site_docs_project_management_kanban_fr_br_br_076_e_7_s_00_must_not_host_concrete_tasks_md_b3d_namespaceObject = JSON.parse('{"id":"project-management/kanban/fr-br/BR-076-e7-s00-must-not-host-concrete-tasks","title":"Bug Report BR-076: E7:S00 must not host concrete tasks (S00 abstract-only)","description":"Type: Bug Report (BR)","source":"@site/../docs/project-management/kanban/fr-br/BR-076-e7-s00-must-not-host-concrete-tasks.md","sourceDirName":"project-management/kanban/fr-br","slug":"/project-management/kanban/fr-br/BR-076-e7-s00-must-not-host-concrete-tasks","permalink":"/ai-dev-kit/docs/project-management/kanban/fr-br/BR-076-e7-s00-must-not-host-concrete-tasks","draft":false,"unlisted":false,"editUrl":"https://github.com/RMS-Ltd/ai-dev-kit/tree/main/docs/../docs/project-management/kanban/fr-br/BR-076-e7-s00-must-not-host-concrete-tasks.md","tags":[],"version":"current","frontMatter":{"lifecycle":"evergreen","ttl_days":null,"created_at":"2026-05-30T13:15:00.000Z","expires_at":null,"housekeeping_policy":"keep"},"sidebar":"docsSidebar","previous":{"title":"Bug Report BR-075: RW perpetual-task releases may not persist BUILD increment in version.py","permalink":"/ai-dev-kit/docs/project-management/kanban/fr-br/BR-075-rw-perpetual-task-build-not-reflected-in-version-py"},"next":{"title":"Bug Report BR-077: Documented Python 3.8+ Contradicts Repo Scripts Requiring 3.10+","permalink":"/ai-dev-kit/docs/project-management/kanban/fr-br/BR-077-documented-python-38-contradicts-repo-310-requirement"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ../docs/project-management/kanban/fr-br/BR-076-e7-s00-must-not-host-concrete-tasks.md


const frontMatter = {
	lifecycle: 'evergreen',
	ttl_days: null,
	created_at: new Date('2026-05-30T13:15:00.000Z'),
	expires_at: null,
	housekeeping_policy: 'keep'
};
const contentTitle = 'Bug Report BR-076: E7 must not host concrete tasks (S00 abstract-only)';

const assets = {

};



const toc = [{
  "value": "Summary",
  "id": "summary",
  "level": 2
}, {
  "value": "Problem Statement",
  "id": "problem-statement",
  "level": 2
}, {
  "value": "Expected Behavior",
  "id": "expected-behavior",
  "level": 2
}, {
  "value": "Observed Behavior",
  "id": "observed-behavior",
  "level": 2
}, {
  "value": "Impact",
  "id": "impact",
  "level": 2
}, {
  "value": "Scope",
  "id": "scope",
  "level": 2
}, {
  "value": "In scope (this BR)",
  "id": "in-scope-this-br",
  "level": 3
}, {
  "value": "Out of scope (follow-on)",
  "id": "out-of-scope-follow-on",
  "level": 3
}, {
  "value": "Acceptance Criteria",
  "id": "acceptance-criteria",
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
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsxs)(_components.h1, {
        id: "bug-report-br-076-e7-must-not-host-concrete-tasks-s00-abstract-only",
        children: ["Bug Report BR-076: E7", ":S00", " must not host concrete tasks (S00 abstract-only)"]
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Type:"
      }), " Bug Report (BR)", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "ID:"
      }), " BR-076", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Submitted:"
      }), " 2026-05-30", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Submitted By:"
      }), " User (maintainer governance)", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Priority:"
      }), " HIGH", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Severity:"
      }), " HIGH", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Status:"
      }), " RESOLVED (", (0,jsx_runtime.jsx)(_components.strong, {
        children: "v0.4.19.10+2"
      }), " — E04:S19", ":T10", "; docs-only alignment ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "v0.4.19.10+3"
      }), ")"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Implementing Task:"
      }), " ", (0,jsx_runtime.jsxs)(_components.a, {
        href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-04/story-19-fr-br-uxr-abstract-governance-and-intake/T10-e7-s00-detasking-abstract-space-enforcement-br076",
        children: ["E04:S19", ":T10"]
      }), " (", (0,jsx_runtime.jsx)(_components.strong, {
        children: "v0.4.19.10+2"
      }), ")"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Fix Version:"
      }), " v0.4.19.10+2"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Related:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/project-management/kanban/fr-br/FR-072-uniform-repository-abstract-space-kanban-rules",
        children: "FR-072"
      }), " (Approach A / D), ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/governance/standards/dev-kit-versioning-policy",
        children: "dev-kit-versioning-policy.md"
      }), " (S00 Abstract Space), ", (0,jsx_runtime.jsxs)(_components.a, {
        href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-05/story-00-fr-repo",
        children: ["E5", ":S00", " abstract model"]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsxs)(_components.strong, {
        children: ["Story 0 (", (0,jsx_runtime.jsx)(_components.code, {
          children: "S00"
        }), ") is abstract space"]
      }), " across epics: forensic anchor only (", (0,jsx_runtime.jsx)(_components.code, {
        children: "0.\\{epic\\}.0.0+0"
      }), "), ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "no concrete tasks"
      }), ", and ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "no temporary “registry” housing"
      }), " that must later be re-homed to a delivery story."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsxs)(_components.strong, {
        children: ["Epic 7 ", (0,jsx_runtime.jsx)(_components.code, {
          children: "E07:S00"
        })]
      }), " still contains ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "concrete task documents"
      }), " (", (0,jsx_runtime.jsx)(_components.code, {
        children: "T01"
      }), "–", (0,jsx_runtime.jsx)(_components.code, {
        children: "T06"
      }), " under ", (0,jsx_runtime.jsx)(_components.code, {
        children: "story-00-uxr-repo/"
      }), ") and drives ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "split traceability"
      }), " (e.g. ", (0,jsx_runtime.jsxs)(_components.strong, {
        children: ["E07:S00", ":T05"]
      }), " registry + ", (0,jsx_runtime.jsxs)(_components.strong, {
        children: ["E07:S01", ":T09"]
      }), " implementation for ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "UXR-005"
      }), "). That pattern creates ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "admin overhead"
      }), ", violates the ", (0,jsx_runtime.jsxs)(_components.strong, {
        children: ["E5", ":S00"]
      }), " precedent, and conflicts with ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "FR-072 Approach D"
      }), " (“do not file new intake under repository stories”)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "problem-statement",
      children: "Problem Statement"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Semantic violation:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "S00"
        }), " reads as “abstract space” but ", (0,jsx_runtime.jsxs)(_components.strong, {
          children: ["E7", ":S00"]
        }), " behaves as a ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "perpetual UXR repository"
        }), " with a full task checklist and RW version coordinates on ", (0,jsx_runtime.jsx)(_components.code, {
          children: "0.7.0.\\{task\\}+build"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Double housing:"
        }), " New UXRs are filed as ", (0,jsx_runtime.jsxs)(_components.strong, {
          children: ["S00", ":Txx", " “anchors”"]
        }), " plus a separate ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "S01"
        }), " (or other) ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "implementing"
        }), " task — two E:S", ":T", " identities, two board rows, and later migration cost."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Policy drift:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/governance/standards/dev-kit-versioning-policy",
          children: "dev-kit-versioning-policy.md"
        }), " already states new intake should use ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "semantic delivery"
        }), " placement; ", (0,jsx_runtime.jsxs)(_components.strong, {
          children: ["E7", ":S00"]
        }), " task files contradict that for agents and humans."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Precedent ignored:"
        }), " ", (0,jsx_runtime.jsxs)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-05/story-00-fr-repo",
          children: ["E5", ":S00"]
        }), " was ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "detasked"
        }), " (repository work moved to ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "S01"
        }), "); ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "E7"
        }), " was not brought to the same end state."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "expected-behavior",
      children: "Expected Behavior"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "E07:S00"
          })
        }), " is ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "abstract-only"
        }), " (", (0,jsx_runtime.jsx)(_components.code, {
          children: "v0.7.0.0+0"
        }), "): story doc describes abstract space; ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "no active task checklist rows"
        }), " for new work."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "UXR/FR/BR intake"
        }), " for Epic 7 lands on ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "semantic delivery stories"
        }), " only (e.g. ", (0,jsx_runtime.jsxs)(_components.strong, {
          children: ["E07", ":S01"]
        }), ", ", (0,jsx_runtime.jsxs)(_components.strong, {
          children: ["E07", ":S05"]
        }), ", host epic story) — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "one"
        }), " implementing task per report."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsxs)(_components.strong, {
          children: ["Historical ", (0,jsx_runtime.jsx)(_components.code, {
            children: "E07:S00:Txx"
          })]
        }), " coordinates remain ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "linkable"
        }), " (redirect tables in UXR/FR headers); ", (0,jsx_runtime.jsxs)(_components.strong, {
          children: ["no new ", (0,jsx_runtime.jsx)(_components.code, {
            children: "T07+"
          })]
        }), " under S00."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Intake / UKW / RW"
        }), " docs and validators ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "reject or warn"
        }), " on new primary tasks filed under any epic’s ", (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "S00"
          })
        }), "."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "observed-behavior",
      children: "Observed Behavior"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "story-00-uxr-repo.md"
        }), " lists ", (0,jsx_runtime.jsxs)(_components.strong, {
          children: ["E07:S00", ":T01", "–T06"]
        }), " as active/historical registry tasks."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "UXR-005:"
        }), " ", (0,jsx_runtime.jsxs)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-07/story-00-uxr-repo/T05-uxr-005-repository-anchor",
          children: ["E07:S00", ":T05"]
        }), " + ", (0,jsx_runtime.jsxs)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-07/story-01-codebase-maintenance-tasks/E07S01T09-kanban-template-governance",
          children: ["E07:S01", ":T09"]
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "kboard"
        }), " / ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "fbuboard"
        }), " rows reference ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "both"
        }), " registry and implementation tasks for the same UXR."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "FR-072"
        }), " migration (", (0,jsx_runtime.jsxs)(_components.strong, {
          children: ["E04:S19", ":T08"]
        }), ") is in progress but ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "E7 S00 detasking"
        }), " is not explicitly tracked as a closure criterion."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "impact",
      children: "Impact"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Repeated ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "re-housing"
        }), " and checklist churn when registry tasks are “temporary.”"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Wrong RW anchors"
        }), " (", (0,jsx_runtime.jsx)(_components.code, {
          children: "v0.7.0.x"
        }), " vs ", (0,jsx_runtime.jsx)(_components.code, {
          children: "v0.7.1.x"
        }), ") for the same body of work."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Agents following ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "“file UXR under S00”"
        }), " legacy patterns recreate debt after ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "FR-072"
        }), " doc updates."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Blocks clean ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "uniform S00 rule"
        }), " (same model as ", (0,jsx_runtime.jsxs)(_components.strong, {
          children: ["E5", ":S00"]
        }), ") for adopters."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "scope",
      children: "Scope"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "in-scope-this-br",
      children: "In scope (this BR)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsxs)(_components.strong, {
          children: ["E7", ":S00", " detasking:"]
        }), " Hollow ", (0,jsx_runtime.jsxs)(_components.strong, {
          children: ["E07", ":S00"]
        }), " to abstract-only; migrate or supersede ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "T01–T06"
        }), " registry roles into semantic hosts with redirect notes."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "UXR-005 exemplar:"
        }), " Collapse to ", (0,jsx_runtime.jsxs)(_components.strong, {
          children: ["E07:S01", ":T09"]
        }), " only (or chosen semantic task); update ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "UXR-005"
        }), ", boards, and story checklists."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Governance:"
        }), " Intake guide, kanban governance, ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".cursorrules"
        }), " / agent intake skill — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "explicit “never S00 for tasks.”"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsxs)(_components.strong, {
          children: ["Coordination with ", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ai-dev-kit/docs/project-management/kanban/fr-br/FR-072-uniform-repository-abstract-space-kanban-rules",
            children: "FR-072"
          })]
        }), " — this BR is the ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "E7-specific enforcement slice"
        }), " (may complete before or as part of T08 D2–D4)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "out-of-scope-follow-on",
      children: "Out of scope (follow-on)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsxs)(_components.strong, {
          children: ["E6", ":S00"]
        }), " BR-repo detasking (separate pass; same rule)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Epic 21+"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "S00"
        }), " folders (audit only noted in acceptance criteria doc)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Automated validator ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "blocking"
        }), " all S00 task creation (optional follow-up FR)."]
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
          children: "story-00-uxr-repo.md"
        }), " marked ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "abstract-only"
        }), "; no ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "TODO/IN PROGRESS"
        }), " tasks remain on S00 checklist (historical rows redirected)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "AC2:"
        }), " Each legacy ", (0,jsx_runtime.jsxs)(_components.strong, {
          children: ["E07:S00", ":T01", "–T06"]
        }), " has a documented ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "semantic host"
        }), " or ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "historical-only"
        }), " banner + UXR/FR header redirect (no dual primary implementing tasks)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "AC3:"
        }), " ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "UXR-005"
        }), " (and boards) reference ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "one"
        }), " implementing task; ", (0,jsx_runtime.jsxs)(_components.strong, {
          children: ["E07:S00", ":T05"]
        }), " is not an active work row."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "AC4:"
        }), " Active intake policy docs state ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "S00 never hosts new tasks"
        }), " (all epics); aligns with ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "FR-072 Approach D"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "AC5:"
        }), " ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "FR-072"
        }), " / ", (0,jsx_runtime.jsxs)(_components.strong, {
          children: ["E04:S19", ":T08"]
        }), " checklist notes ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "BR-076"
        }), " closure or explicit merge criteria."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "references",
      children: "References"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/fr-br/FR-072-uniform-repository-abstract-space-kanban-rules",
          children: "FR-072 — Uniform repository vs abstract-space kanban rules"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsxs)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-04/story-19-fr-br-uxr-abstract-governance-and-intake/T08-fr072-approach-d-phase-d2-d4-migration-and-doc-sweep",
          children: ["E04:S19", ":T08", " — FR-072 Approach D migration"]
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsxs)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-04/story-19-fr-br-uxr-abstract-governance-and-intake/T10-e7-s00-detasking-abstract-space-enforcement-br076",
          children: ["E04:S19", ":T10", " — E7 S00 detasking"]
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/fr-br/UXR-005-kanban-board-formatting-and-governance",
          children: "UXR-005"
        }), " (exemplar split)"]
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