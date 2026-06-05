"use strict";
(self["webpackChunkportal"] = self["webpackChunkportal"] || []).push([["62208"], {
20469(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_architecture_standards_and_adrs_framework_backward_compatibility_policy_md_516_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-architecture-standards-and-adrs-framework-backward-compatibility-policy-md-516.json
var site_docs_architecture_standards_and_adrs_framework_backward_compatibility_policy_md_516_namespaceObject = JSON.parse('{"id":"architecture/standards-and-adrs/framework-backward-compatibility-policy","title":"Framework Backward Compatibility Policy","description":"Status: Active","source":"@site/../docs/architecture/standards-and-adrs/framework-backward-compatibility-policy.md","sourceDirName":"architecture/standards-and-adrs","slug":"/architecture/standards-and-adrs/framework-backward-compatibility-policy","permalink":"/ai-dev-kit/docs/architecture/standards-and-adrs/framework-backward-compatibility-policy","draft":false,"unlisted":false,"editUrl":"https://github.com/RMS-Ltd/ai-dev-kit/tree/main/docs/../docs/architecture/standards-and-adrs/framework-backward-compatibility-policy.md","tags":[],"version":"current","frontMatter":{"lifecycle":"evergreen","ttl_days":null,"created_at":"2026-01-03T00:00:00.000Z","expires_at":null,"housekeeping_policy":"keep"},"sidebar":"docsSidebar","previous":{"title":"Framework Auto-Update Mechanisms","permalink":"/ai-dev-kit/docs/architecture/standards-and-adrs/framework-auto-update-mechanisms"},"next":{"title":"Framework Compatibility Tracking","permalink":"/ai-dev-kit/docs/architecture/standards-and-adrs/framework-compatibility-tracking"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ../docs/architecture/standards-and-adrs/framework-backward-compatibility-policy.md


const frontMatter = {
	lifecycle: 'evergreen',
	ttl_days: null,
	created_at: new Date('2026-01-03T00:00:00.000Z'),
	expires_at: null,
	housekeeping_policy: 'keep'
};
const contentTitle = 'Framework Backward Compatibility Policy';

const assets = {

};



const toc = [{
  "value": "Executive Summary",
  "id": "executive-summary",
  "level": 2
}, {
  "value": "1. Backward Compatibility Guarantees",
  "id": "1-backward-compatibility-guarantees",
  "level": 2
}, {
  "value": "1.1 Compatibility by Version Type",
  "id": "11-compatibility-by-version-type",
  "level": 3
}, {
  "value": "1.2 Compatibility Scope",
  "id": "12-compatibility-scope",
  "level": 3
}, {
  "value": "2. Breaking Change Policy",
  "id": "2-breaking-change-policy",
  "level": 2
}, {
  "value": "2.1 Definition of Breaking Changes",
  "id": "21-definition-of-breaking-changes",
  "level": 3
}, {
  "value": "2.2 Breaking Change Requirements",
  "id": "22-breaking-change-requirements",
  "level": 3
}, {
  "value": "2.3 Breaking Change Examples",
  "id": "23-breaking-change-examples",
  "level": 3
}, {
  "value": "3. Backward Compatibility Requirements",
  "id": "3-backward-compatibility-requirements",
  "level": 2
}, {
  "value": "3.1 MINOR Version Requirements",
  "id": "31-minor-version-requirements",
  "level": 3
}, {
  "value": "3.2 PATCH Version Requirements",
  "id": "32-patch-version-requirements",
  "level": 3
}, {
  "value": "3.3 Compatibility Testing Requirements",
  "id": "33-compatibility-testing-requirements",
  "level": 3
}, {
  "value": "4. Migration Policy",
  "id": "4-migration-policy",
  "level": 2
}, {
  "value": "4.1 Migration Requirements",
  "id": "41-migration-requirements",
  "level": 3
}, {
  "value": "4.2 Migration Support",
  "id": "42-migration-support",
  "level": 3
}, {
  "value": "4.3 Deprecation Policy",
  "id": "43-deprecation-policy",
  "level": 3
}, {
  "value": "5. Compatibility Testing",
  "id": "5-compatibility-testing",
  "level": 2
}, {
  "value": "5.1 Testing Requirements",
  "id": "51-testing-requirements",
  "level": 3
}, {
  "value": "5.2 Compatibility Test Suite",
  "id": "52-compatibility-test-suite",
  "level": 3
}, {
  "value": "5.3 Testing Best Practices",
  "id": "53-testing-best-practices",
  "level": 3
}, {
  "value": "6. Version Bump Decision Matrix",
  "id": "6-version-bump-decision-matrix",
  "level": 2
}, {
  "value": "6.1 Decision Criteria",
  "id": "61-decision-criteria",
  "level": 3
}, {
  "value": "6.2 Decision Process",
  "id": "62-decision-process",
  "level": 3
}, {
  "value": "7. Compatibility Documentation",
  "id": "7-compatibility-documentation",
  "level": 2
}, {
  "value": "7.1 Required Documentation",
  "id": "71-required-documentation",
  "level": 3
}, {
  "value": "7.2 Documentation Standards",
  "id": "72-documentation-standards",
  "level": 3
}, {
  "value": "8. Compatibility Enforcement",
  "id": "8-compatibility-enforcement",
  "level": 2
}, {
  "value": "8.1 Enforcement Mechanisms",
  "id": "81-enforcement-mechanisms",
  "level": 3
}, {
  "value": "8.2 Compliance Requirements",
  "id": "82-compliance-requirements",
  "level": 3
}, {
  "value": "9. Compatibility Best Practices",
  "id": "9-compatibility-best-practices",
  "level": 2
}, {
  "value": "9.1 Framework Development",
  "id": "91-framework-development",
  "level": 3
}, {
  "value": "9.2 Framework Consumption",
  "id": "92-framework-consumption",
  "level": 3
}, {
  "value": "9.3 Compatibility Maintenance",
  "id": "93-compatibility-maintenance",
  "level": 3
}, {
  "value": "10. Related Documentation",
  "id": "10-related-documentation",
  "level": 2
}, {
  "value": "10.1 Core Documents",
  "id": "101-core-documents",
  "level": 3
}, {
  "value": "10.2 Supporting Documents",
  "id": "102-supporting-documents",
  "level": 3
}, {
  "value": "11. Summary",
  "id": "11-summary",
  "level": 2
}, {
  "value": "11.1 Key Principles",
  "id": "111-key-principles",
  "level": 3
}, {
  "value": "11.2 Compatibility Guarantees",
  "id": "112-compatibility-guarantees",
  "level": 3
}, {
  "value": "11.3 Policy Enforcement",
  "id": "113-policy-enforcement",
  "level": 3
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
    input: "input",
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
        id: "framework-backward-compatibility-policy",
        children: "Framework Backward Compatibility Policy"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Status:"
      }), " Active", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Version:"
      }), " 1.0.0", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Last Updated:"
      }), " 2026-01-03", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Epic:"
      }), " Epic 6 - Framework Management and Maintenance", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Story:"
      }), " Story 2 - Framework Update and Migration", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Task:"
      }), " E6:S02", ":T03", " - Establish backward compatibility policies", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Related:"
      }), " Framework Compatibility Tracking, Framework Versioning Strategy, Framework Update Procedures"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "executive-summary",
      children: "Executive Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["This document establishes the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "backward compatibility policy"
      }), " for AI Dev Kit frameworks. The policy defines clear requirements and guidelines for maintaining backward compatibility across framework versions, ensuring safe updates and migrations for consuming projects."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Key Principles:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Semantic Versioning:"
        }), " MAJOR.MINOR.PATCH versioning with clear compatibility guarantees"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Backward Compatibility Guarantees:"
        }), " MINOR and PATCH versions maintain backward compatibility"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Breaking Changes:"
        }), " MAJOR versions indicate breaking changes requiring migration"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Migration Support:"
        }), " Clear migration paths and documentation for breaking changes"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Testing Requirements:"
        }), " Compatibility testing required before releases"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1-backward-compatibility-guarantees",
      children: "1. Backward Compatibility Guarantees"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "11-compatibility-by-version-type",
      children: "1.1 Compatibility by Version Type"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "PATCH Versions (x.y.Z):"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Guarantee:"
        }), " Fully backward compatible"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Changes Allowed:"
        }), " Bug fixes, corrections, clarifications"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Breaking Changes:"
        }), " Not allowed"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Update Policy:"
        }), " Automatic updates recommended"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Migration Required:"
        }), " No"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "MINOR Versions (x.Y.z):"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Guarantee:"
        }), " Backward compatible"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Changes Allowed:"
        }), " New features, enhancements, additions"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Breaking Changes:"
        }), " Not allowed"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Update Policy:"
        }), " Automatic or semi-automatic updates recommended"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Migration Required:"
        }), " No"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "MAJOR Versions (X.y.z):"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Guarantee:"
        }), " Not backward compatible"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Changes Allowed:"
        }), " Breaking changes, incompatible changes"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Breaking Changes:"
        }), " Allowed and expected"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Update Policy:"
        }), " Manual updates required"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Migration Required:"
        }), " Yes (migration guide provided)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "12-compatibility-scope",
      children: "1.2 Compatibility Scope"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "What Must Remain Compatible:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "File locations and directory structure"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Template file formats and structures"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Configuration file formats and schemas"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Script interfaces and command-line arguments"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Policy document structures and required fields"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Integration points and APIs"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "What Can Change:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Internal implementation details"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Optional features and enhancements"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Documentation and examples"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Non-breaking additions to templates"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "New optional configuration options"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "2-breaking-change-policy",
      children: "2. Breaking Change Policy"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "21-definition-of-breaking-changes",
      children: "2.1 Definition of Breaking Changes"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Breaking Changes Include:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Removing or renaming core files/directories"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Changing required file locations or names"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Removing templates or core components"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Changing package directory structure significantly"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Breaking policy changes (removing requirements, changing mandatory vs. optional)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Breaking API changes (for script packages)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Changing required configuration file formats"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Removing required fields from templates or policies"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Breaking Changes Do NOT Include:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Adding new optional files or directories"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Adding new optional fields to templates"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Adding new optional configuration options"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Enhancing existing functionality"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Fixing bugs or correcting errors"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Improving documentation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Adding new optional features"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "22-breaking-change-requirements",
      children: "2.2 Breaking Change Requirements"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "When Making Breaking Changes:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Version Bump:"
        }), " Must increment MAJOR version"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Documentation:"
        }), " Must provide migration guide"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Changelog:"
        }), " Must clearly document breaking changes"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Compatibility Matrix:"
        }), " Must update compatibility requirements"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Testing:"
        }), " Must test migration path"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Support:"
        }), " Must provide migration support"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Migration Guide Requirements:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Clear description of breaking changes"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Step-by-step migration instructions"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Before/after examples"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Common migration scenarios"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Troubleshooting guidance"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Rollback procedures"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "23-breaking-change-examples",
      children: "2.3 Breaking Change Examples"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example 1: File Location Change"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-markdown",
        children: "**Breaking Change:** Framework file location changed\n- **Before:** `packages/frameworks/workflow-mgt/`\n- **After:** `packages/frameworks/workflow-management/`\n- **Impact:** Projects referencing old path will break\n- **Migration:** Update all references to new path\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example 2: Template Structure Change"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-markdown",
        children: "**Breaking Change:** Required template field removed\n- **Before:** Template requires `status` field\n- **After:** Template no longer requires `status` field (optional)\n- **Impact:** Projects using old template structure may break\n- **Migration:** Update templates to new structure\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example 3: Configuration Schema Change"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-markdown",
        children: "**Breaking Change:** Configuration file format changed\n- **Before:** YAML format with `version` field\n- **After:** JSON format with `framework_version` field\n- **Impact:** Projects using old format will break\n- **Migration:** Convert configuration files to new format\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "3-backward-compatibility-requirements",
      children: "3. Backward Compatibility Requirements"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "31-minor-version-requirements",
      children: "3.1 MINOR Version Requirements"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Required Compatibility:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "All existing functionality must continue to work"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Existing file structures must remain valid"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Existing configuration formats must remain supported"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Existing template formats must remain valid"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Existing integration points must continue to work"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Allowed Changes:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Add new optional features"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Add new optional files or directories"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Add new optional configuration options"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Enhance existing functionality"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Improve documentation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Add new examples"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Prohibited Changes:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Remove existing functionality"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Change required file locations"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Break existing configuration formats"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Remove required template fields"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Break existing integration points"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "32-patch-version-requirements",
      children: "3.2 PATCH Version Requirements"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Required Compatibility:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Full backward compatibility (same as MINOR)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "No functional changes (bug fixes only)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "No new features"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "No breaking changes"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Allowed Changes:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Bug fixes"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Corrections"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Clarifications"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Documentation improvements"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Typo fixes"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Prohibited Changes:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "New features"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Functional changes"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Breaking changes"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "File structure changes"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "33-compatibility-testing-requirements",
      children: "3.3 Compatibility Testing Requirements"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pre-Release Testing:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Test all existing functionality"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Verify backward compatibility"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Test integration points"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Validate configuration formats"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Test template compatibility"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Testing Checklist:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      className: "contains-task-list",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "All existing functionality works"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Existing file structures valid"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Existing configuration formats supported"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Existing templates valid"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Integration points functional"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "No breaking changes introduced"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "4-migration-policy",
      children: "4. Migration Policy"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "41-migration-requirements",
      children: "4.1 Migration Requirements"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "MAJOR Version Updates:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Migration guide required"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Step-by-step instructions provided"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Before/after examples included"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Common scenarios covered"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Troubleshooting guidance provided"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Rollback procedures documented"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Migration Guide Contents:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Overview:"
        }), " Summary of breaking changes"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Migration Steps:"
        }), " Step-by-step instructions"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Examples:"
        }), " Before/after examples"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Scenarios:"
        }), " Common migration scenarios"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Troubleshooting:"
        }), " Common issues and solutions"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Rollback:"
        }), " Rollback procedures"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "42-migration-support",
      children: "4.2 Migration Support"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Support Provided:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Migration guides for all breaking changes"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Migration tools and scripts (when applicable)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Migration examples and templates"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Migration support documentation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Rollback procedures"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Migration Timeline:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Migration guides available at release"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Migration support provided during transition period"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Deprecation warnings before breaking changes (when possible)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Extended support for previous MAJOR version (when applicable)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "43-deprecation-policy",
      children: "4.3 Deprecation Policy"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Deprecation Process:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Deprecation Notice:"
        }), " Announce deprecation in changelog"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Deprecation Period:"
        }), " Maintain deprecated features for at least one MINOR version"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Breaking Change:"
        }), " Remove deprecated features in next MAJOR version"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Migration Guide:"
        }), " Provide migration guide for breaking change"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Deprecation Timeline:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "v2.0.0:"
        }), " Feature introduced"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "v2.1.0:"
        }), " Feature deprecated (deprecation notice)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "v2.2.0:"
        }), " Feature still available but deprecated"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "v3.0.0:"
        }), " Feature removed (breaking change, migration guide provided)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "5-compatibility-testing",
      children: "5. Compatibility Testing"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "51-testing-requirements",
      children: "5.1 Testing Requirements"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pre-Release Testing:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Test all existing functionality"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Verify backward compatibility"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Test integration points"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Validate configuration formats"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Test template compatibility"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Run compatibility test suite"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Testing Process:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Unit Tests:"
        }), " Test framework functionality"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Integration Tests:"
        }), " Test framework integration"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Compatibility Tests:"
        }), " Test backward compatibility"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Migration Tests:"
        }), " Test migration paths (for MAJOR versions)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Regression Tests:"
        }), " Verify no regressions"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "52-compatibility-test-suite",
      children: "5.2 Compatibility Test Suite"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Test Coverage:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Existing functionality tests"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Configuration format tests"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Template format tests"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Integration point tests"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Migration path tests (for MAJOR versions)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Test Automation:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Automated compatibility test suite"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "CI/CD integration"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Automated regression testing"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Automated migration testing"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "53-testing-best-practices",
      children: "5.3 Testing Best Practices"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Best Practices:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Test against previous version"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Test all integration points"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Test all configuration formats"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Test all template formats"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Test migration paths (for MAJOR versions)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Document test results"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "6-version-bump-decision-matrix",
      children: "6. Version Bump Decision Matrix"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "61-decision-criteria",
      children: "6.1 Decision Criteria"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "PATCH Version (x.y.Z → x.y.Z+1):"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Bug fixes only"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "No new features"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "No breaking changes"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Full backward compatibility"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "MINOR Version (x.Y.z → x.Y+1.0):"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "New features added"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Enhancements made"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "No breaking changes"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Backward compatible"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "MAJOR Version (X.y.z → X+1.0.0):"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Breaking changes made"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Incompatible changes"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Migration required"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Not backward compatible"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "62-decision-process",
      children: "6.2 Decision Process"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 1: Identify Changes"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "List all changes made"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Categorize changes (bug fix, feature, breaking)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Assess impact of changes"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 2: Evaluate Compatibility"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Check if changes break compatibility"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Verify backward compatibility"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Test existing functionality"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 3: Determine Version Bump"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If breaking changes → MAJOR version"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If new features → MINOR version"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If bug fixes only → PATCH version"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 4: Document Decision"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Document version bump decision"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Document breaking changes (if MAJOR)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Create migration guide (if MAJOR)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update changelog"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "7-compatibility-documentation",
      children: "7. Compatibility Documentation"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "71-required-documentation",
      children: "7.1 Required Documentation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "For All Versions:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Changelog entry"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Version release notes"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Compatibility matrix update (if dependencies change)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "For MINOR Versions:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "New features documentation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Enhancement documentation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Compatibility verification"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "For MAJOR Versions:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Migration guide"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Breaking changes documentation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Compatibility matrix update"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Migration examples"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "72-documentation-standards",
      children: "7.2 Documentation Standards"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Changelog Format:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Clear categorization (Added, Changed, Deprecated, Removed, Fixed)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Breaking changes clearly marked"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Migration guide references (for MAJOR versions)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Compatibility notes"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Migration Guide Format:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Overview of breaking changes"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Step-by-step migration instructions"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Before/after examples"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Common scenarios"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Troubleshooting"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Rollback procedures"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "8-compatibility-enforcement",
      children: "8. Compatibility Enforcement"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "81-enforcement-mechanisms",
      children: "8.1 Enforcement Mechanisms"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pre-Release Validation:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Compatibility test suite"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Backward compatibility verification"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Integration testing"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Configuration format validation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Template format validation"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Release Validation:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Compatibility matrix verification"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Migration guide verification (for MAJOR versions)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Documentation completeness check"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Test suite execution"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Post-Release Monitoring:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Monitor for compatibility issues"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Track migration adoption"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Collect feedback"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Address compatibility concerns"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "82-compliance-requirements",
      children: "8.2 Compliance Requirements"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Framework Developers:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Must maintain backward compatibility for MINOR/PATCH versions"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Must provide migration guides for MAJOR versions"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Must test compatibility before release"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Must document breaking changes clearly"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Framework Consumers:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Should test updates before applying"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Should review migration guides for MAJOR updates"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Should report compatibility issues"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Should follow migration procedures"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "9-compatibility-best-practices",
      children: "9. Compatibility Best Practices"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "91-framework-development",
      children: "9.1 Framework Development"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Best Practices:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Maintain backward compatibility for MINOR/PATCH versions"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Clearly document breaking changes for MAJOR versions"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Provide comprehensive migration guides"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Test compatibility before release"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use deprecation warnings before breaking changes"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Maintain compatibility test suite"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "92-framework-consumption",
      children: "9.2 Framework Consumption"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Best Practices:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Test updates in development first"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Review changelog before updating"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Follow migration guides for MAJOR updates"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Pin framework versions in production"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Monitor for compatibility issues"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Report compatibility problems"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "93-compatibility-maintenance",
      children: "9.3 Compatibility Maintenance"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Best Practices:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Keep compatibility matrix up to date"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Document breaking changes clearly"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Provide migration guides promptly"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Monitor framework versions across projects"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Maintain compatibility history"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Support migration processes"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "10-related-documentation",
      children: "10. Related Documentation"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "101-core-documents",
      children: "10.1 Core Documents"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Framework Compatibility Tracking:"
          }), " ", (0,jsx_runtime.jsx)(_components.code, {
            children: "framework-compatibility-tracking.md"
          })]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Compatibility matrix and dependency tracking"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Version compatibility requirements"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Framework Versioning Strategy:"
          }), " ", (0,jsx_runtime.jsx)(_components.code, {
            children: "framework-versioning-strategy.md"
          })]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Framework versioning schema and conventions"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Version bump criteria"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Framework Update Procedures:"
          }), " ", (0,jsx_runtime.jsx)(_components.code, {
            children: "framework-update-procedures.md"
          })]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Update workflows and procedures"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Update testing and validation"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "102-supporting-documents",
      children: "10.2 Supporting Documents"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Framework Migration Guide:"
          }), " ", (0,jsx_runtime.jsx)(_components.code, {
            children: "framework-migration-guide.md"
          })]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Migration procedures and tools"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Migration scenarios and examples"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Framework Release Process:"
          }), " ", (0,jsx_runtime.jsx)(_components.code, {
            children: "framework-release-process.md"
          })]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Framework release workflow"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Release validation procedures"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "11-summary",
      children: "11. Summary"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "111-key-principles",
      children: "11.1 Key Principles"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Semantic Versioning:"
        }), " MAJOR.MINOR.PATCH with clear compatibility guarantees"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Backward Compatibility:"
        }), " MINOR and PATCH versions maintain backward compatibility"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Breaking Changes:"
        }), " MAJOR versions indicate breaking changes requiring migration"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Migration Support:"
        }), " Clear migration paths and documentation for breaking changes"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Testing Requirements:"
        }), " Compatibility testing required before releases"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "112-compatibility-guarantees",
      children: "11.2 Compatibility Guarantees"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "PATCH Versions:"
        }), " Fully backward compatible (bug fixes only)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "MINOR Versions:"
        }), " Backward compatible (new features, no breaking changes)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "MAJOR Versions:"
        }), " Not backward compatible (breaking changes, migration required)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "113-policy-enforcement",
      children: "11.3 Policy Enforcement"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Pre-release compatibility testing"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Migration guide requirements for MAJOR versions"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Documentation standards and requirements"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Compliance requirements for developers and consumers"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Last Updated:"
      }), " 2026-01-03", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Document Version:"
      }), " 1.0.0", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Related Task:"
      }), " E6:S02", ":T03", " - Establish backward compatibility policies"]
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