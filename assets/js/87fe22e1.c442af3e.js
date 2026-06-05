"use strict";
(self["webpackChunkportal"] = self["webpackChunkportal"] || []).push([["52434"], {
18710(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_architecture_standards_and_adrs_policy_salience_schema_md_87f_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-architecture-standards-and-adrs-policy-salience-schema-md-87f.json
var site_docs_architecture_standards_and_adrs_policy_salience_schema_md_87f_namespaceObject = JSON.parse('{"id":"architecture/standards-and-adrs/policy-salience-schema","title":"Policy Salience Schema Specification","description":"Version: 1.0.0","source":"@site/../docs/architecture/standards-and-adrs/policy-salience-schema.md","sourceDirName":"architecture/standards-and-adrs","slug":"/architecture/standards-and-adrs/policy-salience-schema","permalink":"/ai-dev-kit/docs/architecture/standards-and-adrs/policy-salience-schema","draft":false,"unlisted":false,"editUrl":"https://github.com/RMS-Ltd/ai-dev-kit/tree/main/docs/../docs/architecture/standards-and-adrs/policy-salience-schema.md","tags":[],"version":"current","frontMatter":{"lifecycle":"evergreen","ttl_days":null,"created_at":"2025-12-12T00:00:00.000Z","expires_at":null,"housekeeping_policy":"keep"},"sidebar":"docsSidebar","previous":{"title":"Policy Comparison: Starborn Legacy vs AI Dev Kit — Proposal for Updates","permalink":"/ai-dev-kit/docs/architecture/standards-and-adrs/policy-comparison-starborn-vs-ai-dev-kit-proposal"},"next":{"title":"Pre-Release Feedback Mechanism Design","permalink":"/ai-dev-kit/docs/architecture/standards-and-adrs/pre-release-feedback-mechanism-design"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ../docs/architecture/standards-and-adrs/policy-salience-schema.md


const frontMatter = {
	lifecycle: 'evergreen',
	ttl_days: null,
	created_at: new Date('2025-12-12T00:00:00.000Z'),
	expires_at: null,
	housekeeping_policy: 'keep'
};
const contentTitle = 'Policy Salience Schema Specification';

const assets = {

};



const toc = [{
  "value": "Overview",
  "id": "overview",
  "level": 2
}, {
  "value": "Schema Structure",
  "id": "schema-structure",
  "level": 2
}, {
  "value": "Complete Schema",
  "id": "complete-schema",
  "level": 3
}, {
  "value": "Field Definitions",
  "id": "field-definitions",
  "level": 2
}, {
  "value": "Top-Level Fields",
  "id": "top-level-fields",
  "level": 3
}, {
  "value": "<code>policy_id</code> (required, string)",
  "id": "policy_id-required-string",
  "level": 4
}, {
  "value": "<code>type</code> (required, enum)",
  "id": "type-required-enum",
  "level": 4
}, {
  "value": "<code>domain</code> (required, object)",
  "id": "domain-required-object",
  "level": 4
}, {
  "value": "<code>audience</code> (required, array of strings)",
  "id": "audience-required-array-of-strings",
  "level": 4
}, {
  "value": "<code>applies_to</code> (required, object)",
  "id": "applies_to-required-object",
  "level": 4
}, {
  "value": "<code>excludes</code> (optional, object)",
  "id": "excludes-optional-object",
  "level": 4
}, {
  "value": "Key Rules",
  "id": "key-rules",
  "level": 3
}, {
  "value": "<code>key_rules</code> (required, array of objects)",
  "id": "key_rules-required-array-of-objects",
  "level": 4
}, {
  "value": "Decision Criteria",
  "id": "decision-criteria",
  "level": 3
}, {
  "value": "<code>decision_criteria</code> (optional, array of objects)",
  "id": "decision_criteria-optional-array-of-objects",
  "level": 4
}, {
  "value": "Triggers",
  "id": "triggers",
  "level": 3
}, {
  "value": "<code>triggers</code> (optional, array of objects)",
  "id": "triggers-optional-array-of-objects",
  "level": 4
}, {
  "value": "Integration Points",
  "id": "integration-points",
  "level": 3
}, {
  "value": "<code>integration_points</code> (optional, array of objects)",
  "id": "integration_points-optional-array-of-objects",
  "level": 4
}, {
  "value": "Related Policies",
  "id": "related-policies",
  "level": 3
}, {
  "value": "<code>related_policies</code> (optional, array of strings)",
  "id": "related_policies-optional-array-of-strings",
  "level": 4
}, {
  "value": "Schema Validation Rules",
  "id": "schema-validation-rules",
  "level": 2
}, {
  "value": "Required Fields",
  "id": "required-fields",
  "level": 3
}, {
  "value": "Field Constraints",
  "id": "field-constraints",
  "level": 3
}, {
  "value": "Best Practices",
  "id": "best-practices",
  "level": 3
}, {
  "value": "Agent Parsing Guidelines",
  "id": "agent-parsing-guidelines",
  "level": 2
}, {
  "value": "Quick Policy Lookup",
  "id": "quick-policy-lookup",
  "level": 3
}, {
  "value": "Policy Validation",
  "id": "policy-validation",
  "level": 3
}, {
  "value": "Policy Decision Making",
  "id": "policy-decision-making",
  "level": 3
}, {
  "value": "Examples",
  "id": "examples",
  "level": 2
}, {
  "value": "References",
  "id": "references",
  "level": 2
}, {
  "value": "Version History",
  "id": "version-history",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    br: "br",
    code: "code",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    h4: "h4",
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
        id: "policy-salience-schema-specification",
        children: "Policy Salience Schema Specification"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Version:"
      }), " 1.0.0", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Last Updated:"
      }), " 2025-12-12", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Status:"
      }), " Active", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Epic:"
      }), " Epic 5 - Documentation Management and Maintenance", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Story:"
      }), " Story 6 - Policy Documentation Structure", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Task:"
      }), " E5:S06", ":T01", " - Implement Policy Documents Machine-Readable Salience Section"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "overview",
      children: "Overview"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["This specification defines the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Policy Salience"
      }), " schema, a standardized YAML structure embedded in policy document front-matter that enables AI agents to quickly parse and understand policy requirements without reading entire documents."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Purpose:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Enable fast agent policy lookup and decision-making"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Support automated policy validation and enforcement"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Maintain human readability alongside machine-readability"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Standardize policy document structure across the codebase"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "schema-structure",
      children: "Schema Structure"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "policy_salience"
      }), " section is added to the YAML front-matter of policy documents, immediately after the lifecycle metadata fields."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "complete-schema",
      children: "Complete Schema"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "---\nlifecycle: evergreen\nttl_days: null\ncreated_at: 2025-12-12T00:00:00Z\nexpires_at: null\nhousekeeping_policy: keep\npolicy_salience:\n  policy_id: <unique-policy-identifier>\n  type: <policy-type>\n  domain:\n    primary: <primary-domain>\n    secondary: [<secondary-domains>]\n  audience: [<audience-roles>]\n  applies_to:\n    documents: [<document-patterns>]\n    activities: [<activity-types>]\n    components: [<component-names>]\n  excludes:\n    documents: [<excluded-patterns>]\n    activities: [<excluded-activities>]\n  key_rules:\n    - id: <rule-id>\n      summary: <rule-summary>\n      must_level: <MUST|SHOULD|MAY>\n      when_applies: [<triggers>]\n      enforcement:\n        owner: [<owner-roles>]\n        mechanisms: [<enforcement-mechanisms>]\n      validation_hints: [<validation-checks>]\n  decision_criteria:\n    - id: <criteria-id>\n      question: <decision-question>\n      yes_action: <action-if-yes>\n      no_action: <action-if-no>\n  triggers:\n    - id: <trigger-id>\n      event: <event-type>\n      required_checks: [<validation-checks>]\n  integration_points:\n    - id: <integration-id>\n      component: <component-name>\n      step: <workflow-step>\n      behavior: <expected-behavior>\n  related_policies: [<policy-file-paths>]\n---\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "field-definitions",
      children: "Field Definitions"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "top-level-fields",
      children: "Top-Level Fields"
    }), "\n", (0,jsx_runtime.jsxs)(_components.h4, {
      id: "policy_id-required-string",
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "policy_id"
      }), " (required, string)"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Purpose:"
      }), " Unique identifier for the policy document."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Format:"
      }), " Lowercase, hyphenated (e.g., ", (0,jsx_runtime.jsx)(_components.code, {
        children: "doc-maintenance-policy"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "kanban-governance-policy"
      }), ")"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "policy_id: doc-maintenance-policy\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.h4, {
      id: "type-required-enum",
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "type"
      }), " (required, enum)"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Purpose:"
      }), " Categorizes the policy by its primary concern."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Values:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "governance"
        }), " - Project management, workflows, processes"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "technical"
        }), " - Technical standards, architecture, code quality"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "process"
        }), " - Development processes, workflows, procedures"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "security"
        }), " - Security policies, access control, data protection"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "data"
        }), " - Data management, privacy, retention policies"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "type: governance\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.h4, {
      id: "domain-required-object",
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "domain"
      }), " (required, object)"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Purpose:"
      }), " Identifies the problem domain(s) this policy addresses."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Fields:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "primary"
        }), " (required, string) - Primary domain (e.g., ", (0,jsx_runtime.jsx)(_components.code, {
          children: "documentation"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "versioning"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "kanban"
        }), ")"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "secondary"
        }), " (optional, array of strings) - Related domains"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "domain:\n  primary: documentation\n  secondary: [\"maintenance\", \"quality\"]\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.h4, {
      id: "audience-required-array-of-strings",
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "audience"
      }), " (required, array of strings)"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Purpose:"
      }), " Identifies who this policy applies to or who needs to understand it."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Common Values:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "agents"
        }), " - AI agents/assistants"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "developers"
        }), " - All developers"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "maintainers"
        }), " - Framework/maintenance team"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "epic-owners"
        }), " - Epic owners"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "story-owners"
        }), " - Story owners"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "framework-owners"
        }), " - Framework package owners"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "audience: [\"agents\", \"epic-owners\", \"framework-owners\", \"developers\"]\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.h4, {
      id: "applies_to-required-object",
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "applies_to"
      }), " (required, object)"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Purpose:"
      }), " Defines what this policy governs."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Fields:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "documents"
        }), " (optional, array of strings) - File patterns or document types"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "activities"
        }), " (optional, array of strings) - Activities/workflows (e.g., ", (0,jsx_runtime.jsx)(_components.code, {
          children: "release-workflow"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "story-completion"
        }), ")"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "components"
        }), " (optional, array of strings) - System components (e.g., ", (0,jsx_runtime.jsx)(_components.code, {
          children: "kanban-board"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "version-file"
        }), ")"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "applies_to:\n  documents:\n    - \"docs/**\"\n    - \"packages/frameworks/**\"\n    - \"root:README.md\"\n  activities:\n    - \"release-workflow\"\n    - \"story-completion\"\n  components:\n    - \"kanban-board\"\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.h4, {
      id: "excludes-optional-object",
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "excludes"
      }), " (optional, object)"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Purpose:"
      }), " Explicitly defines what is NOT covered by this policy."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Fields:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "documents"
        }), " (optional, array of strings) - Excluded file patterns"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "activities"
        }), " (optional, array of strings) - Excluded activities"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "excludes:\n  documents:\n    - \"third-party-docs/**\"\n    - \"external-links-only.md\"\n  activities:\n    - \"experimental-workflows\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "key-rules",
      children: "Key Rules"
    }), "\n", (0,jsx_runtime.jsxs)(_components.h4, {
      id: "key_rules-required-array-of-objects",
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "key_rules"
      }), " (required, array of objects)"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Purpose:"
      }), " Captures the most important rules/principles that agents need to understand quickly."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Rule Object Fields:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "id"
        }), " (required, string) - Unique rule identifier (e.g., ", (0,jsx_runtime.jsx)(_components.code, {
          children: "DM-R1"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "KG-R2"
        }), ")"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "summary"
        }), " (required, string) - One-sentence summary of the rule"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "must_level"
        }), " (required, enum) - ", (0,jsx_runtime.jsx)(_components.code, {
          children: "MUST"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "SHOULD"
        }), ", or ", (0,jsx_runtime.jsx)(_components.code, {
          children: "MAY"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "when_applies"
        }), " (optional, array of strings) - Triggers or conditions when rule applies"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "enforcement"
        }), " (optional, object) - How rule is enforced", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "owner"
            }), " (array of strings) - Who is responsible for enforcement"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "mechanisms"
            }), " (array of strings) - Enforcement mechanisms (e.g., ", (0,jsx_runtime.jsx)(_components.code, {
              children: "release-workflow-step"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "validator-script"
            }), ")"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "validation_hints"
        }), " (optional, array of strings) - What agents should check when validating"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "key_rules:\n  - id: DM-R1\n    summary: \"Documentation must accurately reflect current implementation, processes, and policies.\"\n    must_level: MUST\n    when_applies:\n      - \"code changes merged to main\"\n      - \"process/policy changes approved\"\n    enforcement:\n      owner: [\"epic-owners\", \"framework-owners\"]\n      mechanisms:\n        - \"story-completion-checklist\"\n        - \"release-workflow-step: docs-validation\"\n    validation_hints:\n      - \"check version numbers and last-updated fields\"\n      - \"compare documented behavior vs code for changed modules\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "decision-criteria",
      children: "Decision Criteria"
    }), "\n", (0,jsx_runtime.jsxs)(_components.h4, {
      id: "decision_criteria-optional-array-of-objects",
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "decision_criteria"
      }), " (optional, array of objects)"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Purpose:"
      }), " Provides decision trees or criteria for when/how the policy applies."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Criteria Object Fields:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "id"
        }), " (required, string) - Unique criteria identifier"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "question"
        }), " (required, string) - Decision question"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "yes_action"
        }), " (required, string) - Action if answer is yes"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "no_action"
        }), " (optional, string) - Action if answer is no"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "decision_criteria:\n  - id: DM-DC1\n    question: \"Does this change affect user-visible behavior, APIs, or processes?\"\n    yes_action: \"Require documentation update under the relevant Epic/Story.\"\n    no_action: \"Record explicit 'no-doc-change-required' note in Story.\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "triggers",
      children: "Triggers"
    }), "\n", (0,jsx_runtime.jsxs)(_components.h4, {
      id: "triggers-optional-array-of-objects",
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "triggers"
      }), " (optional, array of objects)"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Purpose:"
      }), " Defines events that activate policy checks or requirements."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Trigger Object Fields:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "id"
        }), " (required, string) - Unique trigger identifier"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "event"
        }), " (required, string) - Event type (e.g., ", (0,jsx_runtime.jsx)(_components.code, {
          children: "code-merged-to-main"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "story-completed"
        }), ")"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "required_checks"
        }), " (optional, array of strings) - Validation checks to perform"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "triggers:\n  - id: DM-T1\n    event: \"code-merged-to-main\"\n    required_checks:\n      - \"ensure_related_story_has_doc-update-or-exemption\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "integration-points",
      children: "Integration Points"
    }), "\n", (0,jsx_runtime.jsxs)(_components.h4, {
      id: "integration_points-optional-array-of-objects",
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "integration_points"
      }), " (optional, array of objects)"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Purpose:"
      }), " Documents how this policy integrates with workflows, tools, or systems."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Integration Object Fields:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "id"
        }), " (required, string) - Unique integration identifier"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "component"
        }), " (required, string) - Component name (e.g., ", (0,jsx_runtime.jsx)(_components.code, {
          children: "release-workflow"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "doc-lifecycle-validator"
        }), ")"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "step"
        }), " (optional, string) - Specific workflow step"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "behavior"
        }), " (required, string) - Expected behavior or action"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "integration_points:\n  - id: DM-IP1\n    component: \"release-workflow\"\n    step: \"docs-validation\"\n    behavior: \"fail release if required docs not updated\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "related-policies",
      children: "Related Policies"
    }), "\n", (0,jsx_runtime.jsxs)(_components.h4, {
      id: "related_policies-optional-array-of-strings",
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "related_policies"
      }), " (optional, array of strings)"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Purpose:"
      }), " Links to other policies that are related, dependent, or referenced."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Format:"
      }), " Relative file paths from repository root"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "related_policies:\n  - \"docs/architecture/standards-and-adrs/doc-lifecycle-policy.md\"\n  - \"packages/frameworks/kanban/policies/kanban-governance-policy.md\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "schema-validation-rules",
      children: "Schema Validation Rules"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "required-fields",
      children: "Required Fields"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "policy_id"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "type"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "domain.primary"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "audience"
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "applies_to"
        }), " (at least one sub-field must be present)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "key_rules"
        }), " (at least one rule must be present)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "field-constraints",
      children: "Field Constraints"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "policy_id"
        }), ": Must be unique across all policies"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "type"
        }), ": Must be one of the defined enum values"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "must_level"
        }), ": Must be ", (0,jsx_runtime.jsx)(_components.code, {
          children: "MUST"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "SHOULD"
        }), ", or ", (0,jsx_runtime.jsx)(_components.code, {
          children: "MAY"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "related_policies"
        }), ": File paths must exist and be valid"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "best-practices",
      children: "Best Practices"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Keep ", (0,jsx_runtime.jsx)(_components.code, {
          children: "key_rules"
        }), " focused on the 3-7 most critical rules"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use clear, concise language in summaries"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Provide actionable ", (0,jsx_runtime.jsx)(_components.code, {
          children: "validation_hints"
        }), " for agents"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Link to related policies for context"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Update ", (0,jsx_runtime.jsx)(_components.code, {
          children: "related_policies"
        }), " when policies change"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "agent-parsing-guidelines",
      children: "Agent Parsing Guidelines"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "quick-policy-lookup",
      children: "Quick Policy Lookup"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Agents should:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Extract ", (0,jsx_runtime.jsx)(_components.code, {
          children: "policy_salience"
        }), " section from front-matter"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Check ", (0,jsx_runtime.jsx)(_components.code, {
          children: "applies_to"
        }), " to determine if policy is relevant"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Review ", (0,jsx_runtime.jsx)(_components.code, {
          children: "key_rules"
        }), " for critical requirements"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "decision_criteria"
        }), " for policy-driven decisions"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Check ", (0,jsx_runtime.jsx)(_components.code, {
          children: "triggers"
        }), " for event-driven validation"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "policy-validation",
      children: "Policy Validation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Agents should:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "validation_hints"
        }), " to guide checks"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Verify ", (0,jsx_runtime.jsx)(_components.code, {
          children: "enforcement.mechanisms"
        }), " are in place"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Check ", (0,jsx_runtime.jsx)(_components.code, {
          children: "integration_points"
        }), " for workflow integration"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Validate against ", (0,jsx_runtime.jsx)(_components.code, {
          children: "key_rules"
        }), " requirements"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "policy-decision-making",
      children: "Policy Decision Making"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Agents should:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "decision_criteria"
        }), " for yes/no decisions"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Check ", (0,jsx_runtime.jsx)(_components.code, {
          children: "applies_to"
        }), " scope before applying policy"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Respect ", (0,jsx_runtime.jsx)(_components.code, {
          children: "excludes"
        }), " boundaries"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Reference ", (0,jsx_runtime.jsx)(_components.code, {
          children: "related_policies"
        }), " for full context"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "examples",
      children: "Examples"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "See the following policy documents for complete examples:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/architecture/standards-and-adrs/documentation-maintenance-policy.md"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "packages/frameworks/kanban/policies/kanban-governance-policy.md"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "packages/frameworks/doc-lifecycle/policies/doc-lifecycle-policy.md"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "references",
      children: "References"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "FR-022:"
        }), " Policy Documents Machine-Readable Salience Section"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Epic 5:"
        }), " Documentation Management and Maintenance"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Story 6:"
        }), " Policy Documentation Structure"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Related:"
        }), " YAML front-matter pattern (lifecycle metadata)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "version-history",
      children: "Version History"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "v1.0.0"
        }), " (2025-12-12): Initial schema specification"]
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