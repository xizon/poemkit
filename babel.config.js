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
        "@poemkit/config": "./src/config",
        "@poemkit/components": "./src/client/components",
        "@poemkit/router": "./src/client/router",
        "@poemkit/helpers": "./src/client/helpers",
        "@poemkit/services": "./src/client/services",
        "@poemkit/reducers": "./src/client/reducers",
        "@poemkit/pages": "./src/client/views/_pages",
        "@poemkit/actions": "./src/client/actions",
        "@poemkit/server": "./src/server",
        "@poemkit/store": "./src/store"
      }
    }]

  ]
};

