//This file isnt transpiled, so must you CommonJS and ES5

//Register babel to transpile before our test run
require('babel-register')();

//Disable webpack features that Mocha doesnt understand
require.extensions['.css'] = function() {};
