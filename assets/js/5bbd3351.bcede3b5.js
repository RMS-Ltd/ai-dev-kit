"use strict";
(self["webpackChunkportal"] = self["webpackChunkportal"] || []).push([["25857"], {
47724(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_architecture_standards_and_adrs_package_hash_verification_spec_md_5bb_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-architecture-standards-and-adrs-package-hash-verification-spec-md-5bb.json
var site_docs_architecture_standards_and_adrs_package_hash_verification_spec_md_5bb_namespaceObject = JSON.parse('{"id":"architecture/standards-and-adrs/package-hash-verification-spec","title":"Package Hash Verification Specification","description":"Purpose: Detailed specification for hash verification mechanism for AI Dev Kit framework packages","source":"@site/../docs/architecture/standards-and-adrs/package-hash-verification-spec.md","sourceDirName":"architecture/standards-and-adrs","slug":"/architecture/standards-and-adrs/package-hash-verification-spec","permalink":"/ai-dev-kit/docs/architecture/standards-and-adrs/package-hash-verification-spec","draft":false,"unlisted":false,"editUrl":"https://github.com/RMS-Ltd/ai-dev-kit/tree/main/docs/../docs/architecture/standards-and-adrs/package-hash-verification-spec.md","tags":[],"version":"current","frontMatter":{},"sidebar":"docsSidebar","previous":{"title":"Standard Operating Procedure: Handling Mixed BR/FR Scope","permalink":"/ai-dev-kit/docs/architecture/standards-and-adrs/mixed-br-fr-scope-sop"},"next":{"title":"Package Maintenance and Release","permalink":"/ai-dev-kit/docs/architecture/standards-and-adrs/package-maintenance-and-release"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ../docs/architecture/standards-and-adrs/package-hash-verification-spec.md


const frontMatter = {};
const contentTitle = 'Package Hash Verification Specification';

const assets = {

};



const toc = [{
  "value": "1. Overview",
  "id": "1-overview",
  "level": 2
}, {
  "value": "2. Hash Algorithm: SHA-256",
  "id": "2-hash-algorithm-sha-256",
  "level": 2
}, {
  "value": "2.1 Algorithm Selection",
  "id": "21-algorithm-selection",
  "level": 3
}, {
  "value": "2.2 Alternative Algorithms Considered",
  "id": "22-alternative-algorithms-considered",
  "level": 3
}, {
  "value": "3. Hash Computation",
  "id": "3-hash-computation",
  "level": 2
}, {
  "value": "3.1 Hash Target",
  "id": "31-hash-target",
  "level": 3
}, {
  "value": "3.2 Hash Format",
  "id": "32-hash-format",
  "level": 3
}, {
  "value": "3.3 Hash Computation Timing",
  "id": "33-hash-computation-timing",
  "level": 3
}, {
  "value": "4. Hash File Format",
  "id": "4-hash-file-format",
  "level": 2
}, {
  "value": "4.1 Hash File Naming",
  "id": "41-hash-file-naming",
  "level": 3
}, {
  "value": "4.2 Hash File Content",
  "id": "42-hash-file-content",
  "level": 3
}, {
  "value": "4.3 Hash File Creation",
  "id": "43-hash-file-creation",
  "level": 3
}, {
  "value": "5. Hash Distribution",
  "id": "5-hash-distribution",
  "level": 2
}, {
  "value": "5.1 Distribution Methods",
  "id": "51-distribution-methods",
  "level": 3
}, {
  "value": "5.2 Hash File Location",
  "id": "52-hash-file-location",
  "level": 3
}, {
  "value": "6. Hash Verification Process",
  "id": "6-hash-verification-process",
  "level": 2
}, {
  "value": "6.1 Verification Requirements",
  "id": "61-verification-requirements",
  "level": 3
}, {
  "value": "6.2 Verification Implementation",
  "id": "62-verification-implementation",
  "level": 3
}, {
  "value": "6.3 CLI Tool Integration",
  "id": "63-cli-tool-integration",
  "level": 3
}, {
  "value": "7. Security Considerations",
  "id": "7-security-considerations",
  "level": 2
}, {
  "value": "7.1 Threat Model",
  "id": "71-threat-model",
  "level": 3
}, {
  "value": "7.2 Security Measures",
  "id": "72-security-measures",
  "level": 3
}, {
  "value": "7.3 Security Best Practices",
  "id": "73-security-best-practices",
  "level": 3
}, {
  "value": "8. Error Handling",
  "id": "8-error-handling",
  "level": 2
}, {
  "value": "8.1 Hash Mismatch Errors",
  "id": "81-hash-mismatch-errors",
  "level": 3
}, {
  "value": "8.2 Hash File Errors",
  "id": "82-hash-file-errors",
  "level": 3
}, {
  "value": "8.3 Hash Computation Errors",
  "id": "83-hash-computation-errors",
  "level": 3
}, {
  "value": "9. Testing Requirements",
  "id": "9-testing-requirements",
  "level": 2
}, {
  "value": "9.1 Hash Computation Tests",
  "id": "91-hash-computation-tests",
  "level": 3
}, {
  "value": "9.2 Hash Verification Tests",
  "id": "92-hash-verification-tests",
  "level": 3
}, {
  "value": "9.3 Error Handling Tests",
  "id": "93-error-handling-tests",
  "level": 3
}, {
  "value": "9.4 Security Tests",
  "id": "94-security-tests",
  "level": 3
}, {
  "value": "10. Implementation Examples",
  "id": "10-implementation-examples",
  "level": 2
}, {
  "value": "10.1 Package Builder Integration",
  "id": "101-package-builder-integration",
  "level": 3
}, {
  "value": "10.2 CLI Tool Integration",
  "id": "102-cli-tool-integration",
  "level": 3
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
        id: "package-hash-verification-specification",
        children: "Package Hash Verification Specification"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Purpose:"
      }), " Detailed specification for hash verification mechanism for AI Dev Kit framework packages", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Date:"
      }), " 2025-12-18", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Status:"
      }), " COMPLETE", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Version:"
      }), " 1.0.0", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Task:"
      }), " E6:S06", ":T02", " – Investigate proper package management", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Related:"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/Analysis/package-management-investigation-report.md"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/architecture/standards-and-adrs/package-management-design.md"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Research Sources:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Industry standard checksum file formats (sha256sum)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "NIST SHA-256 specification"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Package distribution security best practices (2024)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1-overview",
      children: "1. Overview"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["This specification defines the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "SHA-256 hash verification mechanism"
      }), " for AI Dev Kit framework packages. Hash verification ensures package integrity, prevents tampering, and detects corruption during download/storage."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Key Principles:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Algorithm:"
        }), " SHA-256 (Secure Hash Algorithm 256-bit)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Verification:"
        }), " Mandatory before installation"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Distribution:"
        }), " Hash file separate from package file"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Security:"
        }), " Cryptographic integrity verification"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "2-hash-algorithm-sha-256",
      children: "2. Hash Algorithm: SHA-256"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "21-algorithm-selection",
      children: "2.1 Algorithm Selection"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Selected Algorithm:"
      }), " SHA-256 (SHA-2 family)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Rationale:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Industry standard (NIST approved)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Cryptographically secure (no known vulnerabilities)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Fast computation (suitable for package files)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Widely supported (built into most systems and languages)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Future-proof (SHA-2 family, not deprecated)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Algorithm Details:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Output Size:"
        }), " 256 bits (32 bytes)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Output Format:"
        }), " Hexadecimal string (64 characters)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Block Size:"
        }), " 512 bits"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Security Level:"
        }), " 128 bits (secure against collision attacks)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "22-alternative-algorithms-considered",
      children: "2.2 Alternative Algorithms Considered"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "SHA-1:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "❌ Deprecated (collision vulnerabilities discovered)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "❌ Not recommended for security-critical applications"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "SHA-512:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "⚠️ Overkill for this use case (SHA-256 sufficient)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "⚠️ Larger hash size (128 characters vs 64)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "⚠️ No security advantage for package verification"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "MD5:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "❌ Broken (collision attacks demonstrated)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "❌ Not recommended for any security purposes"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "BLAKE2:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "⚠️ Newer algorithm (less widely supported)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "⚠️ SHA-256 sufficient for this use case"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "⚠️ No significant advantages"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Decision:"
      }), " ✅ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "SHA-256"
      }), " is the optimal choice"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "3-hash-computation",
      children: "3. Hash Computation"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "31-hash-target",
      children: "3.1 Hash Target"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "What Gets Hashed:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["The ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "entire package file"
        }), " (tar.gz archive)"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "After package creation is complete"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Before distribution"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Hash Computation:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import hashlib\n\ndef compute_package_hash(package_path: Path) -> str:\n    \"\"\"Compute SHA-256 hash of package file.\"\"\"\n    sha256 = hashlib.sha256()\n    \n    with open(package_path, 'rb') as f:\n        # Read file in chunks for memory efficiency\n        for chunk in iter(lambda: f.read(4096), b''):\n            sha256.update(chunk)\n    \n    return sha256.hexdigest()\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "32-hash-format",
      children: "3.2 Hash Format"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Output Format:"
      }), " Hexadecimal string (lowercase)"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Length:"
      }), " 64 characters"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "a3b5c7d9e1f2g3h4i5j6k7l8m9n0o1p2q3r4s5t6u7v8w9x0y1z2a3b4c5d6e7f8\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Note:"
      }), " Use lowercase hexadecimal (standard convention)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "33-hash-computation-timing",
      children: "3.3 Hash Computation Timing"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "When to Compute:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "After package file creation (tar.gz archive)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Before distribution"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Before hash file creation"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Process:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "1. Create tar.gz package file\n   → kanban-v2.0.0.tar.gz\n\n2. Compute SHA-256 hash of package file\n   → a3b5c7d9e1f2g3h4i5j6k7l8m9n0o1p2q3r4s5t6u7v8w9x0y1z2a3b4c5d6e7f8\n\n3. Update MANIFEST.json with hash\n   → (if manifest is separate)\n\n4. Create hash file\n   → kanban-v2.0.0.tar.gz.sha256\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "4-hash-file-format",
      children: "4. Hash File Format"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "41-hash-file-naming",
      children: "4.1 Hash File Naming"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Format:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "{package-filename}.sha256\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Examples:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "kanban-v2.0.0.tar.gz.sha256"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "workflow-mgmt-v2.1.0.tar.gz.sha256"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "numbering-versioning-v1.5.0.tar.gz.sha256"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "42-hash-file-content",
      children: "4.2 Hash File Content"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Format:"
      }), " Standard checksum file format (compatible with ", (0,jsx_runtime.jsx)(_components.code, {
        children: "sha256sum"
      }), ")"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Structure:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "{hash}  {filename}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Fields:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "{hash}"
        }), ": SHA-256 hash (64-character hexadecimal string)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "{filename}"
        }), ": Package filename (for verification)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "a3b5c7d9e1f2g3h4i5j6k7l8m9n0o1p2q3r4s5t6u7v8w9x0y1z2a3b4c5d6e7f8  kanban-v2.0.0.tar.gz\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Notes:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Two spaces between hash and filename (standard format)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Filename matches package file exactly"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Single line (no trailing newline required, but allowed)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "43-hash-file-creation",
      children: "4.3 Hash File Creation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Script:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def create_hash_file(package_path: Path, hash_value: str, output_dir: Path) -> Path:\n    \"\"\"Create hash file for package.\"\"\"\n    hash_filename = f\"{package_path.name}.sha256\"\n    hash_path = output_dir / hash_filename\n    \n    with open(hash_path, 'w') as f:\n        f.write(f\"{hash_value}  {package_path.name}\\n\")\n    \n    return hash_path\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "5-hash-distribution",
      children: "5. Hash Distribution"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "51-distribution-methods",
      children: "5.1 Distribution Methods"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Primary Method: GitHub Releases"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Structure:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "GitHub Release: kanban-v2.0.0\n├── Assets:\n│   ├── kanban-v2.0.0.tar.gz           (package file)\n│   ├── kanban-v2.0.0.tar.gz.sha256    (hash file)\n│   └── kanban-v2.0.0.zip              (optional: Windows format)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Hash File as Release Asset:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Uploaded alongside package file"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Same location (redundancy)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Easy to download together"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Alternative Methods (Future):"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "MANIFEST.json:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Hash included in package manifest"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Extracted after download"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Verified against hash file"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Package Registry:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Hash stored in registry metadata"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "API endpoint for hash lookup"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Alternative source for verification"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Website/CDN:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Hash files hosted separately"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Alternative download source"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Redundancy for distribution"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "52-hash-file-location",
      children: "5.2 Hash File Location"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Recommended Locations (in priority order):"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "GitHub Release Assets:"
        }), " Primary (alongside package file)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Package Manifest:"
        }), " Secondary (inside package, for verification)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Package Registry:"
        }), " Tertiary (future, for API access)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Redundancy:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Multiple distribution channels increase reliability"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If one source unavailable, others can be used"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Reduces single point of failure"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "6-hash-verification-process",
      children: "6. Hash Verification Process"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "61-verification-requirements",
      children: "6.1 Verification Requirements"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Mandatory Verification:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["✅ Hash verification ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "MUST"
        }), " be performed before installation"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["✅ Installation ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "MUST"
        }), " be rejected if hash verification fails"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["✅ Clear error messages ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "MUST"
        }), " be displayed on verification failure"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Verification Steps:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Download Package and Hash File:"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-bash",
            children: "wget https://github.com/.../kanban-v2.0.0.tar.gz\nwget https://github.com/.../kanban-v2.0.0.tar.gz.sha256\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Compute Hash of Downloaded Package:"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-bash",
            children: "sha256sum kanban-v2.0.0.tar.gz\n# Output: a3b5c7d9e1f2g3h4i5j6k7l8m9n0o1p2q3r4s5t6u7v8w9x0y1z2a3b4c5d6e7f8  kanban-v2.0.0.tar.gz\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Read Published Hash from Hash File:"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-bash",
            children: "cat kanban-v2.0.0.tar.gz.sha256\n# Output: a3b5c7d9e1f2g3h4i5j6k7l8m9n0o1p2q3r4s5t6u7v8w9x0y1z2a3b4c5d6e7f8  kanban-v2.0.0.tar.gz\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Compare Hashes:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Extract hash from hash file (first field, before spaces)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Compare with computed hash"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Verify filename matches"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Verify or Reject:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["✅ ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Match:"
            }), " Verification successful, proceed with installation"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["❌ ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Mismatch:"
            }), " Verification failed, reject installation, display error"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "62-verification-implementation",
      children: "6.2 Verification Implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Python Implementation:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import hashlib\nfrom pathlib import Path\n\ndef verify_package_hash(package_path: Path, hash_path: Path) -> bool:\n    \"\"\"\n    Verify package integrity using SHA-256 hash.\n    \n    Args:\n        package_path: Path to package file\n        hash_path: Path to hash file\n    \n    Returns:\n        True if verification succeeds, False otherwise\n    \n    Raises:\n        SecurityError: If hash verification fails\n    \"\"\"\n    # 1. Read published hash from hash file\n    with open(hash_path, 'r') as f:\n        hash_line = f.read().strip()\n    \n    # Parse hash file format: \"{hash}  {filename}\"\n    parts = hash_line.split()\n    if len(parts) < 2:\n        raise ValueError(f\"Invalid hash file format: {hash_path}\")\n    \n    published_hash = parts[0].lower()  # Extract hash (first field)\n    expected_filename = parts[1]  # Extract filename (second field)\n    \n    # Verify filename matches\n    if package_path.name != expected_filename:\n        raise ValueError(\n            f\"Hash file filename mismatch: \"\n            f\"expected '{expected_filename}', got '{package_path.name}'\"\n        )\n    \n    # 2. Compute hash of downloaded package\n    sha256 = hashlib.sha256()\n    with open(package_path, 'rb') as f:\n        for chunk in iter(lambda: f.read(4096), b''):\n            sha256.update(chunk)\n    computed_hash = sha256.hexdigest().lower()\n    \n    # 3. Compare hashes\n    if computed_hash != published_hash:\n        raise SecurityError(\n            f\"Hash verification failed!\\n\"\n            f\"Package: {package_path.name}\\n\"\n            f\"Expected: {published_hash}\\n\"\n            f\"Computed: {computed_hash}\\n\"\n            f\"\\n\"\n            f\"Possible causes:\\n\"\n            f\"  - Package corrupted during download\\n\"\n            f\"  - Package tampered with (security risk)\\n\"\n            f\"  - Hash file incorrect\\n\"\n            f\"\\n\"\n            f\"Action: Re-download package and hash file from trusted source.\"\n        )\n    \n    # 4. Verification successful\n    return True\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Shell Implementation (sha256sum):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Verify hash using sha256sum command\nsha256sum -c kanban-v2.0.0.tar.gz.sha256\n\n# Output if successful:\n# kanban-v2.0.0.tar.gz: OK\n\n# Output if failed:\n# kanban-v2.0.0.tar.gz: FAILED\n# sha256sum: WARNING: 1 computed checksum did NOT match\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "63-cli-tool-integration",
      children: "6.3 CLI Tool Integration"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Command:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Install with automatic hash verification\nai-dev-kit install kanban@2.0.0 --verify-hash\n\n# Manual verification\nai-dev-kit verify kanban-v2.0.0.tar.gz\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "CLI Tool Process:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Download package file"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Download hash file"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Compute package hash"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Read published hash from hash file"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Compare hashes"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Verify or reject installation"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Error Handling:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Display clear error messages"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Suggest re-downloading"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Log security incidents (optional)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "7-security-considerations",
      children: "7. Security Considerations"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "71-threat-model",
      children: "7.1 Threat Model"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Threats Addressed:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Package Tampering:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Threat:"
            }), " Malicious modification of package files"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Mitigation:"
            }), " SHA-256 hash verification detects any modification"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Severity:"
            }), " HIGH"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Man-in-the-Middle Attacks:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Threat:"
            }), " Interception and modification during download"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Mitigation:"
            }), " HTTPS (GitHub), hash verification detects modification"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Severity:"
            }), " MEDIUM"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Package Corruption:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Threat:"
            }), " Accidental corruption during transfer/storage"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Mitigation:"
            }), " Hash verification detects corruption"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Severity:"
            }), " MEDIUM"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Hash File Tampering:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Threat:"
            }), " Attacker modifies hash file to match tampered package"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Mitigation:"
            }), " Download hash file from same trusted source (GitHub), HTTPS"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Severity:"
            }), " MEDIUM (requires source compromise)"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "72-security-measures",
      children: "7.2 Security Measures"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Implemented:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "HTTPS Downloads:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "All downloads via HTTPS (GitHub)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Prevents man-in-the-middle attacks on transport"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "SHA-256 Hash Verification:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Cryptographic integrity verification"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Detects any modification to package file"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Separate Hash File:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Hash file separate from package file"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Redundancy (hash also in MANIFEST.json)"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Mandatory Verification:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Hash verification required before installation"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Installation rejected if verification fails"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Future Enhancements (Phase 3+):"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Package Signing:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "PGP/GPG signatures on package files"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Signature verification"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Cryptographic authentication of package source"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Certificate-Based Trust:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Certificate chain verification"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Trusted certificate authority"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Enhanced authentication"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Hash File Signing:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Sign hash files with PGP/GPG"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Verify hash file signatures"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Prevent hash file tampering"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "73-security-best-practices",
      children: "7.3 Security Best Practices"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "For Package Maintainers:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Hash Computation:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Compute hash immediately after package creation"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Verify hash before publishing"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Store hash in version control"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Hash Distribution:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Publish hash file alongside package file"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Include hash in MANIFEST.json"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Provide multiple distribution channels (redundancy)"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Security Procedures:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Use secure channels for package creation"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Verify package integrity before distribution"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Monitor for hash mismatches (security incidents)"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "For Package Consumers:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Hash Verification:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Always verify hash before installation"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Download hash file from same trusted source as package"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Re-download if hash verification fails"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Security Awareness:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Understand hash verification purpose"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Report hash mismatches (security incidents)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Do not bypass hash verification"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Trust Source:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Download only from trusted sources (GitHub releases)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Verify source authenticity (HTTPS, GitHub verified)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Be suspicious of hash mismatches"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "8-error-handling",
      children: "8. Error Handling"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "81-hash-mismatch-errors",
      children: "8.1 Hash Mismatch Errors"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Error:"
      }), " Hash verification fails (computed hash ≠ published hash)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Error Message:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "❌ SECURITY ERROR: Package hash verification failed!\n\nPackage: kanban-v2.0.0.tar.gz\nExpected hash: a3b5c7d9e1f2g3h4i5j6k7l8m9n0o1p2q3r4s5t6u7v8w9x0y1z2a3b4c5d6e7f8\nComputed hash: x1y2z3a4b5c6d7e8f9g0h1i2j3k4l5m6n7o8p9q0r1s2t3u4v5w6x7y8z9a0b1\n\nPossible causes:\n  - Package file corrupted during download\n  - Package file tampered with (security risk)\n  - Hash file incorrect\n\nAction: Re-download package and hash file from trusted source.\n\n⚠️  WARNING: Do not install this package. It may be corrupted or maliciously modified.\n"
      })
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
        children: "Suggest re-downloading"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Log security incident (optional)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "82-hash-file-errors",
      children: "8.2 Hash File Errors"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Error:"
      }), " Hash file missing or invalid format"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Error Message:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "❌ ERROR: Hash file not found or invalid format\n\nExpected: kanban-v2.0.0.tar.gz.sha256\nLocation: /path/to/hash/file\n\nAction: Download hash file from trusted source.\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Handling:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Reject installation if hash file missing"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Display clear error message"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Provide hash file download instructions"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "83-hash-computation-errors",
      children: "8.3 Hash Computation Errors"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Error:"
      }), " Cannot compute hash (file access, permissions, etc.)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Error Message:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "❌ ERROR: Cannot compute package hash\n\nPackage: kanban-v2.0.0.tar.gz\nReason: Permission denied / File not found / etc.\n\nAction: Check file permissions and package file location.\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Handling:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Display clear error message"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Provide troubleshooting guidance"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "9-testing-requirements",
      children: "9. Testing Requirements"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "91-hash-computation-tests",
      children: "9.1 Hash Computation Tests"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Hash computed correctly for valid package"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Hash consistent across multiple computations"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Hash different for modified package"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Hash computation handles large files efficiently"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "92-hash-verification-tests",
      children: "9.2 Hash Verification Tests"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Verification succeeds for valid package and hash"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Verification fails for corrupted package"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Verification fails for tampered package"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Verification fails for incorrect hash file"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Verification fails for missing hash file"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "93-error-handling-tests",
      children: "9.3 Error Handling Tests"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Clear error messages for hash mismatch"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Clear error messages for missing hash file"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Clear error messages for invalid hash file format"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Installation rejection on verification failure"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "94-security-tests",
      children: "9.4 Security Tests"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Tampered package detected"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Corrupted package detected"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Hash file tampering detected (if possible)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Verification cannot be bypassed"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "10-implementation-examples",
      children: "10. Implementation Examples"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "101-package-builder-integration",
      children: "10.1 Package Builder Integration"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Package Creation with Hash:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def create_package_with_hash(framework_name, version):\n    # 1. Create package file\n    package_path = create_tar_gz(framework_name, version)\n    \n    # 2. Compute hash\n    hash_value = compute_sha256(package_path)\n    \n    # 3. Create hash file\n    hash_path = create_hash_file(package_path, hash_value)\n    \n    # 4. Update MANIFEST.json with hash\n    update_manifest_hash(package_path, hash_value)\n    \n    return package_path, hash_path, hash_value\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "102-cli-tool-integration",
      children: "10.2 CLI Tool Integration"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Installation with Hash Verification:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def install_with_verification(framework_name, version):\n    # 1. Download package and hash file\n    package_path = download_package(framework_name, version)\n    hash_path = download_hash_file(framework_name, version)\n    \n    # 2. Verify hash\n    try:\n        verify_package_hash(package_path, hash_path)\n    except SecurityError as e:\n        print(f\"❌ {e}\")\n        return False\n    \n    # 3. Extract and install\n    extract_package(package_path)\n    install_framework(framework_name, version)\n    \n    return True\n"
      })
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
          children: "Package Management Design:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/architecture/standards-and-adrs/package-management-design.md"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "SHA-256 Specification:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://csrc.nist.gov/publications/detail/fips/180/4/final",
          children: "https://csrc.nist.gov/publications/detail/fips/180/4/final"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Checksum File Format:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://www.gnu.org/software/coreutils/manual/html_node/md5sum-invocation.html",
          children: "https://www.gnu.org/software/coreutils/manual/html_node/md5sum-invocation.html"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Status:"
      }), " ✅ Hash Verification Specification Complete", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
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