"use strict";
(self["webpackChunkportal"] = self["webpackChunkportal"] || []).push([["49410"], {
33982(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_architecture_standards_and_adrs_package_management_design_md_6dc_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-architecture-standards-and-adrs-package-management-design-md-6dc.json
var site_docs_architecture_standards_and_adrs_package_management_design_md_6dc_namespaceObject = JSON.parse('{"id":"architecture/standards-and-adrs/package-management-design","title":"Package Management Design Specification","description":"Purpose: Detailed design specification for AI Dev Kit framework package management system","source":"@site/../docs/architecture/standards-and-adrs/package-management-design.md","sourceDirName":"architecture/standards-and-adrs","slug":"/architecture/standards-and-adrs/package-management-design","permalink":"/ai-dev-kit/docs/architecture/standards-and-adrs/package-management-design","draft":false,"unlisted":false,"editUrl":"https://github.com/RMS-Ltd/ai-dev-kit/tree/main/docs/../docs/architecture/standards-and-adrs/package-management-design.md","tags":[],"version":"current","frontMatter":{},"sidebar":"docsSidebar","previous":{"title":"Package Maintenance and Release","permalink":"/ai-dev-kit/docs/architecture/standards-and-adrs/package-maintenance-and-release"},"next":{"title":"Package Versioning Criteria (Guidance)","permalink":"/ai-dev-kit/docs/architecture/standards-and-adrs/package-versioning-criteria"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ../docs/architecture/standards-and-adrs/package-management-design.md


const frontMatter = {};
const contentTitle = 'Package Management Design Specification';

const assets = {

};



const toc = [{
  "value": "1. Overview",
  "id": "1-overview",
  "level": 2
}, {
  "value": "2. Package Structure",
  "id": "2-package-structure",
  "level": 2
}, {
  "value": "2.1 Package File Naming",
  "id": "21-package-file-naming",
  "level": 3
}, {
  "value": "2.2 Package Archive Structure",
  "id": "22-package-archive-structure",
  "level": 3
}, {
  "value": "2.3 Framework Directory Structure",
  "id": "23-framework-directory-structure",
  "level": 3
}, {
  "value": "3. Package Manifest (MANIFEST.json)",
  "id": "3-package-manifest-manifestjson",
  "level": 2
}, {
  "value": "3.1 Manifest Location",
  "id": "31-manifest-location",
  "level": 3
}, {
  "value": "3.2 Manifest Schema",
  "id": "32-manifest-schema",
  "level": 3
}, {
  "value": "3.3 Manifest Fields",
  "id": "33-manifest-fields",
  "level": 3
}, {
  "value": "Required Fields",
  "id": "required-fields",
  "level": 4
}, {
  "value": "Optional Fields",
  "id": "optional-fields",
  "level": 4
}, {
  "value": "4. Package Creation Process",
  "id": "4-package-creation-process",
  "level": 2
}, {
  "value": "4.1 Source Location",
  "id": "41-source-location",
  "level": 3
}, {
  "value": "4.2 Package Builder Script",
  "id": "42-package-builder-script",
  "level": 3
}, {
  "value": "4.3 Integration with Release Workflow",
  "id": "43-integration-with-release-workflow",
  "level": 3
}, {
  "value": "5. Package Installation Process",
  "id": "5-package-installation-process",
  "level": 2
}, {
  "value": "5.1 Manual Installation",
  "id": "51-manual-installation",
  "level": 3
}, {
  "value": "5.2 CLI Tool Installation (Future)",
  "id": "52-cli-tool-installation-future",
  "level": 3
}, {
  "value": "6. Package Update Process",
  "id": "6-package-update-process",
  "level": 2
}, {
  "value": "6.1 Update Detection",
  "id": "61-update-detection",
  "level": 3
}, {
  "value": "6.2 Update Process",
  "id": "62-update-process",
  "level": 3
}, {
  "value": "7. Error Handling",
  "id": "7-error-handling",
  "level": 2
}, {
  "value": "7.1 Hash Verification Failures",
  "id": "71-hash-verification-failures",
  "level": 3
}, {
  "value": "7.2 Package Extraction Failures",
  "id": "72-package-extraction-failures",
  "level": 3
}, {
  "value": "7.3 Installation Failures",
  "id": "73-installation-failures",
  "level": 3
}, {
  "value": "8. Implementation Details",
  "id": "8-implementation-details",
  "level": 2
}, {
  "value": "8.1 Package Builder Implementation",
  "id": "81-package-builder-implementation",
  "level": 3
}, {
  "value": "8.2 CLI Tool Package Backend (Future)",
  "id": "82-cli-tool-package-backend-future",
  "level": 3
}, {
  "value": "9. Testing Requirements",
  "id": "9-testing-requirements",
  "level": 2
}, {
  "value": "9.1 Package Creation Tests",
  "id": "91-package-creation-tests",
  "level": 3
}, {
  "value": "9.2 Hash Verification Tests",
  "id": "92-hash-verification-tests",
  "level": 3
}, {
  "value": "9.3 Installation Tests",
  "id": "93-installation-tests",
  "level": 3
}, {
  "value": "9.4 Update Tests",
  "id": "94-update-tests",
  "level": 3
}, {
  "value": "References",
  "id": "references",
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
        id: "package-management-design-specification",
        children: "Package Management Design Specification"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Purpose:"
      }), " Detailed design specification for AI Dev Kit framework package management system", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Date:"
      }), " 2025-12-18", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Status:"
      }), " COMPLETE", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Version:"
      }), " 1.0.0", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Task:"
      }), " E6:S06", ":T02", " – Investigate proper package management", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Related:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "docs/Analysis/package-management-investigation-report.md"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Research Sources:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Industry package management best practices"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "tar.gz distribution patterns"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "GitHub Releases workflows"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Manifest.json metadata standards"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1-overview",
      children: "1. Overview"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["This specification defines the design for distributing AI Dev Kit frameworks as ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "single package files"
      }), " (tar.gz archives) with ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "SHA-256 hash verification"
      }), ". The package management system enables distribution without Git dependency, better security, and easier installation/updates."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Key Design Decisions:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Package Format:"
        }), " tar.gz (gzip-compressed tar archive)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Hash Algorithm:"
        }), " SHA-256"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Distribution:"
        }), " GitHub Releases"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Manifest:"
        }), " MANIFEST.json (JSON metadata)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "2-package-structure",
      children: "2. Package Structure"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "21-package-file-naming",
      children: "2.1 Package File Naming"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Format:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "{framework-name}-{version}.tar.gz\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Examples:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "kanban-v2.0.0.tar.gz"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "workflow-mgmt-v2.1.0.tar.gz"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "numbering-versioning-v1.5.0.tar.gz"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Conventions:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Framework name: lowercase, hyphenated (e.g., ", (0,jsx_runtime.jsx)(_components.code, {
          children: "workflow-mgmt"
        }), ")"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Version: Semantic Versioning format (e.g., ", (0,jsx_runtime.jsx)(_components.code, {
          children: "v2.0.0"
        }), ")"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Extension: ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".tar.gz"
        }), " (standard gzip-compressed tar)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "22-package-archive-structure",
      children: "2.2 Package Archive Structure"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Root Level:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "{package-file}.tar.gz\n├── {framework-name}/          # Framework root directory\n│   ├── README.md\n│   ├── PACKAGE_OVERVIEW.md\n│   ├── IMPLEMENTATION_GUIDE.md\n│   ├── CHANGELOG.md\n│   ├── VERSION                # Optional: version file\n│   ├── templates/\n│   ├── policies/\n│   ├── scripts/\n│   ├── docs/\n│   └── ...                    # Other framework files\n└── MANIFEST.json              # Package metadata (at archive root)\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Important:"
      }), " The package archive root contains two items:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "{framework-name}/"
        }), " directory (framework files)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "MANIFEST.json"
        }), " file (package metadata)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "When extracted, the result should be:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "extracted/\n├── {framework-name}/\n│   └── ... (framework files)\n└── MANIFEST.json\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "23-framework-directory-structure",
      children: "2.3 Framework Directory Structure"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Framework Root:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "{framework-name}/"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Required Files:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "README.md"
        }), " - Framework overview and quick start"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "PACKAGE_OVERVIEW.md"
        }), " - Package structure and contents"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "IMPLEMENTATION_GUIDE.md"
        }), " - Installation and integration guide"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Optional Files:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "CHANGELOG.md"
        }), " - Framework changelog"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "VERSION"
        }), " - Version file (optional, can use MANIFEST.json)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Standard Directories:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "templates/"
        }), " - Template files (Epic, Story, Task templates)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "policies/"
        }), " - Policy documents (governance, standards)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "scripts/"
        }), " - Installation and maintenance scripts"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "docs/"
        }), " - Additional documentation"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "examples/"
        }), " - Example implementations"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "integration/"
        }), " - Integration guides with other frameworks"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Preserved Structure:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "All directory structure preserved"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "All file permissions preserved (important for executable scripts)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "All file metadata preserved (if tar supports)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "3-package-manifest-manifestjson",
      children: "3. Package Manifest (MANIFEST.json)"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "31-manifest-location",
      children: "3.1 Manifest Location"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Location:"
      }), " Root of tar.gz archive (alongside ", (0,jsx_runtime.jsx)(_components.code, {
        children: "{framework-name}/"
      }), " directory)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Purpose:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Package metadata for verification"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Version information"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Installation instructions"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Framework dependencies"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Package integrity information"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "32-manifest-schema",
      children: "3.2 Manifest Schema"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Schema Version:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "1.0.0"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Full Schema:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-json",
        children: "{\n  \"package_format_version\": \"1.0.0\",\n  \"framework_name\": \"kanban\",\n  \"framework_version\": \"2.0.0\",\n  \"semver\": {\n    \"major\": 2,\n    \"minor\": 0,\n    \"patch\": 0\n  },\n  \"package_hash\": {\n    \"algorithm\": \"SHA-256\",\n    \"hash\": \"a3b5c7d9e1f2g3h4i5j6k7l8m9n0o1p2q3r4s5t6u7v8w9x0y1z2a3b4c5d6e7f8\",\n    \"file\": \"kanban-v2.0.0.tar.gz\"\n  },\n  \"created_at\": \"2025-12-18T12:00:00Z\",\n  \"created_by\": \"ai-dev-kit\",\n  \"framework_dependencies\": [],\n  \"contents\": {\n    \"files\": 245,\n    \"directories\": 42,\n    \"total_size_bytes\": 2456789,\n    \"compressed_size_bytes\": 456789\n  },\n  \"installation\": {\n    \"entry_point\": \"README.md\",\n    \"install_script\": \"scripts/install_kanban_framework.py\",\n    \"requirements\": {\n      \"python\": \">=3.11\"\n    }\n  },\n  \"changelog\": \"CHANGELOG.md\",\n  \"documentation\": {\n    \"overview\": \"PACKAGE_OVERVIEW.md\",\n    \"implementation\": \"IMPLEMENTATION_GUIDE.md\",\n    \"policies\": \"policies/\"\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "33-manifest-fields",
      children: "3.3 Manifest Fields"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "required-fields",
      children: "Required Fields"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "package_format_version"
        })
      }), " (string)"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Version of package format schema"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Format: Semantic Versioning (e.g., \"1.0.0\")"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Purpose: Schema versioning for future compatibility"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "framework_name"
        })
      }), " (string)"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Framework identifier"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Format: lowercase, hyphenated (e.g., \"kanban\", \"workflow-mgmt\")"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Must match package filename prefix"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "framework_version"
        })
      }), " (string)"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Framework version"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Format: Semantic Versioning (e.g., \"2.0.0\")"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Must match package filename version"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "semver"
        })
      }), " (object)"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Structured semantic version"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Fields:", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "major"
            }), " (integer): Major version number"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "minor"
            }), " (integer): Minor version number"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "patch"
            }), " (integer): Patch version number"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "package_hash"
        })
      }), " (object)"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Package file hash information"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Fields:", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "algorithm"
            }), " (string): Hash algorithm (e.g., \"SHA-256\")"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "hash"
            }), " (string): Hexadecimal hash value"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "file"
            }), " (string): Package filename (for verification)"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "created_at"
        })
      }), " (string)"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Package creation timestamp"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Format: ISO 8601 (e.g., \"2025-12-18T12:00:00Z\")"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "created_by"
        })
      }), " (string)"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Package creator identifier"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Example: \"ai-dev-kit\""
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "optional-fields",
      children: "Optional Fields"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "framework_dependencies"
        })
      }), " (array)"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "List of other frameworks required"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Format: Array of framework names"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Example: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "[\"numbering-versioning\"]"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Currently empty (frameworks are independent)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "contents"
        })
      }), " (object)"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Package contents statistics"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Fields:", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "files"
            }), " (integer): Number of files"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "directories"
            }), " (integer): Number of directories"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "total_size_bytes"
            }), " (integer): Uncompressed size"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "compressed_size_bytes"
            }), " (integer): Compressed size"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "installation"
        })
      }), " (object)"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Installation instructions"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Fields:", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "entry_point"
            }), " (string): Entry point file (e.g., \"README.md\")"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "install_script"
            }), " (string): Installation script path (optional)"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "requirements"
            }), " (object): Installation requirements (optional)"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "changelog"
        })
      }), " (string)"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Path to changelog file"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Example: \"CHANGELOG.md\""
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "documentation"
        })
      }), " (object)"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Documentation paths"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Fields:", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "overview"
            }), " (string): Overview document path"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "implementation"
            }), " (string): Implementation guide path"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "policies"
            }), " (string): Policies directory path"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "4-package-creation-process",
      children: "4. Package Creation Process"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "41-source-location",
      children: "4.1 Source Location"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Framework Source:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "packages/frameworks/{framework-name}/"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Package Output:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "packages/dist/{framework-name}-{version}.tar.gz"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "42-package-builder-script",
      children: "4.2 Package Builder Script"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Script Location:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "packages/frameworks/workflow-mgt/scripts/package_builder.py"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Function:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def create_package(\n    framework_name: str,\n    version: str,\n    source_dir: Path,\n    output_dir: Path\n) -> tuple[Path, str]:\n    \"\"\"\n    Create package file and compute hash.\n    \n    Args:\n        framework_name: Framework identifier (e.g., \"kanban\")\n        version: Framework version (e.g., \"2.0.0\")\n        source_dir: Source directory (packages/frameworks/{framework-name})\n        output_dir: Output directory for package files\n    \n    Returns:\n        Tuple of (package_path, hash_value)\n    \"\"\"\n    pass\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Process:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Validate Inputs:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Verify framework_name matches source directory"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Verify version format (Semantic Versioning)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Verify source directory exists and contains framework files"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Create Temporary Directory:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Create temp directory for package assembly"
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Copy framework files to ", (0,jsx_runtime.jsx)(_components.code, {
              children: "{framework-name}/"
            }), " subdirectory"]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Generate MANIFEST.json at temp root"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Generate MANIFEST.json:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Extract metadata from framework files"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Compute content statistics"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Set creation timestamp"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Set package creator"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Create tar.gz Archive:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Archive temp directory contents"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Compress with gzip"
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Name: ", (0,jsx_runtime.jsx)(_components.code, {
              children: "{framework-name}-{version}.tar.gz"
            })]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Preserve file permissions"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Compute SHA-256 Hash:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Read package file"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Compute SHA-256 hash"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Format: Hexadecimal string"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Update MANIFEST.json:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Add package_hash field to manifest"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Write updated manifest to archive (requires re-archiving)"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Create Hash File:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Create ", (0,jsx_runtime.jsx)(_components.code, {
              children: ".sha256"
            }), " file"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Format: ", (0,jsx_runtime.jsx)(_components.code, {
              children: "{hash}  {filename}\\n"
            })]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Save to output directory"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Cleanup:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Remove temporary directory"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Return package path and hash"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "43-integration-with-release-workflow",
      children: "4.3 Integration with Release Workflow"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "RW Integration (Future):"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Step:"
      }), " Package Creation (after changelog, before push)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Process:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Detect framework changes in release"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["For each changed framework:", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Run package builder"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Create package file"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Compute hash"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Create hash file"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Stage package files (for manual upload to GitHub releases)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Or: Automatically upload to GitHub releases via API"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "GitHub Release Assets:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "{framework-name}-{version}.tar.gz"
        }), " - Package file"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "{framework-name}-{version}.tar.gz.sha256"
        }), " - Hash file"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Optional: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "{framework-name}-{version}.zip"
        }), " - Windows format"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "5-package-installation-process",
      children: "5. Package Installation Process"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "51-manual-installation",
      children: "5.1 Manual Installation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Steps:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Download Package:"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-bash",
            children: "wget https://github.com/RMS-Ltd/ai-dev-kit/releases/download/kanban-v2.0.0/kanban-v2.0.0.tar.gz\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Download Hash File:"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-bash",
            children: "wget https://github.com/RMS-Ltd/ai-dev-kit/releases/download/kanban-v2.0.0/kanban-v2.0.0.tar.gz.sha256\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Verify Hash:"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-bash",
            children: "sha256sum -c kanban-v2.0.0.tar.gz.sha256\n# Output: kanban-v2.0.0.tar.gz: OK\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Extract Package:"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-bash",
            children: "tar -xzf kanban-v2.0.0.tar.gz\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Install Framework:"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-bash",
            children: "cp -r kanban packages/frameworks/\n# Or use installer script if available\npython kanban/scripts/install_kanban_framework.py\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "52-cli-tool-installation-future",
      children: "5.2 CLI Tool Installation (Future)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Command:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "ai-dev-kit install kanban@2.0.0 --backend package-file\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Process:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Download package and hash file"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Verify hash automatically"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Extract package"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Install framework (copy to target location)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Verify installation"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "6-package-update-process",
      children: "6. Package Update Process"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "61-update-detection",
      children: "6.1 Update Detection"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Methods:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "CLI Tool:"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-bash",
            children: "ai-dev-kit check\n# Output:\n# Available Updates:\n#   kanban: v2.0.0 → v2.1.0 (minor update)\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "GitHub Releases API:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Query GitHub releases for latest version"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Compare with installed version"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Notify user of updates"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Manual Check:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Visit GitHub releases page"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Compare versions"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "62-update-process",
      children: "6.2 Update Process"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Steps:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Backup Current Framework:"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-bash",
            children: "cp -r packages/frameworks/kanban packages/frameworks/kanban.backup\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Download New Package:"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-bash",
            children: "wget https://github.com/RMS-Ltd/ai-dev-kit/releases/download/kanban-v2.1.0/kanban-v2.1.0.tar.gz\nwget https://github.com/RMS-Ltd/ai-dev-kit/releases/download/kanban-v2.1.0/kanban-v2.1.0.tar.gz.sha256\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Verify Hash:"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-bash",
            children: "sha256sum -c kanban-v2.1.0.tar.gz.sha256\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Extract Package:"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-bash",
            children: "tar -xzf kanban-v2.1.0.tar.gz\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Install New Version:"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-bash",
            children: "rm -rf packages/frameworks/kanban\ncp -r kanban packages/frameworks/\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Run Migration Scripts (if needed):"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-bash",
            children: "python packages/frameworks/kanban/scripts/migrate_v2.0_to_v2.1.py\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Verify Installation:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Check framework files"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Run validation scripts"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Test framework functionality"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Rollback (if needed):"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-bash",
            children: "rm -rf packages/frameworks/kanban\ncp -r packages/frameworks/kanban.backup packages/frameworks/kanban\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "7-error-handling",
      children: "7. Error Handling"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "71-hash-verification-failures",
      children: "7.1 Hash Verification Failures"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Error:"
      }), " Hash mismatch"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Handling:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Reject package installation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Display clear error message"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Suggest re-downloading package"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Log security incident (optional)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Error Message:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "❌ SECURITY ERROR: Package hash verification failed!\n\nPackage: kanban-v2.0.0.tar.gz\nExpected hash: a3b5c7d9e1f2g3h4i5j6k7l8m9n0o1p2q3r4s5t6u7v8w9x0y1z2a3b4c5d6e7f8\nComputed hash: x1y2z3a4b5c6d7e8f9g0h1i2j3k4l5m6n7o8p9q0r1s2t3u4v5w6x7y8z9a0b1\n\nPossible causes:\n  - Package file corrupted during download\n  - Package file tampered with (security risk)\n  - Hash file incorrect\n\nAction: Re-download package and hash file from trusted source.\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "72-package-extraction-failures",
      children: "7.2 Package Extraction Failures"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Error:"
      }), " Archive corruption or invalid format"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Handling:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Reject package installation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Display clear error message"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Suggest re-downloading package"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "73-installation-failures",
      children: "7.3 Installation Failures"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Error:"
      }), " Framework installation fails (permissions, disk space, etc.)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Handling:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Rollback to previous version (if backup exists)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Display clear error message"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Provide troubleshooting guidance"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "8-implementation-details",
      children: "8. Implementation Details"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "81-package-builder-implementation",
      children: "8.1 Package Builder Implementation"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Script:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "packages/frameworks/workflow-mgt/scripts/package_builder.py"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Dependencies:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Python 3.11+"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Standard library: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "tarfile"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "hashlib"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "json"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "pathlib"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Usage:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "python package_builder.py kanban 2.0.0\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "packages/dist/kanban-v2.0.0.tar.gz"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "packages/dist/kanban-v2.0.0.tar.gz.sha256"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "82-cli-tool-package-backend-future",
      children: "8.2 CLI Tool Package Backend (Future)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Backend Module:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "cli/backends/package_file.py"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Functions:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "install(framework, version)"
        }), " - Download, verify, extract, install"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "update(framework)"
        }), " - Check for updates, download, verify, install"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "verify(package_path, hash_path)"
        }), " - Verify package hash"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "list_available()"
        }), " - List available framework versions"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "9-testing-requirements",
      children: "9. Testing Requirements"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "91-package-creation-tests",
      children: "9.1 Package Creation Tests"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Package file created successfully"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ MANIFEST.json included and valid"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Framework files included and complete"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ File permissions preserved"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Directory structure preserved"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Package size reasonable"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "92-hash-verification-tests",
      children: "9.2 Hash Verification Tests"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Hash computed correctly"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Hash file created correctly"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Hash verification succeeds for valid package"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Hash verification fails for corrupted package"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Hash verification fails for tampered package"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "93-installation-tests",
      children: "9.3 Installation Tests"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Package extracts correctly"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Framework installs correctly"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Installation verification passes"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Rollback works correctly"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "94-update-tests",
      children: "9.4 Update Tests"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Update detection works"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Update process completes successfully"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Migration scripts run (if needed)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Rollback works if update fails"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "references",
      children: "References"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Investigation Report:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/Analysis/package-management-investigation-report.md"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Hash Verification Spec:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/architecture/standards-and-adrs/package-hash-verification-spec.md"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Framework Dependency Architecture:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/architecture/standards-and-adrs/framework-dependency-architecture.md"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Status:"
      }), " ✅ Design Specification Complete", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Next Step:"
      }), " Implementation (E6:S06", ":T04", ")"]
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