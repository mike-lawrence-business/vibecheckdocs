# Launch Post Drafts

## 1. HackerNews: "Show HN: I built a hard stop-loss for OpenAI keys because I'm paranoid"

**Title:** Show HN: AIBudgetFirewall – A hard stop-loss proxy for OpenAI keys (runs on Cloudflare free tier)

**Url:** https://ai-budget-firewall.agentforge-firewall.workers.dev

**Text:**
Hey HN,

I live in constant fear of a while-loop going rogue or a leaked key draining my bank account. OpenAI's billing limits are often delayed, and their "soft limits" just send emails while the meter keeps running.

I wanted a "hard stop" switch.

I built **AIBudgetFirewall**. It's a lightweight proxy that sits between your app and OpenAI.

**How it works:**
1. You deploy it to a Cloudflare Worker (takes ~3 mins, runs on the Free Tier).
2. You set a budget (e.g., `MAX_DAILY_SPEND=5.00`).
3. Point your app to `https://your-worker.workers.dev` instead of `api.openai.com`.
4. The worker tracks usage. If you cross $5.00, it returns a 429 immediately.

**Why this instead of Helicone/Portkey?**
*   **Privacy:** Your API keys never leave your Cloudflare account. I don't want them.
*   **Cost:** It runs on the free tier (100k reqs/day). No VPS to manage.
*   **Simplicity:** No Postgres, no Docker, no dashboard. Just a config variable.

Code is open source (MIT). I'd love to hear if this helps anyone else sleep better at night.

https://ai-budget-firewall.agentforge-firewall.workers.dev

---

## 2. Reddit (r/OpenAI & r/LocalLLaMA)

**Title:** I built a free "firewall" for OpenAI keys because I'm terrified of unexpected bills

**Body:**
Hi everyone,

I’ve seen enough horror stories about leaked API keys or infinite loops costing thousands of dollars. I realized I wasn't coding comfortably because I was always worried about the billing meter.

OpenAI has monthly limits, but I wanted a **daily** hard stop.

I built a simple tool called **AIBudgetFirewall**.

**What it does:**
It acts as a proxy url. You change `api.openai.com` to your custom Cloudflare Worker URL. It counts the tokens passing through, estimates the cost, and hard-rejects requests if they exceed your daily limit (e.g., $1/day).

**Why use it?**
*   **100% Free to run:** Uses Cloudflare Workers (free tier covers way more than you need).
*   **Private:** You self-host it. Your keys don't go to some random SaaS startup.
*   **Simple:** Setup takes about 5 minutes.

I made it open source here: https://ai-budget-firewall.agentforge-firewall.workers.dev

Hope this saves someone’s wallet!
