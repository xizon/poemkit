module.exports = {
  "apps": [
    {
      //App name
      "name": "uix-kit-react",
      //The path of the executable file
      "script": "./src/server/server.js",
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
      "repo": "https://github.com/xizon/uix-kit-react.git",
      //project destination path of the server
      "path": "/Applications/MAMP/htdocs/uix-kit-react",
      //hook
      'post-deploy' : 'npm install && npm run build && pm2 reload ecosystem.config.js --env production',
      "env": {
        //environment
        "NODE_ENV": "production"
      }
    }
  }
};