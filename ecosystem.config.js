module.exports = {
  "apps": [
    {
      //App name
      "name": "poemkit",
      //The path of the executable file
      "script": "ts-node -r tsconfig-paths/register ./src/server/server.js",
      "env": {
        "COMMON_VARIABLE": "true"
      },
      "env_production": {
        "NODE_ENV": "production"
      }
    }
  ],
  "deploy": {
    "production": {
      //Server user
      "user": "username",
      //server address
      "host": ["localhost"],
      //Server port
      "port": "3000",
      "ref": "origin/master",
      //git ssh
      "repo": "https://github.com/xizon/poemkit.git",
      //project destination path of the server
      "path": "/Applications/MAMP/htdocs/poemkit",
      //hook
      'post-deploy' : 'npm install && npm run build && pm2 reload ecosystem.config.js --env production',
      "env": {
        //environment
        "NODE_ENV": "production"
      }
    }
  }
};