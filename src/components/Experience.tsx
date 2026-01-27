import { motion } from "framer-motion";
import { Building2, Calendar } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

const experiences = [
  {
    company: "Senac Minas",
    role: "Docente em Tecnologia da Informação",
    period: "Mar 2025 - Atual",
    description: "Desenvolvimento de plataforma AI-powered de Marketing Analytics-as-a-Service utilizando React, Node.js, TypeScript, PostgreSQL, AWS e Docker. Implementação de arquitetura escalável e integração com múltiplas APIs de marketing.",
    current: true,
  },
  {
    company: "RN Tech solutions",
    role: "Consultor de Software",
    period: "Ago 2017 - Atual",
    description: "Desenvolvimento de plataformas web para aplicações de mortgage utilizando .NET Core 6, Angular 14+, PostgreSQL e Azure DevOps. Implementação de soluções robustas e escaláveis para o setor financeiro.",
    current: true,
  },
  {
    company: "Braszil Sistem",
    role: "Front-end Developer",
    period: "Jan 2024 - Dez 2024",
    description: "Consultoria de desenvolvimento para cliente MEO (Telecom). Trabalho com .NET Core 3.1, Angular 12, SQL Server, Azure e metodologias ágeis (Scrum). Desenvolvimento de soluções enterprise de alta disponibilidade.",
    current: false,
  },
  {
    company: "Quantico Solutions S.A",
    role: "Desenvolvedor Full Stack",
    period: "Jan 2023 - Ago 2023",
    description: "Manutenção e evolução de sistemas WEB utilizando React, .NET Core, SQL Server e Azure DevOps. Implementação de melhorias de performance e novas funcionalidades em sistemas legados.",
    current: false,
  },
    {
    company: "B4A – Beauty For All – Front-end Developer",
    role: "Desenvolvedor Front-end",
    period: "Jan 2021 - Dez 2023",
    description: "Desenvolvimento de soluções ERP de grande escala utilizando .NET Framework, ASP.NET MVC, SQL Server e JavaScript. Experiência com sistemas de alta disponibilidade e integração com múltiplos módulos empresariais.",
    current: false,
  },
  {
    company: "Luby Software",
    role: "Desenvolvedor JavaScript",
    period: "Jan 2021 - Dez 2021",
    description: "Desenvolvimento de soluções ERP de grande escala utilizando .NET Framework, ASP.NET MVC, SQL Server e JavaScript. Experiência com sistemas de alta disponibilidade e integração com múltiplos módulos empresariais.",
    current: false,
  },
    {
    company: "Hospital das Clínicas Samuel Libânio ",
    role: "Programador / Operador de TI|",
    period: "Jan 2019 - Dez 2021",
    description: "Desenvolvimento de soluções ERP de grande escala utilizando .NET Framework, ASP.NET MVC, SQL Server e JavaScript. Experiência com sistemas de alta disponibilidade e integração com múltiplos módulos empresariais.",
    current: false,
  },


];

const Experience = () => {
  const { t } = useLanguage();
  
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
            {t.experience.title} <span className="text-gradient">{t.experience.titleHighlight}</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t.experience.subtitle}
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
