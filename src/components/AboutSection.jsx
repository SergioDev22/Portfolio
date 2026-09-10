import { Cloud, Code, Layers } from "lucide-react";
import { motion as Motion } from "framer-motion";

const highlights = [
  {
    id: 1,
    icon: Code,
    title: "Développement Odoo sur mesure",
    desc: "Conception de modules Odoo métier de bout en bout : frontend OWL/JavaScript, backend Python/ORM et intégrations fournisseurs via EDI et APIs.",
    duration: 1,
  },
  {
    id: 2,
    icon: Cloud,
    title: "Data & Cloud",
    desc: "Pipelines de données Python (extraction, transformation, chargement) déployés et orchestrés sur Google Cloud Platform.",
    duration: 1.25,
  },
  {
    id: 3,
    icon: Layers,
    title: "Full Stack Web & Mobile",
    desc: "APIs REST avec Django/DRF et FastAPI, interfaces React, Next.js et React-Native, jusqu'au déploiement sur serveurs Linux.",
    duration: 1.5,
  },
];

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          A propos
          <span className="text-primary"> de moi</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-left max-md:mx-4">
            <h3 className="text-2xl font-semibold">
              Développeur Full Stack Python / React
            </h3>
            <p className="text-muted-foreground text-left">
              Développeur Full Stack Python/React avec plus de 4 ans
              d'expérience professionnelle. Spécialisé dans le développement de
              modules Odoo sur mesure et de pipelines de données sur Google
              Cloud Platform, j'interviens sur l'ensemble de la chaîne, du
              backend jusqu'au déploiement. J'aime concevoir des solutions
              robustes et évolutives, en soignant autant l'architecture serveur
              que l'expérience utilisateur.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-start">
              <a
                href="https://drive.google.com/file/d/17ypnoopXM_NN58hSUpKuDbvPobtCIqMC/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:br-primary/10 hover:scale-x-105 transition duration-300 text-center"
              >
                Télécharger mon CV
              </a>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6 max-md:mx-3">
            {highlights.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.id} className="gradient-border p-6 card-hover">
                  <Motion.div
                    initial={{ x: 200, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: item.duration }}
                    viewport={{ once: true }}
                    className="flex items-start gap-4"
                  >
                    <div className="p-3 rounded-full bg-primary/10">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="text-left">
                      <h4 className="font-semibold text-lg">{item.title}</h4>
                      <p className="text-muted-foreground">{item.desc}</p>
                    </div>
                  </Motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
