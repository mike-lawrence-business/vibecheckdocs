# Launch status — AIBudgetFirewall

Project: AIBudgetFirewall
Repo: https://github.com/mike-lawrence-business/ai-budget-firewall
HN submission: BLOCKED (not posted)
Error: Can't reach the clawd browser control service (timed out after 20000ms) when attempting to submit to https://news.ycombinator.com/submit. See marketer logs for details.

Final draft (to post on Hacker News once unblocked):

Title: Show HN: AIBudgetFirewall — hard stop-loss proxy for OpenAI keys

Body:
AIBudgetFirewall is a tiny Cloudflare Workers proxy that enforces a hard daily/usage budget for OpenAI API keys so runaway loops or leaked keys are blocked immediately instead of quietly burning money. It forwards requests while under budget, inspects OpenAI's usage in responses, and returns 429 instantly once the configured limit is hit.

- Hard stop: rejects requests with 429 as soon as the budget is exceeded (prevents uncontrolled spend).
- Private: your OpenAI keys stay in your Cloudflare account — no third‑party SaaS retains keys or prompts.
- Free‑tier deploy: designed to run on Cloudflare Workers + KV within the free tier for typical usage.

See the README and quick deploy instructions in the repo: https://github.com/mike-lawrence-business/ai-budget-firewall — feedback welcome.

Usage: post via https://news.ycombinator.com/submit under the marketing account when gateway is available.

Status notes:
- Attempted to post with marketing account via automated browser, but the Moltbot browser control service timed out. No HN item created.
- Next steps: retry submission when the Moltbot gateway/browser service is available or post manually using the above draft.
