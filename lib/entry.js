#!/usr/bin/env node
'use strict';

const shell = require('shelljs');
const inquirer = require('inquirer');
const questions = require('./questions');
const _ = require('lodash');

let defaults = {
	filter:null,
	callback:null
}

module.exports = function(options){

	_.assign(defaults, options);

	return new Promise(function(resolve, reject) {

		inquirer.prompt(questions(defaults)).then(function(answers) {
		    
		    if (defaults.callback) defaults.callback(answers.module);
			else resolve(answers.module);

		});

	});


};