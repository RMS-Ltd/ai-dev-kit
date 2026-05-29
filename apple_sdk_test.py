#!/usr/bin/env python3
"""
Apple SDK Issue Resolution Test
Tests if Xcode Command Line Tools are properly installed and working
"""

import subprocess
import platform
import sys

def test_xcode_tools():
    """Test Xcode Command Line Tools installation"""
    print("🧪 Testing Apple SDK Resolution...")
    print("=" * 50)
    
    # Check if we're on macOS
    if platform.system() != "Darwin":
        print("❌ Not running on macOS")
        return False
    
    print(f"✅ Running on {platform.system()} {platform.release()}")
    
    # Test 1: xcode-select path
    print("\n1. Testing xcode-select...")
    try:
        result = subprocess.run(
            ["xcode-select", "--print-path"],
            capture_output=True,
            text=True,
            timeout=10
        )
        
        if result.returncode == 0:
            print(f"✅ xcode-select path: {result.stdout.strip()}")
        else:
            print(f"❌ xcode-select failed: {result.stderr}")
            return False
    except Exception as e:
        print(f"❌ xcode-select error: {e}")
        return False
    
    # Test 2: Git functionality
    print("\n2. Testing Git functionality...")
    try:
        result = subprocess.run(
            ["git", "--version"],
            capture_output=True,
            text=True,
            timeout=10
        )
        
        if result.returncode == 0:
            print(f"✅ Git version: {result.stdout.strip()}")
        else:
            print(f"❌ Git failed: {result.stderr}")
            return False
    except Exception as e:
        print(f"❌ Git error: {e}")
        return False
    
    # Test 3: xcodebuild availability
    print("\n3. Testing xcodebuild...")
    try:
        result = subprocess.run(
            ["xcodebuild", "-version"],
            capture_output=True,
            text=True,
            timeout=15
        )
        
        if result.returncode == 0:
            print(f"✅ xcodebuild working:")
            for line in result.stdout.strip().split('\n')[:2]:
                print(f"   {line}")
        else:
            print(f"❌ xcodebuild failed: {result.stderr}")
            return False
    except Exception as e:
        print(f"❌ xcodebuild error: {e}")
        return False
    
    # Test 4: Simple git operation
    print("\n4. Testing Git operation...")
    try:
        result = subprocess.run(
            ["git", "status"],
            capture_output=True,
            text=True,
            timeout=10,
            cwd="/Users/rms/Documents/projects/ai-dev-kit"
        )
        
        if result.returncode == 0:
            print("✅ Git status command works")
        else:
            print(f"❌ Git status failed: {result.stderr}")
            return False
    except Exception as e:
        print(f"❌ Git status error: {e}")
        return False
    
    return True

def test_ai_dev_kit():
    """Test ai-dev-kit installation"""
    print("\n5. Testing ai-dev-kit...")
    
    try:
        result = subprocess.run(
            ["ai-dev-kit", "--help"],
            capture_output=True,
            text=True,
            timeout=10
        )
        
        if result.returncode == 0:
            print("✅ ai-dev-kit CLI working")
            return True
        else:
            print(f"❌ ai-dev-kit failed: {result.stderr}")
            return False
    except FileNotFoundError:
        print("❌ ai-dev-kit not found in PATH")
        return False
    except Exception as e:
        print(f"❌ ai-dev-kit error: {e}")
        return False

def main():
    """Main test function"""
    print("Apple SDK Issue Resolution Test")
    print(f"Timestamp: {subprocess.run(['date'], capture_output=True, text=True).stdout.strip()}")
    print()
    
    # Test Xcode tools
    xcode_ok = test_xcode_tools()
    
    # Test ai-dev-kit
    ai_dev_kit_ok = test_ai_dev_kit()
    
    print("\n" + "=" * 50)
    print("🎯 TEST RESULTS:")
    print(f"Xcode Command Line Tools: {'✅ PASS' if xcode_ok else '❌ FAIL'}")
    print(f"ai-dev-kit CLI: {'✅ PASS' if ai_dev_kit_ok else '❌ FAIL'}")
    
    if xcode_ok and ai_dev_kit_ok:
        print("\n🎉 APPLE SDK ISSUE RESOLVED!")
        print("✅ Xcode Command Line Tools are properly installed")
        print("✅ Git operations should work without license blocking")
        print("✅ ai-dev-kit should install frameworks successfully")
    else:
        print("\n❌ APPLE SDK ISSUE NOT RESOLVED")
        print("❌ Some components are still not working")
    
    return xcode_ok and ai_dev_kit_ok

if __name__ == "__main__":
    success = main()
    sys.exit(0 if success else 1)
