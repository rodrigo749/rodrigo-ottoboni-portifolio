import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Send, Loader2, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { useLanguage } from "@/hooks/useLanguage";
import { db } from "@/lib/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const Contact = () => {
  const [formData, setFormData] = useState<ContactForm>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();
  const { t } = useLanguage();

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: t.contact.form.required,
        description: t.contact.form.requiredDesc,
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      await addDoc(collection(db, "messages"), {
        ...formData,
        createdAt: serverTimestamp(),
        read: false,
      });

      setIsSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
      
      toast({
        title: t.contact.form.success,
        description: t.contact.form.successDesc,
      });

      // Reset success state after 3 seconds
      setTimeout(() => setIsSubmitted(false), 3000);
    } catch (error) {
      console.error("Error sending message:", error);
      toast({
        title: t.contact.form.error,
        description: t.contact.form.errorDesc,
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };
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
            {t.contact.title} <span className="text-gradient">{t.contact.titleHighlight}</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t.contact.subtitle}
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
              <h3 className="font-semibold mb-1">{t.contact.emailLabel}</h3>
              <p className="text-sm text-muted-foreground text-center">{t.contact.emailDesc}</p>
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
              <h3 className="font-semibold mb-1">{t.contact.linkedinLabel}</h3>
              <p className="text-sm text-muted-foreground text-center">{t.contact.linkedinDesc}</p>
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
              <h3 className="font-semibold mb-1">{t.contact.githubLabel}</h3>
              <p className="text-sm text-muted-foreground text-center">{t.contact.githubDesc}</p>
            </a>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="mt-10 space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="name">{t.contact.form.name} *</Label>
                <Input
                  id="name"
                  name="name"
                  placeholder={t.contact.form.namePlaceholder}
                  value={formData.name}
                  onChange={handleInputChange}
                  disabled={isSubmitting}
                  className="bg-secondary/50 border-border"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">{t.contact.form.email} *</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder={t.contact.form.emailPlaceholder}
                  value={formData.email}
                  onChange={handleInputChange}
                  disabled={isSubmitting}
                  className="bg-secondary/50 border-border"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="subject">{t.contact.form.subject}</Label>
              <Input
                id="subject"
                name="subject"
                placeholder={t.contact.form.subjectPlaceholder}
                value={formData.subject}
                onChange={handleInputChange}
                disabled={isSubmitting}
                className="bg-secondary/50 border-border"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">{t.contact.form.message} *</Label>
              <Textarea
                id="message"
                name="message"
                placeholder={t.contact.form.messagePlaceholder}
                rows={5}
                value={formData.message}
                onChange={handleInputChange}
                disabled={isSubmitting}
                className="bg-secondary/50 border-border resize-none"
              />
            </div>

            <div className="text-center">
              <Button
                type="submit"
                size="lg"
                disabled={isSubmitting || isSubmitted}
                className="bg-gradient-primary hover:opacity-90 transition-opacity glow-primary min-w-[200px]"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    {t.contact.form.sending}
                  </>
                ) : isSubmitted ? (
                  <>
                    <CheckCircle className="mr-2 h-4 w-4" />
                    {t.contact.form.sent}
                  </>
                ) : (
                  <>
                    <Send className="mr-2 h-4 w-4" />
                    {t.contact.form.submit}
                  </>
                )}
              </Button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
