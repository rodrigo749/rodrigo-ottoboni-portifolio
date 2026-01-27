import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/hooks/useLanguage";
import logoFinal from "@/assets/logo final redonda.jpeg";

// Componente de bandeira do Brasil
const BrazilFlag = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
    <rect fill="#009B3A" width="512" height="512" rx="64"/>
    <polygon fill="#FEDF00" points="256,88 456,256 256,424 56,256"/>
    <circle fill="#002776" cx="256" cy="256" r="88"/>
    <path fill="#FFFFFF" d="M168,248 Q256,208 344,248 Q256,288 168,248" opacity="0.9"/>
  </svg>
);

// Componente de bandeira do Reino Unido
const UKFlag = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
    <rect fill="#012169" width="512" height="512" rx="64"/>
    <path fill="#FFFFFF" d="M0,0 L512,512 M512,0 L0,512" stroke="#FFFFFF" strokeWidth="80"/>
    <path fill="#C8102E" d="M0,0 L512,512 M512,0 L0,512" stroke="#C8102E" strokeWidth="52"/>
    <path fill="#FFFFFF" d="M256,0 V512 M0,256 H512" stroke="#FFFFFF" strokeWidth="100"/>
    <path fill="#C8102E" d="M256,0 V512 M0,256 H512" stroke="#C8102E" strokeWidth="60"/>
  </svg>
);

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const navItems = [
    { label: t.nav.about, href: "#about" },
    { label: t.nav.skills, href: "#skills" },
    { label: t.nav.projects, href: "#projects" },
    { label: t.nav.experience, href: "#experience" },
    { label: t.nav.contact, href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  const toggleLanguage = () => {
    setLanguage(language === "pt" ? "en" : "pt");
  };

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "glass py-4" : "py-6"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <a href="#" className="flex items-center flex-shrink-0">
          <img 
            src={logoFinal} 
            alt="Rodrigo Ottoboni Logo" 
            className="h-10 w-10 rounded-full object-cover"
          />
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center justify-center flex-1 gap-6 mx-8">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => scrollToSection(item.href)}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Right side buttons */}
        <div className="hidden md:flex items-center gap-3 flex-shrink-0">
          <Button
            variant="ghost"
            size="sm"
            onClick={toggleLanguage}
            className="flex items-center gap-2 hover:bg-secondary px-3"
            title={language === "pt" ? "Switch to English" : "Mudar para Português"}
          >
            {language === "pt" ? (
              <UKFlag className="h-5 w-5 rounded-sm" />
            ) : (
              <BrazilFlag className="h-5 w-5 rounded-sm" />
            )}
            <span className="font-medium text-xs">{language === "pt" ? "EN" : "PT"}</span>
          </Button>
          <Button
            size="sm"
            className="bg-gradient-primary hover:opacity-90 transition-opacity"
            onClick={() => scrollToSection("#contact")}
          >
            {t.nav.contact}
          </Button>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center gap-2">
          <Button
            variant="ghost"
            size="sm"
            onClick={toggleLanguage}
            className="flex items-center gap-1 hover:bg-secondary px-2"
            title={language === "pt" ? "Switch to English" : "Mudar para Português"}
          >
            {language === "pt" ? (
              <UKFlag className="h-5 w-5 rounded-sm" />
            ) : (
              <BrazilFlag className="h-5 w-5 rounded-sm" />
            )}
          </Button>
          <button
            className="p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <motion.div
          className="md:hidden glass mt-2 mx-4 rounded-xl p-4"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
        >
          <nav className="flex flex-col gap-4">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className="text-left py-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.label}
              </button>
            ))}
          </nav>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Header;
