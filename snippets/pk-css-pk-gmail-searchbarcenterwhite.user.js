// ==UserScript==
// @name         PK CSS - PK_Gmail-SearchBarCenterWhite
// @namespace    https://local.scriptcat.sync
// @version      2026.10.15
// @description  CSS Gmail : Barre de recherche (source: gmail.css, synchro 2026.10.15)
// @match        https://mail.google.com/*
// @grant        GM_addStyle
// ==/UserScript==

(function () {
  'use strict';
  const css = "#aso_search_form_anchor {\n  background-color: #fff !important;\n  margin: auto;\n}\n\n.w-asV {\n  margin-top: 16px !important;\n  margin-bottom: 16px !important;\n}";
  if (typeof GM_addStyle === 'function') {
    GM_addStyle(css);
    return;
  }
  const style = document.createElement('style');
  style.textContent = css;
  (document.head || document.documentElement).appendChild(style);
})();
