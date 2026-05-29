# Apple Platform Setup Guide

**Purpose:** Setup guide for ai-dev-kit on Apple platforms (macOS, iOS) to resolve Apple SDK license blocking issues.

**Related Issue:** [BR-040](../../project-management/kanban/fr-br/BR-040-apple-sdk-license-blocking-issue.md)  
**Task:** [E6:S06:T03](../../project-management/kanban/epics/Epic-6/Story-006-feature-requests/T03-apple-sdk-license-blocking-issue.md)

### Scope (greenfield vs brownfield)

This guide addresses **platform tooling** on Apple OSes. For the **greenfield framework install path** (FR-080), follow [`INSTALL_IN_YOUR_PROJECT.md`](https://github.com/earlution/ai-dev-kit/blob/main/INSTALL_IN_YOUR_PROJECT.md) after platform prerequisites; see [ADR-003](../../architecture/standards-and-adrs/ADR-003-greenfield-vs-brownfield-adoption.md), [FR-081](../../project-management/kanban/fr-br/FR-081-brownfield-modular-adopter-integration.md), [IPW-E6S09T01](../../implementation-cycles/IPW-E6S09T01-greenfield-installation-fr080.md).

---

## Quick Start

If you're experiencing Apple SDK license blocking issues on macOS, follow these steps:

### 1. Install Xcode Command Line Tools

```bash
xcode-select --install
```

### 2. Accept Xcode License

```bash
sudo xcodebuild -license accept
```

### 3. Set Xcode Path (if needed)

```bash
sudo xcode-select --switch /Applications/Xcode.app/Contents/Developer
```

### 4. Verify Installation

```bash
xcode-select --print-path
git --version
```

---

## Detailed Setup Guide

### Prerequisites

- **macOS 10.14 or later** (Mojave or newer recommended)
- **Administrator access** (for Xcode tools installation)
- **Internet connection** (for downloading Xcode components)

### Step 1: Install Xcode Command Line Tools

The Xcode Command Line Tools include essential development tools that Git and other development utilities depend on.

#### Method 1: Command Line Installation (Recommended)

```bash
xcode-select --install
```

This will open a software update dialog. Click "Install" and follow the prompts.

#### Method 2: Manual Installation

1. Open **App Store**
2. Search for **"Xcode"**
3. Click "Get" to install Xcode (full IDE)
4. After installation, open Xcode and accept the license agreement

### Step 2: Accept Xcode License Agreement

After installing Xcode Command Line Tools, you must accept the license agreement:

```bash
sudo xcodebuild -license accept
```

This will display the license terms and automatically accept them.

**Alternative: Manual Acceptance**
```bash
sudo xcodebuild -license
```
Read through the license and type "agree" when prompted.

### Step 3: Configure Developer Directory

Set the active developer directory to ensure tools can find Xcode:

```bash
sudo xcode-select --switch /Applications/Xcode.app/Contents/Developer
```

**For Command Line Tools Only:**
```bash
sudo xcode-select --switch /Library/Developer/CommandLineTools
```

### Step 4: Verify Installation

Verify that everything is properly configured:

```bash
# Check Xcode path
xcode-select --print-path

# Check Git installation
git --version

# Test Git functionality
git status
```

Expected output:
```
/Applications/Xcode.app/Contents/Developer
git version 2.x.x
```

---

## Troubleshooting Common Issues

### Issue: "xcode-select: error: command line tools are already installed"

**Solution:** This is actually good - the tools are already installed. Proceed to step 2.

### Issue: "xcode-select: error: tool 'xcodebuild' requires Xcode"

**Solution:** Install full Xcode from App Store or use Command Line Tools path:

```bash
sudo xcode-select --switch /Library/Developer/CommandLineTools
```

### Issue: "Agreeing to the Xcode/iOS license requires admin privileges"

**Solution:** Use `sudo` or run as administrator:

```bash
sudo xcodebuild -license accept
```

### Issue: Git operations fail with "developer tools not found"

**Solution:** Reinstall Command Line Tools:

```bash
# Remove existing tools
sudo rm -rf /Library/Developer/CommandLineTools

# Reinstall
xcode-select --install
```

### Issue: "Could not find developer directory"

**Solution:** Set the correct path:

```bash
# For full Xcode installation
sudo xcode-select --switch /Applications/Xcode.app/Contents/Developer

# For Command Line Tools only
sudo xcode-select --switch /Library/Developer/CommandLineTools
```

---

## Alternative Installation Methods

### Method 1: Use Package Manager Backend

If Git operations continue to fail, use package managers instead:

```bash
# Install via pip
ai-dev-kit install framework-name --backend pip

# Install via npm (if available)
ai-dev-kit install framework-name --backend npm
```

### Method 2: Manual Framework Installation

Download frameworks directly and install manually:

1. Navigate to [ai-dev-kit releases](https://github.com/earlution/ai-dev-kit/releases)
2. Download the desired framework package
3. Extract to your project's `frameworks/` directory
4. Update `.ai-dev-kit.yaml` configuration manually

---

## Environment Variables

Some users may need to set environment variables:

```bash
# Add to ~/.zshrc or ~/.bashrc
export DEVELOPER_DIR=/Applications/Xcode.app/Contents/Developer
export PATH="/Applications/Xcode.app/Contents/Developer/usr/bin:$PATH"
```

Reload shell:
```bash
source ~/.zshrc  # or ~/.bashrc
```

---

## Verification Test

Test your ai-dev-kit installation:

```bash
# Test CLI functionality
ai-dev-kit --help

# Test framework installation (dry run)
ai-dev-kit install numbering-versioning --dry-run

# Test actual installation
ai-dev-kit install numbering-versioning --backend pip
```

---

## iOS Development Considerations

If you're doing iOS development with ai-dev-kit:

### Additional Requirements

- **Full Xcode Installation** (not just Command Line Tools)
- **iOS SDK** (included with Xcode)
- **iOS Simulator** (included with Xcode)

### iOS-Specific Setup

```bash
# Install full Xcode for iOS development
# Download from App Store, then:
sudo xcodebuild -license accept
sudo xcode-select --switch /Applications/Xcode.app/Contents/Developer

# Verify iOS SDKs are available
xcodebuild -showsdks
```

---

## Corporate/Enterprise Environments

In corporate environments, you may encounter additional restrictions:

### Common Issues

- **Firewall restrictions** blocking downloads
- **Admin rights** limitations
- **Corporate software policies** prohibiting Xcode

### Solutions

1. **Contact IT Department** for Xcode installation assistance
2. **Use pre-approved development environments**
3. **Consider alternative backends** (pip/npm) that don't require Xcode
4. **Use containerized development** with pre-configured tools

---

## Performance Optimization

### Optimize Git Operations on macOS

```bash
# Configure Git for better performance on macOS
git config --global core.preloadindex true
git config --global core.fscache true
git config --global gc.auto 256
```

### Reduce Xcode Indexing

If Xcode is slowing down your system:

```bash
# Disable indexing for specific directories
sudo mdutil -i off /path/to/directory
```

---

## Getting Help

If you continue to experience issues:

### Check System Information

```bash
# macOS version
sw_vers

# Xcode version
xcodebuild -version

# Git configuration
git config --list
```

### Collect Debug Information

```bash
# Create diagnostic report
ai-dev-kit status --debug > ai-dev-kit-debug.log
```

### Report Issues

Include the following information when reporting issues:

1. **macOS version** (`sw_vers`)
2. **Xcode version** (`xcodebuild -version`)
3. **Git version** (`git --version`)
4. **Exact error messages**
5. **Steps to reproduce**
6. **Debug log** (if available)

---

## Related Documentation

- [ai-dev-kit Installation Guide](framework-dependency-installation-guide.md)
- [Framework Dependency CLI Reference](framework-dependency-cli-reference.md)
- [Framework dependency troubleshooting](framework-dependency-troubleshooting-guide.md)

---

**Last Updated:** 2026-03-10  
**Version:** 1.0  
**Status:** Ready for Review
