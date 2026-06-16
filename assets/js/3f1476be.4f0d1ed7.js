"use strict";
(self["webpackChunkportal"] = self["webpackChunkportal"] || []).push([["5668"], {
8316(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_documentation_engineering_and_platform_open_kb_starter_map_md_3f1_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-documentation-engineering-and-platform-open-kb-starter-map-md-3f1.json
var site_docs_documentation_engineering_and_platform_open_kb_starter_map_md_3f1_namespaceObject = JSON.parse('{"id":"documentation/engineering-and-platform/open-kb-starter-map","title":"Open KB Starter Map for Engineering Teams","description":"Curated, high-signal public resources you can lean on for delivery, release, reliability, security, and process. Use this as a jump-off index; each item is well-maintained and widely referenced.","source":"@site/../docs/documentation/engineering-and-platform/open-kb-starter-map.md","sourceDirName":"documentation/engineering-and-platform","slug":"/documentation/engineering-and-platform/open-kb-starter-map","permalink":"/ai-dev-kit/docs/documentation/engineering-and-platform/open-kb-starter-map","draft":false,"unlisted":false,"editUrl":"https://github.com/RMS-Ltd/ai-dev-kit/tree/main/docs/../docs/documentation/engineering-and-platform/open-kb-starter-map.md","tags":[],"version":"current","frontMatter":{"lifecycle":"evergreen","ttl_days":"null","created_at":"2025-12-11T00:00:00Z","expires_at":"null","housekeeping_policy":"keep"},"sidebar":"docsSidebar","previous":{"title":"Problem-Solution KB Service — Vision & Plan","permalink":"/ai-dev-kit/docs/documentation/engineering-and-platform/knowledge-service-vision"},"next":{"title":"Avoiding Task-Ordering Drift in RC.EPIC.STORY.TASK+BUILD","permalink":"/ai-dev-kit/docs/documentation/engineering-and-platform/versioning-task-ordering-anti-pattern"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(4848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(8453);
;// CONCATENATED MODULE: ../docs/documentation/engineering-and-platform/open-kb-starter-map.md


const frontMatter = {
	lifecycle: 'evergreen',
	ttl_days: 'null',
	created_at: '2025-12-11T00:00:00Z',
	expires_at: 'null',
	housekeeping_policy: 'keep'
};
const contentTitle = 'Open KB Starter Map for Engineering Teams';

const assets = {

};



const toc = [{
  "value": "Core delivery &amp; release",
  "id": "core-delivery--release",
  "level": 2
}, {
  "value": "Engineering handbooks",
  "id": "engineering-handbooks",
  "level": 2
}, {
  "value": "Reliability, incidents, and postmortems",
  "id": "reliability-incidents-and-postmortems",
  "level": 2
}, {
  "value": "Security &amp; supply chain",
  "id": "security--supply-chain",
  "level": 2
}, {
  "value": "Architecture &amp; patterns",
  "id": "architecture--patterns",
  "level": 2
}, {
  "value": "How to use this map",
  "id": "how-to-use-this-map",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    br: "br",
    h1: "h1",
    h2: "h2",
    header: "header",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "open-kb-starter-map-for-engineering-teams",
        children: "Open KB Starter Map for Engineering Teams"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Curated, high-signal public resources you can lean on for delivery, release, reliability, security, and process. Use this as a jump-off index; each item is well-maintained and widely referenced."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "core-delivery--release",
      children: "Core delivery & release"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Trunk-based development"
        }), " — trunkbaseddevelopment.com", (0,jsx_runtime.jsx)(_components.br, {}), "\n", "When: Branching/release patterns, short-lived branches, fast flow."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Versioning & change semantics"
        }), " — semver.org; keepachangelog.com; conventionalcommits.org", (0,jsx_runtime.jsx)(_components.br, {}), "\n", "When: Consistent versioning, changelog structure, commit semantics."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "GitOps & cloud-native delivery"
        }), " — CNCF TAG App Delivery; ArgoCD/Flux docs", (0,jsx_runtime.jsx)(_components.br, {}), "\n", "When: Declarative delivery, progressive rollout, ops-as-code in cloud-native."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "engineering-handbooks",
      children: "Engineering handbooks"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "GitLab Handbook (engineering/product/devops)"
        }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", "When: Opinionated playbooks for release, deploy, incidents, observability, product."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Microsoft Engineering Fundamentals / Playbook (GitHub)"
        }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", "When: Practical checklists for design, testing, CI/CD, reliability."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Google Engineering Practices / Testing docs"
        }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", "When: Code review guidance, testing philosophy, lightweight process patterns."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "reliability-incidents-and-postmortems",
      children: "Reliability, incidents, and postmortems"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Google SRE books (public PDFs)"
        }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", "When: SLOs/SLIs, incident response, error budgets, reliability culture."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "awesome-sre (GitHub)"
        }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", "When: Curated SRE resources and tooling references."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "awesome-postmortems (GitHub)"
        }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", "When: Real-world RCA/postmortem examples to model your own practice."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "security--supply-chain",
      children: "Security & supply chain"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "OpenSSF Best Practices"
        }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", "When: Baseline secure software practices and checklists."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "SLSA.dev"
        }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", "When: Supply-chain levels, build/release integrity controls (provenance, isolation)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "architecture--patterns",
      children: "Architecture & patterns"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "ThoughtWorks Tech Radar"
        }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", "When: Staying current on tools/techniques; adopt/assess/hold language."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "CNCF whitepapers (TAG App Delivery, SIG Security)"
        }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", "When: Modern cloud-native delivery and security patterns."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "how-to-use-this-map",
      children: "How to use this map"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Pick the relevant slice for your need (release, reliability, security, etc.)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Apply the smallest coherent pattern (e.g., trunk-based + conventional commits + semver)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "For incidents/postmortems, model from awesome-postmortems + SRE books."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "For supply chain, start with OpenSSF basics, then layer SLSA where needed."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Revisit the Tech Radar quarterly to avoid tech drift and adjust bets."
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