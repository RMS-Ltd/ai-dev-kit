"use strict";
(self["webpackChunkportal"] = self["webpackChunkportal"] || []).push([["16251"], {
60003(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_architecture_standards_and_adrs_documentation_maintenance_policy_md_20b_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-architecture-standards-and-adrs-documentation-maintenance-policy-md-20b.json
var site_docs_architecture_standards_and_adrs_documentation_maintenance_policy_md_20b_namespaceObject = JSON.parse('{"id":"architecture/standards-and-adrs/documentation-maintenance-policy","title":"Documentation Maintenance Policy","description":"Status: Active","source":"@site/../docs/architecture/standards-and-adrs/documentation-maintenance-policy.md","sourceDirName":"architecture/standards-and-adrs","slug":"/architecture/standards-and-adrs/documentation-maintenance-policy","permalink":"/ai-dev-kit/docs/architecture/standards-and-adrs/documentation-maintenance-policy","draft":false,"unlisted":false,"editUrl":"https://github.com/RMS-Ltd/ai-dev-kit/tree/main/docs/../docs/architecture/standards-and-adrs/documentation-maintenance-policy.md","tags":[],"version":"current","frontMatter":{"lifecycle":"evergreen","ttl_days":null,"created_at":"2025-12-06T20:30:00.000Z","expires_at":null,"housekeeping_policy":"keep","policy_salience":{"policy_id":"doc-maintenance-policy","type":"governance","domain":{"primary":"documentation","secondary":["maintenance","quality","consistency"]},"audience":["agents","epic-owners","framework-owners","story-owners","developers"],"applies_to":{"documents":["docs/**","packages/frameworks/**","root:README.md","root:CHANGELOG.md","docs/**"],"activities":["release-workflow","story-completion","framework-release","policy-updates"],"components":["kanban-docs","changelog","version-file"]},"excludes":{"documents":["third-party-docs/**","external-links-only.md"],"activities":["code-comments","commit-messages"]},"key_rules":[{"id":"DM-R1","summary":"Documentation must accurately reflect current implementation, processes, and policies.","must_level":"MUST","when_applies":["code changes merged to main","process/policy changes approved","framework updates released"],"enforcement":{"owner":["epic-owners","framework-owners","story-owners"],"mechanisms":["story-completion-checklist","release-workflow-step: docs-validation","quarterly-documentation-review"]},"validation_hints":["check version numbers and last-updated fields","compare documented behavior vs code for changed modules","verify examples still work as documented"]},{"id":"DM-R2","summary":"All documentation must be maintained proactively, not reactively.","must_level":"MUST","when_applies":["all documentation updates"],"enforcement":{"owner":["documentation-owners"],"mechanisms":["regular-review-cadences","update-triggers"]},"validation_hints":["check last-updated date against review cadence","verify update triggers are documented"]},{"id":"DM-R3","summary":"Related documentation must be consistent and non-contradictory.","must_level":"MUST","when_applies":["cross-referenced documentation updates","policy changes"],"enforcement":{"owner":["architecture-team","epic-owners"],"mechanisms":["cross-reference-validation","consistency-checks"]},"validation_hints":["check for conflicting information in related docs","verify terminology consistency","validate version synchronization"]},{"id":"DM-R4","summary":"Documentation owners MUST ensure accuracy, currency, and quality.","must_level":"MUST","when_applies":["all documentation maintenance activities"],"enforcement":{"owner":["epic-owners","framework-owners","story-owners"],"mechanisms":["ownership-model","review-processes"]},"validation_hints":["verify owner is assigned for each document","check owner responsibilities are met"]}],"decision_criteria":[{"id":"DM-DC1","question":"Does this change affect user-visible behavior, APIs, or processes?","yes_action":"Require documentation update under the relevant Epic/Story.","no_action":"Record explicit \'no-doc-change-required\' note in Story."},{"id":"DM-DC2","question":"Is this documentation outdated or inaccurate?","yes_action":"Update immediately or flag for next review cycle.","no_action":"Verify last-updated date is within review cadence."}],"triggers":[{"id":"DM-T1","event":"code-merged-to-main","required_checks":["ensure_related_story_has_doc-update-or-exemption","verify_version_numbers_updated"]},{"id":"DM-T2","event":"story-completed","required_checks":["verify_documentation_updated","check_kanban_docs_synced"]},{"id":"DM-T3","event":"policy-doc-updated","required_checks":["re-run_doc-lifecycle_validation","check_related_docs_for_updates"]}],"integration_points":[{"id":"DM-IP1","component":"release-workflow","step":"docs-validation","behavior":"fail release if required docs not updated"},{"id":"DM-IP2","component":"doc-lifecycle-validator","behavior":"validate lifecycle metadata and maintenance cadence"},{"id":"DM-IP3","component":"kanban-docs-update","step":"step-7","behavior":"auto-update story/epic docs with version markers"}],"related_policies":["docs/architecture/standards-and-adrs/doc-lifecycle-policy.md","docs/architecture/standards-and-adrs/dev-kit-versioning-policy.md","packages/frameworks/workflow-mgt/docs/documentation/Developer_Docs/vwmp/release-workflow-agent-execution.md","packages/frameworks/kanban/policies/kanban-governance-policy.md"]}},"sidebar":"docsSidebar","previous":{"title":"Documentation Health Monitoring","permalink":"/ai-dev-kit/docs/architecture/standards-and-adrs/documentation-health-monitoring"},"next":{"title":"Documentation Review Cadences","permalink":"/ai-dev-kit/docs/architecture/standards-and-adrs/documentation-review-cadences"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ../docs/architecture/standards-and-adrs/documentation-maintenance-policy.md


const frontMatter = {
	lifecycle: 'evergreen',
	ttl_days: null,
	created_at: new Date('2025-12-06T20:30:00.000Z'),
	expires_at: null,
	housekeeping_policy: 'keep',
	policy_salience: {
		policy_id: 'doc-maintenance-policy',
		type: 'governance',
		domain: {
			primary: 'documentation',
			secondary: [
				'maintenance',
				'quality',
				'consistency'
			]
		},
		audience: [
			'agents',
			'epic-owners',
			'framework-owners',
			'story-owners',
			'developers'
		],
		applies_to: {
			documents: [
				'docs/**',
				'packages/frameworks/**',
				'root:README.md',
				'root:CHANGELOG.md',
				'docs/**'
			],
			activities: [
				'release-workflow',
				'story-completion',
				'framework-release',
				'policy-updates'
			],
			components: [
				'kanban-docs',
				'changelog',
				'version-file'
			]
		},
		excludes: {
			documents: [
				'third-party-docs/**',
				'external-links-only.md'
			],
			activities: [
				'code-comments',
				'commit-messages'
			]
		},
		key_rules: [
			{
				id: 'DM-R1',
				summary: 'Documentation must accurately reflect current implementation, processes, and policies.',
				must_level: 'MUST',
				when_applies: [
					'code changes merged to main',
					'process/policy changes approved',
					'framework updates released'
				],
				enforcement: {
					owner: [
						'epic-owners',
						'framework-owners',
						'story-owners'
					],
					mechanisms: [
						'story-completion-checklist',
						'release-workflow-step: docs-validation',
						'quarterly-documentation-review'
					]
				},
				validation_hints: [
					'check version numbers and last-updated fields',
					'compare documented behavior vs code for changed modules',
					'verify examples still work as documented'
				]
			},
			{
				id: 'DM-R2',
				summary: 'All documentation must be maintained proactively, not reactively.',
				must_level: 'MUST',
				when_applies: [
					'all documentation updates'
				],
				enforcement: {
					owner: [
						'documentation-owners'
					],
					mechanisms: [
						'regular-review-cadences',
						'update-triggers'
					]
				},
				validation_hints: [
					'check last-updated date against review cadence',
					'verify update triggers are documented'
				]
			},
			{
				id: 'DM-R3',
				summary: 'Related documentation must be consistent and non-contradictory.',
				must_level: 'MUST',
				when_applies: [
					'cross-referenced documentation updates',
					'policy changes'
				],
				enforcement: {
					owner: [
						'architecture-team',
						'epic-owners'
					],
					mechanisms: [
						'cross-reference-validation',
						'consistency-checks'
					]
				},
				validation_hints: [
					'check for conflicting information in related docs',
					'verify terminology consistency',
					'validate version synchronization'
				]
			},
			{
				id: 'DM-R4',
				summary: 'Documentation owners MUST ensure accuracy, currency, and quality.',
				must_level: 'MUST',
				when_applies: [
					'all documentation maintenance activities'
				],
				enforcement: {
					owner: [
						'epic-owners',
						'framework-owners',
						'story-owners'
					],
					mechanisms: [
						'ownership-model',
						'review-processes'
					]
				},
				validation_hints: [
					'verify owner is assigned for each document',
					'check owner responsibilities are met'
				]
			}
		],
		decision_criteria: [
			{
				id: 'DM-DC1',
				question: 'Does this change affect user-visible behavior, APIs, or processes?',
				yes_action: 'Require documentation update under the relevant Epic/Story.',
				no_action: 'Record explicit \'no-doc-change-required\' note in Story.'
			},
			{
				id: 'DM-DC2',
				question: 'Is this documentation outdated or inaccurate?',
				yes_action: 'Update immediately or flag for next review cycle.',
				no_action: 'Verify last-updated date is within review cadence.'
			}
		],
		triggers: [
			{
				id: 'DM-T1',
				event: 'code-merged-to-main',
				required_checks: [
					'ensure_related_story_has_doc-update-or-exemption',
					'verify_version_numbers_updated'
				]
			},
			{
				id: 'DM-T2',
				event: 'story-completed',
				required_checks: [
					'verify_documentation_updated',
					'check_kanban_docs_synced'
				]
			},
			{
				id: 'DM-T3',
				event: 'policy-doc-updated',
				required_checks: [
					're-run_doc-lifecycle_validation',
					'check_related_docs_for_updates'
				]
			}
		],
		integration_points: [
			{
				id: 'DM-IP1',
				component: 'release-workflow',
				step: 'docs-validation',
				behavior: 'fail release if required docs not updated'
			},
			{
				id: 'DM-IP2',
				component: 'doc-lifecycle-validator',
				behavior: 'validate lifecycle metadata and maintenance cadence'
			},
			{
				id: 'DM-IP3',
				component: 'kanban-docs-update',
				step: 'step-7',
				behavior: 'auto-update story/epic docs with version markers'
			}
		],
		related_policies: [
			'docs/architecture/standards-and-adrs/doc-lifecycle-policy.md',
			'docs/architecture/standards-and-adrs/dev-kit-versioning-policy.md',
			'packages/frameworks/workflow-mgt/docs/documentation/Developer_Docs/vwmp/release-workflow-agent-execution.md',
			'packages/frameworks/kanban/policies/kanban-governance-policy.md'
		]
	}
};
const contentTitle = 'Documentation Maintenance Policy';

const assets = {

};



const toc = [{
  "value": "Executive Summary",
  "id": "executive-summary",
  "level": 2
}, {
  "value": "Scope",
  "id": "scope",
  "level": 2
}, {
  "value": "In Scope",
  "id": "in-scope",
  "level": 3
}, {
  "value": "Out of Scope",
  "id": "out-of-scope",
  "level": 3
}, {
  "value": "Documentation Ownership",
  "id": "documentation-ownership",
  "level": 2
}, {
  "value": "Ownership Model",
  "id": "ownership-model",
  "level": 3
}, {
  "value": "Ownership Responsibilities",
  "id": "ownership-responsibilities",
  "level": 3
}, {
  "value": "Documentation Maintenance Principles",
  "id": "documentation-maintenance-principles",
  "level": 2
}, {
  "value": "1. Accuracy First",
  "id": "1-accuracy-first",
  "level": 3
}, {
  "value": "2. Consistency Across Documentation",
  "id": "2-consistency-across-documentation",
  "level": 3
}, {
  "value": "3. Completeness",
  "id": "3-completeness",
  "level": 3
}, {
  "value": "4. Currency",
  "id": "4-currency",
  "level": 3
}, {
  "value": "5. Discoverability",
  "id": "5-discoverability",
  "level": 3
}, {
  "value": "Documentation Update Triggers",
  "id": "documentation-update-triggers",
  "level": 2
}, {
  "value": "Automatic Update Triggers",
  "id": "automatic-update-triggers",
  "level": 3
}, {
  "value": "Manual Update Triggers",
  "id": "manual-update-triggers",
  "level": 3
}, {
  "value": "Documentation Review Cadences",
  "id": "documentation-review-cadences",
  "level": 2
}, {
  "value": "Review Frequency",
  "id": "review-frequency",
  "level": 3
}, {
  "value": "Review Process",
  "id": "review-process",
  "level": 3
}, {
  "value": "Documentation Quality Standards",
  "id": "documentation-quality-standards",
  "level": 2
}, {
  "value": "Content Quality",
  "id": "content-quality",
  "level": 3
}, {
  "value": "Format Quality",
  "id": "format-quality",
  "level": 3
}, {
  "value": "Metadata Quality",
  "id": "metadata-quality",
  "level": 3
}, {
  "value": "Documentation Update Procedures",
  "id": "documentation-update-procedures",
  "level": 2
}, {
  "value": "Standard Update Procedure",
  "id": "standard-update-procedure",
  "level": 3
}, {
  "value": "Emergency Update Procedure",
  "id": "emergency-update-procedure",
  "level": 3
}, {
  "value": "Documentation Maintenance Tools",
  "id": "documentation-maintenance-tools",
  "level": 2
}, {
  "value": "Validation Tools",
  "id": "validation-tools",
  "level": 3
}, {
  "value": "Health Monitoring",
  "id": "health-monitoring",
  "level": 3
}, {
  "value": "Documentation Maintenance Workflow",
  "id": "documentation-maintenance-workflow",
  "level": 2
}, {
  "value": "Regular Maintenance",
  "id": "regular-maintenance",
  "level": 3
}, {
  "value": "Event-Driven Maintenance",
  "id": "event-driven-maintenance",
  "level": 3
}, {
  "value": "Documentation Maintenance Metrics",
  "id": "documentation-maintenance-metrics",
  "level": 2
}, {
  "value": "Key Metrics",
  "id": "key-metrics",
  "level": 3
}, {
  "value": "Reporting",
  "id": "reporting",
  "level": 3
}, {
  "value": "Enforcement and Compliance",
  "id": "enforcement-and-compliance",
  "level": 2
}, {
  "value": "Compliance Checks",
  "id": "compliance-checks",
  "level": 3
}, {
  "value": "Non-Compliance Handling",
  "id": "non-compliance-handling",
  "level": 3
}, {
  "value": "References",
  "id": "references",
  "level": 2
}, {
  "value": "Decision Record",
  "id": "decision-record",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
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
    strong: "strong",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "documentation-maintenance-policy",
        children: "Documentation Maintenance Policy"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Status:"
      }), " Active", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Version:"
      }), " 1.0.0", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Last Updated:"
      }), " 2025-12-06", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Epic:"
      }), " Epic 5 - Documentation Management and Maintenance", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Story:"
      }), " Story 1 - Documentation Maintenance Framework", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Task:"
      }), " E5:S01", ":T01", " - Define documentation maintenance policies"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "executive-summary",
      children: "Executive Summary"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This policy defines the framework for maintaining documentation accuracy, consistency, and currency across the ai-dev-kit repository. It establishes ownership, review cadences, update triggers, and quality standards to ensure all documentation remains useful and reliable."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Key Principle:"
      }), " Documentation is a living asset that must evolve with the codebase. All documentation must be maintained proactively, not reactively."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "scope",
      children: "Scope"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "in-scope",
      children: "In Scope"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Documentation Types:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Knowledge Base (KB) documents (", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/"
        }), ")"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Framework documentation (", (0,jsx_runtime.jsx)(_components.code, {
          children: "packages/frameworks/*/"
        }), ")"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Architecture and design documents (ADRs, standards)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Policy documents"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Guides and tutorials"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "API documentation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "README files"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Changelogs and release notes"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Kanban documentation (Epics, Stories, Tasks)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Documentation Locations:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "docs/"
        }), " - Main knowledge base"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "packages/frameworks/*/"
        }), " - Framework documentation"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Project root:"
        }), " Only standard entry points and config—", (0,jsx_runtime.jsx)(_components.code, {
          children: "README.md"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "CHANGELOG.md"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "CONTRIBUTING.md"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "INSTALL_IN_YOUR_PROJECT.md"
        }), ", and config files (e.g. ", (0,jsx_runtime.jsx)(_components.code, {
          children: "rw-config.yaml"
        }), "). Operational runbooks (e.g. build/upload) live in ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/maintenance/"
        }), ", not in root."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "out-of-scope",
      children: "Out of Scope"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Code comments (covered by code review processes)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Commit messages (covered by Git workflow)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "External documentation (third-party docs)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "documentation-ownership",
      children: "Documentation Ownership"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "ownership-model",
      children: "Ownership Model"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Primary Owners:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Epic Owners:"
        }), " Responsible for all documentation within their epic scope"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Framework Owners:"
        }), " Responsible for framework-specific documentation"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Story Owners:"
        }), " Responsible for documentation created during story execution"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Shared Ownership:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Cross-cutting documentation (policies, standards) owned by Architecture team"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Integration documentation owned by coordinating epics"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "User-facing documentation owned by Epic 7 (Examples & Adoption)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "ownership-responsibilities",
      children: "Ownership Responsibilities"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Documentation owners MUST:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Ensure documentation accuracy and currency"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Review documentation during story completion"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update documentation when code/processes change"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Respond to documentation issues and feedback"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Maintain documentation quality standards"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "documentation-maintenance-principles",
      children: "Documentation Maintenance Principles"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1-accuracy-first",
      children: "1. Accuracy First"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Rule:"
      }), " Documentation must accurately reflect current implementation, processes, and policies."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Enforcement:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Documentation updates required when code/processes change"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Outdated documentation is a bug (tracked and fixed)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Version numbers and dates must be current"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "2-consistency-across-documentation",
      children: "2. Consistency Across Documentation"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Rule:"
      }), " Related documentation must be consistent and non-contradictory."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Enforcement:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Cross-reference validation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Terminology consistency"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Process alignment across documents"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Version synchronization"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "3-completeness",
      children: "3. Completeness"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Rule:"
      }), " Documentation must be complete for its intended purpose."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Enforcement:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Required sections must be present"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Examples must be current and working"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Links must be valid"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "References must be accurate"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "4-currency",
      children: "4. Currency"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Rule:"
      }), " Documentation must be kept current with codebase and processes."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Enforcement:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Regular review cadences"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update triggers for code/process changes"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Version tracking and metadata"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Last updated dates"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "5-discoverability",
      children: "5. Discoverability"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Rule:"
      }), " Documentation must be easy to find and navigate."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Enforcement:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Clear directory structure"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Consistent naming conventions"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Comprehensive indexes and navigation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Search-friendly organization"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "documentation-update-triggers",
      children: "Documentation Update Triggers"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "automatic-update-triggers",
      children: "Automatic Update Triggers"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Code Changes:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "New features added → Update feature documentation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "API changes → Update API documentation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Process changes → Update process documentation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Configuration changes → Update configuration guides"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Framework Changes:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Framework version updates → Update framework documentation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "New framework features → Update framework guides"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Breaking changes → Update migration guides"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Policy Changes:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Policy updates → Update all affected documentation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Process changes → Update workflow documentation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Standard changes → Update standards documentation"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "manual-update-triggers",
      children: "Manual Update Triggers"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Regular Reviews:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Quarterly comprehensive reviews"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Monthly targeted reviews"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Weekly spot checks"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "User Feedback:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Documentation issues reported"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Confusion or questions identified"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Improvement suggestions"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Quality Assurance:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Documentation health checks"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Link validation failures"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Consistency check failures"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "documentation-review-cadences",
      children: "Documentation Review Cadences"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "review-frequency",
      children: "Review Frequency"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Critical Documentation (Weekly):"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Release Workflow documentation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Versioning policies"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Core framework READMEs"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "High-Priority Documentation (Monthly):"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Framework guides and tutorials"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Architecture documents (ADRs)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Policy documents"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Integration guides"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Standard Documentation (Quarterly):"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "General guides and tutorials"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Examples and case studies"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Historical documentation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Archive documentation"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Low-Priority Documentation (Annually):"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Legacy documentation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Deprecated feature documentation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Historical reference materials"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "review-process",
      children: "Review Process"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "1. Preparation:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Identify documentation to review"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Gather related documentation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Check for related code changes"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Review user feedback"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "2. Review:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Verify accuracy against current implementation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Check consistency with related documentation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Validate links and references"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Assess completeness"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Evaluate clarity and usability"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "3. Action:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update outdated information"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Fix inconsistencies"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Add missing information"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Improve clarity"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Archive obsolete documentation"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "4. Documentation:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update last reviewed date"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Document changes made"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Note follow-up actions"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update version if significant"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "documentation-quality-standards",
      children: "Documentation Quality Standards"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "content-quality",
      children: "Content Quality"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Accuracy:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Information must be factually correct"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Examples must work as documented"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Processes must match actual workflows"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Version numbers must be current"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Completeness:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Required sections must be present"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Examples must be comprehensive"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Edge cases must be documented"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Troubleshooting must be included"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Clarity:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Language must be clear and concise"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Technical terms must be defined"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Examples must be relevant"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Structure must be logical"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "format-quality",
      children: "Format Quality"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Structure:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Must follow templates where applicable"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Must have clear hierarchy"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Must have navigation aids"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Must have metadata (front-matter)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Formatting:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Must use consistent markdown"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Must have proper headings"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Must have code blocks formatted"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Must have proper lists and tables"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Links:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "All links must be valid"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Internal links must use relative paths"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "External links must be verified"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Broken links must be fixed immediately"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "metadata-quality",
      children: "Metadata Quality"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Required Metadata:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "lifecycle"
        }), " - Document lifecycle classification"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "created_at"
        }), " - Creation timestamp"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "last_updated"
        }), " - Last update timestamp"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "version"
        }), " - Document version (if applicable)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Optional Metadata:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "ttl_days"
        }), " - Time-to-live (for transient docs)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "expires_at"
        }), " - Expiration date"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "housekeeping_policy"
        }), " - Cleanup policy"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "owner"
        }), " - Documentation owner"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "documentation-update-procedures",
      children: "Documentation Update Procedures"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "standard-update-procedure",
      children: "Standard Update Procedure"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "1. Identify Need:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Code/process change detected"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Review cadence reached"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Issue reported"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Quality check failure"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "2. Assess Impact:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Identify affected documentation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Determine update scope"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Check related documentation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Plan update sequence"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "3. Update Documentation:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Make necessary changes"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update version and dates"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Fix links and references"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Improve clarity if needed"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "4. Validate:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Check accuracy"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Verify consistency"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Validate links"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Review formatting"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "5. Commit:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Commit with descriptive message"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Reference related work (Epic/Story/Task)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update changelog if significant"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "emergency-update-procedure",
      children: "Emergency Update Procedure"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "For Critical Issues:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Fix immediately"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update affected documentation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Notify stakeholders"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Document in changelog"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "For Breaking Changes:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update all affected documentation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Create migration guides if needed"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update version numbers"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Announce changes"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "documentation-maintenance-tools",
      children: "Documentation Maintenance Tools"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "validation-tools",
      children: "Validation Tools"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Link Validation:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Check all internal and external links"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Verify link targets exist"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Validate link formats"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Consistency Validation:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Cross-reference related documentation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Check version synchronization"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Verify terminology consistency"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Format Validation:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Check markdown formatting"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Validate front-matter"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Verify template compliance"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "health-monitoring",
      children: "Health Monitoring"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Documentation Health Metrics:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Last update date"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Link health"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Version currency"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Review status"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Health Dashboards:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Overall documentation health"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Category-specific health"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Framework documentation health"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Improvement opportunities"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "documentation-maintenance-workflow",
      children: "Documentation Maintenance Workflow"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "regular-maintenance",
      children: "Regular Maintenance"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Weekly:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Review critical documentation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Check for broken links"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update version numbers"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Fix urgent issues"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Monthly:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Review high-priority documentation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Run comprehensive link validation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Check consistency across documentation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update review schedules"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Quarterly:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Comprehensive documentation review"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Health assessment"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Improvement planning"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Archive obsolete documentation"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "event-driven-maintenance",
      children: "Event-Driven Maintenance"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "On Code Changes:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update feature documentation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update API documentation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update process documentation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update examples"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "On Framework Updates:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update framework documentation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update integration guides"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update migration guides"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update version information"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "On Policy Changes:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update policy documentation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update affected guides"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update standards documentation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Announce changes"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "documentation-maintenance-metrics",
      children: "Documentation Maintenance Metrics"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "key-metrics",
      children: "Key Metrics"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Currency:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Average days since last update"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Percentage of documentation updated in last quarter"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Documentation age distribution"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Quality:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Link health percentage"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Consistency score"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Completeness score"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "User feedback score"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Coverage:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Documentation coverage by area"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Missing documentation gaps"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Example coverage"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Tutorial coverage"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "reporting",
      children: "Reporting"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Monthly Reports:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Documentation health summary"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Issues identified and resolved"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update activity"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Improvement opportunities"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Quarterly Reports:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Comprehensive health assessment"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Trend analysis"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Improvement recommendations"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Resource requirements"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "enforcement-and-compliance",
      children: "Enforcement and Compliance"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "compliance-checks",
      children: "Compliance Checks"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Automated Checks:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Link validation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Format validation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Metadata validation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Consistency checks"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Manual Reviews:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Quarterly comprehensive reviews"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Story completion reviews"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Framework release reviews"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Policy update reviews"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "non-compliance-handling",
      children: "Non-Compliance Handling"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Minor Issues:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Automated notifications"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Self-service fixes"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Documentation reminders"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Major Issues:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Escalation to owners"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Required fixes"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Review process updates"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Critical Issues:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Immediate fixes required"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Process improvements"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Training if needed"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "references",
      children: "References"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Document Lifecycle Policy:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "packages/frameworks/doc-lifecycle/policies/doc-lifecycle-policy.md"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Epic 5:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/project-management/kanban/epics/epic-05/epic-05.md"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Story 1:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/project-management/kanban/epics/epic-05/story-01-documentation-maintenance-framework.md"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Framework Health Metrics:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/architecture/standards-and-adrs/framework-health-metrics.md"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "decision-record",
      children: "Decision Record"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Decision:"
      }), " Establish comprehensive documentation maintenance policy with ownership model, review cadences, update triggers, and quality standards."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Rationale:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Ensures documentation remains accurate and useful"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Provides clear ownership and responsibilities"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Establishes systematic review and update processes"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Enables proactive maintenance rather than reactive fixes"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Supports documentation quality and consistency"
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