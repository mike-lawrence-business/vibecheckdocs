Ingestion smoke test report - 2026-01-31 11:05 UTC

Summary:
- Files scanned: 1
- Chunks produced: 1
- Items created: 1

Sample item:
- source file: sample-repo/README.md
- chunk preview:

"# Sample Repo

This is a sample docs repo for VibeCheck ingestion testing.

## Overview

VibeCheck helps catch documentation contradictions.

## Usage

- Install: npm install
- Run: node scripts/ingest_sample.js"

- embedding (first 8 dims shown): [0.716, 0.927, 0.138, 0.349, 0.56, 0.771, 0.982, 0.193]

Notes:
- This was a local smoke test using the repository's sample docs and the mock embedding function. Real embeddings require OPENAI_API_KEY.
- Next recommended action: run full ingest with real OPENAI_API_KEY + SUPABASE_SERVICE_ROLE_KEY to upsert into Supabase and verify the docs_embeddings table contains rows.

Files produced: tmp/ingest_output.json -> deliverables/ingest_report.md
