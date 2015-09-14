(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
// 'use strict';
'use strict';

var button = document.getElementById('save');
var text = document.getElementById('textbox');
var list = document.getElementById('list');
var string = '';
var clear = document.getElementById('clear');

var render = function render() {
    if (!text.value) {
        alert("You must enter an item");
    } else {
        console.log(text.value + " is new value");
        var newItem = document.createElement("li");
        newItem.innerHTML = text.value;
        newItem.addEventListener('click', strike);
        list.appendChild(newItem);
        text.value = '';
    }
};

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

},{}]},{},[1])


//# sourceMappingURL=bundle.js.map