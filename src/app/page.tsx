import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Nav } from "@/components/Nav";
import { Projects } from "@/components/Projects";
import { ScrollSlide } from "@/components/ScrollSlide";
import { Skills } from "@/components/Skills";
import { Technologies } from "@/components/Technologies";
import { WorkExperience } from "@/components/WorkExperience";

export default function Home() {
  return (
    <main>
      <ScrollSlide />
      <Nav />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <WorkExperience />
      <Technologies />
      <Contact />
      <Footer />
    </main>
  );
}
