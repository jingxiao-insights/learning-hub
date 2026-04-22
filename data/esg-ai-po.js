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
          description: 'Maîtrise de la priorisation, rédaction d\'user stories, gestion des dépendances et techniques de refinement pour maintenir un backlog aligné sur la valeur business.',
          resources: {
            fr: [
              { title: 'Scrum Guide — version française officielle', url: 'https://scrumguides.org/docs/scrumguide/v2020/2020-Scrum-Guide-French.pdf' },
              { title: 'Claude Aubry — Blog Agile de référence (FR)', url: 'https://www.aubryconseil.com/' },
              { title: 'Agile France — Communauté & Ressources', url: 'https://agile-france.org/' },
              { title: 'Atlassian — Guide du Backlog Refinement (FR)', url: 'https://www.atlassian.com/fr/agile/scrum/backlog-refinement' }
            ],
            en: [
              { title: 'Scrum.org — Official Scrum Guide', url: 'https://scrumguides.org/scrum-guide.html' },
              { title: 'Roman Pichler — 10 Tips for Backlog Grooming', url: 'https://www.romanpichler.com/blog/10-tips-grooming-the-product-backlog/' },
              { title: 'Mountain Goat Software — User Stories Applied', url: 'https://www.mountaingoatsoftware.com/agile/user-stories' },
              { title: 'Atlassian — Backlog Refinement Guide', url: 'https://www.atlassian.com/agile/scrum/backlog-refinement' }
            ],
            de: [
              { title: 'Scrum Guide — deutsche Version', url: 'https://scrumguides.org/docs/scrumguide/v2020/2020-Scrum-Guide-German.pdf' },
              { title: 't2informatik — Backlog Refinement erklärt', url: 'https://t2informatik.de/wissen-kompakt/backlog-refinement/' },
              { title: 'IT-Agile — Scrum & Product Backlog', url: 'https://www.it-agile.de/agiles-wissen/scrum/product-backlog/' },
              { title: 'Agile Scrum Group — User Stories (DE)', url: 'https://www.agilescrumgroup.de/user-story/' }
            ]
          }
        },
        {
          id: 'discovery',
          title: 'Product Discovery',
          importance: 'must',
          description: 'Techniques de recherche utilisateur, prototypage rapide, tests d\'hypothèses et méthodes lean pour valider les problèmes avant de construire des solutions coûteuses.',
          resources: {
            fr: [
              { title: 'Teresa Torres — Continuous Discovery Habits (FR résumé)', url: 'https://www.producttalk.org/2021/08/product-discovery/' },
              { title: 'La Combe du Lion Vert — Design Thinking FR', url: 'https://www.lacombedulionvert.fr/' },
              { title: 'Lean Institute France', url: 'https://www.lean.fr/' },
              { title: 'Strategyzer — Value Proposition Canvas (FR)', url: 'https://www.strategyzer.com/canvas/value-proposition-canvas' }
            ],
            en: [
              { title: 'Teresa Torres — Continuous Discovery Habits', url: 'https://www.producttalk.org/2021/08/product-discovery/' },
              { title: 'SVPG — Marty Cagan Articles', url: 'https://www.svpg.com/articles/' },
              { title: 'IDEO — Design Thinking', url: 'https://designthinking.ideo.com/' },
              { title: 'Strategyzer — Value Proposition Canvas', url: 'https://www.strategyzer.com/canvas/value-proposition-canvas' }
            ],
            de: [
              { title: 't2informatik — Product Discovery erklärt', url: 'https://t2informatik.de/wissen-kompakt/product-discovery/' },
              { title: 'agile42 — Design Thinking & Discovery', url: 'https://www.agile42.com/de/blog/' },
              { title: 'Roman Pichler — Produkt-Strategie (DE)', url: 'https://www.romanpichler.com/de/' },
              { title: 'Lean Institut Deutschland', url: 'https://www.lean-institut.de/' }
            ]
          }
        },
        {
          id: 'okr',
          title: 'Métriques & OKR',
          importance: 'must',
          description: 'Conception d\'indicateurs de performance pertinents, mise en place du framework OKR, suivi des métriques produit et alignement entre objectifs business et livraisons d\'équipe.',
          resources: {
            fr: [
              { title: 'Whatmatters — Guide OKR en français', url: 'https://www.whatmatters.com/fr/' },
              { title: 'HBR France — Mesurer ce qui compte', url: 'https://www.hbrfrance.fr/' },
              { title: 'Atlassian — OKR : le guide complet (FR)', url: 'https://www.atlassian.com/fr/agile/agile-at-scale/okr' },
              { title: 'Amplitude — Guide Métriques Produit', url: 'https://amplitude.com/blog/product-metrics' }
            ],
            en: [
              { title: 'Whatmatters — Measure What Matters (John Doerr)', url: 'https://www.whatmatters.com/the-book' },
              { title: 'Google re:Work — Set Goals with OKRs', url: 'https://rework.withgoogle.com/guides/set-goals-with-okrs/' },
              { title: 'Amplitude — Product Metrics Guide', url: 'https://amplitude.com/blog/product-metrics' },
              { title: 'Lenny\'s Newsletter — Good Product Metrics', url: 'https://www.lennysnewsletter.com/p/good-metrics' }
            ],
            de: [
              { title: 'Whatmatters — OKR auf Deutsch', url: 'https://www.whatmatters.com/de/' },
              { title: 't3n — OKR Framework Erklärung', url: 'https://t3n.de/news/okr-objectives-key-results-1023764/' },
              { title: 'Haufe — OKR-Methode in der Praxis', url: 'https://www.haufe.de/personal/hr-management/okr-methode_80_500400.html' },
              { title: 'Harvard Business Manager — OKR (DE)', url: 'https://www.manager-magazin.de/harvard/' }
            ]
          }
        },
        {
          id: 'stakeholders',
          title: 'Gestion des parties prenantes',
          importance: 'must',
          description: 'Identification, cartographie et engagement des stakeholders, techniques de communication et de négociation pour aligner des parties prenantes aux intérêts divergents.',
          resources: {
            fr: [
              { title: 'PMI France — Gestion des Parties Prenantes', url: 'https://www.pmi-france.org/' },
              { title: 'HBR France — Manager vers le haut', url: 'https://www.hbrfrance.fr/management' },
              { title: 'Roman Pichler — Carte des Parties Prenantes (FR)', url: 'https://www.romanpichler.com/tools/the-stakeholder-map/' },
              { title: 'Lean Institute France — Alignement', url: 'https://www.lean.fr/ressources/' }
            ],
            en: [
              { title: 'Roman Pichler — The Stakeholder Map', url: 'https://www.romanpichler.com/tools/the-stakeholder-map/' },
              { title: 'Mind Tools — Stakeholder Analysis', url: 'https://www.mindtools.com/aol0rms/stakeholder-analysis' },
              { title: 'HBR — The Right Way to Manage Stakeholders', url: 'https://hbr.org/2014/01/the-right-way-to-manage-stakeholders' },
              { title: 'PMI — Stakeholder Engagement', url: 'https://www.pmi.org/learning/library/stakeholder-management-task-project-success-7736' }
            ],
            de: [
              { title: 'Projektmagazin — Stakeholder-Analyse', url: 'https://www.projektmagazin.de/methoden/stakeholderanalyse' },
              { title: 'PMI DACH — Stakeholder Management', url: 'https://www.pmi-dach.org/' },
              { title: 't2informatik — Stakeholder Map erklärt', url: 'https://t2informatik.de/wissen-kompakt/stakeholder-analyse/' },
              { title: 'Haufe — Stakeholder Management Praxis', url: 'https://www.haufe.de/personal/hr-management/stakeholder-management_80_487688.html' }
            ]
          }
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
          description: 'Compréhension approfondie de la directive CSRD et des normes ESRS, double matérialité, obligations de reporting et implications pratiques pour les équipes produit.',
          resources: {
            fr: [
              { title: 'EFRAG — Normes ESRS (version française)', url: 'https://www.efrag.org/sustainability-reporting' },
              { title: 'AMF — CSRD : obligations de reporting', url: 'https://www.amf-france.org/fr/actualites-et-publications/dossiers-thematiques/finance-durable' },
              { title: 'Ministère de l\'Économie — CSRD en France', url: 'https://www.tresor.economie.gouv.fr/Articles/2023/12/22/directive-csrd' },
              { title: 'ORSE — Guide pratique CSRD', url: 'https://www.orse.org/' }
            ],
            en: [
              { title: 'EFRAG — ESRS Official Standards', url: 'https://www.efrag.org/sustainability-reporting' },
              { title: 'European Commission — CSRD Overview', url: 'https://finance.ec.europa.eu/capital-markets-union-and-financial-markets/company-reporting-and-auditing/company-reporting/corporate-sustainability-reporting_en' },
              { title: 'KPMG — Practical Guide to CSRD', url: 'https://kpmg.com/xx/en/home/insights/2022/06/eu-corporate-sustainability-reporting-directive.html' },
              { title: 'Deloitte — ESRS Standards Overview', url: 'https://www.deloitte.com/global/en/services/audit-assurance/perspectives/esrs-overview.html' }
            ],
            de: [
              { title: 'DRSC — ESRS auf Deutsch', url: 'https://www.drsc.de/themen/nachhaltigkeitsberichterstattung/' },
              { title: 'PwC Deutschland — CSRD Leitfaden', url: 'https://www.pwc.de/de/nachhaltigkeit/csrd-leitfaden.html' },
              { title: 'KPMG Deutschland — CSRD Praxisleitfaden', url: 'https://kpmg.com/de/de/home/themen/2023/01/csrd.html' },
              { title: 'BaFin — Nachhaltigkeitsberichterstattung', url: 'https://www.bafin.de/DE/Aufsicht/Nachhaltigkeitsrisiken/nachhaltigkeitsrisiken_node.html' }
            ]
          }
        },
        {
          id: 'esg-data',
          title: 'Données & Indicateurs ESG',
          importance: 'must',
          description: 'Collecte, qualité et gouvernance des données ESG, KPIs Scope 1/2/3, méthodologies de mesure carbone et outils de reporting non-financier.',
          resources: {
            fr: [
              { title: 'Novethic — Base de données ESG & Finance durable', url: 'https://www.novethic.fr/' },
              { title: 'FIR — Forum pour l\'Investissement Responsable', url: 'https://www.fir-pri.fr/' },
              { title: 'ADEME — Données environnementales & Bilan Carbone', url: 'https://www.ademe.fr/entreprises-monde-agricole/reduire-impacts/produire-autrement/bilan-carbone/' },
              { title: 'GRI Standards — version française disponible', url: 'https://www.globalreporting.org/how-to-use-the-gri-standards/gri-standards-french-translations/' }
            ],
            en: [
              { title: 'GRI — Global Reporting Initiative Standards', url: 'https://www.globalreporting.org/standards/' },
              { title: 'TCFD — Task Force on Climate Disclosures', url: 'https://www.fsb-tcfd.org/recommendations/' },
              { title: 'CDP — Carbon Disclosure Project', url: 'https://www.cdp.net/en' },
              { title: 'Science Based Targets Initiative', url: 'https://sciencebasedtargets.org/' },
              { title: 'SASB Standards by Sector', url: 'https://sasb.org/standards/' }
            ],
            de: [
              { title: 'DVFA — ESG-Daten & Methodik', url: 'https://www.dvfa.de/themen/esg/' },
              { title: 'Umweltbundesamt — Klimaindikatoren & Daten', url: 'https://www.umweltbundesamt.de/daten/klima' },
              { title: 'Forum Nachhaltige Geldanlagen — ESG-Standards', url: 'https://www.forum-ng.org/' },
              { title: 'GRI Standards — deutsche Übersetzungen', url: 'https://www.globalreporting.org/how-to-use-the-gri-standards/gri-standards-german-translations/' }
            ]
          }
        },
        {
          id: 'regulation',
          title: 'Écosystème réglementaire',
          importance: 'must',
          description: 'Vue d\'ensemble des réglementations ESG-finance en Europe : SFDR, Taxonomie UE, PAI, Article 29 LEC, et veille sur les évolutions à anticiper.',
          resources: {
            fr: [
              { title: 'AMF — Finance durable : SFDR & Taxonomie', url: 'https://www.amf-france.org/fr/espace-epargnants/comprendre-les-produits-financiers/investissement-durable' },
              { title: 'ACPR — Risques Climatiques & Finance', url: 'https://acpr.banque-france.fr/risques-climatiques' },
              { title: 'FIR — Veille réglementaire ISR', url: 'https://www.fir-pri.fr/ressources/reglementation/' },
              { title: 'Novethic — Décryptage réglementaire', url: 'https://www.novethic.fr/finance-durable/reglementation/' }
            ],
            en: [
              { title: 'EU Taxonomy Navigator — Official Tool', url: 'https://ec.europa.eu/sustainable-finance-taxonomy/' },
              { title: 'PRI — SFDR Explained', url: 'https://www.unpri.org/sfdr' },
              { title: 'ESG Today — Regulatory News', url: 'https://www.esgtoday.com/' },
              { title: 'European Commission — Sustainable Finance', url: 'https://finance.ec.europa.eu/sustainable-finance_en' }
            ],
            de: [
              { title: 'BaFin — Nachhaltigkeit im Finanzsektor', url: 'https://www.bafin.de/DE/Aufsicht/Nachhaltigkeitsrisiken/nachhaltigkeitsrisiken_node.html' },
              { title: 'Deutsche Bundesbank — Klimarisiken', url: 'https://www.bundesbank.de/de/aufgaben/themen/klimawandel-und-nachhaltigkeit' },
              { title: 'Forum Nachhaltige Geldanlagen — Regulierung', url: 'https://www.forum-ng.org/themen/regulierung/' },
              { title: 'PwC Deutschland — EU-Taxonomie Leitfaden', url: 'https://www.pwc.de/de/nachhaltigkeit/eu-taxonomie.html' }
            ]
          }
        },
        {
          id: 'sector',
          title: 'Expertise sectorielle',
          importance: 'bonus',
          description: 'Enjeux ESG spécifiques par secteur (finance, immobilier, industrie), benchmarks sectoriels, identification des risques de transition et des opportunités de création de valeur durable.',
          resources: {
            fr: [
              { title: 'Novethic — Analyses sectorielles ESG', url: 'https://www.novethic.fr/entreprises/' },
              { title: 'ORSE — Enjeux ESG par secteur', url: 'https://www.orse.org/nos-travaux/' },
              { title: 'La Fabrique Écologique — Rapports sectoriels', url: 'https://www.lafabriqueecologique.fr/' },
              { title: 'FIR — Études & Positions sectorielles', url: 'https://www.fir-pri.fr/ressources/' }
            ],
            en: [
              { title: 'MSCI ESG Research', url: 'https://www.msci.com/our-solutions/esg-investing' },
              { title: 'Sustainalytics — ESG Risk Ratings', url: 'https://www.sustainalytics.com/' },
              { title: 'Bloomberg ESG Data Hub', url: 'https://www.bloomberg.com/professional/solution/esg-data/' },
              { title: 'SASB — Industry-Specific Standards', url: 'https://sasb.org/standards/' }
            ],
            de: [
              { title: 'ISS ESG — Sektoranalysen', url: 'https://www.issgovernance.com/esg/' },
              { title: 'DVFA — Sektorspezifische ESG-Analyse', url: 'https://www.dvfa.de/themen/esg/esg-research/' },
              { title: 'Union Investment — ESG Sektor Studien', url: 'https://www.union-investment.de/startseite/nachhaltigkeit' },
              { title: 'Bundesumweltamt — Branchenspezifische Umweltdaten', url: 'https://www.umweltbundesamt.de/themen/wirtschaft-konsum/wirtschaft-umwelt' }
            ]
          }
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
          description: 'Compréhension des modèles de langage large, prompt engineering, cas d\'usage métier de l\'IA générative dans l\'ESG, limitations et gestion des hallucinations côté produit.',
          resources: {
            fr: [
              { title: 'INRIA — Intelligence Artificielle : ressources pédagogiques', url: 'https://www.inria.fr/fr/intelligence-artificielle' },
              { title: 'CNIL — Intelligence artificielle : guide pratique', url: 'https://www.cnil.fr/fr/intelligence-artificielle' },
              { title: 'Collège de France — Cours IA (Yann LeCun)', url: 'https://www.college-de-france.fr/chaire/yann-lecun-informatique-et-sciences-numeriques' },
              { title: 'France Stratégie — Rapports IA & société', url: 'https://www.strategie.gouv.fr/publications/lintelligence-artificielle' }
            ],
            en: [
              { title: 'Anthropic — Claude Documentation', url: 'https://docs.anthropic.com/' },
              { title: 'OpenAI — Prompt Engineering Guide', url: 'https://platform.openai.com/docs/guides/prompt-engineering' },
              { title: 'DeepLearning.AI — Short Courses (free)', url: 'https://www.deeplearning.ai/short-courses/' },
              { title: 'Hugging Face — NLP Course (free)', url: 'https://huggingface.co/learn/nlp-course/' }
            ],
            de: [
              { title: 'DFKI — KI-Forschung & Anwendung', url: 'https://www.dfki.de/web/forschung' },
              { title: 'Fraunhofer KI — Leitfaden Generative KI', url: 'https://www.ki.fraunhofer.de/' },
              { title: 'KI Bundesverband — Praxiswissen GenAI', url: 'https://ki-verband.de/ki-wissen/' },
              { title: 'Bitkom — Leitfaden Künstliche Intelligenz', url: 'https://www.bitkom.org/Themen/Technologien-Software/Kuenstliche-Intelligenz' }
            ]
          }
        },
        {
          id: 'data-platform',
          title: 'Plateformes de données & Intégration',
          importance: 'must',
          description: 'Architecture data moderne (lakehouse, API REST, ETL/ELT), compréhension des pipelines de données ESG pour piloter des équipes techniques et rédiger des critères d\'acceptance pertinents.',
          resources: {
            fr: [
              { title: 'Datactivist — Open Data & Architecture Données', url: 'https://datactivist.coop/fr/ressources/' },
              { title: 'INRIA — Science des données', url: 'https://www.inria.fr/fr/sciences-des-donnees' },
              { title: 'dbt Learn — Cours gratuits (EN avec sous-titres)', url: 'https://courses.getdbt.com/' },
              { title: 'Towards Data Science — Architecture moderne', url: 'https://towardsdatascience.com/' }
            ],
            en: [
              { title: 'dbt — Official Learning Courses (free)', url: 'https://courses.getdbt.com/' },
              { title: 'Databricks — Data + AI Summit Talks', url: 'https://www.databricks.com/dataaisummit' },
              { title: 'Towards Data Science — Modern Data Stack', url: 'https://towardsdatascience.com/' },
              { title: 'Mode Analytics Blog — Data Architecture', url: 'https://mode.com/blog/' }
            ],
            de: [
              { title: 't3n — Data Engineering & Datenplattformen', url: 'https://t3n.de/tag/data-engineering/' },
              { title: 'heise Developer — Big Data Architektur', url: 'https://www.heise.de/developer/thema/big-data' },
              { title: 'Bitkom — Leitfaden Datenplattformen', url: 'https://www.bitkom.org/Themen/Technologien-Software/Big-Data' },
              { title: 'Fraunhofer — Data Spaces & Integration', url: 'https://www.fraunhofer.de/de/forschung/aktuelle-forschung/big-data-und-kuenstliche-intelligenz.html' }
            ]
          }
        },
        {
          id: 'ai-governance',
          title: 'Gouvernance IA & Fiabilité',
          importance: 'must',
          description: 'EU AI Act et classification des systèmes à risque, principes d\'IA responsable, détection des biais algorithmiques et stratégies pour construire la confiance utilisateur.',
          resources: {
            fr: [
              { title: 'CNIL — IA & Protection des données : guides officiels', url: 'https://www.cnil.fr/fr/intelligence-artificielle' },
              { title: 'Conseil National du Numérique — Rapport IA', url: 'https://cnnumerique.fr/intelligence-artificielle' },
              { title: 'France Stratégie — IA responsable', url: 'https://www.strategie.gouv.fr/publications/intelligence-artificielle-0' },
              { title: 'EU AI Act — Texte officiel & FAQ', url: 'https://artificialintelligenceact.eu/' }
            ],
            en: [
              { title: 'EU AI Act — Annotated Official Text', url: 'https://artificialintelligenceact.eu/' },
              { title: 'NIST — AI Risk Management Framework', url: 'https://www.nist.gov/artificial-intelligence/ai-risk-management-framework' },
              { title: 'Partnership on AI — Resources', url: 'https://partnershiponai.org/resources/' },
              { title: 'Montreal AI Ethics Institute', url: 'https://montrealethics.ai/' }
            ],
            de: [
              { title: 'BfDI — KI-Systeme & Datenschutz', url: 'https://www.bfdi.bund.de/DE/Fachthemen/Inhalte/Technik/KuenstlicheIntelligenz/KuenstlicheIntelligenz_node.html' },
              { title: 'BMWK — KI-Strategie der Bundesregierung', url: 'https://www.bmwk.de/Redaktion/DE/Artikel/Digitale-Welt/ki-strategie.html' },
              { title: 'KI Bundesverband — AI Act Leitfaden', url: 'https://ki-verband.de/ai-act/' },
              { title: 'Fraunhofer — Vertrauenswürdige KI', url: 'https://www.ki.fraunhofer.de/de/themen/vertrauenswuerdige-ki.html' }
            ]
          }
        },
        {
          id: 'ai-tools',
          title: 'Outils IA & Évaluation SaaS',
          importance: 'bonus',
          description: 'Panorama des solutions IA du marché, méthodologie d\'évaluation et de sélection de vendors IA/ESG, construction de business cases et gestion de pilotes.',
          resources: {
            fr: [
              { title: 'Siècle Digital — Panorama IA & outils', url: 'https://siecledigital.fr/category/intelligence-artificielle/' },
              { title: 'FrenchWeb — Écosystème IA français', url: 'https://www.frenchweb.fr/tag/intelligence-artificielle' },
              { title: 'Journal du Net — Comparatif outils IA', url: 'https://www.journaldunet.com/intelligence-artificielle/' },
              { title: 'Usine Digitale — Solutions IA entreprise', url: 'https://www.usine-digitale.fr/intelligence-artificielle/' }
            ],
            en: [
              { title: 'G2 — AI Software Reviews & Rankings', url: 'https://www.g2.com/categories/artificial-intelligence' },
              { title: 'Gartner — AI Magic Quadrant & Reports', url: 'https://www.gartner.com/en/information-technology/insights/artificial-intelligence' },
              { title: 'There\'s An AI For That', url: 'https://theresanaiforthat.com/' },
              { title: 'Product Hunt — AI Tools Discovery', url: 'https://www.producthunt.com/' }
            ],
            de: [
              { title: 't3n — KI-Tools & Software-Vergleich', url: 'https://t3n.de/tag/ki-tools/' },
              { title: 'heise online — KI-Software Tests', url: 'https://www.heise.de/thema/KI-Tools' },
              { title: 'Bitkom — AI Tool Landscape Deutschland', url: 'https://www.bitkom.org/Themen/Technologien-Software/Kuenstliche-Intelligenz/KI-Tools' },
              { title: 'Gründerszene — KI-Startups & Tools', url: 'https://www.gruenderszene.de/tag/kuenstliche-intelligenz' }
            ]
          }
        }
      ]
    }
  ]
};
