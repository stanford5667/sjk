// Debug script - paste this in browser console to test mock data flow

// Test 1: Check if mock data is available
import('@/data/mockMarketData').then(mod => {
  console.log('=== Mock Data Test ===');
  console.log('SPX:', mod.getMockIndex('SPX'));
  console.log('NDX:', mod.getMockIndex('NDX'));
  console.log('DJI:', mod.getMockIndex('DJI'));
  console.log('AAPL:', mod.getMockStock('AAPL'));
});

// Test 2: Check quote cache service
import('@/services/quoteCacheService').then(async mod => {
  console.log('=== Quote Cache Test ===');
  console.log('Live data available:', mod.isLiveDataAvailable());
  
  const quote = await mod.getCachedQuote('SPY');
  console.log('SPY quote:', quote);
  
  const quotes = await mod.getCachedQuotes(['SPY', 'QQQ', 'DIA']);
  console.log('Batch quotes:', Object.fromEntries(quotes));
});

// Test 3: Check Finnhub config
import('@/services/finnhubService').then(mod => {
  console.log('=== Finnhub Config Test ===');
  console.log('Finnhub configured:', mod.isFinnhubConfigured());
});
