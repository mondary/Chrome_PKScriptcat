# Changelog

Historique des versions du dépôt de snippets.

## Releases

### [2026.10.1] - 2026-10-15

#### Changed
- Les 10 userscripts `pk-css-pk-gmail-*` sont régénérés depuis la source de vérité `gmail.css` du projet SimpleGMAIL : accents réparés, métadonnées propres, contenu synchronisé (dont la police de la section Background White).

#### Fixed
- `pk-gmail-no-spam-icon.user.js` v0.2 : sélecteur CSS `:contains()` invalide remplacé par un scan JS avec MutationObserver (le script ne pouvait pas fonctionner avant).
- `pk-gmail-new-message-button.user.js` v2.1 : ancrage mort (`.gb_ud.gb_sd.gb_xd`) remplacé par un bouton flottant autonome, visible uniquement sur la liste, repositionné au-dessus du bouton du surligneur.

#### Removed
- Série cassée `pk-css-gmail-*.user.js` (fichiers mono-lignes illisibles), doublon `pk-gmail-a-filtrer-les-messages-similaires` (remplacé par « Filter Similar Always Visible »), imports Stylus gmail et doublons `__dup*` obsolètes — archivés localement hors git.
