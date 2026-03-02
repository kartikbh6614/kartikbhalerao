#!/bin/bash
# Kill all processes listening on localhost ports

PIDS=$(lsof -ti @localhost -sTCP:LISTEN 2>/dev/null)

if [ -z "$PIDS" ]; then
  echo "No localhost servers running."
  exit 0
fi

echo "Stopping localhost servers (PIDs: $PIDS)..."
echo "$PIDS" | xargs kill -9 2>/dev/null
echo "Done."
