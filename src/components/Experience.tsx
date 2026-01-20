import { motion } from "framer-motion";
import { Building2, Calendar } from "lucide-react";

const experiences = [
  {
    company: "Condati",
    role: "Senior Fullstack Developer",
    period: "Atual",
    description: "Desenvolvimento de plataforma AI-powered de Marketing Analytics-as-a-Service. Stack: React, Node.js, TypeScript.",
    current: true,
  },
  {
    company: "Authority Partners",
    role: "Senior Software Developer",
    period: "Anterior",
    description: "Desenvolvimento de plataformas web para aplicações de mortgage. Foco em .NET Core e Angular.",
    current: false,
  },
  {
    company: "DELLENT Consulting",
    role: "Senior .NET Developer",
    period: "Anterior",
    description: "Consultoria de desenvolvimento de software para cliente MEO. Arquitetura e desenvolvimento de soluções enterprise.",
    current: false,
  },
  {
    company: "ION Sistemas",
    role: "Senior FullStack Developer",
    period: "Anterior",
    description: "Manutenção e evolução dos sistemas WEB da empresa. Stack diversificada incluindo React e .NET.",
    current: false,
  },
  {
    company: "TOTVS",
    role: "FullStack Developer",
    period: "Anterior",
    description: "Desenvolvimento de soluções empresariais de grande escala. Experiência com sistemas de alta disponibilidade.",
    current: false,
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Experiência <span className="text-gradient">Profissional</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Uma trajetória de crescimento e contribuições significativas em empresas de tecnologia.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-border hidden md:block" />

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                className="relative pl-0 md:pl-20"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {/* Timeline dot */}
                <div className="absolute left-6 top-6 w-4 h-4 rounded-full bg-gradient-primary glow-primary hidden md:block" />

                <div className={`glass rounded-2xl p-6 ${exp.current ? "border border-primary/50" : ""}`}>
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-xl font-semibold">{exp.role}</h3>
                      <div className="flex items-center gap-2 text-muted-foreground mt-1">
                        <Building2 className="h-4 w-4" />
                        <span>{exp.company}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Calendar className="h-4 w-4 text-primary" />
                      <span className={exp.current ? "text-primary font-medium" : "text-muted-foreground"}>
                        {exp.period}
                      </span>
                    </div>
                  </div>
                  <p className="text-muted-foreground">{exp.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
