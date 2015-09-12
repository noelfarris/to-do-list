// 'use strict';
var button = document.getElementById('save');
var text = document.getElementById('textbox');
var list = document.getElementById('list');
var string = '';

// function store(){
// 	console.log(text.value);
// }
// function push(){
// 	historyArray.push(text.value);
// 	console.log(historyArray);
// }
var render = function() {
    if (!(text.value)) {
        alert("You must enter an item");
    } else {
        console.log(text.value + " is new value");
        var newItem = document.createElement("li");
        newItem.innerHTML = text.value;
        newItem.addEventListener('click', strike);

        list.appendChild(newItem);

        text.value = '';
    }

    // for (var i = 0; i < historyArray.length; i++) {
    //     string = historyArray.join(',');
    //     items.innerText = string;
    //     console.log(string);
    // }
};

function strike(event) {
	console.log(event.target);

	if (event.target.className === "strikethrough") {
		event.target.className = "";
	} else {
		event.target.className = "strikethrough";
	}
}
// button.addEventListener('click', store);
// button.addEventListener('click', push);
button.addEventListener('click', render);
// document.querySelectorAll("ul li").addEventListener('click', strike);
