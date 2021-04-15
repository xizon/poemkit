//In order to ensure the normal compilation function of babel
require( '@babel/register' );
require( '@babel/polyfill' );

//A babel/register style hook to ignore style imports when running in Node when you try to run the project in Node.
require( 'ignore-styles' ).default(['.sass', '.scss']);

//Remount the code that uses the express service
//!important: Cannot use custom aliases
require( './app.js' );
