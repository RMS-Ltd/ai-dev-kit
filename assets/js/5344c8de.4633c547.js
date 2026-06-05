"use strict";
(self["webpackChunkportal"] = self["webpackChunkportal"] || []).push([["29428"], {
71372(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_architecture_standards_and_adrs_changelog_management_policy_md_534_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-architecture-standards-and-adrs-changelog-management-policy-md-534.json
var site_docs_architecture_standards_and_adrs_changelog_management_policy_md_534_namespaceObject = JSON.parse('{"id":"architecture/standards-and-adrs/changelog-management-policy","title":"Changelog Management Policy","description":"Status: Active","source":"@site/../docs/architecture/standards-and-adrs/changelog-management-policy.md","sourceDirName":"architecture/standards-and-adrs","slug":"/architecture/standards-and-adrs/changelog-management-policy","permalink":"/ai-dev-kit/docs/architecture/standards-and-adrs/changelog-management-policy","draft":false,"unlisted":false,"editUrl":"https://github.com/RMS-Ltd/ai-dev-kit/tree/main/docs/../docs/architecture/standards-and-adrs/changelog-management-policy.md","tags":[],"version":"current","frontMatter":{"lifecycle":"evergreen","ttl_days":null,"created_at":"2025-12-21T21:20:00.000Z","expires_at":null,"housekeeping_policy":"keep","policy_salience":{"policy_id":"changelog-management-policy","type":"process","domain":{"primary":"changelog","secondary":["documentation","maintenance"]},"audience":["agents","developers","maintainers"],"applies_to":{"documents":["CHANGELOG.md","docs/changelog-and-release-notes/changelog-archive/CHANGELOG_ARCHIVE.md","docs/changelog-and-release-notes/changelog-archive/CHANGELOG_v*.md"],"activities":["changelog-management-workflow","release-workflow"]},"key_rules":[{"id":"CHANGELOG-MGMT-R1","summary":"Changelog must follow \\"Keep a Changelog\\" format with newest entries first","must_level":"MUST","when_applies":["release-workflow","changelog-management-workflow"],"enforcement":{"owner":["agents"],"mechanisms":["automated-validation","pre-commit-checks"]},"validation_hints":["check-format","validate-ordering","check-version-headers"]},{"id":"CHANGELOG-MGMT-R2","summary":"No duplicate version entries allowed","must_level":"MUST","when_applies":["changelog-management-workflow","release-workflow"],"enforcement":{"owner":["agents"],"mechanisms":["automated-detection","cmw-removal"]},"validation_hints":["detect-duplicates","remove-duplicates"]},{"id":"CHANGELOG-MGMT-R3","summary":"All entries must have valid version headers","must_level":"MUST","when_applies":["release-workflow","changelog-management-workflow"],"enforcement":{"owner":["agents"],"mechanisms":["automated-validation"]},"validation_hints":["validate-version-format","check-header-presence"]}],"triggers":[{"id":"CHANGELOG-MGMT-T1","event":"changelog-format-violation","required_checks":["format","ordering","duplicates"]},{"id":"CHANGELOG-MGMT-T2","event":"duplicate-detected","required_checks":["version-comparison","content-similarity"]}],"integration_points":[{"id":"CHANGELOG-MGMT-I1","component":"release-workflow","step":"step-9","behavior":"validate-changelog-format-and-ordering"},{"id":"CHANGELOG-MGMT-I2","component":"changelog-management-workflow","step":"step-2","behavior":"validate-and-fix-format-ordering-duplicates"}],"related_policies":["changelog-archival-policy.md"]}},"sidebar":"docsSidebar","previous":{"title":"changelog-archival-policy","permalink":"/ai-dev-kit/docs/architecture/standards-and-adrs/changelog-archival-policy"},"next":{"title":"Changelog Ordering Investigation Report","permalink":"/ai-dev-kit/docs/architecture/standards-and-adrs/changelog-ordering-investigation-report"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ../docs/architecture/standards-and-adrs/changelog-management-policy.md


const frontMatter = {
	lifecycle: 'evergreen',
	ttl_days: null,
	created_at: new Date('2025-12-21T21:20:00.000Z'),
	expires_at: null,
	housekeeping_policy: 'keep',
	policy_salience: {
		policy_id: 'changelog-management-policy',
		type: 'process',
		domain: {
			primary: 'changelog',
			secondary: [
				'documentation',
				'maintenance'
			]
		},
		audience: [
			'agents',
			'developers',
			'maintainers'
		],
		applies_to: {
			documents: [
				'CHANGELOG.md',
				'docs/changelog-and-release-notes/changelog-archive/CHANGELOG_ARCHIVE.md',
				'docs/changelog-and-release-notes/changelog-archive/CHANGELOG_v*.md'
			],
			activities: [
				'changelog-management-workflow',
				'release-workflow'
			]
		},
		key_rules: [
			{
				id: 'CHANGELOG-MGMT-R1',
				summary: 'Changelog must follow "Keep a Changelog" format with newest entries first',
				must_level: 'MUST',
				when_applies: [
					'release-workflow',
					'changelog-management-workflow'
				],
				enforcement: {
					owner: [
						'agents'
					],
					mechanisms: [
						'automated-validation',
						'pre-commit-checks'
					]
				},
				validation_hints: [
					'check-format',
					'validate-ordering',
					'check-version-headers'
				]
			},
			{
				id: 'CHANGELOG-MGMT-R2',
				summary: 'No duplicate version entries allowed',
				must_level: 'MUST',
				when_applies: [
					'changelog-management-workflow',
					'release-workflow'
				],
				enforcement: {
					owner: [
						'agents'
					],
					mechanisms: [
						'automated-detection',
						'cmw-removal'
					]
				},
				validation_hints: [
					'detect-duplicates',
					'remove-duplicates'
				]
			},
			{
				id: 'CHANGELOG-MGMT-R3',
				summary: 'All entries must have valid version headers',
				must_level: 'MUST',
				when_applies: [
					'release-workflow',
					'changelog-management-workflow'
				],
				enforcement: {
					owner: [
						'agents'
					],
					mechanisms: [
						'automated-validation'
					]
				},
				validation_hints: [
					'validate-version-format',
					'check-header-presence'
				]
			}
		],
		triggers: [
			{
				id: 'CHANGELOG-MGMT-T1',
				event: 'changelog-format-violation',
				required_checks: [
					'format',
					'ordering',
					'duplicates'
				]
			},
			{
				id: 'CHANGELOG-MGMT-T2',
				event: 'duplicate-detected',
				required_checks: [
					'version-comparison',
					'content-similarity'
				]
			}
		],
		integration_points: [
			{
				id: 'CHANGELOG-MGMT-I1',
				component: 'release-workflow',
				step: 'step-9',
				behavior: 'validate-changelog-format-and-ordering'
			},
			{
				id: 'CHANGELOG-MGMT-I2',
				component: 'changelog-management-workflow',
				step: 'step-2',
				behavior: 'validate-and-fix-format-ordering-duplicates'
			}
		],
		related_policies: [
			'changelog-archival-policy.md'
		]
	}
};
const contentTitle = 'Changelog Management Policy';

const assets = {

};



const toc = [{
  "value": "1. Purpose",
  "id": "1-purpose",
  "level": 2
}, {
  "value": "2. Format Requirements",
  "id": "2-format-requirements",
  "level": 2
}, {
  "value": "2.1 &quot;Keep a Changelog&quot; Format",
  "id": "21-keep-a-changelog-format",
  "level": 3
}, {
  "value": "2.2 Version Header Format",
  "id": "22-version-header-format",
  "level": 3
}, {
  "value": "2.3 Date Format",
  "id": "23-date-format",
  "level": 3
}, {
  "value": "3. Ordering Requirements",
  "id": "3-ordering-requirements",
  "level": 2
}, {
  "value": "3.1 Newest First Rule",
  "id": "31-newest-first-rule",
  "level": 3
}, {
  "value": "3.2 Canonical Version Ordering",
  "id": "32-canonical-version-ordering",
  "level": 3
}, {
  "value": "3.3 Entry Separation",
  "id": "33-entry-separation",
  "level": 3
}, {
  "value": "4. Duplicate Prevention",
  "id": "4-duplicate-prevention",
  "level": 2
}, {
  "value": "4.1 No Duplicate Versions",
  "id": "41-no-duplicate-versions",
  "level": 3
}, {
  "value": "4.2 Duplicate Detection Logic",
  "id": "42-duplicate-detection-logic",
  "level": 3
}, {
  "value": "5. Validation Requirements",
  "id": "5-validation-requirements",
  "level": 2
}, {
  "value": "5.1 Format Validation",
  "id": "51-format-validation",
  "level": 3
}, {
  "value": "5.2 Ordering Validation",
  "id": "52-ordering-validation",
  "level": 3
}, {
  "value": "5.3 Duplicate Validation",
  "id": "53-duplicate-validation",
  "level": 3
}, {
  "value": "6. Maintenance Procedures",
  "id": "6-maintenance-procedures",
  "level": 2
}, {
  "value": "6.1 Automated Maintenance (CMW)",
  "id": "61-automated-maintenance-cmw",
  "level": 3
}, {
  "value": "6.2 Manual Maintenance",
  "id": "62-manual-maintenance",
  "level": 3
}, {
  "value": "7. Integration with Release Workflow (RW)",
  "id": "7-integration-with-release-workflow-rw",
  "level": 2
}, {
  "value": "7.1 RW Step 4: Update Main Changelog",
  "id": "71-rw-step-4-update-main-changelog",
  "level": 3
}, {
  "value": "7.2 RW Step 9: Run Validators",
  "id": "72-rw-step-9-run-validators",
  "level": 3
}, {
  "value": "7.3 Pre-Commit Validation",
  "id": "73-pre-commit-validation",
  "level": 3
}, {
  "value": "8. Common Issues and Solutions",
  "id": "8-common-issues-and-solutions",
  "level": 2
}, {
  "value": "8.1 Ordering Violations",
  "id": "81-ordering-violations",
  "level": 3
}, {
  "value": "8.2 Duplicate Entries",
  "id": "82-duplicate-entries",
  "level": 3
}, {
  "value": "8.3 Format Inconsistencies",
  "id": "83-format-inconsistencies",
  "level": 3
}, {
  "value": "8.4 Orphaned Entries",
  "id": "84-orphaned-entries",
  "level": 3
}, {
  "value": "9. Best Practices",
  "id": "9-best-practices",
  "level": 2
}, {
  "value": "9.1 Entry Writing",
  "id": "91-entry-writing",
  "level": 3
}, {
  "value": "9.2 Entry Maintenance",
  "id": "92-entry-maintenance",
  "level": 3
}, {
  "value": "9.3 Validation Frequency",
  "id": "93-validation-frequency",
  "level": 3
}, {
  "value": "10. Compliance and Enforcement",
  "id": "10-compliance-and-enforcement",
  "level": 2
}, {
  "value": "10.1 Automated Enforcement",
  "id": "101-automated-enforcement",
  "level": 3
}, {
  "value": "10.2 Manual Compliance",
  "id": "102-manual-compliance",
  "level": 3
}, {
  "value": "11. Related Documentation",
  "id": "11-related-documentation",
  "level": 2
}, {
  "value": "12. Version History",
  "id": "12-version-history",
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
        id: "changelog-management-policy",
        children: "Changelog Management Policy"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Status:"
      }), " Active", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Owner:"
      }), " AI Dev Kit / Framework Team", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Last Updated:"
      }), " 2025-12-21", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Related Work:"
      }), " Epic 6, Story 6, Task 11 - Changelog Management and Archival Workflow (FR-025)", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Version:"
      }), " 1.0.0"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Based on Framework:"
      }), " This policy is a dev-kit specialisation of the Changelog Management Workflow (CMW) patterns defined in the Workflow Management framework. For the canonical workflow definition and agent execution guide, see:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "packages/frameworks/workflow-mgt/workflows/changelog-management-workflow.yaml"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "packages/frameworks/workflow-mgt/scripts/changelog/README.md"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1-purpose",
      children: "1. Purpose"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This policy defines standards and procedures for managing the project changelog to ensure consistency, accuracy, and maintainability. The policy establishes format requirements, validation rules, and maintenance procedures to prevent common changelog issues (ordering violations, duplicates, format inconsistencies)."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Goals:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Maintain \"Keep a Changelog\" format compliance"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Prevent ordering violations (newest first requirement)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Prevent duplicate version entries"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Ensure consistent format across all entries"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Support automated validation and maintenance"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "2-format-requirements",
      children: "2. Format Requirements"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "21-keep-a-changelog-format",
      children: "2.1 \"Keep a Changelog\" Format"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The changelog ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "MUST"
      }), " follow the ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://keepachangelog.com/en/1.0.0/",
        children: "Keep a Changelog"
      }), " format:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Header:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-markdown",
        children: "# Changelog\n\nAll notable changes to this project will be documented in this file.\n\nThe format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),\nand this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Version Entry Format:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-markdown",
        children: "## [version] - DD-MM-YY\n\n[Summary or description]\n\n### Added\n\n- [Change description]\n- [Change description]\n\n### Changed\n\n- [Change description]\n\n### Fixed\n\n- [Change description]\n\n**Related:** [Link to detailed changelog](path/to/detailed/changelog.md)\n\n---\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "22-version-header-format",
      children: "2.2 Version Header Format"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Required Format:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "## [RC.EPIC.STORY.TASK+BUILD] - DD-MM-YY"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Components:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "RC"
        }), ": Release Candidate (0 = development, 1+ = release candidate)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "EPIC"
        }), ": Epic number (1-23 canonical, 24+ project-specific)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "STORY"
        }), ": Story number (3-digit padding)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "TASK"
        }), ": Task number (2-digit padding)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "BUILD"
        }), ": Build number (increments per release within task)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "DD-MM-YY"
        }), ": Short date format (day-month-year, 2-digit year)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Examples:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "## [0.6.6.11+0] - 21-12-25"
        }), " - Development, Epic 6, Story 6, Task 11, Build 0, Dec 21, 2025"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "## [1.2.3.4+5] - 15-01-26"
        }), " - Release Candidate 1, Epic 2, Story 3, Task 4, Build 5, Jan 15, 2026"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "23-date-format",
      children: "2.3 Date Format"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Format:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "DD-MM-YY"
      }), " (short date format for merge-to-main)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Rationale:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Compact format for main changelog entries"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Detailed changelogs use full timestamp format (", (0,jsx_runtime.jsx)(_components.code, {
          children: "YYYY-MM-DD HH:MM:SS UTC"
        }), ")"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Maintains readability while saving space"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "3-ordering-requirements",
      children: "3. Ordering Requirements"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "31-newest-first-rule",
      children: "3.1 Newest First Rule"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "MANDATORY:"
      }), " Entries ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "MUST"
      }), " be ordered newest first (most recent version at top)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Rationale:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "\"Keep a Changelog\" standard requires newest first"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Users typically care about recent changes"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Enables quick scanning of latest releases"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Validation:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Compare version numbers (canonical ordering by version, not timestamp)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Ensure higher versions appear before lower versions"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Detect and report ordering violations"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "32-canonical-version-ordering",
      children: "3.2 Canonical Version Ordering"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Ordering Logic:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Compare RC component (higher RC = newer)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If RC equal, compare EPIC component (higher EPIC = newer)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If EPIC equal, compare STORY component (higher STORY = newer)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If STORY equal, compare TASK component (higher TASK = newer)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If TASK equal, compare BUILD component (higher BUILD = newer)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Examples:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "0.6.6.11+5"
        }), " appears before ", (0,jsx_runtime.jsx)(_components.code, {
          children: "0.6.6.11+4"
        }), " (higher BUILD = newer)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "0.6.7.1+1"
        }), " appears before ", (0,jsx_runtime.jsx)(_components.code, {
          children: "0.6.6.11+99"
        }), " (higher STORY = newer)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "1.6.6.11+1"
        }), " appears before ", (0,jsx_runtime.jsx)(_components.code, {
          children: "0.6.6.11+99"
        }), " (higher RC = newer)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Special Cases:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Epic 9 entries (e.g., ", (0,jsx_runtime.jsx)(_components.code, {
          children: "0.9.21.3+2"
        }), ") appear before Epic 6 entries (e.g., ", (0,jsx_runtime.jsx)(_components.code, {
          children: "0.6.6.7+5"
        }), ")"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Epic 4 entries (e.g., ", (0,jsx_runtime.jsx)(_components.code, {
          children: "0.4.13.6+5"
        }), ") appear after Epic 9 entries but before Epic 6 entries if STORY number is lower"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "33-entry-separation",
      children: "3.3 Entry Separation"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Separator:"
      }), " Each entry ends with ", (0,jsx_runtime.jsx)(_components.code, {
        children: "---"
      }), " (horizontal rule)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Purpose:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Clear visual separation between entries"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Facilitates parsing and editing"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Maintains consistent formatting"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "4-duplicate-prevention",
      children: "4. Duplicate Prevention"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "41-no-duplicate-versions",
      children: "4.1 No Duplicate Versions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "MANDATORY:"
      }), " No duplicate version entries allowed"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Definition:"
      }), " Two or more entries with identical version numbers in the same changelog file"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Detection:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Parse all version headers"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Compare version strings (exact match)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Report duplicates with line numbers"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Removal:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Keep first occurrence (topmost entry)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Remove subsequent duplicate entries"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Validate remaining entries"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "42-duplicate-detection-logic",
      children: "4.2 Duplicate Detection Logic"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Comparison:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Exact version string match: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "[0.6.6.11+0]"
        }), " = ", (0,jsx_runtime.jsx)(_components.code, {
          children: "[0.6.6.11+0]"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Case-insensitive comparison not applicable (versions are numeric)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Ignore whitespace differences in version header (normalize before comparison)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Reporting:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "List all duplicate versions found"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Report line numbers for each duplicate"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Suggest which entry to keep (first occurrence)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "5-validation-requirements",
      children: "5. Validation Requirements"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "51-format-validation",
      children: "5.1 Format Validation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Required Checks:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Version header format compliance (", (0,jsx_runtime.jsx)(_components.code, {
          children: "## [version] - DD-MM-YY"
        }), ")"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Date format compliance (", (0,jsx_runtime.jsx)(_components.code, {
          children: "DD-MM-YY"
        }), ")"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Section headers (Added/Changed/Fixed) use proper markdown"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Separator presence (", (0,jsx_runtime.jsx)(_components.code, {
          children: "---"
        }), " between entries)"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Link format compliance (if present)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Validation Tools:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "validate_changelog_format.py"
        }), " - Automated format validation"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "CMW Step 2 - Format validation during maintenance"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "RW Step 9 - Format validation during release"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "52-ordering-validation",
      children: "5.2 Ordering Validation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Required Checks:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Entries ordered newest first (canonical version ordering)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "No ordering violations detected"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "All entries have valid version numbers for comparison"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Validation Logic:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Parse all version headers"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Extract version components (RC, EPIC, STORY, TASK, BUILD)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Compare adjacent entries (entry N should be >= entry N+1 in version order)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Report violations with line numbers"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "53-duplicate-validation",
      children: "5.3 Duplicate Validation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Required Checks:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "No duplicate version entries"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "All versions unique within file"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "No orphaned entries (version header without content)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Validation Logic:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Parse all version headers"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Build set of version strings"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Detect duplicates (versions appearing multiple times)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Report duplicates with line numbers"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "6-maintenance-procedures",
      children: "6. Maintenance Procedures"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "61-automated-maintenance-cmw",
      children: "6.1 Automated Maintenance (CMW)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Changelog Management Workflow (CMW)"
      }), " performs automated maintenance:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 2: Validate Format and Ordering"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Validate changelog format compliance"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Detect ordering violations"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Detect duplicate entries"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Report issues"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 3: Fix Issues"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Fix ordering violations (reorder entries)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Remove duplicate entries (keep first occurrence)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Fix format issues (if possible)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 4: Validate Results"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Re-validate after fixes"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Ensure all issues resolved"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Report summary of fixes"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "62-manual-maintenance",
      children: "6.2 Manual Maintenance"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "When to perform:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "After detecting violations via validators"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Before committing changelog changes"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "During periodic reviews"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Steps:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Run validators to identify issues"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Fix ordering violations (move entries to correct positions)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Remove duplicate entries (keep first occurrence, remove others)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Fix format issues (correct headers, dates, separators)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Re-validate to confirm fixes"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Commit changes"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "7-integration-with-release-workflow-rw",
      children: "7. Integration with Release Workflow (RW)"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "71-rw-step-4-update-main-changelog",
      children: "7.1 RW Step 4: Update Main Changelog"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Action:"
      }), " Add new entry to top of changelog"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Requirements:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "New entry added at top (newest first)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Entry follows format requirements"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Entry has valid version header"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Entry separated with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "---"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Validation:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Format validation after adding entry"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Ordering validation (new entry should be first)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "No duplicate detection (new version should be unique)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "72-rw-step-9-run-validators",
      children: "7.2 RW Step 9: Run Validators"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Action:"
      }), " Run changelog format validation"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Validators:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "validate_changelog_format.py"
        }), " - Format, ordering, duplicate validation"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Requirements:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Format compliance checked"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Ordering compliance checked"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Duplicate detection performed"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "On Failure:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Report violations"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Suggest fixes"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Non-blocking (warnings only, RW continues)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "73-pre-commit-validation",
      children: "7.3 Pre-Commit Validation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pre-commit hook:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Validate changelog format before commit"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Detect ordering violations"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Detect duplicate entries"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Warn if issues found (informational, non-blocking)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "8-common-issues-and-solutions",
      children: "8. Common Issues and Solutions"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "81-ordering-violations",
      children: "8.1 Ordering Violations"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Issue:"
      }), " Entries not ordered newest first"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Example:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "0.6.6.7+5"
      }), " appears before ", (0,jsx_runtime.jsx)(_components.code, {
        children: "0.9.21.3+2"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Reorder entries (move newer entries to top)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use canonical version ordering logic"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Validate after reordering"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "82-duplicate-entries",
      children: "8.2 Duplicate Entries"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Issue:"
      }), " Same version appears multiple times"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Example:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "0.6.6.11+0"
      }), " appears twice in changelog"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Keep first occurrence (topmost entry)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Remove subsequent duplicates"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Validate after removal"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "83-format-inconsistencies",
      children: "8.3 Format Inconsistencies"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Issue:"
      }), " Entry format doesn't match requirements"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Examples:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Missing date: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "## [0.6.6.11+0]"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Wrong date format: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "## [0.6.6.11+0] - 2025-12-21"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Missing separator: No ", (0,jsx_runtime.jsx)(_components.code, {
          children: "---"
        }), " between entries"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Fix format to match requirements"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Validate after fixes"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "84-orphaned-entries",
      children: "8.4 Orphaned Entries"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Issue:"
      }), " Content without version header or version header without content"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Add missing version header or remove orphaned content"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Ensure all entries have complete structure"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "9-best-practices",
      children: "9. Best Practices"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "91-entry-writing",
      children: "9.1 Entry Writing"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Guidelines:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Write clear, concise change descriptions"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use proper markdown formatting"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Include links to detailed changelogs when available"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Group related changes under appropriate sections (Added/Changed/Fixed)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "92-entry-maintenance",
      children: "9.2 Entry Maintenance"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Guidelines:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Keep entries concise (main changelog should be scannable)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use detailed changelogs for comprehensive documentation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update entries if errors discovered (but preserve original intent)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "93-validation-frequency",
      children: "9.3 Validation Frequency"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Recommended:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Validate during RW (automatic)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Validate during CMW (automatic)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Validate before commits (pre-commit hook)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Periodic manual validation (monthly reviews)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "10-compliance-and-enforcement",
      children: "10. Compliance and Enforcement"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "101-automated-enforcement",
      children: "10.1 Automated Enforcement"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Validation Tools:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "validate_changelog_format.py"
        }), " - Automated validation"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "CMW - Automated maintenance and fixes"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Pre-commit hooks - Pre-commit validation"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "RW Integration:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "RW Step 9 validates changelog format"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "RW Step 4 ensures new entries follow format"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Non-blocking warnings (informational)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "102-manual-compliance",
      children: "10.2 Manual Compliance"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Developer Responsibility:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Follow format requirements when adding entries"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Run validators before committing"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Fix violations when detected"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Maintainer Responsibility:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Monitor changelog compliance"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Run CMW for maintenance"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Review and approve changelog changes"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "11-related-documentation",
      children: "11. Related Documentation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Related Policies:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "changelog-archival-policy.md"
        }), " - Archival criteria and procedures"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "dev-kit-versioning-policy.md"
        }), " - Versioning schema and policies"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Related Workflows:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Changelog Management Workflow (CMW) - Automated maintenance"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Release Workflow (RW) - Integration point for validation"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Related Documentation:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "packages/frameworks/workflow-mgt/docs/documentation/Developer_Docs/vwmp/changelog-management-workflow-agent-execution.md"
        }), " - CMW execution guide"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "https://keepachangelog.com/en/1.0.0/",
          children: "Keep a Changelog"
        }), " - Format specification"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "12-version-history",
      children: "12. Version History"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "v1.0.0"
        }), " (2025-12-21): Initial policy definition (E6:S06", ":T11", " - FR-025)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Policy Owner:"
      }), " AI Dev Kit / Framework Team", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Last Reviewed:"
      }), " 2025-12-21", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Next Review:"
      }), " As needed (policy updates)"]
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