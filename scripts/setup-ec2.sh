#!/bin/bash
# Run this once on a fresh Ubuntu 22.04 EC2 instance (t2.micro)
# ssh -i your-key.pem ubuntu@<EC2_PUBLIC_IP> then paste this script

set -e

echo "==> Updating system packages"
sudo apt-get update -y && sudo apt-get upgrade -y

echo "==> Installing Node.js 20"
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt-get install -y nodejs

echo "==> Installing pnpm"
npm install -g pnpm

echo "==> Installing PM2"
npm install -g pm2

echo "==> Installing Nginx"
sudo apt-get install -y nginx

echo "==> Installing Docker & Docker Compose"
sudo apt-get install -y docker.io docker-compose
sudo systemctl enable docker
sudo usermod -aG docker ubuntu

echo "==> Installing Certbot for SSL"
sudo apt-get install -y certbot python3-certbot-nginx

echo "==> Cloning repository"
git clone https://github.com/<your-username>/dsa-sheet.git /home/ubuntu/dsa-sheet
cd /home/ubuntu/dsa-sheet

echo "==> Setup complete. Next: configure .env.production and run deploy.sh"