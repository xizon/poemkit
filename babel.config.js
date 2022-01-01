module.exports = {
  "presets": [

    [
      "@babel/preset-env",
      {
        "targets": {
          "node": "current"
        }
      }
    ],
    [
      "@babel/preset-react"
    ],
    [
      "@babel/preset-typescript"
    ]
  ],
  "plugins": [
    ["@babel/plugin-transform-runtime",
      {
        "regenerator": true
      }
    ],
    [
      "@babel/plugin-proposal-class-properties"
    ],
    ["module-resolver", {
      "root": ["./src"],
      "alias": {
        "@/config": "./src/config",
        "@/components": "./src/client/components",
        "@/router": "./src/client/router",
        "@/helpers": "./src/client/helpers",
        "@/services": "./src/client/services",
        "@/reducers": "./src/client/reducers",
        "@/pages": "./src/client/views/_pages",
        "@/actions": "./src/client/actions",
        "@/server": "./src/server",
        "@/store": "./src/store"
      }
    }]

  ]
};

