import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-4 bg-gradient-card">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Vamos <span className="text-gradient">Conversar</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Estou sempre aberto a novas oportunidades e projetos interessantes. 
            Entre em contato para discutirmos como posso ajudar.
          </p>
        </motion.div>

        <motion.div
          className="glass rounded-2xl p-8 md:p-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="grid md:grid-cols-3 gap-6">
            <a
              href="mailto:contato@rodrigoottoboni.dev"
              className="flex flex-col items-center p-6 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors group"
            >
              <div className="p-4 rounded-full bg-gradient-primary glow-primary mb-4">
                <Mail className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="font-semibold mb-1">Email</h3>
              <p className="text-sm text-muted-foreground text-center">Envie uma mensagem</p>
            </a>

            <a
              href="https://www.linkedin.com/in/rodrigo-neves-ottoboni-dias/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center p-6 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors group"
            >
              <div className="p-4 rounded-full bg-gradient-primary glow-primary mb-4">
                <Linkedin className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="font-semibold mb-1">LinkedIn</h3>
              <p className="text-sm text-muted-foreground text-center">Vamos nos conectar</p>
            </a>

            <a
              href="https://github.com/rodrigo749"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center p-6 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors group"
            >
              <div className="p-4 rounded-full bg-gradient-primary glow-primary mb-4">
                <Github className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="font-semibold mb-1">GitHub</h3>
              <p className="text-sm text-muted-foreground text-center">Veja meus projetos</p>
            </a>
          </div>

          <div className="mt-10 text-center">
            <Button
              size="lg"
              className="bg-gradient-primary hover:opacity-90 transition-opacity glow-primary"
              asChild
            >
              <a href="mailto:contato@rodrigoottoboni.dev">
                <Send className="mr-2 h-4 w-4" />
                Enviar mensagem
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
