#!/usr/bin/env node
'use strict';

const shell = require('shelljs');
const inquirer = require('inquirer');
const questions = require('./questions')();

console.log(process.argv, process.argv.length);

module.exports = function(callback){

	inquirer.prompt(questions).then(function(answers) {
	    console.log(answers.module);
	});

}

if (process.argv.length > 2) {
	module.exports()
}