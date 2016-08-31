'use strict';
const inquirer = require('inquirer');

module.exports = function(packageData, match){

	let depsArr = getDeps(packageData.dependencies, match, 'dependencies');
	let devDepsArr = getDeps(packageData.devDependencies, match, 'devDependencies');

	return depsArr.concat(devDepsArr);

}

function getDeps(obj, match, type){

	let returnArr = [];

	if (obj) {

		for (let key in obj) {
			if (obj[key].indexOf(match) != -1 || !match) returnArr.push({
				name: key
			});
		}

	}

	if (returnArr.length) returnArr.unshift(new inquirer.Separator(` = ${type} = `));

	return returnArr;

}