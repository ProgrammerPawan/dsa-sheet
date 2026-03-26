#!/bin/bash
# Run on EC2 to build and start/restart the server

set -e
cd /home/ubuntu/dsa-sheet

echo "==> Pulling latest code"
git pull origin main

echo "==> Installing dependencies"
pnpm install --frozen-lockfile

echo "==> Building shared package"
pnpm --filter @dsa-sheet/shared build

echo "==> Building server"
pnpm --filter server build

echo "==> Running seed script"
pnpm --filter server seed

echo "==> Restarting PM2"
cd apps/server
pm2 start ecosystem.config.js --env production
pm2 save
pm2 startup

echo "==> Server deployed. Check status with: pm2 status"