"use strict";
(self["webpackChunkportal"] = self["webpackChunkportal"] || []).push([["20991"], {
94469(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_project_management_kanban_fr_br_br_057_fr_br_intake_workflow_yaml_block_scalar_indentation_md_127_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-project-management-kanban-fr-br-br-057-fr-br-intake-workflow-yaml-block-scalar-indentation-md-127.json
var site_docs_project_management_kanban_fr_br_br_057_fr_br_intake_workflow_yaml_block_scalar_indentation_md_127_namespaceObject = JSON.parse('{"id":"project-management/kanban/fr-br/BR-057-fr-br-intake-workflow-yaml-block-scalar-indentation","title":"BR-057: fr-br-intake.yml invalid workflow YAML (block scalar indentation)","description":"GitHub rejected .github/workflows/fr-br-intake.yml due to YAML syntax error; root cause was dedented lines inside script: | block","source":"@site/../docs/project-management/kanban/fr-br/BR-057-fr-br-intake-workflow-yaml-block-scalar-indentation.md","sourceDirName":"project-management/kanban/fr-br","slug":"/project-management/kanban/fr-br/BR-057-fr-br-intake-workflow-yaml-block-scalar-indentation","permalink":"/ai-dev-kit/docs/project-management/kanban/fr-br/BR-057-fr-br-intake-workflow-yaml-block-scalar-indentation","draft":false,"unlisted":false,"editUrl":"https://github.com/RMS-Ltd/ai-dev-kit/tree/main/docs/../docs/project-management/kanban/fr-br/BR-057-fr-br-intake-workflow-yaml-block-scalar-indentation.md","tags":[],"version":"current","frontMatter":{"title":"BR-057: fr-br-intake.yml invalid workflow YAML (block scalar indentation)","description":"GitHub rejected .github/workflows/fr-br-intake.yml due to YAML syntax error; root cause was dedented lines inside script: | block","status":"COMPLETE","priority":"MEDIUM","type":"bug","date_created":"2026-03-20","date_completed":"2026-03-20","assignee":"[TBD]","reporter":"Cursor Agent","labels":["bug","github-actions","yaml","fr-br-intake","retrospective"]},"sidebar":"docsSidebar","previous":{"title":"Bug Report BR-056: RW Accepts Ambiguous Task Identifier Without Validation (Typo Risk)","permalink":"/ai-dev-kit/docs/project-management/kanban/fr-br/BR-056-rw-ambiguous-task-identifier-typo-risk"},"next":{"title":"Bug Report BR-058: Missing Tests CI Workflow and Stale Pytest Failures","permalink":"/ai-dev-kit/docs/project-management/kanban/fr-br/BR-058-ci-test-workflow-missing-and-pytest-failures"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ../docs/project-management/kanban/fr-br/BR-057-fr-br-intake-workflow-yaml-block-scalar-indentation.md


const frontMatter = {
	title: 'BR-057: fr-br-intake.yml invalid workflow YAML (block scalar indentation)',
	description: 'GitHub rejected .github/workflows/fr-br-intake.yml due to YAML syntax error; root cause was dedented lines inside script: | block',
	status: 'COMPLETE',
	priority: 'MEDIUM',
	type: 'bug',
	date_created: '2026-03-20',
	date_completed: '2026-03-20',
	assignee: '[TBD]',
	reporter: 'Cursor Agent',
	labels: [
		'bug',
		'github-actions',
		'yaml',
		'fr-br-intake',
		'retrospective'
	]
};
const contentTitle = 'Bug Report BR-057: fr-br-intake workflow YAML (block scalar indentation)';

const assets = {

};



const toc = [{
  "value": "Bug Summary",
  "id": "bug-summary",
  "level": 2
}, {
  "value": "Environment",
  "id": "environment",
  "level": 2
}, {
  "value": "Description",
  "id": "description",
  "level": 2
}, {
  "value": "What went wrong",
  "id": "what-went-wrong",
  "level": 3
}, {
  "value": "Expected vs actual",
  "id": "expected-vs-actual",
  "level": 3
}, {
  "value": "Affected component",
  "id": "affected-component",
  "level": 3
}, {
  "value": "Root cause",
  "id": "root-cause",
  "level": 2
}, {
  "value": "Resolution (implemented)",
  "id": "resolution-implemented",
  "level": 2
}, {
  "value": "Traceability",
  "id": "traceability",
  "level": 2
}, {
  "value": "Prevention",
  "id": "prevention",
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
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "bug-report-br-057-fr-br-intake-workflow-yaml-block-scalar-indentation",
        children: "Bug Report BR-057: fr-br-intake workflow YAML (block scalar indentation)"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Implementing Task:"
      }), " ", (0,jsx_runtime.jsxs)(_components.a, {
        href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-07/story-06-post-windsurf-project-review/T17-BR057-fr-br-intake-yaml-retrospective",
        children: ["E07:S06", ":T17"]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "bug-summary",
      children: "Bug Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["GitHub reported ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Invalid workflow file"
      }), " for ", (0,jsx_runtime.jsx)(_components.code, {
        children: ".github/workflows/fr-br-intake.yml"
      }), " (error referenced ~line 131). The workflow file failed YAML parsing because several lines inside the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "actions/github-script"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "script: |"
      }), " block were not indented relative to ", (0,jsx_runtime.jsx)(_components.code, {
        children: "script:"
      }), ", so YAML treated them as new top-level constructs instead of part of the literal string."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "environment",
      children: "Environment"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Repository:"
        }), " RMS-Ltd/ai-dev-kit"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Platform:"
        }), " GitHub Actions (workflow validation)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "File:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".github/workflows/fr-br-intake.yml"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Date reported (retrospective):"
        }), " 2026-03-20"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "description",
      children: "Description"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "what-went-wrong",
      children: "What went wrong"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Under a literal block scalar (", (0,jsx_runtime.jsx)(_components.code, {
        children: "script: |"
      }), "), ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "every"
      }), " content line must be indented ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "more"
      }), " than the key that opens the block (", (0,jsx_runtime.jsx)(_components.code, {
        children: "script:"
      }), "). Lines 131–139 (markdown continuation inside the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "body"
      }), " template literal) were flush-left (zero indent). That ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "terminated"
      }), " the block scalar early; YAML then interpreted lines starting with ", (0,jsx_runtime.jsx)(_components.code, {
        children: "- "
      }), " as list items at the wrong level, producing a syntax error (GitHub surfaced it around line 131)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "expected-vs-actual",
      children: "Expected vs actual"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Expected:"
        }), " Entire JavaScript ", (0,jsx_runtime.jsx)(_components.code, {
          children: "script"
        }), " body is one YAML string; workflow loads in GitHub."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Actual:"
        }), " Invalid YAML; workflow file rejected."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "affected-component",
      children: "Affected component"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Primary:"
        }), " CI/CD — FR/BR/UXR/FB issue intake automation (", (0,jsx_runtime.jsx)(_components.code, {
          children: "fr-br-intake.yml"
        }), ")"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "root-cause",
      children: "Root cause"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Incorrect indentation inside a YAML literal block scalar (", (0,jsx_runtime.jsx)(_components.code, {
        children: "|"
      }), "). Not a GitHub Actions expression bug; pure YAML structure."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "resolution-implemented",
      children: "Resolution (implemented)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Re-indented the continuation lines (including blank lines and markdown bullets) to match the surrounding ", (0,jsx_runtime.jsx)(_components.code, {
        children: "script: |"
      }), " content so they remain inside the block scalar. Local validation: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "yaml.safe_load"
      }), " succeeds on the full workflow file."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "traceability",
      children: "Traceability"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Kanban task:"
        }), " E07:S06", ":T17", " — ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-07/story-06-post-windsurf-project-review/T17-BR057-fr-br-intake-yaml-retrospective",
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "T17-BR057-fr-br-intake-yaml-retrospective.md"
          })
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "prevention",
      children: "Prevention"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["When editing multiline ", (0,jsx_runtime.jsx)(_components.code, {
          children: "script: |"
        }), " or ", (0,jsx_runtime.jsx)(_components.code, {
          children: "run: |"
        }), " blocks, keep all continuation lines indented past the block key; avoid paste that strips leading spaces."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Optional: run ", (0,jsx_runtime.jsx)(_components.code, {
          children: "actionlint"
        }), " or YAML parse check before push."]
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