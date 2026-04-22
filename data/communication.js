/* Hub data: Communication & Influence — trilingual (fr/en/de) */
window.HUB_DATA = {
  id: 'communication',
  title: {
    fr: 'Communication & Influence',
    en: 'Communication & Influence',
    de: 'Kommunikation & Einfluss'
  },
  subtitle: {
    fr: 'Communiquer avec impact dans des environnements multiculturels et pluridisciplinaires — en français, anglais et allemand',
    en: 'Communicate with impact in multicultural and cross-disciplinary environments — in French, English and German',
    de: 'Wirkungsvoll kommunizieren in multikulturellen und interdisziplinären Umgebungen — auf Französisch, Englisch und Deutsch'
  },

  pillars: [

    /* ── PILLAR 1 ─────────────────────────────────────────── */
    {
      id: 'language-tools',
      title: { fr: 'Outils linguistiques', en: 'Language Tools', de: 'Sprachliche Werkzeuge' },
      icon: '📖',
      skills: [
        {
          id: 'vocab',
          title: {
            fr: 'Vocabulaire professionnel (PO / ESG / IA / GEO)',
            en: 'Professional Vocabulary (PO / ESG / AI / GEO)',
            de: 'Fachvokabular (PO / ESG / KI / GEO)'
          },
          importance: 'must',
          description: {
            fr: 'Maîtrise du lexique métier dans vos quatre domaines d\'expertise : termes Agile/PO, réglementation ESG (double matérialité, ESRS, Scope 3), IA générative (RAG, hallucination) et GEO (entités, AI Overviews). Un vocabulaire précis renforce votre crédibilité face aux parties prenantes techniques ou réglementaires.',
            en: 'Master the professional lexicon across your four areas of expertise: Agile/PO terms, ESG regulation (double materiality, ESRS, Scope 3), generative AI (RAG, hallucination) and GEO (entities, AI Overviews). Precise vocabulary builds credibility with technical or regulatory stakeholders.',
            de: 'Beherrschung des Fachlexikons in Ihren vier Expertenbereichen: Agile/PO-Begriffe, ESG-Regulierung (doppelte Wesentlichkeit, ESRS, Scope 3), generative KI (RAG, Halluzination) und GEO (Entitäten, AI Overviews). Präzises Vokabular stärkt Ihre Glaubwürdigkeit bei technischen oder regulatorischen Stakeholdern.'
          },
          resources: {
            fr: [
              { title: 'Grand Dictionnaire Terminologique — OQLF (référence FR)', url: 'https://vitrinelinguistique.oqlf.gouv.qc.ca/' },
              { title: 'IATE — Base terminologique multilingue de l\'UE', url: 'https://iate.europa.eu/' },
              { title: 'Atilf — Trésor de la Langue Française informatisé', url: 'https://www.atilf.fr/' },
              { title: 'Linguee — Traductions en contexte (FR)', url: 'https://www.linguee.fr/' }
            ],
            en: [
              { title: 'IATE — EU Multilingual Terminology Database', url: 'https://iate.europa.eu/' },
              { title: 'Merriam-Webster — Business & Professional Dictionary', url: 'https://www.merriam-webster.com/' },
              { title: 'Cambridge Business English Dictionary', url: 'https://dictionary.cambridge.org/dictionary/english/' },
              { title: 'Google ML Glossary — AI/ML Terms', url: 'https://developers.google.com/machine-learning/glossary' }
            ],
            de: [
              { title: 'Duden — Wörterbuch & Fachbegriffe', url: 'https://www.duden.de/' },
              { title: 'IATE — Mehrsprachige EU-Terminologie', url: 'https://iate.europa.eu/' },
              { title: 'Goethe-Institut — Wörterbücher & Sprachressourcen', url: 'https://www.goethe.de/de/spr/ueb/woe.html' },
              { title: 'Linguee — Übersetzungen im Kontext', url: 'https://www.linguee.de/' }
            ]
          }
        },
        {
          id: 'business-writing',
          title: {
            fr: 'Rédaction professionnelle',
            en: 'Business Writing',
            de: 'Business Writing'
          },
          importance: 'must',
          description: {
            fr: 'Rédiger des documents clairs, concis et orientés action : emails, notes de synthèse, présentations et user stories. La rédaction professionnelle exige de maîtriser les conventions propres à chaque langue (niveau de formalité, structure de phrase, densité d\'information).',
            en: 'Write clear, concise and action-oriented documents: emails, executive summaries, presentations and user stories. Multilingual business writing requires mastering conventions specific to each language — formality level, sentence structure, information density.',
            de: 'Klare, präzise und handlungsorientierte Dokumente verfassen: E-Mails, Zusammenfassungen, Präsentationen und User Stories. Business Writing auf Deutsch erfordert die Beherrschung sprachspezifischer Konventionen — Formalitätsniveau, Satzstruktur, Informationsdichte.'
          },
          resources: {
            fr: [
              { title: 'Hachette Éducation — Rédiger en entreprise', url: 'https://www.hachetteducation.com/' },
              { title: 'CNFPT — Guide de la rédaction administrative', url: 'https://www.cnfpt.fr/' },
              { title: 'Sciences Po — Writing Center : guide de rédaction', url: 'https://www.sciencespo.fr/bibliotheque/' },
              { title: 'Projet Voltaire — Orthographe & rédaction pro', url: 'https://www.projet-voltaire.fr/' }
            ],
            en: [
              { title: 'HBR — Guide to Better Business Writing', url: 'https://hbr.org/product/hbr-guide-to-better-business-writing/11308E-KND-ENG' },
              { title: 'Google Technical Writing Courses (free)', url: 'https://developers.google.com/tech-writing' },
              { title: 'Plain Language Guidelines — US Government', url: 'https://www.plainlanguage.gov/guidelines/' },
              { title: 'Grammarly Blog — Business Writing Tips', url: 'https://www.grammarly.com/blog/business-writing/' }
            ],
            de: [
              { title: 'Duden Ratgeber — Geschäftsbriefe & E-Mails', url: 'https://www.duden.de/ratgeber' },
              { title: 'Haufe — Professionelles Schreiben im Beruf', url: 'https://www.haufe.de/personal/haufe-personal-office-platin/professionell-schreiben_idesk_PI42323_HI523617.html' },
              { title: 'IHK — Leitfaden Geschäftskommunikation', url: 'https://www.ihk.de/' },
              { title: 'Write the Docs — Documentation Guide (DE)', url: 'https://www.writethedocs.org/guide/' }
            ]
          }
        },
        {
          id: 'terminology',
          title: {
            fr: 'Gestion de la terminologie multilingue',
            en: 'Cross-language Terminology Management',
            de: 'Mehrsprachiges Terminologiemanagement'
          },
          importance: 'bonus',
          description: {
            fr: 'Construire et maintenir un glossaire personnel trilingue (FR/EN/DE) pour vos domaines d\'expertise. La cohérence terminologique évite les malentendus dans les environnements internationaux et facilite la traduction de documents techniques.',
            en: 'Build and maintain a personal trilingual glossary (FR/EN/DE) for your domains of expertise. Terminological consistency prevents misunderstandings in international settings and facilitates the translation of technical documents.',
            de: 'Aufbau und Pflege eines persönlichen dreisprachigen Glossars (FR/EN/DE) für Ihre Fachbereiche. Terminologische Konsistenz verhindert Missverständnisse in internationalen Umgebungen und erleichtert die Übersetzung technischer Dokumente.'
          },
          resources: {
            fr: [
              { title: 'TERMIUM Plus — Banque de données terminologiques (CA)', url: 'https://www.btb.termiumplus.gc.ca/' },
              { title: 'IATE — Terminologie UE multilingue', url: 'https://iate.europa.eu/' },
              { title: 'ProZ — Communauté terminologie & traduction', url: 'https://www.proz.com/term-search' },
              { title: 'Linguee — Base de données contextualisée', url: 'https://www.linguee.fr/' }
            ],
            en: [
              { title: 'TERMIUM Plus — Canadian Terminology Bank', url: 'https://www.btb.termiumplus.gc.ca/' },
              { title: 'IATE — EU Terminology Database', url: 'https://iate.europa.eu/' },
              { title: 'ProZ — Terminology & Translation Community', url: 'https://www.proz.com/term-search' },
              { title: 'Phrase (Memsource) — TMS & Terminology', url: 'https://phrase.com/blog/posts/what-is-a-translation-management-system/' }
            ],
            de: [
              { title: 'IATE — EU-Terminologiedatenbank', url: 'https://iate.europa.eu/' },
              { title: 'Deutsche Terminologie-Gesellschaft (DTT)', url: 'https://www.dttev.org/' },
              { title: 'Linguee — Kontextuelle Übersetzungen (DE)', url: 'https://www.linguee.de/' },
              { title: 'Trados — Terminologieverwaltung (DE)', url: 'https://www.trados.com/de/products/multiterm/' }
            ]
          }
        }
      ]
    },

    /* ── PILLAR 2 ─────────────────────────────────────────── */
    {
      id: 'structured-expression',
      title: { fr: 'Expression structurée', en: 'Structured Expression', de: 'Strukturierter Ausdruck' },
      icon: '🏗️',
      skills: [
        {
          id: 'pyramid',
          title: {
            fr: 'Principe de la Pyramide (Barbara Minto)',
            en: 'Pyramid Principle (Barbara Minto)',
            de: 'Pyramidenprinzip (Barbara Minto)'
          },
          importance: 'must',
          description: {
            fr: 'La méthode MECE (Mutually Exclusive, Collectively Exhaustive) de Barbara Minto structure tout message en partant de la conclusion, puis en soutenant avec des arguments groupés logiquement. Incontournable pour les recommandations produit, les notes de direction et les emails complexes.',
            en: 'Barbara Minto\'s MECE method structures any message by leading with the conclusion, then supporting it with logically grouped arguments. Essential for product recommendations, executive memos and complex emails.',
            de: 'Barbara Mintos MECE-Methode strukturiert jede Botschaft, indem sie mit der Schlussfolgerung beginnt und diese mit logisch gruppierten Argumenten unterstützt. Unentbehrlich für Produktempfehlungen, Führungsmemos und komplexe E-Mails.'
          },
          resources: {
            fr: [
              { title: 'Barbara Minto — Le principe de la pyramide (édition FR)', url: 'https://www.barbaraminto.com/' },
              { title: 'HBR France — La communication structurée', url: 'https://www.hbrfrance.fr/communication' },
              { title: 'Dunod — Communication professionnelle', url: 'https://www.dunod.com/entreprise-economie/communication-professionnelle' },
              { title: 'Speakmentor — Pyramide de Minto expliquée (FR)', url: 'https://speakmentor.com/the-minto-pyramid-principle/' }
            ],
            en: [
              { title: 'Barbara Minto — The Pyramid Principle (official)', url: 'https://www.barbaraminto.com/' },
              { title: 'McKinsey — Structured Thinking & Communication', url: 'https://www.mckinsey.com/featured-insights/mckinsey-explainers' },
              { title: 'HBR — Make Your Case in 30 Seconds', url: 'https://hbr.org/2013/09/make-your-case-in-30-seconds' },
              { title: 'Speakmentor — Minto Pyramid Explained', url: 'https://speakmentor.com/the-minto-pyramid-principle/' }
            ],
            de: [
              { title: 'Barbara Minto — Das Prinzip der Pyramide (DE Ausgabe)', url: 'https://www.barbaraminto.com/' },
              { title: 'Harvard Business Manager — Strukturierte Kommunikation', url: 'https://www.harvardbusinessmanager.de/' },
              { title: 'Gabler Wirtschaftslexikon — MECE-Prinzip', url: 'https://wirtschaftslexikon.gabler.de/' },
              { title: 'McKinsey Deutschland — Strukturiertes Denken', url: 'https://www.mckinsey.com/de' }
            ]
          }
        },
        {
          id: 'scqa',
          title: {
            fr: 'Cadre SCQA',
            en: 'SCQA Framework',
            de: 'SCQA-Framework'
          },
          importance: 'must',
          description: {
            fr: 'Situation — Complication — Question — Réponse : un cadre narratif pour introduire tout problème complexe de façon logique. Utilisé par McKinsey pour structurer des présentations stratégiques, il s\'applique aussi aux briefs produit et aux proposals.',
            en: 'Situation — Complication — Question — Answer: a narrative framework for introducing any complex problem logically and engagingly. Used by McKinsey for strategic presentations, it also applies to product briefs and proposals.',
            de: 'Situation — Komplikation — Frage — Antwort: ein narrativer Rahmen zur logischen Einführung komplexer Probleme. Von McKinsey für strategische Präsentationen genutzt, eignet er sich auch für Produktbriefings und Proposals.'
          },
          resources: {
            fr: [
              { title: 'McKinsey — Résoudre des problèmes complexes (FR)', url: 'https://www.mckinsey.com/fr' },
              { title: 'HBR France — L\'art du résumé exécutif', url: 'https://www.hbrfrance.fr/' },
              { title: 'Ethos3 — Framework SCQA expliqué', url: 'https://ethos3.com/scqa-framework/' },
              { title: 'Duarte — Storytelling pour présentations', url: 'https://www.duarte.com/resources/' }
            ],
            en: [
              { title: 'McKinsey — Problem Solving with SCQA', url: 'https://www.mckinsey.com/capabilities/strategy-and-corporate-finance/our-insights' },
              { title: 'Ethos3 — SCQA Storytelling Framework', url: 'https://ethos3.com/scqa-framework/' },
              { title: 'HBR — The Art of the Executive Summary', url: 'https://hbr.org/topic/subject/communication' },
              { title: 'Duarte — Presentation Storytelling Resources', url: 'https://www.duarte.com/resources/' }
            ],
            de: [
              { title: 'McKinsey Deutschland — Problemlösung SCQA', url: 'https://www.mckinsey.com/de' },
              { title: 'Harvard Business Manager — Präsentationsstruktur', url: 'https://www.harvardbusinessmanager.de/' },
              { title: 'Gabler — Kommunikationsmodelle & Frameworks', url: 'https://wirtschaftslexikon.gabler.de/' },
              { title: 'Haufe — Überzeugend präsentieren', url: 'https://www.haufe.de/personal/hr-management/praesentationen_80_26674.html' }
            ]
          }
        },
        {
          id: 'written-comms',
          title: {
            fr: 'Communication écrite (emails, docs, user stories)',
            en: 'Written Communication (Email, Docs, User Stories)',
            de: 'Schriftliche Kommunikation (E-Mails, Dokumente, User Stories)'
          },
          importance: 'must',
          description: {
            fr: 'Rédiger des user stories impactantes, des emails de cadrage convaincants et des documents de décision lisibles. Chaque format a ses propres codes : INVEST pour les user stories, la règle des 5W pour les emails, la structure ADR pour les décisions techniques.',
            en: 'Write impactful user stories, convincing framing emails and readable decision documents. Each format has its own conventions: INVEST for user stories, the 5W rule for context emails, ADR structure for architecture decisions.',
            de: 'Wirkungsvolle User Stories, überzeugende E-Mails und lesbare Entscheidungsdokumente verfassen. Jedes Format hat seine Konventionen: INVEST für User Stories, die 5W-Regel für E-Mails, ADR-Struktur für Architekturentscheidungen.'
          },
          resources: {
            fr: [
              { title: 'Claude Aubry — Rédiger de bonnes user stories', url: 'https://www.aubryconseil.com/post/des-user-stories/' },
              { title: 'Agile France — Guide rédaction user stories', url: 'https://agile-france.org/' },
              { title: 'HBR France — Emails professionnels efficaces', url: 'https://www.hbrfrance.fr/communication' },
              { title: 'Write the Docs — Documentation Guide', url: 'https://www.writethedocs.org/guide/' }
            ],
            en: [
              { title: 'Mountain Goat Software — Writing Good User Stories', url: 'https://www.mountaingoatsoftware.com/agile/user-stories' },
              { title: 'HBR — Write Email with Military Precision', url: 'https://hbr.org/2016/09/how-to-write-email-with-military-precision' },
              { title: 'Write the Docs — Documentation Best Practices', url: 'https://www.writethedocs.org/guide/' },
              { title: 'Cognitect — Documenting Architecture Decisions (ADR)', url: 'https://cognitect.com/blog/2011/11/15/documenting-architecture-decisions' }
            ],
            de: [
              { title: 't2informatik — User Stories schreiben (DE)', url: 'https://t2informatik.de/wissen-kompakt/user-story/' },
              { title: 'Duden Praxis — E-Mails professionell verfassen', url: 'https://www.duden.de/ratgeber/schreiben-im-beruf' },
              { title: 'IT-Agile — Akzeptanzkriterien & User Stories', url: 'https://www.it-agile.de/agiles-wissen/' },
              { title: 'Haufe — Professionelle Geschäfts-E-Mails', url: 'https://www.haufe.de/personal/hr-management/e-mail-im-beruf_80_26682.html' }
            ]
          }
        },
        {
          id: 'data-storytelling',
          title: {
            fr: 'Data Storytelling',
            en: 'Data Storytelling',
            de: 'Data Storytelling'
          },
          importance: 'bonus',
          description: {
            fr: 'Transformer des données brutes (KPIs ESG, métriques produit) en récits visuels convaincants. Choisir le bon graphique, éliminer le bruit visuel, construire une narration autour des données pour influencer des décisions de direction.',
            en: 'Transform raw data (ESG KPIs, product metrics) into compelling visual narratives. Choose the right chart, eliminate visual noise, build a story around data to influence executive decisions.',
            de: 'Rohdaten (ESG-KPIs, Produktmetriken) in überzeugende visuelle Narrative verwandeln. Den richtigen Chart wählen, visuelles Rauschen eliminieren, eine Datengeschichte für Führungsentscheidungen aufbauen.'
          },
          resources: {
            fr: [
              { title: 'Datawrapper Blog — Visualisation de données (FR)', url: 'https://blog.datawrapper.de/' },
              { title: 'Le Monde Infographie — Référence Data Viz FR', url: 'https://www.lemonde.fr/les-decodeurs/' },
              { title: 'Storytelling with Data — Cole Nussbaumer Knaflic', url: 'https://www.storytellingwithdata.com/' },
              { title: 'HBR France — La visualisation au service de la décision', url: 'https://www.hbrfrance.fr/data' }
            ],
            en: [
              { title: 'Storytelling with Data — Cole Nussbaumer Knaflic', url: 'https://www.storytellingwithdata.com/' },
              { title: 'The Functional Art — Alberto Cairo', url: 'http://www.thefunctionalart.com/' },
              { title: 'HBR — Data Visualization for Better Decisions', url: 'https://hbr.org/topic/subject/data-visualization' },
              { title: 'Tableau — Guide to Storytelling with Data', url: 'https://www.tableau.com/learn/articles/data-storytelling' }
            ],
            de: [
              { title: 'Datawrapper — Datenvisualisierung Tool (aus Berlin)', url: 'https://www.datawrapper.de/' },
              { title: 'Statista — Infografiken & Daten-Storytelling', url: 'https://de.statista.com/' },
              { title: 'Harvard Business Manager — Daten überzeugend präsentieren', url: 'https://www.harvardbusinessmanager.de/' },
              { title: 't3n — Data Visualization & Storytelling', url: 'https://t3n.de/tag/datenvisualisierung/' }
            ]
          }
        }
      ]
    },

    /* ── PILLAR 3 ─────────────────────────────────────────── */
    {
      id: 'influence-meetings',
      title: { fr: 'Influence & Réunions', en: 'Influence & Meetings', de: 'Einfluss & Meetings' },
      icon: '🎙️',
      skills: [
        {
          id: 'meeting-strategy',
          title: {
            fr: 'Stratégie d\'influence en réunion (culture française)',
            en: 'Meeting Influence Strategy (American culture)',
            de: 'Meeting-Einflussstrategie (deutsche Kultur)'
          },
          importance: 'must',
          description: {
            fr: 'En France, les réunions servent rarement à décider — elles servent à construire un consensus préalable. La vraie décision se prend souvent en couloir, au déjeuner ou en échange bilatéral. Maîtriser le pré-câblage, comprendre la place de la hiérarchie dans la prise de parole et savoir utiliser la rhétorique intellectuelle sont des compétences-clés sur le marché français.',
            en: 'In American culture, meetings are expected to have clear agendas, pre-reads, and end with explicit action items and owners. The culture values directness, brevity and visible outcomes. A strong influencer in US-style meetings prepares a clear ask, anticipates objections in advance, and drives towards a decision — not a discussion.',
            de: 'In der deutschen Meeting-Kultur zählen gründliche Vorbereitung (Tagesordnung im Voraus), Pünktlichkeit und sachliche Argumentation. Entscheidungen entstehen durch einen formalen Konsensbildungsprozess. Effektive Einflussnahme bedeutet: Fakten liefern, Prozesse respektieren und Vertrauen durch Kompetenznachweis — nicht durch Charisma — aufbauen.'
          },
          resources: {
            fr: [
              { title: 'Erin Meyer — The Culture Map : chapitre France', url: 'https://www.erinmeyer.com/book/' },
              { title: 'HBR France — Réunions efficaces en France', url: 'https://www.hbrfrance.fr/leadership' },
              { title: 'ANDRH — Management & culture d\'entreprise FR', url: 'https://www.andrh.fr/' },
              { title: 'Les Échos Leadership — Influence & management', url: 'https://business.lesechos.fr/directions-generales/ressources-humaines/' }
            ],
            en: [
              { title: 'Patrick Lencioni — Death by Meeting', url: 'https://www.tablegroup.com/books/dbm/' },
              { title: 'HBR — How to Run a Meeting (Antony Jay, classic)', url: 'https://hbr.org/1976/03/how-to-run-a-meeting' },
              { title: 'Erin Meyer — The Culture Map (American style)', url: 'https://www.erinmeyer.com/book/' },
              { title: 'Dale Carnegie — Effective Meetings & Influence', url: 'https://www.dalecarnegie.com/en/resources/running-effective-meetings' }
            ],
            de: [
              { title: 'Harvard Business Manager — Meetings in Deutschland', url: 'https://www.harvardbusinessmanager.de/' },
              { title: 'Haufe — Effektive Meetings leiten', url: 'https://www.haufe.de/personal/hr-management/besprechungen-effektiv-leiten_80_26672.html' },
              { title: 'Erin Meyer — The Culture Map : Kapitel Deutschland', url: 'https://www.erinmeyer.com/book/' },
              { title: 'Manager Magazin — Meeting-Kultur & Führung', url: 'https://www.manager-magazin.de/karriere/' }
            ]
          }
        },
        {
          id: 'stakeholder-message',
          title: {
            fr: 'Cartographie des parties prenantes & adaptation du message',
            en: 'Stakeholder Mapping & Message Tailoring',
            de: 'Stakeholder-Mapping & Botschaftsanpassung'
          },
          importance: 'must',
          description: {
            fr: 'Identifier les parties prenantes clés, comprendre leurs motivations et contraintes, puis adapter le message, le format et le canal pour maximiser l\'impact. Une même information présentée différemment à un DSI, un DG et un directeur RSE produit des résultats très différents.',
            en: 'Identify key stakeholders, understand their motivations and constraints, then adapt your message, format and channel to maximise impact. The same information presented differently to a CTO, CEO and CSR Director produces very different results.',
            de: 'Schlüssel-Stakeholder identifizieren, ihre Motivationen und Einschränkungen verstehen, dann Botschaft, Format und Kanal für maximale Wirkung anpassen. Dieselbe Information unterschiedlich für einen CTO, CEO und CSR-Direktor aufbereitet erzeugt sehr unterschiedliche Ergebnisse.'
          },
          resources: {
            fr: [
              { title: 'Roman Pichler — Carte des Parties Prenantes (FR)', url: 'https://www.romanpichler.com/tools/the-stakeholder-map/' },
              { title: 'PMI France — Gestion des parties prenantes', url: 'https://www.pmi-france.org/' },
              { title: 'HBR France — Gérer ses parties prenantes', url: 'https://www.hbrfrance.fr/management/parties-prenantes' },
              { title: 'McKinsey FR — Communiquer pour convaincre', url: 'https://www.mckinsey.com/fr' }
            ],
            en: [
              { title: 'Roman Pichler — The Stakeholder Map', url: 'https://www.romanpichler.com/tools/the-stakeholder-map/' },
              { title: 'HBR — The Right Way to Manage Stakeholders', url: 'https://hbr.org/2014/01/the-right-way-to-manage-stakeholders' },
              { title: 'Mind Tools — Stakeholder Analysis Matrix', url: 'https://www.mindtools.com/aol0rms/stakeholder-analysis' },
              { title: 'McKinsey — Communicating for Change', url: 'https://www.mckinsey.com/capabilities/people-and-organizational-performance/our-insights/the-psychology-of-change-management' }
            ],
            de: [
              { title: 'Projektmagazin — Stakeholder-Analyse Methodik', url: 'https://www.projektmagazin.de/methoden/stakeholderanalyse' },
              { title: 'Harvard Business Manager — Stakeholder überzeugen', url: 'https://www.harvardbusinessmanager.de/' },
              { title: 'PMI DACH — Stakeholder Management', url: 'https://www.pmi-dach.org/' },
              { title: 'Haufe — Stakeholder Management in der Praxis', url: 'https://www.haufe.de/personal/hr-management/stakeholder-management_80_487688.html' }
            ]
          }
        },
        {
          id: 'pre-wiring',
          title: {
            fr: 'Techniques de pré-câblage',
            en: 'Pre-wiring Techniques',
            de: 'Pre-Wiring-Techniken'
          },
          importance: 'must',
          description: {
            fr: 'Aligner les décideurs clés avant la réunion formelle, afin que celle-ci entérine une décision déjà construite. Cela implique des échanges bilatéraux, la détection des blocages potentiels et la co-construction de solutions avec chaque partie prenante en amont.',
            en: 'Align key decision-makers before the formal meeting, so that the meeting ratifies a decision already built in advance. This involves bilateral conversations, detecting potential blockers and co-constructing solutions with each stakeholder beforehand.',
            de: 'Wichtige Entscheidungsträger vor dem formellen Meeting ausrichten, sodass das Meeting eine bereits aufgebaute Entscheidung bestätigt. Dazu gehören bilaterale Gespräche, das Erkennen potenzieller Blocker und die gemeinsame Lösungsentwicklung im Vorfeld.'
          },
          resources: {
            fr: [
              { title: 'HBR France — L\'art de la pré-vente interne', url: 'https://www.hbrfrance.fr/leadership' },
              { title: 'Les Échos — Influence sans autorité hiérarchique', url: 'https://business.lesechos.fr/directions-generales/ressources-humaines/' },
              { title: 'McKinsey FR — Aligner avant de décider', url: 'https://www.mckinsey.com/fr' },
              { title: 'SVPG — Marty Cagan on Alignment (EN)', url: 'https://www.svpg.com/articles/' }
            ],
            en: [
              { title: 'HBR — Get the Boss to Buy In', url: 'https://hbr.org/2015/05/get-the-boss-to-buy-in' },
              { title: 'McKinsey — Influencing Without Authority', url: 'https://www.mckinsey.com/capabilities/people-and-organizational-performance/our-insights' },
              { title: 'SVPG — Marty Cagan on Product Alignment', url: 'https://www.svpg.com/articles/' },
              { title: 'HBR — The Art of Pre-Selling Your Ideas', url: 'https://hbr.org/topic/subject/influence' }
            ],
            de: [
              { title: 'Harvard Business Manager — Überzeugen ohne Macht', url: 'https://www.harvardbusinessmanager.de/' },
              { title: 'Haufe — Informelle Entscheidungsprozesse', url: 'https://www.haufe.de/personal/hr-management/informelle-kommunikation_80_26686.html' },
              { title: 'Manager Magazin — Informelle Einflussnahme', url: 'https://www.manager-magazin.de/karriere/fuehrung/' },
              { title: 'Springer Gabler — Politisches Manövrieren im Unternehmen', url: 'https://wirtschaftslexikon.gabler.de/' }
            ]
          }
        },
        {
          id: 'objection-handling',
          title: {
            fr: 'Gestion des objections & négociation',
            en: 'Objection Handling & Negotiation',
            de: 'Einwandbehandlung & Verhandlung'
          },
          importance: 'must',
          description: {
            fr: 'Transformer les résistances en opportunités de dialogue : écoute active, reformulation, ancrage et méthode du FBI (Chris Voss). En contexte produit, cela s\'applique à la négociation de scope, de délais, de priorités et à la gestion des désaccords avec des équipes techniques.',
            en: 'Turn resistance into dialogue opportunities: active listening, reframing, anchoring, and FBI negotiation techniques (Chris Voss). In a product context, this applies to scope, timeline and priority negotiation, and managing disagreements with technical teams.',
            de: 'Widerstände in Dialogchancen verwandeln: aktives Zuhören, Umformulierung, Ankertechnik und FBI-Verhandlungsmethoden (Chris Voss). Im Produktkontext gilt dies für Scope-, Zeitplan- und Prioritätsverhandlungen sowie Meinungsverschiedenheiten mit technischen Teams.'
          },
          resources: {
            fr: [
              { title: 'Chris Voss — Ne Coupez Jamais la Poire en Deux (édition FR)', url: 'https://www.blackswanltd.com/never-split-the-difference' },
              { title: 'Dunod — Techniques de négociation', url: 'https://www.dunod.com/entreprise-economie/negotiation' },
              { title: 'HBR France — Négociation & persuasion', url: 'https://www.hbrfrance.fr/negociation' },
              { title: 'Harvard PON — Négociation raisonnée (Getting to Yes, FR)', url: 'https://www.pon.harvard.edu/shop/getting-to-yes/' }
            ],
            en: [
              { title: 'Chris Voss — Never Split the Difference (Black Swan)', url: 'https://www.blackswanltd.com/never-split-the-difference' },
              { title: 'Harvard PON — Getting to Yes (Fisher & Ury)', url: 'https://www.pon.harvard.edu/shop/getting-to-yes/' },
              { title: 'HBR — Negotiation Skills Topic Hub', url: 'https://hbr.org/topic/subject/negotiating' },
              { title: 'Mind Tools — Handling Objections Effectively', url: 'https://www.mindtools.com/pages/article/newCS_86.htm' }
            ],
            de: [
              { title: 'Chris Voss — Das Feind denkt mit (DE Ausgabe)', url: 'https://www.blackswanltd.com/never-split-the-difference' },
              { title: 'Harvard Business Manager — Verhandlungsführung', url: 'https://www.harvardbusinessmanager.de/verhandeln' },
              { title: 'Haufe — Verhandeln im Beruf', url: 'https://www.haufe.de/personal/hr-management/verhandeln_80_26696.html' },
              { title: 'Springer Gabler — Einwandbehandlung Techniken', url: 'https://wirtschaftslexikon.gabler.de/' }
            ]
          }
        }
      ]
    },

    /* ── PILLAR 4 ─────────────────────────────────────────── */
    {
      id: 'cross-cultural',
      title: { fr: 'Communication interculturelle', en: 'Cross-cultural Communication', de: 'Interkulturelle Kommunikation' },
      icon: '🌍',
      skills: [
        {
          id: 'cultural-styles',
          title: {
            fr: 'Styles de communication interculturels',
            en: 'Cross-cultural Communication Styles',
            de: 'Interkulturelle Kommunikationsstile'
          },
          importance: 'must',
          description: {
            fr: 'Comprendre les différences entre styles directs (Allemagne, USA) et indirects (France, Asie), les cultures low-context vs high-context, et la gestion du désaccord selon les cultures. Ces grilles sont essentielles pour éviter les malentendus dans des équipes internationales.',
            en: 'Understand the differences between direct (Germany, USA) and indirect (France, Asia) communication styles, low-context vs high-context cultures, and how disagreement is handled across cultures. These frameworks are essential for avoiding misunderstandings in international teams.',
            de: 'Die Unterschiede zwischen direkten (Deutschland, USA) und indirekten (Frankreich, Asien) Kommunikationsstilen verstehen, Low-Context vs. High-Context-Kulturen, und den kulturspezifischen Umgang mit Meinungsverschiedenheiten. Diese Rahmenwerke sind unerlässlich für internationale Teams.'
          },
          resources: {
            fr: [
              { title: 'Erin Meyer — The Culture Map (édition française)', url: 'https://www.erinmeyer.com/book/' },
              { title: 'Interculturel.fr — Ressources communication interculturelle', url: 'https://www.interculturel.com/' },
              { title: 'HBR France — Travailler avec des cultures différentes', url: 'https://www.hbrfrance.fr/management-interculturel' },
              { title: 'Hofstede Insights — Comparaison culturelle France', url: 'https://www.hofstede-insights.com/country-comparison-tool' }
            ],
            en: [
              { title: 'Erin Meyer — The Culture Map (essential read)', url: 'https://www.erinmeyer.com/book/' },
              { title: 'Hofstede Insights — Country Comparison Tool', url: 'https://www.hofstede-insights.com/country-comparison-tool' },
              { title: 'HBR — Getting Cross-Cultural Communication Right', url: 'https://hbr.org/2015/01/getting-cross-cultural-communication-right' },
              { title: 'Edward Hall — Beyond Culture (high/low-context theory)', url: 'https://www.worldcat.org/title/beyond-culture' }
            ],
            de: [
              { title: 'Erin Meyer — The Culture Map (deutsche Ausgabe)', url: 'https://www.erinmeyer.com/book/' },
              { title: 'Hofstede Insights — Kulturvergleich Deutschland', url: 'https://www.hofstede-insights.com/country-comparison-tool' },
              { title: 'Harvard Business Manager — Interkulturelle Kommunikation', url: 'https://www.harvardbusinessmanager.de/interkulturell' },
              { title: 'Goethe-Institut — Interkulturelle Kompetenz', url: 'https://www.goethe.de/de/spr/ueb/ikk.html' }
            ]
          }
        },
        {
          id: 'foreign-trust',
          title: {
            fr: 'Construire la confiance en tant que professionnel étranger',
            en: 'Building Trust as a Foreign Professional',
            de: 'Vertrauen als ausländische Fachkraft aufbauen'
          },
          importance: 'must',
          description: {
            fr: 'En France, la confiance se construit souvent sur la démonstration intellectuelle et la légitimité d\'expertise (formations, références, raisonnement). Comprendre ces codes implicites permet à un professionnel d\'origine étrangère de s\'intégrer plus vite et d\'avoir plus d\'impact.',
            en: 'In Anglo-American contexts, trust is built quickly through warmth, directness and delivered results. Understanding these implicit codes allows a foreign professional to integrate faster and have more impact on decisions within an English-speaking environment.',
            de: 'In Deutschland wird Vertrauen durch Fachkompetenz, Zuverlässigkeit und Prozesstreue aufgebaut. Das Verständnis dieser impliziten Codes ermöglicht einer ausländischen Fachkraft, sich schneller zu integrieren und mehr Einfluss auf Entscheidungen im deutschen Markt zu haben.'
          },
          resources: {
            fr: [
              { title: 'Erin Meyer — Construire la confiance interculturelle (HBR)', url: 'https://hbr.org/2014/01/working-with-a-colleague-from-a-different-culture' },
              { title: 'HBR France — S\'intégrer dans une entreprise française', url: 'https://www.hbrfrance.fr/management' },
              { title: 'Sciences Po — Executive Education : management interculturel', url: 'https://www.sciencespo.fr/executive-education/' },
              { title: 'Commisceo Global — Guide Culturel France', url: 'https://www.commisceo-global.com/resources/country-guides/france-guide' }
            ],
            en: [
              { title: 'Erin Meyer — How to Build Trust Across Cultures (HBR)', url: 'https://hbr.org/2014/01/working-with-a-colleague-from-a-different-culture' },
              { title: 'HBR — Building Trust in Multicultural Teams', url: 'https://hbr.org/2018/06/cracking-the-code-on-cross-cultural-communication' },
              { title: 'INSEAD — Managing Across Cultures Programme', url: 'https://www.insead.edu/executive-education/leadership-management/managing-across-cultures' },
              { title: 'Commisceo Global — Cultural Guides by Country', url: 'https://www.commisceo-global.com/resources/country-guides' }
            ],
            de: [
              { title: 'Harvard Business Manager — Vertrauen interkulturell aufbauen', url: 'https://www.harvardbusinessmanager.de/' },
              { title: 'IHK — Interkulturelle Kompetenz im Beruf', url: 'https://www.ihk.de/themen/international/interkulturelle-kompetenz' },
              { title: 'Goethe-Institut — Als Ausländer in Deutschland', url: 'https://www.goethe.de/de/spr/ueb/ikk.html' },
              { title: 'Commisceo Global — Guide Kulturführer Deutschland', url: 'https://www.commisceo-global.com/resources/country-guides/germany-guide' }
            ]
          }
        },
        {
          id: 'cross-border-collab',
          title: {
            fr: 'Collaboration en équipes internationales',
            en: 'Cross-border Team Collaboration',
            de: 'Grenzüberschreitende Teamzusammenarbeit'
          },
          importance: 'bonus',
          description: {
            fr: 'Naviguer dans des équipes distribuées multiculturelle : gestion des décalages horaires, outils de collaboration asynchrone, animation de réunions inclusives et prévention des silences culturels (désaccord non exprimé).',
            en: 'Navigate distributed multicultural teams: managing time zone differences, asynchronous collaboration tools, facilitating inclusive meetings, and preventing cultural silences — unexpressed disagreement and lack of clarity on decisions.',
            de: 'In verteilten multikulturellen Teams navigieren: Zeitzonenunterschiede managen, asynchrone Kollaborationswerkzeuge, inklusive Meetings moderieren und kulturelle Stille verhindern — unausgesprochene Meinungsverschiedenheiten und fehlende Entscheidungsklarheit.'
          },
          resources: {
            fr: [
              { title: 'GitLab — Guide du travail à distance (FR)', url: 'https://handbook.gitlab.com/handbook/company/culture/all-remote/' },
              { title: 'HBR France — Manager des équipes à distance', url: 'https://www.hbrfrance.fr/management/teletravail' },
              { title: 'Atlassian — Collaboration asynchrone (FR)', url: 'https://www.atlassian.com/fr/work-management/project-collaboration' },
              { title: 'Erin Meyer — Équipes virtuelles mondiales (blog)', url: 'https://www.erinmeyer.com/blog/' }
            ],
            en: [
              { title: 'GitLab — Remote Work Handbook (industry standard)', url: 'https://handbook.gitlab.com/handbook/company/culture/all-remote/' },
              { title: 'HBR — How to Collaborate Across Time Zones', url: 'https://hbr.org/2018/10/how-to-collaborate-effectively-if-your-team-is-remote' },
              { title: 'Notion — Guide to Async Communication', url: 'https://www.notion.com/blog/async-communication' },
              { title: 'Erin Meyer — Global Virtual Teams', url: 'https://www.erinmeyer.com/blog/' }
            ],
            de: [
              { title: 'Haufe — Virtuelle Teams führen', url: 'https://www.haufe.de/personal/hr-management/virtuelle-teams-fuehren_80_26688.html' },
              { title: 'Harvard Business Manager — Remote Leadership', url: 'https://www.harvardbusinessmanager.de/fuehren/remote-work' },
              { title: 't3n — Asynchrone Kommunikation im Remote-Team', url: 'https://t3n.de/news/remote-work-asynchrone-kommunikation/' },
              { title: 'GitLab — Remote Work Best Practices (DE)', url: 'https://handbook.gitlab.com/handbook/company/culture/all-remote/' }
            ]
          }
        }
      ]
    }

  ]
};
