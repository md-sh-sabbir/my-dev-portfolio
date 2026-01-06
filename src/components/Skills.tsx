import { motion } from "framer-motion";
import { SiExpress, SiMongodb } from "react-icons/si";
import { FaNodeJs, FaReact } from "react-icons/fa";

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "React.js", level: 95 },
      { name: "Next.js", level: 85 },
      { name: "TypeScript", level: 90 },
      { name: "Tailwind CSS", level: 95 },
      { name: "Redux", level: 85 },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", level: 90 },
      { name: "Express.js", level: 90 },
      { name: "MongoDB", level: 85 },
      { name: "REST APIs", level: 95 },
      { name: "GraphQL", level: 75 },
    ],
  },
  {
    title: "Tools & Others",
    skills: [
      { name: "Git & GitHub", level: 90 },
      { name: "Docker", level: 70 },
      { name: "AWS", level: 65 },
      { name: "Firebase", level: 80 },
      { name: "Jest/Testing", level: 75 },
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="font-mono text-primary text-sm">{"// My Skills"}</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">
            Technologies I <span className="text-gradient">Work With</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              className="p-6 rounded-2xl bg-card border border-border"
            >
              <h3 className="font-mono text-lg font-semibold mb-6 text-primary">
                {`{${category.title}}`}
              </h3>
              <div className="space-y-5">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="text-foreground font-medium">{skill.name}</span>
                      <span className="text-muted-foreground text-sm">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-secondary rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: skillIndex * 0.1 }}
                        className="h-full bg-gradient-primary rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tech Stack Icons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 p-8 rounded-2xl bg-card border border-border"
        >
          <div className="text-center mb-8">
            <span className="font-mono text-primary text-sm">{"// Core Stack"}</span>
            <h3 className="text-2xl font-bold mt-2">The MERN Stack</h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { letter: <div className="flex justify-center">
                <SiMongodb />
              </div>, name: "MongoDB", color: "text-green-500" },
              { letter: <div className="flex justify-center">
                <SiExpress />
              </div>, name: "Express.js", color: "text-gray-400" },
              { letter: <div className="flex justify-center">
                <FaReact />
              </div>, name: "React.js", color: "text-cyan-400" },
              { letter: <div className="flex justify-center">
                <FaNodeJs />
              </div>, name: "Node.js", color: "text-green-400" },
            ].map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="text-center p-6 rounded-xl bg-secondary border border-border hover:border-primary/50 transition-all cursor-default"
              >
                <div className={`text-5xl font-bold font-mono ${tech.color} mb-3`}>
                  {tech.letter}
                </div>
                <div className="text-foreground font-medium">{tech.name}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
