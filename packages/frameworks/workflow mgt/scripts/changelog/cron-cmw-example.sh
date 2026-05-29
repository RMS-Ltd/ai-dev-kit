#!/bin/bash
# Cron job example for Changelog Management Workflow (CMW)
# 
# This script runs CMW weekly to maintain changelog health.
# 
# Installation:
# 1. Copy this script to a location accessible by cron (e.g., ~/scripts/)
# 2. Make executable: chmod +x cron-cmw-example.sh
# 3. Add to crontab: crontab -e
# 4. Add line: 0 2 * * 0 /path/to/cron-cmw-example.sh
#    (Runs every Sunday at 2:00 AM)
#
# Configuration:
# - Adjust PROJECT_ROOT to match your project path
# - Adjust CMW_SCRIPT_PATH if CMW script location differs
# - Adjust LOG_DIR for log file location

# Configuration
PROJECT_ROOT="${HOME}/Documents/projects/ai-dev-kit"
CMW_SCRIPT_PATH="${PROJECT_ROOT}/packages/frameworks/workflow mgt/scripts/changelog/cmw.py"
LOG_DIR="${PROJECT_ROOT}/logs"
LOG_FILE="${LOG_DIR}/cmw-cron.log"

# Create log directory if it doesn't exist
mkdir -p "${LOG_DIR}"

# Change to project root
cd "${PROJECT_ROOT}" || {
    echo "$(date): ERROR: Failed to change to project root: ${PROJECT_ROOT}" >> "${LOG_FILE}"
    exit 1
}

# Run CMW
echo "$(date): Starting CMW cron execution" >> "${LOG_FILE}"
python3 "${CMW_SCRIPT_PATH}" >> "${LOG_FILE}" 2>&1
EXIT_CODE=$?

if [ $EXIT_CODE -eq 0 ]; then
    echo "$(date): CMW cron execution completed successfully" >> "${LOG_FILE}"
else
    echo "$(date): ERROR: CMW cron execution failed with exit code ${EXIT_CODE}" >> "${LOG_FILE}"
fi

exit $EXIT_CODE

