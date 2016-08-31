'use strict';


const inquirer = require('inquirer');
const packageJson = require(process.cwd() + '/package.json');
const moduleList = require('./get-modules');


module.exports = function(options){

	return [{
    	type: 'checkbox',
    	name: 'module',
    	message: 'Select a node module',
    	choices: moduleList(packageJson, options.filter)
  	}];
}