// ==UserScript==
// @name         PK CSS - PK_Gmail-UnreadColor
// @namespace    https://local.scriptcat.sync
// @version      2026.10.15
// @description  CSS Gmail : Gmail Unread GREY (source: gmail.css, synchro 2026.10.15)
// @match        https://mail.google.com/*
// @grant        GM_addStyle
// ==/UserScript==

(function () {
  'use strict';
  const css = ".zA:not(.yO) {\n    background: #6464640d !important;\n}\n\n.zA:not(.yO) .xS span  .bqe {\n    font-family: arial !important;\n    font-weight: 600 !important;\n}";
  if (typeof GM_addStyle === 'function') {
    GM_addStyle(css);
    return;
  }
  const style = document.createElement('style');
  style.textContent = css;
  (document.head || document.documentElement).appendChild(style);
})();
