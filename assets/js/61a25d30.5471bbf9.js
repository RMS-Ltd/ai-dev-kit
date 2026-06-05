"use strict";
(self["webpackChunkportal"] = self["webpackChunkportal"] || []).push([["97264"], {
12120(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_implementation_cycles_icw_e_7_s_01_t_06_test_design_md_61a_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-implementation-cycles-icw-e-7-s-01-t-06-test-design-md-61a.json
var site_docs_implementation_cycles_icw_e_7_s_01_t_06_test_design_md_61a_namespaceObject = JSON.parse('{"id":"implementation-cycles/ICW-E7S01T06-test-design","title":"ICW Test Design – E7:S01:T06 (Update Changelog Workflow)","description":"1. Test Strategy","source":"@site/../docs/implementation-cycles/ICW-E7S01T06-test-design.md","sourceDirName":"implementation-cycles","slug":"/implementation-cycles/ICW-E7S01T06-test-design","permalink":"/ai-dev-kit/docs/implementation-cycles/ICW-E7S01T06-test-design","draft":false,"unlisted":false,"editUrl":"https://github.com/RMS-Ltd/ai-dev-kit/tree/main/docs/../docs/implementation-cycles/ICW-E7S01T06-test-design.md","tags":[],"version":"current","frontMatter":{"lifecycle":"project","ttl_days":365,"created_at":"2026-03-15T16:40:00.000Z","expires_at":"2027-03-15T16:40:00.000Z","housekeeping_policy":"archive","policy_salience":{"policy_id":"ucw-test-2026","type":"implementation-cycle","domain":{"primary":"release-governance","secondary":["documentation"]},"audience":["documentation-agent","release-workflow-agent","qa"]}},"sidebar":"docsSidebar","previous":{"title":"ICW Specification – E7:S01:T06 (Update Changelog Workflow)","permalink":"/ai-dev-kit/docs/implementation-cycles/ICW-E7S01T06-specification"},"next":{"title":"ICW-E7S1T7-Implementation-Plan: Markdown Maintenance Workflow (MMW)","permalink":"/ai-dev-kit/docs/implementation-cycles/ICW-E7S01T07-implementation-plan"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ../docs/implementation-cycles/ICW-E7S01T06-test-design.md


const frontMatter = {
	lifecycle: 'project',
	ttl_days: 365,
	created_at: new Date('2026-03-15T16:40:00.000Z'),
	expires_at: new Date('2027-03-15T16:40:00.000Z'),
	housekeeping_policy: 'archive',
	policy_salience: {
		policy_id: 'ucw-test-2026',
		type: 'implementation-cycle',
		domain: {
			primary: 'release-governance',
			secondary: [
				'documentation'
			]
		},
		audience: [
			'documentation-agent',
			'release-workflow-agent',
			'qa'
		]
	}
};
const contentTitle = 'ICW Test Design – E7:S01 (Update Changelog Workflow)';

const assets = {

};



const toc = [{
  "value": "1. Test Strategy",
  "id": "1-test-strategy",
  "level": 2
}, {
  "value": "2. Test Matrix",
  "id": "2-test-matrix",
  "level": 2
}, {
  "value": "3. Detailed Scenarios",
  "id": "3-detailed-scenarios",
  "level": 2
}, {
  "value": "UCW-T01 Retention Compliance Drill",
  "id": "ucw-t01-retention-compliance-drill",
  "level": 3
}, {
  "value": "UCW-T02 Ordering &amp; Format Review",
  "id": "ucw-t02-ordering--format-review",
  "level": 3
}, {
  "value": "UCW-T03 Archive Integrity",
  "id": "ucw-t03-archive-integrity",
  "level": 3
}, {
  "value": "UCW-T04 Evidence &amp; CI Hook",
  "id": "ucw-t04-evidence--ci-hook",
  "level": 3
}, {
  "value": "4. Test Data",
  "id": "4-test-data",
  "level": 2
}, {
  "value": "5. Environment &amp; Tooling",
  "id": "5-environment--tooling",
  "level": 2
}, {
  "value": "6. Reporting",
  "id": "6-reporting",
  "level": 2
}, {
  "value": "7. Exit Criteria",
  "id": "7-exit-criteria",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
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
        id: "icw-test-design--e7s01-update-changelog-workflow",
        children: ["ICW Test Design – E7:S01", ":T06", " (Update Changelog Workflow)"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1-test-strategy",
      children: "1. Test Strategy"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Manual scenario-driven validation proving that UCW delivers consistent, human-performed changelog stewardship while CI hooks verify evidence. Tests emphasize traceability, retention discipline, and archive integrity instead of automated mutations."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "2-test-matrix",
      children: "2. Test Matrix"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "ID"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Scenario"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Purpose"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Owner"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "UCW-T01"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Retention Compliance Drill"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ensure operator trims to retention threshold and archives excess entries"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Documentation Agent"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "UCW-T02"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ordering & Format Review"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Confirm manual edits preserve Keep-a-Changelog format and canonical ordering"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Release Engineer"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "UCW-T03"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Archive Integrity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Validate backlinks, metadata, and archive file updates"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Documentation Agent"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "UCW-T04"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Evidence & CI Hook"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Verify UCW checklist, diff artifacts, and CI verification gating RW"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RW Agent"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "3-detailed-scenarios",
      children: "3. Detailed Scenarios"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "ucw-t01-retention-compliance-drill",
      children: "UCW-T01 Retention Compliance Drill"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Preconditions:"
          }), " ", (0,jsx_runtime.jsx)(_components.code, {
            children: "CHANGELOG.md"
          }), " contains ≥25 entries; UCW checklist template prepared; archive path writable."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Steps:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Documentation Agent enumerates newest 20 releases."
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Manually edit changelog keeping only top 20 entries; move remainder to archive file."
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Insert placeholder section in main changelog referencing archive file."
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Record edits in UCW checklist (versions moved, operator signature, reviewer)."
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Expected Results:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Main changelog lists exactly 20 entries."
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Archive file contains moved versions with metadata + backlinks."
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Checklist stored under ", (0,jsx_runtime.jsx)(_components.code, {
              children: "docs/maintenance/logs/ucw/"
            }), "."]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Validation Tools:"
          }), " Read-only retention validator (counts entries), markdownlint, git diff screenshot."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "ucw-t02-ordering--format-review",
      children: "UCW-T02 Ordering & Format Review"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Preconditions:"
          }), " UCW-T01 complete; diff available."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Steps:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Release Engineer verifies each remaining entry follows RC.E.S.T+BUILD descending order and correct ", (0,jsx_runtime.jsx)(_components.code, {
              children: "DD-MM-YY"
            }), " dates."]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Run ordering validator script (read-only) to confirm no duplicates or gaps."
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Document findings in UCW log."
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Expected Results:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "No ordering violations or formatting errors."
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Validator output attached to UCW log."
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Validation Tools:"
          }), " ", (0,jsx_runtime.jsx)(_components.code, {
            children: "scripts/documentation/check_changelog_order.py"
          }), " (read-only), manual checklist."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "ucw-t03-archive-integrity",
      children: "UCW-T03 Archive Integrity"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Preconditions:"
          }), " Archive file updated via UCW-T01."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Steps:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Documentation Agent ensures each archived entry lists version, date, epic/story/task summary, and backlink to main changelog."
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Cross-check that main changelog contains pointer to archive section."
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Auditor spot-checks previous archive entries for consistency."
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Expected Results:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Every archived version has proper metadata and backlinks."
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "No orphaned versions; archive diff committed with UCW log reference."
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Validation Tools:"
          }), " Manual review, link checker."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "ucw-t04-evidence--ci-hook",
      children: "UCW-T04 Evidence & CI Hook"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Preconditions:"
          }), " Checklists + diffs from prior scenarios stored."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Steps:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["RW Agent runs CI job ", (0,jsx_runtime.jsx)(_components.code, {
              children: "ucw-verification"
            }), " (read-only) ensuring log file + retention evidence exist."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["CI job confirms presence of ", (0,jsx_runtime.jsx)(_components.code, {
              children: "docs/maintenance/logs/ucw/UCW-<date>.md"
            }), ", diff attachment, reviewer signature."]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "RW Step 8 proceeds only if CI job passes."
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Expected Results:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "CI job succeeds when UCW evidence exists; fails otherwise."
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "RW log references UCW checklist ID."
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Validation Tools:"
          }), " CI pipeline logs, RW checklist template."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "4-test-data",
      children: "4. Test Data"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Copy of current ", (0,jsx_runtime.jsx)(_components.code, {
          children: "CHANGELOG.md"
        }), " with ≥25 entries."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Archive directory ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/changelog-and-release-notes/changelog-archive/"
        }), " and placeholder file for this run."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "UCW checklist template (Markdown) capturing operator, reviewer, retention count, archive file paths."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "5-environment--tooling",
      children: "5. Environment & Tooling"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Standard dev workstation with markdownlint, git, read-only validation scripts."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["CI environment capable of running ", (0,jsx_runtime.jsx)(_components.code, {
          children: "ucw-verification"
        }), " job (no write permissions to changelog files)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "6-reporting",
      children: "6. Reporting"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Results logged under ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/maintenance/logs/ucw/UCW-<date>-test.md"
        }), " with pass/fail per scenario, evidence links, and remediation notes."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Failures must include corrective action and responsible owner before RW resumes."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "7-exit-criteria",
      children: "7. Exit Criteria"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "All four scenarios executed with PASS status."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "UCW checklist + CI log attached to RW documentation."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Stakeholders (Documentation Agent, Release Engineer) sign off on test run."
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