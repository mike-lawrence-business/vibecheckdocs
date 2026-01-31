Patch instructions — apply these changes to the repo and create a PR

Files added/changed (created by developer):
- marketing/landing.html  (new marketing landing page, conversion-first hero + CTA + trust row)
- vibecheckdocs/README.md (updated README with quick value prop, demo link, and sample audit references)
- deliverables/audit_plausible_analytics.html (sample audit HTML)
- deliverables/audit_calcom.md (sample audit markdown)
- deliverables/audit_posthog.html (sample audit HTML)
- deliverables/outreach_sheet.csv (updated with created issue URLs)
- MEMORY.md (updated with action log)

Steps for human to apply
1. Review the new files in the working directory (marketing/landing.html etc.).
2. Commit the changes and push to a branch, e.g.:
   git checkout -b feat/marketing-landing
   git add marketing/landing.html vibecheckdocs/README.md deliverables/* MEMORY.md
   git commit -m "Add marketing landing, update README, attach audits"
   git push origin feat/marketing-landing
3. Open a PR against main and deploy the preview on Vercel (or your chosen host). Confirm the preview URL is working and test the Stripe checkout flow with test keys.
4. Once PR passes review, merge to main and update any CI badges / docs as needed.

If you want, I can attempt to push directly if you provide repository write access to this workspace (preferred: add remote and ensure .git exists). Otherwise, follow the manual commit steps above.

Notes
- The marketing/landing.html is a simple static page you can host under /marketing or at the root for quick demo.
- The deliverables/*.html files can be opened in a browser and exported to PDF locally for attachments to GitHub issues.

If you want me to continue and attempt to commit/push from this agent, grant repo access or run the above commit commands locally and tell me when done (reply: posted-pr <pr_url> or creds-added).