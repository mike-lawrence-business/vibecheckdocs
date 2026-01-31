Show HN: AIBudgetFirewall is live — hard stop-loss proxy for OpenAI keys

AIBudgetFirewall is a tiny Cloudflare Workers proxy that enforces a hard daily/usage budget for OpenAI API keys so runaway loops or leaked keys are blocked immediately instead of quietly burning money. It forwards requests while under budget, inspects OpenAI's usage in responses, and returns 429 instantly once the configured limit is hit.

See the repo & README: https://github.com/mike-lawrence-business/ai-budget-firewall

— Post this on X/Twitter from @mikelawrencebiz (or marketing account). Include link preview and mention "Show HN" where appropriate.