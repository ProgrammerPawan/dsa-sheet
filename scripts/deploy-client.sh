#!/bin/bash
set -e

BUCKET_NAME="dsa-sheet-frontend-pawan"
CLOUDFRONT_DIST_ID="E2G12VX52LNLIV"
AWS_REGION="eu-north-1"

echo "==> Building client"
cd apps/client
pnpm build

echo "==> Syncing to S3"
aws s3 sync dist/ s3://$BUCKET_NAME \
  --region $AWS_REGION \
  --delete \
  --cache-control "public, max-age=31536000" \
  --exclude "index.html"

aws s3 cp dist/index.html s3://$BUCKET_NAME/index.html \
  --region $AWS_REGION \
  --cache-control "no-cache, no-store, must-revalidate"

echo "==> Invalidating CloudFront cache"
aws cloudfront create-invalidation \
  --distribution-id $CLOUDFRONT_DIST_ID \
  --paths "/*"

echo "==> Frontend deployed!"
echo "Live at: https://d13c2xnxd2i5ch.cloudfront.net"