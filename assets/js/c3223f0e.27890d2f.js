"use strict";
(self["webpackChunkportal"] = self["webpackChunkportal"] || []).push([["55096"], {
45820(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_governance_standards_changelog_archival_policy_md_c32_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-governance-standards-changelog-archival-policy-md-c32.json
var site_docs_governance_standards_changelog_archival_policy_md_c32_namespaceObject = JSON.parse('{"id":"governance/standards/changelog-archival-policy","title":"Changelog Archival Policy","description":"Status: Active","source":"@site/../docs/governance/standards/changelog-archival-policy.md","sourceDirName":"governance/standards","slug":"/governance/standards/changelog-archival-policy","permalink":"/ai-dev-kit/docs/governance/standards/changelog-archival-policy","draft":false,"unlisted":false,"editUrl":"https://github.com/RMS-Ltd/ai-dev-kit/tree/main/docs/../docs/governance/standards/changelog-archival-policy.md","tags":[],"version":"current","frontMatter":{"lifecycle":"evergreen","ttl_days":null,"created_at":"2025-12-21T21:15:00.000Z","expires_at":null,"housekeeping_policy":"keep","policy_salience":{"policy_id":"changelog-archival-policy","type":"process","domain":{"primary":"changelog","secondary":["maintenance","documentation"]},"audience":["agents","developers","maintainers"],"applies_to":{"documents":["CHANGELOG.md","docs/changelog-and-release-notes/changelog-archive/CHANGELOG_ARCHIVE.md","docs/changelog-and-release-notes/changelog-archive/CHANGELOG_v*.md"],"activities":["changelog-management-workflow","release-workflow"]},"key_rules":[{"id":"CHANGELOG-ARCH-R1","summary":"Main changelog must not exceed 1,000 lines","must_level":"SHOULD","when_applies":["changelog-management-workflow","release-workflow-step-9.5"],"enforcement":{"owner":["agents","maintainers"],"mechanisms":["automated-cmw","rw-integration"]},"validation_hints":["check-line-count","trigger-archival"]},{"id":"CHANGELOG-ARCH-R2","summary":"Entries older than 2 months should be archived","must_level":"SHOULD","when_applies":["changelog-management-workflow"],"enforcement":{"owner":["agents"],"mechanisms":["automated-cmw"]},"validation_hints":["parse-version-dates","calculate-age"]},{"id":"CHANGELOG-ARCH-R3","summary":"Keep last 100 releases in main changelog","must_level":"SHOULD","when_applies":["changelog-management-workflow"],"enforcement":{"owner":["agents"],"mechanisms":["automated-cmw"]},"validation_hints":["count-version-entries","archive-oldest"]}],"triggers":[{"id":"CHANGELOG-ARCH-T1","event":"changelog-exceeds-threshold","required_checks":["line-count","version-count"]}],"integration_points":[{"id":"CHANGELOG-ARCH-I1","component":"release-workflow","step":"step-9.5","behavior":"check-changelog-size-and-trigger-cmw"}],"related_policies":["changelog-management-policy.md"]}}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ../docs/governance/standards/changelog-archival-policy.md


const frontMatter = {
	lifecycle: 'evergreen',
	ttl_days: null,
	created_at: new Date('2025-12-21T21:15:00.000Z'),
	expires_at: null,
	housekeeping_policy: 'keep',
	policy_salience: {
		policy_id: 'changelog-archival-policy',
		type: 'process',
		domain: {
			primary: 'changelog',
			secondary: [
				'maintenance',
				'documentation'
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
				id: 'CHANGELOG-ARCH-R1',
				summary: 'Main changelog must not exceed 1,000 lines',
				must_level: 'SHOULD',
				when_applies: [
					'changelog-management-workflow',
					'release-workflow-step-9.5'
				],
				enforcement: {
					owner: [
						'agents',
						'maintainers'
					],
					mechanisms: [
						'automated-cmw',
						'rw-integration'
					]
				},
				validation_hints: [
					'check-line-count',
					'trigger-archival'
				]
			},
			{
				id: 'CHANGELOG-ARCH-R2',
				summary: 'Entries older than 2 months should be archived',
				must_level: 'SHOULD',
				when_applies: [
					'changelog-management-workflow'
				],
				enforcement: {
					owner: [
						'agents'
					],
					mechanisms: [
						'automated-cmw'
					]
				},
				validation_hints: [
					'parse-version-dates',
					'calculate-age'
				]
			},
			{
				id: 'CHANGELOG-ARCH-R3',
				summary: 'Keep last 100 releases in main changelog',
				must_level: 'SHOULD',
				when_applies: [
					'changelog-management-workflow'
				],
				enforcement: {
					owner: [
						'agents'
					],
					mechanisms: [
						'automated-cmw'
					]
				},
				validation_hints: [
					'count-version-entries',
					'archive-oldest'
				]
			}
		],
		triggers: [
			{
				id: 'CHANGELOG-ARCH-T1',
				event: 'changelog-exceeds-threshold',
				required_checks: [
					'line-count',
					'version-count'
				]
			}
		],
		integration_points: [
			{
				id: 'CHANGELOG-ARCH-I1',
				component: 'release-workflow',
				step: 'step-9.5',
				behavior: 'check-changelog-size-and-trigger-cmw'
			}
		],
		related_policies: [
			'changelog-management-policy.md'
		]
	}
};
const contentTitle = 'Changelog Archival Policy';

const assets = {

};



const toc = [{
  "value": "1. Purpose",
  "id": "1-purpose",
  "level": 2
}, {
  "value": "2. Archive Structure",
  "id": "2-archive-structure",
  "level": 2
}, {
  "value": "2.1 File Organization",
  "id": "21-file-organization",
  "level": 3
}, {
  "value": "2.2 Archive File Format",
  "id": "22-archive-file-format",
  "level": 3
}, {
  "value": "3. Archival Criteria",
  "id": "3-archival-criteria",
  "level": 2
}, {
  "value": "3.1 Mode A: Hybrid (Size/Time/Version-Based)",
  "id": "31-mode-a-hybrid-sizetimeversion-based",
  "level": 3
}, {
  "value": "3.2 Mode B: Latest-Only (AI Dev Kit Pattern)",
  "id": "32-mode-b-latest-only-ai-dev-kit-pattern",
  "level": 3
}, {
  "value": "4. Archival Process",
  "id": "4-archival-process",
  "level": 2
}, {
  "value": "4.1 Automated Archival (CMW)",
  "id": "41-automated-archival-cmw",
  "level": 3
}, {
  "value": "4.2 Manual Archival",
  "id": "42-manual-archival",
  "level": 3
}, {
  "value": "5. Entry Preservation",
  "id": "5-entry-preservation",
  "level": 2
}, {
  "value": "5.1 Content Preservation",
  "id": "51-content-preservation",
  "level": 3
}, {
  "value": "5.2 Ordering Preservation",
  "id": "52-ordering-preservation",
  "level": 3
}, {
  "value": "5.3 Link Preservation",
  "id": "53-link-preservation",
  "level": 3
}, {
  "value": "6. Validation Requirements",
  "id": "6-validation-requirements",
  "level": 2
}, {
  "value": "6.1 Pre-Archival Validation",
  "id": "61-pre-archival-validation",
  "level": 3
}, {
  "value": "6.2 Post-Archival Validation",
  "id": "62-post-archival-validation",
  "level": 3
}, {
  "value": "6.3 Continuous Validation",
  "id": "63-continuous-validation",
  "level": 3
}, {
  "value": "7. Integration with Release Workflow (RW)",
  "id": "7-integration-with-release-workflow-rw",
  "level": 2
}, {
  "value": "7.1 RW Step 9.5: Changelog Size Check",
  "id": "71-rw-step-95-changelog-size-check",
  "level": 3
}, {
  "value": "7.2 Pre-Commit Validation",
  "id": "72-pre-commit-validation",
  "level": 3
}, {
  "value": "8. Configuration",
  "id": "8-configuration",
  "level": 2
}, {
  "value": "8.1 Policy Configuration (Default Values)",
  "id": "81-policy-configuration-default-values",
  "level": 3
}, {
  "value": "8.2 Project-Specific Configuration",
  "id": "82-project-specific-configuration",
  "level": 3
}, {
  "value": "9. Best Practices",
  "id": "9-best-practices",
  "level": 2
}, {
  "value": "9.1 Archival Frequency",
  "id": "91-archival-frequency",
  "level": 3
}, {
  "value": "9.2 Entry Retention",
  "id": "92-entry-retention",
  "level": 3
}, {
  "value": "9.3 Archive Maintenance",
  "id": "93-archive-maintenance",
  "level": 3
}, {
  "value": "9.4 Search and Navigation",
  "id": "94-search-and-navigation",
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
        id: "changelog-archival-policy",
        children: "Changelog Archival Policy"
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
      }), " This policy is a dev-kit specialisation of the Changelog Management Workflow (CMW) archival patterns defined in the Workflow Management framework. For the canonical workflow definition and archival implementation, see:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "packages/frameworks/workflow-mgt/workflows/changelog-management-workflow.yaml"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "packages/frameworks/workflow-mgt/scripts/changelog/archive_entries.py"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1-purpose",
      children: "1. Purpose"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["This policy defines criteria and procedures for archiving changelog entries to maintain a sustainable, navigable changelog as the project grows. The policy ensures that the main ", (0,jsx_runtime.jsx)(_components.code, {
        children: "CHANGELOG.md"
      }), " remains manageable while preserving complete historical records in an archive file."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Goals:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Keep main changelog under 1,000 lines for optimal usability"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Preserve complete historical changelog entries in archive"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Maintain \"Keep a Changelog\" format compliance"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Enable efficient navigation of recent vs. historical changes"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Support automated archival via Changelog Management Workflow (CMW)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "2-archive-structure",
      children: "2. Archive Structure"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "21-file-organization",
      children: "2.1 File Organization"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Main Changelog (Rolling Landing Page):"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Location: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "CHANGELOG.md"
        }), " (project root)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Purpose: Human-friendly landing page for ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "current work"
        }), ":", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "Unreleased"
            }), " section (pending changes)"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["The ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "most recent concrete release"
            })]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Default Pattern (frameworks): Rolling window of recent releases"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "AI Dev Kit Pattern:"
        }), " \"Latest-only\" – keep only the newest release entry", (0,jsx_runtime.jsx)(_components.br, {}), "\n", "(Unreleased + latest release), archive all older releases"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Archive File:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Location: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/changelog-and-release-notes/changelog-archive/CHANGELOG_ARCHIVE.md"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Purpose: Historical entries, archived releases"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Format: Same \"Keep a Changelog\" format as main changelog"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Content: Entries moved from main changelog based on archival criteria"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Detailed Changelogs:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Location: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/changelog-and-release-notes/changelog-archive/CHANGELOG_v{version}.md"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Purpose: Granular release documentation (unchanged by archival)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Status: Individual files remain in archive directory, not affected by archival process"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "22-archive-file-format",
      children: "2.2 Archive File Format"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The archive file follows the same format as the main changelog:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-markdown",
        children: "# Changelog Archive\n\nThis file contains historical changelog entries archived from `CHANGELOG.md`.\n\nFor recent changes, see [CHANGELOG.md](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/CHANGELOG.md).\n\n---\n\n## [version] - DD-MM-YY\n\n[archived entry content]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "3-archival-criteria",
      children: "3. Archival Criteria"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The policy uses a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "hybrid approach"
      }), " combining multiple criteria for flexible and intelligent archival decisions."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "31-mode-a-hybrid-sizetimeversion-based",
      children: "3.1 Mode A: Hybrid (Size/Time/Version-Based)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["This is the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "framework default mode"
      }), " for adopters who want a rolling\nhistory of recent releases in ", (0,jsx_runtime.jsx)(_components.code, {
        children: "CHANGELOG.md"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Primary Criteria (Size-Based)"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Trigger:"
        }), " When ", (0,jsx_runtime.jsx)(_components.code, {
          children: "CHANGELOG.md"
        }), " exceeds ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "1,000 lines"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Action:"
        }), " Archive oldest entries until changelog is reduced to ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "750 lines"
        }), "\n(25% buffer below threshold)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Rationale:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Prevents changelog from becoming unmanageable"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Provides clear threshold for automated triggering"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Maintains buffer to avoid frequent archival operations"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Secondary Criteria (Time-Based)"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Trigger:"
        }), " Entries older than ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "2 months"
        }), " from current date"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Action:"
        }), " Archive entries that are older than 2 months"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Rationale:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Recent changes (last 2 months) are most relevant to users"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Keeps main changelog focused on very recent development"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Historical changes (older than 2 months) are still accessible in archive"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Prevents changelog from growing too large before archival triggers"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Tertiary Criteria (Version Count)"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Trigger:"
        }), " More than ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "100 version entries"
        }), " in main changelog"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Action:"
        }), " Keep last 100 releases, archive older entries"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Rationale:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Provides consistent version-based archival boundary"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Ensures recent releases (last ~100) remain in main changelog"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Prevents version count from growing indefinitely"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Hybrid Logic"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Archival Decision:"
      }), " Archive entries if ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "ANY"
      }), " of the following conditions are met:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Main changelog exceeds 1,000 lines (size-based)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Entry is older than 2 months (time-based)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "More than 100 version entries exist (version-based)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Priority Order:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Size-based"
        }), " takes precedence if threshold exceeded (immediate archival required)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Time-based"
        }), " and ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Version-based"
        }), " applied in parallel for ongoing maintenance"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "32-mode-b-latest-only-ai-dev-kit-pattern",
      children: "3.2 Mode B: Latest-Only (AI Dev Kit Pattern)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["This mode is optimized for projects (like ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "AI Dev Kit"
      }), ") that maintain:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Immutable per-release changelog files"
        }), " (", (0,jsx_runtime.jsx)(_components.code, {
          children: "CHANGELOG_v{version}.md"
        }), ")"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Strong versioning and forensic traceability elsewhere"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Definition:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "CHANGELOG.md"
        }), " contains:", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "Unreleased"
            })
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["The ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "single most recent concrete release"
            }), " (newest version entry)"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "All older release entries are archived"
        }), " to the archive file."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Archival Decision (latest_only mode):"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Keep ", (0,jsx_runtime.jsx)(_components.code, {
          children: "entries[0]"
        }), " (newest release) in ", (0,jsx_runtime.jsx)(_components.code, {
          children: "CHANGELOG.md"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Archive all other concrete release entries (", (0,jsx_runtime.jsx)(_components.code, {
          children: "entries[1:]"
        }), ")"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Rationale:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Reduces maintenance overhead and validator friction for very long-lived projects"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Keeps the main file small and easy to scan"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Delegates full history to:", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "CHANGELOG_ARCHIVE.md"
            }), " (aggregated history)"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Per-release ", (0,jsx_runtime.jsx)(_components.code, {
              children: "CHANGELOG_v{version}.md"
            }), " files (detailed history)"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "4-archival-process",
      children: "4. Archival Process"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "41-automated-archival-cmw",
      children: "4.1 Automated Archival (CMW)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The Changelog Management Workflow (CMW) performs automated archival:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 1: Analysis"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Analyze current changelog state (line count, entry count, entry ages)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Identify entries eligible for archival based on criteria"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 2: Selection"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Select entries to archive (oldest entries first)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Ensure at least 50 recent entries remain in main changelog (minimum retention)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 3: Archive"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Move selected entries to ", (0,jsx_runtime.jsx)(_components.code, {
          children: "CHANGELOG_ARCHIVE.md"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Preserve entry format and content exactly"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Maintain version ordering (newest first) in archive"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 4: Validation"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Validate main changelog format and ordering"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Verify archive file format and ordering"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Check for duplicates or ordering violations"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 5: Commit"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Stage changes (CHANGELOG.md, CHANGELOG_ARCHIVE.md)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Commit with message: \"Changelog archival: Archive entries older than {criteria}\""
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "42-manual-archival",
      children: "4.2 Manual Archival"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Manual archival can be performed if needed:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Review changelog entries eligible for archival"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Copy entries to ", (0,jsx_runtime.jsx)(_components.code, {
          children: "CHANGELOG_ARCHIVE.md"
        }), " (oldest first)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Remove archived entries from ", (0,jsx_runtime.jsx)(_components.code, {
          children: "CHANGELOG.md"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Validate format and ordering"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Commit changes"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Note:"
      }), " Automated archival (CMW) is preferred. Manual archival should only be used for exceptional cases."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "5-entry-preservation",
      children: "5. Entry Preservation"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "51-content-preservation",
      children: "5.1 Content Preservation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "All entry content must be preserved exactly:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Version header format: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "## [version] - DD-MM-YY"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Entry content (summary, sections, links)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Related links to detailed changelogs"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "All markdown formatting"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "No modifications allowed:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Do not edit or summarize archived entries"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Do not remove sections or content"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Do not change dates or version numbers"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Do not modify links (even if paths change, preserve original)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "52-ordering-preservation",
      children: "5.2 Ordering Preservation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Archive file ordering:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Maintain \"Keep a Changelog\" format (newest first)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Archive file entries ordered newest to oldest"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Each entry maintains its original position relative to other entries"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Main changelog ordering:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "After archival, main changelog remains newest first"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "No gaps or orphaned entries"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Consistent format throughout"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "53-link-preservation",
      children: "5.3 Link Preservation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Detailed changelog links:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Links to detailed changelogs (", (0,jsx_runtime.jsx)(_components.code, {
          children: "CHANGELOG_v{version}.md"
        }), ") preserved"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Links remain functional (detailed changelogs not moved)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Archive entries reference same detailed changelog paths as original"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Cross-references:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Cross-references within entries preserved"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Links to other documentation preserved"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "No link updates required (paths relative to project root)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "6-validation-requirements",
      children: "6. Validation Requirements"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "61-pre-archival-validation",
      children: "6.1 Pre-Archival Validation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Before archival, validate:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Main changelog format compliance (\"Keep a Changelog\" format)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Version ordering (newest first)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "No duplicate version entries"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "All entries have valid version headers"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "62-post-archival-validation",
      children: "6.2 Post-Archival Validation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "After archival, validate:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Main changelog format compliance"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Archive file format compliance"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "No duplicate version entries (across both files)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Entry content preserved exactly"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Version ordering maintained in both files"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Main changelog size within target range (500-1,000 lines)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "63-continuous-validation",
      children: "6.3 Continuous Validation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "During CMW execution:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Validate format before archival"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Validate format after archival"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Report any violations or issues"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Abort archival if critical violations detected"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "7-integration-with-release-workflow-rw",
      children: "7. Integration with Release Workflow (RW)"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "71-rw-step-95-changelog-size-check",
      children: "7.1 RW Step 9.5: Changelog Size Check"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "New RW Step:"
      }), " Step 9.5 (after Step 9: Run Validators)"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Purpose:"
      }), " Check changelog size and trigger CMW if threshold exceeded"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Logic:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Check ", (0,jsx_runtime.jsx)(_components.code, {
          children: "CHANGELOG.md"
        }), " line count"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["If line count > 1,000 lines:", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Log warning: \"Changelog exceeds 1,000 lines, triggering CMW archival\""
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Trigger CMW (Changelog Management Workflow)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "CMW performs archival"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Validate results"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["If line count ≤ 1,000 lines:", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Continue to RW Step 10 (Commit Changes)"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Non-Blocking:"
      }), " CMW archival is non-blocking. RW continues even if archival fails (but logs error)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "72-pre-commit-validation",
      children: "7.2 Pre-Commit Validation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pre-commit hook validation:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Validate changelog format before commit"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Detect ordering violations"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Detect duplicate entries"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Warn if changelog size approaching threshold (>900 lines)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Action:"
      }), " If violations detected, warn user. Do not block commit (informational only)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "8-configuration",
      children: "8. Configuration"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "81-policy-configuration-default-values",
      children: "8.1 Policy Configuration (Default Values)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Default archival thresholds (configurable via ", (0,jsx_runtime.jsx)(_components.code, {
        children: "rw-config.yaml"
      }), "):"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "changelog_archival:\n  enabled: true\n  size_threshold_lines: 1000\n  target_size_lines: 750\n  time_threshold_months: 2\n  version_count_threshold: 100\n  minimum_retention_entries: 50\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "82-project-specific-configuration",
      children: "8.2 Project-Specific Configuration"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Projects can override default values in ", (0,jsx_runtime.jsx)(_components.code, {
        children: "rw-config.yaml"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "changelog_archival:\n  size_threshold_lines: 800      # Lower threshold for smaller projects\n  time_threshold_months: 2       # Shorter retention (default: 2 months)\n  version_count_threshold: 50    # Fewer versions for smaller projects\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "9-best-practices",
      children: "9. Best Practices"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "91-archival-frequency",
      children: "9.1 Archival Frequency"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Recommended:"
      }), " Automated scheduled execution (cron) - ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Weekly"
      }), " (default). Can be adjusted to biweekly or daily if higher frequency needed."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Alternative:"
      }), " Triggered archival when threshold exceeded (via RW Step 9.5)"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Manual:"
      }), " On-demand execution via \"CMW\" command (for testing/debugging)"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Avoid:"
      }), " Frequent small archival operations (inefficient)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Scheduled Automation:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "CMW is deterministic and suitable for cron automation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "No agentic intelligence required - all operations are rule-based"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Can run unattended on a schedule (default: weekly, can be adjusted to biweekly or daily)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Automated execution ensures consistent maintenance without manual intervention"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "92-entry-retention",
      children: "9.2 Entry Retention"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Minimum:"
      }), " Always retain last 50 entries in main changelog (even if archival criteria met)"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Rationale:"
      }), " Ensures recent context remains accessible without consulting archive"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "93-archive-maintenance",
      children: "9.3 Archive Maintenance"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Archive file management:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Archive file grows over time (expected behavior)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "No need to split archive file (markdown handles large files well)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Archive file remains searchable and navigable"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Archive file size:"
      }), " No hard limit on archive file size (can grow to 10,000+ lines)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "94-search-and-navigation",
      children: "9.4 Search and Navigation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Finding entries:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Recent entries: Check ", (0,jsx_runtime.jsx)(_components.code, {
          children: "CHANGELOG.md"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Historical entries: Check ", (0,jsx_runtime.jsx)(_components.code, {
          children: "CHANGELOG_ARCHIVE.md"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Detailed entries: Check ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/changelog-and-release-notes/changelog-archive/CHANGELOG_v{version}.md"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Search strategies:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use text search within files"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use version numbers to locate entries"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use dates to locate entries by time period"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "10-compliance-and-enforcement",
      children: "10. Compliance and Enforcement"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "101-automated-enforcement",
      children: "10.1 Automated Enforcement"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "CMW Enforcement:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "CMW automatically enforces archival criteria"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Triggers archival when thresholds exceeded"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Validates results after archival"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "RW Integration:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "RW Step 9.5 checks changelog size"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Automatically triggers CMW if needed"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Non-blocking (continues even if archival fails)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "102-manual-compliance",
      children: "10.2 Manual Compliance"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Developer responsibility:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Do not manually edit archived entries"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Do not remove entries from archive"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Follow archival policy when making manual changes"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Maintainer responsibility:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Monitor changelog size"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Trigger CMW if threshold exceeded"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Review archival results for compliance"
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
          children: "changelog-management-policy.md"
        }), " - Overall changelog management policy"]
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
        children: "Changelog Management Workflow (CMW) - Automated archival workflow"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Release Workflow (RW) - Integration point for archival triggers"
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