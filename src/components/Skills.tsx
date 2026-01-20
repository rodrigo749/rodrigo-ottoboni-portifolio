import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "React", level: 95 },
      { name: "TypeScript", level: 90 },
      { name: "Angular", level: 85 },
      { name: "Redux", level: 88 },
      { name: "HTML5/CSS3", level: 95 },
      { name: "D3.js", level: 75 },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", level: 90 },
      { name: ".NET Core", level: 88 },
      { name: "C#", level: 85 },
      { name: "PHP", level: 80 },
      { name: "REST APIs", level: 92 },
    ],
  },
  {
    title: "Database",
    skills: [
      { name: "SQL Server", level: 88 },
      { name: "PostgreSQL", level: 85 },
      { name: "Oracle", level: 82 },
      { name: "MySQL", level: 85 },
      { name: "PL/SQL", level: 80 },
    ],
  },
  {
    title: "DevOps & Tools",
    skills: [
      { name: "Git", level: 92 },
      { name: "Jira", level: 88 },
      { name: "Azure", level: 75 },
      { name: "Docker", level: 78 },
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 px-4 bg-gradient-card">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Minhas <span className="text-gradient">Tecnologias</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Stack tecnológico diversificado para entregar soluções completas e robustas.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              className="glass rounded-2xl p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
            >
              <h3 className="text-xl font-semibold mb-6 text-primary">{category.title}</h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-secondary rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-primary rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: skillIndex * 0.05 + categoryIndex * 0.1 }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
