# Documentation Strategy: The "5-Minute" README

## Goal
The user must go from "Repo View" to "Protected Endpoint" in under 300 seconds. If it takes longer, they will assume it's "too complex" and stick to the risky default.

## Outline

### 1. The "Why" (Hook)
*   *"Don't let a rogue loop bankrupt you. Set a hard daily limit on your OpenAI usage."*
*   Badge: `Deploy to Cloudflare Workers` (One-click button if possible, otherwise simple CLI commands).

### 2. Prerequisites
*   A Cloudflare account (Free).
*   Node.js installed (for the deployment tool).

### 3. Quick Start (The Happy Path)

**Step 1: Clone & Install**
```bash
git clone https://github.com/yourname/aibudgetfirewall
cd aibudgetfirewall
npm install
```

**Step 2: Configure Limits**
Edit `wrangler.toml`:
```toml
[vars]
DAILY_BUDGET = "1.00" # $1.00 per day
OPENAI_KEY = "sk-..." # (Or set via secrets for better security)
```

**Step 3: Deploy**
```bash
npx wrangler deploy
```

**Step 4: Use It**
In your app (e.g., Python `openai` lib):
```python
client = OpenAI(
    base_url="https://your-worker.workers.dev/v1",
    api_key="sk-..." # Your proxy doesn't need to change the key logic if passed through, or can hide it.
)
```

### 4. How It Works (Technical Trust)
*   Brief explanation of how it calculates token costs (tiktoken inside the worker or simple char count approximation for speed).
*   Statement on privacy: "No logging of prompts body, only token counts."

### 5. FAQ
*   *Does it add latency?* (< 10ms typically).
*   *Does it support GPT-4?* (Yes, customizable cost map).
