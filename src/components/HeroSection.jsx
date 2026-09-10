import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 py-24"
    >
      <div className="container max-w-5xl mx-auto z-10">
        <div className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-10 md:gap-14 items-center">
          {/* Photo de profil */}
          <div className="flex justify-center opacity-0 animate-fade-in">
            <div className="relative">
              <div
                aria-hidden="true"
                className="absolute -inset-5 rounded-full bg-primary/20 blur-3xl"
              />
              <div className="relative rounded-full p-[6px] bg-gradient-to-br from-primary via-primary/40 to-primary/10 shadow-2xl">
                <img
                  src="/profile.jpeg"
                  alt="Louis Sergio RAKOTOARISOA"
                  className="w-44 h-44 sm:w-56 sm:h-56 md:w-72 md:h-72 rounded-full object-cover object-[center_16%] bg-card"
                />
              </div>
            </div>
          </div>

          {/* Texte de présentation */}
          <div className="text-center md:text-left space-y-5">
            <p className="text-xs sm:text-sm uppercase tracking-[0.25em] text-muted-foreground opacity-0 animate-fade-in">
              Bienvenue dans mon univers
            </p>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-[1.15]">
              <span className="block opacity-0 animate-fade-in-delay-1">
                Bonjour, je suis Louis Sergio RAKOTOARISOA
              </span>
              <span className="block !text-primary opacity-0 animate-fade-in-delay-2">
                Développeur Full Stack.
              </span>
              <span className="block opacity-0 animate-fade-in-delay-3">
                basé à Antananarivo.
              </span>
            </h1>

            <p className="text-base md:text-lg max-sm:text-sm text-muted-foreground opacity-0 animate-fade-in-delay-3">
              Développeur Full Stack Python/React avec plus de 4 ans
              d'expérience. Je conçois des modules Odoo sur mesure et des
              pipelines de données sur Google Cloud Platform, du backend
              jusqu'au déploiement. Des APIs REST robustes aux interfaces React
              performantes, j'interviens sur toute la chaîne pour livrer des
              applications complètes, de l'idée à la mise en production.
            </p>

            <div className="pt-2 opacity-0 animate-fade-in-delay-4">
              <a
                href="#projects"
                className="inline-block cosmic-button text-sm sm:text-base px-4 py-3 sm:px-6 sm:py-4"
              >
                Voir mes réalisations et mes contributions
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-8  left[47%] transform -translate-x-1/2 flex-col items-center animate-bounce rounded-full border p-3">
        <ArrowDown className="h-7 w-7 text-primary max-md:w-4 max-md:h-4" />
      </div>
    </section>
  );
};
