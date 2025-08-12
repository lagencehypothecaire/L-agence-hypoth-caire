# L’Agence Hypothécaire — Starter
Date: 2025-08-12

Ce paquet contient une page d’atterrissage complète (HTML/CSS/JS) inspirée de l’architecture de zerodette.com, sans en copier le contenu ni le design.

## Fichiers
- `index.html` — page principale avec sections, quiz modal et formulaire contact.
- `styles.css` — styles responsifs, palette bleu/vert confiance.
- `script.js` — logique du quiz + envoi webhook (remplacer `window.WEBHOOK_URL`).
- `privacy.html` — politique de confidentialité (gabarit).
- `complaints.html` — politique de traitement des plaintes (gabarit).
- `assets/logo.svg` — logo temporaire.

## Brancher au Zoho CRM
1. Créer un **Zoho Flow** (ou Webhook CRM) qui reçoit du JSON.
2. Copier l’URL dans `index.html` (variable globale `window.WEBHOOK_URL`).
3. Mapper les champs: `source, eligible, equity_ratio, owner2y, income, value, balance, debts, email, phone`.
4. Action: créer un **Lead**, envoyer un **email**, créer une **tâche** `Appeler sous 1h`.

## Déploiement rapide
- Ouvrir `index.html` localement pour prévisualiser.
- Hébergement statique (Netlify/Vercel) ou intégrer le contenu dans WordPress (Elementor, modèle "Blank Page").

## Personnalisation
- Remplacer les placeholders (téléphone, AMF, adresse).
- Mettre vos témoignages réels.
- Ajouter vos logos de partenaires dans la section “Partenaires & prêteurs”.

Bon succès !
