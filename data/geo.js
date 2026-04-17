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
          description: 'Comprendre comment fonctionnent les moteurs de recherche génératifs : comment ChatGPT, Perplexity, Google AI Overviews et Claude sélectionnent, synthétisent et citent leurs sources. Base indispensable pour toute stratégie GEO.',
          resources: [
            { title: 'Perplexity — How it works', url: 'https://www.perplexity.ai/hub/faq/how-does-perplexity-work' },
            { title: 'Google — About AI Overviews', url: 'https://support.google.com/websearch/answer/14901683' },
            { title: 'Search Engine Land — GEO Explained', url: 'https://searchengineland.com/generative-engine-optimization-geo' },
            { title: 'Whiteboard Friday — GEO vs SEO', url: 'https://moz.com/blog/generative-engine-optimization' }
          ]
        },
        {
          id: 'geo-vs-seo',
          title: 'GEO vs SEO : différences clés',
          importance: 'must',
          description: 'Identifier ce qui change avec le GEO par rapport au SEO traditionnel : ranking vs citation, mots-clés vs entités, backlinks vs autorité thématique, et comment les deux approches se complètent dans une stratégie de visibilité globale.',
          resources: [
            { title: 'HubSpot — GEO vs SEO Guide', url: 'https://blog.hubspot.com/marketing/generative-engine-optimization' },
            { title: 'Ahrefs — Future of SEO with AI', url: 'https://ahrefs.com/blog/seo-vs-geo/' },
            { title: 'Neil Patel — GEO Strategy', url: 'https://neilpatel.com/blog/generative-engine-optimization/' },
            { title: 'Semrush — AI Search Optimization', url: 'https://www.semrush.com/blog/generative-engine-optimization/' }
          ]
        },
        {
          id: 'selection-sources',
          title: 'Comment les IA sélectionnent leurs sources',
          importance: 'must',
          description: 'Mécanismes de retrieval augmenté (RAG), critères de confiance et d\'autorité utilisés par les LLM, rôle des embeddings et de la similarité sémantique dans la sélection des contenus à citer.',
          resources: [
            { title: 'Princeton — GEO Research Paper', url: 'https://arxiv.org/abs/2311.09735' },
            { title: 'Wired — How Perplexity Chooses Sources', url: 'https://www.wired.com/story/perplexity-is-a-bullshit-machine/' },
            { title: 'Towards Data Science — RAG Explained', url: 'https://towardsdatascience.com/retrieval-augmented-generation-rag-from-theory-to-langchain-implementation-4e9bd5f6a4f2' },
            { title: 'Anthropic — Long-term Memory & Citations', url: 'https://docs.anthropic.com/' }
          ]
        },
        {
          id: 'ecosysteme',
          title: 'Écosystème des moteurs IA',
          importance: 'bonus',
          description: 'Panorama des principaux acteurs du search IA en 2024-2025 : Perplexity, ChatGPT Search, Google AI Overviews, Bing Copilot, You.com, Arc Search. Spécificités de chaque plateforme et parts de marché émergentes.',
          resources: [
            { title: 'Similarweb — AI Search Market Share', url: 'https://www.similarweb.com/blog/insights/ai-news/perplexity-chatgpt-search/' },
            { title: 'SparkToro — Who Uses AI Search?', url: 'https://sparktoro.com/' },
            { title: 'The Verge — AI Search Landscape', url: 'https://www.theverge.com/ai-artificial-intelligence' },
            { title: 'Benedict Evans — AI & Search', url: 'https://www.ben-evans.com/' }
          ]
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
          description: 'Techniques pour rédiger des contenus que les IA citent naturellement : réponses directes aux questions (answer-first), profondeur thématique, citations de sources primaires, données originales et ton d\'expert reconnu.',
          resources: [
            { title: 'Animalz — Writing for AI Search', url: 'https://www.animalz.co/blog/writing-for-ai-search/' },
            { title: 'Clearscope — Content Authority Guide', url: 'https://www.clearscope.io/blog/topical-authority' },
            { title: 'Search Engine Journal — E-E-A-T & GEO', url: 'https://www.searchenginejournal.com/google-eeat/' },
            { title: 'Backlinko — Content Optimization', url: 'https://backlinko.com/content-optimization' }
          ]
        },
        {
          id: 'optimisation-entites',
          title: 'Optimisation des entités',
          importance: 'must',
          description: 'Construire une identité forte dans les graphes de connaissances (Knowledge Graph Google, Wikidata), optimiser les entités nommées, les relations sémantiques et la cohérence de marque à travers les sources pour maximiser la reconnaissance par les LLM.',
          resources: [
            { title: 'Dixon Jones — Entity SEO Guide', url: 'https://dixonjones.com/entity-seo/' },
            { title: 'Google — Knowledge Graph API', url: 'https://developers.google.com/knowledge-graph' },
            { title: 'Kalicube — Brand SERP & Entities', url: 'https://kalicube.com/entity-based-seo/' },
            { title: 'WordLift — Entity Optimization', url: 'https://wordlift.io/blog/en/entity-based-seo/' }
          ]
        },
        {
          id: 'structured-data',
          title: 'Données structurées & Schema',
          importance: 'must',
          description: 'Implémentation des balises Schema.org pour améliorer la lisibilité machine des contenus, types de schema prioritaires pour le GEO (FAQPage, HowTo, Article, Person, Organization), et impact sur les AI Overviews.',
          resources: [
            { title: 'Schema.org — Full Reference', url: 'https://schema.org/' },
            { title: 'Google — Structured Data Guidelines', url: 'https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data' },
            { title: 'Search Engine Land — Schema & AI Search', url: 'https://searchengineland.com/schema-markup-seo' },
            { title: 'Rich Results Test Tool', url: 'https://search.google.com/test/rich-results' }
          ]
        },
        {
          id: 'intent-mapping',
          title: 'Cartographie des intentions de recherche IA',
          importance: 'bonus',
          description: 'Comprendre comment les requêtes évoluent avec le search IA (questions longues, conversationnelles, multi-étapes), identifier les "prompt patterns" de sa cible et adapter l\'architecture de contenu en conséquence.',
          resources: [
            { title: 'Foundry — AI Search Intent Research', url: 'https://foundryco.com/' },
            { title: 'SparkToro — Audience Research', url: 'https://sparktoro.com/blog' },
            { title: 'Semrush — Keyword Intent Guide', url: 'https://www.semrush.com/blog/search-intent/' },
            { title: 'Also Asked — Question Research', url: 'https://alsoasked.com/' }
          ]
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
          description: 'Outils et méthodes pour mesurer sa présence dans les réponses des IA : monitoring des citations, benchmarking de visibilité, suivi des mentions de marque dans ChatGPT/Perplexity et construction d\'un dashboard GEO.',
          resources: [
            { title: 'Profound — AI Search Monitoring', url: 'https://www.profound.com/' },
            { title: 'Otterly.ai — LLM Visibility Tracking', url: 'https://otterly.ai/' },
            { title: 'Semrush — AI Toolkit', url: 'https://www.semrush.com/ai/' },
            { title: 'Brightedge — AI Search Analytics', url: 'https://www.brightedge.com/' }
          ]
        },
        {
          id: 'competitive-geo',
          title: 'Analyse concurrentielle GEO',
          importance: 'must',
          description: 'Analyser quels concurrents sont cités par les IA sur vos thématiques, comprendre pourquoi ils sont sélectionnés, identifier les gaps de contenu et les opportunités de positionnement différenciant.',
          resources: [
            { title: 'Ahrefs — Content Gap Analysis', url: 'https://ahrefs.com/blog/content-gap-analysis/' },
            { title: 'Exploding Topics — Trend Research', url: 'https://explodingtopics.com/' },
            { title: 'Buzzsumo — Content Analysis', url: 'https://buzzsumo.com/' },
            { title: 'Sparktoro — Competitor Audience', url: 'https://sparktoro.com/' }
          ]
        },
        {
          id: 'strategie-contenu',
          title: 'Stratégie de contenu GEO',
          importance: 'must',
          description: 'Construire une stratégie éditoriale optimisée pour le GEO : piliers thématiques, clusters de contenu, calendrier de publication, formats prioritaires (guides complets, études, données originales) et gouvernance de contenu.',
          resources: [
            { title: 'HubSpot — Topic Cluster Strategy', url: 'https://blog.hubspot.com/marketing/topic-clusters-seo' },
            { title: 'Animalz — Content Strategy for AI', url: 'https://www.animalz.co/blog/' },
            { title: 'Orbit Media — Content Strategy', url: 'https://www.orbitmedia.com/blog/content-strategy/' },
            { title: 'Content Marketing Institute', url: 'https://contentmarketinginstitute.com/' }
          ]
        },
        {
          id: 'outils-geo',
          title: 'Outils & Plateformes GEO',
          importance: 'bonus',
          description: 'Panorama des outils spécialisés GEO : générateurs de contenu IA, outils d\'optimisation sémantique, plateformes de monitoring LLM, et stack technologique pour une équipe contenu orientée GEO.',
          resources: [
            { title: 'Clearscope — Content Optimization', url: 'https://www.clearscope.io/' },
            { title: 'MarketMuse — AI Content Planning', url: 'https://www.marketmuse.com/' },
            { title: 'Surfer SEO — Content Editor', url: 'https://surferseo.com/' },
            { title: 'Frase — AI Content Briefs', url: 'https://www.frase.io/' },
            { title: 'Alli AI — SEO Automation', url: 'https://www.alliai.com/' }
          ]
        }
      ]
    }
  ]
};
