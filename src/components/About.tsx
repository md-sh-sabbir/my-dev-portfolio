import { motion } from "framer-motion";
import { Code2, Coffee, Rocket, Users } from "lucide-react";

const stats = [
  { icon: Code2, value: "50+", label: "Projects Completed" },
  { icon: Coffee, value: "1000+", label: "Cups of Coffee" },
  { icon: Users, value: "30+", label: "Happy Clients" },
  { icon: Rocket, value: "3+", label: "Years Experience" },
];

const About = () => {
  return (
    <section id="about" className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="font-mono text-primary text-sm">{"// About Me"}</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">
            Passionate Developer, <span className="text-gradient">Problem Solver</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              <div className="w-full aspect-square max-w-md mx-auto rounded-2xl bg-gradient-primary p-1">
                <div className="w-full h-full rounded-2xl bg-card flex items-center justify-center">
                  <div className="font-mono text-6xl text-gradient">{"</>"}</div>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-primary rounded-2xl opacity-20 blur-2xl" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <p className="text-muted-foreground text-lg leading-relaxed">
              Hello! I'm <span className="text-foreground font-semibold">Md. Sabbir Hossain</span>, a passionate MERN Stack Developer based in Bangladesh. I specialize in building robust, scalable web applications that deliver exceptional user experiences.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              With expertise in MongoDB, Express.js, React, and Node.js, I transform ideas into functional, beautiful digital products. I'm constantly learning and staying up-to-date with the latest technologies to deliver cutting-edge solutions.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or enjoying a good cup of coffee while brainstorming the next big idea.
            </p>

            <div className="pt-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-primary font-mono hover:underline"
              >
                Let's work together →
              </a>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20"
        >
          {stats.map(({ icon: Icon, value, label }, index) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="text-center p-6 rounded-2xl bg-secondary border border-border hover:border-primary/50 transition-colors"
            >
              <Icon className="w-8 h-8 text-primary mx-auto mb-3" />
              <div className="text-3xl font-bold text-foreground mb-1">{value}</div>
              <div className="text-sm text-muted-foreground">{label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
