import { Briefcase, Code, User } from "lucide-react";

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
          <div className="space-y-6 max-md:mx-4">
            <h3 className="text-2xl font-semibold max-md:ml-3">
              Développeur Web Passionné & Innovateur Technologique
            </h3>
            <p className="text-muted-foreground max-md:ml-3 text-center">
              Développeur Full Stack avec presque 2 ans d'expérience
              professionnel dans la conception et le développement
              d'applications web et Mobile en utilisant React, React-Native,
              Python, MySQL et PostgreSQL. Passionné par la création de
              solutions robustes et évolutives, avec une forte capacité à
              travailler sur l'ensemble du cycle de développement logiciel
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              {/* <a href="#contact" className="cosmic-button"> */}
              {/* {" "}
                Get In Touch
              </a> */}
              <a
                href="https://drive.google.com/file/d/1tBLyFCLqdjn89rRG57HI9B8XkVCXWKEY/view?usp=sharing"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:br-primary/10 hover:scale-x-105 transition duration-300 text-center"
              >
                Télécharger mon CV
              </a>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6 max-md:mx-3">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">
                    Développeur web & Mobile
                  </h4>
                  <p className="text-muted-foreground">
                    Création de site web responsive et d'application mobile avec
                    des frameworks modernes
                  </p>
                </div>
              </div>
            </div>
            {/* <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">UI/UX Design</h4>
                  <p className="text-muted-foreground">
                    Designing intuitive user interfaces and seamless user
                    experiences.
                  </p>
                </div>
              </div>
            </div> */}
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Gestion de projet</h4>
                  <p className="text-muted-foreground">
                    Conduite de projets de la conception à la réalisation en
                    adoptant des méthodologies agiles.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
