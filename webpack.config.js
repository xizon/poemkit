'use strict';

const webpack = require('webpack');
const express = require('express');
const fs = require('fs');
const path = require('path');
const TerserPlugin = require("terser-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');
const glob = require('glob');
const randomString = require('random-string');
const IncludeFileWebpackPlugin = require('include-file-webpack-plugin');
const moment = require('moment');
const json = require('./package.json');
const webpackDevMiddleware = require('webpack-dev-middleware');
const websiteConfig = require('./src/config/websiteConfig.js');


const colors = {
	Reset: "\x1b[0m",
	Bright: "\x1b[1m",
	Dim: "\x1b[2m",
	Underscore: "\x1b[4m",
	Blink: "\x1b[5m",
	Reverse: "\x1b[7m",
	Hidden: "\x1b[8m",
	fg: {
		Black: "\x1b[30m",
		Red: "\x1b[31m",
		Green: "\x1b[32m",
		Yellow: "\x1b[33m",
		Blue: "\x1b[34m",
		Magenta: "\x1b[35m",
		Cyan: "\x1b[36m",
		White: "\x1b[37m",
		Crimson: "\x1b[38m" //القرمزي
	},
	bg: {
		Black: "\x1b[40m",
		Red: "\x1b[41m",
		Green: "\x1b[42m",
		Yellow: "\x1b[43m",
		Blue: "\x1b[44m",
		Magenta: "\x1b[45m",
		Cyan: "\x1b[46m",
		White: "\x1b[47m",
		Crimson: "\x1b[48m"
	}
};

const globs = {
	port: 8080,
	examples: 'public',
	build: 'src/client',
	dist: 'dist'
};

const alias = {
	pathConfig: './src/config',
	pathComponents: './src/client/components',
	pathRouter: './src/client/router',
	pathHelpers: './src/client/helpers',
	pathServices: './src/client/services',
	pathReducers: './src/client/reducers',
	pathPages: './src/client/views/_pages',
	pathActions: './src/client/actions',
	pathServer: './src/server',
	pathStore: './src/store'
};


/*! 
 *************************************
 * Site Info
 *************************************
 */

let customWebsiteVersion = json.version,
	customWebsiteRootDir = websiteConfig.rootDirectory,
	customWebsiteAuthor = (Object.prototype.toString.call(json.author) == '[object Object]') ? json.author.name : json.author,
	customWebsiteTitle = json.projectName,
	customWebsiteDesc = json.description,
	customWebsiteGenerator = 'PoemKit',
	customWebsiteHash = randomString({ length: 20 }),
	customWebsiteComment = `
DO NOT OVERRIDE THIS FILE.
Generated with "npm run build"

## Project Name        :  ` + customWebsiteTitle + `
## Project Description :  ` + customWebsiteDesc + `
## Project URL         :  ` + json.projectURL + `
## Version             :  ` + customWebsiteVersion + `
## Based on            :  PoemKit (` + json.homepage + `)
## Last Update         :  ` + moment().format("MMMM D, YYYY") + `
## Created by          :  ` + json.createdInfo + (json.email != '' ? ' (' + json.email + ')' : '') + `
## Released under the ` + json.license + ` license.
	`;


//replacing template
function tmplFormat(s) {
	return s.replace(/\@\@\{website_title\}/g, customWebsiteTitle)
		.replace(/\@\@\{website_desc\}/g, customWebsiteDesc)
		.replace(/\@\@\{website_author\}/g, customWebsiteAuthor)
		.replace(/\@\@\{website_generator\}/g, customWebsiteGenerator)
		.replace(/\@\@\{website_version\}/g, customWebsiteVersion)
		.replace(/\@\@\{website_comment\}/g, customWebsiteComment)
		.replace(/\@\@\{website_hash\}/g, customWebsiteHash)
		.replace(/\@\@\{website_root_directory\}/g, customWebsiteRootDir);
}



// Get all the HTML template files
let tempAllPages = glob.sync('./' + globs.build + '/views/**/*.html');
let targetTempFilesName = [];
let targetAllTempFilesName = [];

tempAllPages.map((event) => {
	let filename = event.split('/').pop();

	targetAllTempFilesName.push([event, event.split('/').pop()]);

	if (filename.indexOf('include-') < 0) {
		targetTempFilesName.push([event, event.split('/').pop()]);
	}

});



let targetFilesNameArrays = [
	targetAllTempFilesName
];
let targetAllWatchFilesName = [].concat(...targetFilesNameArrays);


// String replacement for page templates
class ReplacePlaceholderForFile {
	constructor(options) {
		this.options = options;
	}
	apply(compiler) {
		compiler.hooks.done.tap('ReplacePlaceholderForFile', (stats) => {

			const filepath = this.options.filepath;

			// When the Node module is running, this plugin may be executed 
			// at the same time, which will result in incomplete content reading.
			/*
			@Other method:
			
			try {  
				var data = fs.readFileSync('file.html', 'utf8');
				console.log(data);    
			} catch(e) {
				console.log('Error:', e.stack);
			}
			*/
			fs.readFile(filepath, 'utf8', function (err, data) {

				if (err) {
					console.log(colors.fg.Red, err, colors.Reset);
				} else {


					if (data.length > 0 && data.indexOf('</html>') >= 0) {
						data = tmplFormat(data);

						fs.writeFile(filepath, data, (err) => {
							if (err) {
								console.log(colors.fg.Red, err, colors.Reset);
								return;
							}
							//file written successfully
							console.log(colors.bg.Green, colors.fg.White, `${filepath} written successfully!`, colors.Reset);




						});
					}


				}


			}); //end fs.readFile	


		});
	}
}



/*! 
 *************************************
 *  Main configuration
 *************************************
 */
const devMode = process.env.NODE_ENV !== 'production';
const webpackConfig = {
	devtool: devMode ? 'source-map' : false,
	mode: 'production',
	watch: true,
	resolve: {
		fallback: {
			fs: false
		},
		extensions: ['.js', '.es6', '.vue', '.jsx', '.ts', '.tsx', '.scss', '.sass'],
		alias: {

			// specific mappings.
			// Supports directories and custom aliases for specific files when the express server is running, 
			// you need to configure the following files at the same time:
			// 1) `babel.config.js`    --> "plugins": [["module-resolver", {"alias": {...}} ]]
			// 2) `tsconfig.json`      --> "compilerOptions": { "paths": {...} }
			// 3) `package.json`       --> "jest": { "moduleNameMapper": {...} }
			
			'@/config': path.resolve(__dirname, alias.pathConfig),
			'@/components': path.resolve(__dirname, alias.pathComponents),
			'@/router': path.resolve(__dirname, alias.pathRouter),
			'@/helpers': path.resolve(__dirname, alias.pathHelpers),
			'@/services': path.resolve(__dirname, alias.pathServices),
			'@/reducers': path.resolve(__dirname, alias.pathReducers),
			'@/pages': path.resolve(__dirname, alias.pathPages),
			'@/actions': path.resolve(__dirname, alias.pathActions),
			'@/server': path.resolve(__dirname, alias.pathServer),
			'@/store': path.resolve(__dirname, alias.pathStore)

		}
	},

	//Exclude react from bundle
	//    externals: {
	//      'react': 'React',
	//		'react-dom': 'ReactDOM'
	//    },

	entry: {
		'poemkit': './' + globs.build + '/client.js',
		'poemkit.min': './' + globs.build + '/client.js'
	},
	output: {
		path: path.resolve(__dirname, './' + globs.dist + '/js'),
		filename: '[name].js'
	},

	optimization: {
		minimize: true,

		minimizer: [

			new TerserPlugin({
				test: /\.min\.js$/i
			}),

			new MiniCssExtractPlugin({
				// Options similar to the same options in webpackOptions.output
				// both options are optional
				filename: '../css/[name].css'
			}),
			new CssMinimizerPlugin({
				test: /\.min\.css$/i,
				parallel: true,
				minimizerOptions: {
					preset: [
						"default",
						{
							discardComments: { removeAll: true },
						},
					],
				},
			}),

		],

	},
	module: {
		rules: [
			{
				test: /\.(glsl|vs|fs|vert|frag)$/,
				exclude: path.resolve(__dirname, 'node_modules'),
				use: [
					'raw-loader',
					'glslify-loader'
				]
			},
			{
				test: /\.json$/,
				use: 'json-loader'
			},
			{
				test: /\.(js|jsx|ts|tsx)$/,
				loader: 'babel-loader',
				exclude: path.resolve(__dirname, 'node_modules'),
				options: {
					'presets': [
						'@babel/preset-env',
						'@babel/preset-react',
						'@babel/preset-typescript',
						{
							plugins: [
								'@babel/plugin-proposal-class-properties'
							]
						}
					]
				}
			},
			{

				test: /\.(sa|sc|c)ss$/,
				include: path.resolve(__dirname, './' + globs.build),
				use: [
					// fallback to style-loader in development
					{
						loader: MiniCssExtractPlugin.loader, //Extracts CSS into separate files  ( Step 3 )
						options: {
							// you can specify a publicPath here
							// by default it use publicPath in webpackOptions.output
							publicPath: path.resolve(__dirname, './' + globs.dist)

						}
					},

					{
						loader: "css-loader",  // interprets @import and url() and will resolve them. ( Step 2 )
						options: {
							sourceMap: true
						}
					},
					{
						loader: 'sass-loader', // compiles Sass to CSS ( Step 1 )
						options: {
							sourceMap: true,
							/* (nested | expanded | compact | compressed) */
							outputStyle: 'expanded',
						}

					},
				]
			},

			{
				test: /\.html$/,
				use: [
					{
						loader: 'html-loader',
						options: {
							minimize: false,
							removeComments: false,
							collapseWhitespace: false
						}
					}
				]
			},

			{
				test: /\.(png|jpe?g|gif|ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,
				loader: 'file-loader',
				options: {
					esModule: false, //change the css path via output
					outputPath: (url, resourcePath, context) => { //the files from `./src/...` will copy to `./dist/`

						//original name: path.basename(resourcePath)

						//fonts
						if (resourcePath.indexOf('webfonts/') >= 0 || resourcePath.indexOf('fonts/') >= 0) {
							return '../fonts/' + url;
						}

						//imags
						if (resourcePath.indexOf('images/') >= 0 || resourcePath.indexOf('img/') >= 0) {
							return '../images/' + url;
						}


						return '../misc/' + url;

					},
					publicPath: (url, resourcePath, context) => { //the css path of output 

						//fonts
						if (resourcePath.indexOf('webfonts/') >= 0 || resourcePath.indexOf('fonts/') >= 0) {
							return `${customWebsiteRootDir}/${globs.dist}/fonts/${url}`;
						}

						//imags
						if (resourcePath.indexOf('images/') >= 0 || resourcePath.indexOf('img/') >= 0) {
							return `${customWebsiteRootDir}/${globs.dist}/images/${url}`;
						}


						return `${customWebsiteRootDir}/${globs.dist}/misc/${url}`;


					}
				}
			}

		],



	},
	plugins: [

	]


};

// Remove include files and extra CSS files
webpackConfig.plugins.push(
	new CleanWebpackPlugin([
		globs.build + '/**/*.css',
		globs.examples + '/*.html',

	])
);

// Adds a banner to the top of each generated chunk.
webpackConfig.plugins.push(
	new webpack.BannerPlugin(customWebsiteComment)
);


// Batch processing HTML template files
targetTempFilesName.map((event) => {

	webpackConfig.plugins.push(

		new IncludeFileWebpackPlugin({
			directory: '',
			input: `${event[0]}`,
			output: `./${globs.examples}/${event[1]}`,
			processIncludeContents: function (html) {
				return html;
			}
		})

	);
});





// String replacement for page templates
targetTempFilesName.map((event) => {

	webpackConfig.plugins.push(
		new ReplacePlaceholderForFile({
			filepath: `./${globs.examples}/${event[1]}`
		})
	);

});



// Add souce maps
webpackConfig.plugins.push(
	new webpack.SourceMapDevToolPlugin({
		filename: '../js/[file].map',
	})
);



/*! 
 *************************************
 *  Hook our plugins to fix webpack dev server is not serving the latest compiled code
 *************************************
 */
const compiler = webpack(webpackConfig);
const app = express();
const instance = webpackDevMiddleware(compiler);
app.use(instance);


//Watch for Files Changes in Node.js
require('log-timestamp');

targetAllWatchFilesName.map((event) => {

	let curFile = `${event[0]}`;

	fs.watchFile(curFile, (curr, prev) => {

		console.log(colors.fg.Yellow, `${curFile} file Changed`, colors.Reset);

		// After a short delay the configuration is changed and a banner plugin is added
		// to the config
		new CleanWebpackPlugin([
			globs.build + '/**/*.css'
		]).apply(compiler);

		targetTempFilesName.map((event) => {
			new IncludeFileWebpackPlugin({
				directory: '',
				input: `${event[0]}`,
				output: `./${globs.examples}/${event[1]}`,
				processIncludeContents: function (html) {
					return html;
				}
			}).apply(compiler);

			new ReplacePlaceholderForFile({
				filepath: `./${globs.examples}/${event[1]}`
			}).apply(compiler);

		});

		// Recompile the bundle with plugins:
		instance.invalidate();
	});

});




/*! 
 *************************************
 * Automatically generate `manifest.json`.
 *************************************
 */
const manifestFilepath = `./${globs.examples}/manifest.json`;
fs.readFile(`./src/config/tmpl-manifest.json`, 'utf8', function (err, data) {

	if (err) {
		console.log(colors.fg.Red, err, colors.Reset);
	} else {


		if (data.length > 0) {
			data = tmplFormat(data);

			fs.writeFile(manifestFilepath, data, (err) => {
				if (err) {
					console.log(colors.fg.Red, err, colors.Reset);
					return;
				}
				//file written successfully
				console.log(colors.bg.Green, colors.fg.White, `${manifestFilepath} written successfully!`, colors.Reset);


			});
		}


	}


}); //end fs.readFile	





/*! 
 *************************************
 *  Exporting webpack module
 *************************************
 */
module.exports = webpackConfig;


