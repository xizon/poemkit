# PoemKit


<p align="center">
  <a href="https://github.com/xizon/poemkit">
	  <img src="public/assets/images/logo-colorful.png"  alt="PoemKit"  width="180" >
  </a>
  <p align="center">
	  <a href="https://app.travis-ci.com/github/xizon/poemkit" title="Travis CI"><img src="https://img.shields.io/travis/com/xizon/poemkit?style=for-the-badge"/></a>
	  <a href="https://www.npmjs.com/package/poemkit" title="npm version"><img src="https://img.shields.io/npm/v/poemkit?style=for-the-badge"/></a>
	  <a href="https://github.com/xizon/poemkit/blob/master/LICENSE" title="license"><img src="https://img.shields.io/badge/license-MIT-brightgreen.svg?style=for-the-badge"/></a>
	   
  </p>
  <br>
</p>



A free web kit with React for fast web design and development via SSR. It also is a Micro-Frontend Architecture. Using react, redux, router, axios and express. This project was bootstrapped with nodejs library. Project supports automatic deployments from a number of repository hosting services via pm2. PoemKit delivers more than **50+** built-in UI components for building modern web applications.

**PoemKit can work and deploy through commands, it still requires real code to be written behind them.** These kits serve as UI components and some logic modules that can be put together into a real website or application prototype that will still require programming functions to make them work in the real world. PoemKit meets fully customizable webpack requirements.

---

- [English Documentation](README.md)
- [中文版说明文档](README_CN.md)

---



## Demo

![quick overview 1](public/assets/images/demo-anim.gif)

For online demo, please checkout [https://uiux.cc/poemkit](https://uiux.cc/poemkit)

Server runs on `http://localhost:3000`



## Table of Contents


* [Description](#description)
* [Installation And Test](#installation-and-test)
* [Custom Configuration](#custom-configuration)
* [File Structures](#file-structures)
* [Contributing](#contributing)
* [Changelog](#changelog)
* [Browser Support](#browser-support)
* [Supported development environment](#supported-development-environment)
* [Licensing](#licensing)




## Description


* Base Environment: TypeScript 4.x.x + Babel 7.x.x + Webpack 5.x.x
* Provides a variety of pre-built UI components such as structured layout objects and UI controls
* Accessible URL, Technical SEO, and making your site search engine friendly with React Helmet
* Integrate development, debugging, bundle, and deployment in one
* Not a JavaScript framework
* No jQuery & Does not bind any tool libraries
* Server-Side Rendering (SSR) Support
* Components are separated, you can use any UI component (such as Ant Design)
* Styling React Components in Sass/SCSS
* Automatically bundle and generate independent core CSS and JS files
* Project supports automatic deployments from a number of repository hosting services via pm2
* ✂️ Pluggable: The default components import some third-party plug-ins, such as  grid system of Bootstrap 4, GSAP animation library, FontAwesome icon library, 3D engine, etc., so that you can quickly expand your website (Support on-demand configuration)
* ✂️ Configurable Scaffold: Independently package the dist files (you could modify `webpack.config.js` to use memory mount)


* * *



## Installation And Test

You will need to have [node](https://nodejs.org/) setup on your machine. That will output the built distributables to `./dist/*` and `./public/*.html`.


**Step 1.** Use NPM (Locate your current directory of project, and enter the following command.) or download the latest version from [Github](https://github.com/xizon/poemkit). For nodejs you have to install some dependencies.

```sh
$ sudo npm install poemkit
```

Or clone the repo to get all source files including build scripts: 

```sh
$ git clone git://github.com/xizon/poemkit.git
```


**Step 2.** First, using an absolute path into your `"poemkit/"` folder directory.

```sh
$ cd /{your_directory}/poemkit
```


**Step 3.** Before doing all dev stuff make sure you have `Node 10+` installed. After that, run the following code in the main directory to install the node module dependencies.

```sh
$ sudo npm install
```


**Step 4.** Commonly used commands:

Debug application. It can be checked separately as TypeScript without compiling and packaging behavior.

```sh
$ npm run check
```

To use webpack to bundle files.

```sh
$ npm run build
```

Run the following commands for local testing and code inspection. You can see that the server is running. (Run the Express server only.). Using `Ctrl + C` to stop it.

```sh
$ npm run dev
```


**Step 5.** When you done, this will spin up a server that can be accessed at

```sh
http://localhost:3000
```

The new code is recommended to be bundled before debugging.


**Step 6 (Optional).** Start Reactjs application with PM2 as a service (only works if you are using Node v13.9.0 or above.)

6.1) Installing Node and NPM

```sh
$ curl -sL https://rpm.nodesource.com/setup_14.x | sudo bash -
$ sudo yum install nodejs
$ node --version  #v14.16.1
$ npm --version   #6.14.12
$ which node babel-node #check the location of node and babel-node
```


6.2) Installing PM2. With NPM

```sh
$ sudo npm install pm2@latest -g
```


6.3) Install Babel globally on your machine

```sh
$ sudo npm install -g babel-cli
$ sudo npm install -g @babel/core @babel/cli @babel/preset-env 
```


6.4) Install TypeScript and ts-node globally on your machine

```sh
$ sudo npm install -g typescript ts-node
```


6.5) Install TypeScript dependencies with PM2

```sh
$ sudo pm2 install typescript
```



6.6) Frequently used commands for PM2:

```sh
#into your `"poemkit/"` folder directory.
$ cd /{your_directory}/poemkit


#run app
$ pm2 start ecosystem.config.js

#other commands
$ pm2 restart ecosystem.config.js
$ pm2 stop ecosystem.config.js
$ pm2 delete ecosystem.config.js
$ pm2 list
$ pm2 logs
```


6.7) Use domain to access your React appication.

You had created a basic React App from here, then you need to deploy a React App on Apache or Nginx web server. Please refer to the network for the tutorial on setting up the proxy.



**Step 7 (Optional).** Unit Testing

```sh
$ npm run test
```


**Step 8 (Optional).** Deploy to the server

```sh
$ npm run deploy
```

Stop the existing deployments:

```sh
$ npm run destroy
```

<blockquote>
<h3>💡 Note:</h3>
 
**a) ERROR: npm update check failed.**

Solution:

```sh
$ sudo chown -R $USER:$(id -gn $USER) /Users/{username}/.config
```

**b) ERROR: Node sass version 6.x.x is not compatible with ^ 4.x.x.**

Solution:

```sh
$ npm install node-sass@4.14.1
```


**c) If you upgrade the version of Node, please execute the following code:**

```sh
$ sudo npm install
$ sudo npm rebuild node-sass
```
</blockquote>


## Custom Configuration

### ⚙️ Environment Variables:

To disambiguate in your `webpack.config.js` between development and production builds you may use environment variables.

If you want to consider both OS X and Windows, you can use the third-party tool [cross-env](https://www.npmjs.com/package/cross-env)

**Step 1.** Run the command to install cross-env

```sh
$ npm install --save-dev cross-env
```

**Step 2.** Further in the file `package.json` in scripts we will indicate the ready-made command for assembly webpack in production version

```json
"scripts": {
	"dev": "cross-env NODE_ENV=development nodemon --require ignore-styles --exec ts-node -r tsconfig-paths/register ./src/server/server.js",
    "build": "cross-env NODE_ENV=production webpack --progress --mode production"
}
```

Where through cross-env set variable and value `NODE_ENV=xxx` and then we get this variable during the execution webpack


**Step 3.** Further into the configuration file `webpack.config.js` let's apply this check from the object process and further properties env to our variable **NODE_ENV**:

```js
if (process.env.NODE_ENV === 'production') {
    // .. тwe apply (or add) some kind of plugin
}
```



### ⚙️ HTML Template:

Modify the default template `./src/client/views/_html/index.html`. It will be automatically generated as `./public/index.html`. It contains the HTML tags that [React Helmet](https://www.npmjs.com/package/react-helmet) needs to use, for example:

```html
<!DOCTYPE html>
<html {{helmetHtmlAttributes}}>
	<head>
		<meta charset="utf-8" />
		{{helmetTitle}}
		
		<!-- manifest.json provides metadata used when your web app is added to the
             homescreen on Android. See https://developers.google.com/web/fundamentals/engage-and-retain/web-app-manifest/
		============================================= -->
		<link rel="manifest" href="@@{website_root_directory}/manifest.json"/>
        
		<!-- Mobile Settings
		============================================= -->
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"/>
        <!-- Mobile Settings end -->

		<!-- Compatibility
		============================================= -->
        <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
        <!-- Compatibility  end -->
        
		<!-- Core & Theme CSS
		============================================= -->
        <link rel="stylesheet" href="@@{website_root_directory}/dist/css/poemkit.min.css?ver=@@{website_hash}"/>
        <!-- Core & Theme CSS  end -->

            
		<!-- SEO
		============================================= -->
		{{helmetMeta}}
		{{helmetLink}}
        <meta name="generator" content="@@{website_generator}"/>  
        <meta name="author" content="@@{website_author}"/> 
        <!-- SEO  end -->


		<!-- Favicons
		============================================= -->
		<link rel="icon" href="@@{website_root_directory}/assets/images/favicon/favicon-32x32.png" type="image/x-icon"/>
		<link rel="shortcut icon" href="@@{website_root_directory}/assets/images/favicon/favicon-32x32.png" sizes="32x32"/>
		<link rel="apple-touch-icon" href="@@{website_root_directory}/assets/images/favicon/apple-touch-icon-57x57.png"/>
		<link rel="apple-touch-icon" sizes="72x72" href="@@{website_root_directory}/assets/images/favicon/apple-touch-icon-72x72.png"/>
		<link rel="apple-touch-icon" sizes="114x114" href="@@{website_root_directory}/assets/images/favicon/apple-touch-icon-114x114.png"/>
		<!-- Favicons  end -->

  </head>  
  
  <body {{helmetBodyAttributes}}>

	  <noscript>
	      You need to enable JavaScript to run this app.
	  </noscript>
	  
	  <div id="app">{{reactApp}}</div>
	  
	<!-- Your Plugins & Theme Scripts
	============================================= -->
	<script>
		var REVISION     = "@@{website_version}",
			APP_ROOTPATH = {
				"templateUrl" : "@@{website_root_directory}", //If the file is in the root directory, you can leave it empty. If in another directory, you can write: "/blog"  (but no trailing slash)
				"homeUrl"     : "",  //Eg. https://uiux.cc
				"ajaxUrl"     : ""   //Eg. https://uiux.cc/wp-admin/admin-ajax.php
			};
    </script>  
    <script>window.__PRELOADED_STATE__ = {{preloadedState}};</script>
    <script src="@@{website_root_directory}/dist/js/poemkit.min.js?ver=@@{website_hash}"></script>
	<!-- Your Plugins & Theme Scripts  end -->
    
  </body>
</html>
```

The `./public/manifest.json` file is automatically generated based on `./src/config/tmpl-manifest.json`



### ⚙️ Configuring Module resolve and alias:

You can configure the module resolution by adding resolve to the `webpack.config.js`. If you use a relative path when you import another module, it would be bothersome because you would have to figure out all of the relative paths. Therefore, you can add alias to make it easier for yourself.

`webpack.config.js` :

```js
...
const alias = {
	pathConfig            : './src/config',
	pathComponents        : './src/client/components',
	pathRouter            : './src/client/router',
	pathHelpers            : './src/client/helpers',
	pathServices          : './src/client/services',
	pathReducers          : './src/client/reducers',
	pathPages             : './src/client/views/_pages',
	pathActions           : './src/client/actions',
	pathServer            : './src/server',
	pathStore             : './src/store'
};

...
resolve: {
	extensions: ['.js', '.jsx', '.ts', '.tsx', '.scss', '.sass'],
	alias: {

		// specific mappings.
		// Supports directories and custom aliases for specific files when the express server is running, 
		// you need to configure the `babel.config.js` and `tsconfig.json` at the same time
		'@/config': path.resolve(__dirname, alias.pathConfig ),
		'@/components': path.resolve(__dirname, alias.pathComponents ),
		'@/router': path.resolve(__dirname, alias.pathRouter ),
		'@/helpers': path.resolve(__dirname, alias.pathHelpers ),
		'@/services': path.resolve(__dirname, alias.pathServices ),
		'@/reducers': path.resolve(__dirname, alias.pathReducers ),
		'@/pages': path.resolve(__dirname, alias.pathPages ),
		'@/actions': path.resolve(__dirname, alias.pathActions ),
		'@/server': path.resolve(__dirname, alias.pathServer ),
		'@/store': path.resolve(__dirname, alias.pathStore ),

	}
},
...
```

`babel.config.js` :

```js
...
  "plugins": [
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
...
```


`tsconfig.json` :

```json
{
  "compilerOptions": {
    "baseUrl": "./src",
    "paths": {
        "@/config/*": ["config/*"],
        "@/components/*": ["client/components/*"],
        "@/router/*": ["client/router/*"],
        "@/helpers/*": ["client/helpers/*"],
        "@/services/*": ["client/services/*"],
        "@/reducers/*": ["client/reducers/*"],
        "@/pages/*": ["client/views/_pages/*"],
        "@/actions/*": ["client/actions/*"],
        "@/server/*": ["server/*"],
        "@/store/*": ["store/*"]
    }
  }
}
```


`package.json` :

```json
{
  "jest": {
    "testEnvironment": "jsdom",
    "moduleNameMapper": {
      "\\.(css|less|scss|sass)$": "identity-obj-proxy",
      "^@/config/(.*)": "<rootDir>/src/config/$1",
      "^@/components/(.*)": "<rootDir>/src/client/components/$1",
      "^@/router/(.*)": "<rootDir>/src/client/router/$1",
      "^@/helpers/(.*)": "<rootDir>/src/client/helpers/$1",
      "^@/services/(.*)": "<rootDir>/src/client/services/$1",
      "^@/reducers/(.*)": "<rootDir>/src/client/reducers/$1",
      "^@/pages/(.*)": "<rootDir>/src/client/views/_pages/$1",
      "^@/actions/(.*)": "<rootDir>/src/client/actions/$1",
      "^@/server/(.*)": "<rootDir>/src/server/$1",
      "^@/store/(.*)": "<rootDir>/src/store/$1"
    },
    "transform": {
      "^.+\\.(js|jsx)$": "babel-jest",
      "^.+\\.(ts|tsx)?$": "ts-jest"
    }
  }
}
```



### ⚙️ Library Related Configurations:

Use the output found in `webpack.config.js` to configure settings related to the library like the module type and the namespace.


```js
...
const globs = {
	port                  : 8080,
	examples              : 'public',
	build                 : 'src/client',
	dist                  : 'dist'
};

...
output: {
	path: path.resolve(__dirname, './' + globs.dist + '/js' ),
	filename: '[name].js'
},
...
```


### ⚙️ Site Info Configurations:

You can update the Placeholders in Templates by modifying the Site Info configuration of `package.json`. Like this:

```json
{
  "author": "UIUX Lab",
  "name": "poemkit",
  "email": "uiuxlab@gmail.com",
  "version": "1.0.0",
  "projectName": "PoemKit",
  "createdInfo": "UIUX Lab (https://uiux.cc)",
  "projectURL": "https://uiux.cc",
  "description": "React toolkit for building a full website that also is a Micro-Frontend Architecture",
  ...
}
```



### ⚙️ Router Configurations:

Configuration of routes, which is also the primary navigation of the website (not including the configuration of Nested routes which will be configured on the page in the primary navigation). Access to `./src/client/router/RoutesConfig.js`. 


Some scripts of the router can be modified in the file `./src/client/router/App.js`.


### ⚙️ Server-side rendering Configurations:

Some scripts on the server side can be modified in the file `./src/server/renderer.js`.


### ⚙️ Set up server proxy:

To run both the server and React application at the same time we need to add the `proxy` key to `package.json`. We've already set our server to run on port 3000, so point the proxy at `localhost:3000`.

```json
{
  "proxy": "http://localhost:3000",
  ...
}
```

### ⚙️ Use `PropTypes` to check the type:

```sh
$ npm run dev
```

Then, you could use the following JavaScript code to debug it. Display error and warning messages in the terminal.

```js
import PropTypes from "prop-types";
import React, { Component } from 'react';

export default class YourComponentName extends Component { 
	public static propTypes = {};
	constructor(props) {
		super(props);
	}
	render() { ... }
}

if ( process.env.NODE_ENV === 'development' ) {

	YourComponentName.propTypes = {
	    displayEnable: PropTypes.bool.isRequired,
		htmlString: PropTypes.oneOfType([PropTypes.string, PropTypes.object])
	}
	
}
```


### ⚙️ Custom import third-party library:

The application loads some third-party libraries (icons, animations, 3D engines, etc.) by default, you can load them as needed, or modify the configuration file. Access to `./src/client/components/_plugins/`

Third-party plug-ins are used together with custom components by default, and you can also remove them.


### ⚙️ Root Directory Configurations:

Change the root directory of the website so that it can be used when you upload the project to another directory. Modify the key `rootDirectory` of the `./src/config/websiteConfig.js`.

If the file is in the root directory, you can leave it empty. If in another directory, you can write: "/blog". **(no trailing slash)**


```json
{
  "rootDirectory": ""
}
```



### ⚙️ Site Address (URL) Configurations:

Site Address (URL) is generally used for SEO optimization. Modify the key `siteUrl` of the `./src/config/websiteConfig.js`. The URL will be named `https://domain-name.com` **(no trailing slash and subdirectory)**


```json
{
  "siteUrl": ""
}
```


### ⚙️ API Configurations:

Change the API URLs of the website. Modify the key `API` of the `./src/config/websiteConfig.js`, as shown below:


```json
{
  "API": {
	  "RECEIVE_DEMO_LIST": "https://apiurl1.com",
	  "RECEIVE_DEMO_LISTDETAIL": "https://apiurl2.com"
  }
}
```



* * *


## File Structures



```sh
poemkit/
├── README.md
├── CHANGELOG.md
├── CONTRIBUTING.md
├── LICENSE
├── ecosystem.config.js ------------------------- # for pm2
├── babel.config.js
├── webpack.config.js 
├── package-lock.json
├── package.json
├── test/            --------------------------- # Unit Testing scripts
├── public/          --------------------------- # HTML template of Homepage
│   ├── index.html    
│   ├── manifest.json
│   └── server/  ------------------------------- # PHP scripts used to the server for testing
│   └── assets/
├── dist/        ------------------------------- # Files compiled, used in the production environment
│   ├── css/
│   │   ├── poemkit.css
│   │   └── poemkit.min.css
│   └── js/
│   │   ├── poemkit.js
│   │   └── poemkit.min.js
├── src/
│   ├── client/
│   │   ├── client.js
│   │   ├── actions/
│   │   ├── reducers/
│   │   ├── helpers/
│   │   ├── services/
│   │   ├── router/
│   │   ├── components/ -------------------------  # Independent React components
│   │   │     ├── */
│   │   │     ├── _utils/ -----------------------  # General utilities & snippets(js & css)
│   │   │     └── _plugins/ ---------------------  # Third-party plugins
│   │   ├── views/ ------------------------------  # Website pages
│   │   │     ├── _pages/
│   │   │     └── _html/
│   └── server/
│   │   ├── app.js
│   │   ├── server.js
│   │   └── renderer.js
│   └── store/
│   │   └── createStore.js
│   └── config/
│   │   ├── tmpl-manifest.json  -----------------  # `manifest.json` file template
│   │   └── websiteConfig.js  -------------------  # website config
└──
```



## Contributing

Finding bugs, sending pull requests or improving our docs - any contribution is welcome and highly appreciated. To get started, head over to our [contribution guidelines](CONTRIBUTING.md). Thanks!


## Changelog

[releases](CHANGELOG.md)


## Browser Support

| Chrome | Firefox | Edge | IE| Safari |Opera | iOS  | Android
| --- | --- | --- | --- | --- | --- | --- | --- |
| >= 49 | >= 45 | >=14 | >=11 | >= 9 | >= 30 | >=10 | >=4.4 |


## Supported development environment

- Supports React 17 +
- Supports TypeScript 4.x.x + 
- Supports Babel 7.x.x + 
- Supports Webpack 5.x.x



## Licensing

Licensed under the [MIT](https://opensource.org/licenses/MIT).


