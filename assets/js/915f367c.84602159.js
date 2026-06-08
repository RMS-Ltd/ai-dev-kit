"use strict";
(self["webpackChunkportal"] = self["webpackChunkportal"] || []).push([["3870"], {
6274(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_documentation_user_docs_apple_platform_setup_guide_md_915_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-documentation-user-docs-apple-platform-setup-guide-md-915.json
var site_docs_documentation_user_docs_apple_platform_setup_guide_md_915_namespaceObject = JSON.parse('{"id":"documentation/user-docs/apple-platform-setup-guide","title":"Apple Platform Setup Guide","description":"Purpose: Setup guide for ai-dev-kit on Apple platforms (macOS, iOS) to resolve Apple SDK license blocking issues.","source":"@site/../docs/documentation/user-docs/apple-platform-setup-guide.md","sourceDirName":"documentation/user-docs","slug":"/documentation/user-docs/apple-platform-setup-guide","permalink":"/ai-dev-kit/docs/documentation/user-docs/apple-platform-setup-guide","draft":false,"unlisted":false,"editUrl":"https://github.com/RMS-Ltd/ai-dev-kit/tree/main/docs/../docs/documentation/user-docs/apple-platform-setup-guide.md","tags":[],"version":"current","frontMatter":{},"sidebar":"docsSidebar","previous":{"title":"Adopter External Resource Dependency Tracking","permalink":"/ai-dev-kit/docs/documentation/user-docs/adopter-external-resource-dependency-tracking"},"next":{"title":"ai-dev-kit CLI Configuration Guide","permalink":"/ai-dev-kit/docs/documentation/user-docs/cli-configuration-guide"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(4848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(8453);
;// CONCATENATED MODULE: ../docs/documentation/user-docs/apple-platform-setup-guide.md


const frontMatter = {};
const contentTitle = 'Apple Platform Setup Guide';

const assets = {

};



const toc = [{
  "value": "Scope (greenfield vs brownfield)",
  "id": "scope-greenfield-vs-brownfield",
  "level": 3
}, {
  "value": "Quick Start",
  "id": "quick-start",
  "level": 2
}, {
  "value": "1. Install Xcode Command Line Tools",
  "id": "1-install-xcode-command-line-tools",
  "level": 3
}, {
  "value": "2. Accept Xcode License",
  "id": "2-accept-xcode-license",
  "level": 3
}, {
  "value": "3. Set Xcode Path (if needed)",
  "id": "3-set-xcode-path-if-needed",
  "level": 3
}, {
  "value": "4. Verify Installation",
  "id": "4-verify-installation",
  "level": 3
}, {
  "value": "Detailed Setup Guide",
  "id": "detailed-setup-guide",
  "level": 2
}, {
  "value": "Prerequisites",
  "id": "prerequisites",
  "level": 3
}, {
  "value": "Step 1: Install Xcode Command Line Tools",
  "id": "step-1-install-xcode-command-line-tools",
  "level": 3
}, {
  "value": "Method 1: Command Line Installation (Recommended)",
  "id": "method-1-command-line-installation-recommended",
  "level": 4
}, {
  "value": "Method 2: Manual Installation",
  "id": "method-2-manual-installation",
  "level": 4
}, {
  "value": "Step 2: Accept Xcode License Agreement",
  "id": "step-2-accept-xcode-license-agreement",
  "level": 3
}, {
  "value": "Step 3: Configure Developer Directory",
  "id": "step-3-configure-developer-directory",
  "level": 3
}, {
  "value": "Step 4: Verify Installation",
  "id": "step-4-verify-installation",
  "level": 3
}, {
  "value": "Troubleshooting Common Issues",
  "id": "troubleshooting-common-issues",
  "level": 2
}, {
  "value": "Issue: &quot;xcode-select: error: command line tools are already installed&quot;",
  "id": "issue-xcode-select-error-command-line-tools-are-already-installed",
  "level": 3
}, {
  "value": "Issue: &quot;xcode-select: error: tool &#39;xcodebuild&#39; requires Xcode&quot;",
  "id": "issue-xcode-select-error-tool-xcodebuild-requires-xcode",
  "level": 3
}, {
  "value": "Issue: &quot;Agreeing to the Xcode/iOS license requires admin privileges&quot;",
  "id": "issue-agreeing-to-the-xcodeios-license-requires-admin-privileges",
  "level": 3
}, {
  "value": "Issue: Git operations fail with &quot;developer tools not found&quot;",
  "id": "issue-git-operations-fail-with-developer-tools-not-found",
  "level": 3
}, {
  "value": "Issue: &quot;Could not find developer directory&quot;",
  "id": "issue-could-not-find-developer-directory",
  "level": 3
}, {
  "value": "Alternative Installation Methods",
  "id": "alternative-installation-methods",
  "level": 2
}, {
  "value": "Method 1: Use Package Manager Backend",
  "id": "method-1-use-package-manager-backend",
  "level": 3
}, {
  "value": "Method 2: Manual Framework Installation",
  "id": "method-2-manual-framework-installation",
  "level": 3
}, {
  "value": "Environment Variables",
  "id": "environment-variables",
  "level": 2
}, {
  "value": "Verification Test",
  "id": "verification-test",
  "level": 2
}, {
  "value": "iOS Development Considerations",
  "id": "ios-development-considerations",
  "level": 2
}, {
  "value": "Additional Requirements",
  "id": "additional-requirements",
  "level": 3
}, {
  "value": "iOS-Specific Setup",
  "id": "ios-specific-setup",
  "level": 3
}, {
  "value": "Corporate/Enterprise Environments",
  "id": "corporateenterprise-environments",
  "level": 2
}, {
  "value": "Common Issues",
  "id": "common-issues",
  "level": 3
}, {
  "value": "Solutions",
  "id": "solutions",
  "level": 3
}, {
  "value": "Performance Optimization",
  "id": "performance-optimization",
  "level": 2
}, {
  "value": "Optimize Git Operations on macOS",
  "id": "optimize-git-operations-on-macos",
  "level": 3
}, {
  "value": "Reduce Xcode Indexing",
  "id": "reduce-xcode-indexing",
  "level": 3
}, {
  "value": "Getting Help",
  "id": "getting-help",
  "level": 2
}, {
  "value": "Check System Information",
  "id": "check-system-information",
  "level": 3
}, {
  "value": "Collect Debug Information",
  "id": "collect-debug-information",
  "level": 3
}, {
  "value": "Report Issues",
  "id": "report-issues",
  "level": 3
}, {
  "value": "Related Documentation",
  "id": "related-documentation",
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
        id: "apple-platform-setup-guide",
        children: "Apple Platform Setup Guide"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Purpose:"
      }), " Setup guide for ai-dev-kit on Apple platforms (macOS, iOS) to resolve Apple SDK license blocking issues."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Related Issue:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/docs/kanban/fr-br/BR-040-apple-sdk-license-blocking-issue.md",
        children: "BR-040"
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Task:"
      }), " ", (0,jsx_runtime.jsxs)(_components.a, {
        href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/docs/kanban/epics/epic-06/story-06-feature-requests/T03-apple-sdk-license-blocking-issue.md",
        children: ["E6:S06", ":T03"]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "scope-greenfield-vs-brownfield",
      children: "Scope (greenfield vs brownfield)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["This guide addresses ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "platform tooling"
      }), " on Apple OSes. For the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "greenfield framework install path"
      }), " (FR-080), follow ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/INSTALL_IN_YOUR_PROJECT.md",
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "INSTALL_IN_YOUR_PROJECT.md"
        })
      }), " after platform prerequisites; see ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/docs/architecture/standards-and-adrs/ADR-003-greenfield-vs-brownfield-adoption.md",
        children: "ADR-003"
      }), ", ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/docs/kanban/fr-br/FR-081-brownfield-modular-adopter-integration.md",
        children: "FR-081"
      }), ", ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/docs/implementation-cycles/IPW-E6S09T01-greenfield-installation-fr080.md",
        children: "IPW-E6S9T1"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "quick-start",
      children: "Quick Start"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "If you're experiencing Apple SDK license blocking issues on macOS, follow these steps:"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1-install-xcode-command-line-tools",
      children: "1. Install Xcode Command Line Tools"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "xcode-select --install\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "2-accept-xcode-license",
      children: "2. Accept Xcode License"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "sudo xcodebuild -license accept\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "3-set-xcode-path-if-needed",
      children: "3. Set Xcode Path (if needed)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "sudo xcode-select --switch /Applications/Xcode.app/Contents/Developer\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "4-verify-installation",
      children: "4. Verify Installation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "xcode-select --print-path\ngit --version\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "detailed-setup-guide",
      children: "Detailed Setup Guide"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "prerequisites",
      children: "Prerequisites"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "macOS 10.14 or later"
        }), " (Mojave or newer recommended)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Administrator access"
        }), " (for Xcode tools installation)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Internet connection"
        }), " (for downloading Xcode components)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "step-1-install-xcode-command-line-tools",
      children: "Step 1: Install Xcode Command Line Tools"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The Xcode Command Line Tools include essential development tools that Git and other development utilities depend on."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "method-1-command-line-installation-recommended",
      children: "Method 1: Command Line Installation (Recommended)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "xcode-select --install\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This will open a software update dialog. Click \"Install\" and follow the prompts."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "method-2-manual-installation",
      children: "Method 2: Manual Installation"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Open ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "App Store"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Search for ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "\"Xcode\""
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Click \"Get\" to install Xcode (full IDE)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "After installation, open Xcode and accept the license agreement"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "step-2-accept-xcode-license-agreement",
      children: "Step 2: Accept Xcode License Agreement"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "After installing Xcode Command Line Tools, you must accept the license agreement:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "sudo xcodebuild -license accept\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This will display the license terms and automatically accept them."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Alternative: Manual Acceptance"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "sudo xcodebuild -license\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Read through the license and type \"agree\" when prompted."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "step-3-configure-developer-directory",
      children: "Step 3: Configure Developer Directory"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Set the active developer directory to ensure tools can find Xcode:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "sudo xcode-select --switch /Applications/Xcode.app/Contents/Developer\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "For Command Line Tools Only:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "sudo xcode-select --switch /Library/Developer/CommandLineTools\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "step-4-verify-installation",
      children: "Step 4: Verify Installation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Verify that everything is properly configured:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Check Xcode path\nxcode-select --print-path\n\n# Check Git installation\ngit --version\n\n# Test Git functionality\ngit status\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Expected output:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "/Applications/Xcode.app/Contents/Developer\ngit version 2.x.x\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "troubleshooting-common-issues",
      children: "Troubleshooting Common Issues"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "issue-xcode-select-error-command-line-tools-are-already-installed",
      children: "Issue: \"xcode-select: error: command line tools are already installed\""
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution:"
      }), " This is actually good - the tools are already installed. Proceed to step 2."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "issue-xcode-select-error-tool-xcodebuild-requires-xcode",
      children: "Issue: \"xcode-select: error: tool 'xcodebuild' requires Xcode\""
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution:"
      }), " Install full Xcode from App Store or use Command Line Tools path:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "sudo xcode-select --switch /Library/Developer/CommandLineTools\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "issue-agreeing-to-the-xcodeios-license-requires-admin-privileges",
      children: "Issue: \"Agreeing to the Xcode/iOS license requires admin privileges\""
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution:"
      }), " Use ", (0,jsx_runtime.jsx)(_components.code, {
        children: "sudo"
      }), " or run as administrator:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "sudo xcodebuild -license accept\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "issue-git-operations-fail-with-developer-tools-not-found",
      children: "Issue: Git operations fail with \"developer tools not found\""
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution:"
      }), " Reinstall Command Line Tools:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Remove existing tools\nsudo rm -rf /Library/Developer/CommandLineTools\n\n# Reinstall\nxcode-select --install\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "issue-could-not-find-developer-directory",
      children: "Issue: \"Could not find developer directory\""
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution:"
      }), " Set the correct path:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# For full Xcode installation\nsudo xcode-select --switch /Applications/Xcode.app/Contents/Developer\n\n# For Command Line Tools only\nsudo xcode-select --switch /Library/Developer/CommandLineTools\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "alternative-installation-methods",
      children: "Alternative Installation Methods"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "method-1-use-package-manager-backend",
      children: "Method 1: Use Package Manager Backend"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "If Git operations continue to fail, use package managers instead:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Install via pip\nai-dev-kit install framework-name --backend pip\n\n# Install via npm (if available)\nai-dev-kit install framework-name --backend npm\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "method-2-manual-framework-installation",
      children: "Method 2: Manual Framework Installation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Download frameworks directly and install manually:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Navigate to ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://github.com/RMS-Ltd/ai-dev-kit/releases",
          children: "ai-dev-kit releases"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Download the desired framework package"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Extract to your project's ", (0,jsx_runtime.jsx)(_components.code, {
          children: "frameworks/"
        }), " directory"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Update ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".ai-dev-kit.yaml"
        }), " configuration manually"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "environment-variables",
      children: "Environment Variables"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Some users may need to set environment variables:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Add to ~/.zshrc or ~/.bashrc\nexport DEVELOPER_DIR=/Applications/Xcode.app/Contents/Developer\nexport PATH=\"/Applications/Xcode.app/Contents/Developer/usr/bin:$PATH\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Reload shell:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "source ~/.zshrc  # or ~/.bashrc\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "verification-test",
      children: "Verification Test"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Test your ai-dev-kit installation:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Test CLI functionality\nai-dev-kit --help\n\n# Test framework installation (dry run)\nai-dev-kit install numbering-versioning --dry-run\n\n# Test actual installation\nai-dev-kit install numbering-versioning --backend pip\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "ios-development-considerations",
      children: "iOS Development Considerations"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "If you're doing iOS development with ai-dev-kit:"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "additional-requirements",
      children: "Additional Requirements"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Full Xcode Installation"
        }), " (not just Command Line Tools)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "iOS SDK"
        }), " (included with Xcode)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "iOS Simulator"
        }), " (included with Xcode)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "ios-specific-setup",
      children: "iOS-Specific Setup"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Install full Xcode for iOS development\n# Download from App Store, then:\nsudo xcodebuild -license accept\nsudo xcode-select --switch /Applications/Xcode.app/Contents/Developer\n\n# Verify iOS SDKs are available\nxcodebuild -showsdks\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "corporateenterprise-environments",
      children: "Corporate/Enterprise Environments"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "In corporate environments, you may encounter additional restrictions:"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "common-issues",
      children: "Common Issues"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Firewall restrictions"
        }), " blocking downloads"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Admin rights"
        }), " limitations"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Corporate software policies"
        }), " prohibiting Xcode"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "solutions",
      children: "Solutions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Contact IT Department"
        }), " for Xcode installation assistance"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Use pre-approved development environments"
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Consider alternative backends"
        }), " (pip/npm) that don't require Xcode"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Use containerized development"
        }), " with pre-configured tools"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "performance-optimization",
      children: "Performance Optimization"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "optimize-git-operations-on-macos",
      children: "Optimize Git Operations on macOS"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Configure Git for better performance on macOS\ngit config --global core.preloadindex true\ngit config --global core.fscache true\ngit config --global gc.auto 256\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "reduce-xcode-indexing",
      children: "Reduce Xcode Indexing"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "If Xcode is slowing down your system:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Disable indexing for specific directories\nsudo mdutil -i off /path/to/directory\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "getting-help",
      children: "Getting Help"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "If you continue to experience issues:"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "check-system-information",
      children: "Check System Information"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# macOS version\nsw_vers\n\n# Xcode version\nxcodebuild -version\n\n# Git configuration\ngit config --list\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "collect-debug-information",
      children: "Collect Debug Information"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Create diagnostic report\nai-dev-kit status --debug > ai-dev-kit-debug.log\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "report-issues",
      children: "Report Issues"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Include the following information when reporting issues:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "macOS version"
        }), " (", (0,jsx_runtime.jsx)(_components.code, {
          children: "sw_vers"
        }), ")"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Xcode version"
        }), " (", (0,jsx_runtime.jsx)(_components.code, {
          children: "xcodebuild -version"
        }), ")"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Git version"
        }), " (", (0,jsx_runtime.jsx)(_components.code, {
          children: "git --version"
        }), ")"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Exact error messages"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Steps to reproduce"
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Debug log"
        }), " (if available)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "related-documentation",
      children: "Related Documentation"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/documentation/user-docs/framework-dependency-installation-guide",
          children: "ai-dev-kit Installation Guide"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/documentation/user-docs/framework-dependency-cli-reference",
          children: "Framework Dependency CLI Reference"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/documentation/user-docs/framework-dependency-troubleshooting-guide",
          children: "Framework dependency troubleshooting"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Last Updated:"
      }), " 2026-03-10", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Version:"
      }), " 1.0", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Status:"
      }), " Ready for Review"]
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
8453(__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  R: () => (useMDXComponents),
  x: () => (MDXProvider)
});
/* import */ var react__rspack_import_0 = __webpack_require__(6540);
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