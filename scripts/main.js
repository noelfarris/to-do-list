// 'use strict';
var button = document.getElementById('save');
var text = document.getElementById('textbox');
var list = document.getElementById('list');
var string = '';
var clear = document.getElementById('clear');


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
}

function strike(event) {
	console.log(event.target);

	if (event.target.className === "strikethrough") {
		event.target.className = "";
	} else {
		event.target.className = "strikethrough";
	}
}

function clearList() {
    list.innerHTML = '';
}

button.addEventListener('click', render);
clear.addEventListener('click', clearList);

