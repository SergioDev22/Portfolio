import { ArrowRight, ExternalLink, Github } from "lucide-react";

const experiences = [
  {
    id: 1,
    title: "Consultant Développeur Back-end (Python) & Sys-Admin",
    entreprise: "Code-Talent",
    url: "https://code-talent.fr/",
    desc: [
      "Développer des APIs REST avec Django Rest Framework",
      "Déployer des applications Next.js, Python sur serveur Linux (systemd, pm2, Nginx)",
      "Configuration de Google Workspace et mailing",
      "Scraping",
    ],
    date: "Mars 2024 - Déc 2024",
  },
  {
    id: 2,
    title: "Développeur React / Python",
    entreprise: "DIRIS",
    url: "https://diris.fr/",
    desc: [
      "Création d'APIs avec Django et FastAPI",
      "Création de sites web avec React, Redux, Tanstack Query et Material UI",
      "Formation sur l'IA, notamment sur les LLM (Large Language Models)",
    ],
    date: "Novembre 2023 - ...",
  },
  {
    id: 3,
    title: "Alternant Développeur et Data Manipulation",
    entreprise: "SMARTONE",
    url: "https://smartone.ai/",
    desc: [
      "Création de modules de connexion à plusieurs bases de données avec Python",
      "Développeur Front-end en ReactJS",
      "Création de scripts ETL (Extract, Transform, Load) pour traitement de données sur AWS",
      "Scraping",
      "Création d'APIs REST avec FastAPI",
      "Développement d'APIs avec Django Rest Framework & Node/Express",
      "Déploiement et maintenance d'applications sur serveurs Ubuntu avec Nginx",
    ],
    date: "Décembre 2022 - Novembre 2023",
  },
  {
    id: 4,
    title: "Développeur Front-end ReactJS",
    entreprise: "HOAG-TARGET",
    url: "https://hoag-target.com/",
    desc: [
      "Alternant Développeur et Sys-Admin",
      "Développement en React / React-Native / Python",
    ],
    date: "Janvier 2022 - Novembre 2022",
  },
  {
    id: 5,
    title: "Développeur Python",
    entreprise: "ITEAM-S COMMUNITY",
    url: "",
    desc: [
      "Création de Bot Messenger",
      "Développement d'APIs avec Django Rest Framework et FastAPI",
    ],
    date: "Mars 2021 - ...",
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
                  <span className="inline-block px-3 py-1 bg-accent text-accent-foreground rounded-full text-sm font-medium">
                    {exp.date}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
