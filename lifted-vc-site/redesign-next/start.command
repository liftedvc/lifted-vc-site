#!/bin/bash
# Lifted Playbook Redesign — one-click launcher
# Double-click this file to start the preview.

cd "$(dirname "$0")"

clear
echo ""
echo "  Lifted Playbook — Chapter 2 Redesign"
echo "  ────────────────────────────────────"
echo ""

# Check Node.js
if ! command -v node &> /dev/null; then
  echo "  Node.js isn't installed on this Mac yet."
  echo ""
  echo "  To fix:"
  echo "  1. Open https://nodejs.org"
  echo "  2. Download the button labeled 'LTS' (big green button)"
  echo "  3. Run the installer and click through the defaults"
  echo "  4. Double-click this file again once it's installed"
  echo ""
  echo "  Press any key to close this window..."
  read -n 1 -s
  exit 1
fi

echo "  Node.js version: $(node --version)"
echo ""

# Install dependencies if missing
if [ ! -d "node_modules" ]; then
  echo "  First-time setup — installing dependencies..."
  echo "  This takes about 30 seconds. You'll only see this once."
  echo ""
  npm install --loglevel=error --no-audit --no-fund
  if [ $? -ne 0 ]; then
    echo ""
    echo "  Something went wrong during install."
    echo "  Press any key to close this window..."
    read -n 1 -s
    exit 1
  fi
  echo ""
  echo "  Setup complete."
  echo ""
fi

echo "  Starting preview server..."
echo "  Your browser will open in a few seconds."
echo ""
echo "  To stop the server, press Ctrl+C in this window"
echo "  or just close this Terminal window."
echo ""

# Open browser after a short delay so the server is ready
(
  sleep 4
  open http://localhost:3000
) &

# Run the dev server in the foreground
npm run dev
