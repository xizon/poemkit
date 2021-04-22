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
* The default components demo is embedded with commonly used third-party animation libraries and grid system, such as Bootstrap 4+, GSAP, FontAwesome, Three, Pixi, etc., so that you can quickly expand your website


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
```

**Step 8 (Optional).** Start Reactjs application with PM2 as a service (only works if you are using Node v13.9.0 or above.)


8.1) Installing PM2. With NPM

```sh
$ npm install pm2@latest -g
```


8.2) Frequently used commands:

```sh
#into your `"uix-kit-react/"` folder directory.
$ cd /{your_directory}/uix-kit-react

#install Babel globally on your machine
$ sudo npm install -g @babel/core @babel/cli @babel/preset-env 

#use babel-node with pm2
$ pm2 start ecosystem.config.js  --interpreter babel-node  

#other commands
$ pm2 stop ecosystem.config.js
$ pm2 delete ecosystem.config.js
$ pm2 list
$ pm2 logs
```



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

```js
...
const alias = {
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
  "projectName": "Uix Kit",
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
└──
```



## Contributing

Finding bugs, sending pull requests or improving our docs - any contribution is welcome and highly appreciated. To get started, head over to our [contribution guidelines](CONTRIBUTING.md). Thanks!


## Changelog

[releases](CHANGELOG.md)



## Licensing

Licensed under the [MIT](https://opensource.org/licenses/MIT).


