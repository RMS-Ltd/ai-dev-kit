"use strict";
(self["webpackChunkportal"] = self["webpackChunkportal"] || []).push([["68370"], {
13637(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_maintenance_build_packages_commands_md_82f_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-maintenance-build-packages-commands-md-82f.json
var site_docs_maintenance_build_packages_commands_md_82f_namespaceObject = JSON.parse('{"id":"maintenance/BUILD_PACKAGES_COMMANDS","title":"Build Framework Packages - Ready to Execute","description":"Quick Build (All Packages at Once)","source":"@site/../docs/maintenance/BUILD_PACKAGES_COMMANDS.md","sourceDirName":"maintenance","slug":"/maintenance/BUILD_PACKAGES_COMMANDS","permalink":"/ai-dev-kit/docs/maintenance/BUILD_PACKAGES_COMMANDS","draft":false,"unlisted":false,"editUrl":"https://github.com/RMS-Ltd/ai-dev-kit/tree/main/docs/../docs/maintenance/BUILD_PACKAGES_COMMANDS.md","tags":[],"version":"current","frontMatter":{},"sidebar":"docsSidebar","previous":{"title":"Build Framework Packages - Quick Start","permalink":"/ai-dev-kit/docs/maintenance/BUILD_PACKAGES"},"next":{"title":"Maintainer Runbooks","permalink":"/ai-dev-kit/docs/maintenance/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ../docs/maintenance/BUILD_PACKAGES_COMMANDS.md


const frontMatter = {};
const contentTitle = 'Build Framework Packages - Ready to Execute';

const assets = {

};



const toc = [{
  "value": "Quick Build (All Packages at Once)",
  "id": "quick-build-all-packages-at-once",
  "level": 2
}, {
  "value": "Or Build Individually",
  "id": "or-build-individually",
  "level": 2
}, {
  "value": "Verify Packages",
  "id": "verify-packages",
  "level": 2
}, {
  "value": "Expected Output",
  "id": "expected-output",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h1: "h1",
    h2: "h2",
    header: "header",
    p: "p",
    pre: "pre",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "build-framework-packages---ready-to-execute",
        children: "Build Framework Packages - Ready to Execute"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "quick-build-all-packages-at-once",
      children: "Quick Build (All Packages at Once)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "cd /Users/rms/Documents/projects/ai-dev-kit\nbash packages/frameworks/BUILD_NOW.sh\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "or-build-individually",
      children: "Or Build Individually"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "cd /Users/rms/Documents/projects/ai-dev-kit\n\n# Create output directory\nmkdir -p packages/frameworks/dist/packages\n\n# Build kanban\npython3 \"packages/frameworks/workflow-mgt/scripts/build_package.py\" \\\n    kanban 2.1.0 \\\n    --output-dir packages/frameworks/dist/packages \\\n    --frameworks-root packages/frameworks \\\n    --verbose\n\n# Build workflow mgt\npython3 \"packages/frameworks/workflow-mgt/scripts/build_package.py\" \\\n    \"workflow mgt\" 2.1.4 \\\n    --output-dir packages/frameworks/dist/packages \\\n    --frameworks-root packages/frameworks \\\n    --verbose\n\n# Build numbering & versioning\npython3 \"packages/frameworks/workflow-mgt/scripts/build_package.py\" \\\n    \"numbering & versioning\" 2.0.0 \\\n    --output-dir packages/frameworks/dist/packages \\\n    --frameworks-root packages/frameworks \\\n    --verbose\n\n# Build doc-lifecycle\npython3 \"packages/frameworks/workflow-mgt/scripts/build_package.py\" \\\n    doc-lifecycle 1.0.0 \\\n    --output-dir packages/frameworks/dist/packages \\\n    --frameworks-root packages/frameworks \\\n    --verbose\n\n# Build debug-path\npython3 \"packages/frameworks/workflow-mgt/scripts/build_package.py\" \\\n    debug-path 1.0.0 \\\n    --output-dir packages/frameworks/dist/packages \\\n    --frameworks-root packages/frameworks \\\n    --verbose\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "verify-packages",
      children: "Verify Packages"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# List all packages\nls -lh packages/frameworks/dist/packages/*.tar.gz\n\n# List all hash files\nls -lh packages/frameworks/dist/packages/*.sha256\n\n# Verify a package hash\ncd packages/frameworks/dist/packages\nsha256sum -c kanban-v2.1.0.tar.gz.sha256\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "expected-output",
      children: "Expected Output"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "After successful build, you should see:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "packages/frameworks/dist/packages/\n├── kanban-v2.1.0.tar.gz\n├── kanban-v2.1.0.tar.gz.sha256\n├── workflow-mgt-v2.1.4.tar.gz\n├── workflow-mgt-v2.1.4.tar.gz.sha256\n├── numbering-versioning-v2.0.0.tar.gz\n├── numbering-versioning-v2.0.0.tar.gz.sha256\n├── doc-lifecycle-v1.0.0.tar.gz\n├── doc-lifecycle-v1.0.0.tar.gz.sha256\n├── debug-path-v1.0.0.tar.gz\n└── debug-path-v1.0.0.tar.gz.sha256\n"
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