# Module-Picker

##Promise-based Example:
```
const modulePicker = require('module-picker'); 

let select = modulePicker({
	filter:'7'
});

select.then(function(answers){
	console.log(answers);
});
```

##Callback-based Example:
```
const modulePicker = require('module-picker'); 

modulePicker({
    filter:'7',
    callback:function(answers){
        console.log(answers);
    }
});
```
