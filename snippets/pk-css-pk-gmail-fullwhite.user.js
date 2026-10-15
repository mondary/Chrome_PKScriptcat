// ==UserScript==
// @name         PK CSS - PK_Gmail-FullWhite
// @namespace    https://local.scriptcat.sync
// @version      2026.10.15
// @description  CSS Gmail : Tout en blanc, police fine (source: gmail.css, synchro 2026.10.15)
// @match        https://mail.google.com/*
// @grant        GM_addStyle
// ==/UserScript==

(function () {
  'use strict';
  const css = "@font-face {\n  font-family: 'OpenDyslexic Nerd Font';\n  src: url('https://cdn.jsdelivr.net/gh/Nick2bad4u/nerd-fonts-woff2@v1.0.0/fonts/woff2/OpenDyslexic/OpenDyslexicNerdFont-Regular.woff2') format('woff2');\n  font-weight: normal;\n  font-style: normal;\n  font-display: swap;\n}\n\nbody,\n.aeF,\n.nH,\n.nH .aeF,\n.nH .nH.Hd,\ndiv.brC-aT5-aOt-Jw {\n  background: #fff !important;\n  color: #222 !important;\n  font-family: 'Wallpoet', 'OpenDyslexic Nerd Font', 'Poppins', 'Futura', 'Century Gothic', 'Tw Cen MT', 'Inter', system-ui, -apple-system, sans-serif !important;\n  font-size: 13px !important;\n  line-height: 1.3 !important;\n}";
  if (typeof GM_addStyle === 'function') {
    GM_addStyle(css);
    return;
  }
  const style = document.createElement('style');
  style.textContent = css;
  (document.head || document.documentElement).appendChild(style);
})();
