import { motion } from "framer-motion";
import { GraduationCap, Briefcase, MapPin } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Sobre <span className="text-gradient">Mim</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Apaixonado por tecnologia e desenvolvimento de software, com foco em criar soluções elegantes e eficientes.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-gradient-card border border-border">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Localização</h3>
                  <p className="text-muted-foreground">Brasil</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-gradient-card border border-border">
                  <Briefcase className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Experiência</h3>
                  <p className="text-muted-foreground">+10 anos em desenvolvimento de software</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-gradient-card border border-border">
                  <GraduationCap className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Formação</h3>
                  <p className="text-muted-foreground">
                    Sistemas de Informação - PUC Minas
                    <br />
                    Pós-graduação em Full Stack Web Dev
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="glass rounded-2xl p-8">
              <p className="text-muted-foreground leading-relaxed mb-4">
                Sou um desenvolvedor Full Stack Senior com sólida experiência em desenvolvimento web, 
                tendo trabalhado em diversos setores como Fintech, Marketing Analytics e Telecom.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Ao longo da minha carreira, contribuí para o desenvolvimento de plataformas 
                AI-powered, sistemas de mortgage, e soluções empresariais de grande escala.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Minha paixão está em criar código limpo, escalável e em aprender constantemente 
                novas tecnologias para entregar as melhores soluções possíveis.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
