import { useState } from "react";
import { cn } from "../Lib/utils";

const devicon = (path) =>
  `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${path}.svg`;

const skills = [
  // Langages
  {
    name: "Python",
    level: 95,
    category: "backend",
    logo: devicon("python/python-original"),
  },
  {
    name: "JavaScript",
    level: 90,
    category: "frontend",
    logo: devicon("javascript/javascript-original"),
  },
  {
    name: "TypeScript",
    level: 85,
    category: "frontend",
    logo: devicon("typescript/typescript-original"),
  },
  {
    name: "SQL",
    level: 85,
    category: "data",
    logo: devicon("azuresqldatabase/azuresqldatabase-original"),
  },

  // Odoo & back-end
  {
    name: "Odoo (OWL, ORM)",
    level: 90,
    category: "backend",
    logo: "https://cdn.simpleicons.org/odoo/714B67",
  },
  {
    name: "Django / DRF",
    level: 90,
    category: "backend",
    logo: devicon("django/django-plain"),
  },
  {
    name: "FastAPI",
    level: 85,
    category: "backend",
    logo: devicon("fastapi/fastapi-original"),
  },
  {
    name: "Flask",
    level: 80,
    category: "backend",
    logo: devicon("flask/flask-original"),
  },

  // Front-end
  {
    name: "ReactJS",
    level: 90,
    category: "frontend",
    logo: devicon("react/react-original"),
  },
  {
    name: "React Native",
    level: 70,
    category: "frontend",
    logo: devicon("react/react-original"),
  },
  {
    name: "Next.js",
    level: 75,
    category: "frontend",
    logo: devicon("nextjs/nextjs-original"),
  },
  {
    name: "Redux Toolkit",
    level: 85,
    category: "frontend",
    logo: devicon("redux/redux-original"),
  },
  {
    name: "Tanstack Query",
    level: 85,
    category: "frontend",
    logo: "https://cdn.simpleicons.org/reactquery/FF4154",
  },
  {
    name: "Material UI",
    level: 90,
    category: "frontend",
    logo: devicon("materialui/materialui-original"),
  },
  {
    name: "ShadCN",
    level: 85,
    category: "frontend",
    logo: "https://cdn.simpleicons.org/shadcnui/888888",
  },
  {
    name: "Tailwind CSS",
    level: 90,
    category: "frontend",
    logo: devicon("tailwindcss/tailwindcss-original"),
  },

  // Data & intégrations
  {
    name: "Pipelines ETL",
    level: 85,
    category: "data",
    logo: devicon("apacheairflow/apacheairflow-original"),
  },
  {
    name: "Elasticsearch",
    level: 80,
    category: "data",
    logo: devicon("elasticsearch/elasticsearch-original"),
  },
  {
    name: "APIs REST / EDI",
    level: 90,
    category: "data",
    logo: devicon("swagger/swagger-original"),
  },
  {
    name: "OAuth 2.1",
    level: 80,
    category: "data",
    logo: devicon("oauth/oauth-original"),
  },
  {
    name: "Scraping",
    level: 85,
    category: "data",
    logo: devicon("selenium/selenium-original"),
  },

  // Bases de données
  {
    name: "PostgreSQL",
    level: 85,
    category: "data",
    logo: devicon("postgresql/postgresql-original"),
  },
  {
    name: "MySQL",
    level: 80,
    category: "data",
    logo: devicon("mysql/mysql-original"),
  },

  // Cloud & DevOps
  {
    name: "Google Cloud Platform",
    level: 80,
    category: "cloud",
    logo: devicon("googlecloud/googlecloud-original"),
  },
  {
    name: "AWS",
    level: 70,
    category: "cloud",
    logo: devicon("amazonwebservices/amazonwebservices-original-wordmark"),
  },
  {
    name: "Linux (Ubuntu)",
    level: 85,
    category: "cloud",
    logo: devicon("ubuntu/ubuntu-plain"),
  },
  {
    name: "nginx",
    level: 80,
    category: "cloud",
    logo: devicon("nginx/nginx-original"),
  },
  {
    name: "systemd / pm2",
    level: 80,
    category: "cloud",
    logo: devicon("linux/linux-original"),
  },
  {
    name: "Git/GitHub",
    level: 90,
    category: "cloud",
    logo: devicon("git/git-original"),
  },
];

const categories = ["all", "frontend", "backend", "data", "cloud"];

const categoryLabels = {
  all: "Toutes",
  frontend: "Front-end",
  backend: "Back-end",
  data: "Data & bases de données",
  cloud: "Cloud & DevOps",
};

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
                "px-5 py-2 rounded-full transition-all duration-300 text-sm md:text-base",
                activeCategory === category
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "bg-secondary/70 text-foreground hover:bg-secondary/90 hover:shadow-sm"
              )}
            >
              {categoryLabels[category]}
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
                  <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center bg-background rounded-lg p-2">
                    <img
                      src={skill.logo}
                      alt={skill.name}
                      loading="lazy"
                      className="w-8 h-8 object-contain"
                      onError={(e) => {
                        // Masque l'icône si le CDN ne répond pas
                        e.currentTarget.style.visibility = "hidden";
                      }}
                    />
                  </div>
                )}
                <div>
                  <h3 className="font-semibold text-lg">{skill.name}</h3>
                  <span className="text-sm text-muted-foreground">
                    {categoryLabels[skill.category]}
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
