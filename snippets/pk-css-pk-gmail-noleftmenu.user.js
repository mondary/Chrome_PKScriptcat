// ==UserScript==
// @name         PK CSS - PK_Gmail-NoLeftMenu
// @namespace    https://local.scriptcat.sync
// @version      2026.10.15
// @description  CSS Gmail : Gmail No left menu (source: gmail.css, synchro 2026.10.15)
// @match        https://mail.google.com/*
// @grant        GM_addStyle
// ==/UserScript==

(function () {
  'use strict';
  const css = ".aeN,\n.ain .CJ {\n    display: none !important;\n}";
  if (typeof GM_addStyle === 'function') {
    GM_addStyle(css);
    return;
  }
  const style = document.createElement('style');
  style.textContent = css;
  (document.head || document.documentElement).appendChild(style);
})();
