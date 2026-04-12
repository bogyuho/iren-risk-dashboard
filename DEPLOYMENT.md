# IREN Risk Dashboard Deployment

## Current Local/Temporary State

- App source: `webapps/iren-risk-dashboard`
- Temporary tunnel source: `mobile_share`
- Temporary URL used in this session: `https://began-bingo-bride-rocks.trycloudflare.com/iren_execution_risk_mobile_2026-04-12.html`
- PWA files: `manifest.json`, `sw.js`, `icon.svg`
- Fixed production URL: `https://bogyuho.github.io/iren-risk-dashboard/`
- GitHub repo: `https://github.com/bogyuho/iren-risk-dashboard`

The temporary URL depends on the local Python server and `cloudflared` process. It is not a permanent URL.

## Recommended Fixed Deployment

Use GitHub Pages:

- Account detected: `bogyuho`
- Repo: `bogyuho/iren-risk-dashboard`
- Fixed URL: `https://bogyuho.github.io/iren-risk-dashboard/`
- Repo visibility: public

## Update Protocol

When the user says `아이렌 실행리스크 업데이트`:

1. Verify latest facts from SEC, IREN official pages, official SNS, job postings, ERCOT/PUC/grid sources, and local permit/satellite signals where available.
2. Update `risk-data.js` first because it powers the mobile dashboard.
3. Update the dated research note in `scripts/research_logs/`.
4. Commit and push from `webapps/iren-risk-dashboard` to `main`.
5. Re-open the dashboard URL and verify the updated date and changed risk statuses.
