import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 px-4 border-t border-border">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Rodrigo Ottoboni Dias. Todos os direitos reservados.
        </p>
        <p className="text-sm text-muted-foreground flex items-center gap-1">
          Feito com <Heart className="h-4 w-4 text-primary fill-primary" /> e React
        </p>
      </div>
    </footer>
  );
};

export default Footer;
