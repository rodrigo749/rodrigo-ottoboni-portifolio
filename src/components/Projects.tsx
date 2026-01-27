import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/hooks/useLanguage";

import projectAnalytics from "@/assets/project-analytics.jpg";
import projectFintech from "@/assets/project-fintech.jpg";
import projectTelecom from "@/assets/project-telecom.jpg";
import projectEcommerce from "@/assets/project-ecommerce.jpg";

const Projects = () => {
  const { t } = useLanguage();
  
  const projects = [
    {
      title: "AI Marketing Analytics Platform",
      description: t.projects.descriptions.analytics,
      image: projectAnalytics,
      technologies: ["React", "TypeScript", "Node.js", "D3.js", "PostgreSQL"],
      liveUrl: "#",
      githubUrl: null,
      featured: true,
    },
    {
      title: "Mortgage Application Platform",
      description: t.projects.descriptions.mortgage,
      image: projectFintech,
      technologies: [".NET Core", "Angular", "SQL Server", "Azure"],
      liveUrl: "#",
      githubUrl: null,
      featured: true,
    },
    {
      title: "Telecom Management System",
      description: t.projects.descriptions.telecom,
      image: projectTelecom,
      technologies: ["C#", "ASP.NET", "Oracle", "React"],
      liveUrl: "#",
      githubUrl: null,
      featured: false,
    },
    {
      title: "E-commerce Admin Dashboard",
      description: t.projects.descriptions.ecommerce,
      image: projectEcommerce,
      technologies: ["React", "Redux", "Node.js", "MySQL"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false,
    },
  ];

  return (
    <section id="projects" className="py-24 px-4 bg-gradient-card">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t.projects.title} <span className="text-gradient">{t.projects.titleHighlight}</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t.projects.subtitle}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className={`group relative glass rounded-2xl overflow-hidden ${
                project.featured ? "md:col-span-1" : ""
              }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Image */}
              <div className="relative h-48 md:h-56 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-60" />
                
                {/* Featured badge */}
                {project.featured && (
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 text-xs font-medium bg-gradient-primary text-primary-foreground rounded-full">
                      {t.projects.featured}
                    </span>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-medium bg-secondary text-secondary-foreground rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex items-center gap-3">
                  <Button
                    size="sm"
                    className="bg-gradient-primary hover:opacity-90 transition-opacity"
                    asChild
                  >
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      {t.projects.viewProject}
                    </a>
                  </Button>
                  
                  {project.githubUrl && (
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-border hover:bg-secondary"
                      asChild
                    >
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        {t.projects.viewCode}
                      </a>
                    </Button>
                  )}
                </div>
              </div>

              {/* Hover glow effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-purple-500/5" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* View more */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Button
            variant="outline"
            size="lg"
            className="border-border hover:bg-secondary group"
            asChild
          >
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              {t.projects.viewMore}
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
