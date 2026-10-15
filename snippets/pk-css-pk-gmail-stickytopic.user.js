// ==UserScript==
// @name         PK CSS - PK_Gmail-StickyTopic
// @namespace    https://local.scriptcat.sync
// @version      2026.10.15
// @description  CSS Gmail : Gmail Sticky Topic (source: gmail.css, synchro 2026.10.15)
// @match        https://mail.google.com/*
// @grant        GM_addStyle
// ==/UserScript==

(function () {
  'use strict';
  const css = ".iY.a98.nH > div.nH:nth-of-type(1) {\n    position: sticky !important; /* Comportement sticky forcé */\n    top: 0 !important;           /* Collé en haut du conteneur parent */\n    z-index: 1 !important;      /* Priorité inférieure à .aVN */\n    background-color: white;     /* Évite la transparence */\n}";
  if (typeof GM_addStyle === 'function') {
    GM_addStyle(css);
    return;
  }
  const style = document.createElement('style');
  style.textContent = css;
  (document.head || document.documentElement).appendChild(style);
})();
