import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { AwardsSection } from "../components/Award";
import { Experiences } from "../components/Experiences";
import { ThemeToggle } from "../components/ThemeToogle";
import { HeroSection } from "../components/HeroSection";
import { AboutSection } from "../components/AboutSection";
import { SkillsSection } from "../components/SkillsSection";
import { StarBackground } from "../components/StarBackground";
import { ProjectsSection } from "../components/ProjectsSection";

function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <ThemeToggle />
      <StarBackground />
      <Navbar />

      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <Experiences />
        <AwardsSection />
        {/* <ContactSection /> */}
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
export default Home;
