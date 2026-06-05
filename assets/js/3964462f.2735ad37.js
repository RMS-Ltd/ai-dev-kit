"use strict";
(self["webpackChunkportal"] = self["webpackChunkportal"] || []).push([["16100"], {
71232(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_architecture_standards_and_adrs_dual_versioning_package_managers_md_396_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-architecture-standards-and-adrs-dual-versioning-package-managers-md-396.json
var site_docs_architecture_standards_and_adrs_dual_versioning_package_managers_md_396_namespaceObject = JSON.parse('{"id":"architecture/standards-and-adrs/dual-versioning-package-managers","title":"Dual-Versioning: RC.EPIC.STORY.TASK+BUILD + Package Manager SemVer","description":"Status: Active","source":"@site/../docs/architecture/standards-and-adrs/dual-versioning-package-managers.md","sourceDirName":"architecture/standards-and-adrs","slug":"/architecture/standards-and-adrs/dual-versioning-package-managers","permalink":"/ai-dev-kit/docs/architecture/standards-and-adrs/dual-versioning-package-managers","draft":false,"unlisted":false,"editUrl":"https://github.com/RMS-Ltd/ai-dev-kit/tree/main/docs/../docs/architecture/standards-and-adrs/dual-versioning-package-managers.md","tags":[],"version":"current","frontMatter":{"lifecycle":"evergreen","ttl_days":null,"created_at":"2025-12-07T16:00:00.000Z","expires_at":null,"housekeeping_policy":"keep"},"sidebar":"docsSidebar","previous":{"title":"Documentation Update Triggers","permalink":"/ai-dev-kit/docs/architecture/standards-and-adrs/documentation-update-triggers"},"next":{"title":"ECC ↔ AI Dev Kit harness layer integration specification","permalink":"/ai-dev-kit/docs/architecture/standards-and-adrs/ecc-adk-harness-layer-integration-specification"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ../docs/architecture/standards-and-adrs/dual-versioning-package-managers.md


const frontMatter = {
	lifecycle: 'evergreen',
	ttl_days: null,
	created_at: new Date('2025-12-07T16:00:00.000Z'),
	expires_at: null,
	housekeeping_policy: 'keep'
};
const contentTitle = 'Dual-Versioning: RC.EPIC.STORY.TASK+BUILD + Package Manager SemVer';

const assets = {

};



const toc = [{
  "value": "Executive Summary",
  "id": "executive-summary",
  "level": 2
}, {
  "value": "Problem Statement",
  "id": "problem-statement",
  "level": 2
}, {
  "value": "The Challenge",
  "id": "the-challenge",
  "level": 3
}, {
  "value": "Example Scenario",
  "id": "example-scenario",
  "level": 3
}, {
  "value": "Solution: Dual-Versioning Strategy",
  "id": "solution-dual-versioning-strategy",
  "level": 2
}, {
  "value": "Core Principle",
  "id": "core-principle",
  "level": 3
}, {
  "value": "Choosing a SemVer Mapping Mode",
  "id": "choosing-a-semver-mapping-mode",
  "level": 2
}, {
  "value": "Mapping Strategies",
  "id": "mapping-strategies",
  "level": 2
}, {
  "value": "Strategy 1: Direct Mapping (Recommended for New Projects)",
  "id": "strategy-1-direct-mapping-recommended-for-new-projects",
  "level": 3
}, {
  "value": "Strategy 2: Compact Mapping (Recommended for Established Projects)",
  "id": "strategy-2-compact-mapping-recommended-for-established-projects",
  "level": 3
}, {
  "value": "Strategy 3: Independent SemVer (For Public Releases)",
  "id": "strategy-3-independent-semver-for-public-releases",
  "level": 3
}, {
  "value": "Strategy 4: BUILD-Preserving Mapping (Recommended)",
  "id": "strategy-4-build-preserving-mapping-recommended",
  "level": 3
}, {
  "value": "Strategy 5: Hybrid Approach (Recommended for Most Projects)",
  "id": "strategy-5-hybrid-approach-recommended-for-most-projects",
  "level": 3
}, {
  "value": "Implementation Patterns",
  "id": "implementation-patterns",
  "level": 2
}, {
  "value": "Pattern 1: Single Source of Truth (Python)",
  "id": "pattern-1-single-source-of-truth-python",
  "level": 3
}, {
  "value": "Pattern 2: Sync Script (Any Language)",
  "id": "pattern-2-sync-script-any-language",
  "level": 3
}, {
  "value": "Pattern 3: Build-Time Generation (CI/CD)",
  "id": "pattern-3-build-time-generation-cicd",
  "level": 3
}, {
  "value": "Recommended Approach",
  "id": "recommended-approach",
  "level": 2
}, {
  "value": "For New Projects",
  "id": "for-new-projects",
  "level": 3
}, {
  "value": "For Existing Projects",
  "id": "for-existing-projects",
  "level": 3
}, {
  "value": "Documentation Requirements",
  "id": "documentation-requirements",
  "level": 2
}, {
  "value": "What Projects Should Document",
  "id": "what-projects-should-document",
  "level": 3
}, {
  "value": "Example: Flutter/Dart Project (pubspec.yaml)",
  "id": "example-flutterdart-project-pubspecyaml",
  "level": 2
}, {
  "value": "Setup",
  "id": "setup",
  "level": 3
}, {
  "value": "Validation",
  "id": "validation",
  "level": 2
}, {
  "value": "Validation Checklist",
  "id": "validation-checklist",
  "level": 3
}, {
  "value": "Validation Script",
  "id": "validation-script",
  "level": 3
}, {
  "value": "Common Issues and Solutions",
  "id": "common-issues-and-solutions",
  "level": 2
}, {
  "value": "Issue 1: Versions Get Out of Sync",
  "id": "issue-1-versions-get-out-of-sync",
  "level": 3
}, {
  "value": "Issue 2: Large PATCH Numbers",
  "id": "issue-2-large-patch-numbers",
  "level": 3
}, {
  "value": "Issue 3: Package Manager Validation Fails",
  "id": "issue-3-package-manager-validation-fails",
  "level": 3
}, {
  "value": "Issue 4: BUILD Number Not Preserved",
  "id": "issue-4-build-number-not-preserved",
  "level": 3
}, {
  "value": "Best Practices",
  "id": "best-practices",
  "level": 2
}, {
  "value": "Integration with Release Workflow",
  "id": "integration-with-release-workflow",
  "level": 2
}, {
  "value": "Release Workflow Integration",
  "id": "release-workflow-integration",
  "level": 3
}, {
  "value": "References",
  "id": "references",
  "level": 2
}, {
  "value": "Related Work",
  "id": "related-work",
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
    pre: "pre",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "dual-versioning-rcepicstorytaskbuild--package-manager-semver",
        children: "Dual-Versioning: RC.EPIC.STORY.TASK+BUILD + Package Manager SemVer"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Status:"
      }), " Active", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Version:"
      }), " 1.0.0", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Last Updated:"
      }), " 2025-12-07", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Epic:"
      }), " Epic 3 - Numbering & Versioning Framework", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Story:"
      }), " Story 2 - Versioning Cookbook and Examples", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Related:"
      }), " Implementation Guide, Package Manager Integration"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Based on Framework:"
      }), " This document is a dev-kit specialisation providing guidance on dual-versioning patterns. For the canonical versioning schema and SemVer mapping modes, see:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "packages/frameworks/numbering-versioning/versioning-policy.md"
        }), " (primary SoT)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "packages/frameworks/numbering-versioning/versioning-strategy.md"
        }), " (comprehensive strategy)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "executive-summary",
      children: "Executive Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Projects using the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "RC.EPIC.STORY.TASK+BUILD"
      }), " versioning schema may also need to maintain ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Semantic Versioning (SemVer)"
      }), " for package managers (npm, pub.dev, PyPI, etc.) that require ", (0,jsx_runtime.jsx)(_components.code, {
        children: "MAJOR.MINOR.PATCH"
      }), " format. This document provides guidance on managing both versioning schemes simultaneously."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Key Points:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Internal Development:"
        }), " Use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "RC.EPIC.STORY.TASK+BUILD"
        }), " for forensic traceability"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Package Managers:"
        }), " Use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "MAJOR.MINOR.PATCH"
        }), " for compatibility"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Synchronization:"
        }), " Maintain both versions and keep them aligned"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Mapping Strategy:"
        }), " Define clear rules for converting between schemas"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "problem-statement",
      children: "Problem Statement"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "the-challenge",
      children: "The Challenge"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Many package managers and registries require ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Semantic Versioning (SemVer)"
      }), " format:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "npm"
        }), " (", (0,jsx_runtime.jsx)(_components.code, {
          children: "package.json"
        }), "): ", (0,jsx_runtime.jsx)(_components.code, {
          children: "\"version\": \"1.2.3\""
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "pub.dev"
        }), " (", (0,jsx_runtime.jsx)(_components.code, {
          children: "pubspec.yaml"
        }), "): ", (0,jsx_runtime.jsx)(_components.code, {
          children: "version: 1.2.3"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "PyPI"
        }), " (", (0,jsx_runtime.jsx)(_components.code, {
          children: "setup.py"
        }), "/", (0,jsx_runtime.jsx)(_components.code, {
          children: "pyproject.toml"
        }), "): ", (0,jsx_runtime.jsx)(_components.code, {
          children: "version = \"1.2.3\""
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Maven"
        }), " (", (0,jsx_runtime.jsx)(_components.code, {
          children: "pom.xml"
        }), "): ", (0,jsx_runtime.jsx)(_components.code, {
          children: "<version>1.2.3</version>"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["However, projects using ai-dev-kit versioning framework use ", (0,jsx_runtime.jsx)(_components.code, {
        children: "RC.EPIC.STORY.TASK+BUILD"
      }), " schema for internal development, which is ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "incompatible"
      }), " with SemVer requirements."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-scenario",
      children: "Example Scenario"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Project:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "been-there"
      }), " (Flutter/Dart project)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Internal Version File:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "# lib/version.dart or version.py\nVERSION_RC = 0\nVERSION_EPIC = 1\nVERSION_STORY = 1\nVERSION_TASK = 1\nVERSION_BUILD = 1\nVERSION_STRING = \"0.1.1.1+1\"  # RC.EPIC.STORY.TASK+BUILD\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Package Manager File:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "# pubspec.yaml\nversion: 0.1.0  # MAJOR.MINOR.PATCH (required by pub.dev)\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem:"
      }), " These two versions must be kept in sync, but they use different schemas."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "solution-dual-versioning-strategy",
      children: "Solution: Dual-Versioning Strategy"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "core-principle",
      children: "Core Principle"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Maintain two version representations:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Internal Version:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "RC.EPIC.STORY.TASK+BUILD"
        }), " (source of truth for development)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Package Manager Version:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "MAJOR.MINOR.PATCH"
        }), " (derived from internal version)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Synchronization:"
      }), " Package manager version is ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "derived from"
      }), " internal version using a mapping strategy."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "choosing-a-semver-mapping-mode",
      children: "Choosing a SemVer Mapping Mode"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The core framework defines two ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "conceptual mapping modes"
      }), " from internal version to SemVer:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Mode A – Registry-based epic/story mapping (default for dev-kit/frameworks):"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "MAJOR = RC"
            })
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "MINOR"
            }), " / ", (0,jsx_runtime.jsx)(_components.code, {
              children: "PATCH"
            }), " assigned via a registry that remaps epics and stories into a monotonic SemVer space."]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Best for long-lived frameworks and products with many parallel epics/stories."
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "1:1 intent:"
            }), " The mapping is designed to be one-to-one: one internal version yields exactly one SemVer, and a given SemVer (from this project’s registry) should identify a unique internal coordinate (RC, EPIC, STORY, BUILD; TASK is not encoded). Git tags must align so that the SemVer tag and the internal tag for a release point to the same commit."]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Mode B – Simple global PATCH counter (recommended for small/simple projects):"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "MAJOR = RC"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "MINOR = EPIC"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "PATCH"
            }), " = ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "global build counter"
            }), " (monotonic per RC)."]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Very simple mental model: “higher PATCH = strictly newer”, independent of epic/story."
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Epic/story identity is recovered via the internal version and/or optional metadata (", (0,jsx_runtime.jsx)(_components.code, {
              children: "+rc.<RC>.e<EPIC>.s<STORY>.t<TASK>.b<BUILD>"
            }), ")."]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Guidance:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["If you are building a ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "framework or complex product"
        }), " and care about distinguishing epics/stories at the SemVer level, use ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Mode A"
        }), " (registry-based)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["If you are building a ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "small app or library"
        }), " and mainly care about a simple, monotonic release line, consider ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Mode B"
        }), " (global PATCH) for your project copy of the framework."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The concrete mapping formulas below can be seen as ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "implementations"
      }), " that sit under one of these conceptual modes."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "mapping-strategies",
      children: "Mapping Strategies"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "strategy-1-direct-mapping-recommended-for-new-projects",
      children: "Strategy 1: Direct Mapping (Recommended for New Projects)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Mapping Rules:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "MAJOR"
        }), " = ", (0,jsx_runtime.jsx)(_components.code, {
          children: "RC"
        }), " (Release Candidate)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "MINOR"
        }), " = ", (0,jsx_runtime.jsx)(_components.code, {
          children: "EPIC"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "PATCH"
        }), " = ", (0,jsx_runtime.jsx)(_components.code, {
          children: "STORY * 100 + TASK"
        }), " (allows up to 99 tasks per story)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Internal: 0.1.1.1+1\nSemVer:   0.1.101  (0 = RC, 1 = Epic, 101 = Story 1 * 100 + Task 1)\n\nInternal: 0.1.1.2+1\nSemVer:   0.1.102  (0 = RC, 1 = Epic, 102 = Story 1 * 100 + Task 2)\n\nInternal: 0.1.2.1+1\nSemVer:   0.1.201  (0 = RC, 1 = Epic, 201 = Story 2 * 100 + Task 1)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pros:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Simple and deterministic"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Preserves Epic/Story/Task information in SemVer"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Easy to implement"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Cons:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "❌ PATCH numbers can get large (e.g., Story 5, Task 50 = 550)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "❌ Doesn't preserve BUILD number"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Use When:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "New projects starting fresh"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Want simple, deterministic mapping"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Don't need BUILD number in SemVer"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "strategy-2-compact-mapping-recommended-for-established-projects",
      children: "Strategy 2: Compact Mapping (Recommended for Established Projects)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Mapping Rules:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "MAJOR"
        }), " = ", (0,jsx_runtime.jsx)(_components.code, {
          children: "RC"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "MINOR"
        }), " = ", (0,jsx_runtime.jsx)(_components.code, {
          children: "EPIC * 10 + STORY"
        }), " (allows up to 9 stories per epic)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "PATCH"
        }), " = ", (0,jsx_runtime.jsx)(_components.code, {
          children: "TASK * 10 + BUILD"
        }), " (allows up to 9 builds per task, or use BUILD % 10)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Internal: 0.1.1.1+1\nSemVer:   0.11.11  (0 = RC, 11 = Epic 1 * 10 + Story 1, 11 = Task 1 * 10 + Build 1)\n\nInternal: 0.1.1.1+2\nSemVer:   0.11.12  (0 = RC, 11 = Epic 1 * 10 + Story 1, 12 = Task 1 * 10 + Build 2)\n\nInternal: 0.1.2.1+1\nSemVer:   0.12.11  (0 = RC, 12 = Epic 1 * 10 + Story 2, 11 = Task 1 * 10 + Build 1)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pros:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ More compact PATCH numbers"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Preserves BUILD number (if using BUILD % 10)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Still deterministic"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Cons:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "❌ Limited to 9 stories per epic (or need different formula)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "❌ Limited to 9 builds per task (if using BUILD directly)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "❌ More complex mapping logic"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Use When:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Established projects with many epics/stories"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Want to preserve BUILD number"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Need more compact version numbers"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "strategy-3-independent-semver-for-public-releases",
      children: "Strategy 3: Independent SemVer (For Public Releases)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Mapping Rules:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "MAJOR"
        }), " = Increment for breaking changes"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "MINOR"
        }), " = Increment for new features"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "PATCH"
        }), " = Increment for bug fixes"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Independent"
        }), " of ", (0,jsx_runtime.jsx)(_components.code, {
          children: "RC.EPIC.STORY.TASK+BUILD"
        }), " schema"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Synchronization:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Internal version tracks development work"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "SemVer tracks public releases"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Map internal versions to SemVer at release time"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Development:\n- Internal: 0.1.1.1+1, 0.1.1.1+2, 0.1.1.2+1, 0.1.1.3+1\n- SemVer:   0.1.0 (unchanged during development)\n\nRelease:\n- Internal: 0.1.1.3+1 (final development version)\n- SemVer:   0.1.0 → 0.2.0 (bumped for release, independent of internal version)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pros:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ SemVer follows standard semantic versioning rules"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Clear meaning for consumers"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Independent of internal work structure"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Cons:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "❌ Requires manual mapping decisions"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "❌ No automatic synchronization"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "❌ Loses traceability to internal work items"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Use When:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Publishing to public package registries"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Need standard SemVer for consumers"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Internal versioning is for development only"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "strategy-4-build-preserving-mapping-recommended",
      children: "Strategy 4: BUILD-Preserving Mapping (Recommended)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Mapping Rules:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "MAJOR"
        }), " = ", (0,jsx_runtime.jsx)(_components.code, {
          children: "RC"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "MINOR"
        }), " = ", (0,jsx_runtime.jsx)(_components.code, {
          children: "EPIC * 100 + STORY"
        }), " (allows up to 99 stories per epic, unambiguous)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "PATCH"
        }), " = ", (0,jsx_runtime.jsx)(_components.code, {
          children: "TASK * 100 + BUILD"
        }), " (allows up to 99 builds per task, preserves BUILD)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Internal: 0.1.2.3+4\nSemVer:   0.102.304  (0 = RC, 102 = Epic 1 * 100 + Story 2, 304 = Task 3 * 100 + Build 4)\n\nInternal: 0.5.12.25+7\nSemVer:   0.512.2507  (0 = RC, 512 = Epic 5 * 100 + Story 12, 2507 = Task 25 * 100 + Build 7)\n\nInternal: 0.12.3.5+7\nSemVer:   0.1203.507  (0 = RC, 1203 = Epic 12 * 100 + Story 3, 507 = Task 5 * 100 + Build 7)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pros:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Preserves BUILD number in SemVer (unique advantage)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Unambiguous mapping (mathematical, not string concatenation)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Supports large EPIC/STORY/TASK numbers (up to 99 each)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Fully reversible (can extract EPIC/STORY/TASK/BUILD from SemVer)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Deterministic and easy to implement"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Cons:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "❌ MINOR and PATCH numbers can get large (e.g., Epic 12, Story 3 = MINOR 1203)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "❌ Less human-readable than standard SemVer"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "❌ Large numbers may look unusual to package manager consumers"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Use When:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Want to preserve BUILD number in SemVer"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Need unambiguous, reversible mapping"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Don't mind larger version numbers"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Internal traceability is more important than consumer readability"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Implementation Note:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Use mathematical formula: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "EPIC * 100 + STORY"
        }), " (not string concatenation)"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "String concatenation would create ambiguity (e.g., EPIC=12, STORY=3 vs EPIC=1, STORY=23 both = \"123\")"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Mathematical formula ensures unique mapping for all EPIC/STORY combinations"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "strategy-5-hybrid-approach-recommended-for-most-projects",
      children: "Strategy 5: Hybrid Approach (Recommended for Most Projects)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Mapping Rules:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Use ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Strategy 1, 2, or 4"
        }), " for development/pre-release versions"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Use ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Strategy 3"
        }), " for public releases (when ", (0,jsx_runtime.jsx)(_components.code, {
          children: "RC >= 1"
        }), ")"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Development (RC = 0):\n- Internal: 0.1.1.1+1\n- SemVer:   0.1.101 (Strategy 1 mapping)\n  OR\n- SemVer:   0.101.101 (Strategy 4 mapping - preserves BUILD)\n\nRelease Candidate (RC = 1):\n- Internal: 1.1.1.1+1\n- SemVer:   1.0.0 (Standard SemVer, independent mapping)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pros:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Best of both worlds"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Automatic sync during development"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Standard SemVer for releases"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Preserves traceability during development"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Can choose BUILD-preserving strategy during development"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Cons:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "❌ More complex to implement"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "❌ Requires decision point (when to switch)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Use When:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Most projects (recommended default)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Want automatic sync during development"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Need standard SemVer for releases"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "implementation-patterns",
      children: "Implementation Patterns"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pattern-1-single-source-of-truth-python",
      children: "Pattern 1: Single Source of Truth (Python)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Internal version is source of truth:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "# lib/version.py (or src/project/version.py)\nVERSION_RC = 0\nVERSION_EPIC = 1\nVERSION_STORY = 1\nVERSION_TASK = 1\nVERSION_BUILD = 1\n\n# Internal version (source of truth)\nVERSION_STRING = f\"{VERSION_RC}.{VERSION_EPIC}.{VERSION_STORY}.{VERSION_TASK}+{VERSION_BUILD}\"\n\n# Derived SemVer (Strategy 1: Direct Mapping)\ndef get_semver_strategy1():\n    \"\"\"Convert internal version to SemVer format (Strategy 1).\"\"\"\n    major = VERSION_RC\n    minor = VERSION_EPIC\n    patch = (VERSION_STORY * 100) + VERSION_TASK\n    return f\"{major}.{minor}.{patch}\"\n\n# Derived SemVer (Strategy 4: BUILD-Preserving Mapping - User Recommended)\ndef get_semver_strategy4():\n    \"\"\"Convert internal version to SemVer format (Strategy 4 - preserves BUILD).\n    \n    MINOR = EPIC * 100 + STORY (mathematical, not string concatenation)\n    PATCH = TASK * 100 + BUILD\n    \"\"\"\n    major = VERSION_RC\n    minor = (VERSION_EPIC * 100) + VERSION_STORY  # Mathematical formula ensures unambiguous mapping\n    patch = (VERSION_TASK * 100) + VERSION_BUILD\n    return f\"{major}.{minor}.{patch}\"\n\n# Choose your strategy:\nSEMVER_VERSION = get_semver_strategy4()  # Recommended: preserves BUILD number\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Usage in package files:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "# setup.py or pyproject.toml\nfrom lib.version import SEMVER_VERSION\n\nsetup(\n    name=\"myproject\",\n    version=SEMVER_VERSION,  # \"0.1.101\"\n    ...\n)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pattern-2-sync-script-any-language",
      children: "Pattern 2: Sync Script (Any Language)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Create a sync script that updates package manager files:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "#!/usr/bin/env python3\n\"\"\"\nSync version from internal version file to package manager files.\n\nUsage:\n    python scripts/sync-version.py\n\"\"\"\n\nimport re\nfrom pathlib import Path\n\ndef read_internal_version():\n    \"\"\"Read internal version from version file.\"\"\"\n    version_file = Path(\"lib/version.py\")\n    content = version_file.read_text()\n    \n    # Extract version components\n    rc = int(re.search(r'VERSION_RC = (\\d+)', content).group(1))\n    epic = int(re.search(r'VERSION_EPIC = (\\d+)', content).group(1))\n    story = int(re.search(r'VERSION_STORY = (\\d+)', content).group(1))\n    task = int(re.search(r'VERSION_TASK = (\\d+)', content).group(1))\n    build = int(re.search(r'VERSION_BUILD = (\\d+)', content).group(1))\n    \n    return rc, epic, story, task, build\n\ndef convert_to_semver_strategy4(rc, epic, story, task, build):\n    \"\"\"Convert internal version to SemVer (Strategy 4: BUILD-Preserving Mapping).\n    \n    MINOR = EPIC * 100 + STORY (mathematical, not string concatenation)\n    PATCH = TASK * 100 + BUILD\n    \"\"\"\n    major = rc\n    minor = (epic * 100) + story  # Mathematical formula ensures unambiguous mapping\n    patch = (task * 100) + build\n    return f\"{major}.{minor}.{patch}\"\n\ndef update_pubspec(semver):\n    \"\"\"Update pubspec.yaml with SemVer.\"\"\"\n    pubspec = Path(\"pubspec.yaml\")\n    content = pubspec.read_text()\n    \n    # Replace version line\n    content = re.sub(\n        r'^version:\\s*[\\d.]+',\n        f'version: {semver}',\n        content,\n        flags=re.MULTILINE\n    )\n    \n    pubspec.write_text(content)\n    print(f\"✅ Updated pubspec.yaml: version: {semver}\")\n\ndef update_package_json(semver):\n    \"\"\"Update package.json with SemVer.\"\"\"\n    package_json = Path(\"package.json\")\n    content = package_json.read_text()\n    \n    # Replace version in JSON\n    content = re.sub(\n        r'\"version\":\\s*\"[\\d.]+\"',\n        f'\"version\": \"{semver}\"',\n        content\n    )\n    \n    package_json.write_text(content)\n    print(f\"✅ Updated package.json: version: {semver}\")\n\ndef main():\n    \"\"\"Main sync function.\"\"\"\n    rc, epic, story, task, build = read_internal_version()\n    semver = convert_to_semver_strategy4(rc, epic, story, task, build)\n    \n    print(f\"Internal version: {rc}.{epic}.{story}.{task}+{build}\")\n    print(f\"SemVer version: {semver}\")\n    \n    # Update package manager files\n    if Path(\"pubspec.yaml\").exists():\n        update_pubspec(semver)\n    if Path(\"package.json\").exists():\n        update_package_json(semver)\n    \n    print(\"✅ Version sync complete!\")\n\nif __name__ == \"__main__\":\n    main()\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Integration with Release Workflow:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# In Release Workflow (RW) Step 2: After bumping internal version\npython scripts/sync-version.py\ngit add pubspec.yaml package.json\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pattern-3-build-time-generation-cicd",
      children: "Pattern 3: Build-Time Generation (CI/CD)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Generate SemVer at build time:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "# .github/workflows/release.yml\n- name: Generate SemVer\n  run: |\n    python scripts/generate-semver.py > .semver\n    echo \"SEMVER=$(cat .semver)\" >> $GITHUB_ENV\n\n- name: Update pubspec.yaml\n  run: |\n    sed -i \"s/version: .*/version: $SEMVER/\" pubspec.yaml\n\n- name: Build and Publish\n  run: |\n    flutter pub publish\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "recommended-approach",
      children: "Recommended Approach"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "for-new-projects",
      children: "For New Projects"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Use Pattern 1 (Single Source of Truth) + Strategy 1 (Direct Mapping):"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Internal version file"
        }), " is the source of truth"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Derive SemVer"
        }), " programmatically from internal version"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Update package manager files"
        }), " automatically in Release Workflow"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Benefits:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Simple and maintainable"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Automatic synchronization"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Single source of truth"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "No manual sync required"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "for-existing-projects",
      children: "For Existing Projects"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Use Pattern 2 (Sync Script) + Strategy 4 (Hybrid):"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Keep internal version"
        }), " for development"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Use sync script"
        }), " to update package manager files"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Switch to independent SemVer"
        }), " for public releases"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Benefits:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Works with existing projects"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Flexible mapping strategy"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Can adapt to project needs"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "documentation-requirements",
      children: "Documentation Requirements"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "what-projects-should-document",
      children: "What Projects Should Document"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Mapping Strategy:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Which strategy you're using (1, 2, 3, or 4)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "How internal version maps to SemVer"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Examples of mappings"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Synchronization Process:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "When versions are synced"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "How sync is automated (script, CI/CD, etc.)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Manual steps if any"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Package Manager Files:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Which files need version updates"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "How versions are updated"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Validation requirements"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Release Process:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "How versions are handled at release time"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "When to switch strategies (if using hybrid)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Release versioning decisions"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "example-flutterdart-project-pubspecyaml",
      children: "Example: Flutter/Dart Project (pubspec.yaml)"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "setup",
      children: "Setup"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "1. Internal Version File:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-dart",
        children: "// lib/version.dart\nclass Version {\n  static const int rc = 0;\n  static const int epic = 1;\n  static const int story = 1;\n  static const int task = 1;\n  static const int build = 1;\n  \n  // Internal version (source of truth)\n  static String get internal => '$rc.$epic.$story.$task+$build';\n  \n  // SemVer for pubspec.yaml (Strategy 4: BUILD-Preserving Mapping)\n  // MINOR = EPIC * 100 + STORY (mathematical, not string concatenation)\n  // PATCH = TASK * 100 + BUILD\n  static String get semver {\n    final minor = (epic * 100) + story;  // Mathematical formula ensures unambiguous mapping\n    final patch = (task * 100) + build;\n    return '$rc.$minor.$patch';\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "2. Sync Script:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-dart",
        children: "// scripts/sync_version.dart\nimport 'dart:io';\nimport 'package:yaml/yaml.dart';\n\nvoid main() {\n  // Read internal version\n  final versionFile = File('lib/version.dart');\n  final content = versionFile.readAsStringSync();\n  \n  // Extract version components (simplified - use proper parsing)\n  final rc = 0; // Extract from content\n  final epic = 1; // Extract from content\n  final story = 1; // Extract from content\n  final task = 1; // Extract from content\n  \n  // Convert to SemVer (Strategy 1)\n  final semver = '$rc.$epic.${(story * 100) + task}';\n  \n  // Update pubspec.yaml\n  final pubspec = File('pubspec.yaml');\n  final pubspecContent = pubspec.readAsStringSync();\n  final updated = pubspecContent.replaceAll(\n    RegExp(r'^version:\\s*[\\d.]+', multiLine: true),\n    'version: $semver',\n  );\n  pubspec.writeAsStringSync(updated);\n  \n  print('✅ Updated pubspec.yaml: version: $semver');\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "3. Integration with Release Workflow:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# In Release Workflow Step 2: After bumping internal version\ndart run scripts/sync_version.dart\ngit add pubspec.yaml\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "validation",
      children: "Validation"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "validation-checklist",
      children: "Validation Checklist"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      className: "contains-task-list",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Internal version file exists and is maintained"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "SemVer derivation logic is documented"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Sync script/process is automated"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Package manager files are updated automatically"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Versions are validated before commit"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Release process handles version sync correctly"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "validation-script",
      children: "Validation Script"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "#!/usr/bin/env python3\n\"\"\"\nValidate that internal version and SemVer are in sync.\n\nUsage:\n    python scripts/validate-version-sync.py\n\"\"\"\n\ndef validate_version_sync():\n    \"\"\"Validate internal version and SemVer are synchronized.\"\"\"\n    # Read internal version\n    internal_version = read_internal_version()\n    \n    # Calculate expected SemVer\n    expected_semver = convert_to_semver(*internal_version)\n    \n    # Read actual SemVer from package manager files\n    actual_semver = read_package_manager_version()\n    \n    # Validate\n    if expected_semver != actual_semver:\n        print(f\"❌ Version mismatch!\")\n        print(f\"   Expected SemVer: {expected_semver}\")\n        print(f\"   Actual SemVer: {actual_semver}\")\n        return False\n    \n    print(f\"✅ Versions are in sync: {expected_semver}\")\n    return True\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "common-issues-and-solutions",
      children: "Common Issues and Solutions"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "issue-1-versions-get-out-of-sync",
      children: "Issue 1: Versions Get Out of Sync"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem:"
      }), " Internal version updated but package manager file not updated."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Automate sync in Release Workflow"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Add validation script to pre-commit hooks"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Add CI/CD validation"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "issue-2-large-patch-numbers",
      children: "Issue 2: Large PATCH Numbers"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem:"
      }), " Using Strategy 1, PATCH numbers get very large (e.g., 550 for Story 5, Task 50)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Switch to Strategy 2 (Compact Mapping)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Or use Strategy 4 (Hybrid) for releases"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Or accept large numbers (they're still valid SemVer)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "issue-3-package-manager-validation-fails",
      children: "Issue 3: Package Manager Validation Fails"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem:"
      }), " Package manager rejects version format."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Ensure SemVer follows ", (0,jsx_runtime.jsx)(_components.code, {
          children: "MAJOR.MINOR.PATCH"
        }), " format exactly"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Validate SemVer before updating package manager files"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Check package manager-specific requirements"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "issue-4-build-number-not-preserved",
      children: "Issue 4: BUILD Number Not Preserved"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem:"
      }), " BUILD number is lost in SemVer conversion."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use Strategy 2 (includes BUILD in PATCH)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Or accept that BUILD is internal-only"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Or use pre-release identifiers: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "0.1.101-build.1"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "best-practices",
      children: "Best Practices"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Single Source of Truth:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Internal version file is always the source of truth"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "SemVer is derived, never manually edited"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Automate Synchronization:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Use scripts or CI/CD to sync versions"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Never manually edit package manager versions"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Validate Before Commit:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Run validation script in pre-commit hooks"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Fail fast if versions are out of sync"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Document Your Strategy:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Document which mapping strategy you use"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Document sync process"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Include examples"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Test Your Mapping:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Test with various internal versions"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Ensure SemVer is always valid"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Test edge cases (large numbers, etc.)"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "integration-with-release-workflow",
      children: "Integration with Release Workflow"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "release-workflow-integration",
      children: "Release Workflow Integration"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 2: Bump Version"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Update internal version file (", (0,jsx_runtime.jsx)(_components.code, {
          children: "version.py"
        }), " or ", (0,jsx_runtime.jsx)(_components.code, {
          children: "version.dart"
        }), ")"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Run sync script to update package manager files"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Validate versions are in sync"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 8: Commit Changes"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Include both internal version file and package manager files"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Commit message should reference both versions"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example Commit:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "git commit -m \"Release v0.1.1.1+1 (SemVer: 0.1.101): Task description\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "references",
      children: "References"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "https://semver.org/",
          children: "Semantic Versioning Specification"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/packages/frameworks/numbering%20%26%20versioning/IMPLEMENTATION_GUIDE.md",
          children: "Implementation Guide (source)"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/packages/frameworks/numbering%20%26%20versioning/versioning-policy.md",
          children: "Versioning Policy (source)"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/architecture/standards-and-adrs/dev-kit-versioning-policy",
          children: "Dev Kit Versioning Policy"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "related-work",
      children: "Related Work"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Epic 3: Numbering & Versioning Framework"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Epic 6: Framework Management (package manager support)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Last Updated:"
      }), " 2025-12-07", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Status:"
      }), " Active", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Next Review:"
      }), " When package manager integration is implemented (Epic 6)"]
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