import { motion } from "framer-motion";
import { GraduationCap, Briefcase, MapPin } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

const About = () => {
  const { t } = useLanguage();
  
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
            {t.about.title} <span className="text-gradient">{t.about.titleHighlight}</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t.about.subtitle}
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
                  <h3 className="font-semibold text-lg mb-1">{t.about.location}</h3>
                  <p className="text-muted-foreground">{t.about.locationValue}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-gradient-card border border-border">
                  <Briefcase className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">{t.about.experience}</h3>
                  <p className="text-muted-foreground">{t.about.experienceValue}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-gradient-card border border-border">
                  <GraduationCap className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">{t.about.education}</h3>
                  <p className="text-muted-foreground">
                    {t.about.educationValue}
                    <br />
                    {t.about.educationValue2}
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
                {t.about.bio1}
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                {t.about.bio2}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
