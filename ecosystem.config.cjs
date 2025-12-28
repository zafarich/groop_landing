module.exports = {
  apps: [
    {
      name: "groop-landing",
      script: "./.output/server/index.mjs",
      instances: "2", // Yoki yadrolar soni (masalan: 2)
      exec_mode: "cluster", // Yuklamani taqsimlash uchun
      autorestart: true,
      watch: false,
      max_memory_restart: "1G",
      env: {
        NODE_ENV: "production",
        PORT: 4004,
        NITRO_PORT: 4004,
        HOST: "0.0.0.0",
      },
    },
  ],
};
