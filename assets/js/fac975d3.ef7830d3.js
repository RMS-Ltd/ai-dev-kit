"use strict";
(self["webpackChunkportal"] = self["webpackChunkportal"] || []).push([["32516"], {
88441(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_maintenance_release_integration_guides_md_fac_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-maintenance-release-integration-guides-md-fac.json
var site_docs_maintenance_release_integration_guides_md_fac_namespaceObject = JSON.parse('{"id":"maintenance/release-integration-guides","title":"Release Integration Guides","description":"Purpose: GitHub Actions and CI/CD pipeline integration examples for automated releases","source":"@site/../docs/maintenance/release-integration-guides.md","sourceDirName":"maintenance","slug":"/maintenance/release-integration-guides","permalink":"/ai-dev-kit/docs/maintenance/release-integration-guides","draft":false,"unlisted":false,"editUrl":"https://github.com/RMS-Ltd/ai-dev-kit/tree/main/docs/../docs/maintenance/release-integration-guides.md","tags":[],"version":"current","frontMatter":{},"sidebar":"docsSidebar","previous":{"title":"Release Configuration Examples","permalink":"/ai-dev-kit/docs/maintenance/release-configuration-examples"},"next":{"title":"Release Quick Reference","permalink":"/ai-dev-kit/docs/maintenance/release-quick-reference"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ../docs/maintenance/release-integration-guides.md


const frontMatter = {};
const contentTitle = 'Release Integration Guides';

const assets = {

};



const toc = [{
  "value": "🚨 Critical Policy Reminder",
  "id": "-critical-policy-reminder",
  "level": 2
}, {
  "value": "GitHub Actions Integration",
  "id": "github-actions-integration",
  "level": 2
}, {
  "value": "Basic Release Workflow",
  "id": "basic-release-workflow",
  "level": 3
}, {
  "value": "Advanced Release Workflow with Validation",
  "id": "advanced-release-workflow-with-validation",
  "level": 3
}, {
  "value": "CI/CD Pipeline Integration",
  "id": "cicd-pipeline-integration",
  "level": 2
}, {
  "value": "Jenkins Pipeline Example",
  "id": "jenkins-pipeline-example",
  "level": 3
}, {
  "value": "GitLab CI/CD Example",
  "id": "gitlab-cicd-example",
  "level": 3
}, {
  "value": "Docker Integration",
  "id": "docker-integration",
  "level": 2
}, {
  "value": "Dockerfile with Release Automation",
  "id": "dockerfile-with-release-automation",
  "level": 3
}, {
  "value": "Docker Compose Example",
  "id": "docker-compose-example",
  "level": 3
}, {
  "value": "Testing Integration",
  "id": "testing-integration",
  "level": 2
}, {
  "value": "Release Integration Tests",
  "id": "release-integration-tests",
  "level": 3
}, {
  "value": "Monitoring and Alerting",
  "id": "monitoring-and-alerting",
  "level": 2
}, {
  "value": "Release Monitoring Script",
  "id": "release-monitoring-script",
  "level": 3
}, {
  "value": "Security Considerations",
  "id": "security-considerations",
  "level": 2
}, {
  "value": "Secure Release Automation",
  "id": "secure-release-automation",
  "level": 3
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
    p: "p",
    pre: "pre",
    strong: "strong",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "release-integration-guides",
        children: "Release Integration Guides"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Purpose:"
      }), " GitHub Actions and CI/CD pipeline integration examples for automated releases", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Version:"
      }), " 1.0.0", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Last Updated:"
      }), " 2026-03-10"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-critical-policy-reminder",
      children: "🚨 Critical Policy Reminder"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "NEVER use manual git commit/push commands!"
      }), " Always use Release Workflow (RW) automation."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "github-actions-integration",
      children: "GitHub Actions Integration"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "basic-release-workflow",
      children: "Basic Release Workflow"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "# .github/workflows/release.yml\nname: Release\n\non:\n  workflow_dispatch:\n    inputs:\n      mode:\n        description: 'Release mode'\n        required: true\n        default: 'registry'\n        type: choice\n        options:\n        - registry\n        - task_touch\n\njobs:\n  release:\n    runs-on: ubuntu-latest\n    permissions:\n      contents: write\n      packages: write\n      \n    steps:\n      - name: Checkout repository\n        uses: actions/checkout@v4\n        with:\n          fetch-depth: 0\n          token: ${{ secrets.GITHUB_TOKEN }}\n\n      - name: Setup Python\n        uses: actions/setup-python@v4\n        with:\n          python-version: '3.11'\n\n      - name: Install dependencies\n        run: |\n          pip install pyyaml\n\n      - name: Configure SemVer Strategy\n        run: |\n          sed -i \"s/semver_mapping_strategy: .*/semver_mapping_strategy: ${{ github.event.inputs.mode }}/\" rw-config.yaml\n          echo \"Configured strategy: ${{ github.event.inputs.mode }}\"\n\n      - name: Validate Configuration\n        run: |\n          python3 -c \"\n          import yaml\n          with open('rw-config.yaml', 'r') as f:\n              config = yaml.safe_load(f)\n          print(f'Strategy: {config[\\\"semver_mapping_strategy\\\"]}')\n          print('Configuration validation: PASSED')\n          \"\n\n      - name: Execute Release Workflow\n        run: |\n          echo \"RW\" | python3 -c \"\n          import sys\n          import os\n          sys.path.insert(0, 'packages/frameworks/workflow-mgt/scripts')\n          \n          # Set environment variables for CI\n          os.environ['CI'] = 'true'\n          os.environ['GITHUB_TOKEN'] = '${{ secrets.GITHUB_TOKEN }}'\n          \n          # Import and execute workflow\n          try:\n              from workflow_orchestrator import WorkflowOrchestrator\n              wo = WorkflowOrchestrator()\n              result = wo.execute_workflow('release-workflow.yaml')\n              print(f'Release result: {result}')\n          except Exception as e:\n              print(f'Release failed: {e}')\n              sys.exit(1)\n          \"\n\n      - name: Verify Release\n        run: |\n          # Check if tag was created\n          if [ \"${{ github.event.inputs.mode }}\" = \"task_touch\" ]; then\n            TAG=$(python3 -c \"\n            import sys\n            sys.path.insert(0, 'packages/frameworks/workflow-mgt/scripts/version')\n            from semver_converter import convert_version_string\n            import re\n            with open('src/fynd_deals/version.py', 'r') as f:\n                content = f.read()\n            version_match = re.search(r'VERSION_STRING = \\\"([^\\\"]+)\\\"', content)\n            if version_match:\n                internal_version = version_match.group(1)\n                semver = convert_version_string(internal_version, 'task_touch')\n                print(semver)\n            \")\n          else\n            TAG=$(python3 -c \"\n            import re\n            with open('src/fynd_deals/version.py', 'r') as f:\n                content = f.read()\n            version_match = re.search(r'VERSION_STRING = \\\"([^\\\"]+)\\\"', content)\n            if version_match:\n                print(version_match.group(1))\n            \")\n          fi\n          \n          echo \"Expected tag: $TAG\"\n          git tag -l | grep \"$TAG\" || {\n            echo \"❌ Tag $TAG not found\"\n            exit 1\n          }\n          echo \"✅ Release verification passed\"\n\n      - name: Create GitHub Release\n        uses: actions/create-release@v1\n        env:\n          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}\n        with:\n          tag_name: ${{ steps.get-tag.outputs.tag }}\n          release_name: Release ${{ steps.get-tag.outputs.tag }}\n          draft: false\n          prerelease: false\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "advanced-release-workflow-with-validation",
      children: "Advanced Release Workflow with Validation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "# .github/workflows/release-advanced.yml\nname: Advanced Release\n\non:\n  workflow_dispatch:\n    inputs:\n      mode:\n        description: 'Release mode'\n        required: true\n        default: 'registry'\n        type: choice\n        options:\n        - registry\n        - task_touch\n      skip_validation:\n        description: 'Skip validation steps'\n        required: false\n        default: false\n        type: boolean\n      create_github_release:\n        description: 'Create GitHub release'\n        required: false\n        default: true\n        type: boolean\n\njobs:\n  pre-release:\n    runs-on: ubuntu-latest\n    outputs:\n      version: ${{ steps.version.outputs.version }}\n      tag: ${{ steps.version.outputs.tag }}\n      strategy: ${{ steps.config.outputs.strategy }}\n    \n    steps:\n      - name: Checkout repository\n        uses: actions/checkout@v4\n        with:\n          fetch-depth: 0\n\n      - name: Setup Python\n        uses: actions/setup-python@v4\n        with:\n          python-version: '3.11'\n\n      - name: Install dependencies\n        run: |\n          pip install pyyaml\n\n      - name: Configure Release\n        run: |\n          # Backup current config\n          cp rw-config.yaml rw-config.yaml.backup\n          \n          # Update strategy\n          sed -i \"s/semver_mapping_strategy: .*/semver_mapping_strategy: ${{ github.event.inputs.mode }}/\" rw-config.yaml\n          \n          # Add CI-specific settings\n          if [ \"${{ github.event.inputs.skip_validation }}\" = \"true\" ]; then\n            echo \"skip_validation: true\" >> rw-config.yaml\n          fi\n          \n          if [ \"${{ github.event.inputs.create_github_release }}\" = \"false\" ]; then\n            echo \"skip_github_release: true\" >> rw-config.yaml\n          fi\n\n      - name: Get Version and Tag\n        id: version\n        run: |\n          python3 -c \"\n          import sys\n          sys.path.insert(0, 'packages/frameworks/workflow-mgt/scripts/version')\n          from semver_converter import convert_version_string\n          import re\n          import yaml\n          \n          # Get configuration\n          with open('rw-config.yaml', 'r') as f:\n              config = yaml.safe_load(f)\n          strategy = config['semver_mapping_strategy']\n          \n          # Get current version\n          with open('src/fynd_deals/version.py', 'r') as f:\n              content = f.read()\n          version_match = re.search(r'VERSION_STRING = \\\"([^\\\"]+)\\\"', content)\n          if version_match:\n              internal_version = version_match.group(1)\n              print(f'internal_version={internal_version}')\n              \n              if strategy == 'task_touch':\n                  semver = convert_version_string(internal_version, 'task_touch')\n                  print(f'tag={semver}')\n              else:\n                  print(f'tag={internal_version}')\n              \n              print(f'version={internal_version}')\n              print(f'strategy={strategy}')\n          \"\n\n      - name: Validate Configuration\n        id: config\n        run: |\n          python3 -c \"\n          import yaml\n          with open('rw-config.yaml', 'r') as f:\n              config = yaml.safe_load(f)\n          print(f'strategy={config[\\\"semver_mapping_strategy\\\"]}')\n          print('Configuration validation: PASSED')\n          \"\n\n      - name: Pre-release Checks\n        run: |\n          echo \"🔍 Running pre-release checks...\"\n          \n          # Check branch\n          BRANCH=$(git branch --show-current)\n          echo \"Current branch: $BRANCH\"\n          \n          # Validate branch format\n          if [[ ! \"$BRANCH\" =~ ^epic/[0-9] ]]; then\n            echo \"❌ Not on epic branch: $BRANCH\"\n            exit 1\n          fi\n          \n          # Check git status\n          if [ -n \"$(git status --porcelain)\" ]; then\n            echo \"❌ Working directory not clean\"\n            exit 1\n          fi\n          \n          echo \"✅ Pre-release checks passed\"\n\n  release:\n    runs-on: ubuntu-latest\n    needs: pre-release\n    permissions:\n      contents: write\n      packages: write\n      \n    steps:\n      - name: Checkout repository\n        uses: actions/checkout@v4\n        with:\n          fetch-depth: 0\n          token: ${{ secrets.GITHUB_TOKEN }}\n\n      - name: Setup Python\n        uses: actions/setup-python@v4\n        with:\n          python-version: '3.11'\n\n      - name: Install dependencies\n        run: |\n          pip install pyyaml\n\n      - name: Restore Configuration\n        run: |\n          # Configure with outputs from pre-release\n          sed -i \"s/semver_mapping_strategy: .*/semver_mapping_strategy: ${{ needs.pre-release.outputs.strategy }}/\" rw-config.yaml\n          \n          if [ \"${{ github.event.inputs.skip_validation }}\" = \"true\" ]; then\n            echo \"skip_validation: true\" >> rw-config.yaml\n          fi\n          \n          if [ \"${{ github.event.inputs.create_github_release }}\" = \"false\" ]; then\n            echo \"skip_github_release: true\" >> rw-config.yaml\n          fi\n\n      - name: Execute Release Workflow\n        run: |\n          echo \"🚀 Executing release workflow...\"\n          echo \"Mode: ${{ needs.pre-release.outputs.strategy }}\"\n          echo \"Expected tag: ${{ needs.pre-release.outputs.tag }}\"\n          \n          # Set environment variables\n          export CI=true\n          export GITHUB_TOKEN=\"${{ secrets.GITHUB_TOKEN }}\"\n          \n          # Execute release workflow\n          python3 -c \"\n          import sys\n          import os\n          sys.path.insert(0, 'packages/frameworks/workflow-mgt/scripts')\n          \n          try:\n              from workflow_orchestrator import WorkflowOrchestrator\n              wo = WorkflowOrchestrator()\n              result = wo.execute_workflow('release-workflow.yaml')\n              print(f'Release result: {result}')\n              \n              if not result.get('success', False):\n                  print('❌ Release workflow failed')\n                  sys.exit(1)\n              \n              print('✅ Release workflow completed')\n          except Exception as e:\n              print(f'❌ Release workflow error: {e}')\n              sys.exit(1)\n          \"\n\n      - name: Verify Release\n        run: |\n          echo \"🔍 Verifying release...\"\n          \n          # Check tag exists\n          if git tag -l | grep -q \"${{ needs.pre-release.outputs.tag }}\"; then\n            echo \"✅ Tag ${{ needs.pre-release.outputs.tag }} found\"\n          else\n            echo \"❌ Tag ${{ needs.pre-release.outputs.tag }} not found\"\n            exit 1\n          fi\n          \n          # Check tag points to correct commit\n          TAG_COMMIT=$(git rev-list -n 1 ${{ needs.pre-release.outputs.tag }})\n          HEAD_COMMIT=$(git rev-parse HEAD)\n          \n          if [ \"$TAG_COMMIT\" = \"$HEAD_COMMIT\" ]; then\n            echo \"✅ Tag points to correct commit\"\n          else\n            echo \"❌ Tag does not point to HEAD\"\n            exit 1\n          fi\n          \n          echo \"✅ Release verification passed\"\n\n      - name: Create GitHub Release\n        if: ${{ github.event.inputs.create_github_release == 'true' }}\n        uses: actions/create-release@v1\n        env:\n          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}\n        with:\n          tag_name: ${{ needs.pre-release.outputs.tag }}\n          release_name: Release ${{ needs.pre-release.outputs.tag }}\n          body: |\n            ## Release ${{ needs.pre-release.outputs.tag }}\n            \n            **Mode:** ${{ needs.pre-release.outputs.strategy }}\n            **Internal Version:** ${{ needs.pre-release.outputs.version }}\n            \n            ### Changes\n            [Release notes and changelog will be added here]\n            \n            ### Verification\n            - ✅ Release workflow completed\n            - ✅ Tag created successfully\n            - ✅ GitHub release created\n          draft: false\n          prerelease: false\n\n      - name: Notify Release Complete\n        run: |\n          echo \"🎉 Release completed successfully!\"\n          echo \"📋 Release details:\"\n          echo \"   Mode: ${{ needs.pre-release.outputs.strategy }}\"\n          echo \"   Tag: ${{ needs.pre-release.outputs.tag }}\"\n          echo \"   Version: ${{ needs.pre-release.outputs.version }}\"\n          echo \"   GitHub Release: ${{ github.event.inputs.create_github_release }}\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "cicd-pipeline-integration",
      children: "CI/CD Pipeline Integration"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "jenkins-pipeline-example",
      children: "Jenkins Pipeline Example"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-groovy",
        children: "// Jenkinsfile\npipeline {\n    agent any\n    \n    parameters {\n        choice(\n            name: 'RELEASE_MODE',\n            choices: ['registry', 'task_touch'],\n            description: 'Release mode'\n        )\n        booleanParam(\n            name: 'SKIP_VALIDATION',\n            defaultValue: false,\n            description: 'Skip validation steps'\n        )\n        booleanParam(\n            name: 'CREATE_GITHUB_RELEASE',\n            defaultValue: true,\n            description: 'Create GitHub release'\n        )\n    }\n    \n    environment {\n        GITHUB_TOKEN = credentials('github-token')\n        CI = 'true'\n    }\n    \n    stages {\n        stage('Pre-Release Checks') {\n            steps {\n                script {\n                    echo \"🔍 Running pre-release checks...\"\n                    \n                    // Check branch\n                    def branch = sh(script: 'git branch --show-current', returnStdout: true).trim()\n                    echo \"Current branch: ${branch}\"\n                    \n                    if (!branch.matches(/^epic\\/\\d+.*$/)) {\n                        error \"❌ Not on epic branch: ${branch}\"\n                    }\n                    \n                    // Check git status\n                    def status = sh(script: 'git status --porcelain', returnStdout: true).trim()\n                    if (status) {\n                        error \"❌ Working directory not clean\"\n                    }\n                    \n                    echo \"✅ Pre-release checks passed\"\n                }\n            }\n        }\n        \n        stage('Configure Release') {\n            steps {\n                script {\n                    echo \"🔧 Configuring release...\"\n                    \n                    // Backup current config\n                    sh 'cp rw-config.yaml rw-config.yaml.backup'\n                    \n                    // Update strategy\n                    sh \"sed -i 's/semver_mapping_strategy: .*/semver_mapping_strategy: ${params.RELEASE_MODE}/' rw-config.yaml\"\n                    \n                    // Add CI-specific settings\n                    if (params.SKIP_VALIDATION) {\n                        sh 'echo \"skip_validation: true\" >> rw-config.yaml'\n                    }\n                    \n                    if (!params.CREATE_GITHUB_RELEASE) {\n                        sh 'echo \"skip_github_release: true\" >> rw-config.yaml'\n                    }\n                    \n                    echo \"✅ Configuration updated\"\n                }\n            }\n        }\n        \n        stage('Get Version Info') {\n            steps {\n                script {\n                    // Get version and tag information\n                    def versionInfo = sh(script: '''\n                        python3 -c \"\nimport sys\nsys.path.insert(0, 'packages/frameworks/workflow-mgt/scripts/version')\nfrom semver_converter import convert_version_string\nimport re\nimport yaml\n\n# Get configuration\nwith open('rw-config.yaml', 'r') as f:\n    config = yaml.safe_load(f)\nstrategy = config['semver_mapping_strategy']\n\n# Get current version\nwith open('src/fynd_deals/version.py', 'r') as f:\n    content = f.read()\nversion_match = re.search(r'VERSION_STRING = \\\"([^\\\"]+)\\\"', content)\nif version_match:\n    internal_version = version_match.group(1)\n    print(f'internal_version={internal_version}')\n    \n    if strategy == 'task_touch':\n        semver = convert_version_string(internal_version, 'task_touch')\n        print(f'tag={semver}')\n    else:\n        print(f'tag={internal_version}')\n    \n    print(f'strategy={strategy}')\n\"\n                    ''', returnStdout: true).trim()\n                    \n                    // Parse version info\n                    def versionMap = [:]\n                    versionInfo.eachLine { line ->\n                        def (key, value) = line.split('=')\n                        versionMap[key] = value\n                    }\n                    \n                    env.INTERNAL_VERSION = versionMap.internal_version\n                    env.RELEASE_TAG = versionMap.tag\n                    env.RELEASE_STRATEGY = versionMap.strategy\n                    \n                    echo \"📋 Version info:\"\n                    echo \"   Internal: ${env.INTERNAL_VERSION}\"\n                    echo \"   Tag: ${env.RELEASE_TAG}\"\n                    echo \"   Strategy: ${env.RELEASE_STRATEGY}\"\n                }\n            }\n        }\n        \n        stage('Execute Release') {\n            steps {\n                script {\n                    echo \"🚀 Executing release workflow...\"\n                    \n                    sh \"\"\"\n                        python3 -c \"\nimport sys\nimport os\nsys.path.insert(0, 'packages/frameworks/workflow-mgt/scripts')\n\ntry:\n    from workflow_orchestrator import WorkflowOrchestrator\n    wo = WorkflowOrchestrator()\n    result = wo.execute_workflow('release-workflow.yaml')\n    print(f'Release result: {result}')\n    \n    if not result.get('success', False):\n        print('❌ Release workflow failed')\n        sys.exit(1)\n    \n    print('✅ Release workflow completed')\nexcept Exception as e:\n    print(f'❌ Release workflow error: {e}')\n    sys.exit(1)\n\"\n                    \"\"\"\n                }\n            }\n        }\n        \n        stage('Verify Release') {\n            steps {\n                script {\n                    echo \"🔍 Verifying release...\"\n                    \n                    // Check tag exists\n                    def tagExists = sh(script: \"git tag -l | grep -q '${env.RELEASE_TAG}'\", returnStatus: true) == 0\n                    if (!tagExists) {\n                        error \"❌ Tag ${env.RELEASE_TAG} not found\"\n                    }\n                    echo \"✅ Tag ${env.RELEASE_TAG} found\"\n                    \n                    // Check tag points to correct commit\n                    def tagCommit = sh(script: \"git rev-list -n 1 ${env.RELEASE_TAG}\", returnStdout: true).trim()\n                    def headCommit = sh(script: \"git rev-parse HEAD\", returnStdout: true).trim()\n                    \n                    if (tagCommit != headCommit) {\n                        error \"❌ Tag does not point to HEAD\"\n                    }\n                    echo \"✅ Tag points to correct commit\"\n                    \n                    echo \"✅ Release verification passed\"\n                }\n            }\n        }\n        \n        stage('Create GitHub Release') {\n            when {\n                expression { params.CREATE_GITHUB_RELEASE }\n            }\n            steps {\n                script {\n                    echo \"🌐 Creating GitHub release...\"\n                    \n                    // Create GitHub release using gh CLI\n                    sh \"\"\"\n                        gh release create ${env.RELEASE_TAG} \\\\\n                        --title \"Release ${env.RELEASE_TAG}\" \\\\\n                        --notes \"## Release ${env.RELEASE_TAG}\n\n**Mode:** ${env.RELEASE_STRATEGY}\n**Internal Version:** ${env.INTERNAL_VERSION}\n\n### Changes\n[Release notes and changelog will be added here]\n\n### Verification\n- ✅ Release workflow completed\n- ✅ Tag created successfully\n- ✅ GitHub release created\n                    \"\"\"\n                    \n                    echo \"✅ GitHub release created\"\n                }\n            }\n        }\n    }\n    \n    post {\n        success {\n            echo \"🎉 Release completed successfully!\"\n            echo \"📋 Release details:\"\n            echo \"   Mode: ${env.RELEASE_STRATEGY}\"\n            echo \"   Tag: ${env.RELEASE_TAG}\"\n            echo \"   Version: ${env.INTERNAL_VERSION}\"\n            echo \"   GitHub Release: ${params.CREATE_GITHUB_RELEASE}\"\n        }\n        \n        failure {\n            echo \"❌ Release failed!\"\n            \n            // Restore configuration\n            sh 'cp rw-config.yaml.backup rw-config.yaml || true'\n            \n            // Clean up any partial releases\n            sh \"\"\"\n                if git tag -l | grep -q '${env.RELEASE_TAG}'; then\n                    git tag -d ${env.RELEASE_TAG}\n                    git push origin :refs/tags/${env.RELEASE_TAG} || true\n                fi\n            \"\"\"\n        }\n        \n        always {\n            // Clean up\n            sh 'rm -f rw-config.yaml.backup'\n        }\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "gitlab-cicd-example",
      children: "GitLab CI/CD Example"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "# .gitlab-ci.yml\nstages:\n  - validate\n  - release\n  - deploy\n\nvariables:\n  GIT_STRATEGY: clone\n  GIT_DEPTH: 0\n\nrelease:\n  stage: release\n  image: python:3.9\n  rules:\n    - if: $CI_PIPELINE_SOURCE == \"web\"\n  variables:\n    RELEASE_MODE: $RELEASE_MODE\n    SKIP_VALIDATION: $SKIP_VALIDATION\n    CREATE_GITHUB_RELEASE: $CREATE_GITHUB_RELEASE\n  before_script:\n    - apt-get update -y\n    - apt-get install -y git\n    - pip install pyyaml\n    - git config --global user.email \"ci@example.com\"\n    - git config --global user.name \"CI Pipeline\"\n  script:\n    - |\n      echo \"🔍 Running pre-release checks...\"\n      \n      # Check branch\n      BRANCH=$(git branch --show-current)\n      echo \"Current branch: $BRANCH\"\n      \n      if [[ ! \"$BRANCH\" =~ ^epic/[0-9] ]]; then\n        echo \"❌ Not on epic branch: $BRANCH\"\n        exit 1\n      fi\n      \n      # Check git status\n      if [ -n \"$(git status --porcelain)\" ]; then\n        echo \"❌ Working directory not clean\"\n        exit 1\n      fi\n      \n      echo \"✅ Pre-release checks passed\"\n    - |\n      echo \"🔧 Configuring release...\"\n      \n      # Backup current config\n      cp rw-config.yaml rw-config.yaml.backup\n      \n      # Update strategy\n      sed -i \"s/semver_mapping_strategy: .*/semver_mapping_strategy: $RELEASE_MODE/\" rw-config.yaml\n      \n      # Add CI-specific settings\n      if [ \"$SKIP_VALIDATION\" = \"true\" ]; then\n        echo \"skip_validation: true\" >> rw-config.yaml\n      fi\n      \n      if [ \"$CREATE_GITHUB_RELEASE\" = \"false\" ]; then\n        echo \"skip_github_release: true\" >> rw-config.yaml\n      fi\n      \n      echo \"✅ Configuration updated\"\n    - |\n      echo \"📋 Getting version info...\"\n      \n      python3 -c \"\nimport sys\nsys.path.insert(0, 'packages/frameworks/workflow-mgt/scripts/version')\nfrom semver_converter import convert_version_string\nimport re\nimport yaml\n\n# Get configuration\nwith open('rw-config.yaml', 'r') as f:\n    config = yaml.safe_load(f)\nstrategy = config['semver_mapping_strategy']\n\n# Get current version\nwith open('src/fynd_deals/version.py', 'r') as f:\n    content = f.read()\nversion_match = re.search(r'VERSION_STRING = \\\"([^\\\"]+)\\\"', content)\nif version_match:\n    internal_version = version_match.group(1)\n    print(f'internal_version={internal_version}')\n    \n    if strategy == 'task_touch':\n        semver = convert_version_string(internal_version, 'task_touch')\n        print(f'tag={semver}')\n    else:\n        print(f'tag={internal_version}')\n    \n    print(f'strategy={strategy}')\n\" > version_info.txt\n      \n      # Parse version info\n      export INTERNAL_VERSION=$(grep internal_version version_info.txt | cut -d= -f2)\n      export RELEASE_TAG=$(grep tag version_info.txt | cut -d= -f2)\n      export RELEASE_STRATEGY=$(grep strategy version_info.txt | cut -d= -f2)\n      \n      echo \"📋 Version info:\"\n      echo \"   Internal: $INTERNAL_VERSION\"\n      echo \"   Tag: $RELEASE_TAG\"\n      echo \"   Strategy: $RELEASE_STRATEGY\"\n    - |\n      echo \"🚀 Executing release workflow...\"\n      \n      python3 -c \"\nimport sys\nimport os\nsys.path.insert(0, 'packages/frameworks/workflow-mgt/scripts')\n\ntry:\n    from workflow_orchestrator import WorkflowOrchestrator\n    wo = WorkflowOrchestrator()\n    result = wo.execute_workflow('release-workflow.yaml')\n    print(f'Release result: {result}')\n    \n    if not result.get('success', False):\n        print('❌ Release workflow failed')\n        sys.exit(1)\n    \n    print('✅ Release workflow completed')\nexcept Exception as e:\n    print(f'❌ Release workflow error: {e}')\n    sys.exit(1)\n\"\n    - |\n      echo \"🔍 Verifying release...\"\n      \n      # Check tag exists\n      if git tag -l | grep -q \"$RELEASE_TAG\"; then\n        echo \"✅ Tag $RELEASE_TAG found\"\n      else\n        echo \"❌ Tag $RELEASE_TAG not found\"\n        exit 1\n      fi\n      \n      # Check tag points to correct commit\n      TAG_COMMIT=$(git rev-list -n 1 $RELEASE_TAG)\n      HEAD_COMMIT=$(git rev-parse HEAD)\n      \n      if [ \"$TAG_COMMIT\" = \"$HEAD_COMMIT\" ]; then\n        echo \"✅ Tag points to correct commit\"\n      else\n        echo \"❌ Tag does not point to HEAD\"\n        exit 1\n      fi\n      \n      echo \"✅ Release verification passed\"\n    - |\n      if [ \"$CREATE_GITHUB_RELEASE\" = \"true\" ]; then\n        echo \"🌐 Creating GitHub release...\"\n        \n        # Create GitHub release (requires gh CLI and GitHub token)\n        if command -v gh &> /dev/null; then\n          gh release create $RELEASE_TAG \\\n            --title \"Release $RELEASE_TAG\" \\\n            --notes \"## Release $RELEASE_TAG\n\n**Mode:** $RELEASE_STRATEGY\n**Internal Version:** $INTERNAL_VERSION\n\n### Changes\n[Release notes and changelog will be added here]\n\n### Verification\n- ✅ Release workflow completed\n- ✅ Tag created successfully\n- ✅ GitHub release created\"\n          \n          echo \"✅ GitHub release created\"\n        else\n          echo \"⚠️  gh CLI not available, skipping GitHub release\"\n        fi\n      fi\n  after_script:\n    - |\n      echo \"🎉 Release completed successfully!\"\n      echo \"📋 Release details:\"\n      echo \"   Mode: $RELEASE_STRATEGY\"\n      echo \"   Tag: $RELEASE_TAG\"\n      echo \"   Version: $INTERNAL_VERSION\"\n      echo \"   GitHub Release: $CREATE_GITHUB_RELEASE\"\n  artifacts:\n    reports:\n      junit: test-results.xml\n    paths:\n      - version_info.txt\n  only:\n    - web\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "docker-integration",
      children: "Docker Integration"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "dockerfile-with-release-automation",
      children: "Dockerfile with Release Automation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-dockerfile",
        children: "# Dockerfile.release\nFROM python:3.9-slim\n\n# Install dependencies\nRUN apt-get update && apt-get install -y \\\n    git \\\n    && rm -rf /var/lib/apt/lists/*\n\n# Set up Python\nRUN pip install pyyaml\n\n# Copy repository\nWORKDIR /app\nCOPY . .\n\n# Set environment variables\nENV CI=true\nENV PYTHONPATH=/app/packages/frameworks/workflow-mgt/scripts\n\n# Release script\nRUN echo '#!/bin/bash\\n\\\necho \"🚀 Docker Release Automation\"\\n\\\n\\n\\\n# Check arguments\\n\\\nif [ $# -lt 1 ]; then\\n\\\n    echo \"Usage: docker run release-automation <mode> [skip_validation] [create_github_release]\"\\n\\\n    echo \"Modes: registry, task_touch\"\\n\\\n    exit 1\\n\\\nfi\\n\\\n\\n\\\nMODE=$1\\n\\\nSKIP_VALIDATION=${2:-false}\\n\\\nCREATE_GITHUB_RELEASE=${3:-true}\\n\\\n\\n\\\necho \"📋 Release configuration:\"\\n\\\necho \"   Mode: $MODE\"\\n\\\necho \"   Skip validation: $SKIP_VALIDATION\"\\n\\\necho \"   Create GitHub release: $CREATE_GITHUB_RELEASE\"\\n\\\n\\n\\\n# Configure release\\n\\\ncp rw-config.yaml rw-config.yaml.backup\\n\\\nsed -i \"s/semver_mapping_strategy: .*/semver_mapping_strategy: $MODE/\" rw-config.yaml\\n\\\n\\n\\\nif [ \"$SKIP_VALIDATION\" = \"true\" ]; then\\n\\\n    echo \"skip_validation: true\" >> rw-config.yaml\\n\\\nfi\\n\\\n\\n\\\nif [ \"$CREATE_GITHUB_RELEASE\" = \"false\" ]; then\\n\\\n    echo \"skip_github_release: true\" >> rw-config.yaml\\n\\\nfi\\n\\\n\\n\\\n# Execute release\\n\\\npython3 -c \"\\n\\\nimport sys\\n\\\nsys.path.insert(0, \\\"packages/frameworks/workflow-mgt/scripts\\\")\\n\\\n\\n\\\ntry:\\n\\\n    from workflow_orchestrator import WorkflowOrchestrator\\n\\\n    wo = WorkflowOrchestrator()\\n\\\n    result = wo.execute_workflow(\\\"release-workflow.yaml\\\")\\n\\\n    print(f\\\"Release result: {result}\\\")\\n\\\n    \\n\\\n    if not result.get(\\\"success\\\", False):\\n\\\n        print(\\\"❌ Release workflow failed\\\")\\n\\\n        sys.exit(1)\\n\\\n    \\n\\\n    print(\\\"✅ Release workflow completed\\\")\\n\\\nexcept Exception as e:\\n\\\n    print(f\\\"❌ Release workflow error: {e}\\\")\\n\\\n    sys.exit(1)\\n\\\n\"\\n\\\n\\n\\\necho \"🎉 Release completed!\"\\n\\\n' > /usr/local/bin/release-automation && chmod +x /usr/local/bin/release-automation\n\nENTRYPOINT [\"/usr/local/bin/release-automation\"]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "docker-compose-example",
      children: "Docker Compose Example"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "# docker-compose.release.yml\nversion: '3.8'\n\nservices:\n  release:\n    build:\n      context: .\n      dockerfile: Dockerfile.release\n    environment:\n      - GITHUB_TOKEN=${GITHUB_TOKEN}\n      - CI=true\n    volumes:\n      - .:/app\n      - ~/.gitconfig:/root/.gitconfig\n    working_dir: /app\n    command: [\"${RELEASE_MODE:-registry}\", \"${SKIP_VALIDATION:-false}\", \"${CREATE_GITHUB_RELEASE:-true}\"]\n    \n  release-task-touch:\n    extends: release\n    command: [\"task_touch\", \"false\", \"true\"]\n    \n  release-registry:\n    extends: release\n    command: [\"registry\", \"false\", \"true\"]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "testing-integration",
      children: "Testing Integration"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "release-integration-tests",
      children: "Release Integration Tests"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "# test_release_integration.py\nimport pytest\nimport subprocess\nimport tempfile\nimport os\nimport yaml\nfrom pathlib import Path\n\nclass TestReleaseIntegration:\n    \"\"\"Test release automation integration\"\"\"\n    \n    @pytest.fixture\n    def temp_repo(self):\n        \"\"\"Create a temporary repository for testing\"\"\"\n        with tempfile.TemporaryDirectory() as temp_dir:\n            repo_path = Path(temp_dir)\n            \n            # Initialize git repo\n            subprocess.run(['git', 'init'], cwd=repo_path, check=True)\n            subprocess.run(['git', 'config', 'user.name', 'Test User'], cwd=repo_path, check=True)\n            subprocess.run(['git', 'config', 'user.email', 'test@example.com'], cwd=repo_path, check=True)\n            \n            # Create basic structure\n            (repo_path / 'src' / 'fynd_deals').mkdir(parents=True, exist_ok=True)\n            (repo_path / 'packages' / 'frameworks' / 'workflow mgt' / 'scripts').mkdir(parents=True, exist_ok=True)\n            (repo_path / 'docs' / 'changelog-and-release-notes' / 'changelog-archive').mkdir(parents=True, exist_ok=True)\n            \n            # Create version file\n            version_content = '''\nVERSION_STRING = \"0.5.1.48+1\"\nVERSION_EPIC = 5\nVERSION_STORY = 1\nVERSION_TASK = 48\nVERSION_BUILD = 1\n'''\n            (repo_path / 'src' / 'fynd_deals' / 'version.py').write_text(version_content)\n            \n            # Create rw-config.yaml\n            config_content = {\n                'version_file': 'src/fynd_deals/version.py',\n                'main_changelog': 'CHANGELOG.md',\n                'changelog_dir': 'docs/changelog-and-release-notes/changelog-archive',\n                'scripts_path': 'packages/frameworks/workflow-mgt/scripts',\n                'readme_file': 'README.md',\n                'semver_mapping_strategy': 'registry',\n                'use_kanban': False\n            }\n            with open(repo_path / 'rw-config.yaml', 'w') as f:\n                yaml.dump(config_content, f)\n            \n            # Create initial commit\n            subprocess.run(['git', 'add', '.'], cwd=repo_path, check=True)\n            subprocess.run(['git', 'commit', '-m', 'Initial commit'], cwd=repo_path, check=True)\n            \n            # Create epic branch\n            subprocess.run(['git', 'checkout', '-b', 'epic/5'], cwd=repo_path, check=True)\n            \n            yield repo_path\n    \n    def test_registry_mode_release(self, temp_repo):\n        \"\"\"Test registry mode release\"\"\"\n        # Configure for registry mode\n        config_path = temp_repo / 'rw-config.yaml'\n        with open(config_path, 'r') as f:\n            config = yaml.safe_load(f)\n        config['semver_mapping_strategy'] = 'registry'\n        with open(config_path, 'w') as f:\n            yaml.dump(config, f)\n        \n        # Execute release workflow\n        result = subprocess.run([\n            'python3', '-c',\n            '''\nimport sys\nsys.path.insert(0, 'packages/frameworks/workflow-mgt/scripts')\nfrom workflow_orchestrator import WorkflowOrchestrator\nwo = WorkflowOrchestrator()\nresult = wo.execute_workflow('release-workflow.yaml')\nprint(f\"success={result.get('success', False)}\")\n'''\n        ], cwd=temp_repo, capture_output=True, text=True)\n        \n        assert result.returncode == 0\n        assert 'success=True' in result.stdout\n        \n        # Verify tag was created\n        tag_result = subprocess.run(['git', 'tag', '-l'], cwd=temp_repo, capture_output=True, text=True)\n        assert 'v0.5.1.48+1' in tag_result.stdout\n    \n    def test_task_touch_mode_release(self, temp_repo):\n        \"\"\"Test task-touch mode release\"\"\"\n        # Configure for task-touch mode\n        config_path = temp_repo / 'rw-config.yaml'\n        with open(config_path, 'r') as f:\n            config = yaml.safe_load(f)\n        config['semver_mapping_strategy'] = 'task_touch'\n        with open(config_path, 'w') as f:\n            yaml.dump(config, f)\n        \n        # Execute release workflow\n        result = subprocess.run([\n            'python3', '-c',\n            '''\nimport sys\nsys.path.insert(0, 'packages/frameworks/workflow-mgt/scripts')\nfrom workflow_orchestrator import WorkflowOrchestrator\nwo = WorkflowOrchestrator()\nresult = wo.execute_workflow('release-workflow.yaml')\nprint(f\"success={result.get('success', False)}\")\n'''\n        ], cwd=temp_repo, capture_output=True, text=True)\n        \n        assert result.returncode == 0\n        assert 'success=True' in result.stdout\n        \n        # Verify SemVer tag was created\n        tag_result = subprocess.run(['git', 'tag', '-l'], cwd=temp_repo, capture_output=True, text=True)\n        # Should contain SemVer tag (exact format depends on semver-registry.yaml)\n        assert len(tag_result.stdout.strip().split('\\n')) >= 1\n    \n    def test_configuration_validation(self, temp_repo):\n        \"\"\"Test configuration validation\"\"\"\n        # Test invalid configuration\n        config_path = temp_repo / 'rw-config.yaml'\n        with open(config_path, 'r') as f:\n            config = yaml.safe_load(f)\n        config['semver_mapping_strategy'] = 'invalid'\n        with open(config_path, 'w') as f:\n            yaml.dump(config, f)\n        \n        # Should fail validation\n        result = subprocess.run([\n            'python3', '-c',\n            '''\nimport sys\nsys.path.insert(0, 'packages/frameworks/workflow-mgt/scripts')\nfrom workflow_orchestrator import WorkflowOrchestrator\nwo = WorkflowOrchestrator()\nresult = wo.execute_workflow('release-workflow.yaml')\nprint(f\"success={result.get('success', False)}\")\n'''\n        ], cwd=temp_repo, capture_output=True, text=True)\n        \n        assert result.returncode != 0\n        assert 'success=False' in result.stdout\n\nif __name__ == '__main__':\n    pytest.main([__file__])\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "monitoring-and-alerting",
      children: "Monitoring and Alerting"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "release-monitoring-script",
      children: "Release Monitoring Script"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "# monitor_releases.py\nimport subprocess\nimport json\nimport time\nfrom datetime import datetime\nfrom pathlib import Path\n\nclass ReleaseMonitor:\n    \"\"\"Monitor release automation and send alerts\"\"\"\n    \n    def __init__(self, config_file='monitor-config.json'):\n        self.config = self.load_config(config_file)\n        self.alerts_sent = []\n    \n    def load_config(self, config_file):\n        \"\"\"Load monitoring configuration\"\"\"\n        default_config = {\n            'check_interval': 300,  # 5 minutes\n            'max_release_time': 1800,  # 30 minutes\n            'alert_channels': ['email', 'slack'],\n            'email_recipients': ['devops@example.com'],\n            'slack_webhook': 'https://hooks.slack.com/services/...',\n            'repositories': ['origin']\n        }\n        \n        if Path(config_file).exists():\n            with open(config_file, 'r') as f:\n                return json.load(f)\n        else:\n            with open(config_file, 'w') as f:\n                json.dump(default_config, f, indent=2)\n            return default_config\n    \n    def check_release_status(self):\n        \"\"\"Check current release status\"\"\"\n        try:\n            # Get current branch\n            branch = subprocess.check_output(['git', 'branch', '--show-current'], text=True).strip()\n            \n            # Get current version\n            version = subprocess.check_output([\n                'python3', '-c',\n                '''\nimport re\nwith open('src/fynd_deals/version.py', 'r') as f:\n    content = f.read()\nversion_match = re.search(r'VERSION_STRING = \\\"([^\\\"]+)\\\"', content)\nif version_match:\n    print(version_match.group(1))\n'''\n            ], text=True).strip()\n            \n            # Get recent tags\n            tags = subprocess.check_output(['git', 'tag', '--sort=-version:refname'], text=True).strip().split('\\n')[:5]\n            \n            # Check for in-progress releases\n            in_progress = self.check_in_progress_releases()\n            \n            return {\n                'timestamp': datetime.now().isoformat(),\n                'branch': branch,\n                'current_version': version,\n                'recent_tags': tags,\n                'in_progress': in_progress,\n                'status': 'healthy'\n            }\n        except Exception as e:\n            return {\n                'timestamp': datetime.now().isoformat(),\n                'status': 'error',\n                'error': str(e)\n            }\n    \n    def check_in_progress_releases(self):\n        \"\"\"Check for releases in progress\"\"\"\n        # Check for release workflow processes\n        try:\n            result = subprocess.check_output(['ps', 'aux'], text=True)\n            return 'workflow_orchestrator' in result or 'release-workflow' in result\n        except:\n            return False\n    \n    def send_alert(self, message, level='warning'):\n        \"\"\"Send alert to configured channels\"\"\"\n        alert_data = {\n            'timestamp': datetime.now().isoformat(),\n            'level': level,\n            'message': message,\n            'repository': 'ai-dev-kit'\n        }\n        \n        # Avoid duplicate alerts\n        alert_key = f\"{level}:{message}\"\n        if alert_key in self.alerts_sent:\n            return\n        \n        if 'email' in self.config['alert_channels']:\n            self.send_email_alert(alert_data)\n        \n        if 'slack' in self.config['alert_channels']:\n            self.send_slack_alert(alert_data)\n        \n        self.alerts_sent.append(alert_key)\n    \n    def send_email_alert(self, alert_data):\n        \"\"\"Send email alert (placeholder implementation)\"\"\"\n        print(f\"📧 Email Alert: {alert_data['level'].upper()} - {alert_data['message']}\")\n        # Implement actual email sending here\n    \n    def send_slack_alert(self, alert_data):\n        \"\"\"Send Slack alert (placeholder implementation)\"\"\"\n        print(f\"💬 Slack Alert: {alert_data['level'].upper()} - {alert_data['message']}\")\n        # Implement actual Slack webhook call here\n    \n    def monitor_loop(self):\n        \"\"\"Main monitoring loop\"\"\"\n        print(\"🔍 Starting release monitoring...\")\n        \n        while True:\n            status = self.check_release_status()\n            \n            if status['status'] == 'error':\n                self.send_alert(f\"Release monitoring error: {status['error']}\", 'error')\n            \n            elif status['in_progress']:\n                # Check if release is taking too long\n                if self.is_release_stale(status):\n                    self.send_alert(\"Release appears to be stuck or taking too long\", 'warning')\n            \n            # Clean old alerts (older than 24 hours)\n            self.cleanup_alerts()\n            \n            time.sleep(self.config['check_interval'])\n    \n    def is_release_stale(self, status):\n        \"\"\"Check if release is stale\"\"\"\n        # Implement logic to detect stale releases\n        # This could check tag timestamps, process ages, etc.\n        return False  # Placeholder\n    \n    def cleanup_alerts(self):\n        \"\"\"Clean up old alerts\"\"\"\n        # Remove alerts older than 24 hours\n        current_time = datetime.now()\n        self.alerts_sent = [\n            alert for alert in self.alerts_sent\n            if (current_time - datetime.fromisoformat(alert.split(':')[0])).total_seconds() < 86400\n        ]\n\nif __name__ == '__main__':\n    monitor = ReleaseMonitor()\n    monitor.monitor_loop()\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "security-considerations",
      children: "Security Considerations"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "secure-release-automation",
      children: "Secure Release Automation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "# .github/workflows/release-secure.yml\nname: Secure Release\n\non:\n  workflow_dispatch:\n    inputs:\n      mode:\n        description: 'Release mode'\n        required: true\n        default: 'registry'\n        type: choice\n        options:\n        - registry\n        - task_touch\n\njobs:\n  security-scan:\n    runs-on: ubuntu-latest\n    outputs:\n      scan-passed: ${{ steps.scan.outputs.passed }}\n    \n    steps:\n      - name: Checkout repository\n        uses: actions/checkout@v4\n        with:\n          fetch-depth: 0\n\n      - name: Security Scan\n        id: scan\n        run: |\n          echo \"🔒 Running security scan...\"\n          \n          # Check for secrets in configuration\n          if grep -r \"password\\|secret\\|token\" rw-config.yaml 2>/dev/null; then\n            echo \"❌ Secrets found in configuration\"\n            echo \"passed=false\" >> $GITHUB_OUTPUT\n            exit 1\n          fi\n          \n          # Check file permissions\n          if [ -x \"rw-config.yaml\" ]; then\n            echo \"❌ Configuration file is executable\"\n            echo \"passed=false\" >> $GITHUB_OUTPUT\n            exit 1\n          fi\n          \n          # Validate YAML syntax\n          if ! python3 -c \"import yaml; yaml.safe_load(open('rw-config.yaml'))\"; then\n            echo \"❌ Invalid YAML syntax\"\n            echo \"passed=false\" >> $GITHUB_OUTPUT\n            exit 1\n          fi\n          \n          echo \"✅ Security scan passed\"\n          echo \"passed=true\" >> $GITHUB_OUTPUT\n\n  release:\n    runs-on: ubuntu-latest\n    needs: security-scan\n    if: needs.security-scan.outputs.scan-passed == 'true'\n    permissions:\n      contents: write\n      packages: write\n      \n    steps:\n      - name: Checkout repository\n        uses: actions/checkout@v4\n        with:\n          fetch-depth: 0\n          token: ${{ secrets.GITHUB_TOKEN }}\n\n      - name: Setup Python\n        uses: actions/setup-python@v4\n        with:\n          python-version: '3.11'\n\n      - name: Install dependencies\n        run: |\n          pip install pyyaml\n\n      - name: Execute Release\n        run: |\n          echo \"🚀 Executing secure release...\"\n          # Release automation code here\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Remember:"
      }), " Always test integration changes in a development environment before applying to production!"]
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