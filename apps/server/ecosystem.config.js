module.exports = {
  apps: [
    {
      name: "dsa-sheet-server",
      script: "dist/index.js",
      cwd: "/home/ubuntu/dsa-sheet/apps/server",
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: "300M",
      env_production: {
        NODE_ENV: "production",
      },
    },
  ],
};
