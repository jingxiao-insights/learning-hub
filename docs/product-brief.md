# Product Brief — Personal Brand + Learning Hub

## Positionnement

**Produit** : Site personnel + plateforme de suivi de compétences pour freelance  
**Cible** : Jingxiao Li, Product Owner freelance sur le marché français, spécialisée AI × ESG  
**Proposition de valeur** : Un espace personnel professionnel qui combine vitrine freelance et outil de progression des compétences

---

## Pages et fonctionnalités

### 1. `index.html` — Page d'accueil personnelle
- Hero avec positionnement clair : AI × ESG × Product Owner
- Présentation des 3 domaines d'expertise (Produit, ESG, IA)
- Section "À propos" synthétique
- CTA vers le Learning Hub et le contact email

### 2. `hub.html` — Sélection des Hubs
- Grille des Hubs disponibles avec leurs indicateurs de progression
- Progression calculée dynamiquement depuis localStorage
- Hub "GEO" en statut "Bientôt disponible" (placeholder)

### 3. `hub-detail.html` — Vue détaillée d'un Hub
**Paramètre URL** : `?hub=<id>` (ex : `?hub=esg-ai-po`)

**Fonctionnalités clés** :
- Chargement dynamique du fichier de données correspondant
- Barre de progression globale (% de compétences maîtrisées)
- Mini-barres de progression par pilier
- 3 colonnes de compétences (une par pilier)
- Statut par compétence : `Non commencé` → `En cours` → `Maîtrisé`
- Expansion de chaque carte : description + ressources + notes personnelles
- Persistance totale via **localStorage**

---

## Architecture technique

```
index.html          ← Vitrine personnelle
hub.html            ← Sélection des hubs
hub-detail.html     ← Template générique (chargement via ?hub=)
style.css           ← Styles partagés
app.js              ← Utilitaires partagés (Storage, helpers)
data/
  esg-ai-po.js      ← Données du hub AI × ESG × PO
docs/
  product-brief.md  ← Ce fichier
  user-stories.md   ← User stories
  roadmap.md        ← Roadmap
```

**Principes d'architecture** :
- Zéro dépendance (pas de npm, pas de framework)
- Données ↔ Interface complètement séparées
- Ajouter un Hub = créer un fichier `data/<id>.js` + référencer dans `hub.html`
- Fonctionne avec un simple serveur HTTP statique (ou file://)

---

## Contraintes

- Compatible navigateurs modernes (Chrome, Firefox, Safari, Edge)
- Responsive mobile-first
- Accessibilité de base (sémantique HTML correcte, contraste suffisant)
- Données sensibles uniquement dans le navigateur (localStorage, jamais envoyé)
