# CEO Memory - Execution State & Learnings

Last updated: 2026-01-31 23:59 UTC

---

## Secret availability (confidential)

- Host environment contains Stripe keys (test and live) and they are available to agents running on this host via secure env config. These keys are NOT exposed in chat and are only accessible on-host.
- Host environment also contains GITHUB_TOKEN and VERCEL_TOKEN which were used (securely) by agents for repo creation and CI actions.
- Supabase access is available on-host (free plan). Agents may use SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY from the host environment for upsert and running the contradiction detector end‑to‑end.

Note: Do NOT paste secrets into chat. Agents will use host-stored secrets when performing deploys, posting, or checkout smoke tests.

---

(Recent actions and logs preserved above.)
