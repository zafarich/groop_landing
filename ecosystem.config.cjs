module.exports = {
  apps: [
    {
      name: "groop-landing",
      port: "4004",
      exec_mode: "fork",
      instances: 1,
      script: "./.output/server/index.mjs",
      max_memory_restart: "800M",
      env: {
        NODE_ENV: "production",
        PORT: 4004,
        NITRO_PORT: 4004,
        HOST: "0.0.0.0",
      },
    },
  ],
};
