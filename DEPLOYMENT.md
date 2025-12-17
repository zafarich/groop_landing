# Groop Landing - Deployment Guide

## Production Deployment

### 1. Build the application

```bash
npm run build
```

### 2. Start with PM2

```bash
npm run pm2:start
```

### 3. Other PM2 commands

```bash
# Stop the application
npm run pm2:stop

# Restart the application
npm run pm2:restart

# Delete from PM2
npm run pm2:delete

# View logs
npm run pm2:logs
```

## Configuration

The application runs on **port 4004** in production mode.

Configuration file: `ecosystem.config.cjs`

## Environment Variables

- `NODE_ENV`: production
- `PORT`: 4004
- `NITRO_PORT`: 4004
- `HOST`: 0.0.0.0

## PM2 Features

- **Cluster mode**: Runs multiple instances for load balancing
- **Auto-restart**: Automatically restarts if the app crashes
- **Log management**: Centralized logging
