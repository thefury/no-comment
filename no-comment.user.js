// ==UserScript==
// @name          No Comment!
// @namespace     http://download.trevoroke.com/userscripts/
// @description   Remove media comments
// @include       http://*.cbc.ca/*
// @include       http://cbc.ca/*
// ==/UserScript==

function  clobber_element(elem)
{
    if (elem) {
        elem.parentNode.removeChild(elem);
    }
}

clobber_element(document.getElementById('socialtools'));
clobber_element(document.getElementById('socialcomments'));
