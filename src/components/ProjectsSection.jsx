import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Runoto",
    description:
      "Gestion des stocks, ateliers et ventes en toute simplicité grâce à une solution tout-en-un",
    image: "/projects/runoto.png",
    tags: ["Next.Js", "TailwindCSS", "Odoo"],
    demoUrl: "https://runoto.com/",
  },
  {
    id: 2,
    title: "Artizaho",
    description: "Plateforme pour mettre en valeur les artisants Malagasy",
    image: "/projects/artizaho.png",
    tags: [
      "TypeScript",
      "Python",
      "Django Rest FrameWork",
      "Next.js",
      "Stripe",
    ],
  },
  {
    id: 3,
    title: "E-commerce Plateforme",
    description: "Logiciel de gestion et e-commerce pour Runoto",
    image: "/projects/runoto1.jpeg",
    tags: ["Next.Js", "TailwindCSS", "Odoo"],
    demoUrl: "https://rci.runoto.com/",
  },
  {
    id: 4,
    title: "Ampalibe",
    description:
      "Ampalibe est un framework Python léger conçu pour créer des bots Facebook Messenger plus rapidement. Il introduit un nouveau concept : il gère les webhooks, traite les données envoyées par Facebook et fournit l'API Messenger avec des fonctionnalités avancées telles que la gestion des payloads, la limitation de la longueur des éléments, et bien plus encore.",
    image:
      "https://raw.githubusercontent.com/iTeam-S/Ampalibe/main/docs/source/_static/ampalibe_logo.png",
    tags: ["Python", "Messenger Api", "bash"],
    githubUrl: "https://github.com/iTeam-S/Ampalibe",
  },
  {
    id: 5,
    title: "CGP (Gestion du Patrimoine)",
    description:
      "C'est une platforme pour le but de voir le portfolio global d'un utilisateur en temps réel peu importe ses blockchains en fournissant juste ses addresses blockchains ou son clé publique des plateformes du finance centralisé ou décentralisé",
    image: "/projects/cgp.png",
    tags: ["Python", "Django Rest Framwork", "Material UI", "React"],
  },
  {
    id: 6,
    title: "Admin CGP",
    description:
      "C'est le platforme admin de CGP pour le but de gérer les utilisateurs du platforme et leurs snapshot quotidiens",
    image: "/projects/admin-cgp.png",
    tags: ["Python", "Django Rest Framwork", "Material UI", "React"],
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl nd:text-4xl font-bold mb-4 text-center">
          {" "}
          Mes rélisations et
          <span className="text-primary"> Contributions du projet</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Voici quelques-uns de mes rélisations et contributions récentes.
          Chaque projet a été soigneusement conçu avec une attention
          particulière aux détails, à la performance et à l'expérience
          utilisateur.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover p-3 flex flex-col h-full"
            >
              <div className="relative h-48 overflow-hidden rounded-t-lg">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Overlay pour améliorer la lisibilité du texte sur l'image si nécessaire */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <div className="p-4 flex-grow">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, key) => (
                    <span
                      key={key}
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="px-4 pb-4 mt-auto">
                {project.demoUrl || project.githubUrl ? (
                  <div className="flex space-x-3">
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-foreground/80 hover:text-primary transition-colors duration-300"
                        aria-label={`Voir le projet ${project.title}`}
                      >
                        <ExternalLink size={20} className="mr-1" />
                        <span className="text-sm">Démo</span>
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-foreground/80 hover:text-primary transition-colors duration-300"
                        aria-label={`Code source de ${project.title}`}
                      >
                        <Github size={20} className="mr-1" />
                        <span className="text-sm">Code</span>
                      </a>
                    )}
                  </div>
                ) : (
                  <div className="text-sm text-muted-foreground">
                    Projet en cours...
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://github.com/SergioDev22"
            target="_blank"
            rel="noopener noreferrer"
            className="cosmic-button w-fit inline-flex items-center mx-auto gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            Voir mon GitHub <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
