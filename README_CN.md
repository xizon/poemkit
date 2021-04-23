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



Uix Kit React系一套免费的网站开发工具包，帮助开发者从零建立一个支持服务端渲染(SSR)的React技术网站，它支持pm2自动部署到服务器。


---

- [English Documentation](README.md)
- [中文版说明文档](README_CN.md)

---



## 介绍

* 集开发，打包和部署为一体
* 它不是一个JavaScript框架
* 支持服务器端渲染（SSR）
* 组件分离，可以导入任何第三方UI组件到项目 (比如Ant Design)
* 使用Sass/SCSS来设置React组件的样式
* 提供常见的网页组件和布局
* 自动捆绑并生成独立的核心CSS和JS文件
* 支持通过pm2自动部署到服务器
* 默认组件演示导入了诸如Bootstrap4栅格系统, GSAP动画库, FontAwesome图标库, 3D引擎等常用的第三方插件，以便能够快速扩展您的网站 (可以按需配置需要导入的库或者插件)


* * *



## 开发者基本操作:

1. 配置你电脑的Node.js环境，推荐`Node 14+`版本，测试环境为v14.16.0

2. 下载完资源后，进入到 `uix-kit-react` 目录下，运行相关命令进行开发或者部署。

3. 当你需要配置脚手架和网站基础信息和结构的时候，可编辑 `package.json` 文件。

4. 项目文件会打包生成到 `./dist/*` 和 `./public/*.html`.




## 命令使用方法:

**Step 1.** 下载项目

```sh
$ sudo npm install uix-kit-react
```

或者克隆项目: 

```sh
$ git clone git://github.com/xizon/uix-kit-react.git
```


**Step 2.** 使用命令进入 `uix-kit-react/` 目录, {your_directory}换成你的目录路径

```sh
$ cd /{your_directory}/uix-kit-react
```


**Step 3.** 安装所需要的依赖项

```sh
$ sudo npm install
```


**Step 4.** 打包生成CSS，JS，HTML文件

```sh
$ npm run build
```

**Step 5.** 使用 `Ctrl + C` 退出终端命令


**Step 6.** 最后，运行运如下代码进行本地测试。 （仅运行Express服务器。）

```sh
$ npm run dev
```


**Step 7.** 浏览器中访问以下网址：

```sh
http://localhost:3000
```

**Step 8 (可选).** 用PM2启动Reactjs应用程序（仅在使用Node v13.9.0或更高版本时有效）。


8.1) 使用npm安装PM2

```sh
$ npm install pm2@latest -g
```


8.2) 常用命令:

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



### ⚙️ 温馨提示:
 
**a) ERROR: npm update check failed.**

如果出现如上错误，表示nodejs的环境或权限问题，可以使用下面的命令解决，注意把{username}换成你自己的设备里的名字。

```sh
$ sudo chown -R $USER:$(id -gn $USER) /Users/{username}/.config
```

**b) 如果升级Node版本，请执行以下代码：**

```sh
$ sudo npm install
$ sudo npm rebuild node-sass
```



### ⚙️ 配置模块和别名:

您可以通过修改 `webpack.config.js` 的 `resolve` 属性来创建 `import` 或 `require` 的别名，来确保模块引入变得更简单.

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



### ⚙️ 库相关配置:

您可以通过修改 `webpack.config.js` 的 `output` 属性来指示 webpack 如何去输出、以及在哪里输出你的「bundle、asset 和其他你所打包或使用 webpack 载入的任何内容」


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


### ⚙️ 网站配置:

修改`package.json`文件即可：

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



### ⚙️ 路由配置:

路由配置同时也兼顾了网站的主导航（不包括将在主导航的页面上配置的嵌套路由）。 访问文件 `uix-kit-react/src/client/router/RoutesConfig.js`. 


路由器的一些脚本可以在文件中修改 `uix-kit-react/src/client/router/App.js`.


### ⚙️ 服务端渲染配置:

服务端渲染和标签替换的一些脚本可以在文件中修改 `uix-kit-react/src/server/renderer.js`.



### ⚙️ 设置服务器代理:

为了同时运行服务器和React应用程序，我们需要在 `package.json` 中添加`proxy` 键。我们已经将服务器设置为在端口3000上运行，因此将代理指向 `localhost:3000`。

```json
{
  "proxy": "http://localhost:3000",
  ...
}
```

### ⚙️ 打包编译应用时运行开发模式:

运行开发模式有助于维护你的组件系统，在 `package.json` 文件中添加键 `development` 并把值设为 `true`.


```json
{
  "development": true,
  ...
}
```

使用下面的JavaScript脚本可以编写调试代码，比如:

```js
if ( process.env.npm_package_development == 'true' ) {

	YourComponentName.propTypes = {
	    displayEnable: PropTypes.bool.isRequired,
		htmlString: PropTypes.string.isRequired
	}
	
}
```




### ⚙️ 自定义导入的第三方库或插件:

应用默认加载了常用的第三方库(图标，动画，3D引擎等)，您可以按需加载，或者修改导入配置。第三方插件配置文件位于`src/client/components/_third-party-plugins/_all.js`




* * *


## 目录结构




```sh
uix-kit-react/
├── README.md
├── CHANGELOG.md
├── CONTRIBUTING.md
├── LICENSE
├── ecosystem.config.js ------------------------- # 用于pm2部署
├── babel.config.js
├── webpack.config.js
├── package-lock.json
├── package.json 
├── public/
│   ├── index.html    --------------------------- # 自动生成的首页HTML静态模板
│   └── assets/
├── dist/
│   ├── css/
│   │   ├── uix-kit-react.css  ------------------ # 网站核心样式（已编译）
│   │   ├── uix-kit-react.css.map
│   │   ├── uix-kit-react.min.css  -------------- # 网站核心样式压缩版，默认产品调用（已编译）
│   │   └── uix-kit-react.min.css.map
│   └── js/
│   │   ├── uix-kit-react.js   ------------------ # 网站核心脚本（已编译）
│   │   ├── uix-kit-react.js.map
│   │   ├── uix-kit-react.min.js  --------------- # 网站核心样式压缩版，默认产品调用（已编译）
│   │   └── uix-kit-react.min.js.map
├── src/
│   ├── client/
│   │   ├── client.js
│   │   ├── actions/
│   │   ├── reducers/
│   │   ├── router/
│   │   ├── components/ -------------------------  # 独立的UI组件
│   │   │     ├── */
│   │   │     ├── _utilities/ -------------------  # 公共的js或css模块
│   │   │     └── _third-party-plugins/ ----------  # 第三方插件
│   │   │
│   │   ├── views/ ------------------------------  # 网站页面
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


