import { ArrowRight, ExternalLink } from "lucide-react";

const experiences = [
  {
    id: 1,
    title: "Développeur Odoo",
    entreprise: "ABM INNOV",
    url: "",
    desc: [
      "Conception et développement d'une plateforme de catalogue et de commande de pièces automobiles sous forme de module Odoo : frontend OWL/JavaScript, backend Python, moteur de recherche Elasticsearch",
      "Intégration des données catalogue TecDoc et des fournisseurs via EDI et API (Golda, TecCom) : vérification de disponibilité, sélection du meilleur prix, routage automatique des commandes",
      "Développement d'un wizard de contrôle de disponibilité à la confirmation des bons de commande et optimisation des appels API (batching) pour contourner le throttling fournisseur",
      "Développement d'un module Odoo 18 de facturation électronique B2B connecté à une Plateforme de Dématérialisation Partenaire certifiée Peppol : authentification OAuth 2.1, envoi de factures, suivi du cycle de vie selon les statuts AFNOR, synchronisation par cron",
      "Création de composants front complexes (recherche par véhicule, filtres pneus, navigation multi-niveaux par catégories et marques)",
    ],
    date: "Juin 2025 - Aujourd'hui",
    current: true,
  },
  {
    id: 2,
    title: "Développeur Python",
    entreprise: "KOLLEKTIV IT",
    url: "",
    desc: [
      "Conception et développement de pipelines de données en Python (extraction, transformation, chargement) pour l'ingestion et le traitement de données à grande échelle",
      "Déploiement et gestion des pipelines sur Google Cloud Platform : orchestration, planification des traitements et supervision des exécutions",
    ],
    date: "Mars 2026 - Aujourd'hui",
    current: true,
  },
  {
    id: 3,
    title: "Développeur React / Python",
    entreprise: "DIRIS",
    url: "https://diris.fr/",
    desc: [
      "Conception et développement d'APIs REST avec Django et FastAPI pour alimenter les applications web",
      "Développement d'interfaces web avec React, Redux Toolkit, Tanstack Query et Material UI, avec gestion du cache et des états asynchrones",
      "Développement des fonctionnalités de gestion de portefeuille utilisateurs en Web3 (suivi des actifs, intégration blockchain)",
      "Participation aux revues de code et à la maintenance évolutive de la plateforme",
    ],
    date: "Novembre 2023 - Décembre 2025",
  },
  {
    id: 4,
    title: "Consultant Développeur Back-end (Python) & Sys-Admin",
    entreprise: "Code-Talent",
    url: "https://code-talent.fr/",
    desc: [
      "Développement d'APIs REST avec Django REST Framework",
      "Déploiement et maintenance d'applications Next.js et Python sur serveurs Linux : services systemd, pm2, reverse proxy nginx, certificats SSL",
      "Configuration de Google Workspace et mise en place de la messagerie professionnelle (domaines, DNS, comptes utilisateurs)",
      "Développement de scripts de scraping pour la collecte et la structuration de données web",
    ],
    date: "Mars 2024 - Décembre 2024",
  },
  {
    id: 5,
    title: "Alternant Développeur et Data Manipulation",
    entreprise: "SMARTONE",
    url: "https://smartone.ai/",
    desc: [
      "Développement d'un module Python de connexion unifié à plusieurs types de bases de données",
      "Conception de scripts ETL (Extract, Transform, Load) pour le traitement de données stockées sur AWS",
      "Développement d'APIs REST avec FastAPI",
      "Développement front-end en ReactJS",
      "Scraping et collecte de données pour alimenter les pipelines de traitement",
    ],
    date: "Décembre 2022 - Novembre 2023",
  },
];

export const Experiences = () => {
  return (
    <section id="experiences" className="py-10 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Mes <span className="text-primary">Expériences Professionnelles</span>
        </h2>

        <div className="flex flex-col gap-8">
          {experiences.map((exp) => (
            <div
              key={exp.id}
              className="group bg-card rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 border border-border"
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-primary">
                    {exp.title}
                  </h3>
                  <div className="flex items-center gap-2 mt-1 mb-3">
                    <span className="font-medium">{exp.entreprise}</span>
                    {exp.url && (
                      <a
                        href={exp.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        <ExternalLink size={16} />
                      </a>
                    )}
                  </div>

                  <ul className="space-y-2 mt-4">
                    {exp.desc.map((item, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <ArrowRight
                          size={16}
                          className="mt-1 flex-shrink-0 text-primary"
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="md:text-right">
                  <span className="inline-block px-3 py-1 bg-accent text-accent-foreground rounded-full text-sm font-medium whitespace-nowrap">
                    {exp.date}
                  </span>
                  {exp.current && (
                    <span className="mt-2 md:justify-end flex items-center gap-2 text-xs font-medium text-primary">
                      <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
                      En poste
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
