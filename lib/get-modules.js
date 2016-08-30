'use strict';
const inquirer = require('inquirer');

module.exports = function(packageData, match){

	let depsArr = getDeps(packageData.dependencies, match);
	let devDepsArr = getDeps(packageData.devDependencies, match);

	// if both deps and devDeps have matches, add a divider
	if (depsArr.length && devDepsArr.length) depsArr.push(new inquirer.Separator());

	return depsArr.concat(devDepsArr);

}

function getDeps(obj, match){

	let returnArr = [];

	if (obj) {

		for (let key in obj) {

			if (obj[key].indexOf(match) != -1 || !match) returnArr.push(key);
		}

	}

	return returnArr;

}