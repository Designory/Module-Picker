'use strict';

const modulePicker = require('./lib/entry.js'); 

let select = modulePicker({
	filter:'7'
});

select.then(function(answers){
	console.log(answers);
});

 // modulePicker({
 // 	filter:'7',
 // 	callback:function(answers){
 // 		console.log(answers);
 // 	}
 // });


 // run 'node test.js' in the terminal