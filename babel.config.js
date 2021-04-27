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
		"@uixkit.react/config": "./src/config/websiteConfig.js",
		"@uixkit.react/components": "./src/client/components",
		"@uixkit.react/plugins": "./src/client/components/_third-party-plugins",
		"@uixkit.react/router": "./src/client/router",
		"@uixkit.react/reducers": "./src/client/reducers",
		"@uixkit.react/pages": "./src/client/views/_pages",
		"@uixkit.react/actions": "./src/client/actions",
		"@uixkit.react/server": "./src/server",
		"@uixkit.react/store": "./src/store"
	  }
	}]
    
  ]
};

