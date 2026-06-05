"use strict";
(self["webpackChunkportal"] = self["webpackChunkportal"] || []).push([["72385"], {
19348(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_maintenance_upload_packages_md_7b0_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-maintenance-upload-packages-md-7b0.json
var site_docs_maintenance_upload_packages_md_7b0_namespaceObject = JSON.parse('{"id":"maintenance/UPLOAD_PACKAGES","title":"Upload Framework Packages to GitHub Releases","description":"Prerequisites","source":"@site/../docs/maintenance/UPLOAD_PACKAGES.md","sourceDirName":"maintenance","slug":"/maintenance/UPLOAD_PACKAGES","permalink":"/ai-dev-kit/docs/maintenance/UPLOAD_PACKAGES","draft":false,"unlisted":false,"editUrl":"https://github.com/RMS-Ltd/ai-dev-kit/tree/main/docs/../docs/maintenance/UPLOAD_PACKAGES.md","tags":[],"version":"current","frontMatter":{},"sidebar":"docsSidebar","previous":{"title":"Maintainer Runbooks","permalink":"/ai-dev-kit/docs/maintenance/"},"next":{"title":"Book repository documentation scope","permalink":"/ai-dev-kit/docs/maintenance/book-repo-docs-scope"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ../docs/maintenance/UPLOAD_PACKAGES.md


const frontMatter = {};
const contentTitle = 'Upload Framework Packages to GitHub Releases';

const assets = {

};



const toc = [{
  "value": "Prerequisites",
  "id": "prerequisites",
  "level": 2
}, {
  "value": "Method 1: Upload All Packages at Once (Recommended)",
  "id": "method-1-upload-all-packages-at-once-recommended",
  "level": 2
}, {
  "value": "Dry Run (Test First)",
  "id": "dry-run-test-first",
  "level": 3
}, {
  "value": "Method 2: Upload Individual Packages",
  "id": "method-2-upload-individual-packages",
  "level": 2
}, {
  "value": "Method 3: Bash Script (All at Once)",
  "id": "method-3-bash-script-all-at-once",
  "level": 2
}, {
  "value": "Verification",
  "id": "verification",
  "level": 2
}, {
  "value": "Troubleshooting",
  "id": "troubleshooting",
  "level": 2
}, {
  "value": "Error: Release not found",
  "id": "error-release-not-found",
  "level": 3
}, {
  "value": "Error: Authentication failed",
  "id": "error-authentication-failed",
  "level": 3
}, {
  "value": "Error: Package not found",
  "id": "error-package-not-found",
  "level": 3
}, {
  "value": "Error: Hash file not found",
  "id": "error-hash-file-not-found",
  "level": 3
}, {
  "value": "Next Steps After Upload",
  "id": "next-steps-after-upload",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
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
        id: "upload-framework-packages-to-github-releases",
        children: "Upload Framework Packages to GitHub Releases"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "prerequisites",
      children: "Prerequisites"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "GitHub Personal Access Token:"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-bash",
            children: "# Set environment variable\nexport GITHUB_TOKEN=your_token_here\n\n# Or pass via --token flag\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Git Tags Created:"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-bash",
            children: "cd /Users/rms/Documents/projects/ai-dev-kit\n\n# Create tags for each framework\ngit tag -a kanban-v2.1.0 -m \"Release kanban framework v2.1.0\"\ngit tag -a workflow-mgt-v2.1.4 -m \"Release workflow mgt framework v2.1.3\"\ngit tag -a numbering-versioning-v2.0.0 -m \"Release numbering & versioning framework v2.0.0\"\ngit tag -a doc-lifecycle-v1.0.0 -m \"Release doc-lifecycle framework v1.0.0\"\ngit tag -a debug-path-v1.0.0 -m \"Release debug-path framework v1.0.0\"\n\n# Push tags to remote\ngit push origin --tags\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Packages Built:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Packages must exist in ", (0,jsx_runtime.jsx)(_components.code, {
              children: "packages/frameworks/dist/packages/"
            })]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Run build script first if not already built"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "method-1-upload-all-packages-at-once-recommended",
      children: "Method 1: Upload All Packages at Once (Recommended)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "cd /Users/rms/Documents/projects/ai-dev-kit\n\n# Set GitHub token\nexport GITHUB_TOKEN=your_token_here\n\n# Upload all packages\npython3 \"packages/frameworks/workflow-mgt/scripts/upload_all_packages.py\" \\\n    --token $GITHUB_TOKEN \\\n    --repo RMS-Ltd/ai-dev-kit \\\n    --verbose\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "dry-run-test-first",
      children: "Dry Run (Test First)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "python3 \"packages/frameworks/workflow-mgt/scripts/upload_all_packages.py\" \\\n    --token $GITHUB_TOKEN \\\n    --dry-run\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "method-2-upload-individual-packages",
      children: "Method 2: Upload Individual Packages"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "cd /Users/rms/Documents/projects/ai-dev-kit\nPACKAGES_DIR=\"packages/frameworks/dist/packages\"\nUPLOAD_SCRIPT=\"packages/frameworks/workflow-mgt/scripts/upload_to_github_release.py\"\nREPO=\"RMS-Ltd/ai-dev-kit\"\n\n# Upload kanban package\npython3 \"$UPLOAD_SCRIPT\" \\\n    \"$PACKAGES_DIR/kanban-v2.1.0.tar.gz\" \\\n    --hash-file \"$PACKAGES_DIR/kanban-v2.1.0.tar.gz.sha256\" \\\n    --tag kanban-v2.1.0 \\\n    --token $GITHUB_TOKEN \\\n    --repo $REPO \\\n    --verbose\n\n# Upload workflow mgt package\npython3 \"$UPLOAD_SCRIPT\" \\\n    \"$PACKAGES_DIR/workflow-mgt-v2.1.4.tar.gz\" \\\n    --hash-file \"$PACKAGES_DIR/workflow-mgt-v2.1.4.tar.gz.sha256\" \\\n    --tag workflow-mgt-v2.1.4 \\\n    --token $GITHUB_TOKEN \\\n    --repo $REPO \\\n    --verbose\n\n# Upload numbering & versioning package\npython3 \"$UPLOAD_SCRIPT\" \\\n    \"$PACKAGES_DIR/numbering-versioning-v2.0.0.tar.gz\" \\\n    --hash-file \"$PACKAGES_DIR/numbering-versioning-v2.0.0.tar.gz.sha256\" \\\n    --tag numbering-versioning-v2.0.0 \\\n    --token $GITHUB_TOKEN \\\n    --repo $REPO \\\n    --verbose\n\n# Upload doc-lifecycle package\npython3 \"$UPLOAD_SCRIPT\" \\\n    \"$PACKAGES_DIR/doc-lifecycle-v1.0.0.tar.gz\" \\\n    --hash-file \"$PACKAGES_DIR/doc-lifecycle-v1.0.0.tar.gz.sha256\" \\\n    --tag doc-lifecycle-v1.0.0 \\\n    --token $GITHUB_TOKEN \\\n    --repo $REPO \\\n    --verbose\n\n# Upload debug-path package\npython3 \"$UPLOAD_SCRIPT\" \\\n    \"$PACKAGES_DIR/debug-path-v1.0.0.tar.gz\" \\\n    --hash-file \"$PACKAGES_DIR/debug-path-v1.0.0.tar.gz.sha256\" \\\n    --tag debug-path-v1.0.0 \\\n    --token $GITHUB_TOKEN \\\n    --repo $REPO \\\n    --verbose\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "method-3-bash-script-all-at-once",
      children: "Method 3: Bash Script (All at Once)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "#!/bin/bash\n# upload_all.sh\n\ncd /Users/rms/Documents/projects/ai-dev-kit\nPACKAGES_DIR=\"packages/frameworks/dist/packages\"\nUPLOAD_SCRIPT=\"packages/frameworks/workflow-mgt/scripts/upload_to_github_release.py\"\nREPO=\"RMS-Ltd/ai-dev-kit\"\n\n# Check token\nif [ -z \"$GITHUB_TOKEN\" ]; then\n    echo \"❌ Error: GITHUB_TOKEN environment variable not set\"\n    exit 1\nfi\n\n# Array of packages: (package_file, tag)\ndeclare -a PACKAGES=(\n    \"kanban-v2.1.0.tar.gz:kanban-v2.1.0\"\n    \"workflow-mgt-v2.1.4.tar.gz:workflow-mgt-v2.1.4\"\n    \"numbering-versioning-v2.0.0.tar.gz:numbering-versioning-v2.0.0\"\n    \"doc-lifecycle-v1.0.0.tar.gz:doc-lifecycle-v1.0.0\"\n    \"debug-path-v1.0.0.tar.gz:debug-path-v1.0.0\"\n)\n\nfor package_info in \"${PACKAGES[@]}\"; do\n    IFS=':' read -r package_file tag <<< \"$package_info\"\n    hash_file=\"${package_file}.sha256\"\n    \n    echo \"━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\"\n    echo \"📤 Uploading: $package_file (tag: $tag)\"\n    \n    if [ ! -f \"$PACKAGES_DIR/$package_file\" ]; then\n        echo \"❌ Package not found: $PACKAGES_DIR/$package_file\"\n        continue\n    fi\n    \n    python3 \"$UPLOAD_SCRIPT\" \\\n        \"$PACKAGES_DIR/$package_file\" \\\n        --hash-file \"$PACKAGES_DIR/$hash_file\" \\\n        --tag \"$tag\" \\\n        --token \"$GITHUB_TOKEN\" \\\n        --repo \"$REPO\" \\\n        --verbose\n    \n    if [ $? -eq 0 ]; then\n        echo \"✅ SUCCESS: $package_file\"\n    else\n        echo \"❌ FAILED: $package_file\"\n    fi\n    echo \"\"\ndone\n\necho \"✅ Upload complete!\"\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Save as ", (0,jsx_runtime.jsx)(_components.code, {
        children: "upload_all.sh"
      }), ", make executable, and run:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "chmod +x upload_all.sh\n./upload_all.sh\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "verification",
      children: "Verification"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "After uploading, verify packages are on GitHub Releases:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Check Releases Page:"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "https://github.com/RMS-Ltd/ai-dev-kit/releases\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Verify Each Release:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Each tag should have a release"
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Each release should have 2 assets: ", (0,jsx_runtime.jsx)(_components.code, {
              children: ".tar.gz"
            }), " and ", (0,jsx_runtime.jsx)(_components.code, {
              children: ".sha256"
            })]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Download and verify hash matches"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Test Installation:"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-bash",
            children: "python3 \"packages/frameworks/workflow-mgt/scripts/install_package_from_release.py\" \\\n    kanban 2.1.0 \\\n    --install-dir /tmp/test-install \\\n    --repo RMS-Ltd/ai-dev-kit \\\n    --verbose\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "troubleshooting",
      children: "Troubleshooting"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "error-release-not-found",
      children: "Error: Release not found"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Solution:"
        }), " Create Git tags first and push them:", "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-bash",
            children: "git tag -a kanban-v2.1.0 -m \"Release kanban v2.1.0\"\ngit push origin kanban-v2.1.0\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "error-authentication-failed",
      children: "Error: Authentication failed"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Solution:"
        }), " Verify token has ", (0,jsx_runtime.jsx)(_components.code, {
          children: "repo"
        }), " scope"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Check token is set: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "echo $GITHUB_TOKEN"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "--token"
        }), " flag to pass directly"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "error-package-not-found",
      children: "Error: Package not found"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Solution:"
        }), " Build packages first:", "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-bash",
            children: "python3 \"packages/frameworks/workflow-mgt/scripts/build_packages_direct.py\"\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "error-hash-file-not-found",
      children: "Error: Hash file not found"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Solution:"
        }), " Hash file is optional but recommended"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Package will upload without hash file (less secure)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "next-steps-after-upload",
      children: "Next Steps After Upload"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Update Documentation:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Add package installation instructions"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Update framework installation guide"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Document GitHub Releases as distribution method"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Announce Availability:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Update README with package installation"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Create release notes for each framework"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Test Installation:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Test manual download and installation"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Test automated installation script"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Verify hash verification works"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Related:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/maintenance/BUILD_PACKAGES",
          children: "BUILD_PACKAGES.md"
        }), " – Build quick start"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/analysis/phase3-package-distribution-plan",
          children: "Phase 3 package distribution plan"
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Upload script: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "packages/frameworks/workflow-mgt/scripts/upload_to_github_release.py"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Installation guide: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "packages/frameworks/workflow-mgt/docs/PACKAGE_INSTALLATION_GUIDE.md"
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