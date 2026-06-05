"use strict";
(self["webpackChunkportal"] = self["webpackChunkportal"] || []).push([["71059"], {
44478(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_project_management_kanban_epics_epic_07_story_06_post_windsurf_project_review_e_7_s_06_t_16_pir_windsurf_impact_review_md_719_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-project-management-kanban-epics-epic-07-story-06-post-windsurf-project-review-e-7-s-06-t-16-pir-windsurf-impact-review-md-719.json
var site_docs_project_management_kanban_epics_epic_07_story_06_post_windsurf_project_review_e_7_s_06_t_16_pir_windsurf_impact_review_md_719_namespaceObject = JSON.parse('{"id":"project-management/kanban/epics/epic-07/story-06-post-windsurf-project-review/E7S06-T16-PIR-windsurf-impact-review","title":"E07:S06:T16 – PIR Workflow Windsurf Impact Review","description":"Task IDS06:T16","source":"@site/../docs/project-management/kanban/epics/epic-07/story-06-post-windsurf-project-review/E7S06-T16-PIR-windsurf-impact-review.md","sourceDirName":"project-management/kanban/epics/epic-07/story-06-post-windsurf-project-review","slug":"/project-management/kanban/epics/epic-07/story-06-post-windsurf-project-review/E7S06-T16-PIR-windsurf-impact-review","permalink":"/ai-dev-kit/docs/project-management/kanban/epics/epic-07/story-06-post-windsurf-project-review/E7S06-T16-PIR-windsurf-impact-review","draft":false,"unlisted":false,"editUrl":"https://github.com/RMS-Ltd/ai-dev-kit/tree/main/docs/../docs/project-management/kanban/epics/epic-07/story-06-post-windsurf-project-review/E7S06-T16-PIR-windsurf-impact-review.md","tags":[],"version":"current","frontMatter":{},"sidebar":"docsSidebar","previous":{"title":"E07:S06:T15 – Intake Workflow Windsurf Impact Review","permalink":"/ai-dev-kit/docs/project-management/kanban/epics/epic-07/story-06-post-windsurf-project-review/E7S06-T15-Intake-windsurf-impact-review"},"next":{"title":"E07:S06:T01 – Windsurf Artifact Cleanup","permalink":"/ai-dev-kit/docs/project-management/kanban/epics/epic-07/story-06-post-windsurf-project-review/T01-windsurf-artifact-cleanup"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ../docs/project-management/kanban/epics/epic-07/story-06-post-windsurf-project-review/E7S06-T16-PIR-windsurf-impact-review.md


const frontMatter = {};
const contentTitle = 'E07:S06 – PIR Workflow Windsurf Impact Review';

const assets = {

};



const toc = [{
  "value": "Windsurf Impact",
  "id": "windsurf-impact",
  "level": 2
}, {
  "value": "Extent of Windsurf-Specific Logic",
  "id": "extent-of-windsurf-specific-logic",
  "level": 3
}, {
  "value": "Divergence from .cursorrules",
  "id": "divergence-from-cursorrules",
  "level": 3
}, {
  "value": "Risk to Cursor-Native Execution",
  "id": "risk-to-cursor-native-execution",
  "level": 3
}, {
  "value": "Skill Mappings",
  "id": "skill-mappings",
  "level": 2
}, {
  "value": "Migration Plan",
  "id": "migration-plan",
  "level": 2
}, {
  "value": "Anti-Pattern Findings",
  "id": "anti-pattern-findings",
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
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsxs)(_components.h1, {
        id: "e07s06--pir-workflow-windsurf-impact-review",
        children: ["E07:S06", ":T16", " – PIR Workflow Windsurf Impact Review"]
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Task ID:"
      }), " E07:S06", ":T16", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Task:"
      }), " E07:S06", ":T16", "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Workflow:"
      }), " Post-Implementation Review (PIR)\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Review Date:"
      }), " 2026-03-18\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Status:"
      }), " Complete"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "windsurf-impact",
      children: "Windsurf Impact"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "extent-of-windsurf-specific-logic",
      children: "Extent of Windsurf-Specific Logic"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["No direct .windsurf skill for PIR. PIR is RW Step 12.5 (GitHub release) and Step 15 in some docs. ", (0,jsx_runtime.jsx)(_components.code, {
        children: "project-manager-coordination"
      }), " references coordination/rollback for ICW; tangentially related to PIR-style oversight but not PIR definition."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "divergence-from-cursorrules",
      children: "Divergence from .cursorrules"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "PIR logic is in .cursorrules (RW steps). No PIR skill to compare."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "risk-to-cursor-native-execution",
      children: "Risk to Cursor-Native Execution"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Low risk."
      }), " No PIR-specific skill."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "skill-mappings",
      children: "Skill Mappings"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "No relevant skills"
      }), " for PIR workflow. project-manager-coordination is ICW multi-agent coordination; PIR is create_github_release and post-release checks. Not applicable."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "migration-plan",
      children: "Migration Plan"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "No PIR-specific skill to migrate."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "PIR remains in .cursorrules (RW Step 12.5) and create_github_release.py."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "project-manager-coordination is out of scope for PIR."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "anti-pattern-findings",
      children: "Anti-Pattern Findings"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Finding:"
      }), " No PIR skill. ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "None observed."
      }), " PIR is script-augmented (create_github_release) with .cursorrules guidance."]
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