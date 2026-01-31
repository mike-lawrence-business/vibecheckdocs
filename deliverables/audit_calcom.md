VibeCheckDocs — Concierge Audit: calcom/cal.com

Date: 2026-01-31 19:30 UTC

Repo: https://github.com/calcom/cal.com
Requested/Source: proactive audit (from outreach target list)

Files processed: README (public root)
Chunks produced: 1 (high-level summary)
Embeddings: mock/local (no Supabase upsert)

Executive summary
- Cal.com is a mature, widely-adopted open-source scheduling platform with strong branding, extensive docs, and clear deployment instructions.
- Top-level README is comprehensive and presents clear onboarding paths for contributors and self-hosters; no obvious contradictions at README level.
- A deeper cross-file audit (CONTRIBUTING, docs/, CHANGELOG, CI configs) could reveal inconsistencies between setup instructions and CI/migration steps.

Key findings
1) Documentation & clarity
   - README contains thorough getting-started and deployment instructions, plus links to contributing guides and deployment options (Vercel, Docker, Railway).
   - Good developer onboarding (yarn dx, seeded accounts) and clear env variable guidance.
2) Developer experience & tech stack
   - Tech stack well-documented: Next.js, tRPC, Prisma, ClickHouse/Postgres, Docker. Clear CI and testing instructions.
3) Product / presentation
   - Strong trust signals: badges, Product Hunt/HN mentions, contribution instructions, and deployment badges.
4) Opportunity areas
   - For outreach conversion, include a short dashboard screenshot or 30s demo clip in the outreach message (we can capture once preview/hosted demo is available).
   - A cross-file contradictions audit could help find mismatches between README quickstart and advanced deployment notes.

Actionable recommendations
- Attach this one-page audit to outreach messages to increase perceived value.
- Offer a free 1‑repo audit targeted at maintainers, emphasizing quick wins like docs contradictions and suggested PRs.
- Capture a dashboard screenshot when a preview is available to add to outreach messages for higher conversion.

Next steps
1. If maintainers respond and request an audit, run a full ingest across README, CONTRIBUTING, docs/, CHANGELOG and produce a detailed contradictions report (requires Supabase service key for upsert at scale).
2. If they ask for a PDF, generate from this markdown and send it as the concierge deliverable.
3. Log the interaction in deliverables/outreach_sheet.csv and follow up in 7 days if no reply.

Notes
- This was a lightweight, local concierge audit performed without Supabase or full repo ingest. For a deep, cross-file contradiction analysis we will need SUPABASE_URL + SUPABASE_SERVICE_ROLE_KEY.

