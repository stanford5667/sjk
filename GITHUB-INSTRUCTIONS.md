# How to Push to GitHub

Since I can't access the network directly, here's how to get this code to your GitHub repository:

## Option 1: Using the Git Bundle (Recommended)

The `asset-labs-repo.bundle` file contains the complete git history.

```bash
# 1. Clone from the bundle
git clone asset-labs-repo.bundle asset-labs-ai
cd asset-labs-ai

# 2. Add your GitHub remote
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git

# 3. Push to GitHub
git push -u origin main
```

## Option 2: Using the ZIP File

If you have an existing repo:

```bash
# 1. Unzip asset-labs-features.zip into your project
unzip asset-labs-features.zip -d your-project/

# 2. Stage and commit changes
cd your-project
git add -A
git commit -m "feat: Add Asset Labs AI features"

# 3. Push to GitHub
git push origin main
```

## Option 3: Create New GitHub Repo

1. Go to https://github.com/new
2. Create a new repository (don't initialize with README)
3. Clone the bundle locally:
   ```bash
   git clone asset-labs-repo.bundle asset-labs-ai
   cd asset-labs-ai
   ```
4. Add remote and push:
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/asset-labs-ai.git
   git push -u origin main
   ```

## What's Included

### New Pages
- `/watchlist` - Stock watchlist with live prices
- `/screener` - AI-powered stock screener
- `/backtester` - Portfolio backtesting tool

### New Services
- `aiScreenerService.ts` - Natural language stock screening
- `backtesterService.ts` - Monte Carlo simulations
- `portfolioNewsService.ts` - News with sentiment analysis
- `portfolioPerformanceService.ts` - Real portfolio tracking

### New Components
- Modular Dashboard with configurable widgets
- Financial Health Indicators
- Portfolio News Widget
- Educational Tooltips

## Environment Variables

Add these to your `.env` file:

```env
# Polygon.io API (for AI Screener)
VITE_POLYGON_API_KEY=your_polygon_api_key

# Finnhub API (for quotes and news)
VITE_FINNHUB_API_KEY=your_finnhub_api_key
```

## After Pushing

1. Update your router with the new routes
2. Add navigation items for new pages
3. Set up environment variables in your hosting provider
