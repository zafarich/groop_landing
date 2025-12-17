module.exports = {
  apps: [
    {
      name: "groop-landing",
      port: "4004",
      exec_mode: "cluster",
      instances: "max",
      script: "./.output/server/index.mjs",
      env: {
        NODE_ENV: "production",
        PORT: 4004,
        NITRO_PORT: 4004,
        HOST: "0.0.0.0",
      },
    },
  ],
};
