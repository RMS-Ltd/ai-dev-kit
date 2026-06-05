"use strict";
(self["webpackChunkportal"] = self["webpackChunkportal"] || []).push([["80266"], {
77712(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_analysis_phase_3_package_distribution_plan_md_b0e_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-analysis-phase-3-package-distribution-plan-md-b0e.json
var site_docs_analysis_phase_3_package_distribution_plan_md_b0e_namespaceObject = JSON.parse('{"id":"analysis/phase3-package-distribution-plan","title":"Phase 3: Package Distribution Implementation Plan","description":"Purpose: Complete Phase 3 package distribution - build and upload framework packages to GitHub Releases","source":"@site/../docs/analysis/phase3-package-distribution-plan.md","sourceDirName":"analysis","slug":"/analysis/phase3-package-distribution-plan","permalink":"/ai-dev-kit/docs/analysis/phase3-package-distribution-plan","draft":false,"unlisted":false,"editUrl":"https://github.com/RMS-Ltd/ai-dev-kit/tree/main/docs/../docs/analysis/phase3-package-distribution-plan.md","tags":[],"version":"current","frontMatter":{"lifecycle":"evergreen","created_at":"2025-12-18T00:00:00.000Z","housekeeping_policy":"keep"},"sidebar":"docsSidebar","previous":{"title":"Analysis: Perpetual Task Range Options","permalink":"/ai-dev-kit/docs/analysis/perpetual-task-range-options-analysis"},"next":{"title":"Analysis: Repository Story Abstract Space Contradiction","permalink":"/ai-dev-kit/docs/analysis/repository-story-abstract-space-contradiction-analysis"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ../docs/analysis/phase3-package-distribution-plan.md


const frontMatter = {
	lifecycle: 'evergreen',
	created_at: new Date('2025-12-18T00:00:00.000Z'),
	housekeeping_policy: 'keep'
};
const contentTitle = 'Phase 3: Package Distribution Implementation Plan';

const assets = {

};



const toc = [{
  "value": "Overview",
  "id": "overview",
  "level": 2
}, {
  "value": "Framework Versions",
  "id": "framework-versions",
  "level": 2
}, {
  "value": "Step 1: Build All Packages",
  "id": "step-1-build-all-packages",
  "level": 2
}, {
  "value": "Option A: Use Build Script (Recommended)",
  "id": "option-a-use-build-script-recommended",
  "level": 3
}, {
  "value": "Option B: Build Individually",
  "id": "option-b-build-individually",
  "level": 3
}, {
  "value": "Expected Output",
  "id": "expected-output",
  "level": 3
}, {
  "value": "Step 2: Upload to GitHub Releases",
  "id": "step-2-upload-to-github-releases",
  "level": 2
}, {
  "value": "Prerequisites",
  "id": "prerequisites",
  "level": 3
}, {
  "value": "Upload Commands",
  "id": "upload-commands",
  "level": 3
}, {
  "value": "Upload Script (All at Once)",
  "id": "upload-script-all-at-once",
  "level": 3
}, {
  "value": "Step 3: Test Installation",
  "id": "step-3-test-installation",
  "level": 2
}, {
  "value": "Test Manual Installation",
  "id": "test-manual-installation",
  "level": 3
}, {
  "value": "Test Automated Installation",
  "id": "test-automated-installation",
  "level": 3
}, {
  "value": "Step 4: Verify Package Integrity",
  "id": "step-4-verify-package-integrity",
  "level": 2
}, {
  "value": "Verify Hash Files",
  "id": "verify-hash-files",
  "level": 3
}, {
  "value": "Verify Package Contents",
  "id": "verify-package-contents",
  "level": 3
}, {
  "value": "Step 5: Update Documentation",
  "id": "step-5-update-documentation",
  "level": 2
}, {
  "value": "Verification Checklist",
  "id": "verification-checklist",
  "level": 2
}, {
  "value": "Troubleshooting",
  "id": "troubleshooting",
  "level": 2
}, {
  "value": "Build Issues",
  "id": "build-issues",
  "level": 3
}, {
  "value": "Upload Issues",
  "id": "upload-issues",
  "level": 3
}, {
  "value": "Installation Issues",
  "id": "installation-issues",
  "level": 3
}, {
  "value": "Next Steps After Completion",
  "id": "next-steps-after-completion",
  "level": 2
}, {
  "value": "Related Documents",
  "id": "related-documents",
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
        id: "phase-3-package-distribution-implementation-plan",
        children: "Phase 3: Package Distribution Implementation Plan"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Purpose:"
      }), " Complete Phase 3 package distribution - build and upload framework packages to GitHub Releases", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Date:"
      }), " 2025-12-18", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Status:"
      }), " IN PROGRESS", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Related:"
      }), " E6:S06", ":T04", " - Package Management Implementation Plan"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "overview",
      children: "Overview"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Phase 3 tools are complete:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["✅ Package builder script (", (0,jsx_runtime.jsx)(_components.code, {
          children: "build_package.py"
        }), ")"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["✅ GitHub Releases upload script (", (0,jsx_runtime.jsx)(_components.code, {
          children: "upload_to_github_release.py"
        }), ")"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["✅ Installation script (", (0,jsx_runtime.jsx)(_components.code, {
          children: "install_package_from_release.py"
        }), ")"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["✅ Documentation (", (0,jsx_runtime.jsx)(_components.code, {
          children: "PACKAGE_INSTALLATION_GUIDE.md"
        }), ")"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Remaining Work:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Build packages for all frameworks"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Upload packages to GitHub Releases"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Test end-to-end installation workflow"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Document distribution process"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "framework-versions",
      children: "Framework Versions"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Current Framework Versions:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "kanban"
        }), ": ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "2.1.0"
        }), " (from ", (0,jsx_runtime.jsx)(_components.code, {
          children: "CHANGELOG.md"
        }), ")"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "workflow mgt"
        }), ": ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "2.1.3"
        }), " (from ", (0,jsx_runtime.jsx)(_components.code, {
          children: "CHANGELOG.md"
        }), ")"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "numbering & versioning"
        }), ": ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "2.0.0"
        }), " (from ", (0,jsx_runtime.jsx)(_components.code, {
          children: "README.md"
        }), ")"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "doc-lifecycle"
        }), ": ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "1.0.0"
        }), " (from ", (0,jsx_runtime.jsx)(_components.code, {
          children: "README.md"
        }), ")"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "debug-path"
        }), ": ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "1.0.0"
        }), " (from ", (0,jsx_runtime.jsx)(_components.code, {
          children: "README.md"
        }), ")"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "step-1-build-all-packages",
      children: "Step 1: Build All Packages"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "option-a-use-build-script-recommended",
      children: "Option A: Use Build Script (Recommended)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "cd /Users/rms/Documents/projects/ai-dev-kit\npython3 \"packages/frameworks/workflow-mgt/scripts/build_all_packages.py\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This will:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Create ", (0,jsx_runtime.jsx)(_components.code, {
          children: "packages/frameworks/dist/packages/"
        }), " directory"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Build packages for all 5 frameworks"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Generate tar.gz and .sha256 files for each"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "option-b-build-individually",
      children: "Option B: Build Individually"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "cd /Users/rms/Documents/projects/ai-dev-kit\n\n# Create output directory\nmkdir -p packages/frameworks/dist/packages\n\n# Build kanban package\npython3 \"packages/frameworks/workflow-mgt/scripts/build_package.py\" \\\n    kanban 2.1.0 \\\n    --output-dir packages/frameworks/dist/packages \\\n    --verbose\n\n# Build workflow mgt package\npython3 \"packages/frameworks/workflow-mgt/scripts/build_package.py\" \\\n    \"workflow mgt\" 2.1.3 \\\n    --output-dir packages/frameworks/dist/packages \\\n    --verbose\n\n# Build numbering & versioning package\npython3 \"packages/frameworks/workflow-mgt/scripts/build_package.py\" \\\n    \"numbering & versioning\" 2.0.0 \\\n    --output-dir packages/frameworks/dist/packages \\\n    --verbose\n\n# Build doc-lifecycle package\npython3 \"packages/frameworks/workflow-mgt/scripts/build_package.py\" \\\n    doc-lifecycle 1.0.0 \\\n    --output-dir packages/frameworks/dist/packages \\\n    --verbose\n\n# Build debug-path package\npython3 \"packages/frameworks/workflow-mgt/scripts/build_package.py\" \\\n    debug-path 1.0.0 \\\n    --output-dir packages/frameworks/dist/packages \\\n    --verbose\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "expected-output",
      children: "Expected Output"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "After building, you should have:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "packages/frameworks/dist/packages/\n├── kanban-v2.1.0.tar.gz\n├── kanban-v2.1.0.tar.gz.sha256\n├── workflow-mgt-v2.1.3.tar.gz\n├── workflow-mgt-v2.1.3.tar.gz.sha256\n├── numbering-versioning-v2.0.0.tar.gz\n├── numbering-versioning-v2.0.0.tar.gz.sha256\n├── doc-lifecycle-v1.0.0.tar.gz\n├── doc-lifecycle-v1.0.0.tar.gz.sha256\n├── debug-path-v1.0.0.tar.gz\n└── debug-path-v1.0.0.tar.gz.sha256\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "step-2-upload-to-github-releases",
      children: "Step 2: Upload to GitHub Releases"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "prerequisites",
      children: "Prerequisites"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "GitHub Personal Access Token:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Create token with ", (0,jsx_runtime.jsx)(_components.code, {
              children: "repo"
            }), " scope"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Set environment variable: ", (0,jsx_runtime.jsx)(_components.code, {
              children: "export GITHUB_TOKEN=your_token_here"
            })]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Or pass via ", (0,jsx_runtime.jsx)(_components.code, {
              children: "--token"
            }), " flag"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Repository:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Default: ", (0,jsx_runtime.jsx)(_components.code, {
              children: "RMS-Ltd/ai-dev-kit"
            }), " (or set ", (0,jsx_runtime.jsx)(_components.code, {
              children: "GITHUB_REPOSITORY"
            }), " env var)"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Git Tags:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Create tags for each framework release:", "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                className: "language-bash",
                children: "git tag -a kanban-v2.1.0 -m \"Release kanban framework v2.1.0\"\ngit tag -a workflow-mgt-v2.1.3 -m \"Release workflow mgt framework v2.1.3\"\ngit tag -a numbering-versioning-v2.0.0 -m \"Release numbering & versioning framework v2.0.0\"\ngit tag -a doc-lifecycle-v1.0.0 -m \"Release doc-lifecycle framework v1.0.0\"\ngit tag -a debug-path-v1.0.0 -m \"Release debug-path framework v1.0.0\"\n\ngit push origin --tags\n"
              })
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "upload-commands",
      children: "Upload Commands"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "cd /Users/rms/Documents/projects/ai-dev-kit\nPACKAGES_DIR=\"packages/frameworks/dist/packages\"\n\n# Upload kanban package\npython3 \"packages/frameworks/workflow-mgt/scripts/upload_to_github_release.py\" \\\n    \"$PACKAGES_DIR/kanban-v2.1.0.tar.gz\" \\\n    --hash-file \"$PACKAGES_DIR/kanban-v2.1.0.tar.gz.sha256\" \\\n    --tag kanban-v2.1.0 \\\n    --repo RMS-Ltd/ai-dev-kit \\\n    --verbose\n\n# Upload workflow mgt package\npython3 \"packages/frameworks/workflow-mgt/scripts/upload_to_github_release.py\" \\\n    \"$PACKAGES_DIR/workflow-mgt-v2.1.3.tar.gz\" \\\n    --hash-file \"$PACKAGES_DIR/workflow-mgt-v2.1.3.tar.gz.sha256\" \\\n    --tag workflow-mgt-v2.1.3 \\\n    --repo RMS-Ltd/ai-dev-kit \\\n    --verbose\n\n# Upload numbering & versioning package\npython3 \"packages/frameworks/workflow-mgt/scripts/upload_to_github_release.py\" \\\n    \"$PACKAGES_DIR/numbering-versioning-v2.0.0.tar.gz\" \\\n    --hash-file \"$PACKAGES_DIR/numbering-versioning-v2.0.0.tar.gz.sha256\" \\\n    --tag numbering-versioning-v2.0.0 \\\n    --repo RMS-Ltd/ai-dev-kit \\\n    --verbose\n\n# Upload doc-lifecycle package\npython3 \"packages/frameworks/workflow-mgt/scripts/upload_to_github_release.py\" \\\n    \"$PACKAGES_DIR/doc-lifecycle-v1.0.0.tar.gz\" \\\n    --hash-file \"$PACKAGES_DIR/doc-lifecycle-v1.0.0.tar.gz.sha256\" \\\n    --tag doc-lifecycle-v1.0.0 \\\n    --repo RMS-Ltd/ai-dev-kit \\\n    --verbose\n\n# Upload debug-path package\npython3 \"packages/frameworks/workflow-mgt/scripts/upload_to_github_release.py\" \\\n    \"$PACKAGES_DIR/debug-path-v1.0.0.tar.gz\" \\\n    --hash-file \"$PACKAGES_DIR/debug-path-v1.0.0.tar.gz.sha256\" \\\n    --tag debug-path-v1.0.0 \\\n    --repo RMS-Ltd/ai-dev-kit \\\n    --verbose\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "upload-script-all-at-once",
      children: "Upload Script (All at Once)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "#!/bin/bash\n# upload_all_packages.sh\n\ncd /Users/rms/Documents/projects/ai-dev-kit\nPACKAGES_DIR=\"packages/frameworks/dist/packages\"\nUPLOAD_SCRIPT=\"packages/frameworks/workflow-mgt/scripts/upload_to_github_release.py\"\nREPO=\"RMS-Ltd/ai-dev-kit\"\n\n# Array of packages: (package_file, tag)\ndeclare -a PACKAGES=(\n    \"kanban-v2.1.0.tar.gz:kanban-v2.1.0\"\n    \"workflow-mgt-v2.1.3.tar.gz:workflow-mgt-v2.1.3\"\n    \"numbering-versioning-v2.0.0.tar.gz:numbering-versioning-v2.0.0\"\n    \"doc-lifecycle-v1.0.0.tar.gz:doc-lifecycle-v1.0.0\"\n    \"debug-path-v1.0.0.tar.gz:debug-path-v1.0.0\"\n)\n\nfor package_info in \"${PACKAGES[@]}\"; do\n    IFS=':' read -r package_file tag <<< \"$package_info\"\n    hash_file=\"${package_file}.sha256\"\n    \n    echo \"Uploading: $package_file (tag: $tag)\"\n    \n    python3 \"$UPLOAD_SCRIPT\" \\\n        \"$PACKAGES_DIR/$package_file\" \\\n        --hash-file \"$PACKAGES_DIR/$hash_file\" \\\n        --tag \"$tag\" \\\n        --repo \"$REPO\" \\\n        --verbose\n    \n    echo \"\"\ndone\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "step-3-test-installation",
      children: "Step 3: Test Installation"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "test-manual-installation",
      children: "Test Manual Installation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Create test directory\nmkdir -p /tmp/test-framework-install\ncd /tmp/test-framework-install\n\n# Test installing kanban framework\npython3 /Users/rms/Documents/projects/ai-dev-kit/\"packages/frameworks/workflow-mgt/scripts/install_package_from_release.py\" \\\n    kanban 2.1.0 \\\n    --install-dir ./frameworks \\\n    --repo RMS-Ltd/ai-dev-kit \\\n    --verbose\n\n# Verify installation\nls -la frameworks/kanban-v2.1.0/\ncat frameworks/kanban-v2.1.0/MANIFEST.json\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "test-automated-installation",
      children: "Test Automated Installation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Test with installation script\npython3 \"packages/frameworks/workflow-mgt/scripts/install_package_from_release.py\" \\\n    \"workflow mgt\" 2.1.3 \\\n    --install-dir ./test-install \\\n    --verbose\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "step-4-verify-package-integrity",
      children: "Step 4: Verify Package Integrity"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "verify-hash-files",
      children: "Verify Hash Files"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "cd packages/frameworks/dist/packages\n\n# Verify kanban package\nsha256sum -c kanban-v2.1.0.tar.gz.sha256\n\n# Verify all packages\nfor hash_file in *.sha256; do\n    echo \"Verifying: $hash_file\"\n    sha256sum -c \"$hash_file\"\ndone\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "verify-package-contents",
      children: "Verify Package Contents"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Extract and inspect a package\ncd /tmp\ntar -xzf /path/to/kanban-v2.1.0.tar.gz\nls -la kanban-v2.1.0/\ncat kanban-v2.1.0/MANIFEST.json\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "step-5-update-documentation",
      children: "Step 5: Update Documentation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "After packages are uploaded, update:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "README.md"
        }), " - Add package installation instructions"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Framework Installation Guide"
        }), " - Add GitHub Releases installation method"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Package Installation Guide"
        }), " - Verify links to GitHub Releases"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Release Notes"
        }), " - Document package availability"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "verification-checklist",
      children: "Verification Checklist"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      className: "contains-task-list",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "All 5 packages built successfully"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "All hash files generated and valid"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "All packages uploaded to GitHub Releases"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Git tags created and pushed"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Installation script tested (manual download)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Hash verification tested"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Package contents verified (MANIFEST.json, files)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Documentation updated"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "GitHub Releases page accessible and shows all packages"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "troubleshooting",
      children: "Troubleshooting"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "build-issues",
      children: "Build Issues"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Error: Framework not found"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Check framework name matches directory name (spaces matter)"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "--framework-dir"
        }), " to specify exact path"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Error: No files found"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Check framework directory structure"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Verify README.md exists"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "upload-issues",
      children: "Upload Issues"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Error: Release not found"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Create Git tag first: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "git tag -a <tag> -m \"Release message\""
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Push tags: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "git push origin --tags"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Error: Authentication failed"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Verify GITHUB_TOKEN is set correctly"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Check token has ", (0,jsx_runtime.jsx)(_components.code, {
          children: "repo"
        }), " scope"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "--token"
        }), " flag to pass token directly"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "installation-issues",
      children: "Installation Issues"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Error: Package not found"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Verify tag name matches release tag"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Check GitHub Releases page for correct tag"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Verify framework name normalization (spaces -> hyphens)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "next-steps-after-completion",
      children: "Next Steps After Completion"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Announce package availability"
        }), " in project documentation"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Update installation guides"
        }), " with GitHub Releases method"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Create release notes"
        }), " for each framework package"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Set up CI/CD"
        }), " for automated package building (future)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Monitor downloads"
        }), " and gather feedback"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "related-documents",
      children: "Related Documents"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Package Management Implementation Plan: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/Analysis/package-management-implementation-plan.md"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Package Installation Guide: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "packages/frameworks/workflow-mgt/docs/PACKAGE_INSTALLATION_GUIDE.md"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Build Package Script: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "packages/frameworks/workflow-mgt/scripts/build_package.py"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Upload Script: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "packages/frameworks/workflow-mgt/scripts/upload_to_github_release.py"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Installation Script: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "packages/frameworks/workflow-mgt/scripts/install_package_from_release.py"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Status:"
      }), " Ready for execution", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Estimated Time:"
      }), " 30-60 minutes (build + upload + test)"]
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