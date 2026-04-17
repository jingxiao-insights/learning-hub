/* Hub data: AI × ESG × Product Owner */
window.HUB_DATA = {
  id: 'esg-ai-po',
  title: 'AI × ESG × PO Learning Hub',
  subtitle: 'Compétences clés pour un Product Owner freelance à l\'intersection de l\'IA, l\'ESG et l\'Agile',

  pillars: [
    {
      id: 'product-agile',
      title: 'Produit & Agile',
      icon: '🎯',
      skills: [
        {
          id: 'backlog',
          title: 'Gestion du Backlog',
          importance: 'must',
          description: 'Maîtrise de la priorisation, rédaction d\'user stories, gestion des dépendances et techniques de refinement pour maintenir un backlog aligné sur la valeur business et facilement négociable avec les parties prenantes.',
          resources: [
            { title: 'Scrum Guide officiel', url: 'https://scrumguides.org/scrum-guide.html' },
            { title: 'Roman Pichler — 10 Tips for Backlog Grooming', url: 'https://www.romanpichler.com/blog/10-tips-grooming-the-product-backlog/' },
            { title: 'Mountain Goat Software — User Stories Applied', url: 'https://www.mountaingoatsoftware.com/agile/user-stories' },
            { title: 'Atlassian — Guide to Backlog Refinement', url: 'https://www.atlassian.com/agile/scrum/backlog-refinement' }
          ]
        },
        {
          id: 'discovery',
          title: 'Product Discovery',
          importance: 'must',
          description: 'Techniques de recherche utilisateur (interviews, tests d\'usabilité), prototypage rapide, tests d\'hypothèses et méthodes lean pour valider les problèmes avant de construire des solutions coûteuses.',
          resources: [
            { title: 'Teresa Torres — Continuous Discovery Habits', url: 'https://www.producttalk.org/2021/08/product-discovery/' },
            { title: 'IDEO — Design Thinking', url: 'https://designthinking.ideo.com/' },
            { title: 'Marty Cagan — SVPG Articles', url: 'https://www.svpg.com/articles/' },
            { title: 'Strategyzer — Value Proposition Canvas', url: 'https://www.strategyzer.com/canvas/value-proposition-canvas' }
          ]
        },
        {
          id: 'okr',
          title: 'Métriques & OKR',
          importance: 'must',
          description: 'Conception d\'indicateurs de performance pertinents, mise en place du framework OKR, suivi des métriques produit (activation, rétention, NPS) et alignement entre objectifs business et livraisons d\'équipe.',
          resources: [
            { title: 'John Doerr — Measure What Matters', url: 'https://www.whatmatters.com/the-book' },
            { title: 'Google re:Work — OKRs Guide', url: 'https://rework.withgoogle.com/guides/set-goals-with-okrs/' },
            { title: 'Amplitude — Product Metrics Guide', url: 'https://amplitude.com/blog/product-metrics' },
            { title: 'Lenny Rachitsky — Good Product Metrics', url: 'https://www.lennysnewsletter.com/p/good-metrics' }
          ]
        },
        {
          id: 'stakeholders',
          title: 'Gestion des parties prenantes',
          importance: 'must',
          description: 'Identification, cartographie et engagement des stakeholders, techniques de communication et de négociation pour aligner des parties prenantes aux intérêts divergents, y compris dans un contexte ESG/compliance.',
          resources: [
            { title: 'Mind Tools — Stakeholder Analysis', url: 'https://www.mindtools.com/aol0rms/stakeholder-analysis' },
            { title: 'Roman Pichler — The Stakeholder Map', url: 'https://www.romanpichler.com/tools/the-stakeholder-map/' },
            { title: 'HBR — Managing Up & Sideways', url: 'https://hbr.org/topic/subject/managing-up' },
            { title: 'PMI — Stakeholder Engagement', url: 'https://www.pmi.org/learning/library/stakeholder-management-task-project-success-7736' }
          ]
        }
      ]
    },

    {
      id: 'esg-regulation',
      title: 'ESG & Réglementation',
      icon: '🌿',
      skills: [
        {
          id: 'csrd',
          title: 'Cadre CSRD / ESRS',
          importance: 'must',
          description: 'Compréhension approfondie de la directive CSRD et des normes ESRS, double matérialité (financière et d\'impact), obligations de reporting, calendrier de mise en conformité et implications pratiques pour les DSI et les équipes produit.',
          resources: [
            { title: 'EFRAG — ESRS Standards officiels', url: 'https://www.efrag.org/sustainability-reporting' },
            { title: 'Commission Européenne — CSRD Overview', url: 'https://finance.ec.europa.eu/capital-markets-union-and-financial-markets/company-reporting-and-auditing/company-reporting/corporate-sustainability-reporting_en' },
            { title: 'KPMG — Guide pratique CSRD', url: 'https://kpmg.com/xx/en/home/insights/2022/06/eu-corporate-sustainability-reporting-directive.html' },
            { title: 'Deloitte — ESRS Overview', url: 'https://www.deloitte.com/global/en/services/audit-assurance/perspectives/esrs-overview.html' }
          ]
        },
        {
          id: 'esg-data',
          title: 'Données & Indicateurs ESG',
          importance: 'must',
          description: 'Collecte, qualité et gouvernance des données ESG, KPIs Scope 1/2/3 (GHG Protocol), méthodologies de mesure carbone, outils de reporting non-financier et bonnes pratiques de data management pour la durabilité.',
          resources: [
            { title: 'GRI Standards (référentiel global)', url: 'https://www.globalreporting.org/standards/' },
            { title: 'TCFD — Recommandations climatiques', url: 'https://www.fsb-tcfd.org/recommendations/' },
            { title: 'CDP — Disclosure Platform', url: 'https://www.cdp.net/en' },
            { title: 'Science Based Targets Initiative', url: 'https://sciencebasedtargets.org/' },
            { title: 'SASB Standards par secteur', url: 'https://sasb.org/standards/' }
          ]
        },
        {
          id: 'regulation',
          title: 'Écosystème réglementaire',
          importance: 'must',
          description: 'Vue d\'ensemble des réglementations ESG-finance en Europe : SFDR, Taxonomie UE, PAI, Article 29 LEC. Interactions entre cadres, calendrier réglementaire et veille sur les évolutions à anticiper.',
          resources: [
            { title: 'AMF — Finance Durable', url: 'https://www.amf-france.org/fr/espace-epargnants/comprendre-les-produits-financiers/investissement-durable' },
            { title: 'EU Taxonomy Navigator', url: 'https://ec.europa.eu/sustainable-finance-taxonomy/' },
            { title: 'PRI — SFDR Explained', url: 'https://www.unpri.org/sfdr' },
            { title: 'ESG Today — Actualités réglementaires', url: 'https://www.esgtoday.com/' }
          ]
        },
        {
          id: 'sector',
          title: 'Expertise sectorielle',
          importance: 'bonus',
          description: 'Enjeux ESG spécifiques par secteur (finance, immobilier, industrie, technologie), benchmarks sectoriels, identification des risques de transition et des opportunités de création de valeur durable.',
          resources: [
            { title: 'MSCI ESG Research', url: 'https://www.msci.com/our-solutions/esg-investing' },
            { title: 'Sustainalytics', url: 'https://www.sustainalytics.com/' },
            { title: 'Novethic — Media Finance Durable', url: 'https://www.novethic.fr/' },
            { title: 'Bloomberg ESG Data Hub', url: 'https://www.bloomberg.com/professional/solution/esg-data/' }
          ]
        }
      ]
    },

    {
      id: 'ai-tech',
      title: 'IA & Technologie',
      icon: '🤖',
      skills: [
        {
          id: 'llm',
          title: 'LLM & IA générative',
          importance: 'must',
          description: 'Compréhension des modèles de langage large, techniques de prompt engineering, cas d\'usage métier de l\'IA générative dans l\'ESG (reporting automatisé, extraction d\'indicateurs), limitations et hallucinations à gérer côté produit.',
          resources: [
            { title: 'Anthropic — Documentation Claude', url: 'https://docs.anthropic.com/' },
            { title: 'OpenAI — Prompt Engineering Guide', url: 'https://platform.openai.com/docs/guides/prompt-engineering' },
            { title: 'DeepLearning.AI — Prompt Engineering for Developers', url: 'https://www.deeplearning.ai/short-courses/chatgpt-prompt-engineering-for-developers/' },
            { title: 'Hugging Face — NLP Course (gratuit)', url: 'https://huggingface.co/learn/nlp-course/' }
          ]
        },
        {
          id: 'data-platform',
          title: 'Plateformes de données & Intégration',
          importance: 'must',
          description: 'Architecture data moderne (lakehouse, API REST, ETL/ELT), compréhension des pipelines de données ESG pour piloter des équipes techniques, rédiger des critères d\'acceptance pertinents et dialoguer avec les data engineers.',
          resources: [
            { title: 'dbt — Cours officiels (gratuit)', url: 'https://courses.getdbt.com/' },
            { title: 'Towards Data Science — Architecture Data', url: 'https://towardsdatascience.com/' },
            { title: 'Databricks — Data + AI Summit', url: 'https://www.databricks.com/dataaisummit' },
            { title: 'Mode Analytics Blog', url: 'https://mode.com/blog/' }
          ]
        },
        {
          id: 'ai-governance',
          title: 'Gouvernance IA & Fiabilité',
          importance: 'must',
          description: 'EU AI Act et classification des systèmes à risque, principes d\'IA responsable (fairness, explainability, robustness), détection des biais algorithmiques, et stratégies pour construire la confiance utilisateur dans les produits IA.',
          resources: [
            { title: 'EU AI Act — Texte officiel annoté', url: 'https://artificialintelligenceact.eu/' },
            { title: 'NIST AI Risk Management Framework', url: 'https://www.nist.gov/artificial-intelligence/ai-risk-management-framework' },
            { title: 'Montreal AI Ethics Institute', url: 'https://montrealethics.ai/' },
            { title: 'Partnership on AI — Resources', url: 'https://partnershiponai.org/resources/' }
          ]
        },
        {
          id: 'ai-tools',
          title: 'Outils IA & Évaluation SaaS',
          importance: 'bonus',
          description: 'Panorama des solutions IA du marché (copilotes, RAG, agents), méthodologie d\'évaluation et de sélection de vendors IA/ESG, construction de business cases et gestion de pilotes pour accélérer l\'adoption.',
          resources: [
            { title: 'G2 — AI Software Reviews', url: 'https://www.g2.com/categories/artificial-intelligence' },
            { title: 'Gartner — AI Research & Reports', url: 'https://www.gartner.com/en/information-technology/insights/artificial-intelligence' },
            { title: 'There\'s An AI For That', url: 'https://theresanaiforthat.com/' },
            { title: 'Product Hunt — AI Tools', url: 'https://www.producthunt.com/' },
            { title: 'Futurepedia', url: 'https://www.futurepedia.io/' }
          ]
        }
      ]
    }
  ]
};
