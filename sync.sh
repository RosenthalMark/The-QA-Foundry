#!/bin/bash
# The Foundry Auto-Sync v1.1

echo "🔍 Checking for Roadmap updates..."
node core/js/roadmap-manager.js

echo "🚀 Syncing with GitHub..."
git add .
git commit -m "update: foundry core and mission logic"
git push origin main

echo "✨ SYSTEM SYNC COMPLETE"