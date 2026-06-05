"use strict";
(self["webpackChunkportal"] = self["webpackChunkportal"] || []).push([["14402"], {
86293(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_architecture_standards_and_adrs_semver_mapping_implementation_impact_md_c3c_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-architecture-standards-and-adrs-semver-mapping-implementation-impact-md-c3c.json
var site_docs_architecture_standards_and_adrs_semver_mapping_implementation_impact_md_c3c_namespaceObject = JSON.parse('{"id":"architecture/standards-and-adrs/semver-mapping-implementation-impact","title":"SemVer Mapping Implementation Impact Analysis","description":"Status: Analysis","source":"@site/../docs/architecture/standards-and-adrs/semver-mapping-implementation-impact.md","sourceDirName":"architecture/standards-and-adrs","slug":"/architecture/standards-and-adrs/semver-mapping-implementation-impact","permalink":"/ai-dev-kit/docs/architecture/standards-and-adrs/semver-mapping-implementation-impact","draft":false,"unlisted":false,"editUrl":"https://github.com/RMS-Ltd/ai-dev-kit/tree/main/docs/../docs/architecture/standards-and-adrs/semver-mapping-implementation-impact.md","tags":[],"version":"current","frontMatter":{"lifecycle":"evergreen","ttl_days":null,"created_at":"2026-01-17T00:00:00.000Z","expires_at":null,"housekeeping_policy":"keep"},"sidebar":"docsSidebar","previous":{"title":"SemVer Mapping & Tagging Implementation Follow-Up (Spec)","permalink":"/ai-dev-kit/docs/architecture/standards-and-adrs/semver-implementation-followup-spec"},"next":{"title":"SemVer Mapping Proposal: RC.E.S.T+B → MAJOR.MINOR.PATCH+BUILD","permalink":"/ai-dev-kit/docs/architecture/standards-and-adrs/semver-mapping-proposal"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ../docs/architecture/standards-and-adrs/semver-mapping-implementation-impact.md


const frontMatter = {
	lifecycle: 'evergreen',
	ttl_days: null,
	created_at: new Date('2026-01-17T00:00:00.000Z'),
	expires_at: null,
	housekeeping_policy: 'keep'
};
const contentTitle = 'SemVer Mapping Implementation Impact Analysis';

const assets = {

};



const toc = [{
  "value": "Executive Summary",
  "id": "executive-summary",
  "level": 2
}, {
  "value": "1. Core Versioning Policy Documents",
  "id": "1-core-versioning-policy-documents",
  "level": 2
}, {
  "value": "1.1 Primary Policy Documents",
  "id": "11-primary-policy-documents",
  "level": 3
}, {
  "value": "1.2 Supporting Documentation",
  "id": "12-supporting-documentation",
  "level": 3
}, {
  "value": "1.5 ⚠️ CRITICAL: Versioning Framework Package Updates",
  "id": "15-️-critical-versioning-framework-package-updates",
  "level": 2
}, {
  "value": "Framework Package Files",
  "id": "framework-package-files",
  "level": 3
}, {
  "value": "Framework Package Dependencies",
  "id": "framework-package-dependencies",
  "level": 3
}, {
  "value": "2. Release Workflow (RW) Components",
  "id": "2-release-workflow-rw-components",
  "level": 2
}, {
  "value": "2.1 RW Step 11: Create Git Tag ⚠️ CRITICAL",
  "id": "21-rw-step-11-create-git-tag-️-critical",
  "level": 3
}, {
  "value": "2.2 RW Step 12: Push to Remote",
  "id": "22-rw-step-12-push-to-remote",
  "level": 3
}, {
  "value": "2.3 RW Documentation",
  "id": "23-rw-documentation",
  "level": 3
}, {
  "value": "3. Registry Management",
  "id": "3-registry-management",
  "level": 2
}, {
  "value": "3.1 Registry File",
  "id": "31-registry-file",
  "level": 3
}, {
  "value": "3.2 Registry Utilities",
  "id": "32-registry-utilities",
  "level": 3
}, {
  "value": "4. Validation Scripts",
  "id": "4-validation-scripts",
  "level": 2
}, {
  "value": "4.1 Version Bump Validation",
  "id": "41-version-bump-validation",
  "level": 3
}, {
  "value": "4.2 SemVer Validation (New)",
  "id": "42-semver-validation-new",
  "level": 3
}, {
  "value": "5. GitHub Releases",
  "id": "5-github-releases",
  "level": 2
}, {
  "value": "5.1 GitHub Release Automation",
  "id": "51-github-release-automation",
  "level": 3
}, {
  "value": "5.2 Release Notes",
  "id": "52-release-notes",
  "level": 3
}, {
  "value": "6. Documentation Updates",
  "id": "6-documentation-updates",
  "level": 2
}, {
  "value": "6.1 README and Project Documentation",
  "id": "61-readme-and-project-documentation",
  "level": 3
}, {
  "value": "6.2 Changelog",
  "id": "62-changelog",
  "level": 3
}, {
  "value": "7. Configuration Files",
  "id": "7-configuration-files",
  "level": 2
}, {
  "value": "7.1 rw-config.yaml",
  "id": "71-rw-configyaml",
  "level": 3
}, {
  "value": "8. Cursor Rules",
  "id": "8-cursor-rules",
  "level": 2
}, {
  "value": "8.1 RW Trigger Section",
  "id": "81-rw-trigger-section",
  "level": 3
}, {
  "value": "9. Version Utilities and Helpers",
  "id": "9-version-utilities-and-helpers",
  "level": 2
}, {
  "value": "9.1 Version Parsing Utilities",
  "id": "91-version-parsing-utilities",
  "level": 3
}, {
  "value": "9.2 Version Display Helpers",
  "id": "92-version-display-helpers",
  "level": 3
}, {
  "value": "10. Integration Points",
  "id": "10-integration-points",
  "level": 2
}, {
  "value": "10.1 Package Version Workflow (PVW)",
  "id": "101-package-version-workflow-pvw",
  "level": 3
}, {
  "value": "10.2 Changelog Management Workflow (CMW)",
  "id": "102-changelog-management-workflow-cmw",
  "level": 3
}, {
  "value": "11. Testing and Validation",
  "id": "11-testing-and-validation",
  "level": 2
}, {
  "value": "11.1 Test Coverage",
  "id": "111-test-coverage",
  "level": 3
}, {
  "value": "11.2 Integration Tests",
  "id": "112-integration-tests",
  "level": 3
}, {
  "value": "12. Migration and Rollout",
  "id": "12-migration-and-rollout",
  "level": 2
}, {
  "value": "12.1 Historical Release Analysis",
  "id": "121-historical-release-analysis",
  "level": 3
}, {
  "value": "12.2 Gradual Rollout",
  "id": "122-gradual-rollout",
  "level": 3
}, {
  "value": "13. Documentation References",
  "id": "13-documentation-references",
  "level": 2
}, {
  "value": "13.1 User-Facing Documentation",
  "id": "131-user-facing-documentation",
  "level": 3
}, {
  "value": "13.2 Developer Documentation",
  "id": "132-developer-documentation",
  "level": 3
}, {
  "value": "14. Edge Cases and Special Scenarios",
  "id": "14-edge-cases-and-special-scenarios",
  "level": 2
}, {
  "value": "14.1 RC Transitions",
  "id": "141-rc-transitions",
  "level": 3
}, {
  "value": "14.2 Epic Switching",
  "id": "142-epic-switching",
  "level": 3
}, {
  "value": "14.3 Out-of-Order Releases",
  "id": "143-out-of-order-releases",
  "level": 3
}, {
  "value": "15. Priority Classification",
  "id": "15-priority-classification",
  "level": 2
}, {
  "value": "🔴 CRITICAL (Must Update for Basic Functionality)",
  "id": "-critical-must-update-for-basic-functionality",
  "level": 3
}, {
  "value": "🟡 HIGH (Important for Complete Implementation)",
  "id": "-high-important-for-complete-implementation",
  "level": 3
}, {
  "value": "🟢 MEDIUM (Documentation and Polish)",
  "id": "-medium-documentation-and-polish",
  "level": 3
}, {
  "value": "🔵 LOW (Nice to Have)",
  "id": "-low-nice-to-have",
  "level": 3
}, {
  "value": "16. Implementation Checklist",
  "id": "16-implementation-checklist",
  "level": 2
}, {
  "value": "Phase 1: Core Implementation ✅",
  "id": "phase-1-core-implementation-",
  "level": 3
}, {
  "value": "Phase 2: Registry Migration ✅",
  "id": "phase-2-registry-migration-",
  "level": 3
}, {
  "value": "Phase 3: Documentation ✅",
  "id": "phase-3-documentation-",
  "level": 3
}, {
  "value": "Phase 4: Testing and Validation ✅",
  "id": "phase-4-testing-and-validation-",
  "level": 3
}, {
  "value": "Phase 5: Rollout ✅",
  "id": "phase-5-rollout-",
  "level": 3
}, {
  "value": "17. Risk Assessment",
  "id": "17-risk-assessment",
  "level": 2
}, {
  "value": "High Risk Areas",
  "id": "high-risk-areas",
  "level": 3
}, {
  "value": "Medium Risk Areas",
  "id": "medium-risk-areas",
  "level": 3
}, {
  "value": "18. Dependencies and Prerequisites",
  "id": "18-dependencies-and-prerequisites",
  "level": 2
}, {
  "value": "Required Dependencies",
  "id": "required-dependencies",
  "level": 3
}, {
  "value": "Prerequisites",
  "id": "prerequisites",
  "level": 3
}, {
  "value": "19. Next Steps",
  "id": "19-next-steps",
  "level": 2
}, {
  "value": "References",
  "id": "references",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    br: "br",
    code: "code",
    em: "em",
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
        id: "semver-mapping-implementation-impact-analysis",
        children: "SemVer Mapping Implementation Impact Analysis"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Status:"
      }), " Analysis", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Priority:"
      }), " HIGH", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Last Updated:"
      }), " 2026-01-17", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Related Work:"
      }), " SemVer Mapping Proposal, Versioning Policy Updates", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Version:"
      }), " v1.0.0"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "executive-summary",
      children: "Executive Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["This document identifies all components affected by implementing the SemVer mapping from internal ", (0,jsx_runtime.jsx)(_components.code, {
        children: "RC.E.S.T+B"
      }), " versioning to external ", (0,jsx_runtime.jsx)(_components.code, {
        children: "MAJOR.MINOR.PATCH+BUILD"
      }), " SemVer for GitHub releases."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Scope:"
      }), " Complete impact analysis of dual versioning implementation (internal + SemVer)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1-core-versioning-policy-documents",
      children: "1. Core Versioning Policy Documents"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "11-primary-policy-documents",
      children: "1.1 Primary Policy Documents"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Files to Update:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "docs/architecture/standards-and-adrs/dev-kit-versioning-policy.md"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Impact:"
            }), " Add SemVer mapping section"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Changes:"
            }), " Document dual versioning strategy (internal + SemVer)"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Priority:"
            }), " HIGH"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.code, {
            children: "packages/frameworks/numbering-versioning/versioning-policy.md"
          }), " ⚠️ ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "FRAMEWORK PACKAGE"
          })]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Impact:"
            }), " Framework policy update - ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Critical for framework consumers"
            })]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Changes:"
            }), " Add SemVer mapping section with hybrid approach algorithm"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Changes:"
            }), " Document registry-based mapping strategy"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Changes:"
            }), " Add examples of internal → SemVer conversion"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Priority:"
            }), " ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "HIGH"
            }), " (framework is portable package, must include new strategy)"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "packages/frameworks/workflow-mgt/KB/Architecture/Standards_and_ADRs/versioning-policy.md"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Impact:"
            }), " Framework reference update"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Changes:"
            }), " Add SemVer mapping documentation"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Priority:"
            }), " MEDIUM"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "12-supporting-documentation",
      children: "1.2 Supporting Documentation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Files to Update:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "docs/architecture/standards-and-adrs/versioning-quick-reference.md"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Impact:"
            }), " Quick reference needs SemVer mapping"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Changes:"
            }), " Add SemVer conversion examples"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Priority:"
            }), " MEDIUM"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "docs/architecture/standards-and-adrs/versioning-strategy.md"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Impact:"
            }), " Strategy document needs dual versioning"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Changes:"
            }), " Document SemVer for releases, internal for development"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Priority:"
            }), " MEDIUM"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.code, {
            children: "packages/frameworks/numbering-versioning/versioning-strategy.md"
          }), " ⚠️ ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "FRAMEWORK PACKAGE"
          })]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Impact:"
            }), " Framework strategy update - ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Critical for framework consumers"
            })]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Changes:"
            }), " Add SemVer mapping strategy section"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Changes:"
            }), " Document dual versioning approach (internal for dev, SemVer for releases)"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Changes:"
            }), " Explain registry management and migration path"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Priority:"
            }), " ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "HIGH"
            }), " (framework is portable package, must include new strategy)"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.code, {
            children: "packages/frameworks/numbering-versioning/IMPLEMENTATION_GUIDE.md"
          }), " ⚠️ ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "FRAMEWORK PACKAGE"
          })]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Impact:"
            }), " Implementation guide needs SemVer mapping section"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Changes:"
            }), " Add step-by-step SemVer mapping implementation"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Changes:"
            }), " Document registry setup and migration"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Changes:"
            }), " Update dual-versioning guidance with hybrid approach"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Priority:"
            }), " ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "HIGH"
            }), " (primary implementation guide for framework consumers)"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.code, {
            children: "packages/frameworks/numbering-versioning/README.md"
          }), " ⚠️ ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "FRAMEWORK PACKAGE"
          })]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Impact:"
            }), " Framework overview needs SemVer mapping mention"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Changes:"
            }), " Add SemVer mapping to feature list"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Changes:"
            }), " Update dual-versioning references"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Priority:"
            }), " MEDIUM"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.code, {
            children: "packages/frameworks/numbering-versioning/PACKAGE_OVERVIEW.md"
          }), " ⚠️ ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "FRAMEWORK PACKAGE"
          })]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Impact:"
            }), " Package overview may need SemVer mapping feature"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Changes:"
            }), " Add SemVer mapping to key features list"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Priority:"
            }), " LOW"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "15-️-critical-versioning-framework-package-updates",
      children: "1.5 ⚠️ CRITICAL: Versioning Framework Package Updates"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Why Critical:"
      }), " The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "packages/frameworks/numbering-versioning/"
      }), " package is a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "portable framework"
      }), " that other projects copy and use. It ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "must"
      }), " include the SemVer mapping strategy so framework consumers can implement dual versioning."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "framework-package-files",
      children: "Framework Package Files"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Priority: HIGH (Framework is portable package)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsxs)(_components.strong, {
        children: ["Files in ", (0,jsx_runtime.jsx)(_components.code, {
          children: "packages/frameworks/numbering-versioning/"
        }), ":"]
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "versioning-policy.md"
            })
          }), " ⚠️ ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "CRITICAL"
          })]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Current:"
            }), " Defines ", (0,jsx_runtime.jsx)(_components.code, {
              children: "RC.EPIC.STORY.TASK+BUILD"
            }), " schema only"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Needed:"
            }), " Add SemVer mapping section with hybrid approach"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Content:"
            }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "SemVer mapping algorithm (hybrid approach)"
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "Registry-based mapping strategy"
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "MAJOR.MINOR.PATCH+BUILD format explanation"
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["Examples: ", (0,jsx_runtime.jsx)(_components.code, {
                  children: "0.6.7.12+3"
                }), " → ", (0,jsx_runtime.jsx)(_components.code, {
                  children: "0.1.1+3"
                })]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["Registry structure (", (0,jsx_runtime.jsx)(_components.code, {
                  children: "semver-registry.yaml"
                }), ")"]
              }), "\n"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Impact:"
            }), " Framework consumers need this to implement SemVer mapping"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "versioning-strategy.md"
            })
          }), " ⚠️ ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "CRITICAL"
          })]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Current:"
            }), " Documents canonical ordering, forensic traceability"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Needed:"
            }), " Add dual versioning strategy section"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Content:"
            }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "Internal version (for development) vs SemVer (for releases)"
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "When to use which version"
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "Registry management and migration"
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "RC transitions and edge cases"
              }), "\n"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Impact:"
            }), " Framework consumers need dual versioning strategy guidance"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "IMPLEMENTATION_GUIDE.md"
            })
          }), " ⚠️ ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "CRITICAL"
          })]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Current:"
            }), " Step-by-step guide for implementing versioning"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Needed:"
            }), " Add SemVer mapping implementation section"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Content:"
            }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "Step-by-step SemVer mapping setup"
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "Registry initialization from git tags"
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "Conversion function implementation"
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "Integration with Release Workflow"
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "Testing and validation"
              }), "\n"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Impact:"
            }), " Primary implementation guide for framework consumers"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "README.md"
            })
          }), " (MEDIUM Priority)"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Current:"
            }), " Overview of versioning policies"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Needed:"
            }), " Add SemVer mapping to features list"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Content:"
            }), " Brief mention of dual versioning capability"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Impact:"
            }), " Framework consumers see SemVer mapping as feature"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "PACKAGE_OVERVIEW.md"
            })
          }), " (LOW Priority)"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Current:"
            }), " Package structure and usage"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Needed:"
            }), " Add SemVer mapping to key features"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Content:"
            }), " SemVer mapping in features list"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Impact:"
            }), " Documentation completeness"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "framework-package-dependencies",
      children: "Framework Package Dependencies"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Registry Files:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Framework should include ", (0,jsx_runtime.jsx)(_components.code, {
          children: "semver-registry.yaml"
        }), " template/example"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Framework should document registry structure"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Framework should provide migration script template (optional)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Conversion Utilities:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Framework could include ", (0,jsx_runtime.jsx)(_components.code, {
          children: "semver_converter.py"
        }), " utility (optional)"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Or framework documents conversion algorithm only (preferred - more flexible)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Why Framework Updates Are Critical:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Projects ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "copy"
        }), " the framework package, not reference it"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Framework is the ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "canonical SoT"
        }), " for versioning strategy"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "New projects adopting framework need SemVer mapping from day 1"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Existing projects upgrading framework need migration guidance"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "2-release-workflow-rw-components",
      children: "2. Release Workflow (RW) Components"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "21-rw-step-11-create-git-tag-️-critical",
      children: "2.1 RW Step 11: Create Git Tag ⚠️ CRITICAL"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Current Behavior:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Creates single tag: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "v0.6.7.12+3"
        }), " (internal version)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Required Changes:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Generate SemVer"
        }), " from internal version using registry"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Create dual tags:"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Internal: ", (0,jsx_runtime.jsx)(_components.code, {
              children: "v0.6.7.12+3"
            }), " (backward compatibility)"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["SemVer: ", (0,jsx_runtime.jsx)(_components.code, {
              children: "v0.1.1+3"
            }), " (for GitHub releases)"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Update registry"
        }), " (", (0,jsx_runtime.jsx)(_components.code, {
          children: "semver-registry.yaml"
        }), ") with new mappings"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Save registry"
        }), " to version control"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Files to Update:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: ".cursorrules"
        }), " (RW Step 11 instructions)"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "packages/frameworks/workflow-mgt/cursorrules-rw-trigger-section.md"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "RW execution guide (if exists)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "New Files Needed:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "packages/frameworks/workflow-mgt/scripts/version/semver_converter.py"
        }), " (or similar)", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Function: ", (0,jsx_runtime.jsx)(_components.code, {
              children: "convert_internal_to_semver(rc, epic, story, task, build) -> (major, minor, patch, build)"
            })]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Function: ", (0,jsx_runtime.jsx)(_components.code, {
              children: "load_semver_registry() -> dict"
            })]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Function: ", (0,jsx_runtime.jsx)(_components.code, {
              children: "update_semver_registry(rc, epic, story, minor, patch) -> dict"
            })]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Function: ", (0,jsx_runtime.jsx)(_components.code, {
              children: "save_semver_registry(registry) -> None"
            })]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "22-rw-step-12-push-to-remote",
      children: "2.2 RW Step 12: Push to Remote"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Current Behavior:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Pushes branch and tags to remote"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Required Changes:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Push both tags:"
        }), " Internal + SemVer"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Verify both tags"
        }), " pushed successfully"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Update documentation"
        }), " to reflect dual tagging"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Files to Update:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: ".cursorrules"
        }), " (RW Step 12 instructions)"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "RW execution guide (if exists)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "23-rw-documentation",
      children: "2.3 RW Documentation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Files to Update:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Any RW execution guide documentation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "RW installer documentation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "RW examples and templates"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "3-registry-management",
      children: "3. Registry Management"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "31-registry-file",
      children: "3.1 Registry File"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "New File Needed:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "semver-registry.yaml"
        }), " (project root)", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Structure:"
            }), " YAML file tracking Epic→MINOR and (Epic,Story)→PATCH mappings"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Location:"
            }), " Project root (version controlled)"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Format:"
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                className: "language-yaml",
                children: "rc_0:\n  epic_to_minor:\n    6: 1    # Epic 6 → MINOR 1 (first appearance)\n    9: 2    # Epic 9 → MINOR 2 (second appearance)\n    4: 3    # Epic 4 → MINOR 3 (third appearance)\n  story_to_patch:\n    (6, 7): 1    # Epic 6, Story 7 → PATCH 1\n    (9, 1): 2    # Epic 9, Story 1 → PATCH 2\n    (4, 6): 3    # Epic 4, Story 6 → PATCH 3\n\nrc_1:\n  epic_to_minor: {}    # Empty until RC=1 releases start\n  story_to_patch: {}\n"
              })
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Registry Management:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Initialization:"
        }), " Build from existing git tags (Phase 1)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Update:"
        }), " During RW Step 11 (after tag creation)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Validation:"
        }), " Verify monotonic increases across all releases"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Backup:"
        }), " Version controlled, can be rebuilt from git tags"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "32-registry-utilities",
      children: "3.2 Registry Utilities"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "New Script Needed:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "packages/frameworks/workflow-mgt/scripts/version/build_semver_registry.py"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Purpose:"
            }), " Build initial registry from existing git tags"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Input:"
            }), " All git tags matching ", (0,jsx_runtime.jsx)(_components.code, {
              children: "v0.*.*.*+*"
            })]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Output:"
            }), " ", (0,jsx_runtime.jsx)(_components.code, {
              children: "semver-registry.yaml"
            })]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Usage:"
            }), " One-time migration script"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "4-validation-scripts",
      children: "4. Validation Scripts"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "41-version-bump-validation",
      children: "4.1 Version Bump Validation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Files to Update:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "packages/frameworks/workflow-mgt/scripts/validation/validate_version_bump.py"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Impact:"
            }), " May need updates for SemVer awareness"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Changes:"
            }), " Verify SemVer increases (optional validation)"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Priority:"
            }), " LOW (internal version validation is primary)"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "42-semver-validation-new",
      children: "4.2 SemVer Validation (New)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "New Script Needed:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "packages/frameworks/workflow-mgt/scripts/validation/validate_semver_monotonic.py"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Purpose:"
            }), " Verify SemVer increases across all releases"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Input:"
            }), " All git tags (both internal and SemVer)"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Output:"
            }), " Validation report"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Usage:"
            }), " Periodic validation, CI/CD integration"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "5-github-releases",
      children: "5. GitHub Releases"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "51-github-release-automation",
      children: "5.1 GitHub Release Automation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Current Behavior:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Uses internal version tag: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "v0.6.7.12+3"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Required Changes:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Use SemVer tag:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "v0.1.1+3"
        }), " (primary tag for release)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Reference internal version"
        }), " in release notes"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Maintain backward compatibility"
        }), " (keep internal tags)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Files to Update:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "GitHub Actions workflows (if any)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Release automation scripts (if any)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Release documentation"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "52-release-notes",
      children: "5.2 Release Notes"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Current Behavior:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Release notes reference internal version"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Required Changes:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Primary version:"
        }), " SemVer (e.g., ", (0,jsx_runtime.jsx)(_components.code, {
          children: "v0.1.1+3"
        }), ")"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Reference internal version:"
        }), " In release notes body"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Format:"
        }), " \"Release v0.1.1+3 (internal: v0.6.7.12+3)\""]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "6-documentation-updates",
      children: "6. Documentation Updates"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "61-readme-and-project-documentation",
      children: "6.1 README and Project Documentation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Files to Update:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "README.md"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Impact:"
            }), " Version display may show both versions"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Changes:"
            }), " Document dual versioning, show both versions"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Example:"
            }), " ", (0,jsx_runtime.jsx)(_components.code, {
              children: "**Version:** v0.9.1.8+5 (SemVer: v0.1.1+3)"
            })]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Project documentation references to versions"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Framework installation guides"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Versioning cookbooks and examples"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "62-changelog",
      children: "6.2 Changelog"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Current Behavior:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Changelog uses internal version: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "## [0.6.7.12+3]"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Required Changes:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Keep internal version"
        }), " as primary (for developers)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Optionally reference SemVer"
        }), " in entry header"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Format:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "## [0.6.7.12+3] (SemVer: 0.1.1+3)"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Files to Update:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "CHANGELOG.md"
        }), " format (if changes needed)"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Changelog generation templates"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Changelog validation scripts"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "7-configuration-files",
      children: "7. Configuration Files"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "71-rw-configyaml",
      children: "7.1 rw-config.yaml"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Current Behavior:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Contains ", (0,jsx_runtime.jsx)(_components.code, {
          children: "version_file"
        }), " path"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Required Changes:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Add registry path:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "semver_registry_file: semver-registry.yaml"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Optional:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "semver_enabled: true"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Files to Update:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "packages/frameworks/workflow-mgt/config/rw-config-schema.md"
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "rw-config.yaml"
        }), " template/examples"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "RW installer script"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "8-cursor-rules",
      children: "8. Cursor Rules"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "81-rw-trigger-section",
      children: "8.1 RW Trigger Section"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Files to Update:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: ".cursorrules"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Impact:"
            }), " RW Step 11 needs SemVer generation instructions"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Changes:"
            }), " Add SemVer conversion logic to Step 11"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Priority:"
            }), " HIGH"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "packages/frameworks/workflow-mgt/cursorrules-rw-trigger-section.md"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Impact:"
            }), " Template for other projects"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Changes:"
            }), " Add SemVer conversion to Step 11 template"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Priority:"
            }), " HIGH"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "9-version-utilities-and-helpers",
      children: "9. Version Utilities and Helpers"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "91-version-parsing-utilities",
      children: "9.1 Version Parsing Utilities"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Files to Review:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Any version parsing utilities"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Version comparison functions"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Version validation helpers"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Potential Impact:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "May need SemVer-aware parsing"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Version comparison needs to handle both formats"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Validation needs to accept both formats"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "92-version-display-helpers",
      children: "9.2 Version Display Helpers"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Potential New Utilities:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "format_version_for_display()"
        }), " - Shows both versions"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "get_semver_from_internal()"
        }), " - Conversion helper"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "get_internal_from_semver()"
        }), " - Reverse lookup (if needed)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "10-integration-points",
      children: "10. Integration Points"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "101-package-version-workflow-pvw",
      children: "10.1 Package Version Workflow (PVW)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Current Behavior:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "PVW uses project version for context"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Required Changes:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "May need SemVer awareness"
        }), " for package versioning"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Reference SemVer"
        }), " in package changelog entries"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Document dual versioning"
        }), " in package releases"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Files to Review:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "packages/frameworks/workflow-mgt/workflows/package-version-workflow.yaml"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "PVW documentation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Package versioning criteria"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "102-changelog-management-workflow-cmw",
      children: "10.2 Changelog Management Workflow (CMW)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Current Behavior:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "CMW validates changelog ordering by internal version"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Required Changes:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "No changes needed"
        }), " (internal version remains canonical for ordering)"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "CMW continues to use internal version for validation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "SemVer is for external display only"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Files to Review:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "CMW scripts and documentation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Changelog validation scripts"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "11-testing-and-validation",
      children: "11. Testing and Validation"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "111-test-coverage",
      children: "11.1 Test Coverage"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "New Tests Needed:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "SemVer conversion function tests"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Registry management tests"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Dual tagging tests"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Monotonic increase validation tests"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Files to Create:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "packages/frameworks/workflow-mgt/scripts/version/tests/test_semver_converter.py"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "packages/frameworks/workflow-mgt/scripts/version/tests/test_registry_management.py"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "112-integration-tests",
      children: "11.2 Integration Tests"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "New Tests Needed:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "End-to-end RW with SemVer generation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Registry persistence across releases"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Backward compatibility tests (internal tags)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "12-migration-and-rollout",
      children: "12. Migration and Rollout"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "121-historical-release-analysis",
      children: "12.1 Historical Release Analysis"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Action Required:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Parse all existing git tags"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Build initial ", (0,jsx_runtime.jsx)(_components.code, {
          children: "semver-registry.yaml"
        }), " from historical releases"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Generate SemVer for all historical releases (for reference)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "New Script Needed:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "packages/frameworks/workflow-mgt/scripts/version/migrate_historical_releases.py"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Purpose:"
            }), " One-time migration script"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Input:"
            }), " All existing git tags"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Output:"
            }), " ", (0,jsx_runtime.jsx)(_components.code, {
              children: "semver-registry.yaml"
            }), " + migration report"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "122-gradual-rollout",
      children: "12.2 Gradual Rollout"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Phase 1: Preparation"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Build registry from existing tags"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement conversion function"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Test with sample data"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Phase 2: Dual Tagging (Backward Compatible)"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Start creating both tags (internal + SemVer)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Keep internal tags as primary"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Verify SemVer increases correctly"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Phase 3: GitHub Releases"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update GitHub Release automation to use SemVer"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update release documentation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Monitor for issues"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Phase 4: Full Adoption"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Document dual versioning strategy"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update all documentation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Make SemVer primary for releases (internal for development)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "13-documentation-references",
      children: "13. Documentation References"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "131-user-facing-documentation",
      children: "13.1 User-Facing Documentation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Files to Update:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Installation guides"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Getting started guides"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Versioning cookbooks"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Framework documentation"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Changes:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Explain dual versioning concept"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Show both versions where relevant"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Clarify which version to use when"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "132-developer-documentation",
      children: "13.2 Developer Documentation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Files to Update:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Versioning policy documents"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "RW execution guides"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Versioning examples"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Framework templates"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Changes:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Document SemVer generation process"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Explain registry management"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Provide conversion examples"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "14-edge-cases-and-special-scenarios",
      children: "14. Edge Cases and Special Scenarios"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "141-rc-transitions",
      children: "14.1 RC Transitions"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Impact:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "When RC=0 → RC=1, registry resets"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["SemVer transitions: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "0.*.*.*"
        }), " → ", (0,jsx_runtime.jsx)(_components.code, {
          children: "1.1.1+*"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Need to handle registry reset in code"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Files to Update:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "SemVer converter function"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Registry management utilities"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "142-epic-switching",
      children: "14.2 Epic Switching"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Impact:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Switching between epics uses existing registry"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Returning to previous epic reuses MINOR/PATCH"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "SemVer still increases (due to BUILD or new combinations)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Files to Review:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "SemVer converter logic"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Registry lookup/assignment"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "143-out-of-order-releases",
      children: "14.3 Out-of-Order Releases"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Impact:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Internal versions can be out of order"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "SemVer must remain monotonic"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Registry assigns based on first appearance, not internal order"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Files to Review:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "SemVer converter logic"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Validation scripts"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "15-priority-classification",
      children: "15. Priority Classification"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "-critical-must-update-for-basic-functionality",
      children: "🔴 CRITICAL (Must Update for Basic Functionality)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "RW Step 11: Create Git Tag"
        }), " - Generate SemVer tag"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "SemVer Converter Function"
        }), " - Core conversion logic"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Registry File Creation"
        }), " - ", (0,jsx_runtime.jsx)(_components.code, {
          children: "semver-registry.yaml"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Registry Management Utilities"
        }), " - Load/update/save registry"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsxs)(_components.strong, {
          children: [(0,jsx_runtime.jsx)(_components.code, {
            children: ".cursorrules"
          }), " RW Step 11"]
        }), " - Instructions for SemVer generation"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Versioning Framework Package"
        }), " - ", (0,jsx_runtime.jsx)(_components.code, {
          children: "packages/frameworks/numbering-versioning/"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "versioning-policy.md"
            }), " - Add SemVer mapping section"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "versioning-strategy.md"
            }), " - Add dual versioning strategy"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "IMPLEMENTATION_GUIDE.md"
            }), " - Add SemVer mapping implementation steps"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Critical because:"
            }), " Framework is portable package used by other projects"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "-high-important-for-complete-implementation",
      children: "🟡 HIGH (Important for Complete Implementation)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "7",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Versioning Policy Documents"
        }), " - Document dual versioning"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "RW Step 12: Push to Remote"
        }), " - Push both tags"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "GitHub Release Automation"
        }), " - Use SemVer tags"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "README.md"
        }), " - Show both versions"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Migration Script"
        }), " - Build registry from historical tags"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Configuration Files"
        }), " - ", (0,jsx_runtime.jsx)(_components.code, {
          children: "rw-config.yaml"
        }), " schema (add registry path)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "-medium-documentation-and-polish",
      children: "🟢 MEDIUM (Documentation and Polish)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "11",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Supporting Documentation"
        }), " - Versioning guides, cookbooks"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Validation Scripts"
        }), " - SemVer monotonic validation"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Test Coverage"
        }), " - SemVer converter tests"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Configuration Files"
        }), " - ", (0,jsx_runtime.jsx)(_components.code, {
          children: "rw-config.yaml"
        }), " schema"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "-low-nice-to-have",
      children: "🔵 LOW (Nice to Have)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "15",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Version Display Helpers"
        }), " - Formatting utilities"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Integration Tests"
        }), " - End-to-end testing"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Reverse Lookup"
        }), " - SemVer → Internal (if needed)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Analytics/Monitoring"
        }), " - Version tracking (if any)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "16-implementation-checklist",
      children: "16. Implementation Checklist"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "phase-1-core-implementation-",
      children: "Phase 1: Core Implementation ✅"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      className: "contains-task-list",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Create ", (0,jsx_runtime.jsx)(_components.code, {
          children: "semver-registry.yaml"
        }), " structure"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Implement ", (0,jsx_runtime.jsx)(_components.code, {
          children: "convert_internal_to_semver()"
        }), " function"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Implement registry load/update/save utilities"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Update RW Step 11 to generate SemVer tag"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Update ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".cursorrules"
        }), " RW Step 11 instructions"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "phase-2-registry-migration-",
      children: "Phase 2: Registry Migration ✅"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      className: "contains-task-list",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Build migration script for historical releases"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Generate initial ", (0,jsx_runtime.jsx)(_components.code, {
          children: "semver-registry.yaml"
        }), " from git tags"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Validate SemVer increases across all historical releases"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Create backup/restore utilities for registry"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "phase-3-documentation-",
      children: "Phase 3: Documentation ✅"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      className: "contains-task-list",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Update versioning policy documents"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Document dual versioning strategy"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Update RW execution guides"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Update README and user documentation"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "phase-4-testing-and-validation-",
      children: "Phase 4: Testing and Validation ✅"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      className: "contains-task-list",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Create test coverage for SemVer converter"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Create validation script for monotonic increases"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Integration tests for dual tagging"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Test RC transitions"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "phase-5-rollout-",
      children: "Phase 5: Rollout ✅"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      className: "contains-task-list",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Test dual tagging in development"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Update GitHub Release automation"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Monitor first few releases with SemVer"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Document lessons learned"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "17-risk-assessment",
      children: "17. Risk Assessment"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "high-risk-areas",
      children: "High Risk Areas"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Registry Corruption"
          }), " - Registry file could get out of sync"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Mitigation:"
            }), " Version controlled, can rebuild from git tags"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Mitigation:"
            }), " Validation scripts catch inconsistencies"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Tag Conflicts"
          }), " - SemVer tag might conflict with existing tag"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Mitigation:"
            }), " Check existing tags before creating SemVer tag"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Mitigation:"
            }), " Use different tag format/prefix if needed"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Version Regression"
          }), " - SemVer might not increase if logic flawed"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Mitigation:"
            }), " Validation script verifies monotonic increases"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Mitigation:"
            }), " Test thoroughly with historical releases"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "medium-risk-areas",
      children: "Medium Risk Areas"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "4",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Documentation Inconsistency"
          }), " - Docs might reference wrong version"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Mitigation:"
            }), " Clear documentation about which version to use"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Mitigation:"
            }), " Update all version references systematically"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Backward Compatibility"
          }), " - Breaking changes for existing tooling"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Mitigation:"
            }), " Keep internal tags (dual tagging)"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Mitigation:"
            }), " Gradual rollout with monitoring"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "18-dependencies-and-prerequisites",
      children: "18. Dependencies and Prerequisites"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "required-dependencies",
      children: "Required Dependencies"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Python YAML library"
        }), " - For registry file parsing"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Git tag parsing"
        }), " - For migration script"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Version parsing utilities"
        }), " - For internal version parsing"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "prerequisites",
      children: "Prerequisites"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Existing git tags"
        }), " - For registry initialization"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Version file"
        }), " - Current ", (0,jsx_runtime.jsx)(_components.code, {
          children: "src/fynd_deals/version.py"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "RW workflow"
        }), " - Currently working Release Workflow"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "19-next-steps",
      children: "19. Next Steps"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Review this impact analysis"
        }), " - Confirm completeness"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Prioritize components"
        }), " - Focus on CRITICAL items first"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Create implementation plan"
        }), " - Detailed task breakdown"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Start with core implementation"
        }), " - SemVer converter + RW Step 11"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Test with sample data"
        }), " - Validate before full rollout"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "references",
      children: "References"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "SemVer Mapping Proposal:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/architecture/standards-and-adrs/semver-mapping-proposal.md"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Versioning Policy:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/architecture/standards-and-adrs/dev-kit-versioning-policy.md"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Release Workflow:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".cursorrules"
        }), " (RW trigger section)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.em, {
        children: "This impact analysis is part of the SemVer mapping implementation. See proposal document for context."
      })
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