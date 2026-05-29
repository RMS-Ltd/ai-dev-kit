# Release Integration Guides

**Purpose:** GitHub Actions and CI/CD pipeline integration examples for automated releases  
**Version:** 1.0.0  
**Last Updated:** 2026-03-10  

---

## 🚨 Critical Policy Reminder
**NEVER use manual git commit/push commands!** Always use Release Workflow (RW) automation.

---

## GitHub Actions Integration

### Basic Release Workflow

```yaml
# .github/workflows/release.yml
name: Release

on:
  workflow_dispatch:
    inputs:
      mode:
        description: 'Release mode'
        required: true
        default: 'registry'
        type: choice
        options:
        - registry
        - task_touch

jobs:
  release:
    runs-on: ubuntu-latest
    permissions:
      contents: write
      packages: write
      
    steps:
      - name: Checkout repository
        uses: actions/checkout@v4
        with:
          fetch-depth: 0
          token: ${{ secrets.GITHUB_TOKEN }}

      - name: Setup Python
        uses: actions/setup-python@v4
        with:
          python-version: '3.9'

      - name: Install dependencies
        run: |
          pip install pyyaml

      - name: Configure SemVer Strategy
        run: |
          sed -i "s/semver_mapping_strategy: .*/semver_mapping_strategy: ${{ github.event.inputs.mode }}/" rw-config.yaml
          echo "Configured strategy: ${{ github.event.inputs.mode }}"

      - name: Validate Configuration
        run: |
          python3 -c "
          import yaml
          with open('rw-config.yaml', 'r') as f:
              config = yaml.safe_load(f)
          print(f'Strategy: {config[\"semver_mapping_strategy\"]}')
          print('Configuration validation: PASSED')
          "

      - name: Execute Release Workflow
        run: |
          echo "RW" | python3 -c "
          import sys
          import os
          sys.path.insert(0, 'packages/frameworks/workflow mgt/scripts')
          
          # Set environment variables for CI
          os.environ['CI'] = 'true'
          os.environ['GITHUB_TOKEN'] = '${{ secrets.GITHUB_TOKEN }}'
          
          # Import and execute workflow
          try:
              from workflow_orchestrator import WorkflowOrchestrator
              wo = WorkflowOrchestrator()
              result = wo.execute_workflow('release-workflow.yaml')
              print(f'Release result: {result}')
          except Exception as e:
              print(f'Release failed: {e}')
              sys.exit(1)
          "

      - name: Verify Release
        run: |
          # Check if tag was created
          if [ "${{ github.event.inputs.mode }}" = "task_touch" ]; then
            TAG=$(python3 -c "
            import sys
            sys.path.insert(0, 'packages/frameworks/workflow mgt/scripts/version')
            from semver_converter import convert_version_string
            import re
            with open('src/fynd_deals/version.py', 'r') as f:
                content = f.read()
            version_match = re.search(r'VERSION_STRING = \"([^\"]+)\"', content)
            if version_match:
                internal_version = version_match.group(1)
                semver = convert_version_string(internal_version, 'task_touch')
                print(semver)
            ")
          else
            TAG=$(python3 -c "
            import re
            with open('src/fynd_deals/version.py', 'r') as f:
                content = f.read()
            version_match = re.search(r'VERSION_STRING = \"([^\"]+)\"', content)
            if version_match:
                print(version_match.group(1))
            ")
          fi
          
          echo "Expected tag: $TAG"
          git tag -l | grep "$TAG" || {
            echo "❌ Tag $TAG not found"
            exit 1
          }
          echo "✅ Release verification passed"

      - name: Create GitHub Release
        uses: actions/create-release@v1
        env:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
        with:
          tag_name: ${{ steps.get-tag.outputs.tag }}
          release_name: Release ${{ steps.get-tag.outputs.tag }}
          draft: false
          prerelease: false
```

### Advanced Release Workflow with Validation

```yaml
# .github/workflows/release-advanced.yml
name: Advanced Release

on:
  workflow_dispatch:
    inputs:
      mode:
        description: 'Release mode'
        required: true
        default: 'registry'
        type: choice
        options:
        - registry
        - task_touch
      skip_validation:
        description: 'Skip validation steps'
        required: false
        default: false
        type: boolean
      create_github_release:
        description: 'Create GitHub release'
        required: false
        default: true
        type: boolean

jobs:
  pre-release:
    runs-on: ubuntu-latest
    outputs:
      version: ${{ steps.version.outputs.version }}
      tag: ${{ steps.version.outputs.tag }}
      strategy: ${{ steps.config.outputs.strategy }}
    
    steps:
      - name: Checkout repository
        uses: actions/checkout@v4
        with:
          fetch-depth: 0

      - name: Setup Python
        uses: actions/setup-python@v4
        with:
          python-version: '3.9'

      - name: Install dependencies
        run: |
          pip install pyyaml

      - name: Configure Release
        run: |
          # Backup current config
          cp rw-config.yaml rw-config.yaml.backup
          
          # Update strategy
          sed -i "s/semver_mapping_strategy: .*/semver_mapping_strategy: ${{ github.event.inputs.mode }}/" rw-config.yaml
          
          # Add CI-specific settings
          if [ "${{ github.event.inputs.skip_validation }}" = "true" ]; then
            echo "skip_validation: true" >> rw-config.yaml
          fi
          
          if [ "${{ github.event.inputs.create_github_release }}" = "false" ]; then
            echo "skip_github_release: true" >> rw-config.yaml
          fi

      - name: Get Version and Tag
        id: version
        run: |
          python3 -c "
          import sys
          sys.path.insert(0, 'packages/frameworks/workflow mgt/scripts/version')
          from semver_converter import convert_version_string
          import re
          import yaml
          
          # Get configuration
          with open('rw-config.yaml', 'r') as f:
              config = yaml.safe_load(f)
          strategy = config['semver_mapping_strategy']
          
          # Get current version
          with open('src/fynd_deals/version.py', 'r') as f:
              content = f.read()
          version_match = re.search(r'VERSION_STRING = \"([^\"]+)\"', content)
          if version_match:
              internal_version = version_match.group(1)
              print(f'internal_version={internal_version}')
              
              if strategy == 'task_touch':
                  semver = convert_version_string(internal_version, 'task_touch')
                  print(f'tag={semver}')
              else:
                  print(f'tag={internal_version}')
              
              print(f'version={internal_version}')
              print(f'strategy={strategy}')
          "

      - name: Validate Configuration
        id: config
        run: |
          python3 -c "
          import yaml
          with open('rw-config.yaml', 'r') as f:
              config = yaml.safe_load(f)
          print(f'strategy={config[\"semver_mapping_strategy\"]}')
          print('Configuration validation: PASSED')
          "

      - name: Pre-release Checks
        run: |
          echo "🔍 Running pre-release checks..."
          
          # Check branch
          BRANCH=$(git branch --show-current)
          echo "Current branch: $BRANCH"
          
          # Validate branch format
          if [[ ! "$BRANCH" =~ ^epic/[0-9] ]]; then
            echo "❌ Not on epic branch: $BRANCH"
            exit 1
          fi
          
          # Check git status
          if [ -n "$(git status --porcelain)" ]; then
            echo "❌ Working directory not clean"
            exit 1
          fi
          
          echo "✅ Pre-release checks passed"

  release:
    runs-on: ubuntu-latest
    needs: pre-release
    permissions:
      contents: write
      packages: write
      
    steps:
      - name: Checkout repository
        uses: actions/checkout@v4
        with:
          fetch-depth: 0
          token: ${{ secrets.GITHUB_TOKEN }}

      - name: Setup Python
        uses: actions/setup-python@v4
        with:
          python-version: '3.9'

      - name: Install dependencies
        run: |
          pip install pyyaml

      - name: Restore Configuration
        run: |
          # Configure with outputs from pre-release
          sed -i "s/semver_mapping_strategy: .*/semver_mapping_strategy: ${{ needs.pre-release.outputs.strategy }}/" rw-config.yaml
          
          if [ "${{ github.event.inputs.skip_validation }}" = "true" ]; then
            echo "skip_validation: true" >> rw-config.yaml
          fi
          
          if [ "${{ github.event.inputs.create_github_release }}" = "false" ]; then
            echo "skip_github_release: true" >> rw-config.yaml
          fi

      - name: Execute Release Workflow
        run: |
          echo "🚀 Executing release workflow..."
          echo "Mode: ${{ needs.pre-release.outputs.strategy }}"
          echo "Expected tag: ${{ needs.pre-release.outputs.tag }}"
          
          # Set environment variables
          export CI=true
          export GITHUB_TOKEN="${{ secrets.GITHUB_TOKEN }}"
          
          # Execute release workflow
          python3 -c "
          import sys
          import os
          sys.path.insert(0, 'packages/frameworks/workflow mgt/scripts')
          
          try:
              from workflow_orchestrator import WorkflowOrchestrator
              wo = WorkflowOrchestrator()
              result = wo.execute_workflow('release-workflow.yaml')
              print(f'Release result: {result}')
              
              if not result.get('success', False):
                  print('❌ Release workflow failed')
                  sys.exit(1)
              
              print('✅ Release workflow completed')
          except Exception as e:
              print(f'❌ Release workflow error: {e}')
              sys.exit(1)
          "

      - name: Verify Release
        run: |
          echo "🔍 Verifying release..."
          
          # Check tag exists
          if git tag -l | grep -q "${{ needs.pre-release.outputs.tag }}"; then
            echo "✅ Tag ${{ needs.pre-release.outputs.tag }} found"
          else
            echo "❌ Tag ${{ needs.pre-release.outputs.tag }} not found"
            exit 1
          fi
          
          # Check tag points to correct commit
          TAG_COMMIT=$(git rev-list -n 1 ${{ needs.pre-release.outputs.tag }})
          HEAD_COMMIT=$(git rev-parse HEAD)
          
          if [ "$TAG_COMMIT" = "$HEAD_COMMIT" ]; then
            echo "✅ Tag points to correct commit"
          else
            echo "❌ Tag does not point to HEAD"
            exit 1
          fi
          
          echo "✅ Release verification passed"

      - name: Create GitHub Release
        if: ${{ github.event.inputs.create_github_release == 'true' }}
        uses: actions/create-release@v1
        env:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
        with:
          tag_name: ${{ needs.pre-release.outputs.tag }}
          release_name: Release ${{ needs.pre-release.outputs.tag }}
          body: |
            ## Release ${{ needs.pre-release.outputs.tag }}
            
            **Mode:** ${{ needs.pre-release.outputs.strategy }}
            **Internal Version:** ${{ needs.pre-release.outputs.version }}
            
            ### Changes
            [Release notes and changelog will be added here]
            
            ### Verification
            - ✅ Release workflow completed
            - ✅ Tag created successfully
            - ✅ GitHub release created
          draft: false
          prerelease: false

      - name: Notify Release Complete
        run: |
          echo "🎉 Release completed successfully!"
          echo "📋 Release details:"
          echo "   Mode: ${{ needs.pre-release.outputs.strategy }}"
          echo "   Tag: ${{ needs.pre-release.outputs.tag }}"
          echo "   Version: ${{ needs.pre-release.outputs.version }}"
          echo "   GitHub Release: ${{ github.event.inputs.create_github_release }}"
```

---

## CI/CD Pipeline Integration

### Jenkins Pipeline Example

```groovy
// Jenkinsfile
pipeline {
    agent any
    
    parameters {
        choice(
            name: 'RELEASE_MODE',
            choices: ['registry', 'task_touch'],
            description: 'Release mode'
        )
        booleanParam(
            name: 'SKIP_VALIDATION',
            defaultValue: false,
            description: 'Skip validation steps'
        )
        booleanParam(
            name: 'CREATE_GITHUB_RELEASE',
            defaultValue: true,
            description: 'Create GitHub release'
        )
    }
    
    environment {
        GITHUB_TOKEN = credentials('github-token')
        CI = 'true'
    }
    
    stages {
        stage('Pre-Release Checks') {
            steps {
                script {
                    echo "🔍 Running pre-release checks..."
                    
                    // Check branch
                    def branch = sh(script: 'git branch --show-current', returnStdout: true).trim()
                    echo "Current branch: ${branch}"
                    
                    if (!branch.matches(/^epic\/\d+.*$/)) {
                        error "❌ Not on epic branch: ${branch}"
                    }
                    
                    // Check git status
                    def status = sh(script: 'git status --porcelain', returnStdout: true).trim()
                    if (status) {
                        error "❌ Working directory not clean"
                    }
                    
                    echo "✅ Pre-release checks passed"
                }
            }
        }
        
        stage('Configure Release') {
            steps {
                script {
                    echo "🔧 Configuring release..."
                    
                    // Backup current config
                    sh 'cp rw-config.yaml rw-config.yaml.backup'
                    
                    // Update strategy
                    sh "sed -i 's/semver_mapping_strategy: .*/semver_mapping_strategy: ${params.RELEASE_MODE}/' rw-config.yaml"
                    
                    // Add CI-specific settings
                    if (params.SKIP_VALIDATION) {
                        sh 'echo "skip_validation: true" >> rw-config.yaml'
                    }
                    
                    if (!params.CREATE_GITHUB_RELEASE) {
                        sh 'echo "skip_github_release: true" >> rw-config.yaml'
                    }
                    
                    echo "✅ Configuration updated"
                }
            }
        }
        
        stage('Get Version Info') {
            steps {
                script {
                    // Get version and tag information
                    def versionInfo = sh(script: '''
                        python3 -c "
import sys
sys.path.insert(0, 'packages/frameworks/workflow mgt/scripts/version')
from semver_converter import convert_version_string
import re
import yaml

# Get configuration
with open('rw-config.yaml', 'r') as f:
    config = yaml.safe_load(f)
strategy = config['semver_mapping_strategy']

# Get current version
with open('src/fynd_deals/version.py', 'r') as f:
    content = f.read()
version_match = re.search(r'VERSION_STRING = \"([^\"]+)\"', content)
if version_match:
    internal_version = version_match.group(1)
    print(f'internal_version={internal_version}')
    
    if strategy == 'task_touch':
        semver = convert_version_string(internal_version, 'task_touch')
        print(f'tag={semver}')
    else:
        print(f'tag={internal_version}')
    
    print(f'strategy={strategy}')
"
                    ''', returnStdout: true).trim()
                    
                    // Parse version info
                    def versionMap = [:]
                    versionInfo.eachLine { line ->
                        def (key, value) = line.split('=')
                        versionMap[key] = value
                    }
                    
                    env.INTERNAL_VERSION = versionMap.internal_version
                    env.RELEASE_TAG = versionMap.tag
                    env.RELEASE_STRATEGY = versionMap.strategy
                    
                    echo "📋 Version info:"
                    echo "   Internal: ${env.INTERNAL_VERSION}"
                    echo "   Tag: ${env.RELEASE_TAG}"
                    echo "   Strategy: ${env.RELEASE_STRATEGY}"
                }
            }
        }
        
        stage('Execute Release') {
            steps {
                script {
                    echo "🚀 Executing release workflow..."
                    
                    sh """
                        python3 -c "
import sys
import os
sys.path.insert(0, 'packages/frameworks/workflow mgt/scripts')

try:
    from workflow_orchestrator import WorkflowOrchestrator
    wo = WorkflowOrchestrator()
    result = wo.execute_workflow('release-workflow.yaml')
    print(f'Release result: {result}')
    
    if not result.get('success', False):
        print('❌ Release workflow failed')
        sys.exit(1)
    
    print('✅ Release workflow completed')
except Exception as e:
    print(f'❌ Release workflow error: {e}')
    sys.exit(1)
"
                    """
                }
            }
        }
        
        stage('Verify Release') {
            steps {
                script {
                    echo "🔍 Verifying release..."
                    
                    // Check tag exists
                    def tagExists = sh(script: "git tag -l | grep -q '${env.RELEASE_TAG}'", returnStatus: true) == 0
                    if (!tagExists) {
                        error "❌ Tag ${env.RELEASE_TAG} not found"
                    }
                    echo "✅ Tag ${env.RELEASE_TAG} found"
                    
                    // Check tag points to correct commit
                    def tagCommit = sh(script: "git rev-list -n 1 ${env.RELEASE_TAG}", returnStdout: true).trim()
                    def headCommit = sh(script: "git rev-parse HEAD", returnStdout: true).trim()
                    
                    if (tagCommit != headCommit) {
                        error "❌ Tag does not point to HEAD"
                    }
                    echo "✅ Tag points to correct commit"
                    
                    echo "✅ Release verification passed"
                }
            }
        }
        
        stage('Create GitHub Release') {
            when {
                expression { params.CREATE_GITHUB_RELEASE }
            }
            steps {
                script {
                    echo "🌐 Creating GitHub release..."
                    
                    // Create GitHub release using gh CLI
                    sh """
                        gh release create ${env.RELEASE_TAG} \\
                        --title "Release ${env.RELEASE_TAG}" \\
                        --notes "## Release ${env.RELEASE_TAG}

**Mode:** ${env.RELEASE_STRATEGY}
**Internal Version:** ${env.INTERNAL_VERSION}

### Changes
[Release notes and changelog will be added here]

### Verification
- ✅ Release workflow completed
- ✅ Tag created successfully
- ✅ GitHub release created
                    """
                    
                    echo "✅ GitHub release created"
                }
            }
        }
    }
    
    post {
        success {
            echo "🎉 Release completed successfully!"
            echo "📋 Release details:"
            echo "   Mode: ${env.RELEASE_STRATEGY}"
            echo "   Tag: ${env.RELEASE_TAG}"
            echo "   Version: ${env.INTERNAL_VERSION}"
            echo "   GitHub Release: ${params.CREATE_GITHUB_RELEASE}"
        }
        
        failure {
            echo "❌ Release failed!"
            
            // Restore configuration
            sh 'cp rw-config.yaml.backup rw-config.yaml || true'
            
            // Clean up any partial releases
            sh """
                if git tag -l | grep -q '${env.RELEASE_TAG}'; then
                    git tag -d ${env.RELEASE_TAG}
                    git push origin :refs/tags/${env.RELEASE_TAG} || true
                fi
            """
        }
        
        always {
            // Clean up
            sh 'rm -f rw-config.yaml.backup'
        }
    }
}
```

### GitLab CI/CD Example

```yaml
# .gitlab-ci.yml
stages:
  - validate
  - release
  - deploy

variables:
  GIT_STRATEGY: clone
  GIT_DEPTH: 0

release:
  stage: release
  image: python:3.9
  rules:
    - if: $CI_PIPELINE_SOURCE == "web"
  variables:
    RELEASE_MODE: $RELEASE_MODE
    SKIP_VALIDATION: $SKIP_VALIDATION
    CREATE_GITHUB_RELEASE: $CREATE_GITHUB_RELEASE
  before_script:
    - apt-get update -y
    - apt-get install -y git
    - pip install pyyaml
    - git config --global user.email "ci@example.com"
    - git config --global user.name "CI Pipeline"
  script:
    - |
      echo "🔍 Running pre-release checks..."
      
      # Check branch
      BRANCH=$(git branch --show-current)
      echo "Current branch: $BRANCH"
      
      if [[ ! "$BRANCH" =~ ^epic/[0-9] ]]; then
        echo "❌ Not on epic branch: $BRANCH"
        exit 1
      fi
      
      # Check git status
      if [ -n "$(git status --porcelain)" ]; then
        echo "❌ Working directory not clean"
        exit 1
      fi
      
      echo "✅ Pre-release checks passed"
    - |
      echo "🔧 Configuring release..."
      
      # Backup current config
      cp rw-config.yaml rw-config.yaml.backup
      
      # Update strategy
      sed -i "s/semver_mapping_strategy: .*/semver_mapping_strategy: $RELEASE_MODE/" rw-config.yaml
      
      # Add CI-specific settings
      if [ "$SKIP_VALIDATION" = "true" ]; then
        echo "skip_validation: true" >> rw-config.yaml
      fi
      
      if [ "$CREATE_GITHUB_RELEASE" = "false" ]; then
        echo "skip_github_release: true" >> rw-config.yaml
      fi
      
      echo "✅ Configuration updated"
    - |
      echo "📋 Getting version info..."
      
      python3 -c "
import sys
sys.path.insert(0, 'packages/frameworks/workflow mgt/scripts/version')
from semver_converter import convert_version_string
import re
import yaml

# Get configuration
with open('rw-config.yaml', 'r') as f:
    config = yaml.safe_load(f)
strategy = config['semver_mapping_strategy']

# Get current version
with open('src/fynd_deals/version.py', 'r') as f:
    content = f.read()
version_match = re.search(r'VERSION_STRING = \"([^\"]+)\"', content)
if version_match:
    internal_version = version_match.group(1)
    print(f'internal_version={internal_version}')
    
    if strategy == 'task_touch':
        semver = convert_version_string(internal_version, 'task_touch')
        print(f'tag={semver}')
    else:
        print(f'tag={internal_version}')
    
    print(f'strategy={strategy}')
" > version_info.txt
      
      # Parse version info
      export INTERNAL_VERSION=$(grep internal_version version_info.txt | cut -d= -f2)
      export RELEASE_TAG=$(grep tag version_info.txt | cut -d= -f2)
      export RELEASE_STRATEGY=$(grep strategy version_info.txt | cut -d= -f2)
      
      echo "📋 Version info:"
      echo "   Internal: $INTERNAL_VERSION"
      echo "   Tag: $RELEASE_TAG"
      echo "   Strategy: $RELEASE_STRATEGY"
    - |
      echo "🚀 Executing release workflow..."
      
      python3 -c "
import sys
import os
sys.path.insert(0, 'packages/frameworks/workflow mgt/scripts')

try:
    from workflow_orchestrator import WorkflowOrchestrator
    wo = WorkflowOrchestrator()
    result = wo.execute_workflow('release-workflow.yaml')
    print(f'Release result: {result}')
    
    if not result.get('success', False):
        print('❌ Release workflow failed')
        sys.exit(1)
    
    print('✅ Release workflow completed')
except Exception as e:
    print(f'❌ Release workflow error: {e}')
    sys.exit(1)
"
    - |
      echo "🔍 Verifying release..."
      
      # Check tag exists
      if git tag -l | grep -q "$RELEASE_TAG"; then
        echo "✅ Tag $RELEASE_TAG found"
      else
        echo "❌ Tag $RELEASE_TAG not found"
        exit 1
      fi
      
      # Check tag points to correct commit
      TAG_COMMIT=$(git rev-list -n 1 $RELEASE_TAG)
      HEAD_COMMIT=$(git rev-parse HEAD)
      
      if [ "$TAG_COMMIT" = "$HEAD_COMMIT" ]; then
        echo "✅ Tag points to correct commit"
      else
        echo "❌ Tag does not point to HEAD"
        exit 1
      fi
      
      echo "✅ Release verification passed"
    - |
      if [ "$CREATE_GITHUB_RELEASE" = "true" ]; then
        echo "🌐 Creating GitHub release..."
        
        # Create GitHub release (requires gh CLI and GitHub token)
        if command -v gh &> /dev/null; then
          gh release create $RELEASE_TAG \
            --title "Release $RELEASE_TAG" \
            --notes "## Release $RELEASE_TAG

**Mode:** $RELEASE_STRATEGY
**Internal Version:** $INTERNAL_VERSION

### Changes
[Release notes and changelog will be added here]

### Verification
- ✅ Release workflow completed
- ✅ Tag created successfully
- ✅ GitHub release created"
          
          echo "✅ GitHub release created"
        else
          echo "⚠️  gh CLI not available, skipping GitHub release"
        fi
      fi
  after_script:
    - |
      echo "🎉 Release completed successfully!"
      echo "📋 Release details:"
      echo "   Mode: $RELEASE_STRATEGY"
      echo "   Tag: $RELEASE_TAG"
      echo "   Version: $INTERNAL_VERSION"
      echo "   GitHub Release: $CREATE_GITHUB_RELEASE"
  artifacts:
    reports:
      junit: test-results.xml
    paths:
      - version_info.txt
  only:
    - web
```

---

## Docker Integration

### Dockerfile with Release Automation

```dockerfile
# Dockerfile.release
FROM python:3.9-slim

# Install dependencies
RUN apt-get update && apt-get install -y \
    git \
    && rm -rf /var/lib/apt/lists/*

# Set up Python
RUN pip install pyyaml

# Copy repository
WORKDIR /app
COPY . .

# Set environment variables
ENV CI=true
ENV PYTHONPATH=/app/packages/frameworks/workflow mgt/scripts

# Release script
RUN echo '#!/bin/bash\n\
echo "🚀 Docker Release Automation"\n\
\n\
# Check arguments\n\
if [ $# -lt 1 ]; then\n\
    echo "Usage: docker run release-automation <mode> [skip_validation] [create_github_release]"\n\
    echo "Modes: registry, task_touch"\n\
    exit 1\n\
fi\n\
\n\
MODE=$1\n\
SKIP_VALIDATION=${2:-false}\n\
CREATE_GITHUB_RELEASE=${3:-true}\n\
\n\
echo "📋 Release configuration:"\n\
echo "   Mode: $MODE"\n\
echo "   Skip validation: $SKIP_VALIDATION"\n\
echo "   Create GitHub release: $CREATE_GITHUB_RELEASE"\n\
\n\
# Configure release\n\
cp rw-config.yaml rw-config.yaml.backup\n\
sed -i "s/semver_mapping_strategy: .*/semver_mapping_strategy: $MODE/" rw-config.yaml\n\
\n\
if [ "$SKIP_VALIDATION" = "true" ]; then\n\
    echo "skip_validation: true" >> rw-config.yaml\n\
fi\n\
\n\
if [ "$CREATE_GITHUB_RELEASE" = "false" ]; then\n\
    echo "skip_github_release: true" >> rw-config.yaml\n\
fi\n\
\n\
# Execute release\n\
python3 -c "\n\
import sys\n\
sys.path.insert(0, \"packages/frameworks/workflow mgt/scripts\")\n\
\n\
try:\n\
    from workflow_orchestrator import WorkflowOrchestrator\n\
    wo = WorkflowOrchestrator()\n\
    result = wo.execute_workflow(\"release-workflow.yaml\")\n\
    print(f\"Release result: {result}\")\n\
    \n\
    if not result.get(\"success\", False):\n\
        print(\"❌ Release workflow failed\")\n\
        sys.exit(1)\n\
    \n\
    print(\"✅ Release workflow completed\")\n\
except Exception as e:\n\
    print(f\"❌ Release workflow error: {e}\")\n\
    sys.exit(1)\n\
"\n\
\n\
echo "🎉 Release completed!"\n\
' > /usr/local/bin/release-automation && chmod +x /usr/local/bin/release-automation

ENTRYPOINT ["/usr/local/bin/release-automation"]
```

### Docker Compose Example

```yaml
# docker-compose.release.yml
version: '3.8'

services:
  release:
    build:
      context: .
      dockerfile: Dockerfile.release
    environment:
      - GITHUB_TOKEN=${GITHUB_TOKEN}
      - CI=true
    volumes:
      - .:/app
      - ~/.gitconfig:/root/.gitconfig
    working_dir: /app
    command: ["${RELEASE_MODE:-registry}", "${SKIP_VALIDATION:-false}", "${CREATE_GITHUB_RELEASE:-true}"]
    
  release-task-touch:
    extends: release
    command: ["task_touch", "false", "true"]
    
  release-registry:
    extends: release
    command: ["registry", "false", "true"]
```

---

## Testing Integration

### Release Integration Tests

```python
# test_release_integration.py
import pytest
import subprocess
import tempfile
import os
import yaml
from pathlib import Path

class TestReleaseIntegration:
    """Test release automation integration"""
    
    @pytest.fixture
    def temp_repo(self):
        """Create a temporary repository for testing"""
        with tempfile.TemporaryDirectory() as temp_dir:
            repo_path = Path(temp_dir)
            
            # Initialize git repo
            subprocess.run(['git', 'init'], cwd=repo_path, check=True)
            subprocess.run(['git', 'config', 'user.name', 'Test User'], cwd=repo_path, check=True)
            subprocess.run(['git', 'config', 'user.email', 'test@example.com'], cwd=repo_path, check=True)
            
            # Create basic structure
            (repo_path / 'src' / 'fynd_deals').mkdir(parents=True, exist_ok=True)
            (repo_path / 'packages' / 'frameworks' / 'workflow mgt' / 'scripts').mkdir(parents=True, exist_ok=True)
            (repo_path / 'docs' / 'changelog-and-release-notes' / 'changelog-archive').mkdir(parents=True, exist_ok=True)
            
            # Create version file
            version_content = '''
VERSION_STRING = "0.5.1.48+1"
VERSION_EPIC = 5
VERSION_STORY = 1
VERSION_TASK = 48
VERSION_BUILD = 1
'''
            (repo_path / 'src' / 'fynd_deals' / 'version.py').write_text(version_content)
            
            # Create rw-config.yaml
            config_content = {
                'version_file': 'src/fynd_deals/version.py',
                'main_changelog': 'CHANGELOG.md',
                'changelog_dir': 'docs/changelog-and-release-notes/changelog-archive',
                'scripts_path': 'packages/frameworks/workflow mgt/scripts',
                'readme_file': 'README.md',
                'semver_mapping_strategy': 'registry',
                'use_kanban': False
            }
            with open(repo_path / 'rw-config.yaml', 'w') as f:
                yaml.dump(config_content, f)
            
            # Create initial commit
            subprocess.run(['git', 'add', '.'], cwd=repo_path, check=True)
            subprocess.run(['git', 'commit', '-m', 'Initial commit'], cwd=repo_path, check=True)
            
            # Create epic branch
            subprocess.run(['git', 'checkout', '-b', 'epic/5'], cwd=repo_path, check=True)
            
            yield repo_path
    
    def test_registry_mode_release(self, temp_repo):
        """Test registry mode release"""
        # Configure for registry mode
        config_path = temp_repo / 'rw-config.yaml'
        with open(config_path, 'r') as f:
            config = yaml.safe_load(f)
        config['semver_mapping_strategy'] = 'registry'
        with open(config_path, 'w') as f:
            yaml.dump(config, f)
        
        # Execute release workflow
        result = subprocess.run([
            'python3', '-c',
            '''
import sys
sys.path.insert(0, 'packages/frameworks/workflow mgt/scripts')
from workflow_orchestrator import WorkflowOrchestrator
wo = WorkflowOrchestrator()
result = wo.execute_workflow('release-workflow.yaml')
print(f"success={result.get('success', False)}")
'''
        ], cwd=temp_repo, capture_output=True, text=True)
        
        assert result.returncode == 0
        assert 'success=True' in result.stdout
        
        # Verify tag was created
        tag_result = subprocess.run(['git', 'tag', '-l'], cwd=temp_repo, capture_output=True, text=True)
        assert 'v0.5.1.48+1' in tag_result.stdout
    
    def test_task_touch_mode_release(self, temp_repo):
        """Test task-touch mode release"""
        # Configure for task-touch mode
        config_path = temp_repo / 'rw-config.yaml'
        with open(config_path, 'r') as f:
            config = yaml.safe_load(f)
        config['semver_mapping_strategy'] = 'task_touch'
        with open(config_path, 'w') as f:
            yaml.dump(config, f)
        
        # Execute release workflow
        result = subprocess.run([
            'python3', '-c',
            '''
import sys
sys.path.insert(0, 'packages/frameworks/workflow mgt/scripts')
from workflow_orchestrator import WorkflowOrchestrator
wo = WorkflowOrchestrator()
result = wo.execute_workflow('release-workflow.yaml')
print(f"success={result.get('success', False)}")
'''
        ], cwd=temp_repo, capture_output=True, text=True)
        
        assert result.returncode == 0
        assert 'success=True' in result.stdout
        
        # Verify SemVer tag was created
        tag_result = subprocess.run(['git', 'tag', '-l'], cwd=temp_repo, capture_output=True, text=True)
        # Should contain SemVer tag (exact format depends on semver-registry.yaml)
        assert len(tag_result.stdout.strip().split('\n')) >= 1
    
    def test_configuration_validation(self, temp_repo):
        """Test configuration validation"""
        # Test invalid configuration
        config_path = temp_repo / 'rw-config.yaml'
        with open(config_path, 'r') as f:
            config = yaml.safe_load(f)
        config['semver_mapping_strategy'] = 'invalid'
        with open(config_path, 'w') as f:
            yaml.dump(config, f)
        
        # Should fail validation
        result = subprocess.run([
            'python3', '-c',
            '''
import sys
sys.path.insert(0, 'packages/frameworks/workflow mgt/scripts')
from workflow_orchestrator import WorkflowOrchestrator
wo = WorkflowOrchestrator()
result = wo.execute_workflow('release-workflow.yaml')
print(f"success={result.get('success', False)}")
'''
        ], cwd=temp_repo, capture_output=True, text=True)
        
        assert result.returncode != 0
        assert 'success=False' in result.stdout

if __name__ == '__main__':
    pytest.main([__file__])
```

---

## Monitoring and Alerting

### Release Monitoring Script

```python
# monitor_releases.py
import subprocess
import json
import time
from datetime import datetime
from pathlib import Path

class ReleaseMonitor:
    """Monitor release automation and send alerts"""
    
    def __init__(self, config_file='monitor-config.json'):
        self.config = self.load_config(config_file)
        self.alerts_sent = []
    
    def load_config(self, config_file):
        """Load monitoring configuration"""
        default_config = {
            'check_interval': 300,  # 5 minutes
            'max_release_time': 1800,  # 30 minutes
            'alert_channels': ['email', 'slack'],
            'email_recipients': ['devops@example.com'],
            'slack_webhook': 'https://hooks.slack.com/services/...',
            'repositories': ['origin']
        }
        
        if Path(config_file).exists():
            with open(config_file, 'r') as f:
                return json.load(f)
        else:
            with open(config_file, 'w') as f:
                json.dump(default_config, f, indent=2)
            return default_config
    
    def check_release_status(self):
        """Check current release status"""
        try:
            # Get current branch
            branch = subprocess.check_output(['git', 'branch', '--show-current'], text=True).strip()
            
            # Get current version
            version = subprocess.check_output([
                'python3', '-c',
                '''
import re
with open('src/fynd_deals/version.py', 'r') as f:
    content = f.read()
version_match = re.search(r'VERSION_STRING = \"([^\"]+)\"', content)
if version_match:
    print(version_match.group(1))
'''
            ], text=True).strip()
            
            # Get recent tags
            tags = subprocess.check_output(['git', 'tag', '--sort=-version:refname'], text=True).strip().split('\n')[:5]
            
            # Check for in-progress releases
            in_progress = self.check_in_progress_releases()
            
            return {
                'timestamp': datetime.now().isoformat(),
                'branch': branch,
                'current_version': version,
                'recent_tags': tags,
                'in_progress': in_progress,
                'status': 'healthy'
            }
        except Exception as e:
            return {
                'timestamp': datetime.now().isoformat(),
                'status': 'error',
                'error': str(e)
            }
    
    def check_in_progress_releases(self):
        """Check for releases in progress"""
        # Check for release workflow processes
        try:
            result = subprocess.check_output(['ps', 'aux'], text=True)
            return 'workflow_orchestrator' in result or 'release-workflow' in result
        except:
            return False
    
    def send_alert(self, message, level='warning'):
        """Send alert to configured channels"""
        alert_data = {
            'timestamp': datetime.now().isoformat(),
            'level': level,
            'message': message,
            'repository': 'ai-dev-kit'
        }
        
        # Avoid duplicate alerts
        alert_key = f"{level}:{message}"
        if alert_key in self.alerts_sent:
            return
        
        if 'email' in self.config['alert_channels']:
            self.send_email_alert(alert_data)
        
        if 'slack' in self.config['alert_channels']:
            self.send_slack_alert(alert_data)
        
        self.alerts_sent.append(alert_key)
    
    def send_email_alert(self, alert_data):
        """Send email alert (placeholder implementation)"""
        print(f"📧 Email Alert: {alert_data['level'].upper()} - {alert_data['message']}")
        # Implement actual email sending here
    
    def send_slack_alert(self, alert_data):
        """Send Slack alert (placeholder implementation)"""
        print(f"💬 Slack Alert: {alert_data['level'].upper()} - {alert_data['message']}")
        # Implement actual Slack webhook call here
    
    def monitor_loop(self):
        """Main monitoring loop"""
        print("🔍 Starting release monitoring...")
        
        while True:
            status = self.check_release_status()
            
            if status['status'] == 'error':
                self.send_alert(f"Release monitoring error: {status['error']}", 'error')
            
            elif status['in_progress']:
                # Check if release is taking too long
                if self.is_release_stale(status):
                    self.send_alert("Release appears to be stuck or taking too long", 'warning')
            
            # Clean old alerts (older than 24 hours)
            self.cleanup_alerts()
            
            time.sleep(self.config['check_interval'])
    
    def is_release_stale(self, status):
        """Check if release is stale"""
        # Implement logic to detect stale releases
        # This could check tag timestamps, process ages, etc.
        return False  # Placeholder
    
    def cleanup_alerts(self):
        """Clean up old alerts"""
        # Remove alerts older than 24 hours
        current_time = datetime.now()
        self.alerts_sent = [
            alert for alert in self.alerts_sent
            if (current_time - datetime.fromisoformat(alert.split(':')[0])).total_seconds() < 86400
        ]

if __name__ == '__main__':
    monitor = ReleaseMonitor()
    monitor.monitor_loop()
```

---

## Security Considerations

### Secure Release Automation

```yaml
# .github/workflows/release-secure.yml
name: Secure Release

on:
  workflow_dispatch:
    inputs:
      mode:
        description: 'Release mode'
        required: true
        default: 'registry'
        type: choice
        options:
        - registry
        - task_touch

jobs:
  security-scan:
    runs-on: ubuntu-latest
    outputs:
      scan-passed: ${{ steps.scan.outputs.passed }}
    
    steps:
      - name: Checkout repository
        uses: actions/checkout@v4
        with:
          fetch-depth: 0

      - name: Security Scan
        id: scan
        run: |
          echo "🔒 Running security scan..."
          
          # Check for secrets in configuration
          if grep -r "password\|secret\|token" rw-config.yaml 2>/dev/null; then
            echo "❌ Secrets found in configuration"
            echo "passed=false" >> $GITHUB_OUTPUT
            exit 1
          fi
          
          # Check file permissions
          if [ -x "rw-config.yaml" ]; then
            echo "❌ Configuration file is executable"
            echo "passed=false" >> $GITHUB_OUTPUT
            exit 1
          fi
          
          # Validate YAML syntax
          if ! python3 -c "import yaml; yaml.safe_load(open('rw-config.yaml'))"; then
            echo "❌ Invalid YAML syntax"
            echo "passed=false" >> $GITHUB_OUTPUT
            exit 1
          fi
          
          echo "✅ Security scan passed"
          echo "passed=true" >> $GITHUB_OUTPUT

  release:
    runs-on: ubuntu-latest
    needs: security-scan
    if: needs.security-scan.outputs.scan-passed == 'true'
    permissions:
      contents: write
      packages: write
      
    steps:
      - name: Checkout repository
        uses: actions/checkout@v4
        with:
          fetch-depth: 0
          token: ${{ secrets.GITHUB_TOKEN }}

      - name: Setup Python
        uses: actions/setup-python@v4
        with:
          python-version: '3.9'

      - name: Install dependencies
        run: |
          pip install pyyaml

      - name: Execute Release
        run: |
          echo "🚀 Executing secure release..."
          # Release automation code here
```

---

**Remember:** Always test integration changes in a development environment before applying to production!
