# Shonenstream - Scraper Server (Main)

This server scrapes anime data from third-party websites and provides clean APIs for the frontend. There are cases where i integrated another's websites API. but i plan to change that in the future.

## FEATURES

- Scrapes Anime Details (Episodes, Links, Streaming Links, Genres, Search Results e.t.c) and Stores it in Redis for quick access
- Proxy support for `.m3u8` video links to avoid CORS
- Returns JSON data optimized for frontend rendering
- Caching data in Memory for an hour for quick access

## TECH STACK

- Node.js
- Express
- Typescript
- Cheerio
- Axios
- CORS
- dotenv
- UUID
- Redis
- Http-Proxy-middleware

```bash

git clone https://github.com/Karl-Xavier/Shonenstream-Remake.git

cd server

npm install

npm run dev
```

### ENVIRONMENT VARIABLE

- REDIS_URL = 'leave empty'

# EXTRA NOTE

When you work on the project please right what you worked and the file name in the addedOrRemoved.txt