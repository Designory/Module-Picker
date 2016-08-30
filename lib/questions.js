'use strict';


const inquirer = require('inquirer');
const packageJson = require(process.cwd() + '/package.json');
const moduleList = require('./get-modules')(packageJson, '7');



module.exports = function(){

 return [{
    type: 'list',
    name: 'module',
    message: 'Select a node module',
    choices: moduleList
  }]
}