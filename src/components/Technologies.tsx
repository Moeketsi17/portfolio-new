import Image, { type StaticImageData } from "next/image";
import analyticsIcon from "@/images/tech-skills/analytics.png";
import cpanelIcon from "@/images/tech-skills/image9.1a7ea4155764407040ad.png";
import cssIcon from "@/images/tech-skills/image5.081a1d6529f484934099.png";
import djangoIcon from "@/images/tech-skills/image13.e31228fbb0433050ab41.png";
import elementorIcon from "@/images/tech-skills/elementor-1.png";
import expressIcon from "@/images/tech-skills/express.png";
import gitIcon from "@/images/tech-skills/git.png";
import githubIcon from "@/images/tech-skills/github.png";
import htmlIcon from "@/images/tech-skills/download.png";
import javascriptIcon from "@/images/tech-skills/JS.png";
import jqueryIcon from "@/images/tech-skills/image3.101e96ba01cfec8d4d38.png";
import mysqlIcon from "@/images/tech-skills/image11.ee157c6665eb4aca38fe.png";
import nodeIcon from "@/images/tech-skills/node js.png";
import phpIcon from "@/images/tech-skills/php.png";
import pythonIcon from "@/images/tech-skills/image14.3e9587d18983d2035931.png";
import reactIcon from "@/images/tech-skills/react.png";
import tailwindIcon from "@/images/tech-skills/image20.b74493a46dd1b398f33d.png";
import wordpressIcon from "@/images/tech-skills/image10.0aa9aa462a3f3850f3c0.png";

type Technology = {
  name: string;
  icon: StaticImageData;
};

const technologies: Technology[] = [
  { name: "Javascript", icon: javascriptIcon },
  { name: "PHP", icon: phpIcon },
  { name: "React", icon: reactIcon },
  { name: "Elementor", icon: elementorIcon },
  { name: "Google Analytics", icon: analyticsIcon },
  { name: "GitHub", icon: githubIcon },
  { name: "Git", icon: gitIcon },
  { name: "jQuery", icon: jqueryIcon },
  { name: "Node.js", icon: nodeIcon },
  { name: "WordPress", icon: wordpressIcon },
  { name: "cPanel", icon: cpanelIcon },
  { name: "Django Python", icon: djangoIcon },
  { name: "Tailwind CSS", icon: tailwindIcon },
  { name: "Express.js", icon: expressIcon },
  { name: "Python", icon: pythonIcon },
  { name: "MySQL", icon: mysqlIcon },
  { name: "CSS", icon: cssIcon },
  { name: "HTML", icon: htmlIcon },
];

export function Technologies() {
  return (
    <section id="technologies" className="px-4 py-24 sm:px-6 lg:px-8">
      <div className="mb-12 flex w-full items-end justify-between gap-6">
        <h2
          data-scroll-slide
          className="font-display text-[2.7rem] font-semibold uppercase leading-[0.82] sm:text-[4.5rem] lg:text-[6.5rem] xl:text-[8rem]"
        >
          Technologies I work with
        </h2>
      </div>

      <div className="grid grid-cols-2 gap-px  sm:grid-cols-3 lg:grid-cols-6">
        {technologies.map((technology) => (
          <article
            key={technology.name}
            className="flex min-h-24 items-center justify-center bg-background p-3 sm:min-h-28"
          >
            <Image
              src={technology.icon}
              alt={`${technology.name} icon`}
              width={64}
              height={64}
              className="h-14 w-14 object-contain"
            />
          </article>
        ))}
      </div>
    </section>
  );
}
