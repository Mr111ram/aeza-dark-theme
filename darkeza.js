// ==UserScript==
// @name         Darkeza
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Aeza Dark Theme
// @author       You
// @match        https://*.aeza.net/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=aeza.net
// @grant        none
// ==/UserScript==

;(function () {
  'use strict'

  const style = document.createElement('style')
  style.innerHTML = `body { filter: invert(0.91); } `
  document.body.appendChild(style)
})()
