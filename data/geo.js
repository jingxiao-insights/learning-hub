/* Hub data: GEO — Generative Engine Optimization */
window.HUB_DATA = {
  id: 'geo',
  title: 'GEO Learning Hub',
  subtitle: 'Optimiser sa visibilité dans les moteurs de recherche IA : ChatGPT, Perplexity, Google AI Overviews et au-delà',

  pillars: [
    {
      id: 'fondamentaux',
      title: 'Fondamentaux GEO',
      icon: '🧠',
      skills: [
        {
          id: 'llm-search',
          title: 'LLM Search & AI Overviews',
          importance: 'must',
          description: 'Comprendre comment fonctionnent les moteurs de recherche génératifs : comment ChatGPT, Perplexity, Google AI Overviews sélectionnent, synthétisent et citent leurs sources.',
          resources: {
            fr: [
              { title: 'Abondance.com — IA générative & Recherche (référence FR)', url: 'https://www.abondance.com/category/intelligence-artificielle/' },
              { title: 'Siècle Digital — Google SGE & AI Overviews', url: 'https://siecledigital.fr/tag/google-sge/' },
              { title: 'Journal du Net — Moteurs IA : fonctionnement', url: 'https://www.journaldunet.com/solutions/seo-sem/1520518-google-sge-le-moteur-de-recherche-revolution/' },
              { title: 'Digimood — Guide complet GEO (FR)', url: 'https://www.digimood.com/blog/seo/geo-generative-engine-optimization/' }
            ],
            en: [
              { title: 'Search Engine Land — GEO Explained', url: 'https://searchengineland.com/generative-engine-optimization-geo' },
              { title: 'Moz — Whiteboard Friday: GEO vs SEO', url: 'https://moz.com/blog/generative-engine-optimization' },
              { title: 'Google — About AI Overviews (official)', url: 'https://support.google.com/websearch/answer/14901683' },
              { title: 'Perplexity — How it works (official)', url: 'https://www.perplexity.ai/hub/faq/how-does-perplexity-work' }
            ],
            de: [
              { title: 'SISTRIX — AI Overviews & SGE auf Deutsch', url: 'https://www.sistrix.de/blog/tag/ai-overviews/' },
              { title: 'Seokratie — Generative KI & Suche', url: 'https://www.seokratie.de/ki-seo/' },
              { title: 't3n — KI-Suche: Was ändert sich für SEO?', url: 'https://t3n.de/news/ki-suche-seo/' },
              { title: 'OnPage.org — AI Overviews erklärt', url: 'https://www.onpage.org/de/blog/' }
            ]
          }
        },
        {
          id: 'geo-vs-seo',
          title: 'GEO vs SEO : différences clés',
          importance: 'must',
          description: 'Identifier ce qui change avec le GEO par rapport au SEO traditionnel : ranking vs citation, mots-clés vs entités, backlinks vs autorité thématique.',
          resources: {
            fr: [
              { title: 'Abondance.com — SEO vs GEO : analyse approfondie', url: 'https://www.abondance.com/' },
              { title: 'SEMrush Blog FR — L\'avenir du SEO avec l\'IA', url: 'https://fr.semrush.com/blog/' },
              { title: 'Réferencement.fr — GEO : nouveau paradigme', url: 'https://www.referencement.fr/' },
              { title: 'Junto — Guide GEO complet en français', url: 'https://junto.fr/blog/geo-generative-engine-optimization/' }
            ],
            en: [
              { title: 'Ahrefs — GEO vs SEO: What\'s Different', url: 'https://ahrefs.com/blog/seo-vs-geo/' },
              { title: 'HubSpot — Complete Guide to GEO', url: 'https://blog.hubspot.com/marketing/generative-engine-optimization' },
              { title: 'Semrush — Generative Engine Optimization Guide', url: 'https://www.semrush.com/blog/generative-engine-optimization/' },
              { title: 'Neil Patel — GEO Strategy Explained', url: 'https://neilpatel.com/blog/generative-engine-optimization/' }
            ],
            de: [
              { title: 'SISTRIX — GEO vs SEO: der Unterschied', url: 'https://www.sistrix.de/blog/' },
              { title: 'Seokratie — GEO: Was Product Owner wissen müssen', url: 'https://www.seokratie.de/' },
              { title: 'Bloofusion — SEO in der KI-Ära', url: 'https://www.bloofusion.de/blog/' },
              { title: 'Karl Kratz — KI & Suchmaschinenoptimierung', url: 'https://www.karlkratz.com/' }
            ]
          }
        },
        {
          id: 'selection-sources',
          title: 'Comment les IA sélectionnent leurs sources',
          importance: 'must',
          description: 'Mécanismes de retrieval augmenté (RAG), critères de confiance et d\'autorité utilisés par les LLM, rôle de la similarité sémantique dans la sélection des contenus à citer.',
          resources: {
            fr: [
              { title: 'INRIA — RAG et recherche d\'information', url: 'https://www.inria.fr/fr/intelligence-artificielle' },
              { title: 'Abondance.com — Comment les LLM citent leurs sources', url: 'https://www.abondance.com/' },
              { title: 'Siècle Digital — Algorithmes IA & sélection', url: 'https://siecledigital.fr/intelligence-artificielle/' },
              { title: 'Princeton — GEO Research Paper (2023)', url: 'https://arxiv.org/abs/2311.09735' }
            ],
            en: [
              { title: 'Princeton — GEO Research Paper (seminal)', url: 'https://arxiv.org/abs/2311.09735' },
              { title: 'Towards Data Science — RAG Explained In Depth', url: 'https://towardsdatascience.com/retrieval-augmented-generation-rag-from-theory-to-langchain-implementation-4e9bd5f6a4f2' },
              { title: 'Wired — How AI Search Engines Choose Sources', url: 'https://www.wired.com/story/perplexity-is-a-bullshit-machine/' },
              { title: 'Anthropic — Claude\'s Approach to Citations', url: 'https://docs.anthropic.com/' }
            ],
            de: [
              { title: 'DFKI — RAG & Informationsretrieval Forschung', url: 'https://www.dfki.de/web/forschung/forschungsbereiche/sprachtechnologie-und-sprachverarbeitung' },
              { title: 'heise Developer — RAG erklärt', url: 'https://www.heise.de/developer/thema/llm' },
              { title: 'Fraunhofer — KI-Quellauswahl & Vertrauen', url: 'https://www.ki.fraunhofer.de/' },
              { title: 't3n — Wie KI-Suche Quellen bewertet', url: 'https://t3n.de/news/ki-suche/' }
            ]
          }
        },
        {
          id: 'ecosysteme',
          title: 'Écosystème des moteurs IA',
          importance: 'bonus',
          description: 'Panorama des principaux acteurs du search IA : Perplexity, ChatGPT Search, Google AI Overviews, Bing Copilot. Spécificités et parts de marché émergentes.',
          resources: {
            fr: [
              { title: 'FrenchWeb — Panorama moteurs IA 2024', url: 'https://www.frenchweb.fr/tag/moteur-de-recherche' },
              { title: 'Siècle Digital — Les nouveaux moteurs IA', url: 'https://siecledigital.fr/tag/moteur-recherche-ia/' },
              { title: 'Journal du Net — Classement moteurs IA', url: 'https://www.journaldunet.com/solutions/seo-sem/' },
              { title: 'Abondance.com — Veille moteurs de recherche', url: 'https://www.abondance.com/category/moteurs-de-recherche/' }
            ],
            en: [
              { title: 'Similarweb — AI Search Market Share 2024', url: 'https://www.similarweb.com/blog/insights/ai-news/perplexity-chatgpt-search/' },
              { title: 'The Verge — AI Search Landscape Coverage', url: 'https://www.theverge.com/ai-artificial-intelligence' },
              { title: 'Benedict Evans — AI & The Future of Search', url: 'https://www.ben-evans.com/' },
              { title: 'SparkToro — Who Uses AI Search?', url: 'https://sparktoro.com/' }
            ],
            de: [
              { title: 'SISTRIX — KI-Suche Marktanteile Deutschland', url: 'https://www.sistrix.de/blog/sichtbarkeitsindex/' },
              { title: 't3n — KI-Suchmaschinen im Überblick', url: 'https://t3n.de/tag/ki-suchmaschine/' },
              { title: 'heise online — Perplexity, ChatGPT Search & Co.', url: 'https://www.heise.de/thema/Suchmaschinen' },
              { title: 'Gründerszene — KI-Suche Startup-Ökosystem', url: 'https://www.gruenderszene.de/tag/ki-suche' }
            ]
          }
        }
      ]
    },

    {
      id: 'optimisation-contenu',
      title: 'Optimisation de contenu',
      icon: '✍️',
      skills: [
        {
          id: 'contenu-autoritatif',
          title: 'Contenu autoritatif & citations',
          importance: 'must',
          description: 'Techniques pour rédiger des contenus que les IA citent naturellement : réponses directes, profondeur thématique, citations de sources primaires, données originales.',
          resources: {
            fr: [
              { title: 'Abondance.com — Contenu optimisé pour les IA', url: 'https://www.abondance.com/' },
              { title: 'Digimood — Créer du contenu pour le GEO', url: 'https://www.digimood.com/blog/seo/' },
              { title: 'SEMrush Blog FR — E-E-A-T & autorité', url: 'https://fr.semrush.com/blog/eeat/' },
              { title: 'Junto — Contenu autoritatif : guide FR', url: 'https://junto.fr/blog/' }
            ],
            en: [
              { title: 'Animalz — Writing Content for AI Search', url: 'https://www.animalz.co/blog/writing-for-ai-search/' },
              { title: 'Search Engine Journal — E-E-A-T Complete Guide', url: 'https://www.searchenginejournal.com/google-eeat/' },
              { title: 'Clearscope — Topical Authority Guide', url: 'https://www.clearscope.io/blog/topical-authority' },
              { title: 'Backlinko — Content Optimization (Brian Dean)', url: 'https://backlinko.com/content-optimization' }
            ],
            de: [
              { title: 'SISTRIX — E-E-A-T & Autorität auf Deutsch', url: 'https://www.sistrix.de/blog/e-e-a-t/' },
              { title: 'Seokratie — Content für KI-Suche optimieren', url: 'https://www.seokratie.de/content-marketing/' },
              { title: 'Bloofusion — Autoritative Inhalte erstellen', url: 'https://www.bloofusion.de/blog/content-seo/' },
              { title: 'Karl Kratz — Content & KI-Sichtbarkeit', url: 'https://www.karlkratz.com/blog/' }
            ]
          }
        },
        {
          id: 'optimisation-entites',
          title: 'Optimisation des entités',
          importance: 'must',
          description: 'Construire une identité forte dans les graphes de connaissances (Google Knowledge Graph, Wikidata), optimiser les entités nommées et la cohérence de marque pour maximiser la reconnaissance par les LLM.',
          resources: {
            fr: [
              { title: 'Abondance.com — SEO sémantique & entités', url: 'https://www.abondance.com/category/referencement/' },
              { title: 'SEO.fr — Knowledge Graph & entités (FR)', url: 'https://www.seo.fr/' },
              { title: 'Kalicube — Brand SERP & Entity Optimization (guide EN)', url: 'https://kalicube.com/entity-based-seo/' },
              { title: 'Google — Knowledge Graph API Documentation', url: 'https://developers.google.com/knowledge-graph' }
            ],
            en: [
              { title: 'Dixon Jones — Entity SEO: The Complete Guide', url: 'https://dixonjones.com/entity-seo/' },
              { title: 'Kalicube — Brand SERP & Entity Optimization', url: 'https://kalicube.com/entity-based-seo/' },
              { title: 'WordLift — Entity-Based SEO Blog', url: 'https://wordlift.io/blog/en/entity-based-seo/' },
              { title: 'Google — Knowledge Graph API', url: 'https://developers.google.com/knowledge-graph' }
            ],
            de: [
              { title: 'SISTRIX — Entitäten-SEO & Knowledge Graph', url: 'https://www.sistrix.de/blog/entity-seo/' },
              { title: 'Karl Kratz — Semantische Optimierung', url: 'https://www.karlkratz.com/' },
              { title: 'Seokratie — Knowledge Graph Deutschland', url: 'https://www.seokratie.de/knowledge-graph/' },
              { title: 'OnPage.org — Entity Optimierung Leitfaden', url: 'https://www.onpage.org/de/wissen/entity-seo/' }
            ]
          }
        },
        {
          id: 'structured-data',
          title: 'Données structurées & Schema',
          importance: 'must',
          description: 'Implémentation des balises Schema.org pour améliorer la lisibilité machine des contenus, types de schema prioritaires pour le GEO et impact sur les AI Overviews.',
          resources: {
            fr: [
              { title: 'Google Search Central — Données structurées (FR)', url: 'https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data?hl=fr' },
              { title: 'Abondance.com — Schema.org pour le SEO', url: 'https://www.abondance.com/' },
              { title: 'Schema.org — Documentation officielle', url: 'https://schema.org/' },
              { title: 'Rich Results Test — Outil Google (FR)', url: 'https://search.google.com/test/rich-results' }
            ],
            en: [
              { title: 'Schema.org — Full Reference', url: 'https://schema.org/' },
              { title: 'Google — Structured Data Guidelines (official)', url: 'https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data' },
              { title: 'Search Engine Land — Schema & AI Search', url: 'https://searchengineland.com/schema-markup-seo' },
              { title: 'Rich Results Test Tool', url: 'https://search.google.com/test/rich-results' }
            ],
            de: [
              { title: 'Google Search Central — Strukturierte Daten (DE)', url: 'https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data?hl=de' },
              { title: 'SISTRIX — Strukturierte Daten & Schema.org', url: 'https://www.sistrix.de/blog/strukturierte-daten/' },
              { title: 'Seokratie — Schema.org Implementierung', url: 'https://www.seokratie.de/schema-org/' },
              { title: 'Ryte — Structured Data Checker (DE)', url: 'https://ryte.com/magazine/structured-data' }
            ]
          }
        },
        {
          id: 'intent-mapping',
          title: 'Cartographie des intentions de recherche IA',
          importance: 'bonus',
          description: 'Comprendre comment les requêtes évoluent avec le search IA (questions conversationnelles, multi-étapes), identifier les patterns de sa cible et adapter l\'architecture de contenu.',
          resources: {
            fr: [
              { title: 'SEMrush Blog FR — Intention de recherche à l\'ère de l\'IA', url: 'https://fr.semrush.com/blog/intent-recherche/' },
              { title: 'Abondance.com — Requêtes conversationnelles', url: 'https://www.abondance.com/' },
              { title: 'Also Asked — Outil questions associées (FR)', url: 'https://alsoasked.com/' },
              { title: 'AnswerThePublic — Intentions de recherche FR', url: 'https://answerthepublic.com/' }
            ],
            en: [
              { title: 'SparkToro — Audience Research for AI Search', url: 'https://sparktoro.com/blog' },
              { title: 'Also Asked — Visualize Question Clusters', url: 'https://alsoasked.com/' },
              { title: 'Semrush — Keyword Intent Complete Guide', url: 'https://www.semrush.com/blog/search-intent/' },
              { title: 'Exploding Topics — Emerging Query Trends', url: 'https://explodingtopics.com/' }
            ],
            de: [
              { title: 'SISTRIX — Suchintention & Keyword-Analyse', url: 'https://www.sistrix.de/blog/suchintention/' },
              { title: 'Seokratie — User Intent verstehen', url: 'https://www.seokratie.de/suchintention/' },
              { title: 'Also Asked — Fragen-Clustering Tool', url: 'https://alsoasked.com/' },
              { title: 'Karl Kratz — Nutzerintention & KI-Suche', url: 'https://www.karlkratz.com/blog/' }
            ]
          }
        }
      ]
    },

    {
      id: 'mesure-strategie',
      title: 'Mesure & Stratégie',
      icon: '📊',
      skills: [
        {
          id: 'tracking-llm',
          title: 'Tracking de visibilité LLM',
          importance: 'must',
          description: 'Outils et méthodes pour mesurer sa présence dans les réponses des IA : monitoring des citations, benchmarking de visibilité et construction d\'un dashboard GEO.',
          resources: {
            fr: [
              { title: 'Abondance.com — Mesurer sa visibilité dans les IA', url: 'https://www.abondance.com/' },
              { title: 'Digimood — Outils de suivi GEO (FR)', url: 'https://www.digimood.com/blog/' },
              { title: 'SEMrush FR — AI Toolkit & monitoring', url: 'https://fr.semrush.com/ai/' },
              { title: 'Siècle Digital — Tracker sa présence dans ChatGPT', url: 'https://siecledigital.fr/intelligence-artificielle/' }
            ],
            en: [
              { title: 'Profound — AI Search Monitoring Platform', url: 'https://www.profound.com/' },
              { title: 'Otterly.ai — LLM Visibility Tracking', url: 'https://otterly.ai/' },
              { title: 'Semrush — AI Toolkit', url: 'https://www.semrush.com/ai/' },
              { title: 'Brightedge — AI Search Analytics', url: 'https://www.brightedge.com/' }
            ],
            de: [
              { title: 'SISTRIX — Sichtbarkeitsindex & KI-Monitoring', url: 'https://www.sistrix.de/sichtbarkeitsindex/' },
              { title: 'Seokratie — GEO Tracking & Messung', url: 'https://www.seokratie.de/' },
              { title: 'Ryte — SEO & Sichtbarkeitsmonitoring (DE)', url: 'https://ryte.com/' },
              { title: 't3n — Tools zur KI-Sichtbarkeit messen', url: 'https://t3n.de/tag/seo-tools/' }
            ]
          }
        },
        {
          id: 'competitive-geo',
          title: 'Analyse concurrentielle GEO',
          importance: 'must',
          description: 'Analyser quels concurrents sont cités par les IA sur vos thématiques, comprendre pourquoi, identifier les gaps de contenu et les opportunités de différenciation.',
          resources: {
            fr: [
              { title: 'SEMrush Blog FR — Analyse concurrentielle SEO/GEO', url: 'https://fr.semrush.com/blog/analyse-concurrentielle/' },
              { title: 'Ahrefs Blog FR — Content Gap Analysis', url: 'https://ahrefs.com/blog/fr/analyse-des-lacunes-de-contenu/' },
              { title: 'Digimood — Benchmark GEO concurrentiel', url: 'https://www.digimood.com/blog/' },
              { title: 'Abondance.com — Veille concurrentielle SEO/GEO', url: 'https://www.abondance.com/' }
            ],
            en: [
              { title: 'Ahrefs — Content Gap Analysis Guide', url: 'https://ahrefs.com/blog/content-gap-analysis/' },
              { title: 'Semrush — Competitor Analysis Toolkit', url: 'https://www.semrush.com/blog/competitor-analysis/' },
              { title: 'BuzzSumo — Content Performance Analysis', url: 'https://buzzsumo.com/' },
              { title: 'Exploding Topics — Competitor Topic Discovery', url: 'https://explodingtopics.com/' }
            ],
            de: [
              { title: 'SISTRIX Toolbox — Wettbewerbsanalyse', url: 'https://www.sistrix.de/toolbox/wettbewerbsanalyse/' },
              { title: 'Seokratie — Konkurrenzanalyse im SEO', url: 'https://www.seokratie.de/seo-wettbewerbsanalyse/' },
              { title: 'Bloofusion — Content Gap & Wettbewerb', url: 'https://www.bloofusion.de/blog/' },
              { title: 'XOVI — SEO Wettbewerbsanalyse Tool (DE)', url: 'https://www.xovi.de/' }
            ]
          }
        },
        {
          id: 'strategie-contenu',
          title: 'Stratégie de contenu GEO',
          importance: 'must',
          description: 'Construire une stratégie éditoriale optimisée pour le GEO : piliers thématiques, clusters de contenu, formats prioritaires (guides complets, données originales) et gouvernance.',
          resources: {
            fr: [
              { title: 'HubSpot Blog FR — Stratégie de contenu & Topic Clusters', url: 'https://blog.hubspot.fr/marketing/strategie-contenu' },
              { title: 'Digimood — Stratégie éditoriale GEO', url: 'https://www.digimood.com/blog/' },
              { title: 'SEMrush Blog FR — Stratégie de contenu IA', url: 'https://fr.semrush.com/blog/strategie-contenu/' },
              { title: 'Junto — Content Strategy FR', url: 'https://junto.fr/blog/strategie-contenu/' }
            ],
            en: [
              { title: 'HubSpot — Topic Cluster Strategy Guide', url: 'https://blog.hubspot.com/marketing/topic-clusters-seo' },
              { title: 'Animalz — Content Strategy for AI Era', url: 'https://www.animalz.co/blog/' },
              { title: 'Content Marketing Institute — Strategy Resources', url: 'https://contentmarketinginstitute.com/' },
              { title: 'Orbit Media — Annual Blogging Survey', url: 'https://www.orbitmedia.com/blog/content-strategy/' }
            ],
            de: [
              { title: 'Contentbird — Content-Strategie Plattform (DE)', url: 'https://contentbird.de/blog/' },
              { title: 't3n — Content Marketing Strategie', url: 'https://t3n.de/tag/content-marketing/' },
              { title: 'Seokratie — Themencluster & Content-Strategie', url: 'https://www.seokratie.de/content-strategie/' },
              { title: 'Bloofusion — Redaktionsplanung für GEO', url: 'https://www.bloofusion.de/blog/content-marketing/' }
            ]
          }
        },
        {
          id: 'outils-geo',
          title: 'Outils & Plateformes GEO',
          importance: 'bonus',
          description: 'Panorama des outils spécialisés GEO : optimisation sémantique, monitoring LLM, et stack technologique pour une équipe contenu orientée GEO.',
          resources: {
            fr: [
              { title: 'SEMrush FR — Suite complète SEO/GEO', url: 'https://fr.semrush.com/' },
              { title: 'Ahrefs — Outils SEO de référence (FR interface)', url: 'https://ahrefs.com/fr' },
              { title: 'YourTextGuru — Optimisation sémantique FR', url: 'https://yourtextguru.com/' },
              { title: '1.fr — Outil sémantique français', url: 'https://www.1.fr/' }
            ],
            en: [
              { title: 'Clearscope — Content Optimization Platform', url: 'https://www.clearscope.io/' },
              { title: 'MarketMuse — AI Content Planning', url: 'https://www.marketmuse.com/' },
              { title: 'Surfer SEO — Content Editor', url: 'https://surferseo.com/' },
              { title: 'Frase.io — AI Content Briefs', url: 'https://www.frase.io/' }
            ],
            de: [
              { title: 'SISTRIX — Das SEO-Tool für Deutschland', url: 'https://www.sistrix.de/' },
              { title: 'Ryte — Website Intelligence Platform (DE)', url: 'https://ryte.com/' },
              { title: 'Surfer SEO — Inhalt optimieren (DE)', url: 'https://surferseo.com/de/' },
              { title: 'XOVI — All-in-One SEO Suite (DE)', url: 'https://www.xovi.de/' }
            ]
          }
        }
      ]
    }
  ]
};
