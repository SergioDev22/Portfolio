import { Award, Trophy } from "lucide-react";

const awards = [
  {
    id: 1,
    title: "Laureat HUI : 2ème place",
    organizer: "TechZara",
    date: "Avril 2022",
    place: "2ème",
    icon: <Trophy className="text-amber-400" />,
  },
  {
    id: 2,
    title: "Hackathon MNDPT: 1ère place",
    organizer: "MNDPT (Ministère du Développement Numérique, de la Transformation Digitale, des Postes et des Télécommunications)",
    date: "Juin 2022",
    place: "1ère",
    icon: <Award className="text-yellow-500" />,
  },
  {
    id: 3,
    title: "HACKATHON DEVFEST : 1er PLACE",
    organizer: "Association DevFest Antananarivo",
    date: "Novembre 2022",
    place: "1ère",
    icon: <Award className="text-yellow-500" />,
  },
  {
    id: 4,
    title: "Hackathon AVG : 1ère place",
    organizer: "ONG Alliance Voary Gasy",
    date: "Décembre 2022",
    place: "1ère",
    icon: <Award className="text-yellow-500" />,
  },
  {
    id: 5,
    title: "Hackathon ZahaGeek : 2ème Place",
    organizer: "Orange Digital Center",
    date: "Janvier 2023",
    place: "2ème",
    icon: <Trophy className="text-amber-400" />,
  },
];

export const AwardsSection = () => {
  return (
    <section id="awards" className="py-24 px-4 relative bg-muted/50">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Mes <span className="text-primary">Prix & Distinctions</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {awards.map((award) => (
            <div
              key={award.id}
              className="group bg-card rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 p-6 border border-border flex flex-col"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-full">
                  {award.icon}
                </div>
                <div>
                  <h3 className="text-lg font-bold">{award.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    {award.organizer}
                  </p>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-border flex justify-between items-center">
                <span className="inline-block px-3 py-1 bg-accent text-accent-foreground rounded-full text-sm font-medium">
                  {award.date}
                </span>
                <span className={`text-lg font-bold ${
                  award.place === "1ère" ? "text-yellow-500" : "text-amber-400"
                }`}>
                  {award.place} place
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};