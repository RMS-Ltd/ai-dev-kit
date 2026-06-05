"use strict";
(self["webpackChunkportal"] = self["webpackChunkportal"] || []).push([["84543"], {
22015(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_architecture_standards_and_adrs_generator_framework_design_md_6e2_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-architecture-standards-and-adrs-generator-framework-design-md-6e2.json
var site_docs_architecture_standards_and_adrs_generator_framework_design_md_6e2_namespaceObject = JSON.parse('{"id":"architecture/standards-and-adrs/generator-framework-design","title":"Generator Framework Design","description":"Status: IMPLEMENTED","source":"@site/../docs/architecture/standards-and-adrs/generator-framework-design.md","sourceDirName":"architecture/standards-and-adrs","slug":"/architecture/standards-and-adrs/generator-framework-design","permalink":"/ai-dev-kit/docs/architecture/standards-and-adrs/generator-framework-design","draft":false,"unlisted":false,"editUrl":"https://github.com/RMS-Ltd/ai-dev-kit/tree/main/docs/../docs/architecture/standards-and-adrs/generator-framework-design.md","tags":[],"version":"current","frontMatter":{"lifecycle":"evergreen","ttl_days":null,"created_at":"2026-01-05T22:20:00.000Z","expires_at":null,"housekeeping_policy":"keep"},"sidebar":"docsSidebar","previous":{"title":"Gap Log and Risk Assessment Schema","permalink":"/ai-dev-kit/docs/architecture/standards-and-adrs/gap-log-schema"},"next":{"title":"IPW ADR necessity checklist","permalink":"/ai-dev-kit/docs/architecture/standards-and-adrs/ipw-adr-necessity-checklist"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ../docs/architecture/standards-and-adrs/generator-framework-design.md


const frontMatter = {
	lifecycle: 'evergreen',
	ttl_days: null,
	created_at: new Date('2026-01-05T22:20:00.000Z'),
	expires_at: null,
	housekeeping_policy: 'keep'
};
const contentTitle = 'Generator Framework Design';

const assets = {

};



const toc = [{
  "value": "Overview",
  "id": "overview",
  "level": 2
}, {
  "value": "Design Goals",
  "id": "design-goals",
  "level": 2
}, {
  "value": "Architecture",
  "id": "architecture",
  "level": 2
}, {
  "value": "Core Components",
  "id": "core-components",
  "level": 3
}, {
  "value": "1. BaseGenerator (Abstract Base Class)",
  "id": "1-basegenerator-abstract-base-class",
  "level": 4
}, {
  "value": "2. TemplateBasedGenerator (Base Class)",
  "id": "2-templatebasedgenerator-base-class",
  "level": 4
}, {
  "value": "3. TemplateEngine",
  "id": "3-templateengine",
  "level": 4
}, {
  "value": "4. GeneratorRegistry",
  "id": "4-generatorregistry",
  "level": 4
}, {
  "value": "Data Structures",
  "id": "data-structures",
  "level": 2
}, {
  "value": "GeneratorResult",
  "id": "generatorresult",
  "level": 3
}, {
  "value": "GeneratorConfig",
  "id": "generatorconfig",
  "level": 3
}, {
  "value": "Usage Patterns",
  "id": "usage-patterns",
  "level": 2
}, {
  "value": "Pattern 1: Simple Generator",
  "id": "pattern-1-simple-generator",
  "level": 3
}, {
  "value": "Pattern 2: Template-Based Generator",
  "id": "pattern-2-template-based-generator",
  "level": 3
}, {
  "value": "Pattern 3: Registered Generator",
  "id": "pattern-3-registered-generator",
  "level": 3
}, {
  "value": "Integration with Existing Generators",
  "id": "integration-with-existing-generators",
  "level": 2
}, {
  "value": "Extension Points",
  "id": "extension-points",
  "level": 2
}, {
  "value": "Custom Template Engines",
  "id": "custom-template-engines",
  "level": 3
}, {
  "value": "Generator Composition",
  "id": "generator-composition",
  "level": 3
}, {
  "value": "Testing",
  "id": "testing",
  "level": 2
}, {
  "value": "Documentation",
  "id": "documentation",
  "level": 2
}, {
  "value": "Future Enhancements",
  "id": "future-enhancements",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
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
        id: "generator-framework-design",
        children: "Generator Framework Design"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Status:"
      }), " IMPLEMENTED", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Epic:"
      }), " 8 - Tooling & Automation", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Story:"
      }), " E8", ":S01", " - Code Generators", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Task:"
      }), " E8:S01", ":T01", " - Create generator framework", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Version:"
      }), " 1.0.0"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "overview",
      children: "Overview"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The Generator Framework provides a comprehensive foundation for building code generators for common framework patterns and templates. It offers abstract base classes, template rendering, generator registry, and common patterns that can be extended for specific generation needs."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "design-goals",
      children: "Design Goals"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Extensibility:"
        }), " Easy to create new generators by extending base classes"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Consistency:"
        }), " Common workflow and result structure across all generators"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Template Support:"
        }), " Built-in template engine for variable substitution, conditionals, and loops"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Discoverability:"
        }), " Registry system for finding and managing generators"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Validation:"
        }), " Built-in input and output validation"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Error Handling:"
        }), " Comprehensive error tracking and reporting"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "architecture",
      children: "Architecture"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "core-components",
      children: "Core Components"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "1-basegenerator-abstract-base-class",
      children: "1. BaseGenerator (Abstract Base Class)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Location:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "packages/frameworks/tooling-automation/generators/base.py"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Purpose:"
      }), " Abstract base class for all generators"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Key Methods:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "get_name()"
        }), " - Generator name"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "get_description()"
        }), " - Generator description"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "validate_input()"
        }), " - Input validation"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "generate()"
        }), " - Main generation logic"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "run()"
        }), " - Orchestrates complete workflow"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Workflow:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "validate_input() → pre_generate() → generate() → validate_output() → post_generate()\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "2-templatebasedgenerator-base-class",
      children: "2. TemplateBasedGenerator (Base Class)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Location:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "packages/frameworks/tooling-automation/generators/base.py"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Purpose:"
      }), " Base class for template-based generators"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Features:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Template loading and caching"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Template rendering with variable substitution"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "File writing with overwrite control"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "3-templateengine",
      children: "3. TemplateEngine"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Location:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "packages/frameworks/tooling-automation/generators/template_engine.py"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Purpose:"
      }), " Template rendering engine"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Features:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Variable substitution: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "{variable_name}"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Conditionals: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "{if condition}...{/if}"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Loops: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "{for item in items}...{/for}"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Template caching"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "4-generatorregistry",
      children: "4. GeneratorRegistry"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Location:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "packages/frameworks/tooling-automation/generators/registry.py"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Purpose:"
      }), " Registry for discovering and managing generators"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Features:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Register generators by name"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Support aliases"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "List all registered generators"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Dynamic generator discovery"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "data-structures",
      children: "Data Structures"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "generatorresult",
      children: "GeneratorResult"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "@dataclass\nclass GeneratorResult:\n    status: GeneratorStatus  # SUCCESS, PARTIAL, FAILED, SKIPPED\n    output_paths: List[Path]\n    errors: List[str]\n    warnings: List[str]\n    metadata: Dict[str, Any]\n    execution_time: Optional[float]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "generatorconfig",
      children: "GeneratorConfig"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "@dataclass\nclass GeneratorConfig:\n    output_dir: Path\n    template_dir: Optional[Path] = None\n    overwrite: bool = False\n    dry_run: bool = False\n    verbose: bool = False\n    validate_output: bool = True\n    custom_params: Dict[str, Any] = field(default_factory=dict)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "usage-patterns",
      children: "Usage Patterns"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pattern-1-simple-generator",
      children: "Pattern 1: Simple Generator"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class SimpleGenerator(BaseGenerator):\n    def get_name(self) -> str:\n        return \"SimpleGenerator\"\n    \n    def get_description(self) -> str:\n        return \"Generates simple code\"\n    \n    def validate_input(self, **kwargs) -> tuple[bool, List[str]]:\n        if 'name' not in kwargs:\n            return False, [\"Missing: name\"]\n        return True, []\n    \n    def generate(self, **kwargs) -> GeneratorResult:\n        result = GeneratorResult(status=GeneratorStatus.SUCCESS)\n        # Generate code\n        return result\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pattern-2-template-based-generator",
      children: "Pattern 2: Template-Based Generator"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class TemplateGenerator(TemplateBasedGenerator):\n    def generate(self, **kwargs) -> GeneratorResult:\n        result = GeneratorResult(status=GeneratorStatus.SUCCESS)\n        context = {'name': kwargs['name']}\n        output_path = self.config.output_dir / \"output.py\"\n        self.render_template(\"template.py\", context, output_path)\n        return result\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pattern-3-registered-generator",
      children: "Pattern 3: Registered Generator"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from generators.registry import register_generator\n\nregister_generator(\n    MyGenerator,\n    name=\"my-generator\",\n    aliases=[\"mygen\", \"mg\"]\n)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "integration-with-existing-generators",
      children: "Integration with Existing Generators"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The framework is designed to integrate with existing generators:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Workflow Generator"
        }), " (", (0,jsx_runtime.jsx)(_components.code, {
          children: "generate_workflow.py"
        }), ") - Can be refactored to extend BaseGenerator"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Task Template Generator"
        }), " (", (0,jsx_runtime.jsx)(_components.code, {
          children: "generate_task_templates.py"
        }), ") - Can use TemplateBasedGenerator"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Agentic Template Generator"
        }), " (", (0,jsx_runtime.jsx)(_components.code, {
          children: "agentic_template_generator.py"
        }), ") - Can extend BaseGenerator"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "extension-points",
      children: "Extension Points"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "custom-template-engines",
      children: "Custom Template Engines"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The framework can be extended to support:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Jinja2 templates (optional dependency)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Custom template syntax"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Template inheritance"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "generator-composition",
      children: "Generator Composition"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Future enhancement: Chain multiple generators together:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "pipeline = GeneratorPipeline([\n    StructureGenerator(),\n    TemplateGenerator(),\n    ValidatorGenerator()\n])\nresult = pipeline.run(...)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "testing",
      children: "Testing"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Generators should be tested with:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Unit tests for generation logic"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Integration tests for full workflow"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Template rendering tests"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Error handling tests"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "documentation",
      children: "Documentation"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "README.md"
        }), " - Framework overview and usage"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Design Document"
        }), " (this file) - Architecture and design decisions"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Examples"
        }), " - Example generators demonstrating patterns"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "future-enhancements",
      children: "Future Enhancements"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Jinja2 Support"
        }), " - Optional Jinja2 template engine"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Generator Plugins"
        }), " - Plugin system for extending generators"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Generator Composition"
        }), " - Chain generators together"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Validation Rules"
        }), " - Framework for validation rules"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Generator CLI"
        }), " - Command-line interface for running generators"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Last Updated:"
      }), " 2026-01-05", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Version:"
      }), " 1.0.0"]
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