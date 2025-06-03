import { useState } from "react";
import { cn } from "../Lib/utils";

const skills = [
  {
    name: "HTML/CSS",
    level: 95,
    category: "frontend",
    logo: "https://www.w3.org/html/logo/downloads/HTML5_Badge.svg",
  },
  {
    name: "JavaScript",
    level: 90,
    category: "frontend",
    logo: "https://worldvectorlogo.com/logos/javascript-1.svg",
  },
  {
    name: "React",
    level: 90,
    category: "frontend",
    logo: "https://worldvectorlogo.com/logos/react-2.svg",
  },
  {
    name: "TypeScript",
    level: 85,
    category: "frontend",
    logo: "https://worldvectorlogo.com/logos/typescript.svg",
  },
  {
    name: "Tailwind CSS",
    level: 90,
    category: "frontend",
    logo: "https://worldvectorlogo.com/logos/tailwind-css-2.svg",
  },
  {
    name: "Next.js",
    level: 70,
    category: "frontend",
    logo: "https://worldvectorlogo.com/logos/nextjs-2.svg",
  },
  {
    name: "React Native",
    level: 70,
    category: "frontend",
    logo: "https://worldvectorlogo.com/logos/react-native-1.svg",
  },
  {
    name: "Material UI",
    level: 95,
    category: "frontend",
    logo: "https://worldvectorlogo.com/logos/material-ui-1.svg",
  },
  {
    name: "ShadCN",
    level: 95,
    category: "frontend",
    logo: "https://avatars.githubusercontent.com/u/139895814?s=48&v=4",
  },
  {
    name: "Node.js",
    level: 80,
    category: "backend",
    logo: "https://worldvectorlogo.com/logos/nodejs-icon.svg",
  },
  {
    name: "Express",
    level: 75,
    category: "backend",
    logo: "https://worldvectorlogo.com/logos/express-109.svg",
  },
  {
    name: "MongoDB",
    level: 70,
    category: "backend",
    logo: "https://worldvectorlogo.com/logos/mongodb-icon-1.svg",
  },
  {
    name: "PostgreSQL",
    level: 65,
    category: "backend",
    logo: "https://worldvectorlogo.com/logos/postgresql.svg",
  },
  {
    name: "Django Rest Framework",
    level: 90,
    category: "backend",
    logo: "https://worldvectorlogo.com/logos/django.svg",
  },
  {
    name: "Flask",
    level: 90,
    category: "backend",
    logo: "https://worldvectorlogo.com/logos/flask.svg",
  },
  {
    name: "FastAPI",
    level: 70,
    category: "backend",
    logo: "https://worldvectorlogo.com/logos/fastapi.svg",
  },
  {
    name: "Git/GitHub",
    level: 90,
    category: "tools",
    logo: "https://worldvectorlogo.com/logos/github-icon-1.svg",
  },
  {
    name: "Docker",
    level: 50,
    category: "tools",
    logo: "https://worldvectorlogo.com/logos/docker.svg",
  },
  {
    name: "VS Code",
    level: 95,
    category: "tools",
    logo: "https://worldvectorlogo.com/logos/visual-studio-code-1.svg",
  },
];

const categories = ["all", "frontend", "backend", "tools"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-24 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Mes <span className="text-primary">Compétences</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              onClick={() => setActiveCategory(category)}
              key={category}
              className={cn(
                "px-5 py-2 rounded-full transition-all duration-300 capitalize text-sm md:text-base",
                activeCategory === category
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "bg-secondary/70 text-foreground hover:bg-secondary/90 hover:shadow-sm"
              )}
            >
              {category === "all" ? "Toutes" : category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill) => (
            <div
              key={skill.name}
              className="bg-card p-6 rounded-lg shadow-xs hover:shadow-md transition-shadow duration-300 border border-border/50 hover:border-primary/20"
            >
              <div className="flex items-center gap-4 mb-4">
                {skill.logo && (
                  <div className="w-12 h-12 flex items-center justify-center bg-background rounded-lg p-2">
                    <img
                      src={skill.logo}
                      alt={skill.name}
                      className="w-8 h-8 object-contain"
                      onError={(e) => {
                        // Fallback si l'image ne charge pas
                        e.currentTarget.src = "/skills/default.svg";
                      }}
                    />
                  </div>
                )}
                <div>
                  <h3 className="font-semibold text-lg">{skill.name}</h3>
                  <span className="text-sm text-muted-foreground capitalize">
                    {skill.category}
                  </span>
                </div>
              </div>

              <div className="mt-4">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-sm text-muted-foreground">
                    Maîtrise
                  </span>
                  <span className="text-sm font-medium">{skill.level}%</span>
                </div>
                <div className="w-full bg-secondary/50 h-2.5 rounded-full overflow-hidden">
                  <div
                    className="bg-primary h-2.5 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
