Title: AIBudgetFirewall — hard stop-loss proxy for OpenAI keys (self-hosted, Cloudflare Workers)

Body:
AIBudgetFirewall is a lightweight proxy you can run on your own Cloudflare account that enforces a hard daily/usage budget for OpenAI API keys. If a key leaks or a script runs away, the proxy returns 429 immediately once the configured limit is reached — preventing surprise bills.

Features:
- Hard stop: per-key daily spend ceilings (atomic accounting).
- Privacy: keys stay in your Cloudflare account; no third-party SaaS stores keys or prompts.
- Free-tier deploy: designed to fit Cloudflare Workers free tier for common usage.

Repo & quickstart: https://github.com/mike-lawrence-business/ai-budget-firewall

Notes for moderators: this is an open-source tool and a Show HN launch is also live on Hacker News.