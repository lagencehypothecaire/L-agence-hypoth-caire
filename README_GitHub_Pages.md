# Déploiement rapide sur GitHub Pages (v11)

Dernière mise à jour : 2025-08-12

## Étapes (première fois)
1. Crée un dépôt **public** nommé `lagence-hypothecaire`.
2. Clique **Add file → Upload files** et **glisse le contenu de ce dossier** (pas le .zip) :
   - `index.html`, `styles.css`, `script.js`, le dossier `assets/`, etc.
   - Le fichier **.nojekyll** est inclus pour désactiver Jekyll.
3. Clique **Commit changes**.
4. Va dans **Settings → Pages** :
   - **Source** : *Deploy from a branch*
   - **Branch** : `main`
   - **Folder** : `/ (root)`
   - **Save**
5. Attends ~1 minute puis ouvre l’URL :  
   `https://<ton-utilisateur>.github.io/lagence-hypothecaire/`

## Mises à jour
- Pour mettre à jour, refais **Upload files** (ou utilise Git) puis **Commit changes**.
- L’URL se régénère automatiquement.

## Dépannage
- Vérifie que `index.html` est **à la racine** du dépôt.
- Vérifie que le dossier s’appelle **assets** (minuscules) et que les chemins dans `index.html` pointent vers `assets/...`.
- Regarde **Actions → Pages build and deployment** si un message d’erreur apparaît.
- Vide le cache du navigateur ou force le rechargement (CTRL/Cmd+Shift+R).

## Contact
AMF #3003226072 — Jason@lagencehypothecaire.com — (418) 952‑9839
