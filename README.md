# Uix Kit React


<p align="center">
  <a href="https://github.com/xizon/uix-kit-react">
	  <img src="https://raw.githubusercontent.com/xizon/uix-kit-react/master/public/assets/images/logo-colorful.png"  alt="Uix Kit"  width="180" >
  </a>
  <p align="center">
      <a href="https://travis-ci.com/xizon/uix-kit-react/" title="Travis CI"><img src="https://img.shields.io/travis/com/xizon/uix-kit-react?style=for-the-badge"/></a>
	  <a href="https://www.npmjs.com/package/uix-kit-react" title="npm version"><img src="https://img.shields.io/npm/v/uix-kit-react?style=for-the-badge"/></a>
	  <a href="https://github.com/xizon/uix-kit-react/blob/master/LICENSE" title="license"><img src="https://img.shields.io/badge/license-MIT-brightgreen.svg?style=for-the-badge"/></a>
	   
  </p>
  <br>
</p>



A free web kits with React for fast web design and development via SSR. Using react, redux, router, axios and express. This project was bootstrapped with nodejs library. Project supports automatic deployments from a number of repository hosting services via pm2.


---

- [English Documentation](README.md)
- [中文版说明文档](README_CN.md)

---



## Demo


For online demo, please checkout [https://uiux.cc/uix-kit-react](https://uiux.cc/uix-kit-react)

Server runs on `http://localhost:3000`



## Table of Contents


* [Description](#description)
* [Installation And Test](#installation-and-test)
* [File Structures](#file-structures)
* [Contributing](#contributing)
* [Changelog](#changelog)
* [Licensing](#licensing)




## Description

* Development, packaging, and deployment in one
* Not a JavaScript framework
* Server-Side Rendering (SSR) Support
* Components are separated, you can use any UI component (such as Ant Design)
* Styling React Components in Sass/SCSS
* Provides a common web page components and layouts
* Automatically bundle and generate independent core CSS and JS files
* Project supports automatic deployments from a number of repository hosting services via pm2
* The default components import some third-party plug-ins, such as  grid system of Bootstrap 4, GSAP animation library, FontAwesome icon library, 3D engine, etc., so that you can quickly expand your website (Support on-demand configuration)



* * *



## Installation And Test

You will need to have [node](https://nodejs.org/) setup on your machine. That will output the built distributables to `./dist/*` and `./public/*.html`.


**Step 1.** Use NPM (Locate your current directory of project, and enter the following command.) or download the latest version from [Github](https://github.com/xizon/uix-kit-react). For nodejs you have to install some dependencies.

```sh
$ sudo npm install uix-kit-react
```

Or clone the repo to get all source files including build scripts: 

```sh
$ git clone git://github.com/xizon/uix-kit-react.git
```


**Step 2.** First, using an absolute path into your `"uix-kit-react/"` folder directory.

```sh
$ cd /{your_directory}/uix-kit-react
```


**Step 3.** Before doing all dev stuff make sure you have `Node 10+` installed. After that, run the following code in the main directory to install the node module dependencies.

```sh
$ sudo npm install
```


**Step 4.** To use webpack to bundle files.

```sh
$ npm run build
```

**Step 5.** Using `Ctrl + C` to stop webpack.


**Step 6.** Finally, let's enter the code below. You can see that the server is running. (Run the Express server only.)

```sh
$ npm run dev
```


**Step 7.** When you done, this will spin up a server that can be accessed at

```sh
http://localhost:3000

The new code is recommended to be bundled before debugging.


```

**Step 8 (Optional).** Start Reactjs application with PM2 as a service (only works if you are using Node v13.9.0 or above.)

8.1) Installing Node and NPM

```sh
$ curl -sL https://rpm.nodesource.com/setup_14.x | sudo bash -
$ sudo yum install nodejs
$ node --version  #v14.16.1
$ npm --version   #6.14.12
$ which node babel-node #check the location of node and babel-node
```


8.2) Installing PM2. With NPM

```sh
$ sudo npm install pm2@latest -g
```


8.3) Install Babel globally on your machine

```sh
$ sudo npm install -g babel-cli
$ sudo npm install -g @babel/core @babel/cli @babel/preset-env 
```


8.4) Frequently used commands for PM2:

```sh
#into your `"uix-kit-react/"` folder directory.
$ cd /{your_directory}/uix-kit-react


#use babel-node with pm2
$ pm2 start ecosystem.config.js  --interpreter babel-node  

#other commands
$ pm2 restart ecosystem.config.js –-interpreter babel-node
$ pm2 stop ecosystem.config.js
$ pm2 delete ecosystem.config.js
$ pm2 list
$ pm2 logs
```


8.5) Use domain to access your React appication.

You had created a basic React App from here, then you need to deploy a React App on Apache or Nginx web server. Please refer to the network for the tutorial on setting up the proxy.




### ⚙️ Note:
 
**a) ERROR: npm update check failed.**

```sh
$ sudo chown -R $USER:$(id -gn $USER) /Users/{username}/.config
```

**b) If you upgrade the version of Node, please execute the following code:**

```sh
$ sudo npm install
$ sudo npm rebuild node-sass
```



### ⚙️ Configuring Module resolve and alias:

You can configure the module resolution by adding resolve to the `webpack.config.js`. If you use a relative path when you import another module, it would be bothersome because you would have to figure out all of the relative paths. Therefore, you can add alias to make it easier for yourself.

`webpack.config.js` :

```js
...
const alias = {
	pathConfig            : './src/config/websiteConfig.js',
	pathComponents        : './src/client/components',
	pathThirdPartyPlugins : './src/client/components/_third-party-plugins',
	pathRouter            : './src/client/router',
	pathReducers          : './src/client/reducers',
	pathPages             : './src/client/views/_pages',
	pathActions           : './src/client/actions',
	pathServer            : './src/server',
	pathStore             : './src/store'
};

...
resolve: {
	extensions: ['.js', '.es6', '.vue', '.jsx' ],
	alias: {

		// specific mappings.
		// Supports directories and custom aliases for specific files when the express server is running, 
		// you need to configure the `babel.config.js` at the same time
		'@uixkit.react/config': path.resolve(__dirname, alias.pathConfig ),
		'@uixkit.react/components': path.resolve(__dirname, alias.pathComponents ),
		'@uixkit.react/plugins': path.resolve(__dirname, alias.pathThirdPartyPlugins ),
		'@uixkit.react/router': path.resolve(__dirname, alias.pathRouter ),
		'@uixkit.react/reducers': path.resolve(__dirname, alias.pathReducers ),
		'@uixkit.react/pages': path.resolve(__dirname, alias.pathPages ),
		'@uixkit.react/actions': path.resolve(__dirname, alias.pathActions ),
		'@uixkit.react/server': path.resolve(__dirname, alias.pathServer ),
		'@uixkit.react/store': path.resolve(__dirname, alias.pathStore ),

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
...
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
  "name": "uix-kit-react",
  "email": "uiuxlab@gmail.com",
  "version": "1.0.0",
  "projectName": "Uix Kit React",
  "createdInfo": "UIUX Lab (https://uiux.cc)",
  "projectURL": "https://uiux.cc",
  "description": "A free web kits with React for fast web design and development via SSR.",
  ...
}
```



### ⚙️ Router Configurations:

Configuration of routes, which is also the primary navigation of the website (not including the configuration of Nested routes which will be configured on the page in the primary navigation). Access to `uix-kit-react/src/client/router/RoutesConfig.js`. 


Some scripts of the router can be modified in the file `uix-kit-react/src/client/router/App.js`.


### ⚙️ Server-side rendering Configurations:

Some scripts on the server side can be modified in the file `uix-kit-react/src/server/renderer.js`.


### ⚙️ Set up server proxy:

To run both the server and React application at the same time we need to add the `proxy` key to `package.json`. We've already set our server to run on port 3000, so point the proxy at `localhost:3000`.

```json
{
  "proxy": "http://localhost:3000",
  ...
}
```

### ⚙️ Run the Webpack build in "development" mode:

Add the `development` key and set it value to `true` to `package.json`.

```json
{
  "development": true,
  ...
}
```

Then, you could use the following JavaScript code to debug it:

```js
if ( process.env.npm_package_development == 'true' ) {

	YourComponentName.propTypes = {
	    displayEnable: PropTypes.bool.isRequired,
		htmlString: PropTypes.string.isRequired
	}
	
}
```


### ⚙️ Custom import third-party library:

The application loads some third-party libraries (icons, animations, 3D engines, etc.) by default, you can load them as needed, or modify the configuration file. Access to `src/client/components/_third-party-plugins/`


### ⚙️ Root Directory Configurations:

Change the root directory of the website so that it can be used when you upload the project to another directory. Modify the key `rootDirectory` of the `src/config/websiteConfig.js`.

If the file is in the root directory, you can leave it empty. If in another directory, you can write: "/blog".


```json
{
  "rootDirectory": ""
}
```


### ⚙️ API Configurations:

Change the API URLs of the website. Modify the key `API` of the `src/config/websiteConfig.js`, as shown below:


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
uix-kit-react/
├── README.md
├── CHANGELOG.md
├── CONTRIBUTING.md
├── LICENSE
├── ecosystem.config.js ------------------------- # for pm2
├── babel.config.js
├── webpack.config.js
├── package-lock.json
├── package.json
├── public/
│   ├── index.html    --------------------------- # HTML template of Homepage
│   └── assets/
├── dist/
│   ├── css/
│   │   ├── uix-kit-react.css  ------------------ # Main css file
│   │   ├── uix-kit-react.css.map
│   │   ├── uix-kit-react.min.css  -------------- # Main css file which is used for production
│   │   └── uix-kit-react.min.css.map
│   └── js/
│   │   ├── uix-kit-react.js   ------------------ # Main js file
│   │   ├── uix-kit-react.js.map
│   │   ├── uix-kit-react.min.js  --------------- # Main js file which is used for production
│   │   └── uix-kit-react.min.js.map
├── src/
│   ├── client/
│   │   ├── client.js
│   │   ├── actions/
│   │   ├── reducers/
│   │   ├── router/
│   │   ├── components/ -------------------------  # Independent React components
│   │   │     ├── */
│   │   │     ├── _utilities/ -------------------  # Generic snippets(js & css)
│   │   │     └── _third-party-plugins/ ----------  # Third-party plugins
│   │   │
│   │   ├── views/ ------------------------------  # Website pages
│   │   │   ├── _pages/
│   │   │   └── _html/
│   │   │
│   └── server/
│   │   ├── app.js
│   │   ├── server.js
│   │   └── renderer.js
│   └── store/
│   │   └── createStore.js
│   └── config/
│   │   └── websiteConfig.js  -------------------  # website config
└──
```



## Contributing

Finding bugs, sending pull requests or improving our docs - any contribution is welcome and highly appreciated. To get started, head over to our [contribution guidelines](CONTRIBUTING.md). Thanks!


## Changelog

[releases](CHANGELOG.md)



## Licensing

Licensed under the [MIT](https://opensource.org/licenses/MIT).


