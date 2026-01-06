import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import bloodDonationImg from "@/assets/blood-donation-33ad7.web.app_.png";
import artifyImg from "@/assets/artify-artwork.web.app_.png";
import gameHubImg from "@/assets/game-hub-store.web.app_.png";

const projects = [
  {
    title: "BloodBank",
    description: "A blood donation platform that connects donors with recipients. Features include easy blood requests, real-time updates, verified donors, impact tracking, and blood type matching.",
    tech: ["React", "Firebase", "Tailwind CSS"],
    github: "https://github.com/md-sh-sabbir/blood-donation-client/",
    live: "https://blood-donation-33ad7.web.app/",
    image: bloodDonationImg,
  },
  {
    title: "Artify",
    description: "An artwork gallery and community platform where artists can showcase their work. Features include artwork uploads, community highlights, and digital art workshops.",
    tech: ["React", "Firebase", "Tailwind CSS"],
    github: "https://github.com/md-sh-sabbir/artify-artwork-client/",
    live: "https://artify-artwork.web.app/",
    image: artifyImg,
  },
  {
    title: "GameHub Store",
    description: "A gaming store platform featuring popular games, subscription options, and a modern gaming-themed interface with an immersive user experience.",
    tech: ["React", "Firebase", "Tailwind CSS"],
    github: "https://github.com/md-sh-sabbir/game-hub/",
    live: "https://game-hub-store.web.app/",
    image: gameHubImg,
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="font-mono text-primary text-sm">{"// My Work"}</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">
            Featured <span className="text-gradient">Projects</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative rounded-2xl bg-secondary border border-border hover:border-primary/50 transition-all overflow-hidden"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary to-transparent" />
              </div>

              {/* Project Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      className="text-muted-foreground hover:text-primary transition-colors"
                      aria-label="GitHub"
                    >
                      <Github size={20} />
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                      aria-label="Live Demo"
                    >
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-mono bg-background rounded-full text-primary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
