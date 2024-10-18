module.exports = {
  apps: [
    {
      name: 'chzzk-api-start',
      script: 'src/server/main.ts',
      exec_mode: 'fork',
      interpreter: 'npx',
      interpreter_args: 'tsx',
      env: {
        NODE_ENV: 'production'
      }
    }
  ]
};