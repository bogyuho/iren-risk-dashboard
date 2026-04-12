# IREN Risk Dashboard Deployment

## Current Local/Temporary State

- App source: `webapps/iren-risk-dashboard`
- Temporary tunnel source: `mobile_share`
- Temporary URL used in this session: `https://began-bingo-bride-rocks.trycloudflare.com/iren_execution_risk_mobile_2026-04-12.html`
- PWA files: `manifest.json`, `sw.js`, `icon.svg`

The temporary URL depends on the local Python server and `cloudflared` process. It is not a permanent URL.

## Recommended Fixed Deployment

Use GitHub Pages:

- Account detected: `bogyuho`
- Proposed repo: `bogyuho/iren-risk-dashboard`
- Proposed fixed URL: `https://bogyuho.github.io/iren-risk-dashboard/`
- Repo visibility: public unless the user explicitly chooses private and the account supports private Pages.

Do not create the public GitHub repo until the user explicitly confirms public deployment.

## Update Protocol

When the user says `아이렌 실행리스크 업데이트`:

1. Verify latest facts from SEC, IREN official pages, official SNS, job postings, ERCOT/PUC/grid sources, and local permit/satellite signals where available.
2. Update `risk-data.js` first because it powers the mobile dashboard.
3. Update the dated research note in `scripts/research_logs/`.
4. If the fixed GitHub Pages repo exists, push the updated files to the Pages branch.
5. Re-open the dashboard URL and verify the updated date and changed risk statuses.
