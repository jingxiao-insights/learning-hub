# Roadmap — Personal Brand + Learning Hub

---

## ✅ v1 — Version actuelle (MVP)

**Statut** : Livré

### Site personnel
- [x] Page d'accueil avec positionnement AI × ESG × PO
- [x] Section services (Product, ESG, IA)
- [x] Section "À propos"
- [x] CTA contact email
- [x] Design responsive mobile + desktop

### Learning Hub — Architecture
- [x] Page de sélection des Hubs (`hub.html`) avec progression
- [x] Template de Hub générique (`hub-detail.html?hub=xxx`)
- [x] Chargement dynamique des données via URL param
- [x] Séparation complète données / interface

### Hub AI × ESG × PO
- [x] 3 piliers : Produit & Agile, ESG & Réglementation, IA & Technologie
- [x] 12 compétences (4 par pilier) avec descriptions et ressources
- [x] Suivi de statut à 3 niveaux (Non commencé / En cours / Maîtrisé)
- [x] Notes personnelles par compétence
- [x] Persistance complète via localStorage
- [x] Barre de progression globale + mini-barres par pilier
- [x] Badges Essentiel / Bonus
- [x] Placeholder "GEO Hub — Bientôt"

### Documentation
- [x] `product-brief.md`
- [x] `user-stories.md`
- [x] `roadmap.md`

---

## 🚧 v2 — Extension GEO Hub

**Objectif** : Ajouter un deuxième Hub autour du **Generative Engine Optimization**

### Nouveau fichier à créer
```
data/geo.js
```

### Structure suggérée — 3 piliers GEO
| Pilier | Compétences clés |
|--------|-----------------|
| Fondamentaux GEO | Compréhension des LLM Search, différences SEO↔GEO, anatomie d'une réponse LLM |
| Optimisation de contenu | Structuration réponses autoritatives, citations, sources de confiance |
| Mesure & Outils | Tracking visibilité LLM, outils de monitoring, métriques GEO |

### Étapes d'intégration
1. Créer `data/geo.js` en suivant la structure de `data/esg-ai-po.js`
2. Ajouter l'entrée dans `HUBS_REGISTRY` dans `hub.html`
3. Passer `available: true` dans la config
4. Aucune modification de `hub-detail.html` ni de `style.css` nécessaire ✅

---

## 💡 v3 — Fonctionnalités avancées (backlog)

| Fonctionnalité | Priorité | Notes |
|----------------|----------|-------|
| Export PDF / impression de la progression | Medium | Utile pour bilan annuel |
| Mode sombre | Low | CSS variables déjà structurées pour ça |
| Partage public d'un Hub (URL read-only) | Low | Nécessite un backend ou service tiers |
| Import/export JSON de la progression | Medium | Portabilité entre navigateurs |
| Recherche dans les compétences | Low | Utile quand > 30 compétences |
| Tags par compétence | Low | Filtrage cross-piliers |
| Journal d'apprentissage (dates des passages de statut) | Medium | Visualisation de la progression dans le temps |
