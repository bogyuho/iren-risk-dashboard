# IREN Execution Risk Dashboard

Static mobile-first PWA dashboard for tracking IREN execution risk.

## Update Flow

When the user says `아이렌 실행리스크 업데이트`:

1. Re-check latest SEC filings, official IREN pages, official SNS, job postings, ERCOT/PUC/grid sources, and relevant local permit signals.
2. Update `risk-data.js` with the new status, notes, watchlist, and sources.
3. Update `scripts/research_logs/iren_execution_risk_tracker_2026-04-12.md` or create a dated successor note.
4. Re-deploy this folder if a fixed hosting target is connected.

## Local Preview

From this folder:

```powershell
py -m http.server 8787 --bind 127.0.0.1
```

Open:

```text
http://127.0.0.1:8787/
```

## Deployment

This folder is ready for static hosting on GitHub Pages, Cloudflare Pages, Vercel, or any plain static file server.

The app includes `manifest.json` and `sw.js` so it can be added to a phone home screen.
