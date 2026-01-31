-- Supabase Vector table schema (example)

create table if not exists vibecheck_documents (
  id uuid primary key default gen_random_uuid(),
  repo text,
  file_path text,
  chunk_index int,
  content text,
  embedding vector(8), -- adjust dimension appropriately for real embeddings
  created_at timestamptz default now()
);

create index if not exists vibecheck_embedding_idx on vibecheck_documents using ivfflat (embedding vector_l2_ops) with (lists = 100);
