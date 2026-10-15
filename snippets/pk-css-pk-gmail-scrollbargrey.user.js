// ==UserScript==
// @name         PK CSS - PK_Gmail-ScrollBarGrey
// @namespace    https://local.scriptcat.sync
// @version      2026.10.15
// @description  CSS Gmail : Gmail ScrollBar Grey (source: gmail.css, synchro 2026.10.15)
// @match        https://mail.google.com/*
// @grant        GM_addStyle
// ==/UserScript==

(function () {
  'use strict';
  const css = "/* Styliser la scrollbar principale */\n::-webkit-scrollbar {\n    width: 8px;  /* Légèrement plus fine pour plus de subtilité */\n    height: 8px;\n}\n\n/* Style du track (partie arrière de la scrollbar) */\n::-webkit-scrollbar-track {\n    background: #ffffff;  /* Blanc pur pour le fond */\n    border-radius: 4px;\n}\n\n/* Style du thumb (partie mobile de la scrollbar) */\n::-webkit-scrollbar-thumb {\n    background: #f0f0f07a;  /* Gris très très clair */\n    border-radius: 4px;\n    border: 1px solid #f0f0f07a;  /* Bordure légèrement plus foncée */\n}\n\n/* Style au survol du thumb */\n::-webkit-scrollbar-thumb:hover {\n    background: #f0f0f07a;  /* Un peu plus foncé au survol mais toujours très subtil */\n}\n\n/* Pour Firefox */\n* {\n    scrollbar-width: thin;\n    scrollbar-color: #f0f0f07a #ffffff;\n}";
  if (typeof GM_addStyle === 'function') {
    GM_addStyle(css);
    return;
  }
  const style = document.createElement('style');
  style.textContent = css;
  (document.head || document.documentElement).appendChild(style);
})();
