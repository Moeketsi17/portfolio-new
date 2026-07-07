import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Nav } from "@/components/Nav";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { WorkExperience } from "@/components/WorkExperience";

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <WorkExperience />
      <Contact />
      <Footer />
    </main>
  );
}
