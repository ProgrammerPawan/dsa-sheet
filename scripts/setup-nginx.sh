#!/bin/bash
sudo cp /home/ubuntu/dsa-sheet/scripts/nginx.conf /etc/nginx/sites-available/dsa-sheet
sudo ln -sf /etc/nginx/sites-available/dsa-sheet /etc/nginx/sites-enabled/
sudo rm -f /etc/nginx/sites-enabled/default
sudo nginx -t
sudo systemctl restart nginx
sudo systemctl enable nginx
echo "Nginx configured. Visit http://16.16.229.235/api/health to verify."