import { motion } from "framer-motion";
import { GraduationCap, Calendar, MapPin } from "lucide-react";

const education = [
  {
    degree: "Bachelor of Science in Computer Science & Engineering",
    institution: "City University",
    location: "Dhaka, Bangladesh",
    period: "2022 - 2025",
    description: "Focused on software engineering, algorithms, and web development. Participated in various coding competitions and hackathons.",
  },
  {
    degree: "Higher Secondary Certificate (HSC)",
    institution: "Govt. Bangla College",
    location: "Dhaka, Bangladesh",
    period: "2017 - 2019",
    description: "Science group with focus on Mathematics and Physics. Achieved GPA 4.00.",
  },
  {
    degree: "Secondary School Certificate (SSC)",
    institution: "Armanitola Govt. High School",
    location: "Dhaka, Bangladesh",
    period: "2015 - 2016",
    description: "Science group with excellent academic performance. Achieved GPA 5.00.",
  },
];

const Education = () => {
  return (
    <section id="education" className="py-20 px-4 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-primary">&lt;</span>
            Education
            <span className="text-primary">/&gt;</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My academic journey and qualifications
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-primary/30" />

          <div className="space-y-12">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`relative flex flex-col md:flex-row ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } items-start md:items-center gap-8`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background z-10" />

                {/* Content */}
                <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                  <div className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-colors">
                    <div className={`flex items-center gap-2 text-primary mb-2 ${index % 2 === 0 ? "md:justify-end" : ""}`}>
                      <GraduationCap className="w-5 h-5" />
                      <span className="font-mono text-sm">{edu.period}</span>
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      {edu.degree}
                    </h3>
                    <p className="text-primary font-medium mb-2">{edu.institution}</p>
                    <div className={`flex items-center gap-1 text-muted-foreground text-sm mb-3 ${index % 2 === 0 ? "md:justify-end" : ""}`}>
                      <MapPin className="w-4 h-4" />
                      <span>{edu.location}</span>
                    </div>
                    <p className="text-muted-foreground text-sm">{edu.description}</p>
                  </div>
                </div>

                {/* Empty space for alternating layout */}
                <div className="hidden md:block md:w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
