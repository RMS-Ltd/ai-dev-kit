"use strict";
(self["webpackChunkportal"] = self["webpackChunkportal"] || []).push([["51152"], {
47058(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_maintenance_build_and_upload_md_788_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-maintenance-build-and-upload-md-788.json
var site_docs_maintenance_build_and_upload_md_788_namespaceObject = JSON.parse('{"id":"maintenance/BUILD_AND_UPLOAD","title":"Build and Upload Framework Packages - Complete Guide","description":"Step 1: Build All Packages","source":"@site/../docs/maintenance/BUILD_AND_UPLOAD.md","sourceDirName":"maintenance","slug":"/maintenance/BUILD_AND_UPLOAD","permalink":"/ai-dev-kit/docs/maintenance/BUILD_AND_UPLOAD","draft":false,"unlisted":false,"editUrl":"https://github.com/RMS-Ltd/ai-dev-kit/tree/main/docs/../docs/maintenance/BUILD_AND_UPLOAD.md","tags":[],"version":"current","frontMatter":{},"sidebar":"docsSidebar","previous":{"title":"Use Case: [Title]","permalink":"/ai-dev-kit/docs/knowledge/use-cases/templates/DISCOVERED_USE_CASE_TEMPLATE"},"next":{"title":"Build Framework Packages - Quick Start","permalink":"/ai-dev-kit/docs/maintenance/BUILD_PACKAGES"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ../docs/maintenance/BUILD_AND_UPLOAD.md


const frontMatter = {};
const contentTitle = 'Build and Upload Framework Packages - Complete Guide';

const assets = {

};



const toc = [{
  "value": "Step 1: Build All Packages",
  "id": "step-1-build-all-packages",
  "level": 2
}, {
  "value": "Quick Build (Recommended)",
  "id": "quick-build-recommended",
  "level": 3
}, {
  "value": "Alternative: Build Script",
  "id": "alternative-build-script",
  "level": 3
}, {
  "value": "Verify Packages Built",
  "id": "verify-packages-built",
  "level": 3
}, {
  "value": "Step 2: Create Git Tags",
  "id": "step-2-create-git-tags",
  "level": 2
}, {
  "value": "Step 3: Upload to GitHub Releases",
  "id": "step-3-upload-to-github-releases",
  "level": 2
}, {
  "value": "Prerequisites",
  "id": "prerequisites",
  "level": 3
}, {
  "value": "Method 1: Upload All at Once (Recommended)",
  "id": "method-1-upload-all-at-once-recommended",
  "level": 3
}, {
  "value": "Method 2: Upload Individually",
  "id": "method-2-upload-individually",
  "level": 3
}, {
  "value": "Dry Run (Test First)",
  "id": "dry-run-test-first",
  "level": 3
}, {
  "value": "Step 4: Verify Upload",
  "id": "step-4-verify-upload",
  "level": 2
}, {
  "value": "Complete Workflow",
  "id": "complete-workflow",
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
        id: "build-and-upload-framework-packages---complete-guide",
        children: "Build and Upload Framework Packages - Complete Guide"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "step-1-build-all-packages",
      children: "Step 1: Build All Packages"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "quick-build-recommended",
      children: "Quick Build (Recommended)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "cd /Users/rms/Documents/projects/ai-dev-kit\npython3 \"packages/frameworks/workflow-mgt/scripts/build_packages_direct.py\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "alternative-build-script",
      children: "Alternative: Build Script"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "bash packages/frameworks/BUILD_NOW.sh\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "verify-packages-built",
      children: "Verify Packages Built"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "ls -lh packages/frameworks/dist/packages/*.tar.gz\nls -lh packages/frameworks/dist/packages/*.sha256\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "You should see 5 packages and 5 hash files."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "step-2-create-git-tags",
      children: "Step 2: Create Git Tags"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Before uploading, create Git tags for each framework release:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "cd /Users/rms/Documents/projects/ai-dev-kit\n\n# Create tags\ngit tag -a kanban-v2.1.0 -m \"Release kanban framework v2.1.0\"\ngit tag -a workflow-mgt-v2.1.4 -m \"Release workflow mgt framework v2.1.3\"\ngit tag -a numbering-versioning-v2.0.0 -m \"Release numbering & versioning framework v2.0.0\"\ngit tag -a doc-lifecycle-v1.0.0 -m \"Release doc-lifecycle framework v1.0.0\"\ngit tag -a debug-path-v1.0.0 -m \"Release debug-path framework v1.0.0\"\n\n# Push tags to remote\ngit push origin --tags\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "step-3-upload-to-github-releases",
      children: "Step 3: Upload to GitHub Releases"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "prerequisites",
      children: "Prerequisites"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Set GitHub Token:"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-bash",
            children: "export GITHUB_TOKEN=your_token_here\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Verify Token:"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-bash",
            children: "echo $GITHUB_TOKEN\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "method-1-upload-all-at-once-recommended",
      children: "Method 1: Upload All at Once (Recommended)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "cd /Users/rms/Documents/projects/ai-dev-kit\n\n# Using Python script\npython3 \"packages/frameworks/workflow-mgt/scripts/upload_all_packages.py\" \\\n    --token $GITHUB_TOKEN \\\n    --repo RMS-Ltd/ai-dev-kit \\\n    --verbose\n\n# Or using bash script\nchmod +x \"packages/frameworks/workflow-mgt/scripts/UPLOAD_COMMANDS.sh\"\n\"packages/frameworks/workflow-mgt/scripts/UPLOAD_COMMANDS.sh\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "method-2-upload-individually",
      children: "Method 2: Upload Individually"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["See ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/maintenance/UPLOAD_PACKAGES",
        children: "UPLOAD_PACKAGES.md"
      }), " for individual upload commands."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "dry-run-test-first",
      children: "Dry Run (Test First)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Test without uploading\npython3 \"packages/frameworks/workflow-mgt/scripts/upload_all_packages.py\" \\\n    --token $GITHUB_TOKEN \\\n    --dry-run\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "step-4-verify-upload",
      children: "Step 4: Verify Upload"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Check GitHub Releases:"
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
      id: "complete-workflow",
      children: "Complete Workflow"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# 1. Build packages\ncd /Users/rms/Documents/projects/ai-dev-kit\npython3 \"packages/frameworks/workflow-mgt/scripts/build_packages_direct.py\"\n\n# 2. Create Git tags\ngit tag -a kanban-v2.1.0 -m \"Release kanban v2.1.0\"\ngit tag -a workflow-mgt-v2.1.4 -m \"Release workflow mgt v2.1.3\"\ngit tag -a numbering-versioning-v2.0.0 -m \"Release numbering & versioning v2.0.0\"\ngit tag -a doc-lifecycle-v1.0.0 -m \"Release doc-lifecycle v1.0.0\"\ngit tag -a debug-path-v1.0.0 -m \"Release debug-path v1.0.0\"\ngit push origin --tags\n\n# 3. Upload packages\nexport GITHUB_TOKEN=your_token_here\npython3 \"packages/frameworks/workflow-mgt/scripts/upload_all_packages.py\" \\\n    --token $GITHUB_TOKEN \\\n    --repo RMS-Ltd/ai-dev-kit \\\n    --verbose\n\n# 4. Verify\nopen https://github.com/RMS-Ltd/ai-dev-kit/releases\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "troubleshooting",
      children: "Troubleshooting"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "build-issues",
      children: "Build Issues"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "No files found:"
        }), " Check framework directory exists"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Import errors:"
        }), " Ensure Python 3.11+ and all dependencies available"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "upload-issues",
      children: "Upload Issues"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Release not found:"
        }), " Create and push Git tags first"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Authentication failed:"
        }), " Verify token has ", (0,jsx_runtime.jsx)(_components.code, {
          children: "repo"
        }), " scope"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Package not found:"
        }), " Build packages first"]
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
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/maintenance/UPLOAD_PACKAGES",
          children: "UPLOAD_PACKAGES.md"
        }), " – Upload details"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/analysis/phase3-package-distribution-plan",
          children: "Phase 3 package distribution plan"
        })
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