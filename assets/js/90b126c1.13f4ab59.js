"use strict";
(self["webpackChunkportal"] = self["webpackChunkportal"] || []).push([["10624"], {
81299(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_documentation_user_docs_cli_publishing_guide_md_90b_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-documentation-user-docs-cli-publishing-guide-md-90b.json
var site_docs_documentation_user_docs_cli_publishing_guide_md_90b_namespaceObject = JSON.parse('{"id":"documentation/user-docs/cli-publishing-guide","title":"ai-dev-kit CLI Publishing Guide","description":"Status: Active","source":"@site/../docs/documentation/user-docs/cli-publishing-guide.md","sourceDirName":"documentation/user-docs","slug":"/documentation/user-docs/cli-publishing-guide","permalink":"/ai-dev-kit/docs/documentation/user-docs/cli-publishing-guide","draft":false,"unlisted":false,"editUrl":"https://github.com/RMS-Ltd/ai-dev-kit/tree/main/docs/../docs/documentation/user-docs/cli-publishing-guide.md","tags":[],"version":"current","frontMatter":{"lifecycle":"evergreen","ttl_days":null,"created_at":"2026-01-03T00:00:00.000Z","expires_at":null,"housekeeping_policy":"keep"},"sidebar":"docsSidebar","previous":{"title":"ai-dev-kit CLI Configuration Guide","permalink":"/ai-dev-kit/docs/documentation/user-docs/cli-configuration-guide"},"next":{"title":"ai-dev-kit CLI Troubleshooting Guide","permalink":"/ai-dev-kit/docs/documentation/user-docs/cli-troubleshooting-guide"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ../docs/documentation/user-docs/cli-publishing-guide.md


const frontMatter = {
	lifecycle: 'evergreen',
	ttl_days: null,
	created_at: new Date('2026-01-03T00:00:00.000Z'),
	expires_at: null,
	housekeeping_policy: 'keep'
};
const contentTitle = 'ai-dev-kit CLI Publishing Guide';

const assets = {

};



const toc = [{
  "value": "Overview",
  "id": "overview",
  "level": 2
}, {
  "value": "Scope (greenfield vs brownfield)",
  "id": "scope-greenfield-vs-brownfield",
  "level": 3
}, {
  "value": "Prerequisites",
  "id": "prerequisites",
  "level": 2
}, {
  "value": "Required Tools",
  "id": "required-tools",
  "level": 3
}, {
  "value": "PyPI Accounts",
  "id": "pypi-accounts",
  "level": 3
}, {
  "value": "Building the Package",
  "id": "building-the-package",
  "level": 2
}, {
  "value": "1. Install Build Tools",
  "id": "1-install-build-tools",
  "level": 3
}, {
  "value": "2. Update Version",
  "id": "2-update-version",
  "level": 3
}, {
  "value": "3. Build Distribution",
  "id": "3-build-distribution",
  "level": 3
}, {
  "value": "Testing the Package",
  "id": "testing-the-package",
  "level": 2
}, {
  "value": "1. Test Installation",
  "id": "1-test-installation",
  "level": 3
}, {
  "value": "2. Test on Test PyPI",
  "id": "2-test-on-test-pypi",
  "level": 3
}, {
  "value": "3. Run Test Suite",
  "id": "3-run-test-suite",
  "level": 3
}, {
  "value": "Publishing to PyPI",
  "id": "publishing-to-pypi",
  "level": 2
}, {
  "value": "1. Prepare for Release",
  "id": "1-prepare-for-release",
  "level": 3
}, {
  "value": "2. Upload to PyPI",
  "id": "2-upload-to-pypi",
  "level": 3
}, {
  "value": "3. Verify Publication",
  "id": "3-verify-publication",
  "level": 3
}, {
  "value": "Package Configuration",
  "id": "package-configuration",
  "level": 2
}, {
  "value": "setup.py",
  "id": "setuppy",
  "level": 3
}, {
  "value": "MANIFEST.in",
  "id": "manifestin",
  "level": 3
}, {
  "value": "Version Management",
  "id": "version-management",
  "level": 2
}, {
  "value": "Version Format",
  "id": "version-format",
  "level": 3
}, {
  "value": "Updating Version",
  "id": "updating-version",
  "level": 3
}, {
  "value": "Release Checklist",
  "id": "release-checklist",
  "level": 2
}, {
  "value": "Pre-Release",
  "id": "pre-release",
  "level": 3
}, {
  "value": "Release",
  "id": "release",
  "level": 3
}, {
  "value": "Post-Release",
  "id": "post-release",
  "level": 3
}, {
  "value": "Troubleshooting",
  "id": "troubleshooting",
  "level": 2
}, {
  "value": "Build Errors",
  "id": "build-errors",
  "level": 3
}, {
  "value": "Upload Errors",
  "id": "upload-errors",
  "level": 3
}, {
  "value": "Installation Errors",
  "id": "installation-errors",
  "level": 3
}, {
  "value": "Best Practices",
  "id": "best-practices",
  "level": 2
}, {
  "value": "1. Semantic Versioning",
  "id": "1-semantic-versioning",
  "level": 3
}, {
  "value": "2. Test Before Publishing",
  "id": "2-test-before-publishing",
  "level": 3
}, {
  "value": "3. Changelog",
  "id": "3-changelog",
  "level": 3
}, {
  "value": "4. Documentation",
  "id": "4-documentation",
  "level": 3
}, {
  "value": "5. Code Quality",
  "id": "5-code-quality",
  "level": 3
}, {
  "value": "References",
  "id": "references",
  "level": 2
}, {
  "value": "Support",
  "id": "support",
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
        id: "ai-dev-kit-cli-publishing-guide",
        children: "ai-dev-kit CLI Publishing Guide"
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
      }), " Story 7 - ai-dev-kit CLI Tool", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Task:"
      }), " E6:S07", ":T13", " - Testing, validation, and PyPI packaging"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "overview",
      children: "Overview"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["This guide explains how to build, test, and publish the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ai-dev-kit"
      }), " CLI tool to PyPI."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "scope-greenfield-vs-brownfield",
      children: "Scope (greenfield vs brownfield)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["For ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "adopters"
      }), " installing frameworks into a project (distinct from CLI maintainer publishing), see ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/INSTALL_IN_YOUR_PROJECT.md",
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "INSTALL_IN_YOUR_PROJECT.md"
        })
      }), ", ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/implementation-cycles/IPW-E6S09T01-greenfield-installation-fr080",
        children: "IPW-E6S9T1"
      }), ", ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/architecture/standards-and-adrs/ADR-003-greenfield-vs-brownfield-adoption",
        children: "ADR-003"
      }), ", ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/project-management/kanban/fr-br/FR-081-brownfield-modular-adopter-integration",
        children: "FR-081"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "prerequisites",
      children: "Prerequisites"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "required-tools",
      children: "Required Tools"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Python 3.11+"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "pip"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "twine (for uploading to PyPI)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "build (for building packages)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pypi-accounts",
      children: "PyPI Accounts"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Test PyPI:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://test.pypi.org/",
          children: "https://test.pypi.org/"
        }), " (for testing)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Production PyPI:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://pypi.org/",
          children: "https://pypi.org/"
        }), " (for releases)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "building-the-package",
      children: "Building the Package"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1-install-build-tools",
      children: "1. Install Build Tools"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "pip install build twine\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "2-update-version",
      children: "2. Update Version"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Update version in ", (0,jsx_runtime.jsx)(_components.code, {
        children: "cli/__init__.py"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "__version__ = \"0.1.0\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "3-build-distribution",
      children: "3. Build Distribution"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Build source distribution and wheel\npython -m build\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This creates:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "dist/ai-dev-kit-0.1.0.tar.gz"
        }), " (source distribution)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "dist/ai_dev_kit-0.1.0-py3-none-any.whl"
        }), " (wheel)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "testing-the-package",
      children: "Testing the Package"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1-test-installation",
      children: "1. Test Installation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Install from local build\npip install dist/ai_dev_kit-0.1.0-py3-none-any.whl\n\n# Or from source distribution\npip install dist/ai-dev-kit-0.1.0.tar.gz\n\n# Verify installation\nai-dev-kit --version\nai-dev-kit --help\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "2-test-on-test-pypi",
      children: "2. Test on Test PyPI"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Upload to Test PyPI\ntwine upload --repository testpypi dist/*\n\n# Install from Test PyPI\npip install --index-url https://test.pypi.org/simple/ ai-dev-kit\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "3-run-test-suite",
      children: "3. Run Test Suite"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Run all tests\npytest\n\n# Run with coverage\npytest --cov=cli --cov-report=html\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "publishing-to-pypi",
      children: "Publishing to PyPI"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1-prepare-for-release",
      children: "1. Prepare for Release"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      className: "contains-task-list",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Update version number"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Update CHANGELOG.md"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Run full test suite"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Verify all tests pass"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Check code quality (black, flake8, mypy)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Build package"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Test installation locally"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "2-upload-to-pypi",
      children: "2. Upload to PyPI"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Upload to production PyPI\ntwine upload dist/*\n\n# You'll be prompted for PyPI credentials\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "3-verify-publication",
      children: "3. Verify Publication"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Install from PyPI\npip install ai-dev-kit\n\n# Verify installation\nai-dev-kit --version\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "package-configuration",
      children: "Package Configuration"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "setuppy",
      children: "setup.py"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "setup.py"
      }), " file contains package metadata:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "name:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "ai-dev-kit"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "version:"
        }), " Read from ", (0,jsx_runtime.jsx)(_components.code, {
          children: "cli/__init__.py"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "description:"
        }), " Package description"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "long_description:"
        }), " README.md content"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "entry_points:"
        }), " CLI command registration"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "classifiers:"
        }), " PyPI classifiers"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "manifestin",
      children: "MANIFEST.in"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Controls which files are included in the package:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "include README.md\ninclude LICENSE\ninclude CHANGELOG.md\nrecursive-include cli *.py\nrecursive-exclude * __pycache__\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "version-management",
      children: "Version Management"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "version-format",
      children: "Version Format"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Use semantic versioning: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "MAJOR.MINOR.PATCH"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "MAJOR:"
        }), " Breaking changes"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "MINOR:"
        }), " New features (backward compatible)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "PATCH:"
        }), " Bug fixes"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "updating-version",
      children: "Updating Version"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Update ", (0,jsx_runtime.jsx)(_components.code, {
            children: "cli/__init__.py"
          }), ":"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-python",
            children: "__version__ = \"0.2.0\"\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Update ", (0,jsx_runtime.jsx)(_components.code, {
            children: "setup.py"
          }), " (if using hardcoded version)"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Update CHANGELOG.md"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Commit and tag:"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-bash",
            children: "git commit -m \"Bump version to 0.2.0\"\ngit tag v0.2.0\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "release-checklist",
      children: "Release Checklist"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pre-release",
      children: "Pre-Release"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      className: "contains-task-list",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "All tests passing"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Code quality checks passing"]
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
        }), " ", "CHANGELOG.md updated"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Version number updated"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Package builds successfully"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Local installation tested"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "release",
      children: "Release"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      className: "contains-task-list",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Build package (", (0,jsx_runtime.jsx)(_components.code, {
          children: "python -m build"
        }), ")"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Test on Test PyPI"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Upload to production PyPI"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Verify installation from PyPI"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Create GitHub release"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Announce release"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "post-release",
      children: "Post-Release"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      className: "contains-task-list",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Monitor for issues"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Update documentation if needed"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Plan next release"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "troubleshooting",
      children: "Troubleshooting"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "build-errors",
      children: "Build Errors"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Error: \"No module named 'build'\""
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "pip install build\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Error: \"No files found matching...\""
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Check ", (0,jsx_runtime.jsx)(_components.code, {
          children: "MANIFEST.in"
        }), " includes required files"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Verify file paths are correct"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "upload-errors",
      children: "Upload Errors"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Error: \"HTTPError: 400 Client Error\""
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Check package name is available"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Verify version number is unique"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Check package metadata is valid"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Error: \"HTTPError: 401 Client Error\""
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Verify PyPI credentials"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Check API token is valid"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "installation-errors",
      children: "Installation Errors"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Error: \"No module named 'cli'\""
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Check package structure"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Verify ", (0,jsx_runtime.jsx)(_components.code, {
          children: "__init__.py"
        }), " files exist"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Check ", (0,jsx_runtime.jsx)(_components.code, {
          children: "setup.py"
        }), " package configuration"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "best-practices",
      children: "Best Practices"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1-semantic-versioning",
      children: "1. Semantic Versioning"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Follow semantic versioning strictly:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "0.1.0"
        }), " → ", (0,jsx_runtime.jsx)(_components.code, {
          children: "0.1.1"
        }), " (patch: bug fix)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "0.1.1"
        }), " → ", (0,jsx_runtime.jsx)(_components.code, {
          children: "0.2.0"
        }), " (minor: new feature)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "0.2.0"
        }), " → ", (0,jsx_runtime.jsx)(_components.code, {
          children: "1.0.0"
        }), " (major: breaking change)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "2-test-before-publishing",
      children: "2. Test Before Publishing"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Always test on Test PyPI first:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "twine upload --repository testpypi dist/*\npip install --index-url https://test.pypi.org/simple/ ai-dev-kit\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "3-changelog",
      children: "3. Changelog"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Keep CHANGELOG.md up to date:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Document all changes"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Group by type (Added, Changed, Fixed, Removed)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Include version and date"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "4-documentation",
      children: "4. Documentation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Ensure documentation is complete:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "README.md"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "CLI reference"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Usage examples"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Installation guide"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "5-code-quality",
      children: "5. Code Quality"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Run quality checks before release:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "black cli/\nflake8 cli/\nmypy cli/\npytest\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "references",
      children: "References"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "https://packaging.python.org/",
          children: "PyPI Documentation"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "https://twine.readthedocs.io/",
          children: "Twine Documentation"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "https://packaging.python.org/guides/",
          children: "Python Packaging Guide"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "https://semver.org/",
          children: "Semantic Versioning"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "support",
      children: "Support"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "For issues with publishing:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Check ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://pypi.org/help/",
          children: "PyPI Help"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Review ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://packaging.python.org/tutorials/packaging-projects/#troubleshooting",
          children: "Python Packaging Troubleshooting"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Open an issue on ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://github.com/RMS-Ltd/ai-dev-kit/issues",
          children: "GitHub"
        })]
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