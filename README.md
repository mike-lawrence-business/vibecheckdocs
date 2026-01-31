# VibeCheckDocs - MVP Scaffold

Quickstart (local / dev)

1. Clone this repo
2. Install dependencies: npm install
3. Configure env (example .env.local):
   - SUPABASE_URL="https://..."
   - SUPABASE_ANON_KEY="..."
   - EMBEDDING_PROVIDER=mock
4. Run ingestion sample:
   node scripts/ingest_sample.js ./samples/sample-repo

Notes
- This scaffold is a minimal MVP: Next.js app + GitHub Action skeleton + ingestion example.
- No secrets stored. Use environment variables for keys. Self-host recommended.
- Purpose: parse Markdown docs, chunk, and upsert embeddings into Supabase Vector table.
