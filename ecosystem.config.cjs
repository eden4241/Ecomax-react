module.exports = {
  apps: [
    {
      name: "ECOMAX-REACT",
      cwd: __dirname,
      script: "node_modules/.bin/serve",
      args: "-s build -l 3000",
      env: {
        NODE_ENV: "production",
      },
    },
  ],
};

