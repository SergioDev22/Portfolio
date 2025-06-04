import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4 sm:px-6"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight max-sm:text-2xl">
            <span className="opacity-0 animate-fade-in">Bonjour, Je suis</span>
            <span className="!text-primary opacity-0 animate-fade-in-delay-1">
              {" "}
              Louis Sergio
            </span>
            <span className="ml-2 opacity-0 animate-fade-in-delay-2">
              {" "}
              RAKOTOARISOA
            </span>
          </h1>

          <p className="text-lg md:text-xl max-sm:text-sm text-muted-foreground max-2xl mx-auto opacity-0 animate-fade-in-delay-3">
            Je crée des expériences web remarquables en tirant parti des
            technologies modernes. Spécialisé dans le développement FullStack,
            j'interviens aussi bien sur le front-end, le back-end que sur le
            développement mobile. Mon objectif est de concevoir des interfaces
            intuitives, esthétiques et performantes, tout en garantissant une
            architecture robuste, sécurisée et évolutive côté serveur. Grâce à
            ma maîtrise des outils et frameworks actuels, je suis capable de
            concevoir des applications complètes, de l'idée à la mise en
            production.
          </p>
          <div className="pt-4 opacity-0 animate-fade-in-delay-4">
            <a
              href="#projects"
              className="inline-block cosmic-button text-sm sm:text-base px-4 py-3 sm:px-6 sm:py-4"
            >
              Voir mes réalisations et mes contributions
            </a>
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-[47%] transform -translate-x-1/2 flex-col items-center animate-bounce rounded-full border p-3">
        <ArrowDown className="h-7 w-7 text-primary max-md:w-4 max-md:h-4" />
      </div>
    </section>
  );
};
