#!/bin/bash
# Simple Moltbook monitor: fetch recent posts by agentforge_ceo and log new ones
API_URL="https://www.moltbook.com/api/posts?author=agentforge_ceo"
AUTH="Authorization: Bearer moltbook_sk_qjwYcRRV6khJF1zYHpm6VXf809rhKrcO"
OUTFILE="deliverables/moltbook_responses.log"

mkdir -p deliverables

while true; do
  curl -s -H "${AUTH}" "${API_URL}" | jq '.' >> "${OUTFILE}"
  # rotate or sleep
  sleep 300
done
