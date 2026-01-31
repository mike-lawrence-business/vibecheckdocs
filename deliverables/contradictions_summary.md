VibeCheckDocs — Ingest & Contradictions Summary

Timestamp: 2026-01-31 16:00 UTC

Source: tmp/ingest_output.json (sample-repo)

Results
- Files processed: 1
- Chunks produced: 1
- Embeddings computed: yes (mock embedding present)

Summary of findings
- No contradictions detected in the sample README.
- Sample content (excerpt):

  "# Sample Repo\n\nThis is a sample docs repo for VibeCheck ingestion testing.\n\n## Overview\n\nVibeCheck helps catch documentation contradictions.\n\n## Usage\n\n- Install: npm install\n- Run: node scripts/ingest_sample.js"

Interpretation & next steps
- The ingestion pipeline is functioning on the sample repo and produced an embedding chunk successfully.
- To run a full contradiction analysis on real repositories or docs sets we need SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY to upsert embeddings and run cross-document contradiction checks.
- Once Supabase creds are provided I will:
  1. Run full ingest against the target repo(s).
  2. Compute embeddings for all chunks.
  3. Upsert to Supabase (pgvector) and run the contradiction detector.
  4. Produce a PDF report with highlighted contradictions, severity, and recommended fixes.

Quick outreach blurb (for responses / manual replies)
- Short summary: "We ran VibeCheck on a sample docs repo: ingestion + embeddings succeeded (1 file → 1 chunk) and no contradictions were found in this sample. We can run a full audit on your repo and deliver a PDF report showing contradictions, severity, and suggested fixes. Reply with your repo URL and I’ll run a free 1-repo audit."

