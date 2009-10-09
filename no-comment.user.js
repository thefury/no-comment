// ==UserScript==
// @name No Comment!
// @namespace http://download.trevoroke.com/userscripts/
// @description Remove media comments from the CBC
// @include http://*.cbc.ca/*
// @include http://cbc.ca/*

// ==/UserScript==

// grabbed from the Greasemonkey docs
function addGlobalStyle(css) {
    var head, style;
    head = document.getElementsByTagName('head')[0];
    if (!head) { return; }
    style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = css;
    head.appendChild(style);
}

function removeElement(elem)
{
    if (elem) {
        textElem = document.createTextNode('');
        elem.parentNode.replaceChild(textElem, elem);
    }
}

// CBC
addGlobalStyle('.d-inline  { visibility: hidden; display: none; }');

removeElement(document.getElementById('socialtools'));
removeElement(document.getElementById('socialcomments'));
removeElement(document.getElementById('socialhead'));

