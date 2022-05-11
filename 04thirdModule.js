// app.js
const cowsay = require('cowsay');



let textArr = ["hello", "world", "I'm a moooodule"]

textArr.forEach(function(item, index){
    console.log(cowsay.say({
        text : item,
        e : "oO",
        T : "U "
    }));
})